<template lang="pug">
  div
    h1 Articles
    hr
    div
      strong.list__name Article:
      h2(v-html="$store.state.item.name")
      p(v-html="$store.state.item.preview_text")
    hr
    .tags
      strong.tags__name Tags:
      .tags__item(v-for='tag of $store.state.tags')
        span {{tag.name}}
    hr
    .list
      strong.list__name List:
      .list__item(v-for='post of $store.state.items')
        h3(v-html="post.name")
        p {{ post.preview_text }}
        img(:src="post.image.preview_url")
</template>
