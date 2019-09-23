<template>
    <div>
      <ul>
        <li v-for="(item, index) in headerData" :key="index">{{ item }}</li>
      </ul>
      <!--
        这里需要给组件添加一个class，用于控制固定的位置，看css注释部分
       -->
      <sticky-slot class="stickyTop">
        <div class="tab">
          假装这是一个tab栏，当页面滚动的时候要固定在顶部
        </div>
      </sticky-slot>
      <ul>
        <li v-for="(item, index) in footerData" :key="index">{{ item }}</li>
      </ul>
    </div>
</template>

<script>
  import stickySlot from '../../components/stickySlot'
  export default {
        name: "scroll2",
      data () {
          return {
            headerData: [],
            footerData: []
          }
      },
    components: {
      stickySlot
    },
    created() {
      // 使用假数据撑满屏幕
      for (let i = 0; i <= 5; i++) {
        this.headerData.push('第' + i + '条数据')
      };
      for (let i = 20; i < 80; i++) {
        this.footerData.push('第' + i + '条数据')
      }
    }

  }
</script>

<style scoped>
  /*
   通过设置top的值，控制固定的位置，0是顶部，值为number(px)
 */
  .stickyTop {
    top: 0;
    z-index: 10;
  }
  .tab {
    height: 30px;
    line-height: 30px;
    background-color: greenyellow;
  }
</style>
