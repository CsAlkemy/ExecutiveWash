<template>
  <div class="bg-gray-900 text-white w-full">
    <div
      class="max-w-7xl mx-auto px-4 sm:px-6 pt-20 pb-14 divide-y-2 divide-gray-700"
    >
      <div
        class="grid grid-cols-2 md:grid-cols-6 gap-x-5 gap-y-5 md:gap-y-0 mb-8"
      >
        <div class=" col-span-2 ">
          <div class="flex-col">
            <h1
              class="text-gray-400 font-semibold text-base mb-6 uppercase tracking-wide"
            >
              About US
            </h1>
            <p class="text-white text-justify font-normal text-sm">
              We do our best to offer a Good Wash, Good Value, Fast Service and
              a Friendly Experience to every customer. Try us out. If you don't
              experience all four, talk to a manager and help us make every car
              a show car.
            </p>
          </div>
        </div>
        <div>
          <h1
            class="text-gray-400 font-semibold text-base mb-6 uppercase tracking-wide"
          >
            Sitemap
          </h1>
          <ul class="flex-col gap-y-2">
            <li class="hover:text-green-500">
              <routerLink to="/">Home</routerLink>
            </li>
            <li class="hover:text-green-500">
              <routerLink to="services">Services</routerLink>
            </li>
            <li class="hover:text-green-500">
              <routerLink to="gallery">Gallery</routerLink>
            </li>
            <li class="hover:text-green-500">
              <routerLink to="contact">Contact Us</routerLink>
            </li>
            <li class="hover:text-green-500">
              <routerLink to="about">About Us</routerLink>
            </li>
            <li class="hover:text-green-500">
              <routerLink to="appointment">Appointment</routerLink>
            </li>
          </ul>
        </div>
        <div>
          <h1
            class="text-gray-400 font-semibold text-base mb-6 uppercase tracking-wide"
          >
            Social
          </h1>
          <div class="flex gap-x-4">
            <a href="https://www.instagram.com/executivewash/" target="_blank"
              ><fa size="2x" :icon="['fab', 'instagram']"
            /></a>
            <a href="https://www.facebook.com/execwashdetail" target="_blank"
              ><fa size="2x" :icon="['fab', 'facebook-square']"
            /></a>
          </div>
        </div>
        <div class="col-span-2">
          <h1
            class="text-gray-400 font-semibold text-base mb-6 uppercase tracking-wide"
          >
            Subscribe to our newsletter
          </h1>
          <p class="text-white text-justify font-normal text-sm">
            Fill out the form and we will let you know about special offers,
            coupons and news.
          </p>
          <div
            class="grid grid-cols-3 gap-x-2 max-w-lg justify-center mx-auto my-10"
          >
            <input
              type="text"
              placeholder="Enter Your Email"
              class="col-span-2 p-2 placeholder-gray-600  rounded-md text-black "
            />
            <button
              class="col-span-1 p-2 bg-green-500 text-white text-lg font-medium rounded-md hover:bg-purple-500"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div class="py-3 pb-10">
        <p class="text-sm text-center">
          {{ yearJS }} &copy;
          <span class="font-semibold">Executive Wash & Details</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
const yearJS = new Date().getFullYear();

export default {
  name: "footerCom",
  components: {},
  data() {
    return {
      yearJS,
    };
  },
};
</script>

<style lang="scss"></style>
