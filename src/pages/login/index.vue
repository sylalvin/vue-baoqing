<template>
  <div class="main">
      <div class="container mt-3 mb-5">
          <div class="card mt-md-5 mt-3">
            <div class="card-header">
                <h3>登录</h3>
            </div>
            <div class="card-body text-left">
                <form>
                    <div class="form-group">
                    <label for="email">账号:</label>
                    <input type="email" class="form-control" id="email" placeholder="Enter username">
                    </div>
                    <div class="form-group">
                    <label for="pwd">密码:</label>
                    <input type="password" class="form-control" id="pwd" placeholder="Enter password">
                    </div>
                    <button type="submit" class="btn btn-primary" @click="submit">立即登录</button>
                </form>
            </div> 
            <div class="card-footer"><router-link to="/forget">忘记密码</router-link>&nbsp;&nbsp;&nbsp;&nbsp;<router-link to="/register">没有账号？前往注册</router-link></div>
        </div>

        <div class="row mt-md-5 mt-3">
            <div class="col-12">——————&nbsp;&nbsp;第三方登录&nbsp;&nbsp;——————</div>
            <img class="weixin" src="../../assets/weixin.png" alt="微信登录">
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'l-index',
  data () {
    return {
      
    }
  },
  methods: {
      submit () {
          this.$router.push({
              path: '/success',
              query: {
                  checkText: '登录成功'
              }
          })
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
    color: #999;
}
.card-footer a:hover {
    color: #13dc97;
}
.weixin {
    margin: 1rem auto;
}
</style>
