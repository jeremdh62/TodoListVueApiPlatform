<template>
    <div class="asterisk">
        <a href="#" :class="btnClass ? btnClass : null">
            <Icon icon="star" class="asterisk-off"></Icon>
            <Icon icon="star-fill" class="asterisk-on"></Icon>
        </a>
    </div>
</template>

<script>
import Icon from '@/components/template/icon/Icon.vue';

export default {
    name: 'TheAsterisk',
    props: {
        btnClass: String
    },
    components: {
        Icon
    }
}
</script>
