<script>
export default {
  name: "Products",
  data: () => ({
    partnerDetails: [],
  }),
  mounted() {
    const check = this.store.getters["showPartnerData"];
    console.log(check)
  },
};
</script>

<template>
  <div>
    <h1></h1>
  </div>
</template>

<style scoped></style>
