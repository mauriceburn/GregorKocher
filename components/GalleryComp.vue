<template>
  <div class="gallery" v-if="gallery">
    <div class="column">
      <div class="videoOverlay">
        <video class="video" controls>
          <source :src="gallery.videoUrl" type="video/ogg" />
          <source :src="gallery.videoUrl" type="video/mp4" />
        </video>
        <img
          class="videoImage"
          :src="$urlFor(gallery.video.videoImage).size(600).url()"
          alt="Gregor Kocher Thoraxchirurgie"
        />
        <div class="description">  </div>
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
}
.video {
  width: 88.7%;
  margin-left: 11.3%;
}
.videoImage {
  position: relative;
  width: 54.65rem;
  aspect-ratio: 252/118;
  object-fit: cover;
  opacity: 1;
  transform: translateY(-101.5%);
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
</style>
