webpackJsonp([1],{"/kry":function(t,e){},"79g7":function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("7+uW"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var a=s("VU/8")({name:"App"},i,!1,function(t){s("lmTZ")},null,null).exports,r=s("/ocq"),o=s("mtWM"),c=s.n(o),l=function(){return c.a.create({baseURL:"https://api-chegajunto-staging.herokuapp.com/"})},d={insertItem:function(t){return l().post("insertItem",t)},findOrgs:function(){return l().get("findOrgs")},findEventById:function(t){return l().post("findEventById/"+t)},insertOrg:function(t){return l().post("insertOrg",t)}},u={props:["selectedEvent"],methods:{alert:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(){alert("Você decidiu participar do evento "+this.selectedEvent.title+". Estamos contando com você!")})}},v={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("modal",{attrs:{name:"event-modal",height:"auto",width:"80%",scrollable:!0}},[s("div",{staticClass:"event-modal"},[s("div",{staticClass:"header-modal is-row"},[s("div",{staticClass:"title-modal"},[s("div",{staticClass:"is-collumn full-center"},[s("h1",{staticClass:"title-text"},[t._v(t._s(t.selectedEvent.title))]),t._v(" "),s("div",{staticClass:"list-info"},[s("ul",[s("li",[t._v("Organização: "+t._s(t.selectedEvent.organization))]),t._v(" "),s("li",[t._v("Localização: "+t._s(t.selectedEvent.adress))]),t._v(" "),s("li",[t._v("Data: "+t._s(t.selectedEvent.date))]),t._v(" "),s("li",[t._v("Horário: "+t._s(t.selectedEvent.schedule))])])])])]),t._v(" "),s("div",{staticClass:"top-right"},[s("button",{staticClass:"btn-close",on:{click:function(e){t.$modal.hide("event-modal")}}},[t._v("\n          ❌\n        ")])])]),t._v(" "),s("div",{staticClass:"main-modal"},[s("h3",[t._v("Descrição do Evento")]),t._v(" "),s("p",[t._v(t._s(t.selectedEvent.description))]),t._v(" "),s("p",[s("b",[t._v("Contato: "),s("span",{staticClass:"contact-link"},[t._v(t._s(t.selectedEvent.contact))])])])]),t._v(" "),s("div",{staticClass:"is-row full-center"},[s("button",{staticClass:"btn-shadow",on:{click:function(e){t.alert()}}},[t._v("\n        Quero Participar\n      ")])])])])},staticRenderFns:[]};var m={components:{VModal:s("VU/8")(u,v,!1,function(t){s("/kry")},"data-v-3c445990",null).exports},data:function(){return{events:[],filterText:"",selectedEvent:{}}},methods:{findEvents:function(t){var e=this;t.findOrgs().then(function(t){t.data.query.forEach(function(t){t.events&&(e.events=e.events.concat(t.events))})}).catch(function(t){return console.log(t)})},findEventById:function(t){var e=this;d.findEventById(t).then(function(t){return e.selectedEvent=t.data.query[0]}).catch(function(t){return console.log(t)})},show:function(t){this.$modal.show("event-modal")},hide:function(){this.$modal.hide("event-modal")}},computed:{filteredEvents:function(){if(""!==this.filterText){var t=new RegExp(this.filterText,"i");return this.events.filter(function(e){return e.title.match(t)||e.adress.match(t)})}return this.events}},beforeMount:function(){this.findEvents(d)}},f={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"is-collumn full-center"},[s("div",{staticClass:"search-container is-collumn full-center"},[s("div",{staticClass:"search-box is-row full-center"},[t._m(0),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.filterText,expression:"filterText"}],attrs:{id:"search",placeholder:"Pesquisar..."},domProps:{value:t.filterText},on:{input:function(e){e.target.composing||(t.filterText=e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"container is-row"},[s("div",{staticClass:"cardbox"},[t._l(t.filteredEvents,function(e){return s("div",{key:e._id,staticClass:"card border-primary is-collumn",on:{click:function(s){t.show(e._id),t.findEventById(e._id)}}},[s("div",{staticClass:"full-center is-primary-text"},[s("div",{staticClass:"title-large no-text-overflow"},[t._v(t._s(e.title))])]),t._v(" "),s("div",{staticClass:"info is-second-text is-collumn no-text-overflow"},[s("span",[s("h4",[t._v(t._s(e.adress))])]),t._v(" "),s("span",[t._v("Data: "+t._s(e.date))]),t._v(" "),s("span",[t._v("Horário: "+t._s(e.schedule)+" ")])])])}),t._v(" "),s("v-modal",{attrs:{selectedEvent:t.selectedEvent}}),t._v(" "),t._t("default")],2)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"icon-search"},[e("i",{staticClass:"fa fa-search"})])}]};var p=s("VU/8")(m,f,!1,function(t){s("79g7")},"data-v-3ddd3569",null).exports,h={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header is-row"},[e("div",{staticClass:"logo full-center"},[e("router-link",{staticClass:"btn-primary",attrs:{to:"/",tag:"span",exact:""}},[this._v("CHEGA JUNTO!")])],1),this._v(" "),e("div",{staticClass:"header-buttons is-row"},[this._m(0),this._v(" "),e("div",{staticClass:"singin is-row"},[e("router-link",{staticClass:"btn-primary",attrs:{to:"singin",tag:"div",exact:""}},[this._v("Inscrever-se")])],1)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"login is-row"},[e("div",{staticClass:"btn-primary"},[this._v("Entrar")])])}]};var g=s("VU/8")({},h,!1,function(t){s("ooPW")},"data-v-1ef1d74c",null).exports,_={components:{VCard:p,VHeader:g},data:function(){return{name:"",email:"",password:""}},methods:{insertItem:function(){var t=this;d.insertItem({name:this.name,email:this.email,password:this.password}).then(function(e){return t.messege=e.data.response}).catch(function(t){return console.log(t)})}}},w={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"main is-primary-dark"},[e("v-header"),this._v(" "),e("v-card")],1)},staticRenderFns:[]};var C=s("VU/8")(_,w,!1,function(t){s("OQ+a")},"data-v-58b85568",null).exports,O={props:["newOrg"],methods:{insertOrg:function(){this.isEmpty(this.newOrg)?this.validatePassword(this.newOrg)?this.isSamePassword(this.newOrg)?this.removeConfirmPassword(this.newOrg)&&d.insertOrg(this.newOrg).then(function(t){alert("Sua conta foi criada com sucesso"),y.push({name:"indexPage"})}).catch(function(t){alert("Erro: Não foi possível criar sua conta, Tente novamente mais tarde"),console.log(t)}):alert("As senhas diferem um da outra"):alert("A senha deve ter pelo menos 6 digitos"):alert("Preencha todos os campos")},isEmpty:function(t){return""!==t.name&&""!==t.email&&""!==t.password},isSamePassword:function(t){return t.password===t.confirmPassword},validatePassword:function(t){return t.length>6},removeConfirmPassword:function(t){return delete this.newOrg.confirmPassword}},computed:{formMessage:function(t){return t}}},E={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container is-row"},[s("div",{staticClass:"form-div is-collumn"},[t._m(0),t._v(" "),s("div",{staticClass:"form-body is-collumn"},[s("div",{staticClass:"input-box"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newOrg.name,expression:"newOrg.name"}],staticClass:"form-input",attrs:{type:"text",name:"nameOrg",placeholder:"Nome da Organização",required:""},domProps:{value:t.newOrg.name},on:{input:function(e){e.target.composing||t.$set(t.newOrg,"name",e.target.value)}}})]),t._v(" "),s("div",{staticClass:"input-box"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newOrg.email,expression:"newOrg.email"}],staticClass:"form-input",attrs:{type:"email",name:"emailOrg",placeholder:"Email",required:""},domProps:{value:t.newOrg.email},on:{input:function(e){e.target.composing||t.$set(t.newOrg,"email",e.target.value)}}})]),t._v(" "),s("div",{staticClass:"input-box"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newOrg.password,expression:"newOrg.password"}],staticClass:"form-input",attrs:{type:"password",name:"password",placeholder:"Senha",required:""},domProps:{value:t.newOrg.password},on:{input:function(e){e.target.composing||t.$set(t.newOrg,"password",e.target.value)}}})]),t._v(" "),s("div",{staticClass:"input-box"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newOrg.confirmPassword,expression:"newOrg.confirmPassword"}],staticClass:"form-input",attrs:{id:"confirmPassword",type:"password",name:"confirm-password",placeholder:"Comfirmar Senha",required:""},domProps:{value:t.newOrg.confirmPassword},on:{input:function(e){e.target.composing||t.$set(t.newOrg,"confirmPassword",e.target.value)}}})]),t._v(" "),""===t.newOrg.name||""===t.newOrg.email||""===t.newOrg.password?s("div",[s("span",{staticClass:"warning"},[t._v("Preencha todos os campos *")])]):t.newOrg.password.length<6?s("div",[s("span",{staticClass:"warning"},[t._v("A senha deve ter pelo menos 6 digitos *")])]):t.newOrg.password!==t.newOrg.confirmPassword?s("div",[s("span",{staticClass:"warning"},[t._v("Confirme sua senha *")])]):t._e(),t._v(" "),s("div",{staticClass:"form-button is-collumn"},[s("button",{staticClass:"btn-shadow",attrs:{type:"button",name:"button"},on:{click:function(e){t.insertOrg()}}},[t._v("Salvar")]),t._v(" "),s("a",{staticClass:"link",on:{click:function(e){t.$parent.resetPerfilChoice()}}},[t._v("Voltar")])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title-large is-collumn"},[e("span",[this._v("Inscreva-se")])])}]};var P={components:{VHeader:g,VFormOrg:s("VU/8")(O,E,!1,function(t){s("tq/N")},"data-v-65460a1d",null).exports},data:function(){return{isOrg:!1,isPerson:!1,newOrg:{name:"",email:"",password:"",confirmPassword:""}}},methods:{resetPerfilChoice:function(){this.isOrg=!1,this.isPerson=!1},choseOrg:function(){this.isOrg=!0,this.isPerson=!1},chosePerson:function(){this.isPerson=!0,this.isOrg=!1}}},x={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container is-collumn"},[s("v-header"),t._v(" "),!1===t.isOrg&&!1===t.isPerson?s("div",{staticClass:"perfil-choice"},[t._m(0),t._v(" "),s("div",{staticClass:"container is-row"},[s("div",{staticClass:"org is-row full-center",on:{click:function(e){t.choseOrg()}}},[t._m(1)]),t._v(" "),t._m(2)])]):!0===t.isOrg?s("div",{staticClass:"is-row full-center"},[s("v-form-org",{attrs:{newOrg:t.newOrg}})],1):t._e()],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"is-row full-center"},[e("h2",{staticClass:"title"},[this._v("Como deseja se increver?")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"imagem is-collumn full-center"},[e("h1",{staticClass:"title-medium"},[this._v("Organização")]),this._v(" "),e("span",{staticClass:"fa fa-building"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"person is-row full-center"},[e("div",{staticClass:"imagem is-collumn full-center"},[e("h1",{staticClass:"title-medium"},[this._v("Voluntário")]),this._v(" "),e("span",{staticClass:"fa fa-user"})])])}]};var b=s("VU/8")(P,x,!1,function(t){s("b035")},"data-v-7d23038f",null).exports;n.a.use(r.a);var y=new r.a({routes:[{path:"/",name:"indexPage",component:C},{path:"/singin",name:"singin",component:b}]}),$=s("rifk"),k=s.n($);n.a.use(k.a),n.a.config.productionTip=!1,new n.a({el:"#app",router:y,components:{App:a},template:"<App/>"})},"OQ+a":function(t,e){},b035:function(t,e){},lmTZ:function(t,e){},ooPW:function(t,e){},"tq/N":function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.83ab493e0a4cf5522e62.js.map