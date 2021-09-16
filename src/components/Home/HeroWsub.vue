<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6">
    <div
      class="my-8 sm:my-11 py-24 sm:py-32 text-white rounded-2xl overflow-hidden relative"
    >
      <img
        class="absolute inset-0 h-full w-full object-cover"
        :src="logo"
        alt="banner"
      />
      <div class="absolute inset-0 bg-gray-900 bg-opacity-75"></div>
      <div class="flex h-full items-center justify-center relative">
        <div>
          <h1
            class="text-5xl md:text-6xl  uppercase tracking-tight text-center font-semibold"
          >
            Fastest and
          </h1>
          <h1
            class="text-5xl md:text-6xl  uppercase tracking-tight text-center font-semibold"
          >
            DETAILED <span class="text-purple-500">CAR WASH</span>
          </h1>
          <p
            class="text-xl font-normal tracking-wider text-center mt-9 capitalize"
          >
            we are the best car wash on pembroke pines. <br />
            we know what you want from a car wash
          </p>
          <div class="flex gap-4 justify-center mt-9">
            <router-link
              class="p-2 px-4 py-3 text-base font-semibold bg-white rounded-md text-black hover:bg-green-500 hover:text-white"
              to="appointment"
              >Appointment</router-link
            >
            <a
              class="p-2 px-4 py-3 text-base font-semibold bg-purple-500 hover:bg-green-500  rounded-md"
              href=""
              >Navigate Me</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
  props: {
    logo: {
      type: String,
      default: require("../../assets/images/heroBanner.jpg"),
    },
  },
};
</script>
<style></style>
