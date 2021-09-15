<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6">
    <div class="mt-16 mb-12">
      <h1 class="text-2xl font-medium tracking-tight">
        Affordable Pricing
      </h1>
      <h1 class="text-4xl font-extrabold mb-12">For Everyone</h1>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-7 mb-14">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  </div>
</template>
<script>
import Card from "@/components/common/PricingCard.vue";
export default {
  name: "Executive Pricing",
  components: {
    Card,
  },
};
</script>
<style></style>
