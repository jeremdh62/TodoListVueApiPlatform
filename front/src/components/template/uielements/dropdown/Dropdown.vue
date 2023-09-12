<template>
    <component :class="direction" :is="as">
        <slot></slot>
    </component>
</template>
<script>
import ButtonGroup from '@/components/template/uielements/button/ButtonGroup.vue';
export default {
    name: 'DropdownContainer',
    components: {
        ButtonGroup
    },
    props:{
        direction:{
            type:String,
            default:'dropdown'
        },
        as:{
            type:String,
            default: 'div'
        }
    }
}
</script>
