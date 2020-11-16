<template>
  <v-app class="main-bg">
    <v-app-bar app color="white"  dark>
      <router-link to="/">
        <v-img width="150" class="nav-logo" src="./assets/img/logo.png"></v-img>
      </router-link>

      <v-spacer></v-spacer>

      <router-link to="/" v-if="!userExist">
        <v-btn elevation="0" color="blue" class="mx-2">
          <v-icon>mdi-login</v-icon>
          Login
        </v-btn>
      </router-link>

      <router-link to="/Register" v-if="!userExist">
        <v-btn elevation="0" color="blue" outlined class="mx-2">
          <v-icon color="blue"> mdi-pencil </v-icon>
          <span class="blue--text"> Registro </span>
        </v-btn>
      </router-link>

      <v-btn @click="logoutUser" elevation="0" color="blue" class="mx-2" v-if="userExist">
        <v-icon color="white"> mdi-logout </v-icon>
        <span class="white--text"> Cerrar sesión </span>
      </v-btn>
    </v-app-bar>
    <router-view></router-view>
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "App",

  components: {},
  methods: {
    ...mapActions(["logoutUser"]),    
  },
  computed:{
    ...mapGetters(['userExist'])
  },

  data: () => ({
    //
  }),
};
</script>
<style lang="sass">
  a
    text-decoration: none

  .main-bg
    background: url('./assets/img/main-bg.jpg') !important
    background-position: center

</style>
