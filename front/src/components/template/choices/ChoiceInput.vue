<template>
    <input ref="jsTag" type="text" :cross="cross">
</template>

<script>
import Choices from 'choices.js';

export default {
    name: 'ChoiceInput',
    props: {
        id: String,
        cross: {
            type: Boolean,
            default(){
                return true
            }
        }
    },
    methods: {
        Tags (){
            let elem = this.$refs.jsTag;
            let plainText = elem.classList.contains('form-control-plaintext') && `choices__inner-plaintext`;
            let containerInner = `choices__inner ${plainText && plainText}`;

            new Choices(elem, {
                silent: true,
                allowHTML: false,
                placeholder: true,
                placeholderValue: null,
                removeItemButton: this.cross,
                classNames: {
                    containerInner: containerInner,
                }
            });
        }
    },
    mounted(){
        this.Tags();
    }
}
</script>
