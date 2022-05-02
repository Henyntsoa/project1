<template>
  <div @click="closeModal" class="modal">
    <form @submit.prevent="ajouter" >
      <div class="content">
        <p>Ajouter un colis</p>
        <label for="nomRef">Nom</label><br />
        <input v-model="texteDuNom" ref="nomRef" /><br />
        <label for="refRef">Référence</label><br />
        <input ref="refRef" v-model="texteDeLaRef" /><br />
        <label for="destinataireRef">Destinataire</label><br />
        <input ref="destinataireRef" v-model="texteDuDestinataire" /><br />
        <input type="submit" value="Confirmer" :disabled="!regles">
        <button @click="emit('fermerModal');">Annuler</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import {
  ref,
  defineEmits,
  computed,
  defineProps,
  onMounted,
  onBeforeUnmount,
} from "vue";
//réception à parent
const props = defineProps({
  opened: Boolean,
});

//init
const emit = defineEmits(["resultData", "fermerModal"]);
const colis = ref({});
const texteDuNom = ref("");
const texteDeLaRef = ref("");
const texteDuDestinataire = ref("");

//init raccourci clavier
onMounted(() => {
  document.addEventListener("keydown", keyupHandler);
});
onBeforeUnmount(() => {
  document.removeEventListener("keydown", keyupHandler);
});

//autofocus à nom
const nomRef = ref(null);

//ajout et emission à parent
const ajouter = () => {
  colis.value = {
    nom: texteDuNom.value,
    reference: texteDeLaRef.value,
    destinataire: texteDuDestinataire.value,
    selected: false,
  };
  texteDuNom.value = "";
  texteDeLaRef.value = "";
  texteDuDestinataire.value = "";
  emit("resultData", colis.value);
  emit("fermerModal");
};

//règles d'activation bouton formulaire
const regles = computed(() => {
  return (
    texteDuNom.value != "" &&
    texteDeLaRef.value != "" &&
    texteDuDestinataire.value != ""
  );
});

//emission fermer modal à parent
const closeModal = (event) => {
  if (event.target.className == "modal") {
    emit("fermerModal");
  }
};

//autofocus à la création
onMounted(() => {
  nomRef.value.focus();
});

//raccourci clavier fermer
const keyupHandler = (event) => {
  if (event.code == "Escape") {
    emit("fermerModal");
  }
};
</script>

<style>
.modal {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
}
.content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 50%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -webkit-animation-name: animatetop;
  -webkit-animation-duration: 0.4s;
  animation-name: animatetop;
  animation-duration: 0.4s;
}
/* Add Animation */
@keyframes animatetop {
  from {
    top: -300px;
    opacity: 0;
  }
  to {
    top: 0;
    opacity: 1;
  }
}
</style>