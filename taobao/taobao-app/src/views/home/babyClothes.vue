<template>
  <div class="backColor">
    <div class="box">
      <div class="classcation">
        <ul>
          <li>综合</li>
          <li>销量</li>
          <li>新品</li>
          <li>价格</li>
        </ul>
      </div>
      <div class="con">
        <ul>
            <li v-for="(item,index) in list" :key="index" @click="jumpPage(item.id)">
              <img :src="item.src" alt="">
              <p class="des">{{item.des}}</p>
              <p class="price">￥{{item.price}}</p>
              <p class="number">{{item.number}}人付款</p>
              <i class="iconfont icon-gouwuche iconcxie"></i>
            </li>
        </ul>
      </div>
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
                        id:'1',
                        src: require("../../assets/babyimages/1 (3).png"),
                        des: '樱桃小丸子联名原创蜗牛工作室大衣中长款英伦',
                        price: '12.8',
                        number: '222',
                    },  {
                        id: '2',
                        src: require('../../assets/babyimages/1 (1).png'),
                        des: '第一个描述桃小丸子联名原创蜗牛工作室大衣中',
                        price: '12.8',
                        number: '222',
                    },  {
                        id: '3',
                        src: require('../../assets/babyimages/1 (3).png'),
                        des: '第一个描述桃小丸子联名原创蜗牛工作室大衣中',
                        price: '12.8',
                        number: '222',
                    },  {
                        id: '4',
                        src: require('../../assets/babyimages/1 (2).png'),
                        des: '桃小丸子联名原创蜗牛工作室大衣中',
                        price: '12.8',
                        number: '222',
                    },  {
                        id: '5',
                        src: require("../../assets/babyimages/1 (2).png"),
                        des: '第一个描述',
                        price: '12.8',
                        number: '222',
                    },  {
                        id: '6',
                        src: require('../../assets/babyimages/1 (1).png'),
                        des: '第一个描述',
                        price: '12.8',
                        number: '222',
                    },  {
                        id: '7',
                        src: require('../../assets/babyimages/1 (1).png'),
                        des: '第一个描桃小丸子联名原创蜗牛工作室大衣中述',
                        price: '12.8',
                        number: '222',
                    },  {
                        id: '8',
                        src: require('../../assets/babyimages/1 (2).png'),
                        des: '桃小丸子联名原创蜗牛工作设备',
                        price: '12.8',
                        number: '222',
                    },  {
                        id: '9',
                        src: require('../../assets/babyimages/1 (3).png'),
                        des: '桃小丸子联名原创蜗牛工作室大衣中',
                        price: '12.8',
                        number: '222',
                    }
                ]
            }
        },
        methods: {
            jumpPage (id) {
            //     // this.$emit('id')
                console.log(id)
            //     this.$router.push({
            //         path: '/babyclothes/shopDetails/${id}',
            //     //     query: {
            //     //         id: id
            //     //     }
            //     })
            }
        }
    }
</script>

<style scoped>
  .backColor {
    background: #f7f5f5;
    padding-bottom: 20px;
  }
  a {
    color: #000;
  }
  .box {
    width: 92%;
    margin: 0 auto;
    overflow: hidden;
  }
  .box .classcation {
    padding: 12px 0;
    color: red;
    font-size: 13px;
  }
  .box .classcation ul {
  }
  .box .classcation ul li {
    display: inline;
    padding: 3px 10px;
    background: #fff;
    width: 47%;
    border-radius: 1em;
    text-align: center;
  }
  .box .classcation ul li:first-child {
    /*padding-left: 0;*/
  }
  .box .con ul {
    display: flex;
    flex-wrap: wrap;
  }
  .box .con li {
    width: 47%;
    padding: 3px;
    list-style: none;
    margin-bottom: 10px;
    background: #fff;
    border-radius: 0.5em;
    margin-left: 7px;
    line-height: 1.2em;
  }
  .box .con li:nth-child(2n+1) {
    margin-left: 0;
  }
  .box .con ul li .des {
    font-size: 12px;
    padding: 0 10px 10px 5px;
  }
  .box .price,.number,.iconcxie {
    padding-left: 18px;
    display: inline;
  }
  .box .price {
    font-size: 18px;
    padding-left: 0px;
    color: #ff3522;
  }
  .box .iconcxie {
    color: #e2050b;
  }
  .box .number {
    font-size: 11px;
    padding-left: 0px;
    color: #9ca29a;
  }
  .box img {
    padding-left: 10px;
    height: 140px;
  }
</style>
