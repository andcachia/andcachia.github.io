/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./audio/flip.mp3": 2,
	"./audio/match.mp3": 3,
	"./audio/memoryLaneTheme.mp3": 4,
	"./images/photo_back.png": 5,
	"./sprites/spritesheet.json": 1,
	"./sprites/spritesheet.png": 6
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 0;

/***/ }),
/* 1 */
/***/ (function(module) {

module.exports = JSON.parse("{\"textures\":[{\"image\":\"MatchTheBoop.png\",\"format\":\"RGBA8888\",\"size\":{\"w\":1890,\"h\":1926},\"scale\":1,\"frames\":[{\"filename\":\"background_base.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":961,\"h\":640},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":961,\"h\":640},\"frame\":{\"x\":1,\"y\":1,\"w\":961,\"h\":640}},{\"filename\":\"baclground_seperator.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":961,\"h\":640},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":961,\"h\":640},\"frame\":{\"x\":1,\"y\":643,\"w\":961,\"h\":640}},{\"filename\":\"screen_tutorial.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":961,\"h\":640},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":961,\"h\":640},\"frame\":{\"x\":1,\"y\":1285,\"w\":961,\"h\":640}},{\"filename\":\"screen_panel.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":721,\"h\":484},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":721,\"h\":484},\"frame\":{\"x\":964,\"y\":1,\"w\":721,\"h\":484}},{\"filename\":\"ui_game_win.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":386,\"h\":582},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":384,\"h\":576},\"frame\":{\"x\":964,\"y\":487,\"w\":384,\"h\":576}},{\"filename\":\"ui_game_over.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":365,\"h\":528},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":365,\"h\":528},\"frame\":{\"x\":964,\"y\":1065,\"w\":365,\"h\":528}},{\"filename\":\"title.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":398,\"h\":368},\"spriteSourceSize\":{\"x\":13,\"y\":9,\"w\":377,\"h\":351},\"frame\":{\"x\":1350,\"y\":487,\"w\":377,\"h\":351}},{\"filename\":\"btn_more_games.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":375,\"h\":110},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":375,\"h\":110},\"frame\":{\"x\":1350,\"y\":840,\"w\":375,\"h\":110}},{\"filename\":\"btn_high_scores.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":375,\"h\":109},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":375,\"h\":109},\"frame\":{\"x\":1350,\"y\":952,\"w\":375,\"h\":109}},{\"filename\":\"btn_start.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":374,\"h\":110},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":374,\"h\":110},\"frame\":{\"x\":964,\"y\":1595,\"w\":374,\"h\":110}},{\"filename\":\"btn_continue.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":350,\"h\":102},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":349,\"h\":102},\"frame\":{\"x\":964,\"y\":1707,\"w\":349,\"h\":102}},{\"filename\":\"multiplier_x2.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":202,\"h\":123},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":202,\"h\":123},\"frame\":{\"x\":1687,\"y\":1,\"w\":202,\"h\":123}},{\"filename\":\"photo_16.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":162,\"h\":173},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":162,\"h\":173},\"frame\":{\"x\":1727,\"y\":840,\"w\":162,\"h\":173}},{\"filename\":\"photo_17.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":162,\"h\":173},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":162,\"h\":173},\"frame\":{\"x\":1727,\"y\":1015,\"w\":162,\"h\":173}},{\"filename\":\"btn_back.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":263,\"h\":82},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":263,\"h\":82},\"frame\":{\"x\":964,\"y\":1811,\"w\":263,\"h\":82}},{\"filename\":\"photo_18.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":163,\"h\":173},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":163,\"h\":173},\"frame\":{\"x\":1687,\"y\":126,\"w\":163,\"h\":173}},{\"filename\":\"photo_19.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":162,\"h\":173},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":162,\"h\":173},\"frame\":{\"x\":1687,\"y\":301,\"w\":162,\"h\":173}},{\"filename\":\"player_1_win.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":136,\"h\":164},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":136,\"h\":164},\"frame\":{\"x\":1729,\"y\":476,\"w\":136,\"h\":164}},{\"filename\":\"player_2_win.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":134,\"h\":162},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":134,\"h\":162},\"frame\":{\"x\":1729,\"y\":642,\"w\":134,\"h\":162}},{\"filename\":\"btn_submit.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":263,\"h\":81},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":263,\"h\":81},\"frame\":{\"x\":1350,\"y\":1063,\"w\":263,\"h\":81}},{\"filename\":\"ui_textbar.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":260,\"h\":148},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":260,\"h\":148},\"frame\":{\"x\":1331,\"y\":1146,\"w\":260,\"h\":148}},{\"filename\":\"multiplier_x4.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":215,\"h\":123},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":215,\"h\":123},\"frame\":{\"x\":1331,\"y\":1296,\"w\":215,\"h\":123}},{\"filename\":\"multiplier_x6.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":206,\"h\":124},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":206,\"h\":124},\"frame\":{\"x\":1331,\"y\":1421,\"w\":206,\"h\":124}},{\"filename\":\"player_3_win.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":134,\"h\":162},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":134,\"h\":162},\"frame\":{\"x\":1340,\"y\":1547,\"w\":134,\"h\":162}},{\"filename\":\"player_4_win.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":134,\"h\":162},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":134,\"h\":162},\"frame\":{\"x\":1476,\"y\":1547,\"w\":134,\"h\":162}},{\"filename\":\"btn_menu.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":142,\"h\":103},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":142,\"h\":103},\"frame\":{\"x\":1315,\"y\":1711,\"w\":142,\"h\":103}},{\"filename\":\"btn_replay.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":142,\"h\":103},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":142,\"h\":103},\"frame\":{\"x\":1459,\"y\":1711,\"w\":142,\"h\":103}},{\"filename\":\"photo_03.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":92,\"h\":88},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":84,\"h\":88},\"frame\":{\"x\":1229,\"y\":1811,\"w\":84,\"h\":88}},{\"filename\":\"btn_arrow.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":141,\"h\":102},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":141,\"h\":102},\"frame\":{\"x\":1315,\"y\":1816,\"w\":141,\"h\":102}},{\"filename\":\"ui_timer.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":113,\"h\":80},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":113,\"h\":80},\"frame\":{\"x\":1458,\"y\":1816,\"w\":113,\"h\":80}},{\"filename\":\"photo_01.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":83,\"h\":88},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":83,\"h\":88},\"frame\":{\"x\":1615,\"y\":1063,\"w\":83,\"h\":88}},{\"filename\":\"player_highlight_1.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":78,\"h\":98},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":78,\"h\":98},\"frame\":{\"x\":1593,\"y\":1153,\"w\":78,\"h\":98}},{\"filename\":\"player_highlight_2.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":78,\"h\":98},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":78,\"h\":98},\"frame\":{\"x\":1548,\"y\":1296,\"w\":78,\"h\":98}},{\"filename\":\"photo_02.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":83,\"h\":88},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":83,\"h\":88},\"frame\":{\"x\":1573,\"y\":1816,\"w\":83,\"h\":88}},{\"filename\":\"player_highlight_3.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":78,\"h\":98},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":78,\"h\":98},\"frame\":{\"x\":1539,\"y\":1421,\"w\":78,\"h\":98}},{\"filename\":\"player_highlight_4.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":78,\"h\":98},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":78,\"h\":98},\"frame\":{\"x\":1603,\"y\":1711,\"w\":78,\"h\":98}},{\"filename\":\"photo_04.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":83,\"h\":88},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":83,\"h\":88},\"frame\":{\"x\":1658,\"y\":1811,\"w\":83,\"h\":88}},{\"filename\":\"photo_05.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":84,\"h\":88},\"spriteSourceSize\":{\"x\":1,\"y\":0,\"w\":83,\"h\":88},\"frame\":{\"x\":1673,\"y\":1190,\"w\":83,\"h\":88}},{\"filename\":\"photo_06.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":83,\"h\":88},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":83,\"h\":88},\"frame\":{\"x\":1758,\"y\":1190,\"w\":83,\"h\":88}},{\"filename\":\"photo_07.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":83,\"h\":88},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":83,\"h\":88},\"frame\":{\"x\":1628,\"y\":1280,\"w\":83,\"h\":88}},{\"filename\":\"photo_08.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":83,\"h\":88},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":83,\"h\":88},\"frame\":{\"x\":1713,\"y\":1280,\"w\":83,\"h\":88}},{\"filename\":\"photo_09.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":82,\"h\":88},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":82,\"h\":88},\"frame\":{\"x\":1798,\"y\":1280,\"w\":82,\"h\":88}},{\"filename\":\"photo_10sec.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":83,\"h\":88},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":83,\"h\":88},\"frame\":{\"x\":1628,\"y\":1370,\"w\":83,\"h\":88}},{\"filename\":\"photo_12.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":83,\"h\":88},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":83,\"h\":88},\"frame\":{\"x\":1713,\"y\":1370,\"w\":83,\"h\":88}},{\"filename\":\"photo_10.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":82,\"h\":88},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":82,\"h\":88},\"frame\":{\"x\":1798,\"y\":1370,\"w\":82,\"h\":88}},{\"filename\":\"photo_13.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":84,\"h\":88},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":83,\"h\":88},\"frame\":{\"x\":1619,\"y\":1460,\"w\":83,\"h\":88}},{\"filename\":\"photo_back.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":83,\"h\":88},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":83,\"h\":88},\"frame\":{\"x\":1704,\"y\":1460,\"w\":83,\"h\":88}},{\"filename\":\"photo_11.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":82,\"h\":88},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":82,\"h\":88},\"frame\":{\"x\":1789,\"y\":1460,\"w\":82,\"h\":88}},{\"filename\":\"photo_14.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":83,\"h\":87},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":83,\"h\":87},\"frame\":{\"x\":1612,\"y\":1550,\"w\":83,\"h\":87}},{\"filename\":\"photo_15.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":82,\"h\":88},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":82,\"h\":88},\"frame\":{\"x\":1697,\"y\":1550,\"w\":82,\"h\":88}},{\"filename\":\"photo_5sec.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":82,\"h\":88},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":82,\"h\":88},\"frame\":{\"x\":1781,\"y\":1550,\"w\":82,\"h\":88}},{\"filename\":\"player_1.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":66,\"h\":78},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":66,\"h\":78},\"frame\":{\"x\":1743,\"y\":1640,\"w\":66,\"h\":78}},{\"filename\":\"player_4.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":66,\"h\":77},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":66,\"h\":77},\"frame\":{\"x\":1811,\"y\":1640,\"w\":66,\"h\":77}},{\"filename\":\"player_2.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":66,\"h\":76},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":66,\"h\":76},\"frame\":{\"x\":1683,\"y\":1720,\"w\":66,\"h\":76}},{\"filename\":\"player_3.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":65,\"h\":76},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":65,\"h\":76},\"frame\":{\"x\":1751,\"y\":1720,\"w\":65,\"h\":76}}]}],\"meta\":{\"app\":\"https://www.codeandweb.com/texturepacker\",\"version\":\"3.0\",\"smartupdate\":\"$TexturePacker:SmartUpdate:ce4eacadd6aec1e2fd90211e77a45b46:1364ef5ec2e7b85e176a57104caf1c23:06fb8501a7e465a5144cc9ffaa0b84bf$\"}}");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a9d1214c8ae502704185f2b0616607e0.mp3";

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a2a7e39fa1413de062064b6db17cd90c.mp3";

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "5cc14bdea8b70030dcbabe4abc216c55.mp3";

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bda1e2a3de131e563e46b89fc9259dc1.png";

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "4ea3dadef11d2a42db2d60a41837f1e5.png";

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/* Web Font Loader v1.6.28 - (c) Adobe Systems, Google. License: Apache 2.0 */(function(){function aa(a,b,c){return a.call.apply(a.bind,arguments)}function ba(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function p(a,b,c){p=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?aa:ba;return p.apply(null,arguments)}var q=Date.now||function(){return+new Date};function ca(a,b){this.a=a;this.o=b||a;this.c=this.o.document}var da=!!window.FontFace;function t(a,b,c,d){b=a.c.createElement(b);if(c)for(var e in c)c.hasOwnProperty(e)&&("style"==e?b.style.cssText=c[e]:b.setAttribute(e,c[e]));d&&b.appendChild(a.c.createTextNode(d));return b}function u(a,b,c){a=a.c.getElementsByTagName(b)[0];a||(a=document.documentElement);a.insertBefore(c,a.lastChild)}function v(a){a.parentNode&&a.parentNode.removeChild(a)}
function w(a,b,c){b=b||[];c=c||[];for(var d=a.className.split(/\s+/),e=0;e<b.length;e+=1){for(var f=!1,g=0;g<d.length;g+=1)if(b[e]===d[g]){f=!0;break}f||d.push(b[e])}b=[];for(e=0;e<d.length;e+=1){f=!1;for(g=0;g<c.length;g+=1)if(d[e]===c[g]){f=!0;break}f||b.push(d[e])}a.className=b.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function y(a,b){for(var c=a.className.split(/\s+/),d=0,e=c.length;d<e;d++)if(c[d]==b)return!0;return!1}
function ea(a){return a.o.location.hostname||a.a.location.hostname}function z(a,b,c){function d(){m&&e&&f&&(m(g),m=null)}b=t(a,"link",{rel:"stylesheet",href:b,media:"all"});var e=!1,f=!0,g=null,m=c||null;da?(b.onload=function(){e=!0;d()},b.onerror=function(){e=!0;g=Error("Stylesheet failed to load");d()}):setTimeout(function(){e=!0;d()},0);u(a,"head",b)}
function A(a,b,c,d){var e=a.c.getElementsByTagName("head")[0];if(e){var f=t(a,"script",{src:b}),g=!1;f.onload=f.onreadystatechange=function(){g||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(g=!0,c&&c(null),f.onload=f.onreadystatechange=null,"HEAD"==f.parentNode.tagName&&e.removeChild(f))};e.appendChild(f);setTimeout(function(){g||(g=!0,c&&c(Error("Script load timeout")))},d||5E3);return f}return null};function B(){this.a=0;this.c=null}function C(a){a.a++;return function(){a.a--;D(a)}}function E(a,b){a.c=b;D(a)}function D(a){0==a.a&&a.c&&(a.c(),a.c=null)};function F(a){this.a=a||"-"}F.prototype.c=function(a){for(var b=[],c=0;c<arguments.length;c++)b.push(arguments[c].replace(/[\W_]+/g,"").toLowerCase());return b.join(this.a)};function G(a,b){this.c=a;this.f=4;this.a="n";var c=(b||"n4").match(/^([nio])([1-9])$/i);c&&(this.a=c[1],this.f=parseInt(c[2],10))}function fa(a){return H(a)+" "+(a.f+"00")+" 300px "+I(a.c)}function I(a){var b=[];a=a.split(/,\s*/);for(var c=0;c<a.length;c++){var d=a[c].replace(/['"]/g,"");-1!=d.indexOf(" ")||/^\d/.test(d)?b.push("'"+d+"'"):b.push(d)}return b.join(",")}function J(a){return a.a+a.f}function H(a){var b="normal";"o"===a.a?b="oblique":"i"===a.a&&(b="italic");return b}
function ga(a){var b=4,c="n",d=null;a&&((d=a.match(/(normal|oblique|italic)/i))&&d[1]&&(c=d[1].substr(0,1).toLowerCase()),(d=a.match(/([1-9]00|normal|bold)/i))&&d[1]&&(/bold/i.test(d[1])?b=7:/[1-9]00/.test(d[1])&&(b=parseInt(d[1].substr(0,1),10))));return c+b};function ha(a,b){this.c=a;this.f=a.o.document.documentElement;this.h=b;this.a=new F("-");this.j=!1!==b.events;this.g=!1!==b.classes}function ia(a){a.g&&w(a.f,[a.a.c("wf","loading")]);K(a,"loading")}function L(a){if(a.g){var b=y(a.f,a.a.c("wf","active")),c=[],d=[a.a.c("wf","loading")];b||c.push(a.a.c("wf","inactive"));w(a.f,c,d)}K(a,"inactive")}function K(a,b,c){if(a.j&&a.h[b])if(c)a.h[b](c.c,J(c));else a.h[b]()};function ja(){this.c={}}function ka(a,b,c){var d=[],e;for(e in b)if(b.hasOwnProperty(e)){var f=a.c[e];f&&d.push(f(b[e],c))}return d};function M(a,b){this.c=a;this.f=b;this.a=t(this.c,"span",{"aria-hidden":"true"},this.f)}function N(a){u(a.c,"body",a.a)}function O(a){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+I(a.c)+";"+("font-style:"+H(a)+";font-weight:"+(a.f+"00")+";")};function P(a,b,c,d,e,f){this.g=a;this.j=b;this.a=d;this.c=c;this.f=e||3E3;this.h=f||void 0}P.prototype.start=function(){var a=this.c.o.document,b=this,c=q(),d=new Promise(function(d,e){function f(){q()-c>=b.f?e():a.fonts.load(fa(b.a),b.h).then(function(a){1<=a.length?d():setTimeout(f,25)},function(){e()})}f()}),e=null,f=new Promise(function(a,d){e=setTimeout(d,b.f)});Promise.race([f,d]).then(function(){e&&(clearTimeout(e),e=null);b.g(b.a)},function(){b.j(b.a)})};function Q(a,b,c,d,e,f,g){this.v=a;this.B=b;this.c=c;this.a=d;this.s=g||"BESbswy";this.f={};this.w=e||3E3;this.u=f||null;this.m=this.j=this.h=this.g=null;this.g=new M(this.c,this.s);this.h=new M(this.c,this.s);this.j=new M(this.c,this.s);this.m=new M(this.c,this.s);a=new G(this.a.c+",serif",J(this.a));a=O(a);this.g.a.style.cssText=a;a=new G(this.a.c+",sans-serif",J(this.a));a=O(a);this.h.a.style.cssText=a;a=new G("serif",J(this.a));a=O(a);this.j.a.style.cssText=a;a=new G("sans-serif",J(this.a));a=
O(a);this.m.a.style.cssText=a;N(this.g);N(this.h);N(this.j);N(this.m)}var R={D:"serif",C:"sans-serif"},S=null;function T(){if(null===S){var a=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);S=!!a&&(536>parseInt(a[1],10)||536===parseInt(a[1],10)&&11>=parseInt(a[2],10))}return S}Q.prototype.start=function(){this.f.serif=this.j.a.offsetWidth;this.f["sans-serif"]=this.m.a.offsetWidth;this.A=q();U(this)};
function la(a,b,c){for(var d in R)if(R.hasOwnProperty(d)&&b===a.f[R[d]]&&c===a.f[R[d]])return!0;return!1}function U(a){var b=a.g.a.offsetWidth,c=a.h.a.offsetWidth,d;(d=b===a.f.serif&&c===a.f["sans-serif"])||(d=T()&&la(a,b,c));d?q()-a.A>=a.w?T()&&la(a,b,c)&&(null===a.u||a.u.hasOwnProperty(a.a.c))?V(a,a.v):V(a,a.B):ma(a):V(a,a.v)}function ma(a){setTimeout(p(function(){U(this)},a),50)}function V(a,b){setTimeout(p(function(){v(this.g.a);v(this.h.a);v(this.j.a);v(this.m.a);b(this.a)},a),0)};function W(a,b,c){this.c=a;this.a=b;this.f=0;this.m=this.j=!1;this.s=c}var X=null;W.prototype.g=function(a){var b=this.a;b.g&&w(b.f,[b.a.c("wf",a.c,J(a).toString(),"active")],[b.a.c("wf",a.c,J(a).toString(),"loading"),b.a.c("wf",a.c,J(a).toString(),"inactive")]);K(b,"fontactive",a);this.m=!0;na(this)};
W.prototype.h=function(a){var b=this.a;if(b.g){var c=y(b.f,b.a.c("wf",a.c,J(a).toString(),"active")),d=[],e=[b.a.c("wf",a.c,J(a).toString(),"loading")];c||d.push(b.a.c("wf",a.c,J(a).toString(),"inactive"));w(b.f,d,e)}K(b,"fontinactive",a);na(this)};function na(a){0==--a.f&&a.j&&(a.m?(a=a.a,a.g&&w(a.f,[a.a.c("wf","active")],[a.a.c("wf","loading"),a.a.c("wf","inactive")]),K(a,"active")):L(a.a))};function oa(a){this.j=a;this.a=new ja;this.h=0;this.f=this.g=!0}oa.prototype.load=function(a){this.c=new ca(this.j,a.context||this.j);this.g=!1!==a.events;this.f=!1!==a.classes;pa(this,new ha(this.c,a),a)};
function qa(a,b,c,d,e){var f=0==--a.h;(a.f||a.g)&&setTimeout(function(){var a=e||null,m=d||null||{};if(0===c.length&&f)L(b.a);else{b.f+=c.length;f&&(b.j=f);var h,l=[];for(h=0;h<c.length;h++){var k=c[h],n=m[k.c],r=b.a,x=k;r.g&&w(r.f,[r.a.c("wf",x.c,J(x).toString(),"loading")]);K(r,"fontloading",x);r=null;if(null===X)if(window.FontFace){var x=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent),xa=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);
X=x?42<parseInt(x[1],10):xa?!1:!0}else X=!1;X?r=new P(p(b.g,b),p(b.h,b),b.c,k,b.s,n):r=new Q(p(b.g,b),p(b.h,b),b.c,k,b.s,a,n);l.push(r)}for(h=0;h<l.length;h++)l[h].start()}},0)}function pa(a,b,c){var d=[],e=c.timeout;ia(b);var d=ka(a.a,c,a.c),f=new W(a.c,b,e);a.h=d.length;b=0;for(c=d.length;b<c;b++)d[b].load(function(b,d,c){qa(a,f,b,d,c)})};function ra(a,b){this.c=a;this.a=b}
ra.prototype.load=function(a){function b(){if(f["__mti_fntLst"+d]){var c=f["__mti_fntLst"+d](),e=[],h;if(c)for(var l=0;l<c.length;l++){var k=c[l].fontfamily;void 0!=c[l].fontStyle&&void 0!=c[l].fontWeight?(h=c[l].fontStyle+c[l].fontWeight,e.push(new G(k,h))):e.push(new G(k))}a(e)}else setTimeout(function(){b()},50)}var c=this,d=c.a.projectId,e=c.a.version;if(d){var f=c.c.o;A(this.c,(c.a.api||"https://fast.fonts.net/jsapi")+"/"+d+".js"+(e?"?v="+e:""),function(e){e?a([]):(f["__MonotypeConfiguration__"+
d]=function(){return c.a},b())}).id="__MonotypeAPIScript__"+d}else a([])};function sa(a,b){this.c=a;this.a=b}sa.prototype.load=function(a){var b,c,d=this.a.urls||[],e=this.a.families||[],f=this.a.testStrings||{},g=new B;b=0;for(c=d.length;b<c;b++)z(this.c,d[b],C(g));var m=[];b=0;for(c=e.length;b<c;b++)if(d=e[b].split(":"),d[1])for(var h=d[1].split(","),l=0;l<h.length;l+=1)m.push(new G(d[0],h[l]));else m.push(new G(d[0]));E(g,function(){a(m,f)})};function ta(a,b){a?this.c=a:this.c=ua;this.a=[];this.f=[];this.g=b||""}var ua="https://fonts.googleapis.com/css";function va(a,b){for(var c=b.length,d=0;d<c;d++){var e=b[d].split(":");3==e.length&&a.f.push(e.pop());var f="";2==e.length&&""!=e[1]&&(f=":");a.a.push(e.join(f))}}
function wa(a){if(0==a.a.length)throw Error("No fonts to load!");if(-1!=a.c.indexOf("kit="))return a.c;for(var b=a.a.length,c=[],d=0;d<b;d++)c.push(a.a[d].replace(/ /g,"+"));b=a.c+"?family="+c.join("%7C");0<a.f.length&&(b+="&subset="+a.f.join(","));0<a.g.length&&(b+="&text="+encodeURIComponent(a.g));return b};function ya(a){this.f=a;this.a=[];this.c={}}
var za={latin:"BESbswy","latin-ext":"\u00e7\u00f6\u00fc\u011f\u015f",cyrillic:"\u0439\u044f\u0416",greek:"\u03b1\u03b2\u03a3",khmer:"\u1780\u1781\u1782",Hanuman:"\u1780\u1781\u1782"},Aa={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Ba={i:"i",italic:"i",n:"n",normal:"n"},
Ca=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;
function Da(a){for(var b=a.f.length,c=0;c<b;c++){var d=a.f[c].split(":"),e=d[0].replace(/\+/g," "),f=["n4"];if(2<=d.length){var g;var m=d[1];g=[];if(m)for(var m=m.split(","),h=m.length,l=0;l<h;l++){var k;k=m[l];if(k.match(/^[\w-]+$/)){var n=Ca.exec(k.toLowerCase());if(null==n)k="";else{k=n[2];k=null==k||""==k?"n":Ba[k];n=n[1];if(null==n||""==n)n="4";else var r=Aa[n],n=r?r:isNaN(n)?"4":n.substr(0,1);k=[k,n].join("")}}else k="";k&&g.push(k)}0<g.length&&(f=g);3==d.length&&(d=d[2],g=[],d=d?d.split(","):
g,0<d.length&&(d=za[d[0]])&&(a.c[e]=d))}a.c[e]||(d=za[e])&&(a.c[e]=d);for(d=0;d<f.length;d+=1)a.a.push(new G(e,f[d]))}};function Ea(a,b){this.c=a;this.a=b}var Fa={Arimo:!0,Cousine:!0,Tinos:!0};Ea.prototype.load=function(a){var b=new B,c=this.c,d=new ta(this.a.api,this.a.text),e=this.a.families;va(d,e);var f=new ya(e);Da(f);z(c,wa(d),C(b));E(b,function(){a(f.a,f.c,Fa)})};function Ga(a,b){this.c=a;this.a=b}Ga.prototype.load=function(a){var b=this.a.id,c=this.c.o;b?A(this.c,(this.a.api||"https://use.typekit.net")+"/"+b+".js",function(b){if(b)a([]);else if(c.Typekit&&c.Typekit.config&&c.Typekit.config.fn){b=c.Typekit.config.fn;for(var e=[],f=0;f<b.length;f+=2)for(var g=b[f],m=b[f+1],h=0;h<m.length;h++)e.push(new G(g,m[h]));try{c.Typekit.load({events:!1,classes:!1,async:!0})}catch(l){}a(e)}},2E3):a([])};function Ha(a,b){this.c=a;this.f=b;this.a=[]}Ha.prototype.load=function(a){var b=this.f.id,c=this.c.o,d=this;b?(c.__webfontfontdeckmodule__||(c.__webfontfontdeckmodule__={}),c.__webfontfontdeckmodule__[b]=function(b,c){for(var g=0,m=c.fonts.length;g<m;++g){var h=c.fonts[g];d.a.push(new G(h.name,ga("font-weight:"+h.weight+";font-style:"+h.style)))}a(d.a)},A(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+ea(this.c)+"/"+b+".js",function(b){b&&a([])})):a([])};var Y=new oa(window);Y.a.c.custom=function(a,b){return new sa(b,a)};Y.a.c.fontdeck=function(a,b){return new Ha(b,a)};Y.a.c.monotype=function(a,b){return new ra(b,a)};Y.a.c.typekit=function(a,b){return new Ga(b,a)};Y.a.c.google=function(a,b){return new Ea(b,a)};var Z={load:p(Y.load,Y)}; true?!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return Z}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined;}());


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./sprites/spritesheet.json": 1
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 8;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./audio/flip.mp3": 2,
	"./audio/match.mp3": 3,
	"./audio/memoryLaneTheme.mp3": 4,
	"./images/photo_back.png": 5,
	"./sprites/spritesheet.json": 1,
	"./sprites/spritesheet.png": 6
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 9;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 10;

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/Scenes/boot.js
var Boot = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function Boot ()
    {
        Phaser.Scene.call(this, { key: 'boot' });
    },

    preload: function ()
    {
        this.load.setPath('Assets');
        this.load.image('logo','FaceZapperLogo.png');
    },

    create: function ()
    {
        this.scene.start('preloader');
    }

});


// EXTERNAL MODULE: ./node_modules/webfontloader/webfontloader.js
var webfontloader = __webpack_require__(7);
var webfontloader_default = /*#__PURE__*/__webpack_require__.n(webfontloader);

// CONCATENATED MODULE: ./node_modules/phaser-webpack-loader/src/index.js


/**
 * Phaser Webpack Loader plugin for Phaser.
 */
class src_WebpackLoader extends Phaser.Plugins.ScenePlugin {
  /**
   * Setup the plugin.
   * @param  {Object} scene         Reference to scene owner.
   * @param  {Object} pluginManager Scene's plugin manager.
   */
  constructor(scene, pluginManager) {
    super(scene, pluginManager);
  }

  /**
   * Start the loader plugin.
   * @param  {Object} manifest          Your asset manifest file contents.
   * @param  {String} postfix           (optional) Postfix to append to assets.
   */
  start(manifest, postfix = '') {
    // Pull the font values out of the manifest.
    this.fonts = manifest.fonts || {};

    // Pull the asset values out of the manifest.
    this.assets = {
      images: manifest.images || [],
      sprites: manifest.sprites || [],
      audio: manifest.audio || [],
      bitmapFonts: manifest.bitmapFonts || [],
    };

    // Define the loaders for the different asset types.
    this.loaders = {
      images: this._loadImage,
      sprites: this._loadSprite,
      audio: this._loadAudio,
      bitmapFonts: this._loadBitmapFont,
    };

    // Define the postfix string to apply to image assets (ex: @2x).
    this.postfix = postfix;
  }

  /**
   * Begins loading of all assets.
   * @return {Promise} Returns when loading is complete.
   */
  load() {
    return Promise.all([
      this._loadAssets(),
      this._loadFonts(),
    ]);
  }

  /**
   * Emit load event for each file that loads.
   * @param  {Object} file Reference to file that has loaded.
   */
  _emitLoad(file) {
    this.systems.events.emit('load', file);
  }

  /**
   * Load all assets in parallel.
   * @return {Promise} Returns when assets are loaded.
   */
  _loadAssets() {
    return new Promise((resolve) => {
      // Loop through all of the asset types and begin loading.
      Object.keys(this.assets).forEach((key) => {
        // Loop through each asset of this type.
        this.assets[key].forEach((asset) => {
          const assetData = asset.split('.');
          this.loaders[key].call(this, assetData[0], assetData[1]);
        });
      });

      // Emit load event on each file.
      this.scene.load.on('load', this._emitLoad, this);

      // Once everything has loaded, resolve the promise.
      this.scene.load.once('complete', () => {
        this.scene.load.off('load', this._emitLoad);
        resolve();
      });

      // Start the loading of the assets.
      this.scene.load.start();
    });
  }

  /**
   * Loads all defined web fonts using webfontloader.
   * @return {Promise} Returns when fonts are ready to use.
   */
  _loadFonts() {
    if (Object.keys(this.fonts).length === 0) {
      return Promise.resolve();
    }

    return new Promise((resolve) => {
      webfontloader_default.a.load(Object.assign({}, this.fonts, {
        active: () => {
          this.systems.events.emit('load');
          resolve();
        },
      }));
    });
  }

  /**
   * Load an image.
   * @param  {String} name Name of the file.
   * @param  {String} ext  File extension.
   */
  _loadImage(name, ext) {
    const dir = 'images/';
    const file = __webpack_require__(0)(`./${dir}${name}${this.postfix}.${ext}`);
    this.scene.load.image(name, file);
  }

  /**
   * Load a spritesheet.
   * @param  {String} name Name of the file.
   * @param  {String} ext  File extension.
   */
  _loadSprite(name, ext) {
    const dir = 'sprites/';
    const file = __webpack_require__(0)(`./${dir}${name}${this.postfix}.${ext}`);
    const data = __webpack_require__(8)(`./${dir}${name}${this.postfix}.json`);
    this.scene.load.atlas(name, file, data);
  }

  /**
   * Load an audio file.
   * @param  {String} name Name of the file.
   * @param  {String} ext  File extension.
   */
  _loadAudio(name, ext) {
    const dir = 'audio/';
    const file = __webpack_require__(9)(`./${dir}${name}.${ext}`);
    this.scene.load.audio(name, file);
  }

  /**
   * Load a bitmap font.
   * @param  {String} name Name of the file.
   * @param  {String} ext  File extension.
   */
  _loadBitmapFont(name, ext) {
    const dir = 'fonts/';
    const file = __webpack_require__(0)(`./${dir}${name}${this.postfix}.${ext}`);
    const data = __webpack_require__(10)(`./${dir}${name}${this.postfix}.xml`);
    this.scene.load.bitmapFont(name, file, data);
  }
}

// CONCATENATED MODULE: ./AssetManifest.js
const AssetManifest = {
    sprites: [
      'spritesheet.png'
    ],
    audio: [
      'flip.mp3',
      'match.mp3',
      'memoryLaneTheme.mp3'
    ],
    images:[
      'photo_back.png'
    ]
  }

/* harmony default export */ var AssetManifest_0 = (AssetManifest);
// CONCATENATED MODULE: ./src/Scenes/preloader.js



var Preloader = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function Preloader ()
    {
        Phaser.Scene.call(this, { key: 'preloader' });
    },

    preload: function ()
    {
        this.load.scenePlugin('WebpackLoader', src_WebpackLoader, 'loader', 'loader');
        this.load.script('https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont');
    },

    create: function ()
    {
        this.loader.start(AssetManifest_0);
        this.loader.load().then(() => {
            // Done loading!
            
            var music = this.sound.add('memoryLaneTheme', { loop: true });
            music.play();

            this.scene.start('mainmenu');
        });
    }

});


// CONCATENATED MODULE: ./src/Animations/ui_animations.js
var UIAnimations = new Phaser.Class({

    //Extends: Phaser.GameObjects.Image,

    initialize:

    function UIAnimations (scene)
    {
        this.scene = scene;
    },

    moveUp: function(target, to, duration, delay){
        this.scene.tweens.add({
            targets: target,
            y: to,
            duration: duration,
            delay: delay,
            ease: 'Sine.easeOut'
        });
    },

    fadeIn: function(target){
        this.scene.tweens.add({
            targets: target,
            alpha: 1,
            duration: 750,
            ease: 'Sine.easeOut'
        });
    },

    growIn: function(target){
        this.scene.tweens.add({
            targets: target,
            scaleX: 1,
            scaleY: 1,
            duration: 750,
            ease: 'Sine.easeOut'
        });
    },

    fallDown: function(target){
        this.scene.tweens.add({
            targets: target,
            y: target.y+target.height,
            duration: 750,
            ease: 'Sine.easeOut'
        });
    },

    fadeIn2: function(target){
        this.scene.tweens.add({
            targets: target,
            alpha: 1,
            duration: 750,
            delay: 750,
            ease: 'Sine.easeOut'
        });
    },

});


// CONCATENATED MODULE: ./src/UIObjects/button.js
var Button = new Phaser.Class({

    Extends: Phaser.GameObjects.Image,

    initialize:

    function Button (scene, image, x, y)
    {
        Phaser.GameObjects.Image.call(this, scene);

        this.image = image;

        this
            .setTexture('spritesheet', image)
            .setInteractive()
            .setPosition(x, y)
            .on('pointerover', () => this.buttonHoverState(this) )
            .on('pointerout', () => this.buttonNormalState(this) );
    },

    buttonHoverState: function(button) {
        button.setTint(0x333333);
    },

    buttonNormalState: function(button) {
        button.clearTint();
    }
});


// CONCATENATED MODULE: ./src/Scenes/how_to_play.js





var HowToPlay = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function HowToPlay ()
    {
        Phaser.Scene.call(this, { key: 'howtoplay' });
        window.OVER = this;
    },

    init: function (data)
    {
        this.numOfPlayers = data.numOfPlayers;
    },

    create: function ()
    {
        var background = this.add.image(game.config.width/2, game.config.height/2,'spritesheet','background_base.png');
        background.setDisplaySize(game.config.width, game.config.height);

        var background = this.add.image(game.config.width/2, game.config.height/2,'spritesheet','screen_tutorial.png');

        var startButton = this.children.add(new Button(this, 'btn_start.png', game.config.width/2, game.config.height + 100));
        startButton.on('pointerdown', () => this.startGame() );

        var animations = new UIAnimations(this);
        animations.moveUp(startButton, game.config.height/1.15, 250, 0);
    },

    startGame: function() {
        this.scene.start('game', { numOfPlayers: this.numOfPlayers });
    }
});


