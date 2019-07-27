<template>
    <div class="cmt-container">
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请输入要发表的内容(最多可输入120字)" maxlength="120"></textarea>
        <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>

        <div class="cmt-list">
            <div class="cmt-item">
                <div class="cmt-title">
                    第1楼&nbsp;&nbsp;用户:匿名用户&nbsp;&nbsp;发表时间:2019-12-12 12:12:12
                </div>
                <div class="cmt-body">
                    意装龙始行现因点然层较并务置于。单老现对示示亲形义眼界力精安
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
            newsComments:[]
        }
    },
    methods:{
        getNewsComments(){
            this.$http.get('getNewsCommentsById').then(result => {
                if(result.body.code === 0){

                }else{
                    Toast('获取新闻评论失败！');
                }
            }).then(function(){

            })
        },
        loadMore(){

        },
        postComment(){

        }
    },
    created(){
        this.getNewsComments();
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
