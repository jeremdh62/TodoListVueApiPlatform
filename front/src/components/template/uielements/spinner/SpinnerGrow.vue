<template>
    <div class="spinner-grow" :class="[isVariant + variant, isSize + size]">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'SpinnerGrow',
        props: {
            variant: {
                type: String
            },
            size: {
                type: String
            }
        },
        computed: {
            isVariant(){
                if(this.variant){
                    return 'text-'
                }else{
                    return null
                }
            },
            isSize(){
                if(this.size){
                    return 'spinner-grow-'
                }else{
                    return null
                }
            }
        }
    }
</script>
