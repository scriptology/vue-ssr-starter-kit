import Vue from 'vue'
import Vuex from 'vuex'
import { HTTP } from '../services/http-service'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    items: [],
    item: {}
  },

  mutations: {
    increment (state) {
      state.count++
    },
    setItems (state, { data }) {
      state.items = data
    },
    setItem (state, { data }) {
      // Vue.set(state.items, data.id, data)
      console.log(data)
      state.item = data
    }
  },

  actions: {
    fetchItems ({ commit }) {
      // возвращаем Promise через `store.dispatch()`
      // чтобы мы могли понять когда данные будут загружены
      return HTTP.get('article?page=1&limit=30')
        .then(response => {
          commit('setItems', response)
        })
    },
    fetchItem ({ commit }, code) {
      return HTTP.get('article/code/' + code)
        .then(response => {
          commit('setItem', response)
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
