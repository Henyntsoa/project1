<template>
  <div v-if="utilisateurActuel.email">
    <h2>Colis envoyés</h2>
    <TableColisVue />
  </div>
</template>

<script setup>
import TableColisVue from "../components/TableColis.vue";
import { computed } from "@vue/reactivity";
import store from "../store";
const utilisateurActuel = computed(() => {
  return store.state.utilisateurActuel;
});
</script>
