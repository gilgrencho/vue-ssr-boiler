module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

module.exports = require("vue");

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.store = exports.router = exports.app = undefined;

var _vue = __webpack_require__(0);

var _vue2 = _interopRequireDefault(_vue);

var _store = __webpack_require__(3);

var _store2 = _interopRequireDefault(_store);

var _router = __webpack_require__(2);

var _router2 = _interopRequireDefault(_router);

var _Root = __webpack_require__(6);

var _Root2 = _interopRequireDefault(_Root);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { sync } from 'vuex-router-sync'

// sync(store, router)

/*
 *  The main app bootstrapper
 */
var app = new _vue2.default(_vue2.default.util.extend({ store: _store2.default, router: _router2.default }, _Root2.default));

exports.app = app;
exports.router = _router2.default;
exports.store = _store2.default;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(0);

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = __webpack_require__(10);

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _index = __webpack_require__(7);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vueRouter2.default);

exports.default = new _vueRouter2.default({
    mode: 'hash',
    scrollBehavior: function scrollBehavior() {
        return { y: 0 };
    },
    routes: [{
        path: '/',
        component: _index2.default
    }]
});

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(0);

var _vue2 = _interopRequireDefault(_vue);

var _vuex = __webpack_require__(11);

var _vuex2 = _interopRequireDefault(_vuex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vuex2.default);

var store = new _vuex2.default.Store({
    state: {
        todos: {}
    },

    actions: {
        getTodos: function getTodos(_ref) {
            var commit = _ref.commit;

            // do API call to get the todos
            var todos = {
                1: { text: 'Go get some groceries', done: false },
                2: { text: 'Go make some money', done: false }
            };
            commit('SET_TODOS', todos);
        },
        removeTodo: function removeTodo(_ref2, id) {
            var commit = _ref2.commit;

            return new Promise(function (resolve, reject) {
                commit('DELETE_TODO', id);
                resolve();
            });
        }
    },

    mutations: {
        SET_TODOS: function SET_TODOS(state, todos) {
            state.todos = todos;
        },
        DELETE_TODO: function DELETE_TODO(state, id) {
            delete state.todos[id];
        }
    }
});

exports.default = store;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//

exports.default = {
    name: 'root'
};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


function getTodos(store) {
    store.dispatch('getTodos');
}

exports.default = {
    name: 'home-index',
    computed: {
        todos: function todos() {
            return this.$store.state.todos;
        }
    },
    preFetch: getTodos,
    beforeMount: function beforeMount() {
        getTodos(this.$store);
    }
};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */

/* script */
__vue_exports__ = __webpack_require__(4)

/* template */
var __vue_template__ = __webpack_require__(8)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */

/* script */
__vue_exports__ = __webpack_require__(5)

/* template */
var __vue_template__ = __webpack_require__(9)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}

__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

module.exports = __vue_exports__


/***/ },
/* 8 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('router-view')], 1)
},staticRenderFns: []}

/***/ },
/* 9 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-s-12"
  }, [_vm._v("\n            Homepage!!!!!!!!\n\n            "), _c('ul', _vm._l((_vm.todos), function(todo) {
    return _c('li', [_vm._v("\n                    " + _vm._s(todo.text) + "\n                ")])
  }))])])])
},staticRenderFns: []}

/***/ },
/* 10 */
/***/ function(module, exports) {

module.exports = require("vue-router");

/***/ },
/* 11 */
/***/ function(module, exports) {

module.exports = require("vuex");

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _main = __webpack_require__(1);

exports.default = function (context) {
  /*
   *  The url from the server is pushed in the router
   *  so we can check for matched components
   */
  _main.router.push(context.url);
  var matchedComponents = _main.router.getMatchedComponents();

  /*
   *  If nothing mathes, we return a 404
   */
  if (!matchedComponents.length) {
    return Promise.reject({ code: '404' });
  }

  /*
   *  Otherwise we return a promise in which we prefetch all data for each matched component.
   */
  return Promise.all(matchedComponents.map(function (component) {
    if (component.preFetch) {
      return component.preFetch(_main.store);
    }
  })).then(function () {
    /*
     *  After all preFetch hooks are resolved, our store is now
     *  filled with the state needed to render the app.
     *  Expose the state on the render context, and let the request handler
     *  inline the state in the HTML response. This allows the client-side
     *  store to pick-up the server-side state without having to duplicate
     *  the initial data fetching on the client.
     */
    context.initialState = _main.store.state;
    return _main.app;
  });
}; /*
    *  The entry point for the server
    *  Will check the matching components for the current route
    *  Set the initial state
    *  Then serve the HTML for those components
    */

/***/ }
/******/ ]);