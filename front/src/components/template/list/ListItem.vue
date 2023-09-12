<template>
    <component :is="this.tag ? this.tag : 'li'">
        <slot></slot>
    </component>
</template>

<script>
export default {
    name: 'ListItem',
    props: {
        tag: String
    },
}
</script>
