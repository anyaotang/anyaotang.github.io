<template>
    <div>
      <tab>
        <tab-item v-for="(item,index) in tabItems" :key="index">{{item.status}}</tab-item>
      </tab>
    </div>
</template>

<script>
  import { Tab, TabItem } from 'vux'
  export default {
    name: "HomeContent",
    data () {
      return {
        tabItems: [
          {status: "首页", id: 0},
          {status: "宝贝", id: 1},
          {status: "造物节", id: 2},
          {status: "新品", id: 3},
          {status: "实拍", id: 4},
          {status: "买家秀", id: 5},
          {status: "会员", id: 6}
        ]
      }
    },
    components: {
      Tab,
      TabItem
    }
  }
</script>

<style scoped>

</style>
