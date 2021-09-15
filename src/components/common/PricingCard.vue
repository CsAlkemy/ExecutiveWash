<template>
  <div class="grid grid-rows-3 bg-white rounded-md shadow-lg">
    <div class="row-span-1">
      <img :src="img" alt="card banner" class="object-fill h-full w-full" />
    </div>
    <div class="row-span-2 p-3">
      <div class="flex my-3 justify-between">
        <h1 class="text-xl tracking-tight font-semibold ">Package Name</h1>
        <p class="place-self-end bg-green-500 text-white px-4 rounded-2xl">
          Popular
        </p>
      </div>
      <div class="flex my-4">
        <p class="text-2xl font-medium">$</p>
        <h1 class="text-7xl font-bold">20</h1>
        <p class="text-2xl font-medium">/up</p>
      </div>
      <h3 class="text-gray-500 text-base font-medium mb-4">Includes</h3>
      <ul>
        <li>
          <p class="inline-flex">
            <CheckCircleIcon class="h-5 w-5 my-auto text-green-400" /><span>
              One</span
            >
          </p>
        </li>
        <li>
          <p class="inline-flex">
            <CheckCircleIcon class="h-5 w-5 my-auto text-green-400" /><span>
              One</span
            >
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { CheckCircleIcon } from "@heroicons/vue/outline";

export default {
  name: "Price Card",
  props: {
    img: {
      type: String,
      default: require("../../assets/images/vip.jpg"),
    },
  },
  components: {
    CheckCircleIcon,
  },
};
</script>
<style></style>
