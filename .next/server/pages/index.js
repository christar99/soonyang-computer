"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jotai */ \"jotai\");\n/* harmony import */ var store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! store */ \"./src/store/index.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([jotai__WEBPACK_IMPORTED_MODULE_0__, store__WEBPACK_IMPORTED_MODULE_1__]);\n([jotai__WEBPACK_IMPORTED_MODULE_0__, store__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\nvar _jsxFileName = \"C:\\\\Users\\\\leath\\\\Desktop\\\\\\uACF5\\uBD80\\\\soonyang-computer\\\\src\\\\pages\\\\index.tsx\";\n\n\n\nfunction Home() {\n  const [country, setCoutry] = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.useAtom)(store__WEBPACK_IMPORTED_MODULE_1__.countryState);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n    children: country\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 9\n  }, this);\n}\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRWUsU0FBU0UsSUFBVCxHQUFnQjtFQUM5QixNQUFNLENBQUNDLE9BQUQsRUFBVUMsU0FBVixJQUF1QkosOENBQU8sQ0FBQ0MsK0NBQUQsQ0FBcEM7RUFDQSxvQkFBTztJQUFBLFVBQU1FO0VBQU47SUFBQTtJQUFBO0lBQUE7RUFBQSxRQUFQO0FBQ0EsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Nvb255YW5nLWNvbXB1dGVyLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD8xOWEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUF0b20gfSBmcm9tICdqb3RhaSc7XG5pbXBvcnQgeyBjb3VudHJ5U3RhdGUgfSBmcm9tICdzdG9yZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG5cdGNvbnN0IFtjb3VudHJ5LCBzZXRDb3V0cnldID0gdXNlQXRvbShjb3VudHJ5U3RhdGUpO1xuXHRyZXR1cm4gPGRpdj57Y291bnRyeX08L2Rpdj47XG59XG4iXSwibmFtZXMiOlsidXNlQXRvbSIsImNvdW50cnlTdGF0ZSIsIkhvbWUiLCJjb3VudHJ5Iiwic2V0Q291dHJ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "./src/store/index.ts":
/*!****************************!*\
  !*** ./src/store/index.ts ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"citiesState\": () => (/* binding */ citiesState),\n/* harmony export */   \"countState\": () => (/* binding */ countState),\n/* harmony export */   \"countryState\": () => (/* binding */ countryState)\n/* harmony export */ });\n/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jotai */ \"jotai\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([jotai__WEBPACK_IMPORTED_MODULE_0__]);\njotai__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst countState = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)(0);\nconst countryState = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)('korea');\nconst citiesState = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)(['seoul', 'busan']);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBRUEsTUFBTUMsVUFBVSxHQUFHRCwyQ0FBSSxDQUFDLENBQUQsQ0FBdkI7QUFDQSxNQUFNRSxZQUFZLEdBQUdGLDJDQUFJLENBQUMsT0FBRCxDQUF6QjtBQUNBLE1BQU1HLFdBQVcsR0FBR0gsMkNBQUksQ0FBQyxDQUFDLE9BQUQsRUFBVSxPQUFWLENBQUQsQ0FBeEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zb29ueWFuZy1jb21wdXRlci8uL3NyYy9zdG9yZS9pbmRleC50cz9jZWU2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGF0b20gfSBmcm9tICdqb3RhaSc7XHJcblxyXG5jb25zdCBjb3VudFN0YXRlID0gYXRvbSgwKTtcclxuY29uc3QgY291bnRyeVN0YXRlID0gYXRvbSgna29yZWEnKTtcclxuY29uc3QgY2l0aWVzU3RhdGUgPSBhdG9tKFsnc2VvdWwnLCAnYnVzYW4nXSk7XHJcblxyXG5leHBvcnQgeyBjb3VudFN0YXRlLCBjb3VudHJ5U3RhdGUsIGNpdGllc1N0YXRlIH07XHJcbiJdLCJuYW1lcyI6WyJhdG9tIiwiY291bnRTdGF0ZSIsImNvdW50cnlTdGF0ZSIsImNpdGllc1N0YXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/store/index.ts\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "jotai":
/*!************************!*\
  !*** external "jotai" ***!
  \************************/
/***/ ((module) => {

module.exports = import("jotai");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.tsx"));
module.exports = __webpack_exports__;

})();