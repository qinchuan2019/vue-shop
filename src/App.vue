<template>
    <div class="app-container">
        <!-- Header区域 -->
        <mt-header fixed title="vue-shop"></mt-header>

        <transition name="main">
            <router-view></router-view>
        </transition>

        <!-- 底部TabBar区域 -->
        <nav class="mui-bar mui-bar-tab">
            <router-link class="mui-tab-item-qc" to="/home">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <router-link class="mui-tab-item-qc" to="/member">
                <span class="mui-icon mui-icon-contact"></span>
                <span class="mui-tab-label">会员</span>
            </router-link>
            <router-link class="mui-tab-item-qc" to="/cart">
                <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
                    <span class="mui-badge">0</span>
                </span>
                <span class="mui-tab-label">购物车</span>
            </router-link>
            <router-link class="mui-tab-item-qc" to="/search">
                <span class="mui-icon mui-icon-search"></span>
                <span class="mui-tab-label">搜索</span>
            </router-link>
        </nav>
    </div>
</template>

<script>
</script>

<style lang="scss" scoped>
.mint-header{
    z-index: 99;
}
.app-container{
    padding-top: 40px;
    padding-bottom: 50px;
    overflow-x: hidden;
    padding-bottom: 50px;
}

.main-enter{
    opacity: 0;
    transform: translateX(100%)
}

.main-leave-to{
    opacity: 0;
    transform: translateX(-100%);
    position: absolute;
}

.main-enter-active,
.main-leave-active{
    transition: all 0.5s ease;
}

.mui-bar-tab .mui-tab-item-qc.mui-active{
    color: #007aff;
}
.mui-bar-tab .mui-tab-item-qc{
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mui-tab-item-qc .mui-icon{
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item-qc .mui-icon~.mui-tab-label{
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>



