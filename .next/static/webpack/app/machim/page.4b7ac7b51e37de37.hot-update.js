"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/machim/page",{

/***/ "(app-pages-browser)/./src/app/handleText.js":
/*!*******************************!*\
  !*** ./src/app/handleText.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   handleAboutMachim: function() { return /* binding */ handleAboutMachim; },\n/* harmony export */   handleAboutMe: function() { return /* binding */ handleAboutMe; },\n/* harmony export */   handleExperience: function() { return /* binding */ handleExperience; },\n/* harmony export */   handleKjs: function() { return /* binding */ handleKjs; },\n/* harmony export */   handlePortfolio: function() { return /* binding */ handlePortfolio; }\n/* harmony export */ });\nfunction handleAboutMe() {\n    const mottoElement = document.querySelector(\".motto-text\");\n    const usaElement = document.querySelector(\".usa-element\");\n    if (window.innerWidth < 850) {\n        mottoElement.innerHTML = '<strong>\"The best way to<br />predict the future is to create it.\"</strong>';\n        usaElement.innerHTML = \"<strong>the United States<br />of America.</strong>\";\n    }\n}\nfunction handlePortfolio() {\n    const ileonangElement = document.querySelector(\".ileonang-element\");\n    const qrElement = document.querySelector(\".qr-element\");\n    const converterElement = document.querySelector(\".converter-element\");\n    const RoadMapElement = document.querySelector(\".roadmap-element\");\n    if (window.innerWidth < 850) {\n        ileonangElement.innerHTML = \"Made an <strong>Alarm App</strong>, which<br />wakes up user by sending<br />risky message to someone.\";\n        qrElement.innerHTML = \"Making a <strong>QR Code Generate<br />Service</strong>, which generates<br />& downloads QR Code.\";\n        converterElement.innerHTML = \"Making an <strong>Exchange Rate Conversion Service</strong>, which<br />calculates by actual exchange rate.\";\n        RoadMapElement.innerHTML = \"Operating <strong>RoadMap</strong>, which is<br />Web Club of my high school.\";\n    }\n}\nfunction handleExperience() {\n    const highthonElement = document.querySelector(\".highthon-element\");\n    if (window.innerWidth < 850) {\n        highthonElement.innerHTML = \"Got a <strong>Grand Prize</strong> at <strong>Highthon</strong>,<br />which is hackathon<br />of high school student.\";\n    }\n}\nfunction handleAboutMachim() {\n    const aboutMachimElement = document.querySelector(\".about-machim\");\n    if (window.innerWidth < 850) {\n        aboutMachimElement.innerHTML = \"\";\n    }\n}\nfunction handleKjs() {\n    const aboutMeElement = document.querySelector(\".about-me\");\n    if (window.innerWidth < 850) {\n        aboutMeElement.innerHTML = \"저는 <strong>김진성</strong>이고, 학생 <strong>Prouct Manager</strong>입니다. <br /> 저는 미래 세상의 패러다임에<br />혁신을 주는 프로덕트를 만들 것이고, <br />제 프로덕트를 발전시키기 위해<br />많은 노력을 기울이고 있습니다.\";\n    }\n}\n// 포폴.tsx에 resize나 load 감지해서 handlePortfolio() 실행시키는 코드 넣기\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvaGFuZGxlVGV4dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLFNBQVNBO0lBQ0wsTUFBTUMsZUFBZUMsU0FBU0MsYUFBYSxDQUFDO0lBQzVDLE1BQU1DLGFBQWFGLFNBQVNDLGFBQWEsQ0FBQztJQUUxQyxJQUFJRSxPQUFPQyxVQUFVLEdBQUcsS0FBSztRQUN6QkwsYUFBYU0sU0FBUyxHQUNsQjtRQUNKSCxXQUFXRyxTQUFTLEdBQ2hCO0lBQ1I7QUFDSjtBQUVBLFNBQVNDO0lBQ0wsTUFBTUMsa0JBQWtCUCxTQUFTQyxhQUFhLENBQUM7SUFDL0MsTUFBTU8sWUFBWVIsU0FBU0MsYUFBYSxDQUFDO0lBQ3pDLE1BQU1RLG1CQUFtQlQsU0FBU0MsYUFBYSxDQUFDO0lBQ2hELE1BQU1TLGlCQUFpQlYsU0FBU0MsYUFBYSxDQUFDO0lBRTlDLElBQUlFLE9BQU9DLFVBQVUsR0FBRyxLQUFLO1FBQ3pCRyxnQkFBZ0JGLFNBQVMsR0FDckI7UUFDSkcsVUFBVUgsU0FBUyxHQUNmO1FBQ0pJLGlCQUFpQkosU0FBUyxHQUN0QjtRQUNKSyxlQUFlTCxTQUFTLEdBQ3BCO0lBQ1I7QUFDSjtBQUVBLFNBQVNNO0lBQ0wsTUFBTUMsa0JBQWtCWixTQUFTQyxhQUFhLENBQUM7SUFFL0MsSUFBSUUsT0FBT0MsVUFBVSxHQUFHLEtBQUs7UUFDekJRLGdCQUFnQlAsU0FBUyxHQUNyQjtJQUNSO0FBQ0o7QUFFQSxTQUFTUTtJQUNMLE1BQU1DLHFCQUFxQmQsU0FBU0MsYUFBYSxDQUFDO0lBRWxELElBQUlFLE9BQU9DLFVBQVUsR0FBRyxLQUFLO1FBQ3pCVSxtQkFBbUJULFNBQVMsR0FBRztJQUNuQztBQUNKO0FBRUEsU0FBU1U7SUFDTCxNQUFNQyxpQkFBaUJoQixTQUFTQyxhQUFhLENBQUM7SUFFOUMsSUFBSUUsT0FBT0MsVUFBVSxHQUFHLEtBQUs7UUFDekJZLGVBQWVYLFNBQVMsR0FDcEI7SUFDUjtBQUNKO0FBRUEsMERBQTBEO0FBT3hEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvaGFuZGxlVGV4dC5qcz83M2RkIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGhhbmRsZUFib3V0TWUoKSB7XG4gICAgY29uc3QgbW90dG9FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb3R0by10ZXh0XCIpO1xuICAgIGNvbnN0IHVzYUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVzYS1lbGVtZW50XCIpO1xuXG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgODUwKSB7XG4gICAgICAgIG1vdHRvRWxlbWVudC5pbm5lckhUTUwgPVxuICAgICAgICAgICAgJzxzdHJvbmc+XCJUaGUgYmVzdCB3YXkgdG88YnIgLz5wcmVkaWN0IHRoZSBmdXR1cmUgaXMgdG8gY3JlYXRlIGl0LlwiPC9zdHJvbmc+JztcbiAgICAgICAgdXNhRWxlbWVudC5pbm5lckhUTUwgPVxuICAgICAgICAgICAgXCI8c3Ryb25nPnRoZSBVbml0ZWQgU3RhdGVzPGJyIC8+b2YgQW1lcmljYS48L3N0cm9uZz5cIjtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVBvcnRmb2xpbygpIHtcbiAgICBjb25zdCBpbGVvbmFuZ0VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmlsZW9uYW5nLWVsZW1lbnRcIik7XG4gICAgY29uc3QgcXJFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5xci1lbGVtZW50XCIpO1xuICAgIGNvbnN0IGNvbnZlcnRlckVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnZlcnRlci1lbGVtZW50XCIpO1xuICAgIGNvbnN0IFJvYWRNYXBFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yb2FkbWFwLWVsZW1lbnRcIik7XG5cbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCA4NTApIHtcbiAgICAgICAgaWxlb25hbmdFbGVtZW50LmlubmVySFRNTCA9XG4gICAgICAgICAgICBcIk1hZGUgYW4gPHN0cm9uZz5BbGFybSBBcHA8L3N0cm9uZz4sIHdoaWNoPGJyIC8+d2FrZXMgdXAgdXNlciBieSBzZW5kaW5nPGJyIC8+cmlza3kgbWVzc2FnZSB0byBzb21lb25lLlwiO1xuICAgICAgICBxckVsZW1lbnQuaW5uZXJIVE1MID1cbiAgICAgICAgICAgIFwiTWFraW5nIGEgPHN0cm9uZz5RUiBDb2RlIEdlbmVyYXRlPGJyIC8+U2VydmljZTwvc3Ryb25nPiwgd2hpY2ggZ2VuZXJhdGVzPGJyIC8+JiBkb3dubG9hZHMgUVIgQ29kZS5cIjtcbiAgICAgICAgY29udmVydGVyRWxlbWVudC5pbm5lckhUTUwgPVxuICAgICAgICAgICAgXCJNYWtpbmcgYW4gPHN0cm9uZz5FeGNoYW5nZSBSYXRlIENvbnZlcnNpb24gU2VydmljZTwvc3Ryb25nPiwgd2hpY2g8YnIgLz5jYWxjdWxhdGVzIGJ5IGFjdHVhbCBleGNoYW5nZSByYXRlLlwiO1xuICAgICAgICBSb2FkTWFwRWxlbWVudC5pbm5lckhUTUwgPVxuICAgICAgICAgICAgXCJPcGVyYXRpbmcgPHN0cm9uZz5Sb2FkTWFwPC9zdHJvbmc+LCB3aGljaCBpczxiciAvPldlYiBDbHViIG9mIG15IGhpZ2ggc2Nob29sLlwiO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlRXhwZXJpZW5jZSgpIHtcbiAgICBjb25zdCBoaWdodGhvbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhpZ2h0aG9uLWVsZW1lbnRcIik7XG5cbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCA4NTApIHtcbiAgICAgICAgaGlnaHRob25FbGVtZW50LmlubmVySFRNTCA9XG4gICAgICAgICAgICBcIkdvdCBhIDxzdHJvbmc+R3JhbmQgUHJpemU8L3N0cm9uZz4gYXQgPHN0cm9uZz5IaWdodGhvbjwvc3Ryb25nPiw8YnIgLz53aGljaCBpcyBoYWNrYXRob248YnIgLz5vZiBoaWdoIHNjaG9vbCBzdHVkZW50LlwiO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlQWJvdXRNYWNoaW0oKSB7XG4gICAgY29uc3QgYWJvdXRNYWNoaW1FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hYm91dC1tYWNoaW1cIik7XG5cbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCA4NTApIHtcbiAgICAgICAgYWJvdXRNYWNoaW1FbGVtZW50LmlubmVySFRNTCA9IFwiXCI7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBoYW5kbGVLanMoKSB7XG4gICAgY29uc3QgYWJvdXRNZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFib3V0LW1lXCIpO1xuXG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgODUwKSB7XG4gICAgICAgIGFib3V0TWVFbGVtZW50LmlubmVySFRNTCA9XG4gICAgICAgICAgICBcIuyggOuKlCA8c3Ryb25nPuq5gOynhOyEsTwvc3Ryb25nPuydtOqzoCwg7ZWZ7IOdIDxzdHJvbmc+UHJvdWN0IE1hbmFnZXI8L3N0cm9uZz7snoXri4jri6QuIDxiciAvPiDsoIDripQg66+4656YIOyEuOyDgeydmCDtjKjrn6zri6TsnoTsl5A8YnIgLz7tmIHsi6DsnYQg7KO864qUIO2UhOuhnOuNle2KuOulvCDrp4zrk6Qg6rKD7J206rOgLCA8YnIgLz7soJwg7ZSE66Gc642V7Yq466W8IOuwnOyghOyLnO2CpOq4sCDsnITtlbQ8YnIgLz7rp47snYAg64W466Cl7J2EIOq4sOyauOydtOqzoCDsnojsirXri4jri6QuXCI7XG4gICAgfVxufVxuXG4vLyDtj6ztj7QudHN47JeQIHJlc2l6ZeuCmCBsb2FkIOqwkOyngO2VtOyEnCBoYW5kbGVQb3J0Zm9saW8oKSDsi6Ttlonsi5ztgqTripQg7L2U65OcIOuEo+q4sFxuZXhwb3J0IHtcbiAgICBoYW5kbGVBYm91dE1lLFxuICAgIGhhbmRsZVBvcnRmb2xpbyxcbiAgICBoYW5kbGVFeHBlcmllbmNlLFxuICAgIGhhbmRsZUFib3V0TWFjaGltLFxuICAgIGhhbmRsZUtqcyxcbn07XG4iXSwibmFtZXMiOlsiaGFuZGxlQWJvdXRNZSIsIm1vdHRvRWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInVzYUVsZW1lbnQiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIVE1MIiwiaGFuZGxlUG9ydGZvbGlvIiwiaWxlb25hbmdFbGVtZW50IiwicXJFbGVtZW50IiwiY29udmVydGVyRWxlbWVudCIsIlJvYWRNYXBFbGVtZW50IiwiaGFuZGxlRXhwZXJpZW5jZSIsImhpZ2h0aG9uRWxlbWVudCIsImhhbmRsZUFib3V0TWFjaGltIiwiYWJvdXRNYWNoaW1FbGVtZW50IiwiaGFuZGxlS2pzIiwiYWJvdXRNZUVsZW1lbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/handleText.js\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/machim/AboutMachim.tsx":
/*!***********************************************!*\
  !*** ./src/components/machim/AboutMachim.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _styles_machim_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/machim.css */ \"(app-pages-browser)/./src/styles/machim.css\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _app_handleText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app/handleText */ \"(app-pages-browser)/./src/app/handleText.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"(app-pages-browser)/./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    @media (max-width: 800px) {\\n        .about-machim {\\n            font-size: 20px;\\n        }\\n    }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst MobileAboutMachim = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div(_templateObject());\n_c = MobileAboutMachim;\nfunction AboutMachim() {\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (window.performance) {\n            if (performance.navigation.type === 1) {\n                // Detect Refresh\n                (0,_app_handleText__WEBPACK_IMPORTED_MODULE_4__.handleAboutMachim)();\n            }\n        }\n        window.addEventListener(\"resize\", _app_handleText__WEBPACK_IMPORTED_MODULE_4__.handleAboutMachim);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        id: \"AboutMe\",\n        className: \"body\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(MobileAboutMachim, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                    id: \"AboutMachim\",\n                    className: \"about-me\",\n                    children: \"What is Machim?\"\n                }, void 0, false, {\n                    fileName: \"/Users/kinn/Desktop/kinn-kr/src/components/machim/AboutMachim.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                    className: \"about-machim\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"strong\", {\n                            children: \".마침이\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kinn/Desktop/kinn-kr/src/components/machim/AboutMachim.tsx\",\n                            lineNumber: 33,\n                            columnNumber: 21\n                        }, this),\n                        \"는 \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"strong\", {\n                            children: \"Kinn\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kinn/Desktop/kinn-kr/src/components/machim/AboutMachim.tsx\",\n                            lineNumber: 33,\n                            columnNumber: 44\n                        }, this),\n                        \"이 개발한 Discord Bot 입니다. \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/Users/kinn/Desktop/kinn-kr/src/components/machim/AboutMachim.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 38\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"strong\", {\n                            children: \".마침이\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kinn/Desktop/kinn-kr/src/components/machim/AboutMachim.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 21\n                        }, this),\n                        \"는 당신의 Discord Server를\",\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"strong\", {\n                            children: \"관리\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kinn/Desktop/kinn-kr/src/components/machim/AboutMachim.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 21\n                        }, this),\n                        \"할 수 있으며, \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/Users/kinn/Desktop/kinn-kr/src/components/machim/AboutMachim.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 49\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"strong\", {\n                            children: \"유틸리티\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kinn/Desktop/kinn-kr/src/components/machim/AboutMachim.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 21\n                        }, this),\n                        \" 기능 또한 있어 최고의 Discord Bot 사용 경험을 제공합니다.\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/Users/kinn/Desktop/kinn-kr/src/components/machim/AboutMachim.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 21\n                        }, this),\n                        \"다재다능한 Discord Bot, \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"strong\", {\n                            children: \".마침이\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kinn/Desktop/kinn-kr/src/components/machim/AboutMachim.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 40\n                        }, this),\n                        \"를 지금 당신의 서버에서 사용해보세요!\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kinn/Desktop/kinn-kr/src/components/machim/AboutMachim.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/kinn/Desktop/kinn-kr/src/components/machim/AboutMachim.tsx\",\n            lineNumber: 28,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/kinn/Desktop/kinn-kr/src/components/machim/AboutMachim.tsx\",\n        lineNumber: 27,\n        columnNumber: 9\n    }, this);\n}\n_s(AboutMachim, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c1 = AboutMachim;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AboutMachim);\nvar _c, _c1;\n$RefreshReg$(_c, \"MobileAboutMachim\");\n$RefreshReg$(_c1, \"AboutMachim\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL21hY2hpbS9BYm91dE1hY2hpbS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBaUM7QUFDUTtBQUNnQjtBQUNsQjtBQUV2QyxNQUFNSSxvQkFBb0JELHlEQUFNQSxDQUFDRSxHQUFHO0tBQTlCRDtBQVFOLFNBQVNFOztJQUNMTCxnREFBU0EsQ0FBQztRQUNOLElBQUlNLE9BQU9DLFdBQVcsRUFBRTtZQUNwQixJQUFJQSxZQUFZQyxVQUFVLENBQUNDLElBQUksS0FBSyxHQUFHO2dCQUNuQyxpQkFBaUI7Z0JBQ2pCUixrRUFBaUJBO1lBQ3JCO1FBQ0o7UUFFQUssT0FBT0ksZ0JBQWdCLENBQUMsVUFBVVQsOERBQWlCQTtJQUN2RCxHQUFHLEVBQUU7SUFFTCxxQkFDSSw4REFBQ0c7UUFBSU8sSUFBRztRQUFVQyxXQUFVO2tCQUN4Qiw0RUFBQ1Q7OzhCQUNHLDhEQUFDVTtvQkFBR0YsSUFBRztvQkFBY0MsV0FBVTs4QkFBVzs7Ozs7OzhCQUcxQyw4REFBQ0U7b0JBQUVGLFdBQVU7O3NDQUNULDhEQUFDRztzQ0FBTzs7Ozs7O3dCQUFhO3NDQUFFLDhEQUFDQTtzQ0FBTzs7Ozs7O3dCQUFhO3NDQUMzQiw4REFBQ0M7Ozs7O3NDQUNsQiw4REFBQ0Q7c0NBQU87Ozs7Ozt3QkFBYTt3QkFBc0I7c0NBQzNDLDhEQUFDQTtzQ0FBTzs7Ozs7O3dCQUFXO3NDQUFTLDhEQUFDQzs7Ozs7c0NBQzdCLDhEQUFDRDtzQ0FBTzs7Ozs7O3dCQUFhO3NDQUVyQiw4REFBQ0M7Ozs7O3dCQUFLO3NDQUNhLDhEQUFDRDtzQ0FBTzs7Ozs7O3dCQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNNUQ7R0FoQ1NWO01BQUFBO0FBa0NULCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL21hY2hpbS9BYm91dE1hY2hpbS50c3g/NGQwNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLi8uLi9zdHlsZXMvbWFjaGltLmNzc1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgaGFuZGxlQWJvdXRNYWNoaW0gfSBmcm9tIFwiLi4vLi4vYXBwL2hhbmRsZVRleHRcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmNvbnN0IE1vYmlsZUFib3V0TWFjaGltID0gc3R5bGVkLmRpdmBcbiAgICBAbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcbiAgICAgICAgLmFib3V0LW1hY2hpbSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIH1cbiAgICB9XG5gO1xuXG5mdW5jdGlvbiBBYm91dE1hY2hpbSgpIHtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAod2luZG93LnBlcmZvcm1hbmNlKSB7XG4gICAgICAgICAgICBpZiAocGVyZm9ybWFuY2UubmF2aWdhdGlvbi50eXBlID09PSAxKSB7XG4gICAgICAgICAgICAgICAgLy8gRGV0ZWN0IFJlZnJlc2hcbiAgICAgICAgICAgICAgICBoYW5kbGVBYm91dE1hY2hpbSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlQWJvdXRNYWNoaW0pO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgaWQ9XCJBYm91dE1lXCIgY2xhc3NOYW1lPVwiYm9keVwiPlxuICAgICAgICAgICAgPE1vYmlsZUFib3V0TWFjaGltPlxuICAgICAgICAgICAgICAgIDxoMSBpZD1cIkFib3V0TWFjaGltXCIgY2xhc3NOYW1lPVwiYWJvdXQtbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgV2hhdCBpcyBNYWNoaW0/XG4gICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhYm91dC1tYWNoaW1cIj5cbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz4u66eI7Lmo7J20PC9zdHJvbmc+64qUIDxzdHJvbmc+S2lubjwvc3Ryb25nPuydtCDqsJzrsJztlZxcbiAgICAgICAgICAgICAgICAgICAgRGlzY29yZCBCb3Qg7J6F64uI64ukLiA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz4u66eI7Lmo7J20PC9zdHJvbmc+64qUIOuLueyLoOydmCBEaXNjb3JkIFNlcnZlcuulvHtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz7qtIDrpqw8L3N0cm9uZz7tlaAg7IiYIOyeiOycvOupsCwgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+7Jyg7Yu466as7YuwPC9zdHJvbmc+IOq4sOuKpSDrmJDtlZwg7J6I7Ja0IOy1nOqzoOydmCBEaXNjb3JkIEJvdFxuICAgICAgICAgICAgICAgICAgICDsgqzsmqkg6rK97ZeY7J2EIOygnOqzte2VqeuLiOuLpC5cbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIOuLpOyerOuLpOuKpe2VnCBEaXNjb3JkIEJvdCwgPHN0cm9uZz4u66eI7Lmo7J20PC9zdHJvbmc+66W8IOyngOq4iFxuICAgICAgICAgICAgICAgICAgICDri7nsi6DsnZgg7ISc67KE7JeQ7IScIOyCrOyaqe2VtOuztOyEuOyalCFcbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L01vYmlsZUFib3V0TWFjaGltPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBYm91dE1hY2hpbTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsImhhbmRsZUFib3V0TWFjaGltIiwic3R5bGVkIiwiTW9iaWxlQWJvdXRNYWNoaW0iLCJkaXYiLCJBYm91dE1hY2hpbSIsIndpbmRvdyIsInBlcmZvcm1hbmNlIiwibmF2aWdhdGlvbiIsInR5cGUiLCJhZGRFdmVudExpc3RlbmVyIiwiaWQiLCJjbGFzc05hbWUiLCJoMSIsInAiLCJzdHJvbmciLCJiciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/machim/AboutMachim.tsx\n"));

/***/ })

});