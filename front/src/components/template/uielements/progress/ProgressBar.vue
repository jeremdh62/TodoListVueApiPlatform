<template>
    <div class="progress-bar" :style="progress && {width:progress+'%'}" :class="[variant && 'bg-'+variant, striped && 'progress-bar-striped', animated && 'progress-bar-animated']">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'ProgressBar',
        props: {
            variant:  String,
            progress: String,
            animated: Boolean,
            striped: Boolean
        }
    }
</script>
