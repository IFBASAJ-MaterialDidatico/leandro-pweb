var c=Object.defineProperty;var d=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var m=(o,e,a)=>e in o?c(o,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[e]=a,i=(o,e)=>{for(var a in e||(e={}))p.call(e,a)&&m(o,a,e[a]);if(d)for(var a of d(e))f.call(e,a)&&m(o,a,e[a]);return o};import{f as u,h as t,T as v,u as g,g as y,i as b,j as h,k as D,S,r as n,l as L,m as P}from"./app.9b60929d.js";var B=u({name:"FadeSlideY",setup(o,{slots:e}){const a=g(),r=a.resolve,l=a.pending;return()=>t(v,{name:"fade-slide-y",mode:"out-in",onBeforeEnter:r,onBeforeLeave:l},()=>{var s;return(s=e.default)==null?void 0:s.call(e)})}}),Y=u({name:"Layout",setup(){const o=P(),e=y(),a=L(),r=b(),l=h(),s=D(()=>e.value.blog.sidebarDisplay||o.value.blog.sidebarDisplay||"mobile");return()=>[t(S),t(n("CommonWrapper"),{},i(i({default:()=>r.value.home?t(n("HomePage")):t(B,()=>t(n("NormalPage"),{key:a.value.path}))},s.value!=="none"?{navScreenBottom:()=>t(n("BloggerInfo"))}:{}),!l.value&&s.value==="always"?{sidebar:()=>t(n("BloggerInfo"))}:{}))]}});export{Y as default};