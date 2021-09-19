<template>
  <Hero :data="HeroData" />
  <LightBox />
  <Cta />
  <NewsLetter />
</template>
<script>
import Hero from "@/components/common/Hero.vue";
import LightBox from "@/components/common/GalleryLightBoxC.vue";
import Cta from "@/components/common/Cta.vue";
import NewsLetter from "@/components/common/NewsLetter.vue";

const HeroData = {
  titleOne: "Our Team Makes",
  titleTwo: ["Impossible", "Possible"],
  subtitle: "",
  bgImage: "bgImageGallery",
};

export default {
  name: "Gallery",
  components: {
    Hero,
    Cta,
    LightBox,
    NewsLetter,
  },

  data() {
    return {
      HeroData,
    };
  },
};
</script>
<style lang=""></style>
