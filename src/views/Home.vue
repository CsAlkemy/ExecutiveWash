<template>
  <div>
    <Hero />
    <WorkCard />
    <FeaturCard />
    <ExecPrice />
    <Cta />
  </div>
</template>

<script>
import Hero from "@/components/Home/HeroWsub.vue";
import WorkCard from "@/components/common/VhiclTypeCard.vue";
import FeaturCard from "@/components/common/FeatureCard.vue";
import ExecPrice from "@/components/Home/PricingExe.vue";
import Cta from "@/components/common/Cta.vue";

export default {
  name: "Home",
  components: {
    Hero,
    WorkCard,
    FeaturCard,
    ExecPrice,
    Cta,
  },
};
</script>

<style scoped></style>
