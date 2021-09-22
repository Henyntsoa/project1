<template>
<nav class="nav-wrapper teal">
   <div class="container">
    <a href="#" class="brand-logo">BIENVENUE</a>
    <a href="#" class="sidenav-trigger" data-target="mobile-links">Menu</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
      <li><a href="#">Acceuil</a></li>
      <li><a href="#">Mode de saisie</a></li>
      <li><a href="#">Couleur</a></li>
    </ul>
  </div>
</nav>
<div class="container">
  <h4>Veuillez saisir vos nom et prénoms:</h4>
  <br>
  <div class="input-field">
    <input type="text" id="nomATaper">
    <label for="nomATaper" class="active">Nom</label>
  </div>
  <div class="input-field">
    <input type="text" id="prenomATaper">
    <label for="prenomATaper" class="active">Prénoms</label>
  </div>
  <button class="btn" @click="confirmation">Confirmer</button>
  <h4>Bienvenue sur Vue, {{info}}.</h4>
  
</div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      nomPersonne: '',
      prenomPersonne: '',
      info: ''
    }
  },
  methods: {
    confirmation() {
      this.info = nomATaper.value + " " + prenomATaper.value
    }
  }
  // setup() {
  //   return {nomPersonne, prenomPersonne, info}
  // }
}
</script>

<style>
  /*@import '../src/components/materialize.min.css'
/*    <link type="text/css" rel="stylesheet" href="../src/components/materialize.css"  media="screen,projection"/>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
</style>