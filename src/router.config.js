import VueRouter from 'vue-router'

import HomeContainer from './components/tabBar/HomeContainer.vue'
import MemberContainer from './components/tabBar/MemberContainer.vue'
import CartContainer from './components/tabBar/CartContainer.vue'
import SearchContainer from './components/tabBar/SearchContainer.vue'

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