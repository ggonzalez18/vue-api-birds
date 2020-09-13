import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    birds: [],
    bird: undefined
  },
  mutations: {
    GET_BIRDS(state, birds) {
      state.birds = birds
    },
    GET_BIRD(state, bird) {
      state.bird = bird
    },
  },
  actions: {
    getBirds({ commit }) {
      Axios.get('https://aves.ninjas.cl/api/birds').then((response) => {
        commit('GET_BIRDS', response.data)
      })
    },
    getBird({ commit }, url) { //commit llama a mutaciones
      Axios.get(url).then((response) => {
        commit('GET_BIRD', response.data)
      })
    }
  },
  modules: {
  }
})
