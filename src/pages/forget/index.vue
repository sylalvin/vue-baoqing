<template>
    <div class="card">
        <div class="card-header">找回密码</div>
        <div class="card-body text-left">
            <form>
                    <div class="form-group">
                        <label for="pwd">密码:</label>
                        <input type="password" class="form-control" :class="{borderRed: checkname == 'password'}" v-model="password" id="pwd" placeholder="请输入新密码">
                    </div>
                    <div class="form-group">
                        <label for="pwd">确认密码:</label>
                        <input type="password" class="form-control" :class="{borderRed: checkname == 'password_again'}" v-model="password_again" placeholder="请再次输入新密码">
                    </div>
                    <div class="form-group">
                        <label for="username">手机号码:</label>
                        <input type="number" class="form-control" :class="{borderRed: checkname == 'username'}" v-model="username" placeholder="请输入注册手机号">
                    </div>
                    <div class="form-group">
                        <label for="check">验证码:</label>
                        <div class="input-group mb-3">
                            <input class="form-control" placeholder="请输入验证码" :class="{borderRed: checkname == 'checkNumber'}" v-model="checkNumber">
                            <div class="input-group-append">
                                <span class="input-group-text" @click="changeText">{{time + checkText}}</span>
                            </div>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary" @click.prevent="submit">确定找回</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
  name: 'forget',
  data () {
    return {
      s: "",
      checkText: "获取验证码",
      time: '',
      password: "",
      password_again: "",
      username: "",
      checkNumber: "",
      checkname: ""
    }
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
              this.$message.error("手机号不能为空");
              this.checkname = "username"
              return;
          } else if(!(/^1[3456789]\d{9}$/.test(this.username))) {
              this.$message.error("手机号格式不正确");
              this.checkname = "username"
              return;
          }
          this.$http.post(that.$GLOBAL.apiUrl + '/sms/send',{
            phone: that.username,
            action: 3
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
          if(!this.$checkNull(this.password)) {
              this.$message.error("新密码不能为空");
              this.checkname = "password"
              return;
          } else if(!(/^.{6,16}$/.test(this.password))) {
              this.$message.error("新密码至少6位，至多16位");
              this.checkname = "password"
              return;
          }
          if(!this.$checkNull(this.password_again)) {
              this.$message.error("重复新密码不能为空");
              this.checkname = "password_again"
              return;
          } else if(!(/^.{6,16}$/.test(this.password_again))) {
              this.$message.error("重复新密码至少6位，至多16位");
              this.checkname = "password_again"
              return;
          }
          if(this.password != this.password_again) {
              this.$message.error("新密码和重复新密码不一致");
              return;
          }
          if(!this.$checkNull(this.checkNumber)) {
              this.$message.error("验证码不能为空");
              this.checkname = "checkNumber"
              return;
          }
          this.checkname = ""
          this.$http.post(that.$GLOBAL.apiUrl + '/user/ForgetPwd',{
            accounts: that.username,
            pwd: that.password,
            verify: that.checkNumber
          }).then(
              function(res) {
                  if(res.body.code == 0) {
                      localStorage.setItem("username", that.username)
                      localStorage.setItem("password", that.password)
                      that.$message({
                        message: "成功找回密码,即将前往登录",
                        type: "success"
                      })
                      setTimeout(function() {
                        that.$router.push({
                            path: "/login"
                        }, 2000)
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
.borderRed {
    border-color: red;
}
</style>
