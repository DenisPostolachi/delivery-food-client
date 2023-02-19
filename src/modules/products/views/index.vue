<script>
import ProductCard from "@/components/products/ProductCard.vue";

export default {
  name: "Products",
  components: { ProductCard },
  data: () => ({
    products: [],
    partners: require("@/db/partners.json"),
  }),
  computed: {
    partnersData() {
      return this.partners.find(
        (item) => item.products === `${this.$route.params.product}.json`
      );
    },
  },
  async mounted() {
    await this.getData();
  },
  methods: {
    async getData() {
      const response = await import(`@/db/${this.$route.params.product}.json`);
      this.products = response.default;
    },
  },
};
</script>

<template>
  <main class="main">
    <div class="container">
      <section class="menu">
        <div class="section-heading">
          <h2 class="section-title restaurant-title">
            {{ partnersData.name }}
          </h2>
          <div class="card-info">
            <div class="rating">{{ partnersData.stars }}</div>
            <div class="price">От {{ partnersData.price }}</div>
            <div class="category">{{ partnersData.kitchen }}</div>
          </div>
        </div>
        <div class="cards cards-menu">
          <div class="card" v-for="product in products" key="product.id">
            <ProductCard :product-data="product" />
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<style scoped>
.section-heading {
  display: flex;
  align-items: center;
  margin-bottom: 44px;
}

.section-title {
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;
  margin: 0 30px 0 0;
  color: #000000;
}

.card-info {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.rating {
  background-image: url("~@/img/icon/rating.svg");
  background-repeat: no-repeat;
  background-position: 0 7px;
  padding-left: 20px;
  margin-right: 26px;
  color: #ffc107;
  font-weight: bold;
  font-size: 18px;
  line-height: 32px;
}

.price,
.category {
  color: #8c8c8c;
  font-size: 18px;
  line-height: 32px;
}

.price {
  margin-right: 10px;
}

.price:after {
  content: "";
  width: 5px;
  height: 5px;
  background-color: #8c8c8c;
  display: inline-block;
  vertical-align: middle;
  border-radius: 50%;
  margin-left: 10px;
}

.cards {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
}

.card {
  background: #ffffff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  border-radius: 7px;
  overflow: hidden;
  margin-bottom: 30px;
  flex-basis: 31%;
  text-decoration: none;
}
</style>