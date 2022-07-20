import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import PosteosUsuario from "@/views/PosteosUsuario.vue";
import Posteos from "@/views/PosteosView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/usuarios",
    name: "usuarios",
    component: () => import("@/views/UsuariosView.vue"),
  },
  {
    path: "/posteosUsuario/:userId",
    name: "posteosUsuario",
    props: true,
    component: PosteosUsuario,
  },
  {
    path: "/posteos",
    name: "posteos",
    component: Posteos,
  },
];

/* se crea el router, indicando url base y le pasamos el arreglo de routers */
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
