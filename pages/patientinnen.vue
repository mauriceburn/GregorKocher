<template>
  <div>
    <div class="patients" v-if="patients">
      <BannerComp :title="patients.title" :body="patients.introText" />
      <h1>Patientinnen und Patienten</h1>
      <div class="h1Line"></div>
      <div class="patientsSection">
        <SanityContent :blocks="patients.body" />
        <img
          class="image"
          :src="$urlFor(patients.image).width(1200).url()"
          :alt="'portrait ' + patients.title"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const query = groq`*[_type == "patients"][0]{title, introText, body, image}`;
const { data: patients } = await useSanityQuery(query);

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
.patientsSection p {
  min-height: 1rem;
}
</style>

<style scoped>
.patientsSection {
  width: 65%;
  margin: 0 auto 0 17.5%;
}

.image {
  width: 100%;
  margin-top: 9%;
  margin-bottom: 5%;
}
</style>
