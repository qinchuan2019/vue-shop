<template>
    <div>
        <mt-swipe :auto="3000">
            <mt-swipe-item v-for="item in lunbotuList" :key="item.image">
                <img :src="item.image" />
            </mt-swipe-item>
        </mt-swipe>

        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
                    <span class="mui-icon mui-icon-home"></span>
                    <div class="mui-media-body">新闻资讯</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
                    <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
                    <div class="mui-media-body">图片分享</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
                    <span class="mui-icon mui-icon-chatbubble"></span>
                    <div class="mui-media-body">商品购买</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
                    <span class="mui-icon mui-icon-location"></span>
                    <div class="mui-media-body">留言反馈</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
                    <span class="mui-icon mui-icon-search"></span>
                    <div class="mui-media-body">视频专区</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
                    <span class="mui-icon mui-icon-phone"></span>
                    <div class="mui-media-body">联系我们</div></a></li>
        </ul>
    </div>
</template>

<script>

import Mock from '../../lib/mock/mock.js'
import {Toast} from 'mint-ui'

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
    }
}
</script>

<style lang="scss" scoped>
.mint-swipe{
    height: 200px;
    .mint-swipe-item{
        &:nth-child(1){
            background-color: #fff;
        }
        &:nth-child(2){
            background-color: #000;
        }
        &:nth-child(3){
            background-color: #aaa;
        }
        img{
            width: 100%;
            height: 100%;
        }
    }
}
.mui-grid-view.mui-grid-9{
    background-color: #fff;
}
</style>
