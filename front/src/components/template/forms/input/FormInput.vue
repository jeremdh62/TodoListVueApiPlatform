<template>
    <input class="form-control" :class="[isSize, isRounded]" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"/>
</template>

<script>

export default {
    name: 'FormInput',
    props: {
        size: {
            type: String
        },
        modelValue: {
            type: [String, Number]
        },
        pill: {
            type: Boolean
        }
    },
    emits: ['update:modelValue'],
    computed: {
        isSize(){
            return this.size && 'form-control-' + this.size;
        },
        isRounded(){
            return this.pill && 'rounded-pill';
        }
    }
}
</script>
