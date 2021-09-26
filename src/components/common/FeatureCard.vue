<template>
  <div class="bg-gray-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="pt-14 pb-20 text-white ">
        <h1 class="text-2xl font-medium tracking-tight">
          It's Time to Check Our
        </h1>
        <h1 class="text-4xl font-extrabold mb-12">Featured Work</h1>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-14">
          <div
            v-for="item in features"
            :key="item.title"
            class="bg-white cursor-pointer transform-none md:transform duration-500 hover:-translate-y-1 shadow-lg"
          >
            <div class="grid grid-cols-5">
              <div class="col-span-2">
                <img
                  :src="item.img"
                  class="object-cover w-full max-h-64 h-64 rounded-r-xl"
                  alt="bannerer"
                />
              </div>
              <div class="col-span-3 p-4 text-black">
                <h1 class="text-xl font-semibold tracking-tight mb-3">
                  {{ item.title }}
                </h1>
                <p class="text-base font-light tracking-wide mb-1">
                  {{ item.details }}
                </p>
                <router-link
                  :to="item.link"
                  class="text-green-400 hover:text-blue-500 text-base font-normal"
                >
                  More..
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import HandWash from "@/assets/images/handCarWash.jpg";
import MachineWash from "@/assets/images/machine wash.jpg";
import CompleteWash from "@/assets/images/complete.jpg";
import Vip from "@/assets/images/vip.jpg";

const features = [
  {
    title: "Hand Wash",
    details:
      "If you choose to not pass your vehicle through our state of the art wash tunnel, then we offer a no machine friction solution to washing your vehicle. Your vehicle will be washed with only experienced human hands and mitts",
    img: HandWash,
    link: "services",
  },
  {
    title: "Machine Wash",
    details:
      "We offer speedy service with our state-of-the-art tunnel wash using nothing but the best microfiber cloth with gentle, environmentally friendly cleaning detergents that are specially formulated for all types of vehicles",
    img: MachineWash,
    link: "services",
  },
  {
    title: "Complete Detail Services",
    details:
      "We offer collection of detailing services that cater to all types of vehicles. From waxing to shampooing, scratch removal to headlight restoration, we do it all.",
    img: CompleteWash,
    link: "services",
  },
  {
    title: "Be A VIP Member",
    details:
      "Receive 10% Cash Back in form of reward points on every transaction. You can redeem you points and use them.",
    img: Vip,
    link: "/",
  },
];

export default {
  name: "Featured Card",
  data() {
    return {
      features,
    };
  },
};
</script>
<style></style>
