import { createStore } from 'vuex'

export default createStore({
  state: {
    nev : 'Jóska'
  },
  mutations: {
    changeName(state) {
      state.nev == 'Jóska' ? state.nev='Géza' : state.nev='Jóska'
    }
  },
  actions: {
  },
  modules: {
  },
})
