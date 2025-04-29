<script setup lang="ts">
import Heading from './components/Heading.vue'
import HeroSection from './components/HeroSection.vue';
import GallerySection from './components/GallerySection.vue';
</script>

<template>

  <div class="bg-neutral-500 lg:px-10 lg:p-6">
    <Heading/>
    <HeroSection/>
  </div>
  <div class="bg-teal-500 lg:px-10 lg:py-16">
  <GallerySection/>
  </div>

</template>
