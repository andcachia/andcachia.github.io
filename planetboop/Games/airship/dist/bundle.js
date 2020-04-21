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
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./asset names.jpeg": 4,
	"./audio/airLoop.mp3": 5,
	"./audio/explosion.mp3": 6,
	"./audio/jetLoop.mp3": 7,
	"./audio/redDefenderTheme.mp3": 8,
	"./sprites/spritesheet1.json": 1,
	"./sprites/spritesheet1.png": 9,
	"./sprites/spritesheet2.json": 2,
	"./sprites/spritesheet2.png": 10,
	"./sprites/spritesheet3.json": 3,
	"./sprites/spritesheet3.png": 11
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

module.exports = JSON.parse("{\"textures\":[{\"image\":\"spritesheet1.png\",\"format\":\"RGBA8888\",\"size\":{\"w\":1957,\"h\":2046},\"scale\":1,\"frames\":[{\"filename\":\"background_base.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":647,\"h\":1926},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":647,\"h\":1926},\"frame\":{\"x\":1,\"y\":1,\"w\":647,\"h\":1926}},{\"filename\":\"enemy_rock_02.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":134,\"h\":116},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":134,\"h\":116},\"frame\":{\"x\":1,\"y\":1929,\"w\":134,\"h\":116}},{\"filename\":\"btn_submit.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":375,\"h\":110},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":375,\"h\":110},\"frame\":{\"x\":137,\"y\":1929,\"w\":375,\"h\":110}},{\"filename\":\"btn_left.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":141,\"h\":110},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":141,\"h\":110},\"frame\":{\"x\":514,\"y\":1929,\"w\":141,\"h\":110}},{\"filename\":\"background_dark_shade.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":647,\"h\":1926},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":647,\"h\":1904},\"frame\":{\"x\":650,\"y\":1,\"w\":647,\"h\":1904}},{\"filename\":\"screen_tutorial.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":657,\"h\":971},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":657,\"h\":971},\"frame\":{\"x\":1299,\"y\":1,\"w\":657,\"h\":971}},{\"filename\":\"ui_level_bar_fill.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":209,\"h\":11},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":209,\"h\":11},\"frame\":{\"x\":650,\"y\":1907,\"w\":209,\"h\":11}},{\"filename\":\"btn_high_scores.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":375,\"h\":109},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":375,\"h\":109},\"frame\":{\"x\":657,\"y\":1920,\"w\":375,\"h\":109}},{\"filename\":\"background_seperator.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":641,\"h\":960},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":641,\"h\":960},\"frame\":{\"x\":1299,\"y\":974,\"w\":641,\"h\":960}},{\"filename\":\"btn_menu.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":142,\"h\":109},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":142,\"h\":109},\"frame\":{\"x\":1034,\"y\":1936,\"w\":142,\"h\":109}},{\"filename\":\"btn_ship.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":111,\"h\":109},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":111,\"h\":109},\"frame\":{\"x\":1178,\"y\":1936,\"w\":111,\"h\":109}},{\"filename\":\"btn_select.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":378,\"h\":108},\"spriteSourceSize\":{\"x\":1,\"y\":0,\"w\":376,\"h\":108},\"frame\":{\"x\":1291,\"y\":1936,\"w\":376,\"h\":108}},{\"filename\":\"enemy_rock_01.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":113,\"h\":98},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":113,\"h\":98},\"frame\":{\"x\":1669,\"y\":1936,\"w\":113,\"h\":98}},{\"filename\":\"enemy_propeller.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":152,\"h\":58},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":152,\"h\":58},\"frame\":{\"x\":1784,\"y\":1936,\"w\":152,\"h\":58}}]}],\"meta\":{\"app\":\"https://www.codeandweb.com/texturepacker\",\"version\":\"3.0\",\"smartupdate\":\"$TexturePacker:SmartUpdate:4d307d2c82d5d507a40e1eb2458a2d04:79f556e0e9653f930b28d7a971599f97:cdb8b46a54da9e6fede4de772f5f3ed6$\"}}");

