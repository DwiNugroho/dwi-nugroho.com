<template>
  <section>
    <section class="main mt-5">
      <h1 class="main__title">Hello, I'm Dwi Nugroho</h1>
      <p class="main__subtitle text--light-black" style="max-width: 700px">
        Web developer specializing in modern JavaScript. I build things with
        code, make digital products to improve how humans living their life.
      </p>
    </section>
    <br />
    <br /><br />
    <section
      class="flex flex--align-stretch flex--wrap flex--justify-space-between"
    >
      <section
        v-for="(item, index) in [...articles, ...articles, ...articles]"
        :key="index"
        class="width--45 mb-4"
      >
        <dwi-article-card
          :thumbnail="item.cover"
          :title="item.title"
          :description="item.description"
          :date="item.date"
          :slug="item.slug"
        />
      </section>
    </section>
    <br /><br />
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Home',
  async asyncData({ $content }) {
    const articles = await $content('articles')
      .only(['title', 'description', 'date', 'slug', 'cover'])
      .fetch();
    return { articles };
  },
});
</script>

<style lang="scss" ArticleCardscoped>
//
</style>
