<script setup lang="ts">
import ProductCard from './ProductCard.vue';
import products from '../assets/products.json';

function resolveImagePath(imagePath: any) {
    return new URL(`../assets/${imagePath}`, import.meta.url).href;
}
</script>

<template>
    <div class="">
        <div class="text-neutral-500 flex flex-col gap-y-7">
        <text class="font-italiana lg:text-5xl">Our Arrangements</text>
        <text class="font-inter lg:text-xl">Explore our selection of thoughtfully designed floral arrangements.</text>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
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