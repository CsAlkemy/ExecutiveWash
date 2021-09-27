<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6">
    <div class="py-10">
      <div
        class="grid grid-cols-1 sm:grid-cols-3 gap-x-0 md:gap-x-5 gap-y-5 sm:gap-y-2 lg:gap-x-16"
      >
        <div
          v-for="data in cardData"
          :key="data.name"
          :class="data.color"
          class="bg-white rounded-3xl justify-center px-6 py-9 shadow-lg w-full sm:max-w-xs cursor-pointer transform-none md:transform duration-500 hover:-translate-y-1"
        >
          <h1 :class="data.text" class="text-4xl font-bold mb-5">
            {{ data.name }}
          </h1>
          <div :class="data.text" class="flex my-4">
            <p class="text-3xl font-medium">$</p>
            <h1 class="text-7xl font-bold">{{ data.Amounts }}</h1>
            <p class="text-3xl font-medium">/up</p>
          </div>
          <img
            :src="data.Img"
            alt="car"
            class="object-contain w-full h-32 max-h-40 mb-9"
          />
          <div class="grid justify-center">
            <router-link
              to="appointment"
              class=" inline-flex bg-green-500 hover:bg-purple-500 text-white p-2 px-4 md:px-7 text-lg font-bold rounded-md"
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
import Suv from "@/assets/images/suv.png";
import Truck from "@/assets/images/truck.png";
import { ChevronRightIcon } from "@heroicons/vue/outline";
const cardData = [
  {
    name: "Car",
    Amounts: 20,
    Img: Car,
    color: "bg-white",
    text: "text-black",
  },
  {
    name: "Suv",
    Amounts: 20,
    Img: Suv,
    color: "bg-gray-900 place-self-center",
    text: "text-white",
  },
  {
    name: "Car",
    Amounts: 25,
    Img: Truck,
    color: "bg-white place-self-end",
    text: "text-black",
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
