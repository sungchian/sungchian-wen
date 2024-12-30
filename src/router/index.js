import { createRouter, createWebHistory } from "vue-router";
import Login from "../components/pages/login.vue";
import LayoutDefault from "../components/layouts/layout-default.vue";

const routes = [
  {
    path: "/",
    component: LayoutDefault,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory("/sungchian-wen/"),
  routes,
});

export default router;
