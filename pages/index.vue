<template>
  <div>
    <div v-if="home">
      <div class="mainText"><SanityContent :blocks="home.body" /></div>
      <img
        class="mainImage"
        :src="$urlFor(home.hauptbild).size(1200).url()"
        :alt="home.title"
      />
      <NewsComp numberOfArticles="0..5" showMore="true" />
      <GalleryComp />
    </div>
  </div>
</template>

<script setup>
const query = groq`*[_type == "home"][0]`;
const { data: home, refresh } = useSanityQuery(query);

function formatDate(dateString) {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("de-CH", { dateStyle: "long" }).format(date);
}

onMounted(() => {
  window.scrollTo(0, 0);
});
</script>

<style>
.mainText {
  width: 63.4%;
  margin: 7.5% auto 8.5% auto;
}

.mainImage {
  width: 87%;
  margin: 0 0 8.5% 6.5%;
  object-fit: contain;
}
</style>
