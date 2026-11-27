var Ju=Object.defineProperty;var Qu=(s,e,t)=>e in s?Ju(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var B=(s,e,t)=>Qu(s,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const hl="172",ed=0,zl=1,td=2,Ch=1,Ph=2,Wn=3,jn=0,Jt=1,It=2,ci=0,as=1,co=2,Gl=3,Vl=4,nd=5,Ai=100,id=101,sd=102,rd=103,ad=104,od=200,ld=201,cd=202,hd=203,ho=204,uo=205,ud=206,dd=207,fd=208,pd=209,md=210,gd=211,_d=212,vd=213,xd=214,fo=0,po=1,mo=2,hs=3,go=4,_o=5,vo=6,xo=7,Lh=0,yd=1,bd=2,hi=0,Md=1,Sd=2,wd=3,Ih=4,Td=5,Ed=6,Ad=7,Wl="attached",Rd="detached",Dh=300,us=301,ds=302,yo=303,bo=304,ra=306,ui=1e3,St=1001,Jr=1002,Qt=1003,Nh=1004,Hs=1005,on=1006,Xr=1007,qn=1008,Kn=1009,Uh=1010,kh=1011,Ks=1012,ul=1013,Pi=1014,An=1015,ar=1016,dl=1017,fl=1018,fs=1020,Oh=35902,Bh=1021,Fh=1022,xn=1023,Hh=1024,zh=1025,os=1026,ps=1027,pl=1028,ml=1029,Gh=1030,gl=1031,_l=1033,qr=33776,Yr=33777,Zr=33778,$r=33779,Mo=35840,So=35841,wo=35842,To=35843,Eo=36196,Ao=37492,Ro=37496,Co=37808,Po=37809,Lo=37810,Io=37811,Do=37812,No=37813,Uo=37814,ko=37815,Oo=37816,Bo=37817,Fo=37818,Ho=37819,zo=37820,Go=37821,jr=36492,Vo=36494,Wo=36495,Vh=36283,Xo=36284,qo=36285,Yo=36286,Js=2300,Qs=2301,pa=2302,Xl=2400,ql=2401,Yl=2402,Cd=2500,Pd=0,Wh=1,Zo=2,Ld=3200,Id=3201,Xh=0,Dd=1,_n="",_t="srgb",qt="srgb-linear",Qr="linear",pt="srgb",ki=7680,Zl=519,Nd=512,Ud=513,kd=514,qh=515,Od=516,Bd=517,Fd=518,Hd=519,$o=35044,$l="300 es",Yn=2e3,ea=2001;class bs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let jl=1234567;const Xs=Math.PI/180,ms=180/Math.PI;function yn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Wt[s&255]+Wt[s>>8&255]+Wt[s>>16&255]+Wt[s>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[t&63|128]+Wt[t>>8&255]+"-"+Wt[t>>16&255]+Wt[t>>24&255]+Wt[n&255]+Wt[n>>8&255]+Wt[n>>16&255]+Wt[n>>24&255]).toLowerCase()}function Ke(s,e,t){return Math.max(e,Math.min(t,s))}function vl(s,e){return(s%e+e)%e}function zd(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Gd(s,e,t){return s!==e?(t-s)/(e-s):0}function qs(s,e,t){return(1-t)*s+t*e}function Vd(s,e,t,n){return qs(s,e,1-Math.exp(-t*n))}function Wd(s,e=1){return e-Math.abs(vl(s,e*2)-e)}function Xd(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function qd(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Yd(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Zd(s,e){return s+Math.random()*(e-s)}function $d(s){return s*(.5-Math.random())}function jd(s){s!==void 0&&(jl=s);let e=jl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Kd(s){return s*Xs}function Jd(s){return s*ms}function Qd(s){return(s&s-1)===0&&s!==0}function ef(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function tf(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function nf(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":s.set(o*h,l*u,l*d,o*c);break;case"YZY":s.set(l*d,o*h,l*u,o*c);break;case"ZXZ":s.set(l*u,l*d,o*h,o*c);break;case"XZX":s.set(o*h,l*g,l*f,o*c);break;case"YXY":s.set(l*f,o*h,l*g,o*c);break;case"ZYZ":s.set(l*g,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function En(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function dt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const zs={DEG2RAD:Xs,RAD2DEG:ms,generateUUID:yn,clamp:Ke,euclideanModulo:vl,mapLinear:zd,inverseLerp:Gd,lerp:qs,damp:Vd,pingpong:Wd,smoothstep:Xd,smootherstep:qd,randInt:Yd,randFloat:Zd,randFloatSpread:$d,seededRandom:jd,degToRad:Kd,radToDeg:Jd,isPowerOfTwo:Qd,ceilPowerOfTwo:ef,floorPowerOfTwo:tf,setQuaternionFromProperEuler:nf,normalize:dt,denormalize:En};class ae{constructor(e=0,t=0){ae.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ye{constructor(e,t,n,i,r,a,o,l,c){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],x=i[1],y=i[4],v=i[7],I=i[2],C=i[5],S=i[8];return r[0]=a*_+o*x+l*I,r[3]=a*m+o*y+l*C,r[6]=a*p+o*v+l*S,r[1]=c*_+h*x+u*I,r[4]=c*m+h*y+u*C,r[7]=c*p+h*v+u*S,r[2]=d*_+f*x+g*I,r[5]=d*m+f*y+g*C,r[8]=d*p+f*v+g*S,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,g=t*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(i*c-h*n)*_,e[2]=(o*n-i*a)*_,e[3]=d*_,e[4]=(h*t-i*l)*_,e[5]=(i*r-o*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ma.makeScale(e,t)),this}rotate(e){return this.premultiply(ma.makeRotation(-e)),this}translate(e,t){return this.premultiply(ma.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ma=new Ye;function Yh(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function er(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function sf(){const s=er("canvas");return s.style.display="block",s}const Kl={};function ns(s){s in Kl||(Kl[s]=!0,console.warn(s))}function rf(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function af(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function of(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Jl=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ql=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function lf(){const s={enabled:!0,workingColorSpace:qt,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===pt&&(i.r=$n(i.r),i.g=$n(i.g),i.b=$n(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===pt&&(i.r=ls(i.r),i.g=ls(i.g),i.b=ls(i.b))),i},fromWorkingColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},toWorkingColorSpace:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===_n?Qr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[qt]:{primaries:e,whitePoint:n,transfer:Qr,toXYZ:Jl,fromXYZ:Ql,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:_t},outputColorSpaceConfig:{drawingBufferColorSpace:_t}},[_t]:{primaries:e,whitePoint:n,transfer:pt,toXYZ:Jl,fromXYZ:Ql,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:_t}}}),s}const et=lf();function $n(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ls(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Oi;class cf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Oi===void 0&&(Oi=er("canvas")),Oi.width=e.width,Oi.height=e.height;const n=Oi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Oi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=er("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=$n(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor($n(t[n]/255)*255):t[n]=$n(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let hf=0;class Zh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hf++}),this.uuid=yn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(ga(i[a].image)):r.push(ga(i[a]))}else r=ga(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function ga(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?cf.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let uf=0;class Dt extends bs{constructor(e=Dt.DEFAULT_IMAGE,t=Dt.DEFAULT_MAPPING,n=St,i=St,r=on,a=qn,o=xn,l=Kn,c=Dt.DEFAULT_ANISOTROPY,h=_n){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:uf++}),this.uuid=yn(),this.name="",this.source=new Zh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ae(0,0),this.repeat=new ae(1,1),this.center=new ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Dh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ui:e.x=e.x-Math.floor(e.x);break;case St:e.x=e.x<0?0:1;break;case Jr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ui:e.y=e.y-Math.floor(e.y);break;case St:e.y=e.y<0?0:1;break;case Jr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Dt.DEFAULT_IMAGE=null;Dt.DEFAULT_MAPPING=Dh;Dt.DEFAULT_ANISOTROPY=1;class lt{constructor(e=0,t=0,n=0,i=1){lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,v=(f+1)/2,I=(p+1)/2,C=(h+d)/4,S=(u+_)/4,R=(g+m)/4;return y>v&&y>I?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=C/n,r=S/n):v>I?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=C/i,r=R/i):I<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(I),n=S/r,i=R/r),this.set(n,i,r,t),this}let x=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(u-_)/x,this.z=(d-h)/x,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this.w=Ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this.w=Ke(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class df extends bs{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Dt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new Zh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Li extends df{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class $h extends Dt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=St,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ff extends Dt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=St,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fi{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=r[a+0],f=r[a+1],g=r[a+2],_=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(u!==_||l!==d||c!==f||h!==g){let m=1-o;const p=l*d+c*f+h*g+u*_,x=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const I=Math.sqrt(y),C=Math.atan2(I,p*x);m=Math.sin(m*C)/I,o=Math.sin(o*C)/I}const v=o*x;if(l=l*m+d*v,c=c*m+f*v,h=h*m+g*v,u=u*m+_*v,m===1-o){const I=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=I,c*=I,h*=I,u*=I}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-o*f,e[t+2]=c*g+h*f+o*d-l*u,e[t+3]=h*g-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(r/2),d=l(n/2),f=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-i)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+c)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ec.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ec.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-r*i),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=i+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return _a.copy(this).projectOnVector(e),this.sub(_a)}reflect(e){return this.sub(_a.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _a=new L,ec=new fi;class ln{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Sn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Sn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Sn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Sn):Sn.fromBufferAttribute(r,a),Sn.applyMatrix4(e.matrixWorld),this.expandByPoint(Sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),dr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),dr.copy(n.boundingBox)),dr.applyMatrix4(e.matrixWorld),this.union(dr)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Sn),Sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(As),fr.subVectors(this.max,As),Bi.subVectors(e.a,As),Fi.subVectors(e.b,As),Hi.subVectors(e.c,As),ei.subVectors(Fi,Bi),ti.subVectors(Hi,Fi),gi.subVectors(Bi,Hi);let t=[0,-ei.z,ei.y,0,-ti.z,ti.y,0,-gi.z,gi.y,ei.z,0,-ei.x,ti.z,0,-ti.x,gi.z,0,-gi.x,-ei.y,ei.x,0,-ti.y,ti.x,0,-gi.y,gi.x,0];return!va(t,Bi,Fi,Hi,fr)||(t=[1,0,0,0,1,0,0,0,1],!va(t,Bi,Fi,Hi,fr))?!1:(pr.crossVectors(ei,ti),t=[pr.x,pr.y,pr.z],va(t,Bi,Fi,Hi,fr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Bn=[new L,new L,new L,new L,new L,new L,new L,new L],Sn=new L,dr=new ln,Bi=new L,Fi=new L,Hi=new L,ei=new L,ti=new L,gi=new L,As=new L,fr=new L,pr=new L,_i=new L;function va(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){_i.fromArray(s,r);const o=i.x*Math.abs(_i.x)+i.y*Math.abs(_i.y)+i.z*Math.abs(_i.z),l=e.dot(_i),c=t.dot(_i),h=n.dot(_i);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const pf=new ln,Rs=new L,xa=new L;class Dn{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):pf.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Rs.subVectors(e,this.center);const t=Rs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Rs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Rs.copy(e.center).add(xa)),this.expandByPoint(Rs.copy(e.center).sub(xa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Fn=new L,ya=new L,mr=new L,ni=new L,ba=new L,gr=new L,Ma=new L;class aa{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Fn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Fn.copy(this.origin).addScaledVector(this.direction,t),Fn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ya.copy(e).add(t).multiplyScalar(.5),mr.copy(t).sub(e).normalize(),ni.copy(this.origin).sub(ya);const r=e.distanceTo(t)*.5,a=-this.direction.dot(mr),o=ni.dot(this.direction),l=-ni.dot(mr),c=ni.lengthSq(),h=Math.abs(1-a*a);let u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(ya).addScaledVector(mr,d),f}intersectSphere(e,t){Fn.subVectors(e.center,this.origin);const n=Fn.dot(this.direction),i=Fn.dot(Fn)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Fn)!==null}intersectTriangle(e,t,n,i,r){ba.subVectors(t,e),gr.subVectors(n,e),Ma.crossVectors(ba,gr);let a=this.direction.dot(Ma),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ni.subVectors(this.origin,e);const l=o*this.direction.dot(gr.crossVectors(ni,gr));if(l<0)return null;const c=o*this.direction.dot(ba.cross(ni));if(c<0||l+c>a)return null;const h=-o*ni.dot(Ma);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xe{constructor(e,t,n,i,r,a,o,l,c,h,u,d,f,g,_,m){Xe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,h,u,d,f,g,_,m)}set(e,t,n,i,r,a,o,l,c,h,u,d,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/zi.setFromMatrixColumn(e,0).length(),r=1/zi.setFromMatrixColumn(e,1).length(),a=1/zi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=a*h,f=a*u,g=o*h,_=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-_*c,t[9]=-o*l,t[2]=_-d*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,g=c*h,_=c*u;t[0]=d+_*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=_+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,g=c*h,_=c*u;t[0]=d-_*o,t[4]=-a*u,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=_-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*h,f=a*u,g=o*h,_=o*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+_,t[1]=l*u,t[5]=_*c+d,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=_-d*u,t[8]=g*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-_*u}else if(e.order==="XZY"){const d=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+_,t[5]=a*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=o*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(mf,e,gf)}lookAt(e,t,n){const i=this.elements;return rn.subVectors(e,t),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),ii.crossVectors(n,rn),ii.lengthSq()===0&&(Math.abs(n.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),ii.crossVectors(n,rn)),ii.normalize(),_r.crossVectors(rn,ii),i[0]=ii.x,i[4]=_r.x,i[8]=rn.x,i[1]=ii.y,i[5]=_r.y,i[9]=rn.y,i[2]=ii.z,i[6]=_r.z,i[10]=rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],x=n[3],y=n[7],v=n[11],I=n[15],C=i[0],S=i[4],R=i[8],T=i[12],M=i[1],D=i[5],z=i[9],k=i[13],G=i[2],Y=i[6],W=i[10],Q=i[14],X=i[3],ue=i[7],me=i[11],be=i[15];return r[0]=a*C+o*M+l*G+c*X,r[4]=a*S+o*D+l*Y+c*ue,r[8]=a*R+o*z+l*W+c*me,r[12]=a*T+o*k+l*Q+c*be,r[1]=h*C+u*M+d*G+f*X,r[5]=h*S+u*D+d*Y+f*ue,r[9]=h*R+u*z+d*W+f*me,r[13]=h*T+u*k+d*Q+f*be,r[2]=g*C+_*M+m*G+p*X,r[6]=g*S+_*D+m*Y+p*ue,r[10]=g*R+_*z+m*W+p*me,r[14]=g*T+_*k+m*Q+p*be,r[3]=x*C+y*M+v*G+I*X,r[7]=x*S+y*D+v*Y+I*ue,r[11]=x*R+y*z+v*W+I*me,r[15]=x*T+y*k+v*Q+I*be,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*l*u-i*c*u-r*o*d+n*c*d+i*o*f-n*l*f)+_*(+t*l*f-t*c*d+r*a*d-i*a*f+i*c*h-r*l*h)+m*(+t*c*u-t*o*f-r*a*u+n*a*f+r*o*h-n*c*h)+p*(-i*o*h-t*l*u+t*o*d+i*a*u-n*a*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],x=u*m*c-_*d*c+_*l*f-o*m*f-u*l*p+o*d*p,y=g*d*c-h*m*c-g*l*f+a*m*f+h*l*p-a*d*p,v=h*_*c-g*u*c+g*o*f-a*_*f-h*o*p+a*u*p,I=g*u*l-h*_*l-g*o*d+a*_*d+h*o*m-a*u*m,C=t*x+n*y+i*v+r*I;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/C;return e[0]=x*S,e[1]=(_*d*r-u*m*r-_*i*f+n*m*f+u*i*p-n*d*p)*S,e[2]=(o*m*r-_*l*r+_*i*c-n*m*c-o*i*p+n*l*p)*S,e[3]=(u*l*r-o*d*r-u*i*c+n*d*c+o*i*f-n*l*f)*S,e[4]=y*S,e[5]=(h*m*r-g*d*r+g*i*f-t*m*f-h*i*p+t*d*p)*S,e[6]=(g*l*r-a*m*r-g*i*c+t*m*c+a*i*p-t*l*p)*S,e[7]=(a*d*r-h*l*r+h*i*c-t*d*c-a*i*f+t*l*f)*S,e[8]=v*S,e[9]=(g*u*r-h*_*r-g*n*f+t*_*f+h*n*p-t*u*p)*S,e[10]=(a*_*r-g*o*r+g*n*c-t*_*c-a*n*p+t*o*p)*S,e[11]=(h*o*r-a*u*r-h*n*c+t*u*c+a*n*f-t*o*f)*S,e[12]=I*S,e[13]=(h*_*i-g*u*i+g*n*d-t*_*d-h*n*m+t*u*m)*S,e[14]=(g*o*i-a*_*i-g*n*l+t*_*l+a*n*m-t*o*m)*S,e[15]=(a*u*i-h*o*i+h*n*l-t*u*l-a*n*d+t*o*d)*S,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,g=r*u,_=a*h,m=a*u,p=o*u,x=l*c,y=l*h,v=l*u,I=n.x,C=n.y,S=n.z;return i[0]=(1-(_+p))*I,i[1]=(f+v)*I,i[2]=(g-y)*I,i[3]=0,i[4]=(f-v)*C,i[5]=(1-(d+p))*C,i[6]=(m+x)*C,i[7]=0,i[8]=(g+y)*S,i[9]=(m-x)*S,i[10]=(1-(d+_))*S,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=zi.set(i[0],i[1],i[2]).length();const a=zi.set(i[4],i[5],i[6]).length(),o=zi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],wn.copy(this);const c=1/r,h=1/a,u=1/o;return wn.elements[0]*=c,wn.elements[1]*=c,wn.elements[2]*=c,wn.elements[4]*=h,wn.elements[5]*=h,wn.elements[6]*=h,wn.elements[8]*=u,wn.elements[9]*=u,wn.elements[10]*=u,t.setFromRotationMatrix(wn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=Yn){const l=this.elements,c=2*r/(t-e),h=2*r/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i);let f,g;if(o===Yn)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===ea)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=Yn){const l=this.elements,c=1/(t-e),h=1/(n-i),u=1/(a-r),d=(t+e)*c,f=(n+i)*h;let g,_;if(o===Yn)g=(a+r)*u,_=-2*u;else if(o===ea)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const zi=new L,wn=new Xe,mf=new L(0,0,0),gf=new L(1,1,1),ii=new L,_r=new L,rn=new L,tc=new Xe,nc=new fi;class Pn{constructor(e=0,t=0,n=0,i=Pn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ke(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return tc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(tc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return nc.setFromEuler(this),this.setFromQuaternion(nc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pn.DEFAULT_ORDER="XYZ";class jh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _f=0;const ic=new L,Gi=new fi,Hn=new Xe,vr=new L,Cs=new L,vf=new L,xf=new fi,sc=new L(1,0,0),rc=new L(0,1,0),ac=new L(0,0,1),oc={type:"added"},yf={type:"removed"},Vi={type:"childadded",child:null},Sa={type:"childremoved",child:null};class vt extends bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_f++}),this.uuid=yn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vt.DEFAULT_UP.clone();const e=new L,t=new Pn,n=new fi,i=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Xe},normalMatrix:{value:new Ye}}),this.matrix=new Xe,this.matrixWorld=new Xe,this.matrixAutoUpdate=vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Gi.setFromAxisAngle(e,t),this.quaternion.multiply(Gi),this}rotateOnWorldAxis(e,t){return Gi.setFromAxisAngle(e,t),this.quaternion.premultiply(Gi),this}rotateX(e){return this.rotateOnAxis(sc,e)}rotateY(e){return this.rotateOnAxis(rc,e)}rotateZ(e){return this.rotateOnAxis(ac,e)}translateOnAxis(e,t){return ic.copy(e).applyQuaternion(this.quaternion),this.position.add(ic.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(sc,e)}translateY(e){return this.translateOnAxis(rc,e)}translateZ(e){return this.translateOnAxis(ac,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Hn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?vr.copy(e):vr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Cs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hn.lookAt(Cs,vr,this.up):Hn.lookAt(vr,Cs,this.up),this.quaternion.setFromRotationMatrix(Hn),i&&(Hn.extractRotation(i.matrixWorld),Gi.setFromRotationMatrix(Hn),this.quaternion.premultiply(Gi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(oc),Vi.child=e,this.dispatchEvent(Vi),Vi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(yf),Sa.child=e,this.dispatchEvent(Sa),Sa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Hn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Hn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Hn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(oc),Vi.child=e,this.dispatchEvent(Vi),Vi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,e,vf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,xf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}vt.DEFAULT_UP=new L(0,1,0);vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Tn=new L,zn=new L,wa=new L,Gn=new L,Wi=new L,Xi=new L,lc=new L,Ta=new L,Ea=new L,Aa=new L,Ra=new lt,Ca=new lt,Pa=new lt;class vn{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Tn.subVectors(e,t),i.cross(Tn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Tn.subVectors(i,t),zn.subVectors(n,t),wa.subVectors(e,t);const a=Tn.dot(Tn),o=Tn.dot(zn),l=Tn.dot(wa),c=zn.dot(zn),h=zn.dot(wa),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Gn)===null?!1:Gn.x>=0&&Gn.y>=0&&Gn.x+Gn.y<=1}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,Gn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Gn.x),l.addScaledVector(a,Gn.y),l.addScaledVector(o,Gn.z),l)}static getInterpolatedAttribute(e,t,n,i,r,a){return Ra.setScalar(0),Ca.setScalar(0),Pa.setScalar(0),Ra.fromBufferAttribute(e,t),Ca.fromBufferAttribute(e,n),Pa.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Ra,r.x),a.addScaledVector(Ca,r.y),a.addScaledVector(Pa,r.z),a}static isFrontFacing(e,t,n,i){return Tn.subVectors(n,t),zn.subVectors(e,t),Tn.cross(zn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Tn.subVectors(this.c,this.b),zn.subVectors(this.a,this.b),Tn.cross(zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return vn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return vn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return vn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return vn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;Wi.subVectors(i,n),Xi.subVectors(r,n),Ta.subVectors(e,n);const l=Wi.dot(Ta),c=Xi.dot(Ta);if(l<=0&&c<=0)return t.copy(n);Ea.subVectors(e,i);const h=Wi.dot(Ea),u=Xi.dot(Ea);if(h>=0&&u<=h)return t.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Wi,a);Aa.subVectors(e,r);const f=Wi.dot(Aa),g=Xi.dot(Aa);if(g>=0&&f<=g)return t.copy(r);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Xi,o);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return lc.subVectors(r,i),o=(u-h)/(u-h+(f-g)),t.copy(i).addScaledVector(lc,o);const p=1/(m+_+d);return a=_*p,o=d*p,t.copy(n).addScaledVector(Wi,a).addScaledVector(Xi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Kh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},si={h:0,s:0,l:0},xr={h:0,s:0,l:0};function La(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class De{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=_t){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=et.workingColorSpace){return this.r=e,this.g=t,this.b=n,et.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=et.workingColorSpace){if(e=vl(e,1),t=Ke(t,0,1),n=Ke(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=La(a,r,e+1/3),this.g=La(a,r,e),this.b=La(a,r,e-1/3)}return et.toWorkingColorSpace(this,i),this}setStyle(e,t=_t){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=_t){const n=Kh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$n(e.r),this.g=$n(e.g),this.b=$n(e.b),this}copyLinearToSRGB(e){return this.r=ls(e.r),this.g=ls(e.g),this.b=ls(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_t){return et.fromWorkingColorSpace(Xt.copy(this),e),Math.round(Ke(Xt.r*255,0,255))*65536+Math.round(Ke(Xt.g*255,0,255))*256+Math.round(Ke(Xt.b*255,0,255))}getHexString(e=_t){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.fromWorkingColorSpace(Xt.copy(this),t);const n=Xt.r,i=Xt.g,r=Xt.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=et.workingColorSpace){return et.fromWorkingColorSpace(Xt.copy(this),t),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=_t){et.fromWorkingColorSpace(Xt.copy(this),e);const t=Xt.r,n=Xt.g,i=Xt.b;return e!==_t?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(si),this.setHSL(si.h+e,si.s+t,si.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(si),e.getHSL(xr);const n=qs(si.h,xr.h,t),i=qs(si.s,xr.s,t),r=qs(si.l,xr.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xt=new De;De.NAMES=Kh;let bf=0;class Rn extends bs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bf++}),this.uuid=yn(),this.name="",this.type="Material",this.blending=as,this.side=jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ho,this.blendDst=uo,this.blendEquation=Ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new De(0,0,0),this.blendAlpha=0,this.depthFunc=hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ki,this.stencilZFail=ki,this.stencilZPass=ki,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==as&&(n.blending=this.blending),this.side!==jn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ho&&(n.blendSrc=this.blendSrc),this.blendDst!==uo&&(n.blendDst=this.blendDst),this.blendEquation!==Ai&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==hs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ki&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ki&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ki&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Le extends Rn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.combine=Lh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Rt=new L,yr=new ae;class Ft{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=$o,this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)yr.fromBufferAttribute(this,t),yr.applyMatrix3(e),this.setXY(t,yr.x,yr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix3(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix4(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyNormalMatrix(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.transformDirection(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=En(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=dt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=En(t,this.array)),t}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=En(t,this.array)),t}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=En(t,this.array)),t}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=En(t,this.array)),t}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),i=dt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),i=dt(i,this.array),r=dt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==$o&&(e.usage=this.usage),e}}class Jh extends Ft{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Qh extends Ft{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class gt extends Ft{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Mf=0;const pn=new Xe,Ia=new vt,qi=new L,an=new ln,Ps=new ln,kt=new L;class Tt extends bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mf++}),this.uuid=yn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Yh(e)?Qh:Jh)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ye().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return pn.makeRotationFromQuaternion(e),this.applyMatrix4(pn),this}rotateX(e){return pn.makeRotationX(e),this.applyMatrix4(pn),this}rotateY(e){return pn.makeRotationY(e),this.applyMatrix4(pn),this}rotateZ(e){return pn.makeRotationZ(e),this.applyMatrix4(pn),this}translate(e,t,n){return pn.makeTranslation(e,t,n),this.applyMatrix4(pn),this}scale(e,t,n){return pn.makeScale(e,t,n),this.applyMatrix4(pn),this}lookAt(e){return Ia.lookAt(e),Ia.updateMatrix(),this.applyMatrix4(Ia.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qi).negate(),this.translate(qi.x,qi.y,qi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new gt(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ln);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];an.setFromBufferAttribute(r),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(an.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Ps.setFromBufferAttribute(o),this.morphTargetsRelative?(kt.addVectors(an.min,Ps.min),an.expandByPoint(kt),kt.addVectors(an.max,Ps.max),an.expandByPoint(kt)):(an.expandByPoint(Ps.min),an.expandByPoint(Ps.max))}an.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)kt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(kt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)kt.fromBufferAttribute(o,c),l&&(qi.fromBufferAttribute(e,c),kt.add(qi)),i=Math.max(i,n.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ft(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let R=0;R<n.count;R++)o[R]=new L,l[R]=new L;const c=new L,h=new L,u=new L,d=new ae,f=new ae,g=new ae,_=new L,m=new L;function p(R,T,M){c.fromBufferAttribute(n,R),h.fromBufferAttribute(n,T),u.fromBufferAttribute(n,M),d.fromBufferAttribute(r,R),f.fromBufferAttribute(r,T),g.fromBufferAttribute(r,M),h.sub(c),u.sub(c),f.sub(d),g.sub(d);const D=1/(f.x*g.y-g.x*f.y);isFinite(D)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(D),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(D),o[R].add(_),o[T].add(_),o[M].add(_),l[R].add(m),l[T].add(m),l[M].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let R=0,T=x.length;R<T;++R){const M=x[R],D=M.start,z=M.count;for(let k=D,G=D+z;k<G;k+=3)p(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const y=new L,v=new L,I=new L,C=new L;function S(R){I.fromBufferAttribute(i,R),C.copy(I);const T=o[R];y.copy(T),y.sub(I.multiplyScalar(I.dot(T))).normalize(),v.crossVectors(C,T);const D=v.dot(l[R])<0?-1:1;a.setXYZW(R,y.x,y.y,y.z,D)}for(let R=0,T=x.length;R<T;++R){const M=x[R],D=M.start,z=M.count;for(let k=D,G=D+z;k<G;k+=3)S(e.getX(k+0)),S(e.getX(k+1)),S(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ft(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new L,r=new L,a=new L,o=new L,l=new L,c=new L,h=new L,u=new L;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)kt.fromBufferAttribute(e,t),kt.normalize(),e.setXYZ(t,kt.x,kt.y,kt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new Ft(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Tt,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const cc=new Xe,vi=new aa,br=new Dn,hc=new L,Mr=new L,Sr=new L,wr=new L,Da=new L,Tr=new L,uc=new L,Er=new L;class A extends vt{constructor(e=new Tt,t=new Le){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){Tr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(Da.fromBufferAttribute(u,e),a?Tr.addScaledVector(Da,h):Tr.addScaledVector(Da.sub(t),h))}t.add(Tr)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),br.copy(n.boundingSphere),br.applyMatrix4(r),vi.copy(e.ray).recast(e.near),!(br.containsPoint(vi.origin)===!1&&(vi.intersectSphere(br,hc)===null||vi.origin.distanceToSquared(hc)>(e.far-e.near)**2))&&(cc.copy(r).invert(),vi.copy(e.ray).applyMatrix4(cc),!(n.boundingBox!==null&&vi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,vi)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],x=Math.max(m.start,f.start),y=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let v=x,I=y;v<I;v+=3){const C=o.getX(v),S=o.getX(v+1),R=o.getX(v+2);i=Ar(this,p,e,n,c,h,u,C,S,R),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const x=o.getX(m),y=o.getX(m+1),v=o.getX(m+2);i=Ar(this,a,e,n,c,h,u,x,y,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],x=Math.max(m.start,f.start),y=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=x,I=y;v<I;v+=3){const C=v,S=v+1,R=v+2;i=Ar(this,p,e,n,c,h,u,C,S,R),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const x=m,y=m+1,v=m+2;i=Ar(this,a,e,n,c,h,u,x,y,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Sf(s,e,t,n,i,r,a,o){let l;if(e.side===Jt?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===jn,o),l===null)return null;Er.copy(o),Er.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Er);return c<t.near||c>t.far?null:{distance:c,point:Er.clone(),object:s}}function Ar(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,Mr),s.getVertexPosition(l,Sr),s.getVertexPosition(c,wr);const h=Sf(s,e,t,n,Mr,Sr,wr,uc);if(h){const u=new L;vn.getBarycoord(uc,Mr,Sr,wr,u),i&&(h.uv=vn.getInterpolatedAttribute(i,o,l,c,u,new ae)),r&&(h.uv1=vn.getInterpolatedAttribute(r,o,l,c,u,new ae)),a&&(h.normal=vn.getInterpolatedAttribute(a,o,l,c,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new L,materialIndex:0};vn.getNormal(Mr,Sr,wr,d.normal),h.face=d,h.barycoord=u}return h}class $ extends Tt{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new gt(c,3)),this.setAttribute("normal",new gt(h,3)),this.setAttribute("uv",new gt(u,2));function g(_,m,p,x,y,v,I,C,S,R,T){const M=v/S,D=I/R,z=v/2,k=I/2,G=C/2,Y=S+1,W=R+1;let Q=0,X=0;const ue=new L;for(let me=0;me<W;me++){const be=me*D-k;for(let ze=0;ze<Y;ze++){const it=ze*M-z;ue[_]=it*x,ue[m]=be*y,ue[p]=G,c.push(ue.x,ue.y,ue.z),ue[_]=0,ue[m]=0,ue[p]=C>0?1:-1,h.push(ue.x,ue.y,ue.z),u.push(ze/S),u.push(1-me/R),Q+=1}}for(let me=0;me<R;me++)for(let be=0;be<S;be++){const ze=d+be+Y*me,it=d+be+Y*(me+1),Z=d+(be+1)+Y*(me+1),le=d+(be+1)+Y*me;l.push(ze,it,le),l.push(it,Z,le),X+=6}o.addGroup(f,X,T),f+=X,d+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function gs(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function jt(s){const e={};for(let t=0;t<s.length;t++){const n=gs(s[t]);for(const i in n)e[i]=n[i]}return e}function wf(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function eu(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const Tf={clone:gs,merge:jt};var Ef=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Af=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ln extends Rn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ef,this.fragmentShader=Af,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=gs(e.uniforms),this.uniformsGroups=wf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class tu extends vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xe,this.projectionMatrix=new Xe,this.projectionMatrixInverse=new Xe,this.coordinateSystem=Yn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ri=new L,dc=new ae,fc=new ae;class Kt extends tu{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ms*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Xs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ms*2*Math.atan(Math.tan(Xs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ri.x,ri.y).multiplyScalar(-e/ri.z),ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ri.x,ri.y).multiplyScalar(-e/ri.z)}getViewSize(e,t){return this.getViewBounds(e,dc,fc),t.subVectors(fc,dc)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Xs*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Yi=-90,Zi=1;class Rf extends vt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Kt(Yi,Zi,e,t);i.layers=this.layers,this.add(i);const r=new Kt(Yi,Zi,e,t);r.layers=this.layers,this.add(r);const a=new Kt(Yi,Zi,e,t);a.layers=this.layers,this.add(a);const o=new Kt(Yi,Zi,e,t);o.layers=this.layers,this.add(o);const l=new Kt(Yi,Zi,e,t);l.layers=this.layers,this.add(l);const c=new Kt(Yi,Zi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Yn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ea)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class nu extends Dt{constructor(e,t,n,i,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:us,super(e,t,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Cf extends Li{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new nu(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:on}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new $(5,5,5),r=new Ln({name:"CubemapFromEquirect",uniforms:gs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Jt,blending:ci});r.uniforms.tEquirect.value=t;const a=new A(i,r),o=t.minFilter;return t.minFilter===qn&&(t.minFilter=on),new Rf(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}class is{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new De(e),this.density=t}clone(){return new is(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class pc extends vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pn,this.environmentIntensity=1,this.environmentRotation=new Pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class iu{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=$o,this.updateRanges=[],this.version=0,this.uuid=yn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Zt=new L;class tr{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=En(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=dt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=En(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=En(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=En(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=En(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),i=dt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),i=dt(i,this.array),r=dt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Ft(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new tr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class su extends Rn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new De(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let $i;const Ls=new L,ji=new L,Ki=new L,Ji=new ae,Is=new ae,ru=new Xe,Rr=new L,Ds=new L,Cr=new L,mc=new ae,Na=new ae,gc=new ae;class Pf extends vt{constructor(e=new su){if(super(),this.isSprite=!0,this.type="Sprite",$i===void 0){$i=new Tt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new iu(t,5);$i.setIndex([0,1,2,0,2,3]),$i.setAttribute("position",new tr(n,3,0,!1)),$i.setAttribute("uv",new tr(n,2,3,!1))}this.geometry=$i,this.material=e,this.center=new ae(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ji.setFromMatrixScale(this.matrixWorld),ru.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ki.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ji.multiplyScalar(-Ki.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const a=this.center;Pr(Rr.set(-.5,-.5,0),Ki,a,ji,i,r),Pr(Ds.set(.5,-.5,0),Ki,a,ji,i,r),Pr(Cr.set(.5,.5,0),Ki,a,ji,i,r),mc.set(0,0),Na.set(1,0),gc.set(1,1);let o=e.ray.intersectTriangle(Rr,Ds,Cr,!1,Ls);if(o===null&&(Pr(Ds.set(-.5,.5,0),Ki,a,ji,i,r),Na.set(0,1),o=e.ray.intersectTriangle(Rr,Cr,Ds,!1,Ls),o===null))return;const l=e.ray.origin.distanceTo(Ls);l<e.near||l>e.far||t.push({distance:l,point:Ls.clone(),uv:vn.getInterpolation(Ls,Rr,Ds,Cr,mc,Na,gc,new ae),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Pr(s,e,t,n,i,r){Ji.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(Is.x=r*Ji.x-i*Ji.y,Is.y=i*Ji.x+r*Ji.y):Is.copy(Ji),s.copy(e),s.x+=Is.x,s.y+=Is.y,s.applyMatrix4(ru)}const _c=new L,vc=new lt,xc=new lt,Lf=new L,yc=new Xe,Lr=new L,Ua=new Dn,bc=new Xe,ka=new aa;class If extends A{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Wl,this.bindMatrix=new Xe,this.bindMatrixInverse=new Xe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ln),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Lr),this.boundingBox.expandByPoint(Lr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Dn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Lr),this.boundingSphere.expandByPoint(Lr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ua.copy(this.boundingSphere),Ua.applyMatrix4(i),e.ray.intersectsSphere(Ua)!==!1&&(bc.copy(i).invert(),ka.copy(e.ray).applyMatrix4(bc),!(this.boundingBox!==null&&ka.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ka)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new lt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Wl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Rd?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;vc.fromBufferAttribute(i.attributes.skinIndex,e),xc.fromBufferAttribute(i.attributes.skinWeight,e),_c.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=xc.getComponent(r);if(a!==0){const o=vc.getComponent(r);yc.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Lf.copy(_c).applyMatrix4(yc),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class au extends vt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class ou extends Dt{constructor(e=null,t=1,n=1,i,r,a,o,l,c=Qt,h=Qt,u,d){super(null,a,o,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Mc=new Xe,Df=new Xe;class xl{constructor(e=[],t=[]){this.uuid=yn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Xe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Xe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:Df;Mc.multiplyMatrices(o,t[r]),Mc.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new xl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new ou(t,e,e,xn,An);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new au),this.bones.push(a),this.boneInverses.push(new Xe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class jo extends Ft{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Qi=new Xe,Sc=new Xe,Ir=[],wc=new ln,Nf=new Xe,Ns=new A,Us=new Dn;class Uf extends A{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new jo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Nf)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ln),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Qi),wc.copy(e.boundingBox).applyMatrix4(Qi),this.boundingBox.union(wc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Dn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Qi),Us.copy(e.boundingSphere).applyMatrix4(Qi),this.boundingSphere.union(Us)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Ns.geometry=this.geometry,Ns.material=this.material,Ns.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Us.copy(this.boundingSphere),Us.applyMatrix4(n),e.ray.intersectsSphere(Us)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Qi),Sc.multiplyMatrices(n,Qi),Ns.matrixWorld=Sc,Ns.raycast(e,Ir);for(let a=0,o=Ir.length;a<o;a++){const l=Ir[a];l.instanceId=r,l.object=this,t.push(l)}Ir.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new jo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new ou(new Float32Array(i*this.count),i,this.count,pl,An));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const Oa=new L,kf=new L,Of=new Ye;class wi{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Oa.subVectors(n,t).cross(kf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Oa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Of.getNormalMatrix(e),i=this.coplanarPoint(Oa).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xi=new Dn,Dr=new L;class yl{constructor(e=new wi,t=new wi,n=new wi,i=new wi,r=new wi,a=new wi){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Yn){const n=this.planes,i=e.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],f=i[8],g=i[9],_=i[10],m=i[11],p=i[12],x=i[13],y=i[14],v=i[15];if(n[0].setComponents(l-r,d-c,m-f,v-p).normalize(),n[1].setComponents(l+r,d+c,m+f,v+p).normalize(),n[2].setComponents(l+a,d+h,m+g,v+x).normalize(),n[3].setComponents(l-a,d-h,m-g,v-x).normalize(),n[4].setComponents(l-o,d-u,m-_,v-y).normalize(),t===Yn)n[5].setComponents(l+o,d+u,m+_,v+y).normalize();else if(t===ea)n[5].setComponents(o,u,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),xi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xi)}intersectsSprite(e){return xi.center.set(0,0,0),xi.radius=.7071067811865476,xi.applyMatrix4(e.matrixWorld),this.intersectsSphere(xi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Dr.x=i.normal.x>0?e.max.x:e.min.x,Dr.y=i.normal.y>0?e.max.y:e.min.y,Dr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Dr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class or extends Rn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new De(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ta=new L,na=new L,Tc=new Xe,ks=new aa,Nr=new Dn,Ba=new L,Ec=new L;class Ms extends vt{constructor(e=new Tt,t=new or){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)ta.fromBufferAttribute(t,i-1),na.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=ta.distanceTo(na);e.setAttribute("lineDistance",new gt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Nr.copy(n.boundingSphere),Nr.applyMatrix4(i),Nr.radius+=r,e.ray.intersectsSphere(Nr)===!1)return;Tc.copy(i).invert(),ks.copy(e.ray).applyMatrix4(Tc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=c){const p=h.getX(_),x=h.getX(_+1),y=Ur(this,e,ks,l,p,x);y&&t.push(y)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(f),p=Ur(this,e,ks,l,_,m);p&&t.push(p)}}else{const f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=c){const p=Ur(this,e,ks,l,_,_+1);p&&t.push(p)}if(this.isLineLoop){const _=Ur(this,e,ks,l,g-1,f);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Ur(s,e,t,n,i,r){const a=s.geometry.attributes.position;if(ta.fromBufferAttribute(a,i),na.fromBufferAttribute(a,r),t.distanceSqToSegment(ta,na,Ba,Ec)>n)return;Ba.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(Ba);if(!(l<e.near||l>e.far))return{distance:l,point:Ec.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const Ac=new L,Rc=new L;class Bf extends Ms{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Ac.fromBufferAttribute(t,i),Rc.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Ac.distanceTo(Rc);e.setAttribute("lineDistance",new gt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ff extends Ms{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class bl extends Rn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new De(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Cc=new Xe,Ko=new aa,kr=new Dn,Or=new L;class lu extends vt{constructor(e=new Tt,t=new bl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),kr.copy(n.boundingSphere),kr.applyMatrix4(i),kr.radius+=r,e.ray.intersectsSphere(kr)===!1)return;Cc.copy(i).invert(),Ko.copy(e.ray).applyMatrix4(Cc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,_=f;g<_;g++){const m=c.getX(g);Or.fromBufferAttribute(u,m),Pc(Or,m,l,i,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,_=f;g<_;g++)Or.fromBufferAttribute(u,g),Pc(Or,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Pc(s,e,t,n,i,r,a){const o=Ko.distanceSqToPoint(s);if(o<t){const l=new L;Ko.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Ce extends vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Hf extends Dt{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class cu extends Dt{constructor(e,t,n,i,r,a,o,l,c,h=os){if(h!==os&&h!==ps)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===os&&(n=Pi),n===void 0&&h===ps&&(n=fs),super(null,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Qt,this.minFilter=l!==void 0?l:Qt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Nn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);const h=n[i],d=n[i+1]-h,f=(a-h)/d;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),l=t||(a.isVector2?new ae:new L);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new L,i=[],r=[],a=[],o=new L,l=new Xe;for(let f=0;f<=e;f++){const g=f/e;i[f]=this.getTangentAt(g,new L)}r[0]=new L,a[0]=new L;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Ke(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(Ke(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),a[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ml extends Nn{constructor(e=0,t=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ae){const n=t,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class zf extends Ml{constructor(e,t,n,i,r,a){super(e,t,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Sl(){let s=0,e=0,t=0,n=0;function i(r,a,o,l){s=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,i(a,o,d,f)},calc:function(r){const a=r*r,o=a*r;return s+e*r+t*a+n*o}}}const Br=new L,Fa=new Sl,Ha=new Sl,za=new Sl;class hu extends Nn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new L){const n=t,i=this.points,r=i.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%r]:(Br.subVectors(i[0],i[1]).add(i[0]),c=Br);const u=i[o%r],d=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(Br.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Br),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Fa.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,_,m),Ha.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,_,m),za.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(Fa.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Ha.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),za.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Fa.calc(l),Ha.calc(l),za.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new L().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Lc(s,e,t,n,i){const r=(n-e)*.5,a=(i-t)*.5,o=s*s,l=s*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*s+t}function Gf(s,e){const t=1-s;return t*t*e}function Vf(s,e){return 2*(1-s)*s*e}function Wf(s,e){return s*s*e}function Ys(s,e,t,n){return Gf(s,e)+Vf(s,t)+Wf(s,n)}function Xf(s,e){const t=1-s;return t*t*t*e}function qf(s,e){const t=1-s;return 3*t*t*s*e}function Yf(s,e){return 3*(1-s)*s*s*e}function Zf(s,e){return s*s*s*e}function Zs(s,e,t,n,i){return Xf(s,e)+qf(s,t)+Yf(s,n)+Zf(s,i)}class uu extends Nn{constructor(e=new ae,t=new ae,n=new ae,i=new ae){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ae){const n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Zs(e,i.x,r.x,a.x,o.x),Zs(e,i.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class $f extends Nn{constructor(e=new L,t=new L,n=new L,i=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new L){const n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Zs(e,i.x,r.x,a.x,o.x),Zs(e,i.y,r.y,a.y,o.y),Zs(e,i.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class du extends Nn{constructor(e=new ae,t=new ae){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ae){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ae){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class jf extends Nn{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class fu extends Nn{constructor(e=new ae,t=new ae,n=new ae){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ae){const n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(Ys(e,i.x,r.x,a.x),Ys(e,i.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Kf extends Nn{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){const n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(Ys(e,i.x,r.x,a.x),Ys(e,i.y,r.y,a.y),Ys(e,i.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class pu extends Nn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ae){const n=t,i=this.points,r=(i.length-1)*e,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(Lc(o,l.x,c.x,h.x,u.x),Lc(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new ae().fromArray(i))}return this}}var Jo=Object.freeze({__proto__:null,ArcCurve:zf,CatmullRomCurve3:hu,CubicBezierCurve:uu,CubicBezierCurve3:$f,EllipseCurve:Ml,LineCurve:du,LineCurve3:jf,QuadraticBezierCurve:fu,QuadraticBezierCurve3:Kf,SplineCurve:pu});class Jf extends Nn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Jo[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const a=i[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const a=r[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Jo[i.type]().fromJSON(i))}return this}}class Qo extends Jf{constructor(e){super(),this.type="Path",this.currentPoint=new ae,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new du(this.currentPoint.clone(),new ae(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new fu(this.currentPoint.clone(),new ae(e,t),new ae(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,a){const o=new uu(this.currentPoint.clone(),new ae(e,t),new ae(n,i),new ae(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new pu(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,r,a),this}absarc(e,t,n,i,r,a){return this.absellipse(e,t,n,n,i,r,a),this}ellipse(e,t,n,i,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,r,a,o,l),this}absellipse(e,t,n,i,r,a,o,l){const c=new Ml(e,t,n,i,r,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class wl extends Tt{constructor(e=[new ae(0,-.5),new ae(.5,0),new ae(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=Ke(i,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],h=1/t,u=new L,d=new ae,f=new L,g=new L,_=new L;let m=0,p=0;for(let x=0;x<=e.length-1;x++)switch(x){case 0:m=e[x+1].x-e[x].x,p=e[x+1].y-e[x].y,f.x=p*1,f.y=-m,f.z=p*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(_.x,_.y,_.z);break;default:m=e[x+1].x-e[x].x,p=e[x+1].y-e[x].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(g)}for(let x=0;x<=t;x++){const y=n+x*h*i,v=Math.sin(y),I=Math.cos(y);for(let C=0;C<=e.length-1;C++){u.x=e[C].x*v,u.y=e[C].y,u.z=e[C].x*I,a.push(u.x,u.y,u.z),d.x=x/t,d.y=C/(e.length-1),o.push(d.x,d.y);const S=l[3*C+0]*v,R=l[3*C+1],T=l[3*C+0]*I;c.push(S,R,T)}}for(let x=0;x<t;x++)for(let y=0;y<e.length-1;y++){const v=y+x*e.length,I=v,C=v+e.length,S=v+e.length+1,R=v+1;r.push(I,C,R),r.push(S,R,C)}this.setIndex(r),this.setAttribute("position",new gt(a,3)),this.setAttribute("uv",new gt(o,2)),this.setAttribute("normal",new gt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wl(e.points,e.segments,e.phiStart,e.phiLength)}}class In extends wl{constructor(e=1,t=1,n=4,i=8){const r=new Qo;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new In(e.radius,e.length,e.capSegments,e.radialSegments)}}class de extends Tt{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;x(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new gt(u,3)),this.setAttribute("normal",new gt(d,3)),this.setAttribute("uv",new gt(f,2));function x(){const v=new L,I=new L;let C=0;const S=(t-e)/n;for(let R=0;R<=r;R++){const T=[],M=R/r,D=M*(t-e)+e;for(let z=0;z<=i;z++){const k=z/i,G=k*l+o,Y=Math.sin(G),W=Math.cos(G);I.x=D*Y,I.y=-M*n+m,I.z=D*W,u.push(I.x,I.y,I.z),v.set(Y,S,W).normalize(),d.push(v.x,v.y,v.z),f.push(k,1-M),T.push(g++)}_.push(T)}for(let R=0;R<i;R++)for(let T=0;T<r;T++){const M=_[T][R],D=_[T+1][R],z=_[T+1][R+1],k=_[T][R+1];(e>0||T!==0)&&(h.push(M,D,k),C+=3),(t>0||T!==r-1)&&(h.push(D,z,k),C+=3)}c.addGroup(p,C,0),p+=C}function y(v){const I=g,C=new ae,S=new L;let R=0;const T=v===!0?e:t,M=v===!0?1:-1;for(let z=1;z<=i;z++)u.push(0,m*M,0),d.push(0,M,0),f.push(.5,.5),g++;const D=g;for(let z=0;z<=i;z++){const G=z/i*l+o,Y=Math.cos(G),W=Math.sin(G);S.x=T*W,S.y=m*M,S.z=T*Y,u.push(S.x,S.y,S.z),d.push(0,M,0),C.x=Y*.5+.5,C.y=W*.5*M+.5,f.push(C.x,C.y),g++}for(let z=0;z<i;z++){const k=I+z,G=D+z;v===!0?h.push(G,G+1,k):h.push(G+1,G,k),R+=3}c.addGroup(p,R,v===!0?1:2),p+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new de(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ii extends de{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Ii(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class mu extends Qo{constructor(e){super(e),this.uuid=yn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Qo().fromJSON(i))}return this}}const Qf={triangulate:function(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=gu(s,0,i,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,u,d,f;if(n&&(r=sp(s,e,r,t)),s.length>80*t){o=c=s[0],l=h=s[1];for(let g=t;g<i;g+=t)u=s[g],d=s[g+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-o,h-l),f=f!==0?32767/f:0}return nr(r,a,t,o,l,f,0),a}};function gu(s,e,t,n,i){let r,a;if(i===mp(s,e,t,n)>0)for(r=e;r<t;r+=n)a=Ic(r,s[r],s[r+1],a);else for(r=t-n;r>=e;r-=n)a=Ic(r,s[r],s[r+1],a);return a&&oa(a,a.next)&&(sr(a),a=a.next),a}function Di(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(oa(t,t.next)||yt(t.prev,t,t.next)===0)){if(sr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function nr(s,e,t,n,i,r,a){if(!s)return;!a&&r&&cp(s,n,i,r);let o=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?tp(s,n,i,r):ep(s)){e.push(l.i/t|0),e.push(s.i/t|0),e.push(c.i/t|0),sr(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=np(Di(s),e,t),nr(s,e,t,n,i,r,2)):a===2&&ip(s,e,t,n,i,r):nr(Di(s),e,t,n,i,r,1);break}}}function ep(s){const e=s.prev,t=s,n=s.next;if(yt(e,t,n)>=0)return!1;const i=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=i<r?i<a?i:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,d=i>r?i>a?i:a:r>a?r:a,f=o>l?o>c?o:c:l>c?l:c;let g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&ss(i,o,r,l,a,c,g.x,g.y)&&yt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function tp(s,e,t,n){const i=s.prev,r=s,a=s.next;if(yt(i,r,a)>=0)return!1;const o=i.x,l=r.x,c=a.x,h=i.y,u=r.y,d=a.y,f=o<l?o<c?o:c:l<c?l:c,g=h<u?h<d?h:d:u<d?u:d,_=o>l?o>c?o:c:l>c?l:c,m=h>u?h>d?h:d:u>d?u:d,p=el(f,g,e,t,n),x=el(_,m,e,t,n);let y=s.prevZ,v=s.nextZ;for(;y&&y.z>=p&&v&&v.z<=x;){if(y.x>=f&&y.x<=_&&y.y>=g&&y.y<=m&&y!==i&&y!==a&&ss(o,h,l,u,c,d,y.x,y.y)&&yt(y.prev,y,y.next)>=0||(y=y.prevZ,v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==i&&v!==a&&ss(o,h,l,u,c,d,v.x,v.y)&&yt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;y&&y.z>=p;){if(y.x>=f&&y.x<=_&&y.y>=g&&y.y<=m&&y!==i&&y!==a&&ss(o,h,l,u,c,d,y.x,y.y)&&yt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;v&&v.z<=x;){if(v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==i&&v!==a&&ss(o,h,l,u,c,d,v.x,v.y)&&yt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function np(s,e,t){let n=s;do{const i=n.prev,r=n.next.next;!oa(i,r)&&_u(i,n,n.next,r)&&ir(i,r)&&ir(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),sr(n),sr(n.next),n=s=r),n=n.next}while(n!==s);return Di(n)}function ip(s,e,t,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&dp(a,o)){let l=vu(a,o);a=Di(a,a.next),l=Di(l,l.next),nr(a,e,t,n,i,r,0),nr(l,e,t,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function sp(s,e,t,n){const i=[];let r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*n,l=r<a-1?e[r+1]*n:s.length,c=gu(s,o,l,n,!1),c===c.next&&(c.steiner=!0),i.push(up(c));for(i.sort(rp),r=0;r<i.length;r++)t=ap(i[r],t);return t}function rp(s,e){return s.x-e.x}function ap(s,e){const t=op(s,e);if(!t)return e;const n=vu(t,s);return Di(n,n.next),Di(t,t.next)}function op(s,e){let t=e,n=-1/0,i;const r=s.x,a=s.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const d=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,i=t.x<t.next.x?t:t.next,d===r))return i}t=t.next}while(t!==e);if(!i)return null;const o=i,l=i.x,c=i.y;let h=1/0,u;t=i;do r>=t.x&&t.x>=l&&r!==t.x&&ss(a<c?r:n,a,l,c,a<c?n:r,a,t.x,t.y)&&(u=Math.abs(a-t.y)/(r-t.x),ir(t,s)&&(u<h||u===h&&(t.x>i.x||t.x===i.x&&lp(i,t)))&&(i=t,h=u)),t=t.next;while(t!==o);return i}function lp(s,e){return yt(s.prev,s,e.prev)<0&&yt(e.next,s,s.next)<0}function cp(s,e,t,n){let i=s;do i.z===0&&(i.z=el(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,hp(i)}function hp(s){let e,t,n,i,r,a,o,l,c=1;do{for(t=s,s=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,o--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,c*=2}while(a>1);return s}function el(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function up(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function ss(s,e,t,n,i,r,a,o){return(i-a)*(e-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(i-a)*(n-o)}function dp(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!fp(s,e)&&(ir(s,e)&&ir(e,s)&&pp(s,e)&&(yt(s.prev,s,e.prev)||yt(s,e.prev,e))||oa(s,e)&&yt(s.prev,s,s.next)>0&&yt(e.prev,e,e.next)>0)}function yt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function oa(s,e){return s.x===e.x&&s.y===e.y}function _u(s,e,t,n){const i=Hr(yt(s,e,t)),r=Hr(yt(s,e,n)),a=Hr(yt(t,n,s)),o=Hr(yt(t,n,e));return!!(i!==r&&a!==o||i===0&&Fr(s,t,e)||r===0&&Fr(s,n,e)||a===0&&Fr(t,s,n)||o===0&&Fr(t,e,n))}function Fr(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Hr(s){return s>0?1:s<0?-1:0}function fp(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&_u(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function ir(s,e){return yt(s.prev,s,s.next)<0?yt(s,e,s.next)>=0&&yt(s,s.prev,e)>=0:yt(s,e,s.prev)<0||yt(s,s.next,e)<0}function pp(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function vu(s,e){const t=new tl(s.i,s.x,s.y),n=new tl(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Ic(s,e,t,n){const i=new tl(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function sr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function tl(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function mp(s,e,t,n){let i=0;for(let r=e,a=t-n;r<t;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}class $s{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return $s.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];Dc(e),Nc(n,e);let a=e.length;t.forEach(Dc);for(let l=0;l<t.length;l++)i.push(a),a+=t[l].length,Nc(n,t[l]);const o=Qf.triangulate(n,i);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function Dc(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Nc(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class Tl extends Tt{constructor(e=new mu([new ae(.5,.5),new ae(-.5,.5),new ae(-.5,-.5),new ae(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new gt(i,3)),this.setAttribute("uv",new gt(r,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:gp;let y,v=!1,I,C,S,R;p&&(y=p.getSpacedPoints(h),v=!0,d=!1,I=p.computeFrenetFrames(h,!1),C=new L,S=new L,R=new L),d||(m=0,f=0,g=0,_=0);const T=o.extractPoints(c);let M=T.shape;const D=T.holes;if(!$s.isClockWise(M)){M=M.reverse();for(let te=0,oe=D.length;te<oe;te++){const P=D[te];$s.isClockWise(P)&&(D[te]=P.reverse())}}const k=$s.triangulateShape(M,D),G=M;for(let te=0,oe=D.length;te<oe;te++){const P=D[te];M=M.concat(P)}function Y(te,oe,P){return oe||console.error("THREE.ExtrudeGeometry: vec does not exist"),te.clone().addScaledVector(oe,P)}const W=M.length,Q=k.length;function X(te,oe,P){let Ie,ie,we;const ce=te.x-oe.x,Be=te.y-oe.y,ve=P.x-te.x,E=P.y-te.y,b=ce*ce+Be*Be,F=ce*E-Be*ve;if(Math.abs(F)>Number.EPSILON){const j=Math.sqrt(b),ne=Math.sqrt(ve*ve+E*E),K=oe.x-Be/j,Pe=oe.y+ce/j,pe=P.x-E/ne,Me=P.y+ve/ne,Qe=((pe-K)*E-(Me-Pe)*ve)/(ce*E-Be*ve);Ie=K+ce*Qe-te.x,ie=Pe+Be*Qe-te.y;const re=Ie*Ie+ie*ie;if(re<=2)return new ae(Ie,ie);we=Math.sqrt(re/2)}else{let j=!1;ce>Number.EPSILON?ve>Number.EPSILON&&(j=!0):ce<-Number.EPSILON?ve<-Number.EPSILON&&(j=!0):Math.sign(Be)===Math.sign(E)&&(j=!0),j?(Ie=-Be,ie=ce,we=Math.sqrt(b)):(Ie=ce,ie=Be,we=Math.sqrt(b/2))}return new ae(Ie/we,ie/we)}const ue=[];for(let te=0,oe=G.length,P=oe-1,Ie=te+1;te<oe;te++,P++,Ie++)P===oe&&(P=0),Ie===oe&&(Ie=0),ue[te]=X(G[te],G[P],G[Ie]);const me=[];let be,ze=ue.concat();for(let te=0,oe=D.length;te<oe;te++){const P=D[te];be=[];for(let Ie=0,ie=P.length,we=ie-1,ce=Ie+1;Ie<ie;Ie++,we++,ce++)we===ie&&(we=0),ce===ie&&(ce=0),be[Ie]=X(P[Ie],P[we],P[ce]);me.push(be),ze=ze.concat(be)}for(let te=0;te<m;te++){const oe=te/m,P=f*Math.cos(oe*Math.PI/2),Ie=g*Math.sin(oe*Math.PI/2)+_;for(let ie=0,we=G.length;ie<we;ie++){const ce=Y(G[ie],ue[ie],Ie);he(ce.x,ce.y,-P)}for(let ie=0,we=D.length;ie<we;ie++){const ce=D[ie];be=me[ie];for(let Be=0,ve=ce.length;Be<ve;Be++){const E=Y(ce[Be],be[Be],Ie);he(E.x,E.y,-P)}}}const it=g+_;for(let te=0;te<W;te++){const oe=d?Y(M[te],ze[te],it):M[te];v?(S.copy(I.normals[0]).multiplyScalar(oe.x),C.copy(I.binormals[0]).multiplyScalar(oe.y),R.copy(y[0]).add(S).add(C),he(R.x,R.y,R.z)):he(oe.x,oe.y,0)}for(let te=1;te<=h;te++)for(let oe=0;oe<W;oe++){const P=d?Y(M[oe],ze[oe],it):M[oe];v?(S.copy(I.normals[te]).multiplyScalar(P.x),C.copy(I.binormals[te]).multiplyScalar(P.y),R.copy(y[te]).add(S).add(C),he(R.x,R.y,R.z)):he(P.x,P.y,u/h*te)}for(let te=m-1;te>=0;te--){const oe=te/m,P=f*Math.cos(oe*Math.PI/2),Ie=g*Math.sin(oe*Math.PI/2)+_;for(let ie=0,we=G.length;ie<we;ie++){const ce=Y(G[ie],ue[ie],Ie);he(ce.x,ce.y,u+P)}for(let ie=0,we=D.length;ie<we;ie++){const ce=D[ie];be=me[ie];for(let Be=0,ve=ce.length;Be<ve;Be++){const E=Y(ce[Be],be[Be],Ie);v?he(E.x,E.y+y[h-1].y,y[h-1].x+P):he(E.x,E.y,u+P)}}}Z(),le();function Z(){const te=i.length/3;if(d){let oe=0,P=W*oe;for(let Ie=0;Ie<Q;Ie++){const ie=k[Ie];Ne(ie[2]+P,ie[1]+P,ie[0]+P)}oe=h+m*2,P=W*oe;for(let Ie=0;Ie<Q;Ie++){const ie=k[Ie];Ne(ie[0]+P,ie[1]+P,ie[2]+P)}}else{for(let oe=0;oe<Q;oe++){const P=k[oe];Ne(P[2],P[1],P[0])}for(let oe=0;oe<Q;oe++){const P=k[oe];Ne(P[0]+W*h,P[1]+W*h,P[2]+W*h)}}n.addGroup(te,i.length/3-te,0)}function le(){const te=i.length/3;let oe=0;Se(G,oe),oe+=G.length;for(let P=0,Ie=D.length;P<Ie;P++){const ie=D[P];Se(ie,oe),oe+=ie.length}n.addGroup(te,i.length/3-te,1)}function Se(te,oe){let P=te.length;for(;--P>=0;){const Ie=P;let ie=P-1;ie<0&&(ie=te.length-1);for(let we=0,ce=h+m*2;we<ce;we++){const Be=W*we,ve=W*(we+1),E=oe+Ie+Be,b=oe+ie+Be,F=oe+ie+ve,j=oe+Ie+ve;He(E,b,F,j)}}}function he(te,oe,P){l.push(te),l.push(oe),l.push(P)}function Ne(te,oe,P){Fe(te),Fe(oe),Fe(P);const Ie=i.length/3,ie=x.generateTopUV(n,i,Ie-3,Ie-2,Ie-1);rt(ie[0]),rt(ie[1]),rt(ie[2])}function He(te,oe,P,Ie){Fe(te),Fe(oe),Fe(Ie),Fe(oe),Fe(P),Fe(Ie);const ie=i.length/3,we=x.generateSideWallUV(n,i,ie-6,ie-3,ie-2,ie-1);rt(we[0]),rt(we[1]),rt(we[3]),rt(we[1]),rt(we[2]),rt(we[3])}function Fe(te){i.push(l[te*3+0]),i.push(l[te*3+1]),i.push(l[te*3+2])}function rt(te){r.push(te.x),r.push(te.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return _p(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,a=e.shapes.length;r<a;r++){const o=t[e.shapes[r]];n.push(o)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Jo[i.type]().fromJSON(i)),new Tl(n,e.options)}}const gp={generateTopUV:function(s,e,t,n,i){const r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[i*3],h=e[i*3+1];return[new ae(r,a),new ae(o,l),new ae(c,h)]},generateSideWallUV:function(s,e,t,n,i,r){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[i*3],f=e[i*3+1],g=e[i*3+2],_=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new ae(a,1-l),new ae(c,1-u),new ae(d,1-g),new ae(_,1-p)]:[new ae(o,1-l),new ae(h,1-u),new ae(f,1-g),new ae(m,1-p)]}};function _p(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Ht extends Tt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=e/o,d=t/l,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const x=p*d-a;for(let y=0;y<c;y++){const v=y*u-r;g.push(v,-x,0),_.push(0,0,1),m.push(y/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<o;x++){const y=x+c*p,v=x+c*(p+1),I=x+1+c*(p+1),C=x+1+c*p;f.push(y,v,C),f.push(v,I,C)}this.setIndex(f),this.setAttribute("position",new gt(g,3)),this.setAttribute("normal",new gt(_,3)),this.setAttribute("uv",new gt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ht(e.width,e.height,e.widthSegments,e.heightSegments)}}class lr extends Tt{constructor(e=.5,t=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],h=[];let u=e;const d=(t-e)/i,f=new L,g=new ae;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){const p=r+m/n*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let _=0;_<i;_++){const m=_*(n+1);for(let p=0;p<n;p++){const x=p+m,y=x,v=x+n+1,I=x+n+2,C=x+1;o.push(y,v,C),o.push(v,I,C)}}this.setIndex(o),this.setAttribute("position",new gt(l,3)),this.setAttribute("normal",new gt(c,3)),this.setAttribute("uv",new gt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lr(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class cn extends Tt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new L,d=new L,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const x=[],y=p/n;let v=0;p===0&&a===0?v=.5/t:p===n&&l===Math.PI&&(v=-.5/t);for(let I=0;I<=t;I++){const C=I/t;u.x=-e*Math.cos(i+C*r)*Math.sin(a+y*o),u.y=e*Math.cos(a+y*o),u.z=e*Math.sin(i+C*r)*Math.sin(a+y*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(C+v,1-y),x.push(c++)}h.push(x)}for(let p=0;p<n;p++)for(let x=0;x<t;x++){const y=h[p][x+1],v=h[p][x],I=h[p+1][x],C=h[p+1][x+1];(p!==0||a>0)&&f.push(y,v,C),(p!==n-1||l<Math.PI)&&f.push(v,I,C)}this.setIndex(f),this.setAttribute("position",new gt(g,3)),this.setAttribute("normal",new gt(_,3)),this.setAttribute("uv",new gt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Jn extends Tt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],l=[],c=[],h=new L,u=new L,d=new L;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){const _=g/i*r,m=f/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(_),u.y=(e+t*Math.cos(m))*Math.sin(_),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){const _=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,x=(i+1)*f+g;a.push(_,m,x),a.push(m,p,x)}this.setIndex(a),this.setAttribute("position",new gt(o,3)),this.setAttribute("normal",new gt(l,3)),this.setAttribute("uv",new gt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jn(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class J extends Rn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new De(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xh,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class un extends J{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ae(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ke(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new De(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new De(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new De(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class vp extends Rn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ld,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class xp extends Rn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function zr(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function yp(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function bp(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Uc(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let l=0;l!==e;++l)i[a++]=s[o+l]}return i}function xu(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}class cr{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Mp extends cr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Xl,endingEnd:Xl}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,a=e+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case ql:r=e,o=2*t-n;break;case Yl:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ql:a=e,l=2*n-t;break;case Yl:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,x=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,y=(-1-f)*m+(1.5+f)*_+.5*g,v=f*m-f*_;for(let I=0;I!==o;++I)r[I]=p*a[h+I]+x*a[c+I]+y*a[l+I]+v*a[u+I];return r}}class Sp extends cr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}}class wp extends cr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Un{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=zr(t,this.TimeBufferType),this.values=zr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:zr(e.times,Array),values:zr(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new wp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Sp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Mp(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Js:t=this.InterpolantFactoryMethodDiscrete;break;case Qs:t=this.InterpolantFactoryMethodLinear;break;case pa:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Js;case this.InterpolantFactoryMethodLinear:return Qs;case this.InterpolantFactoryMethodSmooth:return pa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&yp(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===pa,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(i)l=!0;else{const u=o*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){const _=t[u+g];if(_!==t[d+g]||_!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Un.prototype.TimeBufferType=Float32Array;Un.prototype.ValueBufferType=Float32Array;Un.prototype.DefaultInterpolation=Qs;class Ss extends Un{constructor(e,t,n){super(e,t,n)}}Ss.prototype.ValueTypeName="bool";Ss.prototype.ValueBufferType=Array;Ss.prototype.DefaultInterpolation=Js;Ss.prototype.InterpolantFactoryMethodLinear=void 0;Ss.prototype.InterpolantFactoryMethodSmooth=void 0;class yu extends Un{}yu.prototype.ValueTypeName="color";class _s extends Un{}_s.prototype.ValueTypeName="number";class Tp extends cr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let h=c+o;c!==h;c+=4)fi.slerpFlat(r,0,a,c-o,a,c,l);return r}}class vs extends Un{InterpolantFactoryMethodLinear(e){return new Tp(this.times,this.values,this.getValueSize(),e)}}vs.prototype.ValueTypeName="quaternion";vs.prototype.InterpolantFactoryMethodSmooth=void 0;class ws extends Un{constructor(e,t,n){super(e,t,n)}}ws.prototype.ValueTypeName="string";ws.prototype.ValueBufferType=Array;ws.prototype.DefaultInterpolation=Js;ws.prototype.InterpolantFactoryMethodLinear=void 0;ws.prototype.InterpolantFactoryMethodSmooth=void 0;class xs extends Un{}xs.prototype.ValueTypeName="vector";class Ep{constructor(e="",t=-1,n=[],i=Cd){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=yn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Rp(n[a]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(Un.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const h=bp(l);l=Uc(l,1,h),c=Uc(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new _s(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(r);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,g,_){if(f.length!==0){const m=[],p=[];xu(f,m,p,g),m.length!==0&&_.push(new u(d,m,p))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)f[d[g].morphTargets[_]]=-1;for(const _ in f){const m=[],p=[];for(let x=0;x!==d[g].morphTargets.length;++x){const y=d[g];m.push(y.time),p.push(y.morphTarget===_?1:0)}i.push(new _s(".morphTargetInfluence["+_+"]",m,p))}l=f.length*a}else{const f=".bones["+t[u].name+"]";n(xs,f+".position",d,"pos",i),n(vs,f+".quaternion",d,"rot",i),n(xs,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Ap(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return _s;case"vector":case"vector2":case"vector3":case"vector4":return xs;case"color":return yu;case"quaternion":return vs;case"bool":case"boolean":return Ss;case"string":return ws}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Rp(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Ap(s.type);if(s.times===void 0){const t=[],n=[];xu(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const li={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Cp{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const Pp=new Cp;class Ni{constructor(e){this.manager=e!==void 0?e:Pp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ni.DEFAULT_MATERIAL_NAME="__DEFAULT";const Vn={};class Lp extends Error{constructor(e,t){super(e),this.response=t}}class ia extends Ni{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=li.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Vn[e]!==void 0){Vn[e].push({onLoad:t,onProgress:n,onError:i});return}Vn[e]=[],Vn[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Vn[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let _=0;const m=new ReadableStream({start(p){x();function x(){u.read().then(({done:y,value:v})=>{if(y)p.close();else{_+=v.byteLength;const I=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let C=0,S=h.length;C<S;C++){const R=h[C];R.onProgress&&R.onProgress(I)}p.enqueue(v),x()}},y=>{p.error(y)})}}});return new Response(m)}else throw new Lp(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{li.add(e,c);const h=Vn[e];delete Vn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=Vn[e];if(h===void 0)throw this.manager.itemError(e),c;delete Vn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Ip extends Ni{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=li.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=er("img");function l(){h(),li.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),i&&i(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class Dp extends Ni{constructor(e){super(e)}load(e,t,n,i){const r=new Dt,a=new Ip(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class la extends vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new De(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Np extends la{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new De(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ga=new Xe,kc=new L,Oc=new L;class El{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ae(512,512),this.map=null,this.mapPass=null,this.matrix=new Xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yl,this._frameExtents=new ae(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;kc.setFromMatrixPosition(e.matrixWorld),t.position.copy(kc),Oc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Oc),t.updateMatrixWorld(),Ga.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ga),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ga)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Up extends El{constructor(){super(new Kt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=ms*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class kp extends la{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Up}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Bc=new Xe,Os=new L,Va=new L;class Op extends El{constructor(){super(new Kt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ae(4,2),this._viewportCount=6,this._viewports=[new lt(2,1,1,1),new lt(0,1,1,1),new lt(3,1,1,1),new lt(1,1,1,1),new lt(3,0,1,1),new lt(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Os.setFromMatrixPosition(e.matrixWorld),n.position.copy(Os),Va.copy(n.position),Va.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Va),n.updateMatrixWorld(),i.makeTranslation(-Os.x,-Os.y,-Os.z),Bc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bc)}}class Bp extends la{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Op}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Al extends tu{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Fp extends El{constructor(){super(new Al(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class bu extends la{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.shadow=new Fp}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class js{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Hp extends Ni{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=li.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return li.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),li.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});li.add(e,l),r.manager.itemStart(e)}}class zp extends Kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}const Rl="\\[\\]\\.:\\/",Gp=new RegExp("["+Rl+"]","g"),Cl="[^"+Rl+"]",Vp="[^"+Rl.replace("\\.","")+"]",Wp=/((?:WC+[\/:])*)/.source.replace("WC",Cl),Xp=/(WCOD+)?/.source.replace("WCOD",Vp),qp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Cl),Yp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Cl),Zp=new RegExp("^"+Wp+Xp+qp+Yp+"$"),$p=["material","materials","bones","map"];class jp{constructor(e,t,n){const i=n||ft.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class ft{constructor(e,t,n){this.path=t,this.parsedPath=n||ft.parseTrackName(t),this.node=ft.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new ft.Composite(e,t,n):new ft(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Gp,"")}static parseTrackName(e){const t=Zp.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);$p.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=ft.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ft.Composite=jp;ft.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ft.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ft.prototype.GetterByBindingType=[ft.prototype._getValue_direct,ft.prototype._getValue_array,ft.prototype._getValue_arrayElement,ft.prototype._getValue_toArray];ft.prototype.SetterByBindingTypeAndVersioning=[[ft.prototype._setValue_direct,ft.prototype._setValue_direct_setNeedsUpdate,ft.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_array,ft.prototype._setValue_array_setNeedsUpdate,ft.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_arrayElement,ft.prototype._setValue_arrayElement_setNeedsUpdate,ft.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_fromArray,ft.prototype._setValue_fromArray_setNeedsUpdate,ft.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];function Fc(s,e,t,n){const i=Kp(n);switch(t){case Bh:return s*e;case Hh:return s*e;case zh:return s*e*2;case pl:return s*e/i.components*i.byteLength;case ml:return s*e/i.components*i.byteLength;case Gh:return s*e*2/i.components*i.byteLength;case gl:return s*e*2/i.components*i.byteLength;case Fh:return s*e*3/i.components*i.byteLength;case xn:return s*e*4/i.components*i.byteLength;case _l:return s*e*4/i.components*i.byteLength;case qr:case Yr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Zr:case $r:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case So:case To:return Math.max(s,16)*Math.max(e,8)/4;case Mo:case wo:return Math.max(s,8)*Math.max(e,8)/2;case Eo:case Ao:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ro:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Co:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Po:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Lo:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Io:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Do:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case No:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Uo:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case ko:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Oo:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Bo:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Fo:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Ho:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case zo:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Go:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case jr:case Vo:case Wo:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Vh:case Xo:return Math.ceil(s/4)*Math.ceil(e/4)*8;case qo:case Yo:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Kp(s){switch(s){case Kn:case Uh:return{byteLength:1,components:1};case Ks:case kh:case ar:return{byteLength:2,components:1};case dl:case fl:return{byteLength:2,components:4};case Pi:case ul:case An:return{byteLength:4,components:1};case Oh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hl);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Mu(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Jp(s){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const _=u[f];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var Qp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,em=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,tm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,im=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,am=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,om=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,lm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,um=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,dm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,fm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,pm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,mm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_m=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ym=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,bm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Mm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Sm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,wm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Tm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Em=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Am=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Pm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Lm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Im=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Dm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Nm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Um=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,km=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Om=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,zm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Xm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,qm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ym=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$m=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Km=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Jm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Qm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,e0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,t0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,n0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,i0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,s0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,r0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,a0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,o0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,l0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,c0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,h0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,u0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,d0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,f0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,p0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,m0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,g0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,_0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,v0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,x0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,y0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,b0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,M0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,S0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,w0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,T0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,E0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,A0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,R0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,C0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,P0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,L0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,I0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,D0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,N0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,U0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,k0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,O0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,B0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,F0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,H0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,z0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,G0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,V0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,W0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,X0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,q0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Y0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Z0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,j0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,K0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const J0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Q0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ng=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ig=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,rg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ag=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,og=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,lg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ug=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,fg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,_g=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,xg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,yg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Sg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Eg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ag=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Rg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Pg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Lg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$e={alphahash_fragment:Qp,alphahash_pars_fragment:em,alphamap_fragment:tm,alphamap_pars_fragment:nm,alphatest_fragment:im,alphatest_pars_fragment:sm,aomap_fragment:rm,aomap_pars_fragment:am,batching_pars_vertex:om,batching_vertex:lm,begin_vertex:cm,beginnormal_vertex:hm,bsdfs:um,iridescence_fragment:dm,bumpmap_pars_fragment:fm,clipping_planes_fragment:pm,clipping_planes_pars_fragment:mm,clipping_planes_pars_vertex:gm,clipping_planes_vertex:_m,color_fragment:vm,color_pars_fragment:xm,color_pars_vertex:ym,color_vertex:bm,common:Mm,cube_uv_reflection_fragment:Sm,defaultnormal_vertex:wm,displacementmap_pars_vertex:Tm,displacementmap_vertex:Em,emissivemap_fragment:Am,emissivemap_pars_fragment:Rm,colorspace_fragment:Cm,colorspace_pars_fragment:Pm,envmap_fragment:Lm,envmap_common_pars_fragment:Im,envmap_pars_fragment:Dm,envmap_pars_vertex:Nm,envmap_physical_pars_fragment:Xm,envmap_vertex:Um,fog_vertex:km,fog_pars_vertex:Om,fog_fragment:Bm,fog_pars_fragment:Fm,gradientmap_pars_fragment:Hm,lightmap_pars_fragment:zm,lights_lambert_fragment:Gm,lights_lambert_pars_fragment:Vm,lights_pars_begin:Wm,lights_toon_fragment:qm,lights_toon_pars_fragment:Ym,lights_phong_fragment:Zm,lights_phong_pars_fragment:$m,lights_physical_fragment:jm,lights_physical_pars_fragment:Km,lights_fragment_begin:Jm,lights_fragment_maps:Qm,lights_fragment_end:e0,logdepthbuf_fragment:t0,logdepthbuf_pars_fragment:n0,logdepthbuf_pars_vertex:i0,logdepthbuf_vertex:s0,map_fragment:r0,map_pars_fragment:a0,map_particle_fragment:o0,map_particle_pars_fragment:l0,metalnessmap_fragment:c0,metalnessmap_pars_fragment:h0,morphinstance_vertex:u0,morphcolor_vertex:d0,morphnormal_vertex:f0,morphtarget_pars_vertex:p0,morphtarget_vertex:m0,normal_fragment_begin:g0,normal_fragment_maps:_0,normal_pars_fragment:v0,normal_pars_vertex:x0,normal_vertex:y0,normalmap_pars_fragment:b0,clearcoat_normal_fragment_begin:M0,clearcoat_normal_fragment_maps:S0,clearcoat_pars_fragment:w0,iridescence_pars_fragment:T0,opaque_fragment:E0,packing:A0,premultiplied_alpha_fragment:R0,project_vertex:C0,dithering_fragment:P0,dithering_pars_fragment:L0,roughnessmap_fragment:I0,roughnessmap_pars_fragment:D0,shadowmap_pars_fragment:N0,shadowmap_pars_vertex:U0,shadowmap_vertex:k0,shadowmask_pars_fragment:O0,skinbase_vertex:B0,skinning_pars_vertex:F0,skinning_vertex:H0,skinnormal_vertex:z0,specularmap_fragment:G0,specularmap_pars_fragment:V0,tonemapping_fragment:W0,tonemapping_pars_fragment:X0,transmission_fragment:q0,transmission_pars_fragment:Y0,uv_pars_fragment:Z0,uv_pars_vertex:$0,uv_vertex:j0,worldpos_vertex:K0,background_vert:J0,background_frag:Q0,backgroundCube_vert:eg,backgroundCube_frag:tg,cube_vert:ng,cube_frag:ig,depth_vert:sg,depth_frag:rg,distanceRGBA_vert:ag,distanceRGBA_frag:og,equirect_vert:lg,equirect_frag:cg,linedashed_vert:hg,linedashed_frag:ug,meshbasic_vert:dg,meshbasic_frag:fg,meshlambert_vert:pg,meshlambert_frag:mg,meshmatcap_vert:gg,meshmatcap_frag:_g,meshnormal_vert:vg,meshnormal_frag:xg,meshphong_vert:yg,meshphong_frag:bg,meshphysical_vert:Mg,meshphysical_frag:Sg,meshtoon_vert:wg,meshtoon_frag:Tg,points_vert:Eg,points_frag:Ag,shadow_vert:Rg,shadow_frag:Cg,sprite_vert:Pg,sprite_frag:Lg},fe={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},Cn={basic:{uniforms:jt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:jt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new De(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:jt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:jt([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:jt([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new De(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:jt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:jt([fe.points,fe.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:jt([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:jt([fe.common,fe.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:jt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:jt([fe.sprite,fe.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:jt([fe.common,fe.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:jt([fe.lights,fe.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};Cn.physical={uniforms:jt([Cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const Gr={r:0,b:0,g:0},yi=new Pn,Ig=new Xe;function Dg(s,e,t,n,i,r,a){const o=new De(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?t:e).get(v)),v}function _(y){let v=!1;const I=g(y);I===null?p(o,l):I&&I.isColor&&(p(I,1),v=!0);const C=s.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(y,v){const I=g(v);I&&(I.isCubeTexture||I.mapping===ra)?(h===void 0&&(h=new A(new $(1,1,1),new Ln({name:"BackgroundCubeMaterial",uniforms:gs(Cn.backgroundCube.uniforms),vertexShader:Cn.backgroundCube.vertexShader,fragmentShader:Cn.backgroundCube.fragmentShader,side:Jt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,S,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),yi.copy(v.backgroundRotation),yi.x*=-1,yi.y*=-1,yi.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(yi.y*=-1,yi.z*=-1),h.material.uniforms.envMap.value=I,h.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Ig.makeRotationFromEuler(yi)),h.material.toneMapped=et.getTransfer(I.colorSpace)!==pt,(u!==I||d!==I.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=I,d=I.version,f=s.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):I&&I.isTexture&&(c===void 0&&(c=new A(new Ht(2,2),new Ln({name:"BackgroundMaterial",uniforms:gs(Cn.background.uniforms),vertexShader:Cn.background.vertexShader,fragmentShader:Cn.background.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=I,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=et.getTransfer(I.colorSpace)!==pt,I.matrixAutoUpdate===!0&&I.updateMatrix(),c.material.uniforms.uvTransform.value.copy(I.matrix),(u!==I||d!==I.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=I,d=I.version,f=s.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,v){y.getRGB(Gr,eu(s)),n.buffers.color.setClear(Gr.r,Gr.g,Gr.b,v,a)}function x(){h!==void 0&&(h.geometry.dispose(),h.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return o},setClearColor:function(y,v=1){o.set(y),l=v,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(o,l)},render:_,addToRenderList:m,dispose:x}}function Ng(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,a=!1;function o(M,D,z,k,G){let Y=!1;const W=u(k,z,D);r!==W&&(r=W,c(r.object)),Y=f(M,k,z,G),Y&&g(M,k,z,G),G!==null&&e.update(G,s.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,v(M,D,z,k),G!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return s.createVertexArray()}function c(M){return s.bindVertexArray(M)}function h(M){return s.deleteVertexArray(M)}function u(M,D,z){const k=z.wireframe===!0;let G=n[M.id];G===void 0&&(G={},n[M.id]=G);let Y=G[D.id];Y===void 0&&(Y={},G[D.id]=Y);let W=Y[k];return W===void 0&&(W=d(l()),Y[k]=W),W}function d(M){const D=[],z=[],k=[];for(let G=0;G<t;G++)D[G]=0,z[G]=0,k[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:z,attributeDivisors:k,object:M,attributes:{},index:null}}function f(M,D,z,k){const G=r.attributes,Y=D.attributes;let W=0;const Q=z.getAttributes();for(const X in Q)if(Q[X].location>=0){const me=G[X];let be=Y[X];if(be===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(be=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(be=M.instanceColor)),me===void 0||me.attribute!==be||be&&me.data!==be.data)return!0;W++}return r.attributesNum!==W||r.index!==k}function g(M,D,z,k){const G={},Y=D.attributes;let W=0;const Q=z.getAttributes();for(const X in Q)if(Q[X].location>=0){let me=Y[X];me===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(me=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(me=M.instanceColor));const be={};be.attribute=me,me&&me.data&&(be.data=me.data),G[X]=be,W++}r.attributes=G,r.attributesNum=W,r.index=k}function _(){const M=r.newAttributes;for(let D=0,z=M.length;D<z;D++)M[D]=0}function m(M){p(M,0)}function p(M,D){const z=r.newAttributes,k=r.enabledAttributes,G=r.attributeDivisors;z[M]=1,k[M]===0&&(s.enableVertexAttribArray(M),k[M]=1),G[M]!==D&&(s.vertexAttribDivisor(M,D),G[M]=D)}function x(){const M=r.newAttributes,D=r.enabledAttributes;for(let z=0,k=D.length;z<k;z++)D[z]!==M[z]&&(s.disableVertexAttribArray(z),D[z]=0)}function y(M,D,z,k,G,Y,W){W===!0?s.vertexAttribIPointer(M,D,z,G,Y):s.vertexAttribPointer(M,D,z,k,G,Y)}function v(M,D,z,k){_();const G=k.attributes,Y=z.getAttributes(),W=D.defaultAttributeValues;for(const Q in Y){const X=Y[Q];if(X.location>=0){let ue=G[Q];if(ue===void 0&&(Q==="instanceMatrix"&&M.instanceMatrix&&(ue=M.instanceMatrix),Q==="instanceColor"&&M.instanceColor&&(ue=M.instanceColor)),ue!==void 0){const me=ue.normalized,be=ue.itemSize,ze=e.get(ue);if(ze===void 0)continue;const it=ze.buffer,Z=ze.type,le=ze.bytesPerElement,Se=Z===s.INT||Z===s.UNSIGNED_INT||ue.gpuType===ul;if(ue.isInterleavedBufferAttribute){const he=ue.data,Ne=he.stride,He=ue.offset;if(he.isInstancedInterleavedBuffer){for(let Fe=0;Fe<X.locationSize;Fe++)p(X.location+Fe,he.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Fe=0;Fe<X.locationSize;Fe++)m(X.location+Fe);s.bindBuffer(s.ARRAY_BUFFER,it);for(let Fe=0;Fe<X.locationSize;Fe++)y(X.location+Fe,be/X.locationSize,Z,me,Ne*le,(He+be/X.locationSize*Fe)*le,Se)}else{if(ue.isInstancedBufferAttribute){for(let he=0;he<X.locationSize;he++)p(X.location+he,ue.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let he=0;he<X.locationSize;he++)m(X.location+he);s.bindBuffer(s.ARRAY_BUFFER,it);for(let he=0;he<X.locationSize;he++)y(X.location+he,be/X.locationSize,Z,me,be*le,be/X.locationSize*he*le,Se)}}else if(W!==void 0){const me=W[Q];if(me!==void 0)switch(me.length){case 2:s.vertexAttrib2fv(X.location,me);break;case 3:s.vertexAttrib3fv(X.location,me);break;case 4:s.vertexAttrib4fv(X.location,me);break;default:s.vertexAttrib1fv(X.location,me)}}}}x()}function I(){R();for(const M in n){const D=n[M];for(const z in D){const k=D[z];for(const G in k)h(k[G].object),delete k[G];delete D[z]}delete n[M]}}function C(M){if(n[M.id]===void 0)return;const D=n[M.id];for(const z in D){const k=D[z];for(const G in k)h(k[G].object),delete k[G];delete D[z]}delete n[M.id]}function S(M){for(const D in n){const z=n[D];if(z[M.id]===void 0)continue;const k=z[M.id];for(const G in k)h(k[G].object),delete k[G];delete z[M.id]}}function R(){T(),a=!0,r!==i&&(r=i,c(r.object))}function T(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:R,resetDefaultState:T,dispose:I,releaseStatesOfGeometry:C,releaseStatesOfProgram:S,initAttributes:_,enableAttribute:m,disableUnusedAttributes:x}}function Ug(s,e,t){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];t.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function kg(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const S=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(S){return!(S!==xn&&n.convert(S)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(S){const R=S===ar&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(S!==Kn&&n.convert(S)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&S!==An&&!R)}function l(S){if(S==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),x=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,C=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:I,maxSamples:C}}function Og(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new wi,o=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{const x=r?0:n,y=x*4;let v=p.clippingState||null;l.value=v,v=h(g,d,y,f);for(let I=0;I!==y;++I)v[I]=t[I];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,x=d.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,v=f;y!==_;++y,v+=4)a.copy(u[y]).applyMatrix4(x,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Bg(s){let e=new WeakMap;function t(a,o){return o===yo?a.mapping=us:o===bo&&(a.mapping=ds),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===yo||o===bo)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Cf(l.height);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const rs=4,Hc=[.125,.215,.35,.446,.526,.582],Ri=20,Wa=new Al,zc=new De;let Xa=null,qa=0,Ya=0,Za=!1;const Ti=(1+Math.sqrt(5))/2,es=1/Ti,Gc=[new L(-Ti,es,0),new L(Ti,es,0),new L(-es,0,Ti),new L(es,0,Ti),new L(0,Ti,-es),new L(0,Ti,es),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class nl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Xa=this._renderer.getRenderTarget(),qa=this._renderer.getActiveCubeFace(),Ya=this._renderer.getActiveMipmapLevel(),Za=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Xa,qa,Ya),this._renderer.xr.enabled=Za,e.scissorTest=!1,Vr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===us||e.mapping===ds?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xa=this._renderer.getRenderTarget(),qa=this._renderer.getActiveCubeFace(),Ya=this._renderer.getActiveMipmapLevel(),Za=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:on,minFilter:on,generateMipmaps:!1,type:ar,format:xn,colorSpace:qt,depthBuffer:!1},i=Vc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vc(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Fg(r)),this._blurMaterial=Hg(r,e,t)}return i}_compileMaterial(e){const t=new A(this._lodPlanes[0],e);this._renderer.compile(t,Wa)}_sceneToCubeUV(e,t,n,i){const o=new Kt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(zc),h.toneMapping=hi,h.autoClear=!1;const f=new Le({name:"PMREM.Background",side:Jt,depthWrite:!1,depthTest:!1}),g=new A(new $,f);let _=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,_=!0):(f.color.copy(zc),_=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):x===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const y=this._cubeSize;Vr(i,x*y,p>2?y:0,y,y),h.setRenderTarget(i),_&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===us||e.mapping===ds;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wc());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new A(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Vr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Wa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Gc[(i-r-1)%Gc.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new A(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ri-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Ri;m>Ri&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ri}`);const p=[];let x=0;for(let S=0;S<Ri;++S){const R=S/_,T=Math.exp(-R*R/2);p.push(T),S===0?x+=T:S<m&&(x+=2*T)}for(let S=0;S<p.length;S++)p[S]=p[S]/x;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;const v=this._sizeLods[i],I=3*v*(i>y-rs?i-y+rs:0),C=4*(this._cubeSize-v);Vr(t,I,C,3*v,2*v),l.setRenderTarget(t),l.render(u,Wa)}}function Fg(s){const e=[],t=[],n=[];let i=s;const r=s-rs+1+Hc.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>s-rs?l=Hc[a-s+rs-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,x=new Float32Array(_*g*f),y=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let C=0;C<f;C++){const S=C%3*2/3-1,R=C>2?0:-1,T=[S,R,0,S+2/3,R,0,S+2/3,R+1,0,S,R,0,S+2/3,R+1,0,S,R+1,0];x.set(T,_*g*C),y.set(d,m*g*C);const M=[C,C,C,C,C,C];v.set(M,p*g*C)}const I=new Tt;I.setAttribute("position",new Ft(x,_)),I.setAttribute("uv",new Ft(y,m)),I.setAttribute("faceIndex",new Ft(v,p)),e.push(I),i>rs&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Vc(s,e,t){const n=new Li(s,e,t);return n.texture.mapping=ra,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Vr(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Hg(s,e,t){const n=new Float32Array(Ri),i=new L(0,1,0);return new Ln({name:"SphericalGaussianBlur",defines:{n:Ri,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Pl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Wc(){return new Ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Xc(){return new Ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Pl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function zg(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===yo||l===bo,h=l===us||l===ds;if(c||h){let u=e.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new nl(s)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return c&&f&&f.height>0||h&&f&&i(f)?(t===null&&(t=new nl(s)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Gg(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&ns("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Vg(s,e,t,n){const i={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete i[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const f in d)e.update(d[f],s.ARRAY_BUFFER)}function c(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const x=f.array;_=f.version;for(let y=0,v=x.length;y<v;y+=3){const I=x[y+0],C=x[y+1],S=x[y+2];d.push(I,C,C,S,S,I)}}else if(g!==void 0){const x=g.array;_=g.version;for(let y=0,v=x.length/3-1;y<v;y+=3){const I=y+0,C=y+1,S=y+2;d.push(I,C,C,S,S,I)}}else return;const m=new(Yh(d)?Qh:Jh)(d,1);m.version=_;const p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Wg(s,e,t){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){s.drawElements(n,f,r,d*a),t.update(f,n,1)}function c(d,f,g){g!==0&&(s.drawElementsInstanced(n,f,r,d*a,g),t.update(f,n,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function u(d,f,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let p=0;for(let x=0;x<g;x++)p+=f[x]*_[x];t.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Xg(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function qg(s,e,t){const n=new WeakMap,i=new lt;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let M=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",M)};var f=M;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let I=o.attributes.position.count*v,C=1;I>e.maxTextureSize&&(C=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const S=new Float32Array(I*C*4*u),R=new $h(S,I,C,u);R.type=An,R.needsUpdate=!0;const T=v*4;for(let D=0;D<u;D++){const z=p[D],k=x[D],G=y[D],Y=I*C*4*D;for(let W=0;W<z.count;W++){const Q=W*T;g===!0&&(i.fromBufferAttribute(z,W),S[Y+Q+0]=i.x,S[Y+Q+1]=i.y,S[Y+Q+2]=i.z,S[Y+Q+3]=0),_===!0&&(i.fromBufferAttribute(k,W),S[Y+Q+4]=i.x,S[Y+Q+5]=i.y,S[Y+Q+6]=i.z,S[Y+Q+7]=0),m===!0&&(i.fromBufferAttribute(G,W),S[Y+Q+8]=i.x,S[Y+Q+9]=i.y,S[Y+Q+10]=i.z,S[Y+Q+11]=G.itemSize===4?i.w:1)}}d={count:u,texture:R,size:new ae(I,C)},n.set(o,d),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function Yg(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const Su=new Dt,qc=new cu(1,1),wu=new $h,Tu=new ff,Eu=new nu,Yc=[],Zc=[],$c=new Float32Array(16),jc=new Float32Array(9),Kc=new Float32Array(4);function Ts(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Yc[i];if(r===void 0&&(r=new Float32Array(i),Yc[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Nt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Ut(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function ca(s,e){let t=Zc[e];t===void 0&&(t=new Int32Array(e),Zc[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Zg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function $g(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;s.uniform2fv(this.addr,e),Ut(t,e)}}function jg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Nt(t,e))return;s.uniform3fv(this.addr,e),Ut(t,e)}}function Kg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;s.uniform4fv(this.addr,e),Ut(t,e)}}function Jg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,n))return;Kc.set(n),s.uniformMatrix2fv(this.addr,!1,Kc),Ut(t,n)}}function Qg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,n))return;jc.set(n),s.uniformMatrix3fv(this.addr,!1,jc),Ut(t,n)}}function e_(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,n))return;$c.set(n),s.uniformMatrix4fv(this.addr,!1,$c),Ut(t,n)}}function t_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function n_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;s.uniform2iv(this.addr,e),Ut(t,e)}}function i_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;s.uniform3iv(this.addr,e),Ut(t,e)}}function s_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;s.uniform4iv(this.addr,e),Ut(t,e)}}function r_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function a_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;s.uniform2uiv(this.addr,e),Ut(t,e)}}function o_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;s.uniform3uiv(this.addr,e),Ut(t,e)}}function l_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;s.uniform4uiv(this.addr,e),Ut(t,e)}}function c_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(qc.compareFunction=qh,r=qc):r=Su,t.setTexture2D(e||r,i)}function h_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Tu,i)}function u_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Eu,i)}function d_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||wu,i)}function f_(s){switch(s){case 5126:return Zg;case 35664:return $g;case 35665:return jg;case 35666:return Kg;case 35674:return Jg;case 35675:return Qg;case 35676:return e_;case 5124:case 35670:return t_;case 35667:case 35671:return n_;case 35668:case 35672:return i_;case 35669:case 35673:return s_;case 5125:return r_;case 36294:return a_;case 36295:return o_;case 36296:return l_;case 35678:case 36198:case 36298:case 36306:case 35682:return c_;case 35679:case 36299:case 36307:return h_;case 35680:case 36300:case 36308:case 36293:return u_;case 36289:case 36303:case 36311:case 36292:return d_}}function p_(s,e){s.uniform1fv(this.addr,e)}function m_(s,e){const t=Ts(e,this.size,2);s.uniform2fv(this.addr,t)}function g_(s,e){const t=Ts(e,this.size,3);s.uniform3fv(this.addr,t)}function __(s,e){const t=Ts(e,this.size,4);s.uniform4fv(this.addr,t)}function v_(s,e){const t=Ts(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function x_(s,e){const t=Ts(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function y_(s,e){const t=Ts(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function b_(s,e){s.uniform1iv(this.addr,e)}function M_(s,e){s.uniform2iv(this.addr,e)}function S_(s,e){s.uniform3iv(this.addr,e)}function w_(s,e){s.uniform4iv(this.addr,e)}function T_(s,e){s.uniform1uiv(this.addr,e)}function E_(s,e){s.uniform2uiv(this.addr,e)}function A_(s,e){s.uniform3uiv(this.addr,e)}function R_(s,e){s.uniform4uiv(this.addr,e)}function C_(s,e,t){const n=this.cache,i=e.length,r=ca(t,i);Nt(n,r)||(s.uniform1iv(this.addr,r),Ut(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Su,r[a])}function P_(s,e,t){const n=this.cache,i=e.length,r=ca(t,i);Nt(n,r)||(s.uniform1iv(this.addr,r),Ut(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Tu,r[a])}function L_(s,e,t){const n=this.cache,i=e.length,r=ca(t,i);Nt(n,r)||(s.uniform1iv(this.addr,r),Ut(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Eu,r[a])}function I_(s,e,t){const n=this.cache,i=e.length,r=ca(t,i);Nt(n,r)||(s.uniform1iv(this.addr,r),Ut(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||wu,r[a])}function D_(s){switch(s){case 5126:return p_;case 35664:return m_;case 35665:return g_;case 35666:return __;case 35674:return v_;case 35675:return x_;case 35676:return y_;case 5124:case 35670:return b_;case 35667:case 35671:return M_;case 35668:case 35672:return S_;case 35669:case 35673:return w_;case 5125:return T_;case 36294:return E_;case 36295:return A_;case 36296:return R_;case 35678:case 36198:case 36298:case 36306:case 35682:return C_;case 35679:case 36299:case 36307:return P_;case 35680:case 36300:case 36308:case 36293:return L_;case 36289:case 36303:case 36311:case 36292:return I_}}class N_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=f_(t.type)}}class U_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=D_(t.type)}}class k_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const $a=/(\w+)(\])?(\[|\.)?/g;function Jc(s,e){s.seq.push(e),s.map[e.id]=e}function O_(s,e,t){const n=s.name,i=n.length;for($a.lastIndex=0;;){const r=$a.exec(n),a=$a.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Jc(t,c===void 0?new N_(o,s,e):new U_(o,s,e));break}else{let u=t.map[o];u===void 0&&(u=new k_(o),Jc(t,u)),t=u}}}class Kr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);O_(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Qc(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const B_=37297;let F_=0;function H_(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const eh=new Ye;function z_(s){et._getMatrix(eh,et.workingColorSpace,s);const e=`mat3( ${eh.elements.map(t=>t.toFixed(4))} )`;switch(et.getTransfer(s)){case Qr:return[e,"LinearTransferOETF"];case pt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function th(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+H_(s.getShaderSource(e),a)}else return i}function G_(s,e){const t=z_(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function V_(s,e){let t;switch(e){case Md:t="Linear";break;case Sd:t="Reinhard";break;case wd:t="Cineon";break;case Ih:t="ACESFilmic";break;case Ed:t="AgX";break;case Ad:t="Neutral";break;case Td:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Wr=new L;function W_(){et.getLuminanceCoefficients(Wr);const s=Wr.x.toFixed(4),e=Wr.y.toFixed(4),t=Wr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function X_(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gs).join(`
`)}function q_(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Y_(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Gs(s){return s!==""}function nh(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ih(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Z_=/^[ \t]*#include +<([\w\d./]+)>/gm;function il(s){return s.replace(Z_,j_)}const $_=new Map;function j_(s,e){let t=$e[e];if(t===void 0){const n=$_.get(e);if(n!==void 0)t=$e[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return il(t)}const K_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sh(s){return s.replace(K_,J_)}function J_(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function rh(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Q_(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Ch?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Ph?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Wn&&(e="SHADOWMAP_TYPE_VSM"),e}function ev(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case us:case ds:e="ENVMAP_TYPE_CUBE";break;case ra:e="ENVMAP_TYPE_CUBE_UV";break}return e}function tv(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ds:e="ENVMAP_MODE_REFRACTION";break}return e}function nv(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Lh:e="ENVMAP_BLENDING_MULTIPLY";break;case yd:e="ENVMAP_BLENDING_MIX";break;case bd:e="ENVMAP_BLENDING_ADD";break}return e}function iv(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function sv(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Q_(t),c=ev(t),h=tv(t),u=nv(t),d=iv(t),f=X_(t),g=q_(r),_=i.createProgram();let m,p,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Gs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Gs).join(`
`),p.length>0&&(p+=`
`)):(m=[rh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gs).join(`
`),p=[rh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==hi?"#define TONE_MAPPING":"",t.toneMapping!==hi?$e.tonemapping_pars_fragment:"",t.toneMapping!==hi?V_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,G_("linearToOutputTexel",t.outputColorSpace),W_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Gs).join(`
`)),a=il(a),a=nh(a,t),a=ih(a,t),o=il(o),o=nh(o,t),o=ih(o,t),a=sh(a),o=sh(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===$l?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===$l?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=x+m+a,v=x+p+o,I=Qc(i,i.VERTEX_SHADER,y),C=Qc(i,i.FRAGMENT_SHADER,v);i.attachShader(_,I),i.attachShader(_,C),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function S(D){if(s.debug.checkShaderErrors){const z=i.getProgramInfoLog(_).trim(),k=i.getShaderInfoLog(I).trim(),G=i.getShaderInfoLog(C).trim();let Y=!0,W=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(Y=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,I,C);else{const Q=th(i,I,"vertex"),X=th(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+z+`
`+Q+`
`+X)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(k===""||G==="")&&(W=!1);W&&(D.diagnostics={runnable:Y,programLog:z,vertexShader:{log:k,prefix:m},fragmentShader:{log:G,prefix:p}})}i.deleteShader(I),i.deleteShader(C),R=new Kr(i,_),T=Y_(i,_)}let R;this.getUniforms=function(){return R===void 0&&S(this),R};let T;this.getAttributes=function(){return T===void 0&&S(this),T};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(_,B_)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=F_++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=I,this.fragmentShader=C,this}let rv=0;class av{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new ov(e),t.set(e,n)),n}}class ov{constructor(e){this.id=rv++,this.code=e,this.usedTimes=0}}function lv(s,e,t,n,i,r,a){const o=new jh,l=new av,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(T){return c.add(T),T===0?"uv":`uv${T}`}function m(T,M,D,z,k){const G=z.fog,Y=k.geometry,W=T.isMeshStandardMaterial?z.environment:null,Q=(T.isMeshStandardMaterial?t:e).get(T.envMap||W),X=Q&&Q.mapping===ra?Q.image.height:null,ue=g[T.type];T.precision!==null&&(f=i.getMaxPrecision(T.precision),f!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",f,"instead."));const me=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,be=me!==void 0?me.length:0;let ze=0;Y.morphAttributes.position!==void 0&&(ze=1),Y.morphAttributes.normal!==void 0&&(ze=2),Y.morphAttributes.color!==void 0&&(ze=3);let it,Z,le,Se;if(ue){const ut=Cn[ue];it=ut.vertexShader,Z=ut.fragmentShader}else it=T.vertexShader,Z=T.fragmentShader,l.update(T),le=l.getVertexShaderID(T),Se=l.getFragmentShaderID(T);const he=s.getRenderTarget(),Ne=s.state.buffers.depth.getReversed(),He=k.isInstancedMesh===!0,Fe=k.isBatchedMesh===!0,rt=!!T.map,te=!!T.matcap,oe=!!Q,P=!!T.aoMap,Ie=!!T.lightMap,ie=!!T.bumpMap,we=!!T.normalMap,ce=!!T.displacementMap,Be=!!T.emissiveMap,ve=!!T.metalnessMap,E=!!T.roughnessMap,b=T.anisotropy>0,F=T.clearcoat>0,j=T.dispersion>0,ne=T.iridescence>0,K=T.sheen>0,Pe=T.transmission>0,pe=b&&!!T.anisotropyMap,Me=F&&!!T.clearcoatMap,Qe=F&&!!T.clearcoatNormalMap,re=F&&!!T.clearcoatRoughnessMap,Ee=ne&&!!T.iridescenceMap,Oe=ne&&!!T.iridescenceThicknessMap,Ge=K&&!!T.sheenColorMap,Ae=K&&!!T.sheenRoughnessMap,st=!!T.specularMap,Ze=!!T.specularColorMap,mt=!!T.specularIntensityMap,N=Pe&&!!T.transmissionMap,ge=Pe&&!!T.thicknessMap,q=!!T.gradientMap,ee=!!T.alphaMap,ye=T.alphaTest>0,xe=!!T.alphaHash,qe=!!T.extensions;let bt=hi;T.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(bt=s.toneMapping);const Vt={shaderID:ue,shaderType:T.type,shaderName:T.name,vertexShader:it,fragmentShader:Z,defines:T.defines,customVertexShaderID:le,customFragmentShaderID:Se,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:f,batching:Fe,batchingColor:Fe&&k._colorsTexture!==null,instancing:He,instancingColor:He&&k.instanceColor!==null,instancingMorph:He&&k.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:he===null?s.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:qt,alphaToCoverage:!!T.alphaToCoverage,map:rt,matcap:te,envMap:oe,envMapMode:oe&&Q.mapping,envMapCubeUVHeight:X,aoMap:P,lightMap:Ie,bumpMap:ie,normalMap:we,displacementMap:d&&ce,emissiveMap:Be,normalMapObjectSpace:we&&T.normalMapType===Dd,normalMapTangentSpace:we&&T.normalMapType===Xh,metalnessMap:ve,roughnessMap:E,anisotropy:b,anisotropyMap:pe,clearcoat:F,clearcoatMap:Me,clearcoatNormalMap:Qe,clearcoatRoughnessMap:re,dispersion:j,iridescence:ne,iridescenceMap:Ee,iridescenceThicknessMap:Oe,sheen:K,sheenColorMap:Ge,sheenRoughnessMap:Ae,specularMap:st,specularColorMap:Ze,specularIntensityMap:mt,transmission:Pe,transmissionMap:N,thicknessMap:ge,gradientMap:q,opaque:T.transparent===!1&&T.blending===as&&T.alphaToCoverage===!1,alphaMap:ee,alphaTest:ye,alphaHash:xe,combine:T.combine,mapUv:rt&&_(T.map.channel),aoMapUv:P&&_(T.aoMap.channel),lightMapUv:Ie&&_(T.lightMap.channel),bumpMapUv:ie&&_(T.bumpMap.channel),normalMapUv:we&&_(T.normalMap.channel),displacementMapUv:ce&&_(T.displacementMap.channel),emissiveMapUv:Be&&_(T.emissiveMap.channel),metalnessMapUv:ve&&_(T.metalnessMap.channel),roughnessMapUv:E&&_(T.roughnessMap.channel),anisotropyMapUv:pe&&_(T.anisotropyMap.channel),clearcoatMapUv:Me&&_(T.clearcoatMap.channel),clearcoatNormalMapUv:Qe&&_(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&_(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&_(T.iridescenceMap.channel),iridescenceThicknessMapUv:Oe&&_(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ge&&_(T.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&_(T.sheenRoughnessMap.channel),specularMapUv:st&&_(T.specularMap.channel),specularColorMapUv:Ze&&_(T.specularColorMap.channel),specularIntensityMapUv:mt&&_(T.specularIntensityMap.channel),transmissionMapUv:N&&_(T.transmissionMap.channel),thicknessMapUv:ge&&_(T.thicknessMap.channel),alphaMapUv:ee&&_(T.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(we||b),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!Y.attributes.uv&&(rt||ee),fog:!!G,useFog:T.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ne,skinning:k.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:ze,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:T.dithering,shadowMapEnabled:s.shadowMap.enabled&&D.length>0,shadowMapType:s.shadowMap.type,toneMapping:bt,decodeVideoTexture:rt&&T.map.isVideoTexture===!0&&et.getTransfer(T.map.colorSpace)===pt,decodeVideoTextureEmissive:Be&&T.emissiveMap.isVideoTexture===!0&&et.getTransfer(T.emissiveMap.colorSpace)===pt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===It,flipSided:T.side===Jt,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:qe&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qe&&T.extensions.multiDraw===!0||Fe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Vt.vertexUv1s=c.has(1),Vt.vertexUv2s=c.has(2),Vt.vertexUv3s=c.has(3),c.clear(),Vt}function p(T){const M=[];if(T.shaderID?M.push(T.shaderID):(M.push(T.customVertexShaderID),M.push(T.customFragmentShaderID)),T.defines!==void 0)for(const D in T.defines)M.push(D),M.push(T.defines[D]);return T.isRawShaderMaterial===!1&&(x(M,T),y(M,T),M.push(s.outputColorSpace)),M.push(T.customProgramCacheKey),M.join()}function x(T,M){T.push(M.precision),T.push(M.outputColorSpace),T.push(M.envMapMode),T.push(M.envMapCubeUVHeight),T.push(M.mapUv),T.push(M.alphaMapUv),T.push(M.lightMapUv),T.push(M.aoMapUv),T.push(M.bumpMapUv),T.push(M.normalMapUv),T.push(M.displacementMapUv),T.push(M.emissiveMapUv),T.push(M.metalnessMapUv),T.push(M.roughnessMapUv),T.push(M.anisotropyMapUv),T.push(M.clearcoatMapUv),T.push(M.clearcoatNormalMapUv),T.push(M.clearcoatRoughnessMapUv),T.push(M.iridescenceMapUv),T.push(M.iridescenceThicknessMapUv),T.push(M.sheenColorMapUv),T.push(M.sheenRoughnessMapUv),T.push(M.specularMapUv),T.push(M.specularColorMapUv),T.push(M.specularIntensityMapUv),T.push(M.transmissionMapUv),T.push(M.thicknessMapUv),T.push(M.combine),T.push(M.fogExp2),T.push(M.sizeAttenuation),T.push(M.morphTargetsCount),T.push(M.morphAttributeCount),T.push(M.numDirLights),T.push(M.numPointLights),T.push(M.numSpotLights),T.push(M.numSpotLightMaps),T.push(M.numHemiLights),T.push(M.numRectAreaLights),T.push(M.numDirLightShadows),T.push(M.numPointLightShadows),T.push(M.numSpotLightShadows),T.push(M.numSpotLightShadowsWithMaps),T.push(M.numLightProbes),T.push(M.shadowMapType),T.push(M.toneMapping),T.push(M.numClippingPlanes),T.push(M.numClipIntersection),T.push(M.depthPacking)}function y(T,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),T.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),T.push(o.mask)}function v(T){const M=g[T.type];let D;if(M){const z=Cn[M];D=Tf.clone(z.uniforms)}else D=T.uniforms;return D}function I(T,M){let D;for(let z=0,k=h.length;z<k;z++){const G=h[z];if(G.cacheKey===M){D=G,++D.usedTimes;break}}return D===void 0&&(D=new sv(s,M,T,r),h.push(D)),D}function C(T){if(--T.usedTimes===0){const M=h.indexOf(T);h[M]=h[h.length-1],h.pop(),T.destroy()}}function S(T){l.remove(T)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:I,releaseProgram:C,releaseShaderCache:S,programs:h,dispose:R}}function cv(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function hv(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function ah(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function oh(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(u,d,f,g,_,m){let p=s[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},s[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),e++,p}function o(u,d,f,g,_,m){const p=a(u,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function l(u,d,f,g,_,m){const p=a(u,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||hv),n.length>1&&n.sort(d||ah),i.length>1&&i.sort(d||ah)}function h(){for(let u=e,d=s.length;u<d;u++){const f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function uv(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new oh,s.set(n,[a])):i>=r.length?(a=new oh,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function dv(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new De};break;case"SpotLight":t={position:new L,direction:new L,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new De,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new De,groundColor:new De};break;case"RectAreaLight":t={color:new De,position:new L,halfWidth:new L,halfHeight:new L};break}return s[e.id]=t,t}}}function fv(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let pv=0;function mv(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function gv(s){const e=new dv,t=fv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);const i=new L,r=new Xe,a=new Xe;function o(c){let h=0,u=0,d=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,x=0,y=0,v=0,I=0,C=0,S=0;c.sort(mv);for(let T=0,M=c.length;T<M;T++){const D=c[T],z=D.color,k=D.intensity,G=D.distance,Y=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=z.r*k,u+=z.g*k,d+=z.b*k;else if(D.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(D.sh.coefficients[W],k);S++}else if(D.isDirectionalLight){const W=e.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const Q=D.shadow,X=t.get(D);X.shadowIntensity=Q.intensity,X.shadowBias=Q.bias,X.shadowNormalBias=Q.normalBias,X.shadowRadius=Q.radius,X.shadowMapSize=Q.mapSize,n.directionalShadow[f]=X,n.directionalShadowMap[f]=Y,n.directionalShadowMatrix[f]=D.shadow.matrix,x++}n.directional[f]=W,f++}else if(D.isSpotLight){const W=e.get(D);W.position.setFromMatrixPosition(D.matrixWorld),W.color.copy(z).multiplyScalar(k),W.distance=G,W.coneCos=Math.cos(D.angle),W.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),W.decay=D.decay,n.spot[_]=W;const Q=D.shadow;if(D.map&&(n.spotLightMap[I]=D.map,I++,Q.updateMatrices(D),D.castShadow&&C++),n.spotLightMatrix[_]=Q.matrix,D.castShadow){const X=t.get(D);X.shadowIntensity=Q.intensity,X.shadowBias=Q.bias,X.shadowNormalBias=Q.normalBias,X.shadowRadius=Q.radius,X.shadowMapSize=Q.mapSize,n.spotShadow[_]=X,n.spotShadowMap[_]=Y,v++}_++}else if(D.isRectAreaLight){const W=e.get(D);W.color.copy(z).multiplyScalar(k),W.halfWidth.set(D.width*.5,0,0),W.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=W,m++}else if(D.isPointLight){const W=e.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),W.distance=D.distance,W.decay=D.decay,D.castShadow){const Q=D.shadow,X=t.get(D);X.shadowIntensity=Q.intensity,X.shadowBias=Q.bias,X.shadowNormalBias=Q.normalBias,X.shadowRadius=Q.radius,X.shadowMapSize=Q.mapSize,X.shadowCameraNear=Q.camera.near,X.shadowCameraFar=Q.camera.far,n.pointShadow[g]=X,n.pointShadowMap[g]=Y,n.pointShadowMatrix[g]=D.shadow.matrix,y++}n.point[g]=W,g++}else if(D.isHemisphereLight){const W=e.get(D);W.skyColor.copy(D.color).multiplyScalar(k),W.groundColor.copy(D.groundColor).multiplyScalar(k),n.hemi[p]=W,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=fe.LTC_FLOAT_1,n.rectAreaLTC2=fe.LTC_FLOAT_2):(n.rectAreaLTC1=fe.LTC_HALF_1,n.rectAreaLTC2=fe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const R=n.hash;(R.directionalLength!==f||R.pointLength!==g||R.spotLength!==_||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==x||R.numPointShadows!==y||R.numSpotShadows!==v||R.numSpotMaps!==I||R.numLightProbes!==S)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=v+I-C,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=S,R.directionalLength=f,R.pointLength=g,R.spotLength=_,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=x,R.numPointShadows=y,R.numSpotShadows=v,R.numSpotMaps=I,R.numLightProbes=S,n.version=pv++)}function l(c,h){let u=0,d=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,x=c.length;p<x;p++){const y=c[p];if(y.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),u++}else if(y.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),f++}else if(y.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),a.identity(),r.copy(y.matrixWorld),r.premultiply(m),a.extractRotation(r),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function lh(s){const e=new gv(s),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function _v(s){let e=new WeakMap;function t(i,r=0){const a=e.get(i);let o;return a===void 0?(o=new lh(s),e.set(i,[o])):r>=a.length?(o=new lh(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const vv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function yv(s,e,t){let n=new yl;const i=new ae,r=new ae,a=new lt,o=new vp({depthPacking:Id}),l=new xp,c={},h=t.maxTextureSize,u={[jn]:Jt,[Jt]:jn,[It]:It},d=new Ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ae},radius:{value:4}},vertexShader:vv,fragmentShader:xv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Tt;g.setAttribute("position",new Ft(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new A(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ch;let p=this.type;this.render=function(C,S,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const T=s.getRenderTarget(),M=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),z=s.state;z.setBlending(ci),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const k=p!==Wn&&this.type===Wn,G=p===Wn&&this.type!==Wn;for(let Y=0,W=C.length;Y<W;Y++){const Q=C[Y],X=Q.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;i.copy(X.mapSize);const ue=X.getFrameExtents();if(i.multiply(ue),r.copy(X.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/ue.x),i.x=r.x*ue.x,X.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/ue.y),i.y=r.y*ue.y,X.mapSize.y=r.y)),X.map===null||k===!0||G===!0){const be=this.type!==Wn?{minFilter:Qt,magFilter:Qt}:{};X.map!==null&&X.map.dispose(),X.map=new Li(i.x,i.y,be),X.map.texture.name=Q.name+".shadowMap",X.camera.updateProjectionMatrix()}s.setRenderTarget(X.map),s.clear();const me=X.getViewportCount();for(let be=0;be<me;be++){const ze=X.getViewport(be);a.set(r.x*ze.x,r.y*ze.y,r.x*ze.z,r.y*ze.w),z.viewport(a),X.updateMatrices(Q,be),n=X.getFrustum(),v(S,R,X.camera,Q,this.type)}X.isPointLightShadow!==!0&&this.type===Wn&&x(X,R),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(T,M,D)};function x(C,S){const R=e.update(_);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Li(i.x,i.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,s.setRenderTarget(C.mapPass),s.clear(),s.renderBufferDirect(S,null,R,d,_,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,s.setRenderTarget(C.map),s.clear(),s.renderBufferDirect(S,null,R,f,_,null)}function y(C,S,R,T){let M=null;const D=R.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(D!==void 0)M=D;else if(M=R.isPointLight===!0?l:o,s.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const z=M.uuid,k=S.uuid;let G=c[z];G===void 0&&(G={},c[z]=G);let Y=G[k];Y===void 0&&(Y=M.clone(),G[k]=Y,S.addEventListener("dispose",I)),M=Y}if(M.visible=S.visible,M.wireframe=S.wireframe,T===Wn?M.side=S.shadowSide!==null?S.shadowSide:S.side:M.side=S.shadowSide!==null?S.shadowSide:u[S.side],M.alphaMap=S.alphaMap,M.alphaTest=S.alphaTest,M.map=S.map,M.clipShadows=S.clipShadows,M.clippingPlanes=S.clippingPlanes,M.clipIntersection=S.clipIntersection,M.displacementMap=S.displacementMap,M.displacementScale=S.displacementScale,M.displacementBias=S.displacementBias,M.wireframeLinewidth=S.wireframeLinewidth,M.linewidth=S.linewidth,R.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const z=s.properties.get(M);z.light=R}return M}function v(C,S,R,T,M){if(C.visible===!1)return;if(C.layers.test(S.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===Wn)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,C.matrixWorld);const k=e.update(C),G=C.material;if(Array.isArray(G)){const Y=k.groups;for(let W=0,Q=Y.length;W<Q;W++){const X=Y[W],ue=G[X.materialIndex];if(ue&&ue.visible){const me=y(C,ue,T,M);C.onBeforeShadow(s,C,S,R,k,me,X),s.renderBufferDirect(R,null,k,me,C,X),C.onAfterShadow(s,C,S,R,k,me,X)}}}else if(G.visible){const Y=y(C,G,T,M);C.onBeforeShadow(s,C,S,R,k,Y,null),s.renderBufferDirect(R,null,k,Y,C,null),C.onAfterShadow(s,C,S,R,k,Y,null)}}const z=C.children;for(let k=0,G=z.length;k<G;k++)v(z[k],S,R,T,M)}function I(C){C.target.removeEventListener("dispose",I);for(const R in c){const T=c[R],M=C.target.uuid;M in T&&(T[M].dispose(),delete T[M])}}}const bv={[fo]:po,[mo]:vo,[go]:xo,[hs]:_o,[po]:fo,[vo]:mo,[xo]:go,[_o]:hs};function Mv(s,e){function t(){let N=!1;const ge=new lt;let q=null;const ee=new lt(0,0,0,0);return{setMask:function(ye){q!==ye&&!N&&(s.colorMask(ye,ye,ye,ye),q=ye)},setLocked:function(ye){N=ye},setClear:function(ye,xe,qe,bt,Vt){Vt===!0&&(ye*=bt,xe*=bt,qe*=bt),ge.set(ye,xe,qe,bt),ee.equals(ge)===!1&&(s.clearColor(ye,xe,qe,bt),ee.copy(ge))},reset:function(){N=!1,q=null,ee.set(-1,0,0,0)}}}function n(){let N=!1,ge=!1,q=null,ee=null,ye=null;return{setReversed:function(xe){if(ge!==xe){const qe=e.get("EXT_clip_control");ge?qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.ZERO_TO_ONE_EXT):qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.NEGATIVE_ONE_TO_ONE_EXT);const bt=ye;ye=null,this.setClear(bt)}ge=xe},getReversed:function(){return ge},setTest:function(xe){xe?he(s.DEPTH_TEST):Ne(s.DEPTH_TEST)},setMask:function(xe){q!==xe&&!N&&(s.depthMask(xe),q=xe)},setFunc:function(xe){if(ge&&(xe=bv[xe]),ee!==xe){switch(xe){case fo:s.depthFunc(s.NEVER);break;case po:s.depthFunc(s.ALWAYS);break;case mo:s.depthFunc(s.LESS);break;case hs:s.depthFunc(s.LEQUAL);break;case go:s.depthFunc(s.EQUAL);break;case _o:s.depthFunc(s.GEQUAL);break;case vo:s.depthFunc(s.GREATER);break;case xo:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ee=xe}},setLocked:function(xe){N=xe},setClear:function(xe){ye!==xe&&(ge&&(xe=1-xe),s.clearDepth(xe),ye=xe)},reset:function(){N=!1,q=null,ee=null,ye=null,ge=!1}}}function i(){let N=!1,ge=null,q=null,ee=null,ye=null,xe=null,qe=null,bt=null,Vt=null;return{setTest:function(ut){N||(ut?he(s.STENCIL_TEST):Ne(s.STENCIL_TEST))},setMask:function(ut){ge!==ut&&!N&&(s.stencilMask(ut),ge=ut)},setFunc:function(ut,bn,On){(q!==ut||ee!==bn||ye!==On)&&(s.stencilFunc(ut,bn,On),q=ut,ee=bn,ye=On)},setOp:function(ut,bn,On){(xe!==ut||qe!==bn||bt!==On)&&(s.stencilOp(ut,bn,On),xe=ut,qe=bn,bt=On)},setLocked:function(ut){N=ut},setClear:function(ut){Vt!==ut&&(s.clearStencil(ut),Vt=ut)},reset:function(){N=!1,ge=null,q=null,ee=null,ye=null,xe=null,qe=null,bt=null,Vt=null}}}const r=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,x=null,y=null,v=null,I=null,C=null,S=new De(0,0,0),R=0,T=!1,M=null,D=null,z=null,k=null,G=null;const Y=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,Q=0;const X=s.getParameter(s.VERSION);X.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(X)[1]),W=Q>=1):X.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),W=Q>=2);let ue=null,me={};const be=s.getParameter(s.SCISSOR_BOX),ze=s.getParameter(s.VIEWPORT),it=new lt().fromArray(be),Z=new lt().fromArray(ze);function le(N,ge,q,ee){const ye=new Uint8Array(4),xe=s.createTexture();s.bindTexture(N,xe),s.texParameteri(N,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(N,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let qe=0;qe<q;qe++)N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY?s.texImage3D(ge,0,s.RGBA,1,1,ee,0,s.RGBA,s.UNSIGNED_BYTE,ye):s.texImage2D(ge+qe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ye);return xe}const Se={};Se[s.TEXTURE_2D]=le(s.TEXTURE_2D,s.TEXTURE_2D,1),Se[s.TEXTURE_CUBE_MAP]=le(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[s.TEXTURE_2D_ARRAY]=le(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Se[s.TEXTURE_3D]=le(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),he(s.DEPTH_TEST),a.setFunc(hs),ie(!1),we(zl),he(s.CULL_FACE),P(ci);function he(N){h[N]!==!0&&(s.enable(N),h[N]=!0)}function Ne(N){h[N]!==!1&&(s.disable(N),h[N]=!1)}function He(N,ge){return u[N]!==ge?(s.bindFramebuffer(N,ge),u[N]=ge,N===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=ge),N===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=ge),!0):!1}function Fe(N,ge){let q=f,ee=!1;if(N){q=d.get(ge),q===void 0&&(q=[],d.set(ge,q));const ye=N.textures;if(q.length!==ye.length||q[0]!==s.COLOR_ATTACHMENT0){for(let xe=0,qe=ye.length;xe<qe;xe++)q[xe]=s.COLOR_ATTACHMENT0+xe;q.length=ye.length,ee=!0}}else q[0]!==s.BACK&&(q[0]=s.BACK,ee=!0);ee&&s.drawBuffers(q)}function rt(N){return g!==N?(s.useProgram(N),g=N,!0):!1}const te={[Ai]:s.FUNC_ADD,[id]:s.FUNC_SUBTRACT,[sd]:s.FUNC_REVERSE_SUBTRACT};te[rd]=s.MIN,te[ad]=s.MAX;const oe={[od]:s.ZERO,[ld]:s.ONE,[cd]:s.SRC_COLOR,[ho]:s.SRC_ALPHA,[md]:s.SRC_ALPHA_SATURATE,[fd]:s.DST_COLOR,[ud]:s.DST_ALPHA,[hd]:s.ONE_MINUS_SRC_COLOR,[uo]:s.ONE_MINUS_SRC_ALPHA,[pd]:s.ONE_MINUS_DST_COLOR,[dd]:s.ONE_MINUS_DST_ALPHA,[gd]:s.CONSTANT_COLOR,[_d]:s.ONE_MINUS_CONSTANT_COLOR,[vd]:s.CONSTANT_ALPHA,[xd]:s.ONE_MINUS_CONSTANT_ALPHA};function P(N,ge,q,ee,ye,xe,qe,bt,Vt,ut){if(N===ci){_===!0&&(Ne(s.BLEND),_=!1);return}if(_===!1&&(he(s.BLEND),_=!0),N!==nd){if(N!==m||ut!==T){if((p!==Ai||v!==Ai)&&(s.blendEquation(s.FUNC_ADD),p=Ai,v=Ai),ut)switch(N){case as:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case co:s.blendFunc(s.ONE,s.ONE);break;case Gl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Vl:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case as:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case co:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Gl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Vl:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}x=null,y=null,I=null,C=null,S.set(0,0,0),R=0,m=N,T=ut}return}ye=ye||ge,xe=xe||q,qe=qe||ee,(ge!==p||ye!==v)&&(s.blendEquationSeparate(te[ge],te[ye]),p=ge,v=ye),(q!==x||ee!==y||xe!==I||qe!==C)&&(s.blendFuncSeparate(oe[q],oe[ee],oe[xe],oe[qe]),x=q,y=ee,I=xe,C=qe),(bt.equals(S)===!1||Vt!==R)&&(s.blendColor(bt.r,bt.g,bt.b,Vt),S.copy(bt),R=Vt),m=N,T=!1}function Ie(N,ge){N.side===It?Ne(s.CULL_FACE):he(s.CULL_FACE);let q=N.side===Jt;ge&&(q=!q),ie(q),N.blending===as&&N.transparent===!1?P(ci):P(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);const ee=N.stencilWrite;o.setTest(ee),ee&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Be(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?he(s.SAMPLE_ALPHA_TO_COVERAGE):Ne(s.SAMPLE_ALPHA_TO_COVERAGE)}function ie(N){M!==N&&(N?s.frontFace(s.CW):s.frontFace(s.CCW),M=N)}function we(N){N!==ed?(he(s.CULL_FACE),N!==D&&(N===zl?s.cullFace(s.BACK):N===td?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ne(s.CULL_FACE),D=N}function ce(N){N!==z&&(W&&s.lineWidth(N),z=N)}function Be(N,ge,q){N?(he(s.POLYGON_OFFSET_FILL),(k!==ge||G!==q)&&(s.polygonOffset(ge,q),k=ge,G=q)):Ne(s.POLYGON_OFFSET_FILL)}function ve(N){N?he(s.SCISSOR_TEST):Ne(s.SCISSOR_TEST)}function E(N){N===void 0&&(N=s.TEXTURE0+Y-1),ue!==N&&(s.activeTexture(N),ue=N)}function b(N,ge,q){q===void 0&&(ue===null?q=s.TEXTURE0+Y-1:q=ue);let ee=me[q];ee===void 0&&(ee={type:void 0,texture:void 0},me[q]=ee),(ee.type!==N||ee.texture!==ge)&&(ue!==q&&(s.activeTexture(q),ue=q),s.bindTexture(N,ge||Se[N]),ee.type=N,ee.texture=ge)}function F(){const N=me[ue];N!==void 0&&N.type!==void 0&&(s.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function j(){try{s.compressedTexImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ne(){try{s.compressedTexImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function K(){try{s.texSubImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Pe(){try{s.texSubImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function pe(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Me(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Qe(){try{s.texStorage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function re(){try{s.texStorage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ee(){try{s.texImage2D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Oe(){try{s.texImage3D.apply(s,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ge(N){it.equals(N)===!1&&(s.scissor(N.x,N.y,N.z,N.w),it.copy(N))}function Ae(N){Z.equals(N)===!1&&(s.viewport(N.x,N.y,N.z,N.w),Z.copy(N))}function st(N,ge){let q=c.get(ge);q===void 0&&(q=new WeakMap,c.set(ge,q));let ee=q.get(N);ee===void 0&&(ee=s.getUniformBlockIndex(ge,N.name),q.set(N,ee))}function Ze(N,ge){const ee=c.get(ge).get(N);l.get(ge)!==ee&&(s.uniformBlockBinding(ge,ee,N.__bindingPointIndex),l.set(ge,ee))}function mt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},ue=null,me={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,x=null,y=null,v=null,I=null,C=null,S=new De(0,0,0),R=0,T=!1,M=null,D=null,z=null,k=null,G=null,it.set(0,0,s.canvas.width,s.canvas.height),Z.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:he,disable:Ne,bindFramebuffer:He,drawBuffers:Fe,useProgram:rt,setBlending:P,setMaterial:Ie,setFlipSided:ie,setCullFace:we,setLineWidth:ce,setPolygonOffset:Be,setScissorTest:ve,activeTexture:E,bindTexture:b,unbindTexture:F,compressedTexImage2D:j,compressedTexImage3D:ne,texImage2D:Ee,texImage3D:Oe,updateUBOMapping:st,uniformBlockBinding:Ze,texStorage2D:Qe,texStorage3D:re,texSubImage2D:K,texSubImage3D:Pe,compressedTexSubImage2D:pe,compressedTexSubImage3D:Me,scissor:Ge,viewport:Ae,reset:mt}}function Sv(s,e,t,n,i,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ae,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,b){return f?new OffscreenCanvas(E,b):er("canvas")}function _(E,b,F){let j=1;const ne=ve(E);if((ne.width>F||ne.height>F)&&(j=F/Math.max(ne.width,ne.height)),j<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const K=Math.floor(j*ne.width),Pe=Math.floor(j*ne.height);u===void 0&&(u=g(K,Pe));const pe=b?g(K,Pe):u;return pe.width=K,pe.height=Pe,pe.getContext("2d").drawImage(E,0,0,K,Pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+K+"x"+Pe+")."),pe}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),E;return E}function m(E){return E.generateMipmaps}function p(E){s.generateMipmap(E)}function x(E){return E.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?s.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function y(E,b,F,j,ne=!1){if(E!==null){if(s[E]!==void 0)return s[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let K=b;if(b===s.RED&&(F===s.FLOAT&&(K=s.R32F),F===s.HALF_FLOAT&&(K=s.R16F),F===s.UNSIGNED_BYTE&&(K=s.R8)),b===s.RED_INTEGER&&(F===s.UNSIGNED_BYTE&&(K=s.R8UI),F===s.UNSIGNED_SHORT&&(K=s.R16UI),F===s.UNSIGNED_INT&&(K=s.R32UI),F===s.BYTE&&(K=s.R8I),F===s.SHORT&&(K=s.R16I),F===s.INT&&(K=s.R32I)),b===s.RG&&(F===s.FLOAT&&(K=s.RG32F),F===s.HALF_FLOAT&&(K=s.RG16F),F===s.UNSIGNED_BYTE&&(K=s.RG8)),b===s.RG_INTEGER&&(F===s.UNSIGNED_BYTE&&(K=s.RG8UI),F===s.UNSIGNED_SHORT&&(K=s.RG16UI),F===s.UNSIGNED_INT&&(K=s.RG32UI),F===s.BYTE&&(K=s.RG8I),F===s.SHORT&&(K=s.RG16I),F===s.INT&&(K=s.RG32I)),b===s.RGB_INTEGER&&(F===s.UNSIGNED_BYTE&&(K=s.RGB8UI),F===s.UNSIGNED_SHORT&&(K=s.RGB16UI),F===s.UNSIGNED_INT&&(K=s.RGB32UI),F===s.BYTE&&(K=s.RGB8I),F===s.SHORT&&(K=s.RGB16I),F===s.INT&&(K=s.RGB32I)),b===s.RGBA_INTEGER&&(F===s.UNSIGNED_BYTE&&(K=s.RGBA8UI),F===s.UNSIGNED_SHORT&&(K=s.RGBA16UI),F===s.UNSIGNED_INT&&(K=s.RGBA32UI),F===s.BYTE&&(K=s.RGBA8I),F===s.SHORT&&(K=s.RGBA16I),F===s.INT&&(K=s.RGBA32I)),b===s.RGB&&F===s.UNSIGNED_INT_5_9_9_9_REV&&(K=s.RGB9_E5),b===s.RGBA){const Pe=ne?Qr:et.getTransfer(j);F===s.FLOAT&&(K=s.RGBA32F),F===s.HALF_FLOAT&&(K=s.RGBA16F),F===s.UNSIGNED_BYTE&&(K=Pe===pt?s.SRGB8_ALPHA8:s.RGBA8),F===s.UNSIGNED_SHORT_4_4_4_4&&(K=s.RGBA4),F===s.UNSIGNED_SHORT_5_5_5_1&&(K=s.RGB5_A1)}return(K===s.R16F||K===s.R32F||K===s.RG16F||K===s.RG32F||K===s.RGBA16F||K===s.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function v(E,b){let F;return E?b===null||b===Pi||b===fs?F=s.DEPTH24_STENCIL8:b===An?F=s.DEPTH32F_STENCIL8:b===Ks&&(F=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Pi||b===fs?F=s.DEPTH_COMPONENT24:b===An?F=s.DEPTH_COMPONENT32F:b===Ks&&(F=s.DEPTH_COMPONENT16),F}function I(E,b){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==Qt&&E.minFilter!==on?Math.log2(Math.max(b.width,b.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?b.mipmaps.length:1}function C(E){const b=E.target;b.removeEventListener("dispose",C),R(b),b.isVideoTexture&&h.delete(b)}function S(E){const b=E.target;b.removeEventListener("dispose",S),M(b)}function R(E){const b=n.get(E);if(b.__webglInit===void 0)return;const F=E.source,j=d.get(F);if(j){const ne=j[b.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&T(E),Object.keys(j).length===0&&d.delete(F)}n.remove(E)}function T(E){const b=n.get(E);s.deleteTexture(b.__webglTexture);const F=E.source,j=d.get(F);delete j[b.__cacheKey],a.memory.textures--}function M(E){const b=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(b.__webglFramebuffer[j]))for(let ne=0;ne<b.__webglFramebuffer[j].length;ne++)s.deleteFramebuffer(b.__webglFramebuffer[j][ne]);else s.deleteFramebuffer(b.__webglFramebuffer[j]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[j])}else{if(Array.isArray(b.__webglFramebuffer))for(let j=0;j<b.__webglFramebuffer.length;j++)s.deleteFramebuffer(b.__webglFramebuffer[j]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let j=0;j<b.__webglColorRenderbuffer.length;j++)b.__webglColorRenderbuffer[j]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[j]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const F=E.textures;for(let j=0,ne=F.length;j<ne;j++){const K=n.get(F[j]);K.__webglTexture&&(s.deleteTexture(K.__webglTexture),a.memory.textures--),n.remove(F[j])}n.remove(E)}let D=0;function z(){D=0}function k(){const E=D;return E>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+i.maxTextures),D+=1,E}function G(E){const b=[];return b.push(E.wrapS),b.push(E.wrapT),b.push(E.wrapR||0),b.push(E.magFilter),b.push(E.minFilter),b.push(E.anisotropy),b.push(E.internalFormat),b.push(E.format),b.push(E.type),b.push(E.generateMipmaps),b.push(E.premultiplyAlpha),b.push(E.flipY),b.push(E.unpackAlignment),b.push(E.colorSpace),b.join()}function Y(E,b){const F=n.get(E);if(E.isVideoTexture&&ce(E),E.isRenderTargetTexture===!1&&E.version>0&&F.__version!==E.version){const j=E.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(F,E,b);return}}t.bindTexture(s.TEXTURE_2D,F.__webglTexture,s.TEXTURE0+b)}function W(E,b){const F=n.get(E);if(E.version>0&&F.__version!==E.version){Z(F,E,b);return}t.bindTexture(s.TEXTURE_2D_ARRAY,F.__webglTexture,s.TEXTURE0+b)}function Q(E,b){const F=n.get(E);if(E.version>0&&F.__version!==E.version){Z(F,E,b);return}t.bindTexture(s.TEXTURE_3D,F.__webglTexture,s.TEXTURE0+b)}function X(E,b){const F=n.get(E);if(E.version>0&&F.__version!==E.version){le(F,E,b);return}t.bindTexture(s.TEXTURE_CUBE_MAP,F.__webglTexture,s.TEXTURE0+b)}const ue={[ui]:s.REPEAT,[St]:s.CLAMP_TO_EDGE,[Jr]:s.MIRRORED_REPEAT},me={[Qt]:s.NEAREST,[Nh]:s.NEAREST_MIPMAP_NEAREST,[Hs]:s.NEAREST_MIPMAP_LINEAR,[on]:s.LINEAR,[Xr]:s.LINEAR_MIPMAP_NEAREST,[qn]:s.LINEAR_MIPMAP_LINEAR},be={[Nd]:s.NEVER,[Hd]:s.ALWAYS,[Ud]:s.LESS,[qh]:s.LEQUAL,[kd]:s.EQUAL,[Fd]:s.GEQUAL,[Od]:s.GREATER,[Bd]:s.NOTEQUAL};function ze(E,b){if(b.type===An&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===on||b.magFilter===Xr||b.magFilter===Hs||b.magFilter===qn||b.minFilter===on||b.minFilter===Xr||b.minFilter===Hs||b.minFilter===qn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(E,s.TEXTURE_WRAP_S,ue[b.wrapS]),s.texParameteri(E,s.TEXTURE_WRAP_T,ue[b.wrapT]),(E===s.TEXTURE_3D||E===s.TEXTURE_2D_ARRAY)&&s.texParameteri(E,s.TEXTURE_WRAP_R,ue[b.wrapR]),s.texParameteri(E,s.TEXTURE_MAG_FILTER,me[b.magFilter]),s.texParameteri(E,s.TEXTURE_MIN_FILTER,me[b.minFilter]),b.compareFunction&&(s.texParameteri(E,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(E,s.TEXTURE_COMPARE_FUNC,be[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Qt||b.minFilter!==Hs&&b.minFilter!==qn||b.type===An&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");s.texParameterf(E,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function it(E,b){let F=!1;E.__webglInit===void 0&&(E.__webglInit=!0,b.addEventListener("dispose",C));const j=b.source;let ne=d.get(j);ne===void 0&&(ne={},d.set(j,ne));const K=G(b);if(K!==E.__cacheKey){ne[K]===void 0&&(ne[K]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,F=!0),ne[K].usedTimes++;const Pe=ne[E.__cacheKey];Pe!==void 0&&(ne[E.__cacheKey].usedTimes--,Pe.usedTimes===0&&T(b)),E.__cacheKey=K,E.__webglTexture=ne[K].texture}return F}function Z(E,b,F){let j=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(j=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(j=s.TEXTURE_3D);const ne=it(E,b),K=b.source;t.bindTexture(j,E.__webglTexture,s.TEXTURE0+F);const Pe=n.get(K);if(K.version!==Pe.__version||ne===!0){t.activeTexture(s.TEXTURE0+F);const pe=et.getPrimaries(et.workingColorSpace),Me=b.colorSpace===_n?null:et.getPrimaries(b.colorSpace),Qe=b.colorSpace===_n||pe===Me?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qe);let re=_(b.image,!1,i.maxTextureSize);re=Be(b,re);const Ee=r.convert(b.format,b.colorSpace),Oe=r.convert(b.type);let Ge=y(b.internalFormat,Ee,Oe,b.colorSpace,b.isVideoTexture);ze(j,b);let Ae;const st=b.mipmaps,Ze=b.isVideoTexture!==!0,mt=Pe.__version===void 0||ne===!0,N=K.dataReady,ge=I(b,re);if(b.isDepthTexture)Ge=v(b.format===ps,b.type),mt&&(Ze?t.texStorage2D(s.TEXTURE_2D,1,Ge,re.width,re.height):t.texImage2D(s.TEXTURE_2D,0,Ge,re.width,re.height,0,Ee,Oe,null));else if(b.isDataTexture)if(st.length>0){Ze&&mt&&t.texStorage2D(s.TEXTURE_2D,ge,Ge,st[0].width,st[0].height);for(let q=0,ee=st.length;q<ee;q++)Ae=st[q],Ze?N&&t.texSubImage2D(s.TEXTURE_2D,q,0,0,Ae.width,Ae.height,Ee,Oe,Ae.data):t.texImage2D(s.TEXTURE_2D,q,Ge,Ae.width,Ae.height,0,Ee,Oe,Ae.data);b.generateMipmaps=!1}else Ze?(mt&&t.texStorage2D(s.TEXTURE_2D,ge,Ge,re.width,re.height),N&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,re.width,re.height,Ee,Oe,re.data)):t.texImage2D(s.TEXTURE_2D,0,Ge,re.width,re.height,0,Ee,Oe,re.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ze&&mt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ge,Ge,st[0].width,st[0].height,re.depth);for(let q=0,ee=st.length;q<ee;q++)if(Ae=st[q],b.format!==xn)if(Ee!==null)if(Ze){if(N)if(b.layerUpdates.size>0){const ye=Fc(Ae.width,Ae.height,b.format,b.type);for(const xe of b.layerUpdates){const qe=Ae.data.subarray(xe*ye/Ae.data.BYTES_PER_ELEMENT,(xe+1)*ye/Ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,xe,Ae.width,Ae.height,1,Ee,qe)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,0,Ae.width,Ae.height,re.depth,Ee,Ae.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,q,Ge,Ae.width,Ae.height,re.depth,0,Ae.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ze?N&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,0,Ae.width,Ae.height,re.depth,Ee,Oe,Ae.data):t.texImage3D(s.TEXTURE_2D_ARRAY,q,Ge,Ae.width,Ae.height,re.depth,0,Ee,Oe,Ae.data)}else{Ze&&mt&&t.texStorage2D(s.TEXTURE_2D,ge,Ge,st[0].width,st[0].height);for(let q=0,ee=st.length;q<ee;q++)Ae=st[q],b.format!==xn?Ee!==null?Ze?N&&t.compressedTexSubImage2D(s.TEXTURE_2D,q,0,0,Ae.width,Ae.height,Ee,Ae.data):t.compressedTexImage2D(s.TEXTURE_2D,q,Ge,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?N&&t.texSubImage2D(s.TEXTURE_2D,q,0,0,Ae.width,Ae.height,Ee,Oe,Ae.data):t.texImage2D(s.TEXTURE_2D,q,Ge,Ae.width,Ae.height,0,Ee,Oe,Ae.data)}else if(b.isDataArrayTexture)if(Ze){if(mt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ge,Ge,re.width,re.height,re.depth),N)if(b.layerUpdates.size>0){const q=Fc(re.width,re.height,b.format,b.type);for(const ee of b.layerUpdates){const ye=re.data.subarray(ee*q/re.data.BYTES_PER_ELEMENT,(ee+1)*q/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ee,re.width,re.height,1,Ee,Oe,ye)}b.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,Ee,Oe,re.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ge,re.width,re.height,re.depth,0,Ee,Oe,re.data);else if(b.isData3DTexture)Ze?(mt&&t.texStorage3D(s.TEXTURE_3D,ge,Ge,re.width,re.height,re.depth),N&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,Ee,Oe,re.data)):t.texImage3D(s.TEXTURE_3D,0,Ge,re.width,re.height,re.depth,0,Ee,Oe,re.data);else if(b.isFramebufferTexture){if(mt)if(Ze)t.texStorage2D(s.TEXTURE_2D,ge,Ge,re.width,re.height);else{let q=re.width,ee=re.height;for(let ye=0;ye<ge;ye++)t.texImage2D(s.TEXTURE_2D,ye,Ge,q,ee,0,Ee,Oe,null),q>>=1,ee>>=1}}else if(st.length>0){if(Ze&&mt){const q=ve(st[0]);t.texStorage2D(s.TEXTURE_2D,ge,Ge,q.width,q.height)}for(let q=0,ee=st.length;q<ee;q++)Ae=st[q],Ze?N&&t.texSubImage2D(s.TEXTURE_2D,q,0,0,Ee,Oe,Ae):t.texImage2D(s.TEXTURE_2D,q,Ge,Ee,Oe,Ae);b.generateMipmaps=!1}else if(Ze){if(mt){const q=ve(re);t.texStorage2D(s.TEXTURE_2D,ge,Ge,q.width,q.height)}N&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ee,Oe,re)}else t.texImage2D(s.TEXTURE_2D,0,Ge,Ee,Oe,re);m(b)&&p(j),Pe.__version=K.version,b.onUpdate&&b.onUpdate(b)}E.__version=b.version}function le(E,b,F){if(b.image.length!==6)return;const j=it(E,b),ne=b.source;t.bindTexture(s.TEXTURE_CUBE_MAP,E.__webglTexture,s.TEXTURE0+F);const K=n.get(ne);if(ne.version!==K.__version||j===!0){t.activeTexture(s.TEXTURE0+F);const Pe=et.getPrimaries(et.workingColorSpace),pe=b.colorSpace===_n?null:et.getPrimaries(b.colorSpace),Me=b.colorSpace===_n||Pe===pe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const Qe=b.isCompressedTexture||b.image[0].isCompressedTexture,re=b.image[0]&&b.image[0].isDataTexture,Ee=[];for(let ee=0;ee<6;ee++)!Qe&&!re?Ee[ee]=_(b.image[ee],!0,i.maxCubemapSize):Ee[ee]=re?b.image[ee].image:b.image[ee],Ee[ee]=Be(b,Ee[ee]);const Oe=Ee[0],Ge=r.convert(b.format,b.colorSpace),Ae=r.convert(b.type),st=y(b.internalFormat,Ge,Ae,b.colorSpace),Ze=b.isVideoTexture!==!0,mt=K.__version===void 0||j===!0,N=ne.dataReady;let ge=I(b,Oe);ze(s.TEXTURE_CUBE_MAP,b);let q;if(Qe){Ze&&mt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ge,st,Oe.width,Oe.height);for(let ee=0;ee<6;ee++){q=Ee[ee].mipmaps;for(let ye=0;ye<q.length;ye++){const xe=q[ye];b.format!==xn?Ge!==null?Ze?N&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ye,0,0,xe.width,xe.height,Ge,xe.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ye,st,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ze?N&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ye,0,0,xe.width,xe.height,Ge,Ae,xe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ye,st,xe.width,xe.height,0,Ge,Ae,xe.data)}}}else{if(q=b.mipmaps,Ze&&mt){q.length>0&&ge++;const ee=ve(Ee[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,ge,st,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(re){Ze?N&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Ee[ee].width,Ee[ee].height,Ge,Ae,Ee[ee].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,st,Ee[ee].width,Ee[ee].height,0,Ge,Ae,Ee[ee].data);for(let ye=0;ye<q.length;ye++){const qe=q[ye].image[ee].image;Ze?N&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ye+1,0,0,qe.width,qe.height,Ge,Ae,qe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ye+1,st,qe.width,qe.height,0,Ge,Ae,qe.data)}}else{Ze?N&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Ge,Ae,Ee[ee]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,st,Ge,Ae,Ee[ee]);for(let ye=0;ye<q.length;ye++){const xe=q[ye];Ze?N&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ye+1,0,0,Ge,Ae,xe.image[ee]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ye+1,st,Ge,Ae,xe.image[ee])}}}m(b)&&p(s.TEXTURE_CUBE_MAP),K.__version=ne.version,b.onUpdate&&b.onUpdate(b)}E.__version=b.version}function Se(E,b,F,j,ne,K){const Pe=r.convert(F.format,F.colorSpace),pe=r.convert(F.type),Me=y(F.internalFormat,Pe,pe,F.colorSpace),Qe=n.get(b),re=n.get(F);if(re.__renderTarget=b,!Qe.__hasExternalTextures){const Ee=Math.max(1,b.width>>K),Oe=Math.max(1,b.height>>K);ne===s.TEXTURE_3D||ne===s.TEXTURE_2D_ARRAY?t.texImage3D(ne,K,Me,Ee,Oe,b.depth,0,Pe,pe,null):t.texImage2D(ne,K,Me,Ee,Oe,0,Pe,pe,null)}t.bindFramebuffer(s.FRAMEBUFFER,E),we(b)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,j,ne,re.__webglTexture,0,ie(b)):(ne===s.TEXTURE_2D||ne>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,j,ne,re.__webglTexture,K),t.bindFramebuffer(s.FRAMEBUFFER,null)}function he(E,b,F){if(s.bindRenderbuffer(s.RENDERBUFFER,E),b.depthBuffer){const j=b.depthTexture,ne=j&&j.isDepthTexture?j.type:null,K=v(b.stencilBuffer,ne),Pe=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,pe=ie(b);we(b)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,pe,K,b.width,b.height):F?s.renderbufferStorageMultisample(s.RENDERBUFFER,pe,K,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,K,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Pe,s.RENDERBUFFER,E)}else{const j=b.textures;for(let ne=0;ne<j.length;ne++){const K=j[ne],Pe=r.convert(K.format,K.colorSpace),pe=r.convert(K.type),Me=y(K.internalFormat,Pe,pe,K.colorSpace),Qe=ie(b);F&&we(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Qe,Me,b.width,b.height):we(b)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Qe,Me,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,Me,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ne(E,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,E),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(b.depthTexture);j.__renderTarget=b,(!j.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),Y(b.depthTexture,0);const ne=j.__webglTexture,K=ie(b);if(b.depthTexture.format===os)we(b)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ne,0,K):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ne,0);else if(b.depthTexture.format===ps)we(b)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ne,0,K):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function He(E){const b=n.get(E),F=E.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==E.depthTexture){const j=E.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),j){const ne=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,j.removeEventListener("dispose",ne)};j.addEventListener("dispose",ne),b.__depthDisposeCallback=ne}b.__boundDepthTexture=j}if(E.depthTexture&&!b.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Ne(b.__webglFramebuffer,E)}else if(F){b.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[j]),b.__webglDepthbuffer[j]===void 0)b.__webglDepthbuffer[j]=s.createRenderbuffer(),he(b.__webglDepthbuffer[j],E,!1);else{const ne=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,K=b.__webglDepthbuffer[j];s.bindRenderbuffer(s.RENDERBUFFER,K),s.framebufferRenderbuffer(s.FRAMEBUFFER,ne,s.RENDERBUFFER,K)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),he(b.__webglDepthbuffer,E,!1);else{const j=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ne=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ne),s.framebufferRenderbuffer(s.FRAMEBUFFER,j,s.RENDERBUFFER,ne)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Fe(E,b,F){const j=n.get(E);b!==void 0&&Se(j.__webglFramebuffer,E,E.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),F!==void 0&&He(E)}function rt(E){const b=E.texture,F=n.get(E),j=n.get(b);E.addEventListener("dispose",S);const ne=E.textures,K=E.isWebGLCubeRenderTarget===!0,Pe=ne.length>1;if(Pe||(j.__webglTexture===void 0&&(j.__webglTexture=s.createTexture()),j.__version=b.version,a.memory.textures++),K){F.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(b.mipmaps&&b.mipmaps.length>0){F.__webglFramebuffer[pe]=[];for(let Me=0;Me<b.mipmaps.length;Me++)F.__webglFramebuffer[pe][Me]=s.createFramebuffer()}else F.__webglFramebuffer[pe]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){F.__webglFramebuffer=[];for(let pe=0;pe<b.mipmaps.length;pe++)F.__webglFramebuffer[pe]=s.createFramebuffer()}else F.__webglFramebuffer=s.createFramebuffer();if(Pe)for(let pe=0,Me=ne.length;pe<Me;pe++){const Qe=n.get(ne[pe]);Qe.__webglTexture===void 0&&(Qe.__webglTexture=s.createTexture(),a.memory.textures++)}if(E.samples>0&&we(E)===!1){F.__webglMultisampledFramebuffer=s.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let pe=0;pe<ne.length;pe++){const Me=ne[pe];F.__webglColorRenderbuffer[pe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,F.__webglColorRenderbuffer[pe]);const Qe=r.convert(Me.format,Me.colorSpace),re=r.convert(Me.type),Ee=y(Me.internalFormat,Qe,re,Me.colorSpace,E.isXRRenderTarget===!0),Oe=ie(E);s.renderbufferStorageMultisample(s.RENDERBUFFER,Oe,Ee,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pe,s.RENDERBUFFER,F.__webglColorRenderbuffer[pe])}s.bindRenderbuffer(s.RENDERBUFFER,null),E.depthBuffer&&(F.__webglDepthRenderbuffer=s.createRenderbuffer(),he(F.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(K){t.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture),ze(s.TEXTURE_CUBE_MAP,b);for(let pe=0;pe<6;pe++)if(b.mipmaps&&b.mipmaps.length>0)for(let Me=0;Me<b.mipmaps.length;Me++)Se(F.__webglFramebuffer[pe][Me],E,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Me);else Se(F.__webglFramebuffer[pe],E,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);m(b)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Pe){for(let pe=0,Me=ne.length;pe<Me;pe++){const Qe=ne[pe],re=n.get(Qe);t.bindTexture(s.TEXTURE_2D,re.__webglTexture),ze(s.TEXTURE_2D,Qe),Se(F.__webglFramebuffer,E,Qe,s.COLOR_ATTACHMENT0+pe,s.TEXTURE_2D,0),m(Qe)&&p(s.TEXTURE_2D)}t.unbindTexture()}else{let pe=s.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(pe=E.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(pe,j.__webglTexture),ze(pe,b),b.mipmaps&&b.mipmaps.length>0)for(let Me=0;Me<b.mipmaps.length;Me++)Se(F.__webglFramebuffer[Me],E,b,s.COLOR_ATTACHMENT0,pe,Me);else Se(F.__webglFramebuffer,E,b,s.COLOR_ATTACHMENT0,pe,0);m(b)&&p(pe),t.unbindTexture()}E.depthBuffer&&He(E)}function te(E){const b=E.textures;for(let F=0,j=b.length;F<j;F++){const ne=b[F];if(m(ne)){const K=x(E),Pe=n.get(ne).__webglTexture;t.bindTexture(K,Pe),p(K),t.unbindTexture()}}}const oe=[],P=[];function Ie(E){if(E.samples>0){if(we(E)===!1){const b=E.textures,F=E.width,j=E.height;let ne=s.COLOR_BUFFER_BIT;const K=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Pe=n.get(E),pe=b.length>1;if(pe)for(let Me=0;Me<b.length;Me++)t.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Me,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Me,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let Me=0;Me<b.length;Me++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(ne|=s.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(ne|=s.STENCIL_BUFFER_BIT)),pe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Pe.__webglColorRenderbuffer[Me]);const Qe=n.get(b[Me]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Qe,0)}s.blitFramebuffer(0,0,F,j,0,0,F,j,ne,s.NEAREST),l===!0&&(oe.length=0,P.length=0,oe.push(s.COLOR_ATTACHMENT0+Me),E.depthBuffer&&E.resolveDepthBuffer===!1&&(oe.push(K),P.push(K),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,P)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,oe))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),pe)for(let Me=0;Me<b.length;Me++){t.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Me,s.RENDERBUFFER,Pe.__webglColorRenderbuffer[Me]);const Qe=n.get(b[Me]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Me,s.TEXTURE_2D,Qe,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const b=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function ie(E){return Math.min(i.maxSamples,E.samples)}function we(E){const b=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ce(E){const b=a.render.frame;h.get(E)!==b&&(h.set(E,b),E.update())}function Be(E,b){const F=E.colorSpace,j=E.format,ne=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||F!==qt&&F!==_n&&(et.getTransfer(F)===pt?(j!==xn||ne!==Kn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),b}function ve(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=z,this.setTexture2D=Y,this.setTexture2DArray=W,this.setTexture3D=Q,this.setTextureCube=X,this.rebindTextures=Fe,this.setupRenderTarget=rt,this.updateRenderTargetMipmap=te,this.updateMultisampleRenderTarget=Ie,this.setupDepthRenderbuffer=He,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=we}function wv(s,e){function t(n,i=_n){let r;const a=et.getTransfer(i);if(n===Kn)return s.UNSIGNED_BYTE;if(n===dl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===fl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Oh)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Uh)return s.BYTE;if(n===kh)return s.SHORT;if(n===Ks)return s.UNSIGNED_SHORT;if(n===ul)return s.INT;if(n===Pi)return s.UNSIGNED_INT;if(n===An)return s.FLOAT;if(n===ar)return s.HALF_FLOAT;if(n===Bh)return s.ALPHA;if(n===Fh)return s.RGB;if(n===xn)return s.RGBA;if(n===Hh)return s.LUMINANCE;if(n===zh)return s.LUMINANCE_ALPHA;if(n===os)return s.DEPTH_COMPONENT;if(n===ps)return s.DEPTH_STENCIL;if(n===pl)return s.RED;if(n===ml)return s.RED_INTEGER;if(n===Gh)return s.RG;if(n===gl)return s.RG_INTEGER;if(n===_l)return s.RGBA_INTEGER;if(n===qr||n===Yr||n===Zr||n===$r)if(a===pt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===qr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Yr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===$r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===qr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Yr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Zr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===$r)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Mo||n===So||n===wo||n===To)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Mo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===So)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===wo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===To)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Eo||n===Ao||n===Ro)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Eo||n===Ao)return a===pt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ro)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Co||n===Po||n===Lo||n===Io||n===Do||n===No||n===Uo||n===ko||n===Oo||n===Bo||n===Fo||n===Ho||n===zo||n===Go)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Co)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Po)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Lo)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Io)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Do)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===No)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Uo)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ko)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Oo)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Bo)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Fo)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ho)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===zo)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Go)return a===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===jr||n===Vo||n===Wo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===jr)return a===pt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Vo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Wo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Vh||n===Xo||n===qo||n===Yo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===jr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Xo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===qo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Yo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===fs?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const Tv={type:"move"};class ja{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ce,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ce,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ce,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Tv)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ce;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Ev=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Av=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Rv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Dt,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ln({vertexShader:Ev,fragmentShader:Av,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new A(new Ht(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Cv extends bs{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const _=new Rv,m=t.getContextAttributes();let p=null,x=null;const y=[],v=[],I=new ae;let C=null;const S=new Kt;S.viewport=new lt;const R=new Kt;R.viewport=new lt;const T=[S,R],M=new zp;let D=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let le=y[Z];return le===void 0&&(le=new ja,y[Z]=le),le.getTargetRaySpace()},this.getControllerGrip=function(Z){let le=y[Z];return le===void 0&&(le=new ja,y[Z]=le),le.getGripSpace()},this.getHand=function(Z){let le=y[Z];return le===void 0&&(le=new ja,y[Z]=le),le.getHandSpace()};function k(Z){const le=v.indexOf(Z.inputSource);if(le===-1)return;const Se=y[le];Se!==void 0&&(Se.update(Z.inputSource,Z.frame,c||a),Se.dispatchEvent({type:Z.type,data:Z.inputSource}))}function G(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",G),i.removeEventListener("inputsourceschange",Y);for(let Z=0;Z<y.length;Z++){const le=v[Z];le!==null&&(v[Z]=null,y[Z].disconnect(le))}D=null,z=null,_.reset(),e.setRenderTarget(p),f=null,d=null,u=null,i=null,x=null,it.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Z){if(i=Z,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",G),i.addEventListener("inputsourceschange",Y),m.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(I),i.enabledFeatures!==void 0&&i.enabledFeatures.includes("layers")){let Se=null,he=null,Ne=null;m.depth&&(Ne=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Se=m.stencil?ps:os,he=m.stencil?fs:Pi);const He={colorFormat:t.RGBA8,depthFormat:Ne,scaleFactor:r};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(He),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new Li(d.textureWidth,d.textureHeight,{format:xn,type:Kn,depthTexture:new cu(d.textureWidth,d.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}else{const Se={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,Se),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new Li(f.framebufferWidth,f.framebufferHeight,{format:xn,type:Kn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),it.setContext(i),it.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Y(Z){for(let le=0;le<Z.removed.length;le++){const Se=Z.removed[le],he=v.indexOf(Se);he>=0&&(v[he]=null,y[he].disconnect(Se))}for(let le=0;le<Z.added.length;le++){const Se=Z.added[le];let he=v.indexOf(Se);if(he===-1){for(let He=0;He<y.length;He++)if(He>=v.length){v.push(Se),he=He;break}else if(v[He]===null){v[He]=Se,he=He;break}if(he===-1)break}const Ne=y[he];Ne&&Ne.connect(Se)}}const W=new L,Q=new L;function X(Z,le,Se){W.setFromMatrixPosition(le.matrixWorld),Q.setFromMatrixPosition(Se.matrixWorld);const he=W.distanceTo(Q),Ne=le.projectionMatrix.elements,He=Se.projectionMatrix.elements,Fe=Ne[14]/(Ne[10]-1),rt=Ne[14]/(Ne[10]+1),te=(Ne[9]+1)/Ne[5],oe=(Ne[9]-1)/Ne[5],P=(Ne[8]-1)/Ne[0],Ie=(He[8]+1)/He[0],ie=Fe*P,we=Fe*Ie,ce=he/(-P+Ie),Be=ce*-P;if(le.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Be),Z.translateZ(ce),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Ne[10]===-1)Z.projectionMatrix.copy(le.projectionMatrix),Z.projectionMatrixInverse.copy(le.projectionMatrixInverse);else{const ve=Fe+ce,E=rt+ce,b=ie-Be,F=we+(he-Be),j=te*rt/E*ve,ne=oe*rt/E*ve;Z.projectionMatrix.makePerspective(b,F,j,ne,ve,E),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function ue(Z,le){le===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(le.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(i===null)return;let le=Z.near,Se=Z.far;_.texture!==null&&(_.depthNear>0&&(le=_.depthNear),_.depthFar>0&&(Se=_.depthFar)),M.near=R.near=S.near=le,M.far=R.far=S.far=Se,(D!==M.near||z!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),D=M.near,z=M.far),S.layers.mask=Z.layers.mask|2,R.layers.mask=Z.layers.mask|4,M.layers.mask=S.layers.mask|R.layers.mask;const he=Z.parent,Ne=M.cameras;ue(M,he);for(let He=0;He<Ne.length;He++)ue(Ne[He],he);Ne.length===2?X(M,S,R):M.projectionMatrix.copy(S.projectionMatrix),me(Z,M,he)};function me(Z,le,Se){Se===null?Z.matrix.copy(le.matrixWorld):(Z.matrix.copy(Se.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(le.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(le.projectionMatrix),Z.projectionMatrixInverse.copy(le.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=ms*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Z){l=Z,d!==null&&(d.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let be=null;function ze(Z,le){if(h=le.getViewerPose(c||a),g=le,h!==null){const Se=h.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let he=!1;Se.length!==M.cameras.length&&(M.cameras.length=0,he=!0);for(let He=0;He<Se.length;He++){const Fe=Se[He];let rt=null;if(f!==null)rt=f.getViewport(Fe);else{const oe=u.getViewSubImage(d,Fe);rt=oe.viewport,He===0&&(e.setRenderTargetTextures(x,oe.colorTexture,d.ignoreDepthValues?void 0:oe.depthStencilTexture),e.setRenderTarget(x))}let te=T[He];te===void 0&&(te=new Kt,te.layers.enable(He),te.viewport=new lt,T[He]=te),te.matrix.fromArray(Fe.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(Fe.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(rt.x,rt.y,rt.width,rt.height),He===0&&(M.matrix.copy(te.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),he===!0&&M.cameras.push(te)}const Ne=i.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")){const He=u.getDepthInformation(Se[0]);He&&He.isValid&&He.texture&&_.init(e,He,i.renderState)}}for(let Se=0;Se<y.length;Se++){const he=v[Se],Ne=y[Se];he!==null&&Ne!==void 0&&Ne.update(he,le,c||a)}be&&be(Z,le),le.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:le}),g=null}const it=new Mu;it.setAnimationLoop(ze),this.setAnimationLoop=function(Z){be=Z},this.dispose=function(){}}}const bi=new Pn,Pv=new Xe;function Lv(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,eu(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,x,y,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,x,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Jt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Jt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=e.get(p),y=x.envMap,v=x.envMapRotation;y&&(m.envMap.value=y,bi.copy(v),bi.x*=-1,bi.y*=-1,bi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(bi.y*=-1,bi.z*=-1),m.envMapRotation.value.setFromMatrix4(Pv.makeRotationFromEuler(bi)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,x,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Jt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const x=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Iv(s,e,t,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,y){const v=y.program;n.uniformBlockBinding(x,v)}function c(x,y){let v=i[x.id];v===void 0&&(g(x),v=h(x),i[x.id]=v,x.addEventListener("dispose",m));const I=y.program;n.updateUBOMapping(x,I);const C=e.render.frame;r[x.id]!==C&&(d(x),r[x.id]=C)}function h(x){const y=u();x.__bindingPointIndex=y;const v=s.createBuffer(),I=x.__size,C=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,I,C),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,v),v}function u(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const y=i[x.id],v=x.uniforms,I=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let C=0,S=v.length;C<S;C++){const R=Array.isArray(v[C])?v[C]:[v[C]];for(let T=0,M=R.length;T<M;T++){const D=R[T];if(f(D,C,T,I)===!0){const z=D.__offset,k=Array.isArray(D.value)?D.value:[D.value];let G=0;for(let Y=0;Y<k.length;Y++){const W=k[Y],Q=_(W);typeof W=="number"||typeof W=="boolean"?(D.__data[0]=W,s.bufferSubData(s.UNIFORM_BUFFER,z+G,D.__data)):W.isMatrix3?(D.__data[0]=W.elements[0],D.__data[1]=W.elements[1],D.__data[2]=W.elements[2],D.__data[3]=0,D.__data[4]=W.elements[3],D.__data[5]=W.elements[4],D.__data[6]=W.elements[5],D.__data[7]=0,D.__data[8]=W.elements[6],D.__data[9]=W.elements[7],D.__data[10]=W.elements[8],D.__data[11]=0):(W.toArray(D.__data,G),G+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,z,D.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(x,y,v,I){const C=x.value,S=y+"_"+v;if(I[S]===void 0)return typeof C=="number"||typeof C=="boolean"?I[S]=C:I[S]=C.clone(),!0;{const R=I[S];if(typeof C=="number"||typeof C=="boolean"){if(R!==C)return I[S]=C,!0}else if(R.equals(C)===!1)return R.copy(C),!0}return!1}function g(x){const y=x.uniforms;let v=0;const I=16;for(let S=0,R=y.length;S<R;S++){const T=Array.isArray(y[S])?y[S]:[y[S]];for(let M=0,D=T.length;M<D;M++){const z=T[M],k=Array.isArray(z.value)?z.value:[z.value];for(let G=0,Y=k.length;G<Y;G++){const W=k[G],Q=_(W),X=v%I,ue=X%Q.boundary,me=X+ue;v+=ue,me!==0&&I-me<Q.storage&&(v+=I-me),z.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=v,v+=Q.storage}}}const C=v%I;return C>0&&(v+=I-C),x.__size=v,x.__cache={},this}function _(x){const y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),y}function m(x){const y=x.target;y.removeEventListener("dispose",m);const v=a.indexOf(y.__bindingPointIndex);a.splice(v,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function p(){for(const x in i)s.deleteBuffer(i[x]);a=[],i={},r={}}return{bind:l,update:c,dispose:p}}class Dv{constructor(e={}){const{canvas:t=sf(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const x=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=_t,this.toneMapping=hi,this.toneMappingExposure=1;const v=this;let I=!1,C=0,S=0,R=null,T=-1,M=null;const D=new lt,z=new lt;let k=null;const G=new De(0);let Y=0,W=t.width,Q=t.height,X=1,ue=null,me=null;const be=new lt(0,0,W,Q),ze=new lt(0,0,W,Q);let it=!1;const Z=new yl;let le=!1,Se=!1;this.transmissionResolutionScale=1;const he=new Xe,Ne=new Xe,He=new L,Fe=new lt,rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let te=!1;function oe(){return R===null?X:1}let P=n;function Ie(w,U){return t.getContext(w,U)}try{const w={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${hl}`),t.addEventListener("webglcontextlost",ee,!1),t.addEventListener("webglcontextrestored",ye,!1),t.addEventListener("webglcontextcreationerror",xe,!1),P===null){const U="webgl2";if(P=Ie(U,w),P===null)throw Ie(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let ie,we,ce,Be,ve,E,b,F,j,ne,K,Pe,pe,Me,Qe,re,Ee,Oe,Ge,Ae,st,Ze,mt,N;function ge(){ie=new Gg(P),ie.init(),Ze=new wv(P,ie),we=new kg(P,ie,e,Ze),ce=new Mv(P,ie),we.reverseDepthBuffer&&d&&ce.buffers.depth.setReversed(!0),Be=new Xg(P),ve=new cv,E=new Sv(P,ie,ce,ve,we,Ze,Be),b=new Bg(v),F=new zg(v),j=new Jp(P),mt=new Ng(P,j),ne=new Vg(P,j,Be,mt),K=new Yg(P,ne,j,Be),Ge=new qg(P,we,E),re=new Og(ve),Pe=new lv(v,b,F,ie,we,mt,re),pe=new Lv(v,ve),Me=new uv,Qe=new _v(ie),Oe=new Dg(v,b,F,ce,K,f,l),Ee=new yv(v,K,we),N=new Iv(P,Be,we,ce),Ae=new Ug(P,ie,Be),st=new Wg(P,ie,Be),Be.programs=Pe.programs,v.capabilities=we,v.extensions=ie,v.properties=ve,v.renderLists=Me,v.shadowMap=Ee,v.state=ce,v.info=Be}ge();const q=new Cv(v,P);this.xr=q,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const w=ie.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=ie.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(w){w!==void 0&&(X=w,this.setSize(W,Q,!1))},this.getSize=function(w){return w.set(W,Q)},this.setSize=function(w,U,H=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=w,Q=U,t.width=Math.floor(w*X),t.height=Math.floor(U*X),H===!0&&(t.style.width=w+"px",t.style.height=U+"px"),this.setViewport(0,0,w,U)},this.getDrawingBufferSize=function(w){return w.set(W*X,Q*X).floor()},this.setDrawingBufferSize=function(w,U,H){W=w,Q=U,X=H,t.width=Math.floor(w*H),t.height=Math.floor(U*H),this.setViewport(0,0,w,U)},this.getCurrentViewport=function(w){return w.copy(D)},this.getViewport=function(w){return w.copy(be)},this.setViewport=function(w,U,H,V){w.isVector4?be.set(w.x,w.y,w.z,w.w):be.set(w,U,H,V),ce.viewport(D.copy(be).multiplyScalar(X).round())},this.getScissor=function(w){return w.copy(ze)},this.setScissor=function(w,U,H,V){w.isVector4?ze.set(w.x,w.y,w.z,w.w):ze.set(w,U,H,V),ce.scissor(z.copy(ze).multiplyScalar(X).round())},this.getScissorTest=function(){return it},this.setScissorTest=function(w){ce.setScissorTest(it=w)},this.setOpaqueSort=function(w){ue=w},this.setTransparentSort=function(w){me=w},this.getClearColor=function(w){return w.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor.apply(Oe,arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha.apply(Oe,arguments)},this.clear=function(w=!0,U=!0,H=!0){let V=0;if(w){let O=!1;if(R!==null){const se=R.texture.format;O=se===_l||se===gl||se===ml}if(O){const se=R.texture.type,_e=se===Kn||se===Pi||se===Ks||se===fs||se===dl||se===fl,Te=Oe.getClearColor(),Re=Oe.getClearAlpha(),Ve=Te.r,We=Te.g,Ue=Te.b;_e?(g[0]=Ve,g[1]=We,g[2]=Ue,g[3]=Re,P.clearBufferuiv(P.COLOR,0,g)):(_[0]=Ve,_[1]=We,_[2]=Ue,_[3]=Re,P.clearBufferiv(P.COLOR,0,_))}else V|=P.COLOR_BUFFER_BIT}U&&(V|=P.DEPTH_BUFFER_BIT),H&&(V|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ee,!1),t.removeEventListener("webglcontextrestored",ye,!1),t.removeEventListener("webglcontextcreationerror",xe,!1),Oe.dispose(),Me.dispose(),Qe.dispose(),ve.dispose(),b.dispose(),F.dispose(),K.dispose(),mt.dispose(),N.dispose(),Pe.dispose(),q.dispose(),q.removeEventListener("sessionstart",Nl),q.removeEventListener("sessionend",Ul),pi.stop()};function ee(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function ye(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const w=Be.autoReset,U=Ee.enabled,H=Ee.autoUpdate,V=Ee.needsUpdate,O=Ee.type;ge(),Be.autoReset=w,Ee.enabled=U,Ee.autoUpdate=H,Ee.needsUpdate=V,Ee.type=O}function xe(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function qe(w){const U=w.target;U.removeEventListener("dispose",qe),bt(U)}function bt(w){Vt(w),ve.remove(w)}function Vt(w){const U=ve.get(w).programs;U!==void 0&&(U.forEach(function(H){Pe.releaseProgram(H)}),w.isShaderMaterial&&Pe.releaseShaderCache(w))}this.renderBufferDirect=function(w,U,H,V,O,se){U===null&&(U=rt);const _e=O.isMesh&&O.matrixWorld.determinant()<0,Te=qu(w,U,H,V,O);ce.setMaterial(V,_e);let Re=H.index,Ve=1;if(V.wireframe===!0){if(Re=ne.getWireframeAttribute(H),Re===void 0)return;Ve=2}const We=H.drawRange,Ue=H.attributes.position;let at=We.start*Ve,ct=(We.start+We.count)*Ve;se!==null&&(at=Math.max(at,se.start*Ve),ct=Math.min(ct,(se.start+se.count)*Ve)),Re!==null?(at=Math.max(at,0),ct=Math.min(ct,Re.count)):Ue!=null&&(at=Math.max(at,0),ct=Math.min(ct,Ue.count));const At=ct-at;if(At<0||At===1/0)return;mt.setup(O,V,Te,H,Re);let Mt,ot=Ae;if(Re!==null&&(Mt=j.get(Re),ot=st,ot.setIndex(Mt)),O.isMesh)V.wireframe===!0?(ce.setLineWidth(V.wireframeLinewidth*oe()),ot.setMode(P.LINES)):ot.setMode(P.TRIANGLES);else if(O.isLine){let ke=V.linewidth;ke===void 0&&(ke=1),ce.setLineWidth(ke*oe()),O.isLineSegments?ot.setMode(P.LINES):O.isLineLoop?ot.setMode(P.LINE_LOOP):ot.setMode(P.LINE_STRIP)}else O.isPoints?ot.setMode(P.POINTS):O.isSprite&&ot.setMode(P.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)ot.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(ie.get("WEBGL_multi_draw"))ot.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const ke=O._multiDrawStarts,zt=O._multiDrawCounts,ht=O._multiDrawCount,Mn=Re?j.get(Re).bytesPerElement:1,Ui=ve.get(V).currentProgram.getUniforms();for(let sn=0;sn<ht;sn++)Ui.setValue(P,"_gl_DrawID",sn),ot.render(ke[sn]/Mn,zt[sn])}else if(O.isInstancedMesh)ot.renderInstances(at,At,O.count);else if(H.isInstancedBufferGeometry){const ke=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,zt=Math.min(H.instanceCount,ke);ot.renderInstances(at,At,zt)}else ot.render(at,At)};function ut(w,U,H){w.transparent===!0&&w.side===It&&w.forceSinglePass===!1?(w.side=Jt,w.needsUpdate=!0,ur(w,U,H),w.side=jn,w.needsUpdate=!0,ur(w,U,H),w.side=It):ur(w,U,H)}this.compile=function(w,U,H=null){H===null&&(H=w),p=Qe.get(H),p.init(U),y.push(p),H.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),w!==H&&w.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();const V=new Set;return w.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const se=O.material;if(se)if(Array.isArray(se))for(let _e=0;_e<se.length;_e++){const Te=se[_e];ut(Te,H,O),V.add(Te)}else ut(se,H,O),V.add(se)}),y.pop(),p=null,V},this.compileAsync=function(w,U,H=null){const V=this.compile(w,U,H);return new Promise(O=>{function se(){if(V.forEach(function(_e){ve.get(_e).currentProgram.isReady()&&V.delete(_e)}),V.size===0){O(w);return}setTimeout(se,10)}ie.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let bn=null;function On(w){bn&&bn(w)}function Nl(){pi.stop()}function Ul(){pi.start()}const pi=new Mu;pi.setAnimationLoop(On),typeof self<"u"&&pi.setContext(self),this.setAnimationLoop=function(w){bn=w,q.setAnimationLoop(w),w===null?pi.stop():pi.start()},q.addEventListener("sessionstart",Nl),q.addEventListener("sessionend",Ul),this.render=function(w,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(U),U=q.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,U,R),p=Qe.get(w,y.length),p.init(U),y.push(p),Ne.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Z.setFromProjectionMatrix(Ne),Se=this.localClippingEnabled,le=re.init(this.clippingPlanes,Se),m=Me.get(w,x.length),m.init(),x.push(m),q.enabled===!0&&q.isPresenting===!0){const se=v.xr.getDepthSensingMesh();se!==null&&da(se,U,-1/0,v.sortObjects)}da(w,U,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(ue,me),te=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,te&&Oe.addToRenderList(m,w),this.info.render.frame++,le===!0&&re.beginShadows();const H=p.state.shadowsArray;Ee.render(H,w,U),le===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=m.opaque,O=m.transmissive;if(p.setupLights(),U.isArrayCamera){const se=U.cameras;if(O.length>0)for(let _e=0,Te=se.length;_e<Te;_e++){const Re=se[_e];Ol(V,O,w,Re)}te&&Oe.render(w);for(let _e=0,Te=se.length;_e<Te;_e++){const Re=se[_e];kl(m,w,Re,Re.viewport)}}else O.length>0&&Ol(V,O,w,U),te&&Oe.render(w),kl(m,w,U);R!==null&&S===0&&(E.updateMultisampleRenderTarget(R),E.updateRenderTargetMipmap(R)),w.isScene===!0&&w.onAfterRender(v,w,U),mt.resetDefaultState(),T=-1,M=null,y.pop(),y.length>0?(p=y[y.length-1],le===!0&&re.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function da(w,U,H,V){if(w.visible===!1)return;if(w.layers.test(U.layers)){if(w.isGroup)H=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(U);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Z.intersectsSprite(w)){V&&Fe.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Ne);const _e=K.update(w),Te=w.material;Te.visible&&m.push(w,_e,Te,H,Fe.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Z.intersectsObject(w))){const _e=K.update(w),Te=w.material;if(V&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Fe.copy(w.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),Fe.copy(_e.boundingSphere.center)),Fe.applyMatrix4(w.matrixWorld).applyMatrix4(Ne)),Array.isArray(Te)){const Re=_e.groups;for(let Ve=0,We=Re.length;Ve<We;Ve++){const Ue=Re[Ve],at=Te[Ue.materialIndex];at&&at.visible&&m.push(w,_e,at,H,Fe.z,Ue)}}else Te.visible&&m.push(w,_e,Te,H,Fe.z,null)}}const se=w.children;for(let _e=0,Te=se.length;_e<Te;_e++)da(se[_e],U,H,V)}function kl(w,U,H,V){const O=w.opaque,se=w.transmissive,_e=w.transparent;p.setupLightsView(H),le===!0&&re.setGlobalState(v.clippingPlanes,H),V&&ce.viewport(D.copy(V)),O.length>0&&hr(O,U,H),se.length>0&&hr(se,U,H),_e.length>0&&hr(_e,U,H),ce.buffers.depth.setTest(!0),ce.buffers.depth.setMask(!0),ce.buffers.color.setMask(!0),ce.setPolygonOffset(!1)}function Ol(w,U,H,V){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[V.id]===void 0&&(p.state.transmissionRenderTarget[V.id]=new Li(1,1,{generateMipmaps:!0,type:ie.has("EXT_color_buffer_half_float")||ie.has("EXT_color_buffer_float")?ar:Kn,minFilter:qn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace}));const se=p.state.transmissionRenderTarget[V.id],_e=V.viewport||D;se.setSize(_e.z*v.transmissionResolutionScale,_e.w*v.transmissionResolutionScale);const Te=v.getRenderTarget();v.setRenderTarget(se),v.getClearColor(G),Y=v.getClearAlpha(),Y<1&&v.setClearColor(16777215,.5),v.clear(),te&&Oe.render(H);const Re=v.toneMapping;v.toneMapping=hi;const Ve=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),p.setupLightsView(V),le===!0&&re.setGlobalState(v.clippingPlanes,V),hr(w,H,V),E.updateMultisampleRenderTarget(se),E.updateRenderTargetMipmap(se),ie.has("WEBGL_multisampled_render_to_texture")===!1){let We=!1;for(let Ue=0,at=U.length;Ue<at;Ue++){const ct=U[Ue],At=ct.object,Mt=ct.geometry,ot=ct.material,ke=ct.group;if(ot.side===It&&At.layers.test(V.layers)){const zt=ot.side;ot.side=Jt,ot.needsUpdate=!0,Bl(At,H,V,Mt,ot,ke),ot.side=zt,ot.needsUpdate=!0,We=!0}}We===!0&&(E.updateMultisampleRenderTarget(se),E.updateRenderTargetMipmap(se))}v.setRenderTarget(Te),v.setClearColor(G,Y),Ve!==void 0&&(V.viewport=Ve),v.toneMapping=Re}function hr(w,U,H){const V=U.isScene===!0?U.overrideMaterial:null;for(let O=0,se=w.length;O<se;O++){const _e=w[O],Te=_e.object,Re=_e.geometry,Ve=V===null?_e.material:V,We=_e.group;Te.layers.test(H.layers)&&Bl(Te,U,H,Re,Ve,We)}}function Bl(w,U,H,V,O,se){w.onBeforeRender(v,U,H,V,O,se),w.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),O.onBeforeRender(v,U,H,V,w,se),O.transparent===!0&&O.side===It&&O.forceSinglePass===!1?(O.side=Jt,O.needsUpdate=!0,v.renderBufferDirect(H,U,V,O,w,se),O.side=jn,O.needsUpdate=!0,v.renderBufferDirect(H,U,V,O,w,se),O.side=It):v.renderBufferDirect(H,U,V,O,w,se),w.onAfterRender(v,U,H,V,O,se)}function ur(w,U,H){U.isScene!==!0&&(U=rt);const V=ve.get(w),O=p.state.lights,se=p.state.shadowsArray,_e=O.state.version,Te=Pe.getParameters(w,O.state,se,U,H),Re=Pe.getProgramCacheKey(Te);let Ve=V.programs;V.environment=w.isMeshStandardMaterial?U.environment:null,V.fog=U.fog,V.envMap=(w.isMeshStandardMaterial?F:b).get(w.envMap||V.environment),V.envMapRotation=V.environment!==null&&w.envMap===null?U.environmentRotation:w.envMapRotation,Ve===void 0&&(w.addEventListener("dispose",qe),Ve=new Map,V.programs=Ve);let We=Ve.get(Re);if(We!==void 0){if(V.currentProgram===We&&V.lightsStateVersion===_e)return Hl(w,Te),We}else Te.uniforms=Pe.getUniforms(w),w.onBeforeCompile(Te,v),We=Pe.acquireProgram(Te,Re),Ve.set(Re,We),V.uniforms=Te.uniforms;const Ue=V.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ue.clippingPlanes=re.uniform),Hl(w,Te),V.needsLights=Zu(w),V.lightsStateVersion=_e,V.needsLights&&(Ue.ambientLightColor.value=O.state.ambient,Ue.lightProbe.value=O.state.probe,Ue.directionalLights.value=O.state.directional,Ue.directionalLightShadows.value=O.state.directionalShadow,Ue.spotLights.value=O.state.spot,Ue.spotLightShadows.value=O.state.spotShadow,Ue.rectAreaLights.value=O.state.rectArea,Ue.ltc_1.value=O.state.rectAreaLTC1,Ue.ltc_2.value=O.state.rectAreaLTC2,Ue.pointLights.value=O.state.point,Ue.pointLightShadows.value=O.state.pointShadow,Ue.hemisphereLights.value=O.state.hemi,Ue.directionalShadowMap.value=O.state.directionalShadowMap,Ue.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ue.spotShadowMap.value=O.state.spotShadowMap,Ue.spotLightMatrix.value=O.state.spotLightMatrix,Ue.spotLightMap.value=O.state.spotLightMap,Ue.pointShadowMap.value=O.state.pointShadowMap,Ue.pointShadowMatrix.value=O.state.pointShadowMatrix),V.currentProgram=We,V.uniformsList=null,We}function Fl(w){if(w.uniformsList===null){const U=w.currentProgram.getUniforms();w.uniformsList=Kr.seqWithValue(U.seq,w.uniforms)}return w.uniformsList}function Hl(w,U){const H=ve.get(w);H.outputColorSpace=U.outputColorSpace,H.batching=U.batching,H.batchingColor=U.batchingColor,H.instancing=U.instancing,H.instancingColor=U.instancingColor,H.instancingMorph=U.instancingMorph,H.skinning=U.skinning,H.morphTargets=U.morphTargets,H.morphNormals=U.morphNormals,H.morphColors=U.morphColors,H.morphTargetsCount=U.morphTargetsCount,H.numClippingPlanes=U.numClippingPlanes,H.numIntersection=U.numClipIntersection,H.vertexAlphas=U.vertexAlphas,H.vertexTangents=U.vertexTangents,H.toneMapping=U.toneMapping}function qu(w,U,H,V,O){U.isScene!==!0&&(U=rt),E.resetTextureUnits();const se=U.fog,_e=V.isMeshStandardMaterial?U.environment:null,Te=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:qt,Re=(V.isMeshStandardMaterial?F:b).get(V.envMap||_e),Ve=V.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,We=!!H.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ue=!!H.morphAttributes.position,at=!!H.morphAttributes.normal,ct=!!H.morphAttributes.color;let At=hi;V.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(At=v.toneMapping);const Mt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ot=Mt!==void 0?Mt.length:0,ke=ve.get(V),zt=p.state.lights;if(le===!0&&(Se===!0||w!==M)){const Yt=w===M&&V.id===T;re.setState(V,w,Yt)}let ht=!1;V.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==zt.state.version||ke.outputColorSpace!==Te||O.isBatchedMesh&&ke.batching===!1||!O.isBatchedMesh&&ke.batching===!0||O.isBatchedMesh&&ke.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&ke.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&ke.instancing===!1||!O.isInstancedMesh&&ke.instancing===!0||O.isSkinnedMesh&&ke.skinning===!1||!O.isSkinnedMesh&&ke.skinning===!0||O.isInstancedMesh&&ke.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&ke.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&ke.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&ke.instancingMorph===!1&&O.morphTexture!==null||ke.envMap!==Re||V.fog===!0&&ke.fog!==se||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==re.numPlanes||ke.numIntersection!==re.numIntersection)||ke.vertexAlphas!==Ve||ke.vertexTangents!==We||ke.morphTargets!==Ue||ke.morphNormals!==at||ke.morphColors!==ct||ke.toneMapping!==At||ke.morphTargetsCount!==ot)&&(ht=!0):(ht=!0,ke.__version=V.version);let Mn=ke.currentProgram;ht===!0&&(Mn=ur(V,U,O));let Ui=!1,sn=!1,Es=!1;const xt=Mn.getUniforms(),dn=ke.uniforms;if(ce.useProgram(Mn.program)&&(Ui=!0,sn=!0,Es=!0),V.id!==T&&(T=V.id,sn=!0),Ui||M!==w){ce.buffers.depth.getReversed()?(he.copy(w.projectionMatrix),af(he),of(he),xt.setValue(P,"projectionMatrix",he)):xt.setValue(P,"projectionMatrix",w.projectionMatrix),xt.setValue(P,"viewMatrix",w.matrixWorldInverse);const en=xt.map.cameraPosition;en!==void 0&&en.setValue(P,He.setFromMatrixPosition(w.matrixWorld)),we.logarithmicDepthBuffer&&xt.setValue(P,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&xt.setValue(P,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,sn=!0,Es=!0)}if(O.isSkinnedMesh){xt.setOptional(P,O,"bindMatrix"),xt.setOptional(P,O,"bindMatrixInverse");const Yt=O.skeleton;Yt&&(Yt.boneTexture===null&&Yt.computeBoneTexture(),xt.setValue(P,"boneTexture",Yt.boneTexture,E))}O.isBatchedMesh&&(xt.setOptional(P,O,"batchingTexture"),xt.setValue(P,"batchingTexture",O._matricesTexture,E),xt.setOptional(P,O,"batchingIdTexture"),xt.setValue(P,"batchingIdTexture",O._indirectTexture,E),xt.setOptional(P,O,"batchingColorTexture"),O._colorsTexture!==null&&xt.setValue(P,"batchingColorTexture",O._colorsTexture,E));const fn=H.morphAttributes;if((fn.position!==void 0||fn.normal!==void 0||fn.color!==void 0)&&Ge.update(O,H,Mn),(sn||ke.receiveShadow!==O.receiveShadow)&&(ke.receiveShadow=O.receiveShadow,xt.setValue(P,"receiveShadow",O.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(dn.envMap.value=Re,dn.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&U.environment!==null&&(dn.envMapIntensity.value=U.environmentIntensity),sn&&(xt.setValue(P,"toneMappingExposure",v.toneMappingExposure),ke.needsLights&&Yu(dn,Es),se&&V.fog===!0&&pe.refreshFogUniforms(dn,se),pe.refreshMaterialUniforms(dn,V,X,Q,p.state.transmissionRenderTarget[w.id]),Kr.upload(P,Fl(ke),dn,E)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Kr.upload(P,Fl(ke),dn,E),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&xt.setValue(P,"center",O.center),xt.setValue(P,"modelViewMatrix",O.modelViewMatrix),xt.setValue(P,"normalMatrix",O.normalMatrix),xt.setValue(P,"modelMatrix",O.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Yt=V.uniformsGroups;for(let en=0,fa=Yt.length;en<fa;en++){const mi=Yt[en];N.update(mi,Mn),N.bind(mi,Mn)}}return Mn}function Yu(w,U){w.ambientLightColor.needsUpdate=U,w.lightProbe.needsUpdate=U,w.directionalLights.needsUpdate=U,w.directionalLightShadows.needsUpdate=U,w.pointLights.needsUpdate=U,w.pointLightShadows.needsUpdate=U,w.spotLights.needsUpdate=U,w.spotLightShadows.needsUpdate=U,w.rectAreaLights.needsUpdate=U,w.hemisphereLights.needsUpdate=U}function Zu(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(w,U,H){ve.get(w.texture).__webglTexture=U,ve.get(w.depthTexture).__webglTexture=H;const V=ve.get(w);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=H===void 0,V.__autoAllocateDepthBuffer||ie.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,U){const H=ve.get(w);H.__webglFramebuffer=U,H.__useDefaultFramebuffer=U===void 0};const $u=P.createFramebuffer();this.setRenderTarget=function(w,U=0,H=0){R=w,C=U,S=H;let V=!0,O=null,se=!1,_e=!1;if(w){const Re=ve.get(w);if(Re.__useDefaultFramebuffer!==void 0)ce.bindFramebuffer(P.FRAMEBUFFER,null),V=!1;else if(Re.__webglFramebuffer===void 0)E.setupRenderTarget(w);else if(Re.__hasExternalTextures)E.rebindTextures(w,ve.get(w.texture).__webglTexture,ve.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Ue=w.depthTexture;if(Re.__boundDepthTexture!==Ue){if(Ue!==null&&ve.has(Ue)&&(w.width!==Ue.image.width||w.height!==Ue.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(w)}}const Ve=w.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(_e=!0);const We=ve.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(We[U])?O=We[U][H]:O=We[U],se=!0):w.samples>0&&E.useMultisampledRTT(w)===!1?O=ve.get(w).__webglMultisampledFramebuffer:Array.isArray(We)?O=We[H]:O=We,D.copy(w.viewport),z.copy(w.scissor),k=w.scissorTest}else D.copy(be).multiplyScalar(X).floor(),z.copy(ze).multiplyScalar(X).floor(),k=it;if(H!==0&&(O=$u),ce.bindFramebuffer(P.FRAMEBUFFER,O)&&V&&ce.drawBuffers(w,O),ce.viewport(D),ce.scissor(z),ce.setScissorTest(k),se){const Re=ve.get(w.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+U,Re.__webglTexture,H)}else if(_e){const Re=ve.get(w.texture),Ve=U;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Re.__webglTexture,H,Ve)}else if(w!==null&&H!==0){const Re=ve.get(w.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Re.__webglTexture,H)}T=-1},this.readRenderTargetPixels=function(w,U,H,V,O,se,_e){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=ve.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&_e!==void 0&&(Te=Te[_e]),Te){ce.bindFramebuffer(P.FRAMEBUFFER,Te);try{const Re=w.texture,Ve=Re.format,We=Re.type;if(!we.textureFormatReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!we.textureTypeReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=w.width-V&&H>=0&&H<=w.height-O&&P.readPixels(U,H,V,O,Ze.convert(Ve),Ze.convert(We),se)}finally{const Re=R!==null?ve.get(R).__webglFramebuffer:null;ce.bindFramebuffer(P.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(w,U,H,V,O,se,_e){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=ve.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&_e!==void 0&&(Te=Te[_e]),Te){const Re=w.texture,Ve=Re.format,We=Re.type;if(!we.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!we.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=w.width-V&&H>=0&&H<=w.height-O){ce.bindFramebuffer(P.FRAMEBUFFER,Te);const Ue=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Ue),P.bufferData(P.PIXEL_PACK_BUFFER,se.byteLength,P.STREAM_READ),P.readPixels(U,H,V,O,Ze.convert(Ve),Ze.convert(We),0);const at=R!==null?ve.get(R).__webglFramebuffer:null;ce.bindFramebuffer(P.FRAMEBUFFER,at);const ct=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await rf(P,ct,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Ue),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,se),P.deleteBuffer(Ue),P.deleteSync(ct),se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,U=null,H=0){w.isTexture!==!0&&(ns("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,w=arguments[1]);const V=Math.pow(2,-H),O=Math.floor(w.image.width*V),se=Math.floor(w.image.height*V),_e=U!==null?U.x:0,Te=U!==null?U.y:0;E.setTexture2D(w,0),P.copyTexSubImage2D(P.TEXTURE_2D,H,0,0,_e,Te,O,se),ce.unbindTexture()};const ju=P.createFramebuffer(),Ku=P.createFramebuffer();this.copyTextureToTexture=function(w,U,H=null,V=null,O=0,se=null){w.isTexture!==!0&&(ns("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,w=arguments[1],U=arguments[2],se=arguments[3]||0,H=null),se===null&&(O!==0?(ns("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),se=O,O=0):se=0);let _e,Te,Re,Ve,We,Ue,at,ct,At;const Mt=w.isCompressedTexture?w.mipmaps[se]:w.image;if(H!==null)_e=H.max.x-H.min.x,Te=H.max.y-H.min.y,Re=H.isBox3?H.max.z-H.min.z:1,Ve=H.min.x,We=H.min.y,Ue=H.isBox3?H.min.z:0;else{const fn=Math.pow(2,-O);_e=Math.floor(Mt.width*fn),Te=Math.floor(Mt.height*fn),w.isDataArrayTexture?Re=Mt.depth:w.isData3DTexture?Re=Math.floor(Mt.depth*fn):Re=1,Ve=0,We=0,Ue=0}V!==null?(at=V.x,ct=V.y,At=V.z):(at=0,ct=0,At=0);const ot=Ze.convert(U.format),ke=Ze.convert(U.type);let zt;U.isData3DTexture?(E.setTexture3D(U,0),zt=P.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(E.setTexture2DArray(U,0),zt=P.TEXTURE_2D_ARRAY):(E.setTexture2D(U,0),zt=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,U.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,U.unpackAlignment);const ht=P.getParameter(P.UNPACK_ROW_LENGTH),Mn=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Ui=P.getParameter(P.UNPACK_SKIP_PIXELS),sn=P.getParameter(P.UNPACK_SKIP_ROWS),Es=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,Mt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Mt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ve),P.pixelStorei(P.UNPACK_SKIP_ROWS,We),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ue);const xt=w.isDataArrayTexture||w.isData3DTexture,dn=U.isDataArrayTexture||U.isData3DTexture;if(w.isDepthTexture){const fn=ve.get(w),Yt=ve.get(U),en=ve.get(fn.__renderTarget),fa=ve.get(Yt.__renderTarget);ce.bindFramebuffer(P.READ_FRAMEBUFFER,en.__webglFramebuffer),ce.bindFramebuffer(P.DRAW_FRAMEBUFFER,fa.__webglFramebuffer);for(let mi=0;mi<Re;mi++)xt&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,ve.get(w).__webglTexture,O,Ue+mi),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,ve.get(U).__webglTexture,se,At+mi)),P.blitFramebuffer(Ve,We,_e,Te,at,ct,_e,Te,P.DEPTH_BUFFER_BIT,P.NEAREST);ce.bindFramebuffer(P.READ_FRAMEBUFFER,null),ce.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(O!==0||w.isRenderTargetTexture||ve.has(w)){const fn=ve.get(w),Yt=ve.get(U);ce.bindFramebuffer(P.READ_FRAMEBUFFER,ju),ce.bindFramebuffer(P.DRAW_FRAMEBUFFER,Ku);for(let en=0;en<Re;en++)xt?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,fn.__webglTexture,O,Ue+en):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,fn.__webglTexture,O),dn?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Yt.__webglTexture,se,At+en):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Yt.__webglTexture,se),O!==0?P.blitFramebuffer(Ve,We,_e,Te,at,ct,_e,Te,P.COLOR_BUFFER_BIT,P.NEAREST):dn?P.copyTexSubImage3D(zt,se,at,ct,At+en,Ve,We,_e,Te):P.copyTexSubImage2D(zt,se,at,ct,Ve,We,_e,Te);ce.bindFramebuffer(P.READ_FRAMEBUFFER,null),ce.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else dn?w.isDataTexture||w.isData3DTexture?P.texSubImage3D(zt,se,at,ct,At,_e,Te,Re,ot,ke,Mt.data):U.isCompressedArrayTexture?P.compressedTexSubImage3D(zt,se,at,ct,At,_e,Te,Re,ot,Mt.data):P.texSubImage3D(zt,se,at,ct,At,_e,Te,Re,ot,ke,Mt):w.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,se,at,ct,_e,Te,ot,ke,Mt.data):w.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,se,at,ct,Mt.width,Mt.height,ot,Mt.data):P.texSubImage2D(P.TEXTURE_2D,se,at,ct,_e,Te,ot,ke,Mt);P.pixelStorei(P.UNPACK_ROW_LENGTH,ht),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Mn),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ui),P.pixelStorei(P.UNPACK_SKIP_ROWS,sn),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Es),se===0&&U.generateMipmaps&&P.generateMipmap(zt),ce.unbindTexture()},this.copyTextureToTexture3D=function(w,U,H=null,V=null,O=0){return w.isTexture!==!0&&(ns("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,V=arguments[1]||null,w=arguments[2],U=arguments[3],O=arguments[4]||0),ns('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,U,H,V,O)},this.initRenderTarget=function(w){ve.get(w).__webglFramebuffer===void 0&&E.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?E.setTextureCube(w,0):w.isData3DTexture?E.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?E.setTexture2DArray(w,0):E.setTexture2D(w,0),ce.unbindTexture()},this.resetState=function(){C=0,S=0,R=null,ce.reset(),mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=et._getDrawingBufferColorSpace(e),t.unpackColorSpace=et._getUnpackColorSpace()}}const Vs="https://www.facebook.com/share/1AKQ6La7YK/",ch=[{id:"low",labelBn:"লো",descBn:"দ্রুত ৬০ FPS (বাজেট ফোন)"},{id:"medium",labelBn:"মিডিয়াম",descBn:"ব্যালেন্সড ৩ডি গ্রাফিক্স"},{id:"max",labelBn:"ম্যাক্স",descBn:"শ্যাডো + রিয়েল রিফ্লেকশন"},{id:"ultra",labelBn:"আল্ট্রা",descBn:"হাই ডিটেইল আল্ট্রা গ্রাফিক্স"},{id:"ultra_max",labelBn:"আল্ট্রা ম্যাক্স",descBn:"২K শ্যাডো + ম্যাক্স রিয়েলিজম"}],Nv=[{id:"classic",badge:"🏙️",labelBn:"পুরান ঢাকা ক্লাসিক",subBn:"সোনালি বিকেল • মিছিল • ইউ-টার্ন • নদী"},{id:"night",badge:"🌙",labelBn:"পুরান ঢাকা নাইট",subBn:"রাতের নিয়ন ঢাকা • উজ্জ্বল হেডলাইট"},{id:"rain",badge:"🌧️",labelBn:"বর্ষার ঢাকা",subBn:"ঝুম বৃষ্টি • ভেজা রাস্তা • ঝড়ো আকাশ"},{id:"freeroam",badge:"🛞",labelBn:"ফ্রি রোম / মডিং",subBn:"মৃত্যু নেই • আনলিমিটেড ব্যাটারি"},{id:"hardcore",badge:"🔥",labelBn:"চরম তাণ্ডব (২× আয়)",subBn:"বেশি বাস-মিছিল • দ্বিগুণ গ্যারেজ টাকা"}],Uv=[{hex:292951,css:"#047857",labelBn:"পুরান ঢাকা সবুজ"},{hex:12131356,css:"#b91c1c",labelBn:"রয়্যাল লাল"},{hex:14251782,css:"#d97706",labelBn:"গোল্ডেন হলুদ"},{hex:1920728,css:"#1d4ed8",labelBn:"ইলেকট্রিক নীল"},{hex:1579035,css:"#27272a",labelBn:"ম্যাট কালো"},{hex:8266446,css:"#7e22ce",labelBn:"বেগুনি বস"}],Au=[{id:"classic_art",labelBn:"🎨 পুরান ঢাকা রিকশা আর্ট"},{id:"sabbir_codex",labelBn:"👑 SABBIR CODEX ফটো"},{id:"bd_tiger",labelBn:"🇧🇩 লাল-সবুজ বাংলাদেশ"},{id:"cyber_neon",labelBn:"⚡ সাইবার নিয়ন বস"},{id:"funny_slogan",labelBn:"😂 মামার রাস্তা কমেডি"}],Ru=[{id:"red_fringe",labelBn:"লাল ছাদ + হলুদ ঝালর"},{id:"gold_royal",labelBn:"সোনালি রয়্যাল ছাদ"},{id:"metro_blue",labelBn:"ঢাকা মেট্রো নীল"},{id:"carbon_sport",labelBn:"কার্বন স্পোর্টস"}],Cu=[{id:"chrome",labelBn:"ক্রোম রিম"},{id:"gold_spoke",labelBn:"গোল্ডেন রিম"},{id:"neon_cyan",labelBn:"সায়ান আন্ডারগ্লো"},{id:"neon_rgb",labelBn:"ডিস্কো লাল-হলুদ গ্লো"}],Pu=[{id:"none",labelBn:"কোনোটা না"},{id:"sabbir_sign",labelBn:"SABBIR CODEX লাইট"},{id:"bd_flag",labelBn:"🇧🇩 জাতীয় পতাকা"},{id:"turbo_wing",labelBn:"🏎️ স্পোর্টস স্পয়লার"}],Lu="mamarRasta.mods.v1";function Iu(){return{bodyColor:292951,panelStyle:"classic_art",roofStyle:"red_fringe",wheelNeon:"chrome",topAccessory:"sabbir_sign"}}function kv(){try{const s=localStorage.getItem(Lu);if(s){const e=JSON.parse(s);return{bodyColor:typeof e.bodyColor=="number"?e.bodyColor:292951,panelStyle:Au.some(t=>t.id===e.panelStyle)?e.panelStyle:"classic_art",roofStyle:Ru.some(t=>t.id===e.roofStyle)?e.roofStyle:"red_fringe",wheelNeon:Cu.some(t=>t.id===e.wheelNeon)?e.wheelNeon:"chrome",topAccessory:Pu.some(t=>t.id===e.topAccessory)?e.topAccessory:"sabbir_sign"}}}catch{}return Iu()}function Ov(s){try{localStorage.setItem(Lu,JSON.stringify(s))}catch{}}const sl=[{id:"deshi_tesla",nameBn:"দেশি টেসলা (অটো-রিকশা)",subtitleBn:"ফ্রি স্টার্টার • নো লাইসেন্স, নো ব্রেক",badge:"🛺",price:0,maxSpeedMs:18,chaosSpeedMs:25.5,steerSpeed:13.4,smashMass:1,batteryDrainMult:1,lossMultiplier:1,engineType:"electric",hoverHeight:0,accentHex:"#10b981",funnyDescBn:"পুরান ঢাকার রিকশা আর্ট, ব্রেক নাই — শুধু হর্ন আর সাহস!"},{id:"dhaka_cng",nameBn:"সুপার সিএনজি টার্বো",subtitleBn:"মিটারে যামু না • হাই-স্পিড গলি কাটিং",badge:"🟢",price:6e4,maxSpeedMs:20.5,chaosSpeedMs:28,steerSpeed:15.2,smashMass:1.15,batteryDrainMult:.9,lossMultiplier:1.15,engineType:"cng",hoverHeight:0,accentHex:"#22c55e",funnyDescBn:"ফাঁক পেলেই ঢুকে পড়ে! মিটার বন্ধ, টার্বো চালু!"},{id:"bd_tractor",nameBn:"বাংলাদেশী ট্র্যাক্টর পাওয়ার",subtitleBn:"রিয়েল ৩ডি ট্র্যাক্টর • সামনে যা পড়বে চ্যাপ্টা!",badge:"🚜",price:11e4,maxSpeedMs:19.5,chaosSpeedMs:27.5,steerSpeed:13.8,smashMass:2.6,batteryDrainMult:.78,lossMultiplier:1.4,engineType:"cng",hoverHeight:0,accentHex:"#ef4444",funnyDescBn:"মাঠ থেকে সোজা ঢাকার মেইন রোডে! কার-সিএনজি ধাক্কায় উড়ে যায়!"},{id:"street_cruiser",nameBn:"ঢাকা স্ট্রিট বাইক ৩ডি",subtitleBn:"রিয়েল ৩ডি বাইক • পাতলা গ্যাপে নিখুঁত কাটিং",badge:"🏍️",price:16e4,maxSpeedMs:23.2,chaosSpeedMs:31.5,steerSpeed:16.6,smashMass:.95,batteryDrainMult:.85,lossMultiplier:1.35,engineType:"superbike",hoverHeight:0,accentHex:"#f97316",funnyDescBn:"দুই বাসের মাঝখানে ১ ফিট গ্যাপ? মামার কাছে হাইওয়ে!"},{id:"ninja_h2r",nameBn:"কাওয়াসাকি নিনজা H2R",subtitleBn:"রিয়েল ৩ডি সুপারবাইক • সুপারচার্জড রকেট",badge:"⚡",price:26e4,maxSpeedMs:28.5,chaosSpeedMs:38.5,steerSpeed:18.4,smashMass:1.15,batteryDrainMult:.88,lossMultiplier:1.55,engineType:"superbike",hoverHeight:0,accentHex:"#4ade80",funnyDescBn:"সার্জেন্ট চোখ পিটপিট করার আগেই হাওয়া! নিনজা গ্রিন বিস্ট!"},{id:"dhaka_leguna",nameBn:"ঢাকা লেগুনা এক্সপ্রেস",subtitleBn:"রিয়েল ৩ডি ভ্যান • হেভি স্ম্যাশ পাওয়ার",badge:"🚐",price:35e4,maxSpeedMs:22,chaosSpeedMs:30.5,steerSpeed:14,smashMass:2.25,batteryDrainMult:.8,lossMultiplier:1.65,engineType:"cng",hoverHeight:0,accentHex:"#38bdf8",funnyDescBn:"পেছনে হেলপার ঝুলছে, ব্রেক নাই — সামনে যা পড়ে সব উড়ায়া দেয়!"},{id:"cybertruck",nameBn:"টেসলা সাইবারট্রাক",subtitleBn:"বুলেটপ্রুফ স্টিল • হেভি স্ম্যাশ মেশিন",badge:"🔺",price:52e4,maxSpeedMs:26.8,chaosSpeedMs:36.5,steerSpeed:15,smashMass:2.85,batteryDrainMult:.72,lossMultiplier:1.9,engineType:"cyber",hoverHeight:0,accentHex:"#94a3b8",funnyDescBn:"আসল দেশি বনাম বিদেশি টেসলা! প্রাইভেট কার খেলনার মতো ওড়ে!"},{id:"lamborghini",nameBn:"ল্যাম্বরগিনি অ্যাভেনটাডোর SVJ",subtitleBn:"রিয়েল ৩ডি সুপারকার • V12 রোর + ২.১× ক্ষতি",badge:"🏎️",price:85e4,maxSpeedMs:31.8,chaosSpeedMs:42.5,steerSpeed:18,smashMass:1.8,batteryDrainMult:.78,lossMultiplier:2.15,engineType:"v12",hoverHeight:0,accentHex:"#a3e635",funnyDescBn:"ঢাকার রাস্তায় ল্যাম্বরগিনি! দেখেই পাবলিক সেলফি তোলার জন্য দৌড়াবে!"},{id:"flying_car",nameBn:"ফিউচার ফ্লাইং কার ২০৯৯",subtitleBn:"রিয়েল ৩ডি ফিউচার হোভার-কার • বাসের ওপর দিয়ে ওড়ে!",badge:"🛸",price:12e5,maxSpeedMs:34,chaosSpeedMs:45.5,steerSpeed:19.2,smashMass:2.5,batteryDrainMult:.65,lossMultiplier:2.6,engineType:"hover",hoverHeight:1.05,accentHex:"#22d3ee",funnyDescBn:"জ্যামে আটকানোর দিন শেষ! রাস্তার ওপরে ভেসে চলে, ক্যাওসে আকাশে ওড়ে!"}];function Ci(s){return sl.find(e=>e.id===s)||sl[0]}const Du="mamarRasta.garage.v2";function Bv(){try{const s=localStorage.getItem(Du);if(s){const e=JSON.parse(s),t=Array.isArray(e.owned)?e.owned:["deshi_tesla"];t.includes("deshi_tesla")||t.unshift("deshi_tesla");const n=t.includes(e.selected)?e.selected:"deshi_tesla";return{walletTk:typeof e.walletTk=="number"&&Number.isFinite(e.walletTk)?Math.max(0,Math.round(e.walletTk)):0,owned:t,selected:n}}}catch{}return{walletTk:0,owned:["deshi_tesla"],selected:"deshi_tesla"}}function Ka(s){try{localStorage.setItem(Du,JSON.stringify(s))}catch{}}const tn=9.4,Fv=[-6.7,-2.35,2.35,6.7],hh=500,uh=[{minLoss:0,title:"নবীন দেশি টেসলা চালক",badge:"🛺",color:"#a3e635"},{minLoss:8e4,title:"গলির অঘোষিত ত্রাস",badge:"⚡",color:"#facc15"},{minLoss:25e4,title:"রং সাইড গ্র্যান্ডমাস্টার",badge:"🔥",color:"#fb923c"},{minLoss:55e4,title:"ঢাকার রাস্তার জীবন্ত আতঙ্ক",badge:"💀",color:"#f87171"},{minLoss:1e6,title:"জাতীয় ক্ষতির ব্র্যান্ড অ্যাম্বাসেডর",badge:"👑",color:"#e879f9"},{minLoss:2e6,title:"মামার রাস্তার দলিলধারী সম্রাট",badge:"🏆",color:"#38bdf8"}];function Nu(s){let e=uh[0];for(const t of uh)s>=t.minLoss&&(e=t);return e}const Hv=["০","১","২","৩","৪","৫","৬","৭","৮","৯"];function je(s){return String(s).replace(/\d/g,e=>Hv[Number(e)])}function zv(s){const e=Math.max(0,Math.round(s)),t=String(e);if(t.length<=3)return t;const n=t.slice(-3);return`${t.slice(0,-3).replace(/\B(?=(\d{2})+(?!\d))/g,",")},${n}`}function Pt(s){return`৳ ${je(zv(s))}`}function Ei(s){return s>=1e7?`৳ ${je((s/1e7).toFixed(2))} কোটি`:s>=1e5?`৳ ${je((s/1e5).toFixed(2))} লাখ`:Pt(s)}const dh=[{clip:"ustha_marum",bn:"🔊 ইস! আবার ইংরেজি মারাও! কপালে উষ্টা মারুম!"},{clip:"bujhpata",bn:"🔊 বুঝলে বুঝপাতা, না বুঝলে তেজপাতা!"},{clip:"ami_vala_na",bn:"🔊 আমি তো ভালা না — ভালা লইয়া থাইক্কো! কথা ক্লিয়ার?"},{clip:"hila_dala",bn:"🔊 কিউঁ, হিলা ডালা না?! ব্রেক ছাড়া তাণ্ডব!"},{clip:"dhele_dei",bn:"🔊 একটু চা খাবেন? ঢেলে দেই?!"},{clip:"kaisi_lagi_swad",bn:"🔊 হাঁ ভাই, কেমন লাগলো? আ গেয়া সোয়াদ?!"},{clip:"ruko_zara",bn:"🔊 রুকো জারা, সবর করো! ধাক্কা-মুক্কি ছাড়া সাইড দাও!"},{clip:"haan_bhai_haan",bn:"🔊 আরে হাঁ ভাই হাঁ! রাস্তা আমার মামার!"},{clip:"bahut_tez",bn:"🔊 বহুত তেজ হো রহে হো হ্যাঁ?!"},{clip:"banjo_laugh",bn:"🔊 হাহাহা! ব্রেক ফেইল, খেলা হবে!"}],Ja={car:['কারের বাম্পার উড়ে গেল — "রাস্তা কি তোর মামার?!"',"করোলার লুকিং গ্লাস খতম! জাতীয় ক্ষতি বাড়লো!","স্যারের গাড়িতে স্ক্র্যাচ! আবে সালে!"],cng:["সিএনজির সাথে গ্র্যান্ড টক্কর! মিটার ছাড়াই উসুল!",'সিএনজি ঘুরে গেল — "ভাই ব্রেক বাড়িতে ফালায়া আইছেন?!"'],bike:["বাইকার উড়ে ফুটপাতে — রাইড ক্যানসেল!","ওস্তাদের কাটিংয়ে বাইকের আয়না উধাও!"],rickshaw:["প্যাডেল রিকশা চক্কর খেলো! পুরান ঢাকা লাইভ!","রিকশার হুড আকাশে!"],stall:["চা-স্টল উড়ায়া দিছেন! ঢেলে দেই?!","ফুচকার গাড়ি চ্যাপ্টা! টক পানি ভাসছে!","ডাবওয়ালার ডাব গড়াগড়ি খাচ্ছে!"],ped:["রিলস দেখতে গিয়ে পথচারীর জুতা আকাশে!",'পথচারী ক্ষেপছে — "শুঁটিয়ে লাল করে দে!"']},Gv=[{name:"মামা চা-স্টল ও ফ্লেক্সিলোড",sub:"বাকি চাইলে লজ্জা পাবেন • স্পেশাল মালাই চা",icon:"tea",bg:"#991b1b",accent:"#fde047"},{name:"ভাই ভাই কাচ্চি ও তেহারী ঘর",sub:"খাঁটি বাসমতি কাচ্চি ১২০৳ • বোরহানি ফ্রি",icon:"biryani",bg:"#065f46",accent:"#facc15"},{name:"ডিজিটাল সেলুন ও ফটোকপি",sub:"ব্যাংকক কাটিং • ৩ টাকায় রঙিন ফটোকপি",icon:"salon",bg:"#1e3a8a",accent:"#38bdf8"},{name:"ব্যাটারি চার্জ গ্যারেজ ২৪/৭",sub:"দেশি টেসলার ফাস্ট চার্জ • ব্রেক সারানো হয় না",icon:"battery",bg:"#c2410c",accent:"#fef08a"},{name:"সততা ফার্মেসি ও কনফেকশনারী",sub:"মাথাব্যথার ওষুধ ও ঠান্ডা পানি পাওয়া যায়",icon:"pharmacy",bg:"#0f766e",accent:"#a7f3d0"},{name:"হাজী নান্না বিরিয়ানি হাউজ",sub:"আসল পুরান ঢাকার স্বাদ • ২৪ ঘণ্টা খোলা",icon:"biryani",bg:"#7f1d1d",accent:"#fbbf24"},{name:"বিসমিল্লাহ ফুচকা ও চটপটি",sub:"বেশি ঝাল, বেশি টক • রাস্তার পাশেই বসুন",icon:"fuchka",bg:"#6d28d9",accent:"#fde047"},{name:"মামার বেকারী ও মিষ্টান্ন ভাণ্ডার",sub:"গরম সিঙ্গারা, পুরি ও রসমালাই",icon:"bakery",bg:"#b45309",accent:"#fef3c7"},{name:"নিউ ঢাকা হার্ডওয়্যার ও মোটরস",sub:"অটো-রিকশার হর্ন ও রঙিন ঝালর মিলে",icon:"hardware",bg:"#1f2937",accent:"#f97316"},{name:"গাজী টি-স্টল ও পান-সুপারি",sub:"আড্ডা ফ্রি, চা ১০ টাকা • টিভি চলছে",icon:"tea",bg:"#14532d",accent:"#facc15"}],Uu=[{name:"বলাকা পরিবহন",route:"সায়দাবাদ ↔ গাজীপুর",slogan:"সিটিং সার্ভিস • গেটলক (কিন্তু সব মোড়ে থামে)",plate:"ঢাকা মেট্রো-ব ১১-৪৫৮৯",top:"#b91c1c",bottom:"#fef3c7",stripe:"#1d4ed8"},{name:"রাইদা এক্সপ্রেস",route:"পোস্তগোলা ↔ দিয়াবাড়ি",slogan:"ভাড়া বাড়তি, ব্রেক ঘাটতি • দোয়া নিয়ে উঠুন",plate:"ঢাকা মেট্রো-ব ১৪-২২০১",top:"#15803d",bottom:"#f8fafc",stripe:"#ea580c"},{name:"তুরাগ লোকাল",route:"যাত্রাবাড়ী ↔ উত্তরা",slogan:"আগে গেলে বাঘে খায়, পিছে গেলে তুরাগে খায়",plate:"ঢাকা মেট্রো-ব ১২-৮৮৩৪",top:"#1d4ed8",bottom:"#e0f2fe",stripe:"#eab308"},{name:"আজমেরী গ্লোরী",route:"সদরঘাট ↔ চন্দ্রা",slogan:"সিট না থাকলেও দাঁড়িয়ে সুপারফাস্ট যাত্রা",plate:"ঢাকা মেট্রো-ব ১৫-৬৬১৯",top:"#c2410c",bottom:"#fff7ed",stripe:"#15803d"},{name:"অনাবিল সুপার",route:"সাইনবোর্ড ↔ গাজীপুর",slogan:"রং সাইড ওস্তাদদের যমদূত • হর্ন শুনে সরুন",plate:"ঢাকা মেট্রো-ব ১৩-৯০১২",top:"#7e22ce",bottom:"#fae8ff",stripe:"#facc15"},{name:"ভিক্টর ক্লাসিক",route:"সদরঘাট ↔ আব্দুল্লাহপুর",slogan:"দরজা খোলা, মন খোলা • স্টুডেন্ট হাফ পাস",plate:"ঢাকা মেট্রো-ব ১১-৭৭৪০",top:"#0f766e",bottom:"#ecfeff",stripe:"#ef4444"}],fh=Uu.map(s=>s.name),Vv=["SABBIR CODEX • মামার রাস্তা ৩ডি • সাব্বির ও মাজিদ","SABBIR CODEX DEVELOPMENT TEAM • নো লাইসেন্স, নো ব্রেক!","রাস্তা কি তোর মামার? — হ্যাঁ ভাই, দলিল আছে! • SABBIR CODEX","সাবধান! হলুদ দাগে অবৈধ চার্জ সম্পূর্ণ নিষেধ (কিন্তু ফ্রি!)","পুরান ঢাকা এক্সপ্রেস • আগে গেলে বাঘে খায়, পিছে গেলে বলাকা বাসে খায়!","SABBIR CODEX গ্যারেজ — রিকশা মডিং ও সুপারকার শোরুম!","এক কাপ চায়ের টাকা পকেটে রাখুন, সার্জেন্ট সামনেই!"];function mn(s){return s[Math.floor(Math.random()*s.length)]}const Wv=["poribesh_sundor","ustha_marum"];class Xv{constructor(){B(this,"ctx",null);B(this,"masterGain",null);B(this,"motorOsc",null);B(this,"motorOsc2",null);B(this,"motorFilter",null);B(this,"motorGain",null);B(this,"chargeOsc",null);B(this,"chargeGain",null);B(this,"memeBuffers",new Map);B(this,"loadingClips",new Set);B(this,"warmStarted",!1);B(this,"activeMemeSource",null);B(this,"activeHtmlAudio",null);B(this,"activeMemePriority",0);B(this,"lastMemeAt",0);B(this,"soundEnabled",!0);B(this,"voiceEnabled",!0);B(this,"chaosBeatTimer",0);B(this,"chaosStep",0)}unlock(){if(!this.ctx){const e=window.AudioContext||window.webkitAudioContext;if(!e)return;this.ctx=new e,this.masterGain=this.ctx.createGain(),this.masterGain.gain.value=this.soundEnabled?.62:0,this.masterGain.connect(this.ctx.destination),this.setupMotorLoop(),this.setupChargeLoop()}if(this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{}),!this.warmStarted){this.warmStarted=!0;for(const e of Wv)this.cacheClipInBackground(e)}}cacheClipInBackground(e){if(!this.ctx||this.memeBuffers.has(e)||this.loadingClips.has(e))return;this.loadingClips.add(e);const t=this.ctx;fetch(`./memes/${e}.mp3`).then(n=>n.ok?n.arrayBuffer():null).then(n=>n?t.decodeAudioData(n.slice(0)):null).then(n=>{n&&this.memeBuffers.set(e,n)}).catch(()=>{}).finally(()=>{this.loadingClips.delete(e)})}setSoundEnabled(e){this.soundEnabled=e,this.masterGain&&this.ctx&&this.masterGain.gain.setTargetAtTime(e?.62:0,this.ctx.currentTime,.04),e||this.stopActiveMeme()}setVoiceEnabled(e){this.voiceEnabled=e,e||this.stopActiveMeme()}stopActiveMeme(){try{this.activeMemeSource&&(this.activeMemeSource.onended=null,this.activeMemeSource.stop(),this.activeMemeSource.disconnect(),this.activeMemeSource=null)}catch{}try{this.activeHtmlAudio&&(this.activeHtmlAudio.pause(),this.activeHtmlAudio.currentTime=0,this.activeHtmlAudio=null)}catch{}this.activeMemePriority=0}playMemeClip(e,t=2,n=1){if(!this.soundEnabled||!this.voiceEnabled)return;this.unlock();const i=performance.now();if((this.activeMemeSource||this.activeHtmlAudio)&&t<this.activeMemePriority||t<=1&&i-this.lastMemeAt<1400)return;this.stopActiveMeme(),this.activeMemePriority=t,this.lastMemeAt=i;const r=this.memeBuffers.get(e);if(r&&this.ctx&&this.masterGain){const a=this.ctx.createBufferSource();a.buffer=r;const o=this.ctx.createGain();o.gain.value=Math.min(1.35,n*1.15),a.connect(o),o.connect(this.masterGain),a.onended=()=>{this.activeMemeSource===a&&(this.activeMemeSource=null,this.activeMemePriority=0)},this.activeMemeSource=a,a.start(0);return}this.cacheClipInBackground(e);try{const a=new Audio(`./memes/${e}.mp3`);a.volume=Math.min(1,n*.92),a.onended=()=>{this.activeHtmlAudio===a&&(this.activeHtmlAudio=null,this.activeMemePriority=0)},a.onerror=()=>{this.activeHtmlAudio===a&&(this.activeHtmlAudio=null,this.activeMemePriority=0)},this.activeHtmlAudio=a,a.play().catch(()=>{})}catch{}}playRandomMeme(e,t=2,n=1){const i=mn(e);return this.playMemeClip(i,t,n),i}setupMotorLoop(){!this.ctx||!this.masterGain||(this.motorGain=this.ctx.createGain(),this.motorGain.gain.value=0,this.motorFilter=this.ctx.createBiquadFilter(),this.motorFilter.type="bandpass",this.motorFilter.frequency.value=340,this.motorFilter.Q.value=1.6,this.motorOsc=this.ctx.createOscillator(),this.motorOsc.type="sawtooth",this.motorOsc.frequency.value=105,this.motorOsc2=this.ctx.createOscillator(),this.motorOsc2.type="triangle",this.motorOsc2.frequency.value=215,this.motorOsc.connect(this.motorFilter),this.motorOsc2.connect(this.motorFilter),this.motorFilter.connect(this.motorGain),this.motorGain.connect(this.masterGain),this.motorOsc.start(),this.motorOsc2.start())}setupChargeLoop(){if(!this.ctx||!this.masterGain)return;this.chargeGain=this.ctx.createGain(),this.chargeGain.gain.value=0,this.chargeOsc=this.ctx.createOscillator(),this.chargeOsc.type="sawtooth",this.chargeOsc.frequency.value=100;const e=this.ctx.createBiquadFilter();e.type="bandpass",e.frequency.value=980,e.Q.value=4.2,this.chargeOsc.connect(e),e.connect(this.chargeGain),this.chargeGain.connect(this.masterGain),this.chargeOsc.start()}updateContinuous(e,t,n,i,r,a){if(!this.ctx||!this.motorGain||!this.motorOsc||!this.motorOsc2||!this.motorFilter||!this.chargeGain||!this.chargeOsc)return;const o=this.ctx.currentTime,l=Math.max(0,Math.min(1.6,e)),h=!!(this.activeMemeSource||this.activeHtmlAudio)?.32:1;let u=92+l*185,d=205+l*410,f=360+l*400;r==="superbike"?(u=155+l*390,d=310+l*780,f=720+l*950):r==="v12"?(u=78+l*225,d=117+l*338,f=460+l*700):r==="hover"?(u=180+l*240,d=360+l*520,f=920+l*600):r==="cyber"?(u=120+l*260,d=240+l*520,f=640+l*500):r==="cng"&&(u=72+l*145,d=144+l*290,f=310+l*300);const g=t&&this.soundEnabled?(.02+l*.052)*h:0;this.motorGain.gain.setTargetAtTime(g,o,.08),this.motorOsc.frequency.setTargetAtTime(u+(i?45:0),o,.07),this.motorOsc2.frequency.setTargetAtTime(d+(i?90:0),o,.07),this.motorFilter.frequency.setTargetAtTime(f,o,.08);const _=t&&n&&this.soundEnabled?.1*h:0;this.chargeGain.gain.setTargetAtTime(_,o,.04),n&&this.chargeOsc.frequency.setValueAtTime(115+Math.random()*85,o),t&&i&&this.soundEnabled&&(this.chaosBeatTimer-=a,this.chaosBeatTimer<=0&&(this.chaosBeatTimer=.19,this.playChaosBeatStep(this.chaosStep++,h)))}playChaosBeatStep(e,t){if(!this.ctx||!this.masterGain)return;const n=this.ctx.currentTime,i=[220,261.63,293.66,329.63,392,329.63,293.66,261.63];if(e%2===0){const o=this.ctx.createOscillator(),l=this.ctx.createGain();o.type="sine",o.frequency.setValueAtTime(145,n),o.frequency.exponentialRampToValueAtTime(48,n+.12),l.gain.setValueAtTime(.18*t,n),l.gain.exponentialRampToValueAtTime(.001,n+.14),o.connect(l),l.connect(this.masterGain),o.start(n),o.stop(n+.15)}const r=this.ctx.createOscillator(),a=this.ctx.createGain();r.type="square",r.frequency.setValueAtTime(i[e%i.length]*(e%4===0?1.5:1),n),a.gain.setValueAtTime(.04*t,n),a.gain.exponentialRampToValueAtTime(.001,n+.13),r.connect(a),a.connect(this.masterGain),r.start(n),r.stop(n+.14)}playHorn(){if(!this.soundEnabled||(this.unlock(),!this.ctx||!this.masterGain))return;const e=this.ctx.currentTime;[510,645].forEach(t=>{const n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="sawtooth",n.frequency.setValueAtTime(t,e),n.frequency.setValueAtTime(t*1.07,e+.11),i.gain.setValueAtTime(.001,e),i.gain.linearRampToValueAtTime(.13,e+.02),i.gain.setValueAtTime(.13,e+.18),i.gain.exponentialRampToValueAtTime(.001,e+.28);const r=this.ctx.createBiquadFilter();r.type="lowpass",r.frequency.value=2100,n.connect(r),r.connect(i),i.connect(this.masterGain),n.start(e),n.stop(e+.29)})}playBusHorn(){if(!this.soundEnabled||(this.unlock(),!this.ctx||!this.masterGain))return;const e=this.ctx.currentTime;[138,173,207].forEach(t=>{const n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="sawtooth",n.frequency.setValueAtTime(t,e),i.gain.setValueAtTime(.001,e),i.gain.linearRampToValueAtTime(.13,e+.04),i.gain.exponentialRampToValueAtTime(.001,e+.65);const r=this.ctx.createBiquadFilter();r.type="lowpass",r.frequency.value=900,n.connect(r),r.connect(i),i.connect(this.masterGain),n.start(e),n.stop(e+.66)})}playSoundBomb(e){if(this.soundEnabled){if(this.unlock(),this.ctx&&this.masterGain){const t=this.ctx.currentTime,n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="sine",n.frequency.setValueAtTime(165,t),n.frequency.exponentialRampToValueAtTime(38,t+.36),i.gain.setValueAtTime(.32,t),i.gain.exponentialRampToValueAtTime(.001,t+.38),n.connect(i),i.connect(this.masterGain),n.start(t),n.stop(t+.4)}this.playMemeClip(e,3,1.12)}}playCrash(e=!1){if(!this.soundEnabled||(this.unlock(),!this.ctx||!this.masterGain))return;const t=this.ctx.currentTime,n=e?.52:.22,i=Math.floor(this.ctx.sampleRate*n),r=this.ctx.createBuffer(1,i,this.ctx.sampleRate),a=r.getChannelData(0);for(let d=0;d<i;d++)a[d]=(Math.random()*2-1)*Math.exp(-d/(i*.34));const o=this.ctx.createBufferSource();o.buffer=r;const l=this.ctx.createBiquadFilter();l.type="lowpass",l.frequency.value=e?950:1900;const c=this.ctx.createGain();c.gain.setValueAtTime(e?.45:.24,t),c.gain.exponentialRampToValueAtTime(.001,t+n),o.connect(l),l.connect(c),c.connect(this.masterGain),o.start(t);const h=this.ctx.createOscillator(),u=this.ctx.createGain();h.type="triangle",h.frequency.setValueAtTime(e?115:185,t),h.frequency.exponentialRampToValueAtTime(34,t+(e?.35:.14)),u.gain.setValueAtTime(e?.4:.22,t),u.gain.exponentialRampToValueAtTime(.001,t+(e?.38:.16)),h.connect(u),u.connect(this.masterGain),h.start(t),h.stop(t+(e?.4:.18))}playWhistle(){if(!this.soundEnabled||(this.unlock(),!this.ctx||!this.masterGain))return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createOscillator(),i=this.ctx.createGain(),r=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(2650,e),n.frequency.value=34,i.gain.value=180,n.connect(i),i.connect(t.frequency),r.gain.setValueAtTime(.001,e),r.gain.linearRampToValueAtTime(.18,e+.03),r.gain.setValueAtTime(.18,e+.38),r.gain.exponentialRampToValueAtTime(.001,e+.52),t.connect(r),r.connect(this.masterGain),t.start(e),n.start(e),t.stop(e+.55),n.stop(e+.55)}playCashChime(){if(!this.soundEnabled||(this.unlock(),!this.ctx||!this.masterGain))return;const e=this.ctx.currentTime;[880,1174.66,1567.98].forEach((t,n)=>{const i=this.ctx.createOscillator(),r=this.ctx.createGain();i.type="sine",i.frequency.setValueAtTime(t,e+n*.06),r.gain.setValueAtTime(.15,e+n*.06),r.gain.exponentialRampToValueAtTime(.001,e+n*.06+.18),i.connect(r),r.connect(this.masterGain),i.start(e+n*.06),i.stop(e+n*.06+.2)})}playNearMiss(){if(!this.soundEnabled||(this.unlock(),!this.ctx||!this.masterGain))return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(420,e),t.frequency.exponentialRampToValueAtTime(980,e+.14),n.gain.setValueAtTime(.12,e),n.gain.exponentialRampToValueAtTime(.001,e+.18),t.connect(n),n.connect(this.masterGain),t.start(e),t.stop(e+.19)}playChaosStart(){if(this.soundEnabled){if(this.unlock(),this.ctx&&this.masterGain){const e=this.ctx.currentTime;[330,440,554.37,659.25,880].forEach((t,n)=>{const i=this.ctx.createOscillator(),r=this.ctx.createGain();i.type="sawtooth",i.frequency.setValueAtTime(t,e+n*.05),r.gain.setValueAtTime(.12,e+n*.05),r.gain.exponentialRampToValueAtTime(.001,e+n*.05+.22),i.connect(r),r.connect(this.masterGain),i.start(e+n*.05),i.stop(e+n*.05+.24)})}this.playRandomMeme(["hila_dala","ustha_marum","ami_vala_na"],3,1.15)}}playDholaiSlap(){if(this.soundEnabled){if(this.unlock(),this.ctx&&this.masterGain){const e=this.ctx.currentTime;[0,.13,.26].forEach(t=>{const n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="square",n.frequency.setValueAtTime(300-t*240,e+t),n.frequency.exponentialRampToValueAtTime(58,e+t+.08),i.gain.setValueAtTime(.2,e+t),i.gain.exponentialRampToValueAtTime(.001,e+t+.09),n.connect(i),i.connect(this.masterGain),n.start(e+t),n.stop(e+t+.1)})}this.playRandomMeme(["bari_dilo_dholai","hasi_pay_marse"],4,1.15)}}}const Qa=new WeakMap;class qv extends Ni{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){const r=new ia(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,a=>{this.parse(a,t,i)},n,i)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,_t,n).catch(n)}decodeDracoFile(e,t,n,i,r=qt,a=()=>{}){const o={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:r};return this.decodeGeometry(e,o).then(t).catch(a)}decodeGeometry(e,t){const n=JSON.stringify(t);if(Qa.has(e)){const l=Qa.get(e);if(l.key===n)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i;const r=this.workerNextTaskID++,a=e.byteLength,o=this._getWorker(r,a).then(l=>(i=l,new Promise((c,h)=>{i._callbacks[r]={resolve:c,reject:h},i.postMessage({type:"decode",id:r,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return o.catch(()=>!0).then(()=>{i&&r&&this._releaseTask(i,r)}),Qa.set(e,{key:n,promise:o}),o}_createGeometry(e){const t=new Tt;e.index&&t.setIndex(new Ft(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const i=e.attributes[n],r=i.name,a=i.array,o=i.itemSize,l=new Ft(a,o);r==="color"&&(this._assignVertexColorSpace(l,i.vertexColorSpace),l.normalized=!(a instanceof Float32Array)),t.setAttribute(r,l)}return t}_assignVertexColorSpace(e,t){if(t!==_t)return;const n=new De;for(let i=0,r=e.count;i<r;i++)n.fromBufferAttribute(e,i),et.toWorkingColorSpace(n,_t),e.setXYZ(i,n.r,n.g,n.b)}_loadLibrary(e,t){const n=new ia(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((i,r)=>{n.load(e,i,void 0,r)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{const i=n[0];e||(this.decoderConfig.wasmBinary=n[1]);const r=Yv.toString(),a=["/* draco decoder */",i,"","/* worker */",r.substring(r.indexOf("{")+1,r.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([a]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(r){const a=r.data;switch(a.type){case"decode":i._callbacks[a.id].resolve(a);break;case"error":i._callbacks[a.id].reject(a);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+a.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,r){return i._taskLoad>r._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function Yv(){let s,e;onmessage=function(a){const o=a.data;switch(o.type){case"init":s=o.decoderConfig,e=new Promise(function(h){s.onModuleLoaded=function(u){h({draco:u})},DracoDecoderModule(s)});break;case"decode":const l=o.buffer,c=o.taskConfig;e.then(h=>{const u=h.draco,d=new u.Decoder;try{const f=t(u,d,new Int8Array(l),c),g=f.attributes.map(_=>_.array.buffer);f.index&&g.push(f.index.array.buffer),self.postMessage({type:"decode",id:o.id,geometry:f},g)}catch(f){console.error(f),self.postMessage({type:"error",id:o.id,error:f.message})}finally{u.destroy(d)}});break}};function t(a,o,l,c){const h=c.attributeIDs,u=c.attributeTypes;let d,f;const g=o.GetEncodedGeometryType(l);if(g===a.TRIANGULAR_MESH)d=new a.Mesh,f=o.DecodeArrayToMesh(l,l.byteLength,d);else if(g===a.POINT_CLOUD)d=new a.PointCloud,f=o.DecodeArrayToPointCloud(l,l.byteLength,d);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!f.ok()||d.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+f.error_msg());const _={index:null,attributes:[]};for(const m in h){const p=self[u[m]];let x,y;if(c.useUniqueIDs)y=h[m],x=o.GetAttributeByUniqueId(d,y);else{if(y=o.GetAttributeId(d,a[h[m]]),y===-1)continue;x=o.GetAttribute(d,y)}const v=i(a,o,d,m,p,x);m==="color"&&(v.vertexColorSpace=c.vertexColorSpace),_.attributes.push(v)}return g===a.TRIANGULAR_MESH&&(_.index=n(a,o,d)),a.destroy(d),_}function n(a,o,l){const h=l.num_faces()*3,u=h*4,d=a._malloc(u);o.GetTrianglesUInt32Array(l,u,d);const f=new Uint32Array(a.HEAPF32.buffer,d,h).slice();return a._free(d),{array:f,itemSize:1}}function i(a,o,l,c,h,u){const d=u.num_components(),g=l.num_points()*d,_=g*h.BYTES_PER_ELEMENT,m=r(a,h),p=a._malloc(_);o.GetAttributeDataArrayForAllPoints(l,u,m,_,p);const x=new h(a.HEAPF32.buffer,p,g).slice();return a._free(p),{name:c,array:x,itemSize:d}}function r(a,o){switch(o){case Float32Array:return a.DT_FLOAT32;case Int8Array:return a.DT_INT8;case Int16Array:return a.DT_INT16;case Int32Array:return a.DT_INT32;case Uint8Array:return a.DT_UINT8;case Uint16Array:return a.DT_UINT16;case Uint32Array:return a.DT_UINT32}}}function ph(s,e){if(e===Pd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Zo||e===Wh){let t=s.getIndex();if(t===null){const a=[],o=s.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===Zo)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class Zv extends Ni{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Qv(t)}),this.register(function(t){return new ex(t)}),this.register(function(t){return new cx(t)}),this.register(function(t){return new hx(t)}),this.register(function(t){return new ux(t)}),this.register(function(t){return new nx(t)}),this.register(function(t){return new ix(t)}),this.register(function(t){return new sx(t)}),this.register(function(t){return new rx(t)}),this.register(function(t){return new Jv(t)}),this.register(function(t){return new ax(t)}),this.register(function(t){return new tx(t)}),this.register(function(t){return new lx(t)}),this.register(function(t){return new ox(t)}),this.register(function(t){return new jv(t)}),this.register(function(t){return new dx(t)}),this.register(function(t){return new fx(t)})}load(e,t,n,i){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=js.extractUrlBase(e);a=js.resolveURL(c,this.path)}else a=js.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new ia(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===ku){try{a[Je.KHR_BINARY_GLTF]=new px(e)}catch(u){i&&i(u);return}r=JSON.parse(a[Je.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new Ax(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case Je.KHR_MATERIALS_UNLIT:a[u]=new Kv;break;case Je.KHR_DRACO_MESH_COMPRESSION:a[u]=new mx(r,this.dracoLoader);break;case Je.KHR_TEXTURE_TRANSFORM:a[u]=new gx;break;case Je.KHR_MESH_QUANTIZATION:a[u]=new _x;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function $v(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const Je={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class jv{constructor(e){this.parser=e,this.name=Je.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const h=new De(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],qt);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new bu(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Bp(h),c.distance=u;break;case"spot":c=new kp(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Xn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class Kv{constructor(){this.name=Je.KHR_MATERIALS_UNLIT}getMaterialType(){return Le}extendParams(e,t,n){const i=[];e.color=new De(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],qt),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,_t))}return Promise.all(i)}}class Jv{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class Qv{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:un}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ae(o,o)}return Promise.all(r)}}class ex{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:un}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class tx{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:un}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class nx{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:un}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new De(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],qt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,_t)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class ix{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:un}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class sx{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:un}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new De().setRGB(o[0],o[1],o[2],qt),Promise.all(r)}}class rx{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:un}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class ax{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:un}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new De().setRGB(o[0],o[1],o[2],qt),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,_t)),Promise.all(r)}}class ox{constructor(e){this.parser=e,this.name=Je.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:un}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}}class lx{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:un}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}}class cx{constructor(e){this.parser=e,this.name=Je.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class hx{constructor(e){this.parser=e,this.name=Je.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class ux{constructor(e){this.parser=e,this.name=Je.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class dx{constructor(e){this.name=Je.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}}class fx{constructor(e){this.name=Je.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==gn.TRIANGLES&&c.mode!==gn.TRIANGLE_STRIP&&c.mode!==gn.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(const g of u){const _=new Xe,m=new L,p=new fi,x=new L(1,1,1),y=new Uf(g.geometry,g.material,d);for(let v=0;v<d;v++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,v),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,v),l.SCALE&&x.fromBufferAttribute(l.SCALE,v),y.setMatrixAt(v,_.compose(m,p,x));for(const v in l)if(v==="_COLOR_0"){const I=l[v];y.instanceColor=new jo(I.array,I.itemSize,I.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&g.geometry.setAttribute(v,l[v]);vt.prototype.copy.call(y,g),this.parser.assignFinalMaterial(y),f.push(y)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const ku="glTF",Bs=12,mh={JSON:1313821514,BIN:5130562};class px{constructor(e){this.name=Je.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Bs),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==ku)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Bs,r=new DataView(e,Bs);let a=0;for(;a<i;){const o=r.getUint32(a,!0);a+=4;const l=r.getUint32(a,!0);if(a+=4,l===mh.JSON){const c=new Uint8Array(e,Bs+a,o);this.content=n.decode(c)}else if(l===mh.BIN){const c=Bs+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class mx{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Je.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const h in a){const u=rl[h]||h.toLowerCase();o[u]=a[h]}for(const h in e.attributes){const u=rl[h]||h.toLowerCase();if(a[h]!==void 0){const d=n.accessors[e.attributes[h]],f=cs[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(const g in f.attributes){const _=f.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}u(f)},o,c,qt,d)})})}}class gx{constructor(){this.name=Je.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class _x{constructor(){this.name=Je.KHR_MESH_QUANTIZATION}}class Ou extends cr{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,g=e*c,_=g-c,m=-2*f+3*d,p=f-d,x=1-m,y=p-d+u;for(let v=0;v!==o;v++){const I=a[_+v+o],C=a[_+v+l]*h,S=a[g+v+o],R=a[g+v]*h;r[v]=x*I+y*C+m*S+p*R}return r}}const vx=new fi;class xx extends Ou{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return vx.fromArray(r).normalize().toArray(r),r}}const gn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},cs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},gh={9728:Qt,9729:on,9984:Nh,9985:Xr,9986:Hs,9987:qn},_h={33071:St,33648:Jr,10497:ui},eo={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},rl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ai={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},yx={CUBICSPLINE:void 0,LINEAR:Qs,STEP:Js},to={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function bx(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new J({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:jn})),s.DefaultMaterial}function Mi(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Xn(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Mx(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;a.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;o.push(d)}if(r){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function Sx(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function wx(s){let e;const t=s.extensions&&s.extensions[Je.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+no(t.attributes):e=s.indices+":"+no(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+no(s.targets[n]);return e}function no(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function al(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Tx(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Ex=new Xe;class Ax{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new $v,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&a<98?this.textureLoader=new Dp(this.options.manager):this.textureLoader=new Hp(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ia(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return Mi(r,o,i),Xn(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,h]of a.children.entries())r(h,o.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Je.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,a){n.load(js.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=eo[i.type],o=cs[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new Ft(c,a,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],l=eo[i.type],c=cs[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,m;if(f&&f!==u){const p=Math.floor(d/f),x="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let y=t.cache.get(x);y||(_=new c(o,p*f,i.count*f/h),y=new iu(_,f/h),t.cache.add(x,y)),m=new tr(y,l,d%f/h,g)}else o===null?_=new c(i.count*l):_=new c(o,d,i.count*l),m=new Ft(_,l,g);if(i.sparse!==void 0){const p=eo.SCALAR,x=cs[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,I=new x(a[1],y,i.sparse.count*p),C=new c(a[2],v,i.sparse.count*l);o!==null&&(m=new Ft(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let S=0,R=I.length;S<R;S++){const T=I[S];if(m.setX(T,C[S*l]),l>=2&&m.setY(T,C[S*l+1]),l>=3&&m.setZ(T,C[S*l+2]),l>=4&&m.setW(T,C[S*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const i=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const d=(r.samplers||{})[a.sampler]||{};return h.magFilter=gh[d.magFilter]||on,h.minFilter=gh[d.minFilter]||qn,h.wrapS=_h[d.wrapS]||ui,h.wrapT=_h[d.wrapT]||ui,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Qt&&h.minFilter!==on,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const a=i.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const m=new Dt(_);m.needsUpdate=!0,d(m)}),t.load(js.resolveURL(u,r.path),g,void 0,f)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),Xn(u,a),u.userData.mimeType=a.mimeType||Tx(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[Je.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[Je.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=r.associations.get(a);a=r.extensions[Je.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new bl,Rn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new or,Rn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return J}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let a;const o={},l=r.extensions||{},c=[];if(l[Je.KHR_MATERIALS_UNLIT]){const u=i[Je.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,r,t))}else{const u=r.pbrMetallicRoughness||{};if(o.color=new De(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],qt),o.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,_t)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=It);const h=r.alphaMode||to.OPAQUE;if(h===to.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===to.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Le&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new ae(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==Le&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Le){const u=r.emissiveFactor;o.emissive=new De().setRGB(u[0],u[1],u[2],qt)}return r.emissiveTexture!==void 0&&a!==Le&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,_t)),Promise.all(c).then(function(){const u=new a(o);return r.name&&(u.name=r.name),Xn(u,r),t.associations.set(u,{materials:e}),r.extensions&&Mi(i,u,r),u})}createUniqueName(e){const t=ft.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[Je.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return vh(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],h=wx(c),u=i[h];if(u)a.push(u.promise);else{let d;c.extensions&&c.extensions[Je.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=vh(new Tt,c,t),i[h]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const h=a[l].material===void 0?bx(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,g=h.length;f<g;f++){const _=h[f],m=a[f];let p;const x=c[f];if(m.mode===gn.TRIANGLES||m.mode===gn.TRIANGLE_STRIP||m.mode===gn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new If(_,x):new A(_,x),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===gn.TRIANGLE_STRIP?p.geometry=ph(p.geometry,Wh):m.mode===gn.TRIANGLE_FAN&&(p.geometry=ph(p.geometry,Zo));else if(m.mode===gn.LINES)p=new Bf(_,x);else if(m.mode===gn.LINE_STRIP)p=new Ms(_,x);else if(m.mode===gn.LINE_LOOP)p=new Ff(_,x);else if(m.mode===gn.POINTS)p=new lu(_,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&Sx(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Xn(p,r),m.extensions&&Mi(i,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&Mi(i,u[0],r),u[0];const d=new Ce;r.extensions&&Mi(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Kt(zs.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Al(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Xn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),a=i,o=[],l=[];for(let c=0,h=a.length;c<h;c++){const u=a[c];if(u){o.push(u);const d=new Xe;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new xl(o,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const f=i.channels[u],g=i.samplers[f.sampler],_=f.target,m=_.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,x=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",x)),c.push(g),h.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],g=u[2],_=u[3],m=u[4],p=[];for(let x=0,y=d.length;x<y;x++){const v=d[x],I=f[x],C=g[x],S=_[x],R=m[x];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();const T=n._createAnimationTracks(v,I,C,S,R);if(T)for(let M=0;M<T.length;M++)p.push(T[M])}return new Ep(r,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,Ex)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(r.isBone===!0?h=new au:c.length>1?h=new Ce:c.length===1?h=c[0]:h=new vt,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=a),Xn(h,r),r.extensions&&Mi(n,h,r),r.matrix!==void 0){const u=new Xe;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new Ce;n.name&&(r.name=i.createUniqueName(n.name)),Xn(r,n),n.extensions&&Mi(t,r,n);const a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);const c=h=>{const u=new Map;for(const[d,f]of i.associations)(d instanceof Rn||d instanceof Dt)&&u.set(d,f);return h.traverse(d=>{const f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){const a=[],o=e.name?e.name:e.uuid,l=[];ai[r.path]===ai.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(o);let c;switch(ai[r.path]){case ai.weights:c=_s;break;case ai.rotation:c=vs;break;case ai.position:case ai.scale:c=xs;break;default:switch(n.itemSize){case 1:c=_s;break;case 2:case 3:default:c=xs;break}break}const h=i.interpolation!==void 0?yx[i.interpolation]:Qs,u=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const g=new c(l[d]+"."+ai[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=al(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof vs?xx:Ou;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Rx(s,e,t){const n=e.attributes,i=new ln;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new L(l[0],l[1],l[2]),new L(c[0],c[1],c[2])),o.normalized){const h=al(cs[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new L,l=new L;for(let c=0,h=r.length;c<h;c++){const u=r[c];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const _=al(cs[d.componentType]);l.multiplyScalar(_)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;const a=new Dn;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function vh(s,e,t){const n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){s.setAttribute(o,l)})}for(const a in n){const o=rl[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){const a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return et.workingColorSpace!==qt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${et.workingColorSpace}" not supported.`),Xn(s,e),Rx(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Mx(s,e.targets,t):s})}const Cx={supercar:{url:"./models/supercar_ferrari.glb",targetLength:4.6,yawOffset:0,autoAlignLongZ:!0},superbike:{url:"./models/moto_superbike.glb",targetLength:2.25,yawOffset:Math.PI/2,autoAlignLongZ:!1},moto_street:{url:"./models/moto_street.glb",targetLength:2.15,yawOffset:Math.PI,autoAlignLongZ:!1},pickup_green:{url:"./models/k_pickup_green.glb",targetLength:4.35,yawOffset:Math.PI,autoAlignLongZ:!1},pickup_red:{url:"./models/k_pickup_red.glb",targetLength:4.3,yawOffset:Math.PI,autoAlignLongZ:!1},pickup_yellow:{url:"./models/k_pickup_yellow.glb",targetLength:4.35,yawOffset:Math.PI,autoAlignLongZ:!1},pickup_purple:{url:"./models/k_pickup_purple.glb",targetLength:4.2,yawOffset:Math.PI,autoAlignLongZ:!1},delivery_van:{url:"./models/van_milk_truck.glb",targetLength:5.1,yawOffset:Math.PI/2,autoAlignLongZ:!1},k_sedan:{url:"./models/k_sedan.glb",targetLength:4.3,yawOffset:Math.PI,autoAlignLongZ:!1},k_sedan_sports:{url:"./models/k_sedan_sports.glb",targetLength:4.4,yawOffset:Math.PI,autoAlignLongZ:!1},k_hatchback:{url:"./models/k_hatchback.glb",targetLength:3.9,yawOffset:Math.PI,autoAlignLongZ:!1},k_suv:{url:"./models/k_suv.glb",targetLength:4.6,yawOffset:Math.PI,autoAlignLongZ:!1},k_suv_luxury:{url:"./models/k_suv_luxury.glb",targetLength:4.85,yawOffset:Math.PI,autoAlignLongZ:!1},k_taxi:{url:"./models/k_taxi.glb",targetLength:4.35,yawOffset:Math.PI,autoAlignLongZ:!1},k_police:{url:"./models/k_police.glb",targetLength:4.45,yawOffset:Math.PI,autoAlignLongZ:!1},k_ambulance:{url:"./models/k_ambulance.glb",targetLength:5.2,yawOffset:Math.PI,autoAlignLongZ:!1},k_van:{url:"./models/k_van.glb",targetLength:4.8,yawOffset:Math.PI,autoAlignLongZ:!1},k_delivery:{url:"./models/k_delivery.glb",targetLength:5.4,yawOffset:Math.PI,autoAlignLongZ:!1},k_delivery_flat:{url:"./models/k_delivery_flat.glb",targetLength:5.1,yawOffset:Math.PI,autoAlignLongZ:!1},k_truck:{url:"./models/k_truck.glb",targetLength:7.4,yawOffset:Math.PI,autoAlignLongZ:!1},k_truck_flat:{url:"./models/k_truck_flat.glb",targetLength:7.2,yawOffset:Math.PI,autoAlignLongZ:!1},k_garbage_truck:{url:"./models/k_garbage_truck.glb",targetLength:7.4,yawOffset:Math.PI,autoAlignLongZ:!1},k_tractor:{url:"./models/k_tractor.glb",targetLength:4.1,yawOffset:Math.PI,autoAlignLongZ:!1},k_tractor_shovel:{url:"./models/k_tractor_shovel.glb",targetLength:4.5,yawOffset:Math.PI,autoAlignLongZ:!1},k_race:{url:"./models/k_race.glb",targetLength:4.55,yawOffset:Math.PI,autoAlignLongZ:!1},k_future_car:{url:"./models/k_future_car.glb",targetLength:4.7,yawOffset:Math.PI,autoAlignLongZ:!1},k_tree_large:{url:"./models/k_tree_large.glb",targetLength:6.2,yawOffset:0,autoAlignLongZ:!1,isVertical:!0},k_tree_small:{url:"./models/k_tree_small.glb",targetLength:4.5,yawOffset:0,autoAlignLongZ:!1,isVertical:!0},tree_real:{url:"./models/tree_realistic.glb",targetLength:7,yawOffset:0,autoAlignLongZ:!1,isVertical:!0}};class Px{constructor(){B(this,"loader");B(this,"draco");B(this,"cache",new Map);B(this,"inflight",new Map);B(this,"bgStarted",!1);this.draco=new qv,this.draco.setDecoderPath("./draco/"),this.loader=new Zv,this.loader.setDRACOLoader(this.draco)}loadKey(e,t){if(this.cache.has(e))return t?.(e),Promise.resolve();const n=this.inflight.get(e);if(n)return n;const i=Cx[e],r=this.loader.loadAsync(i.url).then(a=>{const o=this.normalizeModel(a.scene,i);this.cache.set(e,o),t?.(e)}).catch(()=>{}).finally(()=>{this.inflight.delete(e)});return this.inflight.set(e,r),r}startBatchedLoad(e){if(this.bgStarted)return;this.bgStarted=!0;const t=["tree_real","k_sedan","k_tractor","moto_street","k_suv","k_van","k_taxi","k_hatchback","k_truck","k_delivery","k_police","k_ambulance","k_suv_luxury","k_sedan_sports","k_garbage_truck","k_tractor_shovel","k_future_car","k_truck_flat","k_delivery_flat","k_race","k_tree_large","pickup_green","pickup_red","pickup_yellow","pickup_purple","delivery_van","superbike","supercar"];let n=0;const i=()=>{if(n>=t.length)return;const r=t.slice(n,n+3);n+=3,Promise.all(r.map(a=>this.loadKey(a,e))).finally(()=>{window.setTimeout(i,160)})};window.setTimeout(i,120)}normalizeModel(e,t){const n=new Ce,i=new Ce;i.add(e),i.updateMatrixWorld(!0);let r=new ln().setFromObject(i),a=r.getSize(new L);t.autoAlignLongZ&&a.x>a.z*1.15?i.rotation.y=Math.PI/2:t.yawOffset!==0&&(i.rotation.y=t.yawOffset),i.updateMatrixWorld(!0),r=new ln().setFromObject(i),a=r.getSize(new L);const o=t.isVertical?Math.max(a.y,.01):Math.max(a.z,a.x,.01),l=t.targetLength/o;i.scale.setScalar(l),i.updateMatrixWorld(!0),r=new ln().setFromObject(i);const c=r.getCenter(new L);return i.position.set(-c.x,-r.min.y,-c.z),n.add(i),n.traverse(h=>{if(h.isMesh){const u=h;u.castShadow=!0,u.receiveShadow=!0;const d=Array.isArray(u.material)?u.material:[u.material];for(const f of d)f&&"envMapIntensity"in f&&(f.envMapIntensity=1.4)}}),n}has(e){return this.cache.has(e)}clone(e,t){const n=this.cache.get(e);if(!n)return null;const i=n.clone(!0);return t&&(i.traverse(r=>{if(r.isMesh){const a=r;Array.isArray(a.material)?a.material=a.material.map(o=>o.clone()):a.material&&(a.material=a.material.clone())}}),t(i)),i}dispose(){this.draco.dispose()}}const hn=new de(.32,.32,.22,18);hn.rotateZ(Math.PI/2);const di=new de(.39,.39,.27,18);di.rotateZ(Math.PI/2);const ha=new de(.58,.58,.36,18);ha.rotateZ(Math.PI/2);const sa=new J({color:1381656,roughness:.9,metalness:.08}),Lx=new J({color:15000807,roughness:.2,metalness:.9}),kn=new un({color:725794,roughness:.06,metalness:.15,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:.84,envMapIntensity:1.8}),Ot=new J({color:16053493,roughness:.12,metalness:.96,envMapIntensity:1.6}),nn=new J({color:2236967,roughness:.48,metalness:.72});function wt(s,e=15000807){const t=new A(s,sa),n=e===15000807?Lx:new J({color:e,roughness:.22,metalness:.88}),i=new A(new de(.19,.19,.28,12).rotateZ(Math.PI/2),n);return t.add(i),t.castShadow=!0,t}function Lt(s,e,t,n){const i=new A(new Ht(t,n),new Le({map:e.contactShadow,transparent:!0,depthWrite:!1}));i.rotation.x=-Math.PI/2,i.position.y=.03,s.add(i)}function Zn(s,e,t,n,i,r,a){const o=new su({map:e.glowHalo,color:t,transparent:!0,opacity:.72,blending:co,depthWrite:!1}),l=new Pf(o);l.scale.set(n,n,1),l.position.set(i,r,a),s.add(l)}function Bt(s,e,t=.08){const n=new mu;n.moveTo(s[0][0],s[0][1]);for(let r=1;r<s.length;r++)n.lineTo(s[r][0],s[r][1]);n.closePath();const i=new Tl(n,{depth:Math.max(.05,e-t*2),bevelEnabled:!0,bevelSegments:3,steps:1,bevelSize:t,bevelThickness:t});return i.center(),i.rotateY(Math.PI/2),i.computeVertexNormals(),i}function Et(s,e=.65,t=.2){return new un({color:s,metalness:e,roughness:t,clearcoat:1,clearcoatRoughness:.07,envMapIntensity:1.55})}function Ix(s,e,t,n=Iu()){let i;switch(s){case"deshi_tesla":i=Dx(e,n);break;case"dhaka_cng":i=Nx(e);break;case"bd_tractor":i=Ux(e,t);break;case"street_cruiser":i=kx(e,t);break;case"ninja_h2r":i=Ox(e,t);break;case"dhaka_leguna":i=Bx(e,t);break;case"cybertruck":i=Fx(e);break;case"lamborghini":i=Hx(e,t);break;case"flying_car":i=zx(e,t);break}if(n.wheelNeon==="neon_cyan"||n.wheelNeon==="neon_rgb"){const a=n.wheelNeon==="neon_cyan"?2282478:16007006,o=new A(new lr(.95,1.48,28).rotateX(-Math.PI/2),new Le({color:a,transparent:!0,opacity:.65,side:It}));o.position.y=.06,i.root.add(o)}const r=i.roofHookPoint.y;if(n.topAccessory==="sabbir_sign"){const a=new A(new $(1.18,.34,.14),new Le({map:e.streetSigns[0]}));a.position.set(0,r+.18,.15),i.bodyGroup.add(a)}else if(n.topAccessory==="bd_flag"){const a=ys(e,1.35);a.scale.setScalar(.55),a.position.set(.55,r-.1,.72),i.bodyGroup.add(a)}else if(n.topAccessory==="turbo_wing"){const a=Et(1120295,.78,.18),o=new A(new $(1.75,.08,.36),a);o.position.set(0,r+.22,1.05),o.rotation.x=.15;const l=new A(new $(.06,.28,.18),a);l.position.set(-.55,r+.08,1.05);const c=l.clone();c.position.x=.55,i.bodyGroup.add(o,l,c)}return i}function Qn(s=1.9){const e=new A(new Jn(s,.14,10,32).rotateX(Math.PI/2),new Le({color:16436245,transparent:!0,opacity:.9}));return e.position.set(0,.15,0),e.visible=!1,e}function Dx(s,e){const t=new Ce,n=new Ce;t.add(n),Lt(t,s,2.25,3.35);const i=Et(e.bodyColor||292951,.42,.24),r=Et(16436245,.34,.24),a=e.wheelNeon==="gold_spoke"?16436245:e.wheelNeon==="neon_cyan"?2282478:15000807,o=Bt([[-1.32,0],[1.36,0],[1.36,.22],[-1.16,.24]],1.54,.04),l=new A(o,nn);l.position.set(0,.42,.04),l.castShadow=!0,n.add(l);const c=Bt([[-.58,0],[.44,0],[.48,.72],[.18,1.02],[-.24,.9],[-.52,.56],[-.6,.2]],1.32,.09),h=new A(c,i);h.position.set(0,.88,-.92),h.castShadow=!0,n.add(h);const u=new A(new de(.045,.045,1.38,10).rotateZ(Math.PI/2),Ot);u.position.set(0,.52,-1.48),n.add(u);const d=new A(new de(.18,.16,.14,16).rotateX(Math.PI/2),Ot);d.position.set(0,.9,-1.44);const f=new A(new de(.14,.14,.16,16).rotateX(Math.PI/2),new Le({color:16776171}));f.position.set(0,.9,-1.46),n.add(d,f),Zn(n,s,16707722,.95,0,.9,-1.55);const g=Bt([[-.06,0],[.06,0],[.24,.72],[.12,.72]],1.34,.03),_=new A(g,r);_.position.set(0,1.62,-.78);const m=new A(new $(1.14,.62,.06),kn);m.position.set(0,1.62,-.78),m.rotation.x=.24,n.add(_,m);const p=Bt([[-.78,0],[.82,0],[.84,.74],[-.56,.68],[-.78,.44]],.16,.04),x=new A(p,i);x.position.set(-.74,.86,.56),x.castShadow=!0;const y=x.clone();y.position.x=.74,n.add(x,y);const v=s.panelTextures[e.panelStyle]||s.rickshawArt,I=new J({map:v,roughness:.25,metalness:.2,envMapIntensity:1.2}),C=new A(new $(1.54,1.06,.12),[i,i,r,i,I,i]);C.position.set(0,1.08,1.32),C.castShadow=!0,n.add(C);const S=new A(new $(.68,.22,.04),new Le({map:s.plateAuto}));S.position.set(0,.44,1.4),n.add(S);const R=Il(s,1920728,!0);R.position.set(0,.82,-.32),n.add(R);const T=new de(.032,.032,1.12,8);for(const[it,Z,le]of[[-.72,1.5,-.68],[.72,1.5,-.68],[-.72,1.54,1.24],[.72,1.54,1.24]]){const Se=new A(T,Ot);Se.position.set(it,Z,le),n.add(Se)}const M=s.roofTextures[e.roofStyle]||s.rickshawRoof,D=new A(new de(.94,.94,2.42,18,1,!1,0,Math.PI).rotateZ(Math.PI/2).rotateY(Math.PI/2),new J({map:M,roughness:.36,metalness:.14,side:It}));D.scale.set(.95,.34,1),D.position.set(0,2.02,.24),D.castShadow=!0;const z=new A(new $(1.78,.11,2.48),r);z.position.set(0,1.98,.24),n.add(D,z);const k=new J({color:2278750,emissive:2278750,emissiveIntensity:1.1,roughness:.25}),G=new A(new $(.88,.2,.42),k);G.position.set(0,.42,.94),n.add(G);const Y=new Le({color:16720418});for(const it of[-.56,.56]){const Z=new A(new de(.08,.08,.08,12).rotateX(Math.PI/2),Y);Z.position.set(it,.62,1.38),n.add(Z)}const W=new Ce;W.position.set(0,.34,-1.2);const Q=wt(hn,a);W.add(Q);const X=new A(new Jn(.36,.06,8,14,Math.PI).rotateY(Math.PI/2),r);X.position.set(0,.06,0);const ue=new A(new de(.028,.028,.74,8).rotateZ(Math.PI/2),Ot);ue.position.set(0,.94,.26),W.add(X,ue),n.add(W);const me=wt(hn,a);me.position.set(-.78,.34,.9);const be=wt(hn,a);be.position.set(.78,.34,.9),n.add(me,be);const ze=Qn(1.85);return t.add(ze),{root:t,bodyGroup:n,frontFork:W,wheels:[Q,me,be],batteryGlowMat:k,tailLightMat:Y,chaosAura:ze,hoverJets:[],driverHead:R.userData.head||null,roofHookPoint:new L(0,2.24,.24),baseHoverY:0}}function Nx(s){const e=new Ce,t=Fu(s);e.add(t);const n=new Le({color:16720418});for(const r of[-.52,.52]){const a=new A(new de(.09,.09,.08,12).rotateX(Math.PI/2),n);a.position.set(r,.66,1.44),t.add(a)}const i=Qn(1.8);return e.add(i),{root:e,bodyGroup:t,frontFork:null,wheels:[],batteryGlowMat:null,tailLightMat:n,chaosAura:i,hoverJets:[],driverHead:null,roofHookPoint:new L(0,2,.2),baseHoverY:0}}function Ux(s,e){const t=new Ce,n=new Ce;t.add(n),Lt(t,s,2.65,4.35);const i=e.clone("k_tractor");if(i)n.add(i);else{const c=Et(14427686,.45,.26),h=Bt([[-1.85,.45],[.4,.45],[.4,1.38],[-1.6,1.34],[-1.85,1.1]],1.15,.08),u=new A(h,c);u.position.set(0,.95,-.45),u.castShadow=!0;const d=wt(ha,16436245);d.scale.setScalar(1.42),d.position.set(-.98,.82,.85);const f=d.clone();f.position.x=.98;const g=wt(di,16436245);g.position.set(-.82,.42,-1.28);const _=g.clone();_.position.x=.82,n.add(u,d,f,g,_)}const r=new A(new de(.06,.07,1.45,10),Ot);r.position.set(.55,1.65,-.78),n.add(r);const a=Il(s,1409085,!0);a.position.set(0,1.15,.45),n.add(a);const o=new Le({color:16720418});for(const c of[-.72,.72]){const h=new A(new de(.1,.1,.08,10).rotateX(Math.PI/2),o);h.position.set(c,1.18,1.72),n.add(h)}const l=Qn(2.35);return t.add(l),{root:t,bodyGroup:n,frontFork:null,wheels:[],batteryGlowMat:null,tailLightMat:o,chaosAura:l,hoverJets:[],driverHead:a.userData.head||null,roofHookPoint:new L(0,2.35,.25),baseHoverY:0}}function kx(s,e){const t=new Ce,n=new Ce;t.add(n),Lt(t,s,1.15,2.45);const i=e.clone("moto_street");i?n.add(i):n.add(Bu(16347926,1579035,!1));const r=ua(1976635,16347926);r.position.set(0,.78,.16),n.add(r);const a=new Le({color:16720418}),o=new A(new $(.22,.08,.08),a);o.position.set(0,.88,1.04),n.add(o);const l=Qn(1.55);return t.add(l),{root:t,bodyGroup:n,frontFork:null,wheels:[],batteryGlowMat:null,tailLightMat:a,chaosAura:l,hoverJets:[],driverHead:r.userData.head||null,roofHookPoint:new L(0,1.65,.1),baseHoverY:0}}function Ox(s,e){const t=new Ce,n=new Ce;t.add(n),Lt(t,s,1.2,2.6);const i=e.clone("superbike",u=>{const d=Et(1184791,.88,.14),f=new J({color:2278750,emissive:1483594,emissiveIntensity:.45,metalness:.72,roughness:.22});u.traverse(g=>{if(g.isMesh){const _=g,m=_.name.toLowerCase();m.includes("frame")||m.includes("hub")||m.includes("eixo")?_.material=f:m.includes("break")||m.includes("disc")||m.includes("exhaust")?_.material=Ot:m.includes("tire")||m.includes("wheel")||m.includes("seat")?_.material=sa:_.material=d}})});i?n.add(i):n.add(Bu(1118998,2278750,!0));const r=Et(988970,.7,.2),a=new Le({color:4906624});for(const u of[-.36,.36]){const d=new A(new $(.32,.05,.24),r);d.position.set(u,.86,-.78),d.rotation.z=u>0?.35:-.35,d.rotation.y=u>0?-.25:.25,n.add(d);const f=new A(new $(.14,.06,.08),a);f.position.set(u*.42,.92,-1.04),n.add(f)}const o=ua(1120295,2278750);o.position.set(0,.84,.12),o.rotation.x=-.32,n.add(o);const l=new Le({color:16719426}),c=new A(new $(.24,.07,.08),l);c.position.set(0,.98,1.06),n.add(c);const h=Qn(1.65);return t.add(h),{root:t,bodyGroup:n,frontFork:null,wheels:[],batteryGlowMat:null,tailLightMat:l,chaosAura:h,hoverJets:[],driverHead:o.userData.head||null,roofHookPoint:new L(0,1.55,.05),baseHoverY:0}}function Bx(s,e){const t=new Ce,n=new Ce;t.add(n),Lt(t,s,2.35,4.75);const i=Et(165063,.48,.24),r=e.clone("k_van",l=>{l.traverse(c=>{if(c.isMesh){const h=c;(h.material?.name||"").toLowerCase().includes("paint")&&(h.material=i)}})});if(r){n.add(r);const l=new A(new $(1.56,.14,2.8),Ot);l.position.set(0,2.08,.35),n.add(l)}else n.add(Ws(s));const a=new Le({color:16720418});for(const l of[-.68,.68]){const c=new A(new $(.24,.18,.08),a);c.position.set(l,.85,2.36),n.add(c)}const o=Qn(2.35);return t.add(o),{root:t,bodyGroup:n,frontFork:null,wheels:[],batteryGlowMat:null,tailLightMat:a,chaosAura:o,hoverJets:[],driverHead:null,roofHookPoint:new L(0,2.2,.3),baseHoverY:0}}function Fx(s){const e=new Ce,t=new Ce;e.add(t),Lt(e,s,2.55,5.2);const n=new un({color:13949150,metalness:.94,roughness:.19,clearcoat:.55,clearcoatRoughness:.18,envMapIntensity:1.75}),i=Bt([[-2.45,0],[2.4,0],[2.45,.85],[.05,1.48],[-2.38,.64]],2.04,.04),r=new A(i,n);r.position.set(0,1.15,0),r.castShadow=!0,r.receiveShadow=!0,t.add(r);const a=Bt([[-1.72,0],[1.82,.12],[.05,.68]],1.86,.02),o=new A(a,kn);o.position.set(0,1.54,.05),t.add(o);const l=new A(new $(2.14,.34,4.92),nn);l.position.set(0,.5,0),t.add(l);const c=new A(new $(1.98,.09,.1),new Le({color:16777215}));c.position.set(0,1.06,-2.44);const h=new Le({color:16719390}),u=new A(new $(1.98,.1,.1),h);u.position.set(0,1.24,2.44),t.add(c,u);const d=[];for(const[g,_]of[[-1.05,-1.52],[1.05,-1.52],[-1.05,1.52],[1.05,1.52]]){const m=wt(di,2565930);m.scale.set(1.22,1.22,1.22),m.position.set(g,.48,_),t.add(m),d.push(m)}const f=Qn(2.65);return e.add(f),{root:e,bodyGroup:t,frontFork:null,wheels:d,batteryGlowMat:null,tailLightMat:h,chaosAura:f,hoverJets:[],driverHead:null,roofHookPoint:new L(0,1.95,0),baseHoverY:0}}function Hx(s,e){const t=new Ce,n=new Ce;t.add(n),Lt(t,s,2.55,5);const i=Et(8702998,.72,.15),r=e.clone("supercar",g=>{g.traverse(_=>{if(_.isMesh){const m=_,p=(m.name||"").toLowerCase(),x=(m.material?.name||"").toLowerCase();(p==="body"||x.includes("body")||x.includes("paint")||x.includes("red"))&&!x.includes("leather")&&!x.includes("tail")&&(m.material=i)}})});if(r)n.add(r);else{const g=Bt([[-2.25,0],[2.25,0],[2.2,.72],[.85,.94],[-.35,.96],[-1.35,.52],[-2.25,.34]],2.02,.06),_=new A(g,i);_.position.set(0,.76,0),_.castShadow=!0,n.add(_)}const a=Et(1118999,.75,.18),o=new A(new $(2.06,.07,.42),a);o.position.set(0,1.18,1.98),o.rotation.x=.12,o.castShadow=!0;const l=new A(new $(.06,.34,.24),a);l.position.set(-.62,1,1.95);const c=l.clone();c.position.x=.62;const h=new A(new $(.05,.24,.48),i);h.position.set(-1.04,1.16,1.98);const u=h.clone();u.position.x=1.04,n.add(o,l,c,h,u);const d=new Le({color:16716066});for(const g of[-.68,.68]){const _=new A(new $(.46,.08,.06),d);_.position.set(g,.74,2.26),n.add(_)}const f=Qn(2.55);return t.add(f),{root:t,bodyGroup:n,frontFork:null,wheels:[],batteryGlowMat:null,tailLightMat:d,chaosAura:f,hoverJets:[],driverHead:null,roofHookPoint:new L(0,1.25,0),baseHoverY:0}}function zx(s,e){const t=new Ce,n=new Ce;t.add(n),Lt(t,s,3,5.1);const i=Et(15857145,.65,.12),r=Et(988970,.85,.16),a=new Le({color:2282478}),o=e.clone("k_future_car",u=>{u.traverse(d=>{if(d.isMesh){const f=d;(f.material?.name||"").toLowerCase().includes("paint")&&(f.material=i)}})});if(o)n.add(o);else{const u=Bt([[-2.35,.25],[-1.1,0],[1.8,.02],[2.3,.56],[1.1,.96],[-.55,1.02],[-1.75,.54]],1.95,.1),d=new A(u,i);d.position.set(0,.62,0),d.castShadow=!0,n.add(d)}const l=[];for(const u of[-1.25,1.25]){const d=new A(new $(.85,.09,1.45),r);d.position.set(u,.56,.25),d.rotation.z=u>0?.18:-.18;const f=new A(new $(.86,.04,.08),a);f.position.set(u,.58,-.46),n.add(d,f);for(const g of[-1.05,1.15]){const _=new A(new de(.32,.24,.2,16),r);_.position.set(u*.92,.22,g);const m=new A(new Jn(.26,.06,8,20).rotateX(Math.PI/2),a);m.position.set(u*.92,.08,g),n.add(_,m),l.push(m)}}const c=new Le({color:3718648});for(const u of[-.52,.52]){const d=new A(new de(.2,.24,.28,14).rotateX(Math.PI/2),c);d.position.set(u,.62,2.3),n.add(d),l.push(d),Zn(n,s,2282478,1.15,u,.62,2.48)}Zn(n,s,3718648,1.4,0,.05,0);const h=Qn(2.7);return t.add(h),{root:t,bodyGroup:n,frontFork:null,wheels:[],batteryGlowMat:null,tailLightMat:c,chaosAura:h,hoverJets:l,driverHead:null,roofHookPoint:new L(0,1.55,0),baseHoverY:1.05}}function Ct(s,e,t,n,i){const r=new Ce,a=s==="moto_street"||s==="superbike",o=s==="k_truck"||s==="k_truck_flat"||s==="k_garbage_truck";Lt(r,e,a?1.1:o?3.1:2.35,a?2.3:o?7.8:4.65);const c=i??{k_sedan:1981066,k_sedan_sports:12131356,k_hatchback:1013358,k_suv:1579035,k_suv_luxury:1976635,k_taxi:15381256,k_van:165063,k_delivery:1409085,k_delivery_flat:12730636,k_truck:10033947,k_truck_flat:1920728,k_garbage_truck:1467700,k_tractor:14427686,k_tractor_shovel:14251782,k_race:15357964,delivery_van:1013358}[s],h=d=>{const f=c!==void 0?Et(c,.62,.2):null;d.traverse(g=>{if(g.isMesh){const _=g,m=(_.name||"").toLowerCase(),p=(_.material?.name||"").toLowerCase();if(s==="superbike"&&f)_.material=m.includes("tire")||m.includes("wheel")||m.includes("seat")?sa:f;else if(p.includes("window")||p.includes("glass"))_.material=kn;else if(p.includes("tire")||p.includes("rubber")||m.includes("wheel"))!p.includes("rim")&&!p.includes("metal")&&(_.material=sa);else if(f&&(p.includes("paint")||p.includes("body")||p.includes("main")))_.material=f;else if(_.material&&"color"in _.material&&s!=="k_ambulance"&&s!=="k_police"){const x=_.material;x.color&&x.color.r>.85&&x.color.g>.85&&x.color.b>.85&&f&&(_.material=f)}}})},u=t.clone(s,h);if(u){if(r.add(u),a){const d=ua(1976635,i??15680580);d.position.set(0,.78,.14),r.add(d),Zn(r,e,16776171,.85,0,.88,-1.08)}else{u.updateMatrixWorld(!0);const d=new ln().setFromObject(u),f=d.getSize(new L),g=Math.max(.55,f.x*.36),_=d.min.z-.03,m=d.max.z+.03,p=Math.max(.58,d.min.y+f.y*.4),x=new Le({color:16776171}),y=new Le({color:16719394});for(const C of[-g,g]){const S=new A(new $(.28,.15,.08),x);S.position.set(C,p,_),Zn(r,e,16774084,1.05,C,p,_-.12);const R=new A(new $(.32,.14,.08),y);R.position.set(C,p+.04,m),r.add(S,R)}const v=new A(new $(g*1.15,.18,.06),nn);v.position.set(0,p-.04,_-.01);const I=new A(new $(.54,.17,.04),new Le({map:e.plateCar}));if(I.position.set(0,p-.12,m+.02),r.add(v,I),s==="k_police"||s==="k_ambulance"){const C=new A(new $(.42,.16,.22),new Le({color:16720418}));C.position.set(-.24,d.max.y+.08,-.15);const S=new A(new $(.42,.16,.22),new Le({color:3718648}));S.position.set(.24,d.max.y+.08,-.15),Zn(r,e,15680580,1.1,-.24,d.max.y+.12,-.15),Zn(r,e,3718648,1.1,.24,d.max.y+.12,-.15),r.add(C,S)}}return r}return n()}function Fs(s,e){const t=new Ce;Lt(t,e,2.45,4.75);const n=Et(s,.62,.18),i=Bt([[-2.12,0],[2.12,0],[2.1,.62],[1.38,.74],[.88,1.18],[-.55,1.2],[-1.18,.72],[-2.08,.56]],1.86,.08),r=new A(i,n);r.position.set(0,.96,0),r.castShadow=!0,r.receiveShadow=!0,t.add(r);const a=new A(new $(1.66,.42,1.72),kn);a.position.set(0,1.28,.14),t.add(a);const o=new Le({color:16776171}),l=new Le({color:15680580});for(const h of[-.66,.66]){const u=new A(new $(.36,.15,.08),o);u.position.set(h,.74,-2.14);const d=new A(new $(.4,.15,.08),l);d.position.set(h,.76,2.14),t.add(u,d)}const c=new A(new $(.56,.18,.04),new Le({map:e.plateCar}));c.position.set(0,.56,2.16),t.add(c);for(const[h,u]of[[-.93,-1.28],[.93,-1.28],[-.93,1.28],[.93,1.28]]){const d=wt(di);d.position.set(h,.39,u),t.add(d)}return t}function Si(s,e){const t=new Ce;Lt(t,e,2.6,5.1);const n=Et(s,.65,.2),i=Bt([[-2.25,0],[2.25,0],[2.2,1.48],[-.78,1.5],[-1.32,.88],[-2.22,.76]],2.02,.09),r=new A(i,n);r.position.set(0,1.18,0),r.castShadow=!0,t.add(r);const a=new A(new $(1.88,.54,2.9),kn);a.position.set(0,1.54,.5),t.add(a);const o=wt(di,1579035);o.rotation.y=Math.PI/2,o.position.set(0,1.05,2.34),t.add(o);const l=new Le({color:16776171}),c=new Le({color:15680580});for(const h of[-.74,.74]){const u=new A(new $(.4,.2,.08),l);u.position.set(h,.94,-2.28);const d=new A(new $(.28,.36,.08),c);d.position.set(h,1.05,2.28),t.add(u,d)}for(const[h,u]of[[-1.02,-1.42],[1.02,-1.42],[-1.02,1.42],[1.02,1.42]]){const d=wt(di);d.scale.setScalar(1.16),d.position.set(h,.45,u),t.add(d)}return t}function Ws(s){const e=new Ce;Lt(e,s,2.45,5.2);const t=Et(14870768,.52,.22),n=Bt([[-2.35,0],[2.35,0],[2.32,1.62],[-1.55,1.62],[-2.18,.88],[-2.35,.56]],1.9,.08),i=new A(n,t);i.position.set(0,1.18,0),i.castShadow=!0,e.add(i);const r=new A(new $(1.94,.56,3.6),kn);r.position.set(0,1.54,.2),e.add(r);const a=new Le({color:16776171}),o=new Le({color:15680580});for(const l of[-.68,.68]){const c=new A(new $(.36,.18,.08),a);c.position.set(l,.78,-2.38);const h=new A(new $(.24,.42,.08),o);h.position.set(l,.96,2.38),e.add(c,h)}for(const[l,c]of[[-.95,-1.45],[.95,-1.45],[-.95,1.45],[.95,1.45]]){const h=wt(di);h.position.set(l,.4,c),e.add(h)}return e}function io(s){const e=new Ce;Lt(e,s,1,2.05);const t=Et(959977,.45,.22),n=new J({color:14362487,roughness:.4}),i=Bt([[-.86,.18],[.74,.18],[.86,.68],[.14,.72],[-.32,.36],[-.58,.92],[-.84,.88]],.5,.05),r=new A(i,t);r.position.set(0,.62,0),r.castShadow=!0;const a=new A(new $(.56,.54,.54),n);a.position.set(0,1.18,.72),a.castShadow=!0;const o=ua(14362487,16317180);o.position.set(0,.76,.02);const l=wt(hn);l.scale.setScalar(.82),l.position.set(0,.27,-.7);const c=l.clone();return c.position.z=.66,e.add(r,a,o,l,c),e}function Bu(s,e,t){const n=new Ce,i=Et(s,.78,.16),r=new J({color:e,metalness:.7,roughness:.25}),a=Bt([[-.95,.35],[.85,.48],[.4,.84],[-.45,.88],[-.95,.65]],.44,.04),o=new A(a,i);o.position.set(0,.72,0),o.castShadow=!0;const l=new A(new $(.38,.28,.92),r);l.position.set(0,.64,.05);const c=wt(hn);c.position.set(0,.34,-.76);const h=wt(hn);if(h.position.set(0,.34,.76),n.add(o,l,c,h),t){const u=new A(new $(.75,.05,.22),r);u.position.set(0,.82,-.7),n.add(u)}return n}function Fu(s){const e=new Ce;Lt(e,s,1.95,3.15);const t=Et(1409085,.4,.25),n=new J({color:16436245,roughness:.45,metalness:.14}),i=Bt([[-1.44,.12],[1.36,.1],[1.42,.92],[.45,.92],[-.65,.86],[-1.08,.98],[-1.46,.56]],1.44,.09),r=new A(i,t);r.position.set(0,.78,.02),r.castShadow=!0,e.add(r);const a=new A(new de(.74,.78,2.26,16,1,!1,0,Math.PI).rotateZ(Math.PI/2).rotateY(Math.PI/2),n);a.scale.set(.98,.48,1),a.position.set(0,1.62,.22),a.castShadow=!0,e.add(a);const o=new A(new $(1.16,.54,.06),kn);o.position.set(0,1.46,-.94),o.rotation.x=.26;const l=new A(new de(.16,.15,.12,14).rotateX(Math.PI/2),Ot);l.position.set(0,.84,-1.46);const c=new A(new de(.12,.12,.14,14).rotateX(Math.PI/2),new Le({color:16776171}));c.position.set(0,.84,-1.48),e.add(o,l,c);for(const _ of[-.71,.71]){for(let x=0;x<3;x++){const y=new A(new de(.018,.018,1.25,6).rotateX(Math.PI/2),nn);y.position.set(_,1.15+x*.14,.28),e.add(y)}const m=new A(new de(.028,.028,.65,8),nn);m.position.set(_,1.38,-.82);const p=m.clone();p.position.z=1.24,e.add(m,p)}const h=new A(new Jn(.55,.025,6,16).rotateX(Math.PI/2),Ot);h.scale.set(1,1,1.45),h.position.set(0,1.98,.3),e.add(h);const u=Il(s,1013358,!1);u.scale.setScalar(.84),u.position.set(0,.72,-.44),e.add(u);const d=wt(hn);d.position.set(0,.34,-1.16);const f=wt(hn);f.position.set(-.74,.34,.92);const g=wt(hn);return g.position.set(.74,.34,.92),e.add(d,f,g),e}function Gx(s){const e=new Ce;Lt(e,s,1.7,2.75);const t=[15485081,440020,16347926,9133302,1483594],n=t[Math.floor(Math.random()*t.length)],i=new J({color:n,roughness:.45,side:It}),r=new J({color:16436245,roughness:.3,metalness:.75}),a=new A(new de(.032,.032,1.55,8).rotateX(Math.PI/2),nn);a.position.set(0,.58,-.32);const o=new A(new de(.03,.03,.85,8),Ot);o.position.set(0,.72,-1.04),o.rotation.x=.24;const l=new A(new de(.025,.025,.62,8).rotateZ(Math.PI/2),Ot);l.position.set(0,1.12,-.96),e.add(a,o,l);const c=Bt([[-.68,0],[.64,0],[.72,.88],[.52,.88],[.44,.32],[-.64,.28]],1.18,.04),h=new A(c,i);h.position.set(0,.82,.56),h.castShadow=!0,e.add(h);const u=new A(new de(.68,.72,1.24,14,1,!1,0,Math.PI*.78).rotateZ(Math.PI/2),i);u.position.set(0,1.38,.66),u.rotation.x=-.35,u.castShadow=!0;const d=new A(new Jn(.69,.024,6,16,Math.PI*.78).rotateY(Math.PI/2),r);d.position.set(.62,1.38,.66),d.rotation.x=-.35;const f=d.clone();f.position.x=-.62,e.add(u,d,f);const g=new A(new Ht(1.1,.52),new Le({map:s.rickshawArt}));g.position.set(0,.86,1.29),e.add(g);const _=rr(s,"puller");_.scale.setScalar(.84),_.position.set(0,.24,-.66),e.add(_);const m=wt(hn,15000807);m.scale.set(.55,1,1),m.position.set(0,.34,-1.08);const p=wt(di,16436245);p.scale.set(.52,1.08,1.08),p.position.set(-.66,.42,.68);const x=p.clone();return x.position.x=.66,e.add(m,p,x),e}function Vx(s,e){const t=new Ce;Lt(t,s,3.45,10.6);const n=new J({map:s.buses[e%s.buses.length],roughness:.38,metalness:.28}),i=new J({map:s.busFront,roughness:.35,metalness:.24}),r=[14427686,16096779,165063,14753096],a=Et(r[e%r.length],.45,.22),o=new A(new $(2.68,2.55,9.5),[n,n,a,nn,i,i]);o.position.set(0,1.9,0),o.castShadow=!0,o.receiveShadow=!0,t.add(o);const l=new A(new de(1.36,1.36,9.45,16,1,!1,0,Math.PI).rotateZ(Math.PI/2).rotateY(Math.PI/2),a);l.scale.set(1,.22,1),l.position.set(0,3.16,0),l.castShadow=!0,t.add(l);const c=new Le({color:16776171});for(const u of[-.94,.94]){const d=new A(new de(.18,.18,.12,12).rotateX(Math.PI/2),c);d.position.set(u,1.12,-4.8),Zn(t,s,16774064,1.15,u,1.12,-4.92);const f=new A(new $(.12,.44,.16),nn);f.position.set(u*1.54,2.38,-4.88),t.add(d,f)}const h=new A(new de(.16,.16,2.82,10).rotateZ(Math.PI/2),Ot);h.position.set(0,.72,-4.86),t.add(h);for(const[u,d]of[[-1.36,-3.15],[1.36,-3.15],[-1.36,2.95],[1.36,2.95]]){const f=wt(ha);f.position.set(u,.58,d),t.add(f)}return t}function so(s){const e=new Ce;Lt(e,s,3.35,9.6);const t=Et(12131356,.42,.26),n=new J({color:1409085,roughness:.62}),i=new J({map:s.truckRear,roughness:.46}),r=new J({color:1920728,roughness:.78}),a=Bt([[-1.45,0],[1.25,0],[1.25,2.24],[-.38,2.28],[-.78,1.24],[-1.45,1.05]],2.44,.09),o=new A(a,t);o.position.set(0,1.72,-3.28),o.castShadow=!0;const l=new A(new $(2.12,.78,.08),kn);l.position.set(0,2.26,-3.86),l.rotation.x=-.22;const c=new A(new de(.15,.15,2.64,10).rotateZ(Math.PI/2),Ot);c.position.set(0,.72,-4.76),e.add(o,l,c);const h=new Le({color:16776171});for(const f of[-.9,.9]){const g=new A(new de(.16,.16,.1,12).rotateX(Math.PI/2),h);g.position.set(f,1.16,-4.74),e.add(g)}const u=new A(new $(2.6,2.1,6.25),[n,n,r,nn,i,n]);u.position.set(0,1.85,1.25),u.castShadow=!0;const d=new A(new de(1.32,1.32,6.22,14,1,!1,0,Math.PI).rotateZ(Math.PI/2).rotateY(Math.PI/2),r);d.scale.set(1,.42,1),d.position.set(0,2.9,1.25),d.castShadow=!0,e.add(u,d);for(const[f,g]of[[-1.3,-3.2],[1.3,-3.2],[-1.3,2.45],[1.3,2.45]]){const _=wt(ha);_.position.set(f,.58,g),e.add(_)}return e}const Wx=new de(.18,.245,.84,10),Xx=new de(.246,.252,.08,10),qx=new $(.16,.56,.34),xh=new In(.085,.62,4,8),Yx=new $(.12,.08,.22),Zx=new In(.205,.54,4,10),$x=new In(.2,.38,4,10),jx=new de(.065,.075,.12,8),Ll=new cn(.18,12,10),Hu=new cn(.19,10,8,0,Math.PI*2,0,Math.PI*.55),Kx=new cn(.085,8,8),Jx=new de(.145,.165,.11,10),Qx=new Ii(.36,.22,12),ey=new de(.18,.19,.09,10),yh=new In(.062,.42,4,8),ty=new J({color:1579035,roughness:.9}),zu=new J({color:16436245,roughness:.45}),ol=[{id:"bd_cricket",faceIdx:6,heightScale:1.04,widthScale:1.02,bottomStyle:"pants",longTop:!1,topHex:27214,bottomHex:988970,accentHex:16001601,hairHex:1118484,headwear:"cap",prop:"none"},{id:"murubbi",faceIdx:2,heightScale:.98,widthScale:1.08,bottomStyle:"pants",longTop:!0,topHex:16708551,bottomHex:16317180,hairHex:13948120,headwear:"tupi",prop:"cane"},{id:"sari_magenta",faceIdx:1,heightScale:.93,widthScale:.94,bottomStyle:"sari",longTop:!1,topHex:14362487,bottomHex:12458077,accentHex:16436245,hairHex:592139,headwear:"bun",prop:"purse"},{id:"du_student",faceIdx:3,heightScale:1.02,widthScale:.95,bottomStyle:"pants",longTop:!1,topHex:5195493,bottomHex:1981066,accentHex:3718648,hairHex:1579035,headwear:"headphones",prop:"backpack"},{id:"lungi_uncle",faceIdx:0,heightScale:.96,widthScale:1.14,bottomStyle:"lungi",longTop:!1,topHex:16317180,bottomHex:1981066,accentHex:14427686,hairHex:1841431,headwear:"hair",prop:"gamcha"},{id:"office_exec",faceIdx:3,heightScale:1.08,widthScale:1,bottomStyle:"pants",longTop:!1,topHex:12248829,bottomHex:1579035,accentHex:12131356,hairHex:1579035,headwear:"hair",prop:"briefcase"},{id:"fruit_vendor",faceIdx:4,heightScale:.97,widthScale:.96,bottomStyle:"lungi",longTop:!1,topHex:14251782,bottomHex:1467700,accentHex:16096779,hairHex:1118484,headwear:"hair",prop:"fruit_basket"},{id:"vlogger",faceIdx:6,heightScale:1.05,widthScale:.92,bottomStyle:"pants",longTop:!1,topHex:440020,bottomHex:1120295,accentHex:16007006,hairHex:2565930,headwear:"cap",prop:"selfie_stick"},{id:"farmer_mathal",faceIdx:4,heightScale:1,widthScale:1,bottomStyle:"lungi",longTop:!1,topHex:6660877,bottomHex:8138002,accentHex:14251782,hairHex:1579035,headwear:"mathal",prop:"gamcha"},{id:"doctor",faceIdx:7,heightScale:1.01,widthScale:.94,bottomStyle:"pants",longTop:!0,topHex:16317180,bottomHex:1013358,accentHex:165063,hairHex:1118484,headwear:"bun",prop:"clipboard"},{id:"metro_worker",faceIdx:0,heightScale:1.06,widthScale:1.1,bottomStyle:"pants",longTop:!1,topHex:3359061,bottomHex:1976635,accentHex:16347926,hairHex:1579035,headwear:"hardhat",prop:"vest"},{id:"hijab_student",faceIdx:5,heightScale:.94,widthScale:.92,bottomStyle:"pants",longTop:!0,topHex:1357990,bottomHex:16710083,accentHex:1013358,hairHex:1013358,headwear:"hijab",prop:"purse"},{id:"mistri",faceIdx:4,heightScale:.99,widthScale:1.06,bottomStyle:"pants",longTop:!1,topHex:1920728,bottomHex:1981066,accentHex:15680580,hairHex:1118484,headwear:"bandana",prop:"none"},{id:"food_rider",faceIdx:6,heightScale:1.01,widthScale:.96,bottomStyle:"pants",longTop:!1,topHex:15485081,bottomHex:1579035,accentHex:16020150,hairHex:1118484,headwear:"cap",prop:"delivery_pack"},{id:"nanima_sari",faceIdx:7,heightScale:.88,widthScale:1.04,bottomStyle:"sari",longTop:!1,topHex:16710888,bottomHex:16710888,accentHex:14427686,hairHex:10265519,headwear:"bun",prop:"umbrella"},{id:"schoolboy",faceIdx:6,heightScale:.82,widthScale:.84,bottomStyle:"shorts",longTop:!1,topHex:16777215,bottomHex:1981066,accentHex:15680580,hairHex:1118484,headwear:"hair",prop:"backpack"},{id:"tsc_artist",faceIdx:0,heightScale:1.03,widthScale:.96,bottomStyle:"pants",longTop:!0,topHex:8917815,bottomHex:2565930,accentHex:1120295,hairHex:1579035,headwear:"hair",prop:"jhola"},{id:"sari_yellow",faceIdx:5,heightScale:.95,widthScale:.98,bottomStyle:"sari",longTop:!1,topHex:15381256,bottomHex:13273604,accentHex:1920728,hairHex:1118484,headwear:"bun",prop:"umbrella"},{id:"guard",faceIdx:2,heightScale:1.07,widthScale:1.12,bottomStyle:"pants",longTop:!1,topHex:10576391,bottomHex:7421714,accentHex:1579035,hairHex:1579035,headwear:"beret",prop:"tie"},{id:"biker_youth",faceIdx:3,heightScale:1.1,widthScale:1.04,bottomStyle:"pants",longTop:!1,topHex:7153881,bottomHex:988970,accentHex:16436245,hairHex:2565930,headwear:"headphones",prop:"none"}];let oi=[];function ny(){if(oi.length===0){oi=ol.map((s,e)=>e);for(let s=oi.length-1;s>0;s--){const e=Math.floor(Math.random()*(s+1));[oi[s],oi[e]]=[oi[e],oi[s]]}}return oi.pop()}function Il(s,e,t){const n=new Ce,i=new J({map:s.humanFaces[0],roughness:.65}),r=new J({color:e,roughness:.72}),a=new A(new In(.2,.3,6,10),r);if(a.position.y=.34,a.castShadow=!0,n.add(a),t){const c=new A(new $(.14,.48,.38),new J({color:14427686,roughness:.82}));c.position.set(.15,.36,0),n.add(c)}const o=new A(Ll,i);o.position.set(0,.78,0),o.rotation.y=Math.PI/2;const l=new A(Hu,new J({color:1118484,roughness:.88}));return l.position.y=.02,o.add(l),n.add(o),n.userData.head=o,n}function ua(s,e){const t=new Ce,n=new J({color:s,roughness:.55,metalness:.15}),i=new A(new In(.2,.32,6,10),n);i.position.set(0,.36,0),i.rotation.x=-.22,i.castShadow=!0;const r=new A(new cn(.21,14,14),Et(e,.5,.16));r.position.set(0,.78,-.06);const a=new A(new $(.28,.12,.14),kn);return a.position.set(0,0,-.15),r.add(a),t.add(i,r),t.userData.head=r,t}function rr(s,e,t){const n=new Ce;Lt(n,s,.82,.82);const i=t!==void 0?Math.abs(t)%ol.length:e==="puller"?4:ny(),r=ol[i],a=s.humanFaces[r.faceIdx%s.humanFaces.length],o=new J({map:a,roughness:.68}),l=[13010498,14197874,11035698,13735776,12088120,14725252,10444337,13143122],c=new J({color:l[r.faceIdx%l.length],roughness:.68}),h=new J({color:r.topHex,roughness:.76}),u=new J({color:r.bottomHex,roughness:.82}),d=new J({color:r.accentHex??16436245,roughness:.55}),f=new J({color:r.hairHex,roughness:.88});let g=null,_=null;if(r.bottomStyle==="sari"||r.bottomStyle==="lungi"){const S=new A(Wx,u);if(S.position.y=.45,S.castShadow=!0,n.add(S),r.bottomStyle==="sari"){const R=new A(Xx,r.accentHex?d:zu);R.position.y=.1;const T=new A(qx,h);T.position.set(-.14,1.12,.02),T.rotation.z=.26,n.add(R,T)}}else if(g=new A(xh,r.bottomStyle==="shorts"?c:u),g.position.set(-.11,.42,0),g.castShadow=!0,_=new A(xh,r.bottomStyle==="shorts"?c:u),_.position.set(.11,.42,0),_.castShadow=!0,n.add(g,_),r.bottomStyle==="shorts"){const S=new A(new de(.19,.21,.34,10),u);S.position.y=.74,n.add(S)}const m=new A(Yx,ty);m.position.set(-.11,.04,-.05);const p=m.clone();p.position.x=.11,n.add(m,p);const x=new A(r.longTop?Zx:$x,h);if(x.position.y=r.longTop?1.05:1.12,x.castShadow=!0,n.add(x),r.id==="bd_cricket"){const S=new A(new de(.11,.11,.04,12).rotateX(Math.PI/2),d);S.position.set(0,1.16,-.19),n.add(S)}if(r.prop==="vest"||r.id==="tsc_artist"){const S=new A(new de(.215,.22,.44,10),d);S.position.y=1.13,n.add(S)}if(r.prop==="tie"){const S=new A(new $(.06,.34,.04),d);S.position.set(0,1.14,-.2),n.add(S)}const y=new A(jx,c);y.position.y=1.44;const v=new A(Ll,o);if(v.position.y=1.62,v.rotation.y=Math.PI/2,v.castShadow=!0,r.headwear==="hijab"){const S=new A(new cn(.205,10,10),d);S.position.set(-.02,.01,0);const R=new A(new de(.18,.24,.32,10),d);R.position.set(0,1.44,.03),v.add(S),n.add(R)}else{const S=new A(Hu,f);S.position.y=.02,v.add(S)}if(r.headwear==="bun"){const S=new A(Kx,f);S.position.set(-.18,-.02,0),v.add(S)}else if(r.headwear==="tupi"){const S=new A(Jx,new J({color:16317180,roughness:.7}));S.position.y=.16,v.add(S)}else if(r.headwear==="cap"){const S=new A(ey,d);S.position.y=.14;const R=new A(new $(.18,.03,.24),d);R.position.set(.14,.11,0),v.add(S,R)}else if(r.headwear==="hardhat"){const S=new A(new cn(.215,10,8,0,Math.PI*2,0,Math.PI*.56),new J({color:16436245,roughness:.3}));S.position.y=.05,v.add(S)}else if(r.headwear==="mathal"){const S=new A(Qx,new J({color:13935475,roughness:.9}));S.position.y=.2,v.add(S)}else if(r.headwear==="headphones"){const S=new A(new Jn(.2,.025,6,14,Math.PI),d);S.rotation.y=Math.PI/2;const R=new A(new de(.06,.06,.05,8).rotateX(Math.PI/2),d);R.position.set(0,0,.19);const T=R.clone();T.position.z=-.19,v.add(S,R,T)}else if(r.headwear==="beret"){const S=new A(new de(.19,.16,.08,10),d);S.position.set(-.02,.16,.02),S.rotation.z=.18,v.add(S)}else if(r.headwear==="bandana"){const S=new A(new de(.188,.188,.07,10),d);S.position.y=.09,v.add(S)}n.add(y,v);const I=new A(yh,h);I.position.set(-.27,1.12,0);const C=new A(yh,h);if(C.position.set(.27,1.12,0),e==="angry"){I.position.y=1.44,I.rotation.x=-2.35,C.position.y=1.44,C.rotation.x=-2.55;const S=i%6;if(S===0){const R=new A(new de(.032,.036,1.05,6),new J({color:7877903}));R.position.set(0,-.45,0),C.add(R)}else if(S===1){const R=new A(new $(.12,.85,.04),new J({color:14596231}));R.position.set(0,-.42,0),C.add(R)}else if(S===2){const R=new A(new de(.025,.025,.5,6),new J({color:10576391}));R.position.set(0,-.25,0);const T=new A(new Ii(.16,.45,8),new J({color:14251782}));T.position.set(0,-.62,0),C.add(R,T)}else if(S===3){const R=new A(new $(.14,.34,.05),new J({color:2450411}));R.position.set(0,-.32,0),C.add(R)}else if(S===4){const R=new A(new de(.18,.16,.06,10).rotateX(Math.PI/2),nn);R.position.set(0,-.42,0),C.add(R)}else{const R=new A(new $(.16,.9,.05),new J({color:9584654}));R.position.set(0,-.44,0),C.add(R)}}else switch(r.prop){case"gamcha":{const S=new A(new $(.13,.52,.38),new J({color:14427686,roughness:.85}));S.position.set(.16,1.18,0),n.add(S);break}case"backpack":{const S=new A(new $(.32,.44,.18),d);S.position.set(0,1.14,.24),n.add(S);break}case"delivery_pack":{const S=new A(new $(.42,.48,.36),d);S.position.set(0,1.18,.32),n.add(S);break}case"cane":{const S=new A(new de(.022,.02,.96,6),new J({color:7421714}));S.position.set(.32,.48,-.14),n.add(S);break}case"purse":{const S=new A(new $(.12,.26,.3),d);S.position.set(.3,.82,-.05),n.add(S);break}case"briefcase":{const S=new A(new $(.1,.32,.42),new J({color:2565930}));S.position.set(.32,.72,0),n.add(S);break}case"jhola":{const S=new A(new $(.12,.36,.32),new J({color:14251782}));S.position.set(-.28,.82,.04),n.add(S);break}case"clipboard":{const S=new A(new $(.22,.3,.03),new J({color:16317180}));S.position.set(.24,1.02,-.22),S.rotation.x=-.5,n.add(S);break}case"fruit_basket":{const S=new A(new de(.34,.22,.22,12),new J({color:11817737,roughness:.9}));S.position.set(0,1.94,0);const R=new A(new de(.3,.32,.14,10),new J({color:16096779,roughness:.6}));R.position.set(0,2.08,0),n.add(S,R);break}case"selfie_stick":{C.rotation.x=-1.2,C.position.set(.27,1.24,-.14);const S=new A(new de(.015,.015,.65,6),Ot);S.position.set(0,-.42,0);const R=new A(new $(.1,.18,.02),new Le({color:3718648}));R.position.set(0,-.75,0),C.add(S,R);break}case"umbrella":{const S=new A(new de(.018,.018,1.15,6),Ot);S.position.set(.24,1.88,0);const R=new A(new Ii(.66,.26,12),d);R.position.set(.24,2.46,0),n.add(S,R);break}}return n.add(I,C),n.scale.set(r.widthScale,r.heightScale,r.widthScale),n.userData.armL=I,n.userData.armR=C,n.userData.legL=g,n.userData.legR=_,n}function ro(s,e,t=-1){const n=new Ce;for(let i=0;i<e;i++){const r=rr(s,"random");r.position.set((Math.random()-.5)*2,.28,(i-e/2)*1.55+(Math.random()-.5)*.5),r.rotation.y=(t===-1?-Math.PI/2:Math.PI/2)+(Math.random()-.5)*.9,n.add(r)}return n}function iy(s){const e=new Ce;Lt(e,s,2.2,2.2);const t=new J({color:1981066,roughness:.65}),n=new J({color:10741301,emissive:6660877,emissiveIntensity:.45,roughness:.4}),i=new J({color:16317180,roughness:.3}),r=new A(new de(.88,1,.25,16),i);r.position.y=.125;const a=new A(new In(.09,.62,5,8),t);a.position.set(-.12,.62,0);const o=a.clone();o.position.x=.12;const l=new A(new In(.22,.42,6,10),n);l.position.y=1.32;const c=new A(Ll,new J({map:s.humanFaces[2]}));c.position.y=1.82,c.rotation.y=-Math.PI/2;const h=new A(new cn(.22,12,8,0,Math.PI*2,0,Math.PI*.56),i);h.position.y=1.87,e.add(r,a,o,l,c,h);const u=new A(new de(.05,.05,3.25,8),i);u.position.set(.55,1.62,0);const d=new A(new Ii(1.62,.72,12),new J({color:1920728,roughness:.45}));d.position.set(.55,3.38,0),d.castShadow=!0,e.add(u,d);const f=new A(new lr(1.65,2.1,28).rotateX(-Math.PI/2),new Le({color:3718648,side:It,transparent:!0,opacity:.8}));return f.position.y=.08,e.add(f),e.userData.ring=f,e}function sy(s,e){const t=new Ce;Lt(t,e,2.4,2.8);const n=new J({color:8736014,roughness:.88});if(s==="tea"){const i=new A(new $(1.85,1,2.25),n);i.position.y=.5,i.castShadow=!0;const r=new de(.05,.06,2.2,6);for(const[c,h]of[[-.85,-1.02],[.85,-1.02],[-.85,1.02],[.85,1.02]]){const u=new A(r,n);u.position.set(c,1.1,h),t.add(u)}const a=new A(new $(2.25,.12,2.55),new J({color:1920728,roughness:.65}));a.position.y=2.24,a.rotation.z=.08;const o=new A(new de(.18,.23,.36,10),Ot);o.position.set(0,1.2,-.4);const l=new A(new de(.15,.15,.38,10),new J({color:16436245,transparent:!0,opacity:.85}));l.position.set(.28,1.2,.38),t.add(i,a,o,l)}else if(s==="fuchka"){const i=new A(new $(1.54,.85,2.15),new J({color:15357964,roughness:.5}));i.position.y=.62,i.castShadow=!0;const r=new A(new $(1.42,.68,1.88),kn);r.position.y=1.4;const a=new A(new $(1.7,.12,2.3),new J({color:16436245,roughness:.45}));a.position.y=1.8;const o=wt(hn);o.position.set(-.8,.32,0);const l=wt(hn);l.position.set(.8,.32,0),t.add(i,r,a,o,l)}else{const i=new J({color:1409085,roughness:.7}),r=new A(new $(1.8,.65,2.2),n);r.position.y=.48;const a=new A(new $(2.1,.1,2.4),new J({color:14251782,roughness:.85}));a.position.y=2.05,a.rotation.z=-.1;const o=new A(new de(.04,.05,1.6,6),n);o.position.set(-.8,1.25,-.9);const l=o.clone();l.position.set(.8,1.25,.9),t.add(r,a,o,l);for(let c=0;c<8;c++){const h=new A(new de(.16,.2,.26,8),i);h.position.set((Math.random()-.5)*1.1,.92+(c>4?.22:0),(Math.random()-.5)*1.4),t.add(h)}}return t}function bh(s,e,t){const n=new Ce,i=new J({color:5395035,roughness:.45,metalness:.58}),r=new or({color:1118484}),a=e?[-1,1]:[-1],o=s/2,l=new J({color:7893356,roughness:.85}),c=new J({color:1409085,roughness:.78});for(const h of a){const u=h*10.5;for(const f of[-o,0]){const g=new A(new de(.24,.3,.8,8),i);g.position.set(u,.4,f);const _=new A(new de(.11,.17,8.2,8),i);_.position.set(u,4.1,f);const m=new A(new $(1.35,.1,.1),nn);m.position.set(u-h*.25,7.55,f);const p=new A(new $(1.65,.08,.08),i);p.position.set(u-h*.85,7.95,f);const x=new A(new $(.42,.32,.32),new Le({color:16774592}));x.position.set(u-h*1.55,7.75,f),n.add(g,_,m,p,x),t&&Zn(n,t,16765565,2.3,u-h*1.55,7.75,f);const y=new A(new de(.45,.36,.55,10),l);y.position.set(u-h*.35,.55,f+4.8);const v=new A(new Ii(.58,.95,10),c);v.position.set(u-h*.35,1.2,f+4.8),n.add(y,v)}const d=[[-.55,7.52],[-.18,7.52],[.18,7.12],[.45,6.72]];for(const[f,g]of d)for(const _ of[-o,0]){const m=_+o,p=(_+m)/2,x=new hu([new L(u+f,g,_),new L(u+f,g-.52,p),new L(u+f,g,m)]),y=new Tt().setFromPoints(x.getPoints(10));n.add(new Ms(y,r))}}return n}function Mh(s,e){const t=new Ce,n=new J({color:7434618,roughness:.92}),i=new A(new de(.18,.25,8.8,8),n);i.position.set(e*10.4,4.4,0),i.castShadow=!0;const r=new A(new $(1.9,.14,.14),nn);r.position.set(e*9.8,7.6,0);const a=new A(new $(.86,1.2,.74),nn);a.position.set(e*9.85,5.9,0);const o=new A(new Jn(.45,.06,6,16),new Le({color:592139}));o.position.set(e*10.05,6.9,.22),t.add(i,r,a,o);const l=new A(new $(.45,.45,.45),new Le({color:16638023}));l.position.set(e*9.35,4.45,0),t.add(l);const c=new A(new Ht(3.6,9.4),new Le({map:s.chargeZone,transparent:!0,opacity:.94,depthWrite:!1}));return c.rotation.x=-Math.PI/2,c.position.set(e*7.2,.05,0),t.add(c),{group:t,wireAnchorLocal:new L(e*9.6,5.8,0),zoneMesh:c}}function ys(s,e=7.5){const t=new Ce,n=new A(new de(.06,.09,e,8),Ot);n.position.y=e/2;const i=new A(new cn(.11,8,8),zu);i.position.y=e+.05;const r=new Ht(2.6,1.6,10,4),a=r.attributes.position;for(let l=0;l<a.count;l++){const c=a.getX(l),h=Math.sin((c+1.3)*2.4)*.14*((c+1.3)/2.6);a.setZ(l,h)}r.computeVertexNormals();const o=new A(r,new J({map:s.bdFlag,roughness:.55,side:It}));return o.position.set(1.34,e-.85,0),t.add(n,i,o),t}function ao(s,e,t,n){const i=new Ce,r=9.5+e%3*2.2,a=10+(e+1)%3*1.8,o=11.5+e%4*4.5,l=new J({map:s.buildings[e%s.buildings.length],bumpMap:s.buildingBump,bumpScale:.15,roughness:.84,metalness:.06}),c=new J({color:5722958,roughness:.95}),h=new J({color:14078929,roughness:.88}),u=new A(new $(r,o,a),[l,l,c,c,l,l]);u.position.y=o/2,u.receiveShadow=!0,i.add(u);const d=new A(new $(r+.35,.7,a+.35),h);d.position.y=o+.3,i.add(d);const f=-n*(r/2),g=new J({color:10265519,roughness:.9}),_=new J({color:15067115,roughness:.55});for(let M=1;M<=2;M++){const D=4.8+M*3.1;if(D>o-1.5)break;const z=new A(new $(.95,.95,3.2),g);z.position.set(f-n*.45,D,(M%2===0?1:-1)*1.8),i.add(z);const k=new A(new $(.42,.52,.72),_);k.position.set(f-n*.22,D+.2,M%2===0?-2.2:2.1),i.add(k)}const m=[292951,12131356,1920728,14251782],p=new A(new $(1.5,.14,a*.86),new J({color:m[t%m.length],roughness:.7}));p.position.set(f-n*.75,2.55,0),p.rotation.z=n*.24,i.add(p);const x=new A(new Ht(2.6,1.3),new Le({map:s.wallPosters[(e+t)%s.wallPosters.length]}));x.position.set(f-n*.06,1.35,a*.26),x.rotation.y=n===-1?Math.PI/2:-Math.PI/2,i.add(x);const y=new A(new de(.78,.78,1.4,12),new J({color:e%2===0?1579035:1920728,roughness:.5}));y.position.set(r*.15*n,o+1,-a*.16),i.add(y);const v=n===-1?t%2===0?0:2:t%2===0?1:3,I=s.streetSigns[v%s.streetSigns.length],C=new J({map:I,emissiveMap:I,emissive:new De(16777215),emissiveIntensity:.34,roughness:.22,metalness:.1}),S=new A(new $(.28,2.35,a*.88),C);S.position.set(f-n*.25,2.65,0),i.add(S);const R=new A(new $(.85,.55,a*.86),new J({color:3359061,roughness:.85}));R.position.set(f-n*.48,.52,0);const T=new A(new $(.75,.65,a*.82),new J({color:1409085,roughness:.8}));return T.position.set(f-n*.48,1.05,0),i.add(R,T),i}function ry(s,e){const t=new Ce,n=new J({color:3359061,roughness:.48,metalness:.68}),i=new A(new $(.95,7.8,1.15),n);i.position.set(-11,3.9,0);const r=i.clone();r.position.x=11;const a=new A(new $(23.2,.95,2.3),n);a.position.set(0,7.3,0),t.add(i,r,a);const o=new A(new Ht(18,3.6),new Le({map:s.billboards[e%s.billboards.length]}));o.position.set(0,8.8,1.22),t.add(o);const l=ys(s,3.2);l.position.set(-10.5,7.8,0);const c=ys(s,3.2);return c.position.set(10.5,7.8,0),t.add(l,c),t}function Gu(){const s=new Ce,e=new J({color:8150078,roughness:.94}),t=new J({color:1409085,roughness:.72,side:It}),n=new J({color:2278750,roughness:.7,side:It});let i=0,r=0;for(let a=0;a<6;a++){const o=.24-a*.022,l=.22-a*.022,c=new A(new de(l,o,1.15,7),e),h=.06+a*.025;c.position.set(i+h*.5,r+.55,0),c.rotation.z=-h,c.castShadow=!0,s.add(c),i+=h,r+=1.08}for(let a=0;a<8;a++){const o=a/8*Math.PI*2,l=new Ce;l.position.set(i,r,0),l.rotation.y=o;const c=new A(new $(.42,.05,1.55),a%2===0?t:n);c.position.set(0,.25,.78),c.rotation.x=-.28;const h=new A(new $(.32,.04,1.35),a%2===0?n:t);h.position.set(0,.02,2.02),h.rotation.x=.42,l.add(c,h),s.add(l)}return s}function oo(s,e){if(s){const c=new J({color:14427686,roughness:.78}),h=new J({color:15357964,roughness:.78}),u=e.clone("tree_real",f=>{let g=0;f.traverse(_=>{if(_.isMesh){const m=_,p=(m.material?.name||m.name||"").toLowerCase();!p.includes("trunk")&&!p.includes("bark")&&!p.includes("wood")&&!p.includes("stem")&&(m.material=g++%2===0?c:h)}})});if(u)return u;const d=e.clone("k_tree_large",f=>{f.traverse(g=>{if(g.isMesh){const _=g,m=(_.material?.name||"").toLowerCase();(m.includes("leaf")||m.includes("green")||m.includes("foliage"))&&(_.material=c)}})});if(d)return d}else{const c=e.clone("tree_real");if(c)return c;const h=e.clone("k_tree_large");if(h)return h}if(!s)return Gu();const t=new Ce,n=new J({color:6045747,roughness:.95}),i=new A(new de(.22,.36,3.6,8),n);i.position.y=1.8,t.add(i);const r=new J({color:14427686,roughness:.8}),a=new J({color:16347926,roughness:.8}),l=[[0,3.85,0,2.5,.65,new J({color:1467700,roughness:.85})],[-.95,4.35,.4,1.9,.55,r],[1.05,4.25,-.35,1.85,.55,a],[.05,4.75,.05,1.75,.52,r]];for(const[c,h,u,d,f,g]of l){const _=new A(new de(d*.72,d,f,7),g);_.position.set(c,h,u),_.castShadow=!0,t.add(_)}return t}function ay(s){const e=new Ce,t=new J({color:12104360,roughness:.9}),n=new A(new $(2.1,16,2.4),t);n.position.set(-29,8,0);const i=new A(new $(6.8,1.2,3),t);i.position.set(-29,15.8,0);const r=new A(new $(6.2,1.7,s),t);return r.position.set(-29,17.2,0),e.add(n,i,r),e}function oy(s){const e=new Ce,t=new J({map:s.metroCoach,roughness:.22,metalness:.58}),n=new J({color:16317180,roughness:.3,metalness:.4});for(let i=0;i<4;i++){const r=new A(new $(2.9,3.1,14.2),[t,t,n,nn,n,n]);r.position.set(0,1.55,i*14.8),e.add(r)}return e}function ly(s){return new Ln({uniforms:{uTime:{value:0},uWaterMap:{value:s.waterTex},uSunColor:{value:new De(16769177)}},vertexShader:`
      varying vec2 vUv;
      varying vec3 vWorldPos;
      void main() {
        vUv = uv;
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vWorldPos = wp.xyz;
        gl_Position = projectionMatrix * viewMatrix * wp;
      }
    `,fragmentShader:`
      uniform float uTime;
      uniform sampler2D uWaterMap;
      uniform vec3 uSunColor;
      varying vec2 vUv;
      varying vec3 vWorldPos;

      void main() {
        vec2 uvA = vec2(vWorldPos.x * 0.045 + uTime * 0.025, vWorldPos.z * 0.055 + uTime * 0.045);
        vec2 uvB = vec2(vWorldPos.x * 0.085 - uTime * 0.02, vWorldPos.z * 0.095 - uTime * 0.032);
        vec3 tA = texture2D(uWaterMap, uvA).rgb;
        vec3 tB = texture2D(uWaterMap, uvB).rgb;
        vec3 col = mix(tA, tB, 0.48);

        // Rich river wave shimmer highlights along the current
        float luma = dot(col, vec3(0.299, 0.587, 0.114));
        float glint = pow(smoothstep(0.26, 0.58, luma), 3.0);
        col += uSunColor * glint * 0.36;

        // Soft foam line along the grassy river edge
        float bankFoam = smoothstep(0.045, 0.0, vUv.x);
        col = mix(col, vec3(0.78, 0.85, 0.82), bankFoam * 0.32);

        gl_FragColor = vec4(col, 0.98);
      }
    `,transparent:!0})}function Sh(s,e,t){const n=new Ce,i=new J({color:3359061,roughness:.45,metalness:.72}),r=new A(new de(.08,.1,4.4,8),i);r.position.set(0,2.2,-1.6);const a=r.clone();a.position.z=1.6;const o=s.streetSigns[t%s.streetSigns.length],l=new A(new $(.22,1.8,4.4),new J({map:o,emissiveMap:o,emissive:new De(16777215),emissiveIntensity:.38,roughness:.28}));return l.position.set(-e*.14,3.6,0),n.add(r,a,l),n}function cy(s){const e=new Ce,t=new A(new de(.07,.09,4.2,8),Ot);t.position.set(0,2.1,-5.2);const n=new A(new $(1.55,1.55,.1),new Le({map:s.uTurnSign}));n.position.set(0,3.85,-5.2);const i=new A(new Ht(7.2,7.2),new Le({map:s.uTurnRoad,transparent:!0,opacity:.92,depthWrite:!1}));return i.rotation.x=-Math.PI/2,i.position.set(0,.05,0),e.add(t,n,i),e}function hy(s,e){const t=new Ce,n=new J({color:8736014,roughness:.88}),i=[[-1.45,-1.2],[1.45,-1.2],[-1,.6],[0,.85],[1.05,.55]],r=[];for(let d=0;d<i.length;d++){const f=rr(s,"random");f.position.set(i[d][0],0,i[d][1]),t.add(f),r.push(f)}const a=new A(new de(.035,.04,2.75,6),n);a.position.set(-1.5,1.45,-1.35);const o=a.clone();o.position.x=1.5;const l=s.michilBanners[e%s.michilBanners.length],c=new A(new Ht(3.3,.95),new J({map:l,side:It,roughness:.65}));c.position.set(0,2.38,-1.35),t.add(a,o,c);const h=new A(new de(.025,.025,2.4,6),n);h.position.set(0,1.75,.72);const u=new A(new $(1.15,.58,.05),new Le({map:s.streetSigns[0]}));return u.position.set(0,2.78,.72),t.add(h,u),t.userData.marchers=r,t}function ll(){const s=new Ce,e=new J({color:3875862,roughness:.88}),t=[1409085,1920728,12131356,14251782],n=new J({color:t[Math.floor(Math.random()*t.length)],roughness:.72}),i=Bt([[-3.4,.65],[-2.1,0],[2.1,0],[3.4,.65],[2.5,.72],[-2.5,.72]],1.55,.08),r=new A(i,e);r.position.y=.28,s.add(r);const a=new A(new de(.88,.88,2.5,10,1,!1,0,Math.PI).rotateZ(Math.PI/2).rotateY(Math.PI/2),n);return a.position.set(0,.72,.1),s.add(a),s}function uy(s,e,t,n){const i=new Ce,r=new J({color:14078929,roughness:.78}),a=new J({color:3359061,roughness:.45,metalness:.75}),o=new Le({color:16774064}),l=new A(new Ht(180,s),e);l.rotation.x=-Math.PI/2,l.position.set(0,-4.6,0),i.add(l);const c=new A(new $(20.8,.9,s),r);c.position.set(0,-.5,0),i.add(c);for(const d of[-1,1]){const f=new A(new $(.65,1.05,s),r);f.position.set(d*9.85,.52,0),i.add(f);const g=new A(new $(.14,.12,s),a);g.position.set(d*10.1,1.48,0),i.add(g);for(const _ of[-14,14]){const m=new A(new de(.08,.1,6.4,8),a);m.position.set(d*10.1,3.2,_);const p=new A(new $(.95,.16,.3),o);p.position.set(d*9.5,6.4,_),i.add(m,p)}}if(t){const d=new J({color:15197668,roughness:.65,metalness:.2}),f=new or({color:16707722});for(const _ of[-1,1]){const m=new A(new $(1.5,29,2.2),d);m.position.set(_*11.4,10.5,0),m.castShadow=!0;const p=ys(n,4.4);p.position.set(_*11.4,24.5,0),i.add(m,p);for(const x of[-20,-14,-8,8,14,20]){const y=new Tt().setFromPoints([new L(_*11.2,23.5-Math.abs(x)*.28,0),new L(_*10.1,1.1,x)]);i.add(new Ms(y,f))}}const g=new A(new $(24.2,1.5,1.8),d);g.position.set(0,21.5,0),i.add(g)}const h=ll();h.position.set(-24-Math.random()*14,-4.65,(Math.random()-.5)*24),h.rotation.y=Math.random()*.6;const u=ll();return u.position.set(24+Math.random()*14,-4.65,(Math.random()-.5)*24),u.rotation.y=Math.PI+(Math.random()-.5)*.6,i.add(h,u),i}function dy(s,e,t){const n=new Ce,i=new J({color:13358561,roughness:.85}),r=new J({color:4153874,roughness:.94}),a=new J({color:3359061,roughness:.5,metalness:.7}),o=new Le({color:16774064}),l=new A(new Ht(110,s),e);l.rotation.x=-Math.PI/2,l.position.set(70,-2.2,0),n.add(l);const c=new A(new Ht(5.8,s),r);c.rotation.x=-Math.PI/2,c.rotation.y=.45,c.position.set(15.6,-1.05,0),n.add(c);const h=new A(new $(.75,.7,s),i);h.position.set(13.5,.25,0);const u=new A(new $(.14,.14,s),a);u.position.set(13.6,1.32,0),n.add(h,u);for(const m of[-16,0,16]){const p=new A(new de(.07,.09,5.4,8),a);p.position.set(13.6,2.7,m);const x=new A(new $(.85,.1,.1),a);x.position.set(13.2,5.38,m);const y=new A(new $(.42,.12,.22),o);y.position.set(12.9,5.32,m),n.add(p,x,y)}const d=Gu();d.position.set(14.5,-.25,-10),d.rotation.y=Math.random()*Math.PI*2;const f=ys(t,6.2);f.position.set(13.8,.25,11),n.add(d,f);const g=ll();g.position.set(27+Math.random()*14,-2.25,(Math.random()-.5)*22),g.rotation.y=(Math.random()-.5)*.5,n.add(g);const _=new J({color:1467700,roughness:.85});for(let m=0;m<5;m++){const p=new A(new de(.9+Math.random()*.6,1,.12,7),_);p.position.set(19+Math.random()*6,-2.18,-18+m*9+(Math.random()-.5)*3),n.add(p)}return n}function tt(s,e){const t=document.createElement("canvas");t.width=s,t.height=e;const n=t.getContext("2d");return[t,n]}function nt(s,e=1,t=1,n=_t){const i=new Hf(s);return i.colorSpace=n,i.wrapS=ui,i.wrapT=ui,i.repeat.set(e,t),i.anisotropy=4,i.needsUpdate=!0,i}function fy(){const s=Ey(),e=Ay(),t=Ry(),n=Cy();return{road:s.albedo,roadBump:s.bump,roadRoughness:s.roughness,sidewalk:e.albedo,sidewalkBump:e.bump,contactShadow:wy(),glowHalo:Ty(),rickshawArt:t,rickshawRoof:n,chargeZone:Py(),buildings:[0,1,2,3,4].map(Ly),buildingBump:Iy(),shops:Gv.map(Dy),buses:Uu.map(Ny),busFront:Uy(),truckRear:ky(),metroCoach:Oy(),billboards:Vv.map((i,r)=>By(i,r)),plateAuto:wh("মামার রোড-৪২০","#15803d","#fef08a"),plateCar:wh("ঢাকা মেট্রো-গ ১২-৪৫","#f8fafc","#111827"),bdFlag:by(),wallPosters:My(),streetSigns:yy(),humanFaces:Sy(),waterTex:py(),panelTextures:my(t),roofTextures:gy(n),uTurnSign:_y(),uTurnRoad:vy(),michilBanners:xy()}}function py(){const[e,t]=tt(512,512),n=t.createLinearGradient(0,0,512,512);n.addColorStop(0,"#0a3342"),n.addColorStop(.5,"#114d5c"),n.addColorStop(1,"#0c3b4a"),t.fillStyle=n,t.fillRect(0,0,512,512);for(let i=0;i<420;i++){const r=Math.random()*512,a=Math.random()*512,o=24+Math.random()*90,l=2+Math.random()*5,c=Math.random();t.fillStyle=c>.85?"rgba(253, 224, 155, 0.28)":c>.45?"rgba(45, 132, 148, 0.25)":"rgba(6, 28, 38, 0.32)",t.beginPath(),t.ellipse(r,a,o*.5,l,0,0,Math.PI*2),t.fill()}return nt(e,4,4,_t)}function my(s){const[e,t]=tt(512,256);t.fillStyle="#071430",t.fillRect(0,0,512,256),t.strokeStyle="#38bdf8",t.lineWidth=10,t.strokeRect(8,8,496,240),t.textAlign="center",t.fillStyle="#38bdf8",t.font='900 46px "Baloo Da 2", sans-serif',t.fillText("SABBIR CODEX",256,115),t.fillStyle="#fde047",t.font='800 24px "Hind Siliguri", sans-serif',t.fillText("সাব্বির ও মাজিদ এডিশন",256,168);const n=nt(e,1,1);n.wrapS=St,n.wrapT=St;const i=new Image;i.onload=()=>{t.drawImage(i,12,12,488,232),t.strokeStyle="#38bdf8",t.lineWidth=10,t.strokeRect(8,8,496,240),n.needsUpdate=!0},i.src="./art/dev-team.jpg?v=5";const[r,a]=tt(512,256);a.fillStyle="#006a4e",a.fillRect(0,0,512,256),a.fillStyle="#f42a41",a.beginPath(),a.arc(256,128,72,0,Math.PI*2),a.fill(),a.strokeStyle="#fde047",a.lineWidth=10,a.strokeRect(10,10,492,236),a.textAlign="center",a.fillStyle="#ffffff",a.font='900 36px "Baloo Da 2", sans-serif',a.fillText("বাংলাদেশ • গর্বের রাস্তা",256,122),a.fillStyle="#fef08a",a.font='800 22px "Hind Siliguri", sans-serif',a.fillText("SABBIR CODEX 🇧🇩",256,162);const o=nt(r,1,1),[l,c]=tt(512,256),h=c.createLinearGradient(0,0,512,256);h.addColorStop(0,"#0f172a"),h.addColorStop(.5,"#3b0764"),h.addColorStop(1,"#0c4a6e"),c.fillStyle=h,c.fillRect(0,0,512,256),c.strokeStyle="#22d3ee",c.lineWidth=10,c.strokeRect(10,10,492,236),c.textAlign="center",c.fillStyle="#f472b6",c.font='900 44px "Baloo Da 2", sans-serif',c.fillText("⚡ CYBER MAMA ⚡",256,114),c.fillStyle="#22d3ee",c.font='800 24px "Hind Siliguri", sans-serif',c.fillText("NO BRAKE • SABBIR CODEX",256,168);const u=nt(l,1,1),[d,f]=tt(512,256);f.fillStyle="#facc15",f.fillRect(0,0,512,256),f.strokeStyle="#b91c1c",f.lineWidth=12,f.strokeRect(10,10,492,236),f.textAlign="center",f.fillStyle="#991b1b",f.font='900 38px "Baloo Da 2", sans-serif',f.fillText("ব্রেক নাই — দোয়া করেন!",256,98),f.fillStyle="#18181b",f.font='800 26px "Hind Siliguri", sans-serif',f.fillText("পিছনে হর্ন বাজাইলে চা ঢেলে দিবো!",256,152),f.fillStyle="#065f46",f.font='800 20px "Hind Siliguri", sans-serif',f.fillText("SABBIR CODEX • পুরান ঢাকা",256,198);const g=nt(d,1,1);return{classic_art:s,sabbir_codex:n,bd_tiger:o,cyber_neon:u,funny_slogan:g}}function gy(s){const e=(t,n,i,r)=>{const[a,o]=tt(256,256),l=o.createLinearGradient(0,0,256,256);return l.addColorStop(0,t),l.addColorStop(1,n),o.fillStyle=l,o.fillRect(0,0,256,256),o.fillStyle=i,o.fillRect(0,0,256,22),o.fillRect(0,234,256,22),o.textAlign="center",o.textBaseline="middle",o.fillStyle="#ffffff",o.font='900 44px "Baloo Da 2", sans-serif',o.fillText(r,128,128),nt(a,1,1)};return{red_fringe:s,gold_royal:e("#f59e0b","#b45309","#991b1b","👑"),metro_blue:e("#0284c7","#1e3a8a","#fde047","⚡"),carbon_sport:e("#18181b","#09090b","#22d3ee","SC")}}function _y(){const[s,e]=tt(256,256);return e.fillStyle="#1d4ed8",e.fillRect(0,0,256,256),e.strokeStyle="#ffffff",e.lineWidth=12,e.strokeRect(10,10,236,236),e.strokeStyle="#ffffff",e.lineWidth=22,e.lineCap="round",e.beginPath(),e.moveTo(86,170),e.lineTo(86,92),e.arc(128,92,42,Math.PI,0,!1),e.lineTo(170,152),e.stroke(),e.fillStyle="#ffffff",e.beginPath(),e.moveTo(170,178),e.lineTo(142,138),e.lineTo(198,138),e.closePath(),e.fill(),e.textAlign="center",e.fillStyle="#fde047",e.font='800 32px "Baloo Da 2", sans-serif',e.fillText("ইউ-টার্ন",128,224),nt(s,1,1)}function vy(){const[s,e]=tt(256,256);e.clearRect(0,0,256,256),e.strokeStyle="rgba(255, 255, 255, 0.85)",e.lineWidth=12,e.setLineDash([20,14]),e.beginPath(),e.arc(128,136,74,Math.PI,0,!1),e.stroke(),e.setLineDash([]),e.fillStyle="#fde047",e.textAlign="center",e.font='800 34px "Baloo Da 2", sans-serif',e.fillText("🔄 ইউ-টার্ন",128,210);const t=nt(s,1,1);return t.wrapS=St,t.wrapT=St,t}function xy(){return[{bg:"#dc2626",border:"#fde047",text:"রং সাইডে অধিকার চাই • ব্রেক বাতিল করো!"},{bg:"#facc15",border:"#991b1b",text:"চায়ের দাম ৫ টাকা চাই • মামার রাস্তা জিন্দাবাদ!"},{bg:"#1d4ed8",border:"#38bdf8",text:"SABBIR CODEX জিন্দাবাদ • যানজট দূর করো!"}].map(e=>{const[t,n]=tt(512,128);return n.fillStyle=e.bg,n.fillRect(0,0,512,128),n.strokeStyle=e.border,n.lineWidth=8,n.strokeRect(5,5,502,118),n.textAlign="center",n.textBaseline="middle",n.fillStyle=e.bg==="#facc15"?"#18181b":"#ffffff",n.font='900 28px "Baloo Da 2", "Hind Siliguri", sans-serif',n.fillText(e.text,256,66,476),nt(t,1,1)})}function yy(){const s=[];{const[e,t]=tt(512,160),n=t.createLinearGradient(0,0,512,160);n.addColorStop(0,"#071636"),n.addColorStop(.5,"#0c2d6b"),n.addColorStop(1,"#071636"),t.fillStyle=n,t.fillRect(0,0,512,160),t.strokeStyle="#38bdf8",t.lineWidth=7,t.strokeRect(5,5,502,150),t.textAlign="center",t.fillStyle="#ffffff",t.font='900 48px "Baloo Da 2", sans-serif',t.fillText("SABBIR CODEX",256,72,470),t.fillStyle="#fde047",t.font='700 23px "Hind Siliguri", sans-serif',t.fillText("সাব্বির ও মাজিদ • মামার রাস্তা ৩ডি",256,122,460),s.push(nt(e,1,1))}{const[e,t]=tt(512,160),n=t.createLinearGradient(0,0,512,160);n.addColorStop(0,"#b91c1c"),n.addColorStop(1,"#dc2626"),t.fillStyle=n,t.fillRect(0,0,512,160),t.strokeStyle="#f8fafc",t.lineWidth=7,t.strokeRect(5,5,502,150),t.fillStyle="#ffffff",t.beginPath(),t.arc(84,80,50,0,Math.PI*2),t.fill(),t.strokeStyle="#dc2626",t.lineWidth=4,t.beginPath(),t.arc(84,80,42,0,Math.PI*2),t.stroke(),t.fillStyle="#15803d",t.beginPath(),t.arc(84,80,22,0,Math.PI*2),t.fill(),t.fillStyle="#fef08a",t.textAlign="center",t.font='800 18px "Baloo Da 2", sans-serif',t.fillText("ডাক",84,86),t.textAlign="center",t.fillStyle="#ffffff",t.font='800 40px "Baloo Da 2", "Hind Siliguri", sans-serif',t.fillText("বাংলাদেশ ডাক বিভাগ",318,72,340),t.fillStyle="#fef08a",t.font='700 22px "Hind Siliguri", sans-serif',t.fillText("সবার জন্য সেবা • ঢাকা",318,118,340),s.push(nt(e,1,1))}{const[e,t]=tt(512,160),n=t.createLinearGradient(0,0,512,160);n.addColorStop(0,"#065f46"),n.addColorStop(1,"#047857"),t.fillStyle=n,t.fillRect(0,0,512,160),t.strokeStyle="#fde047",t.lineWidth=6,t.strokeRect(4,4,504,152),t.textAlign="center",t.fillStyle="#ffffff",t.font='800 40px "Baloo Da 2", "Hind Siliguri", sans-serif',t.fillText("ঢাকা এক্সপ্রেসওয়ে ও মেট্রো",256,72,470),t.fillStyle="#fef08a",t.font='700 23px "Hind Siliguri", sans-serif',t.fillText("রং সাইডে সাবধান • সুন্দর বাংলাদেশ",256,120,460),s.push(nt(e,1,1))}{const[e,t]=tt(512,160),n=t.createLinearGradient(0,0,512,160);n.addColorStop(0,"#0c1d4a"),n.addColorStop(1,"#1d4ed8"),t.fillStyle=n,t.fillRect(0,0,512,160),t.strokeStyle="#38bdf8",t.lineWidth=6,t.strokeRect(4,4,504,152),t.textAlign="center",t.fillStyle="#ffffff",t.font='800 38px "Baloo Da 2", "Hind Siliguri", sans-serif',t.fillText("সাব্বির Codex ও মাজিদ",256,70,470),t.fillStyle="#7dd3fc",t.font='700 22px "Hind Siliguri", sans-serif',t.fillText("মামার রাস্তা ৩ডি • Dream Big, Build Better",256,118,460),s.push(nt(e,1,1))}return s}function by(){const[s,e]=tt(256,160);return e.fillStyle="#006a4e",e.fillRect(0,0,256,160),e.fillStyle="#f42a41",e.beginPath(),e.arc(114,80,48,0,Math.PI*2),e.fill(),nt(s,1,1)}function My(){return[{title:"মামার কোচিং সেন্টার",sub:"১০০% জিপিএ-৫ ও রং সাইড গ্যারান্টি!",bg:"#fef08a",fg:"#991b1b"},{title:"ব্রেক ছাড়া ড্রাইভিং স্কুল",sub:"মাত্র ৩ দিনে দেশি টেসলা ওস্তাদ হোন",bg:"#e0f2fe",fg:"#1e3a8a"},{title:"হাকিম কবিরাজি চিকিৎসা",sub:"পাবলিক ধোলাইয়ের ব্যথা ১ দিনে গায়েব",bg:"#fce7f3",fg:"#831843"}].map(e=>{const[t,n]=tt(256,128);return n.fillStyle=e.bg,n.fillRect(0,0,256,128),n.strokeStyle=e.fg,n.lineWidth=6,n.strokeRect(4,4,248,120),n.textAlign="center",n.fillStyle=e.fg,n.font='800 22px "Baloo Da 2", sans-serif',n.fillText(e.title,128,52,234),n.fillStyle="#18181b",n.font='700 14px "Hind Siliguri", sans-serif',n.fillText(e.sub,128,88,234),nt(t,1,1)})}function Sy(){return[{skin:"#c68642",beard:!0,glasses:!1,bindi:!1,smile:!0},{skin:"#d8a472",beard:!1,glasses:!1,bindi:!0,smile:!0},{skin:"#a86432",beard:!0,glasses:!0,bindi:!1,smile:!1},{skin:"#d19760",beard:!1,glasses:!0,bindi:!1,smile:!0},{skin:"#b87338",beard:!0,glasses:!1,bindi:!1,smile:!1},{skin:"#e0b084",beard:!1,glasses:!1,bindi:!0,smile:!0},{skin:"#9f5e31",beard:!1,glasses:!1,bindi:!1,smile:!0},{skin:"#c88c52",beard:!1,glasses:!0,bindi:!0,smile:!0}].map(e=>{const[t,n]=tt(128,128);n.fillStyle=e.skin,n.fillRect(0,0,128,128),n.fillStyle="rgba(0,0,0,0.08)",n.fillRect(0,86,128,42),n.fillStyle="#18181b",n.fillRect(44,44,14,4),n.fillRect(70,44,14,4),n.fillStyle="#f8fafc",n.fillRect(46,52,10,6),n.fillRect(72,52,10,6),n.fillStyle="#09090b",n.fillRect(49,53,5,5),n.fillRect(75,53,5,5),e.glasses&&(n.strokeStyle="#111827",n.lineWidth=3,n.strokeRect(43,49,16,12),n.strokeRect(69,49,16,12),n.beginPath(),n.moveTo(59,55),n.lineTo(69,55),n.stroke()),e.bindi&&(n.fillStyle="#dc2626",n.beginPath(),n.arc(64,44,3.5,0,Math.PI*2),n.fill()),e.beard&&(n.fillStyle="#1c1917",n.fillRect(49,70,30,5),n.fillStyle="rgba(24, 24, 27, 0.65)",n.fillRect(46,82,36,16)),n.strokeStyle=e.bindi?"#be123c":"#5c2d1f",n.lineWidth=3,n.beginPath(),e.smile?n.arc(64,74,8,.15*Math.PI,.85*Math.PI):(n.moveTo(56,78),n.lineTo(72,78)),n.stroke();const i=nt(t,1,1);return i.wrapS=St,i.wrapT=St,i})}function wy(){const[s,e]=tt(64,64),t=e.createRadialGradient(32,32,7,32,32,30);t.addColorStop(0,"rgba(10, 8, 6, 0.72)"),t.addColorStop(.65,"rgba(10, 8, 6, 0.32)"),t.addColorStop(1,"rgba(10, 8, 6, 0)"),e.fillStyle=t,e.fillRect(0,0,64,64);const n=nt(s,1,1);return n.wrapS=St,n.wrapT=St,n}function Ty(){const[s,e]=tt(64,64),t=e.createRadialGradient(32,32,2,32,32,32);t.addColorStop(0,"rgba(255, 255, 255, 0.95)"),t.addColorStop(.35,"rgba(255, 240, 190, 0.52)"),t.addColorStop(1,"rgba(255, 220, 120, 0)"),e.fillStyle=t,e.fillRect(0,0,64,64);const n=nt(s,1,1);return n.wrapS=St,n.wrapT=St,n}function Ey(){const[e,t]=tt(512,512),[n,i]=tt(512,512),[r,a]=tt(512,512);t.fillStyle="#26272b",t.fillRect(0,0,512,512),i.fillStyle="#808080",i.fillRect(0,0,512,512),a.fillStyle="#b4b4b4",a.fillRect(0,0,512,512);for(const o of[76,188,324,436])t.fillStyle="rgba(14, 14, 18, 0.24)",t.fillRect(o-26,0,14,512),t.fillRect(o+12,0,14,512),a.fillStyle="#747474",a.fillRect(o-28,0,56,512);for(let o=0;o<3600;o++){const l=Math.random()*512,c=Math.random()*512,h=28+Math.floor(Math.random()*28);t.fillStyle=`rgb(${h},${h+1},${h+4})`,t.fillRect(l,c,2,2);const u=104+Math.floor(Math.random()*48);i.fillStyle=`rgb(${u},${u},${u})`,i.fillRect(l,c,2,2)}t.fillStyle="rgba(248, 250, 252, 0.88)",t.fillRect(10,0,6,512),t.fillRect(496,0,6,512),t.fillStyle="#f8fafc";for(let o=18;o<512;o+=84)t.fillRect(126,o,8,44),t.fillRect(378,o,8,44);return t.fillStyle="#facc15",t.fillRect(245,0,8,512),t.fillRect(259,0,8,512),{albedo:nt(e,1,2,_t),bump:nt(n,1,2,_n),roughness:nt(r,1,2,_n)}}function Ay(){const[e,t]=tt(256,256),[n,i]=tt(256,256);t.fillStyle="#d8d4cc",t.fillRect(0,0,256,256),i.fillStyle="#909090",i.fillRect(0,0,256,256);for(let r=0;r<256;r+=32)for(let a=0;a<256;a+=32){const o=(r/32+a/32)%2===0?"#dcd7ce":"#cfc9bf";t.fillStyle=o,t.fillRect(r+1,a+1,30,30),i.strokeStyle="#505050",i.lineWidth=2,i.strokeRect(r,a,32,32)}for(let r=0;r<256;r+=32){const a=r/32%2===0?"#f8fafc":"#18181b";t.fillStyle=a,t.fillRect(0,r,22,32),t.fillRect(234,r,22,32)}return{albedo:nt(e,1,4,_t),bump:nt(n,1,4,_n)}}function Ry(){const[s,e]=tt(512,256),t=()=>{e.save(),e.textAlign="center",e.textBaseline="middle",e.shadowColor="rgba(0, 0, 0, 0.38)",e.shadowBlur=3,e.shadowOffsetY=2,e.fillStyle="#991b1b",e.font='800 29px "Baloo Da 2", sans-serif',e.fillText("মামার রাস্তা",256,103),e.fillStyle="#064e3b",e.font='700 16px "Hind Siliguri", sans-serif',e.fillText("মায়ের দোয়া • দেশি টেসলা",256,133),e.fillStyle="#b45309",e.font='800 13px "Hind Siliguri", sans-serif',e.fillText("সাব্বির Codex ও মাজিদ",256,157),e.restore()},n=e.createLinearGradient(0,0,512,256);n.addColorStop(0,"#0f766e"),n.addColorStop(.5,"#047857"),n.addColorStop(1,"#115e59"),e.fillStyle=n,e.fillRect(0,0,512,256),e.strokeStyle="#facc15",e.lineWidth=10,e.strokeRect(10,10,492,236),e.fillStyle="#eab308",e.beginPath(),e.arc(256,128,90,0,Math.PI*2),e.fill(),e.strokeStyle="#b91c1c",e.lineWidth=5,e.stroke(),t();const i=nt(s,1,1);i.wrapS=St,i.wrapT=St;const r=new Image;return r.crossOrigin="anonymous",r.onload=()=>{e.clearRect(0,0,512,256),e.drawImage(r,0,0,512,256),t(),i.needsUpdate=!0},r.src="./art/rickshaw-art-motif.jpg",i}function Cy(){const[s,e]=tt(256,256),t=e.createLinearGradient(0,0,256,256);t.addColorStop(0,"#ef4444"),t.addColorStop(.5,"#dc2626"),t.addColorStop(1,"#b91c1c"),e.fillStyle=t,e.fillRect(0,0,256,256),e.fillStyle="#fde047",e.fillRect(0,0,256,24),e.fillRect(0,232,256,24),e.fillStyle="#ffffff",e.fillRect(0,24,256,6),e.fillRect(0,226,256,6),e.fillStyle="#b91c1c";for(let n=12;n<256;n+=24)e.beginPath(),e.arc(n,12,5,0,Math.PI*2),e.arc(n,244,5,0,Math.PI*2),e.fill();return e.fillStyle="#ffffff",e.beginPath(),e.moveTo(142,62),e.lineTo(94,134),e.lineTo(128,134),e.lineTo(112,194),e.lineTo(164,118),e.lineTo(130,118),e.closePath(),e.fill(),nt(s,1,1)}function Py(){const[s,e]=tt(256,512);e.clearRect(0,0,256,512);const t=e.createRadialGradient(128,256,20,128,256,230);t.addColorStop(0,"rgba(250, 204, 21, 0.46)"),t.addColorStop(1,"rgba(234, 179, 8, 0.16)"),e.fillStyle=t,e.fillRect(10,10,236,492),e.strokeStyle="#facc15",e.lineWidth=14,e.strokeRect(12,12,232,488),e.save(),e.strokeStyle="#18181b",e.lineWidth=10,e.setLineDash([22,22]),e.strokeRect(12,12,232,488),e.restore(),e.fillStyle="#fef08a",e.beginPath(),e.moveTo(143,105),e.lineTo(82,238),e.lineTo(126,238),e.lineTo(106,355),e.lineTo(176,214),e.lineTo(132,214),e.closePath(),e.fill(),e.textAlign="center",e.fillStyle="#fef08a",e.font='800 34px "Baloo Da 2", sans-serif',e.fillText("অবৈধ চার্জ",128,412),e.fillStyle="#ffffff",e.font='700 21px "Hind Siliguri", sans-serif',e.fillText("ধীরে চলুন ⚡",128,450);const n=nt(s,1,1);return n.wrapS=St,n.wrapT=St,n}function Ly(s){const[e,t]=tt(256,512),n=[{wall:"#b87a56",brick:"#7c2d12",trim:"#5c2b1a",arch:"#e7d5bc",shutter:"#14532d"},{wall:"#c9a366",brick:"#854d0e",trim:"#6b4226",arch:"#f3e5c8",shutter:"#1e3a8a"},{wall:"#9f6b63",brick:"#7f1d1d",trim:"#4c1d1d",arch:"#e8d5d0",shutter:"#0f766e"},{wall:"#779396",brick:"#475569",trim:"#2f4858",arch:"#d7e3e4",shutter:"#7c2d12"},{wall:"#bfa78a",brick:"#78350f",trim:"#574231",arch:"#ebe0cf",shutter:"#1e293b"}],i=n[s%n.length];t.fillStyle=i.wall,t.fillRect(0,0,256,512);for(let a=0;a<16;a++){const o=Math.random()*210,l=Math.random()*420,c=20+Math.random()*44,h=14+Math.random()*28;t.fillStyle=i.brick,t.globalAlpha=.34,t.fillRect(o,l,c,h),t.strokeStyle="rgba(235, 220, 200, 0.32)",t.lineWidth=1;for(let u=l+5;u<l+h;u+=6)t.beginPath(),t.moveTo(o,u),t.lineTo(o+c,u),t.stroke();t.globalAlpha=1}for(let a=0;a<36;a++)t.fillStyle=a%3===0?"rgba(34, 56, 38, 0.14)":"rgba(28, 22, 18, 0.13)",t.fillRect(Math.random()*256,Math.random()*430,5+Math.random()*14,38+Math.random()*110);const r=416/6;for(let a=0;a<6;a++){const o=a*r;t.fillStyle=i.trim,t.fillRect(0,o,256,7),t.fillStyle=i.arch,t.fillRect(0,o+7,256,3);for(let l=0;l<3;l++){const c=18+l*80,h=o+18;t.fillStyle=i.arch,t.fillRect(c-4,h-4,58,48),t.beginPath(),t.arc(c+25,h+2,29,Math.PI,0),t.fill();const u=(a+l+s)%3===0;t.fillStyle=u?"#fde68a":"#1c1917",t.fillRect(c,h+2,50,40),t.beginPath(),t.arc(c+25,h+4,25,Math.PI,0),t.fill(),t.strokeStyle="#18181b",t.lineWidth=2;for(let d=c+10;d<c+46;d+=10)t.beginPath(),t.moveTo(d,h-10),t.lineTo(d,h+42),t.stroke();t.beginPath(),t.moveTo(c,h+18),t.lineTo(c+50,h+18),t.stroke(),t.fillStyle=i.shutter,t.fillRect(c-8,h+4,7,38),t.fillRect(c+51,h+4,7,38)}}t.fillStyle="#292524",t.fillRect(0,418,256,94);for(const a of[10,134]){const o=(s+a)%3!==0;if(t.fillStyle=o?"#fef3c7":i.shutter,t.fillRect(a,428,112,78),t.strokeStyle="#18181b",t.lineWidth=2,o)t.strokeRect(a,428,112,78);else for(let l=434;l<504;l+=7)t.beginPath(),t.moveTo(a,l),t.lineTo(a+112,l),t.stroke()}return nt(e,1,1)}function Iy(){const[s,e]=tt(128,256);e.fillStyle="#888888",e.fillRect(0,0,128,256);const t=210/6;for(let n=0;n<6;n++){const i=n*t;e.fillStyle="#d8d8d8",e.fillRect(0,i,128,4);for(let r=0;r<3;r++)e.fillStyle="#303030",e.fillRect(9+r*40,i+8,27,22)}return nt(s,1,1,_n)}function Dy(s){const[e,t]=tt(512,128),n=t.createLinearGradient(0,0,512,128);n.addColorStop(0,s.bg),n.addColorStop(1,"#111827"),t.fillStyle=n,t.fillRect(0,0,512,128),t.strokeStyle=s.accent,t.lineWidth=6,t.strokeRect(5,5,502,118),t.fillStyle=s.accent,t.beginPath(),t.arc(58,64,34,0,Math.PI*2),t.fill(),t.fillStyle="#18181b",t.font="34px sans-serif",t.textAlign="center",t.textBaseline="middle";const i={tea:"☕",biryani:"🍲",pharmacy:"➕",salon:"✂️",battery:"⚡",hardware:"🔧",fuchka:"🥣",bakery:"🥐"};return t.fillText(i[s.icon],58,67),t.textAlign="left",t.fillStyle="#ffffff",t.font='800 30px "Baloo Da 2", "Hind Siliguri", sans-serif',t.fillText(s.name,106,52,388),t.fillStyle=s.accent,t.font='700 16px "Hind Siliguri", sans-serif',t.fillText(s.sub,106,88,388),nt(e,1,1)}function Ny(s){const[e,t]=tt(512,256);t.fillStyle=s.bottom,t.fillRect(0,0,512,256),t.fillStyle=s.top,t.fillRect(0,0,512,112),t.fillStyle=s.stripe,t.fillRect(0,109,512,21);for(let n=0;n<7;n++){const i=17+n*69;t.fillStyle="#1e293b",t.fillRect(i,22,57,68),t.strokeStyle="#cbd5e1",t.lineWidth=3,t.strokeRect(i,22,57,68)}return t.textAlign="center",t.fillStyle="#111827",t.font='800 42px "Baloo Da 2", sans-serif',t.fillText(s.name,256,172),t.fillStyle=s.top,t.font='800 18px "Hind Siliguri", sans-serif',t.fillText(s.route,256,202),t.fillStyle="#b91c1c",t.font='700 15px "Hind Siliguri", sans-serif',t.fillText(s.slogan,256,228,470),nt(e,1,1)}function Uy(){const[s,e]=tt(256,256),t=e.createLinearGradient(0,0,0,256);t.addColorStop(0,"#ef4444"),t.addColorStop(1,"#b91c1c"),e.fillStyle=t,e.fillRect(0,0,256,256),e.fillStyle="#111827",e.fillRect(16,12,224,30),e.fillStyle="#fde047",e.textAlign="center",e.font='800 18px "Baloo Da 2", sans-serif',e.fillText("ঢাকা এক্সপ্রেস • গেটলক",128,33);const n=e.createLinearGradient(0,50,0,152);n.addColorStop(0,"#38bdf8"),n.addColorStop(.45,"#1e3a8a"),n.addColorStop(1,"#fb923c"),e.fillStyle=n,e.fillRect(14,50,228,98),e.strokeStyle="#0f172a",e.lineWidth=4,e.strokeRect(14,50,228,98),e.fillStyle="#18181b",e.fillRect(58,166,140,44),e.strokeStyle="#cbd5e1",e.lineWidth=2;for(let i=175;i<=202;i+=9)e.beginPath(),e.moveTo(64,i),e.lineTo(192,i),e.stroke();return e.fillStyle="#15803d",e.fillRect(78,220,100,24),e.fillStyle="#ffffff",e.font='700 12px "Hind Siliguri", sans-serif',e.fillText("ঢাকা মেট্রো-ব ১১",128,236),nt(s,1,1)}function ky(){const[s,e]=tt(256,256);return e.fillStyle="#14532d",e.fillRect(0,0,256,256),e.strokeStyle="#facc15",e.lineWidth=9,e.strokeRect(8,8,240,240),e.fillStyle="#dc2626",e.fillRect(36,46,184,54),e.textAlign="center",e.fillStyle="#fef08a",e.font='800 33px "Baloo Da 2", sans-serif',e.fillText("হর্ন দিন",128,83),e.fillStyle="#ffffff",e.font='800 22px "Hind Siliguri", sans-serif',e.fillText("দূরত্ব বজায় রাখুন",128,144),e.fillStyle="#facc15",e.font='800 18px "Hind Siliguri", sans-serif',e.fillText("ঢাকা মেট্রো-ট ১১-৪২০৯",128,208),nt(s,1,1)}function Oy(){const[s,e]=tt(512,128);e.fillStyle="#f1f5f9",e.fillRect(0,0,512,128),e.fillStyle="#15803d",e.fillRect(0,84,512,23),e.fillStyle="#dc2626",e.fillRect(0,76,512,8),e.fillStyle="#0f172a";for(let t=0;t<6;t++)e.fillRect(21+t*81,17,63,46);return nt(s,1,1)}function By(s,e){const[t,n]=tt(512,112),i=["#0b1630","#7f1d1d","#1e3a8a","#064e3b"];n.fillStyle=i[e%i.length],n.fillRect(0,0,512,112),n.strokeStyle="#facc15",n.lineWidth=6,n.strokeRect(4,4,504,104),n.textAlign="center",n.textBaseline="middle",n.fillStyle="#fef08a",n.font='800 24px "Baloo Da 2", "Hind Siliguri", sans-serif',n.fillText(s,256,58,476);const r=nt(t,1,1);if(e===0||e===1||e===3||e===5){const a=new Image;a.onload=()=>{n.fillStyle="#07122a",n.fillRect(0,0,512,112),n.drawImage(a,8,6,126,100),n.strokeStyle="#38bdf8",n.lineWidth=5,n.strokeRect(4,4,504,104),n.textAlign="left",n.fillStyle="#ffffff",n.font='900 30px "Baloo Da 2", sans-serif',n.fillText("SABBIR CODEX",148,38,350),n.fillStyle="#fde047",n.font='800 18px "Hind Siliguri", sans-serif',n.fillText("মামার রাস্তা ৩ডি • সাব্বির ও মাজিদ টিম",148,78,350),r.needsUpdate=!0},a.src="./art/dev-team.jpg?v=5"}return r}function wh(s,e,t){const[n,i]=tt(128,48);return i.fillStyle=e,i.fillRect(0,0,128,48),i.strokeStyle=t,i.lineWidth=3,i.strokeRect(2,2,124,44),i.textAlign="center",i.textBaseline="middle",i.fillStyle=t,i.font='800 16px "Hind Siliguri", sans-serif',i.fillText(s,64,26,116),nt(n,1,1)}const Fy=["k_tractor","k_tractor_shovel","k_sedan","k_sedan_sports","k_hatchback","k_suv","k_suv_luxury","k_taxi","k_police","k_ambulance","k_van","k_delivery","k_delivery_flat","k_race","pickup_green","pickup_red","pickup_yellow","pickup_purple","delivery_van","cng","moto_street","moto_superbike","delivery_scooter","rickshaw"],Gt=48,Hy=6,Th=6,Eh=10;class zy{constructor(e,t,n){B(this,"canvas");B(this,"renderer");B(this,"scene");B(this,"camera");B(this,"textures");B(this,"glbs");B(this,"waterMat");B(this,"audio");B(this,"callbacks");B(this,"garage");B(this,"mods");B(this,"vehicleSpec");B(this,"player");B(this,"skyDome");B(this,"rainPoints");B(this,"hemiLight");B(this,"metroTrain");B(this,"metroRelZ",-180);B(this,"chunks",[]);B(this,"chunkCursorZ",24);B(this,"chunkIndexCounter",0);B(this,"lastAnnouncedBiome","city");B(this,"trafficDeck",[]);B(this,"traffic",[]);B(this,"peds",[]);B(this,"michils",[]);B(this,"sergeants",[]);B(this,"particles",[]);B(this,"mobChasers",[]);B(this,"lightningLine");B(this,"lightningGeo");B(this,"shockwaveRing");B(this,"shockwaveLife",0);B(this,"keys",new Set);B(this,"touchSteer",0);B(this,"touchSlow",!1);B(this,"touchGas",!1);B(this,"settings");B(this,"phase","menu");B(this,"playerX",-2.35);B(this,"playerZ",0);B(this,"playerVelX",0);B(this,"currentHoverY",0);B(this,"speed",14);B(this,"steerAngle",0);B(this,"battery",100);B(this,"isCharging",!1);B(this,"chargeToastLock",0);B(this,"chaos",0);B(this,"chaosActive",!1);B(this,"chaosTimeLeft",0);B(this,"chaosShieldUsed",!1);B(this,"mobRage",0);B(this,"mobDistance",28);B(this,"mobChasing",!1);B(this,"runCashTk",1e3);B(this,"combo",0);B(this,"comboTimer",0);B(this,"soundBombTimer",0);B(this,"wrongSideDuration",0);B(this,"wrongSideMemePlayed",!1);B(this,"sergeantAlertActive",!1);B(this,"sergeantAlertTime",0);B(this,"sergeantAlertMaxTime",3.8);B(this,"sergeantBribeCost",hh);B(this,"activeSergeant",null);B(this,"nextTrafficZ",-36);B(this,"nextPedZ",-56);B(this,"nextMichilZ",-110);B(this,"nextSergeantZ",-175);B(this,"lastPlayerSide",-1);B(this,"shakeIntensity",0);B(this,"crashSpinTimer",0);B(this,"dustAccum",0);B(this,"tickerIdCounter",1);B(this,"hudEmitAccum",0);B(this,"fpsFrames",0);B(this,"fpsAccum",0);B(this,"currentFps",60);B(this,"animId",0);B(this,"lastTimestamp",0);B(this,"pendingSnapshot",!1);B(this,"stats");B(this,"particleGeo",new $(.24,.24,.24));B(this,"dustGeo",new cn(.18,6,6));B(this,"handleResize",()=>{const e=window.innerWidth,t=window.innerHeight;this.camera.aspect=e/t,this.camera.fov=e<t?72:58,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t,!1)});B(this,"handleKeyDown",e=>{const t=e.target?.tagName;if(t==="INPUT"||t==="TEXTAREA")return;const n=e.code;this.keys.add(n),this.phase==="playing"?n==="Space"||n==="KeyB"?(e.preventDefault(),this.triggerSoundBomb()):n==="KeyH"?this.triggerHorn():n==="ShiftLeft"||n==="ShiftRight"||n==="KeyF"?this.triggerChaosMode():n==="KeyE"?this.triggerPayTeaMoney():(n==="KeyP"||n==="Escape")&&this.pauseGame():this.phase==="paused"&&(n==="KeyP"||n==="Escape")&&this.resumeGame()});B(this,"handleKeyUp",e=>{this.keys.delete(e.code)});B(this,"loop",e=>{this.animId=requestAnimationFrame(this.loop);const t=(e-this.lastTimestamp)/1e3;this.lastTimestamp=e;const n=Math.min(.05,Math.max(.001,t));this.waterMat.uniforms.uTime.value+=n;const i=this.skyDome?.material;if(i?.uniforms?.uTime&&(i.uniforms.uTime.value+=n),this.fpsFrames++,this.fpsAccum+=t,this.fpsAccum>=.5&&(this.currentFps=Math.round(this.fpsFrames/this.fpsAccum),this.fpsFrames=0,this.fpsAccum=0),this.phase==="menu"?this.updateMenuShowcase(n):this.phase==="playing"?this.updatePlaying(n):this.phase==="gameover"&&this.updateGameOverIdle(n),this.renderer.render(this.scene,this.camera),this.pendingSnapshot){this.pendingSnapshot=!1;let r=null;try{r=this.renderer.domElement.toDataURL("image/jpeg",.85)}catch{r=null}this.callbacks.onGameOver({...this.stats},r)}});this.canvas=e,this.settings={...t},this.callbacks=n,this.garage=Bv(),this.mods=kv(),this.vehicleSpec=Ci(this.garage.selected),this.stats=this.freshStats(),this.audio=new Xv,this.audio.setSoundEnabled(t.soundEnabled),this.audio.setVoiceEnabled(t.voiceEnabled),this.renderer=new Dv({canvas:this.canvas,antialias:t.quality!=="low",powerPreference:"high-performance"}),this.renderer.outputColorSpace=_t,this.renderer.toneMapping=Ih,this.renderer.toneMappingExposure=1.08,this.scene=new pc,this.scene.background=new De(15047778),this.scene.fog=new is(14523236,.0056),this.camera=new Kt(58,window.innerWidth/window.innerHeight,.2,340),this.textures=fy(),this.waterMat=ly(this.textures),this.glbs=new Px,this.setupEnvironmentAndSky(),this.setupLighting(),this.setupSpecialEffects(),this.setupRainSystem(),this.applyQuality(t.quality),this.applyGameModeAtmosphere(t.gameMode),this.mountPlayerVehicle(this.garage.selected),this.metroTrain=oy(this.textures),this.metroTrain.position.set(-28.4,18,-160),this.scene.add(this.metroTrain),this.setupMobPool(),this.buildInitialChunks(),this.glbs.startBatchedLoad(i=>{this.phase==="menu"&&(i==="supercar"&&this.garage.selected==="lamborghini"||i==="superbike"&&this.garage.selected==="ninja_h2r"||i==="moto_street"&&this.garage.selected==="street_cruiser"||i==="k_tractor"&&this.garage.selected==="bd_tractor"||i==="k_van"&&this.garage.selected==="dhaka_leguna"||i==="k_future_car"&&this.garage.selected==="flying_car")&&this.mountPlayerVehicle(this.garage.selected)}),this.bindEvents(),this.handleResize(),this.lastTimestamp=performance.now(),this.loop(this.lastTimestamp)}freshStats(){return{nationalLoss:0,garageEarnedTk:0,vehicleNameBn:this.vehicleSpec?this.vehicleSpec.nameBn:"দেশি টেসলা",distanceMeters:0,wrongSideMeters:0,topSpeedKmh:0,carsHit:0,cngsHit:0,bikesHit:0,rickshawsHit:0,stallsSmashed:0,pedestriansBumped:0,nearMisses:0,soundBombsUsed:0,chaosActivations:0,bribesPaid:0,bribeTotalTk:0,illegalPowerStolenTk:0,chargeHookups:0,maxCombo:0,survivalSeconds:0,deathReason:"bus",deathDetail:""}}setupEnvironmentAndSky(){const e=new Ln({side:Jt,depthWrite:!1,fog:!1,uniforms:{uTime:{value:0},uSunDir:{value:new L(.08,.145,-.985).normalize()}},vertexShader:`
        varying vec3 vDir;
        void main() {
          vDir = normalize(position);
          vec4 wp = modelMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * viewMatrix * wp;
        }
      `,fragmentShader:`
        uniform float uTime;
        uniform vec3 uSunDir;
        varying vec3 vDir;

        float hash(vec2 p) {
          return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
        }
        float noise(vec2 p) {
          vec2 i = floor(p);
          vec2 f = fract(p);
          f = f * f * (3.0 - 2.0 * f);
          return mix(
            mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x),
            mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x),
            f.y
          );
        }
        float fbm(vec2 p) {
          float v = 0.0;
          float a = 0.5;
          for (int i = 0; i < 4; i++) {
            v += a * noise(p);
            p = p * 2.04 + vec2(17.1, 9.2);
            a *= 0.5;
          }
          return v;
        }

        void main() {
          vec3 d = normalize(vDir);
          float h = clamp(d.y, 0.0, 1.0);

          // Rich sunset sky gradient matching reference: glowing gold horizon -> fiery orange -> sunset crimson -> deep cobalt blue zenith!
          vec3 goldHoriz = vec3(1.00, 0.86, 0.44);
          vec3 fieryOrange = vec3(0.98, 0.44, 0.14);
          vec3 magentaSky = vec3(0.68, 0.24, 0.36);
          vec3 cobaltTop = vec3(0.11, 0.24, 0.58);

          vec3 col = mix(goldHoriz, fieryOrange, smoothstep(0.0, 0.18, h));
          col = mix(col, magentaSky, smoothstep(0.16, 0.42, h));
          col = mix(col, cobaltTop, smoothstep(0.36, 0.82, h));

          // Dramatic swirling illuminated sunset cloud bands!
          if (h > 0.02) {
            vec2 cloudUv = d.xz / (h + 0.26) * 0.95 + vec2(uTime * 0.006, -uTime * 0.004);
            float c = fbm(cloudUv * 1.45);
            float cDetail = fbm(cloudUv * 3.1 + vec2(c * 0.9, -c * 0.6));
            float cloudMask = smoothstep(0.42, 0.78, c * 0.65 + cDetail * 0.35) * smoothstep(0.02, 0.16, h) * (1.0 - smoothstep(0.62, 0.96, h));

            float sunAlign = max(0.0, dot(d, uSunDir));
            vec3 cloudDark = mix(vec3(0.38, 0.19, 0.35), vec3(0.95, 0.34, 0.12), pow(sunAlign, 1.5));
            vec3 cloudLit = mix(vec3(1.0, 0.68, 0.26), vec3(1.0, 0.95, 0.68), pow(sunAlign, 2.5));
            vec3 cloudCol = mix(cloudDark, cloudLit, smoothstep(0.35, 0.85, cDetail));
            col = mix(col, cloudCol, cloudMask * 0.88);
          }

          // Blazing golden sunset sun orb + soft atmospheric glow directly down the Dhaka avenue!
          float sunDot = max(0.0, dot(d, uSunDir));
          float sunDisc = smoothstep(0.9962, 0.9978, sunDot);
          float sunInnerGlow = pow(sunDot, 28.0) * 0.85;
          float sunOuterGlow = pow(sunDot, 5.5) * 0.55;
          col += vec3(1.0, 0.62, 0.22) * sunOuterGlow;
          col += vec3(1.0, 0.90, 0.52) * sunInnerGlow;
          col = mix(col, vec3(1.0, 0.99, 0.92), sunDisc);

          gl_FragColor = vec4(col, 1.0);
        }
      `});this.skyDome=new A(new cn(280,28,18),e),this.scene.add(this.skyDome);try{const t=new nl(this.renderer),n=new pc,i=new A(new cn(20,16,12),e);n.add(i);const r=t.fromScene(n,.02);this.scene.environment=r.texture,t.dispose()}catch{}}setupLighting(){this.hemiLight=new Np(16771522,4535594,1.1),this.scene.add(this.hemiLight);const e=new bu(16768944,2.05);e.position.set(24,38,-28),e.castShadow=this.settings.quality==="max"||this.settings.quality==="ultra"||this.settings.quality==="ultra_max",e.shadow.mapSize.width=this.settings.quality==="ultra_max"?2048:1024,e.shadow.mapSize.height=this.settings.quality==="ultra_max"?2048:1024,e.shadow.bias=-4e-4,e.shadow.camera.near=10,e.shadow.camera.far=160;const t=38;e.shadow.camera.left=-t,e.shadow.camera.right=t,e.shadow.camera.top=t,e.shadow.camera.bottom=-t,this.scene.add(e),this.scene.userData.sun=e}setupRainSystem(){const t=new Float32Array(1260);for(let r=0;r<420;r++)t[r*3]=(Math.random()-.5)*36,t[r*3+1]=Math.random()*20,t[r*3+2]=(Math.random()-.5)*44-10;const n=new Tt;n.setAttribute("position",new Ft(t,3));const i=new bl({color:13363455,size:.16,transparent:!0,opacity:.72});this.rainPoints=new lu(n,i),this.rainPoints.visible=!1,this.scene.add(this.rainPoints)}applyGameModeAtmosphere(e){const t=this.scene?.userData?.sun;e==="night"?(this.scene.background=new De(462111),this.scene.fog=new is(660268,.0085),this.hemiLight&&(this.hemiLight.color.setHex(3890078),this.hemiLight.groundColor.setHex(1120295),this.hemiLight.intensity=.78),t&&(t.color.setHex(9684477),t.intensity=.85),this.skyDome&&(this.skyDome.visible=!1),this.rainPoints&&(this.rainPoints.visible=!1)):e==="rain"?(this.scene.background=new De(4676718),this.scene.fog=new is(5400442,.0082),this.hemiLight&&(this.hemiLight.color.setHex(13358561),this.hemiLight.groundColor.setHex(2568765),this.hemiLight.intensity=1.05),t&&(t.color.setHex(14412542),t.intensity=1.25),this.skyDome&&(this.skyDome.visible=!1),this.rainPoints&&(this.rainPoints.visible=!0)):(this.scene.background=new De(15047778),this.scene.fog=new is(14523236,.0056),this.hemiLight&&(this.hemiLight.color.setHex(16771522),this.hemiLight.groundColor.setHex(4535594),this.hemiLight.intensity=1.1),t&&(t.color.setHex(16768944),t.intensity=2.05),this.skyDome&&(this.skyDome.visible=!0),this.rainPoints&&(this.rainPoints.visible=!1))}setupSpecialEffects(){const e=new Array(8).fill(0).map(()=>new L);this.lightningGeo=new Tt().setFromPoints(e);const t=new or({color:3718648,linewidth:2});this.lightningLine=new Ms(this.lightningGeo,t),this.lightningLine.visible=!1,this.scene.add(this.lightningLine);const n=new lr(.8,1.45,36).rotateX(-Math.PI/2),i=new Le({color:16436245,side:It,transparent:!0,opacity:.9});this.shockwaveRing=new A(n,i),this.shockwaveRing.visible=!1,this.scene.add(this.shockwaveRing)}setupMobPool(){for(let e=0;e<6;e++){const t=rr(this.textures,"angry",e*3+1);t.visible=!1,this.scene.add(t),this.mobChasers.push({mesh:t,offsetX:(e-2.5)*.88,offsetZ:.65*(e%3),phase:e*1.15})}}mountPlayerVehicle(e){this.player&&this.scene.remove(this.player.root),this.vehicleSpec=Ci(e);const t=e==="lamborghini"?"supercar":e==="ninja_h2r"?"superbike":e==="street_cruiser"?"moto_street":e==="bd_tractor"?"k_tractor":e==="dhaka_leguna"?"k_van":e==="flying_car"?"k_future_car":null;t&&!this.glbs.has(t)&&this.glbs.loadKey(t,()=>{this.garage.selected===e&&this.phase==="menu"&&this.mountPlayerVehicle(e)}),this.player=Ix(e,this.textures,this.glbs,this.mods),this.currentHoverY=this.player.baseHoverY,this.player.root.position.set(this.playerX,0,this.playerZ),this.player.bodyGroup.position.y=this.currentHoverY,this.scene.add(this.player.root)}getModConfig(){return{...this.mods}}updateModConfig(e){return this.mods={...this.mods,...e},Ov(this.mods),this.mountPlayerVehicle(this.garage.selected),this.audio.playCashChime(),this.getModConfig()}getPlayerXNorm(){return this.playerX/tn}getGarageData(){return{...this.garage,owned:[...this.garage.owned]}}selectVehicle(e){return this.garage.owned.includes(e)?(this.garage.selected=e,Ka(this.garage),this.mountPlayerVehicle(e),this.audio.playCashChime(),this.callbacks.onGarageChange(this.getGarageData()),!0):!1}buyVehicle(e){const t=Ci(e);return this.garage.owned.includes(e)?(this.selectVehicle(e),{ok:!0}):this.garage.walletTk<t.price?(this.audio.playMemeClip("gajab_beijjati",2,1),{ok:!1,reason:"আরও গাড়ি ভেঙে জাতীয় ক্ষতির টাকা জমাও!"}):(this.garage.walletTk-=t.price,this.garage.owned.push(e),this.garage.selected=e,Ka(this.garage),this.mountPlayerVehicle(e),this.audio.playCashChime(),this.audio.playRandomMeme(["haan_bhai_haan","ami_vala_na","hila_dala"],3,1.1),this.callbacks.onGarageChange(this.getGarageData()),{ok:!0})}biomeForChunkIndex(e){const t=e%11;return t<5?"city":t<8?"riverfront":"bridge"}buildInitialChunks(){for(const e of this.chunks)this.scene.remove(e.group);this.chunks=[],this.chunkCursorZ=24,this.chunkIndexCounter=0,this.lastAnnouncedBiome="city";for(let e=0;e<Hy;e++)this.spawnNextChunk()}spawnNextChunk(){const e=this.chunkCursorZ,t=e-Gt/2,n=this.chunkIndexCounter++,i=this.biomeForChunkIndex(n),r=new Ce,a=this.settings.gameMode==="rain",o=new J({map:this.textures.road,bumpMap:this.textures.roadBump,bumpScale:.06,roughnessMap:this.textures.roadRoughness,roughness:a?.3:.72,metalness:a?.28:.1,envMapIntensity:a?1.85:1.1}),l=new A(new Ht(tn*2,Gt),o);l.rotation.x=-Math.PI/2,l.position.set(0,0,t),l.receiveShadow=!0,r.add(l);const c=i==="city"&&n>0&&n%3===1;let h=null;if(c){const p=cy(this.textures);p.position.set(0,0,t),r.add(p),h=t}else{const p=new Le({color:16707722});for(let x=0;x<4;x++){const y=new A(new $(.2,.05,.36),p);y.position.set(0,.025,e-6-x*12),r.add(y)}}const u=new J({color:16317180,roughness:.55}),d=new J({color:1579035,roughness:.72});if(i!=="bridge")for(const p of[-1,1])for(let x=0;x<12;x++){const y=e-2-x*4,v=new A(new $(.32,.28,3.96),x%2===0?u:d);v.position.set(p*(tn+.16),.14,y),r.add(v)}const f=new J({map:this.textures.sidewalk,bumpMap:this.textures.sidewalkBump,bumpScale:.06,roughness:.92}),g=new J({color:6050375,roughness:1});let _=null;const m=[];if(i==="bridge"){const p=uy(Gt,this.waterMat,n%11===9,this.textures);p.position.set(0,0,t),r.add(p)}else if(i==="riverfront"){const p=new A(new $(5.6,.28,Gt),f);p.position.set(-tn-2.8,.14,t),p.receiveShadow=!0;const x=new A(new Ht(52,Gt),g);x.rotation.x=-Math.PI/2,x.position.set(-40,-.02,t),r.add(p,x);const y=bh(Gt,!1,this.textures);y.position.set(0,0,t),r.add(y);const v=new A(new $(4.2,.28,Gt),f);v.position.set(tn+2.1,.14,t),r.add(v);const I=dy(Gt,this.waterMat,this.textures);I.position.set(0,0,t),r.add(I);for(let R=0;R<2;R++){const T=ao(this.textures,n+R,n*3+R,-1);T.position.set(-18.4,0,e-12-R*24),r.add(T)}const C=oo(n%2===0,this.glbs);C.position.set(-11.8,.26,t),r.add(C);const S=ro(this.textures,4,1);if(S.position.set(11.4,0,t+6),r.add(S),n%2===1){const R=Mh(this.textures,-1);R.group.position.set(0,0,t),r.add(R.group),_={side:-1,worldX:-7.2,worldZ:t,wireWorldX:R.wireAnchorLocal.x,wireWorldY:R.wireAnchorLocal.y,wireWorldZ:t,zoneMesh:R.zoneMesh,usedThisPass:!1}}}else{const p=new A(new $(5.6,.28,Gt),f);p.position.set(-tn-2.8,.14,t),p.receiveShadow=!0;const x=p.clone();x.position.x=tn+2.8,r.add(p,x);const y=new A(new Ht(52,Gt),g);y.rotation.x=-Math.PI/2,y.position.set(-40,-.02,t);const v=y.clone();v.position.x=40,r.add(y,v);const I=bh(Gt,!0,this.textures);I.position.set(0,0,t),r.add(I);const C=ay(Gt);C.position.set(0,0,t),r.add(C);for(let k=0;k<3;k++){const G=e-8-k*16,Y=ao(this.textures,n+k,n*3+k,-1);Y.position.set(-18.2,0,G);const W=ao(this.textures,n+k+2,n*3+k+5,1);W.position.set(18.2,0,G),r.add(Y,W)}if(n%2===0){const k=ys(this.textures,6.8);k.position.set(12.2,.25,t+14),r.add(k)}const S=oo(n%2===0,this.glbs);S.position.set(-11.6,.26,t+11);const R=oo(n%2!==0,this.glbs);R.position.set(11.6,.26,t-10),r.add(S,R);const T=ro(this.textures,4,-1);T.position.set(-11.3,0,t-6);const M=ro(this.textures,4,1);if(M.position.set(11.3,0,t+8),r.add(T,M),n>0&&n%2===0){const k=ry(this.textures,Math.floor(n/2));k.position.set(0,0,t),r.add(k)}const D=Sh(this.textures,-1,n%2===0?0:2);D.position.set(-10.8,0,e-10);const z=Sh(this.textures,1,n%2===0?1:3);if(z.position.set(10.8,0,e-34),r.add(D,z),n>0&&n%2===1){const k=n%4===1?-1:1,G=Mh(this.textures,k);G.group.position.set(0,0,t),r.add(G.group),_={side:k,worldX:k*7.2,worldZ:t,wireWorldX:G.wireAnchorLocal.x,wireWorldY:G.wireAnchorLocal.y,wireWorldZ:t,zoneMesh:G.zoneMesh,usedThisPass:!1}}if(n>0){const k=["tea","fuchka","coconut"];for(let G=0;G<2;G++){const Y=(n+G)%2===0?-1:1;if(_&&_.side===Y)continue;const W=k[(n+G)%k.length],Q=sy(W,this.textures);Q.position.set(Y*8.3,0,e-12-G*22),r.add(Q),m.push({kind:W,mesh:Q,smashed:!1,velX:0,velY:0,velZ:0,spin:0,lossValue:W==="fuchka"?28e3:W==="tea"?24e3:19e3})}}}this.scene.add(r),this.chunks.push({group:r,zStart:e,biome:i,chargeSpot:_,uTurnZ:h,uTurnUsed:!1,stalls:m}),this.chunkCursorZ-=Gt}applyQuality(e){this.settings.quality=e;const t={low:.85,medium:1.05,max:1.25,ultra:1.5,ultra_max:2},n={low:1,medium:1.04,max:1.08,ultra:1.12,ultra_max:1.16},i=e==="max"||e==="ultra"||e==="ultra_max";this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,t[e]||1.25)),this.renderer.toneMappingExposure=n[e]||1.08,this.renderer.shadowMap.enabled=i,this.renderer.shadowMap.type=Ph;const r=this.scene?.userData?.sun;if(r){r.castShadow=i;const a=e==="ultra_max"?2048:1024;r.shadow.mapSize.width!==a&&(r.shadow.mapSize.width=a,r.shadow.mapSize.height=a,r.shadow.map?.dispose(),r.shadow.map=null)}}updateSettings(e){this.settings={...this.settings,...e},e.soundEnabled!==void 0&&this.audio.setSoundEnabled(e.soundEnabled),e.voiceEnabled!==void 0&&this.audio.setVoiceEnabled(e.voiceEnabled),e.quality!==void 0&&this.applyQuality(e.quality),e.gameMode!==void 0&&(this.applyGameModeAtmosphere(e.gameMode),this.phase==="menu"&&this.buildInitialChunks())}previewRandomMeme(){this.audio.unlock();const e=mn(dh);this.audio.playMemeClip(e.clip,3,1.05),this.emitTicker(e.bn,"meme")}startNewRun(){this.audio.unlock(),this.audio.stopActiveMeme(),this.clearDynamicEntities(),this.buildInitialChunks(),this.mountPlayerVehicle(this.garage.selected),this.refillTrafficDeck(),this.stats=this.freshStats(),this.playerX=-2.35,this.playerZ=0,this.playerVelX=0,this.speed=13.5,this.steerAngle=0,this.currentHoverY=this.player.baseHoverY,this.battery=100,this.isCharging=!1,this.chargeToastLock=0,this.chaos=0,this.chaosActive=!1,this.chaosTimeLeft=0,this.chaosShieldUsed=!1,this.mobRage=0,this.mobDistance=28,this.mobChasing=!1;for(const t of this.mobChasers)t.mesh.visible=!1;this.runCashTk=1e3,this.combo=0,this.comboTimer=0,this.soundBombTimer=0,this.wrongSideDuration=0,this.wrongSideMemePlayed=!1,this.sergeantAlertActive=!1,this.sergeantAlertTime=0,this.activeSergeant=null,this.nextTrafficZ=-36,this.nextPedZ=-56,this.nextMichilZ=this.settings.gameMode==="hardcore"?-80:-115,this.nextSergeantZ=-175,this.lastPlayerSide=-1,this.applyGameModeAtmosphere(this.settings.gameMode),this.shakeIntensity=0,this.crashSpinTimer=0,this.pendingSnapshot=!1,this.player.root.position.set(this.playerX,0,this.playerZ),this.player.root.rotation.set(0,0,0),this.player.bodyGroup.rotation.set(0,0,0),this.player.chaosAura.visible=!1,this.lightningLine.visible=!1,this.phase="playing",this.audio.playHorn();const e=this.audio.playRandomMeme(["poribesh_sundor","kaise_hain"],2,1);this.emitTicker(e==="poribesh_sundor"?`🛺 পরিবেশটা সুন্দর না? ${this.vehicleSpec.nameBn} নিয়ে তাণ্ডব শুরু!`:"🛺 ক্যায়সে হ্যায় আপ লোগ! ডানে রং সাইড (২× জাতীয় ক্ষতি)!","meme"),this.emitHud()}pauseGame(){this.phase==="playing"&&(this.phase="paused",this.emitHud())}resumeGame(){this.phase==="paused"&&(this.audio.unlock(),this.phase="playing",this.lastTimestamp=performance.now(),this.emitHud())}returnToMenu(){this.phase="menu",this.sergeantAlertActive=!1,this.lightningLine.visible=!1,this.audio.stopActiveMeme(),this.mountPlayerVehicle(this.garage.selected),this.emitHud()}setTouchSteer(e){this.touchSteer=Math.max(-1,Math.min(1,e))}setTouchSlow(e){this.touchSlow=e}setTouchGas(e){this.touchGas=e}triggerHorn(){if(this.phase==="playing"){this.audio.playHorn();for(const e of this.peds)!e.hit&&Math.abs(e.mesh.position.z-this.playerZ)<20&&(e.walkSpeed=Math.min(6.5,e.walkSpeed+1.8))}}triggerSoundBomb(){if(this.phase!=="playing"||this.soundBombTimer>0)return;this.audio.unlock();const e=mn(dh);this.soundBombTimer=Th,this.stats.soundBombsUsed++,this.battery=Math.max(4,this.battery-4),this.shakeIntensity=Math.max(this.shakeIntensity,.55),this.audio.playSoundBomb(e.clip),this.emitTicker(e.bn,"meme"),this.shockwaveRing.position.set(this.playerX,.25,this.playerZ),this.shockwaveRing.scale.set(1,1,1),this.shockwaveRing.visible=!0,this.shockwaveLife=.68,this.mobChasing&&(this.mobDistance=Math.min(30,this.mobDistance+12)),this.mobRage=Math.max(0,this.mobRage-20);for(const t of this.traffic){const n=Math.abs(t.mesh.position.z-this.playerZ),i=t.mesh.position.x-this.playerX;!t.smashed&&!t.lethal&&n<20&&Math.abs(i)<8.5&&(t.laneX=Math.max(-tn+1.5,Math.min(tn-1.5,t.laneX+(i>=0?2.2:-2.2))))}for(const t of this.peds)!t.hit&&Math.abs(t.mesh.position.z-this.playerZ)<19&&(t.dirX=t.mesh.position.x>=this.playerX?1:-1,t.walkSpeed=7.8);this.sergeantAlertActive&&(this.sergeantAlertActive=!1,this.activeSergeant&&(this.activeSergeant.resolved=!0),this.activeSergeant=null,this.emitTicker("🔊 সাউন্ড বম্বে সার্জেন্ট চমকে গেছে — মামা চম্পট!","sergeant")),this.addChaos(13),this.emitHud()}triggerChaosMode(){if(this.phase!=="playing"||this.chaosActive||this.chaos<100)return;this.chaosActive=!0,this.chaosTimeLeft=Eh,this.chaos=100,this.chaosShieldUsed=!1,this.stats.chaosActivations++,this.player.chaosAura.visible=!0,this.shakeIntensity=.72,this.sergeantAlertActive&&(this.sergeantAlertActive=!1,this.activeSergeant&&(this.activeSergeant.resolved=!0),this.activeSergeant=null),this.audio.playChaosStart();const e=this.vehicleSpec.id==="flying_car"?"🛸 ফ্লাইং মোড অ্যাক্টিভ! এখন বাসের ওপর দিয়ে উড়ে চলবে!":"⚡ ক্যাওস মোড! ৩× জাতীয় ক্ষতি + আনলিমিটেড ব্যাটারি!";this.emitTicker(e,"chaos"),this.emitHud()}triggerPayTeaMoney(){if(this.phase!=="playing"||!this.sergeantAlertActive)return;if(this.runCashTk<this.sergeantBribeCost){this.audio.playMemeClip("gajab_beijjati",2,1),this.emitTicker("💸 চায়ের টাকা কম — সাউন্ড বম্ব মারো!","warn");return}this.runCashTk-=this.sergeantBribeCost,this.stats.bribesPaid++,this.stats.bribeTotalTk+=this.sergeantBribeCost,this.sergeantAlertActive=!1,this.activeSergeant&&(this.activeSergeant.resolved=!0),this.activeSergeant=null,this.mobRage=Math.max(0,this.mobRage-30),this.mobDistance=Math.min(28,this.mobDistance+8),this.audio.playCashChime();const e=this.audio.playRandomMeme(["acchi_baat","dhele_dei"],3,1.08);this.emitTicker(e==="dhele_dei"?'☕ চায়ের টাকা ঢেলে দেওয়া হয়েছে — সার্জেন্ট: "ঢেলে দেই?!"':'☕ চায়ের টাকা পরিশোধ — সার্জেন্ট: "বড়ি আচ্ছি বাত কাহি!"',"sergeant"),this.emitHud()}clearDynamicEntities(){for(const e of this.traffic)this.scene.remove(e.mesh);this.traffic=[];for(const e of this.peds)this.scene.remove(e.mesh);this.peds=[];for(const e of this.michils)this.scene.remove(e.mesh);this.michils=[];for(const e of this.sergeants)this.scene.remove(e.mesh);this.sergeants=[];for(const e of this.particles)this.scene.remove(e.mesh);this.particles=[]}bindEvents(){window.addEventListener("resize",this.handleResize),window.addEventListener("keydown",this.handleKeyDown),window.addEventListener("keyup",this.handleKeyUp)}dispose(){cancelAnimationFrame(this.animId),window.removeEventListener("resize",this.handleResize),window.removeEventListener("keydown",this.handleKeyDown),window.removeEventListener("keyup",this.handleKeyUp),this.glbs.dispose(),this.renderer.dispose()}updateMenuShowcase(e){this.speed=11.5,this.playerZ-=this.speed*e,this.playerX=-2.35+Math.sin(this.playerZ*.04)*1.4,this.player.root.position.set(this.playerX,0,this.playerZ);const t=this.player.baseHoverY>0?this.player.baseHoverY+Math.sin(performance.now()*.005)*.14:0;this.player.bodyGroup.position.y=t,this.player.bodyGroup.rotation.z=-Math.cos(this.playerZ*.04)*.08;for(const n of this.player.wheels)n.rotation.x-=this.speed*e*2.2;this.recycleChunks(),this.updateSkyAndMetro(e),this.updateRain(e),this.camera.position.set(this.playerX*.65+2.8,3.6+t*.4,this.playerZ+7.6),this.camera.lookAt(this.playerX,1.3+t*.5,this.playerZ-5),this.audio.updateContinuous(0,!1,!1,!1,this.vehicleSpec.engineType,e)}updateGameOverIdle(e){this.crashSpinTimer+=e,this.updateParticles(e),this.updateSmashedEntities(e),this.updateSkyAndMetro(e);const t=this.crashSpinTimer*.42;this.camera.position.set(this.playerX+Math.sin(t)*9.5,5.2,this.playerZ+Math.cos(t)*9.5),this.camera.lookAt(this.playerX,1.5,this.playerZ),this.audio.updateContinuous(0,!1,!1,!1,this.vehicleSpec.engineType,e)}getCurrentBiome(){for(const e of this.chunks)if(this.playerZ<=e.zStart&&this.playerZ>=e.zStart-Gt)return e.biome;return"city"}updatePlaying(e){this.stats.survivalSeconds+=e,this.soundBombTimer>0&&(this.soundBombTimer=Math.max(0,this.soundBombTimer-e)),this.chargeToastLock>0&&(this.chargeToastLock-=e),this.comboTimer>0&&(this.comboTimer-=e/4.2,this.comboTimer<=0&&(this.comboTimer=0,this.combo=0));const t=this.getCurrentBiome();if(t!==this.lastAnnouncedBiome&&(this.lastAnnouncedBiome=t,t==="riverfront"?this.emitTicker("🌊 হাতিরঝিল / নদীর পাড় — নৌকা ও সোনালি রোদ!","biome"):t==="bridge"?this.emitTicker("🌉 পদ্মা / হাতিরঝিল সেতু ব্রিজ — ফুল স্পিড!","biome"):this.emitTicker("🏙️ ব্যস্ত ঢাকা মেইন রোড — সাবধানে কাটিং!","biome")),this.chaosActive){this.chaosTimeLeft-=e,this.chaos=Math.max(0,this.chaosTimeLeft/Eh*100);const x=performance.now()*.0024%1;this.player.chaosAura.material.color.setHSL(x,1,.55),this.player.chaosAura.rotation.z+=e*4.2,this.chaosTimeLeft<=0&&(this.chaosActive=!1,this.chaos=0,this.player.chaosAura.visible=!1,this.emitTicker("ক্যাওস মোড শেষ — আবার সাবধানে চালাও!","meme"))}let n=this.touchSteer;(this.keys.has("ArrowLeft")||this.keys.has("KeyA"))&&(n-=1),(this.keys.has("ArrowRight")||this.keys.has("KeyD"))&&(n+=1),n=Math.max(-1,Math.min(1,n));const i=this.touchSlow||this.keys.has("ArrowDown")||this.keys.has("KeyS"),r=this.settings.autoGas||this.touchGas||this.keys.has("ArrowUp")||this.keys.has("KeyW");this.player.tailLightMat.color.setHex(i?16729156:12259601);const a=this.chaosActive?this.vehicleSpec.chaosSpeedMs:this.vehicleSpec.maxSpeedMs,o=this.isCharging?4.2:5.4,l=this.chaosActive?16:8.2;if(this.battery<=0&&!this.chaosActive){if(this.speed=Math.max(0,this.speed-11.5*e),this.speed<=.35){this.triggerGameOver("battery","ব্যাটারি ০% — রাস্তার মাঝখানে অচল");return}}else if(i)this.speed=Math.max(o,this.speed-12.2*e);else if(r){const x=Math.min(3.8,this.stats.distanceMeters*.0022);this.speed=Math.min(a+x,this.speed+l*e)}else this.speed=Math.max(o,this.speed-3.6*e);const c=this.vehicleSpec.steerSpeed*(this.chaosActive?1.18:1),h=n*c;this.playerVelX+=(h-this.playerVelX)*Math.min(1,e*12),this.playerX+=this.playerVelX*e;const u=tn-.55;this.playerX<-u?(this.playerX=-u,this.playerVelX=Math.max(0,this.playerVelX*-.2)):this.playerX>u&&(this.playerX=u,this.playerVelX=Math.min(0,this.playerVelX*-.2));const d=this.speed*e;this.playerZ-=d,this.stats.distanceMeters+=d;const f=this.speed*3.6;if(f>this.stats.topSpeedKmh&&(this.stats.topSpeedKmh=f),this.playerX>.7){this.stats.wrongSideMeters+=d,this.wrongSideDuration+=e,!this.wrongSideMemePlayed&&this.wrongSideDuration>2.4&&(this.wrongSideMemePlayed=!0,this.audio.playRandomMeme(["raha_nahi_jata","bahut_tez"],1,.95)),this.chaosActive||this.addChaos(e*3.8);const x=d*(this.chaosActive?95:35)*this.vehicleSpec.lossMultiplier;this.stats.nationalLoss+=x}else this.wrongSideDuration=0,this.wrongSideMemePlayed=!1;const _=this.player.baseHoverY>0?(this.chaosActive?3.2:this.player.baseHoverY)+Math.sin(performance.now()*.006)*.14:0;this.currentHoverY+=(_-this.currentHoverY)*Math.min(1,e*6);for(const x of this.player.hoverJets){const y=.85+Math.sin(performance.now()*.025)*.25;x.scale.setScalar(y)}if(this.dustAccum+=e,this.speed>10&&this.dustAccum>.08&&this.particles.length<75){this.dustAccum=0;const x=this.player.baseHoverY>0?2282478:14071954;this.spawnDustPuff(this.playerX+(Math.random()>.5?.72:-.72),this.player.baseHoverY>0?this.currentHoverY+.2:.14,this.playerZ+1.3,x)}this.steerAngle+=(n*.42-this.steerAngle)*Math.min(1,e*14),this.player.root.position.set(this.playerX,0,this.playerZ),this.player.root.rotation.y=-this.playerVelX*.022;const m=this.vehicleSpec.id==="ninja_h2r"||this.vehicleSpec.id==="street_cruiser",p=this.playerVelX*(m?-.032:.024);this.player.bodyGroup.rotation.z+=(p-this.player.bodyGroup.rotation.z)*Math.min(1,e*10),this.player.bodyGroup.position.y=this.currentHoverY+(this.player.baseHoverY>0?0:Math.sin(this.playerZ*2.4)*.022),this.player.frontFork&&(this.player.frontFork.rotation.y=-this.steerAngle),this.player.driverHead&&(this.player.driverHead.rotation.y=-this.steerAngle*.65);for(const x of this.player.wheels)x.rotation.x-=d*2.4;if(this.player.batteryGlowMat)if(this.isCharging)this.player.batteryGlowMat.color.setHex(3718648),this.player.batteryGlowMat.emissive.setHex(3718648);else if(this.battery<22){const x=Math.sin(performance.now()*.018)>0;this.player.batteryGlowMat.color.setHex(x?15680580:8330525),this.player.batteryGlowMat.emissive.setHex(x?15680580:4524554)}else this.battery<50?(this.player.batteryGlowMat.color.setHex(16436245),this.player.batteryGlowMat.emissive.setHex(13273604)):(this.player.batteryGlowMat.color.setHex(2278750),this.player.batteryGlowMat.emissive.setHex(1483594));if(this.recycleChunks(),this.spawnAheadEntities(),this.updateIllegalCharging(e),this.updateUTurnDrifts(),!this.isCharging&&!this.chaosActive&&this.settings.gameMode!=="freeroam"){const x=(2.15+this.speed/20*1.05)*this.vehicleSpec.batteryDrainMult*e;this.battery=Math.max(0,this.battery-x)}else this.settings.gameMode==="freeroam"&&(this.battery=100);this.updateTrafficAndCollisions(e)||(this.updateStallCollisions(e),this.updatePedestrians(e),this.updateMichils(e),!this.updateSergeants(e)&&(this.updateAngryMob(e)||(this.updateRain(e),this.updateParticles(e),this.updateShockwave(e),this.updateSkyAndMetro(e),this.updateCamera(e),this.audio.updateContinuous(this.speed/this.vehicleSpec.maxSpeedMs,!0,this.isCharging,this.chaosActive,this.vehicleSpec.engineType,e),this.hudEmitAccum+=e,this.hudEmitAccum>=.05&&(this.hudEmitAccum=0,this.emitHud()))))}recycleChunks(){for(;this.chunks.length>0&&this.chunks[0].zStart-Gt>this.playerZ+32;){const e=this.chunks.shift();this.scene.remove(e.group),this.spawnNextChunk()}}refillTrafficDeck(){this.trafficDeck=[...Fy];for(let e=this.trafficDeck.length-1;e>0;e--){const t=Math.floor(Math.random()*(e+1));[this.trafficDeck[e],this.trafficDeck[t]]=[this.trafficDeck[t],this.trafficDeck[e]]}}drawNextTrafficVariant(){return this.trafficDeck.length===0&&this.refillTrafficDeck(),this.trafficDeck.pop()}spawnAheadEntities(){for(;this.nextTrafficZ>this.playerZ-195;){const e=this.nextTrafficZ;this.spawnTrafficWave(e);const t=Math.min(7,this.stats.distanceMeters*.004),n=this.settings.gameMode==="hardcore"?4:0;this.nextTrafficZ-=Math.max(11,18+Math.random()*14-t-n)}for(;this.nextMichilZ>this.playerZ-185;){const e=this.chunks.find(t=>this.nextMichilZ<=t.zStart&&this.nextMichilZ>=t.zStart-Gt);if(!e||e.biome!=="bridge"){const t=Math.random()<.55?-6.4:6.4,n=Math.floor(Math.random()*3),i=hy(this.textures,n);i.position.set(t,0,this.nextMichilZ),i.rotation.y=t>0?Math.PI:0,this.scene.add(i),this.michils.push({mesh:i,laneX:t,worldZ:this.nextMichilZ,speed:t>0?3.2:-2.8,hit:!1,nearMissed:!1,phase:Math.random()*6,velX:0,velY:0,velZ:0,spin:0})}this.nextMichilZ-=this.settings.gameMode==="hardcore"?88+Math.random()*45:135+Math.random()*75}for(;this.nextPedZ>this.playerZ-165;){const e=this.chunks.find(t=>this.nextPedZ<=t.zStart&&this.nextPedZ>=t.zStart-Gt);if(!e||e.biome!=="bridge"){const t=rr(this.textures,"random"),n=Math.random()>.5;t.position.set(n?-9.7:9.7,0,this.nextPedZ),t.rotation.y=n?-Math.PI/2:Math.PI/2,this.scene.add(t),this.peds.push({mesh:t,dirX:n?1:-1,walkSpeed:2.2+Math.random()*1.8,hit:!1,velX:0,velY:0,velZ:0,spin:0,bobPhase:Math.random()*6})}this.nextPedZ-=26+Math.random()*24}for(;this.nextSergeantZ>this.playerZ-180;){const e=iy(this.textures),t=Math.random(),n=t<.45?0:t<.72?-8.5:8.5;e.position.set(n,0,this.nextSergeantZ),this.scene.add(e),this.sergeants.push({mesh:e,worldX:n,worldZ:this.nextSergeantZ,triggered:!1,resolved:!1}),this.nextSergeantZ-=155+Math.random()*85}}spawnTrafficWave(e){const t=[...Fv],n=Math.random()<.5?2:1;let i=0;for(let r=0;r<n;r++){const a=Math.floor(Math.random()*t.length),o=t.splice(a,1)[0],l=o>0;if(!this.traffic.some(c=>Math.abs(c.mesh.position.z-e)<16&&Math.abs(c.laneX-o)<1.5))if(i===0&&Math.random()<(l?.26:.14))this.spawnHeavyVehicle(Math.random()<.64?"bus":"truck",o,e+(Math.random()-.5)*4,l),i++;else{const c=this.drawNextTrafficVariant();this.spawnUniqueTrafficVariant(c,o,e+(Math.random()-.5)*5,l)}}}spawnHeavyVehicle(e,t,n,i){const r=Math.floor(Math.random()*fh.length);let a,o,l=4.75;if(e==="bus")a=Vx(this.textures,r),o=fh[r];else{const c=Math.random();if(c<.34)a=Ct("k_garbage_truck",this.textures,this.glbs,()=>so(this.textures)),o="সিটি কর্পোরেশন ময়লার গাড়ি",l=3.7;else if(c<.65){const h=Math.random()<.5?"k_truck":"k_truck_flat";a=Ct(h,this.textures,this.glbs,()=>so(this.textures)),o=h==="k_truck_flat"?"রড-সিমেন্ট ফ্ল্যাট ট্রাক":"হেভি কার্গো ট্রাক",l=3.65}else a=so(this.textures),o="মালবাহী ট্রাক",l=4.4}a.position.set(t,0,n),a.rotation.y=i?Math.PI:0,this.scene.add(a),this.traffic.push({kind:e,name:o,mesh:a,laneX:t,speed:i?e==="bus"?13.5:11.5:e==="bus"?-8.2:-7,oncoming:i,halfW:1.32,halfL:l,lethal:!0,smashed:!1,nearMissed:!1,honked:!1,velX:0,velY:0,velZ:0,spinY:0,spinX:0,lossValue:0})}spawnUniqueTrafficVariant(e,t,n,i){let r,a="car",o=.95,l=2.1,c=10.5,h=32e3,u="প্রাইভেট কার";switch(e){case"k_tractor":r=Ct("k_tractor",this.textures,this.glbs,()=>Si(14427686,this.textures)),u="বাংলাদেশী ট্র্যাক্টর",o=1.05,l=2,c=i?8.2:6.6,h=34e3;break;case"k_tractor_shovel":r=Ct("k_tractor_shovel",this.textures,this.glbs,()=>Si(15357964,this.textures)),u="মাটি কাটার ট্র্যাক্টর",o=1.08,l=2.2,c=i?7.8:6.2,h=38e3;break;case"k_sedan":r=Ct("k_sedan",this.textures,this.glbs,()=>Fs(16317180,this.textures),mn([16317180,1976635,9741240,2450411])),u="টয়োটা অ্যালিয়ন",c=i?12.6:9.8,h=35e3;break;case"k_sedan_sports":r=Ct("k_sedan_sports",this.textures,this.glbs,()=>Fs(12131356,this.textures),mn([12131356,1579035,959977])),u="হোন্ডা সিভিক স্পোর্টস",c=i?13.4:10.6,h=42e3;break;case"k_hatchback":r=Ct("k_hatchback",this.textures,this.glbs,()=>Fs(3718648,this.textures),mn([3718648,1096065,16096779,14753096])),u="টয়োটা অ্যাকুয়া",l=1.92,c=i?12.2:9.4,h=33e3;break;case"k_suv":r=Ct("k_suv",this.textures,this.glbs,()=>Si(988970,this.textures),mn([988970,14870768,1467700])),u="পাজেরো / প্রাডো জিপ",o=1.04,l=2.28,c=i?12.6:9.8,h=46e3;break;case"k_suv_luxury":r=Ct("k_suv_luxury",this.textures,this.glbs,()=>Si(1579035,this.textures),mn([1579035,16317180])),u="ভিআইপি ল্যান্ড ক্রুজার",o=1.08,l=2.38,c=i?13:10.2,h=54e3;break;case"k_taxi":r=Ct("k_taxi",this.textures,this.glbs,()=>Fs(16436245,this.textures)),u="ঢাকা হলুদ ট্যাক্সি",c=i?12:9.4,h=32e3;break;case"k_police":r=Ct("k_police",this.textures,this.glbs,()=>Si(1981066,this.textures)),u="ডিএমপি পুলিশ ভ্যান",c=i?13:10.2,h=45e3;break;case"k_ambulance":r=Ct("k_ambulance",this.textures,this.glbs,()=>Ws(this.textures)),u="ঢাকা অ্যাম্বুলেন্স",o=1.04,l=2.55,c=i?13.8:10.8,h=42e3;break;case"k_van":r=Ct("k_van",this.textures,this.glbs,()=>Ws(this.textures)),u="হাইয়েস মাইক্রোবাস",o=.98,l=2.4,c=i?11.8:9,h=38e3;break;case"k_delivery":r=Ct("k_delivery",this.textures,this.glbs,()=>Ws(this.textures)),u="কুরিয়ার কাভার্ড ভ্যান",o=1.05,l=2.65,c=i?10.6:8.4,h=39e3;break;case"k_delivery_flat":r=Ct("k_delivery_flat",this.textures,this.glbs,()=>Si(165063,this.textures)),u="মিনি পিকআপ ট্রাক",o=1.02,l=2.5,c=i?10.8:8.6,h=36e3;break;case"k_race":r=Ct("k_race",this.textures,this.glbs,()=>Fs(15357964,this.textures)),u="গুলশান স্পোর্টস কার",c=i?14.5:11.8,h=58e3;break;case"pickup_green":case"pickup_red":case"pickup_yellow":case"pickup_purple":r=Ct(e,this.textures,this.glbs,()=>Si(2450411,this.textures)),u="পিকআপ ভ্যান",o=.98,l=2.1,c=i?11.5:9,h=34e3;break;case"delivery_van":r=Ct("delivery_van",this.textures,this.glbs,()=>Ws(this.textures)),u="ডেলিভারি ভ্যান",o=1.05,l=2.45,c=i?10.5:8.2,h=36e3;break;case"cng":r=Fu(this.textures),a="cng",u="সিএনজি অটো",o=.75,l=1.32,c=i?10.2:8.4,h=24e3;break;case"moto_street":r=Ct("moto_street",this.textures,this.glbs,()=>io(this.textures)),a="bike",u="স্ট্রিট বাইক",o=.45,l=1.05,c=i?13.4:11,h=18e3;break;case"moto_superbike":r=Ct("superbike",this.textures,this.glbs,()=>io(this.textures),mn([14427686,2450411,16096779])),a="bike",u="স্পোর্টস বাইক",o=.46,l=1.1,c=i?14.8:12.2,h=25e3;break;case"delivery_scooter":r=io(this.textures),a="bike",u="ফুড ডেলিভারি স্কুটার",o=.44,l=.98,c=i?11.2:9.2,h=17e3;break;case"rickshaw":r=Gx(this.textures),a="rickshaw",u="প্যাডেল রিকশা",o=.68,l=1.15,c=i?5.6:4.8,h=13e3;break}r.position.set(t,0,n),r.rotation.y=i?Math.PI:0,this.scene.add(r),this.traffic.push({kind:a,name:u,mesh:r,laneX:t,speed:i?c:-c,oncoming:i,halfW:o,halfL:l,lethal:!1,smashed:!1,nearMissed:!1,honked:!1,velX:0,velY:0,velZ:0,spinY:0,spinX:0,lossValue:h})}updateIllegalCharging(e){let t=null;for(const n of this.chunks){const i=n.chargeSpot;if(!i)continue;const r=.75+Math.sin(performance.now()*.008)*.22;i.zoneMesh.material.opacity=r,Math.abs(this.playerX-i.worldX)<2.3&&Math.abs(this.playerZ-i.worldZ)<5.1&&(t=i)}if(t){this.isCharging=!0,t.usedThisPass||(t.usedThisPass=!0,this.stats.chargeHookups++,this.chargeToastLock<=0&&(this.chargeToastLock=3.2,this.audio.playRandomMeme(["ye_kya_hai","raha_nahi_jata"],2,.95),this.emitTicker("⚡ হলুদ দাগে অবৈধ হুক লাগানো হয়েছে — ফ্রি চার্জ!","charge")));const n=this.speed<10?1.4:.9;this.battery=Math.min(100,this.battery+36*n*e);const i=1500*e;this.stats.illegalPowerStolenTk+=i,this.stats.nationalLoss+=i;const r=new L(t.wireWorldX,t.wireWorldY,t.wireWorldZ),a=new L(this.playerX+this.player.roofHookPoint.x,this.currentHoverY+this.player.roofHookPoint.y,this.playerZ+this.player.roofHookPoint.z),o=this.lightningGeo.getAttribute("position");for(let l=0;l<8;l++){const c=l/7,h=zs.lerp(r.x,a.x,c)+(l>0&&l<7?(Math.random()-.5)*.48:0),u=zs.lerp(r.y,a.y,c)+(l>0&&l<7?(Math.random()-.5)*.48:0),d=zs.lerp(r.z,a.z,c)+(l>0&&l<7?(Math.random()-.5)*.48:0);o.setXYZ(l,h,u,d)}o.needsUpdate=!0,this.lightningLine.visible=!0,this.lightningLine.material.color.setHex(Math.random()>.5?3718648:16707722),Math.random()<.45&&this.spawnDebris(a.x,a.y,a.z,16707722,2)}else this.isCharging=!1,this.lightningLine.visible=!1}updateTrafficAndCollisions(e){const t=this.vehicleSpec.id==="ninja_h2r"||this.vehicleSpec.id==="street_cruiser"?.46:this.vehicleSpec.id==="bd_tractor"?.94:.8,n=this.vehicleSpec.id==="cybertruck"||this.vehicleSpec.id==="lamborghini"||this.vehicleSpec.id==="flying_car"?2.1:this.vehicleSpec.id==="bd_tractor"||this.vehicleSpec.id==="dhaka_leguna"?1.85:1.3;for(let i=this.traffic.length-1;i>=0;i--){const r=this.traffic[i];if(r.smashed)r.mesh.position.x+=r.velX*e,r.mesh.position.y=Math.max(0,r.mesh.position.y+r.velY*e),r.mesh.position.z+=r.velZ*e,r.velY-=18*e,r.mesh.rotation.y+=r.spinY*e,r.mesh.rotation.x+=r.spinX*e;else{r.mesh.position.z+=r.speed*e,r.mesh.position.x+=(r.laneX-r.mesh.position.x)*Math.min(1,e*4);const a=this.playerZ-r.mesh.position.z;r.lethal&&r.oncoming&&!r.honked&&a>8&&a<58&&Math.abs(r.mesh.position.x-this.playerX)<3.4&&(r.honked=!0,this.audio.playBusHorn());const o=Math.abs(r.mesh.position.x-this.playerX),l=Math.abs(r.mesh.position.z-this.playerZ),c=this.currentHoverY>2.4;if(!c&&o<r.halfW+t&&l<r.halfL+n)if(r.lethal)if(this.settings.gameMode==="freeroam"||this.chaosActive&&!this.chaosShieldUsed)this.chaosActive&&this.settings.gameMode!=="freeroam"&&(this.chaosShieldUsed=!0),this.playerVelX=this.playerX<r.mesh.position.x?-15:15,this.shakeIntensity=.85,this.audio.playCrash(!0),this.audio.playMemeClip("are_maiya",3,1),this.spawnDebris(this.playerX,1.2,this.playerZ,16436245,16),this.emitTicker(this.settings.gameMode==="freeroam"?"🛞 ফ্রি রোম সেফটি! বাসের ধাক্কা সামলে নিলেন!":"🛡️ ক্যাওস শিল্ডে বাসের ধাক্কা সামলে নিলেন!","chaos"),r.nearMissed=!0;else return this.audio.playCrash(!0),this.shakeIntensity=1.4,this.spawnDebris(this.playerX,1.3,this.playerZ,15680580,24),this.spawnDebris(this.playerX,1.1,this.playerZ,16436245,16),this.triggerGameOver(r.kind==="bus"?"bus":"truck",r.name),!0;else{r.smashed=!0;const h=r.mesh.position.x>=this.playerX?1:-1,u=this.vehicleSpec.smashMass;if(r.velX=h*(10+Math.random()*7)*Math.min(1.6,u),r.velY=5.5+Math.random()*3.8,r.velZ=-this.speed*.68,r.spinY=h*(5+Math.random()*5),r.spinX=(Math.random()-.5)*4,!this.chaosActive){const _=Math.min(.96,.84+(u-1)*.08);this.speed=Math.max(7.5,this.speed*_),this.playerVelX-=h*(4.8/Math.max(1,u))}this.shakeIntensity=Math.max(this.shakeIntensity,.48),this.audio.playCrash(!1);const d=["abe_saale","kaun_bhauk","kya_bola","wheeze_laugh","kaisi_lagi_swad","banjo_laugh"];this.audio.playRandomMeme(d,1,.95),this.spawnDebris(r.mesh.position.x,1,r.mesh.position.z,16347926,12),r.kind==="car"?this.stats.carsHit++:r.kind==="cng"?this.stats.cngsHit++:r.kind==="bike"?this.stats.bikesHit++:r.kind==="rickshaw"&&this.stats.rickshawsHit++;const f=this.registerNationalLoss(r.lossValue);this.addMobRage(r.kind==="car"?14:10),this.addChaos(14);const g=r.kind;this.emitTicker(`💥 ${r.name} +${Pt(f)} — ${mn(Ja[g])}`,"loss")}else if(r.lethal&&!r.nearMissed&&r.mesh.position.z>this.playerZ+1.5&&r.mesh.position.z<this.playerZ+9&&o<r.halfW+t+1.9){r.nearMissed=!0,this.stats.nearMisses++;const h=this.registerNationalLoss(18e3);this.addChaos(19),this.audio.playNearMiss(),this.audio.playRandomMeme(["bahut_tez","are_maiya"],2,.95),this.emitTicker(c?`🛸 বাসের ওপর দিয়ে ফ্লাই-ওভার! +${Pt(h)}`:`😱 কানের পাশ দিয়ে! +${Pt(h)} — বহুত তেজ হো রহে হো!`,"nearmiss")}}(r.mesh.position.z>this.playerZ+38||r.mesh.position.z<this.playerZ-260)&&(this.scene.remove(r.mesh),this.traffic.splice(i,1))}return!1}updateStallCollisions(e){for(const t of this.chunks)for(const n of t.stalls){if(n.smashed){n.mesh.position.x+=n.velX*e,n.mesh.position.y=Math.max(0,n.mesh.position.y+n.velY*e),n.mesh.position.z+=n.velZ*e,n.velY-=16*e,n.mesh.rotation.z+=n.spin*e,n.mesh.rotation.x+=n.spin*.7*e;continue}const i=Math.abs(n.mesh.position.x-this.playerX),r=Math.abs(n.mesh.position.z-this.playerZ);if(i<2&&r<2.2){n.smashed=!0;const a=n.mesh.position.x>=this.playerX?1:-1;n.velX=a*11,n.velY=8.4,n.velZ=-this.speed*.85,n.spin=a*7,this.stats.stallsSmashed++;const o=this.registerNationalLoss(n.lossValue);this.addMobRage(18),this.addChaos(18),this.shakeIntensity=Math.max(this.shakeIntensity,.58),this.audio.playCrash(!1),this.audio.playMemeClip(n.kind==="tea"?"dhele_dei":"wheeze_laugh",2,1.05),this.spawnDebris(n.mesh.position.x,1.1,n.mesh.position.z,9584654,14),this.spawnDebris(n.mesh.position.x,1.3,n.mesh.position.z,16707722,8),this.emitTicker(`🫖 +${Pt(o)} — ${mn(Ja.stall)}`,"loss")}}}updatePedestrians(e){for(let t=this.peds.length-1;t>=0;t--){const n=this.peds[t];if(n.hit)n.mesh.position.x+=n.velX*e,n.mesh.position.y=Math.max(0,n.mesh.position.y+n.velY*e),n.mesh.position.z+=n.velZ*e,n.velY-=19*e,n.mesh.rotation.x+=n.spin*e,n.mesh.rotation.z+=n.spin*.8*e;else{n.mesh.position.x+=n.dirX*n.walkSpeed*e,n.bobPhase+=e*10,n.mesh.position.y=Math.abs(Math.sin(n.bobPhase))*.1;const i=n.mesh.userData.legL,r=n.mesh.userData.legR;i&&r&&(i.rotation.x=Math.sin(n.bobPhase)*.48,r.rotation.x=-Math.sin(n.bobPhase)*.48),n.mesh.position.x>10.4?(n.dirX=-1,n.mesh.rotation.y=Math.PI/2):n.mesh.position.x<-10.4&&(n.dirX=1,n.mesh.rotation.y=-Math.PI/2);const a=Math.abs(n.mesh.position.x-this.playerX),o=Math.abs(n.mesh.position.z-this.playerZ);if(this.currentHoverY<1.8&&a<1.15&&o<1.5){n.hit=!0;const l=n.mesh.position.x>=this.playerX?1:-1;n.velX=l*(9+Math.random()*5),n.velY=8.5,n.velZ=-this.speed*.5,n.spin=l*11,this.stats.pedestriansBumped++;const c=this.registerNationalLoss(14e3);this.addMobRage(24),this.addChaos(10),this.shakeIntensity=Math.max(this.shakeIntensity,.38),this.audio.playCrash(!1),this.audio.playRandomMeme(["kaun_bhauk","kya_bola","abe_saale"],1,.95),this.spawnDebris(n.mesh.position.x,1,n.mesh.position.z,16707722,8),this.emitTicker(`👟 +${Pt(c)} — ${mn(Ja.ped)}`,"warn")}}n.mesh.position.z>this.playerZ+28&&(this.scene.remove(n.mesh),this.peds.splice(t,1))}}updateSergeants(e){for(let t=this.sergeants.length-1;t>=0;t--){const n=this.sergeants[t],i=n.mesh.userData.ring;if(i){const r=Math.sin(performance.now()*.014)>0;i.material.color.setHex(r?3718648:15680580)}if(!n.triggered){const r=Math.abs(n.worldX-this.playerX);Math.abs(n.worldZ-this.playerZ)<9.5&&r<5.8&&(n.triggered=!0,this.chaosActive?(n.resolved=!0,this.emitTicker("👮 সার্জেন্ট ক্যাওস দেখে স্যালুট দিয়ে সরে গেল!","sergeant")):(this.sergeantAlertActive=!0,this.sergeantAlertMaxTime=3.8,this.sergeantAlertTime=this.sergeantAlertMaxTime,this.sergeantBribeCost=hh,this.activeSergeant=n,this.audio.playWhistle(),this.audio.playRandomMeme(["ruk_ja","ruko_zara"],2,1.05),this.emitTicker('👮 সার্জেন্ট ধরছে! দ্রুত "চায়ের টাকা" (৳৫০০) দাও বা সাউন্ড বম্ব মারো!',"sergeant")))}n.worldZ>this.playerZ+32&&(this.scene.remove(n.mesh),this.sergeants.splice(t,1))}return this.sergeantAlertActive&&(this.sergeantAlertTime-=e,this.sergeantAlertTime<=0)?(this.sergeantAlertActive=!1,this.audio.playWhistle(),this.triggerGameOver("sergeant","চায়ের টাকা না দেওয়ায় মামলা ও ডাম্পিং"),!0):!1}updateAngryMob(e){if(this.speed>13.5&&this.mobRage>0&&(this.mobRage=Math.max(0,this.mobRage-e*3.2)),this.mobRage>=25)this.mobChasing||(this.mobChasing=!0,this.mobDistance=21,this.audio.playRandomMeme(["shutiye_lal","public_marattok"],2,1.1),this.emitTicker('😡 পাবলিক ক্ষেপে গেছে — "শুঁটিয়ে লাল করে দেবো!" স্পিড বাড়াও!',"warn"));else if(this.mobChasing&&this.mobRage<12){this.mobChasing=!1,this.mobDistance=28;for(const t of this.mobChasers)t.mesh.visible=!1}if(this.mobChasing){const t=11.4+this.mobRage/100*5.2,n=(this.speed-t)*e*.9;this.mobDistance=Math.min(28,Math.max(0,this.mobDistance+n));const i=Math.min(this.mobChasers.length,2+Math.floor(this.mobRage/22));for(let r=0;r<this.mobChasers.length;r++){const a=this.mobChasers[r];if(a.mesh.visible=r<i,!a.mesh.visible)continue;a.phase+=e*15;const o=zs.clamp(this.playerX+a.offsetX,-tn+.6,tn-.6);a.mesh.position.set(o,Math.abs(Math.sin(a.phase))*.22,this.playerZ+this.mobDistance+a.offsetZ),a.mesh.rotation.y=0;const l=a.mesh.userData.armL,c=a.mesh.userData.armR,h=a.mesh.userData.legL,u=a.mesh.userData.legR;l&&c&&(l.rotation.x=-2.4+Math.sin(a.phase)*.45,c.rotation.x=-2.4-Math.sin(a.phase)*.45),h&&u&&(h.rotation.x=Math.sin(a.phase)*.6,u.rotation.x=-Math.sin(a.phase)*.6)}if(this.mobDistance<=2.35&&!this.chaosActive&&this.currentHoverY<1.8)return this.audio.playDholaiSlap(),this.shakeIntensity=1.3,this.spawnDebris(this.playerX,1.5,this.playerZ,16707722,24),this.spawnDebris(this.playerX,1.2,this.playerZ,14427686,16),this.triggerGameOver("mob","উত্তেজিত জনতার পাবলিক ধোলাই"),!0}return!1}updateSmashedEntities(e){for(const t of this.traffic)t.smashed&&(t.mesh.position.x+=t.velX*e,t.mesh.position.y=Math.max(0,t.mesh.position.y+t.velY*e),t.mesh.position.z+=t.velZ*e,t.velY-=18*e,t.mesh.rotation.y+=t.spinY*e)}updateParticles(e){for(let t=this.particles.length-1;t>=0;t--){const n=this.particles[t];n.life-=e,n.mesh.position.x+=n.vx*e,n.mesh.position.y=Math.max(.08,n.mesh.position.y+n.vy*e),n.mesh.position.z+=n.vz*e,n.vy-=n.gravity*e,n.mesh.rotation.x+=n.rx*e,n.mesh.rotation.y+=n.ry*e;const i=Math.max(.01,n.life/n.maxLife);n.mesh.scale.setScalar(i),n.life<=0&&(this.scene.remove(n.mesh),n.mesh.material.dispose(),this.particles.splice(t,1))}}updateShockwave(e){if(this.shockwaveLife>0){this.shockwaveLife-=e;const t=1-Math.max(0,this.shockwaveLife/.68),n=1+t*16;this.shockwaveRing.scale.set(n,n,1),this.shockwaveRing.position.set(this.playerX,.25,this.playerZ),this.shockwaveRing.material.opacity=(1-t)*.88,this.shockwaveLife<=0&&(this.shockwaveRing.visible=!1)}}spawnDustPuff(e,t,n,i){const r=new Le({color:i,transparent:!0,opacity:.45}),a=new A(this.dustGeo,r);a.position.set(e,t,n),this.scene.add(a),this.particles.push({mesh:a,vx:(Math.random()-.5)*1.4,vy:.6+Math.random()*.6,vz:2.2,rx:0,ry:0,life:.4,maxLife:.4,gravity:.6})}spawnDebris(e,t,n,i,r){if(!(this.particles.length>96))for(let a=0;a<r;a++){const o=new Le({color:i}),l=new A(this.particleGeo,o);l.position.set(e+(Math.random()-.5)*.6,t,n+(Math.random()-.5)*.6),this.scene.add(l);const c=.55+Math.random()*.55;this.particles.push({mesh:l,vx:(Math.random()-.5)*14,vy:4+Math.random()*9,vz:(Math.random()-.5)*14-this.speed*.25,rx:(Math.random()-.5)*12,ry:(Math.random()-.5)*12,life:c,maxLife:c,gravity:18})}}updateSkyAndMetro(e){this.skyDome.position.set(this.playerX,0,this.playerZ),this.metroRelZ+=34*e,this.metroRelZ>85&&(this.metroRelZ=-260),this.metroTrain.position.set(-28.4,18,this.playerZ+this.metroRelZ);const t=this.scene.userData.sun;t&&(t.position.set(this.playerX+16,30,this.playerZ-48),t.target.position.set(this.playerX,0,this.playerZ-12),t.target.updateMatrixWorld())}updateCamera(e){const t=window.innerWidth<window.innerHeight?72:58,n=Math.min(12,this.speed/30*10),i=t+(this.chaosActive?10:n);Math.abs(this.camera.fov-i)>.1&&(this.camera.fov+=(i-this.camera.fov)*Math.min(1,e*6),this.camera.updateProjectionMatrix());let r=0,a=0;this.shakeIntensity>.01&&(r=(Math.random()-.5)*this.shakeIntensity,a=(Math.random()-.5)*this.shakeIntensity,this.shakeIntensity=Math.max(0,this.shakeIntensity-e*2.6));const o=this.playerX*.72+r,l=3.95+this.currentHoverY*.65+a,c=this.playerZ+7.9;this.camera.position.lerp(new L(o,l,c),Math.min(1,e*12)),this.camera.lookAt(this.playerX*.45,2.05+this.currentHoverY*.45,this.playerZ-26)}registerNationalLoss(e){this.combo++,this.comboTimer=1,this.combo>this.stats.maxCombo&&(this.stats.maxCombo=this.combo);const t=this.playerX>.7?2:1,n=this.chaosActive?3:1,i=this.vehicleSpec.lossMultiplier,r=1+Math.min(1.5,(this.combo-1)*.18),a=Math.round(e*t*n*i*r);this.stats.nationalLoss+=a;const o=this.settings.gameMode==="hardcore"?2:1,l=Math.round(a*.55*o);return this.stats.garageEarnedTk+=l,this.garage.walletTk+=l,this.runCashTk+=120,a}addMobRage(e){this.mobRage=Math.min(100,this.mobRage+e)}addChaos(e){if(this.chaosActive)return;const t=this.chaos;this.chaos=Math.min(100,this.chaos+e),t<100&&this.chaos>=100&&(this.emitTicker('⚡ ক্যাওস ১০০%! এখনই "ক্যাওস" বাটনে চাপ দাও!',"chaos"),this.audio.playNearMiss())}triggerGameOver(e,t){this.phase="gameover",this.stats.deathReason=e,this.stats.deathDetail=t,this.sergeantAlertActive=!1,this.lightningLine.visible=!1,this.crashSpinTimer=0,Ka(this.garage),this.callbacks.onGarageChange(this.getGarageData()),e==="bus"?(this.audio.playRandomMeme(["khatam_tata","laparwahi","nooo_dramatic"],4,1.12),this.player.bodyGroup.rotation.z=.62,this.player.bodyGroup.rotation.x=-.32):e==="truck"?(this.audio.playRandomMeme(["khatam_tata","oti_boro","nooo_dramatic"],4,1.12),this.player.bodyGroup.rotation.z=.65,this.player.bodyGroup.rotation.x=-.32):e==="battery"?this.audio.playRandomMeme(["depression","funny_cry"],4,1.12):e==="sergeant"?this.audio.playRandomMeme(["gajab_beijjati","padhai_likhai","cha_dhele_dei_full"],4,1.12):e==="mob"&&(this.player.bodyGroup.rotation.z=.36),this.pendingSnapshot=!0,this.emitHud()}emitTicker(e,t){this.callbacks.onTicker({id:this.tickerIdCounter++,text:e,kind:t})}hasNearBusAhead(){for(const e of this.traffic){if(!e.lethal||e.smashed)continue;const t=this.playerZ-e.mesh.position.z;if(t>4&&t<46&&Math.abs(e.mesh.position.x-this.playerX)<2.6)return!0}return!1}updateUTurnDrifts(){const e=this.playerX>=0?1:-1;if(e!==this.lastPlayerSide){this.lastPlayerSide=e;for(const t of this.chunks)if(t.uTurnZ!==null&&!t.uTurnUsed&&Math.abs(this.playerZ-t.uTurnZ)<6.8){t.uTurnUsed=!0;const n=this.registerNationalLoss(22e3);this.addChaos(16),this.audio.playNearMiss(),this.spawnDebris(this.playerX,.3,this.playerZ,3718648,12),this.emitTicker(`🔄 পারফেক্ট ইউ-টার্ন ড্রিফট! +${Pt(n)}`,"nearmiss");break}}}updateMichils(e){for(let t=this.michils.length-1;t>=0;t--){const n=this.michils[t];if(n.hit)n.mesh.position.x+=n.velX*e,n.mesh.position.y=Math.max(0,n.mesh.position.y+n.velY*e),n.mesh.position.z+=n.velZ*e,n.velY-=17*e,n.mesh.rotation.y+=n.spin*e,n.mesh.rotation.x+=n.spin*.5*e;else{n.worldZ+=n.speed*e,n.mesh.position.z=n.worldZ,n.phase+=e*9;const i=n.mesh.userData.marchers||[];for(let o=0;o<i.length;o++){const l=i[o];l.position.y=Math.abs(Math.sin(n.phase+o*.7))*.1}const r=Math.abs(n.laneX-this.playerX),a=Math.abs(n.worldZ-this.playerZ);if(this.currentHoverY<1.8&&r<2.15&&a<2.3){n.hit=!0;const o=n.laneX>=this.playerX?1:-1;n.velX=o*11,n.velY=8.8,n.velZ=-this.speed*.6,n.spin=o*8,this.stats.pedestriansBumped+=3;const l=this.registerNationalLoss(42e3);this.addMobRage(36),this.addChaos(22),this.shakeIntensity=Math.max(this.shakeIntensity,.75),this.audio.playCrash(!1),this.audio.playRandomMeme(["public_marattok","shutiye_lal","hila_dala"],3,1.05),this.spawnDebris(n.laneX,1.4,n.worldZ,15680580,16),this.emitTicker(`📢 মিছিলের মাঝখানে ঢুকে পড়লেন! +${Pt(l)} — পাবলিক ক্ষেপছে!`,"warn")}else if(!n.nearMissed&&a<4.5&&r<4.6&&n.worldZ>this.playerZ+1){n.nearMissed=!0;const o=this.registerNationalLoss(15e3);this.emitTicker(`📢 মিছিল কাটিয়ে ওস্তাদি! +${Pt(o)}`,"nearmiss")}}(n.mesh.position.z>this.playerZ+32||n.mesh.position.z<this.playerZ-260)&&(this.scene.remove(n.mesh),this.michils.splice(t,1))}}updateRain(e){if(!this.rainPoints||!this.rainPoints.visible)return;this.rainPoints.position.set(this.playerX,0,this.playerZ);const t=this.rainPoints.geometry.getAttribute("position");for(let n=0;n<t.count;n++){let i=t.getY(n)-24*e;i<0&&(i=18+Math.random()*4),t.setY(n,i)}t.needsUpdate=!0}getDhakaAreaName(){const e=this.getCurrentBiome();if(e==="bridge")return"পদ্মা-হাতিরঝিল ব্রিজ";if(e==="riverfront")return"বুড়িগঙ্গা / হাতিরঝিল পাড়";const t=["সদরঘাট • পুরান ঢাকা","শাঁখারী বাজার","চকবাজার","গুলিস্তান মোড়","মতিঝিল"],n=Math.floor(Math.abs(this.stats.distanceMeters)/220)%t.length;return t[n]}collectMinimapBlips(){const e=[];for(const t of this.traffic){if(t.smashed)continue;const n=this.playerZ-t.mesh.position.z;n>-12&&n<120&&e.push({x:t.mesh.position.x,dz:n,kind:t.lethal?"bus":"car"})}for(const t of this.michils){if(t.hit)continue;const n=this.playerZ-t.worldZ;n>-8&&n<120&&e.push({x:t.laneX,dz:n,kind:"michil"})}for(const t of this.sergeants){if(t.resolved)continue;const n=this.playerZ-t.worldZ;n>-8&&n<120&&e.push({x:t.worldX,dz:n,kind:"sergeant"})}for(const t of this.chunks){if(t.chargeSpot){const n=this.playerZ-t.chargeSpot.worldZ;n>-8&&n<120&&e.push({x:t.chargeSpot.worldX,dz:n,kind:"charge"})}if(t.uTurnZ!==null){const n=this.playerZ-t.uTurnZ;n>-8&&n<120&&e.push({x:0,dz:n,kind:"uturn"})}}return e}emitHud(){const e=this.playerX>.7,t=(e?2:1)*(this.chaosActive?3:1);this.callbacks.onHudUpdate({phase:this.phase,nationalLoss:Math.round(this.stats.nationalLoss),walletTk:Math.round(this.garage.walletTk),runCashTk:Math.round(this.runCashTk),speedKmh:Math.round(this.speed*3.6),battery:Math.round(this.battery),isCharging:this.isCharging,chaos:Math.round(this.chaos),chaosActive:this.chaosActive,chaosTimeLeft:this.chaosTimeLeft,mobRage:Math.round(this.mobRage),mobDistance:Math.round(this.mobDistance),mobChasing:this.mobChasing,wrongSide:e,biome:this.getCurrentBiome(),dhakaAreaBn:this.getDhakaAreaName(),gameMode:this.settings.gameMode,quality:this.settings.quality,minimapBlips:this.collectMinimapBlips(),vehicleId:this.garage.selected,combo:this.combo,comboTimer:this.comboTimer,multiplier:t,soundBombCooldown:this.soundBombTimer/Th,sergeantAlert:{active:this.sergeantAlertActive,timeLeft:this.sergeantAlertTime,maxTime:this.sergeantAlertMaxTime,bribeCost:this.sergeantBribeCost,canAfford:this.runCashTk>=this.sergeantBribeCost,label:"সার্জেন্ট ধরছে!"},distanceMeters:Math.round(this.stats.distanceMeters),nearBusWarning:this.hasNearBusAhead(),fps:this.currentFps})}}const Vu="mamarRasta.leaderboard.v1",Ah="mamarRasta.issueNo.v1",Gy=["জানুয়ারি","ফেব্রুয়ারি","মার্চ","এপ্রিল","মে","জুন","জুলাই","আগস্ট","সেপ্টেম্বর","অক্টোবর","নভেম্বর","ডিসেম্বর"];function Wu(){const s=new Date;return`${je(s.getDate())} ${Gy[s.getMonth()]} ${je(s.getFullYear())}`}function Vy(){try{const s=localStorage.getItem(Ah),e=s?parseInt(s,10)+1:420;return localStorage.setItem(Ah,String(e)),e}catch{return 420}}function Wy(s,e){const t=e.trim()||"মামার ভাতিজা",n=s.vehicleNameBn||"দেশি টেসলা",i=je(Vy()),r=Wu(),a=Nu(s.nationalLoss),o=Ei(s.nationalLoss),l=s.carsHit+s.cngsHit+s.bikesHit+s.rickshawsHit;let c="",h="",u="",d="";switch(s.deathReason){case"mob":c=`${n} নিয়ে তাণ্ডব: পাবলিক ধোলাইয়ে "${t}"-এর মাথা ঘোলা!`,h=`${o} জাতীয় ক্ষতি করে পালাতে গিয়ে উত্তেজিত জনতার খপ্পরে চালক`,u='ফাইল ফটো: ধোলাইয়ের পর চালকের প্রথম প্রতিক্রিয়া — "এমন একটা বাড়ি দিলো, আঁআআ কইরা উঠলাম!"',d="“জনতা চিৎকার করছিল — শুঁটিয়ে লাল করে দেবো! চালক তখনও ব্রেক খুঁজছিলেন।” — প্রত্যক্ষদর্শী চা-দোকানি";break;case"bus":c=`খতম! টাটা! বাই বাই! রং সাইডে লোকাল বাসের চাকায় ${n} চ্যাপ্টা`,h=`${je(Math.round(s.distanceMeters))} মিটার তাণ্ডবের পর "${s.deathDetail||"বলাকা পরিবহন"}"-এর বাম্পারে সমাপ্তি`,u='ঘটনাস্থল: বাসের হেলপার জানান, "মামা একদম গেটলক গতিতে ঢুকে পড়ছিল!"',d="“দেখা আপনে লাপরওয়াহি কা নতিজা! আমরা হর্ন মারতে মারতে গলা ফাটায়া ফেলছি।” — বাস চালক";break;case"truck":c=`মালবাহী ট্রাকের সাথে ওয়ান-টু-ওয়ান: ${n}-এর পার্টস এখন মতিঝিল!`,h=`${l>0?`${je(l)}টি গাড়ি গুঁতিয়ে`:"পাগলাটে গতির"} শেষে ভারী ট্রাকের পেছনে সমাপ্তি`,u='ঘটনাস্থল: ট্রাকের পেছনে বড় করে লেখা ছিল — "হর্ন দিন, দূরত্ব বজায় রাখুন"!',d="“অতি বড় হয়ো না ঝড়ে পড়ে যাবে — ট্রাকের সামনে ব্রেক ছাড়া গাড়ি আনছে!” — পথচারী";break;case"battery":c=`হলুদ দাগে চার্জ না নেওয়ার শাস্তি: রাস্তায় অচল ${n}, চালক ডিপ্রেশনে!`,h=`ব্যাটারি ০% হয়ে যাওয়ায় মাঝরাস্তায় থমকে দাঁড়ান "${t}", সৃষ্টি হয় ৫ কিলোমিটার যানজট`,u="ঘটনাস্থল: চার্জ শেষ হওয়ায় যাত্রী নিজেই এখন গাড়ি ঠেলছেন।",d="“চালক গাড়ি থেকে নেমেই বললেন — আমি ডিপ্রেশনে থাকি ভাই, মা কসম!” — যাত্রী";break;case"sergeant":c=`চায়ের টাকা না দেওয়ায় গজব বেইজ্জতি: সার্জেন্টের হাতে ${n} ডাম্পিং!`,h=`নো লাইসেন্স, নো ব্রেক — সাথে ${o} জাতীয় ক্ষতির মামলা কাঁধে নিয়ে হাঁটছেন "${t}"`,u='ঘটনাস্থল: সার্জেন্ট জানিয়েছেন, "এক কাপ চা ঢেলে দিলেই তো সব মিটে যেত!"',d="“পড়াই-লিখাই মে ধ্যান লাগাও, লেকিন নেহি — রং সাইডে গাড়ি চালাইতেই হবে!” — প্রত্যক্ষদর্শী";break}const f=`নিজস্ব প্রতিবেদক, ঢাকা: গতকাল ব্যস্ত সড়কে "পরিবেশটা সুন্দর না? এখন হইচই হবে!" স্লোগান দিয়ে ${n} নিয়ে নজিরবিহীন তাণ্ডব চালিয়েছেন চালক ${t}। মাত্র ${je(Math.round(s.survivalSeconds))} সেকেন্ডের এই অভিযানে তিনি মোট ${Pt(s.nationalLoss)} মূল্যের জাতীয় ক্ষতি সাধন করেন (গ্যারেজ আয়: ${Pt(s.garageEarnedTk)})।`,g=[];s.wrongSideMeters>20&&g.push(`প্রায় ${je(Math.round(s.wrongSideMeters))} মিটার রাস্তা বুক ফুলিয়ে রং সাইডে চালিয়েছেন`),l>0&&g.push(`ধাক্কা দিয়েছেন ${je(l)}টি গাড়ি, সিএনজি, ট্র্যাক্টর ও বাইকে`),s.stallsSmashed>0&&g.push(`রাস্তার পাশের ${je(s.stallsSmashed)}টি চা-স্টল ও ফুচকার দোকান "ঢেলে দেই" বলে উড়িয়ে দিয়েছেন`),s.illegalPowerStolenTk>0&&g.push(`ইলেকট্রিক পোলের হলুদ দাগ থেকে ${Pt(s.illegalPowerStolenTk)}-এর অবৈধ বিদ্যুৎ চুরি করেছেন`),s.bribesPaid>0&&g.push(`পথে ${je(s.bribesPaid)} বার ট্রাফিক সার্জেন্টকে "চায়ের টাকা" (${Pt(s.bribeTotalTk)}) ঢেলে দিয়ে পার পেয়েছেন`);const _=g.length>0?`প্রত্যক্ষদর্শীরা জানান, ${g.join(", ")}। সাউন্ড বম্ব ফাটিয়ে তিনি ${je(s.soundBombsUsed)} বার পুরো এলাকায় মিম-আতঙ্ক ছড়িয়ে দেন।`:"প্রত্যক্ষদর্শীরা জানান, তিনি পুরো রাস্তা জুড়ে হর্ন আর ভাইরাল সাউন্ড বম্ব ফাটিয়ে সবাইকে তটস্থ করে রেখেছিলেন।",m=`সর্বোচ্চ গতি ছিল ঘণ্টায় ${je(Math.round(s.topSpeedKmh))} কি.মি. এবং সর্বোচ্চ কম্বো ${je(s.maxCombo)}×। দৈনিক যানজট সম্পাদকীয় বোর্ড তাঁকে "${a.title}" উপাধিতে ভূষিত করেছে।`;return{issueNo:i,dateBn:r,headline:c,subhead:h,storyParagraphs:[f,_,m],witnessQuote:d,photoCaption:u,rankTitle:a.title,rankBadge:a.badge,totalLossFormatted:Pt(s.nationalLoss),compactLoss:o}}function cl(){try{const s=localStorage.getItem(Vu);if(!s)return[];const e=JSON.parse(s);return Array.isArray(e)?e.slice(0,8):[]}catch{return[]}}function Xy(s,e){const t=cl(),n=Nu(s.nationalLoss),i={id:`${Date.now()}-${Math.random().toString(36).slice(2,6)}`,name:e.trim()||"মামার ভাতিজা",loss:Math.round(s.nationalLoss),rank:n.title,deathReason:s.deathReason,date:Wu(),distance:Math.round(s.distanceMeters)},r=[...t,i].sort((a,o)=>o.loss-a.loss).slice(0,8);try{localStorage.setItem(Vu,JSON.stringify(r))}catch{}return r}function qy(s,e,t){return new Promise(n=>{const a=document.createElement("canvas");a.width=960,a.height=1320;const o=a.getContext("2d"),l=(h,u)=>{o.fillStyle="#f2e8cf",o.fillRect(0,0,960,1320);for(let M=0;M<3600;M++)o.fillStyle=Math.random()>.5?"rgba(60, 45, 25, 0.055)":"rgba(255, 255, 255, 0.06)",o.fillRect(Math.random()*960,Math.random()*1320,2,2);o.strokeStyle="#1c1917",o.lineWidth=6,o.strokeRect(24,24,912,1272),o.lineWidth=2,o.strokeRect(34,34,892,1252),o.save(),o.translate(828,108),o.rotate(.14),o.strokeStyle="#991b1b",o.lineWidth=4,o.strokeRect(-72,-26,144,52),o.fillStyle="#991b1b",o.textAlign="center",o.font='800 18px "Hind Siliguri", sans-serif',o.fillText("ঢাকা স্পেশাল",0,-2),o.font='700 15px "Hind Siliguri", sans-serif',o.fillText("সীলমোহরকৃত",0,18),o.restore(),o.textAlign="center",o.fillStyle="#991b1b",o.font='900 78px "Noto Serif Bengali", "Baloo Da 2", serif',o.fillText("দৈনিক যানজট",960/2,122),o.fillStyle="#292524",o.font='700 22px "Hind Siliguri", sans-serif',o.fillText("“সত্যের সন্ধানে, যানজটের মাঝখানে” • মামার রাস্তা স্পেশাল সংস্করণ",960/2,160),o.strokeStyle="#1c1917",o.lineWidth=3,o.beginPath(),o.moveTo(46,178),o.lineTo(914,178),o.moveTo(46,214),o.lineTo(914,214),o.stroke(),o.font='600 18px "Hind Siliguri", sans-serif',o.textAlign="left",o.fillText(`সংখ্যা: ${s.issueNo}`,54,202),o.textAlign="center",o.fillText(`তারিখ: ${s.dateBn}`,960/2,202),o.textAlign="right",o.fillText("মূল্য: ৫ টাকা (চা ছাড়া)",906,202),o.textAlign="center",o.fillStyle="#111827",o.font='900 37px "Noto Serif Bengali", "Baloo Da 2", serif';const d=lo(o,s.headline,850);let f=266;for(const M of d)o.fillText(M,960/2,f),f+=46;o.fillStyle="#991b1b",o.font='700 22px "Hind Siliguri", sans-serif';const g=lo(o,s.subhead,840);for(const M of g)o.fillText(M,960/2,f+4),f+=30;const _=f+18,m=540,p=315,x=54;o.fillStyle="#1c1917",o.fillRect(x,_,m,p),h&&(o.save(),o.beginPath(),o.rect(x+4,_+4,m-8,p-8),o.clip(),o.filter="sepia(0.36) contrast(1.16) saturate(0.9)",o.drawImage(h,x+4,_+4,m-8,p-8),o.restore()),o.strokeStyle="#1c1917",o.lineWidth=3,o.strokeRect(x,_,m,p);const y=x+m+24,v=960-y-54;o.fillStyle="#1c1917",o.fillRect(y,_,v,46),o.fillStyle="#fef08a",o.textAlign="center",o.font='700 22px "Baloo Da 2", sans-serif',o.fillText("জাতীয় ক্ষতির খতিয়ান",y+v/2,_+30),o.strokeStyle="#1c1917",o.lineWidth=2,o.strokeRect(y,_,v,p),o.fillStyle="#b91c1c",o.font='900 32px "Baloo Da 2", sans-serif',o.fillText(s.compactLoss,y+v/2,_+94);const I=[["গাড়ি",e.vehicleNameBn],["উপাধি",s.rankTitle],["দূরত্ব",`${je(Math.round(e.distanceMeters))} মি.`],["রং সাইড",`${je(Math.round(e.wrongSideMeters))} মি.`],["গাড়ি/বাইক ধাক্কা",`${je(e.carsHit+e.cngsHit+e.bikesHit+e.rickshawsHit)} টি`],["অবৈধ চার্জ",`${Pt(e.illegalPowerStolenTk)}`],["গ্যারেজ আয়",`${Pt(e.garageEarnedTk)}`]];o.font='600 17px "Hind Siliguri", sans-serif';let C=_+132;for(const[M,D]of I)o.fillStyle="#44403c",o.textAlign="left",o.fillText(M,y+12,C),o.fillStyle="#111827",o.textAlign="right",o.fillText(D,y+v-12,C),C+=26;o.textAlign="left",o.fillStyle="#44403c",o.font='italic 600 17px "Hind Siliguri", sans-serif',o.fillText(s.photoCaption,x,_+p+26,m);let S=_+p+54;o.fillStyle="rgba(153, 27, 27, 0.08)",o.fillRect(54,S,852,56),o.fillStyle="#991b1b",o.fillRect(54,S,8,56),o.font='italic 700 20px "Hind Siliguri", sans-serif',o.fillText(s.witnessQuote,76,S+35,816),S+=84,o.fillStyle="#1c1917",o.font='500 22px "Hind Siliguri", sans-serif';for(const M of s.storyParagraphs){const D=lo(o,M,850);for(const z of D){if(S>1200)break;o.fillText(z,55,S),S+=31}S+=12}o.strokeStyle="#1c1917",o.lineWidth=2,o.beginPath(),o.moveTo(54,1194),o.lineTo(906,1194),o.stroke(),u&&(o.drawImage(u,56,1204,112,84),o.strokeStyle="#1c1917",o.lineWidth=2,o.strokeRect(56,1204,112,84)),o.textAlign=u?"left":"center";const R=u?184:960/2;o.fillStyle="#1c1917",o.font='800 20px "Hind Siliguri", sans-serif',o.fillText("গেম নির্মাতা: সাব্বির (Developer & Co-Founder) এবং মাজিদ (Co-Developer)",R,1234,960-R-56),o.fillStyle="#44403c",o.font='700 17px "Hind Siliguri", sans-serif',o.fillText("Sabbir Codex Development Team • মামার রাস্তা ৩ডি",R,1258,960-R-56),o.fillStyle="#1d4ed8",o.font='700 17px "Hind Siliguri", sans-serif',o.fillText(`Facebook: ${Vs}`,R,1282,960-R-56);const T=document.createElement("a");T.download=`dainik-janjot-${Date.now()}.png`,T.href=a.toDataURL("image/png"),T.click(),n()},c=h=>new Promise(u=>{if(!h)return u(null);const d=new Image;d.onload=()=>u(d),d.onerror=()=>u(null),d.src=h});Promise.all([c(t),c("./art/dev-team.jpg?v=5")]).then(([h,u])=>{l(h,u)})})}function lo(s,e,t){const n=e.split(/\s+/),i=[];let r="";for(const a of n){const o=r?`${r} ${a}`:a;s.measureText(o).width>t&&r?(i.push(r),r=a):r=o}return r&&i.push(r),i}const Xu="mamarRasta.settings.v3";function Yy(){try{const s=localStorage.getItem(Xu);if(s){const e=JSON.parse(s),t=["low","medium","max","ultra","ultra_max"],n=["classic","night","rain","freeroam","hardcore"];return{autoGas:e.autoGas??!0,soundEnabled:e.soundEnabled??!0,voiceEnabled:e.voiceEnabled??!0,quality:t.includes(e.quality)?e.quality:"ultra",gameMode:n.includes(e.gameMode)?e.gameMode:"classic",driverName:typeof e.driverName=="string"?e.driverName:"মামার ভাতিজা"}}}catch{}return{autoGas:!0,soundEnabled:!0,voiceEnabled:!0,quality:"ultra",gameMode:"classic",driverName:"মামার ভাতিজা"}}function ts(s){try{localStorage.setItem(Xu,JSON.stringify(s))}catch{}}async function Rh(){try{const s=document.documentElement;document.fullscreenElement||(s.requestFullscreen?await s.requestFullscreen({navigationUI:"hide"}):s.webkitRequestFullscreen&&await s.webkitRequestFullscreen())}catch{}try{const s=screen.orientation;s&&typeof s.lock=="function"&&await s.lock("landscape")}catch{}}class Zy{constructor(e,t){B(this,"root");B(this,"game");B(this,"settings");B(this,"menuOverlay");B(this,"garageOverlay");B(this,"modOverlay");B(this,"aboutOverlay");B(this,"aboutReturnTarget","menu");B(this,"hudOverlay");B(this,"minimapCanvas");B(this,"minimapCtx");B(this,"minimapAreaEl");B(this,"pauseOverlay");B(this,"newspaperOverlay");B(this,"chaosVignette");B(this,"busWarningBanner");B(this,"bottomTickerEl");B(this,"tickerTimeout",0);B(this,"lossValueEl");B(this,"multBadgeEl");B(this,"comboBadgeEl");B(this,"biomeBadgeEl");B(this,"hudClockEl");B(this,"hudDateEl");B(this,"hudVehBadgeEl");B(this,"cashEl");B(this,"speedEl");B(this,"distEl");B(this,"batteryFillEl");B(this,"batteryTextEl");B(this,"batteryBoxEl");B(this,"chaosFillEl");B(this,"chaosTextEl");B(this,"mobBarBoxEl");B(this,"mobFillEl");B(this,"mobDistEl");B(this,"wrongSideBannerEl");B(this,"soundBombBtn");B(this,"soundBombCdEl");B(this,"chaosBtn");B(this,"gasBtn");B(this,"sergeantPanel");B(this,"sergeantTimerFill");B(this,"sergeantBribeBtn");B(this,"menuWalletEl");B(this,"menuSelectedVehicleEl");B(this,"menuBoardList");B(this,"garageWalletEl");B(this,"garageGridEl");B(this,"garageStatusEl");B(this,"lastEdition",null);B(this,"lastStats",null);B(this,"lastSnapshot",null);this.root=e,this.settings={...t},this.buildDom()}attachGame(e){this.game=e,this.bindInteractions(),this.renderMenuLeaderboard(cl()),this.updateGarageUi(e.getGarageData()),this.renderModStudio(e.getModConfig())}buildDom(){this.root.innerHTML=`
      <div class="chaos-vignette" id="chaos-vignette"></div>

      <!-- START MENU -->
      <div class="overlay menu-overlay active" id="menu-overlay">
        <div class="menu-card">
          <div class="hero-banner">
            <img src="./art/dhaka-hero.jpg" alt="ঢাকার রাস্তায় দেশি টেসলা" class="hero-img" />
            <div class="hero-scrim"></div>
            <div class="hero-top-badges">
              <span class="rickshaw-ribbon">🇧🇩 আল্ট্রা ৩ডি • ঢাকা সিটি • নদী ও ব্রিজ</span>
              <button class="btn-meme-test" id="btn-meme-test">🔊 মিম টেস্ট</button>
            </div>
            <div class="hero-title-wrap">
              <h1 class="game-title">মামার রাস্তা</h1>
              <p class="game-subtitle">আপনার সন্তানকে দেশি টেসলা দিন — নো লাইসেন্স, নো ব্রেক!</p>
              <div class="creator-row">
                <span class="creator-pill">
                  <img src="./art/dev-sabbir.jpg?v=5" alt="সাব্বির" class="cp-face" />
                  <img src="./art/dev-majid.jpg?v=5" alt="মাজিদ" class="cp-face cp-face-2" />
                  <span>নির্মাতা: <strong>সাব্বির Codex ও মাজিদ</strong></span>
                </span>
                <button class="btn-about-mini" id="btn-open-about">👨‍💻 অ্যাবাউট ও ডেভেলপার</button>
              </div>
            </div>
          </div>

          <div class="menu-body">
            <div class="wallet-strip">
              <div class="wallet-info">
                <span class="w-lbl">গ্যারেজ ফান্ড (গাড়ি ভেঙে আয়)</span>
                <strong id="menu-wallet">৳ ০</strong>
              </div>
              <div class="wallet-btns">
                <button class="btn-mod-open" id="btn-open-mod">🔧 মডিং</button>
                <button class="btn-garage-open" id="btn-open-garage">
                  <span>🏎️ গ্যারেজ</span>
                  <small id="menu-selected-veh">দেশি টেসলা</small>
                </button>
              </div>
            </div>

            <div class="driver-input-row">
              <input id="driver-name-input" type="text" maxlength="20" value="${$t(this.settings.driverName)}" placeholder="চালকের নাম (পত্রিকায় ছাপা হবে)" />
            </div>

            <!-- 5 GAME MODES SELECTOR -->
            <div class="selector-section">
              <div class="sel-title">🎮 গেম মোড বাছাই করুন</div>
              <div class="mode-pills" id="mode-pills">
                ${Nv.map(e=>`
                  <button class="mode-chip ${this.settings.gameMode===e.id?"active":""}" data-mode="${e.id}">
                    <span>${e.badge} ${e.labelBn}</span>
                  </button>`).join("")}
              </div>
            </div>

            <!-- 5-TIER GRAPHICS QUALITY SELECTOR (LOW / MEDIUM / MAX / ULTRA / ULTRA MAX!) -->
            <div class="selector-section">
              <div class="sel-title">🖥️ গ্রাফিক্স কোয়ালিটি</div>
              <div class="quality-pills" id="quality-pills">
                ${ch.map(e=>`
                  <button class="qual-chip ${this.settings.quality===e.id?"active":""}" data-qual="${e.id}">
                    ${e.labelBn}
                  </button>`).join("")}
              </div>
            </div>

            <button class="btn-premium btn-play" id="btn-start-game">
              <span class="btn-gloss"></span>
              <span class="btn-label">🛺 খেলা শুরু করুন (ল্যান্ডস্কেপ ৩ডি)</span>
              <span class="btn-sub">পুরান ঢাকা • মিছিল • ইউ-টার্ন • রিকশা মডিং • লাইভ ম্যাপ!</span>
            </button>

            <div class="menu-toggles">
              <label class="toggle-pill">
                <input type="checkbox" id="opt-autogas" ${this.settings.autoGas?"checked":""} />
                <span>অটো-গ্যাস</span>
              </label>
              <label class="toggle-pill">
                <input type="checkbox" id="opt-sound" ${this.settings.soundEnabled?"checked":""} />
                <span>সাউন্ড</span>
              </label>
              <label class="toggle-pill">
                <input type="checkbox" id="opt-voice" ${this.settings.voiceEnabled?"checked":""} />
                <span>মিম অডিও</span>
              </label>
            </div>

            <div class="menu-board">
              <div class="board-title">🏆 শীর্ষ তাণ্ডবকারী (জাতীয় ক্ষতি)</div>
              <div class="board-list" id="menu-board-list"></div>
            </div>

            <!-- DIRECTLY VISIBLE DEVELOPER SHOWCASE ON START MENU (SABBIR & MAJID PHOTOS!) -->
            <div class="menu-dev-spotlight">
              <div class="mds-header">
                <span>👨‍💻 গেম নির্মাতা • Sabbir Codex Development Team</span>
              </div>
              <div class="mds-poster-wrap" id="btn-open-about-poster">
                <img src="./art/dev-team.jpg?v=5" alt="সাব্বির ও মাজিদ — ডেভেলপার টিম" class="mds-poster-img" />
              </div>
              <div class="mds-duo">
                <div class="mds-person">
                  <img src="./art/dev-sabbir.jpg?v=5" alt="সাব্বির Codex" class="mds-avatar" />
                  <div>
                    <strong>সাব্বির (Sabbir Codex)</strong>
                    <small>Developer &amp; Co-Founder</small>
                  </div>
                </div>
                <div class="mds-person">
                  <img src="./art/dev-majid.jpg?v=5" alt="মাজিদ" class="mds-avatar avatar-majid" />
                  <div>
                    <strong>মাজিদ (Majid)</strong>
                    <small>Co-Developer</small>
                  </div>
                </div>
              </div>
              <div class="mds-actions">
                <button class="mds-btn mds-btn-about" id="btn-open-about-card">ℹ️ ডেভেলপার ও অ্যাবাউট</button>
                <a href="${Vs}" target="_blank" rel="noopener noreferrer" class="mds-btn mds-btn-fb">📘 ফেসবুক আইডি</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- DEVELOPER INFO & ABOUT MODAL (SABBIR CODEX & MAJID!) -->
      <div class="overlay about-overlay" id="about-overlay">
        <div class="about-panel">
          <div class="about-header">
            <div>
              <h2>👨‍💻 ডেভেলপার ইনফো ও গেম অ্যাবাউট</h2>
              <div class="about-sub">Sabbir Codex Development Team • Dream Big, Build Better</div>
            </div>
            <button class="icon-btn" id="btn-close-about" title="বন্ধ করুন">✕</button>
          </div>
          <div class="about-scroll">
            <div class="about-photo-wrap">
              <img src="./art/dev-team.jpg?v=5" alt="Sabbir Codex & Majid Development Team" class="about-team-img" />
            </div>

            <div class="dev-cards-grid">
              <div class="dev-card dev-sabbir">
                <div class="dev-card-top">
                  <img src="./art/dev-sabbir.jpg?v=5" alt="সাব্বির Codex" class="dev-card-avatar" />
                  <div>
                    <div class="dev-role-badge">👑 DEVELOPER &amp; CO-FOUNDER</div>
                    <h3>সাব্বির (Sabbir Codex)</h3>
                  </div>
                </div>
                <p>গেমটির মূল ডেভেলপার ও কো-ফাউন্ডার। সম্পূর্ণ ৩ডি গেম আর্কিটেকচার, গ্রাফিক্স ইঞ্জিন, ফিজিক্স, গাড়ির গ্যারেজ সিস্টেম এবং কোডিং ডিজাইন করেছেন।</p>
              </div>
              <div class="dev-card dev-majid">
                <div class="dev-card-top">
                  <img src="./art/dev-majid.jpg?v=5" alt="মাজিদ" class="dev-card-avatar avatar-majid" />
                  <div>
                    <div class="dev-role-badge">⚡ CO-DEVELOPER</div>
                    <h3>মাজিদ (Majid)</h3>
                  </div>
                </div>
                <p>গেমটির কো-ডেভেলপার। ক্রিয়েটিভ কনসেপ্ট, বাংলাদেশী ম্যাপ ও গাড়ির আইডিয়া, মজার ভাইরাল মিম ডিরেকশন ও গেমপ্লে টেস্টিং-এ কো-ডেভেলপমেন্ট করেছেন।</p>
              </div>
            </div>

            <div class="about-story-box">
              <h4>🇧🇩 মামার রাস্তা ৩ডি সম্পর্কে (About Game)</h4>
              <p>
                <strong>মামার রাস্তা (Mamar Rasta 3D)</strong> হলো বাংলাদেশের ঢাকার ব্যস্ত রাস্তা, নদী, ব্রিজ, মেট্রোরেল, দেশি টেসলা, সিএনজি, প্যাডেল রিকশা, বাংলাদেশী ট্র্যাক্টর, নিনজা H2R, ল্যাম্বরগিনি ও ফিউচার ফ্লাইং কার নিয়ে তৈরি একটি ফান ৩ডি ড্রাইভিং গেম!
                রং সাইডে ২× জাতীয় ক্ষতি, পোলের হলুদ দাগে অবৈধ চার্জ, ট্রাফিক সার্জেন্টকে চায়ের টাকা, পাবলিক ধোলাই আর ৩৪+ ভাইরাল বাংলা মিম সাউন্ডের সাথে তৈরি হয়েছে খাঁটি দেশি ভাইব!
              </p>
              <div class="about-motto">“Code • Create • Innovate — Sabbir Codex Development Team”</div>
            </div>

            <a href="${Vs}" target="_blank" rel="noopener noreferrer" class="btn-fb-big">
              <span>📘 সাব্বির ও মাজিদের ফেসবুক প্রোফাইল দেখুন</span>
              <small>${Vs}</small>
            </a>
          </div>
        </div>
      </div>

      <!-- VEHICLE GARAGE / SHOWROOM MODAL -->
      <div class="overlay garage-overlay" id="garage-overlay">
        <div class="garage-panel">
          <div class="garage-header">
            <div>
              <h2>🏎️ মামার গ্যারেজ ও সুপারকার শোরুম</h2>
              <div class="garage-sub" id="garage-status">গাড়ি ধাক্কা দিয়ে আয় করা টাকায় নতুন গাড়ি আনলক করুন!</div>
            </div>
            <div class="garage-head-right">
              <div class="garage-wallet-pill">💰 <span id="garage-wallet">৳ ০</span></div>
              <button class="icon-btn" id="btn-close-garage" title="বন্ধ করুন">✕</button>
            </div>
          </div>
          <div class="garage-grid" id="garage-grid"></div>
          <div class="garage-footer">
            <button class="btn-premium" id="btn-garage-play"><span class="btn-gloss"></span>🚀 সিলেক্টেড গাড়ি নিয়ে রাস্তায় নামুন!</button>
          </div>
        </div>
      </div>

      <!-- RICKSHAW & VEHICLE MODDING STUDIO MODAL -->
      <div class="overlay mod-overlay" id="mod-overlay">
        <div class="mod-panel">
          <div class="garage-header">
            <div>
              <h2>🔧 রিকশা ও গাড়ি মডিং স্টুডিও</h2>
              <div class="garage-sub">রং, পেছনের প্যানেল, ছাদ, নিয়ন লাইট ও SABBIR CODEX টপ সাইন বদলান!</div>
            </div>
            <button class="icon-btn" id="btn-close-mod" title="বন্ধ করুন">✕</button>
          </div>
          <div class="mod-scroll" id="mod-scroll"></div>
          <div class="garage-footer">
            <button class="btn-premium" id="btn-mod-play"><span class="btn-gloss"></span>🚀 মডিফাইড গাড়ি নিয়ে রাস্তায় নামুন!</button>
          </div>
        </div>
      </div>

      <!-- LIVE GAMEPLAY HUD (PREMIUM NEON-BLUE GLASSMORPHIC LAYOUT MATCHING REFERENCE ART!) -->
      <div class="hud-overlay" id="hud-overlay">
        <div class="hud-top">
          <div class="hud-score-card">
            <div class="hud-clock-row">
              <div>
                <div class="hud-clock" id="hud-clock">৪:৩০ PM</div>
                <div class="hud-date" id="hud-date">শুক্রবার, ২৭ নভে</div>
              </div>
              <span class="biome-pill" id="hud-biome">🏙️ ঢাকা</span>
            </div>
            <div class="hud-loss-row">
              <span class="hud-loss-val" id="hud-loss">৳ ০</span>
              <span class="hud-mult" id="hud-mult">১×</span>
            </div>
            <div class="hud-sub-row">
              <span id="hud-cash">☕ ৳ ১,০০০</span>
              <span id="hud-dist">🛣️ ০ মি.</span>
              <span class="hud-combo" id="hud-combo"></span>
            </div>
          </div>

          <div class="hud-center-slim">
            <div class="wrong-side-banner" id="wrong-side-banner">🚧 রং সাইড ২×</div>
            <div class="bus-warning-banner" id="bus-warning-banner">🚌 সামনে বাস/ট্রাক!</div>
            <div class="sergeant-alert" id="sergeant-panel">
              <div class="sergeant-timer-track"><div class="sergeant-timer-fill" id="sergeant-timer-fill"></div></div>
              <button class="btn-bribe" id="btn-bribe">👮☕ চায়ের টাকা (৳ ৫০০) [E]</button>
            </div>
          </div>

          <div class="hud-right-stack">
            <div class="hud-top-actions">
              <div class="vip-pill">
                <span class="vip-crown">👑</span>
                <span id="hud-veh-badge">দেশি টেসলা</span>
              </div>
              <div class="speed-pill">
                <span class="spd-val" id="hud-speed">০</span>
                <small>KM/H</small>
              </div>
              <button class="icon-btn neon-icon-btn" id="btn-fullscreen" title="ফুলস্ক্রিন ল্যান্ডস্কেপ">⛶</button>
              <button class="icon-btn pause-gold-btn" id="btn-pause" title="বিরতি">⏸</button>
            </div>
            <div class="meter-row">
              <div class="meter-card" id="battery-box">
                <div class="meter-head">
                  <span class="mh-ico">🔋</span>
                  <span class="mh-val" id="battery-text">১০০%</span>
                </div>
                <div class="meter-track"><div class="meter-fill battery-fill" id="battery-fill"></div></div>
              </div>
              <div class="meter-card">
                <div class="meter-head">
                  <span class="mh-ico">⚡</span>
                  <span class="mh-val" id="chaos-text">০%</span>
                </div>
                <div class="meter-track"><div class="meter-fill chaos-fill" id="chaos-fill"></div></div>
              </div>
            </div>
          </div>
        </div>

        <!-- LIVE DHAKA TACTICAL GPS MINI-MAP RADAR -->
        <div class="hud-minimap-wrap" id="hud-minimap-wrap">
          <div class="mm-head">🗺️ <span id="mm-area">পুরান ঢাকা</span></div>
          <canvas id="hud-minimap" width="84" height="104"></canvas>
        </div>

        <!-- ANGRY MOB COMPACT RADAR -->
        <div class="mob-radar" id="mob-radar">
          <div class="mob-radar-head">
            <span>😡 পাবলিক ধোলাই</span>
            <span id="mob-dist">১৫ মি.</span>
          </div>
          <div class="meter-track"><div class="meter-fill mob-fill" id="mob-fill"></div></div>
        </div>

        <!-- SLEEK BOTTOM-CENTER NEON-GLASS TICKER PILL (MATCHING REFERENCE!) -->
        <div class="bottom-ticker" id="bottom-ticker">
          <span class="tk-info-dot">i</span>
          <span class="tk-text" id="bottom-ticker-text">পরিবেশটা সুন্দর না? বেশি টেনশন নিও না, উপভোগ করুন!</span>
        </div>

        <!-- BIG NEON-BLUE GLASS STEERING + 2x2 ACTION BUTTONS (MATCHING REFERENCE!) -->
        <div class="touch-controls">
          <div class="touch-left" id="touch-steer-pad">
            <button class="steer-btn" id="btn-steer-left" aria-label="বামে">
              <svg viewBox="0 0 24 24" width="44" height="44" fill="none" stroke="currentColor" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
            </button>
            <button class="steer-btn" id="btn-steer-right" aria-label="ডানে">
              <svg viewBox="0 0 24 24" width="44" height="44" fill="none" stroke="currentColor" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>
          </div>
          <div class="touch-right">
            <div class="action-row-top">
              <button class="action-btn btn-horn" id="btn-horn">
                <svg viewBox="0 0 24 24" width="28" height="28" fill="#facc15"><path d="M18 8a3 3 0 0 0-2.1.9L11 11H6a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h1v3h2v-3h2l4.9 2.1A3 3 0 0 0 20 15.3V10.7A3 3 0 0 0 18 8z"/></svg>
                <span>হর্ন</span>
              </button>
              <button class="action-btn btn-chaos" id="btn-chaos">
                <svg viewBox="0 0 24 24" width="28" height="28" fill="#fde047"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                <span>ব্লাস্ট</span>
              </button>
            </div>
            <div class="action-row-bottom">
              <button class="action-btn btn-slow" id="btn-slow">
                <svg viewBox="0 0 24 24" width="30" height="30" fill="#ef4444"><path d="M18 11V6a1 1 0 0 0-2 0v4h-1V4a1 1 0 0 0-2 0v6h-1V3a1 1 0 0 0-2 0v7H9V5a1 1 0 0 0-2 0v8.5l-1.7-1.7a1.1 1.1 0 0 0-1.6 1.5l4.3 5.2A4 4 0 0 0 11.1 20H15a4 4 0 0 0 4-4v-5a1 1 0 0 0-1 0z"/></svg>
                <span>ব্রেক</span>
              </button>
              <button class="action-btn btn-gas ${this.settings.autoGas?"hidden":""}" id="btn-gas">
                <i>🚀</i>
                <span>গ্যাস</span>
              </button>
              <button class="action-btn btn-bomb" id="btn-sound-bomb">
                <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="#ffffff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 12m-8 0a8 8 0 1 0 16 0a8 8 0 1 0 -16 0"/><path d="M12 12l4 -3"/><path d="M12 7v1"/><path d="M7 12h1"/><path d="M16 12h1"/></svg>
                <span>মিম বম্ব</span>
                <div class="cd-overlay" id="bomb-cd"></div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- PAUSE OVERLAY WITH LIVE 5-TIER GRAPHICS SWITCHER -->
      <div class="overlay pause-overlay" id="pause-overlay">
        <div class="pause-card">
          <h2>⏸ চা-বিরতি</h2>
          <p>রাস্তায় যানজট জমে গেছে — গ্রাফিক্স বদলে আবার নামুন!</p>
          <div class="quality-pills pause-qual-pills" id="pause-quality-pills">
            ${ch.map(e=>`<button class="qual-chip ${this.settings.quality===e.id?"active":""}" data-qual="${e.id}">${e.labelBn}</button>`).join("")}
          </div>
          <div class="pause-actions">
            <button class="btn-premium" id="btn-resume"><span class="btn-gloss"></span>▶ চালিয়ে যান</button>
            <button class="btn-gold" id="btn-restart-pause">🔄 নতুন করে শুরু</button>
            <button class="btn-ghost" id="btn-menu-pause">🏠 মেইন মেনু</button>
          </div>
        </div>
      </div>

      <!-- GAME OVER: DAINIK JANJOT NEWSPAPER -->
      <div class="overlay newspaper-overlay" id="newspaper-overlay">
        <div class="newspaper-scroll">
          <article class="newspaper-sheet" id="newspaper-sheet"></article>
          <div class="newspaper-actions">
            <button class="btn-premium" id="btn-play-again"><span class="btn-gloss"></span>🛺 আবার খেলুন</button>
            <button class="btn-gold" id="btn-gameover-garage">🏎️ গ্যারেজ / গাড়ি কিনুন</button>
            <button class="btn-ghost" id="btn-save-png">📰 সেভ PNG</button>
            <button class="btn-ghost" id="btn-gameover-about">👨‍💻 ডেভেলপার</button>
            <button class="btn-ghost" id="btn-back-menu">🏠 মেনু</button>
          </div>
        </div>
      </div>
    `,this.menuOverlay=this.q("#menu-overlay"),this.garageOverlay=this.q("#garage-overlay"),this.modOverlay=this.q("#mod-overlay"),this.aboutOverlay=this.q("#about-overlay"),this.hudOverlay=this.q("#hud-overlay"),this.minimapCanvas=this.q("#hud-minimap"),this.minimapCtx=this.minimapCanvas.getContext("2d"),this.minimapAreaEl=this.q("#mm-area"),this.pauseOverlay=this.q("#pause-overlay"),this.newspaperOverlay=this.q("#newspaper-overlay"),this.chaosVignette=this.q("#chaos-vignette"),this.busWarningBanner=this.q("#bus-warning-banner"),this.bottomTickerEl=this.q("#bottom-ticker"),this.lossValueEl=this.q("#hud-loss"),this.multBadgeEl=this.q("#hud-mult"),this.comboBadgeEl=this.q("#hud-combo"),this.biomeBadgeEl=this.q("#hud-biome"),this.hudClockEl=this.q("#hud-clock"),this.hudDateEl=this.q("#hud-date"),this.hudVehBadgeEl=this.q("#hud-veh-badge"),this.cashEl=this.q("#hud-cash"),this.speedEl=this.q("#hud-speed"),this.distEl=this.q("#hud-dist"),this.batteryFillEl=this.q("#battery-fill"),this.batteryTextEl=this.q("#battery-text"),this.batteryBoxEl=this.q("#battery-box"),this.chaosFillEl=this.q("#chaos-fill"),this.chaosTextEl=this.q("#chaos-text"),this.mobBarBoxEl=this.q("#mob-radar"),this.mobFillEl=this.q("#mob-fill"),this.mobDistEl=this.q("#mob-dist"),this.wrongSideBannerEl=this.q("#wrong-side-banner"),this.soundBombBtn=this.q("#btn-sound-bomb"),this.soundBombCdEl=this.q("#bomb-cd"),this.chaosBtn=this.q("#btn-chaos"),this.gasBtn=this.q("#btn-gas"),this.sergeantPanel=this.q("#sergeant-panel"),this.sergeantTimerFill=this.q("#sergeant-timer-fill"),this.sergeantBribeBtn=this.q("#btn-bribe"),this.menuWalletEl=this.q("#menu-wallet"),this.menuSelectedVehicleEl=this.q("#menu-selected-veh"),this.menuBoardList=this.q("#menu-board-list"),this.garageWalletEl=this.q("#garage-wallet"),this.garageGridEl=this.q("#garage-grid"),this.garageStatusEl=this.q("#garage-status")}q(e){return this.root.querySelector(e)}bindInteractions(){const e=this.q("#driver-name-input");e.addEventListener("input",()=>{this.settings.driverName=e.value,ts(this.settings),this.game.updateSettings({driverName:this.settings.driverName})});const t=()=>{this.garageOverlay.classList.remove("active"),this.modOverlay.classList.remove("active"),this.aboutOverlay.classList.remove("active"),Rh(),this.game.startNewRun()};this.q("#btn-start-game").addEventListener("click",t),this.q("#btn-garage-play").addEventListener("click",t),this.q("#btn-mod-play").addEventListener("click",t),this.q("#btn-play-again").addEventListener("click",t),this.q("#btn-open-mod").addEventListener("click",()=>{this.renderModStudio(this.game.getModConfig()),this.menuOverlay.classList.remove("active"),this.modOverlay.classList.add("active")}),this.q("#btn-close-mod").addEventListener("click",()=>{this.modOverlay.classList.remove("active"),this.menuOverlay.classList.add("active")}),this.root.querySelectorAll("[data-mode]").forEach(_=>{_.addEventListener("click",()=>{const m=_.dataset.mode;this.settings.gameMode=m,ts(this.settings),this.game.updateSettings({gameMode:m}),this.root.querySelectorAll("[data-mode]").forEach(p=>p.classList.toggle("active",p.dataset.mode===m))})}),this.root.querySelectorAll("[data-qual]").forEach(_=>{_.addEventListener("click",()=>{const m=_.dataset.qual;this.settings.quality=m,ts(this.settings),this.game.updateSettings({quality:m}),this.root.querySelectorAll("[data-qual]").forEach(p=>p.classList.toggle("active",p.dataset.qual===m))})}),this.q("#btn-meme-test").addEventListener("click",()=>{this.game.previewRandomMeme()});const n=_=>{this.aboutReturnTarget=_,this.menuOverlay.classList.remove("active"),this.newspaperOverlay.classList.remove("active"),this.aboutOverlay.classList.add("active")};this.q("#btn-open-about").addEventListener("click",()=>n("menu")),this.q("#btn-open-about-card").addEventListener("click",()=>n("menu")),this.q("#btn-open-about-poster").addEventListener("click",()=>n("menu")),this.q("#btn-gameover-about").addEventListener("click",()=>n("gameover")),this.q("#btn-close-about").addEventListener("click",()=>{this.aboutOverlay.classList.remove("active"),this.aboutReturnTarget==="gameover"?this.newspaperOverlay.classList.add("active"):this.menuOverlay.classList.add("active")}),this.q("#btn-open-garage").addEventListener("click",()=>{this.updateGarageUi(this.game.getGarageData()),this.menuOverlay.classList.remove("active"),this.garageOverlay.classList.add("active")}),this.q("#btn-gameover-garage").addEventListener("click",()=>{this.game.returnToMenu(),this.updateGarageUi(this.game.getGarageData()),this.menuOverlay.classList.remove("active"),this.garageOverlay.classList.add("active")}),this.q("#btn-close-garage").addEventListener("click",()=>{this.garageOverlay.classList.remove("active"),this.menuOverlay.classList.add("active")}),this.q("#btn-fullscreen").addEventListener("click",()=>{Rh()});const i=(_,m)=>{const p=this.q(_);p.addEventListener("change",()=>m(p.checked))};i("#opt-autogas",_=>{this.settings.autoGas=_,ts(this.settings),this.game.updateSettings({autoGas:_}),this.gasBtn.classList.toggle("hidden",_)}),i("#opt-sound",_=>{this.settings.soundEnabled=_,ts(this.settings),this.game.updateSettings({soundEnabled:_})}),i("#opt-voice",_=>{this.settings.voiceEnabled=_,ts(this.settings),this.game.updateSettings({voiceEnabled:_})}),this.q("#btn-pause").addEventListener("click",()=>this.game.pauseGame()),this.q("#btn-resume").addEventListener("click",()=>this.game.resumeGame()),this.q("#btn-restart-pause").addEventListener("click",t),this.q("#btn-menu-pause").addEventListener("click",()=>this.game.returnToMenu()),this.q("#btn-back-menu").addEventListener("click",()=>{this.renderMenuLeaderboard(cl()),this.game.returnToMenu()}),this.q("#btn-save-png").addEventListener("click",()=>{this.lastEdition&&this.lastStats&&qy(this.lastEdition,this.lastStats,this.lastSnapshot)});const r=(_,m)=>{_.addEventListener("pointerdown",p=>{p.preventDefault(),m()})};r(this.q("#btn-horn"),()=>this.game.triggerHorn()),r(this.soundBombBtn,()=>this.game.triggerSoundBomb()),r(this.chaosBtn,()=>this.game.triggerChaosMode()),r(this.sergeantBribeBtn,()=>this.game.triggerPayTeaMoney());const a=this.q("#touch-steer-pad"),o=this.q("#btn-steer-left"),l=this.q("#btn-steer-right"),c=this.q("#btn-slow");let h=null;const u=_=>{const m=a.getBoundingClientRect(),p=m.left+m.width/2,x=_<p;this.game.setTouchSteer(x?-1:1),o.classList.toggle("pressed",x),l.classList.toggle("pressed",!x)},d=()=>{h=null,this.game.setTouchSteer(0),o.classList.remove("pressed"),l.classList.remove("pressed")};a.addEventListener("pointerdown",_=>{_.preventDefault(),h=_.pointerId,a.setPointerCapture?.(_.pointerId),u(_.clientX)}),a.addEventListener("pointermove",_=>{h===_.pointerId&&(_.preventDefault(),u(_.clientX))});const f=_=>{(h===null||h===_.pointerId)&&(_.preventDefault(),d())};a.addEventListener("pointerup",f),a.addEventListener("pointercancel",f),a.addEventListener("lostpointercapture",()=>d());const g=(_,m)=>{_.addEventListener("pointerdown",x=>{x.preventDefault(),_.setPointerCapture?.(x.pointerId),m(!0)});const p=x=>{x.preventDefault(),m(!1)};_.addEventListener("pointerup",p),_.addEventListener("pointercancel",p),_.addEventListener("lostpointercapture",p)};g(c,_=>{c.classList.toggle("pressed",_),this.game.setTouchSlow(_)}),g(this.gasBtn,_=>{this.gasBtn.classList.toggle("pressed",_),this.game.setTouchGas(_)})}updateGarageUi(e){const t=Ci(e.selected);this.menuWalletEl.textContent=Ei(e.walletTk),this.menuSelectedVehicleEl.textContent=`${t.badge} ${t.nameBn}`,this.garageWalletEl.textContent=Pt(e.walletTk),this.garageGridEl.innerHTML=sl.map(n=>{const i=e.owned.includes(n.id),r=e.selected===n.id,a=e.walletTk>=n.price,o=Math.min(100,Math.round(n.maxSpeedMs/34*100)),l=Math.min(100,Math.round(n.smashMass/2.8*100));let c="";return r?c='<button class="veh-btn veh-selected" disabled>✓ সিলেক্টেড</button>':i?c=`<button class="veh-btn veh-equip" data-veh-select="${n.id}">সিলেক্ট করুন</button>`:c=`<button class="veh-btn ${a?"veh-buy":"veh-locked"}" data-veh-buy="${n.id}">
          ${a?"🔓 কিনুন":"🔒 দাম"} ${Ei(n.price)}
        </button>`,`
        <div class="veh-card ${r?"is-selected":""}" style="--veh-accent:${n.accentHex}">
          <div class="veh-head">
            <span class="veh-badge">${n.badge}</span>
            <div class="veh-titles">
              <div class="veh-name">${$t(n.nameBn)}</div>
              <div class="veh-sub">${$t(n.subtitleBn)}</div>
            </div>
            <span class="veh-mult">${je(n.lossMultiplier)}×</span>
          </div>
          <p class="veh-desc">${$t(n.funnyDescBn)}</p>
          <div class="veh-bars">
            <div class="vb-row"><span>গতি</span><div class="vb-track"><div style="width:${o}%"></div></div></div>
            <div class="vb-row"><span>ধাক্কা</span><div class="vb-track"><div style="width:${l}%"></div></div></div>
          </div>
          ${c}
        </div>
      `}).join(""),this.garageGridEl.querySelectorAll("[data-veh-select]").forEach(n=>{n.addEventListener("click",()=>{const i=n.dataset.vehSelect;this.game.selectVehicle(i),this.garageStatusEl.textContent=`✓ ${Ci(i).nameBn} সিলেক্ট হয়েছে!`})}),this.garageGridEl.querySelectorAll("[data-veh-buy]").forEach(n=>{n.addEventListener("click",()=>{const i=n.dataset.vehBuy,r=this.game.buyVehicle(i);this.garageStatusEl.textContent=r.ok?`🎉 অভিনন্দন! ${Ci(i).nameBn} এখন আপনার গ্যারেজে!`:`⚠️ ${r.reason||"টাকা কম!"}`})})}renderModStudio(e){const t=this.q("#mod-scroll");t.innerHTML=`
      <div class="mod-group">
        <div class="mod-g-title">🎨 বডি কালার (Paint)</div>
        <div class="mod-swatch-row">
          ${Uv.map(n=>`
            <button class="mod-swatch ${e.bodyColor===n.hex?"active":""}" data-mod-color="${n.hex}" style="--sw:${n.css}">
              <span class="sw-dot"></span><span>${n.labelBn}</span>
            </button>`).join("")}
        </div>
      </div>

      <div class="mod-group">
        <div class="mod-g-title">🖼️ পেছনের প্যানেল ডিজাইন (Rear Panel Art)</div>
        <div class="mod-opt-grid">
          ${Au.map(n=>`<button class="mod-opt-btn ${e.panelStyle===n.id?"active":""}" data-mod-panel="${n.id}">${n.labelBn}</button>`).join("")}
        </div>
      </div>

      <div class="mod-group">
        <div class="mod-g-title">⛺ ছাদ / হুড স্টাইল (Roof Canopy)</div>
        <div class="mod-opt-grid">
          ${Ru.map(n=>`<button class="mod-opt-btn ${e.roofStyle===n.id?"active":""}" data-mod-roof="${n.id}">${n.labelBn}</button>`).join("")}
        </div>
      </div>

      <div class="mod-group">
        <div class="mod-g-title">🛞 রিম ও আন্ডারগ্লো নিয়ন লাইট</div>
        <div class="mod-opt-grid">
          ${Cu.map(n=>`<button class="mod-opt-btn ${e.wheelNeon===n.id?"active":""}" data-mod-wheel="${n.id}">${n.labelBn}</button>`).join("")}
        </div>
      </div>

      <div class="mod-group">
        <div class="mod-g-title">✨ ছাদের এক্সট্রা অ্যাক্সেসরি (Top Mod)</div>
        <div class="mod-opt-grid">
          ${Pu.map(n=>`<button class="mod-opt-btn ${e.topAccessory===n.id?"active":""}" data-mod-acc="${n.id}">${n.labelBn}</button>`).join("")}
        </div>
      </div>
    `,t.querySelectorAll("[data-mod-color]").forEach(n=>n.addEventListener("click",()=>this.renderModStudio(this.game.updateModConfig({bodyColor:Number(n.dataset.modColor)})))),t.querySelectorAll("[data-mod-panel]").forEach(n=>n.addEventListener("click",()=>this.renderModStudio(this.game.updateModConfig({panelStyle:n.dataset.modPanel})))),t.querySelectorAll("[data-mod-roof]").forEach(n=>n.addEventListener("click",()=>this.renderModStudio(this.game.updateModConfig({roofStyle:n.dataset.modRoof})))),t.querySelectorAll("[data-mod-wheel]").forEach(n=>n.addEventListener("click",()=>this.renderModStudio(this.game.updateModConfig({wheelNeon:n.dataset.modWheel})))),t.querySelectorAll("[data-mod-acc]").forEach(n=>n.addEventListener("click",()=>this.renderModStudio(this.game.updateModConfig({topAccessory:n.dataset.modAcc}))))}drawMinimap(e){const t=this.minimapCtx,n=this.minimapCanvas.width,i=this.minimapCanvas.height;t.clearRect(0,0,n,i),t.fillStyle="#0b1426",t.fillRect(0,0,n,i),t.fillStyle="#1e293b",t.fillRect(10,0,n-20,i),t.fillStyle="#facc15",t.fillRect(n/2-2,0,1.5,i),t.fillRect(n/2+1,0,1.5,i),t.fillStyle="#38bdf8",t.fillRect(9,0,1.5,i),t.fillRect(n-10.5,0,1.5,i);const r=c=>12+(c+tn)/(tn*2)*(n-24),a=c=>i-16-c/120*(i-22);for(const c of e.minimapBlips){const h=r(c.x),u=a(c.dz);u<2||u>i-2||(c.kind==="bus"?(t.fillStyle="#ef4444",t.fillRect(h-3.5,u-5.5,7,11)):c.kind==="car"?(t.fillStyle="#38bdf8",t.fillRect(h-2.5,u-3.5,5,7)):c.kind==="charge"?(t.fillStyle="#fde047",t.fillRect(h-4,u-4,8,8)):c.kind==="uturn"?(t.fillStyle="#ffffff",t.beginPath(),t.arc(h,u,3.8,0,Math.PI*2),t.fill()):c.kind==="michil"?(t.fillStyle="#f97316",t.fillRect(h-7,u-3,14,6)):c.kind==="sergeant"&&(t.fillStyle="#60a5fa",t.beginPath(),t.arc(h,u,4.2,0,Math.PI*2),t.fill()))}const o=12+(this.game.getPlayerXNorm()+1)/2*(n-24),l=i-14;t.fillStyle="#4ade80",t.beginPath(),t.moveTo(o,l-6),t.lineTo(o-5,l+5),t.lineTo(o+5,l+5),t.closePath(),t.fill()}updateHud(e){const t=this.garageOverlay.classList.contains("active"),n=this.modOverlay.classList.contains("active"),i=this.aboutOverlay.classList.contains("active");if(this.menuOverlay.classList.toggle("active",e.phase==="menu"&&!t&&!n&&!i),this.hudOverlay.classList.toggle("active",e.phase==="playing"||e.phase==="paused"),this.pauseOverlay.classList.toggle("active",e.phase==="paused"),this.newspaperOverlay.classList.toggle("active",e.phase==="gameover"&&!i),e.phase!=="playing"&&e.phase!=="paused"){this.chaosVignette.classList.remove("active");return}this.minimapAreaEl.textContent=e.dhakaAreaBn,this.drawMinimap(e);const r=new Date,a=r.getHours()%12||12,o=String(r.getMinutes()).padStart(2,"0"),l=r.getHours()>=12?"PM":"AM";this.hudClockEl.textContent=`${je(a)}:${je(o)} ${l}`;const c=["রবিবার","সোমবার","মঙ্গলবার","বুধবার","বৃহস্পতিবার","শুক্রবার","শনিবার"];this.hudDateEl.textContent=`${c[r.getDay()]}, ${je(r.getDate())} নভে`,this.hudVehBadgeEl.textContent=Ci(e.vehicleId).nameBn.split(" ")[0],this.lossValueEl.textContent=Ei(e.nationalLoss),this.multBadgeEl.textContent=`${je(e.multiplier)}×`,this.multBadgeEl.classList.toggle("hot",e.multiplier>1),this.cashEl.textContent=`☕ ${Pt(e.runCashTk)}`,this.distEl.textContent=`🛣️ ${je(e.distanceMeters)} মি.`,this.speedEl.textContent=je(e.speedKmh),this.biomeBadgeEl.textContent=e.dhakaAreaBn,e.combo>1?(this.comboBadgeEl.textContent=`🔥${je(e.combo)}×`,this.comboBadgeEl.style.opacity="1"):(this.comboBadgeEl.textContent="",this.comboBadgeEl.style.opacity="0"),this.batteryFillEl.style.width=`${e.battery}%`,this.batteryTextEl.textContent=e.isCharging?`⚡${je(e.battery)}%`:`${je(e.battery)}%`,this.batteryBoxEl.classList.toggle("charging",e.isCharging),this.batteryBoxEl.classList.toggle("critical",!e.isCharging&&e.battery<=22),this.chaosFillEl.style.width=`${e.chaos}%`,this.chaosTextEl.textContent=e.chaosActive?`${je(Math.ceil(e.chaosTimeLeft))}s`:`${je(e.chaos)}%`;const h=!e.chaosActive&&e.chaos>=100;if(this.chaosBtn.classList.toggle("ready",h),this.chaosBtn.classList.toggle("running",e.chaosActive),this.chaosVignette.classList.toggle("active",e.chaosActive),this.wrongSideBannerEl.classList.toggle("active",e.wrongSide),this.busWarningBanner.classList.toggle("active",e.nearBusWarning),this.soundBombCdEl.style.height=`${Math.round(e.soundBombCooldown*100)}%`,this.soundBombBtn.classList.toggle("cooling",e.soundBombCooldown>.01),this.mobBarBoxEl.classList.toggle("active",e.mobChasing),e.mobChasing){const u=Math.max(8,Math.min(100,Math.round((1-e.mobDistance/28)*100)));this.mobFillEl.style.width=`${u}%`,this.mobDistEl.textContent=`${je(e.mobDistance)} মি.`,this.mobBarBoxEl.classList.toggle("danger",e.mobDistance<9)}if(this.sergeantPanel.classList.toggle("active",e.sergeantAlert.active),e.sergeantAlert.active){const u=Math.max(0,e.sergeantAlert.timeLeft/e.sergeantAlert.maxTime*100);this.sergeantTimerFill.style.width=`${u}%`,this.sergeantBribeBtn.textContent=e.sergeantAlert.canAfford?`👮☕ চায়ের টাকা (${Pt(e.sergeantAlert.bribeCost)}) [E]`:"👮💸 টাকা কম — মিম বম্ব মারো!",this.sergeantBribeBtn.classList.toggle("cant-afford",!e.sergeantAlert.canAfford)}}showTicker(e){this.bottomTickerEl.className=`bottom-ticker active tk-${e.kind}`;const t=this.q("#bottom-ticker-text");t&&(t.textContent=e.text),window.clearTimeout(this.tickerTimeout),this.tickerTimeout=window.setTimeout(()=>{this.bottomTickerEl.classList.remove("active")},2800)}showNewspaperGameOver(e,t){const n=Wy(e,this.settings.driverName),i=Xy(e,this.settings.driverName);this.lastEdition=n,this.lastStats=e,this.lastSnapshot=t;const r=e.carsHit+e.cngsHit+e.bikesHit+e.rickshawsHit,a=this.q("#newspaper-sheet");a.innerHTML=`
      <div class="np-masthead">
        <div class="np-stamp">ঢাকা স্পেশাল<br/>সীলমোহরকৃত</div>
        <div class="np-kicker">ঢাকা থেকে প্রকাশিত • জাতীয় তাণ্ডব ক্রোড়পত্র</div>
        <h2 class="np-title">দৈনিক যানজট</h2>
        <div class="np-slogan">“সত্যের সন্ধানে, যানজটের মাঝখানে”</div>
        <div class="np-meta">
          <span>সংখ্যা: ${n.issueNo}</span>
          <span>তারিখ: ${n.dateBn}</span>
          <span>মূল্য: ৫ টাকা (চা ছাড়া)</span>
        </div>
      </div>

      <div class="np-headline-block">
        <span class="np-breaking-tag">ব্রেকিং নিউজ • ${$t(e.vehicleNameBn)}</span>
        <h3 class="np-headline">${$t(n.headline)}</h3>
        <p class="np-subhead">${$t(n.subhead)}</p>
      </div>

      <div class="np-body-grid">
        <div class="np-photo-col">
          <div class="np-photo-frame">
            ${t?`<img src="${t}" alt="ঘটনাস্থলের ছবি" />`:'<img src="./art/dhaka-hero.jpg" alt="ঢাকার রাস্তা" />'}
          </div>
          <div class="np-caption">${$t(n.photoCaption)}</div>
          <blockquote class="np-quote">${$t(n.witnessQuote)}</blockquote>
          <div class="np-story">
            ${n.storyParagraphs.map(o=>`<p>${$t(o)}</p>`).join("")}
          </div>
        </div>

        <aside class="np-ledger-col">
          <div class="np-ledger-box">
            <div class="np-ledger-header">জাতীয় ক্ষতির খতিয়ান</div>
            <div class="np-big-loss">${n.compactLoss}</div>
            <div class="np-earned-pill">💰 গ্যারেজে জমা: +${Ei(e.garageEarnedTk)}</div>
            <div class="np-rank-pill">${n.rankBadge} ${$t(n.rankTitle)}</div>
            <ul class="np-stat-list">
              <li><span>গাড়ি</span><b>${$t(e.vehicleNameBn)}</b></li>
              <li><span>দূরত্ব / রং সাইড</span><b>${je(Math.round(e.distanceMeters))} / ${je(Math.round(e.wrongSideMeters))} মি.</b></li>
              <li><span>সর্বোচ্চ গতি</span><b>${je(Math.round(e.topSpeedKmh))} km/h</b></li>
              <li><span>গাড়ি/বাইক ধাক্কা</span><b>${je(r)} টি</b></li>
              <li><span>দোকান ধ্বংস</span><b>${je(e.stallsSmashed)} টি</b></li>
              <li><span>অবৈধ চার্জ</span><b>${Pt(e.illegalPowerStolenTk)}</b></li>
              <li><span>চায়ের টাকা ঘুষ</span><b>${je(e.bribesPaid)} বার</b></li>
            </ul>
          </div>

          <div class="np-board-box">
            <div class="np-ledger-header">🏆 শীর্ষ তাণ্ডবকারী</div>
            <ol class="np-board-list">
              ${i.slice(0,5).map((o,l)=>`
                <li>
                  <span class="np-b-rank">${je(l+1)}.</span>
                  <span class="np-b-name">${$t(o.name)}</span>
                  <span class="np-b-val">${Ei(o.loss)}</span>
                </li>`).join("")}
            </ol>
          </div>
        </aside>
      </div>
      <div class="np-dev-credit-card">
        <img src="./art/dev-team.jpg?v=5" alt="Sabbir Codex & Majid" class="np-dev-thumb" />
        <div class="np-dev-info">
          <div class="np-dev-title">প্রকাশক ও গেম নির্মাতা: <strong>সাব্বির (Developer &amp; Co-Founder) এবং মাজিদ (Co-Developer)</strong></div>
          <div class="np-dev-sub">Sabbir Codex Development Team • মামার রাস্তা ৩ডি</div>
          <div class="np-dev-mini-avatars">
            <span><img src="./art/dev-sabbir.jpg?v=5" alt="সাব্বির" /> সাব্বির</span>
            <span><img src="./art/dev-majid.jpg?v=5" alt="মাজিদ" /> মাজিদ</span>
          </div>
        </div>
        <a href="${Vs}" target="_blank" rel="noopener noreferrer" class="np-fb-btn">
          📘 ফেসবুক আইডি
        </a>
      </div>
    `,this.renderMenuLeaderboard(i),this.q(".newspaper-scroll").scrollTop=0}renderMenuLeaderboard(e){if(!e.length){this.menuBoardList.innerHTML='<div class="board-empty">এখনও কোনো রেকর্ড নেই — প্রথম তাণ্ডব শুরু করুন!</div>';return}this.menuBoardList.innerHTML=e.slice(0,4).map((t,n)=>`
      <div class="board-row">
        <span class="br-pos">${je(n+1)}</span>
        <span class="br-name">${$t(t.name)} <small>(${$t(t.rank)})</small></span>
        <span class="br-loss">${Ei(t.loss)}</span>
      </div>`).join("")}}function $t(s){return s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function Dl(s){const e=document.getElementById("fatal-notice");if(e){e.textContent=s;return}const t=document.createElement("div");t.id="fatal-notice",t.style.cssText="position:fixed;bottom:10px;left:50%;transform:translateX(-50%);z-index:9999;background:#7f1d1d;color:#fef08a;padding:8px 14px;border-radius:10px;font-size:12px;font-weight:700;max-width:92vw;border:1.5px solid #facc15;pointer-events:auto;",t.textContent=s,document.body.appendChild(t)}window.addEventListener("error",s=>{Dl(`⚠️ Error: ${s.message||"Unknown error"}`)});window.addEventListener("unhandledrejection",s=>{const e=s.reason instanceof Error?s.reason.message:String(s.reason||"");e&&!e.toLowerCase().includes("fullscreen")&&!e.toLowerCase().includes("orientation")&&Dl(`⚠️ ${e}`)});function $y(){const s=document.getElementById("game-canvas"),e=document.getElementById("ui-root");if(!s||!e)return;const t=Yy(),n=new Zy(e,t);try{const i=new zy(s,t,{onHudUpdate:r=>n.updateHud(r),onTicker:r=>n.showTicker(r),onGarageChange:r=>n.updateGarageUi(r),onGameOver:(r,a)=>n.showNewspaperGameOver(r,a)});n.attachGame(i)}catch(i){const r=i instanceof Error?i.message:String(i);Dl(`⚠️ 3D চালু করতে সমস্যা হয়েছে: ${r}`)}}$y();"serviceWorker"in navigator&&(location.protocol==="https:"||location.hostname==="localhost")&&window.addEventListener("load",()=>{navigator.serviceWorker.register("./sw.js").catch(()=>{})});
