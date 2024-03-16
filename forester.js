(()=>{var ae=window,le=ae.ShadowRoot&&(ae.ShadyCSS===void 0||ae.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ce=Symbol(),Je=new WeakMap,J=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==Ce)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(le&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=Je.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&Je.set(t,e))}return e}toString(){return this.cssText}},We=i=>new J(typeof i=="string"?i:i+"",void 0,Ce),O=(i,...e)=>{let t=i.length===1?i[0]:e.reduce((n,r,o)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+i[o+1],i[0]);return new J(t,i,Ce)},Pe=(i,e)=>{le?i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{let n=document.createElement("style"),r=ae.litNonce;r!==void 0&&n.setAttribute("nonce",r),n.textContent=t.cssText,i.appendChild(n)})},ce=le?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(let n of e.cssRules)t+=n.cssText;return We(t)})(i):i;var Oe,de=window,Qe=de.trustedTypes,Lt=Qe?Qe.emptyScript:"",Ye=de.reactiveElementPolyfillSupport,He={toAttribute(i,e){switch(e){case Boolean:i=i?Lt:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},Xe=(i,e)=>e!==i&&(e==e||i==i),Te={attribute:!0,type:String,converter:He,reflect:!1,hasChanged:Xe},Me="finalized",T=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();let e=[];return this.elementProperties.forEach((t,n)=>{let r=this._$Ep(n,t);r!==void 0&&(this._$Ev.set(r,n),e.push(r))}),e}static createProperty(e,t=Te){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){let n=typeof e=="symbol"?Symbol():"__"+e,r=this.getPropertyDescriptor(e,n,t);r!==void 0&&Object.defineProperty(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){return{get(){return this[t]},set(r){let o=this[e];this[t]=r,this.requestUpdate(e,o,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Te}static finalize(){if(this.hasOwnProperty(Me))return!1;this[Me]=!0;let e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let t=this.properties,n=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(let r of n)this.createProperty(r,t[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let r of n)t.unshift(ce(r))}else e!==void 0&&t.push(ce(e));return t}static _$Ep(e,t){let n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,n;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((n=e.hostConnected)===null||n===void 0||n.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;let t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Pe(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var n;return(n=t.hostConnected)===null||n===void 0?void 0:n.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var n;return(n=t.hostDisconnected)===null||n===void 0?void 0:n.call(t)})}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$EO(e,t,n=Te){var r;let o=this.constructor._$Ep(e,n);if(o!==void 0&&n.reflect===!0){let s=(((r=n.converter)===null||r===void 0?void 0:r.toAttribute)!==void 0?n.converter:He).toAttribute(t,n.type);this._$El=e,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._$El=null}}_$AK(e,t){var n;let r=this.constructor,o=r._$Ev.get(e);if(o!==void 0&&this._$El!==o){let s=r.getPropertyOptions(o),a=typeof s.converter=="function"?{fromAttribute:s.converter}:((n=s.converter)===null||n===void 0?void 0:n.fromAttribute)!==void 0?s.converter:He;this._$El=o,this[o]=a.fromAttribute(t,s.type),this._$El=null}}requestUpdate(e,t,n){let r=!0;e!==void 0&&(((n=n||this.constructor.getPropertyOptions(e)).hasChanged||Xe)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),n.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,n))):r=!1),!this.isUpdatePending&&r&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((r,o)=>this[o]=r),this._$Ei=void 0);let t=!1,n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),(e=this._$ES)===null||e===void 0||e.forEach(r=>{var o;return(o=r.hostUpdate)===null||o===void 0?void 0:o.call(r)}),this.update(n)):this._$Ek()}catch(r){throw t=!1,this._$Ek(),r}t&&this._$AE(n)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(n=>{var r;return(r=n.hostUpdated)===null||r===void 0?void 0:r.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,n)=>this._$EO(n,this[n],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};T[Me]=!0,T.elementProperties=new Map,T.elementStyles=[],T.shadowRootOptions={mode:"open"},Ye?.({ReactiveElement:T}),((Oe=de.reactiveElementVersions)!==null&&Oe!==void 0?Oe:de.reactiveElementVersions=[]).push("1.6.3");var Re,he=window,q=he.trustedTypes,et=q?q.createPolicy("lit-html",{createHTML:i=>i}):void 0,ue="$lit$",H=`lit$${(Math.random()+"").slice(9)}$`,Ue="?"+H,Bt=`<${Ue}>`,N=document,Q=()=>N.createComment(""),Y=i=>i===null||typeof i!="object"&&typeof i!="function",at=Array.isArray,lt=i=>at(i)||typeof i?.[Symbol.iterator]=="function",De=`[ 	
\f\r]`,W=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,tt=/-->/g,it=/>/g,L=RegExp(`>|${De}(?:([^\\s"'>=/]+)(${De}*=${De}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),nt=/'/g,rt=/"/g,ct=/^(?:script|style|textarea|title)$/i,dt=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),_=dt(1),li=dt(2),$=Symbol.for("lit-noChange"),v=Symbol.for("lit-nothing"),ot=new WeakMap,B=N.createTreeWalker(N,129,null,!1);function ht(i,e){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return et!==void 0?et.createHTML(e):e}var ut=(i,e)=>{let t=i.length-1,n=[],r,o=e===2?"<svg>":"",s=W;for(let a=0;a<t;a++){let l=i[a],c,d,u=-1,h=0;for(;h<l.length&&(s.lastIndex=h,d=s.exec(l),d!==null);)h=s.lastIndex,s===W?d[1]==="!--"?s=tt:d[1]!==void 0?s=it:d[2]!==void 0?(ct.test(d[2])&&(r=RegExp("</"+d[2],"g")),s=L):d[3]!==void 0&&(s=L):s===L?d[0]===">"?(s=r??W,u=-1):d[1]===void 0?u=-2:(u=s.lastIndex-d[2].length,c=d[1],s=d[3]===void 0?L:d[3]==='"'?rt:nt):s===rt||s===nt?s=L:s===tt||s===it?s=W:(s=L,r=void 0);let p=s===L&&i[a+1].startsWith("/>")?" ":"";o+=s===W?l+Bt:u>=0?(n.push(c),l.slice(0,u)+ue+l.slice(u)+H+p):l+H+(u===-2?(n.push(void 0),a):p)}return[ht(i,o+(i[t]||"<?>")+(e===2?"</svg>":"")),n]},X=class i{constructor({strings:e,_$litType$:t},n){let r;this.parts=[];let o=0,s=0,a=e.length-1,l=this.parts,[c,d]=ut(e,t);if(this.el=i.createElement(c,n),B.currentNode=this.el.content,t===2){let u=this.el.content,h=u.firstChild;h.remove(),u.append(...h.childNodes)}for(;(r=B.nextNode())!==null&&l.length<a;){if(r.nodeType===1){if(r.hasAttributes()){let u=[];for(let h of r.getAttributeNames())if(h.endsWith(ue)||h.startsWith(H)){let p=d[s++];if(u.push(h),p!==void 0){let f=r.getAttribute(p.toLowerCase()+ue).split(H),w=/([.?@])?(.*)/.exec(p);l.push({type:1,index:o,name:w[2],strings:f,ctor:w[1]==="."?fe:w[1]==="?"?ve:w[1]==="@"?me:z})}else l.push({type:6,index:o})}for(let h of u)r.removeAttribute(h)}if(ct.test(r.tagName)){let u=r.textContent.split(H),h=u.length-1;if(h>0){r.textContent=q?q.emptyScript:"";for(let p=0;p<h;p++)r.append(u[p],Q()),B.nextNode(),l.push({type:2,index:++o});r.append(u[h],Q())}}}else if(r.nodeType===8)if(r.data===Ue)l.push({type:2,index:o});else{let u=-1;for(;(u=r.data.indexOf(H,u+1))!==-1;)l.push({type:7,index:o}),u+=H.length-1}o++}}static createElement(e,t){let n=N.createElement("template");return n.innerHTML=e,n}};function I(i,e,t=i,n){var r,o,s,a;if(e===$)return e;let l=n!==void 0?(r=t._$Co)===null||r===void 0?void 0:r[n]:t._$Cl,c=Y(e)?void 0:e._$litDirective$;return l?.constructor!==c&&((o=l?._$AO)===null||o===void 0||o.call(l,!1),c===void 0?l=void 0:(l=new c(i),l._$AT(i,t,n)),n!==void 0?((s=(a=t)._$Co)!==null&&s!==void 0?s:a._$Co=[])[n]=l:t._$Cl=l),l!==void 0&&(e=I(i,l._$AS(i,e.values),l,n)),e}var pe=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;let{el:{content:n},parts:r}=this._$AD,o=((t=e?.creationScope)!==null&&t!==void 0?t:N).importNode(n,!0);B.currentNode=o;let s=B.nextNode(),a=0,l=0,c=r[0];for(;c!==void 0;){if(a===c.index){let d;c.type===2?d=new G(s,s.nextSibling,this,e):c.type===1?d=new c.ctor(s,c.name,c.strings,this,e):c.type===6&&(d=new ye(s,this,e)),this._$AV.push(d),c=r[++l]}a!==c?.index&&(s=B.nextNode(),a++)}return B.currentNode=N,o}v(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}},G=class i{constructor(e,t,n,r){var o;this.type=2,this._$AH=v,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cp=(o=r?.isConnected)===null||o===void 0||o}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=I(this,e,t),Y(e)?e===v||e==null||e===""?(this._$AH!==v&&this._$AR(),this._$AH=v):e!==this._$AH&&e!==$&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):lt(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==v&&Y(this._$AH)?this._$AA.nextSibling.data=e:this.$(N.createTextNode(e)),this._$AH=e}g(e){var t;let{values:n,_$litType$:r}=e,o=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=X.createElement(ht(r.h,r.h[0]),this.options)),r);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===o)this._$AH.v(n);else{let s=new pe(o,this),a=s.u(this.options);s.v(n),this.$(a),this._$AH=s}}_$AC(e){let t=ot.get(e.strings);return t===void 0&&ot.set(e.strings,t=new X(e)),t}T(e){at(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,n,r=0;for(let o of e)r===t.length?t.push(n=new i(this.k(Q()),this.k(Q()),this,this.options)):n=t[r],n._$AI(o),r++;r<t.length&&(this._$AR(n&&n._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,t);e&&e!==this._$AB;){let r=e.nextSibling;e.remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},z=class{constructor(e,t,n,r,o){this.type=1,this._$AH=v,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=o,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=v}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,n,r){let o=this.strings,s=!1;if(o===void 0)e=I(this,e,t,0),s=!Y(e)||e!==this._$AH&&e!==$,s&&(this._$AH=e);else{let a=e,l,c;for(e=o[0],l=0;l<o.length-1;l++)c=I(this,a[n+l],t,l),c===$&&(c=this._$AH[l]),s||(s=!Y(c)||c!==this._$AH[l]),c===v?e=v:e!==v&&(e+=(c??"")+o[l+1]),this._$AH[l]=c}s&&!r&&this.j(e)}j(e){e===v?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},fe=class extends z{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===v?void 0:e}},Nt=q?q.emptyScript:"",ve=class extends z{constructor(){super(...arguments),this.type=4}j(e){e&&e!==v?this.element.setAttribute(this.name,Nt):this.element.removeAttribute(this.name)}},me=class extends z{constructor(e,t,n,r,o){super(e,t,n,r,o),this.type=5}_$AI(e,t=this){var n;if((e=(n=I(this,e,t,0))!==null&&n!==void 0?n:v)===$)return;let r=this._$AH,o=e===v&&r!==v||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,s=e!==v&&(r===v||o);o&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,n;typeof this._$AH=="function"?this._$AH.call((n=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&n!==void 0?n:this.element,e):this._$AH.handleEvent(e)}},ye=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){I(this,e)}},pt={O:ue,P:H,A:Ue,C:1,M:ut,L:pe,R:lt,D:I,I:G,V:z,H:ve,N:me,U:fe,F:ye},st=he.litHtmlPolyfillSupport;st?.(X,G),((Re=he.litHtmlVersions)!==null&&Re!==void 0?Re:he.litHtmlVersions=[]).push("2.8.0");var ft=(i,e,t)=>{var n,r;let o=(n=t?.renderBefore)!==null&&n!==void 0?n:e,s=o._$litPart$;if(s===void 0){let a=(r=t?.renderBefore)!==null&&r!==void 0?r:null;o._$litPart$=s=new G(e.insertBefore(Q(),a),a,void 0,t??{})}return s._$AI(i),s};var Le,Be;var E=class extends T{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;let n=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=n.firstChild),n}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ft(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return $}};E.finalized=!0,E._$litElement$=!0,(Le=globalThis.litElementHydrateSupport)===null||Le===void 0||Le.call(globalThis,{LitElement:E});var vt=globalThis.litElementPolyfillSupport;vt?.({LitElement:E});((Be=globalThis.litElementVersions)!==null&&Be!==void 0?Be:globalThis.litElementVersions=[]).push("3.3.3");var D=i=>e=>typeof e=="function"?((t,n)=>(customElements.define(t,n),n))(i,e):((t,n)=>{let{kind:r,elements:o}=n;return{kind:r,elements:o,finisher(s){customElements.define(t,s)}}})(i,e);var It=(i,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,i)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,i)}},zt=(i,e,t)=>{e.constructor.createProperty(t,i)};function m(i){return(e,t)=>t!==void 0?zt(i,e,t):It(i,e)}function M(i){return m({...i,state:!0})}var Ne,Hi=((Ne=window.HTMLSlotElement)===null||Ne===void 0?void 0:Ne.prototype.assignedElements)!=null?(i,e)=>i.assignedElements(e):(i,e)=>i.assignedNodes(e).filter(t=>t.nodeType===Node.ELEMENT_NODE);var j={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},C=i=>(...e)=>({_$litDirective$:i,values:e}),S=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};var{I:Kt}=pt;var ge=i=>i.strings===void 0,mt=()=>document.createComment(""),F=(i,e,t)=>{var n;let r=i._$AA.parentNode,o=e===void 0?i._$AB:e._$AA;if(t===void 0){let s=r.insertBefore(mt(),o),a=r.insertBefore(mt(),o);t=new Kt(s,a,i,i.options)}else{let s=t._$AB.nextSibling,a=t._$AM,l=a!==i;if(l){let c;(n=t._$AQ)===null||n===void 0||n.call(t,i),t._$AM=i,t._$AP!==void 0&&(c=i._$AU)!==a._$AU&&t._$AP(c)}if(s!==o||l){let c=t._$AA;for(;c!==s;){let d=c.nextSibling;r.insertBefore(c,o),c=d}}}return t},U=(i,e,t=i)=>(i._$AI(e,t),i),Vt={},_e=(i,e=Vt)=>i._$AH=e,yt=i=>i._$AH,be=i=>{var e;(e=i._$AP)===null||e===void 0||e.call(i,!1,!0);let t=i._$AA,n=i._$AB.nextSibling;for(;t!==n;){let r=t.nextSibling;t.remove(),t=r}};var gt=(i,e,t)=>{let n=new Map;for(let r=e;r<=t;r++)n.set(i[r],r);return n},_t=C(class extends S{constructor(i){if(super(i),i.type!==j.CHILD)throw Error("repeat() can only be used in text expressions")}ct(i,e,t){let n;t===void 0?t=e:e!==void 0&&(n=e);let r=[],o=[],s=0;for(let a of i)r[s]=n?n(a,s):s,o[s]=t(a,s),s++;return{values:o,keys:r}}render(i,e,t){return this.ct(i,e,t).values}update(i,[e,t,n]){var r;let o=yt(i),{values:s,keys:a}=this.ct(e,t,n);if(!Array.isArray(o))return this.ut=a,s;let l=(r=this.ut)!==null&&r!==void 0?r:this.ut=[],c=[],d,u,h=0,p=o.length-1,f=0,w=s.length-1;for(;h<=p&&f<=w;)if(o[h]===null)h++;else if(o[p]===null)p--;else if(l[h]===a[f])c[f]=U(o[h],s[f]),h++,f++;else if(l[p]===a[w])c[w]=U(o[p],s[w]),p--,w--;else if(l[h]===a[w])c[w]=U(o[h],s[w]),F(i,c[w+1],o[h]),h++,w--;else if(l[p]===a[f])c[f]=U(o[p],s[f]),F(i,o[h],o[p]),p--,f++;else if(d===void 0&&(d=gt(a,f,w),u=gt(l,h,p)),d.has(l[h]))if(d.has(l[p])){let P=u.get(a[f]),Se=P!==void 0?o[P]:null;if(Se===null){let Ze=F(i,o[h]);U(Ze,s[f]),c[f]=Ze}else c[f]=U(Se,s[f]),F(i,o[h],Se),o[P]=null;f++}else be(o[p]),p--;else be(o[h]),h++;for(;f<=w;){let P=F(i,c[w+1]);U(P,s[f]),c[f++]=P}for(;h<=p;){let P=o[h++];P!==null&&be(P)}return this.ut=a,_e(i,c),$}});var bt=C(class extends S{constructor(i){if(super(i),i.type!==j.PROPERTY&&i.type!==j.ATTRIBUTE&&i.type!==j.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!ge(i))throw Error("`live` bindings can only contain a single expression")}render(i){return i}update(i,[e]){if(e===$||e===v)return e;let t=i.element,n=i.name;if(i.type===j.PROPERTY){if(e===t[n])return $}else if(i.type===j.BOOLEAN_ATTRIBUTE){if(!!e===t.hasAttribute(n))return $}else if(i.type===j.ATTRIBUTE&&t.getAttribute(n)===e+"")return $;return _e(i),e}});var te=(i,e)=>{var t,n;let r=i._$AN;if(r===void 0)return!1;for(let o of r)(n=(t=o)._$AO)===null||n===void 0||n.call(t,e,!1),te(o,e);return!0},we=i=>{let e,t;do{if((e=i._$AM)===void 0)break;t=e._$AN,t.delete(i),i=e}while(t?.size===0)},wt=i=>{for(let e;e=i._$AM;i=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(i))break;t.add(i),Ft(e)}};function qt(i){this._$AN!==void 0?(we(this),this._$AM=i,wt(this)):this._$AM=i}function Gt(i,e=!1,t=0){let n=this._$AH,r=this._$AN;if(r!==void 0&&r.size!==0)if(e)if(Array.isArray(n))for(let o=t;o<n.length;o++)te(n[o],!1),we(n[o]);else n!=null&&(te(n,!1),we(n));else te(this,i)}var Ft=i=>{var e,t,n,r;i.type==j.CHILD&&((e=(n=i)._$AP)!==null&&e!==void 0||(n._$AP=Gt),(t=(r=i)._$AQ)!==null&&t!==void 0||(r._$AQ=qt))},$e=class extends S{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,n){super._$AT(e,t,n),wt(this),this.isConnected=e._$AU}_$AO(e,t=!0){var n,r;e!==this.isConnected&&(this.isConnected=e,e?(n=this.reconnected)===null||n===void 0||n.call(this):(r=this.disconnected)===null||r===void 0||r.call(this)),t&&(te(this,e),we(this))}setValue(e){if(ge(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}};var xe=()=>new ze,ze=class{},Ie=new WeakMap,Ae=C(class extends $e{render(i){return v}update(i,[e]){var t;let n=e!==this.G;return n&&this.G!==void 0&&this.ot(void 0),(n||this.rt!==this.lt)&&(this.G=e,this.dt=(t=i.options)===null||t===void 0?void 0:t.host,this.ot(this.lt=i.element)),v}ot(i){var e;if(typeof this.G=="function"){let t=(e=this.dt)!==null&&e!==void 0?e:globalThis,n=Ie.get(t);n===void 0&&(n=new WeakMap,Ie.set(t,n)),n.get(this.G)!==void 0&&this.G.call(this.dt,void 0),n.set(this.G,i),i!==void 0&&this.G.call(this.dt,i)}else this.G.value=i}get rt(){var i,e,t;return typeof this.G=="function"?(e=Ie.get((i=this.dt)!==null&&i!==void 0?i:globalThis))===null||e===void 0?void 0:e.get(this.G):(t=this.G)===null||t===void 0?void 0:t.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}});var ie=C(class extends S{constructor(i){var e;if(super(i),i.type!==j.ATTRIBUTE||i.name!=="class"||((e=i.strings)===null||e===void 0?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(i){return" "+Object.keys(i).filter(e=>i[e]).join(" ")+" "}update(i,[e]){var t,n;if(this.it===void 0){this.it=new Set,i.strings!==void 0&&(this.nt=new Set(i.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(let o in e)e[o]&&!(!((t=this.nt)===null||t===void 0)&&t.has(o))&&this.it.add(o);return this.render(e)}let r=i.element.classList;this.it.forEach(o=>{o in e||(r.remove(o),this.it.delete(o))});for(let o in e){let s=!!e[o];s===this.it.has(o)||!((n=this.nt)===null||n===void 0)&&n.has(o)||(s?(r.add(o),this.it.add(o)):(r.remove(o),this.it.delete(o)))}return $}});var Ke=typeof navigator<"u"?navigator.userAgent.toLowerCase().indexOf("firefox")>0:!1;function Ve(i,e,t){i.addEventListener?i.addEventListener(e,t,!1):i.attachEvent&&i.attachEvent("on".concat(e),function(){t(window.event)})}function Et(i,e){for(var t=e.slice(0,e.length-1),n=0;n<t.length;n++)t[n]=i[t[n].toLowerCase()];return t}function kt(i){typeof i!="string"&&(i=""),i=i.replace(/\s/g,"");for(var e=i.split(","),t=e.lastIndexOf("");t>=0;)e[t-1]+=",",e.splice(t,1),t=e.lastIndexOf("");return e}function Zt(i,e){for(var t=i.length>=e.length?i:e,n=i.length>=e.length?e:i,r=!0,o=0;o<t.length;o++)n.indexOf(t[o])===-1&&(r=!1);return r}var St={backspace:8,tab:9,clear:12,enter:13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,delete:46,ins:45,insert:45,home:36,end:35,pageup:33,pagedown:34,capslock:20,num_0:96,num_1:97,num_2:98,num_3:99,num_4:100,num_5:101,num_6:102,num_7:103,num_8:104,num_9:105,num_multiply:106,num_add:107,num_enter:108,num_subtract:109,num_decimal:110,num_divide:111,"\u21EA":20,",":188,".":190,"/":191,"`":192,"-":Ke?173:189,"=":Ke?61:187,";":Ke?59:186,"'":222,"[":219,"]":221,"\\":220},K={"\u21E7":16,shift:16,"\u2325":18,alt:18,option:18,"\u2303":17,ctrl:17,control:17,"\u2318":91,cmd:91,command:91},$t={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey",shiftKey:16,ctrlKey:17,altKey:18,metaKey:91},A={16:!1,18:!1,17:!1,91:!1},x={};for(ne=1;ne<20;ne++)St["f".concat(ne)]=111+ne;var ne,y=[],Ct="all",Pt=[],Ee=function(e){return St[e.toLowerCase()]||K[e.toLowerCase()]||e.toUpperCase().charCodeAt(0)};function Ot(i){Ct=i||"all"}function re(){return Ct||"all"}function Jt(){return y.slice(0)}function Wt(i){var e=i.target||i.srcElement,t=e.tagName,n=!0;return(e.isContentEditable||(t==="INPUT"||t==="TEXTAREA"||t==="SELECT")&&!e.readOnly)&&(n=!1),n}function Qt(i){return typeof i=="string"&&(i=Ee(i)),y.indexOf(i)!==-1}function Yt(i,e){var t,n;i||(i=re());for(var r in x)if(Object.prototype.hasOwnProperty.call(x,r))for(t=x[r],n=0;n<t.length;)t[n].scope===i?t.splice(n,1):n++;re()===i&&Ot(e||"all")}function Xt(i){var e=i.keyCode||i.which||i.charCode,t=y.indexOf(e);if(t>=0&&y.splice(t,1),i.key&&i.key.toLowerCase()==="meta"&&y.splice(0,y.length),(e===93||e===224)&&(e=91),e in A){A[e]=!1;for(var n in K)K[n]===e&&(R[n]=!1)}}function ei(i){if(!i)Object.keys(x).forEach(function(s){return delete x[s]});else if(Array.isArray(i))i.forEach(function(s){s.key&&qe(s)});else if(typeof i=="object")i.key&&qe(i);else if(typeof i=="string"){for(var e=arguments.length,t=new Array(e>1?e-1:0),n=1;n<e;n++)t[n-1]=arguments[n];var r=t[0],o=t[1];typeof r=="function"&&(o=r,r=""),qe({key:i,scope:r,method:o,splitKey:"+"})}}var qe=function(e){var t=e.key,n=e.scope,r=e.method,o=e.splitKey,s=o===void 0?"+":o,a=kt(t);a.forEach(function(l){var c=l.split(s),d=c.length,u=c[d-1],h=u==="*"?"*":Ee(u);if(x[h]){n||(n=re());var p=d>1?Et(K,c):[];x[h]=x[h].map(function(f){var w=r?f.method===r:!0;return w&&f.scope===n&&Zt(f.mods,p)?{}:f})}})};function xt(i,e,t){var n;if(e.scope===t||e.scope==="all"){n=e.mods.length>0;for(var r in A)Object.prototype.hasOwnProperty.call(A,r)&&(!A[r]&&e.mods.indexOf(+r)>-1||A[r]&&e.mods.indexOf(+r)===-1)&&(n=!1);(e.mods.length===0&&!A[16]&&!A[18]&&!A[17]&&!A[91]||n||e.shortcut==="*")&&e.method(i,e)===!1&&(i.preventDefault?i.preventDefault():i.returnValue=!1,i.stopPropagation&&i.stopPropagation(),i.cancelBubble&&(i.cancelBubble=!0))}}function At(i){var e=x["*"],t=i.keyCode||i.which||i.charCode;if(R.filter.call(this,i)){if((t===93||t===224)&&(t=91),y.indexOf(t)===-1&&t!==229&&y.push(t),["ctrlKey","altKey","shiftKey","metaKey"].forEach(function(p){var f=$t[p];i[p]&&y.indexOf(f)===-1?y.push(f):!i[p]&&y.indexOf(f)>-1?y.splice(y.indexOf(f),1):p==="metaKey"&&i[p]&&y.length===3&&(i.ctrlKey||i.shiftKey||i.altKey||(y=y.slice(y.indexOf(f))))}),t in A){A[t]=!0;for(var n in K)K[n]===t&&(R[n]=!0);if(!e)return}for(var r in A)Object.prototype.hasOwnProperty.call(A,r)&&(A[r]=i[$t[r]]);i.getModifierState&&!(i.altKey&&!i.ctrlKey)&&i.getModifierState("AltGraph")&&(y.indexOf(17)===-1&&y.push(17),y.indexOf(18)===-1&&y.push(18),A[17]=!0,A[18]=!0);var o=re();if(e)for(var s=0;s<e.length;s++)e[s].scope===o&&(i.type==="keydown"&&e[s].keydown||i.type==="keyup"&&e[s].keyup)&&xt(i,e[s],o);if(t in x){for(var a=0;a<x[t].length;a++)if((i.type==="keydown"&&x[t][a].keydown||i.type==="keyup"&&x[t][a].keyup)&&x[t][a].key){for(var l=x[t][a],c=l.splitKey,d=l.key.split(c),u=[],h=0;h<d.length;h++)u.push(Ee(d[h]));u.sort().join("")===y.sort().join("")&&xt(i,l,o)}}}}function ti(i){return Pt.indexOf(i)>-1}function R(i,e,t){y=[];var n=kt(i),r=[],o="all",s=document,a=0,l=!1,c=!0,d="+";for(t===void 0&&typeof e=="function"&&(t=e),Object.prototype.toString.call(e)==="[object Object]"&&(e.scope&&(o=e.scope),e.element&&(s=e.element),e.keyup&&(l=e.keyup),e.keydown!==void 0&&(c=e.keydown),typeof e.splitKey=="string"&&(d=e.splitKey)),typeof e=="string"&&(o=e);a<n.length;a++)i=n[a].split(d),r=[],i.length>1&&(r=Et(K,i)),i=i[i.length-1],i=i==="*"?"*":Ee(i),i in x||(x[i]=[]),x[i].push({keyup:l,keydown:c,scope:o,mods:r,shortcut:n[a],method:t,key:n[a],splitKey:d});typeof s<"u"&&!ti(s)&&window&&(Pt.push(s),Ve(s,"keydown",function(u){At(u)}),Ve(window,"focus",function(){y=[]}),Ve(s,"keyup",function(u){At(u),Xt(u)}))}var Ge={setScope:Ot,getScope:re,deleteScope:Yt,getPressedKeyCodes:Jt,isPressed:Qt,filter:Wt,unbind:ei};for(je in Ge)Object.prototype.hasOwnProperty.call(Ge,je)&&(R[je]=Ge[je]);var je;typeof window<"u"&&(jt=window.hotkeys,R.noConflict=function(i){return i&&window.hotkeys===R&&(window.hotkeys=jt),R},window.hotkeys=R);var jt,k=R;var oe=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o},V=class extends E{constructor(){super(...arguments),this.placeholder="",this.hideBreadcrumbs=!1,this.breadcrumbHome="Home",this.breadcrumbs=[],this._inputRef=xe()}render(){let e="";if(!this.hideBreadcrumbs){let t=[];for(let n of this.breadcrumbs)t.push(_`<button
            tabindex="-1"
            @click=${()=>this.selectParent(n)}
            class="breadcrumb"
          >
            ${n}
          </button>`);e=_`<div class="breadcrumb-list">
        <button
          tabindex="-1"
          @click=${()=>this.selectParent()}
          class="breadcrumb"
        >
          ${this.breadcrumbHome}
        </button>
        ${t}
      </div>`}return _`
      ${e}
      <div part="ninja-input-wrapper" class="search-wrapper">
        <input
          part="ninja-input"
          type="text"
          id="search"
          spellcheck="false"
          autocomplete="off"
          @input="${this._handleInput}"
          ${Ae(this._inputRef)}
          placeholder="${this.placeholder}"
          class="search"
        />
      </div>
    `}setSearch(e){this._inputRef.value&&(this._inputRef.value.value=e)}focusSearch(){requestAnimationFrame(()=>this._inputRef.value.focus())}_handleInput(e){let t=e.target;this.dispatchEvent(new CustomEvent("change",{detail:{search:t.value},bubbles:!1,composed:!1}))}selectParent(e){this.dispatchEvent(new CustomEvent("setParent",{detail:{parent:e},bubbles:!0,composed:!0}))}firstUpdated(){this.focusSearch()}_close(){this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}};V.styles=O`
    :host {
      flex: 1;
      position: relative;
    }
    .search {
      padding: 1.25em;
      flex-grow: 1;
      flex-shrink: 0;
      margin: 0px;
      border: none;
      appearance: none;
      font-size: 1.125em;
      background: transparent;
      caret-color: var(--ninja-accent-color);
      color: var(--ninja-text-color);
      outline: none;
      font-family: var(--ninja-font-family);
    }
    .search::placeholder {
      color: var(--ninja-placeholder-color);
    }
    .breadcrumb-list {
      padding: 1em 4em 0 1em;
      display: flex;
      flex-direction: row;
      align-items: stretch;
      justify-content: flex-start;
      flex: initial;
    }

    .breadcrumb {
      background: var(--ninja-secondary-background-color);
      text-align: center;
      line-height: 1.2em;
      border-radius: var(--ninja-key-border-radius);
      border: 0;
      cursor: pointer;
      padding: 0.1em 0.5em;
      color: var(--ninja-secondary-text-color);
      margin-right: 0.5em;
      outline: none;
      font-family: var(--ninja-font-family);
    }

    .search-wrapper {
      display: flex;
      border-bottom: var(--ninja-separate-border);
    }
  `;oe([m()],V.prototype,"placeholder",void 0);oe([m({type:Boolean})],V.prototype,"hideBreadcrumbs",void 0);oe([m()],V.prototype,"breadcrumbHome",void 0);oe([m({type:Array})],V.prototype,"breadcrumbs",void 0);V=oe([D("ninja-header")],V);var se=class extends S{constructor(e){if(super(e),this.et=v,e.type!==j.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===v||e==null)return this.ft=void 0,this.et=e;if(e===$)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.ft;this.et=e;let t=[e];return t.raw=t,this.ft={_$litType$:this.constructor.resultType,strings:t,values:[]}}};se.directiveName="unsafeHTML",se.resultType=1;var Tt=C(se);function*Ht(i,e){let t=typeof e=="function";if(i!==void 0){let n=-1;for(let r of i)n>-1&&(yield t?e(n):e),n++,yield r}}function Mt(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o}var Rt=O`:host{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}`;var Fe=class extends E{render(){return _`<span><slot></slot></span>`}};Fe.styles=[Rt];Fe=Mt([D("mwc-icon")],Fe);var ke=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o},Z=class extends E{constructor(){super(),this.selected=!1,this.hotKeysJoinedView=!0,this.addEventListener("click",this.click)}ensureInView(){requestAnimationFrame(()=>this.scrollIntoView({block:"nearest"}))}click(){this.dispatchEvent(new CustomEvent("actionsSelected",{detail:this.action,bubbles:!0,composed:!0}))}updated(e){e.has("selected")&&this.selected&&this.ensureInView()}render(){let e;this.action.mdIcon?e=_`<mwc-icon part="ninja-icon" class="ninja-icon"
        >${this.action.mdIcon}</mwc-icon
      >`:this.action.icon&&(e=Tt(this.action.icon||""));let t;this.action.hotkey&&(this.hotKeysJoinedView?t=this.action.hotkey.split(",").map(r=>{let o=r.split("+"),s=_`${Ht(o.map(a=>_`<kbd>${a}</kbd>`),"+")}`;return _`<div class="ninja-hotkey ninja-hotkeys">
            ${s}
          </div>`}):t=this.action.hotkey.split(",").map(r=>{let s=r.split("+").map(a=>_`<kbd class="ninja-hotkey">${a}</kbd>`);return _`<kbd class="ninja-hotkeys">${s}</kbd>`}));let n={selected:this.selected,"ninja-action":!0};return _`
      <div
        class="ninja-action"
        part="ninja-action ${this.selected?"ninja-selected":""}"
        class=${ie(n)}
      >
        ${e}
        <div class="ninja-title">${this.action.title}</div>
        ${t}
      </div>
    `}};Z.styles=O`
    :host {
      display: flex;
      width: 100%;
    }
    .ninja-action {
      padding: 0.75em 1em;
      display: flex;
      border-left: 2px solid transparent;
      align-items: center;
      justify-content: start;
      outline: none;
      transition: color 0s ease 0s;
      width: 100%;
    }
    .ninja-action.selected {
      cursor: pointer;
      color: var(--ninja-selected-text-color);
      background-color: var(--ninja-selected-background);
      border-left: 2px solid var(--ninja-accent-color);
      outline: none;
    }
    .ninja-action.selected .ninja-icon {
      color: var(--ninja-selected-text-color);
    }
    .ninja-icon {
      font-size: var(--ninja-icon-size);
      max-width: var(--ninja-icon-size);
      max-height: var(--ninja-icon-size);
      margin-right: 1em;
      color: var(--ninja-icon-color);
      margin-right: 1em;
      position: relative;
    }

    .ninja-title {
      flex-shrink: 0.01;
      margin-right: 0.5em;
      flex-grow: 1;
      font-size: 0.8125em;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .ninja-hotkeys {
      flex-shrink: 0;
      width: min-content;
      display: flex;
    }

    .ninja-hotkeys kbd {
      font-family: inherit;
    }
    .ninja-hotkey {
      background: var(--ninja-secondary-background-color);
      padding: 0.06em 0.25em;
      border-radius: var(--ninja-key-border-radius);
      text-transform: capitalize;
      color: var(--ninja-secondary-text-color);
      font-size: 0.75em;
      font-family: inherit;
    }

    .ninja-hotkey + .ninja-hotkey {
      margin-left: 0.5em;
    }
    .ninja-hotkeys + .ninja-hotkeys {
      margin-left: 1em;
    }
  `;ke([m({type:Object})],Z.prototype,"action",void 0);ke([m({type:Boolean})],Z.prototype,"selected",void 0);ke([m({type:Boolean})],Z.prototype,"hotKeysJoinedView",void 0);Z=ke([D("ninja-action")],Z);var Dt=_` <div class="modal-footer" slot="footer">
  <span class="help">
    <svg
      version="1.0"
      class="ninja-examplekey"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1280 1280"
    >
      <path
        d="M1013 376c0 73.4-.4 113.3-1.1 120.2a159.9 159.9 0 0 1-90.2 127.3c-20 9.6-36.7 14-59.2 15.5-7.1.5-121.9.9-255 1h-242l95.5-95.5 95.5-95.5-38.3-38.2-38.2-38.3-160 160c-88 88-160 160.4-160 161 0 .6 72 73 160 161l160 160 38.2-38.3 38.3-38.2-95.5-95.5-95.5-95.5h251.1c252.9 0 259.8-.1 281.4-3.6 72.1-11.8 136.9-54.1 178.5-116.4 8.6-12.9 22.6-40.5 28-55.4 4.4-12 10.7-36.1 13.1-50.6 1.6-9.6 1.8-21 2.1-132.8l.4-122.2H1013v110z"
      />
    </svg>

    to select
  </span>
  <span class="help">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="ninja-examplekey"
      viewBox="0 0 24 24"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path
        d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"
      />
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="ninja-examplekey"
      viewBox="0 0 24 24"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z" />
    </svg>
    to navigate
  </span>
  <span class="help">
    <span class="ninja-examplekey esc">esc</span>
    to close
  </span>
  <span class="help">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="ninja-examplekey backspace"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fill-rule="evenodd"
        d="M6.707 4.879A3 3 0 018.828 4H15a3 3 0 013 3v6a3 3 0 01-3 3H8.828a3 3 0 01-2.12-.879l-4.415-4.414a1 1 0 010-1.414l4.414-4.414zm4 2.414a1 1 0 00-1.414 1.414L10.586 10l-1.293 1.293a1 1 0 101.414 1.414L12 11.414l1.293 1.293a1 1 0 001.414-1.414L13.414 10l1.293-1.293a1 1 0 00-1.414-1.414L12 8.586l-1.293-1.293z"
        clip-rule="evenodd"
      />
    </svg>
    move to parent
  </span>
</div>`;var Ut=O`
  :host {
    --ninja-width: 640px;
    --ninja-backdrop-filter: none;
    --ninja-overflow-background: rgba(255, 255, 255, 0.5);
    --ninja-text-color: rgb(60, 65, 73);
    --ninja-font-size: 16px;
    --ninja-top: 20%;

    --ninja-key-border-radius: 0.25em;
    --ninja-accent-color: rgb(110, 94, 210);
    --ninja-secondary-background-color: rgb(239, 241, 244);
    --ninja-secondary-text-color: rgb(107, 111, 118);

    --ninja-selected-background: rgb(248, 249, 251);

    --ninja-icon-color: var(--ninja-secondary-text-color);
    --ninja-icon-size: 1.2em;
    --ninja-separate-border: 1px solid var(--ninja-secondary-background-color);

    --ninja-modal-background: #fff;
    --ninja-modal-shadow: rgb(0 0 0 / 50%) 0px 16px 70px;

    --ninja-actions-height: 300px;
    --ninja-group-text-color: rgb(144, 149, 157);

    --ninja-footer-background: rgba(242, 242, 242, 0.4);

    --ninja-placeholder-color: #8e8e8e;

    font-size: var(--ninja-font-size);

    --ninja-z-index: 1;
  }

  :host(.dark) {
    --ninja-backdrop-filter: none;
    --ninja-overflow-background: rgba(0, 0, 0, 0.7);
    --ninja-text-color: #7d7d7d;

    --ninja-modal-background: rgba(17, 17, 17, 0.85);
    --ninja-accent-color: rgb(110, 94, 210);
    --ninja-secondary-background-color: rgba(51, 51, 51, 0.44);
    --ninja-secondary-text-color: #888;

    --ninja-selected-text-color: #eaeaea;
    --ninja-selected-background: rgba(51, 51, 51, 0.44);

    --ninja-icon-color: var(--ninja-secondary-text-color);
    --ninja-separate-border: 1px solid var(--ninja-secondary-background-color);

    --ninja-modal-shadow: 0 16px 70px rgba(0, 0, 0, 0.2);

    --ninja-group-text-color: rgb(144, 149, 157);

    --ninja-footer-background: rgba(30, 30, 30, 85%);
  }

  .modal {
    display: none;
    position: fixed;
    z-index: var(--ninja-z-index);
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background: var(--ninja-overflow-background);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-backdrop-filter: var(--ninja-backdrop-filter);
    backdrop-filter: var(--ninja-backdrop-filter);
    text-align: left;
    color: var(--ninja-text-color);
    font-family: var(--ninja-font-family);
  }
  .modal.visible {
    display: block;
  }

  .modal-content {
    position: relative;
    top: var(--ninja-top);
    margin: auto;
    padding: 0;
    display: flex;
    flex-direction: column;
    flex-shrink: 1;
    -webkit-box-flex: 1;
    flex-grow: 1;
    min-width: 0px;
    will-change: transform;
    background: var(--ninja-modal-background);
    border-radius: 0.5em;
    box-shadow: var(--ninja-modal-shadow);
    max-width: var(--ninja-width);
    overflow: hidden;
  }

  .bump {
    animation: zoom-in-zoom-out 0.2s ease;
  }

  @keyframes zoom-in-zoom-out {
    0% {
      transform: scale(0.99);
    }
    50% {
      transform: scale(1.01, 1.01);
    }
    100% {
      transform: scale(1, 1);
    }
  }

  .ninja-github {
    color: var(--ninja-keys-text-color);
    font-weight: normal;
    text-decoration: none;
  }

  .actions-list {
    max-height: var(--ninja-actions-height);
    overflow: auto;
    scroll-behavior: smooth;
    position: relative;
    margin: 0;
    padding: 0.5em 0;
    list-style: none;
    scroll-behavior: smooth;
  }

  .group-header {
    height: 1.375em;
    line-height: 1.375em;
    padding-left: 1.25em;
    padding-top: 0.5em;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-size: 0.75em;
    line-height: 1em;
    color: var(--ninja-group-text-color);
    margin: 1px 0;
  }

  .modal-footer {
    background: var(--ninja-footer-background);
    padding: 0.5em 1em;
    display: flex;
    /* font-size: 0.75em; */
    border-top: var(--ninja-separate-border);
    color: var(--ninja-secondary-text-color);
  }

  .modal-footer .help {
    display: flex;
    margin-right: 1em;
    align-items: center;
    font-size: 0.75em;
  }

  .ninja-examplekey {
    background: var(--ninja-secondary-background-color);
    padding: 0.06em 0.25em;
    border-radius: var(--ninja-key-border-radius);
    color: var(--ninja-secondary-text-color);
    width: 1em;
    height: 1em;
    margin-right: 0.5em;
    font-size: 1.25em;
    fill: currentColor;
  }
  .ninja-examplekey.esc {
    width: auto;
    height: auto;
    font-size: 1.1em;
  }
  .ninja-examplekey.backspace {
    opacity: 0.7;
  }
`;var b=function(i,e,t,n){var r=arguments.length,o=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(s=i[a])&&(o=(r<3?s(o):r>3?s(e,t,o):s(e,t))||o);return r>3&&o&&Object.defineProperty(e,t,o),o},g=class extends E{constructor(){super(...arguments),this.placeholder="Type a command or search...",this.disableHotkeys=!1,this.hideBreadcrumbs=!1,this.openHotkey="cmd+k,ctrl+k",this.navigationUpHotkey="up,shift+tab",this.navigationDownHotkey="down,tab",this.closeHotkey="esc",this.goBackHotkey="backspace",this.selectHotkey="enter",this.hotKeysJoinedView=!1,this.noAutoLoadMdIcons=!1,this.data=[],this.visible=!1,this._bump=!0,this._actionMatches=[],this._search="",this._flatData=[],this._headerRef=xe()}open(e={}){this._bump=!0,this.visible=!0,this._headerRef.value.focusSearch(),this._actionMatches.length>0&&(this._selected=this._actionMatches[0]),this.setParent(e.parent)}close(){this._bump=!1,this.visible=!1}setParent(e){e?this._currentRoot=e:this._currentRoot=void 0,this._selected=void 0,this._search="",this._headerRef.value.setSearch("")}get breadcrumbs(){var e;let t=[],n=(e=this._selected)===null||e===void 0?void 0:e.parent;if(n)for(t.push(n);n;){let r=this._flatData.find(o=>o.id===n);r?.parent&&t.push(r.parent),n=r?r.parent:void 0}return t.reverse()}connectedCallback(){super.connectedCallback(),this.noAutoLoadMdIcons||document.fonts.load("24px Material Icons","apps").then(()=>{}),this._registerInternalHotkeys()}disconnectedCallback(){super.disconnectedCallback(),this._unregisterInternalHotkeys()}_flattern(e,t){let n=[];return e||(e=[]),e.map(r=>{let o=r.children&&r.children.some(a=>typeof a=="string"),s={...r,parent:r.parent||t};return o||(s.children&&s.children.length&&(t=r.id,n=[...n,...s.children]),s.children=s.children?s.children.map(a=>a.id):[]),s}).concat(n.length?this._flattern(n,t):n)}update(e){e.has("data")&&!this.disableHotkeys&&(this._flatData=this._flattern(this.data),this._flatData.filter(t=>!!t.hotkey).forEach(t=>{k(t.hotkey,n=>{n.preventDefault(),t.handler&&t.handler(t)})})),super.update(e)}_registerInternalHotkeys(){this.openHotkey&&k(this.openHotkey,e=>{e.preventDefault(),this.visible?this.close():this.open()}),this.selectHotkey&&k(this.selectHotkey,e=>{this.visible&&(e.preventDefault(),this._actionSelected(this._actionMatches[this._selectedIndex]))}),this.goBackHotkey&&k(this.goBackHotkey,e=>{this.visible&&(this._search||(e.preventDefault(),this._goBack()))}),this.navigationDownHotkey&&k(this.navigationDownHotkey,e=>{this.visible&&(e.preventDefault(),this._selectedIndex>=this._actionMatches.length-1?this._selected=this._actionMatches[0]:this._selected=this._actionMatches[this._selectedIndex+1])}),this.navigationUpHotkey&&k(this.navigationUpHotkey,e=>{this.visible&&(e.preventDefault(),this._selectedIndex===0?this._selected=this._actionMatches[this._actionMatches.length-1]:this._selected=this._actionMatches[this._selectedIndex-1])}),this.closeHotkey&&k(this.closeHotkey,()=>{this.visible&&this.close()})}_unregisterInternalHotkeys(){this.openHotkey&&k.unbind(this.openHotkey),this.selectHotkey&&k.unbind(this.selectHotkey),this.goBackHotkey&&k.unbind(this.goBackHotkey),this.navigationDownHotkey&&k.unbind(this.navigationDownHotkey),this.navigationUpHotkey&&k.unbind(this.navigationUpHotkey),this.closeHotkey&&k.unbind(this.closeHotkey)}_actionFocused(e,t){this._selected=e,t.target.ensureInView()}_onTransitionEnd(){this._bump=!1}_goBack(){let e=this.breadcrumbs.length>1?this.breadcrumbs[this.breadcrumbs.length-2]:void 0;this.setParent(e)}render(){let e={bump:this._bump,"modal-content":!0},t={visible:this.visible,modal:!0},r=this._flatData.filter(a=>{var l;let c=new RegExp(this._search,"gi"),d=a.title.match(c)||((l=a.keywords)===null||l===void 0?void 0:l.match(c));return(!this._currentRoot&&this._search||a.parent===this._currentRoot)&&d}).reduce((a,l)=>a.set(l.section,[...a.get(l.section)||[],l]),new Map);this._actionMatches=[...r.values()].flat(),this._actionMatches.length>0&&this._selectedIndex===-1&&(this._selected=this._actionMatches[0]),this._actionMatches.length===0&&(this._selected=void 0);let o=a=>_` ${_t(a,l=>l.id,l=>{var c;return _`<ninja-action
            exportparts="ninja-action,ninja-selected,ninja-icon"
            .selected=${bt(l.id===((c=this._selected)===null||c===void 0?void 0:c.id))}
            .hotKeysJoinedView=${this.hotKeysJoinedView}
            @mouseover=${d=>this._actionFocused(l,d)}
            @actionsSelected=${d=>this._actionSelected(d.detail)}
            .action=${l}
          ></ninja-action>`})}`,s=[];return r.forEach((a,l)=>{let c=l?_`<div class="group-header">${l}</div>`:void 0;s.push(_`${c}${o(a)}`)}),_`
      <div @click=${this._overlayClick} class=${ie(t)}>
        <div class=${ie(e)} @animationend=${this._onTransitionEnd}>
          <ninja-header
            exportparts="ninja-input,ninja-input-wrapper"
            ${Ae(this._headerRef)}
            .placeholder=${this.placeholder}
            .hideBreadcrumbs=${this.hideBreadcrumbs}
            .breadcrumbs=${this.breadcrumbs}
            @change=${this._handleInput}
            @setParent=${a=>this.setParent(a.detail.parent)}
            @close=${this.close}
          >
          </ninja-header>
          <div class="modal-body">
            <div class="actions-list" part="actions-list">${s}</div>
          </div>
          <slot name="footer"> ${Dt} </slot>
        </div>
      </div>
    `}get _selectedIndex(){return this._selected?this._actionMatches.indexOf(this._selected):-1}_actionSelected(e){var t;if(this.dispatchEvent(new CustomEvent("selected",{detail:{search:this._search,action:e},bubbles:!0,composed:!0})),!!e){if(e.children&&((t=e.children)===null||t===void 0?void 0:t.length)>0&&(this._currentRoot=e.id,this._search=""),this._headerRef.value.setSearch(""),this._headerRef.value.focusSearch(),e.handler){let n=e.handler(e);n?.keepOpen||this.close()}this._bump=!0}}async _handleInput(e){this._search=e.detail.search,await this.updateComplete,this.dispatchEvent(new CustomEvent("change",{detail:{search:this._search,actions:this._actionMatches},bubbles:!0,composed:!0}))}_overlayClick(e){var t;!((t=e.target)===null||t===void 0)&&t.classList.contains("modal")&&this.close()}};g.styles=[Ut];b([m({type:String})],g.prototype,"placeholder",void 0);b([m({type:Boolean})],g.prototype,"disableHotkeys",void 0);b([m({type:Boolean})],g.prototype,"hideBreadcrumbs",void 0);b([m()],g.prototype,"openHotkey",void 0);b([m()],g.prototype,"navigationUpHotkey",void 0);b([m()],g.prototype,"navigationDownHotkey",void 0);b([m()],g.prototype,"closeHotkey",void 0);b([m()],g.prototype,"goBackHotkey",void 0);b([m()],g.prototype,"selectHotkey",void 0);b([m({type:Boolean})],g.prototype,"hotKeysJoinedView",void 0);b([m({type:Boolean})],g.prototype,"noAutoLoadMdIcons",void 0);b([m({type:Array,hasChanged(){return!0}})],g.prototype,"data",void 0);b([M()],g.prototype,"visible",void 0);b([M()],g.prototype,"_bump",void 0);b([M()],g.prototype,"_actionMatches",void 0);b([M()],g.prototype,"_search",void 0);b([M()],g.prototype,"_currentRoot",void 0);b([M()],g.prototype,"_flatData",void 0);b([M()],g.prototype,"breadcrumbs",null);b([M()],g.prototype,"_selected",void 0);g=b([D("ninja-keys")],g);function ii(i,e){return i.reduce(([t,n],r)=>e(r)?[[...t,r],n]:[t,[...n,r]],[[],[]])}window.addEventListener("load",i=>{let e=n=>{for(;n!=null;)n.nodeName=="DETAILS"&&(n.open=!0),n=n.parentNode},t=n=>{if(n.target.tagName==="A")return;let o=n.target.closest("span[data-target]").getAttribute("data-target"),s=document.querySelector(o);e(s),window.location=o};[...document.querySelectorAll("[data-target^='#']")].forEach(n=>n.addEventListener("click",t))});var ni=document.querySelector("ninja-keys");fetch("./forest.json").then(i=>i.json()).then(i=>{let e=[],t='<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20"><path d="M480-120v-71l216-216 71 71-216 216h-71ZM120-330v-60h300v60H120Zm690-49-71-71 29-29q8-8 21-8t21 8l29 29q8 8 8 21t-8 21l-29 29ZM120-495v-60h470v60H120Zm0-165v-60h470v60H120Z"/></svg>',n='<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20"><path d="M120-40v-700q0-24 18-42t42-18h480q24 0 42.5 18t18.5 42v700L420-167 120-40Zm60-91 240-103 240 103v-609H180v609Zm600 1v-730H233v-60h547q24 0 42 18t18 42v730h-60ZM180-740h480-480Z"/></svg>';window.sourcePath&&e.push({id:"edit",title:"Edit current tree in Visual Studio Code",section:"Commands",hotkey:"cmd+e",icon:t,handler:()=>{window.location.href=`vscode://file/${window.sourcePath}`}});let r=l=>{let c=i[l];return c.tags?c.tags.includes("top"):!1},o=(l,c,d)=>{let u=i[l],p=`${u.taxon?u.title?`${u.taxon}. ${u.title}`:u.taxon:u.title?u.title:"Untitled"} [${l}]`;e.push({id:l,title:p,section:c,icon:d,handler:()=>{window.location.href=u.route}})},[s,a]=ii(Object.keys(i),r);s.forEach(l=>o(l,"Top Trees",n)),a.forEach(l=>o(l,"All Trees",null)),ni.data=e});})();
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/custom-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/property.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/state.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/base.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/event-options.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-all.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-async.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directive-helpers.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/repeat.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/live.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/async-directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/ref.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/class-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

hotkeys-js/dist/hotkeys.esm.js:
  (*!
   * hotkeys-js v3.8.7
   * A simple micro-library for defining and dispatching keyboard shortcuts. It has no dependencies.
   * 
   * Copyright (c) 2021 kenny wong <wowohoo@qq.com>
   * http://jaywcjlove.github.io/hotkeys
   * 
   * Licensed under the MIT license.
   *)

lit-html/directives/unsafe-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/join.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@material/mwc-icon/mwc-icon-host.css.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-LIcense-Identifier: Apache-2.0
   *)

@material/mwc-icon/mwc-icon.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)
*/
