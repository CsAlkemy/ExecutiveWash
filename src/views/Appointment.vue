<template>
  <div>
    <Hero :data="HeroData" />
    <Calender />
    <Cta />
    <TestimonialCard />
    <NewsLetter />
  </div>
</template>
<script>
import Hero from "@/components/common/Hero.vue";
import Calender from "@/components/common/AppointmentForm.vue";
import Cta from "@/components/common/Cta.vue";
import TestimonialCard from "@/components/common/TestimonialCard.vue";
import NewsLetter from "@/components/common/NewsLetter.vue";

const HeroData = {
  titleOne: "Booking Appointment",
  titleTwo: ["Make Things", "Easy"],
  subtitle:
    "Choosing car wash is a constant process in the life of every motorist. Entrust your car cleaning to our professional",
  bgImage: "p-3",
};

export default {
  name: "Appointment",
  components: {
    Hero,
    Calender,
    TestimonialCard,
    NewsLetter,
    Cta,
  },
  data() {
    return {
      HeroData,
    };
  },
};
</script>
<style></style>
