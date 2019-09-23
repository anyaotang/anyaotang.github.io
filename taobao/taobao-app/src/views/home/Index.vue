<template>
    <div class="banner">
<!--      <Scroll1/>-->
<!--      <Scroll2/>-->
      <HeadInfo/>
    </div>
</template>

<script>
    import Scroll1 from "./scroll1";
    import Scroll2 from "./scroll2";
    import HeadInfo from '../../components/headInfo'
    export default {
      name: "Index",
      components: { Scroll2, Scroll1, HeadInfo}
    }
</script>

<style scoped>
  .banner {
    height: 138px;
    background-image: url("../../assets/banner.jpg");
    background-repeat: no-repeat;
    background-size: contain;
  }
</style>
