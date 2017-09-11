<template lang="pug">
  .list
    .test posts
    .post(v-for='post of $store.state.items')
      router-link(:to="{ name: 'post', params: { code: post.code } }") {{ post.name }}
      p.post__body {{ post.preview_text }}
</template>

<style lang="sass">
  .post
    &__title
      color: green
    &__body
      color: #333
</style>

<script>

import config from '~/config'

export default {
  data () {
    return {
      items: [],
      title: '',
      description: '',
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

  prefetch (route, store) {
    return Promise.all([
      new Promise(resolve => {
        setTimeout(() => {
          resolve({
            title: 'title async loaded',
            description: 'description async loaded'
          })
        })
      }),
      store.dispatch('fetchItems'),
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
