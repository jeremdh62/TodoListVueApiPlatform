<template>
    <div :class="['nk-content', (content === 'full-screen' &&  'nk-content-full'), (content === 'stretch' && 'nk-content-stretch')]">
        <div v-if="content === 'full-screen'" class="nk-content-inner">
            <div class="nk-content-body">
                <slot></slot>
            </div>
        </div>
        <div v-else-if="content === 'stretch'" class="nk-content-inner">
            <div class="nk-content-body">
                <slot></slot>
            </div>
        </div>
        <div v-else :class="content">
            <div class="nk-content-inner">
                <div class="nk-content-body">
                    <slot></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'AppContent',
  props:{
    content: {
      type: String,
      default: 'container-fluid'
    }
  },
}
</script>
