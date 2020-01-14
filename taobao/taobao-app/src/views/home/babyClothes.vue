<template>
  <div class="backColor">
    <div class="box">
      <div class="classcation">
        <span>综合</span>
        <span>销量</span>
        <span>新品</span>
        <span>价格</span>
      </div>
        <ul>
          <a href="#">
            <li v-for="(item,index) in list" :key="index">
              <img :src="item.src" alt="">
<!--              <p>{{item.des}}</p>-->
<!--              <p>￥{{item.price}}</p>-->
<!--              <h6>{{item.number}}人付款</h6>-->
<!--              <i class="iconfont icon-tuichu"></i>-->
            </li>
          </a>
        </ul>
    </div>
    <div>
      <section class="section">
        <div class="wrap">
          <div class="col-4 c1">1</div>
          <div class="col-4 c2">2</div>
          <div class="col-4 c3">3</div>
          <div class="col-4 c4">4</div>
        </div>
        <div class="wrap">
          <div class="col-4 c5">5</div>
          <div class="col-4 c6">6</div>
        </div>
      </section>

    </div>
  </div>
</template>

<script>
    export default {
        name: "babyClothes",
        data () {
            return {
                list:[
                    {
                        src: require("../../assets/babyimages/1 (3).png"),
                        des: '樱桃小丸子联名原创蜗牛工作室大衣中长款英伦',
                        price: '12.8',
                        number: '222',
                    },  {
                        src: require('../../assets/babyimages/1 (1).png'),
                        des: '第一个描述桃小丸子联名原创蜗牛工作室大衣中',
                        price: '12.8',
                        number: '222',
                    },  {
                        src: require('../../assets/babyimages/1 (3).png'),
                        des: '第一个描述桃小丸子联名原创蜗牛工作室大衣中',
                        price: '12.8',
                        number: '222',
                    },  {
                        src: require('../../assets/babyimages/1 (2).png'),
                        des: '桃小丸子联名原创蜗牛工作室大衣中',
                        price: '12.8',
                        number: '222',
                    },  {
                        src: require("../../assets/babyimages/1 (2).png"),
                        des: '第一个描述',
                        price: '12.8',
                        number: '222',
                    },  {
                        src: require('../../assets/babyimages/1 (1).png'),
                        des: '第一个描述',
                        price: '12.8',
                        number: '222',
                    },  {
                        src: require('../../assets/babyimages/1 (1).png'),
                        des: '第一个描桃小丸子联名原创蜗牛工作室大衣中述',
                        price: '12.8',
                        number: '222',
                    },  {
                        src: require('../../assets/babyimages/1 (2).png'),
                        des: '桃小丸子联名原创蜗牛工作设备',
                        price: '12.8',
                        number: '222',
                    },  {
                        src: require('../../assets/babyimages/1 (3).png'),
                        des: '桃小丸子联名原创蜗牛工作室大衣中',
                        price: '12.8',
                        number: '222',
                    }
                ]
            }
        }
    }
</script>

<style scoped>
  .wrap{
    margin:10px auto;
    /*max-width:1280px;*/
    /*min-width:1024px;*/
  }
  .wrap{
    display: -webkit-box;
    -webkit-box-orient: horizontal;
  }
  .col-4{
    height:30px;
    border:1px solid #999;
    -webkit-box-flex:1;
  }
  a {
    color: #000;
  }
  .box {
    /*width: 95%;*/
    /*margin: 0 auto;*/
    overflow: hidden;
  }
  .box .classcation {
    padding: 15px 0;
    color: red;
  }
  .box ul {
    display: flex;
    flex-wrap: wrap;
  }
  .box li {
    width: 160px;
    padding: 3px;
    list-style: none;
    margin-bottom: 12px;
    border: 1px solid #ebebeb;
    border-radius: 0.5em;
  }
  .box li:nth-child(2n-1) {
    float: left;
  }
  .box li:nth-child(2n) {
    float: right;
  }
  .box img {
    height: 160px;
  }
</style>
