import Vue from 'vue'
import App from './App.vue'

import WovnIcons from 'wovn-icons'

Vue.config.productionTip = false
Vue.use(WovnIcons)

new Vue({
  render: h => h(App),
}).$mount('#app')
