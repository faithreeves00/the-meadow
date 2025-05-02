<script setup lang="ts">
defineProps({
  name: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="group">
    <button
      class="flex border-2 border-teal-500 rounded-full w-[44px] h-[44px] items-center justify-center bg-transparent text-teal-500 hover:bg-teal-600 hover:border-teal-600 hover:text-white"
      aria-label="Add {{ name }} to cart"
    >
      <img
        src="../../assets/icons/teal_shopping_cart.svg"
        alt="add to cart"
        class="group-hover:hidden"
      />
      <img
        src="../../assets/icons/cream_shopping_cart.svg"
        alt="add to cart"
        class="hidden group-hover:block"
      />
    </button>
  </div>
</template>
