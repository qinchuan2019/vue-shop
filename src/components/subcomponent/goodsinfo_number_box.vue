<template>
    <div class="mui-numbox" data-numbox-min='1' :data-numbox-max="max">
        <button class="mui-btn mui-numbox-btn-minus" type="button">-</button>
        <input id="test" class="mui-numbox-input" type="number" ref="numbox" value="1" @change="countChanged"/>
        <button class="mui-btn mui-numbox-btn-plus" type="button">+</button>
    </div>
</template>

<script>

import mui from '../../lib/mui/js/mui.min.js'

export default {
    mounted(){
        mui('.mui-numbox').numbox();  
    },
    methods:{
        countChanged(){
            this.$emit('getCount',parseInt(this.$refs.numbox.value))
        }
    },    
    props:["max"],
    watch:{
        max:function(newVal,oldVal){
            console.log(newVal,oldVal)
            mui('.mui-numbox').numbox().setOption('max',newVal);
        }
    }
}
</script>

<style lang="scss" scoped>

</style>

