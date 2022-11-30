<template>
  <div class="footer">
    <div class="impressum">Impressum | Datenschutz | ©{{ year }}</div>
    <img
      class="logo"
      src="../assets/Logo_kocherThoraxchirurgie_lang.svg"
      alt="Gregor Kocher Thoraxchirurgie"
    />
    <div class="social">
      <img
        class="socialIcon"
        src="../assets/square-facebook.svg"
        alt="facebook"
      />
      <img class="socialIcon" src="../assets/instagram.svg" alt="instagram" />
      <img class="socialIcon" src="../assets/twitter.svg" alt="twitter" />
      <img class="socialIcon" src="../assets/mail-social.svg" alt="eMail" />
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

.impressum {
  width: 18%;
}

.social {
  width: 18%;
  display: inline-flex;
  justify-content: space-around;
}
</style>
