(this.webpackJsonpuntitled6=this.webpackJsonpuntitled6||[]).push([[0],{23:function(e,t,n){},24:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(6),s=n.n(r),o=n(5),i=n(3),a=n(2),u=Object(i.b)({name:"table",initialState:{rows:[],columns:[]},reducers:{setRows:function(e,t){e.rows=t.payload},setColumns:function(e,t){e.columns=t.payload}}}),j=u.actions,b=j.setRows,l=j.setColumns,d=u.reducer,f=Object(a.b)({tableReducer:d}),O=Object(i.a)({reducer:f}),m=(n(23),n(8)),p=n(11),h=n.p+"static/media/logo.6ce24c58.svg",x=(n(24),n(1));function g(e){return e>=85?"\u041c\u044b \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u043c \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u0422\u0414":e>=70?"\u0412\u043e\u0437\u043c\u043e\u0436\u043d\u044b \u043b\u0430\u0433\u0438 \u0432 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0438":"\u0412\u043e\u0437\u043c\u043e\u0436\u043d\u044b \u0441\u0438\u043b\u044c\u043d\u044b\u0435 \u043f\u0440\u043e\u0441\u0435\u0434\u0430\u043d\u0438\u044f \u0432 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438"}var y=function(e){var t=e.start,n=e.end-t,c=function(e){return 1300/e*100}(n),r=c>100?100:c;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("p",{children:["Time: ",n," ms"]}),Object(x.jsxs)("p",{children:["\u0421oefficient: ",r.toFixed()," "]}),Object(x.jsxs)("p",{children:["\u0421\u0442\u0430\u0442\u0443\u0441: ",g(r)," "]})]})};var v=function(){var e=Object(o.b)(),t=Object(c.useState)(0),n=Object(p.a)(t,2),r=n[0],s=n[1],i=Object(c.useState)((function(){return performance.now()})),a=Object(p.a)(i,1)[0],u=Object(o.c)((function(e){return e.tableReducer})),j=u.rows,d=u.columns;return Object(c.useEffect)((function(){var t=Object(m.a)(Array(1e3).keys()),n=Object(m.a)(Array(100).keys());e(b(t)),e(l(n))}),[]),Object(c.useLayoutEffect)((function(){setTimeout((function(){r>=5||s((function(e){return++e}))}),10)}),[j]),Object(c.useEffect)((function(){if(5!==r&&r>1){var t=Object(m.a)(Array(1e3).keys()).filter((function(e){return e%(5-r)!==0}));e(b(t))}}),[r]),Object(x.jsxs)("div",{className:"App",children:[Object(x.jsxs)("header",{className:"App-header",children:[Object(x.jsx)("img",{src:h,className:"App-logo",alt:"logo"}),5===r&&Object(x.jsx)(y,{start:a,end:performance.now()})]}),Object(x.jsx)("section",{children:Object(x.jsx)("table",{children:Object(x.jsx)("tbody",{children:j.map((function(e){return Object(x.jsx)("tr",{children:d.map((function(e){return Object(x.jsx)("td",{children:e},e)}))},e)}))})})})]})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,27)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),s(e),o(e)}))};s.a.render(Object(x.jsx)(o.a,{store:O,children:Object(x.jsx)(v,{})}),document.getElementById("root")),w()}},[[26,1,2]]]);
//# sourceMappingURL=main.f1ade8c1.chunk.js.map