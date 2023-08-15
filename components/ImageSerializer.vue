<template>
  <img
    v-if="settings"
    class="image"
    :src="$urlFor(image).size(800).url()"
    loading="lazy"
  />
</template>
<script setup>
const props = defineProps({
  image: null,
});

</script>

<style scoped>
.image {
  width: 80%;
  margin: 10%;
}
@media screen and (max-width: 800px) {
  .image {
    width: 100%;
    margin: 2% 0;
  }
}
</style>
