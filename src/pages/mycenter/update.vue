<template>
    <div class="card">
        <div class="card-header">密码安全</div>
        <div class="card-body text-left">
            <form>
                    <div class="form-group">
                        <label for="pwd">密码:</label>
                        <input type="password" class="form-control" :class="{borderRed: checkname == 'password'}" v-model="password" id="pwd" placeholder="Enter password">
                    </div>
                    <div class="form-group">
                        <label for="pwd">确认密码:</label>
                        <input type="password" class="form-control" :class="{borderRed: checkname == 'password_again'}" v-model="password_again" placeholder="Enter password again">
                    </div>
                    <div class="form-group">
                        <label for="check">验证码:</label>
                        <div class="input-group mb-3">
                            <input class="form-control" placeholder="Enter check" :class="{borderRed: checkname == 'checkNumber'}" v-model="checkNumber">
                            <div class="input-group-append">
                                <span class="input-group-text" @click="changeText">{{time + checkText}}</span>
                            </div>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary" @click.prevent="submit">确定修改</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
  name: 'my-update',
  data () {
    return {
      s: "",
      checkText: "获取验证码",
      time: '',
      password: "",
      password_again: "",
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
                  clearInterval(s)
                  this.s = ""
                  this.checkText = "获取验证码"
                  this.time = ''
              }
          }, 1000);
      },
      submit () {
          if(!this.$checkNull(this.password)) {
              this.$message.error("新密码不能为空");
              this.checkname = "password"
              return;
          }
          if(!this.$checkNull(this.password_again)) {
              this.$message.error("重复新密码不能为空");
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
          this.$message({
            message: '修改成功',
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
