<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 py-10">
    <div class="grid grid-cols-1 md:grid-cols-3 justify-between gap-x-6 gap-5">
      <div
        v-for="item in cardData"
        :key="item.bgClass"
        :class="item.bgClass"
        class=" bg-gray-900 hover:bg-gray-300 hover:text-black text-white cursor-pointer bg-email bg-cover bg-center h-64 rounded-2xl bg-blend-soft-light p-5"
      >
        <div class="grid grid-rows-1">
          <div class="text-center">
            <component
              :is="item.icon"
              class="h-24 w-24 text-green-500 mb-5"
              aria-hidden="true"
            />
            <a :href="item.link" :class="item.textStyle" class="font-bold"
              >{{ item.text }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {
  PhoneIcon,
  MailOpenIcon,
  LocationMarkerIcon,
} from "@heroicons/vue/outline";

const cardData = [
  {
    bgClass: "bg-email",
    textStyle: "text-2xl md:text-xl lg:text-xl",
    text: "Info@execwash.com",
    icon: MailOpenIcon,
    link: "mailto:info@execwash.com",
  },
  {
    bgClass: "bg-phone",
    textStyle: "text-2xl",
    text: "+1 (954) 534-9323",
    icon: PhoneIcon,
    link: "tel:+1 (954) 534-9323",
  },
  {
    bgClass: "bg-location",
    textStyle: "text-2xl",
    text: "12351 NW 18 ST PEMBROKE PINES, FL 33026",
    icon: LocationMarkerIcon,
  },
];

export default {
  name: "contactCard",
  setup() {
    return {
      cardData,
    };
  },
};
</script>
<style lang=""></style>
