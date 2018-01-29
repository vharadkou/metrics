import Vue from 'vue';
import AppComponent from './app.vue';

// mount
new Vue({
    el: '#app',
    render: h => h(AppComponent, {
        props: { propMessage: 'World' }
    })
})