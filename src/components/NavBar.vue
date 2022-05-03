<template>
  <div v-if="afficherBarreDeNavigation" id="nav">
    <span v-if="nomRouteActuel !== 'Envoyé' && utilisateurActuel.email">
      <router-link to="/">Colis envoyés</router-link> |
    </span>
    <span v-if="nomRouteActuel !== 'Reçu' && utilisateurActuel.email">
      <router-link to="/reveived">Colis reçus</router-link> |
    </span>
    <span v-if="utilisateurActuel.email"
      >{{ utilisateurActuel.email }} |
      <a @click.prevent="logout"> Se déconnecter </a>
    </span>
    <span v-else>
      <router-link to="/login"> Se connecter </router-link>
    </span>
  </div>
</template>

<script setup>
import { computed, ref } from "@vue/reactivity";
import router from "../router";
import store from "../store";

//Facilitation ecriture du l'URL actuel
const nomRouteActuel = computed(() => {
  return router.currentRoute.value.name;
});
//Condition affichage barre de navigation
const afficherBarreDeNavigation = computed(() => {
  return !(nomRouteActuel.value == "Inscription" || nomRouteActuel.value == "Connexion");
});

//Affichage utilisateur actuel
const utilisateurActuel = computed(() => {
  return store.state.utilisateurActuel;
});

//Déconnexion
const logout = () => {
  store.dispatch("signOut");
};
</script>

<style>
a {
  cursor: pointer;
  color: blue;
  text-decoration: underline;
}
</style>