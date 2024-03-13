<template>
  <section v-editable="blok" class="page">
    <p>PAGE TESTY</p>
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
