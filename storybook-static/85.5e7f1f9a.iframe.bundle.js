(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{1161:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"startFocusVisible",(function(){return startFocusVisible}));__webpack_require__(130),__webpack_require__(47),__webpack_require__(73),__webpack_require__(51);var FOCUS_KEYS=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp"],startFocusVisible=function startFocusVisible(){var currentFocus=[],keyboardMode=!0,doc=document,setFocus=function setFocus(elements){currentFocus.forEach((function(el){return el.classList.remove("ion-focused")})),elements.forEach((function(el){return el.classList.add("ion-focused")})),currentFocus=elements},pointerDown=function pointerDown(){keyboardMode=!1,setFocus([])};doc.addEventListener("keydown",(function(ev){(keyboardMode=FOCUS_KEYS.includes(ev.key))||setFocus([])})),doc.addEventListener("focusin",(function(ev){if(keyboardMode&&ev.composedPath){var toFocus=ev.composedPath().filter((function(el){return!!el.classList&&el.classList.contains("ion-focusable")}));setFocus(toFocus)}})),doc.addEventListener("focusout",(function(){doc.activeElement===doc.body&&setFocus([])})),doc.addEventListener("touchstart",pointerDown),doc.addEventListener("mousedown",pointerDown)}}}]);