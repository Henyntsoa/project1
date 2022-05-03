<template>
  <h2>Login</h2>
  <form @submit.prevent="signIn">
    <input type="text" v-model="emailTexte" />
    <input type="password" v-model="mdpTexte" />
    <input type="submit" value="Se connecter" />
  </form>
</template>

<script setup>
import { ref } from "vue";
import router from "../router";
import store from "../store";
//init
const emailTexte = ref("");
const mdpTexte = ref("");

//Inscription
const signIn = () => {
  store.dispatch("signIn", [emailTexte.value, mdpTexte.value])
};
</script>

<style>

</style>