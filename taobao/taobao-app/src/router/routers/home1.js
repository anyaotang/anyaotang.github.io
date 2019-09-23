const Index = () => import(/* webpackChunkName: "group-home" */ '@/components/home/Index.vue')

const router = {
  path: '/',
  name: 'Index',
  component: Index
}

export default router
