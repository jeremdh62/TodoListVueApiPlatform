<template>
    <component :is="CType" class="input-group-text">
        <slot></slot>
    </component>
</template>

<script>
    export default {
        name: 'InputGroupText',
        props: {
            tag: {
                type: String
            }
        },
        computed: {
            CType(){
                if(this.tag){
                    return this.tag
                }else{
                    return 'span'
                }
            }
        }
    }
</script>
