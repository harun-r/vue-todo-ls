
import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/components/home/home-page.vue";
import About from "@/components/about/about-page.vue";
const routes = [
    {
        path: '/',
        component: Home },
    {
        path: '/about',
        component: About
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
export default router