<template>
  <div class="main">
    <div class="container mt-3 mb-5" v-show="isShow">
        <h1>{{art.title}}</h1>
        <p>{{art.created_at}}</p>
        <blockquote class="blockquote">
            <p>{{art.content}}</p>
            <footer class="blockquote-footer">{{art.author}}</footer>
        </blockquote>
        <div class="row text-center">
            <span class="col-12" @click="goBack">返回上一页</span>
        </div>
    </div>
    <div class="container mt-3 mb-5" v-show="!isShow">
        <h1>{{art.title}}</h1>
        <div class="row text-center">
            <span class="col-12" @click="goBack">返回上一页</span>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'n-detail',
  data () {
    return {
      isShow: false,
      art: {
          title: "暂无数据",
          author: "",
          content: "",
          created_at: ""
      }
    }
  },
  methods: {
    getArticleInfo () {
      this.$http.post(this.GLOBAL.apiUrl + '/index/getArticleInfo', {id: this.$route.params.id}, {emulateJSON: true})
      .then(
        function(res) {
          if(res.body.data) {
            this.isShow = true
            this.art = res.body.data[0]
          } else {
            this.isShow = false
          }
        },
        function(err) {
          this.isShow = false
          console.log(JSON.stringify(err))
        }
      )
    },
    goBack () {
        window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    }
  },
  mounted () {
    this.getArticleInfo();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  text-align: left;
}
span:hover {
  color: aqua;
}
</style>
