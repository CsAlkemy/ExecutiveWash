<template>
  <div>
    <Hero :data="HeroData" />
  </div>
</template>
<script>
import Hero from "@/components/common/Hero.vue";

const HeroData = {
  titleOne: "Our Team Makes",
  titleTwo: ["Impossible", "Possible"],
  subtitle: "",
  bgImage: "bgImageGallery",
};

console.log(HeroData);

export default {
  name: "Gallery",
  components: {
    Hero,
  },

  data() {
    return {
      HeroData,
    };
  },
};
</script>
<style lang=""></style>
