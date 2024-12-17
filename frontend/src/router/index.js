import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/layout/MainLayout.vue"),
    redirect: "/home",
    children: [
      {
        path: "home",
        name: "home",
        component: () => import("@/views/Home.vue"),
      },
      {
        path: "explore",
        name: "explore",
        component: () => import("@/views/Home.vue"),
      },
      {
        path: "notifications",
        name: "notifications",
        component: () => import("@/views/Home.vue"),
      },
      {
        path: "messages",
        name: "messages",
        component: () => import("@/views/Home.vue"),
      },
      {
        path: "grok",
        name: "grok",
        component: () => import("@/views/Home.vue"),
      },
      {
        path: "communities",
        name: "communities",
        component: () => import("@/views/Home.vue"),
      },
      {
        path: "premium",
        name: "premium",
        component: () => import("@/views/Home.vue"),
      },
      {
        path: "profile",
        name: "profile",
        component: () => import("@/views/Profile.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
