<template>
    <span class="placeholder" :class="[variant && 'bg-'+variant, size && 'placeholder-'+size, col && 'col-'+col]" :style="[height && 'height:'+height+'px', width && 'width:'+width+'px']"></span>
</template>

<script>
    export default {
        name: 'placeholderItem',
        props: {
            variant: String,
            size:String,
            col:Number,
            height: Number,
            width: Number,
        },
    }
</script>
