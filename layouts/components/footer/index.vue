<template>
  <section class="container">
    <hr />
    <section
      class="footer flex flex--align-center flex--justify-center flex--wrap py-4 mb-5"
    >
      <a
        v-for="(item, index) in menu"
        :key="index"
        href="#"
        class="footer__menu text--black p-2 mx-3 text--center text--weight-500"
      >
        {{ item.title }}
      </a>
    </section>
  </section>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'Navbar',
  data: () => ({
    menu: [
      {
        title: 'Medium',
        link: '#',
      },
      {
        title: 'Github',
        link: '#',
      },
      {
        title: 'Instagram',
        link: '#',
      },
      {
        title: 'LinkedIn',
        link: '#',
      },
    ],
  }),
});
</script>

<style lang="scss" scoped>
.footer {
  &__menu {
    &:hover {
      color: $blue;
    }
  }
}
</style>
