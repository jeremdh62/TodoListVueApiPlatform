<template>
    <ul class="rating">
        <RatingItem v-for="index in checkedCount" :key="index" icon="star-fill" :checked="true"/>
        <template v-if="uncheckedCount > 0">
            <RatingItem v-for="index in uncheckedCount" :key="index" icon="star"/>
        </template>
    </ul>
</template>

<script>
import RatingItem from './RatingItem.vue';

export default {
    name: "RatingContainer",
    props: {
        ratings: {
           type: Number
        },
        baseRating: {
            type: Number,
            default: 5
        }
    },
    computed: {
        checkedCount(){
            return this.ratings;
        },
        uncheckedCount(){
            return  this.baseRating - this.ratings;
        }
    },
    components: {
        RatingItem
    }
}
</script>

