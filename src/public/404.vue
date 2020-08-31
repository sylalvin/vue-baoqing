<template>
    <div class="container-fuild">
        <div class="row mt-md-5 mb-md-5">
            <div class="col-12 notfound mt-md-5 mt-3 mb-md-5 mb-3">
                <img :src="this.$GLOBAL.staticUrl + '/404.png'" alt="">
            </div>
            <div class="col-12 notfound_text mb-md-5 mb-3">
                <p>您访问的页面不存在&nbsp; <span style="color: red; font-size: 2rem;">{{ time }}</span> &nbsp;S后跳转至网站首页</p>
            </div>
        </div>
        <div class="row">
            <div class="col-12"><button class="btn btn-primary" @click="goLastPage">返回上一页</button>&nbsp;&nbsp;<button class="btn btn-primary" @click="goHome">返回网站首页</button></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'notfound',
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

<style scoped>
    .notfound {
        background-color: #fff;
    }
</style>
