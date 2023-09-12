<template>
    <a class="page-link" :href="href">
        <slot></slot>
    </a>
</template>

<script>
    export default {
        name: 'PaginationLink',
        props:{
            href:String
        }
    }
</script>
