import Vue from 'vue'
import Vuex from 'vuex'
import {auth} from '../firebase'
import router from '../router'

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
    }
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
        console.log(error)
        commit('SET_ERROR', error)
      })
    }
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
      console.log(error)
      commit('SET_ERROR', error)
    })
  },
  modules: {
    
  }
})
