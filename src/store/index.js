import { createStore } from "vuex";

export default createStore({
  state: {
    partnerData: []
  },
  getters: {
    showPartnerData: (state) => state.partnerData
  },
  mutations: {
    addPartnerData: (state, data) => {
      state.partnerData.push(data)
    }
  },
  actions: {
    addPartnerData: (context, data) => {
      context.commit("addPartnerData", data);
    }
  },
});
