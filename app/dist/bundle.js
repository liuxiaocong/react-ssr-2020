!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=11)}([function(e,n){e.exports=require("react")},function(e,n){e.exports=require("react-router-dom")},function(e,n,t){(n=t(5)(!1)).push([e.i,".App-logo {\n  height: 40vmin;\n  pointer-events: none;\n}\n\n@media (prefers-reduced-motion: no-preference) {\n  .App-logo {\n    animation: App-logo-spin infinite 20s linear;\n  }\n}\n\n.list{\n  display: flex;\n  flex-direction: column;\n  width: 90%;\n  max-width: 800px;\n  border: 1px solid #000;\n  margin: 0 auto;\n}\n\n.wrap{\n  width: 90%;\n  max-width: 800px;\n  margin: 0 auto;\n  font-size: 30px;\n  margin-top: 30px;\n}\n\n.container{\n  text-align: center;\n}\n\n@keyframes App-logo-spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n",""]),e.exports=n},function(e,n){e.exports=require("express")},function(e,n){e.exports=require("react-dom/server")},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",r=e[3];if(!r)return t;if(n&&"function"==typeof btoa){var o=(a=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(u," */")),i=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[t].concat(i).concat([o]).join("\n")}var a,c,u;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<e.length;c++){var u=[].concat(e[c]);r&&o[u[0]]||(t&&(u[2]?u[2]="".concat(t," and ").concat(u[2]):u[2]=t),n.push(u))}},n}},function(e,n){e.exports=require("compression")},function(e,n){e.exports=require("path")},function(e,n){e.exports=require("fs")},function(e,n,t){(n=t(5)(!1)).push([e.i,".li {\n  color: red;\n  font-size: 16px;\n}\n\n.li a {\n  color: red;\n}",""]),e.exports=n},function(e,n,t){"use strict";var r=t(0),o=t.n(r),i=t(1);var a=()=>o.a.createElement("div",{__self:void 0,__source:{fileName:"/Users/xiaoconglau/chatchat/react-ssr-2020/app/src/container/home/index.js",lineNumber:5,columnNumber:5}},"Home");var c=()=>o.a.createElement("div",{__self:void 0,__source:{fileName:"/Users/xiaoconglau/chatchat/react-ssr-2020/app/src/container/about/index.js",lineNumber:5,columnNumber:5}},"About"),u=t(2),l=t.n(u),s=t(9),f=t.n(s),m="/Users/xiaoconglau/chatchat/react-ssr-2020/app/src/App.js";n.a=function(){return o.a.createElement("div",{className:l.a.container,__self:this,__source:{fileName:m,lineNumber:12,columnNumber:5}},o.a.createElement("img",{src:"http://localhost:4000/static/media/Users/xiaoconglau/chatchat/react-ssr-2020/app/src/logo.svg",className:l.a["App-logo"],__self:this,__source:{fileName:m,lineNumber:13,columnNumber:7}}),o.a.createElement("ul",{className:l.a.list,__self:this,__source:{fileName:m,lineNumber:14,columnNumber:7}},o.a.createElement("li",{className:f.a.li,__self:this,__source:{fileName:m,lineNumber:15,columnNumber:9}},o.a.createElement(i.NavLink,{to:"/",__self:this,__source:{fileName:m,lineNumber:16,columnNumber:11}},"Home")),o.a.createElement("li",{__self:this,__source:{fileName:m,lineNumber:18,columnNumber:9}},o.a.createElement(i.NavLink,{to:"/About",__self:this,__source:{fileName:m,lineNumber:19,columnNumber:11}},"About"))),o.a.createElement("div",{className:l.a.wrap,__self:this,__source:{fileName:m,lineNumber:22,columnNumber:7}},o.a.createElement(i.Switch,{__self:this,__source:{fileName:m,lineNumber:23,columnNumber:9}},o.a.createElement(i.Route,{path:"/about",component:c,__self:this,__source:{fileName:m,lineNumber:24,columnNumber:11}}),o.a.createElement(i.Route,{exact:!0,path:"/",render:e=>o.a.createElement(a,{__self:this,__source:{fileName:m,lineNumber:28,columnNumber:31}}),__self:this,__source:{fileName:m,lineNumber:25,columnNumber:11}}))))}},function(e,n,t){e.exports=t(12)},function(e,n,t){"use strict";t.r(n),function(e){var n=t(3),r=t.n(n),o=t(6),i=t.n(o),a=t(7),c=t.n(a);t(4);t(13)(),t(14),(void 0)[".less"]=()=>{},(void 0)[".css"]=()=>{},(void 0)[".svg"]=()=>{};const u=t(15),l=(r.a.Router(),r()());l.use(i()()),u(l),l.use(r.a.static(c.a.resolve(e,"../build/")));const s=process.env.PORT||4e3;l.listen(s,(function(){console.info("Running on "+s)}))}.call(this,"/")},function(e,n){e.exports=require("@babel/register")},function(e,n){e.exports=require("@babel/polyfill")},function(e,n,t){"use strict";t.r(n),function(e){var n=t(0),r=t.n(n),o=t(8),i=t.n(o),a=(t(4),t(1)),c=t(10),u="/Users/xiaoconglau/chatchat/react-ssr-2020/app/server/renderReact.js";const l=t(17),s=t(4);let f;console.log(l),e.exports=function(e){["/","home","about"].forEach(n=>{e.get(n,(e,n)=>{const t=s.renderToString(r.a.createElement(a.StaticRouter,{location:e.url,context:{},__self:this,__source:{fileName:u,lineNumber:17,columnNumber:9}},r.a.createElement(c.a,{__self:this,__source:{fileName:u,lineNumber:18,columnNumber:11}})));f||(f=i.a.readFileSync("./build/index.html","utf8"));let o=f.replace("#body",t);n.send(o)})})}}.call(this,t(16)(e))},function(e,n){e.exports=function(e){if(!e.webpackPolyfill){var n=Object.create(e);n.children||(n.children=[]),Object.defineProperty(n,"loaded",{enumerable:!0,get:function(){return n.l}}),Object.defineProperty(n,"id",{enumerable:!0,get:function(){return n.i}}),Object.defineProperty(n,"exports",{enumerable:!0}),n.webpackPolyfill=1}return n}},function(e,n){!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p=""}([])}]);