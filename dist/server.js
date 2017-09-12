module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
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
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 43);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = Object.create(options.computed || null)
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
    options.computed = computed
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = {"settingFoo":true,"settingBar":false};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap) {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
  var base64 = new Buffer(JSON.stringify(sourceMap)).toString('base64');
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

  return '/*# ' + data + ' */';
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var listToStyles = __webpack_require__(37)

module.exports = function (parentId, list, isProduction, context) {
  if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
    context = __VUE_SSR_CONTEXT__
  }
  if (context) {
    if (!context.hasOwnProperty('styles')) {
      Object.defineProperty(context, 'styles', {
        enumberable: true,
        get: function() {
          return renderStyles(context._styles)
        }
      })
    }

    var styles = context._styles || (context._styles = {})
    list = listToStyles(parentId, list)
    if (isProduction) {
      addStyleProd(styles, list)
    } else {
      addStyleDev(styles, list)
    }
  }
}

// In production, render as few style tags as possible.
// (mostly because IE9 has a limit on number of style tags)
function addStyleProd (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      // group style tags by media types.
      var id = part.media || 'default'
      var style = styles[id]
      if (style) {
        if (style.ids.indexOf(part.id) < 0) {
          style.ids.push(part.id)
          style.css += '\n' + part.css
        }
      } else {
        styles[id] = {
          ids: [part.id],
          css: part.css,
          media: part.media
        }
      }
    }
  }
}

// In dev we use individual style tag for each module for hot-reload
// and source maps.
function addStyleDev (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      styles[part.id] = {
        ids: [part.id],
        css: part.css,
        media: part.media
      }
    }
  }
}

function renderStyles (styles) {
  var css = ''
  for (var key in styles) {
    var style = styles[key]
    css += '<style data-vue-ssr-id="' + style.ids.join(' ') + '"' +
        (style.media ? ( ' media="' + style.media + '"' ) : '') + '>' +
        style.css + '</style>'
  }
  return css
}


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_router__);



// can't put import() here, because node will complain "SyntaxError: Unexpected token import"
var _import = __webpack_require__(15);

__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vue_router___default.a);

var routes = [{ path: '/', component: _import('Index') }, { path: '/foo/:id', name: 'foo', component: _import('Foo') }, { path: '/show-error-page', component: _import('ShowErrorPage') }, { path: '/posts', component: _import('Posts') }, { path: '/posts/:code', name: 'post', component: _import('Post') }];

if (false) {
  routes.push(
  // catch-all route must be placed at the last
  { path: '*', component: _import('HTTP404') });
}

/* harmony default export */ __webpack_exports__["a"] = new __WEBPACK_IMPORTED_MODULE_1_vue_router___default.a({
  mode: 'history',
  routes: routes
});

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vuex__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_http_service__ = __webpack_require__(16);




__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vuex___default.a);

/* harmony default export */ __webpack_exports__["a"] = new __WEBPACK_IMPORTED_MODULE_1_vuex___default.a.Store({
  state: {
    count: 0,
    items: [],
    tags: [],
    item: {}
  },

  mutations: {
    increment: function increment(state) {
      state.count++;
    },
    setItems: function setItems(state, _ref) {
      var data = _ref.data;

      state.items = data;
    },
    setTags: function setTags(state, _ref2) {
      var data = _ref2.data;

      state.tags = data;
    },
    setItem: function setItem(state, _ref3) {
      var data = _ref3.data;

      state.item = data;
      state.title = data.name;
      state.description = data.description;
    }
  },

  actions: {
    fetchItems: function fetchItems(_ref4) {
      var commit = _ref4.commit;

      return __WEBPACK_IMPORTED_MODULE_2__services_http_service__["a" /* HTTP */].get('article?page=1&limit=100').then(function (response) {
        commit('setItems', response);
      });
    },
    fetchTags: function fetchTags(_ref5) {
      var commit = _ref5.commit;

      return __WEBPACK_IMPORTED_MODULE_2__services_http_service__["a" /* HTTP */].get('tag?page=1&limit=10&is_root=1').then(function (response) {
        __WEBPACK_IMPORTED_MODULE_2__services_http_service__["a" /* HTTP */].get('article/code/novaya-kollekciya-trussardi-jeans').then(function (article) {
          commit('setTags', response);
          commit('setItem', article);
        });
      });
    },
    fetchItem: function fetchItem(_ref6, code) {
      var commit = _ref6.commit;

      return __WEBPACK_IMPORTED_MODULE_2__services_http_service__["a" /* HTTP */].get('article/code/' + code).then(function (response) {
        commit('setItem', response);
      });
    },
    asyncIncrement: function asyncIncrement(_ref7) {
      var commit = _ref7.commit;

      return new Promise(function (resolve) {
        setTimeout(function () {
          commit('increment');
          resolve();
        });
      });
    }
  }
});

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(8),
  /* template */
  __webpack_require__(32),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/asolovyev/WebstormProjects/CMS/vue-ssr-boilerplate/src/App.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] App.vue: functional components are not supported with templates, they should use render functions.")}

