(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{915:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ion_app",(function(){return App}));__webpack_require__(69),__webpack_require__(13),__webpack_require__(19),__webpack_require__(20),__webpack_require__(21),__webpack_require__(508),__webpack_require__(131);var _index_4644c745_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(146),_ionic_global_9a60c1b6_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(253);function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}var App=function(){function App(hostRef){!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,App),Object(_index_4644c745_js__WEBPACK_IMPORTED_MODULE_7__.m)(this,hostRef)}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(App,[{key:"componentDidLoad",value:function componentDidLoad(){rIC(_asyncToGenerator(regeneratorRuntime.mark((function _callee(){var isHybrid,hardwareBackButtonModule;return regeneratorRuntime.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return isHybrid=Object(_ionic_global_9a60c1b6_js__WEBPACK_IMPORTED_MODULE_8__.a)(window,"hybrid"),_ionic_global_9a60c1b6_js__WEBPACK_IMPORTED_MODULE_8__.b.getBoolean("_testing")||__webpack_require__.e(44).then(__webpack_require__.bind(null,1157)).then((function(module){return module.startTapClick(_ionic_global_9a60c1b6_js__WEBPACK_IMPORTED_MODULE_8__.b)})),_ionic_global_9a60c1b6_js__WEBPACK_IMPORTED_MODULE_8__.b.getBoolean("statusTap",isHybrid)&&__webpack_require__.e(43).then(__webpack_require__.bind(null,1158)).then((function(module){return module.startStatusTap()})),_ionic_global_9a60c1b6_js__WEBPACK_IMPORTED_MODULE_8__.b.getBoolean("inputShims",needInputShims())&&__webpack_require__.e(37).then(__webpack_require__.bind(null,1159)).then((function(module){return module.startInputShims(_ionic_global_9a60c1b6_js__WEBPACK_IMPORTED_MODULE_8__.b)})),_context.next=6,__webpack_require__.e(59).then(__webpack_require__.bind(null,1015));case 6:hardwareBackButtonModule=_context.sent,_ionic_global_9a60c1b6_js__WEBPACK_IMPORTED_MODULE_8__.b.getBoolean("hardwareBackButton",isHybrid)?hardwareBackButtonModule.startHardwareBackButton():hardwareBackButtonModule.blockHardwareBackButton(),"undefined"!=typeof window&&__webpack_require__.e(113).then(__webpack_require__.bind(null,1160)).then((function(module){return module.startKeyboardAssist(window)})),__webpack_require__.e(85).then(__webpack_require__.bind(null,1161)).then((function(module){return module.startFocusVisible()}));case 10:case"end":return _context.stop()}}),_callee)}))))}},{key:"render",value:function render(){var _class,mode=Object(_ionic_global_9a60c1b6_js__WEBPACK_IMPORTED_MODULE_8__.c)(this);return Object(_index_4644c745_js__WEBPACK_IMPORTED_MODULE_7__.j)(_index_4644c745_js__WEBPACK_IMPORTED_MODULE_7__.b,{class:(_class={},_class[mode]=!0,_class["ion-page"]=!0,_class["force-statusbar-padding"]=_ionic_global_9a60c1b6_js__WEBPACK_IMPORTED_MODULE_8__.b.getBoolean("_forceStatusbarPadding"),_class)})}},{key:"el",get:function get(){return Object(_index_4644c745_js__WEBPACK_IMPORTED_MODULE_7__.g)(this)}}]),App}(),needInputShims=function needInputShims(){return Object(_ionic_global_9a60c1b6_js__WEBPACK_IMPORTED_MODULE_8__.a)(window,"ios")&&Object(_ionic_global_9a60c1b6_js__WEBPACK_IMPORTED_MODULE_8__.a)(window,"mobile")},rIC=function rIC(callback){"requestIdleCallback"in window?window.requestIdleCallback(callback):setTimeout(callback,32)};App.style="html.plt-mobile ion-app{user-select:none}html.plt-mobile ion-app [contenteditable]{user-select:text}ion-app.force-statusbar-padding{--ion-safe-area-top:20px}"}}]);