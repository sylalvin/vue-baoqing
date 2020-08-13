<template>
    <div id="demo" class="carousel slide" data-ride="carousel">

      <!-- 指示符 -->
      <!-- <ul class="carousel-indicators">
        <li data-target="#demo" data-slide-to="index" v-for="(item, index) in carouselList" v-bind:key="index" :class="index == 0 ? 'active' : ''"></li>
      </ul> -->

      <!-- 轮播图片 -->
      <div class="carousel-inner">
            <div v-for="(item, index) in carouselList" v-bind:key="index" class="carousel-item" :class="index == 0 ? 'active' : ''">
                <img :src="item.src">
                <div class="carousel-caption">
                    <h3>{{item.title}}</h3>
                    <p>{{item.desc}}</p>
                </div>
            </div>
      </div>

      <!-- 左右切换按钮 -->
      <a class="carousel-control-prev" href="#demo" data-slide="prev">
        <span class="carousel-control-prev-icon"></span>
      </a>
      <a class="carousel-control-next" href="#demo" data-slide="next">
        <span class="carousel-control-next-icon"></span>
      </a>

    </div>
</template>

<script>
export default {
  name: 'index',
  props: {
    carouselList: Array
  },
  data () {
      return {
          carousel: []
      }
  },
  methods: {},
  mounted () {
    // console.log(JSON.stringify(this.carouselList));
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.carousel-item img{
  width: 100%;
  height: auto;
}
</style>
