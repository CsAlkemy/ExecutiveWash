<template>
  <div>
    <Location />
    <ContactForm />
    <Cta />
    <Newsletter />
  </div>
</template>
<script>
import ContactCard from "@/components/Contact/contactCard.vue";
import ContactForm from "@/components/common/ContactForm.vue";
import Cta from "@/components/common/Cta.vue";
import Newsletter from "@/components/common/NewsLetter.vue";
import Location from "@/components/Contact/Location.vue";
export default {
  name: "Contact",
  components: {
    ContactCard,
    ContactForm,
    Newsletter,
    Cta,
    Location,
  },
};
</script>
<style></style>
