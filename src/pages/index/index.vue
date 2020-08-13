<template>
  <div class="main pb-5">
    <carousel v-bind:carousel-list="carouselList"></carousel>
    <div class="container">
      <div class="row" ref="pic1">
        <div class="col-12 mt-3 mb-3">
          <h3 class="animate__animated" :class="{animate__bounceInLeft: pic1_active}" v-show="pic1_show"><kbd>产品展示</kbd></h3>
          <p class="animate__animated" :class="{animate__fadeInUpBig: pic1_active}" v-show="pic1_show">
              纯度高: 纯度≥99.95%的食品级氢气<br>
              体积小: 约等于一瓶500毫升可乐大小<br>
              重量轻: 重量≤0.5KG<br>
              高品质: 高温测试，爆破测试<br>
              更安全: 权威机构，食品级认证<br>
              更便捷: 随时随地，想吸就吸<br>
          </p>
          <img class="down" src="../../assets/down.png" alt="">
        </div>
        <div class="col-12 animate__animated" :class="{animate__bounceInRight: pic1_active}" v-show="pic1_show">
          <img class="img-fluid" src="../../assets/pic1.png" alt="">
        </div>
      </div>
      <div class="row" ref="pic2">
        <div class="col-12 mt-3 mb-3">
          <h3 class="animate__animated" :class="{animate__bounceInLeft: pic2_active}" v-show="pic2_show"><kbd>适用人群</kbd></h3>
          <p class="animate__animated" :class="{animate__fadeInUpBig: pic2_active}" v-show="pic2_show">
            患病群体：对抗细胞变异、对抗细胞凋亡、抗炎症、免疫调节、代谢提节<br>
            爱美人群：美容抗衰、组织修复、抗过敏<br>
            亚健康群：抗辐射、抗疲劳<br>
            排毒减肥：氢气可以通过促进一种重要的信号分子FGF 21发挥减肥和治疗脂肪肝
          </p>
          <img class="down" src="../../assets/down.png" alt="">
        </div>
        <div class="col-12 animate__animated" :class="{animate__bounceInRight: pic2_active}" v-show="pic2_show">
          <img class="img-fluid" src="../../assets/pic2.png" alt="">
        </div>
      </div>
      <div class="row" ref="pic3">
        <div class="col-12 mt-3 mb-3">
          <h3 class="animate__animated" :class="{animate__bounceInLeft: pic3_active}" v-show="pic3_show"><kbd>相关资质</kbd></h3>
          <p class="animate__animated" :class="{animate__fadeInUpBig: pic3_active}" v-show="pic3_show">道路运输许可证、气瓶充装许可证、质量管理体系认证证书、安全生产标准化证书、上海市计量测试技术研究院华东国家计量测试中心 中国上海测试中心检测报告、上海市特种设备监督检验技术研究院检验报告。</p>
          <img class="down" src="../../assets/down.png" alt="">
        </div>
        <div class="col-12 animate__animated" :class="{animate__bounceInRight: pic3_active}" v-show="pic3_show">
          <img class="img-fluid" src="../../assets/pic3.png" alt="">
        </div>
      </div>
      <!-- <div class="row" ref="pic4">
        <div class="col-12 mt-3 mb-3">
          <h3 class="animate__animated" :class="{animate__bounceInLeft: pic4_active}" v-show="pic4_show"><kbd>PART 4</kbd></h3>
          <p class="animate__animated" :class="{animate__fadeInUpBig: pic4_active}" v-show="pic4_show">For 50 years, WWF has been protecting the future of nature. The world's leading conservation organization, WWF works in 100 countries and is supported by 1.2 million members in the United States and close to 5 million globally.</p>
          <img class="down" src="../../assets/down.png" alt="">
        </div>
        <div class="col-12 animate__animated" :class="{animate__bounceInRight: pic4_active}" v-show="pic4_show">
          <img class="img-fluid" src="../../assets/pic4.jpg" alt="">
        </div>
      </div> -->
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
      pic4_show: false,
      pic1_active: true,
      pic2_active: false,
      pic3_active: false,
      pic4_active: false,
      carouselList: [
        {
          "src": "/static/images/banner.jpg",
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
      // let pic4_height = this.$refs.pic4 != undefined ? this.$refs.pic4.getBoundingClientRect().top : '';
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
      // if(h - 50 > pic4_height) {
      //   this.pic4_show = true
      //   this.pic4_active = true
      // } else {
      //   this.pic4_show = false
      //   this.pic4_active = false
      // }
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
.carousel-item img{
  width: 100%;
  height: auto;
}
.img-fluid {
  width: 100%;
}
.main {
  min-height: 1000px;
}
.down {
  width: 32px;
}
</style>
