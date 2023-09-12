<template>
    <component :is="tag ? tag : 'div'" class="dropdown-menu" :class="[variant && 'dropdown-menu-'+variant,size && 'dropdown-menu-'+size, alignment && 'dropdown-menu-'+alignment, alignmentResponsive && 'dropdown-menu-'+alignmentResponsive, inline && 'position-static d-block']">
        <slot></slot>
    </component>
</template>

<script>
export default {
    name: 'DropdownMenu',
    props: {
        variant: {
            type: String,
            default: null
        },
        size:{
            type: String
        },
        alignment:{
            type: String
        },
        alignmentResponsive:{
            type: String
        },
        inline:{
            type: Boolean
        },
        tag: {
            type: String
        }
    },
}
</script>
