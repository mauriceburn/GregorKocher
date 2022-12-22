<template>
  <div>
    <Head>
      <Link rel="icon" type="image/x-icon" href="/favicon.svg" />

      <Link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <Link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <Link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <Link rel="manifest" href="/site.webmanifest" />
      <Link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <Meta name="msapplication-TileColor" content="#da532c" />
      <Meta name="theme-color" content="#ffffff" />

      <Title>Gregor Kocher Thoraxchirurgie</Title>
      <Meta
        name="description"
        content="Gregor Kocher Thoraxchirurgie bietet seinen Patientinnen und Patienten Zugang zum gesamten und umfassenden Spektrum an Therapien im interdisziplinären und weitreichenden Netzwerk. Es sind dies konservative Behandlungen bis zu sehr schonenden, roboterassistierten Eingriffen."
      />
    </Head>
    <NavComp class="desktop" />
    <LogoMobile class="mobile" />
    <div class="spacer"></div>
    <LogoComp :resizeStatus="resizeStatus" />
    <NuxtPage />
    <ScrollTop />
    <ContactComp />
    <FooterComp />
  </div>
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

useHead({
  htmlAttrs: {
    lang: "de-CH",
  },
});
</script>

<style>
@font-face {
  font-family: "Roboto";
  src: url("./assets/Roboto/Roboto-Light.ttf") format("truetype");
  font-weight: 300;
}
@font-face {
  font-family: "Roboto";
  src: url("./assets/Roboto/Roboto-Regular.ttf") format("truetype");
  font-weight: 400;
}
@font-face {
  font-family: "Roboto";
  src: url("./assets/Roboto/Roboto-Medium.ttf") format("truetype");
  font-weight: 500;
}

:root {
  font-family: "Roboto";
  font-size: 1.04vw;
  font-weight: 400;
  letter-spacing: 0.02rem;
  line-height: 1.45rem;
  color: #1a1a1d;
}

.spacer {
  height: 0;
}

body {
  margin: 0;
}

p {
  white-space: pre-line;
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
  font-weight: 500;
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
  max-width: 1920px;
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
@media screen and (min-width: 1920px) {
  :root {
    font-size: 20px;
  }
}

@media screen and (max-width: 900px) {
  :root {
    font-size: 12px;
  }
  .spacer {
    height: 20vw;
  }

  .logo {
    width: 60%;
  }
  .overlay {
    width: 25.5vw;
    height: 16.8vw;
  }
  .overlay div {
    font-size: 3.7vw !important;
    letter-spacing: 0.35vw;
  }
  .logoText {
    width: 100%;
    margin-left: 0;
    margin-top: 3.9%;
    margin-bottom: 3%;
  }
  .logoImage {
    width: 100% !important;
    height: auto !important;
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
  /* .newsComp .newsChildren:nth-last-child(1),
  .newsComp .newsChildren:nth-last-child(2),
  .newsComp .newsChildren:nth-last-child(3) {
    display: none;
  } */

  .gallery {
    width: 100% !important;
    margin-left: 0 !important;
  }

  .column {
    width: 100% !important;
  }

  .tallImage {
    display: none !important;
  }

  .videoOverlay {
    margin-bottom: 5%;
  }

  .contact {
    display: flex;
    flex-direction: column;
    height: fit-content !important;
  }
  .menus {
    width: 100% !important;
  }
  .variable {
    width: 100% !important;
    height: 160vw !important;
  }
  .contactInfo {
    margin: 5% !important;
  }
  .menu {
    margin: 10% auto 10% auto !important;
  }
  .menu h2 {
    margin: 10% auto 10% auto !important;
  }

  .phone {
    margin-left: 8.5% !important;
    width: fit-content !important;
  }
  .email {
    width: fit-content !important;
  }
  .openingHours {
    margin: 10% !important;
    transform: translateY(0) !important;
    top: 10% !important;
  }
  .opening {
    width: 95% !important;
  }
  .impressum {
    width: 30% !important;
  }
  .footer {
    align-items: center !important;
    margin: 6% 4% 12% 4% !important;
  }
  .footer .logo {
    width: 30%;
  }
  .impressum {
    font-size: 10px;
  }
  .social {
    width: 30% !important;
  }
  .socialIcon {
    width: 5vw !important;
  }
  .scrolltop {
    width: 12% !important;
    left: 44% !important;
    bottom: -1% !important;
  }
  .bannerContent {
    width: 85% !important;
  }
  .teamSection .teamCard:first-child {
    margin-left: 0 !important;
  }
  .teamSection .image {
    width: 100%;
  }
  h1 {
    line-height: 3rem !important;
    font-size: 2.5rem !important;
    width: 85%;
    text-align: center;
  }
  .treat h2 {
    font-size: 1.5rem !important;
  }
  .treat {
    width: 100% !important;
  }
  .linkTitle {
    width: 100% !important;
  }
  .bannerContent h3 {
    font-size: 2.5rem !important;
    line-height: 2.5rem !important;
  }
  .patientsSection {
    width: 85% !important;
    margin: 0 auto 0 auto !important;
  }
  .patientsSection h3 {
    line-height: 2.2rem;
  }

  .content {
    font-size: 1.3rem !important;
    width: 100% !important;
  }
  #teamSingle {
    width: 90% !important;
  }
  .newsSingle {
    width: 85% !important;
  }
}
</style>
