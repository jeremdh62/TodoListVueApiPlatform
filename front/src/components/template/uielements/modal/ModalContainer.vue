<template>
    <div class="modal" aria-hidden="true" :class="animation && animation" :data-bs-backdrop="backdrop && backdrop"  :data-bs-keyboard="keyboard && keyboard">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'ModalContainer',
        props: {
            animation: String,
            backdrop: String,
            keyboard: String
        }
    }
</script>
