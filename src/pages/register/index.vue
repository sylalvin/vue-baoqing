<template>
  <div class="main">
      <div class="container mt-3 mb-5">
          <div class="card mt-md-5 mt-3">
            <div class="card-header">
                <h3>注册</h3>
            </div>
            <div class="card-body text-left">
                <form>
                    <div class="form-group">
                        <label for="username">账号:</label>
                        <input type="number" class="form-control" id="username" placeholder="请输入手机号" :class="{borderRed: checkname == 'username'}" v-model="username">
                    </div>
                    <div class="form-group">
                        <label for="password">密码:</label>
                        <input type="password" class="form-control" id="password" placeholder="请输入密码" :class="{borderRed: checkname == 'password'}" v-model="password">
                    </div>
                    <div class="form-group">
                        <label for="password_again">确认密码:</label>
                        <input type="password" class="form-control" id="password_again" placeholder="请再次输入密码" :class="{borderRed: checkname == 'password_again'}" v-model="password_again">
                    </div>
                    <div class="form-group">
                        <label for="check_number">验证码:</label>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" id="check_number" placeholder="请输入验证码" :class="{borderRed: checkname == 'checkNumber'}" v-model="checkNumber">
                            <div class="input-group-append">
                                <span class="input-group-text" @click="changeText">{{time + checkText}}</span>
                            </div>
                        </div>
                    </div>
                    <!-- <div class="form-group">
                        <label for="truename">姓名:</label>
                        <input type="text" class="form-control" id="truename" placeholder="请输入真实姓名" :class="{borderRed: checkname == 'truename'}" v-model="truename">
                    </div> -->
                    <button type="submit" class="btn btn-primary" @click.prevent="submit">立即注册</button>
                </form>
            </div> 
            <div class="card-footer"><router-link to="/login">已有账号？前往登录</router-link></div>
        </div>

        <div class="row mt-md-5 mt-3">
            <!-- <div class="col-12">——————&nbsp;&nbsp;第三方注册&nbsp;&nbsp;——————</div>
            <img class="weixin" :src="this.$GLOBAL.staticUrl + '/weixin.png'" alt="微信注册"> -->
            <div class="col-12 service">注册表示您已阅读和同意 <span data-toggle="modal" data-target="#service">服务条款</span></div>
        </div>
      </div>

      <!-- 服务条款模态框 -->
      <div class="modal fade" id="service">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-body">
                <Service></Service>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">关闭</button>
            </div>
          </div>
        </div>
      </div>


  </div>
</template>

<script>
import Service from '../../public/service.vue'
export default {
  name: 'r-index',
  data () {
    return {
      s: "",
      checkText: "获取验证码",
      time: '',
      username: "",
      password: "",
      password_again: "",
      checkNumber: "",
    //   truename: "",
      checkname: ""
    }
  },
  components: {
      Service
  },
  methods: {
      changeText () {
          var that = this
          if(this.s) {
              this.$message({
                  message: "请勿频繁点击获取",
                  type: "warning"
              })
              return
          }
          if(!this.$checkNull(this.username)) {
              this.$message.error("账号不能为空");
              this.checkname = "username"
              return;
          } else if(!(/^1[3456789]\d{9}$/.test(this.username))) {
              this.$message.error("账号格式不正确，应为正确的手机号");
              this.checkname = "username"
              return;
          }
          this.$http.post(that.$GLOBAL.apiUrl + '/sms/send',{
            phone: that.username,
            action: 1
          }).then(function(res) {
            if (res.body.code == 0) {
                that.$message({
                    message: "验证码已发送至您手机，请注意查收",
                    type: "success"
                })
                that.checkNumber = ""
                that.checkText = "S 后重新获取"
                that.time = 59
                that.s = setInterval(() => {
                    if(that.time > 0) {
                        that.time--
                    } else {
                        clearInterval(that.s)
                        that.s = ""
                        that.checkText = "获取验证码"
                        that.time = ''
                    }
                }, 1000);
            } else {
                that.$message({
                    message: res.body.msg,
                    type: "warning"
                })
            }
          }, function(error) {
            that.$message({
              message: "网络请求失败",
              type: "warning"
            })
          })
      },
      submit () {
          var that = this
          if(!this.$checkNull(this.username)) {
              this.$message.error("账号不能为空");
              this.checkname = "username"
              return;
          } else if(!(/^1[3456789]\d{9}$/.test(this.username))) {
              this.$message.error("账号格式不正确，应为正确的手机号");
              this.checkname = "username"
              return;
          }
          if(!this.$checkNull(this.password)) {
              this.$message.error("密码不能为空");
              this.checkname = "password"
              return;
          } else if(!(/^.{6,16}$/.test(this.password))) {
              this.$message.error("密码至少6位，至多16位");
              this.checkname = "password"
              return;
          }
          if(!this.$checkNull(this.password_again)) {
              this.$message.error("重复密码不能为空");
              this.checkname = "password_again"
              return;
          } else if(!(/^.{6,16}$/.test(this.password_again))) {
              this.$message.error("重复密码至少6位，至多16位");
              this.checkname = "password_again"
              return;
          }
          if(this.password != this.password_again) {
              this.$message.error("密码和重复密码不一致");
              return;
          }
          if(!this.$checkNull(this.checkNumber)) {
              this.$message.error("验证码不能为空");
              this.checkname = "checkNumber"
              return;
          }
        //   if(!this.$checkNull(this.truename)) {
        //       this.$message.error("真实姓名不能为空");
        //       this.checkname = "truename"
        //       return;
        //   }
          this.checkname = ""
          this.$http.post(that.$GLOBAL.apiUrl + '/user/Register',{
            accounts: that.username,
            pwd: that.password,
            verify: that.checkNumber
          }).then(
              function(res) {
                  if(res.body.code == 0) {
                      localStorage.setItem("username", that.username)
                      localStorage.setItem("password", that.password)
                      that.$router.push({
                        path: '/success',
                        query: {
                            checkText: '注册成功'
                        }
                      })
                  } else {
                      that.$message({
                        message: res.body.msg,
                        type: "warning"
                      })
                  }
              },
              function(error) {
                  that.$message({
                    message: "网络请求失败",
                    type: "warning"
                  })
              }
          )
          
      }
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
    color: #999;
}
.card-footer a:hover {
    color: #13dc97;
}
.weixin {
    margin: 1rem auto;
}
.service > span {
    color: #000;
    font-weight: 600;
}
.modal-dialog {
    min-width: 80% !important;
    margin: 0.5rem auto !important;
}
.borderRed {
    border-color: red;
}
</style>
