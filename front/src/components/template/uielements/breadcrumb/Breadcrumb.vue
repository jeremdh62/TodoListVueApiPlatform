<template>
    <nav aria-label="breadcrumb" :class="divider && 'breadcrumb-' + divider">
        <ol class="breadcrumb mb-0">
            <slot></slot>
        </ol>
    </nav>
</template>

<script>
    export default {
        name: 'BreadcrumbContainer',
        props:{
            divider: String
        }
    }
</script>
