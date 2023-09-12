<template>
    <component :is="CType" class="badge" :href="href" :class="[isVariant, isPill]">
        <slot></slot>
    </component>
</template>

<script>
    export default {
        name: 'BadgeItem',
        props: {
            variant: {
                type: String
            },
            pill: {
                type: Boolean
            },
            href: {
                type: String
            }
        },
        computed: {
            CType(){
                return this.href ? 'a' : 'span'
            },
            isVariant(){
                return this.variant && 'text-bg-' + this.variant
            },
            isPill(){
                return this.pill && 'rounded-pill'
            },
        }
    }
</script>
