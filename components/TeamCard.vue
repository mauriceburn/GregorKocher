<template>
  <div class="teamCard">
    <img
      class="image"
      :src="$urlFor(image).size(imageWidth, imageHeight).url()"
      :alt="name"
    />
    <p class="name">{{ name }}</p>
    <p>{{ jobTitle }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  image: {},
  name: "",
  jobTitle: "",
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

.teamCard:first-child {
  margin-left: 26%;
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
</style>
