/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html,\\r\\nbody {\\r\\n  box-sizing: border-box;\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  font-family: 'Quicksand', 'Courier New', Courier, monospace;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  background: #fafafa;\\r\\n}\\r\\n\\r\\nh5 {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\n.container {\\r\\n  height: 100vh;\\r\\n  max-width: 60rem;\\r\\n  margin: 0 auto;\\r\\n  display: grid;\\r\\n  grid-template-columns: 0.3fr 2.4fr 0.3fr;\\r\\n  grid-template-rows: 0.3fr 2.4fr 0.3fr;\\r\\n  gap: 0.125rem 0.0125rem;\\r\\n  grid-auto-flow: row;\\r\\n  grid-template-areas:\\r\\n    '. header .'\\r\\n    '. main .'\\r\\n    '. footer .';\\r\\n}\\r\\n\\r\\nheader {\\r\\n  grid-area: header;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  border-bottom: 2px #dbdbdb solid;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  grid-area: footer;\\r\\n  display: flex;\\r\\n  justify-content: flex-start;\\r\\n  align-items: center;\\r\\n  border-top: 2px #dbdbdb solid;\\r\\n}\\r\\n\\r\\nmain {\\r\\n  margin-top: 1rem;\\r\\n  display: grid;\\r\\n  grid-template-columns: 1fr 1fr 1fr;\\r\\n  grid-template-rows: 1fr 1fr 1fr;\\r\\n  gap: 0.5rem 0.5rem;\\r\\n  grid-auto-flow: row;\\r\\n  grid-template-areas:\\r\\n    '. . .'\\r\\n    '. . .'\\r\\n    '. . .';\\r\\n  grid-area: main;\\r\\n}\\r\\n\\r\\n.nav-bar-list {\\r\\n  padding: 0;\\r\\n  list-style: none;\\r\\n  display: flex;\\r\\n}\\r\\n\\r\\nli {\\r\\n  margin-left: 5rem;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\nli:hover {\\r\\n  border-bottom: 2px solid #333;\\r\\n  font-weight: bold;\\r\\n}\\r\\n\\r\\n/* card foods styles */\\r\\n\\r\\n.card-food {\\r\\n  display: grid;\\r\\n  grid-template-columns: 1fr 1.4fr 0.6fr;\\r\\n  grid-template-rows: 2fr 0.4fr 0.2fr;\\r\\n  gap: 0;\\r\\n  grid-template-areas:\\r\\n    'card-img card-img card-img'\\r\\n    'card-title card-title card-title'\\r\\n    'btn-recipe . btn-liked';\\r\\n  border: #dbdbdb 1px solid;\\r\\n}\\r\\n\\r\\n.card-img {\\r\\n  overflow: hidden;\\r\\n  box-sizing: border-box;\\r\\n  grid-area: card-img;\\r\\n}\\r\\n\\r\\n.img-food {\\r\\n  width: 100%;\\r\\n  min-height: 250px;\\r\\n  object-fit: cover;\\r\\n}\\r\\n\\r\\n.card-title {\\r\\n  grid-area: card-title;\\r\\n  display: flex;\\r\\n  justify-content: flex-start;\\r\\n  align-items: flex-start;\\r\\n  padding: 0.2rem;\\r\\n}\\r\\n\\r\\n.btn-recipe {\\r\\n  grid-area: btn-recipe;\\r\\n  display: flex;\\r\\n  justify-content: flex-start;\\r\\n  align-items: flex-end;\\r\\n  padding: 0.2rem;\\r\\n}\\r\\n\\r\\n.btn-recipe button {\\r\\n  background: rgb(221, 21, 21);\\r\\n  border: none;\\r\\n  color: white;\\r\\n  font-weight: bold;\\r\\n  padding: 0.1rem 0.4rem;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.btn-liked {\\r\\n  grid-area: btn-liked;\\r\\n  display: flex;\\r\\n  justify-content: flex-end;\\r\\n  align-items: flex-end;\\r\\n  padding: 0.2rem;\\r\\n}\\r\\n\\r\\n.btn-liked button {\\r\\n  background: white;\\r\\n  border: 1px solid #dbdbdb;\\r\\n  color: rgb(221, 21, 21);\\r\\n  font-weight: bold;\\r\\n  padding: 0.1rem 0.4rem;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.popup{\\r\\n  background-color: aliceblue;\\r\\n  margin-inline: 10%;\\r\\n  position: fixed;\\r\\n  top: 0;\\r\\n  height: 100vh;     \\r\\n}\\r\\n\\r\\n.popup img{\\r\\n  max-width: 100%;\\r\\n  max-height: 100%;\\r\\n}\\r\\n\\r\\n#cont{\\r\\n  display: flex; \\r\\n  gap: 30px; \\r\\n}\\r\\n\\r\\n#img{\\r\\n  width: 50%;\\r\\n  align-self: center;\\r\\n}\\r\\n\\r\\n#ins{\\r\\n  width: 50%;\\r\\n  height: 40%;   \\r\\n}\\r\\n\\r\\n.content{\\r\\n  height: 400px;\\r\\n  overflow: auto;\\r\\n}\\r\\n\\r\\nform{\\r\\n  text-align: center;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack_boilerplate/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack_boilerplate/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack_boilerplate/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack_boilerplate/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack_boilerplate/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack_boilerplate/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack_boilerplate/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack_boilerplate/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack_boilerplate/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack_boilerplate/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/Likes&Comments.js":
/*!*******************************!*\
  !*** ./src/Likes&Comments.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"postcomments\": () => (/* binding */ postcomments)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n// eslint-disable-next-line import/no-cycle\n\n\nconst postlikes = async (id) => {\n  const postfix = 'likes';\n  const idUrl = _index_js__WEBPACK_IMPORTED_MODULE_0__.InvolveURL + postfix;\n  await fetch(idUrl, {\n    method: 'POST',\n    body: JSON.stringify({\n      \"item_id\": id,\n    }),\n    headers: {\n      'Content-type': 'application/json; charset=UTF-8',\n    },\n  });\n};\n\nconst postcomments = async (id, username, comment) => {\n  const postfix = 'comments';\n  const idUrl = _index_js__WEBPACK_IMPORTED_MODULE_0__.InvolveURL + postfix;\n  await fetch(idUrl, {\n    method: 'POST',\n    body: JSON.stringify({\n      \"item_id\": id,\n      \"username\": username,\n      \"comment\": comment,\n    }),\n    headers: {\n      'Content-type': 'application/json; charset=UTF-8',\n    },\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postlikes);\n\n\n\n//# sourceURL=webpack://webpack_boilerplate/./src/Likes&Comments.js?");

