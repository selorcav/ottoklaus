<template>
  <v-container class="mt-16">
    <h1>Ruta Protegida</h1>
    <h2>{{user.email}}</h2>
  </v-container>
</template>

<script>
import {mapState} from 'vuex';

export default {
  name: 'home',
  computed:{
    ...mapState(['user'])
  }

}
</script>

<style>

</style>