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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   handleAboutMachim: function() { return /* binding */ handleAboutMachim; },\n/* harmony export */   handleAboutMe: function() { return /* binding */ handleAboutMe; },\n/* harmony export */   handleExperience: function() { return /* binding */ handleExperience; },\n/* harmony export */   handleKjs: function() { return /* binding */ handleKjs; },\n/* harmony export */   handlePortfolio: function() { return /* binding */ handlePortfolio; }\n/* harmony export */ });\nfunction handleAboutMe() {\n    const mottoElement = document.querySelector(\".motto-text\");\n    const usaElement = document.querySelector(\".usa-element\");\n    if (window.innerWidth < 850) {\n        mottoElement.innerHTML = '<strong>\"The best way to<br />predict the future is to create it.\"</strong>';\n        usaElement.innerHTML = \"<strong>the United States<br />of America.</strong>\";\n    }\n}\nfunction handlePortfolio() {\n    const ileonangElement = document.querySelector(\".ileonang-element\");\n    const qrElement = document.querySelector(\".qr-element\");\n    const converterElement = document.querySelector(\".converter-element\");\n    const RoadMapElement = document.querySelector(\".roadmap-element\");\n    if (window.innerWidth < 850) {\n        ileonangElement.innerHTML = \"Made an <strong>Alarm App</strong>, which<br />wakes up user by sending<br />risky message to someone.\";\n        qrElement.innerHTML = \"Making a <strong>QR Code Generate<br />Service</strong>, which generates<br />& downloads QR Code.\";\n        converterElement.innerHTML = \"Making an <strong>Exchange Rate Conversion Service</strong>, which<br />calculates by actual exchange rate.\";\n        RoadMapElement.innerHTML = \"Operating <strong>RoadMap</strong>, which is<br />Web Club of my high school.\";\n    }\n}\nfunction handleExperience() {\n    const highthonElement = document.querySelector(\".highthon-element\");\n    if (window.innerWidth < 850) {\n        highthonElement.innerHTML = \"Got a <strong>Grand Prize</strong> at <strong>Highthon</strong>,<br />which is hackathon<br />of high school student.\";\n    }\n}\nfunction handleAboutMachim() {\n    const aboutMachimElement = document.querySelector(\".about-machim\");\n    if (window.innerWidth < 850) {\n        aboutMachimElement.innerHTML = \"<strong>.마침이</strong>는 <strong>Kinn</strong>이 개발한<br />Discord Bot 입니다. <br /> <strong>.마침이</strong>는 당신의 Discord<br />Server를 <strong>관리</strong>할 수 있으며, <br /> <strong>유틸리티</strong> 기능 또한 있어 최고의<br />Discord Bot 사용 경험을 제공합니다. <br /> 다재다능한 Discord Bot, <strong>.마침이</strong>를<br />지금 당신의 서버에서 사용해보세요!\";\n    }\n}\nfunction handleKjs() {\n    const aboutMeElement = document.querySelector(\".about-me\");\n    if (window.innerWidth < 850) {\n        aboutMeElement.innerHTML = \"저는 <strong>김진성</strong>이고, 학생 <strong>Prouct Manager</strong>입니다. <br /> 저는 미래 세상의 패러다임에<br />혁신을 주는 프로덕트를 만들 것이고, <br />제 프로덕트를 발전시키기 위해<br />많은 노력을 기울이고 있습니다.\";\n    }\n}\n// 포폴.tsx에 resize나 load 감지해서 handlePortfolio() 실행시키는 코드 넣기\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvaGFuZGxlVGV4dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLFNBQVNBO0lBQ0wsTUFBTUMsZUFBZUMsU0FBU0MsYUFBYSxDQUFDO0lBQzVDLE1BQU1DLGFBQWFGLFNBQVNDLGFBQWEsQ0FBQztJQUUxQyxJQUFJRSxPQUFPQyxVQUFVLEdBQUcsS0FBSztRQUN6QkwsYUFBYU0sU0FBUyxHQUNsQjtRQUNKSCxXQUFXRyxTQUFTLEdBQ2hCO0lBQ1I7QUFDSjtBQUVBLFNBQVNDO0lBQ0wsTUFBTUMsa0JBQWtCUCxTQUFTQyxhQUFhLENBQUM7SUFDL0MsTUFBTU8sWUFBWVIsU0FBU0MsYUFBYSxDQUFDO0lBQ3pDLE1BQU1RLG1CQUFtQlQsU0FBU0MsYUFBYSxDQUFDO0lBQ2hELE1BQU1TLGlCQUFpQlYsU0FBU0MsYUFBYSxDQUFDO0lBRTlDLElBQUlFLE9BQU9DLFVBQVUsR0FBRyxLQUFLO1FBQ3pCRyxnQkFBZ0JGLFNBQVMsR0FDckI7UUFDSkcsVUFBVUgsU0FBUyxHQUNmO1FBQ0pJLGlCQUFpQkosU0FBUyxHQUN0QjtRQUNKSyxlQUFlTCxTQUFTLEdBQ3BCO0lBQ1I7QUFDSjtBQUVBLFNBQVNNO0lBQ0wsTUFBTUMsa0JBQWtCWixTQUFTQyxhQUFhLENBQUM7SUFFL0MsSUFBSUUsT0FBT0MsVUFBVSxHQUFHLEtBQUs7UUFDekJRLGdCQUFnQlAsU0FBUyxHQUNyQjtJQUNSO0FBQ0o7QUFFQSxTQUFTUTtJQUNMLE1BQU1DLHFCQUFxQmQsU0FBU0MsYUFBYSxDQUFDO0lBRWxELElBQUlFLE9BQU9DLFVBQVUsR0FBRyxLQUFLO1FBQ3pCVSxtQkFBbUJULFNBQVMsR0FDeEI7SUFDUjtBQUNKO0FBRUEsU0FBU1U7SUFDTCxNQUFNQyxpQkFBaUJoQixTQUFTQyxhQUFhLENBQUM7SUFFOUMsSUFBSUUsT0FBT0MsVUFBVSxHQUFHLEtBQUs7UUFDekJZLGVBQWVYLFNBQVMsR0FDcEI7SUFDUjtBQUNKO0FBRUEsMERBQTBEO0FBT3hEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvaGFuZGxlVGV4dC5qcz83M2RkIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGhhbmRsZUFib3V0TWUoKSB7XG4gICAgY29uc3QgbW90dG9FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb3R0by10ZXh0XCIpO1xuICAgIGNvbnN0IHVzYUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVzYS1lbGVtZW50XCIpO1xuXG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgODUwKSB7XG4gICAgICAgIG1vdHRvRWxlbWVudC5pbm5lckhUTUwgPVxuICAgICAgICAgICAgJzxzdHJvbmc+XCJUaGUgYmVzdCB3YXkgdG88YnIgLz5wcmVkaWN0IHRoZSBmdXR1cmUgaXMgdG8gY3JlYXRlIGl0LlwiPC9zdHJvbmc+JztcbiAgICAgICAgdXNhRWxlbWVudC5pbm5lckhUTUwgPVxuICAgICAgICAgICAgXCI8c3Ryb25nPnRoZSBVbml0ZWQgU3RhdGVzPGJyIC8+b2YgQW1lcmljYS48L3N0cm9uZz5cIjtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVBvcnRmb2xpbygpIHtcbiAgICBjb25zdCBpbGVvbmFuZ0VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmlsZW9uYW5nLWVsZW1lbnRcIik7XG4gICAgY29uc3QgcXJFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5xci1lbGVtZW50XCIpO1xuICAgIGNvbnN0IGNvbnZlcnRlckVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnZlcnRlci1lbGVtZW50XCIpO1xuICAgIGNvbnN0IFJvYWRNYXBFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yb2FkbWFwLWVsZW1lbnRcIik7XG5cbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCA4NTApIHtcbiAgICAgICAgaWxlb25hbmdFbGVtZW50LmlubmVySFRNTCA9XG4gICAgICAgICAgICBcIk1hZGUgYW4gPHN0cm9uZz5BbGFybSBBcHA8L3N0cm9uZz4sIHdoaWNoPGJyIC8+d2FrZXMgdXAgdXNlciBieSBzZW5kaW5nPGJyIC8+cmlza3kgbWVzc2FnZSB0byBzb21lb25lLlwiO1xuICAgICAgICBxckVsZW1lbnQuaW5uZXJIVE1MID1cbiAgICAgICAgICAgIFwiTWFraW5nIGEgPHN0cm9uZz5RUiBDb2RlIEdlbmVyYXRlPGJyIC8+U2VydmljZTwvc3Ryb25nPiwgd2hpY2ggZ2VuZXJhdGVzPGJyIC8+JiBkb3dubG9hZHMgUVIgQ29kZS5cIjtcbiAgICAgICAgY29udmVydGVyRWxlbWVudC5pbm5lckhUTUwgPVxuICAgICAgICAgICAgXCJNYWtpbmcgYW4gPHN0cm9uZz5FeGNoYW5nZSBSYXRlIENvbnZlcnNpb24gU2VydmljZTwvc3Ryb25nPiwgd2hpY2g8YnIgLz5jYWxjdWxhdGVzIGJ5IGFjdHVhbCBleGNoYW5nZSByYXRlLlwiO1xuICAgICAgICBSb2FkTWFwRWxlbWVudC5pbm5lckhUTUwgPVxuICAgICAgICAgICAgXCJPcGVyYXRpbmcgPHN0cm9uZz5Sb2FkTWFwPC9zdHJvbmc+LCB3aGljaCBpczxiciAvPldlYiBDbHViIG9mIG15IGhpZ2ggc2Nob29sLlwiO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlRXhwZXJpZW5jZSgpIHtcbiAgICBjb25zdCBoaWdodGhvbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhpZ2h0aG9uLWVsZW1lbnRcIik7XG5cbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCA4NTApIHtcbiAgICAgICAgaGlnaHRob25FbGVtZW50LmlubmVySFRNTCA9XG4gICAgICAgICAgICBcIkdvdCBhIDxzdHJvbmc+R3JhbmQgUHJpemU8L3N0cm9uZz4gYXQgPHN0cm9uZz5IaWdodGhvbjwvc3Ryb25nPiw8YnIgLz53aGljaCBpcyBoYWNrYXRob248YnIgLz5vZiBoaWdoIHNjaG9vbCBzdHVkZW50LlwiO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlQWJvdXRNYWNoaW0oKSB7XG4gICAgY29uc3QgYWJvdXRNYWNoaW1FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hYm91dC1tYWNoaW1cIik7XG5cbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCA4NTApIHtcbiAgICAgICAgYWJvdXRNYWNoaW1FbGVtZW50LmlubmVySFRNTCA9XG4gICAgICAgICAgICBcIjxzdHJvbmc+LuuniOy5qOydtDwvc3Ryb25nPuuKlCA8c3Ryb25nPktpbm48L3N0cm9uZz7snbQg6rCc67Cc7ZWcPGJyIC8+RGlzY29yZCBCb3Qg7J6F64uI64ukLiA8YnIgLz4gPHN0cm9uZz4u66eI7Lmo7J20PC9zdHJvbmc+64qUIOuLueyLoOydmCBEaXNjb3JkPGJyIC8+U2VydmVy66W8IDxzdHJvbmc+6rSA66asPC9zdHJvbmc+7ZWgIOyImCDsnojsnLzrqbAsIDxiciAvPiA8c3Ryb25nPuycoO2LuOumrO2LsDwvc3Ryb25nPiDquLDriqUg65iQ7ZWcIOyeiOyWtCDstZzqs6DsnZg8YnIgLz5EaXNjb3JkIEJvdCDsgqzsmqkg6rK97ZeY7J2EIOygnOqzte2VqeuLiOuLpC4gPGJyIC8+IOuLpOyerOuLpOuKpe2VnCBEaXNjb3JkIEJvdCwgPHN0cm9uZz4u66eI7Lmo7J20PC9zdHJvbmc+66W8PGJyIC8+7KeA6riIIOuLueyLoOydmCDshJzrsoTsl5DshJwg7IKs7Jqp7ZW067O07IS47JqUIVwiO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlS2pzKCkge1xuICAgIGNvbnN0IGFib3V0TWVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hYm91dC1tZVwiKTtcblxuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDg1MCkge1xuICAgICAgICBhYm91dE1lRWxlbWVudC5pbm5lckhUTUwgPVxuICAgICAgICAgICAgXCLsoIDripQgPHN0cm9uZz7quYDsp4TshLE8L3N0cm9uZz7snbTqs6AsIO2VmeyDnSA8c3Ryb25nPlByb3VjdCBNYW5hZ2VyPC9zdHJvbmc+7J6F64uI64ukLiA8YnIgLz4g7KCA64qUIOuvuOuemCDshLjsg4HsnZgg7Yyo65+s64uk7J6E7JeQPGJyIC8+7ZiB7Iug7J2EIOyjvOuKlCDtlITroZzrjZXtirjrpbwg66eM65OkIOqyg+ydtOqzoCwgPGJyIC8+7KCcIO2UhOuhnOuNle2KuOulvCDrsJzsoITsi5ztgqTquLAg7JyE7ZW0PGJyIC8+66eO7J2AIOuFuOugpeydhCDquLDsmrjsnbTqs6Ag7J6I7Iq164uI64ukLlwiO1xuICAgIH1cbn1cblxuLy8g7Y+s7Y+0LnRzeOyXkCByZXNpemXrgpggbG9hZCDqsJDsp4DtlbTshJwgaGFuZGxlUG9ydGZvbGlvKCkg7Iuk7ZaJ7Iuc7YKk64qUIOy9lOuTnCDrhKPquLBcbmV4cG9ydCB7XG4gICAgaGFuZGxlQWJvdXRNZSxcbiAgICBoYW5kbGVQb3J0Zm9saW8sXG4gICAgaGFuZGxlRXhwZXJpZW5jZSxcbiAgICBoYW5kbGVBYm91dE1hY2hpbSxcbiAgICBoYW5kbGVLanMsXG59O1xuIl0sIm5hbWVzIjpbImhhbmRsZUFib3V0TWUiLCJtb3R0b0VsZW1lbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ1c2FFbGVtZW50Iiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySFRNTCIsImhhbmRsZVBvcnRmb2xpbyIsImlsZW9uYW5nRWxlbWVudCIsInFyRWxlbWVudCIsImNvbnZlcnRlckVsZW1lbnQiLCJSb2FkTWFwRWxlbWVudCIsImhhbmRsZUV4cGVyaWVuY2UiLCJoaWdodGhvbkVsZW1lbnQiLCJoYW5kbGVBYm91dE1hY2hpbSIsImFib3V0TWFjaGltRWxlbWVudCIsImhhbmRsZUtqcyIsImFib3V0TWVFbGVtZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/handleText.js\n"));

/***/ })

});