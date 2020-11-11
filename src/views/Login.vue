<template>
  <v-container>
    <v-form
      @submit.prevent="loginUser({email: email, pass: pass})"
      class="col-md-6 offset-md-3 mt-16"
    >
      <v-card shaped>
        <v-img
        src="../assets/img/bg2.jpg"
        height="150px" 
        class="white--text align-start font-weight-bold"
        > 
        </v-img>
        <div class="px-10 py-5">
          <h1 class="blue--text text-center">Login</h1>
          <v-text-field
            v-model="email"
            label="E-mail"
            append-icon="mdi-account"
            required
          >
          </v-text-field>
          <v-text-field
            v-model="pass"
            label="Password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show1 ? 'text' : 'password'"
            @click:append="show1 = !show1"
            required
          ></v-text-field>

          <v-btn
            type="submit"
            color="blue"
            elevation="1"
            block
          >
            <span class="white--text"> Acceder </span>
          </v-btn>
        </div>
      </v-card>
    </v-form>
    <v-snackbar v-model="snackbar" color="primary">
      {{ error }}
      <template v-slot:action="{ attrs }">
        <v-btn
          color="white"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Cerrar
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
// @ is an alias to /src
import {mapActions, mapState} from 'vuex'

export default {
  name: "Login",
  components: {},
  data() {
    return {
      show1: false,
      email: '',
      pass: '',
      snackbar: false,
    };
  },
  methods:{
    ...mapActions(["loginUser", 'showing']),
  }, 
  computed:{
    ...mapState(["error"])
  }
};
</script>
