import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
// import CarritoView from '@/views/CarritoView.vue'
// shift + alt + flecha hacia abajo, para repetir la ultima linea

//* http://localhost:5173
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Home', component: HomeView, meta: {requiresAuth: true }},
    { path: '/login', name: 'Login', component: LoginView},
    // { path: '/carrito', name: 'Carrito', component: CarritoView,  meta: {requiresAuth: true }}
  ]
});
// beforEach se ejecuta antes de cada ruta
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated');
  
  if(to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
    next('/login')
  } else {
    next()
  }

});

export default router
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }