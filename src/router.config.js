import VueRouter from 'vue-router'

import HomeContainer from './components/tabBar/HomeContainer.vue'
import MemberContainer from './components/tabBar/MemberContainer.vue'
import CartContainer from './components/tabBar/CartContainer.vue'
import SearchContainer from './components/tabBar/SearchContainer.vue'
import NewsList from './components/news/NewsList.vue'
import NewsInfo from './components/news/NewsInfo.vue'
import ImageList from './components/images/ImageList.vue'
import ImageInfo from './components/images/ImageInfo.vue'
import GoodsList from './components/goods/GoodsList.vue'
import GoodsInfo from './components/goods/GoodsInfo.vue'

var router = new VueRouter({
  routes:[   
    {
      path:'/',redirect:'/home'
    },
    {
      path:'/home',
      component:HomeContainer
    },
    {
      path:'/home/newsList',
      component:NewsList
    },
    {
      path:'/home/newsinfo/:title/:add_time/:click/:zhaiyao/:id',
      component:NewsInfo
    },
    {
      path:'/home/imageList',
      component:ImageList
    },
    {
      path:'/home/imageInfo/:id/:click/:add_time/:zhaiyao',
      component:ImageInfo
    },
    {
      path:'/home/goodsList',
      component:GoodsList
    },   
    {
      path:'/home/goodsInfo/:item',
      component:GoodsInfo,
      name:'goodsInfo'
    },
    {
      path:'/member',
      component:MemberContainer
    },
    {
      path:'/cart',
      component:CartContainer
    },
    {
      path:'/search',
      component:SearchContainer
    }    
  ],
  linkActiveClass:'mui-active'
})

export default router;