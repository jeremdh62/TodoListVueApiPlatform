<template>
  <input v-if="tag === 'input'" :type="type" :value="value" class="btn" :class="[isVariant, isSize, isSoft, isPill, isBlock]" :data-bs-dismiss="dismiss && dismiss">

  <RouterLink v-else-if="(as === 'RouterLink')" :to="to" class="btn" :class="[isVariant, isSize, isSoft, isPill, isBlock]">
    <slot></slot>
  </RouterLink>

  <component v-else :is="CType" :href="href" :type="type" class="btn" :class="[isVariant, isSize, isSoft, isPill, isBlock, isZoom]" :data-bs-dismiss="dismiss && dismiss">
    <slot></slot>
  </component>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
    name: 'ButtonItem',
    components: {
      RouterLink
    },
    props: {
        variant: String,
        size: String,
        soft: Boolean,
        pill: Boolean,
        block: Boolean,
        dismiss:String,
        zoom: Boolean,
        to: String,
        as: String,
        tag: {
          type: String,
          default: 'button'
        },
        href: {
          type: String,
          default: null
        },
        type: {
          type: String,
          default: null
        },
        value: {
          type: String,
          default: null
        },
    },
    computed: {
      CType() {
        return this.href && this.type !== 'button' ? 'a' : (this.tag ? this.tag : 'button')
      },
      isVariant() {
        return this.variant && 'btn-'+this.variant
      },
      isSize() {
        return this.size && 'btn-'+this.size
      },
      isSoft() {
        return this.soft && 'btn-soft'
      },
      isPill() {
        return this.pill && 'rounded-pill'
      },
      isBlock() {
        return this.block && 'btn-block'
      },
      isZoom() {
        return this.zoom && 'btn-zoom'
      },
    }
}
</script>
