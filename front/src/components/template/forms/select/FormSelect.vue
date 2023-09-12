<template>
    <component :is="as" class="form-select" :class="isSize + size">
        <slot></slot>
    </component>
</template>

<script>
import ChoiceSelect from '@/components/template/choices/ChoiceSelect.vue';

export default {
    name: 'FormSelect',
    components: {
        ChoiceSelect
    },
    props: {
        size: {
            type: String
        },
        as:{
            type: String,
            default: 'select'
        }
    },
    computed: {
        isSize(){
            return this.size ? 'form-select-' : null
        }
    }
}
</script>
