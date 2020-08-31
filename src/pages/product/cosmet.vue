<template>
    <div class="col-md-8 col-12 text-left">
        <div class="card">
            <div class="card-header">美容</div>
            <div class="card-body text-center">
                <div class="row">
                  <div class="col-12 pb-3 animate__animated animate__bounceInRight">
                    <img class="product-icon" :src="this.$GLOBAL.staticUrl + '/cosmet-icon.png'" alt=""><span class="pl-2 product-text">美容</span>
                  </div>
                  <div class="col-12">
                    <img class="rounded pro-img" :src="this.$GLOBAL.staticUrl + '/cosmet.jpg'" alt="">
                  </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'pr-cosmet',
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
.product-icon {
  height: 32px;
}
.product-text {
  color: #2BA234;
  font-style: italic;
  font-size: 1.2rem;
}
.pro-img {
  width: 100%;
}
</style>
