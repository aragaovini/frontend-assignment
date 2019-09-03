import 'Styles/main.scss';
import Vue from 'vue';
import App from './App.vue';
import router from 'Router';

new Vue({
  router,
  render: createElement => createElement(App),
  el: '#app'
});
