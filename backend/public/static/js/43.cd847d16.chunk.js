(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[43],{528:function(e,t,a){"use strict";var r=a(26),c=a(35);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=c(a(0)),o=(0,r(a(34)).default)(n.createElement("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");t.default=o},540:function(e,t,a){"use strict";var r=a(26),c=a(35);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=c(a(0)),o=(0,r(a(34)).default)(n.createElement(n.Fragment,null,n.createElement("circle",{cx:"12",cy:"12",r:"3.2"}),n.createElement("path",{d:"M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"})),"PhotoCamera");t.default=o},724:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return y}));var r=a(16),c=a.n(r),n=a(27),o=a(10),s=a(3),i=a(11),l=a(0),d=a(488),m=a(540),p=a.n(m),u=a(145),b=a(19),j=a(503),h=a(147),f=a.n(h),O=a(148),x=a.n(O),v=a(59),w=a(56),g=a(48),k=a(528),N=a.n(k),P=a(29),C=a(1),S=Object(d.a)((function(){return{wrap:{minHeight:"calc(100vh - 7.2rem)"},root:{backgroundColor:"var(--bg-color-sec)",padding:"1.5rem 2.5rem",borderRadius:"var(--border-radius)",textAlign:"center",boxShadow:"var(--box-shadow)"},avtWrap:{width:"15rem",height:"15rem",position:"relative"},avt:{borderRadius:"50%",border:"2px solid var(--primary-color)"},cameraIconWrap:{position:"absolute",right:0,bottom:0,width:"4.2rem",height:"4.2rem",padding:"1.2rem",backgroundColor:"var(--primary-color)",borderRadius:"50%",cursor:"pointer",border:"solid 5px var(--bg-color-sec)","&:hover, &:active":{opacity:.85}},cameraIcon:{color:"var(--text-color)",fontSize:"2rem"},fileInput:{position:"absolute",width:"100%",height:"100%",top:0,left:0,opacity:0,cursor:"pointer"},name:{fontSize:"2.4rem",lineHeight:1.5,letterSpacing:"0.75px"},role:{fontSize:"1.5rem",fontWeight:400,color:"var(--label-color)",letterSpacing:"0.75px",textTransform:"capitalize"},info:{margin:"2.4rem 0","& p":{lineHeight:2,fontSize:"1.6rem",letterSpacing:"0.75px",color:"var(--text-color)"}},coin:{color:"var(--label-color)",fontWeight:"bold",fontSize:"2rem"},icon:{fontSize:"1.8rem",color:"var(--grey)",cursor:"pointer"},visiblePw:{color:"var(--primary-color)"},visibleConfirmPw:{color:"var(--primary-color)"},editBtn:{padding:"5px 10px"},textError:{marginTop:"4px",color:"var(--error-color)",fontSize:"1.2rem",textAlign:"left"}}}));function y(){Object(w.a)("Profile");var e,t=Object(b.b)(),a=S(),r=Object(b.c)((function(e){return e.authReducer})).user,d=Object(l.useState)({name:r.name,password:"",confirmPassword:""}),m=Object(i.a)(d,2),h=m[0],O=m[1],k=Object(l.useState)(!1),y=Object(i.a)(k,2),z=y[0],_=y[1],E=Object(l.useState)(!1),M=Object(i.a)(E,2),H=M[0],I=M[1],A=Object(l.useState)(!1),L=Object(i.a)(A,2),R=L[0],W=L[1],B=Object(l.useState)({name:"",password:"",confirmPassword:""}),T=Object(i.a)(B,2),V=T[0],X=T[1],D=Object(l.useState)(!1),F=Object(i.a)(D,2),J=F[0],U=F[1],q=Object(l.useState)(""),G=Object(i.a)(q,2),K=G[0],Q=G[1],Y=function(e){var t=e.target,a=t.name,r=t.value;O(Object(s.a)(Object(s.a)({},h),{},Object(o.a)({},a,r)))},Z=function(){var e=Object(n.a)(c.a.mark((function e(a){var r,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault(),e.prev=1,(r=a.target.files[0])||t(Object(g.b)("No files were uploaded","error")),r.size/Math.pow(1024,2)>2&&t(Object(g.b)("Size too large","error")),_(URL.createObjectURL(r)),(n=new FormData).append("file",r),Q(n),e.next=14;break;case 11:throw e.prev=11,e.t0=e.catch(1),e.t0;case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}(),$=function(){var a=Object(n.a)(c.a.mark((function a(){var n;return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(""!==h.name){a.next=2;break}return a.abrupt("return",X(Object(s.a)(Object(s.a)({},V),{},{name:"Nh\u1eadp t\xean c\u1ee7a b\u1ea1n",password:"",confirmPassword:""})));case 2:if(a.prev=2,""===K){a.next=7;break}return a.next=6,v.a.updateAvatar(K);case 6:e=a.sent;case 7:return a.next=9,v.a.updateProfile(h.name?h.name:r.name,z?e.data.url:r.avatar);case 9:n=a.sent,t(Object(g.b)(n.data.message,"success")),window.location.reload(),a.next=16;break;case 14:a.prev=14,a.t0=a.catch(2);case 16:case"end":return a.stop()}}),a,null,[[2,14]])})));return function(){return a.apply(this,arguments)}}(),ee=function(){var e=Object(n.a)(c.a.mark((function e(){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(h.password.length<6||h.confirmPassword.length<6)){e.next=2;break}return e.abrupt("return",X(Object(s.a)(Object(s.a)({},V),{},{name:"",password:"M\u1eadt kh\u1ea9u ph\u1ea3i \xedt nh\u1ea5t 6 k\xfd t\u1ef1",confirmPassword:"X\xe1c nh\u1eadn m\u1eadt kh\u1ea9u ph\u1ea3i \xedt nh\u1ea5t 6 k\xfd t\u1ef1"})));case 2:if(h.confirmPassword===h.password){e.next=4;break}return e.abrupt("return",X(Object(s.a)(Object(s.a)({},V),{},{name:"",password:"",confirmPassword:"X\xe1c nh\u1eadn m\u1eadt kh\u1ea9u kh\xf4ng kh\u1edbp"})));case 4:return e.prev=4,e.next=7,v.a.updatePassword(h.password);case 7:(a=e.sent)&&(t(Object(g.b)(a.data.message,"success")),O(Object(s.a)(Object(s.a)({},h),{},{password:"",confirmPassword:""})),window.location.reload()),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(4),t(Object(g.b)(e.t0.response.data.message,"error"));case 14:case"end":return e.stop()}}),e,null,[[4,11]])})));return function(){return e.apply(this,arguments)}}();return Object(C.jsx)("div",{className:"".concat(a.wrap," container flex-center"),children:Object(C.jsxs)("div",{className:a.root,children:[Object(C.jsx)("div",{className:"flex-center w-100 h-100",children:Object(C.jsxs)("div",{className:a.avtWrap,children:[Object(C.jsx)("img",{src:z||r.avatar,alt:"",className:"".concat(a.avt," w-100 h-100")}),J&&Object(C.jsxs)("div",{className:"".concat(a.cameraIconWrap," flex-center"),children:[Object(C.jsx)(p.a,{className:a.cameraIcon}),Object(C.jsx)("input",{type:"file",className:a.fileInput,onChange:Z,accept:"image/*"})]})]})}),J?Object(C.jsxs)("div",{className:"flex-col mt-10",children:[Object(C.jsx)(u.a,{label:"H\u1ecd t\xean",autoComplete:"off",size:"small",error:V.name,defaultValue:r.name,placeholder:"Nh\u1eadp h\u1ecd t\xean",inputProps:{name:"name"},onChange:Y}),""!==V.name&&Object(C.jsx)("p",{className:a.textError,children:V.name}),Object(C.jsx)(u.a,{label:"M\u1eadt kh\u1ea9u",autoComplete:"off",className:"mt-10",size:"small",placeholder:"Nh\u1eadp m\u1eadt kh\u1ea9u",error:V.password,inputProps:{name:"password",type:H?"text":"password"},onChange:Y,endAdornment:H?Object(C.jsx)(f.a,{className:"".concat(a.icon," ").concat(a.visiblePw),onClick:function(){return I(!1)}}):Object(C.jsx)(x.a,{className:a.icon,onClick:function(){return I(!0)}})}),""!==V.password&&Object(C.jsx)("p",{className:a.textError,children:V.password}),Object(C.jsx)(u.a,{label:"X\xe1c nh\u1eadn m\u1eadt kh\u1ea9u",autoComplete:"off",size:"small",className:"mt-10",placeholder:"Nh\u1eadp l\u1ea1i m\u1eadt kh\u1ea9u",error:V.confirmPassword,inputProps:{name:"confirmPassword",type:R?"text":"password"},onChange:Y,endAdornment:R?Object(C.jsx)(f.a,{className:"".concat(a.icon," ").concat(a.visibleConfirmPw),onClick:function(){return W(!1)}}):Object(C.jsx)(x.a,{className:a.icon,onClick:function(){return W(!0)}})}),""!==V.confirmPassword&&Object(C.jsx)("p",{className:a.textError,children:V.confirmPassword})]}):Object(C.jsxs)("div",{className:"mt-10",children:[Object(C.jsx)("h2",{className:a.name,children:r.name}),Object(C.jsx)("h4",{className:a.role,children:r.roleType})]}),Object(C.jsxs)("div",{className:a.info,children:[!J&&Object(C.jsx)("p",{children:r.email}),Object(C.jsxs)("p",{children:["\u0110\xe3 tham gia v\xe0o ",Object(P.f)(r.createdAt)]}),Object(C.jsxs)("p",{children:["S\u1ed1 coin hi\u1ec7n t\u1ea1i: ",Object(C.jsx)("span",{className:a.coin,children:r.coin})]})]}),J?Object(C.jsxs)("div",{className:"d-flex w-100",children:[Object(C.jsx)(j.a,{onClick:function(){return U(!1)},className:"".concat(a.editBtn," _btn _btn-outlined-accent w-50 mr-2"),children:"Hu\u1ef7 b\u1ecf"}),Object(C.jsx)(j.a,{className:"".concat(a.editBtn," _btn _btn-primary w-50"),onClick:function(){(h.name||z)&&$(),h.password&&h.confirmPassword&&ee()},children:"C\u1eadp nh\u1eadt"})]}):Object(C.jsx)(j.a,{onClick:function(){return U(!0)},className:"".concat(a.editBtn," _btn _btn-primary w-100"),startIcon:Object(C.jsx)(N.a,{}),children:"Ch\u1ec9nh s\u1eeda"})]})})}}}]);
//# sourceMappingURL=43.cd847d16.chunk.js.map