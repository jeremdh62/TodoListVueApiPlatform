<template>
    <div class="form-check" :class="[size && 'form-check-' + size, switcher && 'form-switch', inline && 'form-check-inline', checkReverse && 'form-check-reverse']">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'FormCheck',
    props: {
        size: String,
        switcher: Boolean,
        inline: Boolean,
        checkReverse: Boolean
    }
}
</script>
