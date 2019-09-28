<template>
    <div>
      <div>
        <tab :line-width=2 active-color='red' prevent-default v-model="index01" @on-before-index-change="switchTabItem(index)">
          <tab-item class="vux-center" v-for="(item,index) in tabItems" :key="index">{{item.status}}</tab-item>
        </tab>
        <swiper v-model="index01" height="100px" :show-dots="false">
          <swiper-item v-for="(item,index) in tabItems" :key="index">
            <div class="tab-swiper vux-center">{{item.status}} Container</div>
          </swiper-item>
        </swiper>
      </div>
      <!---->
      <div>
        <p class="st-menu">
          <span v-for="(item,index) in menuList" :class="{selected:index == num}" @click="chooseMenu(index)">
            {{item.label}}
          </span>
        </p>
      </div>
    </div>
</template>

<script>
  import { Tab, TabItem, Swiper, SwiperItem } from 'vux'
  export default {
    name: "HomeContent",
    data () {
      return {
        index01: 0,
        tabItems: [
          {status: "首页", id: 0},
          {status: "宝贝", id: 1},
          {status: "造物节", id: 2},
          {status: "新品", id: 3},
          {status: "实拍", id: 4},
          {status: "买家秀", id: 5},
          {status: "会员", id: 6}
        ],
        index: 0,
        menuList:[{
          label:123,
          label:456,
          label:789
        }]
      }
    },
    components: {
      Tab,
      TabItem,
      Swiper,
      SwiperItem
    },
    methods: {
      switchTabItem (index) {
        console.log('on-before-index-change', index)
        if (index === 0) {
          this.$router.push({
            path: ''
          })
        }
        this.$vux.loading.show({
          text: 'loading'
        })
        setTimeout(() => {
          this.$vux.loading.hide()
          this.index01 = index
        }, 1000)
      },
      chooseMenu (index) {
        if (index === 0) {
          this.$router.push({
            path: 'scroll'
          })
        }else if(index === 1) {
          this.$router.push({
            path:"statisticsdata"
          })
        }else if(index === 2) {
          this.$roter.push({
            path:"cloudstorage"
          })
        }
      }
    }
  }
</script>

<style scoped>
  .tab-swiper {
    background-color: #fff;
    height: 100px;
  }
</style>
