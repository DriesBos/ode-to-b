<template>
  <section v-editable="blok" class="page page-Default">
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
  &-Default
    padding-left: calc(3 * #{var(--site-border-spacing)})
    padding-top: calc(2 * #{var(--site-border-spacing)})
    padding-right: calc(3 * #{var(--site-border-spacing)})
    padding-bottom: calc(1 * #{var(--site-border-spacing)})
</style>
