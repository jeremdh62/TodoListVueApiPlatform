<template>
    <div class="input-group" :class="isSize + size">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'InputGroup',
        props: {
            size: {
                type: String
            }
        },
        computed: {
            isSize(){
                if(this.size){
                    return 'input-group-'
                }else{
                    return null
                }
            }
        }
    }
</script>
