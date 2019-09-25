<template>
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
<!--    <HomeContent/>-->
  </div>
</template>

<script>
import { Flexbox, FlexboxItem, Toast  } from 'vux'
// import HomeContent from "./HomeContent";
  export default {
    name: "headInfo",
    data () {
        return {
          headInfo: {
            shopName: '森女部落',
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
          sheetVisible: false,
          actions: [],
        }
    },
    methods: {
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
        console.log(this.$vux)
      }
    },
    components: {
      Flexbox,
      FlexboxItem,
      Toast
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

<style scoped >
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
  .btn_line {
    border-right:1px solid white;
    padding-left: 6px;
    height: 25px;
    line-height: 25px;
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
  .close {
    padding-left: 7px;
  }
</style>
