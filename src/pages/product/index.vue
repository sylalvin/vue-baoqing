<template>
  <div class="main">
    <div class="container-fluid mt-3 mb-5">
      <div class="row">
        <tabs v-bind:tabs-list="tabsList"></tabs>
        
        <router-view></router-view>
        
        
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
      tabsList: [
        {
          link: "/product/detail",
          name: "产品详情"
        },
        {
          link: "/product/health",
          name: "保健",
        },
        {
          link: "/product/cosmet",
          name: "美容",
        }
      ]
    }
  },
  components: {
    "tabs": Tabs
  },
  methods: {
    
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
</style>
