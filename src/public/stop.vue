<template>
  <div class="container-fluid">
    <div class="row mt-5">
      <div class="col-12 mt-5 text-center">
          <img :src="this.$GLOBAL.staticUrl + '/logo.png'" alt="">
          <h1 class="mt-5">敬请期待</h1>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-12 mt-5 text-center animate__animated animate__flash">
          <button type="button" class="btn btn-lg btn-outline-info" @click="goPujiang">😊 前往浦江官网&nbsp;&nbsp;<span style="color: #f00;">>></span></button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
        name: 'stop',
        data () {
            return {
                s: "",
                time: 5
            }
        },
        methods: {
            goLastPage () {
                window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
            },
            goHome () {
                this.$router.push({
                    path: '/'
                })
            }
        },
        mounted () {
            this.s = setInterval(() => {
              if(this.time > 0) {
                  this.time--
              } else {
                  clearInterval(this.s)
                  this.s = ""
                  this.time = 5
                  this.goHome()
              }
          }, 1000);
        },
        destroyed () {
            if(this.s) {
                clearInterval(this.s)
            }
        }
    }
</script>

<style>
</style>
