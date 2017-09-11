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
    setItems (state, { data }) {
      state.items = data
    },
    setItem (state, { data }) {
      Vue.set(state.items, data.id, data)
    }
  },

  actions: {
    fetchItems ({ commit }) {
      // возвращаем Promise через `store.dispatch()`
      // чтобы мы могли понять когда данные будут загружены
      return HTTP.get('posts')
        .then(response => {
          commit('setItems', response)
        })
    },
    fetchItem ({ commit }, id) {
      return HTTP.get('posts/' + id)
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
