var ie=Object.defineProperty,ne=Object.defineProperties;var le=Object.getOwnPropertyDescriptors;var $=Object.getOwnPropertySymbols;var pe=Object.prototype.hasOwnProperty,ce=Object.prototype.propertyIsEnumerable;var z=(e,a,t)=>a in e?ie(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,C=(e,a)=>{for(var t in a||(a={}))pe.call(a,t)&&z(e,t,a[t]);if($)for(var t of $(a))ce.call(a,t)&&z(e,t,a[t]);return e},w=(e,a)=>ne(e,le(a));import{c as R,a as ue,b as de,g as k,r as L,l as O,d as xe,e as ge,f as l,h as q,i as W,j as H,m as y,k as S,u as D,n as v,o as r,C as be,p as b,B as h,G as d,T as I,S as me,P as G,q as U,s as K,t as he,v as fe,F as ye,w as Se,A as ve,x as Ce,y as ke,R as Ee,z as Pe,D as V,E as Y,H as Fe,I as Be,J as Te,K as je}from"./vendor.eb4f8d35.js";const Ae=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const p of i)if(p.type==="childList")for(const u of p.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&o(u)}).observe(document,{childList:!0,subtree:!0});function t(i){const p={};return i.integrity&&(p.integrity=i.integrity),i.referrerpolicy&&(p.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?p.credentials="include":i.crossorigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function o(i){if(i.ep)return;i.ep=!0;const p=t(i);fetch(i.href,p)}};Ae();const J={type:0,isInProcess:!1,isProcessed:!1},Q={home:{i:0,j:0},table:Array(10).fill(0).map((e,a)=>a===0?Array(10).fill(0).map((t,o)=>o===0?{type:3,isInProcess:!1,isProcessed:!1}:J):Array(10).fill(J))},E=R({name:"table",initialState:Q,reducers:{switchType:(e,a)=>{const t=(e.table[a.payload.i][a.payload.j].type+1)%4;e.table[a.payload.i][a.payload.j].type=t,e.shop&&e.shop.i===a.payload.i&&e.shop.j===a.payload.j&&t!==2&&(e.shop=void 0),e.home&&e.home.i===a.payload.i&&e.home.j===a.payload.j&&t!==3&&(e.home=void 0),t===2&&(e.shop&&(e.table[e.shop.i][e.shop.j].type=0),e.shop=a.payload),t===3&&(e.home&&(e.table[e.home.i][e.home.j].type=0),e.home=a.payload)},setInProcess:(e,a)=>{e.table[a.payload.i][a.payload.j].isInProcess=a.payload.isInProcess},setProcessed:(e,a)=>{e.table[a.payload.i][a.payload.j].isProcessed=a.payload.isProcessed},setTable:(e,a)=>{e.table=a.payload},resetProcess:e=>{e.table.forEach(a=>{a.forEach(t=>{t.isInProcess=!1,t.isProcessed=!1})})},resetTable:()=>Q}}),X={speed:5,eval:"BEFORE"},F=R({name:"condiiton",initialState:X,reducers:{setCapacity:(e,a)=>{e.speed=a.payload},setEval:(e,a)=>{e.eval=a.payload},clearCondition:()=>X}}),we={isDarkTheme:window.matchMedia("(prefers-color-scheme: dark)").matches},Z=R({name:"theme",initialState:we,reducers:{toggleTheme:e=>({isDarkTheme:!e.isDarkTheme})}}),Re=ue({theme:Z.reducer,table:E.reducer,condition:F.reducer}),De=de({reducer:Re});var Ie={h1:{fontWeight:800,fontSize:35,lineHeight:1.3,letterSpacing:"-0.24px"},h2:{fontWeight:700,fontSize:29,letterSpacing:"-0.24px"},h3:{fontWeight:600,fontSize:24,letterSpacing:"-0.06px"},h4:{fontWeight:600,fontSize:20,letterSpacing:"-0.06px"},h5:{fontWeight:500,fontSize:16,letterSpacing:"-0.05px"},h6:{fontWeight:500,fontSize:14,letterSpacing:"-0.05px"},overline:{fontWeight:800},fontFamily:"-apple-system, blinkMacSystemFont, Helvetica Neue, Segoe UI, YuGothicM, YuGothic, Meiryo, sans-serif"};const Ne=["none","0 0 0 1px rgba(63,63,68,0.05), 0 1px 2px 0 rgba(63,63,68,0.15)","0 0 1px 0 rgba(0,0,0,0.31), 0 2px 2px -2px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 3px 4px -2px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 3px 4px -2px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 4px 6px -2px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 4px 6px -2px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 4px 8px -2px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 5px 8px -2px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 6px 12px -4px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 7px 12px -4px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 6px 16px -4px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 7px 16px -4px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 8px 18px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 9px 18px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 10px 20px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 11px 20px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 12px 22px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 13px 22px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 14px 24px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 16px 28px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 18px 30px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 20px 32px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 22px 34px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 24px 36px -8px rgba(0,0,0,0.25)"],Me=["none","0 0 1px 0 rgba(0,0,0,0.70), 0 3px 4px -2px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 2px 2px -2px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 3px 4px -2px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 3px 4px -2px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 4px 6px -2px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 4px 6px -2px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 4px 8px -2px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 5px 8px -2px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 6px 12px -4px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 7px 12px -4px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 6px 16px -4px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 7px 16px -4px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 8px 18px -8px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 9px 18px -8px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 10px 20px -8px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 11px 20px -8px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 12px 22px -8px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 13px 22px -8px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 14px 24px -8px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 16px 28px -8px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 18px 30px -8px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 20px 32px -8px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 22px 34px -8px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 24px 36px -8px rgba(0,0,0,0.50)"],_e={direction:"ltr",typography:Ie,breakpoints:{values:{xs:0,sm:640,md:960,lg:1280,xl:1920}},props:{MuiTextField:{margin:"dense"}},overrides:{MuiLinearProgress:{root:{borderRadius:3,overflow:"hidden"}},MuiListItemIcon:{root:{minWidth:32}}}},$e=[{mode:"light",palette:{type:"light",action:{active:k[600]},background:{default:"#f5f5f5",paper:"#fafafa"},primary:{main:"#2196f3",light:"#6ec6ff",dark:"#0069c0"},secondary:{main:"#e91e63",light:"#ff6090",dark:"#b0003a"},error:L,success:O,text:{primary:k[900],secondary:k[600]}},shadows:Ne},{mode:"dark",palette:{type:"dark",action:{active:"rgba(255, 255, 255, 0.54)",hover:"rgba(255, 255, 255, 0.04)",selected:"rgba(255, 255, 255, 0.08)",disabled:"rgba(255, 255, 255, 0.26)",disabledBackground:"rgba(255, 255, 255, 0.12)",focus:"rgba(255, 255, 255, 0.12)"},background:{default:"#1d1c21",paper:"#262529"},primary:{main:"#0288d1",light:"#5eb8ff",dark:"#005b9f"},secondary:{main:"#c2185b",light:"#fa5788",dark:"#8c0032"},error:L,success:O,text:{primary:k[300],secondary:k[500]}},shadows:Me}],ze=e=>{const a=$e.find(t=>t.mode===e);return xe(ge(C(C({},_e),a)))};var N={},Le=W.exports,Oe=H.exports;Object.defineProperty(N,"__esModule",{value:!0});var ee=N.default=void 0,qe=Oe(l.exports),We=Le(q),He=(0,We.default)(qe.createElement("path",{d:"M20.38 8.57l-1.23 1.85a8 8 0 01-.22 7.58H5.07A8 8 0 0115.58 6.85l1.85-1.23A10 10 0 003.35 19a2 2 0 001.72 1h13.85a2 2 0 001.74-1 10 10 0 00-.27-10.44zm-9.79 6.84a2 2 0 002.83 0l5.66-8.49-8.49 5.66a2 2 0 000 2.83z"}),"Speed");ee=N.default=He;const Ge=y(()=>S({icon:{marginRight:"16px"}})),Ue=()=>{const e=Ge(),a=D(),t=v(u=>u.condition),{isMobile:o}=l.exports.useContext(B),i=l.exports.useMemo(()=>Array(10).fill(0).map((u,g)=>({value:g+1,label:(g+1).toString()})),[]),p=l.exports.useCallback(u=>{typeof u!="object"&&a(F.actions.setCapacity(u))},[a]);return r(be,{children:b(h,{p:o?2:3,children:[b(d,{container:!0,spacing:2,children:[r(d,{item:!0,xl:1,sm:1,xs:2,children:r(h,{className:e.icon,children:r(ee,{})})}),b(d,{item:!0,xl:11,sm:11,xs:10,children:[r(I,{variant:"h5",gutterBottom:!0,children:"\u63A2\u7D22\u30B9\u30D4\u30FC\u30C9"}),r(h,{pr:2,children:r(me,{defaultValue:5,"aria-labelledby":"discrete-slider",valueLabelDisplay:"auto",step:1,marks:i,min:1,max:10,disabled:t.eval==="INPROCESS",onChange:(u,g)=>p(g)})})]})]})," "]})})};var M={},Ke=W.exports,Ve=H.exports;Object.defineProperty(M,"__esModule",{value:!0});var ae=M.default=void 0,Ye=Ve(l.exports),Je=Ke(q),Qe=(0,Je.default)(Ye.createElement("path",{d:"M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}),"InfoOutlined");ae=M.default=Qe;const Xe=()=>{const e=v(o=>o.condition),{isMobile:a}=l.exports.useContext(B);let t;switch(e.eval){case"BEFORE":t="\u5B9F\u884C\u524D\u3067\u3059\u3002";break;case"INPROCESS":t="\u9B5A\u5C4B\u306B\u305F\u3069\u308A\u7740\u3051\u308B\u3067\u3057\u3087\u3046\u304B\uFF1F\u3002";break;case"REACHABLE":t="\u9B5A\u5C4B\u306B\u305F\u3069\u308A\u7740\u3051\u307E\u3057\u305F\uFF01";break;case"UNREACHABLE":t="\u9B5A\u5C4B\u306B\u305F\u3069\u308A\u7740\u3051\u307E\u305B\u3093\u3067\u3057\u305F\uFF01";break;default:t=""}return r(G,{children:r(h,{p:a?2:3,children:b(d,{container:!0,spacing:2,children:[r(d,{item:!0,xl:1,sm:1,xs:2,container:!0,alignItems:"center",children:r(ae,{})}),r(d,{item:!0,xl:11,sm:11,xs:10,container:!0,alignItems:"center",children:r(I,{variant:"body1",children:t})})]})})})},Ze=y(e=>S({isInProcess:{backgroundColor:e.palette.action.disabledBackground},isProcessed:{backgroundColor:e.palette.action.hover},isReffered:{backgroundColor:e.palette.action.selected},isBasis:{backgroundColor:e.palette.action.selected},tableTd:{border:`1px solid ${e.palette.divider}`,textAlign:"center",overflow:"auto",fontSize:"2rem",width:"3rem",height:"3rem",cursor:"pointer","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",[e.breakpoints.down("xs")]:{fontSize:"1rem",minWidth:"2rem"}},chipItem:{marginBottom:e.spacing(.5)},chipSummary:{margin:e.spacing(.5)}})),e0=({type:e,isInProcess:a,isProcessed:t,switchType:o,resetCondition:i,resetProcess:p,evaluation:u})=>{const g=Ze(),P=l.exports.useMemo(()=>a?g.isInProcess:t?g.isProcessed:"",[g.isInProcess,g.isProcessed,a,t]),m=l.exports.useCallback(()=>{o(),u!=="BEFORE"&&(i(),p())},[u,i,p,o]);return b("td",{className:`${P} ${g.tableTd}`,role:"gridcell",onClick:m,onKeyDown:m,children:[e===1?"\u{1F9CA}":null,e===2?"\u{1F41F}":null,e===3?"\u{1F3E0}":null]})},a0=y(e=>S({paperTitle:{marginLeft:e.spacing(1)},dpTable:{tableLayout:"fixed",borderCollapse:"collapse"},buttons:{marginTop:e.spacing(2),"& > *":{marginLeft:e.spacing(3)}},trData:{height:"3rem"},emptyChip:{paddingLeft:"2.5rem",paddingRight:"2.5rem",[e.breakpoints.down("sm")]:{paddingLeft:"initial",paddingRight:"initial"}},itemChip:{animationName:"$fadeIn",animationDuration:".3s",animationTimingFunction:"ease-in-out"},"@keyframes fadeIn":{"0%":{opacity:0},"100%":{opacity:1}}})),r0=()=>{const e=a0(),a=D(),{isMobile:t}=l.exports.useContext(B),o=v(n=>n.table),i=v(n=>n.condition),p=l.exports.useCallback(n=>{a(E.actions.setTable(n))},[a]),u=l.exports.useCallback(n=>{a(F.actions.setEval(n))},[a]),g=l.exports.useCallback((n,s)=>{a(E.actions.switchType({i:n,j:s}))},[a]),P=l.exports.useMemo(()=>100/i.speed,[i.speed]),m=l.exports.useCallback(async(n,s,x)=>{if(s.i<0||s.i>=10||s.j<0||s.j>=10||n[s.i][s.j].type===1||n[s.i][s.j].isProcessed)return Promise.resolve(n);let c=[[]];return n.forEach((f,A)=>{c[A]=f.slice()}),c=await new Promise(f=>{setTimeout(()=>{x.i!==-1&&x.j!==-1&&(c[x.i][x.j]=w(C({},c[x.i][x.j]),{isInProcess:!1})),c[s.i][s.j]=w(C({},c[s.i][s.j]),{isProcessed:!0}),p(c),f(c)},P)}),c=await m(c,{i:s.i+1,j:s.j},s),c=await m(c,{i:s.i-1,j:s.j},s),c=await m(c,{i:s.i,j:s.j+1},s),c=await m(c,{i:s.i,j:s.j-1},s),Promise.resolve(c)},[P,p]),re=l.exports.useCallback(async()=>{var f;const n=(f=o.home)!=null?f:{i:0,j:0},s={i:-1,j:-1},x=[[]];o.table.forEach((A,oe)=>{x[oe]=A.slice()}),u("INPROCESS");const c=await m(x,n,s);o.shop&&c[o.shop.i][o.shop.j].isProcessed?u("REACHABLE"):u("UNREACHABLE")},[m,u,o.home,o.shop,o.table]),T=l.exports.useCallback(()=>{a(F.actions.setEval("BEFORE"))},[a]),te=l.exports.useCallback(()=>{a(E.actions.resetTable())},[a]),j=l.exports.useCallback(()=>{a(E.actions.resetProcess())},[a]),_=l.exports.useCallback((n,s,x)=>r(e0,{type:n.type,isInProcess:n.isInProcess,isProcessed:n.isProcessed,switchType:()=>g(s,x),resetCondition:T,resetProcess:j,evaluation:i.eval},`square-${s*10+x}`),[i.eval,g,T,j]),se=l.exports.useCallback(n=>r("tr",{className:e.trData,children:o.table[n].map((s,x)=>_(s,n,x))},n),[e.trData,_,o]);return r(G,{children:r(h,{p:t?2:3,children:b(d,{container:!0,spacing:2,children:[r(d,{item:!0,xl:1,sm:1,xs:1,children:r(h,{children:r(U,{})})}),r(d,{item:!0,xl:12,sm:12,xs:12,children:b(d,{container:!0,spacing:2,children:[r(d,{item:!0,xl:12,xs:12,container:!0,justify:"center",children:r("table",{className:e.dpTable,children:r("tbody",{children:o.table.map((n,s)=>se(s))})})}),r(d,{item:!0,xl:12,xs:12,container:!0,justify:"flex-end",children:b(h,{className:e.buttons,children:[r(K,{variant:"contained",color:"secondary",disabled:i.eval==="INPROCESS",onClick:()=>{T(),te()},children:"RESET"}),r(K,{variant:"contained",color:"primary",disabled:i.eval==="INPROCESS"||!o.home,onClick:()=>{j(),re()},children:"START"})]})})]})})]})})})},t0=y(()=>S({root:{marginBottom:"16px",overflow:"auto"},mainContents:{marginTop:0,marginBottom:0}})),s0=()=>{const e=t0(),{enqueueSnackbar:a}=he();return l.exports.useEffect(()=>{a("\u30DE\u30B9\u76EE\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u8FF7\u8DEF\u3092\u5B8C\u6210\u3055\u305B\u3066\u304F\u3060\u3055\u3044\u3002",{variant:"info"}),setTimeout(()=>{a("\u30DE\u30B9\u76EE\u3092\u8907\u6570\u56DE\u30AF\u30EA\u30C3\u30AF\u3059\u308B\u3053\u3068\u3067\u30DE\u30B9\u306E\u7A2E\u985E\u304C\u5909\u308F\u308A\u307E\u3059\u3002",{variant:"info"})},1500)},[a]),r(fe,{maxWidth:"md",className:e.root,children:b(d,{container:!0,spacing:3,className:e.mainContents,children:[r(d,{item:!0,xl:12,xs:12,children:r(Ue,{})}),r(d,{item:!0,xl:12,xs:12,children:r(Xe,{})}),r(d,{item:!0,xl:12,xs:12,children:r(r0,{})})]})})},o0=()=>{const{toggleTheme:e}=Z.actions,a=v(o=>o.theme.isDarkTheme),t=D();return r(ye,{control:r(Se,{checked:a,color:"default",inputProps:{"aria-label":"theme-switch"},onClick:()=>t(e())}),label:a?"\u{1F31D}":"\u{1F31E}"})},i0=y(e=>S({root:{flexGrow:1,marginBottom:e.spacing(2)},title:{marginLeft:e.spacing(1),marginRight:e.spacing(4)},menu:{flexGrow:1,display:"flex",justifyContent:"flex-end"}})),n0=()=>{const e=i0();return r("div",{className:e.root,children:r(ve,{position:"static",elevation:0,color:"transparent",children:b(Ce,{children:[r(U,{}),r(I,{variant:"h4",className:e.title,children:"DFS Flood-Fill Visualizer"}),r("div",{className:e.menu,children:r(o0,{})})]})})})},l0=y(e=>S({root:{textAlign:"right"},icon:{margin:"8px 16px 16px 0px"},link:{textDecoration:"none",color:e.palette.text.primary,"&:hover":{color:e.palette.secondary.main}}})),p0=()=>{const e=l0();return r("footer",{className:e.root,children:r(h,{className:e.icon,children:r("a",{href:"https://github.com/yokotani92/dfs-flood-fill-visualizer",className:e.link,children:r(ke,{})})})})},B=Ee.createContext({isMobile:!1,isDesktop:!1}),c0=()=>{const e=V(Y().breakpoints.down("sm")),a=V(Y().breakpoints.up("lg")),t=v(o=>o.theme.isDarkTheme)?"dark":"light";return r(Fe,{theme:ze(t),children:r(B.Provider,{value:{isMobile:e,isDesktop:a},children:b(Be,{children:[r(Te,{}),r(n0,{}),r(s0,{}),r(p0,{})]})})})},u0=()=>r(Pe,{store:De,children:r(c0,{})});je.render(r(u0,{}),document.getElementById("root"));