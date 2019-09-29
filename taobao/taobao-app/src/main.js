// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 引入字体图标样式
import '@/assets/icon/iconfont.css'
// swiper 插件
import 'swiper/dist/css/swiper.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// 引入mimtUI组件
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'

// 上拉刷新，下拉加载
import VueScroller from 'vue-scroller'

// vux组件
import {LoadingPlugin, ToastPlugin, ConfirmPlugin, DatetimePlugin, Divider, Badge} from 'vux'

// 引入storeVuex
import store from './store/store'

/**
 * 挂载全局样式属性
 */
Vue.use(Mint);
Vue.use(VueAwesomeSwiper)
Vue.use(VueScroller)
Vue.use(LoadingPlugin)
Vue.use(ToastPlugin)
Vue.use(ConfirmPlugin)
Vue.use(DatetimePlugin)
Vue.component('divider', Divider)
Vue.component('badge', Badge)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store, // 使用store
  components: { App },
  template: '<App/>'
})
