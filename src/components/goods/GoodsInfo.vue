<template>
    <div class="goodsInfo-container">
        <div class="mui-card">
            <div class="mui-card-content">
                <swipe :lunbotuList="lunbotuList" :timedelay="2000"></swipe>
            </div>
        </div>
        <div class="mui-card">
            <div class="mui-card-header">{{goodsInfo.title}}</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p class="price">
                        市场价:<del>￥{{goodsInfo.market_price}}</del>&nbsp;&nbsp;销售价:<span class="now_price">￥{{goodsInfo.sell_price}}</span>
                    </p>
                    <p>
                        购买数量:<numbox></numbox>
                    </p>
                    <p>
                        <mt-button type="primary" size="small">立即购买</mt-button>
                        <mt-button type="danger" size="small">加入购物车</mt-button>
                    </p>
                </div>
            </div>
        </div>
        <div class="mui-card">
            <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>商品货号:{{goodsInfo.goods_no}}</p>
                    <p>库存情况:{{goodsInfo.stock_quantity}}</p>
                    <p>上架时间:{{goodsInfo.add_time}}</p>                    
                </div>
            </div>
            <div class="mui-card-footer">
                <mt-button type="primary" plain size="large">图文介绍</mt-button><br>
                <mt-button type="danger" plain size="large">商品评论</mt-button>
            </div>
        </div>
    </div>
</template>

<script>

import Mock from '../../lib/mock/mock.js'
import swipe from '../subcomponent/swipe.vue'
import numbox from '../subcomponent/goodsinfo_number_box.vue'

Mock.mock('getLunBoTuList',{
    "code": 0,
    "message": "请求成功",
    "data|4": [{
        'image':'@image()'
    }]
})

export default {
    data(){
        return {
            goodsInfo:this.$route.params.item,
            lunbotuList:[]
        }
    },
    methods:{
        getLunBoTuList(){
            this.$http.get('getLunBoTuList').then( result => {
                if(result.body.code === 0){
                    this.lunbotuList = result.body.data;
                }else{
                    Toast('图片获取失败!');
                }
            })
        },
        getGoodsById(){
            this.$http.get('getGoodsById/' + this.id).then(result => {
                if(result.body.code === 0){
                    this.goodsInfo = result.body.data;
                }else{
                    Toast('数据获取失败!')
                }
            })
        }
    },
    created(){
        this.getLunBoTuList();
        //this.getGoodsById();
    },
    components:{
        swipe,
        numbox
    }
}
</script>

<style lang="scss" scoped>
.goodsInfo-container{
    .now_price{
        font-size: 16px;
        color: red;
        font-weight: bold;
    }
    .mui-card-footer{
        display: block;
    }
}
</style>

