<script setup lang="ts">
defineProps({
  image: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <img
    :src="image"
    :alt="`Image of ${name}`"
    class="aspect-auto w-[202px] max-h-[236px]"
  />
</template>
