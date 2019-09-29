const Index = () => import(/* webpackChunkName: "group-home" */ '@/views/home/index.vue')
const Scroll = () => import(/* webpackChunkName: "group-home" */ '@/views/home/scroll.vue')
const One = () => import(/* webpackChunkName: "group-home" */ '@/views/home/one.vue')
const Two = () => import(/* webpackChunkName: "group-home" */ '@/views/home/two.vue')
const Three = () => import(/* webpackChunkName: "group-home" */ '@/views/home/three.vue')

const router = {
  path: '/',
  name: 'Index',
  component: Index,
  children: [
    {
      path: '/scroll',
      name: 'Scroll',
      component: Scroll
    },
    {
      path: '/one',
      name: 'One',
      component: One
    },
    {
      path: '/two',
      name: 'Two',
      component: Two
    },
    {
      path: '/three',
      name: 'Three',
      component: Three
    }
  ]
}

export default router
