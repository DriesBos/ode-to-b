<template>
  <!-- prettier-ignore -->
  <div id="carousel" class="svg-container" r>
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
          {{ repeatedText }}
        </textPath>
      </text>
    </svg>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, onUpdated, ref } from 'vue';
import gsap from 'gsap';

const route = useRoute();

const repeatedText = ref('ODE TO A '.repeat(100));

onMounted(() => {
  setRatioAndPath();
  setScrollTrigger();
  window.addEventListener('resize', setRatioAndPath);
});

onUpdated(() => {
  setRatioAndPath();
  setScrollTrigger();
});

onUnmounted(() => {
  window.removeEventListener('resize', setRatioAndPath);
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
  }, 165);
}

function setScrollTrigger() {
  let path = document.getElementById('text-path');
  gsap.to(path, {
    attr: { startOffset: '-100%' },
    ease: 'none',
    scrollTrigger: {
      scrub: 0,
      start: 'top top',
      end: '25000px', // 25000px is a hack to make it infinite
      // onUpdate: (self) => console.log('progress:', self.progress),
    },
  });
}
</script>

<style lang="sass">
.svg-container
  display: inline-block
  position: fixed
  left: 0
  right: 0
  top: 0
  bottom: 0
  padding: var(--site-border-spacing)
  overflow: hidden
  font-weight: 200
  font-size: 4.3vw
  z-index: 899
  pointer-events: none
  opacity: 0 // Changed via JavaScript
  transition: opacity .1625s ease
  @media screen and ( max-width: $breakpoint-mobile)
    font-weight: 300
  svg
    height: 100%
    width: 100%
    overflow: visible
    fill: currentColor
    transition: fill $transition-carousel, stroke $transition-carousel
    border: $test-border
</style>
