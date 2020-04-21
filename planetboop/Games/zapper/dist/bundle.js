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
/******/ 	return __webpack_require__(__webpack_require__.s = 23);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "81bcc4075c46e3c8c2959098fddc1f7a.png";

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./FaceZapperLogo.png": 0,
	"./audio/CartoonPain/boopPain1.wav": 6,
	"./audio/Incorrect.wav": 7,
	"./audio/Poof.wav": 8,
	"./audio/PowerUp.wav": 9,
	"./audio/ShootBazooka.wav": 10,
	"./audio/ShootPastry.wav": 11,
	"./audio/ShootQuack.wav": 12,
	"./audio/ShootShotgun.wav": 13,
	"./audio/SpaceBulletTheme.wav": 14,
	"./sprites/Explosion60fps.json": 2,
	"./sprites/Explosion60fps.png": 15,
	"./sprites/spritesheet1.json": 3,
	"./sprites/spritesheet1.png": 16,
	"./sprites/spritesheet2.json": 4,
	"./sprites/spritesheet2.png": 17,
	"./sprites/spritesheet3.json": 5,
	"./sprites/spritesheet3.png": 18
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
webpackContext.id = 1;

/***/ }),
/* 2 */
/***/ (function(module) {

module.exports = JSON.parse("{\"textures\":[{\"image\":\"Explosion60fps.png\",\"format\":\"RGBA8888\",\"size\":{\"w\":1804,\"h\":756},\"scale\":1,\"frames\":[{\"filename\":\"Symbol 10022.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":162,\"h\":187},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":162,\"h\":187},\"frame\":{\"x\":1,\"y\":1,\"w\":162,\"h\":187}},{\"filename\":\"Symbol 10023.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":162,\"h\":187},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":162,\"h\":187},\"frame\":{\"x\":1,\"y\":190,\"w\":162,\"h\":187}},{\"filename\":\"Symbol 10024.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":162,\"h\":187},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":162,\"h\":187},\"frame\":{\"x\":1,\"y\":379,\"w\":162,\"h\":187}},{\"filename\":\"Symbol 10025.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":162,\"h\":187},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":162,\"h\":187},\"frame\":{\"x\":1,\"y\":568,\"w\":162,\"h\":187}},{\"filename\":\"Symbol 10026.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":162,\"h\":187},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":162,\"h\":187},\"frame\":{\"x\":165,\"y\":1,\"w\":162,\"h\":187}},{\"filename\":\"Symbol 10027.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":162,\"h\":187},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":162,\"h\":187},\"frame\":{\"x\":165,\"y\":190,\"w\":162,\"h\":187}},{\"filename\":\"Symbol 10028.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":162,\"h\":187},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":162,\"h\":187},\"frame\":{\"x\":165,\"y\":379,\"w\":162,\"h\":187}},{\"filename\":\"Symbol 10029.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":162,\"h\":187},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":162,\"h\":187},\"frame\":{\"x\":165,\"y\":568,\"w\":162,\"h\":187}},{\"filename\":\"Symbol 10030.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":162,\"h\":187},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":162,\"h\":187},\"frame\":{\"x\":329,\"y\":1,\"w\":162,\"h\":187}},{\"filename\":\"Symbol 10031.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":162,\"h\":187},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":162,\"h\":187},\"frame\":{\"x\":329,\"y\":190,\"w\":162,\"h\":187}},{\"filename\":\"Symbol 10032.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":162,\"h\":187},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":162,\"h\":187},\"frame\":{\"x\":329,\"y\":379,\"w\":162,\"h\":187}},{\"filename\":\"Symbol 10033.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":162,\"h\":187},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":162,\"h\":187},\"frame\":{\"x\":329,\"y\":568,\"w\":162,\"h\":187}},{\"filename\":\"Symbol 10034.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":162,\"h\":187},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":162,\"h\":187},\"frame\":{\"x\":493,\"y\":1,\"w\":162,\"h\":187}},{\"filename\":\"Symbol 10046.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":162,\"h\":187},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":162,\"h\":187},\"frame\":{\"x\":493,\"y\":1,\"w\":162,\"h\":187}},{\"filename\":\"Symbol 10059.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":162,\"h\":187},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":162,\"h\":187},\"frame\":{\"x\":493,\"y\":1,\"w\":162,\"h\":187}},{\"filename\":\"Symbol 10065.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":162,\"h\":187},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":162,\"h\":187},\"frame\":{\"x\":493,\"y\":1,\"w\":162,\"h\":187}},{\"filename\":\"Symbol 10072.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":162,\"h\":187},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":162,\"h\":187},\"frame\":{\"x\":493,\"y\":1,\"w\":162,\"h\":187}},{\"filename\":\"Symbol 10078.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":162,\"h\":187},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":162,\"h\":187},\"frame\":{\"x\":493,\"y\":1,\"w\":162,\"h\":187}},{\"filename\":\"Symbol 10084.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":162,\"h\":187},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":162,\"h\":187},\"frame\":{\"x\":493,\"y\":1,\"w\":162,\"h\":187}},{\"filename\":\"Symbol 10089.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":162,\"h\":187},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":162,\"h\":187},\"frame\":{\"x\":493,\"y\":1,\"w\":162,\"h\":187}},{\"filename\":\"Symbol 10036.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":162,\"h\":187},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":162,\"h\":187},\"frame\":{\"x\":493,\"y\":190,\"w\":162,\"h\":187}},{\"filename\":\"Symbol 10037.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":162,\"h\":187},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":162,\"h\":187},\"frame\":{\"x\":493,\"y\":379,\"w\":162,\"h\":187}},{\"filename\":\"Symbol 10038.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":162,\"h\":187},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":162,\"h\":187},\"frame\":{\"x\":493,\"y\":568,\"w\":162,\"h\":187}},{\"filename\":\"Symbol 10039.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":162,\"h\":187},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":162,\"h\":187},\"frame\":{\"x\":657,\"y\":1,\"w\":162,\"h\":187}},{\"filename\":\"Symbol 10040.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":162,\"h\":187},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":162,\"h\":187},\"frame\":{\"x\":657,\"y\":190,\"w\":162,\"h\":187}},{\"filename\":\"Symbol 10041.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":162,\"h\":187},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":162,\"h\":187},\"frame\":{\"x\":657,\"y\":379,\"w\":162,\"h\":187}},{\"filename\":\"Symbol 10042.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":162,\"h\":187},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":162,\"h\":187},\"frame\":{\"x\":657,\"y\":568,\"w\":162,\"h\":187}},{\"filename\":\"Symbol 10043.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":162,\"h\":187},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":162,\"h\":187},\"frame\":{\"x\":821,\"y\":1,\"w\":162,\"h\":187}},{\"filename\":\"Symbol 10044.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":162,\"h\":187},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":162,\"h\":187},\"frame\":{\"x\":821,\"y\":190,\"w\":162,\"h\":187}},{\"filename\":\"Symbol 10045.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":162,\"h\":187},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":162,\"h\":187},\"frame\":{\"x\":821,\"y\":379,\"w\":162,\"h\":187}},{\"filename\":\"Symbol 10048.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":162,\"h\":187},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":162,\"h\":187},\"frame\":{\"x\":821,\"y\":568,\"w\":162,\"h\":187}},{\"filename\":\"Symbol 10049.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":162,\"h\":187},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":162,\"h\":187},\"frame\":{\"x\":985,\"y\":1,\"w\":162,\"h\":187}},{\"filename\":\"Symbol 10067.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":162,\"h\":187},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":162,\"h\":187},\"frame\":{\"x\":985,\"y\":1,\"w\":162,\"h\":187}},{\"filename\":\"Symbol 10050.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":162,\"h\":187},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":162,\"h\":187},\"frame\":{\"x\":985,\"y\":190,\"w\":162,\"h\":187}},{\"filename\":\"Symbol 10086.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":162,\"h\":187},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":162,\"h\":187},\"frame\":{\"x\":985,\"y\":190,\"w\":162,\"h\":187}},{\"filename\":\"Symbol 10051.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":162,\"h\":187},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":162,\"h\":187},\"frame\":{\"x\":985,\"y\":379,\"w\":162,\"h\":187}},{\"filename\":\"Symbol 10068.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":162,\"h\":187},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":162,\"h\":187},\"frame\":{\"x\":985,\"y\":379,\"w\":162,\"h\":187}},{\"filename\":\"Symbol 10052.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":162,\"h\":187},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":162,\"h\":187},\"frame\":{\"x\":985,\"y\":568,\"w\":162,\"h\":187}},{\"filename\":\"Symbol 10053.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":162,\"h\":187},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":162,\"h\":187},\"frame\":{\"x\":1149,\"y\":1,\"w\":162,\"h\":187}},{\"filename\":\"Symbol 10087.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":162,\"h\":187},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":162,\"h\":187},\"frame\":{\"x\":1149,\"y\":1,\"w\":162,\"h\":187}},{\"filename\":\"Symbol 10054.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":162,\"h\":187},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":162,\"h\":187},\"frame\":{\"x\":1313,\"y\":1,\"w\":162,\"h\":187}},{\"filename\":\"Symbol 10055.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":162,\"h\":187},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":162,\"h\":187},\"frame\":{\"x\":1477,\"y\":1,\"w\":162,\"h\":187}},{\"filename\":\"Symbol 10070.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":162,\"h\":187},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":162,\"h\":187},\"frame\":{\"x\":1477,\"y\":1,\"w\":162,\"h\":187}},{\"filename\":\"Symbol 10056.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":162,\"h\":187},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":162,\"h\":187},\"frame\":{\"x\":1641,\"y\":1,\"w\":162,\"h\":187}},{\"filename\":\"Symbol 10088.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":162,\"h\":187},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":162,\"h\":187},\"frame\":{\"x\":1641,\"y\":1,\"w\":162,\"h\":187}},{\"filename\":\"Symbol 10057.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":162,\"h\":187},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":162,\"h\":187},\"frame\":{\"x\":1149,\"y\":190,\"w\":162,\"h\":187}},{\"filename\":\"Symbol 10071.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":162,\"h\":187},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":162,\"h\":187},\"frame\":{\"x\":1149,\"y\":190,\"w\":162,\"h\":187}},{\"filename\":\"Symbol 10058.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":162,\"h\":187},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":162,\"h\":187},\"frame\":{\"x\":1149,\"y\":379,\"w\":162,\"h\":187}},{\"filename\":\"Symbol 10061.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":162,\"h\":187},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":162,\"h\":187},\"frame\":{\"x\":1149,\"y\":568,\"w\":162,\"h\":187}},{\"filename\":\"Symbol 10074.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":162,\"h\":187},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":162,\"h\":187},\"frame\":{\"x\":1149,\"y\":568,\"w\":162,\"h\":187}},{\"filename\":\"Symbol 10062.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":162,\"h\":187},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":162,\"h\":187},\"frame\":{\"x\":1313,\"y\":190,\"w\":162,\"h\":187}},{\"filename\":\"Symbol 10075.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":162,\"h\":187},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":162,\"h\":187},\"frame\":{\"x\":1313,\"y\":190,\"w\":162,\"h\":187}},{\"filename\":\"Symbol 10063.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":162,\"h\":187},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":162,\"h\":187},\"frame\":{\"x\":1477,\"y\":190,\"w\":162,\"h\":187}},{\"filename\":\"Symbol 10076.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":162,\"h\":187},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":162,\"h\":187},\"frame\":{\"x\":1477,\"y\":190,\"w\":162,\"h\":187}},{\"filename\":\"Symbol 10064.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":162,\"h\":187},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":162,\"h\":187},\"frame\":{\"x\":1641,\"y\":190,\"w\":162,\"h\":187}},{\"filename\":\"Symbol 10077.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":162,\"h\":187},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":162,\"h\":187},\"frame\":{\"x\":1641,\"y\":190,\"w\":162,\"h\":187}},{\"filename\":\"Symbol 10069.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":162,\"h\":187},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":162,\"h\":187},\"frame\":{\"x\":1313,\"y\":379,\"w\":162,\"h\":187}},{\"filename\":\"Symbol 10080.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":162,\"h\":187},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":162,\"h\":187},\"frame\":{\"x\":1313,\"y\":568,\"w\":162,\"h\":187}},{\"filename\":\"Symbol 10081.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":162,\"h\":187},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":162,\"h\":187},\"frame\":{\"x\":1477,\"y\":379,\"w\":162,\"h\":187}},{\"filename\":\"Symbol 10082.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":162,\"h\":187},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":162,\"h\":187},\"frame\":{\"x\":1477,\"y\":568,\"w\":162,\"h\":187}},{\"filename\":\"Symbol 10083.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":162,\"h\":187},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":162,\"h\":187},\"frame\":{\"x\":1641,\"y\":379,\"w\":162,\"h\":187}},{\"filename\":\"Symbol 10001.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":162,\"h\":187},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":3,\"h\":3},\"frame\":{\"x\":1641,\"y\":568,\"w\":3,\"h\":3}},{\"filename\":\"Symbol 10002.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":162,\"h\":187},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":3,\"h\":3},\"frame\":{\"x\":1641,\"y\":568,\"w\":3,\"h\":3}},{\"filename\":\"Symbol 10003.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":162,\"h\":187},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":3,\"h\":3},\"frame\":{\"x\":1641,\"y\":568,\"w\":3,\"h\":3}},{\"filename\":\"Symbol 10004.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":162,\"h\":187},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":3,\"h\":3},\"frame\":{\"x\":1641,\"y\":568,\"w\":3,\"h\":3}},{\"filename\":\"Symbol 10005.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":162,\"h\":187},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":3,\"h\":3},\"frame\":{\"x\":1641,\"y\":568,\"w\":3,\"h\":3}},{\"filename\":\"Symbol 10006.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":162,\"h\":187},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":3,\"h\":3},\"frame\":{\"x\":1641,\"y\":568,\"w\":3,\"h\":3}},{\"filename\":\"Symbol 10007.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":162,\"h\":187},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":3,\"h\":3},\"frame\":{\"x\":1641,\"y\":568,\"w\":3,\"h\":3}},{\"filename\":\"Symbol 10008.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":162,\"h\":187},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":3,\"h\":3},\"frame\":{\"x\":1641,\"y\":568,\"w\":3,\"h\":3}},{\"filename\":\"Symbol 10009.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":162,\"h\":187},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":3,\"h\":3},\"frame\":{\"x\":1641,\"y\":568,\"w\":3,\"h\":3}},{\"filename\":\"Symbol 10010.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":162,\"h\":187},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":3,\"h\":3},\"frame\":{\"x\":1641,\"y\":568,\"w\":3,\"h\":3}},{\"filename\":\"Symbol 10011.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":162,\"h\":187},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":3,\"h\":3},\"frame\":{\"x\":1641,\"y\":568,\"w\":3,\"h\":3}},{\"filename\":\"Symbol 10012.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":162,\"h\":187},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":3,\"h\":3},\"frame\":{\"x\":1641,\"y\":568,\"w\":3,\"h\":3}},{\"filename\":\"Symbol 10013.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":162,\"h\":187},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":3,\"h\":3},\"frame\":{\"x\":1641,\"y\":568,\"w\":3,\"h\":3}},{\"filename\":\"Symbol 10014.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":162,\"h\":187},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":3,\"h\":3},\"frame\":{\"x\":1641,\"y\":568,\"w\":3,\"h\":3}},{\"filename\":\"Symbol 10015.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":162,\"h\":187},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":3,\"h\":3},\"frame\":{\"x\":1641,\"y\":568,\"w\":3,\"h\":3}},{\"filename\":\"Symbol 10016.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":162,\"h\":187},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":3,\"h\":3},\"frame\":{\"x\":1641,\"y\":568,\"w\":3,\"h\":3}},{\"filename\":\"Symbol 10017.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":162,\"h\":187},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":3,\"h\":3},\"frame\":{\"x\":1641,\"y\":568,\"w\":3,\"h\":3}},{\"filename\":\"Symbol 10018.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":162,\"h\":187},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":3,\"h\":3},\"frame\":{\"x\":1641,\"y\":568,\"w\":3,\"h\":3}},{\"filename\":\"Symbol 10019.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":162,\"h\":187},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":3,\"h\":3},\"frame\":{\"x\":1641,\"y\":568,\"w\":3,\"h\":3}},{\"filename\":\"Symbol 10020.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":162,\"h\":187},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":3,\"h\":3},\"frame\":{\"x\":1641,\"y\":568,\"w\":3,\"h\":3}},{\"filename\":\"Symbol 10021.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":162,\"h\":187},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":3,\"h\":3},\"frame\":{\"x\":1641,\"y\":568,\"w\":3,\"h\":3}},{\"filename\":\"Symbol 10035.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":162,\"h\":187},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":3,\"h\":3},\"frame\":{\"x\":1641,\"y\":568,\"w\":3,\"h\":3}},{\"filename\":\"Symbol 10047.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":162,\"h\":187},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":3,\"h\":3},\"frame\":{\"x\":1641,\"y\":568,\"w\":3,\"h\":3}},{\"filename\":\"Symbol 10060.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":162,\"h\":187},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":3,\"h\":3},\"frame\":{\"x\":1641,\"y\":568,\"w\":3,\"h\":3}},{\"filename\":\"Symbol 10066.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":162,\"h\":187},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":3,\"h\":3},\"frame\":{\"x\":1641,\"y\":568,\"w\":3,\"h\":3}},{\"filename\":\"Symbol 10073.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":162,\"h\":187},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":3,\"h\":3},\"frame\":{\"x\":1641,\"y\":568,\"w\":3,\"h\":3}},{\"filename\":\"Symbol 10079.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":162,\"h\":187},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":3,\"h\":3},\"frame\":{\"x\":1641,\"y\":568,\"w\":3,\"h\":3}},{\"filename\":\"Symbol 10085.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":162,\"h\":187},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":3,\"h\":3},\"frame\":{\"x\":1641,\"y\":568,\"w\":3,\"h\":3}},{\"filename\":\"Symbol 10090.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":162,\"h\":187},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":3,\"h\":3},\"frame\":{\"x\":1641,\"y\":568,\"w\":3,\"h\":3}}]}],\"meta\":{\"app\":\"https://www.codeandweb.com/texturepacker\",\"version\":\"3.0\",\"smartupdate\":\"$TexturePacker:SmartUpdate:1a251c6867b6f381e59d5adb7549af23:aa201221b2f53606a5060838e81afeb5:46af941ea1133bd34609ce7fcf226ad6$\"}}");

/***/ }),
/* 3 */
/***/ (function(module) {

module.exports = JSON.parse("{\"textures\":[{\"image\":\"spritesheet1.png\",\"format\":\"RGBA8888\",\"size\":{\"w\":2041,\"h\":2038},\"scale\":1,\"frames\":[{\"filename\":\"Slicing-01.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":641,\"h\":963},\"spriteSourceSize\":{\"x\":0,\"y\":1,\"w\":641,\"h\":962},\"frame\":{\"x\":1,\"y\":1,\"w\":641,\"h\":962}},{\"filename\":\"Slicing-96.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":642,\"h\":961},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":642,\"h\":961},\"frame\":{\"x\":644,\"y\":1,\"w\":642,\"h\":961}},{\"filename\":\"Slicing-86.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":641,\"h\":961},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":641,\"h\":961},\"frame\":{\"x\":1,\"y\":965,\"w\":641,\"h\":961},\"anchor\":{\"x\":0,\"y\":0}},{\"filename\":\"Slicing-101.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":641,\"h\":960},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":641,\"h\":960},\"frame\":{\"x\":644,\"y\":964,\"w\":641,\"h\":960}},{\"filename\":\"Slicing-102.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":640,\"h\":961},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":640,\"h\":961},\"frame\":{\"x\":1288,\"y\":1,\"w\":640,\"h\":961}},{\"filename\":\"Avoid-These.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":641,\"h\":960},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":641,\"h\":960},\"frame\":{\"x\":1287,\"y\":964,\"w\":641,\"h\":960}},{\"filename\":\"Black-Rectangle.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":644,\"h\":81},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":644,\"h\":81},\"frame\":{\"x\":1,\"y\":1928,\"w\":644,\"h\":81}},{\"filename\":\"Slicing-13.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":492,\"h\":7},\"spriteSourceSize\":{\"x\":0,\"y\":1,\"w\":492,\"h\":4},\"frame\":{\"x\":1,\"y\":2011,\"w\":492,\"h\":4}},{\"filename\":\"Slicing-04.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":376,\"h\":110},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":376,\"h\":110},\"frame\":{\"x\":647,\"y\":1926,\"w\":376,\"h\":110}},{\"filename\":\"Slicing-12.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":376,\"h\":110},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":376,\"h\":110},\"frame\":{\"x\":1025,\"y\":1926,\"w\":376,\"h\":110}},{\"filename\":\"Slicing-15.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":376,\"h\":110},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":376,\"h\":110},\"frame\":{\"x\":1403,\"y\":1926,\"w\":376,\"h\":110}},{\"filename\":\"Gun.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":109,\"h\":225},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":109,\"h\":225},\"frame\":{\"x\":1930,\"y\":1,\"w\":109,\"h\":225}},{\"filename\":\"Slicing-06.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":142,\"h\":111},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":142,\"h\":111},\"frame\":{\"x\":1781,\"y\":1926,\"w\":142,\"h\":111}},{\"filename\":\"Slicing-87.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":110,\"h\":113},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":110,\"h\":113},\"frame\":{\"x\":1930,\"y\":228,\"w\":110,\"h\":113}},{\"filename\":\"Slicing-68.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":94,\"h\":92},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":94,\"h\":92},\"frame\":{\"x\":1930,\"y\":343,\"w\":94,\"h\":92}},{\"filename\":\"Slicing-69.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":94,\"h\":92},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":94,\"h\":92},\"frame\":{\"x\":1930,\"y\":437,\"w\":94,\"h\":92}},{\"filename\":\"Slicing-67.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":94,\"h\":91},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":94,\"h\":91},\"frame\":{\"x\":1930,\"y\":531,\"w\":94,\"h\":91}},{\"filename\":\"Slicing-70.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":94,\"h\":91},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":94,\"h\":91},\"frame\":{\"x\":1930,\"y\":624,\"w\":94,\"h\":91}},{\"filename\":\"Slicing-72.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":94,\"h\":92},\"spriteSourceSize\":{\"x\":0,\"y\":1,\"w\":94,\"h\":91},\"frame\":{\"x\":1930,\"y\":717,\"w\":94,\"h\":91}},{\"filename\":\"Slicing-74.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":94,\"h\":91},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":94,\"h\":91},\"frame\":{\"x\":1930,\"y\":810,\"w\":94,\"h\":91}},{\"filename\":\"Slicing-75.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":93,\"h\":91},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":90,\"h\":91},\"frame\":{\"x\":1930,\"y\":903,\"w\":90,\"h\":91}},{\"filename\":\"Slicing-85.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":55,\"h\":76},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":55,\"h\":76},\"frame\":{\"x\":1930,\"y\":996,\"w\":55,\"h\":76}},{\"filename\":\"Slicing-84.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":55,\"h\":72},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":55,\"h\":72},\"frame\":{\"x\":1930,\"y\":1074,\"w\":55,\"h\":72}},{\"filename\":\"Slicing-11.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":17,\"h\":16},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":17,\"h\":16},\"frame\":{\"x\":1,\"y\":2017,\"w\":17,\"h\":16}}]}],\"meta\":{\"app\":\"https://www.codeandweb.com/texturepacker\",\"version\":\"3.0\",\"smartupdate\":\"$TexturePacker:SmartUpdate:ba61676986d5f0644b42ffc9cb24bcbc:35cec0881a55c3ad985060275e37cdb0:3c0964389d78d2adb7a87b342b3489a2$\"}}");

/***/ }),
/* 4 */
/***/ (function(module) {

module.exports = JSON.parse("{\"textures\":[{\"image\":\"spritesheet2.png\",\"format\":\"RGBA8888\",\"size\":{\"w\":1889,\"h\":1921},\"scale\":1,\"frames\":[{\"filename\":\"Slicing-08.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":494,\"h\":710},\"spriteSourceSize\":{\"x\":0,\"y\":1,\"w\":494,\"h\":709},\"frame\":{\"x\":1,\"y\":1,\"w\":494,\"h\":709}},{\"filename\":\"Slicing-103.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":495,\"h\":616},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":495,\"h\":616},\"frame\":{\"x\":497,\"y\":1,\"w\":495,\"h\":616}},{\"filename\":\"Slicing-90.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":496,\"h\":484},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":496,\"h\":484},\"frame\":{\"x\":994,\"y\":1,\"w\":496,\"h\":484}},{\"filename\":\"Slicing-02.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":383,\"h\":345},\"spriteSourceSize\":{\"x\":0,\"y\":1,\"w\":383,\"h\":344},\"frame\":{\"x\":1,\"y\":712,\"w\":383,\"h\":344}},{\"filename\":\"Slicing-78.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":302,\"h\":300},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":302,\"h\":300},\"frame\":{\"x\":1492,\"y\":1,\"w\":302,\"h\":300}},{\"filename\":\"Slicing-98.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":388,\"h\":197},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":388,\"h\":197},\"frame\":{\"x\":1,\"y\":1058,\"w\":388,\"h\":197}},{\"filename\":\"Slicing-89.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":335,\"h\":197},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":335,\"h\":197},\"frame\":{\"x\":1,\"y\":1257,\"w\":335,\"h\":197}},{\"filename\":\"Slicing-16.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":376,\"h\":110},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":376,\"h\":110},\"frame\":{\"x\":994,\"y\":487,\"w\":376,\"h\":110}},{\"filename\":\"Slicing-18.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":336,\"h\":141},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":336,\"h\":141},\"frame\":{\"x\":1,\"y\":1456,\"w\":336,\"h\":141}},{\"filename\":\"Slicing-05.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":376,\"h\":110},\"spriteSourceSize\":{\"x\":0,\"y\":1,\"w\":376,\"h\":109},\"frame\":{\"x\":497,\"y\":619,\"w\":376,\"h\":109}},{\"filename\":\"Slicing-03.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":376,\"h\":111},\"spriteSourceSize\":{\"x\":1,\"y\":1,\"w\":375,\"h\":110},\"frame\":{\"x\":1,\"y\":1599,\"w\":375,\"h\":110}},{\"filename\":\"Slicing-07.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":376,\"h\":110},\"spriteSourceSize\":{\"x\":1,\"y\":0,\"w\":375,\"h\":110},\"frame\":{\"x\":1,\"y\":1711,\"w\":375,\"h\":110}},{\"filename\":\"Slicing-09.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":415,\"h\":38},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":415,\"h\":38},\"frame\":{\"x\":1,\"y\":1823,\"w\":415,\"h\":38}},{\"filename\":\"Slicing-17.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":376,\"h\":110},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":375,\"h\":110},\"frame\":{\"x\":1492,\"y\":303,\"w\":375,\"h\":110}},{\"filename\":\"Slicing-100.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":373,\"h\":110},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":373,\"h\":110},\"frame\":{\"x\":1492,\"y\":415,\"w\":373,\"h\":110}},{\"filename\":\"Slicing-66.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":202,\"h\":221},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":202,\"h\":221},\"frame\":{\"x\":386,\"y\":730,\"w\":202,\"h\":221}},{\"filename\":\"Slicing-91.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":215,\"h\":207},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":215,\"h\":207},\"frame\":{\"x\":590,\"y\":730,\"w\":215,\"h\":207}},{\"filename\":\"Slicing-60.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":172,\"h\":199},\"spriteSourceSize\":{\"x\":0,\"y\":1,\"w\":172,\"h\":198},\"frame\":{\"x\":391,\"y\":953,\"w\":172,\"h\":198}},{\"filename\":\"Slicing-46.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":172,\"h\":198},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":172,\"h\":198},\"frame\":{\"x\":391,\"y\":1153,\"w\":172,\"h\":198}},{\"filename\":\"Slicing-65.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":172,\"h\":198},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":172,\"h\":198},\"frame\":{\"x\":807,\"y\":730,\"w\":172,\"h\":198}},{\"filename\":\"Slicing-92.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":143,\"h\":109},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":143,\"h\":109},\"frame\":{\"x\":875,\"y\":619,\"w\":143,\"h\":109}},{\"filename\":\"Slicing-47.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":172,\"h\":198},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":172,\"h\":198},\"frame\":{\"x\":1020,\"y\":599,\"w\":172,\"h\":198}},{\"filename\":\"Slicing-19.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":172,\"h\":198},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":172,\"h\":198},\"frame\":{\"x\":1194,\"y\":599,\"w\":172,\"h\":198}},{\"filename\":\"Slicing-25.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":172,\"h\":198},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":172,\"h\":198},\"frame\":{\"x\":981,\"y\":799,\"w\":172,\"h\":198}},{\"filename\":\"Slicing-26.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":172,\"h\":198},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":172,\"h\":198},\"frame\":{\"x\":1155,\"y\":799,\"w\":172,\"h\":198}},{\"filename\":\"Slicing-30.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":172,\"h\":198},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":172,\"h\":198},\"frame\":{\"x\":807,\"y\":930,\"w\":172,\"h\":198}},{\"filename\":\"Slicing-31.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":172,\"h\":198},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":172,\"h\":198},\"frame\":{\"x\":981,\"y\":999,\"w\":172,\"h\":198}},{\"filename\":\"Slicing-32.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":172,\"h\":198},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":172,\"h\":198},\"frame\":{\"x\":1155,\"y\":999,\"w\":172,\"h\":198}},{\"filename\":\"Slicing-33.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":172,\"h\":198},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":172,\"h\":198},\"frame\":{\"x\":1329,\"y\":799,\"w\":172,\"h\":198}},{\"filename\":\"Slicing-36.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":172,\"h\":198},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":172,\"h\":198},\"frame\":{\"x\":1329,\"y\":999,\"w\":172,\"h\":198}},{\"filename\":\"Slicing-39.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":172,\"h\":198},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":172,\"h\":198},\"frame\":{\"x\":1368,\"y\":599,\"w\":172,\"h\":198}},{\"filename\":\"Slicing-40.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":172,\"h\":198},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":172,\"h\":198},\"frame\":{\"x\":1542,\"y\":527,\"w\":172,\"h\":198}},{\"filename\":\"Slicing-41.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":172,\"h\":198},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":172,\"h\":198},\"frame\":{\"x\":1716,\"y\":527,\"w\":172,\"h\":198}},{\"filename\":\"Slicing-24.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":172,\"h\":198},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":172,\"h\":197},\"frame\":{\"x\":1542,\"y\":727,\"w\":172,\"h\":197}},{\"filename\":\"Slicing-42.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":172,\"h\":198},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":172,\"h\":198},\"frame\":{\"x\":1716,\"y\":727,\"w\":172,\"h\":198}},{\"filename\":\"Slicing-44.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":172,\"h\":198},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":172,\"h\":198},\"frame\":{\"x\":1503,\"y\":926,\"w\":172,\"h\":198}},{\"filename\":\"Slicing-28.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":172,\"h\":198},\"spriteSourceSize\":{\"x\":0,\"y\":1,\"w\":172,\"h\":197},\"frame\":{\"x\":1677,\"y\":927,\"w\":172,\"h\":197}},{\"filename\":\"Slicing-29.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":172,\"h\":198},\"spriteSourceSize\":{\"x\":0,\"y\":1,\"w\":172,\"h\":197},\"frame\":{\"x\":1503,\"y\":1126,\"w\":172,\"h\":197}},{\"filename\":\"Slicing-34.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":172,\"h\":198},\"spriteSourceSize\":{\"x\":0,\"y\":1,\"w\":172,\"h\":197},\"frame\":{\"x\":1677,\"y\":1126,\"w\":172,\"h\":197}},{\"filename\":\"Slicing-45.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":172,\"h\":198},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":172,\"h\":198},\"frame\":{\"x\":565,\"y\":953,\"w\":172,\"h\":198}},{\"filename\":\"Slicing-23.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":172,\"h\":198},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":172,\"h\":198},\"frame\":{\"x\":565,\"y\":1153,\"w\":172,\"h\":198}},{\"filename\":\"Slicing-27.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":172,\"h\":198},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":172,\"h\":198},\"frame\":{\"x\":739,\"y\":1130,\"w\":172,\"h\":198}},{\"filename\":\"Slicing-35.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":172,\"h\":198},\"spriteSourceSize\":{\"x\":0,\"y\":1,\"w\":172,\"h\":197},\"frame\":{\"x\":913,\"y\":1199,\"w\":172,\"h\":197}},{\"filename\":\"Slicing-37.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":172,\"h\":198},\"spriteSourceSize\":{\"x\":0,\"y\":1,\"w\":172,\"h\":197},\"frame\":{\"x\":1087,\"y\":1199,\"w\":172,\"h\":197}},{\"filename\":\"Slicing-38.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":172,\"h\":198},\"spriteSourceSize\":{\"x\":0,\"y\":1,\"w\":172,\"h\":197},\"frame\":{\"x\":1261,\"y\":1199,\"w\":172,\"h\":197}},{\"filename\":\"Slicing-43.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":172,\"h\":198},\"spriteSourceSize\":{\"x\":0,\"y\":1,\"w\":172,\"h\":197},\"frame\":{\"x\":739,\"y\":1330,\"w\":172,\"h\":197}},{\"filename\":\"Slicing-49.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":172,\"h\":198},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":172,\"h\":198},\"frame\":{\"x\":913,\"y\":1398,\"w\":172,\"h\":198}},{\"filename\":\"Slicing-52.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":172,\"h\":198},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":172,\"h\":198},\"frame\":{\"x\":1087,\"y\":1398,\"w\":172,\"h\":198}},{\"filename\":\"Slicing-53.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":172,\"h\":198},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":172,\"h\":198},\"frame\":{\"x\":1261,\"y\":1398,\"w\":172,\"h\":198}},{\"filename\":\"Slicing-54.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":172,\"h\":198},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":172,\"h\":198},\"frame\":{\"x\":1435,\"y\":1325,\"w\":172,\"h\":198}},{\"filename\":\"Slicing-55.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":172,\"h\":198},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":172,\"h\":198},\"frame\":{\"x\":1609,\"y\":1325,\"w\":172,\"h\":198}},{\"filename\":\"Slicing-50.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":172,\"h\":198},\"spriteSourceSize\":{\"x\":0,\"y\":1,\"w\":172,\"h\":197},\"frame\":{\"x\":1435,\"y\":1525,\"w\":172,\"h\":197}},{\"filename\":\"Slicing-51.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":172,\"h\":198},\"spriteSourceSize\":{\"x\":0,\"y\":1,\"w\":172,\"h\":197},\"frame\":{\"x\":1609,\"y\":1525,\"w\":172,\"h\":197}},{\"filename\":\"Slicing-56.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":172,\"h\":198},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":172,\"h\":198},\"frame\":{\"x\":339,\"y\":1353,\"w\":172,\"h\":198}},{\"filename\":\"Slicing-57.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":172,\"h\":198},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":172,\"h\":198},\"frame\":{\"x\":513,\"y\":1353,\"w\":172,\"h\":198}},{\"filename\":\"Slicing-58.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":172,\"h\":198},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":172,\"h\":198},\"frame\":{\"x\":378,\"y\":1553,\"w\":172,\"h\":198}},{\"filename\":\"Slicing-59.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":172,\"h\":198},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":172,\"h\":198},\"frame\":{\"x\":552,\"y\":1553,\"w\":172,\"h\":198}},{\"filename\":\"Slicing-61.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":172,\"h\":198},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":172,\"h\":198},\"frame\":{\"x\":726,\"y\":1529,\"w\":172,\"h\":198}},{\"filename\":\"Slicing-62.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":172,\"h\":198},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":172,\"h\":198},\"frame\":{\"x\":900,\"y\":1598,\"w\":172,\"h\":198}},{\"filename\":\"Slicing-63.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":172,\"h\":198},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":172,\"h\":198},\"frame\":{\"x\":1074,\"y\":1598,\"w\":172,\"h\":198}},{\"filename\":\"Slicing-64.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":172,\"h\":198},\"spriteSourceSize\":{\"x\":0,\"y\":1,\"w\":172,\"h\":197},\"frame\":{\"x\":1248,\"y\":1598,\"w\":172,\"h\":197}},{\"filename\":\"Slicing-48.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":172,\"h\":198},\"spriteSourceSize\":{\"x\":1,\"y\":2,\"w\":171,\"h\":196},\"frame\":{\"x\":1422,\"y\":1724,\"w\":171,\"h\":196}},{\"filename\":\"Slicing-80.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":131,\"h\":185},\"spriteSourceSize\":{\"x\":0,\"y\":2,\"w\":131,\"h\":183},\"frame\":{\"x\":1595,\"y\":1724,\"w\":131,\"h\":183}},{\"filename\":\"Slicing-81.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":130,\"h\":185},\"spriteSourceSize\":{\"x\":0,\"y\":1,\"w\":130,\"h\":184},\"frame\":{\"x\":1728,\"y\":1724,\"w\":130,\"h\":184}},{\"filename\":\"Slicing-77.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":168,\"h\":140},\"spriteSourceSize\":{\"x\":1,\"y\":2,\"w\":167,\"h\":138},\"frame\":{\"x\":418,\"y\":1753,\"w\":167,\"h\":138}},{\"filename\":\"Slicing-93.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":143,\"h\":109},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":143,\"h\":109},\"frame\":{\"x\":587,\"y\":1753,\"w\":143,\"h\":109}},{\"filename\":\"Slicing-14.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":142,\"h\":109},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":142,\"h\":109},\"frame\":{\"x\":732,\"y\":1729,\"w\":142,\"h\":109}},{\"filename\":\"Slicing-73.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":93,\"h\":92},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":93,\"h\":92},\"frame\":{\"x\":1372,\"y\":487,\"w\":93,\"h\":92}},{\"filename\":\"Slicing-94.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":142,\"h\":109},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":142,\"h\":109},\"frame\":{\"x\":876,\"y\":1798,\"w\":142,\"h\":109}},{\"filename\":\"Slicing-95.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":142,\"h\":109},\"spriteSourceSize\":{\"x\":0,\"y\":1,\"w\":142,\"h\":108},\"frame\":{\"x\":1020,\"y\":1798,\"w\":142,\"h\":108}},{\"filename\":\"Slicing-83.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":56,\"h\":77},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":56,\"h\":77},\"frame\":{\"x\":1796,\"y\":1,\"w\":56,\"h\":77}},{\"filename\":\"Slicing-82.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":54,\"h\":73},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":54,\"h\":73},\"frame\":{\"x\":1435,\"y\":1199,\"w\":54,\"h\":73}},{\"filename\":\"Picture.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":39,\"h\":39},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":39,\"h\":39},\"frame\":{\"x\":913,\"y\":1130,\"w\":39,\"h\":39}}]}],\"meta\":{\"app\":\"https://www.codeandweb.com/texturepacker\",\"version\":\"3.0\",\"smartupdate\":\"$TexturePacker:SmartUpdate:ba61676986d5f0644b42ffc9cb24bcbc:35cec0881a55c3ad985060275e37cdb0:3c0964389d78d2adb7a87b342b3489a2$\"}}");

/***/ }),
/* 5 */
/***/ (function(module) {

module.exports = JSON.parse("{\"textures\":[{\"image\":\"spritesheet3.png\",\"format\":\"RGBA8888\",\"size\":{\"w\":1634,\"h\":1018},\"scale\":1,\"frames\":[{\"filename\":\"Bam_005.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":241,\"h\":327},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":241,\"h\":326},\"frame\":{\"x\":1,\"y\":1,\"w\":241,\"h\":326}},{\"filename\":\"Bam_004.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":328,\"h\":298},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":328,\"h\":298},\"frame\":{\"x\":1,\"y\":329,\"w\":328,\"h\":298}},{\"filename\":\"Bang_004.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":235,\"h\":290},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":235,\"h\":290},\"frame\":{\"x\":244,\"y\":1,\"w\":235,\"h\":290}},{\"filename\":\"AK_Projectile_Top.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":37,\"h\":23},\"spriteSourceSize\":{\"x\":0,\"y\":1,\"w\":37,\"h\":21},\"frame\":{\"x\":244,\"y\":293,\"w\":37,\"h\":21}},{\"filename\":\"Bam_007.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":289,\"h\":288},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":289,\"h\":288},\"frame\":{\"x\":1,\"y\":629,\"w\":289,\"h\":288}},{\"filename\":\"Pie_Top.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":229,\"h\":99},\"spriteSourceSize\":{\"x\":0,\"y\":1,\"w\":229,\"h\":98},\"frame\":{\"x\":1,\"y\":919,\"w\":229,\"h\":98}},{\"filename\":\"Btn_AK.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":95,\"h\":93},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":95,\"h\":93},\"frame\":{\"x\":232,\"y\":919,\"w\":95,\"h\":93}},{\"filename\":\"Bang_003.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":206,\"h\":271},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":206,\"h\":271},\"frame\":{\"x\":292,\"y\":629,\"w\":206,\"h\":271}},{\"filename\":\"Spoof_001.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":121,\"h\":115},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":121,\"h\":115},\"frame\":{\"x\":329,\"y\":902,\"w\":121,\"h\":115}},{\"filename\":\"Bam_001.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":108,\"h\":110},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":108,\"h\":110},\"frame\":{\"x\":452,\"y\":902,\"w\":108,\"h\":110}},{\"filename\":\"Bam_003.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":279,\"h\":251},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":279,\"h\":251},\"frame\":{\"x\":331,\"y\":293,\"w\":279,\"h\":251}},{\"filename\":\"Duck_Top.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":256,\"h\":80},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":256,\"h\":79},\"frame\":{\"x\":331,\"y\":546,\"w\":256,\"h\":79}},{\"filename\":\"Spoof_003.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":255,\"h\":245},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":255,\"h\":245},\"frame\":{\"x\":500,\"y\":627,\"w\":255,\"h\":245}},{\"filename\":\"Pie_Side.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":229,\"h\":137},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":229,\"h\":137},\"frame\":{\"x\":562,\"y\":874,\"w\":229,\"h\":137}},{\"filename\":\"Duck_Projectile_Top.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":78,\"h\":74},\"spriteSourceSize\":{\"x\":0,\"y\":2,\"w\":78,\"h\":70},\"frame\":{\"x\":589,\"y\":546,\"w\":78,\"h\":70}},{\"filename\":\"Spoof_004.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":255,\"h\":240},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":255,\"h\":240},\"frame\":{\"x\":481,\"y\":1,\"w\":255,\"h\":240}},{\"filename\":\"Bam_006.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":238,\"h\":237},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":238,\"h\":237},\"frame\":{\"x\":612,\"y\":243,\"w\":238,\"h\":237}},{\"filename\":\"Pie_Projectile_Top.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":80,\"h\":63},\"spriteSourceSize\":{\"x\":1,\"y\":0,\"w\":79,\"h\":62},\"frame\":{\"x\":612,\"y\":482,\"w\":79,\"h\":62}},{\"filename\":\"Spoof_005.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":242,\"h\":231},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":242,\"h\":231},\"frame\":{\"x\":738,\"y\":1,\"w\":242,\"h\":231}},{\"filename\":\"AK_Top.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":297,\"h\":59},\"spriteSourceSize\":{\"x\":1,\"y\":1,\"w\":295,\"h\":58},\"frame\":{\"x\":669,\"y\":546,\"w\":295,\"h\":58}},{\"filename\":\"Duck_Projectile_Top2.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":89,\"h\":53},\"spriteSourceSize\":{\"x\":0,\"y\":1,\"w\":89,\"h\":52},\"frame\":{\"x\":693,\"y\":482,\"w\":89,\"h\":52}},{\"filename\":\"Bang_005.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":224,\"h\":227},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":224,\"h\":227},\"frame\":{\"x\":757,\"y\":606,\"w\":224,\"h\":227}},{\"filename\":\"AK_Side.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":291,\"h\":116},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":289,\"h\":116},\"frame\":{\"x\":793,\"y\":835,\"w\":289,\"h\":116}},{\"filename\":\"Bang_006.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":226,\"h\":223},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":226,\"h\":223},\"frame\":{\"x\":852,\"y\":234,\"w\":226,\"h\":223}},{\"filename\":\"Bang_007.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":220,\"h\":215},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":220,\"h\":215},\"frame\":{\"x\":982,\"y\":1,\"w\":220,\"h\":215}},{\"filename\":\"Duck_Side.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":256,\"h\":101},\"spriteSourceSize\":{\"x\":0,\"y\":1,\"w\":256,\"h\":100},\"frame\":{\"x\":966,\"y\":459,\"w\":256,\"h\":100}},{\"filename\":\"Bang_008.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":214,\"h\":209},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":214,\"h\":209},\"frame\":{\"x\":1080,\"y\":218,\"w\":214,\"h\":209}},{\"filename\":\"Bang_002.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":154,\"h\":203},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":154,\"h\":203},\"frame\":{\"x\":1204,\"y\":1,\"w\":154,\"h\":203}},{\"filename\":\"Bam_008.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":201,\"h\":202},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":201,\"h\":202},\"frame\":{\"x\":983,\"y\":561,\"w\":201,\"h\":202}},{\"filename\":\"AK2_Panel.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":175,\"h\":199},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":175,\"h\":199},\"frame\":{\"x\":1084,\"y\":765,\"w\":175,\"h\":199}},{\"filename\":\"AK_Panel.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":175,\"h\":199},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":175,\"h\":199},\"frame\":{\"x\":1186,\"y\":561,\"w\":175,\"h\":199}},{\"filename\":\"Bang_001.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":85,\"h\":100},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":85,\"h\":100},\"frame\":{\"x\":1224,\"y\":429,\"w\":85,\"h\":100}},{\"filename\":\"Duck2_Panel.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":175,\"h\":199},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":175,\"h\":199},\"frame\":{\"x\":1296,\"y\":206,\"w\":175,\"h\":199}},{\"filename\":\"Duck_Panel.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":175,\"h\":199},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":175,\"h\":199},\"frame\":{\"x\":1360,\"y\":1,\"w\":175,\"h\":199}},{\"filename\":\"Btn_AK_BW.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":95,\"h\":93},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":95,\"h\":93},\"frame\":{\"x\":1537,\"y\":1,\"w\":95,\"h\":93}},{\"filename\":\"Btn_Duck.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":95,\"h\":93},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":95,\"h\":93},\"frame\":{\"x\":1537,\"y\":96,\"w\":95,\"h\":93}},{\"filename\":\"Btn_Duck_BW.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":95,\"h\":93},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":95,\"h\":93},\"frame\":{\"x\":1537,\"y\":191,\"w\":95,\"h\":93}},{\"filename\":\"Pie_Panel.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":175,\"h\":199},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":175,\"h\":199},\"frame\":{\"x\":1261,\"y\":762,\"w\":175,\"h\":199}},{\"filename\":\"Bam_002.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":195,\"h\":190},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":195,\"h\":190},\"frame\":{\"x\":1438,\"y\":407,\"w\":195,\"h\":190}},{\"filename\":\"Spoof_002.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":190,\"h\":185},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":190,\"h\":185},\"frame\":{\"x\":1438,\"y\":599,\"w\":190,\"h\":185}},{\"filename\":\"Pie2_Panel.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":175,\"h\":199},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":175,\"h\":199},\"frame\":{\"x\":1438,\"y\":786,\"w\":175,\"h\":199}},{\"filename\":\"Btn_Pie.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":95,\"h\":93},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":95,\"h\":93},\"frame\":{\"x\":1473,\"y\":286,\"w\":95,\"h\":93}},{\"filename\":\"Btn_Pie_BW.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":95,\"h\":93},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":95,\"h\":93},\"frame\":{\"x\":1311,\"y\":407,\"w\":95,\"h\":93}}]}],\"meta\":{\"app\":\"https://www.codeandweb.com/texturepacker\",\"version\":\"3.0\",\"smartupdate\":\"$TexturePacker:SmartUpdate:ba61676986d5f0644b42ffc9cb24bcbc:35cec0881a55c3ad985060275e37cdb0:3c0964389d78d2adb7a87b342b3489a2$\"}}");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "cdcc376b6027c2de4cbdfc4548cd7f2a.wav";

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "e56290b2c68c49bac7eae16b6bcf6541.wav";

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1f773931aa9072f81b8273bab96041bb.wav";

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "6bc7cb93ee32865311fd02b4f87e49b7.wav";

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "c216475cb96ff846923b59ebc07be2f9.wav";

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "eb37e6dc4e94916abbb539ddf6ecab80.wav";

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "06a14c5a00ebaa0680931008d80ad5dc.wav";

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "7c54b12ec10b79b0e149e1ee41513e70.wav";

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "d9afd229c5423f40913f381f85a458f4.wav";

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "2a3c28241facb5af9ccdea3f405fbbc5.png";

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "d36eadc218a878b06b99bd54439c5f8d.png";

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "e57671968af369e5704da73c7d4416c0.png";

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "b4b68d6d1697b1330b74639c51e10614.png";

/***/ }),
/* 19 */
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
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./sprites/Explosion60fps.json": 2,
	"./sprites/spritesheet1.json": 3,
	"./sprites/spritesheet2.json": 4,
	"./sprites/spritesheet3.json": 5
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
webpackContext.id = 20;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./FaceZapperLogo.png": 0,
	"./audio/CartoonPain/boopPain1.wav": 6,
	"./audio/Incorrect.wav": 7,
	"./audio/Poof.wav": 8,
	"./audio/PowerUp.wav": 9,
	"./audio/ShootBazooka.wav": 10,
	"./audio/ShootPastry.wav": 11,
	"./audio/ShootQuack.wav": 12,
	"./audio/ShootShotgun.wav": 13,
	"./audio/SpaceBulletTheme.wav": 14,
	"./sprites/Explosion60fps.json": 2,
	"./sprites/Explosion60fps.png": 15,
	"./sprites/spritesheet1.json": 3,
	"./sprites/spritesheet1.png": 16,
	"./sprites/spritesheet2.json": 4,
	"./sprites/spritesheet2.png": 17,
	"./sprites/spritesheet3.json": 5,
	"./sprites/spritesheet3.png": 18
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
webpackContext.id = 21;

