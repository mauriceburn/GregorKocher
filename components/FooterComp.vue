<template>
  <div class="footer">
    <div class="imp">
      <NuxtLink to="/impressum">Impressum </NuxtLink> |
      <NuxtLink to="/datenschutz">Datenschutz </NuxtLink>
      | ©{{ year }}
    </div>
    <img
      class="logo"
      src="../assets/Logo_kocherThoraxchirurgie_lang.svg"
      alt="Gregor Kocher Thoraxchirurgie"
    />
    <div class="social">
      <a
        href="https://www.linkedin.com/in/prof-gregor-j-kocher-md-mba-ihm-b00a017a/"
        target="_blank"
        ><img class="socialIcon" src="../assets/linkedin.svg" alt="linkedin"
      /></a>
      <a href="mailto:info@kocher-thoraxchirurgie.ch">
        <img class="socialIcon" src="../assets/mail-social.svg" alt="eMail" />
      </a>
    </div>
  </div>
</template>

<script setup>
const year = new Date().getFullYear();
</script>

<style scoped>
.footer {
  display: inline-flex;
  width: 92%;
  margin: 6% 4% 7% 4%;
  align-items: flex-end;
}

.logo {
  width: 13%;
  margin: 0 auto 0 auto;
}

.socialIcon {
  width: 1vw;
}

.imp {
  width: 18%;
}

.social {
  width: 8%;
  margin-left: 10%;
  display: inline-flex;
  justify-content: space-around;
  align-items: baseline;
}
</style>
