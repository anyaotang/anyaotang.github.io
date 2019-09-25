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
                  <h5>{{item.title}}</h5>
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
          <ul>
            <li v-for="(item, index) in footerData" :key="index">{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
  import stickySlot from '../../components/StickySlot'
  import { Tab, TabItem } from 'vux'
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
            }
          }
      },
    components: {
      stickySlot,
      Tab,
      TabItem
    },
    created() {
      // // 使用假数据撑满屏幕
      // for (let i = 0; i <= 5; i++) {
      //   this.headerData.push('第' + i + '条数据')
      // };
      for (let i = 20; i < 80; i++) {
        this.footerData.push('第' + i + '条数据')
      }
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
    height: 100px;
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
    height: 82px;
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
    height: 48%;
    margin: auto;
    padding-top: 10px;
    border-radius: 0.5em;
    background-color: #eb2b20;
    letter-spacing: 0.1em;
  }
  p {
    font-size: 10px;
  }
  .activity {
    position: relative;
    top: 58px;
    font-size: 11px;
    padding-top: 2px;
    color: #eb2b20;
  }
  .con {
    background-color: #ffdf18;
  }
</style>
