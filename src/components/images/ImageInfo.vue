<template>
    <div class="imageInfo-container">
        <h3>图片详情</h3>
        <div class="subtitle">
            <span>发表时间:{{ add_time }}</span>
            <span>点击次数:{{ click }}次</span>
        </div>
        <hr>
        <div class="content">
            {{ zhaiyao }}
        </div>

        <div class="thumbs">
            <img class="preview-img" v-for="(item, index) in imageList" :src="item.src" width=120 height="100" @click="$preview.open(index, imageList)" :key="item.src">
        </div>

        <comment :id="id"></comment>
    </div>
</template>

<script>

import comment from '../subcomponent/comment.vue'

export default {
    data(){
        return {
            id:this.$route.params.id,
            add_time:this.$route.params.add_time,
            click:this.$route.params.click,
            zhaiyao:this.$route.params.zhaiyao,
            imageInfo:{},
            imageList:[]
        }
    },
    methods:{
        getImageInfoById(id){

            // this.$http.get('getImageInfoById/' + this.id).then( result => {
            //     if(result.body.code === 0){
            //         this.imageInfo = result.body.data[0];
            //     }else{
            //         Toast('获取图片详情失败!');
            //     }
            // })
        },
        getThumbsImageListById(id){
            this.$http.get('getThumbsImageListById').then( result => {
            //this.$http.get('getThumbsImageListById/' + this.id).then( result => {
                if(result.body.code === 0){
                    result.body.data.forEach(item => {
                        //虽然这里的宽高对图片不起作用，还是不能少，否则图片预览插件会报错
                        item.w = 600;
                        item.h = 400;
                    });
                    this.imageList = result.body.data
                }else{
                    Toast('获取缩略图列表失败!');
                }
            })
        }
    },
    created(){
        //this.getImageInfoById();
        this.getThumbsImageListById()
    },
    components:{
       comment 
    }
}
</script>

<style lang="scss" scoped>
.imageInfo-container{
    padding: 0 3px;
    h3{
        text-align: center;
        font-size: 15px;
        color: rebeccapurple;
        margin: 15px 0;
    }
    .subtitle{
        display: flex;
        justify-content: space-between;
        font-size: 13px;
    }
    .content{
        font-size: 12px;
        line-height: 1.6em;
    }
    .thumbs{
        img{
            margin: 0 6px;
        }
    }
}
</style>

