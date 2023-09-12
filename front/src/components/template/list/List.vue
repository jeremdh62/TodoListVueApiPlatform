<template>
    <component :is="this.tag ? this.tag : 'ul'">
        <slot></slot>
    </component>
</template>

<script>
export default {
    name: 'ListContainer',
    props: {
        tag: String
    },
}
</script>
