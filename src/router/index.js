import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home/Home.vue'
const Services = ()=>import('@/views/Services/Services.vue')
const Recruit = ()=>import('@/views/Recruit/Recruit.vue')
const Contact = ()=>import('@/views/Contact/Contact.vue')
const Company = ()=>import('@/views/Company/Company.vue')

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path:'/',
      redirect:'/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path:'/services',
      component:Services
    },
    {
      path:'/recruit',
      component:Recruit
    },
    {
      path:'/contact',
      component:Contact
    },
    {
      path:'/company',
      component:Company
    },
  ]
})

export default router
