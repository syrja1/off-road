(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Tc="170",Ku=0,nl=1,Ju=2,jh=1,Zh=2,On=3,hi=0,$e=1,je=2,ci=0,ls=1,Xn=2,il=3,sl=4,Qu=5,Ti=100,tf=101,ef=102,nf=103,sf=104,rf=200,of=201,af=202,cf=203,Ta=204,Aa=205,lf=206,hf=207,uf=208,ff=209,df=210,pf=211,mf=212,gf=213,xf=214,Ra=0,Ca=1,Pa=2,ds=3,La=4,Ia=5,Da=6,Ua=7,Ac=0,_f=1,vf=2,li=0,Mf=1,yf=2,Sf=3,$h=4,wf=5,Ef=6,bf=7,Kh=300,ps=301,ms=302,Na=303,za=304,ho=306,Zs=1e3,Hn=1001,Fa=1002,We=1003,Tf=1004,cr=1005,un=1006,Mo=1007,Ri=1008,qn=1009,Jh=1010,Qh=1011,$s=1012,Rc=1013,Ci=1014,An=1015,nr=1016,Cc=1017,Pc=1018,gs=1020,tu=35902,eu=1021,nu=1022,Sn=1023,iu=1024,su=1025,hs=1026,xs=1027,Ks=1028,Lc=1029,ru=1030,Ic=1031,Dc=1033,Zr=33776,$r=33777,Kr=33778,Jr=33779,Oa=35840,Ba=35841,ka=35842,Ha=35843,Va=36196,Ga=37492,Wa=37496,Xa=37808,qa=37809,Ya=37810,ja=37811,Za=37812,$a=37813,Ka=37814,Ja=37815,Qa=37816,tc=37817,ec=37818,nc=37819,ic=37820,sc=37821,Qr=36492,rc=36494,oc=36495,ou=36283,ac=36284,cc=36285,lc=36286,Af=3200,Rf=3201,au=0,Cf=1,ai="",Ye="srgb",Ms="srgb-linear",uo="linear",ge="srgb",Fi=7680,rl=519,Pf=512,Lf=513,If=514,cu=515,Df=516,Uf=517,Nf=518,zf=519,ol=35044,al="300 es",Vn=2e3,ao=2001;class ys{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let cl=1234567;const Vs=Math.PI/180,_s=180/Math.PI;function Di(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ze[i&255]+ze[i>>8&255]+ze[i>>16&255]+ze[i>>24&255]+"-"+ze[t&255]+ze[t>>8&255]+"-"+ze[t>>16&15|64]+ze[t>>24&255]+"-"+ze[e&63|128]+ze[e>>8&255]+"-"+ze[e>>16&255]+ze[e>>24&255]+ze[n&255]+ze[n>>8&255]+ze[n>>16&255]+ze[n>>24&255]).toLowerCase()}function De(i,t,e){return Math.max(t,Math.min(e,i))}function Uc(i,t){return(i%t+t)%t}function Ff(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Of(i,t,e){return i!==t?(e-i)/(t-i):0}function Gs(i,t,e){return(1-e)*i+e*t}function Bf(i,t,e,n){return Gs(i,t,1-Math.exp(-e*n))}function kf(i,t=1){return t-Math.abs(Uc(i,t*2)-t)}function Hf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Vf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Gf(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Wf(i,t){return i+Math.random()*(t-i)}function Xf(i){return i*(.5-Math.random())}function qf(i){i!==void 0&&(cl=i);let t=cl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Yf(i){return i*Vs}function jf(i){return i*_s}function Zf(i){return(i&i-1)===0&&i!==0}function $f(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Kf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Jf(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),f=o((t-n)/2),d=r((n-t)/2),v=o((n-t)/2);switch(s){case"XYX":i.set(a*h,c*u,c*f,a*l);break;case"YZY":i.set(c*f,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*f,a*h,a*l);break;case"XZX":i.set(a*h,c*v,c*d,a*l);break;case"YXY":i.set(c*d,a*h,c*v,a*l);break;case"ZYZ":i.set(c*v,c*d,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ns(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function He(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const pi={DEG2RAD:Vs,RAD2DEG:_s,generateUUID:Di,clamp:De,euclideanModulo:Uc,mapLinear:Ff,inverseLerp:Of,lerp:Gs,damp:Bf,pingpong:kf,smoothstep:Hf,smootherstep:Vf,randInt:Gf,randFloat:Wf,randFloatSpread:Xf,seededRandom:qf,degToRad:Yf,radToDeg:jf,isPowerOfTwo:Zf,ceilPowerOfTwo:$f,floorPowerOfTwo:Kf,setQuaternionFromProperEuler:Jf,normalize:He,denormalize:ns};class St{constructor(t=0,e=0){St.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(De(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class jt{constructor(t,e,n,s,r,o,a,c,l){jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],v=n[8],x=s[0],m=s[3],p=s[6],M=s[1],g=s[4],_=s[7],E=s[2],b=s[5],w=s[8];return r[0]=o*x+a*M+c*E,r[3]=o*m+a*g+c*b,r[6]=o*p+a*_+c*w,r[1]=l*x+h*M+u*E,r[4]=l*m+h*g+u*b,r[7]=l*p+h*_+u*w,r[2]=f*x+d*M+v*E,r[5]=f*m+d*g+v*b,r[8]=f*p+d*_+v*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,f=a*c-h*r,d=l*r-o*c,v=e*u+n*f+s*d;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return t[0]=u*x,t[1]=(s*l-h*n)*x,t[2]=(a*n-s*o)*x,t[3]=f*x,t[4]=(h*e-s*c)*x,t[5]=(s*r-a*e)*x,t[6]=d*x,t[7]=(n*c-l*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(yo.makeScale(t,e)),this}rotate(t){return this.premultiply(yo.makeRotation(-t)),this}translate(t,e){return this.premultiply(yo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const yo=new jt;function lu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function co(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Qf(){const i=co("canvas");return i.style.display="block",i}const ll={};function Bs(i){i in ll||(ll[i]=!0,console.warn(i))}function td(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function ed(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function nd(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const re={enabled:!0,workingColorSpace:Ms,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ge&&(i.r=Gn(i.r),i.g=Gn(i.g),i.b=Gn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ge&&(i.r=us(i.r),i.g=us(i.g),i.b=us(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ai?uo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Gn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function us(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const hl=[.64,.33,.3,.6,.15,.06],ul=[.2126,.7152,.0722],fl=[.3127,.329],dl=new jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),pl=new jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);re.define({[Ms]:{primaries:hl,whitePoint:fl,transfer:uo,toXYZ:dl,fromXYZ:pl,luminanceCoefficients:ul,workingColorSpaceConfig:{unpackColorSpace:Ye},outputColorSpaceConfig:{drawingBufferColorSpace:Ye}},[Ye]:{primaries:hl,whitePoint:fl,transfer:ge,toXYZ:dl,fromXYZ:pl,luminanceCoefficients:ul,outputColorSpaceConfig:{drawingBufferColorSpace:Ye}}});let Oi;class id{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Oi===void 0&&(Oi=co("canvas")),Oi.width=t.width,Oi.height=t.height;const n=Oi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Oi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=co("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Gn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Gn(e[n]/255)*255):e[n]=Gn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let sd=0;class hu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sd++}),this.uuid=Di(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(So(s[o].image)):r.push(So(s[o]))}else r=So(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function So(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?id.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let rd=0;class ke extends ys{constructor(t=ke.DEFAULT_IMAGE,e=ke.DEFAULT_MAPPING,n=Hn,s=Hn,r=un,o=Ri,a=Sn,c=qn,l=ke.DEFAULT_ANISOTROPY,h=ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rd++}),this.uuid=Di(),this.name="",this.source=new hu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new St(0,0),this.repeat=new St(1,1),this.center=new St(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Kh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Zs:t.x=t.x-Math.floor(t.x);break;case Hn:t.x=t.x<0?0:1;break;case Fa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Zs:t.y=t.y-Math.floor(t.y);break;case Hn:t.y=t.y<0?0:1;break;case Fa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ke.DEFAULT_IMAGE=null;ke.DEFAULT_MAPPING=Kh;ke.DEFAULT_ANISOTROPY=1;class be{constructor(t=0,e=0,n=0,s=1){be.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],v=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(v-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(v+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const g=(l+1)/2,_=(d+1)/2,E=(p+1)/2,b=(h+f)/4,w=(u+x)/4,A=(v+m)/4;return g>_&&g>E?g<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(g),s=b/n,r=w/n):_>E?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=b/s,r=A/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=w/r,s=A/r),this.set(n,s,r,e),this}let M=Math.sqrt((m-v)*(m-v)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(m-v)/M,this.y=(u-x)/M,this.z=(f-h)/M,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class od extends ys{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new be(0,0,t,e),this.scissorTest=!1,this.viewport=new be(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new ke(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new hu(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pi extends od{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class uu extends ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=We,this.minFilter=We,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class ad extends ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=We,this.minFilter=We,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const f=r[o+0],d=r[o+1],v=r[o+2],x=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=v,t[e+3]=x;return}if(u!==x||c!==f||l!==d||h!==v){let m=1-a;const p=c*f+l*d+h*v+u*x,M=p>=0?1:-1,g=1-p*p;if(g>Number.EPSILON){const E=Math.sqrt(g),b=Math.atan2(E,p*M);m=Math.sin(m*b)/E,a=Math.sin(a*b)/E}const _=a*M;if(c=c*m+f*_,l=l*m+d*_,h=h*m+v*_,u=u*m+x*_,m===1-a){const E=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=E,l*=E,h*=E,u*=E}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],f=r[o+1],d=r[o+2],v=r[o+3];return t[e]=a*v+h*u+c*d-l*f,t[e+1]=c*v+h*f+l*u-a*d,t[e+2]=l*v+h*d+a*f-c*u,t[e+3]=h*v-a*u-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),f=c(n/2),d=c(s/2),v=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*d*v,this._y=l*d*u-f*h*v,this._z=l*h*v+f*d*u,this._w=l*h*u-f*d*v;break;case"YXZ":this._x=f*h*u+l*d*v,this._y=l*d*u-f*h*v,this._z=l*h*v-f*d*u,this._w=l*h*u+f*d*v;break;case"ZXY":this._x=f*h*u-l*d*v,this._y=l*d*u+f*h*v,this._z=l*h*v+f*d*u,this._w=l*h*u-f*d*v;break;case"ZYX":this._x=f*h*u-l*d*v,this._y=l*d*u+f*h*v,this._z=l*h*v-f*d*u,this._w=l*h*u+f*d*v;break;case"YZX":this._x=f*h*u+l*d*v,this._y=l*d*u+f*h*v,this._z=l*h*v-f*d*u,this._w=l*h*u-f*d*v;break;case"XZY":this._x=f*h*u-l*d*v,this._y=l*d*u-f*h*v,this._z=l*h*v+f*d*u,this._w=l*h*u+f*d*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(n>a&&n>u){const d=2*Math.sqrt(1+n-a-u);this._w=(h-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>u){const d=2*Math.sqrt(1+a-n-u);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+h)/d}else{const d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(De(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(t=0,e=0,n=0){U.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ml.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ml.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return wo.copy(this).projectOnVector(t),this.sub(wo)}reflect(t){return this.sub(wo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(De(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const wo=new U,ml=new fn;class Ui{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(mn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(mn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=mn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,mn):mn.fromBufferAttribute(r,o),mn.applyMatrix4(t.matrixWorld),this.expandByPoint(mn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),lr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),lr.copy(n.boundingBox)),lr.applyMatrix4(t.matrixWorld),this.union(lr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,mn),mn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(As),hr.subVectors(this.max,As),Bi.subVectors(t.a,As),ki.subVectors(t.b,As),Hi.subVectors(t.c,As),Zn.subVectors(ki,Bi),$n.subVectors(Hi,ki),mi.subVectors(Bi,Hi);let e=[0,-Zn.z,Zn.y,0,-$n.z,$n.y,0,-mi.z,mi.y,Zn.z,0,-Zn.x,$n.z,0,-$n.x,mi.z,0,-mi.x,-Zn.y,Zn.x,0,-$n.y,$n.x,0,-mi.y,mi.x,0];return!Eo(e,Bi,ki,Hi,hr)||(e=[1,0,0,0,1,0,0,0,1],!Eo(e,Bi,ki,Hi,hr))?!1:(ur.crossVectors(Zn,$n),e=[ur.x,ur.y,ur.z],Eo(e,Bi,ki,Hi,hr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,mn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(mn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Dn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Dn=[new U,new U,new U,new U,new U,new U,new U,new U],mn=new U,lr=new Ui,Bi=new U,ki=new U,Hi=new U,Zn=new U,$n=new U,mi=new U,As=new U,hr=new U,ur=new U,gi=new U;function Eo(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){gi.fromArray(i,r);const a=s.x*Math.abs(gi.x)+s.y*Math.abs(gi.y)+s.z*Math.abs(gi.z),c=t.dot(gi),l=e.dot(gi),h=n.dot(gi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const cd=new Ui,Rs=new U,bo=new U;class ir{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):cd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Rs.subVectors(t,this.center);const e=Rs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Rs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(bo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Rs.copy(t.center).add(bo)),this.expandByPoint(Rs.copy(t.center).sub(bo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Un=new U,To=new U,fr=new U,Kn=new U,Ao=new U,dr=new U,Ro=new U;class ld{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Un)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Un.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Un.copy(this.origin).addScaledVector(this.direction,e),Un.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){To.copy(t).add(e).multiplyScalar(.5),fr.copy(e).sub(t).normalize(),Kn.copy(this.origin).sub(To);const r=t.distanceTo(e)*.5,o=-this.direction.dot(fr),a=Kn.dot(this.direction),c=-Kn.dot(fr),l=Kn.lengthSq(),h=Math.abs(1-o*o);let u,f,d,v;if(h>0)if(u=o*c-a,f=o*a-c,v=r*h,u>=0)if(f>=-v)if(f<=v){const x=1/h;u*=x,f*=x,d=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f<=-v?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=v?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(To).addScaledVector(fr,f),d}intersectSphere(t,e){Un.subVectors(t.center,this.origin);const n=Un.dot(this.direction),s=Un.dot(Un)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Un)!==null}intersectTriangle(t,e,n,s,r){Ao.subVectors(e,t),dr.subVectors(n,t),Ro.crossVectors(Ao,dr);let o=this.direction.dot(Ro),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Kn.subVectors(this.origin,t);const c=a*this.direction.dot(dr.crossVectors(Kn,dr));if(c<0)return null;const l=a*this.direction.dot(Ao.cross(Kn));if(l<0||c+l>o)return null;const h=-a*Kn.dot(Ro);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pe{constructor(t,e,n,s,r,o,a,c,l,h,u,f,d,v,x,m){pe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,u,f,d,v,x,m)}set(t,e,n,s,r,o,a,c,l,h,u,f,d,v,x,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=v,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Vi.setFromMatrixColumn(t,0).length(),r=1/Vi.setFromMatrixColumn(t,1).length(),o=1/Vi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=o*h,d=o*u,v=a*h,x=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=d+v*l,e[5]=f-x*l,e[9]=-a*c,e[2]=x-f*l,e[6]=v+d*l,e[10]=o*c}else if(t.order==="YXZ"){const f=c*h,d=c*u,v=l*h,x=l*u;e[0]=f+x*a,e[4]=v*a-d,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-v,e[6]=x+f*a,e[10]=o*c}else if(t.order==="ZXY"){const f=c*h,d=c*u,v=l*h,x=l*u;e[0]=f-x*a,e[4]=-o*u,e[8]=v+d*a,e[1]=d+v*a,e[5]=o*h,e[9]=x-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const f=o*h,d=o*u,v=a*h,x=a*u;e[0]=c*h,e[4]=v*l-d,e[8]=f*l+x,e[1]=c*u,e[5]=x*l+f,e[9]=d*l-v,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const f=o*c,d=o*l,v=a*c,x=a*l;e[0]=c*h,e[4]=x-f*u,e[8]=v*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=d*u+v,e[10]=f-x*u}else if(t.order==="XZY"){const f=o*c,d=o*l,v=a*c,x=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+x,e[5]=o*h,e[9]=d*u-v,e[2]=v*u-d,e[6]=a*h,e[10]=x*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(hd,t,ud)}lookAt(t,e,n){const s=this.elements;return Je.subVectors(t,e),Je.lengthSq()===0&&(Je.z=1),Je.normalize(),Jn.crossVectors(n,Je),Jn.lengthSq()===0&&(Math.abs(n.z)===1?Je.x+=1e-4:Je.z+=1e-4,Je.normalize(),Jn.crossVectors(n,Je)),Jn.normalize(),pr.crossVectors(Je,Jn),s[0]=Jn.x,s[4]=pr.x,s[8]=Je.x,s[1]=Jn.y,s[5]=pr.y,s[9]=Je.y,s[2]=Jn.z,s[6]=pr.z,s[10]=Je.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],v=n[2],x=n[6],m=n[10],p=n[14],M=n[3],g=n[7],_=n[11],E=n[15],b=s[0],w=s[4],A=s[8],y=s[12],S=s[1],R=s[5],N=s[9],T=s[13],D=s[2],I=s[6],k=s[10],W=s[14],G=s[3],B=s[7],P=s[11],z=s[15];return r[0]=o*b+a*S+c*D+l*G,r[4]=o*w+a*R+c*I+l*B,r[8]=o*A+a*N+c*k+l*P,r[12]=o*y+a*T+c*W+l*z,r[1]=h*b+u*S+f*D+d*G,r[5]=h*w+u*R+f*I+d*B,r[9]=h*A+u*N+f*k+d*P,r[13]=h*y+u*T+f*W+d*z,r[2]=v*b+x*S+m*D+p*G,r[6]=v*w+x*R+m*I+p*B,r[10]=v*A+x*N+m*k+p*P,r[14]=v*y+x*T+m*W+p*z,r[3]=M*b+g*S+_*D+E*G,r[7]=M*w+g*R+_*I+E*B,r[11]=M*A+g*N+_*k+E*P,r[15]=M*y+g*T+_*W+E*z,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],d=t[14],v=t[3],x=t[7],m=t[11],p=t[15];return v*(+r*c*u-s*l*u-r*a*f+n*l*f+s*a*d-n*c*d)+x*(+e*c*d-e*l*f+r*o*f-s*o*d+s*l*h-r*c*h)+m*(+e*l*u-e*a*d-r*o*u+n*o*d+r*a*h-n*l*h)+p*(-s*a*h-e*c*u+e*a*f+s*o*u-n*o*f+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],d=t[11],v=t[12],x=t[13],m=t[14],p=t[15],M=u*m*l-x*f*l+x*c*d-a*m*d-u*c*p+a*f*p,g=v*f*l-h*m*l-v*c*d+o*m*d+h*c*p-o*f*p,_=h*x*l-v*u*l+v*a*d-o*x*d-h*a*p+o*u*p,E=v*u*c-h*x*c-v*a*f+o*x*f+h*a*m-o*u*m,b=e*M+n*g+s*_+r*E;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/b;return t[0]=M*w,t[1]=(x*f*r-u*m*r-x*s*d+n*m*d+u*s*p-n*f*p)*w,t[2]=(a*m*r-x*c*r+x*s*l-n*m*l-a*s*p+n*c*p)*w,t[3]=(u*c*r-a*f*r-u*s*l+n*f*l+a*s*d-n*c*d)*w,t[4]=g*w,t[5]=(h*m*r-v*f*r+v*s*d-e*m*d-h*s*p+e*f*p)*w,t[6]=(v*c*r-o*m*r-v*s*l+e*m*l+o*s*p-e*c*p)*w,t[7]=(o*f*r-h*c*r+h*s*l-e*f*l-o*s*d+e*c*d)*w,t[8]=_*w,t[9]=(v*u*r-h*x*r-v*n*d+e*x*d+h*n*p-e*u*p)*w,t[10]=(o*x*r-v*a*r+v*n*l-e*x*l-o*n*p+e*a*p)*w,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*d-e*a*d)*w,t[12]=E*w,t[13]=(h*x*s-v*u*s+v*n*f-e*x*f-h*n*m+e*u*m)*w,t[14]=(v*a*s-o*x*s-v*n*c+e*x*c+o*n*m-e*a*m)*w,t[15]=(o*u*s-h*a*s+h*n*c-e*u*c-o*n*f+e*a*f)*w,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,f=r*l,d=r*h,v=r*u,x=o*h,m=o*u,p=a*u,M=c*l,g=c*h,_=c*u,E=n.x,b=n.y,w=n.z;return s[0]=(1-(x+p))*E,s[1]=(d+_)*E,s[2]=(v-g)*E,s[3]=0,s[4]=(d-_)*b,s[5]=(1-(f+p))*b,s[6]=(m+M)*b,s[7]=0,s[8]=(v+g)*w,s[9]=(m-M)*w,s[10]=(1-(f+x))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Vi.set(s[0],s[1],s[2]).length();const o=Vi.set(s[4],s[5],s[6]).length(),a=Vi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],gn.copy(this);const l=1/r,h=1/o,u=1/a;return gn.elements[0]*=l,gn.elements[1]*=l,gn.elements[2]*=l,gn.elements[4]*=h,gn.elements[5]*=h,gn.elements[6]*=h,gn.elements[8]*=u,gn.elements[9]*=u,gn.elements[10]*=u,e.setFromRotationMatrix(gn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Vn){const c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s);let d,v;if(a===Vn)d=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===ao)d=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Vn){const c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(o-r),f=(e+t)*l,d=(n+s)*h;let v,x;if(a===Vn)v=(o+r)*u,x=-2*u;else if(a===ao)v=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=x,c[14]=-v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Vi=new U,gn=new pe,hd=new U(0,0,0),ud=new U(1,1,1),Jn=new U,pr=new U,Je=new U,gl=new pe,xl=new fn;class Rn{constructor(t=0,e=0,n=0,s=Rn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(De(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-De(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(De(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-De(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(De(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-De(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return gl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(gl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return xl.setFromEuler(this),this.setFromQuaternion(xl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Rn.DEFAULT_ORDER="XYZ";class fu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let fd=0;const _l=new U,Gi=new fn,Nn=new pe,mr=new U,Cs=new U,dd=new U,pd=new fn,vl=new U(1,0,0),Ml=new U(0,1,0),yl=new U(0,0,1),Sl={type:"added"},md={type:"removed"},Wi={type:"childadded",child:null},Co={type:"childremoved",child:null};class Te extends ys{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fd++}),this.uuid=Di(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Te.DEFAULT_UP.clone();const t=new U,e=new Rn,n=new fn,s=new U(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new pe},normalMatrix:{value:new jt}}),this.matrix=new pe,this.matrixWorld=new pe,this.matrixAutoUpdate=Te.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Gi.setFromAxisAngle(t,e),this.quaternion.multiply(Gi),this}rotateOnWorldAxis(t,e){return Gi.setFromAxisAngle(t,e),this.quaternion.premultiply(Gi),this}rotateX(t){return this.rotateOnAxis(vl,t)}rotateY(t){return this.rotateOnAxis(Ml,t)}rotateZ(t){return this.rotateOnAxis(yl,t)}translateOnAxis(t,e){return _l.copy(t).applyQuaternion(this.quaternion),this.position.add(_l.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(vl,t)}translateY(t){return this.translateOnAxis(Ml,t)}translateZ(t){return this.translateOnAxis(yl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Nn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?mr.copy(t):mr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Cs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nn.lookAt(Cs,mr,this.up):Nn.lookAt(mr,Cs,this.up),this.quaternion.setFromRotationMatrix(Nn),s&&(Nn.extractRotation(s.matrixWorld),Gi.setFromRotationMatrix(Nn),this.quaternion.premultiply(Gi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Sl),Wi.child=t,this.dispatchEvent(Wi),Wi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(md),Co.child=t,this.dispatchEvent(Co),Co.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Nn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Nn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Nn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Sl),Wi.child=t,this.dispatchEvent(Wi),Wi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,t,dd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,pd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),v=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),v.length>0&&(n.nodes=v)}return n.object=s,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Te.DEFAULT_UP=new U(0,1,0);Te.DEFAULT_MATRIX_AUTO_UPDATE=!0;Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xn=new U,zn=new U,Po=new U,Fn=new U,Xi=new U,qi=new U,wl=new U,Lo=new U,Io=new U,Do=new U,Uo=new be,No=new be,zo=new be;class yn{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),xn.subVectors(t,e),s.cross(xn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){xn.subVectors(s,e),zn.subVectors(n,e),Po.subVectors(t,e);const o=xn.dot(xn),a=xn.dot(zn),c=xn.dot(Po),l=zn.dot(zn),h=zn.dot(Po),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(l*c-a*h)*f,v=(o*h-a*c)*f;return r.set(1-d-v,v,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Fn)===null?!1:Fn.x>=0&&Fn.y>=0&&Fn.x+Fn.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,Fn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Fn.x),c.addScaledVector(o,Fn.y),c.addScaledVector(a,Fn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return Uo.setScalar(0),No.setScalar(0),zo.setScalar(0),Uo.fromBufferAttribute(t,e),No.fromBufferAttribute(t,n),zo.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Uo,r.x),o.addScaledVector(No,r.y),o.addScaledVector(zo,r.z),o}static isFrontFacing(t,e,n,s){return xn.subVectors(n,e),zn.subVectors(t,e),xn.cross(zn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return xn.subVectors(this.c,this.b),zn.subVectors(this.a,this.b),xn.cross(zn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return yn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return yn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return yn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return yn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return yn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Xi.subVectors(s,n),qi.subVectors(r,n),Lo.subVectors(t,n);const c=Xi.dot(Lo),l=qi.dot(Lo);if(c<=0&&l<=0)return e.copy(n);Io.subVectors(t,s);const h=Xi.dot(Io),u=qi.dot(Io);if(h>=0&&u<=h)return e.copy(s);const f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Xi,o);Do.subVectors(t,r);const d=Xi.dot(Do),v=qi.dot(Do);if(v>=0&&d<=v)return e.copy(r);const x=d*l-c*v;if(x<=0&&l>=0&&v<=0)return a=l/(l-v),e.copy(n).addScaledVector(qi,a);const m=h*v-d*u;if(m<=0&&u-h>=0&&d-v>=0)return wl.subVectors(r,s),a=(u-h)/(u-h+(d-v)),e.copy(s).addScaledVector(wl,a);const p=1/(m+x+f);return o=x*p,a=f*p,e.copy(n).addScaledVector(Xi,o).addScaledVector(qi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const du={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qn={h:0,s:0,l:0},gr={h:0,s:0,l:0};function Fo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Nt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ye){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,re.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=re.workingColorSpace){return this.r=t,this.g=e,this.b=n,re.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=re.workingColorSpace){if(t=Uc(t,1),e=De(e,0,1),n=De(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Fo(o,r,t+1/3),this.g=Fo(o,r,t),this.b=Fo(o,r,t-1/3)}return re.toWorkingColorSpace(this,s),this}setStyle(t,e=Ye){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ye){const n=du[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Gn(t.r),this.g=Gn(t.g),this.b=Gn(t.b),this}copyLinearToSRGB(t){return this.r=us(t.r),this.g=us(t.g),this.b=us(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ye){return re.fromWorkingColorSpace(Fe.copy(this),t),Math.round(De(Fe.r*255,0,255))*65536+Math.round(De(Fe.g*255,0,255))*256+Math.round(De(Fe.b*255,0,255))}getHexString(t=Ye){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=re.workingColorSpace){re.fromWorkingColorSpace(Fe.copy(this),e);const n=Fe.r,s=Fe.g,r=Fe.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=re.workingColorSpace){return re.fromWorkingColorSpace(Fe.copy(this),e),t.r=Fe.r,t.g=Fe.g,t.b=Fe.b,t}getStyle(t=Ye){re.fromWorkingColorSpace(Fe.copy(this),t);const e=Fe.r,n=Fe.g,s=Fe.b;return t!==Ye?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Qn),this.setHSL(Qn.h+t,Qn.s+e,Qn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Qn),t.getHSL(gr);const n=Gs(Qn.h,gr.h,e),s=Gs(Qn.s,gr.s,e),r=Gs(Qn.l,gr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fe=new Nt;Nt.NAMES=du;let gd=0;class sr extends ys{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gd++}),this.uuid=Di(),this.name="",this.blending=ls,this.side=hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ta,this.blendDst=Aa,this.blendEquation=Ti,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Nt(0,0,0),this.blendAlpha=0,this.depthFunc=ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fi,this.stencilZFail=Fi,this.stencilZPass=Fi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ls&&(n.blending=this.blending),this.side!==hi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ta&&(n.blendSrc=this.blendSrc),this.blendDst!==Aa&&(n.blendDst=this.blendDst),this.blendEquation!==Ti&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ds&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==rl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Fi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Fi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ge extends sr{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.combine=Ac,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ae=new U,xr=new St;class en{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ol,this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)xr.fromBufferAttribute(this,e),xr.applyMatrix3(t),this.setXY(e,xr.x,xr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix3(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix4(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyNormalMatrix(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.transformDirection(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ns(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=He(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ns(e,this.array)),e}setX(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ns(e,this.array)),e}setY(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ns(e,this.array)),e}setZ(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ns(e,this.array)),e}setW(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array),s=He(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array),s=He(s,this.array),r=He(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ol&&(t.usage=this.usage),t}}class pu extends en{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class mu extends en{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ue extends en{constructor(t,e,n){super(new Float32Array(t),e,n)}}let xd=0;const sn=new pe,Oo=new Te,Yi=new U,Qe=new Ui,Ps=new Ui,Ie=new U;class Ue extends ys{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xd++}),this.uuid=Di(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(lu(t)?mu:pu)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new jt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return sn.makeRotationFromQuaternion(t),this.applyMatrix4(sn),this}rotateX(t){return sn.makeRotationX(t),this.applyMatrix4(sn),this}rotateY(t){return sn.makeRotationY(t),this.applyMatrix4(sn),this}rotateZ(t){return sn.makeRotationZ(t),this.applyMatrix4(sn),this}translate(t,e,n){return sn.makeTranslation(t,e,n),this.applyMatrix4(sn),this}scale(t,e,n){return sn.makeScale(t,e,n),this.applyMatrix4(sn),this}lookAt(t){return Oo.lookAt(t),Oo.updateMatrix(),this.applyMatrix4(Oo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yi).negate(),this.translate(Yi.x,Yi.y,Yi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ue(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ui);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Qe.setFromBufferAttribute(r),this.morphTargetsRelative?(Ie.addVectors(this.boundingBox.min,Qe.min),this.boundingBox.expandByPoint(Ie),Ie.addVectors(this.boundingBox.max,Qe.max),this.boundingBox.expandByPoint(Ie)):(this.boundingBox.expandByPoint(Qe.min),this.boundingBox.expandByPoint(Qe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ir);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){const n=this.boundingSphere.center;if(Qe.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Ps.setFromBufferAttribute(a),this.morphTargetsRelative?(Ie.addVectors(Qe.min,Ps.min),Qe.expandByPoint(Ie),Ie.addVectors(Qe.max,Ps.max),Qe.expandByPoint(Ie)):(Qe.expandByPoint(Ps.min),Qe.expandByPoint(Ps.max))}Qe.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ie.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ie));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Ie.fromBufferAttribute(a,l),c&&(Yi.fromBufferAttribute(t,l),Ie.add(Yi)),s=Math.max(s,n.distanceToSquared(Ie))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new en(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let A=0;A<n.count;A++)a[A]=new U,c[A]=new U;const l=new U,h=new U,u=new U,f=new St,d=new St,v=new St,x=new U,m=new U;function p(A,y,S){l.fromBufferAttribute(n,A),h.fromBufferAttribute(n,y),u.fromBufferAttribute(n,S),f.fromBufferAttribute(r,A),d.fromBufferAttribute(r,y),v.fromBufferAttribute(r,S),h.sub(l),u.sub(l),d.sub(f),v.sub(f);const R=1/(d.x*v.y-v.x*d.y);isFinite(R)&&(x.copy(h).multiplyScalar(v.y).addScaledVector(u,-d.y).multiplyScalar(R),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-v.x).multiplyScalar(R),a[A].add(x),a[y].add(x),a[S].add(x),c[A].add(m),c[y].add(m),c[S].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let A=0,y=M.length;A<y;++A){const S=M[A],R=S.start,N=S.count;for(let T=R,D=R+N;T<D;T+=3)p(t.getX(T+0),t.getX(T+1),t.getX(T+2))}const g=new U,_=new U,E=new U,b=new U;function w(A){E.fromBufferAttribute(s,A),b.copy(E);const y=a[A];g.copy(y),g.sub(E.multiplyScalar(E.dot(y))).normalize(),_.crossVectors(b,y);const R=_.dot(c[A])<0?-1:1;o.setXYZW(A,g.x,g.y,g.z,R)}for(let A=0,y=M.length;A<y;++A){const S=M[A],R=S.start,N=S.count;for(let T=R,D=R+N;T<D;T+=3)w(t.getX(T+0)),w(t.getX(T+1)),w(t.getX(T+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new en(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const s=new U,r=new U,o=new U,a=new U,c=new U,l=new U,h=new U,u=new U;if(t)for(let f=0,d=t.count;f<d;f+=3){const v=t.getX(f+0),x=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,v),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,v),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ie.fromBufferAttribute(t,e),Ie.normalize(),t.setXYZ(e,Ie.x,Ie.y,Ie.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h);let d=0,v=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?d=c[x]*a.data.stride+a.offset:d=c[x]*h;for(let p=0;p<h;p++)f[v++]=l[d++]}return new en(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ue,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const f=l[h],d=t(f,n);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){const d=l[u];h.push(d.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const El=new pe,xi=new ld,_r=new ir,bl=new U,vr=new U,Mr=new U,yr=new U,Bo=new U,Sr=new U,Tl=new U,wr=new U;class Xt extends Te{constructor(t=new Ue,e=new Ge){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Sr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(Bo.fromBufferAttribute(u,t),o?Sr.addScaledVector(Bo,h):Sr.addScaledVector(Bo.sub(e),h))}e.add(Sr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),_r.copy(n.boundingSphere),_r.applyMatrix4(r),xi.copy(t.ray).recast(t.near),!(_r.containsPoint(xi.origin)===!1&&(xi.intersectSphere(_r,bl)===null||xi.origin.distanceToSquared(bl)>(t.far-t.near)**2))&&(El.copy(r).invert(),xi.copy(t.ray).applyMatrix4(El),!(n.boundingBox!==null&&xi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,xi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,x=f.length;v<x;v++){const m=f[v],p=o[m.materialIndex],M=Math.max(m.start,d.start),g=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let _=M,E=g;_<E;_+=3){const b=a.getX(_),w=a.getX(_+1),A=a.getX(_+2);s=Er(this,p,t,n,l,h,u,b,w,A),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const v=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let m=v,p=x;m<p;m+=3){const M=a.getX(m),g=a.getX(m+1),_=a.getX(m+2);s=Er(this,o,t,n,l,h,u,M,g,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let v=0,x=f.length;v<x;v++){const m=f[v],p=o[m.materialIndex],M=Math.max(m.start,d.start),g=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let _=M,E=g;_<E;_+=3){const b=_,w=_+1,A=_+2;s=Er(this,p,t,n,l,h,u,b,w,A),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const v=Math.max(0,d.start),x=Math.min(c.count,d.start+d.count);for(let m=v,p=x;m<p;m+=3){const M=m,g=m+1,_=m+2;s=Er(this,o,t,n,l,h,u,M,g,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function _d(i,t,e,n,s,r,o,a){let c;if(t.side===$e?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===hi,a),c===null)return null;wr.copy(a),wr.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(wr);return l<e.near||l>e.far?null:{distance:l,point:wr.clone(),object:i}}function Er(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,vr),i.getVertexPosition(c,Mr),i.getVertexPosition(l,yr);const h=_d(i,t,e,n,vr,Mr,yr,Tl);if(h){const u=new U;yn.getBarycoord(Tl,vr,Mr,yr,u),s&&(h.uv=yn.getInterpolatedAttribute(s,a,c,l,u,new St)),r&&(h.uv1=yn.getInterpolatedAttribute(r,a,c,l,u,new St)),o&&(h.normal=yn.getInterpolatedAttribute(o,a,c,l,u,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new U,materialIndex:0};yn.getNormal(vr,Mr,yr,f.normal),h.face=f,h.barycoord=u}return h}class ce extends Ue{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let f=0,d=0;v("z","y","x",-1,-1,n,e,t,o,r,0),v("z","y","x",1,-1,n,e,-t,o,r,1),v("x","z","y",1,1,t,n,e,s,o,2),v("x","z","y",1,-1,t,n,-e,s,o,3),v("x","y","z",1,-1,t,e,n,s,r,4),v("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ue(l,3)),this.setAttribute("normal",new ue(h,3)),this.setAttribute("uv",new ue(u,2));function v(x,m,p,M,g,_,E,b,w,A,y){const S=_/w,R=E/A,N=_/2,T=E/2,D=b/2,I=w+1,k=A+1;let W=0,G=0;const B=new U;for(let P=0;P<k;P++){const z=P*R-T;for(let H=0;H<I;H++){const q=H*S-N;B[x]=q*M,B[m]=z*g,B[p]=D,l.push(B.x,B.y,B.z),B[x]=0,B[m]=0,B[p]=b>0?1:-1,h.push(B.x,B.y,B.z),u.push(H/w),u.push(1-P/A),W+=1}}for(let P=0;P<A;P++)for(let z=0;z<w;z++){const H=f+z+I*P,q=f+z+I*(P+1),V=f+(z+1)+I*(P+1),Y=f+(z+1)+I*P;c.push(H,q,Y),c.push(q,V,Y),G+=6}a.addGroup(d,G,y),d+=G,f+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ce(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function vs(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ve(i){const t={};for(let e=0;e<i.length;e++){const n=vs(i[e]);for(const s in n)t[s]=n[s]}return t}function vd(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function gu(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:re.workingColorSpace}const Md={clone:vs,merge:Ve};var yd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Cn extends sr{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yd,this.fragmentShader=Sd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=vs(t.uniforms),this.uniformsGroups=vd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class xu extends Te{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pe,this.projectionMatrix=new pe,this.projectionMatrixInverse=new pe,this.coordinateSystem=Vn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ti=new U,Al=new St,Rl=new St;class hn extends xu{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=_s*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Vs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return _s*2*Math.atan(Math.tan(Vs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ti.x,ti.y).multiplyScalar(-t/ti.z),ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ti.x,ti.y).multiplyScalar(-t/ti.z)}getViewSize(t,e){return this.getViewBounds(t,Al,Rl),e.subVectors(Rl,Al)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Vs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ji=-90,Zi=1;class wd extends Te{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new hn(ji,Zi,t,e);s.layers=this.layers,this.add(s);const r=new hn(ji,Zi,t,e);r.layers=this.layers,this.add(r);const o=new hn(ji,Zi,t,e);o.layers=this.layers,this.add(o);const a=new hn(ji,Zi,t,e);a.layers=this.layers,this.add(a);const c=new hn(ji,Zi,t,e);c.layers=this.layers,this.add(c);const l=new hn(ji,Zi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===Vn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ao)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class _u extends ke{constructor(t,e,n,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:ps,super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ed extends Pi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new _u(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:un}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ce(5,5,5),r=new Cn({name:"CubemapFromEquirect",uniforms:vs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$e,blending:ci});r.uniforms.tEquirect.value=e;const o=new Xt(s,r),a=e.minFilter;return e.minFilter===Ri&&(e.minFilter=un),new wd(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const ko=new U,bd=new U,Td=new jt;class Si{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=ko.subVectors(n,e).cross(bd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ko),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Td.getNormalMatrix(t),s=this.coplanarPoint(ko).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _i=new ir,br=new U;class Nc{constructor(t=new Si,e=new Si,n=new Si,s=new Si,r=new Si,o=new Si){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Vn){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],f=s[7],d=s[8],v=s[9],x=s[10],m=s[11],p=s[12],M=s[13],g=s[14],_=s[15];if(n[0].setComponents(c-r,f-l,m-d,_-p).normalize(),n[1].setComponents(c+r,f+l,m+d,_+p).normalize(),n[2].setComponents(c+o,f+h,m+v,_+M).normalize(),n[3].setComponents(c-o,f-h,m-v,_-M).normalize(),n[4].setComponents(c-a,f-u,m-x,_-g).normalize(),e===Vn)n[5].setComponents(c+a,f+u,m+x,_+g).normalize();else if(e===ao)n[5].setComponents(a,u,x,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),_i.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),_i.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(_i)}intersectsSprite(t){return _i.center.set(0,0,0),_i.radius=.7071067811865476,_i.applyMatrix4(t.matrixWorld),this.intersectsSphere(_i)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(br.x=s.normal.x>0?t.max.x:t.min.x,br.y=s.normal.y>0?t.max.y:t.min.y,br.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(br)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function vu(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Ad(i){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,u=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((d,v)=>d.start-v.start);let f=0;for(let d=1;d<u.length;d++){const v=u[f],x=u[d];x.start<=v.start+v.count+1?v.count=Math.max(v.count,x.start+x.count-v.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,v=u.length;d<v;d++){const x=u[d];i.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class Ss extends Ue{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,f=e/c,d=[],v=[],x=[],m=[];for(let p=0;p<h;p++){const M=p*f-o;for(let g=0;g<l;g++){const _=g*u-r;v.push(_,-M,0),x.push(0,0,1),m.push(g/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<a;M++){const g=M+l*p,_=M+l*(p+1),E=M+1+l*(p+1),b=M+1+l*p;d.push(g,_,b),d.push(_,E,b)}this.setIndex(d),this.setAttribute("position",new ue(v,3)),this.setAttribute("normal",new ue(x,3)),this.setAttribute("uv",new ue(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ss(t.width,t.height,t.widthSegments,t.heightSegments)}}var Rd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Cd=`#ifdef USE_ALPHAHASH
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
#endif`,Pd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ld=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Id=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Dd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ud=`#ifdef USE_AOMAP
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
#endif`,Nd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zd=`#ifdef USE_BATCHING
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
#endif`,Fd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Od=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Bd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Hd=`#ifdef USE_IRIDESCENCE
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
#endif`,Vd=`#ifdef USE_BUMPMAP
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
#endif`,Gd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Wd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Yd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,jd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Zd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$d=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Kd=`#define PI 3.141592653589793
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
} // validated`,Jd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Qd=`vec3 transformedNormal = objectNormal;
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
#endif`,t1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,e1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,n1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,i1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,s1="gl_FragColor = linearToOutputTexel( gl_FragColor );",r1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,o1=`#ifdef USE_ENVMAP
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
#endif`,a1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,c1=`#ifdef USE_ENVMAP
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
#endif`,l1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,h1=`#ifdef USE_ENVMAP
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
#endif`,u1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,f1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,d1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,p1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,m1=`#ifdef USE_GRADIENTMAP
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
}`,g1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,x1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,v1=`uniform bool receiveShadow;
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
#endif`,M1=`#ifdef USE_ENVMAP
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
#endif`,y1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,S1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,w1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,E1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,b1=`PhysicalMaterial material;
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
#endif`,T1=`struct PhysicalMaterial {
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
}`,A1=`
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
#endif`,R1=`#if defined( RE_IndirectDiffuse )
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
#endif`,C1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,P1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,L1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,I1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,D1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,U1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,N1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,z1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,F1=`#if defined( USE_POINTS_UV )
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
#endif`,O1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,B1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,k1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,H1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,V1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,G1=`#ifdef USE_MORPHTARGETS
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
#endif`,W1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,X1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,q1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Y1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,j1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Z1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$1=`#ifdef USE_NORMALMAP
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
#endif`,K1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,J1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Q1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ep=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,np=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ip=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,op=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ap=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,up=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,fp=`float getShadowMask() {
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
}`,dp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pp=`#ifdef USE_SKINNING
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
#endif`,mp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gp=`#ifdef USE_SKINNING
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
#endif`,xp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_p=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Mp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,yp=`#ifdef USE_TRANSMISSION
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
#endif`,Sp=`#ifdef USE_TRANSMISSION
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
#endif`,wp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ep=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ap=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Rp=`uniform sampler2D t2D;
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
}`,Cp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Lp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ip=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dp=`#include <common>
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
}`,Up=`#if DEPTH_PACKING == 3200
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
}`,Np=`#define DISTANCE
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
}`,zp=`#define DISTANCE
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
}`,Fp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Op=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bp=`uniform float scale;
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
}`,kp=`uniform vec3 diffuse;
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
}`,Hp=`#include <common>
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
}`,Vp=`uniform vec3 diffuse;
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
}`,Gp=`#define LAMBERT
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
}`,Wp=`#define LAMBERT
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
}`,Xp=`#define MATCAP
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
}`,qp=`#define MATCAP
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
}`,Yp=`#define NORMAL
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
}`,jp=`#define NORMAL
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
}`,Zp=`#define PHONG
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
}`,$p=`#define PHONG
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
}`,Kp=`#define STANDARD
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
}`,Jp=`#define STANDARD
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
}`,Qp=`#define TOON
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
}`,t0=`#define TOON
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
}`,e0=`uniform float size;
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
}`,n0=`uniform vec3 diffuse;
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
}`,i0=`#include <common>
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
}`,s0=`uniform vec3 color;
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
}`,r0=`uniform float rotation;
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
}`,o0=`uniform vec3 diffuse;
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
}`,$t={alphahash_fragment:Rd,alphahash_pars_fragment:Cd,alphamap_fragment:Pd,alphamap_pars_fragment:Ld,alphatest_fragment:Id,alphatest_pars_fragment:Dd,aomap_fragment:Ud,aomap_pars_fragment:Nd,batching_pars_vertex:zd,batching_vertex:Fd,begin_vertex:Od,beginnormal_vertex:Bd,bsdfs:kd,iridescence_fragment:Hd,bumpmap_pars_fragment:Vd,clipping_planes_fragment:Gd,clipping_planes_pars_fragment:Wd,clipping_planes_pars_vertex:Xd,clipping_planes_vertex:qd,color_fragment:Yd,color_pars_fragment:jd,color_pars_vertex:Zd,color_vertex:$d,common:Kd,cube_uv_reflection_fragment:Jd,defaultnormal_vertex:Qd,displacementmap_pars_vertex:t1,displacementmap_vertex:e1,emissivemap_fragment:n1,emissivemap_pars_fragment:i1,colorspace_fragment:s1,colorspace_pars_fragment:r1,envmap_fragment:o1,envmap_common_pars_fragment:a1,envmap_pars_fragment:c1,envmap_pars_vertex:l1,envmap_physical_pars_fragment:M1,envmap_vertex:h1,fog_vertex:u1,fog_pars_vertex:f1,fog_fragment:d1,fog_pars_fragment:p1,gradientmap_pars_fragment:m1,lightmap_pars_fragment:g1,lights_lambert_fragment:x1,lights_lambert_pars_fragment:_1,lights_pars_begin:v1,lights_toon_fragment:y1,lights_toon_pars_fragment:S1,lights_phong_fragment:w1,lights_phong_pars_fragment:E1,lights_physical_fragment:b1,lights_physical_pars_fragment:T1,lights_fragment_begin:A1,lights_fragment_maps:R1,lights_fragment_end:C1,logdepthbuf_fragment:P1,logdepthbuf_pars_fragment:L1,logdepthbuf_pars_vertex:I1,logdepthbuf_vertex:D1,map_fragment:U1,map_pars_fragment:N1,map_particle_fragment:z1,map_particle_pars_fragment:F1,metalnessmap_fragment:O1,metalnessmap_pars_fragment:B1,morphinstance_vertex:k1,morphcolor_vertex:H1,morphnormal_vertex:V1,morphtarget_pars_vertex:G1,morphtarget_vertex:W1,normal_fragment_begin:X1,normal_fragment_maps:q1,normal_pars_fragment:Y1,normal_pars_vertex:j1,normal_vertex:Z1,normalmap_pars_fragment:$1,clearcoat_normal_fragment_begin:K1,clearcoat_normal_fragment_maps:J1,clearcoat_pars_fragment:Q1,iridescence_pars_fragment:tp,opaque_fragment:ep,packing:np,premultiplied_alpha_fragment:ip,project_vertex:sp,dithering_fragment:rp,dithering_pars_fragment:op,roughnessmap_fragment:ap,roughnessmap_pars_fragment:cp,shadowmap_pars_fragment:lp,shadowmap_pars_vertex:hp,shadowmap_vertex:up,shadowmask_pars_fragment:fp,skinbase_vertex:dp,skinning_pars_vertex:pp,skinning_vertex:mp,skinnormal_vertex:gp,specularmap_fragment:xp,specularmap_pars_fragment:_p,tonemapping_fragment:vp,tonemapping_pars_fragment:Mp,transmission_fragment:yp,transmission_pars_fragment:Sp,uv_pars_fragment:wp,uv_pars_vertex:Ep,uv_vertex:bp,worldpos_vertex:Tp,background_vert:Ap,background_frag:Rp,backgroundCube_vert:Cp,backgroundCube_frag:Pp,cube_vert:Lp,cube_frag:Ip,depth_vert:Dp,depth_frag:Up,distanceRGBA_vert:Np,distanceRGBA_frag:zp,equirect_vert:Fp,equirect_frag:Op,linedashed_vert:Bp,linedashed_frag:kp,meshbasic_vert:Hp,meshbasic_frag:Vp,meshlambert_vert:Gp,meshlambert_frag:Wp,meshmatcap_vert:Xp,meshmatcap_frag:qp,meshnormal_vert:Yp,meshnormal_frag:jp,meshphong_vert:Zp,meshphong_frag:$p,meshphysical_vert:Kp,meshphysical_frag:Jp,meshtoon_vert:Qp,meshtoon_frag:t0,points_vert:e0,points_frag:n0,shadow_vert:i0,shadow_frag:s0,sprite_vert:r0,sprite_frag:o0},mt={common:{diffuse:{value:new Nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},envMapRotation:{value:new jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new St(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new Nt(16777215)},opacity:{value:1},center:{value:new St(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}}},Tn={basic:{uniforms:Ve([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:Ve([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Nt(0)}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:Ve([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Nt(0)},specular:{value:new Nt(1118481)},shininess:{value:30}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:Ve([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new Nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:Ve([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new Nt(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:Ve([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:Ve([mt.points,mt.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:Ve([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:Ve([mt.common,mt.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:Ve([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:Ve([mt.sprite,mt.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new jt}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distanceRGBA:{uniforms:Ve([mt.common,mt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distanceRGBA_vert,fragmentShader:$t.distanceRGBA_frag},shadow:{uniforms:Ve([mt.lights,mt.fog,{color:{value:new Nt(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};Tn.physical={uniforms:Ve([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new St(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new Nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new St},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new Nt(0)},specularColor:{value:new Nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt},anisotropyVector:{value:new St},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jt}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};const Tr={r:0,b:0,g:0},vi=new Rn,a0=new pe;function c0(i,t,e,n,s,r,o){const a=new Nt(0);let c=r===!0?0:1,l,h,u=null,f=0,d=null;function v(M){let g=M.isScene===!0?M.background:null;return g&&g.isTexture&&(g=(M.backgroundBlurriness>0?e:t).get(g)),g}function x(M){let g=!1;const _=v(M);_===null?p(a,c):_&&_.isColor&&(p(_,1),g=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||g)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(M,g){const _=v(g);_&&(_.isCubeTexture||_.mapping===ho)?(h===void 0&&(h=new Xt(new ce(1,1,1),new Cn({name:"BackgroundCubeMaterial",uniforms:vs(Tn.backgroundCube.uniforms),vertexShader:Tn.backgroundCube.vertexShader,fragmentShader:Tn.backgroundCube.fragmentShader,side:$e,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,b,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),vi.copy(g.backgroundRotation),vi.x*=-1,vi.y*=-1,vi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(vi.y*=-1,vi.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(a0.makeRotationFromEuler(vi)),h.material.toneMapped=re.getTransfer(_.colorSpace)!==ge,(u!==_||f!==_.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=_,f=_.version,d=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Xt(new Ss(2,2),new Cn({name:"BackgroundMaterial",uniforms:vs(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:hi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,l.material.toneMapped=re.getTransfer(_.colorSpace)!==ge,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||f!==_.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=_,f=_.version,d=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function p(M,g){M.getRGB(Tr,gu(i)),n.buffers.color.setClear(Tr.r,Tr.g,Tr.b,g,o)}return{getClearColor:function(){return a},setClearColor:function(M,g=1){a.set(M),c=g,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,p(a,c)},render:x,addToRenderList:m}}function l0(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,o=!1;function a(S,R,N,T,D){let I=!1;const k=u(T,N,R);r!==k&&(r=k,l(r.object)),I=d(S,T,N,D),I&&v(S,T,N,D),D!==null&&t.update(D,i.ELEMENT_ARRAY_BUFFER),(I||o)&&(o=!1,_(S,R,N,T),D!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(D).buffer))}function c(){return i.createVertexArray()}function l(S){return i.bindVertexArray(S)}function h(S){return i.deleteVertexArray(S)}function u(S,R,N){const T=N.wireframe===!0;let D=n[S.id];D===void 0&&(D={},n[S.id]=D);let I=D[R.id];I===void 0&&(I={},D[R.id]=I);let k=I[T];return k===void 0&&(k=f(c()),I[T]=k),k}function f(S){const R=[],N=[],T=[];for(let D=0;D<e;D++)R[D]=0,N[D]=0,T[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:N,attributeDivisors:T,object:S,attributes:{},index:null}}function d(S,R,N,T){const D=r.attributes,I=R.attributes;let k=0;const W=N.getAttributes();for(const G in W)if(W[G].location>=0){const P=D[G];let z=I[G];if(z===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(z=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(z=S.instanceColor)),P===void 0||P.attribute!==z||z&&P.data!==z.data)return!0;k++}return r.attributesNum!==k||r.index!==T}function v(S,R,N,T){const D={},I=R.attributes;let k=0;const W=N.getAttributes();for(const G in W)if(W[G].location>=0){let P=I[G];P===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(P=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(P=S.instanceColor));const z={};z.attribute=P,P&&P.data&&(z.data=P.data),D[G]=z,k++}r.attributes=D,r.attributesNum=k,r.index=T}function x(){const S=r.newAttributes;for(let R=0,N=S.length;R<N;R++)S[R]=0}function m(S){p(S,0)}function p(S,R){const N=r.newAttributes,T=r.enabledAttributes,D=r.attributeDivisors;N[S]=1,T[S]===0&&(i.enableVertexAttribArray(S),T[S]=1),D[S]!==R&&(i.vertexAttribDivisor(S,R),D[S]=R)}function M(){const S=r.newAttributes,R=r.enabledAttributes;for(let N=0,T=R.length;N<T;N++)R[N]!==S[N]&&(i.disableVertexAttribArray(N),R[N]=0)}function g(S,R,N,T,D,I,k){k===!0?i.vertexAttribIPointer(S,R,N,D,I):i.vertexAttribPointer(S,R,N,T,D,I)}function _(S,R,N,T){x();const D=T.attributes,I=N.getAttributes(),k=R.defaultAttributeValues;for(const W in I){const G=I[W];if(G.location>=0){let B=D[W];if(B===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&(B=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&(B=S.instanceColor)),B!==void 0){const P=B.normalized,z=B.itemSize,H=t.get(B);if(H===void 0)continue;const q=H.buffer,V=H.type,Y=H.bytesPerElement,tt=V===i.INT||V===i.UNSIGNED_INT||B.gpuType===Rc;if(B.isInterleavedBufferAttribute){const J=B.data,ot=J.stride,ht=B.offset;if(J.isInstancedInterleavedBuffer){for(let _t=0;_t<G.locationSize;_t++)p(G.location+_t,J.meshPerAttribute);S.isInstancedMesh!==!0&&T._maxInstanceCount===void 0&&(T._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let _t=0;_t<G.locationSize;_t++)m(G.location+_t);i.bindBuffer(i.ARRAY_BUFFER,q);for(let _t=0;_t<G.locationSize;_t++)g(G.location+_t,z/G.locationSize,V,P,ot*Y,(ht+z/G.locationSize*_t)*Y,tt)}else{if(B.isInstancedBufferAttribute){for(let J=0;J<G.locationSize;J++)p(G.location+J,B.meshPerAttribute);S.isInstancedMesh!==!0&&T._maxInstanceCount===void 0&&(T._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let J=0;J<G.locationSize;J++)m(G.location+J);i.bindBuffer(i.ARRAY_BUFFER,q);for(let J=0;J<G.locationSize;J++)g(G.location+J,z/G.locationSize,V,P,z*Y,z/G.locationSize*J*Y,tt)}}else if(k!==void 0){const P=k[W];if(P!==void 0)switch(P.length){case 2:i.vertexAttrib2fv(G.location,P);break;case 3:i.vertexAttrib3fv(G.location,P);break;case 4:i.vertexAttrib4fv(G.location,P);break;default:i.vertexAttrib1fv(G.location,P)}}}}M()}function E(){A();for(const S in n){const R=n[S];for(const N in R){const T=R[N];for(const D in T)h(T[D].object),delete T[D];delete R[N]}delete n[S]}}function b(S){if(n[S.id]===void 0)return;const R=n[S.id];for(const N in R){const T=R[N];for(const D in T)h(T[D].object),delete T[D];delete R[N]}delete n[S.id]}function w(S){for(const R in n){const N=n[R];if(N[S.id]===void 0)continue;const T=N[S.id];for(const D in T)h(T[D].object),delete T[D];delete N[S.id]}}function A(){y(),o=!0,r!==s&&(r=s,l(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:A,resetDefaultState:y,dispose:E,releaseStatesOfGeometry:b,releaseStatesOfProgram:w,initAttributes:x,enableAttribute:m,disableUnusedAttributes:M}}function h0(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let d=0;for(let v=0;v<u;v++)d+=h[v];e.update(d,n,1)}function c(l,h,u,f){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let v=0;v<l.length;v++)o(l[v],h[v],f[v]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let v=0;for(let x=0;x<u;x++)v+=h[x]*f[x];e.update(v,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function u0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==Sn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const A=w===nr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==qn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==An&&!A)}function c(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),g=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=v>0,b=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:v,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:g,maxFragmentUniforms:_,vertexTextures:E,maxSamples:b}}function f0(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Si,a=new jt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){const v=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||v===null||v.length===0||r&&!m)r?h(null):l();else{const M=r?0:n,g=M*4;let _=p.clippingState||null;c.value=_,_=h(v,f,g,d);for(let E=0;E!==g;++E)_[E]=e[E];p.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,v){const x=u!==null?u.length:0;let m=null;if(x!==0){if(m=c.value,v!==!0||m===null){const p=d+x*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let g=0,_=d;g!==x;++g,_+=4)o.copy(u[g]).applyMatrix4(M,a),o.normal.toArray(m,_),m[_+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function d0(i){let t=new WeakMap;function e(o,a){return a===Na?o.mapping=ps:a===za&&(o.mapping=ms),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Na||a===za)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Ed(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class zc extends xu{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const os=4,Cl=[.125,.215,.35,.446,.526,.582],Ai=20,Ho=new zc,Pl=new Nt;let Vo=null,Go=0,Wo=0,Xo=!1;const wi=(1+Math.sqrt(5))/2,$i=1/wi,Ll=[new U(-wi,$i,0),new U(wi,$i,0),new U(-$i,0,wi),new U($i,0,wi),new U(0,wi,-$i),new U(0,wi,$i),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)];class Il{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Vo=this._renderer.getRenderTarget(),Go=this._renderer.getActiveCubeFace(),Wo=this._renderer.getActiveMipmapLevel(),Xo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ul(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Vo,Go,Wo),this._renderer.xr.enabled=Xo,t.scissorTest=!1,Ar(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ps||t.mapping===ms?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Vo=this._renderer.getRenderTarget(),Go=this._renderer.getActiveCubeFace(),Wo=this._renderer.getActiveMipmapLevel(),Xo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:un,minFilter:un,generateMipmaps:!1,type:nr,format:Sn,colorSpace:Ms,depthBuffer:!1},s=Dl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Dl(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=p0(r)),this._blurMaterial=m0(r,t,e)}return s}_compileMaterial(t){const e=new Xt(this._lodPlanes[0],t);this._renderer.compile(e,Ho)}_sceneToCubeUV(t,e,n,s){const a=new hn(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Pl),h.toneMapping=li,h.autoClear=!1;const d=new Ge({name:"PMREM.Background",side:$e,depthWrite:!1,depthTest:!1}),v=new Xt(new ce,d);let x=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,x=!0):(d.color.copy(Pl),x=!0);for(let p=0;p<6;p++){const M=p%3;M===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):M===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const g=this._cubeSize;Ar(s,M*g,p>2?g:0,g,g),h.setRenderTarget(s),x&&h.render(v,a),h.render(t,a)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===ps||t.mapping===ms;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ul());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Xt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;Ar(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Ho)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Ll[(s-r-1)%Ll.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Xt(this._lodPlanes[s],l),f=l.uniforms,d=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Ai-1),x=r/v,m=isFinite(r)?1+Math.floor(h*x):Ai;m>Ai&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ai}`);const p=[];let M=0;for(let w=0;w<Ai;++w){const A=w/x,y=Math.exp(-A*A/2);p.push(y),w===0?M+=y:w<m&&(M+=2*y)}for(let w=0;w<p.length;w++)p[w]=p[w]/M;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:g}=this;f.dTheta.value=v,f.mipInt.value=g-n;const _=this._sizeLods[s],E=3*_*(s>g-os?s-g+os:0),b=4*(this._cubeSize-_);Ar(e,E,b,3*_,2*_),c.setRenderTarget(e),c.render(u,Ho)}}function p0(i){const t=[],e=[],n=[];let s=i;const r=i-os+1+Cl.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-os?c=Cl[o-i+os-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,v=6,x=3,m=2,p=1,M=new Float32Array(x*v*d),g=new Float32Array(m*v*d),_=new Float32Array(p*v*d);for(let b=0;b<d;b++){const w=b%3*2/3-1,A=b>2?0:-1,y=[w,A,0,w+2/3,A,0,w+2/3,A+1,0,w,A,0,w+2/3,A+1,0,w,A+1,0];M.set(y,x*v*b),g.set(f,m*v*b);const S=[b,b,b,b,b,b];_.set(S,p*v*b)}const E=new Ue;E.setAttribute("position",new en(M,x)),E.setAttribute("uv",new en(g,m)),E.setAttribute("faceIndex",new en(_,p)),t.push(E),s>os&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Dl(i,t,e){const n=new Pi(i,t,e);return n.texture.mapping=ho,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ar(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function m0(i,t,e){const n=new Float32Array(Ai),s=new U(0,1,0);return new Cn({name:"SphericalGaussianBlur",defines:{n:Ai,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Fc(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Ul(){return new Cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fc(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Nl(){return new Cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Fc(){return`

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
	`}function g0(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Na||c===za,h=c===ps||c===ms;if(l||h){let u=t.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Il(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const d=a.image;return l&&d&&d.height>0||h&&d&&s(d)?(e===null&&(e=new Il(i)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function x0(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Bs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function _0(i,t,e,n){const s={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const v in f.attributes)t.remove(f.attributes[v]);for(const v in f.morphAttributes){const x=f.morphAttributes[v];for(let m=0,p=x.length;m<p;m++)t.remove(x[m])}f.removeEventListener("dispose",o),delete s[f.id];const d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function c(u){const f=u.attributes;for(const v in f)t.update(f[v],i.ARRAY_BUFFER);const d=u.morphAttributes;for(const v in d){const x=d[v];for(let m=0,p=x.length;m<p;m++)t.update(x[m],i.ARRAY_BUFFER)}}function l(u){const f=[],d=u.index,v=u.attributes.position;let x=0;if(d!==null){const M=d.array;x=d.version;for(let g=0,_=M.length;g<_;g+=3){const E=M[g+0],b=M[g+1],w=M[g+2];f.push(E,b,b,w,w,E)}}else if(v!==void 0){const M=v.array;x=v.version;for(let g=0,_=M.length/3-1;g<_;g+=3){const E=g+0,b=g+1,w=g+2;f.push(E,b,b,w,w,E)}}else return;const m=new(lu(f)?mu:pu)(f,1);m.version=x;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function v0(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,d){i.drawElements(n,d,r,f*o),e.update(d,n,1)}function l(f,d,v){v!==0&&(i.drawElementsInstanced(n,d,r,f*o,v),e.update(d,n,v))}function h(f,d,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,v);let m=0;for(let p=0;p<v;p++)m+=d[p];e.update(m,n,1)}function u(f,d,v,x){if(v===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/o,d[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,x,0,v);let p=0;for(let M=0;M<v;M++)p+=d[M]*x[M];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function M0(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function y0(i,t,e){const n=new WeakMap,s=new be;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let S=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",S)};var d=S;f!==void 0&&f.texture.dispose();const v=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],g=a.morphAttributes.color||[];let _=0;v===!0&&(_=1),x===!0&&(_=2),m===!0&&(_=3);let E=a.attributes.position.count*_,b=1;E>t.maxTextureSize&&(b=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);const w=new Float32Array(E*b*4*u),A=new uu(w,E,b,u);A.type=An,A.needsUpdate=!0;const y=_*4;for(let R=0;R<u;R++){const N=p[R],T=M[R],D=g[R],I=E*b*4*R;for(let k=0;k<N.count;k++){const W=k*y;v===!0&&(s.fromBufferAttribute(N,k),w[I+W+0]=s.x,w[I+W+1]=s.y,w[I+W+2]=s.z,w[I+W+3]=0),x===!0&&(s.fromBufferAttribute(T,k),w[I+W+4]=s.x,w[I+W+5]=s.y,w[I+W+6]=s.z,w[I+W+7]=0),m===!0&&(s.fromBufferAttribute(D,k),w[I+W+8]=s.x,w[I+W+9]=s.y,w[I+W+10]=s.z,w[I+W+11]=D.itemSize===4?s.w:1)}}f={count:u,texture:A,size:new St(E,b)},n.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let v=0;for(let m=0;m<l.length;m++)v+=l[m];const x=a.morphTargetsRelative?1:1-v;c.getUniforms().setValue(i,"morphTargetBaseInfluence",x),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function S0(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class Mu extends ke{constructor(t,e,n,s,r,o,a,c,l,h=hs){if(h!==hs&&h!==xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===hs&&(n=Ci),n===void 0&&h===xs&&(n=gs),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:We,this.minFilter=c!==void 0?c:We,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const yu=new ke,zl=new Mu(1,1),Su=new uu,wu=new ad,Eu=new _u,Fl=[],Ol=[],Bl=new Float32Array(16),kl=new Float32Array(9),Hl=new Float32Array(4);function ws(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Fl[s];if(r===void 0&&(r=new Float32Array(s),Fl[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Pe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Le(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function fo(i,t){let e=Ol[t];e===void 0&&(e=new Int32Array(t),Ol[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function w0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function E0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;i.uniform2fv(this.addr,t),Le(e,t)}}function b0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Pe(e,t))return;i.uniform3fv(this.addr,t),Le(e,t)}}function T0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;i.uniform4fv(this.addr,t),Le(e,t)}}function A0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Le(e,t)}else{if(Pe(e,n))return;Hl.set(n),i.uniformMatrix2fv(this.addr,!1,Hl),Le(e,n)}}function R0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Le(e,t)}else{if(Pe(e,n))return;kl.set(n),i.uniformMatrix3fv(this.addr,!1,kl),Le(e,n)}}function C0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Le(e,t)}else{if(Pe(e,n))return;Bl.set(n),i.uniformMatrix4fv(this.addr,!1,Bl),Le(e,n)}}function P0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function L0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;i.uniform2iv(this.addr,t),Le(e,t)}}function I0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;i.uniform3iv(this.addr,t),Le(e,t)}}function D0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;i.uniform4iv(this.addr,t),Le(e,t)}}function U0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function N0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;i.uniform2uiv(this.addr,t),Le(e,t)}}function z0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;i.uniform3uiv(this.addr,t),Le(e,t)}}function F0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;i.uniform4uiv(this.addr,t),Le(e,t)}}function O0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(zl.compareFunction=cu,r=zl):r=yu,e.setTexture2D(t||r,s)}function B0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||wu,s)}function k0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Eu,s)}function H0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Su,s)}function V0(i){switch(i){case 5126:return w0;case 35664:return E0;case 35665:return b0;case 35666:return T0;case 35674:return A0;case 35675:return R0;case 35676:return C0;case 5124:case 35670:return P0;case 35667:case 35671:return L0;case 35668:case 35672:return I0;case 35669:case 35673:return D0;case 5125:return U0;case 36294:return N0;case 36295:return z0;case 36296:return F0;case 35678:case 36198:case 36298:case 36306:case 35682:return O0;case 35679:case 36299:case 36307:return B0;case 35680:case 36300:case 36308:case 36293:return k0;case 36289:case 36303:case 36311:case 36292:return H0}}function G0(i,t){i.uniform1fv(this.addr,t)}function W0(i,t){const e=ws(t,this.size,2);i.uniform2fv(this.addr,e)}function X0(i,t){const e=ws(t,this.size,3);i.uniform3fv(this.addr,e)}function q0(i,t){const e=ws(t,this.size,4);i.uniform4fv(this.addr,e)}function Y0(i,t){const e=ws(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function j0(i,t){const e=ws(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Z0(i,t){const e=ws(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function $0(i,t){i.uniform1iv(this.addr,t)}function K0(i,t){i.uniform2iv(this.addr,t)}function J0(i,t){i.uniform3iv(this.addr,t)}function Q0(i,t){i.uniform4iv(this.addr,t)}function tm(i,t){i.uniform1uiv(this.addr,t)}function em(i,t){i.uniform2uiv(this.addr,t)}function nm(i,t){i.uniform3uiv(this.addr,t)}function im(i,t){i.uniform4uiv(this.addr,t)}function sm(i,t,e){const n=this.cache,s=t.length,r=fo(e,s);Pe(n,r)||(i.uniform1iv(this.addr,r),Le(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||yu,r[o])}function rm(i,t,e){const n=this.cache,s=t.length,r=fo(e,s);Pe(n,r)||(i.uniform1iv(this.addr,r),Le(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||wu,r[o])}function om(i,t,e){const n=this.cache,s=t.length,r=fo(e,s);Pe(n,r)||(i.uniform1iv(this.addr,r),Le(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Eu,r[o])}function am(i,t,e){const n=this.cache,s=t.length,r=fo(e,s);Pe(n,r)||(i.uniform1iv(this.addr,r),Le(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Su,r[o])}function cm(i){switch(i){case 5126:return G0;case 35664:return W0;case 35665:return X0;case 35666:return q0;case 35674:return Y0;case 35675:return j0;case 35676:return Z0;case 5124:case 35670:return $0;case 35667:case 35671:return K0;case 35668:case 35672:return J0;case 35669:case 35673:return Q0;case 5125:return tm;case 36294:return em;case 36295:return nm;case 36296:return im;case 35678:case 36198:case 36298:case 36306:case 35682:return sm;case 35679:case 36299:case 36307:return rm;case 35680:case 36300:case 36308:case 36293:return om;case 36289:case 36303:case 36311:case 36292:return am}}class lm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=V0(e.type)}}class hm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=cm(e.type)}}class um{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const qo=/(\w+)(\])?(\[|\.)?/g;function Vl(i,t){i.seq.push(t),i.map[t.id]=t}function fm(i,t,e){const n=i.name,s=n.length;for(qo.lastIndex=0;;){const r=qo.exec(n),o=qo.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Vl(e,l===void 0?new lm(a,i,t):new hm(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new um(a),Vl(e,u)),e=u}}}class to{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);fm(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Gl(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const dm=37297;let pm=0;function mm(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Wl=new jt;function gm(i){re._getMatrix(Wl,re.workingColorSpace,i);const t=`mat3( ${Wl.elements.map(e=>e.toFixed(4))} )`;switch(re.getTransfer(i)){case uo:return[t,"LinearTransferOETF"];case ge:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Xl(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+mm(i.getShaderSource(t),o)}else return s}function xm(i,t){const e=gm(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function _m(i,t){let e;switch(t){case Mf:e="Linear";break;case yf:e="Reinhard";break;case Sf:e="Cineon";break;case $h:e="ACESFilmic";break;case Ef:e="AgX";break;case bf:e="Neutral";break;case wf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Rr=new U;function vm(){re.getLuminanceCoefficients(Rr);const i=Rr.x.toFixed(4),t=Rr.y.toFixed(4),e=Rr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Mm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ks).join(`
`)}function ym(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Sm(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function ks(i){return i!==""}function ql(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Yl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const wm=/^[ \t]*#include +<([\w\d./]+)>/gm;function hc(i){return i.replace(wm,bm)}const Em=new Map;function bm(i,t){let e=$t[t];if(e===void 0){const n=Em.get(t);if(n!==void 0)e=$t[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return hc(e)}const Tm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jl(i){return i.replace(Tm,Am)}function Am(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Zl(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Rm(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===jh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Zh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===On&&(t="SHADOWMAP_TYPE_VSM"),t}function Cm(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ps:case ms:t="ENVMAP_TYPE_CUBE";break;case ho:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Pm(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ms:t="ENVMAP_MODE_REFRACTION";break}return t}function Lm(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ac:t="ENVMAP_BLENDING_MULTIPLY";break;case _f:t="ENVMAP_BLENDING_MIX";break;case vf:t="ENVMAP_BLENDING_ADD";break}return t}function Im(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Dm(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=Rm(e),l=Cm(e),h=Pm(e),u=Lm(e),f=Im(e),d=Mm(e),v=ym(r),x=s.createProgram();let m,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(ks).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(ks).join(`
`),p.length>0&&(p+=`
`)):(m=[Zl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ks).join(`
`),p=[Zl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==li?"#define TONE_MAPPING":"",e.toneMapping!==li?$t.tonemapping_pars_fragment:"",e.toneMapping!==li?_m("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,xm("linearToOutputTexel",e.outputColorSpace),vm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ks).join(`
`)),o=hc(o),o=ql(o,e),o=Yl(o,e),a=hc(a),a=ql(a,e),a=Yl(a,e),o=jl(o),a=jl(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===al?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===al?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const g=M+m+o,_=M+p+a,E=Gl(s,s.VERTEX_SHADER,g),b=Gl(s,s.FRAGMENT_SHADER,_);s.attachShader(x,E),s.attachShader(x,b),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function w(R){if(i.debug.checkShaderErrors){const N=s.getProgramInfoLog(x).trim(),T=s.getShaderInfoLog(E).trim(),D=s.getShaderInfoLog(b).trim();let I=!0,k=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(I=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,E,b);else{const W=Xl(s,E,"vertex"),G=Xl(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+N+`
`+W+`
`+G)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(T===""||D==="")&&(k=!1);k&&(R.diagnostics={runnable:I,programLog:N,vertexShader:{log:T,prefix:m},fragmentShader:{log:D,prefix:p}})}s.deleteShader(E),s.deleteShader(b),A=new to(s,x),y=Sm(s,x)}let A;this.getUniforms=function(){return A===void 0&&w(this),A};let y;this.getAttributes=function(){return y===void 0&&w(this),y};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(x,dm)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=pm++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=E,this.fragmentShader=b,this}let Um=0;class Nm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new zm(t),e.set(t,n)),n}}class zm{constructor(t){this.id=Um++,this.code=t,this.usedTimes=0}}function Fm(i,t,e,n,s,r,o){const a=new fu,c=new Nm,l=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return l.add(y),y===0?"uv":`uv${y}`}function m(y,S,R,N,T){const D=N.fog,I=T.geometry,k=y.isMeshStandardMaterial?N.environment:null,W=(y.isMeshStandardMaterial?e:t).get(y.envMap||k),G=W&&W.mapping===ho?W.image.height:null,B=v[y.type];y.precision!==null&&(d=s.getMaxPrecision(y.precision),d!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));const P=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,z=P!==void 0?P.length:0;let H=0;I.morphAttributes.position!==void 0&&(H=1),I.morphAttributes.normal!==void 0&&(H=2),I.morphAttributes.color!==void 0&&(H=3);let q,V,Y,tt;if(B){const fe=Tn[B];q=fe.vertexShader,V=fe.fragmentShader}else q=y.vertexShader,V=y.fragmentShader,c.update(y),Y=c.getVertexShaderID(y),tt=c.getFragmentShaderID(y);const J=i.getRenderTarget(),ot=i.state.buffers.depth.getReversed(),ht=T.isInstancedMesh===!0,_t=T.isBatchedMesh===!0,Bt=!!y.map,Et=!!y.matcap,Wt=!!W,X=!!y.aoMap,ee=!!y.lightMap,Dt=!!y.bumpMap,Ft=!!y.normalMap,Ut=!!y.displacementMap,me=!!y.emissiveMap,zt=!!y.metalnessMap,F=!!y.roughnessMap,C=y.anisotropy>0,Q=y.clearcoat>0,at=y.dispersion>0,lt=y.iridescence>0,rt=y.sheen>0,Lt=y.transmission>0,vt=C&&!!y.anisotropyMap,bt=Q&&!!y.clearcoatMap,ie=Q&&!!y.clearcoatNormalMap,ut=Q&&!!y.clearcoatRoughnessMap,Tt=lt&&!!y.iridescenceMap,Ot=lt&&!!y.iridescenceThicknessMap,Ht=rt&&!!y.sheenColorMap,At=rt&&!!y.sheenRoughnessMap,ne=!!y.specularMap,Zt=!!y.specularColorMap,xe=!!y.specularIntensityMap,j=Lt&&!!y.transmissionMap,xt=Lt&&!!y.thicknessMap,st=!!y.gradientMap,ct=!!y.alphaMap,wt=y.alphaTest>0,Mt=!!y.alphaHash,qt=!!y.extensions;let Ee=li;y.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Ee=i.toneMapping);const Ne={shaderID:B,shaderType:y.type,shaderName:y.name,vertexShader:q,fragmentShader:V,defines:y.defines,customVertexShaderID:Y,customFragmentShaderID:tt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:_t,batchingColor:_t&&T._colorsTexture!==null,instancing:ht,instancingColor:ht&&T.instanceColor!==null,instancingMorph:ht&&T.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:J===null?i.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Ms,alphaToCoverage:!!y.alphaToCoverage,map:Bt,matcap:Et,envMap:Wt,envMapMode:Wt&&W.mapping,envMapCubeUVHeight:G,aoMap:X,lightMap:ee,bumpMap:Dt,normalMap:Ft,displacementMap:f&&Ut,emissiveMap:me,normalMapObjectSpace:Ft&&y.normalMapType===Cf,normalMapTangentSpace:Ft&&y.normalMapType===au,metalnessMap:zt,roughnessMap:F,anisotropy:C,anisotropyMap:vt,clearcoat:Q,clearcoatMap:bt,clearcoatNormalMap:ie,clearcoatRoughnessMap:ut,dispersion:at,iridescence:lt,iridescenceMap:Tt,iridescenceThicknessMap:Ot,sheen:rt,sheenColorMap:Ht,sheenRoughnessMap:At,specularMap:ne,specularColorMap:Zt,specularIntensityMap:xe,transmission:Lt,transmissionMap:j,thicknessMap:xt,gradientMap:st,opaque:y.transparent===!1&&y.blending===ls&&y.alphaToCoverage===!1,alphaMap:ct,alphaTest:wt,alphaHash:Mt,combine:y.combine,mapUv:Bt&&x(y.map.channel),aoMapUv:X&&x(y.aoMap.channel),lightMapUv:ee&&x(y.lightMap.channel),bumpMapUv:Dt&&x(y.bumpMap.channel),normalMapUv:Ft&&x(y.normalMap.channel),displacementMapUv:Ut&&x(y.displacementMap.channel),emissiveMapUv:me&&x(y.emissiveMap.channel),metalnessMapUv:zt&&x(y.metalnessMap.channel),roughnessMapUv:F&&x(y.roughnessMap.channel),anisotropyMapUv:vt&&x(y.anisotropyMap.channel),clearcoatMapUv:bt&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:ie&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ut&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Tt&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:Ot&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ht&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:At&&x(y.sheenRoughnessMap.channel),specularMapUv:ne&&x(y.specularMap.channel),specularColorMapUv:Zt&&x(y.specularColorMap.channel),specularIntensityMapUv:xe&&x(y.specularIntensityMap.channel),transmissionMapUv:j&&x(y.transmissionMap.channel),thicknessMapUv:xt&&x(y.thicknessMap.channel),alphaMapUv:ct&&x(y.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(Ft||C),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:T.isPoints===!0&&!!I.attributes.uv&&(Bt||ct),fog:!!D,useFog:y.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:ot,skinning:T.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:H,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ee,decodeVideoTexture:Bt&&y.map.isVideoTexture===!0&&re.getTransfer(y.map.colorSpace)===ge,decodeVideoTextureEmissive:me&&y.emissiveMap.isVideoTexture===!0&&re.getTransfer(y.emissiveMap.colorSpace)===ge,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===je,flipSided:y.side===$e,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:qt&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qt&&y.extensions.multiDraw===!0||_t)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ne.vertexUv1s=l.has(1),Ne.vertexUv2s=l.has(2),Ne.vertexUv3s=l.has(3),l.clear(),Ne}function p(y){const S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(const R in y.defines)S.push(R),S.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(M(S,y),g(S,y),S.push(i.outputColorSpace)),S.push(y.customProgramCacheKey),S.join()}function M(y,S){y.push(S.precision),y.push(S.outputColorSpace),y.push(S.envMapMode),y.push(S.envMapCubeUVHeight),y.push(S.mapUv),y.push(S.alphaMapUv),y.push(S.lightMapUv),y.push(S.aoMapUv),y.push(S.bumpMapUv),y.push(S.normalMapUv),y.push(S.displacementMapUv),y.push(S.emissiveMapUv),y.push(S.metalnessMapUv),y.push(S.roughnessMapUv),y.push(S.anisotropyMapUv),y.push(S.clearcoatMapUv),y.push(S.clearcoatNormalMapUv),y.push(S.clearcoatRoughnessMapUv),y.push(S.iridescenceMapUv),y.push(S.iridescenceThicknessMapUv),y.push(S.sheenColorMapUv),y.push(S.sheenRoughnessMapUv),y.push(S.specularMapUv),y.push(S.specularColorMapUv),y.push(S.specularIntensityMapUv),y.push(S.transmissionMapUv),y.push(S.thicknessMapUv),y.push(S.combine),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.morphAttributeCount),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.numLightProbes),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}function g(y,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),y.push(a.mask)}function _(y){const S=v[y.type];let R;if(S){const N=Tn[S];R=Md.clone(N.uniforms)}else R=y.uniforms;return R}function E(y,S){let R;for(let N=0,T=h.length;N<T;N++){const D=h[N];if(D.cacheKey===S){R=D,++R.usedTimes;break}}return R===void 0&&(R=new Dm(i,S,y,r),h.push(R)),R}function b(y){if(--y.usedTimes===0){const S=h.indexOf(y);h[S]=h[h.length-1],h.pop(),y.destroy()}}function w(y){c.remove(y)}function A(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:E,releaseProgram:b,releaseShaderCache:w,programs:h,dispose:A}}function Om(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Bm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function $l(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Kl(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,f,d,v,x,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:v,renderOrder:u.renderOrder,z:x,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=v,p.renderOrder=u.renderOrder,p.z=x,p.group=m),t++,p}function a(u,f,d,v,x,m){const p=o(u,f,d,v,x,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):e.push(p)}function c(u,f,d,v,x,m){const p=o(u,f,d,v,x,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function l(u,f){e.length>1&&e.sort(u||Bm),n.length>1&&n.sort(f||$l),s.length>1&&s.sort(f||$l)}function h(){for(let u=t,f=i.length;u<f;u++){const d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function km(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Kl,i.set(n,[o])):s>=r.length?(o=new Kl,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Hm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new Nt};break;case"SpotLight":e={position:new U,direction:new U,color:new Nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new Nt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new Nt,groundColor:new Nt};break;case"RectAreaLight":e={color:new Nt,position:new U,halfWidth:new U,halfHeight:new U};break}return i[t.id]=e,e}}}function Vm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Gm=0;function Wm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Xm(i){const t=new Hm,e=Vm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new U);const s=new U,r=new pe,o=new pe;function a(l){let h=0,u=0,f=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let d=0,v=0,x=0,m=0,p=0,M=0,g=0,_=0,E=0,b=0,w=0;l.sort(Wm);for(let y=0,S=l.length;y<S;y++){const R=l[y],N=R.color,T=R.intensity,D=R.distance,I=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=N.r*T,u+=N.g*T,f+=N.b*T;else if(R.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(R.sh.coefficients[k],T);w++}else if(R.isDirectionalLight){const k=t.get(R);if(k.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const W=R.shadow,G=e.get(R);G.shadowIntensity=W.intensity,G.shadowBias=W.bias,G.shadowNormalBias=W.normalBias,G.shadowRadius=W.radius,G.shadowMapSize=W.mapSize,n.directionalShadow[d]=G,n.directionalShadowMap[d]=I,n.directionalShadowMatrix[d]=R.shadow.matrix,M++}n.directional[d]=k,d++}else if(R.isSpotLight){const k=t.get(R);k.position.setFromMatrixPosition(R.matrixWorld),k.color.copy(N).multiplyScalar(T),k.distance=D,k.coneCos=Math.cos(R.angle),k.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),k.decay=R.decay,n.spot[x]=k;const W=R.shadow;if(R.map&&(n.spotLightMap[E]=R.map,E++,W.updateMatrices(R),R.castShadow&&b++),n.spotLightMatrix[x]=W.matrix,R.castShadow){const G=e.get(R);G.shadowIntensity=W.intensity,G.shadowBias=W.bias,G.shadowNormalBias=W.normalBias,G.shadowRadius=W.radius,G.shadowMapSize=W.mapSize,n.spotShadow[x]=G,n.spotShadowMap[x]=I,_++}x++}else if(R.isRectAreaLight){const k=t.get(R);k.color.copy(N).multiplyScalar(T),k.halfWidth.set(R.width*.5,0,0),k.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=k,m++}else if(R.isPointLight){const k=t.get(R);if(k.color.copy(R.color).multiplyScalar(R.intensity),k.distance=R.distance,k.decay=R.decay,R.castShadow){const W=R.shadow,G=e.get(R);G.shadowIntensity=W.intensity,G.shadowBias=W.bias,G.shadowNormalBias=W.normalBias,G.shadowRadius=W.radius,G.shadowMapSize=W.mapSize,G.shadowCameraNear=W.camera.near,G.shadowCameraFar=W.camera.far,n.pointShadow[v]=G,n.pointShadowMap[v]=I,n.pointShadowMatrix[v]=R.shadow.matrix,g++}n.point[v]=k,v++}else if(R.isHemisphereLight){const k=t.get(R);k.skyColor.copy(R.color).multiplyScalar(T),k.groundColor.copy(R.groundColor).multiplyScalar(T),n.hemi[p]=k,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=mt.LTC_FLOAT_1,n.rectAreaLTC2=mt.LTC_FLOAT_2):(n.rectAreaLTC1=mt.LTC_HALF_1,n.rectAreaLTC2=mt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const A=n.hash;(A.directionalLength!==d||A.pointLength!==v||A.spotLength!==x||A.rectAreaLength!==m||A.hemiLength!==p||A.numDirectionalShadows!==M||A.numPointShadows!==g||A.numSpotShadows!==_||A.numSpotMaps!==E||A.numLightProbes!==w)&&(n.directional.length=d,n.spot.length=x,n.rectArea.length=m,n.point.length=v,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=g,n.pointShadowMap.length=g,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=g,n.spotLightMatrix.length=_+E-b,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=w,A.directionalLength=d,A.pointLength=v,A.spotLength=x,A.rectAreaLength=m,A.hemiLength=p,A.numDirectionalShadows=M,A.numPointShadows=g,A.numSpotShadows=_,A.numSpotMaps=E,A.numLightProbes=w,n.version=Gm++)}function c(l,h){let u=0,f=0,d=0,v=0,x=0;const m=h.matrixWorldInverse;for(let p=0,M=l.length;p<M;p++){const g=l[p];if(g.isDirectionalLight){const _=n.directional[u];_.direction.setFromMatrixPosition(g.matrixWorld),s.setFromMatrixPosition(g.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),u++}else if(g.isSpotLight){const _=n.spot[d];_.position.setFromMatrixPosition(g.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(g.matrixWorld),s.setFromMatrixPosition(g.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),d++}else if(g.isRectAreaLight){const _=n.rectArea[v];_.position.setFromMatrixPosition(g.matrixWorld),_.position.applyMatrix4(m),o.identity(),r.copy(g.matrixWorld),r.premultiply(m),o.extractRotation(r),_.halfWidth.set(g.width*.5,0,0),_.halfHeight.set(0,g.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),v++}else if(g.isPointLight){const _=n.point[f];_.position.setFromMatrixPosition(g.matrixWorld),_.position.applyMatrix4(m),f++}else if(g.isHemisphereLight){const _=n.hemi[x];_.direction.setFromMatrixPosition(g.matrixWorld),_.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:n}}function Jl(i){const t=new Xm(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function qm(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Jl(i),t.set(s,[a])):r>=o.length?(a=new Jl(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class Ym extends sr{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Af,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class jm extends sr{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Zm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$m=`uniform sampler2D shadow_pass;
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
}`;function Km(i,t,e){let n=new Nc;const s=new St,r=new St,o=new be,a=new Ym({depthPacking:Rf}),c=new jm,l={},h=e.maxTextureSize,u={[hi]:$e,[$e]:hi,[je]:je},f=new Cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new St},radius:{value:4}},vertexShader:Zm,fragmentShader:$m}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const v=new Ue;v.setAttribute("position",new en(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Xt(v,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jh;let p=this.type;this.render=function(b,w,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const y=i.getRenderTarget(),S=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),N=i.state;N.setBlending(ci),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const T=p!==On&&this.type===On,D=p===On&&this.type!==On;for(let I=0,k=b.length;I<k;I++){const W=b[I],G=W.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const B=G.getFrameExtents();if(s.multiply(B),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/B.x),s.x=r.x*B.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/B.y),s.y=r.y*B.y,G.mapSize.y=r.y)),G.map===null||T===!0||D===!0){const z=this.type!==On?{minFilter:We,magFilter:We}:{};G.map!==null&&G.map.dispose(),G.map=new Pi(s.x,s.y,z),G.map.texture.name=W.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();const P=G.getViewportCount();for(let z=0;z<P;z++){const H=G.getViewport(z);o.set(r.x*H.x,r.y*H.y,r.x*H.z,r.y*H.w),N.viewport(o),G.updateMatrices(W,z),n=G.getFrustum(),_(w,A,G.camera,W,this.type)}G.isPointLightShadow!==!0&&this.type===On&&M(G,A),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(y,S,R)};function M(b,w){const A=t.update(x);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Pi(s.x,s.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(w,null,A,f,x,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(w,null,A,d,x,null)}function g(b,w,A,y){let S=null;const R=A.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(R!==void 0)S=R;else if(S=A.isPointLight===!0?c:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const N=S.uuid,T=w.uuid;let D=l[N];D===void 0&&(D={},l[N]=D);let I=D[T];I===void 0&&(I=S.clone(),D[T]=I,w.addEventListener("dispose",E)),S=I}if(S.visible=w.visible,S.wireframe=w.wireframe,y===On?S.side=w.shadowSide!==null?w.shadowSide:w.side:S.side=w.shadowSide!==null?w.shadowSide:u[w.side],S.alphaMap=w.alphaMap,S.alphaTest=w.alphaTest,S.map=w.map,S.clipShadows=w.clipShadows,S.clippingPlanes=w.clippingPlanes,S.clipIntersection=w.clipIntersection,S.displacementMap=w.displacementMap,S.displacementScale=w.displacementScale,S.displacementBias=w.displacementBias,S.wireframeLinewidth=w.wireframeLinewidth,S.linewidth=w.linewidth,A.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const N=i.properties.get(S);N.light=A}return S}function _(b,w,A,y,S){if(b.visible===!1)return;if(b.layers.test(w.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&S===On)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,b.matrixWorld);const T=t.update(b),D=b.material;if(Array.isArray(D)){const I=T.groups;for(let k=0,W=I.length;k<W;k++){const G=I[k],B=D[G.materialIndex];if(B&&B.visible){const P=g(b,B,y,S);b.onBeforeShadow(i,b,w,A,T,P,G),i.renderBufferDirect(A,null,T,P,b,G),b.onAfterShadow(i,b,w,A,T,P,G)}}}else if(D.visible){const I=g(b,D,y,S);b.onBeforeShadow(i,b,w,A,T,I,null),i.renderBufferDirect(A,null,T,I,b,null),b.onAfterShadow(i,b,w,A,T,I,null)}}const N=b.children;for(let T=0,D=N.length;T<D;T++)_(N[T],w,A,y,S)}function E(b){b.target.removeEventListener("dispose",E);for(const A in l){const y=l[A],S=b.target.uuid;S in y&&(y[S].dispose(),delete y[S])}}}const Jm={[Ra]:Ca,[Pa]:Da,[La]:Ua,[ds]:Ia,[Ca]:Ra,[Da]:Pa,[Ua]:La,[Ia]:ds};function Qm(i,t){function e(){let j=!1;const xt=new be;let st=null;const ct=new be(0,0,0,0);return{setMask:function(wt){st!==wt&&!j&&(i.colorMask(wt,wt,wt,wt),st=wt)},setLocked:function(wt){j=wt},setClear:function(wt,Mt,qt,Ee,Ne){Ne===!0&&(wt*=Ee,Mt*=Ee,qt*=Ee),xt.set(wt,Mt,qt,Ee),ct.equals(xt)===!1&&(i.clearColor(wt,Mt,qt,Ee),ct.copy(xt))},reset:function(){j=!1,st=null,ct.set(-1,0,0,0)}}}function n(){let j=!1,xt=!1,st=null,ct=null,wt=null;return{setReversed:function(Mt){if(xt!==Mt){const qt=t.get("EXT_clip_control");xt?qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.ZERO_TO_ONE_EXT):qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.NEGATIVE_ONE_TO_ONE_EXT);const Ee=wt;wt=null,this.setClear(Ee)}xt=Mt},getReversed:function(){return xt},setTest:function(Mt){Mt?J(i.DEPTH_TEST):ot(i.DEPTH_TEST)},setMask:function(Mt){st!==Mt&&!j&&(i.depthMask(Mt),st=Mt)},setFunc:function(Mt){if(xt&&(Mt=Jm[Mt]),ct!==Mt){switch(Mt){case Ra:i.depthFunc(i.NEVER);break;case Ca:i.depthFunc(i.ALWAYS);break;case Pa:i.depthFunc(i.LESS);break;case ds:i.depthFunc(i.LEQUAL);break;case La:i.depthFunc(i.EQUAL);break;case Ia:i.depthFunc(i.GEQUAL);break;case Da:i.depthFunc(i.GREATER);break;case Ua:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ct=Mt}},setLocked:function(Mt){j=Mt},setClear:function(Mt){wt!==Mt&&(xt&&(Mt=1-Mt),i.clearDepth(Mt),wt=Mt)},reset:function(){j=!1,st=null,ct=null,wt=null,xt=!1}}}function s(){let j=!1,xt=null,st=null,ct=null,wt=null,Mt=null,qt=null,Ee=null,Ne=null;return{setTest:function(fe){j||(fe?J(i.STENCIL_TEST):ot(i.STENCIL_TEST))},setMask:function(fe){xt!==fe&&!j&&(i.stencilMask(fe),xt=fe)},setFunc:function(fe,dn,Ln){(st!==fe||ct!==dn||wt!==Ln)&&(i.stencilFunc(fe,dn,Ln),st=fe,ct=dn,wt=Ln)},setOp:function(fe,dn,Ln){(Mt!==fe||qt!==dn||Ee!==Ln)&&(i.stencilOp(fe,dn,Ln),Mt=fe,qt=dn,Ee=Ln)},setLocked:function(fe){j=fe},setClear:function(fe){Ne!==fe&&(i.clearStencil(fe),Ne=fe)},reset:function(){j=!1,xt=null,st=null,ct=null,wt=null,Mt=null,qt=null,Ee=null,Ne=null}}}const r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let h={},u={},f=new WeakMap,d=[],v=null,x=!1,m=null,p=null,M=null,g=null,_=null,E=null,b=null,w=new Nt(0,0,0),A=0,y=!1,S=null,R=null,N=null,T=null,D=null;const I=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,W=0;const G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(G)[1]),k=W>=1):G.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),k=W>=2);let B=null,P={};const z=i.getParameter(i.SCISSOR_BOX),H=i.getParameter(i.VIEWPORT),q=new be().fromArray(z),V=new be().fromArray(H);function Y(j,xt,st,ct){const wt=new Uint8Array(4),Mt=i.createTexture();i.bindTexture(j,Mt),i.texParameteri(j,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(j,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let qt=0;qt<st;qt++)j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?i.texImage3D(xt,0,i.RGBA,1,1,ct,0,i.RGBA,i.UNSIGNED_BYTE,wt):i.texImage2D(xt+qt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,wt);return Mt}const tt={};tt[i.TEXTURE_2D]=Y(i.TEXTURE_2D,i.TEXTURE_2D,1),tt[i.TEXTURE_CUBE_MAP]=Y(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),tt[i.TEXTURE_2D_ARRAY]=Y(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),tt[i.TEXTURE_3D]=Y(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),J(i.DEPTH_TEST),o.setFunc(ds),Dt(!1),Ft(nl),J(i.CULL_FACE),X(ci);function J(j){h[j]!==!0&&(i.enable(j),h[j]=!0)}function ot(j){h[j]!==!1&&(i.disable(j),h[j]=!1)}function ht(j,xt){return u[j]!==xt?(i.bindFramebuffer(j,xt),u[j]=xt,j===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=xt),j===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=xt),!0):!1}function _t(j,xt){let st=d,ct=!1;if(j){st=f.get(xt),st===void 0&&(st=[],f.set(xt,st));const wt=j.textures;if(st.length!==wt.length||st[0]!==i.COLOR_ATTACHMENT0){for(let Mt=0,qt=wt.length;Mt<qt;Mt++)st[Mt]=i.COLOR_ATTACHMENT0+Mt;st.length=wt.length,ct=!0}}else st[0]!==i.BACK&&(st[0]=i.BACK,ct=!0);ct&&i.drawBuffers(st)}function Bt(j){return v!==j?(i.useProgram(j),v=j,!0):!1}const Et={[Ti]:i.FUNC_ADD,[tf]:i.FUNC_SUBTRACT,[ef]:i.FUNC_REVERSE_SUBTRACT};Et[nf]=i.MIN,Et[sf]=i.MAX;const Wt={[rf]:i.ZERO,[of]:i.ONE,[af]:i.SRC_COLOR,[Ta]:i.SRC_ALPHA,[df]:i.SRC_ALPHA_SATURATE,[uf]:i.DST_COLOR,[lf]:i.DST_ALPHA,[cf]:i.ONE_MINUS_SRC_COLOR,[Aa]:i.ONE_MINUS_SRC_ALPHA,[ff]:i.ONE_MINUS_DST_COLOR,[hf]:i.ONE_MINUS_DST_ALPHA,[pf]:i.CONSTANT_COLOR,[mf]:i.ONE_MINUS_CONSTANT_COLOR,[gf]:i.CONSTANT_ALPHA,[xf]:i.ONE_MINUS_CONSTANT_ALPHA};function X(j,xt,st,ct,wt,Mt,qt,Ee,Ne,fe){if(j===ci){x===!0&&(ot(i.BLEND),x=!1);return}if(x===!1&&(J(i.BLEND),x=!0),j!==Qu){if(j!==m||fe!==y){if((p!==Ti||_!==Ti)&&(i.blendEquation(i.FUNC_ADD),p=Ti,_=Ti),fe)switch(j){case ls:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xn:i.blendFunc(i.ONE,i.ONE);break;case il:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case sl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}else switch(j){case ls:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xn:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case il:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case sl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}M=null,g=null,E=null,b=null,w.set(0,0,0),A=0,m=j,y=fe}return}wt=wt||xt,Mt=Mt||st,qt=qt||ct,(xt!==p||wt!==_)&&(i.blendEquationSeparate(Et[xt],Et[wt]),p=xt,_=wt),(st!==M||ct!==g||Mt!==E||qt!==b)&&(i.blendFuncSeparate(Wt[st],Wt[ct],Wt[Mt],Wt[qt]),M=st,g=ct,E=Mt,b=qt),(Ee.equals(w)===!1||Ne!==A)&&(i.blendColor(Ee.r,Ee.g,Ee.b,Ne),w.copy(Ee),A=Ne),m=j,y=!1}function ee(j,xt){j.side===je?ot(i.CULL_FACE):J(i.CULL_FACE);let st=j.side===$e;xt&&(st=!st),Dt(st),j.blending===ls&&j.transparent===!1?X(ci):X(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),o.setFunc(j.depthFunc),o.setTest(j.depthTest),o.setMask(j.depthWrite),r.setMask(j.colorWrite);const ct=j.stencilWrite;a.setTest(ct),ct&&(a.setMask(j.stencilWriteMask),a.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),a.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),me(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?J(i.SAMPLE_ALPHA_TO_COVERAGE):ot(i.SAMPLE_ALPHA_TO_COVERAGE)}function Dt(j){S!==j&&(j?i.frontFace(i.CW):i.frontFace(i.CCW),S=j)}function Ft(j){j!==Ku?(J(i.CULL_FACE),j!==R&&(j===nl?i.cullFace(i.BACK):j===Ju?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ot(i.CULL_FACE),R=j}function Ut(j){j!==N&&(k&&i.lineWidth(j),N=j)}function me(j,xt,st){j?(J(i.POLYGON_OFFSET_FILL),(T!==xt||D!==st)&&(i.polygonOffset(xt,st),T=xt,D=st)):ot(i.POLYGON_OFFSET_FILL)}function zt(j){j?J(i.SCISSOR_TEST):ot(i.SCISSOR_TEST)}function F(j){j===void 0&&(j=i.TEXTURE0+I-1),B!==j&&(i.activeTexture(j),B=j)}function C(j,xt,st){st===void 0&&(B===null?st=i.TEXTURE0+I-1:st=B);let ct=P[st];ct===void 0&&(ct={type:void 0,texture:void 0},P[st]=ct),(ct.type!==j||ct.texture!==xt)&&(B!==st&&(i.activeTexture(st),B=st),i.bindTexture(j,xt||tt[j]),ct.type=j,ct.texture=xt)}function Q(){const j=P[B];j!==void 0&&j.type!==void 0&&(i.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function at(){try{i.compressedTexImage2D.apply(i,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function lt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function rt(){try{i.texSubImage2D.apply(i,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Lt(){try{i.texSubImage3D.apply(i,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function vt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function bt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ie(){try{i.texStorage2D.apply(i,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ut(){try{i.texStorage3D.apply(i,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Tt(){try{i.texImage2D.apply(i,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ot(){try{i.texImage3D.apply(i,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ht(j){q.equals(j)===!1&&(i.scissor(j.x,j.y,j.z,j.w),q.copy(j))}function At(j){V.equals(j)===!1&&(i.viewport(j.x,j.y,j.z,j.w),V.copy(j))}function ne(j,xt){let st=l.get(xt);st===void 0&&(st=new WeakMap,l.set(xt,st));let ct=st.get(j);ct===void 0&&(ct=i.getUniformBlockIndex(xt,j.name),st.set(j,ct))}function Zt(j,xt){const ct=l.get(xt).get(j);c.get(xt)!==ct&&(i.uniformBlockBinding(xt,ct,j.__bindingPointIndex),c.set(xt,ct))}function xe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},B=null,P={},u={},f=new WeakMap,d=[],v=null,x=!1,m=null,p=null,M=null,g=null,_=null,E=null,b=null,w=new Nt(0,0,0),A=0,y=!1,S=null,R=null,N=null,T=null,D=null,q.set(0,0,i.canvas.width,i.canvas.height),V.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:J,disable:ot,bindFramebuffer:ht,drawBuffers:_t,useProgram:Bt,setBlending:X,setMaterial:ee,setFlipSided:Dt,setCullFace:Ft,setLineWidth:Ut,setPolygonOffset:me,setScissorTest:zt,activeTexture:F,bindTexture:C,unbindTexture:Q,compressedTexImage2D:at,compressedTexImage3D:lt,texImage2D:Tt,texImage3D:Ot,updateUBOMapping:ne,uniformBlockBinding:Zt,texStorage2D:ie,texStorage3D:ut,texSubImage2D:rt,texSubImage3D:Lt,compressedTexSubImage2D:vt,compressedTexSubImage3D:bt,scissor:Ht,viewport:At,reset:xe}}function Ql(i,t,e,n){const s=t2(n);switch(e){case eu:return i*t;case iu:return i*t;case su:return i*t*2;case Ks:return i*t/s.components*s.byteLength;case Lc:return i*t/s.components*s.byteLength;case ru:return i*t*2/s.components*s.byteLength;case Ic:return i*t*2/s.components*s.byteLength;case nu:return i*t*3/s.components*s.byteLength;case Sn:return i*t*4/s.components*s.byteLength;case Dc:return i*t*4/s.components*s.byteLength;case Zr:case $r:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Kr:case Jr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ba:case Ha:return Math.max(i,16)*Math.max(t,8)/4;case Oa:case ka:return Math.max(i,8)*Math.max(t,8)/2;case Va:case Ga:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Wa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Xa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case qa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ya:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ja:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Za:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case $a:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ka:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ja:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Qa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case tc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ec:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case nc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ic:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case sc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Qr:case rc:case oc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case ou:case ac:return Math.ceil(i/4)*Math.ceil(t/4)*8;case cc:case lc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function t2(i){switch(i){case qn:case Jh:return{byteLength:1,components:1};case $s:case Qh:case nr:return{byteLength:2,components:1};case Cc:case Pc:return{byteLength:2,components:4};case Ci:case Rc:case An:return{byteLength:4,components:1};case tu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function e2(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new St,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(F,C){return d?new OffscreenCanvas(F,C):co("canvas")}function x(F,C,Q){let at=1;const lt=zt(F);if((lt.width>Q||lt.height>Q)&&(at=Q/Math.max(lt.width,lt.height)),at<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const rt=Math.floor(at*lt.width),Lt=Math.floor(at*lt.height);u===void 0&&(u=v(rt,Lt));const vt=C?v(rt,Lt):u;return vt.width=rt,vt.height=Lt,vt.getContext("2d").drawImage(F,0,0,rt,Lt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+lt.width+"x"+lt.height+") to ("+rt+"x"+Lt+")."),vt}else return"data"in F&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+lt.width+"x"+lt.height+")."),F;return F}function m(F){return F.generateMipmaps}function p(F){i.generateMipmap(F)}function M(F){return F.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?i.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function g(F,C,Q,at,lt=!1){if(F!==null){if(i[F]!==void 0)return i[F];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let rt=C;if(C===i.RED&&(Q===i.FLOAT&&(rt=i.R32F),Q===i.HALF_FLOAT&&(rt=i.R16F),Q===i.UNSIGNED_BYTE&&(rt=i.R8)),C===i.RED_INTEGER&&(Q===i.UNSIGNED_BYTE&&(rt=i.R8UI),Q===i.UNSIGNED_SHORT&&(rt=i.R16UI),Q===i.UNSIGNED_INT&&(rt=i.R32UI),Q===i.BYTE&&(rt=i.R8I),Q===i.SHORT&&(rt=i.R16I),Q===i.INT&&(rt=i.R32I)),C===i.RG&&(Q===i.FLOAT&&(rt=i.RG32F),Q===i.HALF_FLOAT&&(rt=i.RG16F),Q===i.UNSIGNED_BYTE&&(rt=i.RG8)),C===i.RG_INTEGER&&(Q===i.UNSIGNED_BYTE&&(rt=i.RG8UI),Q===i.UNSIGNED_SHORT&&(rt=i.RG16UI),Q===i.UNSIGNED_INT&&(rt=i.RG32UI),Q===i.BYTE&&(rt=i.RG8I),Q===i.SHORT&&(rt=i.RG16I),Q===i.INT&&(rt=i.RG32I)),C===i.RGB_INTEGER&&(Q===i.UNSIGNED_BYTE&&(rt=i.RGB8UI),Q===i.UNSIGNED_SHORT&&(rt=i.RGB16UI),Q===i.UNSIGNED_INT&&(rt=i.RGB32UI),Q===i.BYTE&&(rt=i.RGB8I),Q===i.SHORT&&(rt=i.RGB16I),Q===i.INT&&(rt=i.RGB32I)),C===i.RGBA_INTEGER&&(Q===i.UNSIGNED_BYTE&&(rt=i.RGBA8UI),Q===i.UNSIGNED_SHORT&&(rt=i.RGBA16UI),Q===i.UNSIGNED_INT&&(rt=i.RGBA32UI),Q===i.BYTE&&(rt=i.RGBA8I),Q===i.SHORT&&(rt=i.RGBA16I),Q===i.INT&&(rt=i.RGBA32I)),C===i.RGB&&Q===i.UNSIGNED_INT_5_9_9_9_REV&&(rt=i.RGB9_E5),C===i.RGBA){const Lt=lt?uo:re.getTransfer(at);Q===i.FLOAT&&(rt=i.RGBA32F),Q===i.HALF_FLOAT&&(rt=i.RGBA16F),Q===i.UNSIGNED_BYTE&&(rt=Lt===ge?i.SRGB8_ALPHA8:i.RGBA8),Q===i.UNSIGNED_SHORT_4_4_4_4&&(rt=i.RGBA4),Q===i.UNSIGNED_SHORT_5_5_5_1&&(rt=i.RGB5_A1)}return(rt===i.R16F||rt===i.R32F||rt===i.RG16F||rt===i.RG32F||rt===i.RGBA16F||rt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),rt}function _(F,C){let Q;return F?C===null||C===Ci||C===gs?Q=i.DEPTH24_STENCIL8:C===An?Q=i.DEPTH32F_STENCIL8:C===$s&&(Q=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===Ci||C===gs?Q=i.DEPTH_COMPONENT24:C===An?Q=i.DEPTH_COMPONENT32F:C===$s&&(Q=i.DEPTH_COMPONENT16),Q}function E(F,C){return m(F)===!0||F.isFramebufferTexture&&F.minFilter!==We&&F.minFilter!==un?Math.log2(Math.max(C.width,C.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?C.mipmaps.length:1}function b(F){const C=F.target;C.removeEventListener("dispose",b),A(C),C.isVideoTexture&&h.delete(C)}function w(F){const C=F.target;C.removeEventListener("dispose",w),S(C)}function A(F){const C=n.get(F);if(C.__webglInit===void 0)return;const Q=F.source,at=f.get(Q);if(at){const lt=at[C.__cacheKey];lt.usedTimes--,lt.usedTimes===0&&y(F),Object.keys(at).length===0&&f.delete(Q)}n.remove(F)}function y(F){const C=n.get(F);i.deleteTexture(C.__webglTexture);const Q=F.source,at=f.get(Q);delete at[C.__cacheKey],o.memory.textures--}function S(F){const C=n.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),n.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let at=0;at<6;at++){if(Array.isArray(C.__webglFramebuffer[at]))for(let lt=0;lt<C.__webglFramebuffer[at].length;lt++)i.deleteFramebuffer(C.__webglFramebuffer[at][lt]);else i.deleteFramebuffer(C.__webglFramebuffer[at]);C.__webglDepthbuffer&&i.deleteRenderbuffer(C.__webglDepthbuffer[at])}else{if(Array.isArray(C.__webglFramebuffer))for(let at=0;at<C.__webglFramebuffer.length;at++)i.deleteFramebuffer(C.__webglFramebuffer[at]);else i.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&i.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&i.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let at=0;at<C.__webglColorRenderbuffer.length;at++)C.__webglColorRenderbuffer[at]&&i.deleteRenderbuffer(C.__webglColorRenderbuffer[at]);C.__webglDepthRenderbuffer&&i.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const Q=F.textures;for(let at=0,lt=Q.length;at<lt;at++){const rt=n.get(Q[at]);rt.__webglTexture&&(i.deleteTexture(rt.__webglTexture),o.memory.textures--),n.remove(Q[at])}n.remove(F)}let R=0;function N(){R=0}function T(){const F=R;return F>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+s.maxTextures),R+=1,F}function D(F){const C=[];return C.push(F.wrapS),C.push(F.wrapT),C.push(F.wrapR||0),C.push(F.magFilter),C.push(F.minFilter),C.push(F.anisotropy),C.push(F.internalFormat),C.push(F.format),C.push(F.type),C.push(F.generateMipmaps),C.push(F.premultiplyAlpha),C.push(F.flipY),C.push(F.unpackAlignment),C.push(F.colorSpace),C.join()}function I(F,C){const Q=n.get(F);if(F.isVideoTexture&&Ut(F),F.isRenderTargetTexture===!1&&F.version>0&&Q.__version!==F.version){const at=F.image;if(at===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(at.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{V(Q,F,C);return}}e.bindTexture(i.TEXTURE_2D,Q.__webglTexture,i.TEXTURE0+C)}function k(F,C){const Q=n.get(F);if(F.version>0&&Q.__version!==F.version){V(Q,F,C);return}e.bindTexture(i.TEXTURE_2D_ARRAY,Q.__webglTexture,i.TEXTURE0+C)}function W(F,C){const Q=n.get(F);if(F.version>0&&Q.__version!==F.version){V(Q,F,C);return}e.bindTexture(i.TEXTURE_3D,Q.__webglTexture,i.TEXTURE0+C)}function G(F,C){const Q=n.get(F);if(F.version>0&&Q.__version!==F.version){Y(Q,F,C);return}e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture,i.TEXTURE0+C)}const B={[Zs]:i.REPEAT,[Hn]:i.CLAMP_TO_EDGE,[Fa]:i.MIRRORED_REPEAT},P={[We]:i.NEAREST,[Tf]:i.NEAREST_MIPMAP_NEAREST,[cr]:i.NEAREST_MIPMAP_LINEAR,[un]:i.LINEAR,[Mo]:i.LINEAR_MIPMAP_NEAREST,[Ri]:i.LINEAR_MIPMAP_LINEAR},z={[Pf]:i.NEVER,[zf]:i.ALWAYS,[Lf]:i.LESS,[cu]:i.LEQUAL,[If]:i.EQUAL,[Nf]:i.GEQUAL,[Df]:i.GREATER,[Uf]:i.NOTEQUAL};function H(F,C){if(C.type===An&&t.has("OES_texture_float_linear")===!1&&(C.magFilter===un||C.magFilter===Mo||C.magFilter===cr||C.magFilter===Ri||C.minFilter===un||C.minFilter===Mo||C.minFilter===cr||C.minFilter===Ri)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(F,i.TEXTURE_WRAP_S,B[C.wrapS]),i.texParameteri(F,i.TEXTURE_WRAP_T,B[C.wrapT]),(F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY)&&i.texParameteri(F,i.TEXTURE_WRAP_R,B[C.wrapR]),i.texParameteri(F,i.TEXTURE_MAG_FILTER,P[C.magFilter]),i.texParameteri(F,i.TEXTURE_MIN_FILTER,P[C.minFilter]),C.compareFunction&&(i.texParameteri(F,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(F,i.TEXTURE_COMPARE_FUNC,z[C.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===We||C.minFilter!==cr&&C.minFilter!==Ri||C.type===An&&t.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||n.get(C).__currentAnisotropy){const Q=t.get("EXT_texture_filter_anisotropic");i.texParameterf(F,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,s.getMaxAnisotropy())),n.get(C).__currentAnisotropy=C.anisotropy}}}function q(F,C){let Q=!1;F.__webglInit===void 0&&(F.__webglInit=!0,C.addEventListener("dispose",b));const at=C.source;let lt=f.get(at);lt===void 0&&(lt={},f.set(at,lt));const rt=D(C);if(rt!==F.__cacheKey){lt[rt]===void 0&&(lt[rt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,Q=!0),lt[rt].usedTimes++;const Lt=lt[F.__cacheKey];Lt!==void 0&&(lt[F.__cacheKey].usedTimes--,Lt.usedTimes===0&&y(C)),F.__cacheKey=rt,F.__webglTexture=lt[rt].texture}return Q}function V(F,C,Q){let at=i.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(at=i.TEXTURE_2D_ARRAY),C.isData3DTexture&&(at=i.TEXTURE_3D);const lt=q(F,C),rt=C.source;e.bindTexture(at,F.__webglTexture,i.TEXTURE0+Q);const Lt=n.get(rt);if(rt.version!==Lt.__version||lt===!0){e.activeTexture(i.TEXTURE0+Q);const vt=re.getPrimaries(re.workingColorSpace),bt=C.colorSpace===ai?null:re.getPrimaries(C.colorSpace),ie=C.colorSpace===ai||vt===bt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,C.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,C.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);let ut=x(C.image,!1,s.maxTextureSize);ut=me(C,ut);const Tt=r.convert(C.format,C.colorSpace),Ot=r.convert(C.type);let Ht=g(C.internalFormat,Tt,Ot,C.colorSpace,C.isVideoTexture);H(at,C);let At;const ne=C.mipmaps,Zt=C.isVideoTexture!==!0,xe=Lt.__version===void 0||lt===!0,j=rt.dataReady,xt=E(C,ut);if(C.isDepthTexture)Ht=_(C.format===xs,C.type),xe&&(Zt?e.texStorage2D(i.TEXTURE_2D,1,Ht,ut.width,ut.height):e.texImage2D(i.TEXTURE_2D,0,Ht,ut.width,ut.height,0,Tt,Ot,null));else if(C.isDataTexture)if(ne.length>0){Zt&&xe&&e.texStorage2D(i.TEXTURE_2D,xt,Ht,ne[0].width,ne[0].height);for(let st=0,ct=ne.length;st<ct;st++)At=ne[st],Zt?j&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,At.width,At.height,Tt,Ot,At.data):e.texImage2D(i.TEXTURE_2D,st,Ht,At.width,At.height,0,Tt,Ot,At.data);C.generateMipmaps=!1}else Zt?(xe&&e.texStorage2D(i.TEXTURE_2D,xt,Ht,ut.width,ut.height),j&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ut.width,ut.height,Tt,Ot,ut.data)):e.texImage2D(i.TEXTURE_2D,0,Ht,ut.width,ut.height,0,Tt,Ot,ut.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){Zt&&xe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,xt,Ht,ne[0].width,ne[0].height,ut.depth);for(let st=0,ct=ne.length;st<ct;st++)if(At=ne[st],C.format!==Sn)if(Tt!==null)if(Zt){if(j)if(C.layerUpdates.size>0){const wt=Ql(At.width,At.height,C.format,C.type);for(const Mt of C.layerUpdates){const qt=At.data.subarray(Mt*wt/At.data.BYTES_PER_ELEMENT,(Mt+1)*wt/At.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,Mt,At.width,At.height,1,Tt,qt)}C.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,At.width,At.height,ut.depth,Tt,At.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,st,Ht,At.width,At.height,ut.depth,0,At.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Zt?j&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,At.width,At.height,ut.depth,Tt,Ot,At.data):e.texImage3D(i.TEXTURE_2D_ARRAY,st,Ht,At.width,At.height,ut.depth,0,Tt,Ot,At.data)}else{Zt&&xe&&e.texStorage2D(i.TEXTURE_2D,xt,Ht,ne[0].width,ne[0].height);for(let st=0,ct=ne.length;st<ct;st++)At=ne[st],C.format!==Sn?Tt!==null?Zt?j&&e.compressedTexSubImage2D(i.TEXTURE_2D,st,0,0,At.width,At.height,Tt,At.data):e.compressedTexImage2D(i.TEXTURE_2D,st,Ht,At.width,At.height,0,At.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?j&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,At.width,At.height,Tt,Ot,At.data):e.texImage2D(i.TEXTURE_2D,st,Ht,At.width,At.height,0,Tt,Ot,At.data)}else if(C.isDataArrayTexture)if(Zt){if(xe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,xt,Ht,ut.width,ut.height,ut.depth),j)if(C.layerUpdates.size>0){const st=Ql(ut.width,ut.height,C.format,C.type);for(const ct of C.layerUpdates){const wt=ut.data.subarray(ct*st/ut.data.BYTES_PER_ELEMENT,(ct+1)*st/ut.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ct,ut.width,ut.height,1,Tt,Ot,wt)}C.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ut.width,ut.height,ut.depth,Tt,Ot,ut.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ht,ut.width,ut.height,ut.depth,0,Tt,Ot,ut.data);else if(C.isData3DTexture)Zt?(xe&&e.texStorage3D(i.TEXTURE_3D,xt,Ht,ut.width,ut.height,ut.depth),j&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ut.width,ut.height,ut.depth,Tt,Ot,ut.data)):e.texImage3D(i.TEXTURE_3D,0,Ht,ut.width,ut.height,ut.depth,0,Tt,Ot,ut.data);else if(C.isFramebufferTexture){if(xe)if(Zt)e.texStorage2D(i.TEXTURE_2D,xt,Ht,ut.width,ut.height);else{let st=ut.width,ct=ut.height;for(let wt=0;wt<xt;wt++)e.texImage2D(i.TEXTURE_2D,wt,Ht,st,ct,0,Tt,Ot,null),st>>=1,ct>>=1}}else if(ne.length>0){if(Zt&&xe){const st=zt(ne[0]);e.texStorage2D(i.TEXTURE_2D,xt,Ht,st.width,st.height)}for(let st=0,ct=ne.length;st<ct;st++)At=ne[st],Zt?j&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,Tt,Ot,At):e.texImage2D(i.TEXTURE_2D,st,Ht,Tt,Ot,At);C.generateMipmaps=!1}else if(Zt){if(xe){const st=zt(ut);e.texStorage2D(i.TEXTURE_2D,xt,Ht,st.width,st.height)}j&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Tt,Ot,ut)}else e.texImage2D(i.TEXTURE_2D,0,Ht,Tt,Ot,ut);m(C)&&p(at),Lt.__version=rt.version,C.onUpdate&&C.onUpdate(C)}F.__version=C.version}function Y(F,C,Q){if(C.image.length!==6)return;const at=q(F,C),lt=C.source;e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+Q);const rt=n.get(lt);if(lt.version!==rt.__version||at===!0){e.activeTexture(i.TEXTURE0+Q);const Lt=re.getPrimaries(re.workingColorSpace),vt=C.colorSpace===ai?null:re.getPrimaries(C.colorSpace),bt=C.colorSpace===ai||Lt===vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,C.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,C.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);const ie=C.isCompressedTexture||C.image[0].isCompressedTexture,ut=C.image[0]&&C.image[0].isDataTexture,Tt=[];for(let ct=0;ct<6;ct++)!ie&&!ut?Tt[ct]=x(C.image[ct],!0,s.maxCubemapSize):Tt[ct]=ut?C.image[ct].image:C.image[ct],Tt[ct]=me(C,Tt[ct]);const Ot=Tt[0],Ht=r.convert(C.format,C.colorSpace),At=r.convert(C.type),ne=g(C.internalFormat,Ht,At,C.colorSpace),Zt=C.isVideoTexture!==!0,xe=rt.__version===void 0||at===!0,j=lt.dataReady;let xt=E(C,Ot);H(i.TEXTURE_CUBE_MAP,C);let st;if(ie){Zt&&xe&&e.texStorage2D(i.TEXTURE_CUBE_MAP,xt,ne,Ot.width,Ot.height);for(let ct=0;ct<6;ct++){st=Tt[ct].mipmaps;for(let wt=0;wt<st.length;wt++){const Mt=st[wt];C.format!==Sn?Ht!==null?Zt?j&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,wt,0,0,Mt.width,Mt.height,Ht,Mt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,wt,ne,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Zt?j&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,wt,0,0,Mt.width,Mt.height,Ht,At,Mt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,wt,ne,Mt.width,Mt.height,0,Ht,At,Mt.data)}}}else{if(st=C.mipmaps,Zt&&xe){st.length>0&&xt++;const ct=zt(Tt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,xt,ne,ct.width,ct.height)}for(let ct=0;ct<6;ct++)if(ut){Zt?j&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,Tt[ct].width,Tt[ct].height,Ht,At,Tt[ct].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,ne,Tt[ct].width,Tt[ct].height,0,Ht,At,Tt[ct].data);for(let wt=0;wt<st.length;wt++){const qt=st[wt].image[ct].image;Zt?j&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,wt+1,0,0,qt.width,qt.height,Ht,At,qt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,wt+1,ne,qt.width,qt.height,0,Ht,At,qt.data)}}else{Zt?j&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,Ht,At,Tt[ct]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,ne,Ht,At,Tt[ct]);for(let wt=0;wt<st.length;wt++){const Mt=st[wt];Zt?j&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,wt+1,0,0,Ht,At,Mt.image[ct]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,wt+1,ne,Ht,At,Mt.image[ct])}}}m(C)&&p(i.TEXTURE_CUBE_MAP),rt.__version=lt.version,C.onUpdate&&C.onUpdate(C)}F.__version=C.version}function tt(F,C,Q,at,lt,rt){const Lt=r.convert(Q.format,Q.colorSpace),vt=r.convert(Q.type),bt=g(Q.internalFormat,Lt,vt,Q.colorSpace),ie=n.get(C),ut=n.get(Q);if(ut.__renderTarget=C,!ie.__hasExternalTextures){const Tt=Math.max(1,C.width>>rt),Ot=Math.max(1,C.height>>rt);lt===i.TEXTURE_3D||lt===i.TEXTURE_2D_ARRAY?e.texImage3D(lt,rt,bt,Tt,Ot,C.depth,0,Lt,vt,null):e.texImage2D(lt,rt,bt,Tt,Ot,0,Lt,vt,null)}e.bindFramebuffer(i.FRAMEBUFFER,F),Ft(C)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,at,lt,ut.__webglTexture,0,Dt(C)):(lt===i.TEXTURE_2D||lt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&lt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,at,lt,ut.__webglTexture,rt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function J(F,C,Q){if(i.bindRenderbuffer(i.RENDERBUFFER,F),C.depthBuffer){const at=C.depthTexture,lt=at&&at.isDepthTexture?at.type:null,rt=_(C.stencilBuffer,lt),Lt=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=Dt(C);Ft(C)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,vt,rt,C.width,C.height):Q?i.renderbufferStorageMultisample(i.RENDERBUFFER,vt,rt,C.width,C.height):i.renderbufferStorage(i.RENDERBUFFER,rt,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Lt,i.RENDERBUFFER,F)}else{const at=C.textures;for(let lt=0;lt<at.length;lt++){const rt=at[lt],Lt=r.convert(rt.format,rt.colorSpace),vt=r.convert(rt.type),bt=g(rt.internalFormat,Lt,vt,rt.colorSpace),ie=Dt(C);Q&&Ft(C)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ie,bt,C.width,C.height):Ft(C)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ie,bt,C.width,C.height):i.renderbufferStorage(i.RENDERBUFFER,bt,C.width,C.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ot(F,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,F),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const at=n.get(C.depthTexture);at.__renderTarget=C,(!at.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),I(C.depthTexture,0);const lt=at.__webglTexture,rt=Dt(C);if(C.depthTexture.format===hs)Ft(C)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,lt,0,rt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,lt,0);else if(C.depthTexture.format===xs)Ft(C)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,lt,0,rt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,lt,0);else throw new Error("Unknown depthTexture format")}function ht(F){const C=n.get(F),Q=F.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==F.depthTexture){const at=F.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),at){const lt=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,at.removeEventListener("dispose",lt)};at.addEventListener("dispose",lt),C.__depthDisposeCallback=lt}C.__boundDepthTexture=at}if(F.depthTexture&&!C.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");ot(C.__webglFramebuffer,F)}else if(Q){C.__webglDepthbuffer=[];for(let at=0;at<6;at++)if(e.bindFramebuffer(i.FRAMEBUFFER,C.__webglFramebuffer[at]),C.__webglDepthbuffer[at]===void 0)C.__webglDepthbuffer[at]=i.createRenderbuffer(),J(C.__webglDepthbuffer[at],F,!1);else{const lt=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=C.__webglDepthbuffer[at];i.bindRenderbuffer(i.RENDERBUFFER,rt),i.framebufferRenderbuffer(i.FRAMEBUFFER,lt,i.RENDERBUFFER,rt)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=i.createRenderbuffer(),J(C.__webglDepthbuffer,F,!1);else{const at=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=C.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,lt),i.framebufferRenderbuffer(i.FRAMEBUFFER,at,i.RENDERBUFFER,lt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function _t(F,C,Q){const at=n.get(F);C!==void 0&&tt(at.__webglFramebuffer,F,F.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Q!==void 0&&ht(F)}function Bt(F){const C=F.texture,Q=n.get(F),at=n.get(C);F.addEventListener("dispose",w);const lt=F.textures,rt=F.isWebGLCubeRenderTarget===!0,Lt=lt.length>1;if(Lt||(at.__webglTexture===void 0&&(at.__webglTexture=i.createTexture()),at.__version=C.version,o.memory.textures++),rt){Q.__webglFramebuffer=[];for(let vt=0;vt<6;vt++)if(C.mipmaps&&C.mipmaps.length>0){Q.__webglFramebuffer[vt]=[];for(let bt=0;bt<C.mipmaps.length;bt++)Q.__webglFramebuffer[vt][bt]=i.createFramebuffer()}else Q.__webglFramebuffer[vt]=i.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){Q.__webglFramebuffer=[];for(let vt=0;vt<C.mipmaps.length;vt++)Q.__webglFramebuffer[vt]=i.createFramebuffer()}else Q.__webglFramebuffer=i.createFramebuffer();if(Lt)for(let vt=0,bt=lt.length;vt<bt;vt++){const ie=n.get(lt[vt]);ie.__webglTexture===void 0&&(ie.__webglTexture=i.createTexture(),o.memory.textures++)}if(F.samples>0&&Ft(F)===!1){Q.__webglMultisampledFramebuffer=i.createFramebuffer(),Q.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let vt=0;vt<lt.length;vt++){const bt=lt[vt];Q.__webglColorRenderbuffer[vt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Q.__webglColorRenderbuffer[vt]);const ie=r.convert(bt.format,bt.colorSpace),ut=r.convert(bt.type),Tt=g(bt.internalFormat,ie,ut,bt.colorSpace,F.isXRRenderTarget===!0),Ot=Dt(F);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ot,Tt,F.width,F.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,Q.__webglColorRenderbuffer[vt])}i.bindRenderbuffer(i.RENDERBUFFER,null),F.depthBuffer&&(Q.__webglDepthRenderbuffer=i.createRenderbuffer(),J(Q.__webglDepthRenderbuffer,F,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(rt){e.bindTexture(i.TEXTURE_CUBE_MAP,at.__webglTexture),H(i.TEXTURE_CUBE_MAP,C);for(let vt=0;vt<6;vt++)if(C.mipmaps&&C.mipmaps.length>0)for(let bt=0;bt<C.mipmaps.length;bt++)tt(Q.__webglFramebuffer[vt][bt],F,C,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,bt);else tt(Q.__webglFramebuffer[vt],F,C,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0);m(C)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Lt){for(let vt=0,bt=lt.length;vt<bt;vt++){const ie=lt[vt],ut=n.get(ie);e.bindTexture(i.TEXTURE_2D,ut.__webglTexture),H(i.TEXTURE_2D,ie),tt(Q.__webglFramebuffer,F,ie,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,0),m(ie)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let vt=i.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(vt=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(vt,at.__webglTexture),H(vt,C),C.mipmaps&&C.mipmaps.length>0)for(let bt=0;bt<C.mipmaps.length;bt++)tt(Q.__webglFramebuffer[bt],F,C,i.COLOR_ATTACHMENT0,vt,bt);else tt(Q.__webglFramebuffer,F,C,i.COLOR_ATTACHMENT0,vt,0);m(C)&&p(vt),e.unbindTexture()}F.depthBuffer&&ht(F)}function Et(F){const C=F.textures;for(let Q=0,at=C.length;Q<at;Q++){const lt=C[Q];if(m(lt)){const rt=M(F),Lt=n.get(lt).__webglTexture;e.bindTexture(rt,Lt),p(rt),e.unbindTexture()}}}const Wt=[],X=[];function ee(F){if(F.samples>0){if(Ft(F)===!1){const C=F.textures,Q=F.width,at=F.height;let lt=i.COLOR_BUFFER_BIT;const rt=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Lt=n.get(F),vt=C.length>1;if(vt)for(let bt=0;bt<C.length;bt++)e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer);for(let bt=0;bt<C.length;bt++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(lt|=i.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(lt|=i.STENCIL_BUFFER_BIT)),vt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Lt.__webglColorRenderbuffer[bt]);const ie=n.get(C[bt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ie,0)}i.blitFramebuffer(0,0,Q,at,0,0,Q,at,lt,i.NEAREST),c===!0&&(Wt.length=0,X.length=0,Wt.push(i.COLOR_ATTACHMENT0+bt),F.depthBuffer&&F.resolveDepthBuffer===!1&&(Wt.push(rt),X.push(rt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,X)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Wt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),vt)for(let bt=0;bt<C.length;bt++){e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,Lt.__webglColorRenderbuffer[bt]);const ie=n.get(C[bt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,ie,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&c){const C=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[C])}}}function Dt(F){return Math.min(s.maxSamples,F.samples)}function Ft(F){const C=n.get(F);return F.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function Ut(F){const C=o.render.frame;h.get(F)!==C&&(h.set(F,C),F.update())}function me(F,C){const Q=F.colorSpace,at=F.format,lt=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||Q!==Ms&&Q!==ai&&(re.getTransfer(Q)===ge?(at!==Sn||lt!==qn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Q)),C}function zt(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(l.width=F.naturalWidth||F.width,l.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(l.width=F.displayWidth,l.height=F.displayHeight):(l.width=F.width,l.height=F.height),l}this.allocateTextureUnit=T,this.resetTextureUnits=N,this.setTexture2D=I,this.setTexture2DArray=k,this.setTexture3D=W,this.setTextureCube=G,this.rebindTextures=_t,this.setupRenderTarget=Bt,this.updateRenderTargetMipmap=Et,this.updateMultisampleRenderTarget=ee,this.setupDepthRenderbuffer=ht,this.setupFrameBufferTexture=tt,this.useMultisampledRTT=Ft}function n2(i,t){function e(n,s=ai){let r;const o=re.getTransfer(s);if(n===qn)return i.UNSIGNED_BYTE;if(n===Cc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Pc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===tu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Jh)return i.BYTE;if(n===Qh)return i.SHORT;if(n===$s)return i.UNSIGNED_SHORT;if(n===Rc)return i.INT;if(n===Ci)return i.UNSIGNED_INT;if(n===An)return i.FLOAT;if(n===nr)return i.HALF_FLOAT;if(n===eu)return i.ALPHA;if(n===nu)return i.RGB;if(n===Sn)return i.RGBA;if(n===iu)return i.LUMINANCE;if(n===su)return i.LUMINANCE_ALPHA;if(n===hs)return i.DEPTH_COMPONENT;if(n===xs)return i.DEPTH_STENCIL;if(n===Ks)return i.RED;if(n===Lc)return i.RED_INTEGER;if(n===ru)return i.RG;if(n===Ic)return i.RG_INTEGER;if(n===Dc)return i.RGBA_INTEGER;if(n===Zr||n===$r||n===Kr||n===Jr)if(o===ge)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Zr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===$r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Zr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===$r)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Kr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Jr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Oa||n===Ba||n===ka||n===Ha)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Oa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ba)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ka)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ha)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Va||n===Ga||n===Wa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Va||n===Ga)return o===ge?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Wa)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Xa||n===qa||n===Ya||n===ja||n===Za||n===$a||n===Ka||n===Ja||n===Qa||n===tc||n===ec||n===nc||n===ic||n===sc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Xa)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===qa)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ya)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ja)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Za)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===$a)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ka)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ja)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Qa)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===tc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ec)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===nc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ic)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===sc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Qr||n===rc||n===oc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Qr)return o===ge?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===rc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===oc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ou||n===ac||n===cc||n===lc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Qr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ac)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===cc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===lc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===gs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class i2 extends hn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class we extends Te{constructor(){super(),this.isGroup=!0,this.type="Group"}}const s2={type:"move"};class Yo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new we,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new we,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new we,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,n),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,v=.005;l.inputState.pinching&&f>d+v?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-v&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(s2)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new we;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const r2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,o2=`
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

}`;class a2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new ke,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Cn({vertexShader:r2,fragmentShader:o2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Xt(new Ss(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class c2 extends ys{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,v=null;const x=new a2,m=e.getContextAttributes();let p=null,M=null;const g=[],_=[],E=new St;let b=null;const w=new hn;w.viewport=new be;const A=new hn;A.viewport=new be;const y=[w,A],S=new i2;let R=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let Y=g[V];return Y===void 0&&(Y=new Yo,g[V]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(V){let Y=g[V];return Y===void 0&&(Y=new Yo,g[V]=Y),Y.getGripSpace()},this.getHand=function(V){let Y=g[V];return Y===void 0&&(Y=new Yo,g[V]=Y),Y.getHandSpace()};function T(V){const Y=_.indexOf(V.inputSource);if(Y===-1)return;const tt=g[Y];tt!==void 0&&(tt.update(V.inputSource,V.frame,l||o),tt.dispatchEvent({type:V.type,data:V.inputSource}))}function D(){s.removeEventListener("select",T),s.removeEventListener("selectstart",T),s.removeEventListener("selectend",T),s.removeEventListener("squeeze",T),s.removeEventListener("squeezestart",T),s.removeEventListener("squeezeend",T),s.removeEventListener("end",D),s.removeEventListener("inputsourceschange",I);for(let V=0;V<g.length;V++){const Y=_[V];Y!==null&&(_[V]=null,g[V].disconnect(Y))}R=null,N=null,x.reset(),t.setRenderTarget(p),d=null,f=null,u=null,s=null,M=null,q.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(V){l=V},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(V){if(s=V,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",T),s.addEventListener("selectstart",T),s.addEventListener("selectend",T),s.addEventListener("squeeze",T),s.addEventListener("squeezestart",T),s.addEventListener("squeezeend",T),s.addEventListener("end",D),s.addEventListener("inputsourceschange",I),m.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(E),s.renderState.layers===void 0){const Y={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,Y),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new Pi(d.framebufferWidth,d.framebufferHeight,{format:Sn,type:qn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let Y=null,tt=null,J=null;m.depth&&(J=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Y=m.stencil?xs:hs,tt=m.stencil?gs:Ci);const ot={colorFormat:e.RGBA8,depthFormat:J,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(ot),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),M=new Pi(f.textureWidth,f.textureHeight,{format:Sn,type:qn,depthTexture:new Mu(f.textureWidth,f.textureHeight,tt,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),q.setContext(s),q.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function I(V){for(let Y=0;Y<V.removed.length;Y++){const tt=V.removed[Y],J=_.indexOf(tt);J>=0&&(_[J]=null,g[J].disconnect(tt))}for(let Y=0;Y<V.added.length;Y++){const tt=V.added[Y];let J=_.indexOf(tt);if(J===-1){for(let ht=0;ht<g.length;ht++)if(ht>=_.length){_.push(tt),J=ht;break}else if(_[ht]===null){_[ht]=tt,J=ht;break}if(J===-1)break}const ot=g[J];ot&&ot.connect(tt)}}const k=new U,W=new U;function G(V,Y,tt){k.setFromMatrixPosition(Y.matrixWorld),W.setFromMatrixPosition(tt.matrixWorld);const J=k.distanceTo(W),ot=Y.projectionMatrix.elements,ht=tt.projectionMatrix.elements,_t=ot[14]/(ot[10]-1),Bt=ot[14]/(ot[10]+1),Et=(ot[9]+1)/ot[5],Wt=(ot[9]-1)/ot[5],X=(ot[8]-1)/ot[0],ee=(ht[8]+1)/ht[0],Dt=_t*X,Ft=_t*ee,Ut=J/(-X+ee),me=Ut*-X;if(Y.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(me),V.translateZ(Ut),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),ot[10]===-1)V.projectionMatrix.copy(Y.projectionMatrix),V.projectionMatrixInverse.copy(Y.projectionMatrixInverse);else{const zt=_t+Ut,F=Bt+Ut,C=Dt-me,Q=Ft+(J-me),at=Et*Bt/F*zt,lt=Wt*Bt/F*zt;V.projectionMatrix.makePerspective(C,Q,at,lt,zt,F),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function B(V,Y){Y===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(Y.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(s===null)return;let Y=V.near,tt=V.far;x.texture!==null&&(x.depthNear>0&&(Y=x.depthNear),x.depthFar>0&&(tt=x.depthFar)),S.near=A.near=w.near=Y,S.far=A.far=w.far=tt,(R!==S.near||N!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),R=S.near,N=S.far),w.layers.mask=V.layers.mask|2,A.layers.mask=V.layers.mask|4,S.layers.mask=w.layers.mask|A.layers.mask;const J=V.parent,ot=S.cameras;B(S,J);for(let ht=0;ht<ot.length;ht++)B(ot[ht],J);ot.length===2?G(S,w,A):S.projectionMatrix.copy(w.projectionMatrix),P(V,S,J)};function P(V,Y,tt){tt===null?V.matrix.copy(Y.matrixWorld):(V.matrix.copy(tt.matrixWorld),V.matrix.invert(),V.matrix.multiply(Y.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(Y.projectionMatrix),V.projectionMatrixInverse.copy(Y.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=_s*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(V){c=V,f!==null&&(f.fixedFoveation=V),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=V)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(S)};let z=null;function H(V,Y){if(h=Y.getViewerPose(l||o),v=Y,h!==null){const tt=h.views;d!==null&&(t.setRenderTargetFramebuffer(M,d.framebuffer),t.setRenderTarget(M));let J=!1;tt.length!==S.cameras.length&&(S.cameras.length=0,J=!0);for(let ht=0;ht<tt.length;ht++){const _t=tt[ht];let Bt=null;if(d!==null)Bt=d.getViewport(_t);else{const Wt=u.getViewSubImage(f,_t);Bt=Wt.viewport,ht===0&&(t.setRenderTargetTextures(M,Wt.colorTexture,f.ignoreDepthValues?void 0:Wt.depthStencilTexture),t.setRenderTarget(M))}let Et=y[ht];Et===void 0&&(Et=new hn,Et.layers.enable(ht),Et.viewport=new be,y[ht]=Et),Et.matrix.fromArray(_t.transform.matrix),Et.matrix.decompose(Et.position,Et.quaternion,Et.scale),Et.projectionMatrix.fromArray(_t.projectionMatrix),Et.projectionMatrixInverse.copy(Et.projectionMatrix).invert(),Et.viewport.set(Bt.x,Bt.y,Bt.width,Bt.height),ht===0&&(S.matrix.copy(Et.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),J===!0&&S.cameras.push(Et)}const ot=s.enabledFeatures;if(ot&&ot.includes("depth-sensing")){const ht=u.getDepthInformation(tt[0]);ht&&ht.isValid&&ht.texture&&x.init(t,ht,s.renderState)}}for(let tt=0;tt<g.length;tt++){const J=_[tt],ot=g[tt];J!==null&&ot!==void 0&&ot.update(J,Y,l||o)}z&&z(V,Y),Y.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Y}),v=null}const q=new vu;q.setAnimationLoop(H),this.setAnimationLoop=function(V){z=V},this.dispose=function(){}}}const Mi=new Rn,l2=new pe;function h2(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,gu(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,g,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),v(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,M,g):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===$e&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===$e&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=t.get(p),g=M.envMap,_=M.envMapRotation;g&&(m.envMap.value=g,Mi.copy(_),Mi.x*=-1,Mi.y*=-1,Mi.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(Mi.y*=-1,Mi.z*=-1),m.envMapRotation.value.setFromMatrix4(l2.makeRotationFromEuler(Mi)),m.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,M,g){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=g*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===$e&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const M=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function u2(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,g){const _=g.program;n.uniformBlockBinding(M,_)}function l(M,g){let _=s[M.id];_===void 0&&(v(M),_=h(M),s[M.id]=_,M.addEventListener("dispose",m));const E=g.program;n.updateUBOMapping(M,E);const b=t.render.frame;r[M.id]!==b&&(f(M),r[M.id]=b)}function h(M){const g=u();M.__bindingPointIndex=g;const _=i.createBuffer(),E=M.__size,b=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,E,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,g,_),_}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const g=s[M.id],_=M.uniforms,E=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,g);for(let b=0,w=_.length;b<w;b++){const A=Array.isArray(_[b])?_[b]:[_[b]];for(let y=0,S=A.length;y<S;y++){const R=A[y];if(d(R,b,y,E)===!0){const N=R.__offset,T=Array.isArray(R.value)?R.value:[R.value];let D=0;for(let I=0;I<T.length;I++){const k=T[I],W=x(k);typeof k=="number"||typeof k=="boolean"?(R.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,N+D,R.__data)):k.isMatrix3?(R.__data[0]=k.elements[0],R.__data[1]=k.elements[1],R.__data[2]=k.elements[2],R.__data[3]=0,R.__data[4]=k.elements[3],R.__data[5]=k.elements[4],R.__data[6]=k.elements[5],R.__data[7]=0,R.__data[8]=k.elements[6],R.__data[9]=k.elements[7],R.__data[10]=k.elements[8],R.__data[11]=0):(k.toArray(R.__data,D),D+=W.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(M,g,_,E){const b=M.value,w=g+"_"+_;if(E[w]===void 0)return typeof b=="number"||typeof b=="boolean"?E[w]=b:E[w]=b.clone(),!0;{const A=E[w];if(typeof b=="number"||typeof b=="boolean"){if(A!==b)return E[w]=b,!0}else if(A.equals(b)===!1)return A.copy(b),!0}return!1}function v(M){const g=M.uniforms;let _=0;const E=16;for(let w=0,A=g.length;w<A;w++){const y=Array.isArray(g[w])?g[w]:[g[w]];for(let S=0,R=y.length;S<R;S++){const N=y[S],T=Array.isArray(N.value)?N.value:[N.value];for(let D=0,I=T.length;D<I;D++){const k=T[D],W=x(k),G=_%E,B=G%W.boundary,P=G+B;_+=B,P!==0&&E-P<W.storage&&(_+=E-P),N.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=_,_+=W.storage}}}const b=_%E;return b>0&&(_+=E-b),M.__size=_,M.__cache={},this}function x(M){const g={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(g.boundary=4,g.storage=4):M.isVector2?(g.boundary=8,g.storage=8):M.isVector3||M.isColor?(g.boundary=16,g.storage=12):M.isVector4?(g.boundary=16,g.storage=16):M.isMatrix3?(g.boundary=48,g.storage=48):M.isMatrix4?(g.boundary=64,g.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),g}function m(M){const g=M.target;g.removeEventListener("dispose",m);const _=o.indexOf(g.__bindingPointIndex);o.splice(_,1),i.deleteBuffer(s[g.id]),delete s[g.id],delete r[g.id]}function p(){for(const M in s)i.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class f2{constructor(t={}){const{canvas:e=Qf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const v=new Uint32Array(4),x=new Int32Array(4);let m=null,p=null;const M=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ye,this.toneMapping=li,this.toneMappingExposure=1;const _=this;let E=!1,b=0,w=0,A=null,y=-1,S=null;const R=new be,N=new be;let T=null;const D=new Nt(0);let I=0,k=e.width,W=e.height,G=1,B=null,P=null;const z=new be(0,0,k,W),H=new be(0,0,k,W);let q=!1;const V=new Nc;let Y=!1,tt=!1;const J=new pe,ot=new pe,ht=new U,_t=new be,Bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Et=!1;function Wt(){return A===null?G:1}let X=n;function ee(L,Z){return e.getContext(L,Z)}try{const L={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Tc}`),e.addEventListener("webglcontextlost",ct,!1),e.addEventListener("webglcontextrestored",wt,!1),e.addEventListener("webglcontextcreationerror",Mt,!1),X===null){const Z="webgl2";if(X=ee(Z,L),X===null)throw ee(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let Dt,Ft,Ut,me,zt,F,C,Q,at,lt,rt,Lt,vt,bt,ie,ut,Tt,Ot,Ht,At,ne,Zt,xe,j;function xt(){Dt=new x0(X),Dt.init(),Zt=new n2(X,Dt),Ft=new u0(X,Dt,t,Zt),Ut=new Qm(X,Dt),Ft.reverseDepthBuffer&&f&&Ut.buffers.depth.setReversed(!0),me=new M0(X),zt=new Om,F=new e2(X,Dt,Ut,zt,Ft,Zt,me),C=new d0(_),Q=new g0(_),at=new Ad(X),xe=new l0(X,at),lt=new _0(X,at,me,xe),rt=new S0(X,lt,at,me),Ht=new y0(X,Ft,F),ut=new f0(zt),Lt=new Fm(_,C,Q,Dt,Ft,xe,ut),vt=new h2(_,zt),bt=new km,ie=new qm(Dt),Ot=new c0(_,C,Q,Ut,rt,d,c),Tt=new Km(_,rt,Ft),j=new u2(X,me,Ft,Ut),At=new h0(X,Dt,me),ne=new v0(X,Dt,me),me.programs=Lt.programs,_.capabilities=Ft,_.extensions=Dt,_.properties=zt,_.renderLists=bt,_.shadowMap=Tt,_.state=Ut,_.info=me}xt();const st=new c2(_,X);this.xr=st,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const L=Dt.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=Dt.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(L){L!==void 0&&(G=L,this.setSize(k,W,!1))},this.getSize=function(L){return L.set(k,W)},this.setSize=function(L,Z,et=!0){if(st.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=L,W=Z,e.width=Math.floor(L*G),e.height=Math.floor(Z*G),et===!0&&(e.style.width=L+"px",e.style.height=Z+"px"),this.setViewport(0,0,L,Z)},this.getDrawingBufferSize=function(L){return L.set(k*G,W*G).floor()},this.setDrawingBufferSize=function(L,Z,et){k=L,W=Z,G=et,e.width=Math.floor(L*et),e.height=Math.floor(Z*et),this.setViewport(0,0,L,Z)},this.getCurrentViewport=function(L){return L.copy(R)},this.getViewport=function(L){return L.copy(z)},this.setViewport=function(L,Z,et,nt){L.isVector4?z.set(L.x,L.y,L.z,L.w):z.set(L,Z,et,nt),Ut.viewport(R.copy(z).multiplyScalar(G).round())},this.getScissor=function(L){return L.copy(H)},this.setScissor=function(L,Z,et,nt){L.isVector4?H.set(L.x,L.y,L.z,L.w):H.set(L,Z,et,nt),Ut.scissor(N.copy(H).multiplyScalar(G).round())},this.getScissorTest=function(){return q},this.setScissorTest=function(L){Ut.setScissorTest(q=L)},this.setOpaqueSort=function(L){B=L},this.setTransparentSort=function(L){P=L},this.getClearColor=function(L){return L.copy(Ot.getClearColor())},this.setClearColor=function(){Ot.setClearColor.apply(Ot,arguments)},this.getClearAlpha=function(){return Ot.getClearAlpha()},this.setClearAlpha=function(){Ot.setClearAlpha.apply(Ot,arguments)},this.clear=function(L=!0,Z=!0,et=!0){let nt=0;if(L){let $=!1;if(A!==null){const ft=A.texture.format;$=ft===Dc||ft===Ic||ft===Lc}if($){const ft=A.texture.type,yt=ft===qn||ft===Ci||ft===$s||ft===gs||ft===Cc||ft===Pc,Rt=Ot.getClearColor(),Ct=Ot.getClearAlpha(),Vt=Rt.r,Yt=Rt.g,Pt=Rt.b;yt?(v[0]=Vt,v[1]=Yt,v[2]=Pt,v[3]=Ct,X.clearBufferuiv(X.COLOR,0,v)):(x[0]=Vt,x[1]=Yt,x[2]=Pt,x[3]=Ct,X.clearBufferiv(X.COLOR,0,x))}else nt|=X.COLOR_BUFFER_BIT}Z&&(nt|=X.DEPTH_BUFFER_BIT),et&&(nt|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(nt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ct,!1),e.removeEventListener("webglcontextrestored",wt,!1),e.removeEventListener("webglcontextcreationerror",Mt,!1),bt.dispose(),ie.dispose(),zt.dispose(),C.dispose(),Q.dispose(),rt.dispose(),xe.dispose(),j.dispose(),Lt.dispose(),st.dispose(),st.removeEventListener("sessionstart",jc),st.removeEventListener("sessionend",Zc),di.stop()};function ct(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function wt(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const L=me.autoReset,Z=Tt.enabled,et=Tt.autoUpdate,nt=Tt.needsUpdate,$=Tt.type;xt(),me.autoReset=L,Tt.enabled=Z,Tt.autoUpdate=et,Tt.needsUpdate=nt,Tt.type=$}function Mt(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function qt(L){const Z=L.target;Z.removeEventListener("dispose",qt),Ee(Z)}function Ee(L){Ne(L),zt.remove(L)}function Ne(L){const Z=zt.get(L).programs;Z!==void 0&&(Z.forEach(function(et){Lt.releaseProgram(et)}),L.isShaderMaterial&&Lt.releaseShaderCache(L))}this.renderBufferDirect=function(L,Z,et,nt,$,ft){Z===null&&(Z=Bt);const yt=$.isMesh&&$.matrixWorld.determinant()<0,Rt=ju(L,Z,et,nt,$);Ut.setMaterial(nt,yt);let Ct=et.index,Vt=1;if(nt.wireframe===!0){if(Ct=lt.getWireframeAttribute(et),Ct===void 0)return;Vt=2}const Yt=et.drawRange,Pt=et.attributes.position;let ae=Yt.start*Vt,_e=(Yt.start+Yt.count)*Vt;ft!==null&&(ae=Math.max(ae,ft.start*Vt),_e=Math.min(_e,(ft.start+ft.count)*Vt)),Ct!==null?(ae=Math.max(ae,0),_e=Math.min(_e,Ct.count)):Pt!=null&&(ae=Math.max(ae,0),_e=Math.min(_e,Pt.count));const ve=_e-ae;if(ve<0||ve===1/0)return;xe.setup($,nt,Rt,et,Ct);let Xe,le=At;if(Ct!==null&&(Xe=at.get(Ct),le=ne,le.setIndex(Xe)),$.isMesh)nt.wireframe===!0?(Ut.setLineWidth(nt.wireframeLinewidth*Wt()),le.setMode(X.LINES)):le.setMode(X.TRIANGLES);else if($.isLine){let It=nt.linewidth;It===void 0&&(It=1),Ut.setLineWidth(It*Wt()),$.isLineSegments?le.setMode(X.LINES):$.isLineLoop?le.setMode(X.LINE_LOOP):le.setMode(X.LINE_STRIP)}else $.isPoints?le.setMode(X.POINTS):$.isSprite&&le.setMode(X.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)le.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(Dt.get("WEBGL_multi_draw"))le.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const It=$._multiDrawStarts,In=$._multiDrawCounts,he=$._multiDrawCount,pn=Ct?at.get(Ct).bytesPerElement:1,zi=zt.get(nt).currentProgram.getUniforms();for(let Ke=0;Ke<he;Ke++)zi.setValue(X,"_gl_DrawID",Ke),le.render(It[Ke]/pn,In[Ke])}else if($.isInstancedMesh)le.renderInstances(ae,ve,$.count);else if(et.isInstancedBufferGeometry){const It=et._maxInstanceCount!==void 0?et._maxInstanceCount:1/0,In=Math.min(et.instanceCount,It);le.renderInstances(ae,ve,In)}else le.render(ae,ve)};function fe(L,Z,et){L.transparent===!0&&L.side===je&&L.forceSinglePass===!1?(L.side=$e,L.needsUpdate=!0,ar(L,Z,et),L.side=hi,L.needsUpdate=!0,ar(L,Z,et),L.side=je):ar(L,Z,et)}this.compile=function(L,Z,et=null){et===null&&(et=L),p=ie.get(et),p.init(Z),g.push(p),et.traverseVisible(function($){$.isLight&&$.layers.test(Z.layers)&&(p.pushLight($),$.castShadow&&p.pushShadow($))}),L!==et&&L.traverseVisible(function($){$.isLight&&$.layers.test(Z.layers)&&(p.pushLight($),$.castShadow&&p.pushShadow($))}),p.setupLights();const nt=new Set;return L.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const ft=$.material;if(ft)if(Array.isArray(ft))for(let yt=0;yt<ft.length;yt++){const Rt=ft[yt];fe(Rt,et,$),nt.add(Rt)}else fe(ft,et,$),nt.add(ft)}),g.pop(),p=null,nt},this.compileAsync=function(L,Z,et=null){const nt=this.compile(L,Z,et);return new Promise($=>{function ft(){if(nt.forEach(function(yt){zt.get(yt).currentProgram.isReady()&&nt.delete(yt)}),nt.size===0){$(L);return}setTimeout(ft,10)}Dt.get("KHR_parallel_shader_compile")!==null?ft():setTimeout(ft,10)})};let dn=null;function Ln(L){dn&&dn(L)}function jc(){di.stop()}function Zc(){di.start()}const di=new vu;di.setAnimationLoop(Ln),typeof self<"u"&&di.setContext(self),this.setAnimationLoop=function(L){dn=L,st.setAnimationLoop(L),L===null?di.stop():di.start()},st.addEventListener("sessionstart",jc),st.addEventListener("sessionend",Zc),this.render=function(L,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(st.cameraAutoUpdate===!0&&st.updateCamera(Z),Z=st.getCamera()),L.isScene===!0&&L.onBeforeRender(_,L,Z,A),p=ie.get(L,g.length),p.init(Z),g.push(p),ot.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),V.setFromProjectionMatrix(ot),tt=this.localClippingEnabled,Y=ut.init(this.clippingPlanes,tt),m=bt.get(L,M.length),m.init(),M.push(m),st.enabled===!0&&st.isPresenting===!0){const ft=_.xr.getDepthSensingMesh();ft!==null&&vo(ft,Z,-1/0,_.sortObjects)}vo(L,Z,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(B,P),Et=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,Et&&Ot.addToRenderList(m,L),this.info.render.frame++,Y===!0&&ut.beginShadows();const et=p.state.shadowsArray;Tt.render(et,L,Z),Y===!0&&ut.endShadows(),this.info.autoReset===!0&&this.info.reset();const nt=m.opaque,$=m.transmissive;if(p.setupLights(),Z.isArrayCamera){const ft=Z.cameras;if($.length>0)for(let yt=0,Rt=ft.length;yt<Rt;yt++){const Ct=ft[yt];Kc(nt,$,L,Ct)}Et&&Ot.render(L);for(let yt=0,Rt=ft.length;yt<Rt;yt++){const Ct=ft[yt];$c(m,L,Ct,Ct.viewport)}}else $.length>0&&Kc(nt,$,L,Z),Et&&Ot.render(L),$c(m,L,Z);A!==null&&(F.updateMultisampleRenderTarget(A),F.updateRenderTargetMipmap(A)),L.isScene===!0&&L.onAfterRender(_,L,Z),xe.resetDefaultState(),y=-1,S=null,g.pop(),g.length>0?(p=g[g.length-1],Y===!0&&ut.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function vo(L,Z,et,nt){if(L.visible===!1)return;if(L.layers.test(Z.layers)){if(L.isGroup)et=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(Z);else if(L.isLight)p.pushLight(L),L.castShadow&&p.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||V.intersectsSprite(L)){nt&&_t.setFromMatrixPosition(L.matrixWorld).applyMatrix4(ot);const yt=rt.update(L),Rt=L.material;Rt.visible&&m.push(L,yt,Rt,et,_t.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||V.intersectsObject(L))){const yt=rt.update(L),Rt=L.material;if(nt&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),_t.copy(L.boundingSphere.center)):(yt.boundingSphere===null&&yt.computeBoundingSphere(),_t.copy(yt.boundingSphere.center)),_t.applyMatrix4(L.matrixWorld).applyMatrix4(ot)),Array.isArray(Rt)){const Ct=yt.groups;for(let Vt=0,Yt=Ct.length;Vt<Yt;Vt++){const Pt=Ct[Vt],ae=Rt[Pt.materialIndex];ae&&ae.visible&&m.push(L,yt,ae,et,_t.z,Pt)}}else Rt.visible&&m.push(L,yt,Rt,et,_t.z,null)}}const ft=L.children;for(let yt=0,Rt=ft.length;yt<Rt;yt++)vo(ft[yt],Z,et,nt)}function $c(L,Z,et,nt){const $=L.opaque,ft=L.transmissive,yt=L.transparent;p.setupLightsView(et),Y===!0&&ut.setGlobalState(_.clippingPlanes,et),nt&&Ut.viewport(R.copy(nt)),$.length>0&&or($,Z,et),ft.length>0&&or(ft,Z,et),yt.length>0&&or(yt,Z,et),Ut.buffers.depth.setTest(!0),Ut.buffers.depth.setMask(!0),Ut.buffers.color.setMask(!0),Ut.setPolygonOffset(!1)}function Kc(L,Z,et,nt){if((et.isScene===!0?et.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[nt.id]===void 0&&(p.state.transmissionRenderTarget[nt.id]=new Pi(1,1,{generateMipmaps:!0,type:Dt.has("EXT_color_buffer_half_float")||Dt.has("EXT_color_buffer_float")?nr:qn,minFilter:Ri,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:re.workingColorSpace}));const ft=p.state.transmissionRenderTarget[nt.id],yt=nt.viewport||R;ft.setSize(yt.z,yt.w);const Rt=_.getRenderTarget();_.setRenderTarget(ft),_.getClearColor(D),I=_.getClearAlpha(),I<1&&_.setClearColor(16777215,.5),_.clear(),Et&&Ot.render(et);const Ct=_.toneMapping;_.toneMapping=li;const Vt=nt.viewport;if(nt.viewport!==void 0&&(nt.viewport=void 0),p.setupLightsView(nt),Y===!0&&ut.setGlobalState(_.clippingPlanes,nt),or(L,et,nt),F.updateMultisampleRenderTarget(ft),F.updateRenderTargetMipmap(ft),Dt.has("WEBGL_multisampled_render_to_texture")===!1){let Yt=!1;for(let Pt=0,ae=Z.length;Pt<ae;Pt++){const _e=Z[Pt],ve=_e.object,Xe=_e.geometry,le=_e.material,It=_e.group;if(le.side===je&&ve.layers.test(nt.layers)){const In=le.side;le.side=$e,le.needsUpdate=!0,Jc(ve,et,nt,Xe,le,It),le.side=In,le.needsUpdate=!0,Yt=!0}}Yt===!0&&(F.updateMultisampleRenderTarget(ft),F.updateRenderTargetMipmap(ft))}_.setRenderTarget(Rt),_.setClearColor(D,I),Vt!==void 0&&(nt.viewport=Vt),_.toneMapping=Ct}function or(L,Z,et){const nt=Z.isScene===!0?Z.overrideMaterial:null;for(let $=0,ft=L.length;$<ft;$++){const yt=L[$],Rt=yt.object,Ct=yt.geometry,Vt=nt===null?yt.material:nt,Yt=yt.group;Rt.layers.test(et.layers)&&Jc(Rt,Z,et,Ct,Vt,Yt)}}function Jc(L,Z,et,nt,$,ft){L.onBeforeRender(_,Z,et,nt,$,ft),L.modelViewMatrix.multiplyMatrices(et.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),$.onBeforeRender(_,Z,et,nt,L,ft),$.transparent===!0&&$.side===je&&$.forceSinglePass===!1?($.side=$e,$.needsUpdate=!0,_.renderBufferDirect(et,Z,nt,$,L,ft),$.side=hi,$.needsUpdate=!0,_.renderBufferDirect(et,Z,nt,$,L,ft),$.side=je):_.renderBufferDirect(et,Z,nt,$,L,ft),L.onAfterRender(_,Z,et,nt,$,ft)}function ar(L,Z,et){Z.isScene!==!0&&(Z=Bt);const nt=zt.get(L),$=p.state.lights,ft=p.state.shadowsArray,yt=$.state.version,Rt=Lt.getParameters(L,$.state,ft,Z,et),Ct=Lt.getProgramCacheKey(Rt);let Vt=nt.programs;nt.environment=L.isMeshStandardMaterial?Z.environment:null,nt.fog=Z.fog,nt.envMap=(L.isMeshStandardMaterial?Q:C).get(L.envMap||nt.environment),nt.envMapRotation=nt.environment!==null&&L.envMap===null?Z.environmentRotation:L.envMapRotation,Vt===void 0&&(L.addEventListener("dispose",qt),Vt=new Map,nt.programs=Vt);let Yt=Vt.get(Ct);if(Yt!==void 0){if(nt.currentProgram===Yt&&nt.lightsStateVersion===yt)return tl(L,Rt),Yt}else Rt.uniforms=Lt.getUniforms(L),L.onBeforeCompile(Rt,_),Yt=Lt.acquireProgram(Rt,Ct),Vt.set(Ct,Yt),nt.uniforms=Rt.uniforms;const Pt=nt.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(Pt.clippingPlanes=ut.uniform),tl(L,Rt),nt.needsLights=$u(L),nt.lightsStateVersion=yt,nt.needsLights&&(Pt.ambientLightColor.value=$.state.ambient,Pt.lightProbe.value=$.state.probe,Pt.directionalLights.value=$.state.directional,Pt.directionalLightShadows.value=$.state.directionalShadow,Pt.spotLights.value=$.state.spot,Pt.spotLightShadows.value=$.state.spotShadow,Pt.rectAreaLights.value=$.state.rectArea,Pt.ltc_1.value=$.state.rectAreaLTC1,Pt.ltc_2.value=$.state.rectAreaLTC2,Pt.pointLights.value=$.state.point,Pt.pointLightShadows.value=$.state.pointShadow,Pt.hemisphereLights.value=$.state.hemi,Pt.directionalShadowMap.value=$.state.directionalShadowMap,Pt.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Pt.spotShadowMap.value=$.state.spotShadowMap,Pt.spotLightMatrix.value=$.state.spotLightMatrix,Pt.spotLightMap.value=$.state.spotLightMap,Pt.pointShadowMap.value=$.state.pointShadowMap,Pt.pointShadowMatrix.value=$.state.pointShadowMatrix),nt.currentProgram=Yt,nt.uniformsList=null,Yt}function Qc(L){if(L.uniformsList===null){const Z=L.currentProgram.getUniforms();L.uniformsList=to.seqWithValue(Z.seq,L.uniforms)}return L.uniformsList}function tl(L,Z){const et=zt.get(L);et.outputColorSpace=Z.outputColorSpace,et.batching=Z.batching,et.batchingColor=Z.batchingColor,et.instancing=Z.instancing,et.instancingColor=Z.instancingColor,et.instancingMorph=Z.instancingMorph,et.skinning=Z.skinning,et.morphTargets=Z.morphTargets,et.morphNormals=Z.morphNormals,et.morphColors=Z.morphColors,et.morphTargetsCount=Z.morphTargetsCount,et.numClippingPlanes=Z.numClippingPlanes,et.numIntersection=Z.numClipIntersection,et.vertexAlphas=Z.vertexAlphas,et.vertexTangents=Z.vertexTangents,et.toneMapping=Z.toneMapping}function ju(L,Z,et,nt,$){Z.isScene!==!0&&(Z=Bt),F.resetTextureUnits();const ft=Z.fog,yt=nt.isMeshStandardMaterial?Z.environment:null,Rt=A===null?_.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Ms,Ct=(nt.isMeshStandardMaterial?Q:C).get(nt.envMap||yt),Vt=nt.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,Yt=!!et.attributes.tangent&&(!!nt.normalMap||nt.anisotropy>0),Pt=!!et.morphAttributes.position,ae=!!et.morphAttributes.normal,_e=!!et.morphAttributes.color;let ve=li;nt.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(ve=_.toneMapping);const Xe=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,le=Xe!==void 0?Xe.length:0,It=zt.get(nt),In=p.state.lights;if(Y===!0&&(tt===!0||L!==S)){const nn=L===S&&nt.id===y;ut.setState(nt,L,nn)}let he=!1;nt.version===It.__version?(It.needsLights&&It.lightsStateVersion!==In.state.version||It.outputColorSpace!==Rt||$.isBatchedMesh&&It.batching===!1||!$.isBatchedMesh&&It.batching===!0||$.isBatchedMesh&&It.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&It.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&It.instancing===!1||!$.isInstancedMesh&&It.instancing===!0||$.isSkinnedMesh&&It.skinning===!1||!$.isSkinnedMesh&&It.skinning===!0||$.isInstancedMesh&&It.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&It.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&It.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&It.instancingMorph===!1&&$.morphTexture!==null||It.envMap!==Ct||nt.fog===!0&&It.fog!==ft||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==ut.numPlanes||It.numIntersection!==ut.numIntersection)||It.vertexAlphas!==Vt||It.vertexTangents!==Yt||It.morphTargets!==Pt||It.morphNormals!==ae||It.morphColors!==_e||It.toneMapping!==ve||It.morphTargetsCount!==le)&&(he=!0):(he=!0,It.__version=nt.version);let pn=It.currentProgram;he===!0&&(pn=ar(nt,Z,$));let zi=!1,Ke=!1,bs=!1;const Me=pn.getUniforms(),wn=It.uniforms;if(Ut.useProgram(pn.program)&&(zi=!0,Ke=!0,bs=!0),nt.id!==y&&(y=nt.id,Ke=!0),zi||S!==L){Ut.buffers.depth.getReversed()?(J.copy(L.projectionMatrix),ed(J),nd(J),Me.setValue(X,"projectionMatrix",J)):Me.setValue(X,"projectionMatrix",L.projectionMatrix),Me.setValue(X,"viewMatrix",L.matrixWorldInverse);const Yn=Me.map.cameraPosition;Yn!==void 0&&Yn.setValue(X,ht.setFromMatrixPosition(L.matrixWorld)),Ft.logarithmicDepthBuffer&&Me.setValue(X,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(nt.isMeshPhongMaterial||nt.isMeshToonMaterial||nt.isMeshLambertMaterial||nt.isMeshBasicMaterial||nt.isMeshStandardMaterial||nt.isShaderMaterial)&&Me.setValue(X,"isOrthographic",L.isOrthographicCamera===!0),S!==L&&(S=L,Ke=!0,bs=!0)}if($.isSkinnedMesh){Me.setOptional(X,$,"bindMatrix"),Me.setOptional(X,$,"bindMatrixInverse");const nn=$.skeleton;nn&&(nn.boneTexture===null&&nn.computeBoneTexture(),Me.setValue(X,"boneTexture",nn.boneTexture,F))}$.isBatchedMesh&&(Me.setOptional(X,$,"batchingTexture"),Me.setValue(X,"batchingTexture",$._matricesTexture,F),Me.setOptional(X,$,"batchingIdTexture"),Me.setValue(X,"batchingIdTexture",$._indirectTexture,F),Me.setOptional(X,$,"batchingColorTexture"),$._colorsTexture!==null&&Me.setValue(X,"batchingColorTexture",$._colorsTexture,F));const Ts=et.morphAttributes;if((Ts.position!==void 0||Ts.normal!==void 0||Ts.color!==void 0)&&Ht.update($,et,pn),(Ke||It.receiveShadow!==$.receiveShadow)&&(It.receiveShadow=$.receiveShadow,Me.setValue(X,"receiveShadow",$.receiveShadow)),nt.isMeshGouraudMaterial&&nt.envMap!==null&&(wn.envMap.value=Ct,wn.flipEnvMap.value=Ct.isCubeTexture&&Ct.isRenderTargetTexture===!1?-1:1),nt.isMeshStandardMaterial&&nt.envMap===null&&Z.environment!==null&&(wn.envMapIntensity.value=Z.environmentIntensity),Ke&&(Me.setValue(X,"toneMappingExposure",_.toneMappingExposure),It.needsLights&&Zu(wn,bs),ft&&nt.fog===!0&&vt.refreshFogUniforms(wn,ft),vt.refreshMaterialUniforms(wn,nt,G,W,p.state.transmissionRenderTarget[L.id]),to.upload(X,Qc(It),wn,F)),nt.isShaderMaterial&&nt.uniformsNeedUpdate===!0&&(to.upload(X,Qc(It),wn,F),nt.uniformsNeedUpdate=!1),nt.isSpriteMaterial&&Me.setValue(X,"center",$.center),Me.setValue(X,"modelViewMatrix",$.modelViewMatrix),Me.setValue(X,"normalMatrix",$.normalMatrix),Me.setValue(X,"modelMatrix",$.matrixWorld),nt.isShaderMaterial||nt.isRawShaderMaterial){const nn=nt.uniformsGroups;for(let Yn=0,jn=nn.length;Yn<jn;Yn++){const el=nn[Yn];j.update(el,pn),j.bind(el,pn)}}return pn}function Zu(L,Z){L.ambientLightColor.needsUpdate=Z,L.lightProbe.needsUpdate=Z,L.directionalLights.needsUpdate=Z,L.directionalLightShadows.needsUpdate=Z,L.pointLights.needsUpdate=Z,L.pointLightShadows.needsUpdate=Z,L.spotLights.needsUpdate=Z,L.spotLightShadows.needsUpdate=Z,L.rectAreaLights.needsUpdate=Z,L.hemisphereLights.needsUpdate=Z}function $u(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(L,Z,et){zt.get(L.texture).__webglTexture=Z,zt.get(L.depthTexture).__webglTexture=et;const nt=zt.get(L);nt.__hasExternalTextures=!0,nt.__autoAllocateDepthBuffer=et===void 0,nt.__autoAllocateDepthBuffer||Dt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),nt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(L,Z){const et=zt.get(L);et.__webglFramebuffer=Z,et.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(L,Z=0,et=0){A=L,b=Z,w=et;let nt=!0,$=null,ft=!1,yt=!1;if(L){const Ct=zt.get(L);if(Ct.__useDefaultFramebuffer!==void 0)Ut.bindFramebuffer(X.FRAMEBUFFER,null),nt=!1;else if(Ct.__webglFramebuffer===void 0)F.setupRenderTarget(L);else if(Ct.__hasExternalTextures)F.rebindTextures(L,zt.get(L.texture).__webglTexture,zt.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){const Pt=L.depthTexture;if(Ct.__boundDepthTexture!==Pt){if(Pt!==null&&zt.has(Pt)&&(L.width!==Pt.image.width||L.height!==Pt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");F.setupDepthRenderbuffer(L)}}const Vt=L.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(yt=!0);const Yt=zt.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(Yt[Z])?$=Yt[Z][et]:$=Yt[Z],ft=!0):L.samples>0&&F.useMultisampledRTT(L)===!1?$=zt.get(L).__webglMultisampledFramebuffer:Array.isArray(Yt)?$=Yt[et]:$=Yt,R.copy(L.viewport),N.copy(L.scissor),T=L.scissorTest}else R.copy(z).multiplyScalar(G).floor(),N.copy(H).multiplyScalar(G).floor(),T=q;if(Ut.bindFramebuffer(X.FRAMEBUFFER,$)&&nt&&Ut.drawBuffers(L,$),Ut.viewport(R),Ut.scissor(N),Ut.setScissorTest(T),ft){const Ct=zt.get(L.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ct.__webglTexture,et)}else if(yt){const Ct=zt.get(L.texture),Vt=Z||0;X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,Ct.__webglTexture,et||0,Vt)}y=-1},this.readRenderTargetPixels=function(L,Z,et,nt,$,ft,yt){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=zt.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&yt!==void 0&&(Rt=Rt[yt]),Rt){Ut.bindFramebuffer(X.FRAMEBUFFER,Rt);try{const Ct=L.texture,Vt=Ct.format,Yt=Ct.type;if(!Ft.textureFormatReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ft.textureTypeReadable(Yt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=L.width-nt&&et>=0&&et<=L.height-$&&X.readPixels(Z,et,nt,$,Zt.convert(Vt),Zt.convert(Yt),ft)}finally{const Ct=A!==null?zt.get(A).__webglFramebuffer:null;Ut.bindFramebuffer(X.FRAMEBUFFER,Ct)}}},this.readRenderTargetPixelsAsync=async function(L,Z,et,nt,$,ft,yt){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Rt=zt.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&yt!==void 0&&(Rt=Rt[yt]),Rt){const Ct=L.texture,Vt=Ct.format,Yt=Ct.type;if(!Ft.textureFormatReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ft.textureTypeReadable(Yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Z>=0&&Z<=L.width-nt&&et>=0&&et<=L.height-$){Ut.bindFramebuffer(X.FRAMEBUFFER,Rt);const Pt=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,Pt),X.bufferData(X.PIXEL_PACK_BUFFER,ft.byteLength,X.STREAM_READ),X.readPixels(Z,et,nt,$,Zt.convert(Vt),Zt.convert(Yt),0);const ae=A!==null?zt.get(A).__webglFramebuffer:null;Ut.bindFramebuffer(X.FRAMEBUFFER,ae);const _e=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await td(X,_e,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,Pt),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,ft),X.deleteBuffer(Pt),X.deleteSync(_e),ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(L,Z=null,et=0){L.isTexture!==!0&&(Bs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Z=arguments[0]||null,L=arguments[1]);const nt=Math.pow(2,-et),$=Math.floor(L.image.width*nt),ft=Math.floor(L.image.height*nt),yt=Z!==null?Z.x:0,Rt=Z!==null?Z.y:0;F.setTexture2D(L,0),X.copyTexSubImage2D(X.TEXTURE_2D,et,0,0,yt,Rt,$,ft),Ut.unbindTexture()},this.copyTextureToTexture=function(L,Z,et=null,nt=null,$=0){L.isTexture!==!0&&(Bs("WebGLRenderer: copyTextureToTexture function signature has changed."),nt=arguments[0]||null,L=arguments[1],Z=arguments[2],$=arguments[3]||0,et=null);let ft,yt,Rt,Ct,Vt,Yt,Pt,ae,_e;const ve=L.isCompressedTexture?L.mipmaps[$]:L.image;et!==null?(ft=et.max.x-et.min.x,yt=et.max.y-et.min.y,Rt=et.isBox3?et.max.z-et.min.z:1,Ct=et.min.x,Vt=et.min.y,Yt=et.isBox3?et.min.z:0):(ft=ve.width,yt=ve.height,Rt=ve.depth||1,Ct=0,Vt=0,Yt=0),nt!==null?(Pt=nt.x,ae=nt.y,_e=nt.z):(Pt=0,ae=0,_e=0);const Xe=Zt.convert(Z.format),le=Zt.convert(Z.type);let It;Z.isData3DTexture?(F.setTexture3D(Z,0),It=X.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(F.setTexture2DArray(Z,0),It=X.TEXTURE_2D_ARRAY):(F.setTexture2D(Z,0),It=X.TEXTURE_2D),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,Z.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,Z.unpackAlignment);const In=X.getParameter(X.UNPACK_ROW_LENGTH),he=X.getParameter(X.UNPACK_IMAGE_HEIGHT),pn=X.getParameter(X.UNPACK_SKIP_PIXELS),zi=X.getParameter(X.UNPACK_SKIP_ROWS),Ke=X.getParameter(X.UNPACK_SKIP_IMAGES);X.pixelStorei(X.UNPACK_ROW_LENGTH,ve.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,ve.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,Ct),X.pixelStorei(X.UNPACK_SKIP_ROWS,Vt),X.pixelStorei(X.UNPACK_SKIP_IMAGES,Yt);const bs=L.isDataArrayTexture||L.isData3DTexture,Me=Z.isDataArrayTexture||Z.isData3DTexture;if(L.isRenderTargetTexture||L.isDepthTexture){const wn=zt.get(L),Ts=zt.get(Z),nn=zt.get(wn.__renderTarget),Yn=zt.get(Ts.__renderTarget);Ut.bindFramebuffer(X.READ_FRAMEBUFFER,nn.__webglFramebuffer),Ut.bindFramebuffer(X.DRAW_FRAMEBUFFER,Yn.__webglFramebuffer);for(let jn=0;jn<Rt;jn++)bs&&X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,zt.get(L).__webglTexture,$,Yt+jn),L.isDepthTexture?(Me&&X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,zt.get(Z).__webglTexture,$,_e+jn),X.blitFramebuffer(Ct,Vt,ft,yt,Pt,ae,ft,yt,X.DEPTH_BUFFER_BIT,X.NEAREST)):Me?X.copyTexSubImage3D(It,$,Pt,ae,_e+jn,Ct,Vt,ft,yt):X.copyTexSubImage2D(It,$,Pt,ae,_e+jn,Ct,Vt,ft,yt);Ut.bindFramebuffer(X.READ_FRAMEBUFFER,null),Ut.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else Me?L.isDataTexture||L.isData3DTexture?X.texSubImage3D(It,$,Pt,ae,_e,ft,yt,Rt,Xe,le,ve.data):Z.isCompressedArrayTexture?X.compressedTexSubImage3D(It,$,Pt,ae,_e,ft,yt,Rt,Xe,ve.data):X.texSubImage3D(It,$,Pt,ae,_e,ft,yt,Rt,Xe,le,ve):L.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,$,Pt,ae,ft,yt,Xe,le,ve.data):L.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,$,Pt,ae,ve.width,ve.height,Xe,ve.data):X.texSubImage2D(X.TEXTURE_2D,$,Pt,ae,ft,yt,Xe,le,ve);X.pixelStorei(X.UNPACK_ROW_LENGTH,In),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,he),X.pixelStorei(X.UNPACK_SKIP_PIXELS,pn),X.pixelStorei(X.UNPACK_SKIP_ROWS,zi),X.pixelStorei(X.UNPACK_SKIP_IMAGES,Ke),$===0&&Z.generateMipmaps&&X.generateMipmap(It),Ut.unbindTexture()},this.copyTextureToTexture3D=function(L,Z,et=null,nt=null,$=0){return L.isTexture!==!0&&(Bs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),et=arguments[0]||null,nt=arguments[1]||null,L=arguments[2],Z=arguments[3],$=arguments[4]||0),Bs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(L,Z,et,nt,$)},this.initRenderTarget=function(L){zt.get(L).__webglFramebuffer===void 0&&F.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?F.setTextureCube(L,0):L.isData3DTexture?F.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?F.setTexture2DArray(L,0):F.setTexture2D(L,0),Ut.unbindTexture()},this.resetState=function(){b=0,w=0,A=null,Ut.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=re._getDrawingBufferColorSpace(t),e.unpackColorSpace=re._getUnpackColorSpace()}}class d2 extends Te{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Rn,this.environmentIntensity=1,this.environmentRotation=new Rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class uc extends ke{constructor(t=null,e=1,n=1,s,r,o,a,c,l=We,h=We,u,f){super(null,o,a,c,l,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class th extends en{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ki=new pe,eh=new pe,Cr=[],nh=new Ui,p2=new pe,Ls=new Xt,Is=new ir;class bn extends Xt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new th(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,p2)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ui),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ki),nh.copy(t.boundingBox).applyMatrix4(Ki),this.boundingBox.union(nh)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ir),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ki),Is.copy(t.boundingSphere).applyMatrix4(Ki),this.boundingSphere.union(Is)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Ls.geometry=this.geometry,Ls.material=this.material,Ls.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Is.copy(this.boundingSphere),Is.applyMatrix4(n),t.ray.intersectsSphere(Is)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ki),eh.multiplyMatrices(n,Ki),Ls.matrixWorld=eh,Ls.raycast(t,Cr);for(let o=0,a=Cr.length;o<a;o++){const c=Cr[o];c.instanceId=r,c.object=this,e.push(c)}Cr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new th(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new uc(new Float32Array(s*this.count),s,this.count,Ks,An));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Oc extends ke{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Pn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const h=n[s],f=n[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new St:new U);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new U,s=[],r=[],o=[],a=new U,c=new pe;for(let d=0;d<=t;d++){const v=d/t;s[d]=this.getTangentAt(v,new U)}r[0]=new U,o[0]=new U;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const v=Math.acos(De(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,v))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(De(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let v=1;v<=t;v++)r[v].applyMatrix4(c.makeRotationAxis(s[v],d*v)),o[v].crossVectors(s[v],r[v])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Bc extends Pn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new St){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class m2 extends Bc{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function kc(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let f=(o-r)/l-(a-r)/(l+h)+(a-o)/h,d=(a-o)/h-(c-o)/(h+u)+(c-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const Pr=new U,jo=new kc,Zo=new kc,$o=new kc;class bu extends Pn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new U){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(Pr.subVectors(s[0],s[1]).add(s[0]),l=Pr);const u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Pr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Pr),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let v=Math.pow(l.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);x<1e-4&&(x=1),v<1e-4&&(v=x),m<1e-4&&(m=x),jo.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,v,x,m),Zo.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,v,x,m),$o.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,v,x,m)}else this.curveType==="catmullrom"&&(jo.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),Zo.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),$o.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(jo.calc(c),Zo.calc(c),$o.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new U().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function ih(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function g2(i,t){const e=1-i;return e*e*t}function x2(i,t){return 2*(1-i)*i*t}function _2(i,t){return i*i*t}function Ws(i,t,e,n){return g2(i,t)+x2(i,e)+_2(i,n)}function v2(i,t){const e=1-i;return e*e*e*t}function M2(i,t){const e=1-i;return 3*e*e*i*t}function y2(i,t){return 3*(1-i)*i*i*t}function S2(i,t){return i*i*i*t}function Xs(i,t,e,n,s){return v2(i,t)+M2(i,e)+y2(i,n)+S2(i,s)}class Tu extends Pn{constructor(t=new St,e=new St,n=new St,s=new St){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new St){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Xs(t,s.x,r.x,o.x,a.x),Xs(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class w2 extends Pn{constructor(t=new U,e=new U,n=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new U){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Xs(t,s.x,r.x,o.x,a.x),Xs(t,s.y,r.y,o.y,a.y),Xs(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Au extends Pn{constructor(t=new St,e=new St){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new St){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new St){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class E2 extends Pn{constructor(t=new U,e=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new U){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new U){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ru extends Pn{constructor(t=new St,e=new St,n=new St){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new St){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Ws(t,s.x,r.x,o.x),Ws(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Cu extends Pn{constructor(t=new U,e=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new U){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Ws(t,s.x,r.x,o.x),Ws(t,s.y,r.y,o.y),Ws(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Pu extends Pn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new St){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(ih(a,c.x,l.x,h.x,u.x),ih(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new St().fromArray(s))}return this}}var fc=Object.freeze({__proto__:null,ArcCurve:m2,CatmullRomCurve3:bu,CubicBezierCurve:Tu,CubicBezierCurve3:w2,EllipseCurve:Bc,LineCurve:Au,LineCurve3:E2,QuadraticBezierCurve:Ru,QuadraticBezierCurve3:Cu,SplineCurve:Pu});class b2 extends Pn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new fc[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new fc[s.type]().fromJSON(s))}return this}}class dc extends b2{constructor(t){super(),this.type="Path",this.currentPoint=new St,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Au(this.currentPoint.clone(),new St(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Ru(this.currentPoint.clone(),new St(t,e),new St(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new Tu(this.currentPoint.clone(),new St(t,e),new St(n,s),new St(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Pu(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){const l=new Bc(t,e,n,s,r,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Hc extends Ue{constructor(t=[new St(0,-.5),new St(.5,0),new St(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=De(s,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],h=1/e,u=new U,f=new St,d=new U,v=new U,x=new U;let m=0,p=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:m=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,d.x=p*1,d.y=-m,d.z=p*0,x.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case t.length-1:c.push(x.x,x.y,x.z);break;default:m=t[M+1].x-t[M].x,p=t[M+1].y-t[M].y,d.x=p*1,d.y=-m,d.z=p*0,v.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),c.push(d.x,d.y,d.z),x.copy(v)}for(let M=0;M<=e;M++){const g=n+M*h*s,_=Math.sin(g),E=Math.cos(g);for(let b=0;b<=t.length-1;b++){u.x=t[b].x*_,u.y=t[b].y,u.z=t[b].x*E,o.push(u.x,u.y,u.z),f.x=M/e,f.y=b/(t.length-1),a.push(f.x,f.y);const w=c[3*b+0]*_,A=c[3*b+1],y=c[3*b+0]*E;l.push(w,A,y)}}for(let M=0;M<e;M++)for(let g=0;g<t.length-1;g++){const _=g+M*t.length,E=_,b=_+t.length,w=_+t.length+1,A=_+1;r.push(E,b,A),r.push(w,A,b)}this.setIndex(r),this.setAttribute("position",new ue(o,3)),this.setAttribute("uv",new ue(a,2)),this.setAttribute("normal",new ue(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hc(t.points,t.segments,t.phiStart,t.phiLength)}}class Ce extends Ue{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],f=[],d=[];let v=0;const x=[],m=n/2;let p=0;M(),o===!1&&(t>0&&g(!0),e>0&&g(!1)),this.setIndex(h),this.setAttribute("position",new ue(u,3)),this.setAttribute("normal",new ue(f,3)),this.setAttribute("uv",new ue(d,2));function M(){const _=new U,E=new U;let b=0;const w=(e-t)/n;for(let A=0;A<=r;A++){const y=[],S=A/r,R=S*(e-t)+t;for(let N=0;N<=s;N++){const T=N/s,D=T*c+a,I=Math.sin(D),k=Math.cos(D);E.x=R*I,E.y=-S*n+m,E.z=R*k,u.push(E.x,E.y,E.z),_.set(I,w,k).normalize(),f.push(_.x,_.y,_.z),d.push(T,1-S),y.push(v++)}x.push(y)}for(let A=0;A<s;A++)for(let y=0;y<r;y++){const S=x[y][A],R=x[y+1][A],N=x[y+1][A+1],T=x[y][A+1];(t>0||y!==0)&&(h.push(S,R,T),b+=3),(e>0||y!==r-1)&&(h.push(R,N,T),b+=3)}l.addGroup(p,b,0),p+=b}function g(_){const E=v,b=new St,w=new U;let A=0;const y=_===!0?t:e,S=_===!0?1:-1;for(let N=1;N<=s;N++)u.push(0,m*S,0),f.push(0,S,0),d.push(.5,.5),v++;const R=v;for(let N=0;N<=s;N++){const D=N/s*c+a,I=Math.cos(D),k=Math.sin(D);w.x=y*k,w.y=m*S,w.z=y*I,u.push(w.x,w.y,w.z),f.push(0,S,0),b.x=I*.5+.5,b.y=k*.5*S+.5,d.push(b.x,b.y),v++}for(let N=0;N<s;N++){const T=E+N,D=R+N;_===!0?h.push(D,D+1,T):h.push(D+1,D,T),A+=3}l.addGroup(p,A,_===!0?1:2),p+=A}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ce(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class po extends Ce{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new po(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Lu extends dc{constructor(t){super(t),this.uuid=Di(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new dc().fromJSON(s))}return this}}const T2={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Iu(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,f,d;if(n&&(r=L2(i,t,r,e)),i.length>80*e){a=l=i[0],c=h=i[1];for(let v=e;v<s;v+=e)u=i[v],f=i[v+1],u<a&&(a=u),f<c&&(c=f),u>l&&(l=u),f>h&&(h=f);d=Math.max(l-a,h-c),d=d!==0?32767/d:0}return Js(r,o,e,a,c,d,0),o}};function Iu(i,t,e,n,s){let r,o;if(s===V2(i,t,e,n)>0)for(r=t;r<e;r+=n)o=sh(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=sh(r,i[r],i[r+1],o);return o&&mo(o,o.next)&&(tr(o),o=o.next),o}function Li(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(mo(e,e.next)||Se(e.prev,e,e.next)===0)){if(tr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Js(i,t,e,n,s,r,o){if(!i)return;!o&&r&&z2(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?R2(i,n,s,r):A2(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),tr(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=C2(Li(i),t,e),Js(i,t,e,n,s,r,2)):o===2&&P2(i,t,e,n,s,r):Js(Li(i),t,e,n,s,r,1);break}}}function A2(i){const t=i.prev,e=i,n=i.next;if(Se(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,f=s>r?s>o?s:o:r>o?r:o,d=a>c?a>l?a:l:c>l?c:l;let v=n.next;for(;v!==t;){if(v.x>=h&&v.x<=f&&v.y>=u&&v.y<=d&&as(s,a,r,c,o,l,v.x,v.y)&&Se(v.prev,v,v.next)>=0)return!1;v=v.next}return!0}function R2(i,t,e,n){const s=i.prev,r=i,o=i.next;if(Se(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,f=o.y,d=a<c?a<l?a:l:c<l?c:l,v=h<u?h<f?h:f:u<f?u:f,x=a>c?a>l?a:l:c>l?c:l,m=h>u?h>f?h:f:u>f?u:f,p=pc(d,v,t,e,n),M=pc(x,m,t,e,n);let g=i.prevZ,_=i.nextZ;for(;g&&g.z>=p&&_&&_.z<=M;){if(g.x>=d&&g.x<=x&&g.y>=v&&g.y<=m&&g!==s&&g!==o&&as(a,h,c,u,l,f,g.x,g.y)&&Se(g.prev,g,g.next)>=0||(g=g.prevZ,_.x>=d&&_.x<=x&&_.y>=v&&_.y<=m&&_!==s&&_!==o&&as(a,h,c,u,l,f,_.x,_.y)&&Se(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;g&&g.z>=p;){if(g.x>=d&&g.x<=x&&g.y>=v&&g.y<=m&&g!==s&&g!==o&&as(a,h,c,u,l,f,g.x,g.y)&&Se(g.prev,g,g.next)>=0)return!1;g=g.prevZ}for(;_&&_.z<=M;){if(_.x>=d&&_.x<=x&&_.y>=v&&_.y<=m&&_!==s&&_!==o&&as(a,h,c,u,l,f,_.x,_.y)&&Se(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function C2(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!mo(s,r)&&Du(s,n,n.next,r)&&Qs(s,r)&&Qs(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),tr(n),tr(n.next),n=i=r),n=n.next}while(n!==i);return Li(n)}function P2(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&B2(o,a)){let c=Uu(o,a);o=Li(o,o.next),c=Li(c,c.next),Js(o,t,e,n,s,r,0),Js(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function L2(i,t,e,n){const s=[];let r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=Iu(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(O2(l));for(s.sort(I2),r=0;r<s.length;r++)e=D2(s[r],e);return e}function I2(i,t){return i.x-t.x}function D2(i,t){const e=U2(i,t);if(!e)return t;const n=Uu(e,i);return Li(n,n.next),Li(e,e.next)}function U2(i,t){let e=t,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,c=s.x,l=s.y;let h=1/0,u;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&as(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),Qs(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&N2(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function N2(i,t){return Se(i.prev,i,t.prev)<0&&Se(t.next,i,i.next)<0}function z2(i,t,e,n){let s=i;do s.z===0&&(s.z=pc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,F2(s)}function F2(i){let t,e,n,s,r,o,a,c,l=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(o>1);return i}function pc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function O2(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function as(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function B2(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!k2(i,t)&&(Qs(i,t)&&Qs(t,i)&&H2(i,t)&&(Se(i.prev,i,t.prev)||Se(i,t.prev,t))||mo(i,t)&&Se(i.prev,i,i.next)>0&&Se(t.prev,t,t.next)>0)}function Se(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function mo(i,t){return i.x===t.x&&i.y===t.y}function Du(i,t,e,n){const s=Ir(Se(i,t,e)),r=Ir(Se(i,t,n)),o=Ir(Se(e,n,i)),a=Ir(Se(e,n,t));return!!(s!==r&&o!==a||s===0&&Lr(i,e,t)||r===0&&Lr(i,n,t)||o===0&&Lr(e,i,n)||a===0&&Lr(e,t,n))}function Lr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Ir(i){return i>0?1:i<0?-1:0}function k2(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Du(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Qs(i,t){return Se(i.prev,i,i.next)<0?Se(i,t,i.next)>=0&&Se(i,i.prev,t)>=0:Se(i,t,i.prev)<0||Se(i,i.next,t)<0}function H2(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Uu(i,t){const e=new mc(i.i,i.x,i.y),n=new mc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function sh(i,t,e,n){const s=new mc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function tr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function mc(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function V2(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class qs{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return qs.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];rh(t),oh(n,t);let o=t.length;e.forEach(rh);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,oh(n,e[c]);const a=T2.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function rh(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function oh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class go extends Ue{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],c=[],l=[],h=[];let u=t;const f=(e-t)/s,d=new U,v=new St;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){const p=r+m/n*o;d.x=u*Math.cos(p),d.y=u*Math.sin(p),c.push(d.x,d.y,d.z),l.push(0,0,1),v.x=(d.x/e+1)/2,v.y=(d.y/e+1)/2,h.push(v.x,v.y)}u+=f}for(let x=0;x<s;x++){const m=x*(n+1);for(let p=0;p<n;p++){const M=p+m,g=M,_=M+n+1,E=M+n+2,b=M+1;a.push(g,_,b),a.push(_,E,b)}}this.setIndex(a),this.setAttribute("position",new ue(c,3)),this.setAttribute("normal",new ue(l,3)),this.setAttribute("uv",new ue(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new go(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Vc extends Ue{constructor(t=new Lu([new St(0,.5),new St(-.5,-.5),new St(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],o=[];let a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new ue(s,3)),this.setAttribute("normal",new ue(r,3)),this.setAttribute("uv",new ue(o,2));function l(h){const u=s.length/3,f=h.extractPoints(e);let d=f.shape;const v=f.holes;qs.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=v.length;m<p;m++){const M=v[m];qs.isClockWise(M)===!0&&(v[m]=M.reverse())}const x=qs.triangulateShape(d,v);for(let m=0,p=v.length;m<p;m++){const M=v[m];d=d.concat(M)}for(let m=0,p=d.length;m<p;m++){const M=d[m];s.push(M.x,M.y,0),r.push(0,0,1),o.push(M.x,M.y)}for(let m=0,p=x.length;m<p;m++){const M=x[m],g=M[0]+u,_=M[1]+u,E=M[2]+u;n.push(g,_,E),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return G2(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];n.push(o)}return new Vc(n,t.curveSegments)}}function G2(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class ui extends Ue{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new U,f=new U,d=[],v=[],x=[],m=[];for(let p=0;p<=n;p++){const M=[],g=p/n;let _=0;p===0&&o===0?_=.5/e:p===n&&c===Math.PI&&(_=-.5/e);for(let E=0;E<=e;E++){const b=E/e;u.x=-t*Math.cos(s+b*r)*Math.sin(o+g*a),u.y=t*Math.cos(o+g*a),u.z=t*Math.sin(s+b*r)*Math.sin(o+g*a),v.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),m.push(b+_,1-g),M.push(l++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<e;M++){const g=h[p][M+1],_=h[p][M],E=h[p+1][M],b=h[p+1][M+1];(p!==0||o>0)&&d.push(g,_,b),(p!==n-1||c<Math.PI)&&d.push(_,E,b)}this.setIndex(d),this.setAttribute("position",new ue(v,3)),this.setAttribute("normal",new ue(x,3)),this.setAttribute("uv",new ue(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ui(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Gc extends Ue{constructor(t=new Cu(new U(-1,-1,0),new U(-1,1,0),new U(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new U,c=new U,l=new St;let h=new U;const u=[],f=[],d=[],v=[];x(),this.setIndex(v),this.setAttribute("position",new ue(u,3)),this.setAttribute("normal",new ue(f,3)),this.setAttribute("uv",new ue(d,2));function x(){for(let g=0;g<e;g++)m(g);m(r===!1?e:0),M(),p()}function m(g){h=t.getPointAt(g/e,h);const _=o.normals[g],E=o.binormals[g];for(let b=0;b<=s;b++){const w=b/s*Math.PI*2,A=Math.sin(w),y=-Math.cos(w);c.x=y*_.x+A*E.x,c.y=y*_.y+A*E.y,c.z=y*_.z+A*E.z,c.normalize(),f.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function p(){for(let g=1;g<=e;g++)for(let _=1;_<=s;_++){const E=(s+1)*(g-1)+(_-1),b=(s+1)*g+(_-1),w=(s+1)*g+_,A=(s+1)*(g-1)+_;v.push(E,b,A),v.push(b,w,A)}}function M(){for(let g=0;g<=e;g++)for(let _=0;_<=s;_++)l.x=g/e,l.y=_/s,d.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Gc(new fc[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class de extends sr{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=au,this.normalScale=new St(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.combine=Ac,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Wc extends Te{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Nt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class W2 extends Wc{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Nt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Ko=new pe,ah=new U,ch=new U;class Nu{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new St(512,512),this.map=null,this.mapPass=null,this.matrix=new pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Nc,this._frameExtents=new St(1,1),this._viewportCount=1,this._viewports=[new be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;ah.setFromMatrixPosition(t.matrixWorld),e.position.copy(ah),ch.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ch),e.updateMatrixWorld(),Ko.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ko),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ko)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class X2 extends Nu{constructor(){super(new hn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=_s*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class q2 extends Wc{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.target=new Te,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new X2}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Y2 extends Nu{constructor(){super(new zc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class j2 extends Wc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.target=new Te,this.shadow=new Y2}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Tc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Tc);const kt=216,te=162,pt=3,gc=4,K=typeof location<"u"&&Number(new URLSearchParams(location.search).get("s"))||4,dt=1/K,it=kt*K,gt=te*K,tn=64,se=4,Xc=24,oe=.47,Jo=1/120,Dr=[{name:"Ylhäältä",yaw:0,pitch:55},{name:"Isometrinen",yaw:45,pitch:35.264,fill:!0},{name:"Viisto 30°",yaw:30,pitch:55},{name:"Viisto 45°",yaw:45,pitch:55},{name:"Viisto −30°",yaw:-30,pitch:55}],Qo=3,ta=[-70,110,55],ea=[.34,.38,.5],Ds=new U;function rn(i,t,e,n,s,r){const o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;Ds.copy(t),Ds[n]=0,Ds.normalize();const l=.5*o/(o+a),h=1-Ds.angleTo(i)/c;return Math.sign(Ds[e])===1?h*l:a/(o+a)+l+l*(1-h)}class Z2 extends ce{constructor(t=1,e=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,s,s,s),s===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const a=new U,c=new U,l=new U(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,d=h.length/6,v=new U,x=.5/s;for(let m=0,p=0;m<h.length;m+=3,p+=2)switch(a.fromArray(h,m),c.copy(a),c.x-=Math.sign(c.x)*x,c.y-=Math.sign(c.y)*x,c.z-=Math.sign(c.z)*x,c.normalize(),h[m+0]=l.x*Math.sign(a.x)+c.x*r,h[m+1]=l.y*Math.sign(a.y)+c.y*r,h[m+2]=l.z*Math.sign(a.z)+c.z*r,u[m+0]=c.x,u[m+1]=c.y,u[m+2]=c.z,Math.floor(m/d)){case 0:v.set(1,0,0),f[p+0]=rn(v,c,"z","y",r,n),f[p+1]=1-rn(v,c,"y","z",r,e);break;case 1:v.set(-1,0,0),f[p+0]=1-rn(v,c,"z","y",r,n),f[p+1]=1-rn(v,c,"y","z",r,e);break;case 2:v.set(0,1,0),f[p+0]=1-rn(v,c,"x","z",r,t),f[p+1]=rn(v,c,"z","x",r,n);break;case 3:v.set(0,-1,0),f[p+0]=1-rn(v,c,"x","z",r,t),f[p+1]=1-rn(v,c,"z","x",r,n);break;case 4:v.set(0,0,1),f[p+0]=1-rn(v,c,"x","y",r,t),f[p+1]=1-rn(v,c,"y","x",r,e);break;case 5:v.set(0,0,-1),f[p+0]=rn(v,c,"x","y",r,t),f[p+1]=1-rn(v,c,"y","x",r,e);break}}}function lo(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new Ue;let l=0;for(let h=0;h<i.length;++h){const u=i[h];let f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,h),l+=d}}if(e){let h=0;const u=[];for(let f=0;f<i.length;++f){const d=i[f].index;for(let v=0;v<d.count;++v)u.push(d.getX(v)+h);h+=i[f].attributes.position.count}c.setIndex(u)}for(const h in r){const u=lh(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<u;++f){const d=[];for(let x=0;x<o[h].length;++x)d.push(o[h][x][f]);const v=lh(d);if(!v)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(v)}}return c}function lh(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){const h=i[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const o=new t(r),a=new en(o,e,n);let c=0;for(let l=0;l<i.length;++l){const h=i[l];if(h.isInterleavedBufferAttribute){const u=c/e;for(let f=0,d=h.count;f<d;f++)for(let v=0;v<e;v++){const x=h.getComponent(f,v);a.setComponent(f+u,v,x)}}else o.set(h.array,c);c+=h.count*e}return s!==void 0&&(a.gpuType=s),a}const fi={background:1316639,sunColor:16769461,sunIntensity:2.6,sunOffset:[ta[0],ta[1],ta[2]],skyColor:10337791,groundColor:8020548,hemiIntensity:.8,exposure:1.15,shadowTint:[ea[0],ea[1],ea[2]],water:"river"},hh={background:1011624,sunColor:16774358,sunIntensity:3.1,sunOffset:[-38,130,42],skyColor:9429247,groundColor:15784352,hemiIntensity:1,exposure:1.3,shadowTint:[.5,.52,.66],water:"tropical"},zu={background:1912678,sunColor:16747066,sunIntensity:2.7,sunOffset:[-120,50,52],skyColor:16752518,groundColor:4930662,hemiIntensity:.8,exposure:1.3,shadowTint:[.36,.34,.55],water:"dusk"};function Es(i="river"){return{...zu,background:1382970,sunColor:16749648,sunIntensity:2.5,skyColor:16751242,groundColor:4867176,hemiIntensity:.78,exposure:1.28,water:i}}function Ni(i,t){return[{id:"day",name:"Päivä",icon:"☀️",lighting:i},{id:"evening",name:"Ilta",icon:"🌅",lighting:t,night:!0}]}const uh={background:13624051,sunColor:16774886,sunIntensity:3,sunOffset:[-64,118,48],skyColor:12113663,groundColor:15331839,hemiIntensity:1.05,exposure:1.1,shadowTint:[.46,.53,.74],water:"river",noGround:!0};function $2(){return{...Es(),background:2830944,groundColor:9080760,shadowTint:[.4,.42,.66],noGround:!0}}function Ze(i,t,e=0){let n=i*374761393+t*668265263+e*1442695041|0;return n=Math.imul(n^n>>>13,1274126177),n^=n>>>16,(n>>>0)/4294967296}function fh(i){return i*i*(3-2*i)}function na(i,t,e=0){const n=Math.floor(i),s=Math.floor(t),r=fh(i-n),o=fh(t-s),a=Ze(n,s,e),c=Ze(n+1,s,e),l=Ze(n,s+1,e),h=Ze(n+1,s+1,e);return a+(c-a)*r+(l-a)*o+(a-c-l+h)*r*o}function Mn(i,t,e=0){return na(i,t,e)*.55+na(i*2.1,t*2.1,e+7)*.3+na(i*4.3,t*4.3,e+13)*.15}const dh=60,ph=(i,t)=>i<pt||t<pt||i>kt-pt||t>te-pt,mh=(i,t,e)=>Math.min(e,Math.max(t,i));var O=(i=>(i[i.Dirt=0]="Dirt",i[i.Rut=1]="Rut",i[i.Grass=2]="Grass",i[i.Rock=3]="Rock",i[i.BarrierRed=4]="BarrierRed",i[i.BarrierWhite=5]="BarrierWhite",i[i.CheckA=6]="CheckA",i[i.CheckB=7]="CheckB",i[i.Crater=8]="Crater",i[i.Sand=9]="Sand",i[i.Asphalt=10]="Asphalt",i[i.AsphaltLine=11]="AsphaltLine",i[i.Pavement=12]="Pavement",i[i.RiverBed=13]="RiverBed",i[i.WallA=14]="WallA",i[i.WallB=15]="WallB",i[i.WallC=16]="WallC",i[i.Roof=17]="Roof",i[i.RoofDark=18]="RoofDark",i[i.Trunk=19]="Trunk",i[i.ShadeGrass=20]="ShadeGrass",i[i.Path=21]="Path",i[i.CarRed=22]="CarRed",i[i.CarBlue=23]="CarBlue",i[i.CarYellow=24]="CarYellow",i[i.CabinRed=25]="CabinRed",i[i.CabinBlue=26]="CabinBlue",i[i.CabinYellow=27]="CabinYellow",i[i.LampPost=28]="LampPost",i[i.Bench=29]="Bench",i[i.Hedge=30]="Hedge",i[i.Stone=31]="Stone",i[i.Statue=32]="Statue",i[i.TokyoA=33]="TokyoA",i[i.TokyoB=34]="TokyoB",i[i.VineWall=35]="VineWall",i[i.Concrete=36]="Concrete",i[i.Sandstone=37]="Sandstone",i[i.Plank=38]="Plank",i[i.Seabed=39]="Seabed",i[i.DeepSea=40]="DeepSea",i[i.Cliff=41]="Cliff",i[i.Rubble=42]="Rubble",i[i.Snow=43]="Snow",i[i.SnowRoad=44]="SnowRoad",i[i.SnowRut=45]="SnowRut",i[i.Ice=46]="Ice",i[i.SnowCliff=47]="SnowCliff",i[i.Fortress=48]="Fortress",i))(O||{});const K2=i=>i>=14&&i<=16||i>=33&&i<=35,J2=i=>i>=33&&i<=35,Q2=i=>i>=25&&i<=27,xc=2833226,tg=5913122,Ur=[12618322,10776639,6265406,9146262,14235694,15658734,16053492,2236962,4928804,14467455,4869459,15328976,12170926,9076586,15260088,15856108,11884351,10631982,4082268,7031341,4160046,13483927,13185066,3105986,15054879,13185066,3105986,15054879,3356220,9067051,3107626,10327948,5147250,12171699,14996413,5215300,9145746,14465402,9068342,3717320,2062502,6974578,10721932,15922938,14672872,12038826,10868462,7369852,10133158],_c=(()=>{const i=new Array(49).fill(.8),t=(e,...n)=>{for(const s of n)i[s]=e};return t(1,0,6,7),t(1.05,1),t(.7,2,20,30),t(.85,3,8,31,32,33,34,35,41),t(.65,9),t(1.15,10),t(1.1,11),t(.95,12,36,38),t(.75,13),t(.9,21,37),t(.6,39,40),t(.5,43),t(.66,44),t(.74,45),t(.28,46),t(.85,47,48),i})();function eg(i){return i===46?"Jää":i===43?"Lumi":i===44||i===45?"Tallattu lumi":i===9?"Hiekka":i===2||i===20?"Ruoho":i===10||i===11||i===12?"Asfaltti":"Sora"}const ia=[.5,.68,.84,1],gh=[[1,0,0],[-1,0,0],[0,0,1],[0,0,-1]];function ng(i,t,e,n,s){switch(i){case 0:return[t+1,n,e,t+1,s,e,t+1,s,e+1,t+1,n,e+1];case 1:return[t,n,e+1,t,s,e+1,t,s,e,t,n,e];case 2:return[t+1,n,e+1,t+1,s,e+1,t,s,e+1,t,n,e+1];default:return[t,n,e,t,s,e,t+1,s,e,t+1,n,e]}}function ig(i,t,e,n,s){if(Q2(i))return[[e,n,xc]];if((i===37||i===48)&&n-e>=5)return og(t,e,n,s);if(i===38&&n-e>=4)return ag(t,e,n,s);if(i===41&&n-e>=4)return cg(t,e,n,s);if(i===47&&n-e>=3)return lg(t,e,n,s);if(!K2(i)||n-e<6)return[[e,n,t]];const r=[];if(J2(i))return rg(i,t,e,n,s);const o=(s%8+8)%8>=2&&(s%8+8)%8<=5,a=(s%40+40)%40>=14&&(s%40+40)%40<=17;for(let c=e;c<n;c++){const l=c-e,h=Math.floor(l/10),u=l%10;let f=t;h===0&&a&&u<=7?f=tg:o&&u>=4&&u<=7&&!(h===0&&a)&&(f=xc);const d=r[r.length-1];d&&d[2]===f?d[1]=c+1:r.push([c,c+1,f])}return r}class sg{heights=new Uint8Array(it*gt);mats=new Uint8Array(it*gt);ground=new Uint8Array(it*gt);lit=new Uint8Array(it*gt).fill(1);maxTop=0;WB=Math.ceil(it/2);HB=Math.ceil(gt/2);sky=new Float32Array(Math.ceil(it/2)*Math.ceil(gt/2)).fill(1);bounce=new Float32Array(Math.ceil(it/2)*Math.ceil(gt/2)*3).fill(.4);glow=new Float32Array(Math.ceil(it/2)*Math.ceil(gt/2)*3);irr=new Float32Array(Math.ceil(it/2)*Math.ceil(gt/2)*3).fill(1);albedo=new Float32Array(Math.ceil(it/2)*Math.ceil(gt/2)*3);direct=new Float32Array(Math.ceil(it/2)*Math.ceil(gt/2)*3);rad=new Float32Array(Math.ceil(it/2)*Math.ceil(gt/2)*3);gi=2;radReady=!1;waterY=null;sunDir=[0,1,0];shadowTint=[.34,.38,.5];xray={pos:{value:new U},toCam:{value:new U(0,1,0)},amount:{value:0},radius:{value:9}};group=new we;cw=Math.ceil(it/tn);ch=Math.ceil(gt/tn);meshes;dirty=new Set;material=new de({vertexColors:!0});setLighting(t){const e=Math.hypot(...t.sunOffset);this.sunDir=[t.sunOffset[0]/e,t.sunOffset[1]/e,t.sunOffset[2]/e],this.shadowTint=[...t.shadowTint];const n=s=>{const r=new Nt(s),o=Math.max(r.r,r.g,r.b,.001);return[r.r/o,r.g/o,r.b/o]};this.skyRGB=n(t.skyColor),this.sunRGB=n(t.sunColor),this.sunStrength=mh(t.sunIntensity/(t.hemiIntensity*3.2),.5,1.6)}skyRGB=[.6,.75,1];sunRGB=[1,.9,.7];sunStrength=1;constructor(){this.setLighting(fi),this.installXray(),this.meshes=new Array(this.cw*this.ch).fill(null)}h(t,e){return t<0||e<0||t>=it||e>=gt?0:this.heights[e*it+t]}set(t,e,n,s){t<0||e<0||t>=it||e>=gt||(this.heights[e*it+t]=n,s!==void 0&&(this.mats[e*it+t]=s),this.markDirty(t,e))}snapshotGround(){this.ground.set(this.heights)}groundAt(t,e){const n=Math.min(it-1,Math.max(0,Math.floor(t*K))),s=Math.min(gt-1,Math.max(0,Math.floor(e*K)));return this.ground[s*it+n]*dt}touch(t,e){this.markDirty(t,e)}get chunkInfo(){return{cw:this.cw,ch:this.ch,size:tn}}markDirty(t,e){for(let n=-1;n<=1;n++)for(let s=-1;s<=1;s++){const r=Math.floor((t+s)/tn),o=Math.floor((e+n)/tn);r>=0&&o>=0&&r<this.cw&&o<this.ch&&this.dirty.add(o*this.cw+r)}}heightAt(t,e){if(ph(t,e))return dh;const n=t*K-.5,s=e*K-.5;let r=Math.floor(n),o=Math.floor(s);const a=n-r,c=s-o,l=Math.min(it-1,Math.max(0,r)),h=Math.min(it-1,Math.max(0,r+1)),u=Math.min(gt-1,Math.max(0,o)),f=Math.min(gt-1,Math.max(0,o+1)),d=this.heights[u*it+l],v=this.heights[u*it+h],x=this.heights[f*it+l],m=this.heights[f*it+h];return(d+(v-d)*a+(x-d)*c+(d-v-x+m)*a*c)*dt}stepHeightAt(t,e){if(ph(t,e))return dh;const n=Math.min(it-1,Math.max(0,Math.floor(t*K))),s=Math.min(gt-1,Math.max(0,Math.floor(e*K)));return this.heights[s*it+n]*dt}waterDepthAt(t,e){return this.waterY===null?0:Math.max(0,this.waterY-this.stepHeightAt(t,e))}matAt(t,e){const n=Math.min(it-1,Math.max(0,Math.floor(t*K))),s=Math.min(gt-1,Math.max(0,Math.floor(e*K)));return this.mats[s*it+n]}normalAt(t,e,n){const r=(this.heightAt(t+.5,e)-this.heightAt(t-.5,e))/1,o=(this.heightAt(t,e+.5)-this.heightAt(t,e-.5))/(2*.5);return n.set(-r,1,-o).normalize()}crater(t,e,n,s){const r=n*n;for(let u=Math.floor((e-n)*K);u<=Math.ceil((e+n)*K);u++)for(let f=Math.floor((t-n)*K);f<=Math.ceil((t+n)*K);f++){if(f<0||u<0||f>=it||u>=gt)continue;const d=((f+.5)*dt-t)**2+((u+.5)*dt-e)**2;if(d>=r)continue;const v=1-d/r,x=Math.round(s*K*v),m=this.heights[u*it+f],p=Math.max(K,m-x);this.heights[u*it+f]=p,(v>.25||x>0)&&(this.mats[u*it+f]=8),this.markDirty(f,u)}const o=10*K,a=Math.max(0,Math.floor((t-n)*K)-o),c=Math.min(it,Math.ceil((t+n)*K)+o),l=Math.max(0,Math.floor((e-n)*K)-o),h=Math.min(gt,Math.ceil((e+n)*K)+o);this.bakeShadows(a,c,l,h),this.bakeSky(a-32,c+32,l-32,h+32);for(let u=l;u<h;u+=tn)for(let f=a;f<c;f+=tn)this.markDirty(f,u);this.markDirty(c-1,h-1)}bakeShadows(t,e,n,s,r){r||this.refreshMaxTop();const[o,a,c]=this.sunDir,l=Math.hypot(o,c),h=dt*2/l;for(let u=n;u<s;u++)for(let f=t;f<e;f++){const d=(f+.5)*dt,v=(u+.5)*dt,x=this.heights[u*it+f]*dt+.02;let m=0;for(let M=h;;M+=h){const g=x+a*M;if(g>this.maxTop)break;const _=Math.floor((d+o*M)*K),E=Math.floor((v+c*M)*K);if(_<0||E<0||_>=it||E>=gt)break;if(this.heights[E*it+_]*dt>g){m=1;break}}const p=m?0:1;r&&this.lit[u*it+f]!==p&&r.add(Math.floor(u/tn)*this.cw+Math.floor(f/tn)),this.lit[u*it+f]=p}}bakeSky(t,e,n,s){const r=this.WB,o=this.HB,a=[.6,1.3,2.2,3.5,5.5,8,11.5,15],c=[],l=[];for(let h=0;h<8;h++)c.push(Math.cos(h*Math.PI/4)),l.push(Math.sin(h*Math.PI/4));for(let h=Math.max(0,n>>1);h<=Math.min(o-1,s-1>>1);h++)for(let u=Math.max(0,t>>1);u<=Math.min(r-1,e-1>>1);u++){const f=(u*2+1)*dt,d=(h*2+1)*dt,v=this.heights[Math.min(gt-1,h*2)*it+Math.min(it-1,u*2)]*dt+.05;let x=0;for(let m=0;m<8;m++){let p=0;for(const M of a){const g=Math.floor((f+c[m]*M)*K),_=Math.floor((d+l[m]*M)*K);if(g<0||_<0||g>=it||_>=gt)break;const E=(this.heights[_*it+g]*dt-v)/M;E>p&&(p=E)}x+=1-Math.atan(p)/(Math.PI/2)}this.sky[h*r+u]=x/8}}bakeRadiosity(t,e,n,s,r=2,o=!0){const a=this.WB,c=this.HB,l=Math.max(0,t>>1),h=Math.min(a-1,e-1>>1),u=Math.max(0,n>>1),f=Math.min(c-1,s-1>>1),d=new Nt,v=Math.max(0,this.sunDir[1]);for(let M=u;M<=f;M++)for(let g=l;g<=h;g++){const _=Math.min(gt-1,M*2)*it+Math.min(it-1,g*2),E=(M*a+g)*3;d.setHex(Ur[this.mats[_]]),this.albedo[E]=d.r,this.albedo[E+1]=d.g,this.albedo[E+2]=d.b;const b=this.lit[_]*v*this.sunStrength;for(let w=0;w<3;w++)this.direct[E+w]=this.sunRGB[w]*b+this.glow[E+w]*1.6;for(let w=0;w<3;w++)this.rad[E+w]=this.albedo[E+w]*(this.direct[E+w]+(o?0:this.irr[E+w]*this.skyRGB[w]))}const x=24,m=[];for(let M=0;M<x;M++){const g=(M+.5)/x,_=Math.sqrt(g),E=M*2.399963;m.push(_*Math.cos(E),Math.sqrt(1-g),_*Math.sin(E))}const p=this.maxTop+1;for(let M=0;M<r;M++){for(let g=u;g<=f;g++)for(let _=l;_<=h;_++){const E=Math.min(gt-1,g*2)*it+Math.min(it-1,_*2),b=(g*a+_)*3,w=(_*2+1)*dt,A=(g*2+1)*dt,y=this.heights[E]*dt+.18,S=Ze(_,g,31)*6.2832,R=Math.cos(S),N=Math.sin(S);let T=0,D=0,I=0;for(let k=0;k<x;k++){const W=m[k*3],G=m[k*3+1],B=m[k*3+2],P=W*R-B*N,z=W*N+B*R;let H=.5,q=-1;for(let V=0;V<26;V++,H*=1.2){const Y=y+G*H;if(Y>p)break;const tt=Math.floor((w+P*H)*K),J=Math.floor((A+z*H)*K);if(tt<0||J<0||tt>=it||J>=gt)break;if(this.heights[J*it+tt]*dt>Y){q=((J>>1)*a+(tt>>1))*3;break}}q<0?(T+=this.skyRGB[0],D+=this.skyRGB[1],I+=this.skyRGB[2]):(T+=this.rad[q],D+=this.rad[q+1],I+=this.rad[q+2])}this.irr[b]=T/x,this.irr[b+1]=D/x,this.irr[b+2]=I/x}for(let g=u;g<=f;g++)for(let _=l;_<=h;_++){const E=(g*a+_)*3;for(let b=0;b<3;b++)this.rad[E+b]=this.albedo[E+b]*(this.direct[E+b]+this.irr[E+b])}}for(let M=u;M<=f;M++)for(let g=l;g<=h;g++){const _=(M*a+g)*3;for(let E=0;E<3;E++)this.irr[_+E]=Math.min(1.35,this.irr[_+E]/Math.max(.2,this.skyRGB[E]))}this.radReady=!0}waterDepthMap(){if(this.waterY===null)return null;const t=this.WB,e=this.HB,n=new Uint8Array(t*e);for(let s=0;s<e;s++)for(let r=0;r<t;r++){const o=this.heights[Math.min(gt-1,s*2)*it+Math.min(it-1,r*2)]*dt;n[s*t+r]=Math.round(mh((this.waterY-o)/4,0,1)*255)}return{data:n,w:t,h:e,scale:4}}lightAt(t,e,n){const s=this.WB,r=this.HB,o=Math.min(it-1,Math.max(0,Math.floor(t*K))),a=Math.min(gt-1,Math.max(0,Math.floor(e*K))),c=Math.min(s-1,o>>1),l=Math.min(r-1,a>>1),h=(l*s+c)*3,u=1-this.lit[a*it+o],f=this.shadowTint;for(let d=0;d<3;d++){const v=this.radReady&&this.gi>=2?.32+.68*Math.min(1.15,this.irr[h+d]):.5+.5*Math.pow(this.sky[l*s+c],1.35);n[d]=(1-u*(1-f[d]))*v+this.glow[h+d]*.9}}bakeBounce(){const t=this.WB,e=this.HB,n=t*e;let s=new Float32Array(n*3),r=new Float32Array(n*3);const o=new Nt;for(let c=0;c<e;c++)for(let l=0;l<t;l++){o.setHex(Ur[this.mats[Math.min(gt-1,c*2)*it+Math.min(it-1,l*2)]]);const h=(c*t+l)*3;s[h]=o.r,s[h+1]=o.g,s[h+2]=o.b}const a=4;for(let c=0;c<3;c++){for(let l=0;l<e;l++)for(let h=0;h<t;h++)for(let u=0;u<3;u++){let f=0,d=0;for(let v=-a;v<=a;v++){const x=h+v;x>=0&&x<t&&(f+=s[(l*t+x)*3+u],d++)}r[(l*t+h)*3+u]=f/d}for(let l=0;l<e;l++)for(let h=0;h<t;h++)for(let u=0;u<3;u++){let f=0,d=0;for(let v=-a;v<=a;v++){const x=l+v;x>=0&&x<e&&(f+=r[(x*t+h)*3+u],d++)}s[(l*t+h)*3+u]=f/d}}this.bounce.set(s)}setLights(t){this.glow.fill(0);const e=this.WB,n=this.HB;for(const s of t??[]){const r=Math.max(0,Math.floor((s.x-s.r)/(2*dt))),o=Math.min(e-1,Math.ceil((s.x+s.r)/(2*dt))),a=Math.max(0,Math.floor((s.z-s.r)/(2*dt))),c=Math.min(n-1,Math.ceil((s.z+s.r)/(2*dt)));for(let l=a;l<=c;l++)for(let h=r;h<=o;h++){const u=(h*2+1)*dt,f=(l*2+1)*dt,d=this.heights[Math.min(gt-1,l*2)*it+Math.min(it-1,h*2)]*dt,v=Math.hypot(u-s.x,f-s.z,(d-s.y)*.8);if(v>=s.r)continue;const x=(1-v/s.r)**2.2,m=(l*e+h)*3;this.glow[m]+=s.color[0]*x,this.glow[m+1]+=s.color[1]*x,this.glow[m+2]+=s.color[2]*x}}this.hasGlow=!!(t&&t.length)}hasGlow=!1;avg4(t,e,n,s,r){let o=0;for(let a=0;a<4;a++){const c=s-1+(a&1),l=r-1+(a>>1),h=Math.min(this.WB-1,Math.max(0,c>>1)),u=Math.min(this.HB-1,Math.max(0,l>>1));o+=t[(u*this.WB+h)*n+e]}return o/4}litAt(t,e){let n=0;for(const[s,r]of[[t-1,e-1],[t,e-1],[t-1,e],[t,e]]){const o=Math.min(it-1,Math.max(0,s)),a=Math.min(gt-1,Math.max(0,r));n+=this.lit[a*it+o]}return n/4}rebuildAll(){this.bakeShadows(0,it,0,gt),this.bakeSky(0,it,0,gt),this.bakeBounce(),this.gi>=2&&this.bakeRadiosity(0,it,0,gt,3);for(let t=0;t<this.cw*this.ch;t++)this.dirty.add(t);this.update()}update(t=1/0){if(this.dirty.size===0)return;let e=0;for(const n of this.dirty){if(e++>=t)break;this.buildChunk(n%this.cw,Math.floor(n/this.cw)),this.dirty.delete(n)}}get pendingChunks(){return this.dirty.size}queueChunks(t){for(const e of t)this.dirty.add(e)}refreshMaxTop(){let t=0;for(let e=0;e<this.heights.length;e++)this.heights[e]>t&&(t=this.heights[e]);this.maxTop=t*dt}installXray(){const t=this.xray;this.material.onBeforeCompile=e=>{e.uniforms.uXrayPos=t.pos,e.uniforms.uXrayToCam=t.toCam,e.uniforms.uXrayAmount=t.amount,e.uniforms.uXrayRadius=t.radius,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vXrayWorld;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vXrayWorld = (modelMatrix * vec4(transformed, 1.0)).xyz;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vXrayWorld;
uniform vec3 uXrayPos;
uniform vec3 uXrayToCam;
uniform float uXrayAmount;
uniform float uXrayRadius;
float xrayBayer(vec2 p) {
  p = floor(mod(p, 4.0));
  float i = p.x + p.y * 4.0;
  // 4x4 Bayer matrix, values 0..15
  float m = i < 8.0 ? (i < 4.0 ? (i < 1.0 ? 0.0 : i < 2.0 ? 8.0 : i < 3.0 ? 2.0 : 10.0) : (i < 5.0 ? 12.0 : i < 6.0 ? 4.0 : i < 7.0 ? 14.0 : 6.0))
                    : (i < 12.0 ? (i < 9.0 ? 3.0 : i < 10.0 ? 11.0 : i < 11.0 ? 1.0 : 9.0) : (i < 13.0 ? 15.0 : i < 14.0 ? 7.0 : i < 15.0 ? 13.0 : 5.0));
  return (m + 0.5) / 16.0;
}`).replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
if (uXrayAmount > 0.001) {
  vec3 rel = vXrayWorld - uXrayPos;
  float along = dot(rel, uXrayToCam);              // > 0: closer to the camera than the truck
  float dist = length(rel - uXrayToCam * along);   // distance from the line of sight
  float hole = (1.0 - smoothstep(uXrayRadius * 0.45, uXrayRadius, dist)) * smoothstep(0.8, 2.4, along) * uXrayAmount;
  if (hole > xrayBayer(gl_FragCoord.xy)) discard;
}`)}}underwaterBlock(t,e){if(this.waterY===null)return 0;const n=t-t%4,s=e-e%4;if(n+3>=it||s+3>=gt||n<1||s<1)return 0;const r=this.heights[s*it+n],o=this.mats[s*it+n];if(r*dt>=this.waterY-.3)return 0;for(let a=-1;a<=4;a++)for(let c=-1;c<=4;c++){const l=(s+a)*it+n+c;if(c>=0&&c<4&&a>=0&&a<4?this.heights[l]!==r||this.mats[l]!==o||!this.lit[l]:this.heights[l]>r)return 0}return t===n&&e===s?2:1}buildChunk(t,e){const n=[],s=[],r=[],o=[],a=new Nt,c=this.shadowTint,l=this.sunDir;let h=0;const u=(M,g,_,E=!1)=>{for(let b=0;b<4;b++)n.push(M[b*3]*dt,M[b*3+1]*dt,M[b*3+2]*dt),s.push(g[0],g[1],g[2]),r.push(_[b][0],_[b][1],_[b][2]);E?o.push(h+1,h+2,h+3,h+1,h+3,h):o.push(h,h+1,h+2,h,h+2,h+3),h+=4},f=t*tn,d=e*tn;for(let M=d;M<Math.min(gt,d+tn);M++)for(let g=f;g<Math.min(it,f+tn);g++){const _=this.h(g,M),E=this.mats[M*it+g],b=this.underwaterBlock(g,M),w=.93+Ze(g,M,3)*.14;a.setHex(Ur[E]);const A=a.r*w,y=a.g*w,S=a.b*w,R=[],N=[[0,0],[0,1],[1,1],[1,0]];for(const[z,H]of N){const q=z?1:-1,V=H?1:-1,Y=this.h(g+q,M)>_?1:0,tt=this.h(g,M+V)>_?1:0,J=this.h(g+q,M+V)>_?1:0;R.push(Y&&tt?0:3-(Y+tt+J))}const T=this.gi>0,D=this.gi>=2&&this.radReady,I=N.map(([z,H])=>{const q=1-this.litAt(g+z,M+H);let V=1-q*(1-c[0]),Y=1-q*(1-c[1]),tt=1-q*(1-c[2]);if(D){const J=g+z,ot=M+H;V*=.32+.68*Math.min(1.15,this.avg4(this.irr,0,3,J,ot)),Y*=.32+.68*Math.min(1.15,this.avg4(this.irr,1,3,J,ot)),tt*=.32+.68*Math.min(1.15,this.avg4(this.irr,2,3,J,ot)),this.hasGlow&&(V+=1.3*this.avg4(this.glow,0,3,J,ot),Y+=1.3*this.avg4(this.glow,1,3,J,ot),tt+=1.3*this.avg4(this.glow,2,3,J,ot))}else if(T){const J=g+z,ot=M+H,ht=.5+.5*Math.pow(this.avg4(this.sky,0,1,J,ot),1.35);V=Math.min(1.1,V+q*.3*this.avg4(this.bounce,0,3,J,ot))*ht,Y=Math.min(1.1,Y+q*.3*this.avg4(this.bounce,1,3,J,ot))*ht,tt=Math.min(1.1,tt+q*.3*this.avg4(this.bounce,2,3,J,ot))*ht,this.hasGlow&&(V+=1.3*this.avg4(this.glow,0,3,J,ot),Y+=1.3*this.avg4(this.glow,1,3,J,ot),tt+=1.3*this.avg4(this.glow,2,3,J,ot))}return[V,Y,tt]}),k=R.map((z,H)=>[A*ia[z]*I[H][0],y*ia[z]*I[H][1],S*ia[z]*I[H][2]]);if(b===2){const z=[a.r,a.g,a.b];u([g,_,M,g,_,M+4,g+4,_,M+4,g+4,_,M],[0,1,0],[z,z,z,z])}else b===0&&u([g,_,M,g,_,M+1,g+1,_,M+1,g+1,_,M],[0,1,0],k,R[0]+R[2]<R[1]+R[3]);const W=this.lit[M*it+g],G=Ur[E],B=(z,H)=>{const q=gh[z],V=W||q[0]*l[0]+q[2]*l[2]<=0?0:1;let Y=1-V*(1-c[0]),tt=1-V*(1-c[1]),J=1-V*(1-c[2]);if(this.gi>=2&&this.radReady){const _t=Math.min(this.WB-1,g>>1),Bt=Math.min(this.HB-1,M>>1),Et=Bt*this.WB+_t;Y*=.32+.68*Math.min(1.15,this.irr[Et*3]),tt*=.32+.68*Math.min(1.15,this.irr[Et*3+1]),J*=.32+.68*Math.min(1.15,this.irr[Et*3+2]),this.hasGlow&&(Y+=1*this.glow[Et*3],tt+=1*this.glow[Et*3+1],J+=1*this.glow[Et*3+2])}else if(this.gi>0){const _t=Math.min(this.WB-1,g>>1),Bt=Math.min(this.HB-1,M>>1),Et=Bt*this.WB+_t,Wt=.5+.46*Math.pow(this.sky[Et],1.35);Y=Math.min(1.1,Y+V*.3*this.bounce[Et*3])*Wt,tt=Math.min(1.1,tt+V*.3*this.bounce[Et*3+1])*Wt,J=Math.min(1.1,J+V*.3*this.bounce[Et*3+2])*Wt,this.hasGlow&&(Y+=1*this.glow[Et*3],tt+=1*this.glow[Et*3+1],J+=1*this.glow[Et*3+2])}const ot=z<2?M:g,ht=ig(E,G,H,_,ot);for(let _t=0;_t<ht.length;_t++){const[Bt,Et,Wt]=ht[_t];a.setHex(Wt);const X=a.r*w,ee=a.g*w,Dt=a.b*w,Ft=ht.length===1?.72:.9,Ut=[X*Y,ee*tt,Dt*J],me=[X*Ft*Y,ee*Ft*tt,Dt*Ft*J];u(ng(z,g,M,Bt,Et),gh[z],[me,Ut,Ut,me])}};let P=this.h(g+1,M);P<_&&B(0,P),P=this.h(g-1,M),P<_&&B(1,P),P=this.h(g,M+1),P<_&&B(2,P),P=this.h(g,M-1),P<_&&B(3,P)}const v=e*this.cw+t;let x=this.meshes[v];x||(x=new Xt(new Ue,this.material),x.castShadow=!1,x.receiveShadow=!0,this.meshes[v]=x,this.group.add(x));const m=new Ue;m.setAttribute("position",new ue(n,3)),m.setAttribute("normal",new ue(s,3)),m.setAttribute("color",new ue(r,3)),m.setIndex(o);const p=function(){this.array=null};for(const M of[m.attributes.position,m.attributes.normal,m.attributes.color,m.index])M.onUpload(p);m.computeBoundingSphere(),m.computeBoundingBox(),x.geometry.dispose(),x.geometry=m}}function rg(i,t,e,n,s){const r=[],o=(s%6+6)%6,a=(s%3+3)%3,c=(s%5+5)%5,l=i===35;for(let h=e;h<n;h++){const u=h-e,f=Math.floor(u/10),d=u%10;let v=t;l&&c===0&&(v=3108652),d>=4&&d<=7&&o>=1&&o<=4?v=xc:f>0&&d<=1&&a!==2?v=d===1?5681226:3832372:f===0&&d<=5&&o>=2&&o<=3&&(v=16771496);const x=r[r.length-1];x&&x[2]===v?x[1]=h+1:r.push([h,h+1,v])}return r}function og(i,t,e,n){const s=[],r=(n%10+10)%10;for(let o=t;o<e;o++){const a=o-t,c=Math.floor(a/14),l=a%14;let h=i;(l===5||l===11)&&(h=13215078),(c>0||a>7)&&l>=6&&l<=10&&(r===4||r===5)&&(h=3812900),l===10&&(r===4||r===5)&&(h=3812900);const u=s[s.length-1];u&&u[2]===h?u[1]=o+1:s.push([o,o+1,h])}return s}function ag(i,t,e,n){const s=[],r=(n%6+6)%6<2;for(let o=t;o<e;o++){const a=o-t;let c=r?6044960:i;a%8===7&&(c=4862233);const l=s[s.length-1];l&&l[2]===c?l[1]=o+1:s.push([o,o+1,c])}return s}function cg(i,t,e,n){const s=[];for(let r=t;r<e;r++){const o=Math.floor((r+(n*7%5+5)%5)/5);let a=o%3===0?i:o%3===1?8223348:5988198;o%7===3&&(a=5208634);const c=s[s.length-1];c&&c[2]===a?c[1]=r+1:s.push([r,r+1,a])}return s}function lg(i,t,e,n){const s=[];for(let r=t;r<e;r++){const o=Math.floor((r+(n*5%7+7)%7)/4);let a=o%3===0?i:o%3===1?9080470:6119784;o%5===2?a=15331574:o%11===4&&(a=10868462);const c=s[s.length-1];c&&c[2]===a?c[1]=r+1:s.push([r,r+1,a])}return s}const Fu={steer:0,throttle:0,brake:0,nitro:!1,handbrake:!1},Nr=100,Ji=new U(260*oe*oe,742*oe*oe,583*oe*oe),xo=1.5,an=xo*oe,yi=1.9*oe,hg=750/oe,ug=120/Math.sqrt(oe),fg=80/Math.sqrt(oe),dg=9e3/oe,sa=-.1*oe,is=1.2,pg=2.3*oe,xh=2.6*oe,zr=(xo+1.1+.1)*oe,mg=1900,Ou=30,gg=Ou,xg=12,_g=1.7,vg=1.28,Mg=1.1,yg=420,Sg=8.5,wg=1.6,Eg=.9,bg=(2.7+1.75)*oe,_o=2*(2.3+xo)*oe,Tg=2*bg,Ag=1.04*Math.sqrt(2*Xc*Tg),Rg=.6,ra=.05,Cg=[[3.2,-.5,1.6],[3.2,-.5,-1.6],[-3.2,-.5,1.6],[-3.2,-.5,-1.6],[3.2,-.5,0],[-3.2,-.5,0],[0,-.6,1.6],[0,-.6,-1.6],[0,1.7,1.2],[0,1.7,-1.2],[-1.2,1.7,1.2],[-1.2,1.7,-1.2]].map(i=>new U(i[0]*oe,i[1]*oe,i[2]*oe)),Pg=(()=>{const i=[],t=(e,n,s,r,o,a,c,l,h)=>{for(let u=0;u<=c;u++)for(let f=0;f<=l;f++)for(let d=0;d<=h;d++)u!==0&&u!==c&&f!==0&&f!==l&&d!==0&&d!==h||i.push(new U(e+(n-e)*u/c,s+(r-s)*f/l,o+(a-o)*d/h).multiplyScalar(oe))};return t(-3.2,3.2,-.55,.5,-1.6,1.6,6,1,4),t(-1.95,.55,.5,1.55,-1.4,1.4,3,1,3),t(-.6,-.2,1.55,1.75,-1,1,1,1,2),i})(),_h=6e3,vh=200,Mh=.85,oa=6e3,yh=400,Ei=new U,Fr=new U,Sh=new U,Us=new U,wh=new U,ei=new U,Qi=new fn,Ns=new fn,aa=new U(0,1,0);class eo{constructor(t=14168875){this.color=t,this.model.scale.setScalar(oe),this.group.add(this.model),this.buildMesh()}group=new we;model=new we;pos=new U;quat=new fn;vel=new U;angVel=new U;wheels=[];steerAngle=0;nitro=1;nitroActive=!1;speed=0;forwardSpeed=0;airborne=!1;bounceCooldown=0;headMat=new de({color:16107048,emissive:0});tailMat=new de({color:16722474,emissive:0});headlights=[];night=!1;lightMats=[];light=new Nt(1,1,1);lightGoal=new Nt(1,1,1);pendingF=new U;pendingT=new U;jumpCount=0;jumpRequest=!1;jumpCooldown=0;groundedPrev=0;upsideDownTime=0;bodyHit=0;get bump(){return this.bodyHit}reset(t,e,n,s){this.pos.set(t,e,n),this.quat.setFromAxisAngle(aa,s),this.vel.set(0,0,0),this.angVel.set(0,0,0),this.steerAngle=0,this.upsideDownTime=0,this.jumpRequest=!1;for(const r of this.wheels)r.len=yi*.6,r.spin=0;this.syncVisual()}static headingOf(t,e){return Math.atan2(-e,t)}step(t,e,n){const s=this.quat,r=Ei.set(1,0,0).applyQuaternion(s).clone(),o=Ei.set(0,1,0).applyQuaternion(s).clone(),a=this.vel.dot(r);this.forwardSpeed=a,this.speed=this.vel.length(),this.nitroActive=e.nitro&&this.nitro>.01&&e.throttle>.1,this.nitroActive?this.nitro=Math.max(0,this.nitro-t*.28):this.nitro=Math.min(1,this.nitro+t*.04);const c=this.nitroActive?_g:1,l=Ou*(this.nitroActive?vg:1);this.jumpCooldown=Math.max(0,this.jumpCooldown-t),this.bounceCooldown=Math.max(0,this.bounceCooldown-t);const h=this.jumpRequest&&this.groundedPrev>=2&&this.jumpCooldown===0?1:0;this.jumpRequest=!1;const u=pi.lerp(.62,.2,Math.min(1,this.speed/36)),f=e.steer*u,d=Math.abs(f)<Math.abs(this.steerAngle)?7:4.5,v=pi.clamp(f-this.steerAngle,-d*t,d*t);this.steerAngle+=v;const x=new U(0,-Nr*Xc,0),m=new U;x.add(this.pendingF),m.add(this.pendingT),this.pendingF.set(0,0,0),this.pendingT.set(0,0,0);const p=(I,k)=>{x.add(k),m.add(ei.copy(I).sub(this.pos).cross(k))},M=(I,k)=>k.copy(I).sub(this.pos).cross(this.angVel).negate().add(this.vel),g=new U,_=o.y<.35,E=new U(r.x,0,r.z).normalize(),b=new U(-E.z,0,E.x);let w=0;const A=e.handbrake,y=e.brake>.02&&e.throttle<.05,S=e.throttle<.02&&e.brake<.02;for(const I of this.wheels){const k=Fr.copy(I.mount).applyQuaternion(s).add(this.pos),W=Sh.copy(o).negate(),G=_?-1:Ng(n,k,W,yi,E,b);if(G===Bu){I.grounded=!1,I.len=0,I.hub.copy(k),I.slip=0;continue}if(G<0){I.grounded=!1,I.len+=(yi-I.len)*Math.min(1,t*14),I.hub.copy(k).addScaledVector(W,I.len),I.slip=0;continue}w++,I.grounded=!0;const B=pi.clamp(G,0,yi);I.len=B,I.hub.copy(k).addScaledVector(W,B),I.contact.copy(I.hub).addScaledVector(W,an);const P=M(k,Us).dot(W);let z=hg*(yi-B)+(P>0?ug:fg)*P;B<.3*oe&&(z+=dg*(.3*oe-B)),z=Math.max(0,z),p(k,wh.copy(o).multiplyScalar(z));const H=n.normalAt(I.contact.x,I.contact.z,g);I.normal.copy(H);const q=Us.set(1,0,0);I.front&&q.applyAxisAngle(aa,-this.steerAngle),q.applyQuaternion(s),q.addScaledVector(H,-q.dot(H)).normalize();const V=wh.copy(q).cross(H),Y=M(I.hub,Fr),tt=Y.dot(q),J=Y.dot(V),ht=_c[n.matAt(I.contact.x,I.contact.z)]*z,_t=!I.front&&A?.55:1;let Bt=0,Et=0;e.throttle>.02?Bt=mg*c*e.throttle/4*pi.clamp(1-tt/l,0,1.3):y&&(a>1?Et=e.brake:Bt=-1100*e.brake/4*pi.clamp(1+tt/xg,0,1)),A&&!I.front&&(Et=1),S&&Math.abs(a)<2&&(Et=.8);const Wt=e.throttle>.02?.02:.07;let X=Bt-Math.tanh(tt/.35)*(Et*.9*ht+Wt*z),ee=-ht*Math.tanh(J/.5)*_t;const Dt=Math.hypot(X,ee);Dt>ht&&Dt>0&&(X*=ht/Dt,ee*=ht/Dt),I.slip=Math.hypot(J,Bt>ht?6:0)+(Et>.6?Math.abs(tt)*.5:0);const Ft=new U().copy(q).multiplyScalar(X).addScaledVector(V,ee),Ut=o.dot(ei.copy(this.pos).sub(I.hub))*Mh;p(ei.copy(I.hub).addScaledVector(o,Ut),Ft),I.spin+=tt/an*t}this.airborne=w===0,this.groundedPrev=w;for(const I of this.wheels){if(I.wet=0,n.waterY===null||n.waterDepthAt(I.hub.x,I.hub.z)<=0)continue;const k=pi.clamp(n.waterY-(I.hub.y-an),0,2*an);if(k<=0)continue;I.wet=k/(2*an);const W=M(I.hub,Us);W.y=0;const G=W.length();if(G<.05)continue;const B=Math.min(yg,Mg*k*G*G),P=o.dot(ei.copy(this.pos).sub(I.hub))*Mh;p(ei.copy(I.hub).addScaledVector(o,P),W.multiplyScalar(-B/G))}if(h>0&&w>0){const I=Nr*Ag*h/4;Qi.copy(s).invert();for(const k of this.wheels){if(!k.grounded)continue;const W=new U().copy(k.normal).multiplyScalar(I);this.vel.addScaledVector(W,1/Nr);const G=ei.copy(k.contact).sub(this.pos).cross(W).applyQuaternion(Qi),B=Ei.copy(this.angVel).applyQuaternion(Qi);B.x+=ra*G.x/Ji.x,B.y+=ra*G.y/Ji.y,B.z+=ra*G.z/Ji.z,this.angVel.copy(B).applyQuaternion(s)}this.jumpCount++,this.jumpCooldown=Rg}const R=Ei.set(0,0,1).applyQuaternion(s).clone(),N=[];for(const I of this.wheels)N.push(I.hub.clone().addScaledVector(R,I.sign*(is/2+.05)*oe)),N.push(I.hub.clone().addScaledVector(r,(I.front?1:-1)*an));for(const I of N){const k=n.heightAt(I.x,I.z)-I.y;if(k>0&&(this.bodyHit=Math.max(this.bodyHit,k*.6)),k<=0)continue;const W=n.normalAt(I.x,I.z,g);if(W.y=0,W.lengthSq()<1e-6)continue;W.normalize();const G=M(I,Us),B=Math.max(0,oa*Math.min(k,3)-yh*G.dot(W));I.addScaledVector(o,o.dot(ei.copy(this.pos).sub(I))),p(I,new U().copy(W).multiplyScalar(B))}this.bodyHit=0;for(const I of Cg)this.bodyContact(I,oa,yh,o,n,M,p);for(const I of Pg)this.bodyContact(I,_h,vh,o,n,M,p);if(o.y<.6){const I=new U;for(const k of this.wheels)for(let W=0;W<10;W++){const G=W/10*Math.PI*2;I.set(k.mount.x+Math.cos(G)*an,sa-k.len+Math.sin(G)*an,k.sign*(xh+is/2*oe)),this.bodyContact(I,_h,vh,o,n,M,p)}}x.addScaledVector(this.vel,-.05*this.speed),m.addScaledVector(this.angVel,-40),this.vel.addScaledVector(x,t/Nr),Qi.copy(s).invert();const T=Ei.copy(this.angVel).applyQuaternion(Qi),D=Fr.copy(m).applyQuaternion(Qi);T.x+=D.x/Ji.x*t,T.y+=D.y/Ji.y*t,T.z+=D.z/Ji.z*t,this.angVel.copy(T).applyQuaternion(s),this.pos.addScaledVector(this.vel,t),Ns.set(this.angVel.x,this.angVel.y,this.angVel.z,0).multiply(s),s.set(s.x+.5*t*Ns.x,s.y+.5*t*Ns.y,s.z+.5*t*Ns.z,s.w+.5*t*Ns.w).normalize(),o.y<.25?this.upsideDownTime+=t:this.upsideDownTime=0}bodyContact(t,e,n,s,r,o,a){const c=Fr.copy(t).applyQuaternion(this.quat).add(this.pos),l=Math.max(r.heightAt(c.x,c.z),r.stepHeightAt(c.x,c.z))-c.y;if(l<=0)return;this.bodyHit=Math.max(this.bodyHit,l);const h=r.normalAt(c.x,c.z,Sh);h.y<.65&&(h.y=0,h.normalize());const u=o(c,Us),f=u.dot(h),d=Math.max(0,e*Math.min(l,3)-n*f),v=new U().copy(h).multiplyScalar(d);v.addScaledVector(u.addScaledVector(h,-f),-25*(e/oa)),h.y===0&&c.addScaledVector(s,s.dot(ei.copy(this.pos).sub(c))),a(c,v)}bounce(){if(this.bounceCooldown>0)return;this.bounceCooldown=Eg;const t=Ei.set(0,1,0).applyQuaternion(this.quat);if(t.y>.7&&this.groundedPrev>=2){this.jumpRequest=!0;return}const e=Math.acos(pi.clamp(t.y,-1,1));this.vel.y=Math.max(this.vel.y,0)+Sg;const n=new U().crossVectors(t,aa);n.lengthSq()<1e-4&&n.set(Math.random()-.5,0,Math.random()-.5),n.setY(0).normalize(),this.angVel.addScaledVector(n,e*wg*(.75+.5*Math.random())),this.angVel.y+=(Math.random()-.5)*2}setNight(t){if(t===this.night&&this.headlights.length>0===t)return;this.night=t,this.headMat.emissive.setHex(t?16773304:0),this.headMat.emissiveIntensity=t?1.6:0,this.tailMat.emissive.setHex(t?16718362:0),this.tailMat.emissiveIntensity=t?1.1:0;for(const r of this.headlights)this.group.remove(r);if(this.headlights=[],!t)return;const e=new q2(16773320,150,64,.7,1,1.1);e.position.set(1.5*oe*2.2,.45,0);const n=new Te;n.position.set(26,-2.2,0),this.group.add(e,n),e.target=n,this.headlights.push(e,n);const s=new Cn({transparent:!0,depthWrite:!1,blending:Xn,side:je,uniforms:{uColor:{value:new Nt(16773312)},uOpacity:{value:.34}},vertexShader:`varying vec3 vN; varying float vU;
        void main() { vN = normalize(normalMatrix * normal); vU = uv.y; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`uniform vec3 uColor; uniform float uOpacity; varying vec3 vN; varying float vU;
        void main() {
          float rim = abs(normalize(vN).z);                 // 1 in the middle of the cone, 0 at its silhouette
          float edge = smoothstep(0.0, 0.9, rim);
          float along = pow(1.0 - vU, 1.5) * smoothstep(0.0, 0.08, vU); // bright at the lamp, gone at the far end, no hard start
          gl_FragColor = vec4(uColor, uOpacity * edge * edge * along);
        }`});for(const r of[-1,1]){const o=new Ce(3.6,.15,17,24,8,!0).rotateZ(-Math.PI/2).translate(9.7,0,0),a=new Xt(o,s);a.position.set(0,.35,r*.5),a.rotation.y=-r*.2,a.renderOrder=6,this.group.add(a),this.headlights.push(a)}}setLight(t,e){this.lightGoal.setRGB(Math.min(1.5,t[0]),Math.min(1.5,t[1]),Math.min(1.5,t[2])),this.light.lerp(this.lightGoal,1-Math.exp(-e*7));for(const{m:n,base:s}of this.lightMats)n.color.setRGB(s.r*this.light.r,s.g*this.light.g,s.b*this.light.b)}setKinematic(t,e,n,s){this.pos.copy(e),this.quat.copy(n),this.vel.copy(s),this.angVel.set(0,0,0),this.speed=this.forwardSpeed=s.length(),this.airborne=!1,this.groundedPrev=4,this.upsideDownTime=0;for(const r of this.wheels)r.grounded=!1,r.slip=0,r.wet=0,r.len+=(yi*.55-r.len)*Math.min(1,t*12),r.spin+=this.speed/an*t,r.hub.copy(e),r.contact.copy(e)}push(t,e){this.pendingF.add(e),this.pendingT.add(new U().copy(t).sub(this.pos).cross(e))}impulse(t,e){this.vel.add(t),this.angVel.add(e)}syncVisual(){this.group.position.copy(this.pos),this.group.quaternion.copy(this.quat);const t=new U,e=new U,n=new U,s=new U;for(const r of this.wheels){const o=r.mount.x/oe,a=(sa-r.len)/oe,c=r.mount.z/oe;r.pivot.position.set(o,a,c),r.pivot.rotation.y=r.front?-this.steerAngle:0,r.roll.rotation.z=-r.spin,e.set(o,.35,r.sign*1.85),t.set(o,a+.15,r.sign*2),s.lerpVectors(e,t,.55),ca(r.spring,e,s),ca(r.rod,s,t),n.set(o*.45,-.55,r.sign*1.1),ca(r.arm,n,t.set(o,a,r.sign*1.95))}}buildMesh(){const t=b=>{const w=new de({color:b});return this.lightMats.push({m:w,base:new Nt(b)}),w},e=t(this.color),n=t(2763312),s=t(8373484),r=t(13225430),o=t(16107048),a=t(1842208),c=this.tailMat,l=(b,w,A,y,S,R,N,T)=>{const D=new Xt(new Z2(b,w,A,3,y),S);return D.position.set(R,N,T),D.castShadow=!0,D.receiveShadow=!0,this.model.add(D),D};l(5.4,.4,2.2,.12,n,0,-.5,0),l(5.8,.9,3,.32,e,0,0,0),l(2.5,1,2.7,.4,e,-.7,.85,0),l(2.55,.46,2.76,.2,s,-.7,.95,0),l(2.3,.22,2.5,.1,e,-.7,1.4,0),l(.45,.2,2,.08,o,-.4,1.6,0),l(1.8,.2,2.5,.08,n,-2.1,.5,0),l(.5,.5,3.3,.2,r,3.05,-.25,0),l(.5,.5,3.3,.2,r,-3.05,-.25,0),l(.2,.28,.7,.08,this.headMat,2.88,.2,1),l(.2,.28,.7,.08,this.headMat,2.88,.2,-1),l(.2,.26,.6,.08,c,-2.92,.2,1),l(.2,.26,.6,.08,c,-2.92,.2,-1);const h=xo,u=is/2,f=[new St(.5,-u),new St(h-.25,-u)];for(let b=1;b<=5;b++){const w=b/5*(Math.PI/2);f.push(new St(h-.25+Math.sin(w)*.25,-u+.25-Math.cos(w)*.25))}for(let b=0;b<=5;b++){const w=b/5*(Math.PI/2);f.push(new St(h-0-(1-Math.cos(w))*.25,u-.25+Math.sin(w)*.25))}f.push(new St(.5,u));const d=[new Hc(f,28).rotateX(Math.PI/2).toNonIndexed()],v=16;for(let b=0;b<v;b++)for(const w of[-1,1]){const A=(b+(w>0?.5:0))/v*Math.PI*2,y=new ce(.26,.5,u*.92).toNonIndexed();y.translate(h+.04,0,w*u*.5).rotateZ(A),d.push(y)}const x=lo(d),m=new Ce(.85,.85,is+.08,20).rotateX(Math.PI/2),p=[new Ce(.34,.34,is+.2,12).rotateX(Math.PI/2).toNonIndexed()];for(let b=0;b<5;b++)for(const w of[-1,1]){const A=b/5*Math.PI*2,y=new Ce(.09,.09,.14,6).rotateX(Math.PI/2).toNonIndexed();y.translate(Math.cos(A)*.58,Math.sin(A)*.58,w*(u+.04)),p.push(y);const S=new ce(.62,.13,.05).toNonIndexed();S.translate(.5,0,0).rotateZ(A).translate(0,0,w*(u+.05)),p.push(S)}const M=lo(p),g=new Ce(.24,.24,1,10),_=new Ce(.11,.11,1,8),E=new Ce(.13,.13,1,8);for(const[b,w]of[[1,-1],[1,1],[-1,-1],[-1,1]]){const A=new we,y=new we,S=[[x,a],[m,o],[M,r]];for(const[N,T]of S){const D=new Xt(N,T);D.castShadow=!0,y.add(D)}A.add(y),this.model.add(A);const R=(N,T)=>{const D=new Xt(N,T);return D.castShadow=!0,this.model.add(D),D};this.wheels.push({mount:new U(b*pg,sa,w*xh),front:b>0,len:yi*.6,grounded:!1,spin:0,slip:0,hub:new U,contact:new U,normal:new U(0,1,0),wet:0,pivot:A,roll:y,spring:R(g,o),rod:R(_,r),arm:R(E,n),sign:w})}}}const Lg=new U(0,1,0);function ca(i,t,e){const n=Ei.copy(e).sub(t),s=n.length();i.position.copy(t).addScaledVector(n,.5),i.quaternion.setFromUnitVectors(Lg,n.divideScalar(Math.max(s,1e-6))),i.scale.set(1,Math.max(s,.01),1)}const Bu=-2,Ig=[-.85,-.45,0,.45,.85],Dg=[-1,0,1];function Ug(i,t,e,n,s){let r=-1e9;const o=is/2*oe*.85;for(const a of Ig){const c=a*an,l=Math.sqrt(an*an-c*c);for(const h of Dg){const u=t+n.x*c+s.x*h*o,f=e+n.z*c+s.z*h*o,d=Math.max(i.heightAt(u,f),i.stepHeightAt(u,f))+l;d>r&&(r=d)}}return r}function Ng(i,t,e,n,s,r){const o=c=>t.y+e.y*c-Ug(i,t.x+e.x*c,t.z+e.z*c,s,r);if(o(0)<=0)return t.y<=Math.max(i.heightAt(t.x,t.z),i.stepHeightAt(t.x,t.z))?Bu:0;let a=0;for(let c=.2;;c+=.2){const l=Math.min(c,n);if(o(l)<=0){let h=a,u=l;for(let f=0;f<6;f++){const d=(h+u)/2;o(d)<=0?u=d:h=d}return u}if(l>=n)return-1;a=l}}const Gt=7.5,ku=12,Qt=(i,t,e)=>{const n=Math.min(1,Math.max(0,(e-i)/(t-i)));return n*n*(3-2*n)},Or=(i,t,e)=>Math.exp(-(((i-t)/e)**2));function rr(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}class Ii{constructor(t){this.pts=t,t.forEach((e,n)=>{const s=this.key(Math.floor(e.x/this.cs),Math.floor(e.z/this.cs)),r=this.cells.get(s);r?r.push(n):this.cells.set(s,[n])})}cells=new Map;cs=8;key(t,e){return(t+1e3)*4096+(e+1e3)}query(t,e){const n=Math.floor(t/this.cs),s=Math.floor(e/this.cs);let r=1/0,o=0;for(let a=0;a<80;a++){for(let c=-a;c<=a;c++)for(let l=-a;l<=a;l++){if(Math.abs(c)!==a&&Math.abs(l)!==a)continue;const h=this.cells.get(this.key(n+c,s+l));if(h)for(const u of h){const f=(this.pts[u].x-t)**2+(this.pts[u].z-e)**2;f<r&&(r=f,o=u)}}if(r<=(a*this.cs)**2)break}return{i:o,d2:r}}}function Eh(i,t,e,n,s){const r=s*s,o=r*s;return .5*(2*t+(-i+e)*s+(2*i-5*t+4*e-n)*r+(-i+3*t-3*e+n)*o)}function cs(i,t,e=!0){const n=i.length,s=[],r=e?n:n-1;for(let f=0;f<r;f++){const d=i[e?(f+n-1)%n:Math.max(0,f-1)],v=i[f],x=i[(f+1)%n],m=i[e?(f+2)%n:Math.min(n-1,f+2)];for(let p=0;p<40;p++){const M=p/40;s.push({x:Eh(d[0],v[0],x[0],m[0],M),z:Eh(d[1],v[1],x[1],m[1],M)})}}e||s.push({x:i[n-1][0],z:i[n-1][1]});const o=[0],a=e?s.length:s.length-1;for(let f=1;f<=a;f++){const d=s[f-1],v=s[f%s.length];o.push(o[f-1]+Math.hypot(v.x-d.x,v.z-d.z))}const c=o[o.length-1],l=[];let h=0;const u=e?t:t-1;for(let f=0;f<=(e?t-1:u);f++){const d=f/u*c;for(;h<o.length-2&&o[h+1]<d;)h++;const v=(d-o[h])/Math.max(1e-9,o[h+1]-o[h]),x=s[h],m=s[(h+1)%s.length];l.push({x:x.x+(m.x-x.x)*v,z:x.z+(m.z-x.z)*v})}return l}function Hu(i,t){const e=[0];for(let o=1;o<=i.length;o++)e.push(e[o-1]+Math.hypot(i[o%i.length].x-i[o-1].x,i[o%i.length].z-i[o-1].z));const n=e[e.length-1],s=[];let r=0;for(let o=0;o<t;o++){const a=o/t*n;for(;e[r+1]<a;)r++;const c=(a-e[r])/Math.max(1e-9,e[r+1]-e[r]),l=i[r],h=i[(r+1)%i.length];s.push({x:l.x+(h.x-l.x)*c,z:l.z+(h.z-l.z)*c})}return s}const zg=28;class Fg{constructor(t,e,n,s,r,o){this.track=t,this.car=e,this.baseLane=n,this.skill=s,this.groundAt=r,this.gripAt=o,this.lane=n,this.per=t.length/t.pts.length,this.idx=this.nearest(e.pos.x,e.pos.z,!0)}steer=0;throttle=0;brake=0;nitro=!1;handbrake=!1;idx;teleports=0;laneOverride=null;lane;stuckT=0;flipT=0;reverseT=0;stuckCount=0;per;nearest(t,e,n){const s=this.track.pts.length,r=this.track.pts;let o=1/0,a=0;const c=n?Math.floor(s/2):Math.round(60/this.per),l=n?0:this.idx;for(let h=n?0:-c;h<=(n?s-1:c);h++){const u=n?h:((l+h)%s+s)%s,f=(r[u].x-t)**2+(r[u].z-e)**2;f<o&&(o=f,a=u)}return a}control(t,e,n){const s=this.car,r=this.track,o=r.pts.length;if(!n)return this.reset(),Fu;this.idx=this.nearest(s.pos.x,s.pos.z,!1);const a=s.quat,c=1-2*(a.y*a.y+a.z*a.z),l=2*(a.x*a.z-a.w*a.y),h=1-2*(a.x*a.x+a.z*a.z),u=s.speed;this.flipT=h<.35?this.flipT+t:0,this.flipT>1&&(s.bounce(),this.flipT=.3),this.stuckT=u<1.2&&h>.35?this.stuckT+t:Math.max(0,this.stuckT-t),this.reverseT<=0&&this.stuckT>2.2&&(this.reverseT=1.3,this.stuckT=1,++this.stuckCount>=3&&this.putBack());let f=0;for(const R of e){if(R===s)continue;const N=R.pos.x-s.pos.x,T=R.pos.z-s.pos.z,D=N*c+T*l,I=-N*l+T*c;D>0&&D<11&&Math.abs(I)<2.6&&(f=I>0?-1:1)}this.lane+=((this.laneOverride??this.baseLane)+f*3.4-this.lane)*Math.min(1,t*2.2);const d=Math.max(2,Math.round((5+.5*Math.min(u,24))/this.per)),v=(this.idx+d)%o,x=r.tan[v],m=Math.max(-5,Math.min(5,this.lane)),p=r.pts[v].x-x.z*m-s.pos.x,M=r.pts[v].z+x.x*m-s.pos.z,g=Math.atan2(c*M-l*p,c*p+l*M);this.steer=Math.max(-1,Math.min(1,g*1.25));let _=!1;for(const R of r.jumps){const N=((R.i0-this.idx)%o+o)%o*this.per;N<40&&(_=!0),N<=2.4&&N>-1&&s.forwardSpeed>9&&s.bounce()}const E=r.tan[this.idx],b=r.tan[(this.idx+Math.round(26/this.per))%o],w=r.tan[(this.idx+Math.round(12/this.per))%o],A=Math.max(Math.abs(Math.atan2(E.x*b.z-E.z*b.x,E.x*b.x+E.z*b.z)),Math.abs(Math.atan2(E.x*w.z-E.z*w.x,E.x*w.x+E.z*w.z))*1.4);let y=Math.max(9,zg*this.skill*(1-.85*Qt(.12,1.1,A)));if(this.gripAt){const R=r.pts[(this.idx+Math.round(16/this.per))%o],N=Math.min(this.gripAt(s.pos.x,s.pos.z),this.gripAt(R.x,R.z));y*=Math.min(1,Math.max(.42,Math.sqrt(N/.7)))}_&&(y=Math.max(y,19));const S=s.forwardSpeed;return this.throttle=S<y?Math.min(1,.3+(y-S)/2.5):0,this.brake=S>y+2.5?Math.min(1,(S-y)/6):0,this.nitro=A<.12&&s.nitro>.5&&this.skill>.9,this.handbrake=!1,Math.abs(g)>1.3&&(this.throttle=Math.min(this.throttle,.5)),this.reverseT>0&&(this.reverseT-=t,this.throttle=0,this.brake=1,this.steer=-this.steer,this.nitro=!1),this}reset(){this.stuckT=this.flipT=this.reverseT=0}putBack(){const t=this.track,e=t.pts.length;let n=this.idx;for(const o of t.jumps)((n-o.i0+12)%e+e)%e<=((o.i1-o.i0)%e+e)%e+24&&(n=(o.i1+Math.round(8/this.per))%e);const s=t.pts[n],r=t.tan[n];this.car.reset(s.x-r.z*this.baseLane,this.groundAt(s.x,s.z)+3,s.z+r.x*this.baseLane,eo.headingOf(r.x,r.z)),this.idx=n,this.stuckCount=0,this.teleports++}}function Og(i){let t=0;const e=1.1,n=.95,s=3500,r=150,o=new U,a=new U,c=new U,l=new U,h=new U;for(let u=0;u<i.length;u++)for(let f=u+1;f<i.length;f++){const d=i[u],v=i[f];if(!(Math.hypot(d.pos.x-v.pos.x,d.pos.z-v.pos.z)>7||Math.abs(d.pos.y-v.pos.y)>2.4))for(const x of[-1,1])for(const m of[-1,1]){o.set(1,0,0).applyQuaternion(d.quat).setY(0).normalize(),a.copy(d.pos).addScaledVector(o,x*n),o.set(1,0,0).applyQuaternion(v.quat).setY(0).normalize(),c.copy(v.pos).addScaledVector(o,m*n),h.set(a.x-c.x,0,a.z-c.z);const p=h.length(),M=2*e-p;if(M<=0||p<1e-4)continue;h.divideScalar(p);const g=(d.vel.x-v.vel.x)*h.x+(d.vel.z-v.vel.z)*h.z,_=Math.max(0,s*M-r*g);l.copy(h).multiplyScalar(_),a.y=d.pos.y,t=Math.max(t,_),d.push(a,l),c.y=v.pos.y,v.push(c,l.negate())}}return t}const Bg=1.2,kg=.75,Hg=i=>440*Math.pow(2,(i-69)/12),Oe=(i,t,e)=>Math.min(e,Math.max(t,i)),ni=[0,2,3,5,7,8,10],bh=[0,2,4,5,7,9,11],Th=[0,2,3,7,8],Ah=[0,2,4,7,9],qe=(i,t,e,n,s,r,o,a,c,l=1)=>({style:i,bpm:t,root:e,scale:n,prog:s,lead:r,swing:o,dark:a,chill:c,level:l}),Rh={oval:{day:qe("hard",142,57,ni,[0,0,5,6],"sawtooth",0,.2,0),evening:qe("hard",128,57,ni,[0,0,5,6],"sawtooth",.04,.55,.5)},eight:{day:qe("trance",138,62,ni,[0,5,2,6],"sawtooth",0,.15,0),evening:qe("trance",124,62,ni,[0,5,2,6],"sawtooth",.03,.55,.5)},city:{day:qe("euro",130,60,bh,[0,4,5,3],"square",.05,.2,0),evening:qe("euro",116,60,bh,[0,4,5,3],"square",.08,.55,.5)},tampere:{day:qe("euro",126,62,ni,[0,3,5,6],"sawtooth",.05,.25,.1),evening:qe("euro",112,62,ni,[0,3,5,6],"sawtooth",.08,.6,.55)},tokyo:{day:qe("trance",134,64,Th,[0,3,2,4],"sawtooth",0,.1,0),evening:qe("trance",120,64,Th,[0,3,2,4],"sawtooth",.03,.5,.45)},vuoristo:{day:qe("trance",130,59,ni,[0,6,3,5],"sawtooth",.04,.3,.1),evening:qe("trance",116,59,ni,[0,6,3,5],"sawtooth",.06,.65,.55)},island:{day:qe("tropical",118,60,Ah,[0,2,3,1],"triangle",.14,.15,.2),evening:qe("tropical",102,57,Ah,[0,2,3,1],"triangle",.18,.5,.6)}};class Vg{ctx;master;sfx;musicBus;noise;engines=[];v8Curve;mode="all";squeal;wade;charge;nitroV;missileV;droneV;theme=null;themeKey="";nextStep=0;step=0;rngState=1;motif=[];mDrum;mBass;mPad;mLead;echo;constructor(){try{const t=localStorage.getItem("offroad-sound");(t==="all"||t==="sfx"||t==="off")&&(this.mode=t)}catch{}}get running(){return!!this.ctx&&this.ctx.state==="running"}unlock(){if(!this.ctx){const t=window.AudioContext??window.webkitAudioContext;if(!t)return;this.ctx=new t;const e=this.ctx,n=e.createDynamicsCompressor();n.threshold.value=-14,n.knee.value=18,n.ratio.value=5;const s=e.createDynamicsCompressor();s.threshold.value=-4,s.knee.value=6,s.ratio.value=14,s.attack.value=.003,this.master=e.createGain(),this.sfx=e.createGain(),this.musicBus=e.createGain(),this.sfx.connect(n),n.connect(this.master);const r=e.createDynamicsCompressor();r.threshold.value=-20,r.knee.value=10,r.ratio.value=4,r.attack.value=.004,r.release.value=.14,this.mDrum=e.createGain(),this.mBass=e.createGain(),this.mPad=e.createGain(),this.mLead=e.createGain(),this.echo=e.createDelay(2);const o=e.createGain();o.gain.value=.38;const a=e.createGain();a.gain.value=.42,this.mLead.connect(r),this.mLead.connect(this.echo),this.echo.connect(o),o.connect(this.echo),this.echo.connect(a),a.connect(r),this.mDrum.connect(r),this.mBass.connect(r),this.mPad.connect(r),r.connect(this.musicBus),this.musicBus.connect(this.master),this.master.connect(s),s.connect(e.destination),this.applyMode(),this.noise=e.createBuffer(1,e.sampleRate*2,e.sampleRate);const c=this.noise.getChannelData(0);for(let l=0;l<c.length;l++)c[l]=Math.random()*2-1;this.buildContinuous()}this.ctx.state!=="running"&&this.ctx.resume().catch(()=>{})}pause(){this.ctx?.suspend().catch(()=>{})}setMode(t){this.mode=t;try{localStorage.setItem("offroad-sound",t)}catch{}this.applyMode()}cycleMode(){const t=this.mode==="all"?"sfx":this.mode==="sfx"?"off":"all";return this.setMode(t),t}applyMode(){if(!this.ctx)return;const t=this.ctx.currentTime;this.master.gain.setTargetAtTime(this.mode==="off"?0:.85,t,.05),this.sfx.gain.setTargetAtTime(kg,t,.05),this.musicBus.gain.setTargetAtTime(this.mode==="all"?Bg:0,t,.1)}noiseSrc(t=!0){const e=this.ctx.createBufferSource();return e.buffer=this.noise,e.loop=t,e.loopStart=Math.random()*1.5,e}panner(t){const e=this.ctx.createStereoPanner();return e.pan.value=Oe(t,-1,1),e}burst(t,e,n,s,r,o=0,a=.8,c=0){if(!this.running||r<.002)return;const l=this.ctx,h=l.currentTime+c,u=this.noiseSrc(!0),f=l.createBiquadFilter();f.type=e,f.Q.value=a,f.frequency.setValueAtTime(n,h),f.frequency.exponentialRampToValueAtTime(Math.max(20,s),h+t);const d=l.createGain();d.gain.setValueAtTime(1e-4,h),d.gain.exponentialRampToValueAtTime(r,h+Math.min(.02,t*.2)),d.gain.exponentialRampToValueAtTime(1e-4,h+t),u.connect(f),f.connect(d),d.connect(this.panner(o)).connect(this.sfx),u.start(h,Math.random()*1.5,t+.05)}tone(t,e,n,s,r,o=0,a=0,c=.005){if(!this.running||r<.002)return;const l=this.ctx,h=l.currentTime+a,u=l.createOscillator();u.type=t,u.frequency.setValueAtTime(e,h),n!==e&&u.frequency.exponentialRampToValueAtTime(Math.max(20,n),h+s);const f=l.createGain();f.gain.setValueAtTime(1e-4,h),f.gain.exponentialRampToValueAtTime(r,h+c),f.gain.exponentialRampToValueAtTime(1e-4,h+s),u.connect(f),f.connect(this.panner(o)).connect(this.sfx),u.start(h),u.stop(h+s+.05)}buildContinuous(){const t=this.ctx,e=t.createOscillator();e.type="sawtooth",e.frequency.value=1250;const n=t.createBiquadFilter();n.type="bandpass",n.frequency.value=1300,n.Q.value=9;const s=t.createGain();s.gain.value=0,e.connect(n),n.connect(s),s.connect(this.sfx),e.start(),this.squeal={filt:n,gain:s,osc:e};const r=this.noiseSrc(),o=t.createBiquadFilter();o.type="lowpass",o.frequency.value=1400;const a=t.createGain();a.gain.value=0,r.connect(o),o.connect(a),a.connect(this.sfx),r.start(),this.wade={filt:o,gain:a};const c=t.createOscillator();c.type="sawtooth",c.frequency.value=180;const l=t.createOscillator();l.type="square",l.frequency.value=182;const h=t.createBiquadFilter();h.type="lowpass",h.frequency.value=900;const u=t.createGain();u.gain.value=0,c.connect(h),l.connect(h),h.connect(u),u.connect(this.sfx),c.start(),l.start(),this.charge={osc:c,osc2:l,gain:u};const f=this.noiseSrc(),d=t.createBiquadFilter();d.type="bandpass",d.frequency.value=700,d.Q.value=.6;const v=t.createGain();v.gain.value=0,f.connect(d),d.connect(v),v.connect(this.sfx),f.start(),this.nitroV={filt:d,gain:v};const x=this.noiseSrc(),m=t.createBiquadFilter();m.type="bandpass",m.frequency.value=2200,m.Q.value=1.4;const p=t.createOscillator();p.type="sawtooth",p.frequency.value=130;const M=t.createGain();M.gain.value=0;const g=this.panner(0);x.connect(m),p.connect(m),m.connect(M),M.connect(g),g.connect(this.sfx),x.start(),p.start(),this.missileV={filt:m,gain:M,osc:p,pan:g};const _=t.createOscillator();_.type="sawtooth",_.frequency.value=118;const E=t.createOscillator();E.type="square",E.frequency.value=121;const b=t.createBiquadFilter();b.type="lowpass",b.frequency.value=700;const w=t.createGain();w.gain.value=0;const A=this.panner(0);_.connect(b),E.connect(b),b.connect(w),w.connect(A),A.connect(this.sfx),_.start(),E.start(),this.droneV={osc:_,osc2:E,gain:w,pan:A}}ensureEngines(t){const e=this.ctx;if(!this.v8Curve){this.v8Curve=new Float32Array(512);for(let n=0;n<512;n++){const s=n/511*2-1;this.v8Curve[n]=Math.tanh(2.6*s)*.85+.15*Math.tanh(7*s)}}for(;this.engines.length<t;){const n=(x,m)=>{const p=e.createOscillator();p.type=x;const M=e.createGain();return M.gain.value=m,p.connect(M),{o:p,g:M}},s=[n("sawtooth",.5),n("sawtooth",.44),n("square",.3),n("sawtooth",.14)],r=e.createGain();s.forEach(x=>x.g.connect(r));const o=e.createWaveShaper();o.curve=this.v8Curve,o.oversample="2x";const a=e.createBiquadFilter();a.type="peaking",a.frequency.value=140,a.Q.value=1.3,a.gain.value=9;const c=e.createBiquadFilter();c.type="peaking",c.frequency.value=360,c.Q.value=1.6,c.gain.value=6;const l=e.createBiquadFilter();l.type="lowpass",l.Q.value=1.4;const h=e.createGain();h.gain.value=.75;const u=e.createOscillator();u.type="triangle";const f=e.createGain();f.gain.value=.25;const d=e.createGain();d.gain.value=0;const v=this.panner(0);r.connect(o),o.connect(a),a.connect(c),c.connect(l),l.connect(h),h.connect(d),d.connect(v),v.connect(this.sfx),u.connect(f),f.connect(h.gain),s.forEach(x=>x.o.start()),u.start(),this.engines.push({osc:s.map(x=>x.o),filter:l,trem:h,lfo:u,lfoGain:f,lvl:d,pan:v,lastThrottle:0})}}updateEngines(t){if(!this.ctx)return;this.ensureEngines(t.length);const e=this.ctx.currentTime,n=[7,13,20,28,40];t.forEach((s,r)=>{const o=this.engines[r];let a=0;for(;a<n.length-1&&s.speed>n[a];)a++;const c=a===0?0:n[a-1]*.62,l=Oe(.28+.72*((s.speed-c)/(n[a]-c)),.2,1)+s.throttle*.07,h=(58+330*((l-.2)/.87))*(s.nitro?1.12:1);if(o.osc[0].frequency.setTargetAtTime(h,e,.035),o.osc[1].frequency.setTargetAtTime(h*.5,e,.035),o.osc[2].frequency.setTargetAtTime(h*.25,e,.035),o.osc[3].frequency.setTargetAtTime(h*2.01,e,.035),o.filter.frequency.setTargetAtTime(380+2300*(.2+.8*s.throttle)*(.45+.55*l)+(s.nitro?900:0),e,.05),o.lfo.frequency.setTargetAtTime(h*.25,e,.08),o.lfoGain.gain.setTargetAtTime((.42-.22*l)*(1-.35*s.throttle),e,.1),o.lvl.gain.setTargetAtTime(s.gain*(.12+.13*s.throttle+.04*l),e,.05),o.pan.pan.setTargetAtTime(Oe(s.pan,-1,1),e,.05),o.lastThrottle>.7&&s.throttle<.2&&l>.55&&s.gain>.25){const u=3+Math.floor(Math.random()*3);for(let f=0;f<u;f++){const d=f*.06+Math.random()*.05;this.burst(.07,"bandpass",900+Math.random()*500,220,.3*s.gain,s.pan,1.2,d),this.tone("sine",120,55,.09,.22*s.gain,s.pan,d)}}o.lastThrottle=s.throttle})}silenceEngines(){if(!this.ctx)return;const t=this.ctx.currentTime;for(const e of this.engines)e.lvl.gain.setTargetAtTime(0,t,.08)}updateRoll(t,e,n,s,r){if(!this.ctx||!this.squeal||!this.wade)return;const o=this.ctx.currentTime,a=t==="hard"&&r?Oe((n-2.5)/7,0,1)*Oe(e/10,0,1):0;this.squeal.gain.gain.setTargetAtTime(a*.07,o,.05),this.squeal.filt.frequency.setTargetAtTime(1100+e*14,o,.1),this.wade.gain.gain.setTargetAtTime(s*Oe(e/14,.25,1)*.3,o,.1),this.wade.filt.frequency.setTargetAtTime(900+e*30,o,.1)}updateCharge(t){if(!this.ctx||!this.charge)return;const e=this.ctx.currentTime,n=160+520*t;this.charge.osc.frequency.setTargetAtTime(n,e,.05),this.charge.osc2.frequency.setTargetAtTime(n*1.012,e,.05),this.charge.gain.gain.setTargetAtTime(t>.02?.03+.07*t:0,e,.04)}updateNitro(t){if(!this.ctx||!this.nitroV)return;const e=this.ctx.currentTime;this.nitroV.gain.gain.setTargetAtTime(t?.2:0,e,t?.04:.12),this.nitroV.filt.frequency.setTargetAtTime(t?1400:600,e,.2)}updateMissile(t){if(!this.ctx||!this.missileV)return;const e=this.ctx.currentTime;this.missileV.gain.gain.setTargetAtTime(t?t.gain*.22:0,e,.05),t&&(this.missileV.pan.pan.setTargetAtTime(Oe(t.pan,-1,1),e,.05),this.missileV.osc.frequency.setTargetAtTime(110+t.speed*1.2,e,.08))}updateDrone(t){if(!this.ctx||!this.droneV)return;const e=this.ctx.currentTime;this.droneV.gain.gain.setTargetAtTime(t?t.gain*.07:0,e,.12),t&&this.droneV.pan.pan.setTargetAtTime(Oe(t.pan,-1,1),e,.1)}splash(t,e,n){this.burst(.35+.35*t,"bandpass",2600,500,(.18+.3*t)*e,n,.6),this.burst(.5+.3*t,"lowpass",900,180,(.1+.2*t)*e,n)}thump(t,e,n){const s=Oe(t,0,1);this.tone("sine",130,42,.22+.15*s,(.15+.5*s)*e,n),this.burst(.12+.1*s,"lowpass",1400,260,(.12+.25*s)*e,n)}rumble(t,e,n,s,r,o,a,c=.9){if(!this.running||s<.002)return;const l=this.ctx,h=l.currentTime+o,u=this.noiseSrc(!0),f=l.createBiquadFilter();f.type="lowpass",f.Q.value=c,f.frequency.setValueAtTime(e,h),f.frequency.exponentialRampToValueAtTime(Math.max(25,n),h+t);const d=l.createGain();d.gain.setValueAtTime(1e-4,h),d.gain.linearRampToValueAtTime(s,h+.04);let v=.04;const x=t*.9;for(let p=0;p<a;p++){const M=(x-v)/(a-p)*(.6+.8*this.rnd()),g=h+v+M*.5,_=h+v+M,E=s*Math.pow(1-(p+1)/(a+1.5),1.35)*(.5+.5*this.rnd());d.gain.linearRampToValueAtTime(Math.max(1e-4,E*.3),g),d.gain.linearRampToValueAtTime(Math.max(1e-4,E),_),v+=M}d.gain.linearRampToValueAtTime(1e-4,h+t);const m=this.panner(r);m.pan.setValueAtTime(Oe(r,-1,1),h),m.pan.linearRampToValueAtTime(Oe(r+(this.rnd()-.5)*.7,-1,1),h+t),u.connect(f),f.connect(d),d.connect(m),m.connect(this.sfx),u.start(h,Math.random()*1.2),u.stop(h+t+.1)}crackle(t,e,n){if(!this.running)return;const s=this.ctx,r=s.currentTime,o=this.noiseSrc(!0),a=s.createBiquadFilter();a.type="bandpass",a.frequency.value=2200,a.Q.value=.5;const c=s.createGain();c.gain.setValueAtTime(1e-4,r);for(let l=0;l<t;l+=.012+.02*this.rnd()){const h=Math.pow(1-l/t,1.2);c.gain.setValueAtTime(e*h*(.15+.85*this.rnd()),r+l),c.gain.linearRampToValueAtTime(1e-4,r+l+.01)}c.gain.setValueAtTime(1e-4,r+t),o.connect(a),a.connect(c),c.connect(this.panner(n)).connect(this.sfx),o.start(r,Math.random()*1.2),o.stop(r+t+.1)}explosion(t,e,n){if(!this.running)return;const s=e*(.6+.6*t),r=t>1,o=1.8+3*Math.min(t,1.7)/1.7;this.burst(.05,"highpass",1200,6e3,.55*s,n,.5),this.burst(.22,"bandpass",3200,700,.9*s,n,.6),this.crackle(.45+.25*t,.5*s,n),this.tone("sine",95,28,.9+.7*t,1.25*s,n,0,.003);const a=this.ctx,c=a.currentTime,l=a.createOscillator(),h=a.createWaveShaper(),u=a.createGain(),f=new Float32Array(256);for(let d=0;d<256;d++){const v=d/255*2-1;f[d]=Math.tanh(3*v)}h.curve=f,l.type="sine",l.frequency.setValueAtTime(160,c),l.frequency.exponentialRampToValueAtTime(42,c+.45+.3*t),u.gain.setValueAtTime(1e-4,c),u.gain.exponentialRampToValueAtTime(.65*s,c+.005),u.gain.exponentialRampToValueAtTime(1e-4,c+.55+.4*t),l.connect(h),h.connect(u),u.connect(this.panner(n)).connect(this.sfx),l.start(c),l.stop(c+1.2+.5*t),this.rumble(o,900,60,1.8*s,n,.02,r?7:4),this.rumble(o*.8,380,40,1.3*s,n,.1,r?6:3,1.2),this.rumble(o*.7,1600,120,.5*s,n,.06,r?8:4,.6),this.rumble(o*.9,420,45,1*s,Oe(n+.4,-1,1),.55,r?5:3),r&&(this.tone("sine",58,21,1.9,.95*s,n,.3,.02),this.rumble(o*.7,520,45,.9*s,Oe(n-.4,-1,1),1.1,4))}hammerSwing(t,e){this.burst(.62,"bandpass",250,2600,.55*t,e,.8),this.tone("sawtooth",70,420,.6,.18*t,e,0,.3),this.tone("square",900,2400,.55,.05*t,e,0,.35)}hammerSlam(t,e){if(this.running){this.burst(.09,"highpass",800,7e3,.9*t,e,.5),this.tone("sawtooth",3200,90,.35,.22*t,e,0,.002),this.tone("square",1800,140,.5,.12*t,e,.02,.002),this.explosion(2.6,t*1.1,e);for(const[n,s,r]of[[1,.6,2.6],[2.31,.38,2.1],[3.9,.3,1.6],[6.2,.2,1.1],[9.1,.12,.7]])this.tone("sine",94*n,94*n*.995,r,s*.7*t,e,.03,.004)}}launch(t,e){this.tone("sine",90,220,.18,.35*t,e),this.burst(.3,"bandpass",400,2200,.25*t,e,.8)}missileFire(t,e){this.burst(.5,"bandpass",700,3500,.35*t,e,1.1),this.tone("sawtooth",220,90,.25,.12*t,e)}pickup(t,e,n=!0){const s=n?660:520;this.tone("triangle",s,s,.12,.28*t,e),this.tone("triangle",s*1.5,s*1.5,.22,.28*t,e,.09),this.tone("sine",s*3,s*3,.3,.1*t,e,.09)}dropBlip(t,e){this.tone("square",880,440,.12,.08*t,e),this.burst(.35,"bandpass",1800,500,.08*t,e,1)}boing(){this.tone("sine",180,520,.18,.3,0),this.tone("sine",520,160,.3,.22,0,.17)}beep(t){t<3?this.tone("square",440,440,.18,.2,0):(this.tone("square",880,880,.45,.22,0),this.tone("square",1320,1320,.45,.12,0))}tick(){this.tone("triangle",1100,1100,.07,.12,0)}blip(){this.tone("square",760,1100,.06,.1,0)}jingle(t=!0){(t?[523,659,784,1047]:[392,349,330]).forEach((n,s)=>this.tone("triangle",n,n,.22,.25,0,s*.11)),t&&this.tone("sine",1047*2,1047*2,.5,.08,0,.4)}hit(t,e,n){if(!this.running)return;const s=Oe(t,0,1),r=e*(.55+.7*s);this.tone("sine",150,48,.2+.2*s,.7*r,n),this.burst(.1,"lowpass",2600,320,.7*r,n,.9);const o=5+Math.round(9*s);let a=.015;for(let c=0;c<o;c++){const l=Math.pow(1-c/(o+2),1.4),h=700+Math.random()*3800;if(this.burst(.05+.1*Math.random(),"bandpass",h,h*(.5+.4*Math.random()),(.4+.5*Math.random())*r*l,n+(Math.random()-.5)*.3,7+Math.random()*9,a),Math.random()<.7){const u=260+Math.random()*900;for(const[f,d]of[[1,.5],[2.76,.35],[5.4,.2]])this.tone("square",u*f,u*f*(.96+.06*Math.random()),.07+.16*Math.random(),.1*d*r*l,n,a,.002)}a+=.018+Math.random()*(.04+.05*c/o)}s>.25&&this.tone("sawtooth",1500+Math.random()*900,380+Math.random()*200,.35+.45*s,.07*r,n,.05,.03),this.burst(.3+.3*s,"highpass",3200,1600,.16*r,n,.7,.18)}setTheme(t,e){const n=`${t}/${e}`;if(n===this.themeKey)return;this.themeKey=n;const s=Rh[t]??Rh.oval;this.theme=e==="evening"?s.evening:s.day,this.step=128,this.nextStep=0;let r=0;for(let o=0;o<t.length;o++)r=r*31+t.charCodeAt(o)|0;this.rngState=r>>>0||1,this.makeMotif(this.theme),this.ctx&&(this.echo.delayTime.value=60/this.theme.bpm*.75)}stopMusic(){this.theme=null,this.themeKey=""}rnd(){return this.rngState=Math.imul(this.rngState,1664525)+1013904223>>>0,this.rngState/4294967296}makeMotif(t){const e=t.style==="trance"?.78:t.style==="hard"?.6:t.style==="tropical"?.5:.62,n=[];let s=2;for(let r=0;r<16;r++){const o=r%4===0,a=r%4===2;if(!(o?this.rnd()<.9:a?this.rnd()<e:this.rnd()<e*.45)){n.push(-99);continue}s=Oe(s+Math.round((this.rnd()-.5)*4),0,6),o&&this.rnd()<.5&&(s=[0,2,4][Math.floor(this.rnd()*3)]),n.push(s)}this.motif=n}tickMusic(t){if(!this.running||!this.theme||this.mode!=="all")return;const e=this.ctx,n=this.theme,s=60/n.bpm/4;for(this.nextStep<e.currentTime&&(this.nextStep=e.currentTime+.05);this.nextStep<e.currentTime+.4;)this.playStep(this.step,this.nextStep+(this.step%2?n.swing*s:0),n,s,t),this.step++,this.nextStep+=s}voice(t,e,n,s,r,o,a={}){const c=this.ctx,l=c.createOscillator();l.type=t,l.frequency.value=Hg(e),a.det&&(l.detune.value=a.det);const h=c.createGain(),u=a.atk??.006;h.gain.setValueAtTime(1e-4,n),h.gain.exponentialRampToValueAtTime(r,n+u),h.gain.exponentialRampToValueAtTime(1e-4,n+s);let f=l;if(a.cut){const d=c.createBiquadFilter();d.type="lowpass",d.Q.value=a.q??1,d.frequency.setValueAtTime(a.cut0??a.cut,n),a.cut0&&d.frequency.exponentialRampToValueAtTime(Math.max(60,a.cut),n+s*.9),l.connect(d),f=d}f.connect(h),h.connect(o),l.start(n),l.stop(n+s+.05)}kick(t,e,n){const s=this.ctx,r=s.createOscillator();r.frequency.setValueAtTime(n?200:170,t),r.frequency.exponentialRampToValueAtTime(44,t+.11);const o=s.createGain();o.gain.setValueAtTime(e,t),o.gain.exponentialRampToValueAtTime(1e-4,t+(n?.42:.32)),r.connect(o),o.connect(this.mDrum),r.start(t),r.stop(t+.46);const a=this.noiseSrc(!0),c=s.createBiquadFilter(),l=s.createGain();c.type="highpass",c.frequency.value=2500,l.gain.setValueAtTime(e*.28,t),l.gain.exponentialRampToValueAtTime(1e-4,t+.015),a.connect(c),c.connect(l),l.connect(this.mDrum),a.start(t,Math.random()),a.stop(t+.03)}clap(t,e){const n=this.ctx;for(let s=0;s<3;s++){const r=this.noiseSrc(!0),o=n.createBiquadFilter(),a=n.createGain();o.type="bandpass",o.frequency.value=1500,o.Q.value=.9;const c=t+s*.011;a.gain.setValueAtTime(e*(s===2?1:.6),c),a.gain.exponentialRampToValueAtTime(1e-4,c+(s===2?.17:.03)),r.connect(o),o.connect(a),a.connect(this.mDrum),r.start(c,Math.random()),r.stop(c+.2)}}hat(t,e,n){const s=this.ctx,r=this.noiseSrc(!0),o=s.createBiquadFilter(),a=s.createGain();o.type="highpass",o.frequency.value=7500;const c=n?.16:.04;a.gain.setValueAtTime(e,t),a.gain.exponentialRampToValueAtTime(1e-4,t+c),r.connect(o),o.connect(a),a.connect(this.mDrum),r.start(t,Math.random()),r.stop(t+c+.03)}playStep(t,e,n,s,r){const o=this.ctx,a=n.scale,c=a.length,l=(R,N=0)=>n.root+12*(Math.floor(R/c)+N)+a[(R%c+c)%c],h=t%16,u=Math.floor(t/16),f=u%16,d=n.prog[u%4],v=[d,d+2,d+4],x=1-.5*n.chill,m=1-.65*n.dark,p=n.level,M=n.style==="hard",g=f>=12&&f<=14,_=f===15,E=f<4,b=!g&&!(_&&h>=8),w=.85+.3*Oe(r,0,1);if(b&&h%4===0){this.kick(e,(M?1.1:.95)*p*w,M);for(const R of[this.mBass,this.mPad])R.gain.setValueAtTime(.28,e),R.gain.linearRampToValueAtTime(1,e+s*3.3)}if(!E&&!g&&(h===4||h===12)&&this.clap(e,.55*p*x*w),_){const R=h<4?4:h<8?2:(h<12,1);h%R===0&&this.clap(e,(.12+.05*h)*p)}if(g||(h%2===0&&h%4!==2&&this.hat(e,.1*p*x,!1),h%4===2&&this.hat(e,.2*p*x,!0),n.style!=="tropical"&&h%2===1&&this.hat(e,.045*p*x*(M?1.4:1),!1)),n.style==="tropical"&&h%4===3){const R=h%8===3?330:250;this.voice("sine",12*Math.log2(R/440)+69,e,.12,.3*p,this.mDrum)}if(!g&&!_&&f>=1){let R=!1,N=!1,T=0;if(n.style==="hard"?(R=h%4!==0||h===0,R=h%4!==0,N=h%4===2,T=h%8===6?1:0):n.style==="trance"?(R=h%4!==0&&h!==15,N=h%4===2,T=h%8===7?1:0):n.style==="euro"?(R=h%4===2||h===15,N=h%8===2,T=h===15?1:0):(R=h%8===0||h%8===3||h%8===6,N=h%8===0),R){const D=l(d,-2)+12*T+(n.style==="tropical"?12:0),I=(N?3800:2400)*m*(.7+.3*Math.sin(u*.8));n.style==="tropical"?this.voice("sine",D,e,s*3.2,.7*p,this.mBass):this.voice("sawtooth",D,e,s*(n.style==="euro"?1.8:.95),(N?.62:.46)*p*w,this.mBass,{cut:260*m+80,cut0:I,q:n.style==="hard"?12:7}),n.style!=="tropical"&&this.voice("sine",D,e,s*1.1,.36*p,this.mBass)}}const A=n.style==="euro"?[0,3,6,10,12]:n.style==="hard"?[2,6,10,14]:n.style==="trance"?[0,2,4,6,8,10,12,14]:[0,6,8,14];if(!E&&!_&&A.includes(h)&&!(g&&h%4!==0)){const R=n.style==="trance"?s*1.5:s*2.2;for(const N of v){const T=l(N,0);if(n.style==="tropical"){this.voice("triangle",T+12,e,s*2.5,.18*p*x,this.mPad);continue}for(const D of[-14,0,14])this.voice("sawtooth",T,e,R,.075*p*x,this.mPad,{cut:2600*m+500,cut0:5200*m+800,q:1.2,det:D,atk:.004})}}if(h===0&&(n.chill>.3||g||n.style==="tropical"))for(const R of v)this.voice("triangle",l(R,0),e,s*15,.17*p,this.mPad,{atk:.15,det:6}),this.voice("sine",l(R,1),e,s*15,.1*p,this.mPad,{atk:.2,det:-6});const y=f>=8||g,S=this.motif[h];if(y&&!_&&S!==-99){const R=d+S,N=l(R,1);n.style==="tropical"?(this.voice("triangle",N,e,s*2.2,.55*p*w,this.mLead,{atk:.003}),this.voice("sine",N+12,e,s*1,.18*p,this.mLead,{atk:.002})):(this.voice(n.lead,N,e,s*(n.style==="euro"?1.6:1.2),.3*p*w,this.mLead,{cut:1800*m+700,cut0:4200*m+900,q:2.5}),h%4===0&&this.voice(n.lead,N-12,e,s*1.4,.16*p,this.mLead,{cut:1400*m+400}))}if((n.style==="trance"||n.style==="hard")&&f>=4&&!_){const R=v[(h+(g?0:1))%3]+(h%8>=4?3:0);this.voice("square",l(R,2),e,s*.85,(g?.11:.06)*p*x,this.mLead,{cut:2200*m+600,cut0:5e3*m+800,q:3})}if(_&&h===0){const R=this.noiseSrc(!0),N=o.createBiquadFilter(),T=o.createGain();N.type="bandpass",N.Q.value=1.5,N.frequency.setValueAtTime(400,e),N.frequency.exponentialRampToValueAtTime(7e3,e+s*16),T.gain.setValueAtTime(1e-4,e),T.gain.exponentialRampToValueAtTime(.35*p,e+s*16),R.connect(N),N.connect(T),T.connect(this.mLead),R.start(e,Math.random()),R.stop(e+s*16+.05)}}}const Wn=20/3*_o,Ch=9.5,Gg=15*_o,Wg=_o/2,Br=10*_o,Xg=240,zs=110,la=.55;function kr(i){return i<=Wn?1:.85*Math.pow(Math.max(0,1-(i-Wn)/(Xg-Wn)),1.3)}function qc(){const i=new we,t=new de({color:9345197,emissive:1849978,emissiveIntensity:.55}),e=new de({color:4870758,emissive:1057354,emissiveIntensity:.4}),n=new de({color:15251248,emissive:5913600,emissiveIntensity:.5}),s=new de({color:5978658}),r=new Ge({color:10473727}),o=(a,c,l,h,u)=>{const f=new Xt(a,c);return f.position.set(l,h,u),f.castShadow=!0,i.add(f),f};o(new ce(8,7,14),t,0,3.5,0);for(const a of[-7.1,7.1])o(new ce(8.6,7.6,1.3),e,0,3.5,a);for(const a of[.4,6.6])o(new ce(8.4,.8,14.4),e,0,a,0);o(new ce(.4,4,9),r,4.05,3.5,0),o(new ce(.4,4,9),r,-4.05,3.5,0),o(new Ce(.95,.95,26,12),s,0,20,0);for(let a=0;a<6;a++)o(new Ce(1.15,1.15,.9,12),n,0,9+a*2.2,0);return o(new Ce(1.8,1.4,1.6,12),n,0,33.3,0),i.scale.setScalar(1.35),i}function qg(i,t,e){const n=[];for(let a=0;a<=16;a++){const c=a/16,l=(1-c)*5;n.push(new U(i+(a===16?0:(Math.random()-.5)*2*l*2),t+120*(1-c),e+(a===16?0:(Math.random()-.5)*2*l*2)))}const r=new Gc(new bu(n),48,.55,5,!1),o=new Xt(r,new Ge({color:15267071,transparent:!0,opacity:1,depthWrite:!1,blending:Xn}));return o.renderOrder=8,o}class Yg{constructor(t,e,n,s,r,o){this.dx=s,this.dz=r,this.owner=o,this.x=t,this.y=e,this.z=n;const a=()=>new Xt(new go(.93,1,96).rotateX(-Math.PI/2),new Ge({color:12575743,transparent:!0,opacity:0,depthWrite:!1,blending:Xn,side:je}));this.ring=a(),this.ring2=a(),this.ring2.material.color.setHex(16760928);for(const c of[this.ring,this.ring2])c.position.set(t,e+.4,n),c.visible=!1,c.renderOrder=7,this.group.add(c);this.hammer.rotation.y=-Math.atan2(r,s),this.group.add(this.hammer),this.place(0)}group=new we;x;y;z;t=0;impacted=!1;hammer=qc();ring;ring2;bolt=null;done=!1;get sinceImpact(){return this.t-la}place(t){const e=Math.min(1,t/la),n=e*e*e,s=1.15*(1-n),r=40*(1-n),o=78*(1-n);this.hammer.position.set(this.x-this.dx*r,this.y+o-1.1,this.z-this.dz*r),this.hammer.rotation.z=s}update(t){this.t+=t;let e=null;if(this.impacted||this.place(this.t),!this.impacted&&this.t>=la&&(this.impacted=!0,e="impact",this.hammer.position.set(this.x,this.y-1.1,this.z),this.hammer.rotation.z=0,this.bolt=qg(this.x,this.y,this.z),this.group.add(this.bolt),this.ring.visible=this.ring2.visible=!0),this.impacted){const n=this.sinceImpact,s=Math.min(1,n/.9),r=Math.min(1,Math.max(0,n-.12)/1.3);if(this.ring.scale.setScalar(Math.max(.01,Wn*(1-Math.pow(1-s,2)))),this.ring2.scale.setScalar(Math.max(.01,Wn*1.25*(1-Math.pow(1-r,2)))),this.ring.material.opacity=.9*(1-s),this.ring2.material.opacity=.6*(1-r),this.bolt){const o=this.bolt.material;o.opacity=n<.32?Math.sin(n*90)>-.3?1:.35:0,n>=.32&&(this.group.remove(this.bolt),this.bolt.geometry.dispose(),this.bolt=null)}if(n>1.1){const o=n-1.1;this.hammer.position.y=this.y-1.1+80*o*o,this.hammer.rotation.z=-.3*o}n>1.9&&(this.done=!0)}return e}dispose(){this.group.traverse(t=>{const e=t;e.isMesh&&e.geometry.dispose()})}}const jg=new Set([O.Dirt,O.Rut,O.SnowRoad,O.SnowRut,O.Ice,O.Asphalt,O.AsphaltLine,O.CheckA,O.CheckB,O.BarrierRed,O.BarrierWhite]),Zg=new Set([O.BarrierRed,O.BarrierWhite]),$g=new Set([O.Plank,O.RiverBed,O.Seabed,O.DeepSea]);class Kg{constructor(t,e,n,s,r,o){this.world=t,this.targets=n,this.hx=s,this.hz=r,this.clock=o;const{cw:a,ch:c,size:l}=t.chunkInfo;for(let x=0;x<a*c;x++){const m=(x%a+.5)*l*dt,p=(Math.floor(x/a)+.5)*l*dt;this.dist.set(x,Math.hypot(m-s,p-r)),this.order.push(x)}this.order.sort((x,m)=>this.dist.get(x)-this.dist.get(m)),this.near=new Ii(e.pts);const h=e.pts.length,u=e.length/h,f=Math.max(1,Math.round(15/u)),d=e.pts.map(x=>t.groundAt(x.x,x.z)),v=d.map((x,m)=>{let p=0;for(let M=-f;M<=f;M++)p+=d[(m+M+h)%h];return p/(2*f+1)});this.plateau=v[this.near.query(s,r).i],this.roadH=v.map(x=>x+(this.plateau-x)*.6),this.tunnels=(e.props?.tunnels??[]).map(x=>({cx:x.cx,cz:x.cz,dx:x.dx,dz:x.dz,hl:x.len/2+3,hw:x.wid/2+9})),this.loops=(e.props?.loops??[]).map(x=>({x:x.ex,z:x.ez})),this.decideObjects()}finished=!1;phase="edit";order=[];dist=new Map;cursor=0;changed=new Set;bakeRow=0;elapsed=0;meshList=[];meshCursor=0;near;roadH;plateau=0;pending=[];tunnels;loops;onDestroyed;inProtectedZone(t,e){for(const n of this.tunnels){const s=t-n.cx,r=e-n.cz;if(Math.abs(s*n.dx+r*n.dz)<n.hl&&Math.abs(-s*n.dz+r*n.dx)<n.hw)return!0}for(const n of this.loops)if(Math.hypot(t-n.x,e-n.z)<12)return!0;return!1}decideObjects(){const t=this.world,e=this.clock;for(const n of this.targets.trees){const s=Math.hypot(n.x-this.hx,n.z-this.hz),r=kr(s),o=n.y>t.groundAt(n.x,n.z)+1.4;if(Math.random()<.18+1.1*r||o&&r>.15){const a=n.x-this.hx,c=n.z-this.hz,l=Math.hypot(a,c)||1,h=e+s/zs+Math.random()*.25;n.fall={t0:h,dur:.75+Math.random()*.5,dx:s<1?1:a/l,dz:s<1?0:c/l,y1:0},this.pending.push({t:s/zs+.02,fn:()=>this.fellTree(n)})}}for(const n of this.targets.hide){const s=Math.hypot(n.x-this.hx,n.z-this.hz),r=kr(s),o=n.kind==="lamp"?.5:n.kind==="umbrella"?.35:.42;r>o*(.7+.6*Math.random())&&this.pending.push({t:s/zs,fn:()=>this.hideObj(n)})}for(const n of this.targets.garages){const s=Math.hypot(n.x-this.hx,n.z-this.hz);kr(s)>.55&&this.pending.push({t:s/zs,fn:()=>{n.obj.visible=!1,this.onDestroyed?.(n.x,this.world.groundAt(n.x,n.z)+3,n.z,!0)}})}}hideObj(t){if(t.hidden)return;t.hidden=!0;const e=new pe().makeScale(0,0,0);for(const n of t.meshes)n.setMatrixAt(t.index,e),n.instanceMatrix.needsUpdate=!0;this.onDestroyed?.(t.x,t.y,t.z,!1)}fellTree(t){const e=this.world,n=Math.floor(t.x*K),s=Math.floor(t.z*K);for(let r=-3;r<=3;r++)for(let o=-3;o<=3;o++){const a=n+o,c=s+r;if(a<0||c<0||a>=it||c>=gt)continue;const l=c*it+a;e.mats[l]===O.Trunk&&(e.heights[l]=e.ground[l],e.mats[l]=O.Crater)}}processChunk(t){const e=this.world,{cw:n,size:s}=e.chunkInfo,r=t%n*s,o=Math.floor(t/n)*s,a=Math.min(it,r+s),c=Math.min(gt,o+s),l=Wn,h=e.waterY;let u=!1;for(let f=o;f<c;f++)for(let d=r;d<a;d++){if(d<pt*K||f<pt*K||d>=it-pt*K||f>=gt-pt*K)continue;const v=f*it+d,x=e.mats[v];if($g.has(x))continue;const m=jg.has(x),p=(d+.5)*dt,M=(f+.5)*dt,g=e.heights[v]*dt,_=e.ground[v]*dt;if(h!==null&&g<=h+.25||this.inProtectedZone(p,M))continue;const E=Math.hypot(p-this.hx,M-this.hz),b=kr(E),w=Ze(d,f,77);let A=g,y=x;if(!m&&g>_+.06){const N=E<=l?1:b*(.55+.45*w);A=E<=l?_+Math.min(1.4,(g-_)*.35)*w:_+(g-_)*(1-N),(N>=.6||N>.35&&(x===O.Roof||x===O.RoofDark||x===O.WallA||x===O.WallB||x===O.WallC))&&(y=O.Rubble)}const S=E<=l?1:1-Qt(l,1.3*l,E);if(S>0){const N=this.near.query(p,M),T=this.roadH[N.i],D=E<=.8*l?0:Math.min(1,(E-.8*l)/(.2*l)),I=Wg*(E<=.8*l?1:.5*(1+Math.cos(Math.PI*D))),k=h!==null?Math.max(T-I,h+.35):T-I;A=A+(k+(Zg.has(x)?.7:0)-A)*S,!m&&(S>.8||S>.3&&w<S)&&(y=O.Rubble)}const R=Math.max(1,Math.round(A*K));R!==e.heights[v]&&(e.heights[v]=R,u=!0),y!==x&&(e.mats[v]=y,u=!0)}u&&this.changed.add(t)}update(t){if(this.finished)return;this.elapsed+=t;for(let n=this.pending.length-1;n>=0;n--)this.pending[n].t<=this.elapsed&&(this.pending[n].fn(),this.pending.splice(n,1));const e=this.world;if(this.phase==="edit"){for(let n=0;n<12&&this.cursor<this.order.length;n++)this.processChunk(this.order[this.cursor++]);this.cursor>=this.order.length&&(this.phase="bake",e.refreshMaxTop())}else if(this.phase==="bake")e.bakeShadows(0,it,this.bakeRow,Math.min(gt,this.bakeRow+36),this.changed),e.bakeSky(0,it,Math.max(0,this.bakeRow-8),Math.min(gt,this.bakeRow+36+8)),e.gi>=2&&e.bakeRadiosity(0,it,this.bakeRow,Math.min(gt,this.bakeRow+36),1,!1),this.bakeRow+=36,this.bakeRow>=gt&&(this.meshList=this.order.filter(s=>this.changed.has(s)),this.phase="mesh");else{const n=[];for(;this.meshCursor<this.meshList.length&&this.dist.get(this.meshList[this.meshCursor])/zs<=this.elapsed;)n.push(this.meshList[this.meshCursor++]);n.length&&e.queueChunks(n),this.meshCursor>=this.meshList.length&&e.pendingChunks===0&&this.pending.length===0&&(this.finished=!0)}}}const Jg=new U(0,1,0),ha=new U,Hr=new U,Ph=new U,ua=new fn,Lh=new fn,Ih=new pe;function Qg(i,t,e){const n=new Set;for(const s of i){const r=s.fall;if(!r||s.done||t<r.t0)continue;const o=Math.min(1,(t-r.t0)/r.dur),a=1.5*o*o;ha.set(r.dz,0,-r.dx),ua.setFromAxisAngle(ha,a),Lh.setFromAxisAngle(Jg,s.rotY),ua.multiply(Lh);const c=e.heightAt(s.x,s.z),l=s.y+(Math.min(s.y,c)-s.y)*o;for(const h of s.parts)Hr.copy(h.off).applyAxisAngle(ha,a),Ph.set(s.x+Hr.x,l+Hr.y,s.z+Hr.z),Ih.compose(Ph,ua,h.scale),h.mesh.setMatrixAt(h.index,Ih),n.add(h.mesh);o>=1&&(s.done=!0)}for(const s of n)s.instanceMatrix.needsUpdate=!0}const tx={missile:"OHJUS",nitro:"NITRO",hammer:"THORIN VASARA"},no=2*gg*.66,ex=24,nx=14,ix=7,sx=10,rx=new U(0,1,0);function ox(i){const t=new we,e=i==="missile"?16734762:i==="hammer"?16765498:3842303;if(i==="hammer"){const s=new we;s.name="spin";const r=qc();r.scale.setScalar(.22),r.position.y=-3.6,s.add(r),t.add(s);const o=new Xt(new ui(4,14,10),new Ge({color:16765498,transparent:!0,opacity:.2,depthWrite:!1,blending:Xn}));t.add(o)}else{const s=new Xt(new ce(1.9,1.9,1.9),new de({color:e,emissive:e,emissiveIntensity:.55}));s.name="spin",t.add(s)}if(i==="missile"){const s=Vu(1.5);s.position.y=0,s.name="spin",t.add(s)}const n=new Xt(new Ce(1,1,11,14,1,!0),new Ge({color:e,transparent:!0,opacity:.34,depthWrite:!1,side:je,blending:Xn}));return n.position.y=3.2,t.add(n),t}function Vu(i){const t=new we,e=new de({color:15329774}),n=new de({color:14168875}),s=new Xt(new Ce(.28,.28,1.5,10).rotateZ(Math.PI/2),e),r=new Xt(new po(.28,.6,10).rotateZ(-Math.PI/2),n);r.position.x=1.05,t.add(s,r);for(const a of[0,Math.PI/2]){const c=new Xt(new ce(.5,.05,.9),n);c.position.x=-.65,c.rotation.x=a,t.add(c)}const o=new Xt(new ui(.22,8,6),new Ge({color:16756800}));return o.position.x=-.95,o.scale.set(1.8,1,1),t.add(o),t.scale.setScalar(i),t}class ax{constructor(t,e,n,s){this.owner=t,this.track=e,this.pos.copy(n),this.dir.set(s.x,0,s.z).normalize(),this.per=e.length/e.pts.length,this.idx=this.nearestIdx(!0),this.syncVisual()}group=Vu(1);pos=new U;dir=new U(1,0,0);alive=!0;target=null;age=0;idx=0;per;aim=new U;nearestIdx(t){const e=this.track.pts,n=e.length,s=t?n:Math.round(80/this.per);let r=1/0,o=this.idx;for(let a=t?0:-s;a<=(t?n-1:s);a++){const c=t?a:((this.idx+a)%n+n)%n,l=(e[c].x-this.pos.x)**2+(e[c].z-this.pos.z)**2;l<r&&(r=l,o=c)}return o}update(t,e,n){if(this.age+=t,this.age>nx)return this.alive=!1,null;if(!this.target&&this.age>.1){let a=ex;for(const c of e){if(c===this.owner)continue;const l=c.pos.x-this.pos.x,h=c.pos.z-this.pos.z,u=Math.hypot(l,h);u<a&&(l*this.dir.x+h*this.dir.z)/Math.max(u,.001)>.25&&(a=u,this.target=c)}}if(this.target){const a=this.target,c=Math.hypot(a.pos.x-this.pos.x,a.pos.z-this.pos.z),l=Math.min(.6,c/no);this.aim.set(a.pos.x+a.vel.x*l-this.pos.x,0,a.pos.z+a.vel.z*l-this.pos.z)}else{this.idx=this.nearestIdx(!1);const a=this.track.pts.length,c=this.track.pts[(this.idx+Math.round(16/this.per))%a];this.aim.set(c.x-this.pos.x,0,c.z-this.pos.z)}if(this.aim.lengthSq()>1e-6){this.aim.normalize();const a=this.dir.x*this.aim.z-this.dir.z*this.aim.x,c=Math.atan2(a,this.dir.dot(this.aim)),l=(this.target?sx:ix)*t;this.dir.applyAxisAngle(rx,-Math.max(-l,Math.min(l,c))).normalize()}this.pos.x+=this.dir.x*no*t,this.pos.z+=this.dir.z*no*t;const s=n.heightAt(this.pos.x+this.dir.x*3,this.pos.z+this.dir.z*3),r=Math.max(n.heightAt(this.pos.x,this.pos.z),s),o=this.target?Math.max(r+.6,this.target.pos.y):r+1.2;this.pos.y+=(o-this.pos.y)*Math.min(1,t*9),this.syncVisual();for(const a of e)if(a!==this.owner&&Math.hypot(a.pos.x-this.pos.x,a.pos.z-this.pos.z)<2.3&&Math.abs(a.pos.y-this.pos.y)<2.4)return this.alive=!1,a;return null}syncVisual(){this.group.position.copy(this.pos),this.group.quaternion.setFromUnitVectors(new U(1,0,0),this.dir)}}function cx(i=null){const t=new we,e=new de({color:3488322}),n=new de({color:14694702}),s=new Ge({color:10479871}),r=new de({color:13620186}),o=(a,c,l=0,h=0,u=0)=>{const f=new Xt(a,c);return f.position.set(l,h,u),f.castShadow=!0,t.add(f),f};o(new ce(1.7,.55,1.7),e),o(new ui(.62,12,8,0,Math.PI*2,0,Math.PI/2),n,0,.27,0),o(new ui(.28,10,8),s,.55,-.35,0);for(const a of[Math.PI/4,-Math.PI/4])o(new ce(4.4,.14,.32),e).rotation.y=a;for(const a of[-1,1])for(const c of[-1,1]){const l=a*1.55,h=c*1.55;o(new Ce(.28,.28,.3,10),e,l,.1,h);const u=new we;u.name="rotor",u.position.set(l,.34,h);const f=new Xt(new ce(2.1,.05,.22),r);u.add(f),t.add(u)}if(i==="hammer"){const a=new we;a.name="load";const c=qc();c.scale.setScalar(.2),c.rotation.z=Math.PI/2,c.position.set(1.6,-3.1,0),c.rotation.y=0,a.add(c);const l=new de({color:2763310}),h=(u,f,d,v,x,m)=>{const p=new U(u,f,d),M=new U(v,x,m),g=p.distanceTo(M),_=new Xt(new Ce(.04,.04,g,5),l);_.position.copy(p).add(M).multiplyScalar(.5),_.quaternion.setFromUnitVectors(new U(0,1,0),M.clone().sub(p).normalize()),a.add(_)};for(const u of[-1,1])for(const f of[-1,1])h(u*.7,-.35,f*.7,u*.9+(u>0?1.4:-1.5),-2.9,f*.35);t.add(a),t.userData.load=a}return t.scale.setScalar(1.25),t}const fa=new U(0,1,0),da=new U,pa=new U,ma=new U,Vr=new U,Dh=new pe;function Gu(i,t){return t.set(-i.dz,0,i.dx)}function lx(i,t){return Math.hypot(i.R*Math.cos(t)+i.F/(2*Math.PI),i.R*Math.sin(t))}function Ys(i,t,e,n,s,r,o){const a=i.R,c=i.F/(2*Math.PI),l=a*Math.sin(t)+c*t,h=a*(1-Math.cos(t)),u=a*Math.cos(t)+c,f=a*Math.sin(t),d=Math.hypot(u,f),v=-Math.sin(t),x=Math.cos(t),m=v*u/d+x*f/d;let p=v-m*(u/d),M=x-m*(f/d);const g=Math.hypot(p,M);p/=g,M/=g,Vr.set(i.dx,0,i.dz),da.copy(Vr).multiplyScalar(u/d).addScaledVector(fa,f/d),pa.copy(Vr).multiplyScalar(p).addScaledVector(fa,M),Gu(i,ma),Dh.makeBasis(da,pa,ma),r.setFromRotationMatrix(Dh),s.set(i.ex,i.y,i.ez).addScaledVector(Vr,l).addScaledVector(ma,e).addScaledVector(fa,h).addScaledVector(pa,n),o&&o.copy(da)}const ga=.12;class hx{steer=0;throttle=0;brake=0;nitro=!1;handbrake=!1;resetPressed=!1;resetDown=!1;viewPressed=!1;menuPressed=!1;navY=0;soundPressed=!1;firePressed=!1;anyPressed=!1;hasGamepad=!1;keys=new Set;touch=new Set;prevReset=!1;prevView=!1;prevMenu=!1;prevFire=!1;prevSound=!1;prevAny=!1;constructor(){addEventListener("keydown",t=>{this.keys.add(t.code),(t.code.startsWith("Arrow")||t.code==="Space")&&t.preventDefault()}),addEventListener("keyup",t=>this.keys.delete(t.code)),addEventListener("blur",()=>this.keys.clear()),addEventListener("gamepadconnected",()=>document.body.classList.add("has-pad")),this.bindTouch()}bindTouch(){document.querySelectorAll("[data-btn]").forEach(t=>{const e=t.dataset.btn,n=r=>{r.preventDefault(),t.setPointerCapture(r.pointerId),this.touch.add(e),t.classList.add("on")},s=r=>{r.preventDefault(),this.touch.delete(e),t.classList.remove("on")};t.addEventListener("pointerdown",n),t.addEventListener("pointerup",s),t.addEventListener("pointercancel",s),t.addEventListener("lostpointercapture",s)})}poll(){const t=m=>this.keys.has(m),e=m=>this.touch.has(m);let n=(t("ArrowRight")||t("KeyD")||e("right")?1:0)-(t("ArrowLeft")||t("KeyA")||e("left")?1:0),s=t("ArrowUp")||t("KeyW")||e("gas")?1:0,r=t("ArrowDown")||t("KeyS")||e("brake")?1:0,o=t("ShiftLeft")||t("ShiftRight")||e("nitro"),a=t("Space")||e("hb"),c=t("KeyR")||e("bounce"),l=t("KeyV"),h=t("Escape")||t("KeyM"),u=t("KeyF")||e("fire"),f=t("KeyN"),d=t("Enter")||t("Space");const v=navigator.getGamepads?navigator.getGamepads():[];this.hasGamepad=!1;for(const m of v){if(!m||!m.connected)continue;this.hasGamepad=!0;const p=m.axes[0]??0;Math.abs(p)>ga&&(n=Math.sign(p)*((Math.abs(p)-ga)/(1-ga))),m.buttons[14]?.pressed&&(n=-1),m.buttons[15]?.pressed&&(n=1),s=Math.max(s,m.buttons[7]?.value??0),r=Math.max(r,m.buttons[6]?.value??0),(m.buttons[0]?.pressed||m.buttons[5]?.pressed)&&(o=!0),m.buttons[4]?.pressed&&(a=!0),s>.5&&r>.5&&(a=!0),m.buttons[2]?.pressed&&(u=!0),m.buttons[3]?.pressed&&(c=!0),m.buttons[17]?.pressed&&(f=!0),m.buttons[1]?.pressed&&(l=!0),m.buttons[8]?.pressed&&(h=!0),(m.buttons[9]?.pressed||m.buttons[0]?.pressed)&&(d=!0);break}let x=(t("ArrowDown")||t("KeyS")?1:0)-(t("ArrowUp")||t("KeyW")?1:0);for(const m of v){if(!m||!m.connected)continue;m.buttons[13]?.pressed&&(x=1),m.buttons[12]?.pressed&&(x=-1);const p=m.axes[1]??0;Math.abs(p)>.6&&(x=Math.sign(p)),(m.buttons[7]?.value??0)>.6&&(x=1),(m.buttons[6]?.value??0)>.6&&(x=-1);break}this.navY=x,document.body.classList.toggle("has-pad",this.hasGamepad),this.steer=n,this.throttle=s,this.brake=r,this.nitro=o,this.handbrake=a,this.resetDown=c,this.resetPressed=c&&!this.prevReset,this.viewPressed=l&&!this.prevView,this.soundPressed=f&&!this.prevSound,this.prevSound=f,this.firePressed=u&&!this.prevFire,this.prevFire=u,this.menuPressed=h&&!this.prevMenu,this.prevMenu=h,this.anyPressed=d&&!this.prevAny,this.prevReset=c,this.prevView=l,this.prevAny=d}}const En=700,ii=new Te;class ux{mesh;px=new Float32Array(En*3);pv=new Float32Array(En*3);life=new Float32Array(En);maxLife=new Float32Array(En);size=new Float32Array(En);grav=new Float32Array(En);next=0;col=new Nt;constructor(){const t=new de({color:16777215});this.mesh=new bn(new ce(1,1,1),t,En),this.mesh.frustumCulled=!1,this.mesh.castShadow=!0;for(let e=0;e<En;e++)ii.scale.setScalar(0),ii.updateMatrix(),this.mesh.setMatrixAt(e,ii.matrix),this.mesh.setColorAt(e,this.col.setHex(16777215))}spawn(t,e,n,s,r,o,a,c,l,h){const u=this.next;this.next=(this.next+1)%En,this.px.set([t,e,n],u*3),this.pv.set([s,r,o],u*3),this.life[u]=this.maxLife[u]=l,this.size[u]=c,this.grav[u]=h,this.mesh.setColorAt(u,this.col.setHex(a)),this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0)}update(t){for(let e=0;e<En;e++){if(this.life[e]<=0)continue;this.life[e]-=t;const n=e*3;this.pv[n+1]-=this.grav[e]*t,this.px[n]+=this.pv[n]*t,this.px[n+1]+=this.pv[n+1]*t,this.px[n+2]+=this.pv[n+2]*t;const s=Math.max(0,this.life[e]/this.maxLife[e]);ii.position.set(this.px[n],this.px[n+1],this.px[n+2]),ii.scale.setScalar(this.size[e]*(s>0?.3+.7*s:0)),ii.rotation.set(e,e*2,0),ii.updateMatrix(),this.mesh.setMatrixAt(e,ii.matrix)}this.mesh.instanceMatrix.needsUpdate=!0}}const ts=1.3;function fx(i,t,e){const n=rr(20261004),s=new Ii(t.pts),r={canopies:[],lamps:[]},o=kt*K,a=(w,A)=>Math.sqrt(s.query(w,A).d2),c=(w,A)=>{const y=e.x(A+.5)-e.x(A-.5);return Math.abs(w-e.x(A))/Math.sqrt(1+y*y)},l=(w,A)=>i.heights[Math.floor(A*K)*o+Math.floor(w*K)]*dt,h=new Uint8Array(kt*te),u=(w,A)=>w>pt+3&&A>pt+3&&w<kt-pt-3&&A<te-pt-3,f=(w,A,y,S)=>{if(!u(w,A)||!u(y,S))return!1;for(let R=Math.floor(A);R<=Math.floor(S);R++)for(let N=Math.floor(w);N<=Math.floor(y);N++)if(h[R*kt+N])return!1;return!0},d=(w,A,y,S)=>{for(let R=Math.floor(A);R<=Math.floor(S);R++)for(let N=Math.floor(w);N<=Math.floor(y);N++)h[R*kt+N]=1},v=(w,A,y,S,R,N)=>{for(let T=Math.floor(A*K);T<Math.ceil(S*K);T++)for(let D=Math.floor(w*K);D<Math.ceil(y*K);D++)i.heights[T*o+D]=Math.round(R*K),N!==null&&(i.mats[T*o+D]=N)},x=(w,A,y,S,R,N=.9)=>{for(const[T,D]of[[w,A],[y,A],[w,S],[y,S],[(w+y)/2,(A+S)/2]])if(Math.abs(l(T,D)-R)>N)return!1;return!0},m=(w,A,y,S,R)=>{for(const[N,T]of[[w,A],[y,A],[w,S],[y,S],[(w+y)/2,A],[(w+y)/2,S],[w,(A+S)/2],[y,(A+S)/2]])if(a(N,T)<Gt+ts+R)return!1;return!0},p=(w,A,y,S,R)=>[[w,A],[y,A],[w,S],[y,S]].every(([N,T])=>c(N,T)>e.halfBank+R),M=t.pts.length,g=w=>{const A=Math.floor(w%t.length/t.length*M)%M;return{p:t.pts[A],t:t.tan[A]}},_=[O.WallA,O.WallB,O.WallC];for(let w=18;w<t.length-8;w+=13+n()*9)for(const A of[1,-1]){if(n()<.3)continue;const y=9+Math.floor(n()*5),S=8+Math.floor(n()*4),{p:R,t:N}=g(w),T=1.5;let D=null;for(const ot of[0,3,6,9]){const ht=Gt+ts+2.5+T+Math.hypot(y,S)/2+ot,_t=R.x-N.z*A*ht,Bt=R.z+N.x*A*ht,Et=_t-y/2,Wt=_t+y/2,X=Bt-S/2,ee=Bt+S/2,Dt=l(_t,Bt);if(!(!f(Et-T,X-T,Wt+T,ee+T)||!m(Et-T,X-T,Wt+T,ee+T,1.5))&&!(!p(Et-T,X-T,Wt+T,ee+T,3)||!x(Et-T,X-T,Wt+T,ee+T,Dt,1.5)||Dt<e.waterY+.6)){D={cx:_t,cz:Bt};break}}if(!D)continue;const{cx:I,cz:k}=D,W=I-y/2,G=I+y/2,B=k-S/2,P=k+S/2,z=l(I,k);d(W-T,B-T,G+T,P+T);const H=n()<.5?2:3,q=_[Math.floor(n()*3)],V=n()<.6?O.Roof:O.RoofDark,Y=z+H*2.5,tt=.5;v(W-T,B-T,G+T,P+T,z,O.Path),v(W,B,G,P,Y,q);const J=y>=S;for(let ot=Math.floor((B+tt)*K);ot<Math.ceil((P-tt)*K);ot++)for(let ht=Math.floor((W+tt)*K);ht<Math.ceil((G-tt)*K);ht++){const _t=J?((ot+.5)*dt-k)/(S/2-tt):((ht+.5)*dt-I)/(y/2-tt);i.heights[ot*o+ht]=Math.round((Y+.25+(1-Math.min(1,Math.abs(_t)))*2.2)*K),i.mats[ot*o+ht]=V}}const E=[O.CarRed,O.CarBlue,O.CarYellow];for(let w=10;w<t.length-6;w+=14+n()*26){const A=n()<.5?1:-1,{p:y,t:S}=g(w),R=Math.abs(S.x)>Math.abs(S.z),N=3.8,T=1.9,D=(R?T:N)/2,I=Gt+ts+1.3+D,k=y.x-S.z*A*I,W=y.z+S.x*A*I,G=R?N/2:T/2,B=R?T/2:N/2,P=k-G,z=k+G,H=W-B,q=W+B,V=l(k,W);if(!f(P-.5,H-.5,z+.5,q+.5)||!m(P,H,z,q,.8)||!p(P,H,z,q,2)||!x(P,H,z,q,V))continue;d(P-.5,H-.5,z+.5,q+.5);const Y=Math.floor(n()*3);v(P,H,z,q,V+1,E[Y]),R?v(k-N*.28,W-T*.4,k+N*.22,W+T*.4,V+1.8,O.CabinRed+Y):v(k-T*.4,W-N*.28,k+T*.4,W+N*.22,V+1.8,O.CabinRed+Y)}let b=1;for(let w=6;w<t.length;w+=26){b=-b;const{p:A,t:y}=g(w),S=Gt+ts-.35,R=A.x-y.z*b*S,N=A.z+y.x*b*S;if(!f(R-.5,N-.5,R+.5,N+.5)||c(R,N)<e.halfBank+1)continue;d(R-.5,N-.5,R+.5,N+.5);const T=l(R,N);v(R-.25,N-.25,R+.25,N+.25,T+5.2,O.LampPost),r.lamps.push({x:R,y:T+5.2,z:N})}for(let w=0;w<2600&&r.canopies.length<190;w++){const A=pt+4+n()*(kt-2*pt-8),y=pt+4+n()*(te-2*pt-8),S=Math.min(A,y,kt-A,te-y);if(n()>.2+.8*Math.max(0,1-S/34)||a(A,y)<Gt+ts+4||c(A,y)<e.halfBank-1||!f(A-2.2,y-2.2,A+2.2,y+2.2))continue;const R=l(A,y);if(!(R<e.waterY+.4)){d(A-2.2,y-2.2,A+2.2,y+2.2);for(let N=Math.floor((y-3.3)*K);N<Math.ceil((y+3.3)*K);N++)for(let T=Math.floor((A-3.3)*K);T<Math.ceil((A+3.3)*K);T++){const D=Math.hypot((T+.5)*dt-A,(N+.5)*dt-y),I=N*o+T;D<3.3&&(i.mats[I]===O.Grass||i.mats[I]===O.Path)&&(i.mats[I]=O.ShadeGrass),D<.55&&(i.heights[I]=Math.round((R+3.6)*K),i.mats[I]=O.Trunk)}r.canopies.push({x:A,y:R+3.4,z:y,s:.85+n()*.5,tone:n()})}}for(let w=0,A=0;w<600&&A<26;w++){const y=pt+4+n()*(kt-2*pt-8),S=pt+4+n()*(te-2*pt-8),R=A%2===1,N=R?4:2.8,T=R?1.5:.8,D=n()<.5,I=(D?N:T)/2,k=(D?T:N)/2;if(a(y,S)<Gt+ts+3.5||c(y,S)<e.halfBank+1.5||!f(y-I-.5,S-k-.5,y+I+.5,S+k+.5))continue;const W=l(y,S);W<e.waterY+.5||!x(y-I,S-k,y+I,S+k,W)||(d(y-I-.5,S-k-.5,y+I+.5,S+k+.5),v(y-I,S-k,y+I,S+k,W+(R?1.3:.85),R?O.Hedge:O.Bench),A++)}return r}const Fs=[[40,135],[85,142],[130,134],[170,142],[196,122],[192,98],[165,92],[148,72],[168,48],[192,34],[172,16],[130,24],[95,16],[60,26],[28,18],[18,46],[44,64],[30,88],[20,114]],Uh=900;function Nh(i,t,e,n,s){const r=s*s,o=r*s;return .5*(2*t+(-i+e)*s+(2*i-5*t+4*e-n)*r+(-i+3*t-3*e+n)*o)}function dx(){const i=Fs.length,t=[],e=kt/2-108;for(let a=0;a<i;a++){const c=Fs[(a+i-1)%i],l=Fs[a],h=Fs[(a+1)%i],u=Fs[(a+2)%i];for(let f=0;f<200;f++){const d=f/200;t.push({x:Nh(c[0],l[0],h[0],u[0],d)+e,z:Nh(c[1],l[1],h[1],u[1],d)})}}const n=[0];for(let a=1;a<=t.length;a++){const c=t[a-1],l=t[a%t.length];n.push(n[a-1]+Math.hypot(l.x-c.x,l.z-c.z))}const s=n[n.length-1],r=[];let o=0;for(let a=0;a<Uh;a++){const c=a/Uh*s;for(;n[o+1]<c;)o++;const l=(c-n[o])/(n[o+1]-n[o]),h=t[o],u=t[(o+1)%t.length];r.push({x:h.x+(u.x-h.x)*l,z:h.z+(u.z-h.z)*l})}return r}const zh={x:i=>kt/2+16*Math.sin(i/24)+7*Math.sin(i/9+1),halfBed:5,halfBank:9.5,depth:1.4,hRef:se+.1,waterY:se-.2},px={id:"city",name:"Kaupunkipuisto",blurb:"Mutkitteleva asfalttirata talojen, puiden ja pysäköityjen autojen keskellä. Joen yli ajetaan kahlaamalla.",playW:200,playH:150,maxElevation:6,style:"city",conditions:Ni(fi,Es("riverdusk")),minGround:4.3,river:zh,centerline:()=>({pts:dx(),startIdx:0}),profile(i,t){const e=i/t,n=2.4+2*Math.sin(2*Math.PI*3*e-1.9)+.9*Math.sin(2*Math.PI*7*e+2.1);return{elev:Math.max(0,n),feat:0,quiet:!0}},mines:[[.3,3],[.55,-3],[.82,2]],checkpoints:[0,.17,.33,.5,.67,.83],decorate:(i,t)=>fx(i,t,zh)},mx=[37.37,133.94,37.76,134.74,38.19,135.52,38.66,136.26,39.16,136.97,39.7,137.64,40.27,138.27,40.88,138.86,41.53,139.4,42.2,139.91,42.91,140.37,43.65,140.78,44.42,141.15,45.22,141.48,46.05,141.76,46.89,142,47.76,142.19,48.65,142.35,49.55,142.48,50.47,142.56,51.4,142.62,52.34,142.65,53.29,142.65,54.25,142.63,55.22,142.59,56.19,142.53,57.16,142.46,58.14,142.37,59.13,142.27,60.11,142.16,61.1,142.05,62.08,141.92,63.07,141.8,64.06,141.66,65.05,141.53,66.04,141.39,67.03,141.25,68.02,141.11,69.01,140.96,70,140.82,71,140.68,71.99,140.53,72.98,140.39,73.97,140.24,74.96,140.1,75.95,139.95,76.94,139.81,77.93,139.66,78.92,139.52,79.91,139.37,80.9,139.23,81.89,139.08,82.88,138.94,83.87,138.79,84.86,138.65,85.85,138.5,86.84,138.36,87.83,138.21,88.82,138.07,89.82,137.92,90.81,137.78,91.8,137.63,92.79,137.49,93.78,137.34,94.77,137.2,95.76,137.05,96.75,136.91,97.74,136.76,98.73,136.62,99.72,136.47,100.71,136.33,101.7,136.18,102.69,136.04,103.68,135.89,104.67,135.75,105.66,135.6,106.65,135.46,107.64,135.31,108.64,135.17,109.63,135.02,110.62,134.87,111.61,134.73,112.6,134.58,113.59,134.44,114.58,134.29,115.57,134.15,116.56,134,117.55,133.86,118.54,133.71,119.53,133.57,120.52,133.42,121.51,133.28,122.5,133.13,123.49,132.99,124.48,132.84,125.47,132.7,126.46,132.55,127.46,132.41,128.45,132.26,129.44,132.12,130.43,131.97,131.42,131.83,132.41,131.68,133.4,131.54,134.39,131.39,135.38,131.25,136.37,131.1,137.36,130.96,138.35,130.81,139.34,130.67,140.33,130.52,141.32,130.38,142.31,130.23,143.3,130.09,144.29,129.94,145.28,129.8,146.28,129.65,147.27,129.51,148.26,129.36,149.25,129.22,150.24,129.07,151.23,128.93,152.22,128.78,153.21,128.64,154.2,128.49,155.19,128.35,156.18,128.2,157.17,128.06,158.16,127.91,159.15,127.77,160.14,127.62,161.13,127.48,162.12,127.33,163.11,127.19,164.1,127.04,165.1,126.9,166.09,126.75,167.08,126.61,168.07,126.46,169.06,126.32,170.05,126.17,171.04,126.02,172.03,125.87,173.02,125.72,174,125.57,174.99,125.42,175.98,125.26,176.96,125.1,177.94,124.93,178.92,124.76,179.89,124.58,180.86,124.39,181.82,124.2,182.78,123.99,183.73,123.76,184.66,123.52,185.58,123.26,186.49,122.98,187.38,122.68,188.26,122.36,189.11,122,189.93,121.62,190.73,121.21,191.5,120.77,192.24,120.29,192.94,119.78,193.61,119.24,194.23,118.66,194.82,118.04,195.36,117.4,195.86,116.71,196.31,116,196.72,115.26,197.08,114.48,197.4,113.68,197.68,112.86,197.91,112.01,198.1,111.14,198.26,110.25,198.38,109.34,198.46,108.42,198.52,107.49,198.54,106.55,198.54,105.6,198.52,104.64,198.48,103.67,198.42,102.7,198.34,101.72,198.26,100.74,198.16,99.76,198.05,98.77,197.93,97.79,197.81,96.8,197.68,95.81,197.55,94.82,197.41,93.83,197.27,92.84,197.13,91.85,196.99,90.86,196.85,89.87,196.71,88.88,196.57,87.89,196.42,86.89,196.28,85.9,196.13,84.91,195.99,83.92,195.85,82.93,195.7,81.94,195.56,80.95,195.41,79.96,195.27,78.97,195.13,77.98,194.98,76.99,194.84,76,194.69,75.01,194.55,74.02,194.41,73.03,194.26,72.03,194.12,71.04,193.97,70.05,193.83,69.06,193.69,68.07,193.54,67.08,193.4,66.09,193.25,65.1,193.11,64.11,192.96,63.13,192.82,62.14,192.67,61.16,192.53,60.18,192.38,59.21,192.23,58.24,192.08,57.29,191.92,56.34,191.76,55.4,191.59,54.48,191.42,53.57,191.24,52.69,191.05,51.83,190.85,51,190.63,50.2,190.4,49.43,190.15,48.7,189.88,48.02,189.58,47.37,189.26,46.78,188.91,46.24,188.53,45.74,188.12,45.3,187.67,44.92,187.19,44.58,186.67,44.3,186.11,44.07,185.51,43.89,184.88,43.75,184.21,43.65,183.51,43.6,182.77,43.57,182,43.58,181.2,43.61,180.38,43.67,179.52,43.74,178.65,43.84,177.76,43.94,176.85,44.05,175.92,44.17,174.99,44.29,174.04,44.41,173.08,44.54,172.12,44.66,171.15,44.78,170.17,44.89,169.2,44.99,168.22,45.08,167.23,45.16,166.25,45.23,165.27,45.29,164.28,45.33,163.3,45.35,162.32,45.35,161.34,45.33,160.36,45.29,159.39,45.23,158.42,45.15,157.45,45.05,156.48,44.92,155.52,44.77,154.56,44.59,153.61,44.39,152.66,44.17,151.72,43.92,150.78,43.65,149.85,43.36,148.93,43.04,148.01,42.7,147.1,42.34,146.2,41.96,145.3,41.56,144.42,41.14,143.54,40.7,142.67,40.25,141.8,39.78,140.95,39.29,140.1,38.79,139.26,38.28,138.42,37.75,137.6,37.22,136.78,36.68,135.96,36.13,135.15,35.58,134.34,35.03,133.54,34.47,132.74,33.93,131.94,33.39,131.14,32.85,130.33,32.33,129.53,31.83,128.73,31.34,127.92,30.88,127.1,30.44,126.28,30.02,125.46,29.63,124.63,29.27,123.79,28.94,122.95,28.64,122.1,28.37,121.24,28.13,120.38,27.92,119.51,27.74,118.64,27.58,117.76,27.44,116.88,27.31,116.01,27.2,115.13,27.1,114.25,27,113.39,26.89,112.53,26.78,111.68,26.65,110.84,26.51,110.02,26.34,109.22,26.14,108.45,25.91,107.69,25.64,106.96,25.34,106.27,25,105.6,24.62,104.96,24.2,104.36,23.75,103.79,23.27,103.25,22.76,102.75,22.22,102.27,21.67,101.82,21.1,101.4,20.53,100.99,19.95,100.6,19.39,100.22,18.84,99.85,18.3,99.47,17.8,99.09,17.32,98.7,16.88,98.29,16.48,97.86,16.11,97.4,15.79,96.92,15.52,96.4,15.28,95.85,15.09,95.26,14.94,94.64,14.83,93.98,14.76,93.28,14.72,92.55,14.71,91.78,14.73,90.99,14.77,90.16,14.84,89.31,14.92,88.44,15.02,87.54,15.12,86.63,15.24,85.7,15.37,84.77,15.51,83.81,15.65,82.86,15.79,81.89,15.94,80.92,16.09,79.94,16.24,78.96,16.39,77.98,16.55,76.99,16.7,76.01,16.86,75.02,17.01,74.03,17.17,73.04,17.32,72.05,17.48,71.06,17.63,70.07,17.78,69.08,17.94,68.09,18.09,67.1,18.25,66.11,18.4,65.13,18.56,64.14,18.71,63.15,18.86,62.16,19.02,61.17,19.18,60.18,19.33,59.19,19.49,58.2,19.65,57.22,19.81,56.23,19.97,55.24,20.13,54.26,20.29,53.27,20.46,52.29,20.63,51.31,20.81,50.32,20.99,49.34,21.17,48.37,21.36,47.39,21.56,46.41,21.76,45.44,21.96,44.47,22.18,43.5,22.4,42.54,22.63,41.57,22.86,40.61,23.1,39.65,23.35,38.7,23.6,37.74,23.85,36.8,24.11,35.85,24.37,34.91,24.63,33.98,24.89,33.05,25.15,32.13,25.41,31.22,25.67,30.32,25.93,29.44,26.18,28.57,26.44,27.73,26.7,26.91,26.97,26.11,27.23,25.35,27.51,24.63,27.8,23.95,28.1,23.31,28.42,22.72,28.76,22.17,29.12,21.68,29.51,21.25,29.92,20.87,30.37,20.54,30.85,20.27,31.36,20.05,31.91,19.89,32.5,19.77,33.12,19.69,33.77,19.65,34.47,19.65,35.19,19.69,35.95,19.75,36.73,19.83,37.55,19.94,38.39,20.06,39.25,20.19,40.13,20.33,41.03,20.48,41.95,20.64,42.88,20.79,43.82,20.95,44.77,21.12,45.73,21.28,46.7,21.44,47.67,21.6,48.65,21.76,49.63,21.92,50.61,22.08,51.59,22.24,52.58,22.39,53.57,22.55,54.55,22.71,55.54,22.87,56.53,23.02,57.51,23.18,58.5,23.34,59.48,23.5,60.47,23.67,61.45,23.83,62.43,24,63.4,24.18,64.38,24.36,65.35,24.54,66.31,24.73,67.28,24.93,68.23,25.13,69.19,25.35,70.13,25.56,71.07,25.79,72.01,26.03,72.94,26.27,73.86,26.52,74.78,26.78,75.69,27.04,76.6,27.31,77.51,27.57,78.42,27.85,79.32,28.12,80.22,28.39,81.13,28.65,82.04,28.92,82.94,29.18,83.86,29.43,84.77,29.68,85.7,29.92,86.62,30.15,87.56,30.37,88.5,30.59,89.44,30.79,90.39,30.99,91.35,31.19,92.31,31.37,93.27,31.55,94.24,31.73,95.21,31.89,96.19,32.05,97.17,32.21,98.15,32.36,99.13,32.51,100.12,32.65,101.1,32.79,102.09,32.92,103.08,33.05,104.07,33.17,105.06,33.28,106.05,33.39,107.04,33.49,108.03,33.59,109.02,33.68,110.02,33.76,111.01,33.84,112,33.92,113,33.99,113.99,34.06,114.98,34.13,115.97,34.2,116.97,34.27,117.96,34.34,118.95,34.42,119.94,34.51,120.93,34.6,121.91,34.7,122.89,34.81,123.87,34.94,124.84,35.08,125.81,35.24,126.76,35.42,127.71,35.62,128.65,35.84,129.58,36.09,130.49,36.37,131.38,36.67,132.26,37,133.11],gx=JSON.parse("[[2,[33.7,119.9,34.7,117.6,34.3,110.4]],[2,[162.2,53.1,162,49.7,161.2,48,159.7,46.7]],[1,[149.3,44.4,155.5,48.4,159.3,52.3,160.4,53,162.2,53.1]],[1,[149.3,44.4,143.6,42.1,138,38.6,133.4,35.1,127.9,30.1,121.4,23.3]],[2,[143.9,88.2,143,89.3,142.9,90.6,146.5,116.9]],[2,[220.1,44,218.5,35.5,212.6,-4.3]],[2,[178.7,167.1,208.6,162.8]],[4,[10.5,-26,15.2,4.1,17.1,11.7,18.2,18.8,18.2,22.8]],[3,[59.6,164,62.8,184]],[5,[34,122.8,37.3,143.8]],[2,[160.6,37.1,164.1,36.4,178.7,17,180.2,15.6,184.2,13.7]],[2,[153.9,4.5,159.5,36.2,160.6,37.1]],[2,[201.5,121.6,208.6,162.8]],[1,[119.3,20.6,118.7,14.1]],[3,[-6.9,-7.8,-2.8,19.5]],[2,[161.5,164.3,144.3,145.5]],[2,[144.3,145.5,142.6,141,142.4,139.2,143,135.5,145.2,132.4,149.8,129.3]],[3,[56,150.2,52.8,151,51.8,151.9,53.2,161.9,54.3,162.8,59.4,162.4]],[5,[103.3,29.3,100.2,23.8,99.3,19.9,99.1,15.5]],[5,[128,33.5,126.5,35.1,111.8,42.7,111.4,44.2,117.4,56.6]],[2,[70.5,141.3,82.3,139.5]],[2,[-26.1,155.9,7.8,150.8]],[5,[128,33.5,134.4,39,143.6,44.6,151.2,48.1,154.2,51.1]],[3,[56.7,154.7,68.4,152.8]],[3,[57.1,157.2,68.8,155.3]],[3,[55,143.6,56,150.2]],[3,[56,150.2,67.7,148.4]],[3,[56.4,152.5,68.1,150.6]],[2,[-5.4,195.5,-9.9,167.3,-10.8,158.9]],[5,[154.2,51.1,151.4,55.3,148.3,57.6,146.7,59.5,145.3,66.2,145.1,70.1,145.6,78.1,144.3,79.5,141.8,80.2]],[3,[26.6,61.5,44.7,58.8]],[5,[149.7,173,147.6,173,144.8,171.5,139.6,159.7]],[3,[72.6,160.1,77,161.1,98,158]],[3,[48.7,96,45.7,78.4,45.1,77.3]],[4,[29.4,47.3,27.4,33.1,39.1,31.4,41.2,45.5,29.4,47.3]],[3,[36,60,36.4,62.8]],[3,[34,60.3,32,48.1,38.1,47.2,40.1,59.3,41,62.5,41.7,71]],[5,[35.6,105.5,31.7,79.2]],[0,[-9.7,32.5,14.7,28.5,21.7,28]],[1,[162.2,53.1,166.8,52,191,48.3]],[5,[93.7,71,93.2,78.1,92.4,80.9,91.1,84.2,86.4,91]],[5,[125.8,90.5,127.8,90.3,132.1,87,137,81.8,139.4,80.7,141.8,80.2]],[3,[124.4,26.5,106.9,35.9]],[3,[53.7,121.4,72.3,118.4,78.4,112.6,90.3,111.1]],[2,[166.2,84.2,146.9,87.2,143.9,88.2]],[2,[254.8,70,225.1,74.2,195.6,78.8]],[2,[172.1,126,201.5,121.6]],[3,[46.4,82.3,34.6,84.1]],[5,[86.4,91,85.3,90.7,83.6,92,73.7,93.5]],[2,[34.3,110.4,29.4,79.5]],[3,[71.1,150.1,70.8,147.9]],[3,[56.4,152.5,56.7,154.7]],[3,[57.5,159.6,69.3,157.7]],[2,[166.2,84.2,164.9,71.3,162.1,55.9,162.2,54.3]],[4,[166.9,44,158.2,45.1,157,38.7,159.4,38.3,158.7,34.6,162.7,34.1,163.5,34.3,164.9,35.4,165.9,37.4,166.9,44]],[5,[154.2,51.1,154.9,51.7]],[3,[71.8,154.8,71.4,152.3]],[3,[70.8,147.9,70.5,141.3]],[3,[71.4,152.3,71.1,150.1]],[3,[72.1,157.2,71.8,154.8]],[3,[57.5,159.6,59.4,162.4]],[3,[59.4,162.4,69.2,160.7]],[3,[57.1,157.2,57.5,159.6]],[3,[56,150.2,56.4,152.5]],[3,[56.7,154.7,57.1,157.2]],[3,[68.4,152.8,71.4,152.3]],[3,[68.1,150.6,71.1,150.1]],[0,[21.7,28,31.6,26.6,33.6,26,35.7,25,38.7,22.7]],[2,[-62,136,32.1,120.9,33.7,119.9]],[2,[7.8,150.8,14.2,149.8]],[2,[14.2,149.8,23.6,148.4]],[3,[69.3,157.7,72.1,157.2]],[3,[68.8,155.3,71.8,154.8]],[2,[162.2,54.3,162.2,53.1]],[3,[72.6,160.1,72.1,157.2]],[3,[69.2,160.7,72.6,160.1]],[2,[23.6,148.4,39.2,146]],[2,[46.8,144.9,55,143.6]],[2,[82.3,139.5,98.9,137]],[3,[119.5,24.6,121.4,23.3]],[5,[119.5,24.6,128,33.5]],[3,[67.7,148.4,70.8,147.9]],[2,[208.6,162.8,237.4,158.4]],[3,[45.1,77.3,47.3,76.1]],[5,[65.4,57.8,67.1,67.7,66.1,70.8,64.6,72.5]],[3,[103.3,29.3,115.1,26.9,119.5,24.6]],[3,[77.7,83.7,76,72.9,71.3,69.2]],[3,[47.3,76.1,62.4,74.1,63.6,73.6,64.6,72.5]],[4,[218.1,-2.2,221.7,-2.7,222.3,0.8,221.2,1,220.6,3.1,221.7,5,222.9,4.9,223.4,7.9,224.1,7.8,224.3,8.9,224,9,225.3,17.6,223,18,221.8,9.2,222.3,8,221.9,7.2,221.2,6.7,220.3,6.8,219.6,7.3,218.1,-2.2]],[2,[201.5,121.6,254.8,113.5]],[2,[178.7,167.1,170.6,116.5]],[3,[64.7,48.1,64,46.7]],[3,[62,43,55.5,32.5]],[3,[61.2,41.5,52.1,46.9]],[1,[191,48.3,235.5,41.8,239.3,41.1,243.5,39.4,250.6,38.2]],[5,[169.3,177.7,162.6,170.8,157,167.9,155.6,166.7]],[5,[150.7,128,151.1,130.9]],[2,[150.8,129.1,172.1,126]],[3,[34.6,84.1,35.5,90.2,47.4,88.3]],[4,[38.3,150.4,40.5,167.3,43.8,187.5]],[5,[18,31.5,16.1,28.4,15.2,24.7,18.4,24.2]],[5,[141.8,80.2,143.3,85.8]],[5,[125.8,90.5,125.3,85.5,122.6,68,117.4,56.6]],[1,[249.8,33.4,189.9,42]],[2,[190.5,45.4,198.7,101.6]],[1,[189.9,42,159.7,46.7,149.3,44.4]],[2,[127,132.8,131.4,133.8,135.1,135.9,144.3,145.5]],[2,[149.8,129.3,127,132.8]],[5,[216.6,22.1,219.9,21.7]],[5,[139.6,159.7,137.6,154.4,134.3,150.2,129.3,145,124.3,140.6,121.3,137,119.8,134.2,118.5,130.5,117.9,126.3,117.9,123.6]],[5,[117.9,123.6,119.2,118.3,125.2,98.3,125.8,90.5]],[2,[39.2,146,46.8,144.9]],[3,[161.4,65.5,160.4,60]],[3,[50.2,112.2,48.7,96]],[2,[45.1,77.3,31.7,79.2]],[2,[55,143.6,70.5,141.3]],[2,[170.9,172.2,169,170.2,161.5,164.3]],[2,[161.5,164.3,168.4,174.1]],[2,[150.8,129.1,149.8,129.3]],[2,[122.3,133.5,127,132.8]],[5,[37.3,143.8,9.7,148,7,149.2,-52.4,158.2,-55.4,157.8,-58.1,158.2]],[5,[257.3,110.6,201.1,119,198.2,119.6,195.7,120.7,178.1,123.4,174.2,122.8,150.4,126.6]],[5,[-57.3,163.2,-54.5,162.8,-52,161.5,7.4,152.7,10.9,152.9,38.1,148.8]],[5,[123.4,135.8,125.2,135.7,128.6,136,132.2,137.4,133.4,138.4]],[5,[134.2,140.1,133.4,138.4]],[5,[141.8,133.3,146.9,133.3,156.1,131,175,128.3,178.7,126.7,196.3,124.1,199,124.4,201.9,124.1,258,115.6]],[5,[98,158,99.5,156.8]],[5,[150.4,126.6,144.8,127.5,144.3,127.9,122.5,131]],[5,[98.9,134.4,94.1,135.2,89.3,134.7,43.2,141.7,39.3,143.5,37.3,143.8]],[5,[37.3,143.8,38.3,150.4]],[5,[72.4,144.8,91.3,142,94.9,140.2,99,139.6]],[5,[122.7,132.1,123.1,134.8]],[5,[122.5,131,122,131]],[5,[35.6,105.5,36.9,114.4,36.9,117.3,36.3,120.4,34,122.8]],[2,[170.9,172.2,176.9,167.8,178.7,167.1]],[2,[184.2,13.7,186,17,187.3,24.9]],[2,[225.1,74.2,220.1,44]],[2,[170.6,116.5,170.4,114.9,170.9,113.6,166.2,84.2]],[5,[155.6,166.7,149.6,160.1]],[5,[149.6,160.1,144.3,155.3,135.2,141.7]],[5,[141.4,173.8,139.6,159.7]],[3,[57,93.8,50.4,94.8]],[3,[71.3,69.2,69.4,69.8,64.6,72.5]],[3,[6.4,82.6,3.3,63.7,4.5,62.2,5.9,62]],[3,[4.5,71.4,-3.9,72.7]],[5,[244.5,37.2,162,49.7,156.9,51.8,154.9,51.7]],[0,[118.7,14.1,120.5,11.7,120.8,10.2,120.5,8.6,119.8,7.3,117.4,5.7,114.7,5.6,113.5,6.2,111.8,8,111.4,9.2,111.6,11.9,112.2,13,114,14.5,115.1,14.8,117,14.8,118.7,14.1]],[1,[115.1,14.8,116.8,18,119.3,20.6]],[2,[159.7,46.7,158.5,47.5,157.7,50.3]],[5,[143.3,85.8,143.9,88.2]],[3,[159.3,52.3,160.2,58.6]],[3,[160.2,58.6,162.1,55.9]],[4,[230.4,94.8,227.7,76.2,227.3,75.6,201.2,79.8,201.7,83.1,221.2,80.1,223.7,95.8,230.4,94.8]],[2,[198.7,101.6,201.5,121.6]],[3,[205,98.3,210.2,97.5,211.5,106.5]],[3,[198.3,99.3,200.6,98.9]],[1,[121.4,23.3,119.3,20.6]],[4,[259.7,118.1,259.2,115.1,258.1,114.6,254.9,114.7,255.1,115.7,234,118.8,233.8,117.9,171.7,127.3,171.9,128.3,155.7,130.7,152.1,131.6,152,130.6,148.6,132,146.3,133.9,152.8,132.5,153,134,175.3,131,216.6,124.7,216.7,125,217.3,124.9,217.3,124.5,226.1,123.1,259.7,118.1]],[4,[257.8,107.2,258.6,110.9,257.4,111.7,254.5,112.5,254.3,111.4,233.2,114.4,233.3,115.5,171.4,124.8,171.2,123.8,151.2,126.8,151.4,127.9,150.7,128,150.1,124.3,228.6,111.9,227.9,107.4,232.1,106.7,232.8,111.4,257.3,107.8,257.8,107.2]],[4,[150.7,128,150,123.7,144,124.5,143.9,123.4,135.3,124.6,128.8,125,128.4,125.7,119.8,127.9,121.7,132.3,150.7,128]],[4,[140.2,139.2,140.7,135.6,142.7,131.9,134.4,133.1,140.2,139.2]],[4,[76.8,159.8,77.2,162.5,64.9,164.1,60.9,165,61.1,164.2,62.5,162.7,72.9,160.9,73.8,160.1,74,159.3,72.2,146.8,74.5,146.3,74.4,147.1,75.4,151.8,75.1,152,76.2,157.2,76,158.5,77.1,159.4,78.4,158.9,78.5,159.6,76.8,159.8]],[4,[99,142.2,99,138.4,95.5,138.9,90.6,140.8,78.3,142.6,74.4,142.8,72.7,144.1,72.1,145.9,72.2,146.8,74.5,146.3,75.2,145.7,79.9,145.1,80,144.7,84.8,144.6,99,142.2]],[4,[68.7,147.3,69,146.4,68.7,144.2,68.2,143.5,67.4,143.1,63.1,143.8,57.3,146.1,57.7,148.4,59.6,148.8,64.2,148.6,68.7,147.3]],[4,[53.9,148,53.4,146.4,47.3,147.4,40.2,147.2,35.4,147.9,35.8,150.8,53.9,148]],[4,[-58.5,155.5,17.9,143.8,17.6,142.5,28.7,140.9,28.9,142.3,70.5,135.8,70.3,134.5,72.2,134.2,72.4,135.2,77,134.5,77.1,134.8,98.9,131.7,98.9,135.8,95.1,136.4,89.1,136,71.1,138.8,67.4,140.5,64.9,140.9,61.1,141.3,56.1,141,43.7,142.9,39.9,144.7,35,145.4,34.9,144.4,13.9,147.6,14.1,148.6,-57.9,159.5,-58.5,155.5]],[4,[14.6,152.1,35.6,148.9,36.1,151.5,35.2,151.9,24.4,153.5,24.4,153.2,23.3,153.4,23.4,153.7,0.9,157.2,-0.5,156.6,-1.6,157.6,-43.7,163.8,-44.4,163.6,-45,164.1,-51.8,165.1,-52.6,164.8,-53.2,165.3,-55.3,165.6,-55.6,166.5,-56.8,166.7,-57.5,161.9,14.4,151.1,14.6,152.1]],[3,[180.5,84.2,180,81.1]],[3,[176.3,93.9,180.4,93.2,181.2,92.2,181.5,90.6,180.5,84.2]],[3,[98,158,98.3,159.3]],[4,[124.7,138.6,122.9,134.8,129,134.9,132.4,136,137.5,140.6,135.1,142.8,130.7,139.4,127.5,138.9,127.4,138,124.7,138.6]],[5,[33.7,119.9,34,122.8]],[2,[189.2,37.6,190.5,45.4]],[2,[187.3,24.9,187.6,26.7]],[2,[187.6,26.7,189.2,37.6]],[5,[24.7,46.9,29.9,46.2,28.1,32.4]],[3,[44.7,58.8,48.1,58.3,65.8,47.4,71,50,79.6,64.2]],[3,[90.3,111.1,91.4,112.5,92.6,121.3]],[2,[208.6,162.8,215.9,211.1]],[5,[151.1,130.9,151.3,132.1]],[5,[150.4,126.6,150.7,128]],[3,[145.8,127.4,146,128.7]],[3,[146,128.7,146.2,129.9]],[3,[146.1,121.8,145.2,123,145.4,124.3]],[3,[145.4,124.3,145.8,127.4]],[5,[68.9,145.3,72.4,144.8]],[5,[57.4,147,68.9,145.3]],[5,[53.8,147.6,57.4,147]],[5,[38.1,148.8,40.4,148.4,46.4,148.7,53.8,147.6]],[5,[135.2,141.7,134.2,140.1]],[5,[136.7,135.5,138.6,133.9,139.7,133.4,141.8,133.3]],[5,[134.4,137.6,136.7,135.5]],[5,[133.4,138.4,134.4,137.6]],[5,[123.1,134.8,123.3,135.9]],[5,[122.5,131,122.7,132.1]],[2,[146.5,116.9,147,120.6,146.1,121.8]],[2,[31.7,79.2,29.4,79.5]],[2,[195.6,78.8,169.2,82.7,166.2,84.2]],[2,[6.4,82.6,-7.1,84.7]],[2,[29.4,79.5,26.4,79.4,6.4,82.6]],[3,[190.6,65.2,193.5,64.8]],[3,[186.1,65.9,181.1,66.8]],[3,[192.4,57.6,176.2,60]],[3,[193,61.2,201.9,59.9]],[3,[59.4,162.4,59.6,164]],[3,[83.4,160.1,82.8,155.2]],[3,[87.7,159.5,87.2,155.1]],[5,[119.5,60.8,120.2,56.4]],[2,[29.4,79.5,25.1,51.8,24.4,43.7,21.3,25.3]],[5,[18,31.5,19.2,32.4,21.2,41.3,24.3,60.6,24.2,65.3,26.4,79.4]],[4,[71.3,127.2,71.7,129.7,72.7,129.5,72.3,127.1,71.3,127.2]],[3,[73.7,93.5,70.2,94,69.7,92.6,65.7,92,58.7,93,57,93.8]],[4,[73.1,120.7,74.9,120.5,77,134.5,76,134.7,75.8,133.6,75.1,133.7,73.1,120.7]],[4,[69,125.5,70.2,125.8,71.1,126.6,71.7,129.7,71.2,131.1,70,132,69,125.5]],[4,[50.9,112.7,50,112.8,40.7,119.4,43.6,122.1,47,123.7,50.6,124.3,53.6,124,52,113.2,50.9,112.7]],[4,[37.9,113.3,40.2,118.8,43.6,122.1,35.6,123.3,35.5,122.5,36.9,121.2,37.7,119.6,38,116.6,37.9,113.3]],[4,[37.8,112.8,44,96.7,49.8,95.8,51.6,108.1,51.5,109.8,51,110.7,50.2,111.7,40.2,118.8,38.5,115.4,37.8,112.8]],[4,[37.8,112.8,37.6,111.8,43.4,96.8,44,96.7,37.8,112.8]],[4,[52,113.2,50.3,112.7,40.7,119.4,40.2,118.8,50.2,111.7,51.5,109.8,52,113.2]],[4,[37.6,111.8,35.5,98,43.4,96.8,37.6,111.8]],[4,[52,113.2,51.5,107.4,49.8,95.8,51.2,95.6,51.5,97.4,52.7,97.3,53.2,100,52,100.2,53.6,110.5,52.9,110.6,53.2,112.4,53.8,112.3,54.1,114.3,52,113.2]],[4,[52,113.2,53.6,124,54.5,123.9,53,113.7,52,113.2]],[4,[70.3,134.5,75.1,133.7,73.1,120.7,75.3,120.4,75.1,119.1,72.9,119.4,73.6,117.7,73,117,71.6,117.6,71.6,118.8,70.9,120.4,69.8,121.4,68.4,121.8,68.9,124.8,70.1,125,71.4,125.9,72.3,127.1,72.7,129.5,71.8,131.6,70.1,132.7,70.3,134.5]],[4,[66.5,136.4,39.3,122.7,37.3,123,64.5,136.7,66.5,136.4]],[4,[66.5,136.4,39.3,122.7,43.6,122.1,47,123.7,51.5,124.3,68.4,121.8,70.5,135.8,66.5,136.4]],[3,[20.3,107.5,20.8,111.5,24.9,110.9]],[3,[29.9,110.2,34.1,109.3]],[3,[5.7,107.7,7.6,116.5]],[3,[8.5,122.2,8.8,124.6]],[4,[18.3,23.6,18.4,24.2]],[4,[18.3,11.5,20.1,22.5,16.4,23.1,15.7,19.2,17,19,15.9,11.9,18.3,11.5]],[3,[48.5,95,50.4,94.8]],[3,[5.9,62,7.8,61.7,5.8,47.5,6.8,45.5,10.2,44.8]],[3,[7.8,61.7,11,61.1]],[3,[171.5,54.1,171.2,51.3]],[5,[99.1,15.5,99.5,11]],[0,[38.7,22.7,63.3,18.7]],[0,[38.7,22.7,14.4,26.1,-10.1,30.4]],[3,[11.6,39.1,-13.1,43,-14,41.8]],[3,[-5.6,56.2,-6.1,52.7]],[3,[-3.8,67.5,-5.6,56.2,-7.2,56.4]],[3,[160.2,58.6,160.4,60]],[3,[122.5,24.6,125.6,22.3,126.6,20.5,125,10.1]],[3,[187.9,28.5,209.2,25.3,207.2,13.6]],[3,[207.7,25.5,208.7,31.7,201.8,32.7,200.9,26.5]]]"),xx=[[115.1,202.8,133.8,200,132.6,193.1,132.7,191.1,134,187,135.2,173.7,136.6,173.4,137.6,171.6,138.7,168.4,139.1,165.3,139,162.5,137.8,157.5,136.6,154.9,134.8,152.1,132.6,149.6,128.3,145.5,123.6,141.8,118.9,142.5,117.1,141.7,116,139.9,114.4,128.4,119.6,113.5,123.1,101.7,123.8,97.7,124.4,91.8,124.1,85.7,123,76.8,120.6,67.9,118.1,60.9,108.5,40.7,96.1,47.6,91.7,39.9,81.1,45.6,81.5,46.4,81.1,46.6,99.3,79.1,101,83.3,102.3,87.9,103.1,94.9,103,98.3,102.5,103.5,100,115.9,99.7,123.7,100.1,129.2,102,141.8,102.6,158.8,103.5,169.8,105.2,173.8,106,179.9,112.2,191.6,114.2,196.4,115.1,202.8],[152,32.8,150.7,25.4,150.1,24.4,149,23.9,145.7,23.9,141.3,25.3,139.6,26.2,138.1,28.3,138.2,29.9,140.2,31.2,140.7,32.7,146.4,37.1,148.6,36.8,151.3,35.3,152,32.8],[41.5,130,40,129.9,39.2,130.6,39.1,131.6,39.6,132.5,40.5,132.9,41.9,132.3,42.1,130.8,41.5,130]],_x=[[87.4,42.2,110.1,83.6,111.1,86.1,111.4,88.7,111.1,104,108.6,120.6,108,127.2,110.2,145,121.1,187.4],[121.1,187.4,124.7,201.4],[121.1,187.4,131.2,200.4],[62.5,-28.5,87.1,-6.4,90.4,-1.1,92.2,4.8,92,26.9,95.1,33.2],[102.2,44.2,108.9,65.6,111.1,86.1],[95.1,33.2,102.2,44.2],[62.5,-28.5,78.4,25.8,85.4,38.5],[85.4,38.5,87.4,42.2]],vx={22795194:[63.3,18.7,101.7,12.9],22964328:[98.9,137,121.1,133.7,122.3,133.5]},Mx=JSON.parse('[{"l":1,"p":[62.2,150.1,64,161.3,70.3,160.3,68.5,149.1,62.2,150.1]},{"l":0,"p":[77.9,167.3,78.7,173.9,74.5,174.4,73.7,168,67.9,168.8,68.4,171.9,69.3,171.8,69.8,172.6,69.5,173,68.6,173.2,69.1,176.7,63.2,177.6,61.2,164.7,81.6,161.8,82.3,166.7,80,167,80.2,167.9,79,168.1,78.9,167.2,77.9,167.3]},{"l":1,"p":[12.8,183.6,12.4,182.3,12.1,179.2,11.9,179.2,11.4,174.5,10.1,174.7,9.9,173.2,8,173.5,6.1,161.1,6.5,161.1,6.7,162.1,14.7,160.8,15.2,160.9,15.3,161.8,19.3,161.3,19.7,164,19.9,164.1,19.7,164.2,19.9,165.5,20.1,165.5,20,165.7,20.2,167,20.4,167,20.2,167.2,20.4,168.6,20.6,168.5,20.5,169.1,21.8,168.9,22.4,172.9,21.1,173.1,21.5,173.3,21.6,174.2,21.2,174.2,21.5,174.6,21.3,174.6,21.5,176,21.7,176,21.5,176.2,22,177.7,21.8,177.7,22,179.1,22.2,179,22.6,183,24.3,182.7,25.1,187.6,11.9,189.5,11.2,184.6,12.9,184.4,12.6,183.8,12.8,183.6]},{"l":4,"p":[85.5,150,84.6,144.4,81.2,144.9,81,144.6,80,144.7,79.9,145.1,75.5,145.6,74.7,146,74.4,147.1,74.7,147.8,75.4,151.8,75.1,152,75.3,153.1,75.6,153.2,76.2,157.2,75.9,158.2,76.3,159,77.5,159.4,78.4,158.9,82,158.4,80.9,150.8,81.8,150.6,82.3,150.9,84.4,150.6,84.8,150.2,85.5,150]},{"l":0,"p":[5.4,156.5,10.5,189.8,-4,192,-9.3,157.6,5.2,155.5,5.4,156.5]},{"l":0,"p":[23.2,126.5,23.1,125.5,15.2,126.7,15.2,126.4,11.1,127,13.8,144.5,17.9,143.8,17.6,142.5,28.7,140.9,28,137.3,24.9,137.7,24.7,135.8,24.4,135.8,23.2,126.5]},{"l":0,"p":[33.8,135,33.7,134.3,34.4,134.2,33.9,130.5,33.1,130.6,33,128.4,32.5,128.5,31.8,123.7,23,125,24.1,132,23.8,132.1,24.4,135.8,24.7,135.8,24.9,137.7,28,137.3,28.9,142.3,34.5,141.5,33.8,135]},{"l":1,"p":[40.5,152.9,42.4,164.9,44.4,164.6,42.4,152.6,40.5,152.9]},{"l":0,"p":[86.7,115.4,86.7,115,90.5,114.4,91.6,121.4,92,121.3,92.2,122.5,94.7,120.7,95.1,121.2,96.4,124.3,96.3,127.4,96.9,131.1,94.4,131.4,94.6,132.1,90.5,132.9,86,133.3,77.1,134.8,74.9,120.5,76,120.3,75.8,119,76.5,118.9,76.2,116.6,86.2,115.1,86.2,115.5,86.7,115.4]},{"l":0,"p":[88.1,157.4,88.1,157,88.7,156.3,90.7,156,90.1,152.1,85.9,152.8,84.7,144.5,94.8,142.9,95.4,143,96,145,96.3,145,96.7,147.8,96.4,147.8,97.4,155.7,97,156.1,88.1,157.4]},{"l":4,"p":[21.1,154,22.1,160.4,21.2,160.6,20,160,16.6,160.5,15.7,160.9,14.7,160.8,6.7,162.1,6.5,161.1,6.1,161.1,5.6,157.9,6,157.8,5.8,156.3,21.1,154]},{"l":0,"p":[-2,129.2,-14,131.1,-11.9,144.3,-11.2,144.2,-10.9,145.6,-11.4,145.8,-11.6,146.3,-11.3,146.8,-10.7,146.9,-10.5,148.2,0.7,146.5,-2,129.2]},{"l":0,"p":[11.1,127.1,-2,129.1,0.7,146.5,13.8,144.5,11.1,127.1]},{"l":0,"p":[26.9,150.1,26.8,149.5,31.3,148.8,31.4,149.4,26.9,150.1]},{"l":0,"p":[18.4,147.1,18.5,147.6,23,146.9,22.9,146.4,18.4,147.1]},{"l":2,"p":[171,159.7,167.3,163,169.1,164.9,168.7,165.2,170.2,166.7,170.5,166.5,172.4,168.6,176.1,165.1,171,159.7]},{"l":6,"p":[203.2,144.4,203.6,144.4,205.8,160.9,193.1,162.8,191.7,153.1,195.2,152.6,195.7,155.8,193.6,156.1,194,158.3,198.4,157.7,198.3,157,199,156.9,199.1,157.5,200.3,157.3,199.8,153.7,199.4,153.7,198.9,150.6,198.4,150.6,198.3,149.8,191.3,150.8,190.7,146.3,203.2,144.4]},{"l":1,"p":[146.8,137.5,149.6,137.1,150.1,140.5,147.3,140.9,146.8,137.5]},{"l":7,"p":[177.9,148.2,180.3,164.7,193.1,162.8,190.7,146.3,177.9,148.2]},{"l":8,"p":[175.3,131,177.9,148.2,190.7,146.3,188.1,129.1,175.3,131]},{"l":8,"p":[188.1,129.1,200.6,127.3,203.2,144.4,190.7,146.3,188.1,129.1]},{"l":0,"p":[152.6,159.5,152.2,159.8,150.2,157.7,150.7,157.4,152.6,159.5]},{"l":0,"p":[165.5,163.5,165.1,163.8,163.1,161.7,163.5,161.4,165.5,163.5]},{"l":0,"p":[150.6,146.4,152.5,148.5,152.1,148.9,150.2,146.8,150.6,146.4]},{"l":7,"p":[217.3,124.9,216.7,125,216.6,124.7,204.9,126.6,207.6,143.4,219.8,141.4,217.3,124.9]},{"l":3,"p":[161.6,132.8,170.9,131.5,173.4,148.5,164.1,149.8,163.2,143.7,165.3,143.4,165.7,146.1,167.9,145.8,166.6,136.9,162.3,137.5,161.6,132.8]},{"l":0,"p":[96.1,47.6,90.3,37.3,103.2,30.2,108.9,40.5,96.1,47.6]},{"l":0,"p":[16.5,23.9,2,26.3,-1.6,3.9,-0.2,3.7,-0.3,3.2,1.6,2.9,1.7,3.4,6.7,2.6,6.9,4.4,13.2,3.4,14.6,12.1,15.9,11.9,17,19,15.7,19.2,16.5,23.9]},{"l":1,"p":[36.4,62.8,38.1,62.6,39,68.6,35.5,69.1,34.6,63,36.4,62.8]},{"l":0,"p":[38.6,6.9,41.9,6.4,42.1,7.8,42.8,7.7,44.9,19.6,20.2,23.4,17.2,4.5,21.9,3.8,21.7,2.7,34.3,0.7,34.7,3.3,35.9,3.1,36.2,5,38.3,4.7,38.6,6.9]},{"l":5,"p":[50.1,48.5,51.2,48.6,51.7,49,63.2,42.2,61.4,39.4,62.2,39.2,65.9,36.8,69.6,42.3,68.8,42.8,69.2,43.4,50.9,54.7,50.1,48.5]},{"l":0,"p":[46,62.2,48,73.8,58.8,72.3,58.3,69.1,53.6,69.8,53.4,68.5,54.7,67.9,54.3,66.8,53.1,66.7,52.7,64.1,53.6,63.7,53.6,62.1,52,61.3,46,62.2]},{"l":0,"p":[54,28.5,54.6,31.1,55.4,31.4,56.2,31.2,56.8,30.7,56.9,28.1,54,28.5]},{"l":5,"p":[61.7,39.2,61.7,38.6,56.8,30.7,56.9,28.1,62.9,26.9,72,40.8,69.6,42.3,65.9,36.8,61.7,39.2]},{"l":5,"p":[69.6,42.3,72.5,40.5,85.2,60.5,81.5,62.8,68.8,42.8,69.6,42.3]},{"l":0,"p":[76.7,105.1,77.1,108.1,85,107,82.9,93,75,94.2,75.5,98.5,73.5,98.8,74.4,104.3,76.4,104,76.7,105.1]},{"l":0,"p":[113.6,18.1,114.6,25.4,113.5,25.6,112.4,25.4,111.4,24.8,110.7,23.8,110.3,21.4,101.9,22.5,101,17.1,109.5,15.5,109.6,16.1,111.8,16.2,112.8,16.8,113.6,18.1]},{"l":6,"p":[18.6,40.5,19.1,44.3,19.7,44.2,20.8,51.1,20.1,51.2,24,76.4,17.4,77.4,17.1,75.4,14.3,75.8,14.4,76.4,8,77.3,5.9,63.8,12.3,62.8,12.5,64,15.1,63.6,12,43.4,12.6,43.3,12.3,41.5,18.6,40.5]},{"l":0,"p":[-7.5,21.4,-7.9,18.9,-9.8,19.1,-10.6,14.1,-8.7,13.6,-9.5,8.9,-11.4,9,-12.2,4.1,-10.3,3.7,-11,-0.3,-14.6,0.2,-14.5,0.9,-16.4,1.2,-16.3,1.8,-19.8,2.4,-19.9,1.8,-21.9,2.1,-22.1,1.4,-23.5,1.6,-24.3,-2.7,-8.7,-5.1,-8.9,-6,-7.7,-6.2,-7.6,-5.3,-7.2,-5.4,-3.1,20.9,-1,20.7,-0.8,21.7,0.9,21.5,1.6,26.4,-19.1,29.6,-20.1,24.7,-19.6,24.6,-19.7,23.7,-16.3,23.3,-16.5,22.5,-13.3,22,-13.2,22.8,-6.5,21.6,-6.5,21.2,-7.5,21.4]},{"l":0,"p":[-7.8,80.8,-6.4,80.6,-6.3,81,-4.6,80.8,-4.7,80.3,-3.7,80.1,-3.6,80.7,2.9,79.7,2.1,74.6,-4,75.5,-5,69.4,-9.5,70.1,-8.5,76.6,-9.1,76.7,-8.7,79.4,-8,79.3,-7.8,80.8]},{"l":0,"p":[-1.5,35,-3.6,35.1,-3.9,35.3,-10.4,36.2,-15.6,37.2,-16,37,-16.7,37.4,-15.9,42.1,13.6,37.4,14.2,41.2,18.6,40.5,17,30.7,16.7,30.4,13,31,12.7,31.2,12.8,31.8,2.2,33.5,1.9,33.7,2,34.4,-1.2,34.7,-1.5,35]},{"l":2,"p":[79.9,80.9,85.3,80.1,84.1,71.9,78.7,72.7,79.9,80.9]},{"l":0,"p":[71,116.9,67.8,117.3,67.4,114.1,70.6,113.7,71,116.9]},{"l":0,"p":[7.8,116.7,8.4,116.6,7,108.1,12.1,107.3,13.4,115.4,14.6,115.2,15.5,121,10,121.9,9.3,122.5,8.5,122.2,0,123.5,-0.9,117.7,2.5,117,5.2,116.7,5.2,117.1,7.4,116.4,7.8,116.7]},{"l":0,"p":[7,89.7,6.2,90.5,5.4,90,1.4,90.5,1.5,91.2,0.3,91.3,0.6,93.4,1,93.3,1.1,94,0.8,94.1,1,95.9,11.4,94.3,12.1,98.9,-1.3,100.9,-1.1,102.4,-3.3,102.7,-5.7,86.5,3.9,85.1,4.5,84.4,5.3,84.8,9.8,84.2,10.6,89.2,7.9,89.6,7.5,89.9,7,89.7]},{"l":0,"p":[-2.9,104.9,0.1,123.7,-2.8,124.1,-2.8,124.4,-3.9,124.6,-3.9,124.3,-6.5,124.7,-6.5,125,-7.9,125.3,-7.9,124.9,-12.7,125.7,-12.7,126,-13.8,126.2,-13.8,125.9,-15.3,125.9,-15.6,125.4,-18.6,107.3,-2.9,104.9]},{"l":0,"p":[66.5,109.4,66.8,111.3,61.6,112,61.9,114,58.1,114.5,57.8,112.6,54.7,113.1,54.1,109.3,57.2,108.9,56.9,107,60.8,106.4,61.1,108.3,66.2,107.5,66.5,109.4]},{"l":0,"p":[9.9,84.8,25.7,82.3,28.3,99.9,12.6,102.3,9.9,84.8]},{"l":5,"p":[50.1,48.5,50.9,54.7,45,55.7,40.2,24.1,63.5,20.6,64.3,26.7,47.2,29.5,50.1,48.5]},{"l":0,"p":[69.7,76.1,74.4,75.5,73.3,73.6,73.4,71.9,69.6,72.4,70.1,74,69.7,76.1]},{"l":0,"p":[32.6,65.9,32,66.3,31.2,66.3,30.5,65.5,30.6,64.7,31.1,64.2,32.2,64.2,32.8,65.2,32.6,65.9]},{"l":0,"p":[16.5,23.9,16.4,23.1,20.1,22.5,20.2,23.3,16.5,23.9]},{"l":0,"p":[41.9,6.4,41.5,6.1,41.2,4.4,55.1,2.1,55,1.1,55.5,1,54.8,-3,57.2,-3.4,57.3,-2.7,61.7,-2.6,61.7,-2,64.6,-2,68.1,15.7,44.9,19.6,43.4,10,43.1,10,42.8,7.7,42.1,7.8,41.9,6.4]},{"l":0,"p":[85.7,77.4,88.7,77.3,88.8,80.3,85.8,80.4,85.7,77.4]},{"l":1,"p":[51.4,85.8,51.1,86.5,50.2,86.4,49.9,84.9,50.1,84.3,51.1,84.3,51.4,85.8]},{"l":1,"p":[10.8,90.6,8.4,91,8.8,93.3,11.2,93,10.8,90.6]},{"l":1,"p":[1.9,74.6,1.6,72.9,0.8,73,1.1,74.7,1.9,74.6]},{"l":1,"p":[131.9,116.3,130.8,122.1,128.4,125.7,120.5,127.6,119.8,125.4,119.7,123.6,120,121.4,121,119,120.3,118.6,121,117.6,120.4,117.1,120.9,116.5,124.2,114.2,127.8,113.5,127.9,115.2,130.8,115.8,131.9,116.3]},{"l":0,"p":[167.7,80.7,171.2,80.2,169.5,68.3,165.9,68.8,167.7,80.7]},{"l":0,"p":[179.2,73.4,178.3,67.5,177,67.7,176.8,66.2,171.9,67,172.3,69.4,175.2,68.9,176,73.9,179.2,73.4]},{"l":10,"p":[210,74.3,222.7,72.4,220.7,59.8,213.7,60.8,214.8,68.1,209.2,69,210,74.3]},{"l":3,"p":[172.1,80.2,171.2,74.6,179.2,73.4,180.1,78.9,172.1,80.2]},{"l":0,"p":[180,78.5,192.8,76.5,191.4,67.8,191,67.9,190.5,64.3,186,65,186.5,68.7,181.5,69.4,181,66.2,178.2,66.7,180,78.5]},{"l":2,"p":[206.1,106.4,204.9,97.6,200.5,98.2,201.8,107,206.1,106.4]},{"l":8,"p":[218.9,93.8,223.3,93.1,221.2,80.1,201.7,83.1,204,97.7,207.8,97.1,206.3,87.9,217.7,86.2,218.9,93.8]},{"l":7,"p":[186.4,118.5,199.1,116.6,196.3,98.7,191.1,99.5,192.2,106.9,188.8,107.4,189.4,111.1,188.5,111.2,187.3,103.3,188.2,103.2,187.7,100.1,183.6,100.7,186.4,118.5]},{"l":9,"p":[191.1,99.5,196.3,98.7,194,83.5,191.4,83.9,191.5,84.5,191.2,84.5,191.9,89.4,190.4,89.6,190.9,93,190.1,93.1,191.1,99.5]},{"l":7,"p":[171.3,102.6,174,120.4,186.4,118.5,183.6,100.7,171.3,102.6]},{"l":0,"p":[174.4,84.2,168.5,85.1,171.3,102.6,183.6,100.7,183,96.5,175.4,97.7,174.2,89.9,175.2,89.7,174.4,84.2]},{"l":6,"p":[175.2,89.7,180.5,88.9,179.7,83.4,174.4,84.2,175.2,89.7]},{"l":3,"p":[206.1,106.4,206.6,109.2,214.9,107.9,215.9,113.9,203.2,115.9,201.8,107,206.1,106.4]},{"l":7,"p":[214.9,107.9,213.3,96.2,223.6,94.9,223.7,95.8,226.1,95.5,227.2,97.1,228.3,100.2,228.7,104,228.5,106,227.9,107.4,228.6,111.9,215.9,113.9,214.9,107.9]},{"l":0,"p":[212.9,117.7,213,118.3,210.3,118.7,210.2,118.1,212.9,117.7]},{"l":8,"p":[191.2,84.5,181.4,86,182.1,90.9,191.9,89.4,191.2,84.5]},{"l":1,"p":[183,96.5,182.7,94.8,184.7,94.5,185.6,100.4,183.6,100.7,183,96.5]},{"l":5,"p":[146.8,19.3,153.7,18.3,152.1,7.5,145.2,8.5,146.8,19.3]},{"l":0,"p":[113.7,37.1,115.5,40.1,119.7,37.8,118,34.7,113.7,37.1]},{"l":0,"p":[129,21.2,127.9,13.8,130,13.5,129.7,11.8,135.5,10.9,135.8,12.7,140.4,11.9,141.6,18.8,137.6,19.4,137.9,21.2,132.2,22.1,132,20.8,129,21.2]},{"l":3,"p":[168.2,17.6,170.9,17.1,174,19.4,162.6,33.8,161.1,33.9,160,33.1,157.9,20.1,162.7,19.3,163.4,24.7,164.3,24.7,168.3,19.2,168.2,17.6]},{"l":0,"p":[170.9,31.2,174.2,33.7,171.6,37,171.7,37.7,182.1,36,181.4,31.5,186,30.9,187.3,39.1,186.9,39.7,168.3,42.5,167.6,42,166.9,36.8,170.9,31.2]},{"l":10,"p":[166.1,67.9,171.1,67.2,169.2,54.5,164.2,55.2,166.1,67.9]},{"l":0,"p":[161.7,58.3,163.4,68.5,160.5,68.9,158.8,58.8,161.7,58.3]},{"l":0,"p":[107.8,22,108,23,106,23.3,105.9,22.2,107.8,22]},{"l":0,"p":[171.5,31,173.4,32.3,174.6,30.5,172.7,29.2,171.5,31]},{"l":12,"p":[195.2,36.6,200.8,35.8,199.7,27.7,194,28.6,195.2,36.6]},{"l":0,"p":[174.2,26.6,179.4,19.7,184.2,19,185.8,29.1,181.5,29.9,180.7,24.2,179.6,24.4,179.8,26.4,177.6,29.4,174.2,26.6]},{"l":8,"p":[172.8,15.2,175.5,15,175.4,14.4,177.5,14.2,177.3,12.8,179.8,12.4,178.5,3.5,168.8,5,169.2,7.9,171.7,7.6,172.8,15.2]},{"l":1,"p":[211.6,24.5,214,24.2,211.9,10.9,209.5,11.3,211.6,24.5]},{"l":12,"p":[210.9,34.3,216.5,33.4,215.3,25.4,209.7,26.2,210.9,34.3]},{"l":0,"p":[189.1,24.5,187.6,14.7,187.2,14.7,186.5,10.5,191.3,9.8,191.9,13.8,199.5,12.6,200.2,17.2,192.8,18.3,193.7,24,189.1,24.5]},{"l":1,"p":[200.6,35.8,200.9,37.4,211.4,35.9,210.7,32.5,200.6,34,200.6,35.8]},{"l":1,"p":[194.9,24.1,195.2,25.8,202.2,24.7,201.4,20.1,199.5,20.4,199.8,22.4,199.1,23.4,194.9,24.1]},{"l":7,"p":[207.6,53.4,213.9,52.5,214.9,59.4,213.5,59.6,213.7,60.8,220.7,59.8,218.8,47.1,207,48.8,207.6,53.4]},{"l":8,"p":[174.6,54.1,187.4,52,188.2,56.8,175.4,58.9,174.6,54.1]},{"l":8,"p":[193.4,51.6,193.9,55.5,205.5,53.6,205,49.9,193.4,51.6]},{"l":0,"p":[177.2,14.2,173.6,19.1,170.9,17.1,170.5,17.1,170.3,14.7,172.7,14.3,172.8,15.2,175.5,15,175.4,14.4,177.2,14.2]},{"l":0,"p":[170.8,54.4,171.5,59.3,172.8,59.2,172.2,54.2,170.8,54.4]}]'),yx=[{w:0,p:[97.6,142.4,102,141.8,102.6,158.8,99.2,159.2,97.6,142.4]},{w:0,p:[131.6,139.8,128.9,141.6,129.5,141.9,131.7,145.7,136.5,151,139.3,156.2,145.1,170,146.9,171.6,148.8,171.3,148.9,169.4,154.2,168.5,154.2,167.9,152.9,167.3,152.3,167.6,148,162.8,148.5,162.5,148.2,161.4,149,160.5,142.7,154.4,135.1,142.8,131.6,139.8]},{w:0,p:[131.6,139.8,129.7,139,127.5,138.9,127.4,138,116,139.9,117.1,141.7,118.9,142.5,123.6,141.8,128.3,145.5,134.8,152.1,137.8,157.5,138.5,160.1,139.1,165.3,138.7,168.4,141.5,168.9,142.2,173.9,142.7,174.3,147.4,174.3,158.6,172.6,158.3,169.8,156.5,170,156.3,168.1,142.7,154.4,135.1,142.8,131.6,139.8]},{w:0,p:[100.4,131.3,99.7,123.7,100,115.9,102.5,103.5,103.1,96.6,102.8,91.3,101,83.3,99.3,79.1,72.6,30.9,70,25.2,69.4,21.9,63.9,22.7,64.4,26.8,63,27.1,72,41,72.6,40.6,85.1,60.4,81.2,62.7,74.3,64.9,64.7,49.5,45.9,60.6,46.2,62.6,53.1,61.5,59.7,71.9,64.4,71.2,65,75,48.5,77.6,54.9,119.2,76.3,115.9,78.2,111.9,97.5,108.9,96.4,118.9,96.9,128.7,97.4,131.7,100.4,131.3]},{w:0,p:[95.3,99.1,98.1,100.8,99.7,100.6,101.5,99.5,101.2,101.1,100.8,101.1,99.8,106.6,100.2,106.7,99.4,108.1,98.4,107.8,95.3,99.1]},{w:0,p:[94.5,98.3,95.5,98.1,96.4,96.5,98.1,95.4,99.9,95.3,101.6,96.1,100.3,87.8,100.6,87.7,99.7,84.4,98.2,81,97.6,81.2,96.5,78.9,97.1,78.6,95.6,75.9,95.8,75.8,94.5,74,94.1,74.3,93.6,79.1,92.1,83.6,90.2,87,87.5,90.4,92.6,95.6,94.5,98.3]},{w:0,p:[79,14,80.5,15.9,84.6,15.8,87.4,8.4,85.4,-.1,82.6,-4.2,81.5,-4.2,81.3,-2,79.5,3.6,78.9,10,79,14]},{w:0,p:[96.7,119.2,94.4,119.6,94.7,120.7,94.1,121.1,92.8,110.9,97.1,110.3,97.9,110.5,98.4,113.6,98.2,118.7,96.7,118.9,96.7,119.2]},{w:0,p:[76.2,116.6,74.9,117.2,74.7,119.2,76.5,118.9,76.2,116.6]},{w:0,p:[71.5,110.4,72.7,117.1,75,115.1,77.9,110.5,77.8,109.5,71.5,110.4]},{w:0,p:[89.2,97.3,89.2,94.6,87.3,92.3,85.4,91.7,84.5,92.7,87.6,108.8,89.2,103.1,89.2,101.9,88.6,102,88,97.5,89.2,97.3]},{w:0,p:[90.8,96,90.4,96.3,90.4,98.6,91,99,92.8,98.6,92.6,97.8,90.8,96]},{w:0,p:[89.8,110.4,89.1,109.6,90.2,104,90.2,100.2,93.4,99.4,96,103.9,97.2,109,89.8,110.4]},{w:0,p:[64.7,73.1,64.4,71.2,59.7,71.9,53.1,61.5,46.2,62.6,45.9,60.6,64.7,49.5,74.3,64.9,76.4,64.2,80.8,70.9,64.7,73.1]},{w:0,p:[80.8,70.9,77.6,71.4,79,81,81,80.7,85.4,110.8,97.5,108.9,96.4,118.9,96.9,128.7,97.4,131.7,100.4,131.3,99.7,123.7,100,115.9,102.5,103.5,103.1,96.6,102.8,91.3,101,83.3,99.3,79.1,88,58.6,81.2,62.7,76.4,64.2,80.8,70.9]},{w:0,p:[65,75,66.9,86.8,67.6,86.7,70.1,102.5,52.7,105.1,48.5,77.6,65,75]},{w:0,p:[73.5,92.2,73.1,89.7,74,88.5,81.3,87.4,82.4,87.9,82.9,90.8,73.5,92.2]},{w:0,p:[83.8,80.4,84.4,84.4,83.4,84.5,84.1,89.4,85.5,89.9,86.5,89.4,89.7,85.6,91.2,82.2,92.6,77.2,92.8,71.1,92.2,69.5,91.8,69.6,88.7,63.3,87,62.1,78.2,67,81.6,72.3,84.1,71.9,85.3,80.1,83.8,80.4]},{w:0,p:[80.4,72.5,81.6,72.3,77.4,65.8,73.2,68.4,72.7,69.1,72.9,70.1,75.7,72,76.7,71.9,77.2,70.8,79.1,70.5,80.4,72.5]},{w:0,p:[79.9,80.9,78.7,72.7,77.6,72.9,76.9,74.1,78,81.7,78.4,82.1,79.9,82.1,79.9,80.9]},{w:0,p:[80.1,83.1,81.5,82.8,81.8,84.3,80.3,84.5,80.1,83.1]},{w:0,p:[74.2,72,73.7,72.2,74.1,74.3,74.7,74.9,75.9,74.7,75.6,73.2,74.2,72]},{w:0,p:[68.1,75.9,69.5,75.4,69.4,72.1,72.5,71.5,72.6,70.8,70.7,69.9,68.9,71,67.7,73.7,68.1,75.9]},{w:0,p:[61.2,75.2,48.4,77.1,48.4,78.1,48.8,79,54.2,82.4,56.8,82.1,61.3,75.9,61.2,75.2]},{w:0,p:[59.2,80.3,58.7,81.8,67.3,80.6,66.6,74.6,63.1,75.1,59.2,80.3]},{w:0,p:[66.2,91.3,68.3,91,68.9,90.3,67.6,83.2,65,83.6,66.2,91.3]},{w:0,p:[57.6,85.6,58.4,90.6,63.5,89.9,62.7,84.8,57.6,85.6]},{w:0,p:[50.4,90.4,50.9,90.5,54.9,85.2,54.9,84,48.9,80.1,49.5,84.5,50.7,84,51.4,84.7,51.3,86.5,49.8,86.5,50.4,90.4]},{w:0,p:[51,94.2,56.3,93.4,55.3,86.5,50.7,92.2,51,94.2]},{w:0,p:[52.5,103.9,57.8,103.1,56.5,94.4,51.2,95.1,51.5,97.4,52.7,97.3,53.2,100,52,100.2,52.5,103.9]},{w:0,p:[74.4,104.3,76.4,104,77.1,108.1,77.6,108.1,77.7,108.8,75.1,109.2,74.4,104.3]},{w:0,p:[75,94.3,72.9,94.7,73.5,98.8,75.5,98.5,75,94.3]},{w:0,p:[65.9,101.9,58.7,102.8,57.7,94.3,65.8,93,67.5,93.5,68.1,94.2,68.9,99.5,65.6,100,65.9,101.9]},{w:0,p:[59.3,104,59.2,105.8,62,105.4,62.1,106.3,60.8,106.5,61.1,108.3,66.2,107.5,66.8,111.3,66,111.4,66.2,112.2,67.9,110.5,70.3,109.4,69.6,104.5,66.4,105,66.1,102.9,59.3,104]},{w:0,p:[54.1,109.6,53.4,109.6,52.7,105.1,57.9,104.3,57.9,106.8,56.9,107,57.2,108.9,54.1,109.6]},{w:0,p:[60.8,114.1,60.9,114.9,64.1,113.5,65.2,112.3,65,111.5,61.6,112,61.9,114,60.8,114.1]},{w:0,p:[59.1,114.4,59.2,115.1,58.2,115,55.5,113.5,55.4,113,57.8,112.6,58.1,114.5,59.1,114.4]},{w:0,p:[41.6,92.9,42.1,96,47.4,95.2,47,92.1,41.6,92.9]},{w:0,p:[35.4,93.9,35.8,96.5,40.1,95.9,39.7,93.3,35.4,93.9]},{w:0,p:[-5.9,35.7,-5.7,35,1.1,34.2,1.2,34.6,-5.9,35.7]},{w:0,p:[-6.1,49.6,-5.9,51.2,-3.7,50.9,-.4,68.7,1.1,68.5,-2.7,43.8,-14.3,45.7,-14,48.1,-5.1,46.8,-5.5,44.6,-3,44.2,-2.6,46.8,-6.4,47.4,-6.1,49.6]},{w:0,p:[159,53.5,158.8,58.8,160.5,69.3,162.5,69,163.4,74.8,164.5,75.3,164.2,80.3,163.5,81.1,152.5,82.6,152.7,84.2,144.8,85.2,141.8,84.8,140.5,86,139.8,87.4,143.9,114,141.7,121.1,137,124.2,134.8,124.5,134.2,123.5,134.3,122.8,135,120.9,136,120,133.6,119.5,133.1,116.1,127.9,115.2,127.8,113.5,126.8,113.5,123,114.8,120.4,117.1,121,117.6,120.3,118.6,121,119,120.2,120.7,119.3,120.7,119,124.4,115.8,124.5,123.1,101.7,124.4,91.8,124.1,85.7,123,76.8,120.6,67.9,118.1,60.9,108.5,40.7,108.9,40.5,108.3,39.3,124,30.8,131,37.3,135.9,40.9,142.9,45,151,48.7,154.6,52.4,158.1,52.5,159,53.5]},{w:0,p:[133.7,32.4,127.2,26.3,127.9,25.3,130.6,23.9,140.8,21.9,151.6,20.3,154.9,20.4,156.2,21.7,159.4,38.3,157,38.7,158.1,44.6,145.6,40.4,139.1,36.5,133.7,32.4]},{w:0,p:[144.3,45.6,140.6,53.8,144.6,57.8,145.7,58.1,151,54.2,153.1,51.2,152.7,50.2,151,48.7,144.3,45.6]},{w:0,p:[123,46.3,121,56,125.8,59.1,126.9,59.3,123.8,46.8,123.6,46.2,123,46.3]},{w:0,p:[134.5,49.9,138.9,54,138.1,55.2,135.8,56.5,134.1,50.3,134.5,49.9]},{w:0,p:[113.9,42.4,112.9,43.2,112.6,44.3,112.9,45.6,118.2,55.2,119.7,55,120.4,53.4,122.6,41.8,121.5,38.3,113.9,42.4]},{w:0,p:[135.9,40.9,134.1,41.7,134,47,135.1,48.9,135.9,49.6,136.5,48.9,137.3,49.5,136.7,50.3,139.5,52.4,142.9,45,135.9,40.9]},{w:0,p:[133.1,116.1,133.2,96.8,133.3,96.1,133.7,96.1,140.7,103.3,140.8,104.1,134.2,119.3,133.6,119.5,133.3,119,133.1,116.1]},{w:0,p:[130.3,115.4,130.6,114.9,125,106.9,124.1,107.1,119.5,118,119.3,120.7,120.2,120.7,121,119,120.3,118.6,121,117.6,120.4,117.1,124.2,114.2,127.8,113.5,127.9,115.2,130.3,115.4]},{w:0,p:[133.9,59,129.8,60,129.5,61,132.1,71.1,133.8,83.2,139.9,79.4,140.1,78.5,134.5,59.7,133.9,59]},{w:0,p:[124.4,42.7,128.2,58.1,128.7,58.9,129.2,58.9,132.8,57.5,133.5,57.1,133.5,56.3,131.9,44,126.2,36,123,37.5,124.4,42.7]},{w:0,p:[141.8,84.8,141.7,83.6,140.8,82.5,138.6,82,134.8,84.9,134.4,85.8,133.9,94.2,140.4,101.7,141.9,100.9,139.8,87.4,141.8,84.8]},{w:0,p:[139.8,55.2,136.6,57.1,136.1,57.9,141.9,78.1,142.6,78.9,143.4,78.9,144.4,77.4,144.3,67,145.3,60.8,140.4,55.3,139.8,55.2]},{w:0,p:[128,91.3,131.9,94.2,131.3,113.1,130.8,113,125.4,105.1,126.3,101.5,126.8,101.5,127.8,95,127.2,94.7,127.3,91.8,128,91.3]},{w:0,p:[120.5,57.5,120.4,58.6,121.3,60.9,121.8,60.7,124.6,68.2,124.2,69.1,126.6,76.9,127.7,84.2,127,84.8,127.3,88.8,127.5,89.5,128.2,89.7,131.8,86.5,131.8,84.9,130.5,75.3,127.6,61.7,127.2,61.1,120.5,57.5]},{w:0,p:[135.3,120.9,138.8,122.8,137,124.2,134.8,124.5,134.2,123.5,135,120.9,135.3,120.9]},{w:0,p:[140.9,107.4,135.4,120,139.5,122.1,142.2,118.6,143.9,114,142.9,107.7,141.7,107.1,140.9,107.4]},{w:0,p:[132.5,87.2,132.3,92.9,128.8,90.6,128.7,90,132.5,87.2]},{w:0,p:[128.2,35.2,127.8,35.5,127.9,36.6,131.4,41.4,132,41.5,133.3,39,128.8,35.1,128.2,35.2]},{w:0,p:[146,82.2,144.1,82.7,144.1,83.7,144.5,83.9,161.3,81.6,161.6,80.5,159.7,80.1,146,82.2]},{w:0,p:[160.2,79.1,164.4,78.3,164.5,75.3,163.4,74.8,162.5,69,160.5,69.3,158.8,58.8,158.7,54.9,156.6,54.5,160.2,79.1]}],Sx=[35.6,46.5,42.7,53,40.5,37.7,33.1,46.9,41.9,48.2,43,55,42.3,50.6,36.9,46.4,38.1,46.2,40.8,39.9,41.2,42.3,34.4,46.7,40.1,35.1,208.9,146.7,209.5,150.1,210.3,154.8,211,159.3,145,153.8,163.6,40.8,164.8,42.3,162.3,42.7,154.7,43.1,151.8,42.4,149.2,38.4,154,27.7,154.5,30.3,154.7,33.7,146.1,39.2,143.7,37.8,141.4,36.8,139.5,35.8,138.1,32,165.7,47.6,166,50.7,171.7,49.8,171.3,46.8,176.6,46,177,49,182.4,48.2,182,45.2,187.2,44.4,187.7,47.4,193,43.5,193.5,46.4,199.9,45.4,205.3,44.6,210.8,43.8,210,41,204.4,41.8,199.2,42.6,177.3,122.1,181.9,121.3,186.9,120.6,192,119.9,196.7,119.2,205.4,117.8,209.4,117.2,213.7,116.6,62.3,117.8,59.5,118,56.9,118.5,55.2,115.1,191,29.5,192.3,37.9,182,79.9,187.1,79,49.5,153.4,49.9,156.3,50.4,159,50.8,161.8,1.9,154.9,1,148.7,5.8,154.2,10.2,153.6,16.1,152.7,20.8,152,25.6,151.2,30.4,150.6,5.3,148,9.4,147.4,15.2,146.5,20,145.7,24.7,145,29.5,144.4,75.7,118.1,75.3,110.3,72.9,116.1,92.4,93.5,91.4,90.9,86.9,95.9,85.7,93,87.3,104.4,92.4,101.9,92.1,102.6,92.6,103.5,90.7,103.2,91.4,104.2,91.7,105.1,91,106.2,94.5,111.3,97.3,113.6,94.5,112.6,95.9,115.3,97.3,118.1,97.7,124,80.8,88.6,77.7,90.8,74.2,91.4,87.9,86.4,85.8,86,85.2,88.9,90.6,81.2,91.1,80.6,87.1,83.8,87.5,82.3,86.1,80.8,88.1,73.1,84.3,67.6,85.3,71.9,81.9,70.7,80,67.5,77.1,70.7,74.3,68.3,78.4,75,79.3,80.9,80.9,83.7,71.9,71,70.7,70.9,68.7,73.4,63.6,76.4,59.8,77,56,77.6,53.4,78,49.5,78.7,52,80.5,49.9,82.2,67.4,87.2,60.6,87.7,60.8,89.6,58.7,88,62.4,87.4,60.3,85.9,62.1,85.6,62.7,89.3,59,89.8,58.4,86.1,51.2,89,53.4,92.4,52.2,92.7,54,96.4,53.1,96.3,56.5,99.1,56.6,102.7,53.6,100.8,62.8,95.9,64.5,93.7,66.6,95.5,68,98.6,66.5,97.9,65.3,99.6,59.3,98.4,59.7,100.8,59.5,102,60.8,101.9,62.7,102.1,65.6,101.7,61.2,104.6,65.8,103.8,65.9,105.8,64,104,68.2,106.2,68.8,109.5,46.8,95,46.4,92.6,44.4,93.9,42.4,93.2,38.6,94.3,37.8,95.5,143.2,113,141.3,116.7,139.3,120.6,136.4,123.5,139.4,91.6,135.5,85.3,137.4,83.3,140,84.3,158.5,64,157.7,59,159.8,72.4,159.3,68.2,160.6,76.6,215.2,45.9,156.5,69.4,157.6,73.6,148.8,62.2,153.6,79.4,143.9,158,139.7,151.9,136.7,148.2,134.7,144.6,132.4,142.1,127.4,140,96.5,160.9,101.7,160.7,207.9,38.3,213.2,37.5,201.1,39.4,195.6,40.1],wx={loop:mx,streets:gx,water:xx,rivers:_x,bridges:vx,buildings:Mx,green:yx,trees:Sx},Be=wx,si=900,vc=1.4,Fh=14,Oh=se-.2,oi=se+.5,Ex=[4.3,3.6,2.9,1.8,2.1,1.1];function bx(i,t){const e=[];for(let a=0;a<i.length;a+=2)e.push({x:i[a],z:i[a+1]});const n=[0];for(let a=1;a<=e.length;a++){const c=e[a-1],l=e[a%e.length];n.push(n[a-1]+Math.hypot(l.x-c.x,l.z-c.z))}const s=n[n.length-1],r=[];let o=0;for(let a=0;a<t;a++){const c=a/t*s;for(;n[o+1]<c;)o++;const l=(c-n[o])/Math.max(1e-9,n[o+1]-n[o]),h=e[o],u=e[(o+1)%e.length];r.push({x:h.x+(u.x-h.x)*l,z:h.z+(u.z-h.z)*l})}return r}function Gr(i,t,e){let n=!1;for(let s=0,r=i.length-2;s<i.length;r=s,s+=2){const o=i[s],a=i[s+1],c=i[r],l=i[r+1];a>e!=l>e&&t<(c-o)*(e-a)/(l-a)+o&&(n=!n)}return n}function io(i,t,e,n,s,r){const o=s-e,a=r-n,c=o*o+a*a,l=c<1e-9?0:Math.max(0,Math.min(1,((i-e)*o+(t-n)*a)/c));return Math.hypot(i-(e+o*l),t-(n+a*l))}function Tx(i,t,e){let n=1/0;for(let s=0;s<i.length;s+=2){const r=(s+2)%i.length;n=Math.min(n,io(t,e,i[s],i[s+1],i[r],i[r+1]))}return n}function Wr(i,t=0){let e=1e9,n=-1e9,s=1e9,r=-1e9;for(let o=0;o<i.length;o+=2)e=Math.min(e,i[o]),n=Math.max(n,i[o]),s=Math.min(s,i[o+1]),r=Math.max(r,i[o+1]);return{i0:Math.max(0,Math.floor((e-t)*K)),i1:Math.min(it-1,Math.ceil((n+t)*K)),j0:Math.max(0,Math.floor((s-t)*K)),j1:Math.min(gt-1,Math.ceil((r+t)*K))}}let Bh=[];const Ax={id:"tampere",name:"Tampere · Hämeensilta",blurb:"Oikeaan paikkatietoon (OpenStreetMap) perustuva kierros keskustassa: Hämeensilta, Satakunnansilta, Tammerkoski, talot ja puistot.",playW:200,playH:150,maxElevation:vc+1,style:"city",conditions:Ni(fi,Es("riverdusk")),minGround:oi,centerline(){const i=bx(Be.loop,si);let t=0,e=1/0;i.forEach((o,a)=>{const c=(o.x-62)**2+(o.z-144)**2;c<e&&(e=c,t=a)});const n=i.reduce((o,a,c)=>o+Math.hypot(i[(c+1)%si].x-a.x,i[(c+1)%si].z-a.z),0),s=n/si,r=(o,a)=>i.reduce((c,l,h)=>(l.x-o)**2+(l.z-a)**2<(i[c].x-o)**2+(i[c].z-a)**2?h:c,0);return Bh=Object.values(Be.bridges).map(o=>{const a=(r(o[0],o[1])-t+si)%si*s,c=(r(o[o.length-2],o[o.length-1])-t+si)%si*s;return[Math.min(a,c),Math.max(a,c)]}),{pts:i,startIdx:t}},profile(i){let t=0;for(const[e,n]of Bh)t=Math.max(t,vc*Qt(e-Fh,e,i)*(1-Qt(n,n+Fh,i)));return{elev:t,feat:0,quiet:!0}},mines:[[.3,3],[.5,-3],[.9,2]],checkpoints:[0,.17,.33,.5,.67,.83],decorate:(i,t)=>Rx(i,t),preview(i,t,e){const n=(s,r=!0)=>{i.beginPath();for(let o=0;o<s.length;o+=2){const[a,c]=t({x:s[o],z:s[o+1]});o===0?i.moveTo(a,c):i.lineTo(a,c)}r&&i.closePath()};i.fillStyle="#d8d3c8",i.fillRect(-1e3,-1e3,4e3,4e3);for(const s of Be.green)i.fillStyle=s.w?"#7fae6f":"#a9d391",n(s.p),i.fill();i.fillStyle="#c9a98c";for(const s of Be.buildings)n(s.p),i.fill();i.fillStyle="#7fb3e6";for(const s of Be.water)n(s),i.fill();i.strokeStyle="#7fb3e6",i.lineWidth=6*e;for(const s of Be.rivers)n(s,!1),i.stroke()}};function Rx(i,t){const e={canopies:[],lamps:[]},n=rr(61497),s=(g,_)=>_*it+g,r=new Set([O.Asphalt,O.AsphaltLine,O.CheckA,O.CheckB,O.Pavement]),o=new Uint8Array(it*gt);for(let g=0;g<o.length;g++)r.has(i.mats[g])&&(o[g]=1);const a=(g,_)=>g<pt*K||_<pt*K||g>=it-pt*K||_>=gt-pt*K,c=(g,_,E,b)=>{const w=s(g,_);o[w]||a(g,_)||(i.heights[w]=Math.round(E*K),i.mats[w]=b)};for(let g=0;g<gt;g++)for(let _=0;_<it;_++)c(_,g,oi+Ze(_,g,8)*.12,O.Pavement);for(const g of Be.green){const _=Wr(g.p);for(let E=_.j0;E<=_.j1;E++)for(let b=_.i0;b<=_.i1;b++)Gr(g.p,(b+.5)*dt,(E+.5)*dt)&&c(b,E,oi+.05+Ze(b,E,9)*.1,g.w?O.ShadeGrass:O.Grass)}for(const[g,_]of Be.streets){const E=Ex[g]/2,b=g<=3?O.Asphalt:g===4?O.Pavement:O.Path;for(let w=0;w+3<_.length;w+=2){const A=_[w],y=_[w+1],S=_[w+2],R=_[w+3],N=Math.max(0,Math.floor((Math.min(A,S)-E)*K)),T=Math.min(it-1,Math.ceil((Math.max(A,S)+E)*K)),D=Math.max(0,Math.floor((Math.min(y,R)-E)*K)),I=Math.min(gt-1,Math.ceil((Math.max(y,R)+E)*K));for(let k=D;k<=I;k++)for(let W=N;W<=T;W++)io((W+.5)*dt,(k+.5)*dt,A,y,S,R)<=E&&c(W,k,oi-.12,b)}}const l=new Uint8Array(it*gt);for(const g of Be.water){const _=Wr(g);for(let E=_.j0;E<=_.j1;E++)for(let b=_.i0;b<=_.i1;b++)Gr(g,(b+.5)*dt,(E+.5)*dt)&&(l[s(b,E)]=1)}for(const g of Be.rivers)for(let _=0;_+3<g.length;_+=2){const E=g[_],b=g[_+1],w=g[_+2],A=g[_+3],y=3.2,S=Math.max(0,Math.floor((Math.min(E,w)-y)*K)),R=Math.min(it-1,Math.ceil((Math.max(E,w)+y)*K)),N=Math.max(0,Math.floor((Math.min(b,A)-y)*K)),T=Math.min(gt-1,Math.ceil((Math.max(b,A)+y)*K));for(let D=N;D<=T;D++)for(let I=S;I<=R;I++)io((I+.5)*dt,(D+.5)*dt,E,b,w,A)<=y&&(l[s(I,D)]=1)}const h=new Float32Array(it*gt);for(let g=0;g<h.length;g++)h[g]=l[g]?1e4:0;for(let g=1;g<gt;g++)for(let _=1;_<it-1;_++){const E=s(_,g);h[E]&&(h[E]=Math.min(h[E],h[E-1]+1,h[E-it]+1,h[E-it-1]+1.4,h[E-it+1]+1.4))}for(let g=gt-2;g>=0;g--)for(let _=it-2;_>=1;_--){const E=s(_,g);h[E]&&(h[E]=Math.min(h[E],h[E+1]+1,h[E+it]+1,h[E+it+1]+1.4,h[E+it-1]+1.4))}i.waterY=Oh;for(let g=0;g<gt;g++)for(let _=0;_<it;_++){const E=s(_,g);if(!l[E])continue;const b=1.3*Qt(0,2.4,h[E]*dt),w=oi-b;c(_,g,w,w<Oh-.05?O.RiverBed:O.Sand)}const u=[];for(const g of Object.values(Be.bridges)){for(let E=0;E+3<g.length;E+=2){const b=g[E],w=g[E+1],A=g[E+2],y=g[E+3],S=Gt+2.3,R=Math.max(0,Math.floor((Math.min(b,A)-S)*K)),N=Math.min(it-1,Math.ceil((Math.max(b,A)+S)*K)),T=Math.max(0,Math.floor((Math.min(w,y)-S)*K)),D=Math.min(gt-1,Math.ceil((Math.max(w,y)+S)*K));for(let I=T;I<=D;I++)for(let k=R;k<=N;k++){const W=io((k+.5)*dt,(I+.5)*dt,b,w,A,y),G=s(k,I);W>Gt+1.3&&W<Gt+2.1&&!o[G]&&l[G]&&!a(k,I)&&(i.heights[G]=Math.round((se+vc+1.1)*K),i.mats[G]=O.Stone)}}const _=[[g[0],g[1],g[2]-g[0],g[3]-g[1]],[g[g.length-2],g[g.length-1],g[g.length-2]-g[g.length-4],g[g.length-1]-g[g.length-3]]];for(const[E,b,w,A]of _){const y=Math.hypot(w,A)||1,S=-A/y,R=w/y;for(const N of[-1,1])u.push({x:E+w/y*-4+S*N*(Gt+3.2),z:b+A/y*-4+R*N*(Gt+3.2),nx:S,nz:R})}}const f=(g,_)=>i.heights[Math.floor(_*K)*it+Math.floor(g*K)]*dt,d=(g,_,E,b,w)=>{for(let A=Math.floor((_-E)*K);A<Math.ceil((_+E)*K);A++)for(let y=Math.floor((g-E)*K);y<Math.ceil((g+E)*K);y++)if(y>=0&&A>=0&&y<it&&A<gt){const S=s(y,A);o[S]||(i.heights[S]=Math.round(b*K),i.mats[S]=w)}};for(const g of u){if(g.x<pt+2||g.z<pt+2||g.x>kt-pt-2||g.z>te-pt-2)continue;const _=f(g.x,g.z);i.waterDepthAt(g.x,g.z)>0||(d(g.x,g.z,1.1,_+2.2,O.Stone),d(g.x,g.z,.55,_+4.1,O.Statue))}const v=[O.WallA,O.WallB,O.WallC];for(const g of Be.buildings){const _=g.l>0?g.l:3+Math.floor(Ze(Math.round(g.p[0]*10),Math.round(g.p[1]*10),3)*3),E=oi+Math.max(2.4,Math.min(11,_*1.15)),b=v[Math.floor(Ze(Math.round(g.p[0]*7),Math.round(g.p[1]*7),5)*3)],w=Ze(Math.round(g.p[1]*9),Math.round(g.p[0]*9),6)<.6?O.RoofDark:O.Roof,A=Wr(g.p);for(let y=A.j0;y<=A.j1;y++)for(let S=A.i0;S<=A.i1;S++){const R=(S+.5)*dt,N=(y+.5)*dt;l[s(S,y)]||!Gr(g.p,R,N)||c(S,y,E,Tx(g.p,R,N)>.55?w:b)}}const x=(g,_)=>{if(g<pt+2||_<pt+2||g>kt-pt-2||_>te-pt-2)return;const E=Math.floor(g*K),b=Math.floor(_*K),w=s(E,b);if(o[w]||l[w]||i.mats[w]===O.Asphalt||i.mats[w]===O.AsphaltLine||i.heights[w]*dt>oi+.6)return;const A=i.heights[w]*dt;for(let y=-2;y<=2;y++)for(let S=-2;S<=2;S++){const R=E+S,N=b+y;R<0||N<0||R>=it||N>=gt||Math.hypot(S,y)>2.2||c(R,N,A+3.4,O.Trunk)}e.canopies.push({x:g,y:A+3.2,z:_,s:.75+n()*.45,tone:n()})};for(let g=0;g+1<Be.trees.length;g+=2)x(Be.trees[g],Be.trees[g+1]);for(const g of Be.green){if(!g.w)continue;const _=Wr(g.p);for(let E=0;E<14;E++){const b=(_.i0+n()*(_.i1-_.i0))*dt,w=(_.j0+n()*(_.j1-_.j0))*dt;Gr(g.p,b,w)&&x(b,w)}}const m=t.pts.length,p=t.length/m;let M=1;for(let g=8;g<t.length;g+=26){M=-M;const _=Math.floor(g/p)%m,E=t.pts[_],b=t.tan[_],w=Gt+.95,A=E.x-b.z*M*w,y=E.z+b.x*M*w;if(i.waterDepthAt(A,y)>0||i.heights[s(Math.floor(A*K),Math.floor(y*K))]*dt>oi+.6)continue;const S=f(A,y);d(A,y,.25,S+5,O.LampPost),e.lamps.push({x:A,y:S+5,z:y})}return e}const Cx=900,vn=se+.3,kh=se,so=10,Px=[[40,138],[80,140],[120,138],[160,140],[186,134],[196,116],[196,90],[194,64],[196,40],[186,24],[160,22],[124,26],[90,22],[56,24],[30,30],[20,52],[26,78],[22,104],[26,126]],Mc=[[192,130],[178,120],[168,108],[168,72],[170,50],[166,36],[158,25]],yc=[[146,24],[140,38],[128,46],[100,47],[76,46],[60,38],[48,25]],Os={x0:98,x1:144,hz:13,ceil:6.3},Sc=14,wc=8,Wu=5;let Bn=null;function Lx(i,t){const e=i.length,n=[0];for(let A=1;A<=e;A++)n.push(n[A-1]+Math.hypot(i[A%e].x-i[A-1].x,i[A%e].z-i[A-1].z));const s=n[e],r=(A,y)=>i.reduce((S,R,N)=>(R.x-A)**2+(R.z-y)**2<(i[S].x-A)**2+(i[S].z-y)**2?N:S,0),o=(A,y)=>((n[r(A,y)]-n[t])%s+s)%s,a=o(196,74),c=a+Sc,l=c+12,h=l+36,u=a-22,f=u-66,d=o(142,24),v=d+32,x=v+22,m=x+32,p=r(196,74),M=(p+Math.round(Sc/2/(s/e)))%e,g=i[(M+1)%e],_=i[(M+e-1)%e],E=Math.hypot(g.x-_.x,g.z-_.z),b=i[r(120,139)],w=(A,y)=>o(A,y)/s;return{a0:f,a1:u,g0:a,g1:c,r2:l,r3:h,c0:d,c1:v,c2:x,c3:m,L:s,cps:[0,w(150,140),w(154,23),w(24,78),w(26,126)],mines:[[w(170,141),-3],[w(24,92),3],[w(100,22),2]],garage:{z:b.z},gapMid:{x:i[M].x,z:i[M].z,nx:-(g.z-_.z)/E,nz:(g.x-_.x)/E}}}const xa=[0,.2,.4,.6,.8],_a=[[.1,0],[.5,0],[.8,0]],Ix={id:"tokyo",name:"Tokio · Kattoralli",blurb:"Kuvitteellinen Tokion keskusta: rampeilla talojen katoille, hyppy katolta toiselle, parkkihallin läpi ja vaihtoehtoisia kujia.",playW:200,playH:150,maxElevation:wc+1,style:"tokyo",conditions:Ni(fi,Es()),lamps:22,minGround:vn,centerline(){const i=cs(Px,Cx,!0);let t=0,e=1/0;return i.forEach((n,s)=>{const r=(n.x-62)**2+(n.z-139)**2;r<e&&(e=r,t=s)}),Bn=Lx(i,t),xa.splice(0,xa.length,...Bn.cps),_a.splice(0,_a.length,...Bn.mines),{pts:i,startIdx:t}},profile(i,t){const e=Bn;if(i>=e.g0&&i<e.g1)return{elev:0,feat:0,quiet:!0};const n=wc*(Qt(e.a0,e.a1,i)-Qt(e.r2,e.r3,i))+Wu*(Qt(e.c0,e.c1,i)-Qt(e.c2,e.c3,i));return{elev:Math.max(0,n),feat:0,quiet:!0}},mines:_a,checkpoints:xa,jumps:()=>[[Bn.g0/Bn.L,Bn.g1/Bn.L]],decorate:(i,t)=>Dx(i,t),preview(i,t,e){i.fillStyle="#9c9a94",i.fillRect(-1e3,-1e3,4e3,4e3),i.strokeStyle="#6b6d72",i.lineCap="round",i.lineWidth=so*e;for(const n of[Mc,yc]){const s=cs(n,40,!1);i.beginPath(),s.forEach((r,o)=>{const[a,c]=t(r);o===0?i.moveTo(a,c):i.lineTo(a,c)}),i.stroke()}}};function Dx(i,t){const e={canopies:[],lamps:[],slabs:[],neons:[]},n=rr(35681),s=new Ii(t.pts),r=(B,P)=>P*it+B,o=(B,P)=>B<pt*K||P<pt*K||B>=it-pt*K||P>=gt-pt*K,a=new Uint8Array(it*gt),c=B=>B===O.Asphalt||B===O.AsphaltLine||B===O.CheckA||B===O.CheckB;for(let B=0;B<a.length;B++){const P=i.mats[B];(c(P)||P===O.BarrierRed||P===O.BarrierWhite||P>=O.TokyoA&&P<=O.VineWall)&&(a[B]=1)}const l=(B,P,z,H,q=!1)=>{if(B<0||P<0||B>=it||P>=gt||o(B,P))return;const V=r(B,P);a[V]&&!q||(i.heights[V]=Math.round(z*K),i.mats[V]=H)},h=(B,P,z,H,q,V,Y=!1)=>{for(let tt=Math.floor(P*K);tt<Math.ceil(H*K);tt++)for(let J=Math.floor(B*K);J<Math.ceil(z*K);J++)l(J,tt,q,V,Y)},u=(B,P)=>i.heights[Math.floor(P*K)*it+Math.floor(B*K)]*dt,f=t.pts,d=f.length,v=t.length/d,x=Bn,m=B=>((t.arc[B]-t.arc[t.startIdx])%t.length+t.length)%t.length,p=B=>wc*(Qt(x.a0,x.a1,B)-Qt(x.r2,x.r3,B))+Wu*(Qt(x.c0,x.c1,B)-Qt(x.c2,x.c3,B)),M=(B,P)=>{const z=[];for(let H=0;H+1<B.length;H++){const q=B[H],V=B[H+1],Y=Math.max(0,Math.floor((Math.min(q.x,V.x)-P)*K)),tt=Math.min(it-1,Math.ceil((Math.max(q.x,V.x)+P)*K)),J=Math.max(0,Math.floor((Math.min(q.z,V.z)-P)*K)),ot=Math.min(gt-1,Math.ceil((Math.max(q.z,V.z)+P)*K));for(let ht=J;ht<=ot;ht++)for(let _t=Y;_t<=tt;_t++){const Bt=(_t+.5)*dt,Et=(ht+.5)*dt,Wt=V.x-q.x,X=V.z-q.z,ee=Wt*Wt+X*X,Dt=ee<1e-9?0:Math.max(0,Math.min(1,((Bt-q.x)*Wt+(Et-q.z)*X)/ee)),Ft=Math.hypot(Bt-(q.x+Wt*Dt),Et-(q.z+X*Dt));Ft<=P/2&&z.push(r(_t,ht),Ft>P/2-.3?1:0,Math.round((H+Dt)*3%2))}}for(let H=0;H<z.length;H+=3){const q=z[H],V=z[H+1],Y=q%it,tt=Math.floor(q/it);if(o(Y,tt))continue;const J=i.mats[q];J===O.Asphalt||J===O.AsphaltLine||J===O.CheckA||J===O.CheckB||i.heights[q]*dt>vn+1&&J!==O.BarrierRed&&J!==O.BarrierWhite||(i.heights[q]=Math.round(kh*K),i.mats[q]=V?O.AsphaltLine:O.Asphalt,a[q]=1)}};M(cs(Mc,80,!1),so),M(cs(yc,80,!1),so);const g=x.gapMid;M([{x:g.x+g.nx*-44,z:g.z+g.nz*-44},{x:g.x+g.nx*16,z:g.z+g.nz*16}],Sc);const _=x.garage.z,E=Os.x0,b=Os.x1,w=_-Os.hz,A=_+Os.hz;h(E,w,b,A,vn,O.Concrete);const y=kh+Os.ceil;for(let B=E+2;B<=b-1;B+=6)for(const P of[-1,1])h(B,_+P*(Gt+2.1)-.6,B+1.2,_+P*(Gt+2.1)+.6,y,O.Concrete);const S=[O.CarRed,O.CarBlue,O.CarYellow];for(const B of[-1,1]){for(let P=E+4;P<b-5;P+=5.2+n()*1.5){if(n()<.25)continue;const z=Math.floor(n()*3),H=_+B*(Gt+4.9);h(P,H-.95,P+3.8,H+.95,vn+1,S[z]),h(P+.9,H-.75,P+2.9,H+.75,vn+1.8,O.CabinRed+z)}for(let P=E+3;P<b-2;P+=5.2)h(P-.05,_+B*(Gt+3.3)-.05,P+.05,_+B*(Gt+6.6),vn+.02,O.AsphaltLine,!1)}e.slabs.push({x0:E,z0:w,x1:b,z1:A,y:y+.6,t:.6});for(const B of[E+.6,b-.6])for(const P of[-1,1])e.neons.push({x:B,y:y+1.6,z:_+P*(Gt+3),sx:.7,sy:2.6,sz:2.2,color:3111935});for(let B=E+5;B<b-2;B+=8)for(let P=_-6;P<=_+6;P+=6)e.neons.push({x:B,y:y-.15,z:P,sx:3.2,sy:.12,sz:.5,color:16773574});const R=112,N=94;for(let B=0;B<16;B++)h(R-Math.max(.6,4.4-.26*B),N-Math.max(.6,4.4-.26*B),R+Math.max(.6,4.4-.26*B),N+Math.max(.6,4.4-.26*B),vn+1.9*(B+1),Math.floor(B/2)%2?O.BarrierWhite:O.BarrierRed);e.neons.push({x:R,y:vn+31.5,z:N,sx:.5,sy:1.2,sz:.5,color:16726586});const T=[{x0:E-4,z0:w-4,x1:b+4,z1:A+4},{x0:R-9,z0:N-9,x1:R+9,z1:N+9}],D=[...cs(Mc,40,!1),...cs(yc,40,!1)],I=new Ii(D),k=[O.TokyoA,O.TokyoB,O.VineWall,O.VineWall,O.TokyoB];let W=0;for(let B=0;B<900&&W<46;B++){const P=8+Math.floor(n()*9),z=8+Math.floor(n()*9),H=pt+2+n()*(kt-2*pt-4-P),q=pt+2+n()*(te-2*pt-4-z),V=H+P,Y=q+z;if(T.some(X=>H<X.x1+3&&V>X.x0-3&&q<X.z1+3&&Y>X.z0-3))continue;let tt=!0;for(const[X,ee]of[[H,q],[V,q],[H,Y],[V,Y],[(H+V)/2,q],[(H+V)/2,Y],[H,(q+Y)/2],[V,(q+Y)/2],[(H+V)/2,(q+Y)/2]])if(s.query(X,ee).d2<(ku+3)**2||I.query(X,ee).d2<(so/2+4)**2){tt=!1;break}if(!tt)continue;T.push({x0:H,z0:q,x1:V,z1:Y}),W++;const ot=q>108?3.5+n()*3.5:5+n()*8,ht=k[Math.floor(n()*k.length)],_t=vn+ot;h(H,q,V,Y,_t,ht);const Bt=n()<.6;if(h(H+.9,q+.9,V-.9,Y-.9,_t-.35,Bt?O.Grass:O.Concrete),Bt){for(let X=0;X<2+Math.floor(n()*3);X++)G(H+2+n()*(P-4),q+2+n()*(z-4),_t-.35);n()<.7&&h(H+1.4,q+1.4,V-1.4,q+2.4,_t+.5,O.Hedge,!0)}else n()<.6&&h(H+2,q+2,H+4.5,q+4.5,_t+1.6,O.Stone,!0);const Et=Math.floor(1+n()*2),Wt=[16727972,3139327,16765498,6750071,11561983];for(let X=0;X<Et;X++){const ee=Math.floor(n()*4),Dt=Wt[Math.floor(n()*Wt.length)],Ft=vn+ot*(.35+n()*.4);ee===0?e.neons.push({x:H+1+n()*(P-2),y:Ft,z:Y+.18,sx:1.2+n()*1.6,sy:2.4+n()*1.4,sz:.3,color:Dt}):ee===1?e.neons.push({x:V+.18,y:Ft,z:q+1+n()*(z-2),sx:.3,sy:2.4+n()*1.4,sz:1.2+n()*1.6,color:Dt}):ee===2?e.neons.push({x:H+1+n()*(P-2),y:Ft,z:q-.18,sx:1.2+n()*1.6,sy:2.4+n()*1.4,sz:.3,color:Dt}):e.neons.push({x:H-.18,y:Ft,z:q+1+n()*(z-2),sx:.3,sy:2.4+n()*1.4,sz:1.2+n()*1.6,color:Dt})}}for(let B=0;B<d;B+=Math.round(10/v)){const P=m(B);if(p(P)<2.5||P>=x.g0-4&&P<=x.g1+4)continue;const H=t.tan[B],q=Math.floor(B/7)%2?1:-1,V=Gt+2.9,Y=f[B].x-H.z*q*V,tt=f[B].z+H.x*q*V,J=u(Y,tt);J>se+1.5&&(n()<.55?G(Y,tt,J):h(Y-1.6,tt-.5,Y+1.6,tt+.5,J+.9,O.Hedge,!0))}for(let B=0;B<d;B+=Math.round(24/v)){const P=m(B);if(p(P)>.5||f[B].x>E-6&&f[B].x<b+6&&Math.abs(f[B].z-_)<20)continue;const z=t.tan[B],H=n()<.5?1:-1,q=Gt+2.6;G(f[B].x-z.z*H*q,f[B].z+z.x*H*q,vn)}function G(B,P,z){if(B<pt+2||P<pt+2||B>kt-pt-2||P>te-pt-2)return;const H=Math.floor(B*K),q=Math.floor(P*K),V=r(H,q),Y=i.mats[V];if(!(c(Y)||Y===O.BarrierRed||Y===O.BarrierWhite)){for(let tt=-2;tt<=2;tt++)for(let J=-2;J<=2;J++){if(Math.hypot(J,tt)>2.2)continue;const ot=H+J,ht=q+tt;ot<0||ht<0||ot>=it||ht>=gt||o(ot,ht)||c(i.mats[r(ot,ht)])||(i.heights[r(ot,ht)]=Math.round((z+3.2)*K),i.mats[r(ot,ht)]=O.Trunk)}e.canopies.push({x:B,y:z+3,z:P,s:.7+n()*.4,tone:n()})}}return e}const Ux=900,on=3,Xu=16,Xr=13,Jt={x0:80,x1:136,z0:38,z1:78},Nx=128;function zx(){const i=[],t=(r,o,a,c)=>{const l=Math.max(2,Math.round(Math.hypot(a-r,c-o)/2));for(let h=0;h<l;h++)i.push({x:r+(a-r)*h/l,z:o+(c-o)*h/l})},e=(r,o,a,c)=>{const l=Math.max(6,Math.round(Math.abs(c-a)*Xr/1.5));for(let h=0;h<l;h++){const u=a+(c-a)*h/l;i.push({x:r+Xr*Math.cos(u),z:o+Xr*Math.sin(u)})}},n=Math.PI,s=Xr;return t(176,140,40,140),e(40,140-s,n/2,3*n/2),t(40,114,82,114),e(82,114-s,n/2,-n/2),t(82,88,40,88),e(40,88-s,n/2,3*n/2),t(40,62,176,62),e(176,62+s,-n/2,n/2),t(176,88,134,88),e(134,88+s,-n/2,-3*n/2),t(134,114,176,114),e(176,114+s,-n/2,n/2),i}const ro=108,oo=80,qu=100,Yu=74,fs=3.4;function va(i,t){const e=1+.14*(Mn(i*.035,t*.035,31)-.5),n=Math.abs(i-ro)/qu,s=Math.abs(t-oo)/Yu,r=Math.pow(Math.pow(n,fs)+Math.pow(s,fs),1/fs)*e,o=Qt(1.04,.95,r),a=Qt(.95,.6,r),c=Qt(.58,.3,r),l=(Mn(i*.12,t*.12,7)-.5)*1.4*a*(1-c);return{h:1-.6*Qt(1.04,1.12,r)+2.9*o+5.1*a+12*c+l,r}}function Fx(i,t){const{h:e,r:n}=va(i,t);if(e<on)return{h:e,m:n<1.12?O.Seabed:O.DeepSea};if(e<4.5)return{h:e,m:O.Sand};const s=va(i+1,t).h-e,r=va(i,t+1).h-e;return Math.hypot(s,r)>.5?{h:e,m:O.Cliff}:{h:e,m:Mn(i*.09,t*.09,5)>.58&&e<9?O.Sand:O.Grass}}let Hs=null;function Ox(i,t){const e=i.length,n=[0];for(let a=1;a<=e;a++)n.push(n[a-1]+Math.hypot(i[a%e].x-i[a-1].x,i[a%e].z-i[a-1].z));const s=n[e],r=(a,c)=>i.reduce((l,h,u)=>(h.x-a)**2+(h.z-c)**2<(i[l].x-a)**2+(i[l].z-c)**2?u:l,0),o=(a,c)=>((n[r(a,c)]-n[t])%s+s)%s;return{cs:o(62,140),ce:o(46,62),ds:o(168,62),de:o(176,140),L:s,castle:[o(88,62),o(128,62)],rock:[o(70,88),o(50,88)],cps:[0,o(96,140)/s,o(60,114)/s,o(108,62)/s,o(150,88)/s,o(150,114)/s],mines:[[o(62,140)/s-.01,3],[o(60,88)/s+.03,-3],[o(150,62)/s,2]]}}const Ma=[0,.2,.4,.6,.8],ya=[[.1,0],[.5,0],[.8,0]],Bx={id:"island",name:"Hiekkalinna",blurb:"Trooppinen saari: mutkainen sorarata nousee kallioita pitkin hiekkalinnan tunneliin, sieltä alas rannalle – ja etualalla on looppi.",playW:200,playH:150,maxElevation:22,style:"island",minGround:1,lighting:hh,conditions:Ni(hh,zu),terrain:Fx,centerline(){const i=Hu(zx(),Ux);let t=0,e=1/0;return i.forEach((n,s)=>{const r=(n.x-162)**2+(n.z-140)**2;r<e&&(e=r,t=s)}),Hs=Ox(i,t),Ma.splice(0,Ma.length,...Hs.cps),ya.splice(0,ya.length,...Hs.mines),{pts:i,startIdx:t}},profile(i){const t=Hs;return{elev:Xu*(Qt(t.cs,t.ce,i)-Qt(t.ds,t.de,i)),feat:0,quiet:!0}},mines:ya,checkpoints:Ma,decorate:(i,t)=>kx(i,t),preview(i,t,e){i.fillStyle="#1aa6c9",i.fillRect(-1e3,-1e3,4e3,4e3),i.fillStyle="#f0dca0",i.beginPath();for(let u=0;u<=60;u++){const f=u/60*Math.PI*2,d=Math.cos(f),v=Math.sin(f),x=1/Math.pow(Math.pow(Math.abs(d),fs)+Math.pow(Math.abs(v),fs),1/fs),[m,p]=t({x:ro+d*x*qu*.99,z:oo+v*x*Yu*.99});u===0?i.moveTo(m,p):i.lineTo(m,p)}i.fill(),i.fillStyle="#5ea34a";const[n,s]=t({x:ro-40,z:oo-35}),[r,o]=t({x:ro+40,z:oo+22});i.fillRect(n,s,r-n,o-s),i.fillStyle="#d9b36b";const[a,c]=t({x:Jt.x0,z:Jt.z0}),[l,h]=t({x:Jt.x1,z:Jt.z1});i.fillRect(a,c,l-a,h-c)}};function kx(i,t){const e={canopies:[],lamps:[],neons:[],palms:[],umbrellas:[],tunnels:[],loops:[]},n=rr(777),s=new Ii(t.pts),r=Hs,o=t.pts,a=o.length,c=t.length/a;i.waterY=on;const l=(P,z)=>z*it+P,h=(P,z)=>P<pt*K||z<pt*K||P>=it-pt*K||z>=gt-pt*K,u=new Uint8Array(it*gt);for(let P=0;P<u.length;P++){const z=i.mats[P];(z===O.Dirt||z===O.Rut||z===O.BarrierRed||z===O.BarrierWhite||z===O.CheckA||z===O.CheckB||z===O.Plank)&&(u[P]=1)}const f=(P,z,H,q,V=!1)=>{if(P<0||z<0||P>=it||z>=gt||h(P,z))return;const Y=l(P,z);u[Y]&&!V||(i.heights[Y]=Math.min(255,Math.round(H*K)),i.mats[Y]=q)},d=(P,z,H,q,V,Y,tt=!1)=>{for(let J=Math.floor(z*K);J<Math.ceil(q*K);J++)for(let ot=Math.floor(P*K);ot<Math.ceil(H*K);ot++)f(ot,J,V,Y,tt)},v=(P,z,H,q,V)=>{for(let Y=Math.floor((z-H)*K);Y<=Math.ceil((z+H)*K);Y++)for(let tt=Math.floor((P-H)*K);tt<=Math.ceil((P+H)*K);tt++)Math.hypot((tt+.5)*dt-P,(Y+.5)*dt-z)<=H&&f(tt,Y,q,V)},x=(P,z,H,q,V,Y)=>{const tt=Math.max(4,Math.round(H*2.2));for(let J=0;J<tt;J++)v(P,z,Math.max(.4,H*(1-J/tt)),q+(V-q)*(J+1)/tt,Y)},m=(P,z,H,q,V,Y)=>{for(let tt=Math.floor(z*K);tt<Math.ceil(q*K);tt++)for(let J=Math.floor(P*K);J<Math.ceil(H*K);J++){const ot=(J+.5)*dt,ht=(tt+.5)*dt;if(Math.min(ot-P,H-ot,ht-z,q-ht)>.9)continue;const _t=(Math.floor(ot/1.4)+Math.floor(ht/1.4))%2===0;f(J,tt,V+(_t?1.1:.15),Y)}},p=(P,z)=>i.heights[Math.floor(z*K)*it+Math.floor(P*K)]*dt,M=P=>Math.min(a-1,Math.max(0,Math.round(P/c+t.startIdx))%a),g=(P,z,H,q,V,Y,tt)=>e.neons.push({x:P,y:z,z:H,sx:q,sy:V,sz:Y,color:tt}),_=se+Xu,E=_+14;d(Jt.x0,Jt.z0,Jt.x1,Jt.z1,E,O.Sandstone),m(Jt.x0,Jt.z0,Jt.x1,Jt.z1,E,O.Sandstone),d(Jt.x0+8,Jt.z0+3,Jt.x1-8,Jt.z0+15,E+5,O.Sandstone),m(Jt.x0+8,Jt.z0+3,Jt.x1-8,Jt.z0+15,E+5,O.Sandstone);const b=(Jt.x0+Jt.x1)/2,w=Jt.z0+9;v(b,w,7.5,E+15,O.Sandstone),x(b,w,6.6,E+15,E+27,O.Sandstone),g(b,E+29.5,w,.35,3.6,.35,15251248),g(b+1.2,E+31,w,2.2,1.2,.2,16765498);for(const[P,z]of[[Jt.x0+1,Jt.z0+1],[Jt.x1-1,Jt.z0+1],[Jt.x0+1,Jt.z1-1],[Jt.x1-1,Jt.z1-1]])v(P,z,5.2,E+7,O.Sandstone),x(P,z,4.4,E+7,E+15,O.Sandstone),g(P,E+17,z,.3,3,.3,15251248),g(P+1.1,E+18,z,2,1.1,.2,15220782);const A=Jt.z1+.2,y=b;g(y,_+4.2,A+.05,9,8.4,.3,2760984);for(let P=-3;P<=3;P++)g(y+P*1.15,_+4.2,A+.3,.22,8,.2,7035462);for(const P of[y-12,y+12,y-22,y+22])g(P,_+8,A+.25,3.2,8.5,.25,13185066),g(P,_+9.6,A+.45,1.5,1.3,.2,16765498);for(const P of[-1,1])for(const z of[Jt.x0-2.2,Jt.x1+2.2]){const H=62+P*(Gt+2.4);d(z-.3,H-.3,z+.3,H+.3,_+2.4,O.Plank,!0),g(z,_+3,H,.7,.9,.7,16751146)}const S=(P,z,H,q,V)=>{for(let Y=M(Math.min(P,z)-3);Y!==M(Math.max(P,z)+3)&&Y<a;Y=(Y+1)%a){const tt=t.tan[Y],J=p(o[Y].x,o[Y].z);for(let ot=Gt+1.2;ot<=V;ot+=.5)for(const ht of[-1,1]){const _t=o[Y].x-tt.z*ht*ot,Bt=o[Y].z+tt.x*ht*ot;v(_t,Bt,.45,J+q,H)}}},R=(P,z,H,q,V)=>{const Y=M(Math.min(P,z)),tt=M(Math.max(P,z));M((P+z)/2);const J=o[Y],ot=o[tt],ht=Math.hypot(ot.x-J.x,ot.z-J.z),_t={cx:(J.x+ot.x)/2,cz:(J.z+ot.z)/2,dx:(ot.x-J.x)/ht,dz:(ot.z-J.z)/ht,len:ht,wid:2*(Gt+1.2),y0:H,y1:q,kind:V};e.tunnels.push(_t)};R(r.castle[0],r.castle[1],_+6.8,E,"castle");const N=p(o[M((r.rock[0]+r.rock[1])/2)].x,o[M((r.rock[0]+r.rock[1])/2)].z);S(r.rock[0],r.rock[1],O.Cliff,10,Gt+9),R(r.rock[0],r.rock[1],N+6.8,N+10,"rock");for(const P of[M(r.rock[0]),M(r.rock[1])]){const z=t.tan[P];for(const H of[-1,1])g(o[P].x-z.z*H*(Gt+1.6),N+3.4,o[P].z+z.x*H*(Gt+1.6),.6,.8,.6,16751146)}{const P=s.query(Nx,140).i,z=t.tan[P],H={ex:o[P].x,ez:o[P].z,dx:z.x,dz:z.z,y:p(o[P].x,o[P].z),R:6.8,F:15,width:9};e.loops.push(H);for(const q of[-1,1]){const V=H.ex+H.dx*1+-H.dz*q*6.2,Y=H.ez+H.dz*1+H.dx*q*6.2;g(V,H.y+5.2,Y,.3,6.5,2.2,13185066),g(V,H.y+6.2,Y,.4,1.4,1.4,16765498)}}{const P=s.query(162,140).i,z=t.tan[P],H=p(o[P].x,o[P].z);for(const q of[-1,1]){const V=o[P].x-z.z*q*(Gt+2.2),Y=o[P].z+z.x*q*(Gt+2.2);d(V-.8,Y-.8,V+.8,Y+.8,H+9.5,O.Plank,!0),g(V,H+10.4,Y,.35,2.6,.35,15251248),g(V+1.1,H+11.4,Y,2.2,1.2,.2,15220782)}for(let q=-7;q<=7;q++)for(const V of[0,1]){const Y=q*1+.5;g(o[P].x-z.z*Y,H+8.7+V*.9,o[P].z+z.x*Y,Math.abs(z.z)>.5?.9:.25,.9,Math.abs(z.x)>.5?.9:.25,(q+V)%2?16185078:1315860)}}const T=new Uint8Array(kt*te),D=(P,z,H)=>{for(let q=Math.floor(z-H);q<=Math.floor(z+H);q++)for(let V=Math.floor(P-H);V<=Math.floor(P+H);V++)if(V<0||q<0||V>=kt||q>=te||T[q*kt+V])return!1;return!0},I=(P,z,H)=>{for(let q=Math.floor(z-H);q<=Math.floor(z+H);q++)for(let V=Math.floor(P-H);V<=Math.floor(P+H);V++)V>=0&&q>=0&&V<kt&&q<te&&(T[q*kt+V]=1)},k={x0:Jt.x0-8,x1:Jt.x1+8,z0:Jt.z0-8,z1:Jt.z1+8},W=(P,z,H)=>P>pt+3&&z>pt+3&&P<kt-pt-3&&z<te-pt-3&&p(P,z)>=H,G=(P,z)=>Math.sqrt(s.query(P,z).d2);for(let P=0;P<4e3&&e.palms.length<150;P++){const z=pt+4+n()*(kt-2*pt-8),H=pt+4+n()*(te-2*pt-8);if(z>k.x0&&z<k.x1&&H>k.z0&&H<k.z1||!W(z,H,on+.7)||G(z,H)<Gt+5||!D(z,H,1.6))continue;const q=i.mats[Math.floor(H*K)*it+Math.floor(z*K)];if(q!==O.Sand&&q!==O.Grass)continue;const V=p(z,H);I(z,H,1.6),v(z,H,.5,V+4.4,O.Trunk),e.palms.push({x:z,y:V+4.5,z:H,s:.9+n()*.55,tone:n()})}const B=[14235694,15921906,15909166,3123416];for(let P=0,z=0;P<900&&z<12;P++){const H=60+n()*130,q=134+n()*14;if(!W(H,q,on+.5)||G(H,q)<Gt+4||!D(H,q,2.2)||i.mats[Math.floor(q*K)*it+Math.floor(H*K)]!==O.Sand)continue;I(H,q,2.2);const V=p(H,q);v(H,q,.2,V+.6,O.Plank),e.umbrellas.push({x:H,y:V+.1,z:q,color:B[z%B.length]}),z%2===0&&d(H+2.2,q-.8,H+4.2,q+.8,V+1,O.Plank),z++}d(190,144,193,156,on+.7,O.Plank);for(let P=144;P<156;P+=3)d(189.6,P,190.6,P+.7,on+1.5,O.Plank,!0);d(195,150,199.5,156.5,on+.35,O.BarrierWhite),d(196,151,198.5,155.5,on+.75,O.BarrierRed),g(197.2,on+3.6,153.2,.25,3.6,.25,7031341),g(197.9,on+4.4,153.2,1.6,1.4,.15,16185078);{let P=1;const z=H=>H>r.castle[0]-6&&H<r.castle[1]+6||H>r.rock[1]-6&&H<r.rock[0]+6;for(let H=10;H<t.length-6;H+=23){P=-P;const q=M(H),V=t.tan[q],Y=Gt+2.2,tt=o[q].x-V.z*P*Y,J=o[q].z+V.x*P*Y;if(z(H)||Math.hypot(tt-128,J-140)<14||Math.hypot(tt-162,J-140)<5)continue;const ot=p(tt,J);ot<on+.5||i.mats[Math.floor(J*K)*it+Math.floor(tt*K)]===O.BarrierRed||(v(tt,J,.3,ot+5.4,O.LampPost),e.lamps.push({x:tt,y:ot+5.4,z:J,gy:ot}))}}for(let P=0;P<gt;P++)for(let z=0;z<it;z++)h(z,P)&&(i.heights[l(z,P)]=Math.round((on+.6+(n()-.5)*.5)*K),i.mats[l(z,P)]=O.Rock);return e}const Hx=900,Yc=30,qr=11,Kt={x0:98,x1:134,z0:22,z1:50},er=116,kn=36,cn=44,es=86,ln=180,bi=138;function Vx(){const i=[],t=(r,o,a,c)=>{const l=Math.max(2,Math.round(Math.hypot(a-r,c-o)/2));for(let h=0;h<l;h++)i.push({x:r+(a-r)*h/l,z:o+(c-o)*h/l})},e=(r,o,a,c)=>{const l=Math.max(6,Math.round(Math.abs(c-a)*qr/1.5));for(let h=0;h<l;h++){const u=a+(c-a)*h/l;i.push({x:r+qr*Math.cos(u),z:o+qr*Math.sin(u)})}},n=Math.PI,s=qr;return t(ln,146,cn,146),e(cn,146-s,n/2,3*n/2),t(cn,124,es,124),e(es,124-s,n/2,-n/2),t(es,102,cn,102),e(cn,102-s,n/2,3*n/2),t(cn,80,es,80),e(es,80-s,n/2,-n/2),t(es,58,cn,58),e(cn,58-s,n/2,3*n/2),t(cn,kn,ln,kn),e(ln,kn+s,-n/2,n/2),t(ln,58,bi,58),e(bi,58+s,-n/2,-3*n/2),t(bi,80,ln,80),e(ln,80+s,-n/2,n/2),t(ln,102,bi,102),e(bi,102+s,-n/2,-3*n/2),t(bi,124,ln,124),e(ln,124+s,-n/2,n/2),i}function Sa(i,t){const e=Math.min(1,Math.max(0,(146-t)/110)),n=Qt(6,34,i)*Qt(210,182,i),s=(Mn(i*.06,t*.06,9)-.5)*7*Math.sin(Math.PI*Math.min(1,e*1.1))*n,r=7*Math.exp(-(((i-er)/34)**2+((t-30)/22)**2));let o=se+.4+(Yc*.97*e+s+r)*n;const a=.42*(o-se)*Math.exp(-(((i-er)/11)**2))*Qt(44,62,t)*Qt(150,128,t);return o=Math.max(se+.6,o-a),o}function Gx(i,t){const e=Sa(i,t),n=Sa(i+1,t)-e,s=Sa(i,t+1)-e,r=Math.hypot(n,s);return Math.abs(i-er)<15&&t>52&&t<132&&r>.55&&e>se+4?{h:e,m:O.Ice}:r>.62&&e>se+3?{h:e,m:O.SnowCliff}:{h:e,m:Mn(i*.11,t*.11,3)>.74&&r>.3?O.SnowCliff:O.Snow}}let ss=null;function Wx(i,t){const e=i.length,n=[0];for(let c=1;c<=e;c++)n.push(n[c-1]+Math.hypot(i[c%e].x-i[c-1].x,i[c%e].z-i[c-1].z));const s=n[e],r=(c,l)=>i.reduce((h,u,f)=>(u.x-c)**2+(u.z-l)**2<(i[h].x-c)**2+(i[h].z-l)**2?f:h,0),o=(c,l)=>((n[r(c,l)]-n[t])%s+s)%s,a=(c,l,h)=>{const u=o(c,l);return[u-h/2,u+h/2]};return{up0:o(cn,146),up1:o(cn,kn),dn0:o(ln,kn),dn1:o(ln,146),L:s,sa:o,ice:[a(96,146,22),a(70,102,24),a(62,kn,28),a(158,80,26),a(160,124,22)],castle:[o(Kt.x0+4,kn),o(Kt.x1-4,kn)],rock:[[o(66,58),o(52,58)],[o(166,102),o(150,102)]],cps:[0,o(70,146)/s,o(70,102)/s,o(70,58)/s,o(116,kn)/s,o(160,58)/s,o(160,102)/s],mines:[[o(110,146)/s,3],[o(60,124)/s,-3],[o(70,80)/s,2],[o(160,80)/s,-2],[o(150,124)/s,3]]}}const wa=[0,.15,.3,.45,.6,.75,.9],Ea=[[.1,0],[.3,0],[.5,0],[.7,0],[.9,0]],Hh=(i,t,e)=>{const n=Math.min(1,Math.max(0,(e-i)/(t-i)));return .75*n+.25*n*n*(3-2*n)},Xx={id:"vuoristo",name:"Vuoristo",blurb:"Lumihuippu: serpentiini nousee kymmenessä hiuspinnimutkassa linnaan ja alas toiselta puolelta. Jäisillä kohdilla pito on olematon – käsijarru auttaa.",playW:200,playH:150,maxElevation:36,style:"snow",minGround:1,lighting:uh,conditions:Ni(uh,$2()),terrain:Gx,centerline(){const i=Hu(Vx(),Hx);let t=0,e=1/0;return i.forEach((n,s)=>{const r=(n.x-156)**2+(n.z-146)**2;r<e&&(e=r,t=s)}),ss=Wx(i,t),wa.splice(0,wa.length,...ss.cps),Ea.splice(0,Ea.length,...ss.mines),{pts:i,startIdx:t}},profile(i){const t=ss;return{elev:Yc*(Hh(t.up0,t.up1,i)-Hh(t.dn0,t.dn1,i)),feat:0,quiet:!0}},roadSurface(i,t,e){const n=ss;for(const[r,o]of n.ice){const a=Math.min(i-r,o-i);if(a>0&&a>e*4-1&&Math.abs(t)<6.6+e*.9)return O.Ice}return Math.abs(Math.abs(t)-3)<.9||Math.abs(Math.abs(t)-3)<1.3&&e>.55?O.SnowRut:O.SnowRoad},mines:Ea,checkpoints:wa,decorate:(i,t)=>Yx(i,t),preview(i,t){i.fillStyle="#cfe2f3",i.fillRect(-1e3,-1e3,4e3,4e3),i.fillStyle="#f4f8fb",i.beginPath(),[[10,154],[10,70],[60,24],[172,24],[206,70],[206,154]].forEach(([u,f],d)=>{const[v,x]=t({x:u,z:f});d===0?i.moveTo(v,x):i.lineTo(v,x)}),i.closePath(),i.fill(),i.fillStyle="#9ccbe6";const[n,s]=t({x:er-9,z:60}),[r,o]=t({x:er+9,z:130});i.fillRect(n,s,r-n,o-s),i.fillStyle="#9a9ea6";const[a,c]=t({x:Kt.x0,z:Kt.z0}),[l,h]=t({x:Kt.x1,z:Kt.z1});i.fillRect(a,c,l-a,h-c)}},qx={S:["111","100","111","001","111"],T:["111","010","010","010","010"],A:["111","101","111","101","101"],R:["110","101","110","101","101"]};function Yx(i,t){const e={canopies:[],lamps:[],neons:[],firs:[],tunnels:[]},n=rr(2026),s=new Ii(t.pts),r=ss,o=t.pts,a=o.length,c=t.length/a;i.waterY=null;const l=(T,D)=>D*it+T,h=(T,D)=>T<pt*K||D<pt*K||T>=it-pt*K||D>=gt-pt*K,u=new Uint8Array(it*gt);for(let T=0;T<u.length;T++){const D=i.mats[T];(D===O.SnowRoad||D===O.SnowRut||D===O.BarrierRed||D===O.BarrierWhite||D===O.CheckA||D===O.CheckB||D===O.Plank)&&(u[T]=1)}for(let T=0;T<gt;T++)for(let D=0;D<it;D++){const I=l(D,T);i.mats[I]===O.Ice&&Math.sqrt(s.query((D+.5)*dt,(T+.5)*dt).d2)<Gt+1.3&&(u[I]=1)}const f=(T,D,I,k,W=!1)=>{if(T<0||D<0||T>=it||D>=gt||h(T,D))return;const G=l(T,D);u[G]&&!W||(i.heights[G]=Math.min(255,Math.round(I*K)),i.mats[G]=k)},d=(T,D,I,k,W,G,B=!1)=>{for(let P=Math.floor(D*K);P<Math.ceil(k*K);P++)for(let z=Math.floor(T*K);z<Math.ceil(I*K);z++)f(z,P,W,G,B)},v=(T,D,I,k,W)=>{for(let G=Math.floor((D-I)*K);G<=Math.ceil((D+I)*K);G++)for(let B=Math.floor((T-I)*K);B<=Math.ceil((T+I)*K);B++)Math.hypot((B+.5)*dt-T,(G+.5)*dt-D)<=I&&f(B,G,k,W)},x=(T,D,I,k,W,G)=>{const B=Math.max(4,Math.round(I*2.2));for(let P=0;P<B;P++)v(T,D,Math.max(.4,I*(1-P/B)),k+(W-k)*(P+1)/B,G)},m=(T,D,I,k,W,G)=>{for(let B=Math.floor(D*K);B<Math.ceil(k*K);B++)for(let P=Math.floor(T*K);P<Math.ceil(I*K);P++){const z=(P+.5)*dt,H=(B+.5)*dt;if(Math.min(z-T,I-z,H-D,k-H)>.9)continue;const q=(Math.floor(z/1.4)+Math.floor(H/1.4))%2===0;f(P,B,W+(q?1.1:.15),G)}},p=(T,D)=>i.heights[Math.floor(D*K)*it+Math.floor(T*K)]*dt,M=T=>(Math.round(T/c+t.startIdx)%a+a)%a,g=(T,D,I,k,W,G,B)=>e.neons.push({x:T,y:D,z:I,sx:k,sy:W,sz:G,color:B}),_=se+Yc,E=_+10;d(Kt.x0,Kt.z0,Kt.x1,Kt.z1,E,O.Fortress),m(Kt.x0,Kt.z0,Kt.x1,Kt.z1,E,O.Fortress),d(Kt.x0+8,Kt.z0+2,Kt.x1-8,Kt.z0+12,E+4,O.Fortress),m(Kt.x0+8,Kt.z0+2,Kt.x1-8,Kt.z0+12,E+4,O.Fortress);const b=(Kt.x0+Kt.x1)/2,w=Kt.z0+7;v(b,w,6.2,E+9,O.Fortress),x(b,w,5.6,E+9,E+16.5,O.Snow),g(b,E+18.8,w,.35,3.6,.35,7031341),g(b+1.2,E+19.9,w,2.2,1.4,.2,13185066);for(const[T,D]of[[Kt.x0+1,Kt.z0+1],[Kt.x1-1,Kt.z0+1],[Kt.x0+1,Kt.z1-1],[Kt.x1-1,Kt.z1-1]])v(T,D,4.8,E+4,O.Fortress),x(T,D,4.1,E+4,E+9.5,O.Snow),g(T,E+11.5,D,.3,3,.3,7031341),g(T+1.1,E+12.5,D,2,1.1,.2,13185066);const A=Kt.z1+.2;g(b,_+4.2,A+.05,9,8.4,.3,2763312);for(let T=-3;T<=3;T++)g(b+T*1.15,_+4.2,A+.3,.22,8,.2,7039858);for(const T of[b-12,b+12,b-22,b+22])g(T,_+8,A+.25,3.2,8.5,.25,13185066),g(T,_+9.6,A+.45,1.5,1.3,.2,16053492);for(let T=-6;T<=6;T++)for(const D of[0,1])g(b+T*1.2,_+12.5+D*1.2,A+.5,1.2,1.2,.25,(T+D)%2?16185078:1315860);const y=(T,D,I,k,W)=>{const G=M(Math.min(T,D)),B=M(Math.max(T,D)),P=o[G],z=o[B],H=Math.hypot(z.x-P.x,z.z-P.z),q={cx:(P.x+z.x)/2,cz:(P.z+z.z)/2,dx:(z.x-P.x)/H,dz:(z.z-P.z)/H,len:H,wid:2*(Gt+1.2),y0:I,y1:k,kind:W};e.tunnels.push(q)};y(r.castle[0],r.castle[1],_+6.8,E,"castle");for(const[T,D]of r.rock){const I=M((T+D)/2),k=p(o[I].x,o[I].z);for(let W=M(Math.min(T,D)-3);W!==M(Math.max(T,D)+3);W=(W+1)%a){const G=t.tan[W],B=p(o[W].x,o[W].z);for(let P=Gt+1.2;P<=Gt+9;P+=.5)for(const z of[-1,1])v(o[W].x-G.z*z*P,o[W].z+G.x*z*P,.45,B+10,O.SnowCliff)}y(T,D,k+6.8,k+10,"rock");for(const W of[M(T),M(D)]){const G=t.tan[W];for(const B of[-1,1])g(o[W].x-G.z*B*(Gt+1.6),k+3.4,o[W].z+G.x*B*(Gt+1.6),.6,.8,.6,16751146)}}{const T=s.query(156,146).i,D=t.tan[T],I=p(o[T].x,o[T].z),k=Gt+2.3;for(const P of[-1,1]){const z=o[T].x-D.z*P*k,H=o[T].z+D.x*P*k;d(z-.8,H-.8,z+.8,H+.8,I+10.5,O.Plank,!0),g(z,I+11.5,H,.35,2.6,.35,7031341),g(z+1.1,I+12.5,H,2.2,1.2,.2,13185066)}const W=.9,G="START",B=G.length*4-1;g(o[T].x,I+10.2,o[T].z,Math.abs(D.z)>.5?18.4:.3,5.4,Math.abs(D.x)>.5?18.4:.3,13185066);for(let P=0;P<G.length;P++){const z=qx[G[P]];for(let H=0;H<5;H++)for(let q=0;q<3;q++){if(z[H][q]!=="1")continue;const V=(P*4+q-(B-1)/2)*W;for(const Y of[-1,1])g(o[T].x-D.z*V+D.x*Y*.25,I+12.3-H*W,o[T].z+D.x*V+D.z*Y*.25,Math.abs(D.z)>.5?W:.25,W,Math.abs(D.x)>.5?W:.25,16185078)}}}for(let T=24;T<t.length-10;T+=38){const D=M(T),I=t.tan[D],k=Math.floor(T/38)%2*2-1,W=Gt+2.8,G=o[D].x-I.z*k*W,B=o[D].z+I.x*k*W,P=p(G,B);P<3||Math.hypot(G-156,B-146)<12||G>Kt.x0-10&&G<Kt.x1+10&&B<Kt.z1+12||(g(G,P+2.4,B,.3,4.8,.3,7031341),g(G+1,P+4.2,B,2,1.5,.15,13185066),g(G+1,P+4.2,B+.1,.9,.7,.15,16185078))}for(const[T,D]of[[cn-20,112],[ln+14,90],[96,70],[bi-12,138]]){if(Math.sqrt(s.query(T,D).d2)<Gt+6)continue;const I=p(T,D);d(T-2,D-2,T+2,D+2,I+5,O.Plank,!0),d(T-2.8,D-2.8,T+2.8,D+2.8,I+5.6,O.Plank,!0),d(T-2.2,D-2.2,T+2.2,D+2.2,I+7.2,O.Roof,!0),d(T-1.2,D-1.2,T+1.2,D+1.2,I+8.2,O.Roof,!0),g(T,I+10.2,D,.25,3,.25,7031341),g(T+.9,I+11,D,1.8,1.2,.15,13185066)}const S=new Uint8Array(kt*te),R=(T,D,I)=>{for(let k=Math.floor(D-I);k<=Math.floor(D+I);k++)for(let W=Math.floor(T-I);W<=Math.floor(T+I);W++)if(W<0||k<0||W>=kt||k>=te||S[k*kt+W])return!1;return!0},N=(T,D,I)=>{for(let k=Math.floor(D-I);k<=Math.floor(D+I);k++)for(let W=Math.floor(T-I);W<=Math.floor(T+I);W++)W>=0&&k>=0&&W<kt&&k<te&&(S[k*kt+W]=1)};for(let T=0;T<9e3&&e.firs.length<260;T++){const D=pt+4+n()*(kt-2*pt-8),I=pt+4+n()*(te-2*pt-8);if(D>Kt.x0-8&&D<Kt.x1+8&&I<Kt.z1+10||Math.sqrt(s.query(D,I).d2)<Gt+4.5||!R(D,I,1.7))continue;const k=p(D,I);n()>.35+.65*Math.max(0,1-(k-se)/26)||i.mats[Math.floor(I*K)*it+Math.floor(D*K)]!==O.Snow||Math.max(Math.abs(p(D+1.5,I)-k),Math.abs(p(D,I+1.5)-k))>1.3||(N(D,I,1.7),v(D,I,.5,k+2.6,O.Trunk),e.firs.push({x:D,y:k,z:I,s:.85+n()*.6,tone:n()}))}{let T=1;const D=I=>I>r.castle[0]-6&&I<r.castle[1]+6||r.rock.some(([k,W])=>I>Math.min(k,W)-6&&I<Math.max(k,W)+6);for(let I=12;I<t.length-8;I+=26){T=-T;const k=M(I),W=t.tan[k],G=Gt+2.2,B=o[k].x-W.z*T*G,P=o[k].z+W.x*T*G;if(D(I)||Math.hypot(B-156,P-146)<8)continue;const z=p(B,P),H=i.mats[Math.floor(P*K)*it+Math.floor(B*K)];z<3||H===O.BarrierRed||H===O.Plank||(v(B,P,.3,z+5.4,O.LampPost),e.lamps.push({x:B,y:z+5.4,z:P,gy:z}))}}for(let T=0;T<gt;T++)for(let D=0;D<it;D++)h(D,T)&&(i.heights[l(D,T)]=Math.round((se+.6+(n()-.5)*.5)*K),i.mats[l(D,T)]=O.Snow);return e}const js=360,Re=Gt;function jx(i){return 6*Qt(.1,.3,i)-7*Qt(.53,.7,i)+1*Qt(.7,.84,i)}function Zx(i,t){const e=i/t;if(e>.03&&e<.1)return Math.sin(i*1.9)>.2?.5:0;if(e>.4&&e<.5){const n=i-.4*t;return n<10?n*.3:n<14?3:n<24?3*(1-(n-14)/10):0}return e>.85&&e<.95?.6*Math.max(0,Math.sin(i*.5)):0}const $x={id:"oval",name:"Soikio",blurb:"Klassinen kierros: pesulauta, iso nousu, hyppyri ja pitkä alamäki.",playW:128,playH:96,maxElevation:6,conditions:Ni(fi,Es()),lamps:24,centerline(){const i=kt/2,t=te/2,e=[];for(let n=0;n<js;n++){const s=n/js*Math.PI*2,r=Math.cos(s),o=Math.sin(s),a=c=>Math.sign(c)*Math.abs(c)**.75;e.push({x:i+48*a(r)*(1+.07*Math.sin(3*s+.5)),z:t+29*a(o)*(1+.14*Math.cos(2*s))})}return{pts:e,startIdx:js/4}},profile:(i,t)=>({elev:jx(i/t),feat:Zx(i,t)}),mines:[[.2,4],[.37,-3],[.64,5],[.8,-2]],checkpoints:[0,.25,.5,.75]},Kx=[.375,.875],ba=5,Ec=30,rs=7.5,bc=9;function Jx(i){return i<-Ec?0:i<-rs?ba*Qt(-Ec,-rs,i):i<=rs?ba:i<rs+bc?ba*(1-(i-rs)/bc):0}const Qx={id:"eight",name:"Kahdeksikko",blurb:"Rata risteää itsensä: risteyksessä on korotettu hyppyri. Isot mäet ja laaksot.",playW:156,playH:100,maxElevation:9,conditions:Ni(fi,Es()),lamps:24,centerline(){const i=kt/2,t=te/2,e=60,n=60,s=[];for(let r=0;r<js;r++){const o=Math.PI/4+r/js*Math.PI*2;s.push({x:i+e*Math.sin(o),z:t+n/2*Math.sin(2*o)})}return{pts:s,startIdx:0}},profile(i,t){const e=i/t;let n=0;const s=(e+.025)%1;if(s<.3){const c=s/.3;n=Qt(0,.15,c)*Qt(0,.15,1-c)*(9*Or(c,.38,.2)-2.5*Or(c,.82,.1))}else if(e>=.475&&e<.775){const c=(e-.475)/.3;n=Qt(0,.15,c)*Qt(0,.15,1-c)*(-2.5*Or(c,.22,.12)+8*Or(c,.7,.16))}let r=0,o=!1;for(const c of Kx){const l=(((e-c+.5)%1+1)%1-.5)*t;r=Math.max(r,Jx(l)),Math.abs(l)<Ec+rs+bc&&(o=!0)}const a=e>.04&&e<.1&&Math.sin(i*1.9)>.2?.5:0;return{elev:n+r,feat:a,quiet:o}},mines:[[.07,3],[.2,-4],[.5,3],[.64,-4],[.7,3]],checkpoints:[0,.25,.5,.75]},_n=[$x,Qx,px,Ax,Ix,Bx,Xx];function t3(i,t){const{pts:e,startIdx:n}=t.centerline(),s=e.length,r=[],o=[0];for(let M=0;M<s;M++){const g=e[(M+s-1)%s],_=e[(M+1)%s],E=Math.hypot(_.x-g.x,_.z-g.z);r.push({x:(_.x-g.x)/E,z:(_.z-g.z)/E});const b=e[(M+1)%s];o.push(o[M]+Math.hypot(b.x-e[M].x,b.z-e[M].z))}const a=o[s],c=M=>((o[M]-o[n])%a+a)%a,l=t.style==="city",h=t.style==="tokyo",u=t.style==="island",f=t.style==="snow",d=t.river,v=t.minGround??2,x=new Ii(e);i.waterY=d?d.waterY:null;for(let M=0;M<gt;M++)for(let g=0;g<it;g++){const _=(g+.5)/K,E=(M+.5)/K,b=x.query(_,E),w=b.i,A=Math.sqrt(b.d2),y=r[w],S=(_-e[w].x)*-y.z+(E-e[w].z)*y.x,R=c(w),N=t.profile(R,a);let{elev:T}=N;const{feat:D,quiet:I}=N;let k=1e9;if(d){const H=(d.x(E+.5)-d.x(E-.5))/1;k=Math.abs(_-d.x(E))/Math.sqrt(1+H*H),T*=Qt(d.halfBank,d.halfBank+25,k)}const W=!l&&!h&&!u&&!f&&Mn(_*.12,E*.12,5)>.63&&D===0&&!I?.5:0,G=Mn(_*.9,E*.9,21);let B,P;if(u||f){const z=t.terrain(_,E),H=se+T+D;if(A<Re){B=H+(G>.62?1/K:0);const q=Math.abs(Math.abs(S)-3)<.9||Math.abs(Math.abs(S)-3)<1.3&&G>.55;P=f?t.roadSurface(R,S,G):q?O.Rut:O.Dirt,(R<1.8||R>a-.2)&&(P=(Math.floor(Math.abs(S)/.9)+Math.floor(R/.9))%2?O.CheckA:O.CheckB)}else if(A<Re+1.2)B=H+.9,P=Math.floor(R/3)%2?O.BarrierRed:O.BarrierWhite;else if(H-z.h>4&&A<Re+3.4)B=H-.2,P=O.Plank;else{const q=1-Qt(Re+1.2,Re+1.2+15,A);B=z.h+(H-.15-z.h)*q,P=Math.abs(H-z.h)*q>2.5&&q<.97&&z.h>3.6?f?O.SnowCliff:O.Cliff:z.m,q>.97&&z.h>3.6&&(P=f?O.Snow:H>4.8?O.Grass:O.Sand)}}else if(h)if(A<Re){B=se+T+D,P=O.Asphalt;const z=Math.abs(S)>Re-.95&&Math.abs(S)<Re-.6,H=Math.abs(S)<.18&&R%9<4.5;(z||H)&&(P=O.AsphaltLine),(R<1.8||R>a-.2)&&(P=(Math.floor(Math.abs(S)/.9)+Math.floor(R/.9))%2?O.CheckA:O.CheckB)}else A<Re+1?(B=se+T+.7,P=Math.floor(R/3)%2?O.BarrierRed:O.BarrierWhite):A<ku&&T>1?(B=se+T-.15+(G>.6?1/K:0),P=Math.abs(t.profile(R+2,a).elev-T)>.04?O.Concrete:[O.TokyoA,O.TokyoB,O.VineWall][Math.floor(R/38)%3]):(B=se+.3+(G-.5)*.12,P=O.Pavement);else if(l)if(A<Re){B=se+T+D,P=O.Asphalt;const z=Math.abs(S)>Re-.95&&Math.abs(S)<Re-.6,H=Math.abs(S)<.18&&R%9<4.5;(z||H)&&(P=O.AsphaltLine),(R<1.8||R>a-.2)&&(P=(Math.floor(Math.abs(S)/.9)+Math.floor(R/.9))%2?O.CheckA:O.CheckB)}else if(A<Re+1.3)B=se+T+.3,P=O.Pavement;else{const z=Mn(_*.07,E*.07,11),H=Math.min(_,E,kt-_,te-E),q=Qt(8,26,A-Re)*Qt(pt+2,pt+22,H),V=(Mn(_*.022,E*.022,41)-.4)*7*q;B=se+.5+z*.8+(G-.5)*.3+V+T*Math.exp(-(A-Re-1.3)/5),B=Math.max(v,B),P=z+(G-.5)*.1<.22?O.Path:O.Grass}else if(A<Re)B=se+T+D+W+(G>.6?1/K:0),P=Math.abs(Math.abs(S)-3)<.9||Math.abs(Math.abs(S)-3)<1.3&&G>.55?O.Rut:O.Dirt,(R<1.8||R>a-.2)&&(P=(Math.floor(Math.abs(S)/.9)+Math.floor(R/.9))%2?O.CheckA:O.CheckB);else if(A<Re+1.2)B=se+T+D+2.4+(G>.5?1/K:0),P=Math.floor(R/3)%2?O.BarrierRed:O.BarrierWhite;else{const z=Mn(_*.07,E*.07,11),H=Math.min(_,E,kt-_,te-E),q=Qt(6,24,A-Re)*Qt(pt+2,pt+26,H),V=(Mn(_*.022,E*.022,41)-.45)*18*q;B=se+.5+z*1.6+(G-.5)*.6+V+T*Math.exp(-(A-Re-1.2)/4.5),B=Math.max(v,B),P=z+(G-.5)*.12>.68?O.Rock:z<.3?O.Sand:O.Grass}if(d&&k<d.halfBank){const z=d.depth*(1-Qt(d.halfBed,d.halfBank,k));B=Math.min(B,d.hRef-z+(G-.5)*.12),B<d.waterY-.05?P=O.RiverBed:B<d.waterY+.4&&(P=O.Sand)}(g<pt*K||M<pt*K||g>=it-pt*K||M>=gt-pt*K)&&(B=se+gc,P=O.Rock),i.heights[M*it+g]=Math.round(B*K),i.mats[M*it+g]=P}const m=t.mines.map(([M,g])=>{const _=Math.round(n+M*s)%s;return{x:e[_].x-r[_].z*g,z:e[_].z+r[_].x*g}}),p={def:t,pts:e,tan:r,arc:o,length:a,hw:Re,startIdx:n,maxElevation:t.maxElevation,checkpoints:t.checkpoints.map(M=>Math.round(n+M*s)%s),mines:m,playW:t.playW,playH:t.playH,river:d,jumps:(t.jumps?.()??[]).map(([M,g])=>({i0:Math.round(n+M*s)%s,i1:Math.round(n+g*s)%s}))};return i.snapshotGround(),t.decorate&&(p.props=t.decorate(i,p)),t.lamps&&e3(i,p,t.lamps),p}function e3(i,t,e){const n=t.props??={canopies:[],lamps:[]},s=t.pts.length,r=t.length/s,o=new Set([O.Dirt,O.Rut,O.Asphalt,O.AsphaltLine,O.CheckA,O.CheckB,O.BarrierRed,O.BarrierWhite]);let a=1;for(let c=e*.4;c<t.length-4;c+=e){const l=(t.startIdx+Math.round(c/r))%s,h=t.tan[l];a=-a;const u=t.hw+2.6,f=t.pts[l].x-h.z*a*u,d=t.pts[l].z+h.x*a*u;if(f<pt+3||d<pt+3||f>kt-pt-3||d>te-pt-3)continue;const v=Math.floor(f*K),x=Math.floor(d*K);if(o.has(i.mats[x*it+v])||i.waterDepthAt(f,d)>0)continue;const m=i.heights[x*it+v]/K;for(let p=-1;p<=1;p++)for(let M=-1;M<=1;M++){const g=(x+p)*it+v+M;i.heights[g]=Math.round((m+5.4)*K),i.mats[g]=O.LampPost}n.lamps.push({x:f,y:m+5.4,z:d,gy:m})}}function n3(){const t=document.createElement("canvas");t.width=t.height=64;const e=t.getContext("2d");for(let h=0;h<64;h++)for(let u=0;u<64;u++){const f=Math.sin((u+h)/64*Math.PI*4)*.5+Math.sin((u-2*h)/64*Math.PI*6)*.5,d=Ze(u,h,5),v=Math.min(1,Math.max(0,.5+.28*f+(d>.96?.35:0)+(d<.04?-.15:0)));e.fillStyle=`rgb(${Math.round(v*255)},${Math.round(v*255)},${Math.round(v*255)})`,e.fillRect(u,h,1,1)}const n=new Oc(t);n.magFilter=We,n.wrapS=n.wrapT=Zs;const s=new uc(new Uint8Array([255]),1,1,Ks);s.needsUpdate=!0,s.magFilter=s.minFilter=un,s.wrapS=s.wrapT=Hn;const r={uDepth:{value:s},uWaves:{value:n},uTime:{value:0},uWorld:{value:new St(kt,te)},uDepthScale:{value:4},uShallow:{value:new Nt(7324888)},uDeepC:{value:new Nt(1400202)},uSkyC:{value:new Nt(12575487)},uSunC:{value:new Nt(16773840)},uSunDir:{value:new U(-.4,.8,.4).normalize()},uBright:{value:1},uClear:{value:.5},uFoam:{value:1},uWaveScale:{value:1/14},uFlow:{value:.012}},o=new Cn({uniforms:r,transparent:!0,depthWrite:!1,vertexShader:"varying vec3 vW; void main() { vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`
      uniform sampler2D uDepth, uWaves; uniform float uTime, uDepthScale, uBright, uClear, uFoam, uWaveScale, uFlow;
      uniform vec2 uWorld; uniform vec3 uShallow, uDeepC, uSkyC, uSunC, uSunDir;
      varying vec3 vW;
      void main() {
        vec2 uv = vW.xz / uWorld;
        float inside = step(0.0, uv.x) * step(uv.x, 1.0) * step(0.0, uv.y) * step(uv.y, 1.0);
        float d = inside > 0.5 ? texture2D(uDepth, uv).r * uDepthScale : uDepthScale + 1.0; // metres of water; outside the world = deep sea
        vec2 wp = vW.xz * uWaveScale;
        float w1 = texture2D(uWaves, wp + vec2(uTime * 0.017, -uTime * uFlow)).r;
        float w2 = texture2D(uWaves, wp * 1.7 + vec2(-uTime * 0.011, uTime * 0.02) + 0.37).r;
        float w3 = texture2D(uWaves, wp * 0.6 + vec2(uTime * 0.007, uTime * 0.01) + 0.71).r;
        vec3 n = normalize(vec3((w1 - w3) * 0.42 + (w2 - 0.5) * 0.12, 1.0, (w2 - w3) * 0.42 + (w1 - 0.5) * 0.12));
        vec3 v = normalize(cameraPosition - vW);
        float fres = 0.05 + 0.95 * pow(1.0 - max(dot(n, v), 0.0), 4.0);
        float depthMix = smoothstep(0.0, 3.4, d);
        vec3 body = mix(uShallow, uDeepC, depthMix) * (0.8 + 0.35 * w1);
        vec3 refl = uSkyC * (0.78 + 0.22 * n.x);
        vec3 col = mix(body, refl, clamp(fres * 0.75, 0.0, 0.7));
        // sun glint: the mirror direction of the sun, broken by the ripples
        vec3 r = reflect(-v, n);
        float spec = pow(max(dot(r, normalize(uSunDir)), 0.0), 80.0) * 1.5 + pow(max(dot(r, normalize(uSunDir)), 0.0), 8.0) * 0.12;
        col += uSunC * spec;
        // foam on the shore: a bright band that pulses in and out, and a thin hard line at the very edge
        float shore = 1.0 - smoothstep(0.02, 0.55, d);
        float lap = 0.5 + 0.5 * sin(uTime * 1.4 + w2 * 6.0 + d * 9.0);
        float foam = uFoam * (shore * smoothstep(0.35, 0.8, w1 + 0.25 * lap) * 0.8 + (1.0 - smoothstep(0.0, 0.12, d)) * 0.9);
        col = mix(col, vec3(1.0), clamp(foam, 0.0, 1.0));
        col *= uBright;
        float alpha = mix(uClear, 0.9, smoothstep(0.0, 2.6, d)) + fres * 0.18 + foam * 0.5;
        gl_FragColor = vec4(col, clamp(alpha, 0.0, 0.97));
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`}),a=new Xt(new Ss(kt,te).rotateX(-Math.PI/2),o);a.position.x=kt/2,a.position.z=te/2,a.visible=!1,a.renderOrder=2,a.frustumCulled=!1;let c=0;const l={river:{shallow:8369364,deep:3041944,clear:.55,bright:1},riverdusk:{shallow:8029864,deep:2897240,clear:.6,bright:.72},tropical:{shallow:6283478,deep:879272,clear:.38,bright:1.05},dusk:{shallow:4892344,deep:1059416,clear:.5,bright:.78}};return{mesh:a,setLevel(h){a.visible=h!==null,h!==null&&(a.position.y=h)},setPalette(h){const u=h==="tropical"||h==="dusk",f=l[h];r.uShallow.value.setHex(f.shallow),r.uDeepC.value.setHex(f.deep),r.uClear.value=f.clear,r.uBright.value=f.bright,r.uWaveScale.value=u?1/10:1/14,r.uFlow.value=u?.004:.012,a.scale.set(u?9:1,1,u?9:1)},setSky(h,u,f){r.uSkyC.value.setHex(h),r.uSunC.value.setHex(u),r.uSunDir.value.set(f[0],f[1],f[2])},setDepth(h,u,f,d){const v=new uc(new Uint8Array(h),u,f,Ks);v.magFilter=v.minFilter=un,v.wrapS=v.wrapT=Hn,v.needsUpdate=!0,r.uDepth.value.dispose(),r.uDepth.value=v,r.uDepthScale.value=d,r.uWorld.value.set(kt,te)},update(h){c+=h,r.uTime.value=c}}}class i3{group=new we;items=[];next=0;constructor(){const t=new go(.62,.8,28).rotateX(-Math.PI/2);for(let e=0;e<40;e++){const n=new Xt(t,new Ge({color:15398655,transparent:!0,opacity:0,depthWrite:!1}));n.visible=!1,n.renderOrder=3,this.group.add(n),this.items.push({mesh:n,life:0,max:1,size:1})}}spawn(t,e,n,s,r){const o=this.items[this.next];this.next=(this.next+1)%this.items.length,o.life=o.max=r,o.size=s,o.mesh.position.set(t,e+.04,n),o.mesh.visible=!0}clear(){for(const t of this.items)t.life=0,t.mesh.visible=!1}update(t){for(const e of this.items){if(e.life<=0)continue;if(e.life-=t,e.life<=0){e.mesh.visible=!1;continue}const n=1-e.life/e.max;e.mesh.scale.setScalar(.25+e.size*n),e.mesh.material.opacity=.7*(1-n)*(1-n)}}}function s3(i,t=!1){const e=new we,n=i.canopies.length,s=[[4.6,2.2,1.1,.92],[3.4,2,3,1],[1.9,1.5,4.7,1.08]],r=new Te,o=new Nt,a={trees:[],hide:[],garages:[]};e.userData.targets=a;const c=i.canopies.map(x=>({x:x.x,y:x.y-3.3,z:x.z,rotY:x.tone*3,parts:[]}));a.trees.push(...c);for(const[x,m,p,M]of s){const g=new bn(new ce(1,1,1),new de({color:16777215}),Math.max(1,n));i.canopies.forEach((_,E)=>{r.position.set(_.x,_.y+p*_.s,_.z),r.scale.set(x*_.s,m*_.s,x*_.s),r.rotation.y=_.tone*3,r.updateMatrix(),g.setMatrixAt(E,r.matrix),c[E].parts.push({mesh:g,index:E,off:new U(0,_.y+p*_.s-c[E].y,0),scale:new U(x*_.s,m*_.s,x*_.s)}),o.setHSL(.27+_.tone*.07,.5,(.27+_.tone*.08)*M),g.setColorAt(E,o)}),g.count=n,g.receiveShadow=!0,e.add(g)}const l=new bn(new ce(.9,.5,.9),new Ge({color:16773808}),Math.max(1,i.lamps.length));if(i.lamps.forEach((x,m)=>{r.position.set(x.x,x.y+.25,x.z),r.scale.setScalar(1),r.rotation.y=0,r.updateMatrix(),l.setMatrixAt(m,r.matrix)}),l.count=i.lamps.length,e.add(l),i.lamps.forEach((x,m)=>a.hide.push({x:x.x,y:x.y,z:x.z,kind:"lamp",meshes:[l],index:m})),t&&i.lamps.length){const x=document.createElement("canvas");x.width=x.height=64;const m=x.getContext("2d"),p=m.createRadialGradient(32,32,0,32,32,32);p.addColorStop(0,"rgba(255,236,170,1)"),p.addColorStop(.35,"rgba(255,200,110,0.55)"),p.addColorStop(1,"rgba(255,170,80,0)"),m.fillStyle=p,m.fillRect(0,0,64,64);const M=new Oc(x);M.colorSpace=Ye;const g=new Ge({map:M,transparent:!0,depthWrite:!1,blending:Xn}),_=new bn(new Ss(1,1).rotateX(-Math.PI/2),g,i.lamps.length),E=new bn(new ui(1,10,8),new Ge({color:16761962,transparent:!0,opacity:.5,depthWrite:!1,blending:Xn}),i.lamps.length);i.lamps.forEach((b,w)=>{r.position.set(b.x,(b.gy??b.y-5.2)+.2,b.z),r.scale.set(14,1,14),r.rotation.set(0,0,0),r.updateMatrix(),_.setMatrixAt(w,r.matrix),r.position.set(b.x,b.y+.25,b.z),r.scale.setScalar(1.7),r.updateMatrix(),E.setMatrixAt(w,r.matrix)}),_.renderOrder=E.renderOrder=5,e.add(_,E);for(const b of a.hide)b.kind==="lamp"&&b.meshes.push(_,E)}const h=i.neons??[];if(h.length){const x=new bn(new ce(1,1,1),new Ge({color:16777215}),h.length);h.forEach((m,p)=>{r.position.set(m.x,m.y,m.z),r.scale.set(m.sx,m.sy,m.sz),r.rotation.y=0,r.updateMatrix(),x.setMatrixAt(p,r.matrix),x.setColorAt(p,o.setHex(m.color)),a.hide.push({x:m.x,y:m.y,z:m.z,kind:"neon",meshes:[x],index:p})}),e.add(x)}const u=i.palms??[];if(u.length){const x=[];for(let M=0;M<7;M++){const g=new ce(3.8,.1,1).toNonIndexed();g.translate(1.9,0,0).rotateZ(-.5).rotateY(M/7*Math.PI*2+.3),x.push(g)}const m=new ui(.45,7,5).toNonIndexed();x.push(m);const p=new bn(lo(x),new de({color:16777215,side:je}),u.length);u.forEach((M,g)=>{r.position.set(M.x,M.y,M.z),r.scale.setScalar(M.s),r.rotation.y=M.tone*6.28,r.updateMatrix(),p.setMatrixAt(g,r.matrix),p.setColorAt(g,o.setHSL(.27+M.tone*.05,.62,.3+M.tone*.1)),a.trees.push({x:M.x,y:M.y-4.5,z:M.z,rotY:M.tone*6.28,parts:[{mesh:p,index:g,off:new U(0,4.5,0),scale:new U(M.s,M.s,M.s)}]})}),p.castShadow=!0,e.add(p)}const f=i.firs??[];if(f.length){const x=[],m=(M,g,_,E)=>{const b=new ce(M,g,M).toNonIndexed().translate(0,_,0),w=new ce(M*.86,.32,M*.86).toNonIndexed().translate(0,_+g/2+.05,0);for(const[A,y]of[[b,E],[w,15922938]]){const S=new Nt(y),R=A.getAttribute("position").count,N=new Float32Array(R*3);for(let T=0;T<R;T++)N.set([S.r,S.g,S.b],T*3);A.setAttribute("color",new en(N,3)),x.push(A)}};m(4,1.5,2.2,2050604),m(3.2,1.5,3.5,2446645),m(2.4,1.4,4.8,2777148),m(1.4,1.4,6,3107394);const p=new bn(lo(x),new de({color:16777215,vertexColors:!0}),f.length);f.forEach((M,g)=>{r.position.set(M.x,M.y,M.z),r.scale.setScalar(M.s),r.rotation.y=M.tone*6.28,r.updateMatrix(),p.setMatrixAt(g,r.matrix),a.trees.push({x:M.x,y:M.y,z:M.z,rotY:M.tone*6.28,parts:[{mesh:p,index:g,off:new U(0,0,0),scale:new U(M.s,M.s,M.s)}]})}),p.castShadow=!0,p.receiveShadow=!0,e.add(p)}const d=i.umbrellas??[];if(d.length){const x=new bn(new po(1.7,.9,8).translate(0,2.7,0),new de({color:16777215}),d.length),m=new bn(new Ce(.07,.07,2.7,6).translate(0,1.35,0),new de({color:9071162}),d.length);d.forEach((p,M)=>{r.position.set(p.x,p.y,p.z),r.scale.setScalar(1),r.rotation.set(.12,M*1.7,.08),r.updateMatrix(),x.setMatrixAt(M,r.matrix),m.setMatrixAt(M,r.matrix),x.setColorAt(M,o.setHex(p.color)),a.hide.push({x:p.x,y:p.y,z:p.z,kind:"umbrella",meshes:[x,m],index:M})}),x.castShadow=!0,e.add(x,m)}const v=[];for(const x of i.tunnels??[]){const m=x.kind==="castle",p=new de({color:m?14465402:7303287,transparent:!0,opacity:1}),M=new de({color:m?13215078:5790304,transparent:!0,opacity:1}),g=new we;g.position.set(x.cx,0,x.cz),g.rotation.y=-Math.atan2(x.dz,x.dx);const _=new Xt(new ce(x.len,x.y1-x.y0,x.wid),p);if(_.position.y=(x.y0+x.y1)/2,_.castShadow=!0,g.add(_),m){for(let E=-x.len/2+.7;E<x.len/2-.5;E+=1.9)for(const b of[-x.wid/2+.5,x.wid/2-.5]){const w=new Xt(new ce(1,.9,.9),p);w.position.set(E,x.y1+.45,b),g.add(w)}for(const E of[-1,1]){const b=new Xt(new ce(.5,1.1,x.wid+.4),M);b.position.set(E*(x.len/2-.1),x.y0+.55,0),g.add(b)}}e.add(g),v.push({mats:[p,M],cx:x.cx,cz:x.cz,dx:x.dx,dz:x.dz,hl:x.len/2,hw:x.wid/2,alpha:1})}e.userData.fades=v,(i.loops??[]).forEach((x,m)=>{const p=r3(x);e.add(p.group),v.push({mats:[p.mat],cx:x.ex,cz:x.ez,dx:x.dx,dz:x.dz,hl:0,hw:0,alpha:1,loop:m})});for(const x of i.slabs??[]){const m=x.x1-x.x0,p=x.z1-x.z0,M=(x.x0+x.x1)/2,g=(x.z0+x.z1)/2,_=new we;e.add(_),a.garages.push({x:M,z:g,obj:_});const E=new Xt(new ce(m,x.t,p),new de({color:11844034,transparent:!0,opacity:.3,depthWrite:!1}));E.position.set(M,x.y-x.t/2,g),E.renderOrder=4,_.add(E);const b=new de({color:7304059});for(const[w,A,y,S]of[[M,x.z0+.4,m,.8],[M,x.z1-.4,m,.8],[x.x0+.4,g,.8,p],[x.x1-.4,g,.8,p]]){const R=new Xt(new ce(y,x.t+.7,S),b);R.position.set(w,x.y-x.t/2+.3,A),R.castShadow=!0,_.add(R)}}return e}function r3(i){const t=new we,e=72,n=6,s=[],r=[],o=[],a=new U,c=new fn,l=Gu(i,new U),h=new U,u=new Nt,f=[-i.width/2,-i.width/2+1.1,-i.width/6,i.width/6,i.width/2-1.1,i.width/2],d=(g,_)=>g===0||g===4?Math.floor(_/2)%2?14235694:15790320:g===2?_%6<3?8017458:7294509:_%4<2?9069112:8346163;for(let g=0;g<=e;g++){const _=g/e*Math.PI*2;Ys(i,_,0,0,a,c),h.set(0,1,0).applyQuaternion(c);for(let E=0;E<=n-1;E++){const b=a.clone().addScaledVector(l,f[E]).addScaledVector(h,-.15);s.push(b.x,b.y,b.z),u.setHex(d(Math.min(E,n-2),g)),r.push(u.r,u.g,u.b)}}const v=n;for(let g=0;g<e;g++)for(let _=0;_<v-1;_++){const E=g*v+_,b=E+1,w=E+v,A=w+1;o.push(E,b,w,b,A,w)}const x=new Ue;x.setAttribute("position",new ue(s,3)),x.setAttribute("color",new ue(r,3)),x.setIndex(o),x.computeVertexNormals();const m=new de({vertexColors:!0,side:je,transparent:!0,opacity:1}),p=new Xt(x,m);p.castShadow=!0,p.receiveShadow=!0,t.add(p);const M=new de({color:6965031});for(const g of[Math.PI/2,Math.PI,3*Math.PI/2]){Ys(i,g,0,0,a,c);for(const _ of[-1,1]){const E=a.x+l.x*_*(i.width/2+.5),b=a.z+l.z*_*(i.width/2+.5),w=a.y-i.y,A=new Xt(new ce(.7,Math.max(.5,w),.7),M);A.position.set(E,i.y+Math.max(.5,w)/2,b),A.castShadow=!0,t.add(A)}}for(const g of[Math.PI/2,3*Math.PI/2]){Ys(i,g,0,0,a,c);const _=new Xt(new ce(.5,.5,i.width+1.2),M);_.position.set(a.x,a.y-.4,a.z),_.rotation.y=Math.atan2(-i.dz,i.dx),t.add(_)}return{group:t,mat:m}}const o3=.97,a3=2/3,Vh=4.5,c3=new URLSearchParams(location.search).get("zoom"),Yr=14,Gh=5,Wh=30,Xh=12,qh=15,l3=5,h3=["missile","nitro","hammer"],ri=[{name:"Sinä",color:14168875,lane:-2.8,skill:1},{name:"Keltainen",color:15909166,lane:2.8,skill:.95},{name:"Sininen",color:3108832,lane:-2.8,skill:.91},{name:"Violetti",color:9323721,lane:2.8,skill:.87}],ye=i=>document.getElementById(i),Yh=i=>Math.min(1,Math.max(0,i)),jr=i=>{const t=Math.floor(i/60),e=i-t*60;return`${t}:${e.toFixed(2).padStart(5,"0")}`};class u3{renderer;scene=new d2;camera=new zc(-1,1,1,-1,1,900);world=new sg;track;def=_n[0];screen="menu";menuIdx=0;trackIdx=0;condIdx=_n.map(()=>0);night=!1;prevThrottle=0;prevSteer=0;cars=ri.map(t=>new eo(t.color));racers=[];drivers=[];pickups=[];drone=null;sinceDrop=0;missiles=[];get car(){return this.cars[0]}input=new hx;particles=new ux;water=n3();ripples=new i3;propsGroup;snd=new Vg;lastCount=99;hammerFx=null;destruction=null;hammerShake=0;tmpLight=[1,1,1];debugStrike=-1;targets;resetHold=0;airT=ri.map(()=>0);lastVy=ri.map(()=>0);bumpCool=0;lastBump=0;prevSpeed=0;hitCool=0;hemi;sunOffset=[...fi.sunOffset];tropical=!1;fades=[];loopRuns=new Map;loopCool=new Map;wasWet=ri.map(()=>[0,0,0,0]);seenJumpsAll=ri.map(()=>0);wakeTimer=0;mines=[];sun;ground=f3();base={cx:0,cy:0,hw:1,hh:1};trauma=0;shakeX=0;shakeY=0;cam={cx:0,cy:0,k:1};big=!1;camSnap=!0;worldBox;groundNeeded=!1;dropBag=[];lastDrop=null;viewIdx=Math.min(Dr.length-1,Number(new URLSearchParams(location.search).get("view"))||0);state="countdown";countdown=3.2;raceTime=0;best=1/0;acc=0;last=performance.now();clock=0;toastTimer=0;fpsFrames=0;fpsTime=0;constructor(t){this.renderer=new f2({antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Zh,t.appendChild(this.renderer.domElement),this.scene.background=new Nt(1316639),this.scene.add(this.world.group,...this.cars.map(a=>a.group),this.particles.mesh,this.ground,this.water.mesh,this.ripples.group),this.renderer.toneMapping=$h,this.renderer.toneMappingExposure=1.15,this.hemi=new W2(10337791,8020548,.8),this.scene.add(this.hemi),this.sun=new j2(16769461,2.6);const e=this.sun.shadow.camera;e.left=-Yr,e.right=Yr,e.top=Yr,e.bottom=-Yr,e.near=1,e.far=400;const n=this.renderer.capabilities.maxTextureSize>=8192&&!matchMedia("(pointer:coarse)").matches;this.sun.shadow.mapSize.set(n?2048:1024,n?2048:1024),this.sun.shadow.bias=-3e-4,this.sun.shadow.normalBias=.02,this.sun.castShadow=!0,this.scene.add(this.sun,this.sun.target),addEventListener("resize",()=>this.fitCamera()),ye("view-btn").addEventListener("pointerdown",a=>{a.preventDefault(),this.cycleView()}),ye("menu-btn").addEventListener("pointerdown",a=>{a.preventDefault(),this.showMenu()});const s=()=>{this.snd.unlock()};for(const a of["pointerdown","keydown","touchend"])addEventListener(a,s,{passive:!0});document.addEventListener("visibilitychange",()=>{document.hidden?this.snd.pause():this.snd.unlock()}),ye("snd-btn").addEventListener("pointerdown",a=>{a.preventDefault(),this.cycleSound()}),this.updateSoundButton(),new URLSearchParams(location.search).get("audio")==="1"&&this.snd.unlock(),this.buildMenu();const r=new URLSearchParams(location.search).get("track"),o=Number(new URLSearchParams(location.search).get("cond"))||0;if(r!==null){const a=Math.min(_n.length-1,Number(r)||0);this.condIdx[a]=o,this.startTrack(a)}else this.showMenu();requestAnimationFrame(this.frame)}applyLighting(t){this.renderer.toneMappingExposure=t.exposure,this.hemi.color.setHex(t.skyColor),this.hemi.groundColor.setHex(t.groundColor),this.hemi.intensity=t.hemiIntensity,this.sun.color.setHex(t.sunColor),this.sun.intensity=t.sunIntensity,this.sunOffset=[...t.sunOffset],this.scene.background.setHex(t.background),this.world.setLighting(t),this.water.setPalette(t.water),this.water.setSky(t.skyColor,t.sunColor,this.world.sunDir),this.tropical=t.water==="tropical"||!!t.noGround,this.world.xray.amount.value=0}loadTrack(){this.track=t3(this.world,this.def);const t=this.def.conditions?.[this.condIdx[this.trackIdx]];this.night=!!t?.night,this.applyLighting(t?.lighting??this.def.lighting??fi);for(const n of this.cars)n.setNight(this.night);{const n=new URLSearchParams(location.search).get("gi");this.world.gi=n==="0"?0:n==="1"?1:2}this.world.setLights(this.night?(this.track.props?.lamps??[]).map(n=>({x:n.x,y:n.y,z:n.z,r:13,color:[1,.68,.34]})):null),this.world.rebuildAll(),this.propsGroup&&(this.scene.remove(this.propsGroup),this.propsGroup.traverse(n=>{const s=n;s.isInstancedMesh&&s.dispose()})),this.propsGroup=this.track.props?s3(this.track.props,this.night):void 0,this.propsGroup&&this.scene.add(this.propsGroup),this.water.setLevel(this.world.waterY);const e=this.world.waterDepthMap();e&&this.water.setDepth(e.data,e.w,e.h,e.scale),this.fades=this.propsGroup?.userData.fades??[],this.targets=this.propsGroup?.userData.targets,this.hammerFx&&(this.scene.remove(this.hammerFx.group),this.hammerFx=null),this.destruction=null,this.hammerShake=0,this.loopRuns.clear(),this.loopCool.clear(),this.ripples.clear();for(const n of this.mines)this.scene.remove(n.mesh);this.mines=this.track.mines.map(n=>{const s=new we,r=new Xt(new Ce(1.2,1.4,.5,8),new de({color:3356221})),o=new Xt(new Ce(.5,.5,.3,8),new Ge({color:16722474}));return o.position.y=.35,r.castShadow=!0,s.add(r,o),s.position.set(n.x,this.world.heightAt(n.x,n.z)+.25,n.z),this.scene.add(s),{x:n.x,z:n.z,mesh:s,alive:!0}})}buildMenu(){const t=ye("cards");_n.forEach((e,n)=>{const s=document.createElement("div");s.className="card",s.innerHTML=`<canvas width="360" height="240"></canvas><h2>${e.name}</h2><p>${e.blurb}</p>`;const r=e.conditions;if(r&&r.length>1){const o=document.createElement("div");o.className="conds",r.forEach((a,c)=>{const l=document.createElement("button");l.className="chip",l.innerHTML=`${a.icon} ${a.name}`,l.addEventListener("pointerdown",h=>{h.preventDefault(),h.stopPropagation(),this.snd.unlock(),this.snd.blip(),this.menuIdx=n,this.condIdx[n]=c,this.highlightMenu()}),o.appendChild(l)}),s.appendChild(o)}s.addEventListener("pointerdown",o=>{o.preventDefault(),this.snd.unlock(),this.snd.blip(),this.menuIdx=n,this.startTrack(n)}),t.appendChild(s),d3(s.querySelector("canvas"),e)}),this.highlightMenu()}highlightMenu(){document.querySelectorAll("#cards .card").forEach((t,e)=>{t.classList.toggle("sel",e===this.menuIdx),e===this.menuIdx&&t.scrollIntoView({block:"nearest",inline:"nearest"}),t.querySelectorAll(".chip").forEach((n,s)=>n.classList.toggle("on",s===this.condIdx[e]))})}showMenu(){this.screen="menu",document.body.classList.add("menu"),document.body.classList.remove("loading"),ye("menu").style.display="flex"}startTrack(t){this.trackIdx=t,this.screen="loading",document.body.classList.add("menu","loading"),this.def=_n[t],setTimeout(()=>{this.restart(),this.fitCamera(),this.screen="game",this.last=performance.now(),this.acc=0,document.body.classList.remove("menu","loading"),ye("menu").style.display="none"},60)}restart(){this.loadTrack();const t=new URLSearchParams(location.search),e=t.get("at"),n=t.get("car"),s=this.track,r=s.length/s.pts.length,o=s.pts.length,a=e!==null?Number(e)+Math.round(7/r):s.startIdx;if(this.drivers=[],this.racers=ri.map((u,f)=>{const d=this.cars[f],v=7+7*Math.floor(f/2),x=((a-Math.round(v/r))%o+o)%o,m=s.pts[x],p=s.tan[x];return d.reset(m.x-p.z*u.lane,this.world.heightAt(m.x,m.z)+zr+.3,m.z+p.x*u.lane,eo.headingOf(p.x,p.z)),d.nitro=1,f>0&&this.drivers.push(new Fg(s,d,u.lane*.8,u.skill,(M,g)=>this.world.heightAt(M,g),(M,g)=>_c[this.world.matAt(M,g)])),{car:d,name:u.name,lap:1,nextCp:1,lapStart:0,finish:null,item:null,fireT:0}}),n){const[u,f]=n.split(",").map(Number);this.car.reset(u,this.world.heightAt(u,f)+zr+.3,f,0)}const c=t.get("loopth");c!==null&&this.track?.props?.loops?.length&&this.loopRuns.set(this.car,{def:this.track.props.loops[0],th:Number(c),b:0,v:.01});const l=Number(t.get("speed"))||0;if(l){const u=new U(1,0,0).applyQuaternion(this.car.quat);this.car.vel.copy(u).multiplyScalar(l)}for(const u of this.missiles)this.scene.remove(u.group);this.missiles=[];for(const u of this.pickups)this.scene.remove(u.group);this.pickups=[],this.drone&&(this.scene.remove(this.drone.group),this.drone=null),this.sinceDrop=0;const h=t.get("item");(h==="missile"||h==="nitro"||h==="hammer")&&(this.racers[0].item=h),this.debugStrike=t.get("strike")!==null?Number(t.get("strike"))||1:-1,t.get("shake")&&(this.trauma=Number(t.get("shake"))||1),this.state="countdown",this.countdown=3.2,this.lastCount=99,this.raceTime=0,ye("msg").textContent="",ye("best").textContent=this.best<1/0?`Paras ${jr(this.best)}`:""}fitCamera(){const t=innerWidth,e=innerHeight;this.renderer.setSize(t,e);const n=this.track;if(!n)return;const s=Dr[this.viewIdx],r=s.pitch*Math.PI/180,o=s.yaw*Math.PI/180,a=Number(new URLSearchParams(location.search).get("zoom"))||0,c=a?this.car.pos.clone():new U(kt/2,3,te/2),l=new U(Math.sin(o)*Math.cos(r),Math.sin(r),Math.cos(o)*Math.cos(r));this.camera.position.copy(c).addScaledVector(l,400),this.camera.lookAt(c),this.camera.updateMatrixWorld();const h=this.camera.matrixWorldInverse;let u=1e9,f=-1e9,d=1e9,v=-1e9;const x=(b,w,A)=>{const y=new U(b,w,A).applyMatrix4(h);u=Math.min(u,y.x),f=Math.max(f,y.x),d=Math.min(d,y.y),v=Math.max(v,y.y)},m=t/e;this.groundNeeded=!1;let p=null,M=!1;if(s.fill){for(const T of[0,kt])for(const D of[0,te])x(T,se+gc,D);const b=(f-u)/2,w=(v-d)/2,A=o3/(1/b+1/(m*w)),y={cx:(u+f)/2,cy:(d+v)/2,hw:A};u=d=1e9,f=v=-1e9;const S=n,R=S.hw+4.2;for(let T=0;T<S.pts.length;T+=6)for(const D of[-R,R]){const I=S.pts[T].x-S.tan[T].z*D,k=S.pts[T].z+S.tan[T].x*D;x(I,0,k),x(I,this.world.heightAt(I,k)+6,k)}const N=Math.max((f-u)/2,(v-d)/2*m);N<=A?p=y:(p={cx:(u+f)/2,cy:(d+v)/2,hw:N},this.groundNeeded=!0,M=!0)}else{const b=_n[0];M=n.playW>b.playW+.5||n.playH>b.playH+.5;const w=(kt-n.playW)/2,A=(te-n.playH)/2;for(const y of[w,w+n.playW])for(const S of[0,se+n.maxElevation+8])for(const R of[A,A+n.playH])x(y,S,R)}{const b={minX:u,maxX:f,minY:d,maxY:v};u=d=1e9,f=v=-1e9;for(const w of[0,kt])for(const A of[0,te])x(w,0,A),x(w,se+gc,A);this.worldBox={minX:u,maxX:f,minY:d,maxY:v},{minX:u,maxX:f,minY:d,maxY:v}=b}if(this.big=M&&!a,this.camSnap=!0,a){const b=t/e,w=14/a;this.setBase(0,0,w*b,w);return}if(p){this.setBase(p.cx,p.cy,p.hw,p.hw/m);return}const g=1.03;let _=(f-u)/2*g,E=(v-d)/2*g;_/E<m?_=E*m:E=_/m,this.setBase((u+f)/2,(d+v)/2,_,E)}setBase(t,e,n,s){this.base={cx:t,cy:e,hw:n,hh:s},this.cam={cx:t,cy:e,k:1},this.camSnap=!0,this.applyCam()}applyCam(){const{hw:t,hh:e}=this.base,{cx:n,cy:s,k:r}=this.cam,o=n+this.shakeX*t*r,a=s+this.shakeY*e*r;Object.assign(this.camera,{left:o-t*r,right:o+t*r,top:a+e*r,bottom:a-e*r}),this.camera.updateProjectionMatrix(),this.ground.visible=!this.tropical&&(this.groundNeeded||this.cam.k>1.002)}addShake(t,e,n){const s=Math.hypot(e-this.car.pos.x,n-this.car.pos.z);this.trauma=Math.min(1,this.trauma+t/(1+(s/45)**2))}updateShake(t){this.trauma=Math.max(Math.max(0,this.trauma-t*1.1),this.hammerShake);const e=this.trauma*this.trauma*.045,n=this.clock*62;this.shakeX=e*(Math.sin(n*1)*.6+Math.sin(n*2.7+1.3)*.4),this.shakeY=e*(Math.sin(n*1.3+.7)*.6+Math.sin(n*3.1+2.1)*.4)}followSun(){const t=this.car.pos;this.sun.target.position.copy(t),this.sun.position.set(t.x+this.sunOffset[0],t.y+this.sunOffset[1],t.z+this.sunOffset[2]),this.sun.target.updateMatrixWorld()}updateCameraZoom(t){if(c3)return;const e=this.camera.matrixWorldInverse,{cx:n,cy:s,hw:r,hh:o}=this.base,a=this.worldBox,c=this.big?Math.sqrt(a3):1,l={x0:1e9,x1:-1e9,y0:1e9,y1:-1e9},h={x0:1e9,x1:-1e9,y0:1e9,y1:-1e9},u=new U;for(const g of this.cars)u.copy(g.pos).applyMatrix4(e),h.x0=Math.min(h.x0,u.x),h.x1=Math.max(h.x1,u.x),h.y0=Math.min(h.y0,u.y),h.y1=Math.max(h.y1,u.y),u.copy(g.pos).addScaledVector(g.vel,.3).applyMatrix4(e),l.x0=Math.min(l.x0,u.x,h.x0),l.x1=Math.max(l.x1,u.x,h.x1),l.y0=Math.min(l.y0,u.y,h.y0),l.y1=Math.max(l.y1,u.y,h.y1);const f=(g,_,E)=>Math.max((Math.max(g.x1-_,_-g.x0)+Vh)/r,(Math.max(g.y1-E,E-g.y0)+Vh)/o),d=(g,_,E)=>_>E?(_+E)/2:Math.min(E,Math.max(_,g)),v=(g,_)=>a?Math.max(1,Math.abs(a.minX-g)/r,Math.abs(a.maxX-g)/r,Math.abs(a.minY-_)/o,Math.abs(a.maxY-_)/o):1;let x,m,p;!this.big&&f(l,n,s)<=1?(x=n,m=s,p=1):(x=(l.x0+l.x1)/2,m=(l.y0+l.y1)/2,p=Math.max(c,f(l,x,m))),a&&(x=d(x,a.minX+r*p,a.maxX-r*p),m=d(m,a.minY+o*p,a.maxY-o*p));const M=this.camSnap?1:1-Math.exp(-t*7);this.cam.cx+=(x-this.cam.cx)*M,this.cam.cy+=(m-this.cam.cy)*M,p>this.cam.k||this.camSnap?this.cam.k=p:this.cam.k+=(p-this.cam.k)*(1-Math.exp(-t*1.5)),this.camSnap=!1,this.cam.k=Math.max(this.cam.k,f(h,this.cam.cx,this.cam.cy)),this.cam.k=Math.min(this.cam.k,v(this.cam.cx,this.cam.cy)),this.applyCam()}frame=t=>{requestAnimationFrame(this.frame);const e=Math.min(.1,(t-this.last)/1e3);if(this.last=t,this.clock+=e,this.fpsFrames++,this.fpsTime+=e,this.fpsTime>=.5&&(ye("fps").textContent=`${Math.round(this.fpsFrames/this.fpsTime)} fps`,this.fpsFrames=0,this.fpsTime=0),this.input.poll(),this.input.soundPressed&&this.cycleSound(),this.screen!=="game"){if(this.screen==="menu"){const s=this.input.steer;Math.abs(s)>.6&&Math.abs(this.prevSteer)<=.6&&(this.menuIdx=(this.menuIdx+(s>0?1:-1)+_n.length)%_n.length,this.condIdx[this.menuIdx]=Math.min(this.condIdx[this.menuIdx],(_n[this.menuIdx].conditions?.length??1)-1),this.highlightMenu(),this.snd.blip()),this.prevSteer=s;const o=_n[this.menuIdx].conditions,a=this.input.navY;o&&a!==0&&a!==this.prevThrottle&&(this.condIdx[this.menuIdx]=(this.condIdx[this.menuIdx]+a+o.length)%o.length,this.highlightMenu(),this.snd.blip()),this.prevThrottle=a,this.input.anyPressed&&(this.snd.unlock(),this.snd.blip(),this.startTrack(this.menuIdx))}this.audioFrame(e);return}if(this.input.menuPressed){this.showMenu();return}if(this.input.viewPressed&&this.cycleView(),this.input.resetPressed&&this.state==="racing"){const s=this.car.bounceCooldown===0;this.car.bounce(),s&&this.snd.boing()}this.input.firePressed&&this.racers[0]&&this.fire(this.racers[0]),this.resetHold=this.input.resetDown&&this.state==="racing"?this.resetHold+e:0,this.resetHold>=Gh&&(this.returnToRoad(),this.resetHold=0),this.updatePowerups(e),this.state==="finished"&&this.input.anyPressed&&this.restart(),this.acc+=e;let n=0;for(;this.acc>=Jo&&n++<10;)this.acc-=Jo,this.simulate(Jo);n>=10&&(this.acc=0),this.updateHammer(e),this.world.update(this.destruction?4:1/0),this.particles.update(e),this.water.update(e),this.ripples.update(e);for(const s of this.cars)s.syncVisual(),this.world.gi>0?(this.world.lightAt(s.pos.x,s.pos.z,this.tmpLight),s.setLight(this.tmpLight,e)):s.setLight([1,1,1],e);this.updateShake(e),this.updateCameraZoom(e),this.followSun(),this.updateHidden(e),this.effects(e),this.updateHud(),this.audioFrame(e),this.renderer.render(this.scene,this.camera)};simulate(t){const e=this.state==="racing";if(this.state==="countdown"){this.countdown-=t;const s=Math.ceil(this.countdown-.2);s!==this.lastCount&&s>0&&s<=3&&(this.snd.beep(3-s),this.lastCount=s),this.countdown<=0&&(this.state="racing",this.snd.beep(3))}else e&&(this.raceTime+=t);const n=Og(this.cars);if(this.hitCool-=t,n>500&&this.hitCool<=0){this.hitCool=.25;let s=null,r=6;for(let o=0;o<this.cars.length;o++)for(let a=o+1;a<this.cars.length;a++){const c=Math.hypot(this.cars[o].pos.x-this.cars[a].pos.x,this.cars[o].pos.z-this.cars[a].pos.z);c<r&&(r=c,s=[this.cars[o],this.cars[a]])}if(s){const o=this.spatial(s[0].pos.x,s[0].pos.y,s[0].pos.z);this.snd.hit(n/4e3,o.gain,o.pan)}}if(this.cars.forEach((s,r)=>{if(this.stepLoop(s,t))return;let o=Fu;r===0?e&&(o=this.input):o=this.drivers[r-1].control(t,this.cars,e&&this.racers[r].finish===null),s.step(t,o,this.world)}),e){for(const s of this.racers)this.checkpoints(s);this.collectPickups(),this.computerFire(t)}this.updateMissiles(t),this.checkMines()}stepLoop(t,e){const n=this.track?.props?.loops??[];if(!n.length)return!1;const s=(this.loopCool.get(t)??0)-e;this.loopCool.set(t,s);let r=this.loopRuns.get(t);if(!r){if(s>0)return!1;const h=1-2*(t.quat.y**2+t.quat.z**2),u=2*(t.quat.x*t.quat.z-t.quat.w*t.quat.y),f=Math.hypot(h,u)||1;for(const d of n){const v=t.pos.x-d.ex,x=t.pos.z-d.ez,m=v*d.dx+x*d.dz,p=v*-d.dz+x*d.dx;if(m>-1.4&&m<1.8&&Math.abs(p)<4.2&&(h*d.dx+u*d.dz)/f>.8&&t.forwardSpeed>7&&!t.airborne&&t.pos.y<d.y+3.5){r={def:d,th:0,b:Math.max(-1.8,Math.min(1.8,p)),v:Math.max(t.forwardSpeed,17)},this.loopRuns.set(t,r);break}}if(!r)return!1}r.th+=r.v*e/lx(r.def,r.th);const o=new U,a=new fn,c=new U,l=zr;return r.th>=Math.PI*2?(Ys(r.def,Math.PI*2,r.b,l,o,a,c),t.setKinematic(e,o,a,c.multiplyScalar(r.v)),t.pos.y+=.1,this.loopRuns.delete(t),this.loopCool.set(t,1.2),!0):(Ys(r.def,r.th,r.b,l,o,a,c),t.setKinematic(e,o,a,c.multiplyScalar(r.v)),!0)}updateHidden(t){const e=this.car;for(const a of this.fades){const c=e.pos.x-a.cx,l=e.pos.z-a.cz,h=c*a.dx+l*a.dz,u=-c*a.dz+l*a.dx;let f=Math.abs(h)<a.hl+2.5&&Math.abs(u)<a.hw+1.5;a.loop!==void 0&&(f=this.loopRuns.get(e)?.def===this.track?.props?.loops?.[a.loop]);const d=f?a.loop!==void 0?.28:.1:1;a.alpha+=(d-a.alpha)*(1-Math.exp(-t*5.5));for(const v of a.mats)v.opacity=a.alpha,v.depthWrite=a.alpha>.97,v.visible=a.alpha>.015}const n=new U;this.camera.getWorldDirection(n).negate();const s=e.pos.clone();s.y+=.6;let r=!1;for(let a=2.5;a<80;a+=.7){const c=s.x+n.x*a,l=s.y+n.y*a,h=s.z+n.z*a;if(c<0||h<0||c>kt||h>te)break;if(this.world.stepHeightAt(c,h)>l+.25){r=!0;break}}const o=this.world.xray;o.pos.value.copy(s),o.toCam.value.copy(n),o.amount.value+=((r?1:0)-o.amount.value)*(1-Math.exp(-t*(r?6:4)))}cycleView(){this.viewIdx=(this.viewIdx+1)%Dr.length,this.fitCamera(),this.flash(Dr[this.viewIdx].name)}flash(t){const e=ye("toast");e.textContent=t,e.classList.add("show"),clearTimeout(this.toastTimer),this.toastTimer=window.setTimeout(()=>e.classList.remove("show"),1200)}randomDropSpot(){const t=this.track,e=t.pts.length,n=t.length/e,s=new URLSearchParams(location.search).get("dropnear")==="1";let r=0;if(s){let o=1e9;t.pts.forEach((a,c)=>{const l=(a.x-this.car.pos.x)**2+(a.z-this.car.pos.z)**2;l<o&&(o=l,r=c)})}for(let o=0;o<60;o++){const a=s?(r+Math.round(22/n)+e)%e:Math.floor(Math.random()*e);if(Math.min((a-t.startIdx+e)%e,(t.startIdx-a+e)%e)*n<25&&!s)continue;const l=(Math.random()*2-1)*3.6,h=t.pts[a],u=t.tan[a],f=h.x-u.z*l,d=h.z+u.x*l;if(!(this.world.waterDepthAt(f,d)>.05)&&!this.coveredSpot(f,d)&&!this.pickups.some(v=>Math.hypot(v.x-f,v.z-d)<8))return{x:f,z:d,idx:a,lat:l}}return null}coveredSpot(t,e){const n=this.track?.props;for(const s of n?.tunnels??[]){const r=t-s.cx,o=e-s.cz,a=r*s.dx+o*s.dz,c=-r*s.dz+o*s.dx;if(Math.abs(a)<s.len/2+4&&Math.abs(c)<s.wid/2+2)return!0}for(const s of n?.loops??[])if(Math.hypot(t-s.ex,e-s.ez)<16)return!0;return!1}sendDrone(){const t=this.randomDropSpot();if(!t)return;if(this.dropBag.length===0)do{this.dropBag=[...h3];for(let d=this.dropBag.length-1;d>0;d--){const v=Math.floor(Math.random()*(d+1));[this.dropBag[d],this.dropBag[v]]=[this.dropBag[v],this.dropBag[d]]}}while(this.dropBag[this.dropBag.length-1]===this.lastDrop);const e=new URLSearchParams(location.search).get("droptype"),n=e==="hammer"||e==="missile"||e==="nitro"?e:this.dropBag.pop();this.lastDrop=n;const s=ox(n);this.scene.add(s);const r=this.world.heightAt(t.x,t.z),o={type:n,group:s,x:t.x,z:t.z,idx:t.idx,lat:t.lat,y:r+Xh,vy:0,state:"carried"};this.pickups.push(o);const a=new U(t.x,r+Xh,t.z),c=Math.random()*Math.PI*2,l=new U(-Math.cos(c),0,-Math.sin(c)),h=new URLSearchParams(location.search).get("drone")==="near"?30:150,u=a.clone().addScaledVector(l,-h);u.y+=6;const f=cx(n);n==="hammer"&&(s.visible=!1),this.scene.add(f),this.drone={group:f,pos:u,target:a,dir:l,pickup:o,phase:"approach",t:0},this.sinceDrop=0}flyDrone(t){const e=this.drone;if(e.t+=t,e.group.traverse(s=>{s.name==="rotor"&&(s.rotation.y+=t*70)}),e.phase==="approach"){const s=new U().subVectors(e.target,e.pos),r=s.length();if(r<.8)e.phase="hover",e.t=0;else{const o=Math.min(Wh,5+r*1.2);e.pos.addScaledVector(s.normalize(),Math.min(r,o*t))}}else if(e.phase==="hover"){if(e.pos.y=e.target.y+Math.sin(e.t*5)*.12,e.t>.8){{const r=this.spatial(e.pos.x,e.pos.y,e.pos.z);this.snd.dropBlip(r.gain,r.pan)}e.pickup.state="falling",e.pickup.group.visible=!0;const s=e.group.userData.load;s&&(s.visible=!1),e.pickup.y=e.pos.y-1.9,e.phase="leave",e.t=0,this.sinceDrop=0}}else if(e.pos.addScaledVector(e.dir,Wh*1.2*t),e.pos.y+=4*t,e.t>6){this.scene.remove(e.group),this.drone=null;return}e.group.position.copy(e.pos),e.group.rotation.y=-Math.atan2(e.dir.z,e.dir.x),e.group.rotation.z=e.phase==="approach"?-.2:0;const n=e.group.userData.load;n&&(n.rotation.x=Math.sin(e.t*4+1)*.06),e.pickup.state==="carried"&&e.pickup.group.position.set(e.pos.x,e.pos.y-1.9,e.pos.z)}updatePowerups(t){this.sinceDrop+=t,!this.drone&&this.pickups.length<l3&&(this.pickups.length===0||this.sinceDrop>=qh)&&this.sendDrone(),this.drone&&this.flyDrone(t);for(const r of this.pickups){if(r.state==="carried")continue;const o=this.world.heightAt(r.x,r.z)+1.9;if(r.state==="falling"&&(r.vy=Math.min(r.vy+14*t,9),r.y-=r.vy*t,r.y<=o)){r.y=o,r.state="landed";for(let c=0;c<14;c++){const l=Math.random()*Math.PI*2,h=1.5+Math.random()*3;this.particles.spawn(r.x,o-1.5,r.z,Math.cos(l)*h,1+Math.random()*2,Math.sin(l)*h,14267002,.4,.5,6)}}const a=r.state==="landed"?Math.sin(this.clock*3)*.25:0;r.group.position.set(r.x,r.y+a,r.z),r.group.children.forEach(c=>{c.name==="spin"&&(c.rotation.y=this.clock*2.2)})}const e=this.track,n=e.pts.length,s=e.length/n;this.drivers.forEach((r,o)=>{const a=this.racers[o+1];let c=null;if(a&&a.item===null){let l=45;for(const h of this.pickups){if(h.state!=="landed")continue;const u=(h.idx-r.idx+n)%n*s;u>3&&u<l&&(l=u,c=Math.max(-4.5,Math.min(4.5,h.lat)))}}r.laneOverride=c})}collectPickups(){for(const t of this.pickups)if(t.state==="landed")for(const e of this.racers){if(e.item!==null)continue;const n=e.car;if(Math.hypot(n.pos.x-t.x,n.pos.z-t.z)>3||Math.abs(n.pos.y-t.y)>4)continue;const s=e===this.racers[0];t.type==="nitro"?(n.nitro=1,s&&this.flash("Nitro täynnä!")):t.type==="hammer"?(e.item="hammer",e.fireT=1+Math.random()*2,s&&this.flash("Thorin vasara! (□ / F)")):(e.item="missile",e.fireT=.8+Math.random()*1.6,s&&this.flash("Ohjus! (□ / F)"));{const r=this.spatial(t.x,t.y,t.z);this.snd.pickup(s?1:r.gain*.6,s?0:r.pan,t.type!=="nitro")}for(let r=0;r<24;r++){const o=Math.random()*Math.PI*2,a=2+Math.random()*5;this.particles.spawn(t.x,t.y,t.z,Math.cos(o)*a,2+Math.random()*5,Math.sin(o)*a,t.type==="missile"?16751200:t.type==="hammer"?16769658:8176895,.4,.7,12)}this.scene.remove(t.group),this.pickups=this.pickups.filter(r=>r!==t),this.sinceDrop=qh;return}}fire(t){if(this.state!=="racing")return;if(t.item==="hammer"){this.strikeHammer(t);return}if(t.item!=="missile")return;t.item=null;const e=t.car,n=new U(1,0,0).applyQuaternion(e.quat).setY(0).normalize(),s=new U().copy(e.pos).addScaledVector(n,2.4);s.y=this.world.heightAt(s.x,s.z)+1.2;{const o=this.spatial(s.x,s.y,s.z);this.snd.missileFire(o.gain,o.pan)}const r=new ax(e,this.track,s,n);this.missiles.push(r),this.scene.add(r.group)}computerFire(t){this.racers.forEach((e,n)=>{if(n===0||e.item!=="missile"&&e.item!=="hammer"||e.finish!==null||(e.fireT-=t,e.fireT>0))return;if(e.item==="hammer"){const c=e.car,l=1-2*(c.quat.y**2+c.quat.z**2),h=2*(c.quat.x*c.quat.z-c.quat.w*c.quat.y),u=Math.hypot(l,h)||1,f=c.pos.x+l/u*Br,d=c.pos.z+h/u*Br;this.cars.some(x=>x!==c&&Math.hypot(x.pos.x-f,x.pos.z-d)<Ch+1)||e.fireT<-12?this.fire(e):e.fireT=Math.max(e.fireT,-13)-.15;return}const s=e.car,r=1-2*(s.quat.y**2+s.quat.z**2),o=2*(s.quat.x*s.quat.z-s.quat.w*s.quat.y);this.cars.some(c=>{if(c===s)return!1;const l=c.pos.x-s.pos.x,h=c.pos.z-s.pos.z,u=Math.hypot(l,h);return u>10&&u<70&&(l*r+h*o)/u>.55})?this.fire(e):e.fireT=.4})}strikeHammer(t){if(this.hammerFx||this.destruction)return;t.item=null;const e=t.car,n=new U(1,0,0).applyQuaternion(e.quat).setY(0).normalize(),s=e.pos.x+n.x*Br,r=e.pos.z+n.z*Br,o=this.world.heightAt(s,r),a=new Yg(s,o,r,n.x,n.z,t.car);this.hammerFx=a,this.scene.add(a.group);const c=this.spatial(s,o,r);this.snd.hammerSwing(Math.max(.6,c.gain),c.pan),this.flash(t===this.racers[0]?"THORIN VASARA!":`${t.name}: Thorin vasara!`)}hammerImpact(t){const e=this.world,n=this.track,s=this.targets??{trees:[],hide:[],garages:[]};this.destruction=new Kg(e,n,s,t.x,t.z,this.clock),this.destruction.onDestroyed=(c,l,h,u)=>{const f=u?26:8;for(let d=0;d<f;d++){const v=Math.random()*Math.PI*2,x=2+Math.random()*(u?9:5);this.particles.spawn(c,l,h,Math.cos(v)*x,3+Math.random()*7,Math.sin(v)*x,d%3?9209468:13222324,.5+Math.random()*.9,.7+Math.random()*.8,22)}};const r=this.spatial(t.x,t.y,t.z);this.snd.hammerSlam(Math.max(.8,r.gain),r.pan),this.hammerShake=1;const o=document.getElementById("flash");o.style.transition="none",o.style.opacity="0.9",requestAnimationFrame(()=>{o.style.transition="opacity 0.55s ease-out",o.style.opacity="0"});for(let c=0;c<160;c++){const l=Math.random()*Math.PI*2,h=3+Math.random()*20,u=c%3===0;this.particles.spawn(t.x+Math.cos(l)*2,t.y+.5,t.z+Math.sin(l)*2,Math.cos(l)*h,6+Math.random()*26,Math.sin(l)*h,u?10473727:c%2?7301728:11901554,u?.3:.5+Math.random()*1.1,.8+Math.random()*1.2,30)}const a=1.03*Math.sqrt(2*Xc*Gg);for(const c of this.cars){const l=Math.hypot(c.pos.x-t.x,c.pos.z-t.z);l<Ch&&c!==t.owner?(c.vel.set(c.vel.x*.35,a,c.vel.z*.35),c.angVel.set((Math.random()-.5)*7,(Math.random()-.5)*8,(Math.random()-.5)*7),c===this.car?this.flash("OUCH!"):t.owner===this.car&&this.flash(`Osuit: ${ri[this.cars.indexOf(c)].name}! Ou jea!`)):l<Wn&&(c.vel.y=Math.max(c.vel.y,4+9*(1-l/Wn)),c.angVel.x+=(Math.random()-.5)*2.5,c.angVel.z+=(Math.random()-.5)*2.5)}}updateHammer(t){this.debugStrike>=0&&(this.debugStrike-=t,this.debugStrike<0&&this.strikeHammer(this.racers[0]));const e=this.hammerFx;if(e){e.update(t)==="impact"&&this.hammerImpact(e);const n=e.sinceImpact;if(n>0&&n<1.1){const s=Math.min(Wn,85*n);for(let r=0;r<9;r++){const o=Math.random()*Math.PI*2,a=e.x+Math.cos(o)*s,c=e.z+Math.sin(o)*s;this.particles.spawn(a,this.world.heightAt(a,c)+.4,c,Math.cos(o)*5,2+Math.random()*3,Math.sin(o)*5,12168600,.9+Math.random()*.9,.9+Math.random()*.6,3)}}e.done&&(this.scene.remove(e.group),e.dispose(),this.hammerFx=null)}if(this.destruction&&(this.destruction.update(t),this.destruction.finished&&(this.destruction=null,this.night&&this.targets))){const n=this.targets.hide.filter(s=>s.kind==="lamp");this.world.setLights(n.filter(s=>!s.hidden).map(s=>({x:s.x,y:s.y,z:s.z,r:13,color:[1,.68,.34]})));for(const s of n)s.hidden&&this.world.touch(Math.floor(s.x*K),Math.floor(s.z*K))}this.targets&&Qg(this.targets.trees,this.clock,this.world),this.hammerShake=Math.max(0,this.hammerShake-t*.45)}updateMissiles(t){for(const e of this.missiles){const n=e.update(t,this.cars,this.world);n&&this.missileHit(e,n)}this.missiles=this.missiles.filter(e=>e.alive?!0:(this.scene.remove(e.group),!1))}missileHit(t,e){for(let a=0;a<70;a++){const c=Math.random()*Math.PI*2,l=3+Math.random()*11,h=a%3===0?16765024:a%3===1?16738848:5592410;this.particles.spawn(e.pos.x,e.pos.y+.8,e.pos.z,Math.cos(c)*l,3+Math.random()*10,Math.sin(c)*l,h,.5+Math.random()*.8,.5+Math.random()*.7,18)}{const a=this.spatial(e.pos.x,e.pos.y,e.pos.z);this.snd.explosion(.45,a.gain,a.pan),this.addShake(.4,e.pos.x,e.pos.z)}const n=e.pos.x,s=e.pos.z;Math.min(n,s,kt-n,te-s)>pt+5&&this.world.crater(n,s,2.9,.7);const r=t.dir;e.vel.x=e.vel.x*.55+r.x*3,e.vel.z=e.vel.z*.55+r.z*3,e.vel.y=5+Math.random();const o=new U(0,1,0).cross(r);e.angVel.addScaledVector(o,1.6+Math.random()*1.2),e.angVel.y+=(Math.random()-.5)*1.5,e===this.car?this.flash("Ohjus osui!"):t.owner===this.car&&this.flash(`Osuit: ${ri[this.cars.indexOf(e)].name}!`)}checkpoints(t){const e=this.track,n=e.checkpoints.length;if(t.finish!==null)return;const s=e.pts[e.checkpoints[t.nextCp%n]];if(Math.hypot(s.x-t.car.pos.x,s.z-t.car.pos.z)>e.hw+2)return;if(t.nextCp%n!==0){t.nextCp++,t===this.racers[0]&&this.snd.tick();return}const r=this.raceTime-t.lapStart;if(t.lapStart=this.raceTime,t.nextCp=1,t===this.racers[0]&&(this.best=Math.min(this.best,r),this.snd.jingle(!0)),t.lap>=Qo){if(t.finish=this.raceTime,t===this.racers[0]){this.state="finished";const o=this.standings().indexOf(t)+1;ye("msg").innerHTML=`Maali! Sija ${o}/${this.racers.length}<br><small>${jr(this.raceTime)} · paras kierros ${jr(this.best)}<br>Enter / X = uudelleen · Esc / ☰ = valikko</small>`}}else t.lap++}standings(){const t=this.track,e=t.checkpoints.length,n=s=>{const r=t.pts[t.checkpoints[s.nextCp%e]],o=t.pts[t.checkpoints[(s.nextCp-1+e)%e]],a=Math.max(1,Math.hypot(r.x-o.x,r.z-o.z)),c=1-Math.min(1,Math.hypot(r.x-s.car.pos.x,r.z-s.car.pos.z)/a);return(s.lap-1)*e+(s.nextCp-1)+c};return[...this.racers].sort((s,r)=>s.finish!==null||r.finish!==null?(s.finish??1e9)-(r.finish??1e9):n(r)-n(s))}checkMines(){for(const t of this.mines)!t.alive||!this.cars.some(n=>n.wheels.some(s=>Math.hypot(s.hub.x-t.x,s.hub.z-t.z)<2&&s.hub.y-this.world.heightAt(t.x,t.z)<3))||(t.alive=!1,t.mesh.visible=!1,this.explode(t.x,t.z))}explode(t,e){const n=this.world.heightAt(t,e);for(let s=0;s<60;s++){const r=Math.random()*Math.PI*2,o=4+Math.random()*12,a=s%3===0?16752688:s%3===1?4928804:12618322;this.particles.spawn(t,n+.5,e,Math.cos(r)*o,8+Math.random()*16,Math.sin(r)*o,a,.5+Math.random()*.8,.9+Math.random()*.8,30)}this.world.crater(t,e,3.8,2.4);{const s=this.spatial(t,n,e);this.snd.explosion(1.7,s.gain,s.pan),this.addShake(1,t,e)}for(const s of this.cars){const r=new U(s.pos.x-t,0,s.pos.z-e);r.length()<8&&(r.normalize().multiplyScalar(5).setY(13),s.impulse(r,new U((Math.random()-.5)*5,(Math.random()-.5)*3,(Math.random()-.5)*5)))}}waterEffects(t,e){const n=this.world.waterY;n!==null&&t.wheels.forEach((s,r)=>{const o=s.wet,a=Math.hypot(t.vel.x,t.vel.z);if(o>.05){if(this.wasWet[e][r]<=.05&&a>4){if(!this.wasWet[e].some(l=>l>.05)){const l=this.spatial(s.hub.x,n,s.hub.z);this.snd.splash(Yh(a/24),l.gain,l.pan)}const c=Math.min(26,8+Math.round(a));for(let l=0;l<c;l++){const h=Math.random()*Math.PI*2,u=2+Math.random()*4+a*.12;this.particles.spawn(s.hub.x,n+.1,s.hub.z,Math.cos(h)*u+t.vel.x*.4,4+Math.random()*6+a*.15,Math.sin(h)*u+t.vel.z*.4,l%3?14282492:9422574,.35+Math.random()*.5,.7+Math.random()*.5,24)}this.ripples.spawn(s.hub.x,n,s.hub.z,3.2,1.2)}if(Math.random()<Math.min(1,a*.05)*o*1.5){const c=Math.random()*Math.PI*2;this.particles.spawn(s.hub.x,n+.05,s.hub.z,Math.cos(c)*1.5-t.vel.x*.1,2+Math.random()*3.5,Math.sin(c)*1.5-t.vel.z*.1,Math.random()<.5?15267071:10473714,.3+Math.random()*.4,.45+Math.random()*.3,20)}this.wakeTimer<=0&&a>1.5&&this.ripples.spawn(s.hub.x,n,s.hub.z,1.6+Math.min(2.2,a*.08),.9)}this.wasWet[e][r]=o})}effects(t){this.wakeTimer-=t;for(const n of this.missiles)this.particles.spawn(n.pos.x-n.dir.x*1.1,n.pos.y,n.pos.z-n.dir.z*1.1,(Math.random()-.5)*1.2,(Math.random()-.3)*1.2,(Math.random()-.5)*1.2,Math.random()<.55?16752688:10132128,.35+Math.random()*.25,.35+Math.random()*.25,0);this.cars.forEach((n,s)=>this.carEffects(n,s,t)),this.wakeTimer<=0&&(this.wakeTimer=.1);const e=this.clock;for(const n of this.mines)n.alive&&(n.mesh.children[1].visible=Math.sin(e*8)>-.2)}carEffects(t,e,n){if(this.waterEffects(t,e),t.airborne)this.airT[e]+=n,this.lastVy[e]=t.vel.y;else{if(this.airT[e]>.25&&this.lastVy[e]<-4){const s=this.spatial(t.pos.x,t.pos.y,t.pos.z);this.snd.thump(Yh(-this.lastVy[e]/20),s.gain,s.pan)}this.airT[e]=0}if(t.jumpCount!==this.seenJumpsAll[e]){this.seenJumpsAll[e]=t.jumpCount;{const s=this.spatial(t.pos.x,t.pos.y,t.pos.z);this.snd.launch(s.gain,s.pan)}for(const s of t.wheels)for(let r=0;r<10;r++){const o=Math.random()*Math.PI*2,a=2+Math.random()*4;this.particles.spawn(s.contact.x,s.contact.y+.2,s.contact.z,Math.cos(o)*a,1+Math.random()*3,Math.sin(o)*a,14267002,.5+Math.random()*.5,.6+Math.random()*.4,3)}}for(const s of t.wheels){if(!s.grounded)continue;const r=(t.speed>4?.4:0)+s.slip*.15;if(Math.random()<r*n*60*.25){const o=this.world.matAt(s.contact.x,s.contact.z),a=o===O.Snow||o===O.SnowRoad||o===O.SnowRut?15988731:o===O.Ice?13625847:o===O.Grass||o===O.ShadeGrass?6989382:o===O.Sand?14929812:o===O.Asphalt||o===O.AsphaltLine||o===O.Pavement?11842744:o===O.RiverBed?10129272:13674100;this.particles.spawn(s.contact.x,s.contact.y+.3,s.contact.z,-t.vel.x*.15+(Math.random()-.5)*2,1.5+Math.random()*2,-t.vel.z*.15+(Math.random()-.5)*2,a,.5+Math.random()*.5,.5+Math.random()*.3,2)}}if(t.nitroActive){const s=new U(-3.4*oe,0,0).applyQuaternion(t.quat).add(t.pos),r=new U(-1,0,0).applyQuaternion(t.quat);this.particles.spawn(s.x,s.y,s.z,r.x*10+t.vel.x,r.y*10+t.vel.y,r.z*10+t.vel.z,Math.random()<.5?16756768:4235519,.6,.25,0)}}returnToRoad(){const t=this.track,e=this.car;let n=1/0,s=0;for(let a=0;a<t.pts.length;a++){const c=(t.pts[a].x-e.pos.x)**2+(t.pts[a].z-e.pos.z)**2;c<n&&(n=c,s=a)}const r=t.pts[s],o=t.tan[s];this.loopRuns.delete(e),e.reset(r.x,this.world.heightAt(r.x,r.z)+zr+.4,r.z,eo.headingOf(o.x,o.z)),this.snd.launch(1,0),this.flash("Takaisin radalle")}spatial(t,e,n){const s=new U(t,e,n).project(this.camera),r=Math.hypot(t-this.car.pos.x,n-this.car.pos.z);return{pan:Math.max(-.9,Math.min(.9,s.x*.85)),gain:1/(1+(r/34)**2)}}cycleSound(){this.snd.unlock();const t=this.snd.cycleMode();this.updateSoundButton(),this.flash(t==="all"?"Äänet + musiikki":t==="sfx"?"Vain tehosteäänet":"Äänet pois")}updateSoundButton(){const t=ye("snd-btn");t.textContent=this.snd.mode==="all"?"🔊":this.snd.mode==="sfx"?"🔉":"🔇"}audioFrame(t){const e=this.snd;if(document.body.dataset.audio=e.running?"running":"locked",!e.running){(this.input.anyPressed||this.input.firePressed)&&e.unlock();return}const n=this.def.conditions?.[this.condIdx[this.trackIdx]];if(this.screen!=="game"){const p=_n[this.menuIdx],M=p.conditions?.[this.condIdx[this.menuIdx]];e.setTheme(p.id,M?.night?"evening":"day"),e.tickMusic(.3),e.silenceEngines(),e.updateRoll("none",0,0,0,!1),e.updateCharge(0),e.updateNitro(!1),e.updateMissile(null),e.updateDrone(null);return}e.setTheme(this.def.id,n?.night?"evening":"day");const s=this.car,r=this.state==="racing";e.tickMusic(Math.min(1,s.speed/30)),e.updateEngines(this.cars.map((p,M)=>{const g=M===0?{gain:1,pan:0}:this.spatial(p.pos.x,p.pos.y,p.pos.z),_=M===0?r?this.input.throttle:0:r&&this.racers[M]?.finish===null?this.drivers[M-1].throttle:0;return{speed:Math.abs(p.forwardSpeed),throttle:_,nitro:p.nitroActive,gain:g.gain*(M===0?1:.75),pan:g.pan}}));let o=0,a=0,c=0,l=0,h=0,u=0;for(const p of s.wheels){if(u=Math.max(u,p.wet),h+=p.slip/4,!p.grounded)continue;l++;const M=this.world.matAt(p.contact.x,p.contact.z);M===O.Asphalt||M===O.AsphaltLine||M===O.Pavement||M===O.CheckA||M===O.CheckB||M===O.Concrete||M===O.Stone||M===O.Plank||M===O.Ice?o++:M===O.Grass||M===O.ShadeGrass||M===O.Hedge||M===O.Snow?c++:a++}const f=l===0?"none":o>=a&&o>=c?"hard":c>a?"grass":"gravel";e.updateRoll(f,s.speed,h,u,l>0||this.loopRuns.has(s)),e.updateNitro(s.nitroActive);let d=null,v=1/0;for(const p of this.missiles){const M=Math.hypot(p.pos.x-s.pos.x,p.pos.z-s.pos.z);if(M<v){v=M;const g=this.spatial(p.pos.x,p.pos.y,p.pos.z);d={gain:g.gain,pan:g.pan,speed:no}}}e.updateMissile(d),e.updateDrone(this.drone?this.spatial(this.drone.pos.x,this.drone.pos.y,this.drone.pos.z):null),this.bumpCool-=t;const x=s.bump,m=this.prevSpeed-s.speed;this.bumpCool<=0&&!this.loopRuns.has(s)&&(x>.05&&m>2.5||x>.35&&this.lastBump<=.35)&&(e.hit(Math.min(1,Math.max(m/13,x/2)),1,0),this.bumpCool=.35),this.lastBump=x,this.prevSpeed=s.speed}updateHud(){const t=this.car;ye("speed").textContent=String(Math.round(t.speed*2.6));{let s=0,r=0,o=-1;for(const c of t.wheels)if(c.grounded){const l=this.world.matAt(c.contact.x,c.contact.z);s+=_c[l],r++,o=l}const a=ye("grip");if(r===0)a.textContent="";else{const c=Math.max(1,Math.round(s/r/1.15*5));a.textContent=`PITO ${"▮".repeat(c)}${"▯".repeat(5-c)} ${eg(o)}`,a.classList.toggle("slippery",s/r<.4)}}const e=this.racers[0];ye("lap").textContent=`Kierros ${Math.min(e?.lap??1,Qo)}/${Qo}`,ye("item").textContent=e?.item?`${tx[e.item]} [□ / F]`:"",document.body.classList.toggle("has-item",!!e?.item),e&&(ye("pos").textContent=`Sija ${this.standings().indexOf(e)+1}/${this.racers.length}`),ye("time").textContent=jr(this.raceTime),ye("nitro-fill").style.width=`${t.nitro*100}%`,this.state==="countdown"?ye("msg").textContent=this.countdown>.2?String(Math.ceil(this.countdown-.2)):"GO!":this.state==="racing"&&this.raceTime<.8?ye("msg").textContent="GO!":this.state==="racing"&&(ye("msg").textContent="");const n=ye("hold");n.style.display=this.resetHold>.6?"block":"none",ye("hold-fill").style.width=`${Math.min(1,this.resetHold/Gh)*100}%`}}function f3(){const t=document.createElement("canvas");t.width=t.height=64;const e=t.getContext("2d"),n=new Nt(6265406);for(let l=0;l<64;l++)for(let h=0;h<64;h++){const u=Ze(h,l,77),f=.9+u*.2;let d=n.clone().multiplyScalar(f);u>.985?d=new Nt(14467455):u<.01&&(d=new Nt(9146262)),e.fillStyle=`#${d.getHexString()}`,e.fillRect(h,l,1,1)}const s=new Oc(t);s.colorSpace=Ye,s.magFilter=We,s.wrapS=s.wrapT=Zs,s.repeat.set(1/20,1/20);const r=800,o=new Lu().moveTo(-r,-r).lineTo(r,-r).lineTo(r,r).lineTo(-r,r).closePath();o.holes.push(new dc().moveTo(0,0).lineTo(0,-te).lineTo(kt,-te).lineTo(kt,0).closePath());const a=new Vc(o);a.rotateX(-Math.PI/2);const c=new Xt(a,new de({map:s}));return c.position.y=se+.45,c.receiveShadow=!0,c.visible=!1,c}function d3(i,t){const e=i.getContext("2d"),{pts:n,startIdx:s}=t.centerline();let r=1e9,o=-1e9,a=1e9,c=-1e9;for(const M of n)r=Math.min(r,M.x),o=Math.max(o,M.x),a=Math.min(a,M.z),c=Math.max(c,M.z);const l=26,h=Math.min((i.width-2*l)/(o-r),(i.height-2*l)/(c-a)),u=(i.width-(o-r)*h)/2-r*h,f=(i.height-(c-a)*h)/2-a*h,d=M=>[M.x*h+u,M.z*h+f];e.fillStyle="#4f8a3a",e.fillRect(0,0,i.width,i.height),t.preview?.(e,d,h);const v=()=>{e.beginPath(),n.forEach((M,g)=>{const[_,E]=d(M);g===0?e.moveTo(_,E):e.lineTo(_,E)}),e.closePath()};if(e.lineJoin="round",t.river){e.strokeStyle="#3f8fd6",e.lineWidth=t.river.halfBed*2*h*1.1,e.beginPath();for(let M=0;M<=162;M+=3){const[g,_]=d({x:t.river.x(M),z:M});M===0?e.moveTo(g,_):e.lineTo(g,_)}e.stroke()}const x=t.style==="city";e.strokeStyle=x?"#c9c4b8":t.style==="snow"?"#c9302a":"#e8e8e8",e.lineWidth=(x?8.4:9)*h*1.15+6,v(),e.stroke(),e.strokeStyle=x?"#4a4d53":t.style==="snow"?"#9aa6b0":"#b97f4a",e.lineWidth=15*h,v(),e.stroke();const[m,p]=d(n[s]);e.fillStyle="#fff",e.strokeStyle="#111",e.lineWidth=3,e.beginPath(),e.arc(m,p,7,0,Math.PI*2),e.fill(),e.stroke()}new u3(document.getElementById("app"));"serviceWorker"in navigator&&addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(()=>{}));
