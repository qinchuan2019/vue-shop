<template>
    <div>
        <mt-swipe :auto="timedelay">
            <mt-swipe-item v-for="item in lunbotuList" :key="item.image">
                <img :src="item.image" />
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
export default {
    data(){
        return {
           
        }
    },
    props:['lunbotuList','timedelay']
}
</script>

<style lang="scss" scoped>
.mint-swipe{
    height: 200px;
    .mint-swipe-item{
        &:nth-child(1){
            background-color: #fff;
        }
        &:nth-child(2){
            background-color: #000;
        }
        &:nth-child(3){
            background-color: #aaa;
        }
        img{
            width: 100%;
            height: 100%;
        }
    }
}
</style>
