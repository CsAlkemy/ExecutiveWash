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
  titleOne: "Booking an Appointment",
  titleTwo: ["Makes Things", "Easy"],
  subtitle:
    "Choosing the right Car Wash Can Be a Burdensome Process in the Life of Every Motorist. Entrust Your Car Cleaning to Our Professionals.",
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
