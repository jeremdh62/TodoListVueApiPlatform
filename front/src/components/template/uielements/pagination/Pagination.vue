<template>
    <ul class="pagination" :class="size && 'pagination-' + size">
        <slot></slot>
    </ul>
</template>

<script>
    export default {
        name: 'PaginationContainer',
        props: {
            size: {
                type: String
            }
        }
    }
</script>
