<template>
  <div class="sideNav" @mouseover="visible = false" :class="{ collapse: visible }">
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
</template>

<script setup>
var scrollY = 0;
var visible = ref(false);


function onScroll(e) {
  scrollY = window.scrollY;

  if (scrollY > 100 && window.innerWidth < 2380) {
    visible.value = true;
  } else {
    visible.value = false;
  }
  return visible;
}

onMounted(() => {
  window.addEventListener("scroll", onScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
});
</script>

<style scoped>
.sideNav {
  position: fixed;
  top: 2vw;
  right: 0;
  width: 16%;
  font-size: 1.2rem;
  font-weight: 400;
  letter-spacing: 0.24rem;
  color: #8c8c90;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.95);
  padding-left: 1.5%;
  padding-top: 3%;
  z-index: 1;
  transition: all 0.4s;
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
  margin-bottom: 2.9rem;
  transition: all 0.4s;
}

.collapse {
  width: 4%;
}

.collapse .wrapper {
  margin-bottom: 0 ;
}
.collapse .wrapper:last-child {
  margin-bottom: 2.9rem;
}
</style>
