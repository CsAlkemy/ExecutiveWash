<template>
  <div class="bg-gray-900 fixed bottom-0 w-full">
    <div class="flex justify-around mx-auto text-white p-3">
      <a href="tel:(954) 534-9323" class="p-3 rounded-full hover:bg-green-500"
        ><DeviceMobileIcon class="h-8 w-8"
      /></a>

      <a
        href="https://maps.google.com/maps/dir//Executive+Wash+%26+Detail+12351+NW+18th+St+Pembroke+Pines,+FL+33026+United+States/@26.0240441,-80.3117539,16z/data=!4m5!4m4!1m0!1m2!1m1!1s0x88d9a65d6a4ccd19:0x2544fec230b22d83"
        class="p-3 rounded-full rotate-45 bg-black hover:bg-green-500"
        target="_blank"
        ><PaperAirplaneIcon class="h-8 w-8" />
      </a>

      <a
        href="mailto:info@executivewashpines.com"
        class="p-3 rounded-full hover:bg-green-500"
        ><MailIcon class="h-8 w-8"
      /></a>
    </div>
  </div>
</template>

<script>
import {
  DeviceMobileIcon,
  LocationMarkerIcon,
  MailIcon,
  PaperAirplaneIcon,
} from "@heroicons/vue/outline";

export default {
  components: {
    DeviceMobileIcon,
    LocationMarkerIcon,
    MailIcon,
    PaperAirplaneIcon,
  },
  setup() {},
};
</script>
