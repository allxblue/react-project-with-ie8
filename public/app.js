webpackJsonp([0],{0:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}var o=r(1),u=n(o),i=r(153),a=r(154),c=r(180),f=r(237),l=n(f),s=r(239),d=r(247),p=window.__initialState__||void 0,v=(0,s.configureStore)(c.browserHistory,p);(0,l["default"])(c.browserHistory,v);window._log={info:function(){},test:function(){},api:function(){},debug:function(){}},(0,i.render)(u["default"].createElement(a.Provider,{store:v},u["default"].createElement(d.Home,null)),document.getElementById("af-react"))},237:function(e,t,r){"use strict";function n(e,t){var r=arguments.length<=2||void 0===arguments[2]?{}:arguments[2],n=r.selectLocationState,a=void 0===n?i:n,c=r.adjustUrlOnReplay,f=void 0===c||c;if("undefined"==typeof a(t.getState()))throw new Error("Expected the routing state to be available either as `state.routing` or as the custom expression you can specify as `selectLocationState` in the `syncHistoryWithStore()` options. Ensure you have added the `routerReducer` to your store's reducers via `combineReducers` or whatever method you use to isolate your reducers.");var l=void 0,s=void 0,d=void 0,p=void 0,v=function(e){var r=a(t.getState());return r.locationBeforeTransitions||(e?l:void 0)},y=v();if(f){var _=function(){var t=v(!0);y!==t&&(s=!0,y=t,e.transitionTo(o({},t,{action:"PUSH"})),s=!1)};d=t.subscribe(_),_()}var b=function(e){s||(y=e,!l&&(l=e,v())||t.dispatch({type:u.LOCATION_CHANGE,payload:e}))};return p=e.listen(b),o({},e,{listen:function(e){var r=v(!0),n=!1,o=t.subscribe(function(){var t=v(!0);t!==r&&(r=t,n||e(r))});return e(r),function(){n=!0,o()}},unsubscribe:function(){f&&d(),p()}})}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};t["default"]=n;var u=r(238),i=function(e){return e.routing}},238:function(e,t){"use strict";function r(){var e=arguments.length<=0||void 0===arguments[0]?u:arguments[0],t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],r=t.type,i=t.payload;return r===o?n({},e,{locationBeforeTransitions:i}):e}Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};t.routerReducer=r;var o=t.LOCATION_CHANGE="@@router/LOCATION_CHANGE",u={locationBeforeTransitions:null}},239:function(e,t,r){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t["default"]=e,t}function o(e){return e&&e.__esModule?e:{"default":e}}function u(e,t){var r=window.devToolsExtension?window.devToolsExtension()(a.createStore):a.createStore,n=(0,a.combineReducers)(i({},y,{routing:c.routerReducer})),o=(0,a.applyMiddleware)(s.logger,p["default"],(0,l["default"])(e))(r),u=o(n,t);return u}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};t.configureStore=u;var a=r(161),c=r(238),f=r(240),l=o(f),s=r(242),d=r(245),p=o(d),v=r(246),y=n(v)},240:function(e,t,r){"use strict";function n(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function o(e){return function(){return function(t){return function(r){if(r.type!==u.CALL_HISTORY_METHOD)return t(r);var o=r.payload,i=o.method,a=o.args;e[i].apply(e,n(a))}}}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=o;var u=r(241)},241:function(e,t){"use strict";function r(e){return function(){for(var t=arguments.length,r=Array(t),o=0;o<t;o++)r[o]=arguments[o];return{type:n,payload:{method:e,args:r}}}}Object.defineProperty(t,"__esModule",{value:!0});var n=t.CALL_HISTORY_METHOD="@@router/CALL_HISTORY_METHOD",o=t.push=r("push"),u=t.replace=r("replace"),i=t.go=r("go"),a=t.goBack=r("goBack"),c=t.goForward=r("goForward");t.routerActions={push:o,replace:u,go:i,goBack:a,goForward:c}},242:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.thunk=t.logger=void 0;var o=r(243),u=n(o),i=r(244),a=n(i);t.logger=u["default"],t.thunk=a["default"]},243:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(e){return function(e){return function(t){return"undefined"!=typeof log&&_log.info(t),e(t)}}},e.exports=t["default"]},244:function(e,t){"use strict";function r(e){var t=e.dispatch,r=e.getState;return function(e){return function(n){return"function"==typeof n?n(t,r):e(n)}}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=r,e.exports=t["default"]},246:function(e,t){"use strict"},247:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Home=void 0;var o=r(248),u=n(o);t.Home=u["default"]},248:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e){return e}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),f=r(1),l=n(f),s=r(154),d=(r(180),r(249)),p=n(d),v=function(e){function t(e){return o(this,t),u(this,Object.getPrototypeOf(t).call(this,e))}return i(t,e),c(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=(0,p["default"])("home","main-container","af-layout","af-index",{"is-ajax":0});return l["default"].createElement("div",{className:e},"Home")}}]),t}(f.Component);t["default"]=v,t["default"]=(0,s.connect)(a)(v),e.exports=t["default"]}});