<template>
  <div id="logoMobile">
    <div id="navBar">
      <NuxtLink to="/">
        <img
          class="logoLong"
          src="../assets/home-thin.svg"
          alt="Gregor Kocher Thoraxchirurgie"
        />
      </NuxtLink>
      <NavMobile />
    </div>
  </div>
</template>

<script setup>
onMounted(() => {
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos || currentScrollPos <= 0) {
      document.getElementById("logoMobile").style.transform = "translateY(0)";
      document.getElementById("navBar").style.transform = "translateY(0)";
    } else {
      setTimeout(() => {
        document.getElementById("logoMobile").style.transform =
          "translateY(-100%)";
        document.getElementById("navBar").style.transform = "translateY(-100%)";
      }, 100);
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
  height: 20vw;
  align-items: flex-start;
  background-color: white;
  transform: translateY(0);
  transition: transform 0.4s;
  z-index: 1;
}
#navBar {
  display: inline-flex;
  justify-content: space-between;
  width: 100%;
  background: white;
}

#logoMobile a {
  height: 0;
}

.logoLong {
  height: 9vw;
  margin: 5.5vw 10vw 4.5vw 8vw;
}
</style>
