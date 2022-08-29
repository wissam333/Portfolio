import { createRouter, createWebHistory } from "vue-router";

//pages importing
import portfolio from "../views/Portfolio.vue";
import about from "../views/About.vue";
import skills from "../views/Skills.vue";
import work from "../views/Work.vue";
import contact from "../views/Contact.vue";

import Thanks from "../views/Thanks.vue";
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
      path: "/about",
      name: "about",
      component: about,
    },
    {
      path: "/skills",
      name: "skills",
      component: skills,
    },
    {
      path: "/contact",
      name: "contact",
      component: contact,
    },
    {
      path: "/Thanks",
      name: "Thanks",
      component: Thanks,
    },
    {
      path: "/work",
      name: "work",
      component: work,
    },
  ],
});

export default router;
