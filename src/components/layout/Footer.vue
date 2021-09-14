<template>
  <footer class="bg-gray-900 text-white w-full">
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
            <li class="hover:text-blue-400">
              <routerLink to="/">Home</routerLink>
            </li>
            <li class="hover:text-blue-400">
              <routerLink to="services">Services</routerLink>
            </li>
            <li class="hover:text-blue-400">
              <routerLink to="gallery">Gallery</routerLink>
            </li>
            <li class="hover:text-blue-400">
              <routerLink to="contact">Contact Us</routerLink>
            </li>
            <li class="hover:text-blue-400">
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
            coupons ann news.
          </p>
          <div class="flex gap-x-2 my-5 justify-evenly sm:justify-start">
            <input
              type="text"
              placeholder="Enter your email"
              class="p-2 text-black placeholder-gray-600 rounded-sm"
            />
            <button
              class="bg-purple-500 text-white p-2 rounded-sm hover:bg-green-300 font-semibold text-base hover:text-black"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div class="py-3 pb-10">
        <p class="text-sm text-center">
          2021 &copy; Executive Wash & Details. By
          <span
            class="text-base font-medium hover:bg-green-400 hover:text-gray-900"
            ><a target="_blank" href="https://bluespaces.netlify.app/"
              >ZapTwo</a
            ></span
          >
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  components: {},
};
</script>

<style lang="scss"></style>
