export default (Db) => ({
  state: {},
  getters: {},
  mutations: {},
  actions: {
    // eslint-disable-next-line no-unused-vars
    async checkCode({ commit }, code) {
      debugger;
      const { ok, result, newRequest } = await Db.read({ query: `code == "${code}"`, table: 'codes' }, { retry: 3 });
      debugger;
      if (!ok) {
        Db.read(newRequest);
      }
      if (result) return result;
    },

    // eslint-disable-next-line no-unused-vars
    // async deleteUsedCode({ commit }, code) {
    // },
  },
});
