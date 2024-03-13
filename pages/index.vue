<script setup>
const story = await useAsyncStoryblok(
  'home',
  { version: 'draft', resolve_relations: 'Article.author' }, // API Options
  { resolveRelations: ['Article.author'], resolveLinks: 'url' } // Bridge Options
);

if (story.value.status) {
  throw createError({
    statusCode: story.value.status,
    statusMessage: story.value.response,
  });
}
</script>

<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
