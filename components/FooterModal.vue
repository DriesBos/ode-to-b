<template>
  <div class="footerModal" :class="{ active: active }">
    <div class="footerModal-Content">
      <h3>{{ title }}</h3>
      <br />
      <markdown :input="text" />
    </div>
    <div class="footerModal-Close" @click="onClick()">
      <h5>CLOSE</h5>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, defineProps } from 'vue';

defineProps({
  active: Boolean,
  title: String,
  text: String,
});

// onMounted(() => {
//   $('.footerModal').on('mouseover', FooterModalCursor);
//   $('.footerModal').on('mouseleave', removeFooterModalCursor);
// });

// onUnmounted(() => {
//   $('.footerModal').off('mouseover', FooterModalCursor);
//   $('.footerModal').off('mouseleave', removeFooterModalCursor);
// });

function onClick() {
  this.$emit('close');
}

function FooterModalCursor() {
  let cursor = document.querySelector('.cursor');
  cursor.classList.add('footermodal');
}
function removeFooterModalCursor() {
  let cursor = document.querySelector('.cursor');
  cursor.classList.remove('footermodal');
}
</script>

<style lang="sass">
.footerModal
  position: fixed
  top: 0
  left: 0
  bottom: 0
  right: 0
  display: flex
  flex-direction: column
  background: white
  color: black
  padding: var(--spacing-three)
  transition: transform $transition-slide
  will-change: transform
  transform: translate3d(0, 100%, 0)
  overflow-y: auto
  z-index: 999
  .markdown
    p
      margin-bottom: 1.5rem
      &:last-child
        margi-bottom: 0
  &.active
    transform: translate3d(0, 0%, 0)
  p, h1, h2, h3, h4, h5, a
    color: black
  a
    color: black
    display: inline
    &:hover
      @media (hover: hover)
        text-decoration: underline
  h1
    text-transform: uppercase
  &-Content
    display: flex
    flex-direction: column
    align-items: flex-start
    justify-content: flex-start
    flex-grow: 1
  &-Close
    margin-top: var(--spacing-three)
    text-align: right
    h4, h5
      display: inline
</style>
