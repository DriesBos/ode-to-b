<template>
  <header class="the-Prev">
    <nav>
      <ul>
        <li @click="handleClick">
          <!-- <svg viewBox="0 0 46.65 37.7">
            <g data-name="Laag 2">
              <path
                d="M27.8,37.7H17.55l15.2-15H0V15H32.75L17.55,0H27.8L46.65,18.85Z"
                data-name="Laag 1"
              />
            </g>
          </svg> -->

          <svg
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 25 26"
          >
            <g clip-path="url(#a)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M24 13.986H2.822l9.602 9.591-1.413 1.412L.409 14.4l-.001.001L-1 12.996l.002-.002H-1l1.413-1.412h.002L11.011 1l1.407 1.406-9.596 9.584H24v1.996Z"
                fill="currentColor"
              />
            </g>
            <!-- <defs>
              <clipPath id="a">
                <path
                  fill="#fff"
                  transform="translate(0 .5)"
                  d="M0 0h25v25H0z"
                />
              </clipPath>
            </defs> -->
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
.the-Prev
  position: fixed
  top: 0
  left: 0
  z-index: 999
  li
    pointer-events: auto
    padding: calc(2 * #{var(--nav-spacing)})
    border: $test-border
    cursor: pointer
    svg
      // transform: rotate(180deg)
      height: 1.5rem
      fill: var(--current-color)
      // transition: fill $transition-scroll-fade, stroke $transition-scroll-fade
      // overflow: visible
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
