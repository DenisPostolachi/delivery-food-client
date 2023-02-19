<script>
export default {
  name: "Products",
  computed: {
    partnersData() {
      return this.$store.getters.allPartnersData;
    },
  },
  mounted() {

  },
};
</script>

<template>
  <div>
    <h1>{{ partnersData }}</h1>
  </div>
</template>

<style scoped></style>
