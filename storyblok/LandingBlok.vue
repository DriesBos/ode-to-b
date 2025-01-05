<template>
  <section
    v-editable="blok"
    class="landingItem"
    :class="{ removeFilter: blok.unfilter }"
  >
    <div class="img landingItem-Image">
      <NuxtImg
        :src="`https:${blok.image}`"
        :alt="blok.title"
        provider="storyblok"
        quality="90"
        loading="lazy"
      />
    </div>
    <div class="landingItem-Text">
      <h1 v-if="blok.title">{{ blok.title }}</h1>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';
import { gsap } from 'gsap';

onMounted(() => {
  gsap.utils.toArray('.landingItem-Image').forEach((image) => {
    gsap.fromTo(
      image,
      { backgroundColor: 'currentColor' },
      {
        backgroundColor: 'white',
        scrollTrigger: {
          trigger: image,
          start: 'top top',
          end: 'bottom 99%',
          scrub: true,
        },
      }
    );
  });
});

defineProps({ blok: Object });
</script>

<style lang="sass">
.page-Default
  .landingItem
    height: calc(100svh - (4 * #{var(--site-border-spacing)}))
.page-Project
  .landingItem
    height: calc(100svh - (2 * #{var(--site-border-spacing)}))

.landingItem
  position: relative
  width: 100vw
  pointer-events: none
  color: white
  margin-bottom: var(--site-border-spacing)
  &-Image
    position: absolute
    left: 0
    top: 0
    width: 100%
    height: 100%
    object-fit: cover
    color: var(--filter-color)
    background-color: currentColor
    transition: background-color .33s ease
    will-change: background-color
    img
      position: absolute
      width: 100%
      height: 100%
      object-fit: cover
      mix-blend-mode: multiply
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
    h1
      font-weight: 300
  &.removeFilter
    .landingItem-Image
      background-color: transparent !important
</style>
