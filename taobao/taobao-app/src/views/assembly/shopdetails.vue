<template>
  <div>
    商品详情
  </div>
</template>

<script>
    export default {
        name: "shopdetails",
        data () {
            return {
                id: '',
            }
        },
        created() {
            var newsID=this.$route.query.id;
            alert(newsID)
        }
    }
</script>

<style scoped>

</style>
