export default {
  state: {
    active_id: 0,
  },
  mutations: {
    editActive(state, payload) {
      state.active_id = payload;
      console.warn(state.active_id);
    },
  },
  namespaced: true,
};
