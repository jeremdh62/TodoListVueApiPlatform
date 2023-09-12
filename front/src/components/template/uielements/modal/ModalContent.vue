<template>
    <div class="modal-content" :class="padding && 'modal-padding'+padding">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'ModalContent',
        props: {
            padding:String
        }
    }
</script>
