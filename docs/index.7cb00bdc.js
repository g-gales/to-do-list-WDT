let e,t,r;var n,i,s,a,o,l,h,u,c,f,d,p,g,m,y,v,w,b,E,_,T,S,C,I=globalThis,x={},A={},D=I.parcelRequire94c2;null==D&&((D=function(e){if(e in x)return x[e].exports;if(e in A){var t=A[e];delete A[e];var r={id:e,exports:{}};return x[e]=r,t.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){A[e]=t},I.parcelRequire94c2=D),(0,D.register)("27Lyk",function(e,t){Object.defineProperty(e.exports,"register",{get:()=>r,set:e=>r=e,enumerable:!0,configurable:!0});var r,n=new Map;r=function(e,t){for(var r=0;r<t.length-1;r+=2)n.set(t[r],{baseUrl:e,path:t[r+1]})}}),D("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["7Gx3W","index.7cb00bdc.js","LVq70","service-worker.cc0991b9.js"]'));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var k={},N=k={};function R(){throw Error("setTimeout has not been defined")}function L(){throw Error("clearTimeout has not been defined")}function O(e){if(i===setTimeout)return setTimeout(e,0);if((i===R||!i)&&setTimeout)return i=setTimeout,setTimeout(e,0);try{return i(e,0)}catch(t){try{return i.call(null,e,0)}catch(t){return i.call(this,e,0)}}}!function(){try{i="function"==typeof setTimeout?setTimeout:R}catch(e){i=R}try{s="function"==typeof clearTimeout?clearTimeout:L}catch(e){s=L}}();var M=[],P=!1,V=-1;function U(){P&&a&&(P=!1,a.length?M=a.concat(M):V=-1,M.length&&F())}function F(){if(!P){var e=O(U);P=!0;for(var t=M.length;t;){for(a=M,M=[];++V<t;)a&&a[V].run();V=-1,t=M.length}a=null,P=!1,function(e){if(s===clearTimeout)return clearTimeout(e);if((s===L||!s)&&clearTimeout)return s=clearTimeout,clearTimeout(e);try{s(e)}catch(t){try{return s.call(null,e)}catch(t){return s.call(this,e)}}}(e)}}function B(e,t){this.fun=e,this.array=t}function j(){}N.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];M.push(new B(e,t)),1!==M.length||P||O(F)},B.prototype.run=function(){this.fun.apply(null,this.array)},N.title="browser",N.browser=!0,N.env={},N.argv=[],N.version="",N.versions={},N.on=j,N.addListener=j,N.once=j,N.off=j,N.removeListener=j,N.removeAllListeners=j,N.emit=j,N.prependListener=j,N.prependOnceListener=j,N.listeners=function(e){return[]},N.binding=function(e){throw Error("process.binding is not supported")},N.cwd=function(){return"/"},N.chdir=function(e){throw Error("process.chdir is not supported")},N.umask=function(){return 0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q=function(e){let t=[],r=0;for(let n=0;n<e.length;n++){let i=e.charCodeAt(n);i<128?t[r++]=i:(i<2048?t[r++]=i>>6|192:((64512&i)==55296&&n+1<e.length&&(64512&e.charCodeAt(n+1))==56320?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++n)),t[r++]=i>>18|240,t[r++]=i>>12&63|128):t[r++]=i>>12|224,t[r++]=i>>6&63|128),t[r++]=63&i|128)}return t},z=function(e){let t=[],r=0,n=0;for(;r<e.length;){let i=e[r++];if(i<128)t[n++]=String.fromCharCode(i);else if(i>191&&i<224){let s=e[r++];t[n++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){let s=((7&i)<<18|(63&e[r++])<<12|(63&e[r++])<<6|63&e[r++])-65536;t[n++]=String.fromCharCode(55296+(s>>10)),t[n++]=String.fromCharCode(56320+(1023&s))}else{let s=e[r++],a=e[r++];t[n++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&a)}}return t.join("")},$={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let t=0;t<e.length;t+=3){let i=e[t],s=t+1<e.length,a=s?e[t+1]:0,o=t+2<e.length,l=o?e[t+2]:0,h=i>>2,u=(3&i)<<4|a>>4,c=(15&a)<<2|l>>6,f=63&l;o||(f=64,s||(c=64)),n.push(r[h],r[u],r[c],r[f])}return n.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(q(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):z(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();let r=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let t=0;t<e.length;){let i=r[e.charAt(t++)],s=t<e.length?r[e.charAt(t)]:0,a=++t<e.length?r[e.charAt(t)]:64,o=++t<e.length?r[e.charAt(t)]:64;if(++t,null==i||null==s||null==a||null==o)throw new K;let l=i<<2|s>>4;if(n.push(l),64!==a){let e=s<<4&240|a>>2;if(n.push(e),64!==o){let e=a<<6&192|o;n.push(e)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class K extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const G=function(e){let t=q(e);return $.encodeByteArray(t,!0)},H=function(e){return G(e).replace(/\./g,"")},Q=function(e){try{return $.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null},W=()=>/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==I)return I;throw Error("Unable to locate global object.")})().__FIREBASE_DEFAULTS__,X=()=>{if(void 0===k||void 0===k.env)return;let e=void 0;if(e)return JSON.parse(e)},Y=()=>{let e;if("undefined"==typeof document)return;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}let t=e&&Q(e[1]);return t&&JSON.parse(t)},J=()=>{try{return W()||X()||Y()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Z=e=>{var t,r;return null===(r=null===(t=J())||void 0===t?void 0:t.emulatorHosts)||void 0===r?void 0:r[e]},ee=e=>{let t=Z(e);if(!t)return;let r=t.lastIndexOf(":");if(r<=0||r+1===t.length)throw Error(`Invalid host ${t} with no separate hostname and port!`);let n=parseInt(t.substring(r+1),10);return"["===t[0]?[t.substring(1,r-1),n]:[t.substring(0,r),n]},et=()=>{var e;return null===(e=J())||void 0===e?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,r))}}}class en extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name="FirebaseError",Object.setPrototypeOf(this,en.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ei.prototype.create)}}class ei{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){let r=t[0]||{},n=`${this.service}/${e}`,i=this.errors[e],s=i?i.replace(es,(e,t)=>{let n=r[t];return null!=n?String(n):`<${t}?>`}):"Error",a=`${this.serviceName}: ${s} (${n}).`;return new en(n,a,r)}}const es=/\{\$([^}]+)}/g;function ea(e,t){if(e===t)return!0;let r=Object.keys(e),n=Object.keys(t);for(let i of r){if(!n.includes(i))return!1;let r=e[i],s=t[i];if(eo(r)&&eo(s)){if(!ea(r,s))return!1}else if(r!==s)return!1}for(let e of n)if(!r.includes(e))return!1;return!0}function eo(e){return null!==e&&"object"==typeof e}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function el(e){return e&&e._delegate?e._delegate:e}class eh{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eu="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let e=new er;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{let r=this.getOrInitializeService({instanceIdentifier:t});r&&e.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let r=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),n=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(e){if(n)return null;throw e}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if("EAGER"===e.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:eu})}catch(e){}for(let[e,t]of this.instancesDeferred.entries()){let r=this.normalizeInstanceIdentifier(e);try{let e=this.getOrInitializeService({instanceIdentifier:r});t.resolve(e)}catch(e){}}}}clearInstance(e=eu){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=eu){return this.instances.has(e)}getOptions(e=eu){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let n=this.getOrInitializeService({instanceIdentifier:r,options:t});for(let[e,t]of this.instancesDeferred.entries())r===this.normalizeInstanceIdentifier(e)&&t.resolve(n);return n}onInit(e,t){var r;let n=this.normalizeInstanceIdentifier(t),i=null!==(r=this.onInitCallbacks.get(n))&&void 0!==r?r:new Set;i.add(e),this.onInitCallbacks.set(n,i);let s=this.instances.get(n);return s&&e(s,n),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){let r=this.onInitCallbacks.get(t);if(r)for(let n of r)try{n(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:e===eu?void 0:e,options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch(e){}return r||null}normalizeInstanceIdentifier(e=eu){return this.component?this.component.multipleInstances?e:eu:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new ec(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ed=[];(n=o||(o={}))[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT";const ep={debug:o.DEBUG,verbose:o.VERBOSE,info:o.INFO,warn:o.WARN,error:o.ERROR,silent:o.SILENT},eg=o.INFO,em={[o.DEBUG]:"log",[o.VERBOSE]:"log",[o.INFO]:"info",[o.WARN]:"warn",[o.ERROR]:"error"},ey=(e,t,...r)=>{if(t<e.logLevel)return;let n=new Date().toISOString(),i=em[t];if(i)console[i](`[${n}]  ${e.name}:`,...r);else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class ev{constructor(e){this.name=e,this._logLevel=eg,this._logHandler=ey,this._userLogHandler=null,ed.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in o))throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?ep[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,o.DEBUG,...e),this._logHandler(this,o.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,o.VERBOSE,...e),this._logHandler(this,o.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,o.INFO,...e),this._logHandler(this,o.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,o.WARN,...e),this._logHandler(this,o.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,o.ERROR,...e),this._logHandler(this,o.ERROR,...e)}}const ew=(e,t)=>t.some(t=>e instanceof t),eb=new WeakMap,eE=new WeakMap,e_=new WeakMap,eT=new WeakMap,eS=new WeakMap;let eC={get(e,t,r){if(e instanceof IDBTransaction){if("done"===t)return eE.get(e);if("objectStoreNames"===t)return e.objectStoreNames||e_.get(e);if("store"===t)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return eI(e[t])},set:(e,t,r)=>(e[t]=r,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function eI(r){var n;if(r instanceof IDBRequest)return function(e){let t=new Promise((t,r)=>{let n=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(eI(e.result)),n()},s=()=>{r(e.error),n()};e.addEventListener("success",i),e.addEventListener("error",s)});return t.then(t=>{t instanceof IDBCursor&&eb.set(t,e)}).catch(()=>{}),eS.set(t,e),t}(r);if(eT.has(r))return eT.get(r);let i="function"==typeof(n=r)?n!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(t||(t=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(n)?function(...e){return n.apply(ex(this),e),eI(eb.get(this))}:function(...e){return eI(n.apply(ex(this),e))}:function(e,...t){let r=n.call(ex(this),e,...t);return e_.set(r,e.sort?e.sort():[e]),eI(r)}:(n instanceof IDBTransaction&&function(e){if(eE.has(e))return;let t=new Promise((t,r)=>{let n=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),n()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)});eE.set(e,t)}(n),ew(n,e||(e=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(n,eC):n;return i!==r&&(eT.set(r,i),eS.set(i,r)),i}const ex=e=>eS.get(e),eA=["get","getKey","getAll","getAllKeys","count"],eD=["put","add","delete","clear"],ek=new Map;function eN(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(ek.get(t))return ek.get(t);let r=t.replace(/FromIndex$/,""),n=t!==r,i=eD.includes(r);if(!(r in(n?IDBIndex:IDBObjectStore).prototype)||!(i||eA.includes(r)))return;let s=async function(e,...t){let s=this.transaction(e,i?"readwrite":"readonly"),a=s.store;return n&&(a=a.index(t.shift())),(await Promise.all([a[r](...t),i&&s.done]))[0]};return ek.set(t,s),s}eC={...r=eC,get:(e,t,n)=>eN(e,t)||r.get(e,t,n),has:(e,t)=>!!eN(e,t)||r.has(e,t)};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(!function(e){let t=e.getComponent();return(null==t?void 0:t.type)==="VERSION"}(e))return null;{let t=e.getImmediate();return`${t.library}/${t.version}`}}).filter(e=>e).join(" ")}}const eL="@firebase/app",eO="0.10.18",eM=new ev("@firebase/app"),eP="[DEFAULT]",eV={[eL]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/data-connect":"fire-data-connect","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","@firebase/vertexai":"fire-vertex","fire-js":"fire-js",firebase:"fire-js-all"},eU=new Map,eF=new Map,eB=new Map;function ej(e,t){try{e.container.addComponent(t)}catch(r){eM.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,r)}}function eq(e){let t=e.name;if(eB.has(t))return eM.debug(`There were multiple attempts to register component ${t}.`),!1;for(let r of(eB.set(t,e),eU.values()))ej(r,e);for(let t of eF.values())ej(t,e);return!0}const ez=new ei("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e${constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new eh("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ez.create("app-deleted",{appName:this._name})}}function eK(e,t={}){let r=e;"object"!=typeof t&&(t={name:t});let n=Object.assign({name:eP,automaticDataCollectionEnabled:!1},t),i=n.name;if("string"!=typeof i||!i)throw ez.create("bad-app-name",{appName:String(i)});if(r||(r=et()),!r)throw ez.create("no-options");let s=eU.get(i);if(s){if(ea(r,s.options)&&ea(n,s.config))return s;throw ez.create("duplicate-app",{appName:i})}let a=new ef(i);for(let e of eB.values())a.addComponent(e);let o=new e$(r,n,a);return eU.set(i,o),o}function eG(e,t,r){var n;let i=null!==(n=eV[e])&&void 0!==n?n:e;r&&(i+=`-${r}`);let s=i.match(/\s|\//),a=t.match(/\s|\//);if(s||a){let e=[`Unable to register library "${i}" with version "${t}":`];s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),eM.warn(e.join(" "));return}eq(new eh(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}const eH="firebase-heartbeat-store";let eQ=null;function eW(){return eQ||(eQ=(function(e,t,{blocked:r,upgrade:n,blocking:i,terminated:s}={}){let a=indexedDB.open(e,1),o=eI(a);return n&&a.addEventListener("upgradeneeded",e=>{n(eI(a.result),e.oldVersion,e.newVersion,eI(a.transaction),e)}),r&&a.addEventListener("blocked",e=>r(e.oldVersion,e.newVersion,e)),o.then(e=>{s&&e.addEventListener("close",()=>s()),i&&e.addEventListener("versionchange",e=>i(e.oldVersion,e.newVersion,e))}).catch(()=>{}),o})("firebase-heartbeat-database",0,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(eH)}catch(e){console.warn(e)}}}).catch(e=>{throw ez.create("idb-open",{originalErrorMessage:e.message})})),eQ}async function eX(e){try{let t=(await eW()).transaction(eH),r=await t.objectStore(eH).get(eJ(e));return await t.done,r}catch(e){if(e instanceof en)eM.warn(e.message);else{let t=ez.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});eM.warn(t.message)}}}async function eY(e,t){try{let r=(await eW()).transaction(eH,"readwrite"),n=r.objectStore(eH);await n.put(t,eJ(e)),await r.done}catch(e){if(e instanceof en)eM.warn(e.message);else{let t=ez.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});eM.warn(t.message)}}}function eJ(e){return`${e.name}!${e.options.appId}`}class eZ{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new e1(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){var e,t;try{let r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),n=e0();if((null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(e=>e.date===n))return;return this._heartbeatsCache.heartbeats.push({date:n,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{let t=new Date(e.date).valueOf();return Date.now()-t<=2592e6}),this._storage.overwrite(this._heartbeatsCache)}catch(e){eM.warn(e)}}async getHeartbeatsHeader(){var e;try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)==null||0===this._heartbeatsCache.heartbeats.length)return"";let t=e0(),{heartbeatsToSend:r,unsentEntries:n}=function(e,t=1024){let r=[],n=e.slice();for(let i of e){let e=r.find(e=>e.agent===i.agent);if(e){if(e.dates.push(i.date),e2(r)>t){e.dates.pop();break}}else if(r.push({agent:i.agent,dates:[i.date]}),e2(r)>t){r.pop();break}n=n.slice(1)}return{heartbeatsToSend:r,unsentEntries:n}}(this._heartbeatsCache.heartbeats),i=H(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(e){return eM.warn(e),""}}}function e0(){return new Date().toISOString().substring(0,10)}class e1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!function(){try{return"object"==typeof indexedDB}catch(e){return!1}}()&&new Promise((e,t)=>{try{let r=!0,n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),r||self.indexedDB.deleteDatabase(n),e(!0)},i.onupgradeneeded=()=>{r=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}).then(()=>!0).catch(()=>!1)}async read(){if(!await this._canUseIndexedDBPromise)return{heartbeats:[]};{let e=await eX(this.app);return(null==e?void 0:e.heartbeats)?e:{heartbeats:[]}}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){let r=await this.read();return eY(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){let r=await this.read();return eY(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}}}function e2(e){return H(JSON.stringify({version:2,heartbeats:e})).length}eq(new eh("platform-logger",e=>new eR(e),"PRIVATE")),eq(new eh("heartbeat",e=>new eZ(e),"PRIVATE")),eG(eL,eO,""),eG(eL,eO,"esm2017"),eG("fire-js",""),/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */eG("firebase","11.2.0","app");var e6="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==I?I:"undefined"!=typeof self?self:{},e3={};(function(){function e(){this.blockSize=-1,this.blockSize=64,this.g=[,,,,],this.B=Array(this.blockSize),this.o=this.h=0,this.s()}function t(e,t,r){r||(r=0);var n=Array(16);if("string"==typeof t)for(var i=0;16>i;++i)n[i]=t.charCodeAt(r++)|t.charCodeAt(r++)<<8|t.charCodeAt(r++)<<16|t.charCodeAt(r++)<<24;else for(i=0;16>i;++i)n[i]=t[r++]|t[r++]<<8|t[r++]<<16|t[r++]<<24;t=e.g[0],r=e.g[1],i=e.g[2];var s=e.g[3],a=t+(s^r&(i^s))+n[0]+0xd76aa478&0xffffffff;a=s+(i^(t=r+(a<<7&0xffffffff|a>>>25))&(r^i))+n[1]+0xe8c7b756&0xffffffff,a=i+(r^(s=t+(a<<12&0xffffffff|a>>>20))&(t^r))+n[2]+0x242070db&0xffffffff,a=r+(t^(i=s+(a<<17&0xffffffff|a>>>15))&(s^t))+n[3]+0xc1bdceee&0xffffffff,a=t+(s^(r=i+(a<<22&0xffffffff|a>>>10))&(i^s))+n[4]+0xf57c0faf&0xffffffff,a=s+(i^(t=r+(a<<7&0xffffffff|a>>>25))&(r^i))+n[5]+0x4787c62a&0xffffffff,a=i+(r^(s=t+(a<<12&0xffffffff|a>>>20))&(t^r))+n[6]+0xa8304613&0xffffffff,a=r+(t^(i=s+(a<<17&0xffffffff|a>>>15))&(s^t))+n[7]+0xfd469501&0xffffffff,a=t+(s^(r=i+(a<<22&0xffffffff|a>>>10))&(i^s))+n[8]+0x698098d8&0xffffffff,a=s+(i^(t=r+(a<<7&0xffffffff|a>>>25))&(r^i))+n[9]+0x8b44f7af&0xffffffff,a=i+(r^(s=t+(a<<12&0xffffffff|a>>>20))&(t^r))+n[10]+0xffff5bb1&0xffffffff,a=r+(t^(i=s+(a<<17&0xffffffff|a>>>15))&(s^t))+n[11]+0x895cd7be&0xffffffff,a=t+(s^(r=i+(a<<22&0xffffffff|a>>>10))&(i^s))+n[12]+0x6b901122&0xffffffff,a=s+(i^(t=r+(a<<7&0xffffffff|a>>>25))&(r^i))+n[13]+0xfd987193&0xffffffff,a=i+(r^(s=t+(a<<12&0xffffffff|a>>>20))&(t^r))+n[14]+0xa679438e&0xffffffff,a=r+(t^(i=s+(a<<17&0xffffffff|a>>>15))&(s^t))+n[15]+0x49b40821&0xffffffff,r=i+(a<<22&0xffffffff|a>>>10),a=t+(i^s&(r^i))+n[1]+0xf61e2562&0xffffffff,t=r+(a<<5&0xffffffff|a>>>27),a=s+(r^i&(t^r))+n[6]+0xc040b340&0xffffffff,s=t+(a<<9&0xffffffff|a>>>23),a=i+(t^r&(s^t))+n[11]+0x265e5a51&0xffffffff,i=s+(a<<14&0xffffffff|a>>>18),a=r+(s^t&(i^s))+n[0]+0xe9b6c7aa&0xffffffff,r=i+(a<<20&0xffffffff|a>>>12),a=t+(i^s&(r^i))+n[5]+0xd62f105d&0xffffffff,t=r+(a<<5&0xffffffff|a>>>27),a=s+(r^i&(t^r))+n[10]+0x2441453&0xffffffff,s=t+(a<<9&0xffffffff|a>>>23),a=i+(t^r&(s^t))+n[15]+0xd8a1e681&0xffffffff,i=s+(a<<14&0xffffffff|a>>>18),a=r+(s^t&(i^s))+n[4]+0xe7d3fbc8&0xffffffff,r=i+(a<<20&0xffffffff|a>>>12),a=t+(i^s&(r^i))+n[9]+0x21e1cde6&0xffffffff,t=r+(a<<5&0xffffffff|a>>>27),a=s+(r^i&(t^r))+n[14]+0xc33707d6&0xffffffff,s=t+(a<<9&0xffffffff|a>>>23),a=i+(t^r&(s^t))+n[3]+0xf4d50d87&0xffffffff,i=s+(a<<14&0xffffffff|a>>>18),a=r+(s^t&(i^s))+n[8]+0x455a14ed&0xffffffff,r=i+(a<<20&0xffffffff|a>>>12),a=t+(i^s&(r^i))+n[13]+0xa9e3e905&0xffffffff,t=r+(a<<5&0xffffffff|a>>>27),a=s+(r^i&(t^r))+n[2]+0xfcefa3f8&0xffffffff,s=t+(a<<9&0xffffffff|a>>>23),a=i+(t^r&(s^t))+n[7]+0x676f02d9&0xffffffff,i=s+(a<<14&0xffffffff|a>>>18),a=r+(s^t&(i^s))+n[12]+0x8d2a4c8a&0xffffffff,a=t+((r=i+(a<<20&0xffffffff|a>>>12))^i^s)+n[5]+0xfffa3942&0xffffffff,a=s+((t=r+(a<<4&0xffffffff|a>>>28))^r^i)+n[8]+0x8771f681&0xffffffff,a=i+((s=t+(a<<11&0xffffffff|a>>>21))^t^r)+n[11]+0x6d9d6122&0xffffffff,a=r+((i=s+(a<<16&0xffffffff|a>>>16))^s^t)+n[14]+0xfde5380c&0xffffffff,a=t+((r=i+(a<<23&0xffffffff|a>>>9))^i^s)+n[1]+0xa4beea44&0xffffffff,a=s+((t=r+(a<<4&0xffffffff|a>>>28))^r^i)+n[4]+0x4bdecfa9&0xffffffff,a=i+((s=t+(a<<11&0xffffffff|a>>>21))^t^r)+n[7]+0xf6bb4b60&0xffffffff,a=r+((i=s+(a<<16&0xffffffff|a>>>16))^s^t)+n[10]+0xbebfbc70&0xffffffff,a=t+((r=i+(a<<23&0xffffffff|a>>>9))^i^s)+n[13]+0x289b7ec6&0xffffffff,a=s+((t=r+(a<<4&0xffffffff|a>>>28))^r^i)+n[0]+0xeaa127fa&0xffffffff,a=i+((s=t+(a<<11&0xffffffff|a>>>21))^t^r)+n[3]+0xd4ef3085&0xffffffff,a=r+((i=s+(a<<16&0xffffffff|a>>>16))^s^t)+n[6]+0x4881d05&0xffffffff,a=t+((r=i+(a<<23&0xffffffff|a>>>9))^i^s)+n[9]+0xd9d4d039&0xffffffff,a=s+((t=r+(a<<4&0xffffffff|a>>>28))^r^i)+n[12]+0xe6db99e5&0xffffffff,a=i+((s=t+(a<<11&0xffffffff|a>>>21))^t^r)+n[15]+0x1fa27cf8&0xffffffff,a=r+((i=s+(a<<16&0xffffffff|a>>>16))^s^t)+n[2]+0xc4ac5665&0xffffffff,r=i+(a<<23&0xffffffff|a>>>9),a=t+(i^(r|~s))+n[0]+0xf4292244&0xffffffff,t=r+(a<<6&0xffffffff|a>>>26),a=s+(r^(t|~i))+n[7]+0x432aff97&0xffffffff,s=t+(a<<10&0xffffffff|a>>>22),a=i+(t^(s|~r))+n[14]+0xab9423a7&0xffffffff,i=s+(a<<15&0xffffffff|a>>>17),a=r+(s^(i|~t))+n[5]+0xfc93a039&0xffffffff,r=i+(a<<21&0xffffffff|a>>>11),a=t+(i^(r|~s))+n[12]+0x655b59c3&0xffffffff,t=r+(a<<6&0xffffffff|a>>>26),a=s+(r^(t|~i))+n[3]+0x8f0ccc92&0xffffffff,s=t+(a<<10&0xffffffff|a>>>22),a=i+(t^(s|~r))+n[10]+0xffeff47d&0xffffffff,i=s+(a<<15&0xffffffff|a>>>17),a=r+(s^(i|~t))+n[1]+0x85845dd1&0xffffffff,r=i+(a<<21&0xffffffff|a>>>11),a=t+(i^(r|~s))+n[8]+0x6fa87e4f&0xffffffff,t=r+(a<<6&0xffffffff|a>>>26),a=s+(r^(t|~i))+n[15]+0xfe2ce6e0&0xffffffff,s=t+(a<<10&0xffffffff|a>>>22),a=i+(t^(s|~r))+n[6]+0xa3014314&0xffffffff,i=s+(a<<15&0xffffffff|a>>>17),a=r+(s^(i|~t))+n[13]+0x4e0811a1&0xffffffff,r=i+(a<<21&0xffffffff|a>>>11),a=t+(i^(r|~s))+n[4]+0xf7537e82&0xffffffff,t=r+(a<<6&0xffffffff|a>>>26),a=s+(r^(t|~i))+n[11]+0xbd3af235&0xffffffff,s=t+(a<<10&0xffffffff|a>>>22),a=i+(t^(s|~r))+n[2]+0x2ad7d2bb&0xffffffff,i=s+(a<<15&0xffffffff|a>>>17),a=r+(s^(i|~t))+n[9]+0xeb86d391&0xffffffff,e.g[0]=e.g[0]+t&0xffffffff,e.g[1]=e.g[1]+(i+(a<<21&0xffffffff|a>>>11))&0xffffffff,e.g[2]=e.g[2]+i&0xffffffff,e.g[3]=e.g[3]+s&0xffffffff}function r(e,t){this.h=t;for(var r=[],n=!0,i=e.length-1;0<=i;i--){var s=0|e[i];n&&s==t||(r[i]=s,n=!1)}this.g=r}!function(e,t){function r(){}r.prototype=t.prototype,e.D=t.prototype,e.prototype=new r,e.prototype.constructor=e,e.C=function(e,r,n){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[r].apply(e,i)}}(e,function(){this.blockSize=-1}),e.prototype.s=function(){this.g[0]=0x67452301,this.g[1]=0xefcdab89,this.g[2]=0x98badcfe,this.g[3]=0x10325476,this.o=this.h=0},e.prototype.u=function(e,r){void 0===r&&(r=e.length);for(var n=r-this.blockSize,i=this.B,s=this.h,a=0;a<r;){if(0==s)for(;a<=n;)t(this,e,a),a+=this.blockSize;if("string"==typeof e){for(;a<r;)if(i[s++]=e.charCodeAt(a++),s==this.blockSize){t(this,i),s=0;break}}else for(;a<r;)if(i[s++]=e[a++],s==this.blockSize){t(this,i),s=0;break}}this.h=s,this.o+=r},e.prototype.v=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var r=8*this.o;for(t=e.length-8;t<e.length;++t)e[t]=255&r,r/=256;for(this.u(e),e=Array(16),t=r=0;4>t;++t)for(var n=0;32>n;n+=8)e[r++]=this.g[t]>>>n&255;return e};var n,i={};function s(e){var t;return -128<=e&&128>e?(t=function(e){return new r([0|e],0>e?-1:0)},Object.prototype.hasOwnProperty.call(i,e)?i[e]:i[e]=t(e)):new r([0|e],0>e?-1:0)}function a(e){if(isNaN(e)||!isFinite(e))return o;if(0>e)return p(a(-e));for(var t=[],n=1,i=0;e>=n;i++)t[i]=e/n|0,n*=0x100000000;return new r(t,0)}var o=s(0),u=s(1),c=s(0x1000000);function f(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function d(e){return -1==e.h}function p(e){for(var t=e.g.length,n=[],i=0;i<t;i++)n[i]=~e.g[i];return new r(n,~e.h).add(u)}function g(e,t){return e.add(p(t))}function m(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function y(e,t){this.g=e,this.h=t}function v(e,t){if(f(t))throw Error("division by zero");if(f(e))return new y(o,o);if(d(e))return t=v(p(e),t),new y(p(t.g),p(t.h));if(d(t))return t=v(e,p(t)),new y(p(t.g),t.h);if(30<e.g.length){if(d(e)||d(t))throw Error("slowDivide_ only works with positive integers.");for(var r=u,n=t;0>=n.l(e);)r=w(r),n=w(n);var i=b(r,1),s=b(n,1);for(n=b(n,2),r=b(r,2);!f(n);){var l=s.add(n);0>=l.l(e)&&(i=i.add(r),s=l),n=b(n,1),r=b(r,1)}return t=g(e,i.j(t)),new y(i,t)}for(i=o;0<=e.l(t);){for(n=48>=(n=Math.ceil(Math.log(r=Math.max(1,Math.floor(e.m()/t.m())))/Math.LN2))?1:Math.pow(2,n-48),l=(s=a(r)).j(t);d(l)||0<l.l(e);)r-=n,l=(s=a(r)).j(t);f(s)&&(s=u),i=i.add(s),e=g(e,l)}return new y(i,e)}function w(e){for(var t=e.g.length+1,n=[],i=0;i<t;i++)n[i]=e.i(i)<<1|e.i(i-1)>>>31;return new r(n,e.h)}function b(e,t){var n=t>>5;t%=32;for(var i=e.g.length-n,s=[],a=0;a<i;a++)s[a]=0<t?e.i(a+n)>>>t|e.i(a+n+1)<<32-t:e.i(a+n);return new r(s,e.h)}(n=r.prototype).m=function(){if(d(this))return-p(this).m();for(var e=0,t=1,r=0;r<this.g.length;r++){var n=this.i(r);e+=(0<=n?n:0x100000000+n)*t,t*=0x100000000}return e},n.toString=function(e){if(2>(e=e||10)||36<e)throw Error("radix out of range: "+e);if(f(this))return"0";if(d(this))return"-"+p(this).toString(e);for(var t=a(Math.pow(e,6)),r=this,n="";;){var i=v(r,t).g,s=((0<(r=g(r,i.j(t))).g.length?r.g[0]:r.h)>>>0).toString(e);if(f(r=i))return s+n;for(;6>s.length;)s="0"+s;n=s+n}},n.i=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},n.l=function(e){return d(e=g(this,e))?-1:+!f(e)},n.abs=function(){return d(this)?p(this):this},n.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0,s=0;s<=t;s++){var a=i+(65535&this.i(s))+(65535&e.i(s)),o=(a>>>16)+(this.i(s)>>>16)+(e.i(s)>>>16);i=o>>>16,a&=65535,o&=65535,n[s]=o<<16|a}return new r(n,-0x80000000&n[n.length-1]?-1:0)},n.j=function(e){if(f(this)||f(e))return o;if(d(this))return d(e)?p(this).j(p(e)):p(p(this).j(e));if(d(e))return p(this.j(p(e)));if(0>this.l(c)&&0>e.l(c))return a(this.m()*e.m());for(var t=this.g.length+e.g.length,n=[],i=0;i<2*t;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var s=0;s<e.g.length;s++){var l=this.i(i)>>>16,h=65535&this.i(i),u=e.i(s)>>>16,g=65535&e.i(s);n[2*i+2*s]+=h*g,m(n,2*i+2*s),n[2*i+2*s+1]+=l*g,m(n,2*i+2*s+1),n[2*i+2*s+1]+=h*u,m(n,2*i+2*s+1),n[2*i+2*s+2]+=l*u,m(n,2*i+2*s+2)}for(i=0;i<t;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=t;i<2*t;i++)n[i]=0;return new r(n,0)},n.A=function(e){return v(this,e).h},n.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.i(i)&e.i(i);return new r(n,this.h&e.h)},n.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.i(i)|e.i(i);return new r(n,this.h|e.h)},n.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.i(i)^e.i(i);return new r(n,this.h^e.h)},e.prototype.digest=e.prototype.v,e.prototype.reset=e.prototype.s,e.prototype.update=e.prototype.u,h=e3.Md5=e,r.prototype.add=r.prototype.add,r.prototype.multiply=r.prototype.j,r.prototype.modulo=r.prototype.A,r.prototype.compare=r.prototype.l,r.prototype.toNumber=r.prototype.m,r.prototype.toString=r.prototype.toString,r.prototype.getBits=r.prototype.i,r.fromNumber=a,r.fromString=function e(t,r){if(0==t.length)throw Error("number format error: empty string");if(2>(r=r||10)||36<r)throw Error("radix out of range: "+r);if("-"==t.charAt(0))return p(e(t.substring(1),r));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=a(Math.pow(r,8)),i=o,s=0;s<t.length;s+=8){var l=Math.min(8,t.length-s),h=parseInt(t.substring(s,s+l),r);8>l?(l=a(Math.pow(r,l)),i=i.j(l).add(a(h))):i=(i=i.j(n)).add(a(h))}return i},l=e3.Integer=r}).apply(void 0!==e6?e6:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});var e5="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==I?I:"undefined"!=typeof self?self:{},e8={};(function(){var e,t,r,n="function"==typeof Object.defineProperties?Object.defineProperty:function(e,t,r){return e==Array.prototype||e==Object.prototype||(e[t]=r.value),e},i=function(e){e=["object"==typeof globalThis&&globalThis,e,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof e5&&e5];for(var t=0;t<e.length;++t){var r=e[t];if(r&&r.Math==Math)return r}throw Error("Cannot find global object")}(this);!function(e,t){if(t)e:{var r=i;e=e.split(".");for(var s=0;s<e.length-1;s++){var a=e[s];if(!(a in r))break e;r=r[a]}(t=t(s=r[e=e[e.length-1]]))!=s&&null!=t&&n(r,e,{configurable:!0,writable:!0,value:t})}}("Array.prototype.values",function(e){return e||function(){var e,t,r,n,i;return e=this,t=function(e,t){return t},e instanceof String&&(e+=""),r=0,n=!1,(i={next:function(){if(!n&&r<e.length){var i=r++;return{value:t(i,e[i]),done:!1}}return n=!0,{done:!0,value:void 0}}})[Symbol.iterator]=function(){return i},i}});var s=s||{},a=this||self;function o(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function l(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function h(e,t,r){return e.call.apply(e.bind,arguments)}function v(e,t,r){if(!e)throw Error();if(2<arguments.length){var n=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,n),e.apply(t,r)}}return function(){return e.apply(t,arguments)}}function w(e,t,r){return(w=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?h:v).apply(null,arguments)}function b(e,t){var r=Array.prototype.slice.call(arguments,1);return function(){var t=r.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function E(e,t){function r(){}r.prototype=t.prototype,e.aa=t.prototype,e.prototype=new r,e.prototype.constructor=e,e.Qb=function(e,r,n){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[r].apply(e,i)}}function _(e){let t=e.length;if(0<t){let r=Array(t);for(let n=0;n<t;n++)r[n]=e[n];return r}return[]}function T(e,t){for(let t=1;t<arguments.length;t++){let r=arguments[t];if(o(r)){let t=e.length||0,n=r.length||0;e.length=t+n;for(let i=0;i<n;i++)e[t+i]=r[i]}else e.push(r)}}function S(e){return/^[\s\xa0]*$/.test(e)}function C(){var e=a.navigator;return e&&(e=e.userAgent)?e:""}function I(e){return I[" "](e),e}I[" "]=function(){};var x=-1!=C().indexOf("Gecko")&&!(-1!=C().toLowerCase().indexOf("webkit")&&-1==C().indexOf("Edge"))&&!(-1!=C().indexOf("Trident")||-1!=C().indexOf("MSIE"))&&-1==C().indexOf("Edge");function A(e,t,r){for(let n in e)t.call(r,e[n],n,e)}function D(e){let t={};for(let r in e)t[r]=e[r];return t}let k="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function N(e,t){let r,n;for(let t=1;t<arguments.length;t++){for(r in n=arguments[t])e[r]=n[r];for(let t=0;t<k.length;t++)r=k[t],Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}}var R=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new L,e=>e.reset());class L{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}let O,M=!1,P=new class{constructor(){this.h=this.g=null}add(e,t){let r=R.get();r.set(e,t),this.h?this.h.next=r:this.g=r,this.h=r}},V=()=>{let e=a.Promise.resolve(void 0);O=()=>{e.then(U)}};var U=()=>{let e;for(var t;e=null,P.g&&(e=P.g,P.g=P.g.next,P.g||(P.h=null),e.next=null),t=e;){try{t.h.call(t.g)}catch(e){!function(e){a.setTimeout(()=>{throw e},0)}(e)}R.j(t),100>R.h&&(R.h++,t.next=R.g,R.g=t)}M=!1};function F(){this.s=this.s,this.C=this.C}function B(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}F.prototype.s=!1,F.prototype.ma=function(){this.s||(this.s=!0,this.N())},F.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},B.prototype.h=function(){this.defaultPrevented=!0};var j=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{let e=()=>{};a.addEventListener("test",e,t),a.removeEventListener("test",e,t)}catch(e){}return e}();function q(e,t){if(B.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var r=this.type=e.type,n=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(x){e:{try{I(t.nodeName);var i=!0;break e}catch(e){}i=!1}i||(t=null)}}else"mouseover"==r?t=e.fromElement:"mouseout"==r&&(t=e.toElement);this.relatedTarget=t,n?(this.clientX=void 0!==n.clientX?n.clientX:n.pageX,this.clientY=void 0!==n.clientY?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:z[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&q.aa.h.call(this)}}E(q,B);var z={2:"touch",3:"pen",4:"mouse"};q.prototype.h=function(){q.aa.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var $="closure_listenable_"+(1e6*Math.random()|0),K=0;function G(e,t,r,n,i){this.listener=e,this.proxy=null,this.src=t,this.type=r,this.capture=!!n,this.ha=i,this.key=++K,this.da=this.fa=!1}function H(e){e.da=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function Q(e){this.src=e,this.g={},this.h=0}function W(e,t){var r=t.type;if(r in e.g){var n,i=e.g[r],s=Array.prototype.indexOf.call(i,t,void 0);(n=0<=s)&&Array.prototype.splice.call(i,s,1),n&&(H(t),0==e.g[r].length&&(delete e.g[r],e.h--))}}function X(e,t,r,n){for(var i=0;i<e.length;++i){var s=e[i];if(!s.da&&s.listener==t&&!!r==s.capture&&s.ha==n)return i}return -1}Q.prototype.add=function(e,t,r,n,i){var s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);var a=X(e,t,n,i);return -1<a?(t=e[a],r||(t.fa=!1)):((t=new G(t,this.src,s,!!n,i)).fa=r,e.push(t)),t};var Y="closure_lm_"+(1e6*Math.random()|0),J={};function Z(e,t,r,n,i,s){if(!t)throw Error("Invalid event type");var a=l(i)?!!i.capture:!!i,o=en(e);if(o||(e[Y]=o=new Q(e)),(r=o.add(t,r,n,a,s)).proxy)return r;if(n=function e(t){return er.call(e.src,e.listener,t)},r.proxy=n,n.src=e,n.listener=r,e.addEventListener)j||(i=a),void 0===i&&(i=!1),e.addEventListener(t.toString(),n,i);else if(e.attachEvent)e.attachEvent(et(t.toString()),n);else if(e.addListener&&e.removeListener)e.addListener(n);else throw Error("addEventListener and attachEvent are unavailable.");return r}function ee(e){if("number"!=typeof e&&e&&!e.da){var t=e.src;if(t&&t[$])W(t.i,e);else{var r=e.type,n=e.proxy;t.removeEventListener?t.removeEventListener(r,n,e.capture):t.detachEvent?t.detachEvent(et(r),n):t.addListener&&t.removeListener&&t.removeListener(n),(r=en(t))?(W(r,e),0==r.h&&(r.src=null,t[Y]=null)):H(e)}}}function et(e){return e in J?J[e]:J[e]="on"+e}function er(e,t){if(e.da)e=!0;else{t=new q(t,this);var r=e.listener,n=e.ha||e.src;e.fa&&ee(e),e=r.call(n,t)}return e}function en(e){return(e=e[Y])instanceof Q?e:null}var ei="__closure_events_fn_"+(1e9*Math.random()>>>0);function es(e){return"function"==typeof e?e:(e[ei]||(e[ei]=function(t){return e.handleEvent(t)}),e[ei])}function ea(){F.call(this),this.i=new Q(this),this.M=this,this.F=null}function eo(e,t){var r,n=e.F;if(n)for(r=[];n;n=n.F)r.push(n);if(e=e.M,n=t.type||t,"string"==typeof t)t=new B(t,e);else if(t instanceof B)t.target=t.target||e;else{var i=t;N(t=new B(n,e),i)}if(i=!0,r)for(var s=r.length-1;0<=s;s--){var a=t.g=r[s];i=el(a,n,!0,t)&&i}if(i=el(a=t.g=e,n,!0,t)&&i,i=el(a,n,!1,t)&&i,r)for(s=0;s<r.length;s++)i=el(a=t.g=r[s],n,!1,t)&&i}function el(e,t,r,n){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var a=t[s];if(a&&!a.da&&a.capture==r){var o=a.listener,l=a.ha||a.src;a.fa&&W(e.i,a),i=!1!==o.call(l,n)&&i}}return i&&!n.defaultPrevented}function eh(e,t,r){if("function"==typeof e)r&&(e=w(e,r));else if(e&&"function"==typeof e.handleEvent)e=w(e.handleEvent,e);else throw Error("Invalid listener argument");return 0x7fffffff<Number(t)?-1:a.setTimeout(e,t||0)}E(ea,F),ea.prototype[$]=!0,ea.prototype.removeEventListener=function(e,t,r,n){!function e(t,r,n,i,s){if(Array.isArray(r))for(var a=0;a<r.length;a++)e(t,r[a],n,i,s);else(i=l(i)?!!i.capture:!!i,n=es(n),t&&t[$])?(t=t.i,(r=String(r).toString())in t.g&&-1<(n=X(a=t.g[r],n,i,s))&&(H(a[n]),Array.prototype.splice.call(a,n,1),0==a.length&&(delete t.g[r],t.h--))):t&&(t=en(t))&&(r=t.g[r.toString()],t=-1,r&&(t=X(r,n,i,s)),(n=-1<t?r[t]:null)&&ee(n))}(this,e,t,r,n)},ea.prototype.N=function(){if(ea.aa.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var r=t.g[e],n=0;n<r.length;n++)H(r[n]);delete t.g[e],t.h--}}this.F=null},ea.prototype.K=function(e,t,r,n){return this.i.add(String(e),t,!1,r,n)},ea.prototype.L=function(e,t,r,n){return this.i.add(String(e),t,!0,r,n)};class eu extends F{constructor(e,t){super(),this.m=e,this.l=t,this.h=null,this.i=!1,this.g=null}j(e){this.h=arguments,this.g?this.i=!0:function e(t){t.g=eh(()=>{t.g=null,t.i&&(t.i=!1,e(t))},t.l);let r=t.h;t.h=null,t.m.apply(null,r)}(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ec(e){F.call(this),this.h=e,this.g={}}E(ec,F);var ef=[];function ed(e){A(e.g,function(e,t){this.g.hasOwnProperty(t)&&ee(e)},e),e.g={}}ec.prototype.N=function(){ec.aa.N.call(this),ed(this)},ec.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ep=a.JSON.stringify,eg=a.JSON.parse,em=class{stringify(e){return a.JSON.stringify(e,void 0)}parse(e){return a.JSON.parse(e,void 0)}};function ey(){}function ev(e){return e.h||(e.h=e.i())}function ew(){}ey.prototype.h=null;var eb={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function eE(){B.call(this,"d")}function e_(){B.call(this,"c")}E(eE,B),E(e_,B);var eT={},eS=null;function eC(){return eS=eS||new ea}function eI(e){B.call(this,eT.La,e)}function ex(e){let t=eC();eo(t,new eI(t))}function eA(e,t){B.call(this,eT.STAT_EVENT,e),this.stat=t}function eD(e){let t=eC();eo(t,new eA(t,e))}function ek(e,t){B.call(this,eT.Ma,e),this.size=t}function eN(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){e()},t)}function eR(){this.g=!0}function eL(e,t,r,n){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var r=JSON.parse(t);if(r){for(e=0;e<r.length;e++)if(Array.isArray(r[e])){var n=r[e];if(!(2>n.length)){var i=n[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var a=1;a<i.length;a++)i[a]=""}}}}return ep(r)}catch(e){return t}}(e,r)+(n?" "+n:"")})}eT.La="serverreachability",E(eI,B),eT.STAT_EVENT="statevent",E(eA,B),eT.Ma="timingevent",E(ek,B),eR.prototype.xa=function(){this.g=!1},eR.prototype.info=function(){};var eO={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},eM={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"};function eP(){}function eV(e,t,r,n){this.j=e,this.i=t,this.l=r,this.R=n||1,this.U=new ec(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new eU}function eU(){this.i=null,this.g="",this.h=!1}E(eP,ey),eP.prototype.g=function(){return new XMLHttpRequest},eP.prototype.i=function(){return{}},t=new eP;var eF={},eB={};function ej(e,t,r){e.L=1,e.v=ti(e7(t)),e.m=r,e.P=!0,eq(e,null)}function eq(e,t){e.F=Date.now(),e$(e),e.A=e7(e.v);var r=e.A,n=e.R;Array.isArray(n)||(n=[String(n)]),ty(r.i,"t",n),e.C=0,r=e.j.J,e.h=new eU,e.g=t6(e.j,r?t:null,!e.m),0<e.O&&(e.M=new eu(w(e.Y,e,e.g),e.O)),t=e.U,r=e.g,n=e.ca;var i="readystatechange";Array.isArray(i)||(i&&(ef[0]=i.toString()),i=ef);for(var s=0;s<i.length;s++){var a=function e(t,r,n,i,s){if(i&&i.once)return function e(t,r,n,i,s){if(Array.isArray(r)){for(var a=0;a<r.length;a++)e(t,r[a],n,i,s);return null}return n=es(n),t&&t[$]?t.L(r,n,l(i)?!!i.capture:!!i,s):Z(t,r,n,!0,i,s)}(t,r,n,i,s);if(Array.isArray(r)){for(var a=0;a<r.length;a++)e(t,r[a],n,i,s);return null}return n=es(n),t&&t[$]?t.K(r,n,l(i)?!!i.capture:!!i,s):Z(t,r,n,!1,i,s)}(r,i[s],n||t.handleEvent,!1,t.h||t);if(!a)break;t.g[a.key]=a}t=e.H?D(e.H):{},e.m?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.m,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),ex(),function(e,t,r,n,i,s){e.info(function(){if(e.g){if(s)for(var a="",o=s.split("&"),l=0;l<o.length;l++){var h=o[l].split("=");if(1<h.length){var u=h[0];h=h[1];var c=u.split("_");a=2<=c.length&&"type"==c[1]?a+(u+"=")+h+"&":a+(u+"=redacted&")}}else a=null}else a=s;return"XMLHTTP REQ ("+n+") [attempt "+i+"]: "+t+"\n"+r+"\n"+a})}(e.i,e.u,e.A,e.l,e.R,e.m)}function ez(e){return!!e.g&&"GET"==e.u&&2!=e.L&&e.j.Ca}function e$(e){e.S=Date.now()+e.I,eK(e,e.I)}function eK(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=eN(w(e.ba,e),t)}function eG(e){e.B&&(a.clearTimeout(e.B),e.B=null)}function eH(e){0==e.j.G||e.J||tJ(e.j,e)}function eQ(e){eG(e);var t=e.M;t&&"function"==typeof t.ma&&t.ma(),e.M=null,ed(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.ma())}function eW(e,t){try{var r=e.j;if(0!=r.G&&(r.g==e||e0(r.h,e))){if(!e.K&&e0(r.h,e)&&3==r.G){try{var n=r.Da.g.parse(t)}catch(e){n=null}if(Array.isArray(n)&&3==n.length){var i=n;if(0==i[0]){e:if(!r.u){if(r.g){if(r.g.F+3e3<e.F)tY(r),tj(r);else break e}tQ(r),eD(18)}}else r.za=i[1],0<r.za-r.T&&37500>i[2]&&r.F&&0==r.v&&!r.C&&(r.C=eN(w(r.Za,r),6e3));if(1>=eZ(r.h)&&r.ca){try{r.ca()}catch(e){}r.ca=void 0}}else t0(r,11)}else if((e.K||r.g==e)&&tY(r),!S(t))for(i=r.Da.g.parse(t),t=0;t<i.length;t++){let o=i[t];if(r.T=o[0],o=o[1],2==r.G){if("c"==o[0]){r.K=o[1],r.ia=o[2];let t=o[3];null!=t&&(r.la=t,r.j.info("VER="+r.la));let i=o[4];null!=i&&(r.Aa=i,r.j.info("SVER="+r.Aa));let l=o[5];null!=l&&"number"==typeof l&&0<l&&(n=1.5*l,r.L=n,r.j.info("backChannelRequestTimeoutMs_="+n)),n=r;let h=e.g;if(h){let e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=n.h;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(e1(s,s.h),s.h=null))}if(n.D){let e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(n.ya=e,tn(n.I,n.D,e))}}if(r.G=3,r.l&&r.l.ua(),r.ba&&(r.R=Date.now()-e.F,r.j.info("Handshake RTT: "+r.R+"ms")),(n=r).qa=t2(n,n.J?n.ia:null,n.W),e.K){e2(n.h,e);var a=n.L;a&&(e.I=a),e.B&&(eG(e),e$(e)),n.g=e}else tH(n);0<r.i.length&&tz(r)}else"stop"!=o[0]&&"close"!=o[0]||t0(r,7)}else 3==r.G&&("stop"==o[0]||"close"==o[0]?"stop"==o[0]?t0(r,7):tB(r):"noop"!=o[0]&&r.l&&r.l.ta(o),r.v=0)}}ex(4)}catch(e){}}eV.prototype.ca=function(e){e=e.target;let t=this.M;t&&3==tP(e)?t.j():this.Y(e)},eV.prototype.Y=function(e){try{if(e==this.g)e:{let f=tP(this.g);var t=this.g.Ba();let d=this.g.Z();if(!(3>f)&&(3!=f||this.g&&(this.h.h||this.g.oa()||tV(this.g)))){this.J||4!=f||7==t||(8==t||0>=d?ex(3):ex(2)),eG(this);var r=this.g.Z();this.X=r;t:if(ez(this)){var n=tV(this.g);e="";var i=n.length,s=4==tP(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){eQ(this),eH(this);var o="";break t}this.h.i=new a.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(n[t],{stream:!(s&&t==i-1)});n.length=0,this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.oa();if(this.o=200==r,function(e,t,r,n,i,s,a){e.info(function(){return"XMLHTTP RESP ("+n+") [ attempt "+i+"]: "+t+"\n"+r+"\n"+s+" "+a})}(this.i,this.u,this.A,this.l,this.R,f,r),this.o){if(this.T&&!this.K){t:{if(this.g){var l,h=this.g;if((l=h.g?h.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!S(l)){var u=l;break t}}u=null}if(r=u)eL(this.i,this.l,r,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,eW(this,r);else{this.o=!1,this.s=3,eD(12),eQ(this),eH(this);break e}}if(this.P){let e;for(r=!0;!this.J&&this.C<o.length;)if((e=function(e,t){var r=e.C,n=t.indexOf("\n",r);return -1==n?eB:isNaN(r=Number(t.substring(r,n)))?eF:(n+=1)+r>t.length?eB:(t=t.slice(n,n+r),e.C=n+r,t)}(this,o))==eB){4==f&&(this.s=4,eD(14),r=!1),eL(this.i,this.l,null,"[Incomplete Response]");break}else if(e==eF){this.s=4,eD(15),eL(this.i,this.l,o,"[Invalid Chunk]"),r=!1;break}else eL(this.i,this.l,e,null),eW(this,e);if(ez(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=f||0!=o.length||this.h.h||(this.s=1,eD(16),r=!1),this.o=this.o&&r,r){if(0<o.length&&!this.W){this.W=!0;var c=this.j;c.g==this&&c.ba&&!c.M&&(c.j.info("Great, no buffering proxy detected. Bytes received: "+o.length),tW(c),c.M=!0,eD(11))}}else eL(this.i,this.l,o,"[Invalid Chunked Response]"),eQ(this),eH(this)}else eL(this.i,this.l,o,null),eW(this,o);4==f&&eQ(this),this.o&&!this.J&&(4==f?tJ(this.j,this):(this.o=!1,e$(this)))}else(function(e){let t={};e=(e.g&&2<=tP(e)&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let n=0;n<e.length;n++){if(S(e[n]))continue;var r=function(e){var t=1;e=e.split(":");let r=[];for(;0<t&&e.length;)r.push(e.shift()),t--;return e.length&&r.push(e.join(":")),r}(e[n]);let i=r[0];if("string"!=typeof(r=r[1]))continue;r=r.trim();let s=t[i]||[];t[i]=s,s.push(r)}!function(e,t){for(let r in e)t.call(void 0,e[r],r,e)}(t,function(e){return e.join(", ")})})(this.g),400==r&&0<o.indexOf("Unknown SID")?(this.s=3,eD(12)):(this.s=0,eD(13)),eQ(this),eH(this)}}}catch(e){}finally{}},eV.prototype.cancel=function(){this.J=!0,eQ(this)},eV.prototype.ba=function(){this.B=null;let e=Date.now();0<=e-this.S?(function(e,t){e.info(function(){return"TIMEOUT: "+t})}(this.i,this.A),2!=this.L&&(ex(),eD(17)),eQ(this),this.s=2,eH(this)):eK(this,this.S-e)};var eX=class{constructor(e,t){this.g=e,this.map=t}};function eY(e){this.l=e||10,e=a.PerformanceNavigationTiming?0<(e=a.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function eJ(e){return!!e.h||!!e.g&&e.g.size>=e.j}function eZ(e){return e.h?1:e.g?e.g.size:0}function e0(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function e1(e,t){e.g?e.g.add(t):e.h=t}function e2(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function e6(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(let r of e.g.values())t=t.concat(r.D);return t}return _(e.i)}function e3(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(o(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var r=function(e){if(e.na&&"function"==typeof e.na)return e.na();if(!e.V||"function"!=typeof e.V){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(o(e)||"string"==typeof e){var t=[];e=e.length;for(var r=0;r<e;r++)t.push(r);return t}for(let n in t=[],r=0,e)t[r++]=n;return t}}}(e),n=function(e){if(e.V&&"function"==typeof e.V)return e.V();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(o(e)){for(var t=[],r=e.length,n=0;n<r;n++)t.push(e[n]);return t}for(n in t=[],r=0,e)t[r++]=e[n];return t}(e),i=n.length,s=0;s<i;s++)t.call(void 0,n[s],r&&r[s],e)}eY.prototype.cancel=function(){if(this.i=e6(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(let e of this.g.values())e.cancel();this.g.clear()}};var e4=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function e9(e){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,e instanceof e9){this.h=e.h,te(this,e.j),this.o=e.o,this.g=e.g,tt(this,e.s),this.l=e.l;var t=e.i,r=new td;r.i=t.i,t.g&&(r.g=new Map(t.g),r.h=t.h),tr(this,r),this.m=e.m}else e&&(t=String(e).match(e4))?(this.h=!1,te(this,t[1]||"",!0),this.o=ts(t[2]||""),this.g=ts(t[3]||"",!0),tt(this,t[4]),this.l=ts(t[5]||"",!0),tr(this,t[6]||"",!0),this.m=ts(t[7]||"")):(this.h=!1,this.i=new td(null,this.h))}function e7(e){return new e9(e)}function te(e,t,r){e.j=r?ts(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function tt(e,t){if(t){if(isNaN(t=Number(t))||0>t)throw Error("Bad port number "+t);e.s=t}else e.s=null}function tr(e,t,r){var n,i;t instanceof td?(e.i=t,n=e.i,(i=e.h)&&!n.j&&(tp(n),n.i=null,n.g.forEach(function(e,t){var r=t.toLowerCase();t!=r&&(tg(this,t),ty(this,r,e))},n)),n.j=i):(r||(t=ta(t,tc)),e.i=new td(t,e.h))}function tn(e,t,r){e.i.set(t,r)}function ti(e){return tn(e,"zx",Math.floor(0x80000000*Math.random()).toString(36)+Math.abs(Math.floor(0x80000000*Math.random())^Date.now()).toString(36)),e}function ts(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function ta(e,t,r){return"string"==typeof e?(e=encodeURI(e).replace(t,to),r&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function to(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}e9.prototype.toString=function(){var e=[],t=this.j;t&&e.push(ta(t,tl,!0),":");var r=this.g;return(r||"file"==t)&&(e.push("//"),(t=this.o)&&e.push(ta(t,tl,!0),"@"),e.push(encodeURIComponent(String(r)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(r=this.s)&&e.push(":",String(r))),(r=this.l)&&(this.g&&"/"!=r.charAt(0)&&e.push("/"),e.push(ta(r,"/"==r.charAt(0)?tu:th,!0))),(r=this.i.toString())&&e.push("?",r),(r=this.m)&&e.push("#",ta(r,tf)),e.join("")};var tl=/[#\/\?@]/g,th=/[#\?:]/g,tu=/[#\?]/g,tc=/[#\?@]/g,tf=/#/g;function td(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function tp(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var r=0;r<e.length;r++){var n=e[r].indexOf("="),i=null;if(0<=n){var s=e[r].substring(0,n);i=e[r].substring(n+1)}else s=e[r];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,function(t,r){e.add(decodeURIComponent(t.replace(/\+/g," ")),r)}))}function tg(e,t){tp(e),t=tv(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function tm(e,t){return tp(e),t=tv(e,t),e.g.has(t)}function ty(e,t,r){tg(e,t),0<r.length&&(e.i=null,e.g.set(tv(e,t),_(r)),e.h+=r.length)}function tv(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function tw(e,t,r,n,i){try{i&&(i.onload=null,i.onerror=null,i.onabort=null,i.ontimeout=null),n(r)}catch(e){}}function tb(){this.g=new em}function tE(e){this.l=e.Ub||null,this.j=e.eb||!1}function t_(e,t){ea.call(this),this.D=e,this.o=t,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}function tT(e){e.j.read().then(e.Pa.bind(e)).catch(e.ga.bind(e))}function tS(e){e.readyState=4,e.l=null,e.j=null,e.v=null,tC(e)}function tC(e){e.onreadystatechange&&e.onreadystatechange.call(e)}function tI(e){let t="";return A(e,function(e,r){t+=r,t+=":",t+=e,t+="\r\n"}),t}function tx(e,t,r){e:{for(n in r){var n=!1;break e}n=!0}n||(r=tI(r),"string"==typeof e?null!=r&&encodeURIComponent(String(r)):tn(e,t,r))}function tA(e){ea.call(this),this.headers=new Map,this.o=e||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}(r=td.prototype).add=function(e,t){tp(this),this.i=null,e=tv(this,e);var r=this.g.get(e);return r||this.g.set(e,r=[]),r.push(t),this.h+=1,this},r.forEach=function(e,t){tp(this),this.g.forEach(function(r,n){r.forEach(function(r){e.call(t,r,n,this)},this)},this)},r.na=function(){tp(this);let e=Array.from(this.g.values()),t=Array.from(this.g.keys()),r=[];for(let n=0;n<t.length;n++){let i=e[n];for(let e=0;e<i.length;e++)r.push(t[n])}return r},r.V=function(e){tp(this);let t=[];if("string"==typeof e)tm(this,e)&&(t=t.concat(this.g.get(tv(this,e))));else{e=Array.from(this.g.values());for(let r=0;r<e.length;r++)t=t.concat(e[r])}return t},r.set=function(e,t){return tp(this),this.i=null,tm(this,e=tv(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},r.get=function(e,t){return e&&0<(e=this.V(e)).length?String(e[0]):t},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";let e=[],t=Array.from(this.g.keys());for(var r=0;r<t.length;r++){var n=t[r];let s=encodeURIComponent(String(n)),a=this.V(n);for(n=0;n<a.length;n++){var i=s;""!==a[n]&&(i+="="+encodeURIComponent(String(a[n]))),e.push(i)}}return this.i=e.join("&")},E(tE,ey),tE.prototype.g=function(){return new t_(this.l,this.j)},tE.prototype.i=(e={},function(){return e}),E(t_,ea),(r=t_.prototype).open=function(e,t){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection");this.B=e,this.A=t,this.readyState=1,tC(this)},r.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;let t={headers:this.u,method:this.B,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||a).fetch(new Request(this.A,t)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,tS(this)),this.readyState=0},r.Sa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,tC(this)),this.g&&(this.readyState=3,tC(this),this.g))){if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(void 0!==a.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;tT(this)}else e.text().then(this.Ra.bind(this),this.ga.bind(this))}},r.Pa=function(e){if(this.g){if(this.o&&e.value)this.response.push(e.value);else if(!this.o){var t=e.value?e.value:new Uint8Array(0);(t=this.v.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?tS(this):tC(this),3==this.readyState&&tT(this)}},r.Ra=function(e){this.g&&(this.response=this.responseText=e,tS(this))},r.Qa=function(e){this.g&&(this.response=e,tS(this))},r.ga=function(){this.g&&tS(this)},r.setRequestHeader=function(e,t){this.u.append(e,t)},r.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";let e=[],t=this.h.entries();for(var r=t.next();!r.done;)e.push((r=r.value)[0]+": "+r[1]),r=t.next();return e.join("\r\n")},Object.defineProperty(t_.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}}),E(tA,ea);var tD=/^https?$/i,tk=["POST","PUT"];function tN(e,t){e.h=!1,e.g&&(e.j=!0,e.g.abort(),e.j=!1),e.l=t,e.m=5,tR(e),tO(e)}function tR(e){e.A||(e.A=!0,eo(e,"complete"),eo(e,"error"))}function tL(e){if(e.h&&void 0!==s&&(!e.v[1]||4!=tP(e)||2!=e.Z())){if(e.u&&4==tP(e))eh(e.Ea,0,e);else if(eo(e,"readystatechange"),4==tP(e)){e.h=!1;try{let s=e.Z();switch(s){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t,r,n=!0;break;default:n=!1}if(!(t=n)){if(r=0===s){var i=String(e.D).match(e4)[1]||null;!i&&a.self&&a.self.location&&(i=a.self.location.protocol.slice(0,-1)),r=!tD.test(i?i.toLowerCase():"")}t=r}if(t)eo(e,"complete"),eo(e,"success");else{e.m=6;try{var o=2<tP(e)?e.g.statusText:""}catch(e){o=""}e.l=o+" ["+e.Z()+"]",tR(e)}}finally{tO(e)}}}}function tO(e,t){if(e.g){tM(e);let r=e.g,n=e.v[0]?()=>{}:null;e.g=null,e.v=null,t||eo(e,"ready");try{r.onreadystatechange=n}catch(e){}}}function tM(e){e.I&&(a.clearTimeout(e.I),e.I=null)}function tP(e){return e.g?e.g.readyState:0}function tV(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.H){case"":case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function tU(e,t,r){return r&&r.internalChannelParams&&r.internalChannelParams[e]||t}function tF(e){this.Aa=0,this.i=[],this.j=new eR,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=tU("failFast",!1,e),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=tU("baseRetryDelayMs",5e3,e),this.cb=tU("retryDelaySeedMs",1e4,e),this.Wa=tU("forwardChannelMaxRetries",2,e),this.wa=tU("forwardChannelRequestTimeoutMs",2e4,e),this.pa=e&&e.xmlHttpFactory||void 0,this.Xa=e&&e.Tb||void 0,this.Ca=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.h=new eY(e&&e.concurrentRequestLimit),this.Da=new tb,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=e&&e.Rb||!1,e&&e.xa&&this.j.xa(),e&&e.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&e&&e.detectBufferingProxy||!1,this.ja=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.ja=e.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}function tB(e){if(tq(e),3==e.G){var t=e.U++,r=e7(e.I);if(tn(r,"SID",e.K),tn(r,"RID",t),tn(r,"TYPE","terminate"),tK(e,r),(t=new eV(e,e.j,t)).L=2,t.v=ti(e7(r)),r=!1,a.navigator&&a.navigator.sendBeacon)try{r=a.navigator.sendBeacon(t.v.toString(),"")}catch(e){}!r&&a.Image&&((new Image).src=t.v,r=!0),r||(t.g=t6(t.j,null),t.g.ea(t.v)),t.F=Date.now(),e$(t)}t1(e)}function tj(e){e.g&&(tW(e),e.g.cancel(),e.g=null)}function tq(e){tj(e),e.u&&(a.clearTimeout(e.u),e.u=null),tY(e),e.h.cancel(),e.s&&("number"==typeof e.s&&a.clearTimeout(e.s),e.s=null)}function tz(e){if(!eJ(e.h)&&!e.s){e.s=!0;var t=e.Ga;O||V(),M||(O(),M=!0),P.add(t,e),e.B=0}}function t$(e,t){var r;r=t?t.l:e.U++;let n=e7(e.I);tn(n,"SID",e.K),tn(n,"RID",r),tn(n,"AID",e.T),tK(e,n),e.m&&e.o&&tx(n,e.m,e.o),r=new eV(e,e.j,r,e.B+1),null===e.m&&(r.H=e.o),t&&(e.i=t.D.concat(e.i)),t=tG(e,r,1e3),r.I=Math.round(.5*e.wa)+Math.round(.5*e.wa*Math.random()),e1(e.h,r),ej(r,n,t)}function tK(e,t){e.H&&A(e.H,function(e,r){tn(t,r,e)}),e.l&&e3({},function(e,r){tn(t,r,e)})}function tG(e,t,r){r=Math.min(e.i.length,r);var n=e.l?w(e.l.Na,e.l,e):null;e:{var i=e.i;let t=-1;for(;;){let e=["count="+r];-1==t?0<r?(t=i[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let a=0;a<r;a++){let r=i[a].g,o=i[a].map;if(0>(r-=t))t=Math.max(0,i[a].g-100),s=!1;else try{!function(e,t,r){let n=r||"";try{e3(e,function(e,r){let i=e;l(e)&&(i=ep(e)),t.push(n+r+"="+encodeURIComponent(i))})}catch(e){throw t.push(n+"type="+encodeURIComponent("_badmap")),e}}(o,e,"req"+r+"_")}catch(e){n&&n(o)}}if(s){n=e.join("&");break e}}}return e=e.i.splice(0,r),t.D=e,n}function tH(e){if(!e.g&&!e.u){e.Y=1;var t=e.Fa;O||V(),M||(O(),M=!0),P.add(t,e),e.v=0}}function tQ(e){return!e.g&&!e.u&&!(3<=e.v)&&(e.Y++,e.u=eN(w(e.Fa,e),tZ(e,e.v)),e.v++,!0)}function tW(e){null!=e.A&&(a.clearTimeout(e.A),e.A=null)}function tX(e){e.g=new eV(e,e.j,"rpc",e.Y),null===e.m&&(e.g.H=e.o),e.g.O=0;var t=e7(e.qa);tn(t,"RID","rpc"),tn(t,"SID",e.K),tn(t,"AID",e.T),tn(t,"CI",e.F?"0":"1"),!e.F&&e.ja&&tn(t,"TO",e.ja),tn(t,"TYPE","xmlhttp"),tK(e,t),e.m&&e.o&&tx(t,e.m,e.o),e.L&&(e.g.I=e.L);var r=e.g;e=e.ia,r.L=1,r.v=ti(e7(t)),r.m=null,r.P=!0,eq(r,e)}function tY(e){null!=e.C&&(a.clearTimeout(e.C),e.C=null)}function tJ(e,t){var r=null;if(e.g==t){tY(e),tW(e),e.g=null;var n=2}else{if(!e0(e.h,t))return;r=t.D,e2(e.h,t),n=1}if(0!=e.G){if(t.o){if(1==n){r=t.m?t.m.length:0,t=Date.now()-t.F;var i,s=e.B;eo(n=eC(),new ek(n,r)),tz(e)}else tH(e)}else if(3==(s=t.s)||0==s&&0<t.X||!(1==n&&(i=t,!(eZ(e.h)>=e.h.j-+!!e.s)&&(e.s?(e.i=i.D.concat(e.i),!0):1!=e.G&&2!=e.G&&!(e.B>=(e.Va?0:e.Wa))&&(e.s=eN(w(e.Ga,e,i),tZ(e,e.B)),e.B++,!0)))||2==n&&tQ(e)))switch(r&&0<r.length&&((t=e.h).i=t.i.concat(r)),s){case 1:t0(e,5);break;case 4:t0(e,10);break;case 3:t0(e,6);break;default:t0(e,2)}}}function tZ(e,t){let r=e.Ta+Math.floor(Math.random()*e.cb);return e.isActive()||(r*=2),r*t}function t0(e,t){if(e.j.info("Error code "+t),2==t){var r=w(e.fb,e),n=e.Xa;let t=!n;n=new e9(n||"//www.google.com/images/cleardot.gif"),a.location&&"http"==a.location.protocol||te(n,"https"),ti(n),t?function(e,t){let r=new eR;if(a.Image){let n=new Image;n.onload=b(tw,r,"TestLoadImage: loaded",!0,t,n),n.onerror=b(tw,r,"TestLoadImage: error",!1,t,n),n.onabort=b(tw,r,"TestLoadImage: abort",!1,t,n),n.ontimeout=b(tw,r,"TestLoadImage: timeout",!1,t,n),a.setTimeout(function(){n.ontimeout&&n.ontimeout()},1e4),n.src=e}else t(!1)}(n.toString(),r):function(e,t){let r=new eR,n=new AbortController,i=setTimeout(()=>{n.abort(),tw(r,"TestPingServer: timeout",!1,t)},1e4);fetch(e,{signal:n.signal}).then(e=>{clearTimeout(i),e.ok?tw(r,"TestPingServer: ok",!0,t):tw(r,"TestPingServer: server error",!1,t)}).catch(()=>{clearTimeout(i),tw(r,"TestPingServer: error",!1,t)})}(n.toString(),r)}else eD(2);e.G=0,e.l&&e.l.sa(t),t1(e),tq(e)}function t1(e){if(e.G=0,e.ka=[],e.l){let t=e6(e.h);(0!=t.length||0!=e.i.length)&&(T(e.ka,t),T(e.ka,e.i),e.h.i.length=0,_(e.i),e.i.length=0),e.l.ra()}}function t2(e,t,r){var n=r instanceof e9?e7(r):new e9(r);if(""!=n.g)t&&(n.g=t+"."+n.g),tt(n,n.s);else{var i=a.location;n=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new e9(null);n&&te(s,n),t&&(s.g=t),i&&tt(s,i),r&&(s.l=r),n=s}return r=e.D,t=e.ya,r&&t&&tn(n,r,t),tn(n,"VER",e.la),tK(e,n),n}function t6(e,t,r){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return(t=new tA(e.Ca&&!e.pa?new tE({eb:r}):e.pa)).Ha(e.J),t}function t3(){}function t5(){}function t8(e,t){ea.call(this),this.g=new tF(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.o=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.va&&(e?e["X-WebChannel-Client-Profile"]=t.va:e={"X-WebChannel-Client-Profile":t.va}),this.g.S=e,(e=t&&t.Sb)&&!S(e)&&(this.g.m=e),this.v=t&&t.supportsCrossDomainXhr||!1,this.u=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!S(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&t in(e=this.h)&&delete e[t]),this.j=new t7(this)}function t4(e){eE.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(let r in t){e=r;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function t9(){e_.call(this),this.status=1}function t7(e){this.g=e}(r=tA.prototype).Ha=function(e){this.J=e},r.ea=function(e,r,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+e);r=r?r.toUpperCase():"GET",this.D=e,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():t.g(),this.v=this.o?ev(this.o):ev(t),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(r,String(e),!0),this.B=!1}catch(e){tN(this,e);return}if(e=n||"",n=new Map(this.headers),i){if(Object.getPrototypeOf(i)===Object.prototype)for(var s in i)n.set(s,i[s]);else if("function"==typeof i.keys&&"function"==typeof i.get)for(let e of i.keys())n.set(e,i.get(e));else throw Error("Unknown input type for opt_headers: "+String(i))}for(let[t,o]of(i=Array.from(n.keys()).find(e=>"content-type"==e.toLowerCase()),s=a.FormData&&e instanceof a.FormData,!(0<=Array.prototype.indexOf.call(tk,r,void 0))||i||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),n))this.g.setRequestHeader(t,o);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{tM(this),this.u=!0,this.g.send(e),this.u=!1}catch(e){tN(this,e)}},r.abort=function(e){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=e||7,eo(this,"complete"),eo(this,"abort"),tO(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),tO(this,!0)),tA.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?tL(this):this.bb())},r.bb=function(){tL(this)},r.isActive=function(){return!!this.g},r.Z=function(){try{return 2<tP(this)?this.g.status:-1}catch(e){return -1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},r.Oa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),eg(t)}},r.Ba=function(){return this.m},r.Ka=function(){return"string"==typeof this.l?this.l:String(this.l)},(r=tF.prototype).la=8,r.G=1,r.connect=function(e,t,r,n){eD(0),this.W=e,this.H=t||{},r&&void 0!==n&&(this.H.OSID=r,this.H.OAID=n),this.F=this.X,this.I=t2(this,null,this.W),tz(this)},r.Ga=function(e){if(this.s){if(this.s=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;let i=new eV(this,this.j,e),s=this.o;if(this.S&&(s?N(s=D(s),this.S):s=this.S),null!==this.m||this.O||(i.H=s,s=null),this.P)e:{for(var t=0,r=0;r<this.i.length;r++){t:{var n=this.i[r];if("__data__"in n.map&&"string"==typeof(n=n.map.__data__)){n=n.length;break t}n=void 0}if(void 0===n)break;if(4096<(t+=n)){t=r;break e}if(4096===t||r===this.i.length-1){t=r+1;break e}}t=1e3}else t=1e3;t=tG(this,i,t),tn(r=e7(this.I),"RID",e),tn(r,"CVER",22),this.D&&tn(r,"X-HTTP-Session-Id",this.D),tK(this,r),s&&(this.O?t="headers="+encodeURIComponent(String(tI(s)))+"&"+t:this.m&&tx(r,this.m,s)),e1(this.h,i),this.Ua&&tn(r,"TYPE","init"),this.P?(tn(r,"$req",t),tn(r,"SID","null"),i.T=!0,ej(i,r,null)):ej(i,r,t),this.G=2}}else 3==this.G&&(e?t$(this,e):0==this.i.length||eJ(this.h)||t$(this))}},r.Fa=function(){if(this.u=null,tX(this),this.ba&&!(this.M||null==this.g||0>=this.R)){var e=2*this.R;this.j.info("BP detection timer enabled: "+e),this.A=eN(w(this.ab,this),e)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,eD(10),tj(this),tX(this))},r.Za=function(){null!=this.C&&(this.C=null,tj(this),tQ(this),eD(19))},r.fb=function(e){e?(this.j.info("Successfully pinged google.com"),eD(2)):(this.j.info("Failed to ping google.com"),eD(1))},r.isActive=function(){return!!this.l&&this.l.isActive(this)},(r=t3.prototype).ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){},t5.prototype.g=function(e,t){return new t8(e,t)},E(t8,ea),t8.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},t8.prototype.close=function(){tB(this.g)},t8.prototype.o=function(e){var t=this.g;if("string"==typeof e){var r={};r.__data__=e,e=r}else this.u&&((r={}).__data__=ep(e),e=r);t.i.push(new eX(t.Ya++,e)),3==t.G&&tz(t)},t8.prototype.N=function(){this.g.l=null,delete this.j,tB(this.g),delete this.g,t8.aa.N.call(this)},E(t4,eE),E(t9,e_),E(t7,t3),t7.prototype.ua=function(){eo(this.g,"a")},t7.prototype.ta=function(e){eo(this.g,new t4(e))},t7.prototype.sa=function(e){eo(this.g,new t9)},t7.prototype.ra=function(){eo(this.g,"b")},t5.prototype.createWebChannel=t5.prototype.g,t8.prototype.send=t8.prototype.o,t8.prototype.open=t8.prototype.m,t8.prototype.close=t8.prototype.close,y=e8.createWebChannelTransport=function(){return new t5},m=e8.getStatEventTarget=function(){return eC()},g=e8.Event=eT,p=e8.Stat={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},eO.NO_ERROR=0,eO.TIMEOUT=8,eO.HTTP_ERROR=6,d=e8.ErrorCode=eO,eM.COMPLETE="complete",f=e8.EventType=eM,ew.EventType=eb,eb.OPEN="a",eb.CLOSE="b",eb.ERROR="c",eb.MESSAGE="d",ea.prototype.listen=ea.prototype.K,c=e8.WebChannel=ew,e8.FetchXmlHttpFactory=tE,tA.prototype.listenOnce=tA.prototype.L,tA.prototype.getLastError=tA.prototype.Ka,tA.prototype.getLastErrorCode=tA.prototype.Ba,tA.prototype.getStatus=tA.prototype.Z,tA.prototype.getResponseJson=tA.prototype.Oa,tA.prototype.getResponseText=tA.prototype.oa,tA.prototype.send=tA.prototype.ea,tA.prototype.setWithCredentials=tA.prototype.Ha,u=e8.XhrIo=tA}).apply(void 0!==e5?e5:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{}),v=function(e){var t,r,n=function(e){var t=e.length;if(t%4>0)throw Error("Invalid string. Length must be a multiple of 4");var r=e.indexOf("=");-1===r&&(r=t);var n=r===t?0:4-r%4;return[r,n]}(e),i=n[0],s=n[1],a=new e7((i+s)*3/4-s),o=0,l=s>0?i-4:i;for(r=0;r<l;r+=4)t=e9[e.charCodeAt(r)]<<18|e9[e.charCodeAt(r+1)]<<12|e9[e.charCodeAt(r+2)]<<6|e9[e.charCodeAt(r+3)],a[o++]=t>>16&255,a[o++]=t>>8&255,a[o++]=255&t;return 2===s&&(t=e9[e.charCodeAt(r)]<<2|e9[e.charCodeAt(r+1)]>>4,a[o++]=255&t),1===s&&(t=e9[e.charCodeAt(r)]<<10|e9[e.charCodeAt(r+1)]<<4|e9[e.charCodeAt(r+2)]>>2,a[o++]=t>>8&255,a[o++]=255&t),a},w=function(e){for(var t,r=e.length,n=r%3,i=[],s=0,a=r-n;s<a;s+=16383)i.push(function(e,t,r){for(var n,i=[],s=t;s<r;s+=3)i.push(e4[(n=(e[s]<<16&0xff0000)+(e[s+1]<<8&65280)+(255&e[s+2]))>>18&63]+e4[n>>12&63]+e4[n>>6&63]+e4[63&n]);return i.join("")}(e,s,s+16383>a?a:s+16383));return 1===n?i.push(e4[(t=e[r-1])>>2]+e4[t<<4&63]+"=="):2===n&&i.push(e4[(t=(e[r-2]<<8)+e[r-1])>>10]+e4[t>>4&63]+e4[t<<2&63]+"="),i.join("")};for(var e4=[],e9=[],e7="undefined"!=typeof Uint8Array?Uint8Array:Array,te="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",tt=0,tr=te.length;tt<tr;++tt)e4[tt]=te[tt],e9[te.charCodeAt(tt)]=tt;e9["-".charCodeAt(0)]=62,e9["_".charCodeAt(0)]=63,b=function(e,t,r,n,i){var s,a,o=8*i-n-1,l=(1<<o)-1,h=l>>1,u=-7,c=r?i-1:0,f=r?-1:1,d=e[t+c];for(c+=f,s=d&(1<<-u)-1,d>>=-u,u+=o;u>0;s=256*s+e[t+c],c+=f,u-=8);for(a=s&(1<<-u)-1,s>>=-u,u+=n;u>0;a=256*a+e[t+c],c+=f,u-=8);if(0===s)s=1-h;else{if(s===l)return a?NaN:1/0*(d?-1:1);a+=Math.pow(2,n),s-=h}return(d?-1:1)*a*Math.pow(2,s-n)},E=function(e,t,r,n,i,s){var a,o,l,h=8*s-i-1,u=(1<<h)-1,c=u>>1,f=5960464477539062e-23*(23===i),d=n?0:s-1,p=n?1:-1,g=+(t<0||0===t&&1/t<0);for(isNaN(t=Math.abs(t))||t===1/0?(o=+!!isNaN(t),a=u):(a=Math.floor(Math.log(t)/Math.LN2),t*(l=Math.pow(2,-a))<1&&(a--,l*=2),a+c>=1?t+=f/l:t+=f*Math.pow(2,1-c),t*l>=2&&(a++,l/=2),a+c>=u?(o=0,a=u):a+c>=1?(o=(t*l-1)*Math.pow(2,i),a+=c):(o=t*Math.pow(2,c-1)*Math.pow(2,i),a=0));i>=8;e[r+d]=255&o,d+=p,o/=256,i-=8);for(a=a<<i|o,h+=i;h>0;e[r+d]=255&a,d+=p,a/=256,h-=8);e[r+d-p]|=128*g};var tn="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;function ti(e){if(e>0x7fffffff)throw RangeError('The value "'+e+'" is invalid for option "size"');var t=new Uint8Array(e);return Object.setPrototypeOf(t,ts.prototype),t}function ts(e,t,r){if("number"==typeof e){if("string"==typeof t)throw TypeError('The "string" argument must be of type string. Received type number');return tl(e)}return ta(e,t,r)}function ta(e,t,r){if("string"==typeof e)return function(e,t){if(("string"!=typeof t||""===t)&&(t="utf8"),!ts.isEncoding(t))throw TypeError("Unknown encoding: "+t);var r=0|tf(e,t),n=ti(r),i=n.write(e,t);return i!==r&&(n=n.slice(0,i)),n}(e,t);if(ArrayBuffer.isView(e))return function(e){if(tx(e,Uint8Array)){var t=new Uint8Array(e);return tu(t.buffer,t.byteOffset,t.byteLength)}return th(e)}(e);if(null==e)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(tx(e,ArrayBuffer)||e&&tx(e.buffer,ArrayBuffer)||"undefined"!=typeof SharedArrayBuffer&&(tx(e,SharedArrayBuffer)||e&&tx(e.buffer,SharedArrayBuffer)))return tu(e,t,r);if("number"==typeof e)throw TypeError('The "value" argument must not be of type number. Received type number');var n=e.valueOf&&e.valueOf();if(null!=n&&n!==e)return ts.from(n,t,r);var i=function(e){if(ts.isBuffer(e)){var t,r=0|tc(e.length),n=ti(r);return 0===n.length||e.copy(n,0,0,r),n}return void 0!==e.length?"number"!=typeof e.length||(t=e.length)!=t?ti(0):th(e):"Buffer"===e.type&&Array.isArray(e.data)?th(e.data):void 0}(e);if(i)return i;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return ts.from(e[Symbol.toPrimitive]("string"),t,r);throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function to(e){if("number"!=typeof e)throw TypeError('"size" argument must be of type number');if(e<0)throw RangeError('The value "'+e+'" is invalid for option "size"')}function tl(e){return to(e),ti(e<0?0:0|tc(e))}function th(e){for(var t=e.length<0?0:0|tc(e.length),r=ti(t),n=0;n<t;n+=1)r[n]=255&e[n];return r}function tu(e,t,r){var n;if(t<0||e.byteLength<t)throw RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(r||0))throw RangeError('"length" is outside of buffer bounds');return Object.setPrototypeOf(n=void 0===t&&void 0===r?new Uint8Array(e):void 0===r?new Uint8Array(e,t):new Uint8Array(e,t,r),ts.prototype),n}function tc(e){if(e>=0x7fffffff)throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");return 0|e}function tf(e,t){if(ts.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||tx(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var r=e.length,n=arguments.length>2&&!0===arguments[2];if(!n&&0===r)return 0;for(var i=!1;;)switch(t){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return tS(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return tC(e).length;default:if(i)return n?-1:tS(e).length;t=(""+t).toLowerCase(),i=!0}}function td(e,t,r){var n,i,s=!1;if((void 0===t||t<0)&&(t=0),t>this.length||((void 0===r||r>this.length)&&(r=this.length),r<=0||(r>>>=0)<=(t>>>=0)))return"";for(e||(e="utf8");;)switch(e){case"hex":return function(e,t,r){var n=e.length;(!t||t<0)&&(t=0),(!r||r<0||r>n)&&(r=n);for(var i="",s=t;s<r;++s)i+=tA[e[s]];return i}(this,t,r);case"utf8":case"utf-8":return ty(this,t,r);case"ascii":return function(e,t,r){var n="";r=Math.min(e.length,r);for(var i=t;i<r;++i)n+=String.fromCharCode(127&e[i]);return n}(this,t,r);case"latin1":case"binary":return function(e,t,r){var n="";r=Math.min(e.length,r);for(var i=t;i<r;++i)n+=String.fromCharCode(e[i]);return n}(this,t,r);case"base64":return n=t,i=r,0===n&&i===this.length?w(this):w(this.slice(n,i));case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return function(e,t,r){for(var n=e.slice(t,r),i="",s=0;s<n.length-1;s+=2)i+=String.fromCharCode(n[s]+256*n[s+1]);return i}(this,t,r);default:if(s)throw TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),s=!0}}function tp(e,t,r){var n=e[t];e[t]=e[r],e[r]=n}function tg(e,t,r,n,i){var s;if(0===e.length)return -1;if("string"==typeof r?(n=r,r=0):r>0x7fffffff?r=0x7fffffff:r<-0x80000000&&(r=-0x80000000),(s=r=+r)!=s&&(r=i?0:e.length-1),r<0&&(r=e.length+r),r>=e.length){if(i)return -1;r=e.length-1}else if(r<0){if(!i)return -1;r=0}if("string"==typeof t&&(t=ts.from(t,n)),ts.isBuffer(t))return 0===t.length?-1:tm(e,t,r,n,i);if("number"==typeof t)return(t&=255,"function"==typeof Uint8Array.prototype.indexOf)?i?Uint8Array.prototype.indexOf.call(e,t,r):Uint8Array.prototype.lastIndexOf.call(e,t,r):tm(e,[t],r,n,i);throw TypeError("val must be string, number or Buffer")}function tm(e,t,r,n,i){var s,a=1,o=e.length,l=t.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(e.length<2||t.length<2)return -1;a=2,o/=2,l/=2,r/=2}function h(e,t){return 1===a?e[t]:e.readUInt16BE(t*a)}if(i){var u=-1;for(s=r;s<o;s++)if(h(e,s)===h(t,-1===u?0:s-u)){if(-1===u&&(u=s),s-u+1===l)return u*a}else -1!==u&&(s-=s-u),u=-1}else for(r+l>o&&(r=o-l),s=r;s>=0;s--){for(var c=!0,f=0;f<l;f++)if(h(e,s+f)!==h(t,f)){c=!1;break}if(c)return s}return -1}function ty(e,t,r){r=Math.min(e.length,r);for(var n=[],i=t;i<r;){var s,a,o,l,h=e[i],u=null,c=h>239?4:h>223?3:h>191?2:1;if(i+c<=r)switch(c){case 1:h<128&&(u=h);break;case 2:(192&(s=e[i+1]))==128&&(l=(31&h)<<6|63&s)>127&&(u=l);break;case 3:s=e[i+1],a=e[i+2],(192&s)==128&&(192&a)==128&&(l=(15&h)<<12|(63&s)<<6|63&a)>2047&&(l<55296||l>57343)&&(u=l);break;case 4:s=e[i+1],a=e[i+2],o=e[i+3],(192&s)==128&&(192&a)==128&&(192&o)==128&&(l=(15&h)<<18|(63&s)<<12|(63&a)<<6|63&o)>65535&&l<1114112&&(u=l)}null===u?(u=65533,c=1):u>65535&&(u-=65536,n.push(u>>>10&1023|55296),u=56320|1023&u),n.push(u),i+=c}return function(e){var t=e.length;if(t<=4096)return String.fromCharCode.apply(String,e);for(var r="",n=0;n<t;)r+=String.fromCharCode.apply(String,e.slice(n,n+=4096));return r}(n)}function tv(e,t,r){if(e%1!=0||e<0)throw RangeError("offset is not uint");if(e+t>r)throw RangeError("Trying to access beyond buffer length")}function tw(e,t,r,n,i,s){if(!ts.isBuffer(e))throw TypeError('"buffer" argument must be a Buffer instance');if(t>i||t<s)throw RangeError('"value" argument is out of bounds');if(r+n>e.length)throw RangeError("Index out of range")}function tb(e,t,r,n,i,s){if(r+n>e.length||r<0)throw RangeError("Index out of range")}function tE(e,t,r,n,i){return t=+t,r>>>=0,i||tb(e,t,r,4,34028234663852886e22,-34028234663852886e22),E(e,t,r,n,23,4),r+4}function t_(e,t,r,n,i){return t=+t,r>>>=0,i||tb(e,t,r,8,17976931348623157e292,-17976931348623157e292),E(e,t,r,n,52,8),r+8}ts.TYPED_ARRAY_SUPPORT=function(){try{var e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),ts.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(ts.prototype,"parent",{enumerable:!0,get:function(){if(ts.isBuffer(this))return this.buffer}}),Object.defineProperty(ts.prototype,"offset",{enumerable:!0,get:function(){if(ts.isBuffer(this))return this.byteOffset}}),ts.poolSize=8192,ts.from=function(e,t,r){return ta(e,t,r)},Object.setPrototypeOf(ts.prototype,Uint8Array.prototype),Object.setPrototypeOf(ts,Uint8Array),ts.alloc=function(e,t,r){return(to(e),e<=0)?ti(e):void 0!==t?"string"==typeof r?ti(e).fill(t,r):ti(e).fill(t):ti(e)},ts.allocUnsafe=function(e){return tl(e)},ts.allocUnsafeSlow=function(e){return tl(e)},ts.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==ts.prototype},ts.compare=function(e,t){if(tx(e,Uint8Array)&&(e=ts.from(e,e.offset,e.byteLength)),tx(t,Uint8Array)&&(t=ts.from(t,t.offset,t.byteLength)),!ts.isBuffer(e)||!ts.isBuffer(t))throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;for(var r=e.length,n=t.length,i=0,s=Math.min(r,n);i<s;++i)if(e[i]!==t[i]){r=e[i],n=t[i];break}return r<n?-1:+(n<r)},ts.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},ts.concat=function(e,t){if(!Array.isArray(e))throw TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return ts.alloc(0);if(void 0===t)for(r=0,t=0;r<e.length;++r)t+=e[r].length;var r,n=ts.allocUnsafe(t),i=0;for(r=0;r<e.length;++r){var s=e[r];if(tx(s,Uint8Array))i+s.length>n.length?ts.from(s).copy(n,i):Uint8Array.prototype.set.call(n,s,i);else if(ts.isBuffer(s))s.copy(n,i);else throw TypeError('"list" argument must be an Array of Buffers');i+=s.length}return n},ts.byteLength=tf,ts.prototype._isBuffer=!0,ts.prototype.swap16=function(){var e=this.length;if(e%2!=0)throw RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)tp(this,t,t+1);return this},ts.prototype.swap32=function(){var e=this.length;if(e%4!=0)throw RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)tp(this,t,t+3),tp(this,t+1,t+2);return this},ts.prototype.swap64=function(){var e=this.length;if(e%8!=0)throw RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)tp(this,t,t+7),tp(this,t+1,t+6),tp(this,t+2,t+5),tp(this,t+3,t+4);return this},ts.prototype.toString=function(){var e=this.length;return 0===e?"":0==arguments.length?ty(this,0,e):td.apply(this,arguments)},ts.prototype.toLocaleString=ts.prototype.toString,ts.prototype.equals=function(e){if(!ts.isBuffer(e))throw TypeError("Argument must be a Buffer");return this===e||0===ts.compare(this,e)},ts.prototype.inspect=function(){var e="";return e=this.toString("hex",0,50).replace(/(.{2})/g,"$1 ").trim(),this.length>50&&(e+=" ... "),"<Buffer "+e+">"},tn&&(ts.prototype[tn]=ts.prototype.inspect),ts.prototype.compare=function(e,t,r,n,i){if(tx(e,Uint8Array)&&(e=ts.from(e,e.offset,e.byteLength)),!ts.isBuffer(e))throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===r&&(r=e?e.length:0),void 0===n&&(n=0),void 0===i&&(i=this.length),t<0||r>e.length||n<0||i>this.length)throw RangeError("out of range index");if(n>=i&&t>=r)return 0;if(n>=i)return -1;if(t>=r)return 1;if(t>>>=0,r>>>=0,n>>>=0,i>>>=0,this===e)return 0;for(var s=i-n,a=r-t,o=Math.min(s,a),l=this.slice(n,i),h=e.slice(t,r),u=0;u<o;++u)if(l[u]!==h[u]){s=l[u],a=h[u];break}return s<a?-1:+(a<s)},ts.prototype.includes=function(e,t,r){return -1!==this.indexOf(e,t,r)},ts.prototype.indexOf=function(e,t,r){return tg(this,e,t,r,!0)},ts.prototype.lastIndexOf=function(e,t,r){return tg(this,e,t,r,!1)},ts.prototype.write=function(e,t,r,n){if(void 0===t)n="utf8",r=this.length,t=0;else if(void 0===r&&"string"==typeof t)n=t,r=this.length,t=0;else if(isFinite(t))t>>>=0,isFinite(r)?(r>>>=0,void 0===n&&(n="utf8")):(n=r,r=void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var i,s,a,o,l,h,u,c,f=this.length-t;if((void 0===r||r>f)&&(r=f),e.length>0&&(r<0||t<0)||t>this.length)throw RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var d=!1;;)switch(n){case"hex":return function(e,t,r,n){r=Number(r)||0;var i=e.length-r;n?(n=Number(n))>i&&(n=i):n=i;var s=t.length;n>s/2&&(n=s/2);for(var a=0;a<n;++a){var o=parseInt(t.substr(2*a,2),16);if(o!=o)break;e[r+a]=o}return a}(this,e,t,r);case"utf8":case"utf-8":return i=t,s=r,tI(tS(e,this.length-i),this,i,s);case"ascii":case"latin1":case"binary":return a=t,o=r,tI(function(e){for(var t=[],r=0;r<e.length;++r)t.push(255&e.charCodeAt(r));return t}(e),this,a,o);case"base64":return l=t,h=r,tI(tC(e),this,l,h);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return u=t,c=r,tI(function(e,t){for(var r,n,i=[],s=0;s<e.length&&!((t-=2)<0);++s)n=(r=e.charCodeAt(s))>>8,i.push(r%256),i.push(n);return i}(e,this.length-u),this,u,c);default:if(d)throw TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),d=!0}},ts.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},ts.prototype.slice=function(e,t){var r=this.length;e=~~e,t=void 0===t?r:~~t,e<0?(e+=r)<0&&(e=0):e>r&&(e=r),t<0?(t+=r)<0&&(t=0):t>r&&(t=r),t<e&&(t=e);var n=this.subarray(e,t);return Object.setPrototypeOf(n,ts.prototype),n},ts.prototype.readUintLE=ts.prototype.readUIntLE=function(e,t,r){e>>>=0,t>>>=0,r||tv(e,t,this.length);for(var n=this[e],i=1,s=0;++s<t&&(i*=256);)n+=this[e+s]*i;return n},ts.prototype.readUintBE=ts.prototype.readUIntBE=function(e,t,r){e>>>=0,t>>>=0,r||tv(e,t,this.length);for(var n=this[e+--t],i=1;t>0&&(i*=256);)n+=this[e+--t]*i;return n},ts.prototype.readUint8=ts.prototype.readUInt8=function(e,t){return e>>>=0,t||tv(e,1,this.length),this[e]},ts.prototype.readUint16LE=ts.prototype.readUInt16LE=function(e,t){return e>>>=0,t||tv(e,2,this.length),this[e]|this[e+1]<<8},ts.prototype.readUint16BE=ts.prototype.readUInt16BE=function(e,t){return e>>>=0,t||tv(e,2,this.length),this[e]<<8|this[e+1]},ts.prototype.readUint32LE=ts.prototype.readUInt32LE=function(e,t){return e>>>=0,t||tv(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+0x1000000*this[e+3]},ts.prototype.readUint32BE=ts.prototype.readUInt32BE=function(e,t){return e>>>=0,t||tv(e,4,this.length),0x1000000*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},ts.prototype.readIntLE=function(e,t,r){e>>>=0,t>>>=0,r||tv(e,t,this.length);for(var n=this[e],i=1,s=0;++s<t&&(i*=256);)n+=this[e+s]*i;return n>=(i*=128)&&(n-=Math.pow(2,8*t)),n},ts.prototype.readIntBE=function(e,t,r){e>>>=0,t>>>=0,r||tv(e,t,this.length);for(var n=t,i=1,s=this[e+--n];n>0&&(i*=256);)s+=this[e+--n]*i;return s>=(i*=128)&&(s-=Math.pow(2,8*t)),s},ts.prototype.readInt8=function(e,t){return(e>>>=0,t||tv(e,1,this.length),128&this[e])?-((255-this[e]+1)*1):this[e]},ts.prototype.readInt16LE=function(e,t){e>>>=0,t||tv(e,2,this.length);var r=this[e]|this[e+1]<<8;return 32768&r?0xffff0000|r:r},ts.prototype.readInt16BE=function(e,t){e>>>=0,t||tv(e,2,this.length);var r=this[e+1]|this[e]<<8;return 32768&r?0xffff0000|r:r},ts.prototype.readInt32LE=function(e,t){return e>>>=0,t||tv(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},ts.prototype.readInt32BE=function(e,t){return e>>>=0,t||tv(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},ts.prototype.readFloatLE=function(e,t){return e>>>=0,t||tv(e,4,this.length),b(this,e,!0,23,4)},ts.prototype.readFloatBE=function(e,t){return e>>>=0,t||tv(e,4,this.length),b(this,e,!1,23,4)},ts.prototype.readDoubleLE=function(e,t){return e>>>=0,t||tv(e,8,this.length),b(this,e,!0,52,8)},ts.prototype.readDoubleBE=function(e,t){return e>>>=0,t||tv(e,8,this.length),b(this,e,!1,52,8)},ts.prototype.writeUintLE=ts.prototype.writeUIntLE=function(e,t,r,n){if(e=+e,t>>>=0,r>>>=0,!n){var i=Math.pow(2,8*r)-1;tw(this,e,t,r,i,0)}var s=1,a=0;for(this[t]=255&e;++a<r&&(s*=256);)this[t+a]=e/s&255;return t+r},ts.prototype.writeUintBE=ts.prototype.writeUIntBE=function(e,t,r,n){if(e=+e,t>>>=0,r>>>=0,!n){var i=Math.pow(2,8*r)-1;tw(this,e,t,r,i,0)}var s=r-1,a=1;for(this[t+s]=255&e;--s>=0&&(a*=256);)this[t+s]=e/a&255;return t+r},ts.prototype.writeUint8=ts.prototype.writeUInt8=function(e,t,r){return e=+e,t>>>=0,r||tw(this,e,t,1,255,0),this[t]=255&e,t+1},ts.prototype.writeUint16LE=ts.prototype.writeUInt16LE=function(e,t,r){return e=+e,t>>>=0,r||tw(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},ts.prototype.writeUint16BE=ts.prototype.writeUInt16BE=function(e,t,r){return e=+e,t>>>=0,r||tw(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},ts.prototype.writeUint32LE=ts.prototype.writeUInt32LE=function(e,t,r){return e=+e,t>>>=0,r||tw(this,e,t,4,0xffffffff,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},ts.prototype.writeUint32BE=ts.prototype.writeUInt32BE=function(e,t,r){return e=+e,t>>>=0,r||tw(this,e,t,4,0xffffffff,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},ts.prototype.writeIntLE=function(e,t,r,n){if(e=+e,t>>>=0,!n){var i=Math.pow(2,8*r-1);tw(this,e,t,r,i-1,-i)}var s=0,a=1,o=0;for(this[t]=255&e;++s<r&&(a*=256);)e<0&&0===o&&0!==this[t+s-1]&&(o=1),this[t+s]=(e/a>>0)-o&255;return t+r},ts.prototype.writeIntBE=function(e,t,r,n){if(e=+e,t>>>=0,!n){var i=Math.pow(2,8*r-1);tw(this,e,t,r,i-1,-i)}var s=r-1,a=1,o=0;for(this[t+s]=255&e;--s>=0&&(a*=256);)e<0&&0===o&&0!==this[t+s+1]&&(o=1),this[t+s]=(e/a>>0)-o&255;return t+r},ts.prototype.writeInt8=function(e,t,r){return e=+e,t>>>=0,r||tw(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},ts.prototype.writeInt16LE=function(e,t,r){return e=+e,t>>>=0,r||tw(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},ts.prototype.writeInt16BE=function(e,t,r){return e=+e,t>>>=0,r||tw(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},ts.prototype.writeInt32LE=function(e,t,r){return e=+e,t>>>=0,r||tw(this,e,t,4,0x7fffffff,-0x80000000),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},ts.prototype.writeInt32BE=function(e,t,r){return e=+e,t>>>=0,r||tw(this,e,t,4,0x7fffffff,-0x80000000),e<0&&(e=0xffffffff+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},ts.prototype.writeFloatLE=function(e,t,r){return tE(this,e,t,!0,r)},ts.prototype.writeFloatBE=function(e,t,r){return tE(this,e,t,!1,r)},ts.prototype.writeDoubleLE=function(e,t,r){return t_(this,e,t,!0,r)},ts.prototype.writeDoubleBE=function(e,t,r){return t_(this,e,t,!1,r)},ts.prototype.copy=function(e,t,r,n){if(!ts.isBuffer(e))throw TypeError("argument should be a Buffer");if(r||(r=0),n||0===n||(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<r&&(n=r),n===r||0===e.length||0===this.length)return 0;if(t<0)throw RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw RangeError("Index out of range");if(n<0)throw RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-r&&(n=e.length-t+r);var i=n-r;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,r,n):Uint8Array.prototype.set.call(e,this.subarray(r,n),t),i},ts.prototype.fill=function(e,t,r,n){if("string"==typeof e){if("string"==typeof t?(n=t,t=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),void 0!==n&&"string"!=typeof n)throw TypeError("encoding must be a string");if("string"==typeof n&&!ts.isEncoding(n))throw TypeError("Unknown encoding: "+n);if(1===e.length){var i,s=e.charCodeAt(0);("utf8"===n&&s<128||"latin1"===n)&&(e=s)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<r)throw RangeError("Out of range index");if(r<=t)return this;if(t>>>=0,r=void 0===r?this.length:r>>>0,e||(e=0),"number"==typeof e)for(i=t;i<r;++i)this[i]=e;else{var a=ts.isBuffer(e)?e:ts.from(e,n),o=a.length;if(0===o)throw TypeError('The value "'+e+'" is invalid for argument "value"');for(i=0;i<r-t;++i)this[i+t]=a[i%o]}return this};var tT=/[^+/0-9A-Za-z-_]/g;function tS(e,t){t=t||1/0;for(var r,n=e.length,i=null,s=[],a=0;a<n;++a){if((r=e.charCodeAt(a))>55295&&r<57344){if(!i){if(r>56319||a+1===n){(t-=3)>-1&&s.push(239,191,189);continue}i=r;continue}if(r<56320){(t-=3)>-1&&s.push(239,191,189),i=r;continue}r=(i-55296<<10|r-56320)+65536}else i&&(t-=3)>-1&&s.push(239,191,189);if(i=null,r<128){if((t-=1)<0)break;s.push(r)}else if(r<2048){if((t-=2)<0)break;s.push(r>>6|192,63&r|128)}else if(r<65536){if((t-=3)<0)break;s.push(r>>12|224,r>>6&63|128,63&r|128)}else if(r<1114112){if((t-=4)<0)break;s.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}else throw Error("Invalid code point")}return s}function tC(e){return v(function(e){if((e=(e=e.split("=")[0]).trim().replace(tT,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function tI(e,t,r,n){for(var i=0;i<n&&!(i+r>=t.length)&&!(i>=e.length);++i)t[i+r]=e[i];return i}function tx(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}var tA=function(){for(var e="0123456789abcdef",t=Array(256),r=0;r<16;++r)for(var n=16*r,i=0;i<16;++i)t[n+i]=e[r]+e[i];return t}();const tD="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tk{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}tk.UNAUTHENTICATED=new tk(null),tk.GOOGLE_CREDENTIALS=new tk("google-credentials-uid"),tk.FIRST_PARTY=new tk("first-party-uid"),tk.MOCK_USER=new tk("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tN="11.2.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tR=new ev("@firebase/firestore");function tL(){return tR.logLevel}function tO(e,...t){if(tR.logLevel<=o.DEBUG){let r=t.map(tV);tR.debug(`Firestore (${tN}): ${e}`,...r)}}function tM(e,...t){if(tR.logLevel<=o.ERROR){let r=t.map(tV);tR.error(`Firestore (${tN}): ${e}`,...r)}}function tP(e,...t){if(tR.logLevel<=o.WARN){let r=t.map(tV);tR.warn(`Firestore (${tN}): ${e}`,...r)}}function tV(e){if("string"==typeof e)return e;try{/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */return JSON.stringify(e)}catch(t){return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tU(e="Unexpected state"){let t=`FIRESTORE (${tN}) INTERNAL ASSERTION FAILED: `+e;throw tM(t),Error(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tF={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class tB extends en{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tj{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tq{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class tz{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(tk.UNAUTHENTICATED))}shutdown(){}}class t${constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class tK{constructor(e){this.t=e,this.currentUser=tk.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){void 0===this.o||tU();let r=this.i,n=e=>this.i!==r?(r=this.i,t(e)):Promise.resolve(),i=new tj;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new tj,e.enqueueRetryable(()=>n(this.currentUser))};let s=()=>{let t=i;e.enqueueRetryable(async()=>{await t.promise,await n(this.currentUser)})},a=e=>{tO("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.o&&(this.auth.addAuthTokenListener(this.o),s())};this.t.onInit(e=>a(e)),setTimeout(()=>{if(!this.auth){let e=this.t.getImmediate({optional:!0});e?a(e):(tO("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new tj)}},0),s()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(tO("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?("string"==typeof t.accessToken||tU(),new tq(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){let e=this.auth&&this.auth.getUid();return null===e||"string"==typeof e||tU(),new tk(e)}}class tG{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=tk.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);let e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class tH{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new tG(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(tk.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class tQ{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class tW{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){void 0===this.o||tU();let r=e=>{null!=e.error&&tO("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);let r=e.token!==this.R;return this.R=e.token,tO("FirebaseAppCheckTokenProvider",`Received ${r?"new":"existing"} token.`),r?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>r(t))};let n=e=>{tO("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(e=>n(e)),setTimeout(()=>{if(!this.appCheck){let e=this.A.getImmediate({optional:!0});e?n(e):tO("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?("string"==typeof e.token||tU(),this.R=e.token,new tQ(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tX{static newId(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,r="";for(;r.length<20;){let n=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){let t="undefined"!=typeof self&&(self.crypto||self.msCrypto),r=new Uint8Array(40);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(r);else for(let e=0;e<40;e++)r[e]=Math.floor(256*Math.random());return r}(0);for(let i=0;i<n.length;++i)r.length<20&&n[i]<t&&(r+=e.charAt(n[i]%e.length))}return r}}function tY(e,t){return e<t?-1:+(e>t)}function tJ(e,t,r){return e.length===t.length&&e.every((e,n)=>r(e,t[n]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tZ{static now(){return tZ.fromMillis(Date.now())}static fromDate(e){return tZ.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new tZ(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0||t>=1e9)throw new tB(tF.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-0xe7791f700||e>=0x3afff44180)throw new tB(tF.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?tY(this.nanoseconds,e.nanoseconds):tY(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){return String(this.seconds- -0xe7791f700).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t0{static fromTimestamp(e){return new t0(e)}static min(){return new t0(new tZ(0,0))}static max(){return new t0(new tZ(0x3afff4417f,0x3b9ac9ff))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t1{constructor(e,t,r){void 0===t?t=0:t>e.length&&tU(),void 0===r?r=e.length-t:r>e.length-t&&tU(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return 0===t1.comparator(this,e)}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof t1?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let r=Math.min(e.length,t.length);for(let n=0;n<r;n++){let r=t1.compareSegments(e.get(n),t.get(n));if(0!==r)return r}return Math.sign(e.length-t.length)}static compareSegments(e,t){let r=t1.isNumericId(e),n=t1.isNumericId(t);return r&&!n?-1:!r&&n?1:r&&n?t1.extractNumericId(e).compare(t1.extractNumericId(t)):e<t?-1:+(e>t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return l.fromString(e.substring(4,e.length-2))}}class t2 extends t1{construct(e,t,r){return new t2(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){let t=[];for(let r of e){if(r.indexOf("//")>=0)throw new tB(tF.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(e=>e.length>0))}return new t2(t)}static emptyPath(){return new t2([])}}const t6=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class t3 extends t1{construct(e,t,r){return new t3(e,t,r)}static isValidIdentifier(e){return t6.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),t3.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new t3(["__name__"])}static fromServerFormat(e){let t=[],r="",n=0,i=()=>{if(0===r.length)throw new tB(tF.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""},s=!1;for(;n<e.length;){let t=e[n];if("\\"===t){if(n+1===e.length)throw new tB(tF.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let t=e[n+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new tB(tF.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=t,n+=2}else"`"===t?s=!s:"."!==t||s?r+=t:i(),n++}if(i(),s)throw new tB(tF.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new t3(t)}static emptyPath(){return new t3([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t5{constructor(e){this.path=e}static fromPath(e){return new t5(t2.fromString(e))}static fromName(e){return new t5(t2.fromString(e).popFirst(5))}static empty(){return new t5(t2.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===t2.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return t2.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new t5(new t2(e.slice()))}}class t8{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new t8(t0.min(),t5.empty(),-1)}static max(){return new t8(t0.max(),t5.empty(),-1)}}class t4{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function t9(e){if(e.code!==tF.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;tO("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t7{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&tU(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new t7((r,n)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(r,n)},this.catchCallback=e=>{this.wrapFailure(t,e).next(r,n)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof t7?t:t7.resolve(t)}catch(e){return t7.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):t7.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):t7.reject(t)}static resolve(e){return new t7((t,r)=>{t(e)})}static reject(e){return new t7((t,r)=>{r(e)})}static waitFor(e){return new t7((t,r)=>{let n=0,i=0,s=!1;e.forEach(e=>{++n,e.next(()=>{++i,s&&i===n&&t()},e=>r(e))}),s=!0,i===n&&t()})}static or(e){let t=t7.resolve(!1);for(let r of e)t=t.next(e=>e?t7.resolve(e):r());return t}static forEach(e,t){let r=[];return e.forEach((e,n)=>{r.push(t.call(this,e,n))}),this.waitFor(r)}static mapArray(e,t){return new t7((r,n)=>{let i=e.length,s=Array(i),a=0;for(let o=0;o<i;o++){let l=o;t(e[l]).next(e=>{s[l]=e,++a===i&&r(s)},e=>n(e))}})}static doWhile(e,t){return new t7((r,n)=>{let i=()=>{!0===e()?t().next(()=>{i()},n):r()};i()})}}function re(e){return"IndexedDbTransactionError"===e.name}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ie(e),this.se=e=>t.writeSequenceNumber(e))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this.se&&this.se(e),e}}function rr(e){return 0===e&&1/e==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rn(e){let t=0;for(let r in e)Object.prototype.hasOwnProperty.call(e,r)&&t++;return t}function ri(e,t){for(let r in e)Object.prototype.hasOwnProperty.call(e,r)&&t(r,e[r])}function rs(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}rt.oe=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(e,t){this.comparator=e,this.root=t||rl.EMPTY}insert(e,t){return new ra(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,rl.BLACK,null,null))}remove(e){return new ra(this.comparator,this.root.remove(e,this.comparator).copy(null,null,rl.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let r=this.comparator(e,t.key);if(0===r)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){let n=this.comparator(e,r.key);if(0===n)return t+r.left.size;n<0?r=r.left:(t+=r.left.size+1,r=r.right)}return -1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){let e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ro(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ro(this.root,e,this.comparator,!1)}getReverseIterator(){return new ro(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ro(this.root,e,this.comparator,!0)}}class ro{constructor(e,t,r,n){this.isReverse=n,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&n&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class rl{constructor(e,t,r,n,i){this.key=e,this.value=t,this.color=null!=r?r:rl.RED,this.left=null!=n?n:rl.EMPTY,this.right=null!=i?i:rl.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,n,i){return new rl(null!=e?e:this.key,null!=t?t:this.value,null!=r?r:this.color,null!=n?n:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let n=this,i=r(e,n.key);return(n=i<0?n.copy(null,null,null,n.left.insert(e,t,r),null):0===i?n.copy(null,t,null,null,null):n.copy(null,null,null,null,n.right.insert(e,t,r))).fixUp()}removeMin(){if(this.left.isEmpty())return rl.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}remove(e,t){let r,n=this;if(0>t(e,n.key))n.left.isEmpty()||n.left.isRed()||n.left.left.isRed()||(n=n.moveRedLeft()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed()&&(n=n.rotateRight()),n.right.isEmpty()||n.right.isRed()||n.right.left.isRed()||(n=n.moveRedRight()),0===t(e,n.key)){if(n.right.isEmpty())return rl.EMPTY;r=n.right.min(),n=n.copy(r.key,r.value,null,null,n.right.removeMin())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}rotateLeft(){let e=this.copy(null,null,rl.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,rl.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){return Math.pow(2,this.check())<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw tU();let e=this.left.check();if(e!==this.right.check())throw tU();return e+ +!this.isRed()}}rl.EMPTY=null,rl.RED=!0,rl.BLACK=!1,rl.EMPTY=new class{constructor(){this.size=0}get key(){throw tU()}get value(){throw tU()}get color(){throw tU()}get left(){throw tU()}get right(){throw tU()}copy(e,t,r,n,i){return this}insert(e,t,r){return new rl(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(e){this.comparator=e,this.data=new ra(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){let r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){let n=r.getNext();if(this.comparator(n.key,e[1])>=0)return;t(n.key)}}forEachWhile(e,t){let r;for(r=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ru(this.data.getIterator())}getIteratorFrom(e){return new ru(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof rh)||this.size!==e.size)return!1;let t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){let e=t.getNext().key,n=r.getNext().key;if(0!==this.comparator(e,n))return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new rh(this.comparator);return t.data=e,t}}class ru{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(e){this.fields=e,e.sort(t3.comparator)}static empty(){return new rc([])}unionWith(e){let t=new rh(t3.comparator);for(let e of this.fields)t=t.add(e);for(let r of e)t=t.add(r);return new rc(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return tJ(this.fields,e.fields,(e,t)=>e.isEqual(t))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{constructor(e){this.binaryString=e}static fromBase64String(e){return new rd(function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new rf("Invalid base64 string: "+e):e}}(e))}static fromUint8Array(e){return new rd(function(e){let t="";for(let r=0;r<e.length;++r)t+=String.fromCharCode(e[r]);return t}(e))}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return btoa(this.binaryString)}toUint8Array(){return function(e){let t=new Uint8Array(e.length);for(let r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return tY(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}rd.EMPTY_BYTE_STRING=new rd("");const rp=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function rg(e){if(e||tU(),"string"==typeof e){let t=0,r=rp.exec(e);if(r||tU(),r[1]){let e=r[1];t=Number(e=(e+"000000000").substr(0,9))}return{seconds:Math.floor(new Date(e).getTime()/1e3),nanos:t}}return{seconds:rm(e.seconds),nanos:rm(e.nanos)}}function rm(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function ry(e){return"string"==typeof e?rd.fromBase64String(e):rd.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rv(e){var t,r;return"server_timestamp"===(null===(r=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===r?void 0:r.stringValue)}function rw(e){let t=e.mapValue.fields.__previous_value__;return rv(t)?rw(t):t}function rb(e){let t=rg(e.mapValue.fields.__local_write_time__.timestampValue);return new tZ(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rE{constructor(e,t,r,n,i,s,a,o,l){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=n,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.longPollingOptions=o,this.useFetchStreams=l}}class r_{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new r_("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof r_&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rT={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function rS(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?rv(e)?4:rU(e)?0x1fffffffffffff:rP(e)?10:11:tU()}function rC(e,t){if(e===t)return!0;let r=rS(e);if(r!==rS(t))return!1;switch(r){case 0:case 0x1fffffffffffff:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return rb(e).isEqual(rb(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;let r=rg(e.timestampValue),n=rg(t.timestampValue);return r.seconds===n.seconds&&r.nanos===n.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return ry(e.bytesValue).isEqual(ry(t.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return rm(e.geoPointValue.latitude)===rm(t.geoPointValue.latitude)&&rm(e.geoPointValue.longitude)===rm(t.geoPointValue.longitude);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return rm(e.integerValue)===rm(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){let r=rm(e.doubleValue),n=rm(t.doubleValue);return r===n?rr(r)===rr(n):isNaN(r)&&isNaN(n)}return!1}(e,t);case 9:return tJ(e.arrayValue.values||[],t.arrayValue.values||[],rC);case 10:case 11:return function(e,t){let r=e.mapValue.fields||{},n=t.mapValue.fields||{};if(rn(r)!==rn(n))return!1;for(let e in r)if(r.hasOwnProperty(e)&&(void 0===n[e]||!rC(r[e],n[e])))return!1;return!0}(e,t);default:return tU()}}function rI(e,t){return void 0!==(e.values||[]).find(e=>rC(e,t))}function rx(e,t){if(e===t)return 0;let r=rS(e),n=rS(t);if(r!==n)return tY(r,n);switch(r){case 0:case 0x1fffffffffffff:return 0;case 1:return tY(e.booleanValue,t.booleanValue);case 2:return function(e,t){let r=rm(e.integerValue||e.doubleValue),n=rm(t.integerValue||t.doubleValue);return r<n?-1:r>n?1:r===n?0:isNaN(r)?isNaN(n)?0:-1:1}(e,t);case 3:return rA(e.timestampValue,t.timestampValue);case 4:return rA(rb(e),rb(t));case 5:return tY(e.stringValue,t.stringValue);case 6:return function(e,t){let r=ry(e),n=ry(t);return r.compareTo(n)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){let r=e.split("/"),n=t.split("/");for(let e=0;e<r.length&&e<n.length;e++){let t=tY(r[e],n[e]);if(0!==t)return t}return tY(r.length,n.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){let r=tY(rm(e.latitude),rm(t.latitude));return 0!==r?r:tY(rm(e.longitude),rm(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return rD(e.arrayValue,t.arrayValue);case 10:return function(e,t){var r,n,i,s;let a=e.fields||{},o=t.fields||{},l=null===(r=a.value)||void 0===r?void 0:r.arrayValue,h=null===(n=o.value)||void 0===n?void 0:n.arrayValue,u=tY((null===(i=null==l?void 0:l.values)||void 0===i?void 0:i.length)||0,(null===(s=null==h?void 0:h.values)||void 0===s?void 0:s.length)||0);return 0!==u?u:rD(l,h)}(e.mapValue,t.mapValue);case 11:return function(e,t){if(e===rT.mapValue&&t===rT.mapValue)return 0;if(e===rT.mapValue)return 1;if(t===rT.mapValue)return -1;let r=e.fields||{},n=Object.keys(r),i=t.fields||{},s=Object.keys(i);n.sort(),s.sort();for(let e=0;e<n.length&&e<s.length;++e){let t=tY(n[e],s[e]);if(0!==t)return t;let a=rx(r[n[e]],i[s[e]]);if(0!==a)return a}return tY(n.length,s.length)}(e.mapValue,t.mapValue);default:throw tU()}}function rA(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return tY(e,t);let r=rg(e),n=rg(t),i=tY(r.seconds,n.seconds);return 0!==i?i:tY(r.nanos,n.nanos)}function rD(e,t){let r=e.values||[],n=t.values||[];for(let e=0;e<r.length&&e<n.length;++e){let t=rx(r[e],n[e]);if(t)return t}return tY(r.length,n.length)}function rk(e){var t,r;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){let t=rg(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?ry(e.bytesValue).toBase64():"referenceValue"in e?(t=e.referenceValue,t5.fromName(t).toString()):"geoPointValue"in e?(r=e.geoPointValue,`geo(${r.latitude},${r.longitude})`):"arrayValue"in e?function(e){let t="[",r=!0;for(let n of e.values||[])r?r=!1:t+=",",t+=rk(n);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){let t=Object.keys(e.fields||{}).sort(),r="{",n=!0;for(let i of t)n?n=!1:r+=",",r+=`${i}:${rk(e.fields[i])}`;return r+"}"}(e.mapValue):tU()}function rN(e){return!!e&&"integerValue"in e}function rR(e){return!!e&&"arrayValue"in e}function rL(e){return!!e&&"nullValue"in e}function rO(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function rM(e){return!!e&&"mapValue"in e}function rP(e){var t,r;return"__vector__"===(null===(r=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===r?void 0:r.stringValue)}function rV(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){let t={mapValue:{fields:{}}};return ri(e.mapValue.fields,(e,r)=>t.mapValue.fields[e]=rV(r)),t}if(e.arrayValue){let t={arrayValue:{values:[]}};for(let r=0;r<(e.arrayValue.values||[]).length;++r)t.arrayValue.values[r]=rV(e.arrayValue.values[r]);return t}return Object.assign({},e)}function rU(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rF{constructor(e){this.value=e}static empty(){return new rF({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(!rM(t=(t.mapValue.fields||{})[e.get(r)]))return null;return(t=(t.mapValue.fields||{})[e.lastSegment()])||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=rV(t)}setAll(e){let t=t3.emptyPath(),r={},n=[];e.forEach((e,i)=>{if(!t.isImmediateParentOf(i)){let e=this.getFieldsMap(t);this.applyChanges(e,r,n),r={},n=[],t=i.popLast()}e?r[i.lastSegment()]=rV(e):n.push(i.lastSegment())});let i=this.getFieldsMap(t);this.applyChanges(i,r,n)}delete(e){let t=this.field(e.popLast());rM(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return rC(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let n=t.mapValue.fields[e.get(r)];rM(n)&&n.mapValue.fields||(n={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=n),t=n}return t.mapValue.fields}applyChanges(e,t,r){for(let n of(ri(t,(t,r)=>e[t]=r),r))delete e[n]}clone(){return new rF(rV(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rB{constructor(e,t,r,n,i,s,a){this.key=e,this.documentType=t,this.version=r,this.readTime=n,this.createTime=i,this.data=s,this.documentState=a}static newInvalidDocument(e){return new rB(e,0,t0.min(),t0.min(),t0.min(),rF.empty(),0)}static newFoundDocument(e,t,r,n){return new rB(e,1,t,t0.min(),r,n,0)}static newNoDocument(e,t){return new rB(e,2,t,t0.min(),t0.min(),rF.empty(),0)}static newUnknownDocument(e,t){return new rB(e,3,t,t0.min(),t0.min(),rF.empty(),2)}convertToFoundDocument(e,t){return this.createTime.isEqual(t0.min())&&(2===this.documentType||0===this.documentType)&&(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=rF.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=rF.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=t0.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof rB&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new rB(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rj{constructor(e,t){this.position=e,this.inclusive=t}}function rq(e,t,r){let n=0;for(let i=0;i<e.position.length;i++){let s=t[i],a=e.position[i];if(n=s.field.isKeyField()?t5.comparator(t5.fromName(a.referenceValue),r.key):rx(a,r.data.field(s.field)),"desc"===s.dir&&(n*=-1),0!==n)break}return n}function rz(e,t){if(null===e)return null===t;if(null===t||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let r=0;r<e.position.length;r++)if(!rC(e.position[r],t.position[r]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r${constructor(e,t="asc"){this.field=e,this.dir=t}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rK{}class rG extends rK{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,r):new rX(e,t,r):"array-contains"===t?new r0(e,r):"in"===t?new r1(e,r):"not-in"===t?new r2(e,r):"array-contains-any"===t?new r6(e,r):new rG(e,t,r)}static createKeyFieldInFilter(e,t,r){return"in"===t?new rY(e,r):new rJ(e,r)}matches(e){let t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(rx(t,this.value)):null!==t&&rS(this.value)===rS(t)&&this.matchesComparison(rx(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return tU()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class rH extends rK{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new rH(e,t)}matches(e){return rQ(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.ae||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function rQ(e){return"and"===e.op}function rW(e){for(let t of e.filters)if(t instanceof rH)return!1;return!0}class rX extends rG{constructor(e,t,r){super(e,t,r),this.key=t5.fromName(r.referenceValue)}matches(e){let t=t5.comparator(e.key,this.key);return this.matchesComparison(t)}}class rY extends rG{constructor(e,t){super(e,"in",t),this.keys=rZ("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class rJ extends rG{constructor(e,t){super(e,"not-in",t),this.keys=rZ("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function rZ(e,t){var r;return((null===(r=t.arrayValue)||void 0===r?void 0:r.values)||[]).map(e=>t5.fromName(e.referenceValue))}class r0 extends rG{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return rR(t)&&rI(t.arrayValue,this.value)}}class r1 extends rG{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return null!==t&&rI(this.value.arrayValue,t)}}class r2 extends rG{constructor(e,t){super(e,"not-in",t)}matches(e){if(rI(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return null!==t&&!rI(this.value.arrayValue,t)}}class r6 extends rG{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!rR(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>rI(this.value.arrayValue,e))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r3{constructor(e,t=null,r=[],n=[],i=null,s=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=n,this.limit=i,this.startAt=s,this.endAt=a,this.ue=null}}function r5(e,t=null,r=[],n=[],i=null,s=null,a=null){return new r3(e,t,r,n,i,s,a)}function r8(e){if(null===e.ue){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(e=>(function e(t){if(t instanceof rG)return t.field.canonicalString()+t.op.toString()+rk(t.value);if(rW(t)&&rQ(t))return t.filters.map(t=>e(t)).join(",");{let r=t.filters.map(t=>e(t)).join(",");return`${t.op}(${r})`}})(e)).join(","),t+="|ob:",t+=e.orderBy.map(e=>e.field.canonicalString()+e.dir).join(","),null==e.limit||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(e=>rk(e)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(e=>rk(e)).join(",")),e.ue=t}return e.ue}function r4(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++){var r,n;if(r=e.orderBy[i],n=t.orderBy[i],!(r.dir===n.dir&&r.field.isEqual(n.field)))return!1}if(e.filters.length!==t.filters.length)return!1;for(let r=0;r<e.filters.length;r++)if(!function e(t,r){return t instanceof rG?r instanceof rG&&t.op===r.op&&t.field.isEqual(r.field)&&rC(t.value,r.value):t instanceof rH?r instanceof rH&&t.op===r.op&&t.filters.length===r.filters.length&&t.filters.reduce((t,n,i)=>t&&e(n,r.filters[i]),!0):void tU()}(e.filters[r],t.filters[r]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!rz(e.startAt,t.startAt)&&rz(e.endAt,t.endAt)}function r9(e){return t5.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r7{constructor(e,t=null,r=[],n=[],i=null,s="F",a=null,o=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=n,this.limit=i,this.limitType=s,this.startAt=a,this.endAt=o,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function ne(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function nt(e){if(null===e.ce){let t;e.ce=[];let r=new Set;for(let t of e.explicitOrderBy)e.ce.push(t),r.add(t.field.canonicalString());let n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(t=new rh(t3.comparator),e.filters.forEach(e=>{e.getFlattenedFilters().forEach(e=>{e.isInequality()&&(t=t.add(e.field))})}),t).forEach(t=>{r.has(t.canonicalString())||t.isKeyField()||e.ce.push(new r$(t,n))}),r.has(t3.keyField().canonicalString())||e.ce.push(new r$(t3.keyField(),n))}return e.ce}function nr(e){return e.le||(e.le=function(e,t){if("F"===e.limitType)return r5(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(e=>{let t="desc"===e.dir?"asc":"desc";return new r$(e.field,t)});let r=e.endAt?new rj(e.endAt.position,e.endAt.inclusive):null,n=e.startAt?new rj(e.startAt.position,e.startAt.inclusive):null;return r5(e.path,e.collectionGroup,t,e.filters,e.limit,r,n)}}(e,nt(e))),e.le}function nn(e,t,r){return new r7(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,r,e.startAt,e.endAt)}function ni(e,t){return r4(nr(e),nr(t))&&e.limitType===t.limitType}function ns(e){return`${r8(nr(e))}|lt:${e.limitType}`}function na(e){var t;let r;return`Query(target=${r=(t=nr(e)).path.canonicalString(),null!==t.collectionGroup&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(e=>(function e(t){return t instanceof rG?`${t.field.canonicalString()} ${t.op} ${rk(t.value)}`:t instanceof rH?t.op.toString()+" {"+t.getFilters().map(e).join(" ,")+"}":"Filter"})(e)).join(", ")}]`),null==t.limit||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(e=>`${e.field.canonicalString()} (${e.dir})`).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(e=>rk(e)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(e=>rk(e)).join(",")),`Target(${r})`}; limitType=${e.limitType})`}function no(e,t){return t.isFoundDocument()&&function(e,t){let r=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(r):t5.isDocumentKey(e.path)?e.path.isEqual(r):e.path.isImmediateParentOf(r)}(e,t)&&function(e,t){for(let r of nt(e))if(!r.field.isKeyField()&&null===t.data.field(r.field))return!1;return!0}(e,t)&&function(e,t){for(let r of e.filters)if(!r.matches(t))return!1;return!0}(e,t)&&(!e.startAt||!!function(e,t,r){let n=rq(e,t,r);return e.inclusive?n<=0:n<0}(e.startAt,nt(e),t))&&(!e.endAt||!!function(e,t,r){let n=rq(e,t,r);return e.inclusive?n>=0:n>0}(e.endAt,nt(e),t))}function nl(e){return(t,r)=>{let n=!1;for(let i of nt(e)){let e=function(e,t,r){let n=e.field.isKeyField()?t5.comparator(t.key,r.key):function(e,t,r){let n=t.data.field(e),i=r.data.field(e);return null!==n&&null!==i?rx(n,i):tU()}(e.field,t,r);switch(e.dir){case"asc":return n;case"desc":return -1*n;default:return tU()}}(i,t,r);if(0!==e)return e;n=n||i.field.isKeyField()}return 0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),r=this.inner[t];if(void 0!==r){for(let[t,n]of r)if(this.equalsFn(t,e))return n}}has(e){return void 0!==this.get(e)}set(e,t){let r=this.mapKeyFn(e),n=this.inner[r];if(void 0===n)return this.inner[r]=[[e,t]],void this.innerSize++;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return void(n[r]=[e,t]);n.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),r=this.inner[t];if(void 0===r)return!1;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return 1===r.length?delete this.inner[t]:r.splice(n,1),this.innerSize--,!0;return!1}forEach(e){ri(this.inner,(t,r)=>{for(let[t,n]of r)e(t,n)})}isEmpty(){return rs(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nu=new ra(t5.comparator),nc=new ra(t5.comparator);function nf(...e){let t=nc;for(let r of e)t=t.insert(r.key,r);return t}function nd(e){let t=nc;return e.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function np(){return new nh(e=>e.toString(),(e,t)=>e.isEqual(t))}const ng=new ra(t5.comparator),nm=new rh(t5.comparator);function ny(...e){let t=nm;for(let r of e)t=t.add(r);return t}const nv=new rh(tY);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nw(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:rr(t)?"-0":t}}function nb(e){return{integerValue:""+e}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE{constructor(){this._=void 0}}function n_(e,t){return e instanceof nA?rN(t)||t&&"doubleValue"in t?t:{integerValue:0}:null}class nT extends nE{}class nS extends nE{constructor(e){super(),this.elements=e}}function nC(e,t){let r=nk(t);for(let t of e.elements)r.some(e=>rC(e,t))||r.push(t);return{arrayValue:{values:r}}}class nI extends nE{constructor(e){super(),this.elements=e}}function nx(e,t){let r=nk(t);for(let t of e.elements)r=r.filter(e=>!rC(e,t));return{arrayValue:{values:r}}}class nA extends nE{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function nD(e){return rm(e.integerValue||e.doubleValue)}function nk(e){return rR(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}class nN{constructor(e,t){this.version=e,this.transformResults=t}}class nR{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new nR}static exists(e){return new nR(void 0,e)}static updateTime(e){return new nR(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function nL(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class nO{}function nM(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new nz(e.key,nR.none()):new nU(e.key,e.data,nR.none());{let r=e.data,n=rF.empty(),i=new rh(t3.comparator);for(let e of t.fields)if(!i.has(e)){let t=r.field(e);null===t&&e.length>1&&(e=e.popLast(),t=r.field(e)),null===t?n.delete(e):n.set(e,t),i=i.add(e)}return new nF(e.key,n,new rc(i.toArray()),nR.none())}}function nP(e,t,r,n){return e instanceof nU?function(e,t,r,n){if(!nL(e.precondition,t))return r;let i=e.value.clone(),s=nq(e.fieldTransforms,n,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,r,n):e instanceof nF?function(e,t,r,n){if(!nL(e.precondition,t))return r;let i=nq(e.fieldTransforms,n,t),s=t.data;return(s.setAll(nB(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===r)?null:r.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,r,n):nL(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):r}function nV(e,t){var r,n;return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(r=e.fieldTransforms,n=t.fieldTransforms,!!(void 0===r&&void 0===n||!(!r||!n)&&tJ(r,n,(e,t)=>{var r,n;return e.field.isEqual(t.field)&&(r=e.transform,n=t.transform,r instanceof nS&&n instanceof nS||r instanceof nI&&n instanceof nI?tJ(r.elements,n.elements,rC):r instanceof nA&&n instanceof nA?rC(r.Pe,n.Pe):r instanceof nT&&n instanceof nT)})))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class nU extends nO{constructor(e,t,r,n=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=n,this.type=0}getFieldMask(){return null}}class nF extends nO{constructor(e,t,r,n,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=n,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function nB(e){let t=new Map;return e.fieldMask.fields.forEach(r=>{if(!r.isEmpty()){let n=e.data.field(r);t.set(r,n)}}),t}function nj(e,t,r){var n;let i=new Map;e.length===r.length||tU();for(let s=0;s<r.length;s++){let a=e[s],o=a.transform,l=t.data.field(a.field);i.set(a.field,(n=r[s],o instanceof nS?nC(o,l):o instanceof nI?nx(o,l):n))}return i}function nq(e,t,r){let n=new Map;for(let i of e){let e=i.transform,s=r.data.field(i.field);n.set(i.field,e instanceof nT?function(e,t){let r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&rv(t)&&(t=rw(t)),t&&(r.fields.__previous_value__=t),{mapValue:r}}(t,s):e instanceof nS?nC(e,s):e instanceof nI?nx(e,s):function(e,t){let r=n_(e,t),n=nD(r)+nD(e.Pe);return rN(r)&&rN(e.Pe)?nb(n):nw(e.serializer,n)}(e,s))}return n}class nz extends nO{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class n$ extends nO{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nK{constructor(e,t,r,n){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=n}applyToRemoteDocument(e,t){let r=t.mutationResults;for(let t=0;t<this.mutations.length;t++){let i=this.mutations[t];if(i.key.isEqual(e.key)){var n;n=r[t],i instanceof nU?function(e,t,r){let n=e.value.clone(),i=nj(e.fieldTransforms,t,r.transformResults);n.setAll(i),t.convertToFoundDocument(r.version,n).setHasCommittedMutations()}(i,e,n):i instanceof nF?function(e,t,r){if(!nL(e.precondition,t))return void t.convertToUnknownDocument(r.version);let n=nj(e.fieldTransforms,t,r.transformResults),i=t.data;i.setAll(nB(e)),i.setAll(n),t.convertToFoundDocument(r.version,i).setHasCommittedMutations()}(i,e,n):function(e,t,r){t.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}}}applyToLocalView(e,t){for(let r of this.baseMutations)r.key.isEqual(e.key)&&(t=nP(r,e,t,this.localWriteTime));for(let r of this.mutations)r.key.isEqual(e.key)&&(t=nP(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let r=np();return this.mutations.forEach(n=>{let i=e.get(n.key),s=i.overlayedDocument,a=this.applyToLocalView(s,i.mutatedFields),o=nM(s,a=t.has(n.key)?null:a);null!==o&&r.set(n.key,o),s.isValidDocument()||s.convertToNoDocument(t0.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ny())}isEqual(e){return this.batchId===e.batchId&&tJ(this.mutations,e.mutations,(e,t)=>nV(e,t))&&tJ(this.baseMutations,e.baseMutations,(e,t)=>nV(e,t))}}class nG{constructor(e,t,r,n){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=n}static from(e,t,r){e.mutations.length===r.length||tU();let n=ng,i=e.mutations;for(let e=0;e<i.length;e++)n=n.insert(i[e].key,r[e].version);return new nG(e,t,r,n)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nH{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nQ{constructor(e,t){this.count=e,this.unchangedNames=t}}function nW(e){if(void 0===e)return tM("GRPC error has no .code"),tF.UNKNOWN;switch(e){case _.OK:return tF.OK;case _.CANCELLED:return tF.CANCELLED;case _.UNKNOWN:return tF.UNKNOWN;case _.DEADLINE_EXCEEDED:return tF.DEADLINE_EXCEEDED;case _.RESOURCE_EXHAUSTED:return tF.RESOURCE_EXHAUSTED;case _.INTERNAL:return tF.INTERNAL;case _.UNAVAILABLE:return tF.UNAVAILABLE;case _.UNAUTHENTICATED:return tF.UNAUTHENTICATED;case _.INVALID_ARGUMENT:return tF.INVALID_ARGUMENT;case _.NOT_FOUND:return tF.NOT_FOUND;case _.ALREADY_EXISTS:return tF.ALREADY_EXISTS;case _.PERMISSION_DENIED:return tF.PERMISSION_DENIED;case _.FAILED_PRECONDITION:return tF.FAILED_PRECONDITION;case _.ABORTED:return tF.ABORTED;case _.OUT_OF_RANGE:return tF.OUT_OF_RANGE;case _.UNIMPLEMENTED:return tF.UNIMPLEMENTED;case _.DATA_LOSS:return tF.DATA_LOSS;default:return tU()}}(T=_||(_={}))[T.OK=0]="OK",T[T.CANCELLED=1]="CANCELLED",T[T.UNKNOWN=2]="UNKNOWN",T[T.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",T[T.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",T[T.NOT_FOUND=5]="NOT_FOUND",T[T.ALREADY_EXISTS=6]="ALREADY_EXISTS",T[T.PERMISSION_DENIED=7]="PERMISSION_DENIED",T[T.UNAUTHENTICATED=16]="UNAUTHENTICATED",T[T.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",T[T.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",T[T.ABORTED=10]="ABORTED",T[T.OUT_OF_RANGE=11]="OUT_OF_RANGE",T[T.UNIMPLEMENTED=12]="UNIMPLEMENTED",T[T.INTERNAL=13]="INTERNAL",T[T.UNAVAILABLE=14]="UNAVAILABLE",T[T.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nX=new l([0xffffffff,0xffffffff],0);function nY(e){let t=(new TextEncoder).encode(e),r=new h;return r.update(t),new Uint8Array(r.digest())}function nJ(e){let t=new DataView(e.buffer),r=t.getUint32(0,!0),n=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new l([r,n],0),new l([i,s],0)]}class nZ{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new n0(`Invalid padding: ${t}`);if(r<0||e.length>0&&0===this.hashCount)throw new n0(`Invalid hash count: ${r}`);if(0===e.length&&0!==t)throw new n0(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ie=l.fromNumber(this.Te)}de(e,t,r){let n=e.add(t.multiply(l.fromNumber(r)));return 1===n.compare(nX)&&(n=new l([n.getBits(0),n.getBits(1)],0)),n.modulo(this.Ie).toNumber()}Ee(e){return 0!=(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.Te)return!1;let[t,r]=nJ(nY(e));for(let e=0;e<this.hashCount;e++){let n=this.de(t,r,e);if(!this.Ee(n))return!1}return!0}static create(e,t,r){let n=new nZ(new Uint8Array(Math.ceil(e/8)),e%8==0?0:8-e%8,t);return r.forEach(e=>n.insert(e)),n}insert(e){if(0===this.Te)return;let[t,r]=nJ(nY(e));for(let e=0;e<this.hashCount;e++){let n=this.de(t,r,e);this.Ae(n)}}Ae(e){let t=Math.floor(e/8);this.bitmap[t]|=1<<e%8}}class n0 extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n1{constructor(e,t,r,n,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=n,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){let n=new Map;return n.set(e,n2.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new n1(t0.min(),n,new ra(tY),nu,ny())}}class n2{constructor(e,t,r,n,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=n,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new n2(r,t,ny(),ny(),ny())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n6{constructor(e,t,r,n){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=n}}class n3{constructor(e,t){this.targetId=e,this.me=t}}class n5{constructor(e,t,r=rd.EMPTY_BYTE_STRING,n=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=n}}class n8{constructor(){this.fe=0,this.ge=n7(),this.pe=rd.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return 0!==this.fe}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ny(),t=ny(),r=ny();return this.ge.forEach((n,i)=>{switch(i){case 0:e=e.add(n);break;case 2:t=t.add(n);break;case 1:r=r.add(n);break;default:tU()}}),new n2(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=n7()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,this.fe>=0||tU()}Ne(){this.we=!0,this.ye=!0}}class n4{constructor(e){this.Be=e,this.Le=new Map,this.ke=nu,this.qe=n9(),this.Qe=n9(),this.Ke=new ra(tY)}$e(e){for(let t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(t,e.Ve):this.We(t,e.key,e.Ve);for(let t of e.removedTargetIds)this.We(t,e.key,e.Ve)}Ge(e){this.forEachTarget(e,t=>{let r=this.ze(t);switch(e.state){case 0:this.je(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.je(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),r.De(e.resumeToken));break;default:tU()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Le.forEach((e,r)=>{this.je(r)&&t(r)})}Je(e){let t=e.targetId,r=e.me.count,n=this.Ye(t);if(n){let i=n.target;if(r9(i)){if(0===r){let e=new t5(i.path);this.We(t,e,rB.newNoDocument(e,t0.min()))}else 1===r||tU()}else{let n=this.Ze(t);if(n!==r){let r=this.Xe(e),i=r?this.et(r,e,n):1;0!==i&&(this.He(t),this.Ke=this.Ke.insert(t,2===i?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch"))}}}}Xe(e){let t,r;let n=e.me.unchangedNames;if(!n||!n.bits)return null;let{bits:{bitmap:i="",padding:s=0},hashCount:a=0}=n;try{t=ry(i).toUint8Array()}catch(e){if(e instanceof rf)return tP("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw e}try{r=new nZ(t,s,a)}catch(e){return tP(e instanceof n0?"BloomFilter error: ":"Applying bloom filter failed: ",e),null}return 0===r.Te?null:r}et(e,t,r){return 2*(t.me.count!==r-this.rt(e,t.targetId))}rt(e,t){let r=this.Be.getRemoteKeysForTarget(t),n=0;return r.forEach(r=>{let i=this.Be.nt(),s=`projects/${i.projectId}/databases/${i.database}/documents/${r.path.canonicalString()}`;e.mightContain(s)||(this.We(t,r,null),n++)}),n}it(e){let t=new Map;this.Le.forEach((r,n)=>{let i=this.Ye(n);if(i){if(r.current&&r9(i.target)){let t=new t5(i.target.path);this.st(t).has(n)||this.ot(n,t)||this.We(n,t,rB.newNoDocument(t,e))}r.be&&(t.set(n,r.ve()),r.Ce())}});let r=ny();this.Qe.forEach((e,t)=>{let n=!0;t.forEachWhile(e=>{let t=this.Ye(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(n=!1,!1)}),n&&(r=r.add(e))}),this.ke.forEach((t,r)=>r.setReadTime(e));let n=new n1(e,t,this.Ke,this.ke,r);return this.ke=nu,this.qe=n9(),this.Qe=n9(),this.Ke=new ra(tY),n}Ue(e,t){if(!this.je(e))return;let r=2*!!this.ot(e,t.key);this.ze(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e)),this.Qe=this.Qe.insert(t.key,this._t(t.key).add(e))}We(e,t,r){if(!this.je(e))return;let n=this.ze(e);this.ot(e,t)?n.Fe(t,1):n.Me(t),this.Qe=this.Qe.insert(t,this._t(t).delete(e)),this.Qe=this.Qe.insert(t,this._t(t).add(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Le.delete(e)}Ze(e){let t=this.ze(e).ve();return this.Be.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let t=this.Le.get(e);return t||(t=new n8,this.Le.set(e,t)),t}_t(e){let t=this.Qe.get(e);return t||(t=new rh(tY),this.Qe=this.Qe.insert(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new rh(tY),this.qe=this.qe.insert(e,t)),t}je(e){let t=null!==this.Ye(e);return t||tO("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){let t=this.Le.get(e);return t&&t.Se?null:this.Be.ut(e)}He(e){this.Le.set(e,new n8),this.Be.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}ot(e,t){return this.Be.getRemoteKeysForTarget(e).has(t)}}function n9(){return new ra(t5.comparator)}function n7(){return new ra(t5.comparator)}const ie={asc:"ASCENDING",desc:"DESCENDING"},it={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ir={and:"AND",or:"OR"};class ii{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function is(e,t){return e.useProto3Json||null==t?t:{value:t}}function ia(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function io(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function il(e){return e||tU(),t0.fromTimestamp(function(e){let t=rg(e);return new tZ(t.seconds,t.nanos)}(e))}function ih(e,t){return iu(e,t).canonicalString()}function iu(e,t){let r=new t2(["projects",e.projectId,"databases",e.database]).child("documents");return void 0===t?r:r.child(t)}function ic(e){let t=t2.fromString(e);return iE(t)||tU(),t}function id(e,t){return ih(e.databaseId,t.path)}function ip(e,t){let r=ic(t);if(r.get(1)!==e.databaseId.projectId)throw new tB(tF.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+r.get(1)+" vs "+e.databaseId.projectId);if(r.get(3)!==e.databaseId.database)throw new tB(tF.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+r.get(3)+" vs "+e.databaseId.database);return new t5(iy(r))}function ig(e,t){return ih(e.databaseId,t)}function im(e){return new t2(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function iy(e){return e.length>4&&"documents"===e.get(4)||tU(),e.popFirst(5)}function iv(e,t,r){return{name:id(e,t),fields:r.value.mapValue.fields}}function iw(e){return{fieldPath:e.canonicalString()}}function ib(e){return t3.fromServerFormat(e.fieldPath)}function iE(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i_{constructor(e,t,r,n,i=t0.min(),s=t0.min(),a=rd.EMPTY_BYTE_STRING,o=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=n,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=a,this.expectedCount=o}withSequenceNumber(e){return new i_(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new i_(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new i_(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new i_(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iT{constructor(e){this.ht=e}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iS{constructor(){}dt(e,t){this.Et(e,t),t.At()}Et(e,t){if("nullValue"in e)this.Rt(t,5);else if("booleanValue"in e)this.Rt(t,10),t.Vt(+!!e.booleanValue);else if("integerValue"in e)this.Rt(t,15),t.Vt(rm(e.integerValue));else if("doubleValue"in e){let r=rm(e.doubleValue);isNaN(r)?this.Rt(t,13):(this.Rt(t,15),rr(r)?t.Vt(0):t.Vt(r))}else if("timestampValue"in e){let r=e.timestampValue;this.Rt(t,20),"string"==typeof r&&(r=rg(r)),t.ft(`${r.seconds||""}`),t.Vt(r.nanos||0)}else if("stringValue"in e)this.gt(e.stringValue,t),this.yt(t);else if("bytesValue"in e)this.Rt(t,30),t.wt(ry(e.bytesValue)),this.yt(t);else if("referenceValue"in e)this.St(e.referenceValue,t);else if("geoPointValue"in e){let r=e.geoPointValue;this.Rt(t,45),t.Vt(r.latitude||0),t.Vt(r.longitude||0)}else"mapValue"in e?rU(e)?this.Rt(t,Number.MAX_SAFE_INTEGER):rP(e)?this.bt(e.mapValue,t):(this.Dt(e.mapValue,t),this.yt(t)):"arrayValue"in e?(this.vt(e.arrayValue,t),this.yt(t)):tU()}gt(e,t){this.Rt(t,25),this.Ct(e,t)}Ct(e,t){t.ft(e)}Dt(e,t){let r=e.fields||{};for(let e of(this.Rt(t,55),Object.keys(r)))this.gt(e,t),this.Et(r[e],t)}bt(e,t){var r,n;let i=e.fields||{};this.Rt(t,53);let s="value",a=(null===(n=null===(r=i[s].arrayValue)||void 0===r?void 0:r.values)||void 0===n?void 0:n.length)||0;this.Rt(t,15),t.Vt(rm(a)),this.gt(s,t),this.Et(i[s],t)}vt(e,t){let r=e.values||[];for(let e of(this.Rt(t,50),r))this.Et(e,t)}St(e,t){this.Rt(t,37),t5.fromName(e).path.forEach(e=>{this.Rt(t,60),this.Ct(e,t)})}Rt(e,t){e.Vt(t)}yt(e){e.Vt(2)}}iS.Ft=new iS;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iC{constructor(){this.ln=new iI}addToCollectionParentIndex(e,t){return this.ln.add(t),t7.resolve()}getCollectionParents(e,t){return t7.resolve(this.ln.getEntries(t))}addFieldIndex(e,t){return t7.resolve()}deleteFieldIndex(e,t){return t7.resolve()}deleteAllFieldIndexes(e){return t7.resolve()}createTargetIndexes(e,t){return t7.resolve()}getDocumentsMatchingTarget(e,t){return t7.resolve(null)}getIndexType(e,t){return t7.resolve(0)}getFieldIndexes(e,t){return t7.resolve([])}getNextCollectionGroupToUpdate(e){return t7.resolve(null)}getMinOffset(e,t){return t7.resolve(t8.min())}getMinOffsetFromCollectionGroup(e,t){return t7.resolve(t8.min())}updateCollectionGroup(e,t,r){return t7.resolve()}updateIndexEntries(e,t){return t7.resolve()}}class iI{constructor(){this.index={}}add(e){let t=e.lastSegment(),r=e.popLast(),n=this.index[t]||new rh(t2.comparator),i=!n.has(r);return this.index[t]=n.add(r),i}has(e){let t=e.lastSegment(),r=e.popLast(),n=this.index[t];return n&&n.has(r)}getEntries(e){return(this.index[e]||new rh(t2.comparator)).toArray()}}new Uint8Array(0);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ix={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class iA{static withCacheSize(e){return new iA(e,iA.DEFAULT_COLLECTION_PERCENTILE,iA.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */iA.DEFAULT_COLLECTION_PERCENTILE=10,iA.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,iA.DEFAULT=new iA(0x2800000,iA.DEFAULT_COLLECTION_PERCENTILE,iA.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),iA.DISABLED=new iA(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iD{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new iD(0)}static Qn(){return new iD(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ik([e,t],[r,n]){let i=tY(e,r);return 0===i?tY(t,n):i}class iN{constructor(e){this.Gn=e,this.buffer=new rh(ik),this.zn=0}jn(){return++this.zn}Hn(e){let t=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(t);else{let e=this.buffer.last();0>ik(t,e)&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class iR{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Jn=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return null!==this.Jn}Yn(e){tO("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){re(e)?tO("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e):await t9(e)}await this.Yn(3e5)})}}class iL{constructor(e,t){this.Zn=e,this.params=t}calculateTargetCount(e,t){return this.Zn.Xn(e).next(e=>Math.floor(t/100*e))}nthSequenceNumber(e,t){if(0===t)return t7.resolve(rt.oe);let r=new iN(t);return this.Zn.forEachTarget(e,e=>r.Hn(e.sequenceNumber)).next(()=>this.Zn.er(e,e=>r.Hn(e))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Zn.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Zn.removeOrphanedDocuments(e,t)}collect(e,t){return -1===this.params.cacheSizeCollectionThreshold?(tO("LruGarbageCollector","Garbage collection skipped; disabled"),t7.resolve(ix)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(tO("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ix):this.tr(e,t))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,t){let r,n,i,s,a,l,h;let u=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(t=>(t>this.params.maximumSequenceNumbersToCollect?(tO("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),n=this.params.maximumSequenceNumbersToCollect):n=t,s=Date.now(),this.nthSequenceNumber(e,n))).next(n=>(r=n,a=Date.now(),this.removeTargets(e,r,t))).next(t=>(i=t,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(e=>(h=Date.now(),tL()<=o.DEBUG&&tO("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${s-u}ms
	Determined least recently used ${n} in `+(a-s)+"ms\n"+`	Removed ${i} targets in `+(l-a)+"ms\n"+`	Removed ${e} documents in `+(h-l)+"ms\n"+`Total Duration: ${h-u}ms`),t7.resolve({didRun:!0,sequenceNumbersCollected:n,targetsRemoved:i,documentsRemoved:e})))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iO{constructor(){this.changes=new nh(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,rB.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let r=this.changes.get(t);return void 0!==r?t7.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iM{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iP{constructor(e,t,r,n){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=n}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(n=>(r=n,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==r&&nP(r.mutation,e,rc.empty(),tZ.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,ny()).next(()=>t))}getLocalViewOfDocuments(e,t,r=ny()){let n=np();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,r).next(e=>{let t=nf();return e.forEach((e,r)=>{t=t.insert(e,r.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){let r=np();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,ny()))}populateOverlays(e,t,r){let n=[];return r.forEach(e=>{t.has(e)||n.push(e)}),this.documentOverlayCache.getOverlays(e,n).next(e=>{e.forEach((e,r)=>{t.set(e,r)})})}computeViews(e,t,r,n){let i=nu,s=np(),a=np();return t.forEach((e,t)=>{let a=r.get(t.key);n.has(t.key)&&(void 0===a||a.mutation instanceof nF)?i=i.insert(t.key,t):void 0!==a?(s.set(t.key,a.mutation.getFieldMask()),nP(a.mutation,t,a.mutation.getFieldMask(),tZ.now())):s.set(t.key,rc.empty())}),this.recalculateAndSaveOverlays(e,i).next(e=>(e.forEach((e,t)=>s.set(e,t)),t.forEach((e,t)=>{var r;return a.set(e,new iM(t,null!==(r=s.get(e))&&void 0!==r?r:null))}),a))}recalculateAndSaveOverlays(e,t){let r=np(),n=new ra((e,t)=>e-t),i=ny();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(let i of e)i.keys().forEach(e=>{let s=t.get(e);if(null===s)return;let a=r.get(e)||rc.empty();a=i.applyToLocalView(s,a),r.set(e,a);let o=(n.get(i.batchId)||ny()).add(e);n=n.insert(i.batchId,o)})}).next(()=>{let s=[],a=n.getReverseIterator();for(;a.hasNext();){let n=a.getNext(),o=n.key,l=n.value,h=np();l.forEach(e=>{if(!i.has(e)){let n=nM(t.get(e),r.get(e));null!==n&&h.set(e,n),i=i.add(e)}}),s.push(this.documentOverlayCache.saveOverlays(e,o,h))}return t7.waitFor(s)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,r,n){return t5.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):null!==t.collectionGroup?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,n):this.getDocumentsMatchingCollectionQuery(e,t,r,n)}getNextDocuments(e,t,r,n){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,n).next(i=>{let s=n-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,n-i.size):t7.resolve(np()),a=-1,o=i;return s.next(t=>t7.forEach(t,(t,r)=>(a<r.largestBatchId&&(a=r.largestBatchId),i.get(t)?t7.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{o=o.insert(t,e)}))).next(()=>this.populateOverlays(e,t,i)).next(()=>this.computeViews(e,o,t,ny())).next(e=>({batchId:a,changes:nd(e)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new t5(t)).next(e=>{let t=nf();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,r,n){let i=t.collectionGroup,s=nf();return this.indexManager.getCollectionParents(e,i).next(a=>t7.forEach(a,a=>{let o=new r7(a.child(i),null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt);return this.getDocumentsMatchingCollectionQuery(e,o,r,n).next(e=>{e.forEach((e,t)=>{s=s.insert(e,t)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,t,r,n){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,n))).next(e=>{i.forEach((t,r)=>{let n=r.getKey();null===e.get(n)&&(e=e.insert(n,rB.newInvalidDocument(n)))});let r=nf();return e.forEach((e,n)=>{let s=i.get(e);void 0!==s&&nP(s.mutation,n,rc.empty(),tZ.now()),no(t,n)&&(r=r.insert(e,n))}),r})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iV{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,t){return t7.resolve(this.Tr.get(t))}saveBundleMetadata(e,t){return this.Tr.set(t.id,{id:t.id,version:t.version,createTime:il(t.createTime)}),t7.resolve()}getNamedQuery(e,t){return t7.resolve(this.Ir.get(t))}saveNamedQuery(e,t){return this.Ir.set(t.name,{name:t.name,query:function(e){let t=function(e){var t;let r,n=function(e){let t=ic(e);return 4===t.length?t2.emptyPath():iy(t)}(e.parent),i=e.structuredQuery,s=i.from?i.from.length:0,a=null;if(s>0){1===s||tU();let e=i.from[0];e.allDescendants?a=e.collectionId:n=n.child(e.collectionId)}let o=[];i.where&&(o=function(e){var t;let r=function e(t){return void 0!==t.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":let t=ib(e.unaryFilter.field);return rG.create(t,"==",{doubleValue:NaN});case"IS_NULL":let r=ib(e.unaryFilter.field);return rG.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let n=ib(e.unaryFilter.field);return rG.create(n,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let i=ib(e.unaryFilter.field);return rG.create(i,"!=",{nullValue:"NULL_VALUE"});default:return tU()}}(t):void 0!==t.fieldFilter?rG.create(ib(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return tU()}}(t.fieldFilter.op),t.fieldFilter.value):void 0!==t.compositeFilter?rH.create(t.compositeFilter.filters.map(t=>e(t)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return tU()}}(t.compositeFilter.op)):tU()}(e);return r instanceof rH&&rW(t=r)&&rQ(t)?r.getFilters():[r]}(i.where));let l=[];i.orderBy&&(l=i.orderBy.map(e=>new r$(ib(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))));let h=null;i.limit&&(h=null==(r="object"==typeof(t=i.limit)?t.value:t)?null:r);let u=null;i.startAt&&(u=function(e){let t=!!e.before;return new rj(e.values||[],t)}(i.startAt));let c=null;return i.endAt&&(c=function(e){let t=!e.before;return new rj(e.values||[],t)}(i.endAt)),new r7(n,a,l,o,h,"F",u,c)}({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?nn(t,t.limit,"L"):t}(t.bundledQuery),readTime:il(t.readTime)}),t7.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iU{constructor(){this.overlays=new ra(t5.comparator),this.dr=new Map}getOverlay(e,t){return t7.resolve(this.overlays.get(t))}getOverlays(e,t){let r=np();return t7.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&r.set(t,e)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((r,n)=>{this.Tt(e,t,n)}),t7.resolve()}removeOverlaysForBatchId(e,t,r){let n=this.dr.get(r);return void 0!==n&&(n.forEach(e=>this.overlays=this.overlays.remove(e)),this.dr.delete(r)),t7.resolve()}getOverlaysForCollection(e,t,r){let n=np(),i=t.length+1,s=new t5(t.child("")),a=this.overlays.getIteratorFrom(s);for(;a.hasNext();){let e=a.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>r&&n.set(e.getKey(),e)}return t7.resolve(n)}getOverlaysForCollectionGroup(e,t,r,n){let i=new ra((e,t)=>e-t),s=this.overlays.getIterator();for(;s.hasNext();){let e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>r){let t=i.get(e.largestBatchId);null===t&&(t=np(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}let a=np(),o=i.getIterator();for(;o.hasNext()&&(o.getNext().value.forEach((e,t)=>a.set(e,t)),!(a.size()>=n)););return t7.resolve(a)}Tt(e,t,r){let n=this.overlays.get(r.key);if(null!==n){let e=this.dr.get(n.largestBatchId).delete(r.key);this.dr.set(n.largestBatchId,e)}this.overlays=this.overlays.insert(r.key,new nH(t,r));let i=this.dr.get(t);void 0===i&&(i=ny(),this.dr.set(t,i)),this.dr.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iF{constructor(){this.sessionToken=rd.EMPTY_BYTE_STRING}getSessionToken(e){return t7.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,t7.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iB{constructor(){this.Er=new rh(ij.Ar),this.Rr=new rh(ij.Vr)}isEmpty(){return this.Er.isEmpty()}addReference(e,t){let r=new ij(e,t);this.Er=this.Er.add(r),this.Rr=this.Rr.add(r)}mr(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.gr(new ij(e,t))}pr(e,t){e.forEach(e=>this.removeReference(e,t))}yr(e){let t=new t5(new t2([])),r=new ij(t,e),n=new ij(t,e+1),i=[];return this.Rr.forEachInRange([r,n],e=>{this.gr(e),i.push(e.key)}),i}wr(){this.Er.forEach(e=>this.gr(e))}gr(e){this.Er=this.Er.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){let t=new t5(new t2([])),r=new ij(t,e),n=new ij(t,e+1),i=ny();return this.Rr.forEachInRange([r,n],e=>{i=i.add(e.key)}),i}containsKey(e){let t=new ij(e,0),r=this.Er.firstAfterOrEqual(t);return null!==r&&e.isEqual(r.key)}}class ij{constructor(e,t){this.key=e,this.br=t}static Ar(e,t){return t5.comparator(e.key,t.key)||tY(e.br,t.br)}static Vr(e,t){return tY(e.br,t.br)||t5.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iq{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Dr=1,this.vr=new rh(ij.Ar)}checkEmpty(e){return t7.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,r,n){let i=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let s=new nK(i,t,r,n);for(let t of(this.mutationQueue.push(s),n))this.vr=this.vr.add(new ij(t.key,i)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return t7.resolve(s)}lookupMutationBatch(e,t){return t7.resolve(this.Cr(t))}getNextMutationBatchAfterBatchId(e,t){let r=this.Fr(t+1),n=r<0?0:r;return t7.resolve(this.mutationQueue.length>n?this.mutationQueue[n]:null)}getHighestUnacknowledgedBatchId(){return t7.resolve(0===this.mutationQueue.length?-1:this.Dr-1)}getAllMutationBatches(e){return t7.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let r=new ij(t,0),n=new ij(t,Number.POSITIVE_INFINITY),i=[];return this.vr.forEachInRange([r,n],e=>{let t=this.Cr(e.br);i.push(t)}),t7.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new rh(tY);return t.forEach(e=>{let t=new ij(e,0),n=new ij(e,Number.POSITIVE_INFINITY);this.vr.forEachInRange([t,n],e=>{r=r.add(e.br)})}),t7.resolve(this.Mr(r))}getAllMutationBatchesAffectingQuery(e,t){let r=t.path,n=r.length+1,i=r;t5.isDocumentKey(i)||(i=i.child(""));let s=new ij(new t5(i),0),a=new rh(tY);return this.vr.forEachWhile(e=>{let t=e.key.path;return!!r.isPrefixOf(t)&&(t.length===n&&(a=a.add(e.br)),!0)},s),t7.resolve(this.Mr(a))}Mr(e){let t=[];return e.forEach(e=>{let r=this.Cr(e);null!==r&&t.push(r)}),t}removeMutationBatch(e,t){0===this.Or(t.batchId,"removed")||tU(),this.mutationQueue.shift();let r=this.vr;return t7.forEach(t.mutations,n=>{let i=new ij(n.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,n.key)}).next(()=>{this.vr=r})}Bn(e){}containsKey(e,t){let r=new ij(t,0),n=this.vr.firstAfterOrEqual(r);return t7.resolve(t.isEqual(n&&n.key))}performConsistencyCheck(e){return this.mutationQueue.length,t7.resolve()}Or(e,t){return this.Fr(e)}Fr(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Cr(e){let t=this.Fr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iz{constructor(e){this.Nr=e,this.docs=new ra(t5.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let r=t.key,n=this.docs.get(r),i=n?n.size:0,s=this.Nr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let r=this.docs.get(t);return t7.resolve(r?r.document.mutableCopy():rB.newInvalidDocument(t))}getEntries(e,t){let r=nu;return t.forEach(e=>{let t=this.docs.get(e);r=r.insert(e,t?t.document.mutableCopy():rB.newInvalidDocument(e))}),t7.resolve(r)}getDocumentsMatchingQuery(e,t,r,n){let i=nu,s=t.path,a=new t5(s.child("__id-9223372036854775808__")),o=this.docs.getIteratorFrom(a);for(;o.hasNext();){let{key:e,value:{document:a}}=o.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||0>=function(e,t){let r=e.readTime.compareTo(t.readTime);return 0!==r?r:0!==(r=t5.comparator(e.documentKey,t.documentKey))?r:tY(e.largestBatchId,t.largestBatchId)}(new t8(a.readTime,a.key,-1),r)||(n.has(a.key)||no(t,a))&&(i=i.insert(a.key,a.mutableCopy()))}return t7.resolve(i)}getAllFromCollectionGroup(e,t,r,n){tU()}Br(e,t){return t7.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new i$(this)}getSize(e){return t7.resolve(this.size)}}class i$ extends iO{constructor(e){super(),this.hr=e}applyChanges(e){let t=[];return this.changes.forEach((r,n)=>{n.isValidDocument()?t.push(this.hr.addEntry(e,n)):this.hr.removeEntry(r)}),t7.waitFor(t)}getFromCache(e,t){return this.hr.getEntry(e,t)}getAllFromCache(e,t){return this.hr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iK{constructor(e){this.persistence=e,this.Lr=new nh(e=>r8(e),r4),this.lastRemoteSnapshotVersion=t0.min(),this.highestTargetId=0,this.kr=0,this.qr=new iB,this.targetCount=0,this.Qr=iD.qn()}forEachTarget(e,t){return this.Lr.forEach((e,r)=>t(r)),t7.resolve()}getLastRemoteSnapshotVersion(e){return t7.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return t7.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),t7.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.kr&&(this.kr=t),t7.resolve()}Un(e){this.Lr.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this.Qr=new iD(t),this.highestTargetId=t),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,t){return this.Un(t),this.targetCount+=1,t7.resolve()}updateTargetData(e,t){return this.Un(t),t7.resolve()}removeTargetData(e,t){return this.Lr.delete(t.target),this.qr.yr(t.targetId),this.targetCount-=1,t7.resolve()}removeTargets(e,t,r){let n=0,i=[];return this.Lr.forEach((s,a)=>{a.sequenceNumber<=t&&null===r.get(a.targetId)&&(this.Lr.delete(s),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),n++)}),t7.waitFor(i).next(()=>n)}getTargetCount(e){return t7.resolve(this.targetCount)}getTargetData(e,t){let r=this.Lr.get(t)||null;return t7.resolve(r)}addMatchingKeys(e,t,r){return this.qr.mr(t,r),t7.resolve()}removeMatchingKeys(e,t,r){this.qr.pr(t,r);let n=this.persistence.referenceDelegate,i=[];return n&&t.forEach(t=>{i.push(n.markPotentiallyOrphaned(e,t))}),t7.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.qr.yr(t),t7.resolve()}getMatchingKeysForTargetId(e,t){let r=this.qr.Sr(t);return t7.resolve(r)}containsKey(e,t){return t7.resolve(this.qr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iG{constructor(e,t){this.Kr={},this.overlays={},this.$r=new rt(0),this.Ur=!1,this.Ur=!0,this.Wr=new iF,this.referenceDelegate=e(this),this.Gr=new iK(this),this.indexManager=new iC,this.remoteDocumentCache=new iz(e=>this.referenceDelegate.zr(e)),this.serializer=new iT(t),this.jr=new iV(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new iU,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Kr[e.toKey()];return r||(r=new iq(t,this.referenceDelegate),this.Kr[e.toKey()]=r),r}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,t,r){tO("MemoryPersistence","Starting transaction:",e);let n=new iH(this.$r.next());return this.referenceDelegate.Hr(),r(n).next(e=>this.referenceDelegate.Jr(n).next(()=>e)).toPromise().then(e=>(n.raiseOnCommittedEvent(),e))}Yr(e,t){return t7.or(Object.values(this.Kr).map(r=>()=>r.containsKey(e,t)))}}class iH extends t4{constructor(e){super(),this.currentSequenceNumber=e}}class iQ{constructor(e){this.persistence=e,this.Zr=new iB,this.Xr=null}static ei(e){return new iQ(e)}get ti(){if(this.Xr)return this.Xr;throw tU()}addReference(e,t,r){return this.Zr.addReference(r,t),this.ti.delete(r.toString()),t7.resolve()}removeReference(e,t,r){return this.Zr.removeReference(r,t),this.ti.add(r.toString()),t7.resolve()}markPotentiallyOrphaned(e,t){return this.ti.add(t.toString()),t7.resolve()}removeTarget(e,t){this.Zr.yr(t.targetId).forEach(e=>this.ti.add(e.toString()));let r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.ti.add(e.toString()))}).next(()=>r.removeTargetData(e,t))}Hr(){this.Xr=new Set}Jr(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return t7.forEach(this.ti,r=>{let n=t5.fromPath(r);return this.ni(e,n).next(e=>{e||t.removeEntry(n,t0.min())})}).next(()=>(this.Xr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ni(e,t).next(e=>{e?this.ti.delete(t.toString()):this.ti.add(t.toString())})}zr(e){return 0}ni(e,t){return t7.or([()=>t7.resolve(this.Zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Yr(e,t)])}}class iW{constructor(e,t){this.persistence=e,this.ri=new nh(e=>/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(e){let t="";for(let r=0;r<e.length;r++)t.length>0&&(t+="\x01\x01"),t=function(e,t){let r=t,n=e.length;for(let t=0;t<n;t++){let n=e.charAt(t);switch(n){case"\0":r+="\x01\x10";break;case"\x01":r+="\x01\x11";break;default:r+=n}}return r}(e.get(r),t);return t+"\x01\x01"})(e.path),(e,t)=>e.isEqual(t)),this.garbageCollector=new iL(this,t)}static ei(e,t){return new iW(e,t)}Hr(){}Jr(e){return t7.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Xn(e){let t=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(e=>t.next(t=>e+t))}nr(e){let t=0;return this.er(e,e=>{t++}).next(()=>t)}er(e,t){return t7.forEach(this.ri,(r,n)=>this.ir(e,r,n).next(e=>e?t7.resolve():t(n)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0,n=this.persistence.getRemoteDocumentCache(),i=n.newChangeBuffer();return n.Br(e,n=>this.ir(e,n,t).next(e=>{e||(r++,i.removeEntry(n,t0.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.ri.set(t,e.currentSequenceNumber),t7.resolve()}removeTarget(e,t){let r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.ri.set(r,e.currentSequenceNumber),t7.resolve()}removeReference(e,t,r){return this.ri.set(r,e.currentSequenceNumber),t7.resolve()}updateLimboDocument(e,t){return this.ri.set(t,e.currentSequenceNumber),t7.resolve()}zr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=function e(t){switch(rS(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:let r=rw(t);return r?16+e(r):16;case 5:return 2*t.stringValue.length;case 6:return ry(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(t.arrayValue.values||[]).reduce((t,r)=>t+e(r),0);case 10:case 11:var n;let i;return n=t.mapValue,i=0,ri(n.fields,(t,r)=>{i+=t.length+e(r)}),i;default:throw tU()}}(e.data.value)),t}ir(e,t,r){return t7.or([()=>this.persistence.Yr(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{let e=this.ri.get(t);return t7.resolve(void 0!==e&&e>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iX{constructor(e,t,r,n){this.targetId=e,this.fromCache=t,this.Wi=r,this.Gi=n}static zi(e,t){let r=ny(),n=ny();for(let e of t.docChanges)switch(e.type){case 0:r=r.add(e.doc.key);break;case 1:n=n.add(e.doc.key)}return new iX(e,t.fromCache,r,n)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iY{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iJ{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=!function(){var e;let t=null===(e=J())||void 0===e?void 0:e.forceEnvironment;if("node"===t)return!0;if("browser"===t)return!1;try{return"[object process]"===Object.prototype.toString.call(I.process)}catch(e){return!1}}()&&navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")?8:function(e){let t=e.match(/Android ([\d.]+)/i);return Number(t?t[1].split(".").slice(0,2).join("."):"-1")}("undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:"")>0?6:4}initialize(e,t){this.Zi=e,this.indexManager=t,this.ji=!0}getDocumentsMatchingQuery(e,t,r,n){let i={result:null};return this.Xi(e,t).next(e=>{i.result=e}).next(()=>{if(!i.result)return this.es(e,t,n,r).next(e=>{i.result=e})}).next(()=>{if(i.result)return;let r=new iY;return this.ts(e,t,r).next(n=>{if(i.result=n,this.Hi)return this.ns(e,t,r,n.size)})}).next(()=>i.result)}ns(e,t,r,n){return r.documentReadCount<this.Ji?(tL()<=o.DEBUG&&tO("QueryEngine","SDK will not create cache indexes for query:",na(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),t7.resolve()):(tL()<=o.DEBUG&&tO("QueryEngine","Query:",na(t),"scans",r.documentReadCount,"local documents and returns",n,"documents as results."),r.documentReadCount>this.Yi*n?(tL()<=o.DEBUG&&tO("QueryEngine","The SDK decides to create cache indexes for query:",na(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,nr(t))):t7.resolve())}Xi(e,t){if(ne(t))return t7.resolve(null);let r=nr(t);return this.indexManager.getIndexType(e,r).next(n=>0===n?null:(null!==t.limit&&1===n&&(r=nr(t=nn(t,null,"F"))),this.indexManager.getDocumentsMatchingTarget(e,r).next(n=>{let i=ny(...n);return this.Zi.getDocuments(e,i).next(n=>this.indexManager.getMinOffset(e,r).next(r=>{let s=this.rs(t,n);return this.ss(t,s,i,r.readTime)?this.Xi(e,nn(t,null,"F")):this.os(e,s,t,r)}))})))}es(e,t,r,n){return ne(t)||n.isEqual(t0.min())?t7.resolve(null):this.Zi.getDocuments(e,r).next(i=>{let s=this.rs(t,i);return this.ss(t,s,r,n)?t7.resolve(null):(tL()<=o.DEBUG&&tO("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),na(t)),this.os(e,s,t,function(e,t){let r=e.toTimestamp().seconds,n=e.toTimestamp().nanoseconds+1;return new t8(t0.fromTimestamp(1e9===n?new tZ(r+1,0):new tZ(r,n)),t5.empty(),-1)}(n,0)).next(e=>e))})}rs(e,t){let r=new rh(nl(e));return t.forEach((t,n)=>{no(e,n)&&(r=r.add(n))}),r}ss(e,t,r,n){if(null===e.limit)return!1;if(r.size!==t.size)return!0;let i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(n)>0)}ts(e,t,r){return tL()<=o.DEBUG&&tO("QueryEngine","Using full collection scan to execute query:",na(t)),this.Zi.getDocumentsMatchingQuery(e,t,t8.min(),r)}os(e,t,r,n){return this.Zi.getDocumentsMatchingQuery(e,r,n).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iZ{constructor(e,t,r,n){this.persistence=e,this._s=t,this.serializer=n,this.us=new ra(tY),this.cs=new nh(e=>r8(e),r4),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(r)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new iP(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.us))}}async function i0(e,t){return await e.persistence.runTransaction("Handle user change","readonly",r=>{let n;return e.mutationQueue.getAllMutationBatches(r).next(i=>(n=i,e.Ps(t),e.mutationQueue.getAllMutationBatches(r))).next(t=>{let i=[],s=[],a=ny();for(let e of n)for(let t of(i.push(e.batchId),e.mutations))a=a.add(t.key);for(let e of t)for(let t of(s.push(e.batchId),e.mutations))a=a.add(t.key);return e.localDocuments.getDocuments(r,a).next(e=>({Ts:e,removedBatchIds:i,addedBatchIds:s}))})})}function i1(e){return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Gr.getLastRemoteSnapshotVersion(t))}async function i2(e,t,r){let n=e.us.get(t);try{r||await e.persistence.runTransaction("Release target",r?"readwrite":"readwrite-primary",t=>e.persistence.referenceDelegate.removeTarget(t,n))}catch(e){if(!re(e))throw e;tO("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}e.us=e.us.remove(t),e.cs.delete(n.target)}function i6(e,t,r){let n=t0.min(),i=ny();return e.persistence.runTransaction("Execute query","readwrite",s=>(function(e,t,r){let n=e.cs.get(r);return void 0!==n?t7.resolve(e.us.get(n)):e.Gr.getTargetData(t,r)})(e,s,nr(t)).next(t=>{if(t)return n=t.lastLimboFreeSnapshotVersion,e.Gr.getMatchingKeysForTargetId(s,t.targetId).next(e=>{i=e})}).next(()=>e._s.getDocumentsMatchingQuery(s,t,r?n:t0.min(),r?i:ny())).next(r=>{var n;let s;return n=t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2)),s=e.ls.get(n)||t0.min(),r.forEach((e,t)=>{t.readTime.compareTo(s)>0&&(s=t.readTime)}),e.ls.set(n,s),{documents:r,Es:i}}))}class i3{constructor(){this.activeTargetIds=nv}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){return JSON.stringify({activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()})}}class i5{constructor(){this._o=new i3,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,t,r){this.ao[e]=t}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new i3,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i8{uo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i4{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){for(let e of(tO("ConnectivityMonitor","Network connectivity changed: AVAILABLE"),this.To))e(0)}Po(){for(let e of(tO("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE"),this.To))e(1)}static p(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let i9=null;function i7(){return null===i9?i9=0x10000000+Math.round(0x80000000*Math.random()):i9++,"0x"+i9.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const se={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sr="WebChannelConnection";class sn extends class{get Co(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;let t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),n=encodeURIComponent(this.databaseId.database);this.Fo=t+"://"+e.host,this.Mo=`projects/${r}/databases/${n}`,this.xo="(default)"===this.databaseId.database?`project_id=${r}`:`project_id=${r}&database_id=${n}`}Oo(e,t,r,n,i){let s=i7(),a=this.No(e,t.toUriEncodedString());tO("RestConnection",`Sending RPC '${e}' ${s}:`,a,r);let o={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Bo(o,n,i),this.Lo(e,a,o,r).then(t=>(tO("RestConnection",`Received RPC '${e}' ${s}: `,t),t),t=>{throw tP("RestConnection",`RPC '${e}' ${s} failed with error: `,t,"url: ",a,"request:",r),t})}ko(e,t,r,n,i,s){return this.Oo(e,t,r,n,i)}Bo(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+tN}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,r)=>e[r]=t),r&&r.headers.forEach((t,r)=>e[r]=t)}No(e,t){let r=se[e];return`${this.Fo}/v1/${t}:${r}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Lo(e,t,r,n){let i=i7();return new Promise((s,a)=>{let o=new u;o.setWithCredentials(!0),o.listenOnce(f.COMPLETE,()=>{try{switch(o.getLastErrorCode()){case d.NO_ERROR:let t=o.getResponseJson();tO(sr,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(t)),s(t);break;case d.TIMEOUT:tO(sr,`RPC '${e}' ${i} timed out`),a(new tB(tF.DEADLINE_EXCEEDED,"Request time out"));break;case d.HTTP_ERROR:let r=o.getStatus();if(tO(sr,`RPC '${e}' ${i} failed with status:`,r,"response text:",o.getResponseText()),r>0){let e=o.getResponseJson();Array.isArray(e)&&(e=e[0]);let t=null==e?void 0:e.error;if(t&&t.status&&t.message){let e=function(e){let t=e.toLowerCase().replace(/_/g,"-");return Object.values(tF).indexOf(t)>=0?t:tF.UNKNOWN}(t.status);a(new tB(e,t.message))}else a(new tB(tF.UNKNOWN,"Server responded with status "+o.getStatus()))}else a(new tB(tF.UNAVAILABLE,"Connection failed."));break;default:tU()}}finally{tO(sr,`RPC '${e}' ${i} completed.`)}});let l=JSON.stringify(n);tO(sr,`RPC '${e}' ${i} sending request:`,n),o.send(t,"POST",l,r,15)})}qo(e,t,r){let n=i7(),i=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=y(),a=m(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;void 0!==l&&(o.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(o.useFetchStreams=!0),this.Bo(o.initMessageHeaders,t,r),o.encodeInitMessageHeaders=!0;let h=i.join("");tO(sr,`Creating RPC '${e}' stream ${n}: ${h}`,o);let u=s.createWebChannel(h,o),f=!1,d=!1,v=new st({Eo:t=>{d?tO(sr,`Not sending because RPC '${e}' stream ${n} is closed:`,t):(f||(tO(sr,`Opening RPC '${e}' stream ${n} transport.`),u.open(),f=!0),tO(sr,`RPC '${e}' stream ${n} sending:`,t),u.send(t))},Ao:()=>u.close()}),w=(e,t,r)=>{e.listen(t,e=>{try{r(e)}catch(e){setTimeout(()=>{throw e},0)}})};return w(u,c.EventType.OPEN,()=>{d||(tO(sr,`RPC '${e}' stream ${n} transport opened.`),v.So())}),w(u,c.EventType.CLOSE,()=>{d||(d=!0,tO(sr,`RPC '${e}' stream ${n} transport closed`),v.Do())}),w(u,c.EventType.ERROR,t=>{d||(d=!0,tP(sr,`RPC '${e}' stream ${n} transport errored:`,t),v.Do(new tB(tF.UNAVAILABLE,"The operation could not be completed")))}),w(u,c.EventType.MESSAGE,t=>{var r;if(!d){let i=t.data[0];i||tU();let s=(null==i?void 0:i.error)||(null===(r=i[0])||void 0===r?void 0:r.error);if(s){tO(sr,`RPC '${e}' stream ${n} received error:`,s);let t=s.status,r=function(e){let t=_[e];if(void 0!==t)return nW(t)}(t),i=s.message;void 0===r&&(r=tF.INTERNAL,i="Unknown error status: "+t+" with message "+s.message),d=!0,v.Do(new tB(r,i)),u.close()}else tO(sr,`RPC '${e}' stream ${n} received:`,i),v.vo(i)}}),w(a,g.STAT_EVENT,t=>{t.stat===p.PROXY?tO(sr,`RPC '${e}' stream ${n} detected buffering proxy`):t.stat===p.NOPROXY&&tO(sr,`RPC '${e}' stream ${n} detected no buffering proxy`)}),setTimeout(()=>{v.bo()},0),v}}function si(){return"undefined"!=typeof document?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ss(e){return new ii(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(e,t,r=1e3,n=1.5,i=6e4){this.li=e,this.timerId=t,this.Qo=r,this.Ko=n,this.$o=i,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();let t=Math.floor(this.Uo+this.Ho()),r=Math.max(0,Date.now()-this.Go),n=Math.max(0,t-r);n>0&&tO("ExponentialBackoff",`Backing off for ${n} ms (base delay: ${this.Uo} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,n,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){null!==this.Wo&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){null!==this.Wo&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(e,t,r,n,i,s,a,o){this.li=e,this.Yo=r,this.Zo=n,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=a,this.listener=o,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new sa(e,t)}i_(){return 1===this.state||5===this.state||this.s_()}s_(){return 2===this.state||3===this.state}start(){this.n_=0,4!==this.state?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&null===this.e_&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,t){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,4!==e?this.r_.reset():t&&t.code===tF.RESOURCE_EXHAUSTED?(tM(t.toString()),tM("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):t&&t.code===tF.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(t)}P_(){}auth(){this.state=1;let e=this.T_(this.Xo),t=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,r])=>{this.Xo===t&&this.I_(e,r)},t=>{e(()=>{let e=new tB(tF.UNKNOWN,"Fetching auth token failed: "+t.message);return this.d_(e)})})}I_(e,t){let r=this.T_(this.Xo);this.stream=this.E_(e,t),this.stream.Ro(()=>{r(()=>this.listener.Ro())}),this.stream.mo(()=>{r(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(e=>{r(()=>this.d_(e))}),this.stream.onMessage(e=>{r(()=>1==++this.n_?this.A_(e):this.onNext(e))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}d_(e){return tO("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return t=>{this.li.enqueueAndForget(()=>this.Xo===e?t():(tO("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class sl extends so{constructor(e,t,r,n,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,n,s),this.serializer=i}E_(e,t){return this.connection.qo("Listen",e,t)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();let t=function(e,t){let r;if("targetChange"in t){var n,i;t.targetChange;let s="NO_CHANGE"===(n=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===n?1:"REMOVE"===n?2:"CURRENT"===n?3:"RESET"===n?4:tU(),a=t.targetChange.targetIds||[],o=(i=t.targetChange.resumeToken,e.useProto3Json?(void 0===i||"string"==typeof i||tU(),rd.fromBase64String(i||"")):(void 0===i||i instanceof ts||i instanceof Uint8Array||tU(),rd.fromUint8Array(i||new Uint8Array))),l=t.targetChange.cause;r=new n5(s,a,o,l&&new tB(void 0===l.code?tF.UNKNOWN:nW(l.code),l.message||"")||null)}else if("documentChange"in t){t.documentChange;let n=t.documentChange;n.document,n.document.name,n.document.updateTime;let i=ip(e,n.document.name),s=il(n.document.updateTime),a=n.document.createTime?il(n.document.createTime):t0.min(),o=new rF({mapValue:{fields:n.document.fields}}),l=rB.newFoundDocument(i,s,a,o);r=new n6(n.targetIds||[],n.removedTargetIds||[],l.key,l)}else if("documentDelete"in t){t.documentDelete;let n=t.documentDelete;n.document;let i=ip(e,n.document),s=n.readTime?il(n.readTime):t0.min(),a=rB.newNoDocument(i,s);r=new n6([],n.removedTargetIds||[],a.key,a)}else if("documentRemove"in t){t.documentRemove;let n=t.documentRemove;n.document;let i=ip(e,n.document);r=new n6([],n.removedTargetIds||[],i,null)}else{if(!("filter"in t))return tU();{t.filter;let e=t.filter;e.targetId;let{count:n=0,unchangedNames:i}=e,s=new nQ(n,i);r=new n3(e.targetId,s)}}return r}(this.serializer,e),r=function(e){if(!("targetChange"in e))return t0.min();let t=e.targetChange;return t.targetIds&&t.targetIds.length?t0.min():t.readTime?il(t.readTime):t0.min()}(e);return this.listener.R_(t,r)}V_(e){let t={};t.database=im(this.serializer),t.addTarget=function(e,t){let r;let n=t.target;if((r=r9(n)?{documents:{documents:[ig(e,n.path)]}}:{query:function(e,t){var r,n;let i;let s={structuredQuery:{}},a=t.path;null!==t.collectionGroup?(i=a,s.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=a.popLast(),s.structuredQuery.from=[{collectionId:a.lastSegment()}]),s.parent=ig(e,i);let o=function(e){if(0!==e.length)return function e(t){return t instanceof rG?function(e){if("=="===e.op){if(rO(e.value))return{unaryFilter:{field:iw(e.field),op:"IS_NAN"}};if(rL(e.value))return{unaryFilter:{field:iw(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(rO(e.value))return{unaryFilter:{field:iw(e.field),op:"IS_NOT_NAN"}};if(rL(e.value))return{unaryFilter:{field:iw(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:iw(e.field),op:it[e.op],value:e.value}}}(t):t instanceof rH?function(t){let r=t.getFilters().map(t=>e(t));return 1===r.length?r[0]:{compositeFilter:{op:ir[t.op],filters:r}}}(t):tU()}(rH.create(e,"and"))}(t.filters);o&&(s.structuredQuery.where=o);let l=function(e){if(0!==e.length)return e.map(e=>({field:iw(e.field),direction:ie[e.dir]}))}(t.orderBy);l&&(s.structuredQuery.orderBy=l);let h=is(e,t.limit);return null!==h&&(s.structuredQuery.limit=h),t.startAt&&(s.structuredQuery.startAt={before:(r=t.startAt).inclusive,values:r.position}),t.endAt&&(s.structuredQuery.endAt={before:!(n=t.endAt).inclusive,values:n.position}),{ct:s,parent:i}}(e,n).ct}).targetId=t.targetId,t.resumeToken.approximateByteSize()>0){r.resumeToken=io(e,t.resumeToken);let n=is(e,t.expectedCount);null!==n&&(r.expectedCount=n)}else if(t.snapshotVersion.compareTo(t0.min())>0){r.readTime=ia(e,t.snapshotVersion.toTimestamp());let n=is(e,t.expectedCount);null!==n&&(r.expectedCount=n)}return r}(this.serializer,e);let r=function(e,t){let r=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return tU()}}(t.purpose);return null==r?null:{"goog-listen-tags":r}}(this.serializer,e);r&&(t.labels=r),this.c_(t)}m_(e){let t={};t.database=im(this.serializer),t.removeTarget=e,this.c_(t)}}class sh extends so{constructor(e,t,r,n,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,n,s),this.serializer=i}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}E_(e,t){return this.connection.qo("Write",e,t)}A_(e){return e.streamToken||tU(),this.lastStreamToken=e.streamToken,e.writeResults&&0!==e.writeResults.length&&tU(),this.listener.p_()}onNext(e){var t,r;e.streamToken||tU(),this.lastStreamToken=e.streamToken,this.r_.reset();let n=(t=e.writeResults,r=e.commitTime,t&&t.length>0?(void 0!==r||tU(),t.map(e=>{let t;return(t=e.updateTime?il(e.updateTime):il(r)).isEqual(t0.min())&&(t=il(r)),new nN(t,e.transformResults||[])})):[]),i=il(e.commitTime);return this.listener.y_(i,n)}w_(){let e={};e.database=im(this.serializer),this.c_(e)}g_(e){let t={streamToken:this.lastStreamToken,writes:e.map(e=>(function(e,t){var r;let n;if(t instanceof nU)n={update:iv(e,t.key,t.value)};else if(t instanceof nz)n={delete:id(e,t.key)};else if(t instanceof nF)n={update:iv(e,t.key,t.data),updateMask:function(e){let t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}(t.fieldMask)};else{if(!(t instanceof n$))return tU();n={verify:id(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(e=>(function(e,t){let r=t.transform;if(r instanceof nT)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(r instanceof nS)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:r.elements}};if(r instanceof nI)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:r.elements}};if(r instanceof nA)return{fieldPath:t.field.canonicalString(),increment:r.Pe};throw tU()})(0,e))),t.precondition.isNone||(n.currentDocument=void 0!==(r=t.precondition).updateTime?{updateTime:ia(e,r.updateTime.toTimestamp())}:void 0!==r.exists?{exists:r.exists}:tU()),n})(this.serializer,e))};this.c_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su extends class{}{constructor(e,t,r,n){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=n,this.S_=!1}b_(){if(this.S_)throw new tB(tF.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,t,r,n){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Oo(e,iu(t,r),n,i,s)).catch(e=>{throw"FirebaseError"===e.name?(e.code===tF.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new tB(tF.UNKNOWN,e.toString())})}ko(e,t,r,n,i){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.ko(e,iu(t,r),n,s,a,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===tF.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new tB(tF.UNKNOWN,e.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class sc{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){0===this.D_&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){"Online"===this.state?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,"Online"===e&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(tM(t),this.C_=!1):tO("OnlineStateTracker",t)}N_(){null!==this.v_&&(this.v_.cancel(),this.v_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{constructor(e,t,r,n,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.B_=[],this.L_=new Map,this.k_=new Set,this.q_=[],this.Q_=i,this.Q_.uo(e=>{r.enqueueAndForget(async()=>{sE(this)&&(tO("RemoteStore","Restarting streams for network reachability change."),await async function(e){e.k_.add(4),await sp(e),e.K_.set("Unknown"),e.k_.delete(4),await sd(e)}(this))})}),this.K_=new sc(r,n)}}async function sd(e){if(sE(e))for(let t of e.q_)await t(!0)}async function sp(e){for(let t of e.q_)await t(!1)}function sg(e,t){e.L_.has(t.targetId)||(e.L_.set(t.targetId,t),sb(e)?sw(e):sV(e).s_()&&sy(e,t))}function sm(e,t){let r=sV(e);e.L_.delete(t),r.s_()&&sv(e,t),0===e.L_.size&&(r.s_()?r.a_():sE(e)&&e.K_.set("Unknown"))}function sy(e,t){if(e.U_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(t0.min())>0){let r=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(r)}sV(e).V_(t)}function sv(e,t){e.U_.xe(t),sV(e).m_(t)}function sw(e){e.U_=new n4({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ut:t=>e.L_.get(t)||null,nt:()=>e.datastore.serializer.databaseId}),sV(e).start(),e.K_.F_()}function sb(e){return sE(e)&&!sV(e).i_()&&e.L_.size>0}function sE(e){return 0===e.k_.size}async function s_(e){e.K_.set("Online")}async function sT(e){e.L_.forEach((t,r)=>{sy(e,t)})}async function sS(e,t){e.U_=void 0,sb(e)?(e.K_.O_(t),sw(e)):e.K_.set("Unknown")}async function sC(e,t,r){if(e.K_.set("Online"),t instanceof n5&&2===t.state&&t.cause)try{await async function(e,t){let r=t.cause;for(let n of t.targetIds)e.L_.has(n)&&(await e.remoteSyncer.rejectListen(n,r),e.L_.delete(n),e.U_.removeTarget(n))}(e,t)}catch(r){tO("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await sI(e,r)}else if(t instanceof n6?e.U_.$e(t):t instanceof n3?e.U_.Je(t):e.U_.Ge(t),!r.isEqual(t0.min()))try{let t=await i1(e.localStore);r.compareTo(t)>=0&&await function(e,t){let r=e.U_.it(t);return r.targetChanges.forEach((r,n)=>{if(r.resumeToken.approximateByteSize()>0){let i=e.L_.get(n);i&&e.L_.set(n,i.withResumeToken(r.resumeToken,t))}}),r.targetMismatches.forEach((t,r)=>{let n=e.L_.get(t);if(!n)return;e.L_.set(t,n.withResumeToken(rd.EMPTY_BYTE_STRING,n.snapshotVersion)),sv(e,t);let i=new i_(n.target,t,r,n.sequenceNumber);sy(e,i)}),e.remoteSyncer.applyRemoteEvent(r)}(e,r)}catch(t){tO("RemoteStore","Failed to raise snapshot:",t),await sI(e,t)}}async function sI(e,t,r){if(!re(t))throw t;e.k_.add(1),await sp(e),e.K_.set("Offline"),r||(r=()=>i1(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{tO("RemoteStore","Retrying IndexedDB access"),await r(),e.k_.delete(1),await sd(e)})}function sx(e,t){return t().catch(r=>sI(e,r,t))}async function sA(e){let t=sU(e),r=e.B_.length>0?e.B_[e.B_.length-1].batchId:-1;for(;sE(e)&&e.B_.length<10;)try{let n=await function(e,t){return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(void 0===t&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}(e.localStore,r);if(null===n){0===e.B_.length&&t.a_();break}r=n.batchId,function(e,t){e.B_.push(t);let r=sU(e);r.s_()&&r.f_&&r.g_(t.mutations)}(e,n)}catch(t){await sI(e,t)}sD(e)&&sk(e)}function sD(e){return sE(e)&&!sU(e).i_()&&e.B_.length>0}function sk(e){sU(e).start()}async function sN(e){sU(e).w_()}async function sR(e){let t=sU(e);for(let r of e.B_)t.g_(r.mutations)}async function sL(e,t,r){let n=e.B_.shift(),i=nG.from(n,t,r);await sx(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await sA(e)}async function sO(e,t){t&&sU(e).f_&&await async function(e,t){var r;if(function(e){switch(e){default:return tU();case tF.CANCELLED:case tF.UNKNOWN:case tF.DEADLINE_EXCEEDED:case tF.RESOURCE_EXHAUSTED:case tF.INTERNAL:case tF.UNAVAILABLE:case tF.UNAUTHENTICATED:return!1;case tF.INVALID_ARGUMENT:case tF.NOT_FOUND:case tF.ALREADY_EXISTS:case tF.PERMISSION_DENIED:case tF.FAILED_PRECONDITION:case tF.ABORTED:case tF.OUT_OF_RANGE:case tF.UNIMPLEMENTED:case tF.DATA_LOSS:return!0}}(r=t.code)&&r!==tF.ABORTED){let r=e.B_.shift();sU(e).__(),await sx(e,()=>e.remoteSyncer.rejectFailedWrite(r.batchId,t)),await sA(e)}}(e,t),sD(e)&&sk(e)}async function sM(e,t){e.asyncQueue.verifyOperationInProgress(),tO("RemoteStore","RemoteStore received new credentials");let r=sE(e);e.k_.add(3),await sp(e),r&&e.K_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.k_.delete(3),await sd(e)}async function sP(e,t){t?(e.k_.delete(2),await sd(e)):t||(e.k_.add(2),await sp(e),e.K_.set("Unknown"))}function sV(e){var t,r,n;return e.W_||(e.W_=(t=e.datastore,r=e.asyncQueue,n={Ro:s_.bind(null,e),mo:sT.bind(null,e),po:sS.bind(null,e),R_:sC.bind(null,e)},t.b_(),new sl(r,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,n)),e.q_.push(async t=>{t?(e.W_.__(),sb(e)?sw(e):e.K_.set("Unknown")):(await e.W_.stop(),e.U_=void 0)})),e.W_}function sU(e){var t,r,n;return e.G_||(e.G_=(t=e.datastore,r=e.asyncQueue,n={Ro:()=>Promise.resolve(),mo:sN.bind(null,e),po:sO.bind(null,e),p_:sR.bind(null,e),y_:sL.bind(null,e)},t.b_(),new sh(r,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,n)),e.q_.push(async t=>{t?(e.G_.__(),await sA(e)):(await e.G_.stop(),e.B_.length>0&&(tO("RemoteStore",`Stopping write stream with ${e.B_.length} pending writes`),e.B_=[]))})),e.G_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sF{constructor(e,t,r,n,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=n,this.removalCallback=i,this.deferred=new tj,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,n,i){let s=new sF(e,t,Date.now()+r,n,i);return s.start(r),s}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new tB(tF.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function sB(e,t){if(tM("AsyncQueue",`${t}: ${e}`),re(e))return new tB(tF.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sj{static emptySet(e){return new sj(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||t5.comparator(t.key,r.key):(e,t)=>t5.comparator(e.key,t.key),this.keyedMap=nf(),this.sortedSet=new ra(this.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof sj)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){let e=t.getNext().key,n=r.getNext().key;if(!e.isEqual(n))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){let r=new sj;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sq{constructor(){this.z_=new ra(t5.comparator)}track(e){let t=e.doc.key,r=this.z_.get(t);r?0!==e.type&&3===r.type?this.z_=this.z_.insert(t,e):3===e.type&&1!==r.type?this.z_=this.z_.insert(t,{type:r.type,doc:e.doc}):2===e.type&&2===r.type?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):2===e.type&&0===r.type?this.z_=this.z_.insert(t,{type:0,doc:e.doc}):1===e.type&&0===r.type?this.z_=this.z_.remove(t):1===e.type&&2===r.type?this.z_=this.z_.insert(t,{type:1,doc:r.doc}):0===e.type&&1===r.type?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):tU():this.z_=this.z_.insert(t,e)}j_(){let e=[];return this.z_.inorderTraversal((t,r)=>{e.push(r)}),e}}class sz{constructor(e,t,r,n,i,s,a,o,l){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=n,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=a,this.excludesMetadataChanges=o,this.hasCachedResults=l}static fromInitialDocuments(e,t,r,n,i){let s=[];return t.forEach(e=>{s.push({type:0,doc:e})}),new sz(e,t,sj.emptySet(t),s,r,n,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ni(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==r[e].type||!t[e].doc.isEqual(r[e].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s${constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class sK{constructor(){this.queries=sG(),this.onlineState="Unknown",this.X_=new Set}terminate(){!function(e,t){let r=e.queries;e.queries=sG(),r.forEach((e,r)=>{for(let e of r.J_)e.onError(t)})}(this,new tB(tF.ABORTED,"Firestore shutting down"))}}function sG(){return new nh(e=>ns(e),ni)}async function sH(e,t){let r=3,n=t.query,i=e.queries.get(n);i?!i.Y_()&&t.Z_()&&(r=2):(i=new s$,r=+!t.Z_());try{switch(r){case 0:i.H_=await e.onListen(n,!0);break;case 1:i.H_=await e.onListen(n,!1);break;case 2:await e.onFirstRemoteStoreListen(n)}}catch(r){let e=sB(r,`Initialization of query '${na(t.query)}' failed`);return void t.onError(e)}e.queries.set(n,i),i.J_.push(t),t.ea(e.onlineState),i.H_&&t.ta(i.H_)&&sY(e)}async function sQ(e,t){let r=t.query,n=3,i=e.queries.get(r);if(i){let e=i.J_.indexOf(t);e>=0&&(i.J_.splice(e,1),0===i.J_.length?n=+!t.Z_():!i.Y_()&&t.Z_()&&(n=2))}switch(n){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function sW(e,t){let r=!1;for(let n of t){let t=n.query,i=e.queries.get(t);if(i){for(let e of i.J_)e.ta(n)&&(r=!0);i.H_=n}}r&&sY(e)}function sX(e,t,r){let n=e.queries.get(t);if(n)for(let e of n.J_)e.onError(r);e.queries.delete(t)}function sY(e){e.X_.forEach(e=>{e.next()})}(C=S||(S={})).na="default",C.Cache="cache";class sJ{constructor(e,t,r){this.query=e,this.ra=t,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=r||{}}ta(e){if(!this.options.includeMetadataChanges){let t=[];for(let r of e.docChanges)3!==r.type&&t.push(r);e=new sz(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ia?this.oa(e)&&(this.ra.next(e),t=!0):this._a(e,this.onlineState)&&(this.aa(e),t=!0),this.sa=e,t}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let t=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),t=!0),t}_a(e,t){return!(e.fromCache&&this.Z_())||(!this.options.ua||!("Offline"!==t))&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}oa(e){if(e.docChanges.length>0)return!0;let t=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}aa(e){e=sz.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==S.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sZ{constructor(e){this.key=e}}class s0{constructor(e){this.key=e}}class s1{constructor(e,t){this.query=e,this.Ea=t,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=ny(),this.mutatedKeys=ny(),this.Va=nl(e),this.ma=new sj(this.Va)}get fa(){return this.Ea}ga(e,t){let r=t?t.pa:new sq,n=t?t.ma:this.ma,i=t?t.mutatedKeys:this.mutatedKeys,s=n,a=!1,o="F"===this.query.limitType&&n.size===this.query.limit?n.last():null,l="L"===this.query.limitType&&n.size===this.query.limit?n.first():null;if(e.inorderTraversal((e,t)=>{let h=n.get(e),u=no(this.query,t)?t:null,c=!!h&&this.mutatedKeys.has(h.key),f=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations),d=!1;h&&u?h.data.isEqual(u.data)?c!==f&&(r.track({type:3,doc:u}),d=!0):this.ya(h,u)||(r.track({type:2,doc:u}),d=!0,(o&&this.Va(u,o)>0||l&&0>this.Va(u,l))&&(a=!0)):!h&&u?(r.track({type:0,doc:u}),d=!0):h&&!u&&(r.track({type:1,doc:h}),d=!0,(o||l)&&(a=!0)),d&&(u?(s=s.add(u),i=f?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))}),null!==this.query.limit)for(;s.size>this.query.limit;){let e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),r.track({type:1,doc:e})}return{ma:s,pa:r,ss:a,mutatedKeys:i}}ya(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,n){let i=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;let s=e.pa.j_();s.sort((e,t)=>(function(e,t){let r=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return tU()}};return r(e)-r(t)})(e.type,t.type)||this.Va(e.doc,t.doc)),this.wa(r),n=null!=n&&n;let a=t&&!n?this.Sa():[],o=+(0===this.Ra.size&&!!this.current&&!n),l=o!==this.Aa;return(this.Aa=o,0!==s.length||l)?{snapshot:new sz(this.query,e.ma,i,s,e.mutatedKeys,0===o,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),ba:a}:{ba:a}}ea(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({ma:this.ma,pa:new sq,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.Ea.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(e=>this.Ea=this.Ea.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.Ea=this.Ea.delete(e)),this.current=e.current)}Sa(){if(!this.current)return[];let e=this.Ra;this.Ra=ny(),this.ma.forEach(e=>{this.Da(e.key)&&(this.Ra=this.Ra.add(e.key))});let t=[];return e.forEach(e=>{this.Ra.has(e)||t.push(new s0(e))}),this.Ra.forEach(r=>{e.has(r)||t.push(new sZ(r))}),t}va(e){this.Ea=e.Es,this.Ra=ny();let t=this.ga(e.documents);return this.applyChanges(t,!0)}Ca(){return sz.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,0===this.Aa,this.hasCachedResults)}}class s2{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class s6{constructor(e){this.key=e,this.Fa=!1}}class s3{constructor(e,t,r,n,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=n,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.Ma={},this.xa=new nh(e=>ns(e),ni),this.Oa=new Map,this.Na=new Set,this.Ba=new ra(t5.comparator),this.La=new Map,this.ka=new iB,this.qa={},this.Qa=new Map,this.Ka=iD.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return!0===this.$a}}async function s5(e,t,r=!0){let n;let i=am(e),s=i.xa.get(t);return s?(i.sharedClientState.addLocalQueryTarget(s.targetId),n=s.view.Ca()):n=await s4(i,t,r,!0),n}async function s8(e,t){let r=am(e);await s4(r,t,!0,!1)}async function s4(e,t,r,n){var i,s;let a;let o=await (i=e.localStore,s=nr(t),i.persistence.runTransaction("Allocate target","readwrite",e=>{let t;return i.Gr.getTargetData(e,s).next(r=>r?(t=r,t7.resolve(t)):i.Gr.allocateTargetId(e).next(r=>(t=new i_(s,r,"TargetPurposeListen",e.currentSequenceNumber),i.Gr.addTargetData(e,t).next(()=>t))))}).then(e=>{let t=i.us.get(e.targetId);return(null===t||e.snapshotVersion.compareTo(t.snapshotVersion)>0)&&(i.us=i.us.insert(e.targetId,e),i.cs.set(s,e.targetId)),e})),l=o.targetId,h=e.sharedClientState.addLocalQueryTarget(l,r);return n&&(a=await s9(e,t,l,"current"===h,o.resumeToken)),e.isPrimaryClient&&r&&sg(e.remoteStore,o),a}async function s9(e,t,r,n,i){e.Ua=(t,r,n)=>(async function(e,t,r,n){let i=t.view.ga(r);i.ss&&(i=await i6(e.localStore,t.query,!1).then(({documents:e})=>t.view.ga(e,i)));let s=n&&n.targetChanges.get(t.targetId),a=n&&null!=n.targetMismatches.get(t.targetId),o=t.view.applyChanges(i,e.isPrimaryClient,s,a);return ac(e,t.targetId,o.ba),o.snapshot})(e,t,r,n);let s=await i6(e.localStore,t,!0),a=new s1(t,s.Es),o=a.ga(s.documents),l=n2.createSynthesizedTargetChangeForCurrentChange(r,n&&"Offline"!==e.onlineState,i),h=a.applyChanges(o,e.isPrimaryClient,l);ac(e,r,h.ba);let u=new s2(t,r,a);return e.xa.set(t,u),e.Oa.has(r)?e.Oa.get(r).push(t):e.Oa.set(r,[t]),h.snapshot}async function s7(e,t,r){let n=e.xa.get(t),i=e.Oa.get(n.targetId);if(i.length>1)return e.Oa.set(n.targetId,i.filter(e=>!ni(e,t))),void e.xa.delete(t);e.isPrimaryClient?(e.sharedClientState.removeLocalQueryTarget(n.targetId),e.sharedClientState.isActiveQueryTarget(n.targetId)||await i2(e.localStore,n.targetId,!1).then(()=>{e.sharedClientState.clearQueryState(n.targetId),r&&sm(e.remoteStore,n.targetId),ah(e,n.targetId)}).catch(t9)):(ah(e,n.targetId),await i2(e.localStore,n.targetId,!0))}async function ae(e,t){let r=e.xa.get(t),n=e.Oa.get(r.targetId);e.isPrimaryClient&&1===n.length&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),sm(e.remoteStore,r.targetId))}async function at(e,t,r){var n;let i=(e.remoteStore.remoteSyncer.applySuccessfulWrite=as.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=aa.bind(null,e),e);try{let e;let s=await function(e,t){let r,n;let i=tZ.now(),s=t.reduce((e,t)=>e.add(t.key),ny());return e.persistence.runTransaction("Locally write mutations","readwrite",a=>{let o=nu,l=ny();return e.hs.getEntries(a,s).next(e=>{(o=e).forEach((e,t)=>{t.isValidDocument()||(l=l.add(e))})}).next(()=>e.localDocuments.getOverlayedDocuments(a,o)).next(n=>{r=n;let s=[];for(let e of t){let t=function(e,t){let r=null;for(let n of e.fieldTransforms){let e=t.data.field(n.field),i=n_(n.transform,e||null);null!=i&&(null===r&&(r=rF.empty()),r.set(n.field,i))}return r||null}(e,r.get(e.key).overlayedDocument);null!=t&&s.push(new nF(e.key,t,function e(t){let r=[];return ri(t.fields,(t,n)=>{let i=new t3([t]);if(rM(n)){let t=e(n.mapValue).fields;if(0===t.length)r.push(i);else for(let e of t)r.push(i.child(e))}else r.push(i)}),new rc(r)}(t.value.mapValue),nR.exists(!0)))}return e.mutationQueue.addMutationBatch(a,i,s,t)}).next(t=>{n=t;let i=t.applyToLocalDocumentSet(r,l);return e.documentOverlayCache.saveOverlays(a,t.batchId,i)})}).then(()=>({batchId:n.batchId,changes:nd(r)}))}(i.localStore,t);i.sharedClientState.addPendingMutation(s.batchId),n=s.batchId,(e=i.qa[i.currentUser.toKey()])||(e=new ra(tY)),e=e.insert(n,r),i.qa[i.currentUser.toKey()]=e,await ad(i,s.changes),await sA(i.remoteStore)}catch(t){let e=sB(t,"Failed to persist write");r.reject(e)}}async function ar(e,t){try{let r=await function(e,t){let r=t.snapshotVersion,n=e.us;return e.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{var s;let a,o;let l=e.hs.newChangeBuffer({trackRemovals:!0});n=e.us;let h=[];t.targetChanges.forEach((s,a)=>{var o;let l=n.get(a);if(!l)return;h.push(e.Gr.removeMatchingKeys(i,s.removedDocuments,a).next(()=>e.Gr.addMatchingKeys(i,s.addedDocuments,a)));let u=l.withSequenceNumber(i.currentSequenceNumber);null!==t.targetMismatches.get(a)?u=u.withResumeToken(rd.EMPTY_BYTE_STRING,t0.min()).withLastLimboFreeSnapshotVersion(t0.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,r)),n=n.insert(a,u),o=u,(0===l.resumeToken.approximateByteSize()||o.snapshotVersion.toMicroseconds()-l.snapshotVersion.toMicroseconds()>=3e8||s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size>0)&&h.push(e.Gr.updateTargetData(i,u))});let u=nu,c=ny();if(t.documentUpdates.forEach(r=>{t.resolvedLimboDocuments.has(r)&&h.push(e.persistence.referenceDelegate.updateLimboDocument(i,r))}),h.push((s=t.documentUpdates,a=ny(),o=ny(),s.forEach(e=>a=a.add(e)),l.getEntries(i,a).next(e=>{let t=nu;return s.forEach((r,n)=>{let i=e.get(r);n.isFoundDocument()!==i.isFoundDocument()&&(o=o.add(r)),n.isNoDocument()&&n.version.isEqual(t0.min())?(l.removeEntry(r,n.readTime),t=t.insert(r,n)):!i.isValidDocument()||n.version.compareTo(i.version)>0||0===n.version.compareTo(i.version)&&i.hasPendingWrites?(l.addEntry(n),t=t.insert(r,n)):tO("LocalStore","Ignoring outdated watch update for ",r,". Current version:",i.version," Watch version:",n.version)}),{Is:t,ds:o}})).next(e=>{u=e.Is,c=e.ds})),!r.isEqual(t0.min())){let t=e.Gr.getLastRemoteSnapshotVersion(i).next(t=>e.Gr.setTargetsMetadata(i,i.currentSequenceNumber,r));h.push(t)}return t7.waitFor(h).next(()=>l.apply(i)).next(()=>e.localDocuments.getLocalViewOfDocuments(i,u,c)).next(()=>u)}).then(t=>(e.us=n,t))}(e.localStore,t);t.targetChanges.forEach((t,r)=>{let n=e.La.get(r);n&&(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1||tU(),t.addedDocuments.size>0?n.Fa=!0:t.modifiedDocuments.size>0?n.Fa||tU():t.removedDocuments.size>0&&(n.Fa||tU(),n.Fa=!1))}),await ad(e,r,t)}catch(e){await t9(e)}}function an(e,t,r){var n;if(e.isPrimaryClient&&0===r||!e.isPrimaryClient&&1===r){let r;let i=[];e.xa.forEach((e,r)=>{let n=r.view.ea(t);n.snapshot&&i.push(n.snapshot)}),(n=e.eventManager).onlineState=t,r=!1,n.queries.forEach((e,n)=>{for(let e of n.J_)e.ea(t)&&(r=!0)}),r&&sY(n),i.length&&e.Ma.R_(i),e.onlineState=t,e.isPrimaryClient&&e.sharedClientState.setOnlineState(t)}}async function ai(e,t,r){e.sharedClientState.updateQueryState(t,"rejected",r);let n=e.La.get(t),i=n&&n.key;if(i){let r=new ra(t5.comparator);r=r.insert(i,rB.newNoDocument(i,t0.min()));let n=ny().add(i),s=new n1(t0.min(),new Map,new ra(tY),r,n);await ar(e,s),e.Ba=e.Ba.remove(i),e.La.delete(t),af(e)}else await i2(e.localStore,t,!1).then(()=>ah(e,t,r)).catch(t9)}async function as(e,t){var r;let n=t.batch.batchId;try{let i=await (r=e.localStore).persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{let n=t.batch.keys(),i=r.hs.newChangeBuffer({trackRemovals:!0});return(function(e,t,r,n){let i=r.batch,s=i.keys(),a=t7.resolve();return s.forEach(e=>{a=a.next(()=>n.getEntry(t,e)).next(t=>{let s=r.docVersions.get(e);null!==s||tU(),0>t.version.compareTo(s)&&(i.applyToRemoteDocument(t,r),t.isValidDocument()&&(t.setReadTime(r.commitVersion),n.addEntry(t)))})}),a.next(()=>e.mutationQueue.removeMutationBatch(t,i))})(r,e,t,i).next(()=>i.apply(e)).next(()=>r.mutationQueue.performConsistencyCheck(e)).next(()=>r.documentOverlayCache.removeOverlaysForBatchId(e,n,t.batch.batchId)).next(()=>r.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=ny();for(let r=0;r<e.mutationResults.length;++r)e.mutationResults[r].transformResults.length>0&&(t=t.add(e.batch.mutations[r].key));return t}(t))).next(()=>r.localDocuments.getDocuments(e,n))});al(e,n,null),ao(e,n),e.sharedClientState.updateMutationState(n,"acknowledged"),await ad(e,i)}catch(e){await t9(e)}}async function aa(e,t,r){var n;try{let i=await (n=e.localStore).persistence.runTransaction("Reject batch","readwrite-primary",e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next(t=>(null!==t||tU(),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t))).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r)).next(()=>n.localDocuments.getDocuments(e,r))});al(e,t,r),ao(e,t),e.sharedClientState.updateMutationState(t,"rejected",r),await ad(e,i)}catch(e){await t9(e)}}function ao(e,t){(e.Qa.get(t)||[]).forEach(e=>{e.resolve()}),e.Qa.delete(t)}function al(e,t,r){let n=e.qa[e.currentUser.toKey()];if(n){let i=n.get(t);i&&(r?i.reject(r):i.resolve(),n=n.remove(t)),e.qa[e.currentUser.toKey()]=n}}function ah(e,t,r=null){for(let n of(e.sharedClientState.removeLocalQueryTarget(t),e.Oa.get(t)))e.xa.delete(n),r&&e.Ma.Wa(n,r);e.Oa.delete(t),e.isPrimaryClient&&e.ka.yr(t).forEach(t=>{e.ka.containsKey(t)||au(e,t)})}function au(e,t){e.Na.delete(t.path.canonicalString());let r=e.Ba.get(t);null!==r&&(sm(e.remoteStore,r),e.Ba=e.Ba.remove(t),e.La.delete(r),af(e))}function ac(e,t,r){for(let n of r)n instanceof sZ?(e.ka.addReference(n.key,t),function(e,t){let r=t.key,n=r.path.canonicalString();e.Ba.get(r)||e.Na.has(n)||(tO("SyncEngine","New document in limbo: "+r),e.Na.add(n),af(e))}(e,n)):n instanceof s0?(tO("SyncEngine","Document no longer in limbo: "+n.key),e.ka.removeReference(n.key,t),e.ka.containsKey(n.key)||au(e,n.key)):tU()}function af(e){for(;e.Na.size>0&&e.Ba.size<e.maxConcurrentLimboResolutions;){let t=e.Na.values().next().value;e.Na.delete(t);let r=new t5(t2.fromString(t)),n=e.Ka.next();e.La.set(n,new s6(r)),e.Ba=e.Ba.insert(r,n),sg(e.remoteStore,new i_(nr(new r7(r.path)),n,"TargetPurposeLimboResolution",rt.oe))}}async function ad(e,t,r){let n=[],i=[],s=[];e.xa.isEmpty()||(e.xa.forEach((a,o)=>{s.push(e.Ua(o,t,r).then(t=>{var s;if((t||r)&&e.isPrimaryClient){let n=t?!t.fromCache:null===(s=null==r?void 0:r.targetChanges.get(o.targetId))||void 0===s?void 0:s.current;e.sharedClientState.updateQueryState(o.targetId,n?"current":"not-current")}if(t){n.push(t);let e=iX.zi(o.targetId,t);i.push(e)}}))}),await Promise.all(s),e.Ma.R_(n),await async function(e,t){try{await e.persistence.runTransaction("notifyLocalViewChanges","readwrite",r=>t7.forEach(t,t=>t7.forEach(t.Wi,n=>e.persistence.referenceDelegate.addReference(r,t.targetId,n)).next(()=>t7.forEach(t.Gi,n=>e.persistence.referenceDelegate.removeReference(r,t.targetId,n)))))}catch(e){if(!re(e))throw e;tO("LocalStore","Failed to update sequence numbers: "+e)}for(let r of t){let t=r.targetId;if(!r.fromCache){let r=e.us.get(t),n=r.snapshotVersion,i=r.withLastLimboFreeSnapshotVersion(n);e.us=e.us.insert(t,i)}}}(e.localStore,i))}async function ap(e,t){var r;if(!e.currentUser.isEqual(t)){tO("SyncEngine","User change. New user:",t.toKey());let n=await i0(e.localStore,t);e.currentUser=t,r="'waitForPendingWrites' promise is rejected due to a user change.",e.Qa.forEach(e=>{e.forEach(e=>{e.reject(new tB(tF.CANCELLED,r))})}),e.Qa.clear(),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await ad(e,n.Ts)}}function ag(e,t){let r=e.La.get(t);if(r&&r.Fa)return ny().add(r.key);{let r=ny(),n=e.Oa.get(t);if(!n)return r;for(let t of n){let n=e.xa.get(t);r=r.unionWith(n.view.fa)}return r}}function am(e){return e.remoteStore.remoteSyncer.applyRemoteEvent=ar.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ag.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ai.bind(null,e),e.Ma.R_=sW.bind(null,e.eventManager),e.Ma.Wa=sX.bind(null,e.eventManager),e}class ay{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ss(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,t){return null}Ya(e,t){return null}Ha(e){var t;return t=this.persistence,new iZ(t,new iJ,e.initialUser,this.serializer)}ja(e){return new iG(iQ.ei,this.serializer)}za(e){return new i5}async terminate(){var e,t;null===(e=this.gcScheduler)||void 0===e||e.stop(),null===(t=this.indexBackfillerScheduler)||void 0===t||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ay.provider={build:()=>new ay};class av extends ay{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,t){return this.persistence.referenceDelegate instanceof iW||tU(),new iR(this.persistence.referenceDelegate.garbageCollector,e.asyncQueue,t)}ja(e){let t=void 0!==this.cacheSizeBytes?iA.withCacheSize(this.cacheSizeBytes):iA.DEFAULT;return new iG(e=>iW.ei(e,t),this.serializer)}}class aw{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>an(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=ap.bind(null,this.syncEngine),await sP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new sK}createDatastore(e){let t=ss(e.databaseInfo.databaseId),r=new sn(e.databaseInfo);return new su(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){var t;return t=this.localStore,new sf(t,this.datastore,e.asyncQueue,e=>an(this.syncEngine,e,0),i4.p()?new i4:new i8)}createSyncEngine(e,t){return function(e,t,r,n,i,s,a){let o=new s3(e,t,r,n,i,s);return a&&(o.$a=!0),o}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(e){tO("RemoteStore","RemoteStore shutting down."),e.k_.add(5),await sp(e),e.Q_.shutdown(),e.K_.set("Unknown")}(this.remoteStore),null===(e=this.datastore)||void 0===e||e.terminate(),null===(t=this.eventManager)||void 0===t||t.terminate()}}aw.provider={build:()=>new aw};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ab{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):tM("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aE{constructor(e,t,r,n,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=n,this.user=tk.UNAUTHENTICATED,this.clientId=tX.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async e=>{tO("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(r,e=>(tO("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();let e=new tj;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(r){let t=sB(r,"Failed to shutdown persistence");e.reject(t)}}),e.promise}}async function a_(e,t){e.asyncQueue.verifyOperationInProgress(),tO("FirestoreClient","Initializing OfflineComponentProvider");let r=e.configuration;await t.initialize(r);let n=r.initialUser;e.setCredentialChangeListener(async e=>{n.isEqual(e)||(await i0(t.localStore,e),n=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function aT(e,t){e.asyncQueue.verifyOperationInProgress();let r=await aS(e);tO("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(r,e.configuration),e.setCredentialChangeListener(e=>sM(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,r)=>sM(t.remoteStore,r)),e._onlineComponents=t}async function aS(e){if(!e._offlineComponents){if(e._uninitializedComponentsProvider){tO("FirestoreClient","Using user provided OfflineComponentProvider");try{await a_(e,e._uninitializedComponentsProvider._offline)}catch(t){if(!("FirebaseError"===t.name?t.code===tF.FAILED_PRECONDITION||t.code===tF.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code))throw t;tP("Error using user provided cache. Falling back to memory cache: "+t),await a_(e,new ay)}}else tO("FirestoreClient","Using default OfflineComponentProvider"),await a_(e,new av(void 0))}return e._offlineComponents}async function aC(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(tO("FirestoreClient","Using user provided OnlineComponentProvider"),await aT(e,e._uninitializedComponentsProvider._online)):(tO("FirestoreClient","Using default OnlineComponentProvider"),await aT(e,new aw))),e._onlineComponents}async function aI(e){let t=await aC(e),r=t.eventManager;return r.onListen=s5.bind(null,t.syncEngine),r.onUnlisten=s7.bind(null,t.syncEngine),r.onFirstRemoteStoreListen=s8.bind(null,t.syncEngine),r.onLastRemoteStoreUnlisten=ae.bind(null,t.syncEngine),r}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ax(e){let t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aA=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aD(e,t,r){if(!r)throw new tB(tF.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function ak(e){if(!t5.isDocumentKey(e))throw new tB(tF.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function aN(e){if(t5.isDocumentKey(e))throw new tB(tF.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function aR(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{var t;let r=(t=e).constructor?t.constructor.name:null;return r?`a custom ${r} object`:"an object"}}return"function"==typeof e?"a function":tU()}function aL(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new tB(tF.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let r=aR(e);throw new tB(tF.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${r}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aO{constructor(e){var t,r;if(void 0===e.host){if(void 0!==e.ssl)throw new tB(tF.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=0x2800000;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new tB(tF.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(e,t,r,n){if(!0===t&&!0===n)throw new tB(tF.INVALID_ARGUMENT,`${e} and ${r} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ax(null!==(r=e.experimentalLongPollingOptions)&&void 0!==r?r:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new tB(tF.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new tB(tF.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new tB(tF.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){var t,r;return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,r=e.experimentalLongPollingOptions,t.timeoutSeconds===r.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class aM{constructor(e,t,r,n){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new aO({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new tB(tF.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return"notTerminated"!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new tB(tF.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new aO(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new tz;switch(e.type){case"firstParty":return new tH(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new tB(tF.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return"notTerminated"===this._terminateTask&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){"notTerminated"===this._terminateTask?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){let t=aA.get(e);t&&(tO("ComponentProvider","Removing Datastore"),aA.delete(e),t.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aP{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new aP(this.firestore,e,this._query)}}class aV{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new aU(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new aV(this.firestore,e,this._key)}}class aU extends aP{constructor(e,t,r){super(e,t,new r7(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new aV(this.firestore,null,new t5(e))}withConverter(e){return new aU(this.firestore,e,this._path)}}function aF(e,t,...r){if(e=el(e),aD("collection","path",t),e instanceof aM){let n=t2.fromString(t,...r);return aN(n),new aU(e,null,n)}{if(!(e instanceof aV||e instanceof aU))throw new tB(tF.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let n=e._path.child(t2.fromString(t,...r));return aN(n),new aU(e.firestore,null,n)}}function aB(e,t,...r){if(e=el(e),1==arguments.length&&(t=tX.newId()),aD("doc","path",t),e instanceof aM){let n=t2.fromString(t,...r);return ak(n),new aV(e,null,new t5(n))}{if(!(e instanceof aV||e instanceof aU))throw new tB(tF.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let n=e._path.child(t2.fromString(t,...r));return ak(n),new aV(e.firestore,e instanceof aU?e.converter:null,new t5(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aj{constructor(e=Promise.resolve()){this.Iu=[],this.du=!1,this.Eu=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new sa(this,"async_queue_retry"),this.fu=()=>{let e=si();e&&tO("AsyncQueue","Visibility state changed to "+e.visibilityState),this.r_.Jo()},this.gu=e;let t=si();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.du}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.du){this.du=!0,this.Vu=e||!1;let t=si();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.du)return new Promise(()=>{});let t=new tj;return this.yu(()=>this.du&&this.Vu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(0!==this.Iu.length){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!re(e))throw e;tO("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){let t=this.gu.then(()=>(this.Ru=!0,e().catch(e=>{let t;throw this.Au=e,this.Ru=!1,tM("INTERNAL UNHANDLED ERROR: ",(t=e.message||"",e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t)),e}).then(e=>(this.Ru=!1,e))));return this.gu=t,t}enqueueAfterDelay(e,t,r){this.pu(),this.mu.indexOf(e)>-1&&(t=0);let n=sF.createAndSchedule(this,e,t,r,e=>this.Su(e));return this.Eu.push(n),n}pu(){this.Au&&tU()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(let t of this.Eu)if(t.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{for(let t of(this.Eu.sort((e,t)=>e.targetTimeMs-t.targetTimeMs),this.Eu))if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){let t=this.Eu.indexOf(e);this.Eu.splice(t,1)}}class aq extends aM{constructor(e,t,r,n){super(e,t,r,n),this.type="firestore",this._queue=new aj,this._persistenceKey=(null==n?void 0:n.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){let e=this._firestoreClient.terminate();this._queue=new aj(e),this._firestoreClient=void 0,await e}}}function az(e){if(e._terminated)throw new tB(tF.FAILED_PRECONDITION,"The client has already been terminated.");return e._firestoreClient||function(e){var t,r,n,i;let s=e._freezeSettings(),a=(i=e._databaseId,new rE(i,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,ax(s.experimentalLongPollingOptions),s.useFetchStreams));e._componentsProvider||(null===(r=s.localCache)||void 0===r?void 0:r._offlineComponentProvider)&&(null===(n=s.localCache)||void 0===n?void 0:n._onlineComponentProvider)&&(e._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),e._firestoreClient=new aE(e._authCredentials,e._appCheckCredentials,e._queue,a,e._componentsProvider&&function(e){let t=null==e?void 0:e._online.build();return{_offline:null==e?void 0:e._offline.build(t),_online:t}}(e._componentsProvider))}(e),e._firestoreClient}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a${constructor(e){this._byteString=e}static fromBase64String(e){try{return new a$(rd.fromBase64String(e))}catch(e){throw new tB(tF.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new a$(rd.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aK{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new tB(tF.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new t3(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aG{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aH{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new tB(tF.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new tB(tF.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return tY(this._lat,e._lat)||tY(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aQ{constructor(e){this._values=(e||[]).map(e=>e)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(e,t){if(e.length!==t.length)return!1;for(let r=0;r<e.length;++r)if(e[r]!==t[r])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aW=/^__.*__$/;class aX{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return null!==this.fieldMask?new nF(e,this.data,this.fieldMask,t,this.fieldTransforms):new nU(e,this.data,t,this.fieldTransforms)}}class aY{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new nF(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function aJ(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw tU()}}class aZ{constructor(e,t,r,n,i,s){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=n,void 0===i&&this.Fu(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new aZ(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var t;let r=null===(t=this.path)||void 0===t?void 0:t.child(e),n=this.xu({path:r,Nu:!1});return n.Bu(e),n}Lu(e){var t;let r=null===(t=this.path)||void 0===t?void 0:t.child(e),n=this.xu({path:r,Nu:!1});return n.Fu(),n}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return oe(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Bu(this.path.get(e))}Bu(e){if(0===e.length)throw this.qu("Document fields must not be empty");if(aJ(this.Mu)&&aW.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class a0{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||ss(e)}$u(e,t,r,n=!1){return new aZ({Mu:e,methodName:t,Ku:r,path:t3.emptyPath(),Nu:!1,Qu:n},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function a1(e){let t=e._freezeSettings(),r=ss(e._databaseId);return new a0(e._databaseId,!!t.ignoreUndefinedProperties,r)}class a2 extends aG{_toFieldTransform(e){if(2!==e.Mu)throw 1===e.Mu?e.qu(`${this._methodName}() can only appear at the top level of your update data`):e.qu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof a2}}function a6(e,t){if(a5(e=el(e)))return a8("Unsupported field value:",t,e),a3(e,t);if(e instanceof aG)return function(e,t){if(!aJ(t.Mu))throw t.qu(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.qu(`${e._methodName}() is not currently supported inside arrays`);let r=e._toFieldTransform(t);r&&t.fieldTransforms.push(r)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Nu&&4!==t.Mu)throw t.qu("Nested arrays are not supported");return function(e,t){let r=[],n=0;for(let i of e){let e=a6(i,t.ku(n));null==e&&(e={nullValue:"NULL_VALUE"}),r.push(e),n++}return{arrayValue:{values:r}}}(e,t)}return function(e,t){var r,n,i;if(null===(e=el(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return r=t.serializer,"number"==typeof(i=n=e)&&Number.isInteger(i)&&!rr(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER?nb(n):nw(r,n);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){let r=tZ.fromDate(e);return{timestampValue:ia(t.serializer,r)}}if(e instanceof tZ){let r=new tZ(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:ia(t.serializer,r)}}if(e instanceof aH)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof a$)return{bytesValue:io(t.serializer,e._byteString)};if(e instanceof aV){let r=t.databaseId,n=e.firestore._databaseId;if(!n.isEqual(r))throw t.qu(`Document reference is for database ${n.projectId}/${n.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:ih(e.firestore._databaseId||t.databaseId,e._key.path)}}if(e instanceof aQ)return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:e.toArray().map(e=>{if("number"!=typeof e)throw t.qu("VectorValues must only contain numeric values.");return nw(t.serializer,e)})}}}}};throw t.qu(`Unsupported field value: ${aR(e)}`)}(e,t)}function a3(e,t){let r={};return rs(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ri(e,(e,n)=>{let i=a6(n,t.Ou(e));null!=i&&(r[e]=i)}),{mapValue:{fields:r}}}function a5(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof tZ||e instanceof aH||e instanceof a$||e instanceof aV||e instanceof aG||e instanceof aQ)}function a8(e,t,r){if(!a5(r)||!("object"==typeof r&&null!==r&&(Object.getPrototypeOf(r)===Object.prototype||null===Object.getPrototypeOf(r)))){let n=aR(r);throw"an object"===n?t.qu(e+" a custom object"):t.qu(e+" "+n)}}function a4(e,t,r){if((t=el(t))instanceof aK)return t._internalPath;if("string"==typeof t)return a7(e,t);throw oe("Field path arguments must be of type string or ",e,!1,void 0,r)}const a9=RegExp("[~\\*/\\[\\]]");function a7(e,t,r){if(t.search(a9)>=0)throw oe(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,r);try{return new aK(...t.split("."))._internalPath}catch(n){throw oe(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,r)}}function oe(e,t,r,n,i){let s=n&&!n.isEmpty(),a=void 0!==i,o=`Function ${t}() called with invalid data`;r&&(o+=" (via `toFirestore()`)"),o+=". ";let l="";return(s||a)&&(l+=" (found",s&&(l+=` in field ${n}`),a&&(l+=` in document ${i}`),l+=")"),new tB(tF.INVALID_ARGUMENT,o+e+l)}function ot(e,t){return e.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e,t,r,n,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=n,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new aV(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){let e=new on(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let t=this._document.data.field(oi("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class on extends or{data(){return super.data()}}function oi(e,t){return"string"==typeof t?a7(e,t):t instanceof aK?t._internalPath:t._delegate._internalPath}class os{convertValue(e,t="none"){switch(rS(e)){case 0:return null;case 1:return e.booleanValue;case 2:return rm(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(ry(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw tU()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){let r={};return ri(e,(e,n)=>{r[e]=this.convertValue(n,t)}),r}convertVectorValue(e){var t,r,n;return new aQ(null===(n=null===(r=null===(t=e.fields)||void 0===t?void 0:t.value.arrayValue)||void 0===r?void 0:r.values)||void 0===n?void 0:n.map(e=>rm(e.doubleValue)))}convertGeoPoint(e){return new aH(rm(e.latitude),rm(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":let r=rw(e);return null==r?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(rb(e));default:return null}}convertTimestamp(e){let t=rg(e);return new tZ(t.seconds,t.nanos)}convertDocumentKey(e,t){let r=t2.fromString(e);iE(r)||tU();let n=new r_(r.get(1),r.get(3)),i=new t5(r.popFirst(5));return n.isEqual(t)||tM(`Document ${i} contains a document reference within a different database (${n.projectId}/${n.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class oo extends or{constructor(e,t,r,n,i,s){super(e,t,r,n,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let t=new ol(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){let r=this._document.data.field(oi("DocumentSnapshot.get",e));if(null!==r)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class ol extends oo{data(e={}){return super.data(e)}}class oh{constructor(e,t,r,n){this._firestore=e,this._userDataWriter=t,this._snapshot=n,this.metadata=new oa(n.hasPendingWrites,n.fromCache),this.query=r}get docs(){let e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new ol(this._firestore,this._userDataWriter,r.key,r,new oa(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){let t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new tB(tF.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(r=>{let n=new ol(e._firestore,e._userDataWriter,r.doc.key,r.doc,new oa(e._snapshot.mutatedKeys.has(r.doc.key),e._snapshot.fromCache),e.query.converter);return r.doc,{type:"added",doc:n,oldIndex:-1,newIndex:t++}})}{let r=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{let n=new ol(e._firestore,e._userDataWriter,t.doc.key,t.doc,new oa(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter),i=-1,s=-1;return 0!==t.type&&(i=r.indexOf(t.doc.key),r=r.delete(t.doc.key)),1!==t.type&&(s=(r=r.add(t.doc)).indexOf(t.doc.key)),{type:function(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return tU()}}(t.type),doc:n,oldIndex:i,newIndex:s}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}class ou extends os{constructor(e){super(),this.firestore=e}convertBytes(e){return new a$(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new aV(this.firestore,null,t)}}function oc(e,t){return function(e,t){let r=new tj;return e.asyncQueue.enqueueAndForget(async()=>at(await aC(e).then(e=>e.syncEngine),t,r)),r.promise}(az(e),t)}new WeakMap,function(e=!0){tN="11.2.0",eq(new eh("firestore",(t,{instanceIdentifier:r,options:n})=>{let i=t.getProvider("app").getImmediate(),s=new aq(new tK(t.getProvider("auth-internal")),new tW(t.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new tB(tF.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new r_(e.options.projectId,t)}(i,r),i);return n=Object.assign({useFetchStreams:e},n),s._setSettings(n),s},"PUBLIC").setMultipleInstances(!0)),eG(tD,"4.7.6",void 0),eG(tD,"4.7.6","esm2017")}();var of={};of=new URL("service-worker.cc0991b9.js",import.meta.url).toString();const od=new URL(of);"serviceWorker"in navigator&&navigator.serviceWorker.register(od.href,{scope:"/to-do-list-WDT/"}).then(e=>console.log("Service Worker Registered for scope:",od.href,"with","file:///app.js")).catch(e=>console.error("Service Worker Error:",e));const op=function(e,t){let r=(function(e,t){let r=e.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),e.container.getProvider(t)})("object"==typeof e?e:function(e=eP){let t=eU.get(e);if(!t&&e===eP&&et())return eK();if(!t)throw ez.create("no-app",{appName:e});return t}(),"firestore").getImmediate({identifier:"string"==typeof e?e:"(default)"});if(!r._initialized){let e=ee("firestore");e&&function(e,t,r,n={}){var i;let s=(e=aL(e,aM))._getSettings(),a=`${t}:${r}`;if("firestore.googleapis.com"!==s.host&&s.host!==a&&tP("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),n.mockUserToken){let t,r;if("string"==typeof n.mockUserToken)t=n.mockUserToken,r=tk.MOCK_USER;else{t=function(e,t){if(e.uid)throw Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let r=t||"demo-project",n=e.iat||0,i=e.sub||e.user_id;if(!i)throw Error("mockUserToken must contain 'sub' or 'user_id' field!");let s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:n,exp:n+3600,auth_time:n,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[H(JSON.stringify({alg:"none",type:"JWT"})),H(JSON.stringify(s)),""].join(".")}(n.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);let s=n.mockUserToken.sub||n.mockUserToken.user_id;if(!s)throw new tB(tF.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");r=new tk(s)}e._authCredentials=new t$(new tq(t,r))}}(r,...e)}return r}(eK({apiKey:"AIzaSyB1N9TPlje8RLoAJ3tw1KYhLFPNzPjmSek",authDomain:"to-do-list-b38bb.firebaseapp.com",projectId:"to-do-list-b38bb",storageBucket:"to-do-list-b38bb.firebasestorage.app",messagingSenderId:"888686096748",appId:"1:888686096748:web:310398537a2426e9ce8349",measurementId:"G-K3JDFXK9C8"})),og=document.getElementById("taskInput"),om=document.getElementById("addTaskBtn"),oy=document.getElementById("taskList");async function ov(e){await function(e,t){var r;let n=aL(e.firestore,aq),i=aB(e),s=(r=e.converter)?r.toFirestore(t):t;return oc(n,[(function(e,t,r,n,i,s={}){let a,o;let l=e.$u(2*(!!s.merge||!!s.mergeFields),t,r,i);a8("Data must be an object, but it was:",l,n);let h=a3(n,l);if(s.merge)a=new rc(l.fieldMask),o=l.fieldTransforms;else if(s.mergeFields){let e=[];for(let n of s.mergeFields){let i=a4(t,n,r);if(!l.contains(i))throw new tB(tF.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);ot(e,i)||e.push(i)}a=new rc(e),o=l.fieldTransforms.filter(e=>a.covers(e.field))}else a=null,o=l.fieldTransforms;return new aX(new rF(h),a,o)})(a1(e.firestore),"addDoc",i._key,s,null!==e.converter,{}).toMutation(i._key,nR.exists(!1))]).then(()=>i)}(aF(op,"todos"),{text:e,completed:!1})}async function ow(){var e=await ob();oy.innerHTML="",e.forEach(e=>{if(!e.data().completed){let t=document.createElement("li");t.id=e.id,t.textContent=e.data().text,oy.appendChild(t)}})}async function ob(){var e=await function(e){e=aL(e,aP);let t=aL(e.firestore,aq),r=az(t),n=new ou(t);return(/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new tB(tF.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(e._query),(function(e,t,r={}){let n=new tj;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,r,n,i){let s=new ab({next:r=>{s.eu(),t.enqueueAndForget(()=>sQ(e,a)),r.fromCache&&"server"===n.source?i.reject(new tB(tF.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(r)},error:e=>i.reject(e)}),a=new sJ(r,s,{includeMetadataChanges:!0,ua:!0});return sH(e,a)})(await aI(e),e.asyncQueue,t,r,n)),n.promise})(r,e._query).then(r=>new oh(t,n,e,r)))}(aF(op,"todos"));let t=[];return e.forEach(e=>{t.push(e)}),t}window.addEventListener("load",()=>{ow()}),om.addEventListener("click",async()=>{if(og.value.trim()){let e=document.getElementById("taskInput"),t=function(e){let t=document.createElement("div");return t.textContent=e,t.innerHTML}(e.value.trim());t&&(await ov(t),ow(),e.value=""),ow()}}),oy.addEventListener("click",async e=>{"LI"===e.target.tagName&&await function(e,t,r,...n){e=aL(e,aV);let i=aL(e.firestore,aq),s=a1(i);return oc(i,[("string"==typeof(t=el(t))||t instanceof aK?function(e,t,r,n,i,s){let a=e.$u(1,t,r),o=[a4(t,n,r)],l=[i];if(s.length%2!=0)throw new tB(tF.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let e=0;e<s.length;e+=2)o.push(a4(t,s[e])),l.push(s[e+1]);let h=[],u=rF.empty();for(let e=o.length-1;e>=0;--e)if(!ot(h,o[e])){let t=o[e],r=l[e];r=el(r);let n=a.Lu(t);if(r instanceof a2)h.push(t);else{let e=a6(r,n);null!=e&&(h.push(t),u.set(t,e))}}return new aY(u,new rc(h),a.fieldTransforms)}(s,"updateDoc",e._key,t,void 0,n):function(e,t,r,n){let i=e.$u(1,t,r);a8("Data must be an object, but it was:",i,n);let s=[],a=rF.empty();return ri(n,(e,n)=>{let o=a7(t,e,r);n=el(n);let l=i.Lu(o);if(n instanceof a2)s.push(o);else{let e=a6(n,l);null!=e&&(s.push(o),a.set(o,e))}}),new aY(a,new rc(s),i.fieldTransforms)}(s,"updateDoc",e._key,t)).toMutation(e._key,nR.exists(!0))])}(aB(op,"todos",e.target.id),{completed:!0}),ow()}),window.addEventListener("error",function(e){console.error("Error occurred: ",e.message)});
//# sourceMappingURL=index.7cb00bdc.js.map
