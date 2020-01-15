<template>
  <div class="con">
    <div class="marquee">
      <div class="marquee_box">
        <i class="iconfont icon-remind cxie"></i>
        <ul class="marquee_list" :class="{marquee_top:animate}">
          <li v-for="(item,index) in marqueelist" :key="index" v-html="item.name"></li>
        </ul>
      </div>
    </div>
<!--    top-->
    <div class="top">
      <div class="top_1">

      </div>
      <div class="top_2">
        <div class="top_2_1"></div>
        <div class="top_2_2"></div>
      </div>
    </div>
<!--    1.18-->
    <div class="con_18">
      <span>1月18日</span>
      <div class="con_18_1">

<!--        <div class="item" v-for="(item,index) in list" :key="index">-->
<!--            <img :src="item.src" alt="">-->
<!--            <p class="des" v-html="item.des"></p>-->
<!--            <p class="jia">1月18日上架</p>-->
<!--        </div>-->
        <ul >
          <li class="item" v-for="(item,index) in list" :key="index">
            <img :src="item.src" alt="">
            <p class="des" v-html="item.des"></p>
            <p class="jia">1月18日上架</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "newProducts",
        data () {
            return {
                animate: false,
                marqueelist: [
                   {
                       id: '1',
                       name: '1.18号0点上新&nbsp;少女beauty&nbsp;life'
                   }, {
                       id: '2',
                       name: '1.24号0点上新&nbsp;少女beauty&nbsp;life'
                   }
               ],
                list:[
                    {
                        id:'1',
                        src: require("../../assets/babyimages/1 (3).png"),
                        des: '樱桃小丸子联名原创蜗牛工作室大衣中长款英安必',
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
                        des: '桃小丸子联名原创蜗牛工作室大衣中注释',
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
          showMarquee () {
              this.animate = true
              setTimeout(() =>{
                  this.marqueelist.push(this.marqueelist[0])
                  this.marqueelist.shift()
                  this.animate = false
              },3000)
          }
        },
        created() {
          setInterval(this.showMarquee,2000);
        }
    }
</script>

<style scoped>
  .con {
    clear: both;
    background: #eeeeee;
    padding: 15px 0 20px 0;
    /*  */
    color: #000;
  }
  .marquee {
    width: 92%;
    height: 45px;
    background: #fff;
    border-radius: 0.5em;
    margin: 0 auto;
  }
  .marquee .cxie {
    padding-left: 12px;
  }
  .marquee .marquee_box {
    display: block;
    position: relative;
    top: 14px;
    width: 80%;
    height: 40%;
    overflow: hidden;
  }
  .marquee .marquee_list {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    padding-left: 20px;
  }
  .marquee .marquee_list li {
    font-size: 14px;
    color: #676666;
    padding-left: 20px;
  }
  .marquee_top {
    transition: all 0.5s;
    margin-top: -20px;
  }
  .top {
    /*background: #fff;*/
    border-radius: 1em;
    width: 92%;
    height: 300px;
    margin: 15px auto;
  }
  .top .top_1 {
    border-radius: 1em 0 0 1em;
    background: #9a6e3a;
    width: 57%;
    height: 100%;
    display: inline;
    float: left;
  }
  .top .top_2 {
    background: #007aff;
    border-radius: 0 1em 1em 0;
    width: 43%;
    height: 100%;
    float:right;
  }
  .top .top_2 .top_2_1 {
    background: darkorange;
    height: 50%;
    border-radius: 0 1em 0 0;
  }
  .top .top_2 .top_2_2 {
    background: red;
    height: 50%;
    border-radius: 0 0 1em 0;
  }
  .con_18 {
    width: 92%;
    margin: 10px auto;
  }
  .con_18 span {
    color: #ab9f10;
    font-size: 16px;
  }
  .con_18 .con_18_1 {
    margin-top: 10px;
  }
  .con_18 .con_18_1 .item:nth-child(2n+1){clear: both;}
  /*.item{width: 50%;float: left;text-align: center;line-height: 1.7;}*/
  .con_18 .con_18_1 .des {
    font-size: 12px;
    padding: 0 15px 0 8px;
    line-height: 1.2em;
    /**/
    overflow:hidden;
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2;

  }
  .con_18 .con_18_1 .jia {
    color: orangered;
    padding: 15px 0 5px 10px;
  }
  .con_18 .con_18_1 ul {
    display: flex;
    flex-wrap: wrap;
  }
  .con_18 .con_18_1 li {
    padding: 3px;
    margin-bottom: 10px;
    background: #fff;
    border-radius: 1em;
    width: 47%;
    line-height: 1.5em;
    margin-left: 6px;
  }
  .con_18 .con_18_1 li:first-child {

  }
  .con_18 .con_18_1 li:nth-child(2n+1) {
    margin-left: 0;
  }
  .con_18 .con_18_1 li:nth-child(2n) {

  }
  .con_18 .con_18_1 img {
    width: 98%;
    background-size: cover;
    background-repeat: no-repeat;
    padding: 5px 0px 0 2px;
  }
</style>
