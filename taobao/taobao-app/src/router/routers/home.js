const Index = () => import(/* webpackChunkName: "group-home" */ '@/views/index.vue')
const HomePage = () => import(/* webpackChunkName: "group-home" */ '@/views/home/homePage.vue')
const NewProducts = () => import(/* webpackChunkName: "group-home" */ '@/views/home/newProducts.vue')
const RealShooting = () => import(/* webpackChunkName: "group-home" */ '@/views/home/realShooting.vue')
const BuyShop = () => import(/* webpackChunkName: "group-home" */ '@/views/home/buyShop.vue')
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
      path: '/newProducts',
      name: 'NewProducts',
      component: NewProducts
    }, {
      path: '/realShooting',
      name: 'RealShooting',
      component: RealShooting
    }, {
      path: '/buyShop',
      name: 'BuyShop',
      component: BuyShop
    }, {
      path: '/member',
      name: 'Member',
      component: Member
    }
  ]
}

export default router
