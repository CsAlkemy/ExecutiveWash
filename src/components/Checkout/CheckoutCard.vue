<template>
  <div class="grid grid-cols-1 sm:grid-cols-3  bg-green-500 rounded-lg">
    <div class=" col-span-2 rounded-lg p-8">
      <h1
        class="text-lg font-medium uppercase tracking-tighter mb-4 text-white"
      >
        Order Details
      </h1>
      <div class=" mb-8 flex items-center justify-center">
        <div
          class=" bg-gray-900 h-48 w-full max-w-5xl rounded-2xl flex items-center"
        >
          <div class="flex">
            <div
              class="w-72 h-72 rounded-full bg-green-900 mix-blend-color-dodge md:mix-blend-lighten -mx-56 sm:-mx-48"
            ></div>
          </div>
          <div class="text-white ml-5 md:ml-32">
            <h3 class="text-lg font-semibold">Forbiden Frequencies LLC</h3>
            <p class="mb-4">Koreay Burroughs</p>
            <div class="flex justify-between gap-4">
              <div class="flex gap-1">
                <PhoneIcon class="h-5 w-5" />
                <p>(727) 666-1123</p>
              </div>
              <div class="flex gap-1 mr-6">
                <LocationMarkerIcon class="h-5 w-5" />
                <p class="text-sm uppercase">14845 54TH Way NY</p>
              </div>
            </div>
            <div class="flex gap-1 mr-6 mt-2">
              <MailIcon class="h-5 w-5" />
              <p class="text-sm">Koreay@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1
          class="text-lg font-medium uppercase tracking-tighter mb-4 text-white"
        >
          Invoice Details
        </h1>
        <div class="bg-gray-900 rounded-lg p-5 md:p-10 text-white">
          <div class="flex justify-between">
            <div class="mb-7">
              <p class="uppercase font-normal tracking-tight text-xs">
                Invoice No:
              </p>
              <p class="uppercase font-semibold tracking-tight text-xl">
                INV4578786
              </p>
            </div>
            <div>
              <p class="uppercase font-normal tracking-tight  text-xs">
                Invoice Date:
              </p>
              <p class="uppercase font-semibold tracking-tight text-xl">
                21 May 2021
              </p>
            </div>
          </div>
          <hr class="border border-gray-600 mb-5" />
          <div class="flex justify-between">
            <p class="text-xl font-medium ">Late Fee</p>
            <p class="text-xl font-medium ">$400*1</p>
            <p class="text-xl font-medium ">$400</p>
          </div>
          <hr class="border border-gray-600 my-5" />
          <div class="flex justify-between">
            <div class="invisible">545</div>
            <div class="text-2xl font-medium">Total</div>
            <div class="text-2xl font-medium text-green-500">$400</div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-white rounded-lg p-8">
      <div class=""></div>
    </div>
  </div>
</template>
<script>
import {
  PhoneIcon,
  LocationMarkerIcon,
  MailIcon,
} from "@heroicons/vue/outline";
export default {
  name: "Checkbox card",
  components: {
    PhoneIcon,
    LocationMarkerIcon,
    MailIcon,
  },
};
</script>
<style></style>
