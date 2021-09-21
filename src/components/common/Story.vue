<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 py-6">
    <div class="mt-16 mb-12">
      <h1 class="text-5xl font-extrabold mb-12 ">Our Story</h1>
    </div>
    <div class="grid justify-items-end grid-cols-1 md:grid-cols-3 gap-y-5">
      <div class="col-span-2">
        <div class="grid grid-rows-1 gap-y-5">
          <div
            v-for="item in storyData"
            :key="item.name"
            :class="item.class"
            class="bg-white py-14 px-4 rounded-2xl"
          >
            <p class="text-lg font-light text-justify">{{ item.name }}</p>
          </div>
        </div>
      </div>
      <div class=" col-span-1  hidden md:contents">
        <img
          class=" object-cover h-full w-80 rounded-2xl"
          :src="Img"
          alt="Company Data"
        />
      </div>
    </div>
  </div>
</template>
<script>
import Img from "@/assets/images/6.png";
const storyData = [
  {
    class: "bg-gray-200 font-semibold",
    name:
      "Executive Wash was established in 2001. It is a family owned business and a lot of pride is taken into its integrity. We are one of the very few still existent high quality hand washes.",
  },
  {
    name:
      "What makes us stand out from the rest is that we have put in place many things to help achieve a complex and speedy wash without one machine touching your vehicle.  Our establishment truly emphasizes the importance of the meaning quality to our staff and detailers.",
  },
  {
    name:
      "Executive Wash does not take any shortcuts when it comes customer service and we are geniuses in choosing the right product for your vehicle. Come see us soon and witness what we are about.",
  },
];

export default {
  name: "Story",
  data() {
    return {
      storyData,
      Img,
    };
  },
};
</script>
<style></style>
