<template>
   <img :class="[shape && shape, thumbnail && 'img-thumbnail', fluid && 'img-fluid']" :src="src" :alt="alt ? alt : ''"/>
</template>

<script>
export default {
  name: 'ImgTag',
  props: {
    src:{
      type: String
    },
    alt:{
      type: String
    },
    shape:{
      type: String
    },
    thumbnail:{
      type: Boolean
    },
    fluid:{
      type: Boolean
    }
  },
}
</script>
