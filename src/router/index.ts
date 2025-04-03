import ProjectsLayout from '@/modulorum/projects/layouts/ProjectsLayout.vue'
import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: {name:'projects'},
      component: ProjectsLayout,
      children:[
        {
          path: 'projects',
          name: 'projects',
          component: ()=> import('@/modulorum/projects/views/ProjectsView.vue')
        }
      ]
    }
  ],
})

export default router
