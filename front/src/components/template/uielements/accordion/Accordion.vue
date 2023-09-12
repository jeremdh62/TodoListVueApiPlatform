<template>
    <div class="accordion" :class="flush && 'accordion-flush'">
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'AccordionContainer',
  props: {
    flush: {
      type: Boolean,
      default: false
    }
  }
}
</script>
