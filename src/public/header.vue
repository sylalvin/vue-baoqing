<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 pt-2 pb-2 d-none d-md-block">
        <h4 class="slogan">宝之若饴·氢力倾心</h4>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <nav class="navbar navbar-expand-md navbar-light">
          <a class="navbar-brand" href="/"><img src="../assets/logo.png" alt="Logo" class="logo img-responsive"></a>
          <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#collapsibleNavbar" aria-expanded="false">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="navbar-collapse justify-content-end collapse" id="collapsibleNavbar">
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link class="nav-link" to="/index">首页</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/member">会籍说明</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/health">保健</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/cosmet">美容</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link disabled" to="/news">品牌动态</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/about">关于我们</router-link>
              </li>
              <li class="nav-item user" v-show="barShow">
                <router-link class="nav-link" to="/login">登录</router-link>
              </li>
              <li class="nav-item user" v-show="barShow">
                <router-link class="nav-link" to="/register">注册</router-link>
              </li>
              <li class="nav-item user-center">
                <router-link class="nav-link" to="/mycenter">个人中心</router-link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'h2h-header',
    data () {
      return {
        show: true,
        location: JSON.parse(localStorage.getItem("userInfo")) || null,
        barShow: JSON.parse(localStorage.getItem("userInfo")) ? false : true
      }
    },
    methods: {

    },
    watch: {
      $route(to, from) {
        let userInfo = localStorage.getItem("userInfo")
        this.location = JSON.parse(userInfo)
        if(this.location) {
          this.barShow = false
        } else {
          this.barShow = true
        }
      }
    }
  }
</script>

<style>
  .header {
    box-shadow: 0px 0px 5px 0px #ddd;
  }
  .slogan {
    font-family: cursive;
    font-style: italic;
    color: #2BA234;
  }
  .logo{
    height: 32px;
  }
  li > a{
    color: #999 !important;
  }
  .navbar-brand{
    padding: 0;
  }
  @media (min-width: 768px){
      .navbar {
          padding-top: 15px;
          padding-bottom: 15px;
      }
      .navbar-expand-md .navbar-nav .nav-link {
          padding-right: 1.5rem !important;
          padding-left: 1.5rem !important;
      }
      .nav-item > .router-link-active{
        color: #000 !important;
        /* background-color: #000; */
        /* border-bottom: 1px solid #13dc97; */
      }
      /* .user .nav-link {
        background-color: paleturquoise;
        color: #000 !important;
      }
      .user-center .nav-link {
        background-color: paleturquoise;
        color: #000 !important;
      } */
  }
  @media (max-width: 768px){
      .navbar {
          padding-top: 15px;
          padding-bottom: 15px;
      }
      #collapsibleNavbar ul{
        margin-top: 15px;
      }
      .nav-link {
        text-align: left;
      }
      .nav-item > .router-link-active{
        color: #000 !important;
      }
      /* .user .nav-link {
        color: #fff !important;
      }
      .user-center .nav-link {
        color: #fff !important;
      } */
  }
  * {
      font-family: 'Lato';
  }
</style>
