<template>
      <div class="col-md-8 col-12 text-left" v-show="allList.length > 0">
          <div class="row mb-2" v-for="(item,index) in allList" :key="index">
              <div class="col-md-4 col-12">
                  <img src="../../assets/logo.png" class="img-fluid" alt="">
              </div>
              <div class="news-item col-md-8 col-12">
                <h3>{{item.title}}</h3>
                <p class="n_content">{{item.author}}++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++</p>
                <router-link :to="{name: 'news-detail', params: {id: item.id}}" tag="p" class="text-right">详情</router-link>
              </div>
          </div>
        </div>
</template>

<script>
export default {
  name: 'n-list',
  data () {
    return {
      allList: []
    }
  },
  methods: {
    getAllList () {
      this.$http.post(this.GLOBAL.apiUrl + '/index/getAllList', {methods: "post"}, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
      .then(
        function(res) {
          if(res.body.data && res.body.data.length > 0)
          this.allList = res.body.data
          // console.log(JSON.stringify(this.allList))
        },
        function(err) {
          console.log(JSON.stringify(err));
        }
      )
    }
  },
  mounted () {
    this.getAllList();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  text-align: left;
}
.news-item:hover {
    background-color: #eee;
}
/* @media (min-width: 768px){
      .news-item {
        margin-top: calc(50% - 50px);
      }
} */
.col-9 a {
    color: #000;
}
.n_content {
    word-break:break-all;
    word-wrap:break-word;
}
.img-fluid {
    width: 100%;
}
</style>
