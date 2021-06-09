import Vue from 'vue'
import 'aos/dist/aos.css';
import AOS from 'aos';
import App from './App.vue'
import '@/scss/style.scss'

Vue.config.productionTip = false

new Vue({
  created () {
    AOS.init({
      disable: 'mobile',
      delay: 400,
      duration: 800,
      once: true
    });
  },
  render: h => h(App)
}).$mount('#app')
