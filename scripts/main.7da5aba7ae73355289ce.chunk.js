(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"+EN/":function(e,t,o){},CnBM:function(e,t,n){"use strict";var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function d(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var p=n("q1tI"),f=n("17x9"),m=[],h=[];function i(e){var t=e(),o={loading:!0,loaded:null,error:null};return o.promise=t.then(function(e){return o.loading=!1,o.loaded=e}).catch(function(e){throw o.loading=!1,o.error=e}),o}function o(o){var n={loading:!1,loaded:{},error:null},r=[];try{Object.keys(o).forEach(function(t){var e=i(o[t]);e.loading?n.loading=!0:(n.loaded[t]=e.loaded,n.error=e.error),r.push(e.promise),e.promise.then(function(e){n.loaded[t]=e}).catch(function(e){n.error=e})})}catch(e){n.error=e}return n.promise=Promise.all(r).then(function(e){return n.loading=!1,e}).catch(function(e){throw n.loading=!1,e}),n}function y(e,t){return p.createElement((o=e)&&o.__esModule?o.default:o,t);var o}function r(r,e){var t,o;if(!e.loading)throw new Error("react-loadable requires a `loading` component");var i=Object.assign({loader:null,loading:null,delay:200,timeout:null,render:y,webpack:null,modules:null},e),a=null;function l(){return a||(a=r(i.loader)),a.promise}return m.push(l),"function"==typeof i.webpack&&h.push(function(){if(e=i.webpack,"object"===u(n.m)&&e().every(function(e){return void 0!==e&&void 0!==n.m[e]}))return l();var e}),o=t=function(o){function n(e){c(this,n);var t=s(this,o.call(this,e));return t.retry=function(){t.setState({error:null,loading:!0,timedOut:!1}),a=r(i.loader),t._loadModule()},l(),t.state={error:a.error,pastDelay:!1,timedOut:!1,loading:a.loading,loaded:a.loaded},t}return d(n,o),n.preload=function(){return l()},n.prototype.componentWillMount=function(){this._mounted=!0,this._loadModule()},n.prototype._loadModule=function(){var t=this;if(this.context.loadable&&Array.isArray(i.modules)&&i.modules.forEach(function(e){t.context.loadable.report(e)}),a.loading){"number"==typeof i.delay&&(0===i.delay?this.setState({pastDelay:!0}):this._delay=setTimeout(function(){t.setState({pastDelay:!0})},i.delay)),"number"==typeof i.timeout&&(this._timeout=setTimeout(function(){t.setState({timedOut:!0})},i.timeout));var o=function(){t._mounted&&(t.setState({error:a.error,loaded:a.loaded,loading:a.loading}),t._clearTimeouts())};a.promise.then(function(){o()}).catch(function(e){o()})}},n.prototype.componentWillUnmount=function(){this._mounted=!1,this._clearTimeouts()},n.prototype._clearTimeouts=function(){clearTimeout(this._delay),clearTimeout(this._timeout)},n.prototype.render=function(){return this.state.loading||this.state.error?p.createElement(i.loading,{isLoading:this.state.loading,pastDelay:this.state.pastDelay,timedOut:this.state.timedOut,error:this.state.error,retry:this.retry}):this.state.loaded?i.render(this.state.loaded,this.props):null},n}(p.Component),t.contextTypes={loadable:f.shape({report:f.func.isRequired})},o}function a(e){return r(i,e)}a.Map=function(e){if("function"!=typeof e.render)throw new Error("LoadableMap requires a `render(loaded, props)` function");return r(o,e)};var l=function(e){function t(){return c(this,t),s(this,e.apply(this,arguments))}return d(t,e),t.prototype.getChildContext=function(){return{loadable:{report:this.props.report}}},t.prototype.render=function(){return p.Children.only(this.props.children)},t}(p.Component);function g(e){for(var t=[];e.length;){var o=e.pop();t.push(o())}return Promise.all(t).then(function(){if(e.length)return g(e)})}l.propTypes={report:f.func.isRequired},l.childContextTypes={loadable:f.shape({report:f.func.isRequired}).isRequired},a.Capture=l,a.preloadAll=function(){return new Promise(function(e,t){g(m).then(e,t)})},a.preloadReady=function(){return new Promise(function(e,t){g(h).then(e,e)})},e.exports=a},"NX+1":function(e,t,o){e.exports={App:"App___wmyqV",footercontainer:"footercontainer___2COXw",sitefooter:"sitefooter___2klbX",identity:"identity___3-C21",Site:"Site___2Wyd7",Sitecontent:"Sitecontent___3DALw"}},VXxg:function(e,t,o){o("Btvt"),o("XfO3"),o("rGqo"),o("T39b"),e.exports=o("g3g5").Set},m1cd:function(e,t,o){e.exports=o.p+"src/favicon.2cc0ddfd.ico"},qKs0:function(e,t,o){o("Btvt"),o("XfO3"),o("rGqo"),o("9AAn"),e.exports=o("g3g5").Map},tjUo:function(e,t,o){"use strict";o.r(t);var n=o("q1tI"),r=o.n(n),i=o("i8i4"),a=o.n(i),l=(o("qKs0"),o("VXxg"),o("NX+1")),u=o.n(l),c=o("CnBM");var s=o.n(c)()({loader:function(){return Promise.all([o.e(0),o.e(1)]).then(o.bind(null,"Z1A6"))},loading:function(){return r.a.createElement("h3",null,"Loading...")}}),d=function(){return s?r.a.createElement("div",{className:u.a.Site},r.a.createElement("div",{className:u.a.Sitecontent},r.a.createElement("div",{id:"speech",className:u.a.App},r.a.createElement(s,null))),r.a.createElement("div",{className:u.a.footercontainer},r.a.createElement("footer",{className:u.a.sitefooter},r.a.createElement("p",{className:u.a.identity},"© 2018 Maria D. Campbell")))):r.a.createElement("h3",null,"Loading...")};o("+EN/"),o("m1cd");a.a.render(r.a.createElement(d,null),document.getElementById("app")),console.log("process.env.VERSION","stag"),console.log("process.env.PLATFORM","production")}},[["tjUo",2,3]]]);