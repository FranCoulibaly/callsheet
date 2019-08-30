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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var path = __webpack_require__(/*! path */ \"path\");\n\nvar express = __webpack_require__(/*! express */ \"express\");\n\nvar bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\n\nvar fs = __webpack_require__(/*! fs */ \"fs\");\n\nvar passbook = __webpack_require__(/*! passbook */ \"passbook\");\n\nvar request = __webpack_require__(/*! request */ \"request\");\n\nvar _require = __webpack_require__(/*! express-validator */ \"express-validator\"),\n    body = _require.body,\n    validationResult = _require.validationResult,\n    sanitizeBody = _require.sanitizeBody;\n\nvar app = express(),\n    DIST_DIR = __dirname,\n    HTML_FILE = path.join(DIST_DIR, './index.html');\napp.use(express.static(DIST_DIR));\napp.use(bodyParser.json());\nvar PORT = process.env.PORT || 8080;\napp.use(bodyParser.urlencoded({\n  extended: false\n}));\nvar template = passbook('generic', {\n  formatVersion: 1,\n  passTypeIdentifier: 'pass.com.heyhoney.callsheet',\n  teamIdentifier: 'XF23477D9L',\n  webServiceURL: \"https://heyhoney.nl\",\n  authenticationToken: \"vxwxd7J8AlNNFPS8k0a0FfUFtq0ewzFdc\",\n  organizationName: 'hey honey',\n  description: 'callsheet'\n});\ntemplate.loadImagesFrom('./images');\ntemplate.fields.barcode = {\n  'format': 'PKBarcodeFormatPDF417',\n  'message': '123456789',\n  'messageEncoding': 'iso-8859-1'\n};\ntemplate.keys('./keys', 'Brae18-hello');\napp.post(\"/callsheet\", function (request, response) {\n  var form = request.body;\n  var primaryValue = form.primaryValue;\n  var num = 1;\n  var clientLogo = form.clientLogo;\n  var location1 = form.location1;\n  var location2 = form.location2;\n  var location3 = form.location3;\n  var location4 = form.location4;\n  var time1 = form.time1;\n  var time2 = form.time2;\n  var time3 = form.time3;\n  var time4 = form.time4;\n  var crewName1 = form.crewName1;\n  var crewName2 = form.crewName2;\n  var crewName3 = form.crewName3;\n  var crewName4 = form.crewName4;\n  var crewName5 = form.crewName5;\n  var crewName6 = form.crewName6;\n  var crewName7 = form.crewName7;\n  var crewName8 = form.crewName8;\n  var crewName9 = form.crewName9;\n  var crewName10 = form.crewName10;\n  var crewTitle1 = form.crewTitle1;\n  var crewTitle2 = form.crewTitle2;\n  var crewTitle3 = form.crewTitle3;\n  var crewTitle4 = form.crewTitle4;\n  var crewTitle5 = form.crewTitle5;\n  var crewTitle6 = form.crewTitle6;\n  var crewTitle7 = form.crewTitle7;\n  var crewTitle8 = form.crewTitle8;\n  var crewTitle9 = form.crewTitle9;\n  var crewTitle10 = form.crewTitle10;\n  var crewNumber1 = form.crewNumber1;\n  var crewNumber2 = form.crewNumber2;\n  var crewNumber3 = form.crewNumber3;\n  var crewNumber4 = form.crewNumber4;\n  var crewNumber5 = form.crewNumber5;\n  var crewNumber6 = form.crewNumber6;\n  var crewNumber7 = form.crewNumber7;\n  var crewNumber8 = form.crewNumber8;\n  var crewNumber9 = form.crewNumber9;\n  var crewNumber10 = form.crewNumber10;\n  var comments = form.comments;\n  var insurance = form.insurance;\n  var serialNumber = form.serialNumber;\n  var crewNumber = request.body.name;\n  template.fields.serialNumber = serialNumber;\n  var pass = template.createPass({\n    // serialNumber: serialNumber,\n    generic: {}\n  });\n  pass.fields.logoText = \" Client: \" + clientLogo;\n  pass.primaryFields.add({\n    key: \"callsheet\",\n    label: \"Project\",\n    value: primaryValue\n  });\n  pass.secondaryFields.add({\n    key: \"location 1\",\n    label: location1,\n    value: time1\n  });\n  pass.secondaryFields.add({\n    key: \"location 2\",\n    label: location2,\n    value: time2\n  });\n  pass.auxiliaryFields.add({\n    key: \"location 3\",\n    label: location3,\n    value: time3\n  });\n  pass.auxiliaryFields.add({\n    key: \"location 4\",\n    label: location4,\n    value: time4\n  });\n\n  if (crewName1 != \"\" && crewName1 != undefined) {\n    pass.backFields.add({\n      key: \"crew1\",\n      label: crewTitle1,\n      value: crewName1 + \" \" + crewNumber1\n    });\n  }\n\n  if (crewName2 != \"\" && crewName2 != undefined) {\n    pass.backFields.add({\n      key: \"crew2\",\n      label: crewTitle2,\n      value: crewName2 + \" \" + crewNumber2\n    });\n  }\n\n  if (crewName3 != \"\" && crewName3 != undefined) {\n    pass.backFields.add({\n      key: \"crew3\",\n      label: crewTitle3,\n      value: crewName3 + \" \" + crewNumber3\n    });\n  }\n\n  if (crewName4 != \"\" && crewName4 != undefined) {\n    pass.backFields.add({\n      key: \"crew4\",\n      label: crewTitle4,\n      value: crewName4 + \" \" + crewNumber4\n    });\n  }\n\n  if (crewName5 != \"\" && crewName5 != undefined) {\n    pass.backFields.add({\n      key: \"crew5\",\n      label: crewTitle5,\n      value: crewName5 + \" \" + crewNumber5\n    });\n  }\n\n  if (crewName6 != \"\" && crewName6 != undefined) {\n    pass.backFields.add({\n      key: \"crew6\",\n      label: crewTitle6,\n      value: crewName6 + \" \" + crewNumber6\n    });\n  }\n\n  if (crewName7 != \"\" && crewName7 != undefined) {\n    pass.backFields.add({\n      key: \"crew7\",\n      label: crewTitle7,\n      value: crewName7 + \" \" + crewNumber7\n    });\n  }\n\n  if (crewName8 != \"\" && crewName8 != undefined) {\n    pass.backFields.add({\n      key: \"crew8\",\n      label: crewTitle8,\n      value: crewName8 + \" \" + crewNumber8\n    });\n  }\n\n  if (crewName9 != \"\" && crewName9 != undefined) {\n    pass.backFields.add({\n      key: \"crew9\",\n      label: crewTitle9,\n      value: crewName9 + \" \" + crewNumber9\n    });\n  }\n\n  if (crewName10 != \"\" && crewName10 != undefined) {\n    pass.backFields.add({\n      key: \"crew10\",\n      label: crewTitle10,\n      value: crewName10 + \" \" + crewNumber10\n    });\n  }\n\n  if (comments != \"\") {\n    pass.backFields.add({\n      key: \"comments\",\n      label: \"Comments\",\n      value: comments\n    });\n  }\n\n  if (insurance != \"\") {\n    pass.backFields.add({\n      key: \"insurance\",\n      label: \"Insurance Company & Policy Number\",\n      value: insurance\n    });\n  }\n\n  console.log(\"crew: \" + crewTitle3);\n  var file = fs.createWriteStream(\"callsheet.pkpass\");\n  pass.on(\"error\", function (error) {\n    console.error(error);\n    process.exit(1);\n  });\n  pass.pipe(file);\n  pass.render(response, function (error) {\n    if (error) {\n      console.error(error);\n    }\n\n    ;\n  });\n});\napp.listen(PORT, function () {\n  console.log(\"App listening to \".concat(PORT, \"....\"));\n  console.log('Press Ctrl+C to quit.');\n});\n\n//# sourceURL=webpack:///./src/server/server.js?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-validator":
/*!************************************!*\
  !*** external "express-validator" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-validator\");\n\n//# sourceURL=webpack:///external_%22express-validator%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "passbook":
/*!***************************!*\
  !*** external "passbook" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passbook\");\n\n//# sourceURL=webpack:///external_%22passbook%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "request":
/*!**************************!*\
  !*** external "request" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"request\");\n\n//# sourceURL=webpack:///external_%22request%22?");

/***/ })

/******/ });