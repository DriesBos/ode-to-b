<template>
  <section v-editable="blok" class="page-Single">
    <h1>PAGE PROJECT</h1>
    <StoryblokComponent
      v-for="blok in blok.body"
      :key="blok._uid"
      :blok="blok"
    />
  </section>
</template>

<script setup>
defineProps({ blok: Object });
</script>
