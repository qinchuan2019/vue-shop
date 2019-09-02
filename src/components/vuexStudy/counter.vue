<template>
    <div>
        <input type="button" value="减少" @click="minus" />
        <input type="button" value="增加" @click="add" />
        <input type="text" v-model="$store.state.count" />
    </div>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    methods:{
        add(){
            this.$store.commit('increment')
        },
        minus(){
            this.$store.commit('subtract',{num1:2,num2:3})
        }
    }
}
</script>

<style lang="scss" scoped>

</style>