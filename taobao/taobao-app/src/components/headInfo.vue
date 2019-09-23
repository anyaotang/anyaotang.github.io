<template>
  <div class="con">
    <Flexbox>
      <FlexboxItem>
       <span class="shopName">{{headInfo.shopName}}</span>
      </FlexboxItem>
      <FlexboxItem class="btn">
        <span class="button">已关注</span>
        <div class="btn_search button">
          <span class="btn_close"></span>
          <span class="iconfont icon-baseline-close-px"></span>
        </div>
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
</template>

<script>
import { Flexbox, FlexboxItem } from 'vux'
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
          ]
        }
    },
    methods: {

    },
    components: {
      Flexbox,
      FlexboxItem
    }
  }
</script>

<style scoped >
  .con {
    color: white;
    padding: 20px 10px 0px 10px;
    font-size: 12px;
  }
  .shopName{
    font-size: 16px;
  }
  .con_icon {
    padding-top: 10px;
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
    background: none;
    border: 1px solid white;
    border-radius: 1em;
    padding: 8px 9px 5px 9px;
    color: white;
    margin-left: 4px;
  }
  .btn .btn_search{
    display: inline;
  }

  .btn .btn_close {
    color: white;
  }
  .btn .btn_close::after {
    content: "• • • ";
    font-size: 15px;
  }
  /*#close {*/
  /*  display: inline-block;*/
  /*  width: 15px;*/
  /*  height: 2px;*/
  /*  background: white;*/
  /*  transform: rotate(45deg);*/
  /*}*/

  /*#close::after {*/
  /*  content: '';*/
  /*  display: block;*/
  /*  width: 15px;*/
  /*  height: 2px;*/
  /*  background: white;*/
  /*  transform: rotate(-90deg);*/
  /*}*/
</style>
