<template>
    <div class="goodsInfo-container">
        <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
            <span v-show="ballFlag" ref="ball" class="ball"></span>
        </transition>
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
                        购买数量:<numbox @getCount="getSelectedCount" :max="goodsInfo.stock_quantity"></numbox>
                    </p>
                    <p>
                        <mt-button type="primary" size="small">立即购买</mt-button>
                        <mt-button type="danger" size="small" @click="addToCart">加入购物车</mt-button>                        
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
                <mt-button type="primary" plain size="large" @click="goToDesc(goodsInfo)">图文介绍</mt-button><br>
                <mt-button type="danger" plain size="large" @click="goToComment(goodsInfo)">商品评论</mt-button>
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
            lunbotuList:[],
            ballFlag:false,
            selectedCount:1
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
        },
        goToDesc(goodsInfo){
            this.$router.push({
                name:'goodsDesc',
                params:{
                    goodsInfo
                }
            })
        },
        goToComment(goodsInfo){
            this.$router.push({
                name:'goodsComment',
                params:{
                    goodsInfo
                }
            })
        },
        beforeEnter(el){
            el.style.transform = "translate(0,0)"
        },
        enter(el,done){
            el.offsetHeight;

            const ballPos = this.$refs.ball.getBoundingClientRect();
            const badgePos = document.getElementById('badge').getBoundingClientRect();

            const xDist = badgePos.left - ballPos.left;
            const yDist = badgePos.top - ballPos.top;

            /**
             * transform和transition的理解
             * transform是指具体的行为，比如这里是改变元素的位置
             * transition是指实现行为的方式，比如这里是通过一个贝塞尔曲线的轨迹，用0.6秒的时间让元素改变位置
             */
            el.style.transform = `translate(${xDist + 28}px,${yDist - 28}px)`;
            el.style.transition = 'all 0.6s cubic-bezier(.4,-0.3,1,.68)';
            done();
        },
        afterEnter(){
            this.ballFlag = !this.ballFlag;
        },
        addToCart(){
            this.ballFlag = !this.ballFlag;

            var goodsInfo = {
                id:this.goodsInfo.id,
                count:this.selectedCount,
                price:this.goodsInfo.sell_price,
                selected:true,
                title:this.goodsInfo.title,
                img_url:this.goodsInfo.img_url
            }
            this.$store.commit('addToCart',goodsInfo)
        },
        getSelectedCount(count){
            this.selectedCount = count;
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
    .ball{
        position: absolute;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: #f60;
        left: 135px;
        top: 360px;
        z-index: 99;
    }
}
</style>

