<template>
    <textarea class="form-control" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"></textarea>
</template>

<script>
export default {
    name: 'FormTextarea',
    props: {
        text: String,
        modelValue: String
    },
    emits: ['update:modelValue']
}
</script>
