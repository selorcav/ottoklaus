import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import {auth} from '../firebase'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue'),
    meta: {requiresAuth: true} 
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const user = auth.currentUser
    console.log(user)
    if (!user) {
      next({
        path: '/register'
      })
    } else {
      next()
    }
  } else {
    next()
  }
})


export default router
