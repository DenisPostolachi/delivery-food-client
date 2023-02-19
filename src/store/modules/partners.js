export default {
  state: {
    partnersData: {},
  },
  actions: {
    setPartnersData(context, payload) {
      context.commit("setPartnersData", payload);
    },
  },
  mutations: {
    setPartnersData(state, payload) {
      state.partnersData = { ...payload };
    },
  },
  getters: {
    allPartnersData(state) {
      return state.partnersData;
    },
  },
};
