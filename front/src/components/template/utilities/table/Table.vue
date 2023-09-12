<template>
    <table class="table" :class="middle && 'table-middle'">
        <slot></slot>
    </table>
</template>

<script>
    export default {
        name: 'TableContainer',
        props: {
            middle: Boolean
        }
    }
</script>
