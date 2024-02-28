<template>
  <section v-editable="blok" class="landingItem">
    <p>LANDING BLOK</p>
  </section>
</template>

<script setup>
defineProps({ blok: Object });
</script>

<style lang="sass">
.landingItem
  width: 100vw
  height: 100vh
  z-index: -5
  background: rgba(0,0,0,0)
  transition: background $transition-scroll-filter
  will-change: background
  pointer-events: none
  .vueLazy
    width: 100%
    height: 100%
  img
    width: 100%
    height: 100%
    object-fit: cover
  &-Text
    position: absolute
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    left: 0
    top: 0
    right: 0
    bottom: 0
    padding: var(--spacing-three)
    text-transform: uppercase
    text-align: center
.view-Home .landingItem,
.view-Brands .landingItem,
.view-People .landingItem,
.view-Art .landingItem
  position: sticky
  top: 0
.view-Single .landingItem
  position: relative
  background-color: rgba(0,0,0,0)
  transition: background-color $transition-filter
  will-change: background-color
  img
    mix-blend-mode: multiply
  &.filter
    background-color: var(--filter-color)
  // .view-PeopleSingle
  //   .landingItem
  //     border: 5px solid red
  //     img
  //       filter: greyscale(1)
</style>
