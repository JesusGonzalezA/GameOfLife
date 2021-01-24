(this["webpackJsonpgame-of-life"]=this["webpackJsonpgame-of-life"]||[]).push([[0],{29:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},46:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n(0),a=n.n(r),i=n(12),s=n.n(i),o=n(7),l=n(16),u=n(8),j=function(e,t,n){for(var c=function(e){return JSON.parse(JSON.stringify(JSON.parse(JSON.stringify(e))))}(e),r=0;r<t;r++)for(var a=0;a<n;a++){var i=f(e,r,a);e[r][a]&&(i<2||i>3)?c[r][a]=!1:e[r][a]||3!==i?c[r][a]=e[r][a]:c[r][a]=!0}return c},d=function(e,t,n){try{return!0===e[t][n]?1:0}catch(c){return 0}},f=function(e,t,n){var c=0;return c+=d(e,t-1,n-1),c+=d(e,t-1,n),c+=d(e,t-1,n+1),c+=d(e,t,n-1),c+=d(e,t,n+1),c+=d(e,t+1,n-1),c+=d(e,t+1,n),c+=d(e,t+1,n+1)},b=function(e,t){return Array(e).fill().map((function(){return Array(t).fill(!1)}))},O=function(e,t){return Array.from({length:e},(function(){return Array.from({length:t},(function(){return Math.random()<.25}))}))},h=function(e,t,n){var c=e.map((function(e){return e.slice()}));return c[t][n]=!c[t][n],c},g="[Grid] Randomize",m="[Grid] Reset",x="[Grid] Set grid size",p="[Cell] Switch state",v="[Game] Evolve",_={generation:0,speed:100,cellSize:15,rows:30,cols:50},w=Object(u.a)(Object(u.a)({},_),{},{grid:b(_.rows,_.cols)}),y=Object(l.b)({game:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(null===t||void 0===t?void 0:t.type){case p:return Object(u.a)(Object(u.a)({},e),{},{grid:h(e.grid,t.payload.row,t.payload.col)});case g:return Object(u.a)(Object(u.a)({},e),{},{grid:O(e.rows,e.cols)});case m:return Object(u.a)(Object(u.a)({},e),{},{generation:0,grid:b(e.rows,e.cols)});case v:return Object(u.a)(Object(u.a)({},e),{},{grid:j(e.grid,e.rows,e.cols),generation:e.generation+1});case x:return Object(u.a)(Object(u.a)({},e),{},{cols:t.payload.cols,rows:t.payload.rows,grid:b(t.payload.rows,t.payload.cols)});default:return e}}}),N=Object(l.c)(y,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),k=(n(43),function(){return Object(c.jsxs)("aside",{className:"contact__bar",children:[Object(c.jsx)("a",{id:"contact__linkedin",href:"https://www.linkedin.com/in/jesusgonzalezalvarez/",target:"_blank",rel:"noreferrer",className:"contact__icon fa fa-linkedin",children:" "}),Object(c.jsx)("a",{id:"contact__github",href:"https://github.com/JesusGonzalezA",target:"_blank",rel:"noreferrer",className:"contact__icon fab fa-github",children:" "}),Object(c.jsx)("a",{id:"contact__google",href:"mailto:jesusgranada99@gmail.com?Subject=Hi%20Jes\xfas!",className:"contact__icon fab fa-google",children:" "}),Object(c.jsx)("a",{id:"contact__twitter",href:"https://twitter.com/JesusGonADev",target:"_blank",rel:"noreferrer",className:"contact__icon fa fa-twitter",children:" "})]})}),S=(n(29),a.a.memo((function(e){var t=e.row,n=e.col,r=Object(o.b)(),a=Object(o.c)((function(e){return e.game.grid[t][n]})),i=Object(o.c)((function(e){return e.game})).cellSize;return Object(c.jsx)("div",{className:a?"box on":"box off",style:{width:i+1,height:i+1},onClick:function(){r(function(e,t){return{type:p,payload:{row:e,col:t}}}(t,n))}})}))),z=n(32),G=n(10),E=n(31),J=n(14),I=(n(44),function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.game})).speed,n=Object(r.useState)(null),a=Object(z.a)(n,2),i=a[0],s=a[1],l=function(){null!==i&&(clearInterval(i),s(null))},u=function(){e({type:v})},j=function(){e({type:m}),d()},d=function(){l()};return Object(c.jsxs)("div",{id:"controllers-container",children:[Object(c.jsxs)(G.a,{onClick:function(){null===i&&s(setInterval(u,t))},variant:"success",children:["Play ",Object(c.jsx)("i",{className:"fas fa-play"})]}),Object(c.jsxs)(G.a,{onClick:l,variant:"danger",id:"pause-button",children:["Pause ",Object(c.jsx)("i",{className:"fas fa-pause"})]}),Object(c.jsxs)(G.a,{onClick:function(){u()},variant:"success",children:["Next Generation ",Object(c.jsx)("i",{className:"fas fa-angle-double-right"})]}),Object(c.jsxs)(G.a,{onClick:function(){e({type:g}),d()},variant:"info",children:["Seed ",Object(c.jsx)("i",{className:"fas fa-seedling"})]}),Object(c.jsx)(G.a,{onClick:j,variant:"warning",children:"Reset"}),Object(c.jsxs)(E.a,{variant:"dark",title:"Grid size",onSelect:function(t,n){n.preventDefault();var c,r,a=t.split("x");j(),e((c=Number(a[0]),r=Number(a[1]),{type:x,payload:{cols:c,rows:r}}))},children:[Object(c.jsx)(J.a.Item,{eventKey:"20x10",children:"20x10"}),Object(c.jsx)(J.a.Item,{eventKey:"50x30",children:"50x30"}),Object(c.jsx)(J.a.Item,{eventKey:"60x40",children:"60x40"})]})]})}),C=function(){var e=Object(o.c)((function(e){return e.game})),t=e.cols,n=e.grid,r=t*e.cellSize;return Object(c.jsxs)("div",{className:"mt-5",children:[Object(c.jsx)("div",{children:Object(c.jsx)(I,{})}),Object(c.jsx)("div",{className:"grid",style:{width:r},children:n.map((function(e,t){return e.map((function(e,n){return Object(c.jsx)(S,{row:t,col:n},"".concat(t,"_").concat(n))}))}))})]})},A=(n(46),function(){var e=Object(o.c)((function(e){return e.game})).generation;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:"container text-center",children:[Object(c.jsxs)("h1",{className:"mt-5",children:["The Game of life\xa0",Object(c.jsx)("a",{className:"fa fa-info-circle",id:"info",href:"https://en.wikipedia.org/wiki/The_Game_of_Life",target:"_blank",rel:"noreferrer","aria-hidden":"true",children:" "})]}),Object(c.jsx)("hr",{id:"separator"}),Object(c.jsx)(C,{}),Object(c.jsxs)("h2",{className:"mt-5",children:["Generations: ",e]})]}),Object(c.jsx)(k,{})]})});n(47);s.a.render(Object(c.jsx)(o.a,{store:N,children:Object(c.jsx)(A,{})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.4ee87ca0.chunk.js.map