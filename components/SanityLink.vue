<template>
  <div>
    <a :href="props.href" target="blank_" rel="nofollow noopener"><slot /></a>
  </div>
</template>

<script setup>
const props = defineProps({
  href: "",
});
</script>
