<template>
  <div class="card" :class="[isVariant + variant, isBorder + borderVariant, full && 'h-100', gutter && 'card-gutter-' + gutter]">
     <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'CardItem',
  props: {
    variant: String,
    borderVariant: String,
    full: Boolean,
    gutter: String
  },
  computed: {
    isVariant(){
      return this.variant ? 'text-bg-' : null
    },
    isBorder(){
      return this.borderVariant ? 'border-' : null
    },
  }
}
</script>

