(function(t){function e(e){for(var n,r,s=e[0],c=e[1],l=e[2],d=0,p=[];d<s.length;d++)r=s[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&p.push(i[r][0]),i[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,s=1;s<a.length;s++){var c=a[s];0!==i[c]&&(n=!1)}n&&(o.splice(e--,1),t=r(r.s=a[0]))}return t}var n={},i={app:0},o=[];function r(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=n,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"0ea3":function(t,e,a){t.exports=a.p+"img/bus.c2f2fcb7.png"},"110a":function(t,e,a){t.exports=a.p+"img/distance.60717021.png"},1369:function(t,e,a){"use strict";a("e8c0")},1771:function(t,e,a){var n={"./building.png":"d994","./bus.png":"0ea3","./buslogo.png":"f01e","./busstop.jpg":"8d73","./city.jpg":"da22","./computer.png":"6333","./convenient.png":"59d2","./distance.png":"110a","./logo.png":"cf05","./logo.svg":"9b19","./piggybank.png":"8dc0","./route.png":"d49c","./seat.png":"d11a"};function i(t){var e=o(t);return a(e)}function o(t){if(!a.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}i.keys=function(){return Object.keys(n)},i.resolve=o,t.exports=i,i.id="1771"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-card",{staticClass:"overflow-hidden"},[t.mobileView?a("div",[a("NavbarMobile")],1):t._e(),t.mobileView?t._e():a("Navbar"),a("v-main",[a("Landing"),a("Footer")],1)],1)],1)},o=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app-bar",{attrs:{app:"",absolute:"",color:"white","elevate-on-scroll":"","scroll-target":"#scrolling-techniques-7"}},[n("div",{staticClass:"d-flex align-center"},[n("v-img",{staticClass:"shrink mr-2",attrs:{contain:"",src:a("f01e"),transition:"scale-transition",width:"40"}}),n("span",[n("span",[t._v(" RIDE ")]),n("span",{staticClass:"font-weight-bold",staticStyle:{color:"#A163F5"}},[t._v(" TOGETHER ")])]),n("v-img",{staticClass:"shrink mt-1 hidden-sm-and-down",attrs:{alt:"Vuetify Name",contain:"","min-width":"100",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png",width:"100"}})],1),n("v-spacer"),n("v-btn",{staticClass:"ma-4",attrs:{href:"https://github.com/vuetifyjs/vuetify/releases/latest",rounded:"",color:"#A163F5",target:"_blank",dark:""}},[n("span",{staticClass:"mr-2"},[t._v("Join Us")]),n("v-icon",[t._v("mdi-open-in-new")])],1),n("v-btn",{attrs:{href:"https://github.com/vuetifyjs/vuetify/releases/latest",rounded:"",color:"#A163F5",target:"_blank",dark:""}},[n("span",{staticClass:"mr-2"},[t._v("Sign Up")]),n("v-icon",[t._v("mdi-open-in-new")])],1)],1)},s=[],c=a("2877"),l=a("6544"),u=a.n(l),d=a("40dc"),p=a("8336"),v=a("132d"),f=a("adda"),m=a("2fa4"),g={},b=Object(c["a"])(g,r,s,!1,null,null,null),h=b.exports;u()(b,{VAppBar:d["a"],VBtn:p["a"],VIcon:v["a"],VImg:f["a"],VSpacer:m["a"]});var w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"d-flex align-center"},[n("v-toolbar",{attrs:{flat:""}},[n("v-img",{staticClass:"shrink mr-2",attrs:{contain:"",src:a("f01e"),transition:"scale-transition",width:"40"}}),n("span",[n("span",[t._v(" RIDE ")]),n("span",{staticClass:"font-weight-bold",staticStyle:{color:"#A163F5"}},[t._v(" TOGETHER ")])]),n("v-spacer"),n("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}})],1)],1),n("v-navigation-drawer",{attrs:{absolute:"",right:"",temporary:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",{attrs:{nav:"",dense:""}},[n("v-list-item-group",{attrs:{"active-class":"deep-purple--text text--accent-4"},model:{value:t.group,callback:function(e){t.group=e},expression:"group"}},[n("v-list-item",[n("v-list-item-icon",[n("v-icon",[t._v("mdi-account-group-outline")])],1),n("v-list-item-title",[t._v("Join Us")])],1),n("v-list-item",[n("v-list-item-icon",[n("v-icon",[t._v("mdi-account")])],1),n("v-list-item-title",[t._v("Sign Up")])],1),n("v-list-item",[n("v-list-item-icon",[n("v-icon",[t._v("mdi-forum")])],1),n("v-list-item-title",[t._v("Contact us")])],1)],1)],1)],1)],1)},y=[],_={data:function(){return{drawer:!1,group:null}},watch:{group:function(){this.drawer=!1}}},x=_,C=a("5bc1"),V=a("8860"),k=a("da13"),j=a("1baa"),S=a("34c3"),O=a("5d23"),A=a("f774"),I=a("71d9"),F=Object(c["a"])(x,w,y,!1,null,null,null),E=F.exports;u()(F,{VAppBarNavIcon:C["a"],VIcon:v["a"],VImg:f["a"],VList:V["a"],VListItem:k["a"],VListItemGroup:j["a"],VListItemIcon:S["a"],VListItemTitle:O["a"],VNavigationDrawer:A["a"],VSpacer:m["a"],VToolbar:I["a"]});var T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-footer",{attrs:{dark:"",padless:"",color:"#A163F5"}},[a("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[t._l(t.icons,(function(e){return a("v-btn",{key:e,staticClass:"mx-4 my-3 white--text",attrs:{icon:""}},[a("v-icon",{attrs:{size:"24px"}},[t._v(" "+t._s(e)+" ")])],1)})),a("v-divider"),a("p",{staticClass:"my-3"},[a("strong",[t._v("Ride Together")]),t._v(" — "+t._s((new Date).getFullYear())+" ")])],2)],1)},L=[],M={data:function(){return{icons:["mdi-facebook","mdi-twitter","mdi-linkedin","mdi-instagram"]}}},N=M,P=a("62ad"),z=a("ce7e"),B=a("553a"),D=Object(c["a"])(N,T,L,!1,null,null,null),U=D.exports;u()(D,{VBtn:p["a"],VCol:P["a"],VDivider:z["a"],VFooter:B["a"],VIcon:v["a"]});var R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-container",{staticClass:"my-5"},[n("v-row",{staticClass:"my-auto mb-10",attrs:{justify:"center"}},[n("div",{staticClass:"my-auto",attrs:{"data-aos":"fade-up","data-aos-duration":"800"}},[n("v-card",{staticClass:"text-left",attrs:{elevation:"0","max-width":"450"}},[n("v-card-title",{staticStyle:{"font-size":"3em","line-height":"1"}},[n("span",{staticStyle:{"padding-right":"10px"}},[t._v("Providing")]),t._v(" "),n("span",{staticStyle:{color:"#A163F5"}},[t._v("Better ")]),t._v("Transport ")]),n("v-card-text",{staticStyle:{"font-size":"1em"}},[t._v(" Ensuring more comfortable, convenient, and cheaper door-to-door transport for your daily needs. ")])],1)],1),n("div",{attrs:{"data-aos":"fade-right","data-aos-delay":"","data-aos-duration":"900"}},[n("v-card",{attrs:{elevation:"0"}},[n("v-img",{attrs:{src:a("da22"),contain:""}})],1)],1)])],1),n("v-row",{},[n("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[n("div",{attrs:{"data-aos":"fade-up","data-aos-duration":"800"}},[n("p",{staticClass:"mb-10",staticStyle:{"font-size":"3em"}},[t._v(" How it "),n("span",{staticStyle:{color:"#A163F5"}},[t._v(" works ")])]),n("v-row",{attrs:{justify:"center"}},t._l(t.howItWorks,(function(e,i){return n("v-card",{key:i,staticClass:"mx-1 elevation-0",attrs:{"max-width":"275"}},[n("v-row",[n("v-img",{staticClass:"mb-10 mx-auto",attrs:{src:a("1771")("./"+e.src),"max-width":"150"}})],1),n("v-row",{attrs:{justify:"center"}},[n("v-avatar",{staticClass:"mb-3",attrs:{color:"#A163F5",size:"25"}},[n("span",{staticStyle:{color:"white"}},[t._v(t._s(i+1))])])],1),n("v-row",[n("p",{staticClass:"mx-10"},[t._v(" "+t._s(e.text)+" ")])])],1)})),1)],1)])],1),n("v-col",{staticClass:"mb-10",attrs:{cols:"12"}},[n("div",{attrs:{"data-aos":"fade-up","data-aos-duration":"1000"}},[n("p",{staticClass:"mb-10",staticStyle:{"font-size":"3em"}},[t._v(" Benefits to "),n("span",{staticStyle:{color:"#A163F5"}},[t._v(" you ")])]),n("v-row",{attrs:{justify:"center"}},t._l(t.benefits,(function(e,i){return n("v-card",{key:i,staticClass:"mx-10",attrs:{"max-width":"300",height:"400"}},[n("br"),n("v-img",{staticClass:"mx-auto mb-5",attrs:{src:a("1771")("./"+e.src),"max-width":"150"}}),n("v-card-title",{staticClass:"font-weight-bold",staticStyle:{color:"#A163F5"}},[n("p",{staticClass:"mx-auto",staticStyle:{"font-size":"25px"}},[t._v(t._s(e.title))])]),n("v-card-subtitle",[t._v(" "+t._s(e.text)+" ")])],1)})),1)],1)])],1)},W=[],$={name:"Landing",data:function(){return{howItWorks:[{text:"Select a pickup and drop-off point",src:"computer.png"},{text:"We will assign you a pickup time and location",src:"route.png"},{text:"Board our bus from your chosen pickup point",src:"bus.png"},{text:"Alight at your chosen drop-off point",src:"building.png"}],benefits:[{title:"Comfortable",text:"You are guaranteed a seat onboard so you don't have to squeeze with others on crowded buses or trains.",src:"seat.png"},{title:"Convenient",text:"We will pick you and drop you off directly so you don't have to make long walks or go through multiple transitions between trains/buses.",src:"distance.png"},{title:"Cheaper",text:"We are significantly cheaper than private hires that provide similar comfort and convenience. You won't have to deal with surge pricing as well!",src:"piggybank.png"}],icons:["mdi-facebook","mdi-twitter","mdi-linkedin","mdi-instagram"]}}},H=$,J=(a("1369"),a("8212")),G=a("b0af"),Y=a("99d9"),q=a("a523"),K=a("0fd9"),Q=Object(c["a"])(H,R,W,!1,null,null,null),X=Q.exports;u()(Q,{VAvatar:J["a"],VCard:G["a"],VCardSubtitle:Y["a"],VCardText:Y["b"],VCardTitle:Y["c"],VCol:P["a"],VContainer:q["a"],VImg:f["a"],VRow:K["a"]});var Z={name:"App",data:function(){return{mobileView:!0,items:[{title:"Home",icon:"mdi-home-city"},{title:"My Account",icon:"mdi-account"},{title:"Users",icon:"mdi-account-group-outline"}]}},methods:{handleView:function(){this.mobileView=window.innerWidth<=600}},components:{Navbar:h,NavbarMobile:E,Footer:U,Landing:X},created:function(){this.handleView()}},tt=Z,et=(a("034f"),a("7496")),at=a("f6c4"),nt=Object(c["a"])(tt,i,o,!1,null,null,null),it=nt.exports;u()(nt,{VApp:et["a"],VCard:G["a"],VMain:at["a"]});var ot=a("f309"),rt=a("8cb8");n["a"].use(ot["a"]),n["a"].use(rt["default"]);var st=new ot["a"]({}),ct=a("f5af"),lt=a.n(ct);a("e829");n["a"].config.productionTip=!1,new n["a"]({vuetify:st,created:function(){lt.a.init()},render:function(t){return t(it)}}).$mount("#app")},"59d2":function(t,e,a){t.exports=a.p+"img/convenient.b329590f.png"},6333:function(t,e,a){t.exports=a.p+"img/computer.dc3c76ba.png"},"85ec":function(t,e,a){},"8d73":function(t,e,a){t.exports=a.p+"img/busstop.ef56e610.jpg"},"8dc0":function(t,e,a){t.exports=a.p+"img/piggybank.f6ba6fb9.png"},"9b19":function(t,e,a){t.exports=a.p+"img/logo.63a7d78d.svg"},cf05:function(t,e,a){t.exports=a.p+"img/logo.82b9c7a5.png"},d11a:function(t,e,a){t.exports=a.p+"img/seat.788e0d98.png"},d49c:function(t,e,a){t.exports=a.p+"img/route.26f3f59b.png"},d994:function(t,e,a){t.exports=a.p+"img/building.9e1811b7.png"},da22:function(t,e,a){t.exports=a.p+"img/city.754711dc.jpg"},e8c0:function(t,e,a){},f01e:function(t,e,a){t.exports=a.p+"img/buslogo.aa590218.png"}});
//# sourceMappingURL=app.8b403c2d.js.map