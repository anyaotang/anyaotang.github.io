<template>
  <div>
    <div class="swiper-container" style="touch-action: none;">
      <div class="swiper-wrapper" style="touch-action: none;">
        <div class="swiper-slide" :key="index" v-for="(item,index) in list">
          <keep-alive>
            <component :is="item.component"></component>
          </keep-alive>
        </div>
      </div>
    </div>
    <swiper v-model="index01" :show-dots="false">
      <swiper-item :key="index" v-for="(item,index) in list">
        <div class="tab-swiper vux-center">
          <keep-alive>
            <component :is="item.component"></component>
          </keep-alive>
<!--          <scroller :on-refresh="refresh" :on-infinite="infinite" ref="myscroller">-->
<!--          </scroller>-->
        </div>
      </swiper-item>
    </swiper>

  </div>
</template>
<script>
  import { Swiper, SwiperItem } from 'vux'
  import one from '../views/home/one'
  import two from '../views/home/two'
  import three from '../views/home/three'
  // import Swiper from '../../static/swiper-4.3.3.min.js'
  // import '../../static/swiper-4.3.3.min.css'
  export default {
    props: ['swiperIndex'],
    components: {
      one,
      two,
      three,
      Swiper,
      SwiperItem
    },
    watch: {
      swiperIndex (value, oldvalue) {
        // 接收 nav组件传过来的导航按钮索引，跳转到相应的内容区
        this.mySwiper.slideTo(value, 0, false)
      }
    },
    data () {
      return {
        list: [
          {path: '/one', component: one},
          {path: '/tow', component: two},
          {path: '/three', component: three},
        ],
        mySwiper: null
      }
    },
    mounted () {
      this.mySwiper = new Swiper('.swiper-container', {
        //  设定初始化时silde的索引
        initialSlide: this.$router.path === '/one' ? 0 : this.$router.path === '/two' ? 1 : this.$router.path === '/three' ? 2 : 0
      })
      this.mySwiper.on('slideChange', () => {
        // 监控滑动后当前的索引，将索引发送到导航组件
        this.$emit('slideTab', this.mySwiper.activeIndex)
      })
      // console.log(this.mySwiper)
    }
  }
</script>
<style type="text/css" scoped>
  .swiper-slide {
    touch-action: none;
  }
</style>
