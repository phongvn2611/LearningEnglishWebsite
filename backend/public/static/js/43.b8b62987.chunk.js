(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[43],{711:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return J}));var c=n(4),a=n(0),r=n(173),s=n(168),o=n(62),i=n(16),l=n.n(i),j=n(27),u=n(11),b=n(513),d=n(660),O=n(28),h=n(175),f=n.n(h),m=n(540),x=n(523),p=n(661),v=n(477),g=Object(v.a)((function(e){return Object(c.a)({},Object(r.b)(e))})),N=Object(v.a)((function(){return{root:{padding:"1.2rem 0",borderBottom:"solid 1px var(--border-color)",cursor:"pointer",transition:"all 0.35s","&:hover, &:active":{borderBottom:"solid 1px var(--accent-color)"}},picture:{width:"5rem",height:"5rem"},word:{fontSize:"1.8rem",fontWeight:500,color:"var(--primary-color)"},type:{color:"var(--label-color)"},phonetic:{fontSize:"1.5rem",margin:"0.8rem 0"},mean:{fontSize:"1.6rem",color:"var(--text-color)",maxWidth:"80%",lineHeight:1.5}}})),S=n(533),w=n(19),k=(n(48),n(6)),y=(n(537),n(22)),C=n(2);function L(e){var t=e._id,n=e.Name,r=e.Image,s=e.Topic,o=e.CreateDate,i=N(),l=Object(O.a)(r||k.b.IMAGE_SRC,50,50,!0,!0),j=Object(y.f)();var b=Object(a.useState)({loading:!1,open:!1}),d=Object(u.a)(b,2),h=d[0],f=d[1];Object(w.b)();return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)("div",{className:"".concat(i.root," flex-center-between"),children:[Object(C.jsxs)("div",{className:"w-100 flex-center--ver",onClick:function(){return e=t,void j.push("/admin/quiz/details/".concat(e));var e},children:[Object(C.jsx)("img",{className:i.picture,src:l,alt:""}),Object(C.jsxs)("div",{className:"ml-8 flex-grow-1",children:[Object(C.jsx)("h3",{className:i.word,children:n}),Object(C.jsxs)("p",{className:"".concat(i.phonetic," phonetic"),children:[" Topic: ",s," "]}),Object(C.jsxs)("p",{className:i.mean,children:["Create Date: ",o]})]})]}),Object(C.jsx)("div",{className:"flex-center--ver"})]}),h.open&&Object(C.jsx)(S.a,Object(c.a)(Object(c.a)({},h),{},{onClose:function(){return f({open:!1,loading:!1})}}))]})}L.defaultProps={onShowDetail:function(){}};var W=L,F=n(180),A=n.n(F),I=n(662);function T(e){var t=e.classNameIcon,n=e.onChoose,c=Object(a.useState)(!1),r=Object(u.a)(c,2),s=r[0],o=r[1];return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(A.a,{className:t,onClick:function(){return o(!0)}}),s&&Object(C.jsx)(I.a,{open:s,onCancel:function(){return o(!1)},onChoose:function(e){n(e),o(!1)}})]})}T.defaultProps={onChoose:function(){}};var D=T,P=n(569);var z=function(e){var t=e.className;return Object(C.jsx)("div",{className:t,children:new Array(10).fill(0).map((function(e,t){return Object(C.jsx)(P.a,{animation:"wave",variant:"rect"},t)}))})};function B(e){var t=e.list,n=e.loading,a=e.onLoadData,r=e.more,s=e.isFirstLoad,o=e.onSettingWordPack,i=e.onSortTypeChange,l=e.onSearchWord,j=g();Object(y.f)();return Object(C.jsxs)("div",{className:"".concat(j.root," dyno-container"),children:[Object(C.jsxs)("div",{className:"flex-center-between",children:[Object(C.jsx)("h1",{className:"dyno-title",children:"Qu\u1ea3n l\xfd quiz"}),Object(C.jsxs)("div",{children:[Object(C.jsx)(p.a,{onSelect:i,classNameIcon:"dyno-setting-icon mr-5"}),Object(C.jsx)(D,{onChoose:o,classNameIcon:"dyno-setting-icon"})]})]}),Object(C.jsx)("div",{className:"dyno-break"}),Object(C.jsxs)("div",{className:j.contentWrap,children:[Object(C.jsx)(m.a,{disabled:n,onSearch:l}),Object(C.jsx)("div",{className:"".concat(j.listWrap," w-100"),children:Object(C.jsx)("ul",{id:"dictionaryId",className:"".concat(j.list," flex-col w-100"),children:Object(C.jsx)(C.Fragment,{children:s?Object(C.jsx)(z,{className:j.skeleton}):Object(C.jsx)(C.Fragment,{children:t&&t.length>0?Object(C.jsxs)(C.Fragment,{children:[t.map((function(e,t){return Object(C.jsx)("li",{className:j.listItem,children:Object(C.jsx)(W,Object(c.a)({},e))},t)})),!n&&r&&Object(C.jsx)(x.a,{onTouchAnchor:a,threshold:1,children:Object(C.jsx)("div",{className:"w-100 t-center",children:Object(C.jsx)(f.a,{className:"ani-spin"})})})]}):Object(C.jsx)("h3",{className:"notfound-title h-100 flex-center t-center",children:"No result."})})})})})]})]})}B.defaultProps={list:[],loading:!1,more:!0,isFirstLoad:!0,onLoadData:function(){},onSearchWord:function(){},onSettingWordPack:function(){},onSortTypeChange:function(){}};var R=B;var q=function(){var e=Object(a.useState)(1),t=Object(u.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)("Newest"),s=Object(u.a)(r,2),o=s[0],i=s[1],h=Object(a.useState)((function(){return{topic:"All"}})),f=Object(u.a)(h,2),m=f[0],x=f[1],p=Object(a.useState)(!0),v=Object(u.a)(p,2),g=v[0],N=v[1],S=Object(a.useState)([]),w=Object(u.a)(S,2),k=w[0],y=w[1],L=Object(a.useState)(!0),W=Object(u.a)(L,2),F=W[0],A=W[1],I=Object(a.useState)(!0),T=Object(u.a)(I,2),D=T[0],P=T[1],z=Object(a.useRef)(0),B=Object(a.useRef)([]),q=function(){var e=Object(j.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,""!==t){e.next=5;break}return y(B.current),A(!0),e.abrupt("return");case 5:return e.next=7,b.a.searchListen(t);case 7:200===(n=e.sent).status&&(y(n.data.listens),A(!1)),e.next=13;break;case 11:e.prev=11,e.t0=e.catch(0);case 13:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){var e=!0;return Object(j.a)(l.a.mark((function t(){var n,c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,N(!0),n=null,"All"!==m.topic){t.next=9;break}return t.next=6,b.a.getAllListen(o);case 6:n=t.sent,t.next=12;break;case 9:return t.next=11,b.a.getListenByTopic(m.topic,o);case 11:n=t.sent;case 12:n&&e&&(c=n.data.listens,B.current=c,y(c)),t.next=17;break;case 15:t.prev=15,t.t0=t.catch(0);case 17:return t.prev=17,e&&(N(!1),D&&P(!1)),t.finish(17);case 20:case"end":return t.stop()}}),t,null,[[0,15,17,20]])})))(),function(){return e=!1}}),[n,m,o]),Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(R,{list:k,loading:g,onLoadData:function(){n<z.current?c(n+1):A(!1)},more:F,isFirstLoad:D,onSettingWordPack:function(e){var t=!0;"topic"!==m&&m.topic!==e.topic&&(t=!1),t&&(t=Object(O.d)(m.topic,e.topic)),z.current=0,B.current=[],A(!0),y([]),x(e),c(1)},onSortTypeChange:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Newest";e!==o&&(B.current=[],i(e),c(1),y([]))},onSearchWord:q}),Object(C.jsx)(d.a,{})]})},E=Object(s.a)((function(e){return Object(c.a)({},Object(r.b)(e))}));function J(){Object(o.a)("Listening Admin");E();return Object(C.jsx)("div",{className:"container",children:Object(C.jsx)(q,{})})}}}]);
//# sourceMappingURL=43.b8b62987.chunk.js.map