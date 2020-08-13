<template>
  <div class="main">
    <div class="container-fuild mt-3 mb-5">
      <div class="row">
        <div class="col-md-2 offset-md-1 col-12 text-left">
          <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
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
          </el-menu>
        </div>
        
        
        <router-view></router-view>
        
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'a-index',
  data () {
    return {
      display: false
    }
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
.container {
  text-align: left;
}
.contents {
  font-family: 'Courier New', Courier, monospace;
  border-bottom: #08ac7a solid 1px;
}
li >>> .el-menu-item-group__title {
  display: none;
}
</style>
