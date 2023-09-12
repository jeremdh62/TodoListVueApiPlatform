<template>
    <li class="page-item" :class="[active && 'active', disabled && 'disabled']">
        <slot></slot>
    </li>
</template>

<script>
    export default {
        name: 'PaginationItem',
        props:{
            active: Boolean,
            disabled: Boolean,
        }
    }
</script>
