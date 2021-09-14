(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{1010:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return addEventListener})),__webpack_require__.d(__webpack_exports__,"b",(function(){return raf})),__webpack_require__.d(__webpack_exports__,"c",(function(){return componentOnReady})),__webpack_require__.d(__webpack_exports__,"d",(function(){return getAriaLabel})),__webpack_require__.d(__webpack_exports__,"e",(function(){return renderHiddenInput})),__webpack_require__.d(__webpack_exports__,"f",(function(){return clamp})),__webpack_require__.d(__webpack_exports__,"g",(function(){return getElementRoot})),__webpack_require__.d(__webpack_exports__,"h",(function(){return findItemLabel})),__webpack_require__.d(__webpack_exports__,"i",(function(){return debounceEvent})),__webpack_require__.d(__webpack_exports__,"j",(function(){return inheritAttributes})),__webpack_require__.d(__webpack_exports__,"k",(function(){return isEndSide})),__webpack_require__.d(__webpack_exports__,"l",(function(){return assert})),__webpack_require__.d(__webpack_exports__,"m",(function(){return debounce})),__webpack_require__.d(__webpack_exports__,"n",(function(){return hasShadowDom})),__webpack_require__.d(__webpack_exports__,"o",(function(){return now})),__webpack_require__.d(__webpack_exports__,"p",(function(){return pointerCoord})),__webpack_require__.d(__webpack_exports__,"q",(function(){return removeEventListener}));__webpack_require__(130),__webpack_require__(47),__webpack_require__(508),__webpack_require__(168),__webpack_require__(10),__webpack_require__(1012),__webpack_require__(509),__webpack_require__(117),__webpack_require__(28);var componentOnReady=function componentOnReady(el,callback){el.componentOnReady?el.componentOnReady().then((function(resolvedEl){return callback(resolvedEl)})):raf((function(){return callback(el)}))},inheritAttributes=function inheritAttributes(el){var attributes=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],attributeObject={};return attributes.forEach((function(attr){el.hasAttribute(attr)&&(null!==el.getAttribute(attr)&&(attributeObject[attr]=el.getAttribute(attr)),el.removeAttribute(attr))})),attributeObject},addEventListener=function addEventListener(el,eventName,callback,opts){if("undefined"!=typeof window){var win=window,config=win&&win.Ionic&&win.Ionic.config;if(config){var ael=config.get("_ael");if(ael)return ael(el,eventName,callback,opts);if(config._ael)return config._ael(el,eventName,callback,opts)}}return el.addEventListener(eventName,callback,opts)},removeEventListener=function removeEventListener(el,eventName,callback,opts){if("undefined"!=typeof window){var win=window,config=win&&win.Ionic&&win.Ionic.config;if(config){var rel=config.get("_rel");if(rel)return rel(el,eventName,callback,opts);if(config._rel)return config._rel(el,eventName,callback,opts)}}return el.removeEventListener(eventName,callback,opts)},getElementRoot=function getElementRoot(el){var fallback=arguments.length>1&&void 0!==arguments[1]?arguments[1]:el;return el.shadowRoot||fallback},raf=function raf(h){return"function"==typeof __zone_symbol__requestAnimationFrame?__zone_symbol__requestAnimationFrame(h):"function"==typeof requestAnimationFrame?requestAnimationFrame(h):setTimeout(h)},hasShadowDom=function hasShadowDom(el){return!!el.shadowRoot&&!!el.attachShadow},findItemLabel=function findItemLabel(componentEl){var itemEl=componentEl.closest("ion-item");return itemEl?itemEl.querySelector("ion-label"):null},getAriaLabel=function getAriaLabel(componentEl,inputId){var labelText,labelledBy=componentEl.getAttribute("aria-labelledby"),componentId=componentEl.id,labelId=null!==labelledBy&&""!==labelledBy.trim()?labelledBy:inputId+"-lbl",label=null!==labelledBy&&""!==labelledBy.trim()?document.getElementById(labelledBy):findItemLabel(componentEl);return label?(null===labelledBy&&(label.id=labelId),labelText=label.textContent,label.setAttribute("aria-hidden","true")):""!==componentId.trim()&&(label=document.querySelector('label[for="'+componentId+'"]'))&&(""!==label.id?labelId=label.id:label.id=labelId=componentId+"-lbl",labelText=label.textContent),{label:label,labelId:labelId,labelText:labelText}},renderHiddenInput=function renderHiddenInput(always,container,name,value,disabled){if(always||hasShadowDom(container)){var input=container.querySelector("input.aux-input");input||((input=container.ownerDocument.createElement("input")).type="hidden",input.classList.add("aux-input"),container.appendChild(input)),input.disabled=disabled,input.name=name,input.value=value||""}},clamp=function clamp(min,n,max){return Math.max(min,Math.min(n,max))},assert=function assert(actual,reason){if(!actual){var message="ASSERT: "+reason;throw console.error(message),new Error(message)}},now=function now(ev){return ev.timeStamp||Date.now()},pointerCoord=function pointerCoord(ev){if(ev){var changedTouches=ev.changedTouches;if(changedTouches&&changedTouches.length>0){var touch=changedTouches[0];return{x:touch.clientX,y:touch.clientY}}if(void 0!==ev.pageX)return{x:ev.pageX,y:ev.pageY}}return{x:0,y:0}},isEndSide=function isEndSide(side){var isRTL="rtl"===document.dir;switch(side){case"start":return isRTL;case"end":return!isRTL;default:throw new Error('"'+side+'" is not a valid value for [side]. Use "start" or "end" instead.')}},debounceEvent=function debounceEvent(event,wait){var original=event._original||event;return{_original:event,emit:debounce(original.emit.bind(original),wait)}},debounce=function debounce(func){var timer,wait=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return function(){clearTimeout(timer);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];timer=setTimeout.apply(void 0,[func,wait].concat(args))}}},1012:function(module,exports,__webpack_require__){__webpack_require__(22)({target:"Date",stat:!0},{now:function now(){return(new Date).getTime()}})},1158:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"startStatusTap",(function(){return startStatusTap}));__webpack_require__(69),__webpack_require__(13);var _index_4644c745_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(146),_helpers_2a92b02c_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(1010),startStatusTap=function startStatusTap(){var win=window;win.addEventListener("statusTap",(function(){Object(_index_4644c745_js__WEBPACK_IMPORTED_MODULE_2__.f)((function(){var width=win.innerWidth,height=win.innerHeight,el=document.elementFromPoint(width/2,height/2);if(el){var contentEl=el.closest("ion-content");contentEl&&new Promise((function(resolve){return Object(_helpers_2a92b02c_js__WEBPACK_IMPORTED_MODULE_3__.c)(contentEl,resolve)})).then((function(){Object(_index_4644c745_js__WEBPACK_IMPORTED_MODULE_2__.o)((function(){return contentEl.scrollToTop(300)}))}))}}))}))}}}]);