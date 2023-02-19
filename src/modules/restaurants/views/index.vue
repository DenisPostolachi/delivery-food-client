<script>
import Promo from "@/components/promo/Promo.vue";
import RestaurantCard from "@/components/restaurants/RestaurantCard.vue";

export default {
  name: "Restaurants",
  components: { RestaurantCard, Promo },

  data: () => ({
    partners: require("@/db/partners.json"),
  }),
};
</script>

<template>
  <main class="main">
    <div class="container">
      <Promo />
      <section class="restaurants">
        <div class="section-heading">
          <h2 class="section-title">Рестораны</h2>
          <label class="search">
            <input
              type="text"
              class="input input-search"
              placeholder="Поиск блюд и ресторанов"
            />
          </label>
        </div>
        <div class="cards cards-restaurants">
          <div class="card card-restaurant" v-for="partner in partners">
            <RestaurantCard :partner-data="partner" />
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<style scoped>
.main {
  background: linear-gradient(
    180deg,
    rgba(245, 245, 245, 0) 1.04%,
    #f5f5f5 100%
  );
}

.section-heading {
  display: flex;
  align-items: center;
  margin-bottom: 44px;
  justify-content: space-between;
}

.section-title {
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;
  margin: 0 30px 0 0;
  color: #000000;
}

.input {
  background-color: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  font-size: 16px;
  line-height: 24px;
  padding: 8px 8px 8px 35px;
  background-repeat: no-repeat;
  background-position: left 11px center;
}

.input-search {
  width: 300px;
  background-image: url(~@/img/icon/search.svg);
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

.card-restaurant {
  cursor: pointer;
}
</style>
