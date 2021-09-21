<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6">
    <div class="grid grid-cols-1 md:grid-cols-3 py-7 md:py-14 gap-y-5">
      <div
        class="col-span-2 rounded-lg md:rounded-none md:rounded-l-lg place-items-center px-10"
        style="background-color:#1a202c"
      >
        <v-calendar
          :value="null"
          color="blue"
          is-expanded
          is-dark
          :min-date="new Date()"
          class="py-5 p-5 my-14"
        />
      </div>
      <div
        class=" bg-white shadow-lg text-black px-5 py-1 rounded-lg md:rounded-none md:rounded-r-lg "
      >
        <h1 class="text-center  text-xl font-semibold mt-5 ">
          Appointment Form
        </h1>
        <form action="">
          <div class="mb-2 mt-3">
            <label class="block mb-1" for="name">
              Date & Time
            </label>
            <v-date-picker
              :min-date="new Date()"
              v-model="date"
              mode="dateTime"
              :minute-increment="30"
              is12hr
              color="green"
            >
              <template v-slot="{ inputValue, inputEvents }">
                <input
                  class=" w-full  p-3 sm:p-2 border-2 border-green-500 rounded-md placeholder-gray-500"
                  :value="inputValue"
                  v-on="inputEvents"
                  required
                  readonly
                />
              </template>
            </v-date-picker>
          </div>

          <div class="mb-2">
            <label class="block  mb-1" for="name">
              Name <span class="text-red-500">*</span>
            </label>
            <input
              class=" w-full p-3 sm:p-2 border-2 border-green-500 rounded-md"
              id="name"
              type="text"
              placeholder="Jhone Doe"
            />
          </div>
          <div class="mb-2">
            <label class="block mb-1" for="email">
              Email <span class="text-red-500">*</span>
            </label>
            <input
              class=" w-full p-3 sm:p-2 border-2 border-green-500 rounded-md"
              required
              id="email"
              type="email"
              placeholder="Jhone.Doe@nmail.com"
            />
          </div>
          <div class="mb-2">
            <label class="block mb-1" for="phone">
              Phone
            </label>
            <input
              class=" w-full p-3 sm:p-2 border-2 border-green-500 rounded-md"
              id="phone"
              type="text"
              placeholder="+1 (954) 534-9323"
            />
          </div>
          <div class="mb-4 mt-5">
            <button
              type="submit"
              class="p-3 sm:p-2 px-5 bg-green-500 text-white text-lg font-semibold hover:bg-purple-500 "
            >
              Request
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Calender",
  components: {},
  data() {
    let date = new Date();
    date.setMinutes(0, 0, 0);

    return {
      date,
    };
  },
};
</script>

<style></style>
