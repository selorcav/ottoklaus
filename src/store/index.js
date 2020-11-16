import Vue from 'vue'
import Vuex from 'vuex'
import { auth } from '../firebase'
import router from '../router'
import axios from 'axios'
import VueSweetalert2 from 'vue-sweetalert2';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    error: null,
    toys: []
  },
  mutations: {
    SET_USER(state, payload) {state.user = payload},
    SET_ERROR(state, payload) {state.error = payload},
    UPDATE_CURRENT_USER(state, user) {state.currentUser = user},
    GET_TOYS(state, payload) {state.toys = payload},
    SET_CURRENT_TOY(state, payload) { state.currentToy = payload },
  },
  actions: {
    createUser({ commit }, user) {
      auth.createUserWithEmailAndPassword(user.email, user.password)
        .then(res => {
          console.log(res)
          const userCreated = {
            email: res.user.email,
            uid: res.user.uid
          }
          commit('SET_USER', userCreated)
          router.push('/')
        })
        .catch(error => {
          alert(error)
          commit('SET_ERROR', error)
        })
    },
    loginUser({ commit }, user) {
      auth.signInWithEmailAndPassword(user.email, user.pass)
        .then(res => {
          const userLoged = {
            email: res.user.email,
            uid: res.user.uid
          }
          commit('SET_USER', userLoged)
          router.push('/home')
          console.log(res)
        })
        .catch(error => {
          alert(error)
          commit('SET_ERROR', error)
        })
    },
    detectUser({ commit }, user) {
      commit('SET_USER', user)
    },
    logoutUser({ commit }) {
      auth.signOut()
      console.log({ commit })
      // .then(() => {
      //   router.push('/')
      // })
      router.push('/')
    },
    getToys({ commit }) {
      axios.get('https://us-central1-ottoklauss-5927c.cloudfunctions.net/api/toys')
      .then(response => commit("GET_TOYS", response.data))
    },
    deleteToy({ dispatch }, toyId) {
      axios.delete(`https://us-central1-ottoklauss-5927c.cloudfunctions.net/api/toys/${toyId}`)
      .then(() => dispatch('getToys'))
    },
    createToy({ dispatch }, toy) {
      axios.post('https://us-central1-ottoklauss-5927c.cloudfunctions.net/api/toys', toy)
      .then(() => dispatch("getToys")
      )
    },
    editToy({ commit }, toy) {
      commit("SET_CURRENT_TOY", toy)
    },
    updateToy({ dispatch }, toy) {
      axios.put(`https://us-central1-ottoklauss-5927c.cloudfunctions.net/api/toys/${toy.id}`, toy.data)
      .then(() => dispatch('getToys'))
    }
  },
  getters: {
    userExist(state) {
      if (state.user == null) {
        return false
      } else {
        return true
      }
    }
  },
  modules: {

  },

})



Vue.use(VueSweetalert2);