/***/ }),
/* 2 */
/***/ (function(module) {

module.exports = JSON.parse("{\"textures\":[{\"image\":\"spritesheet2.png\",\"format\":\"RGBA8888\",\"size\":{\"w\":1960,\"h\":2035},\"scale\":1,\"frames\":[{\"filename\":\"background_medium_shade.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":647,\"h\":1926},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":647,\"h\":1904},\"frame\":{\"x\":1,\"y\":1,\"w\":647,\"h\":1904}},{\"filename\":\"background_static.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":641,\"h\":960},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":641,\"h\":960},\"frame\":{\"x\":650,\"y\":1,\"w\":641,\"h\":960}},{\"filename\":\"title.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":666,\"h\":641},\"spriteSourceSize\":{\"x\":0,\"y\":45,\"w\":666,\"h\":531},\"frame\":{\"x\":650,\"y\":963,\"w\":666,\"h\":531}},{\"filename\":\"background_title.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":641,\"h\":960},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":641,\"h\":960},\"frame\":{\"x\":1293,\"y\":1,\"w\":641,\"h\":960}},{\"filename\":\"screen_highscore.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":641,\"h\":960},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":641,\"h\":960},\"frame\":{\"x\":1318,\"y\":963,\"w\":641,\"h\":960}},{\"filename\":\"explosion_ani_04.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":541,\"h\":490},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":539,\"h\":490},\"frame\":{\"x\":650,\"y\":1496,\"w\":539,\"h\":490}},{\"filename\":\"btn_more_games.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":375,\"h\":109},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":375,\"h\":109},\"frame\":{\"x\":1,\"y\":1907,\"w\":375,\"h\":109}},{\"filename\":\"btn_right.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":141,\"h\":110},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":141,\"h\":110},\"frame\":{\"x\":378,\"y\":1907,\"w\":141,\"h\":110}},{\"filename\":\"btn_back.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":110,\"h\":109},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":110,\"h\":109},\"frame\":{\"x\":521,\"y\":1907,\"w\":110,\"h\":109}},{\"filename\":\"enemy_rocket.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":54,\"h\":168},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":54,\"h\":168},\"frame\":{\"x\":1191,\"y\":1496,\"w\":54,\"h\":168}},{\"filename\":\"enemy_spanner.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":53,\"h\":155},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":53,\"h\":155},\"frame\":{\"x\":1191,\"y\":1666,\"w\":53,\"h\":155}},{\"filename\":\"lock.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":96,\"h\":130},\"spriteSourceSize\":{\"x\":0,\"y\":1,\"w\":96,\"h\":129},\"frame\":{\"x\":1191,\"y\":1823,\"w\":96,\"h\":129}},{\"filename\":\"btn_start.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":375,\"h\":109},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":375,\"h\":109},\"frame\":{\"x\":1289,\"y\":1925,\"w\":375,\"h\":109}},{\"filename\":\"btn_replay.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":141,\"h\":109},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":141,\"h\":109},\"frame\":{\"x\":1666,\"y\":1925,\"w\":141,\"h\":109}},{\"filename\":\"paddle.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":90,\"h\":95},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":90,\"h\":95},\"frame\":{\"x\":1809,\"y\":1925,\"w\":90,\"h\":95}}]}],\"meta\":{\"app\":\"https://www.codeandweb.com/texturepacker\",\"version\":\"3.0\",\"smartupdate\":\"$TexturePacker:SmartUpdate:4d307d2c82d5d507a40e1eb2458a2d04:79f556e0e9653f930b28d7a971599f97:cdb8b46a54da9e6fede4de772f5f3ed6$\"}}");

/***/ }),
/* 3 */
/***/ (function(module) {

module.exports = JSON.parse("{\"textures\":[{\"image\":\"spritesheet3.png\",\"format\":\"RGBA8888\",\"size\":{\"w\":2030,\"h\":1992},\"scale\":1,\"frames\":[{\"filename\":\"background_clouds_purple.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":641,\"h\":925},\"spriteSourceSize\":{\"x\":0,\"y\":22,\"w\":641,\"h\":811},\"frame\":{\"x\":1,\"y\":1,\"w\":641,\"h\":811}},{\"filename\":\"background_clouds_blue.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":641,\"h\":913},\"spriteSourceSize\":{\"x\":0,\"y\":9,\"w\":641,\"h\":800},\"frame\":{\"x\":1,\"y\":814,\"w\":641,\"h\":800}},{\"filename\":\"base_ground.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":641,\"h\":302},\"spriteSourceSize\":{\"x\":0,\"y\":38,\"w\":641,\"h\":264},\"frame\":{\"x\":1,\"y\":1616,\"w\":641,\"h\":264}},{\"filename\":\"btn_launch.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":374,\"h\":109},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":374,\"h\":109},\"frame\":{\"x\":1,\"y\":1882,\"w\":374,\"h\":109}},{\"filename\":\"background_shop_seperator.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":583,\"h\":658},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":583,\"h\":658},\"frame\":{\"x\":644,\"y\":1,\"w\":583,\"h\":658}},{\"filename\":\"enemy_planet_01.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":608,\"h\":607},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":608,\"h\":607},\"frame\":{\"x\":1229,\"y\":1,\"w\":608,\"h\":607}},{\"filename\":\"hero_01.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":181,\"h\":392},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":181,\"h\":391},\"frame\":{\"x\":1839,\"y\":1,\"w\":181,\"h\":391}},{\"filename\":\"hero_04.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":155,\"h\":243},\"spriteSourceSize\":{\"x\":0,\"y\":3,\"w\":155,\"h\":240},\"frame\":{\"x\":1839,\"y\":394,\"w\":155,\"h\":240}},{\"filename\":\"ui_game_over.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":494,\"h\":619},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":494,\"h\":619},\"frame\":{\"x\":1229,\"y\":610,\"w\":494,\"h\":619}},{\"filename\":\"explosion_ani_06.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":283,\"h\":281},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":283,\"h\":281},\"frame\":{\"x\":1725,\"y\":636,\"w\":283,\"h\":281}},{\"filename\":\"enemy_rock_04.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":304,\"h\":259},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":304,\"h\":259},\"frame\":{\"x\":1725,\"y\":919,\"w\":304,\"h\":259}},{\"filename\":\"explosion_ani_05.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":289,\"h\":271},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":289,\"h\":271},\"frame\":{\"x\":1725,\"y\":1180,\"w\":289,\"h\":271}},{\"filename\":\"enemy_planet_02.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":451,\"h\":451},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":451,\"h\":451},\"frame\":{\"x\":644,\"y\":1453,\"w\":451,\"h\":451}},{\"filename\":\"notification.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":640,\"h\":196},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":640,\"h\":196},\"frame\":{\"x\":644,\"y\":1231,\"w\":640,\"h\":196}},{\"filename\":\"explosion_ani_03.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":418,\"h\":385},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":418,\"h\":385},\"frame\":{\"x\":644,\"y\":661,\"w\":418,\"h\":385}},{\"filename\":\"hero_03.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":163,\"h\":204},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":163,\"h\":204},\"frame\":{\"x\":1064,\"y\":661,\"w\":163,\"h\":204}},{\"filename\":\"hero_01_die.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":158,\"h\":159},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":158,\"h\":159},\"frame\":{\"x\":1064,\"y\":867,\"w\":158,\"h\":159}},{\"filename\":\"enemy_moon03.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":166,\"h\":142},\"spriteSourceSize\":{\"x\":24,\"y\":0,\"w\":142,\"h\":142},\"frame\":{\"x\":1064,\"y\":1028,\"w\":142,\"h\":142}},{\"filename\":\"explosion_ani_02.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":239,\"h\":181},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":239,\"h\":181},\"frame\":{\"x\":644,\"y\":1048,\"w\":239,\"h\":181}},{\"filename\":\"explosion_ani_01.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":170,\"h\":173},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":170,\"h\":173},\"frame\":{\"x\":885,\"y\":1048,\"w\":170,\"h\":173}},{\"filename\":\"enemy_moon_01.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":315,\"h\":316},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":315,\"h\":316},\"frame\":{\"x\":1286,\"y\":1231,\"w\":315,\"h\":316}},{\"filename\":\"hero_02.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":184,\"h\":160},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":184,\"h\":160},\"frame\":{\"x\":1097,\"y\":1429,\"w\":184,\"h\":160}},{\"filename\":\"ui_ship_shop.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":335,\"h\":200},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":335,\"h\":200},\"frame\":{\"x\":1603,\"y\":1453,\"w\":335,\"h\":200}},{\"filename\":\"enemy_satelite.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":248,\"h\":249},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":248,\"h\":249},\"frame\":{\"x\":1283,\"y\":1549,\"w\":248,\"h\":249}},{\"filename\":\"enemy_rock_03.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":182,\"h\":156},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":182,\"h\":156},\"frame\":{\"x\":1097,\"y\":1591,\"w\":182,\"h\":156}},{\"filename\":\"enemy_moon_02.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":210,\"h\":197},\"spriteSourceSize\":{\"x\":13,\"y\":0,\"w\":197,\"h\":197},\"frame\":{\"x\":1533,\"y\":1655,\"w\":197,\"h\":197}},{\"filename\":\"ui_score.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":254,\"h\":143},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":254,\"h\":143},\"frame\":{\"x\":1097,\"y\":1800,\"w\":254,\"h\":143}},{\"filename\":\"enemy_planet_03.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":188,\"h\":191},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":188,\"h\":191},\"frame\":{\"x\":1732,\"y\":1655,\"w\":188,\"h\":191}},{\"filename\":\"ui_level_bar.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":253,\"h\":141},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":253,\"h\":141},\"frame\":{\"x\":1732,\"y\":1848,\"w\":253,\"h\":141}}]}],\"meta\":{\"app\":\"https://www.codeandweb.com/texturepacker\",\"version\":\"3.0\",\"smartupdate\":\"$TexturePacker:SmartUpdate:4d307d2c82d5d507a40e1eb2458a2d04:79f556e0e9653f930b28d7a971599f97:cdb8b46a54da9e6fede4de772f5f3ed6$\"}}");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "479a8eea6494253e9a1eea275d9de7c1.mp3";

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "231635bde979deae0442406ce16812f6.mp3";

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1be3c6c36764c8293eec7c4bc1005a9d.mp3";

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "87ed5b8d7c6c289b1fcd1b08865aba9e.mp3";

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "e55fb1e882b2693959c21f51ac8ce0d1.png";

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "5f7ee9e6c02afbc7d12ca5cca8c99525.png";

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "64ad168bcd9c476d5e927f4f1a2166fe.png";

/***/ }),
/* 12 */
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./sprites/spritesheet1.json": 1,
	"./sprites/spritesheet2.json": 2,
	"./sprites/spritesheet3.json": 3
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
webpackContext.id = 13;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./asset names.jpeg": 4,
	"./audio/airLoop.mp3": 5,
	"./audio/explosion.mp3": 6,
	"./audio/jetLoop.mp3": 7,
	"./audio/redDefenderTheme.mp3": 8,
	"./sprites/spritesheet1.json": 1,
	"./sprites/spritesheet1.png": 9,
	"./sprites/spritesheet2.json": 2,
	"./sprites/spritesheet2.png": 10,
	"./sprites/spritesheet3.json": 3,
	"./sprites/spritesheet3.png": 11
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
webpackContext.id = 14;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 15;

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var scoreHandler_namespaceObject = {};
__webpack_require__.r(scoreHandler_namespaceObject);
__webpack_require__.d(scoreHandler_namespaceObject, "getHighScore", function() { return getHighScore; });
__webpack_require__.d(scoreHandler_namespaceObject, "checkHighScore", function() { return checkHighScore; });

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
var webfontloader = __webpack_require__(12);
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
    const data = __webpack_require__(13)(`./${dir}${name}${this.postfix}.json`);
    this.scene.load.atlas(name, file, data);
  }

  /**
   * Load an audio file.
   * @param  {String} name Name of the file.
   * @param  {String} ext  File extension.
   */
  _loadAudio(name, ext) {
    const dir = 'audio/';
    const file = __webpack_require__(14)(`./${dir}${name}.${ext}`);
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
    const data = __webpack_require__(15)(`./${dir}${name}${this.postfix}.xml`);
    this.scene.load.bitmapFont(name, file, data);
  }
}

