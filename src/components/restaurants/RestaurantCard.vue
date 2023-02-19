<script>
export default {
  name: "RestaurantCard",
  props: {
    partnerData: {
      type: Object,
      required: true,
    },
  },
  computed: {
    productsUrlAlias() {
      //TODO incorrect structure of database, there back should send alias or id or uuid
      return this.$props.partnerData.products.slice(0, -5);
    },
  },
  methods: {
    openCurrentRestaurant() {
      this.$router.push({
        name: "products",
        params: { product: this.productsUrlAlias },
      });
    },
  },
};
</script>

<template>
  <div @click="openCurrentRestaurant">
    <img
      :src="require(`@/${partnerData.image}`)"
      alt="image"
      class="card-image"
    />
    <div class="card-text">
      <div class="card-heading">
        <h3 class="card-title">{{ partnerData.name }}</h3>
        <span class="card-tag tag">{{ partnerData.time_of_delivery }} мин</span>
      </div>
      <div class="card-info">
        <div class="rating">{{ partnerData.stars }}</div>
        <div class="price">От {{ partnerData.price }} ₽</div>
        <div class="category">{{ partnerData.kitchen }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-image {
  width: 100%;
  height: 250px;
  object-fit: cover;
}

.card-text {
  padding: 20px 23px 35px;
  min-height: 275px;
  display: flex;
  flex-direction: column;
}

.restaurants .card-text {
  min-height: auto;
}

.card-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}

.card-title {
  margin: 0;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 32px;
}

.card-title-reg {
  font-weight: 400;
}

.card-tag {
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  color: #ffffff;
  background: #262626;
  border-radius: 2px;
  padding: 1px 8px;
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

.category {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: 150px;
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
</style>
