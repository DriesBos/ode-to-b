<template>
  <template v-if="blok.image.length > 1">
    <section
      :id="blok._uid"
      v-editable="blok"
      class="imageGrid"
      :class="{ removeFilter: blok.unfilter }"
    >
      <ul>
        <li
          v-for="image in blok.image"
          :key="image.filename"
          class="imageGrid-Item"
        >
          <div class="imageGrid-ImageContainer">
            <NuxtImg
              class="portrait imageGrid-ImageItem"
              :src="image.filename"
              alt=""
              provider="storyblok"
              quality="90"
              loading="lazy"
            />
          </div>
        </li>
      </ul>
    </section>
  </template>

  <template v-else>
    <section
      :id="blok._uid"
      v-editable="blok"
      class="imageSingle"
      :class="[[blok.size], [blok.position], { removeFilter: blok.unfilter }]"
    >
      <div class="imageSingle-ImageContainer">
        <NuxtImg
          class="portrait imageSingle-ImageItem"
          :src="blok.image[0].filename"
          alt=""
          provider="storyblok"
          quality="90"
          loading="lazy"
        />
      </div>
    </section>
  </template>
</template>

<script setup>
import { onMounted } from 'vue';
import { gsap } from 'gsap';

onMounted(() => {
  gsap.utils.toArray('.imageGrid-ImageContainer').forEach((image) => {
    gsap.fromTo(
      image,
      { backgroundColor: 'currentColor' },
      {
        backgroundColor: 'white',
        scrollTrigger: {
          trigger: image,
          start: 'top center',
          end: 'center center',
          scrub: true,
        },
      }
    );
  });
  gsap.utils.toArray('.imageSingle-ImageContainer').forEach((image) => {
    gsap.fromTo(
      image,
      { backgroundColor: 'currentColor' },
      {
        backgroundColor: 'white',
        scrollTrigger: {
          trigger: image,
          start: 'top center',
          end: 'center center',
          scrub: true,
        },
      }
    );
  });
});

defineProps({ blok: Object });
</script>

<style lang="sass">
.imageSingle
  position: relative
  width: 100%
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  &-ImageContainer
    background-color: var(--filter-color)
    will-change: background-color
    width: auto
    transition: background-color .33s ease
  &-ImageItem
    mix-blend-mode: multiply
  &.fullscreen
    .imageSingle-ImageContainer
      width: 100%
      height: 100%
    img
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%
      object-fit: cover
  &.size-Large
    .imageSingle-ImageContainer
      width: 100%
  &.size-Medium
    .imageSingle-ImageContainer
      width: 66%
  &.size-Small
    .imageSingle-ImageContainer
      width: 33%
  &.removeFilter
    .imageSingle-ImageContainer
      background-color: transparent !important

.imageGrid
  position: relative
  width: 100%
  &-ImageItem
    mix-blend-mode: multiply
  ul
    display: flex
    flex-wrap: wrap
    width: 100%
    li
      display: flex
      justify-content: center
      align-items: center
      flex-basis: 50%
      @media screen and ( max-width: $breakpoint-mobile)
        flex-basis: 100%
      .imageGrid-ImageContainer
        transition: background-color .33s ease
        background-color: var(--filter-color)
        will-change: background-color
        width: auto
        img
          width: 100%
          height: auto
    @for $i from 1 through 100
      li:nth-child(#{$i})
        .imageGrid-ImageContainer
          --y: 0
          width: random(40) + 50%
          margin-top: random(200) - 100 + px
          margin-bottom: random(100) + px
          margin-left: random(200) - 100 + px
          transform: translateY(calc( #{var(--y) } * 0.3 ))
          @media screen and ( max-width: $breakpoint-mobile)
            width: 100%
            margin-top: 0
            margin-bottom: var(--site-border-spacing)
            margin-left: 0
    li:first-child, li:nth-child(2)
      .imageGrid-ImageContainer
        @media screen and ( min-width: $breakpoint-mobile)
          margin-top: var(--site-border-spacing)
    li:last-child, li:nth-last-child(2)
      .imageGrid-ImageContainer
        @media screen and ( min-width: $breakpoint-mobile)
          margin-bottom: 0
    li:only-child, li:last-child:nth-child(odd)
      flex-basis: 100%
      .imageGrid-ImageContainer
        width: random(20) + 60%
        @media screen and ( max-width: $breakpoint-mobile)
          width: 100%
          margin-top: 0
          margin-bottom: var(--site-border-spacing)
          margin-left: 0
</style>