// CONCATENATED MODULE: ./AssetManifest.js
const AssetManifest = {
    sprites: [
      'spritesheet1.png',
      'spritesheet2.png',
      'spritesheet3.png'
    ],
    audio: [
      'airLoop.mp3',
      'explosion.mp3',
      'jetLoop.mp3',
      'redDefenderTheme.mp3'
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
        this.add.image(game.config.width/2, game.config.height/5, 'logo');

        this.add.text(game.config.width/2, game.config.height/2, "Loading...")
            .setOrigin(0.5);

        var progress = this.add.graphics();
        this.load.on('progress', function (value) {

            progress.clear();
            progress.fillStyle(0xffffff, 1);
            progress.fillRect(0, game.config.height/1.7, 800 * value, 60);
    
        });
        this.load.on('complete', function () {

            progress.destroy();
    
        });
        
        this.load.scenePlugin('WebpackLoader', src_WebpackLoader, 'loader', 'loader');
        this.load.script('https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont');
    },

    create: function ()
    {
        this.loader.start(AssetManifest_0);
        this.loader.load().then(() => {
            // Done loading!

            var music = this.sound.add('redDefenderTheme', { loop: true });
            music.play();
            
            frames = this.anims.generateFrameNames('spritesheet3', { prefix: 'explosion_ani_', suffix: '.png', start: 1, end: 6, zeroPad: 2 });
            this.anims.create({ key: 'Explosion', frames: this.anims.generateFrameNames('spritesheet3', { prefix: 'explosion_ani_', suffix: '.png', start: 1, end: 6, zeroPad: 2 }), hideOnComplete: true });

            WebFont.load({
                active: () => this.loaded = true,
                google: {
                  families: ['Montserrat:700'],
                }
              });

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

    function Button (scene, spritesheetName, imageName, x, y)
    {
        Phaser.GameObjects.Image.call(this, scene);

        this.image = imageName;

        this
            .setTexture(spritesheetName, imageName)
            .setInteractive()
            .setPosition(x, y)
            .on('pointerover', () => this.buttonHoverState(this) )
            .on('pointerout', () => this.buttonNormalState(this) );
    },

    buttonHoverState: function(button) {
        button.setTint(0xff0000);
    },

    buttonNormalState: function(button) {
        button.clearTint();
    }

    // changeButtonImage: function(button, image) {
    //     button.setTexture('spritesheet');
    //     this.image = image;
    //     this.hoverImage = hoverImage;
    // },

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

    create: function ()
    {
        var background = this.add.image(game.config.width/2, game.config.height/2, 'spritesheet2', 'background_static.png');
        background.setDisplaySize(game.config.width, game.config.height);
        
        this.add.image(game.config.width/2, game.config.height, 'spritesheet3', 'base_ground.png').setOrigin(0.5,1);
        this.add.image(game.config.width/2, game.config.height/1.4, 'spritesheet3', 'hero_01.png');
        this.add.image(game.config.width/2, game.config.height/2,'spritesheet1','screen_tutorial.png');

        var startButton = this.children.add(new Button(this, 'spritesheet3', 'btn_launch.png', game.config.width/2, game.config.height + 100));
        startButton.on('pointerdown', () => this.startGame() );

        var animations = new UIAnimations(this);
        animations.moveUp(startButton, game.config.height/1.15, 250, 0);
    },

    startGame: function() {
        this.scene.start('game');
    }
});


// CONCATENATED MODULE: ./node_modules/@nightowlstudios/planetboop-common-modules/modules/scoreHandler.js
function getHighScore(gameName) {
    if (gameName === null){
        console.error("Game name not set");
        return;
    }

    var highScore = localStorage.getItem("highscore_" + gameName);
    return highScore;
}

function checkHighScore(gameName, score) {
    var highScore = getHighScore(gameName);

    if (highScore === null || score > highScore){
        localStorage.setItem("highscore_" + gameName, score);
    }       
}


// CONCATENATED MODULE: ./node_modules/@nightowlstudios/planetboop-common-modules/index.js



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
        var background = this.add.image(game.config.width/2, game.config.height/2,'spritesheet2','background_title.png');
        background.setDisplaySize(game.config.width, game.config.height);

        this.add.image(game.config.width/2, game.config.height/1.4,'spritesheet3','hero_01.png');

        var startButton = this.children.add(new Button(this, 'spritesheet2', 'btn_start.png', game.config.width/2, game.config.height + 100));
        startButton.on('pointerdown', () => this.startGame() );

        var highScoresButton = this.children.add(new Button(this, 'spritesheet1', 'btn_high_scores.png', game.config.width/2, game.config.height + 100));
        highScoresButton.on('pointerdown', () => this.highScores() );

        var moreGamesButton = this.children.add(new Button(this, 'spritesheet2', 'btn_more_games.png', game.config.width/2, game.config.height + 100));
        moreGamesButton.on('pointerdown', () => this.moreGames() );

        this.add.text(game.config.width/2, game.config.height - 40, "www.planetboop.com").setOrigin(0.5);

        var animations = new UIAnimations(this);
        animations.moveUp(startButton, game.config.height/2.8 - 40, 250, 0);
        animations.moveUp(highScoresButton, game.config.height/2 - 50, 250, 250);
        animations.moveUp(moreGamesButton,game.config.height/1.55 - 60, 250, 500);

        var highScore = scoreHandler_namespaceObject.getHighScore(gameName);
        if (!(highScore === null)){
            var highScoreLabel = this.add.text(game.config.width/2, game.config.height/1.15 - 175, 'High Score', { fontFamily: "Montserrat", fontSize: 40, color: "#FFFFFF" });
            highScoreLabel.setOrigin(0.5);
            highScoreLabel.setAlpha(0);   
            highScoreLabel.setStroke('#000000', 8);
            animations.fadeIn2(highScoreLabel);

            var highScoreText = this.add.text(game.config.width/2, game.config.height/1.1 - 165, highScore, { fontFamily: "Montserrat", fontSize: 40, color: "#FFFFFF" });
            highScoreText.setOrigin(0.5);
            highScoreText.setAlpha(0);   
            highScoreText.setStroke('#000000', 8);
            animations.fadeIn2(highScoreText);
        }  
    },

    startGame: function() {
        this.scene.start('howtoplay');
    },

    highScores: function() {
        this.scene.start('highscores');
    },

    moreGames: function() {
        window.open("http://planetboop.com",  "_blank")
    },

    
});


