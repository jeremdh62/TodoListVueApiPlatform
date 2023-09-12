<template>
    <component :is="setTag" class="nav-link" :class="[active && 'active', disabled && 'disabled']" :href="href && href" :type="type">
        <slot></slot>
    </component>
</template>

<script>
    export default {
        name: 'NavLink',
        props: {
            type: {
                type: String,
            },
            tag: {
                type: String,
            },
            href: {
                type: String
            },
            active: Boolean,
            disabled: Boolean,
        },
        computed:{
            setTag(){
                if(this.type === 'button'){
                    return 'button'
                }else if(this.tag){
                    return this.tag
                }else{
                    return 'a'
                }
            }
        }
    }
</script>
