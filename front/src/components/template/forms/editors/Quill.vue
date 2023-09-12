<template>
    <div ref="jsQuill" :placeholder="placeholder" :readOnly="readOnly" :toolbar="toolbar">
        <slot></slot>
    </div>
</template>

<script>
import Quill from 'quill/dist/quill.js';
import '@/assets/scss/libs/editors/quill.scss'

export default {
    name: 'QuillComponentPage',
    props: {
        id: {
            type: String
        },
        placeholder: {
            type: String,
            default: null
        },
        readOnly: {
            type: Boolean,
            default: false
        },
        toolbar: {
            type: String
        }
    },
    methods:{
        Quill () {
            let elm = this.$refs.jsQuill;
            let toolbarConfig = {
                default:[
                    ['bold', 'italic', 'underline', 'strike'],
                    ['blockquote', 'code-block'],
    
                    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                    [{ 'script': 'sub'}, { 'script': 'super' }],
                    [{ 'indent': '-1'}, { 'indent': '+1' }],
    
                    [{ 'header': [1, 2, 3, 4, 5, 6] }],
    
                    [{ 'color': [] }, { 'background': [] }],
                    [{ 'font': [] }],
                    [{ 'align': [] }],
    
                    ['clean']
                ],
                minimal:[
                    ['bold', 'italic', 'underline'],
    
                    [ 'blockquote' ,{ 'list': 'bullet' }],
    
                    [{ 'header': 1 }, { 'header': 2 }, { 'header': [ 3, 4, 5, 6, false] }],
    
                    [{ 'align': [] }],
    
                    ['clean']
                ]
            }

            let toolbarElem = this.toolbar ? (this.toolbar.includes("#", 0) ? this.toolbar : eval(`toolbarConfig.${this.toolbar}`)) : toolbarConfig.default;

            let quill = new Quill(elm, {
                placeholder: this.placeholder,
                readOnly: this.readOnly,
                modules: {
                    toolbar: toolbarElem
                },
                theme: 'snow'
            });

            quill;
        }
    },
    mounted(){
        // init quill
        this.Quill();
    }
}
</script>
