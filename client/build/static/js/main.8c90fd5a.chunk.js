(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{36:function(e,t,n){},37:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n.n(s),c=n(30),r=n.n(c),i=(n(36),n(15)),l=n(5),j=n(6),h=n(8),o=n(7),d=(n(37),n(4)),u=n(9),b=n.n(u),x=function(e,t,n){return b.a.post("/api/auth/signup",{username:e,password:t,type:n}).then((function(e){return console.log(e),e.data})).catch((function(e){return e}))},p=function(e,t){return b.a.post("/api/auth/login",{username:e,password:t}).then((function(e){return e.data})).catch((function(e){return e}))},O=n(0);function m(e){var t=function(){b.a.delete("/api/auth/logout").then((function(e){return e.data})).catch((function(e){return e})).then((function(){e.setUser(null)}))};return Object(O.jsx)("nav",{children:Object(O.jsx)("ul",{children:e.user?Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{children:Object(O.jsx)(d.b,{to:"/",onClick:function(){return t()},className:"button",children:"Logout"})})}):Object(O.jsx)(O.Fragment,{})})})}var g=n(14),f=function(e){Object(h.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(l.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={username:"",password:"",type:""},e.handleSubmit=function(t){t.preventDefault();var n=e.state,s=n.username,a=n.password,c=n.type;x(s,a,c).then((function(t){t.message?e.setState({message:t.message,username:"",password:"",type:""}):(e.props.setUser(t),e.props.history.push("/login"))}))},e.handleChange=function(t){var n=t.target,s=n.name,a=n.value;e.setState(Object(g.a)({},s,a))},e}return Object(j.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"Hello future user... Plz, sign up below."}),Object(O.jsx)("div",{style:v,children:Object(O.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:Object(O.jsx)("label",{htmlFor:"username",children:"username:"})}),Object(O.jsx)("td",{children:Object(O.jsx)("input",{type:"text",name:"username",value:this.state.username,onChange:this.handleChange})})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:Object(O.jsx)("label",{htmlFor:"username",children:"password:"})}),Object(O.jsx)("td",{children:Object(O.jsx)("input",{type:"text",name:"password",value:this.state.password,onChange:this.handleChange})})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:Object(O.jsx)("label",{children:" I want to adopt:"})}),Object(O.jsx)("td",{children:Object(O.jsx)("input",{name:"type",type:"checkbox",value:"adopter",checked:this.state.adopter,onChange:this.handleChange})})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:Object(O.jsx)("label",{children:" Offer your animal:"})}),Object(O.jsx)("td",{children:Object(O.jsx)("input",{name:"type",type:"checkbox",value:"provider",checked:this.state.provider,onChange:this.handleChange})})]}),Object(O.jsx)("p",{children:Object(O.jsx)("button",{type:"submit",children:"Create an account"})})]})}),Object(O.jsx)("div",{style:v,children:Object(O.jsxs)("p",{children:["(If you already have an account, plz redirect to ",Object(O.jsx)(d.b,{to:"/login",children:"Log in"}),")"]})})]})}}]),n}(s.Component),v={display:"flex",justifyContent:"center",alignItems:"Center",flexDirection:"Column"},y=function(e){Object(h.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(l.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={username:"",password:""},e.handleSubmit=function(t){t.preventDefault();var n=e.state,s=n.username,a=n.password;p(s,a).then((function(t){t.message?e.setState({message:t.message,username:"",password:"",type:""}):(e.props.setUser(t),"adopter"===t.type&&e.props.history.push("/animals"),"provider"===t.type&&e.props.history.push("/private"))}))},e.handleChange=function(t){var n=t.target,s=n.name,a=n.value;e.setState(Object(g.a)({},s,a))},e}return Object(j.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"Plz, login here... "}),Object(O.jsx)("div",{style:C,children:Object(O.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:Object(O.jsx)("label",{htmlFor:"username",children:"username: "})}),Object(O.jsx)("td",{children:Object(O.jsx)("input",{type:"text",name:"username",value:this.state.username,onChange:this.handleChange})})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:Object(O.jsx)("label",{htmlFor:"username",children:"password:"})}),Object(O.jsx)("td",{children:Object(O.jsx)("input",{type:"text",name:"password",value:this.state.password,onChange:this.handleChange})})]}),Object(O.jsx)("button",{type:"submit",children:"login"})]})}),Object(O.jsx)("div",{style:C,children:Object(O.jsxs)("p",{children:["(Don't have an account yet? Redirect to ",Object(O.jsx)(d.b,{to:"/signup",children:"sign in"}),")"]})})]})}}]),n}(s.Component),C={display:"flex",justifyContent:"center",alignItems:"Center",flexDirection:"Column"},w=n(2),U=function(e){Object(h.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(l.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={imageUrl:"",name:"",species:"",sex:"",age:"",weight:"",description:"",city:"",castrated:""},e.handleSubmit=function(t){t.preventDefault(),console.log(e.state),b.a.post("/api/animals/add",{imageUrl:e.state.imageUrl,name:e.state.name,species:e.state.species,sex:e.state.sex,age:e.state.age,weight:e.state.weight,description:e.state.description,city:e.state.city,castrated:e.state.castrated}).then((function(t){console.log(t.data),e.setState({name:"",species:"",sex:"",description:"",city:"",castrated:""}),e.props.getData()})).catch((function(e){return console.log(e)})),e.props.history.push("/private")},e.handleFileUpload=function(t){var n=new FormData;n.append("imageUrl",t.target.files[0]),b.a.post("api/animals/upload",n).then((function(t){console.log(t.data),e.setState({imageUrl:t.data.secure_url})})).catch((function(e){return console.log(e)}))},e.handleChange=function(t){var n=t.target,s=n.name,a=n.value;e.setState(Object(g.a)({},s,a))},e}return Object(j.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"Provide characteristics ..."}),Object(O.jsx)("div",{style:S,children:Object(O.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(O.jsx)("input",{type:"file",name:"imageUrl",onChange:this.handleFileUpload}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:Object(O.jsx)("label",{htmlFor:"name",children:"name:"})}),Object(O.jsx)("td",{children:Object(O.jsx)("input",{type:"text",name:"name",value:this.state.name,onChange:this.handleChange})})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:Object(O.jsx)("label",{htmlFor:"name",children:"species:"})}),Object(O.jsx)("td",{children:Object(O.jsx)("input",{type:"text",name:"species",value:this.state.species,onChange:this.handleChange})})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:Object(O.jsx)("label",{htmlFor:"name",children:"sex:"})}),Object(O.jsx)("td",{children:Object(O.jsx)("input",{type:"text",name:"sex",value:this.state.sex,onChange:this.handleChange})})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:Object(O.jsx)("label",{htmlFor:"name",children:"years:"})}),Object(O.jsx)("td",{children:Object(O.jsx)("input",{type:"text",name:"age",value:this.state.age,onChange:this.handleChange})})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:Object(O.jsx)("label",{htmlFor:"name",children:"kg:"})}),Object(O.jsx)("td",{children:Object(O.jsx)("input",{type:"text",name:"weight",value:this.state.weight,onChange:this.handleChange})})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:Object(O.jsx)("label",{htmlFor:"name",children:"city:"})}),Object(O.jsx)("td",{children:Object(O.jsx)("input",{type:"text",name:"city",value:this.state.city,onChange:this.handleChange})})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:Object(O.jsx)("label",{htmlFor:"name",children:"castrated:"})}),Object(O.jsx)("td",{children:Object(O.jsx)("input",{type:"text",name:"castrated",value:this.state.castrated,onChange:this.handleChange})})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:Object(O.jsx)("label",{htmlFor:"name",children:"description:"})}),Object(O.jsx)("td",{children:Object(O.jsx)("input",{type:"text",name:"description",value:this.state.description,onChange:this.handleChange})})]}),Object(O.jsx)("button",{type:"submit",children:"Add this animal"})]})})]})}}]),n}(s.Component),S={display:"flex",justifyContent:"center"},k=function(e){Object(h.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(l.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={animals:[],queryCity:"",querySpecies:""},e.handleInputC=function(t){var n=t.target.value;console.log(n),e.setState({queryCity:n})},e.handleInput=function(t){var n=t.target.value;console.log(n),e.setState({querySpecies:n})},e.getData=function(){b.a.get("/api/animals/list").then((function(t){console.log(t),e.setState({animals:t.data})})).catch((function(e){return console.log(e)}))},e}return Object(j.a)(n,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){for(var e=this.state.queryCity.toLowerCase(),t=this.state.querySpecies.toLowerCase(),n=[],s=0;s<this.state.animals.length;s++)this.state.animals[s].city.toLowerCase().includes(e)&&this.state.animals[s].species.toLowerCase().includes(t)&&n.push(this.state.animals[s]);console.log(n);var a=n.map((function(e){return Object(O.jsx)("div",{style:F,children:Object(O.jsx)("div",{children:Object(O.jsx)("li",{children:Object(O.jsxs)(d.b,{to:"/animals/".concat(e._id),children:[e.name," "]})})},e._id)})}));return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"Search"}),Object(O.jsxs)("div",{children:[Object(O.jsxs)("div",{style:D,children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("p",{children:"What animal are you looking for?"}),Object(O.jsx)("input",{type:"text",name:"search",value:this.state.querySpecies,onChange:this.handleInput})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("p",{children:"Your area:"}),Object(O.jsx)("input",{type:"text",name:"search",value:this.state.queryCity,onChange:this.handleInputC})]})]}),a]})]})}}]),n}(s.Component),D={float:"left",marginLeft:"5%",width:"60%",backgroundColor:"white",textAlign:"left"},F={float:"right",marginRight:"5%",width:"30%",backgroundColor:"white"},A=function(e){Object(h.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(l.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={imageUrl:"",name:"",species:"",sex:"",description:"",city:"",castrated:""},e.getData=function(){var t=e.props.match.params.id;b.a.get("/api/animals/".concat(t)).then((function(t){e.setState({imageUrl:t.data.imageUrl,name:t.data.name,species:t.data.species,sex:t.data.sex,age:t.data.age,weight:t.data.weight,description:t.data.description,city:t.data.city,castrated:t.data.castrated})})).catch((function(t){console.log(t),404===t.response.status&&e.setState({error:"Not Found."})}))},e.deleteAnimal=function(){var t=e.props.match.params.id;console.log("delete",t),b.a.delete("/api/animals/".concat(t)).then((function(){e.props.history.push("/animals")})).catch((function(e){return console.log(e)}))},e}return Object(j.a)(n,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){return Object(O.jsx)("div",{children:Object(O.jsxs)("div",{style:I,children:[Object(O.jsx)("div",{marginLeft:"50px",children:Object(O.jsx)("img",{src:this.state.imageUrl,width:"200",height:"200",alt:"logo"})}),Object(O.jsxs)("div",{children:[Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:"sex:"}),Object(O.jsx)("td",{children:Object(O.jsxs)("strong",{children:[" ",this.state.sex?"male":"female"]})})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:"city:"}),Object(O.jsx)("td",{children:Object(O.jsxs)("strong",{children:[" ",this.state.city]})})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:"years:"}),Object(O.jsx)("td",{children:Object(O.jsxs)("strong",{children:[" ",this.state.age]})})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:"kg:"}),Object(O.jsx)("td",{children:Object(O.jsxs)("strong",{children:[" ",this.state.weight]})})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:"castrated:"}),Object(O.jsx)("td",{children:Object(O.jsxs)("strong",{children:[" ",this.state.castrated?"Yes":"No"]})})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:"description:"}),Object(O.jsx)("td",{children:Object(O.jsxs)("strong",{children:[" ",this.state.description]})})]}),Object(O.jsx)("button",{onClick:this.deleteAnimal,children:"Delete animal"})]})]})})}}]),n}(s.Component),I={display:"flex",flexDirection:"column",justifyContent:"Center",alignItems:"center"},L=function(e){Object(h.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(l.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={animals:[]},e.getData=function(){b.a.get("/api/animals/list").then((function(t){e.setState({animals:t.data})})).catch((function(e){return console.log(e)}))},e}return Object(j.a)(n,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){for(var e=[],t=0;t<this.state.animals.length;t++)this.state.animals[t].owner===this.props.user._id&&e.push(this.state.animals[t]);var n=e.map((function(e){return Object(O.jsx)("div",{children:Object(O.jsxs)(d.b,{to:"/animals/".concat(e._id),children:[e.name," "]})},e._id)}));return Object(O.jsxs)("div",{style:q,children:[Object(O.jsx)("h1",{children:"Your animals"}),n,Object(O.jsx)("div",{children:Object(O.jsx)(d.b,{to:"/add",className:"buttonAdd",children:"Add"})})]})}}]),n}(s.Component),q={display:"flex",flexDirection:"Column",alignItems:"Center"},N=function(e){Object(h.a)(n,e);var t=Object(o.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("div",{style:_,children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"Animal connect"}),Object(O.jsx)("p",{children:"The purpose of this website is to introduce animals to people."})]}),Object(O.jsx)("div",{children:Object(O.jsx)(d.b,{to:"/signup",className:"buttonAdd",children:"sign up"})}),Object(O.jsx)("div",{children:Object(O.jsx)(d.b,{to:"/login",className:"buttonAdd",children:"log in"})})]})}}]),n}(s.Component),_={display:"flex",flexDirection:"Column",alignItems:"Center"},P=function(e){Object(h.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(l.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={user:e.props.user},e.setUser=function(t){e.setState({user:t})},e}return Object(j.a)(n,[{key:"render",value:function(){var e=this;return Object(O.jsxs)("div",{children:[Object(O.jsx)(m,{user:this.state.user,setUser:this.setUser}),Object(O.jsxs)(w.c,{children:[Object(O.jsx)(w.a,{exact:!0,path:"/",render:function(t){return Object(O.jsx)(N,Object(i.a)({setUser:e.setUser},t))}}),Object(O.jsx)(w.a,{exact:!0,path:"/signup",render:function(t){return Object(O.jsx)(f,Object(i.a)({setUser:e.setUser},t))}}),Object(O.jsx)(w.a,{exact:!0,path:"/login",render:function(t){return Object(O.jsx)(y,Object(i.a)({setUser:e.setUser},t))}}),Object(O.jsx)(w.a,{exact:!0,path:"/add",render:function(t){return Object(O.jsx)(U,Object(i.a)({setUser:e.setUser},t))}}),Object(O.jsx)(w.a,{exact:!0,path:"/animals",render:function(t){return Object(O.jsx)(k,Object(i.a)({setUser:e.setUser},t))}}),Object(O.jsx)(w.a,{exact:!0,path:"/private",render:function(t){return Object(O.jsx)(L,Object(i.a)({user:e.state.user,setUser:e.setUser},t))}}),Object(O.jsx)(w.a,{exact:!0,path:"/animals/:id",render:function(t){return Object(O.jsx)(A,Object(i.a)({setUser:e.setUser},t))}})]})]})}}]),n}(a.a.Component),z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,66)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),s(e),a(e),c(e),r(e)}))};b.a.get("/api/auth/loggedin").then((function(e){console.log("logged in user: ",e.data);var t=e.data;r.a.render(Object(O.jsx)(d.a,{children:Object(O.jsx)(P,{user:t})}),document.getElementById("root"))})).catch((function(e){return console.log(e)})),z()}},[[65,1,2]]]);
//# sourceMappingURL=main.8c90fd5a.chunk.js.map