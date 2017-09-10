import Vue from 'vue'
import Vuex from 'vuex'
import { HTTP } from '../services/http-service'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    items: []
  },

  mutations: {
    increment (state) {
      state.count++
    },
    setItem (state, items) {
      console.log(items)
      state.items = items
    }
  },

  actions: {
    fetchItem ({ commit }) {
      // возвращаем Promise через `store.dispatch()`
      // чтобы мы могли понять когда данные будут загружены
      // return fetchItem().then(data => {
      //   commit('setItem', data.items)
      // })
      return HTTP.get('posts')
        .then(response => {
          commit('setItem', response.items)
        })
    },
    asyncIncrement ({ commit }) {
      return new Promise(resolve => {
        setTimeout(() => {
          commit('increment')
          resolve()
        })
      })
    }
  }
})
