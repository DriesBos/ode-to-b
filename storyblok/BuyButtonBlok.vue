<template>
  <!-- prettier-ignore -->
  <section
    v-editable="blok"
    class="buyButtonBlok hovered"
    :class="{ fullscreen: blok.fullscreen }"
  >
    <div class="buyButtonBlok-Item">

      <div v-html="code" />
    </div>
  </section>
</template>

<script setup>
const props = defineProps({ blok: Object });

const code = ref(props.blok.code);
</script>

<style lang="sass">
.buyButtonBlok
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  width: 100%
  padding-top: var(--spacing-one)
  padding-bottom: var(--spacing-one)
  padding-left: var(--side-spacing)
  padding-right: var(--side-spacing)
</style>
