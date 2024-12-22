<template>
  <section class="blok-Container" :class="{ fullscreen: blok.fullscreen }">
    <StoryblokComponent
      v-for="blok in blok.body"
      :key="blok._uid"
      :blok="blok"
    />
    <template v-if="blok.overlay">
      <StoryblokComponent
        v-for="blok in blok.overlay"
        :key="blok._uid"
        :blok="blok"
        class="blok-Overlay"
      />
    </template>
  </section>
</template>

<script setup>
defineProps({ blok: Object });
</script>

<style lang="sass">
.blok
  &-Container
    position: relative
    border: $test-border
    display: flex
    flex-wrap: no-wrap
    & > section
      border: $test-border
      max-width: 50%
  &-Overlay, &-Overlay.section
    position: absolute !important
    top: 0
    left: 0
    width: 100%
    max-width: 100% !important
    height: 100%
</style>
