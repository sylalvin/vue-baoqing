<template>
  <div class="main">
      <div class="container mt-3 mb-5">
          <div class="card mt-md-5 mt-3">
            <div class="card-header">
                <h3>登录</h3>
            </div>
            <div class="card-body text-left" v-show="phoneway">
                <!-- <div id="login_container"></div> -->
                <form>
                    <div class="form-group">
                    <label for="username">账号:</label>
                    <input type="number" class="form-control" id="username" placeholder="请输入手机号" :class="{borderRed: checkname == 'username'}" v-model="username">
                    </div>
                    <div class="form-group">
                    <label for="password">密码:</label>
                    <input type="password" class="form-control" id="password" placeholder="请输入密码" :class="{borderRed: checkname == 'password'}" v-model="password">
                    </div>
                    <button type="submit" class="btn btn-primary" @click.prevent="submit">立即登录</button>
                </form>
            </div>
            <div class="card-body text-center" v-show="wxway">
                <div id="login_container"></div>
                <vue-qr :text="qrurl" :size="300" :logoSrc="imageUrl" :margin="20" :class="{showModal: !r_active}"></vue-qr>
                <p class="d-none d-md-block">请使用微信扫描上方二维码</p>
                <p class="d-block d-md-none">长按识别图中二维码</p>
                <div v-show="!r_active"><img class="qrcode-img pr-2" :src="this.$GLOBAL.staticUrl + '/reflash.png'" alt="" @click="wxlogin"><span>刷新二维码</span></div>
            </div> 
            <div class="card-footer"><router-link to="/forget">忘记密码</router-link>&nbsp;&nbsp;&nbsp;&nbsp;<router-link to="/register">没有账号？前往注册</router-link></div>
        </div>

        <div class="row mt-md-5 mt-3" v-show="phoneway">
            <div class="col-12">——————&nbsp;&nbsp;第三方登录&nbsp;&nbsp;——————</div>
            <img @click="wxlogin" class="weixin" :src="this.$GLOBAL.staticUrl + '/weixin.png'" alt="微信登录">
            <div class="col-12 service">登录表示您已阅读和同意 <span data-toggle="modal" data-target="#service">服务条款</span></div>
        </div>
        <div class="row mt-md-5 mt-3" v-show="wxway">
            <div class="col-12"><button class="btn btn-info" @click.prevent="phonelogin">手机号码登录</button></div>
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
  </div>
</template>

<script>
import vueQr from 'vue-qr'
import Service from '../../public/service.vue'
export default {
  name: 'l-index',
  data () {
    return {
      s: -1,
      times: 0,
      r_active: false,
      phoneway: true,
      wxway: false,
      imageUrl: require("../../assets/logo.png"),
      qrurl: "",
      username: localStorage.getItem("username") ? localStorage.getItem("username") : "",
      password: localStorage.getItem("password") ? localStorage.getItem("password") : "",
      checkname: ""
    }
  },
  methods: {
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
          this.checkname = ""
          this.$http.post(that.$GLOBAL.apiUrl + '/user/Login',{
            accounts: this.username,
            pwd: this.password,
            verify: this.checkNumber
          }).then(
              function(res) {
                  if(res.body.code == 0) {
                      localStorage.setItem("userInfo", JSON.stringify(res.body.data))
                      localStorage.setItem("username", that.username)
                      localStorage.setItem("password", that.password)
                      that.$router.push({
                        path: '/success',
                        query: {
                            checkText: '登录成功'
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
                  console.log(JSON.stringify(error))
                  that.$message({
                    message: JSON.stringify(error),
                    type: "warning"
                  })
              }
          )
      },
      wxlogin () {
          var that = this
          that.r_active = true
          that.times = 0
          if (that.s != -1) {
              clearInterval(that.s)
          }
          that.wxway = true
          that.phoneway = false
          that.imageUrl = require("@/" + "assets/logo.png")
          var xhr = new XMLHttpRequest()
          xhr.onreadystatechange = function() {
              if (xhr.readyState == 4 && xhr.status == 200) {
                let jsonData = JSON.parse(xhr.responseText)
                let ticket = jsonData.ticket
                let scanid = jsonData.scanid
                that.qrurl = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxc8e9f336cc652d65&redirect_uri=http://auth.h2h777.cn/app/scanAndLogin/index/index/mid/1/?ticket=" + ticket + "&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect"
                that.s = setInterval(function() {
                    that.times++
                    that.getUserInfo(scanid)
                }, 1000)
              }
          }
          xhr.open('get', 'http://auth.h2h777.cn/mp/login/getTicket/mid/1', true)
          xhr.send();
      },
      getUserInfo (scanid) {
          var that = this
          var xhr1 = new XMLHttpRequest()
          xhr1.onreadystatechange = function() {
              if (xhr1.readyState == 4 && xhr1.status == 200) {
                  let jsonData1 = JSON.parse(xhr1.responseText)
                  if (jsonData1.status == 0) {
                      clearInterval(that.s)
                      that.times = 0
                      localStorage.setItem("userInfo", JSON.stringify(jsonData1.data))
                      if(jsonData1.data.openid) {
                        that.$http.post(that.$GLOBAL.apiUrl + '/user/get',{
                            weixin_web_openid: jsonData1.data.openid
                        }).then(
                            function(res) {
                                if(res.body.code == 0 || res.body.code == -10) {
                                    if(res.body.code == 0) {
                                        localStorage.setItem("userInfo", JSON.stringify(res.body.data))
                                    }
                                    clearInterval(that.s)
                                    that.times = 0
                                    let bindres = that.$bindMobile()
                                    if(bindres == false) {
                                        that.$router.push({
                                            path: '/bind'
                                        })
                                    } else {
                                        that.$router.push({
                                            path: '/success',
                                            query: {
                                                checkText: '登录成功'
                                            }
                                        })
                                    }
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
                  } else if (jsonData1.status == -2) {
                      that.r_active = false
                      clearInterval(that.s)
                      that.imageUrl = require("@/" + "assets/invalid.png")
                  } else if (that.times > 100) {
                      that.r_active = false
                      clearInterval(that.s)
                      that.imageUrl = require("@/" + "assets/invalid.png")
                  }
              }
          }
          xhr1.open('get', 'http://auth.h2h777.cn/mp/login/login/mid/1?scanid=' + scanid, true)
          xhr1.send();
      },
      phonelogin () {
          this.wxway = false
          this.phoneway = true
          if (this.s != -1) {
              clearInterval(this.s)
          }
      }
  },
  components: {
      vueQr,
      Service
  },
  mounted () {
      
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
.qrcode-img {
    height: 1.6rem;
}
.showModal {
    opacity: 0.3;
}
.borderRed {
    border-color: red;
}
</style>
