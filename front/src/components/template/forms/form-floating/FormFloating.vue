<template>
    <component :is="CType" class="form-floating">
        <slot></slot>
    </component>
</template>

<script>
    export default {
        name: 'FormFloating',
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
                    return 'div'
                }
            }
        }
    }
</script>