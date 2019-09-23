const Index = () => import(/* webpackChunkName: "group-home" */ '@/views/home/Index.vue')

const router = {
  path: '/index',
  name: 'Index',
  component: Index
}

export default router
