<template>
  <div
    class="sideNav"
    @mouseover="(visible = false), (collapsed = false)"
    :class="{ collapse: collapsed || visible }"
  >
    <div v-if="visible || collapsed" class="burger">
      <hr />
      <hr />
      <hr />
    </div>
    <div class="wrapper">
      <NuxtLink to="/" class="single"> HOME </NuxtLink>
      <div class="singleLine"></div>
    </div>
    <div class="wrapper">
      <NuxtLink to="/patientinnen" class="single">
        PATIENTINNEN<br />& PATIENTEN
      </NuxtLink>
      <div class="singleLine"></div>
    </div>
    <div class="wrapper">
      <NuxtLink to="/behandlungen" class="single"> BEHANDLUNGEN </NuxtLink>
      <div class="singleLine"></div>
    </div>
    <div class="wrapper">
      <NuxtLink to="/zuweisende" class="single"> ZUWEISENDE </NuxtLink>
      <div class="singleLine"></div>
    </div>
    <div class="wrapper">
      <NuxtLink to="/team" class="single"> TEAM </NuxtLink>
      <Transition name="navLine" appear>
        <div class="singleLine"></div>
      </Transition>
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
const visible = ref(false);
const collapsed = ref(false);

function onScroll(e) {
  scrollY = window.scrollY;

  if (scrollY > 100 && window.innerWidth < 2380) {
    visible.value = true;
  } else {
    visible.value = false;
  }
  return visible;
}

function collapse() {
  const windowWidth = ref(window.innerWidth);
  if (windowWidth.value < 900) {
    collapsed.value = true;
  } else {
    collapsed.value = false;
  }
}

onMounted(() => {
  collapse();
  window.addEventListener("scroll", onScroll);
  window.addEventListener("resize", collapse);
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

hr {
  border: 0;
  background: #ffffff;
  height: 0.15rem;
  width: 3rem;
  margin: 0.5rem 0 0.8rem 0;
}

.burger {
  margin: 0;
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
  width: 3rem;
  height: 3rem;
  padding: 1rem;
  background: rgb(4, 89, 119);
  background: linear-gradient(
    0deg,
    rgba(4, 89, 119, 1) 0%,
    rgba(8, 115, 133, 1) 100%
  );
}

.collapse .wrapper {
  margin-bottom: 0;
  display: none;
}
.collapse .wrapper:last-child {
  margin-bottom: 2.9rem;
}
</style>
