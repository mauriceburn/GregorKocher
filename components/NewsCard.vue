<template>
  <NuxtLink :to="'/news/' + newsPost.slug.current">
    <div class="newsCard" v-if="newsPost">
      <p>{{ newsPost.untertitel }}</p>
      <div>
        <div class="date" v-if="newsPost.datum">
          {{ formatDate(newsPost.datum) }}
        </div>
        <div class="newsLine"></div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  newsPost: null,
});

function formatDate(initialDate) {
  const date = new Date(initialDate);
  return new Intl.DateTimeFormat("de-CH", { dateStyle: "long" }).format(date);
}
</script>

<style scoped>
.newsCard {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 25rem;
  height: 16.3rem;
  margin-top: 12%;
  transition: color 0.1s;
}

.newsCard:hover {
  color: #87bbbc;
}

.newsLine {
  width: 100%;
  height: 1.5px;
  background-color: #242424;
}

.date {
  font-size: 0.9rem;
  margin: 0 0 9% 0;
  color: #77777e;
}

p {
  font-size: 1.2rem;
  line-height: 1.9rem;
}
</style>
