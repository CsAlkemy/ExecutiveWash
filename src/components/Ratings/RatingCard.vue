<template>
  <div class="max-w-lg  mx-auto px-4 sm:px-6 py-6 my-16">
    <div class="mx-auto bgColor rounded-lg">
      <img
        :src="Image"
        alt="ard Car"
        class="mx-auto object-cover h-64 w-full rounded-2xl "
      />
    </div>
    <h1 class="mt-6 text-3xl text-center font-semibold text-gray-600">
      Rate Your Experience
    </h1>

    <div class="max-w-lg mx-auto mt-6">
      <img
        class="w-24 h-24 rounded-full bg-blue-600 mx-auto -mb-12 border-double object-scale-down shadow-2xl "
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZwRcKvfO-COoyVIx-OZnS33i9mspvoOjRKLZo47jBXW9IARBk8uSpx2O7uiFZjQ-BasY&usqp=CAU"
        alt=""
      />

      <div class="bg-gray-900  pt-16">
        <h1 class="text-center  text-lg font-light text-gray-50 ">
          Hello, <span class="font-semibold">Emad</span>
        </h1>
        <p class="text-center text-gray-400 text-base justify-center pb-8">
          Thank you for taking your time to <br />
          give us your feedback.
        </p>
        <div class="bg-gray-200 py-4">
          <div class="px-10 flex justify-between">
            <StarIcon class="h-12 w-12 " />
            <StarIcon class="h-12 w-12 " />
            <StarIcon class="h-12 w-12 " />
            <StarIcon class="h-12 w-12 " />
            <StarIcon class="h-12 w-12 " />
          </div>
        </div>

        <div class="bg-gray-900 pt-9 px-10">
          <div class="invisible-checkboxes grid grid-cols-2 gap-3">
            <input type="checkbox" name="rGroup" value="1" id="r1" />
            <label class="checkbox-alias bg-white p-1 rounded-md px-3" for="r1"
              >Great!</label
            >
            <input type="checkbox" name="rGroup" value="2" id="r2" />
            <label class="checkbox-alias bg-white p-1 rounded-md px-3" for="r2"
              >Nice People</label
            >
            <input type="checkbox" name="rGroup" value="3" id="r3" />
            <label
              class="checkbox-alias col-span-2 bg-white p-1 rounded-md px-3"
              for="r3"
              >Professional</label
            >
            <input type="checkbox" name="rGroup" value="4" id="r4" />
            <label class="checkbox-alias bg-white p-1 rounded-md px-3" for="r4"
              >Supperb Detail</label
            >
            <input type="checkbox" name="rGroup" value="5" id="r5" />
            <label class="checkbox-alias bg-white p-1 rounded-md px-3" for="r5"
              >Poor!</label
            >
            <input type="checkbox" name="rGroup" value="6" id="r6" />
            <label class="checkbox-alias bg-white p-1 rounded-md px-3" for="r6"
              >Need Change</label
            >
            <input type="checkbox" name="rGroup" value="7" id="r7" />
            <label class="checkbox-alias bg-white p-1 rounded-md px-3" for="r7"
              >Great!</label
            >
          </div>
        </div>
        <div class=" py-6 px-10 ">
          <button
            class="p-2  bg-green-500 text-lg font-semibold text-center rounded-sm w-full"
          >
            Submit
          </button>
        </div>

        <div class="bg-gray-900 px-10 text-white pb-9">
          <ol class="text-xs gap-y-2 list-decimal">
            <li>
              I am authorizing you to post my testimonial anywhere online.
            </li>
            <li>I verify that my testimonial is accurate and true.</li>
            <li>
              I verify that I was not paid to leave this review or testimonial.
            </li>
            <li>
              I verify that have read and agree to the
              <span class="text-blue-500"
                ><a href="" target="_blank">Terms of services.</a></span
              >
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { StarIcon } from "@heroicons/vue/outline";
export default {
  name: "Ratings",
  components: {
    StarIcon,
  },
  data() {
    return {
      Image: require("@/assets/images/carr.png"),
    };
  },
};
</script>
<style scoped>
.customBg {
  background-color: #aad46f;
}
.checkbox-alias {
  transition: all 250ms ease-out;
}

.invisible-checkboxes input[type="checkbox"] {
  display: none;
}

.invisible-checkboxes input[type="checkbox"]:checked + .checkbox-alias {
  background-color: #3db980;
}
</style>
