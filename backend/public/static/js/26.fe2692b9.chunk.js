(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[26],{513:function(e,t,n){"use strict";var a=n(25),c=n(35);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(0)),o=(0,a(n(34)).default)(r.createElement("path",{d:"M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"}),"Save");t.default=o},519:function(e,t,n){"use strict";var a=n(25),c=n(35);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(0)),o=(0,a(n(34)).default)(r.createElement("path",{d:"M7.11 8.53L5.7 7.11C4.8 8.27 4.24 9.61 4.07 11h2.02c.14-.87.49-1.72 1.02-2.47zM6.09 13H4.07c.17 1.39.72 2.73 1.62 3.89l1.41-1.42c-.52-.75-.87-1.59-1.01-2.47zm1.01 5.32c1.16.9 2.51 1.44 3.9 1.61V17.9c-.87-.15-1.71-.49-2.46-1.03L7.1 18.32zM13 4.07V1L8.45 5.55 13 10V6.09c2.84.48 5 2.94 5 5.91s-2.16 5.43-5 5.91v2.02c3.95-.49 7-3.85 7-7.93s-3.05-7.44-7-7.93z"}),"RotateLeft");t.default=o},520:function(e,t,n){"use strict";var a=n(4),c=n(2),r=n(0),o=(n(8),n(6)),i=n(9),s=[0,1,2,3,4,5,6,7,8,9,10],l=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(e);return"".concat(n/t).concat(String(e).replace(String(n),"")||"px")}var d=r.forwardRef((function(e,t){var n=e.alignContent,i=void 0===n?"stretch":n,s=e.alignItems,l=void 0===s?"stretch":s,u=e.classes,d=e.className,m=e.component,b=void 0===m?"div":m,f=e.container,j=void 0!==f&&f,x=e.direction,v=void 0===x?"row":x,p=e.item,h=void 0!==p&&p,g=e.justify,O=e.justifyContent,w=void 0===O?"flex-start":O,y=e.lg,C=void 0!==y&&y,k=e.md,z=void 0!==k&&k,N=e.sm,S=void 0!==N&&N,M=e.spacing,q=void 0===M?0:M,I=e.wrap,W=void 0===I?"wrap":I,B=e.xl,_=void 0!==B&&B,Q=e.xs,L=void 0!==Q&&Q,P=e.zeroMinWidth,A=void 0!==P&&P,E=Object(a.a)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","justifyContent","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),R=Object(o.a)(u.root,d,j&&[u.container,0!==q&&u["spacing-xs-".concat(String(q))]],h&&u.item,A&&u.zeroMinWidth,"row"!==v&&u["direction-xs-".concat(String(v))],"wrap"!==W&&u["wrap-xs-".concat(String(W))],"stretch"!==l&&u["align-items-xs-".concat(String(l))],"stretch"!==i&&u["align-content-xs-".concat(String(i))],"flex-start"!==(g||w)&&u["justify-content-xs-".concat(String(g||w))],!1!==L&&u["grid-xs-".concat(String(L))],!1!==S&&u["grid-sm-".concat(String(S))],!1!==z&&u["grid-md-".concat(String(z))],!1!==C&&u["grid-lg-".concat(String(C))],!1!==_&&u["grid-xl-".concat(String(_))]);return r.createElement(b,Object(c.a)({className:R,ref:t},E))})),m=Object(i.a)((function(e){return Object(c.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-content-xs-center":{justifyContent:"center"},"justify-content-xs-flex-end":{justifyContent:"flex-end"},"justify-content-xs-space-between":{justifyContent:"space-between"},"justify-content-xs-space-around":{justifyContent:"space-around"},"justify-content-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return s.forEach((function(a){var c=e.spacing(a);0!==c&&(n["spacing-".concat(t,"-").concat(a)]={margin:"-".concat(u(c,2)),width:"calc(100% + ".concat(u(c),")"),"& > $item":{padding:u(c,2)}})})),n}(e,"xs"),e.breakpoints.keys.reduce((function(t,n){return function(e,t,n){var a={};l.forEach((function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var c="".concat(Math.round(e/12*1e8)/1e6,"%");a[t]={flexBasis:c,flexGrow:0,maxWidth:c}}else a[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else a[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?Object(c.a)(e,a):e[t.breakpoints.up(n)]=a}(t,e,n),t}),{}))}),{name:"MuiGrid"})(d);t.a=m},547:function(e,t,n){"use strict";var a=n(25),c=n(35);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(0)),o=(0,a(n(34)).default)(r.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckCircle");t.default=o},607:function(e,t,n){"use strict";var a=n(3),c=n(30),r=n.n(c),o="/api/question",i={getQuestion:function(e,t){return r.a.get("".concat(o,"/get-question-by-id/").concat(e),{headers:{Authorization:t}})},getQuestionByQuiz:function(e,t){return r.a.get("".concat(o,"/get-question-by-quiz/").concat(e))},postQuestion:function(e,t){return r.a.post("".concat(o,"/post-question-by-quiz/").concat(e),Object(a.a)({},t))},putQuestion:function(e,t,n){return r.a.put("".concat(o,"/put-question/").concat(e),t,{headers:{Authorization:n}})},deleteQuestionByQuiz:function(e,t){return r.a.delete("".concat(o,"/delete-question-by-quiz/").concat(e),{headers:{Authorization:t}})},deleteQuestion:function(e,t){return r.a.delete("".concat(o,"/delete-question-by-id/").concat(e),{headers:{Authorization:t}})}};t.a=i},608:function(e,t,n){"use strict";var a=n(25),c=n(35);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(0)),o=(0,a(n(34)).default)(r.createElement("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check");t.default=o},735:function(e,t,n){"use strict";n.r(t);var a=n(16),c=n.n(a),r=n(27),o=n(7),i=n(3),s=n(11),l=n(179),u=n(497),d=n(520),m=n(177),b=n.n(m),f=n(519),j=n.n(f),x=n(513),v=n.n(x),p=n(145),h=n(0),g=n(65),O=n(93),w=n(22),y=n(18),C=n(48),k=n(608),z=n.n(k),N=n(62),S=n(547),M=n.n(S),q=n(482),I=n(607),W=n(1),B=O.b().shape({content:O.d().trim().required("Input value"),answer1:O.d().trim().required("Input value"),answer2:O.d().trim().required("Input value"),answer3:O.d().trim().required("Input value")}),_=Object(q.a)((function(){return{container:{margin:"3.2rem 0"},root:{padding:"2.8rem 3.6rem",boxShadow:"var(--box-shadow)",borderRadius:"var(--border-radius)",backgroundColor:"var(--bg-color-sec)"},title:{color:"var(--title-color)",textTransform:"capitalize",fontSize:"2.8rem",marginBottom:"1.2rem"},grid:{marginTop:"2.4rem",marginBottom:"2.4rem"},tooltipIcon:{fontSize:"1.6rem",color:"var(--label-color)"},btn:{marginLeft:"1rem",textTransform:"none",minWidth:"14rem"},btnReset:{borderColor:"var(--accent-color) !important",color:"var(--accent-color) !important","&:hover, &:active":{filter:"brightness(0.85)"}},sentenceInput:{minHeight:"8rem"}}}));t.default=function(){var e,t,n,a,m=_();Object(N.a)("Create quiz");var f=Object(g.d)({resolver:Object(l.a)(B)}),x=f.register,O=f.handleSubmit,k=f.formState.errors,S=Object(h.useState)(!1),q=Object(s.a)(S,2),Q=q[0],L=q[1],P=Object(y.b)(),A=Object(w.f)(),E=Object(h.useState)({content:"",answer1:"",answer2:"",answer3:"",check:[!1,!1,!1]}),R=Object(s.a)(E,2),V=R[0],G=R[1],H=Object(h.useState)(-1),T=Object(s.a)(H,2),D=T[0],J=T[1],F=Object(w.h)(),$=F.id,K=F.quiz_id,U=function(e){var t=e.target,n=t.name,a=t.value;G(Object(i.a)(Object(i.a)({},V),{},Object(o.a)({},n,a)))},X=function(e){var t=Object(i.a)({},V);V.check.every((function(e){return!1===e}))?(t.check[D]=!0,G(t)):(t.check=t.check.fill(!1),t.check[D]=!0,G(t))},Y=function(){var e=Object(i.a)({},V);e.check[D]=!1,G(e)},Z=function(){var e=Object(r.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,L(!0),!function(e){return e.every((function(e){return!1===e}))}(V.check)){e.next=8;break}P(Object(C.b)("Please check the correct answer","error")),L(!1),e.next=13;break;case 8:return t={Content:V.content,Answers:[{content:V.answer1,isCorrect:V.check[0]},{content:V.answer2,isCorrect:V.check[1]},{content:V.answer3,isCorrect:V.check[2]}]},e.next=11,I.a.postQuestion(K,t);case 11:e.sent&&(P(Object(C.b)("Create question successfully","success")),L(!1),A.replace("/admin/quiz/details/".concat($)));case 13:e.next=19;break;case 15:e.prev=15,e.t0=e.catch(0),P(Object(C.b)(e.t0.response.data.message,"error")),L(!1);case 19:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(){return e.apply(this,arguments)}}();return Object(W.jsx)("div",{className:"container",children:Object(W.jsx)("div",{className:m.container,children:Object(W.jsx)("div",{className:"ani-fade",children:Object(W.jsxs)("div",{children:[Object(W.jsx)("h1",{className:m.title,children:"Th\xeam c\xe2u h\u1ecfi"}),Object(W.jsx)("div",{className:"dyno-break"}),Object(W.jsxs)("form",{onSubmit:O(Z),autoComplete:"off",children:[Object(W.jsxs)(d.a,{className:m.grid,container:!0,spacing:3,children:[Object(W.jsxs)(d.a,{item:!0,xs:12,children:[Object(W.jsx)(p.a,{className:"w-100",label:"C\xe2u h\u1ecfi",error:Boolean(k.content),inputProps:Object(i.a)({name:"content"},x("content")),onChange:U}),k.Content&&Object(W.jsx)("p",{className:"text-error",children:null===(e=k.content)||void 0===e?void 0:e.message})]}),Object(W.jsxs)(d.a,{item:!0,xs:12,md:4,children:[Object(W.jsx)(p.a,{className:"w-100",label:"\u0110\xe1p \xe1n th\u1ee9 nh\u1ea5t",onChange:U,error:Boolean(k.answer1),inputProps:Object(i.a)({name:"answer1"},x("answer1")),endAdornment:!1===V.check[0]?Object(W.jsx)(z.a,{className:"dyno-setting-icon",onMouseOver:function(){return J(0)},onClick:X}):Object(W.jsx)(M.a,{className:"dyno-setting-icon",onMouseOver:function(){return J(0)},onClick:Y})}),k.answer1&&Object(W.jsx)("p",{className:"text-error",children:null===(t=k.answer1)||void 0===t?void 0:t.message})]}),Object(W.jsxs)(d.a,{item:!0,xs:12,md:4,children:[Object(W.jsx)(p.a,{className:"w-100",label:"\u0110\xe1p \xe1n th\u1ee9 hai",onChange:U,error:Boolean(k.answer2),inputProps:Object(i.a)({name:"answer2"},x("answer2")),endAdornment:!1===V.check[1]?Object(W.jsx)(z.a,{className:"dyno-setting-icon",onMouseOver:function(){return J(1)},onClick:X}):Object(W.jsx)(M.a,{className:"dyno-setting-icon",onMouseOver:function(){return J(1)},onClick:Y})}),k.answer2&&Object(W.jsx)("p",{className:"text-error",children:null===(n=k.answer2)||void 0===n?void 0:n.message})]}),Object(W.jsxs)(d.a,{item:!0,xs:12,md:4,children:[Object(W.jsx)(p.a,{className:"w-100",label:"\u0110\xe1p \xe1n th\u1ee9 ba",onChange:U,error:Boolean(k.answer3),inputProps:Object(i.a)({name:"answer3"},x("answer3")),endAdornment:!1===V.check[2]?Object(W.jsx)(z.a,{className:"dyno-setting-icon",onMouseOver:function(){return J(2)},onClick:X}):Object(W.jsx)(M.a,{className:"dyno-setting-icon",onMouseOver:function(){return J(2)},onClick:Y})}),k.answer3&&Object(W.jsx)("p",{className:"text-error",children:null===(a=k.answer3)||void 0===a?void 0:a.message})]})]}),Object(W.jsx)("div",{className:"dyno-break"}),Object(W.jsxs)("div",{className:"d-flex flex-end jus-content-end pt-5 w-100",children:[Object(W.jsx)(u.a,{className:"".concat(m.btn," ").concat(m.btnReset),color:"secondary",endIcon:Object(W.jsx)(j.a,{}),variant:"outlined",disabled:Q,onClick:function(){return A.push("/admin/quiz")},children:"Quay l\u1ea1i"}),Object(W.jsx)(u.a,{type:"submit",className:"".concat(m.btn," _btn _btn-primary"),disabled:Q,endIcon:Q?Object(W.jsx)(b.a,{className:"ani-spin"}):Object(W.jsx)(v.a,{}),variant:"contained",children:"Create"})]})]})]})})})})}}}]);
//# sourceMappingURL=26.fe2692b9.chunk.js.map