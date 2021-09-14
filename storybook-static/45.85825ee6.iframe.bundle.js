(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{1011:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return createColorClasses})),__webpack_require__.d(__webpack_exports__,"b",(function(){return getClassMap})),__webpack_require__.d(__webpack_exports__,"c",(function(){return hostContext})),__webpack_require__.d(__webpack_exports__,"d",(function(){return openURL}));__webpack_require__(18),__webpack_require__(339),__webpack_require__(82),__webpack_require__(38),__webpack_require__(51),__webpack_require__(32),__webpack_require__(168),__webpack_require__(130),__webpack_require__(47),__webpack_require__(69),__webpack_require__(13);function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}var hostContext=function hostContext(selector,el){return null!==el.closest(selector)},createColorClasses=function createColorClasses(color,cssClassMap){var _Object$assign;return"string"==typeof color&&color.length>0?Object.assign(((_Object$assign={"ion-color":!0})["ion-color-"+color]=!0,_Object$assign),cssClassMap):cssClassMap},getClassMap=function getClassMap(classes){var map={};return function getClassList(classes){return void 0!==classes?(Array.isArray(classes)?classes:classes.split(" ")).filter((function(c){return null!=c})).map((function(c){return c.trim()})).filter((function(c){return""!==c})):[]}(classes).forEach((function(c){return map[c]=!0})),map},SCHEME=/^[a-z][a-z0-9+\-.]*:/,openURL=function(){var _ref=function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}(regeneratorRuntime.mark((function _callee(url,ev,direction,animation){var router;return regeneratorRuntime.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:if(null==url||"#"===url[0]||SCHEME.test(url)){_context.next=5;break}if(!(router=document.querySelector("ion-router"))){_context.next=5;break}return null!=ev&&ev.preventDefault(),_context.abrupt("return",router.push(url,direction,animation));case 5:return _context.abrupt("return",!1);case 6:case"end":return _context.stop()}}),_callee)})));return function openURL(_x,_x2,_x3,_x4){return _ref.apply(this,arguments)}}()},1021:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return sanitizeDOMString}));__webpack_require__(130),__webpack_require__(47),__webpack_require__(10),__webpack_require__(73),__webpack_require__(83);var sanitizeDOMString=function sanitizeDOMString(untrustedString){try{if(untrustedString instanceof IonicSafeString)return untrustedString.value;if(!isSanitizerEnabled()||"string"!=typeof untrustedString||""===untrustedString)return untrustedString;var documentFragment=document.createDocumentFragment(),workingDiv=document.createElement("div");documentFragment.appendChild(workingDiv),workingDiv.innerHTML=untrustedString,blockedTags.forEach((function(blockedTag){for(var getElementsToRemove=documentFragment.querySelectorAll(blockedTag),elementIndex=getElementsToRemove.length-1;elementIndex>=0;elementIndex--){var element=getElementsToRemove[elementIndex];element.parentNode?element.parentNode.removeChild(element):documentFragment.removeChild(element);for(var childElements=getElementChildren(element),childIndex=0;childIndex<childElements.length;childIndex++)sanitizeElement(childElements[childIndex])}}));for(var dfChildren=getElementChildren(documentFragment),childIndex=0;childIndex<dfChildren.length;childIndex++)sanitizeElement(dfChildren[childIndex]);var fragmentDiv=document.createElement("div");fragmentDiv.appendChild(documentFragment);var getInnerDiv=fragmentDiv.querySelector("div");return null!==getInnerDiv?getInnerDiv.innerHTML:fragmentDiv.innerHTML}catch(err){return console.error(err),""}},sanitizeElement=function sanitizeElement(element){if(!element.nodeType||1===element.nodeType){for(var i=element.attributes.length-1;i>=0;i--){var attribute=element.attributes.item(i),attributeName=attribute.name;if(allowedAttributes.includes(attributeName.toLowerCase())){var attributeValue=attribute.value;null!=attributeValue&&attributeValue.toLowerCase().includes("javascript:")&&element.removeAttribute(attributeName)}else element.removeAttribute(attributeName)}for(var childElements=getElementChildren(element),_i=0;_i<childElements.length;_i++)sanitizeElement(childElements[_i])}},getElementChildren=function getElementChildren(el){return null!=el.children?el.children:el.childNodes},isSanitizerEnabled=function isSanitizerEnabled(){var win=window,config=win&&win.Ionic&&win.Ionic.config;return!config||(config.get?config.get("sanitizerEnabled",!0):!0===config.sanitizerEnabled||void 0===config.sanitizerEnabled)},allowedAttributes=["class","id","href","src","name","slot"],blockedTags=["script","style","iframe","meta","link","object","embed"],IonicSafeString=function IonicSafeString(value){!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,IonicSafeString),this.value=value}},948:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ion_loading",(function(){return Loading}));__webpack_require__(69),__webpack_require__(13),__webpack_require__(508),__webpack_require__(18),__webpack_require__(131);var _index_4644c745_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(146),_ionic_global_9a60c1b6_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(253),_overlays_19926d77_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(1018),_index_cc97b114_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(1021),_theme_12606872_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(1011),_animation_4e524c8e_js__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(1017);__webpack_require__(1015),__webpack_require__(1010);function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}var iosEnterAnimation=function iosEnterAnimation(baseEl){var baseAnimation=Object(_animation_4e524c8e_js__WEBPACK_IMPORTED_MODULE_10__.a)(),backdropAnimation=Object(_animation_4e524c8e_js__WEBPACK_IMPORTED_MODULE_10__.a)(),wrapperAnimation=Object(_animation_4e524c8e_js__WEBPACK_IMPORTED_MODULE_10__.a)();return backdropAnimation.addElement(baseEl.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),wrapperAnimation.addElement(baseEl.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.01,transform:"scale(1.1)"},{offset:1,opacity:1,transform:"scale(1)"}]),baseAnimation.addElement(baseEl).easing("ease-in-out").duration(200).addAnimation([backdropAnimation,wrapperAnimation])},iosLeaveAnimation=function iosLeaveAnimation(baseEl){var baseAnimation=Object(_animation_4e524c8e_js__WEBPACK_IMPORTED_MODULE_10__.a)(),backdropAnimation=Object(_animation_4e524c8e_js__WEBPACK_IMPORTED_MODULE_10__.a)(),wrapperAnimation=Object(_animation_4e524c8e_js__WEBPACK_IMPORTED_MODULE_10__.a)();return backdropAnimation.addElement(baseEl.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),wrapperAnimation.addElement(baseEl.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.99,transform:"scale(1)"},{offset:1,opacity:0,transform:"scale(0.9)"}]),baseAnimation.addElement(baseEl).easing("ease-in-out").duration(200).addAnimation([backdropAnimation,wrapperAnimation])},mdEnterAnimation=function mdEnterAnimation(baseEl){var baseAnimation=Object(_animation_4e524c8e_js__WEBPACK_IMPORTED_MODULE_10__.a)(),backdropAnimation=Object(_animation_4e524c8e_js__WEBPACK_IMPORTED_MODULE_10__.a)(),wrapperAnimation=Object(_animation_4e524c8e_js__WEBPACK_IMPORTED_MODULE_10__.a)();return backdropAnimation.addElement(baseEl.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),wrapperAnimation.addElement(baseEl.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.01,transform:"scale(1.1)"},{offset:1,opacity:1,transform:"scale(1)"}]),baseAnimation.addElement(baseEl).easing("ease-in-out").duration(200).addAnimation([backdropAnimation,wrapperAnimation])},mdLeaveAnimation=function mdLeaveAnimation(baseEl){var baseAnimation=Object(_animation_4e524c8e_js__WEBPACK_IMPORTED_MODULE_10__.a)(),backdropAnimation=Object(_animation_4e524c8e_js__WEBPACK_IMPORTED_MODULE_10__.a)(),wrapperAnimation=Object(_animation_4e524c8e_js__WEBPACK_IMPORTED_MODULE_10__.a)();return backdropAnimation.addElement(baseEl.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),wrapperAnimation.addElement(baseEl.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.99,transform:"scale(1)"},{offset:1,opacity:0,transform:"scale(0.9)"}]),baseAnimation.addElement(baseEl).easing("ease-in-out").duration(200).addAnimation([backdropAnimation,wrapperAnimation])},Loading=function(){function Loading(hostRef){var _this=this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Loading),Object(_index_4644c745_js__WEBPACK_IMPORTED_MODULE_5__.m)(this,hostRef),this.didPresent=Object(_index_4644c745_js__WEBPACK_IMPORTED_MODULE_5__.e)(this,"ionLoadingDidPresent",7),this.willPresent=Object(_index_4644c745_js__WEBPACK_IMPORTED_MODULE_5__.e)(this,"ionLoadingWillPresent",7),this.willDismiss=Object(_index_4644c745_js__WEBPACK_IMPORTED_MODULE_5__.e)(this,"ionLoadingWillDismiss",7),this.didDismiss=Object(_index_4644c745_js__WEBPACK_IMPORTED_MODULE_5__.e)(this,"ionLoadingDidDismiss",7),this.presented=!1,this.keyboardClose=!0,this.duration=0,this.backdropDismiss=!1,this.showBackdrop=!0,this.translucent=!1,this.animated=!0,this.onBackdropTap=function(){_this.dismiss(void 0,_overlays_19926d77_js__WEBPACK_IMPORTED_MODULE_7__.a)}}var _present2;return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(Loading,[{key:"connectedCallback",value:function connectedCallback(){Object(_overlays_19926d77_js__WEBPACK_IMPORTED_MODULE_7__.c)(this.el)}},{key:"componentWillLoad",value:function componentWillLoad(){if(void 0===this.spinner){var mode=Object(_ionic_global_9a60c1b6_js__WEBPACK_IMPORTED_MODULE_6__.c)(this);this.spinner=_ionic_global_9a60c1b6_js__WEBPACK_IMPORTED_MODULE_6__.b.get("loadingSpinner",_ionic_global_9a60c1b6_js__WEBPACK_IMPORTED_MODULE_6__.b.get("spinner","ios"===mode?"lines":"crescent"))}}},{key:"present",value:(_present2=function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}(regeneratorRuntime.mark((function _callee(){var _this2=this;return regeneratorRuntime.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.next=2,Object(_overlays_19926d77_js__WEBPACK_IMPORTED_MODULE_7__.b)(this,"loadingEnter",iosEnterAnimation,mdEnterAnimation,void 0);case 2:this.duration>0&&(this.durationTimeout=setTimeout((function(){return _this2.dismiss()}),this.duration+10));case 3:case"end":return _context.stop()}}),_callee,this)}))),function present(){return _present2.apply(this,arguments)})},{key:"dismiss",value:function dismiss(data,role){return this.durationTimeout&&clearTimeout(this.durationTimeout),Object(_overlays_19926d77_js__WEBPACK_IMPORTED_MODULE_7__.e)(this,data,role,"loadingLeave",iosLeaveAnimation,mdLeaveAnimation)}},{key:"onDidDismiss",value:function onDidDismiss(){return Object(_overlays_19926d77_js__WEBPACK_IMPORTED_MODULE_7__.f)(this.el,"ionLoadingDidDismiss")}},{key:"onWillDismiss",value:function onWillDismiss(){return Object(_overlays_19926d77_js__WEBPACK_IMPORTED_MODULE_7__.f)(this.el,"ionLoadingWillDismiss")}},{key:"render",value:function render(){var _Object$assign,message=this.message,spinner=this.spinner,mode=Object(_ionic_global_9a60c1b6_js__WEBPACK_IMPORTED_MODULE_6__.c)(this);return Object(_index_4644c745_js__WEBPACK_IMPORTED_MODULE_5__.j)(_index_4644c745_js__WEBPACK_IMPORTED_MODULE_5__.b,{onIonBackdropTap:this.onBackdropTap,tabindex:"-1",style:{zIndex:""+(4e4+this.overlayIndex)},class:Object.assign(Object.assign({},Object(_theme_12606872_js__WEBPACK_IMPORTED_MODULE_9__.b)(this.cssClass)),(_Object$assign={},_Object$assign[mode]=!0,_Object$assign["loading-translucent"]=this.translucent,_Object$assign))},Object(_index_4644c745_js__WEBPACK_IMPORTED_MODULE_5__.j)("ion-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss}),Object(_index_4644c745_js__WEBPACK_IMPORTED_MODULE_5__.j)("div",{tabindex:"0"}),Object(_index_4644c745_js__WEBPACK_IMPORTED_MODULE_5__.j)("div",{class:"loading-wrapper ion-overlay-wrapper",role:"dialog"},spinner&&Object(_index_4644c745_js__WEBPACK_IMPORTED_MODULE_5__.j)("div",{class:"loading-spinner"},Object(_index_4644c745_js__WEBPACK_IMPORTED_MODULE_5__.j)("ion-spinner",{name:spinner,"aria-hidden":"true"})),message&&Object(_index_4644c745_js__WEBPACK_IMPORTED_MODULE_5__.j)("div",{class:"loading-content",innerHTML:Object(_index_cc97b114_js__WEBPACK_IMPORTED_MODULE_8__.a)(message)})),Object(_index_4644c745_js__WEBPACK_IMPORTED_MODULE_5__.j)("div",{tabindex:"0"}))}},{key:"el",get:function get(){return Object(_index_4644c745_js__WEBPACK_IMPORTED_MODULE_5__.g)(this)}}]),Loading}();Loading.style={ios:".sc-ion-loading-ios-h{--min-width:auto;--width:auto;--min-height:auto;--height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:flex;position:fixed;align-items:center;justify-content:center;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;touch-action:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-loading-ios-h{display:none}.loading-wrapper.sc-ion-loading-ios{display:flex;align-items:inherit;justify-content:inherit;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);opacity:0;z-index:10}.spinner-lines.sc-ion-loading-ios,.spinner-lines-small.sc-ion-loading-ios,.spinner-bubbles.sc-ion-loading-ios,.spinner-circles.sc-ion-loading-ios,.spinner-crescent.sc-ion-loading-ios,.spinner-dots.sc-ion-loading-ios{color:var(--spinner-color)}.sc-ion-loading-ios-h{--background:var(--ion-overlay-background-color, var(--ion-color-step-100, #f9f9f9));--max-width:270px;--max-height:90%;--spinner-color:var(--ion-color-step-600, #666666);--backdrop-opacity:var(--ion-backdrop-opacity, 0.3);color:var(--ion-text-color, #000);font-size:14px}.loading-wrapper.sc-ion-loading-ios{border-radius:8px;padding-left:34px;padding-right:34px;padding-top:24px;padding-bottom:24px}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){.loading-wrapper.sc-ion-loading-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:34px;padding-inline-start:34px;-webkit-padding-end:34px;padding-inline-end:34px}}@supports (backdrop-filter: blur(0)){.loading-translucent.sc-ion-loading-ios-h .loading-wrapper.sc-ion-loading-ios{background-color:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);backdrop-filter:saturate(180%) blur(20px)}}.loading-content.sc-ion-loading-ios{font-weight:bold}.loading-spinner.sc-ion-loading-ios+.loading-content.sc-ion-loading-ios{margin-left:16px}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){.loading-spinner.sc-ion-loading-ios+.loading-content.sc-ion-loading-ios{margin-left:unset;-webkit-margin-start:16px;margin-inline-start:16px}}",md:".sc-ion-loading-md-h{--min-width:auto;--width:auto;--min-height:auto;--height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:flex;position:fixed;align-items:center;justify-content:center;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;touch-action:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-loading-md-h{display:none}.loading-wrapper.sc-ion-loading-md{display:flex;align-items:inherit;justify-content:inherit;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);opacity:0;z-index:10}.spinner-lines.sc-ion-loading-md,.spinner-lines-small.sc-ion-loading-md,.spinner-bubbles.sc-ion-loading-md,.spinner-circles.sc-ion-loading-md,.spinner-crescent.sc-ion-loading-md,.spinner-dots.sc-ion-loading-md{color:var(--spinner-color)}.sc-ion-loading-md-h{--background:var(--ion-color-step-50, #f2f2f2);--max-width:280px;--max-height:90%;--spinner-color:var(--ion-color-primary, #3880ff);--backdrop-opacity:var(--ion-backdrop-opacity, 0.32);color:var(--ion-color-step-850, #262626);font-size:14px}.loading-wrapper.sc-ion-loading-md{border-radius:2px;padding-left:24px;padding-right:24px;padding-top:24px;padding-bottom:24px;box-shadow:0 16px 20px rgba(0, 0, 0, 0.4)}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){.loading-wrapper.sc-ion-loading-md{padding-left:unset;padding-right:unset;-webkit-padding-start:24px;padding-inline-start:24px;-webkit-padding-end:24px;padding-inline-end:24px}}.loading-spinner.sc-ion-loading-md+.loading-content.sc-ion-loading-md{margin-left:16px}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){.loading-spinner.sc-ion-loading-md+.loading-content.sc-ion-loading-md{margin-left:unset;-webkit-margin-start:16px;margin-inline-start:16px}}"}}}]);