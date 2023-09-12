<template>
    <input type="text" class="form-control js-timepicker" autocomplete="off">
</template>

<script>
import timePicker from '@/utilities/timePicker';

export default {
    name: 'TimePicker',
    props: {
        format: {
            type: Number,
            default: 12
        },
        interval: {
            type: Number,
            default: 30
        },
        startTime: {
            type: String,
            default: '12:00'
        },
        endTime: {
            type: String,
            default: '23:00'
        },
    },
    methods: {
        // timepicker
        TimePicker(){
            let timepickerElem = document.querySelectorAll('.js-timepicker');
            timepickerElem.forEach(item => {
                timePicker(item,{
                    format: this.format,
                    interval: this.interval,
                    start: this.startTime,
                    end: this.endTime
                });
            })
        }
    },
    mounted(){
        this.TimePicker();
    }
}
</script>
