<template>
  <div class="main">
      <div class="container mt-3 mb-5">
          <div class="card mt-md-5 mt-3">
            <div class="card-header">
                <h3>{{ title }}</h3>
            </div>
            <div class="card-body">
                <p>您好 <b>{{ userInfo ? userInfo.nickname : "游客" }}</b>，欢迎访问宝氢官网！</p>
                {{ time }} S后将跳至网站首页...
            </div> 
            <div class="card-footer"><router-link to="/">手动跳转</router-link></div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'l-index',
  data () {
    return {
      s: "",
      title: '成功',
      time: 3,
      userInfo: {
        
      }
    }
  },
  methods: {
      success () {
          this.title = this.$route.query.checkText
          if(this.title == "登录成功") {
            this.userInfo = JSON.parse(localStorage.getItem("userInfo"))
          } else {
            localStorage.clear()
          }
          
          this.s = setInterval(() => {
              if(this.time > 0) {
                  this.time--
              } else {
                  clearInterval(this.s)
                  this.s = ""
                  this.time = 3
                  this.$router.push({
                      path: '/'
                  })
              }
          }, 1000);
      }
  },
  mounted () {
    //   console.log(this.$route.query.checkText)
      this.success()
  },
  destroyed () {
    if(this.s) {
      clearInterval(this.s)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  font-weight: normal;
}
.card-footer a {
    color: #999 !important;
    background-color: rgba(0,0,0,.03) !important;
}
.card-footer a:hover {
    color: #13dc97 !important;
}
</style>
