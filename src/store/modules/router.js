import {routes} from "../../router/index"


const router = {
  state: {
    list: routes
  },
  mutations: {
    add(state, payload) {
      console.log(payload);
      state.count++
    },
  },
  actions: {},
  getters: { // 跟在外面单独声明是一样的
    getRouter(state) {
      return state.list
    }
  }
};

export default router
