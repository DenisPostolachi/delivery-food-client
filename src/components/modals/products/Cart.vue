<script>
export default {
  name: "Cart",
  data: () => ({}),
  computed: {
    cartData() {
      return this.$store.getters.cartData;
    },
    cartSumData() {
      return this.$store.getters.cartItemsTotalPrice;
    },
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
    addOrderQuantity(id) {
      this.$store.commit("increaseProductsQuantity", id);
    },
    removeOrderQuantity(id) {
      this.$store.commit("decreaseProductsQuantity", id);
    },
  },
};
</script>

<template>
  <div class="modal modal-cart" @click.self="closeModal">
    <div class="modal-dialog">
      <div class="modal-header">
        <h3 class="modal-title">Корзина</h3>
        <button @click="closeModal" class="close">&times;</button>
      </div>
      <div class="modal-body">
        <div class="food-row" v-for="cartItem in cartData">
          <span class="food-name">{{ cartItem.name }}</span>
          <strong class="food-price">{{ cartItem.price }} ₽</strong>
          <div class="food-counter">
            <button @click="removeOrderQuantity(cartItem.id)" class="counter-button">-</button>
            <span class="counter">{{ cartItem.quantity }}</span>
            <button
              @click="addOrderQuantity(cartItem.id)"
              class="counter-button"
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <span class="modal-pricetag">{{ cartSumData }} ₽</span>
        <div class="footer-buttons">
          <button class="button button-primary">Оформить заказ</button>
          <button @click="closeModal" class="button clear-cart">Отмена</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 999;
}

.modal-dialog {
  max-width: 780px;
  width: 95%;
  background: #ffffff;
  border-radius: 5px;
  margin: auto;
  padding: 40px 45px;
}

.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 45px;
}

.modal-title {
  margin: 0;
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;
}

.close {
  font-size: 36px;
  border: none;
  background-color: transparent;
}

.modal-body {
  margin-bottom: 22px;
}

.food-row {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding-bottom: 8px;
  border-bottom: 1px solid #d9d9d9;
  margin-bottom: 15px;
}

.food-name {
  font-weight: normal;
  font-size: 18px;
  line-height: 32px;
}

.food-price {
  margin-left: auto;
  margin-right: 47px;
  font-weight: bold;
  font-size: 20px;
  line-height: 32px;
}

.food-counter {
  display: flex;
  align-items: center;
}

.counter-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 39px;
  height: 32px;
  background: #ffffff;
  border: 1px solid #40a9ff;
  box-sizing: border-box;
  border-radius: 2px;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  color: #40a9ff;
}

.counter-button:hover {
  background: #40a9ff;
  border: 1px solid #ffffff;
  color: #ffffff;
}

.counter {
  font-size: 16px;
  line-height: 24px;
  margin-left: 10px;
  margin-right: 10px;
}

.modal-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.footer-buttons {
  display: flex;
  align-items: center;
}

.modal-pricetag {
  background: #262626;
  border-radius: 5px;
  color: #ffffff;
  padding: 15px 20px;
  font-size: 20px;
  line-height: 23px;
}

</style>
