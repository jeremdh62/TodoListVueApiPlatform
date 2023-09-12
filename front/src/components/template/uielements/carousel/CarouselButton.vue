<template>
    <button type="button" :class="[slide && 'carousel-control-'+slide, active && 'active']" :data-bs-target="'#'+target" :data-bs-slide="slide && slide" :data-bs-slide-to="slideTo && slideTo">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: 'CarouselButton',
        props:{
            target: String,
            slide: String,
            slideTo: String,
            active: Boolean
        }
    }
</script>
