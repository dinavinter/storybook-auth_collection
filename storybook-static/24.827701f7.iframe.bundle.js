(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{1010:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return addEventListener})),__webpack_require__.d(__webpack_exports__,"b",(function(){return raf})),__webpack_require__.d(__webpack_exports__,"c",(function(){return componentOnReady})),__webpack_require__.d(__webpack_exports__,"d",(function(){return getAriaLabel})),__webpack_require__.d(__webpack_exports__,"e",(function(){return renderHiddenInput})),__webpack_require__.d(__webpack_exports__,"f",(function(){return clamp})),__webpack_require__.d(__webpack_exports__,"g",(function(){return getElementRoot})),__webpack_require__.d(__webpack_exports__,"h",(function(){return findItemLabel})),__webpack_require__.d(__webpack_exports__,"i",(function(){return debounceEvent})),__webpack_require__.d(__webpack_exports__,"j",(function(){return inheritAttributes})),__webpack_require__.d(__webpack_exports__,"k",(function(){return isEndSide})),__webpack_require__.d(__webpack_exports__,"l",(function(){return assert})),__webpack_require__.d(__webpack_exports__,"m",(function(){return debounce})),__webpack_require__.d(__webpack_exports__,"n",(function(){return hasShadowDom})),__webpack_require__.d(__webpack_exports__,"o",(function(){return now})),__webpack_require__.d(__webpack_exports__,"p",(function(){return pointerCoord})),__webpack_require__.d(__webpack_exports__,"q",(function(){return removeEventListener}));__webpack_require__(130),__webpack_require__(47),__webpack_require__(508),__webpack_require__(168),__webpack_require__(10),__webpack_require__(1012),__webpack_require__(509),__webpack_require__(117),__webpack_require__(28);var componentOnReady=function componentOnReady(el,callback){el.componentOnReady?el.componentOnReady().then((function(resolvedEl){return callback(resolvedEl)})):raf((function(){return callback(el)}))},inheritAttributes=function inheritAttributes(el){var attributes=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],attributeObject={};return attributes.forEach((function(attr){el.hasAttribute(attr)&&(null!==el.getAttribute(attr)&&(attributeObject[attr]=el.getAttribute(attr)),el.removeAttribute(attr))})),attributeObject},addEventListener=function addEventListener(el,eventName,callback,opts){if("undefined"!=typeof window){var win=window,config=win&&win.Ionic&&win.Ionic.config;if(config){var ael=config.get("_ael");if(ael)return ael(el,eventName,callback,opts);if(config._ael)return config._ael(el,eventName,callback,opts)}}return el.addEventListener(eventName,callback,opts)},removeEventListener=function removeEventListener(el,eventName,callback,opts){if("undefined"!=typeof window){var win=window,config=win&&win.Ionic&&win.Ionic.config;if(config){var rel=config.get("_rel");if(rel)return rel(el,eventName,callback,opts);if(config._rel)return config._rel(el,eventName,callback,opts)}}return el.removeEventListener(eventName,callback,opts)},getElementRoot=function getElementRoot(el){var fallback=arguments.length>1&&void 0!==arguments[1]?arguments[1]:el;return el.shadowRoot||fallback},raf=function raf(h){return"function"==typeof __zone_symbol__requestAnimationFrame?__zone_symbol__requestAnimationFrame(h):"function"==typeof requestAnimationFrame?requestAnimationFrame(h):setTimeout(h)},hasShadowDom=function hasShadowDom(el){return!!el.shadowRoot&&!!el.attachShadow},findItemLabel=function findItemLabel(componentEl){var itemEl=componentEl.closest("ion-item");return itemEl?itemEl.querySelector("ion-label"):null},getAriaLabel=function getAriaLabel(componentEl,inputId){var labelText,labelledBy=componentEl.getAttribute("aria-labelledby"),componentId=componentEl.id,labelId=null!==labelledBy&&""!==labelledBy.trim()?labelledBy:inputId+"-lbl",label=null!==labelledBy&&""!==labelledBy.trim()?document.getElementById(labelledBy):findItemLabel(componentEl);return label?(null===labelledBy&&(label.id=labelId),labelText=label.textContent,label.setAttribute("aria-hidden","true")):""!==componentId.trim()&&(label=document.querySelector('label[for="'+componentId+'"]'))&&(""!==label.id?labelId=label.id:label.id=labelId=componentId+"-lbl",labelText=label.textContent),{label:label,labelId:labelId,labelText:labelText}},renderHiddenInput=function renderHiddenInput(always,container,name,value,disabled){if(always||hasShadowDom(container)){var input=container.querySelector("input.aux-input");input||((input=container.ownerDocument.createElement("input")).type="hidden",input.classList.add("aux-input"),container.appendChild(input)),input.disabled=disabled,input.name=name,input.value=value||""}},clamp=function clamp(min,n,max){return Math.max(min,Math.min(n,max))},assert=function assert(actual,reason){if(!actual){var message="ASSERT: "+reason;throw console.error(message),new Error(message)}},now=function now(ev){return ev.timeStamp||Date.now()},pointerCoord=function pointerCoord(ev){if(ev){var changedTouches=ev.changedTouches;if(changedTouches&&changedTouches.length>0){var touch=changedTouches[0];return{x:touch.clientX,y:touch.clientY}}if(void 0!==ev.pageX)return{x:ev.pageX,y:ev.pageY}}return{x:0,y:0}},isEndSide=function isEndSide(side){var isRTL="rtl"===document.dir;switch(side){case"start":return isRTL;case"end":return!isRTL;default:throw new Error('"'+side+'" is not a valid value for [side]. Use "start" or "end" instead.')}},debounceEvent=function debounceEvent(event,wait){var original=event._original||event;return{_original:event,emit:debounce(original.emit.bind(original),wait)}},debounce=function debounce(func){var timer,wait=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return function(){clearTimeout(timer);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];timer=setTimeout.apply(void 0,[func,wait].concat(args))}}},1011:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return createColorClasses})),__webpack_require__.d(__webpack_exports__,"b",(function(){return getClassMap})),__webpack_require__.d(__webpack_exports__,"c",(function(){return hostContext})),__webpack_require__.d(__webpack_exports__,"d",(function(){return openURL}));__webpack_require__(18),__webpack_require__(339),__webpack_require__(82),__webpack_require__(38),__webpack_require__(51),__webpack_require__(32),__webpack_require__(168),__webpack_require__(130),__webpack_require__(47),__webpack_require__(69),__webpack_require__(13);function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}var hostContext=function hostContext(selector,el){return null!==el.closest(selector)},createColorClasses=function createColorClasses(color,cssClassMap){var _Object$assign;return"string"==typeof color&&color.length>0?Object.assign(((_Object$assign={"ion-color":!0})["ion-color-"+color]=!0,_Object$assign),cssClassMap):cssClassMap},getClassMap=function getClassMap(classes){var map={};return function getClassList(classes){return void 0!==classes?(Array.isArray(classes)?classes:classes.split(" ")).filter((function(c){return null!=c})).map((function(c){return c.trim()})).filter((function(c){return""!==c})):[]}(classes).forEach((function(c){return map[c]=!0})),map},SCHEME=/^[a-z][a-z0-9+\-.]*:/,openURL=function(){var _ref=function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}(regeneratorRuntime.mark((function _callee(url,ev,direction,animation){var router;return regeneratorRuntime.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:if(null==url||"#"===url[0]||SCHEME.test(url)){_context.next=5;break}if(!(router=document.querySelector("ion-router"))){_context.next=5;break}return null!=ev&&ev.preventDefault(),_context.abrupt("return",router.push(url,direction,animation));case 5:return _context.abrupt("return",!1);case 6:case"end":return _context.stop()}}),_callee)})));return function openURL(_x,_x2,_x3,_x4){return _ref.apply(this,arguments)}}()},1012:function(module,exports,__webpack_require__){__webpack_require__(22)({target:"Date",stat:!0},{now:function now(){return(new Date).getTime()}})},1019:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return hapticSelectionStart})),__webpack_require__.d(__webpack_exports__,"b",(function(){return hapticSelectionChanged})),__webpack_require__.d(__webpack_exports__,"c",(function(){return hapticImpact})),__webpack_require__.d(__webpack_exports__,"d",(function(){return hapticSelection})),__webpack_require__.d(__webpack_exports__,"e",(function(){return hapticSelectionEnd}));var HapticEngine={getEngine:function getEngine(){var win=window;return win.TapticEngine||win.Capacitor&&win.Capacitor.isPluginAvailable("Haptics")&&win.Capacitor.Plugins.Haptics},available:function available(){return!!this.getEngine()},isCordova:function isCordova(){return!!window.TapticEngine},isCapacitor:function isCapacitor(){return!!window.Capacitor},impact:function impact(options){var engine=this.getEngine();if(engine){var style=this.isCapacitor()?options.style.toUpperCase():options.style;engine.impact({style:style})}},notification:function notification(options){var engine=this.getEngine();if(engine){var style=this.isCapacitor()?options.style.toUpperCase():options.style;engine.notification({style:style})}},selection:function selection(){this.impact({style:"light"})},selectionStart:function selectionStart(){var engine=this.getEngine();engine&&(this.isCapacitor()?engine.selectionStart():engine.gestureSelectionStart())},selectionChanged:function selectionChanged(){var engine=this.getEngine();engine&&(this.isCapacitor()?engine.selectionChanged():engine.gestureSelectionChanged())},selectionEnd:function selectionEnd(){var engine=this.getEngine();engine&&(this.isCapacitor()?engine.selectionEnd():engine.gestureSelectionEnd())}},hapticSelection=function hapticSelection(){HapticEngine.selection()},hapticSelectionStart=function hapticSelectionStart(){HapticEngine.selectionStart()},hapticSelectionChanged=function hapticSelectionChanged(){HapticEngine.selectionChanged()},hapticSelectionEnd=function hapticSelectionEnd(){HapticEngine.selectionEnd()},hapticImpact=function hapticImpact(options){HapticEngine.impact(options)}},992:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ion_toggle",(function(){return Toggle}));__webpack_require__(10),__webpack_require__(1012),__webpack_require__(509),__webpack_require__(69),__webpack_require__(13),__webpack_require__(19),__webpack_require__(20),__webpack_require__(21),__webpack_require__(131);var _index_4644c745_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(146),_ionic_global_9a60c1b6_js__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(253),_helpers_2a92b02c_js__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(1010),_haptic_67928174_js__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(1019),_theme_12606872_js__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(1011);function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}var Toggle=function(){function Toggle(hostRef){var _this=this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Toggle),Object(_index_4644c745_js__WEBPACK_IMPORTED_MODULE_9__.m)(this,hostRef),this.ionChange=Object(_index_4644c745_js__WEBPACK_IMPORTED_MODULE_9__.e)(this,"ionChange",7),this.ionFocus=Object(_index_4644c745_js__WEBPACK_IMPORTED_MODULE_9__.e)(this,"ionFocus",7),this.ionBlur=Object(_index_4644c745_js__WEBPACK_IMPORTED_MODULE_9__.e)(this,"ionBlur",7),this.ionStyle=Object(_index_4644c745_js__WEBPACK_IMPORTED_MODULE_9__.e)(this,"ionStyle",7),this.inputId="ion-tg-"+toggleIds++,this.lastDrag=0,this.activated=!1,this.name=this.inputId,this.checked=!1,this.disabled=!1,this.value="on",this.onClick=function(ev){ev.preventDefault(),_this.lastDrag+300<Date.now()&&(_this.checked=!_this.checked)},this.onFocus=function(){_this.ionFocus.emit()},this.onBlur=function(){_this.ionBlur.emit()}}var _connectedCallback;return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(Toggle,[{key:"checkedChanged",value:function checkedChanged(isChecked){this.ionChange.emit({checked:isChecked,value:this.value})}},{key:"disabledChanged",value:function disabledChanged(){this.emitStyle(),this.gesture&&this.gesture.enable(!this.disabled)}},{key:"connectedCallback",value:(_connectedCallback=function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}(regeneratorRuntime.mark((function _callee(){var _this2=this;return regeneratorRuntime.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.next=2,__webpack_require__.e(2).then(__webpack_require__.bind(null,1016));case 2:this.gesture=_context.sent.createGesture({el:this.el,gestureName:"toggle",gesturePriority:100,threshold:5,passive:!1,onStart:function onStart(){return _this2.onStart()},onMove:function onMove(ev){return _this2.onMove(ev)},onEnd:function onEnd(ev){return _this2.onEnd(ev)}}),this.disabledChanged();case 4:case"end":return _context.stop()}}),_callee,this)}))),function connectedCallback(){return _connectedCallback.apply(this,arguments)})},{key:"disconnectedCallback",value:function disconnectedCallback(){this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}},{key:"componentWillLoad",value:function componentWillLoad(){this.emitStyle()}},{key:"emitStyle",value:function emitStyle(){this.ionStyle.emit({"interactive-disabled":this.disabled})}},{key:"onStart",value:function onStart(){this.activated=!0,this.setFocus()}},{key:"onMove",value:function onMove(detail){shouldToggle(document,this.checked,detail.deltaX,-10)&&(this.checked=!this.checked,Object(_haptic_67928174_js__WEBPACK_IMPORTED_MODULE_12__.d)())}},{key:"onEnd",value:function onEnd(ev){this.activated=!1,this.lastDrag=Date.now(),ev.event.preventDefault(),ev.event.stopImmediatePropagation()}},{key:"getValue",value:function getValue(){return this.value||""}},{key:"setFocus",value:function setFocus(){this.focusEl&&this.focusEl.focus()}},{key:"render",value:function render(){var _createColorClasses,_this3=this,activated=this.activated,color=this.color,checked=this.checked,disabled=this.disabled,el=this.el,inputId=this.inputId,name=this.name,mode=Object(_ionic_global_9a60c1b6_js__WEBPACK_IMPORTED_MODULE_10__.c)(this),_getAriaLabel=Object(_helpers_2a92b02c_js__WEBPACK_IMPORTED_MODULE_11__.d)(el,inputId),label=_getAriaLabel.label,labelId=_getAriaLabel.labelId,labelText=_getAriaLabel.labelText,value=this.getValue();return Object(_helpers_2a92b02c_js__WEBPACK_IMPORTED_MODULE_11__.e)(!0,el,name,checked?value:"",disabled),Object(_index_4644c745_js__WEBPACK_IMPORTED_MODULE_9__.j)(_index_4644c745_js__WEBPACK_IMPORTED_MODULE_9__.b,{onClick:this.onClick,"aria-labelledby":label?labelId:null,"aria-checked":""+checked,"aria-hidden":disabled?"true":null,role:"switch",class:Object(_theme_12606872_js__WEBPACK_IMPORTED_MODULE_13__.a)(color,(_createColorClasses={},_createColorClasses[mode]=!0,_createColorClasses["in-item"]=Object(_theme_12606872_js__WEBPACK_IMPORTED_MODULE_13__.c)("ion-item",el),_createColorClasses["toggle-activated"]=activated,_createColorClasses["toggle-checked"]=checked,_createColorClasses["toggle-disabled"]=disabled,_createColorClasses.interactive=!0,_createColorClasses))},Object(_index_4644c745_js__WEBPACK_IMPORTED_MODULE_9__.j)("div",{class:"toggle-icon",part:"track"},Object(_index_4644c745_js__WEBPACK_IMPORTED_MODULE_9__.j)("div",{class:"toggle-icon-wrapper"},Object(_index_4644c745_js__WEBPACK_IMPORTED_MODULE_9__.j)("div",{class:"toggle-inner",part:"handle"}))),Object(_index_4644c745_js__WEBPACK_IMPORTED_MODULE_9__.j)("label",{htmlFor:inputId},labelText),Object(_index_4644c745_js__WEBPACK_IMPORTED_MODULE_9__.j)("input",{type:"checkbox",role:"switch","aria-checked":""+checked,disabled:disabled,id:inputId,onFocus:function onFocus(){return _this3.onFocus()},onBlur:function onBlur(){return _this3.onBlur()},ref:function ref(focusEl){return _this3.focusEl=focusEl}}))}},{key:"el",get:function get(){return Object(_index_4644c745_js__WEBPACK_IMPORTED_MODULE_9__.g)(this)}}],[{key:"watchers",get:function get(){return{checked:["checkedChanged"],disabled:["disabledChanged"]}}}]),Toggle}(),shouldToggle=function shouldToggle(doc,checked,deltaX,margin){var isRTL="rtl"===doc.dir;return checked?!isRTL&&margin>deltaX||isRTL&&-margin<deltaX:!isRTL&&-margin<deltaX||isRTL&&margin>deltaX},toggleIds=0;Toggle.style={ios:":host{box-sizing:content-box !important;display:inline-block;position:relative;outline:none;contain:content;cursor:pointer;touch-action:none;user-select:none;z-index:2}:host(.ion-focused) input{border:2px solid #5e9ed6}:host(.toggle-disabled){pointer-events:none}label{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;appearance:none;outline:none;display:flex;align-items:center;opacity:0;pointer-events:none}[dir=rtl] label,:host-context([dir=rtl]) label{left:unset;right:unset;right:0}label::-moz-focus-inner{border:0}input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}.toggle-icon-wrapper{display:flex;position:relative;align-items:center;width:100%;height:100%;transition:var(--handle-transition);will-change:transform}.toggle-icon{border-radius:var(--border-radius);display:block;position:relative;width:100%;height:100%;background:var(--background);pointer-events:none;overflow:inherit}:host(.toggle-checked) .toggle-icon{background:var(--background-checked)}.toggle-inner{left:var(--handle-spacing);border-radius:var(--handle-border-radius);position:absolute;width:var(--handle-width);height:var(--handle-height);max-height:var(--handle-max-height);transition:var(--handle-transition);background:var(--handle-background);box-shadow:var(--handle-box-shadow);contain:strict}[dir=rtl] .toggle-inner,:host-context([dir=rtl]) .toggle-inner{left:unset;right:unset;right:var(--handle-spacing)}:host(.toggle-checked) .toggle-icon-wrapper{transform:translate3d(calc(100% - var(--handle-width)), 0, 0)}:host-context([dir=rtl]):host(.toggle-checked) .toggle-icon-wrapper,:host-context([dir=rtl]).toggle-checked .toggle-icon-wrapper{transform:translate3d(calc(-100% + var(--handle-width)), 0, 0)}:host(.toggle-checked) .toggle-inner{transform:translate3d(calc(var(--handle-spacing) * -2), 0, 0);background:var(--handle-background-checked)}:host-context([dir=rtl]):host(.toggle-checked) .toggle-inner,:host-context([dir=rtl]).toggle-checked .toggle-inner{transform:translate3d(calc(var(--handle-spacing) * 2), 0, 0)}:host{--background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.088);--background-checked:var(--ion-color-primary, #3880ff);--border-radius:16px;--handle-background:#ffffff;--handle-background-checked:#ffffff;--handle-border-radius:25.5px;--handle-box-shadow:0 3px 12px rgba(0, 0, 0, 0.16), 0 3px 1px rgba(0, 0, 0, 0.1);--handle-height:calc(32px - (2px * 2));--handle-max-height:calc(100% - (var(--handle-spacing) * 2));--handle-width:calc(32px - (2px * 2));--handle-spacing:2px;--handle-transition:transform 300ms, width 120ms ease-in-out 80ms, left 110ms ease-in-out 80ms, right 110ms ease-in-out 80ms;width:51px;height:32px;contain:strict;overflow:hidden}:host(.ion-color.toggle-checked) .toggle-icon{background:var(--ion-color-base)}.toggle-icon{transform:translate3d(0, 0, 0);transition:background-color 300ms}.toggle-inner{will-change:transform}:host(.toggle-activated) .toggle-icon::before,:host(.toggle-checked) .toggle-icon::before{transform:scale3d(0, 0, 0)}:host(.toggle-activated.toggle-checked) .toggle-inner::before{transform:scale3d(0, 0, 0)}:host(.toggle-activated) .toggle-inner{width:calc(var(--handle-width) + 6px)}:host(.toggle-activated.toggle-checked) .toggle-icon-wrapper{transform:translate3d(calc(100% - var(--handle-width) - 6px), 0, 0)}:host-context([dir=rtl]):host(.toggle-activated.toggle-checked) .toggle-icon-wrapper,:host-context([dir=rtl]).toggle-activated.toggle-checked .toggle-icon-wrapper{transform:translate3d(calc(-100% + var(--handle-width) + 6px), 0, 0)}:host(.toggle-disabled){opacity:0.3}:host(.in-item[slot]){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:20px;padding-right:10px;padding-top:6px;padding-bottom:5px}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host(.in-item[slot]){padding-left:unset;padding-right:unset;-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:10px;padding-inline-end:10px}}:host(.in-item[slot=start]){padding-left:0;padding-right:16px;padding-top:6px;padding-bottom:5px}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host(.in-item[slot=start]){padding-left:unset;padding-right:unset;-webkit-padding-start:0;padding-inline-start:0;-webkit-padding-end:16px;padding-inline-end:16px}}",md:":host{box-sizing:content-box !important;display:inline-block;position:relative;outline:none;contain:content;cursor:pointer;touch-action:none;user-select:none;z-index:2}:host(.ion-focused) input{border:2px solid #5e9ed6}:host(.toggle-disabled){pointer-events:none}label{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;appearance:none;outline:none;display:flex;align-items:center;opacity:0;pointer-events:none}[dir=rtl] label,:host-context([dir=rtl]) label{left:unset;right:unset;right:0}label::-moz-focus-inner{border:0}input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}.toggle-icon-wrapper{display:flex;position:relative;align-items:center;width:100%;height:100%;transition:var(--handle-transition);will-change:transform}.toggle-icon{border-radius:var(--border-radius);display:block;position:relative;width:100%;height:100%;background:var(--background);pointer-events:none;overflow:inherit}:host(.toggle-checked) .toggle-icon{background:var(--background-checked)}.toggle-inner{left:var(--handle-spacing);border-radius:var(--handle-border-radius);position:absolute;width:var(--handle-width);height:var(--handle-height);max-height:var(--handle-max-height);transition:var(--handle-transition);background:var(--handle-background);box-shadow:var(--handle-box-shadow);contain:strict}[dir=rtl] .toggle-inner,:host-context([dir=rtl]) .toggle-inner{left:unset;right:unset;right:var(--handle-spacing)}:host(.toggle-checked) .toggle-icon-wrapper{transform:translate3d(calc(100% - var(--handle-width)), 0, 0)}:host-context([dir=rtl]):host(.toggle-checked) .toggle-icon-wrapper,:host-context([dir=rtl]).toggle-checked .toggle-icon-wrapper{transform:translate3d(calc(-100% + var(--handle-width)), 0, 0)}:host(.toggle-checked) .toggle-inner{transform:translate3d(calc(var(--handle-spacing) * -2), 0, 0);background:var(--handle-background-checked)}:host-context([dir=rtl]):host(.toggle-checked) .toggle-inner,:host-context([dir=rtl]).toggle-checked .toggle-inner{transform:translate3d(calc(var(--handle-spacing) * 2), 0, 0)}:host{--background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.39);--background-checked:rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.5);--border-radius:14px;--handle-background:#ffffff;--handle-background-checked:var(--ion-color-primary, #3880ff);--handle-border-radius:50%;--handle-box-shadow:0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);--handle-width:20px;--handle-height:20px;--handle-max-height:calc(100% + 6px);--handle-spacing:0;--handle-transition:transform 160ms cubic-bezier(0.4, 0, 0.2, 1), background-color 160ms cubic-bezier(0.4, 0, 0.2, 1);padding-left:12px;padding-right:12px;padding-top:12px;padding-bottom:12px;width:36px;height:14px;contain:strict}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px}}:host(.ion-color.toggle-checked) .toggle-icon{background:rgba(var(--ion-color-base-rgb), 0.5)}:host(.ion-color.toggle-checked) .toggle-inner{background:var(--ion-color-base)}.toggle-icon{transition:background-color 160ms}.toggle-inner{will-change:background-color, transform}:host(.toggle-disabled){opacity:0.3}:host(.in-item[slot]){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:16px;padding-right:0;padding-top:12px;padding-bottom:12px;cursor:pointer}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host(.in-item[slot]){padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:0;padding-inline-end:0}}:host(.in-item[slot=start]){padding-left:2px;padding-right:18px;padding-top:12px;padding-bottom:12px}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host(.in-item[slot=start]){padding-left:unset;padding-right:unset;-webkit-padding-start:2px;padding-inline-start:2px;-webkit-padding-end:18px;padding-inline-end:18px}}"}}}]);