// CONCATENATED MODULE: ./src/Scenes/select_players.js





var SelectPlayers = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function SelectPlayers ()
    {
        Phaser.Scene.call(this, { key: 'selectplayers' });
        window.OVER = this;
    },

    create: function ()
    {
        var globalScene = this;

        var background = this.add.image(game.config.width/2, game.config.height/2,'spritesheet','background_base.png');
        background.setDisplaySize(game.config.width, game.config.height);

        var textbar = this.add.image(game.config.width/2, 0, 'spritesheet', 'ui_textbar.png');
        textbar.y += textbar.displayHeight/2;
        this.add.text(textbar.x, textbar.y + 13, 'SELECT PLAYERS', { font: '24px Montserrat', fill: '#FFFFFF' }).setOrigin(0.5,0);

        for(var i=1; i<5; i++){
            const t = i;
            this.children.add(new Button(this, 'photo_'+ (20-i) +'.png', game.config.width/5 * i, game.config.height/2))
                .on('pointerdown', () => globalScene.startGame(t) );
        }

        var startButton = this.children.add(new Button(this, 'btn_continue.png', game.config.width/2, game.config.height + 100));
        startButton.on('pointerdown', () => this.startGame() );

        var backButton = this.children.add(new Button(this, 'btn_arrow.png', 100, 100));
        backButton.on('pointerdown', () => this.returnToMenu() );

        var animations = new UIAnimations(this);
        animations.moveUp(startButton, game.config.height/1.15, 250, 0);
    },

    startGame: function(numOfPlayers) {
        this.scene.start('howtoplay', { numOfPlayers: numOfPlayers });
    },

    returnToMenu: function() {
        this.scene.start('mainmenu');
    },
});


