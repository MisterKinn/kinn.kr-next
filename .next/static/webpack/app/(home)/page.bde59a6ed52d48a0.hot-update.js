"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(home)/page",{

/***/ "(app-pages-browser)/./src/components/home/Home.tsx":
/*!**************************************!*\
  !*** ./src/components/home/Home.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/style.css */ \"(app-pages-browser)/./src/styles/style.css\");\n/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! aos */ \"(app-pages-browser)/./node_modules/aos/dist/aos.js\");\n/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_aos_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/aos.css */ \"(app-pages-browser)/./src/styles/aos.css\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ \"(app-pages-browser)/./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n    @media only screen and (max-width: 800px) {\\n        .kinn {\\n            font-size: 6em;\\n        }\\n\\n        .introduce {\\n            font-size: 2em;\\n        }\\n\\n        .wave {\\n            margin-top: -1em;\\n        }\\n    }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst MobileHome = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div(_templateObject());\n_c = MobileHome;\nfunction Home() {\n    _s();\n    const [imageSrc, setImageSrc] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"img/kinn-banner.png\");\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        aos__WEBPACK_IMPORTED_MODULE_4___default().init({\n            duration: 1000\n        });\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const handleResize = ()=>{\n            const width = window.innerWidth;\n            if (width <= 1000) {\n                setImageSrc(\"img/kinn-banner-mobile.jpg\");\n            } else {\n                setImageSrc(\"img/kinn-banner.png\");\n            }\n        };\n        handleResize();\n        if (window.performance) {\n            if (performance.navigation.type === 1) {\n                // Detect Refresh\n                handleResize();\n            }\n        }\n        window.addEventListener(\"resize\", handleResize);\n        return ()=>{\n            window.removeEventListener(\"resize\", handleResize);\n        };\n    }, []);\n    const arrowRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const scrollDown = ()=>{\n        window.scrollTo({\n            top: 1000,\n            behavior: \"smooth\"\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (arrowRef.current) {\n            arrowRef.current.addEventListener(\"click\", scrollDown);\n        }\n        return ()=>{\n            if (arrowRef.current) {\n                arrowRef.current.removeEventListener(\"click\", scrollDown);\n            }\n        };\n    }, [\n        arrowRef,\n        scrollDown\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        id: \"home\",\n        className: \"body\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(MobileHome, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                    src: imageSrc,\n                    className: \"header-img\"\n                }, void 0, false, {\n                    fileName: \"/Users/kinn/Desktop/kinn-kr/src/components/home/Home.tsx\",\n                    lineNumber: 78,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"header-container\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                            className: \"hello\",\n                            \"data-aos\": \"fade-up\",\n                            children: \"Hello, I'm\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kinn/Desktop/kinn-kr/src/components/home/Home.tsx\",\n                            lineNumber: 80,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                            className: \"kinn\",\n                            \"data-aos\": \"fade-up\",\n                            children: \"Kinn\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kinn/Desktop/kinn-kr/src/components/home/Home.tsx\",\n                            lineNumber: 83,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"introduce\",\n                                children: [\n                                    \"Nice to meet you!\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                                        loading: \"lazy\",\n                                        draggable: \"false\",\n                                        src: \"img/wave.png\",\n                                        className: \"wave\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kinn/Desktop/kinn-kr/src/components/home/Home.tsx\",\n                                        lineNumber: 89,\n                                        columnNumber: 29\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/kinn/Desktop/kinn-kr/src/components/home/Home.tsx\",\n                                lineNumber: 87,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/kinn/Desktop/kinn-kr/src/components/home/Home.tsx\",\n                            lineNumber: 86,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                            loading: \"lazy\",\n                            src: \"img/arrow.png\",\n                            className: \"arrow\",\n                            ref: arrowRef\n                        }, void 0, false, {\n                            fileName: \"/Users/kinn/Desktop/kinn-kr/src/components/home/Home.tsx\",\n                            lineNumber: 97,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kinn/Desktop/kinn-kr/src/components/home/Home.tsx\",\n                    lineNumber: 79,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/kinn/Desktop/kinn-kr/src/components/home/Home.tsx\",\n            lineNumber: 77,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/kinn/Desktop/kinn-kr/src/components/home/Home.tsx\",\n        lineNumber: 76,\n        columnNumber: 9\n    }, this);\n}\n_s(Home, \"clHpjVpj8BVWY6atpbNuJtLz/VM=\");\n_c1 = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c, _c1;\n$RefreshReg$(_c, \"MobileHome\");\n$RefreshReg$(_c1, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2hvbWUvSG9tZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNvRDtBQUNwQjtBQUNWO0FBQ1E7QUFDUztBQUV2QyxNQUFNSyxhQUFhRCx5REFBTUEsQ0FBQ0UsR0FBRztLQUF2QkQ7QUFnQk4sU0FBU0U7O0lBQ0wsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdULCtDQUFRQSxDQUFDO0lBRXpDQyxnREFBU0EsQ0FBQztRQUNORSwrQ0FBUSxDQUFDO1lBQ0xRLFVBQVU7UUFDZDtJQUNKLEdBQUcsRUFBRTtJQUVMVixnREFBU0EsQ0FBQztRQUNOLE1BQU1XLGVBQWU7WUFDakIsTUFBTUMsUUFBUUMsT0FBT0MsVUFBVTtZQUMvQixJQUFJRixTQUFTLE1BQU07Z0JBQ2ZKLFlBQVk7WUFDaEIsT0FBTztnQkFDSEEsWUFBWTtZQUNoQjtRQUNKO1FBQ0FHO1FBRUEsSUFBSUUsT0FBT0UsV0FBVyxFQUFFO1lBQ3BCLElBQUlBLFlBQVlDLFVBQVUsQ0FBQ0MsSUFBSSxLQUFLLEdBQUc7Z0JBQ25DLGlCQUFpQjtnQkFDakJOO1lBQ0o7UUFDSjtRQUNBRSxPQUFPSyxnQkFBZ0IsQ0FBQyxVQUFVUDtRQUVsQyxPQUFPO1lBQ0hFLE9BQU9NLG1CQUFtQixDQUFDLFVBQVVSO1FBQ3pDO0lBQ0osR0FBRyxFQUFFO0lBRUwsTUFBTVMsV0FBV25CLDZDQUFNQSxDQUFtQjtJQUUxQyxNQUFNb0IsYUFBYTtRQUNmUixPQUFPUyxRQUFRLENBQUM7WUFBRUMsS0FBSztZQUFNQyxVQUFVO1FBQVM7SUFDcEQ7SUFFQXhCLGdEQUFTQSxDQUFDO1FBQ04sSUFBSW9CLFNBQVNLLE9BQU8sRUFBRTtZQUNsQkwsU0FBU0ssT0FBTyxDQUFDUCxnQkFBZ0IsQ0FBQyxTQUFTRztRQUMvQztRQUVBLE9BQU87WUFDSCxJQUFJRCxTQUFTSyxPQUFPLEVBQUU7Z0JBQ2xCTCxTQUFTSyxPQUFPLENBQUNOLG1CQUFtQixDQUFDLFNBQVNFO1lBQ2xEO1FBQ0o7SUFDSixHQUFHO1FBQUNEO1FBQVVDO0tBQVc7SUFFekIscUJBQ0ksOERBQUNoQjtRQUFJcUIsSUFBRztRQUFPQyxXQUFVO2tCQUNyQiw0RUFBQ3ZCOzs4QkFDRyw4REFBQ3dCO29CQUFJQyxLQUFLdEI7b0JBQVVvQixXQUFVOzs7Ozs7OEJBQzlCLDhEQUFDdEI7b0JBQUlzQixXQUFVOztzQ0FDWCw4REFBQ0c7NEJBQUdILFdBQVU7NEJBQVFJLFlBQVM7c0NBQVU7Ozs7OztzQ0FHekMsOERBQUNDOzRCQUFHTCxXQUFVOzRCQUFPSSxZQUFTO3NDQUFVOzs7Ozs7c0NBR3hDLDhEQUFDMUI7c0NBQ0csNEVBQUNBO2dDQUFJc0IsV0FBVTs7b0NBQVk7a0RBRXZCLDhEQUFDQzt3Q0FDR0ssU0FBUTt3Q0FDUkMsV0FBVTt3Q0FDVkwsS0FBSTt3Q0FDSkYsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBSXRCLDhEQUFDQzs0QkFDR0ssU0FBUTs0QkFDUkosS0FBSTs0QkFDSkYsV0FBVTs0QkFDVlEsS0FBS2Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTdCO0dBbkZTZDtNQUFBQTtBQXFGVCwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9ob21lL0hvbWUudHN4P2UyOWYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBcIi4uLy4uL3N0eWxlcy9zdHlsZS5jc3NcIjtcbmltcG9ydCBBT1MgZnJvbSBcImFvc1wiO1xuaW1wb3J0IFwiLi4vLi4vc3R5bGVzL2Fvcy5jc3NcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmNvbnN0IE1vYmlsZUhvbWUgPSBzdHlsZWQuZGl2YFxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgICAgICAgLmtpbm4ge1xuICAgICAgICAgICAgZm9udC1zaXplOiA2ZW07XG4gICAgICAgIH1cblxuICAgICAgICAuaW50cm9kdWNlIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLndhdmUge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTFlbTtcbiAgICAgICAgfVxuICAgIH1cbmA7XG5cbmZ1bmN0aW9uIEhvbWUoKSB7XG4gICAgY29uc3QgW2ltYWdlU3JjLCBzZXRJbWFnZVNyY10gPSB1c2VTdGF0ZShcImltZy9raW5uLWJhbm5lci5wbmdcIik7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBBT1MuaW5pdCh7XG4gICAgICAgICAgICBkdXJhdGlvbjogMTAwMCxcbiAgICAgICAgfSk7XG4gICAgfSwgW10pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgaGFuZGxlUmVzaXplID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgICAgIGlmICh3aWR0aCA8PSAxMDAwKSB7XG4gICAgICAgICAgICAgICAgc2V0SW1hZ2VTcmMoXCJpbWcva2lubi1iYW5uZXItbW9iaWxlLmpwZ1wiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2V0SW1hZ2VTcmMoXCJpbWcva2lubi1iYW5uZXIucG5nXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBoYW5kbGVSZXNpemUoKTtcblxuICAgICAgICBpZiAod2luZG93LnBlcmZvcm1hbmNlKSB7XG4gICAgICAgICAgICBpZiAocGVyZm9ybWFuY2UubmF2aWdhdGlvbi50eXBlID09PSAxKSB7XG4gICAgICAgICAgICAgICAgLy8gRGV0ZWN0IFJlZnJlc2hcbiAgICAgICAgICAgICAgICBoYW5kbGVSZXNpemUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpO1xuXG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpO1xuICAgICAgICB9O1xuICAgIH0sIFtdKTtcblxuICAgIGNvbnN0IGFycm93UmVmID0gdXNlUmVmPEhUTUxJbWFnZUVsZW1lbnQ+KG51bGwpO1xuXG4gICAgY29uc3Qgc2Nyb2xsRG93biA9ICgpID0+IHtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKHsgdG9wOiAxMDAwLCBiZWhhdmlvcjogXCJzbW9vdGhcIiB9KTtcbiAgICB9O1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKGFycm93UmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIGFycm93UmVmLmN1cnJlbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNjcm9sbERvd24pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGlmIChhcnJvd1JlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgYXJyb3dSZWYuY3VycmVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2Nyb2xsRG93bik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfSwgW2Fycm93UmVmLCBzY3JvbGxEb3duXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGlkPVwiaG9tZVwiIGNsYXNzTmFtZT1cImJvZHlcIj5cbiAgICAgICAgICAgIDxNb2JpbGVIb21lPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZVNyY30gY2xhc3NOYW1lPVwiaGVhZGVyLWltZ1wiIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJoZWxsb1wiIGRhdGEtYW9zPVwiZmFkZS11cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgSGVsbG8sIEknbVxuICAgICAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwia2lublwiIGRhdGEtYW9zPVwiZmFkZS11cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgS2lublxuICAgICAgICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnRyb2R1Y2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBOaWNlIHRvIG1lZXQgeW91IVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZz1cImxhenlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcmFnZ2FibGU9XCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImltZy93YXZlLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIndhdmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc9XCJsYXp5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImltZy9hcnJvdy5wbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXJyb3dcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXthcnJvd1JlZn1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvTW9iaWxlSG9tZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsIkFPUyIsInN0eWxlZCIsIk1vYmlsZUhvbWUiLCJkaXYiLCJIb21lIiwiaW1hZ2VTcmMiLCJzZXRJbWFnZVNyYyIsImluaXQiLCJkdXJhdGlvbiIsImhhbmRsZVJlc2l6ZSIsIndpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsInBlcmZvcm1hbmNlIiwibmF2aWdhdGlvbiIsInR5cGUiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFycm93UmVmIiwic2Nyb2xsRG93biIsInNjcm9sbFRvIiwidG9wIiwiYmVoYXZpb3IiLCJjdXJyZW50IiwiaWQiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJoMiIsImRhdGEtYW9zIiwiaDEiLCJsb2FkaW5nIiwiZHJhZ2dhYmxlIiwicmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/home/Home.tsx\n"));

/***/ })

});