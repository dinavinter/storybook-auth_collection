(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{1016:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"createGesture",(function(){return createGesture}));__webpack_require__(131),__webpack_require__(1012),__webpack_require__(509),__webpack_require__(18);var _gesture_controller_604336b7_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(1013);__webpack_require__.d(__webpack_exports__,"GESTURE_CONTROLLER",(function(){return _gesture_controller_604336b7_js__WEBPACK_IMPORTED_MODULE_4__.a}));var _sPassive,addEventListener=function addEventListener(el,eventName,callback,opts){var add,remove,listenerOpts=supportsPassive(el)?{capture:!!opts.capture,passive:!!opts.passive}:!!opts.capture;return el.__zone_symbol__addEventListener?(add="__zone_symbol__addEventListener",remove="__zone_symbol__removeEventListener"):(add="addEventListener",remove="removeEventListener"),el[add](eventName,callback,listenerOpts),function(){el[remove](eventName,callback,listenerOpts)}},supportsPassive=function supportsPassive(node){if(void 0===_sPassive)try{var opts=Object.defineProperty({},"passive",{get:function get(){_sPassive=!0}});node.addEventListener("optsTest",(function(){}),opts)}catch(e){_sPassive=!1}return!!_sPassive},getDocument=function getDocument(node){return node instanceof Document?node:node.ownerDocument},createGesture=function createGesture(config){var hasCapturedPan=!1,hasStartedPan=!1,hasFiredStart=!0,isMoveQueued=!1,finalConfig=Object.assign({disableScroll:!1,direction:"x",gesturePriority:0,passive:!0,maxAngle:40,threshold:10},config),canStart=finalConfig.canStart,onWillStart=finalConfig.onWillStart,onStart=finalConfig.onStart,onEnd=finalConfig.onEnd,notCaptured=finalConfig.notCaptured,onMove=finalConfig.onMove,threshold=finalConfig.threshold,passive=finalConfig.passive,blurOnStart=finalConfig.blurOnStart,detail={type:"pan",startX:0,startY:0,startTime:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,currentTime:0,event:void 0,data:void 0},pan=function createPanRecognizer(direction,thresh,maxAngle){var radians=maxAngle*(Math.PI/180),isDirX="x"===direction,maxCosine=Math.cos(radians),threshold=thresh*thresh,startX=0,startY=0,dirty=!1,isPan=0;return{start:function start(x,y){startX=x,startY=y,isPan=0,dirty=!0},detect:function detect(x,y){if(!dirty)return!1;var deltaX=x-startX,deltaY=y-startY,distance=deltaX*deltaX+deltaY*deltaY;if(distance<threshold)return!1;var hypotenuse=Math.sqrt(distance),cosine=(isDirX?deltaX:deltaY)/hypotenuse;return isPan=cosine>maxCosine?1:cosine<-maxCosine?-1:0,dirty=!1,!0},isGesture:function isGesture(){return 0!==isPan},getDirection:function getDirection(){return isPan}}}(finalConfig.direction,finalConfig.threshold,finalConfig.maxAngle),gesture=_gesture_controller_604336b7_js__WEBPACK_IMPORTED_MODULE_4__.a.createGesture({name:config.gestureName,priority:config.gesturePriority,disableScroll:config.disableScroll}),fireOnMove=function fireOnMove(){hasCapturedPan&&(isMoveQueued=!1,onMove&&onMove(detail))},tryToCapturePan=function tryToCapturePan(){return!(gesture&&!gesture.capture())&&(hasCapturedPan=!0,hasFiredStart=!1,detail.startX=detail.currentX,detail.startY=detail.currentY,detail.startTime=detail.currentTime,onWillStart?onWillStart(detail).then(fireOnStart):fireOnStart(),!0)},fireOnStart=function fireOnStart(){blurOnStart&&function blurActiveElement(){if("undefined"!=typeof document){var activeElement=document.activeElement;null!==activeElement&&activeElement.blur&&activeElement.blur()}}(),onStart&&onStart(detail),hasFiredStart=!0},reset=function reset(){hasCapturedPan=!1,hasStartedPan=!1,isMoveQueued=!1,hasFiredStart=!0,gesture.release()},pointerUp=function pointerUp(ev){var tmpHasCaptured=hasCapturedPan,tmpHasFiredStart=hasFiredStart;reset(),tmpHasFiredStart&&(calcGestureData(detail,ev),tmpHasCaptured?onEnd&&onEnd(detail):notCaptured&&notCaptured(detail))},pointerEvents=function createPointerEvents(el,pointerDown,pointerMove,pointerUp,options){var rmTouchStart,rmTouchMove,rmTouchEnd,rmTouchCancel,rmMouseStart,rmMouseMove,rmMouseUp,lastTouchEvent=0,handleTouchStart=function handleTouchStart(ev){lastTouchEvent=Date.now()+2e3,pointerDown(ev)&&(!rmTouchMove&&pointerMove&&(rmTouchMove=addEventListener(el,"touchmove",pointerMove,options)),rmTouchEnd||(rmTouchEnd=addEventListener(ev.target,"touchend",handleTouchEnd,options)),rmTouchCancel||(rmTouchCancel=addEventListener(ev.target,"touchcancel",handleTouchEnd,options)))},handleMouseDown=function handleMouseDown(ev){lastTouchEvent>Date.now()||pointerDown(ev)&&(!rmMouseMove&&pointerMove&&(rmMouseMove=addEventListener(getDocument(el),"mousemove",pointerMove,options)),rmMouseUp||(rmMouseUp=addEventListener(getDocument(el),"mouseup",handleMouseUp,options)))},handleTouchEnd=function handleTouchEnd(ev){stopTouch(),pointerUp&&pointerUp(ev)},handleMouseUp=function handleMouseUp(ev){stopMouse(),pointerUp&&pointerUp(ev)},stopTouch=function stopTouch(){rmTouchMove&&rmTouchMove(),rmTouchEnd&&rmTouchEnd(),rmTouchCancel&&rmTouchCancel(),rmTouchMove=rmTouchEnd=rmTouchCancel=void 0},stopMouse=function stopMouse(){rmMouseMove&&rmMouseMove(),rmMouseUp&&rmMouseUp(),rmMouseMove=rmMouseUp=void 0},stop=function stop(){stopTouch(),stopMouse()},enable=function enable(){!(arguments.length>0&&void 0!==arguments[0])||arguments[0]?(rmTouchStart||(rmTouchStart=addEventListener(el,"touchstart",handleTouchStart,options)),rmMouseStart||(rmMouseStart=addEventListener(el,"mousedown",handleMouseDown,options))):(rmTouchStart&&rmTouchStart(),rmMouseStart&&rmMouseStart(),rmTouchStart=rmMouseStart=void 0,stop())};return{enable:enable,stop:stop,destroy:function destroy(){enable(!1),pointerUp=pointerMove=pointerDown=void 0}}}(finalConfig.el,(function pointerDown(ev){var timeStamp=now(ev);return!(hasStartedPan||!hasFiredStart)&&(updateDetail(ev,detail),detail.startX=detail.currentX,detail.startY=detail.currentY,detail.startTime=detail.currentTime=timeStamp,detail.velocityX=detail.velocityY=detail.deltaX=detail.deltaY=0,detail.event=ev,(!canStart||!1!==canStart(detail))&&(gesture.release(),!!gesture.start()&&(hasStartedPan=!0,0===threshold?tryToCapturePan():(pan.start(detail.startX,detail.startY),!0))))}),(function pointerMove(ev){hasCapturedPan?!isMoveQueued&&hasFiredStart&&(isMoveQueued=!0,calcGestureData(detail,ev),requestAnimationFrame(fireOnMove)):(calcGestureData(detail,ev),pan.detect(detail.currentX,detail.currentY)&&(pan.isGesture()&&tryToCapturePan()||abortGesture()))}),pointerUp,{capture:!1,passive:passive}),abortGesture=function abortGesture(){reset(),pointerEvents.stop(),notCaptured&&notCaptured(detail)};return{enable:function enable(){var _enable=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];_enable||(hasCapturedPan&&pointerUp(void 0),reset()),pointerEvents.enable(_enable)},destroy:function destroy(){gesture.destroy(),pointerEvents.destroy()}}},calcGestureData=function calcGestureData(detail,ev){if(ev){var prevX=detail.currentX,prevY=detail.currentY,prevT=detail.currentTime;updateDetail(ev,detail);var currentX=detail.currentX,currentY=detail.currentY,timeDelta=(detail.currentTime=now(ev))-prevT;if(timeDelta>0&&timeDelta<100){var velocityX=(currentX-prevX)/timeDelta,velocityY=(currentY-prevY)/timeDelta;detail.velocityX=.7*velocityX+.3*detail.velocityX,detail.velocityY=.7*velocityY+.3*detail.velocityY}detail.deltaX=currentX-detail.startX,detail.deltaY=currentY-detail.startY,detail.event=ev}},updateDetail=function updateDetail(ev,detail){var x=0,y=0;if(ev){var changedTouches=ev.changedTouches;if(changedTouches&&changedTouches.length>0){var touch=changedTouches[0];x=touch.clientX,y=touch.clientY}else void 0!==ev.pageX&&(x=ev.pageX,y=ev.pageY)}detail.currentX=x,detail.currentY=y},now=function now(ev){return ev.timeStamp||Date.now()}}}]);