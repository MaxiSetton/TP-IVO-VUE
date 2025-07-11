import { createRouter, createWebHistory } from 'vue-router'
import Tablas from '../pages/Tablas.vue'
import Estadisticas from '../pages/Estadisticas.vue'

const routes = [
  { path: '/', redirect: '/tablas' },
  { path: '/tablas', component: Tablas },
  { path: '/estadisticas', component: Estadisticas }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router