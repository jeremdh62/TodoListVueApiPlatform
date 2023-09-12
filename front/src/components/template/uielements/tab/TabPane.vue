<template>
    <div class="tab-pane" :class="[active && 'show active', fade && 'fade']">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'TabPane',
        props:{
            active: Boolean,
            fade: Boolean
        }
    }
</script>
