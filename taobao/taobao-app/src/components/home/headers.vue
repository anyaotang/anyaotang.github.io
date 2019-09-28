<template>
  <div class="backColor">
    <sticky-slot class="stickyTop">
      <tab :line-width=2  active-color='red' prevent-default v-model="index01" @on-before-index-change="switchTabItem(index)">
        <tab-item class="vux-center" v-for="(item,index) in tabItems" :key="index">{{item.status}}</tab-item>
      </tab>
    </sticky-slot>
<!--    <div v-model="index01" height="100px" :show-dots="false">-->
<!--      <div v-for="(item,index) in tabItems" :key="index">-->
<!--        <div v-if="index01 === index" class="tab-swiper vux-center">-->
<!--          {{item.status}} Container-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
    <swiper v-model="index01" height="100px" :show-dots="false">
      <swiper-item v-for="(item,index) in tabItems" :key="index">
        <div  class="tab-swiper vux-center">
          {{item.status}} Container
        </div>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import stickySlot from '../../components/StickySlot'
  import { Tab, TabItem, Swiper, SwiperItem } from 'vux'
  export default {
    name: "scroll2",
    data () {
      return {
        tabItems: [
          {status: "首页", id: 0},
          {status: "宝贝", id: 1},
          {status: "造物节", id: 2},
          {status: "新品", id: 3},
          {status: "实拍", id: 4},
          {status: "买家秀", id: 5},
          {status: "会员", id: 6}
        ],
        index01: 0,
        index: 0,
      }
    },
    methods: {
      switchTabItem (index) {
        console.log('on-before-index-change', index)
        if(index === 0) {
          path: "scroll"
        }
        this.$vux.loading.show({
          text: 'loading'
        })
        setTimeout(() => {
          this.$vux.loading.hide()
          this.index01 = index
        }, 400)
      },
    },
    components: {
      stickySlot,
      Tab,
      TabItem,
      Swiper,
      SwiperItem,
    },
    mounted() {

    }

  }
</script>

<style scoped>
  /*
   通过设置top的值，控制固定的位置，0是顶部，值为number(px)
 */
  .tab-swiper {
    background-color: #fff;
    height: 100px;
  }
  .stickyTop {
    margin-top: 5px;
    top: 0;
    z-index: 10;
  }
  .backColor {
    background-color: white;
  }

</style>
