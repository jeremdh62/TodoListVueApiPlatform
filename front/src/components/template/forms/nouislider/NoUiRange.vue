<template>
    <div :id="id" :start="start" :connect="connect" :min="min" :max="max" :minDistance="minDistance" :maxDistance="maxDistance" :step="step" :orientation="orientation" :tooltip="tooltip"></div>
</template>

<script>
import noUiSlider from 'nouislider';

export default {
    name: 'NoUiRange',
    props: {
        id: {
            type: String
        },
        start: {
            type: String
        },
        connect: {
            type: String,
        },
        min: {
            type: Number,
            default: 0
        },
        max: {
            type: Number,
            default: 100
        },
        minDistance: {
            type: Number,
            default: null
        },
        maxDistance: {
            type: Number,
            default: null
        },
        step: {
            type: Number,
            default: 1
        },
        orientation: {
            type: String,
            default: 'horizontal'
        },
        tooltip: {
            type: Boolean,
            default: false
        },
    },
    methods: {
        Range(){
            let item = document.getElementById(this.id);
            let start = this.start
                start = /\s/g.test(start) ? start.split(' ') : start
                start = start ? start : 0;

            let connect = this.connect;
                connect = /\s/g.test(connect) ? connect.split(' ') : connect;
                connect = typeof connect == 'undefined' ? 'lower' : connect;
                connect = connect == 'true' || connect == 'false' ? JSON.parse(connect) : connect;

            noUiSlider.create(item, {
                start: start,
                connect: connect,
                range: {
                    'min': this.min,
                    'max': this.max
                },
                margin: this.minDistance,
                limit: this.maxDistance,
                step: this.step,
                orientation: this.orientation,
                tooltips: this.tooltip
            });
        }
    },
    mounted(){
        this.Range();
    }
}
</script>
