<template>
    <div class="media-group" :class="[overlap && 'media-group-overlap', column && 'media-group-column']">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'MediaGroup',
    props: {
        overlap: Boolean,
        column: Boolean
    }
}
</script>
