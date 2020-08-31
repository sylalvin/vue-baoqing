<template>
    <div class="col-md-8 col-12 text-left">
        <div class="card">
            <div class="card-header">产品详情</div>
            <div class="card-body">
                <div class="row">
                  <div class="col-12">
                    <img class="rounded pro-img" :src="this.$GLOBAL.staticUrl + '/index.jpg'" alt="">
                  </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'pr-detail',
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
.pro-img {
  width: 100%;
}
</style>
