<template>
    <div class="toast" :class="isVariant + variant">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'ToastItem',
        props: {
            variant: {
                type: String
            }
        },
        computed: {
            isVariant(){
                if(this.variant){
                    return 'text-bg-'
                }else{
                    return null
                }
            }
        }
    }
</script>
