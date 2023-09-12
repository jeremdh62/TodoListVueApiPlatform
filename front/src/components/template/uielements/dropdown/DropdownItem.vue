<template>
    <component :is="tag ? tag : 'div'">
        <hr v-if="divider" class="dropdown-divider">
        <slot v-else></slot>
    </component>
</template>

<script>
    export default {
        name: 'DropdownItem',
        props:{
            divider:Boolean,
            tag:String,
        }
    }
</script>
