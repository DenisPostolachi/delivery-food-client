<script>
export default {
  name: "ProductCard",
  props: {
    productData: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    selectedProducts: [],
  }),
  methods: {
    addToCart(productData) {
      this.$store.commit("setProducts", productData);
      this.$store.dispatch('addProductToCart', productData)
    },
  },
};
</script>

<template>
  <div>
    <img
      :src="require(`@/${productData.image}`)"
      alt="image"
      class="card-image"
    />
    <div class="card-text">
      <div class="card-heading">
        <h3 class="card-title card-title-reg">{{ productData.name }}</h3>
      </div>
      <div class="card-info">
        <div class="ingredients">
          {{ productData.description }}
        </div>
      </div>
      <div class="card-buttons">
        <button
          @click="addToCart(productData)"
          class="button button-primary button-add-cart"
        >
          <span class="button-card-text">В корзину</span>
          <span class="button-cart-svg"></span>
        </button>
        <strong class="card-price-bold">{{ productData.price }} ₽</strong>
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

.card-info {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.ingredients {
  color: #8c8c8c;
  font-size: 18px;
  line-height: 21px;
}

.card-buttons {
  display: flex;
  margin-top: 24px;
  flex-grow: 1;
  align-items: flex-end;
}

.button {
  display: flex;
  align-items: center;
  padding: 8px 16px;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  box-sizing: border-box;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.0015);
  border-radius: 2px;
  color: #595959;
  font-size: 16px;
  line-height: 24px;
}

.button:hover {
  background: #1890ff;
  border: 1px solid #1890ff;
  color: #fff;
}

.button-primary {
  background: #1890ff;
  border: 1px solid #1890ff;
  color: #fff;
  margin-right: 10px;
}

.button-primary:hover {
  background: #ffffff;
  border: 1px solid #d9d9d9;
  color: #595959;
}

.button-card-text {
  margin-right: 10px;
}

.button .button-cart-svg {
  width: 24px;
  height: 24px;
  background-color: #595959;
  -webkit-mask: url("~@/img/icon/shopping-cart.svg") no-repeat 50% 50%;
  mask: url("~@/img/icon/shopping-cart.svg") no-repeat 50% 50%;
  background-repeat: no-repeat;
}

.card-price-bold {
  font-weight: bold;
  font-size: 20px;
  line-height: 32px;
  margin-left: 30px;
}

.button-primary .button-cart-svg {
  background-color: #fff;
}

.button:hover .button-cart-svg {
  background-color: #fff;
}

.button-primary:hover .button-cart-svg {
  background-color: #595959;
}
</style>
