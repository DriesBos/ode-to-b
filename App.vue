<template>
  <NuxtLayout :class="pageColor">
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const route = useRoute();

const pageColor = ref('black');

watch(
  () => route.fullPath,
  () => {
    setColor();
  }
);

// function setColor() {
//   if (route.path == '/') {
//     pageColor.value = 'black';
//   } else if (route.params.slug[0] === 'brands') {
//     pageColor.value = 'blue';
//   } else if (route.params.slug[0] === 'art') {
//     pageColor.value = 'red';
//   } else if (route.params.slug[0] === 'people') {
//     pageColor.value = 'ghana';
//   } else {
//     pageColor.value = 'black';
//   }
// }

onMounted(() => {
  setInterval(setColor, 10000);
});

let colorIndex = 0;
const colors = ['black', 'blue', 'red', 'ghana', 'black'];

function setColor() {
  let color = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length;
  return (pageColor.value = color);
}
</script>
