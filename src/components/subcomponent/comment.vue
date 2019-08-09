<template>
    <div class="cmt-container">
        <h3>发表评论{{ id }}</h3>
        <hr>
        <textarea v-model="content_msg" placeholder="请输入要发表的内容(最多可输入120字)" maxlength="120"></textarea>
        <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>

        <div class="cmt-list">
            <div class="cmt-item" v-for="(item,index) in comments" :key="item.username">
                <div class="cmt-title">
                    第{{1 + index}}楼&nbsp;&nbsp;用户:{{item.user_name}}&nbsp;&nbsp;发表时间:{{item.add_time | timeFormat}}
                </div>
                <div class="cmt-body">
                    {{item.content}}
                </div>
            </div>
        </div>

        <mt-button type="danger" plain size="large" @click="loadMore">加载更多</mt-button>
    </div>
</template>

<script>
import {Toast} from 'mint-ui'
export default {
    data(){
        return {
            comments:[],
            content_msg:'',
            user_name:'默认用户'
        }
    },
    props:[
        'id'
    ],
    methods:{
        getComments(){
            this.$http.get('getCommentsById').then(result => {
            //this.$http.get('getNewsCommentsById/' + this.id).then(result => {
                if(result.body.code === 0){
                    this.comments = this.comments.concat(result.body.data);
                }else{
                    Toast('获取新闻评论失败！');
                }
            })
        },
        loadMore(){
            this.getComments()
        },
        postComment(){
            var content_obj = {
                content:this.content_msg,
                add_time:Date.now(), 
                user_name:this.user_name        
            }
            if(this.content_msg.trim().length === 0){
                Toast('请输入评论内容！');
            }else{      
                this.comments.unshift(content_obj)       
                // this.$http.post('postComment/' + this.$route.params.id,content_obj).then(result => {
                //     if(result.body.code === 0){
                //         this.newsComments.unshift(content_obj)
                //     }else{
                //         Toast('提交评论失败!');
                //     }
                // })
            }
        }
    },
    created(){
        this.getComments();
    }
}
</script>

<style lang="scss" scoped>
.cmt-container{
    h3{
        font-size: 16px;
    }
    textarea{
        font-size: 14px;
        height: 85px;
    }
    .cmt-list{
        margin-top: 5px;
        font-size: 14px;
        .cmt-item{
            .cmt-title{
                background-color: #ccc;
                line-height: 35px;
            }
            .cmt-body{
                font-size: 13px;
                text-indent: 2em;
                line-height: 1.5em;
                padding: 6px 0;
            }
        }
    }
}
</style>
