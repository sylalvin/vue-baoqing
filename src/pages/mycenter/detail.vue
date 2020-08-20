<template>
    <div>
        <div class="card">
            <div class="card-header" @click="changeMember">会籍详情</div>
            <div class="card-body">
              <div class="row" v-if="JSON.stringify(detail) == '{}'">
                <div class="col-12">
                  您还未入会，请先入会
                </div>
              </div>
              <div class="row" v-else>
                <div class="col-12">
                  <div class="row">
                    <div class="col-md-4 col-12 text-center">
                      <img class="img_head rounded-circle" :src="userInfo ? userInfo.headimgurl : info.imgsrc" alt="">
                    </div>
                    <div class="col-md-8 col-12">
                      <h4 class="mt-3">会籍名称：{{ detail.name }}</h4>
                      <p class="mt-md-3">价格：{{ detail.price }}</p>
                      <p class="mt-md-3">到期时间：{{ detail.date }}</p>
                      <router-link to="/mycenter/transfer" class="mt-md-3 btn btn-danger" tag="button">移交会籍</router-link>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-12">
                  <h4>权益概述：</h4>
                  <blockquote class="blockquote">
                    <p>For 50 years, WWF has been protecting the future of nature. The world's leading conservation organization, WWF works in 100 countries and is supported by 1.2 million members in the United States and close to 5 million globally.</p>
                  </blockquote>
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <h4>权益概述：</h4>
                  <blockquote class="blockquote">
                    <p>For 50 years, WWF has been protecting the future of nature. The world's leading conservation organization, WWF works in 100 countries and is supported by 1.2 million members in the United States and close to 5 million globally.</p>
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
      detail: {
        name: "",
        desc: "享受购买优惠",
        price: 7999,
        date: "2022-10-31 14:00:00"
      },
      info: {
        member: true,
        truename: "史以林",
        phone: "18300602788",
        nickname: "nickname",
        address: "上海市徐汇区田林路142号华鑫科技园H座801B室",
        imgsrc: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1027245443,3552957153&fm=26&gp=0.jpg",
        memberList: [
          {
            name: "氢宝瓶会员",
            desc: "享受购买优惠",
            date: "2022-10-31 14:00:00"
          },
          {
            name: "yang会员",
            desc: "享受购买优惠",
            date: "2022-10-31 14:00:00"
          }
        ]
      }
    }
  },
  methods: {
    changeMember () {
      this.info.member = !this.info.member
    }
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
