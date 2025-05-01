<script setup lang="ts">
import AddToCartButton from "./AddToCartButton.vue";

defineProps({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="flex justify-between items-center w-full">
    <div class="flex flex-col text-teal-500">
      <p class="font-inter text-xl">{{ name }}</p>
      <p class="font-inter text-base">${{ price }}</p>
    </div>

    <AddToCartButton :name="name" />
  </div>
</template>
