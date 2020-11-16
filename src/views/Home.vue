<template>
  <v-container class="mt-16">
    <ToysForm :showForm="showForm" 
    @close-form="showForm = false" 
    @save-form="showForm = false"/>
    <v-card class="pa-16">
      <h2 class="blue--text mb-10">
        <v-avatar>
          <img
            src="https://cdn.vuetifyjs.com/images/john.jpg"
            alt="John"
          /> </v-avatar
        > Bienvenido {{ user.email }}
      </h2>

      <v-row>
        <v-col class="d-flex justify-end" cols="12">
          <v-hover v-slot="{ hover }">
            <v-btn color="blue" 
            dark 
            large 
            :elevation="hover ? 4 : 0" 
            @click.prevent="showForm = true">
              Agregar juguete
            </v-btn>
          </v-hover>
        </v-col>

        <v-col v-for="toy in toys" :key="toy.id" md="4" sm="6">
          <v-card class="mx-auto">
            <v-img
              height="100"
              src="https://images-na.ssl-images-amazon.com/images/I/71Luk7KauBL._SL1074_.jpg"
            ></v-img>
            <v-card-text>
              <v-card-title class="headline blue--text">{{
                toy.data.name
              }}</v-card-title>
              <v-card-subtitle class="subtitle-1"
                >Precio: <span class="blue--text">${{ toy.data.price }} </span>
              </v-card-subtitle>
              <v-card-text>
                Stock: <span class="orange--text">{{ toy.data.stock }} </span> <br>
                Código: <span class="orange--text">{{ toy.data.code }} </span>
              </v-card-text>
            </v-card-text>
            <v-card-actions class="d-flex justify-space-between">
              <v-btn large dark color="red" @click="removeToy(toy.id)">
                Eliminar
              </v-btn>
              <v-btn large dark color="warning" @click="modifyToy(toy)">
                Editar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

    </v-card>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";
import ToysForm from '../components/ToysForm.vue'

export default {
  name: "home",
  components:{
    ToysForm
  },
  data() {
    return {
      showForm: false
    }
  },
  methods: {
    ...mapActions(["getToys", "deleteToy", "editToy"]),
    removeToy(toyId) {
      if (confirm("¿Seguro?")) {
        this.deleteToy(toyId);
      }
    },
    modifyToy(toy) {
      this.editToy(toy);
      this.showForm = true;
    },
  },
  computed: {
    ...mapState(["user", "toys"]),
  },
  created() {
    this.getToys();
  },
};
</script>

<style>
</style>