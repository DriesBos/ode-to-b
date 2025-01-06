<template>
  <section v-editable="blok" class="page page-Project">
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

<style lang="sass" scoped>
.page
  &-Project
    padding: var(--site-border-spacing)
    padding-bottom: calc(3 * #{var(--site-border-spacing)})
</style>
