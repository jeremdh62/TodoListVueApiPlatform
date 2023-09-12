<template>
    <li class="preview-icon-item">
        <Card class="preview-icon-box" full>
            <button type="button" class="btn btn-icon btn-clipboard js-copy text-light" ref="btn" :data-clipboard-text="copyIcon">
                <em class="icon ni ni-copy"></em>
            </button>
            <div class="preview-icon-wrap">
                <Icon :icon="icon"></Icon>
            </div>
            <span class="preview-icon-name">{{title}}</span>
        </Card>
    </li>
</template>

<script>
import ClipboardJS from 'clipboard';
import Card from '@/components/template/uielements/card/Card.vue';
import Icon from '../icon/Icon.vue';

export default {
    name: 'IconPreview',
    props: ['icon', 'title'],
    components: {
        Card,
        Icon
    },
    computed: {
        copyIcon(){
            return `<Icon icon="${this.icon}"></Icon>`
        }
    },
    mounted(){
        let btnElem = this.$refs.btn;
        let options = {
            tooltip:{
                selector: 'js-copy-tooltip',
                init: 'Copy',
                success : 'Copied',
            },
            icon:{
                init: 'copy',
                success: 'copy-fill',
            }
        }

        let clipboard = new ClipboardJS(btnElem);
        //set markup
        let initMarkup = `<em class="icon ni ni-${options.icon.init}"></em><span class="${options.tooltip.selector}">${options.tooltip.init}</span>`;
        let successMarkup = `<em class="icon ni ni-${options.icon.success}"></em><span class="${options.tooltip.selector}">${options.tooltip.success}</span>`;
        btnElem.innerHTML = initMarkup;
        //on-sucess
        clipboard.on("success", function(e){
            let target = e.trigger;
            target.innerHTML = successMarkup;
            setTimeout(function(){
                target.innerHTML = initMarkup;
            }, 1000)
        });
    }
}
</script>