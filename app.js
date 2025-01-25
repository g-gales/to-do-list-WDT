import { initializeApp } from "firebase/app";
import {
  doc,
  getDocs,
  addDoc,
  updateDoc,
  getFirestore,
  collection,
} from "firebase/firestore";

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

// Add Task
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", async () => {
  const task = taskInput.value.trim();
  if (task) {
    const taskInput = document.getElementById("taskInput");
    const taskText = sanitizeInput(taskInput.value.trim());

    if (taskText) {
      await addTaskToFirestore(taskText);
      renderTasks();
      taskInput.value = "";
    }
    renderTasks();
  }
});

async function addTaskToFirestore(taskText) {
  await addDoc(collection(db, "todos"), {
    text: taskText,
    completed: false,
  });
}

//Fetch tasks from Firestore when app loads
async function renderTasks() {
  var tasks = await getTasksFromFirestore();
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    if (!task.data().completed) {
      const taskItem = document.createElement("li");
      taskItem.id = task.id;
      taskItem.textContent = task.data().text;
      taskList.appendChild(taskItem);
    }
  });
}

async function getTasksFromFirestore() {
  var data = await getDocs(collection(db, "todos"));
  let userData = [];
  data.forEach((doc) => {
    userData.push(doc);
  });
  return userData;
}

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
