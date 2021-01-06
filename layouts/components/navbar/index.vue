<template>
  <section class="container">
    <section class="flex flex--justify-space-between flex--align-center py-4">
      <section>
        <nuxt-link class="text--black" to="/">
          <h3>Dwi Nugroho</h3>
        </nuxt-link>
      </section>
      <section class="flex flex--align-center flex--justify-end">
        <section class="navbar-menu flex flex--align-center flex--justify-end">
          <nuxt-link
            v-for="(item, index) in menu"
            :key="index"
            class="navbar-menu__item text--black ml-3"
            :to="item.path"
          >
            <p class="text--weight-500 text--capitalize mb-0">
              {{ item.title }}
            </p>
          </nuxt-link>
        </section>
        <section class="flex flex--align-center flex--justify-end ml-4">
          <a class="text--black ml-3" href="#">
            <svg-icon
              :name="`icons/linkedin`"
              title="linkedin"
              width="20px"
              height="20px"
              class="mb-0"
            />
          </a>
          <a class="text--black ml-3" href="#">
            <svg-icon
              :name="`icons/github`"
              title="linkedin"
              width="20px"
              height="20px"
              class="mb-0"
            />
          </a>
        </section>
      </section>
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
        title: 'Articles',
        path: '/articles',
      },
      {
        title: 'About',
        path: '/about',
      },
    ],
  }),
});
</script>

<style lang="scss" scoped>
.navbar-menu {
  @include breakpoint-down(md) {
    display: none;
  }
  &__item {
    padding: 4px 8px 2px 8px;
    border-radius: 4px;
    &:hover {
      background-color: lighten($color: $lighter-black, $amount: 4%);
    }
  }
}

.active-route,
.nuxt-link-active {
  background-color: $lighter-black !important;
}
</style>
