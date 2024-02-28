<template>
  <section v-editable="blok" class="messageBlok">
    <p>MESSAGE BLOK</p>
  </section>
</template>

<script setup>
defineProps({ blok: Object });
</script>

<style lang="sass">

.messageBlok
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  width: 100%
  padding-top: var(--spacing-three)
  padding-bottom: var(--spacing-three)
  padding-left: var(--side-spacing)
  padding-right: var(--side-spacing)
  min-height: 100vh
  text-align: center
  overflow: hidden
  &-Header
    text-transform: uppercase
  .markdown
    h1, h2, h3, h4
      margin-bottom: 0
  &-Text
    margin-bottom: var(--spacing-three)
  &-Graphic
    display: flex
    align-self: flex-start
    overflow: visible
    > div
      margin-right: 25vmin
    svg
      height: 30vmin
      overflow: visible
</style>
