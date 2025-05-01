<template>
  <div
    class="flex flex-col items-center justify-start reverse items-start py-8 gap-y-8 md:py-15 md:gap-x-17 md:flex-row lg:flex-row lg:py-16 lg:gap-x-17"
  >
    <!-- Hero Image -->
    <img
      src="../assets/images/meadow.png"
      alt="A meadow with flowers"
      class="max-w-[355px] rounded-xl"
    />
    <!-- Hero Text -->
    <div
      class="flex flex-col justify-between h-full max-w-[517px] gap-y-7 md:min-h-[236px] lg:min-h-[236px]"
    >
      <div
        class="flex flex-col text-teal-500 text-left text-wrap gap-y-4 lg:gap-y-6"
      >
        <h1 class="font-italiana text-4xl md:text-4xl lg:text-5xl">
          Welcome to The Meadow
        </h1>
        <p class="font-inter text-base md:text-base lg:text-xl">
          Explore nature's beauty with carefully curated floral designs that
          bring elegance and tranquility to any space.
        </p>
      </div>

      <!-- Hero Button -->
      <button
        class="drop-shadow-lg self-start px-4.5 py-2 text-white bg-teal-500 hover:bg-teal-600 rounded-full font-inter text-base lg:w-[210px] lg:h-[45px]"
      >
        Explore the Collection
      </button>
    </div>
  </div>
</template>