/***/ }),

/***/ "./src/getFoodList.js":
/*!****************************!*\
  !*** ./src/getFoodList.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getData)\n/* harmony export */ });\n/* harmony import */ var _popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popup.js */ \"./src/popup.js\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n/* harmony import */ var _Likes_Comments_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Likes&Comments.js */ \"./src/Likes&Comments.js\");\n/* eslint-disable import/no-cycle */\n\n\n\n\nconst getPopupData = async (arr) => {\n  const urlD = _index_js__WEBPACK_IMPORTED_MODULE_1__.urlDetails + arr.idMeal;\n  const request = new Request(urlD);\n  const response = await fetch(request);\n  const responseJson = await response.json();\n  const responsInfo = responseJson.meals;// getting food data list\n  (0,_popup_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(responsInfo); // passing that response to display the data.\n};\n\nconst UIData = (arr) => {\n  const board = document.querySelector('.container-food-cards');\n  board.innerHTML = '';\n\n  arr.forEach((food) => {\n    const item = document.createElement('div');\n    item.classList.add('card-food');\n    item.innerHTML = `\n        <div class=\"card-title\">\n          <h5>${food.strMeal}</h5>\n        </div>\n        <div class=\"btn-recipe\">\n          <button type=\"button\">Recipe</button>\n        </div>\n        <div class=\"btn-liked\">\n          <button type=\"button\">Like</button>\n        </div>\n        <div class=\"card-img\">\n         <img src=\"${food.strMealThumb}\" class=\"img-food\">        \n        </div>     \n    `;\n    item.id = food.idMeal;\n    board.appendChild(item);\n\n    // this section is not working----->\n    document.querySelector('.btn-liked').addEventListener('click', () => {\n      (0,_Likes_Comments_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(item.id);\n    });\n    document.querySelector('.btn-recipe').addEventListener('click', () => {\n      getPopupData(food);\n    });\n    //  <-------------------------------\n\n    //  This way works but for the entire item not just the button\n    // item.addEventListener('click', () => {\n    //   postlikes(item.id);\n    // });\n\n    item.addEventListener('click', () => {\n      getPopupData(food);\n    });\n    //  <-------------------------------\n  });\n};\n\n// function to get images and title\nconst getData = async (url) => {\n  const request = new Request(url);\n  const response = await fetch(request);\n  const responseJson = await response.json();\n  const responsInfo = responseJson.meals;// getting food data list\n  UIData(responsInfo); // passing that response to display the data.\n};\n\n\n\n\n//# sourceURL=webpack://webpack_boilerplate/./src/getFoodList.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"InvolveURL\": () => (/* binding */ InvolveURL),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"urlDetails\": () => (/* binding */ urlDetails)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _getFoodList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getFoodList.js */ \"./src/getFoodList.js\");\n\n\n\n// api links\nconst allBeefURL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef';\nconst urlDetails = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';\nconst InvolveURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/oHdQExR6DIJGa8S6fY1E/';\n(0,_getFoodList_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(allBeefURL);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (allBeefURL);\n\n\n\n//# sourceURL=webpack://webpack_boilerplate/./src/index.js?");

