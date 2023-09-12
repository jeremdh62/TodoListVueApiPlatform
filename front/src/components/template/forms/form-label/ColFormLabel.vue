<template>
    <component :is="CType" class="col-form-label" :class="isSize + size">
        <slot></slot>
    </component>
</template>

<script>
    export default {
        name: 'ColFormLabel',
        props: {
            tag: {
                type: String
            },
            size: {
                type: String
            }
        },
        computed: {
            CType(){
                if(this.tag){
                    return this.tag
                }else{
                    return 'label'
                }
            },
            isSize(){
                if(this.size){
                    return 'col-form-label-'
                }else{
                    return null
                }
            }
        }
    }
</script>
