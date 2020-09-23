import Vue from 'vue'
import VueResource from 'vue-resource'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(VueResource)
// 获取当前时间
const getTodayDate = (format) => {
    let todayDate = '';
    let date = new Date();
    let year = date.getFullYear();
    let month = checkDate(date.getMonth() + 1);
    let day = checkDate(date.getDate());
    if(format) { // 年月日 时分秒
        let hour = checkDate(date.getHours());
        let minute = checkDate(date.getMinutes());
        let second = checkDate(date.getSeconds());
        return year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
    }
    return year + '-' + month + '-' + day; // 年月日
}

// 日期补零
const checkDate = (date) => {
    if(Number(date) < 10) {
        return '0' + date;
    }
    return date;
}

const checkNull = (check_val, msg) => {
    let val = String(check_val);
    if(val == "" || val == "null" || val == "undefined") {
        return false;
    }
    return true;
}

const checkLogin = () => {
    let userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
        return true;
    } else {
        return false;
    }
}

const bindMobile = () => {
    let userInfo = JSON.parse(localStorage.getItem("userInfo"))
    if (userInfo) {
        if(!checkNull(userInfo.mobile)) {
            return false
        } else {
            return true
        }
    }
    return false
}

const Global = {
    // 线上接口地址
    apiUrl: "https://shop.h2h777.cn/index.php?s=/api",
    // 线上正式域名地址
    baseUrl: "http://www.h2h777.cn/#",
    // 线上静态资源地址
    staticUrl: "http://files.h2h777.cn/index/bqimg"
    // 线上静态资源视频地址
    // staticVedioUrl: "http://files.h2h777.cn/index/vedio"
}

const MemberLevel = {
    // 0 普通会员 1 资深会员 2 铂金会员 3 钻石会员 4 超级会员 5 顶级会员
    0: {
        name: "普通会员",
        price: 199,
        desc: "每年7800元/366瓶气",
        date: "永久"
    },
    1: {
        name: "资深会员",
        price: 7800,
        desc: "每年2999元/366瓶气",
        date: "2021-09-30"
    },
    2: {
        name: "铂金会员",
        price: 7800,
        desc: "每年2999元/366瓶气",
        date: "2023-09-30"
    },
    3: {
        name: "钻石会员",
        price: 7800,
        desc: "每年2999元/366瓶气",
        date: "2021-09-30"
    },
    4: {
        name: "超级会员",
        price: 7800,
        desc: "每年2999元/366瓶气",
        date: "2021-09-30"
    },
    5: {
        name: "顶级会员",
        price: 7800,
        desc: "目前仅作为内部测试",
        date: "永久"
    }
}

// this.$address[0].name
const Address = [
    {
        "id": 1,
        "pid": 0,
        "name": "北京市",
        "level": 1,
        "children": [
            {
                "id": 37,
                "pid": 1,
                "name": "东城区",
                "level": 2,
                "children2": [
                    {
                        "id": 567,
                        "pid": 37,
                        "name": "东华门街道",
                        "level": 3
                    },
                    {
                        "id": 568,
                        "pid": 37,
                        "name": "东四街道",
                        "level": 3
                    },
                    {
                        "id": 569,
                        "pid": 37,
                        "name": "东直门街道",
                        "level": 3
                    },
                    {
                        "id": 570,
                        "pid": 37,
                        "name": "交道口街道",
                        "level": 3
                    },
                    {
                        "id": 571,
                        "pid": 37,
                        "name": "北新桥街道",
                        "level": 3
                    },
                    {
                        "id": 572,
                        "pid": 37,
                        "name": "和平里街道",
                        "level": 3
                    },
                    {
                        "id": 573,
                        "pid": 37,
                        "name": "安定门街道",
                        "level": 3
                    },
                    {
                        "id": 574,
                        "pid": 37,
                        "name": "建国门街道",
                        "level": 3
                    },
                    {
                        "id": 575,
                        "pid": 37,
                        "name": "景山街道",
                        "level": 3
                    },
                    {
                        "id": 576,
                        "pid": 37,
                        "name": "朝阳门街道",
                        "level": 3
                    }
                ]
            },
            {
                "id": 38,
                "pid": 1,
                "name": "西城区",
                "level": 2,
                "children2": [
                    {
                        "id": 577,
                        "pid": 38,
                        "name": "什刹海街道",
                        "level": 3
                    },
                    {
                        "id": 578,
                        "pid": 38,
                        "name": "展览路街道",
                        "level": 3
                    },
                    {
                        "id": 579,
                        "pid": 38,
                        "name": "德胜街道",
                        "level": 3
                    },
                    {
                        "id": 580,
                        "pid": 38,
                        "name": "新街口街道",
                        "level": 3
                    },
                    {
                        "id": 581,
                        "pid": 38,
                        "name": "月坛街道",
                        "level": 3
                    },
                    {
                        "id": 582,
                        "pid": 38,
                        "name": "西长安街街道",
                        "level": 3
                    },
                    {
                        "id": 583,
                        "pid": 38,
                        "name": "金融街街道",
                        "level": 3
                    }
                ]
            },
            {
                "id": 39,
                "pid": 1,
                "name": "崇文区",
                "level": 2,
                "children2": [
                    {
                        "id": 584,
                        "pid": 39,
                        "name": "东花市街道",
                        "level": 3
                    },
                    {
                        "id": 585,
                        "pid": 39,
                        "name": "体育馆路街道",
                        "level": 3
                    },
                    {
                        "id": 586,
                        "pid": 39,
                        "name": "前门街道",
                        "level": 3
                    },
                    {
                        "id": 587,
                        "pid": 39,
                        "name": "天坛街道",
                        "level": 3
                    },
                    {
                        "id": 588,
                        "pid": 39,
                        "name": "崇文门外街道",
                        "level": 3
                    },
                    {
                        "id": 589,
                        "pid": 39,
                        "name": "永定门外街道",
                        "level": 3
                    },
                    {
                        "id": 590,
                        "pid": 39,
                        "name": "龙潭街道",
                        "level": 3
                    }
                ]
            },
            {
                "id": 40,
                "pid": 1,
                "name": "宣武区",
                "level": 2,
                "children2": [
                    {
                        "id": 591,
                        "pid": 40,
                        "name": "大栅栏街道",
                        "level": 3
                    },
                    {
                        "id": 592,
                        "pid": 40,
                        "name": "天桥街道",
                        "level": 3
                    },
                    {
                        "id": 593,
                        "pid": 40,
                        "name": "广安门内街道",
                        "level": 3
                    },
                    {
                        "id": 594,
                        "pid": 40,
                        "name": "广安门外街道",
                        "level": 3
                    },
                    {
                        "id": 595,
                        "pid": 40,
                        "name": "椿树街道",
                        "level": 3
                    },
                    {
                        "id": 596,
                        "pid": 40,
                        "name": "牛街街道",
                        "level": 3
                    },
                    {
                        "id": 597,
                        "pid": 40,
                        "name": "白纸坊街道",
                        "level": 3
                    },
                    {
                        "id": 598,
                        "pid": 40,
                        "name": "陶然亭街道",
                        "level": 3
                    }
                ]
            },
            {
                "id": 41,
                "pid": 1,
                "name": "朝阳区",
                "level": 2,
                "children2": [
                    {
                        "id": 599,
                        "pid": 41,
                        "name": "三里屯街道",
                        "level": 3
                    },
                    {
                        "id": 600,
                        "pid": 41,
                        "name": "三间房地区（三间房乡）",
                        "level": 3
                    },
                    {
                        "id": 601,
                        "pid": 41,
                        "name": "东坝地区（东坝乡）",
                        "level": 3
                    },
                    {
                        "id": 602,
                        "pid": 41,
                        "name": "东风地区（东风乡）",
                        "level": 3
                    },
                    {
                        "id": 603,
                        "pid": 41,
                        "name": "亚运村街道",
                        "level": 3
                    },
                    {
                        "id": 604,
                        "pid": 41,
                        "name": "八里庄街道",
                        "level": 3
                    },
                    {
                        "id": 605,
                        "pid": 41,
                        "name": "六里屯街道",
                        "level": 3
                    },
                    {
                        "id": 606,
                        "pid": 41,
                        "name": "劲松街道",
                        "level": 3
                    },
                    {
                        "id": 607,
                        "pid": 41,
                        "name": "十八里店地区（十八里店乡）",
                        "level": 3
                    },
                    {
                        "id": 608,
                        "pid": 41,
                        "name": "南磨房地区（南磨房乡）",
                        "level": 3
                    },
                    {
                        "id": 609,
                        "pid": 41,
                        "name": "双井街道",
                        "level": 3
                    },
                    {
                        "id": 610,
                        "pid": 41,
                        "name": "呼家楼街道",
                        "level": 3
                    },
                    {
                        "id": 611,
                        "pid": 41,
                        "name": "和平街街道",
                        "level": 3
                    },
                    {
                        "id": 612,
                        "pid": 41,
                        "name": "团结湖街道",
                        "level": 3
                    },
                    {
                        "id": 613,
                        "pid": 41,
                        "name": "垡头街道",
                        "level": 3
                    },
                    {
                        "id": 614,
                        "pid": 41,
                        "name": "大屯街道",
                        "level": 3
                    },
                    {
                        "id": 615,
                        "pid": 41,
                        "name": "太阳宫地区（太阳宫乡）",
                        "level": 3
                    },
                    {
                        "id": 616,
                        "pid": 41,
                        "name": "奥运村地区（奥运村乡）",
                        "level": 3
                    },
                    {
                        "id": 617,
                        "pid": 41,
                        "name": "孙河地区（孙河乡）",
                        "level": 3
                    },
                    {
                        "id": 618,
                        "pid": 41,
                        "name": "安贞街道",
                        "level": 3
                    },
                    {
                        "id": 619,
                        "pid": 41,
                        "name": "将台地区（将台乡）",
                        "level": 3
                    },
                    {
                        "id": 620,
                        "pid": 41,
                        "name": "小关街道",
                        "level": 3
                    },
                    {
                        "id": 621,
                        "pid": 41,
                        "name": "小红门地区（小红门乡）",
                        "level": 3
                    },
                    {
                        "id": 622,
                        "pid": 41,
                        "name": "崔各庄地区（崔各庄乡）",
                        "level": 3
                    },
                    {
                        "id": 623,
                        "pid": 41,
                        "name": "左家庄街道",
                        "level": 3
                    },
                    {
                        "id": 624,
                        "pid": 41,
                        "name": "常营回族地区（常营回族乡）",
                        "level": 3
                    },
                    {
                        "id": 625,
                        "pid": 41,
                        "name": "平房地区（平房乡）",
                        "level": 3
                    },
                    {
                        "id": 626,
                        "pid": 41,
                        "name": "建国门外街道",
                        "level": 3
                    },
                    {
                        "id": 627,
                        "pid": 41,
                        "name": "望京开发街道",
                        "level": 3
                    },
                    {
                        "id": 628,
                        "pid": 41,
                        "name": "望京街道",
                        "level": 3
                    },
                    {
                        "id": 629,
                        "pid": 41,
                        "name": "朝阳门外街道",
                        "level": 3
                    },
                    {
                        "id": 630,
                        "pid": 41,
                        "name": "来广营地区（来广营乡）",
                        "level": 3
                    },
                    {
                        "id": 631,
                        "pid": 41,
                        "name": "潘家园街道",
                        "level": 3
                    },
                    {
                        "id": 632,
                        "pid": 41,
                        "name": "王四营地区（王四营乡）",
                        "level": 3
                    },
                    {
                        "id": 633,
                        "pid": 41,
                        "name": "管庄地区（管庄乡）",
                        "level": 3
                    },
                    {
                        "id": 634,
                        "pid": 41,
                        "name": "豆各庄地区（豆各庄乡）",
                        "level": 3
                    },
                    {
                        "id": 635,
                        "pid": 41,
                        "name": "酒仙桥街道",
                        "level": 3
                    },
                    {
                        "id": 636,
                        "pid": 41,
                        "name": "金盏地区（金盏乡）",
                        "level": 3
                    },
                    {
                        "id": 637,
                        "pid": 41,
                        "name": "首都机场街道",
                        "level": 3
                    },
                    {
                        "id": 638,
                        "pid": 41,
                        "name": "香河园街道",
                        "level": 3
                    },
                    {
                        "id": 639,
                        "pid": 41,
                        "name": "高碑店地区（高碑店乡）",
                        "level": 3
                    },
                    {
                        "id": 640,
                        "pid": 41,
                        "name": "麦子店街道",
                        "level": 3
                    },
                    {
                        "id": 641,
                        "pid": 41,
                        "name": "黑庄户地区（黑庄户乡）",
                        "level": 3
                    }
                ]
            },
            {
                "id": 42,
                "pid": 1,
                "name": "丰台区",
                "level": 2,
                "children2": [
                    {
                        "id": 642,
                        "pid": 42,
                        "name": "东铁匠营街道",
                        "level": 3
                    },
                    {
                        "id": 643,
                        "pid": 42,
                        "name": "东高地街道",
                        "level": 3
                    },
                    {
                        "id": 644,
                        "pid": 42,
                        "name": "丰台街道",
                        "level": 3
                    },
                    {
                        "id": 645,
                        "pid": 42,
                        "name": "云岗街道",
                        "level": 3
                    },
                    {
                        "id": 646,
                        "pid": 42,
                        "name": "南苑乡",
                        "level": 3
                    },
                    {
                        "id": 647,
                        "pid": 42,
                        "name": "南苑街道",
                        "level": 3
                    },
                    {
                        "id": 648,
                        "pid": 42,
                        "name": "卢沟桥乡",
                        "level": 3
                    },
                    {
                        "id": 649,
                        "pid": 42,
                        "name": "卢沟桥街道",
                        "level": 3
                    },
                    {
                        "id": 650,
                        "pid": 42,
                        "name": "右安门街道",
                        "level": 3
                    },
                    {
                        "id": 651,
                        "pid": 42,
                        "name": "和义街道",
                        "level": 3
                    },
                    {
                        "id": 652,
                        "pid": 42,
                        "name": "大红门街道",
                        "level": 3
                    },
                    {
                        "id": 653,
                        "pid": 42,
                        "name": "太平桥街道",
                        "level": 3
                    },
                    {
                        "id": 654,
                        "pid": 42,
                        "name": "宛平城地区",
                        "level": 3
                    },
                    {
                        "id": 655,
                        "pid": 42,
                        "name": "新村街道",
                        "level": 3
                    },
                    {
                        "id": 656,
                        "pid": 42,
                        "name": "方庄地区",
                        "level": 3
                    },
                    {
                        "id": 657,
                        "pid": 42,
                        "name": "王佐镇",
                        "level": 3
                    },
                    {
                        "id": 658,
                        "pid": 42,
                        "name": "花乡乡",
                        "level": 3
                    },
                    {
                        "id": 659,
                        "pid": 42,
                        "name": "西罗园街道",
                        "level": 3
                    },
                    {
                        "id": 660,
                        "pid": 42,
                        "name": "长辛店街道",
                        "level": 3
                    },
                    {
                        "id": 661,
                        "pid": 42,
                        "name": "长辛店镇",
                        "level": 3
                    },
                    {
                        "id": 662,
                        "pid": 42,
                        "name": "马家堡街道",
                        "level": 3
                    }
                ]
            },
            {
                "id": 43,
                "pid": 1,
                "name": "石景山区",
                "level": 2,
                "children2": [
                    {
                        "id": 663,
                        "pid": 43,
                        "name": "五里坨街道",
                        "level": 3
                    },
                    {
                        "id": 664,
                        "pid": 43,
                        "name": "八宝山街道",
                        "level": 3
                    },
                    {
                        "id": 665,
                        "pid": 43,
                        "name": "八角街道",
                        "level": 3
                    },
                    {
                        "id": 666,
                        "pid": 43,
                        "name": "北辛安街道",
                        "level": 3
                    },
                    {
                        "id": 667,
                        "pid": 43,
                        "name": "古城街道",
                        "level": 3
                    },
                    {
                        "id": 668,
                        "pid": 43,
                        "name": "广宁街道",
                        "level": 3
                    },
                    {
                        "id": 669,
                        "pid": 43,
                        "name": "老山街道",
                        "level": 3
                    },
                    {
                        "id": 670,
                        "pid": 43,
                        "name": "苹果园街道",
                        "level": 3
                    },
                    {
                        "id": 671,
                        "pid": 43,
                        "name": "金顶街街道",
                        "level": 3
                    },
                    {
                        "id": 672,
                        "pid": 43,
                        "name": "鲁谷街道",
                        "level": 3
                    }
                ]
            },
            {
                "id": 44,
                "pid": 1,
                "name": "海淀区",
                "level": 2,
                "children2": [
                    {
                        "id": 673,
                        "pid": 44,
                        "name": "万寿路街道",
                        "level": 3
                    },
                    {
                        "id": 674,
                        "pid": 44,
                        "name": "万柳地区（海淀乡）",
                        "level": 3
                    },
                    {
                        "id": 675,
                        "pid": 44,
                        "name": "上地街道",
                        "level": 3
                    },
                    {
                        "id": 676,
                        "pid": 44,
                        "name": "上庄镇",
                        "level": 3
                    },
                    {
                        "id": 677,
                        "pid": 44,
                        "name": "东升地区（东升乡）",
                        "level": 3
                    },
                    {
                        "id": 678,
                        "pid": 44,
                        "name": "中关村街道",
                        "level": 3
                    },
                    {
                        "id": 679,
                        "pid": 44,
                        "name": "八里庄街道",
                        "level": 3
                    },
                    {
                        "id": 680,
                        "pid": 44,
                        "name": "北下关街道",
                        "level": 3
                    },
                    {
                        "id": 681,
                        "pid": 44,
                        "name": "北太平庄街道",
                        "level": 3
                    },
                    {
                        "id": 682,
                        "pid": 44,
                        "name": "四季青镇",
                        "level": 3
                    },
                    {
                        "id": 683,
                        "pid": 44,
                        "name": "学院路街道",
                        "level": 3
                    },
                    {
                        "id": 684,
                        "pid": 44,
                        "name": "曙光街道",
                        "level": 3
                    },
                    {
                        "id": 685,
                        "pid": 44,
                        "name": "永定路街道",
                        "level": 3
                    },
                    {
                        "id": 686,
                        "pid": 44,
                        "name": "海淀街道",
                        "level": 3
                    },
                    {
                        "id": 687,
                        "pid": 44,
                        "name": "清华园街道",
                        "level": 3
                    },
                    {
                        "id": 688,
                        "pid": 44,
                        "name": "清河街道",
                        "level": 3
                    },
                    {
                        "id": 689,
                        "pid": 44,
                        "name": "温泉镇",
                        "level": 3
                    },
                    {
                        "id": 690,
                        "pid": 44,
                        "name": "燕园街道",
                        "level": 3
                    },
                    {
                        "id": 691,
                        "pid": 44,
                        "name": "甘家口街道",
                        "level": 3
                    },
                    {
                        "id": 692,
                        "pid": 44,
                        "name": "田村路街道",
                        "level": 3
                    },
                    {
                        "id": 693,
                        "pid": 44,
                        "name": "紫竹院街道",
                        "level": 3
                    },
                    {
                        "id": 694,
                        "pid": 44,
                        "name": "羊坊店街道",
                        "level": 3
                    },
                    {
                        "id": 695,
                        "pid": 44,
                        "name": "花园路街道",
                        "level": 3
                    },
                    {
                        "id": 696,
                        "pid": 44,
                        "name": "苏家坨镇",
                        "level": 3
                    },
                    {
                        "id": 697,
                        "pid": 44,
                        "name": "西三旗街道",
                        "level": 3
                    },
                    {
                        "id": 698,
                        "pid": 44,
                        "name": "西北旺镇",
                        "level": 3
                    },
                    {
                        "id": 699,
                        "pid": 44,
                        "name": "青龙桥街道",
                        "level": 3
                    },
                    {
                        "id": 700,
                        "pid": 44,
                        "name": "香山街道",
                        "level": 3
                    },
                    {
                        "id": 701,
                        "pid": 44,
                        "name": "马连洼街道",
                        "level": 3
                    }
                ]
            },
            {
                "id": 45,
                "pid": 1,
                "name": "门头沟区",
                "level": 2,
                "children2": [
                    {
                        "id": 702,
                        "pid": 45,
                        "name": "东辛房街道",
                        "level": 3
                    },
                    {
                        "id": 703,
                        "pid": 45,
                        "name": "军庄镇",
                        "level": 3
                    },
                    {
                        "id": 704,
                        "pid": 45,
                        "name": "城子街道",
                        "level": 3
                    },
                    {
                        "id": 705,
                        "pid": 45,
                        "name": "大台街道",
                        "level": 3
                    },
                    {
                        "id": 706,
                        "pid": 45,
                        "name": "大峪街道",
                        "level": 3
                    },
                    {
                        "id": 707,
                        "pid": 45,
                        "name": "妙峰山镇",
                        "level": 3
                    },
                    {
                        "id": 708,
                        "pid": 45,
                        "name": "斋堂镇",
                        "level": 3
                    },
                    {
                        "id": 709,
                        "pid": 45,
                        "name": "永定镇",
                        "level": 3
                    },
                    {
                        "id": 710,
                        "pid": 45,
                        "name": "清水镇",
                        "level": 3
                    },
                    {
                        "id": 711,
                        "pid": 45,
                        "name": "潭柘寺镇",
                        "level": 3
                    },
                    {
                        "id": 712,
                        "pid": 45,
                        "name": "王平地区",
                        "level": 3
                    },
                    {
                        "id": 713,
                        "pid": 45,
                        "name": "雁翅镇",
                        "level": 3
                    },
                    {
                        "id": 714,
                        "pid": 45,
                        "name": "龙泉镇",
                        "level": 3
                    }
                ]
            },
            {
                "id": 46,
                "pid": 1,
                "name": "房山区",
                "level": 2,
                "children2": [
                    {
                        "id": 715,
                        "pid": 46,
                        "name": "东风街道",
                        "level": 3
                    },
                    {
                        "id": 716,
                        "pid": 46,
                        "name": "佛子庄乡",
                        "level": 3
                    },
                    {
                        "id": 717,
                        "pid": 46,
                        "name": "十渡镇",
                        "level": 3
                    },
                    {
                        "id": 718,
                        "pid": 46,
                        "name": "南窖乡",
                        "level": 3
                    },
                    {
                        "id": 719,
                        "pid": 46,
                        "name": "史家营乡",
                        "level": 3
                    },
                    {
                        "id": 720,
                        "pid": 46,
                        "name": "向阳街道",
                        "level": 3
                    },
                    {
                        "id": 721,
                        "pid": 46,
                        "name": "周口店地区",
                        "level": 3
                    },
                    {
                        "id": 722,
                        "pid": 46,
                        "name": "城关街道",
                        "level": 3
                    },
                    {
                        "id": 723,
                        "pid": 46,
                        "name": "大安山乡",
                        "level": 3
                    },
                    {
                        "id": 724,
                        "pid": 46,
                        "name": "大石窝镇",
                        "level": 3
                    },
                    {
                        "id": 725,
                        "pid": 46,
                        "name": "张坊镇",
                        "level": 3
                    },
                    {
                        "id": 726,
                        "pid": 46,
                        "name": "拱辰街道",
                        "level": 3
                    },
                    {
                        "id": 727,
                        "pid": 46,
                        "name": "新镇街道",
                        "level": 3
                    },
                    {
                        "id": 728,
                        "pid": 46,
                        "name": "星城街道",
                        "level": 3
                    },
                    {
                        "id": 729,
                        "pid": 46,
                        "name": "河北镇",
                        "level": 3
                    },
                    {
                        "id": 730,
                        "pid": 46,
                        "name": "琉璃河地区",
                        "level": 3
                    },
                    {
                        "id": 731,
                        "pid": 46,
                        "name": "石楼镇",
                        "level": 3
                    },
                    {
                        "id": 732,
                        "pid": 46,
                        "name": "窦店镇",
                        "level": 3
                    },
                    {
                        "id": 733,
                        "pid": 46,
                        "name": "良乡地区",
                        "level": 3
                    },
                    {
                        "id": 734,
                        "pid": 46,
                        "name": "蒲洼乡",
                        "level": 3
                    },
                    {
                        "id": 735,
                        "pid": 46,
                        "name": "西潞街道",
                        "level": 3
                    },
                    {
                        "id": 736,
                        "pid": 46,
                        "name": "迎风街道",
                        "level": 3
                    },
                    {
                        "id": 737,
                        "pid": 46,
                        "name": "长沟镇",
                        "level": 3
                    },
                    {
                        "id": 738,
                        "pid": 46,
                        "name": "长阳镇",
                        "level": 3
                    },
                    {
                        "id": 739,
                        "pid": 46,
                        "name": "阎村镇",
                        "level": 3
                    },
                    {
                        "id": 740,
                        "pid": 46,
                        "name": "霞云岭乡",
                        "level": 3
                    },
                    {
                        "id": 741,
                        "pid": 46,
                        "name": "青龙湖镇",
                        "level": 3
                    },
                    {
                        "id": 742,
                        "pid": 46,
                        "name": "韩村河镇",
                        "level": 3
                    }
                ]
            },
            {
                "id": 47,
                "pid": 1,
                "name": "通州区",
                "level": 2,
                "children2": [
                    {
                        "id": 743,
                        "pid": 47,
                        "name": "中仓街道",
                        "level": 3
                    },
                    {
                        "id": 744,
                        "pid": 47,
                        "name": "于家务回族乡",
                        "level": 3
                    },
                    {
                        "id": 745,
                        "pid": 47,
                        "name": "北苑街道",
                        "level": 3
                    },
                    {
                        "id": 746,
                        "pid": 47,
                        "name": "台湖镇",
                        "level": 3
                    },
                    {
                        "id": 747,
                        "pid": 47,
                        "name": "宋庄镇",
                        "level": 3
                    },
                    {
                        "id": 748,
                        "pid": 47,
                        "name": "张家湾镇",
                        "level": 3
                    },
                    {
                        "id": 749,
                        "pid": 47,
                        "name": "新华街道",
                        "level": 3
                    },
                    {
                        "id": 750,
                        "pid": 47,
                        "name": "梨园地区",
                        "level": 3
                    },
                    {
                        "id": 751,
                        "pid": 47,
                        "name": "永乐店镇",
                        "level": 3
                    },
                    {
                        "id": 752,
                        "pid": 47,
                        "name": "永顺地区",
                        "level": 3
                    },
                    {
                        "id": 753,
                        "pid": 47,
                        "name": "漷县镇",
                        "level": 3
                    },
                    {
                        "id": 754,
                        "pid": 47,
                        "name": "潞城镇",
                        "level": 3
                    },
                    {
                        "id": 755,
                        "pid": 47,
                        "name": "玉桥街道",
                        "level": 3
                    },
                    {
                        "id": 756,
                        "pid": 47,
                        "name": "西集镇",
                        "level": 3
                    },
                    {
                        "id": 757,
                        "pid": 47,
                        "name": "马驹桥镇",
                        "level": 3
                    }
                ]
            },
            {
                "id": 48,
                "pid": 1,
                "name": "顺义区",
                "level": 2,
                "children2": [
                    {
                        "id": 758,
                        "pid": 48,
                        "name": "仁和地区",
                        "level": 3
                    },
                    {
                        "id": 759,
                        "pid": 48,
                        "name": "光明街道",
                        "level": 3
                    },
                    {
                        "id": 760,
                        "pid": 48,
                        "name": "北务镇",
                        "level": 3
                    },
                    {
                        "id": 761,
                        "pid": 48,
                        "name": "北小营镇",
                        "level": 3
                    },
                    {
                        "id": 762,
                        "pid": 48,
                        "name": "北石槽镇",
                        "level": 3
                    },
                    {
                        "id": 763,
                        "pid": 48,
                        "name": "南彩镇",
                        "level": 3
                    },
                    {
                        "id": 764,
                        "pid": 48,
                        "name": "南法信地区",
                        "level": 3
                    },
                    {
                        "id": 765,
                        "pid": 48,
                        "name": "后沙峪地区",
                        "level": 3
                    },
                    {
                        "id": 766,
                        "pid": 48,
                        "name": "大孙各庄镇",
                        "level": 3
                    },
                    {
                        "id": 767,
                        "pid": 48,
                        "name": "天竺地区",
                        "level": 3
                    },
                    {
                        "id": 768,
                        "pid": 48,
                        "name": "张镇",
                        "level": 3
                    },
                    {
                        "id": 769,
                        "pid": 48,
                        "name": "木林镇",
                        "level": 3
                    },
                    {
                        "id": 770,
                        "pid": 48,
                        "name": "李桥镇",
                        "level": 3
                    },
                    {
                        "id": 771,
                        "pid": 48,
                        "name": "李遂镇",
                        "level": 3
                    },
                    {
                        "id": 772,
                        "pid": 48,
                        "name": "杨镇地区",
                        "level": 3
                    },
                    {
                        "id": 773,
                        "pid": 48,
                        "name": "牛栏山地区",
                        "level": 3
                    },
                    {
                        "id": 774,
                        "pid": 48,
                        "name": "石园街道",
                        "level": 3
                    },
                    {
                        "id": 775,
                        "pid": 48,
                        "name": "胜利街道",
                        "level": 3
                    },
                    {
                        "id": 776,
                        "pid": 48,
                        "name": "赵全营镇",
                        "level": 3
                    },
                    {
                        "id": 777,
                        "pid": 48,
                        "name": "马坡地区",
                        "level": 3
                    },
                    {
                        "id": 778,
                        "pid": 48,
                        "name": "高丽营镇",
                        "level": 3
                    },
                    {
                        "id": 779,
                        "pid": 48,
                        "name": "龙湾屯镇",
                        "level": 3
                    }
                ]
            },
            {
                "id": 49,
                "pid": 1,
                "name": "昌平区",
                "level": 2,
                "children2": [
                    {
                        "id": 780,
                        "pid": 49,
                        "name": "东小口地区",
                        "level": 3
                    },
                    {
                        "id": 781,
                        "pid": 49,
                        "name": "兴寿镇",
                        "level": 3
                    },
                    {
                        "id": 782,
                        "pid": 49,
                        "name": "北七家镇",
                        "level": 3
                    },
                    {
                        "id": 783,
                        "pid": 49,
                        "name": "十三陵镇",
                        "level": 3
                    },
                    {
                        "id": 784,
                        "pid": 49,
                        "name": "南口地区",
                        "level": 3
                    },
                    {
                        "id": 785,
                        "pid": 49,
                        "name": "南邵镇",
                        "level": 3
                    },
                    {
                        "id": 786,
                        "pid": 49,
                        "name": "回龙观地区",
                        "level": 3
                    },
                    {
                        "id": 787,
                        "pid": 49,
                        "name": "城北街道",
                        "level": 3
                    },
                    {
                        "id": 788,
                        "pid": 49,
                        "name": "城南街道",
                        "level": 3
                    },
                    {
                        "id": 789,
                        "pid": 49,
                        "name": "小汤山镇",
                        "level": 3
                    },
                    {
                        "id": 790,
                        "pid": 49,
                        "name": "崔村镇",
                        "level": 3
                    },
                    {
                        "id": 791,
                        "pid": 49,
                        "name": "沙河地区",
                        "level": 3
                    },
                    {
                        "id": 792,
                        "pid": 49,
                        "name": "流村镇",
                        "level": 3
                    },
                    {
                        "id": 793,
                        "pid": 49,
                        "name": "百善镇",
                        "level": 3
                    },
                    {
                        "id": 794,
                        "pid": 49,
                        "name": "长陵镇",
                        "level": 3
                    },
                    {
                        "id": 795,
                        "pid": 49,
                        "name": "阳坊镇",
                        "level": 3
                    },
                    {
                        "id": 796,
                        "pid": 49,
                        "name": "马池口地区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 50,
                "pid": 1,
                "name": "大兴区",
                "level": 2,
                "children2": [
                    {
                        "id": 797,
                        "pid": 50,
                        "name": "亦庄地区（亦庄镇）",
                        "level": 3
                    },
                    {
                        "id": 798,
                        "pid": 50,
                        "name": "兴丰街道",
                        "level": 3
                    },
                    {
                        "id": 799,
                        "pid": 50,
                        "name": "北臧村镇",
                        "level": 3
                    },
                    {
                        "id": 800,
                        "pid": 50,
                        "name": "安定镇",
                        "level": 3
                    },
                    {
                        "id": 801,
                        "pid": 50,
                        "name": "庞各庄镇",
                        "level": 3
                    },
                    {
                        "id": 802,
                        "pid": 50,
                        "name": "旧宫地区（旧宫镇）",
                        "level": 3
                    },
                    {
                        "id": 803,
                        "pid": 50,
                        "name": "林校路街道",
                        "level": 3
                    },
                    {
                        "id": 804,
                        "pid": 50,
                        "name": "榆垡镇",
                        "level": 3
                    },
                    {
                        "id": 805,
                        "pid": 50,
                        "name": "清源街道",
                        "level": 3
                    },
                    {
                        "id": 806,
                        "pid": 50,
                        "name": "瀛海镇",
                        "level": 3
                    },
                    {
                        "id": 807,
                        "pid": 50,
                        "name": "礼贤镇",
                        "level": 3
                    },
                    {
                        "id": 808,
                        "pid": 50,
                        "name": "西红门地区（西红门镇）",
                        "level": 3
                    },
                    {
                        "id": 809,
                        "pid": 50,
                        "name": "采育镇",
                        "level": 3
                    },
                    {
                        "id": 810,
                        "pid": 50,
                        "name": "长子营镇",
                        "level": 3
                    },
                    {
                        "id": 811,
                        "pid": 50,
                        "name": "青云店镇",
                        "level": 3
                    },
                    {
                        "id": 812,
                        "pid": 50,
                        "name": "魏善庄镇",
                        "level": 3
                    },
                    {
                        "id": 813,
                        "pid": 50,
                        "name": "黄村地区（黄村镇）",
                        "level": 3
                    }
                ]
            },
            {
                "id": 51,
                "pid": 1,
                "name": "怀柔区",
                "level": 2,
                "children2": [
                    {
                        "id": 814,
                        "pid": 51,
                        "name": "九渡河镇",
                        "level": 3
                    },
                    {
                        "id": 815,
                        "pid": 51,
                        "name": "北房镇",
                        "level": 3
                    },
                    {
                        "id": 816,
                        "pid": 51,
                        "name": "喇叭沟门满族乡",
                        "level": 3
                    },
                    {
                        "id": 817,
                        "pid": 51,
                        "name": "宝山镇",
                        "level": 3
                    },
                    {
                        "id": 818,
                        "pid": 51,
                        "name": "庙城地区",
                        "level": 3
                    },
                    {
                        "id": 819,
                        "pid": 51,
                        "name": "怀北镇",
                        "level": 3
                    },
                    {
                        "id": 820,
                        "pid": 51,
                        "name": "怀柔地区",
                        "level": 3
                    },
                    {
                        "id": 821,
                        "pid": 51,
                        "name": "杨宋镇",
                        "level": 3
                    },
                    {
                        "id": 822,
                        "pid": 51,
                        "name": "桥梓镇",
                        "level": 3
                    },
                    {
                        "id": 823,
                        "pid": 51,
                        "name": "汤河口镇",
                        "level": 3
                    },
                    {
                        "id": 824,
                        "pid": 51,
                        "name": "泉河街道",
                        "level": 3
                    },
                    {
                        "id": 825,
                        "pid": 51,
                        "name": "渤海镇",
                        "level": 3
                    },
                    {
                        "id": 826,
                        "pid": 51,
                        "name": "琉璃庙镇",
                        "level": 3
                    },
                    {
                        "id": 827,
                        "pid": 51,
                        "name": "长哨营满族乡",
                        "level": 3
                    },
                    {
                        "id": 828,
                        "pid": 51,
                        "name": "雁栖地区",
                        "level": 3
                    },
                    {
                        "id": 829,
                        "pid": 51,
                        "name": "龙山街道",
                        "level": 3
                    }
                ]
            },
            {
                "id": 52,
                "pid": 1,
                "name": "平谷区",
                "level": 2,
                "children2": [
                    {
                        "id": 830,
                        "pid": 52,
                        "name": "东高村镇",
                        "level": 3
                    },
                    {
                        "id": 831,
                        "pid": 52,
                        "name": "兴谷街道",
                        "level": 3
                    },
                    {
                        "id": 832,
                        "pid": 52,
                        "name": "刘家店镇",
                        "level": 3
                    },
                    {
                        "id": 833,
                        "pid": 52,
                        "name": "南独乐河镇",
                        "level": 3
                    },
                    {
                        "id": 834,
                        "pid": 52,
                        "name": "夏各庄镇",
                        "level": 3
                    },
                    {
                        "id": 835,
                        "pid": 52,
                        "name": "大兴庄镇",
                        "level": 3
                    },
                    {
                        "id": 836,
                        "pid": 52,
                        "name": "大华山镇",
                        "level": 3
                    },
                    {
                        "id": 837,
                        "pid": 52,
                        "name": "山东庄镇",
                        "level": 3
                    },
                    {
                        "id": 838,
                        "pid": 52,
                        "name": "峪口地区",
                        "level": 3
                    },
                    {
                        "id": 839,
                        "pid": 52,
                        "name": "渔阳地区",
                        "level": 3
                    },
                    {
                        "id": 840,
                        "pid": 52,
                        "name": "滨河街道",
                        "level": 3
                    },
                    {
                        "id": 841,
                        "pid": 52,
                        "name": "熊儿寨乡",
                        "level": 3
                    },
                    {
                        "id": 842,
                        "pid": 52,
                        "name": "王辛庄镇",
                        "level": 3
                    },
                    {
                        "id": 843,
                        "pid": 52,
                        "name": "金海湖地区",
                        "level": 3
                    },
                    {
                        "id": 844,
                        "pid": 52,
                        "name": "镇罗营镇",
                        "level": 3
                    },
                    {
                        "id": 845,
                        "pid": 52,
                        "name": "马坊地区",
                        "level": 3
                    },
                    {
                        "id": 846,
                        "pid": 52,
                        "name": "马昌营镇",
                        "level": 3
                    },
                    {
                        "id": 847,
                        "pid": 52,
                        "name": "黄松峪乡",
                        "level": 3
                    }
                ]
            },
            {
                "id": 53,
                "pid": 1,
                "name": "密云县",
                "level": 2,
                "children2": [
                    {
                        "id": 848,
                        "pid": 53,
                        "name": "不老屯镇",
                        "level": 3
                    },
                    {
                        "id": 849,
                        "pid": 53,
                        "name": "东邵渠镇",
                        "level": 3
                    },
                    {
                        "id": 850,
                        "pid": 53,
                        "name": "冯家峪镇",
                        "level": 3
                    },
                    {
                        "id": 851,
                        "pid": 53,
                        "name": "北庄镇",
                        "level": 3
                    },
                    {
                        "id": 852,
                        "pid": 53,
                        "name": "十里堡镇",
                        "level": 3
                    },
                    {
                        "id": 853,
                        "pid": 53,
                        "name": "古北口镇",
                        "level": 3
                    },
                    {
                        "id": 854,
                        "pid": 53,
                        "name": "大城子镇",
                        "level": 3
                    },
                    {
                        "id": 855,
                        "pid": 53,
                        "name": "太师屯镇",
                        "level": 3
                    },
                    {
                        "id": 856,
                        "pid": 53,
                        "name": "密云镇",
                        "level": 3
                    },
                    {
                        "id": 857,
                        "pid": 53,
                        "name": "巨各庄镇",
                        "level": 3
                    },
                    {
                        "id": 858,
                        "pid": 53,
                        "name": "新城子镇",
                        "level": 3
                    },
                    {
                        "id": 859,
                        "pid": 53,
                        "name": "果园街道",
                        "level": 3
                    },
                    {
                        "id": 860,
                        "pid": 53,
                        "name": "檀营地区（檀营满族蒙古族乡）",
                        "level": 3
                    },
                    {
                        "id": 861,
                        "pid": 53,
                        "name": "河南寨镇",
                        "level": 3
                    },
                    {
                        "id": 862,
                        "pid": 53,
                        "name": "溪翁庄镇",
                        "level": 3
                    },
                    {
                        "id": 863,
                        "pid": 53,
                        "name": "石城镇",
                        "level": 3
                    },
                    {
                        "id": 864,
                        "pid": 53,
                        "name": "穆家峪镇",
                        "level": 3
                    },
                    {
                        "id": 865,
                        "pid": 53,
                        "name": "西田各庄镇",
                        "level": 3
                    },
                    {
                        "id": 866,
                        "pid": 53,
                        "name": "高岭镇",
                        "level": 3
                    },
                    {
                        "id": 867,
                        "pid": 53,
                        "name": "鼓楼街道",
                        "level": 3
                    }
                ]
            },
            {
                "id": 54,
                "pid": 1,
                "name": "延庆县",
                "level": 2,
                "children2": [
                    {
                        "id": 868,
                        "pid": 54,
                        "name": "井庄镇",
                        "level": 3
                    },
                    {
                        "id": 869,
                        "pid": 54,
                        "name": "八达岭镇",
                        "level": 3
                    },
                    {
                        "id": 870,
                        "pid": 54,
                        "name": "刘斌堡乡",
                        "level": 3
                    },
                    {
                        "id": 871,
                        "pid": 54,
                        "name": "千家店镇",
                        "level": 3
                    },
                    {
                        "id": 872,
                        "pid": 54,
                        "name": "四海镇",
                        "level": 3
                    },
                    {
                        "id": 873,
                        "pid": 54,
                        "name": "大庄科乡",
                        "level": 3
                    },
                    {
                        "id": 874,
                        "pid": 54,
                        "name": "大榆树镇",
                        "level": 3
                    },
                    {
                        "id": 875,
                        "pid": 54,
                        "name": "康庄镇",
                        "level": 3
                    },
                    {
                        "id": 876,
                        "pid": 54,
                        "name": "延庆镇",
                        "level": 3
                    },
                    {
                        "id": 877,
                        "pid": 54,
                        "name": "张山营镇",
                        "level": 3
                    },
                    {
                        "id": 878,
                        "pid": 54,
                        "name": "旧县镇",
                        "level": 3
                    },
                    {
                        "id": 879,
                        "pid": 54,
                        "name": "永宁镇",
                        "level": 3
                    },
                    {
                        "id": 880,
                        "pid": 54,
                        "name": "沈家营镇",
                        "level": 3
                    },
                    {
                        "id": 881,
                        "pid": 54,
                        "name": "珍珠泉乡",
                        "level": 3
                    },
                    {
                        "id": 882,
                        "pid": 54,
                        "name": "香营乡",
                        "level": 3
                    }
                ]
            }
        ]
    },
    {
        "id": 2,
        "pid": 0,
        "name": "天津市",
        "level": 1,
        "children": [
            {
                "id": 55,
                "pid": 2,
                "name": "和平区",
                "level": 2,
                "children2": [
                    {
                        "id": 883,
                        "pid": 55,
                        "name": "体育馆街道",
                        "level": 3
                    },
                    {
                        "id": 884,
                        "pid": 55,
                        "name": "劝业场街道",
                        "level": 3
                    },
                    {
                        "id": 885,
                        "pid": 55,
                        "name": "南市街道",
                        "level": 3
                    },
                    {
                        "id": 886,
                        "pid": 55,
                        "name": "南营门街道",
                        "level": 3
                    },
                    {
                        "id": 887,
                        "pid": 55,
                        "name": "小白楼街道",
                        "level": 3
                    },
                    {
                        "id": 888,
                        "pid": 55,
                        "name": "新兴街道",
                        "level": 3
                    }
                ]
            },
            {
                "id": 56,
                "pid": 2,
                "name": "河东区",
                "level": 2,
                "children2": [
                    {
                        "id": 889,
                        "pid": 56,
                        "name": "上杭路街道",
                        "level": 3
                    },
                    {
                        "id": 890,
                        "pid": 56,
                        "name": "东新街道",
                        "level": 3
                    },
                    {
                        "id": 891,
                        "pid": 56,
                        "name": "中山门街道",
                        "level": 3
                    },
                    {
                        "id": 892,
                        "pid": 56,
                        "name": "二号桥街道",
                        "level": 3
                    },
                    {
                        "id": 893,
                        "pid": 56,
                        "name": "向阳楼街道",
                        "level": 3
                    },
                    {
                        "id": 894,
                        "pid": 56,
                        "name": "唐家口街道",
                        "level": 3
                    },
                    {
                        "id": 895,
                        "pid": 56,
                        "name": "大王庄街道",
                        "level": 3
                    },
                    {
                        "id": 896,
                        "pid": 56,
                        "name": "大直沽街道",
                        "level": 3
                    },
                    {
                        "id": 897,
                        "pid": 56,
                        "name": "天津铁厂街道",
                        "level": 3
                    },
                    {
                        "id": 898,
                        "pid": 56,
                        "name": "富民路街道",
                        "level": 3
                    },
                    {
                        "id": 899,
                        "pid": 56,
                        "name": "常州道街道",
                        "level": 3
                    },
                    {
                        "id": 900,
                        "pid": 56,
                        "name": "春华街道",
                        "level": 3
                    },
                    {
                        "id": 901,
                        "pid": 56,
                        "name": "鲁山道街道",
                        "level": 3
                    }
                ]
            },
            {
                "id": 57,
                "pid": 2,
                "name": "河西区",
                "level": 2,
                "children2": [
                    {
                        "id": 902,
                        "pid": 57,
                        "name": "下瓦房街道",
                        "level": 3
                    },
                    {
                        "id": 903,
                        "pid": 57,
                        "name": "东海街道",
                        "level": 3
                    },
                    {
                        "id": 904,
                        "pid": 57,
                        "name": "友谊路街道",
                        "level": 3
                    },
                    {
                        "id": 905,
                        "pid": 57,
                        "name": "大营门街道",
                        "level": 3
                    },
                    {
                        "id": 906,
                        "pid": 57,
                        "name": "天塔街道",
                        "level": 3
                    },
                    {
                        "id": 907,
                        "pid": 57,
                        "name": "尖山街道",
                        "level": 3
                    },
                    {
                        "id": 908,
                        "pid": 57,
                        "name": "挂甲寺街道",
                        "level": 3
                    },
                    {
                        "id": 909,
                        "pid": 57,
                        "name": "柳林街道",
                        "level": 3
                    },
                    {
                        "id": 910,
                        "pid": 57,
                        "name": "桃园街道",
                        "level": 3
                    },
                    {
                        "id": 911,
                        "pid": 57,
                        "name": "梅江街道",
                        "level": 3
                    },
                    {
                        "id": 912,
                        "pid": 57,
                        "name": "越秀路街道",
                        "level": 3
                    },
                    {
                        "id": 913,
                        "pid": 57,
                        "name": "陈塘庄街道",
                        "level": 3
                    },
                    {
                        "id": 914,
                        "pid": 57,
                        "name": "马场街道",
                        "level": 3
                    }
                ]
            },
            {
                "id": 58,
                "pid": 2,
                "name": "南开区",
                "level": 2,
                "children2": [
                    {
                        "id": 915,
                        "pid": 58,
                        "name": "万兴街道",
                        "level": 3
                    },
                    {
                        "id": 916,
                        "pid": 58,
                        "name": "体育中心街道",
                        "level": 3
                    },
                    {
                        "id": 917,
                        "pid": 58,
                        "name": "八里台街道",
                        "level": 3
                    },
                    {
                        "id": 918,
                        "pid": 58,
                        "name": "兴南街道",
                        "level": 3
                    },
                    {
                        "id": 919,
                        "pid": 58,
                        "name": "华苑街道",
                        "level": 3
                    },
                    {
                        "id": 920,
                        "pid": 58,
                        "name": "向阳路街道",
                        "level": 3
                    },
                    {
                        "id": 921,
                        "pid": 58,
                        "name": "嘉陵道街道",
                        "level": 3
                    },
                    {
                        "id": 922,
                        "pid": 58,
                        "name": "学府街道",
                        "level": 3
                    },
                    {
                        "id": 923,
                        "pid": 58,
                        "name": "广开街道",
                        "level": 3
                    },
                    {
                        "id": 924,
                        "pid": 58,
                        "name": "王顶堤街道",
                        "level": 3
                    },
                    {
                        "id": 925,
                        "pid": 58,
                        "name": "长虹街道",
                        "level": 3
                    },
                    {
                        "id": 926,
                        "pid": 58,
                        "name": "鼓楼街道",
                        "level": 3
                    }
                ]
            },
            {
                "id": 59,
                "pid": 2,
                "name": "河北区",
                "level": 2,
                "children2": [
                    {
                        "id": 927,
                        "pid": 59,
                        "name": "光复道街道",
                        "level": 3
                    },
                    {
                        "id": 928,
                        "pid": 59,
                        "name": "宁园街道",
                        "level": 3
                    },
                    {
                        "id": 929,
                        "pid": 59,
                        "name": "建昌道街道",
                        "level": 3
                    },
                    {
                        "id": 930,
                        "pid": 59,
                        "name": "新开河街道",
                        "level": 3
                    },
                    {
                        "id": 931,
                        "pid": 59,
                        "name": "月牙河街道",
                        "level": 3
                    },
                    {
                        "id": 932,
                        "pid": 59,
                        "name": "望海楼街道",
                        "level": 3
                    },
                    {
                        "id": 933,
                        "pid": 59,
                        "name": "江都路街道",
                        "level": 3
                    },
                    {
                        "id": 934,
                        "pid": 59,
                        "name": "王串场街道",
                        "level": 3
                    },
                    {
                        "id": 935,
                        "pid": 59,
                        "name": "铁东路街道",
                        "level": 3
                    },
                    {
                        "id": 936,
                        "pid": 59,
                        "name": "鸿顺里街道",
                        "level": 3
                    }
                ]
            },
            {
                "id": 60,
                "pid": 2,
                "name": "红桥区",
                "level": 2,
                "children2": [
                    {
                        "id": 937,
                        "pid": 60,
                        "name": "丁字沽街道",
                        "level": 3
                    },
                    {
                        "id": 938,
                        "pid": 60,
                        "name": "三条石街道",
                        "level": 3
                    },
                    {
                        "id": 939,
                        "pid": 60,
                        "name": "双环村街道",
                        "level": 3
                    },
                    {
                        "id": 940,
                        "pid": 60,
                        "name": "咸阳北路街道",
                        "level": 3
                    },
                    {
                        "id": 941,
                        "pid": 60,
                        "name": "大胡同街道",
                        "level": 3
                    },
                    {
                        "id": 942,
                        "pid": 60,
                        "name": "芥园道街道",
                        "level": 3
                    },
                    {
                        "id": 943,
                        "pid": 60,
                        "name": "西于庄街道",
                        "level": 3
                    },
                    {
                        "id": 944,
                        "pid": 60,
                        "name": "西沽街道",
                        "level": 3
                    },
                    {
                        "id": 945,
                        "pid": 60,
                        "name": "邵公庄街道",
                        "level": 3
                    },
                    {
                        "id": 946,
                        "pid": 60,
                        "name": "铃铛阁街道",
                        "level": 3
                    }
                ]
            },
            {
                "id": 61,
                "pid": 2,
                "name": "塘沽区",
                "level": 2,
                "children2": [
                    {
                        "id": 947,
                        "pid": 61,
                        "name": "三槐路街道",
                        "level": 3
                    },
                    {
                        "id": 948,
                        "pid": 61,
                        "name": "北塘街道",
                        "level": 3
                    },
                    {
                        "id": 949,
                        "pid": 61,
                        "name": "向阳街道",
                        "level": 3
                    },
                    {
                        "id": 950,
                        "pid": 61,
                        "name": "大沽街道",
                        "level": 3
                    },
                    {
                        "id": 951,
                        "pid": 61,
                        "name": "新城镇",
                        "level": 3
                    },
                    {
                        "id": 952,
                        "pid": 61,
                        "name": "新村街道",
                        "level": 3
                    },
                    {
                        "id": 953,
                        "pid": 61,
                        "name": "新河街道",
                        "level": 3
                    },
                    {
                        "id": 954,
                        "pid": 61,
                        "name": "新港街道",
                        "level": 3
                    },
                    {
                        "id": 955,
                        "pid": 61,
                        "name": "杭州道街道",
                        "level": 3
                    },
                    {
                        "id": 956,
                        "pid": 61,
                        "name": "渤海石油街道",
                        "level": 3
                    },
                    {
                        "id": 957,
                        "pid": 61,
                        "name": "胡家园街道",
                        "level": 3
                    },
                    {
                        "id": 958,
                        "pid": 61,
                        "name": "解放路街道",
                        "level": 3
                    }
                ]
            },
            {
                "id": 62,
                "pid": 2,
                "name": "汉沽区",
                "level": 2,
                "children2": [
                    {
                        "id": 959,
                        "pid": 62,
                        "name": "大田镇",
                        "level": 3
                    },
                    {
                        "id": 960,
                        "pid": 62,
                        "name": "天化街道",
                        "level": 3
                    },
                    {
                        "id": 961,
                        "pid": 62,
                        "name": "寨上街道",
                        "level": 3
                    },
                    {
                        "id": 962,
                        "pid": 62,
                        "name": "杨家泊镇",
                        "level": 3
                    },
                    {
                        "id": 963,
                        "pid": 62,
                        "name": "汉沽街道",
                        "level": 3
                    },
                    {
                        "id": 964,
                        "pid": 62,
                        "name": "河西街道",
                        "level": 3
                    },
                    {
                        "id": 965,
                        "pid": 62,
                        "name": "盐场街道",
                        "level": 3
                    },
                    {
                        "id": 966,
                        "pid": 62,
                        "name": "茶淀镇",
                        "level": 3
                    },
                    {
                        "id": 967,
                        "pid": 62,
                        "name": "营城镇",
                        "level": 3
                    }
                ]
            },
            {
                "id": 63,
                "pid": 2,
                "name": "大港区",
                "level": 2,
                "children2": [
                    {
                        "id": 968,
                        "pid": 63,
                        "name": "中塘镇",
                        "level": 3
                    },
                    {
                        "id": 969,
                        "pid": 63,
                        "name": "古林街道",
                        "level": 3
                    },
                    {
                        "id": 970,
                        "pid": 63,
                        "name": "太平镇",
                        "level": 3
                    },
                    {
                        "id": 971,
                        "pid": 63,
                        "name": "小王庄镇",
                        "level": 3
                    },
                    {
                        "id": 972,
                        "pid": 63,
                        "name": "海滨街道",
                        "level": 3
                    },
                    {
                        "id": 973,
                        "pid": 63,
                        "name": "港西街道",
                        "level": 3
                    },
                    {
                        "id": 974,
                        "pid": 63,
                        "name": "胜利街道",
                        "level": 3
                    },
                    {
                        "id": 975,
                        "pid": 63,
                        "name": "迎宾街道",
                        "level": 3
                    }
                ]
            },
            {
                "id": 64,
                "pid": 2,
                "name": "东丽区",
                "level": 2,
                "children2": [
                    {
                        "id": 976,
                        "pid": 64,
                        "name": "万新街道",
                        "level": 3
                    },
                    {
                        "id": 977,
                        "pid": 64,
                        "name": "丰年村街道",
                        "level": 3
                    },
                    {
                        "id": 978,
                        "pid": 64,
                        "name": "么六桥乡",
                        "level": 3
                    },
                    {
                        "id": 979,
                        "pid": 64,
                        "name": "军粮城镇",
                        "level": 3
                    },
                    {
                        "id": 980,
                        "pid": 64,
                        "name": "华明镇",
                        "level": 3
                    },
                    {
                        "id": 981,
                        "pid": 64,
                        "name": "大毕庄镇",
                        "level": 3
                    },
                    {
                        "id": 982,
                        "pid": 64,
                        "name": "张贵庄街道",
                        "level": 3
                    },
                    {
                        "id": 983,
                        "pid": 64,
                        "name": "新立街道",
                        "level": 3
                    },
                    {
                        "id": 984,
                        "pid": 64,
                        "name": "无瑕街道",
                        "level": 3
                    }
                ]
            },
            {
                "id": 65,
                "pid": 2,
                "name": "西青区",
                "level": 2,
                "children2": [
                    {
                        "id": 985,
                        "pid": 65,
                        "name": "中北镇",
                        "level": 3
                    },
                    {
                        "id": 986,
                        "pid": 65,
                        "name": "南河镇",
                        "level": 3
                    },
                    {
                        "id": 987,
                        "pid": 65,
                        "name": "大寺镇",
                        "level": 3
                    },
                    {
                        "id": 988,
                        "pid": 65,
                        "name": "张家窝镇",
                        "level": 3
                    },
                    {
                        "id": 989,
                        "pid": 65,
                        "name": "李七庄街道",
                        "level": 3
                    },
                    {
                        "id": 990,
                        "pid": 65,
                        "name": "杨柳青镇",
                        "level": 3
                    },
                    {
                        "id": 991,
                        "pid": 65,
                        "name": "王稳庄镇",
                        "level": 3
                    },
                    {
                        "id": 992,
                        "pid": 65,
                        "name": "西营门街道",
                        "level": 3
                    },
                    {
                        "id": 993,
                        "pid": 65,
                        "name": "辛口镇",
                        "level": 3
                    }
                ]
            },
            {
                "id": 66,
                "pid": 2,
                "name": "津南区",
                "level": 2,
                "children2": [
                    {
                        "id": 994,
                        "pid": 66,
                        "name": "八里台镇",
                        "level": 3
                    },
                    {
                        "id": 995,
                        "pid": 66,
                        "name": "北闸口镇",
                        "level": 3
                    },
                    {
                        "id": 996,
                        "pid": 66,
                        "name": "双桥河镇",
                        "level": 3
                    },
                    {
                        "id": 997,
                        "pid": 66,
                        "name": "双港镇",
                        "level": 3
                    },
                    {
                        "id": 998,
                        "pid": 66,
                        "name": "咸水沽镇",
                        "level": 3
                    },
                    {
                        "id": 999,
                        "pid": 66,
                        "name": "小站镇",
                        "level": 3
                    },
                    {
                        "id": 1000,
                        "pid": 66,
                        "name": "葛沽镇",
                        "level": 3
                    },
                    {
                        "id": 1001,
                        "pid": 66,
                        "name": "辛庄镇",
                        "level": 3
                    },
                    {
                        "id": 1002,
                        "pid": 66,
                        "name": "长青办事处",
                        "level": 3
                    }
                ]
            },
            {
                "id": 67,
                "pid": 2,
                "name": "北辰区",
                "level": 2,
                "children2": [
                    {
                        "id": 1003,
                        "pid": 67,
                        "name": "北仓镇",
                        "level": 3
                    },
                    {
                        "id": 1004,
                        "pid": 67,
                        "name": "双口镇",
                        "level": 3
                    },
                    {
                        "id": 1005,
                        "pid": 67,
                        "name": "双街镇",
                        "level": 3
                    },
                    {
                        "id": 1006,
                        "pid": 67,
                        "name": "大张庄镇",
                        "level": 3
                    },
                    {
                        "id": 1007,
                        "pid": 67,
                        "name": "天穆镇",
                        "level": 3
                    },
                    {
                        "id": 1008,
                        "pid": 67,
                        "name": "宜兴埠镇",
                        "level": 3
                    },
                    {
                        "id": 1009,
                        "pid": 67,
                        "name": "小淀镇",
                        "level": 3
                    },
                    {
                        "id": 1010,
                        "pid": 67,
                        "name": "普东街道",
                        "level": 3
                    },
                    {
                        "id": 1011,
                        "pid": 67,
                        "name": "果园新村街道",
                        "level": 3
                    },
                    {
                        "id": 1012,
                        "pid": 67,
                        "name": "西堤头镇",
                        "level": 3
                    },
                    {
                        "id": 1013,
                        "pid": 67,
                        "name": "集贤里街道",
                        "level": 3
                    },
                    {
                        "id": 1014,
                        "pid": 67,
                        "name": "青光镇",
                        "level": 3
                    }
                ]
            },
            {
                "id": 68,
                "pid": 2,
                "name": "武清区",
                "level": 2,
                "children2": [
                    {
                        "id": 1015,
                        "pid": 68,
                        "name": "上马台镇",
                        "level": 3
                    },
                    {
                        "id": 1016,
                        "pid": 68,
                        "name": "下伍旗镇",
                        "level": 3
                    },
                    {
                        "id": 1017,
                        "pid": 68,
                        "name": "下朱庄街道",
                        "level": 3
                    },
                    {
                        "id": 1018,
                        "pid": 68,
                        "name": "东蒲洼街道",
                        "level": 3
                    },
                    {
                        "id": 1019,
                        "pid": 68,
                        "name": "东马圈镇",
                        "level": 3
                    },
                    {
                        "id": 1020,
                        "pid": 68,
                        "name": "南蔡村镇",
                        "level": 3
                    },
                    {
                        "id": 1021,
                        "pid": 68,
                        "name": "城关镇",
                        "level": 3
                    },
                    {
                        "id": 1022,
                        "pid": 68,
                        "name": "大孟庄镇",
                        "level": 3
                    },
                    {
                        "id": 1023,
                        "pid": 68,
                        "name": "大王古庄镇",
                        "level": 3
                    },
                    {
                        "id": 1024,
                        "pid": 68,
                        "name": "大碱厂镇",
                        "level": 3
                    },
                    {
                        "id": 1025,
                        "pid": 68,
                        "name": "大良镇",
                        "level": 3
                    },
                    {
                        "id": 1026,
                        "pid": 68,
                        "name": "大黄堡乡",
                        "level": 3
                    },
                    {
                        "id": 1027,
                        "pid": 68,
                        "name": "崔黄口镇",
                        "level": 3
                    },
                    {
                        "id": 1028,
                        "pid": 68,
                        "name": "徐官屯街道",
                        "level": 3
                    },
                    {
                        "id": 1029,
                        "pid": 68,
                        "name": "曹子里乡",
                        "level": 3
                    },
                    {
                        "id": 1030,
                        "pid": 68,
                        "name": "杨村街道",
                        "level": 3
                    },
                    {
                        "id": 1031,
                        "pid": 68,
                        "name": "梅厂镇",
                        "level": 3
                    },
                    {
                        "id": 1032,
                        "pid": 68,
                        "name": "汊沽港镇",
                        "level": 3
                    },
                    {
                        "id": 1033,
                        "pid": 68,
                        "name": "河北屯镇",
                        "level": 3
                    },
                    {
                        "id": 1034,
                        "pid": 68,
                        "name": "河西务镇",
                        "level": 3
                    },
                    {
                        "id": 1035,
                        "pid": 68,
                        "name": "泗村店镇",
                        "level": 3
                    },
                    {
                        "id": 1036,
                        "pid": 68,
                        "name": "王庆坨镇",
                        "level": 3
                    },
                    {
                        "id": 1037,
                        "pid": 68,
                        "name": "白古屯乡",
                        "level": 3
                    },
                    {
                        "id": 1038,
                        "pid": 68,
                        "name": "石各庄镇",
                        "level": 3
                    },
                    {
                        "id": 1039,
                        "pid": 68,
                        "name": "豆张庄乡",
                        "level": 3
                    },
                    {
                        "id": 1040,
                        "pid": 68,
                        "name": "运河西街道",
                        "level": 3
                    },
                    {
                        "id": 1041,
                        "pid": 68,
                        "name": "陈咀镇",
                        "level": 3
                    },
                    {
                        "id": 1042,
                        "pid": 68,
                        "name": "高村乡",
                        "level": 3
                    },
                    {
                        "id": 1043,
                        "pid": 68,
                        "name": "黄庄街道",
                        "level": 3
                    },
                    {
                        "id": 1044,
                        "pid": 68,
                        "name": "黄花店镇",
                        "level": 3
                    }
                ]
            },
            {
                "id": 69,
                "pid": 2,
                "name": "宝坻区",
                "level": 2,
                "children2": [
                    {
                        "id": 1045,
                        "pid": 69,
                        "name": "八门城镇",
                        "level": 3
                    },
                    {
                        "id": 1046,
                        "pid": 69,
                        "name": "口东镇",
                        "level": 3
                    },
                    {
                        "id": 1047,
                        "pid": 69,
                        "name": "史各庄镇",
                        "level": 3
                    },
                    {
                        "id": 1048,
                        "pid": 69,
                        "name": "周良庄镇",
                        "level": 3
                    },
                    {
                        "id": 1049,
                        "pid": 69,
                        "name": "城关镇",
                        "level": 3
                    },
                    {
                        "id": 1050,
                        "pid": 69,
                        "name": "大口屯镇",
                        "level": 3
                    },
                    {
                        "id": 1051,
                        "pid": 69,
                        "name": "大唐庄镇",
                        "level": 3
                    },
                    {
                        "id": 1052,
                        "pid": 69,
                        "name": "大白庄镇",
                        "level": 3
                    },
                    {
                        "id": 1053,
                        "pid": 69,
                        "name": "大钟庄镇",
                        "level": 3
                    },
                    {
                        "id": 1054,
                        "pid": 69,
                        "name": "尔王庄乡",
                        "level": 3
                    },
                    {
                        "id": 1055,
                        "pid": 69,
                        "name": "新安镇",
                        "level": 3
                    },
                    {
                        "id": 1056,
                        "pid": 69,
                        "name": "新开口镇",
                        "level": 3
                    },
                    {
                        "id": 1057,
                        "pid": 69,
                        "name": "方家庄镇",
                        "level": 3
                    },
                    {
                        "id": 1058,
                        "pid": 69,
                        "name": "林亭口镇",
                        "level": 3
                    },
                    {
                        "id": 1059,
                        "pid": 69,
                        "name": "牛家牌乡",
                        "level": 3
                    },
                    {
                        "id": 1060,
                        "pid": 69,
                        "name": "牛道口镇",
                        "level": 3
                    },
                    {
                        "id": 1061,
                        "pid": 69,
                        "name": "王卜庄镇",
                        "level": 3
                    },
                    {
                        "id": 1062,
                        "pid": 69,
                        "name": "郝各庄镇",
                        "level": 3
                    },
                    {
                        "id": 1063,
                        "pid": 69,
                        "name": "霍各庄镇",
                        "level": 3
                    },
                    {
                        "id": 1064,
                        "pid": 69,
                        "name": "马家店镇",
                        "level": 3
                    },
                    {
                        "id": 1065,
                        "pid": 69,
                        "name": "高家庄镇",
                        "level": 3
                    },
                    {
                        "id": 1066,
                        "pid": 69,
                        "name": "黄庄乡",
                        "level": 3
                    }
                ]
            },
            {
                "id": 70,
                "pid": 2,
                "name": "宁河县",
                "level": 2,
                "children2": [
                    {
                        "id": 1067,
                        "pid": 70,
                        "name": "七里海镇",
                        "level": 3
                    },
                    {
                        "id": 1068,
                        "pid": 70,
                        "name": "东棘坨镇",
                        "level": 3
                    },
                    {
                        "id": 1069,
                        "pid": 70,
                        "name": "丰台镇",
                        "level": 3
                    },
                    {
                        "id": 1070,
                        "pid": 70,
                        "name": "俵口乡",
                        "level": 3
                    },
                    {
                        "id": 1071,
                        "pid": 70,
                        "name": "北淮淀乡",
                        "level": 3
                    },
                    {
                        "id": 1072,
                        "pid": 70,
                        "name": "大北涧沽镇",
                        "level": 3
                    },
                    {
                        "id": 1073,
                        "pid": 70,
                        "name": "宁河镇",
                        "level": 3
                    },
                    {
                        "id": 1074,
                        "pid": 70,
                        "name": "岳龙镇",
                        "level": 3
                    },
                    {
                        "id": 1075,
                        "pid": 70,
                        "name": "廉庄子乡",
                        "level": 3
                    },
                    {
                        "id": 1076,
                        "pid": 70,
                        "name": "板桥镇",
                        "level": 3
                    },
                    {
                        "id": 1077,
                        "pid": 70,
                        "name": "潘庄镇",
                        "level": 3
                    },
                    {
                        "id": 1078,
                        "pid": 70,
                        "name": "芦台镇",
                        "level": 3
                    },
                    {
                        "id": 1079,
                        "pid": 70,
                        "name": "苗庄镇",
                        "level": 3
                    },
                    {
                        "id": 1080,
                        "pid": 70,
                        "name": "造甲城镇",
                        "level": 3
                    }
                ]
            },
            {
                "id": 71,
                "pid": 2,
                "name": "静海县",
                "level": 2,
                "children2": [
                    {
                        "id": 1081,
                        "pid": 71,
                        "name": "中旺镇",
                        "level": 3
                    },
                    {
                        "id": 1082,
                        "pid": 71,
                        "name": "双塘镇",
                        "level": 3
                    },
                    {
                        "id": 1083,
                        "pid": 71,
                        "name": "台头镇",
                        "level": 3
                    },
                    {
                        "id": 1084,
                        "pid": 71,
                        "name": "唐官屯镇",
                        "level": 3
                    },
                    {
                        "id": 1085,
                        "pid": 71,
                        "name": "团泊镇",
                        "level": 3
                    },
                    {
                        "id": 1086,
                        "pid": 71,
                        "name": "大丰堆镇",
                        "level": 3
                    },
                    {
                        "id": 1087,
                        "pid": 71,
                        "name": "大邱庄镇",
                        "level": 3
                    },
                    {
                        "id": 1088,
                        "pid": 71,
                        "name": "子牙镇",
                        "level": 3
                    },
                    {
                        "id": 1089,
                        "pid": 71,
                        "name": "杨成庄乡",
                        "level": 3
                    },
                    {
                        "id": 1090,
                        "pid": 71,
                        "name": "梁头镇",
                        "level": 3
                    },
                    {
                        "id": 1091,
                        "pid": 71,
                        "name": "沿庄镇",
                        "level": 3
                    },
                    {
                        "id": 1092,
                        "pid": 71,
                        "name": "独流镇",
                        "level": 3
                    },
                    {
                        "id": 1093,
                        "pid": 71,
                        "name": "王口镇",
                        "level": 3
                    },
                    {
                        "id": 1094,
                        "pid": 71,
                        "name": "良王庄乡",
                        "level": 3
                    },
                    {
                        "id": 1095,
                        "pid": 71,
                        "name": "蔡公庄镇",
                        "level": 3
                    },
                    {
                        "id": 1096,
                        "pid": 71,
                        "name": "西翟庄镇",
                        "level": 3
                    },
                    {
                        "id": 1097,
                        "pid": 71,
                        "name": "陈官屯镇",
                        "level": 3
                    },
                    {
                        "id": 1098,
                        "pid": 71,
                        "name": "静海镇",
                        "level": 3
                    }
                ]
            },
            {
                "id": 72,
                "pid": 2,
                "name": "蓟县",
                "level": 2,
                "children2": [
                    {
                        "id": 1099,
                        "pid": 72,
                        "name": "上仓镇",
                        "level": 3
                    },
                    {
                        "id": 1100,
                        "pid": 72,
                        "name": "下仓镇",
                        "level": 3
                    },
                    {
                        "id": 1101,
                        "pid": 72,
                        "name": "下窝头镇",
                        "level": 3
                    },
                    {
                        "id": 1102,
                        "pid": 72,
                        "name": "下营镇",
                        "level": 3
                    },
                    {
                        "id": 1103,
                        "pid": 72,
                        "name": "东二营乡",
                        "level": 3
                    },
                    {
                        "id": 1104,
                        "pid": 72,
                        "name": "东施古镇",
                        "level": 3
                    },
                    {
                        "id": 1105,
                        "pid": 72,
                        "name": "东赵各庄乡",
                        "level": 3
                    },
                    {
                        "id": 1106,
                        "pid": 72,
                        "name": "五百户镇",
                        "level": 3
                    },
                    {
                        "id": 1107,
                        "pid": 72,
                        "name": "侯家营镇",
                        "level": 3
                    },
                    {
                        "id": 1108,
                        "pid": 72,
                        "name": "出头岭镇",
                        "level": 3
                    },
                    {
                        "id": 1109,
                        "pid": 72,
                        "name": "别山镇",
                        "level": 3
                    },
                    {
                        "id": 1110,
                        "pid": 72,
                        "name": "城关镇",
                        "level": 3
                    },
                    {
                        "id": 1111,
                        "pid": 72,
                        "name": "孙各庄满族乡",
                        "level": 3
                    },
                    {
                        "id": 1112,
                        "pid": 72,
                        "name": "官庄镇",
                        "level": 3
                    },
                    {
                        "id": 1113,
                        "pid": 72,
                        "name": "尤古庄镇",
                        "level": 3
                    },
                    {
                        "id": 1114,
                        "pid": 72,
                        "name": "文昌街道",
                        "level": 3
                    },
                    {
                        "id": 1115,
                        "pid": 72,
                        "name": "杨津庄镇",
                        "level": 3
                    },
                    {
                        "id": 1116,
                        "pid": 72,
                        "name": "桑梓镇",
                        "level": 3
                    },
                    {
                        "id": 1117,
                        "pid": 72,
                        "name": "洇溜镇",
                        "level": 3
                    },
                    {
                        "id": 1118,
                        "pid": 72,
                        "name": "白涧镇",
                        "level": 3
                    },
                    {
                        "id": 1119,
                        "pid": 72,
                        "name": "礼明庄乡",
                        "level": 3
                    },
                    {
                        "id": 1120,
                        "pid": 72,
                        "name": "穿芳峪乡",
                        "level": 3
                    },
                    {
                        "id": 1121,
                        "pid": 72,
                        "name": "罗庄子镇",
                        "level": 3
                    },
                    {
                        "id": 1122,
                        "pid": 72,
                        "name": "西龙虎峪镇",
                        "level": 3
                    },
                    {
                        "id": 1123,
                        "pid": 72,
                        "name": "许家台乡",
                        "level": 3
                    },
                    {
                        "id": 1124,
                        "pid": 72,
                        "name": "邦均镇",
                        "level": 3
                    },
                    {
                        "id": 1125,
                        "pid": 72,
                        "name": "马伸桥镇",
                        "level": 3
                    }
                ]
            }
        ]
    },
    {
        "id": 3,
        "pid": 0,
        "name": "河北省",
        "level": 1,
        "children": [
            {
                "id": 73,
                "pid": 3,
                "name": "石家庄市",
                "level": 2,
                "children2": [
                    {
                        "id": 1126,
                        "pid": 73,
                        "name": "井陉县",
                        "level": 3
                    },
                    {
                        "id": 1127,
                        "pid": 73,
                        "name": "井陉矿区",
                        "level": 3
                    },
                    {
                        "id": 1128,
                        "pid": 73,
                        "name": "元氏县",
                        "level": 3
                    },
                    {
                        "id": 1129,
                        "pid": 73,
                        "name": "平山县",
                        "level": 3
                    },
                    {
                        "id": 1130,
                        "pid": 73,
                        "name": "新乐市",
                        "level": 3
                    },
                    {
                        "id": 1131,
                        "pid": 73,
                        "name": "新华区",
                        "level": 3
                    },
                    {
                        "id": 1132,
                        "pid": 73,
                        "name": "无极县",
                        "level": 3
                    },
                    {
                        "id": 1133,
                        "pid": 73,
                        "name": "晋州市",
                        "level": 3
                    },
                    {
                        "id": 1134,
                        "pid": 73,
                        "name": "栾城县",
                        "level": 3
                    },
                    {
                        "id": 1135,
                        "pid": 73,
                        "name": "桥东区",
                        "level": 3
                    },
                    {
                        "id": 1136,
                        "pid": 73,
                        "name": "桥西区",
                        "level": 3
                    },
                    {
                        "id": 1137,
                        "pid": 73,
                        "name": "正定县",
                        "level": 3
                    },
                    {
                        "id": 1138,
                        "pid": 73,
                        "name": "深泽县",
                        "level": 3
                    },
                    {
                        "id": 1139,
                        "pid": 73,
                        "name": "灵寿县",
                        "level": 3
                    },
                    {
                        "id": 1140,
                        "pid": 73,
                        "name": "藁城市",
                        "level": 3
                    },
                    {
                        "id": 1141,
                        "pid": 73,
                        "name": "行唐县",
                        "level": 3
                    },
                    {
                        "id": 1142,
                        "pid": 73,
                        "name": "裕华区",
                        "level": 3
                    },
                    {
                        "id": 1143,
                        "pid": 73,
                        "name": "赞皇县",
                        "level": 3
                    },
                    {
                        "id": 1144,
                        "pid": 73,
                        "name": "赵县",
                        "level": 3
                    },
                    {
                        "id": 1145,
                        "pid": 73,
                        "name": "辛集市",
                        "level": 3
                    },
                    {
                        "id": 1146,
                        "pid": 73,
                        "name": "长安区",
                        "level": 3
                    },
                    {
                        "id": 1147,
                        "pid": 73,
                        "name": "高邑县",
                        "level": 3
                    },
                    {
                        "id": 1148,
                        "pid": 73,
                        "name": "鹿泉市",
                        "level": 3
                    }
                ]
            },
            {
                "id": 74,
                "pid": 3,
                "name": "唐山市",
                "level": 2,
                "children2": [
                    {
                        "id": 1149,
                        "pid": 74,
                        "name": "丰南区",
                        "level": 3
                    },
                    {
                        "id": 1150,
                        "pid": 74,
                        "name": "丰润区",
                        "level": 3
                    },
                    {
                        "id": 1151,
                        "pid": 74,
                        "name": "乐亭县",
                        "level": 3
                    },
                    {
                        "id": 1152,
                        "pid": 74,
                        "name": "古冶区",
                        "level": 3
                    },
                    {
                        "id": 1153,
                        "pid": 74,
                        "name": "唐海县",
                        "level": 3
                    },
                    {
                        "id": 1154,
                        "pid": 74,
                        "name": "开平区",
                        "level": 3
                    },
                    {
                        "id": 1155,
                        "pid": 74,
                        "name": "滦南县",
                        "level": 3
                    },
                    {
                        "id": 1156,
                        "pid": 74,
                        "name": "滦县",
                        "level": 3
                    },
                    {
                        "id": 1157,
                        "pid": 74,
                        "name": "玉田县",
                        "level": 3
                    },
                    {
                        "id": 1158,
                        "pid": 74,
                        "name": "路北区",
                        "level": 3
                    },
                    {
                        "id": 1159,
                        "pid": 74,
                        "name": "路南区",
                        "level": 3
                    },
                    {
                        "id": 1160,
                        "pid": 74,
                        "name": "迁安市",
                        "level": 3
                    },
                    {
                        "id": 1161,
                        "pid": 74,
                        "name": "迁西县",
                        "level": 3
                    },
                    {
                        "id": 1162,
                        "pid": 74,
                        "name": "遵化市",
                        "level": 3
                    }
                ]
            },
            {
                "id": 75,
                "pid": 3,
                "name": "秦皇岛市",
                "level": 2,
                "children2": [
                    {
                        "id": 1163,
                        "pid": 75,
                        "name": "北戴河区",
                        "level": 3
                    },
                    {
                        "id": 1164,
                        "pid": 75,
                        "name": "卢龙县",
                        "level": 3
                    },
                    {
                        "id": 1165,
                        "pid": 75,
                        "name": "山海关区",
                        "level": 3
                    },
                    {
                        "id": 1166,
                        "pid": 75,
                        "name": "抚宁县",
                        "level": 3
                    },
                    {
                        "id": 1167,
                        "pid": 75,
                        "name": "昌黎县",
                        "level": 3
                    },
                    {
                        "id": 1168,
                        "pid": 75,
                        "name": "海港区",
                        "level": 3
                    },
                    {
                        "id": 1169,
                        "pid": 75,
                        "name": "青龙满族自治县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 76,
                "pid": 3,
                "name": "邯郸市",
                "level": 2,
                "children2": [
                    {
                        "id": 1170,
                        "pid": 76,
                        "name": "丛台区",
                        "level": 3
                    },
                    {
                        "id": 1171,
                        "pid": 76,
                        "name": "临漳县",
                        "level": 3
                    },
                    {
                        "id": 1172,
                        "pid": 76,
                        "name": "复兴区",
                        "level": 3
                    },
                    {
                        "id": 1173,
                        "pid": 76,
                        "name": "大名县",
                        "level": 3
                    },
                    {
                        "id": 1174,
                        "pid": 76,
                        "name": "峰峰矿区",
                        "level": 3
                    },
                    {
                        "id": 1175,
                        "pid": 76,
                        "name": "广平县",
                        "level": 3
                    },
                    {
                        "id": 1176,
                        "pid": 76,
                        "name": "成安县",
                        "level": 3
                    },
                    {
                        "id": 1177,
                        "pid": 76,
                        "name": "曲周县",
                        "level": 3
                    },
                    {
                        "id": 1178,
                        "pid": 76,
                        "name": "武安市",
                        "level": 3
                    },
                    {
                        "id": 1179,
                        "pid": 76,
                        "name": "永年县",
                        "level": 3
                    },
                    {
                        "id": 1180,
                        "pid": 76,
                        "name": "涉县",
                        "level": 3
                    },
                    {
                        "id": 1181,
                        "pid": 76,
                        "name": "磁县",
                        "level": 3
                    },
                    {
                        "id": 1182,
                        "pid": 76,
                        "name": "肥乡县",
                        "level": 3
                    },
                    {
                        "id": 1183,
                        "pid": 76,
                        "name": "邯山区",
                        "level": 3
                    },
                    {
                        "id": 1184,
                        "pid": 76,
                        "name": "邯郸县",
                        "level": 3
                    },
                    {
                        "id": 1185,
                        "pid": 76,
                        "name": "邱县",
                        "level": 3
                    },
                    {
                        "id": 1186,
                        "pid": 76,
                        "name": "馆陶县",
                        "level": 3
                    },
                    {
                        "id": 1187,
                        "pid": 76,
                        "name": "魏县",
                        "level": 3
                    },
                    {
                        "id": 1188,
                        "pid": 76,
                        "name": "鸡泽县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 77,
                "pid": 3,
                "name": "邢台市",
                "level": 2,
                "children2": [
                    {
                        "id": 1189,
                        "pid": 77,
                        "name": "临城县",
                        "level": 3
                    },
                    {
                        "id": 1190,
                        "pid": 77,
                        "name": "临西县",
                        "level": 3
                    },
                    {
                        "id": 1191,
                        "pid": 77,
                        "name": "任县",
                        "level": 3
                    },
                    {
                        "id": 1192,
                        "pid": 77,
                        "name": "内丘县",
                        "level": 3
                    },
                    {
                        "id": 1193,
                        "pid": 77,
                        "name": "南和县",
                        "level": 3
                    },
                    {
                        "id": 1194,
                        "pid": 77,
                        "name": "南宫市",
                        "level": 3
                    },
                    {
                        "id": 1195,
                        "pid": 77,
                        "name": "威县",
                        "level": 3
                    },
                    {
                        "id": 1196,
                        "pid": 77,
                        "name": "宁晋县",
                        "level": 3
                    },
                    {
                        "id": 1197,
                        "pid": 77,
                        "name": "巨鹿县",
                        "level": 3
                    },
                    {
                        "id": 1198,
                        "pid": 77,
                        "name": "平乡县",
                        "level": 3
                    },
                    {
                        "id": 1199,
                        "pid": 77,
                        "name": "广宗县",
                        "level": 3
                    },
                    {
                        "id": 1200,
                        "pid": 77,
                        "name": "新河县",
                        "level": 3
                    },
                    {
                        "id": 1201,
                        "pid": 77,
                        "name": "柏乡县",
                        "level": 3
                    },
                    {
                        "id": 1202,
                        "pid": 77,
                        "name": "桥东区",
                        "level": 3
                    },
                    {
                        "id": 1203,
                        "pid": 77,
                        "name": "桥西区",
                        "level": 3
                    },
                    {
                        "id": 1204,
                        "pid": 77,
                        "name": "沙河市",
                        "level": 3
                    },
                    {
                        "id": 1205,
                        "pid": 77,
                        "name": "清河县",
                        "level": 3
                    },
                    {
                        "id": 1206,
                        "pid": 77,
                        "name": "邢台县",
                        "level": 3
                    },
                    {
                        "id": 1207,
                        "pid": 77,
                        "name": "隆尧县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 78,
                "pid": 3,
                "name": "保定市",
                "level": 2,
                "children2": [
                    {
                        "id": 1208,
                        "pid": 78,
                        "name": "北市区",
                        "level": 3
                    },
                    {
                        "id": 1209,
                        "pid": 78,
                        "name": "南市区",
                        "level": 3
                    },
                    {
                        "id": 1210,
                        "pid": 78,
                        "name": "博野县",
                        "level": 3
                    },
                    {
                        "id": 1211,
                        "pid": 78,
                        "name": "唐县",
                        "level": 3
                    },
                    {
                        "id": 1212,
                        "pid": 78,
                        "name": "安国市",
                        "level": 3
                    },
                    {
                        "id": 1213,
                        "pid": 78,
                        "name": "安新县",
                        "level": 3
                    },
                    {
                        "id": 1214,
                        "pid": 78,
                        "name": "定兴县",
                        "level": 3
                    },
                    {
                        "id": 1215,
                        "pid": 78,
                        "name": "定州市",
                        "level": 3
                    },
                    {
                        "id": 1216,
                        "pid": 78,
                        "name": "容城县",
                        "level": 3
                    },
                    {
                        "id": 1217,
                        "pid": 78,
                        "name": "徐水县",
                        "level": 3
                    },
                    {
                        "id": 1218,
                        "pid": 78,
                        "name": "新市区",
                        "level": 3
                    },
                    {
                        "id": 1219,
                        "pid": 78,
                        "name": "易县",
                        "level": 3
                    },
                    {
                        "id": 1220,
                        "pid": 78,
                        "name": "曲阳县",
                        "level": 3
                    },
                    {
                        "id": 1221,
                        "pid": 78,
                        "name": "望都县",
                        "level": 3
                    },
                    {
                        "id": 1222,
                        "pid": 78,
                        "name": "涞水县",
                        "level": 3
                    },
                    {
                        "id": 1223,
                        "pid": 78,
                        "name": "涞源县",
                        "level": 3
                    },
                    {
                        "id": 1224,
                        "pid": 78,
                        "name": "涿州市",
                        "level": 3
                    },
                    {
                        "id": 1225,
                        "pid": 78,
                        "name": "清苑县",
                        "level": 3
                    },
                    {
                        "id": 1226,
                        "pid": 78,
                        "name": "满城县",
                        "level": 3
                    },
                    {
                        "id": 1227,
                        "pid": 78,
                        "name": "蠡县",
                        "level": 3
                    },
                    {
                        "id": 1228,
                        "pid": 78,
                        "name": "阜平县",
                        "level": 3
                    },
                    {
                        "id": 1229,
                        "pid": 78,
                        "name": "雄县",
                        "level": 3
                    },
                    {
                        "id": 1230,
                        "pid": 78,
                        "name": "顺平县",
                        "level": 3
                    },
                    {
                        "id": 1231,
                        "pid": 78,
                        "name": "高碑店市",
                        "level": 3
                    },
                    {
                        "id": 1232,
                        "pid": 78,
                        "name": "高阳县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 79,
                "pid": 3,
                "name": "张家口市",
                "level": 2,
                "children2": [
                    {
                        "id": 1233,
                        "pid": 79,
                        "name": "万全县",
                        "level": 3
                    },
                    {
                        "id": 1234,
                        "pid": 79,
                        "name": "下花园区",
                        "level": 3
                    },
                    {
                        "id": 1235,
                        "pid": 79,
                        "name": "宣化区",
                        "level": 3
                    },
                    {
                        "id": 1236,
                        "pid": 79,
                        "name": "宣化县",
                        "level": 3
                    },
                    {
                        "id": 1237,
                        "pid": 79,
                        "name": "尚义县",
                        "level": 3
                    },
                    {
                        "id": 1238,
                        "pid": 79,
                        "name": "崇礼县",
                        "level": 3
                    },
                    {
                        "id": 1239,
                        "pid": 79,
                        "name": "康保县",
                        "level": 3
                    },
                    {
                        "id": 1240,
                        "pid": 79,
                        "name": "张北县",
                        "level": 3
                    },
                    {
                        "id": 1241,
                        "pid": 79,
                        "name": "怀安县",
                        "level": 3
                    },
                    {
                        "id": 1242,
                        "pid": 79,
                        "name": "怀来县",
                        "level": 3
                    },
                    {
                        "id": 1243,
                        "pid": 79,
                        "name": "桥东区",
                        "level": 3
                    },
                    {
                        "id": 1244,
                        "pid": 79,
                        "name": "桥西区",
                        "level": 3
                    },
                    {
                        "id": 1245,
                        "pid": 79,
                        "name": "沽源县",
                        "level": 3
                    },
                    {
                        "id": 1246,
                        "pid": 79,
                        "name": "涿鹿县",
                        "level": 3
                    },
                    {
                        "id": 1247,
                        "pid": 79,
                        "name": "蔚县",
                        "level": 3
                    },
                    {
                        "id": 1248,
                        "pid": 79,
                        "name": "赤城县",
                        "level": 3
                    },
                    {
                        "id": 1249,
                        "pid": 79,
                        "name": "阳原县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 80,
                "pid": 3,
                "name": "承德市",
                "level": 2,
                "children2": [
                    {
                        "id": 1250,
                        "pid": 80,
                        "name": "丰宁满族自治县",
                        "level": 3
                    },
                    {
                        "id": 1251,
                        "pid": 80,
                        "name": "兴隆县",
                        "level": 3
                    },
                    {
                        "id": 1252,
                        "pid": 80,
                        "name": "双桥区",
                        "level": 3
                    },
                    {
                        "id": 1253,
                        "pid": 80,
                        "name": "双滦区",
                        "level": 3
                    },
                    {
                        "id": 1254,
                        "pid": 80,
                        "name": "围场满族蒙古族自治县",
                        "level": 3
                    },
                    {
                        "id": 1255,
                        "pid": 80,
                        "name": "宽城满族自治县",
                        "level": 3
                    },
                    {
                        "id": 1256,
                        "pid": 80,
                        "name": "平泉县",
                        "level": 3
                    },
                    {
                        "id": 1257,
                        "pid": 80,
                        "name": "承德县",
                        "level": 3
                    },
                    {
                        "id": 1258,
                        "pid": 80,
                        "name": "滦平县",
                        "level": 3
                    },
                    {
                        "id": 1259,
                        "pid": 80,
                        "name": "隆化县",
                        "level": 3
                    },
                    {
                        "id": 1260,
                        "pid": 80,
                        "name": "鹰手营子矿区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 81,
                "pid": 3,
                "name": "衡水市",
                "level": 2,
                "children2": [
                    {
                        "id": 1261,
                        "pid": 81,
                        "name": "冀州市",
                        "level": 3
                    },
                    {
                        "id": 1262,
                        "pid": 81,
                        "name": "安平县",
                        "level": 3
                    },
                    {
                        "id": 1263,
                        "pid": 81,
                        "name": "故城县",
                        "level": 3
                    },
                    {
                        "id": 1264,
                        "pid": 81,
                        "name": "景县",
                        "level": 3
                    },
                    {
                        "id": 1265,
                        "pid": 81,
                        "name": "枣强县",
                        "level": 3
                    },
                    {
                        "id": 1266,
                        "pid": 81,
                        "name": "桃城区",
                        "level": 3
                    },
                    {
                        "id": 1267,
                        "pid": 81,
                        "name": "武强县",
                        "level": 3
                    },
                    {
                        "id": 1268,
                        "pid": 81,
                        "name": "武邑县",
                        "level": 3
                    },
                    {
                        "id": 1269,
                        "pid": 81,
                        "name": "深州市",
                        "level": 3
                    },
                    {
                        "id": 1270,
                        "pid": 81,
                        "name": "阜城县",
                        "level": 3
                    },
                    {
                        "id": 1271,
                        "pid": 81,
                        "name": "饶阳县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 82,
                "pid": 3,
                "name": "廊坊市",
                "level": 2,
                "children2": [
                    {
                        "id": 1272,
                        "pid": 82,
                        "name": "三河市",
                        "level": 3
                    },
                    {
                        "id": 1273,
                        "pid": 82,
                        "name": "固安县",
                        "level": 3
                    },
                    {
                        "id": 1274,
                        "pid": 82,
                        "name": "大厂回族自治县",
                        "level": 3
                    },
                    {
                        "id": 1275,
                        "pid": 82,
                        "name": "大城县",
                        "level": 3
                    },
                    {
                        "id": 1276,
                        "pid": 82,
                        "name": "安次区",
                        "level": 3
                    },
                    {
                        "id": 1277,
                        "pid": 82,
                        "name": "广阳区",
                        "level": 3
                    },
                    {
                        "id": 1278,
                        "pid": 82,
                        "name": "文安县",
                        "level": 3
                    },
                    {
                        "id": 1279,
                        "pid": 82,
                        "name": "永清县",
                        "level": 3
                    },
                    {
                        "id": 1280,
                        "pid": 82,
                        "name": "霸州市",
                        "level": 3
                    },
                    {
                        "id": 1281,
                        "pid": 82,
                        "name": "香河县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 83,
                "pid": 3,
                "name": "沧州市",
                "level": 2,
                "children2": [
                    {
                        "id": 1282,
                        "pid": 83,
                        "name": "东光县",
                        "level": 3
                    },
                    {
                        "id": 1283,
                        "pid": 83,
                        "name": "任丘市",
                        "level": 3
                    },
                    {
                        "id": 1284,
                        "pid": 83,
                        "name": "南皮县",
                        "level": 3
                    },
                    {
                        "id": 1285,
                        "pid": 83,
                        "name": "吴桥县",
                        "level": 3
                    },
                    {
                        "id": 1286,
                        "pid": 83,
                        "name": "孟村回族自治县",
                        "level": 3
                    },
                    {
                        "id": 1287,
                        "pid": 83,
                        "name": "新华区",
                        "level": 3
                    },
                    {
                        "id": 1288,
                        "pid": 83,
                        "name": "沧县",
                        "level": 3
                    },
                    {
                        "id": 1289,
                        "pid": 83,
                        "name": "河间市",
                        "level": 3
                    },
                    {
                        "id": 1290,
                        "pid": 83,
                        "name": "泊头市",
                        "level": 3
                    },
                    {
                        "id": 1291,
                        "pid": 83,
                        "name": "海兴县",
                        "level": 3
                    },
                    {
                        "id": 1292,
                        "pid": 83,
                        "name": "献县",
                        "level": 3
                    },
                    {
                        "id": 1293,
                        "pid": 83,
                        "name": "盐山县",
                        "level": 3
                    },
                    {
                        "id": 1294,
                        "pid": 83,
                        "name": "肃宁县",
                        "level": 3
                    },
                    {
                        "id": 1295,
                        "pid": 83,
                        "name": "运河区",
                        "level": 3
                    },
                    {
                        "id": 1296,
                        "pid": 83,
                        "name": "青县",
                        "level": 3
                    },
                    {
                        "id": 1297,
                        "pid": 83,
                        "name": "黄骅市",
                        "level": 3
                    }
                ]
            }
        ]
    },
    {
        "id": 4,
        "pid": 0,
        "name": "山西省",
        "level": 1,
        "children": [
            {
                "id": 84,
                "pid": 4,
                "name": "太原市",
                "level": 2,
                "children2": [
                    {
                        "id": 1298,
                        "pid": 84,
                        "name": "万柏林区",
                        "level": 3
                    },
                    {
                        "id": 1299,
                        "pid": 84,
                        "name": "古交市",
                        "level": 3
                    },
                    {
                        "id": 1300,
                        "pid": 84,
                        "name": "娄烦县",
                        "level": 3
                    },
                    {
                        "id": 1301,
                        "pid": 84,
                        "name": "小店区",
                        "level": 3
                    },
                    {
                        "id": 1302,
                        "pid": 84,
                        "name": "尖草坪区",
                        "level": 3
                    },
                    {
                        "id": 1303,
                        "pid": 84,
                        "name": "晋源区",
                        "level": 3
                    },
                    {
                        "id": 1304,
                        "pid": 84,
                        "name": "杏花岭区",
                        "level": 3
                    },
                    {
                        "id": 1305,
                        "pid": 84,
                        "name": "清徐县",
                        "level": 3
                    },
                    {
                        "id": 1306,
                        "pid": 84,
                        "name": "迎泽区",
                        "level": 3
                    },
                    {
                        "id": 1307,
                        "pid": 84,
                        "name": "阳曲县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 85,
                "pid": 4,
                "name": "大同市",
                "level": 2,
                "children2": [
                    {
                        "id": 1308,
                        "pid": 85,
                        "name": "南郊区",
                        "level": 3
                    },
                    {
                        "id": 1309,
                        "pid": 85,
                        "name": "城区",
                        "level": 3
                    },
                    {
                        "id": 1310,
                        "pid": 85,
                        "name": "大同县",
                        "level": 3
                    },
                    {
                        "id": 1311,
                        "pid": 85,
                        "name": "天镇县",
                        "level": 3
                    },
                    {
                        "id": 1312,
                        "pid": 85,
                        "name": "左云县",
                        "level": 3
                    },
                    {
                        "id": 1313,
                        "pid": 85,
                        "name": "广灵县",
                        "level": 3
                    },
                    {
                        "id": 1314,
                        "pid": 85,
                        "name": "新荣区",
                        "level": 3
                    },
                    {
                        "id": 1315,
                        "pid": 85,
                        "name": "浑源县",
                        "level": 3
                    },
                    {
                        "id": 1316,
                        "pid": 85,
                        "name": "灵丘县",
                        "level": 3
                    },
                    {
                        "id": 1317,
                        "pid": 85,
                        "name": "矿区",
                        "level": 3
                    },
                    {
                        "id": 1318,
                        "pid": 85,
                        "name": "阳高县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 86,
                "pid": 4,
                "name": "阳泉市",
                "level": 2,
                "children2": [
                    {
                        "id": 1319,
                        "pid": 86,
                        "name": "城区",
                        "level": 3
                    },
                    {
                        "id": 1320,
                        "pid": 86,
                        "name": "平定县",
                        "level": 3
                    },
                    {
                        "id": 1321,
                        "pid": 86,
                        "name": "盂县",
                        "level": 3
                    },
                    {
                        "id": 1322,
                        "pid": 86,
                        "name": "矿区",
                        "level": 3
                    },
                    {
                        "id": 1323,
                        "pid": 86,
                        "name": "郊区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 87,
                "pid": 4,
                "name": "长治市",
                "level": 2,
                "children2": [
                    {
                        "id": 1324,
                        "pid": 87,
                        "name": "城区",
                        "level": 3
                    },
                    {
                        "id": 1325,
                        "pid": 87,
                        "name": "壶关县",
                        "level": 3
                    },
                    {
                        "id": 1326,
                        "pid": 87,
                        "name": "屯留县",
                        "level": 3
                    },
                    {
                        "id": 1327,
                        "pid": 87,
                        "name": "平顺县",
                        "level": 3
                    },
                    {
                        "id": 1328,
                        "pid": 87,
                        "name": "武乡县",
                        "level": 3
                    },
                    {
                        "id": 1329,
                        "pid": 87,
                        "name": "沁县",
                        "level": 3
                    },
                    {
                        "id": 1330,
                        "pid": 87,
                        "name": "沁源县",
                        "level": 3
                    },
                    {
                        "id": 1331,
                        "pid": 87,
                        "name": "潞城市",
                        "level": 3
                    },
                    {
                        "id": 1332,
                        "pid": 87,
                        "name": "襄垣县",
                        "level": 3
                    },
                    {
                        "id": 1333,
                        "pid": 87,
                        "name": "郊区",
                        "level": 3
                    },
                    {
                        "id": 1334,
                        "pid": 87,
                        "name": "长子县",
                        "level": 3
                    },
                    {
                        "id": 1335,
                        "pid": 87,
                        "name": "长治县",
                        "level": 3
                    },
                    {
                        "id": 1336,
                        "pid": 87,
                        "name": "黎城县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 88,
                "pid": 4,
                "name": "晋城市",
                "level": 2,
                "children2": [
                    {
                        "id": 1337,
                        "pid": 88,
                        "name": "城区",
                        "level": 3
                    },
                    {
                        "id": 1338,
                        "pid": 88,
                        "name": "沁水县",
                        "level": 3
                    },
                    {
                        "id": 1339,
                        "pid": 88,
                        "name": "泽州县",
                        "level": 3
                    },
                    {
                        "id": 1340,
                        "pid": 88,
                        "name": "阳城县",
                        "level": 3
                    },
                    {
                        "id": 1341,
                        "pid": 88,
                        "name": "陵川县",
                        "level": 3
                    },
                    {
                        "id": 1342,
                        "pid": 88,
                        "name": "高平市",
                        "level": 3
                    }
                ]
            },
            {
                "id": 89,
                "pid": 4,
                "name": "朔州市",
                "level": 2,
                "children2": [
                    {
                        "id": 1343,
                        "pid": 89,
                        "name": "右玉县",
                        "level": 3
                    },
                    {
                        "id": 1344,
                        "pid": 89,
                        "name": "山阴县",
                        "level": 3
                    },
                    {
                        "id": 1345,
                        "pid": 89,
                        "name": "平鲁区",
                        "level": 3
                    },
                    {
                        "id": 1346,
                        "pid": 89,
                        "name": "应县",
                        "level": 3
                    },
                    {
                        "id": 1347,
                        "pid": 89,
                        "name": "怀仁县",
                        "level": 3
                    },
                    {
                        "id": 1348,
                        "pid": 89,
                        "name": "朔城区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 90,
                "pid": 4,
                "name": "晋中市",
                "level": 2,
                "children2": [
                    {
                        "id": 1349,
                        "pid": 90,
                        "name": "介休市",
                        "level": 3
                    },
                    {
                        "id": 1350,
                        "pid": 90,
                        "name": "和顺县",
                        "level": 3
                    },
                    {
                        "id": 1351,
                        "pid": 90,
                        "name": "太谷县",
                        "level": 3
                    },
                    {
                        "id": 1352,
                        "pid": 90,
                        "name": "寿阳县",
                        "level": 3
                    },
                    {
                        "id": 1353,
                        "pid": 90,
                        "name": "左权县",
                        "level": 3
                    },
                    {
                        "id": 1354,
                        "pid": 90,
                        "name": "平遥县",
                        "level": 3
                    },
                    {
                        "id": 1355,
                        "pid": 90,
                        "name": "昔阳县",
                        "level": 3
                    },
                    {
                        "id": 1356,
                        "pid": 90,
                        "name": "榆次区",
                        "level": 3
                    },
                    {
                        "id": 1357,
                        "pid": 90,
                        "name": "榆社县",
                        "level": 3
                    },
                    {
                        "id": 1358,
                        "pid": 90,
                        "name": "灵石县",
                        "level": 3
                    },
                    {
                        "id": 1359,
                        "pid": 90,
                        "name": "祁县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 91,
                "pid": 4,
                "name": "运城市",
                "level": 2,
                "children2": [
                    {
                        "id": 1360,
                        "pid": 91,
                        "name": "万荣县",
                        "level": 3
                    },
                    {
                        "id": 1361,
                        "pid": 91,
                        "name": "临猗县",
                        "level": 3
                    },
                    {
                        "id": 1362,
                        "pid": 91,
                        "name": "垣曲县",
                        "level": 3
                    },
                    {
                        "id": 1363,
                        "pid": 91,
                        "name": "夏县",
                        "level": 3
                    },
                    {
                        "id": 1364,
                        "pid": 91,
                        "name": "平陆县",
                        "level": 3
                    },
                    {
                        "id": 1365,
                        "pid": 91,
                        "name": "新绛县",
                        "level": 3
                    },
                    {
                        "id": 1366,
                        "pid": 91,
                        "name": "永济市",
                        "level": 3
                    },
                    {
                        "id": 1367,
                        "pid": 91,
                        "name": "河津市",
                        "level": 3
                    },
                    {
                        "id": 1368,
                        "pid": 91,
                        "name": "盐湖区",
                        "level": 3
                    },
                    {
                        "id": 1369,
                        "pid": 91,
                        "name": "稷山县",
                        "level": 3
                    },
                    {
                        "id": 1370,
                        "pid": 91,
                        "name": "绛县",
                        "level": 3
                    },
                    {
                        "id": 1371,
                        "pid": 91,
                        "name": "芮城县",
                        "level": 3
                    },
                    {
                        "id": 1372,
                        "pid": 91,
                        "name": "闻喜县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 92,
                "pid": 4,
                "name": "忻州市",
                "level": 2,
                "children2": [
                    {
                        "id": 1373,
                        "pid": 92,
                        "name": "五台县",
                        "level": 3
                    },
                    {
                        "id": 1374,
                        "pid": 92,
                        "name": "五寨县",
                        "level": 3
                    },
                    {
                        "id": 1375,
                        "pid": 92,
                        "name": "代县",
                        "level": 3
                    },
                    {
                        "id": 1376,
                        "pid": 92,
                        "name": "保德县",
                        "level": 3
                    },
                    {
                        "id": 1377,
                        "pid": 92,
                        "name": "偏关县",
                        "level": 3
                    },
                    {
                        "id": 1378,
                        "pid": 92,
                        "name": "原平市",
                        "level": 3
                    },
                    {
                        "id": 1379,
                        "pid": 92,
                        "name": "宁武县",
                        "level": 3
                    },
                    {
                        "id": 1380,
                        "pid": 92,
                        "name": "定襄县",
                        "level": 3
                    },
                    {
                        "id": 1381,
                        "pid": 92,
                        "name": "岢岚县",
                        "level": 3
                    },
                    {
                        "id": 1382,
                        "pid": 92,
                        "name": "忻府区",
                        "level": 3
                    },
                    {
                        "id": 1383,
                        "pid": 92,
                        "name": "河曲县",
                        "level": 3
                    },
                    {
                        "id": 1384,
                        "pid": 92,
                        "name": "神池县",
                        "level": 3
                    },
                    {
                        "id": 1385,
                        "pid": 92,
                        "name": "繁峙县",
                        "level": 3
                    },
                    {
                        "id": 1386,
                        "pid": 92,
                        "name": "静乐县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 93,
                "pid": 4,
                "name": "临汾市",
                "level": 2,
                "children2": [
                    {
                        "id": 1387,
                        "pid": 93,
                        "name": "乡宁县",
                        "level": 3
                    },
                    {
                        "id": 1388,
                        "pid": 93,
                        "name": "侯马市",
                        "level": 3
                    },
                    {
                        "id": 1389,
                        "pid": 93,
                        "name": "古县",
                        "level": 3
                    },
                    {
                        "id": 1390,
                        "pid": 93,
                        "name": "吉县",
                        "level": 3
                    },
                    {
                        "id": 1391,
                        "pid": 93,
                        "name": "大宁县",
                        "level": 3
                    },
                    {
                        "id": 1392,
                        "pid": 93,
                        "name": "安泽县",
                        "level": 3
                    },
                    {
                        "id": 1393,
                        "pid": 93,
                        "name": "尧都区",
                        "level": 3
                    },
                    {
                        "id": 1394,
                        "pid": 93,
                        "name": "曲沃县",
                        "level": 3
                    },
                    {
                        "id": 1395,
                        "pid": 93,
                        "name": "永和县",
                        "level": 3
                    },
                    {
                        "id": 1396,
                        "pid": 93,
                        "name": "汾西县",
                        "level": 3
                    },
                    {
                        "id": 1397,
                        "pid": 93,
                        "name": "洪洞县",
                        "level": 3
                    },
                    {
                        "id": 1398,
                        "pid": 93,
                        "name": "浮山县",
                        "level": 3
                    },
                    {
                        "id": 1399,
                        "pid": 93,
                        "name": "翼城县",
                        "level": 3
                    },
                    {
                        "id": 1400,
                        "pid": 93,
                        "name": "蒲县",
                        "level": 3
                    },
                    {
                        "id": 1401,
                        "pid": 93,
                        "name": "襄汾县",
                        "level": 3
                    },
                    {
                        "id": 1402,
                        "pid": 93,
                        "name": "隰县",
                        "level": 3
                    },
                    {
                        "id": 1403,
                        "pid": 93,
                        "name": "霍州市",
                        "level": 3
                    }
                ]
            },
            {
                "id": 94,
                "pid": 4,
                "name": "吕梁市",
                "level": 2,
                "children2": [
                    {
                        "id": 1404,
                        "pid": 94,
                        "name": "中阳县",
                        "level": 3
                    },
                    {
                        "id": 1405,
                        "pid": 94,
                        "name": "临县",
                        "level": 3
                    },
                    {
                        "id": 1406,
                        "pid": 94,
                        "name": "交口县",
                        "level": 3
                    },
                    {
                        "id": 1407,
                        "pid": 94,
                        "name": "交城县",
                        "level": 3
                    },
                    {
                        "id": 1408,
                        "pid": 94,
                        "name": "兴县",
                        "level": 3
                    },
                    {
                        "id": 1409,
                        "pid": 94,
                        "name": "孝义市",
                        "level": 3
                    },
                    {
                        "id": 1410,
                        "pid": 94,
                        "name": "岚县",
                        "level": 3
                    },
                    {
                        "id": 1411,
                        "pid": 94,
                        "name": "文水县",
                        "level": 3
                    },
                    {
                        "id": 1412,
                        "pid": 94,
                        "name": "方山县",
                        "level": 3
                    },
                    {
                        "id": 1413,
                        "pid": 94,
                        "name": "柳林县",
                        "level": 3
                    },
                    {
                        "id": 1414,
                        "pid": 94,
                        "name": "汾阳市",
                        "level": 3
                    },
                    {
                        "id": 1415,
                        "pid": 94,
                        "name": "石楼县",
                        "level": 3
                    },
                    {
                        "id": 1416,
                        "pid": 94,
                        "name": "离石区",
                        "level": 3
                    }
                ]
            }
        ]
    },
    {
        "id": 5,
        "pid": 0,
        "name": "内蒙古自治区",
        "level": 1,
        "children": [
            {
                "id": 95,
                "pid": 5,
                "name": "呼和浩特市",
                "level": 2,
                "children2": [
                    {
                        "id": 1417,
                        "pid": 95,
                        "name": "和林格尔县",
                        "level": 3
                    },
                    {
                        "id": 1418,
                        "pid": 95,
                        "name": "回民区",
                        "level": 3
                    },
                    {
                        "id": 1419,
                        "pid": 95,
                        "name": "土默特左旗",
                        "level": 3
                    },
                    {
                        "id": 1420,
                        "pid": 95,
                        "name": "托克托县",
                        "level": 3
                    },
                    {
                        "id": 1421,
                        "pid": 95,
                        "name": "新城区",
                        "level": 3
                    },
                    {
                        "id": 1422,
                        "pid": 95,
                        "name": "武川县",
                        "level": 3
                    },
                    {
                        "id": 1423,
                        "pid": 95,
                        "name": "清水河县",
                        "level": 3
                    },
                    {
                        "id": 1424,
                        "pid": 95,
                        "name": "玉泉区",
                        "level": 3
                    },
                    {
                        "id": 1425,
                        "pid": 95,
                        "name": "赛罕区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 96,
                "pid": 5,
                "name": "包头市",
                "level": 2,
                "children2": [
                    {
                        "id": 1426,
                        "pid": 96,
                        "name": "东河区",
                        "level": 3
                    },
                    {
                        "id": 1427,
                        "pid": 96,
                        "name": "九原区",
                        "level": 3
                    },
                    {
                        "id": 1428,
                        "pid": 96,
                        "name": "固阳县",
                        "level": 3
                    },
                    {
                        "id": 1429,
                        "pid": 96,
                        "name": "土默特右旗",
                        "level": 3
                    },
                    {
                        "id": 1430,
                        "pid": 96,
                        "name": "昆都仑区",
                        "level": 3
                    },
                    {
                        "id": 1431,
                        "pid": 96,
                        "name": "白云矿区",
                        "level": 3
                    },
                    {
                        "id": 1432,
                        "pid": 96,
                        "name": "石拐区",
                        "level": 3
                    },
                    {
                        "id": 1433,
                        "pid": 96,
                        "name": "达尔罕茂明安联合旗",
                        "level": 3
                    },
                    {
                        "id": 1434,
                        "pid": 96,
                        "name": "青山区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 97,
                "pid": 5,
                "name": "乌海市",
                "level": 2,
                "children2": [
                    {
                        "id": 1435,
                        "pid": 97,
                        "name": "乌达区",
                        "level": 3
                    },
                    {
                        "id": 1436,
                        "pid": 97,
                        "name": "海勃湾区",
                        "level": 3
                    },
                    {
                        "id": 1437,
                        "pid": 97,
                        "name": "海南区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 98,
                "pid": 5,
                "name": "赤峰市",
                "level": 2,
                "children2": [
                    {
                        "id": 1438,
                        "pid": 98,
                        "name": "元宝山区",
                        "level": 3
                    },
                    {
                        "id": 1439,
                        "pid": 98,
                        "name": "克什克腾旗",
                        "level": 3
                    },
                    {
                        "id": 1440,
                        "pid": 98,
                        "name": "喀喇沁旗",
                        "level": 3
                    },
                    {
                        "id": 1441,
                        "pid": 98,
                        "name": "宁城县",
                        "level": 3
                    },
                    {
                        "id": 1442,
                        "pid": 98,
                        "name": "巴林右旗",
                        "level": 3
                    },
                    {
                        "id": 1443,
                        "pid": 98,
                        "name": "巴林左旗",
                        "level": 3
                    },
                    {
                        "id": 1444,
                        "pid": 98,
                        "name": "敖汉旗",
                        "level": 3
                    },
                    {
                        "id": 1445,
                        "pid": 98,
                        "name": "松山区",
                        "level": 3
                    },
                    {
                        "id": 1446,
                        "pid": 98,
                        "name": "林西县",
                        "level": 3
                    },
                    {
                        "id": 1447,
                        "pid": 98,
                        "name": "红山区",
                        "level": 3
                    },
                    {
                        "id": 1448,
                        "pid": 98,
                        "name": "翁牛特旗",
                        "level": 3
                    },
                    {
                        "id": 1449,
                        "pid": 98,
                        "name": "阿鲁科尔沁旗",
                        "level": 3
                    }
                ]
            },
            {
                "id": 99,
                "pid": 5,
                "name": "通辽市",
                "level": 2,
                "children2": [
                    {
                        "id": 1450,
                        "pid": 99,
                        "name": "奈曼旗",
                        "level": 3
                    },
                    {
                        "id": 1451,
                        "pid": 99,
                        "name": "库伦旗",
                        "level": 3
                    },
                    {
                        "id": 1452,
                        "pid": 99,
                        "name": "开鲁县",
                        "level": 3
                    },
                    {
                        "id": 1453,
                        "pid": 99,
                        "name": "扎鲁特旗",
                        "level": 3
                    },
                    {
                        "id": 1454,
                        "pid": 99,
                        "name": "科尔沁区",
                        "level": 3
                    },
                    {
                        "id": 1455,
                        "pid": 99,
                        "name": "科尔沁左翼中旗",
                        "level": 3
                    },
                    {
                        "id": 1456,
                        "pid": 99,
                        "name": "科尔沁左翼后旗",
                        "level": 3
                    },
                    {
                        "id": 1457,
                        "pid": 99,
                        "name": "霍林郭勒市",
                        "level": 3
                    }
                ]
            },
            {
                "id": 100,
                "pid": 5,
                "name": "鄂尔多斯市",
                "level": 2,
                "children2": [
                    {
                        "id": 1458,
                        "pid": 100,
                        "name": "东胜区",
                        "level": 3
                    },
                    {
                        "id": 1459,
                        "pid": 100,
                        "name": "乌审旗",
                        "level": 3
                    },
                    {
                        "id": 1460,
                        "pid": 100,
                        "name": "伊金霍洛旗",
                        "level": 3
                    },
                    {
                        "id": 1461,
                        "pid": 100,
                        "name": "准格尔旗",
                        "level": 3
                    },
                    {
                        "id": 1462,
                        "pid": 100,
                        "name": "杭锦旗",
                        "level": 3
                    },
                    {
                        "id": 1463,
                        "pid": 100,
                        "name": "达拉特旗",
                        "level": 3
                    },
                    {
                        "id": 1464,
                        "pid": 100,
                        "name": "鄂东胜区",
                        "level": 3
                    },
                    {
                        "id": 1465,
                        "pid": 100,
                        "name": "鄂托克前旗",
                        "level": 3
                    },
                    {
                        "id": 1466,
                        "pid": 100,
                        "name": "鄂托克旗",
                        "level": 3
                    }
                ]
            },
            {
                "id": 101,
                "pid": 5,
                "name": "呼伦贝尔市",
                "level": 2,
                "children2": [
                    {
                        "id": 1467,
                        "pid": 101,
                        "name": "扎兰屯市",
                        "level": 3
                    },
                    {
                        "id": 1468,
                        "pid": 101,
                        "name": "新巴尔虎右旗",
                        "level": 3
                    },
                    {
                        "id": 1469,
                        "pid": 101,
                        "name": "新巴尔虎左旗",
                        "level": 3
                    },
                    {
                        "id": 1470,
                        "pid": 101,
                        "name": "根河市",
                        "level": 3
                    },
                    {
                        "id": 1471,
                        "pid": 101,
                        "name": "海拉尔区",
                        "level": 3
                    },
                    {
                        "id": 1472,
                        "pid": 101,
                        "name": "满洲里市",
                        "level": 3
                    },
                    {
                        "id": 1473,
                        "pid": 101,
                        "name": "牙克石市",
                        "level": 3
                    },
                    {
                        "id": 1474,
                        "pid": 101,
                        "name": "莫力达瓦达斡尔族自治旗",
                        "level": 3
                    },
                    {
                        "id": 1475,
                        "pid": 101,
                        "name": "鄂伦春自治旗",
                        "level": 3
                    },
                    {
                        "id": 1476,
                        "pid": 101,
                        "name": "鄂温克族自治旗",
                        "level": 3
                    },
                    {
                        "id": 1477,
                        "pid": 101,
                        "name": "阿荣旗",
                        "level": 3
                    },
                    {
                        "id": 1478,
                        "pid": 101,
                        "name": "陈巴尔虎旗",
                        "level": 3
                    },
                    {
                        "id": 1479,
                        "pid": 101,
                        "name": "额尔古纳市",
                        "level": 3
                    }
                ]
            },
            {
                "id": 102,
                "pid": 5,
                "name": "巴彦淖尔市",
                "level": 2,
                "children2": [
                    {
                        "id": 1480,
                        "pid": 102,
                        "name": "临河区",
                        "level": 3
                    },
                    {
                        "id": 1481,
                        "pid": 102,
                        "name": "乌拉特中旗",
                        "level": 3
                    },
                    {
                        "id": 1482,
                        "pid": 102,
                        "name": "乌拉特前旗",
                        "level": 3
                    },
                    {
                        "id": 1483,
                        "pid": 102,
                        "name": "乌拉特后旗",
                        "level": 3
                    },
                    {
                        "id": 1484,
                        "pid": 102,
                        "name": "五原县",
                        "level": 3
                    },
                    {
                        "id": 1485,
                        "pid": 102,
                        "name": "杭锦后旗",
                        "level": 3
                    },
                    {
                        "id": 1486,
                        "pid": 102,
                        "name": "磴口县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 103,
                "pid": 5,
                "name": "乌兰察布市",
                "level": 2,
                "children2": [
                    {
                        "id": 1487,
                        "pid": 103,
                        "name": "丰镇市",
                        "level": 3
                    },
                    {
                        "id": 1488,
                        "pid": 103,
                        "name": "兴和县",
                        "level": 3
                    },
                    {
                        "id": 1489,
                        "pid": 103,
                        "name": "凉城县",
                        "level": 3
                    },
                    {
                        "id": 1490,
                        "pid": 103,
                        "name": "化德县",
                        "level": 3
                    },
                    {
                        "id": 1491,
                        "pid": 103,
                        "name": "卓资县",
                        "level": 3
                    },
                    {
                        "id": 1492,
                        "pid": 103,
                        "name": "商都县",
                        "level": 3
                    },
                    {
                        "id": 1493,
                        "pid": 103,
                        "name": "四子王旗",
                        "level": 3
                    },
                    {
                        "id": 1494,
                        "pid": 103,
                        "name": "察哈尔右翼中旗",
                        "level": 3
                    },
                    {
                        "id": 1495,
                        "pid": 103,
                        "name": "察哈尔右翼前旗",
                        "level": 3
                    },
                    {
                        "id": 1496,
                        "pid": 103,
                        "name": "察哈尔右翼后旗",
                        "level": 3
                    },
                    {
                        "id": 1497,
                        "pid": 103,
                        "name": "集宁区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 104,
                "pid": 5,
                "name": "兴安盟",
                "level": 2,
                "children2": [
                    {
                        "id": 1498,
                        "pid": 104,
                        "name": "乌兰浩特市",
                        "level": 3
                    },
                    {
                        "id": 1499,
                        "pid": 104,
                        "name": "扎赉特旗",
                        "level": 3
                    },
                    {
                        "id": 1500,
                        "pid": 104,
                        "name": "科尔沁右翼中旗",
                        "level": 3
                    },
                    {
                        "id": 1501,
                        "pid": 104,
                        "name": "科尔沁右翼前旗",
                        "level": 3
                    },
                    {
                        "id": 1502,
                        "pid": 104,
                        "name": "突泉县",
                        "level": 3
                    },
                    {
                        "id": 1503,
                        "pid": 104,
                        "name": "阿尔山市",
                        "level": 3
                    }
                ]
            },
            {
                "id": 105,
                "pid": 5,
                "name": "锡林郭勒盟",
                "level": 2,
                "children2": [
                    {
                        "id": 1504,
                        "pid": 105,
                        "name": "东乌珠穆沁旗",
                        "level": 3
                    },
                    {
                        "id": 1505,
                        "pid": 105,
                        "name": "二连浩特市",
                        "level": 3
                    },
                    {
                        "id": 1506,
                        "pid": 105,
                        "name": "多伦县",
                        "level": 3
                    },
                    {
                        "id": 1507,
                        "pid": 105,
                        "name": "太仆寺旗",
                        "level": 3
                    },
                    {
                        "id": 1508,
                        "pid": 105,
                        "name": "正蓝旗",
                        "level": 3
                    },
                    {
                        "id": 1509,
                        "pid": 105,
                        "name": "正镶白旗",
                        "level": 3
                    },
                    {
                        "id": 1510,
                        "pid": 105,
                        "name": "苏尼特右旗",
                        "level": 3
                    },
                    {
                        "id": 1511,
                        "pid": 105,
                        "name": "苏尼特左旗",
                        "level": 3
                    },
                    {
                        "id": 1512,
                        "pid": 105,
                        "name": "西乌珠穆沁旗",
                        "level": 3
                    },
                    {
                        "id": 1513,
                        "pid": 105,
                        "name": "锡林浩特市",
                        "level": 3
                    },
                    {
                        "id": 1514,
                        "pid": 105,
                        "name": "镶黄旗",
                        "level": 3
                    },
                    {
                        "id": 1515,
                        "pid": 105,
                        "name": "阿巴嘎旗",
                        "level": 3
                    }
                ]
            },
            {
                "id": 106,
                "pid": 5,
                "name": "阿拉善盟",
                "level": 2,
                "children2": [
                    {
                        "id": 1516,
                        "pid": 106,
                        "name": "阿拉善右旗",
                        "level": 3
                    },
                    {
                        "id": 1517,
                        "pid": 106,
                        "name": "阿拉善左旗",
                        "level": 3
                    },
                    {
                        "id": 1518,
                        "pid": 106,
                        "name": "额济纳旗",
                        "level": 3
                    }
                ]
            }
        ]
    },
    {
        "id": 6,
        "pid": 0,
        "name": "辽宁省",
        "level": 1,
        "children": [
            {
                "id": 107,
                "pid": 6,
                "name": "沈阳市",
                "level": 2,
                "children2": [
                    {
                        "id": 1519,
                        "pid": 107,
                        "name": "东陵区",
                        "level": 3
                    },
                    {
                        "id": 1520,
                        "pid": 107,
                        "name": "于洪区",
                        "level": 3
                    },
                    {
                        "id": 1521,
                        "pid": 107,
                        "name": "和平区",
                        "level": 3
                    },
                    {
                        "id": 1522,
                        "pid": 107,
                        "name": "大东区",
                        "level": 3
                    },
                    {
                        "id": 1523,
                        "pid": 107,
                        "name": "康平县",
                        "level": 3
                    },
                    {
                        "id": 1524,
                        "pid": 107,
                        "name": "新民市",
                        "level": 3
                    },
                    {
                        "id": 1525,
                        "pid": 107,
                        "name": "沈北新区",
                        "level": 3
                    },
                    {
                        "id": 1526,
                        "pid": 107,
                        "name": "沈河区",
                        "level": 3
                    },
                    {
                        "id": 1527,
                        "pid": 107,
                        "name": "法库县",
                        "level": 3
                    },
                    {
                        "id": 1528,
                        "pid": 107,
                        "name": "皇姑区",
                        "level": 3
                    },
                    {
                        "id": 1529,
                        "pid": 107,
                        "name": "苏家屯区",
                        "level": 3
                    },
                    {
                        "id": 1530,
                        "pid": 107,
                        "name": "辽中县",
                        "level": 3
                    },
                    {
                        "id": 1531,
                        "pid": 107,
                        "name": "铁西区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 108,
                "pid": 6,
                "name": "大连市",
                "level": 2,
                "children2": [
                    {
                        "id": 1532,
                        "pid": 108,
                        "name": "中山区",
                        "level": 3
                    },
                    {
                        "id": 1533,
                        "pid": 108,
                        "name": "庄河市",
                        "level": 3
                    },
                    {
                        "id": 1534,
                        "pid": 108,
                        "name": "旅顺口区",
                        "level": 3
                    },
                    {
                        "id": 1535,
                        "pid": 108,
                        "name": "普兰店市",
                        "level": 3
                    },
                    {
                        "id": 1536,
                        "pid": 108,
                        "name": "沙河口区",
                        "level": 3
                    },
                    {
                        "id": 1537,
                        "pid": 108,
                        "name": "瓦房店市",
                        "level": 3
                    },
                    {
                        "id": 1538,
                        "pid": 108,
                        "name": "甘井子区",
                        "level": 3
                    },
                    {
                        "id": 1539,
                        "pid": 108,
                        "name": "西岗区",
                        "level": 3
                    },
                    {
                        "id": 1540,
                        "pid": 108,
                        "name": "金州区",
                        "level": 3
                    },
                    {
                        "id": 1541,
                        "pid": 108,
                        "name": "长海县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 109,
                "pid": 6,
                "name": "鞍山市",
                "level": 2,
                "children2": [
                    {
                        "id": 1542,
                        "pid": 109,
                        "name": "千山区",
                        "level": 3
                    },
                    {
                        "id": 1543,
                        "pid": 109,
                        "name": "台安县",
                        "level": 3
                    },
                    {
                        "id": 1544,
                        "pid": 109,
                        "name": "岫岩满族自治县",
                        "level": 3
                    },
                    {
                        "id": 1545,
                        "pid": 109,
                        "name": "海城市",
                        "level": 3
                    },
                    {
                        "id": 1546,
                        "pid": 109,
                        "name": "立山区",
                        "level": 3
                    },
                    {
                        "id": 1547,
                        "pid": 109,
                        "name": "铁东区",
                        "level": 3
                    },
                    {
                        "id": 1548,
                        "pid": 109,
                        "name": "铁西区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 110,
                "pid": 6,
                "name": "抚顺市",
                "level": 2,
                "children2": [
                    {
                        "id": 1549,
                        "pid": 110,
                        "name": "东洲区",
                        "level": 3
                    },
                    {
                        "id": 1550,
                        "pid": 110,
                        "name": "抚顺县",
                        "level": 3
                    },
                    {
                        "id": 1551,
                        "pid": 110,
                        "name": "新宾满族自治县",
                        "level": 3
                    },
                    {
                        "id": 1552,
                        "pid": 110,
                        "name": "新抚区",
                        "level": 3
                    },
                    {
                        "id": 1553,
                        "pid": 110,
                        "name": "望花区",
                        "level": 3
                    },
                    {
                        "id": 1554,
                        "pid": 110,
                        "name": "清原满族自治县",
                        "level": 3
                    },
                    {
                        "id": 1555,
                        "pid": 110,
                        "name": "顺城区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 111,
                "pid": 6,
                "name": "本溪市",
                "level": 2,
                "children2": [
                    {
                        "id": 1556,
                        "pid": 111,
                        "name": "南芬区",
                        "level": 3
                    },
                    {
                        "id": 1557,
                        "pid": 111,
                        "name": "平山区",
                        "level": 3
                    },
                    {
                        "id": 1558,
                        "pid": 111,
                        "name": "明山区",
                        "level": 3
                    },
                    {
                        "id": 1559,
                        "pid": 111,
                        "name": "本溪满族自治县",
                        "level": 3
                    },
                    {
                        "id": 1560,
                        "pid": 111,
                        "name": "桓仁满族自治县",
                        "level": 3
                    },
                    {
                        "id": 1561,
                        "pid": 111,
                        "name": "溪湖区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 112,
                "pid": 6,
                "name": "丹东市",
                "level": 2,
                "children2": [
                    {
                        "id": 1562,
                        "pid": 112,
                        "name": "东港市",
                        "level": 3
                    },
                    {
                        "id": 1563,
                        "pid": 112,
                        "name": "元宝区",
                        "level": 3
                    },
                    {
                        "id": 1564,
                        "pid": 112,
                        "name": "凤城市",
                        "level": 3
                    },
                    {
                        "id": 1565,
                        "pid": 112,
                        "name": "宽甸满族自治县",
                        "level": 3
                    },
                    {
                        "id": 1566,
                        "pid": 112,
                        "name": "振兴区",
                        "level": 3
                    },
                    {
                        "id": 1567,
                        "pid": 112,
                        "name": "振安区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 113,
                "pid": 6,
                "name": "锦州市",
                "level": 2,
                "children2": [
                    {
                        "id": 1568,
                        "pid": 113,
                        "name": "义县",
                        "level": 3
                    },
                    {
                        "id": 1569,
                        "pid": 113,
                        "name": "凌河区",
                        "level": 3
                    },
                    {
                        "id": 1570,
                        "pid": 113,
                        "name": "凌海市",
                        "level": 3
                    },
                    {
                        "id": 1571,
                        "pid": 113,
                        "name": "北镇市",
                        "level": 3
                    },
                    {
                        "id": 1572,
                        "pid": 113,
                        "name": "古塔区",
                        "level": 3
                    },
                    {
                        "id": 1573,
                        "pid": 113,
                        "name": "太和区",
                        "level": 3
                    },
                    {
                        "id": 1574,
                        "pid": 113,
                        "name": "黑山县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 114,
                "pid": 6,
                "name": "营口市",
                "level": 2,
                "children2": [
                    {
                        "id": 1575,
                        "pid": 114,
                        "name": "大石桥市",
                        "level": 3
                    },
                    {
                        "id": 1576,
                        "pid": 114,
                        "name": "盖州市",
                        "level": 3
                    },
                    {
                        "id": 1577,
                        "pid": 114,
                        "name": "站前区",
                        "level": 3
                    },
                    {
                        "id": 1578,
                        "pid": 114,
                        "name": "老边区",
                        "level": 3
                    },
                    {
                        "id": 1579,
                        "pid": 114,
                        "name": "西市区",
                        "level": 3
                    },
                    {
                        "id": 1580,
                        "pid": 114,
                        "name": "鲅鱼圈区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 115,
                "pid": 6,
                "name": "阜新市",
                "level": 2,
                "children2": [
                    {
                        "id": 1581,
                        "pid": 115,
                        "name": "太平区",
                        "level": 3
                    },
                    {
                        "id": 1582,
                        "pid": 115,
                        "name": "彰武县",
                        "level": 3
                    },
                    {
                        "id": 1583,
                        "pid": 115,
                        "name": "新邱区",
                        "level": 3
                    },
                    {
                        "id": 1584,
                        "pid": 115,
                        "name": "海州区",
                        "level": 3
                    },
                    {
                        "id": 1585,
                        "pid": 115,
                        "name": "清河门区",
                        "level": 3
                    },
                    {
                        "id": 1586,
                        "pid": 115,
                        "name": "细河区",
                        "level": 3
                    },
                    {
                        "id": 1587,
                        "pid": 115,
                        "name": "蒙古族自治县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 116,
                "pid": 6,
                "name": "辽阳市",
                "level": 2,
                "children2": [
                    {
                        "id": 1588,
                        "pid": 116,
                        "name": "太子河区",
                        "level": 3
                    },
                    {
                        "id": 1589,
                        "pid": 116,
                        "name": "宏伟区",
                        "level": 3
                    },
                    {
                        "id": 1590,
                        "pid": 116,
                        "name": "弓长岭区",
                        "level": 3
                    },
                    {
                        "id": 1591,
                        "pid": 116,
                        "name": "文圣区",
                        "level": 3
                    },
                    {
                        "id": 1592,
                        "pid": 116,
                        "name": "灯塔市",
                        "level": 3
                    },
                    {
                        "id": 1593,
                        "pid": 116,
                        "name": "白塔区",
                        "level": 3
                    },
                    {
                        "id": 1594,
                        "pid": 116,
                        "name": "辽阳县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 117,
                "pid": 6,
                "name": "盘锦市",
                "level": 2,
                "children2": [
                    {
                        "id": 1595,
                        "pid": 117,
                        "name": "兴隆台区",
                        "level": 3
                    },
                    {
                        "id": 1596,
                        "pid": 117,
                        "name": "双台子区",
                        "level": 3
                    },
                    {
                        "id": 1597,
                        "pid": 117,
                        "name": "大洼县",
                        "level": 3
                    },
                    {
                        "id": 1598,
                        "pid": 117,
                        "name": "盘山县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 118,
                "pid": 6,
                "name": "铁岭市",
                "level": 2,
                "children2": [
                    {
                        "id": 1599,
                        "pid": 118,
                        "name": "开原市",
                        "level": 3
                    },
                    {
                        "id": 1600,
                        "pid": 118,
                        "name": "昌图县",
                        "level": 3
                    },
                    {
                        "id": 1601,
                        "pid": 118,
                        "name": "清河区",
                        "level": 3
                    },
                    {
                        "id": 1602,
                        "pid": 118,
                        "name": "西丰县",
                        "level": 3
                    },
                    {
                        "id": 1603,
                        "pid": 118,
                        "name": "调兵山市",
                        "level": 3
                    },
                    {
                        "id": 1604,
                        "pid": 118,
                        "name": "铁岭县",
                        "level": 3
                    },
                    {
                        "id": 1605,
                        "pid": 118,
                        "name": "银州区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 119,
                "pid": 6,
                "name": "朝阳市",
                "level": 2,
                "children2": [
                    {
                        "id": 1606,
                        "pid": 119,
                        "name": "凌源市",
                        "level": 3
                    },
                    {
                        "id": 1607,
                        "pid": 119,
                        "name": "北票市",
                        "level": 3
                    },
                    {
                        "id": 1608,
                        "pid": 119,
                        "name": "双塔区",
                        "level": 3
                    },
                    {
                        "id": 1609,
                        "pid": 119,
                        "name": "喀喇沁左翼蒙古族自治县",
                        "level": 3
                    },
                    {
                        "id": 1610,
                        "pid": 119,
                        "name": "建平县",
                        "level": 3
                    },
                    {
                        "id": 1611,
                        "pid": 119,
                        "name": "朝阳县",
                        "level": 3
                    },
                    {
                        "id": 1612,
                        "pid": 119,
                        "name": "龙城区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 120,
                "pid": 6,
                "name": "葫芦岛市",
                "level": 2,
                "children2": [
                    {
                        "id": 1613,
                        "pid": 120,
                        "name": "兴城市",
                        "level": 3
                    },
                    {
                        "id": 1614,
                        "pid": 120,
                        "name": "南票区",
                        "level": 3
                    },
                    {
                        "id": 1615,
                        "pid": 120,
                        "name": "建昌县",
                        "level": 3
                    },
                    {
                        "id": 1616,
                        "pid": 120,
                        "name": "绥中县",
                        "level": 3
                    },
                    {
                        "id": 1617,
                        "pid": 120,
                        "name": "连山区",
                        "level": 3
                    },
                    {
                        "id": 1618,
                        "pid": 120,
                        "name": "龙港区",
                        "level": 3
                    }
                ]
            }
        ]
    },
    {
        "id": 7,
        "pid": 0,
        "name": "吉林省",
        "level": 1,
        "children": [
            {
                "id": 121,
                "pid": 7,
                "name": "长春市",
                "level": 2,
                "children2": [
                    {
                        "id": 1619,
                        "pid": 121,
                        "name": "九台市",
                        "level": 3
                    },
                    {
                        "id": 1620,
                        "pid": 121,
                        "name": "二道区",
                        "level": 3
                    },
                    {
                        "id": 1621,
                        "pid": 121,
                        "name": "农安县",
                        "level": 3
                    },
                    {
                        "id": 1622,
                        "pid": 121,
                        "name": "南关区",
                        "level": 3
                    },
                    {
                        "id": 1623,
                        "pid": 121,
                        "name": "双阳区",
                        "level": 3
                    },
                    {
                        "id": 1624,
                        "pid": 121,
                        "name": "宽城区",
                        "level": 3
                    },
                    {
                        "id": 1625,
                        "pid": 121,
                        "name": "德惠市",
                        "level": 3
                    },
                    {
                        "id": 1626,
                        "pid": 121,
                        "name": "朝阳区",
                        "level": 3
                    },
                    {
                        "id": 1627,
                        "pid": 121,
                        "name": "榆树市",
                        "level": 3
                    },
                    {
                        "id": 1628,
                        "pid": 121,
                        "name": "绿园区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 122,
                "pid": 7,
                "name": "吉林市",
                "level": 2,
                "children2": [
                    {
                        "id": 1629,
                        "pid": 122,
                        "name": "丰满区",
                        "level": 3
                    },
                    {
                        "id": 1630,
                        "pid": 122,
                        "name": "昌邑区",
                        "level": 3
                    },
                    {
                        "id": 1631,
                        "pid": 122,
                        "name": "桦甸市",
                        "level": 3
                    },
                    {
                        "id": 1632,
                        "pid": 122,
                        "name": "永吉县",
                        "level": 3
                    },
                    {
                        "id": 1633,
                        "pid": 122,
                        "name": "磐石市",
                        "level": 3
                    },
                    {
                        "id": 1634,
                        "pid": 122,
                        "name": "舒兰市",
                        "level": 3
                    },
                    {
                        "id": 1635,
                        "pid": 122,
                        "name": "船营区",
                        "level": 3
                    },
                    {
                        "id": 1636,
                        "pid": 122,
                        "name": "蛟河市",
                        "level": 3
                    },
                    {
                        "id": 1637,
                        "pid": 122,
                        "name": "龙潭区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 123,
                "pid": 7,
                "name": "四平市",
                "level": 2,
                "children2": [
                    {
                        "id": 1638,
                        "pid": 123,
                        "name": "伊通满族自治县",
                        "level": 3
                    },
                    {
                        "id": 1639,
                        "pid": 123,
                        "name": "公主岭市",
                        "level": 3
                    },
                    {
                        "id": 1640,
                        "pid": 123,
                        "name": "双辽市",
                        "level": 3
                    },
                    {
                        "id": 1641,
                        "pid": 123,
                        "name": "梨树县",
                        "level": 3
                    },
                    {
                        "id": 1642,
                        "pid": 123,
                        "name": "铁东区",
                        "level": 3
                    },
                    {
                        "id": 1643,
                        "pid": 123,
                        "name": "铁西区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 124,
                "pid": 7,
                "name": "辽源市",
                "level": 2,
                "children2": [
                    {
                        "id": 1644,
                        "pid": 124,
                        "name": "东丰县",
                        "level": 3
                    },
                    {
                        "id": 1645,
                        "pid": 124,
                        "name": "东辽县",
                        "level": 3
                    },
                    {
                        "id": 1646,
                        "pid": 124,
                        "name": "西安区",
                        "level": 3
                    },
                    {
                        "id": 1647,
                        "pid": 124,
                        "name": "龙山区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 125,
                "pid": 7,
                "name": "通化市",
                "level": 2,
                "children2": [
                    {
                        "id": 1648,
                        "pid": 125,
                        "name": "东昌区",
                        "level": 3
                    },
                    {
                        "id": 1649,
                        "pid": 125,
                        "name": "二道江区",
                        "level": 3
                    },
                    {
                        "id": 1650,
                        "pid": 125,
                        "name": "柳河县",
                        "level": 3
                    },
                    {
                        "id": 1651,
                        "pid": 125,
                        "name": "梅河口市",
                        "level": 3
                    },
                    {
                        "id": 1652,
                        "pid": 125,
                        "name": "辉南县",
                        "level": 3
                    },
                    {
                        "id": 1653,
                        "pid": 125,
                        "name": "通化县",
                        "level": 3
                    },
                    {
                        "id": 1654,
                        "pid": 125,
                        "name": "集安市",
                        "level": 3
                    }
                ]
            },
            {
                "id": 126,
                "pid": 7,
                "name": "白山市",
                "level": 2,
                "children2": [
                    {
                        "id": 1655,
                        "pid": 126,
                        "name": "临江市",
                        "level": 3
                    },
                    {
                        "id": 1656,
                        "pid": 126,
                        "name": "八道江区",
                        "level": 3
                    },
                    {
                        "id": 1657,
                        "pid": 126,
                        "name": "抚松县",
                        "level": 3
                    },
                    {
                        "id": 1658,
                        "pid": 126,
                        "name": "江源区",
                        "level": 3
                    },
                    {
                        "id": 1659,
                        "pid": 126,
                        "name": "长白朝鲜族自治县",
                        "level": 3
                    },
                    {
                        "id": 1660,
                        "pid": 126,
                        "name": "靖宇县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 127,
                "pid": 7,
                "name": "松原市",
                "level": 2,
                "children2": [
                    {
                        "id": 1661,
                        "pid": 127,
                        "name": "干安县",
                        "level": 3
                    },
                    {
                        "id": 1662,
                        "pid": 127,
                        "name": "前郭尔罗斯蒙古族自治县",
                        "level": 3
                    },
                    {
                        "id": 1663,
                        "pid": 127,
                        "name": "宁江区",
                        "level": 3
                    },
                    {
                        "id": 1664,
                        "pid": 127,
                        "name": "扶余县",
                        "level": 3
                    },
                    {
                        "id": 1665,
                        "pid": 127,
                        "name": "长岭县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 128,
                "pid": 7,
                "name": "白城市",
                "level": 2,
                "children2": [
                    {
                        "id": 1666,
                        "pid": 128,
                        "name": "大安市",
                        "level": 3
                    },
                    {
                        "id": 1667,
                        "pid": 128,
                        "name": "洮北区",
                        "level": 3
                    },
                    {
                        "id": 1668,
                        "pid": 128,
                        "name": "洮南市",
                        "level": 3
                    },
                    {
                        "id": 1669,
                        "pid": 128,
                        "name": "通榆县",
                        "level": 3
                    },
                    {
                        "id": 1670,
                        "pid": 128,
                        "name": "镇赉县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 129,
                "pid": 7,
                "name": "延边朝鲜族自治州",
                "level": 2,
                "children2": [
                    {
                        "id": 1671,
                        "pid": 129,
                        "name": "和龙市",
                        "level": 3
                    },
                    {
                        "id": 1672,
                        "pid": 129,
                        "name": "图们市",
                        "level": 3
                    },
                    {
                        "id": 1673,
                        "pid": 129,
                        "name": "安图县",
                        "level": 3
                    },
                    {
                        "id": 1674,
                        "pid": 129,
                        "name": "延吉市",
                        "level": 3
                    },
                    {
                        "id": 1675,
                        "pid": 129,
                        "name": "敦化市",
                        "level": 3
                    },
                    {
                        "id": 1676,
                        "pid": 129,
                        "name": "汪清县",
                        "level": 3
                    },
                    {
                        "id": 1677,
                        "pid": 129,
                        "name": "珲春市",
                        "level": 3
                    },
                    {
                        "id": 1678,
                        "pid": 129,
                        "name": "龙井市",
                        "level": 3
                    }
                ]
            }
        ]
    },
    {
        "id": 8,
        "pid": 0,
        "name": "黑龙江省",
        "level": 1,
        "children": [
            {
                "id": 130,
                "pid": 8,
                "name": "哈尔滨市",
                "level": 2,
                "children2": [
                    {
                        "id": 1679,
                        "pid": 130,
                        "name": "五常市",
                        "level": 3
                    },
                    {
                        "id": 1680,
                        "pid": 130,
                        "name": "依兰县",
                        "level": 3
                    },
                    {
                        "id": 1681,
                        "pid": 130,
                        "name": "南岗区",
                        "level": 3
                    },
                    {
                        "id": 1682,
                        "pid": 130,
                        "name": "双城市",
                        "level": 3
                    },
                    {
                        "id": 1683,
                        "pid": 130,
                        "name": "呼兰区",
                        "level": 3
                    },
                    {
                        "id": 1684,
                        "pid": 130,
                        "name": "哈尔滨市道里区",
                        "level": 3
                    },
                    {
                        "id": 1685,
                        "pid": 130,
                        "name": "宾县",
                        "level": 3
                    },
                    {
                        "id": 1686,
                        "pid": 130,
                        "name": "尚志市",
                        "level": 3
                    },
                    {
                        "id": 1687,
                        "pid": 130,
                        "name": "巴彦县",
                        "level": 3
                    },
                    {
                        "id": 1688,
                        "pid": 130,
                        "name": "平房区",
                        "level": 3
                    },
                    {
                        "id": 1689,
                        "pid": 130,
                        "name": "延寿县",
                        "level": 3
                    },
                    {
                        "id": 1690,
                        "pid": 130,
                        "name": "方正县",
                        "level": 3
                    },
                    {
                        "id": 1691,
                        "pid": 130,
                        "name": "木兰县",
                        "level": 3
                    },
                    {
                        "id": 1692,
                        "pid": 130,
                        "name": "松北区",
                        "level": 3
                    },
                    {
                        "id": 1693,
                        "pid": 130,
                        "name": "通河县",
                        "level": 3
                    },
                    {
                        "id": 1694,
                        "pid": 130,
                        "name": "道外区",
                        "level": 3
                    },
                    {
                        "id": 1695,
                        "pid": 130,
                        "name": "阿城区",
                        "level": 3
                    },
                    {
                        "id": 1696,
                        "pid": 130,
                        "name": "香坊区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 131,
                "pid": 8,
                "name": "齐齐哈尔市",
                "level": 2,
                "children2": [
                    {
                        "id": 1697,
                        "pid": 131,
                        "name": "依安县",
                        "level": 3
                    },
                    {
                        "id": 1698,
                        "pid": 131,
                        "name": "克东县",
                        "level": 3
                    },
                    {
                        "id": 1699,
                        "pid": 131,
                        "name": "克山县",
                        "level": 3
                    },
                    {
                        "id": 1700,
                        "pid": 131,
                        "name": "富拉尔基区",
                        "level": 3
                    },
                    {
                        "id": 1701,
                        "pid": 131,
                        "name": "富裕县",
                        "level": 3
                    },
                    {
                        "id": 1702,
                        "pid": 131,
                        "name": "建华区",
                        "level": 3
                    },
                    {
                        "id": 1703,
                        "pid": 131,
                        "name": "拜泉县",
                        "level": 3
                    },
                    {
                        "id": 1704,
                        "pid": 131,
                        "name": "昂昂溪区",
                        "level": 3
                    },
                    {
                        "id": 1705,
                        "pid": 131,
                        "name": "梅里斯达斡尔族区",
                        "level": 3
                    },
                    {
                        "id": 1706,
                        "pid": 131,
                        "name": "泰来县",
                        "level": 3
                    },
                    {
                        "id": 1707,
                        "pid": 131,
                        "name": "甘南县",
                        "level": 3
                    },
                    {
                        "id": 1708,
                        "pid": 131,
                        "name": "碾子山区",
                        "level": 3
                    },
                    {
                        "id": 1709,
                        "pid": 131,
                        "name": "讷河市",
                        "level": 3
                    },
                    {
                        "id": 1710,
                        "pid": 131,
                        "name": "铁锋区",
                        "level": 3
                    },
                    {
                        "id": 1711,
                        "pid": 131,
                        "name": "龙江县",
                        "level": 3
                    },
                    {
                        "id": 1712,
                        "pid": 131,
                        "name": "龙沙区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 132,
                "pid": 8,
                "name": "鸡西市",
                "level": 2,
                "children2": [
                    {
                        "id": 1713,
                        "pid": 132,
                        "name": "城子河区",
                        "level": 3
                    },
                    {
                        "id": 1714,
                        "pid": 132,
                        "name": "密山市",
                        "level": 3
                    },
                    {
                        "id": 1715,
                        "pid": 132,
                        "name": "恒山区",
                        "level": 3
                    },
                    {
                        "id": 1716,
                        "pid": 132,
                        "name": "梨树区",
                        "level": 3
                    },
                    {
                        "id": 1717,
                        "pid": 132,
                        "name": "滴道区",
                        "level": 3
                    },
                    {
                        "id": 1718,
                        "pid": 132,
                        "name": "虎林市",
                        "level": 3
                    },
                    {
                        "id": 1719,
                        "pid": 132,
                        "name": "鸡东县",
                        "level": 3
                    },
                    {
                        "id": 1720,
                        "pid": 132,
                        "name": "鸡冠区",
                        "level": 3
                    },
                    {
                        "id": 1721,
                        "pid": 132,
                        "name": "麻山区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 133,
                "pid": 8,
                "name": "鹤岗市",
                "level": 2,
                "children2": [
                    {
                        "id": 1722,
                        "pid": 133,
                        "name": "东山区",
                        "level": 3
                    },
                    {
                        "id": 1723,
                        "pid": 133,
                        "name": "兴安区",
                        "level": 3
                    },
                    {
                        "id": 1724,
                        "pid": 133,
                        "name": "兴山区",
                        "level": 3
                    },
                    {
                        "id": 1725,
                        "pid": 133,
                        "name": "南山区",
                        "level": 3
                    },
                    {
                        "id": 1726,
                        "pid": 133,
                        "name": "向阳区",
                        "level": 3
                    },
                    {
                        "id": 1727,
                        "pid": 133,
                        "name": "工农区",
                        "level": 3
                    },
                    {
                        "id": 1728,
                        "pid": 133,
                        "name": "绥滨县",
                        "level": 3
                    },
                    {
                        "id": 1729,
                        "pid": 133,
                        "name": "萝北县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 134,
                "pid": 8,
                "name": "双鸭山市",
                "level": 2,
                "children2": [
                    {
                        "id": 1730,
                        "pid": 134,
                        "name": "友谊县",
                        "level": 3
                    },
                    {
                        "id": 1731,
                        "pid": 134,
                        "name": "四方台区",
                        "level": 3
                    },
                    {
                        "id": 1732,
                        "pid": 134,
                        "name": "宝山区",
                        "level": 3
                    },
                    {
                        "id": 1733,
                        "pid": 134,
                        "name": "宝清县",
                        "level": 3
                    },
                    {
                        "id": 1734,
                        "pid": 134,
                        "name": "尖山区",
                        "level": 3
                    },
                    {
                        "id": 1735,
                        "pid": 134,
                        "name": "岭东区",
                        "level": 3
                    },
                    {
                        "id": 1736,
                        "pid": 134,
                        "name": "集贤县",
                        "level": 3
                    },
                    {
                        "id": 1737,
                        "pid": 134,
                        "name": "饶河县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 135,
                "pid": 8,
                "name": "大庆市",
                "level": 2,
                "children2": [
                    {
                        "id": 1738,
                        "pid": 135,
                        "name": "大同区",
                        "level": 3
                    },
                    {
                        "id": 1739,
                        "pid": 135,
                        "name": "杜尔伯特蒙古族自治县",
                        "level": 3
                    },
                    {
                        "id": 1740,
                        "pid": 135,
                        "name": "林甸县",
                        "level": 3
                    },
                    {
                        "id": 1741,
                        "pid": 135,
                        "name": "红岗区",
                        "level": 3
                    },
                    {
                        "id": 1742,
                        "pid": 135,
                        "name": "肇州县",
                        "level": 3
                    },
                    {
                        "id": 1743,
                        "pid": 135,
                        "name": "肇源县",
                        "level": 3
                    },
                    {
                        "id": 1744,
                        "pid": 135,
                        "name": "胡路区",
                        "level": 3
                    },
                    {
                        "id": 1745,
                        "pid": 135,
                        "name": "萨尔图区",
                        "level": 3
                    },
                    {
                        "id": 1746,
                        "pid": 135,
                        "name": "龙凤区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 136,
                "pid": 8,
                "name": "伊春市",
                "level": 2,
                "children2": [
                    {
                        "id": 1747,
                        "pid": 136,
                        "name": "上甘岭区",
                        "level": 3
                    },
                    {
                        "id": 1748,
                        "pid": 136,
                        "name": "乌伊岭区",
                        "level": 3
                    },
                    {
                        "id": 1749,
                        "pid": 136,
                        "name": "乌马河区",
                        "level": 3
                    },
                    {
                        "id": 1750,
                        "pid": 136,
                        "name": "五营区",
                        "level": 3
                    },
                    {
                        "id": 1751,
                        "pid": 136,
                        "name": "伊春区",
                        "level": 3
                    },
                    {
                        "id": 1752,
                        "pid": 136,
                        "name": "南岔区",
                        "level": 3
                    },
                    {
                        "id": 1753,
                        "pid": 136,
                        "name": "友好区",
                        "level": 3
                    },
                    {
                        "id": 1754,
                        "pid": 136,
                        "name": "嘉荫县",
                        "level": 3
                    },
                    {
                        "id": 1755,
                        "pid": 136,
                        "name": "带岭区",
                        "level": 3
                    },
                    {
                        "id": 1756,
                        "pid": 136,
                        "name": "新青区",
                        "level": 3
                    },
                    {
                        "id": 1757,
                        "pid": 136,
                        "name": "汤旺河区",
                        "level": 3
                    },
                    {
                        "id": 1758,
                        "pid": 136,
                        "name": "红星区",
                        "level": 3
                    },
                    {
                        "id": 1759,
                        "pid": 136,
                        "name": "美溪区",
                        "level": 3
                    },
                    {
                        "id": 1760,
                        "pid": 136,
                        "name": "翠峦区",
                        "level": 3
                    },
                    {
                        "id": 1761,
                        "pid": 136,
                        "name": "西林区",
                        "level": 3
                    },
                    {
                        "id": 1762,
                        "pid": 136,
                        "name": "金山屯区",
                        "level": 3
                    },
                    {
                        "id": 1763,
                        "pid": 136,
                        "name": "铁力市",
                        "level": 3
                    }
                ]
            },
            {
                "id": 137,
                "pid": 8,
                "name": "佳木斯市",
                "level": 2,
                "children2": [
                    {
                        "id": 1764,
                        "pid": 137,
                        "name": "东风区",
                        "level": 3
                    },
                    {
                        "id": 1765,
                        "pid": 137,
                        "name": "前进区",
                        "level": 3
                    },
                    {
                        "id": 1766,
                        "pid": 137,
                        "name": "同江市",
                        "level": 3
                    },
                    {
                        "id": 1767,
                        "pid": 137,
                        "name": "向阳区",
                        "level": 3
                    },
                    {
                        "id": 1768,
                        "pid": 137,
                        "name": "富锦市",
                        "level": 3
                    },
                    {
                        "id": 1769,
                        "pid": 137,
                        "name": "抚远县",
                        "level": 3
                    },
                    {
                        "id": 1770,
                        "pid": 137,
                        "name": "桦南县",
                        "level": 3
                    },
                    {
                        "id": 1771,
                        "pid": 137,
                        "name": "桦川县",
                        "level": 3
                    },
                    {
                        "id": 1772,
                        "pid": 137,
                        "name": "汤原县",
                        "level": 3
                    },
                    {
                        "id": 1773,
                        "pid": 137,
                        "name": "郊区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 138,
                "pid": 8,
                "name": "七台河市",
                "level": 2,
                "children2": [
                    {
                        "id": 1774,
                        "pid": 138,
                        "name": "勃利县",
                        "level": 3
                    },
                    {
                        "id": 1775,
                        "pid": 138,
                        "name": "新兴区",
                        "level": 3
                    },
                    {
                        "id": 1776,
                        "pid": 138,
                        "name": "桃山区",
                        "level": 3
                    },
                    {
                        "id": 1777,
                        "pid": 138,
                        "name": "茄子河区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 139,
                "pid": 8,
                "name": "牡丹江市",
                "level": 2,
                "children2": [
                    {
                        "id": 1778,
                        "pid": 139,
                        "name": "东宁县",
                        "level": 3
                    },
                    {
                        "id": 1779,
                        "pid": 139,
                        "name": "东安区",
                        "level": 3
                    },
                    {
                        "id": 1780,
                        "pid": 139,
                        "name": "宁安市",
                        "level": 3
                    },
                    {
                        "id": 1781,
                        "pid": 139,
                        "name": "林口县",
                        "level": 3
                    },
                    {
                        "id": 1782,
                        "pid": 139,
                        "name": "海林市",
                        "level": 3
                    },
                    {
                        "id": 1783,
                        "pid": 139,
                        "name": "爱民区",
                        "level": 3
                    },
                    {
                        "id": 1784,
                        "pid": 139,
                        "name": "穆棱市",
                        "level": 3
                    },
                    {
                        "id": 1785,
                        "pid": 139,
                        "name": "绥芬河市",
                        "level": 3
                    },
                    {
                        "id": 1786,
                        "pid": 139,
                        "name": "西安区",
                        "level": 3
                    },
                    {
                        "id": 1787,
                        "pid": 139,
                        "name": "阳明区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 140,
                "pid": 8,
                "name": "黑河市",
                "level": 2,
                "children2": [
                    {
                        "id": 1788,
                        "pid": 140,
                        "name": "五大连池市",
                        "level": 3
                    },
                    {
                        "id": 1789,
                        "pid": 140,
                        "name": "北安市",
                        "level": 3
                    },
                    {
                        "id": 1790,
                        "pid": 140,
                        "name": "嫩江县",
                        "level": 3
                    },
                    {
                        "id": 1791,
                        "pid": 140,
                        "name": "孙吴县",
                        "level": 3
                    },
                    {
                        "id": 1792,
                        "pid": 140,
                        "name": "爱辉区",
                        "level": 3
                    },
                    {
                        "id": 1793,
                        "pid": 140,
                        "name": "车逊克县",
                        "level": 3
                    },
                    {
                        "id": 1794,
                        "pid": 140,
                        "name": "逊克县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 141,
                "pid": 8,
                "name": "绥化市",
                "level": 2,
                "children2": [
                    {
                        "id": 1795,
                        "pid": 141,
                        "name": "兰西县",
                        "level": 3
                    },
                    {
                        "id": 1796,
                        "pid": 141,
                        "name": "安达市",
                        "level": 3
                    },
                    {
                        "id": 1797,
                        "pid": 141,
                        "name": "庆安县",
                        "level": 3
                    },
                    {
                        "id": 1798,
                        "pid": 141,
                        "name": "明水县",
                        "level": 3
                    },
                    {
                        "id": 1799,
                        "pid": 141,
                        "name": "望奎县",
                        "level": 3
                    },
                    {
                        "id": 1800,
                        "pid": 141,
                        "name": "海伦市",
                        "level": 3
                    },
                    {
                        "id": 1801,
                        "pid": 141,
                        "name": "绥化市北林区",
                        "level": 3
                    },
                    {
                        "id": 1802,
                        "pid": 141,
                        "name": "绥棱县",
                        "level": 3
                    },
                    {
                        "id": 1803,
                        "pid": 141,
                        "name": "肇东市",
                        "level": 3
                    },
                    {
                        "id": 1804,
                        "pid": 141,
                        "name": "青冈县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 142,
                "pid": 8,
                "name": "大兴安岭地区",
                "level": 2,
                "children2": [
                    {
                        "id": 1805,
                        "pid": 142,
                        "name": "呼玛县",
                        "level": 3
                    },
                    {
                        "id": 1806,
                        "pid": 142,
                        "name": "塔河县",
                        "level": 3
                    },
                    {
                        "id": 1807,
                        "pid": 142,
                        "name": "大兴安岭地区加格达奇区",
                        "level": 3
                    },
                    {
                        "id": 1808,
                        "pid": 142,
                        "name": "大兴安岭地区呼中区",
                        "level": 3
                    },
                    {
                        "id": 1809,
                        "pid": 142,
                        "name": "大兴安岭地区新林区",
                        "level": 3
                    },
                    {
                        "id": 1810,
                        "pid": 142,
                        "name": "大兴安岭地区松岭区",
                        "level": 3
                    },
                    {
                        "id": 1811,
                        "pid": 142,
                        "name": "漠河县",
                        "level": 3
                    }
                ]
            }
        ]
    },
    {
        "id": 9,
        "pid": 0,
        "name": "上海市",
        "level": 1,
        "children": [
            {
                "id": 143,
                "pid": 9,
                "name": "黄浦区",
                "level": 2,
                "children2": [
                    {
                        "id": 1812,
                        "pid": 143,
                        "name": "半淞园路街道",
                        "level": 3
                    },
                    {
                        "id": 1813,
                        "pid": 143,
                        "name": "南京东路街道",
                        "level": 3
                    },
                    {
                        "id": 1814,
                        "pid": 143,
                        "name": "外滩街道",
                        "level": 3
                    },
                    {
                        "id": 1815,
                        "pid": 143,
                        "name": "小东门街道",
                        "level": 3
                    },
                    {
                        "id": 1816,
                        "pid": 143,
                        "name": "老西门街道",
                        "level": 3
                    },
                    {
                        "id": 1817,
                        "pid": 143,
                        "name": "豫园街道",
                        "level": 3
                    }
                ]
            },
            {
                "id": 144,
                "pid": 9,
                "name": "卢湾区",
                "level": 2,
                "children2": [
                    {
                        "id": 1818,
                        "pid": 144,
                        "name": "五里桥街道",
                        "level": 3
                    },
                    {
                        "id": 1819,
                        "pid": 144,
                        "name": "打浦桥街道",
                        "level": 3
                    },
                    {
                        "id": 1820,
                        "pid": 144,
                        "name": "淮海中路街道",
                        "level": 3
                    },
                    {
                        "id": 1821,
                        "pid": 144,
                        "name": "瑞金二路街道",
                        "level": 3
                    }
                ]
            },
            {
                "id": 145,
                "pid": 9,
                "name": "徐汇区",
                "level": 2,
                "children2": [
                    {
                        "id": 1822,
                        "pid": 145,
                        "name": "凌云路街道",
                        "level": 3
                    },
                    {
                        "id": 1823,
                        "pid": 145,
                        "name": "华泾镇",
                        "level": 3
                    },
                    {
                        "id": 1824,
                        "pid": 145,
                        "name": "天平路街道",
                        "level": 3
                    },
                    {
                        "id": 1825,
                        "pid": 145,
                        "name": "康健新村街道",
                        "level": 3
                    },
                    {
                        "id": 1826,
                        "pid": 145,
                        "name": "徐家汇街道",
                        "level": 3
                    },
                    {
                        "id": 1827,
                        "pid": 145,
                        "name": "斜土路街道",
                        "level": 3
                    },
                    {
                        "id": 1828,
                        "pid": 145,
                        "name": "枫林路街道",
                        "level": 3
                    },
                    {
                        "id": 1829,
                        "pid": 145,
                        "name": "湖南路街道",
                        "level": 3
                    },
                    {
                        "id": 1830,
                        "pid": 145,
                        "name": "漕河泾街道",
                        "level": 3
                    },
                    {
                        "id": 1831,
                        "pid": 145,
                        "name": "田林街道",
                        "level": 3
                    },
                    {
                        "id": 1832,
                        "pid": 145,
                        "name": "虹梅路街道",
                        "level": 3
                    },
                    {
                        "id": 1833,
                        "pid": 145,
                        "name": "长桥街道",
                        "level": 3
                    },
                    {
                        "id": 1834,
                        "pid": 145,
                        "name": "龙华街道",
                        "level": 3
                    }
                ]
            },
            {
                "id": 146,
                "pid": 9,
                "name": "长宁区",
                "level": 2,
                "children2": [
                    {
                        "id": 1835,
                        "pid": 146,
                        "name": "仙霞新村街道",
                        "level": 3
                    },
                    {
                        "id": 1836,
                        "pid": 146,
                        "name": "北新泾街道",
                        "level": 3
                    },
                    {
                        "id": 1837,
                        "pid": 146,
                        "name": "华阳路街道",
                        "level": 3
                    },
                    {
                        "id": 1838,
                        "pid": 146,
                        "name": "周家桥街道",
                        "level": 3
                    },
                    {
                        "id": 1839,
                        "pid": 146,
                        "name": "天山路街道",
                        "level": 3
                    },
                    {
                        "id": 1840,
                        "pid": 146,
                        "name": "新华路街道",
                        "level": 3
                    },
                    {
                        "id": 1841,
                        "pid": 146,
                        "name": "新泾镇",
                        "level": 3
                    },
                    {
                        "id": 1842,
                        "pid": 146,
                        "name": "江苏路街道",
                        "level": 3
                    },
                    {
                        "id": 1843,
                        "pid": 146,
                        "name": "程家桥街道",
                        "level": 3
                    },
                    {
                        "id": 1844,
                        "pid": 146,
                        "name": "虹桥街道",
                        "level": 3
                    }
                ]
            },
            {
                "id": 147,
                "pid": 9,
                "name": "静安区",
                "level": 2,
                "children2": [
                    {
                        "id": 1845,
                        "pid": 147,
                        "name": "南京西路街道",
                        "level": 3
                    },
                    {
                        "id": 1846,
                        "pid": 147,
                        "name": "曹家渡街道",
                        "level": 3
                    },
                    {
                        "id": 1847,
                        "pid": 147,
                        "name": "江宁路街道",
                        "level": 3
                    },
                    {
                        "id": 1848,
                        "pid": 147,
                        "name": "石门二路街道",
                        "level": 3
                    },
                    {
                        "id": 1849,
                        "pid": 147,
                        "name": "静安寺街道",
                        "level": 3
                    }
                ]
            },
            {
                "id": 148,
                "pid": 9,
                "name": "普陀区",
                "level": 2,
                "children2": [
                    {
                        "id": 1850,
                        "pid": 148,
                        "name": "宜川路街道",
                        "level": 3
                    },
                    {
                        "id": 1851,
                        "pid": 148,
                        "name": "曹杨新村街道",
                        "level": 3
                    },
                    {
                        "id": 1852,
                        "pid": 148,
                        "name": "桃浦镇",
                        "level": 3
                    },
                    {
                        "id": 1853,
                        "pid": 148,
                        "name": "甘泉路街道",
                        "level": 3
                    },
                    {
                        "id": 1854,
                        "pid": 148,
                        "name": "真如镇",
                        "level": 3
                    },
                    {
                        "id": 1855,
                        "pid": 148,
                        "name": "石泉路街道",
                        "level": 3
                    },
                    {
                        "id": 1856,
                        "pid": 148,
                        "name": "长寿路街道",
                        "level": 3
                    },
                    {
                        "id": 1857,
                        "pid": 148,
                        "name": "长征镇",
                        "level": 3
                    },
                    {
                        "id": 1858,
                        "pid": 148,
                        "name": "长风新村街道",
                        "level": 3
                    }
                ]
            },
            {
                "id": 149,
                "pid": 9,
                "name": "闸北区",
                "level": 2,
                "children2": [
                    {
                        "id": 1859,
                        "pid": 149,
                        "name": "临汾路街道",
                        "level": 3
                    },
                    {
                        "id": 1860,
                        "pid": 149,
                        "name": "共和新路街道",
                        "level": 3
                    },
                    {
                        "id": 1861,
                        "pid": 149,
                        "name": "北站街道",
                        "level": 3
                    },
                    {
                        "id": 1862,
                        "pid": 149,
                        "name": "大宁路街道",
                        "level": 3
                    },
                    {
                        "id": 1863,
                        "pid": 149,
                        "name": "天目西路街道",
                        "level": 3
                    },
                    {
                        "id": 1864,
                        "pid": 149,
                        "name": "宝山路街道",
                        "level": 3
                    },
                    {
                        "id": 1865,
                        "pid": 149,
                        "name": "彭浦新村街道",
                        "level": 3
                    },
                    {
                        "id": 1866,
                        "pid": 149,
                        "name": "彭浦镇",
                        "level": 3
                    },
                    {
                        "id": 1867,
                        "pid": 149,
                        "name": "芷江西路街道",
                        "level": 3
                    }
                ]
            },
            {
                "id": 150,
                "pid": 9,
                "name": "虹口区",
                "level": 2,
                "children2": [
                    {
                        "id": 1868,
                        "pid": 150,
                        "name": "乍浦路街道",
                        "level": 3
                    },
                    {
                        "id": 1869,
                        "pid": 150,
                        "name": "凉城新村街道",
                        "level": 3
                    },
                    {
                        "id": 1870,
                        "pid": 150,
                        "name": "嘉兴路街道",
                        "level": 3
                    },
                    {
                        "id": 1871,
                        "pid": 150,
                        "name": "四川北路街道",
                        "level": 3
                    },
                    {
                        "id": 1872,
                        "pid": 150,
                        "name": "广中路街道",
                        "level": 3
                    },
                    {
                        "id": 1873,
                        "pid": 150,
                        "name": "提篮桥街道",
                        "level": 3
                    },
                    {
                        "id": 1874,
                        "pid": 150,
                        "name": "新港路街道",
                        "level": 3
                    },
                    {
                        "id": 1875,
                        "pid": 150,
                        "name": "曲阳路街道",
                        "level": 3
                    },
                    {
                        "id": 1876,
                        "pid": 150,
                        "name": "欧阳路街道",
                        "level": 3
                    },
                    {
                        "id": 1877,
                        "pid": 150,
                        "name": "江湾镇街道",
                        "level": 3
                    }
                ]
            },
            {
                "id": 151,
                "pid": 9,
                "name": "杨浦区",
                "level": 2,
                "children2": [
                    {
                        "id": 1878,
                        "pid": 151,
                        "name": "五角场街道",
                        "level": 3
                    },
                    {
                        "id": 1879,
                        "pid": 151,
                        "name": "五角场镇",
                        "level": 3
                    },
                    {
                        "id": 1880,
                        "pid": 151,
                        "name": "四平路街道",
                        "level": 3
                    },
                    {
                        "id": 1881,
                        "pid": 151,
                        "name": "大桥街道",
                        "level": 3
                    },
                    {
                        "id": 1882,
                        "pid": 151,
                        "name": "定海路街道",
                        "level": 3
                    },
                    {
                        "id": 1883,
                        "pid": 151,
                        "name": "平凉路街道",
                        "level": 3
                    },
                    {
                        "id": 1884,
                        "pid": 151,
                        "name": "延吉新村街道",
                        "level": 3
                    },
                    {
                        "id": 1885,
                        "pid": 151,
                        "name": "控江路街道",
                        "level": 3
                    },
                    {
                        "id": 1886,
                        "pid": 151,
                        "name": "新江湾城街道",
                        "level": 3
                    },
                    {
                        "id": 1887,
                        "pid": 151,
                        "name": "殷行街道",
                        "level": 3
                    },
                    {
                        "id": 1888,
                        "pid": 151,
                        "name": "江浦路街道",
                        "level": 3
                    },
                    {
                        "id": 1889,
                        "pid": 151,
                        "name": "长白新村街道",
                        "level": 3
                    }
                ]
            },
            {
                "id": 152,
                "pid": 9,
                "name": "闵行区",
                "level": 2,
                "children2": [
                    {
                        "id": 1890,
                        "pid": 152,
                        "name": "七宝镇",
                        "level": 3
                    },
                    {
                        "id": 1891,
                        "pid": 152,
                        "name": "华漕镇",
                        "level": 3
                    },
                    {
                        "id": 1892,
                        "pid": 152,
                        "name": "古美街道",
                        "level": 3
                    },
                    {
                        "id": 1893,
                        "pid": 152,
                        "name": "吴泾镇",
                        "level": 3
                    },
                    {
                        "id": 1894,
                        "pid": 152,
                        "name": "梅陇镇",
                        "level": 3
                    },
                    {
                        "id": 1895,
                        "pid": 152,
                        "name": "江川路街道",
                        "level": 3
                    },
                    {
                        "id": 1896,
                        "pid": 152,
                        "name": "浦江镇",
                        "level": 3
                    },
                    {
                        "id": 1897,
                        "pid": 152,
                        "name": "莘庄镇",
                        "level": 3
                    },
                    {
                        "id": 1898,
                        "pid": 152,
                        "name": "虹桥镇",
                        "level": 3
                    },
                    {
                        "id": 1899,
                        "pid": 152,
                        "name": "颛桥镇",
                        "level": 3
                    },
                    {
                        "id": 1900,
                        "pid": 152,
                        "name": "马桥镇",
                        "level": 3
                    },
                    {
                        "id": 1901,
                        "pid": 152,
                        "name": "龙柏街道",
                        "level": 3
                    }
                ]
            },
            {
                "id": 153,
                "pid": 9,
                "name": "宝山区",
                "level": 2,
                "children2": [
                    {
                        "id": 1902,
                        "pid": 153,
                        "name": "友谊路街道",
                        "level": 3
                    },
                    {
                        "id": 1903,
                        "pid": 153,
                        "name": "吴淞街道",
                        "level": 3
                    },
                    {
                        "id": 1904,
                        "pid": 153,
                        "name": "大场镇",
                        "level": 3
                    },
                    {
                        "id": 1905,
                        "pid": 153,
                        "name": "庙行镇",
                        "level": 3
                    },
                    {
                        "id": 1906,
                        "pid": 153,
                        "name": "张庙街道",
                        "level": 3
                    },
                    {
                        "id": 1907,
                        "pid": 153,
                        "name": "月浦镇",
                        "level": 3
                    },
                    {
                        "id": 1908,
                        "pid": 153,
                        "name": "杨行镇",
                        "level": 3
                    },
                    {
                        "id": 1909,
                        "pid": 153,
                        "name": "淞南镇",
                        "level": 3
                    },
                    {
                        "id": 1910,
                        "pid": 153,
                        "name": "罗店镇",
                        "level": 3
                    },
                    {
                        "id": 1911,
                        "pid": 153,
                        "name": "罗泾镇",
                        "level": 3
                    },
                    {
                        "id": 1912,
                        "pid": 153,
                        "name": "顾村镇",
                        "level": 3
                    },
                    {
                        "id": 1913,
                        "pid": 153,
                        "name": "高境镇",
                        "level": 3
                    }
                ]
            },
            {
                "id": 154,
                "pid": 9,
                "name": "嘉定区",
                "level": 2,
                "children2": [
                    {
                        "id": 1914,
                        "pid": 154,
                        "name": "华亭镇",
                        "level": 3
                    },
                    {
                        "id": 1915,
                        "pid": 154,
                        "name": "南翔镇",
                        "level": 3
                    },
                    {
                        "id": 1916,
                        "pid": 154,
                        "name": "嘉定工业区",
                        "level": 3
                    },
                    {
                        "id": 1917,
                        "pid": 154,
                        "name": "嘉定镇街道",
                        "level": 3
                    },
                    {
                        "id": 1918,
                        "pid": 154,
                        "name": "外冈镇",
                        "level": 3
                    },
                    {
                        "id": 1919,
                        "pid": 154,
                        "name": "安亭镇",
                        "level": 3
                    },
                    {
                        "id": 1920,
                        "pid": 154,
                        "name": "徐行镇",
                        "level": 3
                    },
                    {
                        "id": 1921,
                        "pid": 154,
                        "name": "新成路街道",
                        "level": 3
                    },
                    {
                        "id": 1922,
                        "pid": 154,
                        "name": "江桥镇",
                        "level": 3
                    },
                    {
                        "id": 1923,
                        "pid": 154,
                        "name": "真新新村街道",
                        "level": 3
                    },
                    {
                        "id": 1924,
                        "pid": 154,
                        "name": "菊园新区",
                        "level": 3
                    },
                    {
                        "id": 1925,
                        "pid": 154,
                        "name": "马陆镇",
                        "level": 3
                    },
                    {
                        "id": 1926,
                        "pid": 154,
                        "name": "黄渡镇",
                        "level": 3
                    }
                ]
            },
            {
                "id": 155,
                "pid": 9,
                "name": "浦东新区",
                "level": 2,
                "children2": [
                    {
                        "id": 1927,
                        "pid": 155,
                        "name": "三林镇",
                        "level": 3
                    },
                    {
                        "id": 1928,
                        "pid": 155,
                        "name": "上钢新村街道",
                        "level": 3
                    },
                    {
                        "id": 1929,
                        "pid": 155,
                        "name": "东明路街道",
                        "level": 3
                    },
                    {
                        "id": 1930,
                        "pid": 155,
                        "name": "北蔡镇",
                        "level": 3
                    },
                    {
                        "id": 1931,
                        "pid": 155,
                        "name": "南码头路街道",
                        "level": 3
                    },
                    {
                        "id": 1932,
                        "pid": 155,
                        "name": "合庆镇",
                        "level": 3
                    },
                    {
                        "id": 1933,
                        "pid": 155,
                        "name": "周家渡街道",
                        "level": 3
                    },
                    {
                        "id": 1934,
                        "pid": 155,
                        "name": "唐镇",
                        "level": 3
                    },
                    {
                        "id": 1935,
                        "pid": 155,
                        "name": "塘桥街道",
                        "level": 3
                    },
                    {
                        "id": 1936,
                        "pid": 155,
                        "name": "川沙新镇",
                        "level": 3
                    },
                    {
                        "id": 1937,
                        "pid": 155,
                        "name": "张江镇",
                        "level": 3
                    },
                    {
                        "id": 1938,
                        "pid": 155,
                        "name": "曹路镇",
                        "level": 3
                    },
                    {
                        "id": 1939,
                        "pid": 155,
                        "name": "沪东新村街道",
                        "level": 3
                    },
                    {
                        "id": 1940,
                        "pid": 155,
                        "name": "洋泾街道",
                        "level": 3
                    },
                    {
                        "id": 1941,
                        "pid": 155,
                        "name": "浦兴路街道",
                        "level": 3
                    },
                    {
                        "id": 1942,
                        "pid": 155,
                        "name": "潍坊新村街道",
                        "level": 3
                    },
                    {
                        "id": 1943,
                        "pid": 155,
                        "name": "花木街道",
                        "level": 3
                    },
                    {
                        "id": 1944,
                        "pid": 155,
                        "name": "金杨新村街道",
                        "level": 3
                    },
                    {
                        "id": 1945,
                        "pid": 155,
                        "name": "金桥镇",
                        "level": 3
                    },
                    {
                        "id": 1946,
                        "pid": 155,
                        "name": "陆家嘴街道",
                        "level": 3
                    },
                    {
                        "id": 1947,
                        "pid": 155,
                        "name": "高东镇",
                        "level": 3
                    },
                    {
                        "id": 1948,
                        "pid": 155,
                        "name": "高桥镇",
                        "level": 3
                    },
                    {
                        "id": 1949,
                        "pid": 155,
                        "name": "高行镇",
                        "level": 3
                    }
                ]
            },
            {
                "id": 156,
                "pid": 9,
                "name": "金山区",
                "level": 2,
                "children2": [
                    {
                        "id": 1950,
                        "pid": 156,
                        "name": "亭林镇",
                        "level": 3
                    },
                    {
                        "id": 1951,
                        "pid": 156,
                        "name": "吕巷镇",
                        "level": 3
                    },
                    {
                        "id": 1952,
                        "pid": 156,
                        "name": "山阳镇",
                        "level": 3
                    },
                    {
                        "id": 1953,
                        "pid": 156,
                        "name": "廊下镇",
                        "level": 3
                    },
                    {
                        "id": 1954,
                        "pid": 156,
                        "name": "张堰镇",
                        "level": 3
                    },
                    {
                        "id": 1955,
                        "pid": 156,
                        "name": "朱泾镇",
                        "level": 3
                    },
                    {
                        "id": 1956,
                        "pid": 156,
                        "name": "枫泾镇",
                        "level": 3
                    },
                    {
                        "id": 1957,
                        "pid": 156,
                        "name": "漕泾镇",
                        "level": 3
                    },
                    {
                        "id": 1958,
                        "pid": 156,
                        "name": "石化街道",
                        "level": 3
                    },
                    {
                        "id": 1959,
                        "pid": 156,
                        "name": "金山卫镇",
                        "level": 3
                    }
                ]
            },
            {
                "id": 157,
                "pid": 9,
                "name": "松江区",
                "level": 2,
                "children2": [
                    {
                        "id": 1960,
                        "pid": 157,
                        "name": "上海松江科技园区",
                        "level": 3
                    },
                    {
                        "id": 1961,
                        "pid": 157,
                        "name": "中山街道",
                        "level": 3
                    },
                    {
                        "id": 1962,
                        "pid": 157,
                        "name": "九亭镇",
                        "level": 3
                    },
                    {
                        "id": 1963,
                        "pid": 157,
                        "name": "五厍农业园区",
                        "level": 3
                    },
                    {
                        "id": 1964,
                        "pid": 157,
                        "name": "佘山度假区",
                        "level": 3
                    },
                    {
                        "id": 1965,
                        "pid": 157,
                        "name": "佘山镇",
                        "level": 3
                    },
                    {
                        "id": 1966,
                        "pid": 157,
                        "name": "叶榭镇",
                        "level": 3
                    },
                    {
                        "id": 1967,
                        "pid": 157,
                        "name": "岳阳街道",
                        "level": 3
                    },
                    {
                        "id": 1968,
                        "pid": 157,
                        "name": "新桥镇",
                        "level": 3
                    },
                    {
                        "id": 1969,
                        "pid": 157,
                        "name": "新浜镇",
                        "level": 3
                    },
                    {
                        "id": 1970,
                        "pid": 157,
                        "name": "方松街道",
                        "level": 3
                    },
                    {
                        "id": 1971,
                        "pid": 157,
                        "name": "松江工业区",
                        "level": 3
                    },
                    {
                        "id": 1972,
                        "pid": 157,
                        "name": "永丰街道",
                        "level": 3
                    },
                    {
                        "id": 1973,
                        "pid": 157,
                        "name": "泖港镇",
                        "level": 3
                    },
                    {
                        "id": 1974,
                        "pid": 157,
                        "name": "泗泾镇",
                        "level": 3
                    },
                    {
                        "id": 1975,
                        "pid": 157,
                        "name": "洞泾镇",
                        "level": 3
                    },
                    {
                        "id": 1976,
                        "pid": 157,
                        "name": "石湖荡镇",
                        "level": 3
                    },
                    {
                        "id": 1977,
                        "pid": 157,
                        "name": "车墩镇",
                        "level": 3
                    }
                ]
            },
            {
                "id": 158,
                "pid": 9,
                "name": "青浦区",
                "level": 2,
                "children2": [
                    {
                        "id": 1978,
                        "pid": 158,
                        "name": "华新镇",
                        "level": 3
                    },
                    {
                        "id": 1979,
                        "pid": 158,
                        "name": "夏阳街道",
                        "level": 3
                    },
                    {
                        "id": 1980,
                        "pid": 158,
                        "name": "徐泾镇",
                        "level": 3
                    },
                    {
                        "id": 1981,
                        "pid": 158,
                        "name": "朱家角镇",
                        "level": 3
                    },
                    {
                        "id": 1982,
                        "pid": 158,
                        "name": "白鹤镇",
                        "level": 3
                    },
                    {
                        "id": 1983,
                        "pid": 158,
                        "name": "盈浦街道",
                        "level": 3
                    },
                    {
                        "id": 1984,
                        "pid": 158,
                        "name": "练塘镇",
                        "level": 3
                    },
                    {
                        "id": 1985,
                        "pid": 158,
                        "name": "赵巷镇",
                        "level": 3
                    },
                    {
                        "id": 1986,
                        "pid": 158,
                        "name": "重固镇",
                        "level": 3
                    },
                    {
                        "id": 1987,
                        "pid": 158,
                        "name": "金泽镇",
                        "level": 3
                    },
                    {
                        "id": 1988,
                        "pid": 158,
                        "name": "香花桥街道",
                        "level": 3
                    }
                ]
            },
            {
                "id": 159,
                "pid": 9,
                "name": "南汇区",
                "level": 2,
                "children2": [
                    {
                        "id": 1989,
                        "pid": 159,
                        "name": "万祥镇",
                        "level": 3
                    },
                    {
                        "id": 1990,
                        "pid": 159,
                        "name": "书院镇",
                        "level": 3
                    },
                    {
                        "id": 1991,
                        "pid": 159,
                        "name": "六灶镇",
                        "level": 3
                    },
                    {
                        "id": 1992,
                        "pid": 159,
                        "name": "周浦镇",
                        "level": 3
                    },
                    {
                        "id": 1993,
                        "pid": 159,
                        "name": "大团镇",
                        "level": 3
                    },
                    {
                        "id": 1994,
                        "pid": 159,
                        "name": "宣桥镇",
                        "level": 3
                    },
                    {
                        "id": 1995,
                        "pid": 159,
                        "name": "康桥镇",
                        "level": 3
                    },
                    {
                        "id": 1996,
                        "pid": 159,
                        "name": "惠南镇",
                        "level": 3
                    },
                    {
                        "id": 1997,
                        "pid": 159,
                        "name": "新场镇",
                        "level": 3
                    },
                    {
                        "id": 1998,
                        "pid": 159,
                        "name": "泥城镇",
                        "level": 3
                    },
                    {
                        "id": 1999,
                        "pid": 159,
                        "name": "祝桥镇",
                        "level": 3
                    },
                    {
                        "id": 2000,
                        "pid": 159,
                        "name": "老港镇",
                        "level": 3
                    },
                    {
                        "id": 2001,
                        "pid": 159,
                        "name": "航头镇",
                        "level": 3
                    },
                    {
                        "id": 2002,
                        "pid": 159,
                        "name": "芦潮港镇",
                        "level": 3
                    }
                ]
            },
            {
                "id": 160,
                "pid": 9,
                "name": "奉贤区",
                "level": 2,
                "children2": [
                    {
                        "id": 2003,
                        "pid": 160,
                        "name": "南桥镇",
                        "level": 3
                    },
                    {
                        "id": 2004,
                        "pid": 160,
                        "name": "四团镇",
                        "level": 3
                    },
                    {
                        "id": 2005,
                        "pid": 160,
                        "name": "奉城镇",
                        "level": 3
                    },
                    {
                        "id": 2006,
                        "pid": 160,
                        "name": "庄行镇",
                        "level": 3
                    },
                    {
                        "id": 2007,
                        "pid": 160,
                        "name": "柘林镇",
                        "level": 3
                    },
                    {
                        "id": 2008,
                        "pid": 160,
                        "name": "海湾镇",
                        "level": 3
                    },
                    {
                        "id": 2009,
                        "pid": 160,
                        "name": "金汇镇",
                        "level": 3
                    },
                    {
                        "id": 2010,
                        "pid": 160,
                        "name": "青村镇",
                        "level": 3
                    }
                ]
            },
            {
                "id": 161,
                "pid": 9,
                "name": "崇明县",
                "level": 2,
                "children2": [
                    {
                        "id": 2011,
                        "pid": 161,
                        "name": "三星镇",
                        "level": 3
                    },
                    {
                        "id": 2012,
                        "pid": 161,
                        "name": "中兴镇",
                        "level": 3
                    },
                    {
                        "id": 2013,
                        "pid": 161,
                        "name": "向化镇",
                        "level": 3
                    },
                    {
                        "id": 2014,
                        "pid": 161,
                        "name": "城桥镇",
                        "level": 3
                    },
                    {
                        "id": 2015,
                        "pid": 161,
                        "name": "堡镇",
                        "level": 3
                    },
                    {
                        "id": 2016,
                        "pid": 161,
                        "name": "庙镇",
                        "level": 3
                    },
                    {
                        "id": 2017,
                        "pid": 161,
                        "name": "建设镇",
                        "level": 3
                    },
                    {
                        "id": 2018,
                        "pid": 161,
                        "name": "新村乡",
                        "level": 3
                    },
                    {
                        "id": 2019,
                        "pid": 161,
                        "name": "新河镇",
                        "level": 3
                    },
                    {
                        "id": 2020,
                        "pid": 161,
                        "name": "横沙乡",
                        "level": 3
                    },
                    {
                        "id": 2021,
                        "pid": 161,
                        "name": "港沿镇",
                        "level": 3
                    },
                    {
                        "id": 2022,
                        "pid": 161,
                        "name": "港西镇",
                        "level": 3
                    },
                    {
                        "id": 2023,
                        "pid": 161,
                        "name": "竖新镇",
                        "level": 3
                    },
                    {
                        "id": 2024,
                        "pid": 161,
                        "name": "绿华镇",
                        "level": 3
                    },
                    {
                        "id": 2025,
                        "pid": 161,
                        "name": "长兴乡",
                        "level": 3
                    },
                    {
                        "id": 2026,
                        "pid": 161,
                        "name": "陈家镇",
                        "level": 3
                    }
                ]
            }
        ]
    },
    {
        "id": 10,
        "pid": 0,
        "name": "江苏省",
        "level": 1,
        "children": [
            {
                "id": 162,
                "pid": 10,
                "name": "南京市",
                "level": 2,
                "children2": [
                    {
                        "id": 2027,
                        "pid": 162,
                        "name": "下关区",
                        "level": 3
                    },
                    {
                        "id": 2028,
                        "pid": 162,
                        "name": "六合区",
                        "level": 3
                    },
                    {
                        "id": 2029,
                        "pid": 162,
                        "name": "建邺区",
                        "level": 3
                    },
                    {
                        "id": 2030,
                        "pid": 162,
                        "name": "栖霞区",
                        "level": 3
                    },
                    {
                        "id": 2031,
                        "pid": 162,
                        "name": "江宁区",
                        "level": 3
                    },
                    {
                        "id": 2032,
                        "pid": 162,
                        "name": "浦口区",
                        "level": 3
                    },
                    {
                        "id": 2033,
                        "pid": 162,
                        "name": "溧水县",
                        "level": 3
                    },
                    {
                        "id": 2034,
                        "pid": 162,
                        "name": "玄武区",
                        "level": 3
                    },
                    {
                        "id": 2035,
                        "pid": 162,
                        "name": "白下区",
                        "level": 3
                    },
                    {
                        "id": 2036,
                        "pid": 162,
                        "name": "秦淮区",
                        "level": 3
                    },
                    {
                        "id": 2037,
                        "pid": 162,
                        "name": "雨花台区",
                        "level": 3
                    },
                    {
                        "id": 2038,
                        "pid": 162,
                        "name": "高淳县",
                        "level": 3
                    },
                    {
                        "id": 2039,
                        "pid": 162,
                        "name": "鼓楼区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 163,
                "pid": 10,
                "name": "无锡市",
                "level": 2,
                "children2": [
                    {
                        "id": 2040,
                        "pid": 163,
                        "name": "北塘区",
                        "level": 3
                    },
                    {
                        "id": 2041,
                        "pid": 163,
                        "name": "南长区",
                        "level": 3
                    },
                    {
                        "id": 2042,
                        "pid": 163,
                        "name": "宜兴市",
                        "level": 3
                    },
                    {
                        "id": 2043,
                        "pid": 163,
                        "name": "崇安区",
                        "level": 3
                    },
                    {
                        "id": 2044,
                        "pid": 163,
                        "name": "惠山区",
                        "level": 3
                    },
                    {
                        "id": 2045,
                        "pid": 163,
                        "name": "江阴市",
                        "level": 3
                    },
                    {
                        "id": 2046,
                        "pid": 163,
                        "name": "滨湖区",
                        "level": 3
                    },
                    {
                        "id": 2047,
                        "pid": 163,
                        "name": "锡山区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 164,
                "pid": 10,
                "name": "徐州市",
                "level": 2,
                "children2": [
                    {
                        "id": 2048,
                        "pid": 164,
                        "name": "丰县",
                        "level": 3
                    },
                    {
                        "id": 2049,
                        "pid": 164,
                        "name": "九里区",
                        "level": 3
                    },
                    {
                        "id": 2050,
                        "pid": 164,
                        "name": "云龙区",
                        "level": 3
                    },
                    {
                        "id": 2051,
                        "pid": 164,
                        "name": "新沂市",
                        "level": 3
                    },
                    {
                        "id": 2052,
                        "pid": 164,
                        "name": "沛县",
                        "level": 3
                    },
                    {
                        "id": 2053,
                        "pid": 164,
                        "name": "泉山区",
                        "level": 3
                    },
                    {
                        "id": 2054,
                        "pid": 164,
                        "name": "睢宁县",
                        "level": 3
                    },
                    {
                        "id": 2055,
                        "pid": 164,
                        "name": "贾汪区",
                        "level": 3
                    },
                    {
                        "id": 2056,
                        "pid": 164,
                        "name": "邳州市",
                        "level": 3
                    },
                    {
                        "id": 2057,
                        "pid": 164,
                        "name": "铜山县",
                        "level": 3
                    },
                    {
                        "id": 2058,
                        "pid": 164,
                        "name": "鼓楼区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 165,
                "pid": 10,
                "name": "常州市",
                "level": 2,
                "children2": [
                    {
                        "id": 2059,
                        "pid": 165,
                        "name": "天宁区",
                        "level": 3
                    },
                    {
                        "id": 2060,
                        "pid": 165,
                        "name": "戚墅堰区",
                        "level": 3
                    },
                    {
                        "id": 2061,
                        "pid": 165,
                        "name": "新北区",
                        "level": 3
                    },
                    {
                        "id": 2062,
                        "pid": 165,
                        "name": "武进区",
                        "level": 3
                    },
                    {
                        "id": 2063,
                        "pid": 165,
                        "name": "溧阳市",
                        "level": 3
                    },
                    {
                        "id": 2064,
                        "pid": 165,
                        "name": "金坛市",
                        "level": 3
                    },
                    {
                        "id": 2065,
                        "pid": 165,
                        "name": "钟楼区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 166,
                "pid": 10,
                "name": "苏州市",
                "level": 2,
                "children2": [
                    {
                        "id": 2066,
                        "pid": 166,
                        "name": "吴中区",
                        "level": 3
                    },
                    {
                        "id": 2067,
                        "pid": 166,
                        "name": "吴江市",
                        "level": 3
                    },
                    {
                        "id": 2068,
                        "pid": 166,
                        "name": "太仓市",
                        "level": 3
                    },
                    {
                        "id": 2069,
                        "pid": 166,
                        "name": "常熟市",
                        "level": 3
                    },
                    {
                        "id": 2070,
                        "pid": 166,
                        "name": "平江区",
                        "level": 3
                    },
                    {
                        "id": 2071,
                        "pid": 166,
                        "name": "张家港市",
                        "level": 3
                    },
                    {
                        "id": 2072,
                        "pid": 166,
                        "name": "昆山市",
                        "level": 3
                    },
                    {
                        "id": 2073,
                        "pid": 166,
                        "name": "沧浪区",
                        "level": 3
                    },
                    {
                        "id": 2074,
                        "pid": 166,
                        "name": "相城区",
                        "level": 3
                    },
                    {
                        "id": 2075,
                        "pid": 166,
                        "name": "苏州工业园区",
                        "level": 3
                    },
                    {
                        "id": 2076,
                        "pid": 166,
                        "name": "虎丘区",
                        "level": 3
                    },
                    {
                        "id": 2077,
                        "pid": 166,
                        "name": "金阊区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 167,
                "pid": 10,
                "name": "南通市",
                "level": 2,
                "children2": [
                    {
                        "id": 2078,
                        "pid": 167,
                        "name": "启东市",
                        "level": 3
                    },
                    {
                        "id": 2079,
                        "pid": 167,
                        "name": "如东县",
                        "level": 3
                    },
                    {
                        "id": 2080,
                        "pid": 167,
                        "name": "如皋市",
                        "level": 3
                    },
                    {
                        "id": 2081,
                        "pid": 167,
                        "name": "崇川区",
                        "level": 3
                    },
                    {
                        "id": 2082,
                        "pid": 167,
                        "name": "海安县",
                        "level": 3
                    },
                    {
                        "id": 2083,
                        "pid": 167,
                        "name": "海门市",
                        "level": 3
                    },
                    {
                        "id": 2084,
                        "pid": 167,
                        "name": "港闸区",
                        "level": 3
                    },
                    {
                        "id": 2085,
                        "pid": 167,
                        "name": "通州市",
                        "level": 3
                    }
                ]
            },
            {
                "id": 168,
                "pid": 10,
                "name": "连云港市",
                "level": 2,
                "children2": [
                    {
                        "id": 2086,
                        "pid": 168,
                        "name": "东海县",
                        "level": 3
                    },
                    {
                        "id": 2087,
                        "pid": 168,
                        "name": "新浦区",
                        "level": 3
                    },
                    {
                        "id": 2088,
                        "pid": 168,
                        "name": "海州区",
                        "level": 3
                    },
                    {
                        "id": 2089,
                        "pid": 168,
                        "name": "灌云县",
                        "level": 3
                    },
                    {
                        "id": 2090,
                        "pid": 168,
                        "name": "灌南县",
                        "level": 3
                    },
                    {
                        "id": 2091,
                        "pid": 168,
                        "name": "赣榆县",
                        "level": 3
                    },
                    {
                        "id": 2092,
                        "pid": 168,
                        "name": "连云区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 169,
                "pid": 10,
                "name": "淮安市",
                "level": 2,
                "children2": [
                    {
                        "id": 2093,
                        "pid": 169,
                        "name": "楚州区",
                        "level": 3
                    },
                    {
                        "id": 2094,
                        "pid": 169,
                        "name": "洪泽县",
                        "level": 3
                    },
                    {
                        "id": 2095,
                        "pid": 169,
                        "name": "涟水县",
                        "level": 3
                    },
                    {
                        "id": 2096,
                        "pid": 169,
                        "name": "淮阴区",
                        "level": 3
                    },
                    {
                        "id": 2097,
                        "pid": 169,
                        "name": "清河区",
                        "level": 3
                    },
                    {
                        "id": 2098,
                        "pid": 169,
                        "name": "清浦区",
                        "level": 3
                    },
                    {
                        "id": 2099,
                        "pid": 169,
                        "name": "盱眙县",
                        "level": 3
                    },
                    {
                        "id": 2100,
                        "pid": 169,
                        "name": "金湖县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 170,
                "pid": 10,
                "name": "盐城市",
                "level": 2,
                "children2": [
                    {
                        "id": 2101,
                        "pid": 170,
                        "name": "东台市",
                        "level": 3
                    },
                    {
                        "id": 2102,
                        "pid": 170,
                        "name": "亭湖区",
                        "level": 3
                    },
                    {
                        "id": 2103,
                        "pid": 170,
                        "name": "响水县",
                        "level": 3
                    },
                    {
                        "id": 2104,
                        "pid": 170,
                        "name": "大丰市",
                        "level": 3
                    },
                    {
                        "id": 2105,
                        "pid": 170,
                        "name": "射阳县",
                        "level": 3
                    },
                    {
                        "id": 2106,
                        "pid": 170,
                        "name": "建湖县",
                        "level": 3
                    },
                    {
                        "id": 2107,
                        "pid": 170,
                        "name": "滨海县",
                        "level": 3
                    },
                    {
                        "id": 2108,
                        "pid": 170,
                        "name": "盐都区",
                        "level": 3
                    },
                    {
                        "id": 2109,
                        "pid": 170,
                        "name": "阜宁县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 171,
                "pid": 10,
                "name": "扬州市",
                "level": 2,
                "children2": [
                    {
                        "id": 2110,
                        "pid": 171,
                        "name": "仪征市",
                        "level": 3
                    },
                    {
                        "id": 2111,
                        "pid": 171,
                        "name": "宝应县",
                        "level": 3
                    },
                    {
                        "id": 2112,
                        "pid": 171,
                        "name": "广陵区",
                        "level": 3
                    },
                    {
                        "id": 2113,
                        "pid": 171,
                        "name": "江都市",
                        "level": 3
                    },
                    {
                        "id": 2114,
                        "pid": 171,
                        "name": "维扬区",
                        "level": 3
                    },
                    {
                        "id": 2115,
                        "pid": 171,
                        "name": "邗江区",
                        "level": 3
                    },
                    {
                        "id": 2116,
                        "pid": 171,
                        "name": "高邮市",
                        "level": 3
                    }
                ]
            },
            {
                "id": 172,
                "pid": 10,
                "name": "镇江市",
                "level": 2,
                "children2": [
                    {
                        "id": 2117,
                        "pid": 172,
                        "name": "丹徒区",
                        "level": 3
                    },
                    {
                        "id": 2118,
                        "pid": 172,
                        "name": "丹阳市",
                        "level": 3
                    },
                    {
                        "id": 2119,
                        "pid": 172,
                        "name": "京口区",
                        "level": 3
                    },
                    {
                        "id": 2120,
                        "pid": 172,
                        "name": "句容市",
                        "level": 3
                    },
                    {
                        "id": 2121,
                        "pid": 172,
                        "name": "扬中市",
                        "level": 3
                    },
                    {
                        "id": 2122,
                        "pid": 172,
                        "name": "润州区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 173,
                "pid": 10,
                "name": "泰州市",
                "level": 2,
                "children2": [
                    {
                        "id": 2123,
                        "pid": 173,
                        "name": "兴化市",
                        "level": 3
                    },
                    {
                        "id": 2124,
                        "pid": 173,
                        "name": "姜堰市",
                        "level": 3
                    },
                    {
                        "id": 2125,
                        "pid": 173,
                        "name": "泰兴市",
                        "level": 3
                    },
                    {
                        "id": 2126,
                        "pid": 173,
                        "name": "海陵区",
                        "level": 3
                    },
                    {
                        "id": 2127,
                        "pid": 173,
                        "name": "靖江市",
                        "level": 3
                    },
                    {
                        "id": 2128,
                        "pid": 173,
                        "name": "高港区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 174,
                "pid": 10,
                "name": "宿迁市",
                "level": 2,
                "children2": [
                    {
                        "id": 2129,
                        "pid": 174,
                        "name": "宿城区",
                        "level": 3
                    },
                    {
                        "id": 2130,
                        "pid": 174,
                        "name": "宿豫区",
                        "level": 3
                    },
                    {
                        "id": 2131,
                        "pid": 174,
                        "name": "沭阳县",
                        "level": 3
                    },
                    {
                        "id": 2132,
                        "pid": 174,
                        "name": "泗洪县",
                        "level": 3
                    },
                    {
                        "id": 2133,
                        "pid": 174,
                        "name": "泗阳县",
                        "level": 3
                    }
                ]
            }
        ]
    },
    {
        "id": 11,
        "pid": 0,
        "name": "浙江省",
        "level": 1,
        "children": [
            {
                "id": 175,
                "pid": 11,
                "name": "杭州市",
                "level": 2,
                "children2": [
                    {
                        "id": 2134,
                        "pid": 175,
                        "name": "上城区",
                        "level": 3
                    },
                    {
                        "id": 2135,
                        "pid": 175,
                        "name": "下城区",
                        "level": 3
                    },
                    {
                        "id": 2136,
                        "pid": 175,
                        "name": "临安市",
                        "level": 3
                    },
                    {
                        "id": 2137,
                        "pid": 175,
                        "name": "余杭区",
                        "level": 3
                    },
                    {
                        "id": 2138,
                        "pid": 175,
                        "name": "富阳市",
                        "level": 3
                    },
                    {
                        "id": 2139,
                        "pid": 175,
                        "name": "建德市",
                        "level": 3
                    },
                    {
                        "id": 2140,
                        "pid": 175,
                        "name": "拱墅区",
                        "level": 3
                    },
                    {
                        "id": 2141,
                        "pid": 175,
                        "name": "桐庐县",
                        "level": 3
                    },
                    {
                        "id": 2142,
                        "pid": 175,
                        "name": "江干区",
                        "level": 3
                    },
                    {
                        "id": 2143,
                        "pid": 175,
                        "name": "淳安县",
                        "level": 3
                    },
                    {
                        "id": 2144,
                        "pid": 175,
                        "name": "滨江区",
                        "level": 3
                    },
                    {
                        "id": 2145,
                        "pid": 175,
                        "name": "萧山区",
                        "level": 3
                    },
                    {
                        "id": 2146,
                        "pid": 175,
                        "name": "西湖区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 176,
                "pid": 11,
                "name": "宁波市",
                "level": 2,
                "children2": [
                    {
                        "id": 2147,
                        "pid": 176,
                        "name": "余姚市",
                        "level": 3
                    },
                    {
                        "id": 2148,
                        "pid": 176,
                        "name": "北仑区",
                        "level": 3
                    },
                    {
                        "id": 2149,
                        "pid": 176,
                        "name": "奉化市",
                        "level": 3
                    },
                    {
                        "id": 2150,
                        "pid": 176,
                        "name": "宁海县",
                        "level": 3
                    },
                    {
                        "id": 2151,
                        "pid": 176,
                        "name": "慈溪市",
                        "level": 3
                    },
                    {
                        "id": 2152,
                        "pid": 176,
                        "name": "江东区",
                        "level": 3
                    },
                    {
                        "id": 2153,
                        "pid": 176,
                        "name": "江北区",
                        "level": 3
                    },
                    {
                        "id": 2154,
                        "pid": 176,
                        "name": "海曙区",
                        "level": 3
                    },
                    {
                        "id": 2155,
                        "pid": 176,
                        "name": "象山县",
                        "level": 3
                    },
                    {
                        "id": 2156,
                        "pid": 176,
                        "name": "鄞州区",
                        "level": 3
                    },
                    {
                        "id": 2157,
                        "pid": 176,
                        "name": "镇海区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 177,
                "pid": 11,
                "name": "温州市",
                "level": 2,
                "children2": [
                    {
                        "id": 2158,
                        "pid": 177,
                        "name": "乐清市",
                        "level": 3
                    },
                    {
                        "id": 2159,
                        "pid": 177,
                        "name": "平阳县",
                        "level": 3
                    },
                    {
                        "id": 2160,
                        "pid": 177,
                        "name": "文成县",
                        "level": 3
                    },
                    {
                        "id": 2161,
                        "pid": 177,
                        "name": "永嘉县",
                        "level": 3
                    },
                    {
                        "id": 2162,
                        "pid": 177,
                        "name": "泰顺县",
                        "level": 3
                    },
                    {
                        "id": 2163,
                        "pid": 177,
                        "name": "洞头县",
                        "level": 3
                    },
                    {
                        "id": 2164,
                        "pid": 177,
                        "name": "瑞安市",
                        "level": 3
                    },
                    {
                        "id": 2165,
                        "pid": 177,
                        "name": "瓯海区",
                        "level": 3
                    },
                    {
                        "id": 2166,
                        "pid": 177,
                        "name": "苍南县",
                        "level": 3
                    },
                    {
                        "id": 2167,
                        "pid": 177,
                        "name": "鹿城区",
                        "level": 3
                    },
                    {
                        "id": 2168,
                        "pid": 177,
                        "name": "龙湾区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 178,
                "pid": 11,
                "name": "嘉兴市",
                "level": 2,
                "children2": [
                    {
                        "id": 2169,
                        "pid": 178,
                        "name": "南湖区",
                        "level": 3
                    },
                    {
                        "id": 2170,
                        "pid": 178,
                        "name": "嘉善县",
                        "level": 3
                    },
                    {
                        "id": 2171,
                        "pid": 178,
                        "name": "平湖市",
                        "level": 3
                    },
                    {
                        "id": 2172,
                        "pid": 178,
                        "name": "桐乡市",
                        "level": 3
                    },
                    {
                        "id": 2173,
                        "pid": 178,
                        "name": "海宁市",
                        "level": 3
                    },
                    {
                        "id": 2174,
                        "pid": 178,
                        "name": "海盐县",
                        "level": 3
                    },
                    {
                        "id": 2175,
                        "pid": 178,
                        "name": "秀洲区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 179,
                "pid": 11,
                "name": "湖州市",
                "level": 2,
                "children2": [
                    {
                        "id": 2176,
                        "pid": 179,
                        "name": "南浔区",
                        "level": 3
                    },
                    {
                        "id": 2177,
                        "pid": 179,
                        "name": "吴兴区",
                        "level": 3
                    },
                    {
                        "id": 2178,
                        "pid": 179,
                        "name": "安吉县",
                        "level": 3
                    },
                    {
                        "id": 2179,
                        "pid": 179,
                        "name": "德清县",
                        "level": 3
                    },
                    {
                        "id": 2180,
                        "pid": 179,
                        "name": "长兴县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 180,
                "pid": 11,
                "name": "绍兴市",
                "level": 2,
                "children2": [
                    {
                        "id": 2181,
                        "pid": 180,
                        "name": "上虞市",
                        "level": 3
                    },
                    {
                        "id": 2182,
                        "pid": 180,
                        "name": "嵊州市",
                        "level": 3
                    },
                    {
                        "id": 2183,
                        "pid": 180,
                        "name": "新昌县",
                        "level": 3
                    },
                    {
                        "id": 2184,
                        "pid": 180,
                        "name": "绍兴县",
                        "level": 3
                    },
                    {
                        "id": 2185,
                        "pid": 180,
                        "name": "诸暨市",
                        "level": 3
                    },
                    {
                        "id": 2186,
                        "pid": 180,
                        "name": "越城区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 181,
                "pid": 11,
                "name": "舟山市",
                "level": 2,
                "children2": [
                    {
                        "id": 2187,
                        "pid": 181,
                        "name": "定海区",
                        "level": 3
                    },
                    {
                        "id": 2188,
                        "pid": 181,
                        "name": "岱山县",
                        "level": 3
                    },
                    {
                        "id": 2189,
                        "pid": 181,
                        "name": "嵊泗县",
                        "level": 3
                    },
                    {
                        "id": 2190,
                        "pid": 181,
                        "name": "普陀区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 182,
                "pid": 11,
                "name": "衢州市",
                "level": 2,
                "children2": [
                    {
                        "id": 2191,
                        "pid": 182,
                        "name": "常山县",
                        "level": 3
                    },
                    {
                        "id": 2192,
                        "pid": 182,
                        "name": "开化县",
                        "level": 3
                    },
                    {
                        "id": 2193,
                        "pid": 182,
                        "name": "柯城区",
                        "level": 3
                    },
                    {
                        "id": 2194,
                        "pid": 182,
                        "name": "江山市",
                        "level": 3
                    },
                    {
                        "id": 2195,
                        "pid": 182,
                        "name": "衢江区",
                        "level": 3
                    },
                    {
                        "id": 2196,
                        "pid": 182,
                        "name": "龙游县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 183,
                "pid": 11,
                "name": "金华市",
                "level": 2,
                "children2": [
                    {
                        "id": 2197,
                        "pid": 183,
                        "name": "东阳市",
                        "level": 3
                    },
                    {
                        "id": 2198,
                        "pid": 183,
                        "name": "义乌市",
                        "level": 3
                    },
                    {
                        "id": 2199,
                        "pid": 183,
                        "name": "兰溪市",
                        "level": 3
                    },
                    {
                        "id": 2200,
                        "pid": 183,
                        "name": "婺城区",
                        "level": 3
                    },
                    {
                        "id": 2201,
                        "pid": 183,
                        "name": "武义县",
                        "level": 3
                    },
                    {
                        "id": 2202,
                        "pid": 183,
                        "name": "永康市",
                        "level": 3
                    },
                    {
                        "id": 2203,
                        "pid": 183,
                        "name": "浦江县",
                        "level": 3
                    },
                    {
                        "id": 2204,
                        "pid": 183,
                        "name": "磐安县",
                        "level": 3
                    },
                    {
                        "id": 2205,
                        "pid": 183,
                        "name": "金东区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 184,
                "pid": 11,
                "name": "台州市",
                "level": 2,
                "children2": [
                    {
                        "id": 2206,
                        "pid": 184,
                        "name": "三门县",
                        "level": 3
                    },
                    {
                        "id": 2207,
                        "pid": 184,
                        "name": "临海市",
                        "level": 3
                    },
                    {
                        "id": 2208,
                        "pid": 184,
                        "name": "仙居县",
                        "level": 3
                    },
                    {
                        "id": 2209,
                        "pid": 184,
                        "name": "天台县",
                        "level": 3
                    },
                    {
                        "id": 2210,
                        "pid": 184,
                        "name": "椒江区",
                        "level": 3
                    },
                    {
                        "id": 2211,
                        "pid": 184,
                        "name": "温岭市",
                        "level": 3
                    },
                    {
                        "id": 2212,
                        "pid": 184,
                        "name": "玉环县",
                        "level": 3
                    },
                    {
                        "id": 2213,
                        "pid": 184,
                        "name": "路桥区",
                        "level": 3
                    },
                    {
                        "id": 2214,
                        "pid": 184,
                        "name": "黄岩区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 185,
                "pid": 11,
                "name": "丽水市",
                "level": 2,
                "children2": [
                    {
                        "id": 2215,
                        "pid": 185,
                        "name": "云和县",
                        "level": 3
                    },
                    {
                        "id": 2216,
                        "pid": 185,
                        "name": "庆元县",
                        "level": 3
                    },
                    {
                        "id": 2217,
                        "pid": 185,
                        "name": "景宁畲族自治县",
                        "level": 3
                    },
                    {
                        "id": 2218,
                        "pid": 185,
                        "name": "松阳县",
                        "level": 3
                    },
                    {
                        "id": 2219,
                        "pid": 185,
                        "name": "缙云县",
                        "level": 3
                    },
                    {
                        "id": 2220,
                        "pid": 185,
                        "name": "莲都区",
                        "level": 3
                    },
                    {
                        "id": 2221,
                        "pid": 185,
                        "name": "遂昌县",
                        "level": 3
                    },
                    {
                        "id": 2222,
                        "pid": 185,
                        "name": "青田县",
                        "level": 3
                    },
                    {
                        "id": 2223,
                        "pid": 185,
                        "name": "龙泉市",
                        "level": 3
                    }
                ]
            }
        ]
    },
    {
        "id": 12,
        "pid": 0,
        "name": "安徽省",
        "level": 1,
        "children": [
            {
                "id": 186,
                "pid": 12,
                "name": "合肥市",
                "level": 2,
                "children2": [
                    {
                        "id": 2224,
                        "pid": 186,
                        "name": "包河区",
                        "level": 3
                    },
                    {
                        "id": 2225,
                        "pid": 186,
                        "name": "庐阳区",
                        "level": 3
                    },
                    {
                        "id": 2226,
                        "pid": 186,
                        "name": "瑶海区",
                        "level": 3
                    },
                    {
                        "id": 2227,
                        "pid": 186,
                        "name": "肥东县",
                        "level": 3
                    },
                    {
                        "id": 2228,
                        "pid": 186,
                        "name": "肥西县",
                        "level": 3
                    },
                    {
                        "id": 2229,
                        "pid": 186,
                        "name": "蜀山区",
                        "level": 3
                    },
                    {
                        "id": 2230,
                        "pid": 186,
                        "name": "长丰县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 187,
                "pid": 12,
                "name": "芜湖市",
                "level": 2,
                "children2": [
                    {
                        "id": 2231,
                        "pid": 187,
                        "name": "三山区",
                        "level": 3
                    },
                    {
                        "id": 2232,
                        "pid": 187,
                        "name": "南陵县",
                        "level": 3
                    },
                    {
                        "id": 2233,
                        "pid": 187,
                        "name": "弋江区",
                        "level": 3
                    },
                    {
                        "id": 2234,
                        "pid": 187,
                        "name": "繁昌县",
                        "level": 3
                    },
                    {
                        "id": 2235,
                        "pid": 187,
                        "name": "芜湖县",
                        "level": 3
                    },
                    {
                        "id": 2236,
                        "pid": 187,
                        "name": "镜湖区",
                        "level": 3
                    },
                    {
                        "id": 2237,
                        "pid": 187,
                        "name": "鸠江区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 188,
                "pid": 12,
                "name": "蚌埠市",
                "level": 2,
                "children2": [
                    {
                        "id": 2238,
                        "pid": 188,
                        "name": "五河县",
                        "level": 3
                    },
                    {
                        "id": 2239,
                        "pid": 188,
                        "name": "固镇县",
                        "level": 3
                    },
                    {
                        "id": 2240,
                        "pid": 188,
                        "name": "怀远县",
                        "level": 3
                    },
                    {
                        "id": 2241,
                        "pid": 188,
                        "name": "淮上区",
                        "level": 3
                    },
                    {
                        "id": 2242,
                        "pid": 188,
                        "name": "禹会区",
                        "level": 3
                    },
                    {
                        "id": 2243,
                        "pid": 188,
                        "name": "蚌山区",
                        "level": 3
                    },
                    {
                        "id": 2244,
                        "pid": 188,
                        "name": "龙子湖区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 189,
                "pid": 12,
                "name": "淮南市",
                "level": 2,
                "children2": [
                    {
                        "id": 2245,
                        "pid": 189,
                        "name": "八公山区",
                        "level": 3
                    },
                    {
                        "id": 2246,
                        "pid": 189,
                        "name": "凤台县",
                        "level": 3
                    },
                    {
                        "id": 2247,
                        "pid": 189,
                        "name": "大通区",
                        "level": 3
                    },
                    {
                        "id": 2248,
                        "pid": 189,
                        "name": "潘集区",
                        "level": 3
                    },
                    {
                        "id": 2249,
                        "pid": 189,
                        "name": "田家庵区",
                        "level": 3
                    },
                    {
                        "id": 2250,
                        "pid": 189,
                        "name": "谢家集区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 190,
                "pid": 12,
                "name": "马鞍山市",
                "level": 2,
                "children2": [
                    {
                        "id": 2251,
                        "pid": 190,
                        "name": "当涂县",
                        "level": 3
                    },
                    {
                        "id": 2252,
                        "pid": 190,
                        "name": "花山区",
                        "level": 3
                    },
                    {
                        "id": 2253,
                        "pid": 190,
                        "name": "金家庄区",
                        "level": 3
                    },
                    {
                        "id": 2254,
                        "pid": 190,
                        "name": "雨山区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 191,
                "pid": 12,
                "name": "淮北市",
                "level": 2,
                "children2": [
                    {
                        "id": 2255,
                        "pid": 191,
                        "name": "杜集区",
                        "level": 3
                    },
                    {
                        "id": 2256,
                        "pid": 191,
                        "name": "濉溪县",
                        "level": 3
                    },
                    {
                        "id": 2257,
                        "pid": 191,
                        "name": "烈山区",
                        "level": 3
                    },
                    {
                        "id": 2258,
                        "pid": 191,
                        "name": "相山区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 192,
                "pid": 12,
                "name": "铜陵市",
                "level": 2,
                "children2": [
                    {
                        "id": 2259,
                        "pid": 192,
                        "name": "狮子山区",
                        "level": 3
                    },
                    {
                        "id": 2260,
                        "pid": 192,
                        "name": "郊区",
                        "level": 3
                    },
                    {
                        "id": 2261,
                        "pid": 192,
                        "name": "铜官山区",
                        "level": 3
                    },
                    {
                        "id": 2262,
                        "pid": 192,
                        "name": "铜陵县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 193,
                "pid": 12,
                "name": "安庆市",
                "level": 2,
                "children2": [
                    {
                        "id": 2263,
                        "pid": 193,
                        "name": "大观区",
                        "level": 3
                    },
                    {
                        "id": 2264,
                        "pid": 193,
                        "name": "太湖县",
                        "level": 3
                    },
                    {
                        "id": 2265,
                        "pid": 193,
                        "name": "宜秀区",
                        "level": 3
                    },
                    {
                        "id": 2266,
                        "pid": 193,
                        "name": "宿松县",
                        "level": 3
                    },
                    {
                        "id": 2267,
                        "pid": 193,
                        "name": "岳西县",
                        "level": 3
                    },
                    {
                        "id": 2268,
                        "pid": 193,
                        "name": "怀宁县",
                        "level": 3
                    },
                    {
                        "id": 2269,
                        "pid": 193,
                        "name": "望江县",
                        "level": 3
                    },
                    {
                        "id": 2270,
                        "pid": 193,
                        "name": "枞阳县",
                        "level": 3
                    },
                    {
                        "id": 2271,
                        "pid": 193,
                        "name": "桐城市",
                        "level": 3
                    },
                    {
                        "id": 2272,
                        "pid": 193,
                        "name": "潜山县",
                        "level": 3
                    },
                    {
                        "id": 2273,
                        "pid": 193,
                        "name": "迎江区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 194,
                "pid": 12,
                "name": "黄山市",
                "level": 2,
                "children2": [
                    {
                        "id": 2274,
                        "pid": 194,
                        "name": "休宁县",
                        "level": 3
                    },
                    {
                        "id": 2275,
                        "pid": 194,
                        "name": "屯溪区",
                        "level": 3
                    },
                    {
                        "id": 2276,
                        "pid": 194,
                        "name": "徽州区",
                        "level": 3
                    },
                    {
                        "id": 2277,
                        "pid": 194,
                        "name": "歙县",
                        "level": 3
                    },
                    {
                        "id": 2278,
                        "pid": 194,
                        "name": "祁门县",
                        "level": 3
                    },
                    {
                        "id": 2279,
                        "pid": 194,
                        "name": "黄山区",
                        "level": 3
                    },
                    {
                        "id": 2280,
                        "pid": 194,
                        "name": "黟县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 195,
                "pid": 12,
                "name": "滁州市",
                "level": 2,
                "children2": [
                    {
                        "id": 2281,
                        "pid": 195,
                        "name": "全椒县",
                        "level": 3
                    },
                    {
                        "id": 2282,
                        "pid": 195,
                        "name": "凤阳县",
                        "level": 3
                    },
                    {
                        "id": 2283,
                        "pid": 195,
                        "name": "南谯区",
                        "level": 3
                    },
                    {
                        "id": 2284,
                        "pid": 195,
                        "name": "天长市",
                        "level": 3
                    },
                    {
                        "id": 2285,
                        "pid": 195,
                        "name": "定远县",
                        "level": 3
                    },
                    {
                        "id": 2286,
                        "pid": 195,
                        "name": "明光市",
                        "level": 3
                    },
                    {
                        "id": 2287,
                        "pid": 195,
                        "name": "来安县",
                        "level": 3
                    },
                    {
                        "id": 2288,
                        "pid": 195,
                        "name": "琅玡区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 196,
                "pid": 12,
                "name": "阜阳市",
                "level": 2,
                "children2": [
                    {
                        "id": 2289,
                        "pid": 196,
                        "name": "临泉县",
                        "level": 3
                    },
                    {
                        "id": 2290,
                        "pid": 196,
                        "name": "太和县",
                        "level": 3
                    },
                    {
                        "id": 2291,
                        "pid": 196,
                        "name": "界首市",
                        "level": 3
                    },
                    {
                        "id": 2292,
                        "pid": 196,
                        "name": "阜南县",
                        "level": 3
                    },
                    {
                        "id": 2293,
                        "pid": 196,
                        "name": "颍东区",
                        "level": 3
                    },
                    {
                        "id": 2294,
                        "pid": 196,
                        "name": "颍州区",
                        "level": 3
                    },
                    {
                        "id": 2295,
                        "pid": 196,
                        "name": "颍泉区",
                        "level": 3
                    },
                    {
                        "id": 2296,
                        "pid": 196,
                        "name": "颖上县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 197,
                "pid": 12,
                "name": "宿州市",
                "level": 2,
                "children2": [
                    {
                        "id": 2297,
                        "pid": 197,
                        "name": "埇桥区",
                        "level": 3
                    },
                    {
                        "id": 2298,
                        "pid": 197,
                        "name": "泗县辖",
                        "level": 3
                    },
                    {
                        "id": 2299,
                        "pid": 197,
                        "name": "灵璧县",
                        "level": 3
                    },
                    {
                        "id": 2300,
                        "pid": 197,
                        "name": "砀山县",
                        "level": 3
                    },
                    {
                        "id": 2301,
                        "pid": 197,
                        "name": "萧县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 198,
                "pid": 12,
                "name": "巢湖市",
                "level": 2,
                "children2": [
                    {
                        "id": 2302,
                        "pid": 198,
                        "name": "含山县",
                        "level": 3
                    },
                    {
                        "id": 2303,
                        "pid": 198,
                        "name": "和县",
                        "level": 3
                    },
                    {
                        "id": 2304,
                        "pid": 198,
                        "name": "居巢区",
                        "level": 3
                    },
                    {
                        "id": 2305,
                        "pid": 198,
                        "name": "庐江县",
                        "level": 3
                    },
                    {
                        "id": 2306,
                        "pid": 198,
                        "name": "无为县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 199,
                "pid": 12,
                "name": "六安市",
                "level": 2,
                "children2": [
                    {
                        "id": 2307,
                        "pid": 199,
                        "name": "寿县",
                        "level": 3
                    },
                    {
                        "id": 2308,
                        "pid": 199,
                        "name": "舒城县",
                        "level": 3
                    },
                    {
                        "id": 2309,
                        "pid": 199,
                        "name": "裕安区",
                        "level": 3
                    },
                    {
                        "id": 2310,
                        "pid": 199,
                        "name": "金安区",
                        "level": 3
                    },
                    {
                        "id": 2311,
                        "pid": 199,
                        "name": "金寨县",
                        "level": 3
                    },
                    {
                        "id": 2312,
                        "pid": 199,
                        "name": "霍山县",
                        "level": 3
                    },
                    {
                        "id": 2313,
                        "pid": 199,
                        "name": "霍邱县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 200,
                "pid": 12,
                "name": "亳州市",
                "level": 2,
                "children2": [
                    {
                        "id": 2314,
                        "pid": 200,
                        "name": "利辛县",
                        "level": 3
                    },
                    {
                        "id": 2315,
                        "pid": 200,
                        "name": "涡阳县",
                        "level": 3
                    },
                    {
                        "id": 2316,
                        "pid": 200,
                        "name": "蒙城县",
                        "level": 3
                    },
                    {
                        "id": 2317,
                        "pid": 200,
                        "name": "谯城区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 201,
                "pid": 12,
                "name": "池州市",
                "level": 2,
                "children2": [
                    {
                        "id": 2318,
                        "pid": 201,
                        "name": "东至县",
                        "level": 3
                    },
                    {
                        "id": 2319,
                        "pid": 201,
                        "name": "石台县",
                        "level": 3
                    },
                    {
                        "id": 2320,
                        "pid": 201,
                        "name": "贵池区",
                        "level": 3
                    },
                    {
                        "id": 2321,
                        "pid": 201,
                        "name": "青阳县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 202,
                "pid": 12,
                "name": "宣城市",
                "level": 2,
                "children2": [
                    {
                        "id": 2322,
                        "pid": 202,
                        "name": "宁国市",
                        "level": 3
                    },
                    {
                        "id": 2323,
                        "pid": 202,
                        "name": "宣州区",
                        "level": 3
                    },
                    {
                        "id": 2324,
                        "pid": 202,
                        "name": "广德县",
                        "level": 3
                    },
                    {
                        "id": 2325,
                        "pid": 202,
                        "name": "旌德县",
                        "level": 3
                    },
                    {
                        "id": 2326,
                        "pid": 202,
                        "name": "泾县",
                        "level": 3
                    },
                    {
                        "id": 2327,
                        "pid": 202,
                        "name": "绩溪县",
                        "level": 3
                    },
                    {
                        "id": 2328,
                        "pid": 202,
                        "name": "郎溪县",
                        "level": 3
                    }
                ]
            }
        ]
    },
    {
        "id": 13,
        "pid": 0,
        "name": "福建省",
        "level": 1,
        "children": [
            {
                "id": 203,
                "pid": 13,
                "name": "福州市",
                "level": 2,
                "children2": [
                    {
                        "id": 2329,
                        "pid": 203,
                        "name": "仓山区",
                        "level": 3
                    },
                    {
                        "id": 2330,
                        "pid": 203,
                        "name": "台江区",
                        "level": 3
                    },
                    {
                        "id": 2331,
                        "pid": 203,
                        "name": "平潭县",
                        "level": 3
                    },
                    {
                        "id": 2332,
                        "pid": 203,
                        "name": "晋安区",
                        "level": 3
                    },
                    {
                        "id": 2333,
                        "pid": 203,
                        "name": "永泰县",
                        "level": 3
                    },
                    {
                        "id": 2334,
                        "pid": 203,
                        "name": "福清市",
                        "level": 3
                    },
                    {
                        "id": 2335,
                        "pid": 203,
                        "name": "罗源县",
                        "level": 3
                    },
                    {
                        "id": 2336,
                        "pid": 203,
                        "name": "连江县",
                        "level": 3
                    },
                    {
                        "id": 2337,
                        "pid": 203,
                        "name": "长乐市",
                        "level": 3
                    },
                    {
                        "id": 2338,
                        "pid": 203,
                        "name": "闽侯县",
                        "level": 3
                    },
                    {
                        "id": 2339,
                        "pid": 203,
                        "name": "闽清县",
                        "level": 3
                    },
                    {
                        "id": 2340,
                        "pid": 203,
                        "name": "马尾区",
                        "level": 3
                    },
                    {
                        "id": 2341,
                        "pid": 203,
                        "name": "鼓楼区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 204,
                "pid": 13,
                "name": "厦门市",
                "level": 2,
                "children2": [
                    {
                        "id": 2342,
                        "pid": 204,
                        "name": "同安区",
                        "level": 3
                    },
                    {
                        "id": 2343,
                        "pid": 204,
                        "name": "思明区",
                        "level": 3
                    },
                    {
                        "id": 2344,
                        "pid": 204,
                        "name": "海沧区",
                        "level": 3
                    },
                    {
                        "id": 2345,
                        "pid": 204,
                        "name": "湖里区",
                        "level": 3
                    },
                    {
                        "id": 2346,
                        "pid": 204,
                        "name": "翔安区",
                        "level": 3
                    },
                    {
                        "id": 2347,
                        "pid": 204,
                        "name": "集美区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 205,
                "pid": 13,
                "name": "莆田市",
                "level": 2,
                "children2": [
                    {
                        "id": 2348,
                        "pid": 205,
                        "name": "仙游县",
                        "level": 3
                    },
                    {
                        "id": 2349,
                        "pid": 205,
                        "name": "城厢区",
                        "level": 3
                    },
                    {
                        "id": 2350,
                        "pid": 205,
                        "name": "涵江区",
                        "level": 3
                    },
                    {
                        "id": 2351,
                        "pid": 205,
                        "name": "秀屿区",
                        "level": 3
                    },
                    {
                        "id": 2352,
                        "pid": 205,
                        "name": "荔城区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 206,
                "pid": 13,
                "name": "三明市",
                "level": 2,
                "children2": [
                    {
                        "id": 2353,
                        "pid": 206,
                        "name": "三元区",
                        "level": 3
                    },
                    {
                        "id": 2354,
                        "pid": 206,
                        "name": "大田县",
                        "level": 3
                    },
                    {
                        "id": 2355,
                        "pid": 206,
                        "name": "宁化县",
                        "level": 3
                    },
                    {
                        "id": 2356,
                        "pid": 206,
                        "name": "将乐县",
                        "level": 3
                    },
                    {
                        "id": 2357,
                        "pid": 206,
                        "name": "尤溪县",
                        "level": 3
                    },
                    {
                        "id": 2358,
                        "pid": 206,
                        "name": "建宁县",
                        "level": 3
                    },
                    {
                        "id": 2359,
                        "pid": 206,
                        "name": "明溪县",
                        "level": 3
                    },
                    {
                        "id": 2360,
                        "pid": 206,
                        "name": "梅列区",
                        "level": 3
                    },
                    {
                        "id": 2361,
                        "pid": 206,
                        "name": "永安市",
                        "level": 3
                    },
                    {
                        "id": 2362,
                        "pid": 206,
                        "name": "沙县",
                        "level": 3
                    },
                    {
                        "id": 2363,
                        "pid": 206,
                        "name": "泰宁县",
                        "level": 3
                    },
                    {
                        "id": 2364,
                        "pid": 206,
                        "name": "清流县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 207,
                "pid": 13,
                "name": "泉州市",
                "level": 2,
                "children2": [
                    {
                        "id": 2365,
                        "pid": 207,
                        "name": "丰泽区",
                        "level": 3
                    },
                    {
                        "id": 2366,
                        "pid": 207,
                        "name": "南安市",
                        "level": 3
                    },
                    {
                        "id": 2367,
                        "pid": 207,
                        "name": "安溪县",
                        "level": 3
                    },
                    {
                        "id": 2368,
                        "pid": 207,
                        "name": "德化县",
                        "level": 3
                    },
                    {
                        "id": 2369,
                        "pid": 207,
                        "name": "惠安县",
                        "level": 3
                    },
                    {
                        "id": 2370,
                        "pid": 207,
                        "name": "晋江市",
                        "level": 3
                    },
                    {
                        "id": 2371,
                        "pid": 207,
                        "name": "永春县",
                        "level": 3
                    },
                    {
                        "id": 2372,
                        "pid": 207,
                        "name": "泉港区",
                        "level": 3
                    },
                    {
                        "id": 2373,
                        "pid": 207,
                        "name": "洛江区",
                        "level": 3
                    },
                    {
                        "id": 2374,
                        "pid": 207,
                        "name": "石狮市",
                        "level": 3
                    },
                    {
                        "id": 2375,
                        "pid": 207,
                        "name": "金门县",
                        "level": 3
                    },
                    {
                        "id": 2376,
                        "pid": 207,
                        "name": "鲤城区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 208,
                "pid": 13,
                "name": "漳州市",
                "level": 2,
                "children2": [
                    {
                        "id": 2377,
                        "pid": 208,
                        "name": "东山县",
                        "level": 3
                    },
                    {
                        "id": 2378,
                        "pid": 208,
                        "name": "云霄县",
                        "level": 3
                    },
                    {
                        "id": 2379,
                        "pid": 208,
                        "name": "华安县",
                        "level": 3
                    },
                    {
                        "id": 2380,
                        "pid": 208,
                        "name": "南靖县",
                        "level": 3
                    },
                    {
                        "id": 2381,
                        "pid": 208,
                        "name": "平和县",
                        "level": 3
                    },
                    {
                        "id": 2382,
                        "pid": 208,
                        "name": "漳浦县",
                        "level": 3
                    },
                    {
                        "id": 2383,
                        "pid": 208,
                        "name": "芗城区",
                        "level": 3
                    },
                    {
                        "id": 2384,
                        "pid": 208,
                        "name": "诏安县",
                        "level": 3
                    },
                    {
                        "id": 2385,
                        "pid": 208,
                        "name": "长泰县",
                        "level": 3
                    },
                    {
                        "id": 2386,
                        "pid": 208,
                        "name": "龙文区",
                        "level": 3
                    },
                    {
                        "id": 2387,
                        "pid": 208,
                        "name": "龙海市",
                        "level": 3
                    }
                ]
            },
            {
                "id": 209,
                "pid": 13,
                "name": "南平市",
                "level": 2,
                "children2": [
                    {
                        "id": 2388,
                        "pid": 209,
                        "name": "光泽县",
                        "level": 3
                    },
                    {
                        "id": 2389,
                        "pid": 209,
                        "name": "延平区",
                        "level": 3
                    },
                    {
                        "id": 2390,
                        "pid": 209,
                        "name": "建瓯市",
                        "level": 3
                    },
                    {
                        "id": 2391,
                        "pid": 209,
                        "name": "建阳市",
                        "level": 3
                    },
                    {
                        "id": 2392,
                        "pid": 209,
                        "name": "政和县",
                        "level": 3
                    },
                    {
                        "id": 2393,
                        "pid": 209,
                        "name": "松溪县",
                        "level": 3
                    },
                    {
                        "id": 2394,
                        "pid": 209,
                        "name": "武夷山市",
                        "level": 3
                    },
                    {
                        "id": 2395,
                        "pid": 209,
                        "name": "浦城县",
                        "level": 3
                    },
                    {
                        "id": 2396,
                        "pid": 209,
                        "name": "邵武市",
                        "level": 3
                    },
                    {
                        "id": 2397,
                        "pid": 209,
                        "name": "顺昌县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 210,
                "pid": 13,
                "name": "龙岩市",
                "level": 2,
                "children2": [
                    {
                        "id": 2398,
                        "pid": 210,
                        "name": "上杭县",
                        "level": 3
                    },
                    {
                        "id": 2399,
                        "pid": 210,
                        "name": "新罗区",
                        "level": 3
                    },
                    {
                        "id": 2400,
                        "pid": 210,
                        "name": "武平县",
                        "level": 3
                    },
                    {
                        "id": 2401,
                        "pid": 210,
                        "name": "永定县",
                        "level": 3
                    },
                    {
                        "id": 2402,
                        "pid": 210,
                        "name": "漳平市",
                        "level": 3
                    },
                    {
                        "id": 2403,
                        "pid": 210,
                        "name": "连城县",
                        "level": 3
                    },
                    {
                        "id": 2404,
                        "pid": 210,
                        "name": "长汀县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 211,
                "pid": 13,
                "name": "宁德市",
                "level": 2,
                "children2": [
                    {
                        "id": 2405,
                        "pid": 211,
                        "name": "古田县",
                        "level": 3
                    },
                    {
                        "id": 2406,
                        "pid": 211,
                        "name": "周宁县",
                        "level": 3
                    },
                    {
                        "id": 2407,
                        "pid": 211,
                        "name": "寿宁县",
                        "level": 3
                    },
                    {
                        "id": 2408,
                        "pid": 211,
                        "name": "屏南县",
                        "level": 3
                    },
                    {
                        "id": 2409,
                        "pid": 211,
                        "name": "柘荣县",
                        "level": 3
                    },
                    {
                        "id": 2410,
                        "pid": 211,
                        "name": "福安市",
                        "level": 3
                    },
                    {
                        "id": 2411,
                        "pid": 211,
                        "name": "福鼎市",
                        "level": 3
                    },
                    {
                        "id": 2412,
                        "pid": 211,
                        "name": "蕉城区",
                        "level": 3
                    },
                    {
                        "id": 2413,
                        "pid": 211,
                        "name": "霞浦县",
                        "level": 3
                    }
                ]
            }
        ]
    },
    {
        "id": 14,
        "pid": 0,
        "name": "江西省",
        "level": 1,
        "children": [
            {
                "id": 212,
                "pid": 14,
                "name": "南昌市",
                "level": 2,
                "children2": [
                    {
                        "id": 2414,
                        "pid": 212,
                        "name": "东湖区",
                        "level": 3
                    },
                    {
                        "id": 2415,
                        "pid": 212,
                        "name": "南昌县",
                        "level": 3
                    },
                    {
                        "id": 2416,
                        "pid": 212,
                        "name": "安义县",
                        "level": 3
                    },
                    {
                        "id": 2417,
                        "pid": 212,
                        "name": "新建县",
                        "level": 3
                    },
                    {
                        "id": 2418,
                        "pid": 212,
                        "name": "湾里区",
                        "level": 3
                    },
                    {
                        "id": 2419,
                        "pid": 212,
                        "name": "西湖区",
                        "level": 3
                    },
                    {
                        "id": 2420,
                        "pid": 212,
                        "name": "进贤县",
                        "level": 3
                    },
                    {
                        "id": 2421,
                        "pid": 212,
                        "name": "青云谱区",
                        "level": 3
                    },
                    {
                        "id": 2422,
                        "pid": 212,
                        "name": "青山湖区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 213,
                "pid": 14,
                "name": "景德镇市",
                "level": 2,
                "children2": [
                    {
                        "id": 2423,
                        "pid": 213,
                        "name": "乐平市",
                        "level": 3
                    },
                    {
                        "id": 2424,
                        "pid": 213,
                        "name": "昌江区",
                        "level": 3
                    },
                    {
                        "id": 2425,
                        "pid": 213,
                        "name": "浮梁县",
                        "level": 3
                    },
                    {
                        "id": 2426,
                        "pid": 213,
                        "name": "珠山区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 214,
                "pid": 14,
                "name": "萍乡市",
                "level": 2,
                "children2": [
                    {
                        "id": 2427,
                        "pid": 214,
                        "name": "上栗县",
                        "level": 3
                    },
                    {
                        "id": 2428,
                        "pid": 214,
                        "name": "安源区",
                        "level": 3
                    },
                    {
                        "id": 2429,
                        "pid": 214,
                        "name": "湘东区",
                        "level": 3
                    },
                    {
                        "id": 2430,
                        "pid": 214,
                        "name": "芦溪县",
                        "level": 3
                    },
                    {
                        "id": 2431,
                        "pid": 214,
                        "name": "莲花县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 215,
                "pid": 14,
                "name": "九江市",
                "level": 2,
                "children2": [
                    {
                        "id": 2432,
                        "pid": 215,
                        "name": "九江县",
                        "level": 3
                    },
                    {
                        "id": 2433,
                        "pid": 215,
                        "name": "修水县",
                        "level": 3
                    },
                    {
                        "id": 2434,
                        "pid": 215,
                        "name": "庐山区",
                        "level": 3
                    },
                    {
                        "id": 2435,
                        "pid": 215,
                        "name": "彭泽县",
                        "level": 3
                    },
                    {
                        "id": 2436,
                        "pid": 215,
                        "name": "德安县",
                        "level": 3
                    },
                    {
                        "id": 2437,
                        "pid": 215,
                        "name": "星子县",
                        "level": 3
                    },
                    {
                        "id": 2438,
                        "pid": 215,
                        "name": "武宁县",
                        "level": 3
                    },
                    {
                        "id": 2439,
                        "pid": 215,
                        "name": "永修县",
                        "level": 3
                    },
                    {
                        "id": 2440,
                        "pid": 215,
                        "name": "浔阳区",
                        "level": 3
                    },
                    {
                        "id": 2441,
                        "pid": 215,
                        "name": "湖口县",
                        "level": 3
                    },
                    {
                        "id": 2442,
                        "pid": 215,
                        "name": "瑞昌市",
                        "level": 3
                    },
                    {
                        "id": 2443,
                        "pid": 215,
                        "name": "都昌县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 216,
                "pid": 14,
                "name": "新余市",
                "level": 2,
                "children2": [
                    {
                        "id": 2444,
                        "pid": 216,
                        "name": "分宜县",
                        "level": 3
                    },
                    {
                        "id": 2445,
                        "pid": 216,
                        "name": "渝水区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 217,
                "pid": 14,
                "name": "鹰潭市",
                "level": 2,
                "children2": [
                    {
                        "id": 2446,
                        "pid": 217,
                        "name": "余江县",
                        "level": 3
                    },
                    {
                        "id": 2447,
                        "pid": 217,
                        "name": "月湖区",
                        "level": 3
                    },
                    {
                        "id": 2448,
                        "pid": 217,
                        "name": "贵溪市",
                        "level": 3
                    }
                ]
            },
            {
                "id": 218,
                "pid": 14,
                "name": "赣州市",
                "level": 2,
                "children2": [
                    {
                        "id": 2449,
                        "pid": 218,
                        "name": "上犹县",
                        "level": 3
                    },
                    {
                        "id": 2450,
                        "pid": 218,
                        "name": "于都县",
                        "level": 3
                    },
                    {
                        "id": 2451,
                        "pid": 218,
                        "name": "会昌县",
                        "level": 3
                    },
                    {
                        "id": 2452,
                        "pid": 218,
                        "name": "信丰县",
                        "level": 3
                    },
                    {
                        "id": 2453,
                        "pid": 218,
                        "name": "全南县",
                        "level": 3
                    },
                    {
                        "id": 2454,
                        "pid": 218,
                        "name": "兴国县",
                        "level": 3
                    },
                    {
                        "id": 2455,
                        "pid": 218,
                        "name": "南康市",
                        "level": 3
                    },
                    {
                        "id": 2456,
                        "pid": 218,
                        "name": "大余县",
                        "level": 3
                    },
                    {
                        "id": 2457,
                        "pid": 218,
                        "name": "宁都县",
                        "level": 3
                    },
                    {
                        "id": 2458,
                        "pid": 218,
                        "name": "安远县",
                        "level": 3
                    },
                    {
                        "id": 2459,
                        "pid": 218,
                        "name": "定南县",
                        "level": 3
                    },
                    {
                        "id": 2460,
                        "pid": 218,
                        "name": "寻乌县",
                        "level": 3
                    },
                    {
                        "id": 2461,
                        "pid": 218,
                        "name": "崇义县",
                        "level": 3
                    },
                    {
                        "id": 2462,
                        "pid": 218,
                        "name": "瑞金市",
                        "level": 3
                    },
                    {
                        "id": 2463,
                        "pid": 218,
                        "name": "石城县",
                        "level": 3
                    },
                    {
                        "id": 2464,
                        "pid": 218,
                        "name": "章贡区",
                        "level": 3
                    },
                    {
                        "id": 2465,
                        "pid": 218,
                        "name": "赣县",
                        "level": 3
                    },
                    {
                        "id": 2466,
                        "pid": 218,
                        "name": "龙南县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 219,
                "pid": 14,
                "name": "吉安市",
                "level": 2,
                "children2": [
                    {
                        "id": 2467,
                        "pid": 219,
                        "name": "万安县",
                        "level": 3
                    },
                    {
                        "id": 2468,
                        "pid": 219,
                        "name": "井冈山市",
                        "level": 3
                    },
                    {
                        "id": 2469,
                        "pid": 219,
                        "name": "吉安县",
                        "level": 3
                    },
                    {
                        "id": 2470,
                        "pid": 219,
                        "name": "吉州区",
                        "level": 3
                    },
                    {
                        "id": 2471,
                        "pid": 219,
                        "name": "吉水县",
                        "level": 3
                    },
                    {
                        "id": 2472,
                        "pid": 219,
                        "name": "安福县",
                        "level": 3
                    },
                    {
                        "id": 2473,
                        "pid": 219,
                        "name": "峡江县",
                        "level": 3
                    },
                    {
                        "id": 2474,
                        "pid": 219,
                        "name": "新干县",
                        "level": 3
                    },
                    {
                        "id": 2475,
                        "pid": 219,
                        "name": "永丰县",
                        "level": 3
                    },
                    {
                        "id": 2476,
                        "pid": 219,
                        "name": "永新县",
                        "level": 3
                    },
                    {
                        "id": 2477,
                        "pid": 219,
                        "name": "泰和县",
                        "level": 3
                    },
                    {
                        "id": 2478,
                        "pid": 219,
                        "name": "遂川县",
                        "level": 3
                    },
                    {
                        "id": 2479,
                        "pid": 219,
                        "name": "青原区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 220,
                "pid": 14,
                "name": "宜春市",
                "level": 2,
                "children2": [
                    {
                        "id": 2480,
                        "pid": 220,
                        "name": "万载县",
                        "level": 3
                    },
                    {
                        "id": 2481,
                        "pid": 220,
                        "name": "上高县",
                        "level": 3
                    },
                    {
                        "id": 2482,
                        "pid": 220,
                        "name": "丰城市",
                        "level": 3
                    },
                    {
                        "id": 2483,
                        "pid": 220,
                        "name": "奉新县",
                        "level": 3
                    },
                    {
                        "id": 2484,
                        "pid": 220,
                        "name": "宜丰县",
                        "level": 3
                    },
                    {
                        "id": 2485,
                        "pid": 220,
                        "name": "樟树市",
                        "level": 3
                    },
                    {
                        "id": 2486,
                        "pid": 220,
                        "name": "袁州区",
                        "level": 3
                    },
                    {
                        "id": 2487,
                        "pid": 220,
                        "name": "铜鼓县",
                        "level": 3
                    },
                    {
                        "id": 2488,
                        "pid": 220,
                        "name": "靖安县",
                        "level": 3
                    },
                    {
                        "id": 2489,
                        "pid": 220,
                        "name": "高安市",
                        "level": 3
                    }
                ]
            },
            {
                "id": 221,
                "pid": 14,
                "name": "抚州市",
                "level": 2,
                "children2": [
                    {
                        "id": 2490,
                        "pid": 221,
                        "name": "东乡县",
                        "level": 3
                    },
                    {
                        "id": 2491,
                        "pid": 221,
                        "name": "临川区",
                        "level": 3
                    },
                    {
                        "id": 2492,
                        "pid": 221,
                        "name": "乐安县",
                        "level": 3
                    },
                    {
                        "id": 2493,
                        "pid": 221,
                        "name": "南丰县",
                        "level": 3
                    },
                    {
                        "id": 2494,
                        "pid": 221,
                        "name": "南城县",
                        "level": 3
                    },
                    {
                        "id": 2495,
                        "pid": 221,
                        "name": "宜黄县",
                        "level": 3
                    },
                    {
                        "id": 2496,
                        "pid": 221,
                        "name": "崇仁县",
                        "level": 3
                    },
                    {
                        "id": 2497,
                        "pid": 221,
                        "name": "广昌县",
                        "level": 3
                    },
                    {
                        "id": 2498,
                        "pid": 221,
                        "name": "资溪县",
                        "level": 3
                    },
                    {
                        "id": 2499,
                        "pid": 221,
                        "name": "金溪县",
                        "level": 3
                    },
                    {
                        "id": 2500,
                        "pid": 221,
                        "name": "黎川县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 222,
                "pid": 14,
                "name": "上饶市",
                "level": 2,
                "children2": [
                    {
                        "id": 2501,
                        "pid": 222,
                        "name": "万年县",
                        "level": 3
                    },
                    {
                        "id": 2502,
                        "pid": 222,
                        "name": "上饶县",
                        "level": 3
                    },
                    {
                        "id": 2503,
                        "pid": 222,
                        "name": "余干县",
                        "level": 3
                    },
                    {
                        "id": 2504,
                        "pid": 222,
                        "name": "信州区",
                        "level": 3
                    },
                    {
                        "id": 2505,
                        "pid": 222,
                        "name": "婺源县",
                        "level": 3
                    },
                    {
                        "id": 2506,
                        "pid": 222,
                        "name": "广丰县",
                        "level": 3
                    },
                    {
                        "id": 2507,
                        "pid": 222,
                        "name": "弋阳县",
                        "level": 3
                    },
                    {
                        "id": 2508,
                        "pid": 222,
                        "name": "德兴市",
                        "level": 3
                    },
                    {
                        "id": 2509,
                        "pid": 222,
                        "name": "横峰县",
                        "level": 3
                    },
                    {
                        "id": 2510,
                        "pid": 222,
                        "name": "玉山县",
                        "level": 3
                    },
                    {
                        "id": 2511,
                        "pid": 222,
                        "name": "鄱阳县",
                        "level": 3
                    },
                    {
                        "id": 2512,
                        "pid": 222,
                        "name": "铅山县",
                        "level": 3
                    }
                ]
            }
        ]
    },
    {
        "id": 15,
        "pid": 0,
        "name": "山东省",
        "level": 1,
        "children": [
            {
                "id": 223,
                "pid": 15,
                "name": "济南市",
                "level": 2,
                "children2": [
                    {
                        "id": 2513,
                        "pid": 223,
                        "name": "历下区",
                        "level": 3
                    },
                    {
                        "id": 2514,
                        "pid": 223,
                        "name": "历城区",
                        "level": 3
                    },
                    {
                        "id": 2515,
                        "pid": 223,
                        "name": "商河县",
                        "level": 3
                    },
                    {
                        "id": 2516,
                        "pid": 223,
                        "name": "天桥区",
                        "level": 3
                    },
                    {
                        "id": 2517,
                        "pid": 223,
                        "name": "市中区",
                        "level": 3
                    },
                    {
                        "id": 2518,
                        "pid": 223,
                        "name": "平阴县",
                        "level": 3
                    },
                    {
                        "id": 2519,
                        "pid": 223,
                        "name": "槐荫区",
                        "level": 3
                    },
                    {
                        "id": 2520,
                        "pid": 223,
                        "name": "济阳县",
                        "level": 3
                    },
                    {
                        "id": 2521,
                        "pid": 223,
                        "name": "章丘市",
                        "level": 3
                    },
                    {
                        "id": 2522,
                        "pid": 223,
                        "name": "长清区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 224,
                "pid": 15,
                "name": "青岛市",
                "level": 2,
                "children2": [
                    {
                        "id": 2523,
                        "pid": 224,
                        "name": "即墨市",
                        "level": 3
                    },
                    {
                        "id": 2524,
                        "pid": 224,
                        "name": "四方区",
                        "level": 3
                    },
                    {
                        "id": 2525,
                        "pid": 224,
                        "name": "城阳区",
                        "level": 3
                    },
                    {
                        "id": 2526,
                        "pid": 224,
                        "name": "崂山区",
                        "level": 3
                    },
                    {
                        "id": 2527,
                        "pid": 224,
                        "name": "市北区",
                        "level": 3
                    },
                    {
                        "id": 2528,
                        "pid": 224,
                        "name": "市南区",
                        "level": 3
                    },
                    {
                        "id": 2529,
                        "pid": 224,
                        "name": "平度市",
                        "level": 3
                    },
                    {
                        "id": 2530,
                        "pid": 224,
                        "name": "李沧区",
                        "level": 3
                    },
                    {
                        "id": 2531,
                        "pid": 224,
                        "name": "胶南市",
                        "level": 3
                    },
                    {
                        "id": 2532,
                        "pid": 224,
                        "name": "胶州市",
                        "level": 3
                    },
                    {
                        "id": 2533,
                        "pid": 224,
                        "name": "莱西市",
                        "level": 3
                    },
                    {
                        "id": 2534,
                        "pid": 224,
                        "name": "黄岛区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 225,
                "pid": 15,
                "name": "淄博市",
                "level": 2,
                "children2": [
                    {
                        "id": 2535,
                        "pid": 225,
                        "name": "临淄区",
                        "level": 3
                    },
                    {
                        "id": 2536,
                        "pid": 225,
                        "name": "博山区",
                        "level": 3
                    },
                    {
                        "id": 2537,
                        "pid": 225,
                        "name": "周村区",
                        "level": 3
                    },
                    {
                        "id": 2538,
                        "pid": 225,
                        "name": "张店区",
                        "level": 3
                    },
                    {
                        "id": 2539,
                        "pid": 225,
                        "name": "桓台县",
                        "level": 3
                    },
                    {
                        "id": 2540,
                        "pid": 225,
                        "name": "沂源县",
                        "level": 3
                    },
                    {
                        "id": 2541,
                        "pid": 225,
                        "name": "淄川区",
                        "level": 3
                    },
                    {
                        "id": 2542,
                        "pid": 225,
                        "name": "高青县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 226,
                "pid": 15,
                "name": "枣庄市",
                "level": 2,
                "children2": [
                    {
                        "id": 2543,
                        "pid": 226,
                        "name": "台儿庄区",
                        "level": 3
                    },
                    {
                        "id": 2544,
                        "pid": 226,
                        "name": "山亭区",
                        "level": 3
                    },
                    {
                        "id": 2545,
                        "pid": 226,
                        "name": "峄城区",
                        "level": 3
                    },
                    {
                        "id": 2546,
                        "pid": 226,
                        "name": "市中区",
                        "level": 3
                    },
                    {
                        "id": 2547,
                        "pid": 226,
                        "name": "滕州市",
                        "level": 3
                    },
                    {
                        "id": 2548,
                        "pid": 226,
                        "name": "薛城区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 227,
                "pid": 15,
                "name": "东营市",
                "level": 2,
                "children2": [
                    {
                        "id": 2549,
                        "pid": 227,
                        "name": "东营区",
                        "level": 3
                    },
                    {
                        "id": 2550,
                        "pid": 227,
                        "name": "利津县",
                        "level": 3
                    },
                    {
                        "id": 2551,
                        "pid": 227,
                        "name": "垦利县",
                        "level": 3
                    },
                    {
                        "id": 2552,
                        "pid": 227,
                        "name": "广饶县",
                        "level": 3
                    },
                    {
                        "id": 2553,
                        "pid": 227,
                        "name": "河口区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 228,
                "pid": 15,
                "name": "烟台市",
                "level": 2,
                "children2": [
                    {
                        "id": 2554,
                        "pid": 228,
                        "name": "招远市",
                        "level": 3
                    },
                    {
                        "id": 2555,
                        "pid": 228,
                        "name": "栖霞市",
                        "level": 3
                    },
                    {
                        "id": 2556,
                        "pid": 228,
                        "name": "海阳市",
                        "level": 3
                    },
                    {
                        "id": 2557,
                        "pid": 228,
                        "name": "牟平区",
                        "level": 3
                    },
                    {
                        "id": 2558,
                        "pid": 228,
                        "name": "福山区",
                        "level": 3
                    },
                    {
                        "id": 2559,
                        "pid": 228,
                        "name": "芝罘区",
                        "level": 3
                    },
                    {
                        "id": 2560,
                        "pid": 228,
                        "name": "莱山区",
                        "level": 3
                    },
                    {
                        "id": 2561,
                        "pid": 228,
                        "name": "莱州市",
                        "level": 3
                    },
                    {
                        "id": 2562,
                        "pid": 228,
                        "name": "莱阳市",
                        "level": 3
                    },
                    {
                        "id": 2563,
                        "pid": 228,
                        "name": "蓬莱市",
                        "level": 3
                    },
                    {
                        "id": 2564,
                        "pid": 228,
                        "name": "长岛县",
                        "level": 3
                    },
                    {
                        "id": 2565,
                        "pid": 228,
                        "name": "龙口市",
                        "level": 3
                    }
                ]
            },
            {
                "id": 229,
                "pid": 15,
                "name": "潍坊市",
                "level": 2,
                "children2": [
                    {
                        "id": 2566,
                        "pid": 229,
                        "name": "临朐县",
                        "level": 3
                    },
                    {
                        "id": 2567,
                        "pid": 229,
                        "name": "坊子区",
                        "level": 3
                    },
                    {
                        "id": 2568,
                        "pid": 229,
                        "name": "奎文区",
                        "level": 3
                    },
                    {
                        "id": 2569,
                        "pid": 229,
                        "name": "安丘市",
                        "level": 3
                    },
                    {
                        "id": 2570,
                        "pid": 229,
                        "name": "寒亭区",
                        "level": 3
                    },
                    {
                        "id": 2571,
                        "pid": 229,
                        "name": "寿光市",
                        "level": 3
                    },
                    {
                        "id": 2572,
                        "pid": 229,
                        "name": "昌乐县",
                        "level": 3
                    },
                    {
                        "id": 2573,
                        "pid": 229,
                        "name": "昌邑市",
                        "level": 3
                    },
                    {
                        "id": 2574,
                        "pid": 229,
                        "name": "潍城区",
                        "level": 3
                    },
                    {
                        "id": 2575,
                        "pid": 229,
                        "name": "诸城市",
                        "level": 3
                    },
                    {
                        "id": 2576,
                        "pid": 229,
                        "name": "青州市",
                        "level": 3
                    },
                    {
                        "id": 2577,
                        "pid": 229,
                        "name": "高密市",
                        "level": 3
                    }
                ]
            },
            {
                "id": 230,
                "pid": 15,
                "name": "济宁市",
                "level": 2,
                "children2": [
                    {
                        "id": 2578,
                        "pid": 230,
                        "name": "任城区",
                        "level": 3
                    },
                    {
                        "id": 2579,
                        "pid": 230,
                        "name": "兖州市",
                        "level": 3
                    },
                    {
                        "id": 2580,
                        "pid": 230,
                        "name": "嘉祥县",
                        "level": 3
                    },
                    {
                        "id": 2581,
                        "pid": 230,
                        "name": "市中区",
                        "level": 3
                    },
                    {
                        "id": 2582,
                        "pid": 230,
                        "name": "微山县",
                        "level": 3
                    },
                    {
                        "id": 2583,
                        "pid": 230,
                        "name": "曲阜市",
                        "level": 3
                    },
                    {
                        "id": 2584,
                        "pid": 230,
                        "name": "梁山县",
                        "level": 3
                    },
                    {
                        "id": 2585,
                        "pid": 230,
                        "name": "汶上县",
                        "level": 3
                    },
                    {
                        "id": 2586,
                        "pid": 230,
                        "name": "泗水县",
                        "level": 3
                    },
                    {
                        "id": 2587,
                        "pid": 230,
                        "name": "邹城市",
                        "level": 3
                    },
                    {
                        "id": 2588,
                        "pid": 230,
                        "name": "金乡县",
                        "level": 3
                    },
                    {
                        "id": 2589,
                        "pid": 230,
                        "name": "鱼台县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 231,
                "pid": 15,
                "name": "泰安市",
                "level": 2,
                "children2": [
                    {
                        "id": 2590,
                        "pid": 231,
                        "name": "东平县",
                        "level": 3
                    },
                    {
                        "id": 2591,
                        "pid": 231,
                        "name": "宁阳县",
                        "level": 3
                    },
                    {
                        "id": 2592,
                        "pid": 231,
                        "name": "岱岳区",
                        "level": 3
                    },
                    {
                        "id": 2593,
                        "pid": 231,
                        "name": "新泰市",
                        "level": 3
                    },
                    {
                        "id": 2594,
                        "pid": 231,
                        "name": "泰山区",
                        "level": 3
                    },
                    {
                        "id": 2595,
                        "pid": 231,
                        "name": "肥城市",
                        "level": 3
                    }
                ]
            },
            {
                "id": 232,
                "pid": 15,
                "name": "威海市",
                "level": 2,
                "children2": [
                    {
                        "id": 2596,
                        "pid": 232,
                        "name": "乳山市",
                        "level": 3
                    },
                    {
                        "id": 2597,
                        "pid": 232,
                        "name": "文登市",
                        "level": 3
                    },
                    {
                        "id": 2598,
                        "pid": 232,
                        "name": "环翠区",
                        "level": 3
                    },
                    {
                        "id": 2599,
                        "pid": 232,
                        "name": "荣成市",
                        "level": 3
                    }
                ]
            },
            {
                "id": 233,
                "pid": 15,
                "name": "日照市",
                "level": 2,
                "children2": [
                    {
                        "id": 2600,
                        "pid": 233,
                        "name": "东港区",
                        "level": 3
                    },
                    {
                        "id": 2601,
                        "pid": 233,
                        "name": "五莲县",
                        "level": 3
                    },
                    {
                        "id": 2602,
                        "pid": 233,
                        "name": "岚山区",
                        "level": 3
                    },
                    {
                        "id": 2603,
                        "pid": 233,
                        "name": "莒县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 234,
                "pid": 15,
                "name": "莱芜市",
                "level": 2,
                "children2": [
                    {
                        "id": 2604,
                        "pid": 234,
                        "name": "莱城区",
                        "level": 3
                    },
                    {
                        "id": 2605,
                        "pid": 234,
                        "name": "钢城区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 235,
                "pid": 15,
                "name": "临沂市",
                "level": 2,
                "children2": [
                    {
                        "id": 2606,
                        "pid": 235,
                        "name": "临沭县",
                        "level": 3
                    },
                    {
                        "id": 2607,
                        "pid": 235,
                        "name": "兰山区",
                        "level": 3
                    },
                    {
                        "id": 2608,
                        "pid": 235,
                        "name": "平邑县",
                        "level": 3
                    },
                    {
                        "id": 2609,
                        "pid": 235,
                        "name": "沂南县",
                        "level": 3
                    },
                    {
                        "id": 2610,
                        "pid": 235,
                        "name": "沂水县",
                        "level": 3
                    },
                    {
                        "id": 2611,
                        "pid": 235,
                        "name": "河东区",
                        "level": 3
                    },
                    {
                        "id": 2612,
                        "pid": 235,
                        "name": "罗庄区",
                        "level": 3
                    },
                    {
                        "id": 2613,
                        "pid": 235,
                        "name": "苍山县",
                        "level": 3
                    },
                    {
                        "id": 2614,
                        "pid": 235,
                        "name": "莒南县",
                        "level": 3
                    },
                    {
                        "id": 2615,
                        "pid": 235,
                        "name": "蒙阴县",
                        "level": 3
                    },
                    {
                        "id": 2616,
                        "pid": 235,
                        "name": "费县",
                        "level": 3
                    },
                    {
                        "id": 2617,
                        "pid": 235,
                        "name": "郯城县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 236,
                "pid": 15,
                "name": "德州市",
                "level": 2,
                "children2": [
                    {
                        "id": 2618,
                        "pid": 236,
                        "name": "临邑县",
                        "level": 3
                    },
                    {
                        "id": 2619,
                        "pid": 236,
                        "name": "乐陵市",
                        "level": 3
                    },
                    {
                        "id": 2620,
                        "pid": 236,
                        "name": "夏津县",
                        "level": 3
                    },
                    {
                        "id": 2621,
                        "pid": 236,
                        "name": "宁津县",
                        "level": 3
                    },
                    {
                        "id": 2622,
                        "pid": 236,
                        "name": "平原县",
                        "level": 3
                    },
                    {
                        "id": 2623,
                        "pid": 236,
                        "name": "庆云县",
                        "level": 3
                    },
                    {
                        "id": 2624,
                        "pid": 236,
                        "name": "德城区",
                        "level": 3
                    },
                    {
                        "id": 2625,
                        "pid": 236,
                        "name": "武城县",
                        "level": 3
                    },
                    {
                        "id": 2626,
                        "pid": 236,
                        "name": "禹城市",
                        "level": 3
                    },
                    {
                        "id": 2627,
                        "pid": 236,
                        "name": "陵县",
                        "level": 3
                    },
                    {
                        "id": 2628,
                        "pid": 236,
                        "name": "齐河县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 237,
                "pid": 15,
                "name": "聊城市",
                "level": 2,
                "children2": [
                    {
                        "id": 2629,
                        "pid": 237,
                        "name": "东昌府区",
                        "level": 3
                    },
                    {
                        "id": 2630,
                        "pid": 237,
                        "name": "东阿县",
                        "level": 3
                    },
                    {
                        "id": 2631,
                        "pid": 237,
                        "name": "临清市",
                        "level": 3
                    },
                    {
                        "id": 2632,
                        "pid": 237,
                        "name": "冠县",
                        "level": 3
                    },
                    {
                        "id": 2633,
                        "pid": 237,
                        "name": "茌平县",
                        "level": 3
                    },
                    {
                        "id": 2634,
                        "pid": 237,
                        "name": "莘县",
                        "level": 3
                    },
                    {
                        "id": 2635,
                        "pid": 237,
                        "name": "阳谷县",
                        "level": 3
                    },
                    {
                        "id": 2636,
                        "pid": 237,
                        "name": "高唐县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 238,
                "pid": 15,
                "name": "滨州市",
                "level": 2,
                "children2": [
                    {
                        "id": 2637,
                        "pid": 238,
                        "name": "博兴县",
                        "level": 3
                    },
                    {
                        "id": 2638,
                        "pid": 238,
                        "name": "惠民县",
                        "level": 3
                    },
                    {
                        "id": 2639,
                        "pid": 238,
                        "name": "无棣县",
                        "level": 3
                    },
                    {
                        "id": 2640,
                        "pid": 238,
                        "name": "沾化县",
                        "level": 3
                    },
                    {
                        "id": 2641,
                        "pid": 238,
                        "name": "滨城区",
                        "level": 3
                    },
                    {
                        "id": 2642,
                        "pid": 238,
                        "name": "邹平县",
                        "level": 3
                    },
                    {
                        "id": 2643,
                        "pid": 238,
                        "name": "阳信县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 239,
                "pid": 15,
                "name": "菏泽市",
                "level": 2,
                "children2": [
                    {
                        "id": 2644,
                        "pid": 239,
                        "name": "东明县",
                        "level": 3
                    },
                    {
                        "id": 2645,
                        "pid": 239,
                        "name": "单县",
                        "level": 3
                    },
                    {
                        "id": 2646,
                        "pid": 239,
                        "name": "定陶县",
                        "level": 3
                    },
                    {
                        "id": 2647,
                        "pid": 239,
                        "name": "巨野县",
                        "level": 3
                    },
                    {
                        "id": 2648,
                        "pid": 239,
                        "name": "成武县",
                        "level": 3
                    },
                    {
                        "id": 2649,
                        "pid": 239,
                        "name": "曹县",
                        "level": 3
                    },
                    {
                        "id": 2650,
                        "pid": 239,
                        "name": "牡丹区",
                        "level": 3
                    },
                    {
                        "id": 2651,
                        "pid": 239,
                        "name": "郓城县",
                        "level": 3
                    },
                    {
                        "id": 2652,
                        "pid": 239,
                        "name": "鄄城县",
                        "level": 3
                    }
                ]
            }
        ]
    },
    {
        "id": 16,
        "pid": 0,
        "name": "河南省",
        "level": 1,
        "children": [
            {
                "id": 240,
                "pid": 16,
                "name": "郑州市",
                "level": 2,
                "children2": [
                    {
                        "id": 2653,
                        "pid": 240,
                        "name": "上街区",
                        "level": 3
                    },
                    {
                        "id": 2654,
                        "pid": 240,
                        "name": "中原区",
                        "level": 3
                    },
                    {
                        "id": 2655,
                        "pid": 240,
                        "name": "中牟县",
                        "level": 3
                    },
                    {
                        "id": 2656,
                        "pid": 240,
                        "name": "二七区",
                        "level": 3
                    },
                    {
                        "id": 2657,
                        "pid": 240,
                        "name": "巩义市",
                        "level": 3
                    },
                    {
                        "id": 2658,
                        "pid": 240,
                        "name": "惠济区",
                        "level": 3
                    },
                    {
                        "id": 2659,
                        "pid": 240,
                        "name": "新密市",
                        "level": 3
                    },
                    {
                        "id": 2660,
                        "pid": 240,
                        "name": "新郑市",
                        "level": 3
                    },
                    {
                        "id": 2661,
                        "pid": 240,
                        "name": "登封市",
                        "level": 3
                    },
                    {
                        "id": 2662,
                        "pid": 240,
                        "name": "管城回族区",
                        "level": 3
                    },
                    {
                        "id": 2663,
                        "pid": 240,
                        "name": "荥阳市",
                        "level": 3
                    },
                    {
                        "id": 2664,
                        "pid": 240,
                        "name": "金水区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 241,
                "pid": 16,
                "name": "开封市",
                "level": 2,
                "children2": [
                    {
                        "id": 2665,
                        "pid": 241,
                        "name": "兰考县",
                        "level": 3
                    },
                    {
                        "id": 2666,
                        "pid": 241,
                        "name": "尉氏县",
                        "level": 3
                    },
                    {
                        "id": 2667,
                        "pid": 241,
                        "name": "开封县",
                        "level": 3
                    },
                    {
                        "id": 2668,
                        "pid": 241,
                        "name": "杞县",
                        "level": 3
                    },
                    {
                        "id": 2669,
                        "pid": 241,
                        "name": "禹王台区",
                        "level": 3
                    },
                    {
                        "id": 2670,
                        "pid": 241,
                        "name": "通许县",
                        "level": 3
                    },
                    {
                        "id": 2671,
                        "pid": 241,
                        "name": "金明区",
                        "level": 3
                    },
                    {
                        "id": 2672,
                        "pid": 241,
                        "name": "顺河回族区",
                        "level": 3
                    },
                    {
                        "id": 2673,
                        "pid": 241,
                        "name": "鼓楼区",
                        "level": 3
                    },
                    {
                        "id": 2674,
                        "pid": 241,
                        "name": "龙亭区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 242,
                "pid": 16,
                "name": "洛阳市",
                "level": 2,
                "children2": [
                    {
                        "id": 2675,
                        "pid": 242,
                        "name": "伊川县",
                        "level": 3
                    },
                    {
                        "id": 2676,
                        "pid": 242,
                        "name": "偃师市",
                        "level": 3
                    },
                    {
                        "id": 2677,
                        "pid": 242,
                        "name": "吉利区",
                        "level": 3
                    },
                    {
                        "id": 2678,
                        "pid": 242,
                        "name": "孟津县",
                        "level": 3
                    },
                    {
                        "id": 2679,
                        "pid": 242,
                        "name": "宜阳县",
                        "level": 3
                    },
                    {
                        "id": 2680,
                        "pid": 242,
                        "name": "嵩县",
                        "level": 3
                    },
                    {
                        "id": 2681,
                        "pid": 242,
                        "name": "新安县",
                        "level": 3
                    },
                    {
                        "id": 2682,
                        "pid": 242,
                        "name": "栾川县",
                        "level": 3
                    },
                    {
                        "id": 2683,
                        "pid": 242,
                        "name": "汝阳县",
                        "level": 3
                    },
                    {
                        "id": 2684,
                        "pid": 242,
                        "name": "洛宁县",
                        "level": 3
                    },
                    {
                        "id": 2685,
                        "pid": 242,
                        "name": "洛龙区",
                        "level": 3
                    },
                    {
                        "id": 2686,
                        "pid": 242,
                        "name": "涧西区",
                        "level": 3
                    },
                    {
                        "id": 2687,
                        "pid": 242,
                        "name": "瀍河回族区",
                        "level": 3
                    },
                    {
                        "id": 2688,
                        "pid": 242,
                        "name": "老城区",
                        "level": 3
                    },
                    {
                        "id": 2689,
                        "pid": 242,
                        "name": "西工区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 243,
                "pid": 16,
                "name": "平顶山市",
                "level": 2,
                "children2": [
                    {
                        "id": 2690,
                        "pid": 243,
                        "name": "卫东区",
                        "level": 3
                    },
                    {
                        "id": 2691,
                        "pid": 243,
                        "name": "叶县",
                        "level": 3
                    },
                    {
                        "id": 2692,
                        "pid": 243,
                        "name": "宝丰县",
                        "level": 3
                    },
                    {
                        "id": 2693,
                        "pid": 243,
                        "name": "新华区",
                        "level": 3
                    },
                    {
                        "id": 2694,
                        "pid": 243,
                        "name": "汝州市",
                        "level": 3
                    },
                    {
                        "id": 2695,
                        "pid": 243,
                        "name": "湛河区",
                        "level": 3
                    },
                    {
                        "id": 2696,
                        "pid": 243,
                        "name": "石龙区",
                        "level": 3
                    },
                    {
                        "id": 2697,
                        "pid": 243,
                        "name": "舞钢市",
                        "level": 3
                    },
                    {
                        "id": 2698,
                        "pid": 243,
                        "name": "郏县",
                        "level": 3
                    },
                    {
                        "id": 2699,
                        "pid": 243,
                        "name": "鲁山县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 244,
                "pid": 16,
                "name": "安阳市",
                "level": 2,
                "children2": [
                    {
                        "id": 2700,
                        "pid": 244,
                        "name": "内黄县",
                        "level": 3
                    },
                    {
                        "id": 2701,
                        "pid": 244,
                        "name": "北关区",
                        "level": 3
                    },
                    {
                        "id": 2702,
                        "pid": 244,
                        "name": "安阳县",
                        "level": 3
                    },
                    {
                        "id": 2703,
                        "pid": 244,
                        "name": "文峰区",
                        "level": 3
                    },
                    {
                        "id": 2704,
                        "pid": 244,
                        "name": "林州市",
                        "level": 3
                    },
                    {
                        "id": 2705,
                        "pid": 244,
                        "name": "殷都区",
                        "level": 3
                    },
                    {
                        "id": 2706,
                        "pid": 244,
                        "name": "汤阴县",
                        "level": 3
                    },
                    {
                        "id": 2707,
                        "pid": 244,
                        "name": "滑县",
                        "level": 3
                    },
                    {
                        "id": 2708,
                        "pid": 244,
                        "name": "龙安区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 245,
                "pid": 16,
                "name": "鹤壁市",
                "level": 2,
                "children2": [
                    {
                        "id": 2709,
                        "pid": 245,
                        "name": "山城区",
                        "level": 3
                    },
                    {
                        "id": 2710,
                        "pid": 245,
                        "name": "浚县",
                        "level": 3
                    },
                    {
                        "id": 2711,
                        "pid": 245,
                        "name": "淇县",
                        "level": 3
                    },
                    {
                        "id": 2712,
                        "pid": 245,
                        "name": "淇滨区",
                        "level": 3
                    },
                    {
                        "id": 2713,
                        "pid": 245,
                        "name": "鹤山区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 246,
                "pid": 16,
                "name": "新乡市",
                "level": 2,
                "children2": [
                    {
                        "id": 2714,
                        "pid": 246,
                        "name": "凤泉区",
                        "level": 3
                    },
                    {
                        "id": 2715,
                        "pid": 246,
                        "name": "卫滨区",
                        "level": 3
                    },
                    {
                        "id": 2716,
                        "pid": 246,
                        "name": "卫辉市",
                        "level": 3
                    },
                    {
                        "id": 2717,
                        "pid": 246,
                        "name": "原阳县",
                        "level": 3
                    },
                    {
                        "id": 2718,
                        "pid": 246,
                        "name": "封丘县",
                        "level": 3
                    },
                    {
                        "id": 2719,
                        "pid": 246,
                        "name": "延津县",
                        "level": 3
                    },
                    {
                        "id": 2720,
                        "pid": 246,
                        "name": "新乡县",
                        "level": 3
                    },
                    {
                        "id": 2721,
                        "pid": 246,
                        "name": "牧野区",
                        "level": 3
                    },
                    {
                        "id": 2722,
                        "pid": 246,
                        "name": "红旗区",
                        "level": 3
                    },
                    {
                        "id": 2723,
                        "pid": 246,
                        "name": "获嘉县",
                        "level": 3
                    },
                    {
                        "id": 2724,
                        "pid": 246,
                        "name": "辉县市",
                        "level": 3
                    },
                    {
                        "id": 2725,
                        "pid": 246,
                        "name": "长垣县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 247,
                "pid": 16,
                "name": "焦作市",
                "level": 2,
                "children2": [
                    {
                        "id": 2726,
                        "pid": 247,
                        "name": "中站区",
                        "level": 3
                    },
                    {
                        "id": 2727,
                        "pid": 247,
                        "name": "修武县",
                        "level": 3
                    },
                    {
                        "id": 2728,
                        "pid": 247,
                        "name": "博爱县",
                        "level": 3
                    },
                    {
                        "id": 2729,
                        "pid": 247,
                        "name": "孟州市",
                        "level": 3
                    },
                    {
                        "id": 2730,
                        "pid": 247,
                        "name": "山阳区",
                        "level": 3
                    },
                    {
                        "id": 2731,
                        "pid": 247,
                        "name": "武陟县",
                        "level": 3
                    },
                    {
                        "id": 2732,
                        "pid": 247,
                        "name": "沁阳市",
                        "level": 3
                    },
                    {
                        "id": 2733,
                        "pid": 247,
                        "name": "温县",
                        "level": 3
                    },
                    {
                        "id": 2734,
                        "pid": 247,
                        "name": "解放区",
                        "level": 3
                    },
                    {
                        "id": 2735,
                        "pid": 247,
                        "name": "马村区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 248,
                "pid": 16,
                "name": "濮阳市",
                "level": 2,
                "children2": [
                    {
                        "id": 2736,
                        "pid": 248,
                        "name": "华龙区",
                        "level": 3
                    },
                    {
                        "id": 2737,
                        "pid": 248,
                        "name": "南乐县",
                        "level": 3
                    },
                    {
                        "id": 2738,
                        "pid": 248,
                        "name": "台前县",
                        "level": 3
                    },
                    {
                        "id": 2739,
                        "pid": 248,
                        "name": "清丰县",
                        "level": 3
                    },
                    {
                        "id": 2740,
                        "pid": 248,
                        "name": "濮阳县",
                        "level": 3
                    },
                    {
                        "id": 2741,
                        "pid": 248,
                        "name": "范县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 249,
                "pid": 16,
                "name": "许昌市",
                "level": 2,
                "children2": [
                    {
                        "id": 2742,
                        "pid": 249,
                        "name": "禹州市",
                        "level": 3
                    },
                    {
                        "id": 2743,
                        "pid": 249,
                        "name": "襄城县",
                        "level": 3
                    },
                    {
                        "id": 2744,
                        "pid": 249,
                        "name": "许昌县",
                        "level": 3
                    },
                    {
                        "id": 2745,
                        "pid": 249,
                        "name": "鄢陵县",
                        "level": 3
                    },
                    {
                        "id": 2746,
                        "pid": 249,
                        "name": "长葛市",
                        "level": 3
                    },
                    {
                        "id": 2747,
                        "pid": 249,
                        "name": "魏都区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 250,
                "pid": 16,
                "name": "漯河市",
                "level": 2,
                "children2": [
                    {
                        "id": 2748,
                        "pid": 250,
                        "name": "临颍县",
                        "level": 3
                    },
                    {
                        "id": 2749,
                        "pid": 250,
                        "name": "召陵区",
                        "level": 3
                    },
                    {
                        "id": 2750,
                        "pid": 250,
                        "name": "源汇区",
                        "level": 3
                    },
                    {
                        "id": 2751,
                        "pid": 250,
                        "name": "舞阳县",
                        "level": 3
                    },
                    {
                        "id": 2752,
                        "pid": 250,
                        "name": "郾城区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 251,
                "pid": 16,
                "name": "三门峡市",
                "level": 2,
                "children2": [
                    {
                        "id": 2753,
                        "pid": 251,
                        "name": "义马市",
                        "level": 3
                    },
                    {
                        "id": 2754,
                        "pid": 251,
                        "name": "卢氏县",
                        "level": 3
                    },
                    {
                        "id": 2755,
                        "pid": 251,
                        "name": "渑池县",
                        "level": 3
                    },
                    {
                        "id": 2756,
                        "pid": 251,
                        "name": "湖滨区",
                        "level": 3
                    },
                    {
                        "id": 2757,
                        "pid": 251,
                        "name": "灵宝市",
                        "level": 3
                    },
                    {
                        "id": 2758,
                        "pid": 251,
                        "name": "陕县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 252,
                "pid": 16,
                "name": "南阳市",
                "level": 2,
                "children2": [
                    {
                        "id": 2759,
                        "pid": 252,
                        "name": "内乡县",
                        "level": 3
                    },
                    {
                        "id": 2760,
                        "pid": 252,
                        "name": "南召县",
                        "level": 3
                    },
                    {
                        "id": 2761,
                        "pid": 252,
                        "name": "卧龙区",
                        "level": 3
                    },
                    {
                        "id": 2762,
                        "pid": 252,
                        "name": "唐河县",
                        "level": 3
                    },
                    {
                        "id": 2763,
                        "pid": 252,
                        "name": "宛城区",
                        "level": 3
                    },
                    {
                        "id": 2764,
                        "pid": 252,
                        "name": "新野县",
                        "level": 3
                    },
                    {
                        "id": 2765,
                        "pid": 252,
                        "name": "方城县",
                        "level": 3
                    },
                    {
                        "id": 2766,
                        "pid": 252,
                        "name": "桐柏县",
                        "level": 3
                    },
                    {
                        "id": 2767,
                        "pid": 252,
                        "name": "淅川县",
                        "level": 3
                    },
                    {
                        "id": 2768,
                        "pid": 252,
                        "name": "社旗县",
                        "level": 3
                    },
                    {
                        "id": 2769,
                        "pid": 252,
                        "name": "西峡县",
                        "level": 3
                    },
                    {
                        "id": 2770,
                        "pid": 252,
                        "name": "邓州市",
                        "level": 3
                    },
                    {
                        "id": 2771,
                        "pid": 252,
                        "name": "镇平县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 253,
                "pid": 16,
                "name": "商丘市",
                "level": 2,
                "children2": [
                    {
                        "id": 2772,
                        "pid": 253,
                        "name": "夏邑县",
                        "level": 3
                    },
                    {
                        "id": 2773,
                        "pid": 253,
                        "name": "宁陵县",
                        "level": 3
                    },
                    {
                        "id": 2774,
                        "pid": 253,
                        "name": "柘城县",
                        "level": 3
                    },
                    {
                        "id": 2775,
                        "pid": 253,
                        "name": "民权县",
                        "level": 3
                    },
                    {
                        "id": 2776,
                        "pid": 253,
                        "name": "永城市",
                        "level": 3
                    },
                    {
                        "id": 2777,
                        "pid": 253,
                        "name": "睢县",
                        "level": 3
                    },
                    {
                        "id": 2778,
                        "pid": 253,
                        "name": "睢阳区",
                        "level": 3
                    },
                    {
                        "id": 2779,
                        "pid": 253,
                        "name": "粱园区",
                        "level": 3
                    },
                    {
                        "id": 2780,
                        "pid": 253,
                        "name": "虞城县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 254,
                "pid": 16,
                "name": "信阳市",
                "level": 2,
                "children2": [
                    {
                        "id": 2781,
                        "pid": 254,
                        "name": "光山县",
                        "level": 3
                    },
                    {
                        "id": 2782,
                        "pid": 254,
                        "name": "商城县",
                        "level": 3
                    },
                    {
                        "id": 2783,
                        "pid": 254,
                        "name": "固始县",
                        "level": 3
                    },
                    {
                        "id": 2784,
                        "pid": 254,
                        "name": "平桥区",
                        "level": 3
                    },
                    {
                        "id": 2785,
                        "pid": 254,
                        "name": "息县",
                        "level": 3
                    },
                    {
                        "id": 2786,
                        "pid": 254,
                        "name": "新县",
                        "level": 3
                    },
                    {
                        "id": 2787,
                        "pid": 254,
                        "name": "浉河区",
                        "level": 3
                    },
                    {
                        "id": 2788,
                        "pid": 254,
                        "name": "淮滨县",
                        "level": 3
                    },
                    {
                        "id": 2789,
                        "pid": 254,
                        "name": "潢川县",
                        "level": 3
                    },
                    {
                        "id": 2790,
                        "pid": 254,
                        "name": "罗山县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 255,
                "pid": 16,
                "name": "周口市",
                "level": 2,
                "children2": [
                    {
                        "id": 2791,
                        "pid": 255,
                        "name": "商水县",
                        "level": 3
                    },
                    {
                        "id": 2792,
                        "pid": 255,
                        "name": "太康县",
                        "level": 3
                    },
                    {
                        "id": 2793,
                        "pid": 255,
                        "name": "川汇区",
                        "level": 3
                    },
                    {
                        "id": 2794,
                        "pid": 255,
                        "name": "扶沟县",
                        "level": 3
                    },
                    {
                        "id": 2795,
                        "pid": 255,
                        "name": "沈丘县",
                        "level": 3
                    },
                    {
                        "id": 2796,
                        "pid": 255,
                        "name": "淮阳县",
                        "level": 3
                    },
                    {
                        "id": 2797,
                        "pid": 255,
                        "name": "西华县",
                        "level": 3
                    },
                    {
                        "id": 2798,
                        "pid": 255,
                        "name": "郸城县",
                        "level": 3
                    },
                    {
                        "id": 2799,
                        "pid": 255,
                        "name": "项城市",
                        "level": 3
                    },
                    {
                        "id": 2800,
                        "pid": 255,
                        "name": "鹿邑县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 256,
                "pid": 16,
                "name": "驻马店市",
                "level": 2,
                "children2": [
                    {
                        "id": 2801,
                        "pid": 256,
                        "name": "上蔡县",
                        "level": 3
                    },
                    {
                        "id": 2802,
                        "pid": 256,
                        "name": "平舆县",
                        "level": 3
                    },
                    {
                        "id": 2803,
                        "pid": 256,
                        "name": "新蔡县",
                        "level": 3
                    },
                    {
                        "id": 2804,
                        "pid": 256,
                        "name": "正阳县",
                        "level": 3
                    },
                    {
                        "id": 2805,
                        "pid": 256,
                        "name": "汝南县",
                        "level": 3
                    },
                    {
                        "id": 2806,
                        "pid": 256,
                        "name": "泌阳县",
                        "level": 3
                    },
                    {
                        "id": 2807,
                        "pid": 256,
                        "name": "确山县",
                        "level": 3
                    },
                    {
                        "id": 2808,
                        "pid": 256,
                        "name": "西平县",
                        "level": 3
                    },
                    {
                        "id": 2809,
                        "pid": 256,
                        "name": "遂平县",
                        "level": 3
                    },
                    {
                        "id": 2810,
                        "pid": 256,
                        "name": "驿城区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 257,
                "pid": 16,
                "name": "济源市",
                "level": 2,
                "children2": [
                    {
                        "id": 2811,
                        "pid": 257,
                        "name": "济源市",
                        "level": 3
                    }
                ]
            }
        ]
    },
    {
        "id": 17,
        "pid": 0,
        "name": "湖北省",
        "level": 1,
        "children": [
            {
                "id": 258,
                "pid": 17,
                "name": "武汉市",
                "level": 2,
                "children2": [
                    {
                        "id": 2812,
                        "pid": 258,
                        "name": "东西湖区",
                        "level": 3
                    },
                    {
                        "id": 2813,
                        "pid": 258,
                        "name": "新洲区",
                        "level": 3
                    },
                    {
                        "id": 2814,
                        "pid": 258,
                        "name": "武昌区",
                        "level": 3
                    },
                    {
                        "id": 2815,
                        "pid": 258,
                        "name": "汉南区",
                        "level": 3
                    },
                    {
                        "id": 2816,
                        "pid": 258,
                        "name": "汉阳区",
                        "level": 3
                    },
                    {
                        "id": 2817,
                        "pid": 258,
                        "name": "江夏区",
                        "level": 3
                    },
                    {
                        "id": 2818,
                        "pid": 258,
                        "name": "江岸区",
                        "level": 3
                    },
                    {
                        "id": 2819,
                        "pid": 258,
                        "name": "江汉区",
                        "level": 3
                    },
                    {
                        "id": 2820,
                        "pid": 258,
                        "name": "洪山区",
                        "level": 3
                    },
                    {
                        "id": 2821,
                        "pid": 258,
                        "name": "硚口区",
                        "level": 3
                    },
                    {
                        "id": 2822,
                        "pid": 258,
                        "name": "蔡甸区",
                        "level": 3
                    },
                    {
                        "id": 2823,
                        "pid": 258,
                        "name": "青山区",
                        "level": 3
                    },
                    {
                        "id": 2824,
                        "pid": 258,
                        "name": "黄陂区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 259,
                "pid": 17,
                "name": "黄石市",
                "level": 2,
                "children2": [
                    {
                        "id": 2825,
                        "pid": 259,
                        "name": "下陆区",
                        "level": 3
                    },
                    {
                        "id": 2826,
                        "pid": 259,
                        "name": "大冶市",
                        "level": 3
                    },
                    {
                        "id": 2827,
                        "pid": 259,
                        "name": "西塞山区",
                        "level": 3
                    },
                    {
                        "id": 2828,
                        "pid": 259,
                        "name": "铁山区",
                        "level": 3
                    },
                    {
                        "id": 2829,
                        "pid": 259,
                        "name": "阳新县",
                        "level": 3
                    },
                    {
                        "id": 2830,
                        "pid": 259,
                        "name": "黄石港区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 260,
                "pid": 17,
                "name": "十堰市",
                "level": 2,
                "children2": [
                    {
                        "id": 2831,
                        "pid": 260,
                        "name": "丹江口市",
                        "level": 3
                    },
                    {
                        "id": 2832,
                        "pid": 260,
                        "name": "张湾区",
                        "level": 3
                    },
                    {
                        "id": 2833,
                        "pid": 260,
                        "name": "房县",
                        "level": 3
                    },
                    {
                        "id": 2834,
                        "pid": 260,
                        "name": "竹山县",
                        "level": 3
                    },
                    {
                        "id": 2835,
                        "pid": 260,
                        "name": "竹溪县",
                        "level": 3
                    },
                    {
                        "id": 2836,
                        "pid": 260,
                        "name": "茅箭区",
                        "level": 3
                    },
                    {
                        "id": 2837,
                        "pid": 260,
                        "name": "郧县",
                        "level": 3
                    },
                    {
                        "id": 2838,
                        "pid": 260,
                        "name": "郧西县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 261,
                "pid": 17,
                "name": "宜昌市",
                "level": 2,
                "children2": [
                    {
                        "id": 2839,
                        "pid": 261,
                        "name": "五峰土家族自治县",
                        "level": 3
                    },
                    {
                        "id": 2840,
                        "pid": 261,
                        "name": "伍家岗区",
                        "level": 3
                    },
                    {
                        "id": 2841,
                        "pid": 261,
                        "name": "兴山县",
                        "level": 3
                    },
                    {
                        "id": 2842,
                        "pid": 261,
                        "name": "夷陵区",
                        "level": 3
                    },
                    {
                        "id": 2843,
                        "pid": 261,
                        "name": "宜都市",
                        "level": 3
                    },
                    {
                        "id": 2844,
                        "pid": 261,
                        "name": "当阳市",
                        "level": 3
                    },
                    {
                        "id": 2845,
                        "pid": 261,
                        "name": "枝江市",
                        "level": 3
                    },
                    {
                        "id": 2846,
                        "pid": 261,
                        "name": "点军区",
                        "level": 3
                    },
                    {
                        "id": 2847,
                        "pid": 261,
                        "name": "秭归县",
                        "level": 3
                    },
                    {
                        "id": 2848,
                        "pid": 261,
                        "name": "虢亭区",
                        "level": 3
                    },
                    {
                        "id": 2849,
                        "pid": 261,
                        "name": "西陵区",
                        "level": 3
                    },
                    {
                        "id": 2850,
                        "pid": 261,
                        "name": "远安县",
                        "level": 3
                    },
                    {
                        "id": 2851,
                        "pid": 261,
                        "name": "长阳土家族自治县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 262,
                "pid": 17,
                "name": "襄樊市",
                "level": 2,
                "children2": [
                    {
                        "id": 2852,
                        "pid": 262,
                        "name": "保康县",
                        "level": 3
                    },
                    {
                        "id": 2853,
                        "pid": 262,
                        "name": "南漳县",
                        "level": 3
                    },
                    {
                        "id": 2854,
                        "pid": 262,
                        "name": "宜城市",
                        "level": 3
                    },
                    {
                        "id": 2855,
                        "pid": 262,
                        "name": "枣阳市",
                        "level": 3
                    },
                    {
                        "id": 2856,
                        "pid": 262,
                        "name": "樊城区",
                        "level": 3
                    },
                    {
                        "id": 2857,
                        "pid": 262,
                        "name": "老河口市",
                        "level": 3
                    },
                    {
                        "id": 2858,
                        "pid": 262,
                        "name": "襄城区",
                        "level": 3
                    },
                    {
                        "id": 2859,
                        "pid": 262,
                        "name": "襄阳区",
                        "level": 3
                    },
                    {
                        "id": 2860,
                        "pid": 262,
                        "name": "谷城县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 263,
                "pid": 17,
                "name": "鄂州市",
                "level": 2,
                "children2": [
                    {
                        "id": 2861,
                        "pid": 263,
                        "name": "华容区",
                        "level": 3
                    },
                    {
                        "id": 2862,
                        "pid": 263,
                        "name": "粱子湖",
                        "level": 3
                    },
                    {
                        "id": 2863,
                        "pid": 263,
                        "name": "鄂城区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 264,
                "pid": 17,
                "name": "荆门市",
                "level": 2,
                "children2": [
                    {
                        "id": 2864,
                        "pid": 264,
                        "name": "东宝区",
                        "level": 3
                    },
                    {
                        "id": 2865,
                        "pid": 264,
                        "name": "京山县",
                        "level": 3
                    },
                    {
                        "id": 2866,
                        "pid": 264,
                        "name": "掇刀区",
                        "level": 3
                    },
                    {
                        "id": 2867,
                        "pid": 264,
                        "name": "沙洋县",
                        "level": 3
                    },
                    {
                        "id": 2868,
                        "pid": 264,
                        "name": "钟祥市",
                        "level": 3
                    }
                ]
            },
            {
                "id": 265,
                "pid": 17,
                "name": "孝感市",
                "level": 2,
                "children2": [
                    {
                        "id": 2869,
                        "pid": 265,
                        "name": "云梦县",
                        "level": 3
                    },
                    {
                        "id": 2870,
                        "pid": 265,
                        "name": "大悟县",
                        "level": 3
                    },
                    {
                        "id": 2871,
                        "pid": 265,
                        "name": "孝南区",
                        "level": 3
                    },
                    {
                        "id": 2872,
                        "pid": 265,
                        "name": "孝昌县",
                        "level": 3
                    },
                    {
                        "id": 2873,
                        "pid": 265,
                        "name": "安陆市",
                        "level": 3
                    },
                    {
                        "id": 2874,
                        "pid": 265,
                        "name": "应城市",
                        "level": 3
                    },
                    {
                        "id": 2875,
                        "pid": 265,
                        "name": "汉川市",
                        "level": 3
                    }
                ]
            },
            {
                "id": 266,
                "pid": 17,
                "name": "荆州市",
                "level": 2,
                "children2": [
                    {
                        "id": 2876,
                        "pid": 266,
                        "name": "公安县",
                        "level": 3
                    },
                    {
                        "id": 2877,
                        "pid": 266,
                        "name": "松滋市",
                        "level": 3
                    },
                    {
                        "id": 2878,
                        "pid": 266,
                        "name": "江陵县",
                        "level": 3
                    },
                    {
                        "id": 2879,
                        "pid": 266,
                        "name": "沙市区",
                        "level": 3
                    },
                    {
                        "id": 2880,
                        "pid": 266,
                        "name": "洪湖市",
                        "level": 3
                    },
                    {
                        "id": 2881,
                        "pid": 266,
                        "name": "监利县",
                        "level": 3
                    },
                    {
                        "id": 2882,
                        "pid": 266,
                        "name": "石首市",
                        "level": 3
                    },
                    {
                        "id": 2883,
                        "pid": 266,
                        "name": "荆州区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 267,
                "pid": 17,
                "name": "黄冈市",
                "level": 2,
                "children2": [
                    {
                        "id": 2884,
                        "pid": 267,
                        "name": "团风县",
                        "level": 3
                    },
                    {
                        "id": 2885,
                        "pid": 267,
                        "name": "武穴市",
                        "level": 3
                    },
                    {
                        "id": 2886,
                        "pid": 267,
                        "name": "浠水县",
                        "level": 3
                    },
                    {
                        "id": 2887,
                        "pid": 267,
                        "name": "红安县",
                        "level": 3
                    },
                    {
                        "id": 2888,
                        "pid": 267,
                        "name": "罗田县",
                        "level": 3
                    },
                    {
                        "id": 2889,
                        "pid": 267,
                        "name": "英山县",
                        "level": 3
                    },
                    {
                        "id": 2890,
                        "pid": 267,
                        "name": "蕲春县",
                        "level": 3
                    },
                    {
                        "id": 2891,
                        "pid": 267,
                        "name": "麻城市",
                        "level": 3
                    },
                    {
                        "id": 2892,
                        "pid": 267,
                        "name": "黄州区",
                        "level": 3
                    },
                    {
                        "id": 2893,
                        "pid": 267,
                        "name": "黄梅县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 268,
                "pid": 17,
                "name": "咸宁市",
                "level": 2,
                "children2": [
                    {
                        "id": 2894,
                        "pid": 268,
                        "name": "咸安区",
                        "level": 3
                    },
                    {
                        "id": 2895,
                        "pid": 268,
                        "name": "嘉鱼县",
                        "level": 3
                    },
                    {
                        "id": 2896,
                        "pid": 268,
                        "name": "崇阳县",
                        "level": 3
                    },
                    {
                        "id": 2897,
                        "pid": 268,
                        "name": "赤壁市",
                        "level": 3
                    },
                    {
                        "id": 2898,
                        "pid": 268,
                        "name": "通城县",
                        "level": 3
                    },
                    {
                        "id": 2899,
                        "pid": 268,
                        "name": "通山县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 269,
                "pid": 17,
                "name": "随州市",
                "level": 2,
                "children2": [
                    {
                        "id": 2900,
                        "pid": 269,
                        "name": "广水市",
                        "level": 3
                    },
                    {
                        "id": 2901,
                        "pid": 269,
                        "name": "曾都区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 270,
                "pid": 17,
                "name": "恩施土家族苗族自治州",
                "level": 2,
                "children2": [
                    {
                        "id": 2902,
                        "pid": 270,
                        "name": "利川市",
                        "level": 3
                    },
                    {
                        "id": 2903,
                        "pid": 270,
                        "name": "咸丰县",
                        "level": 3
                    },
                    {
                        "id": 2904,
                        "pid": 270,
                        "name": "宣恩县",
                        "level": 3
                    },
                    {
                        "id": 2905,
                        "pid": 270,
                        "name": "巴东县",
                        "level": 3
                    },
                    {
                        "id": 2906,
                        "pid": 270,
                        "name": "建始县",
                        "level": 3
                    },
                    {
                        "id": 2907,
                        "pid": 270,
                        "name": "恩施市",
                        "level": 3
                    },
                    {
                        "id": 2908,
                        "pid": 270,
                        "name": "来凤县",
                        "level": 3
                    },
                    {
                        "id": 2909,
                        "pid": 270,
                        "name": "鹤峰县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 271,
                "pid": 17,
                "name": "仙桃市",
                "level": 2,
                "children2": [
                    {
                        "id": 2910,
                        "pid": 271,
                        "name": "仙桃市",
                        "level": 3
                    }
                ]
            },
            {
                "id": 272,
                "pid": 17,
                "name": "潜江市",
                "level": 2,
                "children2": [
                    {
                        "id": 2911,
                        "pid": 272,
                        "name": "潜江市",
                        "level": 3
                    }
                ]
            },
            {
                "id": 273,
                "pid": 17,
                "name": "天门市",
                "level": 2,
                "children2": [
                    {
                        "id": 2912,
                        "pid": 273,
                        "name": "天门市",
                        "level": 3
                    }
                ]
            },
            {
                "id": 274,
                "pid": 17,
                "name": "神农架林区",
                "level": 2,
                "children2": [
                    {
                        "id": 2913,
                        "pid": 274,
                        "name": "神农架林区",
                        "level": 3
                    }
                ]
            }
        ]
    },
    {
        "id": 18,
        "pid": 0,
        "name": "湖南省",
        "level": 1,
        "children": [
            {
                "id": 275,
                "pid": 18,
                "name": "长沙市",
                "level": 2,
                "children2": [
                    {
                        "id": 2914,
                        "pid": 275,
                        "name": "天心区",
                        "level": 3
                    },
                    {
                        "id": 2915,
                        "pid": 275,
                        "name": "宁乡县",
                        "level": 3
                    },
                    {
                        "id": 2916,
                        "pid": 275,
                        "name": "岳麓区",
                        "level": 3
                    },
                    {
                        "id": 2917,
                        "pid": 275,
                        "name": "开福区",
                        "level": 3
                    },
                    {
                        "id": 2918,
                        "pid": 275,
                        "name": "望城县",
                        "level": 3
                    },
                    {
                        "id": 2919,
                        "pid": 275,
                        "name": "浏阳市",
                        "level": 3
                    },
                    {
                        "id": 2920,
                        "pid": 275,
                        "name": "芙蓉区",
                        "level": 3
                    },
                    {
                        "id": 2921,
                        "pid": 275,
                        "name": "长沙县",
                        "level": 3
                    },
                    {
                        "id": 2922,
                        "pid": 275,
                        "name": "雨花区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 276,
                "pid": 18,
                "name": "株洲市",
                "level": 2,
                "children2": [
                    {
                        "id": 2923,
                        "pid": 276,
                        "name": "天元区",
                        "level": 3
                    },
                    {
                        "id": 2924,
                        "pid": 276,
                        "name": "攸县",
                        "level": 3
                    },
                    {
                        "id": 2925,
                        "pid": 276,
                        "name": "株洲县",
                        "level": 3
                    },
                    {
                        "id": 2926,
                        "pid": 276,
                        "name": "炎陵县",
                        "level": 3
                    },
                    {
                        "id": 2927,
                        "pid": 276,
                        "name": "石峰区",
                        "level": 3
                    },
                    {
                        "id": 2928,
                        "pid": 276,
                        "name": "芦淞区",
                        "level": 3
                    },
                    {
                        "id": 2929,
                        "pid": 276,
                        "name": "茶陵县",
                        "level": 3
                    },
                    {
                        "id": 2930,
                        "pid": 276,
                        "name": "荷塘区",
                        "level": 3
                    },
                    {
                        "id": 2931,
                        "pid": 276,
                        "name": "醴陵市",
                        "level": 3
                    }
                ]
            },
            {
                "id": 277,
                "pid": 18,
                "name": "湘潭市",
                "level": 2,
                "children2": [
                    {
                        "id": 2932,
                        "pid": 277,
                        "name": "岳塘区",
                        "level": 3
                    },
                    {
                        "id": 2933,
                        "pid": 277,
                        "name": "湘乡市",
                        "level": 3
                    },
                    {
                        "id": 2934,
                        "pid": 277,
                        "name": "湘潭县",
                        "level": 3
                    },
                    {
                        "id": 2935,
                        "pid": 277,
                        "name": "雨湖区",
                        "level": 3
                    },
                    {
                        "id": 2936,
                        "pid": 277,
                        "name": "韶山市",
                        "level": 3
                    }
                ]
            },
            {
                "id": 278,
                "pid": 18,
                "name": "衡阳市",
                "level": 2,
                "children2": [
                    {
                        "id": 2937,
                        "pid": 278,
                        "name": "南岳区",
                        "level": 3
                    },
                    {
                        "id": 2938,
                        "pid": 278,
                        "name": "常宁市",
                        "level": 3
                    },
                    {
                        "id": 2939,
                        "pid": 278,
                        "name": "珠晖区",
                        "level": 3
                    },
                    {
                        "id": 2940,
                        "pid": 278,
                        "name": "石鼓区",
                        "level": 3
                    },
                    {
                        "id": 2941,
                        "pid": 278,
                        "name": "祁东县",
                        "level": 3
                    },
                    {
                        "id": 2942,
                        "pid": 278,
                        "name": "耒阳市",
                        "level": 3
                    },
                    {
                        "id": 2943,
                        "pid": 278,
                        "name": "蒸湘区",
                        "level": 3
                    },
                    {
                        "id": 2944,
                        "pid": 278,
                        "name": "衡东县",
                        "level": 3
                    },
                    {
                        "id": 2945,
                        "pid": 278,
                        "name": "衡南县",
                        "level": 3
                    },
                    {
                        "id": 2946,
                        "pid": 278,
                        "name": "衡山县",
                        "level": 3
                    },
                    {
                        "id": 2947,
                        "pid": 278,
                        "name": "衡阳县",
                        "level": 3
                    },
                    {
                        "id": 2948,
                        "pid": 278,
                        "name": "雁峰区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 279,
                "pid": 18,
                "name": "邵阳市",
                "level": 2,
                "children2": [
                    {
                        "id": 2949,
                        "pid": 279,
                        "name": "北塔区",
                        "level": 3
                    },
                    {
                        "id": 2950,
                        "pid": 279,
                        "name": "双清区",
                        "level": 3
                    },
                    {
                        "id": 2951,
                        "pid": 279,
                        "name": "城步苗族自治县",
                        "level": 3
                    },
                    {
                        "id": 2952,
                        "pid": 279,
                        "name": "大祥区",
                        "level": 3
                    },
                    {
                        "id": 2953,
                        "pid": 279,
                        "name": "新宁县",
                        "level": 3
                    },
                    {
                        "id": 2954,
                        "pid": 279,
                        "name": "新邵县",
                        "level": 3
                    },
                    {
                        "id": 2955,
                        "pid": 279,
                        "name": "武冈市",
                        "level": 3
                    },
                    {
                        "id": 2956,
                        "pid": 279,
                        "name": "洞口县",
                        "level": 3
                    },
                    {
                        "id": 2957,
                        "pid": 279,
                        "name": "绥宁县",
                        "level": 3
                    },
                    {
                        "id": 2958,
                        "pid": 279,
                        "name": "邵东县",
                        "level": 3
                    },
                    {
                        "id": 2959,
                        "pid": 279,
                        "name": "邵阳县",
                        "level": 3
                    },
                    {
                        "id": 2960,
                        "pid": 279,
                        "name": "隆回县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 280,
                "pid": 18,
                "name": "岳阳市",
                "level": 2,
                "children2": [
                    {
                        "id": 2961,
                        "pid": 280,
                        "name": "临湘市",
                        "level": 3
                    },
                    {
                        "id": 2962,
                        "pid": 280,
                        "name": "云溪区",
                        "level": 3
                    },
                    {
                        "id": 2963,
                        "pid": 280,
                        "name": "华容县",
                        "level": 3
                    },
                    {
                        "id": 2964,
                        "pid": 280,
                        "name": "君山区",
                        "level": 3
                    },
                    {
                        "id": 2965,
                        "pid": 280,
                        "name": "岳阳县",
                        "level": 3
                    },
                    {
                        "id": 2966,
                        "pid": 280,
                        "name": "岳阳楼区",
                        "level": 3
                    },
                    {
                        "id": 2967,
                        "pid": 280,
                        "name": "平江县",
                        "level": 3
                    },
                    {
                        "id": 2968,
                        "pid": 280,
                        "name": "汨罗市",
                        "level": 3
                    },
                    {
                        "id": 2969,
                        "pid": 280,
                        "name": "湘阴县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 281,
                "pid": 18,
                "name": "常德市",
                "level": 2,
                "children2": [
                    {
                        "id": 2970,
                        "pid": 281,
                        "name": "临澧县",
                        "level": 3
                    },
                    {
                        "id": 2971,
                        "pid": 281,
                        "name": "安乡县",
                        "level": 3
                    },
                    {
                        "id": 2972,
                        "pid": 281,
                        "name": "桃源县",
                        "level": 3
                    },
                    {
                        "id": 2973,
                        "pid": 281,
                        "name": "武陵区",
                        "level": 3
                    },
                    {
                        "id": 2974,
                        "pid": 281,
                        "name": "汉寿县",
                        "level": 3
                    },
                    {
                        "id": 2975,
                        "pid": 281,
                        "name": "津市市",
                        "level": 3
                    },
                    {
                        "id": 2976,
                        "pid": 281,
                        "name": "澧县",
                        "level": 3
                    },
                    {
                        "id": 2977,
                        "pid": 281,
                        "name": "石门县",
                        "level": 3
                    },
                    {
                        "id": 2978,
                        "pid": 281,
                        "name": "鼎城区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 282,
                "pid": 18,
                "name": "张家界市",
                "level": 2,
                "children2": [
                    {
                        "id": 2979,
                        "pid": 282,
                        "name": "慈利县",
                        "level": 3
                    },
                    {
                        "id": 2980,
                        "pid": 282,
                        "name": "桑植县",
                        "level": 3
                    },
                    {
                        "id": 2981,
                        "pid": 282,
                        "name": "武陵源区",
                        "level": 3
                    },
                    {
                        "id": 2982,
                        "pid": 282,
                        "name": "永定区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 283,
                "pid": 18,
                "name": "益阳市",
                "level": 2,
                "children2": [
                    {
                        "id": 2983,
                        "pid": 283,
                        "name": "南县",
                        "level": 3
                    },
                    {
                        "id": 2984,
                        "pid": 283,
                        "name": "安化县",
                        "level": 3
                    },
                    {
                        "id": 2985,
                        "pid": 283,
                        "name": "桃江县",
                        "level": 3
                    },
                    {
                        "id": 2986,
                        "pid": 283,
                        "name": "沅江市",
                        "level": 3
                    },
                    {
                        "id": 2987,
                        "pid": 283,
                        "name": "资阳区",
                        "level": 3
                    },
                    {
                        "id": 2988,
                        "pid": 283,
                        "name": "赫山区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 284,
                "pid": 18,
                "name": "郴州市",
                "level": 2,
                "children2": [
                    {
                        "id": 2989,
                        "pid": 284,
                        "name": "临武县",
                        "level": 3
                    },
                    {
                        "id": 2990,
                        "pid": 284,
                        "name": "北湖区",
                        "level": 3
                    },
                    {
                        "id": 2991,
                        "pid": 284,
                        "name": "嘉禾县",
                        "level": 3
                    },
                    {
                        "id": 2992,
                        "pid": 284,
                        "name": "安仁县",
                        "level": 3
                    },
                    {
                        "id": 2993,
                        "pid": 284,
                        "name": "宜章县",
                        "level": 3
                    },
                    {
                        "id": 2994,
                        "pid": 284,
                        "name": "桂东县",
                        "level": 3
                    },
                    {
                        "id": 2995,
                        "pid": 284,
                        "name": "桂阳县",
                        "level": 3
                    },
                    {
                        "id": 2996,
                        "pid": 284,
                        "name": "永兴县",
                        "level": 3
                    },
                    {
                        "id": 2997,
                        "pid": 284,
                        "name": "汝城县",
                        "level": 3
                    },
                    {
                        "id": 2998,
                        "pid": 284,
                        "name": "苏仙区",
                        "level": 3
                    },
                    {
                        "id": 2999,
                        "pid": 284,
                        "name": "资兴市",
                        "level": 3
                    }
                ]
            },
            {
                "id": 285,
                "pid": 18,
                "name": "永州市",
                "level": 2,
                "children2": [
                    {
                        "id": 3000,
                        "pid": 285,
                        "name": "东安县",
                        "level": 3
                    },
                    {
                        "id": 3001,
                        "pid": 285,
                        "name": "冷水滩区",
                        "level": 3
                    },
                    {
                        "id": 3002,
                        "pid": 285,
                        "name": "双牌县",
                        "level": 3
                    },
                    {
                        "id": 3003,
                        "pid": 285,
                        "name": "宁远县",
                        "level": 3
                    },
                    {
                        "id": 3004,
                        "pid": 285,
                        "name": "新田县",
                        "level": 3
                    },
                    {
                        "id": 3005,
                        "pid": 285,
                        "name": "江华瑶族自治县",
                        "level": 3
                    },
                    {
                        "id": 3006,
                        "pid": 285,
                        "name": "江永县",
                        "level": 3
                    },
                    {
                        "id": 3007,
                        "pid": 285,
                        "name": "祁阳县",
                        "level": 3
                    },
                    {
                        "id": 3008,
                        "pid": 285,
                        "name": "蓝山县",
                        "level": 3
                    },
                    {
                        "id": 3009,
                        "pid": 285,
                        "name": "道县",
                        "level": 3
                    },
                    {
                        "id": 3010,
                        "pid": 285,
                        "name": "零陵区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 286,
                "pid": 18,
                "name": "怀化市",
                "level": 2,
                "children2": [
                    {
                        "id": 3011,
                        "pid": 286,
                        "name": "中方县",
                        "level": 3
                    },
                    {
                        "id": 3012,
                        "pid": 286,
                        "name": "会同县",
                        "level": 3
                    },
                    {
                        "id": 3013,
                        "pid": 286,
                        "name": "新晃侗族自治县",
                        "level": 3
                    },
                    {
                        "id": 3014,
                        "pid": 286,
                        "name": "沅陵县",
                        "level": 3
                    },
                    {
                        "id": 3015,
                        "pid": 286,
                        "name": "洪江市/洪江区",
                        "level": 3
                    },
                    {
                        "id": 3016,
                        "pid": 286,
                        "name": "溆浦县",
                        "level": 3
                    },
                    {
                        "id": 3017,
                        "pid": 286,
                        "name": "芷江侗族自治县",
                        "level": 3
                    },
                    {
                        "id": 3018,
                        "pid": 286,
                        "name": "辰溪县",
                        "level": 3
                    },
                    {
                        "id": 3019,
                        "pid": 286,
                        "name": "通道侗族自治县",
                        "level": 3
                    },
                    {
                        "id": 3020,
                        "pid": 286,
                        "name": "靖州苗族侗族自治县",
                        "level": 3
                    },
                    {
                        "id": 3021,
                        "pid": 286,
                        "name": "鹤城区",
                        "level": 3
                    },
                    {
                        "id": 3022,
                        "pid": 286,
                        "name": "麻阳苗族自治县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 287,
                "pid": 18,
                "name": "娄底市",
                "level": 2,
                "children2": [
                    {
                        "id": 3023,
                        "pid": 287,
                        "name": "冷水江市",
                        "level": 3
                    },
                    {
                        "id": 3024,
                        "pid": 287,
                        "name": "双峰县",
                        "level": 3
                    },
                    {
                        "id": 3025,
                        "pid": 287,
                        "name": "娄星区",
                        "level": 3
                    },
                    {
                        "id": 3026,
                        "pid": 287,
                        "name": "新化县",
                        "level": 3
                    },
                    {
                        "id": 3027,
                        "pid": 287,
                        "name": "涟源市",
                        "level": 3
                    }
                ]
            },
            {
                "id": 288,
                "pid": 18,
                "name": "湘西土家族苗族自治州",
                "level": 2,
                "children2": [
                    {
                        "id": 3028,
                        "pid": 288,
                        "name": "保靖县",
                        "level": 3
                    },
                    {
                        "id": 3029,
                        "pid": 288,
                        "name": "凤凰县",
                        "level": 3
                    },
                    {
                        "id": 3030,
                        "pid": 288,
                        "name": "古丈县",
                        "level": 3
                    },
                    {
                        "id": 3031,
                        "pid": 288,
                        "name": "吉首市",
                        "level": 3
                    },
                    {
                        "id": 3032,
                        "pid": 288,
                        "name": "永顺县",
                        "level": 3
                    },
                    {
                        "id": 3033,
                        "pid": 288,
                        "name": "泸溪县",
                        "level": 3
                    },
                    {
                        "id": 3034,
                        "pid": 288,
                        "name": "花垣县",
                        "level": 3
                    },
                    {
                        "id": 3035,
                        "pid": 288,
                        "name": "龙山县",
                        "level": 3
                    }
                ]
            }
        ]
    },
    {
        "id": 19,
        "pid": 0,
        "name": "广东省",
        "level": 1,
        "children": [
            {
                "id": 289,
                "pid": 19,
                "name": "广州市",
                "level": 2,
                "children2": [
                    {
                        "id": 3036,
                        "pid": 289,
                        "name": "萝岗区",
                        "level": 3
                    },
                    {
                        "id": 3037,
                        "pid": 289,
                        "name": "南沙区",
                        "level": 3
                    },
                    {
                        "id": 3038,
                        "pid": 289,
                        "name": "从化市",
                        "level": 3
                    },
                    {
                        "id": 3039,
                        "pid": 289,
                        "name": "增城市",
                        "level": 3
                    },
                    {
                        "id": 3040,
                        "pid": 289,
                        "name": "天河区",
                        "level": 3
                    },
                    {
                        "id": 3041,
                        "pid": 289,
                        "name": "海珠区",
                        "level": 3
                    },
                    {
                        "id": 3042,
                        "pid": 289,
                        "name": "番禺区",
                        "level": 3
                    },
                    {
                        "id": 3043,
                        "pid": 289,
                        "name": "白云区",
                        "level": 3
                    },
                    {
                        "id": 3044,
                        "pid": 289,
                        "name": "花都区",
                        "level": 3
                    },
                    {
                        "id": 3045,
                        "pid": 289,
                        "name": "荔湾区",
                        "level": 3
                    },
                    {
                        "id": 3046,
                        "pid": 289,
                        "name": "越秀区",
                        "level": 3
                    },
                    {
                        "id": 3047,
                        "pid": 289,
                        "name": "黄埔区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 290,
                "pid": 19,
                "name": "韶关市",
                "level": 2,
                "children2": [
                    {
                        "id": 3048,
                        "pid": 290,
                        "name": "乐昌市",
                        "level": 3
                    },
                    {
                        "id": 3049,
                        "pid": 290,
                        "name": "乳源瑶族自治县",
                        "level": 3
                    },
                    {
                        "id": 3050,
                        "pid": 290,
                        "name": "仁化县",
                        "level": 3
                    },
                    {
                        "id": 3051,
                        "pid": 290,
                        "name": "南雄市",
                        "level": 3
                    },
                    {
                        "id": 3052,
                        "pid": 290,
                        "name": "始兴县",
                        "level": 3
                    },
                    {
                        "id": 3053,
                        "pid": 290,
                        "name": "新丰县",
                        "level": 3
                    },
                    {
                        "id": 3054,
                        "pid": 290,
                        "name": "曲江区",
                        "level": 3
                    },
                    {
                        "id": 3055,
                        "pid": 290,
                        "name": "武江区",
                        "level": 3
                    },
                    {
                        "id": 3056,
                        "pid": 290,
                        "name": "浈江区",
                        "level": 3
                    },
                    {
                        "id": 3057,
                        "pid": 290,
                        "name": "翁源县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 291,
                "pid": 19,
                "name": "深圳市",
                "level": 2,
                "children2": [
                    {
                        "id": 3058,
                        "pid": 291,
                        "name": "南山区",
                        "level": 3
                    },
                    {
                        "id": 3059,
                        "pid": 291,
                        "name": "宝安区",
                        "level": 3
                    },
                    {
                        "id": 3060,
                        "pid": 291,
                        "name": "盐田区",
                        "level": 3
                    },
                    {
                        "id": 3061,
                        "pid": 291,
                        "name": "福田区",
                        "level": 3
                    },
                    {
                        "id": 3062,
                        "pid": 291,
                        "name": "罗湖区",
                        "level": 3
                    },
                    {
                        "id": 3063,
                        "pid": 291,
                        "name": "龙岗区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 292,
                "pid": 19,
                "name": "珠海市",
                "level": 2,
                "children2": [
                    {
                        "id": 3064,
                        "pid": 292,
                        "name": "斗门区",
                        "level": 3
                    },
                    {
                        "id": 3065,
                        "pid": 292,
                        "name": "金湾区",
                        "level": 3
                    },
                    {
                        "id": 3066,
                        "pid": 292,
                        "name": "香洲区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 293,
                "pid": 19,
                "name": "汕头市",
                "level": 2,
                "children2": [
                    {
                        "id": 3067,
                        "pid": 293,
                        "name": "南澳县",
                        "level": 3
                    },
                    {
                        "id": 3068,
                        "pid": 293,
                        "name": "潮南区",
                        "level": 3
                    },
                    {
                        "id": 3069,
                        "pid": 293,
                        "name": "潮阳区",
                        "level": 3
                    },
                    {
                        "id": 3070,
                        "pid": 293,
                        "name": "澄海区",
                        "level": 3
                    },
                    {
                        "id": 3071,
                        "pid": 293,
                        "name": "濠江区",
                        "level": 3
                    },
                    {
                        "id": 3072,
                        "pid": 293,
                        "name": "金平区",
                        "level": 3
                    },
                    {
                        "id": 3073,
                        "pid": 293,
                        "name": "龙湖区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 294,
                "pid": 19,
                "name": "佛山市",
                "level": 2,
                "children2": [
                    {
                        "id": 3074,
                        "pid": 294,
                        "name": "三水区",
                        "level": 3
                    },
                    {
                        "id": 3075,
                        "pid": 294,
                        "name": "南海区",
                        "level": 3
                    },
                    {
                        "id": 3076,
                        "pid": 294,
                        "name": "禅城区",
                        "level": 3
                    },
                    {
                        "id": 3077,
                        "pid": 294,
                        "name": "顺德区",
                        "level": 3
                    },
                    {
                        "id": 3078,
                        "pid": 294,
                        "name": "高明区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 295,
                "pid": 19,
                "name": "江门市",
                "level": 2,
                "children2": [
                    {
                        "id": 3079,
                        "pid": 295,
                        "name": "台山市",
                        "level": 3
                    },
                    {
                        "id": 3080,
                        "pid": 295,
                        "name": "开平市",
                        "level": 3
                    },
                    {
                        "id": 3081,
                        "pid": 295,
                        "name": "恩平市",
                        "level": 3
                    },
                    {
                        "id": 3082,
                        "pid": 295,
                        "name": "新会区",
                        "level": 3
                    },
                    {
                        "id": 3083,
                        "pid": 295,
                        "name": "江海区",
                        "level": 3
                    },
                    {
                        "id": 3084,
                        "pid": 295,
                        "name": "蓬江区",
                        "level": 3
                    },
                    {
                        "id": 3085,
                        "pid": 295,
                        "name": "鹤山市",
                        "level": 3
                    }
                ]
            },
            {
                "id": 296,
                "pid": 19,
                "name": "湛江市",
                "level": 2,
                "children2": [
                    {
                        "id": 3086,
                        "pid": 296,
                        "name": "吴川市",
                        "level": 3
                    },
                    {
                        "id": 3087,
                        "pid": 296,
                        "name": "坡头区",
                        "level": 3
                    },
                    {
                        "id": 3088,
                        "pid": 296,
                        "name": "廉江市",
                        "level": 3
                    },
                    {
                        "id": 3089,
                        "pid": 296,
                        "name": "徐闻县",
                        "level": 3
                    },
                    {
                        "id": 3090,
                        "pid": 296,
                        "name": "赤坎区",
                        "level": 3
                    },
                    {
                        "id": 3091,
                        "pid": 296,
                        "name": "遂溪县",
                        "level": 3
                    },
                    {
                        "id": 3092,
                        "pid": 296,
                        "name": "雷州市",
                        "level": 3
                    },
                    {
                        "id": 3093,
                        "pid": 296,
                        "name": "霞山区",
                        "level": 3
                    },
                    {
                        "id": 3094,
                        "pid": 296,
                        "name": "麻章区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 297,
                "pid": 19,
                "name": "茂名市",
                "level": 2,
                "children2": [
                    {
                        "id": 3095,
                        "pid": 297,
                        "name": "信宜市",
                        "level": 3
                    },
                    {
                        "id": 3096,
                        "pid": 297,
                        "name": "化州市",
                        "level": 3
                    },
                    {
                        "id": 3097,
                        "pid": 297,
                        "name": "电白县",
                        "level": 3
                    },
                    {
                        "id": 3098,
                        "pid": 297,
                        "name": "茂南区",
                        "level": 3
                    },
                    {
                        "id": 3099,
                        "pid": 297,
                        "name": "茂港区",
                        "level": 3
                    },
                    {
                        "id": 3100,
                        "pid": 297,
                        "name": "高州市",
                        "level": 3
                    }
                ]
            },
            {
                "id": 298,
                "pid": 19,
                "name": "肇庆市",
                "level": 2,
                "children2": [
                    {
                        "id": 3101,
                        "pid": 298,
                        "name": "四会市",
                        "level": 3
                    },
                    {
                        "id": 3102,
                        "pid": 298,
                        "name": "封开县",
                        "level": 3
                    },
                    {
                        "id": 3103,
                        "pid": 298,
                        "name": "广宁县",
                        "level": 3
                    },
                    {
                        "id": 3104,
                        "pid": 298,
                        "name": "德庆县",
                        "level": 3
                    },
                    {
                        "id": 3105,
                        "pid": 298,
                        "name": "怀集县",
                        "level": 3
                    },
                    {
                        "id": 3106,
                        "pid": 298,
                        "name": "端州区",
                        "level": 3
                    },
                    {
                        "id": 3107,
                        "pid": 298,
                        "name": "高要市",
                        "level": 3
                    },
                    {
                        "id": 3108,
                        "pid": 298,
                        "name": "鼎湖区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 299,
                "pid": 19,
                "name": "惠州市",
                "level": 2,
                "children2": [
                    {
                        "id": 3109,
                        "pid": 299,
                        "name": "博罗县",
                        "level": 3
                    },
                    {
                        "id": 3110,
                        "pid": 299,
                        "name": "惠东县",
                        "level": 3
                    },
                    {
                        "id": 3111,
                        "pid": 299,
                        "name": "惠城区",
                        "level": 3
                    },
                    {
                        "id": 3112,
                        "pid": 299,
                        "name": "惠阳区",
                        "level": 3
                    },
                    {
                        "id": 3113,
                        "pid": 299,
                        "name": "龙门县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 300,
                "pid": 19,
                "name": "梅州市",
                "level": 2,
                "children2": [
                    {
                        "id": 3114,
                        "pid": 300,
                        "name": "丰顺县",
                        "level": 3
                    },
                    {
                        "id": 3115,
                        "pid": 300,
                        "name": "五华县",
                        "level": 3
                    },
                    {
                        "id": 3116,
                        "pid": 300,
                        "name": "兴宁市",
                        "level": 3
                    },
                    {
                        "id": 3117,
                        "pid": 300,
                        "name": "大埔县",
                        "level": 3
                    },
                    {
                        "id": 3118,
                        "pid": 300,
                        "name": "平远县",
                        "level": 3
                    },
                    {
                        "id": 3119,
                        "pid": 300,
                        "name": "梅县",
                        "level": 3
                    },
                    {
                        "id": 3120,
                        "pid": 300,
                        "name": "梅江区",
                        "level": 3
                    },
                    {
                        "id": 3121,
                        "pid": 300,
                        "name": "蕉岭县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 301,
                "pid": 19,
                "name": "汕尾市",
                "level": 2,
                "children2": [
                    {
                        "id": 3122,
                        "pid": 301,
                        "name": "城区",
                        "level": 3
                    },
                    {
                        "id": 3123,
                        "pid": 301,
                        "name": "海丰县",
                        "level": 3
                    },
                    {
                        "id": 3124,
                        "pid": 301,
                        "name": "陆丰市",
                        "level": 3
                    },
                    {
                        "id": 3125,
                        "pid": 301,
                        "name": "陆河县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 302,
                "pid": 19,
                "name": "河源市",
                "level": 2,
                "children2": [
                    {
                        "id": 3126,
                        "pid": 302,
                        "name": "东源县",
                        "level": 3
                    },
                    {
                        "id": 3127,
                        "pid": 302,
                        "name": "和平县",
                        "level": 3
                    },
                    {
                        "id": 3128,
                        "pid": 302,
                        "name": "源城区",
                        "level": 3
                    },
                    {
                        "id": 3129,
                        "pid": 302,
                        "name": "紫金县",
                        "level": 3
                    },
                    {
                        "id": 3130,
                        "pid": 302,
                        "name": "连平县",
                        "level": 3
                    },
                    {
                        "id": 3131,
                        "pid": 302,
                        "name": "龙川县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 303,
                "pid": 19,
                "name": "阳江市",
                "level": 2,
                "children2": [
                    {
                        "id": 3132,
                        "pid": 303,
                        "name": "江城区",
                        "level": 3
                    },
                    {
                        "id": 3133,
                        "pid": 303,
                        "name": "阳东县",
                        "level": 3
                    },
                    {
                        "id": 3134,
                        "pid": 303,
                        "name": "阳春市",
                        "level": 3
                    },
                    {
                        "id": 3135,
                        "pid": 303,
                        "name": "阳西县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 304,
                "pid": 19,
                "name": "清远市",
                "level": 2,
                "children2": [
                    {
                        "id": 3136,
                        "pid": 304,
                        "name": "佛冈县",
                        "level": 3
                    },
                    {
                        "id": 3137,
                        "pid": 304,
                        "name": "清城区",
                        "level": 3
                    },
                    {
                        "id": 3138,
                        "pid": 304,
                        "name": "清新县",
                        "level": 3
                    },
                    {
                        "id": 3139,
                        "pid": 304,
                        "name": "英德市",
                        "level": 3
                    },
                    {
                        "id": 3140,
                        "pid": 304,
                        "name": "连南瑶族自治县",
                        "level": 3
                    },
                    {
                        "id": 3141,
                        "pid": 304,
                        "name": "连山壮族瑶族自治县",
                        "level": 3
                    },
                    {
                        "id": 3142,
                        "pid": 304,
                        "name": "连州市",
                        "level": 3
                    },
                    {
                        "id": 3143,
                        "pid": 304,
                        "name": "阳山县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 305,
                "pid": 19,
                "name": "东莞市",
                "level": 2,
                "children2": [
                    {
                        "id": 3144,
                        "pid": 305,
                        "name": "东莞市",
                        "level": 3
                    }
                ]
            },
            {
                "id": 306,
                "pid": 19,
                "name": "中山市",
                "level": 2,
                "children2": [
                    {
                        "id": 3145,
                        "pid": 306,
                        "name": "中山市",
                        "level": 3
                    }
                ]
            },
            {
                "id": 307,
                "pid": 19,
                "name": "潮州市",
                "level": 2,
                "children2": [
                    {
                        "id": 3146,
                        "pid": 307,
                        "name": "湘桥区",
                        "level": 3
                    },
                    {
                        "id": 3147,
                        "pid": 307,
                        "name": "潮安县",
                        "level": 3
                    },
                    {
                        "id": 3148,
                        "pid": 307,
                        "name": "饶平县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 308,
                "pid": 19,
                "name": "揭阳市",
                "level": 2,
                "children2": [
                    {
                        "id": 3149,
                        "pid": 308,
                        "name": "惠来县",
                        "level": 3
                    },
                    {
                        "id": 3150,
                        "pid": 308,
                        "name": "揭东县",
                        "level": 3
                    },
                    {
                        "id": 3151,
                        "pid": 308,
                        "name": "揭西县",
                        "level": 3
                    },
                    {
                        "id": 3152,
                        "pid": 308,
                        "name": "普宁市",
                        "level": 3
                    },
                    {
                        "id": 3153,
                        "pid": 308,
                        "name": "榕城区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 309,
                "pid": 19,
                "name": "云浮市",
                "level": 2,
                "children2": [
                    {
                        "id": 3154,
                        "pid": 309,
                        "name": "云城区",
                        "level": 3
                    },
                    {
                        "id": 3155,
                        "pid": 309,
                        "name": "云安县",
                        "level": 3
                    },
                    {
                        "id": 3156,
                        "pid": 309,
                        "name": "新兴县",
                        "level": 3
                    },
                    {
                        "id": 3157,
                        "pid": 309,
                        "name": "罗定市",
                        "level": 3
                    },
                    {
                        "id": 3158,
                        "pid": 309,
                        "name": "郁南县",
                        "level": 3
                    }
                ]
            }
        ]
    },
    {
        "id": 20,
        "pid": 0,
        "name": "广西壮族自治区",
        "level": 1,
        "children": [
            {
                "id": 310,
                "pid": 20,
                "name": "南宁市",
                "level": 2,
                "children2": [
                    {
                        "id": 3159,
                        "pid": 310,
                        "name": "上林县",
                        "level": 3
                    },
                    {
                        "id": 3160,
                        "pid": 310,
                        "name": "兴宁区",
                        "level": 3
                    },
                    {
                        "id": 3161,
                        "pid": 310,
                        "name": "宾阳县",
                        "level": 3
                    },
                    {
                        "id": 3162,
                        "pid": 310,
                        "name": "横县",
                        "level": 3
                    },
                    {
                        "id": 3163,
                        "pid": 310,
                        "name": "武鸣县",
                        "level": 3
                    },
                    {
                        "id": 3164,
                        "pid": 310,
                        "name": "江南区",
                        "level": 3
                    },
                    {
                        "id": 3165,
                        "pid": 310,
                        "name": "良庆区",
                        "level": 3
                    },
                    {
                        "id": 3166,
                        "pid": 310,
                        "name": "西乡塘区",
                        "level": 3
                    },
                    {
                        "id": 3167,
                        "pid": 310,
                        "name": "邕宁区",
                        "level": 3
                    },
                    {
                        "id": 3168,
                        "pid": 310,
                        "name": "隆安县",
                        "level": 3
                    },
                    {
                        "id": 3169,
                        "pid": 310,
                        "name": "青秀区",
                        "level": 3
                    },
                    {
                        "id": 3170,
                        "pid": 310,
                        "name": "马山县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 311,
                "pid": 20,
                "name": "柳州市",
                "level": 2,
                "children2": [
                    {
                        "id": 3171,
                        "pid": 311,
                        "name": "三江侗族自治县",
                        "level": 3
                    },
                    {
                        "id": 3172,
                        "pid": 311,
                        "name": "城中区",
                        "level": 3
                    },
                    {
                        "id": 3173,
                        "pid": 311,
                        "name": "柳北区",
                        "level": 3
                    },
                    {
                        "id": 3174,
                        "pid": 311,
                        "name": "柳南区",
                        "level": 3
                    },
                    {
                        "id": 3175,
                        "pid": 311,
                        "name": "柳城县",
                        "level": 3
                    },
                    {
                        "id": 3176,
                        "pid": 311,
                        "name": "柳江县",
                        "level": 3
                    },
                    {
                        "id": 3177,
                        "pid": 311,
                        "name": "融安县",
                        "level": 3
                    },
                    {
                        "id": 3178,
                        "pid": 311,
                        "name": "融水苗族自治县",
                        "level": 3
                    },
                    {
                        "id": 3179,
                        "pid": 311,
                        "name": "鱼峰区",
                        "level": 3
                    },
                    {
                        "id": 3180,
                        "pid": 311,
                        "name": "鹿寨县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 312,
                "pid": 20,
                "name": "桂林市",
                "level": 2,
                "children2": [
                    {
                        "id": 3181,
                        "pid": 312,
                        "name": "七星区",
                        "level": 3
                    },
                    {
                        "id": 3182,
                        "pid": 312,
                        "name": "临桂县",
                        "level": 3
                    },
                    {
                        "id": 3183,
                        "pid": 312,
                        "name": "全州县",
                        "level": 3
                    },
                    {
                        "id": 3184,
                        "pid": 312,
                        "name": "兴安县",
                        "level": 3
                    },
                    {
                        "id": 3185,
                        "pid": 312,
                        "name": "叠彩区",
                        "level": 3
                    },
                    {
                        "id": 3186,
                        "pid": 312,
                        "name": "平乐县",
                        "level": 3
                    },
                    {
                        "id": 3187,
                        "pid": 312,
                        "name": "恭城瑶族自治县",
                        "level": 3
                    },
                    {
                        "id": 3188,
                        "pid": 312,
                        "name": "永福县",
                        "level": 3
                    },
                    {
                        "id": 3189,
                        "pid": 312,
                        "name": "灌阳县",
                        "level": 3
                    },
                    {
                        "id": 3190,
                        "pid": 312,
                        "name": "灵川县",
                        "level": 3
                    },
                    {
                        "id": 3191,
                        "pid": 312,
                        "name": "秀峰区",
                        "level": 3
                    },
                    {
                        "id": 3192,
                        "pid": 312,
                        "name": "荔浦县",
                        "level": 3
                    },
                    {
                        "id": 3193,
                        "pid": 312,
                        "name": "象山区",
                        "level": 3
                    },
                    {
                        "id": 3194,
                        "pid": 312,
                        "name": "资源县",
                        "level": 3
                    },
                    {
                        "id": 3195,
                        "pid": 312,
                        "name": "阳朔县",
                        "level": 3
                    },
                    {
                        "id": 3196,
                        "pid": 312,
                        "name": "雁山区",
                        "level": 3
                    },
                    {
                        "id": 3197,
                        "pid": 312,
                        "name": "龙胜各族自治县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 313,
                "pid": 20,
                "name": "梧州市",
                "level": 2,
                "children2": [
                    {
                        "id": 3198,
                        "pid": 313,
                        "name": "万秀区",
                        "level": 3
                    },
                    {
                        "id": 3199,
                        "pid": 313,
                        "name": "岑溪市",
                        "level": 3
                    },
                    {
                        "id": 3200,
                        "pid": 313,
                        "name": "苍梧县",
                        "level": 3
                    },
                    {
                        "id": 3201,
                        "pid": 313,
                        "name": "蒙山县",
                        "level": 3
                    },
                    {
                        "id": 3202,
                        "pid": 313,
                        "name": "藤县",
                        "level": 3
                    },
                    {
                        "id": 3203,
                        "pid": 313,
                        "name": "蝶山区",
                        "level": 3
                    },
                    {
                        "id": 3204,
                        "pid": 313,
                        "name": "长洲区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 314,
                "pid": 20,
                "name": "北海市",
                "level": 2,
                "children2": [
                    {
                        "id": 3205,
                        "pid": 314,
                        "name": "合浦县",
                        "level": 3
                    },
                    {
                        "id": 3206,
                        "pid": 314,
                        "name": "海城区",
                        "level": 3
                    },
                    {
                        "id": 3207,
                        "pid": 314,
                        "name": "铁山港区",
                        "level": 3
                    },
                    {
                        "id": 3208,
                        "pid": 314,
                        "name": "银海区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 315,
                "pid": 20,
                "name": "防城港市",
                "level": 2,
                "children2": [
                    {
                        "id": 3209,
                        "pid": 315,
                        "name": "上思县",
                        "level": 3
                    },
                    {
                        "id": 3210,
                        "pid": 315,
                        "name": "东兴市",
                        "level": 3
                    },
                    {
                        "id": 3211,
                        "pid": 315,
                        "name": "港口区",
                        "level": 3
                    },
                    {
                        "id": 3212,
                        "pid": 315,
                        "name": "防城区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 316,
                "pid": 20,
                "name": "钦州市",
                "level": 2,
                "children2": [
                    {
                        "id": 3213,
                        "pid": 316,
                        "name": "浦北县",
                        "level": 3
                    },
                    {
                        "id": 3214,
                        "pid": 316,
                        "name": "灵山县",
                        "level": 3
                    },
                    {
                        "id": 3215,
                        "pid": 316,
                        "name": "钦北区",
                        "level": 3
                    },
                    {
                        "id": 3216,
                        "pid": 316,
                        "name": "钦南区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 317,
                "pid": 20,
                "name": "贵港市",
                "level": 2,
                "children2": [
                    {
                        "id": 3217,
                        "pid": 317,
                        "name": "平南县",
                        "level": 3
                    },
                    {
                        "id": 3218,
                        "pid": 317,
                        "name": "桂平市",
                        "level": 3
                    },
                    {
                        "id": 3219,
                        "pid": 317,
                        "name": "港北区",
                        "level": 3
                    },
                    {
                        "id": 3220,
                        "pid": 317,
                        "name": "港南区",
                        "level": 3
                    },
                    {
                        "id": 3221,
                        "pid": 317,
                        "name": "覃塘区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 318,
                "pid": 20,
                "name": "玉林市",
                "level": 2,
                "children2": [
                    {
                        "id": 3222,
                        "pid": 318,
                        "name": "兴业县",
                        "level": 3
                    },
                    {
                        "id": 3223,
                        "pid": 318,
                        "name": "北流市",
                        "level": 3
                    },
                    {
                        "id": 3224,
                        "pid": 318,
                        "name": "博白县",
                        "level": 3
                    },
                    {
                        "id": 3225,
                        "pid": 318,
                        "name": "容县",
                        "level": 3
                    },
                    {
                        "id": 3226,
                        "pid": 318,
                        "name": "玉州区",
                        "level": 3
                    },
                    {
                        "id": 3227,
                        "pid": 318,
                        "name": "陆川县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 319,
                "pid": 20,
                "name": "百色市",
                "level": 2,
                "children2": [
                    {
                        "id": 3228,
                        "pid": 319,
                        "name": "乐业县",
                        "level": 3
                    },
                    {
                        "id": 3229,
                        "pid": 319,
                        "name": "凌云县",
                        "level": 3
                    },
                    {
                        "id": 3230,
                        "pid": 319,
                        "name": "右江区",
                        "level": 3
                    },
                    {
                        "id": 3231,
                        "pid": 319,
                        "name": "平果县",
                        "level": 3
                    },
                    {
                        "id": 3232,
                        "pid": 319,
                        "name": "德保县",
                        "level": 3
                    },
                    {
                        "id": 3233,
                        "pid": 319,
                        "name": "田东县",
                        "level": 3
                    },
                    {
                        "id": 3234,
                        "pid": 319,
                        "name": "田林县",
                        "level": 3
                    },
                    {
                        "id": 3235,
                        "pid": 319,
                        "name": "田阳县",
                        "level": 3
                    },
                    {
                        "id": 3236,
                        "pid": 319,
                        "name": "西林县",
                        "level": 3
                    },
                    {
                        "id": 3237,
                        "pid": 319,
                        "name": "那坡县",
                        "level": 3
                    },
                    {
                        "id": 3238,
                        "pid": 319,
                        "name": "隆林各族自治县",
                        "level": 3
                    },
                    {
                        "id": 3239,
                        "pid": 319,
                        "name": "靖西县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 320,
                "pid": 20,
                "name": "贺州市",
                "level": 2,
                "children2": [
                    {
                        "id": 3240,
                        "pid": 320,
                        "name": "八步区",
                        "level": 3
                    },
                    {
                        "id": 3241,
                        "pid": 320,
                        "name": "富川瑶族自治县",
                        "level": 3
                    },
                    {
                        "id": 3242,
                        "pid": 320,
                        "name": "昭平县",
                        "level": 3
                    },
                    {
                        "id": 3243,
                        "pid": 320,
                        "name": "钟山县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 321,
                "pid": 20,
                "name": "河池市",
                "level": 2,
                "children2": [
                    {
                        "id": 3244,
                        "pid": 321,
                        "name": "东兰县",
                        "level": 3
                    },
                    {
                        "id": 3245,
                        "pid": 321,
                        "name": "凤山县",
                        "level": 3
                    },
                    {
                        "id": 3246,
                        "pid": 321,
                        "name": "南丹县",
                        "level": 3
                    },
                    {
                        "id": 3247,
                        "pid": 321,
                        "name": "大化瑶族自治县",
                        "level": 3
                    },
                    {
                        "id": 3248,
                        "pid": 321,
                        "name": "天峨县",
                        "level": 3
                    },
                    {
                        "id": 3249,
                        "pid": 321,
                        "name": "宜州市",
                        "level": 3
                    },
                    {
                        "id": 3250,
                        "pid": 321,
                        "name": "巴马瑶族自治县",
                        "level": 3
                    },
                    {
                        "id": 3251,
                        "pid": 321,
                        "name": "环江毛南族自治县",
                        "level": 3
                    },
                    {
                        "id": 3252,
                        "pid": 321,
                        "name": "罗城仫佬族自治县",
                        "level": 3
                    },
                    {
                        "id": 3253,
                        "pid": 321,
                        "name": "都安瑶族自治县",
                        "level": 3
                    },
                    {
                        "id": 3254,
                        "pid": 321,
                        "name": "金城江区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 322,
                "pid": 20,
                "name": "来宾市",
                "level": 2,
                "children2": [
                    {
                        "id": 3255,
                        "pid": 322,
                        "name": "兴宾区",
                        "level": 3
                    },
                    {
                        "id": 3256,
                        "pid": 322,
                        "name": "合山市",
                        "level": 3
                    },
                    {
                        "id": 3257,
                        "pid": 322,
                        "name": "忻城县",
                        "level": 3
                    },
                    {
                        "id": 3258,
                        "pid": 322,
                        "name": "武宣县",
                        "level": 3
                    },
                    {
                        "id": 3259,
                        "pid": 322,
                        "name": "象州县",
                        "level": 3
                    },
                    {
                        "id": 3260,
                        "pid": 322,
                        "name": "金秀瑶族自治县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 323,
                "pid": 20,
                "name": "崇左市",
                "level": 2,
                "children2": [
                    {
                        "id": 3261,
                        "pid": 323,
                        "name": "凭祥市",
                        "level": 3
                    },
                    {
                        "id": 3262,
                        "pid": 323,
                        "name": "大新县",
                        "level": 3
                    },
                    {
                        "id": 3263,
                        "pid": 323,
                        "name": "天等县",
                        "level": 3
                    },
                    {
                        "id": 3264,
                        "pid": 323,
                        "name": "宁明县",
                        "level": 3
                    },
                    {
                        "id": 3265,
                        "pid": 323,
                        "name": "扶绥县",
                        "level": 3
                    },
                    {
                        "id": 3266,
                        "pid": 323,
                        "name": "江州区",
                        "level": 3
                    },
                    {
                        "id": 3267,
                        "pid": 323,
                        "name": "龙州县",
                        "level": 3
                    }
                ]
            }
        ]
    },
    {
        "id": 21,
        "pid": 0,
        "name": "海南省",
        "level": 1,
        "children": [
            {
                "id": 324,
                "pid": 21,
                "name": "海口市",
                "level": 2,
                "children2": [
                    {
                        "id": 3268,
                        "pid": 324,
                        "name": "琼山区",
                        "level": 3
                    },
                    {
                        "id": 3269,
                        "pid": 324,
                        "name": "秀英区",
                        "level": 3
                    },
                    {
                        "id": 3270,
                        "pid": 324,
                        "name": "美兰区",
                        "level": 3
                    },
                    {
                        "id": 3271,
                        "pid": 324,
                        "name": "龙华区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 325,
                "pid": 21,
                "name": "三亚市",
                "level": 2,
                "children2": [
                    {
                        "id": 3272,
                        "pid": 325,
                        "name": "三亚市",
                        "level": 3
                    }
                ]
            },
            {
                "id": 326,
                "pid": 21,
                "name": "五指山市",
                "level": 2,
                "children2": [
                    {
                        "id": 3273,
                        "pid": 326,
                        "name": "五指山市",
                        "level": 3
                    }
                ]
            },
            {
                "id": 327,
                "pid": 21,
                "name": "琼海市",
                "level": 2,
                "children2": [
                    {
                        "id": 3274,
                        "pid": 327,
                        "name": "琼海市",
                        "level": 3
                    }
                ]
            },
            {
                "id": 328,
                "pid": 21,
                "name": "儋州市",
                "level": 2,
                "children2": [
                    {
                        "id": 3275,
                        "pid": 328,
                        "name": "儋州市",
                        "level": 3
                    }
                ]
            },
            {
                "id": 329,
                "pid": 21,
                "name": "文昌市",
                "level": 2,
                "children2": [
                    {
                        "id": 3276,
                        "pid": 329,
                        "name": "文昌市",
                        "level": 3
                    }
                ]
            },
            {
                "id": 330,
                "pid": 21,
                "name": "万宁市",
                "level": 2,
                "children2": [
                    {
                        "id": 3277,
                        "pid": 330,
                        "name": "万宁市",
                        "level": 3
                    }
                ]
            },
            {
                "id": 331,
                "pid": 21,
                "name": "东方市",
                "level": 2,
                "children2": [
                    {
                        "id": 3278,
                        "pid": 331,
                        "name": "东方市",
                        "level": 3
                    }
                ]
            },
            {
                "id": 332,
                "pid": 21,
                "name": "定安县",
                "level": 2,
                "children2": [
                    {
                        "id": 3279,
                        "pid": 332,
                        "name": "定安县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 333,
                "pid": 21,
                "name": "屯昌县",
                "level": 2,
                "children2": [
                    {
                        "id": 3280,
                        "pid": 333,
                        "name": "屯昌县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 334,
                "pid": 21,
                "name": "澄迈县",
                "level": 2,
                "children2": [
                    {
                        "id": 3281,
                        "pid": 334,
                        "name": "澄迈县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 335,
                "pid": 21,
                "name": "临高县",
                "level": 2,
                "children2": [
                    {
                        "id": 3282,
                        "pid": 335,
                        "name": "临高县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 336,
                "pid": 21,
                "name": "白沙黎族自治县",
                "level": 2,
                "children2": [
                    {
                        "id": 3283,
                        "pid": 336,
                        "name": "白沙黎族自治县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 337,
                "pid": 21,
                "name": "昌江黎族自治县",
                "level": 2,
                "children2": [
                    {
                        "id": 3284,
                        "pid": 337,
                        "name": "昌江黎族自治县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 338,
                "pid": 21,
                "name": "乐东黎族自治县",
                "level": 2,
                "children2": [
                    {
                        "id": 3285,
                        "pid": 338,
                        "name": "乐东黎族自治县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 339,
                "pid": 21,
                "name": "陵水黎族自治县",
                "level": 2,
                "children2": [
                    {
                        "id": 3286,
                        "pid": 339,
                        "name": "陵水黎族自治县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 340,
                "pid": 21,
                "name": "保亭黎族苗族自治县",
                "level": 2,
                "children2": [
                    {
                        "id": 3287,
                        "pid": 340,
                        "name": "保亭黎族苗族自治县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 341,
                "pid": 21,
                "name": "琼中黎族苗族自治县",
                "level": 2,
                "children2": [
                    {
                        "id": 3288,
                        "pid": 341,
                        "name": "琼中黎族苗族自治县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 342,
                "pid": 21,
                "name": "西沙群岛",
                "level": 2,
                "children2": []
            },
            {
                "id": 343,
                "pid": 21,
                "name": "南沙群岛",
                "level": 2,
                "children2": []
            },
            {
                "id": 344,
                "pid": 21,
                "name": "中沙群岛的岛礁及其海域",
                "level": 2,
                "children2": []
            }
        ]
    },
    {
        "id": 22,
        "pid": 0,
        "name": "重庆市",
        "level": 1,
        "children": [
            {
                "id": 345,
                "pid": 22,
                "name": "万州区",
                "level": 2,
                "children2": [
                    {
                        "id": 3289,
                        "pid": 345,
                        "name": "九池乡",
                        "level": 3
                    },
                    {
                        "id": 3290,
                        "pid": 345,
                        "name": "五桥街道",
                        "level": 3
                    },
                    {
                        "id": 3291,
                        "pid": 345,
                        "name": "余家镇",
                        "level": 3
                    },
                    {
                        "id": 3292,
                        "pid": 345,
                        "name": "分水镇",
                        "level": 3
                    },
                    {
                        "id": 3293,
                        "pid": 345,
                        "name": "双河口街道",
                        "level": 3
                    },
                    {
                        "id": 3294,
                        "pid": 345,
                        "name": "后山镇",
                        "level": 3
                    },
                    {
                        "id": 3295,
                        "pid": 345,
                        "name": "周家坝街道",
                        "level": 3
                    },
                    {
                        "id": 3296,
                        "pid": 345,
                        "name": "响水镇",
                        "level": 3
                    },
                    {
                        "id": 3297,
                        "pid": 345,
                        "name": "地宝乡",
                        "level": 3
                    },
                    {
                        "id": 3298,
                        "pid": 345,
                        "name": "大周镇",
                        "level": 3
                    },
                    {
                        "id": 3299,
                        "pid": 345,
                        "name": "天城镇",
                        "level": 3
                    },
                    {
                        "id": 3300,
                        "pid": 345,
                        "name": "太安镇",
                        "level": 3
                    },
                    {
                        "id": 3301,
                        "pid": 345,
                        "name": "太白街道",
                        "level": 3
                    },
                    {
                        "id": 3302,
                        "pid": 345,
                        "name": "太龙镇",
                        "level": 3
                    },
                    {
                        "id": 3303,
                        "pid": 345,
                        "name": "孙家镇",
                        "level": 3
                    },
                    {
                        "id": 3304,
                        "pid": 345,
                        "name": "小周镇",
                        "level": 3
                    },
                    {
                        "id": 3305,
                        "pid": 345,
                        "name": "弹子镇",
                        "level": 3
                    },
                    {
                        "id": 3306,
                        "pid": 345,
                        "name": "恒合土家族乡",
                        "level": 3
                    },
                    {
                        "id": 3307,
                        "pid": 345,
                        "name": "新乡镇",
                        "level": 3
                    },
                    {
                        "id": 3308,
                        "pid": 345,
                        "name": "新田镇",
                        "level": 3
                    },
                    {
                        "id": 3309,
                        "pid": 345,
                        "name": "普子乡",
                        "level": 3
                    },
                    {
                        "id": 3310,
                        "pid": 345,
                        "name": "李河镇",
                        "level": 3
                    },
                    {
                        "id": 3311,
                        "pid": 345,
                        "name": "柱山乡",
                        "level": 3
                    },
                    {
                        "id": 3312,
                        "pid": 345,
                        "name": "梨树乡",
                        "level": 3
                    },
                    {
                        "id": 3313,
                        "pid": 345,
                        "name": "武陵镇",
                        "level": 3
                    },
                    {
                        "id": 3314,
                        "pid": 345,
                        "name": "沙河街道",
                        "level": 3
                    },
                    {
                        "id": 3315,
                        "pid": 345,
                        "name": "溪口乡",
                        "level": 3
                    },
                    {
                        "id": 3316,
                        "pid": 345,
                        "name": "瀼渡镇",
                        "level": 3
                    },
                    {
                        "id": 3317,
                        "pid": 345,
                        "name": "熊家镇",
                        "level": 3
                    },
                    {
                        "id": 3318,
                        "pid": 345,
                        "name": "燕山乡",
                        "level": 3
                    },
                    {
                        "id": 3319,
                        "pid": 345,
                        "name": "牌楼街道",
                        "level": 3
                    },
                    {
                        "id": 3320,
                        "pid": 345,
                        "name": "甘宁镇",
                        "level": 3
                    },
                    {
                        "id": 3321,
                        "pid": 345,
                        "name": "白土镇",
                        "level": 3
                    },
                    {
                        "id": 3322,
                        "pid": 345,
                        "name": "白羊镇",
                        "level": 3
                    },
                    {
                        "id": 3323,
                        "pid": 345,
                        "name": "百安坝街道",
                        "level": 3
                    },
                    {
                        "id": 3324,
                        "pid": 345,
                        "name": "罗田镇",
                        "level": 3
                    },
                    {
                        "id": 3325,
                        "pid": 345,
                        "name": "茨竹乡",
                        "level": 3
                    },
                    {
                        "id": 3326,
                        "pid": 345,
                        "name": "走马镇",
                        "level": 3
                    },
                    {
                        "id": 3327,
                        "pid": 345,
                        "name": "郭村乡",
                        "level": 3
                    },
                    {
                        "id": 3328,
                        "pid": 345,
                        "name": "钟鼓楼街道",
                        "level": 3
                    },
                    {
                        "id": 3329,
                        "pid": 345,
                        "name": "铁峰乡",
                        "level": 3
                    },
                    {
                        "id": 3330,
                        "pid": 345,
                        "name": "长坪乡",
                        "level": 3
                    },
                    {
                        "id": 3331,
                        "pid": 345,
                        "name": "长岭镇",
                        "level": 3
                    },
                    {
                        "id": 3332,
                        "pid": 345,
                        "name": "长滩镇",
                        "level": 3
                    },
                    {
                        "id": 3333,
                        "pid": 345,
                        "name": "陈家坝街道",
                        "level": 3
                    },
                    {
                        "id": 3334,
                        "pid": 345,
                        "name": "高峰镇",
                        "level": 3
                    },
                    {
                        "id": 3335,
                        "pid": 345,
                        "name": "高梁镇",
                        "level": 3
                    },
                    {
                        "id": 3336,
                        "pid": 345,
                        "name": "高笋塘街道",
                        "level": 3
                    },
                    {
                        "id": 3337,
                        "pid": 345,
                        "name": "黄柏乡",
                        "level": 3
                    },
                    {
                        "id": 3338,
                        "pid": 345,
                        "name": "龙沙镇",
                        "level": 3
                    },
                    {
                        "id": 3339,
                        "pid": 345,
                        "name": "龙都街道",
                        "level": 3
                    },
                    {
                        "id": 3340,
                        "pid": 345,
                        "name": "龙驹镇",
                        "level": 3
                    }
                ]
            },
            {
                "id": 346,
                "pid": 22,
                "name": "涪陵区",
                "level": 2,
                "children2": [
                    {
                        "id": 3341,
                        "pid": 346,
                        "name": "丛林乡",
                        "level": 3
                    },
                    {
                        "id": 3342,
                        "pid": 346,
                        "name": "两汇乡",
                        "level": 3
                    },
                    {
                        "id": 3343,
                        "pid": 346,
                        "name": "中峰乡",
                        "level": 3
                    },
                    {
                        "id": 3344,
                        "pid": 346,
                        "name": "义和镇",
                        "level": 3
                    },
                    {
                        "id": 3345,
                        "pid": 346,
                        "name": "仁义乡",
                        "level": 3
                    },
                    {
                        "id": 3346,
                        "pid": 346,
                        "name": "南沱镇",
                        "level": 3
                    },
                    {
                        "id": 3347,
                        "pid": 346,
                        "name": "卷洞乡",
                        "level": 3
                    },
                    {
                        "id": 3348,
                        "pid": 346,
                        "name": "同乐乡",
                        "level": 3
                    },
                    {
                        "id": 3349,
                        "pid": 346,
                        "name": "土地坡乡",
                        "level": 3
                    },
                    {
                        "id": 3350,
                        "pid": 346,
                        "name": "堡子镇",
                        "level": 3
                    },
                    {
                        "id": 3351,
                        "pid": 346,
                        "name": "增福乡",
                        "level": 3
                    },
                    {
                        "id": 3352,
                        "pid": 346,
                        "name": "大木乡",
                        "level": 3
                    },
                    {
                        "id": 3353,
                        "pid": 346,
                        "name": "天台乡",
                        "level": 3
                    },
                    {
                        "id": 3354,
                        "pid": 346,
                        "name": "太和乡",
                        "level": 3
                    },
                    {
                        "id": 3355,
                        "pid": 346,
                        "name": "山窝乡",
                        "level": 3
                    },
                    {
                        "id": 3356,
                        "pid": 346,
                        "name": "崇义街道",
                        "level": 3
                    },
                    {
                        "id": 3357,
                        "pid": 346,
                        "name": "惠民乡",
                        "level": 3
                    },
                    {
                        "id": 3358,
                        "pid": 346,
                        "name": "敦仁街道",
                        "level": 3
                    },
                    {
                        "id": 3359,
                        "pid": 346,
                        "name": "新妙镇",
                        "level": 3
                    },
                    {
                        "id": 3360,
                        "pid": 346,
                        "name": "新村乡",
                        "level": 3
                    },
                    {
                        "id": 3361,
                        "pid": 346,
                        "name": "明家乡",
                        "level": 3
                    },
                    {
                        "id": 3362,
                        "pid": 346,
                        "name": "李渡镇",
                        "level": 3
                    },
                    {
                        "id": 3363,
                        "pid": 346,
                        "name": "梓里乡",
                        "level": 3
                    },
                    {
                        "id": 3364,
                        "pid": 346,
                        "name": "武陵山乡",
                        "level": 3
                    },
                    {
                        "id": 3365,
                        "pid": 346,
                        "name": "江东街道",
                        "level": 3
                    },
                    {
                        "id": 3366,
                        "pid": 346,
                        "name": "江北街道",
                        "level": 3
                    },
                    {
                        "id": 3367,
                        "pid": 346,
                        "name": "清溪镇",
                        "level": 3
                    },
                    {
                        "id": 3368,
                        "pid": 346,
                        "name": "焦石镇",
                        "level": 3
                    },
                    {
                        "id": 3369,
                        "pid": 346,
                        "name": "珍溪镇",
                        "level": 3
                    },
                    {
                        "id": 3370,
                        "pid": 346,
                        "name": "白涛镇",
                        "level": 3
                    },
                    {
                        "id": 3371,
                        "pid": 346,
                        "name": "百胜镇",
                        "level": 3
                    },
                    {
                        "id": 3372,
                        "pid": 346,
                        "name": "石和乡",
                        "level": 3
                    },
                    {
                        "id": 3373,
                        "pid": 346,
                        "name": "石沱镇",
                        "level": 3
                    },
                    {
                        "id": 3374,
                        "pid": 346,
                        "name": "石龙乡",
                        "level": 3
                    },
                    {
                        "id": 3375,
                        "pid": 346,
                        "name": "罗云乡",
                        "level": 3
                    },
                    {
                        "id": 3376,
                        "pid": 346,
                        "name": "聚宝乡",
                        "level": 3
                    },
                    {
                        "id": 3377,
                        "pid": 346,
                        "name": "致韩镇",
                        "level": 3
                    },
                    {
                        "id": 3378,
                        "pid": 346,
                        "name": "荔枝街道",
                        "level": 3
                    },
                    {
                        "id": 3379,
                        "pid": 346,
                        "name": "蔺市镇",
                        "level": 3
                    },
                    {
                        "id": 3380,
                        "pid": 346,
                        "name": "酒店乡",
                        "level": 3
                    },
                    {
                        "id": 3381,
                        "pid": 346,
                        "name": "镇安镇",
                        "level": 3
                    },
                    {
                        "id": 3382,
                        "pid": 346,
                        "name": "青羊镇",
                        "level": 3
                    },
                    {
                        "id": 3383,
                        "pid": 346,
                        "name": "马武镇",
                        "level": 3
                    },
                    {
                        "id": 3384,
                        "pid": 346,
                        "name": "龙桥镇",
                        "level": 3
                    },
                    {
                        "id": 3385,
                        "pid": 346,
                        "name": "龙潭镇",
                        "level": 3
                    }
                ]
            },
            {
                "id": 347,
                "pid": 22,
                "name": "渝中区",
                "level": 2,
                "children2": [
                    {
                        "id": 3386,
                        "pid": 347,
                        "name": "七星岗街道",
                        "level": 3
                    },
                    {
                        "id": 3387,
                        "pid": 347,
                        "name": "上清寺街道",
                        "level": 3
                    },
                    {
                        "id": 3388,
                        "pid": 347,
                        "name": "两路口街道",
                        "level": 3
                    },
                    {
                        "id": 3389,
                        "pid": 347,
                        "name": "化龙桥街道",
                        "level": 3
                    },
                    {
                        "id": 3390,
                        "pid": 347,
                        "name": "南纪门街道",
                        "level": 3
                    },
                    {
                        "id": 3391,
                        "pid": 347,
                        "name": "大坪街道",
                        "level": 3
                    },
                    {
                        "id": 3392,
                        "pid": 347,
                        "name": "大溪沟街道",
                        "level": 3
                    },
                    {
                        "id": 3393,
                        "pid": 347,
                        "name": "望龙门街道",
                        "level": 3
                    },
                    {
                        "id": 3394,
                        "pid": 347,
                        "name": "朝天门街道",
                        "level": 3
                    },
                    {
                        "id": 3395,
                        "pid": 347,
                        "name": "石油路街道",
                        "level": 3
                    },
                    {
                        "id": 3396,
                        "pid": 347,
                        "name": "菜园坝街道",
                        "level": 3
                    },
                    {
                        "id": 3397,
                        "pid": 347,
                        "name": "解放碑街道",
                        "level": 3
                    }
                ]
            },
            {
                "id": 348,
                "pid": 22,
                "name": "大渡口区",
                "level": 2,
                "children2": [
                    {
                        "id": 3398,
                        "pid": 348,
                        "name": "九宫庙街道",
                        "level": 3
                    },
                    {
                        "id": 3399,
                        "pid": 348,
                        "name": "八桥镇",
                        "level": 3
                    },
                    {
                        "id": 3400,
                        "pid": 348,
                        "name": "建胜镇",
                        "level": 3
                    },
                    {
                        "id": 3401,
                        "pid": 348,
                        "name": "新山村街道",
                        "level": 3
                    },
                    {
                        "id": 3402,
                        "pid": 348,
                        "name": "春晖路街道",
                        "level": 3
                    },
                    {
                        "id": 3403,
                        "pid": 348,
                        "name": "茄子溪街道",
                        "level": 3
                    },
                    {
                        "id": 3404,
                        "pid": 348,
                        "name": "跃进村街道",
                        "level": 3
                    },
                    {
                        "id": 3405,
                        "pid": 348,
                        "name": "跳磴镇",
                        "level": 3
                    }
                ]
            },
            {
                "id": 349,
                "pid": 22,
                "name": "江北区",
                "level": 2,
                "children2": [
                    {
                        "id": 3406,
                        "pid": 349,
                        "name": "五宝镇",
                        "level": 3
                    },
                    {
                        "id": 3407,
                        "pid": 349,
                        "name": "五里店街道",
                        "level": 3
                    },
                    {
                        "id": 3408,
                        "pid": 349,
                        "name": "华新街街道",
                        "level": 3
                    },
                    {
                        "id": 3409,
                        "pid": 349,
                        "name": "复盛镇",
                        "level": 3
                    },
                    {
                        "id": 3410,
                        "pid": 349,
                        "name": "大石坝街道",
                        "level": 3
                    },
                    {
                        "id": 3411,
                        "pid": 349,
                        "name": "寸滩街道",
                        "level": 3
                    },
                    {
                        "id": 3412,
                        "pid": 349,
                        "name": "江北城街道",
                        "level": 3
                    },
                    {
                        "id": 3413,
                        "pid": 349,
                        "name": "石马河街道",
                        "level": 3
                    },
                    {
                        "id": 3414,
                        "pid": 349,
                        "name": "观音桥街道",
                        "level": 3
                    },
                    {
                        "id": 3415,
                        "pid": 349,
                        "name": "郭家沱街道",
                        "level": 3
                    },
                    {
                        "id": 3416,
                        "pid": 349,
                        "name": "铁山坪街道",
                        "level": 3
                    },
                    {
                        "id": 3417,
                        "pid": 349,
                        "name": "鱼嘴镇",
                        "level": 3
                    }
                ]
            },
            {
                "id": 350,
                "pid": 22,
                "name": "沙坪坝区",
                "level": 2,
                "children2": [
                    {
                        "id": 3418,
                        "pid": 350,
                        "name": "中梁镇",
                        "level": 3
                    },
                    {
                        "id": 3419,
                        "pid": 350,
                        "name": "井口街道",
                        "level": 3
                    },
                    {
                        "id": 3420,
                        "pid": 350,
                        "name": "井口镇",
                        "level": 3
                    },
                    {
                        "id": 3421,
                        "pid": 350,
                        "name": "凤凰镇",
                        "level": 3
                    },
                    {
                        "id": 3422,
                        "pid": 350,
                        "name": "回龙坝镇",
                        "level": 3
                    },
                    {
                        "id": 3423,
                        "pid": 350,
                        "name": "土主镇",
                        "level": 3
                    },
                    {
                        "id": 3424,
                        "pid": 350,
                        "name": "土湾街道",
                        "level": 3
                    },
                    {
                        "id": 3425,
                        "pid": 350,
                        "name": "天星桥街道",
                        "level": 3
                    },
                    {
                        "id": 3426,
                        "pid": 350,
                        "name": "小龙坎街道",
                        "level": 3
                    },
                    {
                        "id": 3427,
                        "pid": 350,
                        "name": "山洞街道",
                        "level": 3
                    },
                    {
                        "id": 3428,
                        "pid": 350,
                        "name": "新桥街道",
                        "level": 3
                    },
                    {
                        "id": 3429,
                        "pid": 350,
                        "name": "曾家镇",
                        "level": 3
                    },
                    {
                        "id": 3430,
                        "pid": 350,
                        "name": "歌乐山街道",
                        "level": 3
                    },
                    {
                        "id": 3431,
                        "pid": 350,
                        "name": "歌乐山镇",
                        "level": 3
                    },
                    {
                        "id": 3432,
                        "pid": 350,
                        "name": "沙坪坝街道",
                        "level": 3
                    },
                    {
                        "id": 3433,
                        "pid": 350,
                        "name": "渝碚路街道",
                        "level": 3
                    },
                    {
                        "id": 3434,
                        "pid": 350,
                        "name": "石井坡街道",
                        "level": 3
                    },
                    {
                        "id": 3435,
                        "pid": 350,
                        "name": "磁器口街道",
                        "level": 3
                    },
                    {
                        "id": 3436,
                        "pid": 350,
                        "name": "童家桥街道",
                        "level": 3
                    },
                    {
                        "id": 3437,
                        "pid": 350,
                        "name": "虎溪镇",
                        "level": 3
                    },
                    {
                        "id": 3438,
                        "pid": 350,
                        "name": "西永镇",
                        "level": 3
                    },
                    {
                        "id": 3439,
                        "pid": 350,
                        "name": "覃家岗镇",
                        "level": 3
                    },
                    {
                        "id": 3440,
                        "pid": 350,
                        "name": "詹家溪街道",
                        "level": 3
                    },
                    {
                        "id": 3441,
                        "pid": 350,
                        "name": "陈家桥镇",
                        "level": 3
                    },
                    {
                        "id": 3442,
                        "pid": 350,
                        "name": "青木关镇",
                        "level": 3
                    }
                ]
            },
            {
                "id": 351,
                "pid": 22,
                "name": "九龙坡区",
                "level": 2,
                "children2": [
                    {
                        "id": 3443,
                        "pid": 351,
                        "name": "中梁山街道",
                        "level": 3
                    },
                    {
                        "id": 3444,
                        "pid": 351,
                        "name": "九龙镇",
                        "level": 3
                    },
                    {
                        "id": 3445,
                        "pid": 351,
                        "name": "华岩镇",
                        "level": 3
                    },
                    {
                        "id": 3446,
                        "pid": 351,
                        "name": "含谷镇",
                        "level": 3
                    },
                    {
                        "id": 3447,
                        "pid": 351,
                        "name": "巴福镇",
                        "level": 3
                    },
                    {
                        "id": 3448,
                        "pid": 351,
                        "name": "杨家坪街道",
                        "level": 3
                    },
                    {
                        "id": 3449,
                        "pid": 351,
                        "name": "渝州路街道",
                        "level": 3
                    },
                    {
                        "id": 3450,
                        "pid": 351,
                        "name": "白市驿镇",
                        "level": 3
                    },
                    {
                        "id": 3451,
                        "pid": 351,
                        "name": "石坪桥街道",
                        "level": 3
                    },
                    {
                        "id": 3452,
                        "pid": 351,
                        "name": "石板镇",
                        "level": 3
                    },
                    {
                        "id": 3453,
                        "pid": 351,
                        "name": "石桥铺街道",
                        "level": 3
                    },
                    {
                        "id": 3454,
                        "pid": 351,
                        "name": "西彭镇",
                        "level": 3
                    },
                    {
                        "id": 3455,
                        "pid": 351,
                        "name": "谢家湾街道",
                        "level": 3
                    },
                    {
                        "id": 3456,
                        "pid": 351,
                        "name": "走马镇",
                        "level": 3
                    },
                    {
                        "id": 3457,
                        "pid": 351,
                        "name": "金凤镇",
                        "level": 3
                    },
                    {
                        "id": 3458,
                        "pid": 351,
                        "name": "铜罐驿镇",
                        "level": 3
                    },
                    {
                        "id": 3459,
                        "pid": 351,
                        "name": "陶家镇",
                        "level": 3
                    },
                    {
                        "id": 3460,
                        "pid": 351,
                        "name": "黄桷坪街道",
                        "level": 3
                    }
                ]
            },
            {
                "id": 352,
                "pid": 22,
                "name": "南岸区",
                "level": 2,
                "children2": [
                    {
                        "id": 3461,
                        "pid": 352,
                        "name": "南坪街道",
                        "level": 3
                    },
                    {
                        "id": 3462,
                        "pid": 352,
                        "name": "南坪镇",
                        "level": 3
                    },
                    {
                        "id": 3463,
                        "pid": 352,
                        "name": "南山街道",
                        "level": 3
                    },
                    {
                        "id": 3464,
                        "pid": 352,
                        "name": "峡口镇",
                        "level": 3
                    },
                    {
                        "id": 3465,
                        "pid": 352,
                        "name": "广阳镇",
                        "level": 3
                    },
                    {
                        "id": 3466,
                        "pid": 352,
                        "name": "弹子石街道",
                        "level": 3
                    },
                    {
                        "id": 3467,
                        "pid": 352,
                        "name": "海棠溪街道",
                        "level": 3
                    },
                    {
                        "id": 3468,
                        "pid": 352,
                        "name": "涂山镇",
                        "level": 3
                    },
                    {
                        "id": 3469,
                        "pid": 352,
                        "name": "花园路街道",
                        "level": 3
                    },
                    {
                        "id": 3470,
                        "pid": 352,
                        "name": "迎龙镇",
                        "level": 3
                    },
                    {
                        "id": 3471,
                        "pid": 352,
                        "name": "铜元局街道",
                        "level": 3
                    },
                    {
                        "id": 3472,
                        "pid": 352,
                        "name": "长生桥镇",
                        "level": 3
                    },
                    {
                        "id": 3473,
                        "pid": 352,
                        "name": "鸡冠石镇",
                        "level": 3
                    },
                    {
                        "id": 3474,
                        "pid": 352,
                        "name": "龙门浩街道",
                        "level": 3
                    }
                ]
            },
            {
                "id": 353,
                "pid": 22,
                "name": "北碚区",
                "level": 2,
                "children2": [
                    {
                        "id": 3475,
                        "pid": 353,
                        "name": "三圣镇",
                        "level": 3
                    },
                    {
                        "id": 3476,
                        "pid": 353,
                        "name": "东阳街道",
                        "level": 3
                    },
                    {
                        "id": 3477,
                        "pid": 353,
                        "name": "北温泉街道",
                        "level": 3
                    },
                    {
                        "id": 3478,
                        "pid": 353,
                        "name": "复兴镇",
                        "level": 3
                    },
                    {
                        "id": 3479,
                        "pid": 353,
                        "name": "天府镇",
                        "level": 3
                    },
                    {
                        "id": 3480,
                        "pid": 353,
                        "name": "天生街道",
                        "level": 3
                    },
                    {
                        "id": 3481,
                        "pid": 353,
                        "name": "施家梁镇",
                        "level": 3
                    },
                    {
                        "id": 3482,
                        "pid": 353,
                        "name": "朝阳街道",
                        "level": 3
                    },
                    {
                        "id": 3483,
                        "pid": 353,
                        "name": "柳荫镇",
                        "level": 3
                    },
                    {
                        "id": 3484,
                        "pid": 353,
                        "name": "歇马镇",
                        "level": 3
                    },
                    {
                        "id": 3485,
                        "pid": 353,
                        "name": "水土镇",
                        "level": 3
                    },
                    {
                        "id": 3486,
                        "pid": 353,
                        "name": "澄江镇",
                        "level": 3
                    },
                    {
                        "id": 3487,
                        "pid": 353,
                        "name": "童家溪镇",
                        "level": 3
                    },
                    {
                        "id": 3488,
                        "pid": 353,
                        "name": "蔡家岗镇",
                        "level": 3
                    },
                    {
                        "id": 3489,
                        "pid": 353,
                        "name": "金刀峡镇",
                        "level": 3
                    },
                    {
                        "id": 3490,
                        "pid": 353,
                        "name": "静观镇",
                        "level": 3
                    },
                    {
                        "id": 3491,
                        "pid": 353,
                        "name": "龙凤桥街道",
                        "level": 3
                    }
                ]
            },
            {
                "id": 354,
                "pid": 22,
                "name": "双桥区",
                "level": 2,
                "children2": [
                    {
                        "id": 3492,
                        "pid": 354,
                        "name": "双路镇",
                        "level": 3
                    },
                    {
                        "id": 3493,
                        "pid": 354,
                        "name": "通桥镇",
                        "level": 3
                    },
                    {
                        "id": 3494,
                        "pid": 354,
                        "name": "龙滩子街道",
                        "level": 3
                    }
                ]
            },
            {
                "id": 355,
                "pid": 22,
                "name": "万盛区",
                "level": 2,
                "children2": [
                    {
                        "id": 3495,
                        "pid": 355,
                        "name": "万东镇",
                        "level": 3
                    },
                    {
                        "id": 3496,
                        "pid": 355,
                        "name": "万盛街道",
                        "level": 3
                    },
                    {
                        "id": 3497,
                        "pid": 355,
                        "name": "丛林镇",
                        "level": 3
                    },
                    {
                        "id": 3498,
                        "pid": 355,
                        "name": "东林街道",
                        "level": 3
                    },
                    {
                        "id": 3499,
                        "pid": 355,
                        "name": "关坝镇",
                        "level": 3
                    },
                    {
                        "id": 3500,
                        "pid": 355,
                        "name": "南桐镇",
                        "level": 3
                    },
                    {
                        "id": 3501,
                        "pid": 355,
                        "name": "石林镇",
                        "level": 3
                    },
                    {
                        "id": 3502,
                        "pid": 355,
                        "name": "金桥镇",
                        "level": 3
                    },
                    {
                        "id": 3503,
                        "pid": 355,
                        "name": "青年镇",
                        "level": 3
                    },
                    {
                        "id": 3504,
                        "pid": 355,
                        "name": "黑山镇",
                        "level": 3
                    }
                ]
            },
            {
                "id": 356,
                "pid": 22,
                "name": "渝北区",
                "level": 2,
                "children2": [
                    {
                        "id": 3505,
                        "pid": 356,
                        "name": "人和街道",
                        "level": 3
                    },
                    {
                        "id": 3506,
                        "pid": 356,
                        "name": "兴隆镇",
                        "level": 3
                    },
                    {
                        "id": 3507,
                        "pid": 356,
                        "name": "华蓥山镇",
                        "level": 3
                    },
                    {
                        "id": 3508,
                        "pid": 356,
                        "name": "双凤桥街道",
                        "level": 3
                    },
                    {
                        "id": 3509,
                        "pid": 356,
                        "name": "双龙湖街道",
                        "level": 3
                    },
                    {
                        "id": 3510,
                        "pid": 356,
                        "name": "古路镇",
                        "level": 3
                    },
                    {
                        "id": 3511,
                        "pid": 356,
                        "name": "回兴街道",
                        "level": 3
                    },
                    {
                        "id": 3512,
                        "pid": 356,
                        "name": "大塆镇",
                        "level": 3
                    },
                    {
                        "id": 3513,
                        "pid": 356,
                        "name": "大盛镇",
                        "level": 3
                    },
                    {
                        "id": 3514,
                        "pid": 356,
                        "name": "大竹林街道",
                        "level": 3
                    },
                    {
                        "id": 3515,
                        "pid": 356,
                        "name": "天宫殿街道",
                        "level": 3
                    },
                    {
                        "id": 3516,
                        "pid": 356,
                        "name": "张关镇",
                        "level": 3
                    },
                    {
                        "id": 3517,
                        "pid": 356,
                        "name": "御临镇",
                        "level": 3
                    },
                    {
                        "id": 3518,
                        "pid": 356,
                        "name": "悦来镇",
                        "level": 3
                    },
                    {
                        "id": 3519,
                        "pid": 356,
                        "name": "明月镇",
                        "level": 3
                    },
                    {
                        "id": 3520,
                        "pid": 356,
                        "name": "木耳镇",
                        "level": 3
                    },
                    {
                        "id": 3521,
                        "pid": 356,
                        "name": "洛碛镇",
                        "level": 3
                    },
                    {
                        "id": 3522,
                        "pid": 356,
                        "name": "玉峰山镇",
                        "level": 3
                    },
                    {
                        "id": 3523,
                        "pid": 356,
                        "name": "王家镇",
                        "level": 3
                    },
                    {
                        "id": 3524,
                        "pid": 356,
                        "name": "石坪镇",
                        "level": 3
                    },
                    {
                        "id": 3525,
                        "pid": 356,
                        "name": "石船镇",
                        "level": 3
                    },
                    {
                        "id": 3526,
                        "pid": 356,
                        "name": "礼嘉镇",
                        "level": 3
                    },
                    {
                        "id": 3527,
                        "pid": 356,
                        "name": "统景镇",
                        "level": 3
                    },
                    {
                        "id": 3528,
                        "pid": 356,
                        "name": "翠云街道",
                        "level": 3
                    },
                    {
                        "id": 3529,
                        "pid": 356,
                        "name": "茨竹",
                        "level": 3
                    },
                    {
                        "id": 3530,
                        "pid": 356,
                        "name": "高嘴镇",
                        "level": 3
                    },
                    {
                        "id": 3531,
                        "pid": 356,
                        "name": "鸳鸯街道",
                        "level": 3
                    },
                    {
                        "id": 3532,
                        "pid": 356,
                        "name": "麻柳沱镇",
                        "level": 3
                    },
                    {
                        "id": 3533,
                        "pid": 356,
                        "name": "龙兴镇",
                        "level": 3
                    },
                    {
                        "id": 3534,
                        "pid": 356,
                        "name": "龙塔街道",
                        "level": 3
                    },
                    {
                        "id": 3535,
                        "pid": 356,
                        "name": "龙山街道",
                        "level": 3
                    },
                    {
                        "id": 3536,
                        "pid": 356,
                        "name": "龙溪街道",
                        "level": 3
                    }
                ]
            },
            {
                "id": 357,
                "pid": 22,
                "name": "巴南区",
                "level": 2,
                "children2": [
                    {
                        "id": 3537,
                        "pid": 357,
                        "name": "一品镇",
                        "level": 3
                    },
                    {
                        "id": 3538,
                        "pid": 357,
                        "name": "东泉镇",
                        "level": 3
                    },
                    {
                        "id": 3539,
                        "pid": 357,
                        "name": "丰盛镇",
                        "level": 3
                    },
                    {
                        "id": 3540,
                        "pid": 357,
                        "name": "二圣镇",
                        "level": 3
                    },
                    {
                        "id": 3541,
                        "pid": 357,
                        "name": "南彭镇",
                        "level": 3
                    },
                    {
                        "id": 3542,
                        "pid": 357,
                        "name": "南泉镇",
                        "level": 3
                    },
                    {
                        "id": 3543,
                        "pid": 357,
                        "name": "双河口镇",
                        "level": 3
                    },
                    {
                        "id": 3544,
                        "pid": 357,
                        "name": "天星寺镇",
                        "level": 3
                    },
                    {
                        "id": 3545,
                        "pid": 357,
                        "name": "姜家镇",
                        "level": 3
                    },
                    {
                        "id": 3546,
                        "pid": 357,
                        "name": "安澜镇",
                        "level": 3
                    },
                    {
                        "id": 3547,
                        "pid": 357,
                        "name": "惠民镇",
                        "level": 3
                    },
                    {
                        "id": 3548,
                        "pid": 357,
                        "name": "接龙镇",
                        "level": 3
                    },
                    {
                        "id": 3549,
                        "pid": 357,
                        "name": "木洞镇",
                        "level": 3
                    },
                    {
                        "id": 3550,
                        "pid": 357,
                        "name": "李家沱街道",
                        "level": 3
                    },
                    {
                        "id": 3551,
                        "pid": 357,
                        "name": "界石镇",
                        "level": 3
                    },
                    {
                        "id": 3552,
                        "pid": 357,
                        "name": "石滩镇",
                        "level": 3
                    },
                    {
                        "id": 3553,
                        "pid": 357,
                        "name": "石龙镇",
                        "level": 3
                    },
                    {
                        "id": 3554,
                        "pid": 357,
                        "name": "花溪镇",
                        "level": 3
                    },
                    {
                        "id": 3555,
                        "pid": 357,
                        "name": "跳石镇",
                        "level": 3
                    },
                    {
                        "id": 3556,
                        "pid": 357,
                        "name": "鱼洞街道",
                        "level": 3
                    },
                    {
                        "id": 3557,
                        "pid": 357,
                        "name": "麻柳嘴镇",
                        "level": 3
                    }
                ]
            },
            {
                "id": 358,
                "pid": 22,
                "name": "黔江区",
                "level": 2,
                "children2": [
                    {
                        "id": 3558,
                        "pid": 358,
                        "name": "两河镇",
                        "level": 3
                    },
                    {
                        "id": 3559,
                        "pid": 358,
                        "name": "中塘乡",
                        "level": 3
                    },
                    {
                        "id": 3560,
                        "pid": 358,
                        "name": "五里乡",
                        "level": 3
                    },
                    {
                        "id": 3561,
                        "pid": 358,
                        "name": "冯家镇",
                        "level": 3
                    },
                    {
                        "id": 3562,
                        "pid": 358,
                        "name": "城东街道",
                        "level": 3
                    },
                    {
                        "id": 3563,
                        "pid": 358,
                        "name": "城南街道",
                        "level": 3
                    },
                    {
                        "id": 3564,
                        "pid": 358,
                        "name": "城西街道",
                        "level": 3
                    },
                    {
                        "id": 3565,
                        "pid": 358,
                        "name": "太极乡",
                        "level": 3
                    },
                    {
                        "id": 3566,
                        "pid": 358,
                        "name": "小南海镇",
                        "level": 3
                    },
                    {
                        "id": 3567,
                        "pid": 358,
                        "name": "新华乡",
                        "level": 3
                    },
                    {
                        "id": 3568,
                        "pid": 358,
                        "name": "杉岭乡",
                        "level": 3
                    },
                    {
                        "id": 3569,
                        "pid": 358,
                        "name": "正阳镇",
                        "level": 3
                    },
                    {
                        "id": 3570,
                        "pid": 358,
                        "name": "水市乡",
                        "level": 3
                    },
                    {
                        "id": 3571,
                        "pid": 358,
                        "name": "水田乡",
                        "level": 3
                    },
                    {
                        "id": 3572,
                        "pid": 358,
                        "name": "沙坝乡",
                        "level": 3
                    },
                    {
                        "id": 3573,
                        "pid": 358,
                        "name": "濯水镇",
                        "level": 3
                    },
                    {
                        "id": 3574,
                        "pid": 358,
                        "name": "白土乡",
                        "level": 3
                    },
                    {
                        "id": 3575,
                        "pid": 358,
                        "name": "白石乡",
                        "level": 3
                    },
                    {
                        "id": 3576,
                        "pid": 358,
                        "name": "石会镇",
                        "level": 3
                    },
                    {
                        "id": 3577,
                        "pid": 358,
                        "name": "石家镇",
                        "level": 3
                    },
                    {
                        "id": 3578,
                        "pid": 358,
                        "name": "舟白镇",
                        "level": 3
                    },
                    {
                        "id": 3579,
                        "pid": 358,
                        "name": "蓬东乡",
                        "level": 3
                    },
                    {
                        "id": 3580,
                        "pid": 358,
                        "name": "邻鄂镇",
                        "level": 3
                    },
                    {
                        "id": 3581,
                        "pid": 358,
                        "name": "金洞乡",
                        "level": 3
                    },
                    {
                        "id": 3582,
                        "pid": 358,
                        "name": "金溪镇",
                        "level": 3
                    },
                    {
                        "id": 3583,
                        "pid": 358,
                        "name": "马喇镇",
                        "level": 3
                    },
                    {
                        "id": 3584,
                        "pid": 358,
                        "name": "鹅池镇",
                        "level": 3
                    },
                    {
                        "id": 3585,
                        "pid": 358,
                        "name": "黄溪镇",
                        "level": 3
                    },
                    {
                        "id": 3586,
                        "pid": 358,
                        "name": "黎水镇",
                        "level": 3
                    },
                    {
                        "id": 3587,
                        "pid": 358,
                        "name": "黑溪镇",
                        "level": 3
                    }
                ]
            },
            {
                "id": 359,
                "pid": 22,
                "name": "长寿区",
                "level": 2,
                "children2": [
                    {
                        "id": 3588,
                        "pid": 359,
                        "name": "万顺镇",
                        "level": 3
                    },
                    {
                        "id": 3589,
                        "pid": 359,
                        "name": "云台镇",
                        "level": 3
                    },
                    {
                        "id": 3590,
                        "pid": 359,
                        "name": "云集镇",
                        "level": 3
                    },
                    {
                        "id": 3591,
                        "pid": 359,
                        "name": "但渡镇",
                        "level": 3
                    },
                    {
                        "id": 3592,
                        "pid": 359,
                        "name": "八颗镇",
                        "level": 3
                    },
                    {
                        "id": 3593,
                        "pid": 359,
                        "name": "凤城街道",
                        "level": 3
                    },
                    {
                        "id": 3594,
                        "pid": 359,
                        "name": "双龙镇",
                        "level": 3
                    },
                    {
                        "id": 3595,
                        "pid": 359,
                        "name": "新市镇",
                        "level": 3
                    },
                    {
                        "id": 3596,
                        "pid": 359,
                        "name": "晏家街道",
                        "level": 3
                    },
                    {
                        "id": 3597,
                        "pid": 359,
                        "name": "江南镇",
                        "level": 3
                    },
                    {
                        "id": 3598,
                        "pid": 359,
                        "name": "洪湖镇",
                        "level": 3
                    },
                    {
                        "id": 3599,
                        "pid": 359,
                        "name": "海棠镇",
                        "level": 3
                    },
                    {
                        "id": 3600,
                        "pid": 359,
                        "name": "渡舟镇",
                        "level": 3
                    },
                    {
                        "id": 3601,
                        "pid": 359,
                        "name": "石堰镇",
                        "level": 3
                    },
                    {
                        "id": 3602,
                        "pid": 359,
                        "name": "葛兰镇",
                        "level": 3
                    },
                    {
                        "id": 3603,
                        "pid": 359,
                        "name": "邻封镇",
                        "level": 3
                    },
                    {
                        "id": 3604,
                        "pid": 359,
                        "name": "长寿湖镇",
                        "level": 3
                    },
                    {
                        "id": 3605,
                        "pid": 359,
                        "name": "龙河镇",
                        "level": 3
                    }
                ]
            },
            {
                "id": 360,
                "pid": 22,
                "name": "綦江县",
                "level": 2,
                "children2": [
                    {
                        "id": 3606,
                        "pid": 360,
                        "name": "丁山镇",
                        "level": 3
                    },
                    {
                        "id": 3607,
                        "pid": 360,
                        "name": "三江镇",
                        "level": 3
                    },
                    {
                        "id": 3608,
                        "pid": 360,
                        "name": "三角镇",
                        "level": 3
                    },
                    {
                        "id": 3609,
                        "pid": 360,
                        "name": "东溪镇",
                        "level": 3
                    },
                    {
                        "id": 3610,
                        "pid": 360,
                        "name": "中峰镇",
                        "level": 3
                    },
                    {
                        "id": 3611,
                        "pid": 360,
                        "name": "古南镇",
                        "level": 3
                    },
                    {
                        "id": 3612,
                        "pid": 360,
                        "name": "安稳镇",
                        "level": 3
                    },
                    {
                        "id": 3613,
                        "pid": 360,
                        "name": "打通镇",
                        "level": 3
                    },
                    {
                        "id": 3614,
                        "pid": 360,
                        "name": "扶欢镇",
                        "level": 3
                    },
                    {
                        "id": 3615,
                        "pid": 360,
                        "name": "新盛镇",
                        "level": 3
                    },
                    {
                        "id": 3616,
                        "pid": 360,
                        "name": "横山镇",
                        "level": 3
                    },
                    {
                        "id": 3617,
                        "pid": 360,
                        "name": "永城镇",
                        "level": 3
                    },
                    {
                        "id": 3618,
                        "pid": 360,
                        "name": "永新镇",
                        "level": 3
                    },
                    {
                        "id": 3619,
                        "pid": 360,
                        "name": "石壕镇",
                        "level": 3
                    },
                    {
                        "id": 3620,
                        "pid": 360,
                        "name": "石角镇",
                        "level": 3
                    },
                    {
                        "id": 3621,
                        "pid": 360,
                        "name": "篆塘镇",
                        "level": 3
                    },
                    {
                        "id": 3622,
                        "pid": 360,
                        "name": "赶水镇",
                        "level": 3
                    },
                    {
                        "id": 3623,
                        "pid": 360,
                        "name": "郭扶镇",
                        "level": 3
                    },
                    {
                        "id": 3624,
                        "pid": 360,
                        "name": "隆盛镇",
                        "level": 3
                    }
                ]
            },
            {
                "id": 361,
                "pid": 22,
                "name": "潼南县",
                "level": 2,
                "children2": [
                    {
                        "id": 3625,
                        "pid": 361,
                        "name": "上和镇",
                        "level": 3
                    },
                    {
                        "id": 3626,
                        "pid": 361,
                        "name": "五桂镇",
                        "level": 3
                    },
                    {
                        "id": 3627,
                        "pid": 361,
                        "name": "别口乡",
                        "level": 3
                    },
                    {
                        "id": 3628,
                        "pid": 361,
                        "name": "卧佛镇",
                        "level": 3
                    },
                    {
                        "id": 3629,
                        "pid": 361,
                        "name": "双江镇",
                        "level": 3
                    },
                    {
                        "id": 3630,
                        "pid": 361,
                        "name": "古溪镇",
                        "level": 3
                    },
                    {
                        "id": 3631,
                        "pid": 361,
                        "name": "塘坝镇",
                        "level": 3
                    },
                    {
                        "id": 3632,
                        "pid": 361,
                        "name": "太安镇",
                        "level": 3
                    },
                    {
                        "id": 3633,
                        "pid": 361,
                        "name": "宝龙镇",
                        "level": 3
                    },
                    {
                        "id": 3634,
                        "pid": 361,
                        "name": "寿桥乡",
                        "level": 3
                    },
                    {
                        "id": 3635,
                        "pid": 361,
                        "name": "小渡镇",
                        "level": 3
                    },
                    {
                        "id": 3636,
                        "pid": 361,
                        "name": "崇龛镇",
                        "level": 3
                    },
                    {
                        "id": 3637,
                        "pid": 361,
                        "name": "新胜镇",
                        "level": 3
                    },
                    {
                        "id": 3638,
                        "pid": 361,
                        "name": "柏梓镇",
                        "level": 3
                    },
                    {
                        "id": 3639,
                        "pid": 361,
                        "name": "桂林街道",
                        "level": 3
                    },
                    {
                        "id": 3640,
                        "pid": 361,
                        "name": "梓潼街道",
                        "level": 3
                    },
                    {
                        "id": 3641,
                        "pid": 361,
                        "name": "玉溪镇",
                        "level": 3
                    },
                    {
                        "id": 3642,
                        "pid": 361,
                        "name": "田家乡",
                        "level": 3
                    },
                    {
                        "id": 3643,
                        "pid": 361,
                        "name": "米心镇",
                        "level": 3
                    },
                    {
                        "id": 3644,
                        "pid": 361,
                        "name": "群力镇",
                        "level": 3
                    },
                    {
                        "id": 3645,
                        "pid": 361,
                        "name": "花岩镇",
                        "level": 3
                    },
                    {
                        "id": 3646,
                        "pid": 361,
                        "name": "龙形镇",
                        "level": 3
                    }
                ]
            },
            {
                "id": 362,
                "pid": 22,
                "name": "铜梁县",
                "level": 2,
                "children2": [
                    {
                        "id": 3647,
                        "pid": 362,
                        "name": "东城街道",
                        "level": 3
                    },
                    {
                        "id": 3648,
                        "pid": 362,
                        "name": "二坪镇",
                        "level": 3
                    },
                    {
                        "id": 3649,
                        "pid": 362,
                        "name": "侣俸镇",
                        "level": 3
                    },
                    {
                        "id": 3650,
                        "pid": 362,
                        "name": "华兴镇",
                        "level": 3
                    },
                    {
                        "id": 3651,
                        "pid": 362,
                        "name": "南城街道",
                        "level": 3
                    },
                    {
                        "id": 3652,
                        "pid": 362,
                        "name": "双山乡",
                        "level": 3
                    },
                    {
                        "id": 3653,
                        "pid": 362,
                        "name": "围龙镇",
                        "level": 3
                    },
                    {
                        "id": 3654,
                        "pid": 362,
                        "name": "土桥镇",
                        "level": 3
                    },
                    {
                        "id": 3655,
                        "pid": 362,
                        "name": "大庙镇",
                        "level": 3
                    },
                    {
                        "id": 3656,
                        "pid": 362,
                        "name": "太平镇",
                        "level": 3
                    },
                    {
                        "id": 3657,
                        "pid": 362,
                        "name": "安居镇",
                        "level": 3
                    },
                    {
                        "id": 3658,
                        "pid": 362,
                        "name": "安溪镇",
                        "level": 3
                    },
                    {
                        "id": 3659,
                        "pid": 362,
                        "name": "小林乡",
                        "level": 3
                    },
                    {
                        "id": 3660,
                        "pid": 362,
                        "name": "少云镇",
                        "level": 3
                    },
                    {
                        "id": 3661,
                        "pid": 362,
                        "name": "巴川街道",
                        "level": 3
                    },
                    {
                        "id": 3662,
                        "pid": 362,
                        "name": "平滩镇",
                        "level": 3
                    },
                    {
                        "id": 3663,
                        "pid": 362,
                        "name": "庆隆乡",
                        "level": 3
                    },
                    {
                        "id": 3664,
                        "pid": 362,
                        "name": "旧县镇",
                        "level": 3
                    },
                    {
                        "id": 3665,
                        "pid": 362,
                        "name": "水口镇",
                        "level": 3
                    },
                    {
                        "id": 3666,
                        "pid": 362,
                        "name": "永嘉镇",
                        "level": 3
                    },
                    {
                        "id": 3667,
                        "pid": 362,
                        "name": "白羊镇",
                        "level": 3
                    },
                    {
                        "id": 3668,
                        "pid": 362,
                        "name": "石鱼镇",
                        "level": 3
                    },
                    {
                        "id": 3669,
                        "pid": 362,
                        "name": "福果镇",
                        "level": 3
                    },
                    {
                        "id": 3670,
                        "pid": 362,
                        "name": "维新镇",
                        "level": 3
                    },
                    {
                        "id": 3671,
                        "pid": 362,
                        "name": "蒲吕镇",
                        "level": 3
                    },
                    {
                        "id": 3672,
                        "pid": 362,
                        "name": "虎峰镇",
                        "level": 3
                    },
                    {
                        "id": 3673,
                        "pid": 362,
                        "name": "西河镇",
                        "level": 3
                    },
                    {
                        "id": 3674,
                        "pid": 362,
                        "name": "高楼镇",
                        "level": 3
                    }
                ]
            },
            {
                "id": 363,
                "pid": 22,
                "name": "大足县",
                "level": 2,
                "children2": [
                    {
                        "id": 3675,
                        "pid": 363,
                        "name": "万古镇",
                        "level": 3
                    },
                    {
                        "id": 3676,
                        "pid": 363,
                        "name": "三驱镇",
                        "level": 3
                    },
                    {
                        "id": 3677,
                        "pid": 363,
                        "name": "中敖镇",
                        "level": 3
                    },
                    {
                        "id": 3678,
                        "pid": 363,
                        "name": "古龙乡",
                        "level": 3
                    },
                    {
                        "id": 3679,
                        "pid": 363,
                        "name": "回龙镇",
                        "level": 3
                    },
                    {
                        "id": 3680,
                        "pid": 363,
                        "name": "国梁镇",
                        "level": 3
                    },
                    {
                        "id": 3681,
                        "pid": 363,
                        "name": "季家镇",
                        "level": 3
                    },
                    {
                        "id": 3682,
                        "pid": 363,
                        "name": "宝兴镇",
                        "level": 3
                    },
                    {
                        "id": 3683,
                        "pid": 363,
                        "name": "宝顶镇",
                        "level": 3
                    },
                    {
                        "id": 3684,
                        "pid": 363,
                        "name": "拾万镇",
                        "level": 3
                    },
                    {
                        "id": 3685,
                        "pid": 363,
                        "name": "智凤镇",
                        "level": 3
                    },
                    {
                        "id": 3686,
                        "pid": 363,
                        "name": "棠香街道",
                        "level": 3
                    },
                    {
                        "id": 3687,
                        "pid": 363,
                        "name": "玉龙镇",
                        "level": 3
                    },
                    {
                        "id": 3688,
                        "pid": 363,
                        "name": "珠溪镇",
                        "level": 3
                    },
                    {
                        "id": 3689,
                        "pid": 363,
                        "name": "石马镇",
                        "level": 3
                    },
                    {
                        "id": 3690,
                        "pid": 363,
                        "name": "邮亭镇",
                        "level": 3
                    },
                    {
                        "id": 3691,
                        "pid": 363,
                        "name": "金山镇",
                        "level": 3
                    },
                    {
                        "id": 3692,
                        "pid": 363,
                        "name": "铁山镇",
                        "level": 3
                    },
                    {
                        "id": 3693,
                        "pid": 363,
                        "name": "雍溪镇",
                        "level": 3
                    },
                    {
                        "id": 3694,
                        "pid": 363,
                        "name": "高升场镇",
                        "level": 3
                    },
                    {
                        "id": 3695,
                        "pid": 363,
                        "name": "高坪乡",
                        "level": 3
                    },
                    {
                        "id": 3696,
                        "pid": 363,
                        "name": "龙岗街道",
                        "level": 3
                    },
                    {
                        "id": 3697,
                        "pid": 363,
                        "name": "龙水镇",
                        "level": 3
                    },
                    {
                        "id": 3698,
                        "pid": 363,
                        "name": "龙石镇",
                        "level": 3
                    }
                ]
            },
            {
                "id": 364,
                "pid": 22,
                "name": "荣昌县",
                "level": 2,
                "children2": [
                    {
                        "id": 3699,
                        "pid": 364,
                        "name": "仁义镇",
                        "level": 3
                    },
                    {
                        "id": 3700,
                        "pid": 364,
                        "name": "双河镇",
                        "level": 3
                    },
                    {
                        "id": 3701,
                        "pid": 364,
                        "name": "古昌镇",
                        "level": 3
                    },
                    {
                        "id": 3702,
                        "pid": 364,
                        "name": "吴家镇",
                        "level": 3
                    },
                    {
                        "id": 3703,
                        "pid": 364,
                        "name": "安富镇",
                        "level": 3
                    },
                    {
                        "id": 3704,
                        "pid": 364,
                        "name": "峰高镇",
                        "level": 3
                    },
                    {
                        "id": 3705,
                        "pid": 364,
                        "name": "广顺镇",
                        "level": 3
                    },
                    {
                        "id": 3706,
                        "pid": 364,
                        "name": "昌元镇",
                        "level": 3
                    },
                    {
                        "id": 3707,
                        "pid": 364,
                        "name": "河包镇",
                        "level": 3
                    },
                    {
                        "id": 3708,
                        "pid": 364,
                        "name": "清升镇",
                        "level": 3
                    },
                    {
                        "id": 3709,
                        "pid": 364,
                        "name": "清江镇",
                        "level": 3
                    },
                    {
                        "id": 3710,
                        "pid": 364,
                        "name": "清流镇",
                        "level": 3
                    },
                    {
                        "id": 3711,
                        "pid": 364,
                        "name": "盘龙镇",
                        "level": 3
                    },
                    {
                        "id": 3712,
                        "pid": 364,
                        "name": "直升镇",
                        "level": 3
                    },
                    {
                        "id": 3713,
                        "pid": 364,
                        "name": "荣隆镇",
                        "level": 3
                    },
                    {
                        "id": 3714,
                        "pid": 364,
                        "name": "观胜镇",
                        "level": 3
                    },
                    {
                        "id": 3715,
                        "pid": 364,
                        "name": "路孔镇",
                        "level": 3
                    },
                    {
                        "id": 3716,
                        "pid": 364,
                        "name": "远觉镇",
                        "level": 3
                    },
                    {
                        "id": 3717,
                        "pid": 364,
                        "name": "铜鼓镇",
                        "level": 3
                    },
                    {
                        "id": 3718,
                        "pid": 364,
                        "name": "龙集镇",
                        "level": 3
                    }
                ]
            },
            {
                "id": 365,
                "pid": 22,
                "name": "璧山县",
                "level": 2,
                "children2": [
                    {
                        "id": 3719,
                        "pid": 365,
                        "name": "丁家镇",
                        "level": 3
                    },
                    {
                        "id": 3720,
                        "pid": 365,
                        "name": "七塘镇",
                        "level": 3
                    },
                    {
                        "id": 3721,
                        "pid": 365,
                        "name": "三合镇",
                        "level": 3
                    },
                    {
                        "id": 3722,
                        "pid": 365,
                        "name": "健龙乡",
                        "level": 3
                    },
                    {
                        "id": 3723,
                        "pid": 365,
                        "name": "八塘镇",
                        "level": 3
                    },
                    {
                        "id": 3724,
                        "pid": 365,
                        "name": "大兴镇",
                        "level": 3
                    },
                    {
                        "id": 3725,
                        "pid": 365,
                        "name": "大路镇",
                        "level": 3
                    },
                    {
                        "id": 3726,
                        "pid": 365,
                        "name": "广普镇",
                        "level": 3
                    },
                    {
                        "id": 3727,
                        "pid": 365,
                        "name": "正兴镇",
                        "level": 3
                    },
                    {
                        "id": 3728,
                        "pid": 365,
                        "name": "河边镇",
                        "level": 3
                    },
                    {
                        "id": 3729,
                        "pid": 365,
                        "name": "璧城街道",
                        "level": 3
                    },
                    {
                        "id": 3730,
                        "pid": 365,
                        "name": "福禄镇",
                        "level": 3
                    },
                    {
                        "id": 3731,
                        "pid": 365,
                        "name": "青杠街道",
                        "level": 3
                    }
                ]
            },
            {
                "id": 366,
                "pid": 22,
                "name": "梁平县",
                "level": 2,
                "children2": [
                    {
                        "id": 3732,
                        "pid": 366,
                        "name": "七星镇",
                        "level": 3
                    },
                    {
                        "id": 3733,
                        "pid": 366,
                        "name": "云龙镇",
                        "level": 3
                    },
                    {
                        "id": 3734,
                        "pid": 366,
                        "name": "仁贤镇",
                        "level": 3
                    },
                    {
                        "id": 3735,
                        "pid": 366,
                        "name": "合兴镇",
                        "level": 3
                    },
                    {
                        "id": 3736,
                        "pid": 366,
                        "name": "和林镇",
                        "level": 3
                    },
                    {
                        "id": 3737,
                        "pid": 366,
                        "name": "回龙镇",
                        "level": 3
                    },
                    {
                        "id": 3738,
                        "pid": 366,
                        "name": "城东乡",
                        "level": 3
                    },
                    {
                        "id": 3739,
                        "pid": 366,
                        "name": "城北乡",
                        "level": 3
                    },
                    {
                        "id": 3740,
                        "pid": 366,
                        "name": "复平乡",
                        "level": 3
                    },
                    {
                        "id": 3741,
                        "pid": 366,
                        "name": "大观镇",
                        "level": 3
                    },
                    {
                        "id": 3742,
                        "pid": 366,
                        "name": "安胜乡",
                        "level": 3
                    },
                    {
                        "id": 3743,
                        "pid": 366,
                        "name": "屏锦镇",
                        "level": 3
                    },
                    {
                        "id": 3744,
                        "pid": 366,
                        "name": "文化镇",
                        "level": 3
                    },
                    {
                        "id": 3745,
                        "pid": 366,
                        "name": "新盛镇",
                        "level": 3
                    },
                    {
                        "id": 3746,
                        "pid": 366,
                        "name": "明达镇",
                        "level": 3
                    },
                    {
                        "id": 3747,
                        "pid": 366,
                        "name": "曲水乡",
                        "level": 3
                    },
                    {
                        "id": 3748,
                        "pid": 366,
                        "name": "柏家镇",
                        "level": 3
                    },
                    {
                        "id": 3749,
                        "pid": 366,
                        "name": "梁山镇",
                        "level": 3
                    },
                    {
                        "id": 3750,
                        "pid": 366,
                        "name": "石安镇",
                        "level": 3
                    },
                    {
                        "id": 3751,
                        "pid": 366,
                        "name": "碧山镇",
                        "level": 3
                    },
                    {
                        "id": 3752,
                        "pid": 366,
                        "name": "礼让镇",
                        "level": 3
                    },
                    {
                        "id": 3753,
                        "pid": 366,
                        "name": "福禄镇",
                        "level": 3
                    },
                    {
                        "id": 3754,
                        "pid": 366,
                        "name": "竹山镇",
                        "level": 3
                    },
                    {
                        "id": 3755,
                        "pid": 366,
                        "name": "紫照乡",
                        "level": 3
                    },
                    {
                        "id": 3756,
                        "pid": 366,
                        "name": "聚奎镇",
                        "level": 3
                    },
                    {
                        "id": 3757,
                        "pid": 366,
                        "name": "荫平镇",
                        "level": 3
                    },
                    {
                        "id": 3758,
                        "pid": 366,
                        "name": "虎城镇",
                        "level": 3
                    },
                    {
                        "id": 3759,
                        "pid": 366,
                        "name": "蟠龙镇",
                        "level": 3
                    },
                    {
                        "id": 3760,
                        "pid": 366,
                        "name": "袁驿镇",
                        "level": 3
                    },
                    {
                        "id": 3761,
                        "pid": 366,
                        "name": "金带镇",
                        "level": 3
                    },
                    {
                        "id": 3762,
                        "pid": 366,
                        "name": "铁门乡",
                        "level": 3
                    },
                    {
                        "id": 3763,
                        "pid": 366,
                        "name": "龙胜乡",
                        "level": 3
                    },
                    {
                        "id": 3764,
                        "pid": 366,
                        "name": "龙门镇",
                        "level": 3
                    }
                ]
            },
            {
                "id": 367,
                "pid": 22,
                "name": "城口县",
                "level": 2,
                "children2": [
                    {
                        "id": 3765,
                        "pid": 367,
                        "name": "东安乡",
                        "level": 3
                    },
                    {
                        "id": 3766,
                        "pid": 367,
                        "name": "修齐镇",
                        "level": 3
                    },
                    {
                        "id": 3767,
                        "pid": 367,
                        "name": "北屏乡",
                        "level": 3
                    },
                    {
                        "id": 3768,
                        "pid": 367,
                        "name": "厚坪乡",
                        "level": 3
                    },
                    {
                        "id": 3769,
                        "pid": 367,
                        "name": "双河乡",
                        "level": 3
                    },
                    {
                        "id": 3770,
                        "pid": 367,
                        "name": "周溪乡",
                        "level": 3
                    },
                    {
                        "id": 3771,
                        "pid": 367,
                        "name": "咸宜乡",
                        "level": 3
                    },
                    {
                        "id": 3772,
                        "pid": 367,
                        "name": "坪坝镇",
                        "level": 3
                    },
                    {
                        "id": 3773,
                        "pid": 367,
                        "name": "岚天乡",
                        "level": 3
                    },
                    {
                        "id": 3774,
                        "pid": 367,
                        "name": "左岚乡",
                        "level": 3
                    },
                    {
                        "id": 3775,
                        "pid": 367,
                        "name": "巴山镇",
                        "level": 3
                    },
                    {
                        "id": 3776,
                        "pid": 367,
                        "name": "庙坝镇",
                        "level": 3
                    },
                    {
                        "id": 3777,
                        "pid": 367,
                        "name": "明中乡",
                        "level": 3
                    },
                    {
                        "id": 3778,
                        "pid": 367,
                        "name": "明通镇",
                        "level": 3
                    },
                    {
                        "id": 3779,
                        "pid": 367,
                        "name": "河鱼乡",
                        "level": 3
                    },
                    {
                        "id": 3780,
                        "pid": 367,
                        "name": "治平乡",
                        "level": 3
                    },
                    {
                        "id": 3781,
                        "pid": 367,
                        "name": "沿河乡",
                        "level": 3
                    },
                    {
                        "id": 3782,
                        "pid": 367,
                        "name": "葛城镇",
                        "level": 3
                    },
                    {
                        "id": 3783,
                        "pid": 367,
                        "name": "蓼子乡",
                        "level": 3
                    },
                    {
                        "id": 3784,
                        "pid": 367,
                        "name": "高楠乡",
                        "level": 3
                    },
                    {
                        "id": 3785,
                        "pid": 367,
                        "name": "高燕乡",
                        "level": 3
                    },
                    {
                        "id": 3786,
                        "pid": 367,
                        "name": "高观镇",
                        "level": 3
                    },
                    {
                        "id": 3787,
                        "pid": 367,
                        "name": "鸡鸣乡",
                        "level": 3
                    },
                    {
                        "id": 3788,
                        "pid": 367,
                        "name": "龙田乡",
                        "level": 3
                    }
                ]
            },
            {
                "id": 368,
                "pid": 22,
                "name": "丰都县",
                "level": 2,
                "children2": [
                    {
                        "id": 3789,
                        "pid": 368,
                        "name": "三元镇",
                        "level": 3
                    },
                    {
                        "id": 3790,
                        "pid": 368,
                        "name": "三合镇",
                        "level": 3
                    },
                    {
                        "id": 3791,
                        "pid": 368,
                        "name": "三坝乡",
                        "level": 3
                    },
                    {
                        "id": 3792,
                        "pid": 368,
                        "name": "三建乡",
                        "level": 3
                    },
                    {
                        "id": 3793,
                        "pid": 368,
                        "name": "仁沙乡",
                        "level": 3
                    },
                    {
                        "id": 3794,
                        "pid": 368,
                        "name": "保合乡",
                        "level": 3
                    },
                    {
                        "id": 3795,
                        "pid": 368,
                        "name": "兴义镇",
                        "level": 3
                    },
                    {
                        "id": 3796,
                        "pid": 368,
                        "name": "包鸾镇",
                        "level": 3
                    },
                    {
                        "id": 3797,
                        "pid": 368,
                        "name": "十直镇",
                        "level": 3
                    },
                    {
                        "id": 3798,
                        "pid": 368,
                        "name": "南天湖镇",
                        "level": 3
                    },
                    {
                        "id": 3799,
                        "pid": 368,
                        "name": "双路镇",
                        "level": 3
                    },
                    {
                        "id": 3800,
                        "pid": 368,
                        "name": "双龙场乡",
                        "level": 3
                    },
                    {
                        "id": 3801,
                        "pid": 368,
                        "name": "名山镇",
                        "level": 3
                    },
                    {
                        "id": 3802,
                        "pid": 368,
                        "name": "太平坝乡",
                        "level": 3
                    },
                    {
                        "id": 3803,
                        "pid": 368,
                        "name": "崇兴乡",
                        "level": 3
                    },
                    {
                        "id": 3804,
                        "pid": 368,
                        "name": "暨龙乡",
                        "level": 3
                    },
                    {
                        "id": 3805,
                        "pid": 368,
                        "name": "树人镇",
                        "level": 3
                    },
                    {
                        "id": 3806,
                        "pid": 368,
                        "name": "栗子乡",
                        "level": 3
                    },
                    {
                        "id": 3807,
                        "pid": 368,
                        "name": "武平镇",
                        "level": 3
                    },
                    {
                        "id": 3808,
                        "pid": 368,
                        "name": "江池镇",
                        "level": 3
                    },
                    {
                        "id": 3809,
                        "pid": 368,
                        "name": "湛普镇",
                        "level": 3
                    },
                    {
                        "id": 3810,
                        "pid": 368,
                        "name": "社坛镇",
                        "level": 3
                    },
                    {
                        "id": 3811,
                        "pid": 368,
                        "name": "董家镇",
                        "level": 3
                    },
                    {
                        "id": 3812,
                        "pid": 368,
                        "name": "虎威镇",
                        "level": 3
                    },
                    {
                        "id": 3813,
                        "pid": 368,
                        "name": "许明寺镇",
                        "level": 3
                    },
                    {
                        "id": 3814,
                        "pid": 368,
                        "name": "都督乡",
                        "level": 3
                    },
                    {
                        "id": 3815,
                        "pid": 368,
                        "name": "镇江镇",
                        "level": 3
                    },
                    {
                        "id": 3816,
                        "pid": 368,
                        "name": "青龙乡",
                        "level": 3
                    },
                    {
                        "id": 3817,
                        "pid": 368,
                        "name": "高家镇",
                        "level": 3
                    },
                    {
                        "id": 3818,
                        "pid": 368,
                        "name": "龙孔乡",
                        "level": 3
                    },
                    {
                        "id": 3819,
                        "pid": 368,
                        "name": "龙河镇",
                        "level": 3
                    }
                ]
            },
            {
                "id": 369,
                "pid": 22,
                "name": "垫江县",
                "level": 2,
                "children2": [
                    {
                        "id": 3820,
                        "pid": 369,
                        "name": "三溪乡",
                        "level": 3
                    },
                    {
                        "id": 3821,
                        "pid": 369,
                        "name": "五洞镇",
                        "level": 3
                    },
                    {
                        "id": 3822,
                        "pid": 369,
                        "name": "包家乡",
                        "level": 3
                    },
                    {
                        "id": 3823,
                        "pid": 369,
                        "name": "周嘉镇",
                        "level": 3
                    },
                    {
                        "id": 3824,
                        "pid": 369,
                        "name": "坪山镇",
                        "level": 3
                    },
                    {
                        "id": 3825,
                        "pid": 369,
                        "name": "大石乡",
                        "level": 3
                    },
                    {
                        "id": 3826,
                        "pid": 369,
                        "name": "太平镇",
                        "level": 3
                    },
                    {
                        "id": 3827,
                        "pid": 369,
                        "name": "新民镇",
                        "level": 3
                    },
                    {
                        "id": 3828,
                        "pid": 369,
                        "name": "普顺镇",
                        "level": 3
                    },
                    {
                        "id": 3829,
                        "pid": 369,
                        "name": "曹回乡",
                        "level": 3
                    },
                    {
                        "id": 3830,
                        "pid": 369,
                        "name": "杠家乡",
                        "level": 3
                    },
                    {
                        "id": 3831,
                        "pid": 369,
                        "name": "桂溪镇",
                        "level": 3
                    },
                    {
                        "id": 3832,
                        "pid": 369,
                        "name": "永安镇",
                        "level": 3
                    },
                    {
                        "id": 3833,
                        "pid": 369,
                        "name": "永平乡",
                        "level": 3
                    },
                    {
                        "id": 3834,
                        "pid": 369,
                        "name": "沙坪镇",
                        "level": 3
                    },
                    {
                        "id": 3835,
                        "pid": 369,
                        "name": "沙河乡",
                        "level": 3
                    },
                    {
                        "id": 3836,
                        "pid": 369,
                        "name": "澄溪镇",
                        "level": 3
                    },
                    {
                        "id": 3837,
                        "pid": 369,
                        "name": "白家乡",
                        "level": 3
                    },
                    {
                        "id": 3838,
                        "pid": 369,
                        "name": "砚台镇",
                        "level": 3
                    },
                    {
                        "id": 3839,
                        "pid": 369,
                        "name": "裴兴乡",
                        "level": 3
                    },
                    {
                        "id": 3840,
                        "pid": 369,
                        "name": "长龙乡",
                        "level": 3
                    },
                    {
                        "id": 3841,
                        "pid": 369,
                        "name": "高安镇",
                        "level": 3
                    },
                    {
                        "id": 3842,
                        "pid": 369,
                        "name": "高峰镇",
                        "level": 3
                    },
                    {
                        "id": 3843,
                        "pid": 369,
                        "name": "鹤游镇",
                        "level": 3
                    },
                    {
                        "id": 3844,
                        "pid": 369,
                        "name": "黄沙乡",
                        "level": 3
                    }
                ]
            },
            {
                "id": 370,
                "pid": 22,
                "name": "武隆县",
                "level": 2,
                "children2": [
                    {
                        "id": 3845,
                        "pid": 370,
                        "name": "仙女山镇",
                        "level": 3
                    },
                    {
                        "id": 3846,
                        "pid": 370,
                        "name": "凤来乡",
                        "level": 3
                    },
                    {
                        "id": 3847,
                        "pid": 370,
                        "name": "双河乡",
                        "level": 3
                    },
                    {
                        "id": 3848,
                        "pid": 370,
                        "name": "后坪乡",
                        "level": 3
                    },
                    {
                        "id": 3849,
                        "pid": 370,
                        "name": "和顺乡",
                        "level": 3
                    },
                    {
                        "id": 3850,
                        "pid": 370,
                        "name": "土地乡",
                        "level": 3
                    },
                    {
                        "id": 3851,
                        "pid": 370,
                        "name": "土坎镇",
                        "level": 3
                    },
                    {
                        "id": 3852,
                        "pid": 370,
                        "name": "巷口镇",
                        "level": 3
                    },
                    {
                        "id": 3853,
                        "pid": 370,
                        "name": "平桥镇",
                        "level": 3
                    },
                    {
                        "id": 3854,
                        "pid": 370,
                        "name": "庙垭乡",
                        "level": 3
                    },
                    {
                        "id": 3855,
                        "pid": 370,
                        "name": "接龙乡",
                        "level": 3
                    },
                    {
                        "id": 3856,
                        "pid": 370,
                        "name": "文复乡",
                        "level": 3
                    },
                    {
                        "id": 3857,
                        "pid": 370,
                        "name": "桐梓镇",
                        "level": 3
                    },
                    {
                        "id": 3858,
                        "pid": 370,
                        "name": "江口镇",
                        "level": 3
                    },
                    {
                        "id": 3859,
                        "pid": 370,
                        "name": "沧沟乡",
                        "level": 3
                    },
                    {
                        "id": 3860,
                        "pid": 370,
                        "name": "浩口乡",
                        "level": 3
                    },
                    {
                        "id": 3861,
                        "pid": 370,
                        "name": "火炉镇",
                        "level": 3
                    },
                    {
                        "id": 3862,
                        "pid": 370,
                        "name": "白云乡",
                        "level": 3
                    },
                    {
                        "id": 3863,
                        "pid": 370,
                        "name": "白马镇",
                        "level": 3
                    },
                    {
                        "id": 3864,
                        "pid": 370,
                        "name": "石桥乡",
                        "level": 3
                    },
                    {
                        "id": 3865,
                        "pid": 370,
                        "name": "羊角镇",
                        "level": 3
                    },
                    {
                        "id": 3866,
                        "pid": 370,
                        "name": "赵家乡",
                        "level": 3
                    },
                    {
                        "id": 3867,
                        "pid": 370,
                        "name": "铁矿乡",
                        "level": 3
                    },
                    {
                        "id": 3868,
                        "pid": 370,
                        "name": "长坝镇",
                        "level": 3
                    },
                    {
                        "id": 3869,
                        "pid": 370,
                        "name": "鸭江镇",
                        "level": 3
                    },
                    {
                        "id": 3870,
                        "pid": 370,
                        "name": "黄莺乡",
                        "level": 3
                    }
                ]
            },
            {
                "id": 371,
                "pid": 22,
                "name": "忠县",
                "level": 2,
                "children2": [
                    {
                        "id": 3871,
                        "pid": 371,
                        "name": "三汇镇",
                        "level": 3
                    },
                    {
                        "id": 3872,
                        "pid": 371,
                        "name": "东溪镇",
                        "level": 3
                    },
                    {
                        "id": 3873,
                        "pid": 371,
                        "name": "乌杨镇",
                        "level": 3
                    },
                    {
                        "id": 3874,
                        "pid": 371,
                        "name": "任家镇",
                        "level": 3
                    },
                    {
                        "id": 3875,
                        "pid": 371,
                        "name": "兴峰乡",
                        "level": 3
                    },
                    {
                        "id": 3876,
                        "pid": 371,
                        "name": "双桂镇",
                        "level": 3
                    },
                    {
                        "id": 3877,
                        "pid": 371,
                        "name": "善广乡",
                        "level": 3
                    },
                    {
                        "id": 3878,
                        "pid": 371,
                        "name": "复兴镇",
                        "level": 3
                    },
                    {
                        "id": 3879,
                        "pid": 371,
                        "name": "官坝镇",
                        "level": 3
                    },
                    {
                        "id": 3880,
                        "pid": 371,
                        "name": "忠州镇",
                        "level": 3
                    },
                    {
                        "id": 3881,
                        "pid": 371,
                        "name": "拔山镇",
                        "level": 3
                    },
                    {
                        "id": 3882,
                        "pid": 371,
                        "name": "新生镇",
                        "level": 3
                    },
                    {
                        "id": 3883,
                        "pid": 371,
                        "name": "新立镇",
                        "level": 3
                    },
                    {
                        "id": 3884,
                        "pid": 371,
                        "name": "永丰镇",
                        "level": 3
                    },
                    {
                        "id": 3885,
                        "pid": 371,
                        "name": "汝溪镇",
                        "level": 3
                    },
                    {
                        "id": 3886,
                        "pid": 371,
                        "name": "洋渡镇",
                        "level": 3
                    },
                    {
                        "id": 3887,
                        "pid": 371,
                        "name": "涂井乡",
                        "level": 3
                    },
                    {
                        "id": 3888,
                        "pid": 371,
                        "name": "白石镇",
                        "level": 3
                    },
                    {
                        "id": 3889,
                        "pid": 371,
                        "name": "石子乡",
                        "level": 3
                    },
                    {
                        "id": 3890,
                        "pid": 371,
                        "name": "石宝镇",
                        "level": 3
                    },
                    {
                        "id": 3891,
                        "pid": 371,
                        "name": "石黄镇",
                        "level": 3
                    },
                    {
                        "id": 3892,
                        "pid": 371,
                        "name": "磨子土家族乡",
                        "level": 3
                    },
                    {
                        "id": 3893,
                        "pid": 371,
                        "name": "花桥镇",
                        "level": 3
                    },
                    {
                        "id": 3894,
                        "pid": 371,
                        "name": "野鹤镇",
                        "level": 3
                    },
                    {
                        "id": 3895,
                        "pid": 371,
                        "name": "金声乡",
                        "level": 3
                    },
                    {
                        "id": 3896,
                        "pid": 371,
                        "name": "金鸡镇",
                        "level": 3
                    },
                    {
                        "id": 3897,
                        "pid": 371,
                        "name": "马灌镇",
                        "level": 3
                    },
                    {
                        "id": 3898,
                        "pid": 371,
                        "name": "黄金镇",
                        "level": 3
                    }
                ]
            },
            {
                "id": 372,
                "pid": 22,
                "name": "开县",
                "level": 2,
                "children2": [
                    {
                        "id": 3899,
                        "pid": 372,
                        "name": "三汇口乡",
                        "level": 3
                    },
                    {
                        "id": 3900,
                        "pid": 372,
                        "name": "中和镇",
                        "level": 3
                    },
                    {
                        "id": 3901,
                        "pid": 372,
                        "name": "丰乐街道",
                        "level": 3
                    },
                    {
                        "id": 3902,
                        "pid": 372,
                        "name": "临江镇",
                        "level": 3
                    },
                    {
                        "id": 3903,
                        "pid": 372,
                        "name": "义和镇",
                        "level": 3
                    },
                    {
                        "id": 3904,
                        "pid": 372,
                        "name": "九龙山镇",
                        "level": 3
                    },
                    {
                        "id": 3905,
                        "pid": 372,
                        "name": "五通乡",
                        "level": 3
                    },
                    {
                        "id": 3906,
                        "pid": 372,
                        "name": "关面乡",
                        "level": 3
                    },
                    {
                        "id": 3907,
                        "pid": 372,
                        "name": "南门镇",
                        "level": 3
                    },
                    {
                        "id": 3908,
                        "pid": 372,
                        "name": "南雅镇",
                        "level": 3
                    },
                    {
                        "id": 3909,
                        "pid": 372,
                        "name": "厚坝镇",
                        "level": 3
                    },
                    {
                        "id": 3910,
                        "pid": 372,
                        "name": "和谦镇",
                        "level": 3
                    },
                    {
                        "id": 3911,
                        "pid": 372,
                        "name": "大德乡",
                        "level": 3
                    },
                    {
                        "id": 3912,
                        "pid": 372,
                        "name": "大进镇",
                        "level": 3
                    },
                    {
                        "id": 3913,
                        "pid": 372,
                        "name": "天和乡",
                        "level": 3
                    },
                    {
                        "id": 3914,
                        "pid": 372,
                        "name": "岳溪镇",
                        "level": 3
                    },
                    {
                        "id": 3915,
                        "pid": 372,
                        "name": "巫山乡",
                        "level": 3
                    },
                    {
                        "id": 3916,
                        "pid": 372,
                        "name": "敦好镇",
                        "level": 3
                    },
                    {
                        "id": 3917,
                        "pid": 372,
                        "name": "汉丰街道",
                        "level": 3
                    },
                    {
                        "id": 3918,
                        "pid": 372,
                        "name": "河堰镇",
                        "level": 3
                    },
                    {
                        "id": 3919,
                        "pid": 372,
                        "name": "渠口镇",
                        "level": 3
                    },
                    {
                        "id": 3920,
                        "pid": 372,
                        "name": "温泉镇",
                        "level": 3
                    },
                    {
                        "id": 3921,
                        "pid": 372,
                        "name": "满月乡",
                        "level": 3
                    },
                    {
                        "id": 3922,
                        "pid": 372,
                        "name": "白桥乡",
                        "level": 3
                    },
                    {
                        "id": 3923,
                        "pid": 372,
                        "name": "白泉乡",
                        "level": 3
                    },
                    {
                        "id": 3924,
                        "pid": 372,
                        "name": "白鹤街道",
                        "level": 3
                    },
                    {
                        "id": 3925,
                        "pid": 372,
                        "name": "竹溪镇",
                        "level": 3
                    },
                    {
                        "id": 3926,
                        "pid": 372,
                        "name": "紫水乡",
                        "level": 3
                    },
                    {
                        "id": 3927,
                        "pid": 372,
                        "name": "谭家乡",
                        "level": 3
                    },
                    {
                        "id": 3928,
                        "pid": 372,
                        "name": "赵家镇",
                        "level": 3
                    },
                    {
                        "id": 3929,
                        "pid": 372,
                        "name": "郭家镇",
                        "level": 3
                    },
                    {
                        "id": 3930,
                        "pid": 372,
                        "name": "金峰乡",
                        "level": 3
                    },
                    {
                        "id": 3931,
                        "pid": 372,
                        "name": "铁桥镇",
                        "level": 3
                    },
                    {
                        "id": 3932,
                        "pid": 372,
                        "name": "镇东街道",
                        "level": 3
                    },
                    {
                        "id": 3933,
                        "pid": 372,
                        "name": "镇安镇",
                        "level": 3
                    },
                    {
                        "id": 3934,
                        "pid": 372,
                        "name": "长沙镇",
                        "level": 3
                    },
                    {
                        "id": 3935,
                        "pid": 372,
                        "name": "高桥镇",
                        "level": 3
                    },
                    {
                        "id": 3936,
                        "pid": 372,
                        "name": "麻柳乡",
                        "level": 3
                    }
                ]
            },
            {
                "id": 373,
                "pid": 22,
                "name": "云阳县",
                "level": 2,
                "children2": [
                    {
                        "id": 3937,
                        "pid": 373,
                        "name": "上坝乡",
                        "level": 3
                    },
                    {
                        "id": 3938,
                        "pid": 373,
                        "name": "云安镇",
                        "level": 3
                    },
                    {
                        "id": 3939,
                        "pid": 373,
                        "name": "云硐乡",
                        "level": 3
                    },
                    {
                        "id": 3940,
                        "pid": 373,
                        "name": "云阳镇",
                        "level": 3
                    },
                    {
                        "id": 3941,
                        "pid": 373,
                        "name": "人和镇",
                        "level": 3
                    },
                    {
                        "id": 3942,
                        "pid": 373,
                        "name": "养鹿乡",
                        "level": 3
                    },
                    {
                        "id": 3943,
                        "pid": 373,
                        "name": "农坝镇",
                        "level": 3
                    },
                    {
                        "id": 3944,
                        "pid": 373,
                        "name": "凤鸣镇",
                        "level": 3
                    },
                    {
                        "id": 3945,
                        "pid": 373,
                        "name": "南溪镇",
                        "level": 3
                    },
                    {
                        "id": 3946,
                        "pid": 373,
                        "name": "双土镇",
                        "level": 3
                    },
                    {
                        "id": 3947,
                        "pid": 373,
                        "name": "双江街道",
                        "level": 3
                    },
                    {
                        "id": 3948,
                        "pid": 373,
                        "name": "双龙乡",
                        "level": 3
                    },
                    {
                        "id": 3949,
                        "pid": 373,
                        "name": "后叶乡",
                        "level": 3
                    },
                    {
                        "id": 3950,
                        "pid": 373,
                        "name": "堰坪乡",
                        "level": 3
                    },
                    {
                        "id": 3951,
                        "pid": 373,
                        "name": "外郎乡",
                        "level": 3
                    },
                    {
                        "id": 3952,
                        "pid": 373,
                        "name": "大阳乡",
                        "level": 3
                    },
                    {
                        "id": 3953,
                        "pid": 373,
                        "name": "宝坪镇",
                        "level": 3
                    },
                    {
                        "id": 3954,
                        "pid": 373,
                        "name": "巴阳镇",
                        "level": 3
                    },
                    {
                        "id": 3955,
                        "pid": 373,
                        "name": "平安镇",
                        "level": 3
                    },
                    {
                        "id": 3956,
                        "pid": 373,
                        "name": "故陵镇",
                        "level": 3
                    },
                    {
                        "id": 3957,
                        "pid": 373,
                        "name": "新津乡",
                        "level": 3
                    },
                    {
                        "id": 3958,
                        "pid": 373,
                        "name": "普安乡",
                        "level": 3
                    },
                    {
                        "id": 3959,
                        "pid": 373,
                        "name": "栖霞乡",
                        "level": 3
                    },
                    {
                        "id": 3960,
                        "pid": 373,
                        "name": "桑坪镇",
                        "level": 3
                    },
                    {
                        "id": 3961,
                        "pid": 373,
                        "name": "毛坝乡",
                        "level": 3
                    },
                    {
                        "id": 3962,
                        "pid": 373,
                        "name": "水口乡",
                        "level": 3
                    },
                    {
                        "id": 3963,
                        "pid": 373,
                        "name": "江口镇",
                        "level": 3
                    },
                    {
                        "id": 3964,
                        "pid": 373,
                        "name": "沙市镇",
                        "level": 3
                    },
                    {
                        "id": 3965,
                        "pid": 373,
                        "name": "泥溪乡",
                        "level": 3
                    },
                    {
                        "id": 3966,
                        "pid": 373,
                        "name": "洞鹿乡",
                        "level": 3
                    },
                    {
                        "id": 3967,
                        "pid": 373,
                        "name": "清水土家族乡",
                        "level": 3
                    },
                    {
                        "id": 3968,
                        "pid": 373,
                        "name": "渠马镇",
                        "level": 3
                    },
                    {
                        "id": 3969,
                        "pid": 373,
                        "name": "盘龙镇",
                        "level": 3
                    },
                    {
                        "id": 3970,
                        "pid": 373,
                        "name": "石门乡",
                        "level": 3
                    },
                    {
                        "id": 3971,
                        "pid": 373,
                        "name": "票草乡",
                        "level": 3
                    },
                    {
                        "id": 3972,
                        "pid": 373,
                        "name": "红狮镇",
                        "level": 3
                    },
                    {
                        "id": 3973,
                        "pid": 373,
                        "name": "耀灵乡",
                        "level": 3
                    },
                    {
                        "id": 3974,
                        "pid": 373,
                        "name": "路阳镇",
                        "level": 3
                    },
                    {
                        "id": 3975,
                        "pid": 373,
                        "name": "青龙街道",
                        "level": 3
                    },
                    {
                        "id": 3976,
                        "pid": 373,
                        "name": "高阳镇",
                        "level": 3
                    },
                    {
                        "id": 3977,
                        "pid": 373,
                        "name": "鱼泉镇",
                        "level": 3
                    },
                    {
                        "id": 3978,
                        "pid": 373,
                        "name": "黄石镇",
                        "level": 3
                    },
                    {
                        "id": 3979,
                        "pid": 373,
                        "name": "龙洞乡",
                        "level": 3
                    },
                    {
                        "id": 3980,
                        "pid": 373,
                        "name": "龙角镇",
                        "level": 3
                    }
                ]
            },
            {
                "id": 374,
                "pid": 22,
                "name": "奉节县",
                "level": 2,
                "children2": [
                    {
                        "id": 3981,
                        "pid": 374,
                        "name": "云雾土家族乡",
                        "level": 3
                    },
                    {
                        "id": 3982,
                        "pid": 374,
                        "name": "五马乡",
                        "level": 3
                    },
                    {
                        "id": 3983,
                        "pid": 374,
                        "name": "公平镇",
                        "level": 3
                    },
                    {
                        "id": 3984,
                        "pid": 374,
                        "name": "兴隆镇",
                        "level": 3
                    },
                    {
                        "id": 3985,
                        "pid": 374,
                        "name": "冯坪乡",
                        "level": 3
                    },
                    {
                        "id": 3986,
                        "pid": 374,
                        "name": "吐祥镇",
                        "level": 3
                    },
                    {
                        "id": 3987,
                        "pid": 374,
                        "name": "大树镇",
                        "level": 3
                    },
                    {
                        "id": 3988,
                        "pid": 374,
                        "name": "太和乡",
                        "level": 3
                    },
                    {
                        "id": 3989,
                        "pid": 374,
                        "name": "安坪乡",
                        "level": 3
                    },
                    {
                        "id": 3990,
                        "pid": 374,
                        "name": "岩湾乡",
                        "level": 3
                    },
                    {
                        "id": 3991,
                        "pid": 374,
                        "name": "平安乡",
                        "level": 3
                    },
                    {
                        "id": 3992,
                        "pid": 374,
                        "name": "康乐镇",
                        "level": 3
                    },
                    {
                        "id": 3993,
                        "pid": 374,
                        "name": "康坪乡",
                        "level": 3
                    },
                    {
                        "id": 3994,
                        "pid": 374,
                        "name": "新政乡",
                        "level": 3
                    },
                    {
                        "id": 3995,
                        "pid": 374,
                        "name": "新民镇",
                        "level": 3
                    },
                    {
                        "id": 3996,
                        "pid": 374,
                        "name": "朱衣镇",
                        "level": 3
                    },
                    {
                        "id": 3997,
                        "pid": 374,
                        "name": "永乐镇",
                        "level": 3
                    },
                    {
                        "id": 3998,
                        "pid": 374,
                        "name": "永安镇",
                        "level": 3
                    },
                    {
                        "id": 3999,
                        "pid": 374,
                        "name": "汾河镇",
                        "level": 3
                    },
                    {
                        "id": 4000,
                        "pid": 374,
                        "name": "甲高镇",
                        "level": 3
                    },
                    {
                        "id": 4001,
                        "pid": 374,
                        "name": "白帝镇",
                        "level": 3
                    },
                    {
                        "id": 4002,
                        "pid": 374,
                        "name": "石岗乡",
                        "level": 3
                    },
                    {
                        "id": 4003,
                        "pid": 374,
                        "name": "竹园镇",
                        "level": 3
                    },
                    {
                        "id": 4004,
                        "pid": 374,
                        "name": "红土乡",
                        "level": 3
                    },
                    {
                        "id": 4005,
                        "pid": 374,
                        "name": "羊市镇",
                        "level": 3
                    },
                    {
                        "id": 4006,
                        "pid": 374,
                        "name": "草堂镇",
                        "level": 3
                    },
                    {
                        "id": 4007,
                        "pid": 374,
                        "name": "长安土家族乡",
                        "level": 3
                    },
                    {
                        "id": 4008,
                        "pid": 374,
                        "name": "青龙镇",
                        "level": 3
                    },
                    {
                        "id": 4009,
                        "pid": 374,
                        "name": "鹤峰乡",
                        "level": 3
                    },
                    {
                        "id": 4010,
                        "pid": 374,
                        "name": "龙桥土家族乡",
                        "level": 3
                    }
                ]
            },
            {
                "id": 375,
                "pid": 22,
                "name": "巫山县",
                "level": 2,
                "children2": [
                    {
                        "id": 4011,
                        "pid": 375,
                        "name": "三溪乡",
                        "level": 3
                    },
                    {
                        "id": 4012,
                        "pid": 375,
                        "name": "两坪乡",
                        "level": 3
                    },
                    {
                        "id": 4013,
                        "pid": 375,
                        "name": "双龙镇",
                        "level": 3
                    },
                    {
                        "id": 4014,
                        "pid": 375,
                        "name": "培石乡",
                        "level": 3
                    },
                    {
                        "id": 4015,
                        "pid": 375,
                        "name": "大昌镇",
                        "level": 3
                    },
                    {
                        "id": 4016,
                        "pid": 375,
                        "name": "大溪乡",
                        "level": 3
                    },
                    {
                        "id": 4017,
                        "pid": 375,
                        "name": "官渡镇",
                        "level": 3
                    },
                    {
                        "id": 4018,
                        "pid": 375,
                        "name": "官阳镇",
                        "level": 3
                    },
                    {
                        "id": 4019,
                        "pid": 375,
                        "name": "巫峡镇",
                        "level": 3
                    },
                    {
                        "id": 4020,
                        "pid": 375,
                        "name": "平河乡",
                        "level": 3
                    },
                    {
                        "id": 4021,
                        "pid": 375,
                        "name": "庙堂乡",
                        "level": 3
                    },
                    {
                        "id": 4022,
                        "pid": 375,
                        "name": "庙宇镇",
                        "level": 3
                    },
                    {
                        "id": 4023,
                        "pid": 375,
                        "name": "建平乡",
                        "level": 3
                    },
                    {
                        "id": 4024,
                        "pid": 375,
                        "name": "当阳乡",
                        "level": 3
                    },
                    {
                        "id": 4025,
                        "pid": 375,
                        "name": "抱龙镇",
                        "level": 3
                    },
                    {
                        "id": 4026,
                        "pid": 375,
                        "name": "曲尺乡",
                        "level": 3
                    },
                    {
                        "id": 4027,
                        "pid": 375,
                        "name": "福田镇",
                        "level": 3
                    },
                    {
                        "id": 4028,
                        "pid": 375,
                        "name": "竹贤乡",
                        "level": 3
                    },
                    {
                        "id": 4029,
                        "pid": 375,
                        "name": "笃坪乡",
                        "level": 3
                    },
                    {
                        "id": 4030,
                        "pid": 375,
                        "name": "红椿土家族乡",
                        "level": 3
                    },
                    {
                        "id": 4031,
                        "pid": 375,
                        "name": "邓家土家族乡",
                        "level": 3
                    },
                    {
                        "id": 4032,
                        "pid": 375,
                        "name": "金坪乡",
                        "level": 3
                    },
                    {
                        "id": 4033,
                        "pid": 375,
                        "name": "铜鼓镇",
                        "level": 3
                    },
                    {
                        "id": 4034,
                        "pid": 375,
                        "name": "骡坪镇",
                        "level": 3
                    },
                    {
                        "id": 4035,
                        "pid": 375,
                        "name": "龙井乡",
                        "level": 3
                    },
                    {
                        "id": 4036,
                        "pid": 375,
                        "name": "龙溪镇",
                        "level": 3
                    }
                ]
            },
            {
                "id": 376,
                "pid": 22,
                "name": "巫溪县",
                "level": 2,
                "children2": [
                    {
                        "id": 4037,
                        "pid": 376,
                        "name": "上磺镇",
                        "level": 3
                    },
                    {
                        "id": 4038,
                        "pid": 376,
                        "name": "下堡镇",
                        "level": 3
                    },
                    {
                        "id": 4039,
                        "pid": 376,
                        "name": "中岗乡",
                        "level": 3
                    },
                    {
                        "id": 4040,
                        "pid": 376,
                        "name": "中梁乡",
                        "level": 3
                    },
                    {
                        "id": 4041,
                        "pid": 376,
                        "name": "乌龙乡",
                        "level": 3
                    },
                    {
                        "id": 4042,
                        "pid": 376,
                        "name": "兰英乡",
                        "level": 3
                    },
                    {
                        "id": 4043,
                        "pid": 376,
                        "name": "凤凰镇",
                        "level": 3
                    },
                    {
                        "id": 4044,
                        "pid": 376,
                        "name": "双阳乡",
                        "level": 3
                    },
                    {
                        "id": 4045,
                        "pid": 376,
                        "name": "古路镇",
                        "level": 3
                    },
                    {
                        "id": 4046,
                        "pid": 376,
                        "name": "土城乡",
                        "level": 3
                    },
                    {
                        "id": 4047,
                        "pid": 376,
                        "name": "城厢镇",
                        "level": 3
                    },
                    {
                        "id": 4048,
                        "pid": 376,
                        "name": "塘坊乡",
                        "level": 3
                    },
                    {
                        "id": 4049,
                        "pid": 376,
                        "name": "大河乡",
                        "level": 3
                    },
                    {
                        "id": 4050,
                        "pid": 376,
                        "name": "天元乡",
                        "level": 3
                    },
                    {
                        "id": 4051,
                        "pid": 376,
                        "name": "天星乡",
                        "level": 3
                    },
                    {
                        "id": 4052,
                        "pid": 376,
                        "name": "宁厂镇",
                        "level": 3
                    },
                    {
                        "id": 4053,
                        "pid": 376,
                        "name": "尖山镇",
                        "level": 3
                    },
                    {
                        "id": 4054,
                        "pid": 376,
                        "name": "峰灵乡",
                        "level": 3
                    },
                    {
                        "id": 4055,
                        "pid": 376,
                        "name": "徐家镇",
                        "level": 3
                    },
                    {
                        "id": 4056,
                        "pid": 376,
                        "name": "文峰镇",
                        "level": 3
                    },
                    {
                        "id": 4057,
                        "pid": 376,
                        "name": "朝阳洞乡",
                        "level": 3
                    },
                    {
                        "id": 4058,
                        "pid": 376,
                        "name": "田坝乡",
                        "level": 3
                    },
                    {
                        "id": 4059,
                        "pid": 376,
                        "name": "白鹿镇",
                        "level": 3
                    },
                    {
                        "id": 4060,
                        "pid": 376,
                        "name": "胜利乡",
                        "level": 3
                    },
                    {
                        "id": 4061,
                        "pid": 376,
                        "name": "花台乡",
                        "level": 3
                    },
                    {
                        "id": 4062,
                        "pid": 376,
                        "name": "菱角乡",
                        "level": 3
                    },
                    {
                        "id": 4063,
                        "pid": 376,
                        "name": "蒲莲乡",
                        "level": 3
                    },
                    {
                        "id": 4064,
                        "pid": 376,
                        "name": "通城乡",
                        "level": 3
                    },
                    {
                        "id": 4065,
                        "pid": 376,
                        "name": "长桂乡",
                        "level": 3
                    },
                    {
                        "id": 4066,
                        "pid": 376,
                        "name": "鱼鳞乡",
                        "level": 3
                    }
                ]
            },
            {
                "id": 377,
                "pid": 22,
                "name": "石柱土家族自治县",
                "level": 2,
                "children2": [
                    {
                        "id": 4067,
                        "pid": 377,
                        "name": "万朝乡",
                        "level": 3
                    },
                    {
                        "id": 4068,
                        "pid": 377,
                        "name": "三星乡",
                        "level": 3
                    },
                    {
                        "id": 4069,
                        "pid": 377,
                        "name": "三河乡",
                        "level": 3
                    },
                    {
                        "id": 4070,
                        "pid": 377,
                        "name": "三益乡",
                        "level": 3
                    },
                    {
                        "id": 4071,
                        "pid": 377,
                        "name": "下路镇",
                        "level": 3
                    },
                    {
                        "id": 4072,
                        "pid": 377,
                        "name": "中益乡",
                        "level": 3
                    },
                    {
                        "id": 4073,
                        "pid": 377,
                        "name": "临溪镇",
                        "level": 3
                    },
                    {
                        "id": 4074,
                        "pid": 377,
                        "name": "六塘乡",
                        "level": 3
                    },
                    {
                        "id": 4075,
                        "pid": 377,
                        "name": "冷水乡",
                        "level": 3
                    },
                    {
                        "id": 4076,
                        "pid": 377,
                        "name": "南宾镇",
                        "level": 3
                    },
                    {
                        "id": 4077,
                        "pid": 377,
                        "name": "大歇乡",
                        "level": 3
                    },
                    {
                        "id": 4078,
                        "pid": 377,
                        "name": "悦崃镇",
                        "level": 3
                    },
                    {
                        "id": 4079,
                        "pid": 377,
                        "name": "新乐乡",
                        "level": 3
                    },
                    {
                        "id": 4080,
                        "pid": 377,
                        "name": "枫木乡",
                        "level": 3
                    },
                    {
                        "id": 4081,
                        "pid": 377,
                        "name": "桥头乡",
                        "level": 3
                    },
                    {
                        "id": 4082,
                        "pid": 377,
                        "name": "沙子镇",
                        "level": 3
                    },
                    {
                        "id": 4083,
                        "pid": 377,
                        "name": "河嘴乡",
                        "level": 3
                    },
                    {
                        "id": 4084,
                        "pid": 377,
                        "name": "沿溪镇",
                        "level": 3
                    },
                    {
                        "id": 4085,
                        "pid": 377,
                        "name": "洗新乡",
                        "level": 3
                    },
                    {
                        "id": 4086,
                        "pid": 377,
                        "name": "渔池镇",
                        "level": 3
                    },
                    {
                        "id": 4087,
                        "pid": 377,
                        "name": "王场镇",
                        "level": 3
                    },
                    {
                        "id": 4088,
                        "pid": 377,
                        "name": "王家乡",
                        "level": 3
                    },
                    {
                        "id": 4089,
                        "pid": 377,
                        "name": "石家乡",
                        "level": 3
                    },
                    {
                        "id": 4090,
                        "pid": 377,
                        "name": "西沱镇",
                        "level": 3
                    },
                    {
                        "id": 4091,
                        "pid": 377,
                        "name": "金竹乡",
                        "level": 3
                    },
                    {
                        "id": 4092,
                        "pid": 377,
                        "name": "金铃乡",
                        "level": 3
                    },
                    {
                        "id": 4093,
                        "pid": 377,
                        "name": "马武镇",
                        "level": 3
                    },
                    {
                        "id": 4094,
                        "pid": 377,
                        "name": "黄水镇",
                        "level": 3
                    },
                    {
                        "id": 4095,
                        "pid": 377,
                        "name": "黄鹤乡",
                        "level": 3
                    },
                    {
                        "id": 4096,
                        "pid": 377,
                        "name": "黎场乡",
                        "level": 3
                    },
                    {
                        "id": 4097,
                        "pid": 377,
                        "name": "龙沙镇",
                        "level": 3
                    },
                    {
                        "id": 4098,
                        "pid": 377,
                        "name": "龙潭乡",
                        "level": 3
                    }
                ]
            },
            {
                "id": 378,
                "pid": 22,
                "name": "秀山土家族苗族自治县",
                "level": 2,
                "children2": [
                    {
                        "id": 4099,
                        "pid": 378,
                        "name": "中和镇",
                        "level": 3
                    },
                    {
                        "id": 4100,
                        "pid": 378,
                        "name": "中平乡",
                        "level": 3
                    },
                    {
                        "id": 4101,
                        "pid": 378,
                        "name": "保安乡",
                        "level": 3
                    },
                    {
                        "id": 4102,
                        "pid": 378,
                        "name": "兰桥镇",
                        "level": 3
                    },
                    {
                        "id": 4103,
                        "pid": 378,
                        "name": "塘坳乡",
                        "level": 3
                    },
                    {
                        "id": 4104,
                        "pid": 378,
                        "name": "大溪乡",
                        "level": 3
                    },
                    {
                        "id": 4105,
                        "pid": 378,
                        "name": "妙泉乡",
                        "level": 3
                    },
                    {
                        "id": 4106,
                        "pid": 378,
                        "name": "孝溪乡",
                        "level": 3
                    },
                    {
                        "id": 4107,
                        "pid": 378,
                        "name": "宋农乡",
                        "level": 3
                    },
                    {
                        "id": 4108,
                        "pid": 378,
                        "name": "官庄镇",
                        "level": 3
                    },
                    {
                        "id": 4109,
                        "pid": 378,
                        "name": "官舟乡",
                        "level": 3
                    },
                    {
                        "id": 4110,
                        "pid": 378,
                        "name": "岑溪乡",
                        "level": 3
                    },
                    {
                        "id": 4111,
                        "pid": 378,
                        "name": "峨溶镇",
                        "level": 3
                    },
                    {
                        "id": 4112,
                        "pid": 378,
                        "name": "巴家乡",
                        "level": 3
                    },
                    {
                        "id": 4113,
                        "pid": 378,
                        "name": "干川乡",
                        "level": 3
                    },
                    {
                        "id": 4114,
                        "pid": 378,
                        "name": "平凯镇",
                        "level": 3
                    },
                    {
                        "id": 4115,
                        "pid": 378,
                        "name": "平马乡",
                        "level": 3
                    },
                    {
                        "id": 4116,
                        "pid": 378,
                        "name": "梅江镇",
                        "level": 3
                    },
                    {
                        "id": 4117,
                        "pid": 378,
                        "name": "洪安镇",
                        "level": 3
                    },
                    {
                        "id": 4118,
                        "pid": 378,
                        "name": "海洋乡",
                        "level": 3
                    },
                    {
                        "id": 4119,
                        "pid": 378,
                        "name": "涌洞乡",
                        "level": 3
                    },
                    {
                        "id": 4120,
                        "pid": 378,
                        "name": "清溪场镇",
                        "level": 3
                    },
                    {
                        "id": 4121,
                        "pid": 378,
                        "name": "溪口乡",
                        "level": 3
                    },
                    {
                        "id": 4122,
                        "pid": 378,
                        "name": "溶溪镇",
                        "level": 3
                    },
                    {
                        "id": 4123,
                        "pid": 378,
                        "name": "石堤镇",
                        "level": 3
                    },
                    {
                        "id": 4124,
                        "pid": 378,
                        "name": "石耶镇",
                        "level": 3
                    },
                    {
                        "id": 4125,
                        "pid": 378,
                        "name": "膏田乡",
                        "level": 3
                    },
                    {
                        "id": 4126,
                        "pid": 378,
                        "name": "里仁乡",
                        "level": 3
                    },
                    {
                        "id": 4127,
                        "pid": 378,
                        "name": "钟灵乡",
                        "level": 3
                    },
                    {
                        "id": 4128,
                        "pid": 378,
                        "name": "隘口镇",
                        "level": 3
                    },
                    {
                        "id": 4129,
                        "pid": 378,
                        "name": "雅江镇",
                        "level": 3
                    },
                    {
                        "id": 4130,
                        "pid": 378,
                        "name": "龙池镇",
                        "level": 3
                    }
                ]
            },
            {
                "id": 379,
                "pid": 22,
                "name": "酉阳土家族苗族自治县",
                "level": 2,
                "children2": [
                    {
                        "id": 4131,
                        "pid": 379,
                        "name": "丁市镇",
                        "level": 3
                    },
                    {
                        "id": 4132,
                        "pid": 379,
                        "name": "万木乡",
                        "level": 3
                    },
                    {
                        "id": 4133,
                        "pid": 379,
                        "name": "两罾乡",
                        "level": 3
                    },
                    {
                        "id": 4134,
                        "pid": 379,
                        "name": "五福乡",
                        "level": 3
                    },
                    {
                        "id": 4135,
                        "pid": 379,
                        "name": "偏柏乡",
                        "level": 3
                    },
                    {
                        "id": 4136,
                        "pid": 379,
                        "name": "兴隆镇",
                        "level": 3
                    },
                    {
                        "id": 4137,
                        "pid": 379,
                        "name": "南腰界乡",
                        "level": 3
                    },
                    {
                        "id": 4138,
                        "pid": 379,
                        "name": "双泉乡",
                        "level": 3
                    },
                    {
                        "id": 4139,
                        "pid": 379,
                        "name": "可大乡",
                        "level": 3
                    },
                    {
                        "id": 4140,
                        "pid": 379,
                        "name": "后坪坝乡",
                        "level": 3
                    },
                    {
                        "id": 4141,
                        "pid": 379,
                        "name": "后溪镇",
                        "level": 3
                    },
                    {
                        "id": 4142,
                        "pid": 379,
                        "name": "大溪镇",
                        "level": 3
                    },
                    {
                        "id": 4143,
                        "pid": 379,
                        "name": "天馆乡",
                        "level": 3
                    },
                    {
                        "id": 4144,
                        "pid": 379,
                        "name": "官清乡",
                        "level": 3
                    },
                    {
                        "id": 4145,
                        "pid": 379,
                        "name": "宜居乡",
                        "level": 3
                    },
                    {
                        "id": 4146,
                        "pid": 379,
                        "name": "小河镇",
                        "level": 3
                    },
                    {
                        "id": 4147,
                        "pid": 379,
                        "name": "庙溪乡",
                        "level": 3
                    },
                    {
                        "id": 4148,
                        "pid": 379,
                        "name": "木叶乡",
                        "level": 3
                    },
                    {
                        "id": 4149,
                        "pid": 379,
                        "name": "李溪镇",
                        "level": 3
                    },
                    {
                        "id": 4150,
                        "pid": 379,
                        "name": "板桥乡",
                        "level": 3
                    },
                    {
                        "id": 4151,
                        "pid": 379,
                        "name": "板溪乡",
                        "level": 3
                    },
                    {
                        "id": 4152,
                        "pid": 379,
                        "name": "楠木乡",
                        "level": 3
                    },
                    {
                        "id": 4153,
                        "pid": 379,
                        "name": "毛坝乡",
                        "level": 3
                    },
                    {
                        "id": 4154,
                        "pid": 379,
                        "name": "江丰乡",
                        "level": 3
                    },
                    {
                        "id": 4155,
                        "pid": 379,
                        "name": "泔溪镇",
                        "level": 3
                    },
                    {
                        "id": 4156,
                        "pid": 379,
                        "name": "浪坪乡",
                        "level": 3
                    },
                    {
                        "id": 4157,
                        "pid": 379,
                        "name": "涂市乡",
                        "level": 3
                    },
                    {
                        "id": 4158,
                        "pid": 379,
                        "name": "清泉乡",
                        "level": 3
                    },
                    {
                        "id": 4159,
                        "pid": 379,
                        "name": "腴地乡",
                        "level": 3
                    },
                    {
                        "id": 4160,
                        "pid": 379,
                        "name": "花田乡",
                        "level": 3
                    },
                    {
                        "id": 4161,
                        "pid": 379,
                        "name": "苍岭镇",
                        "level": 3
                    },
                    {
                        "id": 4162,
                        "pid": 379,
                        "name": "车田乡",
                        "level": 3
                    },
                    {
                        "id": 4163,
                        "pid": 379,
                        "name": "酉酬镇",
                        "level": 3
                    },
                    {
                        "id": 4164,
                        "pid": 379,
                        "name": "钟多镇",
                        "level": 3
                    },
                    {
                        "id": 4165,
                        "pid": 379,
                        "name": "铜鼓乡",
                        "level": 3
                    },
                    {
                        "id": 4166,
                        "pid": 379,
                        "name": "麻旺镇",
                        "level": 3
                    },
                    {
                        "id": 4167,
                        "pid": 379,
                        "name": "黑水镇",
                        "level": 3
                    },
                    {
                        "id": 4168,
                        "pid": 379,
                        "name": "龙潭镇",
                        "level": 3
                    },
                    {
                        "id": 4169,
                        "pid": 379,
                        "name": "龚滩镇",
                        "level": 3
                    }
                ]
            },
            {
                "id": 380,
                "pid": 22,
                "name": "彭水苗族土家族自治县",
                "level": 2,
                "children2": [
                    {
                        "id": 4170,
                        "pid": 380,
                        "name": "万足乡",
                        "level": 3
                    },
                    {
                        "id": 4171,
                        "pid": 380,
                        "name": "三义乡",
                        "level": 3
                    },
                    {
                        "id": 4172,
                        "pid": 380,
                        "name": "乔梓乡",
                        "level": 3
                    },
                    {
                        "id": 4173,
                        "pid": 380,
                        "name": "保家镇",
                        "level": 3
                    },
                    {
                        "id": 4174,
                        "pid": 380,
                        "name": "双龙乡",
                        "level": 3
                    },
                    {
                        "id": 4175,
                        "pid": 380,
                        "name": "善感乡",
                        "level": 3
                    },
                    {
                        "id": 4176,
                        "pid": 380,
                        "name": "大垭乡",
                        "level": 3
                    },
                    {
                        "id": 4177,
                        "pid": 380,
                        "name": "太原乡",
                        "level": 3
                    },
                    {
                        "id": 4178,
                        "pid": 380,
                        "name": "小厂乡",
                        "level": 3
                    },
                    {
                        "id": 4179,
                        "pid": 380,
                        "name": "岩东乡",
                        "level": 3
                    },
                    {
                        "id": 4180,
                        "pid": 380,
                        "name": "平安乡",
                        "level": 3
                    },
                    {
                        "id": 4181,
                        "pid": 380,
                        "name": "新田乡",
                        "level": 3
                    },
                    {
                        "id": 4182,
                        "pid": 380,
                        "name": "普子镇",
                        "level": 3
                    },
                    {
                        "id": 4183,
                        "pid": 380,
                        "name": "朗溪乡",
                        "level": 3
                    },
                    {
                        "id": 4184,
                        "pid": 380,
                        "name": "桐楼乡",
                        "level": 3
                    },
                    {
                        "id": 4185,
                        "pid": 380,
                        "name": "桑柘镇",
                        "level": 3
                    },
                    {
                        "id": 4186,
                        "pid": 380,
                        "name": "梅子垭乡",
                        "level": 3
                    },
                    {
                        "id": 4187,
                        "pid": 380,
                        "name": "棣棠乡",
                        "level": 3
                    },
                    {
                        "id": 4188,
                        "pid": 380,
                        "name": "汉葭镇",
                        "level": 3
                    },
                    {
                        "id": 4189,
                        "pid": 380,
                        "name": "润溪乡",
                        "level": 3
                    },
                    {
                        "id": 4190,
                        "pid": 380,
                        "name": "石柳乡",
                        "level": 3
                    },
                    {
                        "id": 4191,
                        "pid": 380,
                        "name": "石盘乡",
                        "level": 3
                    },
                    {
                        "id": 4192,
                        "pid": 380,
                        "name": "联合乡",
                        "level": 3
                    },
                    {
                        "id": 4193,
                        "pid": 380,
                        "name": "芦塘乡",
                        "level": 3
                    },
                    {
                        "id": 4194,
                        "pid": 380,
                        "name": "诸佛乡",
                        "level": 3
                    },
                    {
                        "id": 4195,
                        "pid": 380,
                        "name": "走马乡",
                        "level": 3
                    },
                    {
                        "id": 4196,
                        "pid": 380,
                        "name": "迁乔乡",
                        "level": 3
                    },
                    {
                        "id": 4197,
                        "pid": 380,
                        "name": "连湖镇",
                        "level": 3
                    },
                    {
                        "id": 4198,
                        "pid": 380,
                        "name": "郁山镇",
                        "level": 3
                    },
                    {
                        "id": 4199,
                        "pid": 380,
                        "name": "长滩乡",
                        "level": 3
                    },
                    {
                        "id": 4200,
                        "pid": 380,
                        "name": "靛水乡",
                        "level": 3
                    },
                    {
                        "id": 4201,
                        "pid": 380,
                        "name": "鞍子乡",
                        "level": 3
                    },
                    {
                        "id": 4202,
                        "pid": 380,
                        "name": "高谷镇",
                        "level": 3
                    },
                    {
                        "id": 4203,
                        "pid": 380,
                        "name": "鹿角镇",
                        "level": 3
                    },
                    {
                        "id": 4204,
                        "pid": 380,
                        "name": "鹿鸣乡",
                        "level": 3
                    },
                    {
                        "id": 4205,
                        "pid": 380,
                        "name": "黄家镇",
                        "level": 3
                    },
                    {
                        "id": 4206,
                        "pid": 380,
                        "name": "龙塘乡",
                        "level": 3
                    },
                    {
                        "id": 4207,
                        "pid": 380,
                        "name": "龙射镇",
                        "level": 3
                    },
                    {
                        "id": 4208,
                        "pid": 380,
                        "name": "龙溪乡",
                        "level": 3
                    }
                ]
            },
            {
                "id": 381,
                "pid": 22,
                "name": "江津市",
                "level": 2,
                "children2": []
            },
            {
                "id": 382,
                "pid": 22,
                "name": "合川市",
                "level": 2,
                "children2": []
            },
            {
                "id": 383,
                "pid": 22,
                "name": "永川市",
                "level": 2,
                "children2": []
            },
            {
                "id": 384,
                "pid": 22,
                "name": "南川市",
                "level": 2,
                "children2": []
            }
        ]
    },
    {
        "id": 23,
        "pid": 0,
        "name": "四川省",
        "level": 1,
        "children": [
            {
                "id": 385,
                "pid": 23,
                "name": "成都市",
                "level": 2,
                "children2": [
                    {
                        "id": 4209,
                        "pid": 385,
                        "name": "双流县",
                        "level": 3
                    },
                    {
                        "id": 4210,
                        "pid": 385,
                        "name": "大邑县",
                        "level": 3
                    },
                    {
                        "id": 4211,
                        "pid": 385,
                        "name": "崇州市",
                        "level": 3
                    },
                    {
                        "id": 4212,
                        "pid": 385,
                        "name": "彭州市",
                        "level": 3
                    },
                    {
                        "id": 4213,
                        "pid": 385,
                        "name": "成华区",
                        "level": 3
                    },
                    {
                        "id": 4214,
                        "pid": 385,
                        "name": "新津县",
                        "level": 3
                    },
                    {
                        "id": 4215,
                        "pid": 385,
                        "name": "新都区",
                        "level": 3
                    },
                    {
                        "id": 4216,
                        "pid": 385,
                        "name": "武侯区",
                        "level": 3
                    },
                    {
                        "id": 4217,
                        "pid": 385,
                        "name": "温江区",
                        "level": 3
                    },
                    {
                        "id": 4218,
                        "pid": 385,
                        "name": "蒲江县",
                        "level": 3
                    },
                    {
                        "id": 4219,
                        "pid": 385,
                        "name": "邛崃市",
                        "level": 3
                    },
                    {
                        "id": 4220,
                        "pid": 385,
                        "name": "郫县",
                        "level": 3
                    },
                    {
                        "id": 4221,
                        "pid": 385,
                        "name": "都江堰市",
                        "level": 3
                    },
                    {
                        "id": 4222,
                        "pid": 385,
                        "name": "金堂县",
                        "level": 3
                    },
                    {
                        "id": 4223,
                        "pid": 385,
                        "name": "金牛区",
                        "level": 3
                    },
                    {
                        "id": 4224,
                        "pid": 385,
                        "name": "锦江区",
                        "level": 3
                    },
                    {
                        "id": 4225,
                        "pid": 385,
                        "name": "青白江区",
                        "level": 3
                    },
                    {
                        "id": 4226,
                        "pid": 385,
                        "name": "青羊区",
                        "level": 3
                    },
                    {
                        "id": 4227,
                        "pid": 385,
                        "name": "龙泉驿区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 386,
                "pid": 23,
                "name": "自贡市",
                "level": 2,
                "children2": [
                    {
                        "id": 4228,
                        "pid": 386,
                        "name": "大安区",
                        "level": 3
                    },
                    {
                        "id": 4229,
                        "pid": 386,
                        "name": "富顺县",
                        "level": 3
                    },
                    {
                        "id": 4230,
                        "pid": 386,
                        "name": "沿滩区",
                        "level": 3
                    },
                    {
                        "id": 4231,
                        "pid": 386,
                        "name": "自流井区",
                        "level": 3
                    },
                    {
                        "id": 4232,
                        "pid": 386,
                        "name": "荣县",
                        "level": 3
                    },
                    {
                        "id": 4233,
                        "pid": 386,
                        "name": "贡井区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 387,
                "pid": 23,
                "name": "攀枝花市",
                "level": 2,
                "children2": [
                    {
                        "id": 4234,
                        "pid": 387,
                        "name": "东区",
                        "level": 3
                    },
                    {
                        "id": 4235,
                        "pid": 387,
                        "name": "仁和区",
                        "level": 3
                    },
                    {
                        "id": 4236,
                        "pid": 387,
                        "name": "盐边县",
                        "level": 3
                    },
                    {
                        "id": 4237,
                        "pid": 387,
                        "name": "米易县",
                        "level": 3
                    },
                    {
                        "id": 4238,
                        "pid": 387,
                        "name": "西区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 388,
                "pid": 23,
                "name": "泸州市",
                "level": 2,
                "children2": [
                    {
                        "id": 4239,
                        "pid": 388,
                        "name": "叙永县",
                        "level": 3
                    },
                    {
                        "id": 4240,
                        "pid": 388,
                        "name": "古蔺县",
                        "level": 3
                    },
                    {
                        "id": 4241,
                        "pid": 388,
                        "name": "合江县",
                        "level": 3
                    },
                    {
                        "id": 4242,
                        "pid": 388,
                        "name": "江阳区",
                        "level": 3
                    },
                    {
                        "id": 4243,
                        "pid": 388,
                        "name": "泸县",
                        "level": 3
                    },
                    {
                        "id": 4244,
                        "pid": 388,
                        "name": "纳溪区",
                        "level": 3
                    },
                    {
                        "id": 4245,
                        "pid": 388,
                        "name": "龙马潭区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 389,
                "pid": 23,
                "name": "德阳市",
                "level": 2,
                "children2": [
                    {
                        "id": 4246,
                        "pid": 389,
                        "name": "中江县",
                        "level": 3
                    },
                    {
                        "id": 4247,
                        "pid": 389,
                        "name": "什邡市",
                        "level": 3
                    },
                    {
                        "id": 4248,
                        "pid": 389,
                        "name": "广汉市",
                        "level": 3
                    },
                    {
                        "id": 4249,
                        "pid": 389,
                        "name": "旌阳区",
                        "level": 3
                    },
                    {
                        "id": 4250,
                        "pid": 389,
                        "name": "绵竹市",
                        "level": 3
                    },
                    {
                        "id": 4251,
                        "pid": 389,
                        "name": "罗江县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 390,
                "pid": 23,
                "name": "绵阳市",
                "level": 2,
                "children2": [
                    {
                        "id": 4252,
                        "pid": 390,
                        "name": "三台县",
                        "level": 3
                    },
                    {
                        "id": 4253,
                        "pid": 390,
                        "name": "北川羌族自治县",
                        "level": 3
                    },
                    {
                        "id": 4254,
                        "pid": 390,
                        "name": "安县",
                        "level": 3
                    },
                    {
                        "id": 4255,
                        "pid": 390,
                        "name": "平武县",
                        "level": 3
                    },
                    {
                        "id": 4256,
                        "pid": 390,
                        "name": "梓潼县",
                        "level": 3
                    },
                    {
                        "id": 4257,
                        "pid": 390,
                        "name": "江油市",
                        "level": 3
                    },
                    {
                        "id": 4258,
                        "pid": 390,
                        "name": "涪城区",
                        "level": 3
                    },
                    {
                        "id": 4259,
                        "pid": 390,
                        "name": "游仙区",
                        "level": 3
                    },
                    {
                        "id": 4260,
                        "pid": 390,
                        "name": "盐亭县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 391,
                "pid": 23,
                "name": "广元市",
                "level": 2,
                "children2": [
                    {
                        "id": 4261,
                        "pid": 391,
                        "name": "元坝区",
                        "level": 3
                    },
                    {
                        "id": 4262,
                        "pid": 391,
                        "name": "利州区",
                        "level": 3
                    },
                    {
                        "id": 4263,
                        "pid": 391,
                        "name": "剑阁县",
                        "level": 3
                    },
                    {
                        "id": 4264,
                        "pid": 391,
                        "name": "旺苍县",
                        "level": 3
                    },
                    {
                        "id": 4265,
                        "pid": 391,
                        "name": "朝天区",
                        "level": 3
                    },
                    {
                        "id": 4266,
                        "pid": 391,
                        "name": "苍溪县",
                        "level": 3
                    },
                    {
                        "id": 4267,
                        "pid": 391,
                        "name": "青川县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 392,
                "pid": 23,
                "name": "遂宁市",
                "level": 2,
                "children2": [
                    {
                        "id": 4268,
                        "pid": 392,
                        "name": "大英县",
                        "level": 3
                    },
                    {
                        "id": 4269,
                        "pid": 392,
                        "name": "安居区",
                        "level": 3
                    },
                    {
                        "id": 4270,
                        "pid": 392,
                        "name": "射洪县",
                        "level": 3
                    },
                    {
                        "id": 4271,
                        "pid": 392,
                        "name": "船山区",
                        "level": 3
                    },
                    {
                        "id": 4272,
                        "pid": 392,
                        "name": "蓬溪县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 393,
                "pid": 23,
                "name": "内江市",
                "level": 2,
                "children2": [
                    {
                        "id": 4273,
                        "pid": 393,
                        "name": "东兴区",
                        "level": 3
                    },
                    {
                        "id": 4274,
                        "pid": 393,
                        "name": "威远县",
                        "level": 3
                    },
                    {
                        "id": 4275,
                        "pid": 393,
                        "name": "市中区",
                        "level": 3
                    },
                    {
                        "id": 4276,
                        "pid": 393,
                        "name": "资中县",
                        "level": 3
                    },
                    {
                        "id": 4277,
                        "pid": 393,
                        "name": "隆昌县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 394,
                "pid": 23,
                "name": "乐山市",
                "level": 2,
                "children2": [
                    {
                        "id": 4278,
                        "pid": 394,
                        "name": "五通桥区",
                        "level": 3
                    },
                    {
                        "id": 4279,
                        "pid": 394,
                        "name": "井研县",
                        "level": 3
                    },
                    {
                        "id": 4280,
                        "pid": 394,
                        "name": "夹江县",
                        "level": 3
                    },
                    {
                        "id": 4281,
                        "pid": 394,
                        "name": "峨眉山市",
                        "level": 3
                    },
                    {
                        "id": 4282,
                        "pid": 394,
                        "name": "峨边彝族自治县",
                        "level": 3
                    },
                    {
                        "id": 4283,
                        "pid": 394,
                        "name": "市中区",
                        "level": 3
                    },
                    {
                        "id": 4284,
                        "pid": 394,
                        "name": "沐川县",
                        "level": 3
                    },
                    {
                        "id": 4285,
                        "pid": 394,
                        "name": "沙湾区",
                        "level": 3
                    },
                    {
                        "id": 4286,
                        "pid": 394,
                        "name": "犍为县",
                        "level": 3
                    },
                    {
                        "id": 4287,
                        "pid": 394,
                        "name": "金口河区",
                        "level": 3
                    },
                    {
                        "id": 4288,
                        "pid": 394,
                        "name": "马边彝族自治县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 395,
                "pid": 23,
                "name": "南充市",
                "level": 2,
                "children2": [
                    {
                        "id": 4289,
                        "pid": 395,
                        "name": "仪陇县",
                        "level": 3
                    },
                    {
                        "id": 4290,
                        "pid": 395,
                        "name": "南充市嘉陵区",
                        "level": 3
                    },
                    {
                        "id": 4291,
                        "pid": 395,
                        "name": "南部县",
                        "level": 3
                    },
                    {
                        "id": 4292,
                        "pid": 395,
                        "name": "嘉陵区",
                        "level": 3
                    },
                    {
                        "id": 4293,
                        "pid": 395,
                        "name": "营山县",
                        "level": 3
                    },
                    {
                        "id": 4294,
                        "pid": 395,
                        "name": "蓬安县",
                        "level": 3
                    },
                    {
                        "id": 4295,
                        "pid": 395,
                        "name": "西充县",
                        "level": 3
                    },
                    {
                        "id": 4296,
                        "pid": 395,
                        "name": "阆中市",
                        "level": 3
                    },
                    {
                        "id": 4297,
                        "pid": 395,
                        "name": "顺庆区",
                        "level": 3
                    },
                    {
                        "id": 4298,
                        "pid": 395,
                        "name": "高坪区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 396,
                "pid": 23,
                "name": "眉山市",
                "level": 2,
                "children2": [
                    {
                        "id": 4299,
                        "pid": 396,
                        "name": "东坡区",
                        "level": 3
                    },
                    {
                        "id": 4300,
                        "pid": 396,
                        "name": "丹棱县",
                        "level": 3
                    },
                    {
                        "id": 4301,
                        "pid": 396,
                        "name": "仁寿县",
                        "level": 3
                    },
                    {
                        "id": 4302,
                        "pid": 396,
                        "name": "彭山县",
                        "level": 3
                    },
                    {
                        "id": 4303,
                        "pid": 396,
                        "name": "洪雅县",
                        "level": 3
                    },
                    {
                        "id": 4304,
                        "pid": 396,
                        "name": "青神县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 397,
                "pid": 23,
                "name": "宜宾市",
                "level": 2,
                "children2": [
                    {
                        "id": 4305,
                        "pid": 397,
                        "name": "兴文县",
                        "level": 3
                    },
                    {
                        "id": 4306,
                        "pid": 397,
                        "name": "南溪县",
                        "level": 3
                    },
                    {
                        "id": 4307,
                        "pid": 397,
                        "name": "宜宾县",
                        "level": 3
                    },
                    {
                        "id": 4308,
                        "pid": 397,
                        "name": "屏山县",
                        "level": 3
                    },
                    {
                        "id": 4309,
                        "pid": 397,
                        "name": "江安县",
                        "level": 3
                    },
                    {
                        "id": 4310,
                        "pid": 397,
                        "name": "珙县",
                        "level": 3
                    },
                    {
                        "id": 4311,
                        "pid": 397,
                        "name": "筠连县",
                        "level": 3
                    },
                    {
                        "id": 4312,
                        "pid": 397,
                        "name": "翠屏区",
                        "level": 3
                    },
                    {
                        "id": 4313,
                        "pid": 397,
                        "name": "长宁县",
                        "level": 3
                    },
                    {
                        "id": 4314,
                        "pid": 397,
                        "name": "高县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 398,
                "pid": 23,
                "name": "广安市",
                "level": 2,
                "children2": [
                    {
                        "id": 4315,
                        "pid": 398,
                        "name": "华蓥市",
                        "level": 3
                    },
                    {
                        "id": 4316,
                        "pid": 398,
                        "name": "岳池县",
                        "level": 3
                    },
                    {
                        "id": 4317,
                        "pid": 398,
                        "name": "广安区",
                        "level": 3
                    },
                    {
                        "id": 4318,
                        "pid": 398,
                        "name": "武胜县",
                        "level": 3
                    },
                    {
                        "id": 4319,
                        "pid": 398,
                        "name": "邻水县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 399,
                "pid": 23,
                "name": "达州市",
                "level": 2,
                "children2": [
                    {
                        "id": 4320,
                        "pid": 399,
                        "name": "万源市",
                        "level": 3
                    },
                    {
                        "id": 4321,
                        "pid": 399,
                        "name": "大竹县",
                        "level": 3
                    },
                    {
                        "id": 4322,
                        "pid": 399,
                        "name": "宣汉县",
                        "level": 3
                    },
                    {
                        "id": 4323,
                        "pid": 399,
                        "name": "开江县",
                        "level": 3
                    },
                    {
                        "id": 4324,
                        "pid": 399,
                        "name": "渠县",
                        "level": 3
                    },
                    {
                        "id": 4325,
                        "pid": 399,
                        "name": "达县",
                        "level": 3
                    },
                    {
                        "id": 4326,
                        "pid": 399,
                        "name": "通川区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 400,
                "pid": 23,
                "name": "雅安市",
                "level": 2,
                "children2": [
                    {
                        "id": 4327,
                        "pid": 400,
                        "name": "名山县",
                        "level": 3
                    },
                    {
                        "id": 4328,
                        "pid": 400,
                        "name": "天全县",
                        "level": 3
                    },
                    {
                        "id": 4329,
                        "pid": 400,
                        "name": "宝兴县",
                        "level": 3
                    },
                    {
                        "id": 4330,
                        "pid": 400,
                        "name": "汉源县",
                        "level": 3
                    },
                    {
                        "id": 4331,
                        "pid": 400,
                        "name": "石棉县",
                        "level": 3
                    },
                    {
                        "id": 4332,
                        "pid": 400,
                        "name": "芦山县",
                        "level": 3
                    },
                    {
                        "id": 4333,
                        "pid": 400,
                        "name": "荥经县",
                        "level": 3
                    },
                    {
                        "id": 4334,
                        "pid": 400,
                        "name": "雨城区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 401,
                "pid": 23,
                "name": "巴中市",
                "level": 2,
                "children2": [
                    {
                        "id": 4335,
                        "pid": 401,
                        "name": "南江县",
                        "level": 3
                    },
                    {
                        "id": 4336,
                        "pid": 401,
                        "name": "巴州区",
                        "level": 3
                    },
                    {
                        "id": 4337,
                        "pid": 401,
                        "name": "平昌县",
                        "level": 3
                    },
                    {
                        "id": 4338,
                        "pid": 401,
                        "name": "通江县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 402,
                "pid": 23,
                "name": "资阳市",
                "level": 2,
                "children2": [
                    {
                        "id": 4339,
                        "pid": 402,
                        "name": "乐至县",
                        "level": 3
                    },
                    {
                        "id": 4340,
                        "pid": 402,
                        "name": "安岳县",
                        "level": 3
                    },
                    {
                        "id": 4341,
                        "pid": 402,
                        "name": "简阳市",
                        "level": 3
                    },
                    {
                        "id": 4342,
                        "pid": 402,
                        "name": "雁江区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 403,
                "pid": 23,
                "name": "阿坝藏族羌族自治州",
                "level": 2,
                "children2": [
                    {
                        "id": 4343,
                        "pid": 403,
                        "name": "九寨沟县",
                        "level": 3
                    },
                    {
                        "id": 4344,
                        "pid": 403,
                        "name": "壤塘县",
                        "level": 3
                    },
                    {
                        "id": 4345,
                        "pid": 403,
                        "name": "小金县",
                        "level": 3
                    },
                    {
                        "id": 4346,
                        "pid": 403,
                        "name": "松潘县",
                        "level": 3
                    },
                    {
                        "id": 4347,
                        "pid": 403,
                        "name": "汶川县",
                        "level": 3
                    },
                    {
                        "id": 4348,
                        "pid": 403,
                        "name": "理县",
                        "level": 3
                    },
                    {
                        "id": 4349,
                        "pid": 403,
                        "name": "红原县",
                        "level": 3
                    },
                    {
                        "id": 4350,
                        "pid": 403,
                        "name": "若尔盖县",
                        "level": 3
                    },
                    {
                        "id": 4351,
                        "pid": 403,
                        "name": "茂县",
                        "level": 3
                    },
                    {
                        "id": 4352,
                        "pid": 403,
                        "name": "金川县",
                        "level": 3
                    },
                    {
                        "id": 4353,
                        "pid": 403,
                        "name": "阿坝县",
                        "level": 3
                    },
                    {
                        "id": 4354,
                        "pid": 403,
                        "name": "马尔康县",
                        "level": 3
                    },
                    {
                        "id": 4355,
                        "pid": 403,
                        "name": "黑水县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 404,
                "pid": 23,
                "name": "甘孜藏族自治州",
                "level": 2,
                "children2": [
                    {
                        "id": 4356,
                        "pid": 404,
                        "name": "丹巴县",
                        "level": 3
                    },
                    {
                        "id": 4357,
                        "pid": 404,
                        "name": "乡城县",
                        "level": 3
                    },
                    {
                        "id": 4358,
                        "pid": 404,
                        "name": "巴塘县",
                        "level": 3
                    },
                    {
                        "id": 4359,
                        "pid": 404,
                        "name": "康定县",
                        "level": 3
                    },
                    {
                        "id": 4360,
                        "pid": 404,
                        "name": "得荣县",
                        "level": 3
                    },
                    {
                        "id": 4361,
                        "pid": 404,
                        "name": "德格县",
                        "level": 3
                    },
                    {
                        "id": 4362,
                        "pid": 404,
                        "name": "新龙县",
                        "level": 3
                    },
                    {
                        "id": 4363,
                        "pid": 404,
                        "name": "泸定县",
                        "level": 3
                    },
                    {
                        "id": 4364,
                        "pid": 404,
                        "name": "炉霍县",
                        "level": 3
                    },
                    {
                        "id": 4365,
                        "pid": 404,
                        "name": "理塘县",
                        "level": 3
                    },
                    {
                        "id": 4366,
                        "pid": 404,
                        "name": "甘孜县",
                        "level": 3
                    },
                    {
                        "id": 4367,
                        "pid": 404,
                        "name": "白玉县",
                        "level": 3
                    },
                    {
                        "id": 4368,
                        "pid": 404,
                        "name": "石渠县",
                        "level": 3
                    },
                    {
                        "id": 4369,
                        "pid": 404,
                        "name": "稻城县",
                        "level": 3
                    },
                    {
                        "id": 4370,
                        "pid": 404,
                        "name": "色达县",
                        "level": 3
                    },
                    {
                        "id": 4371,
                        "pid": 404,
                        "name": "道孚县",
                        "level": 3
                    },
                    {
                        "id": 4372,
                        "pid": 404,
                        "name": "雅江县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 405,
                "pid": 23,
                "name": "凉山彝族自治州",
                "level": 2,
                "children2": [
                    {
                        "id": 4373,
                        "pid": 405,
                        "name": "会东县",
                        "level": 3
                    },
                    {
                        "id": 4374,
                        "pid": 405,
                        "name": "会理县",
                        "level": 3
                    },
                    {
                        "id": 4375,
                        "pid": 405,
                        "name": "冕宁县",
                        "level": 3
                    },
                    {
                        "id": 4376,
                        "pid": 405,
                        "name": "喜德县",
                        "level": 3
                    },
                    {
                        "id": 4377,
                        "pid": 405,
                        "name": "宁南县",
                        "level": 3
                    },
                    {
                        "id": 4378,
                        "pid": 405,
                        "name": "布拖县",
                        "level": 3
                    },
                    {
                        "id": 4379,
                        "pid": 405,
                        "name": "德昌县",
                        "level": 3
                    },
                    {
                        "id": 4380,
                        "pid": 405,
                        "name": "昭觉县",
                        "level": 3
                    },
                    {
                        "id": 4381,
                        "pid": 405,
                        "name": "普格县",
                        "level": 3
                    },
                    {
                        "id": 4382,
                        "pid": 405,
                        "name": "木里藏族自治县",
                        "level": 3
                    },
                    {
                        "id": 4383,
                        "pid": 405,
                        "name": "甘洛县",
                        "level": 3
                    },
                    {
                        "id": 4384,
                        "pid": 405,
                        "name": "盐源县",
                        "level": 3
                    },
                    {
                        "id": 4385,
                        "pid": 405,
                        "name": "美姑县",
                        "level": 3
                    },
                    {
                        "id": 4386,
                        "pid": 405,
                        "name": "西昌",
                        "level": 3
                    },
                    {
                        "id": 4387,
                        "pid": 405,
                        "name": "越西县",
                        "level": 3
                    },
                    {
                        "id": 4388,
                        "pid": 405,
                        "name": "金阳县",
                        "level": 3
                    },
                    {
                        "id": 4389,
                        "pid": 405,
                        "name": "雷波县",
                        "level": 3
                    }
                ]
            }
        ]
    },
    {
        "id": 24,
        "pid": 0,
        "name": "贵州省",
        "level": 1,
        "children": [
            {
                "id": 406,
                "pid": 24,
                "name": "贵阳市",
                "level": 2,
                "children2": [
                    {
                        "id": 4390,
                        "pid": 406,
                        "name": "乌当区",
                        "level": 3
                    },
                    {
                        "id": 4391,
                        "pid": 406,
                        "name": "云岩区",
                        "level": 3
                    },
                    {
                        "id": 4392,
                        "pid": 406,
                        "name": "修文县",
                        "level": 3
                    },
                    {
                        "id": 4393,
                        "pid": 406,
                        "name": "南明区",
                        "level": 3
                    },
                    {
                        "id": 4394,
                        "pid": 406,
                        "name": "小河区",
                        "level": 3
                    },
                    {
                        "id": 4395,
                        "pid": 406,
                        "name": "开阳县",
                        "level": 3
                    },
                    {
                        "id": 4396,
                        "pid": 406,
                        "name": "息烽县",
                        "level": 3
                    },
                    {
                        "id": 4397,
                        "pid": 406,
                        "name": "清镇市",
                        "level": 3
                    },
                    {
                        "id": 4398,
                        "pid": 406,
                        "name": "白云区",
                        "level": 3
                    },
                    {
                        "id": 4399,
                        "pid": 406,
                        "name": "花溪区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 407,
                "pid": 24,
                "name": "六盘水市",
                "level": 2,
                "children2": [
                    {
                        "id": 4400,
                        "pid": 407,
                        "name": "六枝特区",
                        "level": 3
                    },
                    {
                        "id": 4401,
                        "pid": 407,
                        "name": "水城县",
                        "level": 3
                    },
                    {
                        "id": 4402,
                        "pid": 407,
                        "name": "盘县",
                        "level": 3
                    },
                    {
                        "id": 4403,
                        "pid": 407,
                        "name": "钟山区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 408,
                "pid": 24,
                "name": "遵义市",
                "level": 2,
                "children2": [
                    {
                        "id": 4404,
                        "pid": 408,
                        "name": "习水县",
                        "level": 3
                    },
                    {
                        "id": 4405,
                        "pid": 408,
                        "name": "仁怀市",
                        "level": 3
                    },
                    {
                        "id": 4406,
                        "pid": 408,
                        "name": "余庆县",
                        "level": 3
                    },
                    {
                        "id": 4407,
                        "pid": 408,
                        "name": "凤冈县",
                        "level": 3
                    },
                    {
                        "id": 4408,
                        "pid": 408,
                        "name": "务川仡佬族苗族自治县",
                        "level": 3
                    },
                    {
                        "id": 4409,
                        "pid": 408,
                        "name": "桐梓县",
                        "level": 3
                    },
                    {
                        "id": 4410,
                        "pid": 408,
                        "name": "正安县",
                        "level": 3
                    },
                    {
                        "id": 4411,
                        "pid": 408,
                        "name": "汇川区",
                        "level": 3
                    },
                    {
                        "id": 4412,
                        "pid": 408,
                        "name": "湄潭县",
                        "level": 3
                    },
                    {
                        "id": 4413,
                        "pid": 408,
                        "name": "红花岗区",
                        "level": 3
                    },
                    {
                        "id": 4414,
                        "pid": 408,
                        "name": "绥阳县",
                        "level": 3
                    },
                    {
                        "id": 4415,
                        "pid": 408,
                        "name": "赤水市",
                        "level": 3
                    },
                    {
                        "id": 4416,
                        "pid": 408,
                        "name": "道真仡佬族苗族自治县",
                        "level": 3
                    },
                    {
                        "id": 4417,
                        "pid": 408,
                        "name": "遵义县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 409,
                "pid": 24,
                "name": "安顺市",
                "level": 2,
                "children2": [
                    {
                        "id": 4418,
                        "pid": 409,
                        "name": "关岭布依族苗族自治县",
                        "level": 3
                    },
                    {
                        "id": 4419,
                        "pid": 409,
                        "name": "平坝县",
                        "level": 3
                    },
                    {
                        "id": 4420,
                        "pid": 409,
                        "name": "普定县",
                        "level": 3
                    },
                    {
                        "id": 4421,
                        "pid": 409,
                        "name": "紫云苗族布依族自治县",
                        "level": 3
                    },
                    {
                        "id": 4422,
                        "pid": 409,
                        "name": "西秀区",
                        "level": 3
                    },
                    {
                        "id": 4423,
                        "pid": 409,
                        "name": "镇宁布依族苗族自治县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 410,
                "pid": 24,
                "name": "铜仁地区",
                "level": 2,
                "children2": [
                    {
                        "id": 4424,
                        "pid": 410,
                        "name": "万山特区",
                        "level": 3
                    },
                    {
                        "id": 4425,
                        "pid": 410,
                        "name": "印江土家族苗族自治县",
                        "level": 3
                    },
                    {
                        "id": 4426,
                        "pid": 410,
                        "name": "德江县",
                        "level": 3
                    },
                    {
                        "id": 4427,
                        "pid": 410,
                        "name": "思南县",
                        "level": 3
                    },
                    {
                        "id": 4428,
                        "pid": 410,
                        "name": "松桃苗族自治县",
                        "level": 3
                    },
                    {
                        "id": 4429,
                        "pid": 410,
                        "name": "江口县",
                        "level": 3
                    },
                    {
                        "id": 4430,
                        "pid": 410,
                        "name": "沿河土家族自治县",
                        "level": 3
                    },
                    {
                        "id": 4431,
                        "pid": 410,
                        "name": "玉屏侗族自治县",
                        "level": 3
                    },
                    {
                        "id": 4432,
                        "pid": 410,
                        "name": "石阡县",
                        "level": 3
                    },
                    {
                        "id": 4433,
                        "pid": 410,
                        "name": "铜仁市",
                        "level": 3
                    }
                ]
            },
            {
                "id": 411,
                "pid": 24,
                "name": "黔西南布依族苗族自治州",
                "level": 2,
                "children2": [
                    {
                        "id": 4434,
                        "pid": 411,
                        "name": "兴义市",
                        "level": 3
                    },
                    {
                        "id": 4435,
                        "pid": 411,
                        "name": "兴仁县",
                        "level": 3
                    },
                    {
                        "id": 4436,
                        "pid": 411,
                        "name": "册亨县",
                        "level": 3
                    },
                    {
                        "id": 4437,
                        "pid": 411,
                        "name": "安龙县",
                        "level": 3
                    },
                    {
                        "id": 4438,
                        "pid": 411,
                        "name": "普安县",
                        "level": 3
                    },
                    {
                        "id": 4439,
                        "pid": 411,
                        "name": "晴隆县",
                        "level": 3
                    },
                    {
                        "id": 4440,
                        "pid": 411,
                        "name": "望谟县",
                        "level": 3
                    },
                    {
                        "id": 4441,
                        "pid": 411,
                        "name": "贞丰县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 412,
                "pid": 24,
                "name": "毕节地区",
                "level": 2,
                "children2": [
                    {
                        "id": 4442,
                        "pid": 412,
                        "name": "大方县",
                        "level": 3
                    },
                    {
                        "id": 4443,
                        "pid": 412,
                        "name": "威宁彝族回族苗族自治县",
                        "level": 3
                    },
                    {
                        "id": 4444,
                        "pid": 412,
                        "name": "毕节市",
                        "level": 3
                    },
                    {
                        "id": 4445,
                        "pid": 412,
                        "name": "纳雍县",
                        "level": 3
                    },
                    {
                        "id": 4446,
                        "pid": 412,
                        "name": "织金县",
                        "level": 3
                    },
                    {
                        "id": 4447,
                        "pid": 412,
                        "name": "赫章县",
                        "level": 3
                    },
                    {
                        "id": 4448,
                        "pid": 412,
                        "name": "金沙县",
                        "level": 3
                    },
                    {
                        "id": 4449,
                        "pid": 412,
                        "name": "黔西县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 413,
                "pid": 24,
                "name": "黔东南苗族侗族自治州",
                "level": 2,
                "children2": [
                    {
                        "id": 4450,
                        "pid": 413,
                        "name": "三穗县",
                        "level": 3
                    },
                    {
                        "id": 4451,
                        "pid": 413,
                        "name": "丹寨县",
                        "level": 3
                    },
                    {
                        "id": 4452,
                        "pid": 413,
                        "name": "从江县",
                        "level": 3
                    },
                    {
                        "id": 4453,
                        "pid": 413,
                        "name": "凯里市",
                        "level": 3
                    },
                    {
                        "id": 4454,
                        "pid": 413,
                        "name": "剑河县",
                        "level": 3
                    },
                    {
                        "id": 4455,
                        "pid": 413,
                        "name": "台江县",
                        "level": 3
                    },
                    {
                        "id": 4456,
                        "pid": 413,
                        "name": "天柱县",
                        "level": 3
                    },
                    {
                        "id": 4457,
                        "pid": 413,
                        "name": "岑巩县",
                        "level": 3
                    },
                    {
                        "id": 4458,
                        "pid": 413,
                        "name": "施秉县",
                        "level": 3
                    },
                    {
                        "id": 4459,
                        "pid": 413,
                        "name": "榕江县",
                        "level": 3
                    },
                    {
                        "id": 4460,
                        "pid": 413,
                        "name": "锦屏县",
                        "level": 3
                    },
                    {
                        "id": 4461,
                        "pid": 413,
                        "name": "镇远县",
                        "level": 3
                    },
                    {
                        "id": 4462,
                        "pid": 413,
                        "name": "雷山县",
                        "level": 3
                    },
                    {
                        "id": 4463,
                        "pid": 413,
                        "name": "麻江县",
                        "level": 3
                    },
                    {
                        "id": 4464,
                        "pid": 413,
                        "name": "黄平县",
                        "level": 3
                    },
                    {
                        "id": 4465,
                        "pid": 413,
                        "name": "黎平县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 414,
                "pid": 24,
                "name": "黔南布依族苗族自治州",
                "level": 2,
                "children2": [
                    {
                        "id": 4466,
                        "pid": 414,
                        "name": "三都水族自治县",
                        "level": 3
                    },
                    {
                        "id": 4467,
                        "pid": 414,
                        "name": "平塘县",
                        "level": 3
                    },
                    {
                        "id": 4468,
                        "pid": 414,
                        "name": "惠水县",
                        "level": 3
                    },
                    {
                        "id": 4469,
                        "pid": 414,
                        "name": "独山县",
                        "level": 3
                    },
                    {
                        "id": 4470,
                        "pid": 414,
                        "name": "瓮安县",
                        "level": 3
                    },
                    {
                        "id": 4471,
                        "pid": 414,
                        "name": "福泉市",
                        "level": 3
                    },
                    {
                        "id": 4472,
                        "pid": 414,
                        "name": "罗甸县",
                        "level": 3
                    },
                    {
                        "id": 4473,
                        "pid": 414,
                        "name": "荔波县",
                        "level": 3
                    },
                    {
                        "id": 4474,
                        "pid": 414,
                        "name": "贵定县",
                        "level": 3
                    },
                    {
                        "id": 4475,
                        "pid": 414,
                        "name": "都匀市",
                        "level": 3
                    },
                    {
                        "id": 4476,
                        "pid": 414,
                        "name": "长顺县",
                        "level": 3
                    },
                    {
                        "id": 4477,
                        "pid": 414,
                        "name": "龙里县",
                        "level": 3
                    }
                ]
            }
        ]
    },
    {
        "id": 25,
        "pid": 0,
        "name": "云南省",
        "level": 1,
        "children": [
            {
                "id": 415,
                "pid": 25,
                "name": "昆明市",
                "level": 2,
                "children2": [
                    {
                        "id": 4478,
                        "pid": 415,
                        "name": "东川区",
                        "level": 3
                    },
                    {
                        "id": 4479,
                        "pid": 415,
                        "name": "五华区",
                        "level": 3
                    },
                    {
                        "id": 4480,
                        "pid": 415,
                        "name": "呈贡县",
                        "level": 3
                    },
                    {
                        "id": 4481,
                        "pid": 415,
                        "name": "安宁市",
                        "level": 3
                    },
                    {
                        "id": 4482,
                        "pid": 415,
                        "name": "官渡区",
                        "level": 3
                    },
                    {
                        "id": 4483,
                        "pid": 415,
                        "name": "宜良县",
                        "level": 3
                    },
                    {
                        "id": 4484,
                        "pid": 415,
                        "name": "富民县",
                        "level": 3
                    },
                    {
                        "id": 4485,
                        "pid": 415,
                        "name": "寻甸回族彝族自治县",
                        "level": 3
                    },
                    {
                        "id": 4486,
                        "pid": 415,
                        "name": "嵩明县",
                        "level": 3
                    },
                    {
                        "id": 4487,
                        "pid": 415,
                        "name": "晋宁县",
                        "level": 3
                    },
                    {
                        "id": 4488,
                        "pid": 415,
                        "name": "盘龙区",
                        "level": 3
                    },
                    {
                        "id": 4489,
                        "pid": 415,
                        "name": "石林彝族自治县",
                        "level": 3
                    },
                    {
                        "id": 4490,
                        "pid": 415,
                        "name": "禄劝彝族苗族自治县",
                        "level": 3
                    },
                    {
                        "id": 4491,
                        "pid": 415,
                        "name": "西山区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 416,
                "pid": 25,
                "name": "曲靖市",
                "level": 2,
                "children2": [
                    {
                        "id": 4492,
                        "pid": 416,
                        "name": "会泽县",
                        "level": 3
                    },
                    {
                        "id": 4493,
                        "pid": 416,
                        "name": "宣威市",
                        "level": 3
                    },
                    {
                        "id": 4494,
                        "pid": 416,
                        "name": "富源县",
                        "level": 3
                    },
                    {
                        "id": 4495,
                        "pid": 416,
                        "name": "师宗县",
                        "level": 3
                    },
                    {
                        "id": 4496,
                        "pid": 416,
                        "name": "沾益县",
                        "level": 3
                    },
                    {
                        "id": 4497,
                        "pid": 416,
                        "name": "罗平县",
                        "level": 3
                    },
                    {
                        "id": 4498,
                        "pid": 416,
                        "name": "陆良县",
                        "level": 3
                    },
                    {
                        "id": 4499,
                        "pid": 416,
                        "name": "马龙县",
                        "level": 3
                    },
                    {
                        "id": 4500,
                        "pid": 416,
                        "name": "麒麟区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 417,
                "pid": 25,
                "name": "玉溪市",
                "level": 2,
                "children2": [
                    {
                        "id": 4501,
                        "pid": 417,
                        "name": "元江哈尼族彝族傣族自治县",
                        "level": 3
                    },
                    {
                        "id": 4502,
                        "pid": 417,
                        "name": "华宁县",
                        "level": 3
                    },
                    {
                        "id": 4503,
                        "pid": 417,
                        "name": "峨山彝族自治县",
                        "level": 3
                    },
                    {
                        "id": 4504,
                        "pid": 417,
                        "name": "新平彝族傣族自治县",
                        "level": 3
                    },
                    {
                        "id": 4505,
                        "pid": 417,
                        "name": "易门县",
                        "level": 3
                    },
                    {
                        "id": 4506,
                        "pid": 417,
                        "name": "江川县",
                        "level": 3
                    },
                    {
                        "id": 4507,
                        "pid": 417,
                        "name": "澄江县",
                        "level": 3
                    },
                    {
                        "id": 4508,
                        "pid": 417,
                        "name": "红塔区",
                        "level": 3
                    },
                    {
                        "id": 4509,
                        "pid": 417,
                        "name": "通海县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 418,
                "pid": 25,
                "name": "保山市",
                "level": 2,
                "children2": [
                    {
                        "id": 4510,
                        "pid": 418,
                        "name": "施甸县",
                        "level": 3
                    },
                    {
                        "id": 4511,
                        "pid": 418,
                        "name": "昌宁县",
                        "level": 3
                    },
                    {
                        "id": 4512,
                        "pid": 418,
                        "name": "腾冲县",
                        "level": 3
                    },
                    {
                        "id": 4513,
                        "pid": 418,
                        "name": "隆阳区",
                        "level": 3
                    },
                    {
                        "id": 4514,
                        "pid": 418,
                        "name": "龙陵县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 419,
                "pid": 25,
                "name": "昭通市",
                "level": 2,
                "children2": [
                    {
                        "id": 4515,
                        "pid": 419,
                        "name": "大关县",
                        "level": 3
                    },
                    {
                        "id": 4516,
                        "pid": 419,
                        "name": "威信县",
                        "level": 3
                    },
                    {
                        "id": 4517,
                        "pid": 419,
                        "name": "巧家县",
                        "level": 3
                    },
                    {
                        "id": 4518,
                        "pid": 419,
                        "name": "彝良县",
                        "level": 3
                    },
                    {
                        "id": 4519,
                        "pid": 419,
                        "name": "昭阳区",
                        "level": 3
                    },
                    {
                        "id": 4520,
                        "pid": 419,
                        "name": "水富县",
                        "level": 3
                    },
                    {
                        "id": 4521,
                        "pid": 419,
                        "name": "永善县",
                        "level": 3
                    },
                    {
                        "id": 4522,
                        "pid": 419,
                        "name": "盐津县",
                        "level": 3
                    },
                    {
                        "id": 4523,
                        "pid": 419,
                        "name": "绥江县",
                        "level": 3
                    },
                    {
                        "id": 4524,
                        "pid": 419,
                        "name": "镇雄县",
                        "level": 3
                    },
                    {
                        "id": 4525,
                        "pid": 419,
                        "name": "鲁甸县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 420,
                "pid": 25,
                "name": "丽江市",
                "level": 2,
                "children2": [
                    {
                        "id": 4526,
                        "pid": 420,
                        "name": "华坪县",
                        "level": 3
                    },
                    {
                        "id": 4527,
                        "pid": 420,
                        "name": "古城区",
                        "level": 3
                    },
                    {
                        "id": 4528,
                        "pid": 420,
                        "name": "宁蒗彝族自治县",
                        "level": 3
                    },
                    {
                        "id": 4529,
                        "pid": 420,
                        "name": "永胜县",
                        "level": 3
                    },
                    {
                        "id": 4530,
                        "pid": 420,
                        "name": "玉龙纳西族自治县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 421,
                "pid": 25,
                "name": "思茅市",
                "level": 2,
                "children2": []
            },
            {
                "id": 422,
                "pid": 25,
                "name": "临沧市",
                "level": 2,
                "children2": [
                    {
                        "id": 4531,
                        "pid": 422,
                        "name": "临翔区",
                        "level": 3
                    },
                    {
                        "id": 4532,
                        "pid": 422,
                        "name": "云县",
                        "level": 3
                    },
                    {
                        "id": 4533,
                        "pid": 422,
                        "name": "凤庆县",
                        "level": 3
                    },
                    {
                        "id": 4534,
                        "pid": 422,
                        "name": "双江拉祜族佤族布朗族傣族自治县",
                        "level": 3
                    },
                    {
                        "id": 4535,
                        "pid": 422,
                        "name": "永德县",
                        "level": 3
                    },
                    {
                        "id": 4536,
                        "pid": 422,
                        "name": "沧源佤族自治县",
                        "level": 3
                    },
                    {
                        "id": 4537,
                        "pid": 422,
                        "name": "耿马傣族佤族自治县",
                        "level": 3
                    },
                    {
                        "id": 4538,
                        "pid": 422,
                        "name": "镇康县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 423,
                "pid": 25,
                "name": "楚雄彝族自治州",
                "level": 2,
                "children2": [
                    {
                        "id": 4539,
                        "pid": 423,
                        "name": "元谋县",
                        "level": 3
                    },
                    {
                        "id": 4540,
                        "pid": 423,
                        "name": "南华县",
                        "level": 3
                    },
                    {
                        "id": 4541,
                        "pid": 423,
                        "name": "双柏县",
                        "level": 3
                    },
                    {
                        "id": 4542,
                        "pid": 423,
                        "name": "大姚县",
                        "level": 3
                    },
                    {
                        "id": 4543,
                        "pid": 423,
                        "name": "姚安县",
                        "level": 3
                    },
                    {
                        "id": 4544,
                        "pid": 423,
                        "name": "楚雄市",
                        "level": 3
                    },
                    {
                        "id": 4545,
                        "pid": 423,
                        "name": "武定县",
                        "level": 3
                    },
                    {
                        "id": 4546,
                        "pid": 423,
                        "name": "永仁县",
                        "level": 3
                    },
                    {
                        "id": 4547,
                        "pid": 423,
                        "name": "牟定县",
                        "level": 3
                    },
                    {
                        "id": 4548,
                        "pid": 423,
                        "name": "禄丰县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 424,
                "pid": 25,
                "name": "红河哈尼族彝族自治州",
                "level": 2,
                "children2": [
                    {
                        "id": 4549,
                        "pid": 424,
                        "name": "个旧市",
                        "level": 3
                    },
                    {
                        "id": 4550,
                        "pid": 424,
                        "name": "元阳县",
                        "level": 3
                    },
                    {
                        "id": 4551,
                        "pid": 424,
                        "name": "屏边苗族自治县",
                        "level": 3
                    },
                    {
                        "id": 4552,
                        "pid": 424,
                        "name": "建水县",
                        "level": 3
                    },
                    {
                        "id": 4553,
                        "pid": 424,
                        "name": "开远市",
                        "level": 3
                    },
                    {
                        "id": 4554,
                        "pid": 424,
                        "name": "弥勒县",
                        "level": 3
                    },
                    {
                        "id": 4555,
                        "pid": 424,
                        "name": "河口瑶族自治县",
                        "level": 3
                    },
                    {
                        "id": 4556,
                        "pid": 424,
                        "name": "泸西县",
                        "level": 3
                    },
                    {
                        "id": 4557,
                        "pid": 424,
                        "name": "石屏县",
                        "level": 3
                    },
                    {
                        "id": 4558,
                        "pid": 424,
                        "name": "红河县",
                        "level": 3
                    },
                    {
                        "id": 4559,
                        "pid": 424,
                        "name": "绿春县",
                        "level": 3
                    },
                    {
                        "id": 4560,
                        "pid": 424,
                        "name": "蒙自县",
                        "level": 3
                    },
                    {
                        "id": 4561,
                        "pid": 424,
                        "name": "金平苗族瑶族傣族自治县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 425,
                "pid": 25,
                "name": "文山壮族苗族自治州",
                "level": 2,
                "children2": [
                    {
                        "id": 4562,
                        "pid": 425,
                        "name": "丘北县",
                        "level": 3
                    },
                    {
                        "id": 4563,
                        "pid": 425,
                        "name": "富宁县",
                        "level": 3
                    },
                    {
                        "id": 4564,
                        "pid": 425,
                        "name": "广南县",
                        "level": 3
                    },
                    {
                        "id": 4565,
                        "pid": 425,
                        "name": "文山县",
                        "level": 3
                    },
                    {
                        "id": 4566,
                        "pid": 425,
                        "name": "砚山县",
                        "level": 3
                    },
                    {
                        "id": 4567,
                        "pid": 425,
                        "name": "西畴县",
                        "level": 3
                    },
                    {
                        "id": 4568,
                        "pid": 425,
                        "name": "马关县",
                        "level": 3
                    },
                    {
                        "id": 4569,
                        "pid": 425,
                        "name": "麻栗坡县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 426,
                "pid": 25,
                "name": "西双版纳傣族自治州",
                "level": 2,
                "children2": [
                    {
                        "id": 4570,
                        "pid": 426,
                        "name": "勐海县",
                        "level": 3
                    },
                    {
                        "id": 4571,
                        "pid": 426,
                        "name": "勐腊县",
                        "level": 3
                    },
                    {
                        "id": 4572,
                        "pid": 426,
                        "name": "景洪市",
                        "level": 3
                    }
                ]
            },
            {
                "id": 427,
                "pid": 25,
                "name": "大理白族自治州",
                "level": 2,
                "children2": [
                    {
                        "id": 4573,
                        "pid": 427,
                        "name": "云龙县",
                        "level": 3
                    },
                    {
                        "id": 4574,
                        "pid": 427,
                        "name": "剑川县",
                        "level": 3
                    },
                    {
                        "id": 4575,
                        "pid": 427,
                        "name": "南涧彝族自治县",
                        "level": 3
                    },
                    {
                        "id": 4576,
                        "pid": 427,
                        "name": "大理市",
                        "level": 3
                    },
                    {
                        "id": 4577,
                        "pid": 427,
                        "name": "宾川县",
                        "level": 3
                    },
                    {
                        "id": 4578,
                        "pid": 427,
                        "name": "巍山彝族回族自治县",
                        "level": 3
                    },
                    {
                        "id": 4579,
                        "pid": 427,
                        "name": "弥渡县",
                        "level": 3
                    },
                    {
                        "id": 4580,
                        "pid": 427,
                        "name": "永平县",
                        "level": 3
                    },
                    {
                        "id": 4581,
                        "pid": 427,
                        "name": "洱源县",
                        "level": 3
                    },
                    {
                        "id": 4582,
                        "pid": 427,
                        "name": "漾濞彝族自治县",
                        "level": 3
                    },
                    {
                        "id": 4583,
                        "pid": 427,
                        "name": "祥云县",
                        "level": 3
                    },
                    {
                        "id": 4584,
                        "pid": 427,
                        "name": "鹤庆县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 428,
                "pid": 25,
                "name": "德宏傣族景颇族自治州",
                "level": 2,
                "children2": [
                    {
                        "id": 4585,
                        "pid": 428,
                        "name": "梁河县",
                        "level": 3
                    },
                    {
                        "id": 4586,
                        "pid": 428,
                        "name": "潞西市",
                        "level": 3
                    },
                    {
                        "id": 4587,
                        "pid": 428,
                        "name": "瑞丽市",
                        "level": 3
                    },
                    {
                        "id": 4588,
                        "pid": 428,
                        "name": "盈江县",
                        "level": 3
                    },
                    {
                        "id": 4589,
                        "pid": 428,
                        "name": "陇川县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 429,
                "pid": 25,
                "name": "怒江傈僳族自治州",
                "level": 2,
                "children2": []
            },
            {
                "id": 430,
                "pid": 25,
                "name": "迪庆藏族自治州",
                "level": 2,
                "children2": [
                    {
                        "id": 4590,
                        "pid": 430,
                        "name": "德钦县",
                        "level": 3
                    },
                    {
                        "id": 4591,
                        "pid": 430,
                        "name": "维西傈僳族自治县",
                        "level": 3
                    },
                    {
                        "id": 4592,
                        "pid": 430,
                        "name": "香格里拉县",
                        "level": 3
                    }
                ]
            }
        ]
    },
    {
        "id": 26,
        "pid": 0,
        "name": "西藏自治区",
        "level": 1,
        "children": [
            {
                "id": 431,
                "pid": 26,
                "name": "拉萨市",
                "level": 2,
                "children2": [
                    {
                        "id": 4593,
                        "pid": 431,
                        "name": "城关区",
                        "level": 3
                    },
                    {
                        "id": 4594,
                        "pid": 431,
                        "name": "堆龙德庆县",
                        "level": 3
                    },
                    {
                        "id": 4595,
                        "pid": 431,
                        "name": "墨竹工卡县",
                        "level": 3
                    },
                    {
                        "id": 4596,
                        "pid": 431,
                        "name": "尼木县",
                        "level": 3
                    },
                    {
                        "id": 4597,
                        "pid": 431,
                        "name": "当雄县",
                        "level": 3
                    },
                    {
                        "id": 4598,
                        "pid": 431,
                        "name": "曲水县",
                        "level": 3
                    },
                    {
                        "id": 4599,
                        "pid": 431,
                        "name": "林周县",
                        "level": 3
                    },
                    {
                        "id": 4600,
                        "pid": 431,
                        "name": "达孜县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 432,
                "pid": 26,
                "name": "昌都地区",
                "level": 2,
                "children2": [
                    {
                        "id": 4601,
                        "pid": 432,
                        "name": "丁青县",
                        "level": 3
                    },
                    {
                        "id": 4602,
                        "pid": 432,
                        "name": "八宿县",
                        "level": 3
                    },
                    {
                        "id": 4603,
                        "pid": 432,
                        "name": "察雅县",
                        "level": 3
                    },
                    {
                        "id": 4604,
                        "pid": 432,
                        "name": "左贡县",
                        "level": 3
                    },
                    {
                        "id": 4605,
                        "pid": 432,
                        "name": "昌都县",
                        "level": 3
                    },
                    {
                        "id": 4606,
                        "pid": 432,
                        "name": "江达县",
                        "level": 3
                    },
                    {
                        "id": 4607,
                        "pid": 432,
                        "name": "洛隆县",
                        "level": 3
                    },
                    {
                        "id": 4608,
                        "pid": 432,
                        "name": "类乌齐县",
                        "level": 3
                    },
                    {
                        "id": 4609,
                        "pid": 432,
                        "name": "芒康县",
                        "level": 3
                    },
                    {
                        "id": 4610,
                        "pid": 432,
                        "name": "贡觉县",
                        "level": 3
                    },
                    {
                        "id": 4611,
                        "pid": 432,
                        "name": "边坝县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 433,
                "pid": 26,
                "name": "山南地区",
                "level": 2,
                "children2": [
                    {
                        "id": 4612,
                        "pid": 433,
                        "name": "乃东县",
                        "level": 3
                    },
                    {
                        "id": 4613,
                        "pid": 433,
                        "name": "加查县",
                        "level": 3
                    },
                    {
                        "id": 4614,
                        "pid": 433,
                        "name": "扎囊县",
                        "level": 3
                    },
                    {
                        "id": 4615,
                        "pid": 433,
                        "name": "措美县",
                        "level": 3
                    },
                    {
                        "id": 4616,
                        "pid": 433,
                        "name": "曲松县",
                        "level": 3
                    },
                    {
                        "id": 4617,
                        "pid": 433,
                        "name": "桑日县",
                        "level": 3
                    },
                    {
                        "id": 4618,
                        "pid": 433,
                        "name": "洛扎县",
                        "level": 3
                    },
                    {
                        "id": 4619,
                        "pid": 433,
                        "name": "浪卡子县",
                        "level": 3
                    },
                    {
                        "id": 4620,
                        "pid": 433,
                        "name": "琼结县",
                        "level": 3
                    },
                    {
                        "id": 4621,
                        "pid": 433,
                        "name": "贡嘎县",
                        "level": 3
                    },
                    {
                        "id": 4622,
                        "pid": 433,
                        "name": "错那县",
                        "level": 3
                    },
                    {
                        "id": 4623,
                        "pid": 433,
                        "name": "隆子县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 434,
                "pid": 26,
                "name": "日喀则地区",
                "level": 2,
                "children2": [
                    {
                        "id": 4624,
                        "pid": 434,
                        "name": "亚东县",
                        "level": 3
                    },
                    {
                        "id": 4625,
                        "pid": 434,
                        "name": "仁布县",
                        "level": 3
                    },
                    {
                        "id": 4626,
                        "pid": 434,
                        "name": "仲巴县",
                        "level": 3
                    },
                    {
                        "id": 4627,
                        "pid": 434,
                        "name": "南木林县",
                        "level": 3
                    },
                    {
                        "id": 4628,
                        "pid": 434,
                        "name": "吉隆县",
                        "level": 3
                    },
                    {
                        "id": 4629,
                        "pid": 434,
                        "name": "定日县",
                        "level": 3
                    },
                    {
                        "id": 4630,
                        "pid": 434,
                        "name": "定结县",
                        "level": 3
                    },
                    {
                        "id": 4631,
                        "pid": 434,
                        "name": "岗巴县",
                        "level": 3
                    },
                    {
                        "id": 4632,
                        "pid": 434,
                        "name": "康马县",
                        "level": 3
                    },
                    {
                        "id": 4633,
                        "pid": 434,
                        "name": "拉孜县",
                        "level": 3
                    },
                    {
                        "id": 4634,
                        "pid": 434,
                        "name": "日喀则市",
                        "level": 3
                    },
                    {
                        "id": 4635,
                        "pid": 434,
                        "name": "昂仁县",
                        "level": 3
                    },
                    {
                        "id": 4636,
                        "pid": 434,
                        "name": "江孜县",
                        "level": 3
                    },
                    {
                        "id": 4637,
                        "pid": 434,
                        "name": "白朗县",
                        "level": 3
                    },
                    {
                        "id": 4638,
                        "pid": 434,
                        "name": "聂拉木县",
                        "level": 3
                    },
                    {
                        "id": 4639,
                        "pid": 434,
                        "name": "萨嘎县",
                        "level": 3
                    },
                    {
                        "id": 4640,
                        "pid": 434,
                        "name": "萨迦县",
                        "level": 3
                    },
                    {
                        "id": 4641,
                        "pid": 434,
                        "name": "谢通门县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 435,
                "pid": 26,
                "name": "那曲地区",
                "level": 2,
                "children2": [
                    {
                        "id": 4642,
                        "pid": 435,
                        "name": "嘉黎县",
                        "level": 3
                    },
                    {
                        "id": 4643,
                        "pid": 435,
                        "name": "安多县",
                        "level": 3
                    },
                    {
                        "id": 4644,
                        "pid": 435,
                        "name": "尼玛县",
                        "level": 3
                    },
                    {
                        "id": 4645,
                        "pid": 435,
                        "name": "巴青县",
                        "level": 3
                    },
                    {
                        "id": 4646,
                        "pid": 435,
                        "name": "比如县",
                        "level": 3
                    },
                    {
                        "id": 4647,
                        "pid": 435,
                        "name": "班戈县",
                        "level": 3
                    },
                    {
                        "id": 4648,
                        "pid": 435,
                        "name": "申扎县",
                        "level": 3
                    },
                    {
                        "id": 4649,
                        "pid": 435,
                        "name": "索县",
                        "level": 3
                    },
                    {
                        "id": 4650,
                        "pid": 435,
                        "name": "聂荣县",
                        "level": 3
                    },
                    {
                        "id": 4651,
                        "pid": 435,
                        "name": "那曲县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 436,
                "pid": 26,
                "name": "阿里地区",
                "level": 2,
                "children2": [
                    {
                        "id": 4652,
                        "pid": 436,
                        "name": "噶尔县",
                        "level": 3
                    },
                    {
                        "id": 4653,
                        "pid": 436,
                        "name": "措勤县",
                        "level": 3
                    },
                    {
                        "id": 4654,
                        "pid": 436,
                        "name": "改则县",
                        "level": 3
                    },
                    {
                        "id": 4655,
                        "pid": 436,
                        "name": "日土县",
                        "level": 3
                    },
                    {
                        "id": 4656,
                        "pid": 436,
                        "name": "普兰县",
                        "level": 3
                    },
                    {
                        "id": 4657,
                        "pid": 436,
                        "name": "札达县",
                        "level": 3
                    },
                    {
                        "id": 4658,
                        "pid": 436,
                        "name": "革吉县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 437,
                "pid": 26,
                "name": "林芝地区",
                "level": 2,
                "children2": [
                    {
                        "id": 4659,
                        "pid": 437,
                        "name": "墨脱县",
                        "level": 3
                    },
                    {
                        "id": 4660,
                        "pid": 437,
                        "name": "察隅县",
                        "level": 3
                    },
                    {
                        "id": 4661,
                        "pid": 437,
                        "name": "工布江达县",
                        "level": 3
                    },
                    {
                        "id": 4662,
                        "pid": 437,
                        "name": "朗县",
                        "level": 3
                    },
                    {
                        "id": 4663,
                        "pid": 437,
                        "name": "林芝县",
                        "level": 3
                    },
                    {
                        "id": 4664,
                        "pid": 437,
                        "name": "波密县",
                        "level": 3
                    },
                    {
                        "id": 4665,
                        "pid": 437,
                        "name": "米林县",
                        "level": 3
                    }
                ]
            }
        ]
    },
    {
        "id": 27,
        "pid": 0,
        "name": "陕西省",
        "level": 1,
        "children": [
            {
                "id": 438,
                "pid": 27,
                "name": "西安市",
                "level": 2,
                "children2": [
                    {
                        "id": 4666,
                        "pid": 438,
                        "name": "临潼区",
                        "level": 3
                    },
                    {
                        "id": 4667,
                        "pid": 438,
                        "name": "周至县",
                        "level": 3
                    },
                    {
                        "id": 4668,
                        "pid": 438,
                        "name": "户县",
                        "level": 3
                    },
                    {
                        "id": 4669,
                        "pid": 438,
                        "name": "新城区",
                        "level": 3
                    },
                    {
                        "id": 4670,
                        "pid": 438,
                        "name": "未央区",
                        "level": 3
                    },
                    {
                        "id": 4671,
                        "pid": 438,
                        "name": "灞桥区",
                        "level": 3
                    },
                    {
                        "id": 4672,
                        "pid": 438,
                        "name": "碑林区",
                        "level": 3
                    },
                    {
                        "id": 4673,
                        "pid": 438,
                        "name": "莲湖区",
                        "level": 3
                    },
                    {
                        "id": 4674,
                        "pid": 438,
                        "name": "蓝田县",
                        "level": 3
                    },
                    {
                        "id": 4675,
                        "pid": 438,
                        "name": "长安区",
                        "level": 3
                    },
                    {
                        "id": 4676,
                        "pid": 438,
                        "name": "阎良区",
                        "level": 3
                    },
                    {
                        "id": 4677,
                        "pid": 438,
                        "name": "雁塔区",
                        "level": 3
                    },
                    {
                        "id": 4678,
                        "pid": 438,
                        "name": "高陵县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 439,
                "pid": 27,
                "name": "铜川市",
                "level": 2,
                "children2": [
                    {
                        "id": 4679,
                        "pid": 439,
                        "name": "印台区",
                        "level": 3
                    },
                    {
                        "id": 4680,
                        "pid": 439,
                        "name": "宜君县",
                        "level": 3
                    },
                    {
                        "id": 4681,
                        "pid": 439,
                        "name": "王益区",
                        "level": 3
                    },
                    {
                        "id": 4682,
                        "pid": 439,
                        "name": "耀州区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 440,
                "pid": 27,
                "name": "宝鸡市",
                "level": 2,
                "children2": [
                    {
                        "id": 4683,
                        "pid": 440,
                        "name": "凤县",
                        "level": 3
                    },
                    {
                        "id": 4684,
                        "pid": 440,
                        "name": "凤翔县",
                        "level": 3
                    },
                    {
                        "id": 4685,
                        "pid": 440,
                        "name": "千阳县",
                        "level": 3
                    },
                    {
                        "id": 4686,
                        "pid": 440,
                        "name": "太白县",
                        "level": 3
                    },
                    {
                        "id": 4687,
                        "pid": 440,
                        "name": "岐山县",
                        "level": 3
                    },
                    {
                        "id": 4688,
                        "pid": 440,
                        "name": "扶风县",
                        "level": 3
                    },
                    {
                        "id": 4689,
                        "pid": 440,
                        "name": "渭滨区",
                        "level": 3
                    },
                    {
                        "id": 4690,
                        "pid": 440,
                        "name": "眉县",
                        "level": 3
                    },
                    {
                        "id": 4691,
                        "pid": 440,
                        "name": "金台区",
                        "level": 3
                    },
                    {
                        "id": 4692,
                        "pid": 440,
                        "name": "陇县",
                        "level": 3
                    },
                    {
                        "id": 4693,
                        "pid": 440,
                        "name": "陈仓区",
                        "level": 3
                    },
                    {
                        "id": 4694,
                        "pid": 440,
                        "name": "麟游县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 441,
                "pid": 27,
                "name": "咸阳市",
                "level": 2,
                "children2": [
                    {
                        "id": 4695,
                        "pid": 441,
                        "name": "三原县",
                        "level": 3
                    },
                    {
                        "id": 4696,
                        "pid": 441,
                        "name": "干县",
                        "level": 3
                    },
                    {
                        "id": 4697,
                        "pid": 441,
                        "name": "兴平市",
                        "level": 3
                    },
                    {
                        "id": 4698,
                        "pid": 441,
                        "name": "彬县",
                        "level": 3
                    },
                    {
                        "id": 4699,
                        "pid": 441,
                        "name": "旬邑县",
                        "level": 3
                    },
                    {
                        "id": 4700,
                        "pid": 441,
                        "name": "杨陵区",
                        "level": 3
                    },
                    {
                        "id": 4701,
                        "pid": 441,
                        "name": "武功县",
                        "level": 3
                    },
                    {
                        "id": 4702,
                        "pid": 441,
                        "name": "永寿县",
                        "level": 3
                    },
                    {
                        "id": 4703,
                        "pid": 441,
                        "name": "泾阳县",
                        "level": 3
                    },
                    {
                        "id": 4704,
                        "pid": 441,
                        "name": "淳化县",
                        "level": 3
                    },
                    {
                        "id": 4705,
                        "pid": 441,
                        "name": "渭城区",
                        "level": 3
                    },
                    {
                        "id": 4706,
                        "pid": 441,
                        "name": "礼泉县",
                        "level": 3
                    },
                    {
                        "id": 4707,
                        "pid": 441,
                        "name": "秦都区",
                        "level": 3
                    },
                    {
                        "id": 4708,
                        "pid": 441,
                        "name": "长武县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 442,
                "pid": 27,
                "name": "渭南市",
                "level": 2,
                "children2": [
                    {
                        "id": 4709,
                        "pid": 442,
                        "name": "临渭区",
                        "level": 3
                    },
                    {
                        "id": 4710,
                        "pid": 442,
                        "name": "华县",
                        "level": 3
                    },
                    {
                        "id": 4711,
                        "pid": 442,
                        "name": "华阴市",
                        "level": 3
                    },
                    {
                        "id": 4712,
                        "pid": 442,
                        "name": "合阳县",
                        "level": 3
                    },
                    {
                        "id": 4713,
                        "pid": 442,
                        "name": "大荔县",
                        "level": 3
                    },
                    {
                        "id": 4714,
                        "pid": 442,
                        "name": "富平县",
                        "level": 3
                    },
                    {
                        "id": 4715,
                        "pid": 442,
                        "name": "潼关县",
                        "level": 3
                    },
                    {
                        "id": 4716,
                        "pid": 442,
                        "name": "澄城县",
                        "level": 3
                    },
                    {
                        "id": 4717,
                        "pid": 442,
                        "name": "白水县",
                        "level": 3
                    },
                    {
                        "id": 4718,
                        "pid": 442,
                        "name": "蒲城县",
                        "level": 3
                    },
                    {
                        "id": 4719,
                        "pid": 442,
                        "name": "韩城市",
                        "level": 3
                    }
                ]
            },
            {
                "id": 443,
                "pid": 27,
                "name": "延安市",
                "level": 2,
                "children2": [
                    {
                        "id": 4720,
                        "pid": 443,
                        "name": "吴起县",
                        "level": 3
                    },
                    {
                        "id": 4721,
                        "pid": 443,
                        "name": "子长县",
                        "level": 3
                    },
                    {
                        "id": 4722,
                        "pid": 443,
                        "name": "安塞县",
                        "level": 3
                    },
                    {
                        "id": 4723,
                        "pid": 443,
                        "name": "宜川县",
                        "level": 3
                    },
                    {
                        "id": 4724,
                        "pid": 443,
                        "name": "宝塔区",
                        "level": 3
                    },
                    {
                        "id": 4725,
                        "pid": 443,
                        "name": "富县",
                        "level": 3
                    },
                    {
                        "id": 4726,
                        "pid": 443,
                        "name": "延川县",
                        "level": 3
                    },
                    {
                        "id": 4727,
                        "pid": 443,
                        "name": "延长县",
                        "level": 3
                    },
                    {
                        "id": 4728,
                        "pid": 443,
                        "name": "志丹县",
                        "level": 3
                    },
                    {
                        "id": 4729,
                        "pid": 443,
                        "name": "洛川县",
                        "level": 3
                    },
                    {
                        "id": 4730,
                        "pid": 443,
                        "name": "甘泉县",
                        "level": 3
                    },
                    {
                        "id": 4731,
                        "pid": 443,
                        "name": "黄陵县",
                        "level": 3
                    },
                    {
                        "id": 4732,
                        "pid": 443,
                        "name": "黄龙县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 444,
                "pid": 27,
                "name": "汉中市",
                "level": 2,
                "children2": [
                    {
                        "id": 4733,
                        "pid": 444,
                        "name": "佛坪县",
                        "level": 3
                    },
                    {
                        "id": 4734,
                        "pid": 444,
                        "name": "勉县",
                        "level": 3
                    },
                    {
                        "id": 4735,
                        "pid": 444,
                        "name": "南郑县",
                        "level": 3
                    },
                    {
                        "id": 4736,
                        "pid": 444,
                        "name": "城固县",
                        "level": 3
                    },
                    {
                        "id": 4737,
                        "pid": 444,
                        "name": "宁强县",
                        "level": 3
                    },
                    {
                        "id": 4738,
                        "pid": 444,
                        "name": "汉台区",
                        "level": 3
                    },
                    {
                        "id": 4739,
                        "pid": 444,
                        "name": "洋县",
                        "level": 3
                    },
                    {
                        "id": 4740,
                        "pid": 444,
                        "name": "留坝县",
                        "level": 3
                    },
                    {
                        "id": 4741,
                        "pid": 444,
                        "name": "略阳县",
                        "level": 3
                    },
                    {
                        "id": 4742,
                        "pid": 444,
                        "name": "西乡县",
                        "level": 3
                    },
                    {
                        "id": 4743,
                        "pid": 444,
                        "name": "镇巴县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 445,
                "pid": 27,
                "name": "榆林市",
                "level": 2,
                "children2": [
                    {
                        "id": 4744,
                        "pid": 445,
                        "name": "佳县",
                        "level": 3
                    },
                    {
                        "id": 4745,
                        "pid": 445,
                        "name": "吴堡县",
                        "level": 3
                    },
                    {
                        "id": 4746,
                        "pid": 445,
                        "name": "子洲县",
                        "level": 3
                    },
                    {
                        "id": 4747,
                        "pid": 445,
                        "name": "定边县",
                        "level": 3
                    },
                    {
                        "id": 4748,
                        "pid": 445,
                        "name": "府谷县",
                        "level": 3
                    },
                    {
                        "id": 4749,
                        "pid": 445,
                        "name": "榆林市榆阳区",
                        "level": 3
                    },
                    {
                        "id": 4750,
                        "pid": 445,
                        "name": "横山县",
                        "level": 3
                    },
                    {
                        "id": 4751,
                        "pid": 445,
                        "name": "清涧县",
                        "level": 3
                    },
                    {
                        "id": 4752,
                        "pid": 445,
                        "name": "神木县",
                        "level": 3
                    },
                    {
                        "id": 4753,
                        "pid": 445,
                        "name": "米脂县",
                        "level": 3
                    },
                    {
                        "id": 4754,
                        "pid": 445,
                        "name": "绥德县",
                        "level": 3
                    },
                    {
                        "id": 4755,
                        "pid": 445,
                        "name": "靖边县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 446,
                "pid": 27,
                "name": "安康市",
                "level": 2,
                "children2": [
                    {
                        "id": 4756,
                        "pid": 446,
                        "name": "宁陕县",
                        "level": 3
                    },
                    {
                        "id": 4757,
                        "pid": 446,
                        "name": "岚皋县",
                        "level": 3
                    },
                    {
                        "id": 4758,
                        "pid": 446,
                        "name": "平利县",
                        "level": 3
                    },
                    {
                        "id": 4759,
                        "pid": 446,
                        "name": "旬阳县",
                        "level": 3
                    },
                    {
                        "id": 4760,
                        "pid": 446,
                        "name": "汉滨区",
                        "level": 3
                    },
                    {
                        "id": 4761,
                        "pid": 446,
                        "name": "汉阴县",
                        "level": 3
                    },
                    {
                        "id": 4762,
                        "pid": 446,
                        "name": "白河县",
                        "level": 3
                    },
                    {
                        "id": 4763,
                        "pid": 446,
                        "name": "石泉县",
                        "level": 3
                    },
                    {
                        "id": 4764,
                        "pid": 446,
                        "name": "紫阳县",
                        "level": 3
                    },
                    {
                        "id": 4765,
                        "pid": 446,
                        "name": "镇坪县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 447,
                "pid": 27,
                "name": "商洛市",
                "level": 2,
                "children2": [
                    {
                        "id": 4766,
                        "pid": 447,
                        "name": "丹凤县",
                        "level": 3
                    },
                    {
                        "id": 4767,
                        "pid": 447,
                        "name": "商南县",
                        "level": 3
                    },
                    {
                        "id": 4768,
                        "pid": 447,
                        "name": "商州区",
                        "level": 3
                    },
                    {
                        "id": 4769,
                        "pid": 447,
                        "name": "山阳县",
                        "level": 3
                    },
                    {
                        "id": 4770,
                        "pid": 447,
                        "name": "柞水县",
                        "level": 3
                    },
                    {
                        "id": 4771,
                        "pid": 447,
                        "name": "洛南县",
                        "level": 3
                    },
                    {
                        "id": 4772,
                        "pid": 447,
                        "name": "镇安县",
                        "level": 3
                    }
                ]
            }
        ]
    },
    {
        "id": 28,
        "pid": 0,
        "name": "甘肃省",
        "level": 1,
        "children": [
            {
                "id": 448,
                "pid": 28,
                "name": "兰州市",
                "level": 2,
                "children2": [
                    {
                        "id": 4773,
                        "pid": 448,
                        "name": "七里河区",
                        "level": 3
                    },
                    {
                        "id": 4774,
                        "pid": 448,
                        "name": "城关区",
                        "level": 3
                    },
                    {
                        "id": 4775,
                        "pid": 448,
                        "name": "安宁区",
                        "level": 3
                    },
                    {
                        "id": 4776,
                        "pid": 448,
                        "name": "榆中县",
                        "level": 3
                    },
                    {
                        "id": 4777,
                        "pid": 448,
                        "name": "永登县",
                        "level": 3
                    },
                    {
                        "id": 4778,
                        "pid": 448,
                        "name": "皋兰县",
                        "level": 3
                    },
                    {
                        "id": 4779,
                        "pid": 448,
                        "name": "红古区",
                        "level": 3
                    },
                    {
                        "id": 4780,
                        "pid": 448,
                        "name": "西固区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 449,
                "pid": 28,
                "name": "嘉峪关市",
                "level": 2,
                "children2": [
                    {
                        "id": 4781,
                        "pid": 449,
                        "name": "嘉峪关市",
                        "level": 3
                    }
                ]
            },
            {
                "id": 450,
                "pid": 28,
                "name": "金昌市",
                "level": 2,
                "children2": [
                    {
                        "id": 4782,
                        "pid": 450,
                        "name": "永昌县",
                        "level": 3
                    },
                    {
                        "id": 4783,
                        "pid": 450,
                        "name": "金川区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 451,
                "pid": 28,
                "name": "白银市",
                "level": 2,
                "children2": [
                    {
                        "id": 4784,
                        "pid": 451,
                        "name": "会宁县",
                        "level": 3
                    },
                    {
                        "id": 4785,
                        "pid": 451,
                        "name": "平川区",
                        "level": 3
                    },
                    {
                        "id": 4786,
                        "pid": 451,
                        "name": "景泰县",
                        "level": 3
                    },
                    {
                        "id": 4787,
                        "pid": 451,
                        "name": "白银区",
                        "level": 3
                    },
                    {
                        "id": 4788,
                        "pid": 451,
                        "name": "靖远县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 452,
                "pid": 28,
                "name": "天水市",
                "level": 2,
                "children2": [
                    {
                        "id": 4789,
                        "pid": 452,
                        "name": "张家川回族自治县",
                        "level": 3
                    },
                    {
                        "id": 4790,
                        "pid": 452,
                        "name": "武山县",
                        "level": 3
                    },
                    {
                        "id": 4791,
                        "pid": 452,
                        "name": "清水县",
                        "level": 3
                    },
                    {
                        "id": 4792,
                        "pid": 452,
                        "name": "甘谷县",
                        "level": 3
                    },
                    {
                        "id": 4793,
                        "pid": 452,
                        "name": "秦安县",
                        "level": 3
                    },
                    {
                        "id": 4794,
                        "pid": 452,
                        "name": "秦州区",
                        "level": 3
                    },
                    {
                        "id": 4795,
                        "pid": 452,
                        "name": "麦积区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 453,
                "pid": 28,
                "name": "武威市",
                "level": 2,
                "children2": [
                    {
                        "id": 4796,
                        "pid": 453,
                        "name": "凉州区",
                        "level": 3
                    },
                    {
                        "id": 4797,
                        "pid": 453,
                        "name": "古浪县",
                        "level": 3
                    },
                    {
                        "id": 4798,
                        "pid": 453,
                        "name": "天祝藏族自治县",
                        "level": 3
                    },
                    {
                        "id": 4799,
                        "pid": 453,
                        "name": "民勤县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 454,
                "pid": 28,
                "name": "张掖市",
                "level": 2,
                "children2": [
                    {
                        "id": 4800,
                        "pid": 454,
                        "name": "临泽县",
                        "level": 3
                    },
                    {
                        "id": 4801,
                        "pid": 454,
                        "name": "山丹县",
                        "level": 3
                    },
                    {
                        "id": 4802,
                        "pid": 454,
                        "name": "民乐县",
                        "level": 3
                    },
                    {
                        "id": 4803,
                        "pid": 454,
                        "name": "甘州区",
                        "level": 3
                    },
                    {
                        "id": 4804,
                        "pid": 454,
                        "name": "肃南裕固族自治县",
                        "level": 3
                    },
                    {
                        "id": 4805,
                        "pid": 454,
                        "name": "高台县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 455,
                "pid": 28,
                "name": "平凉市",
                "level": 2,
                "children2": [
                    {
                        "id": 4806,
                        "pid": 455,
                        "name": "华亭县",
                        "level": 3
                    },
                    {
                        "id": 4807,
                        "pid": 455,
                        "name": "崆峒区",
                        "level": 3
                    },
                    {
                        "id": 4808,
                        "pid": 455,
                        "name": "崇信县",
                        "level": 3
                    },
                    {
                        "id": 4809,
                        "pid": 455,
                        "name": "庄浪县",
                        "level": 3
                    },
                    {
                        "id": 4810,
                        "pid": 455,
                        "name": "泾川县",
                        "level": 3
                    },
                    {
                        "id": 4811,
                        "pid": 455,
                        "name": "灵台县",
                        "level": 3
                    },
                    {
                        "id": 4812,
                        "pid": 455,
                        "name": "静宁县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 456,
                "pid": 28,
                "name": "酒泉市",
                "level": 2,
                "children2": [
                    {
                        "id": 4813,
                        "pid": 456,
                        "name": "敦煌市",
                        "level": 3
                    },
                    {
                        "id": 4814,
                        "pid": 456,
                        "name": "玉门市",
                        "level": 3
                    },
                    {
                        "id": 4815,
                        "pid": 456,
                        "name": "瓜州县（原安西县）",
                        "level": 3
                    },
                    {
                        "id": 4816,
                        "pid": 456,
                        "name": "肃北蒙古族自治县",
                        "level": 3
                    },
                    {
                        "id": 4817,
                        "pid": 456,
                        "name": "肃州区",
                        "level": 3
                    },
                    {
                        "id": 4818,
                        "pid": 456,
                        "name": "金塔县",
                        "level": 3
                    },
                    {
                        "id": 4819,
                        "pid": 456,
                        "name": "阿克塞哈萨克族自治县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 457,
                "pid": 28,
                "name": "庆阳市",
                "level": 2,
                "children2": [
                    {
                        "id": 4820,
                        "pid": 457,
                        "name": "华池县",
                        "level": 3
                    },
                    {
                        "id": 4821,
                        "pid": 457,
                        "name": "合水县",
                        "level": 3
                    },
                    {
                        "id": 4822,
                        "pid": 457,
                        "name": "宁县",
                        "level": 3
                    },
                    {
                        "id": 4823,
                        "pid": 457,
                        "name": "庆城县",
                        "level": 3
                    },
                    {
                        "id": 4824,
                        "pid": 457,
                        "name": "正宁县",
                        "level": 3
                    },
                    {
                        "id": 4825,
                        "pid": 457,
                        "name": "环县",
                        "level": 3
                    },
                    {
                        "id": 4826,
                        "pid": 457,
                        "name": "西峰区",
                        "level": 3
                    },
                    {
                        "id": 4827,
                        "pid": 457,
                        "name": "镇原县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 458,
                "pid": 28,
                "name": "定西市",
                "level": 2,
                "children2": [
                    {
                        "id": 4828,
                        "pid": 458,
                        "name": "临洮县",
                        "level": 3
                    },
                    {
                        "id": 4829,
                        "pid": 458,
                        "name": "安定区",
                        "level": 3
                    },
                    {
                        "id": 4830,
                        "pid": 458,
                        "name": "岷县",
                        "level": 3
                    },
                    {
                        "id": 4831,
                        "pid": 458,
                        "name": "渭源县",
                        "level": 3
                    },
                    {
                        "id": 4832,
                        "pid": 458,
                        "name": "漳县",
                        "level": 3
                    },
                    {
                        "id": 4833,
                        "pid": 458,
                        "name": "通渭县",
                        "level": 3
                    },
                    {
                        "id": 4834,
                        "pid": 458,
                        "name": "陇西县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 459,
                "pid": 28,
                "name": "陇南市",
                "level": 2,
                "children2": [
                    {
                        "id": 4835,
                        "pid": 459,
                        "name": "两当县",
                        "level": 3
                    },
                    {
                        "id": 4836,
                        "pid": 459,
                        "name": "宕昌县",
                        "level": 3
                    },
                    {
                        "id": 4837,
                        "pid": 459,
                        "name": "康县",
                        "level": 3
                    },
                    {
                        "id": 4838,
                        "pid": 459,
                        "name": "徽县",
                        "level": 3
                    },
                    {
                        "id": 4839,
                        "pid": 459,
                        "name": "成县",
                        "level": 3
                    },
                    {
                        "id": 4840,
                        "pid": 459,
                        "name": "文县",
                        "level": 3
                    },
                    {
                        "id": 4841,
                        "pid": 459,
                        "name": "武都区",
                        "level": 3
                    },
                    {
                        "id": 4842,
                        "pid": 459,
                        "name": "礼县",
                        "level": 3
                    },
                    {
                        "id": 4843,
                        "pid": 459,
                        "name": "西和县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 460,
                "pid": 28,
                "name": "临夏回族自治州",
                "level": 2,
                "children2": [
                    {
                        "id": 4844,
                        "pid": 460,
                        "name": "东乡族自治县",
                        "level": 3
                    },
                    {
                        "id": 4845,
                        "pid": 460,
                        "name": "临夏县",
                        "level": 3
                    },
                    {
                        "id": 4846,
                        "pid": 460,
                        "name": "临夏市",
                        "level": 3
                    },
                    {
                        "id": 4847,
                        "pid": 460,
                        "name": "和政县",
                        "level": 3
                    },
                    {
                        "id": 4848,
                        "pid": 460,
                        "name": "广河县",
                        "level": 3
                    },
                    {
                        "id": 4849,
                        "pid": 460,
                        "name": "康乐县",
                        "level": 3
                    },
                    {
                        "id": 4850,
                        "pid": 460,
                        "name": "永靖县",
                        "level": 3
                    },
                    {
                        "id": 4851,
                        "pid": 460,
                        "name": "积石山保安族东乡族撒拉族自治县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 461,
                "pid": 28,
                "name": "甘南藏族自治州",
                "level": 2,
                "children2": [
                    {
                        "id": 4852,
                        "pid": 461,
                        "name": "临潭县",
                        "level": 3
                    },
                    {
                        "id": 4853,
                        "pid": 461,
                        "name": "卓尼县",
                        "level": 3
                    },
                    {
                        "id": 4854,
                        "pid": 461,
                        "name": "合作市",
                        "level": 3
                    },
                    {
                        "id": 4855,
                        "pid": 461,
                        "name": "夏河县",
                        "level": 3
                    },
                    {
                        "id": 4856,
                        "pid": 461,
                        "name": "玛曲县",
                        "level": 3
                    },
                    {
                        "id": 4857,
                        "pid": 461,
                        "name": "碌曲县",
                        "level": 3
                    },
                    {
                        "id": 4858,
                        "pid": 461,
                        "name": "舟曲县",
                        "level": 3
                    },
                    {
                        "id": 4859,
                        "pid": 461,
                        "name": "迭部县",
                        "level": 3
                    }
                ]
            }
        ]
    },
    {
        "id": 29,
        "pid": 0,
        "name": "青海省",
        "level": 1,
        "children": [
            {
                "id": 462,
                "pid": 29,
                "name": "西宁市",
                "level": 2,
                "children2": [
                    {
                        "id": 4860,
                        "pid": 462,
                        "name": "城东区",
                        "level": 3
                    },
                    {
                        "id": 4861,
                        "pid": 462,
                        "name": "城中区",
                        "level": 3
                    },
                    {
                        "id": 4862,
                        "pid": 462,
                        "name": "城北区",
                        "level": 3
                    },
                    {
                        "id": 4863,
                        "pid": 462,
                        "name": "城西区",
                        "level": 3
                    },
                    {
                        "id": 4864,
                        "pid": 462,
                        "name": "大通回族土族自治县",
                        "level": 3
                    },
                    {
                        "id": 4865,
                        "pid": 462,
                        "name": "湟中县",
                        "level": 3
                    },
                    {
                        "id": 4866,
                        "pid": 462,
                        "name": "湟源县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 463,
                "pid": 29,
                "name": "海东地区",
                "level": 2,
                "children2": [
                    {
                        "id": 4867,
                        "pid": 463,
                        "name": "乐都县",
                        "level": 3
                    },
                    {
                        "id": 4868,
                        "pid": 463,
                        "name": "互助土族自治县",
                        "level": 3
                    },
                    {
                        "id": 4869,
                        "pid": 463,
                        "name": "化隆回族自治县",
                        "level": 3
                    },
                    {
                        "id": 4870,
                        "pid": 463,
                        "name": "平安县",
                        "level": 3
                    },
                    {
                        "id": 4871,
                        "pid": 463,
                        "name": "循化撒拉族自治县",
                        "level": 3
                    },
                    {
                        "id": 4872,
                        "pid": 463,
                        "name": "民和回族土族自治县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 464,
                "pid": 29,
                "name": "海北藏族自治州",
                "level": 2,
                "children2": [
                    {
                        "id": 4873,
                        "pid": 464,
                        "name": "刚察县",
                        "level": 3
                    },
                    {
                        "id": 4874,
                        "pid": 464,
                        "name": "海晏县",
                        "level": 3
                    },
                    {
                        "id": 4875,
                        "pid": 464,
                        "name": "祁连县",
                        "level": 3
                    },
                    {
                        "id": 4876,
                        "pid": 464,
                        "name": "门源回族自治县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 465,
                "pid": 29,
                "name": "黄南藏族自治州",
                "level": 2,
                "children2": [
                    {
                        "id": 4877,
                        "pid": 465,
                        "name": "同仁县",
                        "level": 3
                    },
                    {
                        "id": 4878,
                        "pid": 465,
                        "name": "尖扎县",
                        "level": 3
                    },
                    {
                        "id": 4879,
                        "pid": 465,
                        "name": "河南蒙古族自治县",
                        "level": 3
                    },
                    {
                        "id": 4880,
                        "pid": 465,
                        "name": "泽库县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 466,
                "pid": 29,
                "name": "海南藏族自治州",
                "level": 2,
                "children2": [
                    {
                        "id": 4881,
                        "pid": 466,
                        "name": "共和县",
                        "level": 3
                    },
                    {
                        "id": 4882,
                        "pid": 466,
                        "name": "兴海县",
                        "level": 3
                    },
                    {
                        "id": 4883,
                        "pid": 466,
                        "name": "同德县",
                        "level": 3
                    },
                    {
                        "id": 4884,
                        "pid": 466,
                        "name": "贵南县",
                        "level": 3
                    },
                    {
                        "id": 4885,
                        "pid": 466,
                        "name": "贵德县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 467,
                "pid": 29,
                "name": "果洛藏族自治州",
                "level": 2,
                "children2": [
                    {
                        "id": 4886,
                        "pid": 467,
                        "name": "久治县",
                        "level": 3
                    },
                    {
                        "id": 4887,
                        "pid": 467,
                        "name": "玛多县",
                        "level": 3
                    },
                    {
                        "id": 4888,
                        "pid": 467,
                        "name": "玛沁县",
                        "level": 3
                    },
                    {
                        "id": 4889,
                        "pid": 467,
                        "name": "班玛县",
                        "level": 3
                    },
                    {
                        "id": 4890,
                        "pid": 467,
                        "name": "甘德县",
                        "level": 3
                    },
                    {
                        "id": 4891,
                        "pid": 467,
                        "name": "达日县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 468,
                "pid": 29,
                "name": "玉树藏族自治州",
                "level": 2,
                "children2": [
                    {
                        "id": 4892,
                        "pid": 468,
                        "name": "囊谦县",
                        "level": 3
                    },
                    {
                        "id": 4893,
                        "pid": 468,
                        "name": "曲麻莱县",
                        "level": 3
                    },
                    {
                        "id": 4894,
                        "pid": 468,
                        "name": "杂多县",
                        "level": 3
                    },
                    {
                        "id": 4895,
                        "pid": 468,
                        "name": "治多县",
                        "level": 3
                    },
                    {
                        "id": 4896,
                        "pid": 468,
                        "name": "玉树县",
                        "level": 3
                    },
                    {
                        "id": 4897,
                        "pid": 468,
                        "name": "称多县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 469,
                "pid": 29,
                "name": "海西蒙古族藏族自治州",
                "level": 2,
                "children2": [
                    {
                        "id": 4898,
                        "pid": 469,
                        "name": "乌兰县",
                        "level": 3
                    },
                    {
                        "id": 4899,
                        "pid": 469,
                        "name": "冷湖行委",
                        "level": 3
                    },
                    {
                        "id": 4900,
                        "pid": 469,
                        "name": "大柴旦行委",
                        "level": 3
                    },
                    {
                        "id": 4901,
                        "pid": 469,
                        "name": "天峻县",
                        "level": 3
                    },
                    {
                        "id": 4902,
                        "pid": 469,
                        "name": "德令哈市",
                        "level": 3
                    },
                    {
                        "id": 4903,
                        "pid": 469,
                        "name": "格尔木市",
                        "level": 3
                    },
                    {
                        "id": 4904,
                        "pid": 469,
                        "name": "茫崖行委",
                        "level": 3
                    },
                    {
                        "id": 4905,
                        "pid": 469,
                        "name": "都兰县",
                        "level": 3
                    }
                ]
            }
        ]
    },
    {
        "id": 30,
        "pid": 0,
        "name": "宁夏回族自治区",
        "level": 1,
        "children": [
            {
                "id": 470,
                "pid": 30,
                "name": "银川市",
                "level": 2,
                "children2": [
                    {
                        "id": 4906,
                        "pid": 470,
                        "name": "兴庆区",
                        "level": 3
                    },
                    {
                        "id": 4907,
                        "pid": 470,
                        "name": "永宁县",
                        "level": 3
                    },
                    {
                        "id": 4908,
                        "pid": 470,
                        "name": "灵武市",
                        "level": 3
                    },
                    {
                        "id": 4909,
                        "pid": 470,
                        "name": "西夏区",
                        "level": 3
                    },
                    {
                        "id": 4910,
                        "pid": 470,
                        "name": "贺兰县",
                        "level": 3
                    },
                    {
                        "id": 4911,
                        "pid": 470,
                        "name": "金凤区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 471,
                "pid": 30,
                "name": "石嘴山市",
                "level": 2,
                "children2": [
                    {
                        "id": 4912,
                        "pid": 471,
                        "name": "大武口区",
                        "level": 3
                    },
                    {
                        "id": 4913,
                        "pid": 471,
                        "name": "平罗县",
                        "level": 3
                    },
                    {
                        "id": 4914,
                        "pid": 471,
                        "name": "惠农区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 472,
                "pid": 30,
                "name": "吴忠市",
                "level": 2,
                "children2": [
                    {
                        "id": 4915,
                        "pid": 472,
                        "name": "利通区",
                        "level": 3
                    },
                    {
                        "id": 4916,
                        "pid": 472,
                        "name": "同心县",
                        "level": 3
                    },
                    {
                        "id": 4917,
                        "pid": 472,
                        "name": "盐池县",
                        "level": 3
                    },
                    {
                        "id": 4918,
                        "pid": 472,
                        "name": "青铜峡市",
                        "level": 3
                    }
                ]
            },
            {
                "id": 473,
                "pid": 30,
                "name": "固原市",
                "level": 2,
                "children2": [
                    {
                        "id": 4919,
                        "pid": 473,
                        "name": "原州区",
                        "level": 3
                    },
                    {
                        "id": 4920,
                        "pid": 473,
                        "name": "彭阳县",
                        "level": 3
                    },
                    {
                        "id": 4921,
                        "pid": 473,
                        "name": "泾源县",
                        "level": 3
                    },
                    {
                        "id": 4922,
                        "pid": 473,
                        "name": "西吉县",
                        "level": 3
                    },
                    {
                        "id": 4923,
                        "pid": 473,
                        "name": "隆德县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 474,
                "pid": 30,
                "name": "中卫市",
                "level": 2,
                "children2": [
                    {
                        "id": 4924,
                        "pid": 474,
                        "name": "中宁县",
                        "level": 3
                    },
                    {
                        "id": 4925,
                        "pid": 474,
                        "name": "沙坡头区",
                        "level": 3
                    },
                    {
                        "id": 4926,
                        "pid": 474,
                        "name": "海原县",
                        "level": 3
                    }
                ]
            }
        ]
    },
    {
        "id": 31,
        "pid": 0,
        "name": "新疆维吾尔自治区",
        "level": 1,
        "children": [
            {
                "id": 475,
                "pid": 31,
                "name": "乌鲁木齐市",
                "level": 2,
                "children2": [
                    {
                        "id": 4927,
                        "pid": 475,
                        "name": "东山区",
                        "level": 3
                    },
                    {
                        "id": 4928,
                        "pid": 475,
                        "name": "乌鲁木齐县",
                        "level": 3
                    },
                    {
                        "id": 4929,
                        "pid": 475,
                        "name": "天山区",
                        "level": 3
                    },
                    {
                        "id": 4930,
                        "pid": 475,
                        "name": "头屯河区",
                        "level": 3
                    },
                    {
                        "id": 4931,
                        "pid": 475,
                        "name": "新市区",
                        "level": 3
                    },
                    {
                        "id": 4932,
                        "pid": 475,
                        "name": "水磨沟区",
                        "level": 3
                    },
                    {
                        "id": 4933,
                        "pid": 475,
                        "name": "沙依巴克区",
                        "level": 3
                    },
                    {
                        "id": 4934,
                        "pid": 475,
                        "name": "达坂城区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 476,
                "pid": 31,
                "name": "克拉玛依市",
                "level": 2,
                "children2": [
                    {
                        "id": 4935,
                        "pid": 476,
                        "name": "乌尔禾区",
                        "level": 3
                    },
                    {
                        "id": 4936,
                        "pid": 476,
                        "name": "克拉玛依区",
                        "level": 3
                    },
                    {
                        "id": 4937,
                        "pid": 476,
                        "name": "独山子区",
                        "level": 3
                    },
                    {
                        "id": 4938,
                        "pid": 476,
                        "name": "白碱滩区",
                        "level": 3
                    }
                ]
            },
            {
                "id": 477,
                "pid": 31,
                "name": "吐鲁番地区",
                "level": 2,
                "children2": [
                    {
                        "id": 4939,
                        "pid": 477,
                        "name": "吐鲁番市",
                        "level": 3
                    },
                    {
                        "id": 4940,
                        "pid": 477,
                        "name": "托克逊县",
                        "level": 3
                    },
                    {
                        "id": 4941,
                        "pid": 477,
                        "name": "鄯善县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 478,
                "pid": 31,
                "name": "哈密地区",
                "level": 2,
                "children2": [
                    {
                        "id": 4942,
                        "pid": 478,
                        "name": "伊吾县",
                        "level": 3
                    },
                    {
                        "id": 4943,
                        "pid": 478,
                        "name": "哈密市",
                        "level": 3
                    },
                    {
                        "id": 4944,
                        "pid": 478,
                        "name": "巴里坤哈萨克自治县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 479,
                "pid": 31,
                "name": "昌吉回族自治州",
                "level": 2,
                "children2": [
                    {
                        "id": 4945,
                        "pid": 479,
                        "name": "吉木萨尔县",
                        "level": 3
                    },
                    {
                        "id": 4946,
                        "pid": 479,
                        "name": "呼图壁县",
                        "level": 3
                    },
                    {
                        "id": 4947,
                        "pid": 479,
                        "name": "奇台县",
                        "level": 3
                    },
                    {
                        "id": 4948,
                        "pid": 479,
                        "name": "昌吉市",
                        "level": 3
                    },
                    {
                        "id": 4949,
                        "pid": 479,
                        "name": "木垒哈萨克自治县",
                        "level": 3
                    },
                    {
                        "id": 4950,
                        "pid": 479,
                        "name": "玛纳斯县",
                        "level": 3
                    },
                    {
                        "id": 4951,
                        "pid": 479,
                        "name": "米泉市",
                        "level": 3
                    },
                    {
                        "id": 4952,
                        "pid": 479,
                        "name": "阜康市",
                        "level": 3
                    }
                ]
            },
            {
                "id": 480,
                "pid": 31,
                "name": "博尔塔拉蒙古自治州",
                "level": 2,
                "children2": [
                    {
                        "id": 4953,
                        "pid": 480,
                        "name": "博乐市",
                        "level": 3
                    },
                    {
                        "id": 4954,
                        "pid": 480,
                        "name": "温泉县",
                        "level": 3
                    },
                    {
                        "id": 4955,
                        "pid": 480,
                        "name": "精河县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 481,
                "pid": 31,
                "name": "巴音郭楞蒙古自治州",
                "level": 2,
                "children2": [
                    {
                        "id": 4956,
                        "pid": 481,
                        "name": "博湖县",
                        "level": 3
                    },
                    {
                        "id": 4957,
                        "pid": 481,
                        "name": "和硕县",
                        "level": 3
                    },
                    {
                        "id": 4958,
                        "pid": 481,
                        "name": "和静县",
                        "level": 3
                    },
                    {
                        "id": 4959,
                        "pid": 481,
                        "name": "尉犁县",
                        "level": 3
                    },
                    {
                        "id": 4960,
                        "pid": 481,
                        "name": "库尔勒市",
                        "level": 3
                    },
                    {
                        "id": 4961,
                        "pid": 481,
                        "name": "焉耆回族自治县",
                        "level": 3
                    },
                    {
                        "id": 4962,
                        "pid": 481,
                        "name": "若羌县",
                        "level": 3
                    },
                    {
                        "id": 4963,
                        "pid": 481,
                        "name": "轮台县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 482,
                "pid": 31,
                "name": "阿克苏地区",
                "level": 2,
                "children2": [
                    {
                        "id": 4964,
                        "pid": 482,
                        "name": "乌什县",
                        "level": 3
                    },
                    {
                        "id": 4965,
                        "pid": 482,
                        "name": "库车县",
                        "level": 3
                    },
                    {
                        "id": 4966,
                        "pid": 482,
                        "name": "拜城县",
                        "level": 3
                    },
                    {
                        "id": 4967,
                        "pid": 482,
                        "name": "新和县",
                        "level": 3
                    },
                    {
                        "id": 4968,
                        "pid": 482,
                        "name": "柯坪县",
                        "level": 3
                    },
                    {
                        "id": 4969,
                        "pid": 482,
                        "name": "沙雅县",
                        "level": 3
                    },
                    {
                        "id": 4970,
                        "pid": 482,
                        "name": "温宿县",
                        "level": 3
                    },
                    {
                        "id": 4971,
                        "pid": 482,
                        "name": "阿克苏市",
                        "level": 3
                    },
                    {
                        "id": 4972,
                        "pid": 482,
                        "name": "阿瓦提县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 483,
                "pid": 31,
                "name": "克孜勒苏柯尔克孜自治州",
                "level": 2,
                "children2": [
                    {
                        "id": 4973,
                        "pid": 483,
                        "name": "乌恰县",
                        "level": 3
                    },
                    {
                        "id": 4974,
                        "pid": 483,
                        "name": "阿克陶县",
                        "level": 3
                    },
                    {
                        "id": 4975,
                        "pid": 483,
                        "name": "阿合奇县",
                        "level": 3
                    },
                    {
                        "id": 4976,
                        "pid": 483,
                        "name": "阿图什市",
                        "level": 3
                    }
                ]
            },
            {
                "id": 484,
                "pid": 31,
                "name": "喀什地区",
                "level": 2,
                "children2": [
                    {
                        "id": 4977,
                        "pid": 484,
                        "name": "伽师县",
                        "level": 3
                    },
                    {
                        "id": 4978,
                        "pid": 484,
                        "name": "叶城县",
                        "level": 3
                    },
                    {
                        "id": 4979,
                        "pid": 484,
                        "name": "喀什市",
                        "level": 3
                    },
                    {
                        "id": 4980,
                        "pid": 484,
                        "name": "塔什库尔干塔吉克自治县",
                        "level": 3
                    },
                    {
                        "id": 4981,
                        "pid": 484,
                        "name": "岳普湖县",
                        "level": 3
                    },
                    {
                        "id": 4982,
                        "pid": 484,
                        "name": "巴楚县",
                        "level": 3
                    },
                    {
                        "id": 4983,
                        "pid": 484,
                        "name": "泽普县",
                        "level": 3
                    },
                    {
                        "id": 4984,
                        "pid": 484,
                        "name": "疏勒县",
                        "level": 3
                    },
                    {
                        "id": 4985,
                        "pid": 484,
                        "name": "疏附县",
                        "level": 3
                    },
                    {
                        "id": 4986,
                        "pid": 484,
                        "name": "英吉沙县",
                        "level": 3
                    },
                    {
                        "id": 4987,
                        "pid": 484,
                        "name": "莎车县",
                        "level": 3
                    },
                    {
                        "id": 4988,
                        "pid": 484,
                        "name": "麦盖提县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 485,
                "pid": 31,
                "name": "和田地区",
                "level": 2,
                "children2": [
                    {
                        "id": 4989,
                        "pid": 485,
                        "name": "于田县",
                        "level": 3
                    },
                    {
                        "id": 4990,
                        "pid": 485,
                        "name": "和田县",
                        "level": 3
                    },
                    {
                        "id": 4991,
                        "pid": 485,
                        "name": "和田市",
                        "level": 3
                    },
                    {
                        "id": 4992,
                        "pid": 485,
                        "name": "墨玉县",
                        "level": 3
                    },
                    {
                        "id": 4993,
                        "pid": 485,
                        "name": "民丰县",
                        "level": 3
                    },
                    {
                        "id": 4994,
                        "pid": 485,
                        "name": "洛浦县",
                        "level": 3
                    },
                    {
                        "id": 4995,
                        "pid": 485,
                        "name": "皮山县",
                        "level": 3
                    },
                    {
                        "id": 4996,
                        "pid": 485,
                        "name": "策勒县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 486,
                "pid": 31,
                "name": "伊犁哈萨克自治州",
                "level": 2,
                "children2": [
                    {
                        "id": 4997,
                        "pid": 486,
                        "name": "伊宁县",
                        "level": 3
                    },
                    {
                        "id": 4998,
                        "pid": 486,
                        "name": "伊宁市",
                        "level": 3
                    },
                    {
                        "id": 4999,
                        "pid": 486,
                        "name": "奎屯市",
                        "level": 3
                    },
                    {
                        "id": 5000,
                        "pid": 486,
                        "name": "察布查尔锡伯自治县",
                        "level": 3
                    },
                    {
                        "id": 5001,
                        "pid": 486,
                        "name": "尼勒克县",
                        "level": 3
                    },
                    {
                        "id": 5002,
                        "pid": 486,
                        "name": "巩留县",
                        "level": 3
                    },
                    {
                        "id": 5003,
                        "pid": 486,
                        "name": "新源县",
                        "level": 3
                    },
                    {
                        "id": 5004,
                        "pid": 486,
                        "name": "昭苏县",
                        "level": 3
                    },
                    {
                        "id": 5005,
                        "pid": 486,
                        "name": "特克斯县",
                        "level": 3
                    },
                    {
                        "id": 5006,
                        "pid": 486,
                        "name": "霍城县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 487,
                "pid": 31,
                "name": "塔城地区",
                "level": 2,
                "children2": [
                    {
                        "id": 5007,
                        "pid": 487,
                        "name": "乌苏市",
                        "level": 3
                    },
                    {
                        "id": 5008,
                        "pid": 487,
                        "name": "和布克赛尔蒙古自治县",
                        "level": 3
                    },
                    {
                        "id": 5009,
                        "pid": 487,
                        "name": "塔城市",
                        "level": 3
                    },
                    {
                        "id": 5010,
                        "pid": 487,
                        "name": "托里县",
                        "level": 3
                    },
                    {
                        "id": 5011,
                        "pid": 487,
                        "name": "沙湾县",
                        "level": 3
                    },
                    {
                        "id": 5012,
                        "pid": 487,
                        "name": "裕民县",
                        "level": 3
                    },
                    {
                        "id": 5013,
                        "pid": 487,
                        "name": "额敏县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 488,
                "pid": 31,
                "name": "阿勒泰地区",
                "level": 2,
                "children2": [
                    {
                        "id": 5014,
                        "pid": 488,
                        "name": "吉木乃县",
                        "level": 3
                    },
                    {
                        "id": 5015,
                        "pid": 488,
                        "name": "哈巴河县",
                        "level": 3
                    },
                    {
                        "id": 5016,
                        "pid": 488,
                        "name": "富蕴县",
                        "level": 3
                    },
                    {
                        "id": 5017,
                        "pid": 488,
                        "name": "布尔津县",
                        "level": 3
                    },
                    {
                        "id": 5018,
                        "pid": 488,
                        "name": "福海县",
                        "level": 3
                    },
                    {
                        "id": 5019,
                        "pid": 488,
                        "name": "阿勒泰市",
                        "level": 3
                    },
                    {
                        "id": 5020,
                        "pid": 488,
                        "name": "青河县",
                        "level": 3
                    }
                ]
            },
            {
                "id": 489,
                "pid": 31,
                "name": "石河子市",
                "level": 2,
                "children2": [
                    {
                        "id": 5021,
                        "pid": 489,
                        "name": "石河子市",
                        "level": 3
                    }
                ]
            },
            {
                "id": 490,
                "pid": 31,
                "name": "阿拉尔市",
                "level": 2,
                "children2": [
                    {
                        "id": 5022,
                        "pid": 490,
                        "name": "阿拉尔市",
                        "level": 3
                    }
                ]
            },
            {
                "id": 491,
                "pid": 31,
                "name": "图木舒克市",
                "level": 2,
                "children2": [
                    {
                        "id": 5023,
                        "pid": 491,
                        "name": "图木舒克市",
                        "level": 3
                    }
                ]
            },
            {
                "id": 492,
                "pid": 31,
                "name": "五家渠市",
                "level": 2,
                "children2": [
                    {
                        "id": 5024,
                        "pid": 492,
                        "name": "五家渠市",
                        "level": 3
                    }
                ]
            }
        ]
    },
    {
        "id": 32,
        "pid": 0,
        "name": "台湾省",
        "level": 1,
        "children": [
            {
                "id": 493,
                "pid": 32,
                "name": "台北市",
                "level": 2,
                "children2": []
            },
            {
                "id": 494,
                "pid": 32,
                "name": "高雄市",
                "level": 2,
                "children2": []
            },
            {
                "id": 495,
                "pid": 32,
                "name": "基隆市",
                "level": 2,
                "children2": []
            },
            {
                "id": 496,
                "pid": 32,
                "name": "台中市",
                "level": 2,
                "children2": []
            },
            {
                "id": 497,
                "pid": 32,
                "name": "台南市",
                "level": 2,
                "children2": []
            },
            {
                "id": 498,
                "pid": 32,
                "name": "新竹市",
                "level": 2,
                "children2": []
            },
            {
                "id": 499,
                "pid": 32,
                "name": "嘉义市",
                "level": 2,
                "children2": []
            },
            {
                "id": 500,
                "pid": 32,
                "name": "台北县",
                "level": 2,
                "children2": []
            },
            {
                "id": 501,
                "pid": 32,
                "name": "宜兰县",
                "level": 2,
                "children2": []
            },
            {
                "id": 502,
                "pid": 32,
                "name": "桃园县",
                "level": 2,
                "children2": []
            },
            {
                "id": 503,
                "pid": 32,
                "name": "新竹县",
                "level": 2,
                "children2": []
            },
            {
                "id": 504,
                "pid": 32,
                "name": "苗栗县",
                "level": 2,
                "children2": []
            },
            {
                "id": 505,
                "pid": 32,
                "name": "台中县",
                "level": 2,
                "children2": []
            },
            {
                "id": 506,
                "pid": 32,
                "name": "彰化县",
                "level": 2,
                "children2": []
            },
            {
                "id": 507,
                "pid": 32,
                "name": "南投县",
                "level": 2,
                "children2": []
            },
            {
                "id": 508,
                "pid": 32,
                "name": "云林县",
                "level": 2,
                "children2": []
            },
            {
                "id": 509,
                "pid": 32,
                "name": "嘉义县",
                "level": 2,
                "children2": []
            },
            {
                "id": 510,
                "pid": 32,
                "name": "台南县",
                "level": 2,
                "children2": []
            },
            {
                "id": 511,
                "pid": 32,
                "name": "高雄县",
                "level": 2,
                "children2": []
            },
            {
                "id": 512,
                "pid": 32,
                "name": "屏东县",
                "level": 2,
                "children2": []
            },
            {
                "id": 513,
                "pid": 32,
                "name": "澎湖县",
                "level": 2,
                "children2": []
            },
            {
                "id": 514,
                "pid": 32,
                "name": "台东县",
                "level": 2,
                "children2": []
            },
            {
                "id": 515,
                "pid": 32,
                "name": "花莲县",
                "level": 2,
                "children2": []
            }
        ]
    },
    {
        "id": 33,
        "pid": 0,
        "name": "香港特别行政区",
        "level": 1,
        "children": [
            {
                "id": 516,
                "pid": 33,
                "name": "中西区",
                "level": 2,
                "children2": []
            },
            {
                "id": 517,
                "pid": 33,
                "name": "东区",
                "level": 2,
                "children2": []
            },
            {
                "id": 518,
                "pid": 33,
                "name": "九龙城区",
                "level": 2,
                "children2": []
            },
            {
                "id": 519,
                "pid": 33,
                "name": "观塘区",
                "level": 2,
                "children2": []
            },
            {
                "id": 520,
                "pid": 33,
                "name": "南区",
                "level": 2,
                "children2": []
            },
            {
                "id": 521,
                "pid": 33,
                "name": "深水埗区",
                "level": 2,
                "children2": []
            },
            {
                "id": 522,
                "pid": 33,
                "name": "黄大仙区",
                "level": 2,
                "children2": []
            },
            {
                "id": 523,
                "pid": 33,
                "name": "湾仔区",
                "level": 2,
                "children2": []
            },
            {
                "id": 524,
                "pid": 33,
                "name": "油尖旺区",
                "level": 2,
                "children2": []
            },
            {
                "id": 525,
                "pid": 33,
                "name": "离岛区",
                "level": 2,
                "children2": []
            },
            {
                "id": 526,
                "pid": 33,
                "name": "葵青区",
                "level": 2,
                "children2": []
            },
            {
                "id": 527,
                "pid": 33,
                "name": "北区",
                "level": 2,
                "children2": []
            },
            {
                "id": 528,
                "pid": 33,
                "name": "西贡区",
                "level": 2,
                "children2": []
            },
            {
                "id": 529,
                "pid": 33,
                "name": "沙田区",
                "level": 2,
                "children2": []
            },
            {
                "id": 530,
                "pid": 33,
                "name": "屯门区",
                "level": 2,
                "children2": []
            },
            {
                "id": 531,
                "pid": 33,
                "name": "大埔区",
                "level": 2,
                "children2": []
            },
            {
                "id": 532,
                "pid": 33,
                "name": "荃湾区",
                "level": 2,
                "children2": []
            },
            {
                "id": 533,
                "pid": 33,
                "name": "元朗区",
                "level": 2,
                "children2": []
            }
        ]
    },
    {
        "id": 34,
        "pid": 0,
        "name": "澳门特别行政区",
        "level": 1,
        "children": [
            {
                "id": 534,
                "pid": 34,
                "name": "澳门特别行政区",
                "level": 2,
                "children2": []
            }
        ]
    },
    {
        "id": 35,
        "pid": 0,
        "name": "海外",
        "level": 1,
        "children": [
            {
                "id": 535,
                "pid": 35,
                "name": "美国",
                "level": 2,
                "children2": []
            },
            {
                "id": 536,
                "pid": 35,
                "name": "加拿大",
                "level": 2,
                "children2": []
            },
            {
                "id": 537,
                "pid": 35,
                "name": "澳大利亚",
                "level": 2,
                "children2": []
            },
            {
                "id": 538,
                "pid": 35,
                "name": "新西兰",
                "level": 2,
                "children2": []
            },
            {
                "id": 539,
                "pid": 35,
                "name": "英国",
                "level": 2,
                "children2": []
            },
            {
                "id": 540,
                "pid": 35,
                "name": "法国",
                "level": 2,
                "children2": []
            },
            {
                "id": 541,
                "pid": 35,
                "name": "德国",
                "level": 2,
                "children2": []
            },
            {
                "id": 542,
                "pid": 35,
                "name": "捷克",
                "level": 2,
                "children2": []
            },
            {
                "id": 543,
                "pid": 35,
                "name": "荷兰",
                "level": 2,
                "children2": []
            },
            {
                "id": 544,
                "pid": 35,
                "name": "瑞士",
                "level": 2,
                "children2": []
            },
            {
                "id": 545,
                "pid": 35,
                "name": "希腊",
                "level": 2,
                "children2": []
            },
            {
                "id": 546,
                "pid": 35,
                "name": "挪威",
                "level": 2,
                "children2": []
            },
            {
                "id": 547,
                "pid": 35,
                "name": "瑞典",
                "level": 2,
                "children2": []
            },
            {
                "id": 548,
                "pid": 35,
                "name": "丹麦",
                "level": 2,
                "children2": []
            },
            {
                "id": 549,
                "pid": 35,
                "name": "芬兰",
                "level": 2,
                "children2": []
            },
            {
                "id": 550,
                "pid": 35,
                "name": "爱尔兰",
                "level": 2,
                "children2": []
            },
            {
                "id": 551,
                "pid": 35,
                "name": "奥地利",
                "level": 2,
                "children2": []
            },
            {
                "id": 552,
                "pid": 35,
                "name": "意大利",
                "level": 2,
                "children2": []
            },
            {
                "id": 553,
                "pid": 35,
                "name": "乌克兰",
                "level": 2,
                "children2": []
            },
            {
                "id": 554,
                "pid": 35,
                "name": "俄罗斯",
                "level": 2,
                "children2": []
            },
            {
                "id": 555,
                "pid": 35,
                "name": "西班牙",
                "level": 2,
                "children2": []
            },
            {
                "id": 556,
                "pid": 35,
                "name": "韩国",
                "level": 2,
                "children2": []
            },
            {
                "id": 557,
                "pid": 35,
                "name": "新加坡",
                "level": 2,
                "children2": []
            },
            {
                "id": 558,
                "pid": 35,
                "name": "马来西亚",
                "level": 2,
                "children2": []
            },
            {
                "id": 559,
                "pid": 35,
                "name": "印度",
                "level": 2,
                "children2": []
            },
            {
                "id": 560,
                "pid": 35,
                "name": "泰国",
                "level": 2,
                "children2": []
            },
            {
                "id": 561,
                "pid": 35,
                "name": "日本",
                "level": 2,
                "children2": []
            },
            {
                "id": 562,
                "pid": 35,
                "name": "巴西",
                "level": 2,
                "children2": []
            },
            {
                "id": 563,
                "pid": 35,
                "name": "阿根廷",
                "level": 2,
                "children2": []
            },
            {
                "id": 564,
                "pid": 35,
                "name": "南非",
                "level": 2,
                "children2": []
            },
            {
                "id": 565,
                "pid": 35,
                "name": "埃及",
                "level": 2,
                "children2": []
            }
        ]
    },
    {
        "id": 36,
        "pid": 0,
        "name": "其它",
        "level": 1,
        "children": [
            {
                "id": 566,
                "pid": 36,
                "name": "其它",
                "level": 2,
                "children2": [
                    {
                        "id": 45052,
                        "pid": 566,
                        "name": "其它",
                        "level": 3
                    }
                ]
            }
        ]
    }
]
export {
    getTodayDate,
    checkNull,
    checkLogin,
    bindMobile,
    Global,
    Address,
    MemberLevel
}
