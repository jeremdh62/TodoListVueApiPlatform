<template>
    <Button class="dropdown-toggle" :class="split && 'dropdown-toggle-split'" data-bs-toggle="dropdown" :data-bs-offset="offset && offset" :data-bs-reference="reference && reference" :data-bs-autoClose="autoClose && autoClose" :data-bs-display="display && display">
        <slot></slot>
    </Button>
</template>

<script>
import Button from '@/components/template/uielements/button/Button.vue';
    export default {
        name: 'DropdownToggle',
        components:{
            Button
        },
        props:{
            offset: String,
            reference: String,
            autoClose: String,
            display: String,
            split: Boolean
        }
    }
</script>
