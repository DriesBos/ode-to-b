<template>
  <section class="blok-Container">
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

<style lang="sass">
.blok-Container
  border: $test-border
  display: flex
  flex-wrap: no-wrap
  & > div, & > section
    border: $test-border
    flex-basis: 50%
</style>
