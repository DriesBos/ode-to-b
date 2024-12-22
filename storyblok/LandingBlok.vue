<template>
  <section v-editable="blok" class="landingItem">
    <div
      v-if="isProject"
      class="img landingItem-Image"
      :class="{ mixBlend: filtered }"
    >
      <NuxtImg
        :src="`https:${blok.image}`"
        :alt="blok.title"
        :class="{ mixBlend: filtered }"
        provider="storyblok"
        quality="90"
        loading="lazy"
      />
    </div>
    <div class="landingItem-Text">
      <h1 v-if="blok.title">{{ blok.title }}</h1>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    blok: Object,
  },
  data() {
    return {
      filtered: true,
    };
  },
  computed: {
    isProject() {
      return this.$route.params.slug.length === 2;
    },
  },
  mounted() {
    this.applyFilter();
    window.addEventListener('scroll', this.applyFilter);
  },
  destroyed() {
    window.removeEventListener('scroll', this.applyFilter);
  },
  methods: {
    applyFilter() {
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      if (
        currentScrollPosition < window.innerHeight * 0.05 ||
        currentScrollPosition === 0 ||
        currentScrollPosition > window.innerHeight * 0.66
      ) {
        this.filtered = true;
      } else {
        this.filtered = false;
      }
    },
  },
};
</script>

<style lang="sass">
.landingItem
  position: relative
  width: 100vw
  height: 100vh
  pointer-events: none
  color: white
  &-Image
    position: absolute
    left: 0
    top: 0
    width: 100%
    height: 100%
    object-fit: cover
    transition: background-color 1s ease
    will-change: background-color
    background-color: white
    &.mixBlend
      background-color: var(--filter-color) !important
    img
      position: absolute
      width: 100%
      height: 100%
      object-fit: cover
      will-change: opacity
      transition: opacity $transition-scroll-filter
      mix-blend-mode: multiply
  &-Text
    position: absolute
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    left: 0
    top: 0
    right: 0
    bottom: 0
    padding: var(--spacing-three)
    text-transform: uppercase
    text-align: center
    h1
      font-weight: 400
</style>
