<template>
    <div class="alert" :class="variant && 'alert-'+variant" role="alert">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'AlertItem',
    props: {
        variant: {
            type: String
        }
    }
}
</script>
