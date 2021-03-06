import Vue from 'vue';
import fastClick from 'fastclick';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import App from './App.vue';
import router from './router';
import store from './store';
import 'swiper/swiper-bundle.min.css';
import './assets/styles/reset.css';
import './assets/styles/border.css';
import './assets/styles/iconfont.css';

Vue.config.productionTip = false;
fastClick.attach(document.body);
Vue.use(VueAwesomeSwiper /* { default options with global component } */);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  // render: (h) => h(App),
  // }).$mount('#app');
  components: { App },
  template: '<App/>',
});
