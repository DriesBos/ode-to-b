<template>
  <NuxtLayout :class="pageColor">
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
const route = useRoute();

const pageColor = ref('black');

watch(
  () => route.fullPath,
  () => {
    setColor();
  }
);

function setColor() {
  if (route.path == '/') {
    pageColor.value = 'black';
  } else if (route.params.slug[0] === 'brands') {
    pageColor.value = 'blue';
  } else if (route.params.slug[0] === 'art') {
    pageColor.value = 'red';
  } else if (route.params.slug[0] === 'people') {
    pageColor.value = 'black';
  } else {
    pageColor.value = 'black';
  }
}

onMounted(() => {
  setColor();
});
</script>
