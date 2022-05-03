<template>
  <div v-if="utilisateurActuel.email">
    <h2>Colis reçus</h2>
    <TableViewVue :colis="colisRecu" />
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import TableViewVue from "../components/TableView.vue";
import { computed } from "@vue/reactivity";
import store from "../store";

const utilisateurActuel = computed(() => {
  return store.state.utilisateurActuel;
});
const colisRecu = ref([
  { nom: "Test1", reference: 12354, destinataire: "Me" },
  { nom: "Test2", reference: 86752, destinataire: "Me" },
  { nom: "Test3", reference: 767576, destinataire: "Me" },
]);
</script>