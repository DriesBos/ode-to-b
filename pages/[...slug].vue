<template>
  <!-- <StoryblokComponent v-if="story" :blok="story.content" /> -->
  <div>RANDOM</div>
</template>

<script setup>
const { slug } = useRoute().params;

// const story = await useAsyncStoryblok(
//   slug && slug.length > 0 ? slug.join('/') : 'home',
//   { version: 'draft' }
// );

console.log('SLUG');
</script>
