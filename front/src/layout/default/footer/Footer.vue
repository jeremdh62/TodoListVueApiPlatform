<template>
    <div class="nk-footer">
        <div class="container-fluid">
            <div class="nk-footer-wrap">
                <div class="nk-footer-copyright"> 
                    &copy; Keep
                </div>
                <!-- <div class="nk-footer-links">
                    <Nav class="nav-sm">
                        <NavItem>
                            <Link class="nav-link" as="RouterLink" to="/">About</Link>
                        </NavItem>
                        <NavItem>
                            <Link class="nav-link" as="RouterLink" to="/">Support</Link>
                        </NavItem>
                        <NavItem>
                            <Link class="nav-link" as="RouterLink" to="/">Blog</Link>
                        </NavItem>
                    </Nav>
                </div>-->
            </div>
        </div>
    </div><!-- .nk-footer -->
</template>

<script>
import Link from '@/components/template/link/Link.vue';
import Nav from '@/components/template/uielements/nav/Nav.vue';
import NavItem from '@/components/template/uielements/nav/NavItem.vue';
//import NavLink from '@/components/template/uielements/nav/NavLink.vue';

export default {
    name: 'AppFooter',
    components: {
        Link,
        Nav,
        NavItem,
        //NavLink
    }
}
</script>
