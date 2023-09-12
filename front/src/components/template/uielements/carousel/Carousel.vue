<template>
    <div class="carousel slide" :class="[animation && 'carousel-'+animation, variant && 'carousel-'+variant]" :data-bs-ride="ride && ride">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'CarouselWrap',
        props:{
            ride:String,
            animation:String,
        }
    }
</script>
