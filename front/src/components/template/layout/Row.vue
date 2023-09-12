<template>
    <div class="row" :class="utils">
       <slot></slot>
    </div>
</template>

<script>

export default {
  name: 'LayoutRow',
  props: {
    utils: String
  },
}
</script>