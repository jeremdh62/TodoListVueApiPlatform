
<template>
  <AppRoot>
    <AppMain>
      <AppWrap class="align-items-center justify-content-center has-mask">
        <div class="mask mask-2"></div><!-- .mask-->
        <Container>
          <div class="nk-block">
            <div class="nk-block-content wide-sm text-center mx-auto">
                <Img src="/images/error/a.svg" alt="" class="mb-4" />
                <h2 class="nk-error-title mb-2"> OOPS! Page not found! </h2>
                <p class="nk-error-text"> We are very sorry for inconvenience. It looks like you’re try to access a page that either has been deleted or never existed. </p>
                <Button as="RouterLink" to="/" variant="primary" class="mt-1">
                  <Icon icon="arrow-left"></Icon>
                  <span> Back to home </span>
                </Button>
            </div>
          </div>
        </Container>
      </AppWrap>
    </AppMain>
  </AppRoot>
</template>
<script>
// @ is an alias to /src
import AppRoot from '@/layout/global/AppRoot.vue';
import AppMain from '@/layout/global/AppMain.vue';
import AppWrap from '@/layout/global/AppWrap.vue';
import Container from '@/components/template/layout/Container.vue';
import Button from '@/components/template/uielements/button/Button.vue';
import Icon from '@/components/template/icon/Icon.vue';
import Img from '@/components/template/img/Img.vue';

export default {
  name: 'NotFound',
  components: {
    AppRoot,
    AppMain,
    AppWrap,
    Container,
    Button,
    Icon,
    Img
  }
}
</script>
