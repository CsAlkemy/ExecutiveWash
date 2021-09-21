<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 py-9">
    <img :src="Img" alt="banner" class="max-h-96 w-full rounded-3xl" />
  </div>
</template>
<script>
export default {
  name: "Banner",
  data() {
    return {
      Img: require("@/assets/images/banner.jpg"),
    };
  },
};
</script>
<style lang=""></style>
