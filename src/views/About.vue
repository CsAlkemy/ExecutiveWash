<template>
  <div>
    <Story />
    <Banner />
    <Cta />
    <Testimonial />
    <News />
  </div>
</template>
<script>
import Story from "@/components/common/Story.vue";
import Testimonial from "@/components/common/TestimonialCard.vue";
import Banner from "@/components/Home/Banner.vue";
import Cta from "@/components/common/Cta.vue";
import News from "@/components/common/NewsLetter.vue";

export default {
  name: "About Us",
  components: {
    Story,
    Testimonial,
    Banner,
    Cta,
    News,
  },
};
</script>
<style lang=""></style>
