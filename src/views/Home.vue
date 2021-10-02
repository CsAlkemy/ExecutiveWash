<template>
  <div>
    <Hero :data="HeroData" />
    <WorkCard />
    <FeaturCard />
    <Banner />
    <Service :data="PricingTitleData[0]" :packages="priceDataOne" />
    <Cta />
    <Feedback />
    <NewsLetter />
  </div>
</template>

<script>
import Hero from "@/components/common/Hero.vue";
import WorkCard from "@/components/common/VhiclTypeCard.vue";
import FeaturCard from "@/components/common/FeatureCard.vue";
import Service from "@/components/common/PricingParent.vue";
import Cta from "@/components/common/Cta.vue";
import Feedback from "@/components/common/TestimonialCard.vue";
import NewsLetter from "@/components/common/NewsLetter.vue";
import Banner from "@/components/Home/Banner.vue";
// Data Section
const HeroData = {
  titleOne: "Executive ",
  titleTwo: ["Wash & ", "Detail"],
  subtitle:
    "Best Full Service Car Wash in Pembroke Pines with 2 decades worth of experience",
  bgImage: "bgImageHome object-cover",
};

const PricingTitleData = [
  {
    title: "For Everyone",
    smallTitle: "Affordable Pricing",
    class: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
  },
];

const priceDataOne = [
  {
    title: "SUPERVISOR'S PACKAGE",
    price: 15,
    img: require("@/assets/images/erod3.jpg"),
    link: "",
    includes: [
      { inc: "Exterior Wash", id: 1 },
      { inc: "Outside Windows", id: 2 },
      { inc: "Towel Dry", id: 3 },
    ],
    isPopular: false,
  },
  {
    title: "DIRECTOR'S PACKAGE",
    price: 20,
    img: require("@/assets/images/carOne.jpg"),
    link: "",
    includes: [
      { inc: "Exterior Wash", id: 1 },
      { inc: "Vacuum All Carpets", id: 2 },
      { inc: "Outside/Inside Windows", id: 3 },
      { inc: "Tire Shine", id: 4 },
      { inc: "Interior Wipe Down", id: 5 },
      { inc: "Air Freshener", id: 6 },
    ],
    isPopular: false,
  },
  {
    title: "MANAGER's PACKAGE",
    price: 25,
    img: require("@/assets/images/erod7.jpg"),
    link: "",
    includes: [
      { inc: "Exterior Wash", id: 1 },
      { inc: "Vacuum All Carpets", id: 2 },
      { inc: "Fender Dressing", id: 3 },
      { inc: "Door Jams", id: 4 },
    ],
    isPopular: false,
  },
  {
    title: "VICE PRESIDENTIAL",
    price: 35,
    img: require("@/assets/images/erod2.jpg"),
    link: "",
    includes: [
      { inc: "Includes Manager’s Package", id: 1 },
      { inc: "Super Shine Spray Wax", id: 2 },
    ],
    isPopular: false,
  },
  {
    title: "PRESIDENTIAL PACKAGE",
    price: 65,
    img: require("@/assets/images/machine wash.jpg"),
    link: "",
    includes: [
      { inc: "Exterior Works", id: 1 },
      { inc: "Carnuaba Wax Service", id: 2 },
      { inc: "Includes Manager’s Package", id: 3 },
    ],
    isPopular: true,
    bg: "bg-gray-900 text-white",
  },
  {
    title: "ULTRA-PRESIDENTIAL PACKAGE",
    price: 80,
    img: require("@/assets/images/erod8.jpg"),
    link: "",
    includes: [
      { inc: "Includes Manager’s Package", id: 1 },
      { inc: "Carnuba PASTE Wax Service", id: 2 },
    ],
    isPopular: false,
  },
  {
    title: "EXECUTIVE PACKAGE",
    price: 100,
    img: require("@/assets/images/erod9.jpg"),
    link: "",
    includes: [
      { inc: "Complete Interior Cleaning", id: 1 },
      { inc: "Leather treatment", id: 2 },
      { inc: "Includes Manager’s Package", id: 3 },
      { inc: "Vinyl Treatment", id: 4 },
    ],
    isPopular: false,
  },
  {
    title: "CHAIRMAN'S PACKAGE",
    price: 150,
    img: require("@/assets/images/vip.jpg"),
    link: "",
    includes: [
      { inc: "Starting at $150.00", id: 1 },
      { inc: "Full Vehicle Detail", id: 2 },
      { inc: "Ultimate Interior & Exterior", id: 3 },
      { inc: "Includes Presidential Package", id: 4 },
    ],
    isPopular: false,
  },
];

export default {
  name: "Home",
  components: {
    Hero,
    WorkCard,
    FeaturCard,
    Service,
    Cta,
    Feedback,
    NewsLetter,
    Banner,
  },

  data() {
    return {
      HeroData,
      priceDataOne,
      PricingTitleData,
    };
  },
};
</script>

<style scoped></style>