// CONCATENATED MODULE: ./src/Scenes/main_menu.js





var MainMenu = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function MainMenu ()
    {
        Phaser.Scene.call(this, { key: 'mainmenu' });
        window.OVER = this;
    },

    create: function ()
    {
        var background = this.add.image(game.config.width/2, game.config.height/2,'spritesheet','background_base.png');
        background.setDisplaySize(game.config.width, game.config.height);

        var logo = this.add.image(game.config.width/4, game.config.height/2.5,'spritesheet','title.png');
        logo.setAlpha(0);

        var startButton = this.children.add(new Button(this, 'btn_start.png', game.config.width/1.4, game.config.height + 100));
        startButton.on('pointerdown', () => this.startGame() );

        var highScoresButton = this.children.add(new Button(this, 'btn_high_scores.png', game.config.width/1.4, game.config.height + 100));
        highScoresButton.on('pointerdown', () => this.highScores() );

        var moreGamesButton = this.children.add(new Button(this, 'btn_more_games.png', game.config.width/1.4, game.config.height + 100));
        moreGamesButton.on('pointerdown', () => this.moreGames() );

        var animations = new UIAnimations(this);
        animations.fadeIn(logo);      
        animations.moveUp(startButton, game.config.height/4.9, 250, 0);
        animations.moveUp(highScoresButton, game.config.height/2.5, 250, 250);
        animations.moveUp(moreGamesButton,game.config.height/1.7, 250, 500);

        var highScore = localStorage.getItem("memorygame_highscore");
        if (!(highScore === null)){
            var highScoreLabel = this.add.text(game.config.width/1.5, game.config.height/1.1, 'High Score', { font: '32px Montserrat', fill: '#00ff33' });
            highScoreLabel.setOrigin(0.5);
            highScoreLabel.setAlpha(0);   
            animations.fadeIn2(highScoreLabel);

            var highScoreText = this.add.text(highScoreLabel.x + 150, highScoreLabel.y, highScore, { font: '32px Montserrat', fill: '#FFFFFF' });
            highScoreText.setOrigin(0.5);
            highScoreText.setAlpha(0);   
            animations.fadeIn2(highScoreText);
        }  

        var websiteText = this.add.text(game.config.width/4, game.config.height/1.1, 'www.planetboop.com', { font: '20px Courier', fill: '#FFFFFF' });
        websiteText.setOrigin(0.5);
        websiteText.setAlpha(0);
        animations.fadeIn2(websiteText);
    },

    startGame: function() {
        this.scene.start('selectplayers');
    },

    highScores: function() {
        this.scene.start('highscores');
    },

    moreGames: function() {
        window.open("http://planetboop.com",  "_blank")
    },

    
});


