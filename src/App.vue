<script setup lang="ts">
import Heading from "./components/Heading.vue";
import HeroSection from "./components/HeroSection.vue";
import GallerySection from "./components/GallerySection.vue";
import PageFooter from "./components/PageFooter.vue";
</script>

<template>
  <!-- Header + Hero Section -->
  <header class="bg-neutral-500 p-6 py-4 lg:px-10 lg:py-6" role="banner">
    <Heading />
    <HeroSection />
  </header>

  <!-- Gallery Section -->
  <main class="bg-teal-500 p-6 lg:px-10 lg:py-16" role="main">
    <GallerySection />
  </main>

  <!-- Footer -->
  <footer class="bg-neutral-500 p-12 lg:px-10 lg:py-10" role="contentinfo">
    <PageFooter />
  </footer>
</template>
