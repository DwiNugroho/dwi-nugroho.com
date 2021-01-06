<template>
  <article>
    <nuxt-content :document="article" />
  </article>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Content',
  async asyncData({ $content, params }) {
    const article = await $content('articles', `${params.slug}/index`).fetch();
    return { article };
  },
});
</script>