module.exports = Component.exports


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__registerGlobals__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vue_meta__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vue_meta___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_vue_meta__);
//
//
//
//
//
//







__WEBPACK_IMPORTED_MODULE_1_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_4_vue_meta___default.a);

/* harmony default export */ __webpack_exports__["default"] = {
  router: __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */],
  store: __WEBPACK_IMPORTED_MODULE_3__store__["a" /* default */],
  metaInfo: {
    title: 'Default Title',
    titleTemplate: '%s - Company Name'
  }
};

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__(2);
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
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = {
  data: function data() {
    return {
      items: [],
      title: '',
      description: '',
      id: 0,
      config: null
    };
  },
  metaInfo: function metaInfo() {
    return {
      title: this.title,
      meta: [{ vmid: 'description', name: 'description', content: this.description }]
    };
  },
  prefetch: function prefetch(route, store) {
    return Promise.all([new Promise(function (resolve) {
      setTimeout(function () {
        resolve({
          title: 'title async loaded',
          description: 'description async loaded',
          id: route.params.id
        });
      });
    }), store.dispatch('fetchItem'), store.dispatch('asyncIncrement')]).then(function (_ref) {
      var componentData = _ref[0];
      return componentData;
    });
  },


  // won't run on server side
  beforeMount: function beforeMount() {
    console.log(this.a); //eslint-disable-line

    /*
    can not be defined in data(),
    because the TARGET is different between server side (TARGET: node) and client side (TARGET: web)
    and this will cause the client-side rendered virtual DOM tree not matching server-rendered content
    */
    this.config = JSON.stringify(__WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */], null, 2);
  }
};

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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

/* harmony default export */ __webpack_exports__["default"] = {
  data: function data() {
    return {
      a: 0
    };
  },


  metaInfo: {
    title: 'Vue SSR Boilerplate',
    meta: [{ vmid: 'description', name: 'description', content: 'Vue SSR Boilerplate' }]
  },

  prefetch: function prefetch() {
    return Promise.resolve({
      a: 123
    });
  },


  // will be called on server side. check your console
  created: function created() {
    //console.log(this.a) //eslint-disable-line
  },


  // won't run on server side
  beforeMount: function beforeMount() {
    //console.log(this.a) //eslint-disable-line
  }
};

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__(2);
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




