<template>
    <div class="image-upload-wrap d-flex flex-column align-items-center">
        <Media size="huge" class="border">
            <Img id="image-result" class="w-100 h-100" :src="src" :alt="alt" />
        </Media>
        <div class="pt-3">
            <FormInput class="upload-image" data-target="image-result" id="change-avatar" type="file" max="1" hidden />
            <Button tag="label" for="change-avatar" variant="primary" size="md">Change</Button>
        </div>
    </div><!-- end image-upload-wrap -->
</template>

<script>
import Button from '@/components/template/uielements/button/Button.vue';
import FormInput from '@/components/template/forms/input/FormInput.vue';
import Media from '@/components/template/media/Media.vue';
import Img from '@/components/template/img/Img.vue';

export default {
    name: 'ImageUpload',
    props: {
        src: String,
        alt: String,
    },
    components: {
        Button,
        FormInput,
        Media,
        Img
    },
    methods: {
        uploadImage (selector) {
            let elem = document.querySelectorAll(selector);
            elem.forEach(item => {
                item.addEventListener("change", function(){
                    if(item.files && item.files[0]) {
                        let img = document.getElementById(item.dataset.target);
                        img.onload = function() {
                            URL.revokeObjectURL(img.src);
                        }
                        img.src = URL.createObjectURL(item.files[0]);

                        let allowedExtensions  = ["jpg", "JPEG", "JPG", "png" ];
                        let fileExtension  = this.value.split(".").pop();
                        var lastDot = this.value.lastIndexOf('.');
                        var ext = this.value.substring(lastDot + 1);
                        var extTxt = img.value = ext;
                        if (!allowedExtensions.includes(fileExtension)) {
                            alert(extTxt + " file type not allowed, Please upload jpg, JPG, JPEG, or png file");
                            img.src = "/images/avatar/avatar-placeholder.jpg";
                        }
                    }

                })
            });
        }
    },
    mounted(){
        this.uploadImage(".upload-image");
    }
}
</script>
