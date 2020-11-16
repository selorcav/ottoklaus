import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import VueSweetalert2 from 'vue-sweetalert2';

Vue.config.productionTip = false

import {auth} from './firebase'

auth.onAuthStateChanged(user => {
  if(user){
    console.log(user)
    store.dispatch('detectUser', userDetected)
    const userDetected = {
      email: user.email,
      uid: user.uid,
    }
  }else{
    console.log(user)
    store.dispatch('detectUser', user)
  }
  new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
  }).$mount('#app')
})


Vue.use(VueSweetalert2);