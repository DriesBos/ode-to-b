<template>
  <template v-if="blok.image > 0">
    <section :id="blok._uid" v-editable="blok" class="imageGrid">
      <ul>
        <li
          v-for="image in blok.image"
          :key="image.filename"
          class="imageGrid-Item"
        >
          <div class="imageGrid-Item_Placeholder">
            <div>
              <NuxtImg
                class="portrait imageGrid-Item_Image"
                :src="image.filename"
                alt=""
                provider="storyblok"
                quality="90"
                loading="lazy"
              />
            </div>
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
      :class="[[blok.size], [blok.position]]"
    >
      <NuxtImg
        class="portrait imageGrid-Item_Image"
        :src="blok.image[0].filename"
        alt=""
        provider="storyblok"
        quality="90"
        loading="lazy"
      />
    </section>
  </template>
</template>

<script setup>
import { onMounted } from 'vue';
import { gsap } from 'gsap';

onMounted(() => {
  gsap.utils.toArray('.imageGrid-Item_Image').forEach((image) => {
    gsap.fromTo(
      image,
      { opacity: 0.5 },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: image,
          start: 'top center',
          end: 'bottom center',
          scrub: true,
        },
      }
    );
  });
});

defineProps({ blok: Object });
</script>

<style lang="sass">
.imageGrid
  position: relative
  width: 100%
  z-index: -1
  ul
    display: flex
    flex-wrap: wrap
    width: 100%
    padding-left: var(--spacing-two)
    padding-right: var(--spacing-two)
    li
      display: flex
      justify-content: center
      align-items: center
      flex-basis: 50%
      @media screen and ( max-width: $breakpoint-mobile)
        flex-basis: 100%
        transform: translate(0, 0) !important
      .imageGrid-Item_Placeholder
        position: relative
        overflow: visible
        background-color: var(--filter-color)
        transition: background-color $transition-filter
        will-change: background-color, transform
        img
          width: 100%
          height: auto
          overflow: visible
          opacity: 0.5
        &.filter
          background-color: var(--filter-color)
    @for $i from 1 through 100
      li:nth-child(#{$i})
        .imageGrid-Item_Placeholder
          --y: 0
          width: random(40) + 50%
          margin-top: random(200) - 100 + px
          margin-bottom: random(100) + px
          margin-left: random(200) - 100 + px
          transform: translateY(calc( #{var(--y) } * 0.3 ))
          @media screen and ( max-width: $breakpoint-mobile)
            width: 100%
            margin-top: 0
            margin-bottom: var(--spacing-one)
            margin-left: 0
    li:first-child, li:nth-child(2)
      .imageGrid-Item_Placeholder
        @media screen and ( min-width: $breakpoint-mobile)
          margin-top: var(--spacing-three)
    li:last-child, li:nth-last-child(2)
      .imageGrid-Item_Placeholder
        @media screen and ( min-width: $breakpoint-mobile)
          margin-bottom: 0
    li:only-child, li:last-child:nth-child(odd)
      flex-basis: 100%
      .imageGrid-Item_Placeholder
        width: random(20) + 60%
        @media screen and ( max-width: $breakpoint-mobile)
          width: 100%
          margin-top: 0
          margin-bottom: var(--spacing-one)
          margin-left: 0

.imageSingle
  position: relative
  width: 100%
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  &.fullscreen
    img
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%
      object-fit: cover
  &.size-Large
    img
      width: 100%
  &.size-Medium
    img
      width: 66%
  &.size-Small
    img
      width: 33%
</style>
