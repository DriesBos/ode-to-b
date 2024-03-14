<template>
  <header class="header">
    <nav>
      <ul class="header-Single">
        <li @click="handleClick">
          <svg viewBox="0 0 46.65 37.7">
            <g data-name="Laag 2">
              <path
                d="M27.8,37.7H17.55l15.2-15H0V15H32.75L17.55,0H27.8L46.65,18.85Z"
                data-name="Laag 1"
              />
            </g>
          </svg>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
const router = useRouter();

function handleClick() {
  router.back();
  console.log('router', router);
}
// export default {
//   data() {
//     return {
//       arrowFilled: true,
//     };
//   },
//   mounted() {
//     console.log(this.$route);
//   },
//   methods: {
//     singlePageArrowColor() {
//       const currentScrollPosition =
//         window.pageYOffset || document.documentElement.scrollTop;
//       if (currentScrollPosition < window.innerHeight * 0.3) {
//         this.arrowFilled = true;
//       } else {
//         this.arrowFilled = false;
//       }
//     },
//   },
// };
</script>

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
    padding: 5vw
  .header-Desktop
    position: relative
    width: 100%
    height: 100%
    display: flex
    justify-content: flex-end
    li
      position: absolute
      // cursor: pointer
      text-transform: uppercase
      line-height: 1
      pointer-events: auto
    li:nth-child(1)
      top: 0
      left: 0
    li:nth-child(2)
      top: 0
      right: 0
      transform: rotate(90deg) translateY(-4em)
      transform-origin: 15% 100%
    li:nth-child(3)
      bottom: 0
      left: 0
      transform: rotate(90deg) translateY(4em)
      transform-origin: 85% 0%
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
