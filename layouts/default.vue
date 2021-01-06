<template>
  <section class="w-full">
    <Navbar />
    <main class="container main">
      <Nuxt />
    </main>
    <Footer />
  </section>
</template>

<script>
import Vue from 'vue';

import Navbar from './components/navbar/index.vue';
import Footer from './components/footer/index.vue';

export default Vue.extend({
  name: 'DefaultLayout',
  components: {
    Navbar,
    Footer,
  },
});
</script>

<style lang="scss" scoped>
.main {
  min-height: 50vh;
}
</style>
