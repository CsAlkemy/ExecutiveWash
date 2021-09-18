<template>
  <div class="services">
    <Hero :data="HeroData" />
    <Work />
    <ServiceOne :data="PricingTitleData[0]" :packages="priceDataOne" />
    <Cta />
    <ServiceTwo :data="PricingTitleData[1]" :packages="priceDataOne" />
    <NewsLetter />
  </div>
</template>

<script>
import Hero from "@/components/common/Hero.vue";
import Work from "@/components/common/VhiclTypeCard.vue";
import ServiceOne from "@/components/Services/PricingParent.vue";
import Cta from "@/components/common/Cta.vue";
import ServiceTwo from "@/components/Services/PricingParent.vue";
import NewsLetter from "@/components/common/NewsLetter.vue";

//Page Data
const HeroData = {
  titleOne: "We Offer Packages",
  titleTwo: ["With Best", "Price"],
  subtitle: "",
  bgImage: "",
};
const PricingTitleData = [
  {
    title: "Wash Packages",
  },
  {
    title: "Our Special Services",
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

//Function

export default {
  name: "Services",
  components: {
    Hero,
    Work,
    ServiceOne,
    Cta,
    ServiceTwo,
    NewsLetter,
  },
  data() {
    return {
      HeroData,
      PricingTitleData,
      priceDataOne,
    };
  },
  setup() {},
};
</script>
