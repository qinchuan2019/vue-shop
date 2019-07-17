<template>
    <div class="newsInfo-container">
        <h3 class="title">新闻详情{{ id }}</h3>
        <p class="sub-title">
            <span>2015-01-01 12:20:20</span>
            <label>点击了0次</label>
        </p>
        <hr>
        <div class="content">

        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            id:this.$route.params.id
        }
    }
}
</script>

<style lang="scss" scoped>
.newsInfo-container{
    padding: 0 8px;
    h3{
        margin: 6px 0;
        font-size: 15px;
        text-align: center;
        color: red;
    }
    p{
        display: flex;
        justify-content: space-between;
        font-size: 12px;
        color: lightblue;
    }
}
</style>
