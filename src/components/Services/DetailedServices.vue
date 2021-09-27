<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 my-12">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5 ">
      <div v-for="item in data" :key="item.title">
        <div class="mt-16 mb-12">
          <h1 class="text-5xl font-extrabold mb-12 ">{{ item.title }}</h1>
        </div>
        <div
          class="flex  flex-nowrap justify-between p-4 py-6 rounded-t-2xl bg-gray-900 text-white"
        >
          <h4 class=" text-base font-semibold">Service</h4>
          <div class="flex flex-nowrap gap-x-7">
            <h4 class="px-2 rounded-full bg-green-500">Standard</h4>
            <h4 class="px-2 rounded-full bg-white text-black">Oversize</h4>
          </div>
        </div>
        <div class="bg-gray-50 py-3 shadow-lg rounded-b-2xl">
          <div
            v-for="row in item.rows"
            :key="row.name"
            class="flex  flex-nowrap p-2 justify-between px-4"
          >
            <h4 class=" text-lg font-semibold tracking-tighter">
              {{ row.name }}
            </h4>
            <div class="flex flex-nowrap gap-x-7 px-11">
              <h4
                :class="row.text"
                class="text-3xl font-medium tracking-tighter"
              >
                {{ row.standard }}
              </h4>
              <h4 class="text-3xl font-medium tracking-tighter">
                {{ row.oversize }}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const data = [
  {
    id: 0,
    title: "Carte Services",
    rows: [
      {
        name: "Seat Cleaning",
        standard: "$30",
        oversize: "$40",
      },
      {
        name: "Leather Creme Care",
        standard: "$45",
        oversize: "$55",
      },
      {
        name: "Hand Wax & Paint Sealant",
        standard: "$35",
        oversize: "$45",
      },
      {
        name: "Carpet Cleaning",
        standard: "$35",
        oversize: "$45",
      },
      {
        name: "Mal Odor Treatment",
        standard: "$10",
        oversize: "$10",
      },
      {
        name: "Buffing & Waxing",
        standard: "Custom",
        text: "text-green-500",
      },
    ],
  },
  {
    id: 1,
    title: "Wash Services",
    rows: [
      {
        name: "Interior Handwash",
        standard: "$40",
        oversize: "$50",
      },
      {
        name: "Extra Cleaning Services",
        standard: "Custom",
        text: "text-green-500",
      },
      {
        name: "Rubber Floor Mats",
        standard: "$5",
      },
      {
        name: "Rear Cargo Rubber Mat",
        standard: "$5",
      },
      {
        name: "Carpet Floor Mats",
        standard: "$8",
      },
      {
        name: "Rear Cargo Carpet Mat",
        standard: "$7",
      },
    ],
  },
];
export default {
  name: "Custom Services",
  data() {
    return {
      data,
    };
  },
};
</script>
<style lang=""></style>
