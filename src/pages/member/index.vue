<template>
  <div class="main">
    <div class="container-fuild mt-2">
      <div class="row d-block d-md-none topBtn" :class="{'fixed-top': active}">
        <div class="col-12" @click="purchase">
          前&nbsp;往&nbsp;购&nbsp;买
        </div>
      </div>
    </div>
    <div ref="division"></div>
    <div class="container-fuild mt-3 mb-5">
      <div class="row">
        <div class="col-md-2 offset-md-1 col-12 text-left">
          <ul>
            <li class="inner-nav">
              <router-link to="/member/bq" tag="span">宝氢会籍</router-link>
            </li>
            <li class="inner-nav">
              <router-link to="/member/other" tag="span">其它</router-link>
            </li>
          </ul>
        </div>
        
        
        <router-view></router-view>
        
        
      </div>
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
</template>

<script>
export default {
  name: 'm-index',
  data () {
    return {
      active: false
    }
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
      this.$alert('<strong>暂未开通此功能，敬请期待</strong>', '温馨提示', {
          dangerouslyUseHTMLString: true,
          center: true
      });
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
.container {
  text-align: left;
}
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
</style>
