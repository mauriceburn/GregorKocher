<template>
  <div>
    <div class="treatments" v-if="treatment">
      <BannerComp :title="treatment.title" :body="treatment.body" />
      <h1>Behandlungsspektrum</h1>
      <div class="section">
        <div
          v-for="(treatment, index) in treatment.treatmentSectrum"
          :key="index"
        >
          <NuxtLink :to="'/behandlungen/' + index" @click="open = !open">
            <div class="linkTitle">
                <h2>{{ treatment.treatmentTitle }}</h2><img class="arrow" src="../assets/arrow-open.svg" alt="open/close">
            </div>
          </NuxtLink>
          <NuxtPage v-if="route.path == '/behandlungen/' + index" />
          <div class="titleLine"></div>
        </div>
      </div>
      <img class="panorama" :src="$urlFor(treatment.image).size(1200).url()" alt="Gregor Kocher Klinik Panorama">
    </div>
  </div>
</template>

<script setup>

const route = useRoute()

const query = groq`*[_type == "treatment"][0]`;
const { data: treatment } = await useSanityQuery(query);

const open = ref(false);
</script>

<style scoped>
.section {
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 87%;
  margin: 0 auto 13% 6.5%;
}

.arrow {
    width: 1.8rem;
    transition: transform 0.4s;
}

.router-link-active .arrow {
    transform: rotate(180deg);
}

.linkTitle {
    width: 83.7rem;
    display: inline-flex;
    justify-content: space-between;
}

.linkTitle h2 {
    font-size: 1.7rem;
    line-height: 2rem;
    font-weight: 500;
    margin: 2.5% 0 3% 0;
}

.titleLine {
    width: 100%;
    height: 0.12rem;
    min-height: 1.5px;
    background-color: black;
}

.panorama {
    width: 100%;
    aspect-ratio: 19.2 / 4.62;
    object-fit: cover;
}

</style>
