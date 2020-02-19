import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './main.css';

Vue.config.productionTip = false;

// Initiate our main Vue instance, set up the router and mount it to #app
new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
