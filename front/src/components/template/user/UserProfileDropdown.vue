<template>
    <DropdownMenu size="md">
        <DropdownContent class="dropdown-content-x-lg py-3 border-bottom border-light">
            <MediaGroup>
                <Media size="xl" middle shape="circle">
                 <VueAvatar :size="50" :username="userNameFormated" /> 
                </Media>
                <MediaText>
                    <div class="lead-text">{{ userName }}</div>
                    <span class="sub-text">{{ email }}</span>
                </MediaText>
            </MediaGroup>
        </DropdownContent>
        <DropdownContent class="dropdown-content-x-lg py-3">
            <List class="link-list">
                <ListItem>
                    <a href="#" @click.prevent="handleSignout">
                        <Icon icon="signout" /> 
                        <span> Logout </span>
                    </a>
                </ListItem>
            </List>
        </DropdownContent>
    </DropdownMenu>
</template>

<script>
// import components
import DropdownMenu from '@/components/template/uielements/dropdown/DropdownMenu.vue';
import DropdownContent from '@/components/template/uielements/dropdown/DropdownContent.vue';
import MediaGroup from '@/components/template/media/MediaGroup.vue';
import MediaText from '@/components/template/media/MediaText.vue';
import Media from "@/components/template/media/Media.vue";
import Icon from '@/components/template/icon/Icon.vue';
import List from '@/components/template/list/List.vue';
import ListItem from '@/components/template/list/ListItem.vue';
import VueAvatar from "@webzlodimir/vue-avatar";
//import { mapGetters } from 'vuex';

export default {
    name: 'UserProfileDropdown',
    methods:{
        handleSignout(){
            this.$store.dispatch('authStore/logout');
            //this.$router.push('/auths/auth-login');
        }
    },
    components:{
        DropdownMenu,
        DropdownContent,
        MediaGroup,
        Media,
        MediaText,
        Icon,
        List,
        ListItem,
        VueAvatar
    },
    data() {
        return {
            userNameFormated: this.$store.state.authStore.userNameFormated,
            userName: this.$store.state.authStore.userName,
            email: this.$store.state.authStore.jwtDecoded.username,
        }
    }
}
</script>
