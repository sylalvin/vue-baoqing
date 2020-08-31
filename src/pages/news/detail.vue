<template>
  <div class="main">
    <div class="container mt-3 mb-5" v-show="isShow">
        <h1>{{article.title}}</h1>
        <p>{{article.add_time_date}}</p>
        <div v-html="article.content" class="article_content">{{article.content}}</div>
        <div class="row text-center">
            <span class="col-12" @click="goBack">返回上一页</span>
        </div>
    </div>
    <div class="container mt-3 mb-5" v-show="!isShow">
        <h1 v-cloak>{{ message }}</h1>
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
      message: "暂无数据",
      article: {
          
      }
    }
  },
  methods: {
    getArticleInfo () {
      var that = this
      that.$http.post(that.$GLOBAL.apiUrl + '/article/get',{
        id: that.$route.params.id || localStorage.getItem("newsid"),
      }).then(
        function(res) {
          if(res.body.code == 0) {
            that.isShow = true
            that.article = res.body.data
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
    goBack () {
        window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    }
  },
  mounted () {
    if(this.$route.params.id) {
      localStorage.setItem("newsid", this.$route.params.id)
    }
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
.article_content >>> img{
  width: 100% !important;
  height: auto !important;
}
</style>
