<template>
  <div class="treat">
    <div class="linkTitle" @click="expandCollapse">
      <h2>{{ treat.treatmentTitle }}</h2>
      <img
        class="arrow"
        :class="{ active: isOpen }"
        src="~/assets/arrow-open.svg"
        alt="open/close"
      />
    </div>
    <div class="content">
      <SanityContent :blocks="treat.description" :serializers="serializers" />
    </div>
    <div class="titleLine"></div>
  </div>
</template>

<script setup>
import SanityLink from "~/components/SanityLink.vue";
const serializers = {
  marks: {
    link: SanityLink,
  },
};
const props = defineProps({
  treat: null,
});

const isOpen = ref(false);

function expandCollapse(e) {
  const contentElement = e.currentTarget.nextSibling;
  const contentHeight = contentElement.scrollHeight;

  if (isOpen.value == false) {
    isOpen.value = true;
    contentElement.style.maxHeight = contentHeight + "px";
    contentElement.style.margin = "0 auto 7% auto";
    setTimeout(() => {
      contentElement.style.maxHeight = "fit-content";
    }, 400);
  } else {
    isOpen.value = false;
    contentElement.style.maxHeight = contentHeight + "px";
    contentElement.style.margin = "0 auto 0 auto";
    setTimeout(() => {
      contentElement.style.maxHeight = "0";
    }, 1);
  }
}
</script>

<style scoped>
.content {
  width: 80%;
  margin: 0 auto 0 auto;
  font-size: 1.7rem;
  line-height: 2.3rem;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s cubic-bezier(0.25, 0.8, 0.5, 1),
    margin 0.4s cubic-bezier(0.25, 0.8, 0.5, 1);
}

.arrow {
  width: 1.8rem;
  transform: rotate(0);
  transition: transform 0.4s;
}

.active {
  transform: rotate(180deg);
}

.linkTitle {
  width: 83.7rem;
  display: inline-flex;
  justify-content: space-between;
  cursor: pointer;
}

.linkTitle h2 {
  font-size: 1.7rem;
  line-height: 2rem;
  font-weight: 500;
  margin: 2.5% 0 3% 0;
}

.titleLine {
  width: 100%;
  height: 0.12rem;
  min-height: 1.5px;
  background-color: black;
}
</style>
