(this["webpackJsonphw-02"]=this["webpackJsonphw-02"]||[]).push([[0],{13:function(e,t,n){e.exports=n(20)},20:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(4),c=n.n(l),i=n(10),u=n(5),m=n(6),o=n(7),s=n(11),d=n(8),h=n(12),b=function(e){var t=e.onHandleFind,n=e.value;return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null,"Find contacts by name"),r.a.createElement("input",{type:"text",value:n,onChange:t,placeholder:"Type to filter contacts...."}))},f=function(e){var t=e.arr,n=e.onDelete;return r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",null,t.length>0&&t.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("span",null,e.name),r.a.createElement("span",null,e.number),r.a.createElement("button",{id:e.id,type:"button",onClick:n},"delete"))}))))},E=function(e){var t=e.showName,n=e.handleSubmit,a=e.name,l=e.number;return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:n},r.a.createElement("label",null,"Name",r.a.createElement("input",{type:"text",name:"name",onChange:t,value:a})),r.a.createElement("label",null,"Number",r.a.createElement("input",{type:"tel",name:"number",onChange:t,value:l})),r.a.createElement("button",{type:"submit"},"Add contact")))},p=function(e){var t=e.title,n=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,t),n)},v=n(9),g=n.n(v),C=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],name:"",number:"",filter:""},n.changeFilter=function(e){n.setState({filter:e.target.value})},n.showName=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(u.a)({},a,r))},n.getId=function(){return g.a.v4()},n.handleSubmit=function(e){e.preventDefault();var t=n.state.contacts.find((function(t){return t.name.toLowerCase()===e.target.name.value.toLowerCase()}));if(t)alert("".concat(t.name," is already in contacts!"));else{var a={name:n.state.name,number:n.state.number,id:n.getId()};n.setState((function(e){return{contacts:[].concat(Object(i.a)(e.contacts),[a]),name:"",number:"",id:""}}))}},n.handleDeleteConctact=function(e){n.setState({contacts:n.state.contacts.filter((function(t){return t.id!==e.target.id}))})},n.handleFindContact=function(e,t){return e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))},n}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state,t=e.contacts,n=e.filter,a=this.handleFindContact(t,n);return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,{title:"Phonebook"},r.a.createElement(E,{showName:this.showName,handleSubmit:this.handleSubmit,name:this.state.name,number:this.state.number})),r.a.createElement(p,{title:"Contacts"},r.a.createElement(b,{onHandleFind:this.changeFilter,value:n}),r.a.createElement(f,{arr:a,onDelete:this.handleDeleteConctact,onHandleFind:this.changeFilter,value:n})))}}]),t}(a.Component);c.a.render(r.a.createElement(C,null),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.2cf051aa.chunk.js.map