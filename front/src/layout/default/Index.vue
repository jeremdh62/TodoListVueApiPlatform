<template>
  <AppRoot sidebarCollapse="lg" navbarCollapse="lg">
    <AppMain>
      <Sidebar></Sidebar>
      <AppWrap>
         <Header></Header>
         <AppContent :content="content">
            <slot></slot>
         </AppContent>
         <Footer></Footer>
      </AppWrap>
    </AppMain>
  </AppRoot>
</template>

<script>
// @ is an alias to /src
import AppRoot from '@/layout/global/AppRoot.vue'
import AppMain from '@/layout/global/AppMain.vue'
import AppWrap from '@/layout/global/AppWrap.vue'
import AppContent from '@/layout/global/AppContent.vue'
import Sidebar from '@/layout/default/sidebar/Sidebar.vue'
import Header from '@/layout/default/header/Header.vue'
import Footer from '@/layout/default/footer/Footer.vue'

export default {
  name: 'DefaultLayout',
  components: {
    AppRoot,
    AppMain,
    AppWrap,
    AppContent,
    Sidebar,
    Header,
    Footer
  },
  props:{
    content:{
        type:String,
    }
  }
}
</script>