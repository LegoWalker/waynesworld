(this.webpackJsonpwaynesworld=this.webpackJsonpwaynesworld||[]).push([[0],{12:function(e,t,n){},26:function(e,t,n){},28:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var s=n(1),c=n.n(s),a=n(19),r=n.n(a),i=(n(26),n(12),n(0)),o=function(){return Object(i.jsx)("div",{style:{marginLeft:10},children:Object(i.jsx)("h1",{children:" About Page "})})},l=n(3),j=function(e){var t=Object(s.useState)(!1),n=Object(l.a)(t,2),c=n[0],a=n[1];return Object(i.jsxs)("div",{className:"contact-card",children:[Object(i.jsx)("img",{src:e.avatarUrl,alt:""}),Object(i.jsxs)("div",{children:[Object(i.jsxs)("p",{children:["Name: ",e.name]}),Object(i.jsxs)("p",{children:["Email: ",e.email]}),Object(i.jsx)("button",{onClick:function(){return a(!c)},children:"Show Age"}),c&&Object(i.jsxs)("p",{children:["Age: ",e.age]})]})]})},b=(n(28),function(){var e=Object(s.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1];return Object(s.useEffect)((function(){fetch("https://randomuser.me/api/?results=5").then((function(e){return e.json()})).then((function(e){console.log(e),c(e.results)}))}),[]),Object(i.jsx)("div",{children:n.map((function(e,t){return Object(i.jsx)(j,{avatarUrl:e.picture.large,name:e.name.title+" "+e.name.first+" "+e.name.last,email:e.email,age:e.dob.age},t)}))})}),u=n(11),d=n.n(u),m=n(14),x=n(5);var O=function(){Object(s.useEffect)((function(){a()}),[]);var e=Object(s.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1],a=function(){var e=Object(m.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://fortnite-api.com/v2/cosmetics/br/new");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,console.log(n.data.items),c(n.data.items);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.jsxs)("div",{style:{textAlign:"center"},children:[Object(i.jsx)("h2",{children:"Fortnight - Latest battle royale Cosmetics"}),n.map((function(e){return Object(i.jsx)("h3",{children:Object(i.jsx)(x.b,{to:"/shop/".concat(e.id),children:e.name})},e.id)}))]})},h=n(10);n(35);function f(){var e=Object(s.useState)({firstName:"",lastName:"",email:""}),t=Object(l.a)(e,2),n=t[0],c=t[1],a=Object(s.useState)(!1),r=Object(l.a)(a,2),o=r[0],j=r[1],b=Object(s.useState)(!1),u=Object(l.a)(b,2),d=u[0],m=u[1];return Object(i.jsx)("div",{className:"form-body",children:Object(i.jsxs)("div",{className:"form-container",children:[Object(i.jsxs)("form",{className:"register-form",onSubmit:function(e){e.preventDefault(),n.firstName&&n.lastName&&n.email&&m(!0),j(!0)},children:[o&&d?Object(i.jsx)("div",{className:"success-message",children:"Success! Thank you for registering"}):null,Object(i.jsx)("input",{onChange:function(e){c(Object(h.a)(Object(h.a)({},n),{},{firstName:e.target.value}))},value:n.firstName,id:"first-name",className:"form-field",type:"text",placeholder:"First Name",name:"firstName"}),o&&!n.firstName?Object(i.jsx)("span",{id:"first-name-error",className:"form-span",children:"Please enter a first name"}):null,Object(i.jsx)("input",{onChange:function(e){c(Object(h.a)(Object(h.a)({},n),{},{lastName:e.target.value}))},value:n.lastName,id:"last-name",className:"form-field",type:"text",placeholder:"Last Name",name:"lastName"}),o&&!n.lastName?Object(i.jsx)("span",{id:"last-name-error",className:"form-span",children:"Please enter a last name"}):null,Object(i.jsx)("input",{onChange:function(e){c(Object(h.a)(Object(h.a)({},n),{},{email:e.target.value}))},value:n.email,id:"email",className:"form-field",type:"text",placeholder:"Email",name:"email"}),o&&!n.email?Object(i.jsx)("span",{id:"email-error",className:"form-span",children:"Please enter an email address"}):null,Object(i.jsx)("button",{className:"form-field form-button",type:"submit",children:"Register"})]}),Object(i.jsx)("br",{}),Object(i.jsxs)("div",{style:{background:"silver"},children:["Current Stored Values:",Object(i.jsx)("br",{})," First Name: ",Object(i.jsx)("b",{children:n.firstName}),Object(i.jsx)("br",{})," Last Name: ",Object(i.jsx)("b",{children:n.lastName}),Object(i.jsx)("br",{})," Email: ",Object(i.jsx)("b",{children:n.email})]})]})})}var p=function(e){var t=e.match;Object(s.useEffect)((function(){o(),console.log(t)}),[]);var n=Object(s.useState)({images:{}}),c=Object(l.a)(n,2),a=c[0],r=c[1],o=function(){var e=Object(m.a)(d.a.mark((function e(){var n,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://fortnite-api.com/v2/cosmetics/br/".concat(t.params.id));case 2:return n=e.sent,e.next=5,n.json();case 5:s=e.sent,r(s.data),console.log(s);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{children:a.name}),Object(i.jsx)("img",{src:a.images.icon,alt:""}),Object(i.jsx)("br",{}),Object(i.jsx)(x.b,{to:"/shop",children:"Back to List"})]})},v=n.p+"static/media/WaynesWorld.1eb00dd8.png",w=function(){var e={color:"white",textDecoration:"none"};return Object(i.jsxs)("nav",{children:[Object(i.jsx)(x.b,{to:"/waynesworld",children:Object(i.jsx)("img",{src:v,alt:"logo",width:"170"})}),Object(i.jsxs)("ul",{className:"nav-links",children:[Object(i.jsx)(x.b,{style:e,to:"/waynesworld",children:Object(i.jsx)("li",{children:" Home "})}),"|",Object(i.jsx)(x.b,{style:e,to:"/form",children:Object(i.jsx)("li",{children:" Form "})}),"|",Object(i.jsx)(x.b,{style:e,to:"/tempcontrol",children:Object(i.jsx)("li",{children:" Temperature "})}),"|",Object(i.jsx)(x.b,{style:e,to:"/quiz",children:Object(i.jsx)("li",{children:" Quiz "})}),"|",Object(i.jsx)(x.b,{style:e,to:"/contactslist",children:Object(i.jsx)("li",{children:" Contacts "})}),"|",Object(i.jsx)(x.b,{style:e,to:"/shop",children:Object(i.jsx)("li",{children:" DynamicNav "})}),"|",Object(i.jsx)(x.b,{style:e,to:"/about",children:Object(i.jsx)("li",{children:" About "})})]})]})},N=(n(36),function(){var e=Object(s.useState)(12),t=Object(l.a)(e,2),n=t[0],c=t[1],a=Object(s.useState)("cold"),r=Object(l.a)(a,2),o=r[0],j=r[1];return Object(i.jsx)("div",{className:"body-container",children:Object(i.jsxs)("div",{className:"app-container",children:[Object(i.jsx)("div",{className:"temperature-display-container",children:Object(i.jsxs)("div",{className:"temperature-display ".concat(o),children:[n,"\xb0C"]})}),Object(i.jsxs)("div",{className:"button-container",children:[Object(i.jsx)("button",{onClick:function(){return function(){if(25!=n){var e=n+1;j(e>=15?"hot":e<=10?"cold":""),c(e)}}()},className:"round-button",children:"+"}),Object(i.jsx)("button",{onClick:function(){return function(){if(-5!=n){var e=n-1;j(e<=10?"cold":e>=15?"hot":""),c(e)}}()},className:"round-button",children:"-"})]})]})})});n(37);function g(){var e=[{questionText:"What is the capital of France?",answerOptions:[{answerText:"New York",isCorrect:!1},{answerText:"London",isCorrect:!1},{answerText:"Paris",isCorrect:!0},{answerText:"Dublin",isCorrect:!1},{answerText:"Brisbane",isCorrect:!1}]},{questionText:"Who is CEO of Tesla?",answerOptions:[{answerText:"Jeff Bezos",isCorrect:!1},{answerText:"Elon Musk",isCorrect:!0},{answerText:"Bill Gates",isCorrect:!1},{answerText:"Tony Stark",isCorrect:!1}]},{questionText:"The iPhone was created by which company?",answerOptions:[{answerText:"Apple",isCorrect:!0},{answerText:"Intel",isCorrect:!1},{answerText:"Amazon",isCorrect:!1},{answerText:"Microsoft",isCorrect:!1}]},{questionText:"How many Harry Potter books are there?",answerOptions:[{answerText:"1",isCorrect:!1},{answerText:"4",isCorrect:!1},{answerText:"6",isCorrect:!1},{answerText:"7",isCorrect:!0}]},{questionText:"Which country's rugby team is called the 'All Blacks'?",answerOptions:[{answerText:"South Africa",isCorrect:!1},{answerText:"Australia",isCorrect:!1},{answerText:"New Zealand",isCorrect:!0},{answerText:"Argentina",isCorrect:!1},{answerText:"Kenya",isCorrect:!1}]}],t=Object(s.useState)(0),n=Object(l.a)(t,2),c=n[0],a=n[1],r=Object(s.useState)(0),o=Object(l.a)(r,2),j=o[0],b=o[1],u=Object(s.useState)(!1),d=Object(l.a)(u,2),m=d[0],x=d[1];return Object(i.jsx)("div",{className:"quizbody",children:Object(i.jsx)("div",{className:"app",children:m?Object(i.jsxs)("div",{className:"score-section",children:[Object(i.jsx)("br",{}),Object(i.jsxs)("div",{children:["You scored ",c," out of ",e.length]}),Object(i.jsx)("br",{}),Object(i.jsx)("button",{onClick:function(){x(!1),a(0),b(0)},className:"quizbutton",children:"Start Again"})]}):Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{className:"question-section",children:[Object(i.jsxs)("div",{className:"question-count",children:[Object(i.jsxs)("span",{children:["Question ",j+1]}),"/",e.length]}),Object(i.jsx)("div",{className:"question-text",children:e[j].questionText})]}),Object(i.jsx)("div",{className:"answer-section",children:e[j].answerOptions.map((function(t){return Object(i.jsx)("button",{onClick:function(){return function(t){!0===t&&a(c+1);var n=j+1;n<e.length?b(n):x(!0)}(t.isCorrect)},className:"quizbutton",children:t.answerText})}))})]})})})}var y=n(2),C=function(){return Object(i.jsx)("div",{children:Object(i.jsx)("h1",{children:"Home Page"})})},T=function(){return Object(i.jsx)(x.a,{children:Object(i.jsxs)("div",{children:[Object(i.jsx)(w,{}),Object(i.jsxs)(y.c,{children:[Object(i.jsx)(y.a,{path:"/waynesworld",exact:!0,component:C}),Object(i.jsx)(y.a,{path:"/about",component:o}),Object(i.jsx)(y.a,{path:"/tempcontrol",component:N}),Object(i.jsx)(y.a,{path:"/quiz",component:g}),Object(i.jsx)(y.a,{path:"/contactslist",component:b}),Object(i.jsx)(y.a,{path:"/shop",exact:!0,component:O}),Object(i.jsx)(y.a,{path:"/shop/:id",component:p}),Object(i.jsx)(y.a,{path:"/form",component:f})]})]})})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,39)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),s(e),c(e),a(e),r(e)}))};r.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(T,{})}),document.getElementById("root")),S()}},[[38,1,2]]]);
//# sourceMappingURL=main.1f2e7d7d.chunk.js.map