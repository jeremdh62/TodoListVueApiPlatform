<template>
  <DefaultLayout v-if="!variant">
    <slot></slot>
  </DefaultLayout>
</template>

<script>
// @ is an alias to /src
import DefaultLayout from '@/layout/default/Index.vue'

export default {
  name: 'AppLayout',
  components: {
    DefaultLayout
  },
  props:{
    variant:{
        type:String
    }
  }
}
</script>