<template>
  <section v-editable="blok" class="landingItem">
    <div v-if="isProject" class="img">
      <NuxtImg
        :src="`https:${blok.image}`"
        :alt="blok.title"
        :class="{ filter: filtered }"
        provider="storyblok"
        quality="90"
        loading="lazy"
      />
    </div>
    <div class="landingItem-Text">
      <h1 v-if="blok.title">{{ blok.title }}</h1>
    </div>
    <div class="landingItem-Caption">
      <p v-if="blok.categories">{{ blok.categories }}</p>
      <p v-if="blok.timeframe">{{ blok.timeframe }}</p>
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
  z-index: -5
  background-color: var(--filter-color)
  // transition: background $transition-scroll-filter
  // will-change: background
  pointer-events: none
  color: white
  img
    position: absolute
    width: 100%
    height: 100%
    object-fit: cover
    opacity: 1
    will-change: background
    transition: opacity $transition-scroll-filter
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
    p
      font-weight: 400
  &-Caption
    position: absolute
    left: 0
    top: 0
    right: 0
    bottom: 0
    padding: var(--spacing-three)
    width: 100%
    display: flex
    flex-direction: column
    justify-content: flex-end
    align-items: flex-start
    gap: 1rem
    & > p
      font-weight: 400
      width: 100%
      font-size: 1rem
      text-transform: uppercase
  .filter
    opacity: 0.2

// .page-Default .landingItem,
// .page-Default .landingItem,
// .page-Default .landingItem,
// .page-Default .landingItem
//   position: sticky
//   top: 0
// .page-Project .landingItem
//   position: relative
//   background-color: rgba(0,0,0,0)
//   transition: background-color $transition-filter
//   will-change: background-color
  // img
  //   opacity: 1
  // & .filter
  //   img
  //     opacity: 0.2
</style>
