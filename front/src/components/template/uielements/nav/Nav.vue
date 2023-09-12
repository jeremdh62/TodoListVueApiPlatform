<template>
    <component :is="tag" class="nav" :class="[tabs && 'nav-tabs', pills && 'nav-pills', alignment && 'justify-content-'+alignment, orientation && isOrientation]">
        <slot></slot>               
    </component>
</template>

<script>
    export default {
        name: 'NavWrap',
        props: {
            tag: {
                type: String,
                default:'ul'
            },
            alignment:String,
            orientation:String,
            tabs:Boolean,
            pills:Boolean
        },
        computed:{
            isOrientation(){
                const changeObj = {
                    vertical: "column",
                    horizontal: "row"
                };
                let getValue=this.orientation.split(' ')
                let setValue=[]
                getValue.forEach(item =>{
                    setValue.push(item.replace(/\b(?:vertical|horizontal)\b/gi, matched => changeObj[matched]))
                })
                return 'flex-'+setValue.join(' flex-');
            }
        }
    }
</script>
