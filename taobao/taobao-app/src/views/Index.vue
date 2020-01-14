<template>
    <div class="banner">
      <div class="con">
        <ul class="top_1">
          <li>{{headInfo.shopName}}</li>
          <li>
            <span v-show="follow===0" @click="guanzhu" ref="btn1"><i class="iconfont icon-icon-test"></i>关注</span>
            <span v-show="follow===1"  @click="sheetVisible = true" ref="btn1">已关注</span>
            <span>
              <i class="iconfont icon-gengduo" @click="more"></i>
              <i class="iconfont icon-vertical_line"></i>
              <i class="iconfont icon-tuichu" @click="btnClose" style="font-size: 12px"></i>
            </span>
          </li>
        </ul>
        <mt-actionsheet :actions="actions" v-model="sheetVisible" cancelText=""></mt-actionsheet> <!--cancelText:默认值是取消-->
<!--            <mt-actionsheet :actions="actions" v-model="sheetVisible" cancelText="容朕想想"></mt-actionsheet>-->
        <flexbox class="con_icon">
<!--          <flexbox-item class="flexbox-item" :span="2/8">-->
<!--&lt;!&ndash;            <img :src="headInfo.img" alt="">&ndash;&gt;-->
<!--           -->
<!--          </flexbox-item>-->
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
          <tab :line-width="2" default-color="#000"  active-color='red' prevent-default v-model="index01" @on-before-index-change="switchTabItem">
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
    import homePage from "./home/homePage";
    import babyClothes from "./home/babyClothes";
    import newProducts from "./home/newProducts";
    import realShooting from "./home/realShooting";
    import buyShop from "./home/buyShop";
    import member from "./home/member";
    import stickySlot from '../components/stickySlot/StickySlot'
    // import TestNav from "../components/testNav";
    // import Headers from '../components/home/headers'
    // import Dao from '../components/Dao'
    export default {
      name: "Index",
      components: {
          stickySlot,
          homePage,
          babyClothes,
          newProducts,
          realShooting,
          buyShop,
          member
        // TestNav,
        // Dao,
        // Headers,
      },
      data () {
        return {
          follow:0,
          sheetVisible: false,
          headInfo: {
            shopName: '蜗牛工作室',
            img: require("../assets/imghead.jpg"),
            number: '973'
          },
          ReputationLevel: [
            require("../assets/huangguan.png"),
            require("../assets/huangguan.png"),
            require("../assets/huangguan.png"),
            require("../assets/huangguan.png"),
            require("../assets/huangguan.png"),
          ],
          actions: [],
          tabItems: [
            {status: "首页", id: 0},
            {status: "宝贝", id: 1},
            {status: "新品", id: 2},
            {status: "实拍", id: 3},
            {status: "买家秀", id: 4},
            {status: "会员", id: 5}
          ],
          tabContent: [
            {path: 'homePage'},
            {path: 'babyClothes'},
            {path: 'newProducts'},
            {path:'realShooting'},
            {path: 'buyShop'},
            {path: 'member'}
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
          guanzhu () {
            this.$vux.toast.show({
                text: '关注成功！',
            })
            this.follow = 1
          },
          openAlbum() {
            console.log('容朕想想');
            this.$vux.toast.show({
                text: '谢谢！！！'
            })
          },
          takePhoto() {
            console.log(this.sheetVisible);
            this.follow = 0
            if (this.follow){
              this.sheetVisible = false
              this.$refs.btn1.style.innerText =  '关注'
            } else {
              this.sheetVisible = true
              this.$refs.btn1.style.innerText =  '已关注'
            }
          },
          more () {
            this.$vux.toast.show({
              text: '没有此功能的啦！！！',
              type: 'cancel'
            })
          },
          btnClose () {
            const _this = this
            _this.$vux.confirm.show({
              title: '确定退出吗？',
              onConfirm() {
                  this.$router.go(-1);
              },
              onCancel() {
                  console.log(_this)
              }
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
            }, 300)
          },
        },
      mounted() {
        this.actions = [{
          name: '取消关注',
          method: this.takePhoto
        }, {
            name: '容朕想想',
            method: this.openAlbum
          }
        ];
      }
    }
</script>
<style scoped>
  .banner {
    height: 138px;
    background-image: url("../assets/banner.jpg");
    background-repeat: no-repeat;
    background-size: cover;
  }
  .con {
    color: white;
    padding: 10px 10px 0px 10px;
    font-size: 12px;
  }
  .clear {
    clear: both;
  }
  .con_icon {
    padding-top: 4px;
  }
  .con_icon .flexbox-item {
    /*border: 1px solid red;*/
  }
  .con_icon img {
    width: 50px;
  }
  .con_icon ul {
    overflow: hidden;
  }
  .con_icon li {
    width: calc(100%/5);
    float: left;
  }
  .con_icon li img {
    width: 100%;
  }
  .top_1 li {
    float: left;
  }
  .top_1 li:first-child {
    float: left;
    font-size: 16px;
  }
  .top_1 li:last-child {
    float: right;
  }
  .top_1 li:last-child span {
    background: rgba(000,0,0,0.6);
    color: #fff;
    padding: 6px 12px;
    border-radius: 2em;
    border: 1px solid #baa181;
  }
  .top_1 li:last-child span:last-child {
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
    /*background-color: white;*/
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
