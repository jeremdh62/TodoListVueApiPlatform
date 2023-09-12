<template>
    <li class="rating-label" :class="checked && 'checked'">
        <Icon :icon="icon" />
    </li>
</template>

<script>
import Icon from '../icon/Icon.vue';
export default {
    name: "RatingItem",
    props: {
        icon: String,
        checked: Boolean
    },
    components:{
        Icon
    }
}
</script>