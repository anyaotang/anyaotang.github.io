<template>
    <div class="banner">
      <div class="con">
        <Flexbox>
          <FlexboxItem>
            <span class="shopName">{{headInfo.shopName}}</span>
          </FlexboxItem>
          <FlexboxItem class="btn">
            <!--        <button class="button"  @click="sheetVisible = true" size="large" ref="btn1"><i class="iconfont icon-guanzhu"  style="font-size: 20px;"></i>关注</button>-->
            <button class="button"  @click="sheetVisible = true" size="large" ref="btn1">已关注</button>
            <button class="btn_search button">
              <span class="btn_close" @click="more"></span>
              <!--          <div class="btn_search btn_line"></div>-->
              <!--          <span class=" close iconfont icon-close-small" style="font-size: 20px;"></span>-->
            </button>
            <mt-actionsheet :actions="actions" v-model="sheetVisible" cancelText="容朕想想"></mt-actionsheet>
          </FlexboxItem>
        </Flexbox>
        <flexbox class="con_icon">
          <flexbox-item class="flexbox-item" :span="1/7">
            <img :src="headInfo.img" alt="">
          </flexbox-item>
          <flexbox-item class="flexbox-item" :span="1/7">
            <ul>
              <li v-for="(item,index) in ReputationLevel" :key="index">
                <img :src="[item == 0 ? ReputationLevel[0]:ReputationLevel[1] ]" alt="信誉等级">
              </li>
            </ul>
          </flexbox-item>
          <flexbox-item class="flexbox-item" :span="1/4">粉丝数{{headInfo.number}}万</flexbox-item>
        </flexbox>
      </div>
      <div class="backColor">
        <sticky-slot class="stickyTop">
          <tab :line-width=2  active-color='red' prevent-default v-model="index01" @on-before-index-change="switchTabItem">
            <tab-item class="vux-center" v-for="(item,index) in tabItems" :key="index">{{item.status}}</tab-item>
          </tab>
        </sticky-slot>

<!--        <swiper v-model="index01" :show-dots="false" style="height: 2000px;">-->
<!--          <swiper-item v-for="(item,index) in tabContent" :key="index">-->
<!--            <div v-if="index01 === index" >-->
<!--&lt;!&ndash;              <scroller :on-refresh="refresh" :on-infinite="infinite" ref="myscroller">&ndash;&gt;-->
<!--                  <component :is="item.path"></component>-->
<!--&lt;!&ndash;              </scroller>&ndash;&gt;-->
<!--            </div>-->
<!--          </swiper-item>-->
<!--        </swiper>-->
        <div v-model="index01" v-for="(item,index) in tabContent" :key="index">
          <div v-if="index01 === index" >
            <component :is="item.path"></component>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    import Scroll from "./scroll";
    import HeadInfo from '../../components/HeadInfo'
    import Dao from '../../components/Dao'
    import stickySlot from '../../components/StickySlot'
    import { Tab, TabItem, Flexbox, FlexboxItem, Toast, Swiper, SwiperItem } from 'vux'
    import TestNav from "../../components/testNav";
    import Headers from '../../components/home/headers'
    export default {
      name: "Index",
      components: {
        TestNav,
        Scroll,
        HeadInfo,
        Tab,
        TabItem,
        Dao,
        Headers,
        Flexbox,
        FlexboxItem,
        Toast,
        Swiper,
        SwiperItem,
        stickySlot,
      },
      data () {
        return {
          headInfo: {
            shopName: '蜗牛工作室',
            img: require("../../assets/imghead.jpg"),
            number: '973'
          },
          ReputationLevel: [
            require("../../assets/huangguan.png"),
            require("../../assets/huangguan.png"),
            require("../../assets/huangguan.png"),
            require("../../assets/huangguan.png"),
            require("../../assets/huangguan.png"),
          ],
          sheetVisible: false,
          actions: [],
          tabItems: [
            {status: "首页", id: 0},
            {status: "宝贝", id: 1},
            {status: "造物节", id: 2},
            {status: "新品", id: 3},
            {status: "实拍", id: 4},
            {status: "买家秀", id: 5},
            {status: "会员", id: 6}
          ],
          tabContent: [
            {path: 'scroll'},
            // {path: 'scroll'},
            // {path: 'scroll'},
            // {path: 'scroll'},
            // {path: 'scroll'},
            // {path: 'scroll'},
            // {path: 'scroll'}
          ],
          index01: 0,
          index: 0,
          /*刷新*/
          noDate: false, //判断是否加载的开关
          arr:[],
          page:1,
          pageSize:10

        }
      },
      methods: {
        // 刷新
        // getData () {
        //   var vm = this;
        //
        // },
        // 下拉刷新
        refresh () {
          console.log('refresh')
          // this.timeout = setTimeout(() => {
          //   this.$refs.myscroller.finishPullToRefresh()
          // },1500)
        },
        // 上拉加载
        infinite () {
          console.log('infinite')
          // this.timeout = setTimeout(() => {
          //   this.$refs.myscroller.finishPullToRefresh()
          // },1500)
        },
        //
        openAlbum() {
          console.log('容朕想想');
        },
        takePhoto() {
          console.log(this.sheetVisible);
          if (this.sheetVisible){
            this.sheetVisible = false
            this.$refs.btn1.style.innerText =  '关注'
          } else {
            this.sheetVisible = true
            this.$refs.btn1.style.innerText =  '已关注'
          }
        },
        more () {
          // console.log(this.$vux)
          this.$vux.toast.show({
            text: '没有此功能的啦！！！'
          })
        },
        switchTabItem (index) {
          console.log('on-before-index-change', index)
          // if(index === 0) {
          //   this.$router.push({
          //     path: 'scroll'
          //   })
          // }
          this.$vux.loading.show({
            text: 'loading'
          })
          setTimeout(() => {
            this.$vux.loading.hide()
            this.index01 = index
          }, 400)
        },
      },
      mounted() {
        this.actions = [{
          name: '取消关注',
          method: this.takePhoto
        },
          //   {
          //   name: '容朕想想',
          //   method: this.openAlbum
          // }
        ];
      }
    }
</script>

<style scoped>
  .banner {
    height: 138px;
    background-image: url("../../assets/banner.jpg");
    background-repeat: no-repeat;
    background-size: cover;
  }
  .con {
    color: white;
    padding: 16px 10px 0px 10px;
    font-size: 12px;
  }
  .shopName{
    font-size: 16px;
  }
  .con_icon {
    padding-top: 4px;
  }
  .con_icon .flexbox-item {
    /*border: 1px solid red;*/
  }
  img {
    width: 50px;
  }
  ul {
    overflow: hidden;
  }
  li {
    width: calc(100%/5);
    float: left;
  }
  li img {
    width: 100%;
  }
  .btn {
    text-align: right;
  }

  .btn .button {
    outline: none;
    background: none;
    border: 1px solid white;
    border-radius: 1.5em;
    padding: 4px 9px 4px 9px;
    color: white;
    margin-left: 4px;
  }
  .btn .btn_search{
    display: inline;
  }

  .btn .btn_close::after {
    content: "• • • ";
    font-size: 15px;
  }
  /*
   通过设置top的值，控制固定的位置，0是顶部，值为number(px)
 */
  .backColor {
    background-color: white;
  }
  /*.tab-swiper {*/
  /*  background-color: indianred;*/
  /*  !*height: 100px;*!*/
  /*}*/
  .stickyTop {
    margin-top: 5px;
    top: 0;
    z-index: 10;
  }
  .vux-swiper {
    height: 3000px;
  }
</style>
