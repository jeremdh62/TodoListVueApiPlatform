<template>
    <div class="spinner-border" :class="[isVariant + variant, isSize + size]">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'SpinnerBorder',
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
                    return 'spinner-border-'
                }else{
                    return null
                }
            }
        }
    }
</script>
