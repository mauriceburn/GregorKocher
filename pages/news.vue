<template>
  <div class="newsSite">
    <NuxtPage />
    <NewsComp :numberOfArticles="numberOfArticles" :showMore="showMore" />
  </div>
</template>

<script setup>
const numberOfArticles = ref("");
const showMore = ref(false);
onMounted(() => {
  window.scrollTo(0, 0);
});
</script>

<style scoped>
.newsSite {
  margin-top: 10%;
}
</style>