// CONCATENATED MODULE: ./src/Scenes/game.js


var globalScene;
var background1;
var background2;
var backgroundClouds1;
var backgroundClouds2;

var Game = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function Game ()
    {
        Phaser.Scene.call(this, { key: 'game' });
        window.GAME = this;

        this.score;
        this.scoreText;
        this.targets;
        this.previousElapsedTime;

        this.backgroundSequence = ['background_medium_shade', 'background_medium_shade', 'background_dark_shade', 'background_dark_shade'];
        this.sequenceNumber;

        this.scrollingSpeed;

        this.sfxAir;
        this.sfxJet;
        this.sfxExplosion;

        globalScene = this;
    },

    create: function ()
    {
        this.score = 0;
        this.sequenceNumber = 0;
        this.scrollingSpeed = 3;
        this.previousElapsedTime = 0;

        this.sfxAir = this.sound.add('airLoop', { loop: true });
        this.sfxJet = this.sound.add('jetLoop', { loop: true });
        this.sfxExplosion = this.sound.add('explosion');

        this.sfxAir.play();
        this.sfxJet.play();

        background1 = this.add.image(game.config.width/2, game.config.height, 'spritesheet1', 'background_base.png').setOrigin(0.5,1);
        background2 = this.add.image(game.config.width/2, game.config.height - background1.displayHeight + 50, 'spritesheet2', 'background_medium_shade.png').setOrigin(0.5,1);
        backgroundClouds1 = this.add.image(game.config.width/2, background1.y - background1.displayHeight, 'spritesheet3', 'background_clouds_blue.png');
        backgroundClouds2 = this.add.image(game.config.width/2, background2.y - background2.displayHeight, 'spritesheet3', 'background_clouds_purple.png');

        // Collision categories
        var pointerCollisionCategory = this.matter.world.nextCategory();
        var targetCollisionCategory = this.matter.world.nextCategory();

        // Draggable circle
        var circle = this.matter.add.image(game.config.width/2, game.config.height/2, 'spritesheet2', 'paddle.png')
            .setIgnoreGravity(true)
            .setFrictionAir(1)
            .setMass(10)
            .setCollisionCategory(pointerCollisionCategory);
        this.matter.add.mouseSpring();

        // Enemy Targets        
        var enemySprites = [];
        retrieveEnemySprites('spritesheet1');
        retrieveEnemySprites('spritesheet2');
        retrieveEnemySprites('spritesheet3');
        
        function retrieveEnemySprites(spriteSheetName){
            var atlasTexture = globalScene.textures.get(spriteSheetName);
            var allSpriteNames = atlasTexture.getFrameNames();
            var spriteSheetEnemySprites = searchStringInArray("enemy_", allSpriteNames);
            enemySprites.push(spriteSheetEnemySprites);
        }

        function searchStringInArray(str, strArray) {
            var results = [];
            for (var j=0; j<strArray.length; j++)
                if (strArray[j].match(str)) results.push(strArray[j]);
            return results;
        }

        this.targets = this.add.group();
        var timedEventTarget = this.time.addEvent({ delay: 2000, callback: createTargets, callbackScope: this, loop: true });
        function createTargets(){
            var loops = Phaser.Math.Between(5,10);
            for (var i=0; i<loops; i++){
                var enemySpriteSheetIndex = Phaser.Math.Between(0,2);
                var enemySpriteSheet = enemySprites[enemySpriteSheetIndex];
                var enemySprite = enemySpriteSheet[Phaser.Math.Between(0,enemySpriteSheet.length-1)];
                //if (enemyFrame != "enemy_planet_01.png" && enemyFrame != "enemy_planet_02.png"){
                    var targetX = game.config.width/2 + Phaser.Math.Between(-100,100);
                    var targetY = -500-(i*100);
                    var target = this.matter.add.image(targetX, targetY, 'spritesheet' + (enemySpriteSheetIndex+1), enemySprite, { ignorePointer: true })
                        .setScale(0.4)
                        .setMass(100)
                        .setBounce(0)
                        .setRotation(Phaser.Math.Between(0,7))
                        .setCollisionCategory(targetCollisionCategory);
                    target.y -= target.displayHeight/2;
                    this.targets.add(target);
                //}
            }
        }

        // Boop
        var boop = this.matter.add.image(game.config.width/2, game.config.height/1.2, 'spritesheet3', 'hero_01.png')
            .setScale(0.65)
            .setStatic(true)
            .setCollidesWith(targetCollisionCategory);


        // Boop collision
        this.matter.world.on('collisionstart', function (event) {
            for (var i = 0; i < event.pairs.length; i++) {
                var bodyA = event.pairs[i].bodyA.gameObject;
                var bodyB = event.pairs[i].bodyB.gameObject;
    
                if ((bodyA === boop) || (bodyB === boop)) {
                    globalScene.scrollingSpeed = 1;
                    var bombAnim = globalScene.add.sprite(boop.x, boop.y).setOrigin(0.5,1);
                    bombAnim.on('animationcomplete', onBombAnimationComplete, this);
                    bombAnim.play('Explosion');
                    globalScene.sfxExplosion.play();

                    function onBombAnimationComplete(animation, frame){
                        globalScene.gameOver();
                    }
                }
            }
        });

        // Score
        var scoreBar = this.add.image(0, 0, 'spritesheet3', 'ui_score.png');
        scoreBar.setPosition(scoreBar.displayWidth/2, scoreBar.displayHeight/3);
        this.scoreText = this.add.text(scoreBar.x, scoreBar.y + 40, "0", { font: '28px Montserrat', fill: '#FFFFFF' }).setFontStyle('bold italic').setOrigin(0.5);

    },

    update: function (time, delta)
    {
        background1.y += this.scrollingSpeed;
        background2.y += this.scrollingSpeed;
        backgroundClouds1.y += this.scrollingSpeed;
        backgroundClouds2.y += this.scrollingSpeed;

        // Recycle backgrounds
        if (backgroundClouds1.y > backgroundClouds1.displayHeight + game.config.height){
            background1.setPosition(game.config.width/2, background2.y - background2.displayHeight + 200);
            backgroundClouds1.setPosition(game.config.width/2, background1.y - background1.displayHeight);
            if (this.sequenceNumber < this.backgroundSequence.length){
                var spritesheet = (this.sequenceNumber < 2) ? 'spritesheet2' : 'spritesheet1'
                background1.setTexture(spritesheet, this.backgroundSequence[this.sequenceNumber++] + '.png');
            }
        }

        else if (backgroundClouds2.y > backgroundClouds2.displayHeight + game.config.height){
            background2.setPosition(game.config.width/2, background1.y - background1.displayHeight + 200);
            backgroundClouds2.setPosition(game.config.width/2, background2.y - background2.displayHeight);
            if (this.sequenceNumber < this.backgroundSequence.length){
                var spritesheet = (this.sequenceNumber < 2) ? 'spritesheet2' : 'spritesheet1'
                background1.setTexture(spritesheet, this.backgroundSequence[this.sequenceNumber++] + '.png');
            }
        }

        // Set score based on time elapsed
        if ((time - this.previousElapsedTime) > 100){
            this.previousElapsedTime = time;
            this.scoreText.setText(++this.score);
        }

        // Remove fallen targets
        var chosen = null;
        this.targets.children.iterate(function(child){
            if (child.y > game.config.height + 100)
                chosen = child;
        });

        if (chosen !== null) globalScene.targets.remove(chosen, true, true);
    },

    gameOver: function(){
        this.sfxAir.stop();
        this.sfxJet.stop();
        globalScene.scene.start('gameover', { score: globalScene.score});
    },
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
    },

    create: function ()
    {
        var background = this.add.image(game.config.width/2, game.config.height/2, 'spritesheet1', 'background_static.png');
        background.setDisplaySize(game.config.width, game.config.height);

        var board = this.add.image(game.config.width/2, 0, 'spritesheet3','ui_game_over.png').setOrigin(0.5,0);

        var scoreText = this.add.text(game.config.width/2, board.y + board.displayHeight/2, this.score, { font: '32px Montserrat', fill: '#00ff00' });
        scoreText.setOrigin(0.5);
        scoreText.setAlpha(0); 

        var restartButton = this.children.add(new Button(this, 'spritesheet2', 'btn_replay.png', game.config.width/2.7, game.config.height + 100));
        restartButton.on('pointerdown', () => this.startGame() );

        var menuButton = this.children.add(new Button(this, 'spritesheet1', 'btn_menu.png', game.config.width/1.55, game.config.height + 100));
        menuButton.on('pointerdown', () => this.openMenu() );

        board.y -= board.displayHeight;

        var animations = new UIAnimations(this);
        //animations.growIn(board);
        animations.fallDown(board);
        //animations.fadeIn2(boop);
        animations.fadeIn2(scoreText);
        animations.moveUp(restartButton, game.config.height/1.55, 500, 750);
        animations.moveUp(menuButton, game.config.height/1.55, 500, 900);

        scoreHandler_namespaceObject.checkHighScore(gameName, this.score);      
    },

    startGame: function() {
        this.scene.start('game');
    },

    openMenu: function() {
        this.scene.start('mainmenu');
    }

});


// CONCATENATED MODULE: ./src/airship_release.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "game", function() { return game; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gameName", function() { return gameName; });







var game;
var gameName = "airship";

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
        width: 650,
        height: 950,
        physics: {
            default: 'matter',
            matter: {
                gravity: { y: 0.3 },
                debug: false
            }
        },
        scene: [ Boot, Preloader, MainMenu, HowToPlay, Game, GameOver ]
    };
    game = new Phaser.Game(config);
    resize();
    window.addEventListener("resize", resize, false);
}



/***/ })
/******/ ]);