<template>
    <select :id="id" :sort="sort" :cross="cross" :selectText="selectText" :disabled="disabled" :search="search">
        <slot></slot>
    </select>
</template>

<script>
import Choices from 'choices.js';

export default {
    name: 'ChoiceSelect',
    props: {
        id: String,
        search: {
            type: Boolean,
            default(){
                return true
            }
        },
        sort: {
            type: Boolean,
            default(){
                return false
            }
        },
        cross: {
            type: Boolean,
            default(){
                return true
            }
        },
        selectText: {
            type: String
        },
        changeChoices: {
            type: Array,
            default(){
                return null
            }
        },
        placeholder: {
            type: String
        },
        disabled: {
            type: Boolean,
            default(){
                return false
            }
        },
        class: {
            type: String,
            default(){
                return ''
            }
        },
        searchField: {
            type: String,
            default(){
                return 'label, value'
            }
        },
        searchFloor: {
            type: Number,
            default(){
                return 3
            }
        },
    },
    data(){
        return {
            choices: null,
            countAdd: 0,
            selectTextReal: null,
            placeholderReal: null
        }
    },
    methods: {
        jsSelect (){
            this.choices = new Choices(this.$el, {
                silent: true,
                allowHTML: false,
                searchEnabled: this.search,
                placeholder: true,
                placeholderValue: this.placeholderReal,
                searchPlaceholderValue: 'Select an option',
                searchFields: this.searchField.split(','),
                searchFloor: this.searchFloor,
                shouldSort: this.sort,
                removeItemButton: this.cross,
                itemSelectText: this.selectTextReal,
                duplicateItemsAllowed: false,
                classNames: {
                    'containerOuter': 'choices ' + this.class,
                }
            });

            this.choices.passedElement.element.addEventListener('addChoice', (event) => {
                let res = this.addChoice({ value: "new " + this.countAdd , label: event.detail.value });
                if (res) {
                    this.countAdd++;
                }
                this.$el.dispatchEvent(new Event('change'));
            });
            
        },
        newChoices() {
            if (this.changeChoices.length > 0) {
                this.choices.setChoices(this.changeChoices, 'value', 'label', true);
                
                const newValues = this.changeChoices.map(item => item.value);

                const oldValue = this.choices.getValue(true);

                if (!newValues.includes(oldValue)) {
                   this.choices.setChoiceByValue(this.changeChoices[0].value);
                }
            } else {
                this.choices.clearStore();
            }

            this.$el.dispatchEvent(new Event('change'));
        },
        addChoice(choice) {
            let oldChoices = this.choices._currentState.choices;
            let oldItems = this.choices.getValue();
            let searchChoice = oldChoices.find(item => item.label === choice.label);
            
            if (searchChoice) {
                if (!oldItems.find(item => item.label === choice.label)) {
                    
                    oldItems.push(searchChoice.value);
                    this.choices.setChoiceByValue(oldItems);
                }
                return false;
            }

            oldItems = oldItems.map(item => item.value);
            oldItems.push(choice.value);

            const newChoices = oldChoices.map(item => {
                return {
                    value: item.value,
                    label: item.label
                }
            });

            newChoices.push({
                value: choice.value,
                label: choice.label
            });

            this.choices.clearStore();
            this.choices.clearInput();
            this.choices.setChoices(newChoices, 'value', 'label', true);
            this.choices.setChoiceByValue(oldItems);

            return true;
        },
        setValue(value) {
            this.choices.setChoiceByValue(String(value));
        },
    },
    mounted() {

        this.selectTextReal = this.selectText ? this.selectText : 'Select an option';
        this.placeholderReal = this.placeholder ? this.placeholder : 'Select an option';

        // initialize select
        this.jsSelect();

        this.$el.parentNode.parentNode.querySelector('input[type="search"]')?.addEventListener('input', (e) => {
           if (e.target.value === '') {
               this.choices.clearInput();
           }
        });
    },
    beforeUpdate() {
        // update select
        if (this.changeChoices !== null) {          
            this.newChoices();
        }
    },
    watch: {
        disabled: function (val) {
            if (val) {
                this.choices.disable();
            } else {
                this.choices.enable();
            }
        }
    }
}
</script>
