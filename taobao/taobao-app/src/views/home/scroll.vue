<template>
    <div class="backColor">
      <sticky-slot class="stickyTop">
          <tab>
            <tab-item v-for="(item,index) in tabItems" :key="index">{{item.status}}</tab-item>
          </tab>
      </sticky-slot>
      <div>
        <div class="box" ref="box">
        <span class="name">
          {{boxItem.name}}
        </span>
          <span class="time">{{boxItem.time}}</span>
          <span>每满{{boxItem.num1}}减{{boxItem.num2}},上不封顶</span>
        </div>
        <div class="liveBroadcast">

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
            </swiper>
          </div>
        </sticky-slot>
        <!--聚划算-->
        <div class="con">
          <div class="con_active">

          </div>
          <swiper :options="swiperOption1" class="National_active">
            <swiper-slide>1111</swiper-slide>
            <swiper-slide>2222</swiper-slide>
            <swiper-slide>1111</swiper-slide>
            <swiper-slide>2222</swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
          <div class="snbl">
            <img src="../../assets/activy.jpg" alt="">
          </div>
          <div>
            <x-table full-bordered="true" class="xtable">
<!--              <thead>-->
<!--              <tr>-->
<!--                <th>Product</th>-->
<!--                <th>Price</th>-->
<!--                <th>Quantity</th>-->
<!--              </tr>-->
<!--              </thead>-->
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
            <Flexbox>
              <FlexboxItem class="FlexboxItem">132</FlexboxItem>
            </Flexbox>
            <Flexbox>
              <FlexboxItem class="FlexboxItem">专区6折限时秒杀【看直播再领无门槛劵最高再减50元】</FlexboxItem>
            </Flexbox>
            <Flexbox>
              <FlexboxItem class="FlexboxItem">132</FlexboxItem>
            </Flexbox>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import stickySlot from '../../components/StickySlot'
  import { Tab, TabItem, XTable, Flexbox, FlexboxItem  } from 'vux'
  export default {
        name: "scroll2",
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
              // slidesPerView: 4,
              // slidesPerColumn: 1,
              // spaceBetween: 5,
              // autoplay: {
              //   delay: 3000,
              //   disableOnInteraction: false // 手动切换之后继续自动轮播
              // },
              loop: false
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
            ]
          }
      },
    components: {
      stickySlot,
      Tab,
      TabItem,
      XTable,
      Flexbox,
      FlexboxItem
    },
    mounted() {

    }

  }
</script>

<style scoped>
  /*
   通过设置top的值，控制固定的位置，0是顶部，值为number(px)
 */
  .stickyTop {
    margin-top: 5px;
    top: 0;
    z-index: 10;
  }
  .stickyTop1 {
    margin-top: 5px;
    top: 44px;
    z-index: 10;
  }
  .tab {
    margin-top: 11px;
  }
  .swiper-css {
    height: 94px;
    background-color: white;
    position: relative;
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
    margin: 0 auto;
    width: 90%;
    height: 180px;
    border-radius: 1em;
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
  }
  .con_active {
    height: 35px;
    background-color: #ff5001;
  }
  .National_active {
    border: 1px solid #080202;
    height: 75px;
    background-color: white;
    border-radius: 0.8em;
    margin-top: 10px;
  }
  .snbl {
    border: 1px solid #080202;
    width: 92%;
    /*height: 200px;*/
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
</style>
