<template>
  <div class="scrolltop" v-show="visible">
    <img @click="up" src="../assets/arrow-open.svg" alt="UP" />
  </div>
</template>

<script setup>

var scrollY = 0;
var visible = ref(false);

function onScroll(e) {
  scrollY = window.scrollY;

  if (scrollY > 1200) {
    visible.value = true;
  } else {
    visible.value = false;
}
  return visible;
}


function up() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}
onMounted(() => {
  window.addEventListener("scroll", onScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
});
</script>

<style scoped>
.scrolltop {
  background-color: #ffffff;
  border-radius: 15%;
  position: fixed;
  width: 5%;
  bottom: -0.5%;
  left: 47.5%;
  opacity: 0.9;
  z-index: 3;
  cursor: pointer;
}

.scrolltop img {
  width: 75%;
  margin: 12.5%;
  transform: rotate(180deg);
  opacity: 1;
}
</style>
