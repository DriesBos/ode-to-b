<template>
  <span
    :id="blok._uid"
    v-editable="blok"
    class="projectList-Single hovered"
    @mouseover="mouseEntered"
  >
    <nuxt-link
      v-if="blok.hyperlink.linktype === 'story'"
      :to="'/' + blok.hyperlink.cached_url"
      class="content"
      >{{ blok.title }}</nuxt-link
    >
    <a
      v-else
      :href="blok.hyperlink.cached_url"
      class="content"
      rel="noreferrer"
      >{{ blok.title }}</a
    >

    <div class="projectList-Single_Image">
      <NuxtImg
        v-if="blok.image"
        :src="`https:${blok.image}`"
        :alt="blok.title"
        provider="storyblok"
        quality="90"
        loading="lazy"
      />
    </div>
  </span>
</template>

<script>
export default {
  props: {
    blok: Object,
  },
  data() {
    return {
      isActive: false,
    };
  },
  mounted() {
    // window.addEventListener('scroll', this.ifViewportCenter);
  },
  destroyed() {
    // window.removeEventListener('scroll', this.ifViewportCenter);
  },
  methods: {
    // ifViewportCenter() {
    //   var windowHeight =
    //     window.innerHeight || document.documentElement.clientHeight;
    //   var windowHalf = windowHeight / 2;
    //   var el = document.getElementById(this.blok._uid);
    //   var bounding = el.getBoundingClientRect();
    //   if (
    //     bounding.top - windowHalf <= 0 &&
    //     bounding.top - windowHalf >= 0 - bounding.height
    //   ) {
    //     el.classList.add('active');
    //   } else {
    //     el.classList.remove('active');
    //   }
    // },
    // mouseEntered() {
    //   var allSingles = document.querySelectorAll('.projectList-Single');
    //   allSingles.forEach((el) => {
    //     el.classList.remove('active');
    //   });
    //   document.getElementById(this.blok._uid).classList.add('active');
    // },
  },
};
</script>
