<template>
    <div class="banner">
      <HeadInfo/>
      <Scroll/>
    </div>
</template>

<script>
    import Scroll from "./scroll";
    import HeadInfo from '../../components/HeadInfo'
    import { Tab, TabItem } from 'vux'
    export default {
      name: "Index",
      components: {
        Scroll,
        HeadInfo,
        Tab,
        TabItem
      },
      data () {
        return {

        }
      }
    }
</script>

<style scoped>
  .banner {
    height: 138px;
    background-image: url("../../assets/banner.jpg");
    background-repeat: no-repeat;
    background-size: cover;
  }

</style>
