<template>
  <div>
    <Hero :data="HeroData" />
    <WorkCard />
    <FeaturCard />
    <ExecPrice />
    <Cta />
    <Feedback />
    <NewsLetter />
  </div>
</template>

<script>
import Hero from "@/components/common/Hero.vue";
import WorkCard from "@/components/common/VhiclTypeCard.vue";
import FeaturCard from "@/components/common/FeatureCard.vue";
import ExecPrice from "@/components/Home/PricingExe.vue";
import Cta from "@/components/common/Cta.vue";
import Feedback from "@/components/common/TestimonialCard.vue";
import NewsLetter from "@/components/common/NewsLetter.vue";
// Data Section
const HeroData = {
  titleOne: "Fastest and",
  titleTwo: ["DETAILED", "CAR WASH"],
  subtitle:
    "we are the best car wash on pembroke pines. we know what you want from a car wash",
  bgImage: "bgImageHome",
};

export default {
  name: "Home",
  components: {
    Hero,
    WorkCard,
    FeaturCard,
    ExecPrice,
    Cta,
    Feedback,
    NewsLetter,
  },

  data() {
    return {
      HeroData,
    };
  },
};
</script>

<style scoped></style>
