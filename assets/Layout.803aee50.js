import{f as i,h as e,T as d,u as m,g as u,i as c,j as p,k as f,S as v,r as t,l as g,m as y}from"./app.57def927.js";var b=i({name:"FadeSlideY",setup(l,{slots:a}){const s=m(),n=s.resolve,r=s.pending;return()=>e(d,{name:"fade-slide-y",mode:"out-in",onBeforeEnter:n,onBeforeLeave:r},()=>{var o;return(o=a.default)==null?void 0:o.call(a)})}}),D=i({name:"Layout",setup(){const l=y(),a=u(),s=g(),n=c(),r=p(),o=f(()=>a.value.blog.sidebarDisplay||l.value.blog.sidebarDisplay||"mobile");return()=>[e(v),e(t("CommonWrapper"),{},{default:()=>n.value.home?e(t("HomePage")):e(b,()=>e(t("NormalPage"),{key:s.value.path})),...o.value!=="none"?{navScreenBottom:()=>e(t("BloggerInfo"))}:{},...!r.value&&o.value==="always"?{sidebar:()=>e(t("BloggerInfo"))}:{}})]}});export{D as default};
