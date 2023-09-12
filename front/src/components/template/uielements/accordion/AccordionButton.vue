<template>
    <button class="accordion-button" :class="!opened && 'collapsed'" data-bs-toggle="collapse" :data-bs-target="'#'+target" type="button">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'AccordionButton',
    props:{
        target: String,
        opened:Boolean
    }
}
</script>
