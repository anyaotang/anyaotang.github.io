const Index = () => import(/* webpackChunkName: "group-home" */ '@/views/home/Index.vue')
const Scroll = () => import(/* webpackChunkName: "group-home" */ '@/views/home/scroll.vue')


const router = {
  path: '/',
  name: 'Index',
  component: Index,
  children: [
    {
      path: '/scroll',
      name: 'Scroll',
      component: Scroll
    }
  ]
}

export default router
