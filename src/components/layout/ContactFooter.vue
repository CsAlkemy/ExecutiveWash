<template>
  <footer
    class="bg-gray-900 fixed bottom-0 w-full rounded-t-2xl sm:rounded-none"
  >
    <div class="flex justify-center mx-auto w-6/12 text-white p-3">
      <a href="tel:(954) 534-9323" class="p-3 rounded-full hover:bg-green-500">
        <DeviceMobileIcon class="h-8 w-8"
      /></a>

      <a href="#" class="p-3 rounded-full hover:bg-green-500">
        <LocationMarkerIcon class="h-8 w-8"
      /></a>

      <a
        href="mailto:info@executivewashpines.com"
        class="p-3 rounded-full hover:bg-green-500"
      >
        <MailIcon class="h-8 w-8"
      /></a>
    </div>
  </footer>
</template>

<script>
import {
  DeviceMobileIcon,
  LocationMarkerIcon,
  MailIcon,
} from "@heroicons/vue/outline";
export default {
  name: "Footer",
  components: { DeviceMobileIcon, LocationMarkerIcon, MailIcon },
  setup() {},
};
</script>

<style scoped></style>
