<template>
  <a :href="props.href" target="blank_" rel="nofollow noopener"><slot /></a>
</template>

<script setup>
const props = defineProps({
  href: "",
});
</script>
