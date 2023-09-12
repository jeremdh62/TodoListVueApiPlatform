<template>
    <InputGroup v-if="rangePicker" :id="id">
        <FormInput type="text" name="start" :autohide="autohide" :clearBtn="clearBtn" :format="format" :maxView="maxView" :pickLevel="pickLevel" :startView="startView" :title="title" :todayBtn="todayBtn" :todayBtnMode="todayBtnMode" :weekStart="weekStart" placeholder="dd/mm/yyyy" autocomplete="off"/>
        <InputGroupText>to</InputGroupText>
        <FormInput type="text" name="end" :autohide="autohide" :clearBtn="clearBtn" :format="format" :maxView="maxView" :pickLevel="pickLevel" :startView="startView" :title="title" :todayBtn="todayBtn" :todayBtnMode="todayBtnMode" :weekStart="weekStart" placeholder="dd/mm/yyyy" autocomplete="off"/>
    </InputGroup>
    <FormInput v-else type="text" :id="id" :autohide="autohide" :clearBtn="clearBtn" :format="format" :maxView="maxView" :pickLevel="pickLevel" :startView="startView" :title="title" :todayBtn="todayBtn" :todayBtnMode="todayBtnMode" :weekStart="weekStart" placeholder="dd/mm/yyyy" autocomplete="off"/>
</template>

<script>
import { Datepicker, DateRangePicker } from 'vanillajs-datepicker';
import InputGroup from '@/components/template/forms/input-group/InputGroup.vue';
import InputGroupText from '@/components/template/forms/input-group/InputGroupText.vue';
import FormInput from '@/components/template/forms/input/FormInput.vue';

export default {
    name: 'DatePicker',
    props: {
        id: {
            type: String
        },
        autohide: {
            type: Boolean,
            default: true
        },
        clearBtn: {
            type: Boolean,
            default: false
        },
        format: {
            type: String,
            default: 'mm/dd/yyyy'
        },
        maxView: {
            type: Number,
            default: 3
        },
        pickLevel: {
            type: Number,
            default: 0
        },
        startView: {
            type: Number,
            default: 0
        },
        title: {
            type: String,
            default: ''
        },
        todayBtn: {
            type: Boolean,
            default: false
        },
        todayBtnMode: {
            type: Number,
            default: 0
        },
        weekStart: {
            type: Number,
            default: 0
        },
        rangePicker: {
            type: Boolean,
            default: false
        },
    },
    components: {
        InputGroup,
        InputGroupText,
        FormInput
    },
    methods: {
        // date picker
        DatePicker(){
            let elm = document.getElementById(this.id);
            let opt = {
                buttonClass: 'btn btn-md',
                autohide: this.autohide,
                clearBtn: this.clearBtn,
                format: this.format,
                maxView: this.maxView,
                pickLevel: this.pickLevel,
                startView: this.startView,
                title: this.title,
                todayBtn: this.todayBtn,
                todayBtnMode: this.todayBtnMode,
                weekStart: this.weekStart
            };
                    
            const datepicker = this.rangePicker ? new DateRangePicker(elm, opt) : new Datepicker(elm, opt);
            datepicker;
        }
    },
    mounted(){
        this.DatePicker();
    }
}
</script>