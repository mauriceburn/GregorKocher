<template>
  <div>
    <div class="treatments" v-if="treatments">
      <BannerComp :title="treatments.title" :body="treatments.body" />
      <h1>Behandlungsspektrum</h1>
      <div class="h1Line"></div>
      <div class="section">
        <TreatmentComp
          @click="isOpen = !isOpen"
          v-for="(treat, index) in treatments.treatmentSectrum"
          :key="index"
          :treat="treat"
        />
      </div>
      <img
        class="panorama"
        :src="$urlFor(treatments.image).size(1200).url()"
        alt="Gregor Kocher Klinik Panorama"
      />
    </div>
  </div>
</template>

<script setup>
const query = groq`*[_type == "treatment"][0]`;
const { data: treatments } = await useSanityQuery(query);
onMounted(() => {
  window.scrollTo(0, 0);
});

const route = useRoute();

const isOpen = ref(false);
</script>

<style scoped>
.section {
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 87%;
  margin: 0 6.5% 13% 6.5%;
}

.panorama {
  width: 100%;
  aspect-ratio: 19.2 / 4.62;
  object-fit: cover;
}
</style>
