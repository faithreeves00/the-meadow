<script setup lang="ts">
</script>

<template>
  <div class="flex justify-between items-center text-teal-500">
    <div class="flex items-center gap-x-6">
      <img src="../assets/menu.svg" alt="logo" class="w-[24px] h-[24px] block md:hidden"/>
    <text class="text-4xl font-italianno">The Meadow</text>
  </div>
  <div class="flex text-base font-inter md:gap-x-7 lg:gap-x-12 hidden md:flex">
    <text class="underline underline-offset-5 decoration-1">Home</text> 
    <text class="hover:underline hover:underline-offset-5 hover:decoration-1">About Us</text>
    <text class="hover:underline hover:underline-offset-5 hover:decoration-1">Contact Us</text>
    <text class="hover:underline hover:underline-offset-5 hover:decoration-1">Services</text>
  </div>
  <div class="flex gap-4 lg:gap-6">
    <img src="../assets/search.svg" alt="search"/>
    <img src="../assets/account_circle.svg" alt="user"/>
    <img src="../assets/teal_shopping_cart.svg" alt="cart"/>
  </div>
</div>
</template>
