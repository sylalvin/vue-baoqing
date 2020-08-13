<template>
    <div>
        <div class="card">
            <div class="card-header">基本信息</div>
            <div class="card-body">
              <div class="row">
                <div class="col-md-4 col-12 text-md-center">
                  <img :src="info.imgsrc" class="img_head rounded-circle" alt="个人头像">
                </div>
                <div class="col-md-8 col-12 mt-3 mt-md-0">
                  <div class="row">
                    <div class="col-12">
                      姓名： {{ info.truename }}
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12 mt-3">
                      手机号： {{ info.phone }} &nbsp;&nbsp; <router-link to="/updateP" tag="span">修改</router-link>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12 mt-3">
                      第三方账号： {{ info.nickname }}
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12 mt-3">
                      地址： {{ info.address }} &nbsp;&nbsp; <router-link to="/updateA" tag="span">修改</router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <div class="card">
            <div class="card-header" @click="changeMember">我的会籍</div>
            <div class="card-body">
              <div class="row" v-show="info.member">
                <div class="col-12">
                  您还未入会，请先入会
                </div>
              </div>
              <div class="row" v-show="!info.member">
                <div class="col-12">
                  <table class="table table-hover">
                      <thead>
                        <tr>
                          <th>会员类别</th>
                          <th>权益概述</th>
                          <th>到期时间</th>
                          <th>操作</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(item, index) in info.memberList" :key="index">
                          <td>{{item.name}}</td>
                          <td>{{item.desc}}</td>
                          <td>{{item.date}}</td>
                          <td>查看</td>
                        </tr>
                      </tbody>
                  </table>
                </div>
              </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'my-info',
  data () {
    return {
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
    height: 100px;
    width: 100px;
  }
  @media (min-width: 768px){
      .img_head {
        margin-top: 20px;
      }
  }
  span:hover {
    color: aqua;
  }
</style>
