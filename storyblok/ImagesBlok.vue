<template>
  <!-- prettier-ignore -->
  <section class="imageGrid">
    <p>IMAGES BLOK</p>
  </section>
</template>

<script setup>
defineProps({ blok: Object });
</script>

<style lang="sass">

.imageGrid
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
          mix-blend-mode: multiply
        &.filter
          background-color: rgba(0,0,0,0)
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
</style>
