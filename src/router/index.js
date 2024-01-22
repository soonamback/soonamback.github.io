import { createRouter, createWebHistory } from "vue-router";
import ShopPage from "@/pages/ShopPage";
import HomePage from "@/pages/HomePage";
import CreateProductPage from "@/pages/CreateProductPage"
import ReadProductPage from "@/pages/ReadProductPage"

import store from "../store/index"; 

const router = createRouter({
    history: createWebHistory(),
    routes: [
    {
        path: "/",
        component: HomePage,
        beforeEnter: (to, from, next) => {
            if (store.getters.isAuthenticated) {
                next("/shop")
            } else {
                next()
            }
        },
    },
    {
        path: "/shop",
        component: ShopPage,
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: "/shop/create/product",
        component: CreateProductPage,
      
    },
    {
        path: "/shop/read/product/:id",
       // name: "ReadProduct",
        component: ReadProductPage,
       
    },
  ],
});

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
        next("/");
    } else {
        next()
    }
})
export default router;