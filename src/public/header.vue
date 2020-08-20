<template>
  <div class="container-fluid">
    <!-- <div class="row">
      <div class="col-12 pt-2 pb-2 d-none d-md-block">
        <h4 class="slogan">宝之若饴·氢力倾心</h4>
      </div>
    </div> -->
    <div class="row">
      <div class="col-12">
        <nav class="navbar navbar-expand-md navbar-light">
          <a class="pl-1 pl-md-3 navbar-brand" href="/"><img src="../assets/logo.png" alt="Logo" class="logo img-responsive"><span class="logo-text d-none d-md-inline">宝之若饴·氢力倾心</span></a>
          <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#collapsibleNavbar" aria-expanded="false">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="navbar-collapse justify-content-end collapse" id="collapsibleNavbar">
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link class="nav-link" to="/index">首页</router-link>
              </li>
              <!-- <li class="nav-item">
                <router-link class="nav-link" to="/product">产品中心</router-link>
              </li> -->
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                  产品中心
                </a>
                <div class="dropdown-menu">
                  <router-link class="dropdown-item" to="/health">保健</router-link>
                  <router-link class="dropdown-item" to="/cosmet">美容</router-link>
                </div>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/member">会籍说明</router-link>
              </li>
              <!-- <li class="nav-item">
                <router-link class="nav-link" to="/health">保健</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/cosmet">美容</router-link>
              </li> -->
              <li class="nav-item">
                <router-link class="nav-link disabled" to="/news">品牌动态</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/about">关于我们</router-link>
              </li>
              <!-- <li class="nav-item user" v-show="barShow">
                <router-link class="nav-link" to="/login">登录</router-link>
              </li>
              <li class="nav-item user" v-show="barShow">
                <router-link class="nav-link" to="/register">注册</router-link>
              </li> -->
              <!-- <li class="nav-item user-center">
                <router-link class="nav-link" to="/mycenter">个人中心</router-link>
              </li> -->
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbardrop2" data-toggle="dropdown">
                  个人中心
                </a>
                <div class="dropdown-menu">
                  <router-link class="dropdown-item" to="/login" v-show="barShow">登录</router-link>
                  <router-link class="dropdown-item" to="/register" v-show="barShow">注册</router-link>
                  <router-link class="dropdown-item" to="/mycenter" v-show="!barShow">{{ location ? location.nickname : "我的" }}</router-link>
                  <button class="dropdown-item" v-show="!barShow" @click="logout">退出</button>
                  <!-- <a class="dropdown-item" href="#">保健</a>
                  <a class="dropdown-item" href="#">美容</a> -->
                </div>
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
        location: JSON.parse(localStorage.getItem("userInfo")) || null,
        barShow: JSON.parse(localStorage.getItem("userInfo")) ? false : true
      }
    },
    methods: {
      logout () {
        localStorage.clear()
        if (!localStorage.getItem("userInfo")) {
          this.barShow = true
          this.$message({
            message: "成功退出登录",
            type: 'success',
            center: true
          })
        }
      }
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
  .logo-text {
    line-height: 64px;
    color: #64ad34;
    font-size: 1rem;
  }
  .logo{
    height: 64px;
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
        color: #64ad34 !important;
        /* background-color: #000; */
        /* border-bottom: 1px solid #13dc97; */
      }
      .dropdown-menu > .router-link-active{
        color: #64ad34 !important;
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
      .dropdown-menu > .router-link-active{
        color: #64ad34 !important;
      }
      .nav-item > .router-link-active{
        color: #64ad34 !important;
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
