<template>
  <div class="main">
    <div class="container-fuild mt-3 mb-5">
      <div class="row">
        <div class="col-md-2 offset-md-1 col-12 text-left">
          <ul>
            <li class="inner-nav">
              <router-link to="/news/bq" tag="span">宝氢</router-link>
            </li>
            <li class="inner-nav">
              <router-link to="/news/pj" tag="span">浦江</router-link>
            </li>
          </ul>
        </div>
        
        
        <router-view></router-view>
        
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'n-index',
  data () {
    return {
      allList: []
    }
  },
  methods: {
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
</style>
