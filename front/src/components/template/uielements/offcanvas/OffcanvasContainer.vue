<template>
    <div class="offcanvas" :class="[position && 'offcanvas-' + position, size && 'offcanvas-size-' + size]" :data-bs-backdrop="backdrop && backdrop" :data-bs-scroll="scroll && scroll">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'OffcanvasContainer',
        props:{
            backdrop:String,
            scroll:String,
            position:{
                type: String,
                default: 'start'
            },
            size:{
                type: String,
                default: null
            }
        }
    }
</script>
