<template>
  <div>
    <h1 class="news">News</h1>
    <div class="h1Line"></div>
    <div class="newsComp">
      <div v-for="(newsPost, index) in news" :key="index">
        <NewsCard :newsPost="newsPost" />
      </div>
    </div>
    <NuxtLink v-if="showMore" class="mehr" to="/news">mehr -></NuxtLink>
  </div>
</template>

<script setup>
const props = defineProps({
  numberOfArticles: ref("0..5"),
  showMore: ref(true),
});

const query = groq`*[_type == "news"][${props.numberOfArticles}] {untertitel, datum, slug}`;
const { data: news, refresh } = useSanityQuery(query);
</script>

<style scoped>
.newsComp {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  width: 87%;
  margin: -1.2% 0 0 6.5%;
}

.mehr {
  display: block;
  color: #1a1a1d;
  font-style: italic;
  padding: 2%;
  width: fit-content;
  margin: auto;
}
</style>
