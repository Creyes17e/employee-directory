(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{26:function(e,t,a){e.exports=a(58)},31:function(e,t,a){},32:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(17),o=a.n(l),c=(a(31),a(32),a(23));var s=function(){return r.a.createElement("div",{className:"jumbotron text-center",style:{color:"white",backgroundColor:"#052675",borderBottom:"solid",borderBottomColor:"red"}},r.a.createElement("h1",null,"Employee Directory"))},u=a(18),m=a(19),i=a(25),h=a(24),d=a(20),f=a.n(d),p=function(){return f.a.get("https://randomuser.me/api/?results=60&nat=us")};var E=function(e){return r.a.createElement("form",{className:"search offset-5"},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{list:"employees",style:{width:"16rem"},type:"text",className:"form-control",placeholder:"Search",onChange:e.handleInputChange,value:e.value})))},y=a(21),g=a.n(y);var v=function(e){return r.a.createElement("table",{className:"table-striped",style:{marginLeft:"auto",marginRight:"auto"}},r.a.createElement("thead",null,r.a.createElement("tr",{className:"text-center"},r.a.createElement("th",null,"Image"),r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Phone"),r.a.createElement("th",null,"Email"),r.a.createElement("th",null,"DOB"))),r.a.createElement("tbody",{className:"text-center"},e.results.map((function(e){return r.a.createElement("tr",{className:"table",key:e.login.uuid},r.a.createElement("td",null,r.a.createElement("img",{className:"",src:e.picture.thumbnail,alt:"employee-selfie"})),r.a.createElement("td",null,e.name.first+" "+e.name.last),r.a.createElement("td",null,e.cell),r.a.createElement("td",null,e.email),r.a.createElement("td",null,r.a.createElement(g.a,{format:"MM/DD/YYYY"},e.dob.date)))}))))},b=function(e){Object(i.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={search:"",employees:[],filterEmployees:[],order:"descend"},e.handleInputChange=function(t){var a=e.state.employees,n=t.target.value,r=a.filter((function(e){return e.name.first.toLowerCase().indexOf(n.toLowerCase())>-1}));e.setState({filterEmployees:r})},e.searchEmployees=function(){p().then((function(t){return e.setState({filterEmployees:t.data.results,employees:t.data.results})})).catch((function(e){return console.log(e)}))},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;p().then((function(t){return e.setState({employees:t.data.results,filterEmployees:t.data.results})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(E,{handleInputChange:this.handleInputChange,employee:this.state.employees}),r.a.createElement(v,{results:this.state.filterEmployees}))}}]),a}(n.Component);var w=function(){return r.a.createElement(c.a,null,r.a.createElement(s,null),r.a.createElement(b,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(57);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.35dda457.chunk.js.map