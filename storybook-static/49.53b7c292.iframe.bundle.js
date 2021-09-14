(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{1011:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return createColorClasses})),__webpack_require__.d(__webpack_exports__,"b",(function(){return getClassMap})),__webpack_require__.d(__webpack_exports__,"c",(function(){return hostContext})),__webpack_require__.d(__webpack_exports__,"d",(function(){return openURL}));__webpack_require__(18),__webpack_require__(339),__webpack_require__(82),__webpack_require__(38),__webpack_require__(51),__webpack_require__(32),__webpack_require__(168),__webpack_require__(130),__webpack_require__(47),__webpack_require__(69),__webpack_require__(13);function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}var hostContext=function hostContext(selector,el){return null!==el.closest(selector)},createColorClasses=function createColorClasses(color,cssClassMap){var _Object$assign;return"string"==typeof color&&color.length>0?Object.assign(((_Object$assign={"ion-color":!0})["ion-color-"+color]=!0,_Object$assign),cssClassMap):cssClassMap},getClassMap=function getClassMap(classes){var map={};return function getClassList(classes){return void 0!==classes?(Array.isArray(classes)?classes:classes.split(" ")).filter((function(c){return null!=c})).map((function(c){return c.trim()})).filter((function(c){return""!==c})):[]}(classes).forEach((function(c){return map[c]=!0})),map},SCHEME=/^[a-z][a-z0-9+\-.]*:/,openURL=function(){var _ref=function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}(regeneratorRuntime.mark((function _callee(url,ev,direction,animation){var router;return regeneratorRuntime.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:if(null==url||"#"===url[0]||SCHEME.test(url)){_context.next=5;break}if(!(router=document.querySelector("ion-router"))){_context.next=5;break}return null!=ev&&ev.preventDefault(),_context.abrupt("return",router.push(url,direction,animation));case 5:return _context.abrupt("return",!1);case 6:case"end":return _context.stop()}}),_callee)})));return function openURL(_x,_x2,_x3,_x4){return _ref.apply(this,arguments)}}()},1045:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return updateVisibility}));__webpack_require__(69),__webpack_require__(13);var _index_e226bce5_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1034);function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}var updateVisibility=function(){var _ref=function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}(regeneratorRuntime.mark((function _callee(menu){var menuEl;return regeneratorRuntime.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.next=2,_index_e226bce5_js__WEBPACK_IMPORTED_MODULE_2__.a.get(menu);case 2:if(menuEl=_context.sent,_context.t0=menuEl,!_context.t0){_context.next=8;break}return _context.next=7,menuEl.isActive();case 7:_context.t0=_context.sent;case 8:return _context.abrupt("return",!!_context.t0);case 9:case"end":return _context.stop()}}),_callee)})));return function updateVisibility(_x){return _ref.apply(this,arguments)}}()},949:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ion_menu_button",(function(){return MenuButton}));__webpack_require__(69),__webpack_require__(13),__webpack_require__(18),__webpack_require__(131);var _index_4644c745_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(146),_ionic_global_9a60c1b6_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(253),_helpers_2a92b02c_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(1010),_index_e226bce5_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(1034),_theme_12606872_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(1011),_menu_toggle_util_84d8e1e0_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(1045);__webpack_require__(1015),__webpack_require__(1017);function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}var MenuButton=function(){function MenuButton(hostRef){var _this=this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,MenuButton),Object(_index_4644c745_js__WEBPACK_IMPORTED_MODULE_4__.m)(this,hostRef),this.inheritedAttributes={},this.visible=!1,this.disabled=!1,this.autoHide=!0,this.type="button",this.onClick=_asyncToGenerator(regeneratorRuntime.mark((function _callee(){return regeneratorRuntime.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.abrupt("return",_index_e226bce5_js__WEBPACK_IMPORTED_MODULE_7__.a.toggle(_this.menu));case 1:case"end":return _context.stop()}}),_callee)})))}var _visibilityChanged;return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(MenuButton,[{key:"componentWillLoad",value:function componentWillLoad(){this.inheritedAttributes=Object(_helpers_2a92b02c_js__WEBPACK_IMPORTED_MODULE_6__.j)(this.el,["aria-label"])}},{key:"componentDidLoad",value:function componentDidLoad(){this.visibilityChanged()}},{key:"visibilityChanged",value:(_visibilityChanged=_asyncToGenerator(regeneratorRuntime.mark((function _callee2(){return regeneratorRuntime.wrap((function _callee2$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:return _context2.next=2,Object(_menu_toggle_util_84d8e1e0_js__WEBPACK_IMPORTED_MODULE_9__.a)(this.menu);case 2:this.visible=_context2.sent;case 3:case"end":return _context2.stop()}}),_callee2,this)}))),function visibilityChanged(){return _visibilityChanged.apply(this,arguments)})},{key:"render",value:function render(){var _createColorClasses,color=this.color,disabled=this.disabled,inheritedAttributes=this.inheritedAttributes,mode=Object(_ionic_global_9a60c1b6_js__WEBPACK_IMPORTED_MODULE_5__.c)(this),menuIcon=_ionic_global_9a60c1b6_js__WEBPACK_IMPORTED_MODULE_5__.b.get("menuIcon","ios"===mode?"menu-outline":"menu-sharp"),hidden=this.autoHide&&!this.visible,attrs={type:this.type},ariaLabel=inheritedAttributes["aria-label"]||"menu";return Object(_index_4644c745_js__WEBPACK_IMPORTED_MODULE_4__.j)(_index_4644c745_js__WEBPACK_IMPORTED_MODULE_4__.b,{onClick:this.onClick,"aria-disabled":disabled?"true":null,"aria-hidden":hidden?"true":null,class:Object(_theme_12606872_js__WEBPACK_IMPORTED_MODULE_8__.a)(color,(_createColorClasses={},_createColorClasses[mode]=!0,_createColorClasses.button=!0,_createColorClasses["menu-button-hidden"]=hidden,_createColorClasses["menu-button-disabled"]=disabled,_createColorClasses["in-toolbar"]=Object(_theme_12606872_js__WEBPACK_IMPORTED_MODULE_8__.c)("ion-toolbar",this.el),_createColorClasses["in-toolbar-color"]=Object(_theme_12606872_js__WEBPACK_IMPORTED_MODULE_8__.c)("ion-toolbar[color]",this.el),_createColorClasses["ion-activatable"]=!0,_createColorClasses["ion-focusable"]=!0,_createColorClasses))},Object(_index_4644c745_js__WEBPACK_IMPORTED_MODULE_4__.j)("button",Object.assign({},attrs,{disabled:disabled,class:"button-native",part:"native","aria-label":ariaLabel}),Object(_index_4644c745_js__WEBPACK_IMPORTED_MODULE_4__.j)("span",{class:"button-inner"},Object(_index_4644c745_js__WEBPACK_IMPORTED_MODULE_4__.j)("slot",null,Object(_index_4644c745_js__WEBPACK_IMPORTED_MODULE_4__.j)("ion-icon",{part:"icon",icon:menuIcon,mode:mode,lazy:!1,"aria-hidden":"true"}))),"md"===mode&&Object(_index_4644c745_js__WEBPACK_IMPORTED_MODULE_4__.j)("ion-ripple-effect",{type:"unbounded"})))}},{key:"el",get:function get(){return Object(_index_4644c745_js__WEBPACK_IMPORTED_MODULE_4__.g)(this)}}]),MenuButton}();MenuButton.style={ios:':host{--background:transparent;--color-focused:currentColor;--border-radius:initial;--padding-top:0;--padding-bottom:0;color:var(--color);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;font-kerning:none}.button-native{border-radius:var(--border-radius);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:flex;position:relative;flex-flow:row nowrap;flex-shrink:0;align-items:center;justify-content:center;width:100%;height:100%;border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;overflow:hidden;user-select:none;z-index:0;appearance:none}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-inner{display:flex;position:relative;flex-flow:row nowrap;flex-shrink:0;align-items:center;justify-content:center;width:100%;height:100%;z-index:1}ion-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;pointer-events:none}:host(.menu-button-hidden){display:none}:host(.menu-button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity, 0)}}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host(.in-toolbar:not(.in-toolbar-color)){color:var(--ion-toolbar-color, var(--color))}:host{--background-focused:currentColor;--background-focused-opacity:.1;--border-radius:4px;--color:var(--ion-color-primary, #3880ff);--padding-start:5px;--padding-end:5px;height:32px;font-size:31px}:host(.ion-activated){opacity:0.4}@media (any-hover: hover){:host(:hover){opacity:0.6}}',md:':host{--background:transparent;--color-focused:currentColor;--border-radius:initial;--padding-top:0;--padding-bottom:0;color:var(--color);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;font-kerning:none}.button-native{border-radius:var(--border-radius);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:flex;position:relative;flex-flow:row nowrap;flex-shrink:0;align-items:center;justify-content:center;width:100%;height:100%;border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;overflow:hidden;user-select:none;z-index:0;appearance:none}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-inner{display:flex;position:relative;flex-flow:row nowrap;flex-shrink:0;align-items:center;justify-content:center;width:100%;height:100%;z-index:1}ion-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;pointer-events:none}:host(.menu-button-hidden){display:none}:host(.menu-button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity, 0)}}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host(.in-toolbar:not(.in-toolbar-color)){color:var(--ion-toolbar-color, var(--color))}:host{--background-focused:currentColor;--background-focused-opacity:.12;--background-hover:currentColor;--background-hover-opacity:.04;--border-radius:50%;--color:initial;--padding-start:8px;--padding-end:8px;width:48px;height:48px;font-size:24px}:host(.ion-color.ion-focused)::after{background:var(--ion-color-base)}@media (any-hover: hover){:host(.ion-color:hover) .button-native::after{background:var(--ion-color-base)}}'}}}]);