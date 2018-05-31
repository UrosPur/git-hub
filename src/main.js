import 'onsenui';
import Vue from 'vue';
import VueOnsen from 'vue-onsenui';
import lodash from 'vue-lodash';

Object.defineProperty(Vue.prototype, '$lodash', { value: lodash });

// Onsen UI Styling and Icons
require('onsenui/css-components-src/src/onsen-css-components.css');
require('onsenui/css/onsenui.css');

import App from './App.vue';

Vue.use(VueOnsen);

new Vue({
  el: '#app',
  template:'<app></app>',
  components: { App }
});

