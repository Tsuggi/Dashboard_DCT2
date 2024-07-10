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
      ],
    },
  ],
});

export default router;