/***/ }),
/* 22 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 22;

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var scoreHandler_namespaceObject = {};
__webpack_require__.r(scoreHandler_namespaceObject);
__webpack_require__.d(scoreHandler_namespaceObject, "getHighScore", function() { return getHighScore; });
__webpack_require__.d(scoreHandler_namespaceObject, "checkHighScore", function() { return checkHighScore; });

// EXTERNAL MODULE: ./zapper_assets/FaceZapperLogo.png
var FaceZapperLogo = __webpack_require__(0);
var FaceZapperLogo_default = /*#__PURE__*/__webpack_require__.n(FaceZapperLogo);

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
        this.load.image('logo', FaceZapperLogo_default.a);
    },

    create: function ()
    {
        this.scene.start('preloader');
    }

});


// EXTERNAL MODULE: ./node_modules/webfontloader/webfontloader.js
var webfontloader = __webpack_require__(19);
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
    const file = __webpack_require__(1)(`./${dir}${name}${this.postfix}.${ext}`);
    this.scene.load.image(name, file);
  }

  /**
   * Load a spritesheet.
   * @param  {String} name Name of the file.
   * @param  {String} ext  File extension.
   */
  _loadSprite(name, ext) {
    const dir = 'sprites/';
    const file = __webpack_require__(1)(`./${dir}${name}${this.postfix}.${ext}`);
    const data = __webpack_require__(20)(`./${dir}${name}${this.postfix}.json`);
    this.scene.load.atlas(name, file, data);
  }

  /**
   * Load an audio file.
   * @param  {String} name Name of the file.
   * @param  {String} ext  File extension.
   */
  _loadAudio(name, ext) {
    const dir = 'audio/';
    const file = __webpack_require__(21)(`./${dir}${name}.${ext}`);
    this.scene.load.audio(name, file);
  }

  /**
   * Load a bitmap font.
   * @param  {String} name Name of the file.
   * @param  {String} ext  File extension.
   */
  _loadBitmapFont(name, ext) {
    const dir = 'fonts/';
    const file = __webpack_require__(1)(`./${dir}${name}${this.postfix}.${ext}`);
    const data = __webpack_require__(22)(`./${dir}${name}${this.postfix}.xml`);
    this.scene.load.bitmapFont(name, file, data);
  }
}

