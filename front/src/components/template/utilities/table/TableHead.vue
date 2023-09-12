<template>
    <thead :class="[variant ? 'table-' + variant : null, small && 'table-head-sm']">
        <slot></slot>
    </thead>
</template>

<script>
export default {
    name: 'TableHead',
    props: {
        variant: String,
        small: Boolean
    }
}
</script>
