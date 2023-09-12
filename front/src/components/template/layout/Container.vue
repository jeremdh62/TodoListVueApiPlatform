<template>
    <div :class="[fluid ? 'container-'+isFluid : 'container', utils && utils]">
       <slot></slot>
    </div>
</template>

<script>

export default {
  name: 'LayoutContainer',
  props: {
    fluid:{
      type:[Boolean,String],
      default:null
    },
    utils:String
  },
  computed:{
    isFluid(){
      if(typeof this.fluid === 'boolean'){
        return 'fluid'
      }else{
        return this.fluid
      }
    }
  },
}

</script>
