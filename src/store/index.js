import {createStore} from 'vuex'

export default createStore({
  state: {
    currentTheme: 'dark',
    snackbar: {
      text: "",
      color: '',
      flag: false,
    }
  },
  getters: {
    getCurrentTheme: state => {
      return state.currentTheme;
    },
    getSnackbar: state => {
      return state.snackbar;
    }
  },
  mutations: {
    SET_CURRENT_THEME(state, data) {
      state.currentTheme = data
    },
    SET_SNACKBAR(state, {flag, text, color}) {
      state.snackbar.flag = flag
      state.snackbar.text = text
      state.snackbar.color = color
    }
  },
  actions: {
    setCurrentTheme({commit}, items) {
      commit('SET_CURRENT_THEME', items)
    },
    setSnackbar({commit}, items) {
      commit('SET_SNACKBAR', items)
    }
  },
  modules: {}
})
