<template>
    <div class="backColor">
      <div>
        <div class="box" ref="box">
        <span class="name">
          {{boxItem.name}}
        </span>
          <span class="time">{{boxItem.time}}</span>
          <span>每满{{boxItem.num1}}减{{boxItem.num2}},上不封顶</span>
        </div>
        <div class="liveBroadcast">
          <a href="#">
            <flexbox>
              <flexbox-item>
                <img src="../../assets/images/zhibo.png" alt="">
              </flexbox-item>
              <flexbox-item>
                <h2>新品预览 冲榜赢福利</h2>
                <div class="leftzhibo">
                  <span class="btnzhibo">♥直播中</span><span class="numberWatch">288123观看</span>
                </div>
                <div class="leftzhibobottom">
                  <ul>
                    <li v-for="(item,index) in leftzhibobottom" :key="index">
                      <img :src="item.img_url" alt="">
                    </li>
                  </ul>
                </div>
              </flexbox-item>
            </flexbox>
          </a>
        </div>
        <sticky-slot class="stickyTop1">
          <div class="tab">
            <swiper :options="swiperOption" class="swiper-css">
          　　<swiper-slide v-for="(item,index) in swiperNum" :key="index" class="color1">
                <div>
                  <div class="color2">
                    <p class="tit">{{item.title}}</p>
                    <p>{{item.content}}</p>
                  </div>
                  <div class="activity" ref="activity">{{item.activity}}</div>
                </div>
              </swiper-slide>
<!--              <div class="left">向左滑动</div>-->
            </swiper>
          </div>
        </sticky-slot>
        <!--聚划算-->
        <div class="con">
          <div class="con_active">
          </div>
          <swiper :options="swiperOption1" class="National_active">
            <swiper-slide v-for="(item,index) in bannerImages" :key="index">
              <a href="#"><img :src="item.img_url" alt=""></a>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
          <div class="snbl">
            <a href="#">
              <img src="../../assets/images/banner04.png" alt="">
            </a>
          </div>
          <div>
            <x-table full-bordered="true" class="xtable">
              <tbody class="tbody">
              <tr>
                <td v-for="(item,index) in tableNumber" :key="index" style="border: 1px solid #080202;">
                  <span style="font-weight: 800;">{{item.time}}</span><br/>
                  <span style="font-size: 9px;letter-spacing: 0.2em;padding-top: 15px;">{{item.type}}</span><br/>
                  <span style="color: #e90b00;font-weight: 600;">{{item.introduction}}</span><br/>
                </td>
              </tr>
              </tbody>
            </x-table>
          </div>
          <div class="collection borderColor">

          </div>
          <!--双十一5折神劵-->
          <div class="Eleven borderColor">

          </div>
          <div class="reduction borderColor">

          </div>
          <!--专区6折限时秒杀-->
          <div class="special">
            <flexbox>
              <flexboxItem class="FlexboxItem">132</flexboxItem>
            </flexbox>
            <flexbox>
              <flexboxItem class="FlexboxItem">
                <span class="liu">
                  专区<span style="color: #e20d00;">6折限时秒杀</span>【看直播再领无门槛劵最高<span style="color: #e20d00;">再减50元</span>】
                </span>
              </flexboxItem>
            </flexbox>
            <flexbox>
              <flexboxItem class="FlexboxItem">
                <div class="fen">
                  <span>疯抢中<i></i></span>
                </div>
              </flexboxItem>
            </flexbox>
          </div>
          <div style="position: relative">
            <div class="clearance borderColor">

            </div>
            <div class="clearbtn">点击抢购</div>
          </div>
          <div style="position: relative">
            <img class="welfareimg" src="../../assets/xiong.jpg" alt="">
            <img class="welfareimg1" src="../../assets/fulidai.png" alt="">
            <div class="welfare">

            </div>
          </div>
          <!--拯救吃土少女-->
          <div class="div18 borderColor">

          </div>
          <div class="div19 borderColor">
              <flexbox>
                <flexbox-item :span="2/4">
                  <div class="div19_1">
                    <div class="span1">{{div19Item1.title}}</div>
                    <div class="span3">{{div19Item1.introduce}}</div>
                    <div class="span2">{{div19Item1.content}}</div>
                  </div>
                </flexbox-item>
                <flexbox-item :span="2/4" style="margin-left: 0px;">
                    <div class="div19_2">
                      <div class="span1">{{div19Item2.title}}</div>
                      <div class="span3">{{div19Item2.introduce}}</div>
                      <div class="span2">{{div19Item2.content}}</div>
                    </div>
                </flexbox-item>
              </flexbox>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import stickySlot from '../../components/stickySlot/StickySlot'
  // import { } from 'vux'
  export default {
        name: "homePage",
      data () {
          return {
              footerData: [],
              tabItems: [
              {status: "首页", id: 0},
              {status: "宝贝", id: 1},
              {status: "造物节", id: 2},
              {status: "新品", id: 3},
              {status: "实拍", id: 4},
              {status: "买家秀", id: 5},
              {status: "会员", id: 6}
            ],
              // 轮播
              swiperOption: {
              pagination: {
                el: '.swiper-pagination',
                clickable: true // 允许点击小圆点跳转
              },
              slidesPerView: 4,
              slidesPerColumn: 1,
              spaceBetween: 5,
              // autoplay: {
              //   delay: 3000,
              //   disableOnInteraction: false // 手动切换之后继续自动轮播
              // },
              loop: false
            },
              swiperOption1: {
              pagination: {
                el: '.swiper-pagination',
                clickable: true // 允许点击小圆点跳转
              },
              loop: true
            },
              colors : {
              color1: '#fff5dc',
              color2:'#eb2b20',
            },
              swiperNum: [
              {
                title: '9.24聚划算',
                content: '全店95折包邮',
                activity: '每周六上新'
              },
              {
                title: '9.24品牌清仓',
                content: '聚划算',
                activity: '专区满500-200元'
              },
              {
                title: '9.24聚划算',
                content: '全店95折包邮',
                activity: '每周六上新'
              },
              {
                title: '9.24聚划算',
                content: '全店95折包邮',
                activity: '每周六上新'
              },
              {
                title: '9.24聚划算',
                content: '全店95折包邮',
                activity: '每周六上新'
              },
            ],
              boxItem : {
              name: '跨店满减',
              time: '2019.09.24-2019.09.26',
              num1: '200',
              num2: '15'
            },
              tableNumber: [
              {time: '9.22~9.26',type: '店铺微淘',introduction: '2.5W + 实物福利'},
              {time: '9.22~9.26',type: '店铺微淘',introduction: '2.5W + 实物福利'},
              {time: '9.22~9.26',type: '店铺微淘',introduction: '2.5W + 实物福利'},
              {time: '9.22~9.26',type: '店铺微淘',introduction: '2.5W + 实物福利'},
            ],
              div19Item1: {
              title: '『转发抽奖』',
              introduce: '微博·孤版样衣',
              content: '蜗牛微博：蜗牛工作室WNGZS'
            },
              div19Item2: {
                title: '『互动抽奖』',
                introduce: '微信·绝版美衣',
                content: '蜗牛微信：蜗牛工作室'
              },
              bannerImages: [
                  {
                      imgsrc: '',
                      img_url: require("../../assets/images/banner01.png")
                  },
                  {
                      imgsrc: '',
                      img_url: require("../../assets/images/banner02.png")
                  },
                  {
                      imgsrc: '',
                      img_url: require("../../assets/images/banner03.png")
                  }
              ],
              leftzhibobottom: [
                  {
                      imgsrc: '',
                      img_url: require("../../assets/images/xiaop.png")
                  },
                  {
                      imgsrc: '',
                      img_url: require("../../assets/images/xiaop.png")
                  },
                  {
                      imgsrc: '',
                      img_url: require("../../assets/images/xiaop.png")
                  }
              ]
          }
      },
    components: {
      stickySlot
    },
    mounted() {

    }
  }
