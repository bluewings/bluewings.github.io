(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"7evw":function(e,t,n){"use strict";n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=t.CommentEmbed=t.CommentCount=void 0;var r=n("UZsz"),o=n("Bp/N"),i=n("HhXV");t.CommentCount=r.CommentCount,t.CommentEmbed=o.CommentEmbed,t.DiscussionEmbed=i.DiscussionEmbed;var a={CommentCount:r.CommentCount,CommentEmbed:o.CommentEmbed,DiscussionEmbed:i.DiscussionEmbed};t.default=a},"A2+M":function(e,t,n){var r=n("X8hv");e.exports={MDXRenderer:r}},"Bp/N":function(e,t,n){"use strict";n("xfY5"),n("a1Th"),n("h7Nl"),n("Btvt"),n("/SS/"),n("hHhE"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.CommentEmbed=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=a(n("q1tI")),i=a(n("17x9"));function a(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var s=t.CommentEmbed=function(e){function t(){return c(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"getSrc",value:function(){return"https://embed.disqus.com/p/"+Number(this.props.commentId).toString(36)+"?p="+(this.props.showParentComment?"1":"0")+"&m="+(this.props.showMedia?"1":"0")}},{key:"render",value:function(){return o.default.createElement("iframe",{src:this.getSrc(),width:this.props.width,height:this.props.height,seamless:"seamless",scrolling:"no",frameBorder:"0"})}}]),t}(o.default.Component);s.defaultProps={showMedia:!0,showParentComment:!0,width:420,height:320},s.propTypes={commentId:i.default.string.isRequired,showMedia:i.default.bool,showParentComment:i.default.bool,width:i.default.number,height:i.default.number}},G4Ez:function(e,t,n){"use strict";n.r(t),n.d(t,"query",(function(){return _}));n("jm62"),n("ioFf"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V");var r,o=n("q1tI"),i=n.n(o),a=(n("91GP"),n("Oyvg"),n("pIFo"),n("txSG")),c=n("7evw"),u=n("Wbzz"),s=n("Ia9z"),l=n("qKvR"),f=function(e){var t=e.previous,n=e.next,r=e.editUrl,o=e.langKey,i=e.langKeyDefault,c=e.pageContext;return Object(l.c)("footer",{css:Object(a.f)({mt:4,pt:3})},r&&Object(l.c)(a.c.p,null,Object(l.c)(a.c.a,{href:r,target:"_blank",rel:"noopener noreferrer"},"Edit on GitHub")),Object(l.c)(a.c.hr,{css:Object(a.f)({mt:3,mb:3})}),Object(l.c)(s.a,{post:!0,pageContext:c,langKey:o||c&&c.langKey,langKeyDefault:i}),(t||n)&&Object(l.c)(a.b,{as:"ul",css:Object(a.f)({flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",p:0,mt:0,mb:3})},Object(l.c)("li",{css:Object(a.f)({mb:2})},t&&Object(l.c)(a.c.a,{as:u.a,to:t.slug,rel:"prev"},"← ",t.title)),Object(l.c)("li",{css:Object(a.f)({mb:2})},n&&Object(l.c)(a.c.a,{as:u.a,to:n.slug,rel:"next"},n.title," →"))))},p=n("sCgH"),d=n("j2BE"),b=n("7ljp"),m=n("A2+M"),h=(r={en:"English",ko:"한국어",ja:"日本語"},function(e){return r[e]||e});var y=function(e){var t=e.langKey,n=e.langKeyDefault,r=e.translations,c=e.slug,s=e.editUrl,f=r.filter((function(e){return e.langKey!==n}));if(f&&f.length>0){var p=(f&&f[0]||{}).origin;return Object(l.c)(a.c.p,{css:Object(a.f)({p:"0.75em",border:"1px solid",borderRadius:"0.3em",borderColor:"muted",bg:"box"})},Object(l.c)("span",null,"Translated by readers into: "),(f||[]).map((function(e,n){var r=e.langKey,i=e.slug;return Object(l.c)(o.Fragment,{key:r},r===t?Object(l.c)("span",null,h(r)):Object(l.c)(u.a,{to:i},h(r)),n===f.length-1?"":" • ")})),c!==p&&Object(l.c)(i.a.Fragment,null,Object(l.c)("br",null),Object(l.c)(u.a,{to:p},"Read the original")," • ",s&&Object(l.c)(i.a.Fragment,null,Object(l.c)("a",{href:s,target:"_blank",rel:"noopener noreferrer"},"Improve this translation")," • "),Object(l.c)(u.a,{to:"/"+t},"View all translated posts")," "))}return null},O=n("3w3x"),g=n("XNvI");function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var w=function(e){var t=e.data,n=e.location,r=e.previous,i=e.next,u=e.pageContext,s=t.post,h=t.site.siteMetadata,w=h.title,j=h.social,E=s.fields||{},C=E.langKey,_=E.filePath,S=u||{},D=S.translations,I=S.editOnGithub,P=S.disqusShortname,q=S.langKeyDefault,x=(s.parent&&s.parent.frontmatter||{}).max_width,k=I&&_&&""+I+_,R=Object(o.useMemo)((function(){return s.slug.replace(new RegExp("^/"+C+"/"),"/")}),[s.slug,C]);return Object(l.c)(p.a,{location:n,title:w,langKey:C,pageContext:u,maxWidth:x},Object(l.c)(d.a,{title:s.title,description:s.excerpt,pageContext:u}),Object(l.c)("main",null,Object(l.c)(a.c.h1,{css:Object(a.f)({mt:4})},s.title),Object(l.c)(a.c.p,{css:Object(a.f)({fontSize:1,mt:-2,mb:4,fontFamily:"Montserrat_SemiBold, 'Apple SD Gothic NEO', helvetica, sans-serif"})},s.date),Object(l.c)(y,{langKey:C,translations:D,slug:s.slug,editUrl:k,langKeyDefault:q}),Object(l.c)(b.MDXProvider,{components:g.a},Object(l.c)(m.MDXRenderer,null,s.body))),Object(l.c)(f,v({previous:r,next:i},{editUrl:k,pageContext:u})),P&&Object(l.c)(c.DiscussionEmbed,{shortname:P,config:{identifier:R,title:w}}),Object(l.c)(O.a,{socialLinks:j,marginTop:0,langKey:C}))};function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){C(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function C(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.default=function(e){var t=e.location,n=e.data,r=e.pageContext,o=n.blogPost,i=n.previous,a=n.next;return Object(l.c)(w,{data:E({},n,{post:o}),location:t,previous:i,next:a,pageContext:r})};var _="2845025465"},HhXV:function(e,t,n){"use strict";n("8+KV"),n("/SS/"),n("hHhE"),n("91GP"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=u(n("q1tI")),a=u(n("17x9")),c=n("ZMnY");function u(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var f=["preData","preInit","onInit","onReady","afterRender","preReset","onIdentify","beforeComment","onNewComment","onPaginate"];(t.DiscussionEmbed=function(e){function t(){return s(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentDidMount",value:function(){"undefined"!=typeof window&&window.disqus_shortname&&window.disqus_shortname!==this.props.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){return this.props!==e&&(0,c.shallowComparison)(this.props,e)}},{key:"componentDidUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;window&&window.DISQUS&&e.getElementById("dsq-embed-scr")?window.DISQUS.reset({reload:!0,config:this.getDisqusConfig(this.props.config)}):(window.disqus_config=this.getDisqusConfig(this.props.config),window.disqus_shortname=this.props.shortname,(0,c.insertScript)("https://"+this.props.shortname+".disqus.com/embed.js","dsq-embed-scr",e.body))}},{key:"cleanInstance",value:function(){var e=window.document;(0,c.removeScript)("dsq-embed-scr",e.body),window&&window.DISQUS&&window.DISQUS.reset({});try{delete window.DISQUS}catch(n){window.DISQUS=void 0}var t=e.getElementById("disqus_thread");if(t)for(;t.hasChildNodes();)t.removeChild(t.firstChild)}},{key:"getDisqusConfig",value:function(e){return function(){var t=this;this.page.identifier=e.identifier,this.page.url=e.url,this.page.title=e.title,this.page.remote_auth_s3=e.remoteAuthS3,this.page.api_key=e.apiKey,f.forEach((function(n){t.callbacks[n]=[e[n]]}))}}},{key:"render",value:function(){return i.default.createElement("div",r({},this.props,{id:"disqus_thread"}))}}]),t}(i.default.Component)).propTypes={shortname:a.default.string.isRequired,config:a.default.shape({identifier:a.default.string,url:a.default.string,title:a.default.string,preData:a.default.func,preInit:a.default.func,onInit:a.default.func,onReady:a.default.func,afterRender:a.default.func,preReset:a.default.func,onIdentify:a.default.func,beforeComment:a.default.func,onNewComment:a.default.func,onPaginate:a.default.func}).isRequired}},UZsz:function(e,t,n){"use strict";n("/SS/"),n("hHhE"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.CommentCount=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=c(n("q1tI")),i=c(n("17x9")),a=n("ZMnY");function c(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var l=(0,a.debounce)((function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})}),300,!1);(t.CommentCount=function(e){function t(){return u(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){return this.props!==e&&(0,a.shallowComparison)(this.props,e)}},{key:"componentDidUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;e.getElementById("dsq-count-scr")?l():(0,a.insertScript)("https://"+this.props.shortname+".disqus.com/count.js","dsq-count-scr",e.body)}},{key:"cleanInstance",value:function(){var e=window.document.body;(0,a.removeScript)("dsq-count-scr",e),window.DISQUSWIDGETS=void 0}},{key:"render",value:function(){return o.default.createElement("span",{className:"disqus-comment-count","data-disqus-identifier":this.props.config.identifier,"data-disqus-url":this.props.config.url},this.props.children)}}]),t}(o.default.Component)).propTypes={shortname:i.default.string.isRequired,config:i.default.shape({identifier:i.default.string,url:i.default.string,title:i.default.string}).isRequired}},X8hv:function(e,t,n){function r(e,t,n){return(r=o()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&i(o,n.prototype),o}).apply(null,arguments)}function o(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e){return function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n("jm62"),n("yt8O"),n("RW0V"),n("rGqo"),n("rE2o"),n("ioFf"),n("XfO3"),n("HEwt"),n("f3/d"),n("a1Th"),n("Btvt"),n("I5cv"),n("I5cv"),n("f3/d"),n("a1Th"),n("XfO3"),n("HEwt"),n("rE2o"),n("jm62"),n("ioFf"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V");var f=n("q1tI"),p=n("7ljp"),d=p.useMDXComponents,b=p.mdx,m=n("BfwJ").useMDXScope;e.exports=function(e){var t=e.scope,n=e.components,o=e.children,i=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["scope","components","children"]),c=d(n),u=m(t),l=f.useMemo((function(){if(!o)return null;var e=s({React:f,mdx:b},u),t=Object.keys(e),n=t.map((function(t){return e[t]}));return r(Function,["_fn"].concat(a(t),[""+o])).apply(void 0,[{}].concat(a(n)))}),[o,t]);return f.createElement(l,s({components:c},i))}},ZMnY:function(e,t,n){"use strict";n("rE2o"),n("ioFf"),n("RW0V"),n("rGqo"),n("yt8O"),n("Btvt"),n("XfO3"),n("T39b"),n("dZ+Y"),n("LK8F"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.insertScript=function(e,t,n){var r=window.document.createElement("script");return r.async=!0,r.src=e,r.id=t,n.appendChild(r),r},t.removeScript=function(e,t){var n=window.document.getElementById(e);n&&t.removeChild(n)},t.debounce=function(e,t,n){var r=void 0;return function(){var o=this,i=arguments,a=function(){r=null,n||e.apply(o,i)},c=n&&!r;window.clearTimeout(r),r=setTimeout(a,t),c&&e.apply(o,i)}},t.isReactElement=a,t.shallowComparison=function(e,t){var n=new Set(Object.keys(e),Object.keys(t)),r=!0,o=!1,i=void 0;try{for(var c,u=n[Symbol.iterator]();!(r=(c=u.next()).done);r=!0){var s=c.value;if(e[s]!==t[s]&&!a(e[s]))return!0}}catch(l){o=!0,i=l}finally{try{!r&&u.return&&u.return()}finally{if(o)throw i}}return!1};var r,o=n("q1tI"),i=(r=o)&&r.__esModule?r:{default:r};function a(e){return!!i.default.isValidElement(e)||!!Array.isArray(e)&&e.some((function(e){return i.default.isValidElement(e)}))}}}]);
//# sourceMappingURL=component---node-modules-gatsby-plugin-bluewings-src-templates-post-query-js-d60d101d7105ba15c9c5.js.map