<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6">
    <div class="py-10">
      <div
        class="grid grid-cols-1 sm:grid-cols-3 gap-x-0 md:gap-x-5 gap-y-5 sm:gap-y-2 lg:gap-x-16"
      >
        <div class="bg-white rounded-3xl px-6 py-9 shadow-lg">
          <h1 class="text-4xl font-bold">Car</h1>
          <p class="text-7xl font-bold tracking-tight">
            <sup class="text-3xl font-semibold">$</sup>20<sup
              class="text-3xl font-semibold"
              >/up</sup
            >
          </p>
          <img :src="Car" alt="car" class="mb-14" />
          <div class="grid justify-center">
            <router-link
              to="appointment"
              class=" inline-flex  bg-purple-500 hover:bg-green-400 text-white p-3 px-4 md:px-7 text-lg font-bold rounded-md"
            >
              <span>Book Now</span>
              <ChevronRightIcon class="h-5 w-5 my-auto" />
            </router-link>
          </div>
        </div>

        <div class="bg-gray-900  rounded-3xl px-6 py-9">
          <h1 class="text-4xl text-white font-bold">Suv</h1>
          <p class="text-7xl font-bold text-white tracking-tight">
            <sup class="text-3xl font-semibold">$</sup>20<sup
              class="text-3xl font-semibold"
              >/up</sup
            >
          </p>
          <img :src="Car" alt="car" class="mb-14" />
          <div class="grid justify-center">
            <router-link
              to="appointment"
              class=" inline-flex  bg-purple-500 hover:bg-green-400 text-white p-3 px-4 md:px-7 text-lg font-bold rounded-md"
            >
              <span>Book Now</span>
              <ChevronRightIcon class="h-5 w-5 my-auto" />
            </router-link>
          </div>
        </div>

        <div class="bg-white rounded-3xl px-6 py-9">
          <h1 class="text-4xl font-bold">Truck</h1>
          <p class="text-7xl font-bold tracking-tight">
            <sup class="text-3xl font-semibold">$</sup>20<sup
              class="text-3xl font-semibold"
              >/up</sup
            >
          </p>
          <img :src="Car" alt="car" class="mb-14" />
          <div class="grid justify-center">
            <router-link
              to="appointment"
              class=" inline-flex  bg-purple-500 hover:bg-green-400 text-white p-3 px-4 md:px-7 text-lg font-bold rounded-md"
            >
              <span>Book Now</span>
              <ChevronRightIcon class="h-5 w-5 my-auto" />
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Car from "@/assets/images/car.png";
import { ChevronRightIcon } from "@heroicons/vue/outline";
const cardData = [
  {
    name: "Car",
    Amounts: 20,
    Img: "Image",
    isFeatured: false,
  },
  {
    name: "Suv",
    Amounts: 150,
    Img: "Image",
    isFeatured: true,
  },
  {
    name: "Car",
    Amounts: 20,
    Img: "Image",
    isFeatured: false,
  },
];
export default {
  name: "WorkTypeCard",
  components: {
    ChevronRightIcon,
  },
  data() {
    return {
      cardData,
      Car,
    };
  },
};
</script>
<style></style>
