<template>
  <section class="listItem-Container">
    <p>LIST CONTAINER (add storybloik component)</p>
  </section>
</template>

<script setup>
defineProps({ blok: Object });
</script>

<style lang="sass">
.listItem
  &-Single
    display: flex
    justify-content: center
    align-items: center
    padding-top: var(--spacing-three)
    padding-bottom: var(--spacing-three)
    padding-left: var(--side-spacing)
    padding-right: var(--side-spacing)
    h3.DINRg, h4.DINRg, h5.DINRg
      font-family: "DINRg", Helvetica, Arial, sans-serif
      text-transform: uppercase
      display: block
  svg
    height: 90%

.listItem-Text
  display: flex
  flex-direction: column
  align-items: flex-start
  width: 100%

.listItem-Container
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  padding-top: var(--spacing-three)
  padding-bottom: var(--spacing-three)
  padding-left: var(--side-spacing)
  padding-right: var(--side-spacing)
  .listItem-Single
    padding: 0
</style>
