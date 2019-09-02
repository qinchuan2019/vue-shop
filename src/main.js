/**
 * 程序入口
 */
import Vue from 'vue'
import app from './App.vue'
import MintUI from 'mint-ui'
import VueRouter from 'vue-router'
import router from './router.config.js'
import VueResource from 'vue-resource'
import Vuex from 'vuex'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(MintUI)
Vue.use(Vuex)

var car = JSON.parse(localStorage.getItem('car') || '[]');

var store = new Vuex.Store({
  state:{
    //可以理解为组件中的data属性
    car:car
  },
  mutations:{
    //可以理解为组件中methods属性
    //这里面的方法，第一个参数默认固定是state    
    addToCart(state,goodsInfo){
      var flag = false;
      state.car.some(item => {
        if(item.id === goodsInfo.id){
          item.count += parseInt(goodsInfo.count);
          flag = true;
          return true;
        }
      })
      if(!flag){
        state.car.push(goodsInfo);
      }

      localStorage.setItem('car',JSON.stringify(state.car))
    },
    updateGoodsCount(state,goodsInfo){
      state.car.some(item => {
        if(item.id === goodsInfo.id){
          item.count = goodsInfo.count;
          return true;
        }
      })
      localStorage.setItem('car',JSON.stringify(state.car))
    },
    deleteFromCart(state,id){
      state.car.some((item,index) => {
        if(item.id === id){
          state.car.splice(index,1);
          return true;
        }
      })
      localStorage.setItem('car',JSON.stringify(state.car));
    },
    updateGoodsSelected(state,obj){
      state.car.some(item => {
        if(item.id === obj.id){
          item.selected = obj.selected;
        }
      })
      localStorage.setItem('car',JSON.stringify(state.car));
    }
  },
  getters:{
    //vuex提供getters属性只为暴露数据，其实这里面也可以修改数据，但会数据数据混乱，所以不推荐，如果想要修改state中的数据，推荐去mutaions中操作
    getAllCount(state){
      var c = 0;
      state.car.forEach(item => {
        c += item.count;
      })
      return c;
    },
    getGoodsCount(state){
      var o = {};
      state.car.forEach(item => {
        o[item.id] = item.count;
      })
      return o;
    },
    getGoodsSelected(state){
      var o = {};
      state.car.forEach(item => {
        o[item.id] = item.selected;
      })
      return o;
    },
    getTotalSelectedCountAndTotalCost(state){
      var Total = {
        count:0,
        cost:0
      }
      state.car.forEach(item => {
        if(item.selected){
          Total.count += item.count;
          Total.cost += item.count * item.price;
        }
      })
      return Total;
    }
  }
})

import 'mint-ui/lib/style.css'

import moment from 'moment'

Vue.filter('timeFormat',function(timeStr,pattern = "YYYY-MM-DD HH:mm:ss"){
  return moment(timeStr).format(pattern);
})

import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

// 全局设置 post 时候表单数据格式组织形式   application/x-www-form-urlencoded
Vue.http.options.emulateJSON = true;

//引入图片预览插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)

/**
 * 数据mock
 */
import Mock from './lib/mock/mock.js'

Mock.mock('getNewsList',{
  "code":0,
  "message":"请求成功",
  "data|27":[{
      "id|+1":187,
      'img_url':'@image()',
      "title": "@ctitle(3,7)",
      "add_time":'@date' + " " + '@time',
      "zhaiyao":"@cparagraph",
      "click|1-100":20
  }]
})

Mock.mock('getCommentsById',{
  "code":0,
  "message":"请求成功",
  "data|5":[{
      "user_name": "@cname",
      "add_time":'@date' + " " + '@time',
      "content":"@cparagraph"
  }]
})

Mock.mock('getAllCategory',{
  "code":0,
  "message":"请求成功",
  "data|8":[{
    "id|+1":187,
    "title": "@ctitle(2,7)"
  }]
})

Mock.mock('getImagesById',{
  "code":0,
  "message":"请求成功",
  "data|7":[{
      "id|+1":187,
      'img_url':'@image()',
      "title": "@ctitle(2,7)",
      "zhaiyao":"@cparagraph",
      "click|1-100":20,
      "add_time":'@date' + " " + '@time',
  }]
})

Mock.mock('getThumbsImageListById',{
  "code":0,
  "message":"请求成功",
  "data|4":[{
      'src':'@image()'
  }]
})

Mock.mock('getGoodsList',{
  "code":0,
  "message":"请求成功",
  "data|7":[{
    "id|+1":187,
    'img_url':'@image()',
    "title": "@ctitle(4,12)",
    "desc": "@cparagraph(30,120)",
    "market_price|4888-5888":4889,
    "sell_price|2000-4888": 2001,
    "stock_quantity|1-100":20,
    "goods_no":"@float(0)",
    "add_time":'@date' + " " + '@time'
  }]
})

var vm = new Vue({
  el:'#app',
  render: c => c(app),
  router,
  store
})