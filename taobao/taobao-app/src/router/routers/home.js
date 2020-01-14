const Index = () => import(/* webpackChunkName: "group-home" */ '@/views/index.vue')
const HomePage = () => import(/* webpackChunkName: "group-home" */ '@/views/home/homePage.vue')
const BabyClothes = () => import(/* webpackChunkName: "group-home" */ '@/views/home/babyClothes.vue')
const Member = () => import(/* webpackChunkName: "group-home" */ '@/views/home/member.vue')

const router = {
  path: '/',
  name: 'Index',
  component: Index,
  children: [
    {
      path: '/homePage',
      name: 'HomePage',
      component: HomePage
    }, {
      path: '/babyclothes',
      name: 'Babyclothes',
      component: BabyClothes
    },  {
      path: '/member',
      name: 'Member',
      component: Member
    }
  ]
}

export default router
