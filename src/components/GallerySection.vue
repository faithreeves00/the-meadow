<script setup lang="ts">
import ProductCard from "./ProductCard.vue";
import products from "../assets/products.json";

function resolveImagePath(imagePath: any) {
  return new URL(`../assets/${imagePath}`, import.meta.url).href;
}
</script>

<template>
  <div>
    <div class="text-neutral-500 flex flex-col text-left sm:gap-y-4 lg:gap-y-7">
      <text class="font-italiana sm:text-4xl lg:text-5xl"
        >Our Arrangements</text
      >
      <text class="font-inter sm:text-base lg:text-xl"
        >Explore our selection of thoughtfully designed floral
        arrangements.</text
      >
    </div>
    <div
      class="grid grid-cols-2 gap-y-13 py-13 lg:grid-cols-3 items-start justify-items-start"
    >
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :name="product.name"
        :price="product.price"
        :image="resolveImagePath(product.image)"
      />
    </div>
  </div>
</template>
