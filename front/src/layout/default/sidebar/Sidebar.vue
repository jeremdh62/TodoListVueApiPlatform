<template>
    <div class="nk-sidebar nk-sidebar-fixed is-theme" id="sidebar">
    <div class="nk-sidebar-element nk-sidebar-head">
        <div class="nk-sidebar-brand">
            <Logo isWrap />
            <div class="nk-compact-toggle me-n1">
                <Button size="md" class="btn-icon btn-no-hover compact-toggle text-light">
                    <em class="icon off ni ni-chevrons-left"></em>
                    <em class="icon on ni ni-chevrons-right"></em>
                </Button>
            </div>
           
            <div class="nk-sidebar-toggle me-n1">
                <Button size="md" class="btn-icon btn-no-hover sidebar-toggle text-light">
                    <Icon icon="arrow-left" />
                </Button>
            </div>
        </div><!-- end nk-sidebar-brand -->
    </div><!-- end nk-sidebar-element -->
    <div class="nk-sidebar-element nk-sidebar-body" v-if="sidebarItems.length > 0">
        <div class="nk-sidebar-content">
            <div class="nk-sidebar-menu" data-simplebar>
                <Menu :menu-data="sidebarItems" />
            </div><!-- .nk-sidebar-menu -->
        </div><!-- .nk-sidebar-content -->
    </div><!-- .nk-sidebar-element -->
</div><!-- .nki-sidebar -->
</template>

<script>
// import components
import Logo from '@/components/template/logo/Logo.vue';
import Menu from '@/layout/default/menu/Menu.vue';
import 'simplebar/dist/simplebar.min.js';
import Button from '@/components/template/uielements/button/Button.vue';
import Icon from '@/components/template/icon/Icon.vue';

export default {
  name: 'AppSidebar',
  components: {
    Logo,
    Menu,
    Button,
    Icon
  },
  data() {
    return {
        sidebarItems: [],
    }
  },
  async mounted(){
    this.sidebarItems = this.$store.getters['sidebarStore/getSidebar'];

    let Break = { mb: 420, sm: 576, md: 768, lg: 992, xl: 1200, xxl: 1540, any: Infinity };
    let body = document.querySelector('body');
    let appRoot = document.querySelector('.nk-app-root');
    let Win = { height: window.innerHeight, width: window.innerWidth };

    // sidebar variables 
    let sidebar = {
        classes:{
            base: 'nk-sidebar',
            toggle: 'sidebar-toggle',
            toggleActive: 'active',
            active: 'sidebar-active',
            overlay: 'sidebar-overlay',
            body: 'sidebar-shown',
            compact: 'is-compact',
            compactToggle: 'compact-toggle',
            compactToggleActive: 'active',
            compactBody:'sidebar-compact'
        },
        break: {
            main: appRoot.dataset.sidebarCollapse ? eval(`Break.${appRoot.dataset.sidebarCollapse}`) : Break.lg,
        }
    };

    let Sidebar = {
        show: function(toggle,target) {
            toggle.forEach(toggleItem => {
                toggleItem.classList.add(sidebar.classes.toggleActive);
            })
            target.classList.add(sidebar.classes.active);
            body.classList.add(sidebar.classes.body);
            let overalyTemplate = `<div class='${sidebar.classes.overlay}'></div>`
            target.insertAdjacentHTML('beforebegin', overalyTemplate);
        },
        hide: function(toggle,target) {
            toggle.forEach(toggleItem => {
                toggleItem.classList.remove(sidebar.classes.toggleActive);
            })
            target.classList.remove(sidebar.classes.active);
            body.classList.remove(sidebar.classes.body);
            let overlay = document.querySelector(`.${sidebar.classes.overlay}`);
            setTimeout(() => {
                overlay && overlay.remove();
            }, 300);
        },
        compact: function(toggle,target) {
            toggle.classList.toggle(sidebar.classes.compactToggleActive);
            target.classList.toggle(sidebar.classes.compact);
            body.classList.toggle(sidebar.classes.compactBody);
        }
    };

    let SidebarInit = function() {
        let targetSl = document.querySelector(`.${sidebar.classes.base}`);
        let toggleSl = document.querySelectorAll(`.${sidebar.classes.toggle}`);
        let compactSl = document.querySelector(`.${sidebar.classes.compactToggle}`);
        toggleSl.forEach(item => {
            item.addEventListener("click", function(e){
                e.preventDefault();
                if(sidebar.break.main > Win.width){
                    if(!targetSl.classList.contains(sidebar.classes.active)){
                        Sidebar.show(toggleSl,targetSl);
                    }else{
                        Sidebar.hide(toggleSl,targetSl);
                    }
                }
                });

                window.addEventListener("resize", function(){
                if(sidebar.break.main < Win.width){
                    Sidebar.hide(toggleSl,targetSl);
                }
                });

                document.addEventListener("mouseup", function(e){
                if(e.target.closest(`.${sidebar.classes.base}`) === null){
                    Sidebar.hide(toggleSl,targetSl);
                }
                });
            })
            //init Compact Mode
            compactSl.addEventListener("click", function(e){
                e.preventDefault();
                if(sidebar.break.main < Win.width){
                    Sidebar.compact(compactSl,targetSl);
                }
            });
        };

    SidebarInit();

  },
  watch: {
    '$i18n.locale': {
        handler: async function (val, oldVal) {
            await this.$store.dispatch('sidebarStore/getSidebar');
            this.sidebarItems = this.$store.getters['sidebarStore/getSidebar'];
        },
        deep: true
    }
  }
}
</script>