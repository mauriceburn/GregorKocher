<template>
  <div>
    <div class="youtube-video-container" v-if="videoLink">
      <div v-html="videoLink"></div>
    </div>
    <div class="video-container" v-if="videoFile">
      <SanityFile :asset-id=" videoFile.asset._ref">
        <template #default="{ src }">
          <video
          class="video" controls
        >
          <source :src="src" type="video/ogg" />
          <source :src="src" type="video/mp4" />
        </video>       
       </template>
      </SanityFile>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  videoLink: null,
  videoFile: ""
});
</script>

<style scoped>
.youtube-video-container {
  position: relative;
  overflow: hidden;
  width: 90%;
  margin: 5%;
  text-align: center;
}
.youtube-video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.video-container {
  position: relative;
  overflow: hidden;
  width: 90%;
  margin: 5%;
  text-align: center;
}
.video {
  width: 100%;
}
</style>
