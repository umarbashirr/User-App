(this["webpackJsonpuser-app"]=this["webpackJsonpuser-app"]||[]).push([[0],[,,,function(e,t,n){e.exports={backdrop:"ErrorModal_backdrop__2w4l_",modal:"ErrorModal_modal__2dXFl",header:"ErrorModal_header__2VIwI",content:"ErrorModal_content__3JOs9",actions:"ErrorModal_actions__P9mlA"}},,,,,function(e,t,n){e.exports={card:"Card_card__LGDzn"}},function(e,t,n){e.exports={button:"Button_button__1HSUa"}},function(e,t,n){e.exports={input:"AddUser_input__1CRDU"}},function(e,t,n){e.exports={users:"UserList_users__1IVw3"}},,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(7),s=n.n(r),l=(n(17),n(12)),o=n(2),i=n(8),d=n.n(i),u=n(0),j=function(e){return Object(u.jsx)("div",{className:"".concat(d.a.card," ").concat(e.className),children:e.children})},b=n(9),m=n.n(b),O=function(e){return Object(u.jsx)("button",{className:m.a.button,type:e.type,onClick:e.onClick,children:e.children})},h=n(10),x=n.n(h),p=n(3),_=n.n(p),f=function(e){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:_.a.backdrop,onClick:e.closeModal}),Object(u.jsxs)(j,{className:_.a.modal,children:[Object(u.jsx)("header",{className:_.a.header,children:Object(u.jsx)("h2",{children:e.title})}),Object(u.jsx)("div",{className:_.a.content,children:Object(u.jsx)("p",{children:e.message})}),Object(u.jsx)("footer",{className:_.a.actions,children:Object(u.jsx)(O,{onClick:e.closeModal,children:"Okay"})})]})]})},g=function(e){var t=Object(a.useState)(""),n=Object(o.a)(t,2),c=n[0],r=n[1],s=Object(a.useState)(""),l=Object(o.a)(s,2),i=l[0],d=l[1],b=Object(a.useState)(),m=Object(o.a)(b,2),h=m[0],p=m[1];return Object(u.jsxs)(u.Fragment,{children:[h&&Object(u.jsx)(f,{title:h.title,message:h.message,closeModal:function(){p(null)}}),Object(u.jsx)(j,{className:x.a.input,children:Object(u.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),0!==c.trim().length&&0!==i.trim().length)if(+i<1)p({title:"Invalid Input",message:"Please enter a valid age (>0)."});else{var n={id:Math.random().toString(),username:c,age:i};e.onAddUser(n),r(""),d("")}else p({title:"Invalid Input",message:"Please enter a valid name and age (non-empty values)."})},children:[Object(u.jsx)("label",{htmlFor:"username",children:"Username"}),Object(u.jsx)("input",{type:"text",id:"username",onChange:function(e){r(e.target.value)},value:c}),Object(u.jsx)("label",{htmlFor:"age",children:"Age"}),Object(u.jsx)("input",{type:"number",id:"age",onChange:function(e){d(e.target.value)},value:i}),Object(u.jsx)(O,{type:"submit",children:"Add User"})]})})]})},v=n(11),k=n.n(v),M=function(e){return Object(u.jsx)(j,{className:k.a.users,children:Object(u.jsx)("ul",{children:e.users.map((function(e){return Object(u.jsx)("li",{children:"".concat(e.username," (").concat(e.age," Year Old)")},e.id)}))})})};var N=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],c=t[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)(g,{onAddUser:function(e){c((function(t){return[e].concat(Object(l.a)(t))}))}}),Object(u.jsx)(M,{users:n})]})};s.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(N,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.69f3597c.chunk.js.map