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
    <NavComp />
    <LogoComp :resizeStatus="resizeStatus" />
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
  font-size: clamp(10px, 1.04vw, 18px);
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
  border-bottom: 0.3rem solid;
  margin-bottom: 7%;
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
</style>
