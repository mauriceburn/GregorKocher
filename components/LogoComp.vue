<template>
  <div class="logo" v-if="logoWidth">
    <NuxtLink to="/"
      ><img
        class="logoText"
        src="../assets/Logo_KocherThoraxchirurgie_Schrift.svg"
        alt="Gregor Kocher Thoraxchirurgie"
    /></NuxtLink>
    <img
      class="logoImage"
      src="../assets/Logo_KocherThoraxchirurgie.svg"
      alt="Gregor Kocher Thoraxchirurgie"
    />
    <Transition name="logoText" appear>
      <div v-if="route.path == '/'" class="overlay">
        <div>Gemeinsam</div>
        <div>entscheiden</div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
const props = defineProps({
  resizeStatus: ref(),
});

onMounted(() => {
  resizeLogo();
});

watch(
  () => props.resizeStatus,
  (count, prevCount) => {
    resizeLogo();
  }
);

const route = useRoute();

const logoWidth = ref("32%");
const logoHeight = ref("17.5rem");

const resizeLogo = () => {
  if (props.resizeStatus == true) {
    logoWidth.value = "100%";
    logoHeight.value = "40rem";
  } else {
    logoWidth.value = "32%";
    logoHeight.value = "17.5rem";
  }
};
</script>

<style>
.logo {
  width: 57.7%;
  margin: auto;
}

.logoText {
  width: 33.6%;
  margin-left: 33.2%;
  margin-top: 3.9%;
  margin-bottom: 3%;
}

.logoText-enter-active,
.logoText-leave-active {
  transition: all 0.5s ease;
}

.logoText-enter-from,
.logoText-leave-to {
  opacity: 0;
}

.logoImage {
  display: block;
  margin: auto;
  width: v-bind(logoWidth);
  height: v-bind(logoHeight);
  transition: all 0.5s;
  object-fit: cover;
  object-position: 0 0;
}

.overlay {
  width: 24.7rem;
  height: 16.3rem;
  background-color: white;
  position: absolute;
  transform: translateY(-99.5%);
}

.overlay div {
  margin: 15%;
  font-weight: 100;
  line-height: 38%;
  font-size: 4.75rem;
  letter-spacing: 0.4rem;
  transform: translateX(-61%);
  border: none;
}
</style>
