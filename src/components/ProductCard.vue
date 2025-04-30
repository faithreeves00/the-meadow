<script setup lang="ts">
defineProps({
  name: String,
  price: String,
  image: String
});
</script>

<template>
    <div class="bg-neutral-500 w-[265px] h-[342px] px-7 py-2 rounded-2xl">
  <div
    class="flex flex-col items-center justify-center gap-y-[22px]"
  >
    <img
    :src="image"
      alt="flower"
      class="aspect-auto w-[202px] max-h-[236px]"
    />
    <div class="flex justify-between items-center w-full">
      <div class="flex flex-col text-teal-500">
        <text class="font-inter-medium text-xl">{{ name }}</text>
        <text class="font-inter text-base">${{ price }}</text>
      </div>
      <div class="group">
      <button
        class="flex border-2 border-teal-500 rounded-full w-[44px] h-[44px] items-center justify-center bg-transparent text-teal-500 hover:bg-teal-500 hover:text-white"
      >
        <img src="../assets/teal_shopping_cart.svg" alt="add to cart" class="group-hover:hidden"/>
        <img
          src="../assets/cream_shopping_cart.svg"
          alt="add to cart"
          class="hidden group-hover:block"/>
      </button>
    </div>
    </div>
</div>
  </div>
</template>
