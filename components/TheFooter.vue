<template>
  <section id="theFooter" class="footer" :class="{ visible: isVisible }">
    <ul>
      <li>Site</li>
      <li class="hovered links">
        <NuxtLink to="/">Home</NuxtLink>
      </li>
      <li class="hovered links">
        <NuxtLink to="/brands">For Brands</NuxtLink>
      </li>
      <li class="hovered links">
        <NuxtLink to="/art">For Art</NuxtLink>
      </li>
      <li class="hovered links">
        <NuxtLink to="/people">For People</NuxtLink>
      </li>
      <li class="hovered links" target="_blank">
        <a href="https://shop.odetoa.com/collections/frontpage">Shop</a>
      </li>
    </ul>
    <ul>
      <li>Reach Us</li>
      <li class="hovered links">
        <a href="mailto:hi@odetoa.com">hi@odetoa.com</a>
      </li>
      <li class="hovered links">
        <a
          href="https://wa.me/31630108213?text=Hi%20Ode%20to%20A!"
          target="_blank"
          >WhatsApp</a
        >
      </li>
      <br />
      <li class="hovered">Amsterdam</li>
      <li class="hovered">Accra (Ghana)</li>
      <li class="hovered">The world</li>
    </ul>
    <ul
      v-if="
        general[0].content.instagram ||
        general[0].content.facebook ||
        general[0].content.linkedin
      "
    >
      <li>Follow Us</li>
      <li v-if="general[0].content.instagram" class="hovered links">
        <a
          :href="general[0].content.instagram"
          target="_blank"
          title="instagram"
          rel="noreferrer"
          >Instagram</a
        >
      </li>
      <li v-if="general[0].content.linkedin" class="hovered links">
        <a
          :href="general[0].content.linkedin"
          target="_blank"
          title="instagram"
          rel="noreferrer"
          >LinkedIn</a
        >
      </li>
    </ul>
    <!-- <ul>
      <li>&nbsp;</li>
      <li class="hovered links" @click="toggleFooterModalTerms"></li>
      <li class="hovered links" @click="toggleFooterModalMadeby"></li>
    </ul> -->
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue';

const general = ref(null);

const scrollPosition = ref(0);
const clientHeight = ref(0);
const totalScrollableHeight = ref(0);

const isVisible = ref(false);
const storyblokApi = useStoryblokApi();
const { data } = await storyblokApi.get('cdn/stories/', {
  version: 'draft',
  starts_with: 'general',
  is_startpage: false,
});

const updateDimensions = () => {
  clientHeight.value = window.innerHeight;
  totalScrollableHeight.value = document.documentElement.scrollHeight;
};

const handleScroll = () => {
  scrollPosition.value = window.scrollY;
  if (
    scrollPosition.value + clientHeight.value >=
    totalScrollableHeight.value
  ) {
    isVisible.value = true;
  } else {
    isVisible.value = false;
  }
};

onMounted(() => {
  updateDimensions();
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', updateDimensions);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener('resize', updateDimensions);
});

// watch(scrollPosition, (newValue, oldValue) => {});

general.value = data.stories;

// function toggleFooterModalAmsterdam() {
//   this.$emit('update', {
//     title: general[0].content.amsterdam,
//     text: general[0].content.amsterdam_text,
//   });
// }
// function toggleFooterModalMexico() {
//   this.$emit('update', {
//     title: general[0].content.mexico,
//     text: general[0].content.mexico_text,
//   });
// }
// function toggleFooterModalGhana() {
//   this.$emit('update', {
//     title: general[0].content.ghana,
//     text: general[0].content.ghana_text,
//   });
// }
// function toggleFooterModalTerms() {
//   this.$emit('update', {
//     title: general[0].content.terms_title,
//     text: general[0].content.terms_text,
//   });
// }
// function toggleFooterModalMadeby() {
//   this.$emit('update', {
//     title: general[0].content.madeby_title,
//     text: general[0].content.madeby_text,
//   });
// }
// function TheFooterCursor() {
//   let cursor = document.querySelector('.cursor');
//   cursor.classList.add('thefootercursor');
// }
// function removeTheFooterCursor() {
//   let cursor = document.querySelector('.cursor');
//   cursor.classList.remove('thefootercursor');
// }
</script>

<style lang="sass">
.footer
  position: relative
  z-index: 997
  display: flex
  flex-direction: row
  flex-wrap: wrap
  justify-content: flex-start
  align-items: flex-start
  background: white
  color: var(--current-color)
  border-top: 1px solid var(--current-color)
  padding: calc(3 * #{var(--site-border-spacing)})
  overflow: hidden
  ul
    display: flex
    flex-direction: column
    align-items: flex-start
    flex: 1 1 0px
    @media screen and ( max-width: $breakpoint-mobile)
      flex-basis: 50%
      padding-bottom: var(--spacing-three)
    li
      &:first-child
        text-transform: uppercase
        font-weight: 300
      &.links, a
        font-weight: 500
    &:nth-child(1)
      @media screen and ( max-width: $breakpoint-mobile)
        order: 1
    &:nth-child(2)
      @media screen and ( max-width: $breakpoint-mobile)
        order: 3
    &:nth-child(3)
      @media screen and ( max-width: $breakpoint-mobile)
        order: 2
</style>
