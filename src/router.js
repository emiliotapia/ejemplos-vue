import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Rendering from '@/views/Rendering.vue'
import Eventos from '@/views/Eventos.vue'
import Componentes from '@/views/ComponentePadre.vue'
import FiltrosDirectivas from '@/views/FiltrosDirectivas.vue'
import ComputedWatchers from '@/views/ComputedWatchers.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/rendering',
      name: 'rendering',
      component: Rendering
    },
    {
      path:'/eventos',
      name:'eventos',
      component: Eventos
    },
    {
      path:'/componentes',
      name:'componentes',
      component:Componentes
    },
    {
      path:'/computed-watchers',
      name:'computedWatchers',
      component:ComputedWatchers
    },
    {
      path:'/filtros-directivas',
      name:'filtrosDirectivas',
      component:FiltrosDirectivas,
    }
  ]
})
