<template>
    <li class="nk-menu-item">
        <Button class="nk-menu-btn" :variant="variant" :href="url"> 
            <span v-if="icon"> <Icon :icon="icon" /> </span>
            {{ icon }}
            <span class="nk-menu-text">{{ title }} </span>
        </Button> 
    </li>
</template>
  
  <script>
  import Button from '@/components/template/uielements/button/Button.vue';
  import Icon from '../../../components/template/icon/Icon.vue';

  export default {
    name: 'MenuList',
    props: ['title','url','icon', 'variant'],
    components: {
    Button,
    Icon
}
  }
  </script>  