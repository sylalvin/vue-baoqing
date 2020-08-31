<template>
    <div class="card">
        <div class="card-header">会籍详情 > 移交会籍</div>
        <div class="card-body text-left">
            <dl>
                <dt>注意事项：</dt>
                <dd>- 对方必须和您在同一城市</dd>
                <dd>- 其他限制</dd>
            </dl>
            <p><mark>填写对方信息：</mark></p>
            <form>
                    <div class="form-group">
                        <label for="username">姓名:</label>
                        <input type="text" class="form-control" :class="{borderRed: checkname == 'username'}" id="username" v-model="username" placeholder="请输入对方姓名">
                    </div>
                    <div class="form-group">
                        <label for="phone">手机号:</label>
                        <input type="number" class="form-control" :class="{borderRed: checkname == 'phone'}" id="phone" v-model="phone" placeholder="请输入对方手机号">
                    </div>
                    <div class="form-group">
                        <label for="address">地址:</label>
                        <input type="text" class="form-control" :class="{borderRed: checkname == 'address'}" id="address" v-model="address" placeholder="请输入对方地址">
                    </div>
                    <div class="form-group">
                        <label for="check">验证码:</label>
                        <div class="input-group mb-3">
                            <input id="check" class="form-control" :class="{borderRed: checkname == 'checkNumber'}" placeholder="请输入验证码" v-model="checkNumber">
                            <div class="input-group-append">
                                <span class="input-group-text" disabled="true" @click="changeText">{{time + checkText}}</span>
                            </div>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-danger" @click.prevent="submit">确定移交</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
  name: 'my-transfer',
  data () {
    return {
      s: "",
      checkText: "获取验证码",
      time: '',
      username: "",
      phone: "",
      address: "",
      checkNumber: "",
      checkname: ""
    }
  },
  methods: {
      changeText () {
          if(this.s) {
              this.$message({
                  message: "请勿频繁点击获取",
                  type: "warning"
              })
              return
          }
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
      },
      submit () {
          if(!this.$checkNull(this.username)) {
              this.$message.error("姓名不能为空");
              this.checkname = "username"
              return;
          }
          if(!this.$checkNull(this.phone)) {
              this.$message.error("手机号不能为空");
              this.checkname = "phone"
              return;
          }
          if(!this.$checkNull(this.address)) {
              this.$message.error("地址不能为空");
              this.checkname = "address"
              return;
          }
          if(!this.$checkNull(this.checkNumber)) {
              this.$message.error("验证码不能为空");
              this.checkname = "checkNumber"
              return;
          }
          this.checkname = ""
          this.$message({
            message: '移交成功',
            type: 'success'
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
.borderRed {
    border-color: red;
}
</style>
