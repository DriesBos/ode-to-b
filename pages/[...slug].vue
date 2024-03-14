<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>

<script setup>
const { slug } = useRoute().params;

if (slug.length == 2 && slug[1] !== '') {
  setPageLayout('projects');
} else {
  setPageLayout('default');
}

const story = await useAsyncStoryblok(
  slug && slug.length > 0 ? slug.join('/') : 'home',
  { version: 'draft' }
);
</script>
