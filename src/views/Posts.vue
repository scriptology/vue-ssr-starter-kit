<template lang="pug">
  .list
    h2.test Article
    div
      h1.post__title {{ $store.state.item.name }}
      div.post__body {{ $store.state.item.preview_text }}
    hr
    h2.test Articles
    .post(v-for='post of $store.state.items')
      router-link(:to="{ name: 'post', params: { code: post.code } }") {{ post.name }}
      p.post__body {{ post.preview_text }}
    hr
    h2.test Tags
    ul
      li.post(v-for='tag of $store.state.tags')
        p {{ tag.name }}
</template>

<style lang="sass">
  .test
    color: #4a89dc
  .post
    &__title
      color: #4a6edc
    &__body
      color: #333
</style>

<script>

import config from '~/config'

export default {
  data () {
    return {
      config: null
    }
  },

  metaInfo () {
    return {
      title: this.title,
      meta: [
        { vmid: 'description', name: 'description', content: this.description }
      ]
    }
  },

  computed: {
    // отображаем элемент из состояния хранилища.
    title () {
      return this.$store.state.item.name
    },
    description () {
      return this.$store.state.item.description
    }
  },

  prefetch (route, store) {
    return Promise.all([
      store.dispatch('fetchItems'),
      store.dispatch('fetchTags'),
      store.dispatch('fetchItem', 'chto-nosili-08-09-2017'),
      store.dispatch('asyncIncrement')
    ]).then(([componentData]) => componentData)
  },

  // won't run on server side
  beforeMount () {
    /*
    can not be defined in data(),
    because the TARGET is different between server side (TARGET: node) and client side (TARGET: web)
    and this will cause the client-side rendered virtual DOM tree not matching server-rendered content
    */
    this.config = JSON.stringify(config, null, 2)
  }
}
</script>
