<template>
  <NavBar />
  <router-view />
</template>

<script setup>
import NavBar from "./components/NavBar.vue";
import { onMounted } from "@vue/runtime-core";
import store from "./store"

//Charger utilisateur actuel dans app
onMounted(() => {
  store.dispatch("getUtilisateurActuel")
});
</script>

<style>
</style>
