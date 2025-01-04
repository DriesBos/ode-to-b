<template>
  <section v-editable="blok" class="landinggraphicItem">
    <div class="landinggraphicItem-Container" :class="blok.graphic_alignment">
      <NuxtImg
        v-if="blok.graphic"
        :src="`https:${blok.graphic}`"
        alt=""
        provider="storyblok"
        quality="90"
        loading="lazy"
      />
    </div>
  </section>
</template>

<script setup>
defineProps({ blok: Object });
</script>

<style lang="sass">
.landinggraphicItem
  position: relative
  width: 100%
  z-index: +1
  color: var(--current-color)
  height: var(--section-min-height)
  &-Container
    display: flex
    align-items: center
    height: 100%
    width: 100%
    img
      height: 100%
      max-width: 100%
      max-height: 100%
    svg
      fill: currentColor !important
    &.left
      justify-content: flex-start
    &.center
      justify-content: center
    &.right
      justify-content: flex-end
</style>
