<template>
    <div class="offcanvas-header" :class="border ? 'border-' + border : null">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'OffcanvasHeader',
        props: {
            border: String
        }
    }
</script>
