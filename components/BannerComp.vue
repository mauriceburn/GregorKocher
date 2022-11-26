<template>
  <div class="banner">
    <div class="bannerContent">
      <h3>{{ title }}</h3>
      <div><SanityContent :blocks="body" /></div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {},
  body: {},
});
</script>

<style scoped>
.banner {
  position: relative;
  background: rgb(4, 89, 119);
  background: linear-gradient(
    0deg,
    rgba(4, 89, 119, 1) 0%,
    rgba(8, 115, 133, 1) 100%
  );
  color: white;
  overflow: auto;
  margin: 4.5% auto 6% auto;
}

.bannerContent {
    width: 63%;
    margin: auto auto 7.5% auto;
}

h3 {
  position: relative;
  font-size: 5.1rem;
  line-height: 6rem;
  font-weight: 300;
  letter-spacing: 0.1rem;
  margin: 9.5% 0 7% 0;
}
</style>
