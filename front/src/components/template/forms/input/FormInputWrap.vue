<template>
    <div class="form-control-wrap" :class="check && 'form-check-wrap'">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'formControlWrap',
    props:{
        check:{
            type: Boolean
        }
    }
}
</script>
