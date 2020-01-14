<template>
    <div class="con">
      <div class="top">
        <img src="../../assets/images/vip.png" alt="">
        <div class="top_bottom"></div>
        <div class="btn">
          <a href="#" @click="actives">立即加入会员</a>
        </div>
      </div>
      <div class="active">
        <h2>加会员&nbsp;&nbsp;攒积分&nbsp;&nbsp;兑好礼</h2>
        <div class="active_con" v-for="(item,index) in active" :key="index">
          <flexbox>
            <flexbox-item :span="2/7">
              <div class="juan">
                ￥{{item.price}}
              </div>
            </flexbox-item>
            <flexbox-item>
              <p class="des" v-html="item.des"></p>
              <p class="integral">
                {{item.integral}}积分
              </p>
              <p class="Surplus">剩余{{item.number}}</p>
              <p class="btns">
                <a href="#" @click="actives">立即入会</a>
              </p>
            </flexbox-item>
          </flexbox>
        </div>
      </div>
      <div class="server">
        <h2>特权服务</h2>
        <ul>
          <li><i class="iconfont icon-icon-test1"></i></li>
          <li>专属客服</li>
          <li>咨询接待优先</li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Member",
        data () {
            return {
                active:[
                    {
                        price: '5',
                        des: '5元优惠券&nbsp;满6元使用&nbsp;全店通用',
                        integral: '500',
                        number: '18304'
                    },  {
                        price: '15',
                        des: '15元优惠券&nbsp;满238元使用&nbsp;全店通用',
                        integral: '600',
                        number: '4707'
                    },  {
                        price: '35',
                        des: '35元优惠券&nbsp;满300元使用&nbsp;全店通用',
                        integral: '1000',
                        number: '4572'
                    },  {
                        price: '50',
                        des: '50元优惠券&nbsp;满800元使用&nbsp;全店通用',
                        integral: '1500',
                        number: '1204'
                    },
                ]
            }
        },
        methods: {
            actives () {
                const _this = this
                _this.$vux.toast.show({
                    text: '抱歉，暂无此功能，请耐心等待，谢谢',
                    type: 'cancel'
                })
            }
        }
    }
</script>

<style scoped>
  .con {
    padding-top: 30px;
    background: #f7f5f5;
    padding-bottom: 50px;
  }
  .top {
    background: #fff;
    height: 150px;
    border-radius: 1.2em;
    position: relative;
    top: 20px;
  }
  .top_bottom {
    background: #fff;
    height: 80px;
    position: absolute;
    bottom: 0;
    width: 100%;
    border-bottom-left-radius: 1.2em;
    border-bottom-right-radius: 1.2em;
  }
  .top img {
    background-repeat: no-repeat;
    background-size: cover;
    width: 95%;
    height: 180px;
    padding-left: 10px;
    border-radius: 2em;
    position: relative;
    bottom:30px;
  }
  .top .btn {
    background-image: linear-gradient(to right , #ffc018, #ff2916);
    position: absolute;
    bottom: -15px;
    border-radius: 2em;
    padding: 5px 90px;
    left: 35px;
  }
  .top .btn a {
    color: #fff;
    font-size: 18px;
    text-align: center;
  }
  .active,.server {
    clear: both;
    background: #fff;
    border-radius:1em;
    color: #000;
    margin-top: 60px;
    text-align: center;
    padding-bottom: 20px;
  }
  .active h2 {
    padding: 15px 0;
  }
  .active .active_con {
    background: #f0eded;
    width: 92%;
    margin: 10px auto;
    padding: 8px;
  }
  .active .active_con .juan {
    background: #ffbf5a;
    width: 50%;
    margin: 15px auto;

  /*  */
    font-size: 25px;
    padding: 10px 15px 10px 25px;
    color: red;
  }
  .des {
    font-size: 14px;
    color: #918f8f;
    padding-right: 5px;
  }
  .integral {
    font-size: 13px;
    padding-top: 4px;
    color: red;
  }
  .Surplus {
    padding-top: 6px;
    color: #918f8f;
  }
  .Surplus,.btns {
    display: inline;
    float: left;
    margin-top: 16px;
  }
  .btns {
    float: right;
    margin-right: 5px;
    background-image: linear-gradient(to right , #ffc018, #ff2916);
    border-radius: 3em;
    padding: 4px 5px;
    width: 35%;
    text-align: center;
  }
  .btns a {
    color: #fff;
    font-size: 13px;
  }
  .server {
    margin-top: 15px;
  }
  .server h2 {
    padding: 15px 0;
  }
  .server ul {
    padding-top: 15px;
    display:flex;
    flex-wrap: wrap;
  }
  .server li {
    clear: both;
    font-size: 16px;
  }
  .server li:first-child {
    padding-left: 10px;
  }
  .server li:first-child i {
    font-size: 30px;
    color: #9a6e3a;
  }
  .server li:nth-child(2) {
    padding-left: 20px;
  }
  .server li:last-child {
    padding-left: 120px;
    font-size: 14px;
    color: #5b5b5b;
  }
</style>
