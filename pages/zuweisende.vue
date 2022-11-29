<template>
  <div>
    <div class="zuweisende" v-if="zuweisende">
      <BannerComp :title="zuweisende.title" :body="zuweisende.introText" />
      <h1>Zuweisende</h1>
      <div class="h1Line"></div>
      <div class="zuweisendeSection">
        <SanityContent :blocks="zuweisende.body" />
        <img
          class="image"
          :src="$urlFor(zuweisende.image).width(1200).url()"
          :alt="'portrait ' + zuweisende.title"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const query = groq`*[_type == "zuweisende"][0]{title, introText, body, image}`;
const { data: zuweisende } = await useSanityQuery(query);

onMounted(() => {
  window.scrollTo(0, 0);
});
</script>

<style>
h3 {
  width: 100%;
  font-size: 1.8rem;
  font-weight: 400;
  margin-bottom: 2.7%;
  margin-top: 4%;
}
.zuweisendeSection p {
  min-height: 1rem;
}
</style>

<style scoped>
.zuweisendeSection {
  width: 65%;
  margin: 0 auto 0 17.5%;
}

.image {
  width: 100%;
  margin-top: 9%;
  margin-bottom: 5%;
}
</style>
