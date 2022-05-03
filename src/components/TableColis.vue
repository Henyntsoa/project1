<template>
  <button @click="dialogAjout = true">Envoyer colis</button>
  <DialogView
    v-if="dialogAjout"
    @resultData="transfertToParent"
    @fermerModal="fermerModal"
  />
  <TableView :colis="$store.state.colisEnvoye" />
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import store from "../store";
import DialogView from "./DialogView.vue";
import TableView from "./TableView.vue";

//init
const dialogAjout = ref(false);
const colis = ref([]);

//reception données venant de dialogView
const transfertToParent = (dataFromChild) => {
  colis.value.push(dataFromChild);
  store.commit("setColisEnvoye", colis)
};
const fermerModal = () => {
  dialogAjout.value = false;
};

//raccourci clavier
onMounted(() => {
  document.addEventListener("keyup", keyupHandler);
});
onBeforeUnmount(() => {
  document.removeEventListener("keyup", keyupHandler);
});
const keyupHandler = (event) => {
  if (event.ctrlKey && event.code == "Enter") {
    dialogAjout.value = true;
  }
};
</script>

<style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 5px;
}

td:nth-child(1) {
  width: 1%;
}

tr:nth-child(even) {
  background-color:rgba(0, 0, 0, 0.015)
}
</style>