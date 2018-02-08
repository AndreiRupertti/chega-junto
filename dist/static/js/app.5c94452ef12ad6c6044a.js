webpackJsonp([1],{K0b1:function(t,e){},L3im:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var a=n("VU/8")({name:"App"},s,!1,function(t){n("Zcw0")},null,null).exports,r=n("/ocq"),o=n("mtWM"),c=n.n(o),l=function(){return c.a.create({baseURL:"https://api-chegajunto-staging.herokuapp.com/"})},d={insertItem:function(t){return l().post("insertItem",t)},findOrgs:function(){return l().get("findOrgs")},findEventById:function(t){return l().post("findEventById/"+t)}},u={props:["selectedEvent"],methods:{alert:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(){alert("Você decidiu participar do evento "+this.selectedEvent.title+". Estamos contando com você!")})}},v={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("modal",{attrs:{name:"event-modal",height:"auto",width:"80%",scrollable:!0}},[n("div",{staticClass:"event-modal"},[n("div",{staticClass:"header-modal"},[n("div",{staticClass:"title-modal"},[n("div",{staticClass:"is-collum full-center"},[n("h1",{staticClass:"title-text"},[t._v(t._s(t.selectedEvent.title))]),t._v(" "),n("div",{staticClass:"list-info"},[n("ul",[n("li",[t._v("Organização: "+t._s(t.selectedEvent.organization))]),t._v(" "),n("li",[t._v("Data: "+t._s(t.selectedEvent.date))]),t._v(" "),n("li",[t._v("Horário: "+t._s(t.selectedEvent.schedule))])])])])]),t._v(" "),n("div",{staticClass:"top-right"},[n("button",{staticClass:"btn-close",on:{click:function(e){t.$modal.hide("event-modal")}}},[t._v("\n          ❌\n        ")])])]),t._v(" "),n("div",{staticClass:"main-modal"},[n("h3",[t._v("Descrição do Evento")]),t._v(" "),n("p",[t._v(t._s(t.selectedEvent.description))])]),t._v(" "),n("div",{staticClass:"is-row full-center"},[n("button",{staticClass:"btn-shadow",on:{click:function(e){t.alert()}}},[t._v("\n        Quero Participar\n      ")])])])])},staticRenderFns:[]};var f={components:{VModal:n("VU/8")(u,v,!1,function(t){n("L3im")},"data-v-23077198",null).exports},data:function(){return{events:[],filterText:"",selectedEvent:{}}},methods:{findEvents:function(t){var e=this;t.findOrgs().then(function(t){t.data.query.forEach(function(t){return e.events=e.events.concat(t.events)})}).catch(function(t){return console.log(t)})},findEventById:function(t){var e=this;d.findEventById(t).then(function(t){return e.selectedEvent=t.data.query[0]}).catch(function(t){return console.log(t)})},show:function(t){this.cardId=t,this.$modal.show("event-modal")},hide:function(){this.$modal.hide("event-modal")}},computed:{filteredEvents:function(){if(""!==this.filterText){var t=new RegExp(this.filterText,"i");return this.events.filter(function(e){return e.title.match(t)})}return this.events}},beforeMount:function(){this.findEvents(d)}},h={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"search-box"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.filterText,expression:"filterText"}],attrs:{type:"search",name:"search",placeholder:"pesquisar"},domProps:{value:t.filterText},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.onEnter(e)},input:function(e){e.target.composing||(t.filterText=e.target.value)}}})]),t._v(" "),n("div",{attrs:{id:"cardbox"}},[t._l(t.filteredEvents,function(e){return n("div",{key:e._id,staticClass:"card border-primary is-collum",on:{click:function(n){t.show(e._id),t.findEventById(e._id)}}},[n("div",{staticClass:"full-center is-primary-text"},[n("div",{staticClass:"text-large no-text-overflow"},[t._v(t._s(e.title))])]),t._v(" "),n("div",{staticClass:"info is-second-text is-collum no-text-overflow"},[n("span",[n("h4",[t._v(t._s(e.organization))])]),t._v(" "),n("span",[t._v("Data: "+t._s(e.date))]),t._v(" "),n("span",[t._v("Horário: "+t._s(e.schedule)+" ")])])])}),t._v(" "),n("v-modal",{attrs:{selectedEvent:t.selectedEvent}}),t._v(" "),t._t("default")],2)])},staticRenderFns:[]};var p={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header is-row"},[e("div",{staticClass:"logo"},[e("span",[this._v("chega junto")])]),this._v(" "),e("div",{staticClass:"header-buttons is-row"},[e("div",{staticClass:"login"},[e("div",{staticClass:"btn-primary border-primary btn-size is-second-text"},[this._v("Login")])]),this._v(" "),e("div",{staticClass:"singin"},[e("div",{staticClass:"btn-primary border-primary btn-size .btn-size is-second-text"},[this._v("Cadastrar")])])])])}]};var m={components:{VCard:n("VU/8")(f,h,!1,function(t){n("etWp")},"data-v-8fc7864a",null).exports,VHeader:n("VU/8")({},p,!1,function(t){n("laFW")},"data-v-cc234bea",null).exports},data:function(){return{name:"",email:"",password:""}},methods:{insertItem:function(){var t=this;d.insertItem({name:this.name,email:this.email,password:this.password}).then(function(e){return t.messege=e.data.response}).catch(function(t){return console.log(t)})}}},_={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"main is-primary-dark"},[e("v-header"),this._v(" "),e("v-card")],1)},staticRenderFns:[]};var E=n("VU/8")(m,_,!1,function(t){n("K0b1")},"data-v-0dc5529b",null).exports;i.a.use(r.a);var g=new r.a({routes:[{path:"/",name:"IndexPage",component:E},{path:"/about",name:"about",component:E}]}),b=n("rifk"),C=n.n(b);i.a.use(C.a),i.a.config.productionTip=!1,new i.a({el:"#app",router:g,components:{App:a},template:"<App/>"})},Zcw0:function(t,e){},etWp:function(t,e){},laFW:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.5c94452ef12ad6c6044a.js.map