<template>
    <div class="cart-container">
        <div v-show="!isCartLenghtZero" class="mui-card" v-for="(item,index) in goodsList" :key="item.id">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <mt-switch v-model="$store.getters.getGoodsSelected[item.id]"
                     @change="selectedChange(item.id,$store.getters.getGoodsSelected[item.id])"></mt-switch>
                    <img :src="item.img_url" alt="" />
                    <div class="info">
                        <h1>{{ item.title }}</h1>
                        <div class="info-inner">
                            <span class="price">￥{{ item.price }}</span>
                            <numbox :initcount="$store.getters.getGoodsCount[item.id]" :id="item.id"></numbox>
                            <mt-button size="small" type="primary" @click="deleteFromCart(item.id,index)">删除</mt-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner jiesuan">
                    <div>
                        <p>总计(不含运费)</p>
                        <p>已勾选商品<span class="red">{{ $store.getters.getTotalSelectedCountAndTotalCost.count }}</span>件，总价￥<span class="red">
                            {{ $store.getters.getTotalSelectedCountAndTotalCost.cost }}
                            </span></p>
                    </div>
                    <mt-button type="danger" @click="goCheckOut">去结算</mt-button>
                </div>
            </div>
        </div>
        <div class="em_tp" v-show="isCartLenghtZero">购物车中空空如也，快去添加一个商品吧！</div>
    </div>
</template>

<script>

import numbox from './../subcomponent/cart_numbox.vue'

export default {
    data(){
        return {
            goodsList:[],
            isCartLenghtZero:false
        }
    },
    methods:{
        getGoodsList(){
            var gdst = JSON.parse(localStorage.getItem('car') || '[]'); 
            if(gdst.length <= 0){
                this.isCartLenghtZero = true;
            }else{
                this.goodsList = gdst;
            }
        },
        deleteFromCart(id,index){
            this.goodsList.splice(index,1);
            this.$store.commit('deleteFromCart',id)
        },
        goCheckOut(){

        },
        selectedChange(id,val){
            this.$store.commit('updateGoodsSelected',{
                id:id,
                selected:val
            })
        }
    },
    created(){
        this.getGoodsList()
    },
    components:{
        numbox
    }
}
</script>

<style lang="scss" scoped>
.cart-container{
    background-color: #eee;
    overflow: hidden;
    .em_tp{
        padding: 12px;
        text-align: center;
        font-size: 14px;
    }
    .jiesuan{
        display: flex;
        align-items: center;
        justify-content: space-between;
        .red{
            color: red;
        }
    }
}
.mui-card-content-inner{
    display: flex;
    align-items: center;
    justify-content: space-between;
    img{
        width: 60px;
        height: 60px;
    }
    .info{
        h1{
            font-size: 13px;
        }
        .info-inner{
            display: flex;
            align-items: center;
            .price{
                color: red;
                font-weight: bold;
            }
        }
    }
}
</style>
