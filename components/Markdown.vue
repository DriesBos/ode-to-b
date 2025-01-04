<template>
  <div v-if="content" v-html="markdown.render(content)" class="markdown"></div>
</template>

<script setup>
import MarkdownIt from 'markdown-it';

defineProps({ content: String });

const markdown = new MarkdownIt();
</script>

<style lang="sass">
.markdown
  --var: 100%
  min-width: 0 // Ellipsis hack
  p
    white-space: pre-line
  a
    position: relative
    white-space: nowrap
    &::before
      content: ''
      position: absolute
      display: inline-block
      left: 0
      bottom: 0
      width: var(--var)
      height: 2px
      background: currentColor
      will-change: width, border-bottom
    &:hover
      &::before
        @media ( hover: hover )
          animation: hyperHyperLink .66s ease
          animation-iteration-count: 1

@keyframes hyperHyperLink
  0%
    width: 100%
    left: auto
    right: 0
  50%
    width: 0%
    left: auto
    right: 0
  51%
    width: 0%
    left: 0
    right: auto
  100%
    left: 0
    right: auto
    width: 100%
</style>
