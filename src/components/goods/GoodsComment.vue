<template>
    <div>
        <comment :id="$route.params.goodsInfo.id"></comment>
    </div>
</template>

<script>

import comment from '../subcomponent/comment.vue'

export default {
    components:{
        comment
    }
}
</script>

<style lang="scss" scoped>

</style>
