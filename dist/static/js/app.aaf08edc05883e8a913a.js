webpackJsonp([1],{JJKQ:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("7+uW"),o={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var r=n("VU/8")({name:"App"},o,!1,function(e){n("gsu9")},null,null).exports,s=n("/ocq"),i=n("mtWM"),l=n.n(i),p=function(e){return l.a.create({baseURL:"http://localhost:3000/"}).post("insertItem",e)},m={data:function(){return{name:"",email:"",password:""}},methods:{insertItem:function(){p({name:this.name,email:this.email,password:this.password}).then(function(e){return console.log(e)}).catch(function(e){return console.log(e)})}}},u={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v("HelloWorld")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",name:"name",placeholder:"Name"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),e._v(" "),n("br"),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",name:"email",placeholder:"Email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),e._v(" "),n("br"),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",name:"password",placeholder:"Password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),e._v(" "),n("br"),e._v(" "),n("button",{on:{click:function(t){e.insertItem()}}},[e._v("Savssse")])])},staticRenderFns:[]};var c=n("VU/8")(m,u,!1,function(e){n("JJKQ")},"data-v-37963394",null).exports;a.a.use(s.a);var d=new s.a({routes:[{path:"/",name:"IndexPage",component:c}]});a.a.config.productionTip=!1,new a.a({el:"#app",router:d,components:{App:r},template:"<App/>"})},gsu9:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.aaf08edc05883e8a913a.js.map