<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 py-24">
      <div
        v-for="img in imgs"
        :key="img.id"
        :class="img.class"
        class="cursor-pointer rounded-xl"
      >
        <img
          @click="showMultiple(img.id)"
          class="object-cover h-96 max-h-96 w-full rounded-xl"
          :src="img.src"
          :alt="img.title"
        />
      </div>
    </div>
    <vue-easy-lightbox
      scrollDisabled
      escDisabled
      moveDisabled
      :visible="visible"
      :imgs="imgs"
      :index="index"
      @hide="handleHide"
    >
    </vue-easy-lightbox>
  </div>
</template>

<script>
import VueEasyLightbox from "vue-easy-lightbox";
const imgSrc = [
  {
    id: 0,
    title: "Executive Wash Poster",
    src: require("@/assets/images/poster.png"),
  },
  {
    id: 1,
    title: "Executive Wash Hand Wash",
    src: require("@/assets/images/erod7.jpg"),
  },
  {
    id: 2,
    title: "Car One",
    src: require("@/assets/images/carOne.jpg"),
  },
  {
    id: 3,
    title: "Executive Wash Hand Wash",
    src: require("@/assets/images/erod2.jpg"),
    class: "col-span-1 md:col-span-2",
  },
  {
    id: 4,
    title: "Executive Wash",
    src: require("@/assets/images/erod4.jpg"),
  },
  {
    id: 5,
    title: "best car wash in town",
    src: require("@/assets/images/6.png"),
  },
  {
    id: 6,
    title: "Executive Wash",
    src: require("@/assets/images/erod3.jpg"),
    class: "col-span-1 md:col-span-2",
  },
];
export default {
  components: {
    VueEasyLightbox,
  },
  data() {
    return {
      imgs: imgSrc,
      visible: false,
      loop: true,
      index: 0,
    };
  },
  methods: {
    showMultiple(index) {
      console.log(index);
      this.imgs = imgSrc;
      this.index = index;
      this.show();
    },
    show() {
      this.visible = true;
    },
    handleHide() {
      this.visible = false;
    },
  },
};
</script>
