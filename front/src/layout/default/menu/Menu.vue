<template>
    <ul class="nk-menu">
        <template v-for="menuItem in menuData" :key="menuItem.id">
            <MenuHeading v-if="menuItem.heading" :title="menuItem.heading"></MenuHeading>
            <MenuButton v-if="!menuItem.heading && menuItem.button" :title="menuItem.title" :url="menuItem.url" :icon="menuItem.icon" :variant="menuItem.variant"></MenuButton>
            <MenuList v-if="!menuItem.heading && !menuItem.button" :url="menuItem.url" :title="menuItem.title" :icon="menuItem.icon" :submenu="menuItem.subMenus" :isurlexternal="menuItem.isUrlExternal">
                <ul class="nk-menu-sub">                    
                    <template v-for="menuItem in menuItem.subMenus" :key="menuItem.id">
                        <MenuHeading v-if="menuItem.heading" :title="menuItem.heading"></MenuHeading>
                        <MenuButton v-if="!menuItem.heading && menuItem.button" :title="menuItem.title" :url="menuItem.url" :icon="menuItem.icon" :variant="menuItem.variant"></MenuButton>
                        <MenuList v-if="!menuItem.heading && !menuItem.button" :url="menuItem.url" :title="menuItem.title" :icon="menuItem.icon" :submenu="menuItem.subMenus" :isurlexternal="menuItem.isUrlExternal">
                            <ul class="nk-menu-sub">
                                <template v-for="menuItem in menuItem.subMenus" :key="menuItem.id">
                                    <MenuHeading v-if="menuItem.heading" :title="menuItem.heading"></MenuHeading>
                                    <MenuButton v-if="!menuItem.heading && menuItem.button" :title="menuItem.title" :url="menuItem.url" :icon="menuItem.icon" :variant="menuItem.variant"></MenuButton>
                                    <MenuList v-if="!menuItem.heading && !menuItem.button" :url="menuItem.url" :title="menuItem.title" :icon="menuItem.icon" :submenu="menuItem.subMenus" :isurlexternal="menuItem.isUrlExternal">
                                        <ul class="nk-menu-sub">
                                            <template v-for="menuItem in menuItem.subMenus" :key="menuItem.id">
                                                <MenuHeading v-if="menuItem.heading" :title="menuItem.heading"></MenuHeading>
                                                <MenuButton v-if="!menuItem.heading && menuItem.button" :title="menuItem.title" :url="menuItem.url" :icon="menuItem.icon" :variant="menuItem.variant"></MenuButton>
                                                <MenuList v-if="!menuItem.heading" :url="menuItem.url" :title="menuItem.title" :icon="menuItem.icon" :submenu="menuItem.subMenus" :isurlexternal="menuItem.isUrlExternal"></MenuList>
                                            </template>
                                        </ul>
                                    </MenuList>
                                </template>
                            </ul>
                        </MenuList>
                    </template>
                </ul>
            </MenuList>
        </template>
    </ul><!-- .nk-menu -->
</template>

<script>

import MenuHeading from '@/layout/default/menu/MenuHeading.vue';
import MenuList from '@/layout/default/menu/MenuList.vue';
import MenuButton from '@/layout/default/menu/MenuButton.vue';

import getParents from '@/utilities/getParents';
import slideUp from '@/utilities/slideUp';
import slideDown from '@/utilities/slideDown';

const menu = {
    classes: {
        main: 'nk-menu',
        item:'nk-menu-item',
        link:'nk-menu-link',
        toggle: 'nk-menu-toggle',
        sub: 'nk-menu-sub',
        subparent: 'has-sub',
        active: 'active',
        current: 'current-page'
    },
}


export default {
    name: 'MenuContainer',
    components: {
        MenuHeading,
        MenuList,
        MenuButton,
    },
    props: {
        menuData:{
            type:Array,
            default: () => []
        }
    },
    mounted(){
        setTimeout(() => {
            this.currentLink(`.${menu.classes.link}`);
            this.dropdownInit(`.${menu.classes.toggle}`);
        }, 100);
    },
    methods: {
        currentLink(selector) {
            let elm = document.querySelectorAll(selector);
            elm.forEach(function(item){
                var activeRouterLink = item.classList.contains('router-link-active');
                if (activeRouterLink) {
                    let parents = getParents(item,`.${menu.classes.main}`, menu.classes.item);
                    parents.forEach(parentElemets =>{
                        parentElemets.classList.add(menu.classes.active, menu.classes.current);
                        let subItem = parentElemets.querySelector(`.${menu.classes.sub}`);
                        subItem !== null && (subItem.style.display = "block")
                    })
                    item.scrollIntoView({ block: "start"})
                    
                } else {
                    item.parentElement.classList.remove(menu.classes.active, menu.classes.current);
                }
            })
        },
        dropdownLoad(elm) {
            let parent = elm.parentElement;
            if(!parent.classList.contains(menu.classes.subparent)){
                parent.classList.add(menu.classes.subparent);
            }
        },
        dropdownToggle(elm) {
            let parent = elm.parentElement;
            let nextelm = elm.nextElementSibling;
            let speed = nextelm.children.length > 5 ? 400 + nextelm.children.length * 10 : 400;
            if(!parent.classList.contains(menu.classes.active)){
            parent.classList.add(menu.classes.active);
                slideDown(nextelm,speed);
            }else{
            parent.classList.remove(menu.classes.active);
                slideUp(nextelm,speed);
            }
        },
        closeSiblings(elm) {
            let parent = elm.parentElement;
            let siblings = parent.parentElement.children;
            Array.from(siblings).forEach(item => {
            if(item !== parent){
                item.classList.remove(menu.classes.active);
                if(item.classList.contains(menu.classes.subparent)){
                let subitem = item.querySelectorAll(`.${menu.classes.sub}`);
                subitem.forEach(child => {
                    child.parentElement.classList.remove(menu.classes.active);
                    slideUp(child,400);
                })
                }
            }
            });
        },
        dropdownInit(selector){
            const elm = document.querySelectorAll(selector);
            elm.forEach((item, key, parent, vue = this) => {
                this.dropdownLoad(item);
                item.addEventListener("click", function(e){
                    e.preventDefault();
                    vue.dropdownToggle(item);
                    vue.closeSiblings(item);
                });
            })
        }

    }
    }
</script>