/***/ }),

/***/ "./src/popup.js":
/*!**********************!*\
  !*** ./src/popup.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n/* harmony import */ var _Likes_Comments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Likes&Comments.js */ \"./src/Likes&Comments.js\");\n\n\n\nconst fillComments = (obj) => {\n  for (let i = 0; i < obj.length; i += 1) {\n    const comment = document.createElement('div');\n    comment.classList = 'comment';\n    comment.innerHTML = `\n    <h4>${obj[i].username}</h4>\n    <p>${obj[i].comment}</br></br>${obj[i].creation_date}</p>\n    `;\n    const popup = document.querySelector('.popup');\n    popup.appendChild(comment);\n  }\n};\n\nasync function getComments(id) {\n  const postfix = 'comments?item_id=';\n  const idUrl = _index_js__WEBPACK_IMPORTED_MODULE_0__.InvolveURL + postfix + id;\n  const response = await fetch(idUrl);\n  const comments = await response.json();\n  fillComments(comments);\n}\n\nconst popupData = (arr) => {\n  const popup = document.createElement('div');\n  popup.classList = 'popup';\n  popup.innerHTML = `\n  <div id=\"cont\">\n  <div id=\"img\">\n  <img src=\"${arr[0].strMealThumb}\" id=\"food\">\n  </div>\n  <div id=\"ins\">\n  <h4>Instructions</h4>\n  <p class=\"content\">${arr[0].strInstructions}</p>\n  </div>\n  </div>\n  <form><h4>Leave a comment</h4>\n  <input type=\"text\" id=\"user\" placeholder=\"Your name\">\n  <input type=\"text\" id=\"comment\" placeholder=\"Your insights\">\n  <button type=\"button\" id=\"submit\">Comment</button>\n  <button type=\"button\" id=\"close\">Go Back</button>\n  </form>\n  <div class=\"commentSection\">\n  </div>  \n`;\n  const body = document.querySelector('body');\n  body.appendChild(popup);\n  const submit = document.getElementById('submit');\n  submit.addEventListener('click', () => {\n    const form = document.querySelector('form');\n    form.reset();\n    const user = document.getElementById('user').value;\n    const comment = document.getElementById('comment').value;\n    (0,_Likes_Comments_js__WEBPACK_IMPORTED_MODULE_1__.postcomments)(arr[0].idMeal, user, comment);\n  });\n  const close = document.querySelector('#close');\n  close.addEventListener('click', () => {\n    body.removeChild(popup);\n  });\n  getComments(arr[0].idMeal);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (popupData);\n\n//# sourceURL=webpack://webpack_boilerplate/./src/popup.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;