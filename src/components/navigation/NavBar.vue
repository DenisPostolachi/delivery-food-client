<script>
import AuthModal from "@/components/modals/auth/Auth.vue";
import Cart from "@/components/modals/products/Cart.vue";

export default {
  name: "NavBar",
  components: { Cart, AuthModal },

  data: () => ({
    logo: require("@/img/icon/logo.svg"),
    authModalStatus: false,
    cartModalStatus: false,
  }),

  methods: {
    toggleLoginModal() {
      this.authModalStatus = !this.authModalStatus;
    },
    toggleCartModal() {
      this.cartModalStatus = !this.cartModalStatus;
    },
  },
};
</script>

<template>
  <div class="container">
    <header class="header">
      <router-link to="/" class="logo">
        <img :src="logo" alt="Logo" />
      </router-link>
      <label class="address">
        <input
          type="text"
          class="input input-address"
          placeholder="Адрес доставки"
        />
      </label>
      <div class="buttons">
        <span class="user-name"></span>
        <button
          @click="toggleLoginModal"
          class="button button-primary button-auth"
        >
          <span class="button-auth-svg"></span>
          <span class="button-text">Войти</span>
        </button>
        <button
          @click="toggleCartModal"
          class="button button-cart"
          id="cart-button"
        >
          <span class="button-cart-svg"></span>
          <span class="button-text">Корзина</span>
        </button>
        <button class="button button-primary button-out">
          <span class="button-text">Выйти</span>
          <span class="button-out-svg"></span>
        </button>
      </div>
    </header>
    <div v-if="authModalStatus">
      <AuthModal @close="toggleLoginModal" />
    </div>
    <div v-if="cartModalStatus">
      <Cart @close="toggleCartModal" />
    </div>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
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

.address {
  flex: 0.8;
}

.input-address {
  width: 100%;
  background-image: url("~@/img/icon/home.svg");
}

.buttons {
  display: flex;
  align-items: center;
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

.button-auth {
  background-position: 20px 13px;
}

.button-primary .button-auth-svg {
  width: 24px;
  height: 24px;
  background-color: #fff;
  -webkit-mask: url("~@/img/icon/user.svg") no-repeat 50% 50%;
  mask: url("~@/img/icon/user.svg") no-repeat 50% 50%;
  background-repeat: no-repeat;
}

.button-primary:hover .button-auth-svg {
  background-color: #595959;
}

.button .button-cart-svg {
  width: 24px;
  height: 24px;
  background-color: #595959;
  -webkit-mask: url("~@/img/icon/shopping-cart.svg") no-repeat 50% 50%;
  mask: url("~@/img/icon/shopping-cart.svg") no-repeat 50% 50%;
  background-repeat: no-repeat;
}

.button-cart {
  margin: 0 5px;
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

.button-out {
  display: none;
  margin: 0 5px;
}

.user-name {
  display: none;
  margin-right: 20px;
  font-weight: bold;
  font-size: 18px;
}
</style>
