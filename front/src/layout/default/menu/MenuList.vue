<template>
  <li class="nk-menu-item" :class="submenu && 'has-sub'">
      <router-link  v-if="!submenu && !isurlexternal" :to="url" class="nk-menu-link">
          <span v-if="icon" class="nk-menu-icon"> <i :class="icon" /> </span>
          <span class="nk-menu-text">{{title}} </span>
      </router-link>
      <a v-if="!submenu && isurlexternal" :href="url" class="nk-menu-link">
          <span v-if="icon" class="nk-menu-icon"> <i :class="icon" /></span>
          <span class="nk-menu-text">{{title}} </span>
      </a>
      <template v-if="submenu">
        <a href="#" class="nk-menu-link nk-menu-toggle">
            <span v-if="icon" class="nk-menu-icon"><i :class="icon" /></span>
            <span class="nk-menu-text">{{title}} </span>
        </a>
        <slot></slot>
      </template>
  </li>
</template>

<script>
export default {
  name: 'MenuList',
  props: ['title','url','icon','submenu', 'isurlexternal'],
  components: {
  }
}
</script>
