<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 py-9">
    <img
      :src="Img"
      alt="banner"
      @click="openModal"
      class="cursor-pointer w-full h-56 sm:h-full rounded-3xl"
    />
    <TransitionRoot appear :show="isOpen" as="template">
      <Dialog as="div" @close="closeModal">
        <div
          class="fixed inset-0 z-10 overflow-y-auto bg-gray-700 bg-opacity-75"
        >
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
                      class="text-3xl font-bold uppercase tracking-tighter text-center text-green-500 mt-6"
                    >
                      Member Request
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
  </div>
</template>
<script>
import { ref } from "vue";
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogOverlay,
  DialogTitle,
} from "@headlessui/vue";

export default {
  name: "Banner",
  components: {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogOverlay,
    DialogTitle,
  },
  data() {
    return {
      Img: require("@/assets/images/banner.png"),
      ImgPop: require("@/assets/images/vipmem.png"),
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
<style lang=""></style>
