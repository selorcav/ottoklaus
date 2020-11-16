<template>
  <v-row justify="center">
    <v-dialog v-model="showForm" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline blue--text">Formulario juguete</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-text-field label="Nombre" v-model="toy.data.name" required></v-text-field>
            <v-text-field label="Precio" v-model="toy.data.price" prefix="$" required></v-text-field>
            <v-text-field label="Stock" v-model="toy.data.stock" required></v-text-field>
            <v-text-field label="Código" v-model="toy.data.code" required></v-text-field>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue" text @click="$emit('close-form')">
            Cerrar
          </v-btn>
          <v-btn color="blue" text @click.prevent="submitForm"  v-text="toy.id ? 'Actualizar' : 'Crear'">
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
  props: {
    showForm: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      toy: {
        id: null,
        data: {
          name: null,
          code: null,
          price: 0,
          stock: 0
        }
      }
    }
  },
  methods: {
    ...mapActions(['createToy', 'updateToy']),
    submitForm() {
      if (!confirm("Confirma para continuar")) {
        return;
      }
      if (this.toy.id) {
        this.updateToy(this.toy);
      } else {
        this.createToy(this.toy.data);
      }
      this.$emit("close-form");
      this.resetToy();
    },
    closeForm() {
      this.$emit("close-form");
      this.resetToy();
    },
    resetToy() {
      (this.toy.id = null),
        (this.toy.data.name = null),
        (this.toy.data.code = null),
        (this.toy.data.stock = 0),
        (this.toy.data.price = 0);
    },
  },
  computed: {
    ...mapState(["currentToy"]),
  },
  watch: {
    currentToy: function () {
      this.toy = JSON.parse(JSON.stringify(this.currentToy));
    },
  },
};
</script>

<style>
</style>