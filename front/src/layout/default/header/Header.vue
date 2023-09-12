<template>
  <div class="nk-header nk-header-fixed is-theme" style="min-height: 40px;">
        <div class="container-fluid">
            <div class="nk-header-wrap">
                <div class="nk-header-logo ms-n1">
                    <div class="nk-sidebar-toggle">
                        <Button size="sm" zoom class="btn-icon sidebar-toggle d-sm-none">
                            <Icon icon="menu" />
                        </Button>
                        <Button size="md" zoom class="btn-icon sidebar-toggle d-none d-sm-inline-flex">
                            <Icon icon="menu" />
                        </Button>
                    </div><!-- .nk-sidebar-toggle -->
                    
                    <!--<div class="nk-navbar-toggle me-2">
                        <Button size="sm" zoom class="btn-icon navbar-toggle d-sm-none">
                            <Icon icon="menu-right" />
                        </Button>
                        <Button size="md" zoom class="btn-icon navbar-toggle d-none d-sm-inline-flex">
                            <Icon icon="menu-right" />
                        </Button>
                    </div>--> <!-- disabled .nk-navbar-toggle -->
                    <Logo isWrap />
                </div>
                <nav class="header-menu nk-navbar">
                    <Nav />
                </nav>
                <div class="nk-header-tools">
                    <QuickNav class="ms-2">
                        <QuickNavItem class="dropdown">
                            <QuickNavLink data-bs-toggle="dropdown">
                                <div class="d-sm-block">
                                    <Media shape="circle" size="sm">
                                        <VueAvatar :username="userNameFormated" :size="30"/>
                                    </Media>
                                </div>
                            </QuickNavLink>
                            <UserProfileDropdown />
                        </QuickNavItem>
                    </QuickNav>
                </div><!-- .nk-header-tools -->
            </div><!-- .nk-header-wrap -->
        </div><!-- .container-fliud -->
        
    </div>
</template>

<script>
// import components
import Nav from '@/layout/default/nav/Nav.vue';
import Media from '@/components/template/media/Media.vue';
import Icon from '@/components/template/icon/Icon.vue';
import QuickNav from '@/components/template/quicknav/QuickNav.vue';
import QuickNavItem from '@/components/template/quicknav/QuickNavItem.vue';
import QuickNavLink from '@/components/template/quicknav/QuickNavLink.vue';
import Logo from '@/components/template/logo/Logo.vue';
import Button from '@/components/template/uielements/button/Button.vue';
import UserProfileDropdown from '@/components/template/user/UserProfileDropdown.vue';
import VueAvatar from "@webzlodimir/vue-avatar";

export default {
  name: 'AppHeader',
  components: {
    Nav,
    Media,
    Icon,
    QuickNav,
    QuickNavItem,
    QuickNavLink,
    Logo,
    Button,
    UserProfileDropdown,
    VueAvatar,
},
  data() {
    return {
        userNameFormated: this.$store.state.authStore.userNameFormated,
        userName: this.$store.state.authStore.userName,
    }
  },
  mounted(){

    let Break = { mb: 420, sm: 576, md: 768, lg: 992, xl: 1200, xxl: 1540, any: Infinity };
    let body = document.querySelector('body');
    let appRoot = document.querySelector('.nk-app-root');
    let Win = { height: window.innerHeight, width: window.innerWidth };

    let navbarVariables = {
        classes:{
            base: 'nk-navbar',
            toggle: 'navbar-toggle',
            toggleActive: 'active',
            active: 'navbar-active',
            overlay: 'navbar-overlay',
            body: 'navbar-shown',
        },
        break: {
            main: appRoot.dataset.sidebarCollapse ? eval(`Break.${appRoot.dataset.sidebarCollapse}`) : Break.lg,
        }
    };

    let Navbar = {
        show: function(toggle,target) {
            toggle.forEach(toggleItem => {
                toggleItem.classList.add(navbarVariables.classes.toggleActive);
            })
            target.classList.add(navbarVariables.classes.active);
            body.classList.add(navbarVariables.classes.body);
            let overalyTemplate = `<div class='${navbarVariables.classes.overlay}'></div>`
            target.insertAdjacentHTML('beforebegin', overalyTemplate);
        },
        hide: function(toggle,target) {
            toggle.forEach(toggleItem => {
                toggleItem.classList.remove(navbarVariables.classes.toggleActive);
            })
            target.classList.remove(navbarVariables.classes.active);
            body.classList.remove(navbarVariables.classes.body);
            let overlay = document.querySelector(`.${navbarVariables.classes.overlay}`);
            setTimeout(() => {
                overlay && overlay.remove();
            }, 300);
        },
        mobile: function(target){
            if(navbarVariables.break.main < Win.width){
                target.classList.remove('navbar-mobile');
            }else{
                setTimeout(() => {
                    target.classList.add('navbar-mobile');
                }, 500);
            }
        }
    }

    let NavbarInit = function() {
        let targetSl = document.querySelector(`.${navbarVariables.classes.base}`);
        let toggleSl = document.querySelectorAll(`.${navbarVariables.classes.toggle}`);
        toggleSl.forEach(item => {
            Navbar.mobile(targetSl);
            item.addEventListener("click", function(e){
                e.preventDefault();
                if(navbarVariables.break.main > Win.width){
                    if(!targetSl.classList.contains(navbarVariables.classes.active)){
                        Navbar.show(toggleSl,targetSl);
                    }else{
                        Navbar.hide(toggleSl,targetSl);
                    }
                }
            });

            window.addEventListener("resize", function(){
                if(navbarVariables.break.main < Win.width){
                    Navbar.hide(toggleSl,targetSl);
                }
                Navbar.mobile(targetSl);
            });

            document.addEventListener("mouseup", function(e){
                if(e.target.closest(`.${navbarVariables.classes.base}`) === null){
                    Navbar.hide(toggleSl,targetSl);
                }
            });
            
        })
    }

    NavbarInit()
  },
  
}
</script>
