(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dfae0a36"],{"4f4e":function(e,t,r){e.exports=r.p+"img/com.5d5c55e2.jpg"},"73cf":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-toolbar",{staticStyle:{"background-color":"#004080"},attrs:{flat:"",fixed:""}},[a("h3",{staticClass:"white--text"},[e._v("HEADQUATER")]),a("v-spacer"),a("v-avatar",[a("img",{attrs:{src:r("4f4e"),alt:"John"}})]),a("v-toolbar-title",{staticStyle:{color:"#faee02"}},[e._v("eCMS")])],1),a("br"),a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{attrs:{cols:"6",sm:"8",md:"4"}},[a("v-layout",{attrs:{row:"","justify-center":""}},[a("v-flex",{attrs:{sm12:"",md6:""}},[a("v-card",{staticClass:"elevation-12"},[a("v-toolbar",{attrs:{color:"#004080",dark:"",flat:""}},[a("v-toolbar-title",{staticClass:"white--text"},[e._v("Register ")]),a("div",{staticClass:"flex-grow-4"}),a("h2",{staticStyle:{"margin-left":"30%",color:"#faee02"}},[e._v("eCMS")]),a("v-spacer"),a("router-link",{attrs:{to:"/login"}},[a("v-btn",e._g({attrs:{icon:"",large:"",href:"https://codepen.io/johnjleider/pen/pMvGQO",target:"_blank"}},e.on),[e._v("\r\n                            Login\r\n                            ")])],1)],1),a("v-card-text",[a("v-form",[a("v-text-field",{attrs:{label:"Name",name:"login","prepend-icon":"person",rules:[function(){return!!e.name||"This field is required"}],type:"text"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),a("v-text-field",{attrs:{label:"Email",name:"login",rules:[function(){return!!e.email||"This field is required"}],"prepend-icon":"email",type:"text"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),a("v-text-field",{attrs:{label:"Tel",name:"login",rules:[function(){return!!e.tel||"This field is required"}],"prepend-icon":"email",type:"text"},model:{value:e.tel,callback:function(t){e.tel=t},expression:"tel"}}),a("v-text-field",{attrs:{id:"password",label:"Password",name:"password","prepend-icon":"lock",rules:[function(){return!!e.password||"This field is required"}],type:"password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),a("v-text-field",{attrs:{id:"confirm",label:"Confirm Password",name:"password","prepend-icon":"lock",rules:[function(){return!!e.confirm||"This field is required"}],type:"password"},model:{value:e.confirm,callback:function(t){e.confirm=t},expression:"confirm"}})],1)],1),a("v-card-actions",[a("div",{staticClass:"flex-grow-1"}),a("v-spacer"),a("router-link",{attrs:{to:"/login"}},[a("v-btn",{attrs:{small:"",color:"primary"},on:{click:function(t){return e.submit()}}},[e._v("Register")])],1)],1)],1)],1)],1)],1)],1)],1)},i=[],s=(r("7f7f"),r("bc3a")),l=r.n(s),n={props:{source:String},data:function(){return{drawer:null,name:"",email:"",tel:"",password:"",confirm:""}},methods:{submit:function(){l.a.post("https://ece-backend2-265014.appspot.com/head_register",{Name:this.name,email:this.email,tel:this.tel,password:this.password,confirm_password:this.confirm}).then((function(e){window.location.reload()}))}}},o=n,c=r("2877"),d=Object(c["a"])(o,a,i,!1,null,null,null);t["default"]=d.exports}}]);
//# sourceMappingURL=chunk-dfae0a36.086dba5d.js.map