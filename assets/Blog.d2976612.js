var l=Object.defineProperty;var n=Object.getOwnPropertySymbols;var i=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;var t=(s,a,e)=>a in s?l(s,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[a]=e,r=(s,a)=>{for(var e in a||(a={}))i.call(a,e)&&t(s,e,a[e]);if(n)for(var e of n(a))m.call(a,e)&&t(s,e,a[e]);return s};import{f as p,i as g,j as f,h as o,S as d,B as u,t as v,D as B,I as b,v as c,x as I,r as C}from"./app.9b60929d.js";var h=p({name:"Blog",setup(){const s=g(),a=f();return()=>[o(d),o(C("CommonWrapper"),{sidebar:!1},r({default:()=>s.value.home?o(u):o("main",{class:"page blog",id:"main-content"},o("div",{class:"blog-page-wrapper"},[o(v),o(B,{delay:.16},()=>o(b))])),navScreenBottom:()=>o(c)},a.value?{sidebar:()=>o(I)}:{}))]}});export{h as default};