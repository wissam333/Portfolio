import { createRouter, createWebHistory } from "vue-router";

//pages importing
import home from "../views/Home.vue";

//routes
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: home,
    },
  ],
});

export default router;
