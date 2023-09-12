<template>
  <li class="nk-menu-heading">
    <OverlineTitle>{{title}}</OverlineTitle>
  </li>
</template>

<script>
import OverlineTitle from '@/components/template/misc/OverlineTitle.vue';

export default {
  name: 'MenuHeading',
  props: ['title'],
  components: {
    OverlineTitle
  }
}
</script>
