<template>
    <div class="goodsList-container">
        <div class="goods-item" v-for="(item) in goodsList" :key="item.id" @click="goToDetail(item)">
            <img :src="item.img_url" alt="">
            <h3>{{ item.title }}</h3>
            <div class="info">
                <p class="price">
                    <span class="now">￥{{item.sell_price}}</span>
                    <span class="old">￥{{item.market_price}}</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>仅剩{{ item.stock_quantity }}件</span>
                </p>
            </div>
        </div>
        <mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>
    </div>
</template>

<script>
export default {
    data(){ 
        return {
            goodsList:[],
            pageIndex:1
        }
    },
    methods:{
        getGoodsList(){
            this.$http.get('getGoodsList').then( result => {
            //this.$http.get('getGoodsList/' + this.pageIndex).then( result => {
                if(result.body.code === 0){
                    this.goodsList = this.goodsList.concat(result.body.data);
                }else{
                    Toast('获取商品列表失败!')
                }
            })
        },
        getMore(){
            this.pageIndex++;
            this.getGoodsList();
        },
        goToDetail(item){
            this.$router.push({ name: "goodsInfo", params: { item } });
        }
    },
    created(){
        this.getGoodsList()
    }
}
</script>

<style lang="scss" scoped>
.goodsList-container{
    display: flex;
    flex-wrap: wrap;
    padding: 4px;
    justify-content: space-between;
    .goods-item{
        width: 49%;
        border: 1px solid #efefef;
        padding: 4px;
        padding-bottom: 0;
        box-shadow: 0 0 8px #ccc;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 250px;
        img{
            width: 100%;
            max-height:150px;
        }
        h3{
            font-size: 14px;
        }
        .info{
            background-color: #eee;
            padding: 3px 0;
            p{
                margin: 0;
            }
            .price{
                .now{
                    color: red;
                    margin-right: 8px;
                }
                .old{
                    font-size: 12px;
                    text-decoration: line-through;
                }
            }
            .sell{
                font-size: 12px;
                display: flex;
                justify-content: space-between;
            }
        }
    }
}
</style>
