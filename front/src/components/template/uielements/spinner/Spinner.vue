<template>
    <div :class="['spinner-'+animationType, variant && 'text-'+variant, size && 'spinner-'+animationType+'-'+size]">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'SpinnerItem',
        props: {
            variant: {
                type: String
            },
            size: {
                type: String
            },
            animation: {
                type:String,
                default:'spin'
            }
        },
        computed: {
            animationType(){
                return this.animation !== 'spin' ? this.animation : 'border'
            }
        }

    }
</script>
