<template>
    <div>
        <div class="card">
            <div class="card-header">基本信息</div>
            <div class="card-body">
              <div class="row">
                <div class="col-md-4 col-12 text-md-center">
                  <img :src="userInfo ? (userInfo.avatar ? userInfo.avatar : info.imgsrc) : info.imgsrc" class="img_head rounded-circle" alt="个人头像">
                </div>
                <div class="col-md-8 col-12 mt-3 mt-md-0">
                  <div class="row">
                    <div class="col-12">
                      姓名： {{ userInfo ? (userInfo.nickname != "" ? userInfo.nickname : userInfo.mobile) : "游客" }}
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12 mt-3">
                      手机号： {{ userInfo ? (userInfo.mobile ? userInfo.mobile : "未设置") : "游客手机" }}
                      <!-- <router-link to="/updateP" tag="span">修改</router-link> -->
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12 mt-3">
                      第三方账号： {{ userInfo ? (userInfo.nickname ? userInfo.nickname : "未设置") : "游客" }}
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12 mt-3">
                      地址： {{ useAddress ? useAddress : "未设置" }} &nbsp;
                      <!-- <router-link to="/updateA" tag="span">修改</router-link> -->
                      <img class="d-inline d-md-none" height="32" :src="this.$GLOBAL.staticUrl + '/update.png'" @click="drawer = true" />
                      <button class="btn btn-sm btn-outline-success d-none d-md-inline" @click="drawer = true">修改地址</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <div class="card">
            <div class="card-header">我的会籍</div>
            <div class="card-body">
              <div class="row" v-show="!userInfo.user_type">
                <div class="col-12">
                  您还未入会，请先入会
                </div>
              </div>
              <div class="row" v-show="userInfo.user_type">
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
                        <tr>
                          <td>{{this.$MEMBER[this.userInfo.user_type].name}}</td>
                          <td>{{this.$MEMBER[this.userInfo.user_type].desc}}</td>
                          <td>{{this.$MEMBER[this.userInfo.user_type].date}}</td>
                          <td><router-link to="/mycenter/detail">查看</router-link></td>
                        </tr>
                      </tbody>
                  </table>
                </div>
              </div>
            </div>
        </div>
        <el-drawer
          title="修改地址"
          :visible.sync="drawer"
          direction="btt"
          :before-close="handleClose">
          <el-select v-model="selectList.province.value" clearable placeholder="请选择省份">
            <el-option
              v-for="item in address"
              :key="item.id"
              :label="item.name"
              :value="item.id">
            </el-option>
          </el-select>

          <el-select v-model="selectList.city.value" clearable placeholder="请选择市/区" v-show="selectList.province.value ? 1 : 0">
            <el-option
              v-for="item in cityList"
              :key="item.id"
              :label="item.name"
              :value="item.id">
            </el-option>
          </el-select>

          <el-select v-model="selectList.county.value" clearable placeholder="请选择县/区/街道" v-show="selectList.city.value ? 1 : 0">
            <el-option
              v-for="item in countyList"
              :key="item.id"
              :label="item.name"
              :value="item.id">
            </el-option>
          </el-select>
          <div class="mb-2">
            <input type="text" class="form-control" id="name" placeholder="请输入收货人姓名" :class="{borderRed: checkname == 'name'}" v-model="name">
          </div>
          <div class="mb-2">
            <input type="number" class="form-control" id="tel" placeholder="请输入收货人电话" :class="{borderRed: checkname == 'tel'}" v-model="tel">
          </div>
          <div class="mb-2">
            <input type="text" class="form-control" id="detailText" placeholder="请输入详细地址" :class="{borderRed: checkname == 'detailText'}" v-model="detailText">
          </div>
          <button class="btn btn-outline-success" @click="updateAddress">确定修改</button>
        </el-drawer>
    </div>
</template>

