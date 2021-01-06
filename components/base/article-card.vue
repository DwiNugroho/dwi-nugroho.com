<template>
  <section class="art-card width--100">
    <nuxt-link :to="slug">
      <section class="art-card__thumbnail position--relative mb-4">
        <div class="art-card__overlay"></div>
        <img
          :src="require(`${'@/assets/img/cover/BEM-cover.png'}`)"
          :alt="title"
        />
      </section>
    </nuxt-link>
    <nuxt-link class="text--black" :to="slug">
      <span :title="title">
        <h3 class="art-card__title">
          {{ title }}
        </h3>
      </span>
    </nuxt-link>
    <p class="art-card__description text--light-black">{{ description }}</p>
  </section>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'ArticlesCard',
  props: {
    thumbnail: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    date: {
      type: String,
      default: '',
    },
    slug: {
      type: String,
      default: '',
    },
  },
  methods: {
    getThumbnail() {
      try {
        return require(this.thumbnail);
      } catch (error) {
        return null;
      }
    },
  },
});
</script>

<style lang="scss">
.art-card {
  &__overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 9999;
    &:hover {
      background-color: rgba($color: $black, $alpha: 0.08);
    }
  }
  &__thumbnail {
    width: 100%;
    height: 280px;
    background: $lighter-orange;
    border-radius: 4px;
    border: 1px solid $lighter-black;
    // padding: 4% 0 0 4%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 4px;
      // box-shadow: -2px -2px 4px -4px rgba($color: $black, $alpha: 1);
    }
  }

  &__title {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    &:hover {
      color: $red;
    }
  }

  &__description {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
}
</style>
