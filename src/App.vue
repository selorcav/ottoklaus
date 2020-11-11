<template>
  <v-app>
    <v-app-bar
      app
      color="purple darken-2"
      dense
      dark
    >

      <v-toolbar-title>OTTO KLAUS</v-toolbar-title>

      <v-spacer></v-spacer>

      <router-link to="/">
        <v-btn elevation="0" color="purple darken-3" class="mx-2">
          <v-icon>mdi-account</v-icon>
          Login
        </v-btn>
      </router-link>

      <router-link to="/Register">
        <v-btn elevation="0" color="purple darken-3" class="mx-2">
          <v-icon>mdi-pencil</v-icon>
          Registro
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