// CONCATENATED MODULE: ./src/Scenes/game.js


var Game = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function Game ()
    {
        Phaser.Scene.call(this, { key: 'game' });
        window.GAME = this;

        this.numOfCards = 30;
        this.cardsGrid;

        this.playerBoops;
        this.playerScores;
        this.currentPlayer;

        this.timerText;
        this.timedEvent;
        this.timeElapsedInSeconds;

        this.totalSelected;

        this.locked = false;

        this.sfxFlip;
        this.sfxMatch;
    },

    init: function (data)
    {
        this.numPlayers = data.numOfPlayers;
    },

    create: function ()
    {
        // Re-initialize variables in case of game restart
        this.cardsGrid = [];
        this.playerBoops = [];
        this.playerScores = [];
        this.currentPlayer = 0;
        this.timerText;
        this.timedEvent;
        this.timeElapsedInSeconds = 0;
        this.totalSelected = 0;
        this.locked = false;

        var globalScene = this;
        var currentChosen = null;

        this.sfxFlip = this.sound.add('flip');
        this.sfxMatch = this.sound.add('match');

        var background = this.add.image(game.config.width/2, game.config.height/2,'spritesheet','background_base.png');
        background.setDisplaySize(game.config.width, game.config.height);

        var timer = this.add.image(game.config.width/2, 0, 'spritesheet', 'ui_timer.png');
        timer.y += timer.displayHeight/2;
        this.timerText = this.add.text(timer.x - 2, timer.y - 2, '0:00', { font: '24px Montserrat', fill: '#FFFFFF' });
        this.timerText.setOrigin(0.5,0);
        this.timedEvent = this.time.addEvent({ delay: 1000, callback: function(){ this.timeElapsedInSeconds++ }, callbackScope: this, loop: true });

        // Bottom scores
        for (var i = 0; i < this.numPlayers; i++){
            var boopSpacing = game.config.width/(this.numPlayers+1);

            var imageName = (i==0) ? 'player_highlight_' + (i+1) + '.png' : 'player_' + (i+1) + '.png';
            var scoreBoop = this.add.image((boopSpacing * (i+1)), game.config.height - 75, 'spritesheet', imageName);
            this.playerBoops.push(scoreBoop);

            var scoreText = this.add.text(scoreBoop.x + 50, scoreBoop.y, 0, { font: '32px Montserrat', fill: '#FFFFFF' });
            this.playerScores.push(scoreText);
        }

        // Load card images
        var availableImages = [];
        for (var i = 1; i <= this.numOfCards/2; i++) {
            var num = ('0' + i).slice(-2)
            availableImages.push('photo_' + num + '.png');
        }

        var cardGridConfig = {
            width: 8,
            height: 4,
            cellWidth: 95,
            cellHeight: 95,
            position: Phaser.Display.Align.CENTER,
            x: 150,
            y: 150
        };

        // Create and draw grid with card backs
        var placeholderGroup = this.make.group({
            classType: Phaser.GameObjects.Image,
            key: 'photo_back',
            frameQuantity: this.numOfCards,
            setScale: {
                x:1,
                y:1
            },
            gridAlign: cardGridConfig
        });

        // Create and draw grid with card fronts
        var itemsGroup = this.make.group({
            classType: Phaser.GameObjects.Image,
            key: 'spritesheet',
            frame: availableImages,
            randomFrame: true,
            frameQuantity: 2,
            max: this.numOfCards,
            setScale: {
                x:0,
                y:1
            },
            gridAlign: cardGridConfig
        });

        var placeholderGroupChildren = placeholderGroup.getChildren();
        var itemsChildren = itemsGroup.getChildren();

        // Match card back to front, and assign index
        placeholderGroup.children.iterate(function (item, index) {
            item.id = ~~(index/2); //'~~' removes decimal
            item.referenceItem = itemsChildren[index];
        });

       // Shuffle cards, both back and front together
        placeholderGroup.children.iterate(function (item, index) {
            
            var randPos = Phaser.Math.Between(0, placeholderGroupChildren.length-1);
            var switchedItem = placeholderGroupChildren[randPos];

            var newX = switchedItem.x;
            var newY = switchedItem.y;
            switchedItem.setPosition(item.x, item.y);
            switchedItem.referenceItem.setPosition(item.x, item.y);
            item.setPosition(newX,newY);
            item.referenceItem.setPosition(newX,newY);
        });

        // On card hover
        this.input.setHitArea(placeholderGroup.getChildren()).on('gameobjectover', function(pointer, gameObject) {
            gameObject.setTint(0x333333);
        });

        // On card hover exit
        this.input.setHitArea(placeholderGroup.getChildren()).on('gameobjectout', function(pointer, gameObject) {
            gameObject.clearTint();
        });

        // On card click
        this.input.setHitArea(placeholderGroup.getChildren()).on('gameobjectdown', function(pointer, gameObject) {
            
            if (globalScene.locked) return;
            
            globalScene.sfxFlip.play();

            globalScene.revealCard(gameObject, checkForMatch);

            function checkForMatch(){
                if (currentChosen === null)
                {
                    currentChosen = gameObject;
                } 
                else 
                {
                    globalScene.locked = true;

                    // Match
                    if (currentChosen.id == gameObject.id) {
                        currentChosen.setVisible(false);
                        gameObject.setVisible(false);
                        globalScene.increaseScore();
                        globalScene.locked = false;

                        globalScene.sfxMatch.play();
                    }
                    // No match
                    else{
                        globalScene.hideCards(gameObject, currentChosen, onCompleteHandler);
                    }

                    function onCompleteHandler(tween, targets){
                        if (globalScene.numPlayers > 1) globalScene.nextPlayer();
                        globalScene.locked = false;
                    }

                    currentChosen = null;
                }
            }
        });
    },

    revealCard: function(card, onCompleteFunction){

        this.tweens.add({
            targets: card,
            scaleX: 0,
            duration: 250,
            ease: 'Sine.easeOut'
        });

        this.tweens.add({
            targets: card.referenceItem,
            scaleX: 1,
            duration: 250,
            ease: 'Sine.easeOut',
            delay: 250,
            onComplete: onCompleteFunction
        });
    },

    hideCards: function(card1, card2, onCompleteFunction){

        this.tweens.add({
            targets: [card1.referenceItem, card2.referenceItem],
            scaleX: 0,
            duration: 250,
            ease: 'Sine.easeOut',
            delay: 1000
        });

        this.tweens.add({
            targets: [card1, card2],
            scaleX: 1,
            duration: 250,
            ease: 'Sine.easeOut',
            delay: 1250,
            onComplete: onCompleteFunction
        });
    },

    nextPlayer: function(){
        this.playerBoops[this.currentPlayer].setTexture('spritesheet', 'player_' + (this.currentPlayer+1) + '.png');

        this.currentPlayer = (this.currentPlayer==this.numPlayers-1) ? 0 : this.currentPlayer+1;

        this.playerBoops[this.currentPlayer].setTexture('spritesheet', 'player_highlight_' + (this.currentPlayer+1) + '.png');
    },

    increaseScore: function(){
        var playerScoreText = this.playerScores[this.currentPlayer];
        var newScore = parseInt(playerScoreText._text);
        playerScoreText.setText(++newScore);

        if (++this.totalSelected == this.numOfCards/2) {
            var scores = []
            this.playerScores.forEach(function(playerScore){
                scores.push(parseInt(playerScore._text))
            });

            var highestScore = Math.max(...scores); // '...' is a spread operator
            var winner = scores.indexOf(highestScore) + 1;
            this.scene.start('gameover', { winner: winner, score: highestScore });
        }
    },

    update: function (time, delta)
    {
        var seconds = ('0' + this.timeElapsedInSeconds%60).slice(-2)
        var minutes = ('0' + ~~(this.timeElapsedInSeconds/60)).slice(-2)
        this.timerText.setText(minutes + ":" + seconds)
    }
});


