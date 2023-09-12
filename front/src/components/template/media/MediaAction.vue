<template>
    <div class="media-action" :class="position ? 'media-action-' + position : null">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'MediaAction',
    props: {
        position: String
    }
}
</script>
