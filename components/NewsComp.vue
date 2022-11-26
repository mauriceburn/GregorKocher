<template>
  <div>
    <h1 class="news">News</h1>
    <div class="newsComp">
      <div v-for="(newsPost, index) in news" :key="index">
        <NewsCard :newsPost="newsPost" />
      </div>
    </div>
    <NuxtLink class="mehr" to="/news">mehr -></NuxtLink>
  </div>
</template>

<script setup>
const query = groq`*[_type == "news"][0..5] {untertitel, datum}`;
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
    color: #1A1A1D;
    font-style: italic;
    padding: 2%;
    width: fit-content;
    margin: auto;
}
</style>