// CONCATENATED MODULE: ./src/Scenes/game_over.js





var GameOver = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function GameOver ()
    {
        Phaser.Scene.call(this, { key: 'gameover' });
        window.OVER = this;
    },

    init: function (data)
    {
        this.score = data.score;
        this.winner = data.winner;
    },

    create: function ()
    {
        var background = this.add.image(game.config.width/2, game.config.height/2,'spritesheet','background_base.png');
        background.setDisplaySize(game.config.width, game.config.height);

        var board = this.add.image(game.config.width/2, game.config.height/2.5, 'spritesheet','ui_game_win.png');

        var scoreText = this.add.text(game.config.width/2, board.y - 100, 'Your score: ' + this.score, { font: '32px Courier', fill: '#00ff00' });
        scoreText.setOrigin(0.5);
        scoreText.setAlpha(0);    

        var boop = this.add.sprite(game.config.width/2, game.config.height/1.9, 'spritesheet','player_' + this.winner + '_win.png');
        boop.setAlpha(0);    

        var restartButton = this.children.add(new Button(this, 'btn_replay.png', game.config.width/2.4, game.config.height + 100));
        restartButton.on('pointerdown', () => this.startGame() );

        var menuButton = this.children.add(new Button(this, 'btn_menu.png', game.config.width/1.7, game.config.height + 100));
        menuButton.on('pointerdown', () => this.openMenu() );

        board.setScale(0,0);

        var animations = new UIAnimations(this);
        animations.growIn(board);
        animations.fadeIn2(boop);
        animations.fadeIn2(scoreText);
        animations.moveUp(restartButton, game.config.height/1.425, 500, 750);
        animations.moveUp(menuButton, game.config.height/1.425, 500, 900);

        var highScore = localStorage.getItem("memorygame_highscore");
        if (highScore === null || this.score > highScore){
            localStorage.setItem("memorygame_highscore", this.score);
        }        
    },

    startGame: function() {
        this.scene.start('game');
    },

    openMenu: function() {
        this.scene.start('mainmenu');
    }

});


// CONCATENATED MODULE: ./src/memory_game.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "game", function() { return game; });








var game;

function resize() {
    var canvas = document.querySelector("canvas");
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    var windowRatio = windowWidth / windowHeight;
    var gameRatio = game.config.width / game.config.height;

    if(windowRatio < gameRatio){
        canvas.style.width = windowWidth + "px";
        canvas.style.height = (windowWidth / gameRatio) + "px";
    }
    else {
        canvas.style.width = (windowHeight * gameRatio) + "px";
        canvas.style.height = windowHeight + "px";
    }
}

window.onload = function() {
    var config = {
        type: Phaser.AUTO,
        width: 950,
        height: 650,
        physics: {
            default: 'arcade',
        },
        scene: [ Boot, Preloader, MainMenu, SelectPlayers, HowToPlay, Game, GameOver ]
    };
    game = new Phaser.Game(config);
    resize();
    window.addEventListener("resize", resize, false);
}



/***/ })
/******/ ]);