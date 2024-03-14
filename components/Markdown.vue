<template>
  <div v-if="content" v-html="markdown.render(content)" class="markdown"></div>
</template>

<script setup>
import MarkdownIt from 'markdown-it';

defineProps({ content: String });

const markdown = new MarkdownIt();
</script>

<style lang="sass" scoped>
.markdown
  p
    white-space: pre-line
</style>
