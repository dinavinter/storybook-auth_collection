(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{999:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"xstate_machine",(function(){return XStateMachine}));__webpack_require__(131);var _index_4644c745_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(146),_interpreter_c73c92fc_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1035);function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}var XStateMachine=function(){function XStateMachine(hostRef){!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,XStateMachine),Object(_index_4644c745_js__WEBPACK_IMPORTED_MODULE_1__.m)(this,hostRef),this.options={immediate:!1}}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(XStateMachine,[{key:"componentWillLoad",value:function componentWillLoad(){var _this=this,machine=this.machine,options=this.options;this.service=Object(_interpreter_c73c92fc_js__WEBPACK_IMPORTED_MODULE_2__.V)(machine,options).onTransition((function(state){state.changed&&(_this.current=state)})),options&&options.immediate&&this.service.start(),this.current=this.service.initialState}},{key:"componentDidLoad",value:function componentDidLoad(){this.service.start()}},{key:"componentDidUnload",value:function componentDidUnload(){this.service.stop()}},{key:"render",value:function render(){return[this.renderer&&this.renderer(this.current,this.service.send,this.service),Object(_index_4644c745_js__WEBPACK_IMPORTED_MODULE_1__.j)("slot",null)]}}]),XStateMachine}()}}]);