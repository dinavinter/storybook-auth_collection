(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{1010:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return addEventListener})),__webpack_require__.d(__webpack_exports__,"b",(function(){return raf})),__webpack_require__.d(__webpack_exports__,"c",(function(){return componentOnReady})),__webpack_require__.d(__webpack_exports__,"d",(function(){return getAriaLabel})),__webpack_require__.d(__webpack_exports__,"e",(function(){return renderHiddenInput})),__webpack_require__.d(__webpack_exports__,"f",(function(){return clamp})),__webpack_require__.d(__webpack_exports__,"g",(function(){return getElementRoot})),__webpack_require__.d(__webpack_exports__,"h",(function(){return findItemLabel})),__webpack_require__.d(__webpack_exports__,"i",(function(){return debounceEvent})),__webpack_require__.d(__webpack_exports__,"j",(function(){return inheritAttributes})),__webpack_require__.d(__webpack_exports__,"k",(function(){return isEndSide})),__webpack_require__.d(__webpack_exports__,"l",(function(){return assert})),__webpack_require__.d(__webpack_exports__,"m",(function(){return debounce})),__webpack_require__.d(__webpack_exports__,"n",(function(){return hasShadowDom})),__webpack_require__.d(__webpack_exports__,"o",(function(){return now})),__webpack_require__.d(__webpack_exports__,"p",(function(){return pointerCoord})),__webpack_require__.d(__webpack_exports__,"q",(function(){return removeEventListener}));__webpack_require__(130),__webpack_require__(47),__webpack_require__(508),__webpack_require__(168),__webpack_require__(10),__webpack_require__(1012),__webpack_require__(509),__webpack_require__(117),__webpack_require__(28);var componentOnReady=function componentOnReady(el,callback){el.componentOnReady?el.componentOnReady().then((function(resolvedEl){return callback(resolvedEl)})):raf((function(){return callback(el)}))},inheritAttributes=function inheritAttributes(el){var attributes=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],attributeObject={};return attributes.forEach((function(attr){el.hasAttribute(attr)&&(null!==el.getAttribute(attr)&&(attributeObject[attr]=el.getAttribute(attr)),el.removeAttribute(attr))})),attributeObject},addEventListener=function addEventListener(el,eventName,callback,opts){if("undefined"!=typeof window){var win=window,config=win&&win.Ionic&&win.Ionic.config;if(config){var ael=config.get("_ael");if(ael)return ael(el,eventName,callback,opts);if(config._ael)return config._ael(el,eventName,callback,opts)}}return el.addEventListener(eventName,callback,opts)},removeEventListener=function removeEventListener(el,eventName,callback,opts){if("undefined"!=typeof window){var win=window,config=win&&win.Ionic&&win.Ionic.config;if(config){var rel=config.get("_rel");if(rel)return rel(el,eventName,callback,opts);if(config._rel)return config._rel(el,eventName,callback,opts)}}return el.removeEventListener(eventName,callback,opts)},getElementRoot=function getElementRoot(el){var fallback=arguments.length>1&&void 0!==arguments[1]?arguments[1]:el;return el.shadowRoot||fallback},raf=function raf(h){return"function"==typeof __zone_symbol__requestAnimationFrame?__zone_symbol__requestAnimationFrame(h):"function"==typeof requestAnimationFrame?requestAnimationFrame(h):setTimeout(h)},hasShadowDom=function hasShadowDom(el){return!!el.shadowRoot&&!!el.attachShadow},findItemLabel=function findItemLabel(componentEl){var itemEl=componentEl.closest("ion-item");return itemEl?itemEl.querySelector("ion-label"):null},getAriaLabel=function getAriaLabel(componentEl,inputId){var labelText,labelledBy=componentEl.getAttribute("aria-labelledby"),componentId=componentEl.id,labelId=null!==labelledBy&&""!==labelledBy.trim()?labelledBy:inputId+"-lbl",label=null!==labelledBy&&""!==labelledBy.trim()?document.getElementById(labelledBy):findItemLabel(componentEl);return label?(null===labelledBy&&(label.id=labelId),labelText=label.textContent,label.setAttribute("aria-hidden","true")):""!==componentId.trim()&&(label=document.querySelector('label[for="'+componentId+'"]'))&&(""!==label.id?labelId=label.id:label.id=labelId=componentId+"-lbl",labelText=label.textContent),{label:label,labelId:labelId,labelText:labelText}},renderHiddenInput=function renderHiddenInput(always,container,name,value,disabled){if(always||hasShadowDom(container)){var input=container.querySelector("input.aux-input");input||((input=container.ownerDocument.createElement("input")).type="hidden",input.classList.add("aux-input"),container.appendChild(input)),input.disabled=disabled,input.name=name,input.value=value||""}},clamp=function clamp(min,n,max){return Math.max(min,Math.min(n,max))},assert=function assert(actual,reason){if(!actual){var message="ASSERT: "+reason;throw console.error(message),new Error(message)}},now=function now(ev){return ev.timeStamp||Date.now()},pointerCoord=function pointerCoord(ev){if(ev){var changedTouches=ev.changedTouches;if(changedTouches&&changedTouches.length>0){var touch=changedTouches[0];return{x:touch.clientX,y:touch.clientY}}if(void 0!==ev.pageX)return{x:ev.pageX,y:ev.pageY}}return{x:0,y:0}},isEndSide=function isEndSide(side){var isRTL="rtl"===document.dir;switch(side){case"start":return isRTL;case"end":return!isRTL;default:throw new Error('"'+side+'" is not a valid value for [side]. Use "start" or "end" instead.')}},debounceEvent=function debounceEvent(event,wait){var original=event._original||event;return{_original:event,emit:debounce(original.emit.bind(original),wait)}},debounce=function debounce(func){var timer,wait=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return function(){clearTimeout(timer);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];timer=setTimeout.apply(void 0,[func,wait].concat(args))}}},1012:function(module,exports,__webpack_require__){__webpack_require__(22)({target:"Date",stat:!0},{now:function now(){return(new Date).getTime()}})},1022:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return getTimeGivenProgression}));__webpack_require__(32),__webpack_require__(51);var getTimeGivenProgression=function getTimeGivenProgression(p0,p1,p2,p3,progression){return solveCubicBezier(p0[1],p1[1],p2[1],p3[1],progression).map((function(tValue){return solveCubicParametricEquation(p0[0],p1[0],p2[0],p3[0],tValue)}))},solveCubicParametricEquation=function solveCubicParametricEquation(p0,p1,p2,p3,t){return t*(3*p1*Math.pow(t-1,2)+t*(-3*p2*t+3*p2+p3*t))-p0*Math.pow(t-1,3)},solveCubicBezier=function solveCubicBezier(p0,p1,p2,p3,refPoint){return solveCubicEquation((p3-=refPoint)-3*(p2-=refPoint)+3*(p1-=refPoint)-(p0-=refPoint),3*p2-6*p1+3*p0,3*p1-3*p0,p0).filter((function(root){return root>=0&&root<=1}))},solveCubicEquation=function solveCubicEquation(a,b,c,d){if(0===a)return function solveQuadraticEquation(a,b,c){var discriminant=b*b-4*a*c;return discriminant<0?[]:[(-b+Math.sqrt(discriminant))/(2*a),(-b-Math.sqrt(discriminant))/(2*a)]}(b,c,d);var p=(3*(c/=a)-(b/=a)*b)/3,q=(2*b*b*b-9*b*c+27*(d/=a))/27;if(0===p)return[Math.pow(-q,1/3)];if(0===q)return[Math.sqrt(-p),-Math.sqrt(-p)];var discriminant=Math.pow(q/2,2)+Math.pow(p/3,3);if(0===discriminant)return[Math.pow(q/2,.5)-b/3];if(discriminant>0)return[Math.pow(-q/2+Math.sqrt(discriminant),1/3)-Math.pow(q/2+Math.sqrt(discriminant),1/3)-b/3];var r=Math.sqrt(Math.pow(-p/3,3)),phi=Math.acos(-q/(2*Math.sqrt(Math.pow(-p/3,3)))),s=2*Math.pow(r,1/3);return[s*Math.cos(phi/3)-b/3,s*Math.cos((phi+2*Math.PI)/3)-b/3,s*Math.cos((phi+4*Math.PI)/3)-b/3]}},1023:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return attachComponent})),__webpack_require__.d(__webpack_exports__,"b",(function(){return detachComponent}));__webpack_require__(69),__webpack_require__(13),__webpack_require__(130),__webpack_require__(47),__webpack_require__(18);var _helpers_2a92b02c_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(1010);function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}var attachComponent=function(){var _ref=function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}(regeneratorRuntime.mark((function _callee(delegate,container,component,cssClasses,componentProps){var el;return regeneratorRuntime.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:if(!delegate){_context.next=2;break}return _context.abrupt("return",delegate.attachViewToDom(container,component,componentProps,cssClasses));case 2:if("string"==typeof component||component instanceof HTMLElement){_context.next=4;break}throw new Error("framework delegate is missing");case 4:return el="string"==typeof component?container.ownerDocument&&container.ownerDocument.createElement(component):component,cssClasses&&cssClasses.forEach((function(c){return el.classList.add(c)})),componentProps&&Object.assign(el,componentProps),container.appendChild(el),_context.next=10,new Promise((function(resolve){return Object(_helpers_2a92b02c_js__WEBPACK_IMPORTED_MODULE_5__.c)(el,resolve)}));case 10:return _context.abrupt("return",el);case 11:case"end":return _context.stop()}}),_callee)})));return function attachComponent(_x,_x2,_x3,_x4,_x5){return _ref.apply(this,arguments)}}(),detachComponent=function detachComponent(delegate,element){if(element){if(delegate){var container=element.parentElement;return delegate.removeViewFromDom(container,element)}element.remove()}return Promise.resolve()}},1024:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return LIFECYCLE_WILL_UNLOAD})),__webpack_require__.d(__webpack_exports__,"b",(function(){return LIFECYCLE_WILL_LEAVE})),__webpack_require__.d(__webpack_exports__,"c",(function(){return LIFECYCLE_DID_LEAVE})),__webpack_require__.d(__webpack_exports__,"d",(function(){return deepReady})),__webpack_require__.d(__webpack_exports__,"e",(function(){return getIonPageElement})),__webpack_require__.d(__webpack_exports__,"f",(function(){return lifecycle})),__webpack_require__.d(__webpack_exports__,"g",(function(){return setPageHidden})),__webpack_require__.d(__webpack_exports__,"h",(function(){return transition}));__webpack_require__(69),__webpack_require__(13),__webpack_require__(19),__webpack_require__(20),__webpack_require__(21),__webpack_require__(32),__webpack_require__(30);var _index_4644c745_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(146),_helpers_2a92b02c_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(1010);function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}var LIFECYCLE_WILL_LEAVE="ionViewWillLeave",LIFECYCLE_DID_LEAVE="ionViewDidLeave",LIFECYCLE_WILL_UNLOAD="ionViewWillUnload",iosTransitionAnimation=function iosTransitionAnimation(){return Promise.all([__webpack_require__.e(0),__webpack_require__.e(52)]).then(__webpack_require__.bind(null,1037))},mdTransitionAnimation=function mdTransitionAnimation(){return Promise.all([__webpack_require__.e(0),__webpack_require__.e(53)]).then(__webpack_require__.bind(null,1038))},transition=function transition(opts){return new Promise((function(resolve,reject){Object(_index_4644c745_js__WEBPACK_IMPORTED_MODULE_7__.o)((function(){beforeTransition(opts),runTransition(opts).then((function(result){result.animation&&result.animation.destroy(),afterTransition(opts),resolve(result)}),(function(error){afterTransition(opts),reject(error)}))}))}))},beforeTransition=function beforeTransition(opts){var enteringEl=opts.enteringEl,leavingEl=opts.leavingEl;setZIndex(enteringEl,leavingEl,opts.direction),opts.showGoBack?enteringEl.classList.add("can-go-back"):enteringEl.classList.remove("can-go-back"),setPageHidden(enteringEl,!1),enteringEl.style.setProperty("pointer-events","none"),leavingEl&&(setPageHidden(leavingEl,!1),leavingEl.style.setProperty("pointer-events","none"))},runTransition=function(){var _ref=_asyncToGenerator(regeneratorRuntime.mark((function _callee(opts){var animationBuilder,ani;return regeneratorRuntime.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.next=2,getAnimationBuilder(opts);case 2:return animationBuilder=_context.sent,ani=animationBuilder&&_index_4644c745_js__WEBPACK_IMPORTED_MODULE_7__.a.isBrowser?animation(animationBuilder,opts):noAnimation(opts),_context.abrupt("return",ani);case 5:case"end":return _context.stop()}}),_callee)})));return function runTransition(_x){return _ref.apply(this,arguments)}}(),afterTransition=function afterTransition(opts){var enteringEl=opts.enteringEl,leavingEl=opts.leavingEl;enteringEl.classList.remove("ion-page-invisible"),enteringEl.style.removeProperty("pointer-events"),void 0!==leavingEl&&(leavingEl.classList.remove("ion-page-invisible"),leavingEl.style.removeProperty("pointer-events"))},getAnimationBuilder=function(){var _ref2=_asyncToGenerator(regeneratorRuntime.mark((function _callee2(opts){var getAnimation;return regeneratorRuntime.wrap((function _callee2$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:if(opts.leavingEl&&opts.animated&&0!==opts.duration){_context2.next=2;break}return _context2.abrupt("return",void 0);case 2:if(!opts.animationBuilder){_context2.next=4;break}return _context2.abrupt("return",opts.animationBuilder);case 4:if("ios"!==opts.mode){_context2.next=10;break}return _context2.next=7,iosTransitionAnimation();case 7:_context2.t0=_context2.sent.iosTransitionAnimation,_context2.next=13;break;case 10:return _context2.next=12,mdTransitionAnimation();case 12:_context2.t0=_context2.sent.mdTransitionAnimation;case 13:return getAnimation=_context2.t0,_context2.abrupt("return",getAnimation);case 15:case"end":return _context2.stop()}}),_callee2)})));return function getAnimationBuilder(_x2){return _ref2.apply(this,arguments)}}(),animation=function(){var _ref3=_asyncToGenerator(regeneratorRuntime.mark((function _callee3(animationBuilder,opts){var trans,didComplete;return regeneratorRuntime.wrap((function _callee3$(_context3){for(;;)switch(_context3.prev=_context3.next){case 0:return _context3.next=2,waitForReady(opts,!0);case 2:return trans=animationBuilder(opts.baseEl,opts),fireWillEvents(opts.enteringEl,opts.leavingEl),_context3.next=6,playTransition(trans,opts);case 6:return didComplete=_context3.sent,opts.progressCallback&&opts.progressCallback(void 0),didComplete&&fireDidEvents(opts.enteringEl,opts.leavingEl),_context3.abrupt("return",{hasCompleted:didComplete,animation:trans});case 10:case"end":return _context3.stop()}}),_callee3)})));return function animation(_x3,_x4){return _ref3.apply(this,arguments)}}(),noAnimation=function(){var _ref4=_asyncToGenerator(regeneratorRuntime.mark((function _callee4(opts){var enteringEl,leavingEl;return regeneratorRuntime.wrap((function _callee4$(_context4){for(;;)switch(_context4.prev=_context4.next){case 0:return enteringEl=opts.enteringEl,leavingEl=opts.leavingEl,_context4.next=4,waitForReady(opts,!1);case 4:return fireWillEvents(enteringEl,leavingEl),fireDidEvents(enteringEl,leavingEl),_context4.abrupt("return",{hasCompleted:!0});case 7:case"end":return _context4.stop()}}),_callee4)})));return function noAnimation(_x5){return _ref4.apply(this,arguments)}}(),waitForReady=function(){var _ref5=_asyncToGenerator(regeneratorRuntime.mark((function _callee5(opts,defaultDeep){var deep,promises;return regeneratorRuntime.wrap((function _callee5$(_context5){for(;;)switch(_context5.prev=_context5.next){case 0:return deep=void 0!==opts.deepWait?opts.deepWait:defaultDeep,promises=deep?[deepReady(opts.enteringEl),deepReady(opts.leavingEl)]:[shallowReady(opts.enteringEl),shallowReady(opts.leavingEl)],_context5.next=4,Promise.all(promises);case 4:return _context5.next=6,notifyViewReady(opts.viewIsReady,opts.enteringEl);case 6:case"end":return _context5.stop()}}),_callee5)})));return function waitForReady(_x6,_x7){return _ref5.apply(this,arguments)}}(),notifyViewReady=function(){var _ref6=_asyncToGenerator(regeneratorRuntime.mark((function _callee6(viewIsReady,enteringEl){return regeneratorRuntime.wrap((function _callee6$(_context6){for(;;)switch(_context6.prev=_context6.next){case 0:if(!viewIsReady){_context6.next=3;break}return _context6.next=3,viewIsReady(enteringEl);case 3:case"end":return _context6.stop()}}),_callee6)})));return function notifyViewReady(_x8,_x9){return _ref6.apply(this,arguments)}}(),playTransition=function playTransition(trans,opts){var progressCallback=opts.progressCallback,promise=new Promise((function(resolve){trans.onFinish((function(currentStep){return resolve(1===currentStep)}))}));return progressCallback?(trans.progressStart(!0),progressCallback(trans)):trans.play(),promise},fireWillEvents=function fireWillEvents(enteringEl,leavingEl){lifecycle(leavingEl,LIFECYCLE_WILL_LEAVE),lifecycle(enteringEl,"ionViewWillEnter")},fireDidEvents=function fireDidEvents(enteringEl,leavingEl){lifecycle(enteringEl,"ionViewDidEnter"),lifecycle(leavingEl,LIFECYCLE_DID_LEAVE)},lifecycle=function lifecycle(el,eventName){if(el){var ev=new CustomEvent(eventName,{bubbles:!1,cancelable:!1});el.dispatchEvent(ev)}},shallowReady=function shallowReady(el){return el?new Promise((function(resolve){return Object(_helpers_2a92b02c_js__WEBPACK_IMPORTED_MODULE_8__.c)(el,resolve)})):Promise.resolve()},deepReady=function(){var _ref7=_asyncToGenerator(regeneratorRuntime.mark((function _callee7(el){var element;return regeneratorRuntime.wrap((function _callee7$(_context7){for(;;)switch(_context7.prev=_context7.next){case 0:if(!(element=el)){_context7.next=10;break}if(null==element.componentOnReady){_context7.next=8;break}return _context7.next=5,element.componentOnReady();case 5:if(null==_context7.sent){_context7.next=8;break}return _context7.abrupt("return");case 8:return _context7.next=10,Promise.all(Array.from(element.children).map(deepReady));case 10:case"end":return _context7.stop()}}),_callee7)})));return function deepReady(_x10){return _ref7.apply(this,arguments)}}(),setPageHidden=function setPageHidden(el,hidden){hidden?(el.setAttribute("aria-hidden","true"),el.classList.add("ion-page-hidden")):(el.hidden=!1,el.removeAttribute("aria-hidden"),el.classList.remove("ion-page-hidden"))},setZIndex=function setZIndex(enteringEl,leavingEl,direction){void 0!==enteringEl&&(enteringEl.style.zIndex="back"===direction?"99":"101"),void 0!==leavingEl&&(leavingEl.style.zIndex="100")},getIonPageElement=function getIonPageElement(element){if(element.classList.contains("ion-page"))return element;var ionPage=element.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs");return ionPage||element}},969:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ion_router_outlet",(function(){return RouterOutlet}));__webpack_require__(69),__webpack_require__(13),__webpack_require__(19),__webpack_require__(20),__webpack_require__(21),__webpack_require__(18),__webpack_require__(131);var _index_4644c745_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(146),_ionic_global_9a60c1b6_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(253),_cubic_bezier_ed243a9b_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(1022),_framework_delegate_98ac1572_js__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(1023),_index_1ff80c68_js__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(1024);__webpack_require__(1010);function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}var RouterOutlet=function(){function RouterOutlet(hostRef){!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,RouterOutlet),Object(_index_4644c745_js__WEBPACK_IMPORTED_MODULE_7__.m)(this,hostRef),this.ionNavWillLoad=Object(_index_4644c745_js__WEBPACK_IMPORTED_MODULE_7__.e)(this,"ionNavWillLoad",7),this.ionNavWillChange=Object(_index_4644c745_js__WEBPACK_IMPORTED_MODULE_7__.e)(this,"ionNavWillChange",3),this.ionNavDidChange=Object(_index_4644c745_js__WEBPACK_IMPORTED_MODULE_7__.e)(this,"ionNavDidChange",3),this.gestureOrAnimationInProgress=!1,this.mode=Object(_ionic_global_9a60c1b6_js__WEBPACK_IMPORTED_MODULE_8__.c)(this),this.animated=!0}var _lock,_transition2,_setRoot,_getRouteId,_setRouteId,_commit,_connectedCallback;return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(RouterOutlet,[{key:"swipeHandlerChanged",value:function swipeHandlerChanged(){this.gesture&&this.gesture.enable(void 0!==this.swipeHandler)}},{key:"connectedCallback",value:(_connectedCallback=_asyncToGenerator(regeneratorRuntime.mark((function _callee(){var onStart,_this=this;return regeneratorRuntime.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return onStart=function onStart(){_this.gestureOrAnimationInProgress=!0,_this.swipeHandler&&_this.swipeHandler.onStart()},_context.next=3,__webpack_require__.e(8).then(__webpack_require__.bind(null,1067));case 3:this.gesture=_context.sent.createSwipeBackGesture(this.el,(function(){return!_this.gestureOrAnimationInProgress&&!!_this.swipeHandler&&_this.swipeHandler.canStart()}),(function(){return onStart()}),(function(step){return _this.ani&&_this.ani.progressStep(step)}),(function(shouldComplete,step,dur){if(_this.ani){_this.ani.onFinish((function(){_this.gestureOrAnimationInProgress=!1,_this.swipeHandler&&_this.swipeHandler.onEnd(shouldComplete)}),{oneTimeCallback:!0});var newStepValue=shouldComplete?-.001:.001;shouldComplete?newStepValue+=Object(_cubic_bezier_ed243a9b_js__WEBPACK_IMPORTED_MODULE_9__.a)([0,0],[.32,.72],[0,1],[1,1],step)[0]:(_this.ani.easing("cubic-bezier(1, 0, 0.68, 0.28)"),newStepValue+=Object(_cubic_bezier_ed243a9b_js__WEBPACK_IMPORTED_MODULE_9__.a)([0,0],[1,0],[.68,.28],[1,1],step)[0]),_this.ani.progressEnd(shouldComplete?1:0,newStepValue,dur)}else _this.gestureOrAnimationInProgress=!1})),this.swipeHandlerChanged();case 5:case"end":return _context.stop()}}),_callee,this)}))),function connectedCallback(){return _connectedCallback.apply(this,arguments)})},{key:"componentWillLoad",value:function componentWillLoad(){this.ionNavWillLoad.emit()}},{key:"disconnectedCallback",value:function disconnectedCallback(){this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}},{key:"commit",value:(_commit=_asyncToGenerator(regeneratorRuntime.mark((function _callee2(enteringEl,leavingEl,opts){var unlock,changed;return regeneratorRuntime.wrap((function _callee2$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:return _context2.next=2,this.lock();case 2:return unlock=_context2.sent,changed=!1,_context2.prev=4,_context2.next=7,this.transition(enteringEl,leavingEl,opts);case 7:changed=_context2.sent,_context2.next=13;break;case 10:_context2.prev=10,_context2.t0=_context2.catch(4),console.error(_context2.t0);case 13:return unlock(),_context2.abrupt("return",changed);case 15:case"end":return _context2.stop()}}),_callee2,this,[[4,10]])}))),function commit(_x,_x2,_x3){return _commit.apply(this,arguments)})},{key:"setRouteId",value:(_setRouteId=_asyncToGenerator(regeneratorRuntime.mark((function _callee3(id,params,direction,animation){var changed;return regeneratorRuntime.wrap((function _callee3$(_context3){for(;;)switch(_context3.prev=_context3.next){case 0:return _context3.next=2,this.setRoot(id,params,{duration:"root"===direction?0:void 0,direction:"back"===direction?"back":"forward",animationBuilder:animation});case 2:return changed=_context3.sent,_context3.abrupt("return",{changed:changed,element:this.activeEl});case 4:case"end":return _context3.stop()}}),_callee3,this)}))),function setRouteId(_x4,_x5,_x6,_x7){return _setRouteId.apply(this,arguments)})},{key:"getRouteId",value:(_getRouteId=_asyncToGenerator(regeneratorRuntime.mark((function _callee4(){var active;return regeneratorRuntime.wrap((function _callee4$(_context4){for(;;)switch(_context4.prev=_context4.next){case 0:return active=this.activeEl,_context4.abrupt("return",active?{id:active.tagName,element:active}:void 0);case 2:case"end":return _context4.stop()}}),_callee4,this)}))),function getRouteId(){return _getRouteId.apply(this,arguments)})},{key:"setRoot",value:(_setRoot=_asyncToGenerator(regeneratorRuntime.mark((function _callee5(component,params,opts){var leavingEl,enteringEl;return regeneratorRuntime.wrap((function _callee5$(_context5){for(;;)switch(_context5.prev=_context5.next){case 0:if(this.activeComponent!==component){_context5.next=2;break}return _context5.abrupt("return",!1);case 2:return leavingEl=this.activeEl,_context5.next=5,Object(_framework_delegate_98ac1572_js__WEBPACK_IMPORTED_MODULE_10__.a)(this.delegate,this.el,component,["ion-page","ion-page-invisible"],params);case 5:return enteringEl=_context5.sent,this.activeComponent=component,this.activeEl=enteringEl,_context5.next=10,this.commit(enteringEl,leavingEl,opts);case 10:return _context5.next=12,Object(_framework_delegate_98ac1572_js__WEBPACK_IMPORTED_MODULE_10__.b)(this.delegate,leavingEl);case 12:return _context5.abrupt("return",!0);case 13:case"end":return _context5.stop()}}),_callee5,this)}))),function setRoot(_x8,_x9,_x10){return _setRoot.apply(this,arguments)})},{key:"transition",value:(_transition2=_asyncToGenerator(regeneratorRuntime.mark((function _callee6(enteringEl,leavingEl){var opts,el,mode,animated,animationBuilder,_this2=this,_args6=arguments;return regeneratorRuntime.wrap((function _callee6$(_context6){for(;;)switch(_context6.prev=_context6.next){case 0:if(opts=_args6.length>2&&void 0!==_args6[2]?_args6[2]:{},leavingEl!==enteringEl){_context6.next=3;break}return _context6.abrupt("return",!1);case 3:return this.ionNavWillChange.emit(),el=this.el,mode=this.mode,animated=this.animated&&_ionic_global_9a60c1b6_js__WEBPACK_IMPORTED_MODULE_8__.b.getBoolean("animated",!0),animationBuilder=opts.animationBuilder||this.animation||_ionic_global_9a60c1b6_js__WEBPACK_IMPORTED_MODULE_8__.b.get("navAnimation"),_context6.next=9,Object(_index_1ff80c68_js__WEBPACK_IMPORTED_MODULE_11__.h)(Object.assign(Object.assign({mode:mode,animated:animated,enteringEl:enteringEl,leavingEl:leavingEl,baseEl:el,progressCallback:opts.progressAnimation?function(ani){void 0===ani||_this2.gestureOrAnimationInProgress?_this2.ani=ani:(_this2.gestureOrAnimationInProgress=!0,ani.onFinish((function(){_this2.gestureOrAnimationInProgress=!1,_this2.swipeHandler&&_this2.swipeHandler.onEnd(!1)}),{oneTimeCallback:!0}),ani.progressEnd(0,0,0))}:void 0},opts),{animationBuilder:animationBuilder}));case 9:return this.ionNavDidChange.emit(),_context6.abrupt("return",!0);case 11:case"end":return _context6.stop()}}),_callee6,this)}))),function transition(_x11,_x12){return _transition2.apply(this,arguments)})},{key:"lock",value:(_lock=_asyncToGenerator(regeneratorRuntime.mark((function _callee7(){var p,resolve;return regeneratorRuntime.wrap((function _callee7$(_context7){for(;;)switch(_context7.prev=_context7.next){case 0:if(p=this.waitPromise,this.waitPromise=new Promise((function(r){return resolve=r})),void 0===p){_context7.next=5;break}return _context7.next=5,p;case 5:return _context7.abrupt("return",resolve);case 6:case"end":return _context7.stop()}}),_callee7,this)}))),function lock(){return _lock.apply(this,arguments)})},{key:"render",value:function render(){return Object(_index_4644c745_js__WEBPACK_IMPORTED_MODULE_7__.j)("slot",null)}},{key:"el",get:function get(){return Object(_index_4644c745_js__WEBPACK_IMPORTED_MODULE_7__.g)(this)}}],[{key:"watchers",get:function get(){return{swipeHandler:["swipeHandlerChanged"]}}}]),RouterOutlet}();RouterOutlet.style=":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}"}}]);