(this["webpackJsonpreact-pokedex"]=this["webpackJsonpreact-pokedex"]||[]).push([[0],{208:function(e,t,a){},209:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),r=a(29),s=a.n(r),i=(a(101),a(18)),j=a(9),l=a(215),o=a(217),b=a(90),d=a(2);function u(){return Object(d.jsxs)(l.a,{className:"nav",expand:"lg",children:[Object(d.jsx)(l.a.Brand,{className:"brand",children:Object(d.jsxs)(i.c,{to:"/",children:["React Pok\xe9Dex",Object(d.jsx)(b.a,{className:"pokeball"})]})}),Object(d.jsx)(l.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(d.jsx)(l.a.Collapse,{id:"basic-navbar-nav",children:Object(d.jsxs)(o.a,{className:"mr-auto",children:[Object(d.jsx)(o.a.Link,{children:Object(d.jsx)(i.c,{activeStyle:{color:"black"},to:"/",children:"Home"})}),Object(d.jsx)(o.a.Link,{children:Object(d.jsx)(i.c,{activeStyle:{color:"black"},to:"/contact",children:"Contact"})})]})})]})}var h=a(7),x=a.n(h),p=a(10),O=a(11);function m(e){return f.apply(this,arguments)}function f(){return(f=Object(p.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,a){fetch(t).then((function(e){return e.json()})).then((function(t){e(t)}))})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e){return v.apply(this,arguments)}function v(){return(v=Object(p.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,a){fetch(t).then((function(e){return e.json()})).then((function(t){e(t)}))})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var k="https://pokeapi.co/api/v2/pokemon?limit=139";function y(e){var t=e.title;return Object(d.jsx)("h1",{className:"heading",children:t})}var w=a(212),N=a(213),A=a(214),C=a(91),S=a(218),B=a(211),E={normal:"#A4ACAF",fire:"#EE8130",water:"#6390F0",electric:"#F7D02C",grass:"#7AC74C",ice:"#96D9D6",fighting:"#C22E28",poison:"#A33EA1",ground:"#E2BF65",flying:"#3DC7EF",psychic:"#F95587",bug:"#A6B91A",rock:"#A38C21",ghost:"#735797",dragon:"#6F35FC",dark:"#707070",steel:"#9EB7B8",fairy:"#D685AD"};function F(e){var t=e.pokemon,a=e.id;return Object(d.jsx)(C.a,{children:Object(d.jsxs)(S.a,{className:"card",id:a,pokemon:t,children:[Object(d.jsx)(S.a.Img,{className:"card-img",variant:"top",src:t.sprites.front_default,alt:t.name}),Object(d.jsxs)(S.a.Body,{className:"card-body",children:[Object(d.jsx)(S.a.Title,{children:t.name}),Object(d.jsxs)(S.a.Text,{children:[Object(d.jsxs)("p",{className:"pkmn-id",children:["#",t.id]}),t.types.map((function(e){return Object(d.jsx)("p",{className:"pkmn-types",style:{backgroundColor:E[e.type.name]},children:e.type.name})}))]}),Object(d.jsxs)(B.a,{className:"card-btn",children:[" ",Object(d.jsx)(i.b,{to:"".concat(t.id),children:"Details"})]})]})]},a)})}function _(){var e=Object(c.useState)([]),t=Object(O.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(!0),s=Object(O.a)(r,2),i=s[0],j=s[1],l=Object(c.useState)(null),o=Object(O.a)(l,2),b=o[0],u=o[1];Object(c.useEffect)((function(){function e(){return(e=Object(p.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(k);case 3:if(!e.sent.ok){e.next=12;break}return e.next=7,m(k);case 7:return t=e.sent,e.next=10,h(t.results);case 10:e.next=13;break;case 12:u("An error occurred: Having trouble catching 'em all");case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),u(e.t0.toString());case 18:return e.prev=18,j(!1),e.finish(18);case 21:case"end":return e.stop()}}),e,null,[[0,15,18,21]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var h=function(){var e=Object(p.a)(x.a.mark((function e(t){var a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(t.map(function(){var e=Object(p.a)(x.a.mark((function e(t){var a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(t.url);case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 2:a=e.sent,n(a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return b?Object(d.jsxs)("div",{children:["An error occurred: ",b]}):Object(d.jsx)("div",{children:i?Object(d.jsxs)("div",{className:"loader-box",children:[Object(d.jsx)(y,{title:"Loading"}),Object(d.jsx)(w.a,{className:"loader",animation:"border"})]}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(y,{title:"All 151* First Pokemon"}),Object(d.jsx)("p",{style:{textAlign:"center"},children:"Having trouble with fetching some of the pokemon, wip"}),Object(d.jsx)(N.a,{children:Object(d.jsx)(A.a,{children:a.map((function(e,t){return Object(d.jsx)(F,{pokemon:e},t)}))})})]})})}var D=a(45),L=a(34),P=a(95),I=a(216),q=L.b().shape({email:L.c().required().matches(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,"The email you entered was not valid"),age:L.a("Please enter a valid age").required("Please enter your age").min(10,"Age must be between 10 and 20").max(20,"Age must be between 10 and 20"),website:L.c().matches(/((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,"The url you entered was not valid").required("Please enter your URL")});function T(){var e=Object(D.b)({resolver:Object(P.yupResolver)(q)}),t=e.register,a=e.handleSubmit,c=e.errors;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(y,{title:"Contact"}),Object(d.jsx)(N.a,{children:Object(d.jsxs)(I.a,{onSubmit:a((function(e){console.log(e)})),children:[Object(d.jsxs)(I.a.Group,{children:[Object(d.jsx)(I.a.Label,{children:"Email address"}),Object(d.jsx)(I.a.Control,{ref:t({required:!0}),type:"email",name:"email",placeholder:"e.g: your@email.com"}),c.email&&Object(d.jsx)("span",{className:"error",children:c.email.message})]}),Object(d.jsxs)(I.a.Group,{children:[Object(d.jsx)(I.a.Label,{children:"Age"}),Object(d.jsx)(I.a.Control,{ref:t({required:!0}),name:"age",type:"number",placeholder:"Age must be between 10 and 20"}),c.age&&Object(d.jsx)("span",{className:"error",children:c.age.message})]}),Object(d.jsxs)(I.a.Group,{children:[Object(d.jsx)(I.a.Label,{children:"Website"}),Object(d.jsx)(I.a.Control,{ref:t({required:!0}),name:"website",type:"text",placeholder:"e.g: your.sitename.com"}),c.website&&Object(d.jsx)("span",{className:"error",variant:"danger",children:c.website.message})]}),Object(d.jsx)(B.a,{type:"submit",variant:"secondary",children:"SUBMIT"})]})})]})}var z=a(219),G=a(96);function H(){var e=Object(c.useState)(null),t=Object(O.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(!0),s=Object(O.a)(r,2),l=s[0],o=s[1],b=Object(c.useState)(null),u=Object(O.a)(b,2),h=u[0],m=u[1],f=Object(j.f)(),g=Object(j.g)().id;g||f.push("/");var v="https://pokeapi.co/api/v2/pokemon/"+g;return Object(c.useEffect)((function(){function e(){return(e=Object(p.a)(x.a.mark((function e(){var t,a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(v);case 3:if(!(t=e.sent).ok){e.next=12;break}return e.next=7,t.json();case 7:a=e.sent,console.log(a),n(a),e.next=13;break;case 12:m("Cannot fetch details");case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),m(e.t0.toString());case 18:return e.prev=18,o(!1),e.finish(18);case 21:case"end":return e.stop()}}),e,null,[[0,15,18,21]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[v]),h?Object(d.jsxs)("div",{children:["An error occurred: ",h]}):Object(d.jsx)("div",{children:l?Object(d.jsxs)("div",{className:"loader-box",children:[Object(d.jsx)(y,{title:"Loading"}),Object(d.jsx)(w.a,{className:"loader",animation:"border"})]}):Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(S.a,{className:"detail-card",children:[Object(d.jsx)(y,{title:a.name}),Object(d.jsxs)("div",{className:"img-inner-container",children:[Object(d.jsx)(S.a.Img,{src:a.sprites.front_default,alt:a.name}),Object(d.jsx)(S.a.Img,{src:a.sprites.back_default,alt:a.name})]}),Object(d.jsxs)("div",{className:"img-inner-container",children:[Object(d.jsx)(S.a.Img,{src:a.sprites.front_shiny,alt:a.name}),Object(d.jsx)(S.a.Img,{src:a.sprites.back_shiny,alt:a.name})]}),Object(d.jsxs)(S.a.Body,{className:"detail-body",children:[Object(d.jsx)("h3",{children:"Base Stats:"}),Object(d.jsx)(N.a,{children:Object(d.jsxs)(A.a,{className:"stats-row",children:[Object(d.jsxs)(C.a,{className:"stats-col",sm:!0,children:[Object(d.jsxs)("p",{children:[" ",Object(d.jsx)("strong",{children:"Height: "}),a.height," inches"]}),Object(d.jsxs)("p",{children:[" ",Object(d.jsx)("strong",{children:"Weight: "})," ",a.weight," pounds"]}),Object(d.jsxs)("p",{children:[" ",Object(d.jsx)("strong",{children:"Base Experience: "}),a.base_experience," exp"]})]}),Object(d.jsx)(C.a,{className:"stats-col",sm:!0,children:a.stats.map((function(e){return Object(d.jsxs)("div",{className:"stats-inner",children:[Object(d.jsx)("p",{children:Object(d.jsxs)("strong",{children:[e.stat.name,":"]})}),Object(d.jsx)(z.a,{className:"stat-bar",now:e.base_stat,label:e.base_stat,max:150})]})}))})]})}),Object(d.jsxs)(B.a,{className:"card-btn detail-btn",children:[" ",Object(d.jsxs)(i.b,{to:"/",children:[Object(d.jsx)(G.a,{})," Go Back"]})]})]})]},g)})})}a(208);var R=function(){return Object(d.jsxs)(i.a,{children:[Object(d.jsx)(u,{}),Object(d.jsxs)(j.c,{children:[Object(d.jsx)(j.a,{path:"/",exact:!0,children:Object(d.jsx)(_,{})}),Object(d.jsx)(j.a,{path:"/contact",children:Object(d.jsx)(T,{})}),Object(d.jsx)(j.a,{path:"/:id",children:Object(d.jsx)(H,{})})]})]})};s.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(R,{})}),document.getElementById("root"))}},[[209,1,2]]]);
//# sourceMappingURL=main.26ceb8b6.chunk.js.map