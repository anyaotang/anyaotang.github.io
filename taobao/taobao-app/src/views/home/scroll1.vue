<template>
  <div>
    <swiper :options="swiperOption" class="swiper-css">
      　　<swiper-slide>slide1</swiper-slide>
      　　<swiper-slide>slide2</swiper-slide>
      　　<div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div class="box_fixed" id="boxFixed" :class="{'is_fixed' : isFixed}">
      我是来测试的、哇咔咔
    </div>
    <div>
      <div class="backColor"></div>
      <div class="backColor"></div>
      <div class="backColor"></div>
      <div class="backColor"></div>
      <div class="backColor"></div>
      <div class="backColor"></div>
      <div class="backColor"></div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "scroll1",
    data () {
      return {
        // 轮播
        swiperOption: {
          pagination: {
            el: '.swiper-pagination',
            clickable: true // 允许点击小圆点跳转
          },
          autoplay: {
            delay: 3000,
            disableOnInteraction: false // 手动切换之后继续自动轮播
          },
          loop: true
        },
        isFixed: false,
        offsetTop:0
      }
    },
    mounted(){
      window.addEventListener('scroll',this.initHeight);
      this.$nextTick( () => {
        this.offsetTop = document.querySelector('#boxFixed').offsetTop;
      })
    },
    methods:{
      initHeight () {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        this.isFixed = scrollTop > this.offsetTop ? true : false;
      },
    },
    destroyed () {
      window.removeEventListener('scroll', this.handleScroll)
    }
  }
</script>

<style scoped>
  .swiper-css {
    height: 80px;
    background-color: pink;
  }
  .backColor {
    background-color: lawngreen;
    height: 300px;
  }
  .box_fixed {
    width: 100%;
    height: 40px;
    border: 2px dashed pink;
    margin: 0 auto;
    line-height: 40px;
    background: #eee;
  }
  .is_fixed{
    position: sticky;
    top: 0;
    z-index: 999;
  }
</style>

