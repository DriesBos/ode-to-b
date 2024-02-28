<template>
  <!-- prettier-ignore -->
  <section v-editable="blok" class="videoItem">
<p>VIDEO BLOK</p>
  </section>
</template>

<script setup>
defineProps({ blok: Object });
</script>

<style lang="sass">

.videoItem
  position: relative
  display: flex
  justify-content: center
  padding-left: var(--spacing-two)
  padding-right: var(--spacing-two)
  margin-bottom: var(--spacing-one)
  &-Container
    position: relative
    width: random(20) + 50%
    @media screen and ( max-width: $breakpoint-mobile)
      width: 100%
  &-AspectRatioBox
    height: 0
    padding-top: 56.25%
    background-color: rgba(0,0,0,0)
    transition: background-color $transition-filter
  iframe
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    box-sizing: border-box
    opacity: 1
    transition: opacity $transition-filter
  & .filter
    background-color: var(--filter-color)
    iframe
      opacity: .25
</style>
