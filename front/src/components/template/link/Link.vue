<template>
    <RouterLink v-if="(as === 'RouterLink')" :to="to">
        <slot></slot>
    </RouterLink>
    <a v-else :href="href">
        <slot></slot>
    </a>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
    name: 'LinkItem',
    components: {
        RouterLink
    },
    props: {
        to: String,
        href: String,
        as: String
    }
}
</script>
