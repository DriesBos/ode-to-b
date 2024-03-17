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
  // &-Item
  //   padding: 1rem 1.5rem
  //   background: var(--current-color)
  //   border-radius: 1000px
  //   color: var(--second-color)
  //   transition: color $transition-hover, background $transition-hover
  //   min-width: 14rem
  //   &:hover
  //     background: var(--second-color)
  //     color: var(--current-color)
  //   h3
  //     text-align: center
  //     transform: translateY(-0.1rem)
  //     font-size: 1.66em !important
</style>
