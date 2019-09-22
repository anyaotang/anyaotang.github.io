<template>
    <div>
      <swiper :options="swiperOption" class="swiper-css">
      　　<swiper-slide>slide1</swiper-slide>
      　　<swiper-slide>slide2</swiper-slide>
      　　<div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
</template>

<script>
    export default {
        name: "Index",
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
          }
      }
    }
</script>

<style scoped>
  .swiper-css {
    height: 80px;
    background-color: pink;
  }
</style>
