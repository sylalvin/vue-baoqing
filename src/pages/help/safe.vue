<template>
        <div class="col-md-8 col-12 text-left">
            <div class="card">
                <div class="card-header">氢宝瓶安全防范</div>
                <div class="card-body">
                    <img :src="this.$GLOBAL.staticUrl + '/safe.jpg'" alt="">
                </div>
            </div>
        </div>
</template>

<script>
export default {
  name: 'h-safe',
  data () {
    return {
      
    }
  },
  methods: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card-body > img {
  width: 100%;
}
</style>
