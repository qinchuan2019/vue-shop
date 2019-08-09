<template>
    <div class="imageList-container">
        <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a @tap="getImagesById(item.id)" v-for="(item) in cates" :key="item.id" :class="['mui-control-item',item.id === 0 ? 'mui-active' : '']">{{item.title}}</a>
                </div>
            </div>
        </div>
        <ul class="images-list">
            <router-link v-for="item in imageList" :key="item.id" tag="li" :to="'/home/imageInfo/' + item.id + '/' + item.click + '/' + item.add_time + '/' + item.zhaiyao">
                <img v-lazy="item.img_url">
                <div class="info">
                    <h1 class="info-title">
                        {{item.title}}
                    </h1>
                    <div class="info-body">
                        {{item.zhaiyao}}
                    </div>
                </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
import {Toast} from 'mint-ui'
import mui from '../../lib/mui/js/mui.min.js'
export default {
    data(){
        return {
            cates:[],
            imageList:[]
        }
    },
    methods:{
        getCategory(){
            this.$http.get('getAllCategory').then( result => {
                if(result.body.code === 0){
                   result.body.data.unshift({
                       title:'全部',
                       id:0
                   });
                   this.cates = result.body.data;
                }else{
                    Toast('获取分类失败');
                }
            })
        },
        /**
         * 根据图片各类类型ID获取相应图片列表
         */
        getImagesById(id){
            //this.$http.get('getImagesById/' + id).then(result => {
            this.$http.get('getImagesById').then(result => {
                if(result.body.code === 0){
                    this.imageList = result.body.data;
                }else{
                    Toast('图片列表获取失败!');
                }
            })
        }
    },
    created(){
        this.getCategory();
        this.getImagesById()
    },
    mounted(){
        mui('.mui-scroll-wrapper').scroll({
            deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });
    }
}
</script>

<style lang="scss" scoped>
*{  
    touch-action: pan-y;
}
.images-list{
    list-style: none;
    margin: 0;
    padding: 10px;
    padding-bottom: 0;
    li{
        background-color: #ccc;
        text-align: center;
        margin-bottom: 10px;
        box-shadow: 0 0 9px #999;
        position: relative;
        img {
            width: 100%;
            vertical-align: middle;
            min-height: 120px;
            max-height: 300px;
        }
        img[lazy="loading"] {
            width: 40px;
            height: 300px;
            margin: auto;
        }
        .info{
            position: absolute;
            bottom: 0;
            color: #fff;
            text-align: left;
            .info-title{
                font-size: 14px;
                font-weight: normal;
            }
            .info-body{
                font-size: 12px;
                max-height: 75px;
                overflow: hidden;
            }
        }
    }
}
</style>

