const BabyClothes = () => import(/* webpackChunkName: "group-home" */ '@/views/home/babyClothes.vue')
const ShopDetails = () => import(/* webpackChunkName: "group-home" */ '@/views/assembly/shopdetails.vue')
const router = {
  path: '/babyclothes',
  name: 'Babyclothes',
  component: BabyClothes,
  children: [
    {
      path: '/babyclothes/shopDetails/:id',
      name: 'shopDetails',
      component: ShopDetails
    }
  ]
}

  export default router
