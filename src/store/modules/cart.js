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
  },
  getters: {
    cartData(state) {
      return state.cart;
    },
  },
};
