<template>
  <div
    class="sideNavMobile"
    @click="collapsed = !collapsed"
    :class="{ collapseMobile: collapsed }"
  >
    <div class="burgerMobile">
      <hr />
      <hr />
      <hr />
    </div>
    <div class="navLinks" :class="{ collapse: collapsed }">
      <div class="wrapper">
        <NuxtLink to="/" class="single"> GREGOR KOCHER </NuxtLink>
        <div class="singleLine"></div>
      </div>
      <div class="wrapper">
        <NuxtLink to="/team" class="single"> TEAM </NuxtLink>
        <Transition name="navLine" appear>
          <div class="singleLine"></div>
        </Transition>
      </div>
      <div class="wrapper">
        <NuxtLink to="/behandlungen" class="single"> BEHANDLUNGEN </NuxtLink>
        <div class="singleLine"></div>
      </div>
      <div class="wrapper">
        <NuxtLink to="patientinnen" class="single">
          PATIENTINNEN<br />& PATIENTEN
        </NuxtLink>
        <div class="singleLine"></div>
      </div>
      <div class="wrapper">
        <NuxtLink to="zuweisende" class="single"> ZUWEISENDE </NuxtLink>
        <div class="singleLine"></div>
      </div>
      <div class="wrapper">
        <div class="single">
          <a href="#contact">KONTAKT</a>
        </div>
        <div class="singleLine"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
const collapsed = ref(true);
</script>

<style scoped>
.sideNavMobile {
  position: relative;
  float: right;
  width: 100%;
  font-size: 1.3rem;
  line-height: 1.7rem;
  font-weight: 400;
  letter-spacing: 0.3rem;
  color: #8c8c90;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.95);
  z-index: 3;
  transition: all 0.4s;
}

hr {
  border: 0;
  background: black;
  height: 1px;
  width: 100%;
  margin: 0;
}

.burgerMobile {
  display: flex;
  float: right;
  flex-direction: column;
  justify-content: space-between;
  width: 10vw;
  height: 7vw !important;
  margin: 6.5vw 6.5vw 6vw 5vw;
  background: white;
  transform: rotate(-90deg);
  transition: transform 0.4s;
}

.navLinks {
  height: 100vw;
  transition: height 0.3s;
}

.collapseMobile .navLinks {
  margin-top: 20vw;
  height: 0;
}

.single {
  color: inherit;
  white-space: nowrap;
  text-align: left;
  cursor: pointer;
  text-decoration: none;
}

.router-link-active {
  color: #1c5474;
}

.router-link-active + .singleLine {
  color: #1c5474;
  transform: translateX(0);
}

.singleLine {
  height: 0.65rem;
  width: 100%;
  transform: translateX(100%);
  border-bottom: solid 0.15rem;
  margin-left: 0.3rem;
  color: #1c5474;
  transition: all 0.4s;
}

.single:hover + .singleLine {
  color: #8c8c90;
  transform: translateX(0);
}

.wrapper {
  display: inline-flex;
  width: 100%;
  margin-bottom: 5vw !important;
  transition: all 0.4s;
}

.wrapper:first-child {
  margin-top: 8vw;
}

.collapseMobile .burgerMobile {
  transform: rotate(0);
}

.collapseMobile .wrapper {
  margin-bottom: 0;
  display: none;
}
.collapseMobile .wrapper:last-child {
  margin-bottom: 2.9vw;
}
</style>
