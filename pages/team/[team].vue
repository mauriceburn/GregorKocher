<template>
  <div id="teamSingle">
    <div class="close" @click="router.back()">
      <img class="closeIcon" src="~/assets/close.svg" alt="close" /> schliessen
    </div>
    <div class="teamSingleOpen" v-if="teamSingle">
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
const { data: teamSingle, refresh } = await useSanityQuery(query);

onMounted(() => {
  setTimeout(() => {
    document.getElementById("teamSingle").style.transform = "translateX(0)";
  }, 10);
});

onUnmounted(() => {
  document.body.style.position = "";
});
</script>
<style>
.teamSingleOpen a {
  text-decoration: underline;
}
</style>

<style scoped>
#teamSingle {
  background-color: white;
  border-radius: 1rem;
  width: 60%;
  height: 100%;
  right: 0;
  top: 0;
  position: fixed;
  z-index: 1;
  padding: 0 5% 5% 5%;
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
  position: sticky;
  top: 0;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  padding: 2rem 2rem 2rem 0;
  cursor: pointer;
  background-color: white;
}

.closeIcon {
  height: 2rem;
  margin-right: 1rem;
}
</style>
