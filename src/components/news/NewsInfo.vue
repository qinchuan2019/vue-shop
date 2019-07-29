<template>
    <div class="newsInfo-container">
        <!-- 大标题 -->
        <h3 class="title">{{title}}</h3>
        <!-- 子标题 -->
        <p class="subtitle">
            <span>发表时间:{{add_time}}</span>
            <span>点击了{{click}}次</span>
        </p>
        <hr>
        <!-- 正文 -->
        <div class="content">
            {{zhaiyao}}
        </div>
        <!-- 评论 -->
        <comment :id="id"></comment>
    </div>
</template>

<script>
import comment from '../subcomponent/comment.vue'

// import Mock from '../../lib/mock/mock.js'

// Mock.mock('getNewsById',function(options){
    
//     let id = JSON.parse(options.body).id;
//     return {
//         name:'jack',
//         age:23,
//         id:id
//     }
// })

export default {
    data(){
        return {
            title:this.$route.params.title,
            add_time:this.$route.params.add_time,
            click:this.$route.params.click,
            zhaiyao:this.$route.params.zhaiyao,
            id:this.$route.params.id
        }
    },
    methods:{
        getNewsById(id){
            this.$http.post('getNewsById',{id:this.id}).then( res => {
                
            })
        }
    },
    created(){
        
    },
    components:{
        'comment':comment
    }
}
</script>

<style lang="scss" scoped>
.newsInfo-container{
    padding: 0 4px;
    .title{
        font-size: 15px;
        color: red;
        text-align: center;
        padding: 8px 0;
    }
    .subtitle{
        display: flex;
        justify-content: space-between;
        font-size: 12px;
        color: #e0681a;
    }
    .content{
        font-size: 12px;
        line-height: 1.8em;
    }
}
</style>
