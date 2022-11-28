<template>
  <div class="newsSite">
    <NuxtPage />
    <NewsComp :numberOfArticles="numberOfArticles" />
  </div>
</template>

<script setup>
const numberOfArticles = ref("");
onMounted(() => {
  window.scrollTo(0, 0);
});
</script>

<style scoped>
.newsSite {
  margin-top: 10%;
}
</style>
