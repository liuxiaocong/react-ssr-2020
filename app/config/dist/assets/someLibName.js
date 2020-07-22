module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".App_App-logo__3g8ix {\n  height: 40vmin;\n  pointer-events: none;\n}\n\n@media (prefers-reduced-motion: no-preference) {\n  .App_App-logo__3g8ix {\n    animation: App_App-logo-spin__46T3f infinite 20s linear;\n  }\n}\n\n.App_list__1BDfH{\n  display: flex;\n  flex-direction: column;\n  width: 90%;\n  max-width: 800px;\n  border: 1px solid #000;\n  margin: 0 auto;\n}\n\n.App_wrap__2qKUs{\n  width: 90%;\n  max-width: 800px;\n  margin: 0 auto;\n  font-size: 30px;\n  margin-top: 30px;\n}\n\n.App_container__o_wCX{\n  text-align: center;\n}\n\n@keyframes App_App-logo-spin__46T3f {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n", ""]);
// Exports
exports.locals = {
	"App-logo": "App_App-logo__3g8ix",
	"App-logo-spin": "App_App-logo-spin__46T3f",
	"list": "App_list__1BDfH",
	"wrap": "App_wrap__2qKUs",
	"container": "App_container__o_wCX"
};
module.exports = exports;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".style_li__15eXz {\n  color: red;\n  font-size: 16px;\n}\n\n.style_li__15eXz a {\n  color: red;\n}", ""]);
// Exports
exports.locals = {
	"li": "style_li__15eXz"
};
module.exports = exports;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ render; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-dom/server"
var server_ = __webpack_require__(5);

// EXTERNAL MODULE: external "react-router-dom"
var external_react_router_dom_ = __webpack_require__(1);

// CONCATENATED MODULE: ./src/container/home/index.js


const Home = () => {
  return /*#__PURE__*/external_react_default.a.createElement("div", null, "Home");
};

/* harmony default export */ var home = (Home);
// CONCATENATED MODULE: ./src/container/about/index.js


const About = () => {
  return /*#__PURE__*/external_react_default.a.createElement("div", null, "About");
};

/* harmony default export */ var about = (About);
// EXTERNAL MODULE: ./src/App.css
var App = __webpack_require__(2);
var App_default = /*#__PURE__*/__webpack_require__.n(App);

// EXTERNAL MODULE: ./src/style.css
var style = __webpack_require__(3);
var style_default = /*#__PURE__*/__webpack_require__.n(style);

// CONCATENATED MODULE: ./src/App.js




 //import pg from './ic_add_alert_black_18dp.png';


const logo = "http://localhost:4000/static/media/Users/xiaoconglau/chatchat/react-ssr-2020/app/src/logo.svg";
console.log(style_default.a);
console.log(style_default.a.locals);

function App_App() {
  return /*#__PURE__*/external_react_default.a.createElement("div", {
    className: App_default.a['container']
  }, /*#__PURE__*/external_react_default.a.createElement("img", {
    src: logo,
    className: App_default.a['App-logo']
  }), /*#__PURE__*/external_react_default.a.createElement("ul", {
    className: App_default.a['list']
  }, /*#__PURE__*/external_react_default.a.createElement("li", {
    className: style_default.a.li
  }, /*#__PURE__*/external_react_default.a.createElement(external_react_router_dom_["NavLink"], {
    to: "/"
  }, "Home")), /*#__PURE__*/external_react_default.a.createElement("li", null, /*#__PURE__*/external_react_default.a.createElement(external_react_router_dom_["NavLink"], {
    to: "/About"
  }, "About"))), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: App_default.a['wrap']
  }, /*#__PURE__*/external_react_default.a.createElement(external_react_router_dom_["Switch"], null, /*#__PURE__*/external_react_default.a.createElement(external_react_router_dom_["Route"], {
    path: "/about",
    component: about
  }), /*#__PURE__*/external_react_default.a.createElement(external_react_router_dom_["Route"], {
    exact: true,
    path: "/",
    render: props => /*#__PURE__*/external_react_default.a.createElement(home, null)
  }))));
}

/* harmony default export */ var src_App = (App_App);
// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(6);
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_);

// CONCATENATED MODULE: ./src/ssr.js





let buildHtml;
function render(req, res) {
  const context = {};
  const appString = Object(server_["renderToString"])( /*#__PURE__*/external_react_default.a.createElement(external_react_router_dom_["StaticRouter"], {
    location: req.url,
    context: context
  }, /*#__PURE__*/external_react_default.a.createElement(src_App, null)));

  if (!buildHtml) {
    buildHtml = external_fs_default.a.readFileSync('./build/index.html', 'utf8');
  }

  let result = buildHtml.replace('#body', appString);
  console.log(appString);
  res.send(result);
}
;

/***/ })
/******/ ]);