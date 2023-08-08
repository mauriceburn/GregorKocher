<template>
  <div class="gallery" v-if="gallery">
    <div class="column">
      <div class="videoOverlay" @click="play">
        <div class="videoImage" id="videoImage">
          <div id="videoText" class="videoText">
            <img src="../assets/play.svg" alt="PLAY" class="play">
            <p class="description"> {{gallery.video.description}}
            </p>
            <p class="date">{{formatDate(gallery.video.datum) }}</p>
          </div>
        </div>
        <video
          class="video"
          :poster="$urlFor(gallery.video.videoImage).size(600).url()"
        >
          <source :src="gallery.videoUrl" type="video/ogg" />
          <source :src="gallery.videoUrl" type="video/mp4" />
        </video>
      </div>
      <img
        class="smallImage"
        :src="$urlFor(gallery.gallery.images[0]).size(600).url()"
        alt="Gregor Kocher Thoraxchirurgie"
      />
      <img
        class="smallImage"
        :src="$urlFor(gallery.gallery.images[1]).size(600).url()"
        alt="Gregor Kocher Thoraxchirurgie"
      />
    </div>
    <img
      class="tallImage"
      :src="$urlFor(gallery.gallery.images[2]).size(600).url()"
      alt="Gregor Kocher Thoraxchirurgie"
    />
  </div>
</template>

<script setup>
const query = groq`*[_type == "home"][0]{video, gallery, 'videoUrl': video.asset->url}`;
const { data: gallery, refresh } = useSanityQuery(query);

function formatDate(dateString) {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("de-CH", { dateStyle: "long" }).format(date);
}

function play() {
  const video = document.querySelector("video");
  const videoImage = document.querySelector("#videoImage");
  const videoText = document.querySelector("#videoText")

  video.controls = true
  if (video.paused || video.ended) {
    video.play();
    videoImage.style.width = "9.1rem"
    videoText.style.opacity = "0"
  } else {
    video.pause();
    videoImage.style.width = "19rem"
    videoText.style.opacity = "1"
  }
}
</script>

<style scoped>
.gallery {
  display: inline-flex;
  gap: 3%;
  width: 85.5rem;
  margin: 6.5% 0 5.5% 6.5%;
}

.column {
  width: 64%;
  display: flex;
  flex-wrap: wrap;
  gap: 5%;
}
.videoOverlay {
  width: 100%;
  aspect-ratio: 252/118;
  object-fit: cover;
  overflow: hidden;
  display: flex;
}
.video {
  position: relative;
  height: 100%;
  left: 16%;
}
.videoImage {
  position: absolute;
  width: 19rem;
  height: 25.9rem;
  z-index: 1;
  background: linear-gradient(
    180deg,
    rgba(209, 227, 227, 1) 50%,
    rgba(186, 214, 214, 1) 100%
  );
  transition: all 0.3s ;
  cursor: pointer;
}

#videoText {
  position: relative;
  width: 95%;
  height: 85%;
  margin: 10%;
  transition: all 0.3s;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}


.smallImage {
  width: 47.5%;
  aspect-ratio: 15/12;
  object-fit: cover;
}
.tallImage {
  width: 30.8%;
  aspect-ratio: 120/225;
  object-fit: cover;
}
.description {
  color: white;
  font-weight: 300;
  width: 80%;
  font-size: 1.4rem;
  line-height: 1.9rem;
  letter-spacing: 0.02rem;
  margin-bottom: 0;

}
.date {
  font-size: 0.9rem;
  letter-spacing: 0.02rem;
  color: white;
}
.play {
  width: 9%;
}
</style>
