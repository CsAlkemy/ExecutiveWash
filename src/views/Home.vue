<template>
  <div>
    <Hero />
    <WorkCard />
  </div>
</template>

<script>
import Hero from "@/components/Home/HeroWsub.vue";
import WorkCard from "@/components/common/VhiclTypeCard.vue";

export default {
  name: "Home",
  components: {
    Hero,
    WorkCard,
  },
};
</script>

<style scoped></style>
