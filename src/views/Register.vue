<template>
  <v-container>
    <v-form
      @submit.prevent="createUser({ email: email, password: pass1 })"
      ref="form"
      class="col-md-6 offset-md-3 mt-16"
    >
      <v-card shaped>
        <v-img
        src="../assets/img/bg1.jpg"
        height="150px" 
        class="white--text align-start font-weight-bold"
        > 
        </v-img>
        <div class="px-10 py-5">
          <h1 class="purple--text darken-3 text-center">Registro</h1>
          <v-text-field v-model="email" label="E-mail" required></v-text-field>
          <v-text-field
            v-model="pass1"
            label="Introduce tu contraseña"
            counter
            required
            type="password"
          ></v-text-field>
          <v-text-field
            v-model="pass2"
            label="Repite tu contraseña"
            counter
            required
            type="password"
          ></v-text-field>

          <v-btn
            type="submit"
            color="light-blue"
            :disabled="!deactivate"
            elevation="1"
            block
          >
            <span class="white--text"> Registrar </span>
          </v-btn>
        </div>
      </v-card>
    </v-form>
    <p>
      {{ error }}
    </p>
  </v-container>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "Register",
  data() {
    return {
      email: "",
      pass1: "",
      pass2: "",
    };
  },
  created() {},
  methods: {
    ...mapActions(["createUser"]),
  },
  computed: {
    ...mapState(["error"]),
    deactivate() {
      return (
        this.pass1 === this.pass2 &&
        this.pass1.trim() !== "" &&
        this.pass1.length > 5
      );
    },
  },
};
</script>

<style>
</style>