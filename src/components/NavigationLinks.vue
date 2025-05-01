<template>
  <div class="flex text-base font-inter md:gap-x-7 lg:gap-x-12 hidden md:flex">
    <a href="#" class="nav-link nav-link-active">Home</a>
    <a href="#" class="nav-link">About Us</a>
    <a href="#" class="nav-link">Contact Us</a>
    <a href="#" class="nav-link">Services</a>
  </div>
</template>

<style scoped>
.nav-link {
  text-decoration: none;
  transition: text-decoration 0.2s ease-in-out;
}

.nav-link:hover {
  text-decoration: underline;
  text-underline-offset: 5px;
  text-decoration-thickness: 1px;
}

.nav-link-active {
  text-decoration: underline;
  text-underline-offset: 5px;
  text-decoration-thickness: 1px;
}
</style>
