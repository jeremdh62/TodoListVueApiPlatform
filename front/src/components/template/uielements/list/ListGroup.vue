<template>
    <component :is="tag && tag" class="list-group" :class="[flush && 'list-group-flush', numbered && 'list-group-numbered', horizontal && 'list-group-horizontal'+(horizontal !== true ? '-'+horizontal : ''), borderless && 'list-group-borderless', small && 'list-group-sm']">
        <slot></slot>
    </component>
</template>

<script>
    export default {
        name: 'ListGroup',
        props: {
            tag: {
                type: String,
                default:'ul'
            },
            flush: {
                type:Boolean
            },
            numbered: {
                type:Boolean
            },
            horizontal: {
                type:[Boolean,String],
                default:null
            },
            borderless: {
                type: Boolean
            },
            small: {
                type: Boolean
            },
        },
    }
</script>
