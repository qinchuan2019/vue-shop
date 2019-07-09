<template>
    <div>
        <mt-swipe :auto="3000">
            <mt-swipe-item>1</mt-swipe-item>
            <mt-swipe-item>2</mt-swipe-item>
            <mt-swipe-item>3</mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>

import Mock from '../../lib/mock/mock.js'
import Toast from 'mint-ui'

Mock.mock('getList',{
    "code": 0,
    "message": "请求成功",
    "data|3": [{
        'image':'@image(300x200)'
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
                    alert(Toast)
                }else{
                    
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
            background-color: red;
        }
        &:nth-child(2){
            background-color: yellow;
        }
        &:nth-child(3){
            background-color: cyan;
        }
    }
}
</style>
