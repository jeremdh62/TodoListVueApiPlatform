<template>
    <div class="accordion-collapse collapse" :class="opened && 'show'" :data-bs-parent="parent && '#'+parent">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'AccordionCollapse',
    props:{
        parent: String,
        opened:Boolean
    }
}
</script>
