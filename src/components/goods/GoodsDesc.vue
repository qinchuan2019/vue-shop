<template>
    <div class="goodsDesc-container">
        <h3 class="title">{{goodsInfo.title}}</h3>
        <div class="content">
            {{goodsInfo.desc}}
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            goodsInfo:this.$route.params.goodsInfo,
            id:this.$route.params.goodsInfo.id
        }
    },
    methods:{
        getGoodsDescById(id){
            this.$http.get('getGoodsDescById/' + id).then( result => {
                if(result.body.code === 0){
                    this.goodsInfo = result.body.data;
                }else{
                    Toast('数据获取失败!');
                }
            })
        }
    },
    created(){
        //this.getGoodsDescById(this.id);
    }
}
</script>

<style lang="scss" scoped>
.goodsDesc-container{
    padding: 0 8px;
    .title{
        font-size: 16px;
        padding: 12px 0;
        color: red;
        text-align: center;
    }
    .content{
        font-size: 13px;
        line-height: 1.4em;
    }
}
</style>


