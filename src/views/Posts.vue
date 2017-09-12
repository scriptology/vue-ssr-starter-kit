<template lang="pug">
  div
    h1 vue-ssr-boilerplate
    hr
    div
      strong.list__name Article:
      h2 {{ $store.state.item.name }}
      p {{ $store.state.item.preview_text }}
    hr
    .tags
      strong.tags__name Tags:
      .tags__item(v-for='tag of $store.state.tags')
        span {{tag.name}}
    hr
    .list
      strong.list__name List:
      .list__item(v-for='post of $store.state.items')
        h3 {{ post.name }}
        p {{ post.preview_text }}
        img(:src="post.image.preview_url")
</template>

<style lang="sass">
  body
    font-family: 'Open Sans', sans-serif
    font-size: 14px
    line-height: 1.42857143
  h1
    font-size: 2em
    color: #5288d0
  .list
    background: #efeee9
    padding: 5px
    &__name
      color: #5288d0
      display: block
      margin-bottom: 5px
    &__item
      background: #fff
      padding: 10px
      margin-bottom: 5px

  .tags
    &__name
      color: #5288d0
      display: block
      margin-bottom: 5px
    &__item
      display: inline-block
      padding: 0 10px
      background: #000
      color: #fff
      line-height: 30px
      vertical-align: top
      margin-right: 5px
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
