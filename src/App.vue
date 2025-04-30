<script setup lang="ts">
import Heading from './components/Heading.vue'
import HeroSection from './components/HeroSection.vue';
import GallerySection from './components/GallerySection.vue';
import PageFooter from './components/PageFooter.vue';
</script>

<template>

  <div class="bg-neutral-500 sm:p-6 sm:py-2 lg:px-10 lg:py-6">
    <Heading/>
    <HeroSection/>
  </div>
  <div class="bg-teal-500 sm:p-6 lg:px-10 lg:py-16">
  <GallerySection/>
  </div>
  <div class="bg-neutral-500 sm:p-12 lg:px-10 lg:py-6">
    <PageFooter/>
  </div>

</template>
