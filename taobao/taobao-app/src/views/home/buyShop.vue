<template>
    <div class="con">
      <div class="top">
        <h2>晒出你的“新年穿搭”</h2>
        <p>217人正在参与></p>
      </div>
      <div class="zhengji">征集</div>
      <div class="shoplist">
        <ul>
          <li v-for="(item,index) in shoplist" :key="index">
            <img :src="item.src" alt="">
<!--            <div class="label">-->
<!--              <i class="iconfont icon-xingzhuang" style="font-size: 13px;padding-right: 3px;"></i>-->
<!--              {{item.content}}-->
<!--            </div>-->
            <p>{{item.des}}</p>
            <div class=container>
              <div class=left>
                <div class="left_img">
                  <img :src="item.headimg" alt="">
                </div>
              </div>
              <div class=middle>{{item.name}}</div>
              <div class=right>
                <i class="iconfont icon-dianzan1" style="color: #BBB9B9;padding-right: 2px"></i>
                {{item.number}}
              </div>
            </div>

          </li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
        name: "BuyShop",
        data () {
            return {
                shoplist: [
                    {
                        id:'1',
                        src: require("../../assets/images/1.12.jpg"),
                        des: '樱桃小丸子联名原创蜗牛工作室大衣中长款英伦',
                        headimg: require("../../assets/touxiang.jpg"),
                        name: '匿名用户',
                        number: '222',
                        content: '精选商品'
                    },  {
                        id: '2',
                        src: require('../../assets/images/1.11.jpg'),
                        des: '第一个描述桃小丸子联名原创蜗牛工作室大衣中',
                        headimg: require("../../assets/touxiang.jpg"),
                        name: '冲突的花都',
                        number: '222',
                    },  {
                        id: '3',
                        src: require("../../assets/images/1275265817.jpg"),
                        des: '第一个描述桃小丸子联名原创蜗牛工作室大衣中',
                        headimg: require("../../assets/touxiang.jpg"),
                        name: '匿名用户',
                        number: '222',
                    },  {
                        id: '4',
                        src: require('../../assets/images/1.12.jpg'),
                        des: '桃小丸子联名原创蜗牛工作室大衣中',
                        headimg: require("../../assets/touxiang.jpg"),
                        name: '冲突的花都',
                        number: '222',
                    },  {
                        id: '5',
                        src: require("../../assets/images/510690848.jpg"),
                        des: '第一个描述',
                        headimg: require("../../assets/touxiang.jpg"),
                        name: '冲突的花都',
                        number: '222',
                    },  {
                        id: '6',
                        src: require('../../assets/images/1275265817.jpg'),
                        des: '第一个描述',
                        headimg: require("../../assets/touxiang.jpg"),
                        name: '冲突的花都',
                        number: '222',
                    },  {
                        id: '7',
                        src: require("../../assets/images/510690848.jpg"),
                        des: '第一个描桃小丸子联名原创蜗牛工作室大衣中述',
                        headimg: require("../../assets/touxiang.jpg"),
                        name: '冲突的花都',
                        number: '222',
                    },  {
                        id: '8',
                        src: require('../../assets/images/1275265817.jpg'),
                        des: '桃小丸子联名原创蜗牛工作设备',
                        headimg: require("../../assets/touxiang.jpg"),
                        name: '冲突的花都',
                        number: '222',
                    },  {
                        id: '9',
                        src: require("../../assets/images/510690848.jpg"),
                        des: '桃小丸子联名原创蜗牛工作室大衣中',
                        headimg: require("../../assets/touxiang.jpg"),
                        name: '冲突的花都',
                        number: '222',
                    }
                ]
            }
        }
    }
</script>

<style scoped>
  .con {
    background: #eeeeee;
    padding: 15px 0 20px 0;
  /*  */
    color: #000;
  }
  .top {
    width: 92%;
    margin: 0 auto;
    border-radius: 0.5em;
    background: red;
    height: 120px;
    position: absolute;
    left: 0;
    right: 0;
    color: #fff;
  }
  .zhengji {
    background: #ffca22;
    width: 10%;
    text-align: center;
    padding: 2px 5px;
    position: relative;
    left: 25px;
    top: 20px;
    border-radius: 1em;
    color: #fff;
  }
  .top h2 {
    padding: 50px 0 0 10px;
    font-size: 16px;
  }
  .top p {
    padding: 18px 0 0 10px;
  }
  .shoplist {
    margin-top: 115px;
  }
  .shoplist ul {
    display: flex;
    flex-wrap: wrap;
  }
  .shoplist ul li {
    margin-bottom: 10px;
    background: #fff;
    border-radius: 0.3em;
    width: 45%;
    height: 100%;
    line-height: 1.5em;
    margin-left: 12px;
  }
  .label {
    background-image: linear-gradient(to right , #ffc018, #ff2916);
    border-radius: 0.2em;
    width: 20%;
    text-align: center;
    color: #fff;
    font-size: 11px;
    position: absolute;
    bottom: 102px;
    left: 20px;
  }
  .shoplist ul li img {
    width: 100%;
    background-size: cover;
    border-radius: 0.3em 0.3em 0 0;
    background-repeat: no-repeat;
    position: relative;
  }
  .shoplist ul li p {
    padding: 10px 15px 5px 10px;
  }
  .shoplist .container{
    display: flex;
  }
  .left{
    display: flex;
    padding: 10px 0 10px 10px;
  }
  .left .left_img {
    width: 25px;
    height: 25px;
    background: url("../../assets/touxiang.jpg");
    border-radius: 50%;
  }
  .left .left_img img {
    border-radius: 50%;
    width: 25px;
    height: 25px;
  }
  .middle{
    display: flex;
    padding: 12px 0 0 10px;
  }
  .right{
    flex: 1;
    text-align: right;
    padding: 12px 10px 0 0;
  }

</style>
