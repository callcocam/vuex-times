import './filters';

import AppComponent from './components/app.component';
import Vue from 'vue';

require('style-loader!css-loader!bootstrap/dist/css/bootstrap.min.css');
require('bootstrap');

new Vue({
    el: '#app',
    components:{
        'app':AppComponent
    }
})