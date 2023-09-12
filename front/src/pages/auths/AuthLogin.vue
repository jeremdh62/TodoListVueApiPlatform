<!-- eslint-disable vue/no-reserved-component-names -->
<template>
    <AppRoot>
        <AppMain>
            <AppWrap class="align-items-center justify-content-center">
                <Container class="p-2 p-sm-4 ">
                    <div class="wide-xs mx-auto">
                        <Card class="overflow-hidden rounded-4 card-auth" gutter="lg">
                            <Row utils="g-0 flex-lg-row-reverse">
                                <Col lg="12">
                                    <CardBody class="bg-darker is-theme has-mask has-mask-1 h-100 d-flex flex-column justify-content-center">
                                        <div class="mask mask-1"></div><!-- .mask-->
                                        <div class="nk-block-head text-center">
                                            <div class="brand-logo">
                                                <Logo :isKeep="true" :logo-width="50" />
                                            </div>
                                        </div>
                                        <form action="#" @submit.prevent="setAuth" id="loginForm">
                                            <Row utils="gy-3">
                                                <Col lg="12">
                                                    <FormGroup>
                                                        <FormLabel class="text-white" for="username"> Email </FormLabel>
                                                        <FormInputWrap>
                                                            <FormInput type="email" id="username"  v-model="authForm.email" placeholder="Enter your email" required/>
                                                        </FormInputWrap>
                                                    </FormGroup><!-- .form-group -->
                                                </Col>
                                                <Col lg="12">
                                                    <FormGroup>
                                                        <FormLabel class="text-white" for="password"> Password </FormLabel>
                                                        <FormInputWrap>
                                                            <FormInput type="password" id="password" v-model="authForm.password" placeholder="Enter a password" required />

                                                            <FormInputIcon href="password" class="password-toggle" position="end" title="show or hide password">
                                                                <Icon icon="eye" class="inactive"></Icon>
                                                                <Icon icon="eye-off" class="active"></Icon>
                                                            </FormInputIcon>
                                                        </FormInputWrap>
                                                    </FormGroup><!-- .form-group -->
                                                </Col>
                                                <Col lg="12">
                                                    <div class="d-flex flex-wrap justify-content-between">
                                                        <!-- <a :href="forgotPasswordUrl" class="small"> Forgot password </a> -->
                                                    </div>
                                                </Col>
                                                <Col lg="12">
                                                    <div class="d-grid">
                                                        <Button variant="primary" type="submit"> Login </Button>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </form>
                                    </CardBody>
                                </Col>
                            </Row>
                        </Card>
                    </div>
                </Container>
            </AppWrap>
        </AppMain>
        <ToastContainer class="position-fixed end-0 bottom-0 p-3">
            <Toast class="fade text-bg-danger border-danger" :class="authForm.showError && 'show'">
                <ToastBody>
                   Email or password is incorrect
                </ToastBody>
            </Toast>
        </ToastContainer>
    </AppRoot>
</template>

<script>
import AppRoot from '@/layout/global/AppRoot.vue';
import AppMain from '@/layout/global/AppMain.vue';
import AppWrap from '@/layout/global/AppWrap.vue';
import Container from '@/components/template/layout/Container.vue';
import Row from '@/components/template/layout/Row.vue';
import Col from '@/components/template/layout/Col.vue';
import Card from '@/components/template/uielements/card/Card.vue';
import CardBody from '@/components/template/uielements/card/CardBody.vue';
import Logo from '@/components/template/logo/Logo.vue';
import MediaGroup from '@/components/template/media/MediaGroup.vue';
import Media from '@/components/template/media/Media.vue';
import Img from '@/components/template/img/Img.vue';
import FormInput from '@/components/template/forms/input/FormInput.vue';
import FormInputWrap from '@/components/template/forms/input/FormInputWrap.vue';
import FormLabel from '@/components/template/forms/form-label/FormLabel.vue';
import FormCheckInput from '@/components/template/forms/form-check/FormCheckInput.vue';
import FormCheckLabel from '@/components/template/forms/form-check/FormCheckLabel.vue';
import FormCheck from '@/components/template/forms/form-check/FormCheck.vue';
import Button from '@/components/template/uielements/button/Button.vue';
import OverlineTitle from '@/components/template/misc/OverlineTitle.vue';
import FormInputIcon from '@/components/template/forms/input/FormInputIcon.vue';
import Icon from '@/components/template/icon/Icon.vue';
import FormGroup from '@/components/template/forms/FormGroup.vue';
import ToastContainer from '@/components/template/uielements/toast/ToastContainer.vue';
import Toast from '@/components/template/uielements/toast/Toast.vue';
import ToastBody from '@/components/template/uielements/toast/ToastBody.vue';

export default {
    name: 'AuthLoginPage',
    components: {
        AppRoot,
        AppMain,
        AppWrap,
        Container,
        Row,
        Col,
        Card,
        CardBody,
        Logo,
        MediaGroup,
        Media,
        Img,
        FormInput,
        FormInputWrap,
        FormLabel,
        FormCheck,
        FormCheckInput,
        FormCheckLabel,
        FormGroup,
        Button,
        OverlineTitle,
        FormInputIcon,
        Icon,
        Toast,
        ToastBody,
        ToastContainer
    },
    data(){
        return{
            authForm:{
                email:'',
                password: '',
                showError: false,
            },
        }
    },
    methods:{
        setAuth(e){
            e.preventDefault();
            const email = this.authForm.email;
            const password = this.authForm.password;

            const isLog = this.$store.dispatch('authStore/login', { email: email, password: password });

            isLog.then((res) => {
                if(res.status === 200){
                    this.$router.push('/pdfs');
                }else{
                    this.authForm.showError = true;
                    setTimeout(() => {
                        this.authForm.showError = false;
                    }, 20000);
                }
            });
        }
    }
}
</script>
