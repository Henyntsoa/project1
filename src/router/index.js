import { createRouter, createWebHistory } from 'vue-router'
import store from '../store';
import Home from '../views/Home.vue'

const routes = [
  {
    path: "/",
    name: "Envoyé",
    component: Home,
  },
  {
    path: "/reveived",
    name: "Reçu",
    component: () => import("../views/Received.vue"),
  },
  {
    path: "/login",
    name: "Connexion",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/signup",
    name: "Inscription",
    component: () => import("../views/Signup.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

//securing route

// router.beforeEach(async (to, from) => {
//   if (
//     // make sure the user is authenticated
//     !store.state.utilisateurActuel.email &&
//     // ❗️ Avoid an infinite redirect
//     to.name !== "Connexion" &&
//     to.name !== "Inscription"
//   ) {
//     // redirect the user to the login page
//     return { name: "Connexion" };
//   }
// });
export default router
