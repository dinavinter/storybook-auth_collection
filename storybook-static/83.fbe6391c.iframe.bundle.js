(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{1011:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return createColorClasses})),__webpack_require__.d(__webpack_exports__,"b",(function(){return getClassMap})),__webpack_require__.d(__webpack_exports__,"c",(function(){return hostContext})),__webpack_require__.d(__webpack_exports__,"d",(function(){return openURL}));__webpack_require__(18),__webpack_require__(339),__webpack_require__(82),__webpack_require__(38),__webpack_require__(51),__webpack_require__(32),__webpack_require__(168),__webpack_require__(130),__webpack_require__(47),__webpack_require__(69),__webpack_require__(13);function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}var hostContext=function hostContext(selector,el){return null!==el.closest(selector)},createColorClasses=function createColorClasses(color,cssClassMap){var _Object$assign;return"string"==typeof color&&color.length>0?Object.assign(((_Object$assign={"ion-color":!0})["ion-color-"+color]=!0,_Object$assign),cssClassMap):cssClassMap},getClassMap=function getClassMap(classes){var map={};return function getClassList(classes){return void 0!==classes?(Array.isArray(classes)?classes:classes.split(" ")).filter((function(c){return null!=c})).map((function(c){return c.trim()})).filter((function(c){return""!==c})):[]}(classes).forEach((function(c){return map[c]=!0})),map},SCHEME=/^[a-z][a-z0-9+\-.]*:/,openURL=function(){var _ref=function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}(regeneratorRuntime.mark((function _callee(url,ev,direction,animation){var router;return regeneratorRuntime.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:if(null==url||"#"===url[0]||SCHEME.test(url)){_context.next=5;break}if(!(router=document.querySelector("ion-router"))){_context.next=5;break}return null!=ev&&ev.preventDefault(),_context.abrupt("return",router.push(url,direction,animation));case 5:return _context.abrupt("return",!1);case 6:case"end":return _context.stop()}}),_callee)})));return function openURL(_x,_x2,_x3,_x4){return _ref.apply(this,arguments)}}()},990:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ion_title",(function(){return ToolbarTitle}));__webpack_require__(131);var _index_4644c745_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(146),_ionic_global_9a60c1b6_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(253),_theme_12606872_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(1011);function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}var ToolbarTitle=function(){function ToolbarTitle(hostRef){!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,ToolbarTitle),Object(_index_4644c745_js__WEBPACK_IMPORTED_MODULE_1__.m)(this,hostRef),this.ionStyle=Object(_index_4644c745_js__WEBPACK_IMPORTED_MODULE_1__.e)(this,"ionStyle",7)}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(ToolbarTitle,[{key:"sizeChanged",value:function sizeChanged(){this.emitStyle()}},{key:"connectedCallback",value:function connectedCallback(){this.emitStyle()}},{key:"emitStyle",value:function emitStyle(){var _this$ionStyle$emit,size=this.getSize();this.ionStyle.emit(((_this$ionStyle$emit={})["title-"+size]=!0,_this$ionStyle$emit))}},{key:"getSize",value:function getSize(){return void 0!==this.size?this.size:"default"}},{key:"render",value:function render(){var _createColorClasses,mode=Object(_ionic_global_9a60c1b6_js__WEBPACK_IMPORTED_MODULE_2__.c)(this),size=this.getSize();return Object(_index_4644c745_js__WEBPACK_IMPORTED_MODULE_1__.j)(_index_4644c745_js__WEBPACK_IMPORTED_MODULE_1__.b,{class:Object(_theme_12606872_js__WEBPACK_IMPORTED_MODULE_3__.a)(this.color,(_createColorClasses={},_createColorClasses[mode]=!0,_createColorClasses["title-"+size]=!0,_createColorClasses["title-rtl"]="rtl"===document.dir,_createColorClasses))},Object(_index_4644c745_js__WEBPACK_IMPORTED_MODULE_1__.j)("div",{class:"toolbar-title"},Object(_index_4644c745_js__WEBPACK_IMPORTED_MODULE_1__.j)("slot",null)))}},{key:"el",get:function get(){return Object(_index_4644c745_js__WEBPACK_IMPORTED_MODULE_1__.g)(this)}}],[{key:"watchers",get:function get(){return{size:["sizeChanged"]}}}]),ToolbarTitle}();ToolbarTitle.style={ios:":host{--color:initial;display:flex;flex:1;align-items:center;transform:translateZ(0);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}.toolbar-title{display:block;width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;pointer-events:auto}:host(.title-small) .toolbar-title{white-space:normal}:host{left:0;top:0;padding-left:90px;padding-right:90px;padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);position:absolute;width:100%;height:100%;transform:translateZ(0);font-size:17px;font-weight:600;text-align:center;box-sizing:border-box;pointer-events:none}:host-context([dir=rtl]){left:unset;right:unset;right:0}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:90px;padding-inline-start:90px;-webkit-padding-end:90px;padding-inline-end:90px}}:host(.title-small){padding-left:9px;padding-right:9px;padding-top:6px;padding-bottom:16px;position:relative;font-size:13px;font-weight:normal}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host(.title-small){padding-left:unset;padding-right:unset;-webkit-padding-start:9px;padding-inline-start:9px;-webkit-padding-end:9px;padding-inline-end:9px}}:host(.title-large){padding-left:16px;padding-right:16px;padding-top:0;padding-bottom:0;transform-origin:left center;bottom:0;align-items:flex-end;min-width:100%;padding-bottom:6px;font-size:34px;font-weight:700;text-align:start}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host(.title-large){padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}:host(.title-large.title-rtl){transform-origin:right center}:host(.title-large.ion-cloned-element){--color:var(--ion-text-color, #000)}:host(.title-large) .toolbar-title{transform-origin:inherit}:host-context([dir=rtl]):host(.title-large) .toolbar-title,:host-context([dir=rtl]).title-large .toolbar-title{transform-origin:calc(100% - inherit)}",md:":host{--color:initial;display:flex;flex:1;align-items:center;transform:translateZ(0);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}.toolbar-title{display:block;width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;pointer-events:auto}:host(.title-small) .toolbar-title{white-space:normal}:host{padding-left:20px;padding-right:20px;padding-top:0;padding-bottom:0;font-size:20px;font-weight:500;letter-spacing:0.0125em}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:20px;padding-inline-end:20px}}:host(.title-small){width:100%;height:100%;font-size:15px;font-weight:normal}"}}}]);