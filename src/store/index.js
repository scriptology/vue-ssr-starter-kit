import Vue from 'vue'
import Vuex from 'vuex'
import { HTTP } from '../services/http-service'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    items: [],
    tags: [],
    item: {}
  },

  mutations: {
    increment (state) {
      state.count++
    },
    setItems (state, { data }) {
      state.items = data
    },
    setTags (state, { data }) {
      state.tags = data
    },
    setItem (state, { data }) {
      state.item = data
      state.title = data.name
      state.description = data.description
    }
  },

  actions: {
    fetchItems ({ commit }) {
      return HTTP.get('article?page=1&limit=100')
        .then(response => {
          commit('setItems', response)
        })
    },
    fetchTags ({ commit }) {
      return HTTP.get('tag?page=1&limit=10&is_root=1')
        .then(response => {
          HTTP.get('article/code/novaya-kollekciya-trussardi-jeans')
          .then(article => {
            commit('setTags', response)
            commit('setItem', article)
          })
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
