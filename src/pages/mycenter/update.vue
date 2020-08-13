<template>
    <div class="card">
        <div class="card-header">密码安全</div>
        <div class="card-body text-left">
            <form>
                    <div class="form-group">
                        <label for="pwd">密码:</label>
                        <input type="password" class="form-control" id="pwd" placeholder="Enter password">
                    </div>
                    <div class="form-group">
                        <label for="pwd">确认密码:</label>
                        <input type="password" class="form-control" placeholder="Enter password again">
                    </div>
                    <div class="form-group">
                        <label for="check">验证码:</label>
                        <div class="input-group mb-3">
                            <input class="form-control" placeholder="Enter check">
                            <div class="input-group-append">
                                <span class="input-group-text" @click="changeText">{{time + checkText}}</span>
                            </div>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary" @click="submit">确定修改</button>
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
      time: ''
    }
  },
  methods: {
      changeText () {
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
          this.$showToast("修改成功", 5000)
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

</style>
