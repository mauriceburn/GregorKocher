<template>
  <div id="logoMobile">
    <NuxtLink to="/"
      ><img
        class="logoLong"
        src="../assets/Logo_kocherThoraxchirurgie_lang.svg"
        alt="Gregor Kocher Thoraxchirurgie"
      />
    </NuxtLink>
    <NavMobile />
  </div>
</template>

<script setup>
onMounted(() => {
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("logoMobile").style.transform = "translateY(0)";
    } else {
      document.getElementById("logoMobile").style.transform =
        "translateY(-100%)";
    }
    prevScrollpos = currentScrollPos;
  };
});
</script>

<style scoped>
#logoMobile {
  position: fixed;
  top: 0;
  width: 100%;
  height: fit-content;
  display: inline-flex;
  justify-content: space-between;
  background-color: white;
  transform: translateY(0);
  transition: transform 0.4s;
  z-index: 1;
}

.logoLong {
  height: 15vw;
  margin: 2.5vw;
}
</style>
