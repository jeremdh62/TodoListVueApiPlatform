<template>
  <em class="icon ni" :class="[isIcon + icon, isSize + size, isVariant + variant, hint && 'icon-hint']"></em>
</template>

<script>
export default {
  name: 'IconElement',
  props: {
    icon: {
      type: String
    },
    size: {
      type: String
    },
    variant: {
      type: String
    },
    hint: {
      type: Boolean
    },
  },
  computed: {
    isIcon(){
      return this.icon ? 'ni-' : null
    },
    isSize(){
      return this.size ? 'icon-' : null
    },
    isVariant(){
      return this.variant ? 'text-' : null
    }
  }
}
</script>
