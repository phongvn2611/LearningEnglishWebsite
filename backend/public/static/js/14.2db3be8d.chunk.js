(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[14],{519:function(e,t,n){"use strict";var c=n(3),r=n(4),a=n(11),i=n(495),o=n(0),s=n(1),l=["children"];t.a=function(e){var t=Object(o.useState)(!1),n=Object(a.a)(t,2),d=n[0],u=n[1],h=Object(o.useState)(-1),v=Object(a.a)(h,2),b=v[0],m=v[1],p=e.children,j=Object(r.a)(e,l);return Object(o.useEffect)((function(){var e=!0;return document.body.offsetWidth>576?e&&m(!0):e&&m(!1),function(){return e=!1}}),[]),Object(s.jsx)(s.Fragment,{children:-1!==b&&Object(s.jsx)(s.Fragment,{children:b?Object(s.jsx)(i.a,Object(c.a)(Object(c.a)({},j),{},{children:p})):Object(s.jsx)(i.a,Object(c.a)(Object(c.a)({},j),{},{open:d,onClick:function(){return u(!d)},children:p}))})})}},522:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return o}));var c=n.p+"static/media/correct.369c0cd9.mp3",r=n(529),a=function(e){new Audio(e).play()},i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,r=new SpeechSynthesisUtterance;window.speechSynthesis.cancel(),r.lang="en",r.text=e,r.volume=c,r.voice=t,r.rate=n,window.speechSynthesis.speak(r)},o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>2?arguments[2]:void 0,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1e3,l=a>=0&&a<=1?a:1,d=o>=0&&o<=10?o:1,u=new Audio;u.volume=l,u.playbackRate=d,u.src=t?c:r.a,u.play(),setTimeout((function(){i(e,n,d,l)}),s)}},529:function(e,t,n){"use strict";t.a=n.p+"static/media/incorrect.fdd769b0.mp3"},530:function(e,t,n){"use strict";var c=n(11),r=n(0),a=n(19),i=[];t.a=function(){var e=Object(r.useState)(i),t=Object(c.a)(e,2),n=t[0],o=t[1],s=Object(a.c)((function(e){return e.voiceReducer})),l=s.speed,d=s.voiceURI,u=s.volume,h=n.find((function(e){return e.voiceURI===d}));return Object(r.useEffect)((function(){if(!(i.length>0)){var e=setInterval((function(){var t=window.speechSynthesis.getVoices();t.length>0&&(i=t.filter((function(e){return-1!==e.lang.indexOf("en")})),o(t.filter((function(e){return-1!==e.lang.indexOf("en")}))),clearInterval(e))}),50);return function(){e&&clearInterval(e)}}}),[]),{speed:l,volume:u,voice:h}}},543:function(e,t,n){"use strict";var c=n(544),r=n.n(c),a=n(522),i=n(530),o=(n(0),n(1));function s(e){var t=e.className,n=e.type,c=e.text,s=e.audioSrc,l=e.isWrap,d=Object(i.a)(),u=d.voice,h=d.speed,v=d.volume,b=function(){n?Object(a.b)(c,u,h,v):Object(a.a)(s)};return Object(o.jsx)(o.Fragment,{children:l?Object(o.jsx)("div",{onClick:b,children:e.children}):Object(o.jsx)(r.a,{className:"english-speaker ".concat(t),onClick:b})})}s.defaultProps={audioSrc:"",className:"",text:"",type:!0,isWrap:!1},t.a=s},544:function(e,t,n){"use strict";var c=n(26),r=n(35);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(0)),i=(0,c(n(34)).default)(a.createElement("path",{d:"M17 2H7c-1.1 0-2 .9-2 2v16c0 1.1.9 1.99 2 1.99L17 22c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-5 2c1.1 0 2 .9 2 2s-.9 2-2 2c-1.11 0-2-.9-2-2s.89-2 2-2zm0 16c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Speaker");t.default=i},555:function(e,t,n){"use strict";var c=n(28),r=n.n(c),a="/api/highscore",i={putUpdateHighscore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return r.a.put("".concat(a,"/update"),{name:e,score:t})},postScore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return r.a.post("".concat(a,"/post"),{name:e,coin:t})},getLeaderboard:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return r.a.get("".concat(a,"/leaderboard"),{params:{name:e}})}};t.a=i},556:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var c={TOP_COIN:"top-coin",CORRECT_WORD:"correct-word",WORD_MATCH:"word-match",FAST_GAME:"fast-game"}},573:function(e,t,n){"use strict";var c=n(28),r=n.n(c),a="/api/games",i={getWordPackCWG:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"-1",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"-1",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"-1",c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:50;return r.a.get("".concat(a,"/correct-word/pack"),{params:{type:e,level:t,specialty:n,topics:JSON.stringify(c),nQuestion:i}})},getWordPackWordMatch:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"-1",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"-1",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"-1",c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:50;return r.a.get("".concat(a,"/word-match/pack"),{params:{type:e,level:t,specialty:n,topics:JSON.stringify(c),nQuestion:i}})},getWordPackFG:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return r.a.get("".concat(a,"/fast-game/pack"),{params:{topic:e}})}};t.a=i},574:function(e,t,n){"use strict";t.a=n.p+"static/media/win.7b50de9f.mp3"},576:function(e,t,n){"use strict";var c=n(26),r=n(35);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(0)),i=(0,c(n(34)).default)(a.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"}),"Help");t.default=i},577:function(e,t,n){"use strict";var c=n(26),r=n(35);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(0)),i=(0,c(n(34)).default)(a.createElement("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBack");t.default=i},616:function(e,t,n){"use strict";t.a="data:image/png;base64,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"},757:function(e,t,n){"use strict";n.r(t);var c=n(16),r=n.n(c),a=n(12),i=n(27),o=n(11),s=n(573),l=n(527),d=n(0),u=n(19),h=n(48),v=n(3),b=n(576),m=n.n(b),p=n(543),j=n(519),f=n(10),g=n(488),O=Object(g.a)((function(e){var t;return{wrapper:{width:"100vw",minHeight:"100vh",overflow:"hidden"},bg:{zIndex:-1,position:"absolute",backgroundSize:"cover",backgroundPosition:"center center",backgroundRepeat:"no-repeat",opacity:.8},root:{height:"95vh",width:"100%",margin:"auto",backgroundColor:"var(--bg-color-sec)",borderRadius:"16px",boxShadow:"var(--box-shadow)",overflow:"hidden",padding:"24px 36px"},nTotal:{paddingTop:"20px",fontSize:"2rem",letterSpacing:"1.5px",fontWeight:400,color:"var(--label-color)"},title:{padding:"1.6rem",textAlign:"center",position:"relative","& h1":{width:"max-content",margin:"auto",fontWeight:500,color:"var(--title-color)",fontSize:"2.4rem"}},goBackIcon:{position:"absolute",left:"2.4rem",top:"50%",transform:"translateY(-50%)",color:"var(--label-color)",cursor:"pointer"},topics:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(130px,1fr))",gap:"1.6rem",padding:"2.4rem",overflowY:"auto",maxHeight:"calc(100% - 9rem)","&::-webkit-scrollbar":{width:"0px !important"}},topicItem:{minHeight:"130px",height:"100%",backgroundColor:"var(--bg-color-accent)",borderRadius:"8px",cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",transition:"all 0.35s","&:hover, &:active":{backgroundColor:"var(--hover-color)"}},topicImg:{width:"5rem",height:"5rem",marginBottom:"12px"},topicTitle:{fontSize:"1.6rem",fontWeight:400},answerList:{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"center"},answerItem:(t={borderRadius:"12px",marginRight:"1.6rem",overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"1.2rem",width:80,height:80,cursor:"pointer","& img":{width:"100%",height:"100%",transition:"all .25s","&:hover, &:active":{transform:"scale(1.2)"}}},Object(f.a)(t,e.breakpoints.up("sm"),{width:120,height:120}),Object(f.a)(t,e.breakpoints.up("md"),{width:180,height:180}),t),timerWrap:{width:"80%",flexBasis:"64px",textAlign:"center",border:"solid 5px var(--grey)",margin:"0 auto 1.2rem",borderRadius:"12px",overflow:"hidden",position:"relative"},timer:{width:"100%",height:"100%",transition:"width 0.5s",backgroundColor:"var(--primary-color)",background:"linear-gradient(90deg, var(--primary-color) 0%, var(--secondary-color) 100%)"},timeStr:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",fontSize:"1.6rem",color:"#000",fontWeight:500,letterSpacing:"1px"},doneTitle:{fontSize:"5.2rem",color:"var(--title-color)",marginBottom:"1.2rem"},doneResult:{fontSize:"2.4rem",color:"var(--text-color)"}}})),x=n(574),w=n(522),k=n(503),S=n(20),y=n(555),A=n(59),T=n(107),C=n(556),N=n(616),W=n(1),z=6e4;function M(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=e.findIndex((function(e){return(null===e||void 0===e?void 0:e.word.toLowerCase())===t.toLowerCase()})),c=[].concat(Object(a.a)(e.slice(0,n)),Object(a.a)(e.slice(n+1)));return(c=c.sort((function(){return Math.random()-.5})).slice(0,8)).push(e[n]),c.sort((function(){return Math.random()-.5}))}function G(e){e.correctFlag,e.wrongFlag;var t=e.onSaveTime,n=e.onTimeout,c=O(),r=Object(d.useState)(z),a=Object(o.a)(r,2),i=a[0],s=a[1],l=Math.round(i/z*100),u=~~(i/6e4),h="0".concat(~~(i/1e3)%60).slice(-2);return Object(d.useEffect)((function(){t(i);var e=setInterval((function(){var c=i-250;if(c<=0)return n(),clearInterval(e),void t(0);s(c)}),250);return function(){e&&clearInterval(e)}}),[i]),Object(W.jsxs)("div",{className:c.timerWrap,children:[Object(W.jsx)("span",{className:c.timeStr,children:"".concat(u,":").concat(h)}),Object(W.jsx)("div",{className:c.timer,style:{width:"".concat(l,"%")}})]})}function I(e){var t=e.score,n=O(),c=Object(S.g)(),a=Object(u.c)((function(e){return e.authReducer})).isAuth,o=Object(u.b)();Object(d.useEffect)((function(){if(a)return Object(i.a)(r.a.mark((function e(){var n,c,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A.a.getUserInfo();case 3:n=e.sent,c=n.data.user.coin,a=c+t,y.a.postScore(C.a.FAST_GAME,t),200===A.a.putUpdateUserCoin(a).status&&o(Object(T.c)(a)),e.next=13;break;case 11:e.prev=11,e.t0=e.catch(0);case 13:case"end":return e.stop()}}),e,null,[[0,11]])})))(),function(){}}),[]),Object(d.useEffect)((function(){Object(w.a)(x.a)}),[]);return Object(W.jsxs)("div",{className:"w-100 h-100 flex-center flex-dir-col",children:[Object(W.jsx)("h2",{className:n.doneTitle,children:"K\u1ebft th\xfac"}),Object(W.jsxs)("div",{className:n.doneResult,children:["\u0110i\u1ec3m c\u1ee7a b\u1ea1n l\xe0: ",t]}),Object(W.jsxs)("div",{className:"mt-10",children:[Object(W.jsx)(k.a,{className:"_btn _btn-outlined-stand mr-5",variant:"outlined",onClick:function(){c.push("/games")},children:"Quay v\u1ec1"}),Object(W.jsx)(k.a,{className:"_btn _btn-primary",onClick:function(){window.location.reload()},children:"Ch\u01a1i l\u1ea1i"})]})]})}var U=function(e){var t=e.list,n=O(),c=Object(d.useRef)(0),r=Object(d.useState)(t[c.current].word),i=Object(o.a)(r,2),s=i[0],l=i[1],u=Object(d.useState)(M(t,s)),h=Object(o.a)(u,2),b=h[0],f=h[1],g=Object(d.useState)(0),x=Object(o.a)(g,2),w=x[0],k=x[1],S=Object(d.useRef)(z),y=Object(d.useState)(!1),A=Object(o.a)(y,2),T=A[0],C=A[1],U=function(){k(w+5*~~(S/1e3)),C(!0)},H=Object(d.useState)({correct:0,wrong:0}),R=Object(o.a)(H,2),F=R[0],L=R[1],Q=function(e,n){e.toLowerCase()===s.toLowerCase()?function(){if(c.current>=t.length-1)U();else{var e=t[c.current+1].word,n=M(t,e);l(e),f(Object(a.a)(n)),c.current++,L(Object(v.a)(Object(v.a)({},F),{},{correct:F.correct+1})),k(w+10)}}():function(e){var t=Object(a.a)(b);delete t[e],f(Object(a.a)(t)),L(Object(v.a)(Object(v.a)({},F),{},{wrong:F.wrong+1})),k(w-5)}(n)};return Object(W.jsx)("div",{className:"d-flex flex-dir-col h-100",children:T?Object(W.jsx)(I,{score:w}):Object(W.jsxs)(W.Fragment,{children:[Object(W.jsxs)("div",{children:[Object(W.jsxs)("div",{className:"english-game-title",children:[Object(W.jsx)("img",{src:N.a,alt:"game photo"}),Object(W.jsxs)("h1",{children:[Object(W.jsx)("span",{children:"Tay nhanh h\u01a1n n\xe3o"}),Object(W.jsx)(j.a,{className:"ml-5 cur-pointer",title:"Ch\u1ecdn h\xecnh \u1ea3nh \u0111\xfang v\u1edbi ngh\u0129a c\u1ee7a t\u1eeb. Ch\u1ecdn sai -".concat(5,"\u0111, \u0111\xfang +").concat(10,"\u0111. \u0110i\u1ec3m s\u1ebd \u0111\u01b0\u1ee3c c\u1ed9ng th\xeam v\u1edbi th\u1eddi gian c\xf2n l\u1ea1i c\u1ee7a b\u1ea1n."),children:Object(W.jsx)(m.a,{})})]})]}),Object(W.jsxs)("p",{className:"".concat(n.nTotal," flex-center"),children:["C\xe2u\xa0",Object(W.jsx)("b",{children:c.current+1}),"\xa0/\xa0",Object(W.jsx)("b",{children:t.length}),"\xa0- \u0110i\u1ec3m:\xa0",Object(W.jsx)("b",{children:w})]}),Object(W.jsx)("div",{className:n.title,children:Object(W.jsxs)("h1",{className:"flex-center",children:[Object(W.jsx)("span",{className:"mr-8",children:s})," ",Object(W.jsx)(p.a,{text:s})]})})]}),Object(W.jsx)("div",{className:"flex-grow-1 ".concat(n.answerList),children:b.map((function(e,t){return e&&e.picture?Object(W.jsx)("div",{className:n.answerItem,onClick:function(){return Q(e.word,t)},children:e.picture&&Object(W.jsx)("img",{src:e.picture})},t):Object(W.jsx)("div",{className:n.answerItem},t)}))}),Object(W.jsx)(G,{correctFlag:F.correct,wrongFlag:F.wrong,onSaveTime:function(e){return S.current=e},onTimeout:U})]})})},H=n(577),R=n.n(H),F=n(5);var L=function(){var e=O(),t=Object(d.useState)(-1),n=Object(o.a)(t,2),c=n[0],v=n[1],b=Object(d.useState)([]),m=Object(o.a)(b,2),p=m[0],j=m[1],f=Object(u.b)(),g=Object(S.g)();Object(d.useEffect)((function(){var e=!0;if(!(c<0))return Object(i.a)(r.a.mark((function t(){var n,i,o;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.a.getWordPackFG(c);case 3:if(200!==(n=t.sent).status||!e){t.next=12;break}if(i=n.data.wordPack,0!==(o=void 0===i?[]:i).length){t.next=11;break}return"Xin l\u1ed7i! Danh s\xe1ch t\u1eeb cho ch\u1ee7 \u0111\u1ec1 n\xe0y hi\u1ec7n t\u1ea1i kh\xf4ng \u0111\u1ee7. Vui l\xf2ng ch\u1ecdn l\u1ea1i !",f(Object(h.b)("Xin l\u1ed7i! Danh s\xe1ch t\u1eeb cho ch\u1ee7 \u0111\u1ec1 n\xe0y hi\u1ec7n t\u1ea1i kh\xf4ng \u0111\u1ee7. Vui l\xf2ng ch\u1ecdn l\u1ea1i !","warning")),j([]),t.abrupt("return");case 11:j(Object(a.a)(o));case 12:t.next=19;break;case 14:t.prev=14,t.t0=t.catch(0),"Xin l\u1ed7i! Danh s\xe1ch t\u1eeb cho ch\u1ee7 \u0111\u1ec1 n\xe0y hi\u1ec7n t\u1ea1i kh\xf4ng \u0111\u1ee7. Vui l\xf2ng ch\u1ecdn l\u1ea1i !",f(Object(h.b)("Xin l\u1ed7i! Danh s\xe1ch t\u1eeb cho ch\u1ee7 \u0111\u1ec1 n\xe0y hi\u1ec7n t\u1ea1i kh\xf4ng \u0111\u1ee7. Vui l\xf2ng ch\u1ecdn l\u1ea1i !","warning")),j([]);case 19:case"end":return t.stop()}}),t,null,[[0,14]])})))(),function(){return e=!1}}),[c]);var x=function(){g.push(F.g.GAMES_HOME)};return Object(W.jsxs)("div",{className:"flex-center ".concat(e.wrapper),children:[Object(W.jsx)("div",{className:"".concat(e.bg," w-100 h-100")}),Object(W.jsx)("div",{className:"container",children:Object(W.jsx)("div",{className:e.root,children:0===p.length?Object(W.jsxs)(W.Fragment,{children:[Object(W.jsxs)("div",{className:e.title,children:[Object(W.jsx)(R.a,{className:e.goBackIcon,onClick:x}),Object(W.jsx)("h1",{children:"Ch\u1ecdn m\u1ed9t ch\u1ee7 \u0111\u1ec1"})]}),Object(W.jsx)("div",{className:e.topics,children:l.a.map((function(t,n){return Object(W.jsxs)("div",{className:e.topicItem,onClick:function(){return v(t.key)},children:[Object(W.jsx)("img",{src:t.icon,className:e.topicImg,alt:t.title}),Object(W.jsx)("h3",{className:e.topicTitle,children:t.title})]},n)}))})]}):Object(W.jsx)(U,{topic:c,list:p})})})]})},Q=n(68),P=n(56);t.default=function(){return Object(P.a)("Game tay nhanh h\u01a1n n\xe3o"),Object(Q.a)(),Object(W.jsx)(L,{})}}}]);
//# sourceMappingURL=14.2db3be8d.chunk.js.map