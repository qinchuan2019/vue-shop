<template>
    <div>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
                <a href="javascript:;">
                    <img class="mui-media-object mui-pull-left" :src="item.img_url">
                    <div class="mui-media-body">
                        <h1>{{item.title}}</h1>
                        <p class='mui-ellipsis'>
                            <span>{{item.add_time}}</span>
                            <span>点击了{{item.click}}次</span>
                        </p>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>

import {Toast} from 'mint-ui'
import Mock from '../../lib/mock/mock.js'

Mock.mock('getNewsList',{
    "code":0,
    "message":"请求成功",
    "data|7":[{
        "id|+1":187,
        'img_url':'@image()',
        "title": "@ctitle(3,7)",
        "add_time":'@date' + " " + '@time',
        "zhaiyao":"@cparagraph",
        "click|1-100":20
    }]
})

export default {
    data(){
        return {
            newsList:[]
        }
    },
    methods:{
        getNewsList(){
            this.$http.get('getNewsList').then( result => {
                if(result.body.code === 0){
                    console.log(result.body.data)
                    this.newsList = result.body.data;
                }else{
                    Toast('获取新闻列表失败！');
                }
            })
        }
    },
    created(){
        this.getNewsList()
    }
}
</script>

<style lang="scss" scoped>
.mui-table-view{
    li{
        a{
            div{
                h1{
                    font-size: 14px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    width: 100%;
                    font-weight: normal
                }
                p{
                    font-size: 12px;
                    color: #226aff;
                    display: flex;
                    justify-content: space-between;
                }
            }
            img{
                width: 40px;
                height: 40px;
            }
        }
    }
}
</style>

