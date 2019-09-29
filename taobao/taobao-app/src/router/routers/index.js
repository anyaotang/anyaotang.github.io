const Index = () => import(/* webpackChunkName: "group-home" */ '@/views/index')

const router = {
  path: '/',
  name: 'Index',
  components: Index
}

export default router
