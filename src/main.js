import Vue from 'vue';
import App from './App.vue';
import { Button } from 'ant-design-vue';
import { Input } from 'ant-design-vue';

import VueResource from 'vue-resource';

Vue.component(Button.name, Button);
Vue.use(Input);
Vue.use(VueResource);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
