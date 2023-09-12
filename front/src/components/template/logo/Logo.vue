<template>
    <router-link to="/" class="logo-link">
        <div :class="isWrap ? 'logo-wrap' : ''" v-if="isKeep">
            <img :width="logoWidth" :height="logoHeight" :src="isDark ? logo.keepLogoDark : logo.keepLogo" alt="logo" />
             <h4>Todo App</h4>
        </div>
        <div :class="isWrap ? 'logo-wrap' : ''" v-else>
            <img :width="logoWidth" :height="logoHeight" :src="logo.default" alt="logo" />
             <h4>Todo App</h4>
        </div>
    </router-link>
</template>
<script>
export default {
  name: 'LogoLink',
    props: {
        isKeep: {
            type: Boolean,
            default: false,
        },
        isDark: {
            type: Boolean,
            default: false,
        },
        isWrap: {
            type: Boolean,
            default: false,
        },
        logoWidth: {
            type: String,
            default: '',
        },
        logoHeight: {
            type: String,
            default: '',
        },
        
    },
    data() {
        return {
            logo: {
                default: "/favicon.png",
                keepLogo: "/favicon.png",
                keepLogoDark: "/favicon.png",
            }
        }
    },
}
</script>
