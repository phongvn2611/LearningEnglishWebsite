(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[20],{546:function(e,t,a){"use strict";var n=a(0),r=n.createContext({});t.a=r},548:function(e,t,a){"use strict";var n=a(29),r=a.n(n),o="/api/ipa",i={getIPA:function(e){return r.a.get("".concat(o,"/get-ipa-by-id/").concat(e))},getIPARelative:function(e,t){return r.a.get("".concat(o,"/get-ipa-relative"),{params:{type:e,phonetic:t}})},getIPAByType:function(e){return r.a.get("".concat(o,"/get-ipa-by-type/").concat(e))},getAllIPA:function(e){return r.a.get("".concat(o,"/get-all-ipa"),{headers:{Authorization:e}})},postIPA:function(e,t){return r.a.post("".concat(o,"/post-ipa"),e,{headers:{Authorization:t}})},putIPA:function(e,t,a){return r.a.put("".concat(o,"/put-ipa/").concat(e),t,{headers:{Authorization:a}})},deleteIPA:function(e,t){return r.a.delete("".concat(o,"/delete-ipa/").concat(e),{headers:{Authorization:t}})}};t.a=i},554:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(188),r=a(190),o=a(83),i=a(189);function c(e){return Object(n.a)(e)||Object(r.a)(e)||Object(o.a)(e)||Object(i.a)()}},556:function(e,t,a){"use strict";var n=a(477);t.a=Object(n.a)((function(){return{groupCollapse:{boxShadow:"var(--box-shadow-2)",backgroundColor:"var(--bg-color-accent)",borderRadius:"var(--border-radius)",border:"none",margin:"2.4rem 0"},arrowIcon:{color:"var(--grey)"},gcTitle:{color:"var(--secondary-color)",fontWeight:500,fontSize:"2rem"},gcDetails:{display:"flex-center"},word:{display:"inline-block",fontSize:"2.4rem",color:"var(--accent-color)",margin:"0.8rem 1rem 0.8rem 0"},relative:{display:"inline-block",fontSize:"2.2rem",fontWeight:500,color:"red",margin:"0.8rem 0rem 0rem 0"},gcDesc:{fontSize:"1.7rem",color:"var(--text-color)",marginLeft:"1.2rem0"},flexboxcontainer:{flexDirection:"row",flexFlow:"auto"},example:{"& b":{fontSize:"1.6rem",textDecoration:"underline"},color:"var(--text-color)",fontSize:"1.6rem"},picture:{width:"50rem",height:"30rem",marginLeft:"15rem"},mouthShapeImg:{width:"12rem",height:"12rem",marginLeft:"1rem"},root:{padding:"1.2rem 0",borderBottom:"solid 1px var(--border-color)",cursor:"pointer",transition:"all 0.35s","&:hover, &:active":{borderBottom:"solid 1px var(--accent-color)"}},mobilelist:{height:"115px"},floatleft:{float:"left",margin:"0 10px 10px 0px",padding:"2px"},title:{display:"inline-block",fontSize:"2.0rem",fontWeight:400,color:"blue",margin:"0.8rem 0rem 0rem 0"},tldetail:{fontSize:"1.5rem",fontWeight:400,color:"black"},textlimit:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",width:"500px"}}}))},667:function(e,t,a){"use strict";var n=a(1),r=a(554),o=a(11),i=a(4),c=a(0),s=(a(64),a(7),a(5)),d=a(485),l=a(167),u=a(8),p=a(546),b=a(67),f=c.forwardRef((function(e,t){var a=e.children,u=e.classes,f=e.className,m=e.defaultExpanded,h=void 0!==m&&m,g=e.disabled,x=void 0!==g&&g,j=e.expanded,v=e.onChange,O=e.square,y=void 0!==O&&O,w=e.TransitionComponent,k=void 0===w?d.a:w,N=e.TransitionProps,C=Object(i.a)(e,["children","classes","className","defaultExpanded","disabled","expanded","onChange","square","TransitionComponent","TransitionProps"]),I=Object(b.a)({controlled:j,default:h,name:"Accordion",state:"expanded"}),A=Object(o.a)(I,2),R=A[0],P=A[1],S=c.useCallback((function(e){P(!R),v&&v(e,!R)}),[R,v,P]),T=c.Children.toArray(a),B=Object(r.a)(T),E=B[0],z=B.slice(1),D=c.useMemo((function(){return{expanded:R,disabled:x,toggle:S}}),[R,x,S]);return c.createElement(l.a,Object(n.a)({className:Object(s.a)(u.root,f,R&&u.expanded,x&&u.disabled,!y&&u.rounded),ref:t,square:y},C),c.createElement(p.a.Provider,{value:D},E),c.createElement(k,Object(n.a)({in:R,timeout:"auto"},N),c.createElement("div",{"aria-labelledby":E.props.id,id:E.props["aria-controls"],role:"region"},z)))}));t.a=Object(u.a)((function(e){var t={duration:e.transitions.duration.shortest};return{root:{position:"relative",transition:e.transitions.create(["margin"],t),"&:before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:e.palette.divider,transition:e.transitions.create(["opacity","background-color"],t)},"&:first-child":{"&:before":{display:"none"}},"&$expanded":{margin:"16px 0","&:first-child":{marginTop:0},"&:last-child":{marginBottom:0},"&:before":{opacity:0}},"&$expanded + &":{"&:before":{display:"none"}},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}},rounded:{borderRadius:0,"&:first-child":{borderTopLeftRadius:e.shape.borderRadius,borderTopRightRadius:e.shape.borderRadius},"&:last-child":{borderBottomLeftRadius:e.shape.borderRadius,borderBottomRightRadius:e.shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}},expanded:{},disabled:{}}}),{name:"MuiAccordion"})(f)},668:function(e,t,a){"use strict";var n=a(1),r=a(4),o=a(0),i=(a(7),a(5)),c=a(169),s=a(478),d=a(8),l=a(546),u=o.forwardRef((function(e,t){var a=e.children,d=e.classes,u=e.className,p=e.expandIcon,b=e.focusVisibleClassName,f=e.IconButtonProps,m=void 0===f?{}:f,h=e.onClick,g=Object(r.a)(e,["children","classes","className","expandIcon","focusVisibleClassName","IconButtonProps","onClick"]),x=o.useContext(l.a),j=x.disabled,v=void 0!==j&&j,O=x.expanded,y=x.toggle;return o.createElement(c.a,Object(n.a)({focusRipple:!1,disableRipple:!0,disabled:v,component:"div","aria-expanded":O,className:Object(i.a)(d.root,u,v&&d.disabled,O&&d.expanded),focusVisibleClassName:Object(i.a)(d.focusVisible,d.focused,b),onClick:function(e){y&&y(e),h&&h(e)},ref:t},g),o.createElement("div",{className:Object(i.a)(d.content,O&&d.expanded)},a),p&&o.createElement(s.a,Object(n.a)({className:Object(i.a)(d.expandIcon,O&&d.expanded),edge:"end",component:"div",tabIndex:null,role:null,"aria-hidden":!0},m),p))}));t.a=Object(d.a)((function(e){var t={duration:e.transitions.duration.shortest};return{root:{display:"flex",minHeight:48,transition:e.transitions.create(["min-height","background-color"],t),padding:e.spacing(0,2),"&:hover:not($disabled)":{cursor:"pointer"},"&$expanded":{minHeight:64},"&$focused, &$focusVisible":{backgroundColor:e.palette.action.focus},"&$disabled":{opacity:e.palette.action.disabledOpacity}},expanded:{},focused:{},focusVisible:{},disabled:{},content:{display:"flex",flexGrow:1,transition:e.transitions.create(["margin"],t),margin:"12px 0","&$expanded":{margin:"20px 0"}},expandIcon:{transform:"rotate(0deg)",transition:e.transitions.create("transform",t),"&:hover":{backgroundColor:"transparent"},"&$expanded":{transform:"rotate(180deg)"}}}}),{name:"MuiAccordionSummary"})(u)},713:function(e,t,a){"use strict";a.r(t);a.p,a.p,a.p;var n=a(16),r=a.n(n),o=a(27),i=a(11),c=a(0),s=a(667),d=a(668),l=a(556),u=a(2);function p(e){var t=e.phoneticData,a=(e.isNoVoice,Object(l.a)());return Object(u.jsx)(s.a,{className:a.groupCollapse,onClick:function(){return e=t._id,void(window.location.href="ipa/details/".concat(e));var e},children:Object(u.jsx)(d.a,{children:Object(u.jsx)("p",{className:a.gcTitle,children:Object(u.jsxs)("b",{children:["/ ",t.Phonetic," /"]})})})})}p.defaultProps={phoneticData:[],isNoVoice:!1};var b=p,f=a(548);var m=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),a=t[0],n=t[1];return Object(c.useEffect)((function(){return Object(o.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.getIPAByType("Consonants");case 3:200===(t=e.sent).status&&n(t.data.ipas),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})))(),function(){}}),[]),console.log(a),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{className:"dyno-title",children:"3. Consonants"}),Object(u.jsx)("h3",{className:"dyno-sub-title"}),a&&a.map((function(e){return Object(u.jsx)(b,{phoneticData:e,isNoVoice:!0})}))]})};var h=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),a=t[0],n=t[1];return Object(c.useEffect)((function(){return Object(o.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.getIPAByType("Diphthongs");case 3:200===(t=e.sent).status&&n(t.data.ipas),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})))(),function(){}}),[]),console.log(a),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{className:"dyno-title",children:"2. Nguy\xean \xe2m \u0111\xf4i (Diphthongs)"}),Object(u.jsx)("h3",{className:"dyno-sub-title"}),a&&a.map((function(e){return Object(u.jsx)(b,{phoneticData:e})}))]})};var g=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),a=t[0],n=t[1];return Object(c.useEffect)((function(){return Object(o.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.getIPAByType("Vowels");case 3:200===(t=e.sent).status&&n(t.data.ipas),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})))(),function(){}}),[]),console.log(a),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{className:"dyno-title",children:"1. Nguy\xean \xe2m \u0111\u01a1n (Vowels)"}),Object(u.jsx)("h3",{className:"dyno-sub-title"}),a&&a.map((function(e){return Object(u.jsx)(b,{phoneticData:e})}))]})},x=a(63),j=a(496);t.default=function(){return Object(x.a)("IPA"),Object(u.jsxs)("div",{className:"container dyno-box",children:[Object(u.jsx)(j.a,{variant:"h4",align:"center",children:"Pronunciation"}),Object(u.jsx)(j.a,{variant:"h6",align:"center",children:"Introduction to The Sounds of English"}),Object(u.jsx)("p",{align:"center",children:Object(u.jsx)("iframe",{src:"https://www.youtube.com/embed/3Wz95t3fKF4?enablejsapi=1",width:"500",height:"300"})}),Object(u.jsx)(j.a,{align:"center",children:"This is the introductory video to our The sounds of English series"}),Object(u.jsx)(g,{}),Object(u.jsx)(h,{}),Object(u.jsx)(m,{})]})}}}]);
//# sourceMappingURL=20.c56695fd.chunk.js.map