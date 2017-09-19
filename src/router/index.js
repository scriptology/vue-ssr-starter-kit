import Vue from 'vue'
import Router from 'vue-router'

// can't put import() here, because node will complain "SyntaxError: Unexpected token import"
const _import = require('./_import_' + TARGET)
//import Articles from '../components/articles/articles.vue'

Vue.use(Router)

const routes = [
  { path: '/', component: _import('Index') },
  { path: '/foo/:id', name: 'foo', component: _import('Foo') },
  { path: '/show-error-page', component: _import('ShowErrorPage') },
  { path: '/posts', component: _import('Posts') },
  { path: '/posts/:code', name: 'post', component: _import('Post') },
  { path: '/posts_json', component: _import('PostsJson') }
  // { path: '/articles', component: Articles }
]

if (TARGET === 'web') {
  routes.push(
    // catch-all route must be placed at the last
    { path: '*', component: _import('HTTP404') }
  )
}

export default new Router({
  mode: 'history',
  routes
})
