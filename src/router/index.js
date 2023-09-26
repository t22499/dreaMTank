import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home/Home.vue'
const Services = ()=>import('@/views/Services/Services.vue')
const Services1 = ()=>import('@/views/Services/components/Services1.vue')
const Services2 = ()=>import('@/views/Services/components/Services2.vue')
const Services3 = ()=>import('@/views/Services/components/Services3.vue')
const Services4 = ()=>import('@/views/Services/components/Services4.vue')


const Recruit = ()=>import('@/views/Recruit/Recruit.vue')
const Recruit1 = ()=>import('@/views/Recruit/components/Recruit1.vue')
const Recruit2 = ()=>import('@/views/Recruit/components/Recruit2.vue')

const Company = ()=>import('@/views/Company/Company.vue')
const Company1 = ()=>import('@/views/Company/components/Company1.vue')
const Company2 = ()=>import('@/views/Company/components/Company2.vue')
const Company3 = ()=>import('@/views/Company/components/Company3.vue')
const Company4 = ()=>import('@/views/Company/components/Company4.vue')
const Contact = ()=>import('@/views/Contact/Contact.vue')

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path:'/',
      redirect:'/home'
    },
    {
      path:'/services',
      redirect:'/services/child1'
    },
    {
      path:'/recruit',
      redirect:'/recruit/child1'
    },
    {
      path:'/company',
      redirect:'/company/child1'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path:'/services',
      component:Services,
      children:[
        {
          path:'/services/child1',
          component:Services1
        },
        {
          path:'/services/child2',
          component:Services2
        },
        {
          path:'/services/child3',
          component:Services3
        },
        {
          path:'/services/child4',
          component:Services4
        }
      ]
    },
    {
      path:'/recruit',
      component:Recruit,
      children:[
        {
          path:'/recruit/child1',
          component:Recruit1
        },
        {
          path:'/recruit/child2',
          component:Recruit2
        },
      ]
    },
    {
      path:'/company',
      component:Company,
      children:[
        {
          path:'/company/child1',
          component:Company1
        },
        {
          path:'/company/child2',
          component:Company2
        },
        {
          path:'/company/child3',
          component:Company3
        },
        {
          path:'/company/child4',
          component:Company4
        }
      ]
    },
    {
      path:'/contact',
      component:Contact
    },
  ]
})

export default router
