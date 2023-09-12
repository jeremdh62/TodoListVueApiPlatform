<template>
    <div class="carousel-item" :class="active && 'active'" :data-bs-interval="interval && interval">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'CarouselItem',
        props:{
            active: Boolean,
            interval: [Number]
        }
    }
</script>
