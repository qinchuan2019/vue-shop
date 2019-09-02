<template>
    <div>
        <h2>VuexStudy</h2>
        <counter></counter>
        <hr>
        <amount></amount>
    </div>
</template>

<script>

import amount from './amount.vue'
import counter from './counter.vue'

export default {
    data(){
        return {

        }
    },
    components:{
        counter,
        amount
    }
}
</script>

<style lang="scss" scoped>

</style>