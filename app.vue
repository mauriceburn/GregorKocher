<template>
  <div>
    <Head>
      <Link rel="preconnect" href="https://fonts.googleapis.com" />
      <Link rel="preconnect" href="https://fonts.gstatic.com" />
      <Link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap"
        rel="stylesheet"
      />
      <Link rel="icon" type="image/x-icon" href="/favicon.svg"></Link>
      <Title>Gregor Kocher Thoraxchirurgie</Title>
      <Meta
        name="description"
        content="Gregor Kocher Thoraxchirurgie bietet seinen Patientinnen und Patienten Zugang zum gesamten und umfassenden Spektrum an Therapien im interdisziplinären und weitreichenden Netzwerk. Es sind dies konservative Behandlungen bis zu sehr schonenden, roboterassistierten Eingriffen."
      />
    </Head>
    <NavComp class="desktop" />
    <LogoMobile class="mobile" />
    <LogoComp class="desktop" :resizeStatus="resizeStatus" />
    <NuxtPage />
    <ScrollTop />
    <ContactComp />
  </div>
  <FooterComp />
</template>

<script setup>
onMounted(() => {
  resizeCheck();
});

const route = useRoute();

const resizeStatus = ref(false);

watch(
  () => route.path,
  (count, prevCount) => {
    resizeCheck();
  }
);

function resizeCheck() {
  if (route.path == "/") {
    resizeStatus.value = true;
  } else {
    resizeStatus.value = false;
  }
}
</script>

<style>
:root {
  font-family: "Roboto", sans-serif;
  font-size: clamp(12px, 1.04vw, 18px);
  font-weight: 400;
  letter-spacing: 0.02rem;
  line-height: 1.45rem;
  color: #1a1a1d;
}

body {
  margin: 0;
}

html::-webkit-scrollbar {
  display: none;
}

html {
  -ms-overflow-style: none;
  scrollbar-width: none;
  scroll-behavior: smooth;
}

h1 {
  margin: auto;
  width: fit-content;
  font-size: 3rem;
  font-weight: 450;
  padding-bottom: 2.6rem;
}
.h1Line {
  height: 0.3rem;
  width: 9%;
  background-color: black;
  margin: 0 auto 7% auto;
}
#__nuxt {
  overflow: hidden;
  max-width: 1732px;
  margin: auto;
}

a {
  color: inherit;
  text-decoration: none;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
  transform: scale(0.8);
}

.mobile {
  display: none !important;
}

@media screen and (max-width: 900px) {
  .logo {
    width: 60%;
  }
  .overlay {
    width: 25.5vw;
    height: 16.8vw;
  }
  .overlay div {
    font-size: 4.75vw !important;
    letter-spacing: 0.45vw;
  }
  .logoText {
    width: 100%;
    margin-left: 0;
    margin-top: 3.9%;
    margin-bottom: 3%;
  }
  .logoImage {
    width: 100%;
    height: auto;
  }
  .mainText {
    width: 85% !important;
    margin: 7.5% auto 8.5% auto;
  }

  .mainImage {
    width: 100% !important;
    margin: 0 0 8.5% 0 !important;
  }
  .sideNav {
    font-size: 1rem !important;
  }
  .wrapper {
    margin-bottom: 2rem !important;
  }

  .desktop {
    display: none;
  }
  .mobile {
    display: block !important;
  }
}
</style>
