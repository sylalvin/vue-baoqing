<template>
      <div class="col-12 col-md-8 text-left" v-show="allList.length > 0">
          <div class="row mb-2 mb-md-4 d-none d-md-flex" v-for="(item, index) in allList" :key="index + '-web'">
              <div class="col-12 col-sm-4">
                  <img :src="item.images.length > 0 ? item.images[0] : defaultsrc" class="img-fluid rounded n_img" alt="">
              </div>
              <div class="col-12 col-sm-8">
                <dt class="mt-2">{{item.title}}</dt>
                <dd class="mt-2 mb-2">- {{item.content.substring(0,60) + '...'}}</dd>
                <router-link :to="{name: 'news-detail', params: {id: item.id}}" tag="a" class="btn btn-outline-success">查看详情</router-link>
              </div>
          </div>

          <div class="card d-flex d-md-none mb-2" v-for="(item, index) in allList" :key="index">
            <img class="card-img-top n_img" :src="item.images.length > 0 ? item.images[0] : defaultsrc">
            <div class="card-body">
              <h4 class="card-title">{{item.title}}</h4>
              <p class="card-text">{{item.content.substring(0,60) + '...'}}</p>
              <router-link :to="{name: 'news-detail', params: {id: item.id}}" tag="a" class="btn btn-outline-success">查看详情</router-link>
            </div>
          </div>
          <div class="row" v-show="total > 10">
            <div class="col-12">
              <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-center">
                  <li class="page-item">
                    <a class="page-link" @click.passive="currentpage = 1" :class="{disabled: (currentpage == 1)}">首页</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" @click.passive="currentpage > 1 ? currentpage-- : 1" :class="{disabled: (currentpage == 1)}">上一页</a>
                  </li>
                  <li class="page-item active"><a class="page-link" href="#">{{currentpage}}</a></li>
                  <li class="page-item">
                    <a class="page-link" @click.passive="currentpage < lastpage ? currentpage++ : lastpage" :class="{disabled: (currentpage == lastpage)}">下一页</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" @click.passive="currentpage = lastpage" :class="{disabled: (currentpage == lastpage)}">尾页</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          
        </div>
</template>

<script>
export default {
  name: 'n-list',
  data () {
    return {
      allList: [],
      total: 0,
      size: 10,
      currentpage: 1,
      lastpage: 1,
      defaultsrc: this.$GLOBAL.staticUrl + '/default.jpg'
    }
  },
  methods: {
    // getAllList (pageNum = this.currentpage, size = this.size) {
    getAllList (currentpage = this.currentpage, size = this.size) {
      var that = this
      that.$http.post(that.$GLOBAL.apiUrl + '/article/index',{
        page: currentpage,
        size: size
      }).then(
        function(res) {
          if(res.body.code == 0) {
            that.allList = []
            that.total = 0
            let newlist = res.body.data
            for(let key in newlist){
              if(key != "total") {
                let thumbnail = that.imgUrl(newlist[key].content)
                if(thumbnail) {
                  newlist[key].images = thumbnail
                }
                newlist[key].content = that.removeHTMLTag(newlist[key].content)
                that.allList.push(newlist[key])
              } else {
                that.total = newlist[key]
                that.lastpage = parseInt(that.total / that.size) + 1
              }
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
    },
    /*移除HTML标签代码*/
    removeHTMLTag (str) {
      str = str.replace(/<\/?[^>]*>/g,''); //去除HTML tag
      str = str.replace(/[ | ]*\n/g,'\n'); //去除行尾空白
      str = str.replace(/\n[\s| | ]*\r/g,'\n'); //去除多余空行
      str = str.replace(/-->/g,''); //去除多余空行
      str = str.replace(/<!--.*/g,''); //去除多余空行
      str = str.replace(/&(quot|#34);/g,'\\'); //去除多余空行
      str = str.replace(/&(amp|#38);/g,'&'); //去除多余空行
      str = str.replace(/&(lt|#60);/g,'<'); //去除多余空行
      str = str.replace(/&(gt|#62);/g,'>'); //去除多余空行
      str = str.replace(/&(nbsp|#160);/g,''); //去除多余空行
      str=str.replace(/ /ig,'');//去掉 
      return str;
    },
    imgUrl(string) {
      var a = string;
      var arrimg = [];
      a.replace(/<img [^>]*src=['"]([^'"]+)[^>]*>/gi, function (match, capture) {
        arrimg.push(capture);
      })
      if (arrimg != null && arrimg.length > 0) {
        return arrimg;
      } else {
        return false
      }
    }
  },
  watch: {
    currentpage: function (val) {
      this.getAllList()
    }
  },
  mounted () {
    this.getAllList();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.col-9 a {
    color: #000;
}
.n_img {
  transition:transform 0.5s;
  box-shadow: 3px 3px 5px #ccc;
}
.n_img:hover {
  transform:scale(1.1) rotateZ(2deg);
}
.n_content {
    word-break:break-all;
    word-wrap:break-word;
}
.img-fluid {
    width: 100%;
}
/* .pagination {
  float: right;
} */
.page-item.active .page-link {
    z-index: 3;
    color: #fff !important;
    background-color: #64ae35;
    border-color: #64ae35;
}
.pagination > li > a {
  color: #64ae35 !important;
}
.pagination > li > a.disabled {
  color: #999 !important;
}
</style>
