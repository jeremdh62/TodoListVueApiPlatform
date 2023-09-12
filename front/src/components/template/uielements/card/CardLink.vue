<template>
     <a :href="href" class="card-link">
        <slot></slot>
     </a>
</template>

<script>
export default {
    name: 'CardLink',
    props: {
        href: {
            type: String
        },
    }
}
</script>
