// { "framework": "Vue"} 

!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=34)}({13:function(e,t){e.exports={wrapper:{alignItems:"center",justifyContent:"center",paddingTop:0,color:"#FAEBD7"},title:{paddingTop:20,paddingBottom:20,fontSize:28,alignItems:"center",color:"#FF0000",lineHeight:80,textAlign:"center"},btn:{width:300,backgroundColor:"#FFE4C4",fontSize:40,alignItems:"center",textAlign:"center",paddingTop:10,paddingRight:10,paddingBottom:10,paddingLeft:10}}},21:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:["wrapper"]},[n("text",{staticClass:["title"],on:{click:e.testToast}},[e._v("weex page 2,  "+e._s(e.test))]),n("button",{staticClass:["btn"],on:{click:e.testEvent}},[e._v("测试调用同一个modal")])],1)},staticRenderFns:[]},e.exports.render._withStripped=!0},34:function(e,t,n){var o,r,s=[];s.push(n(13)),o=n(4);var i=n(21);r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(Object.keys(o).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r=o=o.default),"function"==typeof r&&(r=r.options),r.__file="/Users/duqian/Development/MyGitHub/weex-demo-dusan/weex-demo/src/postmsg.vue",r.render=i.render,r.staticRenderFns=i.staticRenderFns,r._scopeId="data-v-df51b246",r.style=r.style||{},s.forEach(function(e){for(var t in e)r.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(r._scopeId,s),e.exports=o,e.exports.el="true",new Vue(e.exports)},4:function(e,t,n){"use strict";var o=weex.requireModule("MyMoudle"),r=weex.requireModule("modal");e.exports={data:{test:"duqian2010@gmail.com"},mounted:function(){console.log("mounted","mounted");var e=new BroadcastChannel("DuQian");e.onmessage=function(t){console.log(t.data),r.toast({message:"pageB received ="+t.data,duration:.8}),self.test=t.data,e.postMessage("I am DuQian.")}},methods:{testToast:function(){r.toast({message:"test click",duration:1})},testEvent:function(){o.printLog("myMoudle from B")}}}}});