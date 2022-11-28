<template>
  <div id="teamSingle">
    <div class="close" @click="router.back()">
      <img class="closeIcon" src="~/assets/close.svg" alt="close" /> schliessen
    </div>
    <div v-if="teamSingle">
      <img
        class="image"
        :src="$urlFor(teamSingle.teamMembers.portrait).width(1200).url()"
        :alt="'portrait ' + teamSingle.teamMembers.name"
      />
      <SanityContent :blocks="teamSingle.teamMembers.description" />
    </div>
  </div>
</template>

<script setup>
const router = useRouter();
const route = useRoute();
const query = groq`*[_type == "team"][0] {teamMembers [name match "${route.params.team}"][0]}`;
const { data: teamSingle, refresh } = useSanityQuery(query);

onMounted(() => {
  setTimeout(() => {
    document.getElementById("teamSingle").style.transform = "translateX(0)";
  }, 1);
});

onUnmounted(() => {
  document.body.style.position = "";
});
</script>

<style scoped>
#teamSingle {
  background-color: white;
  width: 90%;
  height: 80%;
  right: 0;
  top: 4%;
  position: fixed;
  z-index: 1;
  padding: 5%;
  box-shadow: 0 0 0.7vw 0 rgba(30, 30, 30, 0.75);
  overflow-y: scroll;
  transform: translateX(100%);
  transition: transform 0.3s ease-out;
}

.image {
  width: 100%;
  aspect-ratio: 20.1/10.4;
  object-fit: cover;
}
.close {
  float: right;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  margin: 2rem;
  cursor: pointer;
}

.closeIcon {
  height: 2rem;
  margin-right: 1rem;
}
</style>
