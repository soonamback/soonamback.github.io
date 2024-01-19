import { createRouter, createWebHistory } from "vue-router";
import ShopPage from "@/pages/ShopPage";
import HomePage from "@/pages/HomePage";

const router = createRouter({
    history: createWebHistory(),
    routes: [
    {
        path: "/",
        component: HomePage
    },
    {
        path: "/shop",
        component: ShopPage,
    },
  ],
});

export default router;