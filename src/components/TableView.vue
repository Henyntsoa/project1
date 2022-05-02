<template>
  <table>
    <thead v-if="colis.length>0">
      <th></th>
      <th>Nom du colis</th>
      <th>Référence</th>
    </thead>
    <thead v-else>
      <th>Pas de colis envoyé</th>
    </thead>
    <tbody>
      <tr v-for="unColis in colis" :key="unColis.id">
        <td><input type="checkbox" /></td>
        <td>{{ unColis.nom }}</td>
        <td>{{ unColis.reference }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
const props = defineProps({
  colis: Array,
});
</script>

<style>
</style>