<script>
export default {
  name: 'my-info',
  data () {
    return {
      drawer: false,
      address: this.$ADDRESS,
      cityList: [],
      countyList: [],
      selectList: {
        province: {
          value: "",
          index: ""
        },
        city: {
          value: "",
          index: ""
        },
        county: {
          value: "",
          index: ""
        }
      },
      detailText: "",
      name: "",
      tel: "",
      checkname: "",
      userInfo: JSON.parse(localStorage.getItem("userInfo")) || null,
      useAddress: "",
      useAddressId: "",
      info: {
        member: false,
        imgsrc: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1027245443,3552957153&fm=26&gp=0.jpg",
        memberList: [
          {
            name: "宝氢会员",
            desc: "享受购买优惠",
            date: "2021-10-31 14:00:00"
          }
        ]
      }
    }
  },
  methods: {
    changeMember () {
      this.info.member = !this.info.member
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          this.cityList = []
          this.countyList = []
          this.selectList = {
            province: {
              value: "",
              index: ""
            },
            city: {
              value: "",
              index: ""
            },
            county: {
              value: "",
              index: ""
            }
          }
          this.detailText = ""
          done();
        })
        .catch(_ => {});
    },
    updateAddress () {
      var that = this
      let data = {}
      if(!this.useAddressId) {
        this.$message.error("地址 ID 不能为空");
        return;
      }
      if(!this.selectList.province.value && this.selectList.city.value && this.selectList.county.value) {
        this.$message.error("省、市、区不能为空");
        return;
      }
      if(!this.$checkNull(this.name)) {
        this.$message.error("收货人姓名不能为空");
        this.checkname = "username"
        return;
      } else if(!(/^[\u4e00-\u9fa5]{2,4}$/.test(this.name))) {
        this.$message.error("收货人姓名格式不正确，应为2-4个汉字");
        this.checkname = "name"
        return;
      }
      if(!this.$checkNull(this.tel)) {
        this.$message.error("收货人手机号不能为空");
        this.checkname = "tel"
        return;
      } else if(!(/^1[3456789]\d{9}$/.test(this.tel))) {
        this.$message.error("收货人手机号格式不正确");
        this.checkname = "tel"
        return;
      }
      if(!this.$checkNull(this.detailText)) {
        this.$message.error("详细地址不能为空");
        this.checkname = "detailText"
        return;
      } else if(!(/^.{5,}$/.test(this.detailText))) {
        this.$message.error("请填写详细的收货地址");
        this.checkname = "detailText"
        return;
      }
      data.id = this.useAddressId
      data.province = this.selectList.province.value
      data.city = this.selectList.city.value
      data.county = this.selectList.county.value
      data.address = this.detailText
      data.name = this.name
      data.tel = this.tel
      this.checkname = ""
      if(this.userInfo) {
        let weixin_openid = this.userInfo.weixin_openid
        let weixin_web_openid = this.userInfo.weixin_web_openid
        let mobile = this.userInfo.mobile
        if(weixin_openid) {
          data.weixin_openid = weixin_openid
        } else if(weixin_web_openid) {
          data.weixin_web_openid = weixin_web_openid
        } else if(mobile) {
          data.mobile = mobile
        } else {
          this.$message({
              message: "未获取到微信openid、小程序openid和手机号",
              type: "warning"
          })
          return
        }
        if(!data) {
          return
        }
        this.$http.post(that.$GLOBAL.apiUrl + '/address/save', data).then(
          function(res) {
            if(res.body.code == 0) {
              that.$message({
                message: "修改成功",
                type: "success"
              })
              that.drawer = false
              that.getAddress()
            } else {
              that.$message({
                message: res.body.msg,
                type: "warning"
              })
            }
          },
          function(error) {
            that.$message({
              message: "网络请求失败",
              type: "warning"
            })
          }
        )
      }
    },
    getAddress () {
      var that = this
      if(this.userInfo) {
        let data = {}
        let weixin_openid = this.userInfo.weixin_openid
        let weixin_web_openid = this.userInfo.weixin_web_openid
        let mobile = this.userInfo.mobile
        if(weixin_openid) {
          data.weixin_openid = weixin_openid
        } else if(weixin_web_openid) {
          data.weixin_web_openid = weixin_web_openid
        } else if(mobile) {
          data.mobile = mobile
        } else {
          this.$message({
              message: "未获取到微信openid、小程序openid和手机号",
              type: "warning"
          })
          return
        }
        if(!data) {
          return
        }
        this.$http.post(this.$GLOBAL.apiUrl + '/address/get', data).then(
          function(res) {
            if(res.body.code == 0) {
              if(!res.body.data) {
                return
              }
              for(let i=0; i < res.body.data.length; i++) {
                if(res.body.data[i].is_default === true) {
                  that.useAddress = res.body.data[i].province_name + res.body.data[i].city_name + res.body.data[i].county_name + res.body.data[i].address
                  that.useAddressId = res.body.data[i].id
                }
              }
              if(!that.useAddress) {
                that.useAddress = res.body.data[0].province_name + res.body.data[0].city_name + res.body.data[0].county_name + res.body.data[0].address
                that.useAddressId = res.body.data[0].id
              } 
            } else {
              that.$message({
                message: res.body.msg,
                type: "warning"
              })
            }
          },
          function(error) {
            that.$message({
              message: "网络请求失败",
              type: "warning"
            })
          }
        )
      }
    }
  },
  watch: {
    "selectList.province.value": function (val) {
      this.selectList.city.value = ""
      this.selectList.city.index = ""
      if(val) {
        for(let i=0; i <= this.address.length; i++) {
          if(this.address[i].id == val) {
            this.selectList.province.index = i
            break
          }
        }
        this.cityList = this.address[this.selectList.province.index].children
      }
    },
    "selectList.city.value": function (val) {
      this.selectList.county.value = ""
      this.selectList.county.index = ""
      if(val) {
        for(let i=0; i <= this.cityList.length; i++) {
          if(this.cityList[i].id == val) {
            this.selectList.city.index = i
            this.countyList = this.cityList[i].children2
            break
          }
        }
      }
    },
    "selectList.county.value": function (val) {
    }
  },
  mounted () {
    this.getAddress()
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
  div >>> .el-drawer {
    height: 60% !important;
  }
  div >>> section {
    padding: 0 20px !important;
  }
  div >>> section > .el-select {
    margin-bottom: 10px;
  }
  .borderRed {
    border-color: red;
  }
</style>
