<template>
  <NuxtLayout :class="pageColor">
    <NuxtPage />
    <TheFooter />
  </NuxtLayout>
</template>

<script setup>
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const route = useRoute();
const nuxtApp = useNuxtApp();

const pageColor = ref('red');

useSeoMeta({
  title: 'Ode to A',
  ogTitle: 'Ode to A',
  description:
    'Ode to A is a vision, an attitude, an art, an agency. We stand up for those who choose fire. The ones who are ready and willing to express their their most powerful essence into presence. With conviction, with confidence, with full ownership.',
  ogDescription:
    'Ode to A is a vision, an attitude, an art, an agency. We stand up for those who choose fire. The ones who are ready and willing to express their their most powerful essence into presence. With conviction, with confidence, with full ownership.',
  ogImage:
    'https://a.storyblok.com/f/73133/5334x7997/a48549f3b6/skins-brand-image-04-by-michael-oliver-love.jpg',
});

nuxtApp.hook('page:finish', () => {
  window.scrollTo(0, 0);
});

watch(
  () => route.fullPath,
  () => {
    setColor();
  }
);

function setColor() {
  if (route.path == '/') {
    pageColor.value = 'red';
  } else if (route.params.slug[0] === 'brands') {
    pageColor.value = 'blue';
  } else if (route.params.slug[0] === 'art') {
    pageColor.value = 'red';
  } else if (route.params.slug[0] === 'people') {
    pageColor.value = 'black';
  } else {
    pageColor.value = 'black';
  }
}

onMounted(() => {
  // setInterval(setColor, 10000);
  setColor();
});

// let colorIndex = 0;
// const colors = ['black', 'blue', 'red', 'ghana', 'black'];

// function setColor() {
//   let color = colors[colorIndex];
//   colorIndex = (colorIndex + 1) % colors.length;
//   return (pageColor.value = color);
// }
</script>
