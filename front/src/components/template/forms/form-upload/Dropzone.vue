<template>
    <div class="js-upload dropzone" :id="id" :maxFiles="maxFiles" :maxFilesize="maxFilesize" :acceptedFiles="acceptedFiles">
        <div class="dz-message">
            <div class="dz-message-icon">
                <Icon :icon="icon" size="lg"></Icon>
            </div>
            <span class="dz-message-text"> 
                Drag and drop
                <p><small>Max {{maxFilesize}} MiB</small></p>
            </span>
            <div class="dz-message-btn mt-2">
                <span class="btn btn-md btn-info"> Upload </span>
            </div>
            <input :id="idFile" type="file" class="dz-hidden-input d-none" accept="application/pdf" tabindex="-1"/>
        </div>
    </div>
</template>

<script>
import Dropzone from "dropzone";
import Icon from "@/components/template/icon/Icon.vue";
import Swal from 'sweetalert2/src/sweetalert2.js';
export default {
    name: 'DropzonePage',
    props:{
        id: {
            type: String
        },
        icon: {
            type: String,
            default: 'files'
        },
        maxFiles: {
            type: Number,
            default: null
        },
        maxFilesize: {
            type: Number,
            default: 256
        },
        acceptedFiles: {
            type: String
        }
    },
    components: {
        Icon
    },
    data(){
        return{
            idFile: this.id+'-file',
        }
    },
    methods:{
        dropzone (){
            let itemId = this.id;
            let myDropzone = new Dropzone(`#${itemId}`,{
                url: "image",
                maxFilesize: this.maxFilesize,
                maxFiles: this.maxFiles,
                acceptedFiles: this.acceptedFiles,
                addRemoveLinks: true,
                init: function() {
                    this.on("addedfile", file => {
                       if (this.files.length > this.options.maxFiles) {
                            let fileLast = this.files[this.files.length - 2];
                            this.removeFile(fileLast);
                        }
                    });
                    this.on("error", function(file, message) {
                        if (message != "Server responded with 404 code.") {
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: message,
                            });
                            this.removeFile(file);
                        }
                    });
                }
            });
            myDropzone;
        },
    },
    mounted(){
        this.dropzone();
    }
}
</script>
