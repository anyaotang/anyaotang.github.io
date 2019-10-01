<template>
  <!--底部滑入组件-->
  <div class="page-actionsheet">
    <div class="page-actionsheet-wrapper">
      <mt-button @click.native="sheetVisible = true" size="large">点击上拉 action sheet</mt-button>
    </div>
    <mt-actionsheet :actions="actions" v-model="sheetVisible"></mt-actionsheet>

  </div>
</template>

<script>
    export default {
        name: "ActionSheet",
      data () {
          return {
            sheetVisible: false,
            actions: [],
          }
      },
      methods: {
        openAlbum() {
          console.log('取消关注');
        },
        takePhoto() {
          console.log('容朕想想');
        },
      },
      mounted() {
        this.actions = [{
          name: '取消关注',
          method: this.takePhoto
        }, {
          name: '容朕想想',
          method: this.openAlbum
        }];
      }
    }
</script>

<style scoped>

</style>
