<template>
  <component :is="this.tag ? this.tag : 'h6'" class="overline-title">
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: 'OverlineTitle',
  props: {
    title: String,
    tag: String
  }
}
</script>
