<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 py-8">
    <div class="mt-16 mb-12 ">
      <h1 class="text-2xl font-medium tracking-tight">
        {{ data.smallTitle }}
      </h1>
      <h1 class="text-5xl font-extrabold mb-12 ">{{ data.title }}</h1>
    </div>
    <Cards :data="packages" :Gridclass="data.class" />
  </div>
</template>
<script>
import Cards from "@/components/common/PricingCard.vue";

export default {
  name: "pricing parent",
  components: {
    Cards,
  },
  props: {
    data: {
      PricingTitleData: Object,
    },
    packages: {
      packages: Object,
    },
  },
};
</script>
<style></style>
