<template>
    <span class="dot" :class="variant && 'bg-' + variant"></span>
</template>

<script>
export default {
    name: 'DotItem',
    props: {
        variant:{
            type: String
        }
    }
}
</script>
