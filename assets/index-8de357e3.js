(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))c(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function c(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function a(){}function L(e){return e()}function E(){return Object.create(null)}function p(e){e.forEach(L)}function N(e){return typeof e=="function"}function S(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function B(e){return Object.keys(e).length===0}function I(e,t,n){e.insertBefore(t,n||null)}function P(e){e.parentNode&&e.parentNode.removeChild(e)}function M(e){return document.createElement(e)}function z(e){return Array.from(e.childNodes)}let $;function d(e){$=e}const f=[],O=[],m=[],k=[],C=Promise.resolve();let g=!1;function q(){g||(g=!0,C.then(j))}function y(e){m.push(e)}const _=new Set;let u=0;function j(){if(u!==0)return;const e=$;do{try{for(;u<f.length;){const t=f[u];u++,d(t),F(t.$$)}}catch(t){throw f.length=0,u=0,t}for(d(null),f.length=0,u=0;O.length;)O.pop()();for(let t=0;t<m.length;t+=1){const n=m[t];_.has(n)||(_.add(n),n())}m.length=0}while(f.length);for(;k.length;)k.pop()();g=!1,_.clear(),d(e)}function F(e){if(e.fragment!==null){e.update(),p(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(y)}}const H=new Set;function K(e,t){e&&e.i&&(H.delete(e),e.i(t))}function T(e,t,n,c){const{fragment:r,after_update:i}=e.$$;r&&r.m(t,n),c||y(()=>{const s=e.$$.on_mount.map(L).filter(N);e.$$.on_destroy?e.$$.on_destroy.push(...s):p(s),e.$$.on_mount=[]}),i.forEach(y)}function X(e,t){const n=e.$$;n.fragment!==null&&(p(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Y(e,t){e.$$.dirty[0]===-1&&(f.push(e),q(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function D(e,t,n,c,r,i,s,A=[-1]){const h=$;d(e);const o=e.$$={fragment:null,ctx:[],props:i,update:a,not_equal:r,bound:E(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(h?h.$$.context:[])),callbacks:E(),dirty:A,skip_bound:!1,root:t.target||h.$$.root};s&&s(o.root);let b=!1;if(o.ctx=n?n(e,t.props||{},(l,v,...x)=>{const w=x.length?x[0]:v;return o.ctx&&r(o.ctx[l],o.ctx[l]=w)&&(!o.skip_bound&&o.bound[l]&&o.bound[l](w),b&&Y(e,l)),v}):[],o.update(),b=!0,p(o.before_update),o.fragment=c?c(o.ctx):!1,t.target){if(t.hydrate){const l=z(t.target);o.fragment&&o.fragment.l(l),l.forEach(P)}else o.fragment&&o.fragment.c();t.intro&&K(e.$$.fragment),T(e,t.target,t.anchor,t.customElement),j()}d(h)}class G{$destroy(){X(this,1),this.$destroy=a}$on(t,n){if(!N(n))return a;const c=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return c.push(n),()=>{const r=c.indexOf(n);r!==-1&&c.splice(r,1)}}$set(t){this.$$set&&!B(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function J(e){let t;return{c(){t=M("main"),t.innerHTML=`<div id="blur-blob" class="svelte-mzv6rd"></div> 
    <div id="blob" class="svelte-mzv6rd"></div>`},m(n,c){I(n,t,c)},p:a,i:a,o:a,d(n){n&&P(t)}}}function Q(e){return document.body.onpointermove=t=>{const{clientX:n,clientY:c}=t;U.animate({left:`${n}px`,top:`${c}px`},{duration:3e3,fill:"forwards"})},[]}class R extends G{constructor(t){super(),D(this,t,Q,J,S,{})}}new R({target:document.getElementById("app")});const U=document.getElementById("blob");
