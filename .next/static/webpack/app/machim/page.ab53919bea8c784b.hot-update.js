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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   handleAboutMachim: function() { return /* binding */ handleAboutMachim; },\n/* harmony export */   handleAboutMe: function() { return /* binding */ handleAboutMe; },\n/* harmony export */   handleExperience: function() { return /* binding */ handleExperience; },\n/* harmony export */   handleKjs: function() { return /* binding */ handleKjs; },\n/* harmony export */   handlePortfolio: function() { return /* binding */ handlePortfolio; }\n/* harmony export */ });\nfunction handleAboutMe() {\n    const mottoElement = document.querySelector(\".motto-text\");\n    const usaElement = document.querySelector(\".usa-element\");\n    if (window.innerWidth < 850) {\n        mottoElement.innerHTML = '<strong>\"The best way to<br />predict the future is to create it.\"</strong>';\n        usaElement.innerHTML = \"<strong>the United States<br />of America.</strong>\";\n    }\n}\nfunction handlePortfolio() {\n    const ileonangElement = document.querySelector(\".ileonang-element\");\n    const qrElement = document.querySelector(\".qr-element\");\n    const converterElement = document.querySelector(\".converter-element\");\n    const RoadMapElement = document.querySelector(\".roadmap-element\");\n    if (window.innerWidth < 850) {\n        ileonangElement.innerHTML = \"Made an <strong>Alarm App</strong>, which<br />wakes up user by sending<br />risky message to someone.\";\n        qrElement.innerHTML = \"Making a <strong>QR Code Generate<br />Service</strong>, which generates<br />& downloads QR Code.\";\n        converterElement.innerHTML = \"Making an <strong>Exchange Rate Conversion Service</strong>, which<br />calculates by actual exchange rate.\";\n        RoadMapElement.innerHTML = \"Operating <strong>RoadMap</strong>, which is<br />Web Club of my high school.\";\n    }\n}\nfunction handleExperience() {\n    const highthonElement = document.querySelector(\".highthon-element\");\n    if (window.innerWidth < 850) {\n        highthonElement.innerHTML = \"Got a <strong>Grand Prize</strong> at <strong>Highthon</strong>,<br />which is hackathon<br />of high school student.\";\n    }\n}\nfunction handleAboutMachim() {\n    const aboutMachimElement = document.querySelector(\".about-machim\");\n    if (window.innerWidth < 850) {\n        aboutMachimElement.innerHTML = \"<strong>.마침이</strong>는 <strong>Kinn</strong>이 개발한<br />Discord Bot 입니다. <br /> <strong>.마침이</strong>는 당신의 Discord<br />Server를 <strong>관리</strong>할 수 있으며, <br /> <strong>유틸리티</strong> 기능 또한 있어 최고의<br />Discord Bot 사용 경험을 제공합니다. <br /> 다재다능한 Discord Bot, <strong>.마침이</strong>를<br />지금 당신의 서버에서 사용해보세요!\";\n    }\n}\nfunction handleKjs() {\n    const aboutMeElement = document.querySelector(\".about-me\");\n    if (window.innerWidth < 850) {\n        aboutMeElement.innerHTML = \"저는 <strong>김진성</strong>이고, 학생 <strong>Prouct<br />Manager</strong>입니다. <br /> 저는 미래 세상의 패러다임에<br />혁신을 주는 프로덕트를 만들 것이고, <br />제 프로덕트를 발전시키기 위해<br />많은 노력을 기울이고 있습니다.\";\n    }\n}\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvaGFuZGxlVGV4dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLFNBQVNBO0lBQ0wsTUFBTUMsZUFBZUMsU0FBU0MsYUFBYSxDQUFDO0lBQzVDLE1BQU1DLGFBQWFGLFNBQVNDLGFBQWEsQ0FBQztJQUUxQyxJQUFJRSxPQUFPQyxVQUFVLEdBQUcsS0FBSztRQUN6QkwsYUFBYU0sU0FBUyxHQUNsQjtRQUNKSCxXQUFXRyxTQUFTLEdBQ2hCO0lBQ1I7QUFDSjtBQUVBLFNBQVNDO0lBQ0wsTUFBTUMsa0JBQWtCUCxTQUFTQyxhQUFhLENBQUM7SUFDL0MsTUFBTU8sWUFBWVIsU0FBU0MsYUFBYSxDQUFDO0lBQ3pDLE1BQU1RLG1CQUFtQlQsU0FBU0MsYUFBYSxDQUFDO0lBQ2hELE1BQU1TLGlCQUFpQlYsU0FBU0MsYUFBYSxDQUFDO0lBRTlDLElBQUlFLE9BQU9DLFVBQVUsR0FBRyxLQUFLO1FBQ3pCRyxnQkFBZ0JGLFNBQVMsR0FDckI7UUFDSkcsVUFBVUgsU0FBUyxHQUNmO1FBQ0pJLGlCQUFpQkosU0FBUyxHQUN0QjtRQUNKSyxlQUFlTCxTQUFTLEdBQ3BCO0lBQ1I7QUFDSjtBQUVBLFNBQVNNO0lBQ0wsTUFBTUMsa0JBQWtCWixTQUFTQyxhQUFhLENBQUM7SUFFL0MsSUFBSUUsT0FBT0MsVUFBVSxHQUFHLEtBQUs7UUFDekJRLGdCQUFnQlAsU0FBUyxHQUNyQjtJQUNSO0FBQ0o7QUFFQSxTQUFTUTtJQUNMLE1BQU1DLHFCQUFxQmQsU0FBU0MsYUFBYSxDQUFDO0lBRWxELElBQUlFLE9BQU9DLFVBQVUsR0FBRyxLQUFLO1FBQ3pCVSxtQkFBbUJULFNBQVMsR0FDeEI7SUFDUjtBQUNKO0FBRUEsU0FBU1U7SUFDTCxNQUFNQyxpQkFBaUJoQixTQUFTQyxhQUFhLENBQUM7SUFFOUMsSUFBSUUsT0FBT0MsVUFBVSxHQUFHLEtBQUs7UUFDekJZLGVBQWVYLFNBQVMsR0FDcEI7SUFDUjtBQUNKO0FBUUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9oYW5kbGVUZXh0LmpzPzczZGQiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gaGFuZGxlQWJvdXRNZSgpIHtcbiAgICBjb25zdCBtb3R0b0VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vdHRvLXRleHRcIik7XG4gICAgY29uc3QgdXNhRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudXNhLWVsZW1lbnRcIik7XG5cbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCA4NTApIHtcbiAgICAgICAgbW90dG9FbGVtZW50LmlubmVySFRNTCA9XG4gICAgICAgICAgICAnPHN0cm9uZz5cIlRoZSBiZXN0IHdheSB0bzxiciAvPnByZWRpY3QgdGhlIGZ1dHVyZSBpcyB0byBjcmVhdGUgaXQuXCI8L3N0cm9uZz4nO1xuICAgICAgICB1c2FFbGVtZW50LmlubmVySFRNTCA9XG4gICAgICAgICAgICBcIjxzdHJvbmc+dGhlIFVuaXRlZCBTdGF0ZXM8YnIgLz5vZiBBbWVyaWNhLjwvc3Ryb25nPlwiO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlUG9ydGZvbGlvKCkge1xuICAgIGNvbnN0IGlsZW9uYW5nRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaWxlb25hbmctZWxlbWVudFwiKTtcbiAgICBjb25zdCBxckVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnFyLWVsZW1lbnRcIik7XG4gICAgY29uc3QgY29udmVydGVyRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udmVydGVyLWVsZW1lbnRcIik7XG4gICAgY29uc3QgUm9hZE1hcEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJvYWRtYXAtZWxlbWVudFwiKTtcblxuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDg1MCkge1xuICAgICAgICBpbGVvbmFuZ0VsZW1lbnQuaW5uZXJIVE1MID1cbiAgICAgICAgICAgIFwiTWFkZSBhbiA8c3Ryb25nPkFsYXJtIEFwcDwvc3Ryb25nPiwgd2hpY2g8YnIgLz53YWtlcyB1cCB1c2VyIGJ5IHNlbmRpbmc8YnIgLz5yaXNreSBtZXNzYWdlIHRvIHNvbWVvbmUuXCI7XG4gICAgICAgIHFyRWxlbWVudC5pbm5lckhUTUwgPVxuICAgICAgICAgICAgXCJNYWtpbmcgYSA8c3Ryb25nPlFSIENvZGUgR2VuZXJhdGU8YnIgLz5TZXJ2aWNlPC9zdHJvbmc+LCB3aGljaCBnZW5lcmF0ZXM8YnIgLz4mIGRvd25sb2FkcyBRUiBDb2RlLlwiO1xuICAgICAgICBjb252ZXJ0ZXJFbGVtZW50LmlubmVySFRNTCA9XG4gICAgICAgICAgICBcIk1ha2luZyBhbiA8c3Ryb25nPkV4Y2hhbmdlIFJhdGUgQ29udmVyc2lvbiBTZXJ2aWNlPC9zdHJvbmc+LCB3aGljaDxiciAvPmNhbGN1bGF0ZXMgYnkgYWN0dWFsIGV4Y2hhbmdlIHJhdGUuXCI7XG4gICAgICAgIFJvYWRNYXBFbGVtZW50LmlubmVySFRNTCA9XG4gICAgICAgICAgICBcIk9wZXJhdGluZyA8c3Ryb25nPlJvYWRNYXA8L3N0cm9uZz4sIHdoaWNoIGlzPGJyIC8+V2ViIENsdWIgb2YgbXkgaGlnaCBzY2hvb2wuXCI7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBoYW5kbGVFeHBlcmllbmNlKCkge1xuICAgIGNvbnN0IGhpZ2h0aG9uRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGlnaHRob24tZWxlbWVudFwiKTtcblxuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDg1MCkge1xuICAgICAgICBoaWdodGhvbkVsZW1lbnQuaW5uZXJIVE1MID1cbiAgICAgICAgICAgIFwiR290IGEgPHN0cm9uZz5HcmFuZCBQcml6ZTwvc3Ryb25nPiBhdCA8c3Ryb25nPkhpZ2h0aG9uPC9zdHJvbmc+LDxiciAvPndoaWNoIGlzIGhhY2thdGhvbjxiciAvPm9mIGhpZ2ggc2Nob29sIHN0dWRlbnQuXCI7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBoYW5kbGVBYm91dE1hY2hpbSgpIHtcbiAgICBjb25zdCBhYm91dE1hY2hpbUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFib3V0LW1hY2hpbVwiKTtcblxuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDg1MCkge1xuICAgICAgICBhYm91dE1hY2hpbUVsZW1lbnQuaW5uZXJIVE1MID1cbiAgICAgICAgICAgIFwiPHN0cm9uZz4u66eI7Lmo7J20PC9zdHJvbmc+64qUIDxzdHJvbmc+S2lubjwvc3Ryb25nPuydtCDqsJzrsJztlZw8YnIgLz5EaXNjb3JkIEJvdCDsnoXri4jri6QuIDxiciAvPiA8c3Ryb25nPi7rp4jsuajsnbQ8L3N0cm9uZz7ripQg64u57Iug7J2YIERpc2NvcmQ8YnIgLz5TZXJ2ZXLrpbwgPHN0cm9uZz7qtIDrpqw8L3N0cm9uZz7tlaAg7IiYIOyeiOycvOupsCwgPGJyIC8+IDxzdHJvbmc+7Jyg7Yu466as7YuwPC9zdHJvbmc+IOq4sOuKpSDrmJDtlZwg7J6I7Ja0IOy1nOqzoOydmDxiciAvPkRpc2NvcmQgQm90IOyCrOyaqSDqsr3tl5jsnYQg7KCc6rO17ZWp64uI64ukLiA8YnIgLz4g64uk7J6s64uk64ql7ZWcIERpc2NvcmQgQm90LCA8c3Ryb25nPi7rp4jsuajsnbQ8L3N0cm9uZz7rpbw8YnIgLz7sp4DquIgg64u57Iug7J2YIOyEnOuyhOyXkOyEnCDsgqzsmqntlbTrs7TshLjsmpQhXCI7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBoYW5kbGVLanMoKSB7XG4gICAgY29uc3QgYWJvdXRNZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFib3V0LW1lXCIpO1xuXG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgODUwKSB7XG4gICAgICAgIGFib3V0TWVFbGVtZW50LmlubmVySFRNTCA9XG4gICAgICAgICAgICBcIuyggOuKlCA8c3Ryb25nPuq5gOynhOyEsTwvc3Ryb25nPuydtOqzoCwg7ZWZ7IOdIDxzdHJvbmc+UHJvdWN0PGJyIC8+TWFuYWdlcjwvc3Ryb25nPuyeheuLiOuLpC4gPGJyIC8+IOyggOuKlCDrr7jrnpgg7IS47IOB7J2YIO2MqOufrOuLpOyehOyXkDxiciAvPu2YgeyLoOydhCDso7zripQg7ZSE66Gc642V7Yq466W8IOunjOuTpCDqsoPsnbTqs6AsIDxiciAvPuygnCDtlITroZzrjZXtirjrpbwg67Cc7KCE7Iuc7YKk6riwIOychO2VtDxiciAvPuunjuydgCDrhbjroKXsnYQg6riw7Jq47J206rOgIOyeiOyKteuLiOuLpC5cIjtcbiAgICB9XG59XG5cbmV4cG9ydCB7XG4gICAgaGFuZGxlQWJvdXRNZSxcbiAgICBoYW5kbGVQb3J0Zm9saW8sXG4gICAgaGFuZGxlRXhwZXJpZW5jZSxcbiAgICBoYW5kbGVBYm91dE1hY2hpbSxcbiAgICBoYW5kbGVLanMsXG59O1xuIl0sIm5hbWVzIjpbImhhbmRsZUFib3V0TWUiLCJtb3R0b0VsZW1lbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ1c2FFbGVtZW50Iiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySFRNTCIsImhhbmRsZVBvcnRmb2xpbyIsImlsZW9uYW5nRWxlbWVudCIsInFyRWxlbWVudCIsImNvbnZlcnRlckVsZW1lbnQiLCJSb2FkTWFwRWxlbWVudCIsImhhbmRsZUV4cGVyaWVuY2UiLCJoaWdodGhvbkVsZW1lbnQiLCJoYW5kbGVBYm91dE1hY2hpbSIsImFib3V0TWFjaGltRWxlbWVudCIsImhhbmRsZUtqcyIsImFib3V0TWVFbGVtZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/handleText.js\n"));

/***/ })

});