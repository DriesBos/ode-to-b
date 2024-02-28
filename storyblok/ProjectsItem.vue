<template>
  <span v-editable="blok" class="projectList-Single hovered">
    <p>PROJECTS LIST ITEM</p>
  </span>
</template>

<script setup>
defineProps({ blok: Object });
</script>
