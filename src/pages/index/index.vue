<template>
  <div class="main pb-1 pb-md-3">
    <carousel v-bind:carousel-list="carouselList"></carousel>
    <div class="container">

      <!-- <div class="mt-3 mb-3 embed-responsive embed-responsive-16by9">
        <video width="320" height="240" controls>
          <source src="http://test.h2h777.cn/vedio/vedio1.mp4" type="video/mp4">
        </video>
      </div> -->

      <div class="row" ref="pic1">
        <div class="col-12 pt-3 text-bg">
          <h3 class="animate__animated" :class="{animate__bounceInUp: pic1_active}" v-show="pic1_show"><span class="title-text">产 品 展 示</span></h3><br>
          <!-- <p class="animate__animated" :class="{animate__fadeInUpBig: pic1_active}" v-show="pic1_show">
              纯度高: 纯度≥99.95%的食品级氢气<br>
              体积小: 约等于一瓶500毫升可乐大小<br>
              重量轻: 重量≤0.5KG<br>
              高品质: 高温测试，爆破测试<br>
              更安全: 权威机构，食品级认证<br>
              更便捷: 随时随地，想吸就吸<br>
              P r o d u c t  D i s p l a y
          </p> -->
          <img class="down" :src="this.$GLOBAL.staticUrl + '/down.png'" alt="">
        </div>
        <div class="col-12 animate__animated" :class="{animate__bounceInRight: pic1_active}" v-show="pic1_show">
            <img class="img-fluid" :src="this.$GLOBAL.staticUrl + '/advantage.jpg'" alt="">
        </div>
      </div>
      <div class="row" ref="pic2">
        <div class="col-12 pt-3 text-bg">
          <h3 class="animate__animated" :class="{animate__bounceInUp: pic2_active}" v-show="pic2_show"><span class="title-text">适 用 人 群</span></h3><br>
          <span class="animate__animated" :class="{animate__fadeInUpBig: pic2_active}" v-show="pic2_show">
            不久的将来，人们已习惯在日常喝氢水、吸氢气等这样良好的生活方式
          </span><br>
          <!-- <p class="animate__animated" :class="{animate__fadeInUpBig: pic2_active}" v-show="pic2_show">
            患病群体：对抗细胞变异、对抗细胞凋亡、抗炎症、免疫调节、代谢提升<br>
            爱美人群：美容抗衰、组织修复、抗过敏<br>
            亚健康群：抗辐射、抗疲劳<br>
            排毒减肥：氢气可以通过促进一种重要的信号分子FGF 21发挥减肥和治疗脂肪肝
          </p> -->
          <img class="down" :src="this.$GLOBAL.staticUrl + '/down.png'" alt="">
        </div>
        <!-- <div class="col-12 animate__animated" :class="{animate__bounceInRight: pic2_active}" v-show="pic2_show">
          <div class="row">
            <img class="img-fluid" :src="this.$GLOBAL.staticUrl + '/pic2.png'" alt="">
          </div>
        </div> -->
        <div ref="sy1" class="col-12 animate__animated" :class="{animate__bounceInLeft: sy1_active}" v-show="sy1_show">
            <img class="img-fluid" :src="this.$GLOBAL.staticUrl + '/shiyong1.png'" alt="">
        </div>
        <div ref="sy2" class="col-12 animate__animated" :class="{animate__bounceInRight: sy2_active}" v-show="sy2_show">
            <img class="img-fluid" :src="this.$GLOBAL.staticUrl + '/shiyong2.png'" alt="">
        </div>
        <div ref="sy3" class="col-12 animate__animated" :class="{animate__bounceInLeft: sy3_active}" v-show="sy3_show">
            <img class="img-fluid" :src="this.$GLOBAL.staticUrl + '/shiyong3.png'" alt="">
        </div>
        <div ref="sy4" class="col-12 animate__animated" :class="{animate__bounceInRight: sy4_active}" v-show="sy4_show">
            <img class="img-fluid" :src="this.$GLOBAL.staticUrl + '/shiyong4.png'" alt="">
        </div>
      </div>
      <div class="row" ref="pic3">
        <div class="col-12 pt-3 text-bg">
          <h3 class="animate__animated" :class="{animate__bounceInUp: pic3_active}" v-show="pic3_show"><span class="title-text">相 关 资 质</span></h3><br>
          <span class="animate__animated" :class="{animate__fadeInUpBig: pic3_active}" v-show="pic3_show">道路运输许可证、气瓶充装许可证、质量管理体系认证证书、安全生产标准化证书、上海市计量测试技术研究院华东国家计量测试中心 中国上海测试中心检测报告、上海市特种设备监督检验技术研究院检验报告。</span><br>
          <img class="down" :src="this.$GLOBAL.staticUrl + '/down.png'" alt="">
        </div>
        <div class="col-12 animate__animated" :class="{animate__bounceInRight: pic3_active}" v-show="pic3_show">
            <img class="img-fluid" :src="this.$GLOBAL.staticUrl + '/book.png'" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from '../../public/components/carousel.vue'
