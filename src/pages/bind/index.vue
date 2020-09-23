<template>
  <div class="main">
      <div class="container mt-3 mb-5">
          <div class="card mt-md-5 mt-3">
            <div class="card-header">
                <h3>绑定信息</h3>
            </div>
            <div class="card-body text-left">
                <form>
                    <div class="form-group">
                        <label for="mobile">手机号:</label>
                        <input type="number" class="form-control" id="mobile" placeholder="请输入手机号" :class="{borderRed: checkname == 'mobile'}" v-model="mobile">
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
                    <button type="submit" class="btn btn-danger mr-2" @click.prevent="cancel">取消</button><button type="submit" class="btn btn-primary" @click.prevent="submit">绑定</button>
                </form>
            </div> 
        </div>
      </div>

  </div>
</template>

<script>
export default {
  name: 'r-index',
  data () {
    return {
      s: "",
      checkText: "获取验证码",
      time: '',
      mobile: "",
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
          if(!this.$checkNull(this.mobile)) {
              this.$message.error("手机号不能为空");
              this.checkname = "mobile"
              return;
          } else if(!(/^1[3456789]\d{9}$/.test(this.mobile))) {
              this.$message.error("手机号格式不正确");
              this.checkname = "mobile"
              return;
          }
          this.$http.post(that.$GLOBAL.apiUrl + '/sms/send',{
            phone: this.mobile,
            action: 4
          }).then(function(res) {
            if (res.body.code == 0) {
                this.$message({
                    message: "验证码已发送至您手机，请注意查收",
                    type: "success"
                })
                this.checkNumber = ""
                this.checkText = "S 后重新获取"
                this.time = 59
                this.s = setInterval(() => {
                    if(this.time > 0) {
                        this.time--
                    } else {
                        clearInterval(this.s)
                        this.s = ""
                        this.checkText = "获取验证码"
                        this.time = ''
                    }
                }, 1000);
            } else {
                this.$message({
                    message: res.body.msg,
                    type: "warning"
                })
            }
          }, function(error) {
            this.$message({
              message: "网络请求失败",
              type: "warning"
            })
          })
      },
      submit () {
          var that = this
          if(!this.$checkNull(this.mobile)) {
              this.$message.error("手机号不能为空");
              this.checkname = "mobile"
              return;
          } else if(!(/^1[3456789]\d{9}$/.test(this.mobile))) {
              this.$message.error("手机号格式不正确");
              this.checkname = "mobile"
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
          let weixin_openid = JSON.parse(localStorage.getItem("userInfo")).openid
          let nickname = JSON.parse(localStorage.getItem("userInfo")).nickname
          let avatar = JSON.parse(localStorage.getItem("userInfo")).headimgurl
          if(!weixin_openid) {
            that.$message({
              message: "未获取到微信openid",
              type: "warning"
            })
            return
          }
          this.$http.post(that.$GLOBAL.apiUrl + '/user/reg',{
            mobile: this.mobile,
            weixin_web_openid: weixin_openid,
            verify: this.checkNumber,
            nickname: nickname,
            avatar: avatar
          }).then(
              function(res) {
                  if(res.body.code == 0) {
                      localStorage.setItem("userInfo", JSON.stringify(res.body.data))
                      that.$router.push({
                        path: '/success',
                        query: {
                            checkText: '绑定成功'
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
          
      },
      cancel () {
        this.$router.push({
            path: '/index',
        })
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
