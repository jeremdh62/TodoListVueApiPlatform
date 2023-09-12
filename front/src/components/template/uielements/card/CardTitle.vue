<template>
    <component :is="CType" class="card-title">
        <slot></slot>
    </component>
</template>

<script>
export default {
    name: 'CardTitle',
    props: {
        tag: {
            type: String
        },
    }, 
    computed: {
        CType() {
            if (this.tag) {
                return this.tag
            } else {
                return 'h3'
            }
        }
    }
}
</script>