export default {
  name: 'i-index',
  data () {
    return {
      username: JSON.parse(localStorage.getItem("userInfo")) != null ? JSON.parse(localStorage.getItem("userInfo")).username : "",
      pic1_show: true,
      pic2_show: false,
      pic3_show: false,
      sy1_show: false,
      sy2_show: false,
      sy3_show: false,
      sy4_show: false,
      pic1_active: true,
      pic2_active: false,
      pic3_active: false,
      sy1_active: false,
      sy2_active: false,
      sy3_active: false,
      sy4_active: false,
      carouselList: [
        {
          "src": this.$GLOBAL.staticUrl + '/banner.png',
          "title": "便携氢气",
          "desc": "以氢健康技术造福人类"
        }
      ]
    }
  },
  components: {
    "carousel": Carousel
  },
  methods: {
    handleScrollx() {
      let pic2_height = this.$refs.pic2 != undefined ? this.$refs.pic2.getBoundingClientRect().top : '';
      let pic3_height = this.$refs.pic3 != undefined ? this.$refs.pic3.getBoundingClientRect().top : '';
      let sy1_height = this.$refs.sy1 != undefined ? this.$refs.sy1.getBoundingClientRect().top : '';
      let sy2_height = this.$refs.sy2 != undefined ? this.$refs.sy2.getBoundingClientRect().top : '';
      let sy3_height = this.$refs.sy3 != undefined ? this.$refs.sy3.getBoundingClientRect().top : '';
      let sy4_height = this.$refs.sy4 != undefined ? this.$refs.sy4.getBoundingClientRect().top : '';
      let h = document.documentElement.clientHeight || document.body.clientHeight; // 屏幕高度
      if(h - 50 > pic2_height) {
        this.pic2_show = true
        this.pic2_active = true
      } else {
        this.pic2_show = false
        this.pic2_active = false
      }
      if(h - 50 > pic3_height) {
        this.pic3_show = true
        this.pic3_active = true
      } else {
        this.pic3_show = false
        this.pic3_active = false
      }

      if(h - 50 > sy1_height) {
        this.sy1_show = true
        this.sy1_active = true
      } else {
        this.sy1_show = false
        this.sy1_active = false
      }
      if(h - 50 > sy2_height) {
        this.sy2_show = true
        this.sy2_active = true
      } else {
        this.sy2_show = false
        this.sy2_active = false
      }
      if(h - 50 > sy3_height) {
        this.sy3_show = true
        this.sy3_active = true
      } else {
        this.sy3_show = false
        this.sy3_active = false
      }
      if(h - 50 > sy4_height) {
        this.sy4_show = true
        this.sy4_active = true
      } else {
        this.sy4_show = false
        this.sy4_active = false
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
h1{
  font-weight: normal;
}
span.title-text {
  font-weight: 900 !important;
  background-color: #64AE34;
  padding: 10px 20px;
  color: #fff;
}
.index-img {
  width: 100%;
  height: 50px;
}
.carousel-item img{
  width: 100%;
  height: auto;
}
.main {
  min-height: 1000px;
}
.down {
  width: 32px;
}
kbd {
  background-color: #2BA234;
}
/* .text-bg {
  background-image: url("../../assets/pro-bg.jpg");
  background-repeat:no-repeat;
  background-size:100% 100%;
  -moz-background-size:100% 100%;
} */
</style>
