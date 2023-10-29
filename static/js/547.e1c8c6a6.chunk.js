"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[547],{1445:function(n,e,t){t.d(e,{Gh:function(){return u},MM:function(){return s},W2:function(){return p},WL:function(){return x}});var i,o,r,a,c,d=t(168),l=t(5867),s=l.ZP.div(i||(i=(0,d.Z)(["\n width: 80%;\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 20px;\n  text-align: right;\n  nav {\n    display: flex;\n    justify-content: flex-end;\n    gap: 25px;\n  }\n  nav a {\n    color: white;\n    text-decoration: none;\n    font-weight: bold;\n  }\n  nav a:hover, \n       :focus {\n        text-decoration: underline\n       }\n\n"]))),x=l.ZP.header(o||(o=(0,d.Z)(["\n background-color: #007bff;\n  color: #fff;\n  text-align: center;\n  padding: 5px;\n"]))),p=l.ZP.div(r||(r=(0,d.Z)(["\ndisplay: flex;\n width: 100%;\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 20px;\n  box-sizing: border-box;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  border-radius: 8px;\n  height: 500px;\n  justify-content: center;\n  align-items: center;\n"]))),u=l.ZP.h1(a||(a=(0,d.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 30px;\n  color: #010101;\n  margin-bottom: 20px;\n"])));l.ZP.p(c||(c=(0,d.Z)(["\n  font-weight: 700;\n  margin: 0;\n"])))},5547:function(n,e,t){t.r(e),t.d(e,{default:function(){return q}});var i,o,r,a,c,d,l,s,x,p,u,f,g,h=t(2791),m=t(9434),b=t(7689),Z=t(1087),j=t(2366),y=t(1396),w=t(168),P=t(5867),v=P.ZP.ul(i||(i=(0,w.Z)(["\n  width: 100%;\n  margin: 0 auto; /* \u0426\u0435\u043d\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0441\u043f\u0438\u0441\u043e\u043a \u043f\u043e \u0433\u043e\u0440\u0438\u0437\u043e\u043d\u0442\u0430\u043b\u0438 */\n  list-style-type: none;\n  padding: 0;\n"]))),k=P.ZP.li(o||(o=(0,w.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 10px;\n  "]))),C=P.ZP.button(r||(r=(0,w.Z)(["\nbackground-color: red;\ncolor: white;\nborder: none;\npadding: 5px 10px;\ncursor: pointer;\n"]))),L=t(3329),z=function(n){var e=n.contacts,t=n.filter,i=n.filtering,o=n.deleting,r=i();return(0,L.jsx)(v,{children:e.length>0?t.length>0?r.map((function(n){return(0,L.jsxs)(k,{children:[n.name,": ",n.number,(0,L.jsx)(C,{type:"Button",id:n.id,onClick:o,children:"Delete"})]},n.id)})):e.map((function(n){return(0,L.jsxs)(k,{children:[n.name,": ",n.number,(0,L.jsx)(C,{type:"button",id:n.id,onClick:o,children:"Delete"})]},n.id)})):(0,L.jsx)(k,{children:"You dont have any contacts yet"})})},E=P.ZP.div(a||(a=(0,w.Z)(["\n  \n  display: flex;\n  justify-content: center;\n  align-items: center;\n "]))),M=P.ZP.label(c||(c=(0,w.Z)(["\n  display: block;\n  margin-bottom: 10px;\n  font-weight: bold;\n  "]))),_=P.ZP.input(d||(d=(0,w.Z)(["\n  width: 300px;\n  padding: 10px;\n  margin-left:5px;\n  margin-bottom: 10px;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n"]))),F=function(n){var e=n.input;return(0,L.jsxs)(E,{children:[(0,L.jsx)(M,{children:"Find contacts by name"}),(0,L.jsx)(_,{name:"name",onChange:e,placeholder:"Name"})]})},I=t(1445),W=P.ZP.div(l||(l=(0,w.Z)(["\ndisplay: flex;\njustify-content: space-between;\npadding:15px;\n"]))),B=P.ZP.p(s||(s=(0,w.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 10px;\n  "]))),D=P.ZP.button(x||(x=(0,w.Z)(["\nbackground-color:#007bff;\ncolor: white;\nborder: none;\npadding: 5px 10px;\ncursor: pointer;\n"]))),N=function(n){var e=n.userEmail,t=n.onLogout;return(0,L.jsxs)(W,{children:[(0,L.jsx)(B,{children:e}),(0,L.jsx)(D,{onClick:t,children:"Logout"})]})},S=P.ZP.div(p||(p=(0,w.Z)(["\nmax-width: 800px;\ndisplay: flex;\nmargin: 0 auto;\npadding: 15px;\nbox-sizing: border-box;\nbox-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\nmax-width: 800px;\nflex-direction: column;\ngap: 20px;\n\n"]))),G=P.ZP.div(u||(u=(0,w.Z)(["\npadding: 15px;\nwidth: 100%;\nborder-radius: 5px;\nbox-sizing: border-box;\n"]))),O=P.ZP.h1(f||(f=(0,w.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 40px;\n  color: #010101;\n  margin-bottom: 20px;\n"]))),Y=P.ZP.h2(g||(g=(0,w.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 40px;\n  color: #010101;\n   margin-bottom: 20px;\n"]))),q=function(n){var e=n.onSubmitContact,t=n.onChangeInput,i=n.contacts,o=n.filter,r=n.filterByName,a=n.deletingContact,c=n.userEmail,d=n.onLogout,l=n.isLoggedIn,s=(0,b.s0)(),x=(0,m.I0)();return(0,h.useEffect)((function(){if(!l)return s("/",{replace:!0});x((0,j.yF)())}),[x,l,s]),(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(I.WL,{children:(0,L.jsx)(I.MM,{children:(0,L.jsx)("nav",{children:(0,L.jsx)(Z.OL,{to:"/contacts",children:"Contacts"})})})}),(0,L.jsx)("section",{children:(0,L.jsxs)(S,{children:[(0,L.jsx)(N,{userEmail:c,onLogout:d}),(0,L.jsxs)(G,{children:[(0,L.jsx)(O,{children:"Phonebook"}),(0,L.jsx)(y.t,{formSubmit:e}),(0,L.jsx)(Y,{children:"Contacts"}),(0,L.jsx)(F,{input:t}),(0,L.jsx)(z,{contacts:i,filter:o,filtering:r,deleting:a})]})]})})]})}}}]);
//# sourceMappingURL=547.e1c8c6a6.chunk.js.map