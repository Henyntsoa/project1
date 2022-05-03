import { createStore } from "vuex";
import { auth } from "../firebase/firebase.";
import {
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "@firebase/auth";
import router from "../router";

export default createStore({
  state() {
    return {
      utilisateurActuel: {},
      colisEnvoye: [],
      colisRecu: [],
    };
  },
  mutations: {
    setColisEnvoye(state, payload) {
      state.colisEnvoye = payload;
    },
    setColisRecu(state, payload) {
      state.colisRecu = payload;
    },
    setUtilisateurActuel(state, payload) {
      if (payload) {
        //il suffit d'ajouter ici les propriétés des utilisateurs, sur store/index.js ligne 37, sur SignUp.vue ligne 24
        const { email } = payload;
        state.utilisateurActuel.email = email;
      } else {
        state.utilisateurActuel.email = "No";
      }
    },
  },
  actions: {
    async signUp({ commit }, [email, mdp]) { //il suffit d'ajouter ici les propriétés des utilisateurs
      await createUserWithEmailAndPassword(auth, email, mdp)
        .then((credential) => {
          console.log(`L'email ${credential.user.email} est inscrit`);
          commit("setUtilisateurActuel", credential.user);
          router.push({ name: "Envoyé" });
        })
        .catch((error) => {
          console.log(error.code);
        });
    },
    async signIn({ commit }, [email, mdp]) {
      signInWithEmailAndPassword(auth, email, mdp)
        .then((credential) => {
          console.log(`L'email ${credential.user.email} est connecté`);
          commit("setUtilisateurActuel", credential.user);
          router.push({ name: "Envoyé" });
        })
        .catch((error) => {
          console.log(error.code);
        });
    },
    async signOut({ commit }) {
      signOut(auth)
        .then(() => {
          commit("setUtilisateurActuel", {});
          console.log("Déconnecté");
          router.push({ name: "Connexion" });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async getUtilisateurActuel({ commit }) {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.uid;
          commit("setUtilisateurActuel", user);
          // ...
        } else {
          commit("setUtilisateurActuel", {});
        }
      });
    },
  },
  modules: {},
});
