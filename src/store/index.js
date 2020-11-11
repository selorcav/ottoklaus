import Vue from 'vue'
import Vuex from 'vuex'
import {auth} from '../firebase'
import router from '../router'
import VueSweetalert2 from 'vue-sweetalert2';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    error: null,
  },
  mutations: {
    SET_USER(state, payload ){
      state.user = payload
    },
    SET_ERROR(state, payload){
      state.error = payload
    },
    UPDATE_CURRENT_USER(state, user) {
      state.currentUser = user
    },
  },
  actions: {
    createUser({commit}, user){
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
    loginUser({commit}, user){
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
  },
  modules: {
    
  }
})

Vue.use(VueSweetalert2);