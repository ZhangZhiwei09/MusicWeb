import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'defalut',
    component: () => import( '../components/Discovery.vue')
  },
  {
    path: '/discovery',
    name: 'discovery',
    component: () => import( '../components/Discovery.vue')
  },
  {
    path: '/playlists',
    name: 'PlayLists',
    component: () => import( '../components/PlayLists.vue')
  },
  {
    path: '/songs',
    name: 'Songs',
    component: () => import( '../components/Songs.vue')
  },
  {
    path: '/mvs',
    name: 'Mvs',
    component: () => import( '../components/Mvs.vue')
  },
  {
    path: '/result',
    name: 'Result',
    component: () => import( '../components/Result.vue')
  },
  {
    path:'/playlistdetail',
    name:'PlayListdetail',
    component: () => import( '../components/PlayListsDetail.vue')
  },
  {
    path:'/mvdetail',
    name:'Mvdetail',
    component: () => import( '../components/MvDetail.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
