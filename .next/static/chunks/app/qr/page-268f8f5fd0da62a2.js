(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[472],{1223:function(e,t,r){Promise.resolve().then(r.bind(r,5073))},5073:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return I}});var n,i,l,o=r(7437),s=r(2265),a=Object.defineProperty,h=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,f=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&d(e,r,t[r]);if(h)for(var r of h(t))c.call(t,r)&&d(e,r,t[r]);return e},m=(e,t)=>{var r={};for(var n in e)u.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&h)for(var n of h(e))0>t.indexOf(n)&&c.call(e,n)&&(r[n]=e[n]);return r};(e=>{let t=class{constructor(e,r,n,l){if(this.version=e,this.errorCorrectionLevel=r,this.modules=[],this.isFunction=[],e<t.MIN_VERSION||e>t.MAX_VERSION)throw RangeError("Version value out of range");if(l<-1||l>7)throw RangeError("Mask value out of range");this.size=4*e+17;let o=[];for(let e=0;e<this.size;e++)o.push(!1);for(let e=0;e<this.size;e++)this.modules.push(o.slice()),this.isFunction.push(o.slice());this.drawFunctionPatterns();let s=this.addEccAndInterleave(n);if(this.drawCodewords(s),-1==l){let e=1e9;for(let t=0;t<8;t++){this.applyMask(t),this.drawFormatBits(t);let r=this.getPenaltyScore();r<e&&(l=t,e=r),this.applyMask(t)}}i(0<=l&&l<=7),this.mask=l,this.applyMask(l),this.drawFormatBits(l),this.isFunction=[]}static encodeText(r,n){let i=e.QrSegment.makeSegments(r);return t.encodeSegments(i,n)}static encodeBinary(r,n){let i=e.QrSegment.makeBytes(r);return t.encodeSegments([i],n)}static encodeSegments(e,n,l=1,s=40,a=-1,h=!0){let u,c;if(!(t.MIN_VERSION<=l&&l<=s&&s<=t.MAX_VERSION)||a<-1||a>7)throw RangeError("Invalid value");for(u=l;;u++){let r=8*t.getNumDataCodewords(u,n),i=o.getTotalBits(e,u);if(i<=r){c=i;break}if(u>=s)throw RangeError("Data too long")}for(let e of[t.Ecc.MEDIUM,t.Ecc.QUARTILE,t.Ecc.HIGH])h&&c<=8*t.getNumDataCodewords(u,e)&&(n=e);let d=[];for(let t of e)for(let e of(r(t.mode.modeBits,4,d),r(t.numChars,t.mode.numCharCountBits(u),d),t.getData()))d.push(e);i(d.length==c);let f=8*t.getNumDataCodewords(u,n);i(d.length<=f),r(0,Math.min(4,f-d.length),d),r(0,(8-d.length%8)%8,d),i(d.length%8==0);for(let e=236;d.length<f;e^=253)r(e,8,d);let m=[];for(;8*m.length<d.length;)m.push(0);return d.forEach((e,t)=>m[t>>>3]|=e<<7-(7&t)),new t(u,n,m,a)}getModule(e,t){return 0<=e&&e<this.size&&0<=t&&t<this.size&&this.modules[t][e]}getModules(){return this.modules}drawFunctionPatterns(){for(let e=0;e<this.size;e++)this.setFunctionModule(6,e,e%2==0),this.setFunctionModule(e,6,e%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);let e=this.getAlignmentPatternPositions(),t=e.length;for(let r=0;r<t;r++)for(let n=0;n<t;n++)0==r&&0==n||0==r&&n==t-1||r==t-1&&0==n||this.drawAlignmentPattern(e[r],e[n]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(e){let t=this.errorCorrectionLevel.formatBits<<3|e,r=t;for(let e=0;e<10;e++)r=r<<1^(r>>>9)*1335;let l=(t<<10|r)^21522;i(l>>>15==0);for(let e=0;e<=5;e++)this.setFunctionModule(8,e,n(l,e));this.setFunctionModule(8,7,n(l,6)),this.setFunctionModule(8,8,n(l,7)),this.setFunctionModule(7,8,n(l,8));for(let e=9;e<15;e++)this.setFunctionModule(14-e,8,n(l,e));for(let e=0;e<8;e++)this.setFunctionModule(this.size-1-e,8,n(l,e));for(let e=8;e<15;e++)this.setFunctionModule(8,this.size-15+e,n(l,e));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let e=this.version;for(let t=0;t<12;t++)e=e<<1^(e>>>11)*7973;let t=this.version<<12|e;i(t>>>18==0);for(let e=0;e<18;e++){let r=n(t,e),i=this.size-11+e%3,l=Math.floor(e/3);this.setFunctionModule(i,l,r),this.setFunctionModule(l,i,r)}}drawFinderPattern(e,t){for(let r=-4;r<=4;r++)for(let n=-4;n<=4;n++){let i=Math.max(Math.abs(n),Math.abs(r)),l=e+n,o=t+r;0<=l&&l<this.size&&0<=o&&o<this.size&&this.setFunctionModule(l,o,2!=i&&4!=i)}}drawAlignmentPattern(e,t){for(let r=-2;r<=2;r++)for(let n=-2;n<=2;n++)this.setFunctionModule(e+n,t+r,1!=Math.max(Math.abs(n),Math.abs(r)))}setFunctionModule(e,t,r){this.modules[t][e]=r,this.isFunction[t][e]=!0}addEccAndInterleave(e){let r=this.version,n=this.errorCorrectionLevel;if(e.length!=t.getNumDataCodewords(r,n))throw RangeError("Invalid argument");let l=t.NUM_ERROR_CORRECTION_BLOCKS[n.ordinal][r],o=t.ECC_CODEWORDS_PER_BLOCK[n.ordinal][r],s=Math.floor(t.getNumRawDataModules(r)/8),a=l-s%l,h=Math.floor(s/l),u=[],c=t.reedSolomonComputeDivisor(o);for(let r=0,n=0;r<l;r++){let i=e.slice(n,n+h-o+(r<a?0:1));n+=i.length;let l=t.reedSolomonComputeRemainder(i,c);r<a&&i.push(0),u.push(i.concat(l))}let d=[];for(let e=0;e<u[0].length;e++)u.forEach((t,r)=>{(e!=h-o||r>=a)&&d.push(t[e])});return i(d.length==s),d}drawCodewords(e){if(e.length!=Math.floor(t.getNumRawDataModules(this.version)/8))throw RangeError("Invalid argument");let r=0;for(let t=this.size-1;t>=1;t-=2){6==t&&(t=5);for(let i=0;i<this.size;i++)for(let l=0;l<2;l++){let o=t-l,s=(t+1&2)==0?this.size-1-i:i;!this.isFunction[s][o]&&r<8*e.length&&(this.modules[s][o]=n(e[r>>>3],7-(7&r)),r++)}}i(r==8*e.length)}applyMask(e){if(e<0||e>7)throw RangeError("Mask value out of range");for(let t=0;t<this.size;t++)for(let r=0;r<this.size;r++){let n;switch(e){case 0:n=(r+t)%2==0;break;case 1:n=t%2==0;break;case 2:n=r%3==0;break;case 3:n=(r+t)%3==0;break;case 4:n=(Math.floor(r/3)+Math.floor(t/2))%2==0;break;case 5:n=r*t%2+r*t%3==0;break;case 6:n=(r*t%2+r*t%3)%2==0;break;case 7:n=((r+t)%2+r*t%3)%2==0;break;default:throw Error("Unreachable")}!this.isFunction[t][r]&&n&&(this.modules[t][r]=!this.modules[t][r])}}getPenaltyScore(){let e=0;for(let r=0;r<this.size;r++){let n=!1,i=0,l=[0,0,0,0,0,0,0];for(let o=0;o<this.size;o++)this.modules[r][o]==n?5==++i?e+=t.PENALTY_N1:i>5&&e++:(this.finderPenaltyAddHistory(i,l),n||(e+=this.finderPenaltyCountPatterns(l)*t.PENALTY_N3),n=this.modules[r][o],i=1);e+=this.finderPenaltyTerminateAndCount(n,i,l)*t.PENALTY_N3}for(let r=0;r<this.size;r++){let n=!1,i=0,l=[0,0,0,0,0,0,0];for(let o=0;o<this.size;o++)this.modules[o][r]==n?5==++i?e+=t.PENALTY_N1:i>5&&e++:(this.finderPenaltyAddHistory(i,l),n||(e+=this.finderPenaltyCountPatterns(l)*t.PENALTY_N3),n=this.modules[o][r],i=1);e+=this.finderPenaltyTerminateAndCount(n,i,l)*t.PENALTY_N3}for(let r=0;r<this.size-1;r++)for(let n=0;n<this.size-1;n++){let i=this.modules[r][n];i==this.modules[r][n+1]&&i==this.modules[r+1][n]&&i==this.modules[r+1][n+1]&&(e+=t.PENALTY_N2)}let r=0;for(let e of this.modules)r=e.reduce((e,t)=>e+(t?1:0),r);let n=this.size*this.size,l=Math.ceil(Math.abs(20*r-10*n)/n)-1;return i(0<=l&&l<=9),i(0<=(e+=l*t.PENALTY_N4)&&e<=2568888),e}getAlignmentPatternPositions(){if(1==this.version)return[];{let e=Math.floor(this.version/7)+2,t=32==this.version?26:2*Math.ceil((4*this.version+4)/(2*e-2)),r=[6];for(let n=this.size-7;r.length<e;n-=t)r.splice(1,0,n);return r}}static getNumRawDataModules(e){if(e<t.MIN_VERSION||e>t.MAX_VERSION)throw RangeError("Version number out of range");let r=(16*e+128)*e+64;if(e>=2){let t=Math.floor(e/7)+2;r-=(25*t-10)*t-55,e>=7&&(r-=36)}return i(208<=r&&r<=29648),r}static getNumDataCodewords(e,r){return Math.floor(t.getNumRawDataModules(e)/8)-t.ECC_CODEWORDS_PER_BLOCK[r.ordinal][e]*t.NUM_ERROR_CORRECTION_BLOCKS[r.ordinal][e]}static reedSolomonComputeDivisor(e){if(e<1||e>255)throw RangeError("Degree out of range");let r=[];for(let t=0;t<e-1;t++)r.push(0);r.push(1);let n=1;for(let i=0;i<e;i++){for(let e=0;e<r.length;e++)r[e]=t.reedSolomonMultiply(r[e],n),e+1<r.length&&(r[e]^=r[e+1]);n=t.reedSolomonMultiply(n,2)}return r}static reedSolomonComputeRemainder(e,r){let n=r.map(e=>0);for(let i of e){let e=i^n.shift();n.push(0),r.forEach((r,i)=>n[i]^=t.reedSolomonMultiply(r,e))}return n}static reedSolomonMultiply(e,t){if(e>>>8!=0||t>>>8!=0)throw RangeError("Byte out of range");let r=0;for(let n=7;n>=0;n--)r=r<<1^(r>>>7)*285^(t>>>n&1)*e;return i(r>>>8==0),r}finderPenaltyCountPatterns(e){let t=e[1];i(t<=3*this.size);let r=t>0&&e[2]==t&&e[3]==3*t&&e[4]==t&&e[5]==t;return(r&&e[0]>=4*t&&e[6]>=t?1:0)+(r&&e[6]>=4*t&&e[0]>=t?1:0)}finderPenaltyTerminateAndCount(e,t,r){return e&&(this.finderPenaltyAddHistory(t,r),t=0),t+=this.size,this.finderPenaltyAddHistory(t,r),this.finderPenaltyCountPatterns(r)}finderPenaltyAddHistory(e,t){0==t[0]&&(e+=this.size),t.pop(),t.unshift(e)}};function r(e,t,r){if(t<0||t>31||e>>>t!=0)throw RangeError("Value out of range");for(let n=t-1;n>=0;n--)r.push(e>>>n&1)}function n(e,t){return(e>>>t&1)!=0}function i(e){if(!e)throw Error("Assertion error")}t.MIN_VERSION=1,t.MAX_VERSION=40,t.PENALTY_N1=3,t.PENALTY_N2=3,t.PENALTY_N3=40,t.PENALTY_N4=10,t.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],t.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],e.QrCode=t;let l=class{constructor(e,t,r){if(this.mode=e,this.numChars=t,this.bitData=r,t<0)throw RangeError("Invalid argument");this.bitData=r.slice()}static makeBytes(e){let t=[];for(let n of e)r(n,8,t);return new l(l.Mode.BYTE,e.length,t)}static makeNumeric(e){if(!l.isNumeric(e))throw RangeError("String contains non-numeric characters");let t=[];for(let n=0;n<e.length;){let i=Math.min(e.length-n,3);r(parseInt(e.substr(n,i),10),3*i+1,t),n+=i}return new l(l.Mode.NUMERIC,e.length,t)}static makeAlphanumeric(e){let t;if(!l.isAlphanumeric(e))throw RangeError("String contains unencodable characters in alphanumeric mode");let n=[];for(t=0;t+2<=e.length;t+=2){let i=45*l.ALPHANUMERIC_CHARSET.indexOf(e.charAt(t));r(i+=l.ALPHANUMERIC_CHARSET.indexOf(e.charAt(t+1)),11,n)}return t<e.length&&r(l.ALPHANUMERIC_CHARSET.indexOf(e.charAt(t)),6,n),new l(l.Mode.ALPHANUMERIC,e.length,n)}static makeSegments(e){return""==e?[]:l.isNumeric(e)?[l.makeNumeric(e)]:l.isAlphanumeric(e)?[l.makeAlphanumeric(e)]:[l.makeBytes(l.toUtf8ByteArray(e))]}static makeEci(e){let t=[];if(e<0)throw RangeError("ECI assignment value out of range");if(e<128)r(e,8,t);else if(e<16384)r(2,2,t),r(e,14,t);else if(e<1e6)r(6,3,t),r(e,21,t);else throw RangeError("ECI assignment value out of range");return new l(l.Mode.ECI,0,t)}static isNumeric(e){return l.NUMERIC_REGEX.test(e)}static isAlphanumeric(e){return l.ALPHANUMERIC_REGEX.test(e)}getData(){return this.bitData.slice()}static getTotalBits(e,t){let r=0;for(let n of e){let e=n.mode.numCharCountBits(t);if(n.numChars>=1<<e)return 1/0;r+=4+e+n.bitData.length}return r}static toUtf8ByteArray(e){e=encodeURI(e);let t=[];for(let r=0;r<e.length;r++)"%"!=e.charAt(r)?t.push(e.charCodeAt(r)):(t.push(parseInt(e.substr(r+1,2),16)),r+=2);return t}},o=l;o.NUMERIC_REGEX=/^[0-9]*$/,o.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,o.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:",e.QrSegment=o})(l||(l={})),(e=>{let t=class{constructor(e,t){this.ordinal=e,this.formatBits=t}};t.LOW=new t(0,1),t.MEDIUM=new t(1,0),t.QUARTILE=new t(2,3),t.HIGH=new t(3,2),e.Ecc=t})((n=l||(l={})).QrCode||(n.QrCode={})),(e=>{let t=class{constructor(e,t){this.modeBits=e,this.numBitsCharCount=t}numCharCountBits(e){return this.numBitsCharCount[Math.floor((e+7)/17)]}};t.NUMERIC=new t(1,[10,12,14]),t.ALPHANUMERIC=new t(2,[9,11,13]),t.BYTE=new t(4,[8,16,16]),t.KANJI=new t(8,[8,10,12]),t.ECI=new t(7,[0,0,0]),e.Mode=t})((i=l||(l={})).QrSegment||(i.QrSegment={}));var g=l,E={L:g.QrCode.Ecc.LOW,M:g.QrCode.Ecc.MEDIUM,Q:g.QrCode.Ecc.QUARTILE,H:g.QrCode.Ecc.HIGH},M="#FFFFFF",C="#000000";function R(e,t=0){let r=[];return e.forEach(function(e,n){let i=null;e.forEach(function(l,o){if(!l&&null!==i){r.push(`M${i+t} ${n+t}h${o-i}v1H${i+t}z`),i=null;return}if(o===e.length-1){if(!l)return;null===i?r.push(`M${o+t},${n+t} h1v1H${o+t}z`):r.push(`M${i+t},${n+t} h${o+1-i}v1H${i+t}z`);return}l&&null===i&&(i=o)})}),r.join("")}function p(e,t){return e.slice().map((e,r)=>r<t.y||r>=t.y+t.h?e:e.map((e,r)=>(r<t.x||r>=t.x+t.w)&&e))}function w(e,t,r,n){if(null==n)return null;let i=e.length+2*(r?4:0),l=Math.floor(.1*t),o=i/t,s=(n.width||l)*o,a=(n.height||l)*o,h=null==n.x?e.length/2-s/2:n.x*o,u=null==n.y?e.length/2-a/2:n.y*o,c=null;if(n.excavate){let e=Math.floor(h),t=Math.floor(u);c={x:e,y:t,w:Math.ceil(s+h-e),h:Math.ceil(a+u-t)}}return{x:h,y:u,h:a,w:s,excavation:c}}var N=function(){try{new Path2D().addPath(new Path2D)}catch(e){return!1}return!0}();function A(e){let{value:t,size:r=128,level:n="L",bgColor:i=M,fgColor:l=C,includeMargin:o=!1,style:a,imageSettings:h}=e,u=m(e,["value","size","level","bgColor","fgColor","includeMargin","style","imageSettings"]),c=null==h?void 0:h.src,d=(0,s.useRef)(null),A=(0,s.useRef)(null),[v,y]=(0,s.useState)(!1);(0,s.useEffect)(()=>{if(null!=d.current){let e=d.current,s=e.getContext("2d");if(!s)return;let a=g.QrCode.encodeText(t,E[n]).getModules(),u=o?4:0,c=a.length+2*u,f=w(a,r,o,h),m=A.current,M=null!=f&&null!==m&&m.complete&&0!==m.naturalHeight&&0!==m.naturalWidth;M&&null!=f.excavation&&(a=p(a,f.excavation));let C=window.devicePixelRatio||1;e.height=e.width=r*C;let v=r/c*C;s.scale(v,v),s.fillStyle=i,s.fillRect(0,0,c,c),s.fillStyle=l,N?s.fill(new Path2D(R(a,u))):a.forEach(function(e,t){e.forEach(function(e,r){e&&s.fillRect(r+u,t+u,1,1)})}),M&&s.drawImage(m,f.x+u,f.y+u,f.w,f.h)}}),(0,s.useEffect)(()=>{y(!1)},[c]);let P=f({height:r,width:r},a),I=null;return null!=c&&(I=s.createElement("img",{src:c,key:c,style:{display:"none"},onLoad:()=>{y(!0)},ref:A})),s.createElement(s.Fragment,null,s.createElement("canvas",f({style:P,height:r,width:r,ref:d},u)),I)}function v(e){let{value:t,size:r=128,level:n="L",bgColor:i=M,fgColor:l=C,includeMargin:o=!1,imageSettings:a}=e,h=m(e,["value","size","level","bgColor","fgColor","includeMargin","imageSettings"]),u=g.QrCode.encodeText(t,E[n]).getModules(),c=o?4:0,d=u.length+2*c,N=w(u,r,o,a),A=null;null!=a&&null!=N&&(null!=N.excavation&&(u=p(u,N.excavation)),A=s.createElement("image",{xlinkHref:a.src,height:N.h,width:N.w,x:N.x+c,y:N.y+c,preserveAspectRatio:"none"}));let v=R(u,c);return s.createElement("svg",f({height:r,width:r,viewBox:`0 0 ${d} ${d}`},h),s.createElement("path",{fill:i,d:`M0,0 h${d}v${d}H0z`,shapeRendering:"crispEdges"}),s.createElement("path",{fill:l,d:v,shapeRendering:"crispEdges"}),A)}var y=e=>{let{renderAs:t}=e,r=m(e,["renderAs"]);return"svg"===t?s.createElement(v,f({},r)):s.createElement(A,f({},r))},P=r(8243);r(5771);var I=function(){let[e,t]=(0,s.useState)(""),r=(0,s.useRef)(null),n=()=>{var e;let n=null===(e=r.current)||void 0===e?void 0:e.value.trim();n&&t(n)};return(0,s.useEffect)(()=>{n()},[]),(0,o.jsxs)("div",{className:"page-container",children:[(0,o.jsx)("header",{className:"header",children:(0,o.jsx)("a",{href:"https://kinn.kr/",target:"_blank",title:"Kinn's Lounge",children:(0,o.jsx)("img",{loading:"lazy",src:"img/kinn-banner.png",alt:"Kinn's Lounge",className:"banner"})})}),(0,o.jsx)("main",{className:"main",children:(0,o.jsxs)("div",{className:"qr-container",children:[(0,o.jsx)("h1",{className:"title",children:"QR Crafter"}),(0,o.jsx)("label",{htmlFor:"text-input",children:"Enter Text or URL:"}),(0,o.jsx)("input",{type:"text",id:"text-input",ref:r,className:"text-input",placeholder:"Type here",onInput:n}),(0,o.jsx)("div",{id:"result",children:e&&(0,o.jsx)(y,{value:e,size:128})}),(0,o.jsx)("button",{className:"download-button",onClick:()=>{let e=document.querySelector("#result canvas");if(e){let t=document.createElement("a");t.href=e.toDataURL(),t.download="qr.png",t.click()}},children:"Download"})]})}),(0,o.jsx)("footer",{className:"footer",children:(0,o.jsx)(P.Z,{})})]})}},8243:function(e,t,r){"use strict";var n=r(6093),i=r(7437),l=r(2265);function o(){let e=(0,n._)(['\n    font-family: "Verdana";\n    text-align: center;\n    font-size: 25px;\n    color: grey;\n']);return o=function(){return e},e}r(9712).ZP.p(o()),t.Z=function(){let e=(0,l.useRef)(null);return(0,l.useEffect)(()=>{let t=e.current;t&&(t.textContent=new Date().getFullYear().toString())},[]),(0,i.jsx)("div",{id:"footer",className:"body",children:(0,i.jsxs)("p",{children:["\xa9 ",(0,i.jsx)("span",{id:"copyright-year",ref:e})," ",(0,i.jsx)("strong",{children:"Kinn"}),". All Rights Reserved."]})})}},5771:function(){}},function(e){e.O(0,[75,971,69,744],function(){return e(e.s=1223)}),_N_E=e.O()}]);