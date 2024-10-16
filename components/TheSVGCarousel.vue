<template>
  <!-- prettier-ignore -->
  <div id="carousel" class="svg-container">
    <svg
      id="theSvg"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      version="1.1"
      preserveAspectRatio="none"
      viewBox="0 0 160 160"
      class="svg-content"
    >
      <defs>
        <!-- prettier-ignore -->
        <path
          id="thePath"
          vector-effect="non-scaling-stroke"
          d="M 0 0 L 160 0 L 160 100 L 0 100 Z"
        />
      </defs>
      <text fill stroke font-size="1em" stroke-width="1">
        <textPath
          id="text-path"
          xlink:href="#thePath"
          method="stretch"
          spacing="auto"
          startOffset="0"
          lengthAdjust="spacingAndGlyphs"
        >
          ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO
          A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE
          TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A
          ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO
          A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE
          TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A
          ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO
          A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE
          TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A
          ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO
          A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE
          TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A
          ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO
          A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE
          TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A
          ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO
          A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE
          TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A
          ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO
          A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE
          TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A
          ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO
          A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE
          TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A
          ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO
          A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE
          TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A
          ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO
          A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE
          TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A
          ODE TO A ODE TO A ODE TO A ODE TO A ODE TO A
        </textPath>
      </text>
    </svg>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';
import gsap from 'gsap';

const router = useRoute();

onMounted(() => {
  setRatioAndPath();
  setScrollTrigger();
  window.addEventListener('resize', setRatioAndPath);
  // window.addEventListener('scroll', onScrollOpacity);
});

onUnmounted(() => {
  window.removeEventListener('resize', setRatioAndPath);
  // window.removeEventListener('scroll', onScrollOpacity);
});

function setRatioAndPath() {
  let width = window.innerWidth;
  let height = window.innerHeight;
  let lastHeight = window.innerWidth * 0.016;
  let shape = document.getElementById('theSvg');
  if (shape) {
    shape.setAttribute('viewBox', `0 0 ${width} ${height}`);
  }
  let path = document.getElementById('thePath');
  let d = `M 0 0 L ${width} 0 L ${width} ${height} L 0 ${height} L 0 ${lastHeight}`;
  if (path) {
    path.setAttribute('d', d);
  }
  let carousel = document.getElementById('carousel');
  setTimeout(function () {
    if (carousel) {
      carousel.style.opacity = '1';
    }
  }, 25);
}

function setScrollTrigger() {
  let path = document.getElementById('text-path');
  var body = document.body;
  var html = document.documentElement;
  var docHeight = Math.max(
    body.scrollHeight,
    body.offsetHeight,
    html.clientHeight,
    html.scrollHeight,
    html.offsetHeight
  );
  gsap.to(path, {
    attr: { startOffset: -docHeight / 5 }, // Speed of the text
    ease: 'none',
    scrollTrigger: {
      scrub: 0,
    },
  });
}

// function onScrollOpacity() {
//   let text = document.getElementById('theSvg');
//   let position = document.body.scrollTop || document.documentElement.scrollTop;
//   if (text && position > window.innerHeight) {
//     text.classList.add('inactive');
//     text.classList.remove('active');
//   } else if (text) {
//     text.classList.add('active');
//     text.classList.remove('inactive');
//   }
// }
</script>

<style lang="sass">
.svg-container
  display: inline-block
  position: fixed
  left: 0
  right: 0
  top: 0
  bottom: 0
  padding: var(--nav-spacing)
  overflow: hidden
  font-weight: 200
  font-size: 4.3vw
  z-index: 899
  pointer-events: none
  opacity: 0 // Changed via JavaScript
  transition: opacity .1625s ease
  svg
    height: 100%
    width: 100%
    overflow: visible
    fill: currentColor
    // stroke: rgba(0,0,0,0)
    transition: fill $transition-carousel, stroke $transition-carousel
    border: $test-border
    // &.active
    //   fill: currentColor
    //   stroke: rgba(0,0,0,0)
    // &.inactive
    //   fill: rgba(0,0,0,0)
    //   stroke: currentColor
</style>
