(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{1011:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return createColorClasses})),__webpack_require__.d(__webpack_exports__,"b",(function(){return getClassMap})),__webpack_require__.d(__webpack_exports__,"c",(function(){return hostContext})),__webpack_require__.d(__webpack_exports__,"d",(function(){return openURL}));__webpack_require__(18),__webpack_require__(339),__webpack_require__(82),__webpack_require__(38),__webpack_require__(51),__webpack_require__(32),__webpack_require__(168),__webpack_require__(130),__webpack_require__(47),__webpack_require__(69),__webpack_require__(13);function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}var hostContext=function hostContext(selector,el){return null!==el.closest(selector)},createColorClasses=function createColorClasses(color,cssClassMap){var _Object$assign;return"string"==typeof color&&color.length>0?Object.assign(((_Object$assign={"ion-color":!0})["ion-color-"+color]=!0,_Object$assign),cssClassMap):cssClassMap},getClassMap=function getClassMap(classes){var map={};return function getClassList(classes){return void 0!==classes?(Array.isArray(classes)?classes:classes.split(" ")).filter((function(c){return null!=c})).map((function(c){return c.trim()})).filter((function(c){return""!==c})):[]}(classes).forEach((function(c){return map[c]=!0})),map},SCHEME=/^[a-z][a-z0-9+\-.]*:/,openURL=function(){var _ref=function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}(regeneratorRuntime.mark((function _callee(url,ev,direction,animation){var router;return regeneratorRuntime.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:if(null==url||"#"===url[0]||SCHEME.test(url)){_context.next=5;break}if(!(router=document.querySelector("ion-router"))){_context.next=5;break}return null!=ev&&ev.preventDefault(),_context.abrupt("return",router.push(url,direction,animation));case 5:return _context.abrupt("return",!1);case 6:case"end":return _context.stop()}}),_callee)})));return function openURL(_x,_x2,_x3,_x4){return _ref.apply(this,arguments)}}()},1021:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return sanitizeDOMString}));__webpack_require__(130),__webpack_require__(47),__webpack_require__(10),__webpack_require__(73),__webpack_require__(83);var sanitizeDOMString=function sanitizeDOMString(untrustedString){try{if(untrustedString instanceof IonicSafeString)return untrustedString.value;if(!isSanitizerEnabled()||"string"!=typeof untrustedString||""===untrustedString)return untrustedString;var documentFragment=document.createDocumentFragment(),workingDiv=document.createElement("div");documentFragment.appendChild(workingDiv),workingDiv.innerHTML=untrustedString,blockedTags.forEach((function(blockedTag){for(var getElementsToRemove=documentFragment.querySelectorAll(blockedTag),elementIndex=getElementsToRemove.length-1;elementIndex>=0;elementIndex--){var element=getElementsToRemove[elementIndex];element.parentNode?element.parentNode.removeChild(element):documentFragment.removeChild(element);for(var childElements=getElementChildren(element),childIndex=0;childIndex<childElements.length;childIndex++)sanitizeElement(childElements[childIndex])}}));for(var dfChildren=getElementChildren(documentFragment),childIndex=0;childIndex<dfChildren.length;childIndex++)sanitizeElement(dfChildren[childIndex]);var fragmentDiv=document.createElement("div");fragmentDiv.appendChild(documentFragment);var getInnerDiv=fragmentDiv.querySelector("div");return null!==getInnerDiv?getInnerDiv.innerHTML:fragmentDiv.innerHTML}catch(err){return console.error(err),""}},sanitizeElement=function sanitizeElement(element){if(!element.nodeType||1===element.nodeType){for(var i=element.attributes.length-1;i>=0;i--){var attribute=element.attributes.item(i),attributeName=attribute.name;if(allowedAttributes.includes(attributeName.toLowerCase())){var attributeValue=attribute.value;null!=attributeValue&&attributeValue.toLowerCase().includes("javascript:")&&element.removeAttribute(attributeName)}else element.removeAttribute(attributeName)}for(var childElements=getElementChildren(element),_i=0;_i<childElements.length;_i++)sanitizeElement(childElements[_i])}},getElementChildren=function getElementChildren(el){return null!=el.children?el.children:el.childNodes},isSanitizerEnabled=function isSanitizerEnabled(){var win=window,config=win&&win.Ionic&&win.Ionic.config;return!config||(config.get?config.get("sanitizerEnabled",!0):!0===config.sanitizerEnabled||void 0===config.sanitizerEnabled)},allowedAttributes=["class","id","href","src","name","slot"],blockedTags=["script","style","iframe","meta","link","object","embed"],IonicSafeString=function IonicSafeString(value){!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,IonicSafeString),this.value=value}},991:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ion_toast",(function(){return Toast}));__webpack_require__(105),__webpack_require__(69),__webpack_require__(13),__webpack_require__(508),__webpack_require__(32),__webpack_require__(51),__webpack_require__(18),__webpack_require__(131);var _index_4644c745_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(146),_ionic_global_9a60c1b6_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(253),_overlays_19926d77_js__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(1018),_index_cc97b114_js__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(1021),_theme_12606872_js__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(1011),_animation_4e524c8e_js__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(1017);__webpack_require__(1015),__webpack_require__(1010);function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}var iosEnterAnimation=function iosEnterAnimation(baseEl,position){var baseAnimation=Object(_animation_4e524c8e_js__WEBPACK_IMPORTED_MODULE_13__.a)(),wrapperAnimation=Object(_animation_4e524c8e_js__WEBPACK_IMPORTED_MODULE_13__.a)(),hostEl=baseEl.host||baseEl,wrapperEl=baseEl.querySelector(".toast-wrapper");switch(wrapperAnimation.addElement(wrapperEl),position){case"top":wrapperAnimation.fromTo("transform","translateY(-100%)","translateY(calc(10px + var(--ion-safe-area-top, 0px)))");break;case"middle":var topPosition=Math.floor(hostEl.clientHeight/2-wrapperEl.clientHeight/2);wrapperEl.style.top=topPosition+"px",wrapperAnimation.fromTo("opacity",.01,1);break;default:wrapperAnimation.fromTo("transform","translateY(100%)","translateY(calc(-10px - var(--ion-safe-area-bottom, 0px)))")}return baseAnimation.addElement(hostEl).easing("cubic-bezier(.155,1.105,.295,1.12)").duration(400).addAnimation(wrapperAnimation)},iosLeaveAnimation=function iosLeaveAnimation(baseEl,position){var baseAnimation=Object(_animation_4e524c8e_js__WEBPACK_IMPORTED_MODULE_13__.a)(),wrapperAnimation=Object(_animation_4e524c8e_js__WEBPACK_IMPORTED_MODULE_13__.a)(),hostEl=baseEl.host||baseEl,wrapperEl=baseEl.querySelector(".toast-wrapper");switch(wrapperAnimation.addElement(wrapperEl),position){case"top":wrapperAnimation.fromTo("transform","translateY(calc(10px + var(--ion-safe-area-top, 0px)))","translateY(-100%)");break;case"middle":wrapperAnimation.fromTo("opacity",.99,0);break;default:wrapperAnimation.fromTo("transform","translateY(calc(-10px - var(--ion-safe-area-bottom, 0px)))","translateY(100%)")}return baseAnimation.addElement(hostEl).easing("cubic-bezier(.36,.66,.04,1)").duration(300).addAnimation(wrapperAnimation)},mdEnterAnimation=function mdEnterAnimation(baseEl,position){var baseAnimation=Object(_animation_4e524c8e_js__WEBPACK_IMPORTED_MODULE_13__.a)(),wrapperAnimation=Object(_animation_4e524c8e_js__WEBPACK_IMPORTED_MODULE_13__.a)(),hostEl=baseEl.host||baseEl,wrapperEl=baseEl.querySelector(".toast-wrapper");switch(wrapperAnimation.addElement(wrapperEl),position){case"top":wrapperEl.style.top="calc(8px + var(--ion-safe-area-top, 0px))",wrapperAnimation.fromTo("opacity",.01,1);break;case"middle":var topPosition=Math.floor(hostEl.clientHeight/2-wrapperEl.clientHeight/2);wrapperEl.style.top=topPosition+"px",wrapperAnimation.fromTo("opacity",.01,1);break;default:wrapperEl.style.bottom="calc(8px + var(--ion-safe-area-bottom, 0px))",wrapperAnimation.fromTo("opacity",.01,1)}return baseAnimation.addElement(hostEl).easing("cubic-bezier(.36,.66,.04,1)").duration(400).addAnimation(wrapperAnimation)},mdLeaveAnimation=function mdLeaveAnimation(baseEl){var baseAnimation=Object(_animation_4e524c8e_js__WEBPACK_IMPORTED_MODULE_13__.a)(),wrapperAnimation=Object(_animation_4e524c8e_js__WEBPACK_IMPORTED_MODULE_13__.a)(),hostEl=baseEl.host||baseEl,wrapperEl=baseEl.querySelector(".toast-wrapper");return wrapperAnimation.addElement(wrapperEl).fromTo("opacity",.99,0),baseAnimation.addElement(hostEl).easing("cubic-bezier(.36,.66,.04,1)").duration(300).addAnimation(wrapperAnimation)},Toast=function(){function Toast(hostRef){var _this=this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Toast),Object(_index_4644c745_js__WEBPACK_IMPORTED_MODULE_8__.m)(this,hostRef),this.didPresent=Object(_index_4644c745_js__WEBPACK_IMPORTED_MODULE_8__.e)(this,"ionToastDidPresent",7),this.willPresent=Object(_index_4644c745_js__WEBPACK_IMPORTED_MODULE_8__.e)(this,"ionToastWillPresent",7),this.willDismiss=Object(_index_4644c745_js__WEBPACK_IMPORTED_MODULE_8__.e)(this,"ionToastWillDismiss",7),this.didDismiss=Object(_index_4644c745_js__WEBPACK_IMPORTED_MODULE_8__.e)(this,"ionToastDidDismiss",7),this.presented=!1,this.duration=0,this.keyboardClose=!1,this.position="bottom",this.translucent=!1,this.animated=!0,this.dispatchCancelHandler=function(ev){var role=ev.detail.role;if(Object(_overlays_19926d77_js__WEBPACK_IMPORTED_MODULE_10__.j)(role)){var cancelButton=_this.getButtons().find((function(b){return"cancel"===b.role}));_this.callButtonHandler(cancelButton)}}}var _callButtonHandler,_buttonClick,_present2;return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(Toast,[{key:"connectedCallback",value:function connectedCallback(){Object(_overlays_19926d77_js__WEBPACK_IMPORTED_MODULE_10__.c)(this.el)}},{key:"present",value:(_present2=_asyncToGenerator(regeneratorRuntime.mark((function _callee(){var _this2=this;return regeneratorRuntime.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.next=2,Object(_overlays_19926d77_js__WEBPACK_IMPORTED_MODULE_10__.b)(this,"toastEnter",iosEnterAnimation,mdEnterAnimation,this.position);case 2:this.duration>0&&(this.durationTimeout=setTimeout((function(){return _this2.dismiss(void 0,"timeout")}),this.duration));case 3:case"end":return _context.stop()}}),_callee,this)}))),function present(){return _present2.apply(this,arguments)})},{key:"dismiss",value:function dismiss(data,role){return this.durationTimeout&&clearTimeout(this.durationTimeout),Object(_overlays_19926d77_js__WEBPACK_IMPORTED_MODULE_10__.e)(this,data,role,"toastLeave",iosLeaveAnimation,mdLeaveAnimation,this.position)}},{key:"onDidDismiss",value:function onDidDismiss(){return Object(_overlays_19926d77_js__WEBPACK_IMPORTED_MODULE_10__.f)(this.el,"ionToastDidDismiss")}},{key:"onWillDismiss",value:function onWillDismiss(){return Object(_overlays_19926d77_js__WEBPACK_IMPORTED_MODULE_10__.f)(this.el,"ionToastWillDismiss")}},{key:"getButtons",value:function getButtons(){return this.buttons?this.buttons.map((function(b){return"string"==typeof b?{text:b}:b})):[]}},{key:"buttonClick",value:(_buttonClick=_asyncToGenerator(regeneratorRuntime.mark((function _callee2(button){var role;return regeneratorRuntime.wrap((function _callee2$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:if(role=button.role,!Object(_overlays_19926d77_js__WEBPACK_IMPORTED_MODULE_10__.j)(role)){_context2.next=3;break}return _context2.abrupt("return",this.dismiss(void 0,role));case 3:return _context2.next=5,this.callButtonHandler(button);case 5:if(!_context2.sent){_context2.next=8;break}return _context2.abrupt("return",this.dismiss(void 0,role));case 8:return _context2.abrupt("return",Promise.resolve());case 9:case"end":return _context2.stop()}}),_callee2,this)}))),function buttonClick(_x){return _buttonClick.apply(this,arguments)})},{key:"callButtonHandler",value:(_callButtonHandler=_asyncToGenerator(regeneratorRuntime.mark((function _callee3(button){return regeneratorRuntime.wrap((function _callee3$(_context3){for(;;)switch(_context3.prev=_context3.next){case 0:if(!button||!button.handler){_context3.next=12;break}return _context3.prev=1,_context3.next=4,Object(_overlays_19926d77_js__WEBPACK_IMPORTED_MODULE_10__.l)(button.handler);case 4:if(!1!==_context3.sent){_context3.next=7;break}return _context3.abrupt("return",!1);case 7:_context3.next=12;break;case 9:_context3.prev=9,_context3.t0=_context3.catch(1),console.error(_context3.t0);case 12:return _context3.abrupt("return",!0);case 13:case"end":return _context3.stop()}}),_callee3,null,[[1,9]])}))),function callButtonHandler(_x2){return _callButtonHandler.apply(this,arguments)})},{key:"renderButtons",value:function renderButtons(buttons,side){var _buttonGroupsClasses,_this3=this;if(0!==buttons.length){var mode=Object(_ionic_global_9a60c1b6_js__WEBPACK_IMPORTED_MODULE_9__.c)(this),buttonGroupsClasses=((_buttonGroupsClasses={"toast-button-group":!0})["toast-button-group-"+side]=!0,_buttonGroupsClasses);return Object(_index_4644c745_js__WEBPACK_IMPORTED_MODULE_8__.j)("div",{class:buttonGroupsClasses},buttons.map((function(b){return Object(_index_4644c745_js__WEBPACK_IMPORTED_MODULE_8__.j)("button",{type:"button",class:buttonClass(b),tabIndex:0,onClick:function onClick(){return _this3.buttonClick(b)},part:"button"},Object(_index_4644c745_js__WEBPACK_IMPORTED_MODULE_8__.j)("div",{class:"toast-button-inner"},b.icon&&Object(_index_4644c745_js__WEBPACK_IMPORTED_MODULE_8__.j)("ion-icon",{icon:b.icon,slot:void 0===b.text?"icon-only":void 0,class:"toast-icon"}),b.text),"md"===mode&&Object(_index_4644c745_js__WEBPACK_IMPORTED_MODULE_8__.j)("ion-ripple-effect",{type:void 0!==b.icon&&void 0===b.text?"unbounded":"bounded"}))})))}}},{key:"render",value:function render(){var _wrapperClass,_Object$assign,allButtons=this.getButtons(),startButtons=allButtons.filter((function(b){return"start"===b.side})),endButtons=allButtons.filter((function(b){return"start"!==b.side})),mode=Object(_ionic_global_9a60c1b6_js__WEBPACK_IMPORTED_MODULE_9__.c)(this),wrapperClass=((_wrapperClass={"toast-wrapper":!0})["toast-"+this.position]=!0,_wrapperClass);return Object(_index_4644c745_js__WEBPACK_IMPORTED_MODULE_8__.j)(_index_4644c745_js__WEBPACK_IMPORTED_MODULE_8__.b,{style:{zIndex:""+(6e4+this.overlayIndex)},class:Object(_theme_12606872_js__WEBPACK_IMPORTED_MODULE_12__.a)(this.color,Object.assign(Object.assign((_Object$assign={},_Object$assign[mode]=!0,_Object$assign),Object(_theme_12606872_js__WEBPACK_IMPORTED_MODULE_12__.b)(this.cssClass)),{"toast-translucent":this.translucent})),tabindex:"-1",onIonToastWillDismiss:this.dispatchCancelHandler},Object(_index_4644c745_js__WEBPACK_IMPORTED_MODULE_8__.j)("div",{class:wrapperClass},Object(_index_4644c745_js__WEBPACK_IMPORTED_MODULE_8__.j)("div",{class:"toast-container",part:"container"},this.renderButtons(startButtons,"start"),Object(_index_4644c745_js__WEBPACK_IMPORTED_MODULE_8__.j)("div",{class:"toast-content"},void 0!==this.header&&Object(_index_4644c745_js__WEBPACK_IMPORTED_MODULE_8__.j)("div",{class:"toast-header",part:"header"},this.header),void 0!==this.message&&Object(_index_4644c745_js__WEBPACK_IMPORTED_MODULE_8__.j)("div",{class:"toast-message",part:"message",innerHTML:Object(_index_cc97b114_js__WEBPACK_IMPORTED_MODULE_11__.a)(this.message)})),this.renderButtons(endButtons,"end"))))}},{key:"el",get:function get(){return Object(_index_4644c745_js__WEBPACK_IMPORTED_MODULE_8__.g)(this)}}]),Toast}(),buttonClass=function buttonClass(button){var _Object$assign2;return Object.assign(((_Object$assign2={"toast-button":!0,"toast-button-icon-only":void 0!==button.icon&&void 0===button.text})["toast-button-"+button.role]=void 0!==button.role,_Object$assign2["ion-focusable"]=!0,_Object$assign2["ion-activatable"]=!0,_Object$assign2),Object(_theme_12606872_js__WEBPACK_IMPORTED_MODULE_12__.b)(button.cssClass))};Toast.style={ios:":host{--border-width:0;--border-style:none;--border-color:initial;--box-shadow:none;--min-width:auto;--width:auto;--min-height:auto;--height:auto;--max-height:auto;--white-space:pre-wrap;left:0;top:0;display:block;position:absolute;width:100%;height:100%;outline:none;color:var(--color);font-family:var(--ion-font-family, inherit);contain:strict;z-index:1001;pointer-events:none}:host-context([dir=rtl]){left:unset;right:unset;right:0}:host(.overlay-hidden){display:none}:host(.ion-color){--button-color:inherit;color:var(--ion-color-contrast)}:host(.ion-color) .toast-button-cancel{color:inherit}:host(.ion-color) .toast-wrapper{background:var(--ion-color-base)}.toast-wrapper{border-radius:var(--border-radius);left:var(--start);right:var(--end);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);box-shadow:var(--box-shadow)}[dir=rtl] .toast-wrapper,:host-context([dir=rtl]) .toast-wrapper{left:unset;right:unset;left:var(--end);right:var(--start)}.toast-container{display:flex;align-items:center;pointer-events:auto;height:inherit;min-height:inherit;max-height:inherit;contain:content}.toast-content{display:flex;flex:1;flex-direction:column;justify-content:center}.toast-message{flex:1;white-space:var(--white-space)}.toast-button-group{display:flex}.toast-button{border:0;outline:none;color:var(--button-color);z-index:0}.toast-icon{font-size:1.4em}.toast-button-inner{display:flex;align-items:center}@media (any-hover: hover){.toast-button:hover{cursor:pointer}}:host{--background:var(--ion-color-step-50, #f2f2f2);--border-radius:14px;--button-color:var(--ion-color-primary, #3880ff);--color:var(--ion-color-step-850, #262626);--max-width:700px;--start:10px;--end:10px;font-size:14px}.toast-wrapper{margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;display:block;position:absolute;z-index:10}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){.toast-wrapper{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}@supports (backdrop-filter: blur(0)){:host(.toast-translucent) .toast-wrapper{background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);backdrop-filter:saturate(180%) blur(20px)}}.toast-wrapper.toast-top{transform:translate3d(0,  -100%,  0);top:0}.toast-wrapper.toast-middle{opacity:0.01}.toast-wrapper.toast-bottom{transform:translate3d(0,  100%,  0);bottom:0}.toast-content{padding-left:15px;padding-right:15px;padding-top:15px;padding-bottom:15px}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){.toast-content{padding-left:unset;padding-right:unset;-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px}}.toast-header{margin-bottom:2px;font-weight:500}.toast-button{padding-left:15px;padding-right:15px;padding-top:10px;padding-bottom:10px;height:44px;transition:background-color, opacity 100ms linear;border:0;background-color:transparent;font-family:var(--ion-font-family);font-size:17px;font-weight:500;overflow:hidden}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){.toast-button{padding-left:unset;padding-right:unset;-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px}}.toast-button.ion-activated{opacity:0.4}@media (any-hover: hover){.toast-button:hover{opacity:0.6}}",md:":host{--border-width:0;--border-style:none;--border-color:initial;--box-shadow:none;--min-width:auto;--width:auto;--min-height:auto;--height:auto;--max-height:auto;--white-space:pre-wrap;left:0;top:0;display:block;position:absolute;width:100%;height:100%;outline:none;color:var(--color);font-family:var(--ion-font-family, inherit);contain:strict;z-index:1001;pointer-events:none}:host-context([dir=rtl]){left:unset;right:unset;right:0}:host(.overlay-hidden){display:none}:host(.ion-color){--button-color:inherit;color:var(--ion-color-contrast)}:host(.ion-color) .toast-button-cancel{color:inherit}:host(.ion-color) .toast-wrapper{background:var(--ion-color-base)}.toast-wrapper{border-radius:var(--border-radius);left:var(--start);right:var(--end);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);box-shadow:var(--box-shadow)}[dir=rtl] .toast-wrapper,:host-context([dir=rtl]) .toast-wrapper{left:unset;right:unset;left:var(--end);right:var(--start)}.toast-container{display:flex;align-items:center;pointer-events:auto;height:inherit;min-height:inherit;max-height:inherit;contain:content}.toast-content{display:flex;flex:1;flex-direction:column;justify-content:center}.toast-message{flex:1;white-space:var(--white-space)}.toast-button-group{display:flex}.toast-button{border:0;outline:none;color:var(--button-color);z-index:0}.toast-icon{font-size:1.4em}.toast-button-inner{display:flex;align-items:center}@media (any-hover: hover){.toast-button:hover{cursor:pointer}}:host{--background:var(--ion-color-step-800, #333333);--border-radius:4px;--box-shadow:0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);--button-color:var(--ion-color-primary, #3880ff);--color:var(--ion-color-step-50, #f2f2f2);--max-width:700px;--start:8px;--end:8px;font-size:14px}.toast-wrapper{margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;display:block;position:absolute;opacity:0.01;z-index:10}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){.toast-wrapper{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.toast-content{padding-left:16px;padding-right:16px;padding-top:14px;padding-bottom:14px}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){.toast-content{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}.toast-header{margin-bottom:2px;font-weight:500;line-height:20px}.toast-message{line-height:20px}.toast-button-group-start{margin-left:8px}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){.toast-button-group-start{margin-left:unset;-webkit-margin-start:8px;margin-inline-start:8px}}.toast-button-group-end{margin-right:8px}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){.toast-button-group-end{margin-right:unset;-webkit-margin-end:8px;margin-inline-end:8px}}.toast-button{padding-left:15px;padding-right:15px;padding-top:10px;padding-bottom:10px;position:relative;background-color:transparent;font-family:var(--ion-font-family);font-size:14px;font-weight:500;letter-spacing:0.84px;text-transform:uppercase;overflow:hidden}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){.toast-button{padding-left:unset;padding-right:unset;-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px}}.toast-button-cancel{color:var(--ion-color-step-100, #e6e6e6)}.toast-button-icon-only{border-radius:50%;padding-left:9px;padding-right:9px;padding-top:9px;padding-bottom:9px;width:36px;height:36px}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){.toast-button-icon-only{padding-left:unset;padding-right:unset;-webkit-padding-start:9px;padding-inline-start:9px;-webkit-padding-end:9px;padding-inline-end:9px}}@media (any-hover: hover){.toast-button:hover{background-color:rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.08)}.toast-button-cancel:hover{background-color:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.08)}}"}}}]);