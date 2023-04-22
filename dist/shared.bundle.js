/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/shared.js":
/*!**********************!*\
  !*** ./js/shared.js ***!
  \**********************/
/***/ (() => {

eval("const isTest = true;\r\n\r\nfunction keepLinkParams() {\r\n\tfor (let anchor of document.getElementsByTagName(\"a\")) {\r\n\t\tanchor.href = anchor.href + window.location.search;\r\n\t}\r\n\tfor (let form of document.getElementsByTagName(\"form\")) {\r\n\t\tform.action = form.action + window.location.search;\r\n\t}\r\n}\r\n\r\nif (isTest) {\r\n\tkeepLinkParams();\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9zaGFyZWQuanMuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2lvdC1wcm9qZWN0Ly4vanMvc2hhcmVkLmpzP2UxMDkiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaXNUZXN0ID0gdHJ1ZTtcclxuXHJcbmZ1bmN0aW9uIGtlZXBMaW5rUGFyYW1zKCkge1xyXG5cdGZvciAobGV0IGFuY2hvciBvZiBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImFcIikpIHtcclxuXHRcdGFuY2hvci5ocmVmID0gYW5jaG9yLmhyZWYgKyB3aW5kb3cubG9jYXRpb24uc2VhcmNoO1xyXG5cdH1cclxuXHRmb3IgKGxldCBmb3JtIG9mIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiZm9ybVwiKSkge1xyXG5cdFx0Zm9ybS5hY3Rpb24gPSBmb3JtLmFjdGlvbiArIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2g7XHJcblx0fVxyXG59XHJcblxyXG5pZiAoaXNUZXN0KSB7XHJcblx0a2VlcExpbmtQYXJhbXMoKTtcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./js/shared.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./js/shared.js"]();
/******/ 	
/******/ })()
;