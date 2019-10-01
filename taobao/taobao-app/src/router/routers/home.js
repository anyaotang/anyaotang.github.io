const Index = () => import(/* webpackChunkName: "group-home" */ '@/views/index.vue')
const HomePage = () => import(/* webpackChunkName: "group-home" */ '@/views/home/homePage.vue')

const router = {
  path: '/',
  name: 'Index',
  component: Index,
  children: [
    {
      path: '/homePage',
      name: 'HomePage',
      component: HomePage
    }
  ]
}

export default router
