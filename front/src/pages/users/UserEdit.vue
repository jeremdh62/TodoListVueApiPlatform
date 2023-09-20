<template>
    <Layout>
     <BlockHead>
         <BlockHeadBetween class="flex-wrap gap g-2">
             <BlockHeadContent>
                 <BlockTitle tag="h2">{{ title }}</BlockTitle>
             </BlockHeadContent>
             <BlockHeadContent>
                 <ul class="d-flex">
                     <li>
                         <Button class="d-md-inline-flex" as="RouterLink" to="/users" variant="light">
                             <Icon icon="back-ios"></Icon>
                             <span>Back</span>
                         </Button>
                     </li>
                 </ul>
             </BlockHeadContent>
         </BlockHeadBetween>
     </BlockHead>
 
     <Block>
        <form id="edit-user-form" action="#" v-if="dataLoaded" @submit="submitForm">
             <Row utils="g-gs">
                 <Col xxl="12">
                     <Row utils="g-gs">
                         <Col sm="12">
                             <Card gutter="md">
                                 <CardBody>
                                     <FormUser :user="userEdit" :is-edit-page="isEditPage" ref="formUser"></FormUser>
                                 </CardBody>
                             </Card>
                         </Col>
                     </Row>
                 </Col>
                
                 <Col sm="12">
                   <ul class="d-flex align-items-center justify-content-end gap g-3">
                       <li>
                           <Button variant="info" :disabled="editLoading" > <Spinner v-if="editLoading" size="sm" /> {{ btnText }} </Button>
                       </li>
                       <li>
                           <Button type="button" as="RouterLink" to="/users" variant="light">Cancel</Button>
                       </li>
                   </ul>
                 </Col>
             </Row>
         </form>
         <div class="text-center" v-else>
            <Spinner></Spinner>
        </div>
     </Block>
   </Layout>
 </template>
   
<script>
     import Layout from '@/layout/Index.vue';
     import Row from '@/components/template/layout/Row.vue';
     import Col from '@/components/template/layout/Col.vue';
     import { Block, BlockHead, BlockHeadContent, BlockHeadBetween, BlockTitle, } from '@/components/template/block/Block.vue';
     import Card from '@/components/template/uielements/card/Card.vue';
     import CardBody from '@/components/template/uielements/card/CardBody.vue';
     import Button from '@/components/template/uielements/button/Button.vue';
     import Icon from '@/components/template/icon/Icon.vue';
     import Spinner from '@/components/template/uielements/spinner/Spinner.vue';
     import FormUser from '@/components/FormUser.vue';

     import Swal from 'sweetalert2/src/sweetalert2.js';

     export default {
         name: 'UserEdit',
         components: {
            Layout,
            Row,
            Col,
            Block,
            BlockHead,
            BlockHeadContent,
            BlockHeadBetween,
            BlockTitle,
            Card,
            CardBody,
            Button,
            Icon,
            Spinner,
            FormUser,
        },
         data(){
             return {
                 dataLoaded: false,
                 userEdit: null,
                 editLoading: false,
                 isEditPage: true,
                 title: 'Edit User',
                 btnText: 'Edit',
                 successMsg: 'User edited successfully',
                 storeName: 'userStore/updateUser'
            }
         },
         async mounted(){

            if (this.$route.params.id == "add") {
                this.isEditPage = false;
                this.title = 'Add User';
                this.btnText = 'Add';
                this.successMsg = 'User added successfully';
                this.storeName = 'userStore/addUser';
            } else {
                await this.$store.dispatch('userStore/fetchUser', this.$route.params.id);
                this.userEdit = this.$store.getters['userStore/getUser'];
            }
 
            this.dataLoaded = true;
         },
         methods: {
             async submitForm(event) {
                
                if (this.editLoading) {
                    return;
                }

                this.editLoading = true;
                 event.preventDefault();
 
                 const userData = {};
                 
                    if (this.$route.params.id != "add") {
                        userData.id = this.userEdit.id;
                    }
                    
                    userData.username = this.$refs.formUser.username;
                    userData.email = this.$refs.formUser.email;

                    if(this.$refs.formUser.password){
                        userData.password = this.$refs.formUser.password;
                    }

                    userData.roles = this.$refs.formUser.setRole(this.$refs.formUser.role);

                    userData.isVerify = this.$refs.formUser.isVerify;
                 
                 this.$store.dispatch(this.storeName, userData).then((res) => {
                    if (res.status === 200 || res.status === 201) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: this.successMsg,
                            showConfirmButton: false,
                            timer: 2000
                        });
                        this.editLoading = false;
                        this.$store.dispatch('authStore/refreshJWT');
                        this.$router.push('/users');
                    } else {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'error',
                            title: 'An error has occurred',
                            showConfirmButton: false,
                            timer: 2000
                        });
                        console.error(res);
                    }
                 });
             },
         }
     }
 
</script>
   