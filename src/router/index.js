import { createRouter, createWebHistory } from "vue-router";
import MainLayout from "@/layouts/MainLayout.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: MainLayout,
      children: [
        {
          path: "/dashboard",
          name: "Dashboard",
          component: () => import("@/views/DashboardView.vue"),
        },
        {
          path: "/tonnage",
          name: "Tonnage",
          component: () => import("@/views/TonnageView.vue"),
        },
        {
          path: "/taches",
          name: "Tâches",
          component: () => import("@/views/TasksView.vue"),
        },
        {
          path: "/about",
          name: "About",
          component: () => import("@/views/AboutView.vue"),
        },
        {
          path: "/pro",
          name: "Pro",
          component: () => import("@/views/ProView.vue"),
        },
        {
          path: "/dechetterie",
          name: "Dechetterie",
          component: () => import("@/views/DechetterieView.vue"),
          children: [
            {
              path: "/dechetterie/belz",
              name: "Belz",
              component: () => import("@/views/dct/BelzView.vue"),
            },
            {
              path: "/dechetterie/carnac",
              name: "Carnac",
              component: () => import("@/views/dct/CarnacView.vue"),
            },
            {
              path: "/dechetterie/saintanne",
              name: "Saint Anne",
              component: () => import("@/views/dct/SaintAnneView.vue"),
            },
            {
              path: "/dechetterie/pluvigner",
              name: "Pluvigner",
              component: () => import("@/views/dct/PluvignerView.vue"),
            },
            {
              path: "/dechetterie/quiberon",
              name: "Quiberon",
              component: () => import("@/views/dct/QuiberonView.vue"),
            },
            {
              path: "/dechetterie/crach",
              name: "Crach",
              component: () => import("@/views/dct/CrachView.vue"),
            },
          ],
        },
      ],
    },
  ],
});

export default router;
