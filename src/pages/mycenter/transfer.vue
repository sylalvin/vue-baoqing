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
                        <input type="text" class="form-control" id="username" placeholder="Enter username">
                    </div>
                    <div class="form-group">
                        <label for="phone">手机号:</label>
                        <input type="number" class="form-control" id="phone" placeholder="Enter phone">
                    </div>
                    <div class="form-group">
                        <label for="address">地址:</label>
                        <input type="text" class="form-control" id="address" placeholder="Enter address">
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
                    <button type="submit" class="btn btn-primary" @click="submit">确定移交</button>
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

</style>
