<template>
    <component :is="this.href ? 'a' : 'div'" :href="href" class="form-control-icon" :class="position">
        <slot></slot>
    </component>
</template>

<script>
export default {
    name: 'FormInputIcon',
    props: {
        position: String,
        href: String
    },
    mounted() {
        let showHidePassword = function(selector){
            let elem = document.querySelectorAll(selector);
            elem.forEach(item => {
                item.addEventListener("click", function(e){
                    e.preventDefault();
                    let target = document.getElementById(item.getAttribute("href"));
                    if(target.type == "password") {
                        target.type = "text";
                        item.classList.add("is-shown");
                    }else{
                        target.type = "password";
                        item.classList.remove("is-shown");
                    }
                });

            });
        }
        
        showHidePassword('.password-toggle');

    }
}
</script>