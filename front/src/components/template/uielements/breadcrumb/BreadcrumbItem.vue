<template>
    <li class="breadcrumb-item" :class="active && 'active'" :aria-current="active && 'page'">
        <router-link v-if="!active" :to="to">
            <slot></slot>
        </router-link>
        <template v-else>
            <slot></slot>
        </template>
    </li>
</template>

<script>
    export default {
        name: 'BreadcrumbItem',
        props:{
            active: Boolean,
            to: String
        }
    }
</script>
