<template>
  <h2>Sign up</h2>
  <form @submit.prevent="signUp">
    <input type="text" v-model="emailTexte" />
    <input type="password" v-model="mdpTexte" />
    <input type="submit" value="S'incrire" />
  </form>
  <div>{{ texteDuResultat }}</div>
  <button @click.prevent="test">Test</button>
</template>

<script setup>
import { ref } from "vue";
import router from "../router";
import store from "../store";
//init
const emailTexte = ref("");
const mdpTexte = ref("");
const texteDuResultat = ref("");

//Inscription
const signUp = () => {
  //il suffit d'ajouter ici les propriétés des utilisateurs, sur ligne 28 et 37 de store/index.js
  store.dispatch("signUp", [emailTexte.value, mdpTexte.value])
};
</script>

<style>
</style>