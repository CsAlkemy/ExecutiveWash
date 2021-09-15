<template>
  <div class="bg-gray-900 py-16 mt-11 text-white relative">
    <div class=" bg-yellow-200 relative">
      <img :src="img" alt="" class="float-right" />
      <div class="clear-right"></div>
      <div class="bg-red-200 absolute left-80 top-12">
        <div class="p-10 bg-gray-100">ff</div>
        <div class="p-10 bg-gray-900">adfa</div>
      </div>
    </div>
  </div>
</template>
<script>
import Car from "@/assets/images/suvcta.png";
export default {
  date() {
    return {
      Car,
    };
  },
  props: {
    img: {
      type: String,
      default: Car,
    },
  },
};
</script>
<style></style>
