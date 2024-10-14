<template>
  <header class="header">
    <nav>
      <ul class="header-Desktop">
        <li class="hovered">
          <NuxtLink to="/" class="hovered">A —</NuxtLink>
        </li>
        <li class="hovered">
          <NuxtLink to="/brands" class="hovered">For Brands</NuxtLink>
        </li>
        <li class="hovered">
          <NuxtLink to="/people" class="hovered">For People</NuxtLink>
        </li>
        <li class="hovered">
          <NuxtLink to="/art" class="hovered">For Art</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="sass">
.header
  position: fixed
  top: 0
  left: 0
  bottom: 0
  width: 100%
  z-index: 699
  pointer-events: none
  nav
    width: 100%
    height: 100%
    padding: calc(2 * #{var(--nav-spacing)})
    border: $test-border
  .header-Desktop
    position: relative
    width: 100%
    height: 100%
    display: flex
    justify-content: flex-end
    border: $test-border
    li
      position: absolute
      // cursor: pointer
      text-transform: uppercase
      pointer-events: auto
      line-height: 0.8
      border: $test-border
      a
        font-weight: 300
    li:nth-child(1)
      top: 0
      left: 0
    li:nth-child(2)
      top: 0
      right: 0
      transform: rotate(90deg) translateX(100%)
      transform-origin: top right
    li:nth-child(3)
      bottom: 0
      left: 0
      transform: rotate(90deg) translateX(-100%)
      transform-origin: bottom left
    li:nth-child(4)
      bottom: 0
      right: 0
  .header-Single
    li
      position: absolute
      text-transform: uppercase
      pointer-events: auto
      top: 0
      left: 0
      padding: var(--spacing-three)
      svg
        transform: rotate(180deg)
        height: 2em
        fill: var(--current-color)
        stroke: rgba(0,0,0,0)
        transition: fill $transition-scroll-fade, stroke $transition-scroll-fade
        overflow: visible
  .nuxt-link-exact-active
    text-decoration: none
  // &.yellow
    // li
    //   color: rgba($color-yellow, 0)
    //   -webkit-text-stroke: 1px rgba($color-yellow, 1)
    //   &.nuxt-link-exact-active,
    //     color: $color-yellow
    //     -webkit-text-stroke: 1px rgba($color-yellow, 0)
    //   &:hover
    //     @media (hover: hover)
    //       color: $color-yellow
    //       -webkit-text-stroke: 1px rgba($color-yellow, 0)
  // &.blue
  //   li
  //     color: rgba($color-blue, 0)
  //     -webkit-text-stroke: 1px rgba($color-blue, 1)
  //     &.nuxt-link-exact-active,
  //       color: $color-blue
  //       -webkit-text-stroke: 1px rgba($color-blue, 0)
  //     &:hover
  //       @media (hover: hover)
  //         color: $color-blue
  //         -webkit-text-stroke: 1px rgba($color-blue, 0)
  //     svg
  //       fill: $color-blue
  // &.red
    // li
    //   color: rgba($color-red, 0)
    //   -webkit-text-stroke: 1px rgba($color-red, 1)
    //   &.nuxt-link-exact-active,
    //     color: $color-red
    //     -webkit-text-stroke: 1px rgba($color-red, 0)
    //   &:hover
    //     @media (hover: hover)
    //       color: $color-red
    //       -webkit-text-stroke: 1px rgba($color-red, 0)
    //   svg
    //     fill: $color-red
  // &.white
  //   li
  //     color: rgba(white, 0)
  //     -webkit-text-stroke: 1px rgba(white, 1)
  //     &.nuxt-link-exact-active,
  //       color: white
  //       -webkit-text-stroke: 1px rgba(white, 0)
  //     &:hover
  //       @media (hover: hover)
  //         color: white
  //         -webkit-text-stroke: 1px rgba(white, 0)
</style>
