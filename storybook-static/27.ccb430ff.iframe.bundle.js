(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{1010:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return addEventListener})),__webpack_require__.d(__webpack_exports__,"b",(function(){return raf})),__webpack_require__.d(__webpack_exports__,"c",(function(){return componentOnReady})),__webpack_require__.d(__webpack_exports__,"d",(function(){return getAriaLabel})),__webpack_require__.d(__webpack_exports__,"e",(function(){return renderHiddenInput})),__webpack_require__.d(__webpack_exports__,"f",(function(){return clamp})),__webpack_require__.d(__webpack_exports__,"g",(function(){return getElementRoot})),__webpack_require__.d(__webpack_exports__,"h",(function(){return findItemLabel})),__webpack_require__.d(__webpack_exports__,"i",(function(){return debounceEvent})),__webpack_require__.d(__webpack_exports__,"j",(function(){return inheritAttributes})),__webpack_require__.d(__webpack_exports__,"k",(function(){return isEndSide})),__webpack_require__.d(__webpack_exports__,"l",(function(){return assert})),__webpack_require__.d(__webpack_exports__,"m",(function(){return debounce})),__webpack_require__.d(__webpack_exports__,"n",(function(){return hasShadowDom})),__webpack_require__.d(__webpack_exports__,"o",(function(){return now})),__webpack_require__.d(__webpack_exports__,"p",(function(){return pointerCoord})),__webpack_require__.d(__webpack_exports__,"q",(function(){return removeEventListener}));__webpack_require__(130),__webpack_require__(47),__webpack_require__(508),__webpack_require__(168),__webpack_require__(10),__webpack_require__(1012),__webpack_require__(509),__webpack_require__(117),__webpack_require__(28);var componentOnReady=function componentOnReady(el,callback){el.componentOnReady?el.componentOnReady().then((function(resolvedEl){return callback(resolvedEl)})):raf((function(){return callback(el)}))},inheritAttributes=function inheritAttributes(el){var attributes=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],attributeObject={};return attributes.forEach((function(attr){el.hasAttribute(attr)&&(null!==el.getAttribute(attr)&&(attributeObject[attr]=el.getAttribute(attr)),el.removeAttribute(attr))})),attributeObject},addEventListener=function addEventListener(el,eventName,callback,opts){if("undefined"!=typeof window){var win=window,config=win&&win.Ionic&&win.Ionic.config;if(config){var ael=config.get("_ael");if(ael)return ael(el,eventName,callback,opts);if(config._ael)return config._ael(el,eventName,callback,opts)}}return el.addEventListener(eventName,callback,opts)},removeEventListener=function removeEventListener(el,eventName,callback,opts){if("undefined"!=typeof window){var win=window,config=win&&win.Ionic&&win.Ionic.config;if(config){var rel=config.get("_rel");if(rel)return rel(el,eventName,callback,opts);if(config._rel)return config._rel(el,eventName,callback,opts)}}return el.removeEventListener(eventName,callback,opts)},getElementRoot=function getElementRoot(el){var fallback=arguments.length>1&&void 0!==arguments[1]?arguments[1]:el;return el.shadowRoot||fallback},raf=function raf(h){return"function"==typeof __zone_symbol__requestAnimationFrame?__zone_symbol__requestAnimationFrame(h):"function"==typeof requestAnimationFrame?requestAnimationFrame(h):setTimeout(h)},hasShadowDom=function hasShadowDom(el){return!!el.shadowRoot&&!!el.attachShadow},findItemLabel=function findItemLabel(componentEl){var itemEl=componentEl.closest("ion-item");return itemEl?itemEl.querySelector("ion-label"):null},getAriaLabel=function getAriaLabel(componentEl,inputId){var labelText,labelledBy=componentEl.getAttribute("aria-labelledby"),componentId=componentEl.id,labelId=null!==labelledBy&&""!==labelledBy.trim()?labelledBy:inputId+"-lbl",label=null!==labelledBy&&""!==labelledBy.trim()?document.getElementById(labelledBy):findItemLabel(componentEl);return label?(null===labelledBy&&(label.id=labelId),labelText=label.textContent,label.setAttribute("aria-hidden","true")):""!==componentId.trim()&&(label=document.querySelector('label[for="'+componentId+'"]'))&&(""!==label.id?labelId=label.id:label.id=labelId=componentId+"-lbl",labelText=label.textContent),{label:label,labelId:labelId,labelText:labelText}},renderHiddenInput=function renderHiddenInput(always,container,name,value,disabled){if(always||hasShadowDom(container)){var input=container.querySelector("input.aux-input");input||((input=container.ownerDocument.createElement("input")).type="hidden",input.classList.add("aux-input"),container.appendChild(input)),input.disabled=disabled,input.name=name,input.value=value||""}},clamp=function clamp(min,n,max){return Math.max(min,Math.min(n,max))},assert=function assert(actual,reason){if(!actual){var message="ASSERT: "+reason;throw console.error(message),new Error(message)}},now=function now(ev){return ev.timeStamp||Date.now()},pointerCoord=function pointerCoord(ev){if(ev){var changedTouches=ev.changedTouches;if(changedTouches&&changedTouches.length>0){var touch=changedTouches[0];return{x:touch.clientX,y:touch.clientY}}if(void 0!==ev.pageX)return{x:ev.pageX,y:ev.pageY}}return{x:0,y:0}},isEndSide=function isEndSide(side){var isRTL="rtl"===document.dir;switch(side){case"start":return isRTL;case"end":return!isRTL;default:throw new Error('"'+side+'" is not a valid value for [side]. Use "start" or "end" instead.')}},debounceEvent=function debounceEvent(event,wait){var original=event._original||event;return{_original:event,emit:debounce(original.emit.bind(original),wait)}},debounce=function debounce(func){var timer,wait=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return function(){clearTimeout(timer);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];timer=setTimeout.apply(void 0,[func,wait].concat(args))}}},1011:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return createColorClasses})),__webpack_require__.d(__webpack_exports__,"b",(function(){return getClassMap})),__webpack_require__.d(__webpack_exports__,"c",(function(){return hostContext})),__webpack_require__.d(__webpack_exports__,"d",(function(){return openURL}));__webpack_require__(18),__webpack_require__(339),__webpack_require__(82),__webpack_require__(38),__webpack_require__(51),__webpack_require__(32),__webpack_require__(168),__webpack_require__(130),__webpack_require__(47),__webpack_require__(69),__webpack_require__(13);function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}var hostContext=function hostContext(selector,el){return null!==el.closest(selector)},createColorClasses=function createColorClasses(color,cssClassMap){var _Object$assign;return"string"==typeof color&&color.length>0?Object.assign(((_Object$assign={"ion-color":!0})["ion-color-"+color]=!0,_Object$assign),cssClassMap):cssClassMap},getClassMap=function getClassMap(classes){var map={};return function getClassList(classes){return void 0!==classes?(Array.isArray(classes)?classes:classes.split(" ")).filter((function(c){return null!=c})).map((function(c){return c.trim()})).filter((function(c){return""!==c})):[]}(classes).forEach((function(c){return map[c]=!0})),map},SCHEME=/^[a-z][a-z0-9+\-.]*:/,openURL=function(){var _ref=function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}(regeneratorRuntime.mark((function _callee(url,ev,direction,animation){var router;return regeneratorRuntime.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:if(null==url||"#"===url[0]||SCHEME.test(url)){_context.next=5;break}if(!(router=document.querySelector("ion-router"))){_context.next=5;break}return null!=ev&&ev.preventDefault(),_context.abrupt("return",router.push(url,direction,animation));case 5:return _context.abrupt("return",!1);case 6:case"end":return _context.stop()}}),_callee)})));return function openURL(_x,_x2,_x3,_x4){return _ref.apply(this,arguments)}}()},1012:function(module,exports,__webpack_require__){__webpack_require__(22)({target:"Date",stat:!0},{now:function now(){return(new Date).getTime()}})},927:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ion_checkbox",(function(){return Checkbox}));__webpack_require__(10),__webpack_require__(131);var _index_4644c745_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(146),_ionic_global_9a60c1b6_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(253),_helpers_2a92b02c_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(1010),_theme_12606872_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(1011);function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}var Checkbox=function(){function Checkbox(hostRef){var _this=this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Checkbox),Object(_index_4644c745_js__WEBPACK_IMPORTED_MODULE_2__.m)(this,hostRef),this.ionChange=Object(_index_4644c745_js__WEBPACK_IMPORTED_MODULE_2__.e)(this,"ionChange",7),this.ionFocus=Object(_index_4644c745_js__WEBPACK_IMPORTED_MODULE_2__.e)(this,"ionFocus",7),this.ionBlur=Object(_index_4644c745_js__WEBPACK_IMPORTED_MODULE_2__.e)(this,"ionBlur",7),this.ionStyle=Object(_index_4644c745_js__WEBPACK_IMPORTED_MODULE_2__.e)(this,"ionStyle",7),this.inputId="ion-cb-"+checkboxIds++,this.name=this.inputId,this.checked=!1,this.indeterminate=!1,this.disabled=!1,this.value="on",this.onClick=function(ev){ev.preventDefault(),_this.setFocus(),_this.checked=!_this.checked,_this.indeterminate=!1},this.onFocus=function(){_this.ionFocus.emit()},this.onBlur=function(){_this.ionBlur.emit()}}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(Checkbox,[{key:"componentWillLoad",value:function componentWillLoad(){this.emitStyle()}},{key:"checkedChanged",value:function checkedChanged(isChecked){this.ionChange.emit({checked:isChecked,value:this.value}),this.emitStyle()}},{key:"disabledChanged",value:function disabledChanged(){this.emitStyle()}},{key:"emitStyle",value:function emitStyle(){this.ionStyle.emit({"checkbox-checked":this.checked,"interactive-disabled":this.disabled})}},{key:"setFocus",value:function setFocus(){this.focusEl&&this.focusEl.focus()}},{key:"render",value:function render(){var _createColorClasses,_this2=this,color=this.color,checked=this.checked,disabled=this.disabled,el=this.el,indeterminate=this.indeterminate,inputId=this.inputId,name=this.name,value=this.value,mode=Object(_ionic_global_9a60c1b6_js__WEBPACK_IMPORTED_MODULE_3__.c)(this),_getAriaLabel=Object(_helpers_2a92b02c_js__WEBPACK_IMPORTED_MODULE_4__.d)(el,inputId),label=_getAriaLabel.label,labelId=_getAriaLabel.labelId,labelText=_getAriaLabel.labelText;Object(_helpers_2a92b02c_js__WEBPACK_IMPORTED_MODULE_4__.e)(!0,el,name,checked?value:"",disabled);var path=indeterminate?Object(_index_4644c745_js__WEBPACK_IMPORTED_MODULE_2__.j)("path",{d:"M6 12L18 12",part:"mark"}):Object(_index_4644c745_js__WEBPACK_IMPORTED_MODULE_2__.j)("path",{d:"M5.9,12.5l3.8,3.8l8.8-8.8",part:"mark"});return"md"===mode&&(path=indeterminate?Object(_index_4644c745_js__WEBPACK_IMPORTED_MODULE_2__.j)("path",{d:"M2 12H22",part:"mark"}):Object(_index_4644c745_js__WEBPACK_IMPORTED_MODULE_2__.j)("path",{d:"M1.73,12.91 8.1,19.28 22.79,4.59",part:"mark"})),Object(_index_4644c745_js__WEBPACK_IMPORTED_MODULE_2__.j)(_index_4644c745_js__WEBPACK_IMPORTED_MODULE_2__.b,{onClick:this.onClick,"aria-labelledby":label?labelId:null,"aria-checked":""+checked,"aria-hidden":disabled?"true":null,role:"checkbox",class:Object(_theme_12606872_js__WEBPACK_IMPORTED_MODULE_5__.a)(color,(_createColorClasses={},_createColorClasses[mode]=!0,_createColorClasses["in-item"]=Object(_theme_12606872_js__WEBPACK_IMPORTED_MODULE_5__.c)("ion-item",el),_createColorClasses["checkbox-checked"]=checked,_createColorClasses["checkbox-disabled"]=disabled,_createColorClasses["checkbox-indeterminate"]=indeterminate,_createColorClasses.interactive=!0,_createColorClasses))},Object(_index_4644c745_js__WEBPACK_IMPORTED_MODULE_2__.j)("svg",{class:"checkbox-icon",viewBox:"0 0 24 24",part:"container"},path),Object(_index_4644c745_js__WEBPACK_IMPORTED_MODULE_2__.j)("label",{htmlFor:inputId},labelText),Object(_index_4644c745_js__WEBPACK_IMPORTED_MODULE_2__.j)("input",{type:"checkbox","aria-checked":""+checked,disabled:disabled,id:inputId,onFocus:function onFocus(){return _this2.onFocus()},onBlur:function onBlur(){return _this2.onBlur()},ref:function ref(focusEl){return _this2.focusEl=focusEl}}))}},{key:"el",get:function get(){return Object(_index_4644c745_js__WEBPACK_IMPORTED_MODULE_2__.g)(this)}}],[{key:"watchers",get:function get(){return{checked:["checkedChanged"],disabled:["disabledChanged"]}}}]),Checkbox}(),checkboxIds=0;Checkbox.style={ios:":host{--background-checked:var(--ion-color-primary, #3880ff);--border-color-checked:var(--ion-color-primary, #3880ff);--checkmark-color:var(--ion-color-primary-contrast, #fff);--checkmark-width:1;--transition:none;display:inline-block;position:relative;user-select:none;z-index:2}:host(.ion-color){--background-checked:var(--ion-color-base);--border-color-checked:var(--ion-color-base);--checkmark-color:var(--ion-color-contrast)}label{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;appearance:none;outline:none;display:flex;align-items:center;opacity:0}[dir=rtl] label,:host-context([dir=rtl]) label{left:unset;right:unset;right:0}label::-moz-focus-inner{border:0}input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}.checkbox-icon{border-radius:var(--border-radius);display:block;position:relative;width:100%;height:100%;transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);box-sizing:border-box}.checkbox-icon path{fill:none;stroke:var(--checkmark-color);stroke-width:var(--checkmark-width);opacity:0}:host(.checkbox-checked) .checkbox-icon,:host(.checkbox-indeterminate) .checkbox-icon{border-color:var(--border-color-checked);background:var(--background-checked)}:host(.checkbox-checked) .checkbox-icon path,:host(.checkbox-indeterminate) .checkbox-icon path{opacity:1}:host(.checkbox-disabled){pointer-events:none}:host{--border-radius:50%;--border-width:1px;--border-style:solid;--border-color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.23);--background:var(--ion-item-background, var(--ion-background-color, #fff));--size:26px;width:var(--size);height:var(--size)}:host(.checkbox-disabled){opacity:0.3}:host(.in-item){margin-left:0;margin-right:8px;margin-top:10px;margin-bottom:9px;display:block;position:static}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host(.in-item){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:8px;margin-inline-end:8px}}:host(.in-item[slot=start]){margin-left:2px;margin-right:20px;margin-top:8px;margin-bottom:8px}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host(.in-item[slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:20px;margin-inline-end:20px}}",md:":host{--background-checked:var(--ion-color-primary, #3880ff);--border-color-checked:var(--ion-color-primary, #3880ff);--checkmark-color:var(--ion-color-primary-contrast, #fff);--checkmark-width:1;--transition:none;display:inline-block;position:relative;user-select:none;z-index:2}:host(.ion-color){--background-checked:var(--ion-color-base);--border-color-checked:var(--ion-color-base);--checkmark-color:var(--ion-color-contrast)}label{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;appearance:none;outline:none;display:flex;align-items:center;opacity:0}[dir=rtl] label,:host-context([dir=rtl]) label{left:unset;right:unset;right:0}label::-moz-focus-inner{border:0}input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}.checkbox-icon{border-radius:var(--border-radius);display:block;position:relative;width:100%;height:100%;transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);box-sizing:border-box}.checkbox-icon path{fill:none;stroke:var(--checkmark-color);stroke-width:var(--checkmark-width);opacity:0}:host(.checkbox-checked) .checkbox-icon,:host(.checkbox-indeterminate) .checkbox-icon{border-color:var(--border-color-checked);background:var(--background-checked)}:host(.checkbox-checked) .checkbox-icon path,:host(.checkbox-indeterminate) .checkbox-icon path{opacity:1}:host(.checkbox-disabled){pointer-events:none}:host{--border-radius:calc(var(--size) * .125);--border-width:2px;--border-style:solid;--border-color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.51);--checkmark-width:3;--background:var(--ion-item-background, var(--ion-background-color, #fff));--transition:background 180ms cubic-bezier(0.4, 0, 0.2, 1);--size:18px;width:var(--size);height:var(--size)}.checkbox-icon path{stroke-dasharray:30;stroke-dashoffset:30}:host(.checkbox-checked) .checkbox-icon path,:host(.checkbox-indeterminate) .checkbox-icon path{stroke-dashoffset:0;transition:stroke-dashoffset 90ms linear 90ms}:host(.checkbox-disabled){opacity:0.3}:host(.in-item){margin-left:0;margin-right:0;margin-top:18px;margin-bottom:18px;display:block;position:static}:host(.in-item[slot=start]){margin-left:4px;margin-right:36px;margin-top:18px;margin-bottom:18px}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host(.in-item[slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:4px;margin-inline-start:4px;-webkit-margin-end:36px;margin-inline-end:36px}}"}}}]);