</script>

<style scoped>
  a {
    color: #000;
  }
  /*
   通过设置top的值，控制固定的位置，0是顶部，值为number(px)
 */
  .stickyTop1 {
    margin-top: 5px;
    top: 44px;
    z-index: 10;
    /*position: relative;*/
  }
  .tab {
    /*border: 1px solid red;*/
    margin-top: 11px;
  }
  .swiper-css {
    height: 94px;
    background-color: white;
  }
  .left {
    width: 10px;
    line-height: 11px;
    padding: 1px;
    background-color: white;
    color: #eb2b20;
    font-size: 8px;
    /*position: absolute;*/
    position: fixed;
    z-index: 9999;
    top: 10px;
    /*right: -10px;*/
  }
  .box {
    height: 40px;
    line-height: 40px;
    text-align: left;
    padding-left: 15px;
    color: #eb2b20;
    font-size: 12px;
    background-color: gold;
  }
  .name {
    width: 80px;
    background-color: white;
    border: 1px solid #eb2b20;
    padding: 3px 5px 3px 5px;
  }
  .time {
    padding-left: 10px;
  }
  .liveBroadcast {
    background-color: white;
    margin: 3px auto;
    width: 94%;
    height: 159px;
    border-radius: 1em;
  }
  .liveBroadcast img {
    width: 170px;
    border-top-left-radius: 1em;
    border-bottom-left-radius: 1em;
  }
  .liveBroadcast h2 {
    font-size: 16px;
    text-align: center;
  }
  .liveBroadcast .leftzhibo {
    padding:10px 0 0 10px;
  }
  .liveBroadcast  .btnzhibo {
    background: #ff442c;
    font-size: 12px;
    padding: 3px 5px;
    border-radius: 0.2em;
    color: white;
  }
  .liveBroadcast .numberWatch {
    font-size: 13px;
    color: gray;
    padding-left: 8px;
  }
  .liveBroadcast .leftzhibobottom {
    margin-top: 50px;
    padding: 0 0 0 5px;
  }
  .liveBroadcast .leftzhibobottom ul li img {
    width: 45px;
    border-radius: 0px;
    float: left;
    padding-left: 5px;
  }
  .backColor {
    background-color: #f2f2f2;
  }

  .color1 {
    top: 10px;
    height: 78px;
    background-color: #fff5dc;
    position: relative;
    /*margin-left: 5px;*/
  }
  .color2 {
    position: absolute;
    top: 5px;
    left: 0;
    right: 0;
    /*bottom: 0;*/
    color: white;
    width: 95%;
    height: 45%;
    margin: auto;
    padding-top: 10px;
    border-radius: 0.5em;
    background-color: #eb2b20;
    letter-spacing: 0.1em;
  }
  .tit {
    font-size: 11px;
  }
  p {
    font-size: 9px;
  }
  .activity {
    position: relative;
    top: 55px;
    font-size: 11px;
    padding-top: 2px;
    color: #eb2b20;
  }
  .con {
    background-color: #ffdf18;
    padding-bottom: 5px;
    font-family: 微软雅黑;
  }
  .con_active {
    height: 35px;
    background-color: #ff5001;
  }
  .National_active {
    border: 1px solid #080202;
    background-color: white;
    border-radius: 0.8em;
    margin-top: 10px;
  }
  .National_active a img {
    width: 100%;
    height: 120px;
  }
  .snbl {
    border: 1px solid #080202;
    width: 92%;
    margin: 15px auto;
  }
  .snbl img {
    width: 100%;
  }
  .vux-table {
    line-height: 16px;
  }
  .xtable {
    width: 92%;
    margin: 0 auto;
  }
  .tbody {
    border: 1px solid #080202;
    font-size: 10px;
  }
  /*共同的样式*/
  .borderColor {
    border: 1px solid #080202;
    background-color: white;
    width: 92%;
    margin: 12px auto;
  }
  .collection {
    height: 150px;
    border-top-left-radius: 1.5em;
    border-top-right-radius: 1.5em;
  }
  .Eleven {
    height: 100px;
    border-radius: 0.5em;
  }
  .reduction {
    height: 180px;
    margin: 15px auto;
    border-radius: 0.5em;
  }
  .special {

  }
  .special .FlexboxItem {
    text-align: center;
    height: 30px;
  }
  .liu {
    font-size: 11px;
  }
  .fen {
    width: 20%;
    margin: 0 auto;
    color: #ffdf18;
    font-size: 11px;
    letter-spacing: 0.2em;
    background-color: black;
    padding: 1px;
  }
  .clearance {
    height: 250px;
    border-radius: 0.5em;
    /*position: relative;*/
    margin: 0 auto;
  }
  .clearbtn {
    border: 1px solid black;
    padding: 3px 12px 3px 12px;
    border-radius: 2em;
    color: white;
    width: 16%;
    background-color: #e20d00;
    font-size: 12px;
    margin: 0 auto;
    position: absolute;
    top:95%;
    left: 0;
    right: 0;
  }
  .welfareimg {
    width: 14%;
    margin-top: 25px;
    margin-left: 4em;
  }
  .welfareimg1 {
    width: 30%;
    position: absolute;
    top: 20px;
    left: 5px;
  }
  .welfare {
    width: 92%;
    height: 70px;
    border: 2px dashed black;
    border-radius: 3em;
    margin: 0px auto;
  }
  .div18{
    height: 120px;
    border-radius:0.5em ;
  }
  .div19 {
    background-color: #ffdf18;
    border-top-left-radius: 0.5em;
    border-top-right-radius: 0.5em;
    font-size: 12px;
    padding-top: 1px;
    font-weight: 800;
  }
  .div19_1 {
    padding: 8px 0px 5px 0px;
    text-align: center;
    border-top-left-radius: 0.5em;
    background: linear-gradient(90deg,#fddd19,#f1c617);
  }
  .div19_2 {
    padding: 8px 0px 5px 0px;
    text-align: center;
  }

  .div19_1 .span1,.div19_2 .span1 {
    letter-spacing: 0.3em;
    font-size: 8px;
  }
  .div19_1 .span2,.div19_2 .span2 {
    font-size: 8px;
  }
  .div19_1 .span3,.div19_2 .span3 {
    font-size: 12px;
    color: #eb4e0b;
    letter-spacing: 0.2em;
  }
</style>
<style>
  /*.swiper-wrapper {*/
  /*  margin:22px 0px 40px 20px;*/
  /*}*/
  /*自定义swiper分页器的样式*/
  .swiper-pagination .swiper-pagination-bullet{
    width: 9px;
    height: 9px;
    opacity: 1;
    background: #BBB9B9;
  }
  .swiper-pagination .swiper-pagination-bullet-active {
    width: 9px;
    height: 9px;
    background: #ff1c1c;
  }
</style>
