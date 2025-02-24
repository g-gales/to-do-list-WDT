import { initializeApp } from "firebase/app";
import {
  doc,
  getDocs,
  addDoc,
  updateDoc,
  getFirestore,
  collection,
} from "firebase/firestore";
import log from "loglevel";
import { GoogleGenerativeAI } from "@google/generative-ai";

/*
ToC
Variables - Line 24
PWA & Service Worker - Line 37
Firebase - Line 55
Chatbot - Line 112
Renders - Line 167
Accessibilities - Line 213
Sanitization, Errors & Logging - Line 231
*/

//Variables
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

const aiButton = document.getElementById("send-btn");
const aiInput = document.getElementById("chat-input");
const chatHistory = document.getElementById("chat-history");

var apiKey;
var genAI;
var model;

//Service Worker Registration
const sw = new URL("service-worker.js", import.meta.url);
if ("serviceWorker" in navigator) {
  const s = navigator.serviceWorker;
  s.register(sw.href, {
    scope: "/to-do-list-WDT/",
  })
    .then((_) =>
      console.log(
        "Service Worker Registered for scope:",
        sw.href,
        "with",
        import.meta.url
      )
    )
    .catch((err) => console.error("Service Worker Error:", err));
}

//Firebase
//Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB1N9TPlje8RLoAJ3tw1KYhLFPNzPjmSek",
  authDomain: "to-do-list-b38bb.firebaseapp.com",
  projectId: "to-do-list-b38bb",
  storageBucket: "to-do-list-b38bb.firebasestorage.app",
  messagingSenderId: "888686096748",
  appId: "1:888686096748:web:310398537a2426e9ce8349",
  measurementId: "G-K3JDFXK9C8",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//Add data to Firebase
async function addTaskToFirestore(taskText) {
  await addDoc(collection(db, "todos"), {
    text: taskText,
    completed: false,
  });
}

//Fetch tasks from Firestore when app loads
async function getTasksFromFirestore() {
  var data = await getDocs(collection(db, "todos"));
  let userData = [];
  data.forEach((doc) => {
    userData.push(doc);
  });
  return userData;
}

//Render tasks
async function renderTasks() {
  var tasks = await getTasksFromFirestore();
  taskList.innerHTML = "";

  tasks.forEach((task) => {
    if (!task.data().completed) {
      const taskItem = document.createElement("li");
      taskItem.id = task.id;
      taskItem.textContent = task.data().text;
      taskItem.tabIndex = 0;
      taskList.appendChild(taskItem);
    }
  });
}

//Chatbot
//Call in the event listener for page load
async function getApiKey() {
  let snapshot = await getDoc(doc(db, "apikey", "googlegenai"));
  apiKey = snapshot.data().key;
  genAI = new GoogleGenerativeAI(apiKey);
  model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
}

//Trigger response
async function askChatBot(request) {
  return await model.generateContent(request);
}

//Rules for chatbot response
function ruleChatBot(request) {
  if (request.startsWith("add task")) {
    let task = request.replace("add task", "").trim();
    if (task) {
      addTask(task);
      appendMessage("Task " + task + " added!");
    } else {
      appendMessage("Please specify a task to add.");
    }
    return true;
  } else if (request.startsWith("complete")) {
    let taskName = request.replace("complete", "").trim();
    if (taskName) {
      if (removeFromTaskName(taskName)) {
        appendMessage("Task " + taskName + " marked as complete.");
      } else {
        appendMessage("Task not found!");
      }
    } else {
      appendMessage("Please specify a task to complete.");
    }
    return true;
  }

  return false;
}

//Add functionality to chatbot button
aiButton.addEventListener("click", async () => {
  let prompt = aiInput.value.trim().toLowerCase();
  if (prompt) {
    if (!ruleChatBot(prompt)) {
      askChatBot(prompt);
    }
  } else {
    appendMessage("Please enter a prompt");
  }
});

//Display chatbot messages
function appendMessage(message) {
  let history = document.createElement("div");
  history.textContent = message;
  history.className = "history";
  chatHistory.appendChild(history);
  aiInput.value = "";
}

//Tasklists
//Add Task
addTaskBtn.addEventListener("click", async () => {
  const task = taskInput.value.trim();
  if (task) {
    const taskText = sanitizeInput(taskInput.value.trim());

    if (taskText) {
      await addTaskToFirestore(taskText);
      renderTasks();
      taskInput.value = "";
    }
    renderTasks();
  } else {
    alert("Please enter a task!");
  }
});

//Remove Tasks for chatbot
function removeFromTaskName(task) {
  let ele = document.getElementsByName(task);
  if (ele.length == 0) {
    return false;
  }
  ele.forEach((e) => {
    removeTask(e.id);
    removeVisualTask(e.id);
  });
  return true;
}

// Remove Task -- removes from firebase, then calls renderTasks which pulls firebase stored data
taskList.addEventListener("click", async (e) => {
  if (e.target.tagName === "LI") {
    await updateDoc(doc(db, "todos", e.target.id), {
      completed: true,
    });
  }
  renderTasks();
});

// Add Tasks on page load
window.addEventListener("load", () => {
  renderTasks();
});

//Accessibility
//Enter key to add tasks
taskInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addTaskBtn.click();
  }
});

//Update Firebase on enter
taskList.addEventListener("keypress", async function (e) {
  if (e.target.tagName === "LI" && e.key === "Enter") {
    await updateDoc(doc(db, "todos", e.target.id), {
      completed: true,
    });
  }
  renderTasks();
});

//Sanitize Data
function sanitizeInput(input) {
  const div = document.createElement("div");
  div.textContent = input;
  return div.innerHTML;
}

//Error Handling and Logging
window.addEventListener("error", function (event) {
  console.error("Error occurred: ", event.message);
});

// Set the log level (trace, debug, info, warn, error)
log.setLevel("info");

// Example logs
// log.info("Application started");
// log.debug("Debugging information");
// log.error("An error occurred");
