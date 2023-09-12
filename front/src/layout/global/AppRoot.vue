<template>
    <div class="nk-app-root" :data-sidebar-collapse="sidebarCollapse" :data-navbar-collapse="navbarCollapse">
        <slot></slot>
    </div>
</template>

<script>

export default {
  name: 'AppRoot',
  props:{
    sidebarCollapse: {
      type: String,
      default: 'lg'
    },
    navbarCollapse: {
      type: String,
      default: 'lg'
    }
  }
}
</script>
