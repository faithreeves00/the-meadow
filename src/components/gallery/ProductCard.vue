<script setup lang="ts">
import ProductImage from "./ProductImage.vue";
import ProductInfo from "./ProductInfo.vue";

defineProps({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div
    class="flex justify-center bg-neutral-500 w-[265px] h-[342px] px-7 py-2 rounded-2xl drop-shadow-lg"
  >
    <div class="flex flex-col items-center justify-center gap-y-[22px]">
      <ProductImage :image="image" :name="name" />
      <ProductInfo :name="name" :price="price" />
    </div>
  </div>
</template>
