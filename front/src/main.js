import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store'

// vue app
const app = createApp(App)

// bootstrap
import "bootstrap";
// template custom css
import './assets/scss/style.scss'

// avatar
import "@webzlodimir/vue-avatar/dist/style.css";

import { Colors, monthList, today, yesterday, currentMonth } from './utilities/globalProperties.js'
import attr from '@/utilities/attr'

app.config.globalProperties.$Colors = Colors;
app.config.globalProperties.$monthList = monthList;
app.config.globalProperties.$today = today;
app.config.globalProperties.$yesterday = yesterday;
app.config.globalProperties.$currentMonth = currentMonth;

// custom directive alert 
app.directive('nk-alert', {
    mounted(elem, binding) {
        let alertTemplate = function(selector, message, variant) {
            const target = document.getElementById(selector)
            const wrapper = document.createElement('div')
            wrapper.innerHTML = `<div class="alert alert-${variant} alert-dismissible" role="alert">
                    <div>${message}</div>
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>`
            target.append(wrapper);
        };

        elem.addEventListener('click', function () {
            alertTemplate(binding.value.target, binding.value.content, binding.arg || 'primary')
        })
    }
});

// custom directive for Modal
import { Modal } from 'bootstrap';

// Modal
app.directive('nk-modal', {
    mounted(elem, binding) {
        const modalId = elem.getAttribute('href') || binding.value
        const modal = new Modal(modalId);

        elem.addEventListener('click', function (e) {
            e.preventDefault();
            modal.show();
        })
    }
});

// custom directive for Offcanvas
import { Offcanvas } from 'bootstrap';

// Offcanvas
app.directive('nk-offcanvas', {
    mounted(elem, binding) {
        const offcanvasId = elem.getAttribute('href') || binding.value
        const offcanvas = new Offcanvas(offcanvasId);

        elem.addEventListener('click', function (e) {
            e.preventDefault();
            offcanvas.show();
        })
    }
});

// custom directive for Tab
import { Tab } from 'bootstrap';

// Tab
app.directive('nk-tab', {
    mounted(elem, binding) {
        if(binding.value){
            let setAttrName = elem.tagName === 'a' ? 'href' : 'data-bs-target'
            attr(elem,setAttrName,binding.value);
        }
        const tab = new Tab(elem);
        elem.addEventListener('click', function (e) {
            e.preventDefault();
            tab.show();
        })
    }
});

// custom directive toast
import { Toast } from 'bootstrap';

app.directive('nk-toast', {
    mounted(elem, binding){
        const toastLive = document.getElementById(binding.value);
        elem.addEventListener('click', function () {
            const toast = new Toast(toastLive);
            toast.show();
        })
    }
})


// custom directive for Tooltip
import { Popover } from 'bootstrap';

// popover
app.directive('nk-popover', {
    mounted(elem, binding) {
        new Popover(elem, {
            placement: binding.arg || 'top',
            title: binding.value.title !== undefined ? binding.value.title : '',
            content: binding.value.content !== undefined ? binding.value.content : '',
            customClass: binding.value.customClass !== undefined ? binding.value.customClass : '',
            trigger:binding.value.trigger !== undefined ? binding.value.trigger : 'click',
            container:binding.value.container !== undefined ? binding.value.container : 'body',
            offset:binding.value.offset !== undefined ? binding.value.offset : '0,8',
            html:true,
        });
    }
});

// custom directive for Tooltip
import { Tooltip } from 'bootstrap';

// tooltip
app.directive('nk-tooltip', {
    mounted(elem, binding) {
        new Tooltip(elem, {
            placement: binding.arg || 'top',
            title: binding.value,
            html: true
        });
    }
});

// pristine form validation
import Pristine from 'pristinejs';
app.config.globalProperties.$Pristine = Pristine;

app.use(store)
app.use(router)

app.mount('#app')