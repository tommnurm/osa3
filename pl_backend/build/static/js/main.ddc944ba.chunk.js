(window.webpackJsonppuhelinluettelo=window.webpackJsonppuhelinluettelo||[]).push([[0],{15:function(e,n,t){e.exports=t(40)},39:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var a=t(0),u=t.n(a),c=t(14),o=t.n(c),r=t(2),l=function(e){return u.a.createElement("form",null,u.a.createElement("div",null,"Filter shown with ",u.a.createElement("input",{value:e.newFilter,onChange:e.handleFilterChange})))},i=function(e){return u.a.createElement("form",{onSubmit:e.addName},u.a.createElement("div",null,"name: ",u.a.createElement("input",{value:e.newName,onChange:e.handleNameChange})),u.a.createElement("div",null,"number: ",u.a.createElement("input",{value:e.newNumber,onChange:e.handleNumberChange})),u.a.createElement("div",null,u.a.createElement("button",{type:"submit"},"add")))},m=function(e){return e.personsToShow.map(function(n){return u.a.createElement("div",{key:n.name},n.name," ",n.number," ",u.a.createElement("button",{onClick:function(){return e.removeName(n)}},"delete")," ")})},f=t(3),d=t.n(f);t(36).config();var s="https://radiant-tor-77935.herokuapp.com/api/persons",h=function(){return d.a.get(s).then(function(e){return e.data})},b=h,p=function(e){return d.a.post(s,e).then(function(e){return e.data})},v=function(e){return d.a.delete("".concat(s,"/").concat(e)).then(function(){return h()})},w=function(e,n){return d.a.put("".concat(s,"/").concat(e),n).then(function(){return h()})},E=function(e){var n=e.message,t=e.confirm;return null===n?null:t?u.a.createElement("div",{className:"confirm"},n):u.a.createElement("div",{className:"error"},n)},g=function(){var e=Object(a.useState)([]),n=Object(r.a)(e,2),t=n[0],c=n[1];Object(a.useEffect)(function(){b().then(function(e){c(e)})},[]);var o=Object(a.useState)(""),f=Object(r.a)(o,2),d=f[0],s=f[1],h=Object(a.useState)(""),g=Object(r.a)(h,2),j=g[0],N=g[1],O=Object(a.useState)(""),S=Object(r.a)(O,2),C=S[0],k=S[1],y=Object(a.useState)(!0),T=Object(r.a)(y,2),F=T[0],D=T[1],I=Object(a.useState)(null),J=Object(r.a)(I,2),L=J[0],P=J[1],x=Object(a.useState)(!0),A=Object(r.a)(x,2),B=A[0],R=A[1],q=F?t:t.filter(function(e){return e.name.toLowerCase().includes(C.toLowerCase())}),z=function(e,n){window.confirm("".concat(e," is already added in the Phonebook. Replace the old number with the new one?"))&&b().then(function(t){var a=t.find(function(n){return n.name===e}).id;w(a,{name:e,number:n}).then(function(n){c(n),R(!0),P("Succesfully updated ".concat(e,"'s number.")),setTimeout(function(){P(null)},3e3)})}).catch(function(n){R(!1),P("Information on ".concat(e," has already been removed from server.")),setTimeout(function(){P(null)},3e3),c(t.filter(function(n){return n.name!==e}))})};return u.a.createElement("div",null,u.a.createElement("h2",null,"Phonebook"),u.a.createElement(E,{message:L,confirm:B}),u.a.createElement(l,{newFilter:C,handleFilterChange:function(e){D(""===e.target.value),k(e.target.value)}}),u.a.createElement("h3",null,"Add a new"),u.a.createElement(i,{addName:function(e){e.preventDefault();t.map(function(e){return e.name}).includes(d)?z(d,j):p({name:d,number:j}).then(function(e){c(t.concat(e)),R(!0),P("".concat(d," succesfully added to phonebook.")),setTimeout(function(){P(null)},3e3)}).catch(function(e){c(t),R(!1),P(e.response.data.error),setTimeout(function(){P(null)},3e3)});s(""),N("")},newName:d,handleNameChange:function(e){s(e.target.value)},newNumber:j,handleNumberChange:function(e){N(e.target.value)}}),u.a.createElement("h2",null,"Numbers"),u.a.createElement(m,{personsToShow:q,removeName:function(e){window.confirm("Delete ".concat(e.name,"?"))&&b().then(function(n){var t=n.find(function(n){return n.name===e.name}).id;v(t).then(function(n){c(n),R(!0),P("Succesfully deleted ".concat(e.name," from phonebook.")),setTimeout(function(){P(null)},3e3)})}).catch(function(n){R(!0),P("Succesfully deleted ".concat(e.name," from phonebook.")),setTimeout(function(){P(null)},3e3),c(t.filter(function(n){return n.name!==e.name}))})}}))};t(39);o.a.render(u.a.createElement(g,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.ddc944ba.chunk.js.map