<template>
  <NuxtLayout :name="layoutKey" :class="pageColor">
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
const pageFavicon = ref('');

const layoutKey = computed(() => {
  return route.params.slug.length === 2 ? 'projects' : 'default';
});

useHead({
  link: () => [{ rel: 'icon', href: pageFavicon.value }],
});

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
  const timestamp = Date.now();
  switch (route.path) {
    case '/':
      pageColor.value = 'red';
      pageFavicon.value = `/icon-red.svg?${timestamp}`;
      break;
    case '/brands':
    case '/brands/':
      pageColor.value = 'blue';
      pageFavicon.value = `/icon-blue.svg?${timestamp}`;
      break;
    case '/art':
    case '/art/':
      pageColor.value = 'red';
      pageFavicon.value = `/icon-red.svg?${timestamp}`;
      break;
    case '/people':
    case '/people/':
      pageColor.value = 'black';
      pageFavicon.value = `/icon-black.svg?${timestamp}`;
      break;
    default:
      pageColor.value = 'black';
      pageFavicon.value = `/icon-black.svg?${timestamp}`;
  }
}

onMounted(() => {
  setColor();
  console.log('mounted', route);
});
</script>
