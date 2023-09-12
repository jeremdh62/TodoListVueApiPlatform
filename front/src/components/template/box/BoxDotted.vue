<template>
    <div class="box-dotted" :class="full && 'h-100'">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'BoxDotted',
    props: {
        full: Boolean
    }
}
</script>
