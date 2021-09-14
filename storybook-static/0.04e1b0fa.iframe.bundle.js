(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1017:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return createAnimation}));__webpack_require__(130),__webpack_require__(47),__webpack_require__(76),__webpack_require__(38),__webpack_require__(172),__webpack_require__(70),__webpack_require__(32),__webpack_require__(340),__webpack_require__(339),__webpack_require__(28),__webpack_require__(12),__webpack_require__(13),__webpack_require__(118),__webpack_require__(509),__webpack_require__(508),__webpack_require__(69),__webpack_require__(9),__webpack_require__(14),__webpack_require__(24),__webpack_require__(19),__webpack_require__(20),__webpack_require__(21),__webpack_require__(30),__webpack_require__(10);var animationPrefix,_helpers_2a92b02c_js__WEBPACK_IMPORTED_MODULE_24__=__webpack_require__(1010);function _createForOfIteratorHelper(o,allowArrayLike){var it="undefined"!=typeof Symbol&&o[Symbol.iterator]||o["@@iterator"];if(!it){if(Array.isArray(o)||(it=_unsupportedIterableToArray(o))||allowArrayLike&&o&&"number"==typeof o.length){it&&(o=it);var i=0,F=function F(){};return{s:F,n:function n(){return i>=o.length?{done:!0}:{done:!1,value:o[i++]}},e:function e(_e){throw _e},f:F}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var err,normalCompletion=!0,didErr=!1;return{s:function s(){it=it.call(o)},n:function n(){var step=it.next();return normalCompletion=step.done,step},e:function e(_e2){didErr=!0,err=_e2},f:function f(){try{normalCompletion||null==it.return||it.return()}finally{if(didErr)throw err}}}}function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||_unsupportedIterableToArray(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(o,minLen):void 0}}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var processKeyframes=function processKeyframes(keyframes){return keyframes.forEach((function(keyframe){for(var key in keyframe)if(keyframe.hasOwnProperty(key)){var value=keyframe[key];if("easing"===key){keyframe["animation-timing-function"]=value,delete keyframe[key]}else{var _newKey=convertCamelCaseToHypen(key);_newKey!==key&&(keyframe[_newKey]=value,delete keyframe[key])}}})),keyframes},convertCamelCaseToHypen=function convertCamelCaseToHypen(str){return str.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()},getAnimationPrefix=function getAnimationPrefix(el){if(void 0===animationPrefix){var supportsUnprefixed=void 0!==el.style.animationName,supportsWebkitPrefix=void 0!==el.style.webkitAnimationName;animationPrefix=!supportsUnprefixed&&supportsWebkitPrefix?"-webkit-":""}return animationPrefix},setStyleProperty=function setStyleProperty(element,propertyName,value){var prefix=propertyName.startsWith("animation")?getAnimationPrefix(element):"";element.style.setProperty(prefix+propertyName,value)},removeStyleProperty=function removeStyleProperty(element,propertyName){var prefix=propertyName.startsWith("animation")?getAnimationPrefix(element):"";element.style.removeProperty(prefix+propertyName)},generateKeyframeRules=function generateKeyframeRules(){var keyframes=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return keyframes.map((function(keyframe){var offset=keyframe.offset,frameString=[];for(var property in keyframe)keyframe.hasOwnProperty(property)&&"offset"!==property&&frameString.push(property+": "+keyframe[property]+";");return 100*offset+"% { "+frameString.join(" ")+" }"})).join(" ")},keyframeIds=[],generateKeyframeName=function generateKeyframeName(keyframeRules){var index=keyframeIds.indexOf(keyframeRules);return index<0&&(index=keyframeIds.push(keyframeRules)-1),"ion-animation-"+index},createKeyframeStylesheet=function createKeyframeStylesheet(keyframeName,keyframeRules,element){var styleContainer=function getStyleContainer(element){var rootNode=element.getRootNode();return rootNode.head||rootNode}(element),keyframePrefix=getAnimationPrefix(element),existingStylesheet=styleContainer.querySelector("#"+keyframeName);if(existingStylesheet)return existingStylesheet;var stylesheet=(element.ownerDocument||document).createElement("style");return stylesheet.id=keyframeName,stylesheet.textContent="@"+keyframePrefix+"keyframes "+keyframeName+" { "+keyframeRules+" } @"+keyframePrefix+"keyframes "+keyframeName+"-alt { "+keyframeRules+" }",styleContainer.appendChild(stylesheet),stylesheet},addClassToArray=function addClassToArray(){var classes=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],className=arguments.length>1?arguments[1]:void 0;if(void 0!==className){var classNameToAppend=Array.isArray(className)?className:[className];return[].concat(_toConsumableArray(classes),_toConsumableArray(classNameToAppend))}return classes},createAnimation=function createAnimation(animationId){var _delay,_duration,_easing,_iterations,_fill,_direction,parentAnimation,cssAnimationsTimerFallback,forceDirectionValue,forceDurationValue,forceDelayValue,keyframeName,ani,_keyframes=[],beforeAddClasses=[],beforeRemoveClasses=[],initialized=!1,beforeStylesValue={},afterAddClasses=[],afterRemoveClasses=[],afterStylesValue={},numAnimationsRunning=0,shouldForceLinearEasing=!1,shouldForceSyncPlayback=!1,willComplete=!0,finished=!1,shouldCalculateNumAnimations=!0,id=animationId,onFinishCallbacks=[],onFinishOneTimeCallbacks=[],elements=[],childAnimations=[],stylesheets=[],_beforeAddReadFunctions=[],_beforeAddWriteFunctions=[],_afterAddReadFunctions=[],_afterAddWriteFunctions=[],webAnimations=[],supportsAnimationEffect="function"==typeof AnimationEffect||"function"==typeof window.AnimationEffect,supportsWebAnimations="function"==typeof Element&&"function"==typeof Element.prototype.animate&&supportsAnimationEffect,cleanUp=function cleanUp(clearStyleSheets){cleanUpElements(),clearStyleSheets&&cleanUpStyleSheets()},onFinish=function onFinish(callback,opts){return(opts&&opts.oneTimeCallback?onFinishOneTimeCallbacks:onFinishCallbacks).push({c:callback,o:opts}),ani},clearOnFinish=function clearOnFinish(){return onFinishCallbacks.length=0,onFinishOneTimeCallbacks.length=0,ani},cleanUpElements=function cleanUpElements(){if(supportsWebAnimations)webAnimations.forEach((function(animation){animation.cancel()})),webAnimations.length=0;else{var elementsArray=elements.slice();Object(_helpers_2a92b02c_js__WEBPACK_IMPORTED_MODULE_24__.b)((function(){elementsArray.forEach((function(element){removeStyleProperty(element,"animation-name"),removeStyleProperty(element,"animation-duration"),removeStyleProperty(element,"animation-timing-function"),removeStyleProperty(element,"animation-iteration-count"),removeStyleProperty(element,"animation-delay"),removeStyleProperty(element,"animation-play-state"),removeStyleProperty(element,"animation-fill-mode"),removeStyleProperty(element,"animation-direction")}))}))}},cleanUpStyleSheets=function cleanUpStyleSheets(){stylesheets.forEach((function(stylesheet){stylesheet&&stylesheet.parentNode&&stylesheet.parentNode.removeChild(stylesheet)})),stylesheets.length=0},getFill=function getFill(){return void 0!==_fill?_fill:parentAnimation?parentAnimation.getFill():"both"},getDirection=function getDirection(){return void 0!==forceDirectionValue?forceDirectionValue:void 0!==_direction?_direction:parentAnimation?parentAnimation.getDirection():"normal"},getEasing=function getEasing(){return shouldForceLinearEasing?"linear":void 0!==_easing?_easing:parentAnimation?parentAnimation.getEasing():"linear"},getDuration=function getDuration(){return shouldForceSyncPlayback?0:void 0!==forceDurationValue?forceDurationValue:void 0!==_duration?_duration:parentAnimation?parentAnimation.getDuration():0},getIterations=function getIterations(){return void 0!==_iterations?_iterations:parentAnimation?parentAnimation.getIterations():1},getDelay=function getDelay(){return void 0!==forceDelayValue?forceDelayValue:void 0!==_delay?_delay:parentAnimation?parentAnimation.getDelay():0},beforeAnimation=function beforeAnimation(){_beforeAddReadFunctions.forEach((function(callback){return callback()})),_beforeAddWriteFunctions.forEach((function(callback){return callback()}));var addClasses=beforeAddClasses,removeClasses=beforeRemoveClasses,styles=beforeStylesValue;elements.forEach((function(el){var elementClassList=el.classList;for(var property in addClasses.forEach((function(c){return elementClassList.add(c)})),removeClasses.forEach((function(c){return elementClassList.remove(c)})),styles)styles.hasOwnProperty(property)&&setStyleProperty(el,property,styles[property])}))},animationFinish=function animationFinish(){0!==numAnimationsRunning&&0===--numAnimationsRunning&&(!function afterAnimation(){clearCSSAnimationsTimeout(),_afterAddReadFunctions.forEach((function(callback){return callback()})),_afterAddWriteFunctions.forEach((function(callback){return callback()}));var currentStep=willComplete?1:0,addClasses=afterAddClasses,removeClasses=afterRemoveClasses,styles=afterStylesValue;elements.forEach((function(el){var elementClassList=el.classList;for(var property in addClasses.forEach((function(c){return elementClassList.add(c)})),removeClasses.forEach((function(c){return elementClassList.remove(c)})),styles)styles.hasOwnProperty(property)&&setStyleProperty(el,property,styles[property])})),onFinishCallbacks.forEach((function(onFinishCallback){return onFinishCallback.c(currentStep,ani)})),onFinishOneTimeCallbacks.forEach((function(onFinishCallback){return onFinishCallback.c(currentStep,ani)})),onFinishOneTimeCallbacks.length=0,shouldCalculateNumAnimations=!0,willComplete&&(finished=!0),willComplete=!0}(),parentAnimation&&parentAnimation.animationFinish())},initializeCSSAnimation=function initializeCSSAnimation(){var toggleAnimationName=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];cleanUpStyleSheets();var processedKeyframes=processKeyframes(_keyframes);elements.forEach((function(element){if(processedKeyframes.length>0){var keyframeRules=generateKeyframeRules(processedKeyframes);keyframeName=void 0!==animationId?animationId:generateKeyframeName(keyframeRules);var stylesheet=createKeyframeStylesheet(keyframeName,keyframeRules,element);stylesheets.push(stylesheet),setStyleProperty(element,"animation-duration",getDuration()+"ms"),setStyleProperty(element,"animation-timing-function",getEasing()),setStyleProperty(element,"animation-delay",getDelay()+"ms"),setStyleProperty(element,"animation-fill-mode",getFill()),setStyleProperty(element,"animation-direction",getDirection());var iterationsCount=getIterations()===1/0?"infinite":getIterations().toString();setStyleProperty(element,"animation-iteration-count",iterationsCount),setStyleProperty(element,"animation-play-state","paused"),toggleAnimationName&&setStyleProperty(element,"animation-name",stylesheet.id+"-alt"),Object(_helpers_2a92b02c_js__WEBPACK_IMPORTED_MODULE_24__.b)((function(){setStyleProperty(element,"animation-name",stylesheet.id||null)}))}}))},initializeWebAnimation=function initializeWebAnimation(){elements.forEach((function(element){var animation=element.animate(_keyframes,{id:id,delay:getDelay(),duration:getDuration(),easing:getEasing(),iterations:getIterations(),fill:getFill(),direction:getDirection()});animation.pause(),webAnimations.push(animation)})),webAnimations.length>0&&(webAnimations[0].onfinish=function(){animationFinish()})},initializeAnimation=function initializeAnimation(){var toggleAnimationName=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];beforeAnimation(),_keyframes.length>0&&(supportsWebAnimations?initializeWebAnimation():initializeCSSAnimation(toggleAnimationName)),initialized=!0},setAnimationStep=function setAnimationStep(step){if(step=Math.min(Math.max(step,0),.9999),supportsWebAnimations)webAnimations.forEach((function(animation){animation.currentTime=animation.effect.getComputedTiming().delay+getDuration()*step,animation.pause()}));else{var animationDuration="-"+getDuration()*step+"ms";elements.forEach((function(element){_keyframes.length>0&&(setStyleProperty(element,"animation-delay",animationDuration),setStyleProperty(element,"animation-play-state","paused"))}))}},updateWebAnimation=function updateWebAnimation(step){webAnimations.forEach((function(animation){animation.effect.updateTiming({delay:getDelay(),duration:getDuration(),easing:getEasing(),iterations:getIterations(),fill:getFill(),direction:getDirection()})})),void 0!==step&&setAnimationStep(step)},updateCSSAnimation=function updateCSSAnimation(){var toggleAnimationName=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],step=arguments.length>1?arguments[1]:void 0;Object(_helpers_2a92b02c_js__WEBPACK_IMPORTED_MODULE_24__.b)((function(){elements.forEach((function(element){setStyleProperty(element,"animation-name",keyframeName||null),setStyleProperty(element,"animation-duration",getDuration()+"ms"),setStyleProperty(element,"animation-timing-function",getEasing()),setStyleProperty(element,"animation-delay",void 0!==step?"-"+step*getDuration()+"ms":getDelay()+"ms"),setStyleProperty(element,"animation-fill-mode",getFill()||null),setStyleProperty(element,"animation-direction",getDirection()||null);var iterationsCount=getIterations()===1/0?"infinite":getIterations().toString();setStyleProperty(element,"animation-iteration-count",iterationsCount),toggleAnimationName&&setStyleProperty(element,"animation-name",keyframeName+"-alt"),Object(_helpers_2a92b02c_js__WEBPACK_IMPORTED_MODULE_24__.b)((function(){setStyleProperty(element,"animation-name",keyframeName||null)}))}))}))},update=function update(){var deep=arguments.length>0&&void 0!==arguments[0]&&arguments[0],toggleAnimationName=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],step=arguments.length>2?arguments[2]:void 0;return deep&&childAnimations.forEach((function(animation){animation.update(deep,toggleAnimationName,step)})),supportsWebAnimations?updateWebAnimation(step):updateCSSAnimation(toggleAnimationName,step),ani},pauseAnimation=function pauseAnimation(){initialized&&(supportsWebAnimations?webAnimations.forEach((function(animation){animation.pause()})):elements.forEach((function(element){setStyleProperty(element,"animation-play-state","paused")})))},onAnimationEndFallback=function onAnimationEndFallback(){cssAnimationsTimerFallback=void 0,animationFinish()},clearCSSAnimationsTimeout=function clearCSSAnimationsTimeout(){cssAnimationsTimerFallback&&clearTimeout(cssAnimationsTimerFallback)},clearCSSAnimationPlayState=function clearCSSAnimationPlayState(){elements.forEach((function(element){removeStyleProperty(element,"animation-duration"),removeStyleProperty(element,"animation-delay"),removeStyleProperty(element,"animation-play-state")}))},play=function play(opts){return new Promise((function(resolve){opts&&opts.sync&&(shouldForceSyncPlayback=!0,onFinish((function(){return shouldForceSyncPlayback=!1}),{oneTimeCallback:!0})),initialized||initializeAnimation(),finished&&(!function resetAnimation(){supportsWebAnimations?(setAnimationStep(0),updateWebAnimation()):updateCSSAnimation()}(),finished=!1),shouldCalculateNumAnimations&&(numAnimationsRunning=childAnimations.length+1,shouldCalculateNumAnimations=!1),onFinish((function(){return resolve()}),{oneTimeCallback:!0}),childAnimations.forEach((function(animation){animation.play()})),supportsWebAnimations?function playWebAnimations(){webAnimations.forEach((function(animation){animation.play()})),0!==_keyframes.length&&0!==elements.length||animationFinish()}():function playCSSAnimations(){if(clearCSSAnimationsTimeout(),Object(_helpers_2a92b02c_js__WEBPACK_IMPORTED_MODULE_24__.b)((function(){elements.forEach((function(element){_keyframes.length>0&&setStyleProperty(element,"animation-play-state","running")}))})),0===_keyframes.length||0===elements.length)animationFinish();else{var animationDelay=getDelay()||0,animationDuration=getDuration()||0,animationIterations=getIterations()||1;isFinite(animationIterations)&&(cssAnimationsTimerFallback=setTimeout(onAnimationEndFallback,animationDelay+animationDuration*animationIterations+100)),function animationEnd(el,callback){var unRegTrans,opts={passive:!0},unregister=function unregister(){unRegTrans&&unRegTrans()},onTransitionEnd=function onTransitionEnd(ev){el===ev.target&&(unregister(),callback(ev))};el&&(el.addEventListener("webkitAnimationEnd",onTransitionEnd,opts),el.addEventListener("animationend",onTransitionEnd,opts),unRegTrans=function unRegTrans(){el.removeEventListener("webkitAnimationEnd",onTransitionEnd,opts),el.removeEventListener("animationend",onTransitionEnd,opts)})}(elements[0],(function(){clearCSSAnimationsTimeout(),Object(_helpers_2a92b02c_js__WEBPACK_IMPORTED_MODULE_24__.b)((function(){clearCSSAnimationPlayState(),Object(_helpers_2a92b02c_js__WEBPACK_IMPORTED_MODULE_24__.b)(animationFinish)}))}))}}()}))},from=function from(property,value){var _ref,firstFrame=_keyframes[0];void 0===firstFrame||void 0!==firstFrame.offset&&0!==firstFrame.offset?_keyframes=[(_ref={offset:0},_ref[property]=value,_ref)].concat(_toConsumableArray(_keyframes)):firstFrame[property]=value;return ani};return ani={parentAnimation:parentAnimation,elements:elements,childAnimations:childAnimations,id:id,animationFinish:animationFinish,from:from,to:function to(property,value){var _ref2,lastFrame=_keyframes[_keyframes.length-1];void 0===lastFrame||void 0!==lastFrame.offset&&1!==lastFrame.offset?_keyframes=[].concat(_toConsumableArray(_keyframes),[(_ref2={offset:1},_ref2[property]=value,_ref2)]):lastFrame[property]=value;return ani},fromTo:function fromTo(property,fromValue,toValue){return from(property,fromValue).to(property,toValue)},parent:function parent(animation){return parentAnimation=animation,ani},play:play,pause:function pause(){return childAnimations.forEach((function(animation){animation.pause()})),pauseAnimation(),ani},stop:function stop(){childAnimations.forEach((function(animation){animation.stop()})),initialized&&(cleanUpElements(),initialized=!1),function resetFlags(){shouldForceLinearEasing=!1,shouldForceSyncPlayback=!1,shouldCalculateNumAnimations=!0,forceDirectionValue=void 0,forceDurationValue=void 0,forceDelayValue=void 0,numAnimationsRunning=0,finished=!1,willComplete=!0}()},destroy:function destroy(clearStyleSheets){return childAnimations.forEach((function(childAnimation){childAnimation.destroy(clearStyleSheets)})),cleanUp(clearStyleSheets),elements.length=0,childAnimations.length=0,_keyframes.length=0,clearOnFinish(),initialized=!1,shouldCalculateNumAnimations=!0,ani},keyframes:function keyframes(keyframeValues){return _keyframes=keyframeValues,ani},addAnimation:function addAnimation(animationToAdd){if(null!=animationToAdd)if(Array.isArray(animationToAdd)){var _step3,_iterator3=_createForOfIteratorHelper(animationToAdd);try{for(_iterator3.s();!(_step3=_iterator3.n()).done;){var animation=_step3.value;animation.parent(ani),childAnimations.push(animation)}}catch(err){_iterator3.e(err)}finally{_iterator3.f()}}else animationToAdd.parent(ani),childAnimations.push(animationToAdd);return ani},addElement:function addElement(el){if(null!=el)if(1===el.nodeType)elements.push(el);else if(el.length>=0)for(var i=0;i<el.length;i++)elements.push(el[i]);else console.error("Invalid addElement value");return ani},update:update,fill:function fill(animationFill){return _fill=animationFill,update(!0),ani},direction:function direction(animationDirection){return _direction=animationDirection,update(!0),ani},iterations:function iterations(animationIterations){return _iterations=animationIterations,update(!0),ani},duration:function duration(animationDuration){return supportsWebAnimations||0!==animationDuration||(animationDuration=1),_duration=animationDuration,update(!0),ani},easing:function easing(animationEasing){return _easing=animationEasing,update(!0),ani},delay:function delay(animationDelay){return _delay=animationDelay,update(!0),ani},getWebAnimations:function getWebAnimations(){return webAnimations},getKeyframes:function getKeyframes(){return _keyframes},getFill:getFill,getDirection:getDirection,getDelay:getDelay,getIterations:getIterations,getEasing:getEasing,getDuration:getDuration,afterAddRead:function afterAddRead(readFn){return _afterAddReadFunctions.push(readFn),ani},afterAddWrite:function afterAddWrite(writeFn){return _afterAddWriteFunctions.push(writeFn),ani},afterClearStyles:function afterClearStyles(){var _step2,propertyNames=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],_iterator2=_createForOfIteratorHelper(propertyNames);try{for(_iterator2.s();!(_step2=_iterator2.n()).done;){var property=_step2.value;afterStylesValue[property]=""}}catch(err){_iterator2.e(err)}finally{_iterator2.f()}return ani},afterStyles:function afterStyles(){var styles=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return afterStylesValue=styles,ani},afterRemoveClass:function afterRemoveClass(className){return afterRemoveClasses=addClassToArray(afterRemoveClasses,className),ani},afterAddClass:function afterAddClass(className){return afterAddClasses=addClassToArray(afterAddClasses,className),ani},beforeAddRead:function beforeAddRead(readFn){return _beforeAddReadFunctions.push(readFn),ani},beforeAddWrite:function beforeAddWrite(writeFn){return _beforeAddWriteFunctions.push(writeFn),ani},beforeClearStyles:function beforeClearStyles(){var _step,propertyNames=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],_iterator=_createForOfIteratorHelper(propertyNames);try{for(_iterator.s();!(_step=_iterator.n()).done;){var property=_step.value;beforeStylesValue[property]=""}}catch(err){_iterator.e(err)}finally{_iterator.f()}return ani},beforeStyles:function beforeStyles(){var styles=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return beforeStylesValue=styles,ani},beforeRemoveClass:function beforeRemoveClass(className){return beforeRemoveClasses=addClassToArray(beforeRemoveClasses,className),ani},beforeAddClass:function beforeAddClass(className){return beforeAddClasses=addClassToArray(beforeAddClasses,className),ani},onFinish:onFinish,progressStart:function progressStart(){var forceLinearEasing=arguments.length>0&&void 0!==arguments[0]&&arguments[0],step=arguments.length>1?arguments[1]:void 0;return childAnimations.forEach((function(animation){animation.progressStart(forceLinearEasing,step)})),pauseAnimation(),shouldForceLinearEasing=forceLinearEasing,initialized?update(!1,!0,step):initializeAnimation(),ani},progressStep:function progressStep(step){return childAnimations.forEach((function(animation){animation.progressStep(step)})),setAnimationStep(step),ani},progressEnd:function progressEnd(playTo,step,dur){return shouldForceLinearEasing=!1,childAnimations.forEach((function(animation){animation.progressEnd(playTo,step,dur)})),void 0!==dur&&(forceDurationValue=dur),finished=!1,willComplete=!0,0===playTo?("reverse"===(forceDirectionValue="reverse"===getDirection()?"normal":"reverse")&&(willComplete=!1),supportsWebAnimations?(update(),setAnimationStep(1-step)):(forceDelayValue=(1-step)*getDuration()*-1,update(!1,!1))):1===playTo&&(supportsWebAnimations?(update(),setAnimationStep(step)):(forceDelayValue=step*getDuration()*-1,update(!1,!1))),void 0!==playTo&&(onFinish((function(){forceDurationValue=void 0,forceDirectionValue=void 0,forceDelayValue=void 0}),{oneTimeCallback:!0}),parentAnimation||play()),ani}}}}}]);