/* harmony default export */ __webpack_exports__["default"] = {
  data: function data() {
    return {
      name: '',
      preview_text: '',
      code: '',
      config: null
    };
  },
  asyncData: function asyncData(_ref) {
    var store = _ref.store,
        route = _ref.route;

    // возвращаем Promise из действия
    if (route.params.code) {
      return store.dispatch('fetchItem', route.params.code);
    }
  },


  computed: {
    // отображаем элемент из состояния хранилища.
    item: function item() {
      return this.$store.state.item;
    }
  },

  metaInfo: function metaInfo() {
    return {
      title: this.title,
      meta: [{ vmid: 'description', name: 'description', content: this.description }]
    };
  },
  prefetch: function prefetch(route, store) {
    return Promise.all([new Promise(function (resolve) {
      setTimeout(function () {
        resolve({
          title: 'title async loaded',
          description: 'description async loaded',
          code: route.params.code
        });
      });
    }), store.dispatch('fetchItem', route.params.code), store.dispatch('asyncIncrement')]).then(function (_ref2) {
      var componentData = _ref2[0];
      return componentData;
    });
  },


  // won't run on server side
  beforeMount: function beforeMount() {
    /*
    can not be defined in data(),
    because the TARGET is different between server side (TARGET: node) and client side (TARGET: web)
    and this will cause the client-side rendered virtual DOM tree not matching server-rendered content
    */
    this.item = {};
    this.config = JSON.stringify(__WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */], null, 2);
  }
};

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config__ = __webpack_require__(2);
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
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = {
  data: function data() {
    return {
      config: null
    };
  },
  metaInfo: function metaInfo() {
    return {
      title: this.title,
      meta: [{ vmid: 'description', name: 'description', content: this.description }]
    };
  },


  computed: {
    // отображаем элемент из состояния хранилища.
    title: function title() {
      return this.$store.state.item.name;
    },
    description: function description() {
      return this.$store.state.item.description;
    }
  },

  prefetch: function prefetch(route, store) {
    return Promise.all([store.dispatch('fetchItems'), store.dispatch('fetchTags'),
    //store.dispatch('fetchItem', 'raf-simons-inspiration'),
    store.dispatch('asyncIncrement')]).then(function (_ref) {
      var componentData = _ref[0];
      return componentData;
    });
  },


  // won't run on server side
  beforeMount: function beforeMount() {
    /*
    can not be defined in data(),
    because the TARGET is different between server side (TARGET: node) and client side (TARGET: web)
    and this will cause the client-side rendered virtual DOM tree not matching server-rendered content
    */
    this.config = JSON.stringify(__WEBPACK_IMPORTED_MODULE_0__config__["a" /* default */], null, 2);
  }
};

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = {
  data: function data() {
    return {
      foo: 0
    };
  },
  prefetch: function prefetch() {
    return Promise.reject();
  },
  beforeMount: function beforeMount() {
    this.prefetched.catch(function () {
      alert('500 Internal Server Error');
    });
  }
};

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_ssrMixin__ = __webpack_require__(17);
// Register global mixins, components, etc only once




if (!__WEBPACK_IMPORTED_MODULE_0_vue___default.a.globalsRegistered) {
  __WEBPACK_IMPORTED_MODULE_0_vue___default.a.globalsRegistered = true;
  __WEBPACK_IMPORTED_MODULE_0_vue___default.a.mixin(__WEBPACK_IMPORTED_MODULE_1__shared_ssrMixin__["a" /* default */]);
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function (file) {
  return __webpack_require__(38)("./" + file + '.vue');
};

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HTTP; });


var HTTP = __WEBPACK_IMPORTED_MODULE_0_axios___default.a.create({
  baseURL: 'http://www.gq.ru/api/',
  headers: {
    Authorization: 'Bearer {token}'
  }
});

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = {
  created: function created() {
    var _this = this;

    if (false) {
      if (window.__INITIAL_COMPONENTS_STATE__ & this.$router) {
        var matched = this.$router.getMatchedComponents();
        if (!matched.length) return;

        matched.forEach(function (component, i) {
          component.__INITIAL_STATE__ = window.__INITIAL_COMPONENTS_STATE__[i];
        });
        window.__INITIAL_COMPONENTS_STATE__ = null;
      }
    }

    if (this.constructor.extendOptions && this.constructor.extendOptions.__INITIAL_STATE__) {
      Object.assign(this.$data, this.constructor.extendOptions.__INITIAL_STATE__);
      this.prefetched = Promise.resolve(this.constructor.extendOptions.__INITIAL_STATE__);
      this.constructor.extendOptions.__INITIAL_STATE__ = null;
    } else if (this.$options.prefetch) {
      this.prefetched = this.$options.prefetch(this.$route, this.$store).then(function (data) {
        Object.assign(_this.$data, data);
        return data;
      });
    }
  }
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, "\n.post__title {\n  color: green;\n}\n.post__body {\n  color: #333;\n}\n", ""]);

