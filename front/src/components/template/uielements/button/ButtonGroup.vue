<template>
    <div v-if="vertical" class="btn-group-vertical">
        <slot></slot>
    </div>
    <div v-else class="btn-group" :class="isSize + size">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'ButtonGroup',
        props: {
            size: String,
            vertical: Boolean
        },
        computed: {
            isSize(){
                if(this.size){
                    return 'btn-group-'
                }else{
                    return null
                }
            }
        }
    }
</script>
