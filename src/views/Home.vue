<template>
  <div>
    <Hero />
    <WorkCard />
    <FeaturCard />
    <ExecPrice />
    <Cta />
    <Feedback />
    <NewsLetter />
  </div>
</template>

<script>
import Hero from "@/components/Home/HeroWsub.vue";
import WorkCard from "@/components/common/VhiclTypeCard.vue";
import FeaturCard from "@/components/common/FeatureCard.vue";
import ExecPrice from "@/components/Home/PricingExe.vue";
import Cta from "@/components/common/Cta.vue";
import Feedback from "@/components/common/TestimonialCard.vue";
import NewsLetter from "@/components/common/NewsLetter.vue";

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
};
</script>

<style scoped></style>
