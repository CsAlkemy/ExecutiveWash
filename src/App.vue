<template>
  <Navbar />
  <div class="bg-gray-100">
    <router-view />
  </div>
  <ContactFooter class="inline sm:hidden" />
</template>

<style lang="scss"></style>
<script>
import ContactFooter from "@/components/layout/ContactFooter.vue";
import Navbar from "@/components/layout/Navbar.vue";
export default {
  components: { ContactFooter, Navbar },
};
</script>
