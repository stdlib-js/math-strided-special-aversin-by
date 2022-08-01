// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(e){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,i=n.__defineSetter__,u=n.__lookupGetter__,f=n.__lookupSetter__,l=function(){try{return r({},"x",{}),!0}catch(e){return!1}}()?t:function(e,r,t){var l,c,_,d;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(u.call(e,r)||f.call(e,r)?(l=e.__proto__,e.__proto__=n,delete e[r],e[r]=t.value,e.__proto__=l):e[r]=t.value),_="get"in t,d="set"in t,c&&(_||d))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&a&&a.call(e,r,t.get),d&&i&&i.call(e,r,t.set),e};function c(e,r,t){l(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function _(e,r,t,n,o,a,i,u){var f,l,c,_;if(e<=0)return n;for(f=t<0?(1-e)*t:0,l=o<0?(1-e)*o:0,_=0;_<e;_++)void 0!==(c=i.call(u,r[f],_,f,l,r,n))&&(n[l]=a(c)),f+=t,l+=o;return n}function d(e,r,t,n,o,a,i,u,f,l){var c,_,d,p;if(e<=0)return o;for(c=n,_=i,p=0;p<e;p++)void 0!==(d=f.call(l,r[c],p,c,_,r,o))&&(o[_]=u(d)),c+=t,_+=a;return o}function p(e){return e!=e}c(_,"ndarray",d);var s=Math.sqrt,y=.7853981633974483;function v(e){var r,t,n,o,a;if(p(e))return NaN;if(e>0?n=e:(r=!0,n=-e),n>1)return NaN;if(n>.625)o=(t=1-n)*function(e){var r,t;return 0===e?.08333333333333809:((e<0?-e:e)<=1?(r=28.536655482610616+e*(e*(6.968710824104713+e*(.002967721961301243*e-.5634242780008963))-25.56901049652825),t=342.43986579130785+e*(e*(147.0656354026815+e*(1*e-21.947795316429207))-383.8770957603691)):(r=.002967721961301243+(e=1/e)*(e*(6.968710824104713+e*(28.536655482610616*e-25.56901049652825))-.5634242780008963),t=1+e*(e*(147.0656354026815+e*(342.43986579130785*e-383.8770957603691))-21.947795316429207)),r/t)}(t),t=s(t+t),a=y-t,a-=t=t*o-6123233995736766e-32,a+=y;else{if(n<1e-8)return e;a=(t=n*n)*function(e){var r,t;return 0===e?.16666666666666713:((e<0?-e:e)<=1?(r=e*(19.562619833175948+e*(e*(5.444622390564711+e*(.004253011369004428*e-.6019598008014124))-16.262479672107002))-8.198089802484825,t=e*(139.51056146574857+e*(e*(70.49610280856842+e*(1*e-14.740913729888538))-147.1791292232726))-49.18853881490881):(r=.004253011369004428+(e=1/e)*(e*(5.444622390564711+e*(e*(19.562619833175948+-8.198089802484825*e)-16.262479672107002))-.6019598008014124),t=1+e*(e*(70.49610280856842+e*(e*(139.51056146574857+-49.18853881490881*e)-147.1791292232726))-14.740913729888538)),r/t)}(t),a=n*a+n}return r?-a:a}function b(e){return function(e){var r;return p(e)||e<-1||e>1?NaN:e>.5?2*v(s(.5-.5*e)):(r=y-v(e),r+=6123233995736766e-32,r+=y)}(1-e)}function j(e,r,t,n,o,a,i){return _(e,r,t,n,o,b,a,i)}function g(e,r,t,n,o,a,i,u,f){return d(e,r,t,n,o,a,i,b,u,f)}c(j,"ndarray",g),e.default=j,e.ndarray=g,Object.defineProperty(e,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((e="undefined"!=typeof globalThis?globalThis:e||self).aversinBy={});
//# sourceMappingURL=index.js.map
