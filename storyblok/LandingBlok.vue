<template>
  <section v-editable="blok" class="landingItem">
    <div v-if="isProject" class="img">
      <NuxtImg
        :src="`https:${blok.image}`"
        :alt="blok.title"
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
    // this.applyFilter();
    // window.addEventListener('scroll', this.applyFilter);
  },
  destroyed() {
    // window.removeEventListener('scroll', this.applyFilter);
  },
  methods: {
    applyFilter() {
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      if (
        currentScrollPosition > window.innerHeight * 0.8 ||
        currentScrollPosition === 0
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
  z-index: -5
  background: rgba(0,0,0,0)
  transition: background $transition-scroll-filter
  will-change: background
  pointer-events: none
  img
    position: absolute
    width: 100%
    height: 100%
    object-fit: cover
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
.page-Default .landingItem,
.page-Default .landingItem,
.page-Default .landingItem,
.page-Default .landingItem
  position: sticky
  top: 0
.page-Project .landingItem
  position: relative
  // background-color: rgba(0,0,0,0)
  // transition: background-color $transition-filter
  // will-change: background-color
  img
    mix-blend-mode: multiply
  // &.filter
  //   background-color: var(--filter-color)
</style>
