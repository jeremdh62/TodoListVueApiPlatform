<template>
    <component :is="as" :href="href" class="list-group-item" :class="[variant && 'list-group-item-'+variant, active && 'active', disabled && 'disabled',actionable && 'list-group-item-action']">
        <slot></slot>
    </component>
</template>

<script>
    export default {
        name: 'ListGroupItem',
        props: {
            href: {
                type: String
            },
            tag: {
                type: String
            },
            variant: {
                type: String
            },
            active: Boolean,
            disabled: Boolean,
            actionable: Boolean
        },
        computed: {
            as() {
                if (this.href) {
                    return 'a'
                } else if(this.tag){
                    return this.tag
                } else {
                    return 'li'
                }
            },
        }
    }
</script>
