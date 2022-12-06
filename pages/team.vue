<template>
  <div>
    <div class="team" v-if="team">
      <BannerComp :title="team.title" :body="team.body" />
      <NuxtPage />
      <h1>Team</h1>
      <div class="h1Line"></div>
      <div class="teamSection">
        <TeamCard
          class="coreTeam"
          @click="fixBody"
          v-for="(teamMember, index) in teamMembers.teamMembers"
          :key="index"
          :image="teamMember.portrait"
          :name="teamMember.name"
          :jobTitle="teamMember.jobTitle"
        />
      </div>
      <h1>Zusammenarbeit und Stellvertretung</h1>
      <div class="h1Line"></div>
      <div class="teamSection2">
        <TeamCard
          class="coreTeam"
          v-for="(teamMember, index) in extendedTeam.teamMembers"
          :key="index"
          :image="teamMember.portrait"
          :name="teamMember.name"
          :jobTitle="teamMember.jobTitle"
        />
      </div>
      <div class="descriptionTeam">
        <SanityContent :blocks="team.description" :serializers="serializers" />
      </div>
    </div>
  </div>
</template>

<script setup>
import SanityLink from "~/components/SanityLink.vue";
const serializers = {
  marks: {
    link: SanityLink,
  },
};

onMounted(() => {
  window.scrollTo(0, 0);
});
const query = groq`*[_type == "team"][0]{title, body, description}`;
const { data: team } = useSanityQuery(query);

const queryTeam = groq`*[_type == "team"][0]{teamMembers[extendedTeam == false]}`;
const { data: teamMembers } = useSanityQuery(queryTeam);

const queryExTeam = groq`*[_type == "team"][0]{teamMembers[extendedTeam == true]}`;
const { data: extendedTeam } = useSanityQuery(queryExTeam);

function fixBody() {
  var scrollPosition = window.scrollY;
  document.body.style.position = "fixed";
  document.body.style.top = `-${scrollPosition}px`;
}
</script>
<style>
.descriptionTeam a {
  text-decoration: underline;
}
</style>
<style scoped>
.teamSection .teamCard:first-child {
  margin-left: 26%;
}
.teamSection {
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 87%;
  margin: 0 auto 0 6.5%;
}
.teamSection2 {
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 87%;
  margin: 0 auto 0 6.5%;
}

.descriptionTeam {
  text-align: center;
  font-size: 1.2rem;
  line-height: 1.3rem;
  margin: -5% 0 0 0;
}
</style>
