<template>
  <div class="max-w-7xl  mx-auto px-4 sm:px-6 py-6">
    <h1 class="text-center text-3xl my-10 font-medium uppercase">
      Annual Report Service Invoice
    </h1>
    <CheckoutForm />
  </div>
</template>
<script>
import CheckoutForm from "@/components/Checkout/CheckoutCard.vue";
export default {
  name: "checkout",
  components: {
    CheckoutForm,
  },
};
</script>
<style lang=""></style>
