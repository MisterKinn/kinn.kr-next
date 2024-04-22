"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/shallow-equal";
exports.ids = ["vendor-chunks/shallow-equal"];
exports.modules = {

/***/ "(ssr)/./node_modules/shallow-equal/dist/index.modern.mjs":
/*!**********************************************************!*\
  !*** ./node_modules/shallow-equal/dist/index.modern.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   shallowEqual: () => (/* binding */ shallowEqual),\n/* harmony export */   shallowEqualArrays: () => (/* binding */ shallowEqualArrays),\n/* harmony export */   shallowEqualObjects: () => (/* binding */ shallowEqualObjects)\n/* harmony export */ });\nfunction shallowEqualArrays(arrA, arrB) {\n  if (arrA === arrB) {\n    return true;\n  }\n  if (!arrA || !arrB) {\n    return false;\n  }\n  const len = arrA.length;\n  if (arrB.length !== len) {\n    return false;\n  }\n  for (let i = 0; i < len; i++) {\n    if (arrA[i] !== arrB[i]) {\n      return false;\n    }\n  }\n  return true;\n}\n\nfunction shallowEqualObjects(objA, objB) {\n  if (objA === objB) {\n    return true;\n  }\n  if (!objA || !objB) {\n    return false;\n  }\n  const aKeys = Object.keys(objA);\n  const bKeys = Object.keys(objB);\n  const len = aKeys.length;\n  if (bKeys.length !== len) {\n    return false;\n  }\n  for (let i = 0; i < len; i++) {\n    const key = aKeys[i];\n    if (objA[key] !== objB[key] || !Object.prototype.hasOwnProperty.call(objB, key)) {\n      return false;\n    }\n  }\n  return true;\n}\n\nfunction shallowEqual(a, b) {\n  const aIsArr = Array.isArray(a);\n  const bIsArr = Array.isArray(b);\n  if (aIsArr !== bIsArr) {\n    return false;\n  }\n  if (aIsArr && bIsArr) {\n    return shallowEqualArrays(a, b);\n  }\n  return shallowEqualObjects(a, b);\n}\n\n\n//# sourceMappingURL=index.modern.mjs.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvc2hhbGxvdy1lcXVhbC9kaXN0L2luZGV4Lm1vZGVybi5tanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixTQUFTO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixTQUFTO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWlFO0FBQ2pFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va2lubi1rci8uL25vZGVfbW9kdWxlcy9zaGFsbG93LWVxdWFsL2Rpc3QvaW5kZXgubW9kZXJuLm1qcz83MWI3Il0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHNoYWxsb3dFcXVhbEFycmF5cyhhcnJBLCBhcnJCKSB7XG4gIGlmIChhcnJBID09PSBhcnJCKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKCFhcnJBIHx8ICFhcnJCKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IGxlbiA9IGFyckEubGVuZ3RoO1xuICBpZiAoYXJyQi5sZW5ndGggIT09IGxlbikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgaWYgKGFyckFbaV0gIT09IGFyckJbaV0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIHNoYWxsb3dFcXVhbE9iamVjdHMob2JqQSwgb2JqQikge1xuICBpZiAob2JqQSA9PT0gb2JqQikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmICghb2JqQSB8fCAhb2JqQikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBhS2V5cyA9IE9iamVjdC5rZXlzKG9iakEpO1xuICBjb25zdCBiS2V5cyA9IE9iamVjdC5rZXlzKG9iakIpO1xuICBjb25zdCBsZW4gPSBhS2V5cy5sZW5ndGg7XG4gIGlmIChiS2V5cy5sZW5ndGggIT09IGxlbikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgY29uc3Qga2V5ID0gYUtleXNbaV07XG4gICAgaWYgKG9iakFba2V5XSAhPT0gb2JqQltrZXldIHx8ICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqQiwga2V5KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gc2hhbGxvd0VxdWFsKGEsIGIpIHtcbiAgY29uc3QgYUlzQXJyID0gQXJyYXkuaXNBcnJheShhKTtcbiAgY29uc3QgYklzQXJyID0gQXJyYXkuaXNBcnJheShiKTtcbiAgaWYgKGFJc0FyciAhPT0gYklzQXJyKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmIChhSXNBcnIgJiYgYklzQXJyKSB7XG4gICAgcmV0dXJuIHNoYWxsb3dFcXVhbEFycmF5cyhhLCBiKTtcbiAgfVxuICByZXR1cm4gc2hhbGxvd0VxdWFsT2JqZWN0cyhhLCBiKTtcbn1cblxuZXhwb3J0IHsgc2hhbGxvd0VxdWFsLCBzaGFsbG93RXF1YWxBcnJheXMsIHNoYWxsb3dFcXVhbE9iamVjdHMgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4Lm1vZGVybi5tanMubWFwXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/shallow-equal/dist/index.modern.mjs\n");

/***/ })

};
;