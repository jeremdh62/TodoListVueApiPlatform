<template>
    <AppRoot>
        <AppMain>
            <AppWrap class="align-items-center justify-content-center">
                <Container class="p-2 p-sm-4">
                    <Card class="overflow-hidden rounded-4 card-auth card-auth-mh" gutter="lg">
                        <Row utils="g-0 flex-lg-row-reverse">
                            <Col lg="5">
                                <CardBody>
                                    <div class="nk-block-head text-center">
                                        <div class="nk-block-head-content">
                                            <h3 class="nk-block-title mb-1">Create New Account</h3>
                                            <p class="small">Use your remail email continue with Nioboard (it's free)!</p>
                                        </div>
                                    </div>
                                    <form action="#">
                                        <Row utils="gy-3">
                                            <Col lg="12">
                                                <div class="form-group">
                                                    <FormLabel for="username">Username</FormLabel>
                                                    <FormInputWrap>
                                                        <FormInput type="text" id="username" placeholder="Enter username"/>
                                                    </FormInputWrap>
                                                </div><!-- .form-group -->
                                            </Col>
                                            <Col lg="12">
                                                <div class="form-group">
                                                    <FormLabel for="email">Email</FormLabel>
                                                    <FormInputWrap>
                                                        <FormInput type="email" id="email" placeholder="Enter email address"/>
                                                    </FormInputWrap>
                                                </div><!-- .form-group -->
                                            </Col>
                                            <Col lg="12">
                                                <div class="form-group">
                                                    <FormLabel for="password">Password</FormLabel>
                                                    <FormInputWrap>
                                                        <FormInput type="password" id="password" placeholder="Enter password"/>
                                                    </FormInputWrap>
                                                </div><!-- .form-group -->
                                            </Col>
                                            <Col lg="12">
                                                <FormCheck size="sm">
                                                    <FormCheckInput type="checkbox" value="" id="iAgree"/>
                                                    <FormCheckLabel for="iAgree">
                                                        I agree to privacy policy & terms
                                                    </FormCheckLabel>
                                                </FormCheck>
                                            </Col>
                                            <Col lg="12">
                                                <div class="d-grid">
                                                    <Button variant="primary" type="submit">Sign up</Button>
                                                </div>
                                            </Col>
                                        </Row>
                                    </form>
                                    <div class="my-3 text-center">
                                        <OverlineTitle tag="h6" class="overline-title-sep"><span>OR</span></OverlineTitle>
                                    </div>
                                    <Row utils="g-2">
                                        <Col xxl="6">
                                            <Button href="#" variant="outline-light" class="w-100">
                                                <Img src="/images/icon/d.png" alt="" class="icon" />
                                                <span class="fw-medium">Continue with Google</span>
                                            </Button>
                                        </Col>
                                        <Col xxl="6">
                                            <Button href="#" variant="outline-light" class="w-100">
                                                <Img src="/images/icon/b.png" alt="" class="icon" />
                                                <span class="fw-medium">Continue with Facebook</span>
                                            </Button>
                                        </Col>
                                    </Row>
                                    <div class="text-center mt-4">
                                        <p class="small">Already have an account? <router-link to="/auths/auth-login">Login</router-link></p>
                                    </div>
                                </CardBody>
                            </Col>
                            <Col lg="7">
                                <CardBody class="bg-darker is-theme has-mask has-mask-1 h-100 d-flex flex-column justify-content-end">
                                    <div class="mask mask-1"></div><!-- .mask-->
                                    <div class="brand-logo">
                                        <Logo />
                                    </div>
                                    <Row>
                                        <Col sm="11">
                                            <div class="mt-4">
                                                <div class="h1 title mb-3">Welcome to <br> our community</div>
                                                <p>Discover how to manage Two-Factor Authentication in Joomla. The two-factor authentication in Joomla is a very popular security practice.</p>
                                            </div>
                                        </Col>
                                    </Row>
                                    <div class="mt-5">
                                        <MediaGroup overlap>
                                            <Media size="sm" shape="circle" class="media-border border-white">
                                                <Img src="/images/avatar/a.jpg" alt="" />
                                            </Media>
                                            <Media size="sm" shape="circle" class="media-border border-white">
                                                <Img src="/images/avatar/b.jpg" alt="" />
                                            </Media>
                                            <Media size="sm" shape="circle" class="media-border border-white">
                                                <Img src="/images/avatar/c.jpg" alt="" />
                                            </Media>
                                            <Media size="sm" shape="circle" class="media-border border-white">
                                                <Img src="/images/avatar/d.jpg" alt="" />
                                            </Media>
                                        </MediaGroup>
                                        <p class="small mt-2">More than 2k people joined us, it's your turn</p>
                                    </div>
                                </CardBody>
                            </Col>
                        </Row>
                    </Card>
                </Container>
            </AppWrap>
        </AppMain>
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

export default {
    name: 'AuthRegisterPage',
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
        Button,
        OverlineTitle
    },
}
</script>
