import { createRouter, createWebHistory } from "vue-router";

//pages importing
import portfolio from "../views/Portfolio.vue";
import home from "../views/Home.vue";
import about from "../views/About.vue";
import skills from "../views/Skills.vue";

//routes
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "portfolio",
      component: portfolio,
    },
    {
      path: "/home",
      name: "home",
      component: home,
    },
    {
      path: "/about",
      name: "about",
      component: about,
    },
    {
      path: "/skills",
      name: "skills",
      component: skills,
    },
  ],
});

export default router;
