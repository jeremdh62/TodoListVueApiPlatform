// auths pages
const AuthRegister = () => import('@/pages/auths/AuthRegister.vue');
const AuthLogin  = () => import('@/pages/auths/AuthLogin.vue');
const AuthReset = () => import('@/pages/auths/AuthReset.vue');

const routeAuth = [
    {
        path: '/auths/auth-register',
        name: 'Auth Register',
        component: AuthRegister
    },
    {
        path: '/auths/auth-login',
        name: 'Auth Login',
        component: AuthLogin,
    },
    {
        path: '/auths/auth-reset',
        name: 'Forgot Password',
        component: AuthReset
    },
];

export default routeAuth;