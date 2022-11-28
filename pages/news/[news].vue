<template>
  <div>
    <div class="newsSingle" v-if="news">
      <h2>{{ news.title }}</h2>
      <SanityContent :blocks="news.body" />
    </div>
  </div>
</template>

<script setup>
const route = useRoute();

const query = groq`*[_type == "news" && slug.current == "${route.params.news}"][0]`;
const { data: news, refresh } = useSanityQuery(query);
onMounted(() => {
  window.scrollTo(0, 0);
});
</script>

<style scoped>
.newsSingle {
  width: 65%;
  margin: auto auto 10% auto;
}

h2 {
  font-size: 2rem;
  font-weight: 500;
}
</style>
