<template>
    <Editor 
        :initial-value="value"
        :init="{
            plugins: 'wordcount',
            content_css: false,
            skin: false,
            branding: false,
            height: height,
            toolbar: toolbar,
            menubar: menubar,
            inline: inline
        }"
    />
</template>

<script>
import Editor from '@tinymce/tinymce-vue';
import '@/assets/scss/libs/editors/tinymce.scss'

export default {
    name: 'TinymceComponentPage',
    props: {
        value: {
            type: String
        },
        height: {
            type: Number,
            default: 300
        },
        inline: {
            type: Boolean,
            default: false
        },
        menubar: {
            type: Boolean,
            default: true
        },
        toolbar: {
            type: Boolean,
            default: true
        }
    },
    components: {
        Editor
    }
}
</script>