// CONCATENATED MODULE: ./AssetManifest.js
const AssetManifest = {
    sprites: [
      'spritesheet1.png',
      'spritesheet2.png',
      'spritesheet3.png',
      'Explosion60fps.png'
    ],
    audio: [
      'Incorrect.wav',
      'Poof.wav',
      'PowerUp.wav',
      'ShootBazooka.wav',
      'ShootPastry.wav',
      'ShootQuack.wav',
      'ShootShotgun.wav',
      'SpaceBulletTheme.wav',
      'CartoonPain/boopPain1.wav'
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

            var music = this.sound.add('SpaceBulletTheme', { loop: true });
            music.play();

            this.anims.create({ key: 'AK_Explosion', frames: this.anims.generateFrameNames('spritesheet3', { prefix: 'Bang_', suffix: '.png', start: 1, end: 8, zeroPad: 3 }), hideOnComplete: true });
            this.anims.create({ key: 'Duck_Explosion', frames: this.anims.generateFrameNames('spritesheet3', { prefix: 'Bam_', suffix: '.png', start: 1, end: 8, zeroPad: 3 }), hideOnComplete: true });
            this.anims.create({ key: 'Pie_Explosion', frames: this.anims.generateFrameNames('spritesheet3', { prefix: 'Spoof_', suffix: '.png', start: 1, end: 8, zeroPad: 3 }), hideOnComplete: true });
            
            this.anims.create({ key: 'Bomb_Anim', frames: this.anims.generateFrameNames('Explosion60fps'), hideOnComplete: true });

            WebFont.load({
                active: () => this.scene.start('mainmenu'),
                google: {
                  families: ['Montserrat:700'],
                }
              });
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
            .setTexture('spritesheet2', image)
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
    },

    changeButtonImage: function(button, image) {
        button.setTexture('spritesheet2');
        this.image = image;
        this.hoverImage = hoverImage;
    },
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
        var background = this.add.image(game.config.width/2, game.config.height/2,'spritesheet1','Slicing-102.png');
        background.setDisplaySize(game.config.width, game.config.height);
        
        var text = this.add.image(game.config.width/2, game.config.height/2,'spritesheet1','Avoid-These.png');

        var startButton = this.children.add(new Button(this, 'Slicing-03.png', game.config.width/2, game.config.height + 100));
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
        var background = this.add.image(game.config.width/2, game.config.height/2,'spritesheet1','Slicing-01.png');
        background.setDisplaySize(game.config.width, game.config.height);

        var logo = this.add.image(game.config.width/2, game.config.height/5,'spritesheet2','Slicing-02.png');
        logo.setAlpha(0);

        var startButton = this.children.add(new Button(this, 'Slicing-03.png', game.config.width/2, game.config.height + 100));
        startButton.on('pointerdown', () => this.startGame() );

        var highScoresButton = this.children.add(new Button(this, 'Slicing-16.png', game.config.width/2, game.config.height + 100));
        highScoresButton.on('pointerdown', () => this.highScores() );

        var moreGamesButton = this.children.add(new Button(this, 'Slicing-17.png', game.config.width/2, game.config.height + 100));
        moreGamesButton.on('pointerdown', () => this.moreGames() );

        var animations = new UIAnimations(this);
        animations.fadeIn(logo);      
        animations.moveUp(startButton, game.config.height/2.1, 250, 0);
        animations.moveUp(highScoresButton, game.config.height/1.65, 250, 250);
        animations.moveUp(moreGamesButton,game.config.height/1.35, 250, 500);

        var highScore = scoreHandler_namespaceObject.getHighScore(gameName);
        if (!(highScore === null)){
            var highScoreLabel = this.add.text(game.config.width/2, game.config.height/1.18, 'HIGH-SCORE', { fontFamily: "Montserrat", fontSize: 32, color: '#23B3E1' }).setFontStyle('italic');
            highScoreLabel.setOrigin(0.5);
            highScoreLabel.setAlpha(0);   
            animations.fadeIn2(highScoreLabel);

            var highScoreText = this.add.text(game.config.width/2, game.config.height/1.12, highScore, { fontFamily: "Montserrat", fontSize: 50, color: "#FFFFFF" }).setFontStyle('italic');
            highScoreText.setOrigin(0.5);
            highScoreText.setAlpha(0);   
            animations.fadeIn2(highScoreText);
        }  

        var websiteText = this.add.text(game.config.width/2, game.config.height - 40, 'www.planetboop.com', { fontFamily: "Montserrat", fontSize: 20, color: "#FFFFFF" });
        websiteText.setOrigin(0.5);
        websiteText.setAlpha(0);
        animations.fadeIn(websiteText);
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
var timedEventTarget;
var timedEventBomb;
var timedEventGun;

var Game = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function Game ()
    {
        Phaser.Scene.call(this, { key: 'game' });
        window.GAME = this;
    
        this.game;
        this.globalScene;
        this.targets;
        this.bomb;
        this.gun;

        this.score;
        this.scoreText;
        this.lives;
        this.livesText;

        this.boop;
        
        this.sfxIncorrectHit;
        this.sfxHitExplosion;
        this.sfxShootBazooka;
        this.sfxShootShotgun;
        this.sfxShootPastry;
        this.sfxShootQuack;
        this.sfxShootCurrent;
        this.sfxPowerUp;
        this.sfxBoopPain;

        this.Target = Object.freeze({ Human: 1, Animal: 2, Bomb: 3, Gun: 4 });
    },

    create: function ()
    {
        globalScene = this;
        this.score = 0;
        this.lives = 1;

        this.sfxIncorrectHit = this.sound.add('Incorrect');
        this.sfxHitExplosion = this.sound.add('Poof');
        this.sfxPowerUp = this.sound.add('PowerUp');
        this.sfxBoopPain = this.sound.add('CartoonPain/boopPain1');
        this.sfxShootBazooka = this.sound.add('ShootBazooka');
        this.sfxShootShotgun = this.sound.add('ShootShotgun');
        this.sfxShootPastry = this.sound.add('ShootPastry');
        this.sfxShootQuack = this.sound.add('ShootQuack');

        this.sfxShootCurrent = this.sfxShootBazooka;

        var Guns = { "AK": false, "Duck": false, "Pie": false };
        var GunSfx = { "AK": this.sfxShootShotgun, "Duck": this.sfxShootQuack, "Pie": this.sfxShootPastry };

        this.input.setDefaultCursor('url(../assets/cursor.png) 50 50, pointer');

        var background = this.add.image(game.config.width/2, game.config.height/2,'spritesheet1','Slicing-102.png');
        background.setDisplaySize(game.config.width, game.config.height);

        // var menuButton = this.children.add(new Button(this, 'Slicing-68.png', game.config.width/1.15, game.config.height/12));
        // menuButton.on('pointerdown', () => this.openMenu() );

        // var soundButton = this.children.add(new Button(this, 'Slicing-72.png', game.config.width/8, game.config.height/12));
        // soundButton.status = true;
        // soundButton.on('pointerdown', () => this.toggleSound(soundButton) );

        this.scoreText = this.add.text(game.config.width/2, game.config.height/14, this.score, { fontSize: '32px Montserrat', fill: '#FFF' });
        this.scoreText.setOrigin(0);

        var targets = this.physics.add.group();
        timedEventTarget = this.time.addEvent({ delay: 1000, callback: createTarget, args: [[this.Target.Human, this.Target.Animal]], callbackScope: this, loop: true });
        timedEventBomb = this.time.addEvent({ delay: 5000, callback: createTarget, args: [[this.Target.Bomb]], callbackScope: this, loop: true });
        timedEventGun = this.time.addEvent({ delay: 10000, callback: createTarget, args: [[this.Target.Gun]], callbackScope: this, loop: true });

        this.gun = this.add.sprite(game.config.width/2, game.config.height-game.config.height/8, 'spritesheet1','Gun.png');
        this.gun.rotationOffset = 1.57;
        this.gun.key = "AK";        

        var boop = this.add.sprite(this.gun.x + 50, this.gun.y, 'spritesheet2','Slicing-80.png');

        var bottomBar = this.add.image(game.config.width/2, game.config.height, 'spritesheet1','Black-Rectangle.png');
        bottomBar.y -= bottomBar.displayHeight / 2.2;
        bottomBar.displayWidth = game.config.width;

        var boopIcon = this.add.image(game.config.width, game.config.height, 'spritesheet1','Slicing-87.png');
        boopIcon.y -= boopIcon.displayHeight / 2.2;
        boopIcon.x -= boopIcon.displayWidth / 1.8;

        this.livesText = this.add.text(boopIcon.x/1.2, boopIcon.y, "x" + this.lives, { fontSize: '32px Montserrat', fill: '#FFF' });

        var targetId = 0;

        var gunIcon = [];
        var index = 0;
        for(var key in Guns){
            gunIcon[key] = this.add.sprite((75 + (100 * index++)), bottomBar.y, 'spritesheet3','Btn_' + key + '_BW.png');
        };

        var targetGrid = [];
        for (var i = 0; i < 3; i++){
            var targetSubGrid = []
            for (var j = 0; j < 3; j++) 
                targetSubGrid.push(false);
            targetGrid.push(targetSubGrid);
        }

        function createTarget(args) {

            var paramLength = args.length;

            for (var i=0; i<paramLength; i++){
                createColouredTarget(args[i]);
            }

            function createColouredTarget(targetType){

                var image_number = 0;

                var taken = true;
                while (taken){
                    var i = Phaser.Math.Between(0,2);
                    var j = Phaser.Math.Between(0,2);
                    taken = targetGrid[i][j];
                }
                targetGrid[i][j] = true;

                var x = (i+1) * game.config.width/4 + ((i-1) * 30);
                var y = (j+1) * game.config.height/5 + 50;
               
                var target = targets.create()
                    .setPosition(x, y)
                    .setScale(0,0);
                target.type = targetType;
                target.posI = i;
                target.posJ = j;
                target.isDestroyed = false;
                target.id = targetId;

                var spriteName;

                switch(targetType){
                    case globalScene.Target.Animal: image_number = Phaser.Math.Between(23, 45);
                        spriteName = getSpriteName(image_number);
                        target.setTexture('spritesheet2', spriteName);
                        break;
                    case globalScene.Target.Human: image_number = Phaser.Math.Between(46, 65);
                        spriteName = getSpriteName(image_number);
                        target.setTexture('spritesheet2', spriteName);
                        break;
                    case globalScene.Target.Bomb: image_number = 19;
                        spriteName = getSpriteName(image_number);
                        target.anim = bombAnimation(target);
                        target.setScale(1,1);
                        target.setTexture('spritesheet2', spriteName);
                        break;
                    case globalScene.Target.Gun: target.gun = getNextGun();
                        spriteName = target.gun + '_Panel.png';
                        target.setTexture('spritesheet3', spriteName);
                        break;
                }

                function getSpriteName(image_number){
                    var spriteName = 'Slicing-' + image_number + '.png';
                    return spriteName;
                }

                if (targetType != globalScene.Target.Bomb){
                    globalScene.tweens.add({
                        targets: target,
                        scaleX: 1,
                        scaleY: 1,
                        duration: 500,
                        ease: 'Sine.easeOut',
                        hold: 1000,
                        yoyo:true,
                        completeDelay: 500,
                        onComplete: onTargetAnimComplete,
                        onCompleteParams: [ target ]
                    });
                }
            }
        }

        this.input.on('pointermove', function (pointer) {
            var angle = Phaser.Math.Angle.BetweenPoints(globalScene.gun, pointer) + globalScene.gun.rotationOffset;
            globalScene.gun.rotation = Phaser.Math.Angle.RotateTo(angle);
        
            if (angle > 0) {
                boop.x = globalScene.gun.x - 75;
                boop.setFrame('Slicing-81.png');
            }
            else {
                boop.x = globalScene.gun.x + 75;
                boop.setFrame('Slicing-80.png');
            }
        }, this);

        this.input.on('pointerdown', function (pointer) {
            
            var bullet = this.physics.add.image(globalScene.gun.x, globalScene.gun.y, 'spritesheet3', globalScene.gun.key + '_Projectile_Top.png');
            var angle = Phaser.Math.Angle.BetweenPoints(globalScene.gun, pointer) + 3.14;
            bullet.rotation = Phaser.Math.Angle.RotateTo(angle);

            this.tweens.add({
                targets: bullet,
                x: pointer.x,
                y: pointer.y,
                //ease: 'Sine.easeIn',
                duration: 250,
                paused: false,
                onComplete: onShotTargetReached,
                onCompleteParams: [ bullet ]
            });

            globalScene.sfxShootCurrent.play();

        }, this);

        function onShotTargetReached(_tween, _targets, bullet){

            var hit = null;

            var children = targets.getChildren();
            for(var i=children.length - 1; i >= 0; i--){
                var child = children[i];
                if (checkOverlap(bullet, child))
                {
                    if (child.type == globalScene.Target.Human) increaseScore(10);
                    else if (child.type == globalScene.Target.Animal) { globalScene.decreaseLives(1); globalScene.sfxBoopPain.play(); }
                    else if (child.type == globalScene.Target.Gun) unlockGun(child.gun);
                    else if (child.type == globalScene.Target.Bomb) child.anim.destroy();
                    
                    var hit = child;

                    break;
                }
            };
            
            if (hit != null) {
                destoryTarget(hit);
            }

            globalScene.add.sprite(bullet.x, bullet.y).play(globalScene.gun.key + '_Explosion');
        
            bullet.destroy();

            globalScene.sfxHitExplosion.play();
        }

        function onTargetAnimComplete(tween, targets, image){
            destoryTarget(image);
        }

        function destoryTarget(target){
            if (!target.isDestroyed) {
                targetGrid[target.posI][target.posJ] = false;
                target.isDestroyed = true;
                target.destroy();
            }
        }

        function checkOverlap(spriteA, spriteB) {
            var boundsA = spriteA.getBounds();
            var boundsB = spriteB.getBounds();
        
            return Phaser.Geom.Intersects.RectangleToRectangle(boundsA, boundsB);
        }

        function increaseScore(points){
            globalScene.score += points;
            globalScene.scoreText.setText(globalScene.score);
        }

        function bombAnimation(target){
            var bombAnim = globalScene.add.sprite(target.x, target.y);
            bombAnim.on('animationcomplete', onBombAnimationComplete, this);
            bombAnim.play('Bomb_Anim');

            return bombAnim;

            function onBombAnimationComplete(animation, frame){
                globalScene.add.sprite(target.x, target.y).play('AK_Explosion');
                if (!target.isDestroyed) globalScene.decreaseLives(1);
                destoryTarget(target);
            }
        }

        function getNextGun(){
            for (var key in Guns) {
                if (Guns[key] == false) return key;
            }

            //if all guns have been unlocked
            timedEventGun.remove(false);
            return null;
        }

        function unlockGun(gunKey){
            globalScene.gun.key = gunKey;
            globalScene.gun.setTexture('spritesheet3', gunKey + '_Top.png');
            globalScene.gun.rotationOffset = 3.14;
            Guns[gunKey] = true;
            gunIcon[gunKey].setTexture('spritesheet3','Btn_' + gunKey + '.png');

            globalScene.sfxPowerUp.play();
            globalScene.sfxShootCurrent = GunSfx[gunKey];

            if (gunKey == "Pie") timedEventGun.remove(false);
        }

    },

    update: function (time, delta)
    {
        
    },

    decreaseLives: function(amount){
        this.lives -= amount;
        this.livesText.setText('x' + globalScene.lives);
    
        if (this.lives <= 0) this.gameOver();
    },

    gameOver: function(){
        globalScene.scene.start('gameover', { score: globalScene.score});
    },

    toggleSound: function(soundButton){
        if (soundButton.status == true){
            soundButton.changeButtonImage(soundButton,'Slicing-75.png')
            soundButton.status = false;
        }
        else{
            soundButton.changeButtonImage(soundButton,'Slicing-72.png')
            soundButton.status = true;
        }
    },

    openMenu: function() {
        this.scene.start('mainmenu');
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
        var background = this.add.image(game.config.width/2, game.config.height/2,'spritesheet1','Slicing-01.png');
        background.setDisplaySize(game.config.width, game.config.height);

        var board = this.add.image(game.config.width/2, game.config.height/2.5, 'spritesheet2','Slicing-90.png');

        var titleSign = this.add.image(game.config.width/2, 0, 'spritesheet2','Slicing-89.png');
        titleSign.y += titleSign.displayHeight/2;

        var scoreLabel = this.add.text(game.config.width/2, board.y - board.displayHeight/4, 'YOUR SCORE', { fontFamily: "Montserrat", fontSize: 40, color: "#59a115" }).setFontStyle('italic');
        scoreLabel.setOrigin(0.5);
        scoreLabel.setAlpha(0);

        var scoreText = this.add.text(game.config.width/2, scoreLabel.y + 50, this.score, { fontFamily: "Montserrat", fontSize: 50, color: "#FFFFFF" }).setFontStyle('italic');
        scoreText.setOrigin(0.5);
        scoreText.setAlpha(0);

        var boop = this.add.sprite(game.config.width/2, game.config.height/1.89, 'spritesheet2','Slicing-91.png');
        boop.setAlpha(0);    

        var restartButton = this.children.add(new Button(this, 'Slicing-95.png', game.config.width/2.7, game.config.height + 100));
        restartButton.on('pointerdown', () => this.startGame() );

        var menuButton = this.children.add(new Button(this, 'Slicing-94.png', game.config.width/1.55, game.config.height + 100));
        menuButton.on('pointerdown', () => this.openMenu() );

        board.setScale(0,0);
        titleSign.y -= titleSign.height;

        var animations = new UIAnimations(this);
        animations.growIn(board);
        animations.fallDown(titleSign);
        animations.fadeIn2(boop);
        animations.fadeIn2(scoreLabel);
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


// CONCATENATED MODULE: ./src/zapper.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "game", function() { return game; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gameName", function() { return gameName; });







var game;
var gameName = "zapper";

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
            default: 'arcade',
            arcade: {
                gravity: { y: 0 },
                debug: false
            }
        },
        scene: [ Boot, Preloader, HowToPlay, MainMenu, Game, GameOver ]
    };
    game = new Phaser.Game(config);
    resize();
    window.addEventListener("resize", resize, false);
}



/***/ })
/******/ ]);