(()=>{"use strict";var e={917:(e,n,t)=>{t.d(n,{Z:()=>l});var o=t(15),r=t.n(o),a=t(645),i=t.n(a)()(r());i.push([e.id,"/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}","",{version:3,sources:["webpack://./src/reset.css"],names:[],mappings:"AAAA;;;CAGC;;AAED;;;;;;;;;;;;;CAaC,SAAS;CACT,UAAU;CACV,SAAS;CACT,eAAe;CACf,aAAa;CACb,wBAAwB;AACzB;AACA,gDAAgD;AAChD;;CAEC,cAAc;AACf;AACA;CACC,cAAc;AACf;AACA;CACC,gBAAgB;AACjB;AACA;CACC,YAAY;AACb;AACA;;CAEC,WAAW;CACX,aAAa;AACd;AACA;CACC,yBAAyB;CACzB,iBAAiB;AAClB",sourcesContent:["/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}"],sourceRoot:""}]);const l=i},426:(e,n,t)=>{t.d(n,{Z:()=>l});var o=t(15),r=t.n(o),a=t(645),i=t.n(a)()(r());i.push([e.id,"@font-face {\n  font-family: 'Belleza';\n  src: url('https://fonts.gstatic.com/s/belleza/v9/0nkoC9_pNeMfhX4BhcH4ag.woff2')\n}\n\nbody {\n  font-family: 'Belleza';\n  font-size: 18px;\n}\n\nbutton {\n  cursor:pointer;\n  padding:0.5em;\n  background-color:cadetblue;\n  border:none;\n  margin: 2px 5px;\n  border-radius:5px;\n  color:white;\n  font-family:'Belleza';\n  font-size:1em;\n  display:block;\n}\n\nbutton:hover {\n  opacity:0.8;\n  transition:all 0.2s ease;\n}\n\n/* Sidebar */\n\n#sidebar {\n  min-height:100vh;\n  background-color:rgba(0,0,0,0.75);\n  width: 250px;\n  display:flex;\n  flex-direction:column;\n}\n\n#logo {\n  width:60px;\n}\n\n#logo-title {\n  font-size:3em;\n  display:flex;\n  align-items:center;\n  padding:1rem;\n  color:white;\n}\n\n#new-project {\n  margin-bottom:2em;\n}\n\n/* Main/Notes */\n\nmain {\n  flex:1;\n}\n\n#content {\n  display:flex;\n}\n\n#main-header {\n  text-align:center;\n  font-size:2.5em;\n  background-color:rgba(95, 158, 160, 0.8);\n  padding: 0.4em 0;\n}\n\n#notes {\n  width:80%;\n  margin:1em auto;\n}\n\n.header {\n  font-size:1.2em;\n  border-bottom:1px solid rgb(95, 158, 160);\n  padding-bottom:0.4em;\n}\n\n.note {\n  display:grid;\n  grid-template-columns: repeat(4, 1fr);\n  text-align:center;\n  margin-bottom:1em;\n  align-items:center;\n}\n\n.task-link,\n.status-button {\n  cursor:pointer;\n  border-radius:5px;\n  padding:0.5em;\n}\n\n.task-link:hover,\n.status-button:hover {\n  background-color:rgba(95, 158, 160, 0.3);\n  transition:all 0.2s ease;\n}\n\n/* Task Form */\n\n#form-container,\n#edit-container,\n#project-container {\n  position:absolute;\n  top:0;\n  left:0;\n  display:none;\n  justify-content:center;\n  align-items:center;\n  height: 100vh;\n  width:100vw;\n  background-color:rgba(0,0,0,0.5);\n}\n\n#task-form,\n#edit-form,\n#project-form {\n  display:flex;\n  flex-direction:column;\n  max-width:400px;\n  position:absolute;\n  top:30%;\n  padding:1em;\n  background-color:white;\n  border: 1px solid lightgrey;\n  border-radius:5px;\n}\n\n#task-form > *,\n#edit-form > * {\n  padding:1em;\n  resize:none;\n  border-radius:5px;\n  border:1px solid grey;\n  margin-bottom:4px;\n}\n\n#create-task,\n#update-task,\n#create-project {\n  margin: 2px 0;\n}\n\n#delete-task {\n  padding:0.3em;\n  background-color:rgb(255, 75, 75);\n  width:120px;\n  margin: 2px auto;\n}\n\n#description {\n  height: 100px;\n}\n\n#close-form,\n#close-edit,\n#close-project {\n  font-size:2em;\n  align-self:flex-end;\n  padding:0.2em;\n  border:none;\n  height:40px;\n  width:40px;\n  text-align:center;\n}\n\n#close-form:hover,\n#close-edit:hover,\n#close-form:focus,\n#close-edit:focus,\n#close-project:hover {\n  cursor:pointer;\n  color:black;\n  background-color:lightgrey;\n  transition:all 0.2s ease;\n}","",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAAA;EACE,sBAAsB;EACtB;AACF;;AAEA;EACE,sBAAsB;EACtB,eAAe;AACjB;;AAEA;EACE,cAAc;EACd,aAAa;EACb,0BAA0B;EAC1B,WAAW;EACX,eAAe;EACf,iBAAiB;EACjB,WAAW;EACX,qBAAqB;EACrB,aAAa;EACb,aAAa;AACf;;AAEA;EACE,WAAW;EACX,wBAAwB;AAC1B;;AAEA,YAAY;;AAEZ;EACE,gBAAgB;EAChB,iCAAiC;EACjC,YAAY;EACZ,YAAY;EACZ,qBAAqB;AACvB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,kBAAkB;EAClB,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,iBAAiB;AACnB;;AAEA,eAAe;;AAEf;EACE,MAAM;AACR;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,iBAAiB;EACjB,eAAe;EACf,wCAAwC;EACxC,gBAAgB;AAClB;;AAEA;EACE,SAAS;EACT,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,yCAAyC;EACzC,oBAAoB;AACtB;;AAEA;EACE,YAAY;EACZ,qCAAqC;EACrC,iBAAiB;EACjB,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;;EAEE,cAAc;EACd,iBAAiB;EACjB,aAAa;AACf;;AAEA;;EAEE,wCAAwC;EACxC,wBAAwB;AAC1B;;AAEA,cAAc;;AAEd;;;EAGE,iBAAiB;EACjB,KAAK;EACL,MAAM;EACN,YAAY;EACZ,sBAAsB;EACtB,kBAAkB;EAClB,aAAa;EACb,WAAW;EACX,gCAAgC;AAClC;;AAEA;;;EAGE,YAAY;EACZ,qBAAqB;EACrB,eAAe;EACf,iBAAiB;EACjB,OAAO;EACP,WAAW;EACX,sBAAsB;EACtB,2BAA2B;EAC3B,iBAAiB;AACnB;;AAEA;;EAEE,WAAW;EACX,WAAW;EACX,iBAAiB;EACjB,qBAAqB;EACrB,iBAAiB;AACnB;;AAEA;;;EAGE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,iCAAiC;EACjC,WAAW;EACX,gBAAgB;AAClB;;AAEA;EACE,aAAa;AACf;;AAEA;;;EAGE,aAAa;EACb,mBAAmB;EACnB,aAAa;EACb,WAAW;EACX,WAAW;EACX,UAAU;EACV,iBAAiB;AACnB;;AAEA;;;;;EAKE,cAAc;EACd,WAAW;EACX,0BAA0B;EAC1B,wBAAwB;AAC1B",sourcesContent:["@font-face {\n  font-family: 'Belleza';\n  src: url('https://fonts.gstatic.com/s/belleza/v9/0nkoC9_pNeMfhX4BhcH4ag.woff2')\n}\n\nbody {\n  font-family: 'Belleza';\n  font-size: 18px;\n}\n\nbutton {\n  cursor:pointer;\n  padding:0.5em;\n  background-color:cadetblue;\n  border:none;\n  margin: 2px 5px;\n  border-radius:5px;\n  color:white;\n  font-family:'Belleza';\n  font-size:1em;\n  display:block;\n}\n\nbutton:hover {\n  opacity:0.8;\n  transition:all 0.2s ease;\n}\n\n/* Sidebar */\n\n#sidebar {\n  min-height:100vh;\n  background-color:rgba(0,0,0,0.75);\n  width: 250px;\n  display:flex;\n  flex-direction:column;\n}\n\n#logo {\n  width:60px;\n}\n\n#logo-title {\n  font-size:3em;\n  display:flex;\n  align-items:center;\n  padding:1rem;\n  color:white;\n}\n\n#new-project {\n  margin-bottom:2em;\n}\n\n/* Main/Notes */\n\nmain {\n  flex:1;\n}\n\n#content {\n  display:flex;\n}\n\n#main-header {\n  text-align:center;\n  font-size:2.5em;\n  background-color:rgba(95, 158, 160, 0.8);\n  padding: 0.4em 0;\n}\n\n#notes {\n  width:80%;\n  margin:1em auto;\n}\n\n.header {\n  font-size:1.2em;\n  border-bottom:1px solid rgb(95, 158, 160);\n  padding-bottom:0.4em;\n}\n\n.note {\n  display:grid;\n  grid-template-columns: repeat(4, 1fr);\n  text-align:center;\n  margin-bottom:1em;\n  align-items:center;\n}\n\n.task-link,\n.status-button {\n  cursor:pointer;\n  border-radius:5px;\n  padding:0.5em;\n}\n\n.task-link:hover,\n.status-button:hover {\n  background-color:rgba(95, 158, 160, 0.3);\n  transition:all 0.2s ease;\n}\n\n/* Task Form */\n\n#form-container,\n#edit-container,\n#project-container {\n  position:absolute;\n  top:0;\n  left:0;\n  display:none;\n  justify-content:center;\n  align-items:center;\n  height: 100vh;\n  width:100vw;\n  background-color:rgba(0,0,0,0.5);\n}\n\n#task-form,\n#edit-form,\n#project-form {\n  display:flex;\n  flex-direction:column;\n  max-width:400px;\n  position:absolute;\n  top:30%;\n  padding:1em;\n  background-color:white;\n  border: 1px solid lightgrey;\n  border-radius:5px;\n}\n\n#task-form > *,\n#edit-form > * {\n  padding:1em;\n  resize:none;\n  border-radius:5px;\n  border:1px solid grey;\n  margin-bottom:4px;\n}\n\n#create-task,\n#update-task,\n#create-project {\n  margin: 2px 0;\n}\n\n#delete-task {\n  padding:0.3em;\n  background-color:rgb(255, 75, 75);\n  width:120px;\n  margin: 2px auto;\n}\n\n#description {\n  height: 100px;\n}\n\n#close-form,\n#close-edit,\n#close-project {\n  font-size:2em;\n  align-self:flex-end;\n  padding:0.2em;\n  border:none;\n  height:40px;\n  width:40px;\n  text-align:center;\n}\n\n#close-form:hover,\n#close-edit:hover,\n#close-form:focus,\n#close-edit:focus,\n#close-project:hover {\n  cursor:pointer;\n  color:black;\n  background-color:lightgrey;\n  transition:all 0.2s ease;\n}"],sourceRoot:""}]);const l=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(r[i]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);o&&r[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),n.push(s))}},n}},15:e=>{function n(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,o=new Array(n);t<n;t++)o[t]=e[t];return o}e.exports=function(e){var t,o,r=(o=4,function(e){if(Array.isArray(e))return e}(t=e)||function(e,n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var t=[],o=!0,r=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(o=(i=l.next()).done)&&(t.push(i.value),!n||t.length!==n);o=!0);}catch(e){r=!0,a=e}finally{try{o||null==l.return||l.return()}finally{if(r)throw a}}return t}}(t,o)||function(e,t){if(e){if("string"==typeof e)return n(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?n(e,t):void 0}}(t,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=r[1],i=r[3];if("function"==typeof btoa){var l=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l),A="/*# ".concat(s," */"),c=i.sources.map((function(e){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(e," */")}));return[a].concat(c).concat([A]).join("\n")}return[a].join("\n")}},379:(e,n,t)=>{var o,r=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),a=[];function i(e){for(var n=-1,t=0;t<a.length;t++)if(a[t].identifier===e){n=t;break}return n}function l(e,n){for(var t={},o=[],r=0;r<e.length;r++){var l=e[r],s=n.base?l[0]+n.base:l[0],A=t[s]||0,c="".concat(s," ").concat(A);t[s]=A+1;var d=i(c),u={css:l[1],media:l[2],sourceMap:l[3]};-1!==d?(a[d].references++,a[d].updater(u)):a.push({identifier:c,updater:g(u,n),references:1}),o.push(c)}return o}function s(e){var n=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var a=t.nc;a&&(o.nonce=a)}if(Object.keys(o).forEach((function(e){n.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(n);else{var i=r(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}return n}var A,c=(A=[],function(e,n){return A[e]=n,A.filter(Boolean).join("\n")});function d(e,n,t,o){var r=t?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=c(n,r);else{var a=document.createTextNode(r),i=e.childNodes;i[n]&&e.removeChild(i[n]),i.length?e.insertBefore(a,i[n]):e.appendChild(a)}}function u(e,n,t){var o=t.css,r=t.media,a=t.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var m=null,p=0;function g(e,n){var t,o,r;if(n.singleton){var a=p++;t=m||(m=s(n)),o=d.bind(null,t,a,!1),r=d.bind(null,t,a,!0)}else t=s(n),o=u.bind(null,t,n),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return o(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;o(e=n)}else r()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var t=l(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<t.length;o++){var r=i(t[o]);a[r].references--}for(var s=l(e,n),A=0;A<t.length;A++){var c=i(t[A]);0===a[c].references&&(a[c].updater(),a.splice(c,1))}t=s}}}}},n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={id:o,exports:{}};return e[o](r,r.exports,t),r.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{const e=(e,n,t,o,r=!1,a)=>({getTitle:()=>e,getDescription:()=>n,getDueDate:()=>t,getPriority:()=>o,getCompleted:()=>r,setId:e=>{a=e},getId:()=>a,update:(r,a,i,l)=>{e=r,n=a,t=i,o=l},toggleCompleted:()=>{r=!r}}),n=(e,n)=>{let t={};return{getName:()=>e,changeName:n=>{e=n},add:(e,n)=>{t[n]=e},remove:e=>{delete t[e]},getTasks:()=>t,getId:()=>n,setTasks:e=>{t=e}}};function o(e){let n=document.getElementById("notes");for(;n.children.length>1;){let e=n.lastChild;e.classList.contains("header")||n.removeChild(e)}Object.values(e).forEach((e=>{let t=document.createElement("li");t.classList.add("note");let o=document.createElement("span");o.innerHTML=e.getTitle(),o.classList.add("task-link"),o.id=e.getId(),t.appendChild(o);let r=document.createElement("span");r.innerHTML=e.getDueDate(),t.appendChild(r);let a=document.createElement("span");a.innerHTML=e.getPriority(),t.appendChild(a);let i=document.createElement("span");i.innerHTML=e.getCompleted()?"Complete":"Incomplete",i.classList.add("status-button"),i.id=e.getId(),t.appendChild(i),i.style.backgroundColor=e.getCompleted()?"lightgreen":"",n.appendChild(t)}))}function r(e){localStorage.setItem("projects",JSON.stringify(Object.values(e).map((e=>{return{name:e.getName(),id:e.getId(),tasks:(n=e.getTasks(),JSON.stringify(Object.values(n).map((e=>({title:e.getTitle(),description:e.getDescription(),dueDate:e.getDueDate(),priority:e.getPriority(),id:e.getId(),completed:e.getCompleted()})))))};var n}))))}var a=t(379),i=t.n(a),l=t(917);i()(l.Z,{insert:"head",singleton:!1}),l.Z.locals;var s=t(426);i()(s.Z,{insert:"head",singleton:!1}),s.Z.locals;let A,c=JSON.parse(localStorage.getItem("taskID"))||0;A=null===localStorage.getItem("projects")?{0:n("default",0)}:function(t){let o={};return JSON.parse(t).forEach((t=>{let r=n(t.name,t.id);r.setTasks(function(n){if(null===n)return!1;let t={};return JSON.parse(n).map((n=>e(n.title,n.description,n.dueDate,n.priority,n.completed,n.id))).forEach((e=>{t[e.getId()]=e})),t}(t.tasks)),o[r.getId()]=r})),o}(localStorage.getItem("projects"));let d=JSON.parse(localStorage.getItem("projectID"))||1,u=A[0];console.log(A),console.log(u.getTasks()),o(u.getTasks()),function(e){let n=document.getElementById("sidebar");for(;n.children.length>4;)n.removeChild(n.lastChild);Object.values(e).forEach((e=>{if(0!==e.getId()){let t=document.createElement("button");t.innerHTML=e.getName(),t.id=e.getId(),t.classList.add("project-button"),n.appendChild(t)}}))}(A);let m=document.getElementById("new-task"),p=document.getElementById("form-container"),g=document.getElementById("edit-container");m.onclick=()=>{p.style.display="flex",document.getElementById("task-form").reset()},document.getElementById("close-form").onclick=()=>{p.style.display="none"},document.getElementById("close-edit").onclick=()=>{g.style.display="none"},document.getElementById("create-task").onclick=n=>{n.preventDefault();let t=document.getElementById("task-form"),a=e(t.title.value,t.description.value,t.dueDate.value,t.priority.value);!function(e,n,t){e[t]=n,n.setId(t)}(u.getTasks(),a,c),c++,r(A),function(e,n){localStorage.setItem("taskID",JSON.stringify(e)),localStorage.setItem("projectID",JSON.stringify(n))}(c,d),t.reset(),o(u.getTasks())},document.getElementById("notes").onclick=e=>{if("task-link"==e.target.getAttribute("class")){let n=e.target.id,t=u.getTasks()[parseInt(n)],o=document.getElementById("edit-form");o.editId.value=n,o.title.value=t.getTitle(),o.description.value=t.getDescription(),o.dueDate.value=t.getDueDate();let r=t.getPriority().toLowerCase(),a=o.priority;for(let e,n=0;e=a.options[n];n++)if(e.value==r){a.selectedIndex=n;break}document.getElementById("edit-container").style.display="flex"}else"status-button"==e.target.getAttribute("class")&&(u.getTasks()[e.target.id].toggleCompleted(),o(u.getTasks()))},document.getElementById("update-task").onclick=e=>{e.preventDefault();let n=document.getElementById("edit-form");u.getTasks()[n.editId.value].update(n.title.value,n.description.value,n.dueDate.value,n.priority.value),r(A),o(u.getTasks())},document.getElementById("delete-task").onclick=e=>{e.preventDefault();let n=document.getElementById("edit-form").editId.value;delete u.getTasks()[n],r(A),g.style.display="none",o(u.getTasks())},document.getElementById("default-tasks").onclick=e=>{e.preventDefault(),document.getElementById("main-header").innerHTML="Tasks",u=A[0],o(u.getTasks())};let f=document.getElementById("new-project"),C=document.getElementById("project-container");f.onclick=()=>{C.style.display="flex"},document.getElementById("close-project").onclick=()=>{C.style.display="none"},document.getElementById("create-project").onclick=e=>{e.preventDefault();let t=document.getElementById("project-form"),o=n(t.projectName.value,d);A[d]=o;let a=document.getElementById("sidebar"),i=document.createElement("button");i.innerHTML=o.getName(),i.id=d,i.classList.add("project-button"),d++,r(A),a.appendChild(i)},document.getElementById("sidebar").onclick=e=>{if("project-button"==e.target.getAttribute("class")){let n=A[e.target.id];document.getElementById("main-header").innerHTML=n.getName(),u=n,o(u.getTasks())}}})()})();
//# sourceMappingURL=main.js.map