<template lang="pug">
  .foo
    .test this is pug template
    p this.id: {{id}}
    p this.$store.state.count: {{$store.state.count}}
    p this.$store.state: {{$store.state}}
    p Enviroment Variables Defined by webpack.DefinePlugin:
    pre.
      \n{{config}}
    p
      router-link(to='/') goto /

    .post(v-for='post of $store.state.items')
      h3.post__title {{ post.title }}
      p.post__body {{ post.body }}
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
      id: 0,
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

  // created() {
  //   HTTP.get('posts')
  //   .then(response => {
  //     this.posts = response.data
  //   })
  //   .catch(e => {
  //     this.errors.push(e)
  //   })
  // },

  // asyncData({ store }) {
  //   // возвращаем Promise из действия
  //   return store.dispatch('fetchItem')
  // },
  //
  // computed: {
  //   // отображаем элемент из состояния хранилища.
  //   items() {
  //     return this.$store.state.items
  //   }
  // },

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
      store.dispatch('fetchItem'),
      store.dispatch('asyncIncrement')
    ]).then(([componentData]) => componentData)
  },

  // won't run on server side
  beforeMount () {
    console.log(this.a) //eslint-disable-line

    /*
    can not be defined in data(),
    because the TARGET is different between server side (TARGET: node) and client side (TARGET: web)
    and this will cause the client-side rendered virtual DOM tree not matching server-rendered content
    */
    this.config = JSON.stringify(config, null, 2)
  }
}
</script>
