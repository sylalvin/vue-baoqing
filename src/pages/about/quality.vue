<template>
        <div class="col-md-8 col-12 text-left">
            <div class="card">
                <div class="card-header">浦江 > 质保体系</div>
                <div class="card-body">
                    <div class="row mt-3">
                        <div class="col-12">
                            <h4><kbd>产品展示：</kbd></h4>
                            <img :src="this.$GLOBAL.staticUrl + '/pic1.png'" alt=""><hr>
                            <blockquote class="blockquote">
                                <p>
                                    纯度高: 纯度≥99.95%的食品级氢气
                                </p>
                                <p>
                                    体积小: 约等于一瓶500毫升可乐大小
                                </p>
                                <p>
                                    重量轻: 重量≤0.5KG
                                </p>
                                <p>
                                    高品质: 高温测试，爆破测试
                                </p>
                                <p>
                                    更安全: 权威机构，食品级认证
                                </p>
                                <p>
                                    更便捷: 随时随地，想吸就吸
                                </p>
                            </blockquote>

                            <h4><kbd>适用人群：</kbd></h4>
                            <img :src="this.$GLOBAL.staticUrl + '/pic2.png'" alt=""><hr>
                            <blockquote class="blockquote">
                                <p>
                                    患病群体：对抗细胞变异、对抗细胞凋亡、抗炎症、免疫调节、代谢提节
                                </p>
                                <p>
                                    爱美人群：美容抗衰、组织修复、抗过敏
                                </p>
                                <p>
                                    亚健康群：抗辐射、抗疲劳
                                </p>
                                <p>
                                    排毒减肥：氢气可以通过促进一种重要的信号分子FGF 21发挥减肥和治疗脂肪肝
                                </p>
                            </blockquote>

                            <h4><kbd>相关资质：</kbd></h4>
                            <img :src="this.$GLOBAL.staticUrl + '/pic3.png'" alt=""><hr>
                            <blockquote class="blockquote">
                                <p>
                                    道路运输许可证、气瓶充装许可证、质量管理体系认证证书、安全生产标准化证书、上海市计量测试技术研究院华东国家计量测试中心 中国上海测试中心检测报告、上海市特种设备监督检验技术研究院检验报告。
                                </p>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
export default {
  name: 'a-pjq',
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
  @media (min-width: 768px){
      .img_head {
        margin-top: 20px;
      }
  }
  .pro_pic {
    width: 100%;
  }
  @media (max-width: 768px){
      .pro_pic {
        width: 50%;
      }
  }
  .col-12 > img {
    width: 100%;
  }
</style>