// exports


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, "\n.post__title {\n  color: green;\n}\n.post__body {\n  color: #ccc;\n}\n", ""]);

// exports


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, "\nbody {\n  font-family: 'Open Sans', sans-serif;\n  font-size: 14px;\n  line-height: 1.42857143;\n}\nh1 {\n  font-size: 2em;\n  color: #5288d0;\n}\n.list {\n  background: #efeee9;\n  padding: 5px;\n}\n.list__name {\n    color: #5288d0;\n    display: block;\n    margin-bottom: 5px;\n}\n.list__item {\n    background: #fff;\n    padding: 10px;\n    margin-bottom: 5px;\n}\n.tags__name {\n  color: #5288d0;\n  display: block;\n  margin-bottom: 5px;\n}\n.tags__item {\n  display: inline-block;\n  padding: 0 10px;\n  background: #000;\n  color: #fff;\n  line-height: 30px;\n  vertical-align: top;\n  margin-right: 5px;\n}\n", ""]);

// exports


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(34)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(9),
  /* template */
  __webpack_require__(27),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/asolovyev/WebstormProjects/CMS/vue-ssr-boilerplate/src/views/Foo.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Foo.vue: functional components are not supported with templates, they should use render functions.")}

module.exports = Component.exports


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  null,
  /* template */
  __webpack_require__(30),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/asolovyev/WebstormProjects/CMS/vue-ssr-boilerplate/src/views/HTTP404.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] HTTP404.vue: functional components are not supported with templates, they should use render functions.")}

module.exports = Component.exports


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(10),
  /* template */
  __webpack_require__(31),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/asolovyev/WebstormProjects/CMS/vue-ssr-boilerplate/src/views/Index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Index.vue: functional components are not supported with templates, they should use render functions.")}

module.exports = Component.exports


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(35)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(11),
  /* template */
  __webpack_require__(28),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/asolovyev/WebstormProjects/CMS/vue-ssr-boilerplate/src/views/Post.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Post.vue: functional components are not supported with templates, they should use render functions.")}

module.exports = Component.exports


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(36)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(12),
  /* template */
  __webpack_require__(29),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/asolovyev/WebstormProjects/CMS/vue-ssr-boilerplate/src/views/Posts.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Posts.vue: functional components are not supported with templates, they should use render functions.")}

module.exports = Component.exports


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(13),
  /* template */
  __webpack_require__(33),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/asolovyev/WebstormProjects/CMS/vue-ssr-boilerplate/src/views/ShowErrorPage.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] ShowErrorPage.vue: functional components are not supported with templates, they should use render functions.")}

module.exports = Component.exports


