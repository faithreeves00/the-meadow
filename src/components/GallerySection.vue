<script setup lang="ts">
import ProductCard from "./ProductCard.vue";
import products from "../assets/products.json";

function resolveImagePath(imagePath: any) {
  return new URL(`../assets/${imagePath}`, import.meta.url).href;
}
</script>

<template>
  <div class="py-8 lg:py-1">
    <div class="text-neutral-500 flex flex-col text-left gap-y-4 lg:gap-y-7">
      <text class="font-italiana text-4xl md:text-4xl lg:text-5xl"
        >Our Arrangements</text
      >
      <text class="font-inter text-base md:text-base lg:text-xl"
        >Explore our selection of thoughtfully designed floral
        arrangements.</text
      >
    </div>
    <div
      class="flex flex-wrap gap-13 py-11 md:py-11 lg:gap-y-7"
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
