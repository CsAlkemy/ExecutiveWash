<template>
  <div class="bg-gray-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 my-12">
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
                  class="object-cover w-full h-full rounded-r-xl"
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

          <div
            @click="openModal"
            class="bg-white cursor-pointer transform-none md:transform duration-500 hover:-translate-y-1 shadow-lg"
          >
            <div class="grid grid-cols-5">
              <div class="col-span-2">
                <img
                  :src="Img"
                  class="object-cover w-full h-full rounded-r-xl"
                  alt="bannerer"
                />
              </div>
              <div class="col-span-3 p-4 text-black">
                <h1 class="text-xl font-semibold tracking-tight mb-3">
                  Be A VIP Member
                </h1>
                <p class="text-base font-light tracking-wide mb-1">
                  Receive 10% Cash Back in form of reward points on every
                  transaction. You can redeem you points and use them.
                  <span class="invisible"
                    >transaction. You can redeem you points</span
                  >
                </p>
                <button
                  href="/"
                  class="text-green-400 hover:text-blue-500 text-base font-normal"
                >
                  More..
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal">
      <div class="fixed inset-0 z-10 overflow-y-auto bg-gray-700 bg-opacity-75">
        <div class="min-h-screen px-4 text-center">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <DialogOverlay class="fixed inset-0" />
          </TransitionChild>

          <span class="inline-block h-screen align-middle" aria-hidden="true">
            &#8203;
          </span>

          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <div
              class="inline-block max-w-3xl mx-auto overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl"
            >
              <div class="grid grid-cols-1 sm:grid-cols-2 mx-auto">
                <div>
                  <img :src="ImgPop" alt="sideImage" class="h-full w-full" />
                </div>
                <div>
                  <h1
                    class="text-3xl font-semibold uppercase tracking-tighter text-center text-green-500 mt-6"
                  >
                    VIP Member Request
                  </h1>
                  <div class="p-5">
                    <form action="">
                      <div class="mb-4">
                        <input
                          class=" w-full p-2 border-2 border-green-500 rounded-md"
                          id="name"
                          type="text"
                          required
                          placeholder="Your Name"
                        />
                      </div>
                      <div class="mb-4">
                        <input
                          class=" w-full p-2 border-2 border-green-500 rounded-md"
                          id="phone"
                          type="phone"
                          required
                          placeholder="Phone"
                        />
                      </div>
                      <div class="mb-4">
                        <input
                          class=" w-full p-2 border-2 border-green-500 rounded-md"
                          id="email"
                          type="email"
                          required
                          placeholder="Email"
                        />
                      </div>
                      <div class="mb-4 flex justify-between mt-8">
                        <button
                          @click="closeModal"
                          class="p-1 px-5 border-2  border-red-500 rounded-lg text-black text-lg font-medium hover:bg-red-500 hover:text-white"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          class="p-1 px-7 rounded-lg text-white text-lg font-medium bg-green-500"
                        >
                          Send
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
<script>
import HandWash from "@/assets/images/handCarWash.jpg";
import MachineWash from "@/assets/images/machine wash.jpg";
import CompleteWash from "@/assets/images/complete.jpg";
import { ref } from "vue";
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogOverlay,
  DialogTitle,
} from "@headlessui/vue";

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
];

export default {
  name: "Featured Card",
  components: {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogOverlay,
    DialogTitle,
  },
  data() {
    return {
      features,
      Img: require("@/assets/images/vip.jpg"),
      ImgPop: require("@/assets/images/vipmem.jpg"),
    };
  },

  setup() {
    const isOpen = ref(false);

    return {
      isOpen,
      closeModal() {
        isOpen.value = false;
      },
      openModal() {
        isOpen.value = true;
      },
    };
  },
};
</script>
<style></style>
