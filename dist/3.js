webpackJsonp([3,10],{62:function(t,e,i){i(89);var n=i(8)(i(70),i(81),null,null);t.exports=n.exports},70:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(16);e.default={data:function(){return{items:[],title:"",description:"",id:0,config:null}},metaInfo:function(){return{title:this.title,meta:[{vmid:"description",name:"description",content:this.description}]}},prefetch:function(t,e){return Promise.all([new Promise(function(e){setTimeout(function(){e({title:"title async loaded",description:"description async loaded",id:t.params.id})})}),e.dispatch("fetchItem"),e.dispatch("asyncIncrement")]).then(function(t){return t[0]})},beforeMount:function(){console.log(this.a),this.config=JSON.stringify(n.a,null,2)}}},77:function(t,e,i){e=t.exports=i(17)(void 0),e.push([t.i,".post__title{color:green}.post__body{color:#333}",""])},81:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"foo"},[i("div",{staticClass:"test"},[t._v("this is pug template")]),i("p",[t._v("this.id: "+t._s(t.id))]),i("p",[t._v("this.$store.state.count: "+t._s(t.$store.state.count))]),i("p",[t._v("Enviroment Variables Defined by webpack.DefinePlugin:")]),i("pre",[t._v("\\n"+t._s(t.config))]),i("p",[i("router-link",{attrs:{to:"/"}},[t._v("goto /")])],1),t._l(t.$store.state.items,function(e){return i("div",{staticClass:"post"},[i("h3",{staticClass:"post__title"},[t._v(t._s(e.title))]),i("p",{staticClass:"post__body"},[t._v(t._s(e.body))])])})],2)},staticRenderFns:[]}},89:function(t,e,i){var n=i(77);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(18)("1f693908",n,!0)}});