import { createStore } from "vuex";
import partners from "@/store/modules/partners";
import cart from "@/store/modules/cart";

export default createStore({
  modules: {
    partners,
    cart,
  },
});
