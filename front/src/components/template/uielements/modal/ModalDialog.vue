<template>
    <div class="modal-dialog" :class="[size && 'modal-'+size, position && 'modal-dialog-'+position, scrollable && 'modal-dialog-scrollable', 
    fullscreen && 'modal-fullscreen'+(fullscreen !== true ? '-'+fullscreen+'-down' : '')]">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'ModalDialog',
        props: {
            size: {
                type:String
            },
            position: {
                type:String
            },
            scrollable: {
                type:Boolean
            },
            fullscreen:{
                type:[Boolean,String],
                default: null
            }
        }
    }
</script>
