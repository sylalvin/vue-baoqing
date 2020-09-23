<template>
    <div>
        <div class="card">
            <div class="card-header">会籍详情</div>
            <div class="card-body">
              <div class="row" v-show="!userInfo.user_type">
                <div class="col-12">
                  您还未入会，请先入会
                </div>
              </div>
              <div class="row" v-show="userInfo.user_type">
                <div class="col-12">
                  <div class="row">
                    <div class="col-md-4 col-12 text-center">
                      <img class="img_head rounded-circle" :src="userInfo ? (userInfo.avatar ? userInfo.avatar : info.imgsrc) : info.imgsrc" alt="">
                    </div>
                    <div class="col-md-8 col-12">
                      <h4 class="mt-3">会籍名称：{{ this.$MEMBER[this.userInfo.user_type].name }}</h4>
                      <p class="mt-md-3">价格：{{ this.$MEMBER[this.userInfo.user_type].price }} 元</p>
                      <p class="mt-md-3">到期时间：{{ this.$MEMBER[this.userInfo.user_type].date }}</p>
                      <!-- <router-link to="/mycenter/transfer" class="mt-md-3 btn btn-danger" tag="button">移交会籍</router-link> -->
                    </div>
                  </div>
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-12 offset-md-4">
                  <h4>权益概述：</h4>
                  <blockquote class="blockquote">
                    <p>{{ this.$MEMBER[this.userInfo.user_type].desc }}</p>
                  </blockquote>
                </div>
              </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'my-detail',
  data () {
    return {
      userInfo: JSON.parse(localStorage.getItem("userInfo")) || null,
      info: {
        imgsrc: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1027245443,3552957153&fm=26&gp=0.jpg",
      }
    }
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .img_head {
    height: 150px;
    width: 150px;
  }
  @media (min-width: 768px){
      .img_head {
        margin-top: 20px;
      }
  }
  span:hover {
    color: aqua;
  }
  @media (min-width: 768px){
      .img_head {
        margin-top: 20px;
      }
  }
</style>
