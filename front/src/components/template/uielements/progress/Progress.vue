<template>
    <div class="progress" :class="size && 'progress-' + size">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'ProgressItem',
    props: {
        size: String
    }
}
</script>
