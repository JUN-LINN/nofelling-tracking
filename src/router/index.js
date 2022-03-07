import {
  createRouter,
  createWebHistory
} from 'vue-router'
import Home from '../views/Home.vue'

const routes = [{
      path: '/',
      name: 'Home',
      component: Home
    },
  {
    path: '/Homenext',
    name: 'Homenext',
    component: () => import(/* webpackChunkName: "about" */ '../views/Homenext.vue')
  },
   {
     path: '/miniHome',
     name: 'miniHome',
     component: () => import( /* webpackChunkName: "about" */ '../views/miniHome.vue')
   },
   {
     path: '/bHome',
     name: 'bHome',
     component: () => import( /* webpackChunkName: "about" */ '../views/bHome.vue')
   },
   {
     path: '/bmHome',
     name: 'bmHome',
     component: () => import( /* webpackChunkName: "about" */ '../views/bmHome.vue')
   },
  {
    path: '/place',
    name: 'Place',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/place.vue')
  },
  
  {
    path: '/choice',
    name: 'choice',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/choice.vue')
  },
  {
    path: '/brplace',
    name: 'brPlace',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/brplace.vue')
  }, {
    path: '/brminiplace',
    name: 'brminiplace',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/brminiplace.vue')
  }, {
    path: '/fixedplace',
    name: 'fixedplace',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/fixedplace.vue')
  }, {
    path: '/mobileplace',
    name: 'mobileplace',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/mobileplace.vue')
  }, {
    path: '/transportation',
    name: 'transportation',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/transportation.vue')
  },
   {
    path: '/miniplace',
    name: 'miniplace',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/miniplace.vue')
  }, {
    path: '/bsplace',
    name: 'bsplace',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/bsplace.vue')
  }, {
    path: '/bsminiplace',
    name: 'bsminiplace',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/bsminiplace.vue')
  }
  , {path: '/testnet',
    name: 'testnet',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/testnet.vue')
  }
  , {
    path: '/testbnet',
    name: 'testbnet',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/testbnet.vue')
  },
  {
    path: '/useplace/:id',
    name: 'useplace',
    component: () => import( /* webpackChunkName: "about" */ '../views/useplace.vue')
  },
  {
    path: '/usemplace/:mid',
    name: 'usemplace',
    component: () => import( /* webpackChunkName: "about" */ '../views/usemplace.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
