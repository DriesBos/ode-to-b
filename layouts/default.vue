<template>
  <main :class="pageColor">
    <TheHeader :class="pageColor" />
    <!-- <TheSVGCarousel :class="pageColor" /> -->
    <h1>LAYOUT DEFAULT</h1>
    <slot />
    <TheFooter />
  </main>
</template>

<script>
import gsap from 'gsap';

export default {
  data() {
    return {
      pageColor: 'yellow',
      footerModal: false,
      footerModalTitle: '',
      footerModalText: '',
    };
  },
  watch: {
    $route() {
      this.setpageColor();
    },
  },
  created() {
    this.setpageColor();
  },
  methods: {
    setpageColor() {
      if (this.$route.path !== '/brands' && this.$route.path !== '/') {
        this.pageColor = 'black';
      } else if (
        this.$route.path === '/' ||
        this.$route.path === '/home' ||
        this.$route.path === '/home/'
      ) {
        this.pageColor = 'yellow';
      } else if (
        this.$route.path === '/brands' ||
        this.$route.path === '/brands/' ||
        this.$route.name === 'brands-slug'
      ) {
        this.pageColor = 'blue';
      } else if (
        this.$route.path === '/people' ||
        this.$route.path === '/people/'
      ) {
        this.pageColor = 'white';
      } else if (
        this.$route.path === '/art' ||
        this.$route.path === '/art/' ||
        this.$route.name === 'art-slug'
      ) {
        this.pageColor = 'red';
      } else {
        this.pageColor = 'black';
      }
      console.log('pageColor: ', this.pageColor);
    },
  },
};
</script>
