<script setup lang="ts">
import ProductCard from "./ProductCard.vue";
import products from "../../assets/data/products.json";

function resolveImagePath(imagePath: string): string {
  return new URL(`../../assets/images/${imagePath}`, import.meta.url).href;
}
</script>

<template>
  <div class="py-8 lg:py-1">
    <!-- Section Heading -->
    <div class="text-neutral-500 flex flex-col text-left gap-y-4 lg:gap-y-7">
      <h2 class="font-italiana text-4xl md:text-4xl lg:text-5xl">
        Our Arrangements
      </h2>
      <p class="font-inter text-base md:text-base lg:text-xl">
        Explore our selection of thoughtfully designed floral arrangements.
      </p>
    </div>

    <!-- Product Cards -->
    <div
      v-if="products.length"
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

    <!-- Fallback Message -->
    <p v-else class="text-neutral-500 text-center py-8">
      No products available at the moment.
    </p>
  </div>
</template>
