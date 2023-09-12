<template>
    <a class="dropdown-item" :href="href">
        <slot></slot>
    </a>
</template>

<script>
    export default {
        name: 'DropdownLink',
        props: ['href']
    }
</script>
