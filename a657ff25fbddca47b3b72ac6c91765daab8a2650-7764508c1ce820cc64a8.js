(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"0mN4":function(e,t,r){"use strict";r("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"3w3x":function(e,t,r){"use strict";r("f3/d");var n=r("q1tI"),a=r("txSG"),i=r("qKvR");t.a=function(e){var t=e.socialLinks,r=void 0===t?[]:t,o=e.marginTop;return Object(i.c)("footer",{css:Object(a.f)({mt:void 0!==o?o:4,pt:3})},r.map((function(e,t,r){return Object(i.c)(n.Fragment,{key:e.url},Object(i.c)(a.c.a,{href:e.url,target:"_blank",rel:"noopener noreferrer"},e.name),r.length-1!==t&&Object(i.c)(n.Fragment,null," ","•"," "))})))}},"8+s/":function(e,t,r){"use strict";function n(e){return e&&"object"==typeof e&&"default"in e?e.default:e}r("V+eJ"),r("bWfx"),r("f3/d"),r("hHhE"),r("HAE/");var a=r("q1tI"),i=n(a),o=n(r("Gytx"));function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var s=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var u,l=[];function d(){u=e(l.map((function(e){return e.props}))),f.canUseDOM?t(u):r&&(u=r(u))}var f=function(e){var t,r;function a(){return e.apply(this,arguments)||this}r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.peek=function(){return u},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,l=[],e};var c=a.prototype;return c.shouldComponentUpdate=function(e){return!o(e,this.props)},c.componentWillMount=function(){l.push(this),d()},c.componentDidUpdate=function(){d()},c.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),d()},c.render=function(){return i.createElement(n,this.props)},a}(a.Component);return c(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),c(f,"canUseDOM",s),f}}},"9eSz":function(e,t,r){"use strict";r("rGqo"),r("yt8O"),r("Btvt"),r("XfO3"),r("EK0E"),r("INYr"),r("0mN4");var n=r("TqRt");t.__esModule=!0,t.default=void 0;var a,i=n(r("PJYZ")),o=n(r("VbXa")),c=n(r("8OQS")),s=n(r("pVnL")),u=n(r("q1tI")),l=n(r("17x9")),d=function(e){var t=(0,s.default)({},e),r=t.resolutions,n=t.sizes,a=t.critical;return r&&(t.fixed=r,delete t.resolutions),n&&(t.fluid=n,delete t.sizes),a&&(t.loading="eager"),t.fluid&&(t.fluid=O([].concat(t.fluid))),t.fixed&&(t.fixed=O([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(b&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,r=e.fixed;return A(t||r).src},A=function(e){if(b&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var r=e.findIndex((function(e){return void 0===e.media}));if(-1!==r)return e[r]}return e[0]},h=Object.create({}),T=function(e){var t=d(e),r=p(t);return h[r]||!1},g="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,b="undefined"!=typeof window,E=b&&window.IntersectionObserver,m=new WeakMap;function y(e){return e.map((function(e){var t=e.src,r=e.srcSet,n=e.srcSetWebp,a=e.media,i=e.sizes;return u.default.createElement(u.default.Fragment,{key:t},n&&u.default.createElement("source",{type:"image/webp",media:a,srcSet:n,sizes:i}),u.default.createElement("source",{media:a,srcSet:r,sizes:i}))}))}function O(e){var t=[],r=[];return e.forEach((function(e){return(e.media?t:r).push(e)})),[].concat(t,r)}function S(e){return e.map((function(e){var t=e.src,r=e.media,n=e.tracedSVG;return u.default.createElement("source",{key:t,media:r,srcSet:n})}))}function v(e){return e.map((function(e){var t=e.src,r=e.media,n=e.base64;return u.default.createElement("source",{key:t,media:r,srcSet:n})}))}function j(e,t){var r=e.srcSet,n=e.srcSetWebp,a=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(a?'media="'+a+'" ':"")+'srcset="'+(t?n:r)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var R=function(e,t){var r=(void 0===a&&"undefined"!=typeof window&&window.IntersectionObserver&&(a=new window.IntersectionObserver((function(e){e.forEach((function(e){if(m.has(e.target)){var t=m.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),m.delete(e.target),t())}}))}),{rootMargin:"200px"})),a);return r&&(r.observe(e),m.set(e,t)),function(){r.unobserve(e),m.delete(e)}},w=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',r=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSet?'srcset="'+e.srcSet+'" ':"",a=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",c=e.height?'height="'+e.height+'" ':"",s=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",u=e.loading?'loading="'+e.loading+'" ':"",l=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?j(e,!0):"")+j(e)})).join("")+"<img "+u+o+c+r+n+t+i+a+s+l+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},P=function(e){var t=e.src,r=e.imageVariants,n=e.generateSources,a=e.spreadProps,i=e.ariaHidden,o=u.default.createElement(I,(0,s.default)({src:t},a,{ariaHidden:i}));return r.length>1?u.default.createElement("picture",null,n(r),o):o},I=u.default.forwardRef((function(e,t){var r=e.sizes,n=e.srcSet,a=e.src,i=e.style,o=e.onLoad,l=e.onError,d=e.loading,f=e.draggable,p=e.ariaHidden,A=(0,c.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return u.default.createElement("img",(0,s.default)({"aria-hidden":p,sizes:r,srcSet:n,src:a},A,{onLoad:o,onError:l,ref:t,loading:d,draggable:f,style:(0,s.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));I.propTypes={style:l.default.object,onError:l.default.func,onLoad:l.default.func};var M=function(e){function t(t){var r;(r=e.call(this,t)||this).seenBefore=b&&T(t),r.isCritical="eager"===t.loading||t.critical,r.addNoScript=!(r.isCritical&&!t.fadeIn),r.useIOSupport=!g&&E&&!r.isCritical&&!r.seenBefore;var n=r.isCritical||b&&(g||!r.useIOSupport);return r.state={isVisible:n,imgLoaded:!1,imgCached:!1,fadeIn:!r.seenBefore&&t.fadeIn},r.imageRef=u.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,i.default)(r)),r.handleRef=r.handleRef.bind((0,i.default)(r)),r}(0,o.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:T(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},r.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=R(e,(function(){var e=T(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},r.handleImageLoaded=function(){var e,t,r;e=this.props,t=d(e),r=p(t),h[r]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=d(this.props),t=e.title,r=e.alt,n=e.className,a=e.style,i=void 0===a?{}:a,o=e.imgStyle,c=void 0===o?{}:o,l=e.placeholderStyle,f=void 0===l?{}:l,p=e.placeholderClassName,h=e.fluid,T=e.fixed,g=e.backgroundColor,b=e.durationFadeIn,E=e.Tag,m=e.itemProp,O=e.loading,j=e.draggable,R=!1===this.state.fadeIn||this.state.imgLoaded,M=!0===this.state.fadeIn&&!this.state.imgCached,_=(0,s.default)({opacity:R?1:0,transition:M?"opacity "+b+"ms":"none"},c),C="boolean"==typeof g?"lightgray":g,L={transitionDelay:b+"ms"},N=(0,s.default)({opacity:this.state.imgLoaded?0:1},M&&L,{},c,{},f),G={title:t,alt:this.state.isVisible?"":r,style:N,className:p,itemProp:m};if(h){var x=h,H=A(h);return u.default.createElement(E,{className:(n||"")+" gatsby-image-wrapper",style:(0,s.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(H.srcSet)},u.default.createElement(E,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/H.aspectRatio+"%"}}),C&&u.default.createElement(E,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:C,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},M&&L)}),H.base64&&u.default.createElement(P,{ariaHidden:!0,src:H.base64,spreadProps:G,imageVariants:x,generateSources:v}),H.tracedSVG&&u.default.createElement(P,{ariaHidden:!0,src:H.tracedSVG,spreadProps:G,imageVariants:x,generateSources:S}),this.state.isVisible&&u.default.createElement("picture",null,y(x),u.default.createElement(I,{alt:r,title:t,sizes:H.sizes,src:H.src,crossOrigin:this.props.crossOrigin,srcSet:H.srcSet,style:_,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:m,loading:O,draggable:j})),this.addNoScript&&u.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:w((0,s.default)({alt:r,title:t,loading:O},H,{imageVariants:x}))}}))}if(T){var B=T,k=A(T),D=(0,s.default)({position:"relative",overflow:"hidden",display:"inline-block",width:k.width,height:k.height},i);return"inherit"===i.display&&delete D.display,u.default.createElement(E,{className:(n||"")+" gatsby-image-wrapper",style:D,ref:this.handleRef,key:"fixed-"+JSON.stringify(k.srcSet)},C&&u.default.createElement(E,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:C,width:k.width,opacity:this.state.imgLoaded?0:1,height:k.height},M&&L)}),k.base64&&u.default.createElement(P,{ariaHidden:!0,src:k.base64,spreadProps:G,imageVariants:B,generateSources:v}),k.tracedSVG&&u.default.createElement(P,{ariaHidden:!0,src:k.tracedSVG,spreadProps:G,imageVariants:B,generateSources:S}),this.state.isVisible&&u.default.createElement("picture",null,y(B),u.default.createElement(I,{alt:r,title:t,width:k.width,height:k.height,sizes:k.sizes,src:k.src,crossOrigin:this.props.crossOrigin,srcSet:k.srcSet,style:_,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:m,loading:O,draggable:j})),this.addNoScript&&u.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:w((0,s.default)({alt:r,title:t,loading:O},k,{imageVariants:B}))}}))}return null},t}(u.default.Component);M.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var _=l.default.shape({width:l.default.number.isRequired,height:l.default.number.isRequired,src:l.default.string.isRequired,srcSet:l.default.string.isRequired,base64:l.default.string,tracedSVG:l.default.string,srcWebp:l.default.string,srcSetWebp:l.default.string,media:l.default.string}),C=l.default.shape({aspectRatio:l.default.number.isRequired,src:l.default.string.isRequired,srcSet:l.default.string.isRequired,sizes:l.default.string.isRequired,base64:l.default.string,tracedSVG:l.default.string,srcWebp:l.default.string,srcSetWebp:l.default.string,media:l.default.string});M.propTypes={resolutions:_,sizes:C,fixed:l.default.oneOfType([_,l.default.arrayOf(_)]),fluid:l.default.oneOfType([C,l.default.arrayOf(C)]),fadeIn:l.default.bool,durationFadeIn:l.default.number,title:l.default.string,alt:l.default.string,className:l.default.oneOfType([l.default.string,l.default.object]),critical:l.default.bool,crossOrigin:l.default.oneOfType([l.default.string,l.default.bool]),style:l.default.object,imgStyle:l.default.object,placeholderStyle:l.default.object,placeholderClassName:l.default.string,backgroundColor:l.default.oneOfType([l.default.string,l.default.bool]),onLoad:l.default.func,onError:l.default.func,onStartLoad:l.default.func,Tag:l.default.string,itemProp:l.default.string,loading:l.default.oneOf(["auto","lazy","eager"]),draggable:l.default.bool};var L=M;t.default=L},EH9Q:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":[["ko","아빠는 개발자"],["en","Dev Dad"]],"description":[["ko","개발자를 꿈꾸는 아들을 둔 아빠 개발자입니다.\\n데이터 시각화에 관심이 있으며, 재미있는 프로그램을 만드는 것을 좋아합니다."],["en","I am a developer dad with a son who dreams of a developer.\\nI\'m interested in data visualization and enjoy creating fun programs."]],"author":"Cha Sung Won"}}}}')},Gytx:function(e,t,r){r("2Spj"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),e.exports=function(e,t,r,n){var a=r?r.call(n,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var i=Object.keys(e),o=Object.keys(t);if(i.length!==o.length)return!1;for(var c=Object.prototype.hasOwnProperty.bind(t),s=0;s<i.length;s++){var u=i[s];if(!c(u))return!1;var l=e[u],d=t[u];if(!1===(a=r?r.call(n,l,d,u):void 0)||void 0===a&&l!==d)return!1}return!0}},Ia9z:function(e,t,r){"use strict";r("0mN4");var n=r("aeVN"),a=r("q1tI"),i=r("9eSz"),o=r.n(i),c=r("txSG"),s=(r("f3/d"),r("a1Th"),r("Btvt"),r("XfO3"),r("HEwt"),r("rGqo"),r("rE2o"),r("ioFf"),r("KKXr"),r("uGPM")),u=r("qKvR");function l(e){return function(e){if(Array.isArray(e))return d(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return d(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var f=function(e){var t=e.description,r=e.pageContext,n=void 0===r?{}:r,i=n.langKey,o=n.langKeyDefault,c=Object(a.useMemo)((function(){return Object(s.a)(t,{langKey:i,langKeyDefault:o}).split(/\n/).reduce((function(e,t,r){return[].concat(l(e),[r>0?Object(u.c)("br",null):null,t]).filter((function(e){return e}))}),[]).map((function(e,t){return Object(u.c)(a.Fragment,{key:t},e)}))}),[t,i,o]);return Object(u.c)(a.Fragment,null,c)};t.a=function(e){var t=e.post,r=e.langKey,a=e.pageContext,i=n.data,s=i.site.siteMetadata,l=s.author,d=s.description,p=i.avatar;return Object(u.c)(c.b,{css:Object(c.f)({mb:t?3:4,pb:t?0:3,alignItems:"center"})},p?Object(u.c)(o.a,{fixed:p.childImageSharp.fixed,alt:l,css:Object(c.f)({mr:2,mb:0,width:48,minWidth:48,borderRadius:99999})}):Object(u.c)("div",{css:Object(c.f)({mr:2,mb:0,width:48,minWidth:48,borderRadius:99999}),role:"presentation"}),Object(u.c)(c.c.div,null,Object(u.c)(f,{author:l,description:d,pageContext:a,langKey:r})))}},TJpk:function(e,t,r){r("LK8F"),r("dZ+Y"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),r("8+KV"),r("/SS/"),r("hHhE"),r("V+eJ"),r("HAE/"),r("91GP"),t.__esModule=!0,t.Helmet=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=d(r("q1tI")),o=d(r("17x9")),c=d(r("8+s/")),s=d(r("bmMU")),u=r("v1p5"),l=r("hFT/");function d(e){return e&&e.__esModule?e:{default:e}}function f(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function A(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var h,T,g,b=(0,c.default)(u.reducePropsToState,u.handleClientStateChange,u.mapStateOnServer)((function(){return null})),E=(h=b,g=T=function(e){function t(){return p(this,t),A(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,s.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case l.TAG_NAMES.SCRIPT:case l.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case l.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,a=e.arrayTypeChildren,i=e.newChildProps,o=e.nestedChildren;return n({},a,((t={})[r.type]=[].concat(a[r.type]||[],[n({},i,this.mapNestedChildrenToProps(r,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,a=e.child,i=e.newProps,o=e.newChildProps,c=e.nestedChildren;switch(a.type){case l.TAG_NAMES.TITLE:return n({},i,((t={})[a.type]=c,t.titleAttributes=n({},o),t));case l.TAG_NAMES.BODY:return n({},i,{bodyAttributes:n({},o)});case l.TAG_NAMES.HTML:return n({},i,{htmlAttributes:n({},o)})}return n({},i,((r={})[a.type]=n({},o),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=n({},t);return Object.keys(e).forEach((function(t){var a;r=n({},r,((a={})[t]=e[t],a))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return i.default.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,i=a.children,o=f(a,["children"]),c=(0,u.convertReactPropstoHtmlAttributes)(o);switch(r.warnOnInvalidChildren(e,i),e.type){case l.TAG_NAMES.LINK:case l.TAG_NAMES.META:case l.TAG_NAMES.NOSCRIPT:case l.TAG_NAMES.SCRIPT:case l.TAG_NAMES.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:c,nestedChildren:i});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:c,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=f(e,["children"]),a=n({},r);return t&&(a=this.mapChildrenToProps(t,a)),i.default.createElement(h,a)},a(t,null,[{key:"canUseDOM",set:function(e){h.canUseDOM=e}}]),t}(i.default.Component),T.propTypes={base:o.default.object,bodyAttributes:o.default.object,children:o.default.oneOfType([o.default.arrayOf(o.default.node),o.default.node]),defaultTitle:o.default.string,defer:o.default.bool,encodeSpecialCharacters:o.default.bool,htmlAttributes:o.default.object,link:o.default.arrayOf(o.default.object),meta:o.default.arrayOf(o.default.object),noscript:o.default.arrayOf(o.default.object),onChangeClientState:o.default.func,script:o.default.arrayOf(o.default.object),style:o.default.arrayOf(o.default.object),title:o.default.string,titleAttributes:o.default.object,titleTemplate:o.default.string},T.defaultProps={defer:!0,encodeSpecialCharacters:!0},T.peek=h.peek,T.rewind=function(){var e=h.rewind();return e||(e=(0,u.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},g);E.renderStatic=E.rewind,t.Helmet=E,t.default=E},aeVN:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"author":"Cha Sung Won","description":[["ko","개발자를 꿈꾸는 아들을 둔 아빠 개발자입니다.\\n데이터 시각화에 관심이 있으며, 재미있는 프로그램을 만드는 것을 좋아합니다."],["en","I am a developer dad with a son who dreams of a developer.\\nI\'m interested in data visualization and enjoy creating fun programs."]]}},"avatar":{"childImageSharp":{"fixed":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAIEAwX/xAAWAQEBAQAAAAAAAAAAAAAAAAACAQP/2gAMAwEAAhADEAAAAZ0drK1JU4bAvTGh/8QAHRAAAgIBBQAAAAAAAAAAAAAAAQIAAwQSEyEiMf/aAAgBAQABBQLJNrPiLZNCy7saU42RD5UxVJ//xAAWEQEBAQAAAAAAAAAAAAAAAAAQARH/2gAIAQMBAT8Bwp//xAAWEQEBAQAAAAAAAAAAAAAAAAAQAhH/2gAIAQIBAT8B0g//xAAcEAAABgMAAAAAAAAAAAAAAAAAAQIQESESMVH/2gAIAQEABj8Cx4QtUpaRRwNm1N//xAAcEAACAQUBAAAAAAAAAAAAAAABEQAQITFBUXH/2gAIAQEAAT8hFGQAUD2MLsDkLMRQMglaMvw3H5ofsm6f/9oADAMBAAIAAwAAABDLHzz/xAAaEQABBQEAAAAAAAAAAAAAAAAAEBEhMUFR/9oACAEDAQE/EKOR0yn/xAAZEQACAwEAAAAAAAAAAAAAAAAAARARMVH/2gAIAQIBAT8QV8LfDDj/xAAeEAEAAwACAgMAAAAAAAAAAAABABEhMVFBYXGR0f/aAAgBAQABPxB/d4I21+o7A7H5fin3OcF+2I/WsRsV764TV+Y6mvdn5OZhMo3rle1Cf//Z","width":48,"height":48,"src":"/static/7a396b5b3600e5fd979f0cacbf1002e6/ffcc9/avatar.jpg","srcSet":"/static/7a396b5b3600e5fd979f0cacbf1002e6/ffcc9/avatar.jpg 1x,\\n/static/7a396b5b3600e5fd979f0cacbf1002e6/3e51d/avatar.jpg 1.5x,\\n/static/7a396b5b3600e5fd979f0cacbf1002e6/eee8e/avatar.jpg 2x"}}}}}')},bmMU:function(e,t,r){"use strict";r("f3/d"),r("SRfc"),r("a1Th"),r("h7Nl"),r("Oyvg"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),r("LK8F");var n=Array.isArray,a=Object.keys,i=Object.prototype.hasOwnProperty,o="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,r){if(t===r)return!0;if(t&&r&&"object"==typeof t&&"object"==typeof r){var c,s,u,l=n(t),d=n(r);if(l&&d){if((s=t.length)!=r.length)return!1;for(c=s;0!=c--;)if(!e(t[c],r[c]))return!1;return!0}if(l!=d)return!1;var f=t instanceof Date,p=r instanceof Date;if(f!=p)return!1;if(f&&p)return t.getTime()==r.getTime();var A=t instanceof RegExp,h=r instanceof RegExp;if(A!=h)return!1;if(A&&h)return t.toString()==r.toString();var T=a(t);if((s=T.length)!==a(r).length)return!1;for(c=s;0!=c--;)if(!i.call(r,T[c]))return!1;if(o&&t instanceof Element&&r instanceof Element)return t===r;for(c=s;0!=c--;)if(!("_owner"===(u=T[c])&&t.$$typeof||e(t[u],r[u])))return!1;return!0}return t!=t&&r!=r}(e,t)}catch(r){if(r.message&&r.message.match(/stack|recursion/i)||-2146828260===r.number)return console.warn("Warning: react-fast-compare does not handle circular references.",r.name,r.message),!1;throw r}}},"hFT/":function(e,t,r){r("DNiP"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),r("bWfx"),t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var n=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},a=(t.VALID_TAG_NAMES=Object.keys(n).map((function(e){return n[e]})),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(a).reduce((function(e,t){return e[a[t]]=t,e}),{}),t.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},j2BE:function(e,t,r){"use strict";var n=r("EH9Q"),a=(r("q1tI"),r("TJpk")),i=r.n(a),o=r("uGPM"),c=r("qKvR");function s(e){var t=e.description,r=e.lang,a=e.meta,s=e.keywords,u=e.title,l=e.pageContext,d=n.data.site,f=Object(o.a)(t||d.siteMetadata.description,l);return Object(c.c)(i.a,{htmlAttributes:{lang:r},title:u,titleTemplate:"%s | "+Object(o.a)(d.siteMetadata.title,l),meta:[{name:"description",content:f},{property:"og:title",content:u},{property:"og:description",content:f},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:d.siteMetadata.author},{name:"twitter:title",content:u},{name:"twitter:description",content:f}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(a)})}s.defaultProps={lang:"en",meta:[],keywords:[]},t.a=s},sCgH:function(e,t,r){"use strict";r("91GP"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V");var n=r("q1tI"),a=r("txSG"),i=r("Wbzz"),o=(r("jm62"),r("ioFf"),r("qKvR"));function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var l=function(e){var t=e.border,r=void 0!==t&&t,i=Object(a.h)(),c=i[0],u=i[1],l=Object(n.useRef)(0),d=Object(n.useMemo)((function(){var e=Math.abs(l.current%360);return("light"===c&&180===e||"dark"===c&&0===e)&&(l.current-=180),{transform:"rotate("+l.current+"deg)"}}),[c]),f="dark"===c,p=Object(n.useMemo)((function(){return r?{borderWidth:1,borderColor:"dark"===c?"var(--theme-ui-colors-muted,hsla(0,0%,100%,0.4))":"var(--theme-ui-colors-muted,hsla(0,0%,0%,0.4))",borderRadius:"0.25rem",height:32}:{border:"none"}}),[r,c]);return Object(o.c)("div",{css:Object(a.f)({height:0})},Object(o.c)("button",{type:"button",css:Object(a.f)(s({width:60,height:30,padding:0,background:"transparent",overflow:"hidden",cursor:"pointer"},p)),onClick:function(e){u(f?"light":"dark")}},Object(o.c)("div",{className:"spinner",css:Object(a.f)({pointerEvents:"none",position:"relative",width:60,height:60,transition:"transform 0.67s linear",fontSize:3}),style:d},Object(o.c)("span",{className:"sun",role:"img","aria-label":"sun",css:Object(a.f)({position:"absolute",pointerEvents:"none",top:0,left:0,width:60,height:30,display:"flex",justifyContent:"center",alignItems:"center"})},"🌞"),Object(o.c)("span",{className:"moon",role:"img","aria-label":"moon",css:Object(a.f)({position:"absolute",pointerEvents:"none",top:30,left:0,width:60,height:30,display:"flex",justifyContent:"center",alignItems:"center",transform:"rotate(180deg)"})},"🌛"))))},d=r("Ia9z"),f=r("uGPM");function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var A=function(e){var t=e.children,r=e.indexPage,n=e.rootPath;return r?Object(o.c)(a.c.h1,{css:Object(a.f)({mt:0,mb:3,pb:2,fontSize:6,wordBreak:"keep-all"})},Object(o.c)(a.c.a,{as:i.Link,css:Object(a.f)({color:"inherit",boxShadow:"none",textDecoration:"none"}),to:n},t)):Object(o.c)(a.c.h3,{as:"p",css:Object(a.f)({my:0,wordBreak:"keep-all"})},Object(o.c)(a.c.a,{as:i.Link,css:Object(a.f)({boxShadow:"none",textDecoration:"none",color:"text"}),to:n},t))},h=function(e){var t=e.children,r=e.title,i=e.maxWidth,c=e.indexPage,s=e.langKey,u=(e.langKeyDefault,function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,["children","title","maxWidth","indexPage","langKey","langKeyDefault"])),h=Object(n.useMemo)((function(){var e=u.pageContext||{},t=e.langKey;return t===e.langKeyDefault?"/":"/"+t+"/"}),[u.pageContext]);return Object(o.c)("header",null,Object(o.c)("div",{css:Object(a.f)({maxWidth:i||"container",mx:"auto"})},Object(o.c)("div",{css:Object(a.f)({display:"flex",justifyContent:"space-between",alignItems:"flex-start",my:0})},Object(o.c)(A,p({},u,{indexPage:c,rootPath:h}),Object(f.a)(r,u.pageContext)),t,Object(o.c)(l,null)),c&&Object(o.c)(d.a,{langKey:s,pageContext:u.pageContext})))};function T(){return(T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}t.a=function(e){var t=e.children,r=e.maxWidth,i=e.pageContent,c=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,["children","maxWidth","pageContent"]),s=c.pageContext||{},u=s.langKey,l=s.langKeyDefault,d=Object(a.h)()[0];return Object(n.useEffect)((function(){"dark"===d?(document.body.classList.remove("light"),document.body.classList.add("dark")):(document.body.classList.remove("dark"),document.body.classList.add("light"))}),[d]),Object(o.c)(a.c.root,{css:Object(a.f)({px:7,py:8})},Object(o.c)(h,T({},c,{langKey:u,langKeyDefault:l,pageContent:i,maxWidth:r})),Object(o.c)("div",{css:Object(a.f)({maxWidth:r||"container",mx:"auto"})},t))}},uGPM:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));r("jm62"),r("ioFf"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V");function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var o=function(e,t){var r=t.langKey,n=t.langKeyDefault;if("string"==typeof e)return e;if(Array.isArray(e)){var i=e.filter((function(e){return 2===e.length})).reduce((function(e,t){var i=t[0],o=t[1];return r===i?a({},e,{local:o}):n===i?a({},e,{default:o}):e}),{local:null,default:null});return i.local||i.default||e}return e}},v1p5:function(e,t,r){(function(e){r("dZ+Y"),r("KKXr"),r("eM6i"),r("8+KV"),r("LK8F"),r("V+eJ"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),r("0l/t"),r("bWfx"),r("DNiP"),r("pIFo"),r("91GP"),r("rE2o"),r("ioFf"),t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i=s(r("q1tI")),o=s(r("MgzW")),c=r("hFT/");function s(e){return e&&e.__esModule?e:{default:e}}var u,l=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},d=function(e){var t=T(e,c.TAG_NAMES.TITLE),r=T(e,c.HELMET_PROPS.TITLE_TEMPLATE);if(r&&t)return r.replace(/%s/g,(function(){return t}));var n=T(e,c.HELMET_PROPS.DEFAULT_TITLE);return t||n||void 0},f=function(e){return T(e,c.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},p=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return a({},e,t)}),{})},A=function(e,t){return t.filter((function(e){return void 0!==e[c.TAG_NAMES.BASE]})).map((function(e){return e[c.TAG_NAMES.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),a=0;a<n.length;a++){var i=n[a].toLowerCase();if(-1!==e.indexOf(i)&&r[i])return t.concat(r)}return t}),[])},h=function(e,t,r){var a={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&y("Helmet: "+e+' should be of type "Array". Instead found type "'+n(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var n={};r.filter((function(e){for(var r=void 0,i=Object.keys(e),o=0;o<i.length;o++){var s=i[o],u=s.toLowerCase();-1===t.indexOf(u)||r===c.TAG_PROPERTIES.REL&&"canonical"===e[r].toLowerCase()||u===c.TAG_PROPERTIES.REL&&"stylesheet"===e[u].toLowerCase()||(r=u),-1===t.indexOf(s)||s!==c.TAG_PROPERTIES.INNER_HTML&&s!==c.TAG_PROPERTIES.CSS_TEXT&&s!==c.TAG_PROPERTIES.ITEM_PROP||(r=s)}if(!r||!e[r])return!1;var l=e[r].toLowerCase();return a[r]||(a[r]={}),n[r]||(n[r]={}),!a[r][l]&&(n[r][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(n),s=0;s<i.length;s++){var u=i[s],l=(0,o.default)({},a[u],n[u]);a[u]=l}return e}),[]).reverse()},T=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},g=(u=Date.now(),function(e){var t=Date.now();t-u>16?(u=t,e(t)):setTimeout((function(){g(e)}),0)}),b=function(e){return clearTimeout(e)},E="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||g:e.requestAnimationFrame||g,m="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||b:e.cancelAnimationFrame||b,y=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},O=null,S=function(e,t){var r=e.baseTag,n=e.bodyAttributes,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,s=e.noscriptTags,u=e.onChangeClientState,l=e.scriptTags,d=e.styleTags,f=e.title,p=e.titleAttributes;R(c.TAG_NAMES.BODY,n),R(c.TAG_NAMES.HTML,a),j(f,p);var A={baseTag:w(c.TAG_NAMES.BASE,r),linkTags:w(c.TAG_NAMES.LINK,i),metaTags:w(c.TAG_NAMES.META,o),noscriptTags:w(c.TAG_NAMES.NOSCRIPT,s),scriptTags:w(c.TAG_NAMES.SCRIPT,l),styleTags:w(c.TAG_NAMES.STYLE,d)},h={},T={};Object.keys(A).forEach((function(e){var t=A[e],r=t.newTags,n=t.oldTags;r.length&&(h[e]=r),n.length&&(T[e]=A[e].oldTags)})),t&&t(),u(e,h,T)},v=function(e){return Array.isArray(e)?e.join(""):e},j=function(e,t){void 0!==e&&document.title!==e&&(document.title=v(e)),R(c.TAG_NAMES.TITLE,t)},R=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(c.HELMET_ATTRIBUTE),a=n?n.split(","):[],i=[].concat(a),o=Object.keys(t),s=0;s<o.length;s++){var u=o[s],l=t[u]||"";r.getAttribute(u)!==l&&r.setAttribute(u,l),-1===a.indexOf(u)&&a.push(u);var d=i.indexOf(u);-1!==d&&i.splice(d,1)}for(var f=i.length-1;f>=0;f--)r.removeAttribute(i[f]);a.length===i.length?r.removeAttribute(c.HELMET_ATTRIBUTE):r.getAttribute(c.HELMET_ATTRIBUTE)!==o.join(",")&&r.setAttribute(c.HELMET_ATTRIBUTE,o.join(","))}},w=function(e,t){var r=document.head||document.querySelector(c.TAG_NAMES.HEAD),n=r.querySelectorAll(e+"["+c.HELMET_ATTRIBUTE+"]"),a=Array.prototype.slice.call(n),i=[],o=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===c.TAG_PROPERTIES.INNER_HTML)r.innerHTML=t.innerHTML;else if(n===c.TAG_PROPERTIES.CSS_TEXT)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var s=void 0===t[n]?"":t[n];r.setAttribute(n,s)}r.setAttribute(c.HELMET_ATTRIBUTE,"true"),a.some((function(e,t){return o=t,r.isEqualNode(e)}))?a.splice(o,1):i.push(r)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return r.appendChild(e)})),{oldTags:a,newTags:i}},P=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},I=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[c.REACT_TAG_MAP[r]||r]=e[r],t}),t)},M=function(e,t,r){switch(e){case c.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[c.HELMET_ATTRIBUTE]=!0,a=I(r,n),[i.default.createElement(c.TAG_NAMES.TITLE,a,e)];var e,r,n,a},toString:function(){return function(e,t,r,n){var a=P(r),i=v(t);return a?"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+a+">"+l(i,n)+"</"+e+">":"<"+e+" "+c.HELMET_ATTRIBUTE+'="true">'+l(i,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case c.ATTRIBUTE_NAMES.BODY:case c.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return I(t)},toString:function(){return P(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,a=((n={key:r})[c.HELMET_ATTRIBUTE]=!0,n);return Object.keys(t).forEach((function(e){var r=c.REACT_TAG_MAP[e]||e;if(r===c.TAG_PROPERTIES.INNER_HTML||r===c.TAG_PROPERTIES.CSS_TEXT){var n=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:n}}else a[r]=t[e]})),i.default.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var a=Object.keys(n).filter((function(e){return!(e===c.TAG_PROPERTIES.INNER_HTML||e===c.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(e,t){var a=void 0===n[t]?t:t+'="'+l(n[t],r)+'"';return e?e+" "+a:a}),""),i=n.innerHTML||n.cssText||"",o=-1===c.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+a+(o?"/>":">"+i+"</"+e+">")}),"")}(e,t,r)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[c.HTML_TAG_MAP[r]||r]=e[r],t}),t)},t.handleClientStateChange=function(e){O&&m(O),e.defer?O=E((function(){S(e,(function(){O=null}))})):(S(e),O=null)},t.mapStateOnServer=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,s=e.noscriptTags,u=e.scriptTags,l=e.styleTags,d=e.title,f=void 0===d?"":d,p=e.titleAttributes;return{base:M(c.TAG_NAMES.BASE,t,n),bodyAttributes:M(c.ATTRIBUTE_NAMES.BODY,r,n),htmlAttributes:M(c.ATTRIBUTE_NAMES.HTML,a,n),link:M(c.TAG_NAMES.LINK,i,n),meta:M(c.TAG_NAMES.META,o,n),noscript:M(c.TAG_NAMES.NOSCRIPT,s,n),script:M(c.TAG_NAMES.SCRIPT,u,n),style:M(c.TAG_NAMES.STYLE,l,n),title:M(c.TAG_NAMES.TITLE,{title:f,titleAttributes:p},n)}},t.reducePropsToState=function(e){return{baseTag:A([c.TAG_PROPERTIES.HREF],e),bodyAttributes:p(c.ATTRIBUTE_NAMES.BODY,e),defer:T(e,c.HELMET_PROPS.DEFER),encode:T(e,c.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:p(c.ATTRIBUTE_NAMES.HTML,e),linkTags:h(c.TAG_NAMES.LINK,[c.TAG_PROPERTIES.REL,c.TAG_PROPERTIES.HREF],e),metaTags:h(c.TAG_NAMES.META,[c.TAG_PROPERTIES.NAME,c.TAG_PROPERTIES.CHARSET,c.TAG_PROPERTIES.HTTPEQUIV,c.TAG_PROPERTIES.PROPERTY,c.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:h(c.TAG_NAMES.NOSCRIPT,[c.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:f(e),scriptTags:h(c.TAG_NAMES.SCRIPT,[c.TAG_PROPERTIES.SRC,c.TAG_PROPERTIES.INNER_HTML],e),styleTags:h(c.TAG_NAMES.STYLE,[c.TAG_PROPERTIES.CSS_TEXT],e),title:d(e),titleAttributes:p(c.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=E,t.warn=y}).call(this,r("yLpj"))}}]);
//# sourceMappingURL=a657ff25fbddca47b3b72ac6c91765daab8a2650-7764508c1ce820cc64a8.js.map