<template>
  <div class="datenschutz">
    <SanityContent
      :blocks="datenschutz.datenschutz"
      :serializers="serializers"
    />
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
const { data: datenschutz } = await useSanityQuery(query);

onMounted(() => {
  window.scrollTo(0, 0);
});
</script>
<style>
.datenschutz a {
  text-decoration: underline;
}
</style>
<style scoped>
.datenschutz {
  margin: 10% auto 10% auto;
  width: 80%;
}
</style>
