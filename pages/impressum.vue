<template>
  <div class="impressum">
    <SanityContent :blocks="impressum.impressum" :serializers="serializers" />
  </div>
</template>

<script setup>
import SanityLink from "~/components/SanityLink.vue";
const serializers = {
  marks: {
    link: SanityLink,
  },
};

const query = groq`*[_type == "datenschutz"][0]`;
const { data: impressum } = await useSanityQuery(query);

onMounted(() => {
  window.scrollTo(0, 0);
});
</script>
<style>
.impressum a {
  text-decoration: underline;
}
</style>

<style scoped>
.impressum {
  margin: 10% auto 10% auto;
  width: 80%;
}
</style>
