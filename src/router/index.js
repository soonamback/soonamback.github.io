import { createRouter, createWebHistory } from "vue-router";

//import HomePage from "@/pages/HomePage";

import NotFoundPage from"@/pages/NotFoundPage"
import store from "@/store";
import routes from "./routes";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        ...routes,
    {
        path: "/:pathMatch(.*)*",
        component: NotFoundPage,
        redirect: "/", 
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