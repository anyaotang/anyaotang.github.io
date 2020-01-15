<template>
    <div class="con">
      <div class="top">
        <h2>晒出你的“新年穿搭”</h2>
        <p>217人正在参与></p>
      </div>
      <div class="zhengji">征集</div>
    </div>
</template>

<script>
    export default {
        name: "BuyShop"
    }
</script>

<style scoped>
  .con {
    background: #eeeeee;
    padding: 15px 0 20px 0;
  /*  */
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
  }
  .top h2 {
    padding: 50px 0 0 10px;
    font-size: 16px;
  }
  .top p {
    padding: 18px 0 0 10px;
  }
</style>
