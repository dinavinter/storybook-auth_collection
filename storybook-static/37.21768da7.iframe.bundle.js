(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{1010:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return addEventListener})),__webpack_require__.d(__webpack_exports__,"b",(function(){return raf})),__webpack_require__.d(__webpack_exports__,"c",(function(){return componentOnReady})),__webpack_require__.d(__webpack_exports__,"d",(function(){return getAriaLabel})),__webpack_require__.d(__webpack_exports__,"e",(function(){return renderHiddenInput})),__webpack_require__.d(__webpack_exports__,"f",(function(){return clamp})),__webpack_require__.d(__webpack_exports__,"g",(function(){return getElementRoot})),__webpack_require__.d(__webpack_exports__,"h",(function(){return findItemLabel})),__webpack_require__.d(__webpack_exports__,"i",(function(){return debounceEvent})),__webpack_require__.d(__webpack_exports__,"j",(function(){return inheritAttributes})),__webpack_require__.d(__webpack_exports__,"k",(function(){return isEndSide})),__webpack_require__.d(__webpack_exports__,"l",(function(){return assert})),__webpack_require__.d(__webpack_exports__,"m",(function(){return debounce})),__webpack_require__.d(__webpack_exports__,"n",(function(){return hasShadowDom})),__webpack_require__.d(__webpack_exports__,"o",(function(){return now})),__webpack_require__.d(__webpack_exports__,"p",(function(){return pointerCoord})),__webpack_require__.d(__webpack_exports__,"q",(function(){return removeEventListener}));__webpack_require__(130),__webpack_require__(47),__webpack_require__(508),__webpack_require__(168),__webpack_require__(10),__webpack_require__(1012),__webpack_require__(509),__webpack_require__(117),__webpack_require__(28);var componentOnReady=function componentOnReady(el,callback){el.componentOnReady?el.componentOnReady().then((function(resolvedEl){return callback(resolvedEl)})):raf((function(){return callback(el)}))},inheritAttributes=function inheritAttributes(el){var attributes=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],attributeObject={};return attributes.forEach((function(attr){el.hasAttribute(attr)&&(null!==el.getAttribute(attr)&&(attributeObject[attr]=el.getAttribute(attr)),el.removeAttribute(attr))})),attributeObject},addEventListener=function addEventListener(el,eventName,callback,opts){if("undefined"!=typeof window){var win=window,config=win&&win.Ionic&&win.Ionic.config;if(config){var ael=config.get("_ael");if(ael)return ael(el,eventName,callback,opts);if(config._ael)return config._ael(el,eventName,callback,opts)}}return el.addEventListener(eventName,callback,opts)},removeEventListener=function removeEventListener(el,eventName,callback,opts){if("undefined"!=typeof window){var win=window,config=win&&win.Ionic&&win.Ionic.config;if(config){var rel=config.get("_rel");if(rel)return rel(el,eventName,callback,opts);if(config._rel)return config._rel(el,eventName,callback,opts)}}return el.removeEventListener(eventName,callback,opts)},getElementRoot=function getElementRoot(el){var fallback=arguments.length>1&&void 0!==arguments[1]?arguments[1]:el;return el.shadowRoot||fallback},raf=function raf(h){return"function"==typeof __zone_symbol__requestAnimationFrame?__zone_symbol__requestAnimationFrame(h):"function"==typeof requestAnimationFrame?requestAnimationFrame(h):setTimeout(h)},hasShadowDom=function hasShadowDom(el){return!!el.shadowRoot&&!!el.attachShadow},findItemLabel=function findItemLabel(componentEl){var itemEl=componentEl.closest("ion-item");return itemEl?itemEl.querySelector("ion-label"):null},getAriaLabel=function getAriaLabel(componentEl,inputId){var labelText,labelledBy=componentEl.getAttribute("aria-labelledby"),componentId=componentEl.id,labelId=null!==labelledBy&&""!==labelledBy.trim()?labelledBy:inputId+"-lbl",label=null!==labelledBy&&""!==labelledBy.trim()?document.getElementById(labelledBy):findItemLabel(componentEl);return label?(null===labelledBy&&(label.id=labelId),labelText=label.textContent,label.setAttribute("aria-hidden","true")):""!==componentId.trim()&&(label=document.querySelector('label[for="'+componentId+'"]'))&&(""!==label.id?labelId=label.id:label.id=labelId=componentId+"-lbl",labelText=label.textContent),{label:label,labelId:labelId,labelText:labelText}},renderHiddenInput=function renderHiddenInput(always,container,name,value,disabled){if(always||hasShadowDom(container)){var input=container.querySelector("input.aux-input");input||((input=container.ownerDocument.createElement("input")).type="hidden",input.classList.add("aux-input"),container.appendChild(input)),input.disabled=disabled,input.name=name,input.value=value||""}},clamp=function clamp(min,n,max){return Math.max(min,Math.min(n,max))},assert=function assert(actual,reason){if(!actual){var message="ASSERT: "+reason;throw console.error(message),new Error(message)}},now=function now(ev){return ev.timeStamp||Date.now()},pointerCoord=function pointerCoord(ev){if(ev){var changedTouches=ev.changedTouches;if(changedTouches&&changedTouches.length>0){var touch=changedTouches[0];return{x:touch.clientX,y:touch.clientY}}if(void 0!==ev.pageX)return{x:ev.pageX,y:ev.pageY}}return{x:0,y:0}},isEndSide=function isEndSide(side){var isRTL="rtl"===document.dir;switch(side){case"start":return isRTL;case"end":return!isRTL;default:throw new Error('"'+side+'" is not a valid value for [side]. Use "start" or "end" instead.')}},debounceEvent=function debounceEvent(event,wait){var original=event._original||event;return{_original:event,emit:debounce(original.emit.bind(original),wait)}},debounce=function debounce(func){var timer,wait=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return function(){clearTimeout(timer);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];timer=setTimeout.apply(void 0,[func,wait].concat(args))}}},1012:function(module,exports,__webpack_require__){__webpack_require__(22)({target:"Date",stat:!0},{now:function now(){return(new Date).getTime()}})},1159:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"startInputShims",(function(){return startInputShims}));__webpack_require__(342),__webpack_require__(13),__webpack_require__(19),__webpack_require__(20),__webpack_require__(21),__webpack_require__(508),__webpack_require__(69),__webpack_require__(30);var _helpers_2a92b02c_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(1010);function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}var cloneMap=new WeakMap,relocateInput=function relocateInput(componentEl,inputEl,shouldRelocate){var inputRelativeY=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;cloneMap.has(componentEl)!==shouldRelocate&&(shouldRelocate?addClone(componentEl,inputEl,inputRelativeY):removeClone(componentEl,inputEl))},isFocused=function isFocused(input){return input===input.getRootNode().activeElement},addClone=function addClone(componentEl,inputEl,inputRelativeY){var parentEl=inputEl.parentNode,clonedEl=inputEl.cloneNode(!1);clonedEl.classList.add("cloned-input"),clonedEl.tabIndex=-1,parentEl.appendChild(clonedEl),cloneMap.set(componentEl,clonedEl);var tx="rtl"===componentEl.ownerDocument.dir?9999:-9999;componentEl.style.pointerEvents="none",inputEl.style.transform="translate3d("+tx+"px,"+inputRelativeY+"px,0) scale(0)"},removeClone=function removeClone(componentEl,inputEl){var clone=cloneMap.get(componentEl);clone&&(cloneMap.delete(componentEl),clone.remove()),componentEl.style.pointerEvents="",inputEl.style.transform=""},enableHideCaretOnScroll=function enableHideCaretOnScroll(componentEl,inputEl,scrollEl){if(!scrollEl||!inputEl)return function(){};var scrollHideCaret=function scrollHideCaret(shouldHideCaret){isFocused(inputEl)&&relocateInput(componentEl,inputEl,shouldHideCaret)},onBlur=function onBlur(){return relocateInput(componentEl,inputEl,!1)},hideCaret=function hideCaret(){return scrollHideCaret(!0)},showCaret=function showCaret(){return scrollHideCaret(!1)};return Object(_helpers_2a92b02c_js__WEBPACK_IMPORTED_MODULE_8__.a)(scrollEl,"ionScrollStart",hideCaret),Object(_helpers_2a92b02c_js__WEBPACK_IMPORTED_MODULE_8__.a)(scrollEl,"ionScrollEnd",showCaret),inputEl.addEventListener("blur",onBlur),function(){Object(_helpers_2a92b02c_js__WEBPACK_IMPORTED_MODULE_8__.q)(scrollEl,"ionScrollStart",hideCaret),Object(_helpers_2a92b02c_js__WEBPACK_IMPORTED_MODULE_8__.q)(scrollEl,"ionScrollEnd",showCaret),inputEl.addEventListener("ionBlur",onBlur)}},SKIP_SELECTOR="input, textarea, [no-blur], [contenteditable]",getScrollData=function getScrollData(componentEl,contentEl,keyboardHeight){var itemEl=componentEl.closest("ion-item,[ion-item]")||componentEl;return calcScrollData(itemEl.getBoundingClientRect(),contentEl.getBoundingClientRect(),keyboardHeight,componentEl.ownerDocument.defaultView.innerHeight)},calcScrollData=function calcScrollData(inputRect,contentRect,keyboardHeight,platformHeight){var inputTop=inputRect.top,inputBottom=inputRect.bottom,visibleAreaTop=contentRect.top,safeAreaTop=visibleAreaTop+15,distanceToBottom=.75*Math.min(contentRect.bottom,platformHeight-keyboardHeight)-inputBottom,distanceToTop=safeAreaTop-inputTop,desiredScrollAmount=Math.round(distanceToBottom<0?-distanceToBottom:distanceToTop>0?-distanceToTop:0),scrollAmount=Math.min(desiredScrollAmount,inputTop-visibleAreaTop),duration=Math.abs(scrollAmount)/.3;return{scrollAmount:scrollAmount,scrollDuration:Math.min(400,Math.max(150,duration)),scrollPadding:keyboardHeight,inputSafeY:4-(inputTop-safeAreaTop)}},enableScrollAssist=function enableScrollAssist(componentEl,inputEl,contentEl,footerEl,keyboardHeight){var coord,touchStart=function touchStart(ev){coord=Object(_helpers_2a92b02c_js__WEBPACK_IMPORTED_MODULE_8__.p)(ev)},touchEnd=function touchEnd(ev){if(coord){var endCoord=Object(_helpers_2a92b02c_js__WEBPACK_IMPORTED_MODULE_8__.p)(ev);hasPointerMoved(6,coord,endCoord)||isFocused(inputEl)||(ev.stopPropagation(),jsSetFocus(componentEl,inputEl,contentEl,footerEl,keyboardHeight))}};return componentEl.addEventListener("touchstart",touchStart,!0),componentEl.addEventListener("touchend",touchEnd,!0),function(){componentEl.removeEventListener("touchstart",touchStart,!0),componentEl.removeEventListener("touchend",touchEnd,!0)}},jsSetFocus=function(){var _ref=_asyncToGenerator(regeneratorRuntime.mark((function _callee2(componentEl,inputEl,contentEl,footerEl,keyboardHeight){var scrollData,scrollContentTimeout,scrollContent,doubleKeyboardEventListener,scrollEl,totalScrollAmount;return regeneratorRuntime.wrap((function _callee2$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:if(contentEl||footerEl){_context2.next=2;break}return _context2.abrupt("return");case 2:if(scrollData=getScrollData(componentEl,contentEl||footerEl,keyboardHeight),!(contentEl&&Math.abs(scrollData.scrollAmount)<4)){_context2.next=6;break}return inputEl.focus(),_context2.abrupt("return");case 6:if(relocateInput(componentEl,inputEl,!0,scrollData.inputSafeY),inputEl.focus(),Object(_helpers_2a92b02c_js__WEBPACK_IMPORTED_MODULE_8__.b)((function(){return componentEl.click()})),"undefined"==typeof window){_context2.next=22;break}if(scrollContent=function(){var _ref2=_asyncToGenerator(regeneratorRuntime.mark((function _callee(){return regeneratorRuntime.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:if(void 0!==scrollContentTimeout&&clearTimeout(scrollContentTimeout),window.removeEventListener("ionKeyboardDidShow",doubleKeyboardEventListener),window.removeEventListener("ionKeyboardDidShow",scrollContent),!contentEl){_context.next=6;break}return _context.next=6,contentEl.scrollByPoint(0,scrollData.scrollAmount,scrollData.scrollDuration);case 6:relocateInput(componentEl,inputEl,!1,scrollData.inputSafeY),inputEl.focus();case 8:case"end":return _context.stop()}}),_callee)})));return function scrollContent(){return _ref2.apply(this,arguments)}}(),doubleKeyboardEventListener=function doubleKeyboardEventListener(){window.removeEventListener("ionKeyboardDidShow",doubleKeyboardEventListener),window.addEventListener("ionKeyboardDidShow",scrollContent)},!contentEl){_context2.next=21;break}return _context2.next=15,contentEl.getScrollElement();case 15:if(scrollEl=_context2.sent,totalScrollAmount=scrollEl.scrollHeight-scrollEl.clientHeight,!(scrollData.scrollAmount>totalScrollAmount-scrollEl.scrollTop)){_context2.next=21;break}return"password"===inputEl.type?(scrollData.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",doubleKeyboardEventListener)):window.addEventListener("ionKeyboardDidShow",scrollContent),scrollContentTimeout=setTimeout(scrollContent,1e3),_context2.abrupt("return");case 21:scrollContent();case 22:case"end":return _context2.stop()}}),_callee2)})));return function jsSetFocus(_x,_x2,_x3,_x4,_x5){return _ref.apply(this,arguments)}}(),hasPointerMoved=function hasPointerMoved(threshold,startCoord,endCoord){if(startCoord&&endCoord){var deltaX=startCoord.x-endCoord.x,deltaY=startCoord.y-endCoord.y;return deltaX*deltaX+deltaY*deltaY>threshold*threshold}return!1},setScrollPadding=function setScrollPadding(input,keyboardHeight){if("INPUT"===input.tagName&&!(input.parentElement&&"ION-INPUT"===input.parentElement.tagName||input.parentElement&&input.parentElement.parentElement&&"ION-SEARCHBAR"===input.parentElement.parentElement.tagName)){var el=input.closest("ion-content");if(null!==el){var timer=el.$ionPaddingTimer;timer&&clearTimeout(timer),keyboardHeight>0?el.style.setProperty("--keyboard-offset",keyboardHeight+"px"):el.$ionPaddingTimer=setTimeout((function(){el.style.setProperty("--keyboard-offset","0px")}),120)}}},startInputShims=function startInputShims(config){var doc=document,keyboardHeight=config.getNumber("keyboardHeight",290),scrollAssist=config.getBoolean("scrollAssist",!0),hideCaret=config.getBoolean("hideCaretOnScroll",!0),inputBlurring=config.getBoolean("inputBlurring",!0),scrollPadding=config.getBoolean("scrollPadding",!0),inputs=Array.from(doc.querySelectorAll("ion-input, ion-textarea")),hideCaretMap=new WeakMap,scrollAssistMap=new WeakMap,registerInput=function(){var _ref3=_asyncToGenerator(regeneratorRuntime.mark((function _callee3(componentEl){var inputRoot,inputEl,scrollEl,footerEl,rmFn,_rmFn;return regeneratorRuntime.wrap((function _callee3$(_context3){for(;;)switch(_context3.prev=_context3.next){case 0:return _context3.next=2,new Promise((function(resolve){return Object(_helpers_2a92b02c_js__WEBPACK_IMPORTED_MODULE_8__.c)(componentEl,resolve)}));case 2:if(inputRoot=componentEl.shadowRoot||componentEl,inputEl=inputRoot.querySelector("input")||inputRoot.querySelector("textarea"),scrollEl=componentEl.closest("ion-content"),footerEl=scrollEl?null:componentEl.closest("ion-footer"),inputEl){_context3.next=8;break}return _context3.abrupt("return");case 8:scrollEl&&hideCaret&&!hideCaretMap.has(componentEl)&&(rmFn=enableHideCaretOnScroll(componentEl,inputEl,scrollEl),hideCaretMap.set(componentEl,rmFn)),(scrollEl||footerEl)&&scrollAssist&&!scrollAssistMap.has(componentEl)&&(_rmFn=enableScrollAssist(componentEl,inputEl,scrollEl,footerEl,keyboardHeight),scrollAssistMap.set(componentEl,_rmFn));case 10:case"end":return _context3.stop()}}),_callee3)})));return function registerInput(_x6){return _ref3.apply(this,arguments)}}();inputBlurring&&function enableInputBlurring(){var focused=!0,didScroll=!1,doc=document,onScroll=function onScroll(){didScroll=!0},onFocusin=function onFocusin(){focused=!0},onTouchend=function onTouchend(ev){if(didScroll)didScroll=!1;else{var active=doc.activeElement;if(active&&!active.matches(SKIP_SELECTOR)){var tapped=ev.target;tapped!==active&&(tapped.matches(SKIP_SELECTOR)||tapped.closest(SKIP_SELECTOR)||(focused=!1,setTimeout((function(){focused||active.blur()}),50)))}}};Object(_helpers_2a92b02c_js__WEBPACK_IMPORTED_MODULE_8__.a)(doc,"ionScrollStart",onScroll),doc.addEventListener("focusin",onFocusin,!0),doc.addEventListener("touchend",onTouchend,!1)}(),scrollPadding&&function enableScrollPadding(keyboardHeight){var doc=document,onFocusin=function onFocusin(ev){setScrollPadding(ev.target,keyboardHeight)},onFocusout=function onFocusout(ev){setScrollPadding(ev.target,0)};doc.addEventListener("focusin",onFocusin),doc.addEventListener("focusout",onFocusout)}(keyboardHeight);for(var _i=0,_inputs=inputs;_i<_inputs.length;_i++){var input=_inputs[_i];registerInput(input)}doc.addEventListener("ionInputDidLoad",(function(ev){registerInput(ev.detail)})),doc.addEventListener("ionInputDidUnload",(function(ev){!function unregisterInput(componentEl){if(hideCaret){var fn=hideCaretMap.get(componentEl);fn&&fn(),hideCaretMap.delete(componentEl)}if(scrollAssist){var _fn=scrollAssistMap.get(componentEl);_fn&&_fn(),scrollAssistMap.delete(componentEl)}}(ev.detail)}))}}}]);