/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "foo"
  }, [_c('div', {
    staticClass: "test"
  }, [_vm._v("this is pug template")]), _c('p', [_vm._v("this.id: " + _vm._s(_vm.id))]), _c('p', [_vm._v("this.$store.state.count: " + _vm._s(_vm.$store.state.count))]), _c('p', [_vm._v("Enviroment Variables Defined by webpack.DefinePlugin:")]), _c('pre', [_vm._v("\\n" + _vm._s(_vm.config))]), _c('p', [_c('router-link', {
    attrs: {
      "to": "/"
    }
  }, [_vm._v("goto /")])], 1), _vm._l((_vm.$store.state.items), function(post) {
    return _c('div', {
      staticClass: "post"
    }, [_c('h3', {
      staticClass: "post__title"
    }, [_vm._v(_vm._s(post.title))]), _c('p', {
      staticClass: "post__body"
    }, [_vm._v(_vm._s(post.body))])])
  })], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.item) ? _c('div', {
    staticClass: "post"
  }, [_c('div', {
    staticClass: "test"
  }, [_vm._v("post")]), _c('div', [_c('h1', {
    staticClass: "post__title"
  }, [_vm._v(_vm._s(_vm.item.name))]), _c('div', {
    staticClass: "post__body"
  }, [_vm._v(_vm._s(_vm.item.preview_text))])])]) : _vm._e()
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('h1', [_vm._v("vue-ssr-boilerplate")]), _c('hr'), _c('div', [_c('strong', {
    staticClass: "list__name"
  }, [_vm._v("Article:")]), _c('h2', {
    domProps: {
      "innerHTML": _vm._s(_vm.$store.state.item.name)
    }
  }), _c('p', {
    domProps: {
      "innerHTML": _vm._s(_vm.$store.state.item.preview_text)
    }
  })]), _c('hr'), _c('div', {
    staticClass: "tags"
  }, [_c('strong', {
    staticClass: "tags__name"
  }, [_vm._v("Tags:")]), _vm._l((_vm.$store.state.tags), function(tag) {
    return _c('div', {
      staticClass: "tags__item"
    }, [_c('span', [_vm._v(_vm._s(tag.name))])])
  })], 2), _c('hr'), _c('div', {
    staticClass: "list"
  }, [_c('strong', {
    staticClass: "list__name"
  }, [_vm._v("List:")]), _vm._l((_vm.$store.state.items), function(post) {
    return _c('div', {
      staticClass: "list__item"
    }, [_c('h3', {
      domProps: {
        "innerHTML": _vm._s(post.name)
      }
    }), _c('p', [_vm._v(_vm._s(post.preview_text))]), _c('img', {
      attrs: {
        "src": post.image.preview_url
      }
    })])
  })], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "http404"
  }, [_c('p', [_vm._v("404 Not Found")])])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "foo"
  }, [_c('p', [_vm._v("Hello world!")]), _vm._v(" "), _c('p', [_vm._v("this.a: " + _vm._s(_vm.a))]), _vm._v(" "), _c('p', [_c('router-link', {
    attrs: {
      "to": {
        name: 'foo',
        params: {
          id: 123
        }
      }
    }
  }, [_vm._v("goto /foo/123")])], 1), _vm._v(" "), _c('p', [_c('router-link', {
    attrs: {
      "to": "/page-not-exist"
    }
  }, [_vm._v("goto /page-not-exist")])], 1), _vm._v(" "), _c('p', [_c('router-link', {
    attrs: {
      "to": "/show-error-page"
    }
  }, [_vm._v("goto /show-error-page")])], 1), _vm._v(" "), _c('p', [_c('router-link', {
    attrs: {
      "to": "/posts"
    }
  }, [_vm._v("posts")])], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('router-view')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "show-error-page"
  })
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(18);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(4)("305b81cc", content, false)

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(19);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(4)("5e8addc4", content, false)

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(20);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(4)("cfa13c48", content, false)

/***/ }),
/* 37 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Foo.vue": 21,
	"./HTTP404.vue": 22,
	"./Index.vue": 23,
	"./Post.vue": 24,
	"./Posts.vue": 25,
	"./ShowErrorPage.vue": 26
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 38;


/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("vue-meta");

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("vue-router");

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("vuex");

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App_vue__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store__ = __webpack_require__(6);





/* harmony default export */ __webpack_exports__["default"] = function (context) {
  __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */].push(context.url);

  var matchedComponents = __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */].getMatchedComponents();

  // no matched routes
  if (!matchedComponents.length) return Promise.reject({ code: '404' });

  // Call prefetch hooks on components matched by the route.
  return Promise.all(matchedComponents.map(function (component) {
    if (component.prefetch) {
      return component.prefetch(__WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */].currentRoute, __WEBPACK_IMPORTED_MODULE_3__store__["a" /* default */]).then(function (data) {
        component.__INITIAL_STATE__ = data;
        return data;
      });
    } else {
      return null;
    }
  })).then(function (initialComponentsState) {
    context.initialComponentsState = initialComponentsState;
    context.initialVuexState = __WEBPACK_IMPORTED_MODULE_3__store__["a" /* default */].state;
    var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__App_vue___default.a);
    context.meta = app.$meta();
    return app;
  });
};

/***/ })
/******/ ]);