import Vue from 'vue'
import Router from 'vue-router'
import IndexIndex from '../pages/index/index.vue'
import ProductIndex from '../pages/product/index.vue'
import CosmetIndex from '../pages/cosmet/index.vue'
import CosmetKzwContent from '../pages/cosmet/kzw.vue'
import CosmetQcdContent from '../pages/cosmet/qcd.vue'
import HealthIndex from '../pages/health/index.vue'
import HealthHxdContent from '../pages/health/hxd.vue'
import HealthCwContent from '../pages/health/cw.vue'
import HealthXxgContent from '../pages/health/xxg.vue'
import MemberIndex from '../pages/member/index.vue'
import MemberContent from '../pages/member/content.vue'
import HelpIndex from '../pages/help/index.vue'
import HelpGuideIndex from '../pages/help/guide.vue'
import HelpSafeIndex from '../pages/help/safe.vue'
import LoginIndex from '../pages/login/index.vue'
import RegisterIndex from '../pages/register/index.vue'
import MycenterIndex from '../pages/mycenter/index.vue'
import MyInfoContent from '../pages/mycenter/info.vue'
import MyDetailContent from '../pages/mycenter/detail.vue'
import MyUpdateContent from '../pages/mycenter/update.vue'
import MyTransferContent from '../pages/mycenter/transfer.vue'
import Success from '../public/success.vue'
import NewsIndex from '../pages/news/index.vue'
import NewsDetail from '../pages/news/detail.vue'
import NewsList from '../pages/news/nlist.vue'
import AboutIndex from '../pages/about/index.vue'
import MyBqContent from '../pages/about/baoqing.vue'
import MyEnergyContent from '../pages/about/energy.vue'
import MyPjpContent from '../pages/about/product.vue'
import MyPjqContent from '../pages/about/quality.vue'
import MyFoodContent from '../pages/about/food.vue'
import Header from '../public/header.vue'
import Footer from '../public/footer.vue'
import Service from '../public/service.vue'
import Stop from '../public/stop.vue'
import NotFound from '../public/404.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      meta: {
        title: '404 Not Found'
      },
      components: {
        content: NotFound
      },
    },
    {
      path: '/',
      redirect: '/index',
    },
    {
      path: '/index',
      name: 'IndexIndex',
      meta: {
        title: '首页'
      },
      components: {
        header: Header,
        content: IndexIndex,
        footer: Footer
      }
    },
    {
      path: '/product',
      name: 'ProductIndex',
      meta: {
        title: '产品中心'
      },
      components: {
        header: Header,
        content: ProductIndex,
        footer: Footer
      }
    },
    {
      path: '/news',
      redirect: '/news/bq',
    },
    {
      path: '/news',
      name: 'NewsIndex',
      meta: {
        title: '品牌动态'
      },
      components: {
        header: Header,
        content: NewsIndex,
        footer: Footer
      },
      children: [
        {
          path: 'bq',
          meta: '宝氢',
          component: NewsList
        },
        {
          path: 'pj',
          meta: '浦江',
          component: NewsList
        }
      ]
    },
    {
      path: '/news/detail',
      name: 'news-detail',
      meta: {
        title: '动态详情'
      },
      components: {
        header: Header,
        content: NewsDetail,
        footer: Footer
      }
    },
    {
      path: '/about',
      name: 'AboutIndex',
      redirect: '/about/bq',
      meta: {
        title: '关于我们'
      },
      components: {
        header: Header,
        content: AboutIndex,
        footer: Footer
      },
      children: [
        {
          path: 'bq',
          meta: '宝氢',
          component: MyBqContent
        },
        {
          path: 'spq',
          meta: '食品氢',
          component: MyFoodContent
        },
        {
          path: 'qncy',
          meta: '氢能产业',
          component: MyEnergyContent
        },
        {
          path: 'product',
          meta: '浦江产品线',
          component: MyPjpContent
        },
        {
          path: 'quality',
          meta: '浦江质保体系',
          component: MyPjqContent
        }
      ]
    },
    {
      path: '/cosmet',
      name: 'CosmetIndex',
      redirect: '/cosmet/kzw',
      meta: {
        title: '美容'
      },
      components: {
        header: Header,
        content: CosmetIndex,
        footer: Footer
      },
      children: [
        {
          path: 'kzw',
          meta: '抗皱纹',
          component: CosmetKzwContent
        },
        {
          path: 'qcd',
          meta: '治青春痘',
          component: CosmetQcdContent
        }
      ]
    },
    {
      path: '/health',
      name: 'HealthIndex',
      redirect: '/health/hxd',
      meta: {
        title: '保健'
      },
      components: {
        header: Header,
        content: HealthIndex,
        footer: Footer
      },
      children: [
        {
          path: 'hxd',
          meta: '呼吸道',
          component: HealthHxdContent
        },
        {
          path: 'cw',
          meta: '肠胃',
          component: HealthCwContent
        },
        {
          path: 'xxg',
          meta: '心血管',
          component: HealthXxgContent
        }
      ]
    },
    {
      path: '/member',
      name: 'MemberIndex',
      redirect: '/member/bq',
      meta: {
        title: '会籍说明'
      },
      components: {
        header: Header,
        content: MemberIndex,
        footer: Footer
      },
      children: [
        {
          path: 'bq',
          meta: '宝氢会籍',
          component: MemberContent
        },
        {
          path: 'other',
          meta: '其它会籍',
          component: MemberContent
        }
      ]
    },
    {
      path: '/login',
      name: 'LoginIndex',
      meta: {
        title: '登录'
      },
      components: {
        header: Header,
        content: LoginIndex,
        footer: Footer
      }
    },
    {
      path: '/register',
      name: 'RegisterIndex',
      meta: {
        title: '注册'
      },
      components: {
        header: Header,
        content: RegisterIndex,
        footer: Footer
      }
    },
    {
      path: '/mycenter',
      name: 'MycenterIndex',
      redirect: '/mycenter/info',
      meta: {
        title: '个人中心'
      },
      components: {
        header: Header,
        content: MycenterIndex,
        footer: Footer
      },
      children: [
        {
          path: 'info',
          meta: '基本信息',
          component: MyInfoContent
        },
        {
          path: 'detail',
          meta: '信息详情',
          component: MyDetailContent
        },
        {
          path: 'transfer',
          meta: '移交会籍',
          component: MyTransferContent
        },
        {
          path: 'update',
          meta: '密码防护',
          component: MyUpdateContent
        }
      ]
    },
    {
      path: '/success',
      name: 'success',
      meta: {
        title: '成功'
      },
      components: {
        header: Header,
        content: Success,
        footer: Footer
      }
    },
    {
      path: '/service',
      name: 'service',
      meta: {
        title: '服务条款'
      },
      components: {
        header: Header,
        content: Service,
        footer: Footer
      }
    },
    {
      path: '/help',
      name: 'HelpIndex',
      redirect: '/help/guide',
      meta: {
        title: '帮助说明'
      },
      components: {
        header: Header,
        content: HelpIndex,
        footer: Footer
      },
      children: [
        {
          path: 'guide',
          meta: '使用说明',
          component: HelpGuideIndex
        },
        {
          path: 'safe',
          meta: '安全防范',
          component: HelpSafeIndex
        }
      ]
    }
  ]
})
