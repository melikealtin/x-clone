import { createRouter, createWebHistory } from "vue-router";

const MainLayout = () => import("@/layout/MainLayout.vue");
const Home = () => import("@/views/Home.vue");
const Profile = () => import("@/views/Profile.vue");
const PostDetails = () => import("@/views/PostDetails.vue");

const routes = [
  {
    path: "/",
    component: MainLayout,
    redirect: "/home",
    children: [
      {
        path: "home",
        name: "home",
        component: Home,
        meta: {
          title: "Home",
        },
      },
      {
        path: "explore",
        name: "explore",
        component: Home,
        meta: {
          title: "Explore",
        },
      },
      {
        path: "notifications",
        name: "notifications",
        component: Home,
        meta: {
          title: "Notifications",
        },
      },
      {
        path: "messages",
        name: "messages",
        component: Home,
        meta: {
          title: "Messages",
        },
      },
      {
        path: "grok",
        name: "grok",
        component: Home,
        meta: {
          title: "Grok",
        },
      },
      {
        path: "communities",
        name: "communities",
        component: Home,
        meta: {
          title: "Communities",
        },
      },
      {
        path: "premium",
        name: "premium",
        component: Home,
        meta: {
          title: "Premium",
        },
      },
      {
        path: "profile",
        name: "profile",
        component: Profile,
        meta: {
          title: "Profile",
        },
      },
      {
        path: "status/:id",
        name: "postDetails",
        component: PostDetails,
        meta: {
          title: "Post Details",
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title ? `${to.meta.title} / X` : "X";
  next();
});

export default router;
