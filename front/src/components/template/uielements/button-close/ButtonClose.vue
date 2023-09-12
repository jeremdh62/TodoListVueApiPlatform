<template>
    <button type="button" class="btn-close" :class="variant && 'btn-close-white'" :data-bs-dismiss="dismiss && dismiss"></button>
</template>

<script>
    export default {
        name: 'ButtonClose',
        props:{
            dismiss: String,
            variant: String
        }
    }
</script>
