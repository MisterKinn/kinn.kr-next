"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/kjs/page",{

/***/ "(app-pages-browser)/./src/app/handleText.js":
/*!*******************************!*\
  !*** ./src/app/handleText.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   handleAboutMe: function() { return /* binding */ handleAboutMe; },\n/* harmony export */   handleExperience: function() { return /* binding */ handleExperience; },\n/* harmony export */   handleKjs: function() { return /* binding */ handleKjs; },\n/* harmony export */   handlePortfolio: function() { return /* binding */ handlePortfolio; },\n/* harmony export */   handleRoadMap: function() { return /* binding */ handleRoadMap; }\n/* harmony export */ });\nfunction handleAboutMe() {\n    const mottoElement = document.querySelector(\".motto-text\");\n    const usaElement = document.querySelector(\".usa-element\");\n    if (window.innerWidth < 850) {\n        mottoElement.innerHTML = '<strong>\"The best way to<br />predict the future is to create it.\"</strong>';\n        usaElement.innerHTML = \"<strong>the United States<br />of America.</strong>\";\n    }\n}\nfunction handlePortfolio() {\n    const ileonangElement = document.querySelector(\".ileonang-element\");\n    const qrElement = document.querySelector(\".qr-element\");\n    const converterElement = document.querySelector(\".converter-element\");\n    const RoadMapElement = document.querySelector(\".roadmap-element\");\n    if (window.innerWidth < 850) {\n        ileonangElement.innerHTML = \"Made an <strong>Alarm App</strong>, which<br />wakes up user by sending<br />risky message to someone.\";\n        qrElement.innerHTML = \"Making a <strong>QR Code Generate<br />Service</strong>, which generates<br />& downloads QR Code.\";\n        converterElement.innerHTML = \"Making an <strong>Exchange Rate Conversion Service</strong>, which<br />calculates by actual exchange rate.\";\n        RoadMapElement.innerHTML = \"Making official Web Page of <strong>RoadMap</strong>, which is Web Club<br />of my high school.\";\n    }\n}\nfunction handleExperience() {\n    const highthonElement = document.querySelector(\".highthon-element\");\n    if (window.innerWidth < 850) {\n        highthonElement.innerHTML = \"Got a <strong>Grand Prize</strong> at <strong>Highthon</strong>,<br />which is hackathon<br />of high school student.\";\n    }\n}\nfunction handleRoadMap() {\n    const titleElement = document.querySelector(\".title\");\n    const subTitleElement = document.querySelector(\".sub-title\");\n    if (window.innerWidth < 850) {\n        titleElement.innerHTML = \"당신도 무언가를<br />상상해본 적이<br />있나요?\";\n        subTitleElement.innerHTML = \"우리는 상상을<br />현실로 구현합니다.<br /><strong>RoadMap</strong>은 교내 유일<br />웹 개발 동아리입니다.<br /><strong>RoadMap</strong>과 함께라면<br />당신의 상상은 현실이 됩니다.\";\n    }\n}\nfunction handleKjs() {\n    const aboutMeElement = document.querySelector(\".about-me\");\n    if (window.innerWidth < 850) {\n        aboutMeElement.innerHTML = \"저는 <strong>김진성</strong>이고, 학생 <strong>Prouct Manager</strong>입니다. <br /> 저는 미래 세상의 패러다임에<br />혁신을 주는 프로덕트를 만들 것이고, <br />제 프로덕트를 발전시키기 위해 많은 노력을 기울이고 있습니다.\";\n    }\n}\n// 포폴.tsx에 resize나 load 감지해서 handlePortfolio() 실행시키는 코드 넣기\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvaGFuZGxlVGV4dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLFNBQVNBO0lBQ0wsTUFBTUMsZUFBZUMsU0FBU0MsYUFBYSxDQUFDO0lBQzVDLE1BQU1DLGFBQWFGLFNBQVNDLGFBQWEsQ0FBQztJQUUxQyxJQUFJRSxPQUFPQyxVQUFVLEdBQUcsS0FBSztRQUN6QkwsYUFBYU0sU0FBUyxHQUNsQjtRQUNKSCxXQUFXRyxTQUFTLEdBQ2hCO0lBQ1I7QUFDSjtBQUVBLFNBQVNDO0lBQ0wsTUFBTUMsa0JBQWtCUCxTQUFTQyxhQUFhLENBQUM7SUFDL0MsTUFBTU8sWUFBWVIsU0FBU0MsYUFBYSxDQUFDO0lBQ3pDLE1BQU1RLG1CQUFtQlQsU0FBU0MsYUFBYSxDQUFDO0lBQ2hELE1BQU1TLGlCQUFpQlYsU0FBU0MsYUFBYSxDQUFDO0lBRTlDLElBQUlFLE9BQU9DLFVBQVUsR0FBRyxLQUFLO1FBQ3pCRyxnQkFBZ0JGLFNBQVMsR0FDckI7UUFDSkcsVUFBVUgsU0FBUyxHQUNmO1FBQ0pJLGlCQUFpQkosU0FBUyxHQUN0QjtRQUNKSyxlQUFlTCxTQUFTLEdBQ3BCO0lBQ1I7QUFDSjtBQUVBLFNBQVNNO0lBQ0wsTUFBTUMsa0JBQWtCWixTQUFTQyxhQUFhLENBQUM7SUFFL0MsSUFBSUUsT0FBT0MsVUFBVSxHQUFHLEtBQUs7UUFDekJRLGdCQUFnQlAsU0FBUyxHQUNyQjtJQUNSO0FBQ0o7QUFFQSxTQUFTUTtJQUNMLE1BQU1DLGVBQWVkLFNBQVNDLGFBQWEsQ0FBQztJQUM1QyxNQUFNYyxrQkFBa0JmLFNBQVNDLGFBQWEsQ0FBQztJQUUvQyxJQUFJRSxPQUFPQyxVQUFVLEdBQUcsS0FBSztRQUN6QlUsYUFBYVQsU0FBUyxHQUNsQjtRQUNKVSxnQkFBZ0JWLFNBQVMsR0FDckI7SUFDUjtBQUNKO0FBRUEsU0FBU1c7SUFDTCxNQUFNQyxpQkFBaUJqQixTQUFTQyxhQUFhLENBQUM7SUFFOUMsSUFBSUUsT0FBT0MsVUFBVSxHQUFHLEtBQUs7UUFDekJhLGVBQWVaLFNBQVMsR0FDcEI7SUFDUjtBQUNKO0FBRUEsMERBQTBEO0FBT3hEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvaGFuZGxlVGV4dC5qcz83M2RkIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGhhbmRsZUFib3V0TWUoKSB7XG4gICAgY29uc3QgbW90dG9FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb3R0by10ZXh0XCIpO1xuICAgIGNvbnN0IHVzYUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVzYS1lbGVtZW50XCIpO1xuXG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgODUwKSB7XG4gICAgICAgIG1vdHRvRWxlbWVudC5pbm5lckhUTUwgPVxuICAgICAgICAgICAgJzxzdHJvbmc+XCJUaGUgYmVzdCB3YXkgdG88YnIgLz5wcmVkaWN0IHRoZSBmdXR1cmUgaXMgdG8gY3JlYXRlIGl0LlwiPC9zdHJvbmc+JztcbiAgICAgICAgdXNhRWxlbWVudC5pbm5lckhUTUwgPVxuICAgICAgICAgICAgXCI8c3Ryb25nPnRoZSBVbml0ZWQgU3RhdGVzPGJyIC8+b2YgQW1lcmljYS48L3N0cm9uZz5cIjtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVBvcnRmb2xpbygpIHtcbiAgICBjb25zdCBpbGVvbmFuZ0VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmlsZW9uYW5nLWVsZW1lbnRcIik7XG4gICAgY29uc3QgcXJFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5xci1lbGVtZW50XCIpO1xuICAgIGNvbnN0IGNvbnZlcnRlckVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnZlcnRlci1lbGVtZW50XCIpO1xuICAgIGNvbnN0IFJvYWRNYXBFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yb2FkbWFwLWVsZW1lbnRcIik7XG5cbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCA4NTApIHtcbiAgICAgICAgaWxlb25hbmdFbGVtZW50LmlubmVySFRNTCA9XG4gICAgICAgICAgICBcIk1hZGUgYW4gPHN0cm9uZz5BbGFybSBBcHA8L3N0cm9uZz4sIHdoaWNoPGJyIC8+d2FrZXMgdXAgdXNlciBieSBzZW5kaW5nPGJyIC8+cmlza3kgbWVzc2FnZSB0byBzb21lb25lLlwiO1xuICAgICAgICBxckVsZW1lbnQuaW5uZXJIVE1MID1cbiAgICAgICAgICAgIFwiTWFraW5nIGEgPHN0cm9uZz5RUiBDb2RlIEdlbmVyYXRlPGJyIC8+U2VydmljZTwvc3Ryb25nPiwgd2hpY2ggZ2VuZXJhdGVzPGJyIC8+JiBkb3dubG9hZHMgUVIgQ29kZS5cIjtcbiAgICAgICAgY29udmVydGVyRWxlbWVudC5pbm5lckhUTUwgPVxuICAgICAgICAgICAgXCJNYWtpbmcgYW4gPHN0cm9uZz5FeGNoYW5nZSBSYXRlIENvbnZlcnNpb24gU2VydmljZTwvc3Ryb25nPiwgd2hpY2g8YnIgLz5jYWxjdWxhdGVzIGJ5IGFjdHVhbCBleGNoYW5nZSByYXRlLlwiO1xuICAgICAgICBSb2FkTWFwRWxlbWVudC5pbm5lckhUTUwgPVxuICAgICAgICAgICAgXCJNYWtpbmcgb2ZmaWNpYWwgV2ViIFBhZ2Ugb2YgPHN0cm9uZz5Sb2FkTWFwPC9zdHJvbmc+LCB3aGljaCBpcyBXZWIgQ2x1YjxiciAvPm9mIG15IGhpZ2ggc2Nob29sLlwiO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlRXhwZXJpZW5jZSgpIHtcbiAgICBjb25zdCBoaWdodGhvbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhpZ2h0aG9uLWVsZW1lbnRcIik7XG5cbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCA4NTApIHtcbiAgICAgICAgaGlnaHRob25FbGVtZW50LmlubmVySFRNTCA9XG4gICAgICAgICAgICBcIkdvdCBhIDxzdHJvbmc+R3JhbmQgUHJpemU8L3N0cm9uZz4gYXQgPHN0cm9uZz5IaWdodGhvbjwvc3Ryb25nPiw8YnIgLz53aGljaCBpcyBoYWNrYXRob248YnIgLz5vZiBoaWdoIHNjaG9vbCBzdHVkZW50LlwiO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlUm9hZE1hcCgpIHtcbiAgICBjb25zdCB0aXRsZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRpdGxlXCIpO1xuICAgIGNvbnN0IHN1YlRpdGxlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3ViLXRpdGxlXCIpO1xuXG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgODUwKSB7XG4gICAgICAgIHRpdGxlRWxlbWVudC5pbm5lckhUTUwgPVxuICAgICAgICAgICAgXCLri7nsi6Drj4Qg66y07Ja46rCA66W8PGJyIC8+7IOB7IOB7ZW067O4IOyggeydtDxiciAvPuyeiOuCmOyalD9cIjtcbiAgICAgICAgc3ViVGl0bGVFbGVtZW50LmlubmVySFRNTCA9XG4gICAgICAgICAgICBcIuyasOumrOuKlCDsg4Hsg4HsnYQ8YnIgLz7tmITsi6TroZwg6rWs7ZiE7ZWp64uI64ukLjxiciAvPjxzdHJvbmc+Um9hZE1hcDwvc3Ryb25nPuydgCDqtZDrgrQg7Jyg7J28PGJyIC8+7Ju5IOqwnOuwnCDrj5nslYTrpqzsnoXri4jri6QuPGJyIC8+PHN0cm9uZz5Sb2FkTWFwPC9zdHJvbmc+6rO8IO2VqOq7mOudvOuptDxiciAvPuuLueyLoOydmCDsg4Hsg4HsnYAg7ZiE7Iuk7J20IOuQqeuLiOuLpC5cIjtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUtqcygpIHtcbiAgICBjb25zdCBhYm91dE1lRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWJvdXQtbWVcIik7XG5cbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCA4NTApIHtcbiAgICAgICAgYWJvdXRNZUVsZW1lbnQuaW5uZXJIVE1MID1cbiAgICAgICAgICAgIFwi7KCA64qUIDxzdHJvbmc+6rmA7KeE7ISxPC9zdHJvbmc+7J206rOgLCDtlZnsg50gPHN0cm9uZz5Qcm91Y3QgTWFuYWdlcjwvc3Ryb25nPuyeheuLiOuLpC4gPGJyIC8+IOyggOuKlCDrr7jrnpgg7IS47IOB7J2YIO2MqOufrOuLpOyehOyXkDxiciAvPu2YgeyLoOydhCDso7zripQg7ZSE66Gc642V7Yq466W8IOunjOuTpCDqsoPsnbTqs6AsIDxiciAvPuygnCDtlITroZzrjZXtirjrpbwg67Cc7KCE7Iuc7YKk6riwIOychO2VtCDrp47snYAg64W466Cl7J2EIOq4sOyauOydtOqzoCDsnojsirXri4jri6QuXCI7XG4gICAgfVxufVxuXG4vLyDtj6ztj7QudHN47JeQIHJlc2l6ZeuCmCBsb2FkIOqwkOyngO2VtOyEnCBoYW5kbGVQb3J0Zm9saW8oKSDsi6Ttlonsi5ztgqTripQg7L2U65OcIOuEo+q4sFxuZXhwb3J0IHtcbiAgICBoYW5kbGVBYm91dE1lLFxuICAgIGhhbmRsZVBvcnRmb2xpbyxcbiAgICBoYW5kbGVFeHBlcmllbmNlLFxuICAgIGhhbmRsZVJvYWRNYXAsXG4gICAgaGFuZGxlS2pzLFxufTtcbiJdLCJuYW1lcyI6WyJoYW5kbGVBYm91dE1lIiwibW90dG9FbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidXNhRWxlbWVudCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhUTUwiLCJoYW5kbGVQb3J0Zm9saW8iLCJpbGVvbmFuZ0VsZW1lbnQiLCJxckVsZW1lbnQiLCJjb252ZXJ0ZXJFbGVtZW50IiwiUm9hZE1hcEVsZW1lbnQiLCJoYW5kbGVFeHBlcmllbmNlIiwiaGlnaHRob25FbGVtZW50IiwiaGFuZGxlUm9hZE1hcCIsInRpdGxlRWxlbWVudCIsInN1YlRpdGxlRWxlbWVudCIsImhhbmRsZUtqcyIsImFib3V0TWVFbGVtZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/handleText.js\n"));

/***/ })

});