<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>

<script setup>
const { slug } = useRoute().params;

const story = await useAsyncStoryblok(
  slug && slug.length > 0 ? slug.join('/') : 'home',
  { version: 'draft' }
);

onBeforeMount(() => {
  if (slug.length == 2 && slug[1] !== '') {
    definePageMeta({
      layout: 'projects',
    });
  } else {
    definePageMeta({
      layout: 'default',
    });
  }
});
</script>
