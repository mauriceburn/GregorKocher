<template>
  <div>
    <div class="team" v-if="team">
      <BannerComp :title="team.title" :body="team.body" />
      <NuxtPage />
      <h1>Team</h1>
      <div class="teamSection">
        <TeamCard
          @click="fixBody"
          v-for="(teamMember, index) in teamMembers.teamMembers"
          :key="index"
          :image="teamMember.portrait"
          :name="teamMember.name"
          :jobTitle="teamMember.jobTitle"
        />
        <h1>Zusammenarbeit und Stellvertretung</h1>
        <TeamCard
          v-for="(teamMember, index) in extendedTeam.teamMembers"
          :key="index"
          :image="teamMember.portrait"
          :name="teamMember.name"
          :jobTitle="teamMember.jobTitle"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
onMounted(() => {
  window.scrollTo(0, 0);
});
const query = groq`*[_type == "team"][0]{title, body}`;
const { data: team } = await useSanityQuery(query);

const queryTeam = groq`*[_type == "team"][0]{teamMembers[extendedTeam == false]}`;
const { data: teamMembers } = await useSanityQuery(queryTeam);

const queryExTeam = groq`*[_type == "team"][0]{teamMembers[extendedTeam == true]}`;
const { data: extendedTeam } = await useSanityQuery(queryExTeam);

function fixBody() {
  var scrollPosition = window.scrollY;
  document.body.style.position = "fixed";
  document.body.style.top = `-${scrollPosition}px`;
}
</script>

<style scoped>
.teamSection {
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 87%;
  margin: 0 auto 0 6.5%;
}
</style>
