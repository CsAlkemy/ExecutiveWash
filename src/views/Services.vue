<template>
  <div class="services">
    Services
    <Hero />
  </div>
</template>

<script>
import Hero from "@/components/common/HeroNsub.vue";

export default {
  name: "Services",
  components: { Hero },
  data() {
    // return {
    //   title: {
    //     titleOne: "We offer packages",
    //     titleTwo: "with best price",
    //     subTitle: null,
    //   },
    // };
  },
  setup() {},
};
</script>
