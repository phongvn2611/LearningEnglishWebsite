(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[27],{507:function(e,a,r){"use strict";var t=r(3),o=r(11),c=r(4),n=r(270),l=r(439),i=r(488),s=r(450),d=r(0),u=r(477),m=Object(u.a)((function(){return{root:{backgroundColor:"var(--bg-color-accent)",color:"var(--text-color)",borderRadius:"var(--border-radius)","& .Mui-error .MuiSelect-root":{borderColor:"var(--error-color) !important"}},label:{color:"var(--label-color)",fontSize:"1.5rem"},labelFocus:{color:"var(--secondary-color) !important"},selectRoot:{color:"var(--text-color)",fontSize:"1.6rem",borderRadius:"var(--border-radius) !important",border:"solid 1px var(--border-color)",backgroundColor:"var(--bg-color-accent) !important"},selectIcon:{color:"var(--label-color)"},selectMenu:{backgroundColor:"var(--bg-color-accent)",maxHeight:"25rem","& .MuiMenuItem-root":{fontSize:"1.5rem",padding:"1rem 1.6rem","&:hover, &:active, &.Mui-selected":{backgroundColor:"var(--hover-color)"}}}}})),b=r(2),p=["label","options","className","error","resetFlag","index","onChange"];function v(e){var a,r=e.label,u=e.options,v=e.className,j=e.error,h=e.resetFlag,f=e.index,g=e.onChange,x=Object(c.a)(e,p),O=Object(d.useState)(null===(a=u[f])||void 0===a?void 0:a.value),N=Object(o.a)(O,2),S=N[0],y=N[1],w=m();return Object(d.useEffect)((function(){var e;h&&y(null===(e=u[0])||void 0===e?void 0:e.value)}),[h]),Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(n.a,{className:"".concat(w.root," ").concat(v),variant:"filled",children:[Object(b.jsx)(l.a,{classes:{root:w.label,focused:w.labelFocus},id:r,children:r}),Object(b.jsx)(s.a,Object(t.a)(Object(t.a)({classes:{root:w.selectRoot,icon:w.selectIcon},MenuProps:{classes:{paper:w.selectMenu}},disableUnderline:!0,error:j,labelId:r,label:r,value:S,onChange:function(e){y(e.target.value),g(e)}},x),{},{children:u&&u.map((function(e,a){return Object(b.jsx)(i.a,{value:e.value,children:e.label},a)}))}))]})})}v.defaultProps={className:"",label:"Label",options:[],error:!1,resetFlag:0,onChange:function(){}};a.a=v},508:function(e,a,r){"use strict";var t=r(26),o=r(34);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var c=o(r(0)),n=(0,t(r(35)).default)(c.createElement("path",{d:"M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"}),"Save");a.default=n},522:function(e,a,r){"use strict";var t=r(26),o=r(34);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var c=o(r(0)),n=(0,t(r(35)).default)(c.createElement(c.Fragment,null,c.createElement("circle",{cx:"12",cy:"12",r:"3.2"}),c.createElement("path",{d:"M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"})),"PhotoCamera");a.default=n},705:function(e,a,r){"use strict";r.r(a);var t=r(9),o=r(3),c=r(16),n=r.n(c),l=r(27),i=r(11),s=r(177),d=r(492),u=r(175),m=r.n(u),b=r(508),p=r.n(b),v=r(143),j=r(507),h=r(6),f=r(0),g=r(65),x=r(19),O=r(48),N=r(93),S=r(22),y=r(522),w=r.n(y),z=r(28),C=r(63),k=r(477),M=r(66),E=r(2),I=N.b().shape({email:N.d().trim().required("Nh\u1eadp email").email("Email kh\xf4ng h\u1ee3p l\u1ec7"),name:N.d().trim().required("Nh\u1eadp h\u1ecd t\xean").matches(/^[^\d~`!@#$%^&*\(\)\\\|\.,\?\/\-\+\=\_]+$/gi,"H\u1ecd t\xean kh\xf4ng ch\u1ee9a s\u1ed1 v\xe0 k\xfd t\u1ef1 \u0111\u1eb7c bi\u1ec7t")}),_=Object(k.a)((function(){return{wrap:{minHeight:"calc(100vh - 7.2rem)"},root:{backgroundColor:"var(--bg-color-sec)",padding:"1.5rem 2.5rem",borderRadius:"var(--border-radius)",textAlign:"center",boxShadow:"var(--box-shadow)"},avtWrap:{width:"15rem",height:"15rem",position:"relative"},avt:{borderRadius:"50%",border:"2px solid var(--primary-color)"},cameraIconWrap:{position:"absolute",right:0,bottom:0,width:"4.2rem",height:"4.2rem",padding:"1.2rem",backgroundColor:"var(--primary-color)",borderRadius:"50%",cursor:"pointer",border:"solid 5px var(--bg-color-sec)","&:hover, &:active":{opacity:.85}},cameraIcon:{color:"var(--text-color)",fontSize:"2rem"},fileInput:{position:"absolute",width:"100%",height:"100%",top:0,left:0,opacity:0,cursor:"pointer"},name:{fontSize:"2.4rem",lineHeight:1.5,letterSpacing:"0.75px"},role:{fontSize:"1.5rem",fontWeight:400,color:"var(--label-color)",letterSpacing:"0.75px",textTransform:"capitalize"},info:{margin:"2.4rem 0","& p":{lineHeight:2,fontSize:"1.6rem",letterSpacing:"0.75px",color:"var(--text-color)"}},coin:{color:"var(--label-color)",fontWeight:"bold",fontSize:"2rem"},icon:{fontSize:"1.8rem",color:"var(--grey)",cursor:"pointer"},visiblePw:{color:"var(--primary-color)"},visibleConfirmPw:{color:"var(--primary-color)"},editBtn:{padding:"5px 10px"},textError:{marginTop:"4px",color:"var(--error-color)",fontSize:"1.2rem",textAlign:"left"}}}));a.default=function(){var e,a;Object(C.a)("Edit user");var r=_(),c=Object(f.useState)(!1),u=Object(i.a)(c,2),b=u[0],N=u[1],y=Object(S.h)().user_id,k=Object(f.useState)(null),H=Object(i.a)(k,2),P=H[0],F=H[1],R=Object(S.f)(),T=Object(x.b)(),W=Object(g.d)({resolver:Object(s.a)(I)}),B=W.register,L=W.handleSubmit,U=W.formState.errors,V=Object(f.useState)({}),q=Object(i.a)(V,2),A=q[0],D=q[1],J=Object(f.useState)(null),Q=Object(i.a)(J,2),$=Q[0],G=Q[1];Object(f.useEffect)((function(){return Object(l.a)(n.a.mark((function e(){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.a.getUserDetails(y);case 2:a=e.sent,D(a.data.user),F(a.data.user.email),G(a.data.user.avatar);case 6:case"end":return e.stop()}}),e)})))(),function(){}}),[y]);var K=function(e){var a=e.target,r=a.name,c=a.value;D(Object(o.a)(Object(o.a)({},A),{},Object(t.a)({},r,c)))},X=function(){var e=Object(l.a)(n.a.mark((function e(){var a,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,N(!0),a={name:A.name,email:A.email,avatar:$,role:A.roleType,initEmail:P},e.next=5,M.a.editUser(y,a);case 5:(r=e.sent)&&(T(Object(O.b)(r.data.message,"success")),N(!1),R.replace("/admin/user/detail/".concat(y))),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),T(Object(O.b)(e.t0.response.data.message,"error")),N(!1);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return Object(E.jsx)("div",{className:"".concat(r.wrap," container flex-center"),children:Object(E.jsx)("div",{className:r.root,children:Object(E.jsxs)("form",{autoComplete:"off",onSubmit:L(X),children:[Object(E.jsx)("div",{className:"flex-center w-100 h-100",children:Object(E.jsxs)("div",{className:r.avtWrap,children:[Object(E.jsx)("img",{src:$||"https://res.cloudinary.com/phongvn2611/image/upload/v1634179173/english/avatar/avatar-default_tx5lsb.png",alt:"",className:"".concat(r.avt," w-100 h-100")}),Object(E.jsxs)("div",{className:"".concat(r.cameraIconWrap," flex-center"),children:[Object(E.jsx)(w.a,{className:r.cameraIcon}),Object(E.jsx)("input",{type:"file",className:r.fileInput,accept:"image/*",onChange:function(e){e.preventDefault();try{var a=e.target.files[0];a||T(Object(O.b)("No files were uploaded","errors")),a.size/Math.pow(1024,2)>2&&T(Object(O.b)("Size too large","errors")),Object(z.b)(a).then((function(e){G(e)}))}catch(r){throw r}}})]})]})}),Object(E.jsxs)("div",{className:"flex-col mt-10",children:[Object(E.jsx)(v.a,{label:"Email",size:"small",placeholder:"Nh\u1eadp email",value:A.email?A.email:"",error:Boolean(U.email),inputProps:Object(o.a)({name:"email",autoFocus:!0},B("email")),onChange:K}),U.email&&Object(E.jsx)("p",{className:"text-error",children:null===(e=U.email)||void 0===e?void 0:e.message}),Object(E.jsx)(v.a,{label:"H\u1ecd t\xean",size:"small",placeholder:"Nh\u1eadp h\u1ecd t\xean",className:"mt-10",value:A.name?A.name:"",error:Boolean(U.name),inputProps:Object(o.a)({name:"name"},B("name")),onChange:K}),U.name&&Object(E.jsx)("p",{className:"text-error",children:null===(a=U.name)||void 0===a?void 0:a.message}),Object(E.jsx)(j.a,{className:"mt-10",label:"Quy\u1ec1n",options:h.d,value:A.roleType?A.roleType:"",inputProps:{name:"roleType"},onChange:K})]}),Object(E.jsxs)("div",{className:"d-flex-center flex-center-col mt-10",children:[Object(E.jsx)(d.a,{className:"".concat(r.editBtn," _btn _btn-outlined-accent mb-4 w-100"),onClick:function(){return R.replace("/admin/user/detail/".concat(y))},children:"Quay l\u1ea1i"}),Object(E.jsx)(d.a,{type:"submit",className:"".concat(r.editBtn," _btn _btn-primary w-100"),disabled:b,endIcon:b?Object(E.jsx)(m.a,{className:"ani-spin"}):Object(E.jsx)(p.a,{}),variant:"contained",children:"S\u1eeda"})]})]})})})}}}]);
//# sourceMappingURL=27.a2351c03.chunk.js.map