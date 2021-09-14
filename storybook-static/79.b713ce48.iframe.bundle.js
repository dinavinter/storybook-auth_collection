(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{1011:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return createColorClasses})),__webpack_require__.d(__webpack_exports__,"b",(function(){return getClassMap})),__webpack_require__.d(__webpack_exports__,"c",(function(){return hostContext})),__webpack_require__.d(__webpack_exports__,"d",(function(){return openURL}));__webpack_require__(18),__webpack_require__(339),__webpack_require__(82),__webpack_require__(38),__webpack_require__(51),__webpack_require__(32),__webpack_require__(168),__webpack_require__(130),__webpack_require__(47),__webpack_require__(69),__webpack_require__(13);function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}var hostContext=function hostContext(selector,el){return null!==el.closest(selector)},createColorClasses=function createColorClasses(color,cssClassMap){var _Object$assign;return"string"==typeof color&&color.length>0?Object.assign(((_Object$assign={"ion-color":!0})["ion-color-"+color]=!0,_Object$assign),cssClassMap):cssClassMap},getClassMap=function getClassMap(classes){var map={};return function getClassList(classes){return void 0!==classes?(Array.isArray(classes)?classes:classes.split(" ")).filter((function(c){return null!=c})).map((function(c){return c.trim()})).filter((function(c){return""!==c})):[]}(classes).forEach((function(c){return map[c]=!0})),map},SCHEME=/^[a-z][a-z0-9+\-.]*:/,openURL=function(){var _ref=function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}(regeneratorRuntime.mark((function _callee(url,ev,direction,animation){var router;return regeneratorRuntime.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:if(null==url||"#"===url[0]||SCHEME.test(url)){_context.next=5;break}if(!(router=document.querySelector("ion-router"))){_context.next=5;break}return null!=ev&&ev.preventDefault(),_context.abrupt("return",router.push(url,direction,animation));case 5:return _context.abrupt("return",!1);case 6:case"end":return _context.stop()}}),_callee)})));return function openURL(_x,_x2,_x3,_x4){return _ref.apply(this,arguments)}}()},977:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ion_select",(function(){return Select}));__webpack_require__(130),__webpack_require__(47),__webpack_require__(30),__webpack_require__(19),__webpack_require__(105),__webpack_require__(10),__webpack_require__(69),__webpack_require__(13),__webpack_require__(32),__webpack_require__(70),__webpack_require__(51),__webpack_require__(18),__webpack_require__(339),__webpack_require__(511),__webpack_require__(118),__webpack_require__(509),__webpack_require__(73),__webpack_require__(83),__webpack_require__(131);var _index_4644c745_js__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__(146),_ionic_global_9a60c1b6_js__WEBPACK_IMPORTED_MODULE_20__=__webpack_require__(253),_helpers_2a92b02c_js__WEBPACK_IMPORTED_MODULE_21__=__webpack_require__(1010),_overlays_19926d77_js__WEBPACK_IMPORTED_MODULE_22__=__webpack_require__(1018),_theme_12606872_js__WEBPACK_IMPORTED_MODULE_23__=__webpack_require__(1011);__webpack_require__(1015);function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}var watchForOptions=function watchForOptions(containerEl,tagName,onChange){if("undefined"!=typeof MutationObserver){var mutation=new MutationObserver((function(mutationList){onChange(getSelectedOption(mutationList,tagName))}));return mutation.observe(containerEl,{childList:!0,subtree:!0}),mutation}},getSelectedOption=function getSelectedOption(mutationList,tagName){var newOption;return mutationList.forEach((function(mut){for(var i=0;i<mut.addedNodes.length;i++)newOption=findCheckedOption(mut.addedNodes[i],tagName)||newOption})),newOption},findCheckedOption=function findCheckedOption(el,tagName){if(1===el.nodeType)return(el.tagName===tagName.toUpperCase()?[el]:Array.from(el.querySelectorAll(tagName))).find((function(o){return o.value===el.value}))},Select=function(){function Select(hostRef){var _this=this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Select),Object(_index_4644c745_js__WEBPACK_IMPORTED_MODULE_19__.m)(this,hostRef),this.ionChange=Object(_index_4644c745_js__WEBPACK_IMPORTED_MODULE_19__.e)(this,"ionChange",7),this.ionCancel=Object(_index_4644c745_js__WEBPACK_IMPORTED_MODULE_19__.e)(this,"ionCancel",7),this.ionFocus=Object(_index_4644c745_js__WEBPACK_IMPORTED_MODULE_19__.e)(this,"ionFocus",7),this.ionBlur=Object(_index_4644c745_js__WEBPACK_IMPORTED_MODULE_19__.e)(this,"ionBlur",7),this.ionStyle=Object(_index_4644c745_js__WEBPACK_IMPORTED_MODULE_19__.e)(this,"ionStyle",7),this.inputId="ion-sel-"+selectIds++,this.didInit=!1,this.isExpanded=!1,this.disabled=!1,this.cancelText="Cancel",this.okText="OK",this.name=this.inputId,this.multiple=!1,this.interface="alert",this.interfaceOptions={},this.onClick=function(ev){_this.setFocus(),_this.open(ev)},this.onFocus=function(){_this.ionFocus.emit()},this.onBlur=function(){_this.ionBlur.emit()}}var _openAlert,_openActionSheet,_openPopover,_open,_connectedCallback;return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(Select,[{key:"disabledChanged",value:function disabledChanged(){this.emitStyle()}},{key:"valueChanged",value:function valueChanged(){this.emitStyle(),this.didInit&&this.ionChange.emit({value:this.value})}},{key:"connectedCallback",value:(_connectedCallback=_asyncToGenerator(regeneratorRuntime.mark((function _callee2(){var _this2=this;return regeneratorRuntime.wrap((function _callee2$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:this.updateOverlayOptions(),this.emitStyle(),this.mutationO=watchForOptions(this.el,"ion-select-option",_asyncToGenerator(regeneratorRuntime.mark((function _callee(){return regeneratorRuntime.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:_this2.updateOverlayOptions();case 1:case"end":return _context.stop()}}),_callee)}))));case 3:case"end":return _context2.stop()}}),_callee2,this)}))),function connectedCallback(){return _connectedCallback.apply(this,arguments)})},{key:"disconnectedCallback",value:function disconnectedCallback(){this.mutationO&&(this.mutationO.disconnect(),this.mutationO=void 0)}},{key:"componentDidLoad",value:function componentDidLoad(){this.didInit=!0}},{key:"open",value:(_open=_asyncToGenerator(regeneratorRuntime.mark((function _callee3(event){var overlay,_this3=this;return regeneratorRuntime.wrap((function _callee3$(_context3){for(;;)switch(_context3.prev=_context3.next){case 0:if(!this.disabled&&!this.isExpanded){_context3.next=2;break}return _context3.abrupt("return",void 0);case 2:return _context3.next=4,this.createOverlay(event);case 4:return overlay=this.overlay=_context3.sent,this.isExpanded=!0,overlay.onDidDismiss().then((function(){_this3.overlay=void 0,_this3.isExpanded=!1,_this3.setFocus()})),_context3.next=9,overlay.present();case 9:return _context3.abrupt("return",overlay);case 10:case"end":return _context3.stop()}}),_callee3,this)}))),function open(_x){return _open.apply(this,arguments)})},{key:"createOverlay",value:function createOverlay(ev){var selectInterface=this.interface;return"action-sheet"!==selectInterface&&"popover"!==selectInterface||!this.multiple||(console.warn('Select interface cannot be "'+selectInterface+'" with a multi-value select. Using the "alert" interface instead.'),selectInterface="alert"),"popover"!==selectInterface||ev||(console.warn('Select interface cannot be a "popover" without passing an event. Using the "alert" interface instead.'),selectInterface="alert"),"popover"===selectInterface?this.openPopover(ev):"action-sheet"===selectInterface?this.openActionSheet():this.openAlert()}},{key:"updateOverlayOptions",value:function updateOverlayOptions(){var overlay=this.overlay;if(overlay){var childOpts=this.childOpts,value=this.value;switch(this.interface){case"action-sheet":overlay.buttons=this.createActionSheetButtons(childOpts,value);break;case"popover":var popover=overlay.querySelector("ion-select-popover");popover&&(popover.options=this.createPopoverOptions(childOpts,value));break;case"alert":var inputType=this.multiple?"checkbox":"radio";overlay.inputs=this.createAlertInputs(childOpts,inputType,value)}}}},{key:"createActionSheetButtons",value:function createActionSheetButtons(data,selectValue){var _this4=this,actionSheetButtons=data.map((function(option){var value=getOptionValue(option),copyClasses=Array.from(option.classList).filter((function(cls){return"hydrated"!==cls})).join(" "),optClass=OPTION_CLASS+" "+copyClasses;return{role:isOptionSelected(value,selectValue,_this4.compareWith)?"selected":"",text:option.textContent,cssClass:optClass,handler:function handler(){_this4.value=value}}}));return actionSheetButtons.push({text:this.cancelText,role:"cancel",handler:function handler(){_this4.ionCancel.emit()}}),actionSheetButtons}},{key:"createAlertInputs",value:function createAlertInputs(data,inputType,selectValue){var _this5=this;return data.map((function(option){var value=getOptionValue(option),copyClasses=Array.from(option.classList).filter((function(cls){return"hydrated"!==cls})).join(" ");return{type:inputType,cssClass:OPTION_CLASS+" "+copyClasses,label:option.textContent||"",value:value,checked:isOptionSelected(value,selectValue,_this5.compareWith),disabled:option.disabled}}))}},{key:"createPopoverOptions",value:function createPopoverOptions(data,selectValue){var _this6=this;return data.map((function(option){var value=getOptionValue(option),copyClasses=Array.from(option.classList).filter((function(cls){return"hydrated"!==cls})).join(" "),optClass=OPTION_CLASS+" "+copyClasses;return{text:option.textContent||"",cssClass:optClass,value:value,checked:isOptionSelected(value,selectValue,_this6.compareWith),disabled:option.disabled,handler:function handler(){_this6.value=value,_this6.close()}}}))}},{key:"openPopover",value:(_openPopover=_asyncToGenerator(regeneratorRuntime.mark((function _callee4(ev){var interfaceOptions,mode,value,popoverOpts;return regeneratorRuntime.wrap((function _callee4$(_context4){for(;;)switch(_context4.prev=_context4.next){case 0:return interfaceOptions=this.interfaceOptions,mode=Object(_ionic_global_9a60c1b6_js__WEBPACK_IMPORTED_MODULE_20__.c)(this),value=this.value,popoverOpts=Object.assign(Object.assign({mode:mode},interfaceOptions),{component:"ion-select-popover",cssClass:["select-popover",interfaceOptions.cssClass],event:ev,componentProps:{header:interfaceOptions.header,subHeader:interfaceOptions.subHeader,message:interfaceOptions.message,value:value,options:this.createPopoverOptions(this.childOpts,value)}}),_context4.abrupt("return",_overlays_19926d77_js__WEBPACK_IMPORTED_MODULE_22__.k.create(popoverOpts));case 5:case"end":return _context4.stop()}}),_callee4,this)}))),function openPopover(_x2){return _openPopover.apply(this,arguments)})},{key:"openActionSheet",value:(_openActionSheet=_asyncToGenerator(regeneratorRuntime.mark((function _callee5(){var mode,interfaceOptions,actionSheetOpts;return regeneratorRuntime.wrap((function _callee5$(_context5){for(;;)switch(_context5.prev=_context5.next){case 0:return mode=Object(_ionic_global_9a60c1b6_js__WEBPACK_IMPORTED_MODULE_20__.c)(this),interfaceOptions=this.interfaceOptions,actionSheetOpts=Object.assign(Object.assign({mode:mode},interfaceOptions),{buttons:this.createActionSheetButtons(this.childOpts,this.value),cssClass:["select-action-sheet",interfaceOptions.cssClass]}),_context5.abrupt("return",_overlays_19926d77_js__WEBPACK_IMPORTED_MODULE_22__.h.create(actionSheetOpts));case 4:case"end":return _context5.stop()}}),_callee5,this)}))),function openActionSheet(){return _openActionSheet.apply(this,arguments)})},{key:"openAlert",value:(_openAlert=_asyncToGenerator(regeneratorRuntime.mark((function _callee6(){var label,labelText,interfaceOptions,inputType,mode,alertOpts,_this7=this;return regeneratorRuntime.wrap((function _callee6$(_context6){for(;;)switch(_context6.prev=_context6.next){case 0:return label=this.getLabel(),labelText=label?label.textContent:null,interfaceOptions=this.interfaceOptions,inputType=this.multiple?"checkbox":"radio",mode=Object(_ionic_global_9a60c1b6_js__WEBPACK_IMPORTED_MODULE_20__.c)(this),alertOpts=Object.assign(Object.assign({mode:mode},interfaceOptions),{header:interfaceOptions.header?interfaceOptions.header:labelText,inputs:this.createAlertInputs(this.childOpts,inputType,this.value),buttons:[{text:this.cancelText,role:"cancel",handler:function handler(){_this7.ionCancel.emit()}},{text:this.okText,handler:function handler(selectedValues){_this7.value=selectedValues}}],cssClass:["select-alert",interfaceOptions.cssClass,this.multiple?"multiple-select-alert":"single-select-alert"]}),_context6.abrupt("return",_overlays_19926d77_js__WEBPACK_IMPORTED_MODULE_22__.i.create(alertOpts));case 7:case"end":return _context6.stop()}}),_callee6,this)}))),function openAlert(){return _openAlert.apply(this,arguments)})},{key:"close",value:function close(){return this.overlay?this.overlay.dismiss():Promise.resolve(!1)}},{key:"getLabel",value:function getLabel(){return Object(_helpers_2a92b02c_js__WEBPACK_IMPORTED_MODULE_21__.h)(this.el)}},{key:"hasValue",value:function hasValue(){return""!==this.getText()}},{key:"childOpts",get:function get(){return Array.from(this.el.querySelectorAll("ion-select-option"))}},{key:"getText",value:function getText(){var selectedText=this.selectedText;return null!=selectedText&&""!==selectedText?selectedText:generateText(this.childOpts,this.value,this.compareWith)}},{key:"setFocus",value:function setFocus(){this.focusEl&&this.focusEl.focus()}},{key:"emitStyle",value:function emitStyle(){this.ionStyle.emit({interactive:!0,select:!0,"has-placeholder":null!=this.placeholder,"has-value":this.hasValue(),"interactive-disabled":this.disabled,"select-disabled":this.disabled})}},{key:"render",value:function render(){var _class,_this8=this,disabled=this.disabled,el=this.el,inputId=this.inputId,isExpanded=this.isExpanded,name=this.name,placeholder=this.placeholder,value=this.value,mode=Object(_ionic_global_9a60c1b6_js__WEBPACK_IMPORTED_MODULE_20__.c)(this),_getAriaLabel=Object(_helpers_2a92b02c_js__WEBPACK_IMPORTED_MODULE_21__.d)(el,inputId),labelText=_getAriaLabel.labelText,labelId=_getAriaLabel.labelId;Object(_helpers_2a92b02c_js__WEBPACK_IMPORTED_MODULE_21__.e)(!0,el,name,parseValue(value),disabled);var addPlaceholderClass=!1,selectText=this.getText();""===selectText&&null!=placeholder&&(selectText=placeholder,addPlaceholderClass=!0);var selectTextClasses={"select-text":!0,"select-placeholder":addPlaceholderClass},textPart=addPlaceholderClass?"placeholder":"text",displayLabel=void 0!==labelText?""!==selectText?selectText+", "+labelText:labelText:selectText;return Object(_index_4644c745_js__WEBPACK_IMPORTED_MODULE_19__.j)(_index_4644c745_js__WEBPACK_IMPORTED_MODULE_19__.b,{onClick:this.onClick,role:"button","aria-haspopup":"listbox","aria-disabled":disabled?"true":null,"aria-label":displayLabel,class:(_class={},_class[mode]=!0,_class["in-item"]=Object(_theme_12606872_js__WEBPACK_IMPORTED_MODULE_23__.c)("ion-item",el),_class["select-disabled"]=disabled,_class["select-expanded"]=isExpanded,_class)},Object(_index_4644c745_js__WEBPACK_IMPORTED_MODULE_19__.j)("div",{"aria-hidden":"true",class:selectTextClasses,part:textPart},selectText),Object(_index_4644c745_js__WEBPACK_IMPORTED_MODULE_19__.j)("div",{class:"select-icon",role:"presentation",part:"icon"},Object(_index_4644c745_js__WEBPACK_IMPORTED_MODULE_19__.j)("div",{class:"select-icon-inner"})),Object(_index_4644c745_js__WEBPACK_IMPORTED_MODULE_19__.j)("label",{id:labelId},displayLabel),Object(_index_4644c745_js__WEBPACK_IMPORTED_MODULE_19__.j)("button",{type:"button",disabled:disabled,id:inputId,"aria-labelledby":labelId,"aria-haspopup":"listbox","aria-expanded":""+isExpanded,onFocus:this.onFocus,onBlur:this.onBlur,ref:function ref(focusEl){return _this8.focusEl=focusEl}}))}},{key:"el",get:function get(){return Object(_index_4644c745_js__WEBPACK_IMPORTED_MODULE_19__.g)(this)}}],[{key:"watchers",get:function get(){return{disabled:["disabledChanged"],placeholder:["disabledChanged"],value:["valueChanged"]}}}]),Select}(),isOptionSelected=function isOptionSelected(currentValue,compareValue,compareWith){return void 0!==currentValue&&(Array.isArray(currentValue)?currentValue.some((function(val){return compareOptions(val,compareValue,compareWith)})):compareOptions(currentValue,compareValue,compareWith))},getOptionValue=function getOptionValue(el){var value=el.value;return void 0===value?el.textContent||"":value},parseValue=function parseValue(value){if(null!=value)return Array.isArray(value)?value.join(","):value.toString()},compareOptions=function compareOptions(currentValue,compareValue,compareWith){return"function"==typeof compareWith?compareWith(currentValue,compareValue):"string"==typeof compareWith?currentValue[compareWith]===compareValue[compareWith]:Array.isArray(compareValue)?compareValue.includes(currentValue):currentValue===compareValue},generateText=function generateText(opts,value,compareWith){return void 0===value?"":Array.isArray(value)?value.map((function(v){return textForValue(opts,v,compareWith)})).filter((function(opt){return null!==opt})).join(", "):textForValue(opts,value,compareWith)||""},textForValue=function textForValue(opts,value,compareWith){var selectOpt=opts.find((function(opt){return compareOptions(getOptionValue(opt),value,compareWith)}));return selectOpt?selectOpt.textContent:null},selectIds=0,OPTION_CLASS="select-interface-option";Select.style={ios:":host{--placeholder-color:currentColor;--placeholder-opacity:0.33;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:flex;position:relative;align-items:center;font-family:var(--ion-font-family, inherit);overflow:hidden;z-index:2}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.in-item){position:static;max-width:45%}:host(.select-disabled){opacity:0.4;pointer-events:none}:host(.ion-focused) button{border:2px solid #5e9ed6}.select-placeholder{color:var(--placeholder-color);opacity:var(--placeholder-opacity)}label{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;appearance:none;outline:none;display:flex;align-items:center;opacity:0}[dir=rtl] label,:host-context([dir=rtl]) label{left:unset;right:unset;right:0}label::-moz-focus-inner{border:0}button{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}.select-icon{position:relative;opacity:0.33}.select-text{flex:1;min-width:16px;font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.select-icon-inner{left:5px;top:50%;margin-top:-2px;position:absolute;width:0;height:0;border-top:5px solid;border-right:5px solid transparent;border-left:5px solid transparent;color:currentColor;pointer-events:none}[dir=rtl] .select-icon-inner,:host-context([dir=rtl]) .select-icon-inner{left:unset;right:unset;right:5px}:host{--padding-top:10px;--padding-end:10px;--padding-bottom:10px;--padding-start:20px}.select-icon{width:12px;height:18px}",md:":host{--placeholder-color:currentColor;--placeholder-opacity:0.33;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:flex;position:relative;align-items:center;font-family:var(--ion-font-family, inherit);overflow:hidden;z-index:2}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.in-item){position:static;max-width:45%}:host(.select-disabled){opacity:0.4;pointer-events:none}:host(.ion-focused) button{border:2px solid #5e9ed6}.select-placeholder{color:var(--placeholder-color);opacity:var(--placeholder-opacity)}label{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;appearance:none;outline:none;display:flex;align-items:center;opacity:0}[dir=rtl] label,:host-context([dir=rtl]) label{left:unset;right:unset;right:0}label::-moz-focus-inner{border:0}button{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}.select-icon{position:relative;opacity:0.33}.select-text{flex:1;min-width:16px;font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.select-icon-inner{left:5px;top:50%;margin-top:-2px;position:absolute;width:0;height:0;border-top:5px solid;border-right:5px solid transparent;border-left:5px solid transparent;color:currentColor;pointer-events:none}[dir=rtl] .select-icon-inner,:host-context([dir=rtl]) .select-icon-inner{left:unset;right:unset;right:5px}:host{--padding-top:10px;--padding-end:0;--padding-bottom:10px;--padding-start:16px}.select-icon{width:19px;height:19px}:host-context(.item-label-floating) .select-icon{transform:translate3d(0,  -9px,  0)}"}}}]);