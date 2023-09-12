<template>
    <div class="toast-container" :class="[inline && 'position-static', body && 'position-fixed',position && isPosition]">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'ToastContainer',
        props:{
            inline:Boolean,
            body:Boolean,
            position:String
        },
        computed:{
            isPosition(){
                if(this.position === 'bottom-center'){
                    return 'bottom-0 start-50 translate-middle-x'
                }else if(this.position === 'bottom-end'){
                    return 'bottom-0 end-0'
                }else if(this.position === 'top-center'){
                    return 'top-0 start-50 translate-middle-x'
                }else if (this.position === 'center'){
                    return 'top-50 start-50 translate-middle'
                }else{
                    let getValue = this.position.split('-');
                    let setValue = []
                    getValue.forEach(item =>{
                        setValue.push(item)
                    })
                    return setValue.join('-0 ') + '-0';
                }
            }
        }
    }
</script>
