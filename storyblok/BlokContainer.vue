<template>
  <section
    class="blok-Container"
    :class="{ fullscreen: blok.fullscreen }"
    :data-columns="blok.body.length"
  >
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
    display: flex
    flex-wrap: no-wrap
    border: 0
    @media screen and ( max-width: $breakpoint-mobile)
      flex-direction: column
      gap: var(--section-gap)
    & > section
      @media screen and ( min-width: $breakpoint-mobile)
        flex-grow: 1
    // Random witdth values calculated in main body.css
  &-Overlay, &-Overlay.section
    position: absolute !important
    top: 0
    left: 0
    width: 100%
    max-width: 100% !important
    height: 100%
</style>
