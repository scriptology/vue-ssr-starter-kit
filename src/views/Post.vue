<template lang="pug">
  .post
    .test post
    div(v-if="item")
      h1.post__title {{ item.title }}
      div.post__body {{ item.body }}
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
      title: '',
      description: '',
      id: 0,
      config: null
    }
  },

  asyncData ({ store, route }) {
    // возвращаем Promise из действия
    if (route.params.id) {
      return store.dispatch('fetchItem', route.params.id)
    }
  },

  computed: {
    // отображаем элемент из состояния хранилища.
    item () {
      return this.$store.state.items[this.$route.params.id]
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
            id: route.params.id
          })
        })
      }),
      store.dispatch('fetchItem', route.params.id),
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
