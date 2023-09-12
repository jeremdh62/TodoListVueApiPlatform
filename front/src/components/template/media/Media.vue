<template>
  <component :is="this.href ? 'a' : 'div'" :href="href" class="media" :class="[
    size && 'media-' + size, 
    variant && 'text-bg-' + variant, 
    shape && 'media-' + shape, 
    middle && 'media-middle',
    sharp && 'media-sharp'
  ]">
      <slot></slot>
  </component>
</template>

<script>

export default {
  name: 'MediaItem',
  props: {
    src:{
      type: String
    },
    size:{
      type: String
    },
    variant:{
      type: String
    },
    shape:{
      type: String
    },
    middle:{
      type: Boolean
    },
    href: {
      type: String
    },
    sharp:{
      type: Boolean
    },
  },
}
</script>
