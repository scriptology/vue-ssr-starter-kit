webpackJsonp([1,10],{66:function(t,e,i){i(88);var s=i(8)(i(73),i(80),null,null);t.exports=s.exports},73:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(16);e.default={data:function(){return{config:null}},metaInfo:function(){return{title:this.title,meta:[{vmid:"description",name:"description",content:this.description}]}},computed:{title:function(){return this.$store.state.item.name},description:function(){return this.$store.state.item.description}},prefetch:function(t,e){return Promise.all([e.dispatch("fetchItems"),e.dispatch("fetchTags"),e.dispatch("asyncIncrement")]).then(function(t){return t[0]})},beforeMount:function(){this.config=JSON.stringify(s.a,null,2)}}},76:function(t,e,i){e=t.exports=i(17)(void 0),e.push([t.i,"body{font-family:Open Sans,sans-serif;font-size:14px;line-height:1.42857143}h1{font-size:2em;color:#5288d0}.list{background:#efeee9;padding:5px}.list__name{color:#5288d0;display:block;margin-bottom:5px}.list__item{background:#fff;padding:10px;margin-bottom:5px}.tags__name{color:#5288d0;display:block;margin-bottom:5px}.tags__item{display:inline-block;padding:0 10px;background:#000;color:#fff;line-height:30px;vertical-align:top;margin-right:5px}",""])},80:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h1",[t._v("vue-ssr-boilerplate")]),i("hr"),i("div",[i("strong",{staticClass:"list__name"},[t._v("Article:")]),i("h2",{domProps:{innerHTML:t._s(t.$store.state.item.name)}}),i("p",{domProps:{innerHTML:t._s(t.$store.state.item.preview_text)}})]),i("hr"),i("div",{staticClass:"tags"},[i("strong",{staticClass:"tags__name"},[t._v("Tags:")]),t._l(t.$store.state.tags,function(e){return i("div",{staticClass:"tags__item"},[i("span",[t._v(t._s(e.name))])])})],2),i("hr"),i("div",{staticClass:"list"},[i("strong",{staticClass:"list__name"},[t._v("List:")]),t._l(t.$store.state.items,function(e){return i("div",{staticClass:"list__item"},[i("h3",{domProps:{innerHTML:t._s(e.name)}}),i("p",[t._v(t._s(e.preview_text))]),i("img",{attrs:{src:e.image.preview_url}})])})],2)])},staticRenderFns:[]}},88:function(t,e,i){var s=i(76);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);i(18)("f025d51a",s,!0)}});