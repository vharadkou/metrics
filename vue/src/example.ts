import Vue from 'vue';
import AppComponent from './app.vue';

// mount
new Vue({
    el: '#example',
    render: h => h(AppComponent, {
        props: { propMessage: 'World' }
    })
})