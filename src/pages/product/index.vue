<template>
  <div class="main mt-3 pb-5">
    <div class="container">
      <div class="row">
        <div class="col-12 pb-3 animate__animated animate__bounceInRight">
          <img class="product-icon" src="../../assets/health-icon.png" alt=""><span class="pl-2 product-text">保健</span>
        </div>
        <div class="col-12">
          <img class="rounded" src="../../assets/health.jpg" alt="">
        </div>
      </div>
      <div class="row">
        <div class="col-12 pb-3 animate__animated animate__bounceInRight">
          <img class="product-icon" src="../../assets/cosmet-icon.png" alt=""><span class="pl-2 product-text">美容</span>
        </div>
        <div class="col-12">
          <img class="rounded" src="../../assets/cosmet.jpg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pr-index',
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  font-weight: normal;
}
.product-icon {
  height: 32px;
}
.product-text {
  color: #2BA234;
  font-style: italic;
  font-size: 1.2rem;
}
</style>
