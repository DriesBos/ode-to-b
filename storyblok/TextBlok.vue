<template>
  <!-- prettier-ignore -->
  <section
    v-editable="blok"
    class="textBlok intersectionObserver"
    :class="{ fullscreen: blok.fullscreen, textCenter: blok.left_alignment, capslock: blok.capslock }"
  >
  <div class="graphic" :class="blok.graphic_alignment">
      <NuxtImg
        v-if="blok.graphic"
        class="skewGraphic"
        :src="`https:${blok.graphic}`"
        alt=""
        quality="90"
        loading="lazy"
      />
    </div>

  <Markdown v-if="blok.text" class="textBlok-Item textBlok-Main" :content="blok.text" />
  <Markdown v-if="blok.fade_in_text"    class="textBlok-Item textBlok-FadeIn"
      :content="blok.fade_in_text" />
  </section>
</template>

<script setup>
const props = defineProps({ blok: Object });
</script>

<style lang="sass">
.textBlok
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  width: 100%
  padding-top: var(--spacing-three)
  padding-bottom: var(--spacing-three)
  padding-left: var(--side-spacing)
  padding-right: var(--side-spacing)
  overflow: hidden
  &-Item
    width: 100%

// @media screen and ( min-width: $breakpoint-mobile)
//   .view-Single
//     .textBlok
//       padding-top: 0
//       padding-bottom: 0

@media screen and ( max-width: $breakpoint-mobile)
  .view-Single
    .textBlok
      padding-bottom: 3em
</style>
