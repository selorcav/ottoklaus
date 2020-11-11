<template>
  <v-app>
    <v-app-bar
      app
      color="light-blue accent-4"
      dense
      dark
    >

      <v-toolbar-title>OTTO KLAUS</v-toolbar-title>

      <v-spacer></v-spacer>

      <router-link to="/">
        <v-btn elevation="0" color="white" outlined class="mx-2">
          <v-icon>mdi-account</v-icon>
          Login
        </v-btn>
      </router-link>

      <router-link to="/Register">
        <v-btn elevation="0" color="white" class="mx-2">
          <v-icon color="blue">mdi-pencil</v-icon>
          <span class="blue--text">Registro</span> 
        </v-btn>
      </router-link>

    </v-app-bar>
    <router-view></router-view>

  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),
};
</script>
<style>
  a{
    text-decoration: none;
  }
</style>
