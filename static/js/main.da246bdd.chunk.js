(this.webpackJsonpwaynesworld=this.webpackJsonpwaynesworld||[]).push([[0],{11:function(t,e,n){},25:function(t,e,n){},27:function(t,e,n){},34:function(t,e,n){"use strict";n.r(e);var c=n(1),s=n.n(c),r=n(18),a=n.n(r),i=(n(25),n(11),n(0)),o=function(){return Object(i.jsx)("div",{style:{marginLeft:10},children:Object(i.jsx)("h1",{children:" About Page "})})},j=n(8),l=function(t){var e=Object(c.useState)(!1),n=Object(j.a)(e,2),s=n[0],r=n[1];return Object(i.jsxs)("div",{className:"contact-card",children:[Object(i.jsx)("img",{src:t.avatarUrl,alt:""}),Object(i.jsxs)("div",{children:[Object(i.jsxs)("p",{children:["Name: ",t.name]}),Object(i.jsxs)("p",{children:["Email: ",t.email]}),Object(i.jsx)("button",{onClick:function(){return r(!s)},children:"Show Age"}),s&&Object(i.jsxs)("p",{children:["Age: ",t.age]})]})]})},b=(n(27),function(){var t=Object(c.useState)([]),e=Object(j.a)(t,2),n=e[0],s=e[1];return Object(c.useEffect)((function(){fetch("https://randomuser.me/api/?results=5").then((function(t){return t.json()})).then((function(t){console.log(t),s(t.results)}))}),[]),Object(i.jsx)("div",{children:n.map((function(t,e){return Object(i.jsx)(l,{avatarUrl:t.picture.large,name:t.name.title+" "+t.name.first+" "+t.name.last,email:t.email,age:t.dob.age},e)}))})}),u=n(10),h=n.n(u),d=n(13),O=n(5);var x=function(){Object(c.useEffect)((function(){r()}),[]);var t=Object(c.useState)([]),e=Object(j.a)(t,2),n=e[0],s=e[1],r=function(){var t=Object(d.a)(h.a.mark((function t(){var e,n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://fortnite-api.com/v2/cosmetics/br/new");case 2:return e=t.sent,t.next=5,e.json();case 5:n=t.sent,console.log(n.data.items),s(n.data.items);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:"Fortnight - Latest battle royale Cosmetics"}),n.map((function(t){return Object(i.jsx)("h3",{children:Object(i.jsx)(O.b,{to:"/shop/".concat(t.id),children:t.name})},t.id)}))]})};var m=function(t){var e=t.match;Object(c.useEffect)((function(){o(),console.log(e)}),[]);var n=Object(c.useState)({images:{}}),s=Object(j.a)(n,2),r=s[0],a=s[1],o=function(){var t=Object(d.a)(h.a.mark((function t(){var n,c;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://fortnite-api.com/v2/cosmetics/br/".concat(e.params.id));case 2:return n=t.sent,t.next=5,n.json();case 5:c=t.sent,a(c.data),console.log(c);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{children:r.name}),Object(i.jsx)("img",{src:r.images.icon,alt:""}),Object(i.jsx)("br",{}),Object(i.jsx)(O.b,{to:"/shop",children:"Back to List"})]})},p=n.p+"static/media/WaynesWorld.1eb00dd8.png",f=function(){var t={color:"white"};return Object(i.jsxs)("nav",{children:[Object(i.jsx)(O.b,{to:"/waynesworld",children:Object(i.jsx)("img",{src:p,alt:"logo",width:"170"})}),Object(i.jsxs)("ul",{className:"nav-links",children:[Object(i.jsx)(O.b,{style:t,to:"/waynesworld",children:Object(i.jsx)("li",{children:" Home "})}),"|",Object(i.jsx)(O.b,{style:t,to:"/contactslist",children:Object(i.jsx)("li",{children:" Contacts "})}),"|",Object(i.jsx)(O.b,{style:t,to:"/shop",children:Object(i.jsx)("li",{children:" DynamicNav "})}),"|",Object(i.jsx)(O.b,{style:t,to:"/tempcontrol",children:Object(i.jsx)("li",{children:" Temperature "})}),"|",Object(i.jsx)(O.b,{style:t,to:"/about",children:Object(i.jsx)("li",{children:" About "})})]})]})},v=function(){return Object(i.jsx)("div",{style:{marginLeft:10},children:Object(i.jsx)("h1",{children:"Temperature Control Page!"})})},g=n(2),w=function(){return Object(i.jsx)("div",{children:Object(i.jsx)("h1",{children:"Home Page"})})},y=function(){return Object(i.jsx)(O.a,{children:Object(i.jsxs)("div",{children:[Object(i.jsx)(f,{}),Object(i.jsxs)(g.c,{children:[Object(i.jsx)(g.a,{path:"/waynesworld",exact:!0,component:w}),Object(i.jsx)(g.a,{path:"/about",component:o}),Object(i.jsx)(g.a,{path:"/tempcontrol",component:v}),Object(i.jsx)(g.a,{path:"/contactslist",component:b}),Object(i.jsx)(g.a,{path:"/shop",exact:!0,component:x}),Object(i.jsx)(g.a,{path:"/shop/:id",component:m})]})]})})},k=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,35)).then((function(e){var n=e.getCLS,c=e.getFID,s=e.getFCP,r=e.getLCP,a=e.getTTFB;n(t),c(t),s(t),r(t),a(t)}))};a.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(y,{})}),document.getElementById("root")),k()}},[[34,1,2]]]);
//# sourceMappingURL=main.da246bdd.chunk.js.map