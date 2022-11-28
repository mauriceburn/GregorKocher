<template>
  <div>
    <div v-for="(treat, index) in treat.treatmentSectrum" :key="index">
      <Transition name="slide" appear>
        <div
          class="content"
          v-show="route.path == '/behandlungen/' + treat.slug.current"
        >
          <SanityContent :blocks="treat.description" />
        </div>
      </Transition>
    </div>
  </div>
</template>

<script setup>
const query = groq`*[_type == "treatment"][0]`;
const { data: treat } = await useSanityQuery(query);

const route = useRoute();
</script>

<style>
.slide-move,
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.4s ease;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
}

.content {
  width: 80%;
  margin: 0 auto 7% auto;
  font-size: 1.7rem;
  line-height: 2.3rem;
}
</style>
