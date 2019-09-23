<template>
    <div>
      <Scroll1/>
      <Scroll2/>
    </div>
</template>

<script>
    import Scroll1 from "./scroll1";
    import Scroll2 from "./scroll2";
    export default {
      name: "Index",
      components: {Scroll2, Scroll1}
    }
</script>

<style scoped>

</style>
