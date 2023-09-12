<template>
    <div :class="[hasCount && hasCount, col && `col-${col}`, sm && `col-sm-${sm}`, md && `col-md-${md}`, lg && `col-lg-${lg}`, xl && `col-xl-${xl}`, xxl && `col-xxl-${xxl}`, utils && utils]">
       <slot></slot>
    </div>
</template>

<script>

export default {
    name: 'LayoutCol',
    props: {
        col: String,
        sm: String,
        md: String,
        lg: String,
        xl: String,
        xxl: String,
        utils: String
    },

    computed:{
        hasCount(){
            return !this.col && !this.sm && !this.md && !this.lg && !this.xl && !this.xxl ? 'col' : '';
        }
    },
}
</script>
