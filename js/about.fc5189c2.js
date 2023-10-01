(self["webpackChunkamit_portfolio"]=self["webpackChunkamit_portfolio"]||[]).push([[443],{4019:function(e){e.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},260:function(e,t,n){"use strict";var r,s,i,o=n(4019),a=n(9781),c=n(7854),u=n(614),l=n(111),h=n(2597),d=n(648),f=n(6330),m=n(8880),p=n(8052),g=n(3070).f,y=n(7976),v=n(9518),w=n(7674),b=n(5112),I=n(9711),_=n(9909),E=_.enforce,T=_.get,S=c.Int8Array,x=S&&S.prototype,D=c.Uint8ClampedArray,C=D&&D.prototype,A=S&&v(S),k=x&&v(x),N=Object.prototype,L=c.TypeError,O=b("toStringTag"),R=I("TYPED_ARRAY_TAG"),M="TypedArrayConstructor",V=o&&!!w&&"Opera"!==d(c.opera),F=!1,P={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},B={BigInt64Array:8,BigUint64Array:8},U=function(e){if(!l(e))return!1;var t=d(e);return"DataView"===t||h(P,t)||h(B,t)},j=function(e){var t=v(e);if(l(t)){var n=T(t);return n&&h(n,M)?n[M]:j(t)}},q=function(e){if(!l(e))return!1;var t=d(e);return h(P,t)||h(B,t)},$=function(e){if(q(e))return e;throw L("Target is not a typed array")},K=function(e){if(u(e)&&(!w||y(A,e)))return e;throw L(f(e)+" is not a typed array constructor")},G=function(e,t,n,r){if(a){if(n)for(var s in P){var i=c[s];if(i&&h(i.prototype,e))try{delete i.prototype[e]}catch(o){try{i.prototype[e]=t}catch(u){}}}k[e]&&!n||p(k,e,n?t:V&&x[e]||t,r)}},z=function(e,t,n){var r,s;if(a){if(w){if(n)for(r in P)if(s=c[r],s&&h(s,e))try{delete s[e]}catch(i){}if(A[e]&&!n)return;try{return p(A,e,n?t:V&&A[e]||t)}catch(i){}}for(r in P)s=c[r],!s||s[e]&&!n||p(s,e,t)}};for(r in P)s=c[r],i=s&&s.prototype,i?E(i)[M]=s:V=!1;for(r in B)s=c[r],i=s&&s.prototype,i&&(E(i)[M]=s);if((!V||!u(A)||A===Function.prototype)&&(A=function(){throw L("Incorrect invocation")},V))for(r in P)c[r]&&w(c[r],A);if((!V||!k||k===N)&&(k=A.prototype,V))for(r in P)c[r]&&w(c[r].prototype,k);if(V&&v(C)!==k&&w(C,k),a&&!h(k,O))for(r in F=!0,g(k,O,{get:function(){return l(this)?this[R]:void 0}}),P)c[r]&&m(c[r],R,r);e.exports={NATIVE_ARRAY_BUFFER_VIEWS:V,TYPED_ARRAY_TAG:F&&R,aTypedArray:$,aTypedArrayConstructor:K,exportTypedArrayMethod:G,exportTypedArrayStaticMethod:z,getTypedArrayConstructor:j,isView:U,isTypedArray:q,TypedArray:A,TypedArrayPrototype:k}},5129:function(e,t,n){var r=n(6244);e.exports=function(e,t){var n=0,s=r(t),i=new e(s);while(s>n)i[n]=t[n++];return i}},712:function(e,t,n){var r=n(9974),s=n(8361),i=n(7908),o=n(6244),a=function(e){var t=1==e;return function(n,a,c){var u,l,h=i(n),d=s(h),f=r(a,c),m=o(d);while(m-- >0)if(u=d[m],l=f(u,m,h),l)switch(e){case 0:return u;case 1:return m}return t?-1:void 0}};e.exports={findLast:a(0),findLastIndex:a(1)}},1843:function(e,t,n){var r=n(6244);e.exports=function(e,t){for(var n=r(e),s=new t(n),i=0;i<n;i++)s[i]=e[n-i-1];return s}},1572:function(e,t,n){var r=n(6244),s=n(9303),i=RangeError;e.exports=function(e,t,n,o){var a=r(e),c=s(n),u=c<0?a+c:c;if(u>=a||u<0)throw i("Incorrect index");for(var l=new t(a),h=0;h<a;h++)l[h]=h===u?o:e[h];return l}},8544:function(e,t,n){var r=n(7293);e.exports=!r((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},9974:function(e,t,n){var r=n(1702),s=n(9662),i=n(4374),o=r(r.bind);e.exports=function(e,t){return s(e),void 0===t?e:i?o(e,t):function(){return e.apply(t,arguments)}}},4067:function(e,t,n){var r=n(648),s=n(1702),i=s("".slice);e.exports=function(e){return"Big"===i(r(e),0,3)}},9518:function(e,t,n){var r=n(2597),s=n(614),i=n(7908),o=n(6200),a=n(8544),c=o("IE_PROTO"),u=Object,l=u.prototype;e.exports=a?u.getPrototypeOf:function(e){var t=i(e);if(r(t,c))return t[c];var n=t.constructor;return s(n)&&t instanceof n?n.prototype:t instanceof u?l:null}},4599:function(e,t,n){var r=n(7593),s=TypeError;e.exports=function(e){var t=r(e,"number");if("number"==typeof t)throw s("Can't convert number to bigint");return BigInt(t)}},4590:function(e,t,n){var r=n(3002),s=RangeError;e.exports=function(e,t){var n=r(e);if(n%t)throw s("Wrong offset");return n}},3002:function(e,t,n){var r=n(9303),s=RangeError;e.exports=function(e){var t=r(e);if(t<0)throw s("The argument can't be less than 0");return t}},8675:function(e,t,n){"use strict";var r=n(260),s=n(6244),i=n(9303),o=r.aTypedArray,a=r.exportTypedArrayMethod;a("at",(function(e){var t=o(this),n=s(t),r=i(e),a=r>=0?r:n+r;return a<0||a>=n?void 0:t[a]}))},2958:function(e,t,n){"use strict";var r=n(260),s=n(712).findLastIndex,i=r.aTypedArray,o=r.exportTypedArrayMethod;o("findLastIndex",(function(e){return s(i(this),e,arguments.length>1?arguments[1]:void 0)}))},3408:function(e,t,n){"use strict";var r=n(260),s=n(712).findLast,i=r.aTypedArray,o=r.exportTypedArrayMethod;o("findLast",(function(e){return s(i(this),e,arguments.length>1?arguments[1]:void 0)}))},3462:function(e,t,n){"use strict";var r=n(7854),s=n(6916),i=n(260),o=n(6244),a=n(4590),c=n(7908),u=n(7293),l=r.RangeError,h=r.Int8Array,d=h&&h.prototype,f=d&&d.set,m=i.aTypedArray,p=i.exportTypedArrayMethod,g=!u((function(){var e=new Uint8ClampedArray(2);return s(f,e,{length:1,0:3},1),3!==e[1]})),y=g&&i.NATIVE_ARRAY_BUFFER_VIEWS&&u((function(){var e=new h(2);return e.set(1),e.set("2",1),0!==e[0]||2!==e[1]}));p("set",(function(e){m(this);var t=a(arguments.length>1?arguments[1]:void 0,1),n=c(e);if(g)return s(f,this,n,t);var r=this.length,i=o(n),u=0;if(i+t>r)throw l("Wrong length");while(u<i)this[t+u]=n[u++]}),!g||y)},1118:function(e,t,n){n(2958)},7380:function(e,t,n){n(3408)},3767:function(e,t,n){"use strict";var r=n(1843),s=n(260),i=s.aTypedArray,o=s.exportTypedArrayMethod,a=s.getTypedArrayConstructor;o("toReversed",(function(){return r(i(this),a(this))}))},8585:function(e,t,n){"use strict";var r=n(260),s=n(1702),i=n(9662),o=n(5129),a=r.aTypedArray,c=r.getTypedArrayConstructor,u=r.exportTypedArrayMethod,l=s(r.TypedArrayPrototype.sort);u("toSorted",(function(e){void 0!==e&&i(e);var t=a(this),n=o(c(t),t);return l(n,e)}))},8696:function(e,t,n){"use strict";var r=n(1572),s=n(260),i=n(4067),o=n(9303),a=n(4599),c=s.aTypedArray,u=s.getTypedArrayConstructor,l=s.exportTypedArrayMethod,h=!!function(){try{new Int8Array(1)["with"](2,{valueOf:function(){throw 8}})}catch(e){return 8===e}}();l("with",{with:function(e,t){var n=c(this),s=o(e),l=i(n)?a(t):+t;return r(n,u(n),s,l)}}["with"],!h)},8842:function(e){"use strict";function t(e,t,n){return t>e?t:n<e?n:e}function n(e){return+(e>0)-+(e<0)}function r(e){return Math.round(1e4*e)/1e4}var s,i={};function o(e){return"-"+e[0].toLowerCase()}function a(e){return i[e]||(i[e]=e.replace(/([A-Z])/g,o))}function c(e,t){return e&&0!==e.length?e.nodeName?[e]:[].slice.call(e[0].nodeName?e:(t||document.documentElement).querySelectorAll(e)):[]}function u(e,t){for(var n in t)n.indexOf("_")&&e.setAttribute("data-"+a(n),t[n])}function l(e){return function(t,n){for(var s in n)s.indexOf("_")&&(!0===e||e[s])&&t.style.setProperty("--"+a(s),r(n[s]))}}var h=[];function d(){s=0,h.slice().forEach((function(e){return e()})),f()}function f(){!s&&h.length&&(s=requestAnimationFrame(d))}function m(e){return h.push(e),f(),function(){h=h.filter((function(t){return t!==e})),!h.length&&s&&(cancelAnimationFrame(s),s=0)}}function p(e,t,n,r){return"function"===typeof e?e(t,n,r):e}function g(){}function y(e){e=e||{};var r,s,i,o=e.onChange||g,a=e.onHidden||g,h=e.onShown||g,d=e.onScroll||g,f=e.cssProps?l(e.cssProps):g,y=e.scrollingElement,v=y?c(y)[0]:window,w=y?c(y)[0]:document.documentElement,b=!1,I={},_=[];function E(){_=c(e.targets||"[data-scroll]",c(e.scope||w)[0]).map((function(e){return{element:e}}))}function T(){var o=w.clientWidth,a=w.clientHeight,c=n(-r+(r=w.scrollLeft||window.pageXOffset)),u=n(-s+(s=w.scrollTop||window.pageYOffset)),l=w.scrollLeft/(w.scrollWidth-o||1),h=w.scrollTop/(w.scrollHeight-a||1);b=b||I.scrollDirX!==c||I.scrollDirY!==u||I.scrollPercentX!==l||I.scrollPercentY!==h,I.scrollDirX=c,I.scrollDirY=u,I.scrollPercentX=l,I.scrollPercentY=h;for(var d=!1,f=0;f<_.length;f++){var g=_[f],y=g.element,E=y,T=0,x=0;do{T+=E.offsetLeft,x+=E.offsetTop,E=E.offsetParent}while(E&&E!==v);var D=y.clientHeight||y.offsetHeight||0,C=y.clientWidth||y.offsetWidth||0,A=(t(T+C,r,r+o)-t(T,r,r+o))/C,k=(t(x+D,s,s+a)-t(x,s,s+a))/D,N=1===A?0:n(T-r),L=1===k?0:n(x-s),O=t((r-(C/2+T-o/2))/(o/2),-1,1),R=t((s-(D/2+x-a/2))/(a/2),-1,1),M=void 0;M=e.offset?p(e.offset,y,g,w)<=s?1:0:(p(e.threshold,y,g,w)||0)<A*k?1:0;var V=g.visible!==M,F=g._changed||V||g.visibleX!==A||g.visibleY!==k||g.index!==f||g.elementHeight!==D||g.elementWidth!==C||g.offsetX!==T||g.offsetY!==x||g.intersectX!==g.intersectX||g.intersectY!==g.intersectY||g.viewportX!==O||g.viewportY!==R;F&&(d=!0,g._changed=!0,g._visibleChanged=V,g.visible=M,g.elementHeight=D,g.elementWidth=C,g.index=f,g.offsetX=T,g.offsetY=x,g.visibleX=A,g.visibleY=k,g.intersectX=N,g.intersectY=L,g.viewportX=O,g.viewportY=R,g.visible=M)}i||!b&&!d||(i=m(S))}function S(){x(),b&&(b=!1,u(w,{scrollDirX:I.scrollDirX,scrollDirY:I.scrollDirY}),f(w,I),d(w,I,_));for(var t=_.length,n=t-1;n>-1;n--){var r=_[n],s=r.element,i=r.visible,c=s.hasAttribute("scrollout-once")||!1;r._changed&&(r._changed=!1,f(s,r)),r._visibleChanged&&(u(s,{scroll:i?"in":"out"}),o(s,r,w),(i?h:a)(s,r,w)),i&&(e.once||c)&&_.splice(n,1)}}function x(){i&&(i(),i=void 0)}E(),T(),S();var D=0,C=function(){D=D||setTimeout((function(){D=0,T()}),0)};return window.addEventListener("resize",C),v.addEventListener("scroll",C),{index:E,update:T,teardown:function(){x(),window.removeEventListener("resize",C),v.removeEventListener("scroll",C)}}}e.exports=y},3651:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return V_}});var r={};n.r(r),n.d(r,{FirebaseError:function(){return lt},SDK_VERSION:function(){return Yn},_DEFAULT_ENTRY_NAME:function(){return Fn},_addComponent:function(){return jn},_addOrOverwriteComponent:function(){return qn},_apps:function(){return Bn},_clearComponents:function(){return zn},_components:function(){return Un},_getProvider:function(){return Kn},_registerComponent:function(){return $n},_removeServiceInstance:function(){return Gn},deleteApp:function(){return er},getApp:function(){return Jn},getApps:function(){return Zn},initializeApp:function(){return Xn},onLog:function(){return nr},registerVersion:function(){return tr},setLogLevel:function(){return rr}});var s=n(3396);function i(e,t,n,r,i,o){const a=(0,s.up)("landing-screen"),c=(0,s.up)("my-experience"),u=(0,s.up)("my-services"),l=(0,s.up)("about-me"),h=(0,s.up)("my-projects"),d=(0,s.up)("my-skills"),f=(0,s.up)("contact-me");return(0,s.wg)(),(0,s.iD)("div",null,[(0,s.Wm)(a),(0,s.Wm)(c),(0,s.Wm)(u),(0,s.Wm)(l),(0,s.Wm)(h),(0,s.Wm)(d),(0,s.Wm)(f)])}var o=n(7139),a=n(6824),c=n(8521),u=n(3289);const l=e=>((0,s.dD)("data-v-95ba9ec4"),e=e(),(0,s.Cn)(),e),h=l((()=>(0,s._)("div",{class:"dots dots1"},null,-1))),d=l((()=>(0,s._)("div",{class:"dots dots2"},null,-1))),f=["href"],m={class:"get-cv-btn mt-7",size:"small"},p=(0,s.Uk)("mdi-download"),g=(0,s.Uk)(" Download My CV ");function y(e,t,n,r,i,l){const y=(0,s.up)("AnimatedText"),v=(0,s.up)("zig-zag-line"),w=(0,s.up)("circle-outline"),b=(0,s.up)("common-content-wrapper"),I=(0,s.up)("triangle-outline");return(0,s.wg)(),(0,s.iD)("div",{class:(0,o.C_)(["app-padding d-flex align-center",e.$vuetify.display.mobile?"py-15 landing-screen-mobile landing-screen-"+e.$store.state.currentTheme:"text-h6 landing-screen-desktop landing-screen-"+e.$store.state.currentTheme]),id:"landing-screen",style:(0,o.j5)(i.style)},[h,d,(0,s.Wm)(a.o,{align:"center",justify:"center","no-gutters":""},{default:(0,s.w5)((()=>[(0,s.Wm)(c.D,{sm:"6",cols:"12",class:(0,o.C_)(["justify-center",e.$vuetify.display.mobile?"my-15":""])},{default:(0,s.w5)((()=>[(0,s._)("span",{class:(0,o.C_)(["ml-2 wave",e.$vuetify.display.mobile?"text-h5 ":" text-h4"])},"👋",2),(0,s._)("p",{class:(0,o.C_)(["font-weight-bold mb-2 text-stroke-1 ml-2",e.$vuetify.display.mobile?"text-subtitle-1 ":" text-h6"])},"Hey I'm ",2),(0,s.Wm)(y),(0,s.Wm)(v,{class:"move-animation-2",stroke:"#F3B24A",height:e.$vuetify.display.mobile?8:13},null,8,["height"]),(0,s._)("a",{href:i.pdfLink,download:"download",class:"d-block",target:"_blank"},[(0,s._)("button",m,[(0,s.Wm)(u.t,null,{default:(0,s.w5)((()=>[p])),_:1}),g])],8,f)])),_:1},8,["class"]),(0,s.Wm)(c.D,{sm:"6",cols:"12",class:"justify-center text-stroke-1"},{default:(0,s.w5)((()=>[(0,s.Wm)(w,{class:"float-right move-animation",stroke:"#F85C5C",style:{width:"15px"}}),(0,s.Wm)(b,{title:i.title,subtitle:i.subtitle,description:i.description},null,8,["title","subtitle","description"]),(0,s.Wm)(I,{class:(0,o.C_)(["spin-animation",e.$vuetify.display.mobile?"float-right":"mt-8"]),style:{width:"15px"}},null,8,["class"])])),_:1})])),_:1})],6)}const v=["data-char"],w={class:"my-10 text-stroke-1 section-subtitle","data-splitting":""},b=["innerHTML"];function I(e,t,n,r,i,a){return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("span",null,[(0,s._)("h4",{class:(0,o.C_)(["fs-nunito section-title slide-horizontal","section-title-"+this.$store.state.currentTheme]),"data-splitting":""},[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(n.title.split(""),((e,t)=>((0,s.wg)(),(0,s.iD)("span",{key:t,class:"char","data-char":e,style:(0,o.j5)({"--char-index":t,"--char-total":n.subtitle.length})},(0,o.zw)(e),13,v)))),128))],2)]),(0,s._)("h2",w,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(n.subtitle.split("<br/>"),((e,t)=>((0,s.wg)(),(0,s.iD)("div",{key:t},[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.split(""),((e,t)=>((0,s.wg)(),(0,s.iD)("span",{key:t,class:"subtitle-char",style:(0,o.j5)({"--char-index":t})},(0,o.zw)(e),5)))),128))])))),128))]),(0,s._)("p",{innerHTML:n.description,class:"text-stroke-1 section-description"},null,8,b)],64)}var _=n(8842),E=n.n(_),T={name:"CommonContentWrapper",props:["title","subtitle","description"],data(){return{}},mounted(){E()({targets:"[data-splitting]"})},methods:{}},S=n(89);const x=(0,S.Z)(T,[["render",I],["__scopeId","data-v-407101fb"]]);var D=x;const C={width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},A=["stroke","fill","opacity","stroke-width"];function k(e,t,n,r,i,o){return(0,s.wg)(),(0,s.iD)("svg",C,[(0,s._)("circle",{cx:"12",cy:"12",r:"10.5",stroke:n.stroke,fill:n.fill,opacity:n.opacity,"stroke-width":n.stroke_width},null,8,A)])}var N={name:"CircleOutline",props:{stroke:{type:String,default:"#7986FD"},fill:{type:String,default:"none"},opacity:{type:String,default:"1"},stroke_width:{type:String,default:"3"}}};const L=(0,S.Z)(N,[["render",k]]);var O=L;const R={width:"89",height:"13",viewBox:"0 0 89 13",fill:"none",xmlns:"http://www.w3.org/2000/svg"},M=["stroke","opacity","stroke-width"];function V(e,t,n,r,i,o){return(0,s.wg)(),(0,s.iD)("svg",R,[(0,s._)("path",{d:"M2 10.5L7 3L12 10.5L17 3L22 10.5L27 3L32 10.5L37 3L42 10.5L47 3 M42 10.5L47 3L52 10.5L57 3L62 10.5L67 3L72 10.5L77 3L82 10.5L87 3",stroke:n.stroke,opacity:n.opacity,"stroke-width":n.stroke_width},null,8,M)])}var F={name:"ZigZagLine",props:{stroke:{type:String,default:"#F3B24A"},opacity:{type:String,default:"1"},stroke_width:{type:String,default:"2"}}};const P=(0,S.Z)(F,[["render",V]]);var B=P;const U={width:"34",height:"30",viewBox:"0 0 34 30",fill:"none",xmlns:"http://www.w3.org/2000/svg"},j=["stroke","fill","opacity","stroke-width"];function q(e,t,n,r,i,o){return(0,s.wg)(),(0,s.iD)("svg",U,[(0,s._)("path",{d:"M3.14359 28L17 4L30.8564 28H3.14359Z",stroke:n.stroke,fill:n.fill,opacity:n.opacity,"stroke-width":n.stroke_width},null,8,j)])}var $={name:"CircleOutline",props:{stroke:{type:String,default:"#1F7949"},fill:{type:String,default:"none"},opacity:{type:String,default:"1"},stroke_width:{type:String,default:"4"}}};const K=(0,S.Z)($,[["render",q]]);var G=K;const z={viewBox:"0 0 340 150"};function W(e,t,n,r,i,a){return(0,s.wg)(),(0,s.iD)("div",{class:(0,o.C_)(["d-block anim-text",(e.$store.state.currentTheme,"text-animation")]),"data-splitting":""},[((0,s.wg)(),(0,s.iD)("svg",z,[(0,s._)("text",{x:"0%",y:"35%",dy:".15em",class:(0,o.C_)(e.$vuetify.display.mobile?"text-h1 ":" text-h1")},"Amit",2),(0,s._)("text",{x:"-1%",y:"82%",dy:".15em",class:(0,o.C_)(e.$vuetify.display.mobile?"text-h1 ":" text-h1")},"Kumar",2)]))],2)}var H={name:"AnimatedText",data:()=>({}),mounted(){E()({targets:"[data-splitting]"})}};const Q=(0,S.Z)(H,[["render",W],["__scopeId","data-v-5ed4a086"]]);var Y=Q,X={name:"LandingPageVue",components:{CommonContentWrapper:D,CircleOutline:O,ZigZagLine:B,TriangleOutline:G,AnimatedText:Y},data(){return{pdfLink:"https://drive.google.com/uc?export=download&id=1d83s9s9vHDMwmMIh5kUN7NQq-Nm6RqWr",style:{"min-height":screen.height-200+"px"},title:"Introduction",subtitle:"Fullstack Developer & UI/UX Designer, Based in Raipur, India",description:"Passionate about visual design and technology. I specialized in fullstack development and UI/UX design and my passion is about building elegant and professional user interfaces and websites."}},mounted(){this.style={"min-height":screen.height-200+"px"}},methods:{}};const J=(0,S.Z)(X,[["render",y],["__scopeId","data-v-95ba9ec4"]]);var Z=J,ee=n(9242),te=n(702),ne=n(1107);function re(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"div",n=arguments.length>2?arguments[2]:void 0;return(0,ne.a)({name:null!=n?n:(0,o.kC)((0,o._A)(e.replace(/__/g,"-"))),props:{tag:{type:String,default:t}},setup(t,n){let{slots:r}=n;return()=>{var n;return(0,s.h)(t.tag,{class:e},null==(n=r.default)?void 0:n.call(r))}}})}const se=re("v-card-text");var ie=n(4870),oe=n(8717),ae=n(3766),ce=n(6033);const ue=Symbol.for("vuetify:form"),le=(0,ae.U)({disabled:Boolean,fastFail:Boolean,lazyValidation:Boolean,readonly:Boolean,modelValue:{type:Boolean,default:null}});function he(e){const t=(0,oe.z)(e,"modelValue"),n=(0,s.Fl)((()=>e.disabled)),r=(0,s.Fl)((()=>e.readonly)),i=(0,ie.iH)(!1),o=(0,ie.iH)([]),a=(0,ie.iH)([]);async function c(){const t=[];let n=!0;a.value=[],i.value=!0;for(const r of o.value){const s=await r.validate();if(s.length>0&&(n=!1,t.push({id:r.id,errorMessages:s})),!n&&e.fastFail)break}return a.value=t,i.value=!1,{valid:n,errors:a.value}}function u(){o.value.forEach((e=>e.reset())),t.value=null}function l(){o.value.forEach((e=>e.resetValidation())),a.value=[],t.value=null}return(0,s.YP)(o,(()=>{let e=null;o.value.some((e=>!1===e.isValid))?e=!1:o.value.every((e=>!0===e.isValid))&&(e=!0),t.value=e}),{deep:!0}),(0,s.JJ)(ue,{register:(e,t,n,r,s)=>{o.value.some((t=>t.id===e))&&(0,ce.Kd)(`Duplicate input name "${e}"`),o.value.push({id:e,validate:t,reset:n,resetValidation:r,isValid:s})},unregister:e=>{o.value=o.value.filter((t=>t.id!==e))},isDisabled:n,isReadonly:r,isValidating:i,items:o}),{errors:a,isDisabled:n,isReadonly:r,isValidating:i,items:o,validate:c,reset:u,resetValidation:l}}var de=n(3185),fe=n(9888);const me=(0,ne.a)({name:"VForm",props:{...le()},emits:{"update:modelValue":e=>!0,submit:e=>!0},setup(e,t){let{slots:n,emit:r}=t;const i=he(e),o=(0,ie.iH)();function a(e){e.preventDefault(),i.reset()}function c(e){const t=e,n=i.validate();t.then=n.then.bind(n),t.catch=n.catch.bind(n),t.finally=n.finally.bind(n),r("submit",t),t.defaultPrevented||n.then((e=>{let{valid:t}=e;var n;t&&(null==(n=o.value)||n.submit())})),t.preventDefault()}return(0,fe.L)((()=>{var e;return(0,s.Wm)("form",{ref:o,class:"v-form",novalidate:!0,onReset:a,onSubmit:c},[null==(e=n.default)?void 0:e.call(n,i)])})),(0,de.F)(i,o)}}),pe=e=>((0,s.dD)("data-v-26436292"),e=e(),(0,s.Cn)(),e),ge={class:"mt-5"},ye={href:"mailto:emitsahu077@gmail.com",class:"text-stroke-2"},ve=(0,s.Uk)("emitsahu077@gmail.com "),we=(0,s.Uk)("mdi-arrow-right"),be={class:"form-input"},Ie=pe((()=>(0,s._)("label",{for:"name",class:"text-stroke-1"},"Name",-1))),_e=pe((()=>(0,s._)("br",null,null,-1))),Ee=["placeholder"],Te=pe((()=>(0,s._)("br",null,null,-1))),Se={class:"form-input"},xe=pe((()=>(0,s._)("label",{for:"mobile",class:"text-stroke-1"},"Mobile",-1))),De=pe((()=>(0,s._)("br",null,null,-1))),Ce=["placeholder"],Ae=pe((()=>(0,s._)("br",null,null,-1))),ke={class:"form-input"},Ne=pe((()=>(0,s._)("label",{for:"email",class:"text-stroke-1"},"Email",-1))),Le=pe((()=>(0,s._)("br",null,null,-1))),Oe=["placeholder"],Re=pe((()=>(0,s._)("br",null,null,-1))),Me={class:"form-input"},Ve=pe((()=>(0,s._)("label",{for:"message",class:"text-stroke-1"},"Message",-1))),Fe=pe((()=>(0,s._)("br",null,null,-1))),Pe=["placeholder"],Be={class:"text-center mt-5"},Ue=pe((()=>(0,s._)("span",{class:"text-white font-weight-bold text-subtitle-1"},"Send",-1)));function je(e,t,n,r,i,l){const h=(0,s.up)("common-content-wrapper"),d=(0,s.up)("circle-outline"),f=(0,s.up)("zig-zag-line");return(0,s.wg)(),(0,s.iD)("div",{class:(0,o.C_)(["app-padding py-15 my-15",e.$vuetify.display.mobile?"pt-5":"text-h6"]),id:"lets-talk",style:(0,o.j5)(e.style)},[(0,s._)("p",(0,s.dG)({class:["shadow-text",e.$vuetify.display.mobile?"mb-n6":"mb-n15"],"no-gutters":""},e.shado_text_animation)," Let's Talk ",16),(0,s.Wm)(a.o,{align:"center",justify:"center"},{default:(0,s.w5)((()=>[(0,s.Wm)(c.D,{sm:"7",cols:"12",class:"justify-center"},{default:(0,s.w5)((()=>[(0,s.Wm)(h,{title:i.title,subtitle:i.subtitle,description:i.description},null,8,["title","subtitle","description"]),(0,s._)("p",ge,[(0,s._)("a",ye,[ve,(0,s.Wm)(u.t,{size:"x-small",class:"ml-n1"},{default:(0,s.w5)((()=>[we])),_:1})])]),e.$vuetify.display.mobile?(0,s.kq)("",!0):((0,s.wg)(),(0,s.j4)(d,{key:0,class:"float-right move-animation-2",stroke:"#F3B24A",stroke_width:5,style:{width:"9px"}}))])),_:1}),(0,s.Wm)(c.D,{sm:"5",cols:"12",class:(0,o.C_)(["align-start text-right justify-end",e.$vuetify.display.mobile?"":"pl-10"]),justify:"right"},{default:(0,s.w5)((()=>[(0,s.Wm)(d,{class:"move-animation-4 mb-n13",stroke:"#7986FD",style:{width:"25px"}}),(0,s._)("div",{class:(0,o.C_)(["contact-card text-left",e.$vuetify.display.mobile?"mt-8 px-4 py-3":"px-5 py-3"])},[(0,s.Wm)(se,null,{default:(0,s.w5)((()=>[(0,s.Wm)(me,{ref:"contact_form",modelValue:i.valid,"onUpdate:modelValue":t[9]||(t[9]=e=>i.valid=e),"lazy-validation":"",onSubmit:t[10]||(t[10]=(0,ee.iM)((e=>l.submitForm()),["prevent"]))},{default:(0,s.w5)((()=>[(0,s._)("div",be,[Ie,_e,(0,s.wy)((0,s._)("input",{type:"text",id:"name",name:"name","onUpdate:modelValue":t[0]||(t[0]=e=>i.name=e),maxlength:"80",onInput:t[1]||(t[1]=e=>l.validateInput(i.name,"name")),placeholder:i.placeholder.name},null,40,Ee),[[ee.nr,i.name]]),Te]),(0,s._)("div",Se,[xe,De,(0,s.wy)((0,s._)("input",{type:"text",id:"mobile",name:"mobile","onUpdate:modelValue":t[2]||(t[2]=e=>i.mobile=e),maxlength:"10",onInput:t[3]||(t[3]=e=>l.validateMobile(i.mobile)),onKeydown:t[4]||(t[4]=e=>l.restrictChar(e)),placeholder:i.placeholder.mobile},null,40,Ce),[[ee.nr,i.mobile]]),Ae]),(0,s._)("div",ke,[Ne,Le,(0,s.wy)((0,s._)("input",{type:"text",id:"email",name:"email","onUpdate:modelValue":t[5]||(t[5]=e=>i.email=e),onInput:t[6]||(t[6]=e=>l.validateEmail(i.email)),maxlength:"120",placeholder:i.placeholder.email},null,40,Oe),[[ee.nr,i.email]]),Re]),(0,s._)("div",Me,[Ve,Fe,(0,s.wy)((0,s._)("textarea",{type:"text",id:"message",name:"message","onUpdate:modelValue":t[7]||(t[7]=e=>i.message=e),style:{height:"80px"},onInput:t[8]||(t[8]=e=>l.validateInput(i.message,"message")),placeholder:i.placeholder.msg},"\n                ",40,Pe),[[ee.nr,i.message]])]),(0,s._)("div",Be,[(0,s.Wm)(te.T,{color:"stroke-2",width:"150",height:"40",class:"send-btn",type:"submit",loading:i.btn_loading},{default:(0,s.w5)((()=>[Ue])),_:1},8,["loading"])])])),_:1},8,["modelValue"])])),_:1})],2),e.$vuetify.display.mobile?((0,s.wg)(),(0,s.j4)(d,{key:0,class:"float-left move-animation-2 mt-n15",stroke:"#F3B24A",stroke_width:5,style:{width:"9px"}})):(0,s.kq)("",!0)])),_:1},8,["class"])])),_:1}),(0,s.Wm)(f,{class:(0,o.C_)(["move-animation-2",e.$vuetify.display.mobile?"mt-8":""]),stroke:"#1F7949",height:e.$vuetify.display.mobile?9:13},null,8,["height","class"])],6)}n(1703),n(2801);
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
const qe=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=63&s|128):55296===(64512&s)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(s=65536+((1023&s)<<10)+(1023&e.charCodeAt(++r)),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=63&s|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=63&s|128)}return t},$e=function(e){const t=[];let n=0,r=0;while(n<e.length){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((31&s)<<6|63&i)}else if(s>239&&s<365){const i=e[n++],o=e[n++],a=e[n++],c=((7&s)<<18|(63&i)<<12|(63&o)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(1023&c))}else{const i=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&s)<<12|(63&i)<<6|63&o)}}return t.join("")},Ke={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const t=e[s],i=s+1<e.length,o=i?e[s+1]:0,a=s+2<e.length,c=a?e[s+2]:0,u=t>>2,l=(3&t)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,i||(h=64)),r.push(n[u],n[l],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(qe(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):$e(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const t=n[e.charAt(s++)],i=s<e.length,o=i?n[e.charAt(s)]:0;++s;const a=s<e.length,c=a?n[e.charAt(s)]:64;++s;const u=s<e.length,l=u?n[e.charAt(s)]:64;if(++s,null==t||null==o||null==c||null==l)throw Error();const h=t<<2|o>>4;if(r.push(h),64!==c){const e=o<<4&240|c>>2;if(r.push(e),64!==l){const e=c<<6&192|l;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},Ge=function(e){const t=qe(e);return Ke.encodeByteArray(t,!0)},ze=function(e){return Ge(e).replace(/\./g,"")};
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
 */function We(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&He(n)&&(e[n]=We(e[n],t[n]));return e}function He(e){return"__proto__"!==e}
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
 */class Qe{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
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
 */function Ye(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",s=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[ze(JSON.stringify(n)),ze(JSON.stringify(o)),a].join(".")}
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
 */function Xe(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function Je(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Xe())}function Ze(){try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(e){return!1}}function et(){return"object"===typeof self&&self.self===self}function tt(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function nt(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function rt(){return Xe().indexOf("Electron/")>=0}function st(){const e=Xe();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function it(){return Xe().indexOf("MSAppHost/")>=0}function ot(){return!Ze()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function at(){return"object"===typeof indexedDB}function ct(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var e;t((null===(e=s.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}
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
const ut="FirebaseError";class lt extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=ut,Object.setPrototypeOf(this,lt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ht.prototype.create)}}class ht{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,s=this.errors[e],i=s?dt(s,n):"Error",o=`${this.serviceName}: ${i} (${r}).`,a=new lt(r,o,n);return a}}function dt(e,t){return e.replace(ft,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}const ft=/\{\$([^}]+)}/g;
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
function mt(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function pt(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const n=e[s],i=t[s];if(gt(n)&&gt(i)){if(!pt(n,i))return!1}else if(n!==i)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function gt(e){return null!==e&&"object"===typeof e}
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
 */function yt(e,t){const n=new vt(e,t);return n.subscribe.bind(n)}class vt{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=wt(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=bt),void 0===r.error&&(r.error=bt),void 0===r.complete&&(r.complete=bt);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),s}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function wt(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function bt(){}
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
function It(e){return e&&e._delegate?e._delegate:e}class _t{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
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
 */const Et="[DEFAULT]";
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
 */class Tt{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new Qe;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(xt(e))try{this.getOrInitializeService({instanceIdentifier:Et})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=Et){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=Et){return this.instances.has(e)}getOptions(e=Et){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[s,i]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(s);n===e&&i.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),s=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(Gy){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:St(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(Gy){}return n||null}normalizeInstanceIdentifier(e=Et){return this.component?this.component.multipleInstances?e:Et:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function St(e){return e===Et?void 0:e}function xt(e){return"EAGER"===e.instantiationMode}
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
 */class Dt{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Tt(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
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
const Ct=[];var At;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(At||(At={}));const kt={debug:At.DEBUG,verbose:At.VERBOSE,info:At.INFO,warn:At.WARN,error:At.ERROR,silent:At.SILENT},Nt=At.INFO,Lt={[At.DEBUG]:"log",[At.VERBOSE]:"log",[At.INFO]:"info",[At.WARN]:"warn",[At.ERROR]:"error"},Ot=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),s=Lt[t];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[s](`[${r}]  ${e.name}:`,...n)};class Rt{constructor(e){this.name=e,this._logLevel=Nt,this._logHandler=Ot,this._userLogHandler=null,Ct.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in At))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?kt[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,At.DEBUG,...e),this._logHandler(this,At.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,At.VERBOSE,...e),this._logHandler(this,At.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,At.INFO,...e),this._logHandler(this,At.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,At.WARN,...e),this._logHandler(this,At.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,At.ERROR,...e),this._logHandler(this,At.ERROR,...e)}}function Mt(e){Ct.forEach((t=>{t.setLogLevel(e)}))}function Vt(e,t){for(const n of Ct){let r=null;t&&t.level&&(r=kt[t.level]),n.userLogHandler=null===e?null:(t,n,...s)=>{const i=s.map((e=>{if(null==e)return null;if("string"===typeof e)return e;if("number"===typeof e||"boolean"===typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(t){return null}})).filter((e=>e)).join(" ");n>=(null!==r&&void 0!==r?r:t.logLevel)&&e({level:At[n].toLowerCase(),message:i,args:s,type:t.name})}}}const Ft=(e,t)=>t.some((t=>e instanceof t));let Pt,Bt;function Ut(){return Pt||(Pt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function jt(){return Bt||(Bt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const qt=new WeakMap,$t=new WeakMap,Kt=new WeakMap,Gt=new WeakMap,zt=new WeakMap;function Wt(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",s),e.removeEventListener("error",i)},s=()=>{t(Zt(e.result)),r()},i=()=>{n(e.error),r()};e.addEventListener("success",s),e.addEventListener("error",i)}));return t.then((t=>{t instanceof IDBCursor&&qt.set(t,e)})).catch((()=>{})),zt.set(t,e),t}function Ht(e){if($t.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",i),e.removeEventListener("abort",i)},s=()=>{t(),r()},i=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",s),e.addEventListener("error",i),e.addEventListener("abort",i)}));$t.set(e,t)}let Qt={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return $t.get(e);if("objectStoreNames"===t)return e.objectStoreNames||Kt.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Zt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function Yt(e){Qt=e(Qt)}function Xt(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?jt().includes(e)?function(...t){return e.apply(en(this),t),Zt(qt.get(this))}:function(...t){return Zt(e.apply(en(this),t))}:function(t,...n){const r=e.call(en(this),t,...n);return Kt.set(r,t.sort?t.sort():[t]),Zt(r)}}function Jt(e){return"function"===typeof e?Xt(e):(e instanceof IDBTransaction&&Ht(e),Ft(e,Ut())?new Proxy(e,Qt):e)}function Zt(e){if(e instanceof IDBRequest)return Wt(e);if(Gt.has(e))return Gt.get(e);const t=Jt(e);return t!==e&&(Gt.set(e,t),zt.set(t,e)),t}const en=e=>zt.get(e);function tn(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(e,t),a=Zt(o);return r&&o.addEventListener("upgradeneeded",(e=>{r(Zt(o.result),e.oldVersion,e.newVersion,Zt(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((e=>{i&&e.addEventListener("close",(()=>i())),s&&e.addEventListener("versionchange",(()=>s()))})).catch((()=>{})),a}const nn=["get","getKey","getAll","getAllKeys","count"],rn=["put","add","delete","clear"],sn=new Map;function on(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(sn.get(t))return sn.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=rn.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!s&&!nn.includes(n))return;const i=async function(e,...t){const i=this.transaction(e,s?"readwrite":"readonly");let o=i.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),s&&i.done]))[0]};return sn.set(t,i),i}Yt((e=>({...e,get:(t,n,r)=>on(t,n)||e.get(t,n,r),has:(t,n)=>!!on(t,n)||e.has(t,n)})));
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
class an{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(cn(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function cn(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const un="@firebase/app",ln="0.7.30",hn=new Rt("@firebase/app"),dn="@firebase/app-compat",fn="@firebase/analytics-compat",mn="@firebase/analytics",pn="@firebase/app-check-compat",gn="@firebase/app-check",yn="@firebase/auth",vn="@firebase/auth-compat",wn="@firebase/database",bn="@firebase/database-compat",In="@firebase/functions",_n="@firebase/functions-compat",En="@firebase/installations",Tn="@firebase/installations-compat",Sn="@firebase/messaging",xn="@firebase/messaging-compat",Dn="@firebase/performance",Cn="@firebase/performance-compat",An="@firebase/remote-config",kn="@firebase/remote-config-compat",Nn="@firebase/storage",Ln="@firebase/storage-compat",On="@firebase/firestore",Rn="@firebase/firestore-compat",Mn="firebase",Vn="9.9.2",Fn="[DEFAULT]",Pn={[un]:"fire-core",[dn]:"fire-core-compat",[mn]:"fire-analytics",[fn]:"fire-analytics-compat",[gn]:"fire-app-check",[pn]:"fire-app-check-compat",[yn]:"fire-auth",[vn]:"fire-auth-compat",[wn]:"fire-rtdb",[bn]:"fire-rtdb-compat",[In]:"fire-fn",[_n]:"fire-fn-compat",[En]:"fire-iid",[Tn]:"fire-iid-compat",[Sn]:"fire-fcm",[xn]:"fire-fcm-compat",[Dn]:"fire-perf",[Cn]:"fire-perf-compat",[An]:"fire-rc",[kn]:"fire-rc-compat",[Nn]:"fire-gcs",[Ln]:"fire-gcs-compat",[On]:"fire-fst",[Rn]:"fire-fst-compat","fire-js":"fire-js",[Mn]:"fire-js-all"},Bn=new Map,Un=new Map;function jn(e,t){try{e.container.addComponent(t)}catch(n){hn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function qn(e,t){e.container.addOrOverwriteComponent(t)}function $n(e){const t=e.name;if(Un.has(t))return hn.debug(`There were multiple attempts to register component ${t}.`),!1;Un.set(t,e);for(const n of Bn.values())jn(n,e);return!0}function Kn(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function Gn(e,t,n=Fn){Kn(e,t).clearInstance(n)}function zn(){Un.clear()}
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
 */const Wn={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Hn=new ht("app","Firebase",Wn);
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
class Qn{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new _t("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Hn.create("app-deleted",{appName:this._name})}}
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
 */const Yn=Vn;function Xn(e,t={}){if("object"!==typeof t){const e=t;t={name:e}}const n=Object.assign({name:Fn,automaticDataCollectionEnabled:!1},t),r=n.name;if("string"!==typeof r||!r)throw Hn.create("bad-app-name",{appName:String(r)});const s=Bn.get(r);if(s){if(pt(e,s.options)&&pt(n,s.config))return s;throw Hn.create("duplicate-app",{appName:r})}const i=new Dt(r);for(const a of Un.values())i.addComponent(a);const o=new Qn(e,n,i);return Bn.set(r,o),o}function Jn(e=Fn){const t=Bn.get(e);if(!t)throw Hn.create("no-app",{appName:e});return t}function Zn(){return Array.from(Bn.values())}async function er(e){const t=e.name;Bn.has(t)&&(Bn.delete(t),await Promise.all(e.container.getProviders().map((e=>e.delete()))),e.isDeleted=!0)}function tr(e,t,n){var r;let s=null!==(r=Pn[e])&&void 0!==r?r:e;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const e=[`Unable to register library "${s}" with version "${t}":`];return i&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void hn.warn(e.join(" "))}$n(new _t(`${s}-version`,(()=>({library:s,version:t})),"VERSION"))}function nr(e,t){if(null!==e&&"function"!==typeof e)throw Hn.create("invalid-log-argument");Vt(e,t)}function rr(e){Mt(e)}
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
 */const sr="firebase-heartbeat-database",ir=1,or="firebase-heartbeat-store";let ar=null;function cr(){return ar||(ar=tn(sr,ir,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(or)}}}).catch((e=>{throw Hn.create("idb-open",{originalErrorMessage:e.message})}))),ar}async function ur(e){var t;try{const t=await cr();return t.transaction(or).objectStore(or).get(hr(e))}catch(n){if(n instanceof lt)hn.warn(n.message);else{const e=Hn.create("idb-get",{originalErrorMessage:null===(t=n)||void 0===t?void 0:t.message});hn.warn(e.message)}}}async function lr(e,t){var n;try{const n=await cr(),r=n.transaction(or,"readwrite"),s=r.objectStore(or);return await s.put(t,hr(e)),r.done}catch(r){if(r instanceof lt)hn.warn(r.message);else{const e=Hn.create("idb-set",{originalErrorMessage:null===(n=r)||void 0===n?void 0:n.message});hn.warn(e.message)}}}function hr(e){return`${e.name}!${e.options.appId}`}
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
 */const dr=1024,fr=2592e6;class mr{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new yr(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=pr();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((e=>e.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=fr})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=pr(),{heartbeatsToSend:t,unsentEntries:n}=gr(this._heartbeatsCache.heartbeats),r=ze(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function pr(){const e=new Date;return e.toISOString().substring(0,10)}function gr(e,t=dr){const n=[];let r=e.slice();for(const s of e){const e=n.find((e=>e.agent===s.agent));if(e){if(e.dates.push(s.date),vr(n)>t){e.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),vr(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class yr{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!at()&&ct().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await ur(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return lr(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return lr(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function vr(e){return ze(JSON.stringify({version:2,heartbeats:e})).length}
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
 */function wr(e){$n(new _t("platform-logger",(e=>new an(e)),"PRIVATE")),$n(new _t("heartbeat",(e=>new mr(e)),"PRIVATE")),tr(un,ln,e),tr(un,ln,"esm2017"),tr("fire-js","")}wr("");
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
class br{constructor(e,t){this._delegate=e,this.firebase=t,jn(e,new _t("app-compat",(()=>this),"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise((e=>{this._delegate.checkDestroyed(),e()})).then((()=>(this.firebase.INTERNAL.removeApp(this.name),er(this._delegate))))}_getService(e,t=Fn){var n;this._delegate.checkDestroyed();const r=this._delegate.container.getProvider(e);return r.isInitialized()||"EXPLICIT"!==(null===(n=r.getComponent())||void 0===n?void 0:n.instantiationMode)||r.initialize(),r.getImmediate({identifier:t})}_removeServiceInstance(e,t=Fn){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){jn(this._delegate,e)}_addOrOverwriteComponent(e){qn(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}
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
 */const Ir={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},_r=new ht("app-compat","Firebase",Ir);
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
function Er(e){const t={},n={__esModule:!0,initializeApp:o,app:i,registerVersion:tr,setLogLevel:rr,onLog:nr,apps:null,SDK_VERSION:Yn,INTERNAL:{registerComponent:c,removeApp:s,useAsService:u,modularAPIs:r}};function s(e){delete t[e]}function i(e){if(e=e||Fn,!mt(t,e))throw _r.create("no-app",{appName:e});return t[e]}function o(r,s={}){const i=Xn(r,s);if(mt(t,i.name))return t[i.name];const o=new e(i,n);return t[i.name]=o,o}function a(){return Object.keys(t).map((e=>t[e]))}function c(t){const r=t.name,s=r.replace("-compat","");if($n(t)&&"PUBLIC"===t.type){const o=(e=i())=>{if("function"!==typeof e[s])throw _r.create("invalid-app-argument",{appName:r});return e[s]()};void 0!==t.serviceProps&&We(o,t.serviceProps),n[s]=o,e.prototype[s]=function(...e){const n=this._getService.bind(this,r);return n.apply(this,t.multipleInstances?e:[])}}return"PUBLIC"===t.type?n[s]:null}function u(e,t){if("serverAuth"===t)return null;const n=t;return n}return n["default"]=n,Object.defineProperty(n,"apps",{get:a}),i["App"]=e,n}
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
 */function Tr(){const e=Er(br);function t(t){We(e,t)}return e.INTERNAL=Object.assign(Object.assign({},e.INTERNAL),{createFirebaseNamespace:Tr,extendNamespace:t,createSubscribe:yt,ErrorFactory:ht,deepExtend:We}),e}const Sr=Tr(),xr=new Rt("@firebase/app-compat"),Dr="@firebase/app-compat",Cr="0.1.31";
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
function Ar(e){tr(Dr,Cr,e)}
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
 */if(et()&&void 0!==self.firebase){xr.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const e=self.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&xr.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const kr=Sr;Ar();var Nr="firebase",Lr="9.9.2";
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
kr.registerVersion(Nr,Lr,"app-compat");n(8675),n(3462),n(7380),n(1118),n(3767),n(8585),n(8696),n(2262),n(4506);var Or,Rr="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{},Mr={},Vr=Vr||{},Fr=Rr||self;function Pr(){}function Br(e){var t=typeof e;return t="object"!=t?t:e?Array.isArray(e)?"array":t:"null","array"==t||"object"==t&&"number"==typeof e.length}function Ur(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function jr(e){return Object.prototype.hasOwnProperty.call(e,qr)&&e[qr]||(e[qr]=++$r)}var qr="closure_uid_"+(1e9*Math.random()>>>0),$r=0;function Kr(e,t,n){return e.call.apply(e.bind,arguments)}function Gr(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function zr(e,t,n){return zr=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Kr:Gr,zr.apply(null,arguments)}function Wr(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function Hr(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(e,n,r){for(var s=Array(arguments.length-2),i=2;i<arguments.length;i++)s[i-2]=arguments[i];return t.prototype[n].apply(e,s)}}function Qr(){this.s=this.s,this.o=this.o}var Yr=0,Xr={};Qr.prototype.s=!1,Qr.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=Yr)){var e=jr(this);delete Xr[e]}},Qr.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Jr=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"===typeof e)return"string"!==typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1},Zr=Array.prototype.forEach?function(e,t,n){Array.prototype.forEach.call(e,t,n)}:function(e,t,n){const r=e.length,s="string"===typeof e?e.split(""):e;for(let i=0;i<r;i++)i in s&&t.call(n,s[i],i,e)};function es(e){e:{var t=va;const n=e.length,r="string"===typeof e?e.split(""):e;for(let s=0;s<n;s++)if(s in r&&t.call(void 0,r[s],s,e)){t=s;break e}t=-1}return 0>t?null:"string"===typeof e?e.charAt(t):e[t]}function ts(e){return Array.prototype.concat.apply([],arguments)}function ns(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function rs(e){return/^[\s\xa0]*$/.test(e)}var ss,is=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function os(e,t){return-1!=e.indexOf(t)}function as(e,t){return e<t?-1:e>t?1:0}e:{var cs=Fr.navigator;if(cs){var us=cs.userAgent;if(us){ss=us;break e}}ss=""}function ls(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function hs(e){const t={};for(const n in e)t[n]=e[n];return t}var ds="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function fs(e,t){let n,r;for(let s=1;s<arguments.length;s++){for(n in r=arguments[s],r)e[n]=r[n];for(let t=0;t<ds.length;t++)n=ds[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function ms(e){return ms[" "](e),e}function ps(e){var t=Cs;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}ms[" "]=Pr;var gs,ys=os(ss,"Opera"),vs=os(ss,"Trident")||os(ss,"MSIE"),ws=os(ss,"Edge"),bs=ws||vs,Is=os(ss,"Gecko")&&!(os(ss.toLowerCase(),"webkit")&&!os(ss,"Edge"))&&!(os(ss,"Trident")||os(ss,"MSIE"))&&!os(ss,"Edge"),_s=os(ss.toLowerCase(),"webkit")&&!os(ss,"Edge");function Es(){var e=Fr.document;return e?e.documentMode:void 0}e:{var Ts="",Ss=function(){var e=ss;return Is?/rv:([^\);]+)(\)|;)/.exec(e):ws?/Edge\/([\d\.]+)/.exec(e):vs?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e):_s?/WebKit\/(\S+)/.exec(e):ys?/(?:Version)[ \/]?(\S+)/.exec(e):void 0}();if(Ss&&(Ts=Ss?Ss[1]:""),vs){var xs=Es();if(null!=xs&&xs>parseFloat(Ts)){gs=String(xs);break e}}gs=Ts}var Ds,Cs={};function As(){return ps((function(){let e=0;const t=is(String(gs)).split("."),n=is("9").split("."),r=Math.max(t.length,n.length);for(let o=0;0==e&&o<r;o++){var s=t[o]||"",i=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],0==s[0].length&&0==i[0].length)break;e=as(0==s[1].length?0:parseInt(s[1],10),0==i[1].length?0:parseInt(i[1],10))||as(0==s[2].length,0==i[2].length)||as(s[2],i[2]),s=s[3],i=i[3]}while(0==e)}return 0<=e}))}if(Fr.document&&vs){var ks=Es();Ds=ks||(parseInt(gs,10)||void 0)}else Ds=void 0;var Ns=Ds,Ls=function(){if(!Fr.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{Fr.addEventListener("test",Pr,t),Fr.removeEventListener("test",Pr,t)}catch(n){}return e}();function Os(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}function Rs(e,t){if(Os.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Is){e:{try{ms(t.nodeName);var s=!0;break e}catch(i){}s=!1}s||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"===typeof e.pointerType?e.pointerType:Ms[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Rs.Z.h.call(this)}}Os.prototype.h=function(){this.defaultPrevented=!0},Hr(Rs,Os);var Ms={2:"touch",3:"pen",4:"mouse"};Rs.prototype.h=function(){Rs.Z.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Vs="closure_listenable_"+(1e6*Math.random()|0),Fs=0;function Ps(e,t,n,r,s){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ia=s,this.key=++Fs,this.ca=this.fa=!1}function Bs(e){e.ca=!0,e.listener=null,e.proxy=null,e.src=null,e.ia=null}function Us(e){this.src=e,this.g={},this.h=0}function js(e,t){var n=t.type;if(n in e.g){var r,s=e.g[n],i=Jr(s,t);(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(Bs(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function qs(e,t,n,r){for(var s=0;s<e.length;++s){var i=e[s];if(!i.ca&&i.listener==t&&i.capture==!!n&&i.ia==r)return s}return-1}Us.prototype.add=function(e,t,n,r,s){var i=e.toString();e=this.g[i],e||(e=this.g[i]=[],this.h++);var o=qs(e,t,r,s);return-1<o?(t=e[o],n||(t.fa=!1)):(t=new Ps(t,this.src,i,!!r,s),t.fa=n,e.push(t)),t};var $s="closure_lm_"+(1e6*Math.random()|0),Ks={};function Gs(e,t,n,r,s){if(r&&r.once)return Hs(e,t,n,r,s);if(Array.isArray(t)){for(var i=0;i<t.length;i++)Gs(e,t[i],n,r,s);return null}return n=ti(n),e&&e[Vs]?e.N(t,n,Ur(r)?!!r.capture:!!r,s):zs(e,t,n,!1,r,s)}function zs(e,t,n,r,s,i){if(!t)throw Error("Invalid event type");var o=Ur(s)?!!s.capture:!!s,a=Zs(e);if(a||(e[$s]=a=new Us(e)),n=a.add(t,n,r,o,i),n.proxy)return n;if(r=Ws(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)Ls||(s=o),void 0===s&&(s=!1),e.addEventListener(t.toString(),r,s);else if(e.attachEvent)e.attachEvent(Xs(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function Ws(){function e(n){return t.call(e.src,e.listener,n)}var t=Js;return e}function Hs(e,t,n,r,s){if(Array.isArray(t)){for(var i=0;i<t.length;i++)Hs(e,t[i],n,r,s);return null}return n=ti(n),e&&e[Vs]?e.O(t,n,Ur(r)?!!r.capture:!!r,s):zs(e,t,n,!0,r,s)}function Qs(e,t,n,r,s){if(Array.isArray(t))for(var i=0;i<t.length;i++)Qs(e,t[i],n,r,s);else r=Ur(r)?!!r.capture:!!r,n=ti(n),e&&e[Vs]?(e=e.i,t=String(t).toString(),t in e.g&&(i=e.g[t],n=qs(i,n,r,s),-1<n&&(Bs(i[n]),Array.prototype.splice.call(i,n,1),0==i.length&&(delete e.g[t],e.h--)))):e&&(e=Zs(e))&&(t=e.g[t.toString()],e=-1,t&&(e=qs(t,n,r,s)),(n=-1<e?t[e]:null)&&Ys(n))}function Ys(e){if("number"!==typeof e&&e&&!e.ca){var t=e.src;if(t&&t[Vs])js(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(Xs(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Zs(t))?(js(n,e),0==n.h&&(n.src=null,t[$s]=null)):Bs(e)}}}function Xs(e){return e in Ks?Ks[e]:Ks[e]="on"+e}function Js(e,t){if(e.ca)e=!0;else{t=new Rs(t,this);var n=e.listener,r=e.ia||e.src;e.fa&&Ys(e),e=n.call(r,t)}return e}function Zs(e){return e=e[$s],e instanceof Us?e:null}var ei="__closure_events_fn_"+(1e9*Math.random()>>>0);function ti(e){return"function"===typeof e?e:(e[ei]||(e[ei]=function(t){return e.handleEvent(t)}),e[ei])}function ni(){Qr.call(this),this.i=new Us(this),this.P=this,this.I=null}function ri(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,"string"===typeof t)t=new Os(t,e);else if(t instanceof Os)t.target=t.target||e;else{var s=t;t=new Os(r,e),fs(t,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=t.g=n[i];s=si(o,r,!0,t)&&s}if(o=t.g=e,s=si(o,r,!0,t)&&s,s=si(o,r,!1,t)&&s,n)for(i=0;i<n.length;i++)o=t.g=n[i],s=si(o,r,!1,t)&&s}function si(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var s=!0,i=0;i<t.length;++i){var o=t[i];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&js(e.i,o),s=!1!==a.call(c,r)&&s}}return s&&!r.defaultPrevented}Hr(ni,Qr),ni.prototype[Vs]=!0,ni.prototype.removeEventListener=function(e,t,n,r){Qs(this,e,t,n,r)},ni.prototype.M=function(){if(ni.Z.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Bs(n[r]);delete t.g[e],t.h--}}this.I=null},ni.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},ni.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var ii=Fr.JSON.stringify;function oi(){var e=pi;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class ai{constructor(){this.h=this.g=null}add(e,t){const n=ui.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}}var ci,ui=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}((()=>new li),(e=>e.reset()));class li{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function hi(e){Fr.setTimeout((()=>{throw e}),0)}function di(e,t){ci||fi(),mi||(ci(),mi=!0),pi.add(e,t)}function fi(){var e=Fr.Promise.resolve(void 0);ci=function(){e.then(gi)}}var mi=!1,pi=new ai;function gi(){for(var e;e=oi();){try{e.h.call(e.g)}catch(n){hi(n)}var t=ui;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}mi=!1}function yi(e,t){ni.call(this),this.h=e||1,this.g=t||Fr,this.j=zr(this.kb,this),this.l=Date.now()}function vi(e){e.da=!1,e.S&&(e.g.clearTimeout(e.S),e.S=null)}function wi(e,t,n){if("function"===typeof e)n&&(e=zr(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=zr(e.handleEvent,e)}return 2147483647<Number(t)?-1:Fr.setTimeout(e,t||0)}function bi(e){e.g=wi((()=>{e.g=null,e.i&&(e.i=!1,bi(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}Hr(yi,ni),Or=yi.prototype,Or.da=!1,Or.S=null,Or.kb=function(){if(this.da){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-e):(this.S&&(this.g.clearTimeout(this.S),this.S=null),ri(this,"tick"),this.da&&(vi(this),this.start()))}},Or.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},Or.M=function(){yi.Z.M.call(this),vi(this),delete this.g};class Ii extends Qr{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:bi(this)}M(){super.M(),this.g&&(Fr.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function _i(e){Qr.call(this),this.h=e,this.g={}}Hr(_i,Qr);var Ei=[];function Ti(e,t,n,r){Array.isArray(n)||(n&&(Ei[0]=n.toString()),n=Ei);for(var s=0;s<n.length;s++){var i=Gs(t,n[s],r||e.handleEvent,!1,e.h||e);if(!i)break;e.g[i.key]=i}}function Si(e){ls(e.g,(function(e,t){this.g.hasOwnProperty(t)&&Ys(e)}),e),e.g={}}function xi(){this.g=!0}function Di(e,t,n,r,s,i){e.info((function(){if(e.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+t+"\n"+n+"\n"+o}))}function Ci(e,t,n,r,s,i,o){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+t+"\n"+n+"\n"+i+" "+o}))}function Ai(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+Ni(e,n)+(r?" "+r:"")}))}function ki(e,t){e.info((function(){return"TIMEOUT: "+t}))}function Ni(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if("noop"!=i&&"stop"!=i&&"close"!=i)for(var o=1;o<s.length;o++)s[o]=""}}}return ii(n)}catch(a){return t}}_i.prototype.M=function(){_i.Z.M.call(this),Si(this)},_i.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},xi.prototype.Aa=function(){this.g=!1},xi.prototype.info=function(){};var Li={},Oi=null;function Ri(){return Oi=Oi||new ni}function Mi(e){Os.call(this,Li.Ma,e)}function Vi(e){const t=Ri();ri(t,new Mi(t,e))}function Fi(e,t){Os.call(this,Li.STAT_EVENT,e),this.stat=t}function Pi(e){const t=Ri();ri(t,new Fi(t,e))}function Bi(e,t){Os.call(this,Li.Na,e),this.size=t}function Ui(e,t){if("function"!==typeof e)throw Error("Fn must not be null and must be a function");return Fr.setTimeout((function(){e()}),t)}Li.Ma="serverreachability",Hr(Mi,Os),Li.STAT_EVENT="statevent",Hr(Fi,Os),Li.Na="timingevent",Hr(Bi,Os);var ji={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},qi={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function $i(){}function Ki(e){return e.h||(e.h=e.i())}function Gi(){}$i.prototype.h=null;var zi,Wi={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Hi(){Os.call(this,"d")}function Qi(){Os.call(this,"c")}function Yi(){}function Xi(e,t,n,r){this.l=e,this.j=t,this.m=n,this.X=r||1,this.V=new _i(this),this.P=Zi,e=bs?125:void 0,this.W=new yi(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Ji}function Ji(){this.i=null,this.g="",this.h=!1}Hr(Hi,Os),Hr(Qi,Os),Hr(Yi,$i),Yi.prototype.g=function(){return new XMLHttpRequest},Yi.prototype.i=function(){return{}},zi=new Yi;var Zi=45e3,eo={},to={};function no(e,t,n){e.K=1,e.v=Co(_o(t)),e.s=n,e.U=!0,ro(e,null)}function ro(e,t){e.F=Date.now(),ao(e),e.A=_o(e.v);var n=e.A,r=e.X;Array.isArray(r)||(r=[String(r)]),$o(n.h,"t",r),e.C=0,n=e.l.H,e.h=new Ji,e.g=Qa(e.l,n?t:null,!e.s),0<e.O&&(e.L=new Ii(zr(e.Ia,e,e.g),e.O)),Ti(e.V,e.g,"readystatechange",e.gb),t=e.H?hs(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.s,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),Vi(1),Di(e.j,e.u,e.A,e.m,e.X,e.s)}function so(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Ba)}function io(e,t,n){let r,s=!0;for(;!e.I&&e.C<n.length;){if(r=oo(e,n),r==to){4==t&&(e.o=4,Pi(14),s=!1),Ai(e.j,e.m,null,"[Incomplete Response]");break}if(r==eo){e.o=4,Pi(15),Ai(e.j,e.m,n,"[Invalid Chunk]"),s=!1;break}Ai(e.j,e.m,r,null),fo(e,r)}so(e)&&r!=to&&r!=eo&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,Pi(16),s=!1),e.i=e.i&&s,s?0<n.length&&!e.aa&&(e.aa=!0,t=e.l,t.g==e&&t.$&&!t.L&&(t.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),ja(t),t.L=!0,Pi(11))):(Ai(e.j,e.m,n,"[Invalid Chunked Response]"),ho(e),lo(e))}function oo(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?to:(n=Number(t.substring(n,r)),isNaN(n)?eo:(r+=1,r+n>t.length?to:(t=t.substr(r,n),e.C=r+n,t)))}function ao(e){e.Y=Date.now()+e.P,co(e,e.P)}function co(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=Ui(zr(e.eb,e),t)}function uo(e){e.B&&(Fr.clearTimeout(e.B),e.B=null)}function lo(e){0==e.l.G||e.I||Ka(e.l,e)}function ho(e){uo(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,vi(e.W),Si(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function fo(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||Xo(n.i,e)))if(n.I=e.N,!e.J&&Xo(n.i,e)&&3==n.G){try{var r=n.Ca.g.parse(t)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var s=r;if(0==s[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;$a(n),Na(n)}Ua(n),Pi(18)}}else n.ta=s[1],0<n.ta-n.U&&37500>s[2]&&n.N&&0==n.A&&!n.v&&(n.v=Ui(zr(n.ab,n),6e3));if(1>=Yo(n.i)&&n.ka){try{n.ka()}catch(u){}n.ka=void 0}}else za(n,11)}else if((e.J||n.g==e)&&$a(n),!rs(t))for(s=n.Ca.g.parse(t),t=0;t<s.length;t++){let u=s[t];if(n.U=u[0],u=u[1],2==n.G)if("c"==u[0]){n.J=u[1],n.la=u[2];const t=u[3];null!=t&&(n.ma=t,n.h.info("VER="+n.ma));const s=u[4];null!=s&&(n.za=s,n.h.info("SVER="+n.za));const l=u[5];null!=l&&"number"===typeof l&&0<l&&(r=1.5*l,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var i=r.i;!i.g&&(os(e,"spdy")||os(e,"quic")||os(e,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(Jo(i,i.h),i.h=null))}if(r.D){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.sa=e,Do(r.F,r.D,e))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-e.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=e;if(r.oa=Ha(r,r.H?r.la:null,r.W),o.J){Zo(r.i,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(uo(a),ao(a)),r.g=o}else Ba(r);0<n.l.length&&Ra(n)}else"stop"!=u[0]&&"close"!=u[0]||za(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?za(n,7):ka(n):"noop"!=u[0]&&n.j&&n.j.wa(u),n.A=0)}Vi(4)}catch(u){}}function mo(e){if(e.R&&"function"==typeof e.R)return e.R();if("string"===typeof e)return e.split("");if(Br(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}function po(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(Br(e)||"string"===typeof e)Zr(e,t,void 0);else{if(e.T&&"function"==typeof e.T)var n=e.T();else if(e.R&&"function"==typeof e.R)n=void 0;else if(Br(e)||"string"===typeof e){n=[];for(var r=e.length,s=0;s<r;s++)n.push(s)}else for(s in n=[],r=0,e)n[r++]=s;r=mo(e),s=r.length;for(var i=0;i<s;i++)t.call(void 0,r[i],n&&n[i],e)}}function go(e,t){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(e)if(e instanceof go)for(n=e.T(),r=0;r<n.length;r++)this.set(n[r],e.get(n[r]));else for(r in e)this.set(r,e[r])}function yo(e){if(e.i!=e.g.length){for(var t=0,n=0;t<e.g.length;){var r=e.g[t];vo(e.h,r)&&(e.g[n++]=r),t++}e.g.length=n}if(e.i!=e.g.length){var s={};for(n=t=0;t<e.g.length;)r=e.g[t],vo(s,r)||(e.g[n++]=r,s[r]=1),t++;e.g.length=n}}function vo(e,t){return Object.prototype.hasOwnProperty.call(e,t)}Or=Xi.prototype,Or.setTimeout=function(e){this.P=e},Or.gb=function(e){e=e.target;const t=this.L;t&&3==Ta(e)?t.l():this.Ia(e)},Or.Ia=function(e){try{if(e==this.g)e:{const l=Ta(this.g);var t=this.g.Da();const h=this.g.ba();if(!(3>l)&&(3!=l||bs||this.g&&(this.h.h||this.g.ga()||Sa(this.g)))){this.I||4!=l||7==t||Vi(8==t||0>=h?3:2),uo(this);var n=this.g.ba();this.N=n;t:if(so(this)){var r=Sa(this.g);e="";var s=r.length,i=4==Ta(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){ho(this),lo(this);var o="";break t}this.h.i=new Fr.TextDecoder}for(t=0;t<s;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:i&&t==s-1});r.splice(0,s),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,Ci(this.j,this.u,this.A,this.m,this.X,l,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!rs(a)){var u=a;break t}}u=null}if(!(n=u)){this.i=!1,this.o=3,Pi(12),ho(this),lo(this);break e}Ai(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,fo(this,n)}this.U?(io(this,l,o),bs&&this.i&&3==l&&(Ti(this.V,this.W,"tick",this.fb),this.W.start())):(Ai(this.j,this.m,o,null),fo(this,o)),4==l&&ho(this),this.i&&!this.I&&(4==l?Ka(this.l,this):(this.i=!1,ao(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,Pi(12)):(this.o=0,Pi(13)),ho(this),lo(this)}}}catch(l){}},Or.fb=function(){if(this.g){var e=Ta(this.g),t=this.g.ga();this.C<t.length&&(uo(this),io(this,e,t),this.i&&4!=e&&ao(this))}},Or.cancel=function(){this.I=!0,ho(this)},Or.eb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(ki(this.j,this.A),2!=this.K&&(Vi(3),Pi(17)),ho(this),this.o=2,lo(this)):co(this,this.Y-e)},Or=go.prototype,Or.R=function(){yo(this);for(var e=[],t=0;t<this.g.length;t++)e.push(this.h[this.g[t]]);return e},Or.T=function(){return yo(this),this.g.concat()},Or.get=function(e,t){return vo(this.h,e)?this.h[e]:t},Or.set=function(e,t){vo(this.h,e)||(this.i++,this.g.push(e)),this.h[e]=t},Or.forEach=function(e,t){for(var n=this.T(),r=0;r<n.length;r++){var s=n[r],i=this.get(s);e.call(t,i,s,this)}};var wo=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function bo(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),s=null;if(0<=r){var i=e[n].substring(0,r);s=e[n].substring(r+1)}else i=e[n];t(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Io(e,t){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,e instanceof Io){this.g=void 0!==t?t:e.g,Eo(this,e.j),this.s=e.s,To(this,e.i),So(this,e.m),this.l=e.l,t=e.h;var n=new Bo;n.i=t.i,t.g&&(n.g=new go(t.g),n.h=t.h),xo(this,n),this.o=e.o}else e&&(n=String(e).match(wo))?(this.g=!!t,Eo(this,n[1]||"",!0),this.s=No(n[2]||""),To(this,n[3]||"",!0),So(this,n[4]),this.l=No(n[5]||"",!0),xo(this,n[6]||"",!0),this.o=No(n[7]||"")):(this.g=!!t,this.h=new Bo(null,this.g))}function _o(e){return new Io(e)}function Eo(e,t,n){e.j=n?No(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function To(e,t,n){e.i=n?No(t,!0):t}function So(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function xo(e,t,n){t instanceof Bo?(e.h=t,Go(e.h,e.g)):(n||(t=Lo(t,Fo)),e.h=new Bo(t,e.g))}function Do(e,t,n){e.h.set(t,n)}function Co(e){return Do(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Ao(e){return e instanceof Io?_o(e):new Io(e,void 0)}function ko(e,t,n,r){var s=new Io(null,void 0);return e&&Eo(s,e),t&&To(s,t),n&&So(s,n),r&&(s.l=r),s}function No(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Lo(e,t,n){return"string"===typeof e?(e=encodeURI(e).replace(t,Oo),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Oo(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(15&e).toString(16)}Io.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Lo(t,Ro,!0),":");var n=this.i;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(Lo(t,Ro,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&e.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&e.push("/"),e.push(Lo(n,"/"==n.charAt(0)?Vo:Mo,!0))),(n=this.h.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Lo(n,Po)),e.join("")};var Ro=/[#\/\?@]/g,Mo=/[#\?:]/g,Vo=/[#\?]/g,Fo=/[#\?@]/g,Po=/#/g;function Bo(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Uo(e){e.g||(e.g=new go,e.h=0,e.i&&bo(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function jo(e,t){Uo(e),t=Ko(e,t),vo(e.g.h,t)&&(e.i=null,e.h-=e.g.get(t).length,e=e.g,vo(e.h,t)&&(delete e.h[t],e.i--,e.g.length>2*e.i&&yo(e)))}function qo(e,t){return Uo(e),t=Ko(e,t),vo(e.g.h,t)}function $o(e,t,n){jo(e,t),0<n.length&&(e.i=null,e.g.set(Ko(e,t),ns(n)),e.h+=n.length)}function Ko(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function Go(e,t){t&&!e.j&&(Uo(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(jo(this,t),$o(this,n,e))}),e)),e.j=t}Or=Bo.prototype,Or.add=function(e,t){Uo(this),this.i=null,e=Ko(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},Or.forEach=function(e,t){Uo(this),this.g.forEach((function(n,r){Zr(n,(function(n){e.call(t,n,r,this)}),this)}),this)},Or.T=function(){Uo(this);for(var e=this.g.R(),t=this.g.T(),n=[],r=0;r<t.length;r++)for(var s=e[r],i=0;i<s.length;i++)n.push(t[r]);return n},Or.R=function(e){Uo(this);var t=[];if("string"===typeof e)qo(this,e)&&(t=ts(t,this.g.get(Ko(this,e))));else{e=this.g.R();for(var n=0;n<e.length;n++)t=ts(t,e[n])}return t},Or.set=function(e,t){return Uo(this),this.i=null,e=Ko(this,e),qo(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},Or.get=function(e,t){return e?(e=this.R(e),0<e.length?String(e[0]):t):t},Or.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=this.g.T(),n=0;n<t.length;n++){var r=t[n],s=encodeURIComponent(String(r));r=this.R(r);for(var i=0;i<r.length;i++){var o=s;""!==r[i]&&(o+="="+encodeURIComponent(String(r[i]))),e.push(o)}}return this.i=e.join("&")};var zo=class{constructor(e,t){this.h=e,this.g=t}};function Wo(e){this.l=e||Ho,Fr.PerformanceNavigationTiming?(e=Fr.performance.getEntriesByType("navigation"),e=0<e.length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol)):e=!!(Fr.g&&Fr.g.Ea&&Fr.g.Ea()&&Fr.g.Ea().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Ho=10;function Qo(e){return!!e.h||!!e.g&&e.g.size>=e.j}function Yo(e){return e.h?1:e.g?e.g.size:0}function Xo(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function Jo(e,t){e.g?e.g.add(t):e.h=t}function Zo(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function ea(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return ns(e.i)}function ta(){}function na(){this.g=new ta}function ra(e,t,n){const r=n||"";try{po(e,(function(e,n){let s=e;Ur(e)&&(s=ii(e)),t.push(r+n+"="+encodeURIComponent(s))}))}catch(s){throw t.push(r+"type="+encodeURIComponent("_badmap")),s}}function sa(e,t){const n=new xi;if(Fr.Image){const r=new Image;r.onload=Wr(ia,n,r,"TestLoadImage: loaded",!0,t),r.onerror=Wr(ia,n,r,"TestLoadImage: error",!1,t),r.onabort=Wr(ia,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=Wr(ia,n,r,"TestLoadImage: timeout",!1,t),Fr.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}function ia(e,t,n,r,s){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,s(r)}catch(i){}}function oa(e){this.l=e.$b||null,this.j=e.ib||!1}function aa(e,t){ni.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=ca,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Wo.prototype.cancel=function(){if(this.i=ea(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},ta.prototype.stringify=function(e){return Fr.JSON.stringify(e,void 0)},ta.prototype.parse=function(e){return Fr.JSON.parse(e,void 0)},Hr(oa,$i),oa.prototype.g=function(){return new aa(this.l,this.j)},oa.prototype.i=function(e){return function(){return e}}({}),Hr(aa,ni);var ca=0;function ua(e){e.j.read().then(e.Sa.bind(e)).catch(e.ha.bind(e))}function la(e){e.readyState=4,e.l=null,e.j=null,e.A=null,ha(e)}function ha(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Or=aa.prototype,Or.open=function(e,t){if(this.readyState!=ca)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,ha(this)},Or.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||Fr).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ha.bind(this))},Or.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,la(this)),this.readyState=ca},Or.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,ha(this)),this.g&&(this.readyState=3,ha(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if("undefined"!==typeof Fr.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ua(this)}else e.text().then(this.Ua.bind(this),this.ha.bind(this))},Or.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?la(this):ha(this),3==this.readyState&&ua(this)}},Or.Ua=function(e){this.g&&(this.response=this.responseText=e,la(this))},Or.Ta=function(e){this.g&&(this.response=e,la(this))},Or.ha=function(){this.g&&la(this)},Or.setRequestHeader=function(e,t){this.v.append(e,t)},Or.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},Or.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(aa.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var da=Fr.JSON.parse;function fa(e){ni.call(this),this.headers=new go,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=ma,this.K=this.L=!1}Hr(fa,ni);var ma="",pa=/^https?$/i,ga=["POST","PUT"];function ya(e){return vs&&As()&&"number"===typeof e.timeout&&void 0!==e.ontimeout}function va(e){return"content-type"==e.toLowerCase()}function wa(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,ba(e),_a(e)}function ba(e){e.D||(e.D=!0,ri(e,"complete"),ri(e,"error"))}function Ia(e){if(e.h&&"undefined"!=typeof Vr&&(!e.C[1]||4!=Ta(e)||2!=e.ba()))if(e.v&&4==Ta(e))wi(e.Fa,0,e);else if(ri(e,"readystatechange"),4==Ta(e)){e.h=!1;try{const c=e.ba();e:switch(c){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===c){var s=String(e.H).match(wo)[1]||null;if(!s&&Fr.self&&Fr.self.location){var i=Fr.self.location.protocol;s=i.substr(0,i.length-1)}r=!pa.test(s?s.toLowerCase():"")}n=r}if(n)ri(e,"complete"),ri(e,"success");else{e.m=6;try{var o=2<Ta(e)?e.g.statusText:""}catch(a){o=""}e.j=o+" ["+e.ba()+"]",ba(e)}}finally{_a(e)}}}function _a(e,t){if(e.g){Ea(e);const r=e.g,s=e.C[0]?Pr:null;e.g=null,e.C=null,t||ri(e,"ready");try{r.onreadystatechange=s}catch(n){}}}function Ea(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(Fr.clearTimeout(e.A),e.A=null)}function Ta(e){return e.g?e.g.readyState:0}function Sa(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case ma:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(t){return null}}function xa(e){let t="";return ls(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function Da(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=xa(n),"string"===typeof e?null!=n&&encodeURIComponent(String(n)):Do(e,t,n))}function Ca(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Aa(e){this.za=0,this.l=[],this.h=new xi,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Ca("failFast",!1,e),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Ca("baseRetryDelayMs",5e3,e),this.$a=Ca("retryDelaySeedMs",1e4,e),this.Ya=Ca("forwardChannelMaxRetries",2,e),this.ra=Ca("forwardChannelRequestTimeoutMs",2e4,e),this.qa=e&&e.xmlHttpFactory||void 0,this.Ba=e&&e.Yb||!1,this.K=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.J="",this.i=new Wo(e&&e.concurrentRequestLimit),this.Ca=new na,this.ja=e&&e.fastHandshake||!1,this.Ra=e&&e.Wb||!1,e&&e.Aa&&this.h.Aa(),e&&e.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&e&&e.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!e||!1!==e.Xb}function ka(e){if(La(e),3==e.G){var t=e.V++,n=_o(e.F);Do(n,"SID",e.J),Do(n,"RID",t),Do(n,"TYPE","terminate"),Fa(e,n),t=new Xi(e,e.h,t,void 0),t.K=2,t.v=Co(_o(n)),n=!1,Fr.navigator&&Fr.navigator.sendBeacon&&(n=Fr.navigator.sendBeacon(t.v.toString(),"")),!n&&Fr.Image&&((new Image).src=t.v,n=!0),n||(t.g=Qa(t.l,null),t.g.ea(t.v)),t.F=Date.now(),ao(t)}Wa(e)}function Na(e){e.g&&(ja(e),e.g.cancel(),e.g=null)}function La(e){Na(e),e.u&&(Fr.clearTimeout(e.u),e.u=null),$a(e),e.i.cancel(),e.m&&("number"===typeof e.m&&Fr.clearTimeout(e.m),e.m=null)}function Oa(e,t){e.l.push(new zo(e.Za++,t)),3==e.G&&Ra(e)}function Ra(e){Qo(e.i)||e.m||(e.m=!0,di(e.Ha,e),e.C=0)}function Ma(e,t){return!(Yo(e.i)>=e.i.j-(e.m?1:0))&&(e.m?(e.l=t.D.concat(e.l),!0):!(1==e.G||2==e.G||e.C>=(e.Xa?0:e.Ya))&&(e.m=Ui(zr(e.Ha,e,t),Ga(e,e.C)),e.C++,!0))}function Va(e,t){var n;n=t?t.m:e.V++;const r=_o(e.F);Do(r,"SID",e.J),Do(r,"RID",n),Do(r,"AID",e.U),Fa(e,r),e.o&&e.s&&Da(r,e.o,e.s),n=new Xi(e,e.h,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.l=t.D.concat(e.l)),t=Pa(e,n,1e3),n.setTimeout(Math.round(.5*e.ra)+Math.round(.5*e.ra*Math.random())),Jo(e.i,n),no(n,r,t)}function Fa(e,t){e.j&&po({},(function(e,n){Do(t,n,e)}))}function Pa(e,t,n){n=Math.min(e.l.length,n);var r=e.j?zr(e.j.Oa,e.j,e):null;e:{var s=e.l;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=s[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let i=!0;for(let o=0;o<n;o++){let n=s[o].h;const a=s[o].g;if(n-=t,0>n)t=Math.max(0,s[o].h-100),i=!1;else try{ra(a,e,"req"+n+"_")}catch(Sc){r&&r(a)}}if(i){r=e.join("&");break e}}}return e=e.l.splice(0,n),t.D=e,r}function Ba(e){e.g||e.u||(e.Y=1,di(e.Ga,e),e.A=0)}function Ua(e){return!(e.g||e.u||3<=e.A)&&(e.Y++,e.u=Ui(zr(e.Ga,e),Ga(e,e.A)),e.A++,!0)}function ja(e){null!=e.B&&(Fr.clearTimeout(e.B),e.B=null)}function qa(e){e.g=new Xi(e,e.h,"rpc",e.Y),null===e.o&&(e.g.H=e.s),e.g.O=0;var t=_o(e.oa);Do(t,"RID","rpc"),Do(t,"SID",e.J),Do(t,"CI",e.N?"0":"1"),Do(t,"AID",e.U),Fa(e,t),Do(t,"TYPE","xmlhttp"),e.o&&e.s&&Da(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.la,n.K=1,n.v=Co(_o(t)),n.s=null,n.U=!0,ro(n,e)}function $a(e){null!=e.v&&(Fr.clearTimeout(e.v),e.v=null)}function Ka(e,t){var n=null;if(e.g==t){$a(e),ja(e),e.g=null;var r=2}else{if(!Xo(e.i,t))return;n=t.D,Zo(e.i,t),r=1}if(e.I=t.N,0!=e.G)if(t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.F;var s=e.C;r=Ri(),ri(r,new Bi(r,n,t,s)),Ra(e)}else Ba(e);else if(s=t.o,3==s||0==s&&0<e.I||!(1==r&&Ma(e,t)||2==r&&Ua(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),s){case 1:za(e,5);break;case 4:za(e,10);break;case 3:za(e,6);break;default:za(e,2)}}function Ga(e,t){let n=e.Pa+Math.floor(Math.random()*e.$a);return e.j||(n*=2),n*t}function za(e,t){if(e.h.info("Error code "+t),2==t){var n=null;e.j&&(n=null);var r=zr(e.jb,e);n||(n=new Io("//www.google.com/images/cleardot.gif"),Fr.location&&"http"==Fr.location.protocol||Eo(n,"https"),Co(n)),sa(n.toString(),r)}else Pi(2);e.G=0,e.j&&e.j.va(t),Wa(e),La(e)}function Wa(e){e.G=0,e.I=-1,e.j&&(0==ea(e.i).length&&0==e.l.length||(e.i.i.length=0,ns(e.l),e.l.length=0),e.j.ua())}function Ha(e,t,n){let r=Ao(n);if(""!=r.i)t&&To(r,t+"."+r.i),So(r,r.m);else{const e=Fr.location;r=ko(e.protocol,t?t+"."+e.hostname:e.hostname,+e.port,n)}return e.aa&&ls(e.aa,(function(e,t){Do(r,t,e)})),t=e.D,n=e.sa,t&&n&&Do(r,t,n),Do(r,"VER",e.ma),Fa(e,r),r}function Qa(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ba&&!e.qa?new fa(new oa({ib:!0})):new fa(e.qa),t.L=e.H,t}function Ya(){}function Xa(){if(vs&&!(10<=Number(Ns)))throw Error("Environmental error: no available transport.")}function Ja(e,t){ni.call(this),this.g=new Aa(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.P=e,(e=t&&t.httpHeadersOverwriteParam)&&!rs(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!rs(t)&&(this.g.D=t,e=this.h,null!==e&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new tc(this)}function Za(e){Hi.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function ec(){Qi.call(this),this.status=1}function tc(e){this.g=e}Or=fa.prototype,Or.ea=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():zi.g(),this.C=this.u?Ki(this.u):Ki(zi),this.g.onreadystatechange=zr(this.Fa,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(i){return void wa(this,i)}e=n||"";const s=new go(this.headers);r&&po(r,(function(e,t){s.set(t,e)})),r=es(s.T()),n=Fr.FormData&&e instanceof Fr.FormData,!(0<=Jr(ga,t))||r||n||s.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),s.forEach((function(e,t){this.g.setRequestHeader(t,e)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Ea(this),0<this.B&&((this.K=ya(this.g))?(this.g.timeout=this.B,this.g.ontimeout=zr(this.pa,this)):this.A=wi(this.pa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(i){wa(this,i)}},Or.pa=function(){"undefined"!=typeof Vr&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ri(this,"timeout"),this.abort(8))},Or.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,ri(this,"complete"),ri(this,"abort"),_a(this))},Or.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),_a(this,!0)),fa.Z.M.call(this)},Or.Fa=function(){this.s||(this.F||this.v||this.l?Ia(this):this.cb())},Or.cb=function(){Ia(this)},Or.ba=function(){try{return 2<Ta(this)?this.g.status:-1}catch(e){return-1}},Or.ga=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},Or.Qa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),da(t)}},Or.Da=function(){return this.m},Or.La=function(){return"string"===typeof this.j?this.j:String(this.j)},Or=Aa.prototype,Or.ma=8,Or.G=1,Or.hb=function(e){try{this.h.info("Origin Trials invoked: "+e)}catch(t){}},Or.Ha=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const s=new Xi(this,this.h,e,void 0);let i=this.s;if(this.P&&(i?(i=hs(i),fs(i,this.P)):i=this.P),null===this.o&&(s.H=i),this.ja)e:{for(var t=0,n=0;n<this.l.length;n++){var r=this.l[n];if(r="__data__"in r.g&&(r=r.g.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(t+=r,4096<t){t=n;break e}if(4096===t||n===this.l.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=Pa(this,s,t),n=_o(this.F),Do(n,"RID",e),Do(n,"CVER",22),this.D&&Do(n,"X-HTTP-Session-Id",this.D),Fa(this,n),this.o&&i&&Da(n,this.o,i),Jo(this.i,s),this.Ra&&Do(n,"TYPE","init"),this.ja?(Do(n,"$req",t),Do(n,"SID","null"),s.$=!0,no(s,n,null)):no(s,n,t),this.G=2}}else 3==this.G&&(e?Va(this,e):0==this.l.length||Qo(this.i)||Va(this))},Or.Ga=function(){if(this.u=null,qa(this),this.$&&!(this.L||null==this.g||0>=this.O)){var e=2*this.O;this.h.info("BP detection timer enabled: "+e),this.B=Ui(zr(this.bb,this),e)}},Or.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Pi(10),Na(this),qa(this))},Or.ab=function(){null!=this.v&&(this.v=null,Na(this),Ua(this),Pi(19))},Or.jb=function(e){e?(this.h.info("Successfully pinged google.com"),Pi(2)):(this.h.info("Failed to ping google.com"),Pi(1))},Or=Ya.prototype,Or.xa=function(){},Or.wa=function(){},Or.va=function(){},Or.ua=function(){},Or.Oa=function(){},Xa.prototype.g=function(e,t){return new Ja(e,t)},Hr(Ja,ni),Ja.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;e.Wa&&(e.h.info("Origin Trials enabled."),di(zr(e.hb,e,t))),Pi(0),e.W=t,e.aa=n||{},e.N=e.X,e.F=Ha(e,null,e.W),Ra(e)},Ja.prototype.close=function(){ka(this.g)},Ja.prototype.u=function(e){if("string"===typeof e){var t={};t.__data__=e,Oa(this.g,t)}else this.v?(t={},t.__data__=ii(e),Oa(this.g,t)):Oa(this.g,e)},Ja.prototype.M=function(){this.g.j=null,delete this.j,ka(this.g),delete this.g,Ja.Z.M.call(this)},Hr(Za,Hi),Hr(ec,Qi),Hr(tc,Ya),tc.prototype.xa=function(){ri(this.g,"a")},tc.prototype.wa=function(e){ri(this.g,new Za(e))},tc.prototype.va=function(e){ri(this.g,new ec(e))},tc.prototype.ua=function(){ri(this.g,"b")},Xa.prototype.createWebChannel=Xa.prototype.g,Ja.prototype.send=Ja.prototype.u,Ja.prototype.open=Ja.prototype.m,Ja.prototype.close=Ja.prototype.close,ji.NO_ERROR=0,ji.TIMEOUT=8,ji.HTTP_ERROR=6,qi.COMPLETE="complete",Gi.EventType=Wi,Wi.OPEN="a",Wi.CLOSE="b",Wi.ERROR="c",Wi.MESSAGE="d",ni.prototype.listen=ni.prototype.N,fa.prototype.listenOnce=fa.prototype.O,fa.prototype.getLastError=fa.prototype.La,fa.prototype.getLastErrorCode=fa.prototype.Da,fa.prototype.getStatus=fa.prototype.ba,fa.prototype.getResponseJson=fa.prototype.Qa,fa.prototype.getResponseText=fa.prototype.ga,fa.prototype.send=fa.prototype.ea;var nc=Mr.createWebChannelTransport=function(){return new Xa},rc=Mr.getStatEventTarget=function(){return Ri()},sc=Mr.ErrorCode=ji,ic=Mr.EventType=qi,oc=Mr.Event=Li,ac=Mr.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},cc=Mr.FetchXmlHttpFactory=oa,uc=Mr.WebChannel=Gi,lc=Mr.XhrIo=fa;const hc="@firebase/firestore";
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
 */class dc{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}dc.UNAUTHENTICATED=new dc(null),dc.GOOGLE_CREDENTIALS=new dc("google-credentials-uid"),dc.FIRST_PARTY=new dc("first-party-uid"),dc.MOCK_USER=new dc("mock-user");
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
let fc="9.9.2";
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
 */const mc=new Rt("@firebase/firestore");function pc(){return mc.logLevel}function gc(e){mc.setLogLevel(e)}function yc(e,...t){if(mc.logLevel<=At.DEBUG){const n=t.map(bc);mc.debug(`Firestore (${fc}): ${e}`,...n)}}function vc(e,...t){if(mc.logLevel<=At.ERROR){const n=t.map(bc);mc.error(`Firestore (${fc}): ${e}`,...n)}}function wc(e,...t){if(mc.logLevel<=At.WARN){const n=t.map(bc);mc.warn(`Firestore (${fc}): ${e}`,...n)}}function bc(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
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
 */function Ic(e="Unexpected state"){const t=`FIRESTORE (${fc}) INTERNAL ASSERTION FAILED: `+e;throw vc(t),new Error(t)}function _c(e,t){e||Ic()}function Ec(e,t){e||Ic()}function Tc(e,t){return e}
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
 */const Sc={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class xc extends lt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
 */class Dc{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
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
 */class Cc{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Ac{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(dc.UNAUTHENTICATED)))}shutdown(){}}class kc{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class Nc{constructor(e){this.t=e,this.currentUser=dc.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let s=new Dc;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Dc,e.enqueueRetryable((()=>r(this.currentUser)))};const i=()=>{const t=s;e.enqueueRetryable((async()=>{await t.promise,await r(this.currentUser)}))},o=e=>{yc("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),i()};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(yc("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Dc)}}),0),i()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(yc("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(_c("string"==typeof t.accessToken),new Cc(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return _c(null===e||"string"==typeof e),new dc(e)}}class Lc{constructor(e,t,n){this.type="FirstParty",this.user=dc.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",t);const r=e.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class Oc{constructor(e,t,n){this.h=e,this.l=t,this.m=n}getToken(){return Promise.resolve(new Lc(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable((()=>t(dc.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Rc{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Mc{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,t){const n=e=>{null!=e.error&&yc("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.p;return this.p=e.token,yc("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const r=e=>{yc("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.g.onInit((e=>r(e))),setTimeout((()=>{if(!this.appCheck){const e=this.g.getImmediate({optional:!0});e?r(e):yc("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(_c("string"==typeof e.token),this.p=e.token,new Rc(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
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
function Vc(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
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
 */class Fc{static I(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=Vc(40);for(let s=0;s<r.length;++s)n.length<20&&r[s]<t&&(n+=e.charAt(r[s]%e.length))}return n}}function Pc(e,t){return e<t?-1:e>t?1:0}function Bc(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}function Uc(e){return e+"\0"}
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
 */class jc{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new xc(Sc.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new xc(Sc.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new xc(Sc.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new xc(Sc.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return jc.fromMillis(Date.now())}static fromDate(e){return jc.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new jc(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Pc(this.nanoseconds,e.nanoseconds):Pc(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
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
 */class qc{constructor(e){this.timestamp=e}static fromTimestamp(e){return new qc(e)}static min(){return new qc(new jc(0,0))}static max(){return new qc(new jc(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
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
 */class $c{constructor(e,t,n){void 0===t?t=0:t>e.length&&Ic(),void 0===n?n=e.length-t:n>e.length-t&&Ic(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===$c.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof $c?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),s=t.get(r);if(n<s)return-1;if(n>s)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Kc extends $c{construct(e,t,n){return new Kc(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new xc(Sc.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new Kc(t)}static emptyPath(){return new Kc([])}}const Gc=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class zc extends $c{construct(e,t,n){return new zc(e,t,n)}static isValidIdentifier(e){return Gc.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),zc.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new zc(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const s=()=>{if(0===n.length)throw new xc(Sc.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let i=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new xc(Sc.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new xc(Sc.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(i=!i,r++):"."!==t||i?(n+=t,r++):(s(),r++)}if(s(),i)throw new xc(Sc.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new zc(t)}static emptyPath(){return new zc([])}}
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
 */class Wc{constructor(e){this.path=e}static fromPath(e){return new Wc(Kc.fromString(e))}static fromName(e){return new Wc(Kc.fromString(e).popFirst(5))}static empty(){return new Wc(Kc.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===Kc.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return Kc.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Wc(new Kc(e.slice()))}}
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
 */class Hc{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}function Qc(e){return e.fields.find((e=>2===e.kind))}function Yc(e){return e.fields.filter((e=>2!==e.kind))}Hc.UNKNOWN_ID=-1;class Xc{constructor(e,t){this.fieldPath=e,this.kind=t}}class Jc{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Jc(0,tu.min())}}function Zc(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,s=qc.fromTimestamp(1e9===r?new jc(n+1,0):new jc(n,r));return new tu(s,Wc.empty(),t)}function eu(e){return new tu(e.readTime,e.key,-1)}class tu{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new tu(qc.min(),Wc.empty(),-1)}static max(){return new tu(qc.max(),Wc.empty(),-1)}}function nu(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=Wc.comparator(e.documentKey,t.documentKey),0!==n?n:Pc(e.largestBatchId,t.largestBatchId))}
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
 */const ru="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class su{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
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
 */async function iu(e){if(e.code!==Sc.FAILED_PRECONDITION||e.message!==ru)throw e;yc("LocalStore","Unexpectedly lost primary lease")}
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
 */class ou{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Ic(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new ou(((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof ou?t:ou.resolve(t)}catch(e){return ou.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):ou.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):ou.reject(t)}static resolve(e){return new ou(((t,n)=>{t(e)}))}static reject(e){return new ou(((t,n)=>{n(e)}))}static waitFor(e){return new ou(((t,n)=>{let r=0,s=0,i=!1;e.forEach((e=>{++r,e.next((()=>{++s,i&&s===r&&t()}),(e=>n(e)))})),i=!0,s===r&&t()}))}static or(e){let t=ou.resolve(!1);for(const n of e)t=t.next((e=>e?ou.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,r)=>{n.push(t.call(this,e,r))})),this.waitFor(n)}static mapArray(e,t){return new ou(((n,r)=>{const s=e.length,i=new Array(s);let o=0;for(let a=0;a<s;a++){const c=a;t(e[c]).next((e=>{i[c]=e,++o,o===s&&n(i)}),(e=>r(e)))}}))}static doWhile(e,t){return new ou(((n,r)=>{const s=()=>{!0===e()?t().next((()=>{s()}),r):n()};s()}))}}
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
 */class au{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.T=new Dc,this.transaction.oncomplete=()=>{this.T.resolve()},this.transaction.onabort=()=>{t.error?this.T.reject(new lu(e,t.error)):this.T.resolve()},this.transaction.onerror=t=>{const n=pu(t.target.error);this.T.reject(new lu(e,n))}}static open(e,t,n,r){try{return new au(t,e.transaction(r,n))}catch(e){throw new lu(t,e)}}get A(){return this.T.promise}abort(e){e&&this.T.reject(e),this.aborted||(yc("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}R(){const e=this.transaction;this.aborted||"function"!=typeof e.commit||e.commit()}store(e){const t=this.transaction.objectStore(e);return new du(t)}}class cu{constructor(e,t,n){this.name=e,this.version=t,this.P=n,12.2===cu.v(Xe())&&vc("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return yc("SimpleDb","Removing database:",e),fu(window.indexedDB.deleteDatabase(e)).toPromise()}static V(){if(!at())return!1;if(cu.S())return!0;const e=Xe(),t=cu.v(e),n=0<t&&t<10,r=cu.D(e),s=0<r&&r<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||s)}static S(){var e;return"undefined"!=typeof process&&"YES"===(null===(e={NODE_ENV:"production",BASE_URL:"/"})||void 0===e?void 0:e.C)}static N(e,t){return e.store(t)}static v(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}static D(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}async k(e){return this.db||(yc("SimpleDb","Opening database:",this.name),this.db=await new Promise(((t,n)=>{const r=indexedDB.open(this.name,this.version);r.onsuccess=e=>{const n=e.target.result;t(n)},r.onblocked=()=>{n(new lu(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=t=>{const r=t.target.error;"VersionError"===r.name?n(new xc(Sc.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===r.name?n(new xc(Sc.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+r)):n(new lu(e,r))},r.onupgradeneeded=e=>{yc("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',e.oldVersion);const t=e.target.result;this.P.M(t,r.transaction,e.oldVersion,this.version).next((()=>{yc("SimpleDb","Database upgrade to version "+this.version+" complete")}))}}))),this.O&&(this.db.onversionchange=e=>this.O(e)),this.db}F(e){this.O=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,r){const s="readonly"===t;let i=0;for(;;){++i;try{this.db=await this.k(e);const t=au.open(this.db,e,s?"readonly":"readwrite",n),i=r(t).next((e=>(t.R(),e))).catch((e=>(t.abort(e),ou.reject(e)))).toPromise();return i.catch((()=>{})),await t.A,i}catch(e){const t=e,n="FirebaseError"!==t.name&&i<3;if(yc("SimpleDb","Transaction failed with error:",t.message,"Retrying:",n),this.close(),!n)return Promise.reject(t)}}}close(){this.db&&this.db.close(),this.db=void 0}}class uu{constructor(e){this.$=e,this.B=!1,this.L=null}get isDone(){return this.B}get U(){return this.L}set cursor(e){this.$=e}done(){this.B=!0}q(e){this.L=e}delete(){return fu(this.$.delete())}}class lu extends xc{constructor(e,t){super(Sc.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function hu(e){return"IndexedDbTransactionError"===e.name}class du{constructor(e){this.store=e}put(e,t){let n;return void 0!==t?(yc("SimpleDb","PUT",this.store.name,e,t),n=this.store.put(t,e)):(yc("SimpleDb","PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),fu(n)}add(e){return yc("SimpleDb","ADD",this.store.name,e,e),fu(this.store.add(e))}get(e){return fu(this.store.get(e)).next((t=>(void 0===t&&(t=null),yc("SimpleDb","GET",this.store.name,e,t),t)))}delete(e){return yc("SimpleDb","DELETE",this.store.name,e),fu(this.store.delete(e))}count(){return yc("SimpleDb","COUNT",this.store.name),fu(this.store.count())}K(e,t){const n=this.options(e,t);if(n.index||"function"!=typeof this.store.getAll){const e=this.cursor(n),t=[];return this.G(e,((e,n)=>{t.push(n)})).next((()=>t))}{const e=this.store.getAll(n.range);return new ou(((t,n)=>{e.onerror=e=>{n(e.target.error)},e.onsuccess=e=>{t(e.target.result)}}))}}j(e,t){const n=this.store.getAll(e,null===t?void 0:t);return new ou(((e,t)=>{n.onerror=e=>{t(e.target.error)},n.onsuccess=t=>{e(t.target.result)}}))}W(e,t){yc("SimpleDb","DELETE ALL",this.store.name);const n=this.options(e,t);n.H=!1;const r=this.cursor(n);return this.G(r,((e,t,n)=>n.delete()))}J(e,t){let n;t?n=e:(n={},t=e);const r=this.cursor(n);return this.G(r,t)}Y(e){const t=this.cursor({});return new ou(((n,r)=>{t.onerror=e=>{const t=pu(e.target.error);r(t)},t.onsuccess=t=>{const r=t.target.result;r?e(r.primaryKey,r.value).next((e=>{e?r.continue():n()})):n()}}))}G(e,t){const n=[];return new ou(((r,s)=>{e.onerror=e=>{s(e.target.error)},e.onsuccess=e=>{const s=e.target.result;if(!s)return void r();const i=new uu(s),o=t(s.primaryKey,s.value,i);if(o instanceof ou){const e=o.catch((e=>(i.done(),ou.reject(e))));n.push(e)}i.isDone?r():null===i.U?s.continue():s.continue(i.U)}})).next((()=>ou.waitFor(n)))}options(e,t){let n;return void 0!==e&&("string"==typeof e?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.H?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function fu(e){return new ou(((t,n)=>{e.onsuccess=e=>{const n=e.target.result;t(n)},e.onerror=e=>{const t=pu(e.target.error);n(t)}}))}let mu=!1;function pu(e){const t=cu.v(Xe());if(t>=12.2&&t<13){const t="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(t)>=0){const e=new xc("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return mu||(mu=!0,setTimeout((()=>{throw e}),0)),e}}return e}class gu{constructor(e,t){this.asyncQueue=e,this.X=t,this.task=null}start(){this.Z(15)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return null!==this.task}Z(e){yc("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,(async()=>{this.task=null;try{yc("IndexBackiller",`Documents written: ${await this.X.tt()}`)}catch(e){hu(e)?yc("IndexBackiller","Ignoring IndexedDB error during index backfill: ",e):await iu(e)}await this.Z(1)}))}}class yu{constructor(e,t){this.localStore=e,this.persistence=t}async tt(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",(t=>this.et(t,e)))}et(e,t){const n=new Set;let r=t,s=!0;return ou.doWhile((()=>!0===s&&r>0),(()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next((t=>{if(null!==t&&!n.has(t))return yc("IndexBackiller",`Processing collection: ${t}`),this.nt(e,t,r).next((e=>{r-=e,n.add(t)}));s=!1})))).next((()=>t-r))}nt(e,t,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next((r=>this.localStore.localDocuments.getNextDocuments(e,t,r,n).next((n=>{const s=n.changes;return this.localStore.indexManager.updateIndexEntries(e,s).next((()=>this.st(r,n))).next((n=>(yc("IndexBackiller",`Updating offset: ${n}`),this.localStore.indexManager.updateCollectionGroup(e,t,n)))).next((()=>s.size))}))))}st(e,t){let n=e;return t.changes.forEach(((e,t)=>{const r=eu(t);nu(r,n)>0&&(n=r)})),new tu(n.readTime,n.documentKey,Math.max(t.batchId,e.largestBatchId))}}
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
 */class vu{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.it(e),this.rt=e=>t.writeSequenceNumber(e))}it(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.rt&&this.rt(e),e}}
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
 */function wu(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function bu(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Iu(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
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
 */vu.ot=-1;class _u{constructor(e,t){this.comparator=e,this.root=t||Tu.EMPTY}insert(e,t){return new _u(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Tu.BLACK,null,null))}remove(e){return new _u(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Tu.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Eu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Eu(this.root,e,this.comparator,!1)}getReverseIterator(){return new Eu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Eu(this.root,e,this.comparator,!0)}}class Eu{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,t&&r&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(0===s){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Tu{constructor(e,t,n,r,s){this.key=e,this.value=t,this.color=null!=n?n:Tu.RED,this.left=null!=r?r:Tu.EMPTY,this.right=null!=s?s:Tu.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,s){return new Tu(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const s=n(e,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===s?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Tu.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return Tu.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Tu.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Tu.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ic();if(this.right.isRed())throw Ic();const e=this.left.check();if(e!==this.right.check())throw Ic();return e+(this.isRed()?0:1)}}Tu.EMPTY=null,Tu.RED=!0,Tu.BLACK=!1,Tu.EMPTY=new class{constructor(){this.size=0}get key(){throw Ic()}get value(){throw Ic()}get color(){throw Ic()}get left(){throw Ic()}get right(){throw Ic()}copy(e,t,n,r,s){return this}insert(e,t,n){return new Tu(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
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
class Su{constructor(e){this.comparator=e,this.data=new _u(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new xu(this.data.getIterator())}getIteratorFrom(e){return new xu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof Su))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Su(this.comparator);return t.data=e,t}}class xu{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Du(e){return e.hasNext()?e.getNext():void 0}
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
 */class Cu{constructor(e){this.fields=e,e.sort(zc.comparator)}static empty(){return new Cu([])}unionWith(e){let t=new Su(zc.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new Cu(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Bc(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
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
 */function Au(){return"undefined"!=typeof atob}
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
 */class ku{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new ku(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new ku(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
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
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Pc(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ku.EMPTY_BYTE_STRING=new ku("");const Nu=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Lu(e){if(_c(!!e),"string"==typeof e){let t=0;const n=Nu.exec(e);if(_c(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Ou(e.seconds),nanos:Ou(e.nanos)}}function Ou(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function Ru(e){return"string"==typeof e?ku.fromBase64String(e):ku.fromUint8Array(e)}
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
 */function Mu(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Vu(e){const t=e.mapValue.fields.__previous_value__;return Mu(t)?Vu(t):t}function Fu(e){const t=Lu(e.mapValue.fields.__local_write_time__.timestampValue);return new jc(t.seconds,t.nanos)}
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
 */class Pu{constructor(e,t,n,r,s,i,o,a){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=s,this.forceLongPolling=i,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Bu{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Bu("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof Bu&&e.projectId===this.projectId&&e.database===this.database}}
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
 */function Uu(e){return null==e}function ju(e){return 0===e&&1/e==-1/0}function qu(e){return"number"==typeof e&&Number.isInteger(e)&&!ju(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
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
 */const $u={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Ku={nullValue:"NULL_VALUE"};function Gu(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Mu(e)?4:il(e)?9007199254740991:10:Ic()}function zu(e,t){if(e===t)return!0;const n=Gu(e);if(n!==Gu(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Fu(e).isEqual(Fu(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=Lu(e.timestampValue),r=Lu(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return Ru(e.bytesValue).isEqual(Ru(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Ou(e.geoPointValue.latitude)===Ou(t.geoPointValue.latitude)&&Ou(e.geoPointValue.longitude)===Ou(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Ou(e.integerValue)===Ou(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=Ou(e.doubleValue),r=Ou(t.doubleValue);return n===r?ju(n)===ju(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return Bc(e.arrayValue.values||[],t.arrayValue.values||[],zu);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(wu(n)!==wu(r))return!1;for(const s in n)if(n.hasOwnProperty(s)&&(void 0===r[s]||!zu(n[s],r[s])))return!1;return!0}(e,t);default:return Ic()}}function Wu(e,t){return void 0!==(e.values||[]).find((e=>zu(e,t)))}function Hu(e,t){if(e===t)return 0;const n=Gu(e),r=Gu(t);if(n!==r)return Pc(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Pc(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=Ou(e.integerValue||e.doubleValue),r=Ou(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return Qu(e.timestampValue,t.timestampValue);case 4:return Qu(Fu(e),Fu(t));case 5:return Pc(e.stringValue,t.stringValue);case 6:return function(e,t){const n=Ru(e),r=Ru(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let s=0;s<n.length&&s<r.length;s++){const e=Pc(n[s],r[s]);if(0!==e)return e}return Pc(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=Pc(Ou(e.latitude),Ou(t.latitude));return 0!==n?n:Pc(Ou(e.longitude),Ou(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let s=0;s<n.length&&s<r.length;++s){const e=Hu(n[s],r[s]);if(e)return e}return Pc(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===$u.mapValue&&t===$u.mapValue)return 0;if(e===$u.mapValue)return 1;if(t===$u.mapValue)return-1;const n=e.fields||{},r=Object.keys(n),s=t.fields||{},i=Object.keys(s);r.sort(),i.sort();for(let o=0;o<r.length&&o<i.length;++o){const e=Pc(r[o],i[o]);if(0!==e)return e;const t=Hu(n[r[o]],s[i[o]]);if(0!==t)return t}return Pc(r.length,i.length)}(e.mapValue,t.mapValue);default:throw Ic()}}function Qu(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return Pc(e,t);const n=Lu(e),r=Lu(t),s=Pc(n.seconds,r.seconds);return 0!==s?s:Pc(n.nanos,r.nanos)}function Yu(e){return Xu(e)}function Xu(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=Lu(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Ru(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,Wc.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=Xu(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const s of t)r?r=!1:n+=",",n+=`${s}:${Xu(e.fields[s])}`;return n+"}"}(e.mapValue):Ic();var t,n}function Ju(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function Zu(e){return!!e&&"integerValue"in e}function el(e){return!!e&&"arrayValue"in e}function tl(e){return!!e&&"nullValue"in e}function nl(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function rl(e){return!!e&&"mapValue"in e}function sl(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return bu(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=sl(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=sl(e.arrayValue.values[n]);return t}return Object.assign({},e)}function il(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}function ol(e){return"nullValue"in e?Ku:"booleanValue"in e?{booleanValue:!1}:"integerValue"in e||"doubleValue"in e?{doubleValue:NaN}:"timestampValue"in e?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in e?{stringValue:""}:"bytesValue"in e?{bytesValue:""}:"referenceValue"in e?Ju(Bu.empty(),Wc.empty()):"geoPointValue"in e?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in e?{arrayValue:{}}:"mapValue"in e?{mapValue:{}}:Ic()}function al(e){return"nullValue"in e?{booleanValue:!1}:"booleanValue"in e?{doubleValue:NaN}:"integerValue"in e||"doubleValue"in e?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in e?{stringValue:""}:"stringValue"in e?{bytesValue:""}:"bytesValue"in e?Ju(Bu.empty(),Wc.empty()):"referenceValue"in e?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in e?{arrayValue:{}}:"arrayValue"in e?{mapValue:{}}:"mapValue"in e?$u:Ic()}function cl(e,t){const n=Hu(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?-1:!e.inclusive&&t.inclusive?1:0}function ul(e,t){const n=Hu(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?1:!e.inclusive&&t.inclusive?-1:0}
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
 */class ll{constructor(e){this.value=e}static empty(){return new ll({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!rl(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=sl(t)}setAll(e){let t=zc.emptyPath(),n={},r=[];e.forEach(((e,s)=>{if(!t.isImmediateParentOf(s)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=s.popLast()}e?n[s.lastSegment()]=sl(e):r.push(s.lastSegment())}));const s=this.getFieldsMap(t);this.applyChanges(s,n,r)}delete(e){const t=this.field(e.popLast());rl(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return zu(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];rl(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){bu(t,((t,n)=>e[t]=n));for(const r of n)delete e[r]}clone(){return new ll(sl(this.value))}}function hl(e){const t=[];return bu(e.fields,((e,n)=>{const r=new zc([e]);if(rl(n)){const e=hl(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)})),new Cu(t)
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
 */}class dl{constructor(e,t,n,r,s,i){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.data=s,this.documentState=i}static newInvalidDocument(e){return new dl(e,0,qc.min(),qc.min(),ll.empty(),0)}static newFoundDocument(e,t,n){return new dl(e,1,t,qc.min(),n,0)}static newNoDocument(e,t){return new dl(e,2,t,qc.min(),ll.empty(),0)}static newUnknownDocument(e,t){return new dl(e,3,t,qc.min(),ll.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ll.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ll.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=qc.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof dl&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new dl(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
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
 */class fl{constructor(e,t=null,n=[],r=[],s=null,i=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=s,this.startAt=i,this.endAt=o,this.ut=null}}function ml(e,t=null,n=[],r=[],s=null,i=null,o=null){return new fl(e,t,n,r,s,i,o)}function pl(e){const t=Tc(e);if(null===t.ut){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>{return(t=e).field.canonicalString()+t.op.toString()+Yu(t.value);var t})).join(","),e+="|ob:",e+=t.orderBy.map((e=>function(e){return e.field.canonicalString()+e.dir}(e))).join(","),Uu(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>Yu(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>Yu(e))).join(",")),t.ut=e}return t.ut}function gl(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>{return`${(t=e).field.canonicalString()} ${t.op} ${Yu(t.value)}`;var t})).join(", ")}]`),Uu(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e))).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>Yu(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>Yu(e))).join(",")),`Target(${t})`}function yl(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let s=0;s<e.orderBy.length;s++)if(!Ol(e.orderBy[s],t.orderBy[s]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let s=0;s<e.filters.length;s++)if(n=e.filters[s],r=t.filters[s],n.op!==r.op||!n.field.isEqual(r.field)||!zu(n.value,r.value))return!1;var n,r;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Ml(e.startAt,t.startAt)&&Ml(e.endAt,t.endAt)}function vl(e){return Wc.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}function wl(e,t){return e.filters.filter((e=>e instanceof _l&&e.field.isEqual(t)))}function bl(e,t,n){let r=Ku,s=!0;for(const i of wl(e,t)){let e=Ku,t=!0;switch(i.op){case"<":case"<=":e=ol(i.value);break;case"==":case"in":case">=":e=i.value;break;case">":e=i.value,t=!1;break;case"!=":case"not-in":e=Ku}cl({value:r,inclusive:s},{value:e,inclusive:t})<0&&(r=e,s=t)}if(null!==n)for(let i=0;i<e.orderBy.length;++i)if(e.orderBy[i].field.isEqual(t)){const e=n.position[i];cl({value:r,inclusive:s},{value:e,inclusive:n.inclusive})<0&&(r=e,s=n.inclusive);break}return{value:r,inclusive:s}}function Il(e,t,n){let r=$u,s=!0;for(const i of wl(e,t)){let e=$u,t=!0;switch(i.op){case">=":case">":e=al(i.value),t=!1;break;case"==":case"in":case"<=":e=i.value;break;case"<":e=i.value,t=!1;break;case"!=":case"not-in":e=$u}ul({value:r,inclusive:s},{value:e,inclusive:t})>0&&(r=e,s=t)}if(null!==n)for(let i=0;i<e.orderBy.length;++i)if(e.orderBy[i].field.isEqual(t)){const e=n.position[i];ul({value:r,inclusive:s},{value:e,inclusive:n.inclusive})>0&&(r=e,s=n.inclusive);break}return{value:r,inclusive:s}}class _l extends class{}{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.ct(e,t,n):new El(e,t,n):"array-contains"===t?new Dl(e,n):"in"===t?new Cl(e,n):"not-in"===t?new Al(e,n):"array-contains-any"===t?new kl(e,n):new _l(e,t,n)}static ct(e,t,n){return"in"===t?new Tl(e,n):new Sl(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.at(Hu(t,this.value)):null!==t&&Gu(this.value)===Gu(t)&&this.at(Hu(t,this.value))}at(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return Ic()}}ht(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class El extends _l{constructor(e,t,n){super(e,t,n),this.key=Wc.fromName(n.referenceValue)}matches(e){const t=Wc.comparator(e.key,this.key);return this.at(t)}}class Tl extends _l{constructor(e,t){super(e,"in",t),this.keys=xl("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Sl extends _l{constructor(e,t){super(e,"not-in",t),this.keys=xl("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function xl(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>Wc.fromName(e.referenceValue)))}class Dl extends _l{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return el(t)&&Wu(t.arrayValue,this.value)}}class Cl extends _l{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&Wu(this.value.arrayValue,t)}}class Al extends _l{constructor(e,t){super(e,"not-in",t)}matches(e){if(Wu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!Wu(this.value.arrayValue,t)}}class kl extends _l{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!el(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>Wu(this.value.arrayValue,e)))}}class Nl{constructor(e,t){this.position=e,this.inclusive=t}}class Ll{constructor(e,t="asc"){this.field=e,this.dir=t}}function Ol(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function Rl(e,t,n){let r=0;for(let s=0;s<e.position.length;s++){const i=t[s],o=e.position[s];if(r=i.field.isKeyField()?Wc.comparator(Wc.fromName(o.referenceValue),n.key):Hu(o,n.data.field(i.field)),"desc"===i.dir&&(r*=-1),0!==r)break}return r}function Ml(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!zu(e.position[n],t.position[n]))return!1;return!0}
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
 */class Vl{constructor(e,t=null,n=[],r=[],s=null,i="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=s,this.limitType=i,this.startAt=o,this.endAt=a,this.lt=null,this.ft=null,this.startAt,this.endAt}}function Fl(e,t,n,r,s,i,o,a){return new Vl(e,t,n,r,s,i,o,a)}function Pl(e){return new Vl(e)}function Bl(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function Ul(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function jl(e){for(const t of e.filters)if(t.ht())return t.field;return null}function ql(e){return null!==e.collectionGroup}function $l(e){const t=Tc(e);if(null===t.lt){t.lt=[];const e=jl(t),n=Ul(t);if(null!==e&&null===n)e.isKeyField()||t.lt.push(new Ll(e)),t.lt.push(new Ll(zc.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.lt.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.lt.push(new Ll(zc.keyField(),e))}}}return t.lt}function Kl(e){const t=Tc(e);if(!t.ft)if("F"===t.limitType)t.ft=ml(t.path,t.collectionGroup,$l(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const s of $l(t)){const t="desc"===s.dir?"asc":"desc";e.push(new Ll(s.field,t))}const n=t.endAt?new Nl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Nl(t.startAt.position,t.startAt.inclusive):null;t.ft=ml(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}return t.ft}function Gl(e,t,n){return new Vl(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function zl(e,t){return yl(Kl(e),Kl(t))&&e.limitType===t.limitType}function Wl(e){return`${pl(Kl(e))}|lt:${e.limitType}`}function Hl(e){return`Query(target=${gl(Kl(e))}; limitType=${e.limitType})`}function Ql(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):Wc.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of e.explicitOrderBy)if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,n){const r=Rl(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,$l(e),t))&&!(e.endAt&&!function(e,t,n){const r=Rl(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,$l(e),t))}(e,t)}function Yl(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Xl(e){return(t,n)=>{let r=!1;for(const s of $l(e)){const e=Jl(s,t,n);if(0!==e)return e;r=r||s.field.isKeyField()}return 0}}function Jl(e,t,n){const r=e.field.isKeyField()?Wc.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),s=n.data.field(e);return null!==r&&null!==s?Hu(r,s):Ic()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return Ic()}}
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
 */function Zl(e,t){if(e.dt){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ju(t)?"-0":t}}function eh(e){return{integerValue:""+e}}function th(e,t){return qu(t)?eh(t):Zl(e,t)}
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
 */class nh{constructor(){this._=void 0}}function rh(e,t,n){return e instanceof oh?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof ah?ch(e,t):e instanceof uh?lh(e,t):function(e,t){const n=ih(e,t),r=dh(n)+dh(e._t);return Zu(n)&&Zu(e._t)?eh(r):Zl(e.wt,r)}(e,t)}function sh(e,t,n){return e instanceof ah?ch(e,t):e instanceof uh?lh(e,t):n}function ih(e,t){return e instanceof hh?Zu(n=t)||function(e){return!!e&&"doubleValue"in e}(n)?t:{integerValue:0}:null;var n}class oh extends nh{}class ah extends nh{constructor(e){super(),this.elements=e}}function ch(e,t){const n=fh(t);for(const r of e.elements)n.some((e=>zu(e,r)))||n.push(r);return{arrayValue:{values:n}}}class uh extends nh{constructor(e){super(),this.elements=e}}function lh(e,t){let n=fh(t);for(const r of e.elements)n=n.filter((e=>!zu(e,r)));return{arrayValue:{values:n}}}class hh extends nh{constructor(e,t){super(),this.wt=e,this._t=t}}function dh(e){return Ou(e.integerValue||e.doubleValue)}function fh(e){return el(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
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
 */class mh{constructor(e,t){this.field=e,this.transform=t}}function ph(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof ah&&t instanceof ah||e instanceof uh&&t instanceof uh?Bc(e.elements,t.elements,zu):e instanceof hh&&t instanceof hh?zu(e._t,t._t):e instanceof oh&&t instanceof oh}(e.transform,t.transform)}class gh{constructor(e,t){this.version=e,this.transformResults=t}}class yh{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new yh}static exists(e){return new yh(void 0,e)}static updateTime(e){return new yh(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function vh(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class wh{}function bh(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new kh(e.key,yh.none()):new Sh(e.key,e.data,yh.none());{const n=e.data,r=ll.empty();let s=new Su(zc.comparator);for(let e of t.fields)if(!s.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),s=s.add(e)}return new xh(e.key,r,new Cu(s.toArray()),yh.none())}}function Ih(e,t,n){e instanceof Sh?function(e,t,n){const r=e.value.clone(),s=Ch(e.fieldTransforms,t,n.transformResults);r.setAll(s),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof xh?function(e,t,n){if(!vh(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=Ch(e.fieldTransforms,t,n.transformResults),s=t.data;s.setAll(Dh(e)),s.setAll(r),t.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function _h(e,t,n,r){return e instanceof Sh?function(e,t,n,r){if(!vh(e.precondition,t))return n;const s=e.value.clone(),i=Ah(e.fieldTransforms,r,t);return s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null}(e,t,n,r):e instanceof xh?function(e,t,n,r){if(!vh(e.precondition,t))return n;const s=Ah(e.fieldTransforms,r,t),i=t.data;return i.setAll(Dh(e)),i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,n,r):function(e,t,n){return vh(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}(e,t,n)}function Eh(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),s=ih(r.transform,e||null);null!=s&&(null===n&&(n=ll.empty()),n.set(r.field,s))}return n||null}function Th(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&Bc(e,t,((e,t)=>ph(e,t)))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Sh extends wh{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class xh extends wh{constructor(e,t,n,r,s=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Dh(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}})),t}function Ch(e,t,n){const r=new Map;_c(e.length===n.length);for(let s=0;s<n.length;s++){const i=e[s],o=i.transform,a=t.data.field(i.field);r.set(i.field,sh(o,a,n[s]))}return r}function Ah(e,t,n){const r=new Map;for(const s of e){const e=s.transform,i=n.data.field(s.field);r.set(s.field,rh(e,i,t))}return r}class kh extends wh{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Nh extends wh{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
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
 */class Lh{constructor(e){this.count=e}}
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
 */var Oh,Rh;function Mh(e){switch(e){default:return Ic();case Sc.CANCELLED:case Sc.UNKNOWN:case Sc.DEADLINE_EXCEEDED:case Sc.RESOURCE_EXHAUSTED:case Sc.INTERNAL:case Sc.UNAVAILABLE:case Sc.UNAUTHENTICATED:return!1;case Sc.INVALID_ARGUMENT:case Sc.NOT_FOUND:case Sc.ALREADY_EXISTS:case Sc.PERMISSION_DENIED:case Sc.FAILED_PRECONDITION:case Sc.ABORTED:case Sc.OUT_OF_RANGE:case Sc.UNIMPLEMENTED:case Sc.DATA_LOSS:return!0}}function Vh(e){if(void 0===e)return vc("GRPC error has no .code"),Sc.UNKNOWN;switch(e){case Oh.OK:return Sc.OK;case Oh.CANCELLED:return Sc.CANCELLED;case Oh.UNKNOWN:return Sc.UNKNOWN;case Oh.DEADLINE_EXCEEDED:return Sc.DEADLINE_EXCEEDED;case Oh.RESOURCE_EXHAUSTED:return Sc.RESOURCE_EXHAUSTED;case Oh.INTERNAL:return Sc.INTERNAL;case Oh.UNAVAILABLE:return Sc.UNAVAILABLE;case Oh.UNAUTHENTICATED:return Sc.UNAUTHENTICATED;case Oh.INVALID_ARGUMENT:return Sc.INVALID_ARGUMENT;case Oh.NOT_FOUND:return Sc.NOT_FOUND;case Oh.ALREADY_EXISTS:return Sc.ALREADY_EXISTS;case Oh.PERMISSION_DENIED:return Sc.PERMISSION_DENIED;case Oh.FAILED_PRECONDITION:return Sc.FAILED_PRECONDITION;case Oh.ABORTED:return Sc.ABORTED;case Oh.OUT_OF_RANGE:return Sc.OUT_OF_RANGE;case Oh.UNIMPLEMENTED:return Sc.UNIMPLEMENTED;case Oh.DATA_LOSS:return Sc.DATA_LOSS;default:return Ic()}}(Rh=Oh||(Oh={}))[Rh.OK=0]="OK",Rh[Rh.CANCELLED=1]="CANCELLED",Rh[Rh.UNKNOWN=2]="UNKNOWN",Rh[Rh.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Rh[Rh.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Rh[Rh.NOT_FOUND=5]="NOT_FOUND",Rh[Rh.ALREADY_EXISTS=6]="ALREADY_EXISTS",Rh[Rh.PERMISSION_DENIED=7]="PERMISSION_DENIED",Rh[Rh.UNAUTHENTICATED=16]="UNAUTHENTICATED",Rh[Rh.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Rh[Rh.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Rh[Rh.ABORTED=10]="ABORTED",Rh[Rh.OUT_OF_RANGE=11]="OUT_OF_RANGE",Rh[Rh.UNIMPLEMENTED=12]="UNIMPLEMENTED",Rh[Rh.INTERNAL=13]="INTERNAL",Rh[Rh.UNAVAILABLE=14]="UNAVAILABLE",Rh[Rh.DATA_LOSS=15]="DATA_LOSS";
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
class Fh{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[r,s]of n)if(this.equalsFn(r,e))return s}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return void(r[s]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){bu(this.inner,((t,n)=>{for(const[r,s]of n)e(r,s)}))}isEmpty(){return Iu(this.inner)}size(){return this.innerSize}}
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
 */const Ph=new _u(Wc.comparator);function Bh(){return Ph}const Uh=new _u(Wc.comparator);function jh(...e){let t=Uh;for(const n of e)t=t.insert(n.key,n);return t}function qh(e){let t=Uh;return e.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function $h(){return Gh()}function Kh(){return Gh()}function Gh(){return new Fh((e=>e.toString()),((e,t)=>e.isEqual(t)))}const zh=new _u(Wc.comparator),Wh=new Su(Wc.comparator);function Hh(...e){let t=Wh;for(const n of e)t=t.add(n);return t}const Qh=new Su(Pc);function Yh(){return Qh}
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
 */class Xh{constructor(e,t,n,r,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t){const n=new Map;return n.set(e,Jh.createSynthesizedTargetChangeForCurrentChange(e,t)),new Xh(qc.min(),n,Yh(),Bh(),Hh())}}class Jh{constructor(e,t,n,r,s){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t){return new Jh(ku.EMPTY_BYTE_STRING,t,Hh(),Hh(),Hh())}}
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
 */class Zh{constructor(e,t,n,r){this.gt=e,this.removedTargetIds=t,this.key=n,this.yt=r}}class ed{constructor(e,t){this.targetId=e,this.It=t}}class td{constructor(e,t,n=ku.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class nd{constructor(){this.Tt=0,this.Et=id(),this.At=ku.EMPTY_BYTE_STRING,this.Rt=!1,this.bt=!0}get current(){return this.Rt}get resumeToken(){return this.At}get Pt(){return 0!==this.Tt}get vt(){return this.bt}Vt(e){e.approximateByteSize()>0&&(this.bt=!0,this.At=e)}St(){let e=Hh(),t=Hh(),n=Hh();return this.Et.forEach(((r,s)=>{switch(s){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:Ic()}})),new Jh(this.At,this.Rt,e,t,n)}Dt(){this.bt=!1,this.Et=id()}Ct(e,t){this.bt=!0,this.Et=this.Et.insert(e,t)}xt(e){this.bt=!0,this.Et=this.Et.remove(e)}Nt(){this.Tt+=1}kt(){this.Tt-=1}Mt(){this.bt=!0,this.Rt=!0}}class rd{constructor(e){this.Ot=e,this.Ft=new Map,this.$t=Bh(),this.Bt=sd(),this.Lt=new Su(Pc)}Ut(e){for(const t of e.gt)e.yt&&e.yt.isFoundDocument()?this.qt(t,e.yt):this.Kt(t,e.key,e.yt);for(const t of e.removedTargetIds)this.Kt(t,e.key,e.yt)}Gt(e){this.forEachTarget(e,(t=>{const n=this.Qt(t);switch(e.state){case 0:this.jt(t)&&n.Vt(e.resumeToken);break;case 1:n.kt(),n.Pt||n.Dt(),n.Vt(e.resumeToken);break;case 2:n.kt(),n.Pt||this.removeTarget(t);break;case 3:this.jt(t)&&(n.Mt(),n.Vt(e.resumeToken));break;case 4:this.jt(t)&&(this.Wt(t),n.Vt(e.resumeToken));break;default:Ic()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ft.forEach(((e,n)=>{this.jt(n)&&t(n)}))}zt(e){const t=e.targetId,n=e.It.count,r=this.Ht(t);if(r){const e=r.target;if(vl(e))if(0===n){const n=new Wc(e.path);this.Kt(t,n,dl.newNoDocument(n,qc.min()))}else _c(1===n);else this.Jt(t)!==n&&(this.Wt(t),this.Lt=this.Lt.add(t))}}Yt(e){const t=new Map;this.Ft.forEach(((n,r)=>{const s=this.Ht(r);if(s){if(n.current&&vl(s.target)){const t=new Wc(s.target.path);null!==this.$t.get(t)||this.Xt(r,t)||this.Kt(r,t,dl.newNoDocument(t,e))}n.vt&&(t.set(r,n.St()),n.Dt())}}));let n=Hh();this.Bt.forEach(((e,t)=>{let r=!0;t.forEachWhile((e=>{const t=this.Ht(e);return!t||2===t.purpose||(r=!1,!1)})),r&&(n=n.add(e))})),this.$t.forEach(((t,n)=>n.setReadTime(e)));const r=new Xh(e,t,this.Lt,this.$t,n);return this.$t=Bh(),this.Bt=sd(),this.Lt=new Su(Pc),r}qt(e,t){if(!this.jt(e))return;const n=this.Xt(e,t.key)?2:0;this.Qt(e).Ct(t.key,n),this.$t=this.$t.insert(t.key,t),this.Bt=this.Bt.insert(t.key,this.Zt(t.key).add(e))}Kt(e,t,n){if(!this.jt(e))return;const r=this.Qt(e);this.Xt(e,t)?r.Ct(t,1):r.xt(t),this.Bt=this.Bt.insert(t,this.Zt(t).delete(e)),n&&(this.$t=this.$t.insert(t,n))}removeTarget(e){this.Ft.delete(e)}Jt(e){const t=this.Qt(e).St();return this.Ot.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Nt(e){this.Qt(e).Nt()}Qt(e){let t=this.Ft.get(e);return t||(t=new nd,this.Ft.set(e,t)),t}Zt(e){let t=this.Bt.get(e);return t||(t=new Su(Pc),this.Bt=this.Bt.insert(e,t)),t}jt(e){const t=null!==this.Ht(e);return t||yc("WatchChangeAggregator","Detected inactive target",e),t}Ht(e){const t=this.Ft.get(e);return t&&t.Pt?null:this.Ot.te(e)}Wt(e){this.Ft.set(e,new nd),this.Ot.getRemoteKeysForTarget(e).forEach((t=>{this.Kt(e,t,null)}))}Xt(e,t){return this.Ot.getRemoteKeysForTarget(e).has(t)}}function sd(){return new _u(Wc.comparator)}function id(){return new _u(Wc.comparator)}
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
 */const od=(()=>{const e={asc:"ASCENDING",desc:"DESCENDING"};return e})(),ad=(()=>{const e={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return e})();class cd{constructor(e,t){this.databaseId=e,this.dt=t}}function ud(e,t){return e.dt?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function ld(e,t){return e.dt?t.toBase64():t.toUint8Array()}function hd(e,t){return ud(e,t.toTimestamp())}function dd(e){return _c(!!e),qc.fromTimestamp(function(e){const t=Lu(e);return new jc(t.seconds,t.nanos)}(e))}function fd(e,t){return function(e){return new Kc(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function md(e){const t=Kc.fromString(e);return _c(Ud(t)),t}function pd(e,t){return fd(e.databaseId,t.path)}function gd(e,t){const n=md(t);if(n.get(1)!==e.databaseId.projectId)throw new xc(Sc.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new xc(Sc.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new Wc(bd(n))}function yd(e,t){return fd(e.databaseId,t)}function vd(e){const t=md(e);return 4===t.length?Kc.emptyPath():bd(t)}function wd(e){return new Kc(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function bd(e){return _c(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function Id(e,t,n){return{name:pd(e,t),fields:n.value.mapValue.fields}}function _d(e,t,n){const r=gd(e,t.name),s=dd(t.updateTime),i=new ll({mapValue:{fields:t.fields}}),o=dl.newFoundDocument(r,s,i);return n&&o.setHasCommittedMutations(),n?o.setHasCommittedMutations():o}function Ed(e,t){return"found"in t?function(e,t){_c(!!t.found),t.found.name,t.found.updateTime;const n=gd(e,t.found.name),r=dd(t.found.updateTime),s=new ll({mapValue:{fields:t.found.fields}});return dl.newFoundDocument(n,r,s)}(e,t):"missing"in t?function(e,t){_c(!!t.missing),_c(!!t.readTime);const n=gd(e,t.missing),r=dd(t.readTime);return dl.newNoDocument(n,r)}(e,t):Ic()}function Td(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:Ic()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=function(e,t){return e.dt?(_c(void 0===t||"string"==typeof t),ku.fromBase64String(t||"")):(_c(void 0===t||t instanceof Uint8Array),ku.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(e){const t=void 0===e.code?Sc.UNKNOWN:Vh(e.code);return new xc(t,e.message||"")}(o);n=new td(r,s,i,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=gd(e,r.document.name),i=dd(r.document.updateTime),o=new ll({mapValue:{fields:r.document.fields}}),a=dl.newFoundDocument(s,i,o),c=r.targetIds||[],u=r.removedTargetIds||[];n=new Zh(c,u,a.key,a)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=gd(e,r.document),i=r.readTime?dd(r.readTime):qc.min(),o=dl.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Zh([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=gd(e,r.document),i=r.removedTargetIds||[];n=new Zh([],i,s,null)}else{if(!("filter"in t))return Ic();{t.filter;const e=t.filter;e.targetId;const r=e.count||0,s=new Lh(r),i=e.targetId;n=new ed(i,s)}}return n}function Sd(e,t){let n;if(t instanceof Sh)n={update:Id(e,t.key,t.value)};else if(t instanceof kh)n={delete:pd(e,t.key)};else if(t instanceof xh)n={update:Id(e,t.key,t.data),updateMask:Bd(t.fieldMask)};else{if(!(t instanceof Nh))return Ic();n={verify:pd(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof oh)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof ah)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof uh)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof hh)return{fieldPath:t.field.canonicalString(),increment:n._t};throw Ic()}(0,e)))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:hd(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:Ic()}(e,t.precondition)),n}function xd(e,t){const n=t.currentDocument?function(e){return void 0!==e.updateTime?yh.updateTime(dd(e.updateTime)):void 0!==e.exists?yh.exists(e.exists):yh.none()}(t.currentDocument):yh.none(),r=t.updateTransforms?t.updateTransforms.map((t=>function(e,t){let n=null;if("setToServerValue"in t)_c("REQUEST_TIME"===t.setToServerValue),n=new oh;else if("appendMissingElements"in t){const e=t.appendMissingElements.values||[];n=new ah(e)}else if("removeAllFromArray"in t){const e=t.removeAllFromArray.values||[];n=new uh(e)}else"increment"in t?n=new hh(e,t.increment):Ic();const r=zc.fromServerFormat(t.fieldPath);return new mh(r,n)}(e,t))):[];if(t.update){t.update.name;const s=gd(e,t.update.name),i=new ll({mapValue:{fields:t.update.fields}});if(t.updateMask){const e=function(e){const t=e.fieldPaths||[];return new Cu(t.map((e=>zc.fromServerFormat(e))))}(t.updateMask);return new xh(s,i,e,n,r)}return new Sh(s,i,n,r)}if(t.delete){const r=gd(e,t.delete);return new kh(r,n)}if(t.verify){const r=gd(e,t.verify);return new Nh(r,n)}return Ic()}function Dd(e,t){return e&&e.length>0?(_c(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?dd(e.updateTime):dd(t);return n.isEqual(qc.min())&&(n=dd(t)),new gh(n,e.transformResults||[])}(e,t)))):[]}function Cd(e,t){return{documents:[yd(e,t.path)]}}function Ad(e,t){const n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=yd(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=yd(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(e){if(0===e.length)return;const t=e.map((e=>function(e){if("=="===e.op){if(nl(e.value))return{unaryFilter:{field:Md(e.field),op:"IS_NAN"}};if(tl(e.value))return{unaryFilter:{field:Md(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(nl(e.value))return{unaryFilter:{field:Md(e.field),op:"IS_NOT_NAN"}};if(tl(e.value))return{unaryFilter:{field:Md(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Md(e.field),op:Rd(e.op),value:e.value}}}(e)));return 1===t.length?t[0]:{compositeFilter:{op:"AND",filters:t}}}(t.filters);s&&(n.structuredQuery.where=s);const i=function(e){if(0!==e.length)return e.map((e=>function(e){return{field:Md(e.field),direction:Od(e.dir)}}(e)))}(t.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(e,t){return e.dt||Uu(t)?t:{value:t}}(e,t.limit);var a;return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),n}function kd(e){let t=vd(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){_c(1===r);const e=n.from[0];e.allDescendants?s=e.collectionId:t=t.child(e.collectionId)}let i=[];n.where&&(i=Ld(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((e=>function(e){return new Ll(Vd(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e))));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,Uu(t)?null:t}(n.limit));let c=null;n.startAt&&(c=function(e){const t=!!e.before,n=e.values||[];return new Nl(n,t)}(n.startAt));let u=null;return n.endAt&&(u=function(e){const t=!e.before,n=e.values||[];return new Nl(n,t)}(n.endAt)),Fl(t,s,o,i,a,"F",c,u)}function Nd(e,t){const n=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Ic()}}(0,t.purpose);return null==n?null:{"goog-listen-tags":n}}function Ld(e){return e?void 0!==e.unaryFilter?[Pd(e)]:void 0!==e.fieldFilter?[Fd(e)]:void 0!==e.compositeFilter?e.compositeFilter.filters.map((e=>Ld(e))).reduce(((e,t)=>e.concat(t))):Ic():[]}function Od(e){return od[e]}function Rd(e){return ad[e]}function Md(e){return{fieldPath:e.canonicalString()}}function Vd(e){return zc.fromServerFormat(e.fieldPath)}function Fd(e){return _l.create(Vd(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Ic()}}(e.fieldFilter.op),e.fieldFilter.value)}function Pd(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Vd(e.unaryFilter.field);return _l.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Vd(e.unaryFilter.field);return _l.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Vd(e.unaryFilter.field);return _l.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Vd(e.unaryFilter.field);return _l.create(s,"!=",{nullValue:"NULL_VALUE"});default:return Ic()}}function Bd(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function Ud(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
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
 */function jd(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=$d(t)),t=qd(e.get(n),t);return $d(t)}function qd(e,t){let n=t;const r=e.length;for(let s=0;s<r;s++){const t=e.charAt(s);switch(t){case"\0":n+="";break;case"":n+="";break;default:n+=t}}return n}function $d(e){return e+""}function Kd(e){const t=e.length;if(_c(t>=2),2===t)return _c(""===e.charAt(0)&&""===e.charAt(1)),Kc.emptyPath();const n=t-2,r=[];let s="";for(let i=0;i<t;){const t=e.indexOf("",i);switch((t<0||t>n)&&Ic(),e.charAt(t+1)){case"":const n=e.substring(i,t);let o;0===s.length?o=n:(s+=n,o=s,s=""),r.push(o);break;case"":s+=e.substring(i,t),s+="\0";break;case"":s+=e.substring(i,t+1);break;default:Ic()}i=t+2}return new Kc(r)}
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
 */const Gd=["userId","batchId"];
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
 */function zd(e,t){return[e,jd(t)]}function Wd(e,t,n){return[e,jd(t),n]}const Hd={},Qd=["prefixPath","collectionGroup","readTime","documentId"],Yd=["prefixPath","collectionGroup","documentId"],Xd=["collectionGroup","readTime","prefixPath","documentId"],Jd=["canonicalId","targetId"],Zd=["targetId","path"],ef=["path","targetId"],tf=["collectionId","parent"],nf=["indexId","uid"],rf=["uid","sequenceNumber"],sf=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],of=["indexId","uid","orderedDocumentKey"],af=["userId","collectionPath","documentId"],cf=["userId","collectionPath","largestBatchId"],uf=["userId","collectionGroup","largestBatchId"],lf=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],hf=[...lf,"documentOverlays"],df=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],ff=df,mf=[...ff,"indexConfiguration","indexState","indexEntries"];
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
 */class pf extends su{constructor(e,t){super(),this.ee=e,this.currentSequenceNumber=t}}function gf(e,t){const n=Tc(e);return cu.N(n.ee,t)}
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
 */class yf{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const t=this.mutations[r];t.key.isEqual(e.key)&&Ih(t,e,n[r])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=_h(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=_h(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Kh();return this.mutations.forEach((r=>{const s=e.get(r.key),i=s.overlayedDocument;let o=this.applyToLocalView(i,s.mutatedFields);o=t.has(r.key)?null:o;const a=bh(i,o);null!==a&&n.set(r.key,a),i.isValidDocument()||i.convertToNoDocument(qc.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Hh())}isEqual(e){return this.batchId===e.batchId&&Bc(this.mutations,e.mutations,((e,t)=>Th(e,t)))&&Bc(this.baseMutations,e.baseMutations,((e,t)=>Th(e,t)))}}class vf{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){_c(e.mutations.length===n.length);let r=zh;const s=e.mutations;for(let i=0;i<s.length;i++)r=r.insert(s[i].key,n[i].version);return new vf(e,t,n,r)}}
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
 */class wf{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
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
 */class bf{constructor(e,t,n,r,s=qc.min(),i=qc.min(),o=ku.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=i,this.resumeToken=o}withSequenceNumber(e){return new bf(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new bf(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new bf(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}
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
 */class If{constructor(e){this.ne=e}}function _f(e,t){let n;if(t.document)n=_d(e.ne,t.document,!!t.hasCommittedMutations);else if(t.noDocument){const e=Wc.fromSegments(t.noDocument.path),r=xf(t.noDocument.readTime);n=dl.newNoDocument(e,r),t.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!t.unknownDocument)return Ic();{const e=Wc.fromSegments(t.unknownDocument.path),r=xf(t.unknownDocument.version);n=dl.newUnknownDocument(e,r)}}return t.readTime&&n.setReadTime(function(e){const t=new jc(e[0],e[1]);return qc.fromTimestamp(t)}(t.readTime)),n}function Ef(e,t){const n=t.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:Tf(t.readTime),hasCommittedMutations:t.hasCommittedMutations};if(t.isFoundDocument())r.document=function(e,t){return{name:pd(e,t.key),fields:t.data.value.mapValue.fields,updateTime:ud(e,t.version.toTimestamp())}}(e.ne,t);else if(t.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:Sf(t.version)};else{if(!t.isUnknownDocument())return Ic();r.unknownDocument={path:n.path.toArray(),version:Sf(t.version)}}return r}function Tf(e){const t=e.toTimestamp();return[t.seconds,t.nanoseconds]}function Sf(e){const t=e.toTimestamp();return{seconds:t.seconds,nanoseconds:t.nanoseconds}}function xf(e){const t=new jc(e.seconds,e.nanoseconds);return qc.fromTimestamp(t)}function Df(e,t){const n=(t.baseMutations||[]).map((t=>xd(e.ne,t)));for(let i=0;i<t.mutations.length-1;++i){const e=t.mutations[i];if(i+1<t.mutations.length&&void 0!==t.mutations[i+1].transform){const n=t.mutations[i+1];e.updateTransforms=n.transform.fieldTransforms,t.mutations.splice(i+1,1),++i}}const r=t.mutations.map((t=>xd(e.ne,t))),s=jc.fromMillis(t.localWriteTimeMs);return new yf(t.batchId,s,n,r)}function Cf(e){const t=xf(e.readTime),n=void 0!==e.lastLimboFreeSnapshotVersion?xf(e.lastLimboFreeSnapshotVersion):qc.min();let r;var s;return void 0!==e.query.documents?(_c(1===(s=e.query).documents.length),r=Kl(Pl(vd(s.documents[0])))):r=function(e){return Kl(kd(e))}(e.query),new bf(r,e.targetId,0,e.lastListenSequenceNumber,t,n,ku.fromBase64String(e.resumeToken))}function Af(e,t){const n=Sf(t.snapshotVersion),r=Sf(t.lastLimboFreeSnapshotVersion);let s;s=vl(t.target)?Cd(e.ne,t.target):Ad(e.ne,t.target);const i=t.resumeToken.toBase64();return{targetId:t.targetId,canonicalId:pl(t.target),readTime:n,resumeToken:i,lastListenSequenceNumber:t.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:s}}function kf(e){const t=kd({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?Gl(t,t.limit,"L"):t}function Nf(e,t){return new wf(t.largestBatchId,xd(e.ne,t.overlayMutation))}function Lf(e,t){const n=t.path.lastSegment();return[e,jd(t.path.popLast()),n]}function Of(e,t,n,r){return{indexId:e,uid:t.uid||"",sequenceNumber:n,readTime:Sf(r.readTime),documentKey:jd(r.documentKey.path),largestBatchId:r.largestBatchId}}
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
 */class Rf{getBundleMetadata(e,t){return Mf(e).get(t).next((e=>{if(e)return{id:(t=e).bundleId,createTime:xf(t.createTime),version:t.version};var t}))}saveBundleMetadata(e,t){return Mf(e).put({bundleId:(n=t).id,createTime:Sf(dd(n.createTime)),version:n.version});var n}getNamedQuery(e,t){return Vf(e).get(t).next((e=>{if(e)return{name:(t=e).name,query:kf(t.bundledQuery),readTime:xf(t.readTime)};var t}))}saveNamedQuery(e,t){return Vf(e).put(function(e){return{name:e.name,readTime:Sf(dd(e.readTime)),bundledQuery:e.bundledQuery}}(t))}}function Mf(e){return gf(e,"bundles")}function Vf(e){return gf(e,"namedQueries")}
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
 */class Ff{constructor(e,t){this.wt=e,this.userId=t}static se(e,t){const n=t.uid||"";return new Ff(e,n)}getOverlay(e,t){return Pf(e).get(Lf(this.userId,t)).next((e=>e?Nf(this.wt,e):null))}getOverlays(e,t){const n=$h();return ou.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){const r=[];return n.forEach(((n,s)=>{const i=new wf(t,s);r.push(this.ie(e,i))})),ou.waitFor(r)}removeOverlaysForBatchId(e,t,n){const r=new Set;t.forEach((e=>r.add(jd(e.getCollectionPath()))));const s=[];return r.forEach((t=>{const r=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,n+1],!1,!0);s.push(Pf(e).W("collectionPathOverlayIndex",r))})),ou.waitFor(s)}getOverlaysForCollection(e,t,n){const r=$h(),s=jd(t),i=IDBKeyRange.bound([this.userId,s,n],[this.userId,s,Number.POSITIVE_INFINITY],!0);return Pf(e).K("collectionPathOverlayIndex",i).next((e=>{for(const t of e){const e=Nf(this.wt,t);r.set(e.getKey(),e)}return r}))}getOverlaysForCollectionGroup(e,t,n,r){const s=$h();let i;const o=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Pf(e).J({index:"collectionGroupOverlayIndex",range:o},((e,t,n)=>{const o=Nf(this.wt,t);s.size()<r||o.largestBatchId===i?(s.set(o.getKey(),o),i=o.largestBatchId):n.done()})).next((()=>s))}ie(e,t){return Pf(e).put(function(e,t,n){const[r,s,i]=Lf(t,n.mutation.key);return{userId:t,collectionPath:s,documentId:i,collectionGroup:n.mutation.key.getCollectionGroup(),largestBatchId:n.largestBatchId,overlayMutation:Sd(e.ne,n.mutation)}}(this.wt,this.userId,t))}}function Pf(e){return gf(e,"documentOverlays")}
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
 */class Bf{constructor(){}re(e,t){this.oe(e,t),t.ue()}oe(e,t){if("nullValue"in e)this.ce(t,5);else if("booleanValue"in e)this.ce(t,10),t.ae(e.booleanValue?1:0);else if("integerValue"in e)this.ce(t,15),t.ae(Ou(e.integerValue));else if("doubleValue"in e){const n=Ou(e.doubleValue);isNaN(n)?this.ce(t,13):(this.ce(t,15),ju(n)?t.ae(0):t.ae(n))}else if("timestampValue"in e){const n=e.timestampValue;this.ce(t,20),"string"==typeof n?t.he(n):(t.he(`${n.seconds||""}`),t.ae(n.nanos||0))}else if("stringValue"in e)this.le(e.stringValue,t),this.fe(t);else if("bytesValue"in e)this.ce(t,30),t.de(Ru(e.bytesValue)),this.fe(t);else if("referenceValue"in e)this._e(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.ce(t,45),t.ae(n.latitude||0),t.ae(n.longitude||0)}else"mapValue"in e?il(e)?this.ce(t,Number.MAX_SAFE_INTEGER):(this.we(e.mapValue,t),this.fe(t)):"arrayValue"in e?(this.me(e.arrayValue,t),this.fe(t)):Ic()}le(e,t){this.ce(t,25),this.ge(e,t)}ge(e,t){t.he(e)}we(e,t){const n=e.fields||{};this.ce(t,55);for(const r of Object.keys(n))this.le(r,t),this.oe(n[r],t)}me(e,t){const n=e.values||[];this.ce(t,50);for(const r of n)this.oe(r,t)}_e(e,t){this.ce(t,37),Wc.fromName(e).path.forEach((e=>{this.ce(t,60),this.ge(e,t)}))}ce(e,t){e.ae(t)}fe(e){e.ae(2)}}function Uf(e){if(0===e)return 8;let t=0;return e>>4==0&&(t+=4,e<<=4),e>>6==0&&(t+=2,e<<=2),e>>7==0&&(t+=1),t}function jf(e){const t=64-function(e){let t=0;for(let n=0;n<8;++n){const r=Uf(255&e[n]);if(t+=r,8!==r)break}return t}(e);return Math.ceil(t/8)}Bf.ye=new Bf;class qf{constructor(){this.buffer=new Uint8Array(1024),this.position=0}pe(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Ie(n.value),n=t.next();this.Te()}Ee(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Ae(n.value),n=t.next();this.Re()}be(e){for(const t of e){const e=t.charCodeAt(0);if(e<128)this.Ie(e);else if(e<2048)this.Ie(960|e>>>6),this.Ie(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.Ie(480|e>>>12),this.Ie(128|63&e>>>6),this.Ie(128|63&e);else{const e=t.codePointAt(0);this.Ie(240|e>>>18),this.Ie(128|63&e>>>12),this.Ie(128|63&e>>>6),this.Ie(128|63&e)}}this.Te()}Pe(e){for(const t of e){const e=t.charCodeAt(0);if(e<128)this.Ae(e);else if(e<2048)this.Ae(960|e>>>6),this.Ae(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.Ae(480|e>>>12),this.Ae(128|63&e>>>6),this.Ae(128|63&e);else{const e=t.codePointAt(0);this.Ae(240|e>>>18),this.Ae(128|63&e>>>12),this.Ae(128|63&e>>>6),this.Ae(128|63&e)}}this.Re()}ve(e){const t=this.Ve(e),n=jf(t);this.Se(1+n),this.buffer[this.position++]=255&n;for(let r=t.length-n;r<t.length;++r)this.buffer[this.position++]=255&t[r]}De(e){const t=this.Ve(e),n=jf(t);this.Se(1+n),this.buffer[this.position++]=~(255&n);for(let r=t.length-n;r<t.length;++r)this.buffer[this.position++]=~(255&t[r])}Ce(){this.xe(255),this.xe(255)}Ne(){this.ke(255),this.ke(255)}reset(){this.position=0}seed(e){this.Se(e.length),this.buffer.set(e,this.position),this.position+=e.length}Me(){return this.buffer.slice(0,this.position)}Ve(e){const t=function(e){const t=new DataView(new ArrayBuffer(8));return t.setFloat64(0,e,!1),new Uint8Array(t.buffer)}(e),n=0!=(128&t[0]);t[0]^=n?255:128;for(let r=1;r<t.length;++r)t[r]^=n?255:0;return t}Ie(e){const t=255&e;0===t?(this.xe(0),this.xe(255)):255===t?(this.xe(255),this.xe(0)):this.xe(t)}Ae(e){const t=255&e;0===t?(this.ke(0),this.ke(255)):255===t?(this.ke(255),this.ke(0)):this.ke(e)}Te(){this.xe(0),this.xe(1)}Re(){this.ke(0),this.ke(1)}xe(e){this.Se(1),this.buffer[this.position++]=e}ke(e){this.Se(1),this.buffer[this.position++]=~e}Se(e){const t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);const r=new Uint8Array(n);r.set(this.buffer),this.buffer=r}}class $f{constructor(e){this.Oe=e}de(e){this.Oe.pe(e)}he(e){this.Oe.be(e)}ae(e){this.Oe.ve(e)}ue(){this.Oe.Ce()}}class Kf{constructor(e){this.Oe=e}de(e){this.Oe.Ee(e)}he(e){this.Oe.Pe(e)}ae(e){this.Oe.De(e)}ue(){this.Oe.Ne()}}class Gf{constructor(){this.Oe=new qf,this.Fe=new $f(this.Oe),this.$e=new Kf(this.Oe)}seed(e){this.Oe.seed(e)}Be(e){return 0===e?this.Fe:this.$e}Me(){return this.Oe.Me()}reset(){this.Oe.reset()}}
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
 */class zf{constructor(e,t,n,r){this.indexId=e,this.documentKey=t,this.arrayValue=n,this.directionalValue=r}Le(){const e=this.directionalValue.length,t=0===e||255===this.directionalValue[e-1]?e+1:e,n=new Uint8Array(t);return n.set(this.directionalValue,0),t!==e?n.set([0],this.directionalValue.length):++n[n.length-1],new zf(this.indexId,this.documentKey,this.arrayValue,n)}}function Wf(e,t){let n=e.indexId-t.indexId;return 0!==n?n:(n=Hf(e.arrayValue,t.arrayValue),0!==n?n:(n=Hf(e.directionalValue,t.directionalValue),0!==n?n:Wc.comparator(e.documentKey,t.documentKey)))}function Hf(e,t){for(let n=0;n<e.length&&n<t.length;++n){const r=e[n]-t[n];if(0!==r)return r}return e.length-t.length}
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
 */class Qf{constructor(e){this.collectionId=null!=e.collectionGroup?e.collectionGroup:e.path.lastSegment(),this.Ue=e.orderBy,this.qe=[];for(const t of e.filters){const e=t;e.ht()?this.Ke=e:this.qe.push(e)}}Ge(e){const t=Qc(e);if(void 0!==t&&!this.Qe(t))return!1;const n=Yc(e);let r=0,s=0;for(;r<n.length&&this.Qe(n[r]);++r);if(r===n.length)return!0;if(void 0!==this.Ke){const e=n[r];if(!this.je(this.Ke,e)||!this.We(this.Ue[s++],e))return!1;++r}for(;r<n.length;++r){const e=n[r];if(s>=this.Ue.length||!this.We(this.Ue[s++],e))return!1}return!0}Qe(e){for(const t of this.qe)if(this.je(t,e))return!0;return!1}je(e,t){if(void 0===e||!e.field.isEqual(t.fieldPath))return!1;const n="array-contains"===e.op||"array-contains-any"===e.op;return 2===t.kind===n}We(e,t){return!!e.field.isEqual(t.fieldPath)&&(0===t.kind&&"asc"===e.dir||1===t.kind&&"desc"===e.dir)}}
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
 */class Yf{constructor(){this.ze=new Xf}addToCollectionParentIndex(e,t){return this.ze.add(t),ou.resolve()}getCollectionParents(e,t){return ou.resolve(this.ze.getEntries(t))}addFieldIndex(e,t){return ou.resolve()}deleteFieldIndex(e,t){return ou.resolve()}getDocumentsMatchingTarget(e,t){return ou.resolve(null)}getIndexType(e,t){return ou.resolve(0)}getFieldIndexes(e,t){return ou.resolve([])}getNextCollectionGroupToUpdate(e){return ou.resolve(null)}getMinOffset(e,t){return ou.resolve(tu.min())}getMinOffsetFromCollectionGroup(e,t){return ou.resolve(tu.min())}updateCollectionGroup(e,t,n){return ou.resolve()}updateIndexEntries(e,t){return ou.resolve()}}class Xf{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new Su(Kc.comparator),s=!r.has(n);return this.index[t]=r.add(n),s}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new Su(Kc.comparator)).toArray()}}
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
 */const Jf=new Uint8Array(0);class Zf{constructor(e,t){this.user=e,this.databaseId=t,this.He=new Xf,this.Je=new Fh((e=>pl(e)),((e,t)=>yl(e,t))),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.He.has(t)){const n=t.lastSegment(),r=t.popLast();e.addOnCommittedListener((()=>{this.He.add(t)}));const s={collectionId:n,parent:jd(r)};return em(e).put(s)}return ou.resolve()}getCollectionParents(e,t){const n=[],r=IDBKeyRange.bound([t,""],[Uc(t),""],!1,!0);return em(e).K(r).next((e=>{for(const r of e){if(r.collectionId!==t)break;n.push(Kd(r.parent))}return n}))}addFieldIndex(e,t){const n=nm(e),r=function(e){return{indexId:e.indexId,collectionGroup:e.collectionGroup,fields:e.fields.map((e=>[e.fieldPath.canonicalString(),e.kind]))}}(t);delete r.indexId;const s=n.add(r);if(t.indexState){const n=rm(e);return s.next((e=>{n.put(Of(e,this.user,t.indexState.sequenceNumber,t.indexState.offset))}))}return s.next()}deleteFieldIndex(e,t){const n=nm(e),r=rm(e),s=tm(e);return n.delete(t.indexId).next((()=>r.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))).next((()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))))}getDocumentsMatchingTarget(e,t){const n=tm(e);let r=!0;const s=new Map;return ou.forEach(this.Ye(t),(t=>this.Xe(e,t).next((e=>{r&&(r=!!e),s.set(t,e)})))).next((()=>{if(r){let e=Hh();const r=[];return ou.forEach(s,((s,i)=>{var o;yc("IndexedDbIndexManager",`Using index ${o=s,`id=${o.indexId}|cg=${o.collectionGroup}|f=${o.fields.map((e=>`${e.fieldPath}:${e.kind}`)).join(",")}`} to execute ${pl(t)}`);const a=function(e,t){const n=Qc(t);if(void 0===n)return null;for(const r of wl(e,n.fieldPath))switch(r.op){case"array-contains-any":return r.value.arrayValue.values||[];case"array-contains":return[r.value]}return null}(i,s),c=function(e,t){const n=new Map;for(const r of Yc(t))for(const t of wl(e,r.fieldPath))switch(t.op){case"==":case"in":n.set(r.fieldPath.canonicalString(),t.value);break;case"not-in":case"!=":return n.set(r.fieldPath.canonicalString(),t.value),Array.from(n.values())}return null}(i,s),u=function(e,t){const n=[];let r=!0;for(const s of Yc(t)){const t=0===s.kind?bl(e,s.fieldPath,e.startAt):Il(e,s.fieldPath,e.startAt);n.push(t.value),r&&(r=t.inclusive)}return new Nl(n,r)}(i,s),l=function(e,t){const n=[];let r=!0;for(const s of Yc(t)){const t=0===s.kind?Il(e,s.fieldPath,e.endAt):bl(e,s.fieldPath,e.endAt);n.push(t.value),r&&(r=t.inclusive)}return new Nl(n,r)}(i,s),h=this.Ze(s,i,u),d=this.Ze(s,i,l),f=this.tn(s,i,c),m=this.en(s.indexId,a,h,u.inclusive,d,l.inclusive,f);return ou.forEach(m,(s=>n.j(s,t.limit).next((t=>{t.forEach((t=>{const n=Wc.fromSegments(t.documentKey);e.has(n)||(e=e.add(n),r.push(n))}))}))))})).next((()=>r))}return ou.resolve(null)}))}Ye(e){let t=this.Je.get(e);return t||(t=[e],this.Je.set(e,t),t)}en(e,t,n,r,s,i,o){const a=(null!=t?t.length:1)*Math.max(n.length,s.length),c=a/(null!=t?t.length:1),u=[];for(let l=0;l<a;++l){const a=t?this.nn(t[l/c]):Jf,h=this.sn(e,a,n[l%c],r),d=this.rn(e,a,s[l%c],i),f=o.map((t=>this.sn(e,a,t,!0)));u.push(...this.createRange(h,d,f))}return u}sn(e,t,n,r){const s=new zf(e,Wc.empty(),t,n);return r?s:s.Le()}rn(e,t,n,r){const s=new zf(e,Wc.empty(),t,n);return r?s.Le():s}Xe(e,t){const n=new Qf(t),r=null!=t.collectionGroup?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,r).next((e=>{let t=null;for(const r of e)n.Ge(r)&&(!t||r.fields.length>t.fields.length)&&(t=r);return t}))}getIndexType(e,t){let n=2;return ou.forEach(this.Ye(t),(t=>this.Xe(e,t).next((e=>{e?0!==n&&e.fields.length<function(e){let t=new Su(zc.comparator),n=!1;for(const r of e.filters){const e=r;e.field.isKeyField()||("array-contains"===e.op||"array-contains-any"===e.op?n=!0:t=t.add(e.field))}for(const r of e.orderBy)r.field.isKeyField()||(t=t.add(r.field));return t.size+(n?1:0)}(t)&&(n=1):n=0})))).next((()=>n))}on(e,t){const n=new Gf;for(const r of Yc(e)){const e=t.data.field(r.fieldPath);if(null==e)return null;const s=n.Be(r.kind);Bf.ye.re(e,s)}return n.Me()}nn(e){const t=new Gf;return Bf.ye.re(e,t.Be(0)),t.Me()}un(e,t){const n=new Gf;return Bf.ye.re(Ju(this.databaseId,t),n.Be(function(e){const t=Yc(e);return 0===t.length?0:t[t.length-1].kind}(e))),n.Me()}tn(e,t,n){if(null===n)return[];let r=[];r.push(new Gf);let s=0;for(const i of Yc(e)){const e=n[s++];for(const n of r)if(this.cn(t,i.fieldPath)&&el(e))r=this.an(r,i,e);else{const t=n.Be(i.kind);Bf.ye.re(e,t)}}return this.hn(r)}Ze(e,t,n){return this.tn(e,t,n.position)}hn(e){const t=[];for(let n=0;n<e.length;++n)t[n]=e[n].Me();return t}an(e,t,n){const r=[...e],s=[];for(const i of n.arrayValue.values||[])for(const e of r){const n=new Gf;n.seed(e.Me()),Bf.ye.re(i,n.Be(t.kind)),s.push(n)}return s}cn(e,t){return!!e.filters.find((e=>e instanceof _l&&e.field.isEqual(t)&&("in"===e.op||"not-in"===e.op)))}getFieldIndexes(e,t){const n=nm(e),r=rm(e);return(t?n.K("collectionGroupIndex",IDBKeyRange.bound(t,t)):n.K()).next((e=>{const t=[];return ou.forEach(e,(e=>r.get([e.indexId,this.uid]).next((n=>{t.push(function(e,t){const n=t?new Jc(t.sequenceNumber,new tu(xf(t.readTime),new Wc(Kd(t.documentKey)),t.largestBatchId)):Jc.empty(),r=e.fields.map((([e,t])=>new Xc(zc.fromServerFormat(e),t)));return new Hc(e.indexId,e.collectionGroup,r,n)}(e,n))})))).next((()=>t))}))}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next((e=>0===e.length?null:(e.sort(((e,t)=>{const n=e.indexState.sequenceNumber-t.indexState.sequenceNumber;return 0!==n?n:Pc(e.collectionGroup,t.collectionGroup)})),e[0].collectionGroup)))}updateCollectionGroup(e,t,n){const r=nm(e),s=rm(e);return this.ln(e).next((e=>r.K("collectionGroupIndex",IDBKeyRange.bound(t,t)).next((t=>ou.forEach(t,(t=>s.put(Of(t.indexId,this.user,e,n))))))))}updateIndexEntries(e,t){const n=new Map;return ou.forEach(t,((t,r)=>{const s=n.get(t.collectionGroup);return(s?ou.resolve(s):this.getFieldIndexes(e,t.collectionGroup)).next((s=>(n.set(t.collectionGroup,s),ou.forEach(s,(n=>this.fn(e,t,n).next((t=>{const s=this.dn(r,n);return t.isEqual(s)?ou.resolve():this._n(e,r,n,t,s)})))))))}))}wn(e,t,n,r){return tm(e).put({indexId:r.indexId,uid:this.uid,arrayValue:r.arrayValue,directionalValue:r.directionalValue,orderedDocumentKey:this.un(n,t.key),documentKey:t.key.path.toArray()})}mn(e,t,n,r){return tm(e).delete([r.indexId,this.uid,r.arrayValue,r.directionalValue,this.un(n,t.key),t.key.path.toArray()])}fn(e,t,n){const r=tm(e);let s=new Su(Wf);return r.J({index:"documentKeyIndex",range:IDBKeyRange.only([n.indexId,this.uid,this.un(n,t)])},((e,r)=>{s=s.add(new zf(n.indexId,t,r.arrayValue,r.directionalValue))})).next((()=>s))}dn(e,t){let n=new Su(Wf);const r=this.on(t,e);if(null==r)return n;const s=Qc(t);if(null!=s){const i=e.data.field(s.fieldPath);if(el(i))for(const s of i.arrayValue.values||[])n=n.add(new zf(t.indexId,e.key,this.nn(s),r))}else n=n.add(new zf(t.indexId,e.key,Jf,r));return n}_n(e,t,n,r,s){yc("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const i=[];return function(e,t,n,r,s){const i=e.getIterator(),o=t.getIterator();let a=Du(i),c=Du(o);for(;a||c;){let e=!1,t=!1;if(a&&c){const r=n(a,c);r<0?t=!0:r>0&&(e=!0)}else null!=a?t=!0:e=!0;e?(r(c),c=Du(o)):t?(s(a),a=Du(i)):(a=Du(i),c=Du(o))}}(r,s,Wf,(r=>{i.push(this.wn(e,t,n,r))}),(r=>{i.push(this.mn(e,t,n,r))})),ou.waitFor(i)}ln(e){let t=1;return rm(e).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},((e,n,r)=>{r.done(),t=n.sequenceNumber+1})).next((()=>t))}createRange(e,t,n){n=n.sort(((e,t)=>Wf(e,t))).filter(((e,t,n)=>!t||0!==Wf(e,n[t-1])));const r=[];r.push(e);for(const i of n){const n=Wf(i,e),s=Wf(i,t);if(0===n)r[0]=e.Le();else if(n>0&&s<0)r.push(i),r.push(i.Le());else if(s>0)break}r.push(t);const s=[];for(let i=0;i<r.length;i+=2)s.push(IDBKeyRange.bound([r[i].indexId,this.uid,r[i].arrayValue,r[i].directionalValue,Jf,[]],[r[i+1].indexId,this.uid,r[i+1].arrayValue,r[i+1].directionalValue,Jf,[]]));return s}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(sm)}getMinOffset(e,t){return ou.mapArray(this.Ye(t),(t=>this.Xe(e,t).next((e=>e||Ic())))).next(sm)}}function em(e){return gf(e,"collectionParents")}function tm(e){return gf(e,"indexEntries")}function nm(e){return gf(e,"indexConfiguration")}function rm(e){return gf(e,"indexState")}function sm(e){_c(0!==e.length);let t=e[0].indexState.offset,n=t.largestBatchId;for(let r=1;r<e.length;r++){const s=e[r].indexState.offset;nu(s,t)<0&&(t=s),n<s.largestBatchId&&(n=s.largestBatchId)}return new tu(t.readTime,t.documentKey,n)}
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
 */const im={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class om{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new om(e,om.DEFAULT_COLLECTION_PERCENTILE,om.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
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
 */function am(e,t,n){const r=e.store("mutations"),s=e.store("documentMutations"),i=[],o=IDBKeyRange.only(n.batchId);let a=0;const c=r.J({range:o},((e,t,n)=>(a++,n.delete())));i.push(c.next((()=>{_c(1===a)})));const u=[];for(const l of n.mutations){const e=Wd(t,l.key.path,n.batchId);i.push(s.delete(e)),u.push(l.key)}return ou.waitFor(i).next((()=>u))}function cm(e){if(!e)return 0;let t;if(e.document)t=e.document;else if(e.unknownDocument)t=e.unknownDocument;else{if(!e.noDocument)throw Ic();t=e.noDocument}return JSON.stringify(t).length}
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
 */om.DEFAULT_COLLECTION_PERCENTILE=10,om.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,om.DEFAULT=new om(41943040,om.DEFAULT_COLLECTION_PERCENTILE,om.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),om.DISABLED=new om(-1,0,0);class um{constructor(e,t,n,r){this.userId=e,this.wt=t,this.indexManager=n,this.referenceDelegate=r,this.gn={}}static se(e,t,n,r){_c(""!==e.uid);const s=e.isAuthenticated()?e.uid:"";return new um(s,t,n,r)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return hm(e).J({index:"userMutationsIndex",range:n},((e,n,r)=>{t=!1,r.done()})).next((()=>t))}addMutationBatch(e,t,n,r){const s=dm(e),i=hm(e);return i.add({}).next((o=>{_c("number"==typeof o);const a=new yf(o,t,n,r),c=function(e,t,n){const r=n.baseMutations.map((t=>Sd(e.ne,t))),s=n.mutations.map((t=>Sd(e.ne,t)));return{userId:t,batchId:n.batchId,localWriteTimeMs:n.localWriteTime.toMillis(),baseMutations:r,mutations:s}}(this.wt,this.userId,a),u=[];let l=new Su(((e,t)=>Pc(e.canonicalString(),t.canonicalString())));for(const e of r){const t=Wd(this.userId,e.key.path,o);l=l.add(e.key.path.popLast()),u.push(i.put(c)),u.push(s.put(t,Hd))}return l.forEach((t=>{u.push(this.indexManager.addToCollectionParentIndex(e,t))})),e.addOnCommittedListener((()=>{this.gn[o]=a.keys()})),ou.waitFor(u).next((()=>a))}))}lookupMutationBatch(e,t){return hm(e).get(t).next((e=>e?(_c(e.userId===this.userId),Df(this.wt,e)):null))}yn(e,t){return this.gn[t]?ou.resolve(this.gn[t]):this.lookupMutationBatch(e,t).next((e=>{if(e){const n=e.keys();return this.gn[t]=n,n}return null}))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=IDBKeyRange.lowerBound([this.userId,n]);let s=null;return hm(e).J({index:"userMutationsIndex",range:r},((e,t,r)=>{t.userId===this.userId&&(_c(t.batchId>=n),s=Df(this.wt,t)),r.done()})).next((()=>s))}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=-1;return hm(e).J({index:"userMutationsIndex",range:t,reverse:!0},((e,t,r)=>{n=t.batchId,r.done()})).next((()=>n))}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return hm(e).K("userMutationsIndex",t).next((e=>e.map((e=>Df(this.wt,e)))))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=zd(this.userId,t.path),r=IDBKeyRange.lowerBound(n),s=[];return dm(e).J({range:r},((n,r,i)=>{const[o,a,c]=n,u=Kd(a);if(o===this.userId&&t.path.isEqual(u))return hm(e).get(c).next((e=>{if(!e)throw Ic();_c(e.userId===this.userId),s.push(Df(this.wt,e))}));i.done()})).next((()=>s))}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Su(Pc);const r=[];return t.forEach((t=>{const s=zd(this.userId,t.path),i=IDBKeyRange.lowerBound(s),o=dm(e).J({range:i},((e,r,s)=>{const[i,o,a]=e,c=Kd(o);i===this.userId&&t.path.isEqual(c)?n=n.add(a):s.done()}));r.push(o)})),ou.waitFor(r).next((()=>this.pn(e,n)))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1,s=zd(this.userId,n),i=IDBKeyRange.lowerBound(s);let o=new Su(Pc);return dm(e).J({range:i},((e,t,s)=>{const[i,a,c]=e,u=Kd(a);i===this.userId&&n.isPrefixOf(u)?u.length===r&&(o=o.add(c)):s.done()})).next((()=>this.pn(e,o)))}pn(e,t){const n=[],r=[];return t.forEach((t=>{r.push(hm(e).get(t).next((e=>{if(null===e)throw Ic();_c(e.userId===this.userId),n.push(Df(this.wt,e))})))})),ou.waitFor(r).next((()=>n))}removeMutationBatch(e,t){return am(e.ee,this.userId,t).next((n=>(e.addOnCommittedListener((()=>{this.In(t.batchId)})),ou.forEach(n,(t=>this.referenceDelegate.markPotentiallyOrphaned(e,t))))))}In(e){delete this.gn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next((t=>{if(!t)return ou.resolve();const n=IDBKeyRange.lowerBound([this.userId]),r=[];return dm(e).J({range:n},((e,t,n)=>{if(e[0]===this.userId){const t=Kd(e[1]);r.push(t)}else n.done()})).next((()=>{_c(0===r.length)}))}))}containsKey(e,t){return lm(e,this.userId,t)}Tn(e){return fm(e).get(this.userId).next((e=>e||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""}))}}function lm(e,t,n){const r=zd(t,n.path),s=r[1],i=IDBKeyRange.lowerBound(r);let o=!1;return dm(e).J({range:i,H:!0},((e,n,r)=>{const[i,a,c]=e;i===t&&a===s&&(o=!0),r.done()})).next((()=>o))}function hm(e){return gf(e,"mutations")}function dm(e){return gf(e,"documentMutations")}function fm(e){return gf(e,"mutationQueues")}
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
 */class mm{constructor(e){this.En=e}next(){return this.En+=2,this.En}static An(){return new mm(0)}static Rn(){return new mm(-1)}}
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
 */class pm{constructor(e,t){this.referenceDelegate=e,this.wt=t}allocateTargetId(e){return this.bn(e).next((t=>{const n=new mm(t.highestTargetId);return t.highestTargetId=n.next(),this.Pn(e,t).next((()=>t.highestTargetId))}))}getLastRemoteSnapshotVersion(e){return this.bn(e).next((e=>qc.fromTimestamp(new jc(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds))))}getHighestSequenceNumber(e){return this.bn(e).next((e=>e.highestListenSequenceNumber))}setTargetsMetadata(e,t,n){return this.bn(e).next((r=>(r.highestListenSequenceNumber=t,n&&(r.lastRemoteSnapshotVersion=n.toTimestamp()),t>r.highestListenSequenceNumber&&(r.highestListenSequenceNumber=t),this.Pn(e,r))))}addTargetData(e,t){return this.vn(e,t).next((()=>this.bn(e).next((n=>(n.targetCount+=1,this.Vn(t,n),this.Pn(e,n))))))}updateTargetData(e,t){return this.vn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next((()=>gm(e).delete(t.targetId))).next((()=>this.bn(e))).next((t=>(_c(t.targetCount>0),t.targetCount-=1,this.Pn(e,t))))}removeTargets(e,t,n){let r=0;const s=[];return gm(e).J(((i,o)=>{const a=Cf(o);a.sequenceNumber<=t&&null===n.get(a.targetId)&&(r++,s.push(this.removeTargetData(e,a)))})).next((()=>ou.waitFor(s))).next((()=>r))}forEachTarget(e,t){return gm(e).J(((e,n)=>{const r=Cf(n);t(r)}))}bn(e){return ym(e).get("targetGlobalKey").next((e=>(_c(null!==e),e)))}Pn(e,t){return ym(e).put("targetGlobalKey",t)}vn(e,t){return gm(e).put(Af(this.wt,t))}Vn(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.bn(e).next((e=>e.targetCount))}getTargetData(e,t){const n=pl(t),r=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let s=null;return gm(e).J({range:r,index:"queryTargetsIndex"},((e,n,r)=>{const i=Cf(n);yl(t,i.target)&&(s=i,r.done())})).next((()=>s))}addMatchingKeys(e,t,n){const r=[],s=vm(e);return t.forEach((t=>{const i=jd(t.path);r.push(s.put({targetId:n,path:i})),r.push(this.referenceDelegate.addReference(e,n,t))})),ou.waitFor(r)}removeMatchingKeys(e,t,n){const r=vm(e);return ou.forEach(t,(t=>{const s=jd(t.path);return ou.waitFor([r.delete([n,s]),this.referenceDelegate.removeReference(e,n,t)])}))}removeMatchingKeysForTargetId(e,t){const n=vm(e),r=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(r)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),r=vm(e);let s=Hh();return r.J({range:n,H:!0},((e,t,n)=>{const r=Kd(e[1]),i=new Wc(r);s=s.add(i)})).next((()=>s))}containsKey(e,t){const n=jd(t.path),r=IDBKeyRange.bound([n],[Uc(n)],!1,!0);let s=0;return vm(e).J({index:"documentTargetsIndex",H:!0,range:r},(([e,t],n,r)=>{0!==e&&(s++,r.done())})).next((()=>s>0))}te(e,t){return gm(e).get(t).next((e=>e?Cf(e):null))}}function gm(e){return gf(e,"targets")}function ym(e){return gf(e,"targetGlobal")}function vm(e){return gf(e,"targetDocuments")}
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
 */function wm([e,t],[n,r]){const s=Pc(e,n);return 0===s?Pc(t,r):s}class bm{constructor(e){this.Sn=e,this.buffer=new Su(wm),this.Dn=0}Cn(){return++this.Dn}xn(e){const t=[e,this.Cn()];if(this.buffer.size<this.Sn)this.buffer=this.buffer.add(t);else{const e=this.buffer.last();wm(t,e)<0&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Im{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Nn=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.kn(6e4)}stop(){this.Nn&&(this.Nn.cancel(),this.Nn=null)}get started(){return null!==this.Nn}kn(e){yc("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Nn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Nn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){hu(e)?yc("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e):await iu(e)}await this.kn(3e5)}))}}class _m{constructor(e,t){this.Mn=e,this.params=t}calculateTargetCount(e,t){return this.Mn.On(e).next((e=>Math.floor(t/100*e)))}nthSequenceNumber(e,t){if(0===t)return ou.resolve(vu.ot);const n=new bm(t);return this.Mn.forEachTarget(e,(e=>n.xn(e.sequenceNumber))).next((()=>this.Mn.Fn(e,(e=>n.xn(e))))).next((()=>n.maxValue))}removeTargets(e,t,n){return this.Mn.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.Mn.removeOrphanedDocuments(e,t)}collect(e,t){return-1===this.params.cacheSizeCollectionThreshold?(yc("LruGarbageCollector","Garbage collection skipped; disabled"),ou.resolve(im)):this.getCacheSize(e).next((n=>n<this.params.cacheSizeCollectionThreshold?(yc("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),im):this.$n(e,t)))}getCacheSize(e){return this.Mn.getCacheSize(e)}$n(e,t){let n,r,s,i,o,a,c;const u=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((t=>(t>this.params.maximumSequenceNumbersToCollect?(yc("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),r=this.params.maximumSequenceNumbersToCollect):r=t,i=Date.now(),this.nthSequenceNumber(e,r)))).next((r=>(n=r,o=Date.now(),this.removeTargets(e,n,t)))).next((t=>(s=t,a=Date.now(),this.removeOrphanedDocuments(e,n)))).next((e=>(c=Date.now(),pc()<=At.DEBUG&&yc("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${i-u}ms\n\tDetermined least recently used ${r} in `+(o-i)+"ms\n"+`\tRemoved ${s} targets in `+(a-o)+"ms\n"+`\tRemoved ${e} documents in `+(c-a)+"ms\n"+`Total Duration: ${c-u}ms`),ou.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:s,documentsRemoved:e}))))}}
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
 */class Em{constructor(e,t){this.db=e,this.garbageCollector=function(e,t){return new _m(e,t)}(this,t)}On(e){const t=this.Bn(e);return this.db.getTargetCache().getTargetCount(e).next((e=>t.next((t=>e+t))))}Bn(e){let t=0;return this.Fn(e,(e=>{t++})).next((()=>t))}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Fn(e,t){return this.Ln(e,((e,n)=>t(n)))}addReference(e,t,n){return Tm(e,n)}removeReference(e,t,n){return Tm(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return Tm(e,t)}Un(e,t){return function(e,t){let n=!1;return fm(e).Y((r=>lm(e,r,t).next((e=>(e&&(n=!0),ou.resolve(!e)))))).next((()=>n))}(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),r=[];let s=0;return this.Ln(e,((i,o)=>{if(o<=t){const t=this.Un(e,i).next((t=>{if(!t)return s++,n.getEntry(e,i).next((()=>(n.removeEntry(i,qc.min()),vm(e).delete([0,jd(i.path)]))))}));r.push(t)}})).next((()=>ou.waitFor(r))).next((()=>n.apply(e))).next((()=>s))}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return Tm(e,t)}Ln(e,t){const n=vm(e);let r,s=vu.ot;return n.J({index:"documentTargetsIndex"},(([e,n],{path:i,sequenceNumber:o})=>{0===e?(s!==vu.ot&&t(new Wc(Kd(r)),s),s=o,r=i):s=vu.ot})).next((()=>{s!==vu.ot&&t(new Wc(Kd(r)),s)}))}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Tm(e,t){return vm(e).put(function(e,t){return{targetId:0,path:jd(e.path),sequenceNumber:t}}(t,e.currentSequenceNumber))}
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
 */class Sm{constructor(){this.changes=new Fh((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,dl.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?ou.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
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
 */class xm{constructor(e){this.wt=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return km(e).put(n)}removeEntry(e,t,n){return km(e).delete(function(e,t){const n=e.path.toArray();return[n.slice(0,n.length-2),n[n.length-2],Tf(t),n[n.length-1]]}(t,n))}updateMetadata(e,t){return this.getMetadata(e).next((n=>(n.byteSize+=t,this.qn(e,n))))}getEntry(e,t){let n=dl.newInvalidDocument(t);return km(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(Nm(t))},((e,r)=>{n=this.Kn(t,r)})).next((()=>n))}Gn(e,t){let n={size:0,document:dl.newInvalidDocument(t)};return km(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(Nm(t))},((e,r)=>{n={document:this.Kn(t,r),size:cm(r)}})).next((()=>n))}getEntries(e,t){let n=Bh();return this.Qn(e,t,((e,t)=>{const r=this.Kn(e,t);n=n.insert(e,r)})).next((()=>n))}jn(e,t){let n=Bh(),r=new _u(Wc.comparator);return this.Qn(e,t,((e,t)=>{const s=this.Kn(e,t);n=n.insert(e,s),r=r.insert(e,cm(t))})).next((()=>({documents:n,Wn:r})))}Qn(e,t,n){if(t.isEmpty())return ou.resolve();let r=new Su(Om);t.forEach((e=>r=r.add(e)));const s=IDBKeyRange.bound(Nm(r.first()),Nm(r.last())),i=r.getIterator();let o=i.getNext();return km(e).J({index:"documentKeyIndex",range:s},((e,t,r)=>{const s=Wc.fromSegments([...t.prefixPath,t.collectionGroup,t.documentId]);for(;o&&Om(o,s)<0;)n(o,null),o=i.getNext();o&&o.isEqual(s)&&(n(o,t),o=i.hasNext()?i.getNext():null),o?r.q(Nm(o)):r.done()})).next((()=>{for(;o;)n(o,null),o=i.hasNext()?i.getNext():null}))}getAllFromCollection(e,t,n){const r=[t.popLast().toArray(),t.lastSegment(),Tf(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],s=[t.popLast().toArray(),t.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return km(e).K(IDBKeyRange.bound(r,s,!0)).next((e=>{let t=Bh();for(const n of e){const e=this.Kn(Wc.fromSegments(n.prefixPath.concat(n.collectionGroup,n.documentId)),n);t=t.insert(e.key,e)}return t}))}getAllFromCollectionGroup(e,t,n,r){let s=Bh();const i=Lm(t,n),o=Lm(t,tu.max());return km(e).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(i,o,!0)},((e,t,n)=>{const i=this.Kn(Wc.fromSegments(t.prefixPath.concat(t.collectionGroup,t.documentId)),t);s=s.insert(i.key,i),s.size===r&&n.done()})).next((()=>s))}newChangeBuffer(e){return new Cm(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next((e=>e.byteSize))}getMetadata(e){return Am(e).get("remoteDocumentGlobalKey").next((e=>(_c(!!e),e)))}qn(e,t){return Am(e).put("remoteDocumentGlobalKey",t)}Kn(e,t){if(t){const e=_f(this.wt,t);if(!e.isNoDocument()||!e.version.isEqual(qc.min()))return e}return dl.newInvalidDocument(e)}}function Dm(e){return new xm(e)}class Cm extends Sm{constructor(e,t){super(),this.zn=e,this.trackRemovals=t,this.Hn=new Fh((e=>e.toString()),((e,t)=>e.isEqual(t)))}applyChanges(e){const t=[];let n=0,r=new Su(((e,t)=>Pc(e.canonicalString(),t.canonicalString())));return this.changes.forEach(((s,i)=>{const o=this.Hn.get(s);if(t.push(this.zn.removeEntry(e,s,o.readTime)),i.isValidDocument()){const a=Ef(this.zn.wt,i);r=r.add(s.path.popLast());const c=cm(a);n+=c-o.size,t.push(this.zn.addEntry(e,s,a))}else if(n-=o.size,this.trackRemovals){const n=Ef(this.zn.wt,i.convertToNoDocument(qc.min()));t.push(this.zn.addEntry(e,s,n))}})),r.forEach((n=>{t.push(this.zn.indexManager.addToCollectionParentIndex(e,n))})),t.push(this.zn.updateMetadata(e,n)),ou.waitFor(t)}getFromCache(e,t){return this.zn.Gn(e,t).next((e=>(this.Hn.set(t,{size:e.size,readTime:e.document.readTime}),e.document)))}getAllFromCache(e,t){return this.zn.jn(e,t).next((({documents:e,Wn:t})=>(t.forEach(((t,n)=>{this.Hn.set(t,{size:n,readTime:e.get(t).readTime})})),e)))}}function Am(e){return gf(e,"remoteDocumentGlobal")}function km(e){return gf(e,"remoteDocumentsV14")}function Nm(e){const t=e.path.toArray();return[t.slice(0,t.length-2),t[t.length-2],t[t.length-1]]}function Lm(e,t){const n=t.documentKey.path.toArray();return[e,Tf(t.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function Om(e,t){const n=e.path.toArray(),r=t.path.toArray();let s=0;for(let i=0;i<n.length-2&&i<r.length-2;++i)if(s=Pc(n[i],r[i]),s)return s;return s=Pc(n.length,r.length),s||(s=Pc(n[n.length-2],r[r.length-2]),s||Pc(n[n.length-1],r[r.length-1]))
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
 */}class Rm{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
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
 */class Mm{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(n=r,this.getBaseDocument(e,t,n)))).next((e=>(null!==n&&_h(n.mutation,e,Cu.empty(),jc.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,Hh()).next((()=>t))))}getLocalViewOfDocuments(e,t,n=Hh()){const r=$h();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,n).next((e=>{let t=jh();return e.forEach(((e,n)=>{t=t.insert(e,n.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){const n=$h();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,Hh())))}populateOverlays(e,t,n){const r=[];return n.forEach((e=>{t.has(e)||r.push(e)})),this.documentOverlayCache.getOverlays(e,r).next((e=>{e.forEach(((e,n)=>{t.set(e,n)}))}))}computeViews(e,t,n,r){let s=Bh();const i=Gh(),o=Gh();return t.forEach(((e,t)=>{const o=n.get(t.key);r.has(t.key)&&(void 0===o||o.mutation instanceof xh)?s=s.insert(t.key,t):void 0!==o&&(i.set(t.key,o.mutation.getFieldMask()),_h(o.mutation,t,o.mutation.getFieldMask(),jc.now()))})),this.recalculateAndSaveOverlays(e,s).next((e=>(e.forEach(((e,t)=>i.set(e,t))),t.forEach(((e,t)=>{var n;return o.set(e,new Rm(t,null!==(n=i.get(e))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(e,t){const n=Gh();let r=new _u(((e,t)=>e-t)),s=Hh();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(const s of e)s.keys().forEach((e=>{const i=t.get(e);if(null===i)return;let o=n.get(e)||Cu.empty();o=s.applyToLocalView(i,o),n.set(e,o);const a=(r.get(s.batchId)||Hh()).add(e);r=r.insert(s.batchId,a)}))})).next((()=>{const i=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,c=r.value,u=Kh();c.forEach((e=>{if(!s.has(e)){const r=bh(t.get(e),n.get(e));null!==r&&u.set(e,r),s=s.add(e)}})),i.push(this.documentOverlayCache.saveOverlays(e,a,u))}return ou.waitFor(i)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,n){return function(e){return Wc.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):ql(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n):this.getDocumentsMatchingCollectionQuery(e,t,n)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next((s=>{const i=r-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-s.size):ou.resolve($h());let o=-1,a=s;return i.next((t=>ou.forEach(t,((t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),s.get(t)?ou.resolve():this.getBaseDocument(e,t,n).next((e=>{a=a.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,s))).next((()=>this.computeViews(e,a,t,Hh()))).next((e=>({batchId:o,changes:qh(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Wc(t)).next((e=>{let t=jh();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,n){const r=t.collectionGroup;let s=jh();return this.indexManager.getCollectionParents(e,r).next((i=>ou.forEach(i,(i=>{const o=function(e,t){return new Vl(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,i.child(r));return this.getDocumentsMatchingCollectionQuery(e,o,n).next((e=>{e.forEach(((e,t)=>{s=s.insert(e,t)}))}))})).next((()=>s))))}getDocumentsMatchingCollectionQuery(e,t,n){let r;return this.remoteDocumentCache.getAllFromCollection(e,t.path,n).next((s=>(r=s,this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId)))).next((e=>{e.forEach(((e,t)=>{const n=t.getKey();null===r.get(n)&&(r=r.insert(n,dl.newInvalidDocument(n)))}));let n=jh();return r.forEach(((r,s)=>{const i=e.get(r);void 0!==i&&_h(i.mutation,s,Cu.empty(),jc.now()),Ql(t,s)&&(n=n.insert(r,s))})),n}))}getBaseDocument(e,t,n){return null===n||1===n.mutation.type?this.remoteDocumentCache.getEntry(e,t):ou.resolve(dl.newInvalidDocument(t))}}
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
 */class Vm{constructor(e){this.wt=e,this.Jn=new Map,this.Yn=new Map}getBundleMetadata(e,t){return ou.resolve(this.Jn.get(t))}saveBundleMetadata(e,t){var n;return this.Jn.set(t.id,{id:(n=t).id,version:n.version,createTime:dd(n.createTime)}),ou.resolve()}getNamedQuery(e,t){return ou.resolve(this.Yn.get(t))}saveNamedQuery(e,t){return this.Yn.set(t.name,function(e){return{name:e.name,query:kf(e.bundledQuery),readTime:dd(e.readTime)}}(t)),ou.resolve()}}
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
 */class Fm{constructor(){this.overlays=new _u(Wc.comparator),this.Xn=new Map}getOverlay(e,t){return ou.resolve(this.overlays.get(t))}getOverlays(e,t){const n=$h();return ou.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((n,r)=>{this.ie(e,t,r)})),ou.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.Xn.get(n);return void 0!==r&&(r.forEach((e=>this.overlays=this.overlays.remove(e))),this.Xn.delete(n)),ou.resolve()}getOverlaysForCollection(e,t,n){const r=$h(),s=t.length+1,i=new Wc(t.child("")),o=this.overlays.getIteratorFrom(i);for(;o.hasNext();){const e=o.getNext().value,i=e.getKey();if(!t.isPrefixOf(i.path))break;i.path.length===s&&e.largestBatchId>n&&r.set(e.getKey(),e)}return ou.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let s=new _u(((e,t)=>e-t));const i=this.overlays.getIterator();for(;i.hasNext();){const e=i.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=s.get(e.largestBatchId);null===t&&(t=$h(),s=s.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=$h(),a=s.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((e,t)=>o.set(e,t))),o.size()>=r)break;return ou.resolve(o)}ie(e,t,n){const r=this.overlays.get(n.key);if(null!==r){const e=this.Xn.get(r.largestBatchId).delete(n.key);this.Xn.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new wf(t,n));let s=this.Xn.get(t);void 0===s&&(s=Hh(),this.Xn.set(t,s)),this.Xn.set(t,s.add(n.key))}}
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
 */class Pm{constructor(){this.Zn=new Su(Bm.ts),this.es=new Su(Bm.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(e,t){const n=new Bm(e,t);this.Zn=this.Zn.add(n),this.es=this.es.add(n)}ss(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.rs(new Bm(e,t))}os(e,t){e.forEach((e=>this.removeReference(e,t)))}us(e){const t=new Wc(new Kc([])),n=new Bm(t,e),r=new Bm(t,e+1),s=[];return this.es.forEachInRange([n,r],(e=>{this.rs(e),s.push(e.key)})),s}cs(){this.Zn.forEach((e=>this.rs(e)))}rs(e){this.Zn=this.Zn.delete(e),this.es=this.es.delete(e)}hs(e){const t=new Wc(new Kc([])),n=new Bm(t,e),r=new Bm(t,e+1);let s=Hh();return this.es.forEachInRange([n,r],(e=>{s=s.add(e.key)})),s}containsKey(e){const t=new Bm(e,0),n=this.Zn.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class Bm{constructor(e,t){this.key=e,this.ls=t}static ts(e,t){return Wc.comparator(e.key,t.key)||Pc(e.ls,t.ls)}static ns(e,t){return Pc(e.ls,t.ls)||Wc.comparator(e.key,t.key)}}
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
 */class Um{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.fs=1,this.ds=new Su(Bm.ts)}checkEmpty(e){return ou.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){const s=this.fs;this.fs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const i=new yf(s,t,n,r);this.mutationQueue.push(i);for(const o of r)this.ds=this.ds.add(new Bm(o.key,s)),this.indexManager.addToCollectionParentIndex(e,o.key.path.popLast());return ou.resolve(i)}lookupMutationBatch(e,t){return ou.resolve(this._s(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.ws(n),s=r<0?0:r;return ou.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return ou.resolve(0===this.mutationQueue.length?-1:this.fs-1)}getAllMutationBatches(e){return ou.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Bm(t,0),r=new Bm(t,Number.POSITIVE_INFINITY),s=[];return this.ds.forEachInRange([n,r],(e=>{const t=this._s(e.ls);s.push(t)})),ou.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Su(Pc);return t.forEach((e=>{const t=new Bm(e,0),r=new Bm(e,Number.POSITIVE_INFINITY);this.ds.forEachInRange([t,r],(e=>{n=n.add(e.ls)}))})),ou.resolve(this.gs(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let s=n;Wc.isDocumentKey(s)||(s=s.child(""));const i=new Bm(new Wc(s),0);let o=new Su(Pc);return this.ds.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.ls)),!0)}),i),ou.resolve(this.gs(o))}gs(e){const t=[];return e.forEach((e=>{const n=this._s(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){_c(0===this.ys(t.batchId,"removed")),this.mutationQueue.shift();let n=this.ds;return ou.forEach(t.mutations,(r=>{const s=new Bm(r.key,t.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.ds=n}))}In(e){}containsKey(e,t){const n=new Bm(t,0),r=this.ds.firstAfterOrEqual(n);return ou.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,ou.resolve()}ys(e,t){return this.ws(e)}ws(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}_s(e){const t=this.ws(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
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
 */class jm{constructor(e){this.ps=e,this.docs=new _u(Wc.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),s=r?r.size:0,i=this.ps(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:i}),this.size+=i-s,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return ou.resolve(n?n.document.mutableCopy():dl.newInvalidDocument(t))}getEntries(e,t){let n=Bh();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():dl.newInvalidDocument(e))})),ou.resolve(n)}getAllFromCollection(e,t,n){let r=Bh();const s=new Wc(t.child("")),i=this.docs.getIteratorFrom(s);for(;i.hasNext();){const{key:e,value:{document:s}}=i.getNext();if(!t.isPrefixOf(e.path))break;e.path.length>t.length+1||nu(eu(s),n)<=0||(r=r.insert(s.key,s.mutableCopy()))}return ou.resolve(r)}getAllFromCollectionGroup(e,t,n,r){Ic()}Is(e,t){return ou.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new qm(this)}getSize(e){return ou.resolve(this.size)}}class qm extends Sm{constructor(e){super(),this.zn=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?t.push(this.zn.addEntry(e,r)):this.zn.removeEntry(n)})),ou.waitFor(t)}getFromCache(e,t){return this.zn.getEntry(e,t)}getAllFromCache(e,t){return this.zn.getEntries(e,t)}}
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
 */class $m{constructor(e){this.persistence=e,this.Ts=new Fh((e=>pl(e)),yl),this.lastRemoteSnapshotVersion=qc.min(),this.highestTargetId=0,this.Es=0,this.As=new Pm,this.targetCount=0,this.Rs=mm.An()}forEachTarget(e,t){return this.Ts.forEach(((e,n)=>t(n))),ou.resolve()}getLastRemoteSnapshotVersion(e){return ou.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return ou.resolve(this.Es)}allocateTargetId(e){return this.highestTargetId=this.Rs.next(),ou.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Es&&(this.Es=t),ou.resolve()}vn(e){this.Ts.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Rs=new mm(t),this.highestTargetId=t),e.sequenceNumber>this.Es&&(this.Es=e.sequenceNumber)}addTargetData(e,t){return this.vn(t),this.targetCount+=1,ou.resolve()}updateTargetData(e,t){return this.vn(t),ou.resolve()}removeTargetData(e,t){return this.Ts.delete(t.target),this.As.us(t.targetId),this.targetCount-=1,ou.resolve()}removeTargets(e,t,n){let r=0;const s=[];return this.Ts.forEach(((i,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.Ts.delete(i),s.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)})),ou.waitFor(s).next((()=>r))}getTargetCount(e){return ou.resolve(this.targetCount)}getTargetData(e,t){const n=this.Ts.get(t)||null;return ou.resolve(n)}addMatchingKeys(e,t,n){return this.As.ss(t,n),ou.resolve()}removeMatchingKeys(e,t,n){this.As.os(t,n);const r=this.persistence.referenceDelegate,s=[];return r&&t.forEach((t=>{s.push(r.markPotentiallyOrphaned(e,t))})),ou.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.As.us(t),ou.resolve()}getMatchingKeysForTargetId(e,t){const n=this.As.hs(t);return ou.resolve(n)}containsKey(e,t){return ou.resolve(this.As.containsKey(t))}}
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
 */class Km{constructor(e,t){this.bs={},this.overlays={},this.Ps=new vu(0),this.vs=!1,this.vs=!0,this.referenceDelegate=e(this),this.Vs=new $m(this),this.indexManager=new Yf,this.remoteDocumentCache=function(e){return new jm(e)}((e=>this.referenceDelegate.Ss(e))),this.wt=new If(t),this.Ds=new Vm(this.wt)}start(){return Promise.resolve()}shutdown(){return this.vs=!1,Promise.resolve()}get started(){return this.vs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Fm,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.bs[e.toKey()];return n||(n=new Um(t,this.referenceDelegate),this.bs[e.toKey()]=n),n}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ds}runTransaction(e,t,n){yc("MemoryPersistence","Starting transaction:",e);const r=new Gm(this.Ps.next());return this.referenceDelegate.Cs(),n(r).next((e=>this.referenceDelegate.xs(r).next((()=>e)))).toPromise().then((e=>(r.raiseOnCommittedEvent(),e)))}Ns(e,t){return ou.or(Object.values(this.bs).map((n=>()=>n.containsKey(e,t))))}}class Gm extends su{constructor(e){super(),this.currentSequenceNumber=e}}class zm{constructor(e){this.persistence=e,this.ks=new Pm,this.Ms=null}static Os(e){return new zm(e)}get Fs(){if(this.Ms)return this.Ms;throw Ic()}addReference(e,t,n){return this.ks.addReference(n,t),this.Fs.delete(n.toString()),ou.resolve()}removeReference(e,t,n){return this.ks.removeReference(n,t),this.Fs.add(n.toString()),ou.resolve()}markPotentiallyOrphaned(e,t){return this.Fs.add(t.toString()),ou.resolve()}removeTarget(e,t){this.ks.us(t.targetId).forEach((e=>this.Fs.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.Fs.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}Cs(){this.Ms=new Set}xs(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ou.forEach(this.Fs,(n=>{const r=Wc.fromPath(n);return this.$s(e,r).next((e=>{e||t.removeEntry(r,qc.min())}))})).next((()=>(this.Ms=null,t.apply(e))))}updateLimboDocument(e,t){return this.$s(e,t).next((e=>{e?this.Fs.delete(t.toString()):this.Fs.add(t.toString())}))}Ss(e){return 0}$s(e,t){return ou.or([()=>ou.resolve(this.ks.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ns(e,t)])}}
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
 */class Wm{constructor(e){this.wt=e}M(e,t,n,r){const s=new au("createOrUpgrade",t);n<1&&r>=1&&(function(e){e.createObjectStore("owner")}(e),function(e){e.createObjectStore("mutationQueues",{keyPath:"userId"}),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Gd,{unique:!0}),e.createObjectStore("documentMutations")}(e),Hm(e),function(e){e.createObjectStore("remoteDocuments")}(e));let i=ou.resolve();return n<3&&r>=3&&(0!==n&&(function(e){e.deleteObjectStore("targetDocuments"),e.deleteObjectStore("targets"),e.deleteObjectStore("targetGlobal")}(e),Hm(e)),i=i.next((()=>function(e){const t=e.store("targetGlobal"),n={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:qc.min().toTimestamp(),targetCount:0};return t.put("targetGlobalKey",n)}(s)))),n<4&&r>=4&&(0!==n&&(i=i.next((()=>function(e,t){return t.store("mutations").K().next((n=>{e.deleteObjectStore("mutations"),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Gd,{unique:!0});const r=t.store("mutations"),s=n.map((e=>r.put(e)));return ou.waitFor(s)}))}(e,s)))),i=i.next((()=>{!function(e){e.createObjectStore("clientMetadata",{keyPath:"clientId"})}(e)}))),n<5&&r>=5&&(i=i.next((()=>this.Bs(s)))),n<6&&r>=6&&(i=i.next((()=>(function(e){e.createObjectStore("remoteDocumentGlobal")}(e),this.Ls(s))))),n<7&&r>=7&&(i=i.next((()=>this.Us(s)))),n<8&&r>=8&&(i=i.next((()=>this.qs(e,s)))),n<9&&r>=9&&(i=i.next((()=>{!function(e){e.objectStoreNames.contains("remoteDocumentChanges")&&e.deleteObjectStore("remoteDocumentChanges")}(e)}))),n<10&&r>=10&&(i=i.next((()=>this.Ks(s)))),n<11&&r>=11&&(i=i.next((()=>{!function(e){e.createObjectStore("bundles",{keyPath:"bundleId"})}(e),function(e){e.createObjectStore("namedQueries",{keyPath:"name"})}(e)}))),n<12&&r>=12&&(i=i.next((()=>{!function(e){const t=e.createObjectStore("documentOverlays",{keyPath:af});t.createIndex("collectionPathOverlayIndex",cf,{unique:!1}),t.createIndex("collectionGroupOverlayIndex",uf,{unique:!1})}(e)}))),n<13&&r>=13&&(i=i.next((()=>function(e){const t=e.createObjectStore("remoteDocumentsV14",{keyPath:Qd});t.createIndex("documentKeyIndex",Yd),t.createIndex("collectionGroupIndex",Xd)}(e))).next((()=>this.Gs(e,s))).next((()=>e.deleteObjectStore("remoteDocuments")))),n<14&&r>=14&&(i=i.next((()=>this.Qs(e,s)))),n<15&&r>=15&&(i=i.next((()=>function(e){e.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),e.createObjectStore("indexState",{keyPath:nf}).createIndex("sequenceNumberIndex",rf,{unique:!1}),e.createObjectStore("indexEntries",{keyPath:sf}).createIndex("documentKeyIndex",of,{unique:!1})}(e)))),i}Ls(e){let t=0;return e.store("remoteDocuments").J(((e,n)=>{t+=cm(n)})).next((()=>{const n={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",n)}))}Bs(e){const t=e.store("mutationQueues"),n=e.store("mutations");return t.K().next((t=>ou.forEach(t,(t=>{const r=IDBKeyRange.bound([t.userId,-1],[t.userId,t.lastAcknowledgedBatchId]);return n.K("userMutationsIndex",r).next((n=>ou.forEach(n,(n=>{_c(n.userId===t.userId);const r=Df(this.wt,n);return am(e,t.userId,r).next((()=>{}))}))))}))))}Us(e){const t=e.store("targetDocuments"),n=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next((e=>{const r=[];return n.J(((n,s)=>{const i=new Kc(n),o=function(e){return[0,jd(e)]}(i);r.push(t.get(o).next((n=>n?ou.resolve():(n=>t.put({targetId:0,path:jd(n),sequenceNumber:e.highestListenSequenceNumber}))(i))))})).next((()=>ou.waitFor(r)))}))}qs(e,t){e.createObjectStore("collectionParents",{keyPath:tf});const n=t.store("collectionParents"),r=new Xf,s=e=>{if(r.add(e)){const t=e.lastSegment(),r=e.popLast();return n.put({collectionId:t,parent:jd(r)})}};return t.store("remoteDocuments").J({H:!0},((e,t)=>{const n=new Kc(e);return s(n.popLast())})).next((()=>t.store("documentMutations").J({H:!0},(([e,t,n],r)=>{const i=Kd(t);return s(i.popLast())}))))}Ks(e){const t=e.store("targets");return t.J(((e,n)=>{const r=Cf(n),s=Af(this.wt,r);return t.put(s)}))}Gs(e,t){const n=t.store("remoteDocuments"),r=[];return n.J(((e,n)=>{const s=t.store("remoteDocumentsV14"),i=(o=n,o.document?new Wc(Kc.fromString(o.document.name).popFirst(5)):o.noDocument?Wc.fromSegments(o.noDocument.path):o.unknownDocument?Wc.fromSegments(o.unknownDocument.path):Ic()).path.toArray();var o;
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
 */const a={prefixPath:i.slice(0,i.length-2),collectionGroup:i[i.length-2],documentId:i[i.length-1],readTime:n.readTime||[0,0],unknownDocument:n.unknownDocument,noDocument:n.noDocument,document:n.document,hasCommittedMutations:!!n.hasCommittedMutations};r.push(s.put(a))})).next((()=>ou.waitFor(r)))}Qs(e,t){const n=t.store("mutations"),r=Dm(this.wt),s=new Km(zm.Os,this.wt.ne);return n.K().next((e=>{const n=new Map;return e.forEach((e=>{var t;let r=null!==(t=n.get(e.userId))&&void 0!==t?t:Hh();Df(this.wt,e).keys().forEach((e=>r=r.add(e))),n.set(e.userId,r)})),ou.forEach(n,((e,n)=>{const i=new dc(n),o=Ff.se(this.wt,i),a=s.getIndexManager(i),c=um.se(i,this.wt,a,s.referenceDelegate);return new Mm(r,c,o,a).recalculateAndSaveOverlaysForDocumentKeys(new pf(t,vu.ot),e).next()}))}))}}function Hm(e){e.createObjectStore("targetDocuments",{keyPath:Zd}).createIndex("documentTargetsIndex",ef,{unique:!0}),e.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",Jd,{unique:!0}),e.createObjectStore("targetGlobal")}const Qm="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Ym{constructor(e,t,n,r,s,i,o,a,c,u,l=15){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.js=s,this.window=i,this.document=o,this.Ws=c,this.zs=u,this.Hs=l,this.Ps=null,this.vs=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Js=null,this.inForeground=!1,this.Ys=null,this.Xs=null,this.Zs=Number.NEGATIVE_INFINITY,this.ti=e=>Promise.resolve(),!Ym.V())throw new xc(Sc.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new Em(this,r),this.ei=t+"main",this.wt=new If(a),this.ni=new cu(this.ei,this.Hs,new Wm(this.wt)),this.Vs=new pm(this.referenceDelegate,this.wt),this.remoteDocumentCache=Dm(this.wt),this.Ds=new Rf,this.window&&this.window.localStorage?this.si=this.window.localStorage:(this.si=null,!1===u&&vc("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.ii().then((()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new xc(Sc.FAILED_PRECONDITION,Qm);return this.ri(),this.oi(),this.ui(),this.runTransaction("getHighestListenSequenceNumber","readonly",(e=>this.Vs.getHighestSequenceNumber(e)))})).then((e=>{this.Ps=new vu(e,this.Ws)})).then((()=>{this.vs=!0})).catch((e=>(this.ni&&this.ni.close(),Promise.reject(e))))}ci(e){return this.ti=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.ni.F((async t=>{null===t.newVersion&&await e()}))}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.js.enqueueAndForget((async()=>{this.started&&await this.ii()})))}ii(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",(e=>Jm(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next((()=>{if(this.isPrimary)return this.ai(e).next((e=>{e||(this.isPrimary=!1,this.js.enqueueRetryable((()=>this.ti(!1))))}))})).next((()=>this.hi(e))).next((t=>this.isPrimary&&!t?this.li(e).next((()=>!1)):!!t&&this.fi(e).next((()=>!0)))))).catch((e=>{if(hu(e))return yc("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return yc("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1})).then((e=>{this.isPrimary!==e&&this.js.enqueueRetryable((()=>this.ti(e))),this.isPrimary=e}))}ai(e){return Xm(e).get("owner").next((e=>ou.resolve(this.di(e))))}_i(e){return Jm(e).delete(this.clientId)}async wi(){if(this.isPrimary&&!this.mi(this.Zs,18e5)){this.Zs=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",(e=>{const t=gf(e,"clientMetadata");return t.K().next((e=>{const n=this.gi(e,18e5),r=e.filter((e=>-1===n.indexOf(e)));return ou.forEach(r,(e=>t.delete(e.clientId))).next((()=>r))}))})).catch((()=>[]));if(this.si)for(const t of e)this.si.removeItem(this.yi(t.clientId))}}ui(){this.Xs=this.js.enqueueAfterDelay("client_metadata_refresh",4e3,(()=>this.ii().then((()=>this.wi())).then((()=>this.ui()))))}di(e){return!!e&&e.ownerId===this.clientId}hi(e){return this.zs?ou.resolve(!0):Xm(e).get("owner").next((t=>{if(null!==t&&this.mi(t.leaseTimestampMs,5e3)&&!this.pi(t.ownerId)){if(this.di(t)&&this.networkEnabled)return!0;if(!this.di(t)){if(!t.allowTabSynchronization)throw new xc(Sc.FAILED_PRECONDITION,Qm);return!1}}return!(!this.networkEnabled||!this.inForeground)||Jm(e).K().next((e=>void 0===this.gi(e,5e3).find((e=>{if(this.clientId!==e.clientId){const t=!this.networkEnabled&&e.networkEnabled,n=!this.inForeground&&e.inForeground,r=this.networkEnabled===e.networkEnabled;if(t||n&&r)return!0}return!1}))))})).next((e=>(this.isPrimary!==e&&yc("IndexedDbPersistence",`Client ${e?"is":"is not"} eligible for a primary lease.`),e)))}async shutdown(){this.vs=!1,this.Ii(),this.Xs&&(this.Xs.cancel(),this.Xs=null),this.Ti(),this.Ei(),await this.ni.runTransaction("shutdown","readwrite",["owner","clientMetadata"],(e=>{const t=new pf(e,vu.ot);return this.li(t).next((()=>this._i(t)))})),this.ni.close(),this.Ai()}gi(e,t){return e.filter((e=>this.mi(e.updateTimeMs,t)&&!this.pi(e.clientId)))}Ri(){return this.runTransaction("getActiveClients","readonly",(e=>Jm(e).K().next((e=>this.gi(e,18e5).map((e=>e.clientId))))))}get started(){return this.vs}getMutationQueue(e,t){return um.se(e,this.wt,t,this.referenceDelegate)}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new Zf(e,this.wt.ne.databaseId)}getDocumentOverlayCache(e){return Ff.se(this.wt,e)}getBundleCache(){return this.Ds}runTransaction(e,t,n){yc("IndexedDbPersistence","Starting transaction:",e);const r="readonly"===t?"readonly":"readwrite",s=15===(i=this.Hs)?mf:14===i?ff:13===i?df:12===i?hf:11===i?lf:void Ic();var i;let o;return this.ni.runTransaction(e,r,s,(r=>(o=new pf(r,this.Ps?this.Ps.next():vu.ot),"readwrite-primary"===t?this.ai(o).next((e=>!!e||this.hi(o))).next((t=>{if(!t)throw vc(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.js.enqueueRetryable((()=>this.ti(!1))),new xc(Sc.FAILED_PRECONDITION,ru);return n(o)})).next((e=>this.fi(o).next((()=>e)))):this.bi(o).next((()=>n(o)))))).then((e=>(o.raiseOnCommittedEvent(),e)))}bi(e){return Xm(e).get("owner").next((e=>{if(null!==e&&this.mi(e.leaseTimestampMs,5e3)&&!this.pi(e.ownerId)&&!this.di(e)&&!(this.zs||this.allowTabSynchronization&&e.allowTabSynchronization))throw new xc(Sc.FAILED_PRECONDITION,Qm)}))}fi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Xm(e).put("owner",t)}static V(){return cu.V()}li(e){const t=Xm(e);return t.get("owner").next((e=>this.di(e)?(yc("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):ou.resolve()))}mi(e,t){const n=Date.now();return!(e<n-t)&&(!(e>n)||(vc(`Detected an update time that is in the future: ${e} > ${n}`),!1))}ri(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.Ys=()=>{this.js.enqueueAndForget((()=>(this.inForeground="visible"===this.document.visibilityState,this.ii())))},this.document.addEventListener("visibilitychange",this.Ys),this.inForeground="visible"===this.document.visibilityState)}Ti(){this.Ys&&(this.document.removeEventListener("visibilitychange",this.Ys),this.Ys=null)}oi(){var e;"function"==typeof(null===(e=this.window)||void 0===e?void 0:e.addEventListener)&&(this.Js=()=>{this.Ii(),ot()&&navigator.appVersion.match(/Version\/1[45]/)&&this.js.enterRestrictedMode(!0),this.js.enqueueAndForget((()=>this.shutdown()))},this.window.addEventListener("pagehide",this.Js))}Ei(){this.Js&&(this.window.removeEventListener("pagehide",this.Js),this.Js=null)}pi(e){var t;try{const n=null!==(null===(t=this.si)||void 0===t?void 0:t.getItem(this.yi(e)));return yc("IndexedDbPersistence",`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(e){return vc("IndexedDbPersistence","Failed to get zombied client id.",e),!1}}Ii(){if(this.si)try{this.si.setItem(this.yi(this.clientId),String(Date.now()))}catch(Hr){vc("Failed to set zombie client id.",Hr)}}Ai(){if(this.si)try{this.si.removeItem(this.yi(this.clientId))}catch(Hr){}}yi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Xm(e){return gf(e,"owner")}function Jm(e){return gf(e,"clientMetadata")}function Zm(e,t){let n=e.projectId;return e.isDefaultDatabase||(n+="."+e.database),"firestore/"+t+"/"+n+"/"
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
 */}class ep{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Pi=n,this.vi=r}static Vi(e,t){let n=Hh(),r=Hh();for(const s of t.docChanges)switch(s.type){case 0:n=n.add(s.doc.key);break;case 1:r=r.add(s.doc.key)}return new ep(e,t.fromCache,n,r)}}
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
 */class tp{constructor(){this.Si=!1}initialize(e,t){this.Di=e,this.indexManager=t,this.Si=!0}getDocumentsMatchingQuery(e,t,n,r){return this.Ci(e,t).next((s=>s||this.xi(e,t,r,n))).next((n=>n||this.Ni(e,t)))}Ci(e,t){if(Bl(t))return ou.resolve(null);let n=Kl(t);return this.indexManager.getIndexType(e,n).next((r=>0===r?null:(null!==t.limit&&1===r&&(t=Gl(t,null,"F"),n=Kl(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((r=>{const s=Hh(...r);return this.Di.getDocuments(e,s).next((r=>this.indexManager.getMinOffset(e,n).next((n=>{const i=this.ki(t,r);return this.Mi(t,i,s,n.readTime)?this.Ci(e,Gl(t,null,"F")):this.Oi(e,i,t,n)}))))})))))}xi(e,t,n,r){return Bl(t)||r.isEqual(qc.min())?this.Ni(e,t):this.Di.getDocuments(e,n).next((s=>{const i=this.ki(t,s);return this.Mi(t,i,n,r)?this.Ni(e,t):(pc()<=At.DEBUG&&yc("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Hl(t)),this.Oi(e,i,t,Zc(r,-1)))}))}ki(e,t){let n=new Su(Xl(e));return t.forEach(((t,r)=>{Ql(e,r)&&(n=n.add(r))})),n}Mi(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const s="F"===e.limitType?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}Ni(e,t){return pc()<=At.DEBUG&&yc("QueryEngine","Using full collection scan to execute query:",Hl(t)),this.Di.getDocumentsMatchingQuery(e,t,tu.min())}Oi(e,t,n,r){return this.Di.getDocumentsMatchingQuery(e,n,r).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}}
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
 */class np{constructor(e,t,n,r){this.persistence=e,this.Fi=t,this.wt=r,this.$i=new _u(Pc),this.Bi=new Fh((e=>pl(e)),yl),this.Li=new Map,this.Ui=e.getRemoteDocumentCache(),this.Vs=e.getTargetCache(),this.Ds=e.getBundleCache(),this.qi(n)}qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Mm(this.Ui,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ui.setIndexManager(this.indexManager),this.Fi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.$i)))}}function rp(e,t,n,r){return new np(e,t,n,r)}async function sp(e,t){const n=Tc(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let r;return n.mutationQueue.getAllMutationBatches(e).next((s=>(r=s,n.qi(t),n.mutationQueue.getAllMutationBatches(e)))).next((t=>{const s=[],i=[];let o=Hh();for(const e of r){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){i.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.localDocuments.getDocuments(e,o).next((e=>({Ki:e,removedBatchIds:s,addedBatchIds:i})))}))}))}function ip(e,t){const n=Tc(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const r=t.batch.keys(),s=n.Ui.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const s=n.batch,i=s.keys();let o=ou.resolve();return i.forEach((e=>{o=o.next((()=>r.getEntry(t,e))).next((t=>{const i=n.docVersions.get(e);_c(null!==i),t.version.compareTo(i)<0&&(s.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))}))})),o.next((()=>e.mutationQueue.removeMutationBatch(t,s)))}(n,e,t,s).next((()=>s.apply(e))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=Hh();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t)))).next((()=>n.localDocuments.getDocuments(e,r)))}))}function op(e){const t=Tc(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Vs.getLastRemoteSnapshotVersion(e)))}function ap(e,t){const n=Tc(e),r=t.snapshotVersion;let s=n.$i;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const i=n.Ui.newChangeBuffer({trackRemovals:!0});s=n.$i;const o=[];t.targetChanges.forEach(((i,a)=>{const c=s.get(a);if(!c)return;o.push(n.Vs.removeMatchingKeys(e,i.removedDocuments,a).next((()=>n.Vs.addMatchingKeys(e,i.addedDocuments,a))));let u=c.withSequenceNumber(e.currentSequenceNumber);t.targetMismatches.has(a)?u=u.withResumeToken(ku.EMPTY_BYTE_STRING,qc.min()).withLastLimboFreeSnapshotVersion(qc.min()):i.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(i.resumeToken,r)),s=s.insert(a,u),function(e,t,n){return 0===e.resumeToken.approximateByteSize()||(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,i)&&o.push(n.Vs.updateTargetData(e,u))}));let a=Bh(),c=Hh();if(t.documentUpdates.forEach((r=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),o.push(cp(e,i,t.documentUpdates).next((e=>{a=e.Gi,c=e.Qi}))),!r.isEqual(qc.min())){const t=n.Vs.getLastRemoteSnapshotVersion(e).next((t=>n.Vs.setTargetsMetadata(e,e.currentSequenceNumber,r)));o.push(t)}return ou.waitFor(o).next((()=>i.apply(e))).next((()=>n.localDocuments.getLocalViewOfDocuments(e,a,c))).next((()=>a))})).then((e=>(n.$i=s,e)))}function cp(e,t,n){let r=Hh(),s=Hh();return n.forEach((e=>r=r.add(e))),t.getEntries(e,r).next((e=>{let r=Bh();return n.forEach(((n,i)=>{const o=e.get(n);i.isFoundDocument()!==o.isFoundDocument()&&(s=s.add(n)),i.isNoDocument()&&i.version.isEqual(qc.min())?(t.removeEntry(n,i.readTime),r=r.insert(n,i)):!o.isValidDocument()||i.version.compareTo(o.version)>0||0===i.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(i),r=r.insert(n,i)):yc("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",i.version)})),{Gi:r,Qi:s}}))}function up(e,t){const n=Tc(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t))))}function lp(e,t){const n=Tc(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let r;return n.Vs.getTargetData(e,t).next((s=>s?(r=s,ou.resolve(r)):n.Vs.allocateTargetId(e).next((s=>(r=new bf(t,s,0,e.currentSequenceNumber),n.Vs.addTargetData(e,r).next((()=>r)))))))})).then((e=>{const r=n.$i.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.$i=n.$i.insert(e.targetId,e),n.Bi.set(t,e.targetId)),e}))}async function hp(e,t,n){const r=Tc(e),s=r.$i.get(t),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,(e=>r.persistence.referenceDelegate.removeTarget(e,s)))}catch(e){if(!hu(e))throw e;yc("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}r.$i=r.$i.remove(t),r.Bi.delete(s.target)}function dp(e,t,n){const r=Tc(e);let s=qc.min(),i=Hh();return r.persistence.runTransaction("Execute query","readonly",(e=>function(e,t,n){const r=Tc(e),s=r.Bi.get(n);return void 0!==s?ou.resolve(r.$i.get(s)):r.Vs.getTargetData(t,n)}(r,e,Kl(t)).next((t=>{if(t)return s=t.lastLimboFreeSnapshotVersion,r.Vs.getMatchingKeysForTargetId(e,t.targetId).next((e=>{i=e}))})).next((()=>r.Fi.getDocumentsMatchingQuery(e,t,n?s:qc.min(),n?i:Hh()))).next((e=>(pp(r,Yl(t),e),{documents:e,ji:i})))))}function fp(e,t){const n=Tc(e),r=Tc(n.Vs),s=n.$i.get(t);return s?Promise.resolve(s.target):n.persistence.runTransaction("Get target data","readonly",(e=>r.te(e,t).next((e=>e?e.target:null))))}function mp(e,t){const n=Tc(e),r=n.Li.get(t)||qc.min();return n.persistence.runTransaction("Get new document changes","readonly",(e=>n.Ui.getAllFromCollectionGroup(e,t,Zc(r,-1),Number.MAX_SAFE_INTEGER))).then((e=>(pp(n,t,e),e)))}function pp(e,t,n){let r=qc.min();n.forEach(((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)})),e.Li.set(t,r)}async function gp(e,t,n,r){const s=Tc(e);let i=Hh(),o=Bh();for(const u of n){const e=t.Wi(u.metadata.name);u.document&&(i=i.add(e));const n=t.zi(u);n.setReadTime(t.Hi(u.metadata.readTime)),o=o.insert(e,n)}const a=s.Ui.newChangeBuffer({trackRemovals:!0}),c=await lp(s,function(e){return Kl(Pl(Kc.fromString(`__bundle__/docs/${e}`)))}(r));return s.persistence.runTransaction("Apply bundle documents","readwrite",(e=>cp(e,a,o).next((t=>(a.apply(e),t))).next((t=>s.Vs.removeMatchingKeysForTargetId(e,c.targetId).next((()=>s.Vs.addMatchingKeys(e,i,c.targetId))).next((()=>s.localDocuments.getLocalViewOfDocuments(e,t.Gi,t.Qi))).next((()=>t.Gi))))))}async function yp(e,t,n=Hh()){const r=await lp(e,Kl(kf(t.bundledQuery))),s=Tc(e);return s.persistence.runTransaction("Save named query","readwrite",(e=>{const i=dd(t.readTime);if(r.snapshotVersion.compareTo(i)>=0)return s.Ds.saveNamedQuery(e,t);const o=r.withResumeToken(ku.EMPTY_BYTE_STRING,i);return s.$i=s.$i.insert(o.targetId,o),s.Vs.updateTargetData(e,o).next((()=>s.Vs.removeMatchingKeysForTargetId(e,r.targetId))).next((()=>s.Vs.addMatchingKeys(e,n,r.targetId))).next((()=>s.Ds.saveNamedQuery(e,t)))}))}function vp(e,t){return`firestore_clients_${e}_${t}`}function wp(e,t,n){let r=`firestore_mutations_${e}_${n}`;return t.isAuthenticated()&&(r+=`_${t.uid}`),r}function bp(e,t){return`firestore_targets_${e}_${t}`}class Ip{constructor(e,t,n,r){this.user=e,this.batchId=t,this.state=n,this.error=r}static Ji(e,t,n){const r=JSON.parse(n);let s,i="object"==typeof r&&-1!==["pending","acknowledged","rejected"].indexOf(r.state)&&(void 0===r.error||"object"==typeof r.error);return i&&r.error&&(i="string"==typeof r.error.message&&"string"==typeof r.error.code,i&&(s=new xc(r.error.code,r.error.message))),i?new Ip(e,t,r.state,s):(vc("SharedClientState",`Failed to parse mutation state for ID '${t}': ${n}`),null)}Yi(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class _p{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static Ji(e,t){const n=JSON.parse(t);let r,s="object"==typeof n&&-1!==["not-current","current","rejected"].indexOf(n.state)&&(void 0===n.error||"object"==typeof n.error);return s&&n.error&&(s="string"==typeof n.error.message&&"string"==typeof n.error.code,s&&(r=new xc(n.error.code,n.error.message))),s?new _p(e,n.state,r):(vc("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}Yi(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Ep{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Ji(e,t){const n=JSON.parse(t);let r="object"==typeof n&&n.activeTargetIds instanceof Array,s=Yh();for(let i=0;r&&i<n.activeTargetIds.length;++i)r=qu(n.activeTargetIds[i]),s=s.add(n.activeTargetIds[i]);return r?new Ep(e,s):(vc("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class Tp{constructor(e,t){this.clientId=e,this.onlineState=t}static Ji(e){const t=JSON.parse(e);return"object"==typeof t&&-1!==["Unknown","Online","Offline"].indexOf(t.onlineState)&&"string"==typeof t.clientId?new Tp(t.clientId,t.onlineState):(vc("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Sp{constructor(){this.activeTargetIds=Yh()}Xi(e){this.activeTargetIds=this.activeTargetIds.add(e)}Zi(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Yi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class xp{constructor(e,t,n,r,s){this.window=e,this.js=t,this.persistenceKey=n,this.tr=r,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.er=this.nr.bind(this),this.sr=new _u(Pc),this.started=!1,this.ir=[];const i=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.rr=vp(this.persistenceKey,this.tr),this.ur=function(e){return`firestore_sequence_number_${e}`}
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
 */(this.persistenceKey),this.sr=this.sr.insert(this.tr,new Sp),this.cr=new RegExp(`^firestore_clients_${i}_([^_]*)$`),this.ar=new RegExp(`^firestore_mutations_${i}_(\\d+)(?:_(.*))?$`),this.hr=new RegExp(`^firestore_targets_${i}_(\\d+)$`),this.lr=function(e){return`firestore_online_state_${e}`}(this.persistenceKey),this.dr=function(e){return`firestore_bundle_loaded_v2_${e}`}(this.persistenceKey),this.window.addEventListener("storage",this.er)}static V(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Ri();for(const n of e){if(n===this.tr)continue;const e=this.getItem(vp(this.persistenceKey,n));if(e){const t=Ep.Ji(n,e);t&&(this.sr=this.sr.insert(t.clientId,t))}}this._r();const t=this.storage.getItem(this.lr);if(t){const e=this.wr(t);e&&this.mr(e)}for(const n of this.ir)this.nr(n);this.ir=[],this.window.addEventListener("pagehide",(()=>this.shutdown())),this.started=!0}writeSequenceNumber(e){this.setItem(this.ur,JSON.stringify(e))}getAllActiveQueryTargets(){return this.gr(this.sr)}isActiveQueryTarget(e){let t=!1;return this.sr.forEach(((n,r)=>{r.activeTargetIds.has(e)&&(t=!0)})),t}addPendingMutation(e){this.yr(e,"pending")}updateMutationState(e,t,n){this.yr(e,t,n),this.pr(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const n=this.storage.getItem(bp(this.persistenceKey,e));if(n){const r=_p.Ji(e,n);r&&(t=r.state)}}return this.Ir.Xi(e),this._r(),t}removeLocalQueryTarget(e){this.Ir.Zi(e),this._r()}isLocalQueryTarget(e){return this.Ir.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(bp(this.persistenceKey,e))}updateQueryState(e,t,n){this.Tr(e,t,n)}handleUserChange(e,t,n){t.forEach((e=>{this.pr(e)})),this.currentUser=e,n.forEach((e=>{this.addPendingMutation(e)}))}setOnlineState(e){this.Er(e)}notifyBundleLoaded(e){this.Ar(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.er),this.removeItem(this.rr),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return yc("SharedClientState","READ",e,t),t}setItem(e,t){yc("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){yc("SharedClientState","REMOVE",e),this.storage.removeItem(e)}nr(e){const t=e;if(t.storageArea===this.storage){if(yc("SharedClientState","EVENT",t.key,t.newValue),t.key===this.rr)return void vc("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.js.enqueueRetryable((async()=>{if(this.started){if(null!==t.key)if(this.cr.test(t.key)){if(null==t.newValue){const e=this.Rr(t.key);return this.br(e,null)}{const e=this.Pr(t.key,t.newValue);if(e)return this.br(e.clientId,e)}}else if(this.ar.test(t.key)){if(null!==t.newValue){const e=this.vr(t.key,t.newValue);if(e)return this.Vr(e)}}else if(this.hr.test(t.key)){if(null!==t.newValue){const e=this.Sr(t.key,t.newValue);if(e)return this.Dr(e)}}else if(t.key===this.lr){if(null!==t.newValue){const e=this.wr(t.newValue);if(e)return this.mr(e)}}else if(t.key===this.ur){const e=function(e){let t=vu.ot;if(null!=e)try{const n=JSON.parse(e);_c("number"==typeof n),t=n}catch(e){vc("SharedClientState","Failed to read sequence number from WebStorage",e)}return t}(t.newValue);e!==vu.ot&&this.sequenceNumberHandler(e)}else if(t.key===this.dr){const e=this.Cr(t.newValue);await Promise.all(e.map((e=>this.syncEngine.Nr(e))))}}else this.ir.push(t)}))}}get Ir(){return this.sr.get(this.tr)}_r(){this.setItem(this.rr,this.Ir.Yi())}yr(e,t,n){const r=new Ip(this.currentUser,e,t,n),s=wp(this.persistenceKey,this.currentUser,e);this.setItem(s,r.Yi())}pr(e){const t=wp(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Er(e){const t={clientId:this.tr,onlineState:e};this.storage.setItem(this.lr,JSON.stringify(t))}Tr(e,t,n){const r=bp(this.persistenceKey,e),s=new _p(e,t,n);this.setItem(r,s.Yi())}Ar(e){const t=JSON.stringify(Array.from(e));this.setItem(this.dr,t)}Rr(e){const t=this.cr.exec(e);return t?t[1]:null}Pr(e,t){const n=this.Rr(e);return Ep.Ji(n,t)}vr(e,t){const n=this.ar.exec(e),r=Number(n[1]),s=void 0!==n[2]?n[2]:null;return Ip.Ji(new dc(s),r,t)}Sr(e,t){const n=this.hr.exec(e),r=Number(n[1]);return _p.Ji(r,t)}wr(e){return Tp.Ji(e)}Cr(e){return JSON.parse(e)}async Vr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.kr(e.batchId,e.state,e.error);yc("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Dr(e){return this.syncEngine.Mr(e.targetId,e.state,e.error)}br(e,t){const n=t?this.sr.insert(e,t):this.sr.remove(e),r=this.gr(this.sr),s=this.gr(n),i=[],o=[];return s.forEach((e=>{r.has(e)||i.push(e)})),r.forEach((e=>{s.has(e)||o.push(e)})),this.syncEngine.Or(i,o).then((()=>{this.sr=n}))}mr(e){this.sr.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}gr(e){let t=Yh();return e.forEach(((e,n)=>{t=t.unionWith(n.activeTargetIds)})),t}}class Dp{constructor(){this.Fr=new Sp,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Fr.Xi(e),this.$r[e]||"not-current"}updateQueryState(e,t,n){this.$r[e]=t}removeLocalQueryTarget(e){this.Fr.Zi(e)}isLocalQueryTarget(e){return this.Fr.activeTargetIds.has(e)}clearQueryState(e){delete this.$r[e]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(e){return this.Fr.activeTargetIds.has(e)}start(){return this.Fr=new Sp,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
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
 */class Cp{Br(e){}shutdown(){}}
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
 */class Ap{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Kr(),this.Gr=[],this.Qr()}Br(e){this.Gr.push(e)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){yc("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Gr)e(0)}Kr(){yc("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Gr)e(1)}static V(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
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
 */const kp={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
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
 */class Np{constructor(e){this.jr=e.jr,this.Wr=e.Wr}zr(e){this.Hr=e}Jr(e){this.Yr=e}onMessage(e){this.Xr=e}close(){this.Wr()}send(e){this.jr(e)}Zr(){this.Hr()}eo(e){this.Yr(e)}no(e){this.Xr(e)}}
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
 */class Lp extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.so=t+"://"+e.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(e,t,n,r,s){const i=this.oo(e,t);yc("RestConnection","Sending: ",i,n);const o={};return this.uo(o,r,s),this.co(e,i,o,n).then((e=>(yc("RestConnection","Received: ",e),e)),(t=>{throw wc("RestConnection",`${e} failed with error: `,t,"url: ",i,"request:",n),t}))}ao(e,t,n,r,s,i){return this.ro(e,t,n,r,s)}uo(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+fc,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}oo(e,t){const n=kp[e];return`${this.so}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}co(e,t,n,r){return new Promise(((s,i)=>{const o=new lc;o.listenOnce(ic.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case sc.NO_ERROR:const t=o.getResponseJson();yc("Connection","XHR received:",JSON.stringify(t)),s(t);break;case sc.TIMEOUT:yc("Connection",'RPC "'+e+'" timed out'),i(new xc(Sc.DEADLINE_EXCEEDED,"Request time out"));break;case sc.HTTP_ERROR:const n=o.getStatus();if(yc("Connection",'RPC "'+e+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const e=o.getResponseJson().error;if(e&&e.status&&e.message){const t=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(Sc).indexOf(t)>=0?t:Sc.UNKNOWN}(e.status);i(new xc(t,e.message))}else i(new xc(Sc.UNKNOWN,"Server responded with status "+o.getStatus()))}else i(new xc(Sc.UNAVAILABLE,"Connection failed."));break;default:Ic()}}finally{yc("Connection",'RPC "'+e+'" completed.')}}));const a=JSON.stringify(r);o.send(t,"POST",a,n,15)}))}ho(e,t,n){const r=[this.so,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=nc(),i=rc(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new cc({})),this.uo(o.initMessageHeaders,t,n),Je()||nt()||rt()||st()||it()||tt()||(o.httpHeadersOverwriteParam="$httpHeaders");const a=r.join("");yc("Connection","Creating WebChannel: "+a,o);const c=s.createWebChannel(a,o);let u=!1,l=!1;const h=new Np({jr:e=>{l?yc("Connection","Not sending because WebChannel is closed:",e):(u||(yc("Connection","Opening WebChannel transport."),c.open(),u=!0),yc("Connection","WebChannel sending:",e),c.send(e))},Wr:()=>c.close()}),d=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return d(c,uc.EventType.OPEN,(()=>{l||yc("Connection","WebChannel transport opened.")})),d(c,uc.EventType.CLOSE,(()=>{l||(l=!0,yc("Connection","WebChannel transport closed"),h.eo())})),d(c,uc.EventType.ERROR,(e=>{l||(l=!0,wc("Connection","WebChannel transport errored:",e),h.eo(new xc(Sc.UNAVAILABLE,"The operation could not be completed")))})),d(c,uc.EventType.MESSAGE,(e=>{var t;if(!l){const n=e.data[0];_c(!!n);const r=n,s=r.error||(null===(t=r[0])||void 0===t?void 0:t.error);if(s){yc("Connection","WebChannel received error:",s);const e=s.status;let t=function(e){const t=Oh[e];if(void 0!==t)return Vh(t)}(e),n=s.message;void 0===t&&(t=Sc.INTERNAL,n="Unknown error status: "+e+" with message "+s.message),l=!0,h.eo(new xc(t,n)),c.close()}else yc("Connection","WebChannel received:",n),h.no(n)}})),d(i,oc.STAT_EVENT,(e=>{e.stat===ac.PROXY?yc("Connection","Detected buffering proxy"):e.stat===ac.NOPROXY&&yc("Connection","Detected no buffering proxy")})),setTimeout((()=>{h.Zr()}),0),h}}
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
 */function Op(){return"undefined"!=typeof window?window:null}function Rp(){return"undefined"!=typeof document?document:null}
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
 */function Mp(e){return new cd(e,!0)}class Vp{constructor(e,t,n=1e3,r=1.5,s=6e4){this.js=e,this.timerId=t,this.lo=n,this.fo=r,this._o=s,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(e){this.cancel();const t=Math.floor(this.wo+this.To()),n=Math.max(0,Date.now()-this.yo),r=Math.max(0,t-n);r>0&&yc("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.wo} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,r,(()=>(this.yo=Date.now(),e()))),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){null!==this.mo&&(this.mo.skipDelay(),this.mo=null)}cancel(){null!==this.mo&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}
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
 */class Fp{constructor(e,t,n,r,s,i,o,a){this.js=e,this.Ao=n,this.Ro=r,this.bo=s,this.authCredentialsProvider=i,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Po=0,this.vo=null,this.Vo=null,this.stream=null,this.So=new Vp(e,t)}Do(){return 1===this.state||5===this.state||this.Co()}Co(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&null===this.vo&&(this.vo=this.js.enqueueAfterDelay(this.Ao,6e4,(()=>this.Mo())))}Oo(e){this.Fo(),this.stream.send(e)}async Mo(){if(this.Co())return this.close(0)}Fo(){this.vo&&(this.vo.cancel(),this.vo=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(e,t){this.Fo(),this.$o(),this.So.cancel(),this.Po++,4!==e?this.So.reset():t&&t.code===Sc.RESOURCE_EXHAUSTED?(vc(t.toString()),vc("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):t&&t.code===Sc.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Bo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Jr(t)}Bo(){}auth(){this.state=1;const e=this.Lo(this.Po),t=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.Po===t&&this.Uo(e,n)}),(t=>{e((()=>{const e=new xc(Sc.UNKNOWN,"Fetching auth token failed: "+t.message);return this.qo(e)}))}))}Uo(e,t){const n=this.Lo(this.Po);this.stream=this.Ko(e,t),this.stream.zr((()=>{n((()=>(this.state=2,this.Vo=this.js.enqueueAfterDelay(this.Ro,1e4,(()=>(this.Co()&&(this.state=3),Promise.resolve()))),this.listener.zr())))})),this.stream.Jr((e=>{n((()=>this.qo(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}xo(){this.state=5,this.So.Io((async()=>{this.state=0,this.start()}))}qo(e){return yc("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Lo(e){return t=>{this.js.enqueueAndForget((()=>this.Po===e?t():(yc("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Pp extends Fp{constructor(e,t,n,r,s,i){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,i),this.wt=s}Ko(e,t){return this.bo.ho("Listen",e,t)}onMessage(e){this.So.reset();const t=Td(this.wt,e),n=function(e){if(!("targetChange"in e))return qc.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?qc.min():t.readTime?dd(t.readTime):qc.min()}(e);return this.listener.Go(t,n)}Qo(e){const t={};t.database=wd(this.wt),t.addTarget=function(e,t){let n;const r=t.target;return n=vl(r)?{documents:Cd(e,r)}:{query:Ad(e,r)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0?n.resumeToken=ld(e,t.resumeToken):t.snapshotVersion.compareTo(qc.min())>0&&(n.readTime=ud(e,t.snapshotVersion.toTimestamp())),n}(this.wt,e);const n=Nd(this.wt,e);n&&(t.labels=n),this.Oo(t)}jo(e){const t={};t.database=wd(this.wt),t.removeTarget=e,this.Oo(t)}}class Bp extends Fp{constructor(e,t,n,r,s,i){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,i),this.wt=s,this.Wo=!1}get zo(){return this.Wo}start(){this.Wo=!1,this.lastStreamToken=void 0,super.start()}Bo(){this.Wo&&this.Ho([])}Ko(e,t){return this.bo.ho("Write",e,t)}onMessage(e){if(_c(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Wo){this.So.reset();const t=Dd(e.writeResults,e.commitTime),n=dd(e.commitTime);return this.listener.Jo(n,t)}return _c(!e.writeResults||0===e.writeResults.length),this.Wo=!0,this.listener.Yo()}Xo(){const e={};e.database=wd(this.wt),this.Oo(e)}Ho(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>Sd(this.wt,e)))};this.Oo(t)}}
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
 */class Up extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.bo=n,this.wt=r,this.Zo=!1}tu(){if(this.Zo)throw new xc(Sc.FAILED_PRECONDITION,"The client has already been terminated.")}ro(e,t,n){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,s])=>this.bo.ro(e,t,n,r,s))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Sc.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new xc(Sc.UNKNOWN,e.toString())}))}ao(e,t,n,r){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,i])=>this.bo.ao(e,t,n,s,i,r))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Sc.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new xc(Sc.UNKNOWN,e.toString())}))}terminate(){this.Zo=!0}}class jp{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){0===this.eu&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve()))))}uu(e){"Online"===this.state?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.cu(),this.ou(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ru("Offline")))}set(e){this.cu(),this.eu=0,"Online"===e&&(this.su=!1),this.ru(e)}ru(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ou(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(vc(t),this.su=!1):yc("OnlineStateTracker",t)}cu(){null!==this.nu&&(this.nu.cancel(),this.nu=null)}}
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
 */class qp{constructor(e,t,n,r,s){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.au=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=s,this.du.Br((e=>{n.enqueueAndForget((async()=>{Xp(this)&&(yc("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=Tc(e);t.lu.add(4),await Kp(t),t._u.set("Unknown"),t.lu.delete(4),await $p(t)}(this))}))})),this._u=new jp(n,r)}}async function $p(e){if(Xp(e))for(const t of e.fu)await t(!0)}async function Kp(e){for(const t of e.fu)await t(!1)}function Gp(e,t){const n=Tc(e);n.hu.has(t.targetId)||(n.hu.set(t.targetId,t),Yp(n)?Qp(n):pg(n).Co()&&Wp(n,t))}function zp(e,t){const n=Tc(e),r=pg(n);n.hu.delete(t),r.Co()&&Hp(n,t),0===n.hu.size&&(r.Co()?r.ko():Xp(n)&&n._u.set("Unknown"))}function Wp(e,t){e.wu.Nt(t.targetId),pg(e).Qo(t)}function Hp(e,t){e.wu.Nt(t),pg(e).jo(t)}function Qp(e){e.wu=new rd({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),te:t=>e.hu.get(t)||null}),pg(e).start(),e._u.iu()}function Yp(e){return Xp(e)&&!pg(e).Do()&&e.hu.size>0}function Xp(e){return 0===Tc(e).lu.size}function Jp(e){e.wu=void 0}async function Zp(e){e.hu.forEach(((t,n)=>{Wp(e,t)}))}async function eg(e,t){Jp(e),Yp(e)?(e._u.uu(t),Qp(e)):e._u.set("Unknown")}async function tg(e,t,n){if(e._u.set("Online"),t instanceof td&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.hu.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.hu.delete(r),e.wu.removeTarget(r))}(e,t)}catch(n){yc("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await ng(e,n)}else if(t instanceof Zh?e.wu.Ut(t):t instanceof ed?e.wu.zt(t):e.wu.Gt(t),!n.isEqual(qc.min()))try{const t=await op(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.wu.Yt(t);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const s=e.hu.get(r);s&&e.hu.set(r,s.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach((t=>{const n=e.hu.get(t);if(!n)return;e.hu.set(t,n.withResumeToken(ku.EMPTY_BYTE_STRING,n.snapshotVersion)),Hp(e,t);const r=new bf(n.target,t,1,n.sequenceNumber);Wp(e,r)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){yc("RemoteStore","Failed to raise snapshot:",t),await ng(e,t)}}async function ng(e,t,n){if(!hu(t))throw t;e.lu.add(1),await Kp(e),e._u.set("Offline"),n||(n=()=>op(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{yc("RemoteStore","Retrying IndexedDB access"),await n(),e.lu.delete(1),await $p(e)}))}function rg(e,t){return t().catch((n=>ng(e,n,t)))}async function sg(e){const t=Tc(e),n=gg(t);let r=t.au.length>0?t.au[t.au.length-1].batchId:-1;for(;ig(t);)try{const e=await up(t.localStore,r);if(null===e){0===t.au.length&&n.ko();break}r=e.batchId,og(t,e)}catch(e){await ng(t,e)}ag(t)&&cg(t)}function ig(e){return Xp(e)&&e.au.length<10}function og(e,t){e.au.push(t);const n=gg(e);n.Co()&&n.zo&&n.Ho(t.mutations)}function ag(e){return Xp(e)&&!gg(e).Do()&&e.au.length>0}function cg(e){gg(e).start()}async function ug(e){gg(e).Xo()}async function lg(e){const t=gg(e);for(const n of e.au)t.Ho(n.mutations)}async function hg(e,t,n){const r=e.au.shift(),s=vf.from(r,t,n);await rg(e,(()=>e.remoteSyncer.applySuccessfulWrite(s))),await sg(e)}async function dg(e,t){t&&gg(e).zo&&await async function(e,t){if(n=t.code,Mh(n)&&n!==Sc.ABORTED){const n=e.au.shift();gg(e).No(),await rg(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await sg(e)}var n}(e,t),ag(e)&&cg(e)}async function fg(e,t){const n=Tc(e);n.asyncQueue.verifyOperationInProgress(),yc("RemoteStore","RemoteStore received new credentials");const r=Xp(n);n.lu.add(3),await Kp(n),r&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.lu.delete(3),await $p(n)}async function mg(e,t){const n=Tc(e);t?(n.lu.delete(2),await $p(n)):t||(n.lu.add(2),await Kp(n),n._u.set("Unknown"))}function pg(e){return e.mu||(e.mu=function(e,t,n){const r=Tc(e);return r.tu(),new Pp(t,r.bo,r.authCredentials,r.appCheckCredentials,r.wt,n)
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
 */}(e.datastore,e.asyncQueue,{zr:Zp.bind(null,e),Jr:eg.bind(null,e),Go:tg.bind(null,e)}),e.fu.push((async t=>{t?(e.mu.No(),Yp(e)?Qp(e):e._u.set("Unknown")):(await e.mu.stop(),Jp(e))}))),e.mu}function gg(e){return e.gu||(e.gu=function(e,t,n){const r=Tc(e);return r.tu(),new Bp(t,r.bo,r.authCredentials,r.appCheckCredentials,r.wt,n)}(e.datastore,e.asyncQueue,{zr:ug.bind(null,e),Jr:dg.bind(null,e),Yo:lg.bind(null,e),Jo:hg.bind(null,e)}),e.fu.push((async t=>{t?(e.gu.No(),await sg(e)):(await e.gu.stop(),e.au.length>0&&(yc("RemoteStore",`Stopping write stream with ${e.au.length} pending writes`),e.au=[]))}))),e.gu
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
 */}class yg{constructor(e,t,n,r,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=s,this.deferred=new Dc,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}static createAndSchedule(e,t,n,r,s){const i=Date.now()+n,o=new yg(e,t,i,r,s);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new xc(Sc.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function vg(e,t){if(vc("AsyncQueue",`${t}: ${e}`),hu(e))return new xc(Sc.UNAVAILABLE,`${t}: ${e}`);throw e}
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
 */class wg{constructor(e){this.comparator=e?(t,n)=>e(t,n)||Wc.comparator(t.key,n.key):(e,t)=>Wc.comparator(e.key,t.key),this.keyedMap=jh(),this.sortedSet=new _u(this.comparator)}static emptySet(e){return new wg(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof wg))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new wg;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
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
 */class bg{constructor(){this.yu=new _u(Wc.comparator)}track(e){const t=e.doc.key,n=this.yu.get(t);n?0!==e.type&&3===n.type?this.yu=this.yu.insert(t,e):3===e.type&&1!==n.type?this.yu=this.yu.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.yu=this.yu.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.yu=this.yu.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.yu=this.yu.remove(t):1===e.type&&2===n.type?this.yu=this.yu.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.yu=this.yu.insert(t,{type:2,doc:e.doc}):Ic():this.yu=this.yu.insert(t,e)}pu(){const e=[];return this.yu.inorderTraversal(((t,n)=>{e.push(n)})),e}}class Ig{constructor(e,t,n,r,s,i,o,a){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=s,this.fromCache=i,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(e,t,n,r){const s=[];return t.forEach((e=>{s.push({type:0,doc:e})})),new Ig(e,t,wg.emptySet(t),s,n,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&zl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}
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
 */class _g{constructor(){this.Iu=void 0,this.listeners=[]}}class Eg{constructor(){this.queries=new Fh((e=>Wl(e)),zl),this.onlineState="Unknown",this.Tu=new Set}}async function Tg(e,t){const n=Tc(e),r=t.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new _g),s)try{i.Iu=await n.onListen(r)}catch(e){const n=vg(e,`Initialization of query '${Hl(t.query)}' failed`);return void t.onError(n)}n.queries.set(r,i),i.listeners.push(t),t.Eu(n.onlineState),i.Iu&&t.Au(i.Iu)&&Cg(n)}async function Sg(e,t){const n=Tc(e),r=t.query;let s=!1;const i=n.queries.get(r);if(i){const e=i.listeners.indexOf(t);e>=0&&(i.listeners.splice(e,1),s=0===i.listeners.length)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function xg(e,t){const n=Tc(e);let r=!1;for(const s of t){const e=s.query,t=n.queries.get(e);if(t){for(const e of t.listeners)e.Au(s)&&(r=!0);t.Iu=s}}r&&Cg(n)}function Dg(e,t,n){const r=Tc(e),s=r.queries.get(t);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(t)}function Cg(e){e.Tu.forEach((e=>{e.next()}))}class Ag{constructor(e,t,n){this.query=e,this.Ru=t,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=n||{}}Au(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new Ig(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let t=!1;return this.bu?this.vu(e)&&(this.Ru.next(e),t=!0):this.Vu(e,this.onlineState)&&(this.Su(e),t=!0),this.Pu=e,t}onError(e){this.Ru.error(e)}Eu(e){this.onlineState=e;let t=!1;return this.Pu&&!this.bu&&this.Vu(this.Pu,e)&&(this.Su(this.Pu),t=!0),t}Vu(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return(!this.options.Du||!n)&&(!e.docs.isEmpty()||"Offline"===t)}vu(e){if(e.docChanges.length>0)return!0;const t=this.Pu&&this.Pu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}Su(e){e=Ig.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.bu=!0,this.Ru.next(e)}}
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
 */class kg{constructor(e,t){this.payload=e,this.byteLength=t}Cu(){return"metadata"in this.payload}}
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
 */class Ng{constructor(e){this.wt=e}Wi(e){return gd(this.wt,e)}zi(e){return e.metadata.exists?_d(this.wt,e.document,!1):dl.newNoDocument(this.Wi(e.metadata.name),this.Hi(e.metadata.readTime))}Hi(e){return dd(e)}}class Lg{constructor(e,t,n){this.xu=e,this.localStore=t,this.wt=n,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=Og(e)}Nu(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.payload.namedQuery)this.queries.push(e.payload.namedQuery);else if(e.payload.documentMetadata){this.documents.push({metadata:e.payload.documentMetadata}),e.payload.documentMetadata.exists||++t;const n=Kc.fromString(e.payload.documentMetadata.name);this.collectionGroups.add(n.get(n.length-2))}else e.payload.document&&(this.documents[this.documents.length-1].document=e.payload.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}ku(e){const t=new Map,n=new Ng(this.wt);for(const r of e)if(r.metadata.queries){const e=n.Wi(r.metadata.name);for(const n of r.metadata.queries){const r=(t.get(n)||Hh()).add(e);t.set(n,r)}}return t}async complete(){const e=await gp(this.localStore,new Ng(this.wt),this.documents,this.xu.id),t=this.ku(this.documents);for(const n of this.queries)await yp(this.localStore,n,t.get(n.name));return this.progress.taskState="Success",{progress:this.progress,Mu:this.collectionGroups,Ou:e}}}function Og(e){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}
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
 */class Rg{constructor(e){this.key=e}}class Mg{constructor(e){this.key=e}}class Vg{constructor(e,t){this.query=e,this.Fu=t,this.$u=null,this.current=!1,this.Bu=Hh(),this.mutatedKeys=Hh(),this.Lu=Xl(e),this.Uu=new wg(this.Lu)}get qu(){return this.Fu}Ku(e,t){const n=t?t.Gu:new bg,r=t?t.Uu:this.Uu;let s=t?t.mutatedKeys:this.mutatedKeys,i=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((e,t)=>{const u=r.get(e),l=Ql(this.query,t)?t:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.Qu(u,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.Lu(l,a)>0||c&&this.Lu(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(l?(i=i.add(l),s=d?s.add(e):s.delete(e)):(i=i.delete(e),s=s.delete(e)))})),null!==this.query.limit)for(;i.size>this.query.limit;){const e="F"===this.query.limitType?i.last():i.first();i=i.delete(e.key),s=s.delete(e.key),n.track({type:1,doc:e})}return{Uu:i,Gu:n,Mi:o,mutatedKeys:s}}Qu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const r=this.Uu;this.Uu=e.Uu,this.mutatedKeys=e.mutatedKeys;const s=e.Gu.pu();s.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ic()}};return n(e)-n(t)}
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
 */(e.type,t.type)||this.Lu(e.doc,t.doc))),this.ju(n);const i=t?this.Wu():[],o=0===this.Bu.size&&this.current?1:0,a=o!==this.$u;return this.$u=o,0!==s.length||a?{snapshot:new Ig(this.query,e.Uu,r,s,e.mutatedKeys,0===o,a,!1),zu:i}:{zu:i}}Eu(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Uu:this.Uu,Gu:new bg,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{zu:[]}}Hu(e){return!this.Fu.has(e)&&!!this.Uu.has(e)&&!this.Uu.get(e).hasLocalMutations}ju(e){e&&(e.addedDocuments.forEach((e=>this.Fu=this.Fu.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.Fu=this.Fu.delete(e))),this.current=e.current)}Wu(){if(!this.current)return[];const e=this.Bu;this.Bu=Hh(),this.Uu.forEach((e=>{this.Hu(e.key)&&(this.Bu=this.Bu.add(e.key))}));const t=[];return e.forEach((e=>{this.Bu.has(e)||t.push(new Mg(e))})),this.Bu.forEach((n=>{e.has(n)||t.push(new Rg(n))})),t}Ju(e){this.Fu=e.ji,this.Bu=Hh();const t=this.Ku(e.documents);return this.applyChanges(t,!0)}Yu(){return Ig.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,0===this.$u)}}class Fg{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class Pg{constructor(e){this.key=e,this.Xu=!1}}class Bg{constructor(e,t,n,r,s,i){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=i,this.Zu={},this.tc=new Fh((e=>Wl(e)),zl),this.ec=new Map,this.nc=new Set,this.sc=new _u(Wc.comparator),this.ic=new Map,this.rc=new Pm,this.oc={},this.uc=new Map,this.cc=mm.Rn(),this.onlineState="Unknown",this.ac=void 0}get isPrimaryClient(){return!0===this.ac}}async function Ug(e,t){const n=py(e);let r,s;const i=n.tc.get(t);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Yu();else{const e=await lp(n.localStore,Kl(t));n.isPrimaryClient&&Gp(n.remoteStore,e);const i=n.sharedClientState.addLocalQueryTarget(e.targetId);r=e.targetId,s=await jg(n,t,r,"current"===i)}return s}async function jg(e,t,n,r){e.hc=(t,n,r)=>async function(e,t,n,r){let s=t.view.Ku(n);s.Mi&&(s=await dp(e.localStore,t.query,!1).then((({documents:e})=>t.view.Ku(e,s))));const i=r&&r.targetChanges.get(t.targetId),o=t.view.applyChanges(s,e.isPrimaryClient,i);return ey(e,t.targetId,o.zu),o.snapshot}(e,t,n,r);const s=await dp(e.localStore,t,!0),i=new Vg(t,s.ji),o=i.Ku(s.documents),a=Jh.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState),c=i.applyChanges(o,e.isPrimaryClient,a);ey(e,n,c.zu);const u=new Fg(t,n,i);return e.tc.set(t,u),e.ec.has(n)?e.ec.get(n).push(t):e.ec.set(n,[t]),c.snapshot}async function qg(e,t){const n=Tc(e),r=n.tc.get(t),s=n.ec.get(r.targetId);if(s.length>1)return n.ec.set(r.targetId,s.filter((e=>!zl(e,t)))),void n.tc.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await hp(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),zp(n.remoteStore,r.targetId),Jg(n,r.targetId)})).catch(iu)):(Jg(n,r.targetId),await hp(n.localStore,r.targetId,!0))}async function $g(e,t,n){const r=gy(e);try{const e=await function(e,t){const n=Tc(e),r=jc.now(),s=t.reduce(((e,t)=>e.add(t.key)),Hh());let i,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>{let a=Bh(),c=Hh();return n.Ui.getEntries(e,s).next((e=>{a=e,a.forEach(((e,t)=>{t.isValidDocument()||(c=c.add(e))}))})).next((()=>n.localDocuments.getOverlayedDocuments(e,a))).next((s=>{i=s;const o=[];for(const e of t){const t=Eh(e,i.get(e.key).overlayedDocument);null!=t&&o.push(new xh(e.key,t,hl(t.value.mapValue),yh.exists(!0)))}return n.mutationQueue.addMutationBatch(e,r,o,t)})).next((t=>{o=t;const r=t.applyToLocalDocumentSet(i,c);return n.documentOverlayCache.saveOverlays(e,t.batchId,r)}))})).then((()=>({batchId:o.batchId,changes:qh(i)})))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.oc[e.currentUser.toKey()];r||(r=new _u(Pc)),r=r.insert(t,n),e.oc[e.currentUser.toKey()]=r}(r,e.batchId,n),await ry(r,e.changes),await sg(r.remoteStore)}catch(e){const t=vg(e,"Failed to persist write");n.reject(t)}}async function Kg(e,t){const n=Tc(e);try{const e=await ap(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const r=n.ic.get(t);r&&(_c(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.Xu=!0:e.modifiedDocuments.size>0?_c(r.Xu):e.removedDocuments.size>0&&(_c(r.Xu),r.Xu=!1))})),await ry(n,e,t)}catch(e){await iu(e)}}function Gg(e,t,n){const r=Tc(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.tc.forEach(((n,r)=>{const s=r.view.Eu(t);s.snapshot&&e.push(s.snapshot)})),function(e,t){const n=Tc(e);n.onlineState=t;let r=!1;n.queries.forEach(((e,n)=>{for(const s of n.listeners)s.Eu(t)&&(r=!0)})),r&&Cg(n)}(r.eventManager,t),e.length&&r.Zu.Go(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function zg(e,t,n){const r=Tc(e);r.sharedClientState.updateQueryState(t,"rejected",n);const s=r.ic.get(t),i=s&&s.key;if(i){let e=new _u(Wc.comparator);e=e.insert(i,dl.newNoDocument(i,qc.min()));const n=Hh().add(i),s=new Xh(qc.min(),new Map,new Su(Pc),e,n);await Kg(r,s),r.sc=r.sc.remove(i),r.ic.delete(t),ny(r)}else await hp(r.localStore,t,!1).then((()=>Jg(r,t,n))).catch(iu)}async function Wg(e,t){const n=Tc(e),r=t.batch.batchId;try{const e=await ip(n.localStore,t);Xg(n,r,null),Yg(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ry(n,e)}catch(e){await iu(e)}}async function Hg(e,t,n){const r=Tc(e);try{const e=await function(e,t){const n=Tc(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next((t=>(_c(null!==t),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t)))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r))).next((()=>n.localDocuments.getDocuments(e,r)))}))}(r.localStore,t);Xg(r,t,n),Yg(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await ry(r,e)}catch(n){await iu(n)}}async function Qg(e,t){const n=Tc(e);Xp(n.remoteStore)||yc("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const e=await function(e){const t=Tc(e);return t.persistence.runTransaction("Get highest unacknowledged batch id","readonly",(e=>t.mutationQueue.getHighestUnacknowledgedBatchId(e)))}(n.localStore);if(-1===e)return void t.resolve();const r=n.uc.get(e)||[];r.push(t),n.uc.set(e,r)}catch(e){const n=vg(e,"Initialization of waitForPendingWrites() operation failed");t.reject(n)}}function Yg(e,t){(e.uc.get(t)||[]).forEach((e=>{e.resolve()})),e.uc.delete(t)}function Xg(e,t,n){const r=Tc(e);let s=r.oc[r.currentUser.toKey()];if(s){const e=s.get(t);e&&(n?e.reject(n):e.resolve(),s=s.remove(t)),r.oc[r.currentUser.toKey()]=s}}function Jg(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.ec.get(t))e.tc.delete(r),n&&e.Zu.lc(r,n);e.ec.delete(t),e.isPrimaryClient&&e.rc.us(t).forEach((t=>{e.rc.containsKey(t)||Zg(e,t)}))}function Zg(e,t){e.nc.delete(t.path.canonicalString());const n=e.sc.get(t);null!==n&&(zp(e.remoteStore,n),e.sc=e.sc.remove(t),e.ic.delete(n),ny(e))}function ey(e,t,n){for(const r of n)r instanceof Rg?(e.rc.addReference(r.key,t),ty(e,r)):r instanceof Mg?(yc("SyncEngine","Document no longer in limbo: "+r.key),e.rc.removeReference(r.key,t),e.rc.containsKey(r.key)||Zg(e,r.key)):Ic()}function ty(e,t){const n=t.key,r=n.path.canonicalString();e.sc.get(n)||e.nc.has(r)||(yc("SyncEngine","New document in limbo: "+n),e.nc.add(r),ny(e))}function ny(e){for(;e.nc.size>0&&e.sc.size<e.maxConcurrentLimboResolutions;){const t=e.nc.values().next().value;e.nc.delete(t);const n=new Wc(Kc.fromString(t)),r=e.cc.next();e.ic.set(r,new Pg(n)),e.sc=e.sc.insert(n,r),Gp(e.remoteStore,new bf(Kl(Pl(n.path)),r,2,vu.ot))}}async function ry(e,t,n){const r=Tc(e),s=[],i=[],o=[];r.tc.isEmpty()||(r.tc.forEach(((e,a)=>{o.push(r.hc(a,t,n).then((e=>{if(e){r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,e.fromCache?"not-current":"current"),s.push(e);const t=ep.Vi(a.targetId,e);i.push(t)}})))})),await Promise.all(o),r.Zu.Go(s),await async function(e,t){const n=Tc(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>ou.forEach(t,(t=>ou.forEach(t.Pi,(r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r))).next((()=>ou.forEach(t.vi,(r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))))))}catch(e){if(!hu(e))throw e;yc("LocalStore","Failed to update sequence numbers: "+e)}for(const r of t){const e=r.targetId;if(!r.fromCache){const t=n.$i.get(e),r=t.snapshotVersion,s=t.withLastLimboFreeSnapshotVersion(r);n.$i=n.$i.insert(e,s)}}}(r.localStore,i))}async function sy(e,t){const n=Tc(e);if(!n.currentUser.isEqual(t)){yc("SyncEngine","User change. New user:",t.toKey());const e=await sp(n.localStore,t);n.currentUser=t,function(e,t){e.uc.forEach((e=>{e.forEach((e=>{e.reject(new xc(Sc.CANCELLED,t))}))})),e.uc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await ry(n,e.Ki)}}function iy(e,t){const n=Tc(e),r=n.ic.get(t);if(r&&r.Xu)return Hh().add(r.key);{let e=Hh();const r=n.ec.get(t);if(!r)return e;for(const t of r){const r=n.tc.get(t);e=e.unionWith(r.view.qu)}return e}}async function oy(e,t){const n=Tc(e),r=await dp(n.localStore,t.query,!0),s=t.view.Ju(r);return n.isPrimaryClient&&ey(n,t.targetId,s.zu),s}async function ay(e,t){const n=Tc(e);return mp(n.localStore,t).then((e=>ry(n,e)))}async function cy(e,t,n,r){const s=Tc(e),i=await function(e,t){const n=Tc(e),r=Tc(n.mutationQueue);return n.persistence.runTransaction("Lookup mutation documents","readonly",(e=>r.yn(e,t).next((t=>t?n.localDocuments.getDocuments(e,t):ou.resolve(null)))))}(s.localStore,t);null!==i?("pending"===n?await sg(s.remoteStore):"acknowledged"===n||"rejected"===n?(Xg(s,t,r||null),Yg(s,t),function(e,t){Tc(Tc(e).mutationQueue).In(t)}(s.localStore,t)):Ic(),await ry(s,i)):yc("SyncEngine","Cannot apply mutation batch with id: "+t)}async function uy(e,t){const n=Tc(e);if(py(n),gy(n),!0===t&&!0!==n.ac){const e=n.sharedClientState.getAllActiveQueryTargets(),t=await ly(n,e.toArray());n.ac=!0,await mg(n.remoteStore,!0);for(const r of t)Gp(n.remoteStore,r)}else if(!1===t&&!1!==n.ac){const e=[];let t=Promise.resolve();n.ec.forEach(((r,s)=>{n.sharedClientState.isLocalQueryTarget(s)?e.push(s):t=t.then((()=>(Jg(n,s),hp(n.localStore,s,!0)))),zp(n.remoteStore,s)})),await t,await ly(n,e),function(e){const t=Tc(e);t.ic.forEach(((e,n)=>{zp(t.remoteStore,n)})),t.rc.cs(),t.ic=new Map,t.sc=new _u(Wc.comparator)}(n),n.ac=!1,await mg(n.remoteStore,!1)}}async function ly(e,t,n){const r=Tc(e),s=[],i=[];for(const o of t){let e;const t=r.ec.get(o);if(t&&0!==t.length){e=await lp(r.localStore,Kl(t[0]));for(const e of t){const t=r.tc.get(e),n=await oy(r,t);n.snapshot&&i.push(n.snapshot)}}else{const t=await fp(r.localStore,o);e=await lp(r.localStore,t),await jg(r,hy(t),o,!1)}s.push(e)}return r.Zu.Go(i),s}function hy(e){return Fl(e.path,e.collectionGroup,e.orderBy,e.filters,e.limit,"F",e.startAt,e.endAt)}function dy(e){const t=Tc(e);return Tc(Tc(t.localStore).persistence).Ri()}async function fy(e,t,n,r){const s=Tc(e);if(s.ac)return void yc("SyncEngine","Ignoring unexpected query state notification.");const i=s.ec.get(t);if(i&&i.length>0)switch(n){case"current":case"not-current":{const e=await mp(s.localStore,Yl(i[0])),r=Xh.createSynthesizedRemoteEventForCurrentChange(t,"current"===n);await ry(s,e,r);break}case"rejected":await hp(s.localStore,t,!0),Jg(s,t,r);break;default:Ic()}}async function my(e,t,n){const r=py(e);if(r.ac){for(const e of t){if(r.ec.has(e)){yc("SyncEngine","Adding an already active target "+e);continue}const t=await fp(r.localStore,e),n=await lp(r.localStore,t);await jg(r,hy(t),n.targetId,!1),Gp(r.remoteStore,n)}for(const e of n)r.ec.has(e)&&await hp(r.localStore,e,!1).then((()=>{zp(r.remoteStore,e),Jg(r,e)})).catch(iu)}}function py(e){const t=Tc(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Kg.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=iy.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=zg.bind(null,t),t.Zu.Go=xg.bind(null,t.eventManager),t.Zu.lc=Dg.bind(null,t.eventManager),t}function gy(e){const t=Tc(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Wg.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Hg.bind(null,t),t}function yy(e,t,n){const r=Tc(e);(async function(e,t,n){try{const r=await t.getMetadata();if(await function(e,t){const n=Tc(e),r=dd(t.createTime);return n.persistence.runTransaction("hasNewerBundle","readonly",(e=>n.Ds.getBundleMetadata(e,t.id))).then((e=>!!e&&e.createTime.compareTo(r)>=0))}(e.localStore,r))return await t.close(),n._completeWith(function(e){return{taskState:"Success",documentsLoaded:e.totalDocuments,bytesLoaded:e.totalBytes,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}(r)),Promise.resolve(new Set);n._updateProgress(Og(r));const s=new Lg(r,e.localStore,t.wt);let i=await t.fc();for(;i;){const e=await s.Nu(i);e&&n._updateProgress(e),i=await t.fc()}const o=await s.complete();return await ry(e,o.Ou,void 0),await function(e,t){const n=Tc(e);return n.persistence.runTransaction("Save bundle","readwrite",(e=>n.Ds.saveBundleMetadata(e,t)))}(e.localStore,r),n._completeWith(o.progress),Promise.resolve(o.Mu)}catch(e){return wc("SyncEngine",`Loading bundle failed with ${e}`),n._failWith(e),Promise.resolve(new Set)}}
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
 */)(r,t,n).then((e=>{r.sharedClientState.notifyBundleLoaded(e)}))}class vy{constructor(){this.synchronizeTabs=!1}async initialize(e){this.wt=Mp(e.databaseInfo.databaseId),this.sharedClientState=this.dc(e),this.persistence=this._c(e),await this.persistence.start(),this.localStore=this.wc(e),this.gcScheduler=this.mc(e,this.localStore),this.indexBackfillerScheduler=this.gc(e,this.localStore)}mc(e,t){return null}gc(e,t){return null}wc(e){return rp(this.persistence,new tp,e.initialUser,this.wt)}_c(e){return new Km(zm.Os,this.wt)}dc(e){return new Dp}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class wy extends vy{constructor(e,t,n){super(),this.yc=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.yc.initialize(this,e),await gy(this.yc.syncEngine),await sg(this.yc.remoteStore),await this.persistence.ci((()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve())))}wc(e){return rp(this.persistence,new tp,e.initialUser,this.wt)}mc(e,t){const n=this.persistence.referenceDelegate.garbageCollector;return new Im(n,e.asyncQueue,t)}gc(e,t){const n=new yu(t,this.persistence);return new gu(e.asyncQueue,n)}_c(e){const t=Zm(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=void 0!==this.cacheSizeBytes?om.withCacheSize(this.cacheSizeBytes):om.DEFAULT;return new Ym(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,Op(),Rp(),this.wt,this.sharedClientState,!!this.forceOwnership)}dc(e){return new Dp}}class by extends wy{constructor(e,t){super(e,t,!1),this.yc=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.yc.syncEngine;this.sharedClientState instanceof xp&&(this.sharedClientState.syncEngine={kr:cy.bind(null,t),Mr:fy.bind(null,t),Or:my.bind(null,t),Ri:dy.bind(null,t),Nr:ay.bind(null,t)},await this.sharedClientState.start()),await this.persistence.ci((async e=>{await uy(this.yc.syncEngine,e),this.gcScheduler&&(e&&!this.gcScheduler.started?this.gcScheduler.start():e||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(e&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():e||this.indexBackfillerScheduler.stop())}))}dc(e){const t=Op();if(!xp.V(t))throw new xc(Sc.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=Zm(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new xp(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class Iy{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>Gg(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=sy.bind(null,this.syncEngine),await mg(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Eg}createDatastore(e){const t=Mp(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new Lp(r));var r;return function(e,t,n,r){return new Up(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,r=e.asyncQueue,s=e=>Gg(this.syncEngine,e,0),i=Ap.V()?new Ap:new Cp,new qp(t,n,r,s,i);var t,n,r,s,i}createSyncEngine(e,t){return function(e,t,n,r,s,i,o){const a=new Bg(e,t,n,r,s,i);return o&&(a.ac=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=Tc(e);yc("RemoteStore","RemoteStore shutting down."),t.lu.add(5),await Kp(t),t.du.shutdown(),t._u.set("Unknown")}(this.remoteStore)}}
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
 */function _y(e,t=10240){let n=0;return{async read(){if(n<e.byteLength){const r={value:e.slice(n,n+t),done:!1};return n+=t,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.reject("unimplemented")}}
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
 */class Ey{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ic(this.observer.next,e)}error(e){this.observer.error?this.Ic(this.observer.error,e):vc("Uncaught Error in snapshot listener:",e)}Tc(){this.muted=!0}Ic(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}}
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
 */class Ty{constructor(e,t){this.Ec=e,this.wt=t,this.metadata=new Dc,this.buffer=new Uint8Array,this.Ac=new TextDecoder("utf-8"),this.Rc().then((e=>{e&&e.Cu()?this.metadata.resolve(e.payload.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is\n             ${JSON.stringify(null==e?void 0:e.payload)}`))}),(e=>this.metadata.reject(e)))}close(){return this.Ec.cancel()}async getMetadata(){return this.metadata.promise}async fc(){return await this.getMetadata(),this.Rc()}async Rc(){const e=await this.bc();if(null===e)return null;const t=this.Ac.decode(e),n=Number(t);isNaN(n)&&this.Pc(`length string (${t}) is not valid number`);const r=await this.vc(n);return new kg(JSON.parse(r),e.length+n)}Vc(){return this.buffer.findIndex((e=>e==="{".charCodeAt(0)))}async bc(){for(;this.Vc()<0;)if(await this.Sc())break;if(0===this.buffer.length)return null;const e=this.Vc();e<0&&this.Pc("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async vc(e){for(;this.buffer.length<e;)await this.Sc()&&this.Pc("Reached the end of bundle when more is expected.");const t=this.Ac.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}Pc(e){throw this.Ec.cancel(),new Error(`Invalid bundle format: ${e}`)}async Sc(){const e=await this.Ec.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}
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
 */class Sy{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new xc(Sc.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const t=await async function(e,t){const n=Tc(e),r=wd(n.wt)+"/documents",s={documents:t.map((e=>pd(n.wt,e)))},i=await n.ao("BatchGetDocuments",r,s,t.length),o=new Map;i.forEach((e=>{const t=Ed(n.wt,e);o.set(t.key.toString(),t)}));const a=[];return t.forEach((e=>{const t=o.get(e.toString());_c(!!t),a.push(t)})),a}(this.datastore,e);return t.forEach((e=>this.recordVersion(e))),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(e){this.lastWriteError=e}this.writtenDocs.add(e.toString())}delete(e){this.write(new kh(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach((t=>{e.delete(t.key.toString())})),e.forEach(((e,t)=>{const n=Wc.fromPath(t);this.mutations.push(new Nh(n,this.precondition(n)))})),await async function(e,t){const n=Tc(e),r=wd(n.wt)+"/documents",s={writes:t.map((e=>Sd(n.wt,e)))};await n.ro("Commit",r,s)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw Ic();t=qc.min()}const n=this.readVersions.get(e.key.toString());if(n){if(!t.isEqual(n))throw new xc(Sc.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?yh.updateTime(t):yh.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(qc.min()))throw new xc(Sc.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return yh.updateTime(t)}return yh.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}
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
 */class xy{constructor(e,t,n,r,s){this.asyncQueue=e,this.datastore=t,this.options=n,this.updateFunction=r,this.deferred=s,this.Dc=n.maxAttempts,this.So=new Vp(this.asyncQueue,"transaction_retry")}run(){this.Dc-=1,this.Cc()}Cc(){this.So.Io((async()=>{const e=new Sy(this.datastore),t=this.xc(e);t&&t.then((t=>{this.asyncQueue.enqueueAndForget((()=>e.commit().then((()=>{this.deferred.resolve(t)})).catch((e=>{this.Nc(e)}))))})).catch((e=>{this.Nc(e)}))}))}xc(e){try{const t=this.updateFunction(e);return!Uu(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}Nc(e){this.Dc>0&&this.kc(e)?(this.Dc-=1,this.asyncQueue.enqueueAndForget((()=>(this.Cc(),Promise.resolve())))):this.deferred.reject(e)}kc(e){if("FirebaseError"===e.name){const t=e.code;return"aborted"===t||"failed-precondition"===t||!Mh(t)}return!1}}
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
 */class Dy{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=dc.UNAUTHENTICATED,this.clientId=Fc.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{yc("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(yc("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new xc(Sc.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Dc;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=vg(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function Cy(e,t){e.asyncQueue.verifyOperationInProgress(),yc("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((async e=>{r.isEqual(e)||(await sp(t.localStore,e),r=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e.offlineComponents=t}async function Ay(e,t){e.asyncQueue.verifyOperationInProgress();const n=await ky(e);yc("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener((e=>fg(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>fg(t.remoteStore,n))),e.onlineComponents=t}async function ky(e){return e.offlineComponents||(yc("FirestoreClient","Using default OfflineComponentProvider"),await Cy(e,new vy)),e.offlineComponents}async function Ny(e){return e.onlineComponents||(yc("FirestoreClient","Using default OnlineComponentProvider"),await Ay(e,new Iy)),e.onlineComponents}function Ly(e){return ky(e).then((e=>e.persistence))}function Oy(e){return ky(e).then((e=>e.localStore))}function Ry(e){return Ny(e).then((e=>e.remoteStore))}function My(e){return Ny(e).then((e=>e.syncEngine))}async function Vy(e){const t=await Ny(e),n=t.eventManager;return n.onListen=Ug.bind(null,t.syncEngine),n.onUnlisten=qg.bind(null,t.syncEngine),n}function Fy(e){return e.asyncQueue.enqueue((async()=>{const t=await Ly(e),n=await Ry(e);return t.setNetworkEnabled(!0),function(e){const t=Tc(e);return t.lu.delete(0),$p(t)}(n)}))}function Py(e){return e.asyncQueue.enqueue((async()=>{const t=await Ly(e),n=await Ry(e);return t.setNetworkEnabled(!1),async function(e){const t=Tc(e);t.lu.add(0),await Kp(t),t._u.set("Offline")}(n)}))}function By(e,t){const n=new Dc;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){try{const r=await function(e,t){const n=Tc(e);return n.persistence.runTransaction("read document","readonly",(e=>n.localDocuments.getDocument(e,t)))}(e,t);r.isFoundDocument()?n.resolve(r):r.isNoDocument()?n.resolve(null):n.reject(new xc(Sc.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(e){const r=vg(e,`Failed to get document '${t} from cache`);n.reject(r)}}(await Oy(e),t,n))),n.promise}function Uy(e,t,n={}){const r=new Dc;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,s){const i=new Ey({next:i=>{t.enqueueAndForget((()=>Sg(e,o)));const a=i.docs.has(n);!a&&i.fromCache?s.reject(new xc(Sc.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&i.fromCache&&r&&"server"===r.source?s.reject(new xc(Sc.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):s.resolve(i)},error:e=>s.reject(e)}),o=new Ag(Pl(n.path),i,{includeMetadataChanges:!0,Du:!0});return Tg(e,o)}(await Vy(e),e.asyncQueue,t,n,r))),r.promise}function jy(e,t){const n=new Dc;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){try{const r=await dp(e,t,!0),s=new Vg(t,r.ji),i=s.Ku(r.documents),o=s.applyChanges(i,!1);n.resolve(o.snapshot)}catch(e){const r=vg(e,`Failed to execute query '${t} against cache`);n.reject(r)}}(await Oy(e),t,n))),n.promise}function qy(e,t,n={}){const r=new Dc;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,s){const i=new Ey({next:n=>{t.enqueueAndForget((()=>Sg(e,o))),n.fromCache&&"server"===r.source?s.reject(new xc(Sc.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):s.resolve(n)},error:e=>s.reject(e)}),o=new Ag(n,i,{includeMetadataChanges:!0,Du:!0});return Tg(e,o)}(await Vy(e),e.asyncQueue,t,n,r))),r.promise}function $y(e,t){const n=new Ey(t);return e.asyncQueue.enqueueAndForget((async()=>function(e,t){Tc(e).Tu.add(t),t.next()}(await Vy(e),n))),()=>{n.Tc(),e.asyncQueue.enqueueAndForget((async()=>function(e,t){Tc(e).Tu.delete(t)}(await Vy(e),n)))}}function Ky(e,t,n){const r=new Dc;return e.asyncQueue.enqueueAndForget((async()=>{const s=await function(e){return Ny(e).then((e=>e.datastore))}(e);new xy(e.asyncQueue,s,n,t,r).run()})),r.promise}function Gy(e,t,n,r){const s=function(e,t){let n;return n="string"==typeof e?(new TextEncoder).encode(e):e,function(e,t){return new Ty(e,t)}(function(e,t){if(e instanceof Uint8Array)return _y(e,t);if(e instanceof ArrayBuffer)return _y(new Uint8Array(e),t);if(e instanceof ReadableStream)return e.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(n),t)}
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
 */(n,Mp(t));e.asyncQueue.enqueueAndForget((async()=>{yy(await My(e),s,r)}))}function zy(e,t){return e.asyncQueue.enqueue((async()=>function(e,t){const n=Tc(e);return n.persistence.runTransaction("Get named query","readonly",(e=>n.Ds.getNamedQuery(e,t)))}(await Oy(e),t)))}const Wy=new Map;
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
 */function Hy(e,t,n){if(!n)throw new xc(Sc.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Qy(e,t,n,r){if(!0===t&&!0===r)throw new xc(Sc.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Yy(e){if(!Wc.isDocumentKey(e))throw new xc(Sc.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Xy(e){if(Wc.isDocumentKey(e))throw new xc(Sc.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Jy(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":Ic()}function Zy(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new xc(Sc.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Jy(e);throw new xc(Sc.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}function ev(e,t){if(t<=0)throw new xc(Sc.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${t}.`)}
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
 */class tv{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new xc(Sc.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new xc(Sc.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Qy("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
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
 */class nv{constructor(e,t,n){this._authCredentials=t,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new tv({}),this._settingsFrozen=!1,e instanceof Bu?this._databaseId=e:(this._app=e,this._databaseId=function(e){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new xc(Sc.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Bu(e.options.projectId)}(e))}get app(){if(!this._app)throw new xc(Sc.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new xc(Sc.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new tv(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new Ac;switch(e.type){case"gapi":const t=e.client;return _c(!("object"!=typeof t||null===t||!t.auth||!t.auth.getAuthHeaderValueForFirstParty)),new Oc(t,e.sessionIndex||"0",e.iamToken||null);case"provider":return e.client;default:throw new xc(Sc.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Wy.get(e);t&&(yc("ComponentProvider","Removing Datastore"),Wy.delete(e),t.terminate())}(this),Promise.resolve()}}function rv(e,t,n,r={}){var s;const i=(e=Zy(e,nv))._getSettings();if("firestore.googleapis.com"!==i.host&&i.host!==t&&wc("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},i),{host:`${t}:${n}`,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=dc.MOCK_USER;else{t=Ye(r.mockUserToken,null===(s=e._app)||void 0===s?void 0:s.options.projectId);const i=r.mockUserToken.sub||r.mockUserToken.user_id;if(!i)throw new xc(Sc.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new dc(i)}e._authCredentials=new kc(new Cc(t,n))}}
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
 */class sv{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ov(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new sv(this.firestore,e,this._key)}}class iv{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new iv(this.firestore,e,this._query)}}class ov extends iv{constructor(e,t,n){super(e,t,Pl(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new sv(this.firestore,null,new Wc(e))}withConverter(e){return new ov(this.firestore,e,this._path)}}function av(e,t,...n){if(e=It(e),Hy("collection","path",t),e instanceof nv){const r=Kc.fromString(t,...n);return Xy(r),new ov(e,null,r)}{if(!(e instanceof sv||e instanceof ov))throw new xc(Sc.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Kc.fromString(t,...n));return Xy(r),new ov(e.firestore,null,r)}}function cv(e,t){if(e=Zy(e,nv),Hy("collectionGroup","collection id",t),t.indexOf("/")>=0)throw new xc(Sc.INVALID_ARGUMENT,`Invalid collection ID '${t}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new iv(e,null,function(e){return new Vl(Kc.emptyPath(),e)}(t))}function uv(e,t,...n){if(e=It(e),1===arguments.length&&(t=Fc.I()),Hy("doc","path",t),e instanceof nv){const r=Kc.fromString(t,...n);return Yy(r),new sv(e,null,new Wc(r))}{if(!(e instanceof sv||e instanceof ov))throw new xc(Sc.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Kc.fromString(t,...n));return Yy(r),new sv(e.firestore,e instanceof ov?e.converter:null,new Wc(r))}}function lv(e,t){return e=It(e),t=It(t),(e instanceof sv||e instanceof ov)&&(t instanceof sv||t instanceof ov)&&e.firestore===t.firestore&&e.path===t.path&&e.converter===t.converter}function hv(e,t){return e=It(e),t=It(t),e instanceof iv&&t instanceof iv&&e.firestore===t.firestore&&zl(e._query,t._query)&&e.converter===t.converter
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
 */}class dv{constructor(){this.Mc=Promise.resolve(),this.Oc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new Vp(this,"async_queue_retry"),this.Kc=()=>{const e=Rp();e&&yc("AsyncQueue","Visibility state changed to "+e.visibilityState),this.So.Eo()};const e=Rp();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Kc)}get isShuttingDown(){return this.Fc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Gc(),this.Qc(e)}enterRestrictedMode(e){if(!this.Fc){this.Fc=!0,this.Uc=e||!1;const t=Rp();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Kc)}}enqueue(e){if(this.Gc(),this.Fc)return new Promise((()=>{}));const t=new Dc;return this.Qc((()=>this.Fc&&this.Uc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Oc.push(e),this.jc())))}async jc(){if(0!==this.Oc.length){try{await this.Oc[0](),this.Oc.shift(),this.So.reset()}catch(Hr){if(!hu(Hr))throw Hr;yc("AsyncQueue","Operation failed with retryable error: "+Hr)}this.Oc.length>0&&this.So.Io((()=>this.jc()))}}Qc(e){const t=this.Mc.then((()=>(this.Lc=!0,e().catch((e=>{this.Bc=e,this.Lc=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
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
 */(e);throw vc("INTERNAL UNHANDLED ERROR: ",t),e})).then((e=>(this.Lc=!1,e))))));return this.Mc=t,t}enqueueAfterDelay(e,t,n){this.Gc(),this.qc.indexOf(e)>-1&&(t=0);const r=yg.createAndSchedule(this,e,t,n,(e=>this.Wc(e)));return this.$c.push(r),r}Gc(){this.Bc&&Ic()}verifyOperationInProgress(){}async zc(){let e;do{e=this.Mc,await e}while(e!==this.Mc)}Hc(e){for(const t of this.$c)if(t.timerId===e)return!0;return!1}Jc(e){return this.zc().then((()=>{this.$c.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.$c)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.zc()}))}Yc(e){this.qc.push(e)}Wc(e){const t=this.$c.indexOf(e);this.$c.splice(t,1)}}function fv(e){return function(e,t){if("object"!=typeof e||null===e)return!1;const n=e;for(const r of t)if(r in n&&"function"==typeof n[r])return!0;return!1}
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
 */(e,["next","error","complete"])}class mv{constructor(){this._progressObserver={},this._taskCompletionResolver=new Dc,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,n){this._progressObserver={next:e,error:t,complete:n}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}
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
 */const pv=-1;class gv extends nv{constructor(e,t,n){super(e,t,n),this.type="firestore",this._queue=new dv,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||vv(this),this._firestoreClient.terminate()}}function yv(e){return e._firestoreClient||vv(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function vv(e){var t;const n=e._freezeSettings(),r=function(e,t,n,r){return new Pu(e,t,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new Dy(e._authCredentials,e._appCheckCredentials,e._queue,r)}function wv(e,t){Cv(e=Zy(e,gv));const n=yv(e),r=e._freezeSettings(),s=new Iy;return Iv(n,s,new wy(s,r.cacheSizeBytes,null==t?void 0:t.forceOwnership))}function bv(e){Cv(e=Zy(e,gv));const t=yv(e),n=e._freezeSettings(),r=new Iy;return Iv(t,r,new by(r,n.cacheSizeBytes))}function Iv(e,t,n){const r=new Dc;return e.asyncQueue.enqueue((async()=>{try{await Cy(e,n),await Ay(e,t),r.resolve()}catch(e){const n=e;if(!function(e){return"FirebaseError"===e.name?e.code===Sc.FAILED_PRECONDITION||e.code===Sc.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||(22===e.code||20===e.code||11===e.code)}(n))throw n;wc("Error enabling offline persistence. Falling back to persistence disabled: "+n),r.reject(n)}})).then((()=>r.promise))}function _v(e){if(e._initialized&&!e._terminated)throw new xc(Sc.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const t=new Dc;return e._queue.enqueueAndForgetEvenWhileRestricted((async()=>{try{await async function(e){if(!cu.V())return Promise.resolve();const t=e+"main";await cu.delete(t)}
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
 */(Zm(e._databaseId,e._persistenceKey)),t.resolve()}catch(e){t.reject(e)}})),t.promise}function Ev(e){return function(e){const t=new Dc;return e.asyncQueue.enqueueAndForget((async()=>Qg(await My(e),t))),t.promise}(yv(e=Zy(e,gv)))}function Tv(e){return Fy(yv(e=Zy(e,gv)))}function Sv(e){return Py(yv(e=Zy(e,gv)))}function xv(e,t){const n=yv(e=Zy(e,gv)),r=new mv;return Gy(n,e._databaseId,t,r),r}function Dv(e,t){return zy(yv(e=Zy(e,gv)),t).then((t=>t?new iv(e,null,t.query):null))}function Cv(e){if(e._initialized||e._terminated)throw new xc(Sc.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}
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
 */class Av{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new xc(Sc.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new zc(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
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
class kv{constructor(e){this._byteString=e}static fromBase64String(e){try{return new kv(ku.fromBase64String(e))}catch(e){throw new xc(Sc.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new kv(ku.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
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
 */class Nv{constructor(e){this._methodName=e}}
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
 */class Lv{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new xc(Sc.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new xc(Sc.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Pc(this._lat,e._lat)||Pc(this._long,e._long)}}
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
 */const Ov=/^__.*__$/;class Rv{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new xh(e,this.data,this.fieldMask,t,this.fieldTransforms):new Sh(e,this.data,t,this.fieldTransforms)}}class Mv{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new xh(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Vv(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ic()}}class Fv{constructor(e,t,n,r,s,i){this.settings=e,this.databaseId=t,this.wt=n,this.ignoreUndefinedProperties=r,void 0===s&&this.Xc(),this.fieldTransforms=s||[],this.fieldMask=i||[]}get path(){return this.settings.path}get Zc(){return this.settings.Zc}ta(e){return new Fv(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.wt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ea(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.ta({path:n,na:!1});return r.sa(e),r}ia(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.ta({path:n,na:!1});return r.Xc(),r}ra(e){return this.ta({path:void 0,na:!0})}oa(e){return rw(e,this.settings.methodName,this.settings.ua||!1,this.path,this.settings.ca)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}Xc(){if(this.path)for(let e=0;e<this.path.length;e++)this.sa(this.path.get(e))}sa(e){if(0===e.length)throw this.oa("Document fields must not be empty");if(Vv(this.Zc)&&Ov.test(e))throw this.oa('Document fields cannot begin and end with "__"')}}class Pv{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.wt=n||Mp(e)}aa(e,t,n,r=!1){return new Fv({Zc:e,methodName:t,ca:n,path:zc.emptyPath(),na:!1,ua:r},this.databaseId,this.wt,this.ignoreUndefinedProperties)}}function Bv(e){const t=e._freezeSettings(),n=Mp(e._databaseId);return new Pv(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Uv(e,t,n,r,s,i={}){const o=e.aa(i.merge||i.mergeFields?2:0,t,n,s);Zv("Data must be an object, but it was:",o,r);const a=Xv(r,o);let c,u;if(i.merge)c=new Cu(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const e=[];for(const r of i.mergeFields){const s=ew(t,r,n);if(!o.contains(s))throw new xc(Sc.INVALID_ARGUMENT,`Field '${s}' is specified in your field mask but missing from your input data.`);sw(e,s)||e.push(s)}c=new Cu(e),u=o.fieldTransforms.filter((e=>c.covers(e.field)))}else c=null,u=o.fieldTransforms;return new Rv(new ll(a),c,u)}class jv extends Nv{_toFieldTransform(e){if(2!==e.Zc)throw 1===e.Zc?e.oa(`${this._methodName}() can only appear at the top level of your update data`):e.oa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof jv}}function qv(e,t,n){return new Fv({Zc:3,ca:t.settings.ca,methodName:e._methodName,na:n},t.databaseId,t.wt,t.ignoreUndefinedProperties)}class $v extends Nv{_toFieldTransform(e){return new mh(e.path,new oh)}isEqual(e){return e instanceof $v}}class Kv extends Nv{constructor(e,t){super(e),this.ha=t}_toFieldTransform(e){const t=qv(this,e,!0),n=this.ha.map((e=>Yv(e,t))),r=new ah(n);return new mh(e.path,r)}isEqual(e){return this===e}}class Gv extends Nv{constructor(e,t){super(e),this.ha=t}_toFieldTransform(e){const t=qv(this,e,!0),n=this.ha.map((e=>Yv(e,t))),r=new uh(n);return new mh(e.path,r)}isEqual(e){return this===e}}class zv extends Nv{constructor(e,t){super(e),this.la=t}_toFieldTransform(e){const t=new hh(e.wt,th(e.wt,this.la));return new mh(e.path,t)}isEqual(e){return this===e}}function Wv(e,t,n,r){const s=e.aa(1,t,n);Zv("Data must be an object, but it was:",s,r);const i=[],o=ll.empty();bu(r,((e,r)=>{const a=nw(t,e,n);r=It(r);const c=s.ia(a);if(r instanceof jv)i.push(a);else{const e=Yv(r,c);null!=e&&(i.push(a),o.set(a,e))}}));const a=new Cu(i);return new Mv(o,a,s.fieldTransforms)}function Hv(e,t,n,r,s,i){const o=e.aa(1,t,n),a=[ew(t,r,n)],c=[s];if(i.length%2!=0)throw new xc(Sc.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(ew(t,i[d])),c.push(i[d+1]);const u=[],l=ll.empty();for(let d=a.length-1;d>=0;--d)if(!sw(u,a[d])){const e=a[d];let t=c[d];t=It(t);const n=o.ia(e);if(t instanceof jv)u.push(e);else{const r=Yv(t,n);null!=r&&(u.push(e),l.set(e,r))}}const h=new Cu(u);return new Mv(l,h,o.fieldTransforms)}function Qv(e,t,n,r=!1){return Yv(n,e.aa(r?4:3,t))}function Yv(e,t){if(Jv(e=It(e)))return Zv("Unsupported field value:",t,e),Xv(e,t);if(e instanceof Nv)return function(e,t){if(!Vv(t.Zc))throw t.oa(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.oa(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.na&&4!==t.Zc)throw t.oa("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const s of e){let e=Yv(s,t.ra(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=It(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return th(t.wt,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=jc.fromDate(e);return{timestampValue:ud(t.wt,n)}}if(e instanceof jc){const n=new jc(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:ud(t.wt,n)}}if(e instanceof Lv)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof kv)return{bytesValue:ld(t.wt,e._byteString)};if(e instanceof sv){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.oa(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:fd(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.oa(`Unsupported field value: ${Jy(e)}`)}(e,t)}function Xv(e,t){const n={};return Iu(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):bu(e,((e,r)=>{const s=Yv(r,t.ea(e));null!=s&&(n[e]=s)})),{mapValue:{fields:n}}}function Jv(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof jc||e instanceof Lv||e instanceof kv||e instanceof sv||e instanceof Nv)}function Zv(e,t,n){if(!Jv(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const r=Jy(n);throw"an object"===r?t.oa(e+" a custom object"):t.oa(e+" "+r)}}function ew(e,t,n){if((t=It(t))instanceof Av)return t._internalPath;if("string"==typeof t)return nw(e,t);throw rw("Field path arguments must be of type string or ",e,!1,void 0,n)}const tw=new RegExp("[~\\*/\\[\\]]");function nw(e,t,n){if(t.search(tw)>=0)throw rw(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Av(...t.split("."))._internalPath}catch(r){throw rw(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function rw(e,t,n,r,s){const i=r&&!r.isEmpty(),o=void 0!==s;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new xc(Sc.INVALID_ARGUMENT,a+e+c)}function sw(e,t){return e.some((e=>e.isEqual(t)))}
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
 */class iw{constructor(e,t,n,r,s){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new sv(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new ow(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(aw("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class ow extends iw{data(){return super.data()}}function aw(e,t){return"string"==typeof t?nw(e,t):t instanceof Av?t._internalPath:t._delegate._internalPath}
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
 */class cw{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class uw extends iw{constructor(e,t,n,r,s,i){super(e,t,n,r,i),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new lw(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(aw("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class lw extends uw{data(e={}){return super.data(e)}}class hw{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new cw(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new lw(this._firestore,this._userDataWriter,n.key,n,new cw(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new xc(Sc.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>({type:"added",doc:new lw(e._firestore,e._userDataWriter,n.doc.key,n.doc,new cw(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter),oldIndex:-1,newIndex:t++})))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const r=new lw(e._firestore,e._userDataWriter,t.doc.key,t.doc,new cw(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let s=-1,i=-1;return 0!==t.type&&(s=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),i=n.indexOf(t.doc.key)),{type:dw(t.type),doc:r,oldIndex:s,newIndex:i}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function dw(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ic()}}function fw(e,t){return e instanceof uw&&t instanceof uw?e._firestore===t._firestore&&e._key.isEqual(t._key)&&(null===e._document?null===t._document:e._document.isEqual(t._document))&&e._converter===t._converter:e instanceof hw&&t instanceof hw&&e._firestore===t._firestore&&hv(e.query,t.query)&&e.metadata.isEqual(t.metadata)&&e._snapshot.isEqual(t._snapshot)}
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
 */function mw(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new xc(Sc.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class pw{}function gw(e,...t){for(const n of t)e=n._apply(e);return e}class yw extends pw{constructor(e,t,n){super(),this.fa=e,this.da=t,this._a=n,this.type="where"}_apply(e){const t=Bv(e.firestore),n=function(e,t,n,r,s,i,o){let a;if(s.isKeyField()){if("array-contains"===i||"array-contains-any"===i)throw new xc(Sc.INVALID_ARGUMENT,`Invalid Query. You can't perform '${i}' queries on documentId().`);if("in"===i||"not-in"===i){Lw(o,i);const t=[];for(const n of o)t.push(Nw(r,e,n));a={arrayValue:{values:t}}}else a=Nw(r,e,o)}else"in"!==i&&"not-in"!==i&&"array-contains-any"!==i||Lw(o,i),a=Qv(n,t,o,"in"===i||"not-in"===i);const c=_l.create(s,i,a);return function(e,t){if(t.ht()){const n=jl(e);if(null!==n&&!n.isEqual(t.field))throw new xc(Sc.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${t.field.toString()}'`);const r=Ul(e);null!==r&&Ow(e,t.field,r)}const n=function(e,t){for(const n of e.filters)if(t.indexOf(n.op)>=0)return n.op;return null}(e,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new xc(Sc.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new xc(Sc.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}(e,c),c}(e._query,"where",t,e.firestore._databaseId,this.fa,this.da,this._a);return new iv(e.firestore,e.converter,function(e,t){const n=e.filters.concat([t]);return new Vl(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}(e._query,n))}}function vw(e,t,n){const r=t,s=aw("where",e);return new yw(s,r,n)}class ww extends pw{constructor(e,t){super(),this.fa=e,this.wa=t,this.type="orderBy"}_apply(e){const t=function(e,t,n){if(null!==e.startAt)throw new xc(Sc.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new xc(Sc.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const r=new Ll(t,n);return function(e,t){if(null===Ul(e)){const n=jl(e);null!==n&&Ow(e,n,t.field)}}(e,r),r}(e._query,this.fa,this.wa);return new iv(e.firestore,e.converter,function(e,t){const n=e.explicitOrderBy.concat([t]);return new Vl(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}function bw(e,t="asc"){const n=t,r=aw("orderBy",e);return new ww(r,n)}class Iw extends pw{constructor(e,t,n){super(),this.type=e,this.ma=t,this.ga=n}_apply(e){return new iv(e.firestore,e.converter,Gl(e._query,this.ma,this.ga))}}function _w(e){return ev("limit",e),new Iw("limit",e,"F")}function Ew(e){return ev("limitToLast",e),new Iw("limitToLast",e,"L")}class Tw extends pw{constructor(e,t,n){super(),this.type=e,this.ya=t,this.pa=n}_apply(e){const t=kw(e,this.type,this.ya,this.pa);return new iv(e.firestore,e.converter,function(e,t){return new Vl(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,t,e.endAt)}(e._query,t))}}function Sw(...e){return new Tw("startAt",e,!0)}function xw(...e){return new Tw("startAfter",e,!1)}class Dw extends pw{constructor(e,t,n){super(),this.type=e,this.ya=t,this.pa=n}_apply(e){const t=kw(e,this.type,this.ya,this.pa);return new iv(e.firestore,e.converter,function(e,t){return new Vl(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,t)}(e._query,t))}}function Cw(...e){return new Dw("endBefore",e,!1)}function Aw(...e){return new Dw("endAt",e,!0)}function kw(e,t,n,r){if(n[0]=It(n[0]),n[0]instanceof iw)return function(e,t,n,r,s){if(!r)throw new xc(Sc.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${n}().`);const i=[];for(const o of $l(e))if(o.field.isKeyField())i.push(Ju(t,r.key));else{const e=r.data.field(o.field);if(Mu(e))throw new xc(Sc.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+o.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===e){const e=o.field.canonicalString();throw new xc(Sc.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${e}' (used as the orderBy) does not exist.`)}i.push(e)}return new Nl(i,s)}(e._query,e.firestore._databaseId,t,n[0]._document,r);{const s=Bv(e.firestore);return function(e,t,n,r,s,i){const o=e.explicitOrderBy;if(s.length>o.length)throw new xc(Sc.INVALID_ARGUMENT,`Too many arguments provided to ${r}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const a=[];for(let c=0;c<s.length;c++){const i=s[c];if(o[c].field.isKeyField()){if("string"!=typeof i)throw new xc(Sc.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${r}(), but got a ${typeof i}`);if(!ql(e)&&-1!==i.indexOf("/"))throw new xc(Sc.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${r}() must be a plain document ID, but '${i}' contains a slash.`);const n=e.path.child(Kc.fromString(i));if(!Wc.isDocumentKey(n))throw new xc(Sc.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${r}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`);const s=new Wc(n);a.push(Ju(t,s))}else{const e=Qv(n,r,i);a.push(e)}}return new Nl(a,i)}(e._query,e.firestore._databaseId,s,t,n,r)}}function Nw(e,t,n){if("string"==typeof(n=It(n))){if(""===n)throw new xc(Sc.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ql(t)&&-1!==n.indexOf("/"))throw new xc(Sc.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(Kc.fromString(n));if(!Wc.isDocumentKey(r))throw new xc(Sc.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ju(e,new Wc(r))}if(n instanceof sv)return Ju(e,n._key);throw new xc(Sc.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Jy(n)}.`)}function Lw(e,t){if(!Array.isArray(e)||0===e.length)throw new xc(Sc.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`);if(e.length>10)throw new xc(Sc.INVALID_ARGUMENT,`Invalid Query. '${t.toString()}' filters support a maximum of 10 elements in the value array.`)}function Ow(e,t,n){if(!n.isEqual(t))throw new xc(Sc.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
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
 */const Rw={maxAttempts:5};
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
 */class Mw{convertValue(e,t="none"){switch(Gu(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ou(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ru(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw Ic()}}convertObject(e,t){const n={};return bu(e.fields,((e,r)=>{n[e]=this.convertValue(r,t)})),n}convertGeoPoint(e){return new Lv(Ou(e.latitude),Ou(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Vu(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Fu(e));default:return null}}convertTimestamp(e){const t=Lu(e);return new jc(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=Kc.fromString(e);_c(Ud(n));const r=new Bu(n.get(1),n.get(3)),s=new Wc(n.popFirst(5));return r.isEqual(t)||vc(`Document ${s} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}
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
 */function Vw(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}class Fw extends Mw{constructor(e){super(),this.firestore=e}convertBytes(e){return new kv(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new sv(this.firestore,null,t)}}
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
 */class Pw{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Bv(e)}set(e,t,n){this._verifyNotCommitted();const r=Bw(e,this._firestore),s=Vw(r.converter,t,n),i=Uv(this._dataReader,"WriteBatch.set",r._key,s,null!==r.converter,n);return this._mutations.push(i.toMutation(r._key,yh.none())),this}update(e,t,n,...r){this._verifyNotCommitted();const s=Bw(e,this._firestore);let i;return i="string"==typeof(t=It(t))||t instanceof Av?Hv(this._dataReader,"WriteBatch.update",s._key,t,n,r):Wv(this._dataReader,"WriteBatch.update",s._key,t),this._mutations.push(i.toMutation(s._key,yh.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Bw(e,this._firestore);return this._mutations=this._mutations.concat(new kh(t._key,yh.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new xc(Sc.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Bw(e,t){if((e=It(e)).firestore!==t)throw new xc(Sc.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return e}
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
 */function Uw(e){e=Zy(e,sv);const t=Zy(e.firestore,gv);return Uy(yv(t),e._key).then((n=>eb(t,e,n)))}class jw extends Mw{constructor(e){super(),this.firestore=e}convertBytes(e){return new kv(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new sv(this.firestore,null,t)}}function qw(e){e=Zy(e,sv);const t=Zy(e.firestore,gv),n=yv(t),r=new jw(t);return By(n,e._key).then((n=>new uw(t,r,e._key,n,new cw(null!==n&&n.hasLocalMutations,!0),e.converter)))}function $w(e){e=Zy(e,sv);const t=Zy(e.firestore,gv);return Uy(yv(t),e._key,{source:"server"}).then((n=>eb(t,e,n)))}function Kw(e){e=Zy(e,iv);const t=Zy(e.firestore,gv),n=yv(t),r=new jw(t);return mw(e._query),qy(n,e._query).then((n=>new hw(t,r,e,n)))}function Gw(e){e=Zy(e,iv);const t=Zy(e.firestore,gv),n=yv(t),r=new jw(t);return jy(n,e._query).then((n=>new hw(t,r,e,n)))}function zw(e){e=Zy(e,iv);const t=Zy(e.firestore,gv),n=yv(t),r=new jw(t);return qy(n,e._query,{source:"server"}).then((n=>new hw(t,r,e,n)))}function Ww(e,t,n){e=Zy(e,sv);const r=Zy(e.firestore,gv),s=Vw(e.converter,t,n);return Zw(r,[Uv(Bv(r),"setDoc",e._key,s,null!==e.converter,n).toMutation(e._key,yh.none())])}function Hw(e,t,n,...r){e=Zy(e,sv);const s=Zy(e.firestore,gv),i=Bv(s);let o;return o="string"==typeof(t=It(t))||t instanceof Av?Hv(i,"updateDoc",e._key,t,n,r):Wv(i,"updateDoc",e._key,t),Zw(s,[o.toMutation(e._key,yh.exists(!0))])}function Qw(e){return Zw(Zy(e.firestore,gv),[new kh(e._key,yh.none())])}function Yw(e,t){const n=Zy(e.firestore,gv),r=uv(e),s=Vw(e.converter,t);return Zw(n,[Uv(Bv(e.firestore),"addDoc",r._key,s,null!==e.converter,{}).toMutation(r._key,yh.exists(!1))]).then((()=>r))}function Xw(e,...t){var n,r,s;e=It(e);let i={includeMetadataChanges:!1},o=0;"object"!=typeof t[o]||fv(t[o])||(i=t[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(fv(t[o])){const e=t[o];t[o]=null===(n=e.next)||void 0===n?void 0:n.bind(e),t[o+1]=null===(r=e.error)||void 0===r?void 0:r.bind(e),t[o+2]=null===(s=e.complete)||void 0===s?void 0:s.bind(e)}let c,u,l;if(e instanceof sv)u=Zy(e.firestore,gv),l=Pl(e._key.path),c={next:n=>{t[o]&&t[o](eb(u,e,n))},error:t[o+1],complete:t[o+2]};else{const n=Zy(e,iv);u=Zy(n.firestore,gv),l=n._query;const r=new jw(u);c={next:e=>{t[o]&&t[o](new hw(u,r,n,e))},error:t[o+1],complete:t[o+2]},mw(e._query)}return function(e,t,n,r){const s=new Ey(r),i=new Ag(t,s,n);return e.asyncQueue.enqueueAndForget((async()=>Tg(await Vy(e),i))),()=>{s.Tc(),e.asyncQueue.enqueueAndForget((async()=>Sg(await Vy(e),i)))}}(yv(u),l,a,c)}function Jw(e,t){return $y(yv(e=Zy(e,gv)),fv(t)?t:{next:t})}function Zw(e,t){return function(e,t){const n=new Dc;return e.asyncQueue.enqueueAndForget((async()=>$g(await My(e),t,n))),n.promise}(yv(e),t)}function eb(e,t,n){const r=n.docs.get(t._key),s=new jw(e);return new uw(e,s,t._key,r,new cw(n.hasPendingWrites,n.fromCache),t.converter)}
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
 */class tb extends class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=Bv(e)}get(e){const t=Bw(e,this._firestore),n=new Fw(this._firestore);return this._transaction.lookup([t._key]).then((e=>{if(!e||1!==e.length)return Ic();const r=e[0];if(r.isFoundDocument())return new iw(this._firestore,n,r.key,r,t.converter);if(r.isNoDocument())return new iw(this._firestore,n,t._key,null,t.converter);throw Ic()}))}set(e,t,n){const r=Bw(e,this._firestore),s=Vw(r.converter,t,n),i=Uv(this._dataReader,"Transaction.set",r._key,s,null!==r.converter,n);return this._transaction.set(r._key,i),this}update(e,t,n,...r){const s=Bw(e,this._firestore);let i;return i="string"==typeof(t=It(t))||t instanceof Av?Hv(this._dataReader,"Transaction.update",s._key,t,n,r):Wv(this._dataReader,"Transaction.update",s._key,t),this._transaction.update(s._key,i),this}delete(e){const t=Bw(e,this._firestore);return this._transaction.delete(t._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=Bw(e,this._firestore),n=new jw(this._firestore);return super.get(e).then((e=>new uw(this._firestore,n,t._key,e._document,new cw(!1,!1),t.converter)))}}function nb(e,t,n){e=Zy(e,gv);const r=Object.assign(Object.assign({},Rw),n);return function(e){if(e.maxAttempts<1)throw new xc(Sc.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),Ky(yv(e),(n=>t(new tb(e,n))),r)}
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
 */function rb(){return new jv("deleteField")}function sb(){return new $v("serverTimestamp")}function ib(...e){return new Kv("arrayUnion",e)}function ob(...e){return new Gv("arrayRemove",e)}function ab(e){return new zv("increment",e)}
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
 */!function(e,t=!0){!function(e){fc=e}(Yn),$n(new _t("firestore",((e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=new gv(r,new Nc(e.getProvider("auth-internal")),new Mc(e.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:t},n),s._setSettings(n),s}),"PUBLIC")),tr(hc,"3.4.14",e),tr(hc,"3.4.14","esm2017")}();const cb="@firebase/firestore-compat",ub="0.1.23";
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
function lb(e,t){if(void 0===t)return{merge:!1};if(void 0!==t.mergeFields&&void 0!==t.merge)throw new xc("invalid-argument",`Invalid options passed to function ${e}(): You cannot specify both "merge" and "mergeFields".`);return t}
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
 */function hb(){if("undefined"===typeof Uint8Array)throw new xc("unimplemented","Uint8Arrays are not available in this environment.")}function db(){if(!Au())throw new xc("unimplemented","Blobs are unavailable in Firestore in this environment.")}class fb{constructor(e){this._delegate=e}static fromBase64String(e){return db(),new fb(kv.fromBase64String(e))}static fromUint8Array(e){return hb(),new fb(kv.fromUint8Array(e))}toBase64(){return db(),this._delegate.toBase64()}toUint8Array(){return hb(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}
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
 */function mb(e){return pb(e,["next","error","complete"])}function pb(e,t){if("object"!==typeof e||null===e)return!1;const n=e;for(const r of t)if(r in n&&"function"===typeof n[r])return!0;return!1}
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
 */class gb{enableIndexedDbPersistence(e,t){return wv(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return bv(e._delegate)}clearIndexedDbPersistence(e){return _v(e._delegate)}}class yb{constructor(e,t,n){this._delegate=t,this._persistenceProvider=n,this.INTERNAL={delete:()=>this.terminate()},e instanceof Bu||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();e.merge||t.host===e.host||wc("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,n={}){rv(this._delegate,e,t,n)}enableNetwork(){return Tv(this._delegate)}disableNetwork(){return Sv(this._delegate)}enablePersistence(e){let t=!1,n=!1;return e&&(t=!!e.synchronizeTabs,n=!!e.experimentalForceOwningTab,Qy("synchronizeTabs",t,"experimentalForceOwningTab",n)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,n)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return Ev(this._delegate)}onSnapshotsInSync(e){return Jw(this._delegate,e)}get app(){if(!this._appCompat)throw new xc("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new Lb(this,av(this._delegate,e))}catch(t){throw Tb(t,"collection()","Firestore.collection()")}}doc(e){try{return new Eb(this,uv(this._delegate,e))}catch(t){throw Tb(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Ab(this,cv(this._delegate,e))}catch(t){throw Tb(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return nb(this._delegate,(t=>e(new bb(this,t))))}batch(){return yv(this._delegate),new Ib(new Pw(this._delegate,(e=>Zw(this._delegate,e))))}loadBundle(e){return xv(this._delegate,e)}namedQuery(e){return Dv(this._delegate,e).then((e=>e?new Ab(this,e):null))}}class vb extends Mw{constructor(e){super(),this.firestore=e}convertBytes(e){return new fb(new kv(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return Eb.forKey(t,this.firestore,null)}}function wb(e){gc(e)}class bb{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new vb(e)}get(e){const t=Ob(e);return this._delegate.get(t).then((e=>new Db(this._firestore,new uw(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,t.converter))))}set(e,t,n){const r=Ob(e);return n?(lb("Transaction.set",n),this._delegate.set(r,t,n)):this._delegate.set(r,t),this}update(e,t,n,...r){const s=Ob(e);return 2===arguments.length?this._delegate.update(s,t):this._delegate.update(s,t,n,...r),this}delete(e){const t=Ob(e);return this._delegate.delete(t),this}}class Ib{constructor(e){this._delegate=e}set(e,t,n){const r=Ob(e);return n?(lb("WriteBatch.set",n),this._delegate.set(r,t,n)):this._delegate.set(r,t),this}update(e,t,n,...r){const s=Ob(e);return 2===arguments.length?this._delegate.update(s,t):this._delegate.update(s,t,n,...r),this}delete(e){const t=Ob(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class _b{constructor(e,t,n){this._firestore=e,this._userDataWriter=t,this._delegate=n}fromFirestore(e,t){const n=new lw(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new Cb(this._firestore,n),null!==t&&void 0!==t?t:{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const n=_b.INSTANCES;let r=n.get(e);r||(r=new WeakMap,n.set(e,r));let s=r.get(t);return s||(s=new _b(e,new vb(e),t),r.set(t,s)),s}}_b.INSTANCES=new WeakMap;class Eb{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new vb(e)}static forPath(e,t,n){if(e.length%2!==0)throw new xc("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new Eb(t,new sv(t._delegate,n,new Wc(e)))}static forKey(e,t,n){return new Eb(t,new sv(t._delegate,n,e))}get id(){return this._delegate.id}get parent(){return new Lb(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new Lb(this.firestore,av(this._delegate,e))}catch(t){throw Tb(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=It(e),e instanceof sv&&lv(this._delegate,e)}set(e,t){t=lb("DocumentReference.set",t);try{return t?Ww(this._delegate,e,t):Ww(this._delegate,e)}catch(n){throw Tb(n,"setDoc()","DocumentReference.set()")}}update(e,t,...n){try{return 1===arguments.length?Hw(this._delegate,e):Hw(this._delegate,e,t,...n)}catch(r){throw Tb(r,"updateDoc()","DocumentReference.update()")}}delete(){return Qw(this._delegate)}onSnapshot(...e){const t=Sb(e),n=xb(e,(e=>new Db(this.firestore,new uw(this.firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,this._delegate.converter))));return Xw(this._delegate,t,n)}get(e){let t;return t="cache"===(null===e||void 0===e?void 0:e.source)?qw(this._delegate):"server"===(null===e||void 0===e?void 0:e.source)?$w(this._delegate):Uw(this._delegate),t.then((e=>new Db(this.firestore,new uw(this.firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,this._delegate.converter))))}withConverter(e){return new Eb(this.firestore,e?this._delegate.withConverter(_b.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Tb(e,t,n){return e.message=e.message.replace(t,n),e}function Sb(e){for(const t of e)if("object"===typeof t&&!mb(t))return t;return{}}function xb(e,t){var n,r;let s;return s=mb(e[0])?e[0]:mb(e[1])?e[1]:"function"===typeof e[0]?{next:e[0],error:e[1],complete:e[2]}:{next:e[1],error:e[2],complete:e[3]},{next:e=>{s.next&&s.next(t(e))},error:null===(n=s.error)||void 0===n?void 0:n.bind(s),complete:null===(r=s.complete)||void 0===r?void 0:r.bind(s)}}class Db{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new Eb(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return fw(this._delegate,e._delegate)}}class Cb extends Db{data(e){const t=this._delegate.data(e);return Ec(void 0!==t,"Document in a QueryDocumentSnapshot should exist"),t}}class Ab{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new vb(e)}where(e,t,n){try{return new Ab(this.firestore,gw(this._delegate,vw(e,t,n)))}catch(r){throw Tb(r,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new Ab(this.firestore,gw(this._delegate,bw(e,t)))}catch(n){throw Tb(n,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Ab(this.firestore,gw(this._delegate,_w(e)))}catch(t){throw Tb(t,"limit()","Query.limit()")}}limitToLast(e){try{return new Ab(this.firestore,gw(this._delegate,Ew(e)))}catch(t){throw Tb(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Ab(this.firestore,gw(this._delegate,Sw(...e)))}catch(t){throw Tb(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Ab(this.firestore,gw(this._delegate,xw(...e)))}catch(t){throw Tb(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Ab(this.firestore,gw(this._delegate,Cw(...e)))}catch(t){throw Tb(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Ab(this.firestore,gw(this._delegate,Aw(...e)))}catch(t){throw Tb(t,"endAt()","Query.endAt()")}}isEqual(e){return hv(this._delegate,e._delegate)}get(e){let t;return t="cache"===(null===e||void 0===e?void 0:e.source)?Gw(this._delegate):"server"===(null===e||void 0===e?void 0:e.source)?zw(this._delegate):Kw(this._delegate),t.then((e=>new Nb(this.firestore,new hw(this.firestore._delegate,this._userDataWriter,this._delegate,e._snapshot))))}onSnapshot(...e){const t=Sb(e),n=xb(e,(e=>new Nb(this.firestore,new hw(this.firestore._delegate,this._userDataWriter,this._delegate,e._snapshot))));return Xw(this._delegate,t,n)}withConverter(e){return new Ab(this.firestore,e?this._delegate.withConverter(_b.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class kb{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new Cb(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class Nb{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new Ab(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map((e=>new Cb(this._firestore,e)))}docChanges(e){return this._delegate.docChanges(e).map((e=>new kb(this._firestore,e)))}forEach(e,t){this._delegate.forEach((n=>{e.call(t,new Cb(this._firestore,n))}))}isEqual(e){return fw(this._delegate,e._delegate)}}class Lb extends Ab{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new Eb(this.firestore,e):null}doc(e){try{return new Eb(this.firestore,void 0===e?uv(this._delegate):uv(this._delegate,e))}catch(t){throw Tb(t,"doc()","CollectionReference.doc()")}}add(e){return Yw(this._delegate,e).then((e=>new Eb(this.firestore,e)))}isEqual(e){return lv(this._delegate,e._delegate)}withConverter(e){return new Lb(this.firestore,e?this._delegate.withConverter(_b.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Ob(e){return Zy(e,sv)}
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
 */class Rb{constructor(...e){this._delegate=new Av(...e)}static documentId(){return new Rb(zc.keyField().canonicalString())}isEqual(e){return e=It(e),e instanceof Av&&this._delegate._internalPath.isEqual(e._internalPath)}}
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
 */class Mb{constructor(e){this._delegate=e}static serverTimestamp(){const e=sb();return e._methodName="FieldValue.serverTimestamp",new Mb(e)}static delete(){const e=rb();return e._methodName="FieldValue.delete",new Mb(e)}static arrayUnion(...e){const t=ib(...e);return t._methodName="FieldValue.arrayUnion",new Mb(t)}static arrayRemove(...e){const t=ob(...e);return t._methodName="FieldValue.arrayRemove",new Mb(t)}static increment(e){const t=ab(e);return t._methodName="FieldValue.increment",new Mb(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}
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
 */const Vb={Firestore:yb,GeoPoint:Lv,Timestamp:jc,Blob:fb,Transaction:bb,WriteBatch:Ib,DocumentReference:Eb,DocumentSnapshot:Db,Query:Ab,QueryDocumentSnapshot:Cb,QuerySnapshot:Nb,CollectionReference:Lb,FieldPath:Rb,FieldValue:Mb,setLogLevel:wb,CACHE_SIZE_UNLIMITED:pv};function Fb(e,t){e.INTERNAL.registerComponent(new _t("firestore-compat",(e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("firestore").getImmediate();return t(n,r)}),"PUBLIC").setServiceProps(Object.assign({},Vb)))}
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
 */function Pb(e){Fb(e,((e,t)=>new yb(e,t,new gb))),e.registerVersion(cb,ub)}Pb(kr);const Bb={apiKey:"AIzaSyDVsydGWD3jDWycp70f8iWy1OjyRnLdY6s",authDomain:"amit-portfolio-1d20f.firebaseapp.com",projectId:"amit-portfolio-1d20f",storageBucket:"amit-portfolio-1d20f.appspot.com",messagingSenderId:"80105803323",appId:"1:80105803323:web:b5d69913060881356dd61e",measurementId:"G-6JP3FL6MQR"},Ub=kr.initializeApp(Bb),jb=Ub.firestore(),qb=jb.collection("inquiry"),$b=e=>qb.add(e);var Kb={name:"ContactMe",components:{CommonContentWrapper:D,ZigZagLine:B,CircleOutline:O},data(){return{title:"Contact me",subtitle:"Get in Touch",description:"Any type of query or discussion I’m open to talk. Drop a message and will get back to you. <br><br> Or Alternatively, shoot me an email at.",name:"",mobile:"",email:"",message:"",valid:!1,btn_loading:!1,placeholder:{name:"",mobile:"",email:"",msg:""},speed:300,counter:0}},mounted(){},methods:{submitForm(){let e=this.validateForm();if(e)return!1;this.btn_loading=!0;let t={name:this.name,mobile:this.mobile,email:this.email,message:this.message,date_time:new Date};$b(t).then(function(e){this.name="",this.mobile="",this.email="",this.message="",this.showSnakeBar("success","your response has been recorded. I'll get back to you as soon as possible")}.bind(this)).catch(function(e){this.showSnakeBar("error","Something went wrong, Please try again letter.")}.bind(this)).finally(),this.btn_loading=!1},validateForm(){let e=0;return this.validateInput(this.name,"name",!0)&&e++,this.validateMobile(this.mobile,!0)&&e++,this.validateEmail(this.email,!0)&&e++,this.validateInput(this.message,"message",!0)&&e++,e>0},validateEmail(e,t=!1){return t&&!e||e&&!/.+@.+\..+/.test(e)?(this.appendClass("email",!0),!0):(this.appendClass("email",!1),!1)},validateMobile(e,t=!1){return t&&!e||e&&!/^[6-9][0-9]{9}$/.test(e)?(this.appendClass("mobile",!0),!0):(this.appendClass("mobile",!1),!1)},validateInput(e,t,n=!1){return n&&!e?(this.appendClass(t,!0),!0):(this.appendClass(t,!1),!1)},appendClass(e,t=!0){let n=document.getElementById(e);t?n.classList.add("error"):n.classList.remove("error")},restrictChar(e){let t=new RegExp("\\d|\\.");e.ctrlKey||e.altKey||"string"!==typeof e.key||1!==e.key.length||t.test(e.key)||e.preventDefault()}}};const Gb=(0,S.Z)(Kb,[["render",je],["__scopeId","data-v-26436292"]]);var zb=Gb;const Wb={class:"app-padding py-15 my-15",id:"about-me"};function Hb(e,t,n,r,i,a){const c=(0,s.up)("qube-outline"),u=(0,s.up)("common-content-wrapper");return(0,s.wg)(),(0,s.iD)("div",Wb,[(0,s._)("p",(0,s.dG)({class:"shadow-text"},e.shado_text_animation),"About me",16),(0,s.Wm)(c,{class:"spin-animation float-right",opacity:.7,stroke:"#F3B24A",style:{width:"15px"}},null,8,["opacity"]),(0,s._)("div",{class:(0,o.C_)(["",e.$vuetify.display.mobile?"mt-n2":"mt-n15"])},[(0,s.Wm)(u,{title:i.title,subtitle:i.subtitle,description:i.description},null,8,["title","subtitle","description"])],2)])}const Qb={width:"26",height:"26",viewBox:"0 0 26 26",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Yb=["stroke","fill","opacity","stroke-width"];function Xb(e,t,n,r,i,o){return(0,s.wg)(),(0,s.iD)("svg",Qb,[(0,s._)("rect",{x:"1.5",y:"1.5",width:"23",height:"23",stroke:n.stroke,fill:n.fill,opacity:n.opacity,"stroke-width":n.stroke_width},null,8,Yb)])}var Jb={name:"CircleOutline",props:{stroke:{type:String,default:"#1F7949"},fill:{type:String,default:"none"},opacity:{type:String,default:"1"},stroke_width:{type:String,default:"4"}}};const Zb=(0,S.Z)(Jb,[["render",Xb]]);var eI=Zb,tI={name:"AboutMe",components:{CommonContentWrapper:D,QubeOutline:eI},data(){return{title:"About me",subtitle:"Know more about me",description:"Hello! My name is Amit Kumar Sahu. I'm a software developer & UI/UX Designer based in Raipur Chhattisgarh(India). I enjoy creating things that live on the internet. It all started from my college days when I start building interest in software development and decided to try editing custom themes and build a website for a college event, Fast-forward to today, I had the privilege of working at a start-up and a huge corporation. <br/> <br/>Apart from this, I like to travel and explore different places and their traditional dishes. Making handcrafts is one of my favourite hobbies."}},methods:{}};const nI=(0,S.Z)(tI,[["render",Hb],["__scopeId","data-v-7352c6cc"]]);var rI=nI;const sI={key:0,class:"d-flex justify-space-around"},iI={class:"d-inline-flex"},oI=(0,s._)("div",{class:"d-inline-flex align-center pl-2 text-stroke-1"},[(0,s.Uk)("Years of"),(0,s._)("br"),(0,s.Uk)("Excellence ")],-1),aI=(0,s._)("div",{class:"d-inline-flex"},[(0,s._)("div",{class:"d-inline-flex font-weight-bold text-stroke-2 text-h1"},"10"),(0,s._)("div",{class:"d-inline-flex align-center pl-2 text-stroke-1"},[(0,s.Uk)("Mind blowing"),(0,s._)("br"),(0,s.Uk)(" Projects")])],-1),cI={key:1,class:"text-center"},uI=(0,s.uE)('<div class=""><div class="text-h1 font-weight-bold text-stroke-2">3.6</div><div class="align-center pl-2 text-stroke-1">Years of Excellence</div></div><div class="mt-10"><div class="text-h1 font-weight-bold text-stroke-2">10</div><div class="align-center pl-2 text-stroke-1">Mind blowing Projects</div></div>',2),lI=[uI];function hI(e,t,n,r,i,a){const c=(0,s.up)("circle-outline");return(0,s.wg)(),(0,s.iD)("div",{class:(0,o.C_)(["app-padding align-center d-block py-15 my-15",e.$vuetify.display.mobile?"pt-5":"text-h6"]),id:"experience"},[(0,s._)("p",(0,s.dG)({class:"shadow-text text-center"},e.shado_text_animation),"Experience",16),e.$vuetify.display.mobile?((0,s.wg)(),(0,s.iD)("div",cI,lI)):((0,s.wg)(),(0,s.iD)("div",sI,[(0,s._)("div",iI,[(0,s._)("div",{class:(0,o.C_)(["d-inline-flex font-weight-bold text-stroke-2",e.$vuetify.display.mobile?"text-h2":" text-h1"])},(0,o.zw)(i.experience),3),oI]),aI])),(0,s.Wm)(c,{class:"float-right move-animation-3",style:{width:"15px"}})],2)}var dI={name:"MyExperience",components:{CircleOutline:O},data(){return{title:"Experience",subtitle:"Product designer and Developer, Based in Raipur",description:"Passionate about visual design and technology. I specialized in frontend development and UI/UX design and my passion is about building elegant and professional user interfaces and websites.",experience:""}},mounted(){this.calcExperience()},methods:{calcExperience(){let e=new Date("06/01/2019"),t=new Date,n=parseInt((t-e)/864e5,10),r=parseInt(n/365),s=parseInt(n%365/30);this.experience=r+"."+s}}};const fI=(0,S.Z)(dI,[["render",hI]]);var mI=fI;function pI(e,t,n,r,i,u){const l=(0,s.up)("zig-zag-line"),h=(0,s.up)("project-card"),d=(0,s.up)("common-content-wrapper"),f=(0,s.up)("arrow-outline");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(l,{class:"float-right move-animation-2",stroke:"#07bf13",height:e.$vuetify.display.mobile?7:10},null,8,["height"]),(0,s._)("div",{class:(0,o.C_)(["app-padding portfolio-section",e.$vuetify.display.mobile?"pt-5":"text-h6"]),id:"portfolio",style:(0,o.j5)(i.style)},[(0,s.Wm)(a.o,{align:"top",justify:"center","no-gutters":"",class:(0,o.C_)(e.$vuetify.display.mobile?"py-15 mt-15":"py-15 my-15")},{default:(0,s.w5)((()=>[e.$vuetify.display.mobile?(0,s.kq)("",!0):((0,s.wg)(),(0,s.j4)(c.D,{key:0,sm:"6",cols:"12",class:(0,o.C_)(["justify-center",u.getClassName(0)])},{default:(0,s.w5)((()=>[(0,s.Wm)(h,{project:i.project_list[0],index:0},null,8,["project"])])),_:1},8,["class"])),(0,s.Wm)(c.D,{sm:"6",cols:"12",class:(0,o.C_)(["text-stroke-1",e.$vuetify.display.mobile?"":"pl-6 py-6"])},{default:(0,s.w5)((()=>[(0,s.Wm)(d,{title:i.title,subtitle:i.subtitle,description:i.description},null,8,["title","subtitle","description"])])),_:1},8,["class"]),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.$vuetify.display.mobile?i.project_list:i.project_list.splice(1,7),((e,t)=>((0,s.wg)(),(0,s.j4)(c.D,{sm:"6",cols:"12",class:(0,o.C_)(["justify-center",u.getClassName(t)]),key:t},{default:(0,s.w5)((()=>[(0,s.Wm)(h,{project:e,index:t+1},null,8,["project","index"])])),_:2},1032,["class"])))),128))])),_:1},8,["class"])],6),(0,s.Wm)(f,{style:{width:"18px"},class:"ml-4"})],64)}var gI=n(8434);const yI=(0,ne.a)({name:"VCardActions",setup(e,t){let{slots:n}=t;return(0,gI.AF)({VBtn:{variant:"text"}}),(0,fe.L)((()=>{var e;return(0,s.Wm)("div",{class:"v-card-actions"},[null==(e=n.default)?void 0:e.call(n)])})),{}}});var vI=n(4544);function wI(e){return{aspectStyles:(0,s.Fl)((()=>{const t=Number(e.aspectRatio);return t?{paddingBottom:String(1/t*100)+"%"}:void 0}))}}const bI=(0,ne.a)({name:"VResponsive",props:{aspectRatio:[String,Number],contentClass:String,...(0,vI.x)()},setup(e,t){let{slots:n}=t;const{aspectStyles:r}=wI(e),{dimensionStyles:i}=(0,vI.$)(e);return(0,fe.L)((()=>{var t;return(0,s.Wm)("div",{class:"v-responsive",style:i.value},[(0,s.Wm)("div",{class:"v-responsive__sizer",style:r.value},null),null==(t=n.additional)?void 0:t.call(n),n.default&&(0,s.Wm)("div",{class:["v-responsive__content",e.contentClass]},[n.default()])])})),{}}});var II=n(2385);function _I(e,t){if(!II.cu)return;const n=t.modifiers||{},r=t.value,{handler:s,options:i}="object"===typeof r?r:{handler:r,options:{}},o=new IntersectionObserver((function(){var r;let i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],o=arguments.length>1?arguments[1]:void 0;const a=null==(r=e._observe)?void 0:r[t.instance.$.uid];if(!a)return;const c=i.some((e=>e.isIntersecting));!s||n.quiet&&!a.init||n.once&&!c&&!a.init||s(c,i,o),c&&n.once?EI(e,t):a.init=!0}),i);e._observe=Object(e._observe),e._observe[t.instance.$.uid]={init:!1,observer:o},o.observe(e)}function EI(e,t){var n;const r=null==(n=e._observe)?void 0:n[t.instance.$.uid];r&&(r.observer.unobserve(e),delete e._observe[t.instance.$.uid])}const TI={mounted:_I,unmounted:EI};var SI=TI,xI=n(4906),DI=n(131);const CI=(0,ne.a)({name:"VImg",directives:{intersect:SI},props:{aspectRatio:[String,Number],alt:String,cover:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},srcset:String,width:[String,Number],...(0,xI.X)()},emits:["loadstart","load","error"],setup(e,t){let{emit:n,slots:r}=t;const i=(0,ie.iH)(""),o=(0,ie.iH)(),a=(0,ie.iH)(e.eager?"loading":"idle"),c=(0,ie.iH)(),u=(0,ie.iH)(),l=(0,s.Fl)((()=>e.src&&"object"===typeof e.src?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)})),h=(0,s.Fl)((()=>l.value.aspect||c.value/u.value||0));function d(t){if((!e.eager||!t)&&(!II.cu||t||e.eager)){if(a.value="loading",l.value.lazySrc){const e=new Image;e.src=l.value.lazySrc,g(e,null)}l.value.src&&(0,s.Y3)((()=>{var e,t;if(n("loadstart",(null==(e=o.value)?void 0:e.currentSrc)||l.value.src),null!=(t=o.value)&&t.complete){if(o.value.naturalWidth||m(),"error"===a.value)return;h.value||g(o.value,null),f()}else h.value||g(o.value),p()}))}}function f(){var e;p(),a.value="loaded",n("load",(null==(e=o.value)?void 0:e.currentSrc)||l.value.src)}function m(){var e;a.value="error",n("error",(null==(e=o.value)?void 0:e.currentSrc)||l.value.src)}function p(){const e=o.value;e&&(i.value=e.currentSrc||e.src)}function g(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;const n=()=>{const{naturalHeight:r,naturalWidth:s}=e;r||s?(c.value=s,u.value=r):e.complete||"loading"!==a.value||null==t?(e.currentSrc.endsWith(".svg")||e.currentSrc.startsWith("data:image/svg+xml"))&&(c.value=1,u.value=1):setTimeout(n,t)};n()}(0,s.YP)((()=>e.src),(()=>{d("idle"!==a.value)})),(0,s.wF)((()=>d()));const y=(0,s.Fl)((()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover}))),v=(0,s.Fl)((()=>{var t;if(!l.value.src||"idle"===a.value)return;const n=(0,s.h)("img",{class:["v-img__img",y.value],src:l.value.src,srcset:l.value.srcset,alt:"",sizes:e.sizes,ref:o,onLoad:f,onError:m}),i=null==(t=r.sources)?void 0:t.call(r);return(0,s.Wm)(xI.J,{transition:e.transition,appear:!0},{default:()=>[(0,s.wy)(i?(0,s.Wm)("picture",{class:"v-img__picture"},[i,n]):n,[[ee.F8,"loaded"===a.value]])]})})),w=(0,s.Fl)((()=>(0,s.Wm)(xI.J,{transition:e.transition},{default:()=>[l.value.lazySrc&&"loaded"!==a.value&&(0,s.Wm)("img",{class:["v-img__img","v-img__img--preload",y.value],src:l.value.lazySrc,alt:""},null)]}))),b=(0,s.Fl)((()=>{if(r.placeholder)return(0,s.Wm)(xI.J,{transition:e.transition,appear:!0},{default:()=>[("loading"===a.value||"error"===a.value&&!r.error)&&(0,s.Wm)("div",{class:"v-img__placeholder"},[r.placeholder()])]})})),I=(0,s.Fl)((()=>{if(r.error)return(0,s.Wm)(xI.J,{transition:e.transition,appear:!0},{default:()=>["error"===a.value&&(0,s.Wm)("div",{class:"v-img__error"},[r.error()])]})})),_=(0,s.Fl)((()=>{if(e.gradient)return(0,s.Wm)("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null)})),E=(0,ie.iH)(!1);{const e=(0,s.YP)(h,(t=>{t&&(requestAnimationFrame((()=>{requestAnimationFrame((()=>{E.value=!0}))})),e())}))}return(0,fe.L)((()=>(0,s.wy)((0,s.Wm)(bI,{class:["v-img",{"v-img--booting":!E.value}],style:{width:(0,DI.kb)("auto"===e.width?c.value:e.width)},aspectRatio:h.value,"aria-label":e.alt,role:e.alt?"img":void 0},{additional:()=>[v.value,w.value,_.value,b.value,I.value],default:r.default}),[[(0,s.Q2)("intersect"),{handler:d,options:e.options},null,{once:!0}]]))),{currentSrc:i,image:o,state:a,naturalWidth:c,naturalHeight:u}}});var AI=n(9694),kI=n(4231),NI=n(9374),LI=n(1138),OI=n(2370),RI=n(4960);const MI=(0,ae.U)({color:String,start:Boolean,end:Boolean,icon:RI.lE,image:String,...(0,AI.f)(),...(0,kI.I)(),...(0,NI.Z)(),...(0,LI.Q)()}),VI=(0,ne.a)({name:"VAvatar",props:MI(),setup(e,t){let{slots:n}=t;const{backgroundColorClasses:r,backgroundColorStyles:i}=(0,OI.Y5)((0,ie.Vh)(e,"color")),{densityClasses:o}=(0,AI.t)(e),{roundedClasses:a}=(0,kI.b)(e),{sizeClasses:c,sizeStyles:l}=(0,NI.t)(e);return(0,fe.L)((()=>{var t;return(0,s.Wm)(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},r.value,o.value,a.value,c.value],style:[i.value,l.value]},{default:()=>[e.image?(0,s.Wm)(CI,{src:e.image,alt:""},null):e.icon?(0,s.Wm)(u.t,{icon:e.icon},null):null==(t=n.default)?void 0:t.call(n)]})})),{}}}),FI=re("v-card-subtitle"),PI=re("v-card-title");var BI=n(836);const UI=(0,s.aZ)({name:"VCardItem",props:{appendAvatar:String,appendIcon:RI.lE,prependAvatar:String,prependIcon:RI.lE,subtitle:String,title:String,...(0,AI.f)()},setup(e,t){let{slots:n}=t;return(0,fe.L)((()=>{var t,r,i,o,a,c,u,l,h;const d=!!(e.prependAvatar||e.prependIcon||n.prepend),f=!!(e.appendAvatar||e.appendIcon||n.append),m=!(!e.title&&!n.title),p=!(!e.subtitle&&!n.subtitle);return(0,s.Wm)("div",{class:"v-card-item"},[d&&(0,s.Wm)(BI.z,{key:"prepend",defaults:{VAvatar:{density:e.density,icon:e.prependIcon,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},{default:()=>[(0,s.Wm)("div",{class:"v-card-item__prepend"},[null!=(t=null==(r=n.prepend)?void 0:r.call(n))?t:(0,s.Wm)(VI,null,null)])]}),(0,s.Wm)("div",{class:"v-card-item__content"},[m&&(0,s.Wm)(PI,{key:"title"},{default:()=>[null!=(i=null==(o=n.title)?void 0:o.call(n))?i:e.title]}),p&&(0,s.Wm)(FI,{key:"subtitle"},{default:()=>[null!=(a=null==(c=n.subtitle)?void 0:c.call(n))?a:e.subtitle]}),null==(u=n.default)?void 0:u.call(n)]),f&&(0,s.Wm)(BI.z,{key:"append",defaults:{VAvatar:{density:e.density,icon:e.appendIcon,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},{default:()=>[(0,s.Wm)("div",{class:"v-card-item__append"},[null!=(l=null==(h=n.append)?void 0:h.call(n))?l:(0,s.Wm)(VI,null,null)])]})])})),{}}});var jI=n(3824),qI=n(5221),$I=n(6791),KI=n(2718),GI=n(2465),zI=n(5180),WI=n(489),HI=n(6183),QI=n(7041);const YI=(0,ne.a)({name:"VCard",directives:{Ripple:jI.H},props:{appendAvatar:String,appendIcon:RI.lE,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:Boolean,prependAvatar:String,prependIcon:RI.lE,ripple:Boolean,subtitle:String,text:String,title:String,...(0,QI.x$)(),...(0,KI.m)(),...(0,AI.f)(),...(0,vI.x)(),...(0,GI.c)(),...(0,$I.fF)(),...(0,zI.y)(),...(0,WI.F)(),...(0,kI.I)(),...(0,HI.GN)(),...(0,LI.Q)(),...(0,qI.bk)({variant:"elevated"})},setup(e,t){let{attrs:n,slots:r}=t;const{themeClasses:i}=(0,QI.ER)(e),{borderClasses:o}=(0,KI.P)(e),{colorClasses:a,colorStyles:c,variantClasses:u}=(0,qI.c1)(e),{densityClasses:l}=(0,AI.t)(e),{dimensionStyles:h}=(0,vI.$)(e),{elevationClasses:d}=(0,GI.Y)(e),{loaderClasses:f}=(0,$I.U2)(e),{locationStyles:m}=(0,zI.T)(e),{positionClasses:p}=(0,WI.K)(e),{roundedClasses:g}=(0,kI.b)(e),y=(0,HI.nB)(e,n);return(0,fe.L)((()=>{var t,n,v,w,b;const I=y.isLink.value?"a":e.tag,_=!(!r.title&&!e.title),E=!(!r.subtitle&&!e.subtitle),T=_||E,S=!!(r.append||e.appendAvatar||e.appendIcon),x=!!(r.prepend||e.prependAvatar||e.prependIcon),D=!(!r.image&&!e.image),C=T||x||S,A=!(!r.text&&!e.text),k=!e.disabled&&(y.isClickable.value||e.link);return(0,s.wy)((0,s.Wm)(I,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":k},i.value,o.value,a.value,l.value,d.value,f.value,p.value,g.value,u.value],style:[c.value,h.value,m.value],href:y.href.value,onClick:k&&y.navigate},{default:()=>[D&&(0,s.Wm)(BI.z,{key:"image",defaults:{VImg:{cover:!0,src:e.image}}},{default:()=>[(0,s.Wm)("div",{class:"v-card__image"},[null!=(t=null==(n=r.image)?void 0:n.call(r))?t:(0,s.Wm)(CI,null,null)])]}),(0,s.Wm)($I.rD,{name:"v-card",active:!!e.loading,color:"boolean"===typeof e.loading?void 0:e.loading},{default:r.loader}),C&&(0,s.Wm)(UI,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:r.item,prepend:r.prepend,title:r.title,subtitle:r.subtitle,append:r.append}),A&&(0,s.Wm)(se,{key:"text"},{default:()=>[null!=(v=null==(w=r.text)?void 0:w.call(r))?v:e.text]}),null==(b=r.default)?void 0:b.call(r),r.actions&&(0,s.Wm)(yI,null,{default:r.actions}),(0,qI.Ux)(k,"v-card")]}),[[(0,s.Q2)("ripple"),k]])})),{}}}),XI=["href"],JI={class:"d-flex align-center h-100"},ZI={key:0,class:"project-content"},e_={class:"text-h5 text-stroke-4 font-weight-bold p-title un mb-3"},t_={class:"fs-roboto-mono project-index"},n_=(0,s.Uk)("mdi-arrow-right"),r_={key:0,class:"project-content"},s_={class:"text-h6 text-stroke-4 font-weight-bold p-title un mb-3"};function i_(e,t,n,r,i,a){return(0,s.wg)(),(0,s.iD)("a",{href:n.project.working_link,target:"_blank",class:"text-decoration-none"},[(0,s.Wm)(YI,(0,s.dG)({class:"project-card d-flex align-center bg-transparent",flat:"",color:""},e.props),{default:(0,s.w5)((()=>[(0,s._)("div",JI,[e.$vuetify.display.mobile?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("div",ZI,[(0,s._)("p",e_,(0,o.zw)(n.project.title),1),(0,s._)("small",t_,[(0,s.Uk)((0,o.zw)(n.index>9?n.index:"0"+n.index)+" ",1),(0,s.Wm)(u.t,{size:"18",class:"right-arrow"},{default:(0,s.w5)((()=>[n_])),_:1})])]))]),(0,s.Wm)(CI,{"aspect-ratio":16/9,cover:"",src:n.project.image,class:(0,o.C_)(["project-img",e.$vuetify.display.mobile?"":"ml-15"]),"min-height":e.$vuetify.display.mobile?225:""},{default:(0,s.w5)((()=>[(0,s._)("div",{class:(0,o.C_)(["h-100 d-flex align-center justify-center",e.$vuetify.display.mobile?"project-img-cover-mobile":"project-img-cover"])},[e.$vuetify.display.mobile?((0,s.wg)(),(0,s.iD)("div",r_,[(0,s._)("p",s_,(0,o.zw)(n.project.title),1)])):(0,s.kq)("",!0)],2)])),_:1},8,["src","class","min-height"])])),_:1},16)],8,XI)}var o_={name:"ProjectsCard",props:["project","index"],data(){return{}},methods:{}};const a_=(0,S.Z)(o_,[["render",i_],["__scopeId","data-v-83bb25ca"]]);var c_=a_;const u_={class:"move-top",width:"23",height:"40",viewBox:"-2 0 30 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l_=["fill","stroke","opacity","stroke-width"];function h_(e,t,n,r,i,o){return(0,s.wg)(),(0,s.iD)("svg",u_,[(0,s._)("path",{d:"M12.75 0.869358C12.1633 0.284471 11.2136 0.285926 10.6287 0.87261L1.09738 10.4332C0.512493 11.0199 0.513949 11.9696 1.10063 12.5545C1.68732 13.1394 2.63706 13.1379 3.22195 12.5512L11.6942 4.05296L20.1925 12.5252C20.7792 13.1101 21.7289 13.1087 22.3138 12.522C22.8987 11.9353 22.8972 10.9855 22.3106 10.4007L12.75 0.869358ZM13.194 3.92934L13.191 1.92934L10.191 1.93394L10.194 3.93394L13.194 3.92934Z",fill:n.fill,stroke:n.stroke,opacity:n.opacity,"stroke-width":n.stroke_width},null,8,l_)])}var d_={name:"CircleOutline",props:{stroke:{type:String,default:"#7986FD"},fill:{type:String,default:"none"},opacity:{type:String,default:"1"},stroke_width:{type:String,default:"3"}}};const f_=(0,S.Z)(d_,[["render",h_],["__scopeId","data-v-c8600bdc"]]);var m_=f_,p_={name:"MyProjects",components:{CommonContentWrapper:D,ProjectCard:c_,ZigZagLine:B,ArrowOutline:m_},data(){return{style:{},title:"Portfolio",subtitle:"Some Things I’ve Built",description:"I build some great products. some of my recent and note worthy project are listed here.",project_list:[{title:"Cashpo",description:"A platform which provides you Personal loans upto ₹2 lakhs instantly through a completely paperless process. Key Highlight e-Mandate/NACH, e-KYC, Auto Disbursement etc.",image:n(7285),working_link:"https://cashpo.in",tech_stack:["django","python","vue-js","html-5","sass","postgresql"]},{title:"Tutors Factory",description:"Tutors Factory the best home tutor provider have connected the 10,000+ tutors with almost 25,000+ students across the nation. It has Student portal, Tutor portal, Business Developer portal And Admin portal",image:n(4831),working_link:"https://www.tutorsfactory.com",tech_stack:["django","python","vue-js","html-5","sass","postgresql"]},{title:"Medx",description:"A Subscription Based B2B medicine delivery service. Delivering 2500+ order in a Day. This platform have some key feature Like Shipment Lifecycle, Live tracking, Wallet and Payout etc.",image:n(5829),working_link:"https://themedx.in",tech_stack:["django","python","vue-js","html-5","postgresql"]},{title:"Wednicely",description:"Wednicely is platform where you can create a e-invitation card within few minutes. It has 1000+ template and  10+ category  to choose from",image:n(6262),working_link:"https://wednicely.com/",tech_stack:["django","python","vue-js","html-5","postgresql"]},{title:"BurnBlack",description:"BurnBlack is platform who provide the financial service like ITR, GST filling, Company registration, Billing Software and other Financial Services.",image:n(6575),working_link:"https://burnblack.in/",tech_stack:["django","python","vue-js","html-5","postgresql"]},{title:"Rawfit",description:"Rawfit is subscription Based health monitoring system based on google fit. Which also provide service to book a activity session.",image:n(3120),working_link:"https://rawfit.in",tech_stack:["django","python","vue-js","html-5","postgresql"]},{description:"GimBooks is Y combinator funded startup who  helps small business owners to create and share Invoice, Quotations, E-Waybills, Payment reminders, Payment receipts and much more!",title:"GimBooks",image:n(3881),working_link:"https://www.gimbooks.com/",tech_stack:["django","python","html-5","javascript","mysql"]},{description:"Digital ayurveda is patients management platform for docters where they can manage all the medical records and drugs record.",title:"Digital Ayurved",image:n(9215),working_link:"https://digitalayurved.in/",tech_stack:["django","python","html-5","vue","vuetify","javascript","mysql"]}]}},mounted(){this.style={backgroundImage:"url("+n(7905)+")"}},methods:{getClassName(e){console.log(e);let t="";return this.$vuetify.display.mobile?t+="py-6 px-0":t+=6==e?" px-0 py-6":e%2==0?" pr-6 py-6":" pl-6 py-6",t}}};const g_=(0,S.Z)(p_,[["render",pI],["__scopeId","data-v-6ba6c89d"]]);var y_=g_;const v_={class:"app-padding py-15 my-15 d-flex align-center",id:"my-services"},w_={class:"service-card justify-center d-flex align-center"},b_={class:"d-inline-flex"},I_={class:"d-inline-flex text-stroke-12 pl-5 text-h6"},__=["innerHTML"];function E_(e,t,n,r,i,l){const h=(0,s.up)("triangle-outline"),d=(0,s.up)("common-content-wrapper");return(0,s.wg)(),(0,s.iD)("div",v_,[(0,s.Wm)(h,{class:"spin-animation",style:{width:"45px"}}),(0,s.Wm)(a.o,{align:"end",justify:"start","no-gutters":""},{default:(0,s.w5)((()=>[(0,s.Wm)(c.D,{xs:"12",sm:"6",md:"8",class:"justify-center text-stroke-1 pr-6 py-6"},{default:(0,s.w5)((()=>[(0,s.Wm)(d,{title:i.title,subtitle:i.subtitle,description:i.description},null,8,["title","subtitle","description"])])),_:1}),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(i.service_list,((e,t)=>((0,s.wg)(),(0,s.j4)(c.D,{xs:"12",sm:"6",md:"4",class:(0,o.C_)(["justify-center",l.getClassName(t)]),key:t},{default:(0,s.w5)((()=>[(0,s._)("div",w_,[(0,s._)("div",b_,[(0,s.Wm)(u.t,{class:"service-icon",size:"50"},{default:(0,s.w5)((()=>[(0,s.Uk)((0,o.zw)(e.icon),1)])),_:2},1024)]),(0,s._)("div",I_,[(0,s._)("div",{innerHTML:e.name},null,8,__)])])])),_:2},1032,["class"])))),128))])),_:1})])}var T_={name:"MyServices",components:{CommonContentWrapper:D,TriangleOutline:G},data(){return{title:"Services",subtitle:"How can i Help you?",description:"\nProfessionally connected with the IT industry for many years. Interested in the entire web development spectrum and working on ambitious projects with positive people.",service_list:[{name:'Web<p class="un">Development</p>',img:"services/pen.svg",icon:"mdi-web"},{name:'Backend<p class="un">Development</p>',img:"services/pen.svg",icon:"mdi-application-cog"},{name:'UI/UX<p class="un">Designing</p>',img:"services/pen.svg",icon:"mdi-fountain-pen-tip"},{name:'Product Design<p class="un">& Development</p>',img:"services/pen.svg",icon:"mdi-monitor-cellphone"}]}},methods:{getClassName(e){let t="";if(this.$vuetify.display.mobile)t+="my-6 px-2";else switch(e){case 3:case 0:t+="pl-6 my-6";break;case 1:t+="pr-6 my-6";break;case 2:t+="px-6 my-6";break}return t}}};const S_=(0,S.Z)(T_,[["render",E_],["__scopeId","data-v-8d8b5508"]]);var x_=S_;const D_={class:"mt-4"},C_=["src","alt"],A_=["innerHTML"];function k_(e,t,n,r,i,u){const l=(0,s.up)("qube-outline"),h=(0,s.up)("common-content-wrapper"),d=(0,s.up)("circle-outline");return(0,s.wg)(),(0,s.iD)("div",{class:"app-padding py-15 my-15",style:(0,o.j5)(e.style)},[(0,s.Wm)(a.o,{align:"end",justify:"center","no-gutters":""},{default:(0,s.w5)((()=>[(0,s.Wm)(c.D,{sm:"6",cols:"12",class:"justify-center text-stroke-1"},{default:(0,s.w5)((()=>[(0,s.Wm)(l,{class:"spin-animation float-right",opacity:.4,stroke:"#F85C5C",style:{width:"15px"}},null,8,["opacity"]),(0,s.Wm)(h,{title:i.title,subtitle:i.subtitle,description:i.description},null,8,["title","subtitle","description"])])),_:1}),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(i.tech_stacks,((t,n)=>((0,s.wg)(),(0,s.j4)(c.D,{xs:"6",sm:"3",md:"2",class:(0,o.C_)(["justify-center",e.$vuetify.display.mobile?"text-center ":" text-left"]),key:n},{default:(0,s.w5)((()=>[(0,s._)("div",{class:"skills-card align-center text-center pa-4 ma-4",style:(0,o.j5)({"--data-index":n%2==0?n:n/4})},[(0,s._)("div",D_,[(0,s._)("img",{src:t.img,alt:t.title,width:"70",style:(0,o.j5)({"--data-index":n%2==0?n:n/4})},null,12,C_),(0,s._)("p",{innerHTML:t.title},null,8,A_)])],4)])),_:2},1032,["class"])))),128))])),_:1}),(0,s.Wm)(d,{class:"move-animation-2 float-left",opacity:.8,stroke:"#1F7949",style:{width:"15px"}},null,8,["opacity"])],4)}var N_={name:"MySkills",components:{CommonContentWrapper:D,QubeOutline:eI,CircleOutline:O},data(){return{title:"Tech Stack",subtitle:"Power of technology in my hands",description:"",tech_stacks:[{title:"Python",img:n(4395)},{title:"Django",img:n(2531)},{title:"Vue js",img:n(2148)},{title:"Vuetify",width:45,img:n(4678)},{title:"Nuxt",width:45,img:n(4140)},{title:"Javascript",img:n(9963)},{title:"Git",img:n(6325)},{title:"React",img:n(9520)},{title:"Jquery",img:n(946)},{title:"HTML5",img:n(878)},{title:"SASS",img:n(7581)},{title:"Mysql",img:n(9786)},{title:"Postgresql",img:n(9354)},{title:"Figma",img:n(2778)},{title:"AWS",img:n(2663)},{title:"firebase",img:n(7745)},{title:"Nginx",img:n(8388)},{title:"Ubuntu",img:n(7877)}]}},methods:{}};const L_=(0,S.Z)(N_,[["render",k_],["__scopeId","data-v-fbb455aa"]]);var O_=L_,R_={name:"HomePage",components:{LandingScreen:Z,ContactMe:zb,AboutMe:rI,MyExperience:mI,MyServices:x_,MyProjects:y_,MySkills:O_},data(){return{}},beforeMount(){this.toggleLoading()},mounted(){},methods:{}};const M_=(0,S.Z)(R_,[["render",i]]);var V_=M_}}]);
//# sourceMappingURL=about.fc5189c2.js.map