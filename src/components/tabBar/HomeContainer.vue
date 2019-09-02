<template>
    <div>

        <swipe :lunbotuList="lunbotuList" :timedelay="3000"></swipe>

        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                <router-link to="/home/newsList">
                    <span class="mui-icon mui-icon-home"></span>
                    <div class="mui-media-body">新闻资讯</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                <router-link to="/home/imageList">
                    <span class="mui-icon mui-icon-email">
                        <span class="mui-badge">5</span>
                    </span>
                    <div class="mui-media-body">图片分享</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                <router-link to="/home/goodsList">
                    <span class="mui-icon mui-icon-chatbubble"></span>
                    <div class="mui-media-body">商品购买</div>
                </router-link>
            </li>
            <!-- <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                <router-link to="">
                    <span class="mui-icon mui-icon-location"></span>
                    <div class="mui-media-body">留言反馈</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                <router-link to="">
                    <span class="mui-icon mui-icon-search"></span>
                    <div class="mui-media-body">视频专区</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                <router-link to="">
                    <span class="mui-icon mui-icon-phone"></span>
                    <div class="mui-media-body">联系我们</div>
                </router-link>
            </li> -->
        </ul>
    </div>
</template>

<script>

import Mock from '../../lib/mock/mock.js'
import swipe from '../subcomponent/swipe.vue'

Mock.mock('getList',{
    "code": 0,
    "message": "请求成功",
    "data|3": [{
        'image':'@image()'
    }]
})
export default {
    data(){
        return {
            lunbotuList:[]
        }
    },
    methods:{
        getLunbotu(){
            this.$http.get('getList').then( result => {
                if(result.body.code === 0){
                    this.lunbotuList = result.body.data;
                }else{
                    Toast('图片加载失败！')
                }
            })
        }
    },
    created(){
        this.getLunbotu()
    },
    components:{
        swipe
    }
}
</script>

<style lang="scss" scoped>
.mui-grid-view.mui-grid-9{
    background-color: #fff;
}
</style>
