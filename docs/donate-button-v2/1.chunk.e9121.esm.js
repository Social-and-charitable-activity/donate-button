(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"1LOa":function(n,e,t){(e=t("Ai0b")(!1)).push([n.i,".donation-type {\n    font-weight: bold;\n    color: var(--color-primary);\n    padding-bottom: 2rem;\n}\n\n.donation-type span {\n    color: #00a37f;\n    text-decoration: underline;\n    cursor: pointer;\n}\n\n@media only screen and (max-width: 37.5em) {\n    .donation-type {\n        padding-bottom: 1.5rem;\n    }\n}\n",""]),n.exports=e},"2Pik":function(n,e,t){var o=t("mU8M");n.exports="string"==typeof o?o:o.toString()},"4kCZ":function(n,e,t){(e=t("Ai0b")(!1)).push([n.i,".btn {\n    border: none;\n    outline: none;\n    width: 100%;\n\n    font-family: inherit;\n    font-size: 1rem;\n    font-weight: 500;\n    line-height: 1;\n\n    cursor: pointer;\n    border-radius: 100px;\n    color: white;\n    padding: 1.25rem 0;\n    background-color: rgb(0, 163, 127);\n\n    transition: all 0.2s;\n}\n\n.btn:hover {\n    background-color: rgb(0, 124, 97);\n}\n\n.btn:active {\n    background-color: rgb(0, 139, 109);\n}\n\n@media only screen and (max-width: 64em) {\n    .btn {\n        font-size: 0.875rem;\n        padding: 1rem 0;\n    }\n}\n",""]),n.exports=e},"7hI2":function(n,e,t){(e=t("Ai0b")(!1)).push([n.i,".donations {\n    grid-column: 1 / 2;\n    grid-row: 1 / -1;\n    padding: 0 2rem;\n    display: grid;\n    grid-template-rows: repeat(2, max-content) max-content repeat(2, max-content);\n    overflow-y: auto;\n    row-gap: 2rem;\n}\n\n@media only screen and (max-width: 64em) {\n    .donations {\n        row-gap: 1.5rem;\n        padding: 0 1.5rem;\n    }\n}\n\n.donations__header *:not(:last-child) {\n    margin-bottom: 0.5rem;\n}\n\n.donations__form {\n    align-self: center;\n}\n\n.donations__form--one-column > *:not(:last-child) {\n    margin-bottom: 1rem;\n}\n\n.donations__form--two-column {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    gap: 1rem;\n}\n\n.donations__input {\n    grid-column: 1 / -1;\n}\n\n.donations__submit {\n    display: flex;\n    flex-direction: column;\n}\n\n.donations__submit > *:not(:last-child) {\n    margin-bottom: 1rem;\n}\n",""]),n.exports=e},Ai0b:function(n){"use strict";function e(n,e){var t,o,i=n[1]||"",r=n[3];if(!r)return i;if(e&&"function"==typeof btoa){var a=(t=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),"/*# ".concat(o," */")),s=r.sources.map((function(n){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(n," */")}));return[i].concat(s).concat([a]).join("\n")}return[i].join("\n")}n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var o=e(t,n);return t[2]?"@media ".concat(t[2]," {").concat(o,"}"):o})).join("")},t.i=function(n,e,o){"string"==typeof n&&(n=[[null,n,""]]);var i={};if(o)for(var r=0;r<this.length;r++){var a=this[r][0];null!=a&&(i[a]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);o&&i[l[0]]||(e&&(l[2]=l[2]?"".concat(e," and ").concat(l[2]):e),t.push(l))}},t}},CvPi:function(n,e,t){(e=t("Ai0b")(!1)).push([n.i,".input {\n    position: relative;\n    display: flex;\n    /* padding: 1rem; */\n}\n\n.input__container {\n    display: flex;\n    flex-direction: column;\n    border-radius: 8px;\n    border: 1px solid rgba(0, 0, 0, 0.1);\n    overflow: hidden;\n}\n\n.input--selected {\n    border-color: #000;\n}\n\n@media only screen and (max-width: 37.5em) {\n    .input--selected .input__description {\n        padding: 1rem;\n        height: auto;\n        visibility: visible;\n        border-top: 1px solid #000;\n    }\n}\n\n.input__description {\n    visibility: hidden;\n    height: 0;\n    transition: all 0.2s;\n}\n\n.no-line-height {\n    line-height: 1;\n}\n\n.input__input {\n    border: none;\n    font-family: inherit;\n    border-bottom: 1px solid transparent;\n    background-color: #f3f6f6;\n\n    width: 100%;\n    padding: 1rem 4.5rem 1rem 3rem;\n    outline: none;\n\n    transition: all 0.4s;\n}\n\n.input__input::placeholder {\n    opacity: 0.4;\n    font-weight: 500;\n}\n\n.input--filled .input__input,\n.input__input:focus {\n    background: #fff;\n}\n\n.input--filled {\n    border: 1px solid rgba(0, 0, 0);\n    background: #fff;\n}\n\n.no-line-height {\n    line-height: 1;\n}\n\n@media only screen and (max-width: 64em) {\n    .input__input {\n        padding: 0.75rem 4rem 0.75rem 2.5rem;\n    }\n}\n\n.input__prefix {\n    position: absolute;\n    top: 50%;\n    left: 1rem;\n    opacity: 0.4;\n    font-weight: 500;\n    transform: translateY(-50%);\n}\n\n.input__suffix {\n    position: absolute;\n    top: 50%;\n    right: 1rem;\n    transform: translateY(-50%);\n}\n",""]),n.exports=e},EJIf:function(n,e,t){var o=t("4kCZ");n.exports="string"==typeof o?o:o.toString()},KIIj:function(n,e,t){var o=t("ZaWy");n.exports="string"==typeof o?o:o.toString()},LhVE:function(n,e,t){(e=t("Ai0b")(!1)).push([n.i,".images {\n    grid-row: 1 / 2;\n    position: relative;\n    background-size: cover;\n    background-position: center;\n}\n\n.images__img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    display: block;\n}\n",""]),n.exports=e},Oxty:function(n,e,t){var o=t("CvPi");n.exports="string"==typeof o?o:o.toString()},"R3/S":function(n,e,t){(e=t("Ai0b")(!1)).push([n.i,".logo {\n    display: grid;\n    grid-template-columns: min-content 1fr;\n    grid-template-rows: repeat(2, 1fr);\n    column-gap: 1rem;\n\n    /* Fix logo to the top and scroll the content beneath*/\n    position: sticky;\n    top: 0;\n    background: white;\n\n    margin: -1rem -2rem;\n    padding: 1.5rem 2rem;\n}\n\n@media only screen and (max-width: 64em) {\n    .logo {\n        margin: -1 -1.5rem;\n        padding: 1 1.5rem;\n    }\n}\n\n.logo__img {\n    height: 2rem;\n    grid-row: 1 / -1;\n    align-self: center;\n}\n\n.logo__title {\n    align-self: start;\n}\n\n.logo__link {\n    align-self: end;\n}\n\n.logo__link:link,\n.logo__link:visited {\n    color: black;\n    opacity: 1;\n    text-decoration: none;\n}\n",""]),n.exports=e},Rsgl:function(n,e,t){var o=t("LhVE");n.exports="string"==typeof o?o:o.toString()},SZxn:function(n,e,t){var o=t("tEhV");n.exports="string"==typeof o?o:o.toString()},UpYz:function(n,e,t){var o=t("R3/S");n.exports="string"==typeof o?o:o.toString()},YENv:function(n){"use strict";n.exports=function(n){for(var e=1,t=0,o=0,i=n.length,r=-4&i;o<r;){for(var a=Math.min(o+4096,r);o<a;o+=4)t+=(e+=n.charCodeAt(o))+(e+=n.charCodeAt(o+1))+(e+=n.charCodeAt(o+2))+(e+=n.charCodeAt(o+3));e%=65521,t%=65521}for(;o<i;o++)t+=e+=n.charCodeAt(o);return(e%=65521)|(t%=65521)<<16}},YuUb:function(n,e,t){"use strict";function o(){return(o=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n}).apply(this,arguments)}function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function r(){return(r=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n}).apply(this,arguments)}function a(n,e){for(var t in e)n[t]=e[t];return n}function s(n,e){for(var t in n)if("__source"!==t&&!(t in e))return!0;for(var o in e)if("__source"!==o&&n[o]!==e[o])return!0;return!1}function l(n){this.props=n}function c(n){return n&&(n.__c&&n.__c.__H&&(n.__c.__H.__.forEach((function(n){"function"==typeof n.__c&&n.__c()})),n.__c.__H=null),(n=a({},n)).__c=null,n.__k=n.__k&&n.__k.map(c)),n}function p(n){return n&&(n.__v=null,n.__k=n.__k&&n.__k.map(p)),n}function d(){this.__u=0,this.t=null,this.__b=null}function m(n){var e=n.__.__c;return e&&e.__e&&e.__e(n)}function u(){this.u=null,this.o=null}function h(){}function g(){return this.cancelBubble}function f(){return this.defaultPrevented}function b(){return(b=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n}).apply(this,arguments)}t.r(e),t.d(e,"default",(function(){return Nn}));var _=t("hosL"),y=t("QRet"),v=t("KIIj"),j=t.n(v),x=t("uuJQ"),O=t.n(x),w=t("Oxty"),C=t.n(w),k=t("Rsgl"),N=t.n(k),S=t("2Pik"),E=t.n(S),D=t("jgzK"),$=t.n(D),A=t("lUhE"),T=t.n(A),U=t("UpYz"),z=t.n(U),I=t("SZxn"),P=t.n(I),R=t("EJIf");var F=[j.a,O.a,C.a,N.a,E.a,$.a,T.a,z.a,P.a,t.n(R).a],L=t("YENv"),Y=t.n(L);var M=class extends _.Component{constructor(...n){super(...n),i(this,"scopeClassNameCache",{}),i(this,"scopedCSSTextCache",{}),i(this,"scoped",void 0===this.props.scoped||this.props.scoped),i(this,"pepper",""),i(this,"getStyleString",()=>{if(this.props.children instanceof Array){const n=this.props.children.filter(n=>!Object(_.isValidElement)(n)&&"string"==typeof n);if(n.length>1)throw new Error(`Multiple style objects as direct descedents of a\n        Style component are not supported (${n.length} style objects detected):\n        ${n[0]}\n        `);return n[0]}return"string"!=typeof this.props.children||Object(_.isValidElement)(this.props.children)?null:this.props.children}),i(this,"getRootElement",()=>{if(this.props.children instanceof Array){const n=this.props.children.filter(n=>Object(_.isValidElement)(n));return n[0]}return Object(_.isValidElement)(this.props.children)?this.props.children:null}),i(this,"getRootSelectors",n=>{const e=[];return n.props.id&&e.push("#"+n.props.id),n.props.className&&n.props.className.trim().split(/\s+/g).forEach(n=>e.push(n)),e.length||"function"==typeof n.type||e.push(n.type),e}),i(this,"processCSSText",(n,e,t)=>n.replace(/\s*\/\/(?![^(]*\)).*|\s*\/\*.*\*\//g,"").replace(/\s\s+/g," ").split("}").map(n=>{const o=/.*:.*;/g,i=/.*:.*(;|$|\s+)/g,r=/\s*@/g,a=/\s*(([0-9][0-9]?|100)\s*%)|\s*(to|from)\s*$/g;return n.split("{").map((n,s,l)=>{if(!n.trim().length)return"";const c=l.length-1===s&&n.match(i);if(n.match(o)||c)return this.escapeTextContentForBrowser(n);const p=n;return e&&!/:target/gi.test(p)?p.match(r)||p.match(a)?p:this.scopeSelector(e,p,t):p}).join("{\n")}).join("}\n")),i(this,"escaper",n=>({">":"&gt;","<":"&lt;"}[n])),i(this,"escapeTextContentForBrowser",n=>(""+n).replace(/[><]/g,this.escaper)),i(this,"scopeSelector",(n,e,t)=>{const o=[];return e.split(/,(?![^(|[]*\)|\])/g).forEach(e=>{let i,r;if((null==t?void 0:t.length)&&t.some(n=>e.match(n))){r=e;const a=null==t?void 0:t.map(n=>n.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"));r=r.replace(new RegExp(`(${null==a?void 0:a.join("|")})`),"$1"+n),i=this.scoped?`${n} ${e}`:e,o.push(r,i)}else i=this.scoped?`${n} ${e}`:e,o.push(i)}),!this.scoped&&o.length>1?o[1]:o.join(", ")}),i(this,"getScopeClassName",(n,e)=>{let t=n;return e&&(this.pepper="",this.traverseObjectToGeneratePepper(e),t+=this.pepper),"s"+Y()(t)}),i(this,"traverseObjectToGeneratePepper",(n,e=0)=>{e>32||this.pepper.length>1e4||Object.keys(n).forEach(t=>{const o=/^[_$]|type|ref|^value$/.test(t);n[t]&&"object"==typeof n[t]&&!o?this.traverseObjectToGeneratePepper(n[t],e+1):n[t]&&!o&&"function"!=typeof n[t]&&(this.pepper+=n[t])})}),i(this,"isVoidElement",n=>["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"].some(e=>n===e)),i(this,"createStyleElement",(n,e)=>Object(_.h)("style",{id:"direflow_styles",type:"text/css",key:e,dangerouslySetInnerHTML:{__html:n||""}})),i(this,"getNewChildrenForCloneElement",(n,e,t)=>[this.createStyleElement(n,t)].concat(e.props.children))}render(){const n=this.getStyleString(),e=this.getRootElement();if(!n&&e)return e.props.children;if(n&&!e)return this.createStyleElement(this.processCSSText(n),this.getScopeClassName(n,e));const t=e.props.className?e.props.className+" ":"";let i,r;const a=t+(e.props.id?e.props.id:"")+n;this.scopeClassNameCache[a]?(i=this.scopeClassNameCache[a],r=this.scopedCSSTextCache[i]):(i=this.getScopeClassName(n,e),r=this.processCSSText(n,"."+i,this.getRootSelectors(e)),this.scopeClassNameCache[a]=i,this.scopedCSSTextCache[i]=r);const s=this.scoped?`${t}${i}`:t;return Object(_.cloneElement)(e,o({},e.props,{className:s.trim()}),this.getNewChildrenForCloneElement(r,e,i))}};const V=n=>{let e;return e="string"==typeof n.styles?n.styles.toString():n.styles.reduce((n,e)=>`${n} ${e}`),Object(_.h)(M,{scoped:n.scoped},e,n.children)},W=Object(_.createContext)({});var B=W;var Z=()=>{const n=(()=>{const n=window.navigator.language;return n.includes("-")?n.split("-")[0]:n})(),{i18n:e,language:t}=Object(y.b)(W);return e[t]?e[t]:e[n]?e[n]:e.en};const H=(n,e)=>e.replace(/{{(\w*)}}/g,(e,t)=>n[t]?n[t]:""),J=(n,e,t,o)=>{if(n){const i=new RegExp(`<${e}>(.*)</${e}>`,"g");let[r,a,s]=n.split(i);const l=Object(_.h)(t,o,a);return Object(_.h)(_.Fragment,null,r,l,s)}return n};var G=t.p+"36f5abc6ad7bf3734f2a5c3a4f33ec90.svg";var K=Object(_.h)("img",{className:"logo__img",src:G,alt:"logo"});var q=({monthlyDonation:n=!0,scrolled:e=!1})=>{const t=Z(),o=n?t.monthly.logo:t.oneTime.logo,i=((n,e)=>J(n,"link","a",{className:"logo__link",href:e}))(o.text,o.link),r=e?"box-shadow: 0 3px 7px 0px rgba(0, 0, 0, 0.1)":"";return Object(_.h)("div",{className:"logo",style:r},K,Object(_.h)("div",{className:"t-title logo__title"},o.header),Object(_.h)("p",{className:"t-body--small logo__link"},i))};var Q=({handleClick:n,monthlyDonation:e})=>{const t=Z(),o=e?t.monthly:t.oneTime;return Object(_.h)("p",{className:"t-title donation-type"},((n,e)=>J(n,"action","span",{onClick:e}))(o.switch,n))};var X=({monthlyDonation:n})=>{const e=Z(),t=n?e.monthly:e.oneTime;return Object(_.h)(_.Fragment,null,Object(_.h)("h1",{className:"t-heading-primary"},t.header),Object(_.h)("h2",{className:"t-heading-secondary"},t.info))};var nn=({name:n,text:e,amount:t,selected:o,handleClick:i,description:r,image:a,bgColor:s})=>{const l=["radio-button"];o&&l.push("radio-button--selected");const c=["radio-button__label"].concat([e?"u-justify-content-space-between":"u-justify-content-center"]);return Object(_.h)("div",{className:l.join(" ")},Object(_.h)("input",{onClick:i,className:"radio-button__input",type:"radio",name:n,id:t}),Object(_.h)("label",{className:c.join(" "),htmlFor:t},e&&Object(_.h)("span",{className:"t-label radio-button__text"},e),Object(_.h)("span",{className:"t-label radio-button__amount"},"$",t)),e&&r&&Object(_.h)("div",{style:{backgroundColor:s},className:"radio-button__extra"},Object(_.h)("div",{className:"radio-button__img-container"},Object(_.h)("img",{className:"radio-button__image",src:a,alt:e})),Object(_.h)("p",{className:"t-body radio-button__description"},r)))},en=Object(_.h)("span",{className:"t-input input__prefix no-line-height"},"$");var tn=n=>{let{value:e,setValue:t,extraClasses:o,label:i,placeholder:a,description:s,selected:l}=n,c=function(n,e){if(null==n)return{};var t,o,i={},r=Object.keys(n);for(o=0;o<r.length;o++)e.indexOf(t=r[o])>=0||(i[t]=n[t]);return i}(n,["value","setValue","extraClasses","label","placeholder","description","selected"]);const p=["input__container"].concat(o).concat([l?"input--selected":""]).concat(e?["input--filled"]:[]);return Object(_.h)("div",{className:p.join(" ")},Object(_.h)("div",{className:"input"},en,Object(_.h)("input",r({className:["t-input","input__input"].join(" "),placeholder:a,type:"text",value:e,onChange:n=>t(n.target.value)},c)),i&&Object(_.h)("span",{className:"t-input input__suffix no-line-height"},i)),s&&Object(_.h)("p",{className:"t-body input__description"},s))};var on=({handleClick:n,extraClasses:e,children:t})=>Object(_.h)("button",{className:["btn"].concat(e).join(" "),onClick:n},t);var rn=n=>!!(n&&n.constructor&&n.call&&n.apply);var an=Object(_.createContext)();(l.prototype=new _.Component).isPureReactComponent=!0,l.prototype.shouldComponentUpdate=function(n,e){return s(this.props,n)||s(this.state,e)};var sn=_.options.__b;_.options.__b=function(n){n.type&&n.type.__f&&n.ref&&(n.props.ref=n.ref,n.ref=null),sn&&sn(n)};"undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref");var ln=_.options.__e;_.options.__e=function(n,e,t){if(n.then)for(var o,i=e;i=i.__;)if((o=i.__c)&&o.__c)return null==e.__e&&(e.__e=t.__e,e.__k=t.__k),o.__c(n,e);ln(n,e,t)},(d.prototype=new _.Component).__c=function(n,e){var t=e.__c,o=this;null==o.t&&(o.t=[]),o.t.push(t);var i=m(o.__v),r=!1,a=function(){r||(r=!0,t.componentWillUnmount=t.__c,i?i(s):s())};t.__c=t.componentWillUnmount,t.componentWillUnmount=function(){a(),t.__c&&t.__c()};var s=function(){var n;if(!--o.__u)for(o.__v.__k[0]=p(o.state.__e),o.setState({__e:o.__b=null});n=o.t.pop();)n.forceUpdate()};!0===e.__h||o.__u++||o.setState({__e:o.__b=o.__v.__k[0]}),n.then(a,a)},d.prototype.componentWillUnmount=function(){this.t=[]},d.prototype.render=function(n,e){this.__b&&(this.__v.__k&&(this.__v.__k[0]=c(this.__b)),this.__b=null);var t=e.__e&&Object(_.createElement)(_.Fragment,null,n.fallback);return t&&(t.__h=null),[Object(_.createElement)(_.Fragment,null,e.__e?null:n.children),t]};var cn=function(n,e,t){if(++t[1]===t[0]&&n.o.delete(e),n.props.revealOrder&&("t"!==n.props.revealOrder[0]||!n.o.size))for(t=n.u;t;){for(;t.length>3;)t.pop()();if(t[1]<t[0])break;n.u=t=t[2]}};(u.prototype=new _.Component).__e=function(n){var e=this,t=m(e.__v),o=e.o.get(n);return o[0]++,function(i){var r=function(){e.props.revealOrder?(o.push(i),cn(e,n,o)):i()};t?t(r):r()}},u.prototype.render=function(n){this.u=null,this.o=new Map;var e=Object(_.toChildArray)(n.children);n.revealOrder&&"b"===n.revealOrder[0]&&e.reverse();for(var t=e.length;t--;)this.o.set(e[t],this.u=[1,0,this.u]);return n.children},u.prototype.componentDidUpdate=u.prototype.componentDidMount=function(){var n=this;this.o.forEach((function(e,t){cn(n,t,e)}))};var pn="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,dn=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,mn="undefined"!=typeof Symbol?/fil|che|rad/i:/fil|che|ra/i;_.Component.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach((function(n){Object.defineProperty(_.Component.prototype,n,{configurable:!0,get:function(){return this["UNSAFE_"+n]},set:function(e){Object.defineProperty(this,n,{configurable:!0,writable:!0,value:e})}})}));var un=_.options.event;_.options.event=function(n){return un&&(n=un(n)),n.persist=h,n.isPropagationStopped=g,n.isDefaultPrevented=f,n.nativeEvent=n};var hn={configurable:!0,get:function(){return this.class}},gn=_.options.vnode;_.options.vnode=function(n){var e=n.type,t=n.props,o=t;if("string"==typeof e){for(var i in o={},t){var r=t[i];"defaultValue"===i&&"value"in t&&null==t.value?i="value":"download"===i&&!0===r?r="":/ondoubleclick/i.test(i)?i="ondblclick":/^onchange(textarea|input)/i.test(i+e)&&!mn.test(t.type)?i="oninput":/^on(Ani|Tra|Tou|BeforeInp)/.test(i)?i=i.toLowerCase():dn.test(i)?i=i.replace(/[A-Z0-9]/,"-$&").toLowerCase():null===r&&(r=void 0),o[i]=r}"select"==e&&o.multiple&&Array.isArray(o.value)&&(o.value=Object(_.toChildArray)(t.children).forEach((function(n){n.props.selected=-1!=o.value.indexOf(n.props.value)}))),n.props=o}e&&t.class!=t.className&&(hn.enumerable="className"in t,null!=t.className&&(o.class=t.className),Object.defineProperty(o,"className",hn)),n.$$typeof=pn,gn&&gn(n)};var fn=_.options.__r;_.options.__r=function(n){fn&&fn(n),n.__c};var bn=({monthlyDonation:n,extraClasses:e=[]})=>{const{donationAmount:t}=Object(y.b)(an),{onSubmit:o,currency:i,mode:r}=Object(y.b)(B),a=Z(),s=n?a.monthly:a.oneTime,l=e=>{if(!isNaN(t)){const i=n?"MONTHLY":"ONCE";if(rn(o))o({amount:t,frequency:i});else{const n=((n,e,t,o,i)=>`${`https://www.every.org/${n}/donate?frequency=${e}&amount=${t}&utm_campaign=single-or-split&utm_content=${o.toLowerCase()}&utm_source=${n}&utm_medium=every-month`}${Object.keys(i).reduce((n,e)=>n.concat(`&${e}=${i[e]}`),"")}`)(o.charity,i,t,e,o.params);window.location.href=n}}};return Object(_.h)(on,{extraClasses:e,handleClick:()=>l(r)},((n,e,t)=>n&&!isNaN(n)?H({amount:`$${n} ${t}`},e):H({amount:""},e))(t,s.button,i))};const _n=(n,e)=>n.findIndex(n=>n.amount==e);var yn=({monthlyDonation:n})=>{const{donationAmount:e,setDonationAmount:t,customDonation:o,setCustomDonation:i,setTriggerAnimation:r}=Object(y.b)(an),{monthly:a,oneTime:s,onSubmit:l}=Object(y.b)(B),[c,p]=Object(y.j)(!1),d=Z(),m=n?d.monthly:d.oneTime;Object(y.d)(()=>{const n=a.levels.find(n=>n.default);if(n){g(a.levels[0].amount);const e=setTimeout(()=>{g(n.amount)});return()=>clearTimeout(e)}},[]);const u=()=>{const i=_n(a.levels,e);n&&r([i,a.levels.length-1]),t(o),p(!0)},h=()=>{p(!1)},g=s=>{const l=o||!e?a.levels.length-1:_n(a.levels,e),c=_n(a.levels,s);n&&r([l,c]),t(s),i("")},f=n=>{t(n),i(n)},b=a.levels.filter(n=>"custom"!==n.amount),v=a.levels.find(n=>"custom"===n.amount),j=n?b.every(n=>{var e,t;return null==m||null==(e=m.levels)||null==(t=e.find(e=>e.amount===n.amount))?void 0:t.name}):s.levels.every(n=>{var e,t;return null==m||null==(e=m.levels)||null==(t=e.find(e=>e.amount===n))?void 0:t.name}),x=["donations__form"].concat([j?"donations__form--one-column":"donations__form--two-column"]);return Object(_.h)(_.Fragment,null,Object(_.h)("div",{className:x.join(" ")},n&&Object(_.h)(_.Fragment,null,b.map((n,t)=>{var o,i,r;return Object(_.h)(nn,{key:t,name:"amount",amount:n.amount,selected:e===n.amount,handleClick:()=>g(n.amount),text:j?null==(o=m.levels.find(e=>e.amount===n.amount))?void 0:o.name:"",description:(r=null==(i=m.levels.find(e=>e.amount===n.amount))?void 0:i.description1,J(r,"bold","span",{})),image:n.img,bgColor:n.bgColor})}),v&&Object(_.h)(tn,{label:m.custom.label,placeholder:m.custom.placeholder,value:o,setValue:f,description:d.oneTime.description,extraClasses:["donations__input"],onFocus:u,onBlur:h,selected:c})),!n&&Object(_.h)(_.Fragment,null,s.levels.map(n=>{var t,o;return Object(_.h)(nn,{key:n,name:"amount",amount:n,selected:e===n,handleClick:()=>g(n),text:j?null==m||null==(t=m.levels)||null==(o=t.find(e=>(null==e?void 0:e.amount)===n))?void 0:o.name:""})}),s.allowCustom&&Object(_.h)(tn,{placeholder:m.custom.placeholder,value:o,setValue:f,extraClasses:["donations__input"],onFocus:u,onBlur:h,selected:c}))),Object(_.h)("div",{className:"donations__submit"},Object(_.h)(bn,{extraClasses:["u-hide-mobile"]}),Object(_.h)("p",{className:"t-body--small"},d.footer)))};var vn=({monthlyDonation:n,setMonthlyDonation:e})=>{const t=Object(y.i)(null),[o,i]=Object(y.j)(!1);return Object(y.d)(()=>{const n=()=>{t.current&&i(t.current.scrollTop>0)};return t.current.addEventListener("scroll",n),n(),()=>t.current.removeEventListener("scroll",n)},[]),Object(_.h)(_.Fragment,null,Object(_.h)("div",{ref:t,className:"donations"},Object(_.h)(q,{scrolled:o,monthlyDonation:n}),Object(_.h)("div",{className:"donations__header"},Object(_.h)(X,{monthlyDonation:n})),Object(_.h)(yn,{monthlyDonation:n}),Object(_.h)(Q,{handleClick:()=>e(!n),monthlyDonation:n})))};const jn=(n,e,t,o)=>{if(e){const e=!t||o?n.monthly.custom:((n,e)=>n.reduce((n,t)=>parseInt(t.amount,10)<=parseInt(e,10)?t:n))(n.monthly.levels,t);return Object(_.h)(_.Fragment,null,Object(_.h)("p",{className:"t-heading-secondary"},e.description1&&J(e.description1,"bold","strong",{})),e.description2&&Object(_.h)("p",{className:"t-heading-secondary"},e.description2))}return Object(_.h)("p",{className:"t-heading-secondary"},n.oneTime.description)};var xn=({bgColor:n})=>{const e=Object(y.i)(null),{donationAmount:t,monthlyDonation:o,customDonation:i}=Object(y.b)(an),r=Object(y.b)(B),a=Z();return Object(y.f)(()=>{e.current&&(e.current.style.background=o?n:r.oneTime.bgColor)},[t,o,r,n]),Object(_.h)("div",{ref:e,className:"description"},jn(a,o,t,i))};var On=({image:n})=>{const e=Object(y.b)(B),{monthlyDonation:t}=Object(y.b)(an),o=t?n:e.oneTime.img;return Object(_.h)("div",{className:"images",style:{backgroundImage:`linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 24.02%), url(${o})`}})};var wn=()=>{const{company:n}=Z(),e=n.logo||G;return Object(_.h)("div",{className:"company"},Object(_.h)("img",{className:"company__img",src:e,alt:"Compoany logo"}),Object(_.h)("p",{className:"t-title company__title"},n.name),Object(_.h)("p",{className:"t-body--small company__subtitle"},n.location))},Cn=t("ahFK"),kn=Object(_.h)(wn,null),Nn=function({options:n,hide:e}){var t,o;const i=n=>n.target===n.currentTarget&&e(),[r,a]=Object(y.j)(!0),s=n.monthly.levels.find(n=>n.default),[l,c]=Object(y.j)((null==s?void 0:s.amount)||(null==(t=n.monthly.levels)||null==(o=t[0])?void 0:o.amount)),[p,d]=Object(y.j)(""),[m,u]=Object(y.j)([-1,0]),[h,g]=Object(y.j)(n.monthly.levels.sort((n,e)=>isNaN(e.amount)?-1:0));return Object(y.d)(()=>{const[n,e]=m;if(n>e){const t=h.map((t,o)=>o===n?b({},t,{classes:["fadeOutDown"]}):o===e?b({},t,{classes:["fadeInDown","right-panel__item--active"]}):t);g(t)}if(n<e){const t=h.map((t,o)=>b({},t,o===n?{classes:["fadeOutUp"]}:o===e?{classes:["fadeInUp","right-panel__item--active"]}:{classes:["right-panel__item--hidden"]}));g(t)}const t=setTimeout(()=>{const n=h.map((n,t)=>b({},n,t===e?{classes:["right-panel__item--active"]}:{classes:["right-panel__item--hidden"]}));g(n)},300);return()=>clearTimeout(t)},[m]),Object(_.h)(V,{scoped:!1,styles:F},Object(_.h)("div",null,Object(_.h)("div",{className:"wrapper",onClick:i},Object(_.h)("div",{className:"close",onClick:i}),Object(_.h)(B.Provider,{value:n},Object(_.h)(an.Provider,{value:{monthlyDonation:r,setMonthlyDonation:a,donationAmount:l,setDonationAmount:c,customDonation:p,setCustomDonation:d,setTriggerAnimation:u}},n.mode.toUpperCase()===Cn.a.SPLIT_PANEL&&Object(_.h)("div",{className:"widget widget--split"},Object(_.h)(vn,{monthlyDonation:r,setMonthlyDonation:a}),Object(_.h)("div",{className:"right-panel"},kn,h.map((n,e)=>Object(_.h)("div",{key:e,className:["right-panel__item"].concat(n.classes).join(" ")},Object(_.h)(On,{image:n.img}),Object(_.h)(xn,{bgColor:n.bgColor}))))),n.mode.toUpperCase()===Cn.a.SINGLE&&Object(_.h)("div",{className:"widget widget--single"},Object(_.h)(vn,{monthlyDonation:r,setMonthlyDonation:a})),Object(_.h)("div",{className:"u-hide-desktop btn-mobile"},Object(_.h)(bn,{monthlyDonation:r,extraClasses:["u-hide-desktop"]})))))))}},ZaWy:function(n,e,t){(e=t("Ai0b")(!1)).push([n.i,'/* \n* Reset stylesheet\n*/\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\n*::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\n\n/* \n* Base styles\n*/\n\n.wrapper {\n  --color-primary: #2e3434;\n  z-index: 999;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  flex-direction: column;\n  background: rgba(0, 0, 0, 0.5);\n  color: var(--color-primary);\n  justify-content: center;\n  align-items: center;\n  font-family: "Basis Grotesque Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Oxygen-Sans, Ubuntu, Cantarell,\n    "Helvetica Neue", Roboto, sans-serif;\n\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n@media only screen and (max-width: 37.5em) {\n  .wrapper {\n    background: #fff;\n  }\n}\n\n.close {\n  position: absolute;\n  top: 1.5rem;\n  right: 1rem;\n  width: 1.5rem;\n  height: 2px;\n  background: #000;\n  transform: rotate(45deg);\n\n  transition: all 0.2s;\n}\n\n.close::after {\n  content: "";\n  position: absolute;\n  left: 0;\n  background: #000;\n  width: 1.5rem;\n  height: 2px;\n\n  transform: rotate(-90deg);\n}\n\n/* \n* Typography\n*/\n\n.t-heading-primary {\n  font-size: 2rem;\n  line-height: 1.25;\n  font-weight: bold;\n  letter-spacing: -0.025em;\n}\n\n.t-heading-secondary {\n  font-size: 1rem;\n  line-height: 1.5;\n  color: #000000;\n  letter-spacing: -0.01em;\n  font-weight: 400;\n}\n\n.t-title {\n  font-size: 1rem;\n  line-height: 1.25;\n  font-weight: bold;\n}\n\n.t-body {\n  font-size: 0.75rem;\n  line-height: 1.33;\n  font-weight: 400;\n  color: #000;\n}\n\n.t-body--small {\n  font-size: 0.75rem;\n  line-height: 1rem;\n  font-weight: 400;\n  opacity: 0.5;\n  color: #000;\n}\n\n.t-input {\n  font-weight: bold;\n  font-size: 1rem;\n  line-height: 1.25;\n  color: #2e3434;\n}\n\n.t-label {\n  font-weight: bold;\n  font-size: 1rem;\n  line-height: 1;\n  color: #2e3434;\n}\n\n@media only screen and (max-width: 64em) {\n  .t-heading-primary {\n    font-size: 1.5rem;\n    line-height: 1.167;\n    letter-spacing: -0.02em;\n  }\n\n  .t-heading-secondary {\n    font-size: 0.75rem;\n    line-height: 1.43;\n    letter-spacing: -0.01em;\n  }\n\n  .t-title {\n    font-size: 0.75rem;\n    line-height: 1;\n  }\n\n  .t-body--small {\n    font-size: 0.75rem;\n    line-height: 1.33;\n  }\n\n  .t-input {\n    font-size: 0.875rem;\n    line-height: 1.71;\n  }\n}\n\n/* \n* Components\n*/\n\n.widget {\n  background: white;\n  border-radius: 1.5rem;\n  overflow: hidden;\n\n  box-sizing: border-box;\n\n  font-weight: normal;\n  line-height: 1.2;\n  transition: all 0.2s;\n}\n\n.widget--split {\n  width: 888px;\n  height: max-content;\n  max-height: 95%;\n  display: grid;\n\n  grid-template-columns: repeat(2, 50%);\n  grid-template-rows: 1fr max-content;\n}\n\n.widget--single {\n  width: 444px;\n  max-height: 95%;\n  display: grid;\n  height: auto;\n}\n\n.btn-mobile {\n  padding: 1.5rem 1rem;\n  position: sticky;\n  bottom: 0;\n  background: white;\n  width: 100%;\n  box-sizing: border-box;\n}\n\n/* @media only screen and (max-height: 57.5em) {\n  .widget--single {\n    width: 300px;\n  }\n} */\n\n/* 1024px */\n@media only screen and (max-width: 64em) {\n  .widget--split {\n    width: 600px;\n  }\n\n  .widget--single {\n    width: 300px;\n  }\n\n  .widget--single {\n    width: 300px;\n  }\n}\n\n/* 600px */\n@media only screen and (max-width: 37.5em) {\n  .widget {\n    height: 100%;\n  }\n\n  .widget--split {\n    grid-template-columns: 1fr;\n    width: 100%;\n    height: 100%;\n    max-height: none;\n    overflow-y: auto;\n  }\n\n  .widget--single {\n    grid-template-columns: 1fr;\n    max-height: none;\n    width: 100%;\n    height: 100%;\n  }\n}\n\n.right-panel {\n  height: 100%;\n  display: grid;\n\n  position: relative;\n}\n\n@media only screen and (max-width: 37.5em) {\n  .right-panel {\n    display: none;\n  }\n}\n\n.right-panel__item {\n  display: grid;\n\n  grid-row: 1/-1;\n  grid-column: 1/-1;\n  grid-template-rows: 1fr max-content;\n}\n\n.right-panel__item--active {\n  z-index: 99;\n}\n\n.right-panel__item--hidden {\n  opacity: 0;\n}\n\n.fadeOutDown {\n  animation: fadeOutDown 0.3s;\n}\n\n.fadeInDown {\n  animation: fadeInDown 0.3s;\n}\n\n.fadeOutUp {\n  animation: fadeOutUp 0.3s;\n}\n\n.fadeInUp {\n  animation: fadeInUp 0.3s;\n}\n\n@keyframes fadeOutDown {\n  0% {\n    transform: translateY(0);\n    opacity: 1;\n  }\n\n  99% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    transform: translateY(100%);\n  }\n}\n\n@keyframes fadeInDown {\n  0% {\n    transform: translateY(-100%);\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n@keyframes fadeOutUp {\n  0% {\n    transform: translateY(0);\n    opacity: 1;\n  }\n\n  99% {\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 0;\n    transform: translateY(-100%);\n  }\n}\n\n@keyframes fadeInUp {\n  0% {\n    transform: translateY(100%);\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n/* \n* Utils\n*/\n\n.u-justify-content-space-between {\n  justify-content: space-between;\n}\n\n.u-justify-content-center {\n  justify-content: center;\n}\n\n.u-hide-desktop {\n  display: none;\n}\n\n@media only screen and (max-width: 37.5em) {\n  .u-hide-mobile {\n    display: none;\n  }\n\n  .u-hide-desktop {\n    display: block;\n  }\n}\n',""]),n.exports=e},fANn:function(n,e,t){(e=t("Ai0b")(!1)).push([n.i,'.radio-button {\n    border: 1px solid rgba(0, 0, 0, 0.1);\n    border-radius: 8px;\n    transition: all 0.2s;\n    overflow: hidden;\n}\n\n.radio-button--selected {\n    border-color: #000000;\n}\n\n.radio-button__input {\n    display: none;\n}\n\n.radio-button__label {\n    padding: 1.25rem;\n    cursor: pointer;\n\n    display: flex;\n    align-items: center;\n}\n\n@media only screen and (max-width: 64em) {\n    .radio-button__label {\n        padding: 0.75rem;\n    }\n}\n\n@media only screen and (max-width: 37.5em) {\n    .radio-button--selected .radio-button__extra {\n        display: grid;\n        padding: 1rem;\n        visibility: visible;\n        height: auto;\n    }\n}\n\n.radio-button__extra {\n    visibility: hidden;\n    height: 0;\n    grid-template-columns: 1fr 65%;\n    gap: 1rem;\n    transition: all 0.2s;\n}\n\n.radio-button__img-container {\n    position: relative;\n    width: 100%;\n    height: 100%;\n    grid-column: 1/2;\n    overflow: hidden;\n    border-radius: 0.5rem;\n}\n\n.radio-button__img-container::after {\n    content: "";\n    display: block;\n    padding-bottom: 80%;\n}\n\n.radio-button__image {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    height: auto;\n    object-fit: cover;\n    object-position: center;\n\n    /* https://stackoverflow.com/questions/14562457/center-oversized-image-in-div */\n    top: -9999px;\n    bottom: -9999px;\n    left: -9999px;\n    right: -9999px;\n    margin: auto;\n}\n\n/* Only on iOS Devices */\n/* @supports (-webkit-touch-callout: none) {\n    .radio-button__image {\n        height: auto;\n    }\n} */\n\n.radio-button__description {\n    grid-column: 2/3;\n}\n',""]),n.exports=e},jgzK:function(n,e,t){var o=t("7hI2");n.exports="string"==typeof o?o:o.toString()},lUhE:function(n,e,t){var o=t("1LOa");n.exports="string"==typeof o?o:o.toString()},mU8M:function(n,e,t){(e=t("Ai0b")(!1)).push([n.i,".company {\n    position: absolute;\n    top: 1.5rem;\n    left: 2rem;\n\n    display: grid;\n    grid-template-columns: min-content 1fr;\n    grid-template-rows: repeat(2, 1fr);\n    align-items: center;\n    column-gap: 1rem;\n\n    z-index: 999;\n}\n\n@media only screen and (max-width: 64em) {\n    .company {\n        top: 1rem;\n        left: 1.5rem;\n    }\n}\n\n.company__img {\n    box-sizing: content-box;\n    height: 2rem;\n    width: 2rem;\n    grid-row: 1 / -1;\n    border: 4px solid #ffff;\n    border-radius: 100%;\n}\n\n.company__title {\n    color: white;\n    align-self: start;\n}\n\n.company__subtitle {\n    color: white;\n    text-transform: uppercase;\n    align-self: end;\n}\n\n@media only screen and (max-width: 64em) {\n    .company {\n        top: 1rem;\n        left: 1.5rem;\n    }\n\n    .company__img {\n        box-sizing: content-box;\n        height: 1.5rem;\n        width: 1.5rem;\n        grid-row: 1 / -1;\n        border: 4px solid #ffff;\n        border-radius: 100%;\n    }\n}\n",""]),n.exports=e},tEhV:function(n,e,t){(e=t("Ai0b")(!1)).push([n.i,".description {\n    grid-row: 2 / 3;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    padding: 2rem;\n}\n\n@media only screen and (max-width: 64em) {\n    .description {\n        padding: 1.5rem;\n    }\n}\n\n.description > *:not(:last-child) {\n    margin-bottom: 1rem;\n}\n",""]),n.exports=e},uuJQ:function(n,e,t){var o=t("fANn");n.exports="string"==typeof o?o:o.toString()}}]);
//# sourceMappingURL=1.chunk.e9121.esm.js.map