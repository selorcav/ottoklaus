<template>
  <v-main>
    <v-row>
      <v-col sm="6" class="white welcome d-none d-sm-block">
        <v-container class="pa-16">
          <div class="welcome-title">
            <h1 class="blue--text">BIENVENIDO A OTTOKLAUS</h1>
            <hr class="sub-line mt-5" />
          </div>
          <p class="mt-10 blue--text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis,
            officia totam magnam odio excepturi quas alias culpa deserunt
            corrupti amet fuga ullam ea tempore voluptatum nulla magni doloribus
            error iusto.
          </p>

          <p>¿Aún no tienes cuenta?</p>

          <router-link to="/register">
            <v-btn elevation="0" color="blue" dark> Registrate aqui </v-btn>
          </router-link>

          <div class="rrss mt-10">
            <p class="blue--text">Síguenos en</p>
            <v-icon color="blue"> mdi-facebook </v-icon>
            <v-icon color="blue"> mdi-twitter </v-icon>
            <v-icon color="blue"> mdi-instagram </v-icon>
          </div>
        </v-container>
      </v-col>
      <v-col sm="6">
        <v-container>
          <v-form
            @submit.prevent="loginUser({ email: email, pass: pass })"
            class="col-md-8 offset-md-2 mt-16"
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

                <v-btn type="submit" color="blue" elevation="1" block>
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
      </v-col>
    </v-row>
  </v-main>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapState } from "vuex";

export default {
  name: "Login",
  components: {},
  data() {
    return {
      show1: false,
      email: "",
      pass: "",
      snackbar: false,
    };
  },
  methods: {
    ...mapActions(["loginUser", "showing"]),
  },
  computed: {
    ...mapState(["error"]),
  },
};
</script>
<style lang="sass" scoped>
.welcome
  min-height: calc(100vh - 64px)
.sub-line
  width: 50%
  height: 5px
  background-color: #2196F3
  border-width: 0px
</style>
