<template>
  <div class="main">
    <div class="container-fluid mt-2">
      <div class="row d-block d-md-none topBtn" :class="{'fixed-top': active}">
        <div class="col-12 text-center" @click="purchase">
          前&nbsp;往&nbsp;购&nbsp;买
        </div>
      </div>
      <el-dialog
        title="宝氢"
        :visible.sync="dialogVisible">
        <img class="dialogImg" :src="this.$GLOBAL.staticUrl + '/xcx.jpg'" alt="">
        <p>{{ dialogText }}</p>
      </el-dialog>
    </div>
    <div ref="division"></div>
    <div class="container-fluid mt-3 mb-5">
      <div class="row">

        <tabs v-bind:tabs-list="tabsList"></tabs>
        
        
        <router-view></router-view>
        
        
      </div>
      <div class="row">
        <div class="col-12">
          <div class="d-none d-md-block slideBtn">
            <button class="btn btn-success" @click="purchase">
              前<br>
              往<br>
              购<br>
              买<br>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Tabs from '../../public/components/tabs.vue'
export default {
  name: 'm-index',
  data () {
    return {
      active: false,
      dialogVisible: false,
      dialogText: "",
      tabsList: [
        {
          link: "/member/bq",
          name: "宝氢会籍"
        }
      ]
    }
  },
  components: {
    "tabs": Tabs
  },
    methods: {
    handleScrollx() {
      let active = this.$refs.division != undefined ? this.$refs.division.getBoundingClientRect().top : '';
      if(active > 50) {
        this.active = false
      } else {
        this.active = true
      }
    },
    purchase() {
      this.dialogVisible = true
      var ua = navigator.userAgent.toLowerCase();
      var isWeixin = ua.indexOf('micromessenger') != -1;
      if (isWeixin) {
          this.dialogText = "长按识别图中的二维码"
      }else{
          this.dialogText = "请使用微信扫一扫，扫描该二维码"
      }
    }
  },
  mounted () {
    window.addEventListener('scroll',this.handleScrollx)
  },
  destroyed(){
    window.removeEventListener('scroll', this.handleScrollx)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contents {
  font-family: 'Courier New', Courier, monospace;
  border-bottom: #08ac7a solid 1px;
}
ul {
  padding: 10px 0px;
}
li {
  list-style: none;
  padding: 10px;
}
li a {
  color: black;
}
.inner-nav .router-link-active {
  background-color: #fff !important;
  color: #000 !important;
  font-weight: 600 !important;
  border-bottom: none;
}
.topBtn {
  height: 50px;
  line-height: 50px;
  background-color: rgba(43, 162, 52, .7);
  color: #fff;
  font-size: 1.2rem;
  font-weight: 600;
}
.fixed-top {
  position: fixed;
  top: 0;
}
.slideBtn {
  position: fixed;
  top: calc(50% - 50px);
  right: 0;
}
@media (max-width: 768px){
    div >>> .el-dialog {
        width: 70% !important;
    }
}
.dialogImg {
  width: 100%;
}
</style>
