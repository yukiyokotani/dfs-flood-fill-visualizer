(this["webpackJsonpdfs-visualizer"]=this["webpackJsonpdfs-visualizer"]||[]).push([[0],{238:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(12),c=a.n(i),s=a(15),o=a(236),p=a(33),b=a(354),x=a(237),l=a(59),j=a(18),u=a(23),d={type:0,isInProcess:!1,isProcessed:!1},g={home:{i:0,j:0},table:Array(10).fill(0).map((function(e,t){return 0===t?Array(10).fill(0).map((function(e,t){return 0===t?{type:3,isInProcess:!1,isProcessed:!1}:d})):Array(10).fill(d)}))},h=Object(u.b)({name:"table",initialState:g,reducers:{switchType:function(e,t){var a=(e.table[t.payload.i][t.payload.j].type+1)%4;e.table[t.payload.i][t.payload.j].type=a,e.shop&&e.shop.i===t.payload.i&&e.shop.j===t.payload.j&&2!==a&&(e.shop=void 0),e.home&&e.home.i===t.payload.i&&e.home.j===t.payload.j&&3!==a&&(e.home=void 0),2===a&&(e.shop&&(e.table[e.shop.i][e.shop.j].type=0),e.shop=t.payload),3===a&&(e.home&&(e.table[e.home.i][e.home.j].type=0),e.home=t.payload)},setInProcess:function(e,t){e.table[t.payload.i][t.payload.j].isInProcess=t.payload.isInProcess},setProcessed:function(e,t){e.table[t.payload.i][t.payload.j].isProcessed=t.payload.isProcessed},setTable:function(e,t){e.table=t.payload},resetProcess:function(e){e.table.forEach((function(e){e.forEach((function(e){e.isInProcess=!1,e.isProcessed=!1}))}))},resetTable:function(){return g}}}),f={speed:5,eval:"BEFORE"},m=Object(u.b)({name:"condiiton",initialState:f,reducers:{setCapacity:function(e,t){e.speed=t.payload},setEval:function(e,t){e.eval=t.payload},clearCondition:function(){return f}}}),O={isDarkTheme:window.matchMedia("(prefers-color-scheme: dark)").matches},y=Object(u.b)({name:"theme",initialState:O,reducers:{toggleTheme:function(e){return{isDarkTheme:!e.isDarkTheme}}}}),k=Object(j.c)({theme:y.reducer,table:h.reducer,condition:m.reducer}),v=Object(u.a)({reducer:k}),C=a(25),P=a(16),S=a(355),E=a(207),w=a(37),T=a(193),I={direction:"ltr",typography:{h1:{fontWeight:800,fontSize:35,lineHeight:1.3,letterSpacing:"-0.24px"},h2:{fontWeight:700,fontSize:29,letterSpacing:"-0.24px"},h3:{fontWeight:600,fontSize:24,letterSpacing:"-0.06px"},h4:{fontWeight:600,fontSize:20,letterSpacing:"-0.06px"},h5:{fontWeight:500,fontSize:16,letterSpacing:"-0.05px"},h6:{fontWeight:500,fontSize:14,letterSpacing:"-0.05px"},overline:{fontWeight:800},fontFamily:"-apple-system, blinkMacSystemFont, Helvetica Neue, Segoe UI, YuGothicM, YuGothic, Meiryo, sans-serif"},breakpoints:{values:{xs:0,sm:640,md:960,lg:1280,xl:1920}},props:{MuiTextField:{margin:"dense"}},overrides:{MuiLinearProgress:{root:{borderRadius:3,overflow:"hidden"}},MuiListItemIcon:{root:{minWidth:32}}}},N=[{mode:"light",palette:{type:"light",action:{active:P.a.grey[600]},background:{default:"#f5f5f5",paper:"#fafafa"},primary:{main:"#2196f3",light:"#6ec6ff",dark:"#0069c0"},secondary:{main:"#e91e63",light:"#ff6090",dark:"#b0003a"},error:w.a,success:T.a,text:{primary:P.a.grey[900],secondary:P.a.grey[600]}},shadows:["none","0 0 0 1px rgba(63,63,68,0.05), 0 1px 2px 0 rgba(63,63,68,0.15)","0 0 1px 0 rgba(0,0,0,0.31), 0 2px 2px -2px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 3px 4px -2px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 3px 4px -2px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 4px 6px -2px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 4px 6px -2px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 4px 8px -2px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 5px 8px -2px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 6px 12px -4px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 7px 12px -4px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 6px 16px -4px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 7px 16px -4px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 8px 18px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 9px 18px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 10px 20px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 11px 20px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 12px 22px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 13px 22px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 14px 24px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 16px 28px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 18px 30px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 20px 32px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 22px 34px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 24px 36px -8px rgba(0,0,0,0.25)"]},{mode:"dark",palette:{type:"dark",action:{active:"rgba(255, 255, 255, 0.54)",hover:"rgba(255, 255, 255, 0.04)",selected:"rgba(255, 255, 255, 0.08)",disabled:"rgba(255, 255, 255, 0.26)",disabledBackground:"rgba(255, 255, 255, 0.12)",focus:"rgba(255, 255, 255, 0.12)"},background:{default:"#1d1c21",paper:"#262529"},primary:{main:"#0288d1",light:"#5eb8ff",dark:"#005b9f"},secondary:{main:"#c2185b",light:"#fa5788",dark:"#8c0032"},error:w.a,success:T.a,text:{primary:P.a.grey[300],secondary:P.a.grey[500]}},shadows:["none","0 0 1px 0 rgba(0,0,0,0.70), 0 3px 4px -2px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 2px 2px -2px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 3px 4px -2px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 3px 4px -2px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 4px 6px -2px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 4px 6px -2px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 4px 8px -2px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 5px 8px -2px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 6px 12px -4px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 7px 12px -4px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 6px 16px -4px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 7px 16px -4px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 8px 18px -8px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 9px 18px -8px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 10px 20px -8px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 11px 20px -8px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 12px 22px -8px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 13px 22px -8px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 14px 24px -8px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 16px 28px -8px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 18px 30px -8px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 20px 32px -8px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 22px 34px -8px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 24px 36px -8px rgba(0,0,0,0.50)"]}],R=function(e){var t=N.find((function(t){return t.mode===e}));return Object(S.a)(Object(E.a)(Object(C.a)(Object(C.a)({},I),t)))},B=a(244),A=a(209),D=a(231),M=a(227),z=a(226),L=a(239),F=a(204),W=a(240),H=a(203),G=a.n(H),U=a(2),q=Object(B.a)((function(){return Object(A.a)({icon:{marginRight:"16px"}})})),J=function(){var e=q(),t=Object(s.b)(),a=Object(s.c)((function(e){return e.condition})),n=Object(r.useContext)(Oe).isMobile,i=Object(r.useMemo)((function(){return Array(10).fill(0).map((function(e,t){return{value:t+1,label:(t+1).toString()}}))}),[]),c=Object(r.useCallback)((function(e){"object"!==typeof e&&t(m.actions.setCapacity(e))}),[t]);return Object(U.jsx)(z.a,{children:Object(U.jsxs)(L.a,{p:n?2:3,children:[Object(U.jsxs)(M.a,{container:!0,spacing:2,children:[Object(U.jsx)(M.a,{item:!0,xl:1,sm:1,xs:2,children:Object(U.jsx)(L.a,{className:e.icon,children:Object(U.jsx)(G.a,{})})}),Object(U.jsxs)(M.a,{item:!0,xl:11,sm:11,xs:10,children:[Object(U.jsx)(F.a,{variant:"h5",gutterBottom:!0,children:"\u63a2\u7d22\u30b9\u30d4\u30fc\u30c9"}),Object(U.jsx)(L.a,{pr:2,children:Object(U.jsx)(W.a,{defaultValue:5,"aria-labelledby":"discrete-slider",valueLabelDisplay:"auto",step:1,marks:i,min:1,max:10,disabled:"INPROCESS"===a.eval,onChange:function(e,t){return c(t)}})})]})]})," "]})})},V=a(79),Y=a(205),K=a.n(Y),$=function(){var e,t=Object(s.c)((function(e){return e.condition})),a=Object(r.useContext)(Oe).isMobile;switch(t.eval){case"BEFORE":e="\u5b9f\u884c\u524d\u3067\u3059\u3002";break;case"INPROCESS":e="\u9b5a\u5c4b\u306b\u305f\u3069\u308a\u7740\u3051\u308b\u3067\u3057\u3087\u3046\u304b\uff1f\u3002";break;case"REACHABLE":e="\u9b5a\u5c4b\u306b\u305f\u3069\u308a\u7740\u3051\u307e\u3057\u305f\uff01";break;case"UNREACHABLE":e="\u9b5a\u5c4b\u306b\u305f\u3069\u308a\u7740\u3051\u307e\u305b\u3093\u3067\u3057\u305f\uff01";break;default:e=""}return Object(U.jsx)(V.a,{children:Object(U.jsx)(L.a,{p:a?2:3,children:Object(U.jsxs)(M.a,{container:!0,spacing:2,children:[Object(U.jsx)(M.a,{item:!0,xl:1,sm:1,xs:2,container:!0,alignItems:"center",children:Object(U.jsx)(K.a,{})}),Object(U.jsx)(M.a,{item:!0,xl:11,sm:11,xs:10,container:!0,alignItems:"center",children:Object(U.jsx)(F.a,{variant:"body1",children:e})})]})})})},Q=a(49),X=a.n(Q),Z=a(80),_=a(41),ee=a(230),te=a(64),ae=a.n(te),re=Object(B.a)((function(e){return Object(A.a)({isInProcess:{backgroundColor:e.palette.action.disabledBackground},isProcessed:{backgroundColor:e.palette.action.hover},isReffered:{backgroundColor:e.palette.action.selected},isBasis:{backgroundColor:e.palette.action.selected},tableTd:Object(_.a)({border:"1px solid ".concat(e.palette.divider),textAlign:"center",overflow:"auto",fontSize:"2rem",width:"3rem",height:"3rem",cursor:"default","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none"},e.breakpoints.down("xs"),{fontSize:"1rem",minWidth:"2rem"}),chipItem:{marginBottom:e.spacing(.5)},chipSummary:{margin:e.spacing(.5)}})})),ne=function(e){var t=e.type,a=e.isInProcess,n=e.isProcessed,i=e.switchType,c=e.resetCondition,s=e.resetProcess,o=e.evaluation,p=re(),b=Object(r.useMemo)((function(){return a?p.isInProcess:n?p.isProcessed:""}),[p.isInProcess,p.isProcessed,a,n]),x=Object(r.useCallback)((function(){i(),"BEFORE"!==o&&(c(),s())}),[o,c,s,i]);return Object(U.jsxs)("td",{className:"".concat(b," ").concat(p.tableTd),role:"gridcell",onClick:x,onKeyDown:x,children:[1===t?"\ud83e\uddca":null,2===t?"\ud83d\udc1f":null,3===t?"\ud83c\udfe0":null]})},ie=Object(B.a)((function(e){return Object(A.a)({paperTitle:{marginLeft:e.spacing(1)},dpTable:{tableLayout:"fixed",borderCollapse:"collapse"},buttons:{marginTop:e.spacing(2),"& > *":{marginLeft:e.spacing(3)}},trData:{height:"3rem"},emptyChip:Object(_.a)({paddingLeft:"2.5rem",paddingRight:"2.5rem"},e.breakpoints.down("sm"),{paddingLeft:"initial",paddingRight:"initial"}),itemChip:{animationName:"$fadeIn",animationDuration:".3s",animationTimingFunction:"ease-in-out"},"@keyframes fadeIn":{"0%":{opacity:0},"100%":{opacity:1}}})})),ce=function(){var e=ie(),t=Object(s.b)(),a=Object(r.useContext)(Oe).isMobile,n=Object(s.c)((function(e){return e.table})),i=Object(s.c)((function(e){return e.condition})),c=Object(r.useCallback)((function(e){t(h.actions.setTable(e))}),[t]),o=Object(r.useCallback)((function(e){t(m.actions.setEval(e))}),[t]),p=Object(r.useCallback)((function(e,a){t(h.actions.switchType({i:e,j:a}))}),[t]),b=Object(r.useMemo)((function(){return 100/i.speed}),[i.speed]),x=Object(r.useCallback)(function(){var e=Object(Z.a)(X.a.mark((function e(t,a,r){var n;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(a.i<0||a.i>=10||a.j<0||a.j>=10||1===t[a.i][a.j].type||t[a.i][a.j].isProcessed)){e.next=2;break}return e.abrupt("return",Promise.resolve(t));case 2:return n=[[]],t.forEach((function(e,t){n[t]=e.slice()})),e.next=6,new Promise((function(e){setTimeout((function(){-1!==r.i&&-1!==r.j&&(n[r.i][r.j]=Object(C.a)(Object(C.a)({},n[r.i][r.j]),{},{isInProcess:!1})),n[a.i][a.j]=Object(C.a)(Object(C.a)({},n[a.i][a.j]),{},{isProcessed:!0}),c(n),e(n)}),b)}));case 6:return n=e.sent,e.next=9,x(n,{i:a.i+1,j:a.j},a);case 9:return n=e.sent,e.next=12,x(n,{i:a.i-1,j:a.j},a);case 12:return n=e.sent,e.next=15,x(n,{i:a.i,j:a.j+1},a);case 15:return n=e.sent,e.next=18,x(n,{i:a.i,j:a.j-1},a);case 18:return n=e.sent,e.abrupt("return",Promise.resolve(n));case 20:case"end":return e.stop()}}),e)})));return function(t,a,r){return e.apply(this,arguments)}}(),[b,c]),l=Object(r.useCallback)(Object(Z.a)(X.a.mark((function e(){var t,a,r,i,c;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=null!==(t=n.home)&&void 0!==t?t:{i:0,j:0},r={i:-1,j:-1},i=[[]],n.table.forEach((function(e,t){i[t]=e.slice()})),o("INPROCESS"),e.next=7,x(i,a,r);case 7:c=e.sent,n.shop&&c[n.shop.i][n.shop.j].isProcessed?o("REACHABLE"):o("UNREACHABLE");case 9:case"end":return e.stop()}}),e)}))),[x,o,n.home,n.shop,n.table]),j=Object(r.useCallback)((function(){t(m.actions.setEval("BEFORE"))}),[t]),u=Object(r.useCallback)((function(){t(h.actions.resetTable())}),[t]),d=Object(r.useCallback)((function(){t(h.actions.resetProcess())}),[t]),g=Object(r.useCallback)((function(e,t,a){return Object(U.jsx)(ne,{type:e.type,isInProcess:e.isInProcess,isProcessed:e.isProcessed,switchType:function(){return p(t,a)},resetCondition:j,resetProcess:d,evaluation:i.eval},"square-".concat(10*t+a))}),[i.eval,p,j,d]),f=Object(r.useCallback)((function(t){return Object(U.jsx)("tr",{className:e.trData,children:n.table[t].map((function(e,a){return g(e,t,a)}))},t)}),[e.trData,g,n]);return Object(U.jsx)(V.a,{children:Object(U.jsx)(L.a,{p:a?2:3,children:Object(U.jsxs)(M.a,{container:!0,spacing:2,children:[Object(U.jsx)(M.a,{item:!0,xl:1,sm:1,xs:1,children:Object(U.jsx)(L.a,{children:Object(U.jsx)(ae.a,{})})}),Object(U.jsx)(M.a,{item:!0,xl:12,sm:12,xs:12,children:Object(U.jsxs)(M.a,{container:!0,spacing:2,children:[Object(U.jsx)(M.a,{item:!0,xl:12,xs:12,container:!0,justify:"center",children:Object(U.jsx)("table",{className:e.dpTable,children:Object(U.jsx)("tbody",{children:n.table.map((function(e,t){return f(t)}))})})}),Object(U.jsx)(M.a,{item:!0,xl:12,xs:12,container:!0,justify:"flex-end",children:Object(U.jsxs)(L.a,{className:e.buttons,children:[Object(U.jsx)(ee.a,{variant:"contained",color:"secondary",disabled:"INPROCESS"===i.eval,onClick:function(){j(),u()},children:"RESET"}),Object(U.jsx)(ee.a,{variant:"contained",color:"primary",disabled:"INPROCESS"===i.eval||!n.home,onClick:function(){d(),l()},children:"START"})]})})]})})]})})})},se=Object(B.a)((function(){return Object(A.a)({root:{marginBottom:"16px",overflow:"auto"},mainContents:{marginTop:0,marginBottom:0}})})),oe=function(){var e=se(),t=Object(l.b)().enqueueSnackbar;return Object(r.useEffect)((function(){t("\u5730\u56f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u8ff7\u8def\u3092\u5b8c\u6210\u3055\u305b\u3066\u304f\u3060\u3055\u3044\u3002",{variant:"info"})}),[t]),Object(U.jsx)(D.a,{maxWidth:"md",className:e.root,children:Object(U.jsxs)(M.a,{container:!0,spacing:3,className:e.mainContents,children:[Object(U.jsx)(M.a,{item:!0,xl:12,xs:12,children:Object(U.jsx)(J,{})}),Object(U.jsx)(M.a,{item:!0,xl:12,xs:12,children:Object(U.jsx)($,{})}),Object(U.jsx)(M.a,{item:!0,xl:12,xs:12,children:Object(U.jsx)(ce,{})})]})})},pe=a(234),be=a(235),xe=a(232),le=a(241),je=function(){var e=y.actions.toggleTheme,t=Object(s.c)((function(e){return e.theme.isDarkTheme})),a=Object(s.b)();return Object(U.jsx)(xe.a,{control:Object(U.jsx)(le.a,{checked:t,color:"default",inputProps:{"aria-label":"theme-switch"},onClick:function(){return a(e())}}),label:t?"\ud83c\udf1d":"\ud83c\udf1e"})},ue=Object(B.a)((function(e){return Object(A.a)({root:{flexGrow:1,marginBottom:e.spacing(2)},title:{marginLeft:e.spacing(1),marginRight:e.spacing(4)},menu:{flexGrow:1,display:"flex",justifyContent:"flex-end"}})})),de=function(){var e=ue();return Object(U.jsx)("div",{className:e.root,children:Object(U.jsx)(pe.a,{position:"static",elevation:0,color:"transparent",children:Object(U.jsxs)(be.a,{children:[Object(U.jsx)(ae.a,{}),Object(U.jsx)(F.a,{variant:"h4",className:e.title,children:"DFS Flood-Fill Visualizer"}),Object(U.jsx)("div",{className:e.menu,children:Object(U.jsx)(je,{})})]})})})},ge=a(206),he=a.n(ge),fe=Object(B.a)((function(e){return Object(A.a)({root:{textAlign:"right"},icon:{margin:"8px 16px 16px 0px"},link:{textDecoration:"none",color:e.palette.text.primary,"&:hover":{color:e.palette.secondary.main}}})})),me=function(){var e=fe();return Object(U.jsx)("footer",{className:e.root,children:Object(U.jsx)(L.a,{className:e.icon,children:Object(U.jsx)("a",{href:"https://github.com/yokotani92/dfs-flood-fill-visualizer",className:e.link,children:Object(U.jsx)(he.a,{})})})})},Oe=n.a.createContext({isMobile:!1,isDesktop:!1}),ye=function(){var e=Object(o.a)(Object(p.a)().breakpoints.down("sm")),t=Object(o.a)(Object(p.a)().breakpoints.up("lg")),a=Object(s.c)((function(e){return e.theme.isDarkTheme}))?"dark":"light";return Object(U.jsx)(b.a,{theme:R(a),children:Object(U.jsx)(Oe.Provider,{value:{isMobile:e,isDesktop:t},children:Object(U.jsxs)(l.a,{children:[Object(U.jsx)(x.a,{}),Object(U.jsx)(de,{}),Object(U.jsx)(oe,{}),Object(U.jsx)(me,{})]})})})},ke=function(){return Object(U.jsx)(s.a,{store:v,children:Object(U.jsx)(ye,{})})};c.a.render(Object(U.jsx)(ke,{}),document.getElementById("root"))}},[[238,1,2]]]);
//# sourceMappingURL=main.288c5923.chunk.js.map