<template>
  <div class="container-fluid bg-dark">
    <div class="row">
      <div class="col-12 pt-2 pb-2 d-block d-md-none">
        <h4 class="slogan">宝之若饴·氢力倾心</h4>
      </div>
    </div>
    <div class="row">
      <div class="col-12 pt-2 pb-2">
        <a :href= "this.$GLOBAL.baseUrl">首页</a>&nbsp;
        <a :href= "this.$GLOBAL.baseUrl + '/member'">会籍说明</a>&nbsp;
        <a :href= "this.$GLOBAL.baseUrl + '/product'">产品中心</a>&nbsp;
        <a :href= "this.$GLOBAL.baseUrl + '/news'">实时动态</a>&nbsp;
        <!-- <a href= "#">实时动态</a>&nbsp; -->
        <a :href= "this.$GLOBAL.baseUrl + '/about'">关于我们</a>&nbsp;
        <a :href= "this.$GLOBAL.baseUrl + '/service'">服务条款</a>&nbsp;
        <a :href= "this.$GLOBAL.baseUrl + '/help'">帮助中心</a>
      </div>
    </div>
    <div class="row">
      <div class="col-12 pt-2 pb-2">
        ©2019-{{ year }} &nbsp; <a href="http://www.beian.miit.gov.cn/" target="_blank">沪ICP备20023922号</a>
      </div>
    </div>
    <div class="row wx_pic">
      <div class="col-4 col-md-3 col-lg-2 pt-2 pb-2 offset-2 offset-md-3 offset-lg-4">
        <img :src="this.$GLOBAL.staticUrl + '/wx.jpg'" alt="扫码关注公众号">
      </div>
      <div class="col-4 col-md-3 col-lg-2 pt-2 pb-2" ref="minipro">
        <img :src="this.$GLOBAL.staticUrl + '/xcx.jpg'" alt="扫码使用小程序">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'h2h-footer',
    data () {
      return {
        msg: 'Welcome to H2H.',
        year: new Date().getFullYear()
      }
    }
  }
</script>

<style scoped>
  .footer{
    border-top: #1b1846 2px solid;
    /* position: fixed;
    bottom: 0; */
    color: #fff;
  }
  .slogan {
    font-family: cursive;
    font-style: italic;
    color: #2BA234;
  }
  a {
    color: #fff;
  }
  .wx_pic > div > img {
    width: 100%;
    max-width: 200px;
  }
</style>
