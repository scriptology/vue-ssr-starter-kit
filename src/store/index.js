import Vue from 'vue'
import Vuex from 'vuex'
import { HTTP } from '../services/http-service'

// test data
import articlesJson from './json/articles.json'
import tagsJson from './json/tags.json'
import articleJson from './json/article.json'

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
    setItems (state, { results }) {
      state.items = results
    },
    setTags (state, { results }) {
      state.tags = results
    },
    setItem (state, { results }) {
      state.item = results[0]
      state.title = results[0].webTitle
      state.description = results[0].sectionName
    },
    setItemsFromJson (state, data) {
      state.items = data
    },
    setTagsFromJson (state, data) {
      state.tags = data
    },
    setArticleFromJson (state, data) {
      state.item = data
    }
  },

  actions: {
    fetchItems ({ commit }) {
      const rightNow = new Date()
      const date = rightNow.toISOString().slice(0, 10)
      return HTTP.get(`search?q=debate&tag=politics/politics&from-date=${date}&api-key=test`)
        .then(response => {
          commit('setItems', response.data.response)
          commit('setItem', response.data.response)
        })
    },
    fetchTags ({ commit }) {
      return HTTP.get('tag?page=1&limit=10&is_root=1')
        .then(response => {
          commit('setTags', response)
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
    },
    fetchItemsFromJson ({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          commit('setItemsFromJson', articlesJson)
          resolve()
        }, 1000)
      })
    },
    fetchTagsFromJson ({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          commit('setTagsFromJson', tagsJson)
          resolve()
        }, 1000)
      })
    },
    fetchArticleFromJson ({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          commit('setArticleFromJson', articleJson)
          resolve()
        }, 1000)
      })
    }
  }
})
