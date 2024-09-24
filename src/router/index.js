import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import AgendamentoView from '../views/AgendamentoView.vue'
import MedicoView from '../views/MedicoView.vue'
import RecepcionistaView from '../views/RecepcionistaView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/agendamento',
    name: 'agendamento',
    component: AgendamentoView
  },
  {
    path: '/medico',
    name: 'medico',
    component: MedicoView
  },
  {
    path: '/recepcionista',
    name: 'recepcionista',
    component: RecepcionistaView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
