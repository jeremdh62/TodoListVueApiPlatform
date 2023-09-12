<template>
    <li class="nk-schedule-item">
        <div class="nk-schedule-item-inner">
            <div class="nk-schedule-symbol" v-if="!noSymbol" :class="symbol"></div>
            <div class="nk-schedule-content" :class="contentClass">
                <slot></slot>
            </div>
        </div>
    </li>
</template>

<script>
export default {
    name: 'ScheduleItem',
    props:{
        symbol: String,
        contentClass: String,
        noSymbol: {
            type: Boolean,
            default: false
        }
    }
}
</script>
