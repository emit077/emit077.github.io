(self["webpackChunkamit_portfolio"]=self["webpackChunkamit_portfolio"]||[]).push([[443],{4019:function(e){e.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},260:function(e,t,n){"use strict";var r,s,i,o=n(4019),a=n(9781),c=n(7854),u=n(614),l=n(111),h=n(2597),d=n(648),f=n(6330),p=n(8880),m=n(8052),g=n(3070).f,y=n(7976),v=n(9518),w=n(7674),b=n(5112),I=n(9711),_=n(9909),E=_.enforce,S=_.get,T=c.Int8Array,x=T&&T.prototype,D=c.Uint8ClampedArray,C=D&&D.prototype,A=T&&v(T),k=x&&v(x),N=Object.prototype,L=c.TypeError,O=b("toStringTag"),R=I("TYPED_ARRAY_TAG"),M="TypedArrayConstructor",F=o&&!!w&&"Opera"!==d(c.opera),V=!1,P={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},B={BigInt64Array:8,BigUint64Array:8},U=function(e){if(!l(e))return!1;var t=d(e);return"DataView"===t||h(P,t)||h(B,t)},j=function(e){var t=v(e);if(l(t)){var n=S(t);return n&&h(n,M)?n[M]:j(t)}},q=function(e){if(!l(e))return!1;var t=d(e);return h(P,t)||h(B,t)},$=function(e){if(q(e))return e;throw L("Target is not a typed array")},K=function(e){if(u(e)&&(!w||y(A,e)))return e;throw L(f(e)+" is not a typed array constructor")},G=function(e,t,n,r){if(a){if(n)for(var s in P){var i=c[s];if(i&&h(i.prototype,e))try{delete i.prototype[e]}catch(o){try{i.prototype[e]=t}catch(u){}}}k[e]&&!n||m(k,e,n?t:F&&x[e]||t,r)}},z=function(e,t,n){var r,s;if(a){if(w){if(n)for(r in P)if(s=c[r],s&&h(s,e))try{delete s[e]}catch(i){}if(A[e]&&!n)return;try{return m(A,e,n?t:F&&A[e]||t)}catch(i){}}for(r in P)s=c[r],!s||s[e]&&!n||m(s,e,t)}};for(r in P)s=c[r],i=s&&s.prototype,i?E(i)[M]=s:F=!1;for(r in B)s=c[r],i=s&&s.prototype,i&&(E(i)[M]=s);if((!F||!u(A)||A===Function.prototype)&&(A=function(){throw L("Incorrect invocation")},F))for(r in P)c[r]&&w(c[r],A);if((!F||!k||k===N)&&(k=A.prototype,F))for(r in P)c[r]&&w(c[r].prototype,k);if(F&&v(C)!==k&&w(C,k),a&&!h(k,O))for(r in V=!0,g(k,O,{get:function(){return l(this)?this[R]:void 0}}),P)c[r]&&p(c[r],R,r);e.exports={NATIVE_ARRAY_BUFFER_VIEWS:F,TYPED_ARRAY_TAG:V&&R,aTypedArray:$,aTypedArrayConstructor:K,exportTypedArrayMethod:G,exportTypedArrayStaticMethod:z,getTypedArrayConstructor:j,isView:U,isTypedArray:q,TypedArray:A,TypedArrayPrototype:k}},5129:function(e,t,n){var r=n(6244);e.exports=function(e,t){var n=0,s=r(t),i=new e(s);while(s>n)i[n]=t[n++];return i}},712:function(e,t,n){var r=n(9974),s=n(8361),i=n(7908),o=n(6244),a=function(e){var t=1==e;return function(n,a,c){var u,l,h=i(n),d=s(h),f=r(a,c),p=o(d);while(p-- >0)if(u=d[p],l=f(u,p,h),l)switch(e){case 0:return u;case 1:return p}return t?-1:void 0}};e.exports={findLast:a(0),findLastIndex:a(1)}},1843:function(e,t,n){var r=n(6244);e.exports=function(e,t){for(var n=r(e),s=new t(n),i=0;i<n;i++)s[i]=e[n-i-1];return s}},1572:function(e,t,n){var r=n(6244),s=n(9303),i=RangeError;e.exports=function(e,t,n,o){var a=r(e),c=s(n),u=c<0?a+c:c;if(u>=a||u<0)throw i("Incorrect index");for(var l=new t(a),h=0;h<a;h++)l[h]=h===u?o:e[h];return l}},8544:function(e,t,n){var r=n(7293);e.exports=!r((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},9974:function(e,t,n){var r=n(1702),s=n(9662),i=n(4374),o=r(r.bind);e.exports=function(e,t){return s(e),void 0===t?e:i?o(e,t):function(){return e.apply(t,arguments)}}},4067:function(e,t,n){var r=n(648),s=n(1702),i=s("".slice);e.exports=function(e){return"Big"===i(r(e),0,3)}},9518:function(e,t,n){var r=n(2597),s=n(614),i=n(7908),o=n(6200),a=n(8544),c=o("IE_PROTO"),u=Object,l=u.prototype;e.exports=a?u.getPrototypeOf:function(e){var t=i(e);if(r(t,c))return t[c];var n=t.constructor;return s(n)&&t instanceof n?n.prototype:t instanceof u?l:null}},4599:function(e,t,n){var r=n(7593),s=TypeError;e.exports=function(e){var t=r(e,"number");if("number"==typeof t)throw s("Can't convert number to bigint");return BigInt(t)}},4590:function(e,t,n){var r=n(3002),s=RangeError;e.exports=function(e,t){var n=r(e);if(n%t)throw s("Wrong offset");return n}},3002:function(e,t,n){var r=n(9303),s=RangeError;e.exports=function(e){var t=r(e);if(t<0)throw s("The argument can't be less than 0");return t}},8675:function(e,t,n){"use strict";var r=n(260),s=n(6244),i=n(9303),o=r.aTypedArray,a=r.exportTypedArrayMethod;a("at",(function(e){var t=o(this),n=s(t),r=i(e),a=r>=0?r:n+r;return a<0||a>=n?void 0:t[a]}))},2958:function(e,t,n){"use strict";var r=n(260),s=n(712).findLastIndex,i=r.aTypedArray,o=r.exportTypedArrayMethod;o("findLastIndex",(function(e){return s(i(this),e,arguments.length>1?arguments[1]:void 0)}))},3408:function(e,t,n){"use strict";var r=n(260),s=n(712).findLast,i=r.aTypedArray,o=r.exportTypedArrayMethod;o("findLast",(function(e){return s(i(this),e,arguments.length>1?arguments[1]:void 0)}))},3462:function(e,t,n){"use strict";var r=n(7854),s=n(6916),i=n(260),o=n(6244),a=n(4590),c=n(7908),u=n(7293),l=r.RangeError,h=r.Int8Array,d=h&&h.prototype,f=d&&d.set,p=i.aTypedArray,m=i.exportTypedArrayMethod,g=!u((function(){var e=new Uint8ClampedArray(2);return s(f,e,{length:1,0:3},1),3!==e[1]})),y=g&&i.NATIVE_ARRAY_BUFFER_VIEWS&&u((function(){var e=new h(2);return e.set(1),e.set("2",1),0!==e[0]||2!==e[1]}));m("set",(function(e){p(this);var t=a(arguments.length>1?arguments[1]:void 0,1),n=c(e);if(g)return s(f,this,n,t);var r=this.length,i=o(n),u=0;if(i+t>r)throw l("Wrong length");while(u<i)this[t+u]=n[u++]}),!g||y)},1118:function(e,t,n){n(2958)},7380:function(e,t,n){n(3408)},3767:function(e,t,n){"use strict";var r=n(1843),s=n(260),i=s.aTypedArray,o=s.exportTypedArrayMethod,a=s.getTypedArrayConstructor;o("toReversed",(function(){return r(i(this),a(this))}))},8585:function(e,t,n){"use strict";var r=n(260),s=n(1702),i=n(9662),o=n(5129),a=r.aTypedArray,c=r.getTypedArrayConstructor,u=r.exportTypedArrayMethod,l=s(r.TypedArrayPrototype.sort);u("toSorted",(function(e){void 0!==e&&i(e);var t=a(this),n=o(c(t),t);return l(n,e)}))},8696:function(e,t,n){"use strict";var r=n(1572),s=n(260),i=n(4067),o=n(9303),a=n(4599),c=s.aTypedArray,u=s.getTypedArrayConstructor,l=s.exportTypedArrayMethod,h=!!function(){try{new Int8Array(1)["with"](2,{valueOf:function(){throw 8}})}catch(e){return 8===e}}();l("with",{with:function(e,t){var n=c(this),s=o(e),l=i(n)?a(t):+t;return r(n,u(n),s,l)}}["with"],!h)},8842:function(e){"use strict";function t(e,t,n){return t>e?t:n<e?n:e}function n(e){return+(e>0)-+(e<0)}function r(e){return Math.round(1e4*e)/1e4}var s,i={};function o(e){return"-"+e[0].toLowerCase()}function a(e){return i[e]||(i[e]=e.replace(/([A-Z])/g,o))}function c(e,t){return e&&0!==e.length?e.nodeName?[e]:[].slice.call(e[0].nodeName?e:(t||document.documentElement).querySelectorAll(e)):[]}function u(e,t){for(var n in t)n.indexOf("_")&&e.setAttribute("data-"+a(n),t[n])}function l(e){return function(t,n){for(var s in n)s.indexOf("_")&&(!0===e||e[s])&&t.style.setProperty("--"+a(s),r(n[s]))}}var h=[];function d(){s=0,h.slice().forEach((function(e){return e()})),f()}function f(){!s&&h.length&&(s=requestAnimationFrame(d))}function p(e){return h.push(e),f(),function(){h=h.filter((function(t){return t!==e})),!h.length&&s&&(cancelAnimationFrame(s),s=0)}}function m(e,t,n,r){return"function"===typeof e?e(t,n,r):e}function g(){}function y(e){e=e||{};var r,s,i,o=e.onChange||g,a=e.onHidden||g,h=e.onShown||g,d=e.onScroll||g,f=e.cssProps?l(e.cssProps):g,y=e.scrollingElement,v=y?c(y)[0]:window,w=y?c(y)[0]:document.documentElement,b=!1,I={},_=[];function E(){_=c(e.targets||"[data-scroll]",c(e.scope||w)[0]).map((function(e){return{element:e}}))}function S(){var o=w.clientWidth,a=w.clientHeight,c=n(-r+(r=w.scrollLeft||window.pageXOffset)),u=n(-s+(s=w.scrollTop||window.pageYOffset)),l=w.scrollLeft/(w.scrollWidth-o||1),h=w.scrollTop/(w.scrollHeight-a||1);b=b||I.scrollDirX!==c||I.scrollDirY!==u||I.scrollPercentX!==l||I.scrollPercentY!==h,I.scrollDirX=c,I.scrollDirY=u,I.scrollPercentX=l,I.scrollPercentY=h;for(var d=!1,f=0;f<_.length;f++){var g=_[f],y=g.element,E=y,S=0,x=0;do{S+=E.offsetLeft,x+=E.offsetTop,E=E.offsetParent}while(E&&E!==v);var D=y.clientHeight||y.offsetHeight||0,C=y.clientWidth||y.offsetWidth||0,A=(t(S+C,r,r+o)-t(S,r,r+o))/C,k=(t(x+D,s,s+a)-t(x,s,s+a))/D,N=1===A?0:n(S-r),L=1===k?0:n(x-s),O=t((r-(C/2+S-o/2))/(o/2),-1,1),R=t((s-(D/2+x-a/2))/(a/2),-1,1),M=void 0;M=e.offset?m(e.offset,y,g,w)<=s?1:0:(m(e.threshold,y,g,w)||0)<A*k?1:0;var F=g.visible!==M,V=g._changed||F||g.visibleX!==A||g.visibleY!==k||g.index!==f||g.elementHeight!==D||g.elementWidth!==C||g.offsetX!==S||g.offsetY!==x||g.intersectX!==g.intersectX||g.intersectY!==g.intersectY||g.viewportX!==O||g.viewportY!==R;V&&(d=!0,g._changed=!0,g._visibleChanged=F,g.visible=M,g.elementHeight=D,g.elementWidth=C,g.index=f,g.offsetX=S,g.offsetY=x,g.visibleX=A,g.visibleY=k,g.intersectX=N,g.intersectY=L,g.viewportX=O,g.viewportY=R,g.visible=M)}i||!b&&!d||(i=p(T))}function T(){x(),b&&(b=!1,u(w,{scrollDirX:I.scrollDirX,scrollDirY:I.scrollDirY}),f(w,I),d(w,I,_));for(var t=_.length,n=t-1;n>-1;n--){var r=_[n],s=r.element,i=r.visible,c=s.hasAttribute("scrollout-once")||!1;r._changed&&(r._changed=!1,f(s,r)),r._visibleChanged&&(u(s,{scroll:i?"in":"out"}),o(s,r,w),(i?h:a)(s,r,w)),i&&(e.once||c)&&_.splice(n,1)}}function x(){i&&(i(),i=void 0)}E(),S(),T();var D=0,C=function(){D=D||setTimeout((function(){D=0,S()}),0)};return window.addEventListener("resize",C),v.addEventListener("scroll",C),{index:E,update:S,teardown:function(){x(),window.removeEventListener("resize",C),v.removeEventListener("scroll",C)}}}e.exports=y},1674:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return __}});var r={};n.r(r),n.d(r,{FirebaseError:function(){return $e},SDK_VERSION:function(){return An},_DEFAULT_ENTRY_NAME:function(){return gn},_addComponent:function(){return bn},_addOrOverwriteComponent:function(){return In},_apps:function(){return vn},_clearComponents:function(){return Tn},_components:function(){return wn},_getProvider:function(){return En},_registerComponent:function(){return _n},_removeServiceInstance:function(){return Sn},deleteApp:function(){return On},getApp:function(){return Nn},getApps:function(){return Ln},initializeApp:function(){return kn},onLog:function(){return Mn},registerVersion:function(){return Rn},setLogLevel:function(){return Fn}});var s=n(3396);function i(e,t,n,r,i,o){const a=(0,s.up)("landing-screen"),c=(0,s.up)("my-experience"),u=(0,s.up)("my-services"),l=(0,s.up)("about-me"),h=(0,s.up)("my-projects"),d=(0,s.up)("my-skills"),f=(0,s.up)("contact-me");return(0,s.wg)(),(0,s.iD)("div",null,[(0,s.Wm)(a),(0,s.Wm)(c),(0,s.Wm)(u),(0,s.Wm)(l),(0,s.Wm)(h),(0,s.Wm)(d),(0,s.Wm)(f)])}var o=n(7139),a=n(1138),c=n(1107);const u=["sm","md","lg","xl","xxl"],l=["start","end","center"];function h(e,t){return u.reduce(((n,r)=>(n[e+(0,o.kC)(r)]=t(),n)),{})}const d=e=>[...l,"baseline","stretch"].includes(e),f=h("align",(()=>({type:String,default:null,validator:d}))),p=e=>[...l,"space-between","space-around"].includes(e),m=h("justify",(()=>({type:String,default:null,validator:p}))),g=e=>[...l,"space-between","space-around","stretch"].includes(e),y=h("alignContent",(()=>({type:String,default:null,validator:g}))),v={align:Object.keys(f),justify:Object.keys(m),alignContent:Object.keys(y)},w={align:"align",justify:"justify",alignContent:"align-content"};function b(e,t,n){let r=w[e];if(null!=n){if(t){const n=t.replace(e,"");r+=`-${n}`}return r+=`-${n}`,r.toLowerCase()}}const I=(0,c.a)({name:"VRow",props:{dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:d},...f,justify:{type:String,default:null,validator:p},...m,alignContent:{type:String,default:null,validator:g},...y,...(0,a.Q)()},setup(e,t){let{slots:n}=t;const r=(0,s.Fl)((()=>{const t=[];let n;for(n in v)v[n].forEach((r=>{const s=e[r],i=b(n,r,s);i&&t.push(i)}));return t.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),t}));return()=>{var t;return(0,s.h)(e.tag,{class:["v-row",r.value]},null==(t=n.default)?void 0:t.call(n))}}}),_=["sm","md","lg","xl","xxl"],E=(()=>_.reduce(((e,t)=>(e[t]={type:[Boolean,String,Number],default:!1},e)),{}))(),S=(()=>_.reduce(((e,t)=>(e["offset"+(0,o.kC)(t)]={type:[String,Number],default:null},e)),{}))(),T=(()=>_.reduce(((e,t)=>(e["order"+(0,o.kC)(t)]={type:[String,Number],default:null},e)),{}))(),x={col:Object.keys(E),offset:Object.keys(S),order:Object.keys(T)};function D(e,t,n){let r=e;if(null!=n&&!1!==n){if(t){const n=t.replace(e,"");r+=`-${n}`}return"col"===e&&(r="v-"+r),"col"!==e||""!==n&&!0!==n?(r+=`-${n}`,r.toLowerCase()):r.toLowerCase()}}const C=(0,c.a)({name:"VCol",props:{cols:{type:[Boolean,String,Number],default:!1},...E,offset:{type:[String,Number],default:null},...S,order:{type:[String,Number],default:null},...T,alignSelf:{type:String,default:null,validator:e=>["auto","start","end","center","baseline","stretch"].includes(e)},...(0,a.Q)()},setup(e,t){let{slots:n}=t;const r=(0,s.Fl)((()=>{const t=[];let n;for(n in x)x[n].forEach((r=>{const s=e[r],i=D(n,r,s);i&&t.push(i)}));const r=t.some((e=>e.startsWith("v-col-")));return t.push({"v-col":!r||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),t}));return()=>{var t;return(0,s.h)(e.tag,{class:r.value},null==(t=n.default)?void 0:t.call(n))}}});function A(e,t,n,r,i,a){const c=(0,s.up)("AnimatedText"),u=(0,s.up)("zig-zag-line"),l=(0,s.up)("circle-outline"),h=(0,s.up)("common-content-wrapper"),d=(0,s.up)("triangle-outline");return(0,s.wg)(),(0,s.iD)("div",{class:(0,o.C_)(["app-padding d-flex align-center",e.$vuetify.display.mobile?"py-15 landing-screen-mobile landing-screen-"+e.$store.state.currentTheme:"text-h6 landing-screen-desktop landing-screen-"+e.$store.state.currentTheme]),id:"landing-screen",style:(0,o.j5)(i.style)},[(0,s.Wm)(I,{align:"center",justify:"center","no-gutters":""},{default:(0,s.w5)((()=>[(0,s.Wm)(C,{sm:"6",cols:"12",class:(0,o.C_)(["justify-center",e.$vuetify.display.mobile?"my-15":""])},{default:(0,s.w5)((()=>[(0,s._)("span",{class:(0,o.C_)(["ml-2 wave",e.$vuetify.display.mobile?"text-h5 ":" text-h4"])},"👋",2),(0,s._)("p",{id:"font-england",class:(0,o.C_)(["font-weight-bold mb-2 text-stroke-1 ml-2",e.$vuetify.display.mobile?"text-h5 ":" text-h4"])}," Hey I'm ",2),(0,s.Wm)(c),(0,s.Wm)(u,{class:"move-animation-2",stroke:"#F3B24A",height:e.$vuetify.display.mobile?8:13},null,8,["height"])])),_:1},8,["class"]),(0,s.Wm)(C,{sm:"6",cols:"12",class:"justify-center text-stroke-1"},{default:(0,s.w5)((()=>[(0,s.Wm)(l,{class:"float-right move-animation",stroke:"#F85C5C",style:{width:"15px"}}),(0,s.Wm)(h,{title:i.title,subtitle:i.subtitle,description:i.description},null,8,["title","subtitle","description"]),(0,s.Wm)(d,{class:(0,o.C_)(["spin-animation",e.$vuetify.display.mobile?"float-right":"mt-8"]),style:{width:"15px"}},null,8,["class"])])),_:1})])),_:1})],6)}const k=["data-char"],N={class:"my-10 text-stroke-1 section-subtitle","data-splitting":""},L=["innerHTML"];function O(e,t,n,r,i,a){return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("span",null,[(0,s._)("h4",{class:(0,o.C_)(["fs-nunito section-title slide-horizontal","section-title-"+this.$store.state.currentTheme]),"data-splitting":""},[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(n.title.split(""),((e,t)=>((0,s.wg)(),(0,s.iD)("span",{key:t,class:"char","data-char":e,style:(0,o.j5)({"--char-index":t,"--char-total":n.subtitle.length})},(0,o.zw)(e),13,k)))),128))],2)]),(0,s._)("h2",N,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(n.subtitle.split("<br/>"),((e,t)=>((0,s.wg)(),(0,s.iD)("div",{key:t},[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.split(""),((e,t)=>((0,s.wg)(),(0,s.iD)("span",{key:t,class:"subtitle-char",style:(0,o.j5)({"--char-index":t})},(0,o.zw)(e),5)))),128))])))),128))]),(0,s._)("p",{innerHTML:n.description,class:"text-stroke-1 section-description"},null,8,L)],64)}var R=n(8842),M=n.n(R),F={name:"CommonContentWrapper",props:["title","subtitle","description"],data(){return{}},mounted(){M()({targets:"[data-splitting]"})},methods:{}},V=n(89);const P=(0,V.Z)(F,[["render",O],["__scopeId","data-v-407101fb"]]);var B=P;const U={width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},j=["stroke","fill","opacity","stroke-width"];function q(e,t,n,r,i,o){return(0,s.wg)(),(0,s.iD)("svg",U,[(0,s._)("circle",{cx:"12",cy:"12",r:"10.5",stroke:n.stroke,fill:n.fill,opacity:n.opacity,"stroke-width":n.stroke_width},null,8,j)])}var $={name:"CircleOutline",props:{stroke:{type:String,default:"#7986FD"},fill:{type:String,default:"none"},opacity:{type:String,default:"1"},stroke_width:{type:String,default:"3"}}};const K=(0,V.Z)($,[["render",q]]);var G=K;const z={width:"89",height:"13",viewBox:"0 0 89 13",fill:"none",xmlns:"http://www.w3.org/2000/svg"},W=["stroke","opacity","stroke-width"];function H(e,t,n,r,i,o){return(0,s.wg)(),(0,s.iD)("svg",z,[(0,s._)("path",{d:"M2 10.5L7 3L12 10.5L17 3L22 10.5L27 3L32 10.5L37 3L42 10.5L47 3 M42 10.5L47 3L52 10.5L57 3L62 10.5L67 3L72 10.5L77 3L82 10.5L87 3",stroke:n.stroke,opacity:n.opacity,"stroke-width":n.stroke_width},null,8,W)])}var Q={name:"ZigZagLine",props:{stroke:{type:String,default:"#F3B24A"},opacity:{type:String,default:"1"},stroke_width:{type:String,default:"2"}}};const Y=(0,V.Z)(Q,[["render",H]]);var X=Y;const J={width:"34",height:"30",viewBox:"0 0 34 30",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Z=["stroke","fill","opacity","stroke-width"];function ee(e,t,n,r,i,o){return(0,s.wg)(),(0,s.iD)("svg",J,[(0,s._)("path",{d:"M3.14359 28L17 4L30.8564 28H3.14359Z",stroke:n.stroke,fill:n.fill,opacity:n.opacity,"stroke-width":n.stroke_width},null,8,Z)])}var te={name:"CircleOutline",props:{stroke:{type:String,default:"#1F7949"},fill:{type:String,default:"none"},opacity:{type:String,default:"1"},stroke_width:{type:String,default:"4"}}};const ne=(0,V.Z)(te,[["render",ee]]);var re=ne;const se={viewBox:"0 0 260 150"},ie=["id"],oe=["id"];function ae(e,t,n,r,i,a){return(0,s.wg)(),(0,s.iD)("div",{class:(0,o.C_)(["d-block anim-text",(e.$store.state.currentTheme,"text-animation")]),"data-splitting":""},[((0,s.wg)(),(0,s.iD)("svg",se,[(0,s._)("text",{id:e.$vuetify.display.mobile?"mobile-text-style":"font-salita",x:"0%",y:"30%",dy:".15em",class:(0,o.C_)(e.$vuetify.display.mobile?"text-h1 ":" text-h1")}," Amit ",10,ie),(0,s._)("text",{id:e.$vuetify.display.mobile?"mobile-text-style":"font-salita",x:"-1%",y:"82%",dy:".15em",class:(0,o.C_)(e.$vuetify.display.mobile?"text-h1 ":" text-h1")}," Kumar ",10,oe)]))],2)}var ce={name:"AnimatedText",data:()=>({}),mounted(){M()({targets:"[data-splitting]"})}};const ue=(0,V.Z)(ce,[["render",ae],["__scopeId","data-v-788de429"]]);var le=ue,he={name:"LandingPageVue",components:{CommonContentWrapper:B,CircleOutline:G,ZigZagLine:X,TriangleOutline:re,AnimatedText:le},data(){return{pdfLink:"https://drive.google.com/uc?export=download&id=1d83s9s9vHDMwmMIh5kUN7NQq-Nm6RqWr",style:{},title:"Introduction",subtitle:"Fullstack Developer & UI/UX Designer, Based in Raipur, India",description:"Passionate about visual design and technology. I specialized in fullstack development and UI/UX design and my passion is about building elegant and professional user interfaces and websites."}},mounted(){this.style={"min-height":screen.height+"px"}},methods:{}};const de=(0,V.Z)(he,[["render",A],["__scopeId","data-v-b7cf11d0"]]);var fe=de;function pe(e,t,n,r,i,a){const c=(0,s.up)("common-content-wrapper"),u=(0,s.up)("circle-outline"),l=(0,s.up)("SociaLinks"),h=(0,s.up)("zig-zag-line");return(0,s.wg)(),(0,s.iD)("div",{class:(0,o.C_)(["app-padding py-15 my-15",e.$vuetify.display.mobile?"pt-5":"text-h6"]),id:"lets-talk",style:(0,o.j5)(e.style)},[(0,s._)("p",(0,s.dG)({class:["shadow-text",e.$vuetify.display.mobile?"mb-n6":"mb-n15"],"no-gutters":""},e.shado_text_animation)," Hire Me ",16),(0,s.Wm)(I,{align:"center",justify:"center"},{default:(0,s.w5)((()=>[(0,s.Wm)(C,{sm:"12",cols:"12",class:"justify-center"},{default:(0,s.w5)((()=>[(0,s.Wm)(c,{title:i.title,subtitle:i.subtitle,description:i.description},null,8,["title","subtitle","description"]),e.$vuetify.display.mobile?(0,s.kq)("",!0):((0,s.wg)(),(0,s.j4)(u,{key:0,class:"float-right move-animation-2",stroke:"#F3B24A",stroke_width:5,style:{width:"9px"}}))])),_:1}),(0,s.Wm)(C,{sm:"12",cols:"12",class:(0,o.C_)(["text-center",e.$vuetify.display.mobile?"":"pl-10"]),justify:"right"},{default:(0,s.w5)((()=>[(0,s.Wm)(l),(0,s.Wm)(u,{class:"move-animation-4 mb-n13",stroke:"#7986FD",style:{width:"25px"}}),e.$vuetify.display.mobile?((0,s.wg)(),(0,s.j4)(u,{key:0,class:"float-left move-animation-2 mt-n15",stroke:"#F3B24A",stroke_width:5,style:{width:"9px"}})):(0,s.kq)("",!0)])),_:1},8,["class"])])),_:1}),(0,s.Wm)(h,{class:(0,o.C_)(["move-animation-2",e.$vuetify.display.mobile?"mt-8":""]),stroke:"#1F7949",height:e.$vuetify.display.mobile?9:13},null,8,["height","class"])],6)}var me=n(3289);const ge=["href"];function ye(e,t){return(0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.social_contact_list,((e,t)=>((0,s.wg)(),(0,s.iD)("div",{class:"d-inline-flex mx-3",key:t},[(0,s._)("a",{href:e.link,target:"_blank",class:"text-white"},[(0,s.Wm)(me.t,{class:"social-icon",size:"35"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,o.zw)(e.icon),1)])),_:2},1024)],8,ge)])))),128)}const ve={},we=(0,V.Z)(ve,[["render",ye],["__scopeId","data-v-78c718a4"]]);var be=we;n(1703),n(2801);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ie=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=63&s|128):55296===(64512&s)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(s=65536+((1023&s)<<10)+(1023&e.charCodeAt(++r)),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=63&s|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=63&s|128)}return t},_e=function(e){const t=[];let n=0,r=0;while(n<e.length){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((31&s)<<6|63&i)}else if(s>239&&s<365){const i=e[n++],o=e[n++],a=e[n++],c=((7&s)<<18|(63&i)<<12|(63&o)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(1023&c))}else{const i=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&s)<<12|(63&i)<<6|63&o)}}return t.join("")},Ee={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const t=e[s],i=s+1<e.length,o=i?e[s+1]:0,a=s+2<e.length,c=a?e[s+2]:0,u=t>>2,l=(3&t)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,i||(h=64)),r.push(n[u],n[l],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Ie(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):_e(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const t=n[e.charAt(s++)],i=s<e.length,o=i?n[e.charAt(s)]:0;++s;const a=s<e.length,c=a?n[e.charAt(s)]:64;++s;const u=s<e.length,l=u?n[e.charAt(s)]:64;if(++s,null==t||null==o||null==c||null==l)throw Error();const h=t<<2|o>>4;if(r.push(h),64!==c){const e=o<<4&240|c>>2;if(r.push(e),64!==l){const e=c<<6&192|l;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},Se=function(e){const t=Ie(e);return Ee.encodeByteArray(t,!0)},Te=function(e){return Se(e).replace(/\./g,"")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xe(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&De(n)&&(e[n]=xe(e[n],t[n]));return e}function De(e){return"__proto__"!==e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",s=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[Te(JSON.stringify(n)),Te(JSON.stringify(o)),a].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ke(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function Ne(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ke())}function Le(){try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(e){return!1}}function Oe(){return"object"===typeof self&&self.self===self}function Re(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function Me(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function Fe(){return ke().indexOf("Electron/")>=0}function Ve(){const e=ke();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Pe(){return ke().indexOf("MSAppHost/")>=0}function Be(){return!Le()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ue(){return"object"===typeof indexedDB}function je(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var e;t((null===(e=s.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const qe="FirebaseError";class $e extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=qe,Object.setPrototypeOf(this,$e.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ke.prototype.create)}}class Ke{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,s=this.errors[e],i=s?Ge(s,n):"Error",o=`${this.serviceName}: ${i} (${r}).`,a=new $e(r,o,n);return a}}function Ge(e,t){return e.replace(ze,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}const ze=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function We(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function He(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const n=e[s],i=t[s];if(Qe(n)&&Qe(i)){if(!He(n,i))return!1}else if(n!==i)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Qe(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(e,t){const n=new Xe(e,t);return n.subscribe.bind(n)}class Xe{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=Je(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=Ze),void 0===r.error&&(r.error=Ze),void 0===r.complete&&(r.complete=Ze);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),s}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function Je(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function Ze(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function et(e){return e&&e._delegate?e._delegate:e}class tt{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nt="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new Ce;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(it(e))try{this.getOrInitializeService({instanceIdentifier:nt})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=nt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=nt){return this.instances.has(e)}getOptions(e=nt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[s,i]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(s);n===e&&i.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),s=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(Sy){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:st(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(Sy){}return n||null}normalizeInstanceIdentifier(e=nt){return this.component?this.component.multipleInstances?e:nt:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function st(e){return e===nt?void 0:e}function it(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new rt(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const at=[];var ct;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(ct||(ct={}));const ut={debug:ct.DEBUG,verbose:ct.VERBOSE,info:ct.INFO,warn:ct.WARN,error:ct.ERROR,silent:ct.SILENT},lt=ct.INFO,ht={[ct.DEBUG]:"log",[ct.VERBOSE]:"log",[ct.INFO]:"info",[ct.WARN]:"warn",[ct.ERROR]:"error"},dt=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),s=ht[t];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[s](`[${r}]  ${e.name}:`,...n)};class ft{constructor(e){this.name=e,this._logLevel=lt,this._logHandler=dt,this._userLogHandler=null,at.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ct))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?ut[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ct.DEBUG,...e),this._logHandler(this,ct.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ct.VERBOSE,...e),this._logHandler(this,ct.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ct.INFO,...e),this._logHandler(this,ct.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ct.WARN,...e),this._logHandler(this,ct.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ct.ERROR,...e),this._logHandler(this,ct.ERROR,...e)}}function pt(e){at.forEach((t=>{t.setLogLevel(e)}))}function mt(e,t){for(const n of at){let r=null;t&&t.level&&(r=ut[t.level]),n.userLogHandler=null===e?null:(t,n,...s)=>{const i=s.map((e=>{if(null==e)return null;if("string"===typeof e)return e;if("number"===typeof e||"boolean"===typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(t){return null}})).filter((e=>e)).join(" ");n>=(null!==r&&void 0!==r?r:t.logLevel)&&e({level:ct[n].toLowerCase(),message:i,args:s,type:t.name})}}}const gt=(e,t)=>t.some((t=>e instanceof t));let yt,vt;function wt(){return yt||(yt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function bt(){return vt||(vt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const It=new WeakMap,_t=new WeakMap,Et=new WeakMap,St=new WeakMap,Tt=new WeakMap;function xt(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",s),e.removeEventListener("error",i)},s=()=>{t(Lt(e.result)),r()},i=()=>{n(e.error),r()};e.addEventListener("success",s),e.addEventListener("error",i)}));return t.then((t=>{t instanceof IDBCursor&&It.set(t,e)})).catch((()=>{})),Tt.set(t,e),t}function Dt(e){if(_t.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",i),e.removeEventListener("abort",i)},s=()=>{t(),r()},i=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",s),e.addEventListener("error",i),e.addEventListener("abort",i)}));_t.set(e,t)}let Ct={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return _t.get(e);if("objectStoreNames"===t)return e.objectStoreNames||Et.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Lt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function At(e){Ct=e(Ct)}function kt(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?bt().includes(e)?function(...t){return e.apply(Ot(this),t),Lt(It.get(this))}:function(...t){return Lt(e.apply(Ot(this),t))}:function(t,...n){const r=e.call(Ot(this),t,...n);return Et.set(r,t.sort?t.sort():[t]),Lt(r)}}function Nt(e){return"function"===typeof e?kt(e):(e instanceof IDBTransaction&&Dt(e),gt(e,wt())?new Proxy(e,Ct):e)}function Lt(e){if(e instanceof IDBRequest)return xt(e);if(St.has(e))return St.get(e);const t=Nt(e);return t!==e&&(St.set(e,t),Tt.set(t,e)),t}const Ot=e=>Tt.get(e);function Rt(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(e,t),a=Lt(o);return r&&o.addEventListener("upgradeneeded",(e=>{r(Lt(o.result),e.oldVersion,e.newVersion,Lt(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((e=>{i&&e.addEventListener("close",(()=>i())),s&&e.addEventListener("versionchange",(()=>s()))})).catch((()=>{})),a}const Mt=["get","getKey","getAll","getAllKeys","count"],Ft=["put","add","delete","clear"],Vt=new Map;function Pt(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(Vt.get(t))return Vt.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=Ft.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!s&&!Mt.includes(n))return;const i=async function(e,...t){const i=this.transaction(e,s?"readwrite":"readonly");let o=i.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),s&&i.done]))[0]};return Vt.set(t,i),i}At((e=>({...e,get:(t,n,r)=>Pt(t,n)||e.get(t,n,r),has:(t,n)=>!!Pt(t,n)||e.has(t,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bt{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(Ut(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function Ut(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const jt="@firebase/app",qt="0.7.30",$t=new ft("@firebase/app"),Kt="@firebase/app-compat",Gt="@firebase/analytics-compat",zt="@firebase/analytics",Wt="@firebase/app-check-compat",Ht="@firebase/app-check",Qt="@firebase/auth",Yt="@firebase/auth-compat",Xt="@firebase/database",Jt="@firebase/database-compat",Zt="@firebase/functions",en="@firebase/functions-compat",tn="@firebase/installations",nn="@firebase/installations-compat",rn="@firebase/messaging",sn="@firebase/messaging-compat",on="@firebase/performance",an="@firebase/performance-compat",cn="@firebase/remote-config",un="@firebase/remote-config-compat",ln="@firebase/storage",hn="@firebase/storage-compat",dn="@firebase/firestore",fn="@firebase/firestore-compat",pn="firebase",mn="9.9.2",gn="[DEFAULT]",yn={[jt]:"fire-core",[Kt]:"fire-core-compat",[zt]:"fire-analytics",[Gt]:"fire-analytics-compat",[Ht]:"fire-app-check",[Wt]:"fire-app-check-compat",[Qt]:"fire-auth",[Yt]:"fire-auth-compat",[Xt]:"fire-rtdb",[Jt]:"fire-rtdb-compat",[Zt]:"fire-fn",[en]:"fire-fn-compat",[tn]:"fire-iid",[nn]:"fire-iid-compat",[rn]:"fire-fcm",[sn]:"fire-fcm-compat",[on]:"fire-perf",[an]:"fire-perf-compat",[cn]:"fire-rc",[un]:"fire-rc-compat",[ln]:"fire-gcs",[hn]:"fire-gcs-compat",[dn]:"fire-fst",[fn]:"fire-fst-compat","fire-js":"fire-js",[pn]:"fire-js-all"},vn=new Map,wn=new Map;function bn(e,t){try{e.container.addComponent(t)}catch(n){$t.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function In(e,t){e.container.addOrOverwriteComponent(t)}function _n(e){const t=e.name;if(wn.has(t))return $t.debug(`There were multiple attempts to register component ${t}.`),!1;wn.set(t,e);for(const n of vn.values())bn(n,e);return!0}function En(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function Sn(e,t,n=gn){En(e,t).clearInstance(n)}function Tn(){wn.clear()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xn={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Dn=new Ke("app","Firebase",xn);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Cn{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new tt("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Dn.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const An=mn;function kn(e,t={}){if("object"!==typeof t){const e=t;t={name:e}}const n=Object.assign({name:gn,automaticDataCollectionEnabled:!1},t),r=n.name;if("string"!==typeof r||!r)throw Dn.create("bad-app-name",{appName:String(r)});const s=vn.get(r);if(s){if(He(e,s.options)&&He(n,s.config))return s;throw Dn.create("duplicate-app",{appName:r})}const i=new ot(r);for(const a of wn.values())i.addComponent(a);const o=new Cn(e,n,i);return vn.set(r,o),o}function Nn(e=gn){const t=vn.get(e);if(!t)throw Dn.create("no-app",{appName:e});return t}function Ln(){return Array.from(vn.values())}async function On(e){const t=e.name;vn.has(t)&&(vn.delete(t),await Promise.all(e.container.getProviders().map((e=>e.delete()))),e.isDeleted=!0)}function Rn(e,t,n){var r;let s=null!==(r=yn[e])&&void 0!==r?r:e;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const e=[`Unable to register library "${s}" with version "${t}":`];return i&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void $t.warn(e.join(" "))}_n(new tt(`${s}-version`,(()=>({library:s,version:t})),"VERSION"))}function Mn(e,t){if(null!==e&&"function"!==typeof e)throw Dn.create("invalid-log-argument");mt(e,t)}function Fn(e){pt(e)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vn="firebase-heartbeat-database",Pn=1,Bn="firebase-heartbeat-store";let Un=null;function jn(){return Un||(Un=Rt(Vn,Pn,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Bn)}}}).catch((e=>{throw Dn.create("idb-open",{originalErrorMessage:e.message})}))),Un}async function qn(e){var t;try{const t=await jn();return t.transaction(Bn).objectStore(Bn).get(Kn(e))}catch(n){if(n instanceof $e)$t.warn(n.message);else{const e=Dn.create("idb-get",{originalErrorMessage:null===(t=n)||void 0===t?void 0:t.message});$t.warn(e.message)}}}async function $n(e,t){var n;try{const n=await jn(),r=n.transaction(Bn,"readwrite"),s=r.objectStore(Bn);return await s.put(t,Kn(e)),r.done}catch(r){if(r instanceof $e)$t.warn(r.message);else{const e=Dn.create("idb-set",{originalErrorMessage:null===(n=r)||void 0===n?void 0:n.message});$t.warn(e.message)}}}function Kn(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gn=1024,zn=2592e6;class Wn{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Yn(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=Hn();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((e=>e.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=zn})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Hn(),{heartbeatsToSend:t,unsentEntries:n}=Qn(this._heartbeatsCache.heartbeats),r=Te(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Hn(){const e=new Date;return e.toISOString().substring(0,10)}function Qn(e,t=Gn){const n=[];let r=e.slice();for(const s of e){const e=n.find((e=>e.agent===s.agent));if(e){if(e.dates.push(s.date),Xn(n)>t){e.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Xn(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Yn{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!Ue()&&je().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await qn(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return $n(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return $n(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function Xn(e){return Te(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jn(e){_n(new tt("platform-logger",(e=>new Bt(e)),"PRIVATE")),_n(new tt("heartbeat",(e=>new Wn(e)),"PRIVATE")),Rn(jt,qt,e),Rn(jt,qt,"esm2017"),Rn("fire-js","")}Jn("");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zn{constructor(e,t){this._delegate=e,this.firebase=t,bn(e,new tt("app-compat",(()=>this),"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise((e=>{this._delegate.checkDestroyed(),e()})).then((()=>(this.firebase.INTERNAL.removeApp(this.name),On(this._delegate))))}_getService(e,t=gn){var n;this._delegate.checkDestroyed();const r=this._delegate.container.getProvider(e);return r.isInitialized()||"EXPLICIT"!==(null===(n=r.getComponent())||void 0===n?void 0:n.instantiationMode)||r.initialize(),r.getImmediate({identifier:t})}_removeServiceInstance(e,t=gn){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){bn(this._delegate,e)}_addOrOverwriteComponent(e){In(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const er={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},tr=new Ke("app-compat","Firebase",er);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function nr(e){const t={},n={__esModule:!0,initializeApp:o,app:i,registerVersion:Rn,setLogLevel:Fn,onLog:Mn,apps:null,SDK_VERSION:An,INTERNAL:{registerComponent:c,removeApp:s,useAsService:u,modularAPIs:r}};function s(e){delete t[e]}function i(e){if(e=e||gn,!We(t,e))throw tr.create("no-app",{appName:e});return t[e]}function o(r,s={}){const i=kn(r,s);if(We(t,i.name))return t[i.name];const o=new e(i,n);return t[i.name]=o,o}function a(){return Object.keys(t).map((e=>t[e]))}function c(t){const r=t.name,s=r.replace("-compat","");if(_n(t)&&"PUBLIC"===t.type){const o=(e=i())=>{if("function"!==typeof e[s])throw tr.create("invalid-app-argument",{appName:r});return e[s]()};void 0!==t.serviceProps&&xe(o,t.serviceProps),n[s]=o,e.prototype[s]=function(...e){const n=this._getService.bind(this,r);return n.apply(this,t.multipleInstances?e:[])}}return"PUBLIC"===t.type?n[s]:null}function u(e,t){if("serverAuth"===t)return null;const n=t;return n}return n["default"]=n,Object.defineProperty(n,"apps",{get:a}),i["App"]=e,n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rr(){const e=nr(Zn);function t(t){xe(e,t)}return e.INTERNAL=Object.assign(Object.assign({},e.INTERNAL),{createFirebaseNamespace:rr,extendNamespace:t,createSubscribe:Ye,ErrorFactory:Ke,deepExtend:xe}),e}const sr=rr(),ir=new ft("@firebase/app-compat"),or="@firebase/app-compat",ar="0.1.31";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function cr(e){Rn(or,ar,e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(Oe()&&void 0!==self.firebase){ir.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const e=self.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&ir.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const ur=sr;cr();var lr="firebase",hr="9.9.2";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
ur.registerVersion(lr,hr,"app-compat");n(8675),n(3462),n(7380),n(1118),n(3767),n(8585),n(8696),n(2262),n(4506);var dr,fr="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{},pr={},mr=mr||{},gr=fr||self;function yr(){}function vr(e){var t=typeof e;return t="object"!=t?t:e?Array.isArray(e)?"array":t:"null","array"==t||"object"==t&&"number"==typeof e.length}function wr(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function br(e){return Object.prototype.hasOwnProperty.call(e,Ir)&&e[Ir]||(e[Ir]=++_r)}var Ir="closure_uid_"+(1e9*Math.random()>>>0),_r=0;function Er(e,t,n){return e.call.apply(e.bind,arguments)}function Sr(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function Tr(e,t,n){return Tr=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Er:Sr,Tr.apply(null,arguments)}function xr(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function Dr(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(e,n,r){for(var s=Array(arguments.length-2),i=2;i<arguments.length;i++)s[i-2]=arguments[i];return t.prototype[n].apply(e,s)}}function Cr(){this.s=this.s,this.o=this.o}var Ar=0,kr={};Cr.prototype.s=!1,Cr.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=Ar)){var e=br(this);delete kr[e]}},Cr.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Nr=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"===typeof e)return"string"!==typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1},Lr=Array.prototype.forEach?function(e,t,n){Array.prototype.forEach.call(e,t,n)}:function(e,t,n){const r=e.length,s="string"===typeof e?e.split(""):e;for(let i=0;i<r;i++)i in s&&t.call(n,s[i],i,e)};function Or(e){e:{var t=Xo;const n=e.length,r="string"===typeof e?e.split(""):e;for(let s=0;s<n;s++)if(s in r&&t.call(void 0,r[s],s,e)){t=s;break e}t=-1}return 0>t?null:"string"===typeof e?e.charAt(t):e[t]}function Rr(e){return Array.prototype.concat.apply([],arguments)}function Mr(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function Fr(e){return/^[\s\xa0]*$/.test(e)}var Vr,Pr=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function Br(e,t){return-1!=e.indexOf(t)}function Ur(e,t){return e<t?-1:e>t?1:0}e:{var jr=gr.navigator;if(jr){var qr=jr.userAgent;if(qr){Vr=qr;break e}}Vr=""}function $r(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function Kr(e){const t={};for(const n in e)t[n]=e[n];return t}var Gr="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function zr(e,t){let n,r;for(let s=1;s<arguments.length;s++){for(n in r=arguments[s],r)e[n]=r[n];for(let t=0;t<Gr.length;t++)n=Gr[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function Wr(e){return Wr[" "](e),e}function Hr(e){var t=as;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}Wr[" "]=yr;var Qr,Yr=Br(Vr,"Opera"),Xr=Br(Vr,"Trident")||Br(Vr,"MSIE"),Jr=Br(Vr,"Edge"),Zr=Jr||Xr,es=Br(Vr,"Gecko")&&!(Br(Vr.toLowerCase(),"webkit")&&!Br(Vr,"Edge"))&&!(Br(Vr,"Trident")||Br(Vr,"MSIE"))&&!Br(Vr,"Edge"),ts=Br(Vr.toLowerCase(),"webkit")&&!Br(Vr,"Edge");function ns(){var e=gr.document;return e?e.documentMode:void 0}e:{var rs="",ss=function(){var e=Vr;return es?/rv:([^\);]+)(\)|;)/.exec(e):Jr?/Edge\/([\d\.]+)/.exec(e):Xr?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e):ts?/WebKit\/(\S+)/.exec(e):Yr?/(?:Version)[ \/]?(\S+)/.exec(e):void 0}();if(ss&&(rs=ss?ss[1]:""),Xr){var is=ns();if(null!=is&&is>parseFloat(rs)){Qr=String(is);break e}}Qr=rs}var os,as={};function cs(){return Hr((function(){let e=0;const t=Pr(String(Qr)).split("."),n=Pr("9").split("."),r=Math.max(t.length,n.length);for(let o=0;0==e&&o<r;o++){var s=t[o]||"",i=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],0==s[0].length&&0==i[0].length)break;e=Ur(0==s[1].length?0:parseInt(s[1],10),0==i[1].length?0:parseInt(i[1],10))||Ur(0==s[2].length,0==i[2].length)||Ur(s[2],i[2]),s=s[3],i=i[3]}while(0==e)}return 0<=e}))}if(gr.document&&Xr){var us=ns();os=us||(parseInt(Qr,10)||void 0)}else os=void 0;var ls=os,hs=function(){if(!gr.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{gr.addEventListener("test",yr,t),gr.removeEventListener("test",yr,t)}catch(n){}return e}();function ds(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}function fs(e,t){if(ds.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(es){e:{try{Wr(t.nodeName);var s=!0;break e}catch(i){}s=!1}s||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"===typeof e.pointerType?e.pointerType:ps[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&fs.Z.h.call(this)}}ds.prototype.h=function(){this.defaultPrevented=!0},Dr(fs,ds);var ps={2:"touch",3:"pen",4:"mouse"};fs.prototype.h=function(){fs.Z.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var ms="closure_listenable_"+(1e6*Math.random()|0),gs=0;function ys(e,t,n,r,s){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ia=s,this.key=++gs,this.ca=this.fa=!1}function vs(e){e.ca=!0,e.listener=null,e.proxy=null,e.src=null,e.ia=null}function ws(e){this.src=e,this.g={},this.h=0}function bs(e,t){var n=t.type;if(n in e.g){var r,s=e.g[n],i=Nr(s,t);(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(vs(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function Is(e,t,n,r){for(var s=0;s<e.length;++s){var i=e[s];if(!i.ca&&i.listener==t&&i.capture==!!n&&i.ia==r)return s}return-1}ws.prototype.add=function(e,t,n,r,s){var i=e.toString();e=this.g[i],e||(e=this.g[i]=[],this.h++);var o=Is(e,t,r,s);return-1<o?(t=e[o],n||(t.fa=!1)):(t=new ys(t,this.src,i,!!r,s),t.fa=n,e.push(t)),t};var _s="closure_lm_"+(1e6*Math.random()|0),Es={};function Ss(e,t,n,r,s){if(r&&r.once)return Ds(e,t,n,r,s);if(Array.isArray(t)){for(var i=0;i<t.length;i++)Ss(e,t[i],n,r,s);return null}return n=Rs(n),e&&e[ms]?e.N(t,n,wr(r)?!!r.capture:!!r,s):Ts(e,t,n,!1,r,s)}function Ts(e,t,n,r,s,i){if(!t)throw Error("Invalid event type");var o=wr(s)?!!s.capture:!!s,a=Ls(e);if(a||(e[_s]=a=new ws(e)),n=a.add(t,n,r,o,i),n.proxy)return n;if(r=xs(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)hs||(s=o),void 0===s&&(s=!1),e.addEventListener(t.toString(),r,s);else if(e.attachEvent)e.attachEvent(ks(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function xs(){function e(n){return t.call(e.src,e.listener,n)}var t=Ns;return e}function Ds(e,t,n,r,s){if(Array.isArray(t)){for(var i=0;i<t.length;i++)Ds(e,t[i],n,r,s);return null}return n=Rs(n),e&&e[ms]?e.O(t,n,wr(r)?!!r.capture:!!r,s):Ts(e,t,n,!0,r,s)}function Cs(e,t,n,r,s){if(Array.isArray(t))for(var i=0;i<t.length;i++)Cs(e,t[i],n,r,s);else r=wr(r)?!!r.capture:!!r,n=Rs(n),e&&e[ms]?(e=e.i,t=String(t).toString(),t in e.g&&(i=e.g[t],n=Is(i,n,r,s),-1<n&&(vs(i[n]),Array.prototype.splice.call(i,n,1),0==i.length&&(delete e.g[t],e.h--)))):e&&(e=Ls(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Is(t,n,r,s)),(n=-1<e?t[e]:null)&&As(n))}function As(e){if("number"!==typeof e&&e&&!e.ca){var t=e.src;if(t&&t[ms])bs(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(ks(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Ls(t))?(bs(n,e),0==n.h&&(n.src=null,t[_s]=null)):vs(e)}}}function ks(e){return e in Es?Es[e]:Es[e]="on"+e}function Ns(e,t){if(e.ca)e=!0;else{t=new fs(t,this);var n=e.listener,r=e.ia||e.src;e.fa&&As(e),e=n.call(r,t)}return e}function Ls(e){return e=e[_s],e instanceof ws?e:null}var Os="__closure_events_fn_"+(1e9*Math.random()>>>0);function Rs(e){return"function"===typeof e?e:(e[Os]||(e[Os]=function(t){return e.handleEvent(t)}),e[Os])}function Ms(){Cr.call(this),this.i=new ws(this),this.P=this,this.I=null}function Fs(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,"string"===typeof t)t=new ds(t,e);else if(t instanceof ds)t.target=t.target||e;else{var s=t;t=new ds(r,e),zr(t,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=t.g=n[i];s=Vs(o,r,!0,t)&&s}if(o=t.g=e,s=Vs(o,r,!0,t)&&s,s=Vs(o,r,!1,t)&&s,n)for(i=0;i<n.length;i++)o=t.g=n[i],s=Vs(o,r,!1,t)&&s}function Vs(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var s=!0,i=0;i<t.length;++i){var o=t[i];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&bs(e.i,o),s=!1!==a.call(c,r)&&s}}return s&&!r.defaultPrevented}Dr(Ms,Cr),Ms.prototype[ms]=!0,Ms.prototype.removeEventListener=function(e,t,n,r){Cs(this,e,t,n,r)},Ms.prototype.M=function(){if(Ms.Z.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)vs(n[r]);delete t.g[e],t.h--}}this.I=null},Ms.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},Ms.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var Ps=gr.JSON.stringify;function Bs(){var e=Hs;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Us{constructor(){this.h=this.g=null}add(e,t){const n=qs.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}}var js,qs=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}((()=>new $s),(e=>e.reset()));class $s{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function Ks(e){gr.setTimeout((()=>{throw e}),0)}function Gs(e,t){js||zs(),Ws||(js(),Ws=!0),Hs.add(e,t)}function zs(){var e=gr.Promise.resolve(void 0);js=function(){e.then(Qs)}}var Ws=!1,Hs=new Us;function Qs(){for(var e;e=Bs();){try{e.h.call(e.g)}catch(n){Ks(n)}var t=qs;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Ws=!1}function Ys(e,t){Ms.call(this),this.h=e||1,this.g=t||gr,this.j=Tr(this.kb,this),this.l=Date.now()}function Xs(e){e.da=!1,e.S&&(e.g.clearTimeout(e.S),e.S=null)}function Js(e,t,n){if("function"===typeof e)n&&(e=Tr(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=Tr(e.handleEvent,e)}return 2147483647<Number(t)?-1:gr.setTimeout(e,t||0)}function Zs(e){e.g=Js((()=>{e.g=null,e.i&&(e.i=!1,Zs(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}Dr(Ys,Ms),dr=Ys.prototype,dr.da=!1,dr.S=null,dr.kb=function(){if(this.da){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-e):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Fs(this,"tick"),this.da&&(Xs(this),this.start()))}},dr.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},dr.M=function(){Ys.Z.M.call(this),Xs(this),delete this.g};class ei extends Cr{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Zs(this)}M(){super.M(),this.g&&(gr.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ti(e){Cr.call(this),this.h=e,this.g={}}Dr(ti,Cr);var ni=[];function ri(e,t,n,r){Array.isArray(n)||(n&&(ni[0]=n.toString()),n=ni);for(var s=0;s<n.length;s++){var i=Ss(t,n[s],r||e.handleEvent,!1,e.h||e);if(!i)break;e.g[i.key]=i}}function si(e){$r(e.g,(function(e,t){this.g.hasOwnProperty(t)&&As(e)}),e),e.g={}}function ii(){this.g=!0}function oi(e,t,n,r,s,i){e.info((function(){if(e.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+t+"\n"+n+"\n"+o}))}function ai(e,t,n,r,s,i,o){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+t+"\n"+n+"\n"+i+" "+o}))}function ci(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+li(e,n)+(r?" "+r:"")}))}function ui(e,t){e.info((function(){return"TIMEOUT: "+t}))}function li(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if("noop"!=i&&"stop"!=i&&"close"!=i)for(var o=1;o<s.length;o++)s[o]=""}}}return Ps(n)}catch(a){return t}}ti.prototype.M=function(){ti.Z.M.call(this),si(this)},ti.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},ii.prototype.Aa=function(){this.g=!1},ii.prototype.info=function(){};var hi={},di=null;function fi(){return di=di||new Ms}function pi(e){ds.call(this,hi.Ma,e)}function mi(e){const t=fi();Fs(t,new pi(t,e))}function gi(e,t){ds.call(this,hi.STAT_EVENT,e),this.stat=t}function yi(e){const t=fi();Fs(t,new gi(t,e))}function vi(e,t){ds.call(this,hi.Na,e),this.size=t}function wi(e,t){if("function"!==typeof e)throw Error("Fn must not be null and must be a function");return gr.setTimeout((function(){e()}),t)}hi.Ma="serverreachability",Dr(pi,ds),hi.STAT_EVENT="statevent",Dr(gi,ds),hi.Na="timingevent",Dr(vi,ds);var bi={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Ii={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function _i(){}function Ei(e){return e.h||(e.h=e.i())}function Si(){}_i.prototype.h=null;var Ti,xi={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Di(){ds.call(this,"d")}function Ci(){ds.call(this,"c")}function Ai(){}function ki(e,t,n,r){this.l=e,this.j=t,this.m=n,this.X=r||1,this.V=new ti(this),this.P=Li,e=Zr?125:void 0,this.W=new Ys(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Ni}function Ni(){this.i=null,this.g="",this.h=!1}Dr(Di,ds),Dr(Ci,ds),Dr(Ai,_i),Ai.prototype.g=function(){return new XMLHttpRequest},Ai.prototype.i=function(){return{}},Ti=new Ai;var Li=45e3,Oi={},Ri={};function Mi(e,t,n){e.K=1,e.v=oo(eo(t)),e.s=n,e.U=!0,Fi(e,null)}function Fi(e,t){e.F=Date.now(),Ui(e),e.A=eo(e.v);var n=e.A,r=e.X;Array.isArray(r)||(r=[String(r)]),_o(n.h,"t",r),e.C=0,n=e.l.H,e.h=new Ni,e.g=Ca(e.l,n?t:null,!e.s),0<e.O&&(e.L=new ei(Tr(e.Ia,e,e.g),e.O)),ri(e.V,e.g,"readystatechange",e.gb),t=e.H?Kr(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.s,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),mi(1),oi(e.j,e.u,e.A,e.m,e.X,e.s)}function Vi(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Ba)}function Pi(e,t,n){let r,s=!0;for(;!e.I&&e.C<n.length;){if(r=Bi(e,n),r==Ri){4==t&&(e.o=4,yi(14),s=!1),ci(e.j,e.m,null,"[Incomplete Response]");break}if(r==Oi){e.o=4,yi(15),ci(e.j,e.m,n,"[Invalid Chunk]"),s=!1;break}ci(e.j,e.m,r,null),Gi(e,r)}Vi(e)&&r!=Ri&&r!=Oi&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,yi(16),s=!1),e.i=e.i&&s,s?0<n.length&&!e.aa&&(e.aa=!0,t=e.l,t.g==e&&t.$&&!t.L&&(t.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),ba(t),t.L=!0,yi(11))):(ci(e.j,e.m,n,"[Invalid Chunked Response]"),Ki(e),$i(e))}function Bi(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?Ri:(n=Number(t.substring(n,r)),isNaN(n)?Oi:(r+=1,r+n>t.length?Ri:(t=t.substr(r,n),e.C=r+n,t)))}function Ui(e){e.Y=Date.now()+e.P,ji(e,e.P)}function ji(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=wi(Tr(e.eb,e),t)}function qi(e){e.B&&(gr.clearTimeout(e.B),e.B=null)}function $i(e){0==e.l.G||e.I||Ea(e.l,e)}function Ki(e){qi(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,Xs(e.W),si(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function Gi(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||ko(n.i,e)))if(n.I=e.N,!e.J&&ko(n.i,e)&&3==n.G){try{var r=n.Ca.g.parse(t)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var s=r;if(0==s[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;_a(n),la(n)}wa(n),yi(18)}}else n.ta=s[1],0<n.ta-n.U&&37500>s[2]&&n.N&&0==n.A&&!n.v&&(n.v=wi(Tr(n.ab,n),6e3));if(1>=Ao(n.i)&&n.ka){try{n.ka()}catch(u){}n.ka=void 0}}else Ta(n,11)}else if((e.J||n.g==e)&&_a(n),!Fr(t))for(s=n.Ca.g.parse(t),t=0;t<s.length;t++){let u=s[t];if(n.U=u[0],u=u[1],2==n.G)if("c"==u[0]){n.J=u[1],n.la=u[2];const t=u[3];null!=t&&(n.ma=t,n.h.info("VER="+n.ma));const s=u[4];null!=s&&(n.za=s,n.h.info("SVER="+n.za));const l=u[5];null!=l&&"number"===typeof l&&0<l&&(r=1.5*l,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var i=r.i;!i.g&&(Br(e,"spdy")||Br(e,"quic")||Br(e,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(No(i,i.h),i.h=null))}if(r.D){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.sa=e,io(r.F,r.D,e))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-e.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=e;if(r.oa=Da(r,r.H?r.la:null,r.W),o.J){Lo(r.i,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(qi(a),Ui(a)),r.g=o}else va(r);0<n.l.length&&fa(n)}else"stop"!=u[0]&&"close"!=u[0]||Ta(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?Ta(n,7):ua(n):"noop"!=u[0]&&n.j&&n.j.wa(u),n.A=0)}mi(4)}catch(u){}}function zi(e){if(e.R&&"function"==typeof e.R)return e.R();if("string"===typeof e)return e.split("");if(vr(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}function Wi(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(vr(e)||"string"===typeof e)Lr(e,t,void 0);else{if(e.T&&"function"==typeof e.T)var n=e.T();else if(e.R&&"function"==typeof e.R)n=void 0;else if(vr(e)||"string"===typeof e){n=[];for(var r=e.length,s=0;s<r;s++)n.push(s)}else for(s in n=[],r=0,e)n[r++]=s;r=zi(e),s=r.length;for(var i=0;i<s;i++)t.call(void 0,r[i],n&&n[i],e)}}function Hi(e,t){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(e)if(e instanceof Hi)for(n=e.T(),r=0;r<n.length;r++)this.set(n[r],e.get(n[r]));else for(r in e)this.set(r,e[r])}function Qi(e){if(e.i!=e.g.length){for(var t=0,n=0;t<e.g.length;){var r=e.g[t];Yi(e.h,r)&&(e.g[n++]=r),t++}e.g.length=n}if(e.i!=e.g.length){var s={};for(n=t=0;t<e.g.length;)r=e.g[t],Yi(s,r)||(e.g[n++]=r,s[r]=1),t++;e.g.length=n}}function Yi(e,t){return Object.prototype.hasOwnProperty.call(e,t)}dr=ki.prototype,dr.setTimeout=function(e){this.P=e},dr.gb=function(e){e=e.target;const t=this.L;t&&3==ra(e)?t.l():this.Ia(e)},dr.Ia=function(e){try{if(e==this.g)e:{const l=ra(this.g);var t=this.g.Da();const h=this.g.ba();if(!(3>l)&&(3!=l||Zr||this.g&&(this.h.h||this.g.ga()||sa(this.g)))){this.I||4!=l||7==t||mi(8==t||0>=h?3:2),qi(this);var n=this.g.ba();this.N=n;t:if(Vi(this)){var r=sa(this.g);e="";var s=r.length,i=4==ra(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Ki(this),$i(this);var o="";break t}this.h.i=new gr.TextDecoder}for(t=0;t<s;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:i&&t==s-1});r.splice(0,s),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,ai(this.j,this.u,this.A,this.m,this.X,l,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Fr(a)){var u=a;break t}}u=null}if(!(n=u)){this.i=!1,this.o=3,yi(12),Ki(this),$i(this);break e}ci(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Gi(this,n)}this.U?(Pi(this,l,o),Zr&&this.i&&3==l&&(ri(this.V,this.W,"tick",this.fb),this.W.start())):(ci(this.j,this.m,o,null),Gi(this,o)),4==l&&Ki(this),this.i&&!this.I&&(4==l?Ea(this.l,this):(this.i=!1,Ui(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,yi(12)):(this.o=0,yi(13)),Ki(this),$i(this)}}}catch(l){}},dr.fb=function(){if(this.g){var e=ra(this.g),t=this.g.ga();this.C<t.length&&(qi(this),Pi(this,e,t),this.i&&4!=e&&Ui(this))}},dr.cancel=function(){this.I=!0,Ki(this)},dr.eb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(ui(this.j,this.A),2!=this.K&&(mi(3),yi(17)),Ki(this),this.o=2,$i(this)):ji(this,this.Y-e)},dr=Hi.prototype,dr.R=function(){Qi(this);for(var e=[],t=0;t<this.g.length;t++)e.push(this.h[this.g[t]]);return e},dr.T=function(){return Qi(this),this.g.concat()},dr.get=function(e,t){return Yi(this.h,e)?this.h[e]:t},dr.set=function(e,t){Yi(this.h,e)||(this.i++,this.g.push(e)),this.h[e]=t},dr.forEach=function(e,t){for(var n=this.T(),r=0;r<n.length;r++){var s=n[r],i=this.get(s);e.call(t,i,s,this)}};var Xi=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Ji(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),s=null;if(0<=r){var i=e[n].substring(0,r);s=e[n].substring(r+1)}else i=e[n];t(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Zi(e,t){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,e instanceof Zi){this.g=void 0!==t?t:e.g,to(this,e.j),this.s=e.s,no(this,e.i),ro(this,e.m),this.l=e.l,t=e.h;var n=new vo;n.i=t.i,t.g&&(n.g=new Hi(t.g),n.h=t.h),so(this,n),this.o=e.o}else e&&(n=String(e).match(Xi))?(this.g=!!t,to(this,n[1]||"",!0),this.s=uo(n[2]||""),no(this,n[3]||"",!0),ro(this,n[4]),this.l=uo(n[5]||"",!0),so(this,n[6]||"",!0),this.o=uo(n[7]||"")):(this.g=!!t,this.h=new vo(null,this.g))}function eo(e){return new Zi(e)}function to(e,t,n){e.j=n?uo(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function no(e,t,n){e.i=n?uo(t,!0):t}function ro(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function so(e,t,n){t instanceof vo?(e.h=t,So(e.h,e.g)):(n||(t=lo(t,go)),e.h=new vo(t,e.g))}function io(e,t,n){e.h.set(t,n)}function oo(e){return io(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function ao(e){return e instanceof Zi?eo(e):new Zi(e,void 0)}function co(e,t,n,r){var s=new Zi(null,void 0);return e&&to(s,e),t&&no(s,t),n&&ro(s,n),r&&(s.l=r),s}function uo(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function lo(e,t,n){return"string"===typeof e?(e=encodeURI(e).replace(t,ho),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function ho(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(15&e).toString(16)}Zi.prototype.toString=function(){var e=[],t=this.j;t&&e.push(lo(t,fo,!0),":");var n=this.i;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(lo(t,fo,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&e.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&e.push("/"),e.push(lo(n,"/"==n.charAt(0)?mo:po,!0))),(n=this.h.toString())&&e.push("?",n),(n=this.o)&&e.push("#",lo(n,yo)),e.join("")};var fo=/[#\/\?@]/g,po=/[#\?:]/g,mo=/[#\?]/g,go=/[#\?@]/g,yo=/#/g;function vo(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function wo(e){e.g||(e.g=new Hi,e.h=0,e.i&&Ji(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function bo(e,t){wo(e),t=Eo(e,t),Yi(e.g.h,t)&&(e.i=null,e.h-=e.g.get(t).length,e=e.g,Yi(e.h,t)&&(delete e.h[t],e.i--,e.g.length>2*e.i&&Qi(e)))}function Io(e,t){return wo(e),t=Eo(e,t),Yi(e.g.h,t)}function _o(e,t,n){bo(e,t),0<n.length&&(e.i=null,e.g.set(Eo(e,t),Mr(n)),e.h+=n.length)}function Eo(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function So(e,t){t&&!e.j&&(wo(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(bo(this,t),_o(this,n,e))}),e)),e.j=t}dr=vo.prototype,dr.add=function(e,t){wo(this),this.i=null,e=Eo(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},dr.forEach=function(e,t){wo(this),this.g.forEach((function(n,r){Lr(n,(function(n){e.call(t,n,r,this)}),this)}),this)},dr.T=function(){wo(this);for(var e=this.g.R(),t=this.g.T(),n=[],r=0;r<t.length;r++)for(var s=e[r],i=0;i<s.length;i++)n.push(t[r]);return n},dr.R=function(e){wo(this);var t=[];if("string"===typeof e)Io(this,e)&&(t=Rr(t,this.g.get(Eo(this,e))));else{e=this.g.R();for(var n=0;n<e.length;n++)t=Rr(t,e[n])}return t},dr.set=function(e,t){return wo(this),this.i=null,e=Eo(this,e),Io(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},dr.get=function(e,t){return e?(e=this.R(e),0<e.length?String(e[0]):t):t},dr.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=this.g.T(),n=0;n<t.length;n++){var r=t[n],s=encodeURIComponent(String(r));r=this.R(r);for(var i=0;i<r.length;i++){var o=s;""!==r[i]&&(o+="="+encodeURIComponent(String(r[i]))),e.push(o)}}return this.i=e.join("&")};var To=class{constructor(e,t){this.h=e,this.g=t}};function xo(e){this.l=e||Do,gr.PerformanceNavigationTiming?(e=gr.performance.getEntriesByType("navigation"),e=0<e.length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol)):e=!!(gr.g&&gr.g.Ea&&gr.g.Ea()&&gr.g.Ea().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Do=10;function Co(e){return!!e.h||!!e.g&&e.g.size>=e.j}function Ao(e){return e.h?1:e.g?e.g.size:0}function ko(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function No(e,t){e.g?e.g.add(t):e.h=t}function Lo(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function Oo(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return Mr(e.i)}function Ro(){}function Mo(){this.g=new Ro}function Fo(e,t,n){const r=n||"";try{Wi(e,(function(e,n){let s=e;wr(e)&&(s=Ps(e)),t.push(r+n+"="+encodeURIComponent(s))}))}catch(s){throw t.push(r+"type="+encodeURIComponent("_badmap")),s}}function Vo(e,t){const n=new ii;if(gr.Image){const r=new Image;r.onload=xr(Po,n,r,"TestLoadImage: loaded",!0,t),r.onerror=xr(Po,n,r,"TestLoadImage: error",!1,t),r.onabort=xr(Po,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=xr(Po,n,r,"TestLoadImage: timeout",!1,t),gr.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}function Po(e,t,n,r,s){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,s(r)}catch(i){}}function Bo(e){this.l=e.$b||null,this.j=e.ib||!1}function Uo(e,t){Ms.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=jo,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}xo.prototype.cancel=function(){if(this.i=Oo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},Ro.prototype.stringify=function(e){return gr.JSON.stringify(e,void 0)},Ro.prototype.parse=function(e){return gr.JSON.parse(e,void 0)},Dr(Bo,_i),Bo.prototype.g=function(){return new Uo(this.l,this.j)},Bo.prototype.i=function(e){return function(){return e}}({}),Dr(Uo,Ms);var jo=0;function qo(e){e.j.read().then(e.Sa.bind(e)).catch(e.ha.bind(e))}function $o(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Ko(e)}function Ko(e){e.onreadystatechange&&e.onreadystatechange.call(e)}dr=Uo.prototype,dr.open=function(e,t){if(this.readyState!=jo)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Ko(this)},dr.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||gr).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ha.bind(this))},dr.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,$o(this)),this.readyState=jo},dr.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Ko(this)),this.g&&(this.readyState=3,Ko(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if("undefined"!==typeof gr.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;qo(this)}else e.text().then(this.Ua.bind(this),this.ha.bind(this))},dr.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?$o(this):Ko(this),3==this.readyState&&qo(this)}},dr.Ua=function(e){this.g&&(this.response=this.responseText=e,$o(this))},dr.Ta=function(e){this.g&&(this.response=e,$o(this))},dr.ha=function(){this.g&&$o(this)},dr.setRequestHeader=function(e,t){this.v.append(e,t)},dr.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},dr.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(Uo.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var Go=gr.JSON.parse;function zo(e){Ms.call(this),this.headers=new Hi,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Wo,this.K=this.L=!1}Dr(zo,Ms);var Wo="",Ho=/^https?$/i,Qo=["POST","PUT"];function Yo(e){return Xr&&cs()&&"number"===typeof e.timeout&&void 0!==e.ontimeout}function Xo(e){return"content-type"==e.toLowerCase()}function Jo(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Zo(e),ta(e)}function Zo(e){e.D||(e.D=!0,Fs(e,"complete"),Fs(e,"error"))}function ea(e){if(e.h&&"undefined"!=typeof mr&&(!e.C[1]||4!=ra(e)||2!=e.ba()))if(e.v&&4==ra(e))Js(e.Fa,0,e);else if(Fs(e,"readystatechange"),4==ra(e)){e.h=!1;try{const c=e.ba();e:switch(c){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===c){var s=String(e.H).match(Xi)[1]||null;if(!s&&gr.self&&gr.self.location){var i=gr.self.location.protocol;s=i.substr(0,i.length-1)}r=!Ho.test(s?s.toLowerCase():"")}n=r}if(n)Fs(e,"complete"),Fs(e,"success");else{e.m=6;try{var o=2<ra(e)?e.g.statusText:""}catch(a){o=""}e.j=o+" ["+e.ba()+"]",Zo(e)}}finally{ta(e)}}}function ta(e,t){if(e.g){na(e);const r=e.g,s=e.C[0]?yr:null;e.g=null,e.C=null,t||Fs(e,"ready");try{r.onreadystatechange=s}catch(n){}}}function na(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(gr.clearTimeout(e.A),e.A=null)}function ra(e){return e.g?e.g.readyState:0}function sa(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case Wo:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(t){return null}}function ia(e){let t="";return $r(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function oa(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=ia(n),"string"===typeof e?null!=n&&encodeURIComponent(String(n)):io(e,t,n))}function aa(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function ca(e){this.za=0,this.l=[],this.h=new ii,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=aa("failFast",!1,e),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=aa("baseRetryDelayMs",5e3,e),this.$a=aa("retryDelaySeedMs",1e4,e),this.Ya=aa("forwardChannelMaxRetries",2,e),this.ra=aa("forwardChannelRequestTimeoutMs",2e4,e),this.qa=e&&e.xmlHttpFactory||void 0,this.Ba=e&&e.Yb||!1,this.K=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.J="",this.i=new xo(e&&e.concurrentRequestLimit),this.Ca=new Mo,this.ja=e&&e.fastHandshake||!1,this.Ra=e&&e.Wb||!1,e&&e.Aa&&this.h.Aa(),e&&e.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&e&&e.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!e||!1!==e.Xb}function ua(e){if(ha(e),3==e.G){var t=e.V++,n=eo(e.F);io(n,"SID",e.J),io(n,"RID",t),io(n,"TYPE","terminate"),ga(e,n),t=new ki(e,e.h,t,void 0),t.K=2,t.v=oo(eo(n)),n=!1,gr.navigator&&gr.navigator.sendBeacon&&(n=gr.navigator.sendBeacon(t.v.toString(),"")),!n&&gr.Image&&((new Image).src=t.v,n=!0),n||(t.g=Ca(t.l,null),t.g.ea(t.v)),t.F=Date.now(),Ui(t)}xa(e)}function la(e){e.g&&(ba(e),e.g.cancel(),e.g=null)}function ha(e){la(e),e.u&&(gr.clearTimeout(e.u),e.u=null),_a(e),e.i.cancel(),e.m&&("number"===typeof e.m&&gr.clearTimeout(e.m),e.m=null)}function da(e,t){e.l.push(new To(e.Za++,t)),3==e.G&&fa(e)}function fa(e){Co(e.i)||e.m||(e.m=!0,Gs(e.Ha,e),e.C=0)}function pa(e,t){return!(Ao(e.i)>=e.i.j-(e.m?1:0))&&(e.m?(e.l=t.D.concat(e.l),!0):!(1==e.G||2==e.G||e.C>=(e.Xa?0:e.Ya))&&(e.m=wi(Tr(e.Ha,e,t),Sa(e,e.C)),e.C++,!0))}function ma(e,t){var n;n=t?t.m:e.V++;const r=eo(e.F);io(r,"SID",e.J),io(r,"RID",n),io(r,"AID",e.U),ga(e,r),e.o&&e.s&&oa(r,e.o,e.s),n=new ki(e,e.h,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.l=t.D.concat(e.l)),t=ya(e,n,1e3),n.setTimeout(Math.round(.5*e.ra)+Math.round(.5*e.ra*Math.random())),No(e.i,n),Mi(n,r,t)}function ga(e,t){e.j&&Wi({},(function(e,n){io(t,n,e)}))}function ya(e,t,n){n=Math.min(e.l.length,n);var r=e.j?Tr(e.j.Oa,e.j,e):null;e:{var s=e.l;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=s[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let i=!0;for(let o=0;o<n;o++){let n=s[o].h;const a=s[o].g;if(n-=t,0>n)t=Math.max(0,s[o].h-100),i=!1;else try{Fo(a,e,"req"+n+"_")}catch(sc){r&&r(a)}}if(i){r=e.join("&");break e}}}return e=e.l.splice(0,n),t.D=e,r}function va(e){e.g||e.u||(e.Y=1,Gs(e.Ga,e),e.A=0)}function wa(e){return!(e.g||e.u||3<=e.A)&&(e.Y++,e.u=wi(Tr(e.Ga,e),Sa(e,e.A)),e.A++,!0)}function ba(e){null!=e.B&&(gr.clearTimeout(e.B),e.B=null)}function Ia(e){e.g=new ki(e,e.h,"rpc",e.Y),null===e.o&&(e.g.H=e.s),e.g.O=0;var t=eo(e.oa);io(t,"RID","rpc"),io(t,"SID",e.J),io(t,"CI",e.N?"0":"1"),io(t,"AID",e.U),ga(e,t),io(t,"TYPE","xmlhttp"),e.o&&e.s&&oa(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.la,n.K=1,n.v=oo(eo(t)),n.s=null,n.U=!0,Fi(n,e)}function _a(e){null!=e.v&&(gr.clearTimeout(e.v),e.v=null)}function Ea(e,t){var n=null;if(e.g==t){_a(e),ba(e),e.g=null;var r=2}else{if(!ko(e.i,t))return;n=t.D,Lo(e.i,t),r=1}if(e.I=t.N,0!=e.G)if(t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.F;var s=e.C;r=fi(),Fs(r,new vi(r,n,t,s)),fa(e)}else va(e);else if(s=t.o,3==s||0==s&&0<e.I||!(1==r&&pa(e,t)||2==r&&wa(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),s){case 1:Ta(e,5);break;case 4:Ta(e,10);break;case 3:Ta(e,6);break;default:Ta(e,2)}}function Sa(e,t){let n=e.Pa+Math.floor(Math.random()*e.$a);return e.j||(n*=2),n*t}function Ta(e,t){if(e.h.info("Error code "+t),2==t){var n=null;e.j&&(n=null);var r=Tr(e.jb,e);n||(n=new Zi("//www.google.com/images/cleardot.gif"),gr.location&&"http"==gr.location.protocol||to(n,"https"),oo(n)),Vo(n.toString(),r)}else yi(2);e.G=0,e.j&&e.j.va(t),xa(e),ha(e)}function xa(e){e.G=0,e.I=-1,e.j&&(0==Oo(e.i).length&&0==e.l.length||(e.i.i.length=0,Mr(e.l),e.l.length=0),e.j.ua())}function Da(e,t,n){let r=ao(n);if(""!=r.i)t&&no(r,t+"."+r.i),ro(r,r.m);else{const e=gr.location;r=co(e.protocol,t?t+"."+e.hostname:e.hostname,+e.port,n)}return e.aa&&$r(e.aa,(function(e,t){io(r,t,e)})),t=e.D,n=e.sa,t&&n&&io(r,t,n),io(r,"VER",e.ma),ga(e,r),r}function Ca(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ba&&!e.qa?new zo(new Bo({ib:!0})):new zo(e.qa),t.L=e.H,t}function Aa(){}function ka(){if(Xr&&!(10<=Number(ls)))throw Error("Environmental error: no available transport.")}function Na(e,t){Ms.call(this),this.g=new ca(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.P=e,(e=t&&t.httpHeadersOverwriteParam)&&!Fr(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Fr(t)&&(this.g.D=t,e=this.h,null!==e&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Ra(this)}function La(e){Di.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function Oa(){Ci.call(this),this.status=1}function Ra(e){this.g=e}dr=zo.prototype,dr.ea=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Ti.g(),this.C=this.u?Ei(this.u):Ei(Ti),this.g.onreadystatechange=Tr(this.Fa,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(i){return void Jo(this,i)}e=n||"";const s=new Hi(this.headers);r&&Wi(r,(function(e,t){s.set(t,e)})),r=Or(s.T()),n=gr.FormData&&e instanceof gr.FormData,!(0<=Nr(Qo,t))||r||n||s.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),s.forEach((function(e,t){this.g.setRequestHeader(t,e)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{na(this),0<this.B&&((this.K=Yo(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Tr(this.pa,this)):this.A=Js(this.pa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(i){Jo(this,i)}},dr.pa=function(){"undefined"!=typeof mr&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Fs(this,"timeout"),this.abort(8))},dr.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Fs(this,"complete"),Fs(this,"abort"),ta(this))},dr.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ta(this,!0)),zo.Z.M.call(this)},dr.Fa=function(){this.s||(this.F||this.v||this.l?ea(this):this.cb())},dr.cb=function(){ea(this)},dr.ba=function(){try{return 2<ra(this)?this.g.status:-1}catch(e){return-1}},dr.ga=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},dr.Qa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),Go(t)}},dr.Da=function(){return this.m},dr.La=function(){return"string"===typeof this.j?this.j:String(this.j)},dr=ca.prototype,dr.ma=8,dr.G=1,dr.hb=function(e){try{this.h.info("Origin Trials invoked: "+e)}catch(t){}},dr.Ha=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const s=new ki(this,this.h,e,void 0);let i=this.s;if(this.P&&(i?(i=Kr(i),zr(i,this.P)):i=this.P),null===this.o&&(s.H=i),this.ja)e:{for(var t=0,n=0;n<this.l.length;n++){var r=this.l[n];if(r="__data__"in r.g&&(r=r.g.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(t+=r,4096<t){t=n;break e}if(4096===t||n===this.l.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=ya(this,s,t),n=eo(this.F),io(n,"RID",e),io(n,"CVER",22),this.D&&io(n,"X-HTTP-Session-Id",this.D),ga(this,n),this.o&&i&&oa(n,this.o,i),No(this.i,s),this.Ra&&io(n,"TYPE","init"),this.ja?(io(n,"$req",t),io(n,"SID","null"),s.$=!0,Mi(s,n,null)):Mi(s,n,t),this.G=2}}else 3==this.G&&(e?ma(this,e):0==this.l.length||Co(this.i)||ma(this))},dr.Ga=function(){if(this.u=null,Ia(this),this.$&&!(this.L||null==this.g||0>=this.O)){var e=2*this.O;this.h.info("BP detection timer enabled: "+e),this.B=wi(Tr(this.bb,this),e)}},dr.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,yi(10),la(this),Ia(this))},dr.ab=function(){null!=this.v&&(this.v=null,la(this),wa(this),yi(19))},dr.jb=function(e){e?(this.h.info("Successfully pinged google.com"),yi(2)):(this.h.info("Failed to ping google.com"),yi(1))},dr=Aa.prototype,dr.xa=function(){},dr.wa=function(){},dr.va=function(){},dr.ua=function(){},dr.Oa=function(){},ka.prototype.g=function(e,t){return new Na(e,t)},Dr(Na,Ms),Na.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;e.Wa&&(e.h.info("Origin Trials enabled."),Gs(Tr(e.hb,e,t))),yi(0),e.W=t,e.aa=n||{},e.N=e.X,e.F=Da(e,null,e.W),fa(e)},Na.prototype.close=function(){ua(this.g)},Na.prototype.u=function(e){if("string"===typeof e){var t={};t.__data__=e,da(this.g,t)}else this.v?(t={},t.__data__=Ps(e),da(this.g,t)):da(this.g,e)},Na.prototype.M=function(){this.g.j=null,delete this.j,ua(this.g),delete this.g,Na.Z.M.call(this)},Dr(La,Di),Dr(Oa,Ci),Dr(Ra,Aa),Ra.prototype.xa=function(){Fs(this.g,"a")},Ra.prototype.wa=function(e){Fs(this.g,new La(e))},Ra.prototype.va=function(e){Fs(this.g,new Oa(e))},Ra.prototype.ua=function(){Fs(this.g,"b")},ka.prototype.createWebChannel=ka.prototype.g,Na.prototype.send=Na.prototype.u,Na.prototype.open=Na.prototype.m,Na.prototype.close=Na.prototype.close,bi.NO_ERROR=0,bi.TIMEOUT=8,bi.HTTP_ERROR=6,Ii.COMPLETE="complete",Si.EventType=xi,xi.OPEN="a",xi.CLOSE="b",xi.ERROR="c",xi.MESSAGE="d",Ms.prototype.listen=Ms.prototype.N,zo.prototype.listenOnce=zo.prototype.O,zo.prototype.getLastError=zo.prototype.La,zo.prototype.getLastErrorCode=zo.prototype.Da,zo.prototype.getStatus=zo.prototype.ba,zo.prototype.getResponseJson=zo.prototype.Qa,zo.prototype.getResponseText=zo.prototype.ga,zo.prototype.send=zo.prototype.ea;var Ma=pr.createWebChannelTransport=function(){return new ka},Fa=pr.getStatEventTarget=function(){return fi()},Va=pr.ErrorCode=bi,Pa=pr.EventType=Ii,Ba=pr.Event=hi,Ua=pr.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},ja=pr.FetchXmlHttpFactory=Bo,qa=pr.WebChannel=Si,$a=pr.XhrIo=zo;const Ka="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ga.UNAUTHENTICATED=new Ga(null),Ga.GOOGLE_CREDENTIALS=new Ga("google-credentials-uid"),Ga.FIRST_PARTY=new Ga("first-party-uid"),Ga.MOCK_USER=new Ga("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let za="9.9.2";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wa=new ft("@firebase/firestore");function Ha(){return Wa.logLevel}function Qa(e){Wa.setLogLevel(e)}function Ya(e,...t){if(Wa.logLevel<=ct.DEBUG){const n=t.map(Za);Wa.debug(`Firestore (${za}): ${e}`,...n)}}function Xa(e,...t){if(Wa.logLevel<=ct.ERROR){const n=t.map(Za);Wa.error(`Firestore (${za}): ${e}`,...n)}}function Ja(e,...t){if(Wa.logLevel<=ct.WARN){const n=t.map(Za);Wa.warn(`Firestore (${za}): ${e}`,...n)}}function Za(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ec(e="Unexpected state"){const t=`FIRESTORE (${za}) INTERNAL ASSERTION FAILED: `+e;throw Xa(t),new Error(t)}function tc(e,t){e||ec()}function nc(e,t){e||ec()}function rc(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sc={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ic extends $e{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class cc{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Ga.UNAUTHENTICATED)))}shutdown(){}}class uc{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class lc{constructor(e){this.t=e,this.currentUser=Ga.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let s=new oc;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new oc,e.enqueueRetryable((()=>r(this.currentUser)))};const i=()=>{const t=s;e.enqueueRetryable((async()=>{await t.promise,await r(this.currentUser)}))},o=e=>{Ya("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),i()};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(Ya("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new oc)}}),0),i()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(Ya("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(tc("string"==typeof t.accessToken),new ac(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return tc(null===e||"string"==typeof e),new Ga(e)}}class hc{constructor(e,t,n){this.type="FirstParty",this.user=Ga.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",t);const r=e.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class dc{constructor(e,t,n){this.h=e,this.l=t,this.m=n}getToken(){return Promise.resolve(new hc(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable((()=>t(Ga.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class fc{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class pc{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,t){const n=e=>{null!=e.error&&Ya("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.p;return this.p=e.token,Ya("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const r=e=>{Ya("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.g.onInit((e=>r(e))),setTimeout((()=>{if(!this.appCheck){const e=this.g.getImmediate({optional:!0});e?r(e):Ya("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(tc("string"==typeof e.token),this.p=e.token,new fc(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function mc(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{static I(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=mc(40);for(let s=0;s<r.length;++s)n.length<20&&r[s]<t&&(n+=e.charAt(r[s]%e.length))}return n}}function yc(e,t){return e<t?-1:e>t?1:0}function vc(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}function wc(e){return e+"\0"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ic(sc.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ic(sc.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new ic(sc.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ic(sc.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return bc.fromMillis(Date.now())}static fromDate(e){return bc.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new bc(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?yc(this.nanoseconds,e.nanoseconds):yc(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Ic(e)}static min(){return new Ic(new bc(0,0))}static max(){return new Ic(new bc(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(e,t,n){void 0===t?t=0:t>e.length&&ec(),void 0===n?n=e.length-t:n>e.length-t&&ec(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===_c.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof _c?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),s=t.get(r);if(n<s)return-1;if(n>s)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Ec extends _c{construct(e,t,n){return new Ec(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new ic(sc.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new Ec(t)}static emptyPath(){return new Ec([])}}const Sc=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Tc extends _c{construct(e,t,n){return new Tc(e,t,n)}static isValidIdentifier(e){return Sc.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Tc.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Tc(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const s=()=>{if(0===n.length)throw new ic(sc.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let i=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new ic(sc.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new ic(sc.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(i=!i,r++):"."!==t||i?(n+=t,r++):(s(),r++)}if(s(),i)throw new ic(sc.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Tc(t)}static emptyPath(){return new Tc([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(e){this.path=e}static fromPath(e){return new xc(Ec.fromString(e))}static fromName(e){return new xc(Ec.fromString(e).popFirst(5))}static empty(){return new xc(Ec.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===Ec.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return Ec.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new xc(new Ec(e.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}function Cc(e){return e.fields.find((e=>2===e.kind))}function Ac(e){return e.fields.filter((e=>2!==e.kind))}Dc.UNKNOWN_ID=-1;class kc{constructor(e,t){this.fieldPath=e,this.kind=t}}class Nc{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Nc(0,Rc.min())}}function Lc(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,s=Ic.fromTimestamp(1e9===r?new bc(n+1,0):new bc(n,r));return new Rc(s,xc.empty(),t)}function Oc(e){return new Rc(e.readTime,e.key,-1)}class Rc{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new Rc(Ic.min(),xc.empty(),-1)}static max(){return new Rc(Ic.max(),xc.empty(),-1)}}function Mc(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=xc.comparator(e.documentKey,t.documentKey),0!==n?n:yc(e.largestBatchId,t.largestBatchId))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fc="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Vc{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pc(e){if(e.code!==sc.FAILED_PRECONDITION||e.message!==Fc)throw e;Ya("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ec(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Bc(((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof Bc?t:Bc.resolve(t)}catch(e){return Bc.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):Bc.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):Bc.reject(t)}static resolve(e){return new Bc(((t,n)=>{t(e)}))}static reject(e){return new Bc(((t,n)=>{n(e)}))}static waitFor(e){return new Bc(((t,n)=>{let r=0,s=0,i=!1;e.forEach((e=>{++r,e.next((()=>{++s,i&&s===r&&t()}),(e=>n(e)))})),i=!0,s===r&&t()}))}static or(e){let t=Bc.resolve(!1);for(const n of e)t=t.next((e=>e?Bc.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,r)=>{n.push(t.call(this,e,r))})),this.waitFor(n)}static mapArray(e,t){return new Bc(((n,r)=>{const s=e.length,i=new Array(s);let o=0;for(let a=0;a<s;a++){const c=a;t(e[c]).next((e=>{i[c]=e,++o,o===s&&n(i)}),(e=>r(e)))}}))}static doWhile(e,t){return new Bc(((n,r)=>{const s=()=>{!0===e()?t().next((()=>{s()}),r):n()};s()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.T=new oc,this.transaction.oncomplete=()=>{this.T.resolve()},this.transaction.onabort=()=>{t.error?this.T.reject(new $c(e,t.error)):this.T.resolve()},this.transaction.onerror=t=>{const n=Hc(t.target.error);this.T.reject(new $c(e,n))}}static open(e,t,n,r){try{return new Uc(t,e.transaction(r,n))}catch(e){throw new $c(t,e)}}get A(){return this.T.promise}abort(e){e&&this.T.reject(e),this.aborted||(Ya("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}R(){const e=this.transaction;this.aborted||"function"!=typeof e.commit||e.commit()}store(e){const t=this.transaction.objectStore(e);return new Gc(t)}}class jc{constructor(e,t,n){this.name=e,this.version=t,this.P=n,12.2===jc.v(ke())&&Xa("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return Ya("SimpleDb","Removing database:",e),zc(window.indexedDB.deleteDatabase(e)).toPromise()}static V(){if(!Ue())return!1;if(jc.S())return!0;const e=ke(),t=jc.v(e),n=0<t&&t<10,r=jc.D(e),s=0<r&&r<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||s)}static S(){var e;return"undefined"!=typeof process&&"YES"===(null===(e={NODE_ENV:"production",BASE_URL:"/"})||void 0===e?void 0:e.C)}static N(e,t){return e.store(t)}static v(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}static D(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}async k(e){return this.db||(Ya("SimpleDb","Opening database:",this.name),this.db=await new Promise(((t,n)=>{const r=indexedDB.open(this.name,this.version);r.onsuccess=e=>{const n=e.target.result;t(n)},r.onblocked=()=>{n(new $c(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=t=>{const r=t.target.error;"VersionError"===r.name?n(new ic(sc.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===r.name?n(new ic(sc.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+r)):n(new $c(e,r))},r.onupgradeneeded=e=>{Ya("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',e.oldVersion);const t=e.target.result;this.P.M(t,r.transaction,e.oldVersion,this.version).next((()=>{Ya("SimpleDb","Database upgrade to version "+this.version+" complete")}))}}))),this.O&&(this.db.onversionchange=e=>this.O(e)),this.db}F(e){this.O=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,r){const s="readonly"===t;let i=0;for(;;){++i;try{this.db=await this.k(e);const t=Uc.open(this.db,e,s?"readonly":"readwrite",n),i=r(t).next((e=>(t.R(),e))).catch((e=>(t.abort(e),Bc.reject(e)))).toPromise();return i.catch((()=>{})),await t.A,i}catch(e){const t=e,n="FirebaseError"!==t.name&&i<3;if(Ya("SimpleDb","Transaction failed with error:",t.message,"Retrying:",n),this.close(),!n)return Promise.reject(t)}}}close(){this.db&&this.db.close(),this.db=void 0}}class qc{constructor(e){this.$=e,this.B=!1,this.L=null}get isDone(){return this.B}get U(){return this.L}set cursor(e){this.$=e}done(){this.B=!0}q(e){this.L=e}delete(){return zc(this.$.delete())}}class $c extends ic{constructor(e,t){super(sc.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Kc(e){return"IndexedDbTransactionError"===e.name}class Gc{constructor(e){this.store=e}put(e,t){let n;return void 0!==t?(Ya("SimpleDb","PUT",this.store.name,e,t),n=this.store.put(t,e)):(Ya("SimpleDb","PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),zc(n)}add(e){return Ya("SimpleDb","ADD",this.store.name,e,e),zc(this.store.add(e))}get(e){return zc(this.store.get(e)).next((t=>(void 0===t&&(t=null),Ya("SimpleDb","GET",this.store.name,e,t),t)))}delete(e){return Ya("SimpleDb","DELETE",this.store.name,e),zc(this.store.delete(e))}count(){return Ya("SimpleDb","COUNT",this.store.name),zc(this.store.count())}K(e,t){const n=this.options(e,t);if(n.index||"function"!=typeof this.store.getAll){const e=this.cursor(n),t=[];return this.G(e,((e,n)=>{t.push(n)})).next((()=>t))}{const e=this.store.getAll(n.range);return new Bc(((t,n)=>{e.onerror=e=>{n(e.target.error)},e.onsuccess=e=>{t(e.target.result)}}))}}j(e,t){const n=this.store.getAll(e,null===t?void 0:t);return new Bc(((e,t)=>{n.onerror=e=>{t(e.target.error)},n.onsuccess=t=>{e(t.target.result)}}))}W(e,t){Ya("SimpleDb","DELETE ALL",this.store.name);const n=this.options(e,t);n.H=!1;const r=this.cursor(n);return this.G(r,((e,t,n)=>n.delete()))}J(e,t){let n;t?n=e:(n={},t=e);const r=this.cursor(n);return this.G(r,t)}Y(e){const t=this.cursor({});return new Bc(((n,r)=>{t.onerror=e=>{const t=Hc(e.target.error);r(t)},t.onsuccess=t=>{const r=t.target.result;r?e(r.primaryKey,r.value).next((e=>{e?r.continue():n()})):n()}}))}G(e,t){const n=[];return new Bc(((r,s)=>{e.onerror=e=>{s(e.target.error)},e.onsuccess=e=>{const s=e.target.result;if(!s)return void r();const i=new qc(s),o=t(s.primaryKey,s.value,i);if(o instanceof Bc){const e=o.catch((e=>(i.done(),Bc.reject(e))));n.push(e)}i.isDone?r():null===i.U?s.continue():s.continue(i.U)}})).next((()=>Bc.waitFor(n)))}options(e,t){let n;return void 0!==e&&("string"==typeof e?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.H?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function zc(e){return new Bc(((t,n)=>{e.onsuccess=e=>{const n=e.target.result;t(n)},e.onerror=e=>{const t=Hc(e.target.error);n(t)}}))}let Wc=!1;function Hc(e){const t=jc.v(ke());if(t>=12.2&&t<13){const t="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(t)>=0){const e=new ic("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Wc||(Wc=!0,setTimeout((()=>{throw e}),0)),e}}return e}class Qc{constructor(e,t){this.asyncQueue=e,this.X=t,this.task=null}start(){this.Z(15)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return null!==this.task}Z(e){Ya("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,(async()=>{this.task=null;try{Ya("IndexBackiller",`Documents written: ${await this.X.tt()}`)}catch(e){Kc(e)?Ya("IndexBackiller","Ignoring IndexedDB error during index backfill: ",e):await Pc(e)}await this.Z(1)}))}}class Yc{constructor(e,t){this.localStore=e,this.persistence=t}async tt(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",(t=>this.et(t,e)))}et(e,t){const n=new Set;let r=t,s=!0;return Bc.doWhile((()=>!0===s&&r>0),(()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next((t=>{if(null!==t&&!n.has(t))return Ya("IndexBackiller",`Processing collection: ${t}`),this.nt(e,t,r).next((e=>{r-=e,n.add(t)}));s=!1})))).next((()=>t-r))}nt(e,t,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next((r=>this.localStore.localDocuments.getNextDocuments(e,t,r,n).next((n=>{const s=n.changes;return this.localStore.indexManager.updateIndexEntries(e,s).next((()=>this.st(r,n))).next((n=>(Ya("IndexBackiller",`Updating offset: ${n}`),this.localStore.indexManager.updateCollectionGroup(e,t,n)))).next((()=>s.size))}))))}st(e,t){let n=e;return t.changes.forEach(((e,t)=>{const r=Oc(t);Mc(r,n)>0&&(n=r)})),new Rc(n.readTime,n.documentKey,Math.max(t.batchId,e.largestBatchId))}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.it(e),this.rt=e=>t.writeSequenceNumber(e))}it(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.rt&&this.rt(e),e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jc(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Zc(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function eu(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xc.ot=-1;class tu{constructor(e,t){this.comparator=e,this.root=t||ru.EMPTY}insert(e,t){return new tu(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ru.BLACK,null,null))}remove(e){return new tu(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ru.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new nu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new nu(this.root,e,this.comparator,!1)}getReverseIterator(){return new nu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new nu(this.root,e,this.comparator,!0)}}class nu{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,t&&r&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(0===s){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ru{constructor(e,t,n,r,s){this.key=e,this.value=t,this.color=null!=n?n:ru.RED,this.left=null!=r?r:ru.EMPTY,this.right=null!=s?s:ru.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,s){return new ru(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const s=n(e,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===s?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return ru.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return ru.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ru.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ru.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ec();if(this.right.isRed())throw ec();const e=this.left.check();if(e!==this.right.check())throw ec();return e+(this.isRed()?0:1)}}ru.EMPTY=null,ru.RED=!0,ru.BLACK=!1,ru.EMPTY=new class{constructor(){this.size=0}get key(){throw ec()}get value(){throw ec()}get color(){throw ec()}get left(){throw ec()}get right(){throw ec()}copy(e,t,n,r,s){return this}insert(e,t,n){return new ru(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class su{constructor(e){this.comparator=e,this.data=new tu(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new iu(this.data.getIterator())}getIteratorFrom(e){return new iu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof su))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new su(this.comparator);return t.data=e,t}}class iu{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function ou(e){return e.hasNext()?e.getNext():void 0}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{constructor(e){this.fields=e,e.sort(Tc.comparator)}static empty(){return new au([])}unionWith(e){let t=new su(Tc.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new au(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return vc(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cu(){return"undefined"!=typeof atob}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new uu(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new uu(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return yc(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}uu.EMPTY_BYTE_STRING=new uu("");const lu=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function hu(e){if(tc(!!e),"string"==typeof e){let t=0;const n=lu.exec(e);if(tc(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:du(e.seconds),nanos:du(e.nanos)}}function du(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function fu(e){return"string"==typeof e?uu.fromBase64String(e):uu.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pu(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function mu(e){const t=e.mapValue.fields.__previous_value__;return pu(t)?mu(t):t}function gu(e){const t=hu(e.mapValue.fields.__local_write_time__.timestampValue);return new bc(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(e,t,n,r,s,i,o,a){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=s,this.forceLongPolling=i,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class vu{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new vu("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof vu&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wu(e){return null==e}function bu(e){return 0===e&&1/e==-1/0}function Iu(e){return"number"==typeof e&&Number.isInteger(e)&&!bu(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _u={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Eu={nullValue:"NULL_VALUE"};function Su(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?pu(e)?4:Pu(e)?9007199254740991:10:ec()}function Tu(e,t){if(e===t)return!0;const n=Su(e);if(n!==Su(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return gu(e).isEqual(gu(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=hu(e.timestampValue),r=hu(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return fu(e.bytesValue).isEqual(fu(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return du(e.geoPointValue.latitude)===du(t.geoPointValue.latitude)&&du(e.geoPointValue.longitude)===du(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return du(e.integerValue)===du(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=du(e.doubleValue),r=du(t.doubleValue);return n===r?bu(n)===bu(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return vc(e.arrayValue.values||[],t.arrayValue.values||[],Tu);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(Jc(n)!==Jc(r))return!1;for(const s in n)if(n.hasOwnProperty(s)&&(void 0===r[s]||!Tu(n[s],r[s])))return!1;return!0}(e,t);default:return ec()}}function xu(e,t){return void 0!==(e.values||[]).find((e=>Tu(e,t)))}function Du(e,t){if(e===t)return 0;const n=Su(e),r=Su(t);if(n!==r)return yc(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return yc(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=du(e.integerValue||e.doubleValue),r=du(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return Cu(e.timestampValue,t.timestampValue);case 4:return Cu(gu(e),gu(t));case 5:return yc(e.stringValue,t.stringValue);case 6:return function(e,t){const n=fu(e),r=fu(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let s=0;s<n.length&&s<r.length;s++){const e=yc(n[s],r[s]);if(0!==e)return e}return yc(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=yc(du(e.latitude),du(t.latitude));return 0!==n?n:yc(du(e.longitude),du(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let s=0;s<n.length&&s<r.length;++s){const e=Du(n[s],r[s]);if(e)return e}return yc(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===_u.mapValue&&t===_u.mapValue)return 0;if(e===_u.mapValue)return 1;if(t===_u.mapValue)return-1;const n=e.fields||{},r=Object.keys(n),s=t.fields||{},i=Object.keys(s);r.sort(),i.sort();for(let o=0;o<r.length&&o<i.length;++o){const e=yc(r[o],i[o]);if(0!==e)return e;const t=Du(n[r[o]],s[i[o]]);if(0!==t)return t}return yc(r.length,i.length)}(e.mapValue,t.mapValue);default:throw ec()}}function Cu(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return yc(e,t);const n=hu(e),r=hu(t),s=yc(n.seconds,r.seconds);return 0!==s?s:yc(n.nanos,r.nanos)}function Au(e){return ku(e)}function ku(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=hu(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?fu(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,xc.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=ku(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const s of t)r?r=!1:n+=",",n+=`${s}:${ku(e.fields[s])}`;return n+"}"}(e.mapValue):ec();var t,n}function Nu(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function Lu(e){return!!e&&"integerValue"in e}function Ou(e){return!!e&&"arrayValue"in e}function Ru(e){return!!e&&"nullValue"in e}function Mu(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Fu(e){return!!e&&"mapValue"in e}function Vu(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Zc(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=Vu(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Vu(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Pu(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}function Bu(e){return"nullValue"in e?Eu:"booleanValue"in e?{booleanValue:!1}:"integerValue"in e||"doubleValue"in e?{doubleValue:NaN}:"timestampValue"in e?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in e?{stringValue:""}:"bytesValue"in e?{bytesValue:""}:"referenceValue"in e?Nu(vu.empty(),xc.empty()):"geoPointValue"in e?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in e?{arrayValue:{}}:"mapValue"in e?{mapValue:{}}:ec()}function Uu(e){return"nullValue"in e?{booleanValue:!1}:"booleanValue"in e?{doubleValue:NaN}:"integerValue"in e||"doubleValue"in e?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in e?{stringValue:""}:"stringValue"in e?{bytesValue:""}:"bytesValue"in e?Nu(vu.empty(),xc.empty()):"referenceValue"in e?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in e?{arrayValue:{}}:"arrayValue"in e?{mapValue:{}}:"mapValue"in e?_u:ec()}function ju(e,t){const n=Du(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?-1:!e.inclusive&&t.inclusive?1:0}function qu(e,t){const n=Du(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?1:!e.inclusive&&t.inclusive?-1:0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{constructor(e){this.value=e}static empty(){return new $u({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Fu(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Vu(t)}setAll(e){let t=Tc.emptyPath(),n={},r=[];e.forEach(((e,s)=>{if(!t.isImmediateParentOf(s)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=s.popLast()}e?n[s.lastSegment()]=Vu(e):r.push(s.lastSegment())}));const s=this.getFieldsMap(t);this.applyChanges(s,n,r)}delete(e){const t=this.field(e.popLast());Fu(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Tu(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];Fu(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){Zc(t,((t,n)=>e[t]=n));for(const r of n)delete e[r]}clone(){return new $u(Vu(this.value))}}function Ku(e){const t=[];return Zc(e.fields,((e,n)=>{const r=new Tc([e]);if(Fu(n)){const e=Ku(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)})),new au(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Gu{constructor(e,t,n,r,s,i){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.data=s,this.documentState=i}static newInvalidDocument(e){return new Gu(e,0,Ic.min(),Ic.min(),$u.empty(),0)}static newFoundDocument(e,t,n){return new Gu(e,1,t,Ic.min(),n,0)}static newNoDocument(e,t){return new Gu(e,2,t,Ic.min(),$u.empty(),0)}static newUnknownDocument(e,t){return new Gu(e,3,t,Ic.min(),$u.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=$u.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=$u.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ic.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof Gu&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Gu(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(e,t=null,n=[],r=[],s=null,i=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=s,this.startAt=i,this.endAt=o,this.ut=null}}function Wu(e,t=null,n=[],r=[],s=null,i=null,o=null){return new zu(e,t,n,r,s,i,o)}function Hu(e){const t=rc(e);if(null===t.ut){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>{return(t=e).field.canonicalString()+t.op.toString()+Au(t.value);var t})).join(","),e+="|ob:",e+=t.orderBy.map((e=>function(e){return e.field.canonicalString()+e.dir}(e))).join(","),wu(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>Au(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>Au(e))).join(",")),t.ut=e}return t.ut}function Qu(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>{return`${(t=e).field.canonicalString()} ${t.op} ${Au(t.value)}`;var t})).join(", ")}]`),wu(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e))).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>Au(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>Au(e))).join(",")),`Target(${t})`}function Yu(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let s=0;s<e.orderBy.length;s++)if(!dl(e.orderBy[s],t.orderBy[s]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let s=0;s<e.filters.length;s++)if(n=e.filters[s],r=t.filters[s],n.op!==r.op||!n.field.isEqual(r.field)||!Tu(n.value,r.value))return!1;var n,r;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!pl(e.startAt,t.startAt)&&pl(e.endAt,t.endAt)}function Xu(e){return xc.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}function Ju(e,t){return e.filters.filter((e=>e instanceof tl&&e.field.isEqual(t)))}function Zu(e,t,n){let r=Eu,s=!0;for(const i of Ju(e,t)){let e=Eu,t=!0;switch(i.op){case"<":case"<=":e=Bu(i.value);break;case"==":case"in":case">=":e=i.value;break;case">":e=i.value,t=!1;break;case"!=":case"not-in":e=Eu}ju({value:r,inclusive:s},{value:e,inclusive:t})<0&&(r=e,s=t)}if(null!==n)for(let i=0;i<e.orderBy.length;++i)if(e.orderBy[i].field.isEqual(t)){const e=n.position[i];ju({value:r,inclusive:s},{value:e,inclusive:n.inclusive})<0&&(r=e,s=n.inclusive);break}return{value:r,inclusive:s}}function el(e,t,n){let r=_u,s=!0;for(const i of Ju(e,t)){let e=_u,t=!0;switch(i.op){case">=":case">":e=Uu(i.value),t=!1;break;case"==":case"in":case"<=":e=i.value;break;case"<":e=i.value,t=!1;break;case"!=":case"not-in":e=_u}qu({value:r,inclusive:s},{value:e,inclusive:t})>0&&(r=e,s=t)}if(null!==n)for(let i=0;i<e.orderBy.length;++i)if(e.orderBy[i].field.isEqual(t)){const e=n.position[i];qu({value:r,inclusive:s},{value:e,inclusive:n.inclusive})>0&&(r=e,s=n.inclusive);break}return{value:r,inclusive:s}}class tl extends class{}{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.ct(e,t,n):new nl(e,t,n):"array-contains"===t?new ol(e,n):"in"===t?new al(e,n):"not-in"===t?new cl(e,n):"array-contains-any"===t?new ul(e,n):new tl(e,t,n)}static ct(e,t,n){return"in"===t?new rl(e,n):new sl(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.at(Du(t,this.value)):null!==t&&Su(this.value)===Su(t)&&this.at(Du(t,this.value))}at(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return ec()}}ht(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class nl extends tl{constructor(e,t,n){super(e,t,n),this.key=xc.fromName(n.referenceValue)}matches(e){const t=xc.comparator(e.key,this.key);return this.at(t)}}class rl extends tl{constructor(e,t){super(e,"in",t),this.keys=il("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class sl extends tl{constructor(e,t){super(e,"not-in",t),this.keys=il("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function il(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>xc.fromName(e.referenceValue)))}class ol extends tl{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ou(t)&&xu(t.arrayValue,this.value)}}class al extends tl{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&xu(this.value.arrayValue,t)}}class cl extends tl{constructor(e,t){super(e,"not-in",t)}matches(e){if(xu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!xu(this.value.arrayValue,t)}}class ul extends tl{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ou(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>xu(this.value.arrayValue,e)))}}class ll{constructor(e,t){this.position=e,this.inclusive=t}}class hl{constructor(e,t="asc"){this.field=e,this.dir=t}}function dl(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function fl(e,t,n){let r=0;for(let s=0;s<e.position.length;s++){const i=t[s],o=e.position[s];if(r=i.field.isKeyField()?xc.comparator(xc.fromName(o.referenceValue),n.key):Du(o,n.data.field(i.field)),"desc"===i.dir&&(r*=-1),0!==r)break}return r}function pl(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Tu(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(e,t=null,n=[],r=[],s=null,i="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=s,this.limitType=i,this.startAt=o,this.endAt=a,this.lt=null,this.ft=null,this.startAt,this.endAt}}function gl(e,t,n,r,s,i,o,a){return new ml(e,t,n,r,s,i,o,a)}function yl(e){return new ml(e)}function vl(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function wl(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function bl(e){for(const t of e.filters)if(t.ht())return t.field;return null}function Il(e){return null!==e.collectionGroup}function _l(e){const t=rc(e);if(null===t.lt){t.lt=[];const e=bl(t),n=wl(t);if(null!==e&&null===n)e.isKeyField()||t.lt.push(new hl(e)),t.lt.push(new hl(Tc.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.lt.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.lt.push(new hl(Tc.keyField(),e))}}}return t.lt}function El(e){const t=rc(e);if(!t.ft)if("F"===t.limitType)t.ft=Wu(t.path,t.collectionGroup,_l(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const s of _l(t)){const t="desc"===s.dir?"asc":"desc";e.push(new hl(s.field,t))}const n=t.endAt?new ll(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ll(t.startAt.position,t.startAt.inclusive):null;t.ft=Wu(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}return t.ft}function Sl(e,t,n){return new ml(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Tl(e,t){return Yu(El(e),El(t))&&e.limitType===t.limitType}function xl(e){return`${Hu(El(e))}|lt:${e.limitType}`}function Dl(e){return`Query(target=${Qu(El(e))}; limitType=${e.limitType})`}function Cl(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):xc.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of e.explicitOrderBy)if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,n){const r=fl(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,_l(e),t))&&!(e.endAt&&!function(e,t,n){const r=fl(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,_l(e),t))}(e,t)}function Al(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function kl(e){return(t,n)=>{let r=!1;for(const s of _l(e)){const e=Nl(s,t,n);if(0!==e)return e;r=r||s.field.isKeyField()}return 0}}function Nl(e,t,n){const r=e.field.isKeyField()?xc.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),s=n.data.field(e);return null!==r&&null!==s?Du(r,s):ec()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return ec()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ll(e,t){if(e.dt){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:bu(t)?"-0":t}}function Ol(e){return{integerValue:""+e}}function Rl(e,t){return Iu(t)?Ol(t):Ll(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{constructor(){this._=void 0}}function Fl(e,t,n){return e instanceof Bl?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof Ul?jl(e,t):e instanceof ql?$l(e,t):function(e,t){const n=Pl(e,t),r=Gl(n)+Gl(e._t);return Lu(n)&&Lu(e._t)?Ol(r):Ll(e.wt,r)}(e,t)}function Vl(e,t,n){return e instanceof Ul?jl(e,t):e instanceof ql?$l(e,t):n}function Pl(e,t){return e instanceof Kl?Lu(n=t)||function(e){return!!e&&"doubleValue"in e}(n)?t:{integerValue:0}:null;var n}class Bl extends Ml{}class Ul extends Ml{constructor(e){super(),this.elements=e}}function jl(e,t){const n=zl(t);for(const r of e.elements)n.some((e=>Tu(e,r)))||n.push(r);return{arrayValue:{values:n}}}class ql extends Ml{constructor(e){super(),this.elements=e}}function $l(e,t){let n=zl(t);for(const r of e.elements)n=n.filter((e=>!Tu(e,r)));return{arrayValue:{values:n}}}class Kl extends Ml{constructor(e,t){super(),this.wt=e,this._t=t}}function Gl(e){return du(e.integerValue||e.doubleValue)}function zl(e){return Ou(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(e,t){this.field=e,this.transform=t}}function Hl(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof Ul&&t instanceof Ul||e instanceof ql&&t instanceof ql?vc(e.elements,t.elements,Tu):e instanceof Kl&&t instanceof Kl?Tu(e._t,t._t):e instanceof Bl&&t instanceof Bl}(e.transform,t.transform)}class Ql{constructor(e,t){this.version=e,this.transformResults=t}}class Yl{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Yl}static exists(e){return new Yl(void 0,e)}static updateTime(e){return new Yl(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Xl(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class Jl{}function Zl(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new uh(e.key,Yl.none()):new sh(e.key,e.data,Yl.none());{const n=e.data,r=$u.empty();let s=new su(Tc.comparator);for(let e of t.fields)if(!s.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),s=s.add(e)}return new ih(e.key,r,new au(s.toArray()),Yl.none())}}function eh(e,t,n){e instanceof sh?function(e,t,n){const r=e.value.clone(),s=ah(e.fieldTransforms,t,n.transformResults);r.setAll(s),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof ih?function(e,t,n){if(!Xl(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=ah(e.fieldTransforms,t,n.transformResults),s=t.data;s.setAll(oh(e)),s.setAll(r),t.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function th(e,t,n,r){return e instanceof sh?function(e,t,n,r){if(!Xl(e.precondition,t))return n;const s=e.value.clone(),i=ch(e.fieldTransforms,r,t);return s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null}(e,t,n,r):e instanceof ih?function(e,t,n,r){if(!Xl(e.precondition,t))return n;const s=ch(e.fieldTransforms,r,t),i=t.data;return i.setAll(oh(e)),i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,n,r):function(e,t,n){return Xl(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}(e,t,n)}function nh(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),s=Pl(r.transform,e||null);null!=s&&(null===n&&(n=$u.empty()),n.set(r.field,s))}return n||null}function rh(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&vc(e,t,((e,t)=>Hl(e,t)))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class sh extends Jl{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class ih extends Jl{constructor(e,t,n,r,s=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function oh(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}})),t}function ah(e,t,n){const r=new Map;tc(e.length===n.length);for(let s=0;s<n.length;s++){const i=e[s],o=i.transform,a=t.data.field(i.field);r.set(i.field,Vl(o,a,n[s]))}return r}function ch(e,t,n){const r=new Map;for(const s of e){const e=s.transform,i=n.data.field(s.field);r.set(s.field,Fl(e,i,t))}return r}class uh extends Jl{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class lh extends Jl{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(e){this.count=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var dh,fh;function ph(e){switch(e){default:return ec();case sc.CANCELLED:case sc.UNKNOWN:case sc.DEADLINE_EXCEEDED:case sc.RESOURCE_EXHAUSTED:case sc.INTERNAL:case sc.UNAVAILABLE:case sc.UNAUTHENTICATED:return!1;case sc.INVALID_ARGUMENT:case sc.NOT_FOUND:case sc.ALREADY_EXISTS:case sc.PERMISSION_DENIED:case sc.FAILED_PRECONDITION:case sc.ABORTED:case sc.OUT_OF_RANGE:case sc.UNIMPLEMENTED:case sc.DATA_LOSS:return!0}}function mh(e){if(void 0===e)return Xa("GRPC error has no .code"),sc.UNKNOWN;switch(e){case dh.OK:return sc.OK;case dh.CANCELLED:return sc.CANCELLED;case dh.UNKNOWN:return sc.UNKNOWN;case dh.DEADLINE_EXCEEDED:return sc.DEADLINE_EXCEEDED;case dh.RESOURCE_EXHAUSTED:return sc.RESOURCE_EXHAUSTED;case dh.INTERNAL:return sc.INTERNAL;case dh.UNAVAILABLE:return sc.UNAVAILABLE;case dh.UNAUTHENTICATED:return sc.UNAUTHENTICATED;case dh.INVALID_ARGUMENT:return sc.INVALID_ARGUMENT;case dh.NOT_FOUND:return sc.NOT_FOUND;case dh.ALREADY_EXISTS:return sc.ALREADY_EXISTS;case dh.PERMISSION_DENIED:return sc.PERMISSION_DENIED;case dh.FAILED_PRECONDITION:return sc.FAILED_PRECONDITION;case dh.ABORTED:return sc.ABORTED;case dh.OUT_OF_RANGE:return sc.OUT_OF_RANGE;case dh.UNIMPLEMENTED:return sc.UNIMPLEMENTED;case dh.DATA_LOSS:return sc.DATA_LOSS;default:return ec()}}(fh=dh||(dh={}))[fh.OK=0]="OK",fh[fh.CANCELLED=1]="CANCELLED",fh[fh.UNKNOWN=2]="UNKNOWN",fh[fh.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",fh[fh.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",fh[fh.NOT_FOUND=5]="NOT_FOUND",fh[fh.ALREADY_EXISTS=6]="ALREADY_EXISTS",fh[fh.PERMISSION_DENIED=7]="PERMISSION_DENIED",fh[fh.UNAUTHENTICATED=16]="UNAUTHENTICATED",fh[fh.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",fh[fh.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",fh[fh.ABORTED=10]="ABORTED",fh[fh.OUT_OF_RANGE=11]="OUT_OF_RANGE",fh[fh.UNIMPLEMENTED=12]="UNIMPLEMENTED",fh[fh.INTERNAL=13]="INTERNAL",fh[fh.UNAVAILABLE=14]="UNAVAILABLE",fh[fh.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gh{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[r,s]of n)if(this.equalsFn(r,e))return s}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return void(r[s]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Zc(this.inner,((t,n)=>{for(const[r,s]of n)e(r,s)}))}isEmpty(){return eu(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yh=new tu(xc.comparator);function vh(){return yh}const wh=new tu(xc.comparator);function bh(...e){let t=wh;for(const n of e)t=t.insert(n.key,n);return t}function Ih(e){let t=wh;return e.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function _h(){return Sh()}function Eh(){return Sh()}function Sh(){return new gh((e=>e.toString()),((e,t)=>e.isEqual(t)))}const Th=new tu(xc.comparator),xh=new su(xc.comparator);function Dh(...e){let t=xh;for(const n of e)t=t.add(n);return t}const Ch=new su(yc);function Ah(){return Ch}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh{constructor(e,t,n,r,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t){const n=new Map;return n.set(e,Nh.createSynthesizedTargetChangeForCurrentChange(e,t)),new kh(Ic.min(),n,Ah(),vh(),Dh())}}class Nh{constructor(e,t,n,r,s){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t){return new Nh(uu.EMPTY_BYTE_STRING,t,Dh(),Dh(),Dh())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh{constructor(e,t,n,r){this.gt=e,this.removedTargetIds=t,this.key=n,this.yt=r}}class Oh{constructor(e,t){this.targetId=e,this.It=t}}class Rh{constructor(e,t,n=uu.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class Mh{constructor(){this.Tt=0,this.Et=Ph(),this.At=uu.EMPTY_BYTE_STRING,this.Rt=!1,this.bt=!0}get current(){return this.Rt}get resumeToken(){return this.At}get Pt(){return 0!==this.Tt}get vt(){return this.bt}Vt(e){e.approximateByteSize()>0&&(this.bt=!0,this.At=e)}St(){let e=Dh(),t=Dh(),n=Dh();return this.Et.forEach(((r,s)=>{switch(s){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:ec()}})),new Nh(this.At,this.Rt,e,t,n)}Dt(){this.bt=!1,this.Et=Ph()}Ct(e,t){this.bt=!0,this.Et=this.Et.insert(e,t)}xt(e){this.bt=!0,this.Et=this.Et.remove(e)}Nt(){this.Tt+=1}kt(){this.Tt-=1}Mt(){this.bt=!0,this.Rt=!0}}class Fh{constructor(e){this.Ot=e,this.Ft=new Map,this.$t=vh(),this.Bt=Vh(),this.Lt=new su(yc)}Ut(e){for(const t of e.gt)e.yt&&e.yt.isFoundDocument()?this.qt(t,e.yt):this.Kt(t,e.key,e.yt);for(const t of e.removedTargetIds)this.Kt(t,e.key,e.yt)}Gt(e){this.forEachTarget(e,(t=>{const n=this.Qt(t);switch(e.state){case 0:this.jt(t)&&n.Vt(e.resumeToken);break;case 1:n.kt(),n.Pt||n.Dt(),n.Vt(e.resumeToken);break;case 2:n.kt(),n.Pt||this.removeTarget(t);break;case 3:this.jt(t)&&(n.Mt(),n.Vt(e.resumeToken));break;case 4:this.jt(t)&&(this.Wt(t),n.Vt(e.resumeToken));break;default:ec()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ft.forEach(((e,n)=>{this.jt(n)&&t(n)}))}zt(e){const t=e.targetId,n=e.It.count,r=this.Ht(t);if(r){const e=r.target;if(Xu(e))if(0===n){const n=new xc(e.path);this.Kt(t,n,Gu.newNoDocument(n,Ic.min()))}else tc(1===n);else this.Jt(t)!==n&&(this.Wt(t),this.Lt=this.Lt.add(t))}}Yt(e){const t=new Map;this.Ft.forEach(((n,r)=>{const s=this.Ht(r);if(s){if(n.current&&Xu(s.target)){const t=new xc(s.target.path);null!==this.$t.get(t)||this.Xt(r,t)||this.Kt(r,t,Gu.newNoDocument(t,e))}n.vt&&(t.set(r,n.St()),n.Dt())}}));let n=Dh();this.Bt.forEach(((e,t)=>{let r=!0;t.forEachWhile((e=>{const t=this.Ht(e);return!t||2===t.purpose||(r=!1,!1)})),r&&(n=n.add(e))})),this.$t.forEach(((t,n)=>n.setReadTime(e)));const r=new kh(e,t,this.Lt,this.$t,n);return this.$t=vh(),this.Bt=Vh(),this.Lt=new su(yc),r}qt(e,t){if(!this.jt(e))return;const n=this.Xt(e,t.key)?2:0;this.Qt(e).Ct(t.key,n),this.$t=this.$t.insert(t.key,t),this.Bt=this.Bt.insert(t.key,this.Zt(t.key).add(e))}Kt(e,t,n){if(!this.jt(e))return;const r=this.Qt(e);this.Xt(e,t)?r.Ct(t,1):r.xt(t),this.Bt=this.Bt.insert(t,this.Zt(t).delete(e)),n&&(this.$t=this.$t.insert(t,n))}removeTarget(e){this.Ft.delete(e)}Jt(e){const t=this.Qt(e).St();return this.Ot.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Nt(e){this.Qt(e).Nt()}Qt(e){let t=this.Ft.get(e);return t||(t=new Mh,this.Ft.set(e,t)),t}Zt(e){let t=this.Bt.get(e);return t||(t=new su(yc),this.Bt=this.Bt.insert(e,t)),t}jt(e){const t=null!==this.Ht(e);return t||Ya("WatchChangeAggregator","Detected inactive target",e),t}Ht(e){const t=this.Ft.get(e);return t&&t.Pt?null:this.Ot.te(e)}Wt(e){this.Ft.set(e,new Mh),this.Ot.getRemoteKeysForTarget(e).forEach((t=>{this.Kt(e,t,null)}))}Xt(e,t){return this.Ot.getRemoteKeysForTarget(e).has(t)}}function Vh(){return new tu(xc.comparator)}function Ph(){return new tu(xc.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bh=(()=>{const e={asc:"ASCENDING",desc:"DESCENDING"};return e})(),Uh=(()=>{const e={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return e})();class jh{constructor(e,t){this.databaseId=e,this.dt=t}}function qh(e,t){return e.dt?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function $h(e,t){return e.dt?t.toBase64():t.toUint8Array()}function Kh(e,t){return qh(e,t.toTimestamp())}function Gh(e){return tc(!!e),Ic.fromTimestamp(function(e){const t=hu(e);return new bc(t.seconds,t.nanos)}(e))}function zh(e,t){return function(e){return new Ec(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function Wh(e){const t=Ec.fromString(e);return tc(wd(t)),t}function Hh(e,t){return zh(e.databaseId,t.path)}function Qh(e,t){const n=Wh(t);if(n.get(1)!==e.databaseId.projectId)throw new ic(sc.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new ic(sc.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new xc(Zh(n))}function Yh(e,t){return zh(e.databaseId,t)}function Xh(e){const t=Wh(e);return 4===t.length?Ec.emptyPath():Zh(t)}function Jh(e){return new Ec(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Zh(e){return tc(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function ed(e,t,n){return{name:Hh(e,t),fields:n.value.mapValue.fields}}function td(e,t,n){const r=Qh(e,t.name),s=Gh(t.updateTime),i=new $u({mapValue:{fields:t.fields}}),o=Gu.newFoundDocument(r,s,i);return n&&o.setHasCommittedMutations(),n?o.setHasCommittedMutations():o}function nd(e,t){return"found"in t?function(e,t){tc(!!t.found),t.found.name,t.found.updateTime;const n=Qh(e,t.found.name),r=Gh(t.found.updateTime),s=new $u({mapValue:{fields:t.found.fields}});return Gu.newFoundDocument(n,r,s)}(e,t):"missing"in t?function(e,t){tc(!!t.missing),tc(!!t.readTime);const n=Qh(e,t.missing),r=Gh(t.readTime);return Gu.newNoDocument(n,r)}(e,t):ec()}function rd(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:ec()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=function(e,t){return e.dt?(tc(void 0===t||"string"==typeof t),uu.fromBase64String(t||"")):(tc(void 0===t||t instanceof Uint8Array),uu.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(e){const t=void 0===e.code?sc.UNKNOWN:mh(e.code);return new ic(t,e.message||"")}(o);n=new Rh(r,s,i,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=Qh(e,r.document.name),i=Gh(r.document.updateTime),o=new $u({mapValue:{fields:r.document.fields}}),a=Gu.newFoundDocument(s,i,o),c=r.targetIds||[],u=r.removedTargetIds||[];n=new Lh(c,u,a.key,a)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=Qh(e,r.document),i=r.readTime?Gh(r.readTime):Ic.min(),o=Gu.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Lh([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=Qh(e,r.document),i=r.removedTargetIds||[];n=new Lh([],i,s,null)}else{if(!("filter"in t))return ec();{t.filter;const e=t.filter;e.targetId;const r=e.count||0,s=new hh(r),i=e.targetId;n=new Oh(i,s)}}return n}function sd(e,t){let n;if(t instanceof sh)n={update:ed(e,t.key,t.value)};else if(t instanceof uh)n={delete:Hh(e,t.key)};else if(t instanceof ih)n={update:ed(e,t.key,t.data),updateMask:vd(t.fieldMask)};else{if(!(t instanceof lh))return ec();n={verify:Hh(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof Bl)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Ul)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof ql)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Kl)return{fieldPath:t.field.canonicalString(),increment:n._t};throw ec()}(0,e)))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:Kh(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:ec()}(e,t.precondition)),n}function id(e,t){const n=t.currentDocument?function(e){return void 0!==e.updateTime?Yl.updateTime(Gh(e.updateTime)):void 0!==e.exists?Yl.exists(e.exists):Yl.none()}(t.currentDocument):Yl.none(),r=t.updateTransforms?t.updateTransforms.map((t=>function(e,t){let n=null;if("setToServerValue"in t)tc("REQUEST_TIME"===t.setToServerValue),n=new Bl;else if("appendMissingElements"in t){const e=t.appendMissingElements.values||[];n=new Ul(e)}else if("removeAllFromArray"in t){const e=t.removeAllFromArray.values||[];n=new ql(e)}else"increment"in t?n=new Kl(e,t.increment):ec();const r=Tc.fromServerFormat(t.fieldPath);return new Wl(r,n)}(e,t))):[];if(t.update){t.update.name;const s=Qh(e,t.update.name),i=new $u({mapValue:{fields:t.update.fields}});if(t.updateMask){const e=function(e){const t=e.fieldPaths||[];return new au(t.map((e=>Tc.fromServerFormat(e))))}(t.updateMask);return new ih(s,i,e,n,r)}return new sh(s,i,n,r)}if(t.delete){const r=Qh(e,t.delete);return new uh(r,n)}if(t.verify){const r=Qh(e,t.verify);return new lh(r,n)}return ec()}function od(e,t){return e&&e.length>0?(tc(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?Gh(e.updateTime):Gh(t);return n.isEqual(Ic.min())&&(n=Gh(t)),new Ql(n,e.transformResults||[])}(e,t)))):[]}function ad(e,t){return{documents:[Yh(e,t.path)]}}function cd(e,t){const n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=Yh(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Yh(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(e){if(0===e.length)return;const t=e.map((e=>function(e){if("=="===e.op){if(Mu(e.value))return{unaryFilter:{field:pd(e.field),op:"IS_NAN"}};if(Ru(e.value))return{unaryFilter:{field:pd(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(Mu(e.value))return{unaryFilter:{field:pd(e.field),op:"IS_NOT_NAN"}};if(Ru(e.value))return{unaryFilter:{field:pd(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:pd(e.field),op:fd(e.op),value:e.value}}}(e)));return 1===t.length?t[0]:{compositeFilter:{op:"AND",filters:t}}}(t.filters);s&&(n.structuredQuery.where=s);const i=function(e){if(0!==e.length)return e.map((e=>function(e){return{field:pd(e.field),direction:dd(e.dir)}}(e)))}(t.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(e,t){return e.dt||wu(t)?t:{value:t}}(e,t.limit);var a;return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),n}function ud(e){let t=Xh(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){tc(1===r);const e=n.from[0];e.allDescendants?s=e.collectionId:t=t.child(e.collectionId)}let i=[];n.where&&(i=hd(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((e=>function(e){return new hl(md(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e))));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,wu(t)?null:t}(n.limit));let c=null;n.startAt&&(c=function(e){const t=!!e.before,n=e.values||[];return new ll(n,t)}(n.startAt));let u=null;return n.endAt&&(u=function(e){const t=!e.before,n=e.values||[];return new ll(n,t)}(n.endAt)),gl(t,s,o,i,a,"F",c,u)}function ld(e,t){const n=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return ec()}}(0,t.purpose);return null==n?null:{"goog-listen-tags":n}}function hd(e){return e?void 0!==e.unaryFilter?[yd(e)]:void 0!==e.fieldFilter?[gd(e)]:void 0!==e.compositeFilter?e.compositeFilter.filters.map((e=>hd(e))).reduce(((e,t)=>e.concat(t))):ec():[]}function dd(e){return Bh[e]}function fd(e){return Uh[e]}function pd(e){return{fieldPath:e.canonicalString()}}function md(e){return Tc.fromServerFormat(e.fieldPath)}function gd(e){return tl.create(md(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ec()}}(e.fieldFilter.op),e.fieldFilter.value)}function yd(e){switch(e.unaryFilter.op){case"IS_NAN":const t=md(e.unaryFilter.field);return tl.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=md(e.unaryFilter.field);return tl.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=md(e.unaryFilter.field);return tl.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=md(e.unaryFilter.field);return tl.create(s,"!=",{nullValue:"NULL_VALUE"});default:return ec()}}function vd(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function wd(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bd(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=_d(t)),t=Id(e.get(n),t);return _d(t)}function Id(e,t){let n=t;const r=e.length;for(let s=0;s<r;s++){const t=e.charAt(s);switch(t){case"\0":n+="";break;case"":n+="";break;default:n+=t}}return n}function _d(e){return e+""}function Ed(e){const t=e.length;if(tc(t>=2),2===t)return tc(""===e.charAt(0)&&""===e.charAt(1)),Ec.emptyPath();const n=t-2,r=[];let s="";for(let i=0;i<t;){const t=e.indexOf("",i);switch((t<0||t>n)&&ec(),e.charAt(t+1)){case"":const n=e.substring(i,t);let o;0===s.length?o=n:(s+=n,o=s,s=""),r.push(o);break;case"":s+=e.substring(i,t),s+="\0";break;case"":s+=e.substring(i,t+1);break;default:ec()}i=t+2}return new Ec(r)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sd=["userId","batchId"];
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Td(e,t){return[e,bd(t)]}function xd(e,t,n){return[e,bd(t),n]}const Dd={},Cd=["prefixPath","collectionGroup","readTime","documentId"],Ad=["prefixPath","collectionGroup","documentId"],kd=["collectionGroup","readTime","prefixPath","documentId"],Nd=["canonicalId","targetId"],Ld=["targetId","path"],Od=["path","targetId"],Rd=["collectionId","parent"],Md=["indexId","uid"],Fd=["uid","sequenceNumber"],Vd=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],Pd=["indexId","uid","orderedDocumentKey"],Bd=["userId","collectionPath","documentId"],Ud=["userId","collectionPath","largestBatchId"],jd=["userId","collectionGroup","largestBatchId"],qd=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],$d=[...qd,"documentOverlays"],Kd=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Gd=Kd,zd=[...Gd,"indexConfiguration","indexState","indexEntries"];
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd extends Vc{constructor(e,t){super(),this.ee=e,this.currentSequenceNumber=t}}function Hd(e,t){const n=rc(e);return jc.N(n.ee,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const t=this.mutations[r];t.key.isEqual(e.key)&&eh(t,e,n[r])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=th(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=th(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Eh();return this.mutations.forEach((r=>{const s=e.get(r.key),i=s.overlayedDocument;let o=this.applyToLocalView(i,s.mutatedFields);o=t.has(r.key)?null:o;const a=Zl(i,o);null!==a&&n.set(r.key,a),i.isValidDocument()||i.convertToNoDocument(Ic.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Dh())}isEqual(e){return this.batchId===e.batchId&&vc(this.mutations,e.mutations,((e,t)=>rh(e,t)))&&vc(this.baseMutations,e.baseMutations,((e,t)=>rh(e,t)))}}class Yd{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){tc(e.mutations.length===n.length);let r=Th;const s=e.mutations;for(let i=0;i<s.length;i++)r=r.insert(s[i].key,n[i].version);return new Yd(e,t,n,r)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(e,t,n,r,s=Ic.min(),i=Ic.min(),o=uu.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=i,this.resumeToken=o}withSequenceNumber(e){return new Jd(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new Jd(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Jd(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(e){this.ne=e}}function ef(e,t){let n;if(t.document)n=td(e.ne,t.document,!!t.hasCommittedMutations);else if(t.noDocument){const e=xc.fromSegments(t.noDocument.path),r=sf(t.noDocument.readTime);n=Gu.newNoDocument(e,r),t.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!t.unknownDocument)return ec();{const e=xc.fromSegments(t.unknownDocument.path),r=sf(t.unknownDocument.version);n=Gu.newUnknownDocument(e,r)}}return t.readTime&&n.setReadTime(function(e){const t=new bc(e[0],e[1]);return Ic.fromTimestamp(t)}(t.readTime)),n}function tf(e,t){const n=t.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:nf(t.readTime),hasCommittedMutations:t.hasCommittedMutations};if(t.isFoundDocument())r.document=function(e,t){return{name:Hh(e,t.key),fields:t.data.value.mapValue.fields,updateTime:qh(e,t.version.toTimestamp())}}(e.ne,t);else if(t.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:rf(t.version)};else{if(!t.isUnknownDocument())return ec();r.unknownDocument={path:n.path.toArray(),version:rf(t.version)}}return r}function nf(e){const t=e.toTimestamp();return[t.seconds,t.nanoseconds]}function rf(e){const t=e.toTimestamp();return{seconds:t.seconds,nanoseconds:t.nanoseconds}}function sf(e){const t=new bc(e.seconds,e.nanoseconds);return Ic.fromTimestamp(t)}function of(e,t){const n=(t.baseMutations||[]).map((t=>id(e.ne,t)));for(let i=0;i<t.mutations.length-1;++i){const e=t.mutations[i];if(i+1<t.mutations.length&&void 0!==t.mutations[i+1].transform){const n=t.mutations[i+1];e.updateTransforms=n.transform.fieldTransforms,t.mutations.splice(i+1,1),++i}}const r=t.mutations.map((t=>id(e.ne,t))),s=bc.fromMillis(t.localWriteTimeMs);return new Qd(t.batchId,s,n,r)}function af(e){const t=sf(e.readTime),n=void 0!==e.lastLimboFreeSnapshotVersion?sf(e.lastLimboFreeSnapshotVersion):Ic.min();let r;var s;return void 0!==e.query.documents?(tc(1===(s=e.query).documents.length),r=El(yl(Xh(s.documents[0])))):r=function(e){return El(ud(e))}(e.query),new Jd(r,e.targetId,0,e.lastListenSequenceNumber,t,n,uu.fromBase64String(e.resumeToken))}function cf(e,t){const n=rf(t.snapshotVersion),r=rf(t.lastLimboFreeSnapshotVersion);let s;s=Xu(t.target)?ad(e.ne,t.target):cd(e.ne,t.target);const i=t.resumeToken.toBase64();return{targetId:t.targetId,canonicalId:Hu(t.target),readTime:n,resumeToken:i,lastListenSequenceNumber:t.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:s}}function uf(e){const t=ud({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?Sl(t,t.limit,"L"):t}function lf(e,t){return new Xd(t.largestBatchId,id(e.ne,t.overlayMutation))}function hf(e,t){const n=t.path.lastSegment();return[e,bd(t.path.popLast()),n]}function df(e,t,n,r){return{indexId:e,uid:t.uid||"",sequenceNumber:n,readTime:rf(r.readTime),documentKey:bd(r.documentKey.path),largestBatchId:r.largestBatchId}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{getBundleMetadata(e,t){return pf(e).get(t).next((e=>{if(e)return{id:(t=e).bundleId,createTime:sf(t.createTime),version:t.version};var t}))}saveBundleMetadata(e,t){return pf(e).put({bundleId:(n=t).id,createTime:rf(Gh(n.createTime)),version:n.version});var n}getNamedQuery(e,t){return mf(e).get(t).next((e=>{if(e)return{name:(t=e).name,query:uf(t.bundledQuery),readTime:sf(t.readTime)};var t}))}saveNamedQuery(e,t){return mf(e).put(function(e){return{name:e.name,readTime:rf(Gh(e.readTime)),bundledQuery:e.bundledQuery}}(t))}}function pf(e){return Hd(e,"bundles")}function mf(e){return Hd(e,"namedQueries")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(e,t){this.wt=e,this.userId=t}static se(e,t){const n=t.uid||"";return new gf(e,n)}getOverlay(e,t){return yf(e).get(hf(this.userId,t)).next((e=>e?lf(this.wt,e):null))}getOverlays(e,t){const n=_h();return Bc.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){const r=[];return n.forEach(((n,s)=>{const i=new Xd(t,s);r.push(this.ie(e,i))})),Bc.waitFor(r)}removeOverlaysForBatchId(e,t,n){const r=new Set;t.forEach((e=>r.add(bd(e.getCollectionPath()))));const s=[];return r.forEach((t=>{const r=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,n+1],!1,!0);s.push(yf(e).W("collectionPathOverlayIndex",r))})),Bc.waitFor(s)}getOverlaysForCollection(e,t,n){const r=_h(),s=bd(t),i=IDBKeyRange.bound([this.userId,s,n],[this.userId,s,Number.POSITIVE_INFINITY],!0);return yf(e).K("collectionPathOverlayIndex",i).next((e=>{for(const t of e){const e=lf(this.wt,t);r.set(e.getKey(),e)}return r}))}getOverlaysForCollectionGroup(e,t,n,r){const s=_h();let i;const o=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return yf(e).J({index:"collectionGroupOverlayIndex",range:o},((e,t,n)=>{const o=lf(this.wt,t);s.size()<r||o.largestBatchId===i?(s.set(o.getKey(),o),i=o.largestBatchId):n.done()})).next((()=>s))}ie(e,t){return yf(e).put(function(e,t,n){const[r,s,i]=hf(t,n.mutation.key);return{userId:t,collectionPath:s,documentId:i,collectionGroup:n.mutation.key.getCollectionGroup(),largestBatchId:n.largestBatchId,overlayMutation:sd(e.ne,n.mutation)}}(this.wt,this.userId,t))}}function yf(e){return Hd(e,"documentOverlays")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf{constructor(){}re(e,t){this.oe(e,t),t.ue()}oe(e,t){if("nullValue"in e)this.ce(t,5);else if("booleanValue"in e)this.ce(t,10),t.ae(e.booleanValue?1:0);else if("integerValue"in e)this.ce(t,15),t.ae(du(e.integerValue));else if("doubleValue"in e){const n=du(e.doubleValue);isNaN(n)?this.ce(t,13):(this.ce(t,15),bu(n)?t.ae(0):t.ae(n))}else if("timestampValue"in e){const n=e.timestampValue;this.ce(t,20),"string"==typeof n?t.he(n):(t.he(`${n.seconds||""}`),t.ae(n.nanos||0))}else if("stringValue"in e)this.le(e.stringValue,t),this.fe(t);else if("bytesValue"in e)this.ce(t,30),t.de(fu(e.bytesValue)),this.fe(t);else if("referenceValue"in e)this._e(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.ce(t,45),t.ae(n.latitude||0),t.ae(n.longitude||0)}else"mapValue"in e?Pu(e)?this.ce(t,Number.MAX_SAFE_INTEGER):(this.we(e.mapValue,t),this.fe(t)):"arrayValue"in e?(this.me(e.arrayValue,t),this.fe(t)):ec()}le(e,t){this.ce(t,25),this.ge(e,t)}ge(e,t){t.he(e)}we(e,t){const n=e.fields||{};this.ce(t,55);for(const r of Object.keys(n))this.le(r,t),this.oe(n[r],t)}me(e,t){const n=e.values||[];this.ce(t,50);for(const r of n)this.oe(r,t)}_e(e,t){this.ce(t,37),xc.fromName(e).path.forEach((e=>{this.ce(t,60),this.ge(e,t)}))}ce(e,t){e.ae(t)}fe(e){e.ae(2)}}function wf(e){if(0===e)return 8;let t=0;return e>>4==0&&(t+=4,e<<=4),e>>6==0&&(t+=2,e<<=2),e>>7==0&&(t+=1),t}function bf(e){const t=64-function(e){let t=0;for(let n=0;n<8;++n){const r=wf(255&e[n]);if(t+=r,8!==r)break}return t}(e);return Math.ceil(t/8)}vf.ye=new vf;class If{constructor(){this.buffer=new Uint8Array(1024),this.position=0}pe(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Ie(n.value),n=t.next();this.Te()}Ee(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Ae(n.value),n=t.next();this.Re()}be(e){for(const t of e){const e=t.charCodeAt(0);if(e<128)this.Ie(e);else if(e<2048)this.Ie(960|e>>>6),this.Ie(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.Ie(480|e>>>12),this.Ie(128|63&e>>>6),this.Ie(128|63&e);else{const e=t.codePointAt(0);this.Ie(240|e>>>18),this.Ie(128|63&e>>>12),this.Ie(128|63&e>>>6),this.Ie(128|63&e)}}this.Te()}Pe(e){for(const t of e){const e=t.charCodeAt(0);if(e<128)this.Ae(e);else if(e<2048)this.Ae(960|e>>>6),this.Ae(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.Ae(480|e>>>12),this.Ae(128|63&e>>>6),this.Ae(128|63&e);else{const e=t.codePointAt(0);this.Ae(240|e>>>18),this.Ae(128|63&e>>>12),this.Ae(128|63&e>>>6),this.Ae(128|63&e)}}this.Re()}ve(e){const t=this.Ve(e),n=bf(t);this.Se(1+n),this.buffer[this.position++]=255&n;for(let r=t.length-n;r<t.length;++r)this.buffer[this.position++]=255&t[r]}De(e){const t=this.Ve(e),n=bf(t);this.Se(1+n),this.buffer[this.position++]=~(255&n);for(let r=t.length-n;r<t.length;++r)this.buffer[this.position++]=~(255&t[r])}Ce(){this.xe(255),this.xe(255)}Ne(){this.ke(255),this.ke(255)}reset(){this.position=0}seed(e){this.Se(e.length),this.buffer.set(e,this.position),this.position+=e.length}Me(){return this.buffer.slice(0,this.position)}Ve(e){const t=function(e){const t=new DataView(new ArrayBuffer(8));return t.setFloat64(0,e,!1),new Uint8Array(t.buffer)}(e),n=0!=(128&t[0]);t[0]^=n?255:128;for(let r=1;r<t.length;++r)t[r]^=n?255:0;return t}Ie(e){const t=255&e;0===t?(this.xe(0),this.xe(255)):255===t?(this.xe(255),this.xe(0)):this.xe(t)}Ae(e){const t=255&e;0===t?(this.ke(0),this.ke(255)):255===t?(this.ke(255),this.ke(0)):this.ke(e)}Te(){this.xe(0),this.xe(1)}Re(){this.ke(0),this.ke(1)}xe(e){this.Se(1),this.buffer[this.position++]=e}ke(e){this.Se(1),this.buffer[this.position++]=~e}Se(e){const t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);const r=new Uint8Array(n);r.set(this.buffer),this.buffer=r}}class _f{constructor(e){this.Oe=e}de(e){this.Oe.pe(e)}he(e){this.Oe.be(e)}ae(e){this.Oe.ve(e)}ue(){this.Oe.Ce()}}class Ef{constructor(e){this.Oe=e}de(e){this.Oe.Ee(e)}he(e){this.Oe.Pe(e)}ae(e){this.Oe.De(e)}ue(){this.Oe.Ne()}}class Sf{constructor(){this.Oe=new If,this.Fe=new _f(this.Oe),this.$e=new Ef(this.Oe)}seed(e){this.Oe.seed(e)}Be(e){return 0===e?this.Fe:this.$e}Me(){return this.Oe.Me()}reset(){this.Oe.reset()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{constructor(e,t,n,r){this.indexId=e,this.documentKey=t,this.arrayValue=n,this.directionalValue=r}Le(){const e=this.directionalValue.length,t=0===e||255===this.directionalValue[e-1]?e+1:e,n=new Uint8Array(t);return n.set(this.directionalValue,0),t!==e?n.set([0],this.directionalValue.length):++n[n.length-1],new Tf(this.indexId,this.documentKey,this.arrayValue,n)}}function xf(e,t){let n=e.indexId-t.indexId;return 0!==n?n:(n=Df(e.arrayValue,t.arrayValue),0!==n?n:(n=Df(e.directionalValue,t.directionalValue),0!==n?n:xc.comparator(e.documentKey,t.documentKey)))}function Df(e,t){for(let n=0;n<e.length&&n<t.length;++n){const r=e[n]-t[n];if(0!==r)return r}return e.length-t.length}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf{constructor(e){this.collectionId=null!=e.collectionGroup?e.collectionGroup:e.path.lastSegment(),this.Ue=e.orderBy,this.qe=[];for(const t of e.filters){const e=t;e.ht()?this.Ke=e:this.qe.push(e)}}Ge(e){const t=Cc(e);if(void 0!==t&&!this.Qe(t))return!1;const n=Ac(e);let r=0,s=0;for(;r<n.length&&this.Qe(n[r]);++r);if(r===n.length)return!0;if(void 0!==this.Ke){const e=n[r];if(!this.je(this.Ke,e)||!this.We(this.Ue[s++],e))return!1;++r}for(;r<n.length;++r){const e=n[r];if(s>=this.Ue.length||!this.We(this.Ue[s++],e))return!1}return!0}Qe(e){for(const t of this.qe)if(this.je(t,e))return!0;return!1}je(e,t){if(void 0===e||!e.field.isEqual(t.fieldPath))return!1;const n="array-contains"===e.op||"array-contains-any"===e.op;return 2===t.kind===n}We(e,t){return!!e.field.isEqual(t.fieldPath)&&(0===t.kind&&"asc"===e.dir||1===t.kind&&"desc"===e.dir)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Af{constructor(){this.ze=new kf}addToCollectionParentIndex(e,t){return this.ze.add(t),Bc.resolve()}getCollectionParents(e,t){return Bc.resolve(this.ze.getEntries(t))}addFieldIndex(e,t){return Bc.resolve()}deleteFieldIndex(e,t){return Bc.resolve()}getDocumentsMatchingTarget(e,t){return Bc.resolve(null)}getIndexType(e,t){return Bc.resolve(0)}getFieldIndexes(e,t){return Bc.resolve([])}getNextCollectionGroupToUpdate(e){return Bc.resolve(null)}getMinOffset(e,t){return Bc.resolve(Rc.min())}getMinOffsetFromCollectionGroup(e,t){return Bc.resolve(Rc.min())}updateCollectionGroup(e,t,n){return Bc.resolve()}updateIndexEntries(e,t){return Bc.resolve()}}class kf{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new su(Ec.comparator),s=!r.has(n);return this.index[t]=r.add(n),s}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new su(Ec.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nf=new Uint8Array(0);class Lf{constructor(e,t){this.user=e,this.databaseId=t,this.He=new kf,this.Je=new gh((e=>Hu(e)),((e,t)=>Yu(e,t))),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.He.has(t)){const n=t.lastSegment(),r=t.popLast();e.addOnCommittedListener((()=>{this.He.add(t)}));const s={collectionId:n,parent:bd(r)};return Of(e).put(s)}return Bc.resolve()}getCollectionParents(e,t){const n=[],r=IDBKeyRange.bound([t,""],[wc(t),""],!1,!0);return Of(e).K(r).next((e=>{for(const r of e){if(r.collectionId!==t)break;n.push(Ed(r.parent))}return n}))}addFieldIndex(e,t){const n=Mf(e),r=function(e){return{indexId:e.indexId,collectionGroup:e.collectionGroup,fields:e.fields.map((e=>[e.fieldPath.canonicalString(),e.kind]))}}(t);delete r.indexId;const s=n.add(r);if(t.indexState){const n=Ff(e);return s.next((e=>{n.put(df(e,this.user,t.indexState.sequenceNumber,t.indexState.offset))}))}return s.next()}deleteFieldIndex(e,t){const n=Mf(e),r=Ff(e),s=Rf(e);return n.delete(t.indexId).next((()=>r.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))).next((()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))))}getDocumentsMatchingTarget(e,t){const n=Rf(e);let r=!0;const s=new Map;return Bc.forEach(this.Ye(t),(t=>this.Xe(e,t).next((e=>{r&&(r=!!e),s.set(t,e)})))).next((()=>{if(r){let e=Dh();const r=[];return Bc.forEach(s,((s,i)=>{var o;Ya("IndexedDbIndexManager",`Using index ${o=s,`id=${o.indexId}|cg=${o.collectionGroup}|f=${o.fields.map((e=>`${e.fieldPath}:${e.kind}`)).join(",")}`} to execute ${Hu(t)}`);const a=function(e,t){const n=Cc(t);if(void 0===n)return null;for(const r of Ju(e,n.fieldPath))switch(r.op){case"array-contains-any":return r.value.arrayValue.values||[];case"array-contains":return[r.value]}return null}(i,s),c=function(e,t){const n=new Map;for(const r of Ac(t))for(const t of Ju(e,r.fieldPath))switch(t.op){case"==":case"in":n.set(r.fieldPath.canonicalString(),t.value);break;case"not-in":case"!=":return n.set(r.fieldPath.canonicalString(),t.value),Array.from(n.values())}return null}(i,s),u=function(e,t){const n=[];let r=!0;for(const s of Ac(t)){const t=0===s.kind?Zu(e,s.fieldPath,e.startAt):el(e,s.fieldPath,e.startAt);n.push(t.value),r&&(r=t.inclusive)}return new ll(n,r)}(i,s),l=function(e,t){const n=[];let r=!0;for(const s of Ac(t)){const t=0===s.kind?el(e,s.fieldPath,e.endAt):Zu(e,s.fieldPath,e.endAt);n.push(t.value),r&&(r=t.inclusive)}return new ll(n,r)}(i,s),h=this.Ze(s,i,u),d=this.Ze(s,i,l),f=this.tn(s,i,c),p=this.en(s.indexId,a,h,u.inclusive,d,l.inclusive,f);return Bc.forEach(p,(s=>n.j(s,t.limit).next((t=>{t.forEach((t=>{const n=xc.fromSegments(t.documentKey);e.has(n)||(e=e.add(n),r.push(n))}))}))))})).next((()=>r))}return Bc.resolve(null)}))}Ye(e){let t=this.Je.get(e);return t||(t=[e],this.Je.set(e,t),t)}en(e,t,n,r,s,i,o){const a=(null!=t?t.length:1)*Math.max(n.length,s.length),c=a/(null!=t?t.length:1),u=[];for(let l=0;l<a;++l){const a=t?this.nn(t[l/c]):Nf,h=this.sn(e,a,n[l%c],r),d=this.rn(e,a,s[l%c],i),f=o.map((t=>this.sn(e,a,t,!0)));u.push(...this.createRange(h,d,f))}return u}sn(e,t,n,r){const s=new Tf(e,xc.empty(),t,n);return r?s:s.Le()}rn(e,t,n,r){const s=new Tf(e,xc.empty(),t,n);return r?s.Le():s}Xe(e,t){const n=new Cf(t),r=null!=t.collectionGroup?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,r).next((e=>{let t=null;for(const r of e)n.Ge(r)&&(!t||r.fields.length>t.fields.length)&&(t=r);return t}))}getIndexType(e,t){let n=2;return Bc.forEach(this.Ye(t),(t=>this.Xe(e,t).next((e=>{e?0!==n&&e.fields.length<function(e){let t=new su(Tc.comparator),n=!1;for(const r of e.filters){const e=r;e.field.isKeyField()||("array-contains"===e.op||"array-contains-any"===e.op?n=!0:t=t.add(e.field))}for(const r of e.orderBy)r.field.isKeyField()||(t=t.add(r.field));return t.size+(n?1:0)}(t)&&(n=1):n=0})))).next((()=>n))}on(e,t){const n=new Sf;for(const r of Ac(e)){const e=t.data.field(r.fieldPath);if(null==e)return null;const s=n.Be(r.kind);vf.ye.re(e,s)}return n.Me()}nn(e){const t=new Sf;return vf.ye.re(e,t.Be(0)),t.Me()}un(e,t){const n=new Sf;return vf.ye.re(Nu(this.databaseId,t),n.Be(function(e){const t=Ac(e);return 0===t.length?0:t[t.length-1].kind}(e))),n.Me()}tn(e,t,n){if(null===n)return[];let r=[];r.push(new Sf);let s=0;for(const i of Ac(e)){const e=n[s++];for(const n of r)if(this.cn(t,i.fieldPath)&&Ou(e))r=this.an(r,i,e);else{const t=n.Be(i.kind);vf.ye.re(e,t)}}return this.hn(r)}Ze(e,t,n){return this.tn(e,t,n.position)}hn(e){const t=[];for(let n=0;n<e.length;++n)t[n]=e[n].Me();return t}an(e,t,n){const r=[...e],s=[];for(const i of n.arrayValue.values||[])for(const e of r){const n=new Sf;n.seed(e.Me()),vf.ye.re(i,n.Be(t.kind)),s.push(n)}return s}cn(e,t){return!!e.filters.find((e=>e instanceof tl&&e.field.isEqual(t)&&("in"===e.op||"not-in"===e.op)))}getFieldIndexes(e,t){const n=Mf(e),r=Ff(e);return(t?n.K("collectionGroupIndex",IDBKeyRange.bound(t,t)):n.K()).next((e=>{const t=[];return Bc.forEach(e,(e=>r.get([e.indexId,this.uid]).next((n=>{t.push(function(e,t){const n=t?new Nc(t.sequenceNumber,new Rc(sf(t.readTime),new xc(Ed(t.documentKey)),t.largestBatchId)):Nc.empty(),r=e.fields.map((([e,t])=>new kc(Tc.fromServerFormat(e),t)));return new Dc(e.indexId,e.collectionGroup,r,n)}(e,n))})))).next((()=>t))}))}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next((e=>0===e.length?null:(e.sort(((e,t)=>{const n=e.indexState.sequenceNumber-t.indexState.sequenceNumber;return 0!==n?n:yc(e.collectionGroup,t.collectionGroup)})),e[0].collectionGroup)))}updateCollectionGroup(e,t,n){const r=Mf(e),s=Ff(e);return this.ln(e).next((e=>r.K("collectionGroupIndex",IDBKeyRange.bound(t,t)).next((t=>Bc.forEach(t,(t=>s.put(df(t.indexId,this.user,e,n))))))))}updateIndexEntries(e,t){const n=new Map;return Bc.forEach(t,((t,r)=>{const s=n.get(t.collectionGroup);return(s?Bc.resolve(s):this.getFieldIndexes(e,t.collectionGroup)).next((s=>(n.set(t.collectionGroup,s),Bc.forEach(s,(n=>this.fn(e,t,n).next((t=>{const s=this.dn(r,n);return t.isEqual(s)?Bc.resolve():this._n(e,r,n,t,s)})))))))}))}wn(e,t,n,r){return Rf(e).put({indexId:r.indexId,uid:this.uid,arrayValue:r.arrayValue,directionalValue:r.directionalValue,orderedDocumentKey:this.un(n,t.key),documentKey:t.key.path.toArray()})}mn(e,t,n,r){return Rf(e).delete([r.indexId,this.uid,r.arrayValue,r.directionalValue,this.un(n,t.key),t.key.path.toArray()])}fn(e,t,n){const r=Rf(e);let s=new su(xf);return r.J({index:"documentKeyIndex",range:IDBKeyRange.only([n.indexId,this.uid,this.un(n,t)])},((e,r)=>{s=s.add(new Tf(n.indexId,t,r.arrayValue,r.directionalValue))})).next((()=>s))}dn(e,t){let n=new su(xf);const r=this.on(t,e);if(null==r)return n;const s=Cc(t);if(null!=s){const i=e.data.field(s.fieldPath);if(Ou(i))for(const s of i.arrayValue.values||[])n=n.add(new Tf(t.indexId,e.key,this.nn(s),r))}else n=n.add(new Tf(t.indexId,e.key,Nf,r));return n}_n(e,t,n,r,s){Ya("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const i=[];return function(e,t,n,r,s){const i=e.getIterator(),o=t.getIterator();let a=ou(i),c=ou(o);for(;a||c;){let e=!1,t=!1;if(a&&c){const r=n(a,c);r<0?t=!0:r>0&&(e=!0)}else null!=a?t=!0:e=!0;e?(r(c),c=ou(o)):t?(s(a),a=ou(i)):(a=ou(i),c=ou(o))}}(r,s,xf,(r=>{i.push(this.wn(e,t,n,r))}),(r=>{i.push(this.mn(e,t,n,r))})),Bc.waitFor(i)}ln(e){let t=1;return Ff(e).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},((e,n,r)=>{r.done(),t=n.sequenceNumber+1})).next((()=>t))}createRange(e,t,n){n=n.sort(((e,t)=>xf(e,t))).filter(((e,t,n)=>!t||0!==xf(e,n[t-1])));const r=[];r.push(e);for(const i of n){const n=xf(i,e),s=xf(i,t);if(0===n)r[0]=e.Le();else if(n>0&&s<0)r.push(i),r.push(i.Le());else if(s>0)break}r.push(t);const s=[];for(let i=0;i<r.length;i+=2)s.push(IDBKeyRange.bound([r[i].indexId,this.uid,r[i].arrayValue,r[i].directionalValue,Nf,[]],[r[i+1].indexId,this.uid,r[i+1].arrayValue,r[i+1].directionalValue,Nf,[]]));return s}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(Vf)}getMinOffset(e,t){return Bc.mapArray(this.Ye(t),(t=>this.Xe(e,t).next((e=>e||ec())))).next(Vf)}}function Of(e){return Hd(e,"collectionParents")}function Rf(e){return Hd(e,"indexEntries")}function Mf(e){return Hd(e,"indexConfiguration")}function Ff(e){return Hd(e,"indexState")}function Vf(e){tc(0!==e.length);let t=e[0].indexState.offset,n=t.largestBatchId;for(let r=1;r<e.length;r++){const s=e[r].indexState.offset;Mc(s,t)<0&&(t=s),n<s.largestBatchId&&(n=s.largestBatchId)}return new Rc(t.readTime,t.documentKey,n)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pf={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Bf{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new Bf(e,Bf.DEFAULT_COLLECTION_PERCENTILE,Bf.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uf(e,t,n){const r=e.store("mutations"),s=e.store("documentMutations"),i=[],o=IDBKeyRange.only(n.batchId);let a=0;const c=r.J({range:o},((e,t,n)=>(a++,n.delete())));i.push(c.next((()=>{tc(1===a)})));const u=[];for(const l of n.mutations){const e=xd(t,l.key.path,n.batchId);i.push(s.delete(e)),u.push(l.key)}return Bc.waitFor(i).next((()=>u))}function jf(e){if(!e)return 0;let t;if(e.document)t=e.document;else if(e.unknownDocument)t=e.unknownDocument;else{if(!e.noDocument)throw ec();t=e.noDocument}return JSON.stringify(t).length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Bf.DEFAULT_COLLECTION_PERCENTILE=10,Bf.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Bf.DEFAULT=new Bf(41943040,Bf.DEFAULT_COLLECTION_PERCENTILE,Bf.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Bf.DISABLED=new Bf(-1,0,0);class qf{constructor(e,t,n,r){this.userId=e,this.wt=t,this.indexManager=n,this.referenceDelegate=r,this.gn={}}static se(e,t,n,r){tc(""!==e.uid);const s=e.isAuthenticated()?e.uid:"";return new qf(s,t,n,r)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Kf(e).J({index:"userMutationsIndex",range:n},((e,n,r)=>{t=!1,r.done()})).next((()=>t))}addMutationBatch(e,t,n,r){const s=Gf(e),i=Kf(e);return i.add({}).next((o=>{tc("number"==typeof o);const a=new Qd(o,t,n,r),c=function(e,t,n){const r=n.baseMutations.map((t=>sd(e.ne,t))),s=n.mutations.map((t=>sd(e.ne,t)));return{userId:t,batchId:n.batchId,localWriteTimeMs:n.localWriteTime.toMillis(),baseMutations:r,mutations:s}}(this.wt,this.userId,a),u=[];let l=new su(((e,t)=>yc(e.canonicalString(),t.canonicalString())));for(const e of r){const t=xd(this.userId,e.key.path,o);l=l.add(e.key.path.popLast()),u.push(i.put(c)),u.push(s.put(t,Dd))}return l.forEach((t=>{u.push(this.indexManager.addToCollectionParentIndex(e,t))})),e.addOnCommittedListener((()=>{this.gn[o]=a.keys()})),Bc.waitFor(u).next((()=>a))}))}lookupMutationBatch(e,t){return Kf(e).get(t).next((e=>e?(tc(e.userId===this.userId),of(this.wt,e)):null))}yn(e,t){return this.gn[t]?Bc.resolve(this.gn[t]):this.lookupMutationBatch(e,t).next((e=>{if(e){const n=e.keys();return this.gn[t]=n,n}return null}))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=IDBKeyRange.lowerBound([this.userId,n]);let s=null;return Kf(e).J({index:"userMutationsIndex",range:r},((e,t,r)=>{t.userId===this.userId&&(tc(t.batchId>=n),s=of(this.wt,t)),r.done()})).next((()=>s))}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=-1;return Kf(e).J({index:"userMutationsIndex",range:t,reverse:!0},((e,t,r)=>{n=t.batchId,r.done()})).next((()=>n))}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Kf(e).K("userMutationsIndex",t).next((e=>e.map((e=>of(this.wt,e)))))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=Td(this.userId,t.path),r=IDBKeyRange.lowerBound(n),s=[];return Gf(e).J({range:r},((n,r,i)=>{const[o,a,c]=n,u=Ed(a);if(o===this.userId&&t.path.isEqual(u))return Kf(e).get(c).next((e=>{if(!e)throw ec();tc(e.userId===this.userId),s.push(of(this.wt,e))}));i.done()})).next((()=>s))}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new su(yc);const r=[];return t.forEach((t=>{const s=Td(this.userId,t.path),i=IDBKeyRange.lowerBound(s),o=Gf(e).J({range:i},((e,r,s)=>{const[i,o,a]=e,c=Ed(o);i===this.userId&&t.path.isEqual(c)?n=n.add(a):s.done()}));r.push(o)})),Bc.waitFor(r).next((()=>this.pn(e,n)))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1,s=Td(this.userId,n),i=IDBKeyRange.lowerBound(s);let o=new su(yc);return Gf(e).J({range:i},((e,t,s)=>{const[i,a,c]=e,u=Ed(a);i===this.userId&&n.isPrefixOf(u)?u.length===r&&(o=o.add(c)):s.done()})).next((()=>this.pn(e,o)))}pn(e,t){const n=[],r=[];return t.forEach((t=>{r.push(Kf(e).get(t).next((e=>{if(null===e)throw ec();tc(e.userId===this.userId),n.push(of(this.wt,e))})))})),Bc.waitFor(r).next((()=>n))}removeMutationBatch(e,t){return Uf(e.ee,this.userId,t).next((n=>(e.addOnCommittedListener((()=>{this.In(t.batchId)})),Bc.forEach(n,(t=>this.referenceDelegate.markPotentiallyOrphaned(e,t))))))}In(e){delete this.gn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next((t=>{if(!t)return Bc.resolve();const n=IDBKeyRange.lowerBound([this.userId]),r=[];return Gf(e).J({range:n},((e,t,n)=>{if(e[0]===this.userId){const t=Ed(e[1]);r.push(t)}else n.done()})).next((()=>{tc(0===r.length)}))}))}containsKey(e,t){return $f(e,this.userId,t)}Tn(e){return zf(e).get(this.userId).next((e=>e||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""}))}}function $f(e,t,n){const r=Td(t,n.path),s=r[1],i=IDBKeyRange.lowerBound(r);let o=!1;return Gf(e).J({range:i,H:!0},((e,n,r)=>{const[i,a,c]=e;i===t&&a===s&&(o=!0),r.done()})).next((()=>o))}function Kf(e){return Hd(e,"mutations")}function Gf(e){return Hd(e,"documentMutations")}function zf(e){return Hd(e,"mutationQueues")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wf{constructor(e){this.En=e}next(){return this.En+=2,this.En}static An(){return new Wf(0)}static Rn(){return new Wf(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf{constructor(e,t){this.referenceDelegate=e,this.wt=t}allocateTargetId(e){return this.bn(e).next((t=>{const n=new Wf(t.highestTargetId);return t.highestTargetId=n.next(),this.Pn(e,t).next((()=>t.highestTargetId))}))}getLastRemoteSnapshotVersion(e){return this.bn(e).next((e=>Ic.fromTimestamp(new bc(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds))))}getHighestSequenceNumber(e){return this.bn(e).next((e=>e.highestListenSequenceNumber))}setTargetsMetadata(e,t,n){return this.bn(e).next((r=>(r.highestListenSequenceNumber=t,n&&(r.lastRemoteSnapshotVersion=n.toTimestamp()),t>r.highestListenSequenceNumber&&(r.highestListenSequenceNumber=t),this.Pn(e,r))))}addTargetData(e,t){return this.vn(e,t).next((()=>this.bn(e).next((n=>(n.targetCount+=1,this.Vn(t,n),this.Pn(e,n))))))}updateTargetData(e,t){return this.vn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next((()=>Qf(e).delete(t.targetId))).next((()=>this.bn(e))).next((t=>(tc(t.targetCount>0),t.targetCount-=1,this.Pn(e,t))))}removeTargets(e,t,n){let r=0;const s=[];return Qf(e).J(((i,o)=>{const a=af(o);a.sequenceNumber<=t&&null===n.get(a.targetId)&&(r++,s.push(this.removeTargetData(e,a)))})).next((()=>Bc.waitFor(s))).next((()=>r))}forEachTarget(e,t){return Qf(e).J(((e,n)=>{const r=af(n);t(r)}))}bn(e){return Yf(e).get("targetGlobalKey").next((e=>(tc(null!==e),e)))}Pn(e,t){return Yf(e).put("targetGlobalKey",t)}vn(e,t){return Qf(e).put(cf(this.wt,t))}Vn(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.bn(e).next((e=>e.targetCount))}getTargetData(e,t){const n=Hu(t),r=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let s=null;return Qf(e).J({range:r,index:"queryTargetsIndex"},((e,n,r)=>{const i=af(n);Yu(t,i.target)&&(s=i,r.done())})).next((()=>s))}addMatchingKeys(e,t,n){const r=[],s=Xf(e);return t.forEach((t=>{const i=bd(t.path);r.push(s.put({targetId:n,path:i})),r.push(this.referenceDelegate.addReference(e,n,t))})),Bc.waitFor(r)}removeMatchingKeys(e,t,n){const r=Xf(e);return Bc.forEach(t,(t=>{const s=bd(t.path);return Bc.waitFor([r.delete([n,s]),this.referenceDelegate.removeReference(e,n,t)])}))}removeMatchingKeysForTargetId(e,t){const n=Xf(e),r=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(r)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),r=Xf(e);let s=Dh();return r.J({range:n,H:!0},((e,t,n)=>{const r=Ed(e[1]),i=new xc(r);s=s.add(i)})).next((()=>s))}containsKey(e,t){const n=bd(t.path),r=IDBKeyRange.bound([n],[wc(n)],!1,!0);let s=0;return Xf(e).J({index:"documentTargetsIndex",H:!0,range:r},(([e,t],n,r)=>{0!==e&&(s++,r.done())})).next((()=>s>0))}te(e,t){return Qf(e).get(t).next((e=>e?af(e):null))}}function Qf(e){return Hd(e,"targets")}function Yf(e){return Hd(e,"targetGlobal")}function Xf(e){return Hd(e,"targetDocuments")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jf([e,t],[n,r]){const s=yc(e,n);return 0===s?yc(t,r):s}class Zf{constructor(e){this.Sn=e,this.buffer=new su(Jf),this.Dn=0}Cn(){return++this.Dn}xn(e){const t=[e,this.Cn()];if(this.buffer.size<this.Sn)this.buffer=this.buffer.add(t);else{const e=this.buffer.last();Jf(t,e)<0&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class ep{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Nn=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.kn(6e4)}stop(){this.Nn&&(this.Nn.cancel(),this.Nn=null)}get started(){return null!==this.Nn}kn(e){Ya("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Nn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Nn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Kc(e)?Ya("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e):await Pc(e)}await this.kn(3e5)}))}}class tp{constructor(e,t){this.Mn=e,this.params=t}calculateTargetCount(e,t){return this.Mn.On(e).next((e=>Math.floor(t/100*e)))}nthSequenceNumber(e,t){if(0===t)return Bc.resolve(Xc.ot);const n=new Zf(t);return this.Mn.forEachTarget(e,(e=>n.xn(e.sequenceNumber))).next((()=>this.Mn.Fn(e,(e=>n.xn(e))))).next((()=>n.maxValue))}removeTargets(e,t,n){return this.Mn.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.Mn.removeOrphanedDocuments(e,t)}collect(e,t){return-1===this.params.cacheSizeCollectionThreshold?(Ya("LruGarbageCollector","Garbage collection skipped; disabled"),Bc.resolve(Pf)):this.getCacheSize(e).next((n=>n<this.params.cacheSizeCollectionThreshold?(Ya("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Pf):this.$n(e,t)))}getCacheSize(e){return this.Mn.getCacheSize(e)}$n(e,t){let n,r,s,i,o,a,c;const u=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((t=>(t>this.params.maximumSequenceNumbersToCollect?(Ya("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),r=this.params.maximumSequenceNumbersToCollect):r=t,i=Date.now(),this.nthSequenceNumber(e,r)))).next((r=>(n=r,o=Date.now(),this.removeTargets(e,n,t)))).next((t=>(s=t,a=Date.now(),this.removeOrphanedDocuments(e,n)))).next((e=>(c=Date.now(),Ha()<=ct.DEBUG&&Ya("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${i-u}ms\n\tDetermined least recently used ${r} in `+(o-i)+"ms\n"+`\tRemoved ${s} targets in `+(a-o)+"ms\n"+`\tRemoved ${e} documents in `+(c-a)+"ms\n"+`Total Duration: ${c-u}ms`),Bc.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:s,documentsRemoved:e}))))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(e,t){this.db=e,this.garbageCollector=function(e,t){return new tp(e,t)}(this,t)}On(e){const t=this.Bn(e);return this.db.getTargetCache().getTargetCount(e).next((e=>t.next((t=>e+t))))}Bn(e){let t=0;return this.Fn(e,(e=>{t++})).next((()=>t))}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Fn(e,t){return this.Ln(e,((e,n)=>t(n)))}addReference(e,t,n){return rp(e,n)}removeReference(e,t,n){return rp(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return rp(e,t)}Un(e,t){return function(e,t){let n=!1;return zf(e).Y((r=>$f(e,r,t).next((e=>(e&&(n=!0),Bc.resolve(!e)))))).next((()=>n))}(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),r=[];let s=0;return this.Ln(e,((i,o)=>{if(o<=t){const t=this.Un(e,i).next((t=>{if(!t)return s++,n.getEntry(e,i).next((()=>(n.removeEntry(i,Ic.min()),Xf(e).delete([0,bd(i.path)]))))}));r.push(t)}})).next((()=>Bc.waitFor(r))).next((()=>n.apply(e))).next((()=>s))}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return rp(e,t)}Ln(e,t){const n=Xf(e);let r,s=Xc.ot;return n.J({index:"documentTargetsIndex"},(([e,n],{path:i,sequenceNumber:o})=>{0===e?(s!==Xc.ot&&t(new xc(Ed(r)),s),s=o,r=i):s=Xc.ot})).next((()=>{s!==Xc.ot&&t(new xc(Ed(r)),s)}))}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function rp(e,t){return Xf(e).put(function(e,t){return{targetId:0,path:bd(e.path),sequenceNumber:t}}(t,e.currentSequenceNumber))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sp{constructor(){this.changes=new gh((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Gu.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?Bc.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip{constructor(e){this.wt=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return up(e).put(n)}removeEntry(e,t,n){return up(e).delete(function(e,t){const n=e.path.toArray();return[n.slice(0,n.length-2),n[n.length-2],nf(t),n[n.length-1]]}(t,n))}updateMetadata(e,t){return this.getMetadata(e).next((n=>(n.byteSize+=t,this.qn(e,n))))}getEntry(e,t){let n=Gu.newInvalidDocument(t);return up(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(lp(t))},((e,r)=>{n=this.Kn(t,r)})).next((()=>n))}Gn(e,t){let n={size:0,document:Gu.newInvalidDocument(t)};return up(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(lp(t))},((e,r)=>{n={document:this.Kn(t,r),size:jf(r)}})).next((()=>n))}getEntries(e,t){let n=vh();return this.Qn(e,t,((e,t)=>{const r=this.Kn(e,t);n=n.insert(e,r)})).next((()=>n))}jn(e,t){let n=vh(),r=new tu(xc.comparator);return this.Qn(e,t,((e,t)=>{const s=this.Kn(e,t);n=n.insert(e,s),r=r.insert(e,jf(t))})).next((()=>({documents:n,Wn:r})))}Qn(e,t,n){if(t.isEmpty())return Bc.resolve();let r=new su(dp);t.forEach((e=>r=r.add(e)));const s=IDBKeyRange.bound(lp(r.first()),lp(r.last())),i=r.getIterator();let o=i.getNext();return up(e).J({index:"documentKeyIndex",range:s},((e,t,r)=>{const s=xc.fromSegments([...t.prefixPath,t.collectionGroup,t.documentId]);for(;o&&dp(o,s)<0;)n(o,null),o=i.getNext();o&&o.isEqual(s)&&(n(o,t),o=i.hasNext()?i.getNext():null),o?r.q(lp(o)):r.done()})).next((()=>{for(;o;)n(o,null),o=i.hasNext()?i.getNext():null}))}getAllFromCollection(e,t,n){const r=[t.popLast().toArray(),t.lastSegment(),nf(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],s=[t.popLast().toArray(),t.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return up(e).K(IDBKeyRange.bound(r,s,!0)).next((e=>{let t=vh();for(const n of e){const e=this.Kn(xc.fromSegments(n.prefixPath.concat(n.collectionGroup,n.documentId)),n);t=t.insert(e.key,e)}return t}))}getAllFromCollectionGroup(e,t,n,r){let s=vh();const i=hp(t,n),o=hp(t,Rc.max());return up(e).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(i,o,!0)},((e,t,n)=>{const i=this.Kn(xc.fromSegments(t.prefixPath.concat(t.collectionGroup,t.documentId)),t);s=s.insert(i.key,i),s.size===r&&n.done()})).next((()=>s))}newChangeBuffer(e){return new ap(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next((e=>e.byteSize))}getMetadata(e){return cp(e).get("remoteDocumentGlobalKey").next((e=>(tc(!!e),e)))}qn(e,t){return cp(e).put("remoteDocumentGlobalKey",t)}Kn(e,t){if(t){const e=ef(this.wt,t);if(!e.isNoDocument()||!e.version.isEqual(Ic.min()))return e}return Gu.newInvalidDocument(e)}}function op(e){return new ip(e)}class ap extends sp{constructor(e,t){super(),this.zn=e,this.trackRemovals=t,this.Hn=new gh((e=>e.toString()),((e,t)=>e.isEqual(t)))}applyChanges(e){const t=[];let n=0,r=new su(((e,t)=>yc(e.canonicalString(),t.canonicalString())));return this.changes.forEach(((s,i)=>{const o=this.Hn.get(s);if(t.push(this.zn.removeEntry(e,s,o.readTime)),i.isValidDocument()){const a=tf(this.zn.wt,i);r=r.add(s.path.popLast());const c=jf(a);n+=c-o.size,t.push(this.zn.addEntry(e,s,a))}else if(n-=o.size,this.trackRemovals){const n=tf(this.zn.wt,i.convertToNoDocument(Ic.min()));t.push(this.zn.addEntry(e,s,n))}})),r.forEach((n=>{t.push(this.zn.indexManager.addToCollectionParentIndex(e,n))})),t.push(this.zn.updateMetadata(e,n)),Bc.waitFor(t)}getFromCache(e,t){return this.zn.Gn(e,t).next((e=>(this.Hn.set(t,{size:e.size,readTime:e.document.readTime}),e.document)))}getAllFromCache(e,t){return this.zn.jn(e,t).next((({documents:e,Wn:t})=>(t.forEach(((t,n)=>{this.Hn.set(t,{size:n,readTime:e.get(t).readTime})})),e)))}}function cp(e){return Hd(e,"remoteDocumentGlobal")}function up(e){return Hd(e,"remoteDocumentsV14")}function lp(e){const t=e.path.toArray();return[t.slice(0,t.length-2),t[t.length-2],t[t.length-1]]}function hp(e,t){const n=t.documentKey.path.toArray();return[e,nf(t.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function dp(e,t){const n=e.path.toArray(),r=t.path.toArray();let s=0;for(let i=0;i<n.length-2&&i<r.length-2;++i)if(s=yc(n[i],r[i]),s)return s;return s=yc(n.length,r.length),s||(s=yc(n[n.length-2],r[r.length-2]),s||yc(n[n.length-1],r[r.length-1]))
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class fp{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pp{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(n=r,this.getBaseDocument(e,t,n)))).next((e=>(null!==n&&th(n.mutation,e,au.empty(),bc.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,Dh()).next((()=>t))))}getLocalViewOfDocuments(e,t,n=Dh()){const r=_h();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,n).next((e=>{let t=bh();return e.forEach(((e,n)=>{t=t.insert(e,n.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){const n=_h();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,Dh())))}populateOverlays(e,t,n){const r=[];return n.forEach((e=>{t.has(e)||r.push(e)})),this.documentOverlayCache.getOverlays(e,r).next((e=>{e.forEach(((e,n)=>{t.set(e,n)}))}))}computeViews(e,t,n,r){let s=vh();const i=Sh(),o=Sh();return t.forEach(((e,t)=>{const o=n.get(t.key);r.has(t.key)&&(void 0===o||o.mutation instanceof ih)?s=s.insert(t.key,t):void 0!==o&&(i.set(t.key,o.mutation.getFieldMask()),th(o.mutation,t,o.mutation.getFieldMask(),bc.now()))})),this.recalculateAndSaveOverlays(e,s).next((e=>(e.forEach(((e,t)=>i.set(e,t))),t.forEach(((e,t)=>{var n;return o.set(e,new fp(t,null!==(n=i.get(e))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(e,t){const n=Sh();let r=new tu(((e,t)=>e-t)),s=Dh();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(const s of e)s.keys().forEach((e=>{const i=t.get(e);if(null===i)return;let o=n.get(e)||au.empty();o=s.applyToLocalView(i,o),n.set(e,o);const a=(r.get(s.batchId)||Dh()).add(e);r=r.insert(s.batchId,a)}))})).next((()=>{const i=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,c=r.value,u=Eh();c.forEach((e=>{if(!s.has(e)){const r=Zl(t.get(e),n.get(e));null!==r&&u.set(e,r),s=s.add(e)}})),i.push(this.documentOverlayCache.saveOverlays(e,a,u))}return Bc.waitFor(i)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,n){return function(e){return xc.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Il(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n):this.getDocumentsMatchingCollectionQuery(e,t,n)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next((s=>{const i=r-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-s.size):Bc.resolve(_h());let o=-1,a=s;return i.next((t=>Bc.forEach(t,((t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),s.get(t)?Bc.resolve():this.getBaseDocument(e,t,n).next((e=>{a=a.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,s))).next((()=>this.computeViews(e,a,t,Dh()))).next((e=>({batchId:o,changes:Ih(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new xc(t)).next((e=>{let t=bh();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,n){const r=t.collectionGroup;let s=bh();return this.indexManager.getCollectionParents(e,r).next((i=>Bc.forEach(i,(i=>{const o=function(e,t){return new ml(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,i.child(r));return this.getDocumentsMatchingCollectionQuery(e,o,n).next((e=>{e.forEach(((e,t)=>{s=s.insert(e,t)}))}))})).next((()=>s))))}getDocumentsMatchingCollectionQuery(e,t,n){let r;return this.remoteDocumentCache.getAllFromCollection(e,t.path,n).next((s=>(r=s,this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId)))).next((e=>{e.forEach(((e,t)=>{const n=t.getKey();null===r.get(n)&&(r=r.insert(n,Gu.newInvalidDocument(n)))}));let n=bh();return r.forEach(((r,s)=>{const i=e.get(r);void 0!==i&&th(i.mutation,s,au.empty(),bc.now()),Cl(t,s)&&(n=n.insert(r,s))})),n}))}getBaseDocument(e,t,n){return null===n||1===n.mutation.type?this.remoteDocumentCache.getEntry(e,t):Bc.resolve(Gu.newInvalidDocument(t))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mp{constructor(e){this.wt=e,this.Jn=new Map,this.Yn=new Map}getBundleMetadata(e,t){return Bc.resolve(this.Jn.get(t))}saveBundleMetadata(e,t){var n;return this.Jn.set(t.id,{id:(n=t).id,version:n.version,createTime:Gh(n.createTime)}),Bc.resolve()}getNamedQuery(e,t){return Bc.resolve(this.Yn.get(t))}saveNamedQuery(e,t){return this.Yn.set(t.name,function(e){return{name:e.name,query:uf(e.bundledQuery),readTime:Gh(e.readTime)}}(t)),Bc.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp{constructor(){this.overlays=new tu(xc.comparator),this.Xn=new Map}getOverlay(e,t){return Bc.resolve(this.overlays.get(t))}getOverlays(e,t){const n=_h();return Bc.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((n,r)=>{this.ie(e,t,r)})),Bc.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.Xn.get(n);return void 0!==r&&(r.forEach((e=>this.overlays=this.overlays.remove(e))),this.Xn.delete(n)),Bc.resolve()}getOverlaysForCollection(e,t,n){const r=_h(),s=t.length+1,i=new xc(t.child("")),o=this.overlays.getIteratorFrom(i);for(;o.hasNext();){const e=o.getNext().value,i=e.getKey();if(!t.isPrefixOf(i.path))break;i.path.length===s&&e.largestBatchId>n&&r.set(e.getKey(),e)}return Bc.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let s=new tu(((e,t)=>e-t));const i=this.overlays.getIterator();for(;i.hasNext();){const e=i.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=s.get(e.largestBatchId);null===t&&(t=_h(),s=s.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=_h(),a=s.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((e,t)=>o.set(e,t))),o.size()>=r)break;return Bc.resolve(o)}ie(e,t,n){const r=this.overlays.get(n.key);if(null!==r){const e=this.Xn.get(r.largestBatchId).delete(n.key);this.Xn.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new Xd(t,n));let s=this.Xn.get(t);void 0===s&&(s=Dh(),this.Xn.set(t,s)),this.Xn.set(t,s.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yp{constructor(){this.Zn=new su(vp.ts),this.es=new su(vp.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(e,t){const n=new vp(e,t);this.Zn=this.Zn.add(n),this.es=this.es.add(n)}ss(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.rs(new vp(e,t))}os(e,t){e.forEach((e=>this.removeReference(e,t)))}us(e){const t=new xc(new Ec([])),n=new vp(t,e),r=new vp(t,e+1),s=[];return this.es.forEachInRange([n,r],(e=>{this.rs(e),s.push(e.key)})),s}cs(){this.Zn.forEach((e=>this.rs(e)))}rs(e){this.Zn=this.Zn.delete(e),this.es=this.es.delete(e)}hs(e){const t=new xc(new Ec([])),n=new vp(t,e),r=new vp(t,e+1);let s=Dh();return this.es.forEachInRange([n,r],(e=>{s=s.add(e.key)})),s}containsKey(e){const t=new vp(e,0),n=this.Zn.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class vp{constructor(e,t){this.key=e,this.ls=t}static ts(e,t){return xc.comparator(e.key,t.key)||yc(e.ls,t.ls)}static ns(e,t){return yc(e.ls,t.ls)||xc.comparator(e.key,t.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wp{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.fs=1,this.ds=new su(vp.ts)}checkEmpty(e){return Bc.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){const s=this.fs;this.fs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const i=new Qd(s,t,n,r);this.mutationQueue.push(i);for(const o of r)this.ds=this.ds.add(new vp(o.key,s)),this.indexManager.addToCollectionParentIndex(e,o.key.path.popLast());return Bc.resolve(i)}lookupMutationBatch(e,t){return Bc.resolve(this._s(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.ws(n),s=r<0?0:r;return Bc.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return Bc.resolve(0===this.mutationQueue.length?-1:this.fs-1)}getAllMutationBatches(e){return Bc.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new vp(t,0),r=new vp(t,Number.POSITIVE_INFINITY),s=[];return this.ds.forEachInRange([n,r],(e=>{const t=this._s(e.ls);s.push(t)})),Bc.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new su(yc);return t.forEach((e=>{const t=new vp(e,0),r=new vp(e,Number.POSITIVE_INFINITY);this.ds.forEachInRange([t,r],(e=>{n=n.add(e.ls)}))})),Bc.resolve(this.gs(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let s=n;xc.isDocumentKey(s)||(s=s.child(""));const i=new vp(new xc(s),0);let o=new su(yc);return this.ds.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.ls)),!0)}),i),Bc.resolve(this.gs(o))}gs(e){const t=[];return e.forEach((e=>{const n=this._s(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){tc(0===this.ys(t.batchId,"removed")),this.mutationQueue.shift();let n=this.ds;return Bc.forEach(t.mutations,(r=>{const s=new vp(r.key,t.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.ds=n}))}In(e){}containsKey(e,t){const n=new vp(t,0),r=this.ds.firstAfterOrEqual(n);return Bc.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,Bc.resolve()}ys(e,t){return this.ws(e)}ws(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}_s(e){const t=this.ws(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bp{constructor(e){this.ps=e,this.docs=new tu(xc.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),s=r?r.size:0,i=this.ps(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:i}),this.size+=i-s,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return Bc.resolve(n?n.document.mutableCopy():Gu.newInvalidDocument(t))}getEntries(e,t){let n=vh();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():Gu.newInvalidDocument(e))})),Bc.resolve(n)}getAllFromCollection(e,t,n){let r=vh();const s=new xc(t.child("")),i=this.docs.getIteratorFrom(s);for(;i.hasNext();){const{key:e,value:{document:s}}=i.getNext();if(!t.isPrefixOf(e.path))break;e.path.length>t.length+1||Mc(Oc(s),n)<=0||(r=r.insert(s.key,s.mutableCopy()))}return Bc.resolve(r)}getAllFromCollectionGroup(e,t,n,r){ec()}Is(e,t){return Bc.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new Ip(this)}getSize(e){return Bc.resolve(this.size)}}class Ip extends sp{constructor(e){super(),this.zn=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?t.push(this.zn.addEntry(e,r)):this.zn.removeEntry(n)})),Bc.waitFor(t)}getFromCache(e,t){return this.zn.getEntry(e,t)}getAllFromCache(e,t){return this.zn.getEntries(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{constructor(e){this.persistence=e,this.Ts=new gh((e=>Hu(e)),Yu),this.lastRemoteSnapshotVersion=Ic.min(),this.highestTargetId=0,this.Es=0,this.As=new yp,this.targetCount=0,this.Rs=Wf.An()}forEachTarget(e,t){return this.Ts.forEach(((e,n)=>t(n))),Bc.resolve()}getLastRemoteSnapshotVersion(e){return Bc.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Bc.resolve(this.Es)}allocateTargetId(e){return this.highestTargetId=this.Rs.next(),Bc.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Es&&(this.Es=t),Bc.resolve()}vn(e){this.Ts.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Rs=new Wf(t),this.highestTargetId=t),e.sequenceNumber>this.Es&&(this.Es=e.sequenceNumber)}addTargetData(e,t){return this.vn(t),this.targetCount+=1,Bc.resolve()}updateTargetData(e,t){return this.vn(t),Bc.resolve()}removeTargetData(e,t){return this.Ts.delete(t.target),this.As.us(t.targetId),this.targetCount-=1,Bc.resolve()}removeTargets(e,t,n){let r=0;const s=[];return this.Ts.forEach(((i,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.Ts.delete(i),s.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)})),Bc.waitFor(s).next((()=>r))}getTargetCount(e){return Bc.resolve(this.targetCount)}getTargetData(e,t){const n=this.Ts.get(t)||null;return Bc.resolve(n)}addMatchingKeys(e,t,n){return this.As.ss(t,n),Bc.resolve()}removeMatchingKeys(e,t,n){this.As.os(t,n);const r=this.persistence.referenceDelegate,s=[];return r&&t.forEach((t=>{s.push(r.markPotentiallyOrphaned(e,t))})),Bc.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.As.us(t),Bc.resolve()}getMatchingKeysForTargetId(e,t){const n=this.As.hs(t);return Bc.resolve(n)}containsKey(e,t){return Bc.resolve(this.As.containsKey(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ep{constructor(e,t){this.bs={},this.overlays={},this.Ps=new Xc(0),this.vs=!1,this.vs=!0,this.referenceDelegate=e(this),this.Vs=new _p(this),this.indexManager=new Af,this.remoteDocumentCache=function(e){return new bp(e)}((e=>this.referenceDelegate.Ss(e))),this.wt=new Zd(t),this.Ds=new mp(this.wt)}start(){return Promise.resolve()}shutdown(){return this.vs=!1,Promise.resolve()}get started(){return this.vs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new gp,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.bs[e.toKey()];return n||(n=new wp(t,this.referenceDelegate),this.bs[e.toKey()]=n),n}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ds}runTransaction(e,t,n){Ya("MemoryPersistence","Starting transaction:",e);const r=new Sp(this.Ps.next());return this.referenceDelegate.Cs(),n(r).next((e=>this.referenceDelegate.xs(r).next((()=>e)))).toPromise().then((e=>(r.raiseOnCommittedEvent(),e)))}Ns(e,t){return Bc.or(Object.values(this.bs).map((n=>()=>n.containsKey(e,t))))}}class Sp extends Vc{constructor(e){super(),this.currentSequenceNumber=e}}class Tp{constructor(e){this.persistence=e,this.ks=new yp,this.Ms=null}static Os(e){return new Tp(e)}get Fs(){if(this.Ms)return this.Ms;throw ec()}addReference(e,t,n){return this.ks.addReference(n,t),this.Fs.delete(n.toString()),Bc.resolve()}removeReference(e,t,n){return this.ks.removeReference(n,t),this.Fs.add(n.toString()),Bc.resolve()}markPotentiallyOrphaned(e,t){return this.Fs.add(t.toString()),Bc.resolve()}removeTarget(e,t){this.ks.us(t.targetId).forEach((e=>this.Fs.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.Fs.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}Cs(){this.Ms=new Set}xs(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Bc.forEach(this.Fs,(n=>{const r=xc.fromPath(n);return this.$s(e,r).next((e=>{e||t.removeEntry(r,Ic.min())}))})).next((()=>(this.Ms=null,t.apply(e))))}updateLimboDocument(e,t){return this.$s(e,t).next((e=>{e?this.Fs.delete(t.toString()):this.Fs.add(t.toString())}))}Ss(e){return 0}$s(e,t){return Bc.or([()=>Bc.resolve(this.ks.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ns(e,t)])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xp{constructor(e){this.wt=e}M(e,t,n,r){const s=new Uc("createOrUpgrade",t);n<1&&r>=1&&(function(e){e.createObjectStore("owner")}(e),function(e){e.createObjectStore("mutationQueues",{keyPath:"userId"}),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Sd,{unique:!0}),e.createObjectStore("documentMutations")}(e),Dp(e),function(e){e.createObjectStore("remoteDocuments")}(e));let i=Bc.resolve();return n<3&&r>=3&&(0!==n&&(function(e){e.deleteObjectStore("targetDocuments"),e.deleteObjectStore("targets"),e.deleteObjectStore("targetGlobal")}(e),Dp(e)),i=i.next((()=>function(e){const t=e.store("targetGlobal"),n={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:Ic.min().toTimestamp(),targetCount:0};return t.put("targetGlobalKey",n)}(s)))),n<4&&r>=4&&(0!==n&&(i=i.next((()=>function(e,t){return t.store("mutations").K().next((n=>{e.deleteObjectStore("mutations"),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Sd,{unique:!0});const r=t.store("mutations"),s=n.map((e=>r.put(e)));return Bc.waitFor(s)}))}(e,s)))),i=i.next((()=>{!function(e){e.createObjectStore("clientMetadata",{keyPath:"clientId"})}(e)}))),n<5&&r>=5&&(i=i.next((()=>this.Bs(s)))),n<6&&r>=6&&(i=i.next((()=>(function(e){e.createObjectStore("remoteDocumentGlobal")}(e),this.Ls(s))))),n<7&&r>=7&&(i=i.next((()=>this.Us(s)))),n<8&&r>=8&&(i=i.next((()=>this.qs(e,s)))),n<9&&r>=9&&(i=i.next((()=>{!function(e){e.objectStoreNames.contains("remoteDocumentChanges")&&e.deleteObjectStore("remoteDocumentChanges")}(e)}))),n<10&&r>=10&&(i=i.next((()=>this.Ks(s)))),n<11&&r>=11&&(i=i.next((()=>{!function(e){e.createObjectStore("bundles",{keyPath:"bundleId"})}(e),function(e){e.createObjectStore("namedQueries",{keyPath:"name"})}(e)}))),n<12&&r>=12&&(i=i.next((()=>{!function(e){const t=e.createObjectStore("documentOverlays",{keyPath:Bd});t.createIndex("collectionPathOverlayIndex",Ud,{unique:!1}),t.createIndex("collectionGroupOverlayIndex",jd,{unique:!1})}(e)}))),n<13&&r>=13&&(i=i.next((()=>function(e){const t=e.createObjectStore("remoteDocumentsV14",{keyPath:Cd});t.createIndex("documentKeyIndex",Ad),t.createIndex("collectionGroupIndex",kd)}(e))).next((()=>this.Gs(e,s))).next((()=>e.deleteObjectStore("remoteDocuments")))),n<14&&r>=14&&(i=i.next((()=>this.Qs(e,s)))),n<15&&r>=15&&(i=i.next((()=>function(e){e.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),e.createObjectStore("indexState",{keyPath:Md}).createIndex("sequenceNumberIndex",Fd,{unique:!1}),e.createObjectStore("indexEntries",{keyPath:Vd}).createIndex("documentKeyIndex",Pd,{unique:!1})}(e)))),i}Ls(e){let t=0;return e.store("remoteDocuments").J(((e,n)=>{t+=jf(n)})).next((()=>{const n={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",n)}))}Bs(e){const t=e.store("mutationQueues"),n=e.store("mutations");return t.K().next((t=>Bc.forEach(t,(t=>{const r=IDBKeyRange.bound([t.userId,-1],[t.userId,t.lastAcknowledgedBatchId]);return n.K("userMutationsIndex",r).next((n=>Bc.forEach(n,(n=>{tc(n.userId===t.userId);const r=of(this.wt,n);return Uf(e,t.userId,r).next((()=>{}))}))))}))))}Us(e){const t=e.store("targetDocuments"),n=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next((e=>{const r=[];return n.J(((n,s)=>{const i=new Ec(n),o=function(e){return[0,bd(e)]}(i);r.push(t.get(o).next((n=>n?Bc.resolve():(n=>t.put({targetId:0,path:bd(n),sequenceNumber:e.highestListenSequenceNumber}))(i))))})).next((()=>Bc.waitFor(r)))}))}qs(e,t){e.createObjectStore("collectionParents",{keyPath:Rd});const n=t.store("collectionParents"),r=new kf,s=e=>{if(r.add(e)){const t=e.lastSegment(),r=e.popLast();return n.put({collectionId:t,parent:bd(r)})}};return t.store("remoteDocuments").J({H:!0},((e,t)=>{const n=new Ec(e);return s(n.popLast())})).next((()=>t.store("documentMutations").J({H:!0},(([e,t,n],r)=>{const i=Ed(t);return s(i.popLast())}))))}Ks(e){const t=e.store("targets");return t.J(((e,n)=>{const r=af(n),s=cf(this.wt,r);return t.put(s)}))}Gs(e,t){const n=t.store("remoteDocuments"),r=[];return n.J(((e,n)=>{const s=t.store("remoteDocumentsV14"),i=(o=n,o.document?new xc(Ec.fromString(o.document.name).popFirst(5)):o.noDocument?xc.fromSegments(o.noDocument.path):o.unknownDocument?xc.fromSegments(o.unknownDocument.path):ec()).path.toArray();var o;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a={prefixPath:i.slice(0,i.length-2),collectionGroup:i[i.length-2],documentId:i[i.length-1],readTime:n.readTime||[0,0],unknownDocument:n.unknownDocument,noDocument:n.noDocument,document:n.document,hasCommittedMutations:!!n.hasCommittedMutations};r.push(s.put(a))})).next((()=>Bc.waitFor(r)))}Qs(e,t){const n=t.store("mutations"),r=op(this.wt),s=new Ep(Tp.Os,this.wt.ne);return n.K().next((e=>{const n=new Map;return e.forEach((e=>{var t;let r=null!==(t=n.get(e.userId))&&void 0!==t?t:Dh();of(this.wt,e).keys().forEach((e=>r=r.add(e))),n.set(e.userId,r)})),Bc.forEach(n,((e,n)=>{const i=new Ga(n),o=gf.se(this.wt,i),a=s.getIndexManager(i),c=qf.se(i,this.wt,a,s.referenceDelegate);return new pp(r,c,o,a).recalculateAndSaveOverlaysForDocumentKeys(new Wd(t,Xc.ot),e).next()}))}))}}function Dp(e){e.createObjectStore("targetDocuments",{keyPath:Ld}).createIndex("documentTargetsIndex",Od,{unique:!0}),e.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",Nd,{unique:!0}),e.createObjectStore("targetGlobal")}const Cp="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Ap{constructor(e,t,n,r,s,i,o,a,c,u,l=15){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.js=s,this.window=i,this.document=o,this.Ws=c,this.zs=u,this.Hs=l,this.Ps=null,this.vs=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Js=null,this.inForeground=!1,this.Ys=null,this.Xs=null,this.Zs=Number.NEGATIVE_INFINITY,this.ti=e=>Promise.resolve(),!Ap.V())throw new ic(sc.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new np(this,r),this.ei=t+"main",this.wt=new Zd(a),this.ni=new jc(this.ei,this.Hs,new xp(this.wt)),this.Vs=new Hf(this.referenceDelegate,this.wt),this.remoteDocumentCache=op(this.wt),this.Ds=new ff,this.window&&this.window.localStorage?this.si=this.window.localStorage:(this.si=null,!1===u&&Xa("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.ii().then((()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new ic(sc.FAILED_PRECONDITION,Cp);return this.ri(),this.oi(),this.ui(),this.runTransaction("getHighestListenSequenceNumber","readonly",(e=>this.Vs.getHighestSequenceNumber(e)))})).then((e=>{this.Ps=new Xc(e,this.Ws)})).then((()=>{this.vs=!0})).catch((e=>(this.ni&&this.ni.close(),Promise.reject(e))))}ci(e){return this.ti=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.ni.F((async t=>{null===t.newVersion&&await e()}))}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.js.enqueueAndForget((async()=>{this.started&&await this.ii()})))}ii(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",(e=>Np(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next((()=>{if(this.isPrimary)return this.ai(e).next((e=>{e||(this.isPrimary=!1,this.js.enqueueRetryable((()=>this.ti(!1))))}))})).next((()=>this.hi(e))).next((t=>this.isPrimary&&!t?this.li(e).next((()=>!1)):!!t&&this.fi(e).next((()=>!0)))))).catch((e=>{if(Kc(e))return Ya("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return Ya("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1})).then((e=>{this.isPrimary!==e&&this.js.enqueueRetryable((()=>this.ti(e))),this.isPrimary=e}))}ai(e){return kp(e).get("owner").next((e=>Bc.resolve(this.di(e))))}_i(e){return Np(e).delete(this.clientId)}async wi(){if(this.isPrimary&&!this.mi(this.Zs,18e5)){this.Zs=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",(e=>{const t=Hd(e,"clientMetadata");return t.K().next((e=>{const n=this.gi(e,18e5),r=e.filter((e=>-1===n.indexOf(e)));return Bc.forEach(r,(e=>t.delete(e.clientId))).next((()=>r))}))})).catch((()=>[]));if(this.si)for(const t of e)this.si.removeItem(this.yi(t.clientId))}}ui(){this.Xs=this.js.enqueueAfterDelay("client_metadata_refresh",4e3,(()=>this.ii().then((()=>this.wi())).then((()=>this.ui()))))}di(e){return!!e&&e.ownerId===this.clientId}hi(e){return this.zs?Bc.resolve(!0):kp(e).get("owner").next((t=>{if(null!==t&&this.mi(t.leaseTimestampMs,5e3)&&!this.pi(t.ownerId)){if(this.di(t)&&this.networkEnabled)return!0;if(!this.di(t)){if(!t.allowTabSynchronization)throw new ic(sc.FAILED_PRECONDITION,Cp);return!1}}return!(!this.networkEnabled||!this.inForeground)||Np(e).K().next((e=>void 0===this.gi(e,5e3).find((e=>{if(this.clientId!==e.clientId){const t=!this.networkEnabled&&e.networkEnabled,n=!this.inForeground&&e.inForeground,r=this.networkEnabled===e.networkEnabled;if(t||n&&r)return!0}return!1}))))})).next((e=>(this.isPrimary!==e&&Ya("IndexedDbPersistence",`Client ${e?"is":"is not"} eligible for a primary lease.`),e)))}async shutdown(){this.vs=!1,this.Ii(),this.Xs&&(this.Xs.cancel(),this.Xs=null),this.Ti(),this.Ei(),await this.ni.runTransaction("shutdown","readwrite",["owner","clientMetadata"],(e=>{const t=new Wd(e,Xc.ot);return this.li(t).next((()=>this._i(t)))})),this.ni.close(),this.Ai()}gi(e,t){return e.filter((e=>this.mi(e.updateTimeMs,t)&&!this.pi(e.clientId)))}Ri(){return this.runTransaction("getActiveClients","readonly",(e=>Np(e).K().next((e=>this.gi(e,18e5).map((e=>e.clientId))))))}get started(){return this.vs}getMutationQueue(e,t){return qf.se(e,this.wt,t,this.referenceDelegate)}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new Lf(e,this.wt.ne.databaseId)}getDocumentOverlayCache(e){return gf.se(this.wt,e)}getBundleCache(){return this.Ds}runTransaction(e,t,n){Ya("IndexedDbPersistence","Starting transaction:",e);const r="readonly"===t?"readonly":"readwrite",s=15===(i=this.Hs)?zd:14===i?Gd:13===i?Kd:12===i?$d:11===i?qd:void ec();var i;let o;return this.ni.runTransaction(e,r,s,(r=>(o=new Wd(r,this.Ps?this.Ps.next():Xc.ot),"readwrite-primary"===t?this.ai(o).next((e=>!!e||this.hi(o))).next((t=>{if(!t)throw Xa(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.js.enqueueRetryable((()=>this.ti(!1))),new ic(sc.FAILED_PRECONDITION,Fc);return n(o)})).next((e=>this.fi(o).next((()=>e)))):this.bi(o).next((()=>n(o)))))).then((e=>(o.raiseOnCommittedEvent(),e)))}bi(e){return kp(e).get("owner").next((e=>{if(null!==e&&this.mi(e.leaseTimestampMs,5e3)&&!this.pi(e.ownerId)&&!this.di(e)&&!(this.zs||this.allowTabSynchronization&&e.allowTabSynchronization))throw new ic(sc.FAILED_PRECONDITION,Cp)}))}fi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return kp(e).put("owner",t)}static V(){return jc.V()}li(e){const t=kp(e);return t.get("owner").next((e=>this.di(e)?(Ya("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):Bc.resolve()))}mi(e,t){const n=Date.now();return!(e<n-t)&&(!(e>n)||(Xa(`Detected an update time that is in the future: ${e} > ${n}`),!1))}ri(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.Ys=()=>{this.js.enqueueAndForget((()=>(this.inForeground="visible"===this.document.visibilityState,this.ii())))},this.document.addEventListener("visibilitychange",this.Ys),this.inForeground="visible"===this.document.visibilityState)}Ti(){this.Ys&&(this.document.removeEventListener("visibilitychange",this.Ys),this.Ys=null)}oi(){var e;"function"==typeof(null===(e=this.window)||void 0===e?void 0:e.addEventListener)&&(this.Js=()=>{this.Ii(),Be()&&navigator.appVersion.match(/Version\/1[45]/)&&this.js.enterRestrictedMode(!0),this.js.enqueueAndForget((()=>this.shutdown()))},this.window.addEventListener("pagehide",this.Js))}Ei(){this.Js&&(this.window.removeEventListener("pagehide",this.Js),this.Js=null)}pi(e){var t;try{const n=null!==(null===(t=this.si)||void 0===t?void 0:t.getItem(this.yi(e)));return Ya("IndexedDbPersistence",`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(e){return Xa("IndexedDbPersistence","Failed to get zombied client id.",e),!1}}Ii(){if(this.si)try{this.si.setItem(this.yi(this.clientId),String(Date.now()))}catch(Dr){Xa("Failed to set zombie client id.",Dr)}}Ai(){if(this.si)try{this.si.removeItem(this.yi(this.clientId))}catch(Dr){}}yi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function kp(e){return Hd(e,"owner")}function Np(e){return Hd(e,"clientMetadata")}function Lp(e,t){let n=e.projectId;return e.isDefaultDatabase||(n+="."+e.database),"firestore/"+t+"/"+n+"/"
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Op{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Pi=n,this.vi=r}static Vi(e,t){let n=Dh(),r=Dh();for(const s of t.docChanges)switch(s.type){case 0:n=n.add(s.doc.key);break;case 1:r=r.add(s.doc.key)}return new Op(e,t.fromCache,n,r)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rp{constructor(){this.Si=!1}initialize(e,t){this.Di=e,this.indexManager=t,this.Si=!0}getDocumentsMatchingQuery(e,t,n,r){return this.Ci(e,t).next((s=>s||this.xi(e,t,r,n))).next((n=>n||this.Ni(e,t)))}Ci(e,t){if(vl(t))return Bc.resolve(null);let n=El(t);return this.indexManager.getIndexType(e,n).next((r=>0===r?null:(null!==t.limit&&1===r&&(t=Sl(t,null,"F"),n=El(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((r=>{const s=Dh(...r);return this.Di.getDocuments(e,s).next((r=>this.indexManager.getMinOffset(e,n).next((n=>{const i=this.ki(t,r);return this.Mi(t,i,s,n.readTime)?this.Ci(e,Sl(t,null,"F")):this.Oi(e,i,t,n)}))))})))))}xi(e,t,n,r){return vl(t)||r.isEqual(Ic.min())?this.Ni(e,t):this.Di.getDocuments(e,n).next((s=>{const i=this.ki(t,s);return this.Mi(t,i,n,r)?this.Ni(e,t):(Ha()<=ct.DEBUG&&Ya("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Dl(t)),this.Oi(e,i,t,Lc(r,-1)))}))}ki(e,t){let n=new su(kl(e));return t.forEach(((t,r)=>{Cl(e,r)&&(n=n.add(r))})),n}Mi(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const s="F"===e.limitType?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}Ni(e,t){return Ha()<=ct.DEBUG&&Ya("QueryEngine","Using full collection scan to execute query:",Dl(t)),this.Di.getDocumentsMatchingQuery(e,t,Rc.min())}Oi(e,t,n,r){return this.Di.getDocumentsMatchingQuery(e,n,r).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mp{constructor(e,t,n,r){this.persistence=e,this.Fi=t,this.wt=r,this.$i=new tu(yc),this.Bi=new gh((e=>Hu(e)),Yu),this.Li=new Map,this.Ui=e.getRemoteDocumentCache(),this.Vs=e.getTargetCache(),this.Ds=e.getBundleCache(),this.qi(n)}qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new pp(this.Ui,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ui.setIndexManager(this.indexManager),this.Fi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.$i)))}}function Fp(e,t,n,r){return new Mp(e,t,n,r)}async function Vp(e,t){const n=rc(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let r;return n.mutationQueue.getAllMutationBatches(e).next((s=>(r=s,n.qi(t),n.mutationQueue.getAllMutationBatches(e)))).next((t=>{const s=[],i=[];let o=Dh();for(const e of r){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){i.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.localDocuments.getDocuments(e,o).next((e=>({Ki:e,removedBatchIds:s,addedBatchIds:i})))}))}))}function Pp(e,t){const n=rc(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const r=t.batch.keys(),s=n.Ui.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const s=n.batch,i=s.keys();let o=Bc.resolve();return i.forEach((e=>{o=o.next((()=>r.getEntry(t,e))).next((t=>{const i=n.docVersions.get(e);tc(null!==i),t.version.compareTo(i)<0&&(s.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))}))})),o.next((()=>e.mutationQueue.removeMutationBatch(t,s)))}(n,e,t,s).next((()=>s.apply(e))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=Dh();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t)))).next((()=>n.localDocuments.getDocuments(e,r)))}))}function Bp(e){const t=rc(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Vs.getLastRemoteSnapshotVersion(e)))}function Up(e,t){const n=rc(e),r=t.snapshotVersion;let s=n.$i;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const i=n.Ui.newChangeBuffer({trackRemovals:!0});s=n.$i;const o=[];t.targetChanges.forEach(((i,a)=>{const c=s.get(a);if(!c)return;o.push(n.Vs.removeMatchingKeys(e,i.removedDocuments,a).next((()=>n.Vs.addMatchingKeys(e,i.addedDocuments,a))));let u=c.withSequenceNumber(e.currentSequenceNumber);t.targetMismatches.has(a)?u=u.withResumeToken(uu.EMPTY_BYTE_STRING,Ic.min()).withLastLimboFreeSnapshotVersion(Ic.min()):i.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(i.resumeToken,r)),s=s.insert(a,u),function(e,t,n){return 0===e.resumeToken.approximateByteSize()||(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,i)&&o.push(n.Vs.updateTargetData(e,u))}));let a=vh(),c=Dh();if(t.documentUpdates.forEach((r=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),o.push(jp(e,i,t.documentUpdates).next((e=>{a=e.Gi,c=e.Qi}))),!r.isEqual(Ic.min())){const t=n.Vs.getLastRemoteSnapshotVersion(e).next((t=>n.Vs.setTargetsMetadata(e,e.currentSequenceNumber,r)));o.push(t)}return Bc.waitFor(o).next((()=>i.apply(e))).next((()=>n.localDocuments.getLocalViewOfDocuments(e,a,c))).next((()=>a))})).then((e=>(n.$i=s,e)))}function jp(e,t,n){let r=Dh(),s=Dh();return n.forEach((e=>r=r.add(e))),t.getEntries(e,r).next((e=>{let r=vh();return n.forEach(((n,i)=>{const o=e.get(n);i.isFoundDocument()!==o.isFoundDocument()&&(s=s.add(n)),i.isNoDocument()&&i.version.isEqual(Ic.min())?(t.removeEntry(n,i.readTime),r=r.insert(n,i)):!o.isValidDocument()||i.version.compareTo(o.version)>0||0===i.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(i),r=r.insert(n,i)):Ya("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",i.version)})),{Gi:r,Qi:s}}))}function qp(e,t){const n=rc(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t))))}function $p(e,t){const n=rc(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let r;return n.Vs.getTargetData(e,t).next((s=>s?(r=s,Bc.resolve(r)):n.Vs.allocateTargetId(e).next((s=>(r=new Jd(t,s,0,e.currentSequenceNumber),n.Vs.addTargetData(e,r).next((()=>r)))))))})).then((e=>{const r=n.$i.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.$i=n.$i.insert(e.targetId,e),n.Bi.set(t,e.targetId)),e}))}async function Kp(e,t,n){const r=rc(e),s=r.$i.get(t),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,(e=>r.persistence.referenceDelegate.removeTarget(e,s)))}catch(e){if(!Kc(e))throw e;Ya("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}r.$i=r.$i.remove(t),r.Bi.delete(s.target)}function Gp(e,t,n){const r=rc(e);let s=Ic.min(),i=Dh();return r.persistence.runTransaction("Execute query","readonly",(e=>function(e,t,n){const r=rc(e),s=r.Bi.get(n);return void 0!==s?Bc.resolve(r.$i.get(s)):r.Vs.getTargetData(t,n)}(r,e,El(t)).next((t=>{if(t)return s=t.lastLimboFreeSnapshotVersion,r.Vs.getMatchingKeysForTargetId(e,t.targetId).next((e=>{i=e}))})).next((()=>r.Fi.getDocumentsMatchingQuery(e,t,n?s:Ic.min(),n?i:Dh()))).next((e=>(Hp(r,Al(t),e),{documents:e,ji:i})))))}function zp(e,t){const n=rc(e),r=rc(n.Vs),s=n.$i.get(t);return s?Promise.resolve(s.target):n.persistence.runTransaction("Get target data","readonly",(e=>r.te(e,t).next((e=>e?e.target:null))))}function Wp(e,t){const n=rc(e),r=n.Li.get(t)||Ic.min();return n.persistence.runTransaction("Get new document changes","readonly",(e=>n.Ui.getAllFromCollectionGroup(e,t,Lc(r,-1),Number.MAX_SAFE_INTEGER))).then((e=>(Hp(n,t,e),e)))}function Hp(e,t,n){let r=Ic.min();n.forEach(((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)})),e.Li.set(t,r)}async function Qp(e,t,n,r){const s=rc(e);let i=Dh(),o=vh();for(const u of n){const e=t.Wi(u.metadata.name);u.document&&(i=i.add(e));const n=t.zi(u);n.setReadTime(t.Hi(u.metadata.readTime)),o=o.insert(e,n)}const a=s.Ui.newChangeBuffer({trackRemovals:!0}),c=await $p(s,function(e){return El(yl(Ec.fromString(`__bundle__/docs/${e}`)))}(r));return s.persistence.runTransaction("Apply bundle documents","readwrite",(e=>jp(e,a,o).next((t=>(a.apply(e),t))).next((t=>s.Vs.removeMatchingKeysForTargetId(e,c.targetId).next((()=>s.Vs.addMatchingKeys(e,i,c.targetId))).next((()=>s.localDocuments.getLocalViewOfDocuments(e,t.Gi,t.Qi))).next((()=>t.Gi))))))}async function Yp(e,t,n=Dh()){const r=await $p(e,El(uf(t.bundledQuery))),s=rc(e);return s.persistence.runTransaction("Save named query","readwrite",(e=>{const i=Gh(t.readTime);if(r.snapshotVersion.compareTo(i)>=0)return s.Ds.saveNamedQuery(e,t);const o=r.withResumeToken(uu.EMPTY_BYTE_STRING,i);return s.$i=s.$i.insert(o.targetId,o),s.Vs.updateTargetData(e,o).next((()=>s.Vs.removeMatchingKeysForTargetId(e,r.targetId))).next((()=>s.Vs.addMatchingKeys(e,n,r.targetId))).next((()=>s.Ds.saveNamedQuery(e,t)))}))}function Xp(e,t){return`firestore_clients_${e}_${t}`}function Jp(e,t,n){let r=`firestore_mutations_${e}_${n}`;return t.isAuthenticated()&&(r+=`_${t.uid}`),r}function Zp(e,t){return`firestore_targets_${e}_${t}`}class em{constructor(e,t,n,r){this.user=e,this.batchId=t,this.state=n,this.error=r}static Ji(e,t,n){const r=JSON.parse(n);let s,i="object"==typeof r&&-1!==["pending","acknowledged","rejected"].indexOf(r.state)&&(void 0===r.error||"object"==typeof r.error);return i&&r.error&&(i="string"==typeof r.error.message&&"string"==typeof r.error.code,i&&(s=new ic(r.error.code,r.error.message))),i?new em(e,t,r.state,s):(Xa("SharedClientState",`Failed to parse mutation state for ID '${t}': ${n}`),null)}Yi(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class tm{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static Ji(e,t){const n=JSON.parse(t);let r,s="object"==typeof n&&-1!==["not-current","current","rejected"].indexOf(n.state)&&(void 0===n.error||"object"==typeof n.error);return s&&n.error&&(s="string"==typeof n.error.message&&"string"==typeof n.error.code,s&&(r=new ic(n.error.code,n.error.message))),s?new tm(e,n.state,r):(Xa("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}Yi(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class nm{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Ji(e,t){const n=JSON.parse(t);let r="object"==typeof n&&n.activeTargetIds instanceof Array,s=Ah();for(let i=0;r&&i<n.activeTargetIds.length;++i)r=Iu(n.activeTargetIds[i]),s=s.add(n.activeTargetIds[i]);return r?new nm(e,s):(Xa("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class rm{constructor(e,t){this.clientId=e,this.onlineState=t}static Ji(e){const t=JSON.parse(e);return"object"==typeof t&&-1!==["Unknown","Online","Offline"].indexOf(t.onlineState)&&"string"==typeof t.clientId?new rm(t.clientId,t.onlineState):(Xa("SharedClientState",`Failed to parse online state: ${e}`),null)}}class sm{constructor(){this.activeTargetIds=Ah()}Xi(e){this.activeTargetIds=this.activeTargetIds.add(e)}Zi(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Yi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class im{constructor(e,t,n,r,s){this.window=e,this.js=t,this.persistenceKey=n,this.tr=r,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.er=this.nr.bind(this),this.sr=new tu(yc),this.started=!1,this.ir=[];const i=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.rr=Xp(this.persistenceKey,this.tr),this.ur=function(e){return`firestore_sequence_number_${e}`}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.persistenceKey),this.sr=this.sr.insert(this.tr,new sm),this.cr=new RegExp(`^firestore_clients_${i}_([^_]*)$`),this.ar=new RegExp(`^firestore_mutations_${i}_(\\d+)(?:_(.*))?$`),this.hr=new RegExp(`^firestore_targets_${i}_(\\d+)$`),this.lr=function(e){return`firestore_online_state_${e}`}(this.persistenceKey),this.dr=function(e){return`firestore_bundle_loaded_v2_${e}`}(this.persistenceKey),this.window.addEventListener("storage",this.er)}static V(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Ri();for(const n of e){if(n===this.tr)continue;const e=this.getItem(Xp(this.persistenceKey,n));if(e){const t=nm.Ji(n,e);t&&(this.sr=this.sr.insert(t.clientId,t))}}this._r();const t=this.storage.getItem(this.lr);if(t){const e=this.wr(t);e&&this.mr(e)}for(const n of this.ir)this.nr(n);this.ir=[],this.window.addEventListener("pagehide",(()=>this.shutdown())),this.started=!0}writeSequenceNumber(e){this.setItem(this.ur,JSON.stringify(e))}getAllActiveQueryTargets(){return this.gr(this.sr)}isActiveQueryTarget(e){let t=!1;return this.sr.forEach(((n,r)=>{r.activeTargetIds.has(e)&&(t=!0)})),t}addPendingMutation(e){this.yr(e,"pending")}updateMutationState(e,t,n){this.yr(e,t,n),this.pr(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const n=this.storage.getItem(Zp(this.persistenceKey,e));if(n){const r=tm.Ji(e,n);r&&(t=r.state)}}return this.Ir.Xi(e),this._r(),t}removeLocalQueryTarget(e){this.Ir.Zi(e),this._r()}isLocalQueryTarget(e){return this.Ir.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Zp(this.persistenceKey,e))}updateQueryState(e,t,n){this.Tr(e,t,n)}handleUserChange(e,t,n){t.forEach((e=>{this.pr(e)})),this.currentUser=e,n.forEach((e=>{this.addPendingMutation(e)}))}setOnlineState(e){this.Er(e)}notifyBundleLoaded(e){this.Ar(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.er),this.removeItem(this.rr),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return Ya("SharedClientState","READ",e,t),t}setItem(e,t){Ya("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){Ya("SharedClientState","REMOVE",e),this.storage.removeItem(e)}nr(e){const t=e;if(t.storageArea===this.storage){if(Ya("SharedClientState","EVENT",t.key,t.newValue),t.key===this.rr)return void Xa("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.js.enqueueRetryable((async()=>{if(this.started){if(null!==t.key)if(this.cr.test(t.key)){if(null==t.newValue){const e=this.Rr(t.key);return this.br(e,null)}{const e=this.Pr(t.key,t.newValue);if(e)return this.br(e.clientId,e)}}else if(this.ar.test(t.key)){if(null!==t.newValue){const e=this.vr(t.key,t.newValue);if(e)return this.Vr(e)}}else if(this.hr.test(t.key)){if(null!==t.newValue){const e=this.Sr(t.key,t.newValue);if(e)return this.Dr(e)}}else if(t.key===this.lr){if(null!==t.newValue){const e=this.wr(t.newValue);if(e)return this.mr(e)}}else if(t.key===this.ur){const e=function(e){let t=Xc.ot;if(null!=e)try{const n=JSON.parse(e);tc("number"==typeof n),t=n}catch(e){Xa("SharedClientState","Failed to read sequence number from WebStorage",e)}return t}(t.newValue);e!==Xc.ot&&this.sequenceNumberHandler(e)}else if(t.key===this.dr){const e=this.Cr(t.newValue);await Promise.all(e.map((e=>this.syncEngine.Nr(e))))}}else this.ir.push(t)}))}}get Ir(){return this.sr.get(this.tr)}_r(){this.setItem(this.rr,this.Ir.Yi())}yr(e,t,n){const r=new em(this.currentUser,e,t,n),s=Jp(this.persistenceKey,this.currentUser,e);this.setItem(s,r.Yi())}pr(e){const t=Jp(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Er(e){const t={clientId:this.tr,onlineState:e};this.storage.setItem(this.lr,JSON.stringify(t))}Tr(e,t,n){const r=Zp(this.persistenceKey,e),s=new tm(e,t,n);this.setItem(r,s.Yi())}Ar(e){const t=JSON.stringify(Array.from(e));this.setItem(this.dr,t)}Rr(e){const t=this.cr.exec(e);return t?t[1]:null}Pr(e,t){const n=this.Rr(e);return nm.Ji(n,t)}vr(e,t){const n=this.ar.exec(e),r=Number(n[1]),s=void 0!==n[2]?n[2]:null;return em.Ji(new Ga(s),r,t)}Sr(e,t){const n=this.hr.exec(e),r=Number(n[1]);return tm.Ji(r,t)}wr(e){return rm.Ji(e)}Cr(e){return JSON.parse(e)}async Vr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.kr(e.batchId,e.state,e.error);Ya("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Dr(e){return this.syncEngine.Mr(e.targetId,e.state,e.error)}br(e,t){const n=t?this.sr.insert(e,t):this.sr.remove(e),r=this.gr(this.sr),s=this.gr(n),i=[],o=[];return s.forEach((e=>{r.has(e)||i.push(e)})),r.forEach((e=>{s.has(e)||o.push(e)})),this.syncEngine.Or(i,o).then((()=>{this.sr=n}))}mr(e){this.sr.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}gr(e){let t=Ah();return e.forEach(((e,n)=>{t=t.unionWith(n.activeTargetIds)})),t}}class om{constructor(){this.Fr=new sm,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Fr.Xi(e),this.$r[e]||"not-current"}updateQueryState(e,t,n){this.$r[e]=t}removeLocalQueryTarget(e){this.Fr.Zi(e)}isLocalQueryTarget(e){return this.Fr.activeTargetIds.has(e)}clearQueryState(e){delete this.$r[e]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(e){return this.Fr.activeTargetIds.has(e)}start(){return this.Fr=new sm,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{Br(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cm{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Kr(),this.Gr=[],this.Qr()}Br(e){this.Gr.push(e)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){Ya("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Gr)e(0)}Kr(){Ya("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Gr)e(1)}static V(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const um={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lm{constructor(e){this.jr=e.jr,this.Wr=e.Wr}zr(e){this.Hr=e}Jr(e){this.Yr=e}onMessage(e){this.Xr=e}close(){this.Wr()}send(e){this.jr(e)}Zr(){this.Hr()}eo(e){this.Yr(e)}no(e){this.Xr(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hm extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.so=t+"://"+e.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(e,t,n,r,s){const i=this.oo(e,t);Ya("RestConnection","Sending: ",i,n);const o={};return this.uo(o,r,s),this.co(e,i,o,n).then((e=>(Ya("RestConnection","Received: ",e),e)),(t=>{throw Ja("RestConnection",`${e} failed with error: `,t,"url: ",i,"request:",n),t}))}ao(e,t,n,r,s,i){return this.ro(e,t,n,r,s)}uo(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+za,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}oo(e,t){const n=um[e];return`${this.so}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}co(e,t,n,r){return new Promise(((s,i)=>{const o=new $a;o.listenOnce(Pa.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case Va.NO_ERROR:const t=o.getResponseJson();Ya("Connection","XHR received:",JSON.stringify(t)),s(t);break;case Va.TIMEOUT:Ya("Connection",'RPC "'+e+'" timed out'),i(new ic(sc.DEADLINE_EXCEEDED,"Request time out"));break;case Va.HTTP_ERROR:const n=o.getStatus();if(Ya("Connection",'RPC "'+e+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const e=o.getResponseJson().error;if(e&&e.status&&e.message){const t=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(sc).indexOf(t)>=0?t:sc.UNKNOWN}(e.status);i(new ic(t,e.message))}else i(new ic(sc.UNKNOWN,"Server responded with status "+o.getStatus()))}else i(new ic(sc.UNAVAILABLE,"Connection failed."));break;default:ec()}}finally{Ya("Connection",'RPC "'+e+'" completed.')}}));const a=JSON.stringify(r);o.send(t,"POST",a,n,15)}))}ho(e,t,n){const r=[this.so,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=Ma(),i=Fa(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new ja({})),this.uo(o.initMessageHeaders,t,n),Ne()||Me()||Fe()||Ve()||Pe()||Re()||(o.httpHeadersOverwriteParam="$httpHeaders");const a=r.join("");Ya("Connection","Creating WebChannel: "+a,o);const c=s.createWebChannel(a,o);let u=!1,l=!1;const h=new lm({jr:e=>{l?Ya("Connection","Not sending because WebChannel is closed:",e):(u||(Ya("Connection","Opening WebChannel transport."),c.open(),u=!0),Ya("Connection","WebChannel sending:",e),c.send(e))},Wr:()=>c.close()}),d=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return d(c,qa.EventType.OPEN,(()=>{l||Ya("Connection","WebChannel transport opened.")})),d(c,qa.EventType.CLOSE,(()=>{l||(l=!0,Ya("Connection","WebChannel transport closed"),h.eo())})),d(c,qa.EventType.ERROR,(e=>{l||(l=!0,Ja("Connection","WebChannel transport errored:",e),h.eo(new ic(sc.UNAVAILABLE,"The operation could not be completed")))})),d(c,qa.EventType.MESSAGE,(e=>{var t;if(!l){const n=e.data[0];tc(!!n);const r=n,s=r.error||(null===(t=r[0])||void 0===t?void 0:t.error);if(s){Ya("Connection","WebChannel received error:",s);const e=s.status;let t=function(e){const t=dh[e];if(void 0!==t)return mh(t)}(e),n=s.message;void 0===t&&(t=sc.INTERNAL,n="Unknown error status: "+e+" with message "+s.message),l=!0,h.eo(new ic(t,n)),c.close()}else Ya("Connection","WebChannel received:",n),h.no(n)}})),d(i,Ba.STAT_EVENT,(e=>{e.stat===Ua.PROXY?Ya("Connection","Detected buffering proxy"):e.stat===Ua.NOPROXY&&Ya("Connection","Detected no buffering proxy")})),setTimeout((()=>{h.Zr()}),0),h}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dm(){return"undefined"!=typeof window?window:null}function fm(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pm(e){return new jh(e,!0)}class mm{constructor(e,t,n=1e3,r=1.5,s=6e4){this.js=e,this.timerId=t,this.lo=n,this.fo=r,this._o=s,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(e){this.cancel();const t=Math.floor(this.wo+this.To()),n=Math.max(0,Date.now()-this.yo),r=Math.max(0,t-n);r>0&&Ya("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.wo} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,r,(()=>(this.yo=Date.now(),e()))),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){null!==this.mo&&(this.mo.skipDelay(),this.mo=null)}cancel(){null!==this.mo&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gm{constructor(e,t,n,r,s,i,o,a){this.js=e,this.Ao=n,this.Ro=r,this.bo=s,this.authCredentialsProvider=i,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Po=0,this.vo=null,this.Vo=null,this.stream=null,this.So=new mm(e,t)}Do(){return 1===this.state||5===this.state||this.Co()}Co(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&null===this.vo&&(this.vo=this.js.enqueueAfterDelay(this.Ao,6e4,(()=>this.Mo())))}Oo(e){this.Fo(),this.stream.send(e)}async Mo(){if(this.Co())return this.close(0)}Fo(){this.vo&&(this.vo.cancel(),this.vo=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(e,t){this.Fo(),this.$o(),this.So.cancel(),this.Po++,4!==e?this.So.reset():t&&t.code===sc.RESOURCE_EXHAUSTED?(Xa(t.toString()),Xa("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):t&&t.code===sc.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Bo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Jr(t)}Bo(){}auth(){this.state=1;const e=this.Lo(this.Po),t=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.Po===t&&this.Uo(e,n)}),(t=>{e((()=>{const e=new ic(sc.UNKNOWN,"Fetching auth token failed: "+t.message);return this.qo(e)}))}))}Uo(e,t){const n=this.Lo(this.Po);this.stream=this.Ko(e,t),this.stream.zr((()=>{n((()=>(this.state=2,this.Vo=this.js.enqueueAfterDelay(this.Ro,1e4,(()=>(this.Co()&&(this.state=3),Promise.resolve()))),this.listener.zr())))})),this.stream.Jr((e=>{n((()=>this.qo(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}xo(){this.state=5,this.So.Io((async()=>{this.state=0,this.start()}))}qo(e){return Ya("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Lo(e){return t=>{this.js.enqueueAndForget((()=>this.Po===e?t():(Ya("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class ym extends gm{constructor(e,t,n,r,s,i){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,i),this.wt=s}Ko(e,t){return this.bo.ho("Listen",e,t)}onMessage(e){this.So.reset();const t=rd(this.wt,e),n=function(e){if(!("targetChange"in e))return Ic.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?Ic.min():t.readTime?Gh(t.readTime):Ic.min()}(e);return this.listener.Go(t,n)}Qo(e){const t={};t.database=Jh(this.wt),t.addTarget=function(e,t){let n;const r=t.target;return n=Xu(r)?{documents:ad(e,r)}:{query:cd(e,r)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0?n.resumeToken=$h(e,t.resumeToken):t.snapshotVersion.compareTo(Ic.min())>0&&(n.readTime=qh(e,t.snapshotVersion.toTimestamp())),n}(this.wt,e);const n=ld(this.wt,e);n&&(t.labels=n),this.Oo(t)}jo(e){const t={};t.database=Jh(this.wt),t.removeTarget=e,this.Oo(t)}}class vm extends gm{constructor(e,t,n,r,s,i){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,i),this.wt=s,this.Wo=!1}get zo(){return this.Wo}start(){this.Wo=!1,this.lastStreamToken=void 0,super.start()}Bo(){this.Wo&&this.Ho([])}Ko(e,t){return this.bo.ho("Write",e,t)}onMessage(e){if(tc(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Wo){this.So.reset();const t=od(e.writeResults,e.commitTime),n=Gh(e.commitTime);return this.listener.Jo(n,t)}return tc(!e.writeResults||0===e.writeResults.length),this.Wo=!0,this.listener.Yo()}Xo(){const e={};e.database=Jh(this.wt),this.Oo(e)}Ho(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>sd(this.wt,e)))};this.Oo(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.bo=n,this.wt=r,this.Zo=!1}tu(){if(this.Zo)throw new ic(sc.FAILED_PRECONDITION,"The client has already been terminated.")}ro(e,t,n){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,s])=>this.bo.ro(e,t,n,r,s))).catch((e=>{throw"FirebaseError"===e.name?(e.code===sc.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new ic(sc.UNKNOWN,e.toString())}))}ao(e,t,n,r){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,i])=>this.bo.ao(e,t,n,s,i,r))).catch((e=>{throw"FirebaseError"===e.name?(e.code===sc.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new ic(sc.UNKNOWN,e.toString())}))}terminate(){this.Zo=!0}}class bm{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){0===this.eu&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve()))))}uu(e){"Online"===this.state?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.cu(),this.ou(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ru("Offline")))}set(e){this.cu(),this.eu=0,"Online"===e&&(this.su=!1),this.ru(e)}ru(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ou(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(Xa(t),this.su=!1):Ya("OnlineStateTracker",t)}cu(){null!==this.nu&&(this.nu.cancel(),this.nu=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im{constructor(e,t,n,r,s){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.au=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=s,this.du.Br((e=>{n.enqueueAndForget((async()=>{km(this)&&(Ya("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=rc(e);t.lu.add(4),await Em(t),t._u.set("Unknown"),t.lu.delete(4),await _m(t)}(this))}))})),this._u=new bm(n,r)}}async function _m(e){if(km(e))for(const t of e.fu)await t(!0)}async function Em(e){for(const t of e.fu)await t(!1)}function Sm(e,t){const n=rc(e);n.hu.has(t.targetId)||(n.hu.set(t.targetId,t),Am(n)?Cm(n):Hm(n).Co()&&xm(n,t))}function Tm(e,t){const n=rc(e),r=Hm(n);n.hu.delete(t),r.Co()&&Dm(n,t),0===n.hu.size&&(r.Co()?r.ko():km(n)&&n._u.set("Unknown"))}function xm(e,t){e.wu.Nt(t.targetId),Hm(e).Qo(t)}function Dm(e,t){e.wu.Nt(t),Hm(e).jo(t)}function Cm(e){e.wu=new Fh({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),te:t=>e.hu.get(t)||null}),Hm(e).start(),e._u.iu()}function Am(e){return km(e)&&!Hm(e).Do()&&e.hu.size>0}function km(e){return 0===rc(e).lu.size}function Nm(e){e.wu=void 0}async function Lm(e){e.hu.forEach(((t,n)=>{xm(e,t)}))}async function Om(e,t){Nm(e),Am(e)?(e._u.uu(t),Cm(e)):e._u.set("Unknown")}async function Rm(e,t,n){if(e._u.set("Online"),t instanceof Rh&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.hu.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.hu.delete(r),e.wu.removeTarget(r))}(e,t)}catch(n){Ya("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await Mm(e,n)}else if(t instanceof Lh?e.wu.Ut(t):t instanceof Oh?e.wu.zt(t):e.wu.Gt(t),!n.isEqual(Ic.min()))try{const t=await Bp(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.wu.Yt(t);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const s=e.hu.get(r);s&&e.hu.set(r,s.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach((t=>{const n=e.hu.get(t);if(!n)return;e.hu.set(t,n.withResumeToken(uu.EMPTY_BYTE_STRING,n.snapshotVersion)),Dm(e,t);const r=new Jd(n.target,t,1,n.sequenceNumber);xm(e,r)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){Ya("RemoteStore","Failed to raise snapshot:",t),await Mm(e,t)}}async function Mm(e,t,n){if(!Kc(t))throw t;e.lu.add(1),await Em(e),e._u.set("Offline"),n||(n=()=>Bp(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{Ya("RemoteStore","Retrying IndexedDB access"),await n(),e.lu.delete(1),await _m(e)}))}function Fm(e,t){return t().catch((n=>Mm(e,n,t)))}async function Vm(e){const t=rc(e),n=Qm(t);let r=t.au.length>0?t.au[t.au.length-1].batchId:-1;for(;Pm(t);)try{const e=await qp(t.localStore,r);if(null===e){0===t.au.length&&n.ko();break}r=e.batchId,Bm(t,e)}catch(e){await Mm(t,e)}Um(t)&&jm(t)}function Pm(e){return km(e)&&e.au.length<10}function Bm(e,t){e.au.push(t);const n=Qm(e);n.Co()&&n.zo&&n.Ho(t.mutations)}function Um(e){return km(e)&&!Qm(e).Do()&&e.au.length>0}function jm(e){Qm(e).start()}async function qm(e){Qm(e).Xo()}async function $m(e){const t=Qm(e);for(const n of e.au)t.Ho(n.mutations)}async function Km(e,t,n){const r=e.au.shift(),s=Yd.from(r,t,n);await Fm(e,(()=>e.remoteSyncer.applySuccessfulWrite(s))),await Vm(e)}async function Gm(e,t){t&&Qm(e).zo&&await async function(e,t){if(n=t.code,ph(n)&&n!==sc.ABORTED){const n=e.au.shift();Qm(e).No(),await Fm(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await Vm(e)}var n}(e,t),Um(e)&&jm(e)}async function zm(e,t){const n=rc(e);n.asyncQueue.verifyOperationInProgress(),Ya("RemoteStore","RemoteStore received new credentials");const r=km(n);n.lu.add(3),await Em(n),r&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.lu.delete(3),await _m(n)}async function Wm(e,t){const n=rc(e);t?(n.lu.delete(2),await _m(n)):t||(n.lu.add(2),await Em(n),n._u.set("Unknown"))}function Hm(e){return e.mu||(e.mu=function(e,t,n){const r=rc(e);return r.tu(),new ym(t,r.bo,r.authCredentials,r.appCheckCredentials,r.wt,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(e.datastore,e.asyncQueue,{zr:Lm.bind(null,e),Jr:Om.bind(null,e),Go:Rm.bind(null,e)}),e.fu.push((async t=>{t?(e.mu.No(),Am(e)?Cm(e):e._u.set("Unknown")):(await e.mu.stop(),Nm(e))}))),e.mu}function Qm(e){return e.gu||(e.gu=function(e,t,n){const r=rc(e);return r.tu(),new vm(t,r.bo,r.authCredentials,r.appCheckCredentials,r.wt,n)}(e.datastore,e.asyncQueue,{zr:qm.bind(null,e),Jr:Gm.bind(null,e),Yo:$m.bind(null,e),Jo:Km.bind(null,e)}),e.fu.push((async t=>{t?(e.gu.No(),await Vm(e)):(await e.gu.stop(),e.au.length>0&&(Ya("RemoteStore",`Stopping write stream with ${e.au.length} pending writes`),e.au=[]))}))),e.gu
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Ym{constructor(e,t,n,r,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=s,this.deferred=new oc,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}static createAndSchedule(e,t,n,r,s){const i=Date.now()+n,o=new Ym(e,t,i,r,s);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new ic(sc.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Xm(e,t){if(Xa("AsyncQueue",`${t}: ${e}`),Kc(e))return new ic(sc.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jm{constructor(e){this.comparator=e?(t,n)=>e(t,n)||xc.comparator(t.key,n.key):(e,t)=>xc.comparator(e.key,t.key),this.keyedMap=bh(),this.sortedSet=new tu(this.comparator)}static emptySet(e){return new Jm(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Jm))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new Jm;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm{constructor(){this.yu=new tu(xc.comparator)}track(e){const t=e.doc.key,n=this.yu.get(t);n?0!==e.type&&3===n.type?this.yu=this.yu.insert(t,e):3===e.type&&1!==n.type?this.yu=this.yu.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.yu=this.yu.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.yu=this.yu.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.yu=this.yu.remove(t):1===e.type&&2===n.type?this.yu=this.yu.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.yu=this.yu.insert(t,{type:2,doc:e.doc}):ec():this.yu=this.yu.insert(t,e)}pu(){const e=[];return this.yu.inorderTraversal(((t,n)=>{e.push(n)})),e}}class eg{constructor(e,t,n,r,s,i,o,a){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=s,this.fromCache=i,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(e,t,n,r){const s=[];return t.forEach((e=>{s.push({type:0,doc:e})})),new eg(e,t,Jm.emptySet(t),s,n,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Tl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg{constructor(){this.Iu=void 0,this.listeners=[]}}class ng{constructor(){this.queries=new gh((e=>xl(e)),Tl),this.onlineState="Unknown",this.Tu=new Set}}async function rg(e,t){const n=rc(e),r=t.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new tg),s)try{i.Iu=await n.onListen(r)}catch(e){const n=Xm(e,`Initialization of query '${Dl(t.query)}' failed`);return void t.onError(n)}n.queries.set(r,i),i.listeners.push(t),t.Eu(n.onlineState),i.Iu&&t.Au(i.Iu)&&ag(n)}async function sg(e,t){const n=rc(e),r=t.query;let s=!1;const i=n.queries.get(r);if(i){const e=i.listeners.indexOf(t);e>=0&&(i.listeners.splice(e,1),s=0===i.listeners.length)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function ig(e,t){const n=rc(e);let r=!1;for(const s of t){const e=s.query,t=n.queries.get(e);if(t){for(const e of t.listeners)e.Au(s)&&(r=!0);t.Iu=s}}r&&ag(n)}function og(e,t,n){const r=rc(e),s=r.queries.get(t);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(t)}function ag(e){e.Tu.forEach((e=>{e.next()}))}class cg{constructor(e,t,n){this.query=e,this.Ru=t,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=n||{}}Au(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new eg(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let t=!1;return this.bu?this.vu(e)&&(this.Ru.next(e),t=!0):this.Vu(e,this.onlineState)&&(this.Su(e),t=!0),this.Pu=e,t}onError(e){this.Ru.error(e)}Eu(e){this.onlineState=e;let t=!1;return this.Pu&&!this.bu&&this.Vu(this.Pu,e)&&(this.Su(this.Pu),t=!0),t}Vu(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return(!this.options.Du||!n)&&(!e.docs.isEmpty()||"Offline"===t)}vu(e){if(e.docChanges.length>0)return!0;const t=this.Pu&&this.Pu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}Su(e){e=eg.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.bu=!0,this.Ru.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ug{constructor(e,t){this.payload=e,this.byteLength=t}Cu(){return"metadata"in this.payload}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg{constructor(e){this.wt=e}Wi(e){return Qh(this.wt,e)}zi(e){return e.metadata.exists?td(this.wt,e.document,!1):Gu.newNoDocument(this.Wi(e.metadata.name),this.Hi(e.metadata.readTime))}Hi(e){return Gh(e)}}class hg{constructor(e,t,n){this.xu=e,this.localStore=t,this.wt=n,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=dg(e)}Nu(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.payload.namedQuery)this.queries.push(e.payload.namedQuery);else if(e.payload.documentMetadata){this.documents.push({metadata:e.payload.documentMetadata}),e.payload.documentMetadata.exists||++t;const n=Ec.fromString(e.payload.documentMetadata.name);this.collectionGroups.add(n.get(n.length-2))}else e.payload.document&&(this.documents[this.documents.length-1].document=e.payload.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}ku(e){const t=new Map,n=new lg(this.wt);for(const r of e)if(r.metadata.queries){const e=n.Wi(r.metadata.name);for(const n of r.metadata.queries){const r=(t.get(n)||Dh()).add(e);t.set(n,r)}}return t}async complete(){const e=await Qp(this.localStore,new lg(this.wt),this.documents,this.xu.id),t=this.ku(this.documents);for(const n of this.queries)await Yp(this.localStore,n,t.get(n.name));return this.progress.taskState="Success",{progress:this.progress,Mu:this.collectionGroups,Ou:e}}}function dg(e){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg{constructor(e){this.key=e}}class pg{constructor(e){this.key=e}}class mg{constructor(e,t){this.query=e,this.Fu=t,this.$u=null,this.current=!1,this.Bu=Dh(),this.mutatedKeys=Dh(),this.Lu=kl(e),this.Uu=new Jm(this.Lu)}get qu(){return this.Fu}Ku(e,t){const n=t?t.Gu:new Zm,r=t?t.Uu:this.Uu;let s=t?t.mutatedKeys:this.mutatedKeys,i=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((e,t)=>{const u=r.get(e),l=Cl(this.query,t)?t:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.Qu(u,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.Lu(l,a)>0||c&&this.Lu(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(l?(i=i.add(l),s=d?s.add(e):s.delete(e)):(i=i.delete(e),s=s.delete(e)))})),null!==this.query.limit)for(;i.size>this.query.limit;){const e="F"===this.query.limitType?i.last():i.first();i=i.delete(e.key),s=s.delete(e.key),n.track({type:1,doc:e})}return{Uu:i,Gu:n,Mi:o,mutatedKeys:s}}Qu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const r=this.Uu;this.Uu=e.Uu,this.mutatedKeys=e.mutatedKeys;const s=e.Gu.pu();s.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ec()}};return n(e)-n(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.type,t.type)||this.Lu(e.doc,t.doc))),this.ju(n);const i=t?this.Wu():[],o=0===this.Bu.size&&this.current?1:0,a=o!==this.$u;return this.$u=o,0!==s.length||a?{snapshot:new eg(this.query,e.Uu,r,s,e.mutatedKeys,0===o,a,!1),zu:i}:{zu:i}}Eu(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Uu:this.Uu,Gu:new Zm,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{zu:[]}}Hu(e){return!this.Fu.has(e)&&!!this.Uu.has(e)&&!this.Uu.get(e).hasLocalMutations}ju(e){e&&(e.addedDocuments.forEach((e=>this.Fu=this.Fu.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.Fu=this.Fu.delete(e))),this.current=e.current)}Wu(){if(!this.current)return[];const e=this.Bu;this.Bu=Dh(),this.Uu.forEach((e=>{this.Hu(e.key)&&(this.Bu=this.Bu.add(e.key))}));const t=[];return e.forEach((e=>{this.Bu.has(e)||t.push(new pg(e))})),this.Bu.forEach((n=>{e.has(n)||t.push(new fg(n))})),t}Ju(e){this.Fu=e.ji,this.Bu=Dh();const t=this.Ku(e.documents);return this.applyChanges(t,!0)}Yu(){return eg.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,0===this.$u)}}class gg{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class yg{constructor(e){this.key=e,this.Xu=!1}}class vg{constructor(e,t,n,r,s,i){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=i,this.Zu={},this.tc=new gh((e=>xl(e)),Tl),this.ec=new Map,this.nc=new Set,this.sc=new tu(xc.comparator),this.ic=new Map,this.rc=new yp,this.oc={},this.uc=new Map,this.cc=Wf.Rn(),this.onlineState="Unknown",this.ac=void 0}get isPrimaryClient(){return!0===this.ac}}async function wg(e,t){const n=Hg(e);let r,s;const i=n.tc.get(t);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Yu();else{const e=await $p(n.localStore,El(t));n.isPrimaryClient&&Sm(n.remoteStore,e);const i=n.sharedClientState.addLocalQueryTarget(e.targetId);r=e.targetId,s=await bg(n,t,r,"current"===i)}return s}async function bg(e,t,n,r){e.hc=(t,n,r)=>async function(e,t,n,r){let s=t.view.Ku(n);s.Mi&&(s=await Gp(e.localStore,t.query,!1).then((({documents:e})=>t.view.Ku(e,s))));const i=r&&r.targetChanges.get(t.targetId),o=t.view.applyChanges(s,e.isPrimaryClient,i);return Og(e,t.targetId,o.zu),o.snapshot}(e,t,n,r);const s=await Gp(e.localStore,t,!0),i=new mg(t,s.ji),o=i.Ku(s.documents),a=Nh.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState),c=i.applyChanges(o,e.isPrimaryClient,a);Og(e,n,c.zu);const u=new gg(t,n,i);return e.tc.set(t,u),e.ec.has(n)?e.ec.get(n).push(t):e.ec.set(n,[t]),c.snapshot}async function Ig(e,t){const n=rc(e),r=n.tc.get(t),s=n.ec.get(r.targetId);if(s.length>1)return n.ec.set(r.targetId,s.filter((e=>!Tl(e,t)))),void n.tc.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Kp(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),Tm(n.remoteStore,r.targetId),Ng(n,r.targetId)})).catch(Pc)):(Ng(n,r.targetId),await Kp(n.localStore,r.targetId,!0))}async function _g(e,t,n){const r=Qg(e);try{const e=await function(e,t){const n=rc(e),r=bc.now(),s=t.reduce(((e,t)=>e.add(t.key)),Dh());let i,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>{let a=vh(),c=Dh();return n.Ui.getEntries(e,s).next((e=>{a=e,a.forEach(((e,t)=>{t.isValidDocument()||(c=c.add(e))}))})).next((()=>n.localDocuments.getOverlayedDocuments(e,a))).next((s=>{i=s;const o=[];for(const e of t){const t=nh(e,i.get(e.key).overlayedDocument);null!=t&&o.push(new ih(e.key,t,Ku(t.value.mapValue),Yl.exists(!0)))}return n.mutationQueue.addMutationBatch(e,r,o,t)})).next((t=>{o=t;const r=t.applyToLocalDocumentSet(i,c);return n.documentOverlayCache.saveOverlays(e,t.batchId,r)}))})).then((()=>({batchId:o.batchId,changes:Ih(i)})))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.oc[e.currentUser.toKey()];r||(r=new tu(yc)),r=r.insert(t,n),e.oc[e.currentUser.toKey()]=r}(r,e.batchId,n),await Fg(r,e.changes),await Vm(r.remoteStore)}catch(e){const t=Xm(e,"Failed to persist write");n.reject(t)}}async function Eg(e,t){const n=rc(e);try{const e=await Up(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const r=n.ic.get(t);r&&(tc(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.Xu=!0:e.modifiedDocuments.size>0?tc(r.Xu):e.removedDocuments.size>0&&(tc(r.Xu),r.Xu=!1))})),await Fg(n,e,t)}catch(e){await Pc(e)}}function Sg(e,t,n){const r=rc(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.tc.forEach(((n,r)=>{const s=r.view.Eu(t);s.snapshot&&e.push(s.snapshot)})),function(e,t){const n=rc(e);n.onlineState=t;let r=!1;n.queries.forEach(((e,n)=>{for(const s of n.listeners)s.Eu(t)&&(r=!0)})),r&&ag(n)}(r.eventManager,t),e.length&&r.Zu.Go(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Tg(e,t,n){const r=rc(e);r.sharedClientState.updateQueryState(t,"rejected",n);const s=r.ic.get(t),i=s&&s.key;if(i){let e=new tu(xc.comparator);e=e.insert(i,Gu.newNoDocument(i,Ic.min()));const n=Dh().add(i),s=new kh(Ic.min(),new Map,new su(yc),e,n);await Eg(r,s),r.sc=r.sc.remove(i),r.ic.delete(t),Mg(r)}else await Kp(r.localStore,t,!1).then((()=>Ng(r,t,n))).catch(Pc)}async function xg(e,t){const n=rc(e),r=t.batch.batchId;try{const e=await Pp(n.localStore,t);kg(n,r,null),Ag(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Fg(n,e)}catch(e){await Pc(e)}}async function Dg(e,t,n){const r=rc(e);try{const e=await function(e,t){const n=rc(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next((t=>(tc(null!==t),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t)))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r))).next((()=>n.localDocuments.getDocuments(e,r)))}))}(r.localStore,t);kg(r,t,n),Ag(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await Fg(r,e)}catch(n){await Pc(n)}}async function Cg(e,t){const n=rc(e);km(n.remoteStore)||Ya("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const e=await function(e){const t=rc(e);return t.persistence.runTransaction("Get highest unacknowledged batch id","readonly",(e=>t.mutationQueue.getHighestUnacknowledgedBatchId(e)))}(n.localStore);if(-1===e)return void t.resolve();const r=n.uc.get(e)||[];r.push(t),n.uc.set(e,r)}catch(e){const n=Xm(e,"Initialization of waitForPendingWrites() operation failed");t.reject(n)}}function Ag(e,t){(e.uc.get(t)||[]).forEach((e=>{e.resolve()})),e.uc.delete(t)}function kg(e,t,n){const r=rc(e);let s=r.oc[r.currentUser.toKey()];if(s){const e=s.get(t);e&&(n?e.reject(n):e.resolve(),s=s.remove(t)),r.oc[r.currentUser.toKey()]=s}}function Ng(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.ec.get(t))e.tc.delete(r),n&&e.Zu.lc(r,n);e.ec.delete(t),e.isPrimaryClient&&e.rc.us(t).forEach((t=>{e.rc.containsKey(t)||Lg(e,t)}))}function Lg(e,t){e.nc.delete(t.path.canonicalString());const n=e.sc.get(t);null!==n&&(Tm(e.remoteStore,n),e.sc=e.sc.remove(t),e.ic.delete(n),Mg(e))}function Og(e,t,n){for(const r of n)r instanceof fg?(e.rc.addReference(r.key,t),Rg(e,r)):r instanceof pg?(Ya("SyncEngine","Document no longer in limbo: "+r.key),e.rc.removeReference(r.key,t),e.rc.containsKey(r.key)||Lg(e,r.key)):ec()}function Rg(e,t){const n=t.key,r=n.path.canonicalString();e.sc.get(n)||e.nc.has(r)||(Ya("SyncEngine","New document in limbo: "+n),e.nc.add(r),Mg(e))}function Mg(e){for(;e.nc.size>0&&e.sc.size<e.maxConcurrentLimboResolutions;){const t=e.nc.values().next().value;e.nc.delete(t);const n=new xc(Ec.fromString(t)),r=e.cc.next();e.ic.set(r,new yg(n)),e.sc=e.sc.insert(n,r),Sm(e.remoteStore,new Jd(El(yl(n.path)),r,2,Xc.ot))}}async function Fg(e,t,n){const r=rc(e),s=[],i=[],o=[];r.tc.isEmpty()||(r.tc.forEach(((e,a)=>{o.push(r.hc(a,t,n).then((e=>{if(e){r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,e.fromCache?"not-current":"current"),s.push(e);const t=Op.Vi(a.targetId,e);i.push(t)}})))})),await Promise.all(o),r.Zu.Go(s),await async function(e,t){const n=rc(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>Bc.forEach(t,(t=>Bc.forEach(t.Pi,(r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r))).next((()=>Bc.forEach(t.vi,(r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))))))}catch(e){if(!Kc(e))throw e;Ya("LocalStore","Failed to update sequence numbers: "+e)}for(const r of t){const e=r.targetId;if(!r.fromCache){const t=n.$i.get(e),r=t.snapshotVersion,s=t.withLastLimboFreeSnapshotVersion(r);n.$i=n.$i.insert(e,s)}}}(r.localStore,i))}async function Vg(e,t){const n=rc(e);if(!n.currentUser.isEqual(t)){Ya("SyncEngine","User change. New user:",t.toKey());const e=await Vp(n.localStore,t);n.currentUser=t,function(e,t){e.uc.forEach((e=>{e.forEach((e=>{e.reject(new ic(sc.CANCELLED,t))}))})),e.uc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await Fg(n,e.Ki)}}function Pg(e,t){const n=rc(e),r=n.ic.get(t);if(r&&r.Xu)return Dh().add(r.key);{let e=Dh();const r=n.ec.get(t);if(!r)return e;for(const t of r){const r=n.tc.get(t);e=e.unionWith(r.view.qu)}return e}}async function Bg(e,t){const n=rc(e),r=await Gp(n.localStore,t.query,!0),s=t.view.Ju(r);return n.isPrimaryClient&&Og(n,t.targetId,s.zu),s}async function Ug(e,t){const n=rc(e);return Wp(n.localStore,t).then((e=>Fg(n,e)))}async function jg(e,t,n,r){const s=rc(e),i=await function(e,t){const n=rc(e),r=rc(n.mutationQueue);return n.persistence.runTransaction("Lookup mutation documents","readonly",(e=>r.yn(e,t).next((t=>t?n.localDocuments.getDocuments(e,t):Bc.resolve(null)))))}(s.localStore,t);null!==i?("pending"===n?await Vm(s.remoteStore):"acknowledged"===n||"rejected"===n?(kg(s,t,r||null),Ag(s,t),function(e,t){rc(rc(e).mutationQueue).In(t)}(s.localStore,t)):ec(),await Fg(s,i)):Ya("SyncEngine","Cannot apply mutation batch with id: "+t)}async function qg(e,t){const n=rc(e);if(Hg(n),Qg(n),!0===t&&!0!==n.ac){const e=n.sharedClientState.getAllActiveQueryTargets(),t=await $g(n,e.toArray());n.ac=!0,await Wm(n.remoteStore,!0);for(const r of t)Sm(n.remoteStore,r)}else if(!1===t&&!1!==n.ac){const e=[];let t=Promise.resolve();n.ec.forEach(((r,s)=>{n.sharedClientState.isLocalQueryTarget(s)?e.push(s):t=t.then((()=>(Ng(n,s),Kp(n.localStore,s,!0)))),Tm(n.remoteStore,s)})),await t,await $g(n,e),function(e){const t=rc(e);t.ic.forEach(((e,n)=>{Tm(t.remoteStore,n)})),t.rc.cs(),t.ic=new Map,t.sc=new tu(xc.comparator)}(n),n.ac=!1,await Wm(n.remoteStore,!1)}}async function $g(e,t,n){const r=rc(e),s=[],i=[];for(const o of t){let e;const t=r.ec.get(o);if(t&&0!==t.length){e=await $p(r.localStore,El(t[0]));for(const e of t){const t=r.tc.get(e),n=await Bg(r,t);n.snapshot&&i.push(n.snapshot)}}else{const t=await zp(r.localStore,o);e=await $p(r.localStore,t),await bg(r,Kg(t),o,!1)}s.push(e)}return r.Zu.Go(i),s}function Kg(e){return gl(e.path,e.collectionGroup,e.orderBy,e.filters,e.limit,"F",e.startAt,e.endAt)}function Gg(e){const t=rc(e);return rc(rc(t.localStore).persistence).Ri()}async function zg(e,t,n,r){const s=rc(e);if(s.ac)return void Ya("SyncEngine","Ignoring unexpected query state notification.");const i=s.ec.get(t);if(i&&i.length>0)switch(n){case"current":case"not-current":{const e=await Wp(s.localStore,Al(i[0])),r=kh.createSynthesizedRemoteEventForCurrentChange(t,"current"===n);await Fg(s,e,r);break}case"rejected":await Kp(s.localStore,t,!0),Ng(s,t,r);break;default:ec()}}async function Wg(e,t,n){const r=Hg(e);if(r.ac){for(const e of t){if(r.ec.has(e)){Ya("SyncEngine","Adding an already active target "+e);continue}const t=await zp(r.localStore,e),n=await $p(r.localStore,t);await bg(r,Kg(t),n.targetId,!1),Sm(r.remoteStore,n)}for(const e of n)r.ec.has(e)&&await Kp(r.localStore,e,!1).then((()=>{Tm(r.remoteStore,e),Ng(r,e)})).catch(Pc)}}function Hg(e){const t=rc(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Eg.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Pg.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Tg.bind(null,t),t.Zu.Go=ig.bind(null,t.eventManager),t.Zu.lc=og.bind(null,t.eventManager),t}function Qg(e){const t=rc(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=xg.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Dg.bind(null,t),t}function Yg(e,t,n){const r=rc(e);(async function(e,t,n){try{const r=await t.getMetadata();if(await function(e,t){const n=rc(e),r=Gh(t.createTime);return n.persistence.runTransaction("hasNewerBundle","readonly",(e=>n.Ds.getBundleMetadata(e,t.id))).then((e=>!!e&&e.createTime.compareTo(r)>=0))}(e.localStore,r))return await t.close(),n._completeWith(function(e){return{taskState:"Success",documentsLoaded:e.totalDocuments,bytesLoaded:e.totalBytes,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}(r)),Promise.resolve(new Set);n._updateProgress(dg(r));const s=new hg(r,e.localStore,t.wt);let i=await t.fc();for(;i;){const e=await s.Nu(i);e&&n._updateProgress(e),i=await t.fc()}const o=await s.complete();return await Fg(e,o.Ou,void 0),await function(e,t){const n=rc(e);return n.persistence.runTransaction("Save bundle","readwrite",(e=>n.Ds.saveBundleMetadata(e,t)))}(e.localStore,r),n._completeWith(o.progress),Promise.resolve(o.Mu)}catch(e){return Ja("SyncEngine",`Loading bundle failed with ${e}`),n._failWith(e),Promise.resolve(new Set)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)(r,t,n).then((e=>{r.sharedClientState.notifyBundleLoaded(e)}))}class Xg{constructor(){this.synchronizeTabs=!1}async initialize(e){this.wt=pm(e.databaseInfo.databaseId),this.sharedClientState=this.dc(e),this.persistence=this._c(e),await this.persistence.start(),this.localStore=this.wc(e),this.gcScheduler=this.mc(e,this.localStore),this.indexBackfillerScheduler=this.gc(e,this.localStore)}mc(e,t){return null}gc(e,t){return null}wc(e){return Fp(this.persistence,new Rp,e.initialUser,this.wt)}_c(e){return new Ep(Tp.Os,this.wt)}dc(e){return new om}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Jg extends Xg{constructor(e,t,n){super(),this.yc=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.yc.initialize(this,e),await Qg(this.yc.syncEngine),await Vm(this.yc.remoteStore),await this.persistence.ci((()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve())))}wc(e){return Fp(this.persistence,new Rp,e.initialUser,this.wt)}mc(e,t){const n=this.persistence.referenceDelegate.garbageCollector;return new ep(n,e.asyncQueue,t)}gc(e,t){const n=new Yc(t,this.persistence);return new Qc(e.asyncQueue,n)}_c(e){const t=Lp(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=void 0!==this.cacheSizeBytes?Bf.withCacheSize(this.cacheSizeBytes):Bf.DEFAULT;return new Ap(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,dm(),fm(),this.wt,this.sharedClientState,!!this.forceOwnership)}dc(e){return new om}}class Zg extends Jg{constructor(e,t){super(e,t,!1),this.yc=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.yc.syncEngine;this.sharedClientState instanceof im&&(this.sharedClientState.syncEngine={kr:jg.bind(null,t),Mr:zg.bind(null,t),Or:Wg.bind(null,t),Ri:Gg.bind(null,t),Nr:Ug.bind(null,t)},await this.sharedClientState.start()),await this.persistence.ci((async e=>{await qg(this.yc.syncEngine,e),this.gcScheduler&&(e&&!this.gcScheduler.started?this.gcScheduler.start():e||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(e&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():e||this.indexBackfillerScheduler.stop())}))}dc(e){const t=dm();if(!im.V(t))throw new ic(sc.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=Lp(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new im(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class ey{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>Sg(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=Vg.bind(null,this.syncEngine),await Wm(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new ng}createDatastore(e){const t=pm(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new hm(r));var r;return function(e,t,n,r){return new wm(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,r=e.asyncQueue,s=e=>Sg(this.syncEngine,e,0),i=cm.V()?new cm:new am,new Im(t,n,r,s,i);var t,n,r,s,i}createSyncEngine(e,t){return function(e,t,n,r,s,i,o){const a=new vg(e,t,n,r,s,i);return o&&(a.ac=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=rc(e);Ya("RemoteStore","RemoteStore shutting down."),t.lu.add(5),await Em(t),t.du.shutdown(),t._u.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ty(e,t=10240){let n=0;return{async read(){if(n<e.byteLength){const r={value:e.slice(n,n+t),done:!1};return n+=t,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.reject("unimplemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ic(this.observer.next,e)}error(e){this.observer.error?this.Ic(this.observer.error,e):Xa("Uncaught Error in snapshot listener:",e)}Tc(){this.muted=!0}Ic(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ry{constructor(e,t){this.Ec=e,this.wt=t,this.metadata=new oc,this.buffer=new Uint8Array,this.Ac=new TextDecoder("utf-8"),this.Rc().then((e=>{e&&e.Cu()?this.metadata.resolve(e.payload.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is\n             ${JSON.stringify(null==e?void 0:e.payload)}`))}),(e=>this.metadata.reject(e)))}close(){return this.Ec.cancel()}async getMetadata(){return this.metadata.promise}async fc(){return await this.getMetadata(),this.Rc()}async Rc(){const e=await this.bc();if(null===e)return null;const t=this.Ac.decode(e),n=Number(t);isNaN(n)&&this.Pc(`length string (${t}) is not valid number`);const r=await this.vc(n);return new ug(JSON.parse(r),e.length+n)}Vc(){return this.buffer.findIndex((e=>e==="{".charCodeAt(0)))}async bc(){for(;this.Vc()<0;)if(await this.Sc())break;if(0===this.buffer.length)return null;const e=this.Vc();e<0&&this.Pc("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async vc(e){for(;this.buffer.length<e;)await this.Sc()&&this.Pc("Reached the end of bundle when more is expected.");const t=this.Ac.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}Pc(e){throw this.Ec.cancel(),new Error(`Invalid bundle format: ${e}`)}async Sc(){const e=await this.Ec.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sy{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new ic(sc.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const t=await async function(e,t){const n=rc(e),r=Jh(n.wt)+"/documents",s={documents:t.map((e=>Hh(n.wt,e)))},i=await n.ao("BatchGetDocuments",r,s,t.length),o=new Map;i.forEach((e=>{const t=nd(n.wt,e);o.set(t.key.toString(),t)}));const a=[];return t.forEach((e=>{const t=o.get(e.toString());tc(!!t),a.push(t)})),a}(this.datastore,e);return t.forEach((e=>this.recordVersion(e))),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(e){this.lastWriteError=e}this.writtenDocs.add(e.toString())}delete(e){this.write(new uh(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach((t=>{e.delete(t.key.toString())})),e.forEach(((e,t)=>{const n=xc.fromPath(t);this.mutations.push(new lh(n,this.precondition(n)))})),await async function(e,t){const n=rc(e),r=Jh(n.wt)+"/documents",s={writes:t.map((e=>sd(n.wt,e)))};await n.ro("Commit",r,s)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw ec();t=Ic.min()}const n=this.readVersions.get(e.key.toString());if(n){if(!t.isEqual(n))throw new ic(sc.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?Yl.updateTime(t):Yl.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(Ic.min()))throw new ic(sc.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Yl.updateTime(t)}return Yl.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy{constructor(e,t,n,r,s){this.asyncQueue=e,this.datastore=t,this.options=n,this.updateFunction=r,this.deferred=s,this.Dc=n.maxAttempts,this.So=new mm(this.asyncQueue,"transaction_retry")}run(){this.Dc-=1,this.Cc()}Cc(){this.So.Io((async()=>{const e=new sy(this.datastore),t=this.xc(e);t&&t.then((t=>{this.asyncQueue.enqueueAndForget((()=>e.commit().then((()=>{this.deferred.resolve(t)})).catch((e=>{this.Nc(e)}))))})).catch((e=>{this.Nc(e)}))}))}xc(e){try{const t=this.updateFunction(e);return!wu(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}Nc(e){this.Dc>0&&this.kc(e)?(this.Dc-=1,this.asyncQueue.enqueueAndForget((()=>(this.Cc(),Promise.resolve())))):this.deferred.reject(e)}kc(e){if("FirebaseError"===e.name){const t=e.code;return"aborted"===t||"failed-precondition"===t||!ph(t)}return!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oy{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=Ga.UNAUTHENTICATED,this.clientId=gc.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{Ya("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(Ya("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ic(sc.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new oc;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Xm(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function ay(e,t){e.asyncQueue.verifyOperationInProgress(),Ya("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((async e=>{r.isEqual(e)||(await Vp(t.localStore,e),r=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e.offlineComponents=t}async function cy(e,t){e.asyncQueue.verifyOperationInProgress();const n=await uy(e);Ya("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener((e=>zm(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>zm(t.remoteStore,n))),e.onlineComponents=t}async function uy(e){return e.offlineComponents||(Ya("FirestoreClient","Using default OfflineComponentProvider"),await ay(e,new Xg)),e.offlineComponents}async function ly(e){return e.onlineComponents||(Ya("FirestoreClient","Using default OnlineComponentProvider"),await cy(e,new ey)),e.onlineComponents}function hy(e){return uy(e).then((e=>e.persistence))}function dy(e){return uy(e).then((e=>e.localStore))}function fy(e){return ly(e).then((e=>e.remoteStore))}function py(e){return ly(e).then((e=>e.syncEngine))}async function my(e){const t=await ly(e),n=t.eventManager;return n.onListen=wg.bind(null,t.syncEngine),n.onUnlisten=Ig.bind(null,t.syncEngine),n}function gy(e){return e.asyncQueue.enqueue((async()=>{const t=await hy(e),n=await fy(e);return t.setNetworkEnabled(!0),function(e){const t=rc(e);return t.lu.delete(0),_m(t)}(n)}))}function yy(e){return e.asyncQueue.enqueue((async()=>{const t=await hy(e),n=await fy(e);return t.setNetworkEnabled(!1),async function(e){const t=rc(e);t.lu.add(0),await Em(t),t._u.set("Offline")}(n)}))}function vy(e,t){const n=new oc;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){try{const r=await function(e,t){const n=rc(e);return n.persistence.runTransaction("read document","readonly",(e=>n.localDocuments.getDocument(e,t)))}(e,t);r.isFoundDocument()?n.resolve(r):r.isNoDocument()?n.resolve(null):n.reject(new ic(sc.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(e){const r=Xm(e,`Failed to get document '${t} from cache`);n.reject(r)}}(await dy(e),t,n))),n.promise}function wy(e,t,n={}){const r=new oc;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,s){const i=new ny({next:i=>{t.enqueueAndForget((()=>sg(e,o)));const a=i.docs.has(n);!a&&i.fromCache?s.reject(new ic(sc.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&i.fromCache&&r&&"server"===r.source?s.reject(new ic(sc.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):s.resolve(i)},error:e=>s.reject(e)}),o=new cg(yl(n.path),i,{includeMetadataChanges:!0,Du:!0});return rg(e,o)}(await my(e),e.asyncQueue,t,n,r))),r.promise}function by(e,t){const n=new oc;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){try{const r=await Gp(e,t,!0),s=new mg(t,r.ji),i=s.Ku(r.documents),o=s.applyChanges(i,!1);n.resolve(o.snapshot)}catch(e){const r=Xm(e,`Failed to execute query '${t} against cache`);n.reject(r)}}(await dy(e),t,n))),n.promise}function Iy(e,t,n={}){const r=new oc;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,s){const i=new ny({next:n=>{t.enqueueAndForget((()=>sg(e,o))),n.fromCache&&"server"===r.source?s.reject(new ic(sc.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):s.resolve(n)},error:e=>s.reject(e)}),o=new cg(n,i,{includeMetadataChanges:!0,Du:!0});return rg(e,o)}(await my(e),e.asyncQueue,t,n,r))),r.promise}function _y(e,t){const n=new ny(t);return e.asyncQueue.enqueueAndForget((async()=>function(e,t){rc(e).Tu.add(t),t.next()}(await my(e),n))),()=>{n.Tc(),e.asyncQueue.enqueueAndForget((async()=>function(e,t){rc(e).Tu.delete(t)}(await my(e),n)))}}function Ey(e,t,n){const r=new oc;return e.asyncQueue.enqueueAndForget((async()=>{const s=await function(e){return ly(e).then((e=>e.datastore))}(e);new iy(e.asyncQueue,s,n,t,r).run()})),r.promise}function Sy(e,t,n,r){const s=function(e,t){let n;return n="string"==typeof e?(new TextEncoder).encode(e):e,function(e,t){return new ry(e,t)}(function(e,t){if(e instanceof Uint8Array)return ty(e,t);if(e instanceof ArrayBuffer)return ty(new Uint8Array(e),t);if(e instanceof ReadableStream)return e.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(n),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(n,pm(t));e.asyncQueue.enqueueAndForget((async()=>{Yg(await py(e),s,r)}))}function Ty(e,t){return e.asyncQueue.enqueue((async()=>function(e,t){const n=rc(e);return n.persistence.runTransaction("Get named query","readonly",(e=>n.Ds.getNamedQuery(e,t)))}(await dy(e),t)))}const xy=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dy(e,t,n){if(!n)throw new ic(sc.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Cy(e,t,n,r){if(!0===t&&!0===r)throw new ic(sc.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Ay(e){if(!xc.isDocumentKey(e))throw new ic(sc.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function ky(e){if(xc.isDocumentKey(e))throw new ic(sc.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Ny(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":ec()}function Ly(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new ic(sc.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ny(e);throw new ic(sc.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}function Oy(e,t){if(t<=0)throw new ic(sc.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${t}.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ry{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new ic(sc.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new ic(sc.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Cy("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class My{constructor(e,t,n){this._authCredentials=t,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ry({}),this._settingsFrozen=!1,e instanceof vu?this._databaseId=e:(this._app=e,this._databaseId=function(e){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new ic(sc.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new vu(e.options.projectId)}(e))}get app(){if(!this._app)throw new ic(sc.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new ic(sc.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ry(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new cc;switch(e.type){case"gapi":const t=e.client;return tc(!("object"!=typeof t||null===t||!t.auth||!t.auth.getAuthHeaderValueForFirstParty)),new dc(t,e.sessionIndex||"0",e.iamToken||null);case"provider":return e.client;default:throw new ic(sc.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=xy.get(e);t&&(Ya("ComponentProvider","Removing Datastore"),xy.delete(e),t.terminate())}(this),Promise.resolve()}}function Fy(e,t,n,r={}){var s;const i=(e=Ly(e,My))._getSettings();if("firestore.googleapis.com"!==i.host&&i.host!==t&&Ja("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},i),{host:`${t}:${n}`,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=Ga.MOCK_USER;else{t=Ae(r.mockUserToken,null===(s=e._app)||void 0===s?void 0:s.options.projectId);const i=r.mockUserToken.sub||r.mockUserToken.user_id;if(!i)throw new ic(sc.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Ga(i)}e._authCredentials=new uc(new ac(t,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vy{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new By(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Vy(this.firestore,e,this._key)}}class Py{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Py(this.firestore,e,this._query)}}class By extends Py{constructor(e,t,n){super(e,t,yl(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Vy(this.firestore,null,new xc(e))}withConverter(e){return new By(this.firestore,e,this._path)}}function Uy(e,t,...n){if(e=et(e),Dy("collection","path",t),e instanceof My){const r=Ec.fromString(t,...n);return ky(r),new By(e,null,r)}{if(!(e instanceof Vy||e instanceof By))throw new ic(sc.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Ec.fromString(t,...n));return ky(r),new By(e.firestore,null,r)}}function jy(e,t){if(e=Ly(e,My),Dy("collectionGroup","collection id",t),t.indexOf("/")>=0)throw new ic(sc.INVALID_ARGUMENT,`Invalid collection ID '${t}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Py(e,null,function(e){return new ml(Ec.emptyPath(),e)}(t))}function qy(e,t,...n){if(e=et(e),1===arguments.length&&(t=gc.I()),Dy("doc","path",t),e instanceof My){const r=Ec.fromString(t,...n);return Ay(r),new Vy(e,null,new xc(r))}{if(!(e instanceof Vy||e instanceof By))throw new ic(sc.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Ec.fromString(t,...n));return Ay(r),new Vy(e.firestore,e instanceof By?e.converter:null,new xc(r))}}function $y(e,t){return e=et(e),t=et(t),(e instanceof Vy||e instanceof By)&&(t instanceof Vy||t instanceof By)&&e.firestore===t.firestore&&e.path===t.path&&e.converter===t.converter}function Ky(e,t){return e=et(e),t=et(t),e instanceof Py&&t instanceof Py&&e.firestore===t.firestore&&Tl(e._query,t._query)&&e.converter===t.converter
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Gy{constructor(){this.Mc=Promise.resolve(),this.Oc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new mm(this,"async_queue_retry"),this.Kc=()=>{const e=fm();e&&Ya("AsyncQueue","Visibility state changed to "+e.visibilityState),this.So.Eo()};const e=fm();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Kc)}get isShuttingDown(){return this.Fc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Gc(),this.Qc(e)}enterRestrictedMode(e){if(!this.Fc){this.Fc=!0,this.Uc=e||!1;const t=fm();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Kc)}}enqueue(e){if(this.Gc(),this.Fc)return new Promise((()=>{}));const t=new oc;return this.Qc((()=>this.Fc&&this.Uc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Oc.push(e),this.jc())))}async jc(){if(0!==this.Oc.length){try{await this.Oc[0](),this.Oc.shift(),this.So.reset()}catch(Dr){if(!Kc(Dr))throw Dr;Ya("AsyncQueue","Operation failed with retryable error: "+Dr)}this.Oc.length>0&&this.So.Io((()=>this.jc()))}}Qc(e){const t=this.Mc.then((()=>(this.Lc=!0,e().catch((e=>{this.Bc=e,this.Lc=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e);throw Xa("INTERNAL UNHANDLED ERROR: ",t),e})).then((e=>(this.Lc=!1,e))))));return this.Mc=t,t}enqueueAfterDelay(e,t,n){this.Gc(),this.qc.indexOf(e)>-1&&(t=0);const r=Ym.createAndSchedule(this,e,t,n,(e=>this.Wc(e)));return this.$c.push(r),r}Gc(){this.Bc&&ec()}verifyOperationInProgress(){}async zc(){let e;do{e=this.Mc,await e}while(e!==this.Mc)}Hc(e){for(const t of this.$c)if(t.timerId===e)return!0;return!1}Jc(e){return this.zc().then((()=>{this.$c.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.$c)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.zc()}))}Yc(e){this.qc.push(e)}Wc(e){const t=this.$c.indexOf(e);this.$c.splice(t,1)}}function zy(e){return function(e,t){if("object"!=typeof e||null===e)return!1;const n=e;for(const r of t)if(r in n&&"function"==typeof n[r])return!0;return!1}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,["next","error","complete"])}class Wy{constructor(){this._progressObserver={},this._taskCompletionResolver=new oc,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,n){this._progressObserver={next:e,error:t,complete:n}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hy=-1;class Qy extends My{constructor(e,t,n){super(e,t,n),this.type="firestore",this._queue=new Gy,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Xy(this),this._firestoreClient.terminate()}}function Yy(e){return e._firestoreClient||Xy(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Xy(e){var t;const n=e._freezeSettings(),r=function(e,t,n,r){return new yu(e,t,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new oy(e._authCredentials,e._appCheckCredentials,e._queue,r)}function Jy(e,t){av(e=Ly(e,Qy));const n=Yy(e),r=e._freezeSettings(),s=new ey;return ev(n,s,new Jg(s,r.cacheSizeBytes,null==t?void 0:t.forceOwnership))}function Zy(e){av(e=Ly(e,Qy));const t=Yy(e),n=e._freezeSettings(),r=new ey;return ev(t,r,new Zg(r,n.cacheSizeBytes))}function ev(e,t,n){const r=new oc;return e.asyncQueue.enqueue((async()=>{try{await ay(e,n),await cy(e,t),r.resolve()}catch(e){const n=e;if(!function(e){return"FirebaseError"===e.name?e.code===sc.FAILED_PRECONDITION||e.code===sc.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||(22===e.code||20===e.code||11===e.code)}(n))throw n;Ja("Error enabling offline persistence. Falling back to persistence disabled: "+n),r.reject(n)}})).then((()=>r.promise))}function tv(e){if(e._initialized&&!e._terminated)throw new ic(sc.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const t=new oc;return e._queue.enqueueAndForgetEvenWhileRestricted((async()=>{try{await async function(e){if(!jc.V())return Promise.resolve();const t=e+"main";await jc.delete(t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(Lp(e._databaseId,e._persistenceKey)),t.resolve()}catch(e){t.reject(e)}})),t.promise}function nv(e){return function(e){const t=new oc;return e.asyncQueue.enqueueAndForget((async()=>Cg(await py(e),t))),t.promise}(Yy(e=Ly(e,Qy)))}function rv(e){return gy(Yy(e=Ly(e,Qy)))}function sv(e){return yy(Yy(e=Ly(e,Qy)))}function iv(e,t){const n=Yy(e=Ly(e,Qy)),r=new Wy;return Sy(n,e._databaseId,t,r),r}function ov(e,t){return Ty(Yy(e=Ly(e,Qy)),t).then((t=>t?new Py(e,null,t.query):null))}function av(e){if(e._initialized||e._terminated)throw new ic(sc.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cv{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new ic(sc.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Tc(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class uv{constructor(e){this._byteString=e}static fromBase64String(e){try{return new uv(uu.fromBase64String(e))}catch(e){throw new ic(sc.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new uv(uu.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lv{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hv{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ic(sc.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ic(sc.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return yc(this._lat,e._lat)||yc(this._long,e._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dv=/^__.*__$/;class fv{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new ih(e,this.data,this.fieldMask,t,this.fieldTransforms):new sh(e,this.data,t,this.fieldTransforms)}}class pv{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new ih(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function mv(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ec()}}class gv{constructor(e,t,n,r,s,i){this.settings=e,this.databaseId=t,this.wt=n,this.ignoreUndefinedProperties=r,void 0===s&&this.Xc(),this.fieldTransforms=s||[],this.fieldMask=i||[]}get path(){return this.settings.path}get Zc(){return this.settings.Zc}ta(e){return new gv(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.wt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ea(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.ta({path:n,na:!1});return r.sa(e),r}ia(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.ta({path:n,na:!1});return r.Xc(),r}ra(e){return this.ta({path:void 0,na:!0})}oa(e){return Fv(e,this.settings.methodName,this.settings.ua||!1,this.path,this.settings.ca)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}Xc(){if(this.path)for(let e=0;e<this.path.length;e++)this.sa(this.path.get(e))}sa(e){if(0===e.length)throw this.oa("Document fields must not be empty");if(mv(this.Zc)&&dv.test(e))throw this.oa('Document fields cannot begin and end with "__"')}}class yv{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.wt=n||pm(e)}aa(e,t,n,r=!1){return new gv({Zc:e,methodName:t,ca:n,path:Tc.emptyPath(),na:!1,ua:r},this.databaseId,this.wt,this.ignoreUndefinedProperties)}}function vv(e){const t=e._freezeSettings(),n=pm(e._databaseId);return new yv(e._databaseId,!!t.ignoreUndefinedProperties,n)}function wv(e,t,n,r,s,i={}){const o=e.aa(i.merge||i.mergeFields?2:0,t,n,s);Lv("Data must be an object, but it was:",o,r);const a=kv(r,o);let c,u;if(i.merge)c=new au(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const e=[];for(const r of i.mergeFields){const s=Ov(t,r,n);if(!o.contains(s))throw new ic(sc.INVALID_ARGUMENT,`Field '${s}' is specified in your field mask but missing from your input data.`);Vv(e,s)||e.push(s)}c=new au(e),u=o.fieldTransforms.filter((e=>c.covers(e.field)))}else c=null,u=o.fieldTransforms;return new fv(new $u(a),c,u)}class bv extends lv{_toFieldTransform(e){if(2!==e.Zc)throw 1===e.Zc?e.oa(`${this._methodName}() can only appear at the top level of your update data`):e.oa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof bv}}function Iv(e,t,n){return new gv({Zc:3,ca:t.settings.ca,methodName:e._methodName,na:n},t.databaseId,t.wt,t.ignoreUndefinedProperties)}class _v extends lv{_toFieldTransform(e){return new Wl(e.path,new Bl)}isEqual(e){return e instanceof _v}}class Ev extends lv{constructor(e,t){super(e),this.ha=t}_toFieldTransform(e){const t=Iv(this,e,!0),n=this.ha.map((e=>Av(e,t))),r=new Ul(n);return new Wl(e.path,r)}isEqual(e){return this===e}}class Sv extends lv{constructor(e,t){super(e),this.ha=t}_toFieldTransform(e){const t=Iv(this,e,!0),n=this.ha.map((e=>Av(e,t))),r=new ql(n);return new Wl(e.path,r)}isEqual(e){return this===e}}class Tv extends lv{constructor(e,t){super(e),this.la=t}_toFieldTransform(e){const t=new Kl(e.wt,Rl(e.wt,this.la));return new Wl(e.path,t)}isEqual(e){return this===e}}function xv(e,t,n,r){const s=e.aa(1,t,n);Lv("Data must be an object, but it was:",s,r);const i=[],o=$u.empty();Zc(r,((e,r)=>{const a=Mv(t,e,n);r=et(r);const c=s.ia(a);if(r instanceof bv)i.push(a);else{const e=Av(r,c);null!=e&&(i.push(a),o.set(a,e))}}));const a=new au(i);return new pv(o,a,s.fieldTransforms)}function Dv(e,t,n,r,s,i){const o=e.aa(1,t,n),a=[Ov(t,r,n)],c=[s];if(i.length%2!=0)throw new ic(sc.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(Ov(t,i[d])),c.push(i[d+1]);const u=[],l=$u.empty();for(let d=a.length-1;d>=0;--d)if(!Vv(u,a[d])){const e=a[d];let t=c[d];t=et(t);const n=o.ia(e);if(t instanceof bv)u.push(e);else{const r=Av(t,n);null!=r&&(u.push(e),l.set(e,r))}}const h=new au(u);return new pv(l,h,o.fieldTransforms)}function Cv(e,t,n,r=!1){return Av(n,e.aa(r?4:3,t))}function Av(e,t){if(Nv(e=et(e)))return Lv("Unsupported field value:",t,e),kv(e,t);if(e instanceof lv)return function(e,t){if(!mv(t.Zc))throw t.oa(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.oa(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.na&&4!==t.Zc)throw t.oa("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const s of e){let e=Av(s,t.ra(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=et(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return Rl(t.wt,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=bc.fromDate(e);return{timestampValue:qh(t.wt,n)}}if(e instanceof bc){const n=new bc(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:qh(t.wt,n)}}if(e instanceof hv)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof uv)return{bytesValue:$h(t.wt,e._byteString)};if(e instanceof Vy){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.oa(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:zh(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.oa(`Unsupported field value: ${Ny(e)}`)}(e,t)}function kv(e,t){const n={};return eu(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Zc(e,((e,r)=>{const s=Av(r,t.ea(e));null!=s&&(n[e]=s)})),{mapValue:{fields:n}}}function Nv(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof bc||e instanceof hv||e instanceof uv||e instanceof Vy||e instanceof lv)}function Lv(e,t,n){if(!Nv(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const r=Ny(n);throw"an object"===r?t.oa(e+" a custom object"):t.oa(e+" "+r)}}function Ov(e,t,n){if((t=et(t))instanceof cv)return t._internalPath;if("string"==typeof t)return Mv(e,t);throw Fv("Field path arguments must be of type string or ",e,!1,void 0,n)}const Rv=new RegExp("[~\\*/\\[\\]]");function Mv(e,t,n){if(t.search(Rv)>=0)throw Fv(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new cv(...t.split("."))._internalPath}catch(r){throw Fv(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Fv(e,t,n,r,s){const i=r&&!r.isEmpty(),o=void 0!==s;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new ic(sc.INVALID_ARGUMENT,a+e+c)}function Vv(e,t){return e.some((e=>e.isEqual(t)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pv{constructor(e,t,n,r,s){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Vy(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new Bv(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Uv("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class Bv extends Pv{data(){return super.data()}}function Uv(e,t){return"string"==typeof t?Mv(e,t):t instanceof cv?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jv{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class qv extends Pv{constructor(e,t,n,r,s,i){super(e,t,n,r,i),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new $v(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Uv("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class $v extends qv{data(e={}){return super.data(e)}}class Kv{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new jv(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new $v(this._firestore,this._userDataWriter,n.key,n,new jv(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ic(sc.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>({type:"added",doc:new $v(e._firestore,e._userDataWriter,n.doc.key,n.doc,new jv(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter),oldIndex:-1,newIndex:t++})))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const r=new $v(e._firestore,e._userDataWriter,t.doc.key,t.doc,new jv(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let s=-1,i=-1;return 0!==t.type&&(s=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),i=n.indexOf(t.doc.key)),{type:Gv(t.type),doc:r,oldIndex:s,newIndex:i}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function Gv(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ec()}}function zv(e,t){return e instanceof qv&&t instanceof qv?e._firestore===t._firestore&&e._key.isEqual(t._key)&&(null===e._document?null===t._document:e._document.isEqual(t._document))&&e._converter===t._converter:e instanceof Kv&&t instanceof Kv&&e._firestore===t._firestore&&Ky(e.query,t.query)&&e.metadata.isEqual(t.metadata)&&e._snapshot.isEqual(t._snapshot)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wv(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new ic(sc.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Hv{}function Qv(e,...t){for(const n of t)e=n._apply(e);return e}class Yv extends Hv{constructor(e,t,n){super(),this.fa=e,this.da=t,this._a=n,this.type="where"}_apply(e){const t=vv(e.firestore),n=function(e,t,n,r,s,i,o){let a;if(s.isKeyField()){if("array-contains"===i||"array-contains-any"===i)throw new ic(sc.INVALID_ARGUMENT,`Invalid Query. You can't perform '${i}' queries on documentId().`);if("in"===i||"not-in"===i){hw(o,i);const t=[];for(const n of o)t.push(lw(r,e,n));a={arrayValue:{values:t}}}else a=lw(r,e,o)}else"in"!==i&&"not-in"!==i&&"array-contains-any"!==i||hw(o,i),a=Cv(n,t,o,"in"===i||"not-in"===i);const c=tl.create(s,i,a);return function(e,t){if(t.ht()){const n=bl(e);if(null!==n&&!n.isEqual(t.field))throw new ic(sc.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${t.field.toString()}'`);const r=wl(e);null!==r&&dw(e,t.field,r)}const n=function(e,t){for(const n of e.filters)if(t.indexOf(n.op)>=0)return n.op;return null}(e,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new ic(sc.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new ic(sc.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}(e,c),c}(e._query,"where",t,e.firestore._databaseId,this.fa,this.da,this._a);return new Py(e.firestore,e.converter,function(e,t){const n=e.filters.concat([t]);return new ml(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}(e._query,n))}}function Xv(e,t,n){const r=t,s=Uv("where",e);return new Yv(s,r,n)}class Jv extends Hv{constructor(e,t){super(),this.fa=e,this.wa=t,this.type="orderBy"}_apply(e){const t=function(e,t,n){if(null!==e.startAt)throw new ic(sc.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new ic(sc.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const r=new hl(t,n);return function(e,t){if(null===wl(e)){const n=bl(e);null!==n&&dw(e,n,t.field)}}(e,r),r}(e._query,this.fa,this.wa);return new Py(e.firestore,e.converter,function(e,t){const n=e.explicitOrderBy.concat([t]);return new ml(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}function Zv(e,t="asc"){const n=t,r=Uv("orderBy",e);return new Jv(r,n)}class ew extends Hv{constructor(e,t,n){super(),this.type=e,this.ma=t,this.ga=n}_apply(e){return new Py(e.firestore,e.converter,Sl(e._query,this.ma,this.ga))}}function tw(e){return Oy("limit",e),new ew("limit",e,"F")}function nw(e){return Oy("limitToLast",e),new ew("limitToLast",e,"L")}class rw extends Hv{constructor(e,t,n){super(),this.type=e,this.ya=t,this.pa=n}_apply(e){const t=uw(e,this.type,this.ya,this.pa);return new Py(e.firestore,e.converter,function(e,t){return new ml(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,t,e.endAt)}(e._query,t))}}function sw(...e){return new rw("startAt",e,!0)}function iw(...e){return new rw("startAfter",e,!1)}class ow extends Hv{constructor(e,t,n){super(),this.type=e,this.ya=t,this.pa=n}_apply(e){const t=uw(e,this.type,this.ya,this.pa);return new Py(e.firestore,e.converter,function(e,t){return new ml(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,t)}(e._query,t))}}function aw(...e){return new ow("endBefore",e,!1)}function cw(...e){return new ow("endAt",e,!0)}function uw(e,t,n,r){if(n[0]=et(n[0]),n[0]instanceof Pv)return function(e,t,n,r,s){if(!r)throw new ic(sc.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${n}().`);const i=[];for(const o of _l(e))if(o.field.isKeyField())i.push(Nu(t,r.key));else{const e=r.data.field(o.field);if(pu(e))throw new ic(sc.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+o.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===e){const e=o.field.canonicalString();throw new ic(sc.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${e}' (used as the orderBy) does not exist.`)}i.push(e)}return new ll(i,s)}(e._query,e.firestore._databaseId,t,n[0]._document,r);{const s=vv(e.firestore);return function(e,t,n,r,s,i){const o=e.explicitOrderBy;if(s.length>o.length)throw new ic(sc.INVALID_ARGUMENT,`Too many arguments provided to ${r}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const a=[];for(let c=0;c<s.length;c++){const i=s[c];if(o[c].field.isKeyField()){if("string"!=typeof i)throw new ic(sc.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${r}(), but got a ${typeof i}`);if(!Il(e)&&-1!==i.indexOf("/"))throw new ic(sc.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${r}() must be a plain document ID, but '${i}' contains a slash.`);const n=e.path.child(Ec.fromString(i));if(!xc.isDocumentKey(n))throw new ic(sc.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${r}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`);const s=new xc(n);a.push(Nu(t,s))}else{const e=Cv(n,r,i);a.push(e)}}return new ll(a,i)}(e._query,e.firestore._databaseId,s,t,n,r)}}function lw(e,t,n){if("string"==typeof(n=et(n))){if(""===n)throw new ic(sc.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Il(t)&&-1!==n.indexOf("/"))throw new ic(sc.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(Ec.fromString(n));if(!xc.isDocumentKey(r))throw new ic(sc.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Nu(e,new xc(r))}if(n instanceof Vy)return Nu(e,n._key);throw new ic(sc.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ny(n)}.`)}function hw(e,t){if(!Array.isArray(e)||0===e.length)throw new ic(sc.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`);if(e.length>10)throw new ic(sc.INVALID_ARGUMENT,`Invalid Query. '${t.toString()}' filters support a maximum of 10 elements in the value array.`)}function dw(e,t,n){if(!n.isEqual(t))throw new ic(sc.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fw={maxAttempts:5};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pw{convertValue(e,t="none"){switch(Su(e)){case 0:return null;case 1:return e.booleanValue;case 2:return du(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(fu(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw ec()}}convertObject(e,t){const n={};return Zc(e.fields,((e,r)=>{n[e]=this.convertValue(r,t)})),n}convertGeoPoint(e){return new hv(du(e.latitude),du(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=mu(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(gu(e));default:return null}}convertTimestamp(e){const t=hu(e);return new bc(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=Ec.fromString(e);tc(wd(n));const r=new vu(n.get(1),n.get(3)),s=new xc(n.popFirst(5));return r.isEqual(t)||Xa(`Document ${s} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mw(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}class gw extends pw{constructor(e){super(),this.firestore=e}convertBytes(e){return new uv(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Vy(this.firestore,null,t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yw{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=vv(e)}set(e,t,n){this._verifyNotCommitted();const r=vw(e,this._firestore),s=mw(r.converter,t,n),i=wv(this._dataReader,"WriteBatch.set",r._key,s,null!==r.converter,n);return this._mutations.push(i.toMutation(r._key,Yl.none())),this}update(e,t,n,...r){this._verifyNotCommitted();const s=vw(e,this._firestore);let i;return i="string"==typeof(t=et(t))||t instanceof cv?Dv(this._dataReader,"WriteBatch.update",s._key,t,n,r):xv(this._dataReader,"WriteBatch.update",s._key,t),this._mutations.push(i.toMutation(s._key,Yl.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=vw(e,this._firestore);return this._mutations=this._mutations.concat(new uh(t._key,Yl.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new ic(sc.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function vw(e,t){if((e=et(e)).firestore!==t)throw new ic(sc.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ww(e){e=Ly(e,Vy);const t=Ly(e.firestore,Qy);return wy(Yy(t),e._key).then((n=>Ow(t,e,n)))}class bw extends pw{constructor(e){super(),this.firestore=e}convertBytes(e){return new uv(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Vy(this.firestore,null,t)}}function Iw(e){e=Ly(e,Vy);const t=Ly(e.firestore,Qy),n=Yy(t),r=new bw(t);return vy(n,e._key).then((n=>new qv(t,r,e._key,n,new jv(null!==n&&n.hasLocalMutations,!0),e.converter)))}function _w(e){e=Ly(e,Vy);const t=Ly(e.firestore,Qy);return wy(Yy(t),e._key,{source:"server"}).then((n=>Ow(t,e,n)))}function Ew(e){e=Ly(e,Py);const t=Ly(e.firestore,Qy),n=Yy(t),r=new bw(t);return Wv(e._query),Iy(n,e._query).then((n=>new Kv(t,r,e,n)))}function Sw(e){e=Ly(e,Py);const t=Ly(e.firestore,Qy),n=Yy(t),r=new bw(t);return by(n,e._query).then((n=>new Kv(t,r,e,n)))}function Tw(e){e=Ly(e,Py);const t=Ly(e.firestore,Qy),n=Yy(t),r=new bw(t);return Iy(n,e._query,{source:"server"}).then((n=>new Kv(t,r,e,n)))}function xw(e,t,n){e=Ly(e,Vy);const r=Ly(e.firestore,Qy),s=mw(e.converter,t,n);return Lw(r,[wv(vv(r),"setDoc",e._key,s,null!==e.converter,n).toMutation(e._key,Yl.none())])}function Dw(e,t,n,...r){e=Ly(e,Vy);const s=Ly(e.firestore,Qy),i=vv(s);let o;return o="string"==typeof(t=et(t))||t instanceof cv?Dv(i,"updateDoc",e._key,t,n,r):xv(i,"updateDoc",e._key,t),Lw(s,[o.toMutation(e._key,Yl.exists(!0))])}function Cw(e){return Lw(Ly(e.firestore,Qy),[new uh(e._key,Yl.none())])}function Aw(e,t){const n=Ly(e.firestore,Qy),r=qy(e),s=mw(e.converter,t);return Lw(n,[wv(vv(e.firestore),"addDoc",r._key,s,null!==e.converter,{}).toMutation(r._key,Yl.exists(!1))]).then((()=>r))}function kw(e,...t){var n,r,s;e=et(e);let i={includeMetadataChanges:!1},o=0;"object"!=typeof t[o]||zy(t[o])||(i=t[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(zy(t[o])){const e=t[o];t[o]=null===(n=e.next)||void 0===n?void 0:n.bind(e),t[o+1]=null===(r=e.error)||void 0===r?void 0:r.bind(e),t[o+2]=null===(s=e.complete)||void 0===s?void 0:s.bind(e)}let c,u,l;if(e instanceof Vy)u=Ly(e.firestore,Qy),l=yl(e._key.path),c={next:n=>{t[o]&&t[o](Ow(u,e,n))},error:t[o+1],complete:t[o+2]};else{const n=Ly(e,Py);u=Ly(n.firestore,Qy),l=n._query;const r=new bw(u);c={next:e=>{t[o]&&t[o](new Kv(u,r,n,e))},error:t[o+1],complete:t[o+2]},Wv(e._query)}return function(e,t,n,r){const s=new ny(r),i=new cg(t,s,n);return e.asyncQueue.enqueueAndForget((async()=>rg(await my(e),i))),()=>{s.Tc(),e.asyncQueue.enqueueAndForget((async()=>sg(await my(e),i)))}}(Yy(u),l,a,c)}function Nw(e,t){return _y(Yy(e=Ly(e,Qy)),zy(t)?t:{next:t})}function Lw(e,t){return function(e,t){const n=new oc;return e.asyncQueue.enqueueAndForget((async()=>_g(await py(e),t,n))),n.promise}(Yy(e),t)}function Ow(e,t,n){const r=n.docs.get(t._key),s=new bw(e);return new qv(e,s,t._key,r,new jv(n.hasPendingWrites,n.fromCache),t.converter)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rw extends class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=vv(e)}get(e){const t=vw(e,this._firestore),n=new gw(this._firestore);return this._transaction.lookup([t._key]).then((e=>{if(!e||1!==e.length)return ec();const r=e[0];if(r.isFoundDocument())return new Pv(this._firestore,n,r.key,r,t.converter);if(r.isNoDocument())return new Pv(this._firestore,n,t._key,null,t.converter);throw ec()}))}set(e,t,n){const r=vw(e,this._firestore),s=mw(r.converter,t,n),i=wv(this._dataReader,"Transaction.set",r._key,s,null!==r.converter,n);return this._transaction.set(r._key,i),this}update(e,t,n,...r){const s=vw(e,this._firestore);let i;return i="string"==typeof(t=et(t))||t instanceof cv?Dv(this._dataReader,"Transaction.update",s._key,t,n,r):xv(this._dataReader,"Transaction.update",s._key,t),this._transaction.update(s._key,i),this}delete(e){const t=vw(e,this._firestore);return this._transaction.delete(t._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=vw(e,this._firestore),n=new bw(this._firestore);return super.get(e).then((e=>new qv(this._firestore,n,t._key,e._document,new jv(!1,!1),t.converter)))}}function Mw(e,t,n){e=Ly(e,Qy);const r=Object.assign(Object.assign({},fw),n);return function(e){if(e.maxAttempts<1)throw new ic(sc.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),Ey(Yy(e),(n=>t(new Rw(e,n))),r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fw(){return new bv("deleteField")}function Vw(){return new _v("serverTimestamp")}function Pw(...e){return new Ev("arrayUnion",e)}function Bw(...e){return new Sv("arrayRemove",e)}function Uw(e){return new Tv("increment",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(e,t=!0){!function(e){za=e}(An),_n(new tt("firestore",((e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=new Qy(r,new lc(e.getProvider("auth-internal")),new pc(e.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:t},n),s._setSettings(n),s}),"PUBLIC")),Rn(Ka,"3.4.14",e),Rn(Ka,"3.4.14","esm2017")}();const jw="@firebase/firestore-compat",qw="0.1.23";
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function $w(e,t){if(void 0===t)return{merge:!1};if(void 0!==t.mergeFields&&void 0!==t.merge)throw new ic("invalid-argument",`Invalid options passed to function ${e}(): You cannot specify both "merge" and "mergeFields".`);return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kw(){if("undefined"===typeof Uint8Array)throw new ic("unimplemented","Uint8Arrays are not available in this environment.")}function Gw(){if(!cu())throw new ic("unimplemented","Blobs are unavailable in Firestore in this environment.")}class zw{constructor(e){this._delegate=e}static fromBase64String(e){return Gw(),new zw(uv.fromBase64String(e))}static fromUint8Array(e){return Kw(),new zw(uv.fromUint8Array(e))}toBase64(){return Gw(),this._delegate.toBase64()}toUint8Array(){return Kw(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ww(e){return Hw(e,["next","error","complete"])}function Hw(e,t){if("object"!==typeof e||null===e)return!1;const n=e;for(const r of t)if(r in n&&"function"===typeof n[r])return!0;return!1}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qw{enableIndexedDbPersistence(e,t){return Jy(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return Zy(e._delegate)}clearIndexedDbPersistence(e){return tv(e._delegate)}}class Yw{constructor(e,t,n){this._delegate=t,this._persistenceProvider=n,this.INTERNAL={delete:()=>this.terminate()},e instanceof vu||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();e.merge||t.host===e.host||Ja("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,n={}){Fy(this._delegate,e,t,n)}enableNetwork(){return rv(this._delegate)}disableNetwork(){return sv(this._delegate)}enablePersistence(e){let t=!1,n=!1;return e&&(t=!!e.synchronizeTabs,n=!!e.experimentalForceOwningTab,Cy("synchronizeTabs",t,"experimentalForceOwningTab",n)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,n)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return nv(this._delegate)}onSnapshotsInSync(e){return Nw(this._delegate,e)}get app(){if(!this._appCompat)throw new ic("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new hb(this,Uy(this._delegate,e))}catch(t){throw rb(t,"collection()","Firestore.collection()")}}doc(e){try{return new nb(this,qy(this._delegate,e))}catch(t){throw rb(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new cb(this,jy(this._delegate,e))}catch(t){throw rb(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return Mw(this._delegate,(t=>e(new Zw(this,t))))}batch(){return Yy(this._delegate),new eb(new yw(this._delegate,(e=>Lw(this._delegate,e))))}loadBundle(e){return iv(this._delegate,e)}namedQuery(e){return ov(this._delegate,e).then((e=>e?new cb(this,e):null))}}class Xw extends pw{constructor(e){super(),this.firestore=e}convertBytes(e){return new zw(new uv(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return nb.forKey(t,this.firestore,null)}}function Jw(e){Qa(e)}class Zw{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new Xw(e)}get(e){const t=db(e);return this._delegate.get(t).then((e=>new ob(this._firestore,new qv(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,t.converter))))}set(e,t,n){const r=db(e);return n?($w("Transaction.set",n),this._delegate.set(r,t,n)):this._delegate.set(r,t),this}update(e,t,n,...r){const s=db(e);return 2===arguments.length?this._delegate.update(s,t):this._delegate.update(s,t,n,...r),this}delete(e){const t=db(e);return this._delegate.delete(t),this}}class eb{constructor(e){this._delegate=e}set(e,t,n){const r=db(e);return n?($w("WriteBatch.set",n),this._delegate.set(r,t,n)):this._delegate.set(r,t),this}update(e,t,n,...r){const s=db(e);return 2===arguments.length?this._delegate.update(s,t):this._delegate.update(s,t,n,...r),this}delete(e){const t=db(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class tb{constructor(e,t,n){this._firestore=e,this._userDataWriter=t,this._delegate=n}fromFirestore(e,t){const n=new $v(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new ab(this._firestore,n),null!==t&&void 0!==t?t:{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const n=tb.INSTANCES;let r=n.get(e);r||(r=new WeakMap,n.set(e,r));let s=r.get(t);return s||(s=new tb(e,new Xw(e),t),r.set(t,s)),s}}tb.INSTANCES=new WeakMap;class nb{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new Xw(e)}static forPath(e,t,n){if(e.length%2!==0)throw new ic("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new nb(t,new Vy(t._delegate,n,new xc(e)))}static forKey(e,t,n){return new nb(t,new Vy(t._delegate,n,e))}get id(){return this._delegate.id}get parent(){return new hb(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new hb(this.firestore,Uy(this._delegate,e))}catch(t){throw rb(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=et(e),e instanceof Vy&&$y(this._delegate,e)}set(e,t){t=$w("DocumentReference.set",t);try{return t?xw(this._delegate,e,t):xw(this._delegate,e)}catch(n){throw rb(n,"setDoc()","DocumentReference.set()")}}update(e,t,...n){try{return 1===arguments.length?Dw(this._delegate,e):Dw(this._delegate,e,t,...n)}catch(r){throw rb(r,"updateDoc()","DocumentReference.update()")}}delete(){return Cw(this._delegate)}onSnapshot(...e){const t=sb(e),n=ib(e,(e=>new ob(this.firestore,new qv(this.firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,this._delegate.converter))));return kw(this._delegate,t,n)}get(e){let t;return t="cache"===(null===e||void 0===e?void 0:e.source)?Iw(this._delegate):"server"===(null===e||void 0===e?void 0:e.source)?_w(this._delegate):ww(this._delegate),t.then((e=>new ob(this.firestore,new qv(this.firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,this._delegate.converter))))}withConverter(e){return new nb(this.firestore,e?this._delegate.withConverter(tb.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function rb(e,t,n){return e.message=e.message.replace(t,n),e}function sb(e){for(const t of e)if("object"===typeof t&&!Ww(t))return t;return{}}function ib(e,t){var n,r;let s;return s=Ww(e[0])?e[0]:Ww(e[1])?e[1]:"function"===typeof e[0]?{next:e[0],error:e[1],complete:e[2]}:{next:e[1],error:e[2],complete:e[3]},{next:e=>{s.next&&s.next(t(e))},error:null===(n=s.error)||void 0===n?void 0:n.bind(s),complete:null===(r=s.complete)||void 0===r?void 0:r.bind(s)}}class ob{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new nb(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return zv(this._delegate,e._delegate)}}class ab extends ob{data(e){const t=this._delegate.data(e);return nc(void 0!==t,"Document in a QueryDocumentSnapshot should exist"),t}}class cb{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new Xw(e)}where(e,t,n){try{return new cb(this.firestore,Qv(this._delegate,Xv(e,t,n)))}catch(r){throw rb(r,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new cb(this.firestore,Qv(this._delegate,Zv(e,t)))}catch(n){throw rb(n,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new cb(this.firestore,Qv(this._delegate,tw(e)))}catch(t){throw rb(t,"limit()","Query.limit()")}}limitToLast(e){try{return new cb(this.firestore,Qv(this._delegate,nw(e)))}catch(t){throw rb(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new cb(this.firestore,Qv(this._delegate,sw(...e)))}catch(t){throw rb(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new cb(this.firestore,Qv(this._delegate,iw(...e)))}catch(t){throw rb(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new cb(this.firestore,Qv(this._delegate,aw(...e)))}catch(t){throw rb(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new cb(this.firestore,Qv(this._delegate,cw(...e)))}catch(t){throw rb(t,"endAt()","Query.endAt()")}}isEqual(e){return Ky(this._delegate,e._delegate)}get(e){let t;return t="cache"===(null===e||void 0===e?void 0:e.source)?Sw(this._delegate):"server"===(null===e||void 0===e?void 0:e.source)?Tw(this._delegate):Ew(this._delegate),t.then((e=>new lb(this.firestore,new Kv(this.firestore._delegate,this._userDataWriter,this._delegate,e._snapshot))))}onSnapshot(...e){const t=sb(e),n=ib(e,(e=>new lb(this.firestore,new Kv(this.firestore._delegate,this._userDataWriter,this._delegate,e._snapshot))));return kw(this._delegate,t,n)}withConverter(e){return new cb(this.firestore,e?this._delegate.withConverter(tb.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class ub{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new ab(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class lb{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new cb(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map((e=>new ab(this._firestore,e)))}docChanges(e){return this._delegate.docChanges(e).map((e=>new ub(this._firestore,e)))}forEach(e,t){this._delegate.forEach((n=>{e.call(t,new ab(this._firestore,n))}))}isEqual(e){return zv(this._delegate,e._delegate)}}class hb extends cb{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new nb(this.firestore,e):null}doc(e){try{return new nb(this.firestore,void 0===e?qy(this._delegate):qy(this._delegate,e))}catch(t){throw rb(t,"doc()","CollectionReference.doc()")}}add(e){return Aw(this._delegate,e).then((e=>new nb(this.firestore,e)))}isEqual(e){return $y(this._delegate,e._delegate)}withConverter(e){return new hb(this.firestore,e?this._delegate.withConverter(tb.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function db(e){return Ly(e,Vy)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fb{constructor(...e){this._delegate=new cv(...e)}static documentId(){return new fb(Tc.keyField().canonicalString())}isEqual(e){return e=et(e),e instanceof cv&&this._delegate._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pb{constructor(e){this._delegate=e}static serverTimestamp(){const e=Vw();return e._methodName="FieldValue.serverTimestamp",new pb(e)}static delete(){const e=Fw();return e._methodName="FieldValue.delete",new pb(e)}static arrayUnion(...e){const t=Pw(...e);return t._methodName="FieldValue.arrayUnion",new pb(t)}static arrayRemove(...e){const t=Bw(...e);return t._methodName="FieldValue.arrayRemove",new pb(t)}static increment(e){const t=Uw(e);return t._methodName="FieldValue.increment",new pb(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mb={Firestore:Yw,GeoPoint:hv,Timestamp:bc,Blob:zw,Transaction:Zw,WriteBatch:eb,DocumentReference:nb,DocumentSnapshot:ob,Query:cb,QueryDocumentSnapshot:ab,QuerySnapshot:lb,CollectionReference:hb,FieldPath:fb,FieldValue:pb,setLogLevel:Jw,CACHE_SIZE_UNLIMITED:Hy};function gb(e,t){e.INTERNAL.registerComponent(new tt("firestore-compat",(e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("firestore").getImmediate();return t(n,r)}),"PUBLIC").setServiceProps(Object.assign({},mb)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yb(e){gb(e,((e,t)=>new Yw(e,t,new Qw))),e.registerVersion(jw,qw)}yb(ur);const vb={apiKey:"AIzaSyDVsydGWD3jDWycp70f8iWy1OjyRnLdY6s",authDomain:"amit-portfolio-1d20f.firebaseapp.com",projectId:"amit-portfolio-1d20f",storageBucket:"amit-portfolio-1d20f.appspot.com",messagingSenderId:"80105803323",appId:"1:80105803323:web:b5d69913060881356dd61e",measurementId:"G-6JP3FL6MQR"},wb=ur.initializeApp(vb),bb=wb.firestore(),Ib=bb.collection("inquiry"),_b=e=>Ib.add(e);var Eb={name:"ContactMe",components:{CommonContentWrapper:B,ZigZagLine:X,CircleOutline:G,SociaLinks:be},data(){return{title:"Contact me",subtitle:"Get in Touch",description:'Hey there! 🚀 Looking for someone to bring your ideas to life? I\'m your go-to! With skills in end-to-end product development, I\'m all about creativity and innovation. Let’s team up to create some epic projects that stand out.<br><br> 💡 Whether you need help with UI/UX design, web development or product development, I’ve got you covered! Hit me up if you want to chat about how we can work together—I’m just a message away! Just shoot me an email at <a\n            href="mailto:emitsahu077@gmail.com"\n            class="text-stroke-2 text-decoration-none text-h6"\n            >emitsahu077@gmail.com\n          </a>. Let’s make something awesome happen! ✌️✨',name:"",mobile:"",email:"",message:"",valid:!1,btn_loading:!1,placeholder:{name:"",mobile:"",email:"",msg:""},speed:300,counter:0}},mounted(){},methods:{submitForm(){let e=this.validateForm();if(e)return!1;this.btn_loading=!0;let t={name:this.name,mobile:this.mobile,email:this.email,message:this.message,date_time:new Date};_b(t).then(function(e){this.name="",this.mobile="",this.email="",this.message="",this.showSnakeBar("success","your response has been recorded. I'll get back to you as soon as possible")}.bind(this)).catch(function(e){this.showSnakeBar("error","Something went wrong, Please try again letter.")}.bind(this)).finally(),this.btn_loading=!1},validateForm(){let e=0;return this.validateInput(this.name,"name",!0)&&e++,this.validateMobile(this.mobile,!0)&&e++,this.validateEmail(this.email,!0)&&e++,this.validateInput(this.message,"message",!0)&&e++,e>0},validateEmail(e,t=!1){return t&&!e||e&&!/.+@.+\..+/.test(e)?(this.appendClass("email",!0),!0):(this.appendClass("email",!1),!1)},validateMobile(e,t=!1){return t&&!e||e&&!/^[6-9][0-9]{9}$/.test(e)?(this.appendClass("mobile",!0),!0):(this.appendClass("mobile",!1),!1)},validateInput(e,t,n=!1){return n&&!e?(this.appendClass(t,!0),!0):(this.appendClass(t,!1),!1)},appendClass(e,t=!0){let n=document.getElementById(e);t?n.classList.add("error"):n.classList.remove("error")},restrictChar(e){let t=new RegExp("\\d|\\.");e.ctrlKey||e.altKey||"string"!==typeof e.key||1!==e.key.length||t.test(e.key)||e.preventDefault()}}};const Sb=(0,V.Z)(Eb,[["render",pe],["__scopeId","data-v-65425544"]]);var Tb=Sb;const xb={class:"app-padding py-15 my-15",id:"about-me"};function Db(e,t,n,r,i,a){const c=(0,s.up)("qube-outline"),u=(0,s.up)("common-content-wrapper");return(0,s.wg)(),(0,s.iD)("div",xb,[(0,s._)("p",(0,s.dG)({class:"shadow-text"},e.shado_text_animation),"About me",16),(0,s.Wm)(c,{class:"spin-animation float-right",opacity:.7,stroke:"#F3B24A",style:{width:"15px"}},null,8,["opacity"]),(0,s._)("div",{class:(0,o.C_)(["",e.$vuetify.display.mobile?"mt-n2":"mt-n15"])},[(0,s.Wm)(u,{title:i.title,subtitle:i.subtitle,description:i.description},null,8,["title","subtitle","description"])],2)])}const Cb={width:"26",height:"26",viewBox:"0 0 26 26",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Ab=["stroke","fill","opacity","stroke-width"];function kb(e,t,n,r,i,o){return(0,s.wg)(),(0,s.iD)("svg",Cb,[(0,s._)("rect",{x:"1.5",y:"1.5",width:"23",height:"23",stroke:n.stroke,fill:n.fill,opacity:n.opacity,"stroke-width":n.stroke_width},null,8,Ab)])}var Nb={name:"CircleOutline",props:{stroke:{type:String,default:"#1F7949"},fill:{type:String,default:"none"},opacity:{type:String,default:"1"},stroke_width:{type:String,default:"4"}}};const Lb=(0,V.Z)(Nb,[["render",kb]]);var Ob=Lb,Rb={name:"AboutMe",components:{CommonContentWrapper:B,QubeOutline:Ob},data(){return{title:"About me",subtitle:"Know more about me",description:"Hello! My name is Amit Kumar Sahu. I'm a software developer & UI/UX Designer based in Raipur Chhattisgarh(India). I enjoy creating things that live on the internet. It all started from my college days when I start building interest in software development and decided to try editing custom themes and build a website for a college event, Fast-forward to today, I had the privilege of working at a start-up and a huge corporation. <br/> <br/>Apart from this, I like to travel and explore different places and their traditional dishes. Making handcrafts is one of my favourite hobbies."}},methods:{}};const Mb=(0,V.Z)(Rb,[["render",Db],["__scopeId","data-v-7352c6cc"]]);var Fb=Mb;const Vb={key:0,class:"d-flex justify-space-around"},Pb={class:"d-inline-flex"},Bb=(0,s._)("div",{class:"d-inline-flex align-center pl-2 text-stroke-1"},[(0,s.Uk)(" Years of"),(0,s._)("br"),(0,s.Uk)("Excellence ")],-1),Ub=(0,s._)("div",{class:"d-inline-flex"},[(0,s._)("div",{class:"d-inline-flex font-weight-bold text-stroke-2 text-h1"},"15"),(0,s._)("div",{class:"d-inline-flex align-center pl-2 text-stroke-1"},[(0,s.Uk)(" Mind blowing"),(0,s._)("br"),(0,s.Uk)(" Projects ")])],-1),jb={key:1,class:"text-center"},qb={class:""},$b={class:"text-h1 font-weight-bold text-stroke-2"},Kb=(0,s._)("div",{class:"align-center pl-2 text-stroke-1"},"Years of Excellence",-1),Gb=(0,s._)("div",{class:"mt-10"},[(0,s._)("div",{class:"text-h1 font-weight-bold text-stroke-2"},"15"),(0,s._)("div",{class:"align-center pl-2 text-stroke-1"},"Mind blowing Projects")],-1);function zb(e,t,n,r,i,a){const c=(0,s.up)("circle-outline");return(0,s.wg)(),(0,s.iD)("div",{class:(0,o.C_)(["app-padding align-center d-block py-15 my-15",e.$vuetify.display.mobile?"pt-5":"text-h6"]),id:"experience"},[(0,s._)("p",(0,s.dG)({class:"shadow-text text-center"},e.shado_text_animation),"Experience",16),e.$vuetify.display.mobile?((0,s.wg)(),(0,s.iD)("div",jb,[(0,s._)("div",qb,[(0,s._)("div",$b,(0,o.zw)(i.experience),1),Kb]),Gb])):((0,s.wg)(),(0,s.iD)("div",Vb,[(0,s._)("div",Pb,[(0,s._)("div",{class:(0,o.C_)(["d-inline-flex font-weight-bold text-stroke-2",e.$vuetify.display.mobile?"text-h2":" text-h1"])},(0,o.zw)(i.experience),3),Bb]),Ub])),(0,s.Wm)(c,{class:"float-right move-animation-3",style:{width:"15px"}})],2)}var Wb={name:"MyExperience",components:{CircleOutline:G},data(){return{title:"Experience",subtitle:"Product designer and Developer, Based in Raipur",description:"Passionate about visual design and technology. I specialized in frontend development and UI/UX design and my passion is about building elegant and professional user interfaces and websites.",experience:""}},mounted(){this.calcExperience()},methods:{calcExperience(){let e=new Date("06/01/2019"),t=new Date,n=parseInt((t-e)/864e5,10),r=parseInt(n/365),s=parseInt(n%365/30);this.experience=r+"."+s}}};const Hb=(0,V.Z)(Wb,[["render",zb]]);var Qb=Hb;function Yb(e,t,n,r,i,a){const c=(0,s.up)("zig-zag-line"),u=(0,s.up)("project-card"),l=(0,s.up)("common-content-wrapper"),h=(0,s.up)("arrow-outline");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(c,{class:"float-right move-animation-2",stroke:"#07bf13",height:e.$vuetify.display.mobile?7:10},null,8,["height"]),(0,s._)("div",{class:(0,o.C_)(["app-padding portfolio-section",e.$vuetify.display.mobile?"pt-5":"text-h6"]),id:"portfolio",style:(0,o.j5)(i.style)},[(0,s.Wm)(I,{align:"top",justify:"center","no-gutters":"",class:(0,o.C_)(e.$vuetify.display.mobile?"py-15 mt-15":"py-15 my-15")},{default:(0,s.w5)((()=>[e.$vuetify.display.mobile?(0,s.kq)("",!0):((0,s.wg)(),(0,s.j4)(C,{key:0,sm:"6",cols:"12",class:(0,o.C_)(["justify-center",a.getClassName(0)])},{default:(0,s.w5)((()=>[(0,s.Wm)(u,{project:i.project_list[0],index:0},null,8,["project"])])),_:1},8,["class"])),(0,s.Wm)(C,{sm:"6",cols:"12",class:(0,o.C_)(["text-stroke-1",e.$vuetify.display.mobile?"":"pl-6 py-6"])},{default:(0,s.w5)((()=>[(0,s.Wm)(l,{title:i.title,subtitle:i.subtitle,description:i.description},null,8,["title","subtitle","description"])])),_:1},8,["class"]),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.$vuetify.display.mobile?i.project_list:i.project_list.splice(1,10),((e,t)=>((0,s.wg)(),(0,s.j4)(C,{sm:"6",cols:"12",class:(0,o.C_)(["justify-center",a.getClassName(t)]),key:t},{default:(0,s.w5)((()=>[(0,s.Wm)(u,{project:e,index:t+1},null,8,["project","index"])])),_:2},1032,["class"])))),128))])),_:1},8,["class"])],6),(0,s.Wm)(h,{style:{width:"18px"},class:"ml-4"})],64)}var Xb=n(8434),Jb=n(9888);const Zb=(0,c.a)({name:"VCardActions",setup(e,t){let{slots:n}=t;return(0,Xb.AF)({VBtn:{variant:"text"}}),(0,Jb.L)((()=>{var e;return(0,s.Wm)("div",{class:"v-card-actions"},[null==(e=n.default)?void 0:e.call(n)])})),{}}});var eI=n(4544);function tI(e){return{aspectStyles:(0,s.Fl)((()=>{const t=Number(e.aspectRatio);return t?{paddingBottom:String(1/t*100)+"%"}:void 0}))}}const nI=(0,c.a)({name:"VResponsive",props:{aspectRatio:[String,Number],contentClass:String,...(0,eI.x)()},setup(e,t){let{slots:n}=t;const{aspectStyles:r}=tI(e),{dimensionStyles:i}=(0,eI.$)(e);return(0,Jb.L)((()=>{var t;return(0,s.Wm)("div",{class:"v-responsive",style:i.value},[(0,s.Wm)("div",{class:"v-responsive__sizer",style:r.value},null),null==(t=n.additional)?void 0:t.call(n),n.default&&(0,s.Wm)("div",{class:["v-responsive__content",e.contentClass]},[n.default()])])})),{}}});var rI=n(2385);function sI(e,t){if(!rI.cu)return;const n=t.modifiers||{},r=t.value,{handler:s,options:i}="object"===typeof r?r:{handler:r,options:{}},o=new IntersectionObserver((function(){var r;let i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],o=arguments.length>1?arguments[1]:void 0;const a=null==(r=e._observe)?void 0:r[t.instance.$.uid];if(!a)return;const c=i.some((e=>e.isIntersecting));!s||n.quiet&&!a.init||n.once&&!c&&!a.init||s(c,i,o),c&&n.once?iI(e,t):a.init=!0}),i);e._observe=Object(e._observe),e._observe[t.instance.$.uid]={init:!1,observer:o},o.observe(e)}function iI(e,t){var n;const r=null==(n=e._observe)?void 0:n[t.instance.$.uid];r&&(r.observer.unobserve(e),delete e._observe[t.instance.$.uid])}const oI={mounted:sI,unmounted:iI};var aI=oI,cI=n(4906),uI=n(4870),lI=n(9242),hI=n(131);const dI=(0,c.a)({name:"VImg",directives:{intersect:aI},props:{aspectRatio:[String,Number],alt:String,cover:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},srcset:String,width:[String,Number],...(0,cI.X)()},emits:["loadstart","load","error"],setup(e,t){let{emit:n,slots:r}=t;const i=(0,uI.iH)(""),o=(0,uI.iH)(),a=(0,uI.iH)(e.eager?"loading":"idle"),c=(0,uI.iH)(),u=(0,uI.iH)(),l=(0,s.Fl)((()=>e.src&&"object"===typeof e.src?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)})),h=(0,s.Fl)((()=>l.value.aspect||c.value/u.value||0));function d(t){if((!e.eager||!t)&&(!rI.cu||t||e.eager)){if(a.value="loading",l.value.lazySrc){const e=new Image;e.src=l.value.lazySrc,g(e,null)}l.value.src&&(0,s.Y3)((()=>{var e,t;if(n("loadstart",(null==(e=o.value)?void 0:e.currentSrc)||l.value.src),null!=(t=o.value)&&t.complete){if(o.value.naturalWidth||p(),"error"===a.value)return;h.value||g(o.value,null),f()}else h.value||g(o.value),m()}))}}function f(){var e;m(),a.value="loaded",n("load",(null==(e=o.value)?void 0:e.currentSrc)||l.value.src)}function p(){var e;a.value="error",n("error",(null==(e=o.value)?void 0:e.currentSrc)||l.value.src)}function m(){const e=o.value;e&&(i.value=e.currentSrc||e.src)}function g(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;const n=()=>{const{naturalHeight:r,naturalWidth:s}=e;r||s?(c.value=s,u.value=r):e.complete||"loading"!==a.value||null==t?(e.currentSrc.endsWith(".svg")||e.currentSrc.startsWith("data:image/svg+xml"))&&(c.value=1,u.value=1):setTimeout(n,t)};n()}(0,s.YP)((()=>e.src),(()=>{d("idle"!==a.value)})),(0,s.wF)((()=>d()));const y=(0,s.Fl)((()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover}))),v=(0,s.Fl)((()=>{var t;if(!l.value.src||"idle"===a.value)return;const n=(0,s.h)("img",{class:["v-img__img",y.value],src:l.value.src,srcset:l.value.srcset,alt:"",sizes:e.sizes,ref:o,onLoad:f,onError:p}),i=null==(t=r.sources)?void 0:t.call(r);return(0,s.Wm)(cI.J,{transition:e.transition,appear:!0},{default:()=>[(0,s.wy)(i?(0,s.Wm)("picture",{class:"v-img__picture"},[i,n]):n,[[lI.F8,"loaded"===a.value]])]})})),w=(0,s.Fl)((()=>(0,s.Wm)(cI.J,{transition:e.transition},{default:()=>[l.value.lazySrc&&"loaded"!==a.value&&(0,s.Wm)("img",{class:["v-img__img","v-img__img--preload",y.value],src:l.value.lazySrc,alt:""},null)]}))),b=(0,s.Fl)((()=>{if(r.placeholder)return(0,s.Wm)(cI.J,{transition:e.transition,appear:!0},{default:()=>[("loading"===a.value||"error"===a.value&&!r.error)&&(0,s.Wm)("div",{class:"v-img__placeholder"},[r.placeholder()])]})})),I=(0,s.Fl)((()=>{if(r.error)return(0,s.Wm)(cI.J,{transition:e.transition,appear:!0},{default:()=>["error"===a.value&&(0,s.Wm)("div",{class:"v-img__error"},[r.error()])]})})),_=(0,s.Fl)((()=>{if(e.gradient)return(0,s.Wm)("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null)})),E=(0,uI.iH)(!1);{const e=(0,s.YP)(h,(t=>{t&&(requestAnimationFrame((()=>{requestAnimationFrame((()=>{E.value=!0}))})),e())}))}return(0,Jb.L)((()=>(0,s.wy)((0,s.Wm)(nI,{class:["v-img",{"v-img--booting":!E.value}],style:{width:(0,hI.kb)("auto"===e.width?c.value:e.width)},aspectRatio:h.value,"aria-label":e.alt,role:e.alt?"img":void 0},{additional:()=>[v.value,w.value,_.value,b.value,I.value],default:r.default}),[[(0,s.Q2)("intersect"),{handler:d,options:e.options},null,{once:!0}]]))),{currentSrc:i,image:o,state:a,naturalWidth:c,naturalHeight:u}}});var fI=n(9694),pI=n(4231),mI=n(9374),gI=n(2370),yI=n(4960),vI=n(3766);const wI=(0,vI.U)({color:String,start:Boolean,end:Boolean,icon:yI.lE,image:String,...(0,fI.f)(),...(0,pI.I)(),...(0,mI.Z)(),...(0,a.Q)()}),bI=(0,c.a)({name:"VAvatar",props:wI(),setup(e,t){let{slots:n}=t;const{backgroundColorClasses:r,backgroundColorStyles:i}=(0,gI.Y5)((0,uI.Vh)(e,"color")),{densityClasses:o}=(0,fI.t)(e),{roundedClasses:a}=(0,pI.b)(e),{sizeClasses:c,sizeStyles:u}=(0,mI.t)(e);return(0,Jb.L)((()=>{var t;return(0,s.Wm)(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},r.value,o.value,a.value,c.value],style:[i.value,u.value]},{default:()=>[e.image?(0,s.Wm)(dI,{src:e.image,alt:""},null):e.icon?(0,s.Wm)(me.t,{icon:e.icon},null):null==(t=n.default)?void 0:t.call(n)]})})),{}}});function II(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"div",n=arguments.length>2?arguments[2]:void 0;return(0,c.a)({name:null!=n?n:(0,o.kC)((0,o._A)(e.replace(/__/g,"-"))),props:{tag:{type:String,default:t}},setup(t,n){let{slots:r}=n;return()=>{var n;return(0,s.h)(t.tag,{class:e},null==(n=r.default)?void 0:n.call(r))}}})}const _I=II("v-card-subtitle"),EI=II("v-card-title");var SI=n(836);const TI=(0,s.aZ)({name:"VCardItem",props:{appendAvatar:String,appendIcon:yI.lE,prependAvatar:String,prependIcon:yI.lE,subtitle:String,title:String,...(0,fI.f)()},setup(e,t){let{slots:n}=t;return(0,Jb.L)((()=>{var t,r,i,o,a,c,u,l,h;const d=!!(e.prependAvatar||e.prependIcon||n.prepend),f=!!(e.appendAvatar||e.appendIcon||n.append),p=!(!e.title&&!n.title),m=!(!e.subtitle&&!n.subtitle);return(0,s.Wm)("div",{class:"v-card-item"},[d&&(0,s.Wm)(SI.z,{key:"prepend",defaults:{VAvatar:{density:e.density,icon:e.prependIcon,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},{default:()=>[(0,s.Wm)("div",{class:"v-card-item__prepend"},[null!=(t=null==(r=n.prepend)?void 0:r.call(n))?t:(0,s.Wm)(bI,null,null)])]}),(0,s.Wm)("div",{class:"v-card-item__content"},[p&&(0,s.Wm)(EI,{key:"title"},{default:()=>[null!=(i=null==(o=n.title)?void 0:o.call(n))?i:e.title]}),m&&(0,s.Wm)(_I,{key:"subtitle"},{default:()=>[null!=(a=null==(c=n.subtitle)?void 0:c.call(n))?a:e.subtitle]}),null==(u=n.default)?void 0:u.call(n)]),f&&(0,s.Wm)(SI.z,{key:"append",defaults:{VAvatar:{density:e.density,icon:e.appendIcon,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},{default:()=>[(0,s.Wm)("div",{class:"v-card-item__append"},[null!=(l=null==(h=n.append)?void 0:h.call(n))?l:(0,s.Wm)(bI,null,null)])]})])})),{}}}),xI=II("v-card-text");var DI=n(3824),CI=n(5221),AI=n(6791),kI=n(2718),NI=n(2465),LI=n(5180),OI=n(489),RI=n(6183),MI=n(7041);const FI=(0,c.a)({name:"VCard",directives:{Ripple:DI.H},props:{appendAvatar:String,appendIcon:yI.lE,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:Boolean,prependAvatar:String,prependIcon:yI.lE,ripple:Boolean,subtitle:String,text:String,title:String,...(0,MI.x$)(),...(0,kI.m)(),...(0,fI.f)(),...(0,eI.x)(),...(0,NI.c)(),...(0,AI.fF)(),...(0,LI.y)(),...(0,OI.F)(),...(0,pI.I)(),...(0,RI.GN)(),...(0,a.Q)(),...(0,CI.bk)({variant:"elevated"})},setup(e,t){let{attrs:n,slots:r}=t;const{themeClasses:i}=(0,MI.ER)(e),{borderClasses:o}=(0,kI.P)(e),{colorClasses:a,colorStyles:c,variantClasses:u}=(0,CI.c1)(e),{densityClasses:l}=(0,fI.t)(e),{dimensionStyles:h}=(0,eI.$)(e),{elevationClasses:d}=(0,NI.Y)(e),{loaderClasses:f}=(0,AI.U2)(e),{locationStyles:p}=(0,LI.T)(e),{positionClasses:m}=(0,OI.K)(e),{roundedClasses:g}=(0,pI.b)(e),y=(0,RI.nB)(e,n);return(0,Jb.L)((()=>{var t,n,v,w,b;const I=y.isLink.value?"a":e.tag,_=!(!r.title&&!e.title),E=!(!r.subtitle&&!e.subtitle),S=_||E,T=!!(r.append||e.appendAvatar||e.appendIcon),x=!!(r.prepend||e.prependAvatar||e.prependIcon),D=!(!r.image&&!e.image),C=S||x||T,A=!(!r.text&&!e.text),k=!e.disabled&&(y.isClickable.value||e.link);return(0,s.wy)((0,s.Wm)(I,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":k},i.value,o.value,a.value,l.value,d.value,f.value,m.value,g.value,u.value],style:[c.value,h.value,p.value],href:y.href.value,onClick:k&&y.navigate},{default:()=>[D&&(0,s.Wm)(SI.z,{key:"image",defaults:{VImg:{cover:!0,src:e.image}}},{default:()=>[(0,s.Wm)("div",{class:"v-card__image"},[null!=(t=null==(n=r.image)?void 0:n.call(r))?t:(0,s.Wm)(dI,null,null)])]}),(0,s.Wm)(AI.rD,{name:"v-card",active:!!e.loading,color:"boolean"===typeof e.loading?void 0:e.loading},{default:r.loader}),C&&(0,s.Wm)(TI,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:r.item,prepend:r.prepend,title:r.title,subtitle:r.subtitle,append:r.append}),A&&(0,s.Wm)(xI,{key:"text"},{default:()=>[null!=(v=null==(w=r.text)?void 0:w.call(r))?v:e.text]}),null==(b=r.default)?void 0:b.call(r),r.actions&&(0,s.Wm)(Zb,null,{default:r.actions}),(0,CI.Ux)(k,"v-card")]}),[[(0,s.Q2)("ripple"),k]])})),{}}}),VI=["href"],PI={class:"d-flex align-center h-100"},BI={key:0,class:"project-content"},UI={class:"text-h5 text-stroke-4 font-weight-bold p-title un mb-3"},jI={class:"fs-roboto-mono project-index"},qI=(0,s.Uk)("mdi-arrow-right"),$I={key:0,class:"project-content"},KI={class:"text-h6 text-stroke-4 font-weight-bold p-title un mb-3"};function GI(e,t,n,r,i,a){return(0,s.wg)(),(0,s.iD)("a",{href:n.project.working_link,target:"_blank",class:"text-decoration-none"},[(0,s.Wm)(FI,(0,s.dG)({class:"project-card d-flex align-center bg-transparent",flat:"",color:""},e.props),{default:(0,s.w5)((()=>[(0,s._)("div",PI,[e.$vuetify.display.mobile?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("div",BI,[(0,s._)("p",UI,(0,o.zw)(n.project.title),1),(0,s._)("small",jI,[(0,s.Uk)((0,o.zw)(n.index>9?n.index:"0"+n.index)+" ",1),(0,s.Wm)(me.t,{size:"18",class:"right-arrow"},{default:(0,s.w5)((()=>[qI])),_:1})])]))]),(0,s.Wm)(dI,{"aspect-ratio":16/9,cover:"",src:n.project.image,class:(0,o.C_)(["project-img",e.$vuetify.display.mobile?"":"ml-15"]),"min-height":e.$vuetify.display.mobile?225:""},{default:(0,s.w5)((()=>[(0,s._)("div",{class:(0,o.C_)(["h-100 d-flex align-center justify-center",e.$vuetify.display.mobile?"project-img-cover-mobile":"project-img-cover"])},[e.$vuetify.display.mobile?((0,s.wg)(),(0,s.iD)("div",$I,[(0,s._)("p",KI,(0,o.zw)(n.project.title),1)])):(0,s.kq)("",!0)],2)])),_:1},8,["src","class","min-height"])])),_:1},16)],8,VI)}var zI={name:"ProjectsCard",props:["project","index"],data(){return{}},methods:{}};const WI=(0,V.Z)(zI,[["render",GI],["__scopeId","data-v-83bb25ca"]]);var HI=WI;const QI={class:"move-top",width:"23",height:"40",viewBox:"-2 0 30 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},YI=["fill","stroke","opacity","stroke-width"];function XI(e,t,n,r,i,o){return(0,s.wg)(),(0,s.iD)("svg",QI,[(0,s._)("path",{d:"M12.75 0.869358C12.1633 0.284471 11.2136 0.285926 10.6287 0.87261L1.09738 10.4332C0.512493 11.0199 0.513949 11.9696 1.10063 12.5545C1.68732 13.1394 2.63706 13.1379 3.22195 12.5512L11.6942 4.05296L20.1925 12.5252C20.7792 13.1101 21.7289 13.1087 22.3138 12.522C22.8987 11.9353 22.8972 10.9855 22.3106 10.4007L12.75 0.869358ZM13.194 3.92934L13.191 1.92934L10.191 1.93394L10.194 3.93394L13.194 3.92934Z",fill:n.fill,stroke:n.stroke,opacity:n.opacity,"stroke-width":n.stroke_width},null,8,YI)])}var JI={name:"CircleOutline",props:{stroke:{type:String,default:"#7986FD"},fill:{type:String,default:"none"},opacity:{type:String,default:"1"},stroke_width:{type:String,default:"3"}}};const ZI=(0,V.Z)(JI,[["render",XI],["__scopeId","data-v-c8600bdc"]]);var e_=ZI,t_={name:"MyProjects",components:{CommonContentWrapper:B,ProjectCard:HI,ZigZagLine:X,ArrowOutline:e_},data(){return{style:{},title:"Portfolio",subtitle:"Some Things I’ve Built",description:"I build some great products. some of my recent and note worthy project are listed here.",project_list:[{title:"Cashpo",description:"A platform which provides you Personal loans upto ₹2 lakhs instantly through a completely paperless process. Key Highlight e-Mandate/NACH, e-KYC, Auto Disbursement etc.",image:n(7285),working_link:"https://cashpo.in",tech_stack:["django","python","vue-js","html-5","sass","postgresql"]},{title:"Tutors Factory",description:"Tutors Factory the best home tutor provider have connected the 10,000+ tutors with almost 25,000+ students across the nation. It has Student portal, Tutor portal, Business Developer portal And Admin portal",image:n(4831),working_link:"https://www.tutorsfactory.com",tech_stack:["django","python","vue-js","html-5","sass","postgresql"]},{title:"Indianmentors",description:"Indianmentors is the best home tutor provider have connected the 20,000+ tutors with almost 35,000+ students across the glob. It has Student portal, Tutor portal, Business Developer portal And Admin portal",image:n(5173),working_link:"https://www.indianmentors.in/",tech_stack:["django","python","vue-js","html-5","sass","postgresql"]},{title:"Medx",description:"A Subscription Based B2B medicine delivery service. Delivering 2500+ order in a Day. This platform have some key feature Like Shipment Lifecycle, Live tracking, Wallet and Payout etc.",image:n(5829),working_link:"https://themedx.in",tech_stack:["django","python","vue-js","html-5","postgresql"]},{title:"Wednicely",description:"Wednicely is platform where you can create a e-invitation card within few minutes. It has 1000+ template and  10+ category  to choose from",image:n(6262),working_link:"https://wednicely.com/",tech_stack:["django","python","vue-js","html-5","postgresql"]},{title:"BurnBlack",description:"BurnBlack is platform who provide the financial service like ITR, GST filling, Company registration, Billing Software and other Financial Services.",image:n(6575),working_link:"https://burnblack.in/",tech_stack:["django","python","vue-js","html-5","postgresql"]},{title:"Rawfit",description:"Rawfit is subscription Based health monitoring system based on google fit. Which also provide service to book a activity session.",image:n(3120),working_link:"https://rawfit.in",tech_stack:["django","python","vue-js","html-5","postgresql"]},{description:"GimBooks is Y combinator funded startup who  helps small business owners to create and share Invoice, Quotations, E-Waybills, Payment reminders, Payment receipts and much more!",title:"GimBooks",image:n(3881),working_link:"https://www.gimbooks.com/",tech_stack:["django","python","html-5","javascript","mysql"]},{description:"Digital ayurveda is patients management platform for docters where they can manage all the medical records and drugs record.",title:"Digital Ayurved",image:n(9215),working_link:"https://digitalayurved.in/",tech_stack:["django","python","html-5","vue","vuetify","javascript","mysql"]},{description:"Spidertech is tech startup based out of Raipur Chhattisgarh focusing on providing tech support to new startups.",title:"Spider Tech",image:n(4737),working_link:"https://spidertech.in/",tech_stack:["html-5","vue","vuetify","javascript","SASS"]}]}},mounted(){this.style={backgroundImage:"url("+n(7905)+")"}},methods:{getClassName(e){console.log(e);let t="";return this.$vuetify.display.mobile?t+="py-6 px-0":t+=6==e?" px-0 py-6":e%2==0?" pr-6 py-6":" pl-6 py-6",t}}};const n_=(0,V.Z)(t_,[["render",Yb],["__scopeId","data-v-a30e5b00"]]);var r_=n_;const s_={class:"app-padding py-15 my-15 d-flex align-center",id:"my-services"},i_={class:"service-card justify-center d-flex align-center"},o_={class:"d-inline-flex"},a_={class:"d-inline-flex text-stroke-12 pl-5 text-h6"},c_=["innerHTML"];function u_(e,t,n,r,i,a){const c=(0,s.up)("triangle-outline"),u=(0,s.up)("common-content-wrapper");return(0,s.wg)(),(0,s.iD)("div",s_,[(0,s.Wm)(c,{class:"spin-animation",style:{width:"45px"}}),(0,s.Wm)(I,{align:"end",justify:"start","no-gutters":""},{default:(0,s.w5)((()=>[(0,s.Wm)(C,{xs:"12",sm:"6",md:"8",class:"justify-center text-stroke-1 pr-6 py-6"},{default:(0,s.w5)((()=>[(0,s.Wm)(u,{title:i.title,subtitle:i.subtitle,description:i.description},null,8,["title","subtitle","description"])])),_:1}),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(i.service_list,((e,t)=>((0,s.wg)(),(0,s.j4)(C,{xs:"12",sm:"6",md:"4",class:(0,o.C_)(["justify-center",a.getClassName(t)]),key:t},{default:(0,s.w5)((()=>[(0,s._)("div",i_,[(0,s._)("div",o_,[(0,s.Wm)(me.t,{class:"service-icon",size:"50"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,o.zw)(e.icon),1)])),_:2},1024)]),(0,s._)("div",a_,[(0,s._)("div",{innerHTML:e.name},null,8,c_)])])])),_:2},1032,["class"])))),128))])),_:1})])}var l_={name:"MyServices",components:{CommonContentWrapper:B,TriangleOutline:re},data(){return{title:"Services",subtitle:"How can i Help you?",description:"\nProfessionally connected with the IT industry for many years. Interested in the entire web development spectrum and working on ambitious projects with positive people.",service_list:[{name:'Web<p class="un">Development</p>',img:"services/pen.svg",icon:"mdi-web"},{name:'Backend<p class="un">Development</p>',img:"services/pen.svg",icon:"mdi-application-cog"},{name:'UI/UX<p class="un">Designing</p>',img:"services/pen.svg",icon:"mdi-fountain-pen-tip"},{name:'Product Design<p class="un">& Development</p>',img:"services/pen.svg",icon:"mdi-monitor-cellphone"}]}},methods:{getClassName(e){let t="";if(this.$vuetify.display.mobile)t+="my-6 px-2";else switch(e){case 3:case 0:t+="pl-6 my-6";break;case 1:t+="pr-6 my-6";break;case 2:t+="px-6 my-6";break}return t}}};const h_=(0,V.Z)(l_,[["render",u_],["__scopeId","data-v-8d8b5508"]]);var d_=h_;const f_={class:"mt-4"},p_=["src","alt"],m_=["innerHTML"];function g_(e,t,n,r,i,a){const c=(0,s.up)("qube-outline"),u=(0,s.up)("common-content-wrapper"),l=(0,s.up)("circle-outline");return(0,s.wg)(),(0,s.iD)("div",{class:"app-padding py-15 my-15",style:(0,o.j5)(e.style)},[(0,s.Wm)(I,{align:"end",justify:"center","no-gutters":""},{default:(0,s.w5)((()=>[(0,s.Wm)(C,{sm:"6",cols:"12",class:"justify-center text-stroke-1"},{default:(0,s.w5)((()=>[(0,s.Wm)(c,{class:"spin-animation float-right",opacity:.4,stroke:"#F85C5C",style:{width:"15px"}},null,8,["opacity"]),(0,s.Wm)(u,{title:i.title,subtitle:i.subtitle,description:i.description},null,8,["title","subtitle","description"])])),_:1}),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(i.tech_stacks,((t,n)=>((0,s.wg)(),(0,s.j4)(C,{xs:"6",sm:"3",md:"2",class:(0,o.C_)(["justify-center",e.$vuetify.display.mobile?"text-center ":" text-left"]),key:n},{default:(0,s.w5)((()=>[(0,s._)("div",{class:"skills-card align-center text-center pa-4 ma-4",style:(0,o.j5)({"--data-index":n%2==0?n:n/4})},[(0,s._)("div",f_,[(0,s._)("img",{src:t.img,alt:t.title,width:"70",style:(0,o.j5)({"--data-index":n%2==0?n:n/4})},null,12,p_),(0,s._)("p",{innerHTML:t.title},null,8,m_)])],4)])),_:2},1032,["class"])))),128))])),_:1}),(0,s.Wm)(l,{class:"move-animation-2 float-left",opacity:.8,stroke:"#1F7949",style:{width:"15px"}},null,8,["opacity"])],4)}var y_={name:"MySkills",components:{CommonContentWrapper:B,QubeOutline:Ob,CircleOutline:G},data(){return{title:"Tech Stack",subtitle:"Power of technology in my hands",description:"",tech_stacks:[{title:"Python",img:n(4395)},{title:"Django",img:n(2531)},{title:"Vue js",img:n(2148)},{title:"Vuetify",width:45,img:n(4678)},{title:"Nuxt",width:45,img:n(4140)},{title:"Javascript",img:n(9963)},{title:"Git",img:n(6325)},{title:"React",img:n(9520)},{title:"Jquery",img:n(946)},{title:"HTML5",img:n(878)},{title:"SASS",img:n(7581)},{title:"Mysql",img:n(9786)},{title:"Postgresql",img:n(9354)},{title:"Figma",img:n(2778)},{title:"AWS",img:n(2663)},{title:"firebase",img:n(7745)},{title:"Nginx",img:n(8388)},{title:"Ubuntu",img:n(7877)}]}},methods:{}};const v_=(0,V.Z)(y_,[["render",g_],["__scopeId","data-v-fbb455aa"]]);var w_=v_,b_={name:"HomePage",components:{LandingScreen:fe,ContactMe:Tb,AboutMe:Fb,MyExperience:Qb,MyServices:d_,MyProjects:r_,MySkills:w_},data(){return{}},beforeMount(){this.toggleLoading()},mounted(){},methods:{}};const I_=(0,V.Z)(b_,[["render",i]]);var __=I_}}]);
//# sourceMappingURL=about.9a1c71cd.js.map