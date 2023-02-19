export default {
  state: {
    products: [],
    cart: [],
  },
  actions: {
    addProductToCart(context, payload) {
      const cartItem = context.state.cart.find(
        (item) => item.id === payload.id
      );

      if (!cartItem) {
        context.commit("pushProductToCart", payload);
      } else {
        context.commit("incrementItemQuantity", cartItem);
        context.commit("addPriceToRepeatedItems", cartItem);
      }
    },
  },
  mutations: {
    setProducts(state, payload) {
      state.products = payload;
    },
    pushProductToCart(state, payload) {
      state.cart.push({
        id: payload.id,
        name: payload.name,
        price: Number(payload.price),
        quantity: 1,
      });
    },
    incrementItemQuantity(state, cartItem) {
      state.cart.map((item) => {
        if (item.id === cartItem.id) {
          return (item.quantity += 1);
        }
      });
    },
    addPriceToRepeatedItems(state, cartItem) {
      state.cart.map((item) => {
        if (item.id === cartItem.id) {
          return (item.price += cartItem.price);
        }
      });
    },
    increaseProductsQuantity(state, id) {
      state.cart.map((element) => {
        if (element.id === id) {
          element.quantity += 1;
        }
      });
    },
    decreaseProductsQuantity(state, id) {
      state.cart.map((element, index, array) => {
        if (element.id === id) {
          element.quantity -= 1;
        }

        if (!element.quantity) {
          array.splice(index, 1);
        }
      });
    },
  },
  getters: {
    cartData(state) {
      return state.cart;
    },
    cartItemsTotalPrice(state) {
      let total = 0;
      state.cart.forEach((item) => {
        total += item.price * item.quantity;
      });
      return total;
    },
  },
};
