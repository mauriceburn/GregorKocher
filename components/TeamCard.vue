<template>
  <div class="teamCard">
    <div v-if="coreTeam">
      <NuxtLink :to="'/team/' + name" v-if="name">
        <img
          v-if="image"
          class="image"
          :src="$urlFor(image).size(imageWidth, imageHeight).url()"
          :alt="name"
        />
        <p class="name">{{ name }}</p>
        <p v-if="jobTitle">{{ jobTitle }}</p>
        <div class="mehr">mehr -></div>
      </NuxtLink>
    </div>
    <div v-else>
      <p class="name">{{ name }}</p>
      <p v-if="jobTitle">{{ jobTitle }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  image: {},
  name: "",
  jobTitle: "",
  coreTeam: false,
});

const imageWidth = 1000;
const imageHeight = 800;
</script>

<style scoped>
.teamCard {
  position: relative;
  width: 40.2rem;
  overflow: hidden;
  margin-bottom: 8%;
}
.image {
  width: 40.2rem;
  aspect-ratio: 124 / 94.5;
  object-fit: cover;
}

p {
  font-size: 1.2rem;
  line-height: 1.3rem;
  margin: 0;
}
.name {
  font-weight: 500;
  margin-top: 3%;
}
.mehr {
  display: block;
  color: #1a1a1d;
  font-style: italic;
}
</style>
