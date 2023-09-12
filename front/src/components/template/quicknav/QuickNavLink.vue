<template>
    <a :href="href">
        <slot></slot>
    </a>
</template>

<script>
    export default {
        name: 'QuickNavLink',
        props: {
            href: {
                type: String,
                default: '#'
            }
        }
    }
</script>
