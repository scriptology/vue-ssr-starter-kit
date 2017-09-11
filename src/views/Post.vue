<template lang="pug">
  .post(v-if="item")
    .test post
    div
      h1.post__title {{ item.name }}
      div.post__body {{ item.preview_text }}
</template>

<style lang="sass">
  .post
    &__title
      color: green
    &__body
      color: #ccc
</style>

<script>

import config from '~/config'

export default {
  data () {
    return {
      name: '',
      preview_text: '',
      code: '',
      config: null
    }
  },

  asyncData ({ store, route }) {
    // возвращаем Promise из действия
    if (route.params.code) {
      return store.dispatch('fetchItem', route.params.code)
    }
  },

  computed: {
    // отображаем элемент из состояния хранилища.
    item () {
      return this.$store.state.item
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
            description: 'description async loaded',
            code: route.params.code
          })
        })
      }),
      store.dispatch('fetchItem', route.params.code),
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
    this.item = {}
    this.config = JSON.stringify(config, null, 2)
  }
}
</script>
