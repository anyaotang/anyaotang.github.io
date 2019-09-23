<template>
  <div>
    <Flexbox>
      <FlexboxItem>
        sss
      </FlexboxItem>
      <FlexboxItem>
        <button>关注</button>
      </FlexboxItem>
    </Flexbox>
  </div>
</template>

<script>
import { Flexbox, FlexboxItem } from 'vux'
import ButtonTab from "vux/src/components/button-tab/button-tab";
  export default {
    name: "headInfo",
    data () {
        return {}
    },
    components: {
      ButtonTab,
      Flexbox,
      FlexboxItem
    }
  }
</script>

<style scoped>

</style>
