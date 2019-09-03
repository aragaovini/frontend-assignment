import 'Styles/main.scss';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import Vue from 'vue';
import App from './App.vue';
import router from 'Router';

new Vue({
  router,
  render: createElement => createElement(App),
  el: '#app'
});
