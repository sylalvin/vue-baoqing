<template>
<div class="col-md-2 col-12 offset-md-1">
    <ul class="text-left d-none d-md-block">
        <li class="inner-nav" v-for="(item, index) in tabsList" v-bind:key="index">
            <router-link :to="item.link" tag="span">{{item.name}}</router-link>
        </li>
    </ul>

    <ul class="nav nav-tabs nav-justified text-center d-flex d-md-none">
        <li class="nav-item inner-nav" v-for="(item2, index2) in tabsList" v-bind:key="index2">
            <router-link :to="item2.link" tag="span">{{item2.name}}</router-link>
        </li>
    </ul>
</div>
</template>

<script>
export default {
  name: 'tabs',
  props: {
    tabsList: Array
  },
  data () {
    return {
      
    }
  },
  methods: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
.nav-tabs {
    border-bottom: none;
}
</style>
