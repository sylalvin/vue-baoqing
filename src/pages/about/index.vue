<template>
  <div class="main">
    <div class="container-fluid mt-3 mb-5">
      <div class="row">
        <tabs v-bind:tabs-list="tabsList"></tabs>
        <!-- <div class="col-md-2 offset-md-1 col-12 text-left">
          <ul>
            <li class="inner-nav">
              <router-link to="/about/bq" tag="span">宝氢</router-link>
            </li>
          </ul> -->
          
          <!-- <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
            <el-menu-item index="1">
              <i class="el-icon-s-platform"></i>
              <router-link to="/about/bq" tag="span" slot="title">宝氢</router-link>
            </el-menu-item>

            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-office-building"></i>
                <span>浦江</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="2-1"><router-link to="/about/product" tag="span">浦江的产品线</router-link></el-menu-item>
                <el-menu-item index="2-2"><router-link to="/about/quality" tag="span">浦江的质保体系</router-link></el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            
            <el-menu-item index="3">
              <i class="el-icon-ice-drink"></i>
              <router-link to="/about/spq" tag="span" slot="title">食品氢</router-link>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-share"></i>
              <router-link to="/about/qncy" tag="span" slot="title">氢能产业</router-link>
            </el-menu-item>
          </el-menu> -->
        <!-- </div> -->
        
        
        <router-view></router-view>
        
        
      </div>
    </div>
  </div>
</template>

<script>
import Tabs from '../../public/components/tabs.vue'
export default {
  name: 'a-index',
  data () {
    return {
      display: false,
      tabsList: [
        {
          link: "/about/bq",
          name: "宝氢"
        }
      ]
    }
  },
  components: {
    "tabs": Tabs
  },
  methods: {
    handleOpen(key, keyPath) {
        // console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
        // console.log(key, keyPath);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contents {
  font-family: 'Courier New', Courier, monospace;
  border-bottom: #08ac7a solid 1px;
}
li >>> .el-menu-item-group__title {
  display: none;
}
.el-submenu .el-menu-item {
    min-width: 0px;
}
.el-menu {
    border-right: none;
}

/* 隐藏后样式 */
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